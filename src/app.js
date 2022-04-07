import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
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
