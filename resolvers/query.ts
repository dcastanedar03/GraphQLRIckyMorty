import {GraphQLError} from "graphql";
import { CharacterApi } from "../types.ts";

export const Query = {
    character: async (_: unknown, args: {id: string}): Promise<CharacterApi>=> {
        const id = args.id;
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if(data.status !== 200){
            throw new GraphQLError("Error");
        }

        const response = await data.json();

        return response;
    },
    charactersByIds: async (_: unknown, args: { ids: string[] }): Promise<Array<CharacterApi>> => {
        const { ids } = args;
        const characters = await fetch(`https://rickandmortyapi.com/api/character/${ids.toString()}`);
        if(characters.status !== 200){
            throw new GraphQLError("Error");
        }

        return characters.json();
      },
};