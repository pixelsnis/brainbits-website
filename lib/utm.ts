import { APP_STORE_URL } from "@/lib/constants/links";

export const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

const STORAGE_KEY = "brainbits_utm";
export const UTM_CHANGE_EVENT = "brainbits:utm";

export function parseUtmParams(searchParams: URLSearchParams): UtmParams {
  const params: UtmParams = {};

  for (const key of UTM_PARAMS) {
    const value = searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  }

  return params;
}

export function saveUtmParams(params: UtmParams): UtmParams {
  if (typeof window === "undefined" || Object.keys(params).length === 0) {
    return getStoredUtmParams();
  }

  const merged = { ...getStoredUtmParams(), ...params };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  window.dispatchEvent(new Event(UTM_CHANGE_EVENT));
  return merged;
}

export function subscribeToUtmChanges(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(UTM_CHANGE_EVENT, callback);
  return () => window.removeEventListener(UTM_CHANGE_EVENT, callback);
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UtmParams;
  } catch {
    return {};
  }
}

export function appendUtmToUrl(baseUrl: string, params?: UtmParams): string {
  const utm = params ?? getStoredUtmParams();
  const entries = Object.entries(utm).filter(
    (entry): entry is [(typeof UTM_PARAMS)[number], string] =>
      Boolean(entry[1]),
  );

  if (entries.length === 0) {
    return baseUrl;
  }

  const url = new URL(baseUrl);
  for (const [key, value] of entries) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

export function getAppStoreUrl(): string {
  return appendUtmToUrl(APP_STORE_URL);
}

export function isAppStoreUrl(url: string): boolean {
  return url.startsWith(APP_STORE_URL);
}

export function buildSiteUrl(path: string, utm: UtmParams): string {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://usebrainbits.com";

  return appendUtmToUrl(`${origin}${path}`, utm);
}
