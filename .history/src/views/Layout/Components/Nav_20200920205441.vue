<template>
    <div id="nav-wrap">
        haha
    </div>
</template>

<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name:'navMenu',
    setup(props,{root, refs}){
        //data数据       
        const routers = reactive(root.$router.options.routes)
        return{
          routers
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/config.scss';
#nav-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color:#2E2E2C; 
    text
}
.tou{
    width: 0;
    height: 0;
    text-align: center;
}
span{
    margin-left: 20%; 
}


</style>