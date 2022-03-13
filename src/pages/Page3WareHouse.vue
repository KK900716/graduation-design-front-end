<template>
<div class="content">
  <div class="content_title">{{name}}仓库信息</div>
  <div class="content_one">
    <ul class="content_one_ul">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="content_title">上传下载</div>
  <div class="content_two">
    <div class="content_two_upload">
      <el-upload
          class="upload-demo"
          ref="upload"
          action="http://127.0.0.1/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handlerSuccess"
          :on-error="handlerError"
          :file-list="fileList"
          :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">请上传要处理的图片</div>
      </el-upload>
<!--                :headers="headerMessage"-->
<!--      <input name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>-->
    </div>
  <div class="content_title">处理结果预览</div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Page3WareHouse",
  props: ['name'],
  data() {
    return {
      headerMessage:{
        token:window.localStorage.getItem('access-admin')
      },
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(this.fileList)
      console.log(file);
    },
    handlerSuccess(response, file, fileList){

    },
    handlerError(err, file, fileList){

    },
    update(e){
      let self = this
      let file = e.target.files[0]
      /* eslint-disable no-undef */
      let param = new FormData()  // 创建form对象
      param.append('file', file)  // 通过append向form对象添加数据
      param.append('chunk', '0') // 添加form表单中其他数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: window.localStorage.getItem('access-admin')
        }
      }
      // 添加请求头
      axios.post('http://127.0.0.1/upload', param, config)
          .then(res => {
            // if (res.data.code === 0) {
            //   self.ImgUrl = res.data.data
            // }
            // console.log(res.data)
          })
    }
  }
}
</script>

<style scoped>
.content{
  height: 650px;
  padding-left: 300px;
  overflow-y: auto;
}
.content_title{
  font-size: 20px;
  width: 1500px;
  border-bottom: 2px  #9f05ad  solid;
  padding: 20px 0 5px;
  line-height: 20px;
}
.content_one{
  height: 200px;
  width: 1500px;
  background-color: #40a9ff;
}
.content_one_ul li{
  float: left;
  background-color: #f13f83;
  width: 750px;
  height: 100px;
}
.content_two{
  width: 1500px;
  padding: 30px 0;
}
.content_two_upload{
  border: #1b1b1b 1px solid;
  padding: 15px;
  width: 750px;
  margin: 0 auto;
}
</style>