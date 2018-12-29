import  $  from "jquery";

const getJSONP = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url,
      data,
      dataType: "jsonp",
      // jsonp: "_callback",
      success: res => {
        if (typeof res == "string") {
          res = JSON.parse(res);
        }
        resolve(res);
      },
      error: res => {
        resolve(res);
      }
    });
  });
};

const getAppUrl = "http://mp.sina.com.cn/aj/intelligent/list";


export const getApp = async (data) => {
  let res = await getJSONP(getAppUrl,data);
  console.log(res,'真是')
  return res;
};
