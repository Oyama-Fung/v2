import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('my-scroll', {
  bind(el, binding, vnode) {
    // console.log('vnode', vnode);
    // 获取实例
    const self = vnode.context
    // 获取目标元素
    let target = el.querySelector('.el-table__body-wrapper')
    target.addEventListener('scroll', () => {
      // 防抖
      // setTimeout(() => {
        const _table = target.querySelector('table')
        _table.style.paddingTop = self.padding[0] + 'px'
        _table.style.paddingBottom = self.padding[1] + 'px'
        console.log(self.padding);
        
        self.tableHeight = target.clientHeight
        self.scrollTop = target.scrollTop
        console.log(self.tableHeight, self.scrollTop);
        
        console.log(self.start, self.over, self.padding);
        
      // }, 200);
    })
  }
})

Vue.mixin({
  data() {
    return {
      tableHeight: 300,
      scrollTop: 0,
    }
  },
  computed: {
    start() {
      return Math.max(this.scrollTop / 40 - 5, 0)
    },
    over() {
      return Math.min((this.scrollTop + this.tableHeight) / 40 + 5, this.tableData.length)
    },
    padding() {
      let paddingBottom = (this.tableData.length - this.over) * 40
      let paddingTop = this.start * 40
      return [paddingTop, paddingBottom]
    }
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
