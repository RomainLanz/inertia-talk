<script lang="ts" setup>
	import { WhenVisible } from '@inertiajs/vue3';
	import PageTitle from '~/components/page_title.vue';

	defineProps<{
		comments?: any;
	}>();
</script>

<template>
	<PageTitle title="When Visible" />

	<div class="bg-red-300 border border-red-400 h-[150vh] rounded-lg mb-8"></div>

	<h2 class="text-3xl font-bold mb-4">Comments</h2>

	<WhenVisible data="comments">
		<template #fallback>
			<span>Loading...</span>
		</template>

		<div class="flex flex-col gap-4">
			<div class="bg-gray-100 border border-gray-300 rounded-lg p-4" v-for="comment in comments" :key="comment.id">
				<div class="flex gap-2 items-center">
					<img class="h-8 rounded-full" :src="comment.user.avatarUrl" alt="" />
					<p class="text-xl font-bold">{{ comment.user.name }}</p>
				</div>

				<p class="mt-4">
					{{ comment.body }}
				</p>
			</div>
		</div>
	</WhenVisible>
</template>
