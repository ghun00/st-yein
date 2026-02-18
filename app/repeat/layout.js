import { SITE_URL } from '../../lib/seo'

export const metadata = {
  alternates: { canonical: `${SITE_URL}/repeat` },
}

export default function RepeatLayout({ children }) {
  return children
}
