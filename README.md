# practicing-svelte

# Hello. I set up for you 2 exercises.
## You can go to `/client`, run `npm run dev` to read this instruction in Landing Page ( I've also add the link to the specific test )

## One is a syntax with 7 examples

## The other is a setup Apollo Client for the GraphQL, with a simple query game, review, and platform.

This one uses the Back End that I created in my previous learning with GraphQL, which was written in Node.js. You can see the source code in the `/server` directory.

To run the Back End, try `npm start`.

You may want to try some queries and mutations in the Apollo sandbox first before starting this exercise. When you're fully ready with GraphQL knowledge, let's dive right into it.

### First, you need to go to `lib/apolloClient.ts` to set up the Apollo Client to run GraphQL.

#### Let's start with the query:

1. First, you need to go to `+page.server.ts` to fetch the data from the server, implement the load function for the query.

2. You need to be able to query the Game and the Review along with it to complete this exercise.

#### Next is the mutation:

1. This will be similar to the query you did before. But you need to deal with the form actions from Svelte in order to complete it perfectly.

2. You need to add a game with title and platform, using form actions Svelte to complete the exercise.
