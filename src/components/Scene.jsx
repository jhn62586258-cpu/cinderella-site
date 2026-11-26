import { useMemo } from 'react'

// 구름 · 빛 · 반짝임으로 만든 하늘 장면 (히어로 / 엔딩 공용)
export function CloudSvg({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 1600 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <symbol id="cl" viewBox="0 0 400 150">
          <g fill="#fff">
            <ellipse cx="90" cy="108" rx="88" ry="38" />
            <ellipse cx="195" cy="84" rx="96" ry="62" />
            <ellipse cx="305" cy="106" rx="92" ry="42" />
            <ellipse cx="200" cy="116" rx="170" ry="32" />
          </g>
        </symbol>
      </defs>
      <use href="#cl" x="-120" y="110" width="760" height="285" />
      <use href="#cl" x="480" y="150" width="860" height="322" />
      <use href="#cl" x="1040" y="100" width="760" height="285" />
    </svg>
  )
}

export function Sparkles({ count = 36, seed = 7 }) {
  const items = useMemo(() => {
    let s = seed
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
    return Array.from({ length: count }, () => ({
      l: rnd() * 100,
      t: rnd() * 100,
      z: 2 + rnd() * 7,
      d: rnd() * 6,
      r: 3 + rnd() * 4,
    }))
  }, [count, seed])
  return (
    <div className="sparkles" aria-hidden="true">
      {items.map((p, i) => (
        <i key={i} style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.z, height: p.z, animationDelay: `${p.d}s`, animationDuration: `${p.r}s` }} />
      ))}
    </div>
  )
}

// 얇은 커튼(린넨) 실루엣 — 첫 화면의 깨끗한 세탁물 느낌
export function Sheer({ className = '' }) {
  return (
    <svg className={`sheer ${className}`} viewBox="0 0 300 900" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="sh1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 0h210c-20 120 40 220 10 330s-50 250-10 380-20 140-40 190H0z" fill="url(#sh1)" />
      <path d="M0 0h120c-14 140 30 260 4 400s-34 330-6 500H0z" fill="#fff" opacity=".35" />
    </svg>
  )
}
