import myAjax from './myAjax';
const BASEURL = "http://localhost:80/api";
const ALLTYPEURL = "https://www.apiopen.top/satinGodApi?type=1&page=1";
const TEXTTYPEURL = "https://www.apiopen.top/satinGodApi?type=2&page=1";
const PICTYPEURL = "https://www.apiopen.top/satinGodApi?type=3&page=1";
const VIDEOTYPEURL= "https://www.apiopen.top/satinGodApi?type=5&page=1"

export const allType = async () => {
  let res = await myAjax(ALLTYPEURL);
  console.log(res,'allType')
  return res;
};
export const textType = async () => {
  let res = await myAjax(TEXTTYPEURL);
  return res;
};
export const picType = async () => {
  let res = await myAjax(PICTYPEURL);
  return res;
};
