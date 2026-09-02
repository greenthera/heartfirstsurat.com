import { Link } from 'react-router'
import { asset } from '@/lib/asset'

export default function BrandMark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex max-w-[176px] items-center"
      aria-label="HeartFirst Surat home"
    >
      <img
        src={asset('/original-assets/logo.webp')}
        alt="HeartFirst Cardiac and Vascular Centre"
        className="h-auto w-full"
        width="1024"
        height="334"
      />
    </Link>
  )
}
