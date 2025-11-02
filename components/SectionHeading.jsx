/**
 * 재사용 가능한 섹션 제목 컴포넌트
 * @param {string} children - 제목 텍스트
 * @param {string} className - 추가 클래스명
 */
export default function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`font-bold text-white text-[28px] md:text-[36px] leading-tight tracking-tight ${className}`}
    >
      {children}
    </h2>
  )
}


