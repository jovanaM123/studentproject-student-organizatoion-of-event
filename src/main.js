import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VModal from 'vue-js-modal';
import StarRating from 'vue-star-rating';
import VueGallerySlideshow from 'vue-gallery-slideshow';

Vue.component('star-rating', StarRating);
Vue.component('vue-gallery-slideshow',VueGallerySlideshow);
Vue.use(VModal);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
