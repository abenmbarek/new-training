import app from './components/app.vue';

import '../../css/main.less';
//import '../css/reset.css';
import './initComponents.js';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  dark: true,
  iconfont: '',
});

// getting language of user
const lang = eXo && eXo.env && eXo.env.portal && eXo.env.portal.language || 'en';

const resourceBundleName = 'locale.addon.VuetifySample';
const url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/${resourceBundleName}-${lang}.json`;

// getting locale ressources
exoi18n.loadLanguageAsync(lang, url)
  .then(i18n => {
    // init Vue app when locale ressources are ready
    new Vue({
      render: h => h(app),
      i18n,
      vuetify,
    }).$mount('#vuetify_webpack_sample');
  }); 



// get overrided components if exists
if (extensionRegistry) {
  const components = extensionRegistry.loadComponents('sample');// vuetifyWebpackSample
  if (components && components.length > 0) {
    components.forEach(cmp => {
      Vue.component(cmp.componentName, cmp.componentOptions);
    });
  }
}
 