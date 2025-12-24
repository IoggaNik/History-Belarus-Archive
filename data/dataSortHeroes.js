import heroes_data from '../src/heroes_data.json';

const cleanText = (text) => {
    if (!text) return '';
    return text
        .replace(/\{[\s\S]*?\}/g, '') 
        .replace(/[.#][a-zA-Z][a-zA-Z0-9_-]*/g, '') 
        .replace(/@[a-zA-Z-]+/g, '')
        .replace(/[a-zA-Z0-9-]*[:;>~{}()][a-zA-Z0-9-]*/g, '')
        .replace(/[a-zA-Z]{2,}/g, '') 
        .replace(/[{}()]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
};

export const sortedHeroes = heroes_data.map(hero => ({
    ...hero,
    fullName: cleanText(hero.fullName),
    biography: cleanText(hero.biography),
    rank: cleanText(hero.rank)
})).sort((a, b) => a.fullName.localeCompare(b.fullName, 'ru'));