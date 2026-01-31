'use client'

import { useState, useEffect } from 'react'
import FloatingTabs from '../../components/FloatingTabs'
import { sendGAEvent } from '../../lib/ga'
import ScrollReveal from '../../components/ScrollReveal'
import { FaPhone } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const EVENT_BAR_STORAGE_KEY = 'repeat_event_bar_dismissed'

// 이벤트 상단 고정 앱 바
function EventAppBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = sessionStorage.getItem(EVENT_BAR_STORAGE_KEY)
    if (dismissed === '1') setVisible(false)
  }, [])

  const handleClose = () => {
    sessionStorage.setItem(EVENT_BAR_STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1a1a1d] text-white flex items-center px-3 py-2 md:px-6 md:py-3">
      {/* 왼쪽 여백 - 텍스트 중앙 정렬을 위해 */}
      <div className="flex-1 min-w-0" aria-hidden />
      {/* 중앙 텍스트 */}
      <p className="flex-shrink-0 text-xs md:text-sm leading-[1.4] text-center px-2 max-w-[85vw] sm:max-w-none">
        <span className="hidden md:inline">
          ST-예인 10기 모집 이벤트 | 상담 신청 후 요청사항에 &quot;10기 모집&quot;를 작성하시면 첫 달 교육비 10% 선착순 할인!
        </span>
        <span className="md:hidden">
          상담 요청사항에 &quot;10기 모집 &quot; 작성하면 첫 달 교육비 10% 선착순 할인!
        </span>
      </p>
      {/* 우측 닫기 버튼 */}
      <div className="flex-1 min-w-0 flex justify-end">
        <button
          type="button"
          onClick={handleClose}
          className="p-1 rounded hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="닫기"
        >
          <IoMdClose className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  )
}

// 히어로 섹션 - YouTube 영상 배경
function HeroSection() {
  return (
    <div className="min-h-screen overflow-hidden relative shrink-0 w-full">
      {/* YouTube 영상 배경 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/7M2WJetlREs?si=gi2YidTLuD7rmW-y&controls=0&autoplay=1&mute=1&loop=1&playlist=7M2WJetlREs&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              objectFit: 'cover'
            }}
          />
        </div>
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] z-[1]" />
      </div>
      
      {/* 텍스트 콘텐츠 */}
      <div className="absolute left-4 md:left-[60px] lg:left-[120px] bottom-[10%] z-10 px-4 md:px-0">
        <div className="font-bold font-extrabold leading-[1.5] not-italic relative shrink-0 text-white text-3xl md:text-3xl lg:text-[60px]">
          <p className="mb-0 leading-[1.5]">
            <span>예체능 재수생은</span>
          </p>
          <p className="leading-[1.5]">왜, 예체능 전문 종합 학원에서 관리를 받아야할까요?</p>
        </div>
      </div>
    </div>
  )
}

