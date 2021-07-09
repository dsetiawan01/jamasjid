import Vue from 'vue'
const moment = require('moment')
require('moment/locale/id')

moment.locale('id');
Vue.use(require('vue-moment'), {
    moment
})

// Choose Locale

export { moment }
