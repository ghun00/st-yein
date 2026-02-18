import { SITE_URL } from '../lib/seo'
import FloatingTabs from '../components/FloatingTabs'
import Hero from '../components/Hero'
import BrandIntroSection from '../components/BrandIntroSection'
import Contents from '../components/Contents'
import CommonTraits from '../components/CommonTraits'
import ClosingCTA from '../components/ClosingCTA'

export const metadata = {
  alternates: { canonical: SITE_URL },
}

/**
 * 메인 랜딩 페이지
 * 섹션: FloatingTabs → Hero → BrandIntro(SEO) → Contents → CommonTraits → ClosingCTA
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingTabs />

      <Hero />

      <BrandIntroSection />

      <Contents />
      
      <CommonTraits />
      
      <ClosingCTA />
    </main>
  )
}

