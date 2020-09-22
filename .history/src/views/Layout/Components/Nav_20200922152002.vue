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
            background-color="transparent"
            router>
            <template v-for="(item,index) in routers">
                <el-submenu 
                    v-if="!item.hidden"
                    :key="item.id"
                    :index="index+''">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.meta.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </template>
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
        console.log(routers);
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
          handleClose
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
   
}
// .el-menu-item-group{
//     margin-right: 30px !important;
// }

// .el-menu-item-group__title{
//     padding-left: 100px;
// }
span{
    color: #fff;
    font-size: 14px;
    margin-right: 100px;
    padding-bottom: 10px;
}
</style>