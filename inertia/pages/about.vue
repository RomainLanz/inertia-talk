<script setup lang="ts">
	import { Link } from '@inertiajs/vue3';
	import PageTitle from '~/components/page_title.vue';
	import ServerTime from '~/fragments/server_time.vue';

	defineProps<{
		serverTime: string;
	}>();
</script>

<template>
	<PageTitle title="About" />

	<p class="mb-8">Welcome to the About page!</p>

	<ServerTime :serverTime="serverTime" />

	<Link href="/">Click here to go to the homepage</Link>
</template>
