import DownloadPage from '../../components/DownloadPage'

export default function Art2026DownloadPage() {
  return (
    <DownloadPage
      subtitle="ST-예인이 직접 제작한"
      title="2026학년도 미술대학 군별 정리본 다운로드"
      description="2026학년도 미술대학 유형별 입시 정보를 담았습니다."
      downloadPath="/art2026Group.pdf"
      downloadButtonText="정리집 PDF 바로 받기"
      secondaryButtonText="겨울 집중 관리 프로그램 보기"
      secondaryButtonLink="/winter"
    />
  )
}

