<script lang="ts">
	import { receive } from './transitions';
	import { getTwemojiURL } from './utils';

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<div class="pair">
			<img src={getTwemojiURL(emoji)} alt={emoji} in:receive={{ key: `${emoji}:a` }} />
			<img src={getTwemojiURL(emoji)} alt={emoji} in:receive={{ key: `${emoji}:b` }} />
		</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1em;
		height: 100%;
		filter: drop-shadow(0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2));
	}

	.pair {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4em;
		height: 4em;
		background: white;
		padding: 1em;
		border-radius: 50%;
	}

	img {
		position: absolute;
		width: 2em;
		height: 2em;
	}
</style>
