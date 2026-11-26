// ─────────────────────────────────────────────
//  사이트 설정 — 여기만 고치면 사이트 전체에 반영됩니다.
// ─────────────────────────────────────────────

export const BRAND = {
  name: '신데렐라 세탁',
  nameEn: 'Cinderella Laundry',
  tagline: 'CONCIERGE LAUNDRY SERVICE',
}

// 본사 정보 (푸터 노출) — [ ] 부분을 실제 정보로 바꿔 주세요.
export const COMPANY = {
  ceo: '[대표자명]',
  bizNo: '[000-00-00000]',
  address: '[본사 주소]',
  email: '[email@example.com]',
  phone: '[고객센터 번호]',
  hours: '24시간 문자 문의 접수',
}

/**
 * 수거 신청 접수 방법
 * 1) FORM_ENDPOINT 를 비워 두면: 신청 완료 화면에서 "문자로 접수하기" 버튼이 나타나며,
 *    선택한 지점 번호로 신청 내용이 담긴 문자 앱이 열립니다. (서버 불필요)
 * 2) FORM_ENDPOINT 를 채우면: 신청 내용을 JSON(POST)으로 전송합니다.
 *    예) Formspree  https://formspree.io/f/xxxxxxx
 *        Google Apps Script 웹앱 URL, Make/Zapier 웹훅 URL 등
 */
export const FORM_ENDPOINT = ''

// 후기 슬라이더가 시안용 예시 문구일 때 "예시 후기" 안내를 노출합니다.
// 실제 후기를 reviews 데이터에 넣은 뒤 false 로 바꾸세요.
export const SHOW_SAMPLE_REVIEW_NOTICE = true