// ST예인이 그 이유를 알려드리겠습니다 섹션
function WhySection() {
  const videos = [
    "https://www.youtube.com/embed/eNYdSD3KEzA?si=9XxGLYP5dTqzyHNX&controls=0&autoplay=1&mute=1&loop=1&playlist=eNYdSD3KEzA",
    "https://www.youtube.com/embed/xueGf7GEjb4?si=s0IZT8MafQ8cI9XM&controls=0&autoplay=1&mute=1&loop=1&playlist=xueGf7GEjb4"
  ]

  return (
    <div className="bg-[#f8f8fc] content-stretch flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] items-start overflow-hidden p-6 md:p-12 lg:p-[120px] relative shrink-0">
      <div className="font-bold font-extrabold leading-[1.5] not-italic relative shrink-0 text-[#0d332f] text-xl md:text-2xl lg:text-[48px]">
        <p className="mb-0 leading-[1.5]">
          <span className="text-[#009182]">ST예인</span>
          <span className="text-[#353644]">이</span>
        </p>
        <p className="leading-[1.5] text-[#353644]">그 이유를 알려드리겠습니다.</p>
      </div>
      
      {/* 비디오 - 100% 넓이 */}
      <div className="content-stretch flex flex-col md:flex-row gap-[24px] items-center relative shrink-0 w-full">
        {videos.map((videoSrc, i) => (
          <div key={i} className="aspect-[560/315] flex-1 w-full overflow-hidden relative rounded-[12px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              title={`YouTube video player ${i + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// 실제 사례 섹션
function SuccessCasesSection() {
  const cases = [
    {
      name: "김00",
      major: "디자인",
      quote: "불수능을 현실로 증명하다!\n백분위 184 UP, 탐구 8등급 UP",
      scores: ["국어 : 4 → 1", "수학 : 5 → 3", "영어 : 4 → 2", "탐구 : 6 → 1", "탐구 : 6 → 1"],
      improvement: "15",
      avatar: "/images/Frame 46723-1.png"
    },
    {
      name: "임OO",
      major: "디자인",
      quote: "상상 그이상, 기적 같은 반전!\n수학, 노베 7 → 2",
      scores: ["국어 : 4 → 1", "수학 : 7 → 2", "영어 : 2 → 2", "탐구 : 4 → 1", "탐구 : 4 → 2"],
      improvement: "13",
      avatar: "/images/Frame 46723-4.png"
    },
    {
      name: "박OO",
      major: "디자인",
      quote: "재수를 ST-예인에서 했다면..\n국어 3등급 UP, 탐구 8등급 UP",
      scores: ["국어 : 6 → 3", "영어 : 5 → 5", "탐구 : 6 → 2", "탐구 : 5 → 1"],
      improvement: "11",
      avatar: "/images/Frame 46723-1.png"
    },
    {
      name: "여OO",
      major: "디자인",
      quote: "불수능의 끝판왕, 대학은 내가 정한다!\n국어, 탐구 → All 1등급",
      scores: ["국어 : 2 → 1", "수학 : 6 → 4", "영어 : 2 → 2", "탐구 : 3 → 1", "탐구 : 3 → 1"],
      improvement: "7",
      avatar: "/images/Frame 46723-2.png"
    },
    {
      name: "이OO",
      major: "디자인",
      quote: "백분위, \"59 UP\"\n차분히, 천천히 그리고 결과를 바꾸다",
      scores: ["국어 : 4 → 3", "영어 : 5 → 3", "탐구 : 4 → 3", "탐구 : 5 → 2"],
      improvement: "7",
      avatar: "/images/Frame 46723-3.png"
    },
    {
      name: "최OO",
      major: "회화",
      quote: "탐구 올 1등급, 지방학생이라는 한계를 넘어\n대한민국을 접수하다.",
      scores: ["국어 : 3 → 2", "영어 : 3 → 2", "탐구 : 2 → 1", "탐구 : 5 → 1"],
      improvement: "7",
      avatar: "/images/Frame 46723-4.png"
    },
    {
      name: "이OO",
      major: "체육",
      quote: "백분위, \"85 UP\"\n재수부터 ST예인에서 했었더라면...",
      scores: ["국어 : 4 →3", "수학 : 5 → 3", "영어 : 3 → 3", "탐구 : 3 → 2", "탐구 : 4→ 2"],
      improvement: "6",
      avatar: "/images/Frame 46723-5.png"
    }
  ]

  return (
    <div className="bg-[#0d332f] content-stretch flex flex-col gap-[60px] md:gap-[80px] lg:gap-[120px] items-center overflow-hidden px-6 md:px-12 lg:px-[120px] py-12 md:py-16 lg:py-[80px] relative shrink-0 w-full">
      <ScrollReveal delay={100}>
        <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] not-italic relative shrink-0 text-center">
          <p className="font-medium relative shrink-0 text-[#e4e6f0] text-base md:text-xl lg:text-[32px] leading-[1.5]">2026학년도 실제 사례</p>
          <div className="font-bold relative shrink-0 text-[#01d3be] text-xl md:text-2xl lg:text-[48px]">
            <p className="mb-0 leading-[1.5]">그냥 재수 학원은 많지만,</p>
            <p className="leading-[1.5]">예체능 전문 재수 종합반은 찾기가 어렵습니다.</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] items-center relative shrink-0 w-full max-w-[1200px]">
        {cases.map((caseItem, idx) => (
          <ScrollReveal key={idx} delay={200 + idx * 150}>
            <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[60px] items-center relative shrink-0 w-full">
            {/* 왼쪽 카드 */}
            <div className="bg-gradient-to-r content-stretch flex from-[rgba(13,51,47,0.5)] min-h-[200px] lg:h-[200px] items-center justify-between pr-[16px] py-[24px] relative rounded-br-[99px] rounded-tr-[99px] shrink-0 to-[#27998d] w-full lg:w-[700px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[1.5] not-italic relative shrink-0 flex-1 px-4 lg:px-0 min-w-0">
                <p className="font-bold relative shrink-0 text-[#01d3be] text-base md:text-lg lg:text-[28px] w-full break-words leading-[1.5]">{caseItem.name} | {caseItem.major}</p>
                <div className="font-medium relative shrink-0 text-[#f8f8fc] text-sm md:text-base lg:text-[24px] w-full break-words">
                  <div className="flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px]">
                    {caseItem.quote.split('\n').map((line, lineIdx) => (
                      <p key={lineIdx} className="mb-0 leading-[1.2]">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-[#0d332f] overflow-hidden relative rounded-[999px] shrink-0 size-[120px] md:size-[140px] lg:size-[160px] flex items-center justify-center flex-shrink-0">
                <img alt="" className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] object-contain" src={caseItem.avatar} />
              </div>
            </div>

            {/* 오른쪽 카드 */}
            <div className="bg-gradient-to-r content-stretch flex from-[rgba(13,51,47,0.5)] min-h-[200px] lg:h-[200px] items-center justify-between not-italic pl-[16px] pr-[16px] lg:pr-[60px] py-[24px] relative rounded-br-[99px] rounded-tr-[99px] shrink-0 to-[#27998d] w-full lg:w-[440px]">
              <div className="flex flex-col font-medium justify-center leading-[1.5] relative shrink-0 text-[#f3f4fa] text-[16px] md:text-[16px] lg:text-[20px] min-w-0">
                {caseItem.scores.map((score, i) => (
                  <p key={i} className="mb-0 break-words leading-[1.5]">{score}</p>
                ))}
              </div>
              <div className="content-stretch flex items-baseline leading-[1.5] relative shrink-0 text-[#f8f8fc]">
                <div className="flex flex-col font-extrabold justify-center relative shrink-0 text-[60px] md:text-[70px] lg:text-[80px]">
                  <p className="leading-[1.5]">{caseItem.improvement}</p>
                </div>
                <div className="flex flex-col font-medium justify-center relative shrink-0 text-sm md:text-base lg:text-[24px]">
                  <p className="leading-[1.5]">up</p>
                </div>
              </div>
            </div>
          </div>
            </ScrollReveal>
          ))}
      </div>
    </div>
  )
}

// 실패 이유 섹션
function FailureReasonsSection() {
  return (
    <div className="bg-[#171719] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-hidden rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-6 md:p-12 lg:p-[120px] relative w-full">
          <div className="content-stretch flex flex-col gap-[60px] md:gap-[80px] lg:gap-[120px] items-start not-italic relative shrink-0 w-full max-w-[1008px]">
            <ScrollReveal delay={100}>
              <div className="font-bold leading-[1.5] relative shrink-0 text-2xl md:text-2xl lg:text-[60px] text-white w-full break-words">
                <p className="mb-0 leading-[1.5]">그렇다면,</p>
                <p className="leading-[1.5]">왜 예체능 재수는 실패할까요?</p>
              </div>
            </ScrollReveal>
            
            <div className="content-stretch flex flex-col gap-[50px] md:gap-[70px] lg:gap-[100px] items-start relative shrink-0 w-full">
              <ScrollReveal delay={200}>
                <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] lg:gap-[32px] items-start relative shrink-0 w-full">
                  <p className="font-bold leading-[1.5] relative shrink-0 text-xl md:text-xl lg:text-[40px] text-white w-full break-words">
                    <span className="text-[#fa6616]">실기만 잘하면 된다</span>
                    <span>고 생각합니다.</span>
                  </p>
                  <div className="font-medium leading-[1.5] relative shrink-0 text-[#b7b9c9] text-sm md:text-base lg:text-[32px] w-full break-words flex flex-col gap-[16px]">
                    <p className="mb-0 leading-[1.5]">"결국 대학은 실기로 뽑잖아요."</p>
                    <p className="mb-0 leading-[1.5]">그래서 공부는 뒤로 미루죠.</p>
                    <p className="leading-[1.5]">하지만 수능 점수가 받쳐주지 않는다면, 합격은 어렵습니다.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="content-stretch flex flex-col gap-[20px] md:gap-[24px] lg:gap-[29px] items-start relative shrink-0 w-full">
                  <p className="font-bold leading-[1.5] relative shrink-0 text-xl md:text-xl lg:text-[40px] text-white w-full break-words">
                    <span>{`공부는 `}</span>
                    <span className="text-[#fa6616]">혼자서도 잘할 수 있다</span>
                    <span>고 생각합니다.</span>
                  </p>
                  <div className="font-medium leading-[1.5] relative shrink-0 text-[#b7b9c9] text-sm md:text-base lg:text-[32px] w-full break-words flex flex-col gap-[16px]">
                    <p className="mb-0 leading-[1.5]">"관리까지는 필요 없어요. 알아서 할게요."</p>
                    <p className="mb-0 leading-[1.5]">하지만 실제로는 스스로를 점검할 구조가 없습니다.</p>
                    <p className="leading-[1.5]">계획은 무너지고, 불안은 커집니다.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="content-stretch flex flex-col gap-[20px] md:gap-[24px] lg:gap-[29px] items-start relative shrink-0 w-full">
                  <p className="font-bold leading-[1.5] relative shrink-0 text-xl md:text-xl lg:text-[40px] text-white w-full break-words">
                    <span className="text-[#fa6616]">자유로움이 곧 성적향상</span>
                    <span>으로 이어진다고 생각합니다.</span>
                  </p>
                  <div className="font-medium leading-[1.5] relative shrink-0 text-[#b7b9c9] text-sm md:text-base lg:text-[32px] w-full break-words flex flex-col gap-[16px]">
                    <p className="mb-0 leading-[1.5]">자고 싶은 대로 자고, 하고 싶은 대로 공부합니다.</p>
                    <p className="leading-[1.5]">처음엔 자유롭지만, 결국 집중력과 체력은 바닥나죠.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={650}>
              <p className="font-bold leading-[1.5] relative shrink-0 text-xl md:text-2xl lg:text-[48px] text-white w-full break-words">결국, 실패의 이유는 '관리의 부재'.</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

// 성공 방법 섹션
function SuccessMethodSection() {
  return (
    <div className="bg-[#f3f4fa] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-hidden rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[60px] md:gap-[80px] lg:gap-[120px] items-center px-6 md:px-12 lg:px-[149px] py-12 md:py-16 lg:py-[120px] relative w-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] items-center relative shrink-0 w-full">
            <ScrollReveal delay={100}>
              <p className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#353644] text-xl md:text-2xl lg:text-[48px] text-center break-words">예체능 재수, 이렇게 해야 성공합니다</p>
            </ScrollReveal>
            
            <div className="content-stretch flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-stretch relative shrink-0 w-full">
              {[
                "실기와 학습의 균형을 잡아야 합니다.",
                "매일 꾸준한 루틴을 유지해야 합니다.",
                "성적 불안과 슬럼프를 극복할 멘탈 관리가 필요합니다.",
                "이 모든 과정을 끝까지 버틸 수 있는 관리 체계가 있어야 합니다."
              ].map((text, i) => (
                <ScrollReveal key={i} delay={200 + i * 100}>
                  <div className="bg-white relative rounded-[24px] shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-6 md:px-8 lg:px-[32px] py-6 md:py-6 lg:py-12 relative w-full min-w-0">
                        <p className="font-semibold leading-[1.5] not-italic relative shrink-0 text-[#353644] text-sm md:text-base lg:text-[32px] text-center break-words w-full">{text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] items-center relative shrink-0 w-full max-w-[899px]">
            <ScrollReveal delay={600}>
              <div className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#9395a6] text-xl md:text-2xl lg:text-[48px] text-center break-words">
                <p className="mb-0 leading-[1.5]">이것들만 고려해서</p>
                <p className="leading-[1.5]">재수 준비하면 되는거네요!</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={700}>
              <div className="h-[104px] relative shrink-0 w-[24px]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 104">
                  <circle cx="12" cy="12" fill="#E4E6F0" r="12" />
                  <circle cx="12" cy="52" fill="#B7B9C9" r="12" />
                  <circle cx="12" cy="92" fill="#9395A6" r="12" />
                </svg>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <div className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#353644] text-xl md:text-2xl lg:text-[48px] text-center w-full break-words min-w-0">
                <p className="mb-0 leading-[1.5]">말은 쉽지만,</p>
                <p className="leading-[1.5]">이걸 혼자서 완벽히 해내기는 절대 불가능합니다.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

// ST예인 관리 방법 섹션
function ManagementMethodSection() {
  return (
    <div className="bg-[#f8f8fc] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-hidden rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] items-center px-6 md:px-12 lg:px-[120px] py-12 md:py-16 lg:py-[80px] relative w-full">
            <ScrollReveal delay={100}>
              <div className="content-stretch flex flex-col gap-[24px] md:gap-[30px] lg:gap-[36px] items-center relative shrink-0 w-full max-w-[867px]">
                <div className="bg-[#e4e6f0] content-stretch flex items-center justify-center px-6 md:px-8 lg:px-[32px] py-4 md:py-4 lg:py-[16px] relative rounded-[99px] shrink-0">
                  <p className="font-medium leading-[1.5] not-italic relative shrink-0 text-[#353644] text-sm md:text-base lg:text-[24px]">ST예인 관리</p>
                </div>
                <p className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#353644] text-xl md:text-2xl lg:text-[48px] text-center w-full break-words min-w-0">그래서, 우리는 이렇게 합니다</p>
              </div>
            </ScrollReveal>

            <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] items-stretch relative shrink-0 w-full">
              {/* 학습 전략 */}
              <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] lg:gap-[48px] items-center relative rounded-[32px] shrink-0 w-full">
                <ScrollReveal delay={400}>
                  <div className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#077a5e] text-base md:text-xl lg:text-[36px] text-center w-full break-words">
                    <p className="mb-0 leading-[1.5]">성적은 공부 습관이 결정합니다.</p>
                    <p className="leading-[1.5]">대치 ST-예인은 반드시 성적을 올리는 학습 전략을 제공합니다.</p>
                  </div>
                </ScrollReveal>
                
                <div className="content-stretch flex flex-col gap-[24px] md:gap-[30px] lg:gap-[36px] items-stretch relative shrink-0 w-full">
                  {/* POINT 1 */}
                  <ScrollReveal delay={400}>
                    <div className="bg-gradient-to-b from-[rgba(39,153,141,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,153,141,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#077a5e] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 1</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">진단평가</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">등원 직후, 진단 테스트로 현재 성적과 학습 습관을 데이터화</span>
                        </li>
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">취약 단원, 오답 유형, 공부 태도까지 분석</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">분석 결과를 기반으로 개인 맞춤 학습 플랜 수립 관리 및 세부 과제 부여</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                    </div>
                  </ScrollReveal>

                {/* POINT 2 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(39,153,141,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,153,141,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#077a5e] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 2</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">1:1 SOLUTION</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">국•영 영역별, 수준별 책임 담임제 실시, 개인별로 취약 부분에 대한 세부 과제 매주 부여</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">학생은 매주 확인하고 취약 부분에 대한 습관 탈피</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* POINT 3 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(39,153,141,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,153,141,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#077a5e] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 3</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">예체능 전문 학습</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">예체능 입시생 전문 강사진 구성 (최소 경력 5년)</span>
                        </li>
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">실기를 병행하는 예체능 입시생에 맞추어 관리 선생님들이 최고의 학습 분위기 조성</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">질문 신청표를 통한 상시 질문 및 1:1 피드백 진행</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* 관리 강화 */}
            <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] lg:gap-[48px] items-center relative rounded-[32px] shrink-0 w-full">
              <ScrollReveal delay={400}>
                <p className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#f05705] text-base md:text-xl lg:text-[36px] text-center w-full break-words">관리에 관리를 더하다</p>
              </ScrollReveal>
              
              <div className="content-stretch flex flex-col gap-[24px] md:gap-[30px] lg:gap-[36px] items-stretch relative shrink-0 w-full">
                {/* POINT 1 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(153,90,39,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(161,76,7,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#f05705] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 1</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">엄격한 생활 관리</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">무조건 성적이 오를 수밖에 없도록 기상 문자부터 엄격한 외출 및 지각 관리, 자습 시간 관리 선생님 배치, 귀가 문자를 통한 엄격한 학생 관리 진행</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* POINT 2 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(153,90,39,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(161,76,7,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#f05705] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 2</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">미대 입시 컨설팅</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">김지웅 미대 컨설턴트의 서류 및 면접의 핵심 컨설팅 제공</span>
                        </li>
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">수능, 내신, 실기 수준을 종합한 미대 진학 컨설팅 제공</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">전문화된 미술 이론 강의 제공</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* POINT 3 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(153,90,39,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(161,76,7,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#f05705] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 3</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">멘탈 코칭</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">멘탈 클래스 제공 - 인생 설계, 긍정 심리, 감정 조절 등의 주제</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">1:1 멘탈 코칭 - 월 2회 동기부여 및 수면, 슬럼프 등의 문제에 대한 개개인 맞춤 상담 제공</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* 강사진 및 수업 */}
            <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] lg:gap-[48px] items-center relative rounded-[32px] shrink-0 w-full">
              <ScrollReveal delay={400}>
                <p className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#0077b2] text-base md:text-xl lg:text-[36px] text-center w-full break-words">예체능 입시에 최적화된 강사진 및 수업</p>
              </ScrollReveal>
              
              <div className="content-stretch flex flex-col gap-[24px] md:gap-[30px] lg:gap-[36px] items-stretch relative shrink-0 w-full">
                {/* POINT 1 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(39,102,153,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,102,153,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#0077b2] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 1</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">국어가 강한 학원</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">최적화된 분석, 재밌는 수업, 효율적인 피드백</span>
                        </li>
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">의대 증원에 이어 불수능에도 경이러운 성적 향상</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">매년 놀라운 성적 향상 핵심은 책임 담임제로 운영되는 ST-SOLUTION</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* POINT 2 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(39,102,153,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,102,153,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#0077b2] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 2</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">영어가 효율적인 학원</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">가장 적은 시간을 투자해 3등급을 만드는 효율 강좌 제공</span>
                        </li>
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">영어팀이 직접 개인별 취약 부분을 찾고 개별 과제를 부여하여 솔루션 제공</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">영포자도 가능한 최단기 3등급 완성 전략 제시</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* POINT 3 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(39,102,153,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,102,153,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#0077b2] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 3</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">수학이 전략적인 학원</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">최상위권 / 비실기 대상 8명 이하 소수 정예 그룹 과외식 수업 진행</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">대치 석민쌤(예체능 수학만 8년 이상 베타랑)이 주말에도 함께하는 3등급 killer 프로그램 적용</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* POINT 4 */}
                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-b from-[rgba(39,102,153,0.15)] relative rounded-[24px] md:rounded-[48px] shrink-0 to-[rgba(39,102,153,0)] w-full overflow-visible md:overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto md:size-full">
                    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[48px] items-start md:items-center not-italic px-6 md:px-12 lg:px-[48px] py-6 md:py-12 lg:py-[60px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 w-full md:w-[300px] min-w-0">
                        <p className="font-medium relative shrink-0 text-[#0077b2] text-sm md:text-base lg:text-[24px] w-full break-words leading-[1.5]">POINT 4</p>
                        <p className="font-bold relative shrink-0 text-[#353644] text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">탐구가 특별한 학원</p>
                      </div>
                      <ul className="block flex-1 font-medium leading-[1.5] min-w-0 relative text-[#353644] text-sm md:text-base lg:text-[28px] w-full md:w-auto">
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">강남 대치 1타 강사진의 수업</span>
                        </li>
                        <li className="mb-0 ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">시간이 부족한 예체능 입시생에게 맞는 최적의 탐구 2과목 성적 향상 프로그램 완비</span>
                        </li>
                        <li className="ms-0 md:ms-[42px] leading-[1.5] list-disc list-inside">
                          <span className="break-words">극강의 재미있는 수업, 꼼꼼한 과제, 친절한 질문 답변은 필수</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 생활 관리 섹션
function DailyManagementSection() {
  return (
    <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-hidden rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] items-center px-6 md:px-12 lg:px-[120px] py-12 md:py-16 lg:py-[80px] relative w-full">
            <ScrollReveal delay={100}>
              <div className="content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start leading-[1.5] not-italic relative shrink-0 text-[#353644] text-center w-full max-w-[805.5px]">
                <div className="font-bold relative shrink-0 text-xl md:text-2xl lg:text-[48px] w-full break-words">
                  <p className="mb-0 leading-[1.5]">빈틈 없는 관리는 필수!</p>
                  <p className="leading-[1.5]">예체능 재수 성공 전략의 9할은 관리입니다.</p>
                </div>
                <p className="font-medium relative shrink-0 text-base md:text-xl lg:text-[36px] w-full break-words">"학생의 하루 시작부터 마무리까지 모두 관리합니다."</p>
              </div>
            </ScrollReveal>

            <div className="content-stretch flex flex-col lg:flex-row lg:flex-nowrap gap-6 lg:gap-[48px] items-center relative shrink-0 w-full lg:overflow-x-auto lg:overflow-y-hidden lg:pb-4">
              {[
                {
                  title: "기상 관리",
                  description: "오전 7시 이전 기상 확인 문자 등록을 시작으로 하루의 시작을 규칙적으로 만들고 늦잠·지각을 원천 차단"
                },
                {
                  title: "등원 관리",
                  description: "오전 7시 50분까지 등원 필수 출결을 엄격히 관리하여 생활 리듬을 고정, 학원 내 모든 장소 Silent Zone 운영"
                },
                {
                  title: "엄격한 생활 규율",
                  description: "학원 규칙에 따른 엄격한 관리와 벌점제 시행 실기 병행 학생도 동일하게 생활 관리 적용지각·결석·조퇴 모두 학부모에게 실시간 보고"
                },
                {
                  title: "귀가 관리",
                  description: "12시 00분 이전까지 단톡방에 플래너 내용 전송 필수. 지각시 벌점 적용. 플래너 전송 후 취침할 수 있도록 지도 진행."
                }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={200 + i * 100}>
                  <div className="content-stretch flex flex-col items-start overflow-hidden relative rounded-[32px] shrink-0 flex-shrink-0 w-full lg:w-[534px]">
                <div className="bg-[#f8f8fc] relative shrink-0 w-full">
                  <div className="overflow-hidden rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[1.5] not-italic px-6 md:px-8 lg:px-[36px] py-8 md:py-10 lg:py-[48px] relative text-[#353644] w-full min-w-0">
                      <p className="font-bold relative shrink-0 text-lg md:text-xl lg:text-[36px] w-full break-words leading-[1.5]">{item.title}</p>
                      <div className="font-medium relative shrink-0 text-sm md:text-base lg:text-[24px] w-full break-words">
                        <div className="flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px]">
                          {item.description.split('\n').map((line, lineIdx) => (
                            <p key={lineIdx} className="mb-0 leading-[1.5]">{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#c7f2e4] h-[180px] md:h-[200px] lg:h-[238px] overflow-hidden relative shrink-0 w-full flex items-center justify-center">
                  <img 
                    alt={item.title} 
                    className="h-1/2 object-cover"
                    src={`/images/st-mg-${i + 1}.png`} 
                  />
                </div>
              </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 후기 */}
            <ScrollReveal delay={400}>
              <div className="bg-[#077a5e] content-stretch flex flex-col gap-[24px] md:gap-[30px] lg:gap-[36px] items-center justify-center leading-[1.5] not-italic overflow-hidden p-6 md:p-10 lg:p-[48px] relative rounded-[32px] shrink-0 w-full max-w-[1200px]">
                <div className="font-bold relative shrink-0 text-[#f8f8fc] text-sm md:text-base lg:text-[32px] w-full break-words">
                  <div className="flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px]">
                    <p className="mb-0 leading-[1.5]">플래닝과 모의고사 점검은 굉장히 유익했습니다. 플래닝을 통해 생활 및 공부 습관을 기록하며 매일의 삶에 집중했고, 시험 당일 진행한 모의고사 복기는 다음 공부 방향을 잡는데 수월했습니다. 현역 때와는 차원이 다른 복기를 경험하며 시간 관리와 마인드 세팅까지 큰 도움을 받았습니다.언제나 준비가 되어 있었던 선생님들 덕분에 망설임 없이 도움을 요청하며 재수 생활을 성공적으로 마칠 수 있었습니다.</p>
                  </div>
                </div>
                <p className="font-medium relative shrink-0 text-[#f3f4fa] text-xs md:text-sm lg:text-[24px] w-full break-words leading-[1.5]">국민대학교 회화과 합격생 김OO</p>
              </div>
            </ScrollReveal>

            {/* 영상 */}
            <div className="content-stretch flex items-start relative shrink-0 w-full max-w-[1200px]">
              <div className="aspect-[560/315] w-full overflow-hidden relative rounded-[12px]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/HWneuJ9ix0w?si=JKB8TnOScO5f9h-o&controls=0&autoplay=1&mute=1&loop=1&playlist=HWneuJ9ix0w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <ScrollReveal delay={500}>
              <div className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#353644] text-xl md:text-2xl lg:text-[48px] text-center break-words">
                <p className="mb-0 leading-[1.5]">
                  <span>
                    예체능 입시 학원 선택의 기준은
                    <br aria-hidden="true" />{" "}
                  </span>
                  <span className="text-[#077a5e]">매년 "성적을 올리는 학원" 입니다.</span>
                </p>
                <p className="leading-[1.5]">재수는 시작부터 달라야 합니다.</p>
              </div>
            </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

// 최종 CTA 섹션
function FinalCTASection() {
  return (
    <div className="bg-[#077a5e] relative shrink-0 w-full pb-[60px]">
      <div className="flex flex-col items-center overflow-hidden rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] items-center p-6 md:p-12 lg:p-[120px] relative w-full">
          <p className="font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f8f8fc] text-xl md:text-2xl lg:text-[48px] text-center w-[min-content] break-words">"혼자가 아닌 1:1 맞춤 관리, 그 끝은 당신이 꿈꾸던 합격입니다."</p>
          <a 
            href="/26_repeat_brochure.pdf" 
            download="26_repeat_brochure.pdf"
            className="bg-[#f8f8fc] content-stretch flex items-center justify-center px-8 md:px-16 lg:px-[36px] py-4 md:py-4 lg:py-[24px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#e4e6f0] transition-colors no-underline"
          >
            <p className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#077a5e] text-sm md:text-base lg:text-[24px] break-words">ST예인 재수종합반 상세 브로셔 다운로드</p>
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * 재수 종합반 랜딩 페이지
 */
// 플로팅 CTA 컴포넌트
function FloatingCTA() {
  const handleClick = () => {
    sendGAEvent('repeat_cta_click', {
      cta_text: '재종반 무료 상담 신청',
      cta_url: 'https://naver.me/GbDRJ5zY'
    })
    window.open('https://naver.me/GbDRJ5zY', '_blank')
  }

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-[#077a5e] via-[#27998d] to-[#01d3be] text-white font-bold text-base md:text-lg lg:text-xl px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#01d3be]/50 whitespace-nowrap w-auto min-w-fit"
      >
        재종반 무료 상담 신청
      </button>
    </div>
  )
}

// 플로팅 전화 버튼
function FloatingPhone() {
  return (
    <a
      href="tel:050714958915"
      className="fixed bottom-7 md:bottom-10 right-4 md:right-12 z-50 flex items-center justify-center md:justify-between w-12 h-12 md:w-auto md:h-16 rounded-full bg-[#0D332F] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#01d3be]/50 animate-fade-in px-0 md:pl-6 md:pr-8"
      aria-label="전화 걸기 0507-1495-8915"
    >
      <FaPhone className="w-4 h-4 md:w-7 md:h-7" />
      <span className="hidden md:inline-block ml-3 font-semibold text-lg">
        0507-1495-8915
      </span>
    </a>
  )
}

export default function RepeatPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventAppBar />
      <FloatingTabs />
      <FloatingCTA />
      <FloatingPhone />
      
      <HeroSection />
      <WhySection />
      <SuccessCasesSection />
      <FailureReasonsSection />
      <SuccessMethodSection />
      <ManagementMethodSection />
      <DailyManagementSection />
      <FinalCTASection />
    </main>
  )
}
