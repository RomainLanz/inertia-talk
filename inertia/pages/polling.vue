<script lang="ts" setup>
	import { usePoll } from '@inertiajs/vue3';
	import PageTitle from '~/components/page_title.vue';
	import { useCounter } from '~/features/use_counter';
	import ServerTime from '~/fragments/server_time.vue';

	defineProps<{
		serverTime: string;
	}>();

	usePoll(1000);
	const { count, increment } = useCounter();
</script>

<template>
	<PageTitle title="Polling" />

	<ServerTime :server-time="serverTime" />

	<button class="bg-yellow-300 rounded-lg border border-yellow-400 px-4 py-2" @click="increment">
		You clicked {{ count }}
	</button>
</template>
