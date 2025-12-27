const images = import.meta.glob('../src/images/photo-war-*.jpg', {
    eager: true,
    import: 'default',
});

export const dataWarPhotos = Object.values(images);