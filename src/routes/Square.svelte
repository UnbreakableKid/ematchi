<script lang="ts">
	import { send } from './transitions';
	import { getTwemojiURL } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;

	export let group: 'a' | 'b';
</script>

<div class="square" class:flipped={selected || found}>
	<button on:click />
	<div class="background" />
	{#if !found}
		<img alt={emoji} src={getTwemojiURL(emoji)} out:send={{ key: `${emoji}:${group}` }} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		transition: transform 0.5s;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	img {
		width: 6em;
		height: 6em;
		pointer-events: none;
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}

	.background {
		background: white;
		border: 0.5em solid #eee;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 1em;
	}

	button {
		width: 100%;
		height: 100%;
		position: absolute;
		cursor: pointer;
		backface-visibility: hidden;
		border: none;
		background: #eee;
		border-radius: 1em;
		font-size: inherit;
	}
</style>
