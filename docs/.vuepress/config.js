module.exports = {
  base: '/gulu-demo/',
  title: '轱辘UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: 'https://cgxgg.github.io/gulu-demo/get-started/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/'],
      },

      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/gird',
          '/components/layout',
          '/components/popover',
          '/components/toast',
          '/components/tabs',
          '/components/collapse',
        ],
      },
    ],
  },
};
