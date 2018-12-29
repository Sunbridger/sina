# Dialog

## usage

```js

Dialog.success('置顶成功')

Dialog.fail('置顶失败')

Dialog.singleButton({
  title:'温馨提示',
  text:'是否确认删除?'
  onConfirm:()=>{
    Api.delete...
  }
})

Dialog.coupleButton({
  title:'温馨提示',
  text:'是否确认删除?'
  onConfirm:()=>{
    Api.delete...
  }
  onCancel:()=>{
    //取消
    Dialog.hide();
  }
})

Dialog.custom({
  content:<div>一堆jsx</div>,
  width:330,
  height:200
})

Dialog.customWithCoupleButton({
  content:<div>一堆jsx</div>,
  width:330,
  height:200,
  onConfirm:()=>{
    Api.delete...
  }
  onCancel:()=>{
    //取消
    Dialog.hide();
  }
})
```