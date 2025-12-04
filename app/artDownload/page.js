import DownloadPage from '../../components/DownloadPage'

export default function ArtDownloadPage() {
  return (
    <DownloadPage
      subtitle="ST-예인이 직접 제작한"
      title="미대 실기 기출 정리집 다운로드"
      description="미술 대학 중 주요 대학의 1~3개년간 실기 기출을 담았습니다."
      downloadPath="/previous silgi_st-yein.pdf"
      downloadButtonText="정리집 PDF 바로 받기"
      secondaryButtonText="겨울 집중 관리 프로그램 보기"
      secondaryButtonLink="/winter"
    />
  )
}

