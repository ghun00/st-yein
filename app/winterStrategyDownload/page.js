import DownloadPage from '../../components/DownloadPage'

export default function WinterStrategyDownloadPage() {
  return (
    <DownloadPage
      subtitle="ST-예인이 직접 제작한"
      title="예체능 입시생을 위한 과목별 겨울방학 과목별 학습 전략집"
      description="예체능 입시생을 위한 과목별 겨울방학 과목별 학습 전략 대공개합니다."
      downloadPath="/winterStudyBook.pdf"
      downloadButtonText="자료집 pdf 바로 받기"
      secondaryButtonText="겨울 집중 관리 프로그램 보기"
      secondaryButtonLink="/winter"
    />
  )
}

