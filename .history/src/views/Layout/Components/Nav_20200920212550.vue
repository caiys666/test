<template>
    <div id="nav-wrap">
        <el-menu 
            default-active="1-4-1" 
            class="el-menu-vertical-demo"
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse"
            text-color="#fff"
            active-text-color="#fff"
            background-color="transparent">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name:'navMenu',
    setup(props,{root, refs}){
        //data数据       
        let isCollapse = ref(false);
        const routers = reactive(root.$router.options.routes);
        let handleOpen = (key, keyPath) => {
            console.log(key, keyPath);
        };
        let handleClose = (key, keyPath) => {
            console.log(key, keyPath);
        };
        return{
          routers,
          isCollapse,
          handleOpen,

        }
    },
    
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

#nav-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color:#2E2E2C; 
    // -webkit-box-sizing: border-box;
}
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
//   }
.el-submenu__title{
    i.el-icon-location{
        width: 20px;
        padding-right: 50px;
        margin: 0 auto;
    }
}
.el-menu-item .is-active{
    
}
span{
    padding-right: 20px;
}
.tou{
    width: 0;
    height: 0;
    text-align: center;
}
span{
    margin-right: 80px;
    text-align: center;
}


</style>