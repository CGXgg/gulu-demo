import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group';
import Input from './input';
import Col from './col';
import Row from './row';
import Layout from './layout';
import Header from './header';
import Side from './side';
import Content from './content';
import Footer from './footer';
import Toast from './toast';
import plugin from './plugin';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-col', Col);
Vue.component('g-row', Row);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-side', Side);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);
Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
  },
  created() {},
  methods: {
    showToast1() {
      this.showToast('top');
    },
    showToast2() {
      this.showToast('middle');
    },
    showToast3() {
      this.showToast('bottom');
    },
    showToast(position) {
      console.log('2');
      this.$toast(
        `你的手机余额为${parseInt(Math.random() * 100)},你的手机已欠费`,
        {
          position,
          enableHtml: false,
          closeButton: {
            text: '已充值',
            callback() {
              console.log('他说已经充值了');
            },
          },
          autoClose: false,
          autoCloseDelay: 3,
        }
      );
    },
  },
});
//单元测试
{
  // const Constructor = Vue.extend(Button);
  // const button = new Constructor({ propsData: { icon: 'settings' } });
  // button.$mount('#test');
  // let useElement = button.$el.querySelector('use');
  // let href = useElement.getAttribute('xlink:href');
  // // expect(href).to.eq('#i-settings');
}
