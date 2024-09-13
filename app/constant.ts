export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_API_HOST = "https://api.nextchat.dev";
export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "",
  OpenAI = "/api/openai",
  Anthropic = "/api/anthropic",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const NARROW_SIDEBAR_WIDTH = 100;

export const DEFAULT_SIDEBAR_WIDTH = 340;
export const MAX_SIDEBAR_WIDTH = 440;
export const MIN_SIDEBAR_WIDTH = 230;

export const WINDOW_WIDTH_SM = 480;
export const WINDOW_WIDTH_MD = 768;
export const WINDOW_WIDTH_LG = 1120;
export const WINDOW_WIDTH_XL = 1440;
export const WINDOW_WIDTH_2XL = 1980;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
}

export enum ModelProvider {
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
}

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) => `v1beta/models/${modelName}:generateContent`,
  VisionChatPath: (modelName: string) => `v1beta/models/${modelName}:generateContent`,
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini-2024-07-18";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-turbo": "2023-12",
  "gpt-4-turbo-2024-04-09": "2023-12",
  "gpt-4-turbo-preview": "2023-12",
  "gpt-4o": "2023-10",
  "gpt-4o-2024-05-13": "2023-10",
  "gpt-4o-2024-08-06": "2023-10",
  "chatgpt-4o-latest": "2023-10",
  "gpt-4o-mini": "2023-10",
  "gpt-4o-mini-2024-07-18": "2023-10",
  "gpt-4-vision-preview": "2023-04",
  "o1-mini": "2023-10",
  "o1-preview": "2023-10",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  "gemini-pro": "2023-12",
  "gemini-pro-vision": "2023-12",
};

const openaiModels = [
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-1106",
  "gpt-3.5-turbo-0125",
  "gpt-4",
  "gpt-4-0613",
  "gpt-4-32k",
  "gpt-4-32k-0613",
  "gpt-4-turbo",
  "gpt-4-turbo-preview",
  "gpt-4o",
  "gpt-4o-2024-05-13",
  "gpt-4o-2024-08-06",
  "chatgpt-4o-latest",
  "gpt-4o-mini",
  "gpt-4o-mini-2024-07-18",
  "gpt-4-vision-preview",
  "gpt-4-turbo-2024-04-09",
  "gpt-4-1106-preview",
  "dall-e-3",
  "o1-mini",
  "o1-preview"
];

const googleModels = [
  "gemini-1.0-pro",
  "gemini-1.5-pro-latest",
  "gemini-1.5-flash-latest",
  "gemini-pro-vision",
];

const anthropicModels = [
  "claude-instant-1.2",
  "claude-2.0",
  "claude-2.1",
  "claude-3-sonnet-20240229",
  "claude-3-opus-20240229",
  "claude-3-haiku-20240307",
  "claude-3-5-sonnet-20240620",
];

const baiduModels = [
  "ernie-4.0-turbo-8k",
  "ernie-4.0-8k",
  "ernie-4.0-8k-preview",
  "ernie-4.0-8k-preview-0518",
  "ernie-4.0-8k-latest",
  "ernie-3.5-8k",
  "ernie-3.5-8k-0205",
  "ernie-speed-128k",
  "ernie-speed-8k",
  "ernie-lite-8k",
  "ernie-tiny-8k",
];

const bytedanceModels = [
  "Doubao-lite-4k",
  "Doubao-lite-32k",
  "Doubao-lite-128k",
  "Doubao-pro-4k",
  "Doubao-pro-32k",
  "Doubao-pro-128k",
];

const alibabaModes = [
  "qwen-turbo",
  "qwen-plus",
  "qwen-max",
  "qwen-max-0428",
  "qwen-max-0403",
  "qwen-max-0107",
  "qwen-max-longcontext",
];

const tencentModels = [
  "hunyuan-pro",
  "hunyuan-standard",
  "hunyuan-lite",
  "hunyuan-role",
  "hunyuan-functioncall",
  "hunyuan-code",
  "hunyuan-vision",
];

const moonshotModes = ["moonshot-v1-8k", "moonshot-v1-32k", "moonshot-v1-128k"];

const iflytekModels = [
  "general",
  "generalv3",
  "pro-128k",
  "generalv3.5",
  "4.0Ultra",
];

let seq = 1000; // 内置的模型序号生成器从1000开始
export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
      sorted: 1, // 这里是固定的，确保顺序与之前内置的版本一致
    },
  })),
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "azure",
      providerName: "Azure",
      providerType: "azure",
      sorted: 2,
    },
  })),
  ...googleModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
      sorted: 3,
    },
  })),
  ...anthropicModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "anthropic",
      providerName: "Anthropic",
      providerType: "anthropic",
      sorted: 4,
    },
  })),
  ...baiduModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "baidu",
      providerName: "Baidu",
      providerType: "baidu",
      sorted: 5,
    },
  })),
  ...bytedanceModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "bytedance",
      providerName: "ByteDance",
      providerType: "bytedance",
      sorted: 6,
    },
  })),
  ...alibabaModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "alibaba",
      providerName: "Alibaba",
      providerType: "alibaba",
      sorted: 7,
    },
  })),
  ...tencentModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "tencent",
      providerName: "Tencent",
      providerType: "tencent",
      sorted: 8,
    },
  })),
  ...moonshotModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "moonshot",
      providerName: "Moonshot",
      providerType: "moonshot",
      sorted: 9,
    },
  })),
  ...iflytekModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "iflytek",
      providerName: "Iflytek",
      providerType: "iflytek",
      sorted: 10,
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const internalWhiteWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];

export const SIDEBAR_ID = "sidebar";
