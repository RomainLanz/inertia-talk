<script lang="ts" setup>
	import PageTitle from '~/components/page_title.vue';
	import { Deferred } from '@inertiajs/vue3';

	defineProps<{
		users: any;
		metrics?: any;
	}>();
</script>

<template>
	<PageTitle title="Deferred props" />

	<div class="flex gap-4">
		<div class="bg-gray-100 border border-gray-300 rounded-lg p-4 w-72">
			<h2 class="text-4xl font-bold mb-4">Users</h2>

			<Deferred data="metrics">
				<template #fallback>
					<div class="animate-pulse">
						<p class="text-2xl rounded-lg bg-slate-300">&nbsp;</p>
					</div>
				</template>

				<p class="text-2xl">
					{{ metrics.users }}
				</p>
			</Deferred>
		</div>

		<div class="bg-gray-100 border border-gray-300 rounded-lg p-4 w-72">
			<h2 class="text-4xl font-bold mb-4">Posts</h2>

			<Deferred data="metrics">
				<template #fallback>
					<div class="animate-pulse">
						<p class="text-2xl rounded-lg bg-slate-300">&nbsp;</p>
					</div>
				</template>

				<p class="text-2xl">
					{{ metrics.posts }}
				</p>
			</Deferred>
		</div>
	</div>

	<table class="min-w-full border border-gray-300 overflow-hidden whitespace-nowrap mt-8">
		<thead>
			<tr>
				<th
					class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left font-medium uppercase leading-4 tracking-wider text-gray-700"
				>
					Username
				</th>
				<th
					class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left font-medium uppercase leading-4 tracking-wider text-gray-700"
				>
					Email
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users" :key="user.id">
				<td class="px-6 py-4 leading-5">{{ user.username }}</td>
				<td class="px-6 py-4 leading-5">{{ user.email }}</td>
			</tr>
		</tbody>
	</table>
</template>
