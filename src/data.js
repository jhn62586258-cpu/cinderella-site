import shirt from './assets/services/shirt.jpg'
import general from './assets/services/general.jpg'
import luxury from './assets/services/luxury.jpg'
import sneakers from './assets/services/sneakers.jpg'
import stroller from './assets/services/stroller.jpg'
import bedding from './assets/services/bedding.jpg'

export const NAV = [
  { href: '#story', label: '브랜드 스토리' },
  { href: '#services', label: '서비스' },
  { href: '#process', label: '이용방법' },
  { href: '#reviews', label: '고객 후기' },
  { href: '#branches', label: '지점안내' },
]

export const REASONS = [
  {
    no: '01',
    icon: 'door',
    title: '비대면 무료 수거·배송',
    lead: '셔츠 1장도 무료 수거·배송 OK',
    body: '문 앞에 두고 문자만 보내시면 끝. 만나지 않아도, 집에 없어도 신데렐라 세탁이 수거부터 배송까지 책임집니다.',
  },
  {
    no: '02',
    icon: 'layers',
    title: '일반세탁부터 전문세탁까지',
    lead: '부피 큰 세탁물까지 원스톱 케어',
    body: '의류는 물론 유모차·카시트·운동화·카페트·이불까지. 맡길 곳을 찾아 헤매지 않도록 한 곳에서 완벽하게 케어합니다.',
  },
  {
    no: '03',
    icon: 'gift',
    title: '첫 이용 특별 혜택',
    lead: '신규 첫 이용고객 30% 할인',
    body: '처음 만나는 고객님께 드리는 특별 할인과 지점별 맞춤 혜택. 신데렐라 세탁을 가장 좋은 조건으로 시작해 보세요.',
  },
  {
    no: '04',
    icon: 'chat',
    title: '24시간 문의 접수',
    lead: '추가요금·주의사항 사전 안내',
    body: '언제든 문자로 문의하세요. 추가요금이나 세탁 시 주의사항은 접수 전에 투명하게 먼저 안내해 드립니다.',
  },
]

export const SERVICES = [
  {
    id: 'general',
    label: '일반 의류',
    en: 'Everyday Wear',
    img: general,
    fit: 'contain',
    headline: '매일 입는 옷에도 호텔급 정성을',
    desc: '소재와 오염도를 먼저 확인하고, 옷마다 맞는 공정으로 세탁합니다. 문 앞에 두시면 깨끗하게 돌아옵니다.',
    points: ['소재·오염도 사전 확인', '품목별 맞춤 세탁', '케어 가이드와 함께 배송'],
  },
  {
    id: 'suit',
    label: '정장·셔츠',
    en: 'Suit & Shirt',
    img: shirt,
    fit: 'contain',
    headline: '입는 순간 느껴지는 단정함',
    desc: '구김과 칼라 오염까지 꼼꼼하게. 셔츠 1장도 무료 수거·배송이라 부담 없이 맡기실 수 있습니다.',
    points: ['셔츠 1장도 무료 수거·배송', '칼라·소매 오염 케어', '밀착 비닐포장으로 구김 방지'],
  },
  {
    id: 'luxury',
    label: '명품 의류',
    en: 'Luxury Care',
    img: luxury,
    fit: 'cover',
    headline: '당신의 명품, 전문가의 라벨을 달다',
    desc: '고가 의류는 원단과 장식까지 확인한 뒤 전문 공정으로 케어합니다. 안심하고 맡길 수 있는 호텔급 전문 세탁입니다.',
    points: ['원단·장식 사전 점검', '전문 케어 공정', '접수 전 주의사항 안내'],
  },
  {
    id: 'sneakers',
    label: '운동화',
    en: 'Sneakers',
    img: sneakers,
    fit: 'cover',
    headline: '운동화 세탁은 손끝에서 완성됩니다',
    desc: '부위별로 나누어 정밀하게 세척하고, 형태를 잡아 건조합니다. 새 신발처럼 가볍게 돌려드립니다.',
    points: ['부위별 정밀 세척', '형태 유지 건조', '신발 전용 케어 행택'],
  },
  {
    id: 'stroller',
    label: '유모차·카시트',
    en: 'Stroller & Car Seat',
    img: stroller,
    fit: 'cover',
    headline: '속까지 싹, 완전 분해 고온 스팀 살균',
    desc: '아이가 닿는 용품이니 더 꼼꼼하게. 분해 세척과 고온 스팀 살균으로 깨끗하고 안전하게 관리합니다.',
    points: ['분해 세척', '고온 스팀 살균', '유아용품 전용 공정'],
  },
  {
    id: 'bedding',
    label: '이불·카페트',
    en: 'Bedding & Carpet',
    img: bedding,
    fit: 'cover',
    headline: '포근한 시작은 깨끗한 이불부터',
    desc: '집에서 하기 어려운 부피 큰 세탁물도 문 앞에서 문 앞까지. 대형 설비로 속까지 깨끗하게 케어합니다.',
    points: ['대형 설비 세탁', '살균·건조 케어', '무거운 세탁물도 비대면 수거'],
  },
]

export const STEPS = [
  { no: '01', icon: 'clock', title: '24시간 수거 신청', desc: '언제든 신청서나 문자로 접수' },
  { no: '02', icon: 'door', title: '문 앞 비대면 수거', desc: '문 앞에 두시면 직접 수거' },
  { no: '03', icon: 'washer', title: '호텔급 전문 세탁', desc: '품목별 맞춤 공정으로 케어' },
  { no: '04', icon: 'truck', title: '깨끗하게 문 앞 배송', desc: '이중 보호 포장으로 안전하게' },
]

// ⚠️ 시안용 예시 문구입니다. 실제 고객 후기를 받으면 이 배열을 교체하세요.
export const REVIEWS = [
  {
    quote: '문 앞에 내놓고 문자만 보냈는데, 다음 날 깨끗하게 포장되어 돌아왔어요. 이렇게 편할 줄 몰랐습니다.',
    who: '셔츠 · 일반 의류',
    place: '메가트리아점',
  },
  {
    quote: '부피 큰 이불을 들고 나갈 일이 없어졌어요. 시간을 되찾았다는 말이 딱 맞습니다.',
    who: '이불 · 침구',
    place: '메가트리아점',
  },
  {
    quote: '추가요금과 주의사항을 접수 전에 먼저 알려주셔서 믿고 맡길 수 있었어요.',
    who: '명품 의류',
    place: '메가트리아점',
  },
  {
    quote: '아이 카시트를 분해해서 살균까지 해주니 마음이 놓입니다. 포장도 정말 깔끔했어요.',
    who: '유모차 · 카시트',
    place: '메가트리아점',
  },
  {
    quote: '운동화가 새것처럼 돌아왔습니다. 문 앞에서 받으니 정말 호텔 서비스 같아요.',
    who: '운동화',
    place: '메가트리아점',
  },
]

export const ITEMS = ['일반 의류', '정장·셔츠', '명품 의류', '운동화', '유모차·카시트', '이불·카페트', '기타']

// 지점 데이터 — 새 지점은 이 배열에 객체를 추가하면 지점 선택·신청서에 자동 반영됩니다.
export const BRANCHES = [
  {
    id: 'megatria',
    region: '지역 입력',
    name: '메가트리아점',
    status: 'OPEN',
    address: '[지점 상세 주소를 입력하세요]',
    area: '메가트리아 단지 및 인접 아파트 [수거 지역 입력]',
    hours: '평일 09:00 – 18:00 · 토 09:00 – 13:00 · 일·공휴일 휴무',
    phone: '010-8319-8624',
  },
]
