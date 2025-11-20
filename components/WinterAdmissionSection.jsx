'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    step: 'STEP 1',
    title: '윈터스쿨 등록 신청',
    desc: '온라인 신청서를 작성하면 담당 선생님이 순차적으로 연락드립니다.',
    cta: true,
    ctaLabel: '등록 신청하기',
  },
  {
    step: 'STEP 2',
    title: '문의·상담',
    desc: '전화·카카오톡·방문 상담을 통해 학생 상황과 목표를 함께 점검합니다.',
  },
  {
    step: 'STEP 3',
    title: '등록 결정 및 등록금 안내',
    desc: '반 배정, 등록 일정, 등록금을 안내해드리고 등록을 확정합니다.',
  },
  {
    step: 'STEP 4',
    title: '윈터스쿨 시작',
    desc: '입소 일정, 준비물, 첫날 오리엔테이션 안내 문자를 발송해드립니다.',
  },
]

const tabs = [
  { id: 'high3', label: '예비 고3' },
  { id: 'high1_2', label: '예비 고1·2' },
]

const timetableHigh3 = {
  headers: ['시간', '월', '화', '수', '목', '금', '토·일'],
  rows: [
    ['0800~0830', '단어 TEST', '단어 TEST', '단어 TEST', '단어 TEST', '단어 TEST', '자기주도학습(선택)'],
    ['0830~0920', '탐구1', '문학', '화작/언매', '독서', '영어', '자기주도학습(선택)'],
    ['0930~1020', '탐구1', '문학', '화작/언매', '독서', '영어', '자기주도학습(선택)'],
    ['1030~1120', '탐구1', '독서', '영어', '문학', '국어 T', '자기주도학습(선택)'],
    ['1130~1220', '탐구1', '독서', '영어', '문학', '국어 T', '자기주도학습(선택)'],
    ['1220~1300', '점심 (원내 급식 필수, 개인 도시락 가능 / 외출 금지)', '', '', '', '', ''],
    ['1310~1330', '듣기 TEST', '듣기 TEST', '듣기 TEST', '듣기 TEST', '듣기 TEST', ''],
    ['1410~1500', '탐구2 - 수학(선택)', '자기주도학습(필수)', '수학(선택)', '자기주도학습(필수)', '', ''],
    ['1510~1600', '탐구2', '자기주도학습(필수)', '수학(선택)', '자기주도학습(필수)', '', ''],
    ['1610~1700', '', '', '', '', '', ''],
    ['1700~1800', '저녁(원내 급식 선택 / 도시락 가능 / 외출 가능, 17:50까지 복귀)', '', '', '', '', ''],
    ['1800~1850', '자기주도학습(선택)', '', '', '', '', ''],
    ['1900~1950', '자기주도학습 (필수 / 주간 학습표에 따라 실시)', '', '', '', '', ''],
    ['2000~2050', '복습 / 정리 / 질의응답 / 과제 / 피드백 / 단어 암기', '', '', '', '', ''],
    ['2100~2150', '자기주도학습(선택)', '', '', '', '', ''],
  ],
  notes:
    '* 표준시간표로 반마다 변경될 수 있습니다.\n' +
    '* 수학 수업은 선택자에 한하여 진행됩니다 (수업료 별도).',
}

const timetableHigh1_2 = {
  headers: ['시간', '월', '화', '수', '목', '금', '토·일'],
  rows: [
    ['0800~0830', '단어 TEST', '단어 TEST', '단어 TEST', '단어 TEST', '단어 TEST', '자기주도학습(선택)'],
    ['0830~0920', '문학', '화법과 언어', '독서와 작문', '독서와 작문', '영어', ''],
    ['0930~1020', '통합과학', '문학', '화법과 언어', '독서와 작문', '영어', ''],
    ['1030~1120', '독서와 작문', '영어', '문학', '국어 T', '', ''],
    ['1130~1220', '독서와 작문', '영어', '문학', '영어 T', '', ''],
    ['1220~1300', '점심 (원내 급식 필수, 개인 도시락 가능 / 외출 금지)', '', '', '', '', ''],
    ['1310~1330', '듣기 TEST', '듣기 TEST', '듣기 TEST', '듣기 TEST', '듣기 TEST', ''],
    ['1410~1500', '통합사회', '수학(선택)', '자기주도학습(필수)', '수학(선택)', '자기주도학습(필수)', ''],
    ['1510~1600', '통합사회', '수학(선택)', '자기주도학습(필수)', '수학(선택)', '자기주도학습(필수)', ''],
    ['1610~1700', '', '', '', '', '', ''],
    ['1700~1800', '저녁(원내 급식 선택 / 도시락 가능 / 외출 가능, 17:50까지 복귀)', '', '', '', '', ''],
    ['1800~1850', '자기주도학습(선택)', '', '', '', '', ''],
    ['1900~1950', '자기주도학습 (선택 / 주간 학습표에 따라 실시)', '', '', '', '', ''],
    ['2000~2050', '복습 / 정리 / 질의응답 / 과제 / 피드백 / 단어 암기', '', '', '', '', ''],
    ['2100~2150', '자기주도학습(선택)', '', '', '', '', ''],
  ],
  notes:
    '* 표준시간표로 반마다 변경될 수 있습니다.\n' +
    '* 수학 수업은 선택자에 한하여 진행됩니다 (수업료 별도).',
}

