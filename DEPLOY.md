# 배포 & www 도메인 연결 가이드

순서: **① 코드 올리기 → ② 배포 → ③ 도메인 연결 → ④ 확인**

## 1. 준비 (한 번만)
1. [GitHub](https://github.com)에 가입하고 새 저장소(Repository)를 만듭니다. (예: `cinderella-site`)
2. 이 프로젝트 폴더의 파일을 저장소에 올립니다. (`node_modules`, `dist`는 올리지 않아도 됩니다 — `.gitignore`가 제외합니다.)
   ```bash
   git init && git add . && git commit -m "first"
   git branch -M main
   git remote add origin https://github.com/내아이디/cinderella-site.git
   git push -u origin main
   ```
3. (권장) 내 컴퓨터에서 먼저 확인: `npm install` → `npm run build` 가 오류 없이 끝나는지 확인.

## 2-A. Vercel로 배포 (추천)
1. [vercel.com](https://vercel.com) → GitHub 계정으로 로그인
2. **Add New → Project** → 방금 만든 저장소 **Import**
3. Framework가 **Vite**로 자동 인식됩니다. (Build: `npm run build`, Output: `dist`) → **Deploy**
4. 1~2분 후 `https://프로젝트명.vercel.app` 주소로 사이트가 열립니다.

## 2-B. Netlify로 배포
1. [netlify.com](https://netlify.com) → GitHub로 로그인
2. **Add new site → Import an existing project** → 저장소 선택
3. Build command `npm run build`, Publish directory `dist` (`netlify.toml`에 이미 설정됨) → **Deploy**
4. `https://사이트명.netlify.app` 주소로 열립니다.

## 3. 구매한 www 도메인 연결
예: `www.내도메인.com`  (가비아, 후이즈, Cloudflare, 아이웨브 등 어디서 샀든 방식은 같습니다.)

### 3-1. 호스팅 쪽에서 도메인 추가
- **Vercel**: 프로젝트 → **Settings → Domains → Add** → `내도메인.com` 과 `www.내도메인.com` 둘 다 추가
- **Netlify**: 사이트 → **Domain management → Add a domain** → `내도메인.com` 입력 후 `www` 도 함께 추가

추가하면 화면에 **연결해야 할 DNS 값**이 표시됩니다. **아래 표의 값보다 화면에 표시된 값을 우선**하세요. (서비스가 주소를 바꾸는 경우가 있습니다.)

### 3-2. 도메인 구입처에서 DNS 레코드 입력
(가비아: My가비아 → 서비스 관리 → 도메인 → **DNS 정보 → DNS 설정/관리**)

| 호스팅 | 타입 | 호스트(이름) | 값 |
|---|---|---|---|
| Vercel | A | `@` | `76.76.21.21` |
| Vercel | CNAME | `www` | `cname.vercel-dns.com` |
| Netlify | A | `@` | `75.2.60.5` |
| Netlify | CNAME | `www` | `사이트명.netlify.app` |

- 같은 호스트에 기존 A/CNAME 레코드가 있으면 **삭제하거나 수정**해 하나만 남깁니다.
- 가비아 기본 "네임서버"를 그대로 쓰는 경우 위 레코드를 가비아 DNS에 입력하면 됩니다.

### 3-3. 대표 주소 정하기
`www.내도메인.com` 을 대표 주소로 쓰려면, 호스팅의 Domains 화면에서 `내도메인.com`(www 없는 주소)을 `www.내도메인.com` 으로 **Redirect** 로 설정하세요.

### 3-4. 기다리기 & HTTPS
- DNS 반영은 보통 수 분~수 시간, 최대 24~48시간 걸립니다.
- 호스팅 화면에 **Valid / Verified** 가 뜨면 연결 완료이며, HTTPS(자물쇠) 인증서는 **자동 발급**됩니다.

## 4. 오픈 전 체크리스트
- [ ] `src/config.js` 본사 정보 입력, `FORM_ENDPOINT` 설정(또는 문자 접수 사용)
- [ ] `src/data.js` 지점 정보·실제 후기 입력
- [ ] `index.html`의 `<title>`·설명, 대표 이미지(OG) 확인
- [ ] 모바일에서 수거 신청 모달 → 접수 한 번 테스트
- [ ] 수정 후에는 GitHub에 push 하면 **자동으로 재배포**됩니다.

## 문제 해결
- 접속 시 "연결할 수 없음": DNS 반영 대기 중이거나 레코드 값 오타입니다. 3-2를 다시 확인하세요.
- 빌드 실패: Node 버전을 20.19 이상으로 (Vercel/Netlify 설정에서 Node 20 이상 선택).
