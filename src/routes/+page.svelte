<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';
	import { confetti } from '@neoconfetti/svelte';

	let state: 'waiting' | 'playing' | 'won' | 'paused' | 'lost' = 'waiting';

	let game: Game;
</script>

<Game
	bind:this={game}
	on:play={() => {
		state = 'playing';
	}}
	on:lose={() => {
		state = 'lost';
	}}
	on:win={() => {
		state = 'won';
	}}
	on:pause={() => {
		state = 'paused';
	}}
/>

{#if state !== 'playing'}
	<Modal>
		<header>
			<h1>e<span>match</span>i</h1>
			<p>the emoiji matching game</p>
		</header>
		{#if state === 'won' || state === 'lost'}
			<h1>You {state}!</h1>
		{:else if state === 'paused'}
			<h1>Paused</h1>
			<p>Click to resume</p>
		{:else if state === 'waiting'}
			<p>Click to start</p>
		{/if}

		<div class="buttons">
			{#if state === 'paused'}
				<button>resume</button>
				<button>quit</button>
			{:else}
				{#each levels as level}
					<button
						on:click={() => {
							game.start(level);
						}}>{level.label}</button
					>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}

{#if state === 'won'}
	<div
		class="confetti"
		use:confetti={{
			stageHeight: innerHeight,
			stageWidth: innerWidth
		}}
	/>
{/if}

<style>
	h1 {
		font-size: 4em;
	}

	h1 span {
		color: purple;
	}

	p {
		font-family: Grandstander;
	}

	.confetti {
		position: fixed;
		top: 30%;
		left: 50%;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1000;
	}
</style>
