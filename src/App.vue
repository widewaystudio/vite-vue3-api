<script setup>
import {onBeforeMount,ref} from 'vue';
import Bar1 from './components/Bar1.vue';
import Bar2 from './components/Bar2.vue';
const gdp = ref([]);
async function getData(){
  gdp.value = await fetch('/api/gdp.json').then((res)=>([
    {
      "conntry": "美国",
      "value": 25.28
    },
    {
      "conntry": "中国",
      "value": 14.348
    },
    {
      "conntry": "日本",
      "value": 5.082
    },
    {
      "conntry": "德国",
      "value": 3.846
    },
    {
      "conntry": "印度",
      "value": 2.875
    }
  ]));
}
onBeforeMount(()=>{
 getData();
})
</script>

<template>
  <h1>2021  COUNTRY GDP</h1>
  <div class="container">
    <Bar1 :gdp="gdp"/>
    <Bar2 :gdp="gdp"/>
  </div>
  <div class="controls">
    <div class="item" v-for='item in gdp' :key="item.conntry">
      <lable>{{ item.conntry }}</lable>
      <input type="number" step="0.001" v-model="item.value"></div>

  </div>

</template>

<style lang="less">
h1{
  text-align:center;
}

.container{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;

}
.controls{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin-top:30px;
  .item{
    margin-right:30px;

    input{
      margin-left:5px;
    }
  }

}
</style>
