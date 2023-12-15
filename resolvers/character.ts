import {GraphQLError} from "graphql";
import { EpisodeApi } from "../types.ts";
import { CharacterApi } from "../types.ts";

export const Character = {
    episode: async (parent: CharacterApi): Promise<EpisodeApi[]> => {
        const episode = parent.episode;
        const episodeAPI = await Promise.all(
            episode.map(async (url) => {
                const data = await fetch(url);
                if(data.status !== 200) throw new GraphQLError("Error"); 
                return await data.json();
            }),
        );
        return episodeAPI;
    }
};