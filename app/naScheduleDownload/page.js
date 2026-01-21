import DownloadPage from '../../components/DownloadPage'

export default function NaScheduleDownloadPage() {
  return (
    <DownloadPage
      subtitle="ST-예인이 직접 제작한"
      title="미대입시 나군 추가 합격 일정"
      description="미대입시 나군 추가 합격 일정을 지금 바로 확인하세요"
      downloadPath="/na_schedule.pdf"
      downloadButtonText="합격 일정 정리본 바로 받기"
      secondaryButtonText="겨울 집중 관리 프로그램 보기"
      secondaryButtonLink="/winter"
    />
  )
}
