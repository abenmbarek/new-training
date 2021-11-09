import ThirdPortletVue from './components/ThirdPortletVue.vue';
import ThirdPortletDashboard from './components/ThirdPortletDashboard.vue';
import ClientsList from './components/ClientsList.vue';
import TimeTrackingDrawer from '../PortletTwo/components/TimeTrackingDrawer.vue';

const components = {
  'third-portlet-vue': ThirdPortletVue,
  'third-portlet-dashboard': ThirdPortletDashboard,
  'clients-list': ClientsList,
  'time-tracking-drawer ': TimeTrackingDrawer,
};

for (const key in components) {
  Vue.component(key, components[key]);
}