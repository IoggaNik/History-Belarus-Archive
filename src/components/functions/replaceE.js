export const replaceE = (str) => {
    if (!str) return '';
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/ё/g, 'е')
        .replace(/Ё/g, 'Е');
};