import { crossfade } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	easing: cubicOut,
	duration: 400
});
