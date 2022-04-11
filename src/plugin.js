import Toast from './toast.vue';

/* helpers */
function createToast({ Vue, message, propsData }) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({ propsData });
  toast.$slots.default = [message];
  toast.$mount();
  document.body.appendChild(toast.$el);
  return toast;
}
// console.log('createToast', createToast);
let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({ Vue, message, propsData: toastOptions });
    };
  },
};
