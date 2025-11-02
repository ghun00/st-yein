import FloatingTabs from '../../components/FloatingTabs'

/**
 * 윈터 특강 페이지
 */
export default function WinterPage() {
  return (
    <main className="min-h-screen">
      <FloatingTabs />
      
      <section className="bg-brand-orange min-h-screen flex items-center py-section-mobile md:py-section-tablet lg:py-section-desktop">
        <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-white text-[42px] md:text-[56px] font-bold mb-4">
            윈터 특강 안내
          </h1>
          <p className="text-white text-[16px] md:text-[18px] opacity-90">
            Coming soon
          </p>
        </div>
      </section>
    </main>
  )
}


