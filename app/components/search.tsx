import { ChatMessage, ChatFilteredSession, useChatStore } from "../store";
import Locale from "../locales";

export function Search(props: {}) {
  const {
    sessions,
    searchText,
    updateSearchText,
    selectSession,
    currentSession,
    updateFilteredSessions,
  } = useChatStore();

  const isValid = (m: ChatMessage) => m.content && !m.isError && !m.streaming;
  const handleFilteredSessions = (_searchText: string) => {
    updateSearchText(_searchText);

    if (!_searchText) {
      const i = sessions.findIndex((s) => s.id === currentSession().id);
      selectSession(i);
      updateFilteredSessions(sessions);

      return;
    }

    const _filteredSessions: ChatFilteredSession[] = [];
    sessions.forEach((session, i) => {
      const _session = {
        ...session,
        matchedMessageCount: 0,
        sessionIndex: i,
      };

      const messages = _session.messages;
      for (const message of messages) {
        if (isValid(message) && message.content.includes(_searchText)) {
          _session.matchedMessageCount++;
        }
      }
      if (_session.topic.includes(_searchText)) {
        _filteredSessions.push(_session);
        return;
      }
      if (_session.matchedMessageCount > 0) {
        _filteredSessions.push(_session);
      }
    });

    updateFilteredSessions(
      _filteredSessions.length ? _filteredSessions : sessions,
    );
  };
  return (
    <input
      type="text"
      placeholder={Locale.Select.Search}
      value={searchText}
      onChange={(e) => {
        handleFilteredSessions(e.target.value);
      }}
    />
  );
}
