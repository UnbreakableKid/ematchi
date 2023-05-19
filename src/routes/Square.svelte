<script lang="ts">
	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	{#if !found}
		<span>{emoji}</span>
	{/if}
</div>

<style>
	.square {
		background: red;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flipped button {
		background: red;
	}

	span {
		font-size: 5em;
		pointer-events: none;
	}

	button {
		width: 100%;
		height: 100%;
		position: absolute;
		border: none;
		cursor: pointer;
	}
</style>
