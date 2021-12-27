<template>
<div class="bar1">
  <div class="item" v-for="item in bar" :key="item.conntry">
    <label >{{ item.conntry }}</label>
    <div class="bar" :style="{backgroundColor:item.color,width:item.size+'px'}"></div>
    <div class="value">{{item.value}}</div>
  </div>

</div>
</template>

<script>
import {computed} from 'vue';
import getGdp from '../api/getGdp.js';
export default {
  name: "Bar1",
  props:{
    gdp: []
  },
  setup(props){
    const gdps = computed(()=>props.gdp);
    console.log(gdps.value);
    return {
      ...getGdp(gdps,400),
    };
  }
}
</script>

<style lang="less" scoped>
.bar1{
 width:500px;
  box-sizing:border-box;
  padding:1em 0;
  margin:0 3em;
  border-left:2px solid darkred;
}
.item{
  display:flex;
  height:35px;
  line-height:35px;
  margin:1em 0;
  position:relative;
  label {
    position: absolute;
    left: -2.5em;
    color:#888;
  }
  .bar{
    width:400px;
    height:100%;
    background-color:#2c3e50;

  }
  .value{
    padding-left:5px;
    flex:0 0 auto;
  }
}

</style>