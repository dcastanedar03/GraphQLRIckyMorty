import {GraphQLError} from "graphql";
import { EpisodeApi } from "../types.ts";
import { CharacterApi } from "../types.ts";

export const Episode = {
    episode: async (parent: EpisodeApi): Promise<CharacterApi[]> => {
        const characters = parent.characters;
        const charactersAPI = await Promise.all(
            characters.map(async (url) => {
                const data = await fetch(url);
                if(data.status !== 200) throw new GraphQLError("Error"); 
                return await data.json();
            }),
        );
        return charactersAPI;
    },
};