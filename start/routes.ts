import { setTimeout } from 'node:timers/promises';
import router from '@adonisjs/core/services/router';
import vine from '@vinejs/vine';

router.get('/', ({ inertia }) => {
	return inertia.render('home');
});

router.get('about', async ({ inertia }) => {
	await setTimeout(1000);

	return inertia.render('about');
});

router.get('contact', ({ inertia }) => {
	return inertia.render('contact');
});

router.post('contact', async ({ request, response, session }) => {
	await request.validateUsing(contactFormValidator);

	// Simulate sending an email
	await setTimeout(2000);

	session.flash('success', 'Your message has been sent!');

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

router.get('fragment', ({ inertia }) => {
	return inertia.render('fragment');
});

router.get('server-time', async ({ inertia }) => {
	await setTimeout(1000);

	return inertia.render('server_time', {
		serverTime: new Date().toISOString(),
	});
});

// ------------------------------

const contactFormValidator = vine.compile(
	vine.object({
		name: vine.string().trim().minLength(3).maxLength(255),
		email: vine.string().trim().email(),
		message: vine.string().trim().minLength(10).maxLength(1000),
	})
);

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
			user: {
				name: 'Romain Lanz',
				avatarUrl: 'https://avatars.githubusercontent.com/u/2793951',
			},
			body: 'This is a comment',
		},
		{
			id: 2,
			user: {
				name: 'Julien Ripouteau',
				avatarUrl: 'https://avatars.githubusercontent.com/u/8337858',
			},
			body: 'This is another comment',
		},
	];
}
