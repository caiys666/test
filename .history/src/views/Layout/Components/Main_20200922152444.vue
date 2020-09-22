<template>
    <div id="main-wrap">
        内容区
    </div>
</template>

<script>
import { reactive, ref, computed } from '@vue/composition-api';
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap{
    position: fixed; 
    left: $navMenu;
    height: 100vh;
    top: 75px;
    bottom: 0;
    right: 0;
    border: solid #d4dba7 30px;
    border-bottom: none;
    -webkit-box-sizing: border-box;
}

</style>