<script setup lang="ts">
	import { Link } from '@inertiajs/vue3';
	import PageTitle from '~/components/page_title.vue';
</script>

<template>
	<PageTitle title="About" />

	<p class="mb-8">Welcome to the About page!</p>

	<Link href="/">Click here to go to the homepage</Link>
</template>
