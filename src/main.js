import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import messages from './locale'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: 'JA',
	messages
})

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	i18n
})

export const eventBus = new Vue();
