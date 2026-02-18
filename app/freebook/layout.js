import { SITE_URL } from '../../lib/seo'

export const metadata = {
  alternates: { canonical: `${SITE_URL}/freebook` },
}

export default function FreebookLayout({ children }) {
  return children
}
