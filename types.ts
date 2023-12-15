export type CharacterApi = {
    id: number,
    name: string,
    episode: string[]
};

export type EpisodeApi = {
    id: number,
    name: string,
    characters: string[]
};

export type Character = {
    id: string,
    name: string,
    episode: Episode[]
};

export type Episode = {
    id: string,
    name: string,
    characters: Character[]
};