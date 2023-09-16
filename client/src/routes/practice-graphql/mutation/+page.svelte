<!-- +page.svelte -->

<script lang="ts">
	import { enhance } from '$app/forms';
	// export let form;
</script>

<main>
	<h2>Add New Game</h2>
	<!-- <form
		method="post"
		action="?/addGame"
		use:enhance={async () => {
			return async ({ update }) => {
				await update({ reset: false });
			};
		}}
	>
		<label>
			Title:
			<input id="title" name="title" type="text" />
		</label>
		<label>
			Platform:
			<input id="platform" name="platform" type="text" />
		</label>
		<button type="submit">Add Game</button>
	</form>
	<p>{form ? form.message : ''}</p> -->
</main>
