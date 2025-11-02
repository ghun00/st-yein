import FloatingTabs from '../components/FloatingTabs'
import Hero from '../components/Hero'
import Contents from '../components/Contents'
import CommonTraits from '../components/CommonTraits'
import ClosingCTA from '../components/ClosingCTA'

/**
 * 메인 랜딩 페이지
 * 
 * 섹션 구조:
 * - FloatingTabs: 플로팅 탭 네비게이션
 * - Hero: 메인 히어로 섹션 (주황색 배경)
 * - Contents (#guide): 전략 자료집 내용 목록 (검은색 배경)
 * - CommonTraits: 성적 상승 학생들의 공통점 (주황색 배경)
 * - ClosingCTA: 최종 CTA 섹션 (검은색 배경)
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingTabs />
      
      <Hero />
      
      <Contents />
      
      <CommonTraits />
      
      <ClosingCTA />
    </main>
  )
}

