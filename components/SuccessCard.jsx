'use client'

import Image from 'next/image'

export default function SuccessCard({ scoreDelta, name, university, gender }) {
  const silhouetteSrc = gender === 'female' ? '/images/mask_girl.png' : '/images/mask_boy.png'

  return (
    <div className="relative min-w-[220px] sm:min-w-[260px] md:min-w-[280px] snap-start aspect-square bg-[#0051FF] text-white rounded-[24px] p-6 sm:p-7  transition transform hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_30px_60px_rgba(10,34,80,0.55)] overflow-hidden flex flex-col justify-between">
      <div className="relative z-10">
        <p className="text-lg sm:text-2xl font-bold">백분위 {scoreDelta}점 상승</p>
      </div>
      <div className="relative z-10 space-y-4 text-left font-semibold text-lg sm:text-xl">
        <p>{name}</p>
        <p>{university}</p>
      </div>

      <Image
        src={silhouetteSrc}
        alt={`예체능 재수 합격생 ${name} - ${university}`}
        width={240}
        height={240}
        className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] opacity-90 pointer-events-none select-none object-contain"
        priority={false}
      />
    </div>
  )
}

