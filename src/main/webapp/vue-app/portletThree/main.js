import './initComponents.js';

Vue.use(Vuetify);
const vuetify = new Vuetify(eXo.env.portal.vuetifyPreset);

const appId = 'portlet_three';

//getting language of the PLF
const lang = eXo && eXo.env.portal.language || 'en';

const resourceBundleName = 'locale.addon.VuetifySample';
const url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/${resourceBundleName}-${lang}.json`;

export function init() {
  exoi18n.loadLanguageAsync(lang, url).then(i18n => {
    // init Vue app when locale ressources are ready
    Vue.createApp({
      template: '<third-portlet-dashboard />',
      vuetify,
      i18n
    }, `#${appId}`, 'Portlet Editor Dashboard');
  });
}
