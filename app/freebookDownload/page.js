import DownloadPage from '../../components/DownloadPage'

export default function FreebookDownloadPage() {
  return (
    <DownloadPage
      subtitle="ST-예인이 직접 제작한"
      title="무료 전략집 다운로드"
      description="고1 고2 예체능 입시생 위한 분석과 전략을 한 권에 담았습니다."
      downloadPath="/freebookForUnder2.pdf"
      downloadButtonText="전략집 PDF 바로 받기"
      secondaryButtonText="겨울 집중 관리 프로그램 보기"
      secondaryButtonLink="/winter"
    />
  )
}

