import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { reguArr } from '@/common/database'


export default defineComponent({
  setup() {
    const router = useRouter()
    const backHome = () => {
      router.push({name: 'home'})
    }
    console.log('xxx', reguArr)
    return () => {
      return (
        <>
          <n-page-header
            title="正则"
            subtitle="正则过滤输入集合"
            onBack={backHome}
          />
          <n-collapse accordion arrow-placement="right">
            {
              reguArr.map((item, index) => (
                <n-collapse-item title={item.key} name={index}>
                  <div>{item.value}</div>
                </n-collapse-item>
              ))
            }
          </n-collapse>
        </>
      )
    }
  }
})
