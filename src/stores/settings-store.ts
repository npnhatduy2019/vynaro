/**
 * Vynaro · settings store (Zustand)
 *
 * Only non-sensitive preferences are persisted here. API keys remain in the
 * secure key manager / credential store.
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LlmProviderKind, TtsProviderKind } from "../ipc/types.gen";
import type { Locale } from "../lib/i18n";

interface SettingsState {
  locale: Locale;
  llmDefaultProvider: LlmProviderKind;
  ttsDefaultProvider: TtsProviderKind;
  autoSaveIntervalSec: number;
  setLocale: (locale: string) => void;
  setLlmDefault: (provider: LlmProviderKind) => void;
  setTtsDefault: (provider: TtsProviderKind) => void;
  setAutoSaveInterval: (sec: number) => void;
}

function asLocale(locale: string): Locale {
  if (locale === "vi-VN" || locale.startsWith("vi")) return "vi-VN";
  if (locale === "en-US" || locale.startsWith("en")) return "en-US";
  return "zh-CN";
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      locale: "vi-VN",
      llmDefaultProvider: "open-ai",
      ttsDefaultProvider: "edge",
      autoSaveIntervalSec: 60,
      setLocale: (locale) => set({ locale: asLocale(locale) }),
      setLlmDefault: (provider) => set({ llmDefaultProvider: provider }),
      setTtsDefault: (provider) => set({ ttsDefaultProvider: provider }),
      setAutoSaveInterval: (sec) => set({ autoSaveIntervalSec: sec }),
    }),
    { name: "vynaro.settings" },
  ),
);
