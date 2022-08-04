<template>
  <div class="container">
    <div class="box-content">
      <div
        v-for="item in lists"
        :key="item.code"
        :class="[activeCode === item.code ? 'high' : '', 'item']"
        @click="setActive(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="box-left"></div>
    <div class="box-right"></div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      activeCode: '1',
      lists: [
        {
          code: '1',
          name: '完成情况'
        },
        {
          code: '2',
          name: '自评指标'
        },
        {
          code: '3',
          name: '得分排名'
        },
        {
          code: '4',
          name: '自评得分'
        }
      ]
    }
  },
  methods: {
    setActive(item) {
      this.activeCode = item.code
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: fit-content;
  position: relative;
  .box-content {
    display: flex;
    width: fit-content;
  }
  .box-left {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 36px;
    background: #58a;
    width: 92px;
    z-index: -1;
    // background: linear-gradient(-135deg, transparent 24px, #58a 0);
    // background-repeat: no-repeat;
    // border: 1px solid;
    border-image: linear-gradient(180deg, #825f32, #02298d 40%) 1 1;
    // &::before {
    //   position: absolute;
    //   right: 0;
    //   content: '';
    //   background: transparent;
    //   width: 0;
    //   height: 0;
    //   border-width: 18px;
    //   border-style: solid;
    //   z-index: 2;
    //   border-color: transparent transparent transparent transparent;
    // }
  }
  .box-right {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 36px;
    width: 184px;
    z-index: -1;
    border: 1px solid;
    border-image: linear-gradient(180deg, #825f32, #02298d 50%) 0.8 1;
    // background: linear-gradient(135deg, transparent 24px, #58a 0);
    // background-size: 90% 100%;
    // background-repeat: no-repeat;
  }
  .item {
    width: 92px;
    height: 36px;
    line-height: 36px;
  }
  // .item {
  //   position: relative;
  //   display: inline-block;
  //   padding: 0.3em 1em 0;
  //   color: inherit;
  //   text-decoration: none;
  //   margin: 0 -0.3em;
  //   width: 92px;
  //   height: 36px;
  //   font-size: 20px;
  //   font-family: PingFangSC, PingFangSC-Regular;
  //   font-weight: 400;
  //   text-align: center;
  //   box-sizing: border-box;
  //   &.high {
  //     letter-spacing: 2.33px;
  //     font-size: 28px;
  //     font-family: PingFangSC, PingFangSC-Regular;
  //     font-weight: 400;
  //     color: #66c4ff;
  //     &::before {
  //       content: '';
  //       position: absolute;
  //       top: 0;
  //       right: 0;
  //       bottom: 0;
  //       left: 0;
  //       z-index: -1;
  //       // border-radius: 0.5em 0.5em 0 0;
  //       // background: #ccc linear-gradient(hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));
  //       background: linear-gradient(322deg, rgba(0, 9, 51, 0.78) 17%, rgba(1, 37, 76, 0.84) 87%);
  //       border: 1px solid;
  //       border-image: linear-gradient(180deg, #825f32, #02298d 50%) 1 1;
  //       // box-shadow: 0 0.15em white inset;
  //       // transform: scale(1.1, 1.3) perspective(0.5em) rotateX(5deg);
  //       // transform-origin: bottom;
  //       margin-bottom: -0.08em;
  //       color: red;
  //       transform: scale(1.2, 1.3) perspective(0.5em) rotateX(5deg);
  //       transform-origin: bottom left;
  //     }
  //   }
  // }

  // margin: 0 auto;
  // margin-top: 200px;
  // // display: flex;
  // width: 500px;
  // height: 36px;
  // border: 1px solid;
  // border-image: linear-gradient(180deg, #825f32, #02298d 50%) 0.5 1;
  // backdrop-filter: blur(6px);
  // .item {
  //   transform-style: preserve-3d; /* 设置盒子按3D空间显示 */
  //   transform: perspective(800px) rotateX(0deg);
  //   /* 旋转变换的时候不设置初始值，容易出现跳边的bug，perspective(800px)，这里的800px是经验值，效果最好*/
  //   transition: all 2s ease;
  //   transform-origin: bottom;
  //   position: relative;
  //   display: inline-block;
  //   padding: 0.5em 1em 0.35em;
  //   color: red;
  //   cursor: pointer;
  //   background: linear-gradient(180deg, rgba(61, 200, 252, 0) 17%, #378aee 58%, rgba(60, 199, 252, 0));
  //   &.high {
  //     transform: perspective(800px) rotateX(60deg);
  //     transform-origin: bottom;
  //     &::before {
  //       transform: rotateX(-60deg);
  //       // transform: perspective(800px) rotateX(60deg);
  //       // transform-origin: bottom;
  //       // // // transform: perspective(800px) rotateX(5deg);
  //       // content: '';
  //       // position: absolute;
  //       // top: 0;
  //       // left: 0;
  //       // bottom: 0;
  //       // right: 0;
  //       // background-color: gold;
  //       // // background: #58a;
  //       // // transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
  //       // // transform-origin: bottom;
  //       // z-index: -1;
  //     }
  //   }
  // }
}
</style>
