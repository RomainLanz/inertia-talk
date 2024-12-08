<script lang="ts" setup>
	import { Link } from '@inertiajs/vue3';
</script>

<template>
	<div class="font-display flex text-gray-800 min-h-screen text-lg">
		<aside class="basis-96 bg-gray-200 border-r border-gray-300 p-6">
			<p class="text-3xl font-bold mb-8">InertiaJS</p>

			<div>
				<ul class="list-none text-xl flex flex-col gap-4">
					<li>
						<Link
							class="hover:text-blue-500 transition-colors"
							:class="{ 'text-blue-500': $page.url === '/' || $page.url === '/about' }"
							href="/"
						>
							Routing
						</Link>
					</li>
					<li>
						<Link
							class="hover:text-blue-500 transition-colors"
							:class="{ 'text-blue-500': $page.url === '/contact' }"
							href="/contact"
						>
							Form
						</Link>
					</li>
					<li>
						<Link
							class="hover:text-blue-500 transition-colors"
							:class="{ 'text-blue-500': $page.url === '/polling' }"
							href="/polling"
						>
							Polling
						</Link>
					</li>
					<li>
						<Link
							class="hover:text-blue-500 transition-colors"
							:class="{ 'text-blue-500': $page.url === '/when-visible' }"
							href="/when-visible"
						>
							When Visible
						</Link>
					</li>
					<li>
						<Link
							class="hover:text-blue-500 transition-colors"
							:class="{ 'text-blue-500': $page.url === '/defer' }"
							href="/defer"
						>
							Deferred props
						</Link>
					</li>
					<li>
						<Link
							class="hover:text-blue-500 transition-colors"
							:class="{ 'text-blue-500': $page.url === '/fragment' }"
							href="/fragment"
						>
							Fragments
						</Link>
					</li>
				</ul>
			</div>
		</aside>

		<main class="flex-grow p-6">
			<slot />
		</main>
	</div>
</template>
