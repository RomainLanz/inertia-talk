<script lang="ts" setup>
	import { defineProps } from 'vue';

	defineProps<{
		serverTime: string;
	}>();
</script>

<template>
	<p class="text-lg mb-4">
		Server Time: <strong class="font-bold">{{ serverTime }}</strong>
	</p>
</template>
