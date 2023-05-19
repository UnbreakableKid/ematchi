<script lang="ts">
	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	span {
		font-size: 5em;
		margin: 0.25em;
	}
</style>
