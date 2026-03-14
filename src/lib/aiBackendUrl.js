const LOCAL_DEV_AI_BACKEND_URL = "http://localhost:8787";

export function getAiBackendBaseUrl() {
  const configuredUrl = import.meta.env.VITE_AI_BACKEND_URL?.trim();
  if (configuredUrl) return configuredUrl.replace(/\/+$/, "");
  if (import.meta.env.DEV) return LOCAL_DEV_AI_BACKEND_URL;
  return "";
}

export function getAiBackendMissingConfigMessage() {
  return "AI backend is not configured. Set VITE_AI_BACKEND_URL and redeploy.";
}
