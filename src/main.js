import VueThumb from './VueThumb.vue';
export default {
	install(Vue) {
		if (install.installed) return;
		install.installed = true;
		Vue.component('VueThumb', VueThumb);
	}
}
