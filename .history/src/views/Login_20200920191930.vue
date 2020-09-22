<template>
  <div class="home">
    <div class="img"></div>
    <el-form  status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item class="item-form">
        <label for="password" class="label">密码</label>
        <el-input 
          id="password"
          class="common-input" 
          type="password" 
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="item-form">
        <label for="password" class="label">密码</label>
        <el-input id="password" class="common-input" type="password"  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
    </el-form>

  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref, computed } from '@vue/composition-api';
export default {
  name: 'Login',
  setup(props,{refs, root}){
    var submitForm = () => {
      var y = 3;    
      function f(){
        alert(y)
      };
      f();
    };
    return{
      submitForm,
    }
  }
}
</script>

<style lang="scss" scoped>
.img{
  width: 100%;
  height: 200px;
  
}
.common-input{
  width: 200px !important;
}
.item-form{
    margin-bottom: 13px;
}
.label{
  margin-right: 20px;
}
.el-form{
  margin-top:200px;
}

</style>
