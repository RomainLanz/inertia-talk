import { ref } from 'vue';

export function useCounter(defaultValue = 0) {
	const count = ref(defaultValue);

	function increment() {
		count.value++;
	}

	function decrement() {
		count.value--;
	}

	return {
		count,
		increment,
		decrement,
	};
}
