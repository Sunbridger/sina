import $ from 'jquery';
export default (url)=> {
  return new Promise(resolve=>{
    $.ajax({
      url,
      method:'GET',
      // dataType:'jsonp',
      // jsonpCallback : "_Callback",
      success:res=>{
        if(typeof res=='string'){
          res=JSON.parse(res);
        }
        resolve(res);
      }
    })
  })
}