<h1>Hello. I set up for you 2 exercises.</h1>
<h2>One is a syntax with 7 examples</h2>
<ul>
	{#each Array(7) as _, index (index + 1)}
		<li>
			<a href={`/practices-syntax/${index + 1}`}>Exercise {index}</a>
		</li>
	{/each}
</ul>

<h2>
	The other is a setup Apollo Client for the GraphQL, with a simple query game, review and platform.
</h2>
<p>
	This one using Back End that I created in my previous learning with GraphQL, it was written in
	Nodejs, you can see the source code in the /server
</p>
<p>To run the Back End try "npm start".</p>
<p>
	You may want to try some query, mutation in the Apollo sandbox first before starting this
	exercise. When you're fully ready with GraphQL knowledge, let's dive right into it
</p>
<h2>First, you need to go to lib/apolloClient.ts to setup the Apollo Client to run GraqhQL</h2>
<h3>
	Let's start with the query: 
	<a href="/practice-graphql/query">Query</a>
</h3>
<li>
	First, you need to go to +page.server.ts to fetch the data from the server, implement the load
	function for the query
</li>
<li>
	You need to be able to query the Game and the Review along with it to complete this exercise
</li>

<h3>Next is the mutation:  
    <a href="/practice-graphql/mutation">Mutation</a>
</h3>

<li>
	This will be similar to the query you did before. But you need to deal with the form actions from
	svelte in order to complete it perfectly
</li>
<li>
	You need to add a game with title and platform, using form actions svelte to complete the
	exercise
</li>