export default function WinterAdmissionSection() {
  const [activeTab, setActiveTab] = useState('high3')
  const currentTimetable = activeTab === 'high3' ? timetableHigh3 : timetableHigh1_2

  const isSpecialCell = (cell) => {
    return (
      cell.includes('TEST') ||
      cell.includes('자기주도학습') ||
      cell.includes('점심') ||
      cell.includes('저녁') ||
      cell.includes('복습')
    )
  }

  return (
    <>
      {/* 입학 절차 섹션 */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center space-y-3 mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1B3D]">
              윈터스쿨 입학 절차
            </h2>
            <p className="mt-3 text-xl sm:text-2xl text-[#4A5570]">
              아래 4단계를 따라 신청부터 등록까지 진행됩니다.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-[#F5F7FF] rounded-2xl p-6 sm:p-7 flex flex-col gap-3 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <span className="rounded-full bg-[#4255FF] text-white text-xs px-4 py-1 font-semibold w-fit">
                    {item.step}
                  </span>
                  <h3 className="text-xl sm:text-xl font-bold text-[#111827]">{item.title}</h3>
                  <p className="text-md sm:text-xl text-[#4B5563] leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 윈터스쿨 표준 시간표 섹션 */}
      <section className="bg-[#F3F6FF] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1B3D]">
              윈터스쿨 표준 시간표
            </h2>
            <p className="mt-3 text-xl sm:text-2xl text-[#4A5570]">
              예비 고3, 예비 고1·2 과정은 각각 학년 수준에 맞춘 시간표로 운영됩니다.
            </p>
          </ScrollReveal>

          {/* 탭 */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#1F57FF] text-white shadow-md'
                      : 'bg-transparent text-[#4B5563] hover:text-[#1F57FF]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 시간표 테이블 */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-x-auto">
            {activeTab === 'high3' ? (
              <table className="w-full border-collapse text-center whitespace-nowrap min-w-[800px]">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-3 border border-blue-800 w-24">시간</th>
                    <th className="p-3 border border-blue-800 w-24">월</th>
                    <th className="p-3 border border-blue-800 w-24">화</th>
                    <th className="p-3 border border-blue-800 w-24">수</th>
                    <th className="p-3 border border-blue-800 w-24">목</th>
                    <th className="p-3 border border-blue-800 w-24">금</th>
                    <th className="p-3 border border-blue-800 w-48">토</th>
                    <th className="p-3 border border-blue-800 w-48">일</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700">
                  {/* 08:00 Row */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">08:00~08:30</td>
                    <td colSpan={5} className="bg-white border border-blue-200 font-semibold text-blue-900">
                      단어 TEST
                    </td>
                    {/* Weekend Column (Spans entire table approximately) */}
                    <td rowSpan={15} colSpan={2} className="bg-blue-50 border border-blue-200 align-middle">
                      <div className="flex items-center justify-center h-full py-10">
                        <div className="font-bold text-lg text-blue-800 text-center">
                          자기주도학습<br />(선택)
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Period 1 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">08:30~09:20</td>
                    <td rowSpan={4} className="bg-blue-100 border border-blue-200 font-bold text-blue-800">탐구1</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">화작/언매</td>
                    <td className="border border-blue-200">독서</td>
                    <td className="border border-blue-200">영어</td>
                  </tr>

                  {/* Period 2 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">09:30~10:20</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">화작/언매</td>
                    <td className="border border-blue-200">독서</td>
                    <td className="border border-blue-200">영어</td>
                  </tr>

                  {/* Period 3 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">10:30~11:20</td>
                    <td className="border border-blue-200">독서</td>
                    <td className="border border-blue-200">영어</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">국어T</td>
                  </tr>

                  {/* Period 4 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">11:30~12:20</td>
                    <td className="border border-blue-200">독서</td>
                    <td className="border border-blue-200">영어</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">영어T</td>
                  </tr>

                  {/* Lunch */}
                  <tr>
                    <td className="bg-blue-600 text-white py-2 border border-blue-500">12:20~13:00</td>
                    <td colSpan={5} className="bg-blue-600 text-white font-medium border border-blue-500">
                      중식 (원내 급식 필수, 개인 도시락 가능 / 외출 금지)
                    </td>
                  </tr>

                  {/* Listening Test */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">13:10~13:30</td>
                    <td colSpan={5} className="bg-blue-50 border border-blue-200 text-blue-800 font-medium">
                      듣기 TEST
                    </td>
                  </tr>

                  {/* Period 5 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">13:10~14:00</td>
                    <td rowSpan={4} className="bg-blue-100 border border-blue-200 font-bold text-blue-800">탐구2</td>
                    <td rowSpan={4} className="border border-blue-200 bg-white">
                      수학<br /><span className="text-xs text-slate-500">(선택)</span>
                    </td>
                    <td rowSpan={4} className="border border-blue-200 bg-slate-50 text-slate-600">
                      자기주도학습<br /><span className="text-xs">(필수)</span>
                    </td>
                    <td rowSpan={4} className="border border-blue-200 bg-white">
                      수학<br /><span className="text-xs text-slate-500">(선택)</span>
                    </td>
                    <td rowSpan={4} className="border border-blue-200 bg-slate-50 text-slate-600">
                      자기주도학습<br /><span className="text-xs">(필수)</span>
                    </td>
                  </tr>

                  {/* Period 6 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">14:10~15:00</td>
                  </tr>

                  {/* Period 7 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">15:10~16:00</td>
                  </tr>

                  {/* Period 8 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">16:10~17:00</td>
                  </tr>

                  {/* Dinner */}
                  <tr>
                    <td className="bg-blue-600 text-white py-2 border border-blue-500">17:00~18:00</td>
                    <td colSpan={5} className="bg-blue-600 text-white font-medium border border-blue-500">
                      저녁 (원내 급식 선택, 개인 도시락 가능/외출 가능, 17:50까지 복귀)
                    </td>
                  </tr>

                  {/* Night Study 1 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">18:00~18:50</td>
                    <td rowSpan={3} colSpan={5} className="border border-blue-200 bg-white p-4">
                      <div className="font-bold text-blue-800 mb-2">자기주도학습</div>
                      <ul className="text-sm text-slate-600 list-none space-y-1">
                        <li>- 필수, 주간 학습 계획표에 따라 실시</li>
                        <li>- 수업 내용 복습 및 정리 / 질의응답 / 과제 및 피드백 / 단어 암기 등</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Night Study 2 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">19:00~19:50</td>
                  </tr>

                  {/* Night Study 3 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">20:00~20:50</td>
                  </tr>

                  {/* Night Study 4 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">21:00~21:50</td>
                    <td colSpan={5} className="border border-blue-200 bg-blue-50 text-blue-800 font-medium">
                      자기주도학습(선택)
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="w-full border-collapse text-center whitespace-nowrap min-w-[800px]">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-3 border border-blue-800 w-24">시간</th>
                    <th className="p-3 border border-blue-800 w-24">월</th>
                    <th className="p-3 border border-blue-800 w-24">화</th>
                    <th className="p-3 border border-blue-800 w-24">수</th>
                    <th className="p-3 border border-blue-800 w-24">목</th>
                    <th className="p-3 border border-blue-800 w-24">금</th>
                    <th className="p-3 border border-blue-800 w-48">토</th>
                    <th className="p-3 border border-blue-800 w-48">일</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700">
                  {/* 08:00 Row */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">08:00~08:30</td>
                    <td colSpan={5} className="bg-white border border-blue-200 font-semibold text-blue-900">
                      단어 TEST
                    </td>
                    {/* Weekend Column */}
                    <td rowSpan={16} colSpan={2} className="bg-blue-50 border border-blue-200 align-middle">
                      <div className="flex items-center justify-center h-full py-10">
                        <div className="font-bold text-lg text-blue-800 text-center">
                          자기주도학습<br />(선택)
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Period 1 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">08:30~09:20</td>
                    <td rowSpan={4} className="bg-blue-100 border border-blue-200 font-bold text-blue-800">통합과학</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">화법과 언어</td>
                    <td className="border border-blue-200">독서와 작문</td>
                    <td className="border border-blue-200">영어</td>
                  </tr>

                  {/* Period 2 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">09:30~10:20</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">화법과 언어</td>
                    <td className="border border-blue-200">독서와 작문</td>
                    <td className="border border-blue-200">영어</td>
                  </tr>

                  {/* Period 3 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">10:30~11:20</td>
                    <td className="border border-blue-200">독서와 작문</td>
                    <td className="border border-blue-200">영어</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">국어T</td>
                  </tr>

                  {/* Period 4 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">11:30~12:20</td>
                    <td className="border border-blue-200">독서와 작문</td>
                    <td className="border border-blue-200">영어</td>
                    <td className="border border-blue-200">문학</td>
                    <td className="border border-blue-200">영어T</td>
                  </tr>

                  {/* Lunch */}
                  <tr>
                    <td className="bg-blue-600 text-white py-2 border border-blue-500">12:20~13:00</td>
                    <td colSpan={5} className="bg-blue-600 text-white font-medium border border-blue-500">
                      점심(원내 급식 필수, 개인 도시락 가능/외출 금지)
                    </td>
                  </tr>

                  {/* Listening Test */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">13:10~13:30</td>
                    <td colSpan={5} className="bg-blue-50 border border-blue-200 text-blue-800 font-medium">
                      듣기 TEST
                    </td>
                  </tr>

                  {/* Period 5 (Merged Block Start) */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">13:10~14:00</td>
                    <td rowSpan={4} className="bg-blue-100 border border-blue-200 font-bold text-blue-800">통합사회</td>
                    <td rowSpan={4} className="border border-blue-200 bg-white">
                      수학<br /><span className="text-xs text-slate-500">(선택)</span>
                    </td>
                    <td rowSpan={4} className="border border-blue-200 bg-slate-50 text-slate-600">
                      자기주도학습<br /><span className="text-xs">(필수)</span>
                    </td>
                    <td rowSpan={4} className="border border-blue-200 bg-white">
                      수학<br /><span className="text-xs text-slate-500">(선택)</span>
                    </td>
                    <td rowSpan={4} className="border border-blue-200 bg-slate-50 text-slate-600">
                      자기주도학습<br /><span className="text-xs">(필수)</span>
                    </td>
                  </tr>

                  {/* Period 6 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">14:10~15:00</td>
                  </tr>

                  {/* Period 7 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">15:10~16:00</td>
                  </tr>

                  {/* Period 8 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">16:10~17:00</td>
                  </tr>

                  {/* Dinner */}
                  <tr>
                    <td className="bg-blue-600 text-white py-2 border border-blue-500">17:00~18:00</td>
                    <td colSpan={5} className="bg-blue-600 text-white font-medium border border-blue-500">
                      저녁(원내 급식 선택, 개인 도시락 가능/외출 가능, 17:50까지 복귀)
                    </td>
                  </tr>

                  {/* Night Study Block (Merged 3 rows) */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">18:00~18:50</td>
                    <td rowSpan={3} colSpan={5} className="border border-blue-200 bg-white p-4 align-middle">
                      <div className="font-bold text-blue-800 mb-2">자기주도학습</div>
                      <ul className="text-sm text-slate-600 list-none space-y-1 inline-block text-left">
                        <li>- 선택, 주간 학습 계획표에 따라 실시</li>
                        <li>- 수업 내용 복습 및 정리 / 질의응답 / 과제 및 피드백 / 단어 암기 등</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Night Study 2 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">19:00~19:50</td>
                  </tr>

                  {/* Night Study 3 */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">20:00~20:50</td>
                  </tr>

                  {/* Last Study */}
                  <tr>
                    <td className="bg-slate-400 text-white py-2 border border-slate-300">21:00~21:50</td>
                    <td colSpan={5} className="border border-blue-200 bg-blue-50 text-blue-800 font-medium">
                      자기주도학습(선택)
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {/* 비고 박스 */}
          <div className="mt-6 bg-[#EEEEFF] rounded-xl px-8 py-8">
            <p className="text-md sm:text-lg text-[#4B5563] leading-relaxed whitespace-pre-line">
              {currentTimetable.notes}
            </p>
          </div>


        </div>
      </section>
    </>
  )
}

