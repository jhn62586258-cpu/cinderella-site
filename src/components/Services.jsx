import { useState } from 'react'
import Icon from './Icons'
import { SERVICES } from '../data'
import { useApply } from '../ApplyContext'
import useSwipe from '../hooks/useSwipe'

export default function Services() {
  const [i, setI] = useState(0)
  const { openApply } = useApply()
  const n = SERVICES.length
  const go = (k) => setI((k + n) % n)
  const s = SERVICES[i]
  const swipe = useSwipe({ onLeft: () => go(i + 1), onRight: () => go(i - 1) })

  return (
    <section className="services" id="services">
      <div className="wrap services-grid">
        <div className="svc-stage reveal" {...swipe}>
          <div className="svc-frame">
            {SERVICES.map((x, k) => (
              <img
                key={x.id}
                src={x.img}
                alt={`${x.label} 세탁 서비스`}
                className={`${k === i ? 'on' : ''} fit-${x.fit}`}
                loading={k === 0 ? 'eager' : 'lazy'}
                draggable="false"
              />
            ))}
          </div>
          <div className="svc-meta">
            <span className="svc-count">
              {String(i + 1).padStart(2, '0')} <i>/</i> {String(n).padStart(2, '0')}
            </span>
            <div className="svc-arrows">
              <button onClick={() => go(i - 1)} aria-label="이전 품목">
                <Icon name="arrowL" size={18} />
              </button>
              <button onClick={() => go(i + 1)} aria-label="다음 품목">
                <Icon name="arrow" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="svc-info">
          <p className="eyebrow reveal">SERVICES</p>
          <h2 className="h2 reveal" style={{ '--d': 100 }}>
            안심하고 맡길 수 있는
            <br />
            <em>호텔급 전문 세탁</em>
          </h2>

          <div className="svc-tabs reveal" style={{ '--d': 150 }} role="tablist" aria-label="세탁 품목">
            {SERVICES.map((x, k) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={k === i}
                className={k === i ? 'on' : ''}
                onClick={() => setI(k)}
              >
                <span className="t-no">{String(k + 1).padStart(2, '0')}</span>
                <span className="t-label">{x.label}</span>
                <span className="t-en">{x.en}</span>
              </button>
            ))}
          </div>

          <div className="svc-detail" key={s.id} aria-live="polite">
            <h3>{s.headline}</h3>
            <p>{s.desc}</p>
            <ul>
              {s.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} stroke={1.8} />
                  {p}
                </li>
              ))}
            </ul>
            <button className="btn btn-line btn-sm" onClick={() => openApply({ item: s.label })}>
              {s.label} 수거 신청 <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
