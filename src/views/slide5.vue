<template>
  <div class="my-4 relative flex items-center" ref="myDiv">
    <div class="w-full h-[1px] absolute top-[50%] left-0" style="background: linear-gradient(to right, transparent 0%, #f9e5b2 30%,#f9e5b2 70%, transparent 100%);"></div>
    <div v-if="data.preShow" class="cursor-pointer absolute top-0 left-0 h-full z-30 flex items-center justify-end">
        <div class="p-4 rounded-full w-[46px] flex items-center justify-center bg-amber-400" @click="prev">
            <svg class="rotate-180" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 13.7071C-0.0976315 13.3166 -0.0976315 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071Z" fill="#171923" />
            </svg>
        </div>
    </div>
    <div v-if="data.nextShow" class="cursor-pointer absolute top-0 right-0 h-full z-30 flex items-center justify-end">
        <div class="p-4 rounded-full w-[46px] flex items-center justify-center bg-amber-400" @click="next">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 13.7071C-0.0976315 13.3166 -0.0976315 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071Z" fill="#171923" />
            </svg>
        </div>
    </div>
    <div class="overflow-hidden relative z-10" :style="outeStyle" >
        <div class="flex transition-transform duration-500 ease-in-out" :class="{'hidden':data.hidden}" :style="translateClass">
            <div class="flex flex-col shrink-0" v-for="(item, index) in data.datas" :style="{width:data.itemwidth+'px'}">
                <div class="h-[80px] flex justify-center items-end">
                    <div v-if="index%2==0">
                        <div class="text-center text-base text-zinc-100 font-bold p-1">
                            <div v-if="item.Status == 1">接受任務</div>
                            <div v-else-if="item.Status == 3">審核中</div>
                            <div v-else-if="item.Status == 5">審核失敗</div>
                            <div v-else-if="item.Status == 6">審核成功</div>
                        </div>
                        <div class="relative flex flex-col items-center justify-center">
                            <div class="h-[3px] w-[3px] rounded-full bg-zinc-400"></div>
                            <div class="h-[50px] w-[1px] bg-zinc-400"></div>
                        </div>
                    </div>
                    <div v-else class="text-center text-lg text-[#f6d671] font-bold">2021/11/05</div>
                </div>
                <div class="relative p-2 flex items-center justify-center cursor-pointer" @click="changeActive(item)">
                    <div :class="item.active?'text-gray300':'text-primary-dark'">
                        <svg class="relative z-20 mr-0.5 fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12Z" />
                            <circle cx="12" cy="12" r="7" />
                        </svg>
                    </div>
                </div>
                <div class="h-[80px] flex justify-center">
                    <div v-if="index%2!=0">
                        <div class="relative flex flex-col items-center justify-center">
                            <div class="h-[3px] w-[3px] rounded-full bg-zinc-400"></div>
                            <div class="h-[50px] w-[1px] bg-zinc-400"></div>
                        </div>
                        <div class="text-center text-base text-zinc-100 font-bold p-1">
                            <div v-if="item.Status == 1">接受任務</div>
                            <div v-else-if="item.Status == 3">審核中</div>
                            <div v-else-if="item.Status == 5">審核失敗</div>
                            <div v-else-if="item.Status == 6">審核成功</div>
                        </div>
                    </div>
                    <div v-else class="text-center text-lg text-[#f6d671] font-bold">2021/11/05</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style>
</style>
<script setup>
  import {onMounted,reactive,ref,nextTick,computed,watch   } from 'vue'
  const data = reactive({
      datas:[
        {
          Status:1,
          active:false,
        },
        {
          Status:3,
          active:false,
        },
        {
          Status:5,
          active:true,
        },
        {
          Status:1,
          active:false,
        },
        {
          Status:3,
          active:false,
        },
        {
          Status:5,
          active:true,
        },
        {
          Status:1,
          active:false,
        },
        {
          Status:3,
          active:false,
        },
        {
          Status:5,
          active:true,
        },
      ],
      currentIndex: 0,
      length: 0,//總數量
      itemwidth: 160,//單個寬度
      outewidth: 0,//單頁寬度
      buttonwidth: 100,//按鈕寬度
      imagesToShow: 0,//顯示的數量
      maxIndex: 0,//隱蔽的數量
      marginleft:0,//左偏移
      preShow: true,
      nextShow: true,
      hidden: true,
  });
  const myDiv = ref(null); // 用於獲取myDiv
  const getDivWidth = () => {
    nextTick(() => {
      // 確保 DOM 更新
      if (myDiv.value) {
        data.imagesToShow = Math.floor((myDiv.value.clientWidth - (data.buttonwidth)) / data.itemwidth);
        data.outewidth = data.imagesToShow * data.itemwidth
        data.marginleft = Math.floor((myDiv.value.clientWidth - data.outewidth) / 2)
        data.length = data.datas.length
        data.maxIndex = data.length - data.imagesToShow;
        data.hidden = false
        //console.log('nextTick',myDiv.value.clientWidth,data.imagesToShow,data.outewidth)
        //console.log('獲取寬度', myDiv.value.clientWidth, data)// 獲取寬度
      }
    }); 
  };
  const outeStyle = computed(() =>({
    width: `${data.outewidth}px`,
    marginLeft: `${data.marginleft}px`,
  }))
  const translateClass = computed(() => {
    return `transform: translateX(-${data.currentIndex * data.itemwidth}px)`
  })
  const changeActive = (item) => {
    console.log('changeActive')
    //接受任務和選取不能點擊
    // if (!item.active && item.Status != 1) {
    //   emit('history-change', item)
    // }
  }
  const next = () => {
    if (data.maxIndex > 0) {
      data.currentIndex = (data.currentIndex + 1 + (data.maxIndex + 1)) % (data.maxIndex + 1);
      //console.log('next', data.currentIndex)
    }
  }
  const prev = () => {
    if (data.maxIndex > 0) {
      data.currentIndex = (data.currentIndex - 1 + (data.maxIndex + 1)) % (data.maxIndex + 1);
      //console.log('prev', data.maxIndex, data.currentIndex, data.length)
    }
  }
  onMounted(() => {
      getDivWidth()
  })
</script>
