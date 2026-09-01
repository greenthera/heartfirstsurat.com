// Convert every raster image in public/original-assets/ to .webp and remove the original.
import { readdirSync, statSync, unlinkSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const DIR = 'public/original-assets'
const RASTER = new Set(['.jpg', '.jpeg', '.png'])

const files = readdirSync(DIR).filter(f => RASTER.has(extname(f).toLowerCase()))

for (const f of files) {
  const src = join(DIR, f)
  const out = join(DIR, basename(f, extname(f)) + '.webp')
  await sharp(src).webp({ quality: 82, effort: 5 }).toFile(out)
  const before = statSync(src).size
  const after = statSync(out).size
  unlinkSync(src)
  console.log(`${f} -> ${basename(out)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}

console.log(`converted ${files.length} images`)
