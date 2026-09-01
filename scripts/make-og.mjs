// Generates a simple 1200x630 Open Graph PNG (solid indigo with a yellow bar).
import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

const W = 1200
const H = 630
const indigo = [0x3f, 0x51, 0xb5]
const yellow = [0xff, 0xea, 0x00]

const raw = Buffer.alloc((W * 3 + 1) * H)
for (let y = 0; y < H; y++) {
  const rowStart = y * (W * 3 + 1)
  raw[rowStart] = 0 // filter type: none
  const onBar = y > 470 && y < 478
  for (let x = 0; x < W; x++) {
    const [r, g, b] = onBar && x > 90 && x < 250 ? yellow : indigo
    const p = rowStart + 1 + x * 3
    raw[p] = r
    raw[p + 1] = g
    raw[p + 2] = b
  }
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const typeBuf = Buffer.from(type, 'ascii')
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])) >>> 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return ~c
}

const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(W, 0)
ihdr.writeUInt32BE(H, 4)
ihdr[8] = 8 // bit depth
ihdr[9] = 2 // colour type: truecolour
const png = Buffer.concat([
  sig,
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw)),
  chunk('IEND', Buffer.alloc(0)),
])

writeFileSync('public/og-cover.png', png)
console.log(`wrote public/og-cover.png (${png.length} bytes)`)
