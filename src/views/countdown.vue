<template>
  <div v-if="timeShow" class="w-[600px] flex flex-col p-8 bg-basic rounded-xl shadow-sm">
    <div class="text-lg font-medium text-gray400 mb-4">任務名稱：{{timeTitle}}</div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-3 text-4xl">
        <div class="p-3 bg-zinc-200 rounded-md text-basic">{{timeCountdown[0]}}</div>
        <div class="text-xl text-gray800">:</div>
        <div class="p-3 bg-zinc-200 rounded-md text-basic">{{timeCountdown[1]}}</div>
        <div class="text-xl text-gray800">:</div>
        <div class="p-3 bg-zinc-200 rounded-md text-basic">{{timeCountdown[2]}}</div>
      </div>
      <div class="text-lg font-medium text-gray400">後完成任務</div>
    </div>
  </div>
</template>
<style></style>
<script setup>
  import {onBeforeUnmount,onMounted,reactive,ref,computed } from 'vue'
  const timeTitle = ref('無法停止的夏日瘋狂直播')
  const timeShow = ref(false)
  const timeSecond = ref(0)
  let timer = null
  //(HH:MM:SS)
  const timeCountdown = computed(()=>{
      // 计算小时、分钟和秒数
      const hours = Math.floor(timeSecond.value / 3600);
      const minutes = Math.floor((timeSecond.value % 3600) / 60);
      const remainingSeconds = timeSecond.value % 60;

      // 使用 padStart 使数字始终为两位数
      return [
          String(hours).padStart(2, '0'),
          String(minutes).padStart(2, '0'),
          String(remainingSeconds).padStart(2, '0')
      ];
  })
  //启动倒计时
  const startCountdown = () => {
      if (timer) clearInterval(timer);  // 如果已有定时器，则清除
      timer = setInterval(() => {
      if (timeSecond.value > 0) {
          timeSecond.value--;
      } else {
          clearInterval(timer);  // 倒计时结束时清除定时器
      }
      }, 1000);  // 每1000毫秒更新一次
  };
  const timeGet = () => {
      timeShow.value = true
      timeSecond.value = 80000
      startCountdown()
    }
  //在组件销毁时清除定时器
  onBeforeUnmount(() => {
    if (timer) clearInterval(timer);  // 清除定时器以避免内存泄漏
  });
  onMounted(() => {
    timeGet();
  })
  // return {
  //     timeTitle,
  //     timeShow,
  //     timeCountdown
  // }
</script>
