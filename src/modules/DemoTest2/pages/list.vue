<template>
  <div>
    <h1>日历组件</h1>
    <!-- <Calendar
      v-model="calendarCurrentYear"
      @dayClick="onclick"
    />
    <h1>日历组件-带区间日期高亮和指定日期错误的配置</h1>
    <Calendar
      v-model="calendarCurrentYear"
      :calendar-data="calendarData"
    />
    <h1>年份控制器-日历组件-带区间日期高亮和指定日期错误的配置</h1>
    <Calendar
      v-model="calendarCurrentYear1"
      :controller="true"
      :calendar-data="calendarData1"
    /> -->
  </div>
</template>

<script lang="ts">
import { ComponentPublicInstanceCostom, defineComponent, getCurrentInstance } from 'vue'
import {
  useDemoTest2
} from '@/modules/DemoTest2/store'

export default defineComponent({
  name: 'DemoTest2',
  setup() {
    const proxy = getCurrentInstance()?.proxy as ComponentPublicInstanceCostom
    const useDemoTest2Store = useDemoTest2()
    const handleClick = (store: typeof useDemoTest2Store) => {
      console.log(store)
    }
    const a = useDemoTest2Store.names
    const res = useDemoTest2Store.getDemoTestList()
    res.then((data) => {
      console.log(data)
    })

    return {
      handleClick,
      a
    }
  }
})

// import {
//   defineComponent,
//   computed,
//   watch,
//   getCurrentInstance,
//   reactive
// } from 'vue'

// // import DemoTestModule from '@/modules/DemoTest/store'

// export default defineComponent({
//   name: 'Xx',
//   components: {},
//   props: {},
//   setup () {
//     const onclick = (dayItem: any) => {
//       console.log(dayItem)
//     }
//     // Vuex store
//     const store = useStore()
//     const demoList = computed(() => store.state.DemeTest.demoList)

//     console.log(store.state)

//     // watch
//     watch(() => demoList, (list, prevList) => {
//       /* --- */
//     })

//     // this  ctx并不能在生产环境使用
//     // const { proxy } = getCurrentInstance()

//     const calendarCurrentYear = 2021 && new Date().getFullYear()

//     const calendarCurrentYear1 = 2021 && new Date().getFullYear()

//     const calendarData = reactive({
//       errorDay: {
//         2021: {
//           4: [1, 2, 3, 5, 6, 7],
//           5: [9],
//           10: [3]
//         }
//       },
//       // 高亮日期时间段 这个时间段的年会被当做一年
//       startDay: '2021-03-11',
//       endDay: '2021-11-20'
//       // interval: 可能是多个时间段
//     })

//     const calendarData1 = reactive({
//       errorDay: {
//         2021: {
//           4: [1, 2, 3, 5],
//           5: [9],
//           10: [3]
//         }
//       },
//       // 高亮日期时间段 这个时间段的年会被当做一年
//       startDay: '2019-03-11',
//       endDay: '2021-11-20'
//       // interval: 可能是多个时间段
//     })

//     return {
//       onclick,
//       demoList,
//       calendarCurrentYear,
//       calendarData,
//       calendarCurrentYear1,
//       calendarData1
//     }
//   }
// })
</script>

<style lang="scss" scoped>
</style>
