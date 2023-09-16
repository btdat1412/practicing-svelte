import type { Actions } from '@sveltejs/kit';
import { gql } from '@apollo/client/core';
import { client } from '../../../lib/apolloClient.js';

export const actions: Actions = {
	addGame: async ({ request }) => {
		//         implement the addGame mutation here

        
		// 		if (errors) {
		// 			return {
		// 				message: 'There was an error adding the game.'
		// 			};
		// 		}
		// 		return {
		// 			message: 'Game added successfully'
		// 		};
	}
};
