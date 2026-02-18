/**
 * SEO 공통 상수
 */
export const SITE_URL = 'https://st-yein.vercel.app'

export const SITE_NAME = 'ST-예인'
export const DEFAULT_TITLE = 'ST-예인 | 예체능 입시생을 위한 최상의 학습 관리'
export const DEFAULT_DESCRIPTION = '예체능 입시생을 위한 최상의 학습 관리를 ST-예인과 함께하세요!'

/** OG 이미지 (통일) */
export const OG_IMAGE_URL = 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjhfMTk3/MDAxNjA5MTQ1MjQ2Mzgy.sytEceYQyHf-r795IbeS4p9gSqKYbGw3wNW1JFg1j80g.4G1n7ZIFpuFlExCamAad107FJpkwIahko_j9_iZAAbwg.JPEG.jungwk2000/KakaoTalk_20201217_160250367.jpg?type=w800'

export const getOgImages = () => [
  { url: OG_IMAGE_URL, width: 1200, height: 630, alt: DEFAULT_TITLE },
]
