import {onMounted,onUnmounted,ref} from 'vue'
export function useWindowPosition(e){
  const pageX = ref(0)
  const pageY = ref(0)

  const movePosition = (e)=>{
    pageX.value = e.pageX
    pageY.value = e.pageY
  }
  onMounted(()=>{
    window.addEventListener('mousemove',movePosition)
  })
  onUnmounted(()=>{
    window.removeEventListener('mousemove',movePosition)
  })

  return{
    pageX,
    pageY
  }
}