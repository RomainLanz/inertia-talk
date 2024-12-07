import type { DefineComponent } from 'vue';
import Layout from '~/components/layout.vue';

export function setLayout(name: string, page: DefineComponent) {
	if (!page.default) {
		throw new Error(`Page ${name} does not have a default export`);
	}

	if (page.default.layout) {
		return;
	}

	if (name.includes('admin')) {
	} else {
		page.default.layout = Layout;
	}
}
