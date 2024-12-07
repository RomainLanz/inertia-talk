<script lang="ts" setup>
	defineProps<{
		title: string;
	}>();
</script>

<template>
	<h1 class="text-5xl font-bold mb-8">{{ title }}</h1>
</template>
