<template>
    <div id="header-wrap">
        <span class="time" v-text="date"
        >{{date}}</span>
        管理员
    </div>
</template>

<script>
import { reactive, ref, computed, onMounted, onUpdated, onUnmounted } from '@vue/composition-api';
export default {
    name: 'Header',
    data(){
        return{
            date: new Date(),
            strDate:new Date(),
            str:''
        }
    },
    methods:{
    checkTime: function(i) {
            if (i < 10){
                i = "0" + i;
            }
            return i;
        }
    },
    mounted() {
        let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
        _this.date = new Date(); // 修改数据date
        _this.strDate = new Date;
        var n_day = _this.strDate.getDay();
        // console.log(n_day);
        _this.str = _this.strDate.getFullYear()+'年'+_this.strDate.getMonth()+'月'+_this.strDate.getDate()+'日'
        switch(n_day){
                case 0:
                    _this.st += '星期日';
                    break;
                case 1:
                    _this.st += '星期一';
                    break;
                case 2:
                    _this.st += '星期二';
                    break;
                case 3:
                    _this.st += '星期三';
                    break;
                case 4:
                    _this.st += '星期四';
                    break;
                case 5:
                    _this.st += '星期五';
                    break;
                case 6:
                    _this.st += '星期六';
                    break;
                case 7:
                    _this.st += '星期日';
                    break;
            }
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = _this.checkTime(m); 
            s = _this.checkTime(s);
            _this.str =  _this.str + "   "+ h + ':' + m + ':' + s;
            // console.log(_this.str);
        }, 1000)
    },
    beforeDestroy() {
        if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
    }
    /**setup(props,{root,refs}){
         var today = new Date();   
        var n_day = today.getDay(); 
        var strDate= (""+today.getFullYear()+"年"+today.getMonth()+'月'+today.getDate()+'日');
        let startTime = () =>{

            var today = new Date();   
            var n_day = today.getDay();     
            strDate = (""+today.getFullYear()+"年"+today.getMonth()+'月'+today.getDate()+'日');
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
            strDate = strDate + "   "+ h + ':' + m + ':' + s;
            // let setDate = (strDate) => {
                
            // }
            console.log(strDate);
            // console.log(root.strDate);
            // return strDate;

        };
        let checkTime = (i) => {
            if (i < 10){
                i = "0" + i;
            }
            return i;
        };
    
        onMounted(() => {
            // setInterval(startTime,1000)
        });
          
        return{
            strDate
        }
    }*/
    
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