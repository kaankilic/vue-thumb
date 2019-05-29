const VueThumb = {
	install(Vue, options) {
		if (install.installed) return;
		install.installed = true;
		Vue.component('vue-thumb', require('./components/VueThumb.vue').default);
	}
};

export default VueThumb;
