import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestSubmit from '@/components/TestSubmit'
import ComputedAndWatch from '@/components/ComputedAndWatch'
import ClassAndStyle from '@/components/ClassAndStyle'
import List from '@/components/List'
import Other from '@/components/other'
import Event from '@/components/Event'
import AxiosTest from '@/components/AxiosTest'
import AxiosApi from '@/components/AxiosApi'
import VuexTest from '@/components/VuexTest'
import VuexLogin from '@/components/VuexLogin'
import VuexIndex from '@/components/VuexIndex'
import VuexHome from '@/components/VuexHome'
import VuexVidio from '@/components/VuexVidio'
import KetTest from '@/components/KetTest'
import components from '@/components/components'
import echart from '@/components/echart'
import EchartsUser from '@/components/EchartsUser'
import echarts from '@/components/componentShare/echarts'
import VirtualList from '@/components/VirtualList'
import Three from '@/components/Three'
import notFound from '@/components/404'
import TestLogin from '@/components/TestLogin'


Vue.use(Router)
Vue.component("VuexTest",  VuexTest )
Vue.component("echarts", echarts )

export default new Router({
  //mode: 'history',
  base:'/',
  routes: [
    { path: "/404", name: "notFound", component: notFound },
    {path: "*", /*此处需特别注意置于最底部*/ redirect: "/404"},
    {path: '/HelloWorld', name: 'HelloWorld',component: HelloWorld},
    { path: '/TestSubmit', name: 'TestSubmit', component: TestSubmit },
    { path: '/ComputedAndWatch', name: 'ComputedAndWatch', component: ComputedAndWatch },
    { path: '/ClassAndStyle', name: 'ClassAndStyle', component: ClassAndStyle },
    { path: '/List', name: 'List', component: List },
    { path: '/other', name: 'Other', component: Other },
    { path: '/Event', name: 'Event', component: Event },
    { path: '/AxiosTest', name: 'AxiosTest', component: AxiosTest },
    { path: '/AxiosApi', name: 'AxiosApi', component: AxiosApi },
    { path: '/VuexTest', name: 'VuexTest', component: VuexTest },
    { path: '/VuexLogin', name: 'VuexLogin', component: VuexLogin },
    { path: '/VuexIndex', name: 'VuexIndex', component: VuexIndex },
    { path: '/VuexHome', name: 'VuexHome', component: VuexHome },
    { path: '/VuexVidio', name: 'VuexVidio', component: VuexVidio },
    { path: '/KetTest', name: 'KetTest', component: KetTest },
    { path: '/', name: 'components', component: components },
    { path: '/echart', name: 'echart', component: echart },
    { path: '/EchartsUser', name: 'EchartsUser', component: EchartsUser },
    { path: '/VirtualList', name: 'VirtualList', component: VirtualList },
    { path: '/Three', name: 'Three', component: Three },
    { path: '/TestLogin', name: 'TestLogin', component: TestLogin }

  ]
})
