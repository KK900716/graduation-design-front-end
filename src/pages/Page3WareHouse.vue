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
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
  <div class="content_title">处理结果预览</div>
</div>
</template>

<script>
export default {
  name: "Page3WareHouse",
  props: ['name'],
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
      console.log(file);
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