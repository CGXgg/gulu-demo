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
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsItem from './tabs-item';
import TabsBody from './tabs-body';
import TabsPane from './tabs-pane';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';

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
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
Vue.component('g-collapse-item', CollapseItem);
Vue.component('g-collapse', Collapse);
Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    selectedTab: ['2', '1'],
    loading1: false,
    loading2: true,
    loading3: false,
  },
  created() {},
  methods: {
    yyy(data) {
      console.log('yyy');
      console.log('data');
    },
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
