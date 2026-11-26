# 신데렐라 세탁 — CONCIERGE LAUNDRY SERVICE 공식 웹사이트

React 19 + Vite 7 프로젝트입니다.

## 실행
```bash
npm install
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # dist/ 폴더 생성 (배포용)
npm run preview    # 빌드 결과 미리보기
```
Node 20.19 이상이 필요합니다.

## 내용 수정 위치
| 바꾸고 싶은 것 | 파일 |
|---|---|
| 본사 정보(대표자·사업자번호·주소·연락처), 신청 접수 방식 | `src/config.js` |
| 4가지 강점·서비스 품목·이용 단계·후기·**지점 목록** | `src/data.js` |
| 색상·간격·반응형 | `src/styles.css` (맨 위 `:root` 변수) |
| 로고 / 서비스 이미지 | `src/assets/` (로고는 원본 비율 유지, 높이만 CSS로 지정) |

- 지점 추가: `src/data.js`의 `BRANCHES` 배열에 객체를 추가하면 지점 검색·신청서에 자동 반영됩니다.
- 후기: 현재 **예시 문구**입니다. 실제 후기로 교체한 뒤 `config.js`의 `SHOW_SAMPLE_REVIEW_NOTICE`를 `false`로 바꾸세요.
- `[ ]`로 표시된 값은 모두 자리표시자입니다. 실제 정보로 바꿔 주세요.

## 수거 신청 접수 방식
- `FORM_ENDPOINT`가 비어 있으면: 신청 후 "문자로 접수하기" 버튼이 나타나 지점 번호로 신청 내용이 담긴 문자 앱이 열립니다. **서버에는 저장되지 않습니다.**
- `FORM_ENDPOINT`에 Formspree / Google Apps Script / Make·Zapier 웹훅 주소를 넣으면 신청 내용이 JSON(POST)으로 전송됩니다.
