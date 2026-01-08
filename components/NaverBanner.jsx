'use client'

import Image from 'next/image'

export default function NaverBanner() {
  const handleClick = () => {
    window.open('https://blog.naver.com/jungwk2000/224082456048', '_blank')
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-100 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-[#00C73C] font-bold text-lg sm:text-2xl">
            더 자세한 내용이 궁금하다면?
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[#666666] text-sm sm:text-lg">
              ST-예인 블로그 바로가기
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#666666]"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/icons8-네이버-96.png"
            alt="네이버"
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
        </div>
      </div>
    </div>
  )
}



