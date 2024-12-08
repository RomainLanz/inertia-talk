<script lang="ts" setup>
	import PageTitle from '~/components/page_title.vue';
	import LoadFragment from '~/components/load_fragment.vue';
	import ClientOnly from '~/components/client_only';
</script>

<template>
	<PageTitle title="Fragment" />

	<p class="text-lg mb-4">
		<ClientOnly>
			Client Time: <strong class="font-bold">{{ new Date().toISOString() }}</strong>
		</ClientOnly>
	</p>

	<LoadFragment source="/server-time">
		<template #fallback>
			<p>Loading...</p>
		</template>
	</LoadFragment>
</template>
