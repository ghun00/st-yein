import { SITE_URL } from '../../lib/seo'

export const metadata = {
  alternates: { canonical: `${SITE_URL}/winter` },
}

export default function WinterLayout({ children }) {
  return children
}
