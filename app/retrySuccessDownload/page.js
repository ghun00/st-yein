import DownloadPage from '../../components/DownloadPage'

export default function RetrySuccessDownloadPage() {
  return (
    <DownloadPage
      subtitle="ST-예인이 직접 제작한"
      title="예체능 입시생 재수 성공 방정식"
      description="예체능 입시생의 재수 성공을 위한 모든 것을 공개합니다!"
      downloadPath="/26success.pdf"
      downloadButtonText="자료집 pdf 바로 받기"
      secondaryButtonText="겨울 집중 관리 프로그램 보기"
      secondaryButtonLink="/winter"
    />
  )
}

