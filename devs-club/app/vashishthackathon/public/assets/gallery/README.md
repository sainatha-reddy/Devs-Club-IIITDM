# Gallery Images

Place your gallery images in this folder.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

After adding images, update the `galleryImages` array in `components/Gallery.tsx`:

```typescript
const galleryImages = [
  { id: 1, src: '/assets/gallery/1.jpg', alt: 'Description 1' },
  { id: 2, src: '/assets/gallery/2.jpg', alt: 'Description 2' },
  // ... add more images
];
```

Note: Paths must start with `/assets/gallery/` (the leading slash is important).

