import VueThumb from './components/VueThumb.vue';
export default {
	install(Vue) {
		if (install.installed) return;
		install.installed = true;
		Vue.component('VueThumb', VueThumb);
	}
}
