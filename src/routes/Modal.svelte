<div class="modal-background">
	<div class="modal">
		<slot />
	</div>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(10px);
		display: grid;
		place-items: center;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
</style>
