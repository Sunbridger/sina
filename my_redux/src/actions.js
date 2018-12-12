const action = (type, payload = {}) => {
  return { type, ...payload };
};
export const text = "text";
export const pic = "pic";
export const getText =()=> action(text);
export const getPic =()=> action(pic);//以上两个特意为saga准备监听异步
export const topic = "topic";
export const getTopic =(pic)=> action(topic,{pic});
export const totext = "totext";
export const getTotext =(text)=> action(totext,{text});