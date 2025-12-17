import fetch from 'node-fetch';
import { load } from 'cheerio';
import { writeFileSync } from 'fs';

const formatName = (name) => name.replace(/([а-яё])([А-ЯЁ])/g, '$1 $2').trim();
const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const fetchHeroPhoto = async (wikiPageUrl) => {
    if (!wikiPageUrl) return null;
    try {
        const fullUrl = wikiPageUrl.startsWith('http') ? wikiPageUrl : `https://ru.wikipedia.org${wikiPageUrl}`;
        const response = await fetch(fullUrl);
        const html = await response.text();
        const $ = load(html);

        const photo = $('.infobox img, .vcard img, .thumbimage').first();
        if (photo.length) {
            let src = photo.attr('src');
            if (src) {
                src = src.replace(/\/\d+px-/, '/300px-');
                return src.startsWith('//') ? `https:${src}` : src;
            }
        }
        return null;
    } catch (error) {
        return null;
    }
};

const parseHeroes = async () => {
    try {
        const response = await fetch('https://ru.wikipedia.org/wiki/Список_Героев_Советского_Союза_(Беларусь)');
        const html = await response.text();
        const $ = load(html);
        const tables = $('table.wikitable');
        let allHeroes = [];

        for (const table of tables) {
            const rows = $(table).find('tr');
            for (let i = 1; i < rows.length; i++) {
                const columns = $(rows[i]).find('td');
                if (columns.length < 6) continue;

                const nameColumn = $(columns[2]);
                const fullNameRaw = nameColumn.text().trim();
                const formattedName = formatName(fullNameRaw);
                if (!formattedName) continue;

                const wikiLink = nameColumn.find('a').attr('href') || null;

                const photoUrl = wikiLink ? await fetchHeroPhoto(wikiLink) : null;

                const hero = {
                    id: allHeroes.length + 1,
                    fullName: formattedName,
                    birthPlace: capitalize($(columns[3]).text().trim()),
                    coordinates: { lat: null, lng: null },
                    deeds: [],
                    biography: capitalize($(columns[7]).text().trim()),
                    photoUrl,
                    wikiPage: wikiLink ? `https://ru.wikipedia.org${wikiLink}` : null,
                    source: "https://ru.wikipedia.org/wiki/Список_Героев_Советского_Союза_(Беларусь)"
                };
                allHeroes.push(hero);
            }
        }

        writeFileSync('heroes_data.json', JSON.stringify(allHeroes, null, 2), 'utf8');

    } catch (error) {
        console.error('Ошибка:', error);
    }
};

parseHeroes();