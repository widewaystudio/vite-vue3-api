<template>
<div class="Bar2">
  <div class="item" v-for='item in bar' :key='item.conntry'>
    <div class="bar" :style="{backgroundColor:item.color,width:item.size+'px'}"></div>
    <div class="value"><label>{{ item.conntry }} {{item.value}}</label></div>
  </div>
  </div>
</template>

<script>
import {computed} from 'vue';
import getData from '../api/getGdp';
export default {
  name: "Bar2",
  props:{
    gdp:[]
  },
  setup(props){
    const gdps = computed(()=>props.gdp);
    return {
      ...getData(gdps,600),
    }
  }

}
</script>

<style lang="less" scoped>
.Bar2{
  width:600px;
  margin:1em;
  .item{
    height:35px;
    position:relative;
    margin:1em;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;

    .bar{
      width:100%;
      height:35px;
      background-color:#2c3e50;
    }
    .value{
      position:absolute;
      top:0;
      left:0;
      line-height:35px;
      width:100%;
      color:#fff;

      label{
        display:block;
        margin:0 auto;
        width:300px;
        text-align:center;
        overflow:hidden;
        text-shadow:1px 1px 5px #2c3e50;
      }
    }
  }


}

</style>