import mdSelectBox from './mdSelectBox.vue';
// import mdAvatarTheme from './mdSelectBox.theme';

export default function install(Vue) {
  Vue.component('md-select-box', mdSelectBox);

  // Vue.material.styles.push(mdAvatarTheme);
}
