import Toast from './toast';

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions, location) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        location,
        onClose: () => {
          currentToast = null;
        },
      });
    };
  },
};

function createToast({ Vue, message, propsData, location, onClose }) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({ propsData });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on('close', onClose);
  location.appendChild(toast.$el);
  return toast;
}
