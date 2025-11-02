import FloatingTabs from '../../components/FloatingTabs'

/**
 * 재수 종합반 페이지
 */
export default function RepeatPage() {
  return (
    <main className="min-h-screen">
      <FloatingTabs />
      
      <section className="bg-ink min-h-screen flex items-center py-section-mobile md:py-section-tablet lg:py-section-desktop">
        <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-white text-[42px] md:text-[56px] font-bold mb-4">
            재수 종합반 안내
          </h1>
          <p className="text-white text-[16px] md:text-[18px] opacity-90">
            Coming soon
          </p>
        </div>
      </section>
    </main>
  )
}


