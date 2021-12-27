import {ref,computed,watch} from 'vue';
import gsap from 'gsap';

export default function getGdp(rawData,max){

    const bar = ref([]);
    const color =['#669999','#CC3300','#0066CC','#990000','#DD6644','#990066'];
    const M = computed(()=>{
        return rawData.value.length === 0 ? 0 : Math.max(...rawData.value.map(i=>i.value));
    });
    const bars = computed(()=>{
        console.log(rawData.value);
         return rawData.value.map((v,i)=>({
             ...v,
             size:Math.floor(max * v.value / M.value),
             color:color[i % color.length]
         }));

    });
    watch(bars,()=>{
       for(let i = 0; i < bars.value.length; i++){
           if(!bar.value[i]){
               bar.value[i] = {
                   ...bars.value[i],
                   size:0,
                   value:0,
               }
           }
           gsap.to(bar.value[i],{...bars.value[i],duration:1});
       }
    },{deep:true});
    return{
        bar
    }
}