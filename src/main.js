import VueThumb as vThumb from './components/VueThumb.vue';
const VueThumb = {
	install(Vue, options) {
		if (install.installed) return;
		install.installed = true;
		Vue.component('vue-thumb', vThumb);
	}
};

export default VueThumb;
