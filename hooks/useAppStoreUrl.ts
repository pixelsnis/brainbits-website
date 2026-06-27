"use client";

import { APP_STORE_URL } from "@/lib/constants/links";
import { getAppStoreUrl, subscribeToUtmChanges } from "@/lib/utm";
import { useSyncExternalStore } from "react";

export function useAppStoreUrl() {
  return useSyncExternalStore(
    subscribeToUtmChanges,
    getAppStoreUrl,
    () => APP_STORE_URL,
  );
}
