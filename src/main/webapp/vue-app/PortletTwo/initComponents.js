import MyPortletVue from './components/MyPortletVue.vue';
import PortletDashboard from './components/PortletDashboard.vue';
import TimeTrackingDrawer from './components/TimeTrackingDrawer.vue';

const components = {
  'my-portlet-vue': MyPortletVue,
  'portlet-dashboard': PortletDashboard,
  'time-tracking-drawer': TimeTrackingDrawer,
};

for (const key in components) {
  Vue.component(key, components[key]);
}