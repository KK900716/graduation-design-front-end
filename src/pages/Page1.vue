<template>
<div class="content">
  <ul>
    <li>
      <div class="content_title">个人资料</div>
      <div class="content_one">
        <ul>
          <li>
            <div class="content_one_title">用户姓名：</div>
            <input v-model="$store.state.Page1.show.name" class="content_one_input" placeholder="请输入姓名"/>
          </li>
          <li>
            <div class="content_one_title">用户邮箱（登录名）：</div>
            <input  v-model="$store.state.Page1.show.account" class="content_one_input" placeholder="请输入用户名"/>
          </li>
          <li>
            <div class="content_one_title">用户密码：</div>
            <input  v-model="$store.state.Page1.show.password" disabled class="content_one_input" placeholder="请输入密码"/>
          </li>
          <li>
            <div class="content_one_title">用户权限：</div>
            <input v-model="$store.state.Page1.show.permission" disabled class="content_one_input" placeholder="请输入姓名"/>
          </li>
          <li>
            <div class="content_one_title">用户余额：</div>
            <input v-model="$store.state.Page1.show.balance" disabled class="content_one_input" placeholder="请输入姓名"/>
          </li>
          <li>
            <div class="content_one_title">可以建仓库数量</div>
            <input v-model="$store.state.Page1.show.available" disabled class="content_one_input" placeholder="请输入姓名"/>
          </li>
        </ul>
        <div class="content_one_button">刷新</div>
        <div class="content_one_button">提交</div>
      </div>
    </li>
    <li>
      <div class="content_title">用户余额充值规则</div>
    </li>
    <li>
      <div class="content_title">账户充值</div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page1"
}
</script>

<style scoped>
.content{
  padding-left: 300px;
}
.content_title{
  font-size: 20px;
  width: 1500px;
  border-bottom: 2px  #9f05ad  solid;
  padding: 20px 0 5px;
  line-height: 20px;
}
.content_one{
  height: 300px;
}
.content_one li{
  font-size: 18px;
  float: left;
  width: 50%;
  height: 50px;
  margin: 15px 0;

}
.content_one_title{
  margin: 0 0 5px 0;
}
.content_one_input{
  height: 25px;
  width: 500px;
  font-size: 18px;
}
.content_one_button{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  float: left;
  color: #ffffff;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 10px 250px 0;
  background-color: #9f05ad;
  transition: all 0.15s;
  box-shadow: 1px 2px 2px #9f05ad;
}
.content_one_button:active{
  transform: translateX(1px) translateY(1px);
  box-shadow: 1px 1px 1px #9f05ad;
}
</style>