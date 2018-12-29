# PicWaterFall

> 素材图片选择瀑布流组件

```js
        <PicWaterFall
          //图片数组[{src:'xxx'}]
          pics={this.state.pics}
          ref="picWaterFall"
          //滚动到底部时触发 用于加载下一屏
          onScrollBottom={() => {
            console.log("onScrollBottom");
          }}
          //高度
          height={320}
          //列数
          colNum={2}
          //是否从头部开始插入
          prepend={false}
          >
          <!-- 自定义子组件 PicWaterFall会将布局好的pic和index 作为props传入该组件,只需关注单个图片上的操作 -->
          <PicItem/>
        </PicWaterFall>

        //向上加入图片
        this.refs.picWaterFall.prePendPics([{src:'xxx'}])
```