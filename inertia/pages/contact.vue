<script lang="ts" setup>
	import PageTitle from '~/components/page_title.vue';
	import { useForm } from '@inertiajs/vue3';

	const form = useForm({
		name: '',
		email: '',
		message: '',
	});

	function onSubmit() {
		form.post('/contact');
	}
</script>

<template>
	<PageTitle title="Contact" />

	<div class="flex gap-4">
		<form @submit.prevent="onSubmit" class="flex flex-col gap-4 w-1/2">
			<label>
				<span class="block">Name</span>
				<input v-model="form.name" type="text" class="border border-gray-300 rounded-lg p-2 w-96" />
				<span v-if="form.errors.name" class="text-red-500">
					{{ form.errors.name }}
				</span>
			</label>

			<label>
				<span class="block">Email</span>
				<input v-model="form.email" type="email" class="border border-gray-300 rounded-lg p-2 w-96" />
			</label>

			<label>
				<span class="block">Message</span>
				<textarea v-model="form.message" class="border border-gray-300 rounded-lg p-2 w-96"></textarea>
			</label>

			<div>
				<button
					class="bg-yellow-300 flex gap-2 items-center rounded-lg border border-yellow-400 px-4 py-2"
					type="submit"
				>
					<svg
						v-if="form.processing"
						class="animate-spin -ml-1 h-5 w-5 text-yellow-800"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>

					Submit
				</button>
			</div>
		</form>

		<pre class="w-1/2 bg-gray-100 border border-gray-300 rounded-lg p-6">{{ form }}</pre>
	</div>
</template>
