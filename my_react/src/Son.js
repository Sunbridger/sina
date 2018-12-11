import $ from 'jquery';
export const SonFn = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url:" http://api.avatardata.cn/ActNews/Query?key=064b169f53424be296618ec5ae9dfd24&keyword=奥巴马",
        dataType:'jsonp',
        timeout:3000,
        success:(res)=>{
            console.log(res)
            resolve(res)
        },
        error:resolve
      });
    });
  };