import { defineComponent } from "vue";
import container from '@/layout'
import '@/styles/main.scss'

export default defineComponent({
  setup(){
    
    return () => {
      return (
        <n-config-provider>
          <container />
        </n-config-provider>
      )
    }
  }
})