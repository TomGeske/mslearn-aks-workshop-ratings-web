import Vue from 'vue';
import App from './App';
import router from './router';
import 'at-ui-style';
import AtUI from 'at-ui';

const appInsights = require('applicationinsights');
appInsights.setup('ae210bde-b2cb-424e-abd8-56954f99b974')
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();

Vue.config.productionTip = false;
Vue.use(AtUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

