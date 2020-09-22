<template>
  <div class="home">
    {{model}}
    <el-form  status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码">
        <el-input class="password" type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" >
        <el-input type="password"  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref, computed } from '@vue/composition-api';
export default {
  name: 'Login',
  setuo(props,{refs, root}){
    const model = reactive('login');
    return{
      model,
    }
  }
}
</script>

<style lang="scss" scoped>
.co{
  width: 200px !important;
}
</style>
