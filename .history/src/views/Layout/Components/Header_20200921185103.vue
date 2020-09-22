<template>
    <div id="header-wrap" onload="">
        <span class="time" id="text">hhh</span>
        管理员
    </div>
</template>

<script>
import { reactive, ref, computed } from '@vue/composition-api';
export default {
    name: 'Header',
    setup(props,{root,refs}){
        let startTime = () =>{
            var today = new Date;
            var strDate = (''+today.getFullYear+"年"+today.getMonth+'月'+today.getDate+'日');
            var n_day = today.getDay;
            switch(n_day){
                case 0:
                    
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap{
    position: fixed;
    top: 0;
    right: 0;
    left: $navMenu;
    height: 75px;
    background-color: #fff;
    -webkit-box-shadow: 0 3px  16px 0  rgba(41, 35, 35, 0.1);
    line-height: 75px;
    
}
.time{
    font-size: 20px;
    background: linear-gradient(to bottom left,rgb(159, 228, 31),rgb(14, 230, 219),rgb(207, 107, 194));
    color: transparent;
    -webkit-background-clip: text;
    margin-right: 20px;
}
.header-icon{
    padding: 0 32px;
    right: 0;
    cursor: pointer;
    svg { 
        font-size: 25px;
        margin-bottom: -8px;
        cursor: pointer ;
    }
    .svg-icon .exit{
        right: 0;
    }
}
.user-info{
    height: 75px;
    margin-right: 20px;
    cursor: pointer;
    .user{
        margin-left: 30px;
        margin-top: -80px;
    }
}


</style>