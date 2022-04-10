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
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
  },
  methods: {
    inputChange(e) {
      console.log(e);
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
