<script setup lang="ts">
	import { Link } from '@inertiajs/vue3';
	import PageTitle from '~/components/page_title.vue';
</script>

<template>
	<PageTitle title="Home" />

	<p class="mb-8">Welcome to the homepage !</p>

	<div class="flex flex-col gap-4">
		<Link href="/about">Click here to go to the About page</Link>

		<Link href="/about" prefetch>Hover me to prefetch the page</Link>
	</div>
</template>
