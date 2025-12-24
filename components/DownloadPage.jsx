'use client'

export default function DownloadPage({
  subtitle = 'ST-예인이 직접 제작한',
  title,
  description,
  downloadPath,
  downloadButtonText,
  secondaryButtonText,
  secondaryButtonLink,
}) {
  const handleDownload = () => {
    window.location.href = downloadPath
  }

  const handleSecondaryAction = () => {
    if (secondaryButtonLink) {
      window.location.href = secondaryButtonLink
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-orange text-white px-4 py-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)] pointer-events-none" aria-hidden="true" />
      <div className="relative w-full max-w-2xl text-center space-y-12 p-10 rounded-[32px] bg-white/5 border border-white/30 shadow-[0_30px_80px_rgba(204,80,0,0.45)] backdrop-blur-2xl">
        <div className="space-y-4">
          <p className="text-lg tracking-[0.2em] text-white uppercase">{subtitle}</p>
          <h1 className="text-4xl font-extrabold leading-tight">{title}</h1>
          <p className="text-lg text-white/85">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          <button
            type="button"
            onClick={handleDownload}
            className="w-full rounded-full bg-white text-brand-orange font-semibold text-lg py-4 shadow-[0_25px_60px_rgba(255,155,75,0.45)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(255,155,75,0.55)] transition-all"
          >
            {downloadButtonText}
          </button>

          {secondaryButtonText && secondaryButtonLink && (
            <button
              type="button"
              onClick={handleSecondaryAction}
              className="w-full rounded-full border border-white/60 text-white font-semibold text-lg py-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:bg-white/10 transition-all"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>

        <div className="space-y-4 text-md text-white/80 mt-10">
          <p>자동 다운로드가 시작되지 않으면 아래 링크를 통해 직접 내려받을 수 있어요.</p>
          <p>
            <a href={downloadPath} download className="underline underline-offset-4">
              직접 내려받기
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}






