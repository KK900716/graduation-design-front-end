<template>
<div>
  <div>
    <img src="../assets/Click2page/1.jpg" alt="加载失败">
  </div>
  <div class="two">
    <div class="two_content">
      <div class="two_left">
        <div class="two_left_title">关于我们</div>
        <div class="two_left_content">
          <div class="paragraph">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          <div class="paragraph">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        </div>
      </div>
      <div class="two_right">
        <img class="two_right_img" src="../assets/Click2page/2.jpg" alt="加载失败">
      </div>
    </div>
  </div>
  <div class="three">
    <div class="three_img">
      <img src="../assets/Click2page/3.png" alt="加载失败">
    </div>
    <div class="three_content">
      <div class="three_content_title">为用户提供服务</div>
      <div class="three_content_content">
        <div class="paragraph">XXX不同水体识别系统旨在为用户提供一个用于进行卫星、遥感图像水体识别的系统。</div>
        <div class="paragraph">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Click2page',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.two,.three{
  width: 1920px;
  height: 500px;
}
.two_content{
  width: 1920px;
  height: 500px;
  position: absolute;
}
.two_left,.two_right{
  position: absolute;
}
.two_left{
  width: 50%;
  height: 500px;
}
.two_left_title{
  position: absolute;
  left: 480px;
  top: 80px;
  color: #9f05ad;
  font-size: 24px;
  font-weight: 400;
}
.two_left_content{
  position: absolute;
  top: 120px;
  left: 300px;
  width: 500px;
}
.paragraph{
  word-break: break-all;
  line-height: 30px;
  font-size: 18px;
  text-indent: 2em;
  color: rgba(119, 119, 119, 0.72);
}
.two_right{
  left: 50%;
  width: 50%;
  height: 500px;
}
.two_right_img{
  display: block;
  margin: 30px auto;
  height: 80%;
}
.three{
  background-color: #fafafa;
  height: 700px;
  padding: 100px 0 0;
}
.three_img{
  background-color: #ffffff;
  margin: 0 auto;
  width: 1200px;
  padding: 32px 0;
  border-radius: 15px;
  box-shadow: 0 2px 10px #EFEFEFFF;
}
.three_img img{
  margin: 0 auto;
  display: block;
  text-align: center;
}
.three_content{
  padding: 50px 0 0;
  width: 1920px;
  text-align: center;
}
.three_content_title{
  color: #9f05ad;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 15px;
}
.three_content_content{
  margin: 0 auto;
  width: 1150px;
  text-align: left;
}
</style>