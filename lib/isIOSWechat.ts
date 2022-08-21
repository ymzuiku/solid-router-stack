// 计算是否为 ios 的微信浏览器，微信浏览器使用模拟路由，以取消底部的微信导航
let isIOSWechatApp: boolean;
export function isIOSWechat(): boolean {
  if (isIOSWechatApp !== void 0) {
    return isIOSWechatApp;
  }
  const ua = navigator.userAgent.toLocaleLowerCase();
  isIOSWechatApp = new RegExp("(iphone|ipod|ipad)").test(ua) && new RegExp("(micromessenger)").test(ua);
  return isIOSWechatApp;
}
