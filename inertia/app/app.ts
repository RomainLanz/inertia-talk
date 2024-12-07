/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css';
import { createSSRApp, h } from 'vue';
import type { DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from '@adonisjs/inertia/helpers';
import { setLayout } from '~/app/helpers';

void createInertiaApp({
	progress: { color: '#5468FF' },

	title: () => 'InertiaJS - RomainLanz',

	resolve: async (name) => {
		const page = await resolvePageComponent(
			`../pages/${name}.vue`,
			import.meta.glob<DefineComponent>('../pages/**/*.vue')
		);

		setLayout(name, page);

		return page;
	},

	setup({ el, App, props, plugin }) {
		createSSRApp({ render: () => h(App, props) })
			.use(plugin)
			.mount(el);
	},
});
