import React, { Component } from "react";
export default class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artLink:[1]
    };
  }
    oneofOk(){
        let how = this.state.artLink;
        var ok;
        how.forEach((el,index)=>{
          if(this.state['linkErr'+index]===false){
            ok=true;
          }
        });
        return ok;
    }

    checkLink(url,num){
    if (url.toString().indexOf("http") == -1||url==''||url.length== 0) {
      this.setState({
        [num]:true
      },()=>{
        let ok = this.oneofOk();
        if(ok&&this.state.emailErr===false){
          this.setState({
            canSend:true
          })
        }else{
          this.setState({
            canSend:false
          })
        }
      });
    }else{
      this.setState({
        [num]:false
      },()=>{
        if(this.state.emailErr===false){
          this.setState({
            canSend:true
          })
        }else{
          this.setState({
            canSend:false
          })
        }
      })
    }
  }
  // checkInfo(){
  //   let ok=this.oneofOk();
  //   setTimeout(()=>{
  //     if(ok&&this.state.emailErr===false){
  //       this.setState({
  //         canSend:true
  //       })
  //     }
  //   },5000)
  // }


  checkEmail(value){
    var regexMail=new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/);
    if (!regexMail.test(value)||value==''||value.length== 0) {
      this.setState({
        emailErr:true,
        canSend:false
      });
    }else{
      this.setState({
        emailErr: false
      },()=>{
        var ok = this.oneofOk();
        let {emailErr} = this.state;
        if(!emailErr&&ok){
          this.setState({
            canSend:true
          })
        }else{
          this.setState({
            canSend:false
          })
        }
      })
    }
  }
  submit(){
    let how = this.state.artLink;
    let okURL=[];
    let email=this.state.email
    how.forEach((el,index)=>{
      if(!this.state['linkErr'+index]&&this.state['linkErr'+index]!=undefined){
        okURL.push(this.state[index])
      }
    });
    console.log(okURL,email,'反馈信息提交')
  }
  addLink(){
    let artLink = this.state.artLink;
    artLink.push(1);
    this.setState({
      artLink
    })
  }
  render() {
    console.log(this.state,'sssss')
    return (
      <div>
        <section className="lift_wrapper">
          <h1 className="que_title">问题反馈：文章一直处于待审状态？</h1>
            {
              this.state.artLink.map((el,index)=>{
                return (
                  <aside key={index} className={`c_sl_h2 ${this.state['linkErr'+index]?"error_status":""}`}>
                    <div className="content_title">
                    {index==0&&<span className="red_star">*</span>}
                    我的文章（{index+1}）链接</div>
                    <textarea
                      ref="input"
                      className={`c_sl_area`}
                      type="text"
                      placeholder={"输入链接"}
                      onBlur={(e)=>{this.checkLink(e.target.value,('linkErr'+index))}}
                      onChange={(e)=>{this.setState({[index]: e.target.value});}}
                    />
                    <p className="err_msg">文章链接有错误</p>
                  </aside>
                )
              })
            }
            <div className='add_link' onClick={this.addLink.bind(this)}>
              <p><span className='add_icon'>+</span>添加文章链接</p>
            </div>
            <aside className={`c_sl_h2 ${this.state.emailErr?"error_status":""}`}>
              <div className="content_title"><span className="red_star">*</span>您的邮箱（处理结果会通过邮件反馈）</div>
              <textarea
                ref="input"
                className={`c_sl_area`}
                type="text"
                placeholder={"输入邮箱"}
                onChange={(e)=>{this.setState({email: e.target.value});}}
                onBlur={(e)=>{this.checkEmail(e.target.value)}}
              />
              <p className="err_msg">邮箱有错误</p>
            </aside>
        </section>
        <button className={this.state.canSend?'red':'pink'}>发送</button>
      </div>
    );
  }
}
