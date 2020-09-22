<template>
    <div id="header-wrap">
        <span class="time" v-text="strDate">{{strDate}}</span>
        <button @click="toggle">点击</button>
        管理员
    </div>
</template>

<script>
import { reactive, ref, computed, onMounted } from '@vue/composition-api';
export default {
    name: 'Header',
    setup(props,{root,refs}){
        var today = new Date();
        let strDate = today.getFullYear()+"年"+today.getMonth()+'月'+today.getDate()+'日';
        var n_day = today.getDay();
        let startTime = () =>{
            strDate = today.getFullYear()+"年"+today.getMonth()+'月'+today.getDate()+'日';
            switch(n_day){
                case 0:
                    strDate += '星期日';
                    break;
                case 1:
                    strDate += '星期一';
                    break;
                case 2:
                    strDate += '星期二';
                    break;
                case 3:
                    strDate += '星期三';
                    break;
                case 4:
                    strDate += '星期四';
                    break;
                case 5:
                    strDate += '星期五';
                    break;
                case 6:
                    strDate += '星期六';
                    break;
                case 7:
                    strDate += '星期日';
                    break;
            }
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            strDate += "   "+ h + ':' + m + ':' + s;
            console.log(strDate);
            // var text = root.$refs.text;
            // text.innerHTML = strDate;
            // root.$refs('text').innerHTML = strDate;
            return strDate;
        };
        let checkTime = (i) => {
            if (i < 10){
                i = "0" + i;
            }
            return i;
        };
       

        onMounted(() => {
            setTimeout(startTime,500)
        })
        
        
        return{
            strDate,
            today,
            startTime,
            checkTime
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