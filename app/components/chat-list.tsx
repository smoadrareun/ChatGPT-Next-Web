import DeleteIcon from "../icons/delete.svg";
import BotIcon from "../icons/bot.svg";

import styles from "./home.module.scss";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";

import { useChatStore } from "../store";

import Locale from "../locales";
import { Link, useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { MaskAvatar } from "./mask";
import { Mask } from "../store/mask";
import { useRef, useEffect } from "react";
import { showConfirm } from "./ui-lib";

function getMatchedTitle(title: string, searchText?: string) {
  if (!searchText) {
    return title;
  }
  const lowerCaseTitle = title.toLowerCase();
  const lowerCaseMatchedText = searchText.toLowerCase();
  const startIndex = lowerCaseTitle.indexOf(lowerCaseMatchedText);

  if (startIndex === -1) {
    return title;
  }

  const endIndex = startIndex + searchText.length;

  return (
    <>
      {title.slice(0, startIndex)}
      <span style={{ color: "red" }}>{title.slice(startIndex, endIndex)}</span>
      {title.slice(endIndex)}
    </>
  );
}
export function ChatItem(props: {
  onClick?: () => void;
  onDelete?: () => void;
  title: string;
  count: number;
  time: string;
  selected: boolean;
  id: string;
  index: number;
  narrow?: boolean;
  matchedMessageCount?: number;
  searchText?: string;
  mask: Mask;
}) {
  const draggableRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (props.selected && draggableRef.current) {
      draggableRef.current?.scrollIntoView({
        block: "center",
      });
    }
  }, [props.selected]);
  return (
    <Draggable
      draggableId={`${props.id}`}
      index={props.index}
      isDragDisabled={!!props.searchText}
    >
      {(provided) => (
        <div
          className={`${styles["chat-item"]} ${
            props.selected && styles["chat-item-selected"]
          }`}
          onClick={props.onClick}
          ref={(ele) => {
            draggableRef.current = ele;
            provided.innerRef(ele);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          title={`${props.title}\n${Locale.ChatItem.ChatItemCount(
            props.count,
          )}`}
        >
          {props.narrow ? (
            <div className={styles["chat-item-narrow"]}>
              <div className={styles["chat-item-avatar"] + " no-dark"}>
                <MaskAvatar mask={props.mask} />
              </div>
              <div className={styles["chat-item-narrow-count"]}>
                {props.count}
              </div>
            </div>
          ) : (
            <>
              <div className={styles["chat-item-title"]}>
                {getMatchedTitle(props.title, props.searchText)}
              </div>
              <div className={styles["chat-item-info"]}>
                {props.matchedMessageCount && !!props.searchText ? (
                  <div className={styles["chat-item-count"]}>
                    {Locale.ChatItem.ChatItemSearchResultCount(
                      props.matchedMessageCount,
                    )}
                  </div>
                ) : (
                  <div className={styles["chat-item-count"]}>
                    {Locale.ChatItem.ChatItemCount(props.count)}
                  </div>
                )}

                <div className={styles["chat-item-date"]}>{props.time}</div>
              </div>
            </>
          )}

          <div
            className={styles["chat-item-delete"]}
            onClickCapture={props.onDelete}
          >
            <DeleteIcon />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export function ChatList(props: { narrow?: boolean }) {
  const [
    searchText,
    filteredSessions,
    selectedIndex,
    selectSession,
    moveSession,
  ] = useChatStore((state) => [
    state.searchText,
    state.filteredSessions,
    state.currentSessionIndex,
    state.selectSession,
    state.moveSession,
  ]);
  const chatStore = useChatStore();
  const navigate = useNavigate();

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    moveSession(source.index, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="chat-list">
        {(provided) => (
          <div
            className={styles["chat-list"]}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredSessions.map((item, i) => (
              <ChatItem
                title={item.topic}
                time={new Date(item.lastUpdate).toLocaleString()}
                count={item.messages.length}
                key={item.id}
                id={item.id}
                index={i}
                selected={i === selectedIndex}
                onClick={() => {
                  navigate(Path.Chat);
                  selectSession(i);
                }}
                onDelete={async () => {
                  if (
                    !props.narrow ||
                    (await showConfirm(Locale.Home.DeleteChat))
                  ) {
                    chatStore.deleteSession(i);
                  }
                }}
                narrow={props.narrow}
                mask={item.mask}
                matchedMessageCount={item.matchedMessageCount}
                searchText={searchText}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
