<template>
  <div class="home">
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
      <el-button type="primary" @click="submitForm()">提交</el-button>
    </el-form-item>
    </el-form>

  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref, computed } from '@vue/composition-api';
export default {
  name: 'Login',
  // methods:{
  //   function foo = (x) => {
      
  //   }
  // },
  setuo(props,{refs, root}){
    const foo = (x) => {

    },
    return{
    
    }
  }
}
</script>

<style lang="scss" scoped>
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
