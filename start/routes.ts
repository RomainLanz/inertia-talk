import { setTimeout } from 'node:timers/promises';
import router from '@adonisjs/core/services/router';

router.get('/', ({ inertia }) => {
	return inertia.render('home');
});

router.get('about', ({ inertia }) => {
	return inertia.render('about');
});

router.get('contact', ({ inertia }) => {
	return inertia.render('contact');
});

router.post('contact', async ({ request, response, session }) => {
	await setTimeout(2000);

	return response.redirect().back();
});

// InertiaJS v2.0
router.get('polling', ({ inertia }) => {
	return inertia.render('polling', {
		serverTime: new Date().toISOString(),
	});
});

router.get('when-visible', ({ inertia }) => {
	return inertia.render('when-visible', {
		comments: inertia.optional(getComments),
	});
});

router.get('defer', ({ inertia }) => {
	return inertia.render('defer', {
		users: [{ id: 1, username: 'romainlanz', email: 'hello@romainlanz.com' }],
		metrics: inertia.defer(getMetrics),
	});
});

async function getMetrics() {
	await setTimeout(5000);

	return {
		users: 100,
		posts: 200,
	};
}

async function getComments() {
	await setTimeout(2000);

	return [
		{
			id: 1,
			body: 'This is a comment',
		},
		{
			id: 2,
			body: 'This is another comment',
		},
	];
}
