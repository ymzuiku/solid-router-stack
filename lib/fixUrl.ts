// 计算URL
export function fixUrl(url: string, params?: Record<string, string>): string {
  if (params) {
    return url + "?" + new URLSearchParams(params).toString();
  }
  return url;
}
