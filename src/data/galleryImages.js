// Auto-loads every image in src/assets/gallery/ named photo1, photo2, ...
// Supported extensions: jpg / jpeg / png / webp.
//
// To enable hover labels later (organisation name + year), add entries to
// the photoMetadata map below keyed by the photo number. Any image without
// metadata will simply render without a label — safe to wire in gradually.
//
//   photoMetadata = {
//     1: { org: 'Indian Oil Corporation', year: 2022 },
//     2: { org: 'Tata Motors',            year: 2023 },
//   }

export const photoMetadata = {
  // 1: { org: '', year: '' },
}

const modules = import.meta.glob(
  '../assets/gallery/photo*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
)

export const galleryImages = Object.entries(modules)
  .map(([path, src]) => {
    const n = parseInt(path.match(/photo(\d+)/i)?.[1] ?? '0', 10)
    return { n, src, ...(photoMetadata[n] ?? {}) }
  })
  .sort((a, b) => a.n - b.n)
