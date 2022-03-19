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
          <div class="paragraph">石河子大学2020级计算机科学与技术专业（二学位）梁嘉成毕业设计作品：不同水体识别系统设计与实现。</div>
          <div class="paragraph">本项目采用前端Vue+后端Spring Boot的前后端分离模式设计，前后端采用AJAX异步通信，完成信息间的交互工作，数据库选用Redis缓存技术+MySQL数据库，大大提高用户体验的同时保证了数据的安全性，服务层采用并发设计基于NIO模式，再次提升了用户的使用体验。</div>
<!--          TODO 算法内容应该补充-->
          <div class="paragraph">图像识别采用开源库OpenCV和成熟的Pytorch框架，结合XXXXX算法等，实现了对不同水体的精准图像识别。</div>
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
        <div class="paragraph">不同水体识别系统旨在为用户提供一个用于进行卫星、遥感图像水体识别的系统。</div>
        <div class="paragraph">本系统是一个付费软件，每个注册的用户都拥有自己的图片仓库，用户仅需上传图片等待一段时间，即可完成图像识别的工作，如果一个工作日内没有得到结果或得到的结果不理想，请及时联系工作人员！</div>
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