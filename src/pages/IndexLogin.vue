<template>
  <div>
    <img id="bj" class="bj" src="../assets/indexLogin/demo.png" alt="加载失败">
    <header class="header"></header>
    <div class="content">
      <aside class="aside">
        <img class="leftImg" src="../assets/indexLogin/login-site-bg.png" alt="加载失败">
        <div class="leftText">欢迎进入XXXXXXX<br>水体识别系统</div>
        <div class="form">
            <div class="hydl"><div class="text">帐号密码登录</div></div>
            <div class="splitLine"></div>
            <div class="warning" v-show="warning.isShow">{{warning.content}}错误</div>
            <div class="user" >
              <i class="el-icon-s-custom"></i>
              <input v-model.trim="userdata.userAccount" class="input" type="text" name="username" placeholder="请输入学号" autocomplete="on" autofocus maxlength="20">
            </div>
            <div class="password">
              <i class="el-icon-key"></i>
              <input @keyup.enter="login" v-model="userdata.userPassword" class="input" type="password" name="password" placeholder="请输入密码" maxlength="20">
            </div>
            <div class="code">
              <i class="el-icon-tickets"></i>
              <input @keyup.enter="login" v-model="userdata.verificationCode" class="input inputCode" type="text" name="code" placeholder="请输入验证码" maxlength="4">
              <img v-show="showCheckCode" class="codeImg" :src="checkCode" alt="点击刷新重试" @click="applyCheckCode">
              <div @click="showCheckCodeChange" v-show="!showCheckCode" class="codeImg codeImgMask">点击获取验证码</div>
            </div>
            <div class="submit">
              <button id="submit" class="submitButton" @click="login">登录</button>
            </div>
        </div>
      </aside>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>

export default {
  name: 'IndexLogin',
  props:['loginMsg','warning'],
  data(){
    return{
      userdata:{
        userAccount:'',
        userPassword:'',
        uid:'',
        verificationCode:''
      },
      showCheckCode:false,
      checkCode:'',
      checkCodeState:false
    }
  },
  methods:{
    showCheckCodeChange(){
      this.showCheckCode=true;
      this.applyCheckCode();
    },
    login(){
      if(this.userdata.userAccount===''||this.userdata.userPassword===''||this.userdata.verificationCode===''){
        this.$message({
          message: '请检查您的输入是否正确',
          type: 'warning'
        });
      }else{
        this.$notify.info({
          title: '正在拼命加载中',
          message: '登录中........'
        });
        this.loginMsg(this.userdata);
      }
    },
    applyCheckCode(){
      if (!this.checkCodeState){
        this.checkCodeState=true;
        this.userdata.uid=this.uuid()//生成一个uuid
        this.checkCode='http://127.0.0.1:80/checkcode?'+'uuid='+this.userdata.uid;
        setTimeout(()=>this.checkCodeState=false,2000)
      }else{
        this.$message({
          message: '请的操作频率过高，请稍后重试！',
          type: 'warning'
        });
      }
    },
    uuid() {
      const s = [];
      const hexDigits = "0123456789abcdef";
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";
      return s.join("");
    }
  },
}
</script>

<style scoped>
.warning{
  position: absolute;
  margin: 5px 0 0 40px;
  border: #faccc6 1px solid;
  width: 398px;
  height: 30px;
  color: #e4393c;
  background-color: #ffebeb;
  line-height: 30px;
  text-align: center;
}
.bj{
  width: 2000px;
  height: 1024px;
  position:fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
.header{
  display: none;
}
.content{
  width: 100%;
  height: 960px;
}
.aside{
  width: 950px;
  height: 600px;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  top: 150px;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(105, 105, 105, 0.4);
}
.leftImg{
  position: relative;
}
.leftText{
  position:absolute;
  top: 150px;
  left: 35px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff;
  font-size: 28px;
  letter-spacing: 7px;
  line-height: 60px;
}
.form{
  width: 520px;
  height: 400px;
  position: absolute;
  top: 70px;
  right: 0;
}
.hydl{
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 0 50px 0 0;
  height: 50px;
  width: 88%;
  font-size: 20px;
  border-bottom: 2px solid #e8e8e8;
  line-height: 50px;
}
.hydl .text{
  width: 200px;
  color: #40a9ff;
}
.hydl .text:hover{
  cursor: pointer;
}
.splitLine{
  background-color: #40a9ff;
  width: 200px;
  height: 3px;
  position: relative;
  top: -3px;
}
.user,.password,.code,.submit{
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 20px;
}
.user{
  margin-top: 20px;
}
.input{
  margin-left: 20px;
  width: 400px;
  height: 40px;
  box-sizing:border-box;
  font-size: 18px;
}
.input:focus{
  border: 0;
  outline: 1px solid #40a9ff;
}
.inputCode{
  width: 150px;
  margin-right:0;
}
.code{
  position: relative;
}
.codeImg{
  display: block;
  border: 1px solid #292929;
  position: absolute;
  top: 15px;
  left: 240px;
  width: 150px;
  height: 50px;
  cursor: pointer;
}
.codeImgMask{
  line-height: 50px;
  text-align: center;
}
.codeImgMask:hover{
  color: #00acf2;
}
.submitButton{
  transition: all 0.3s;
  border: 0 ;
  position: relative;
  top: 30px;
  left: 35px;
  background-color: #40a9ff;
  width: 400px;
  height: 55px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 100%;
  border-radius: 3px;
  box-shadow:0 1px 3px #40a9ff;
}
.submitButton:active{
  background-color: #dadada;
  box-shadow:0 0 0 rgba(105, 105, 105, 0);
  cursor: pointer;
}
.footer{
  display: none;
}
</style>
