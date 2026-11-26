import { useEffect, useRef, useState } from 'react'
import Icon from './Icons'
import { REASONS } from '../data'

export default function Story() {
  const [active, setActive] = useState(0)
  const paused = useRef(false)

  // 4가지 이유가 6초마다 자연스럽게 넘어갑니다. (직접 선택하면 멈춤)
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % REASONS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const pick = (i) => {
    paused.current = true
    setActive(i)
  }
  const r = REASONS[active]

  return (
    <section className="story" id="story">
      <div className="wrap">
        <p className="eyebrow reveal">BRAND STORY</p>
        <h2 className="story-title reveal" style={{ '--d': 100 }}>
          세탁을 맡긴다는 것,
          <br />
          시간을 되찾는다는 것.
        </h2>
        <p className="concierge-line reveal" style={{ '--d': 200 }}>
          <b>CONCIERGE LAUNDRY SERVICE</b>
          <span>당신의 일상에 호텔급 세탁 서비스를 더합니다</span>
        </p>

        <div className="reasons reveal" style={{ '--d': 150 }}>
          <div className="reasons-head">
            <span>신데렐라 세탁이 특별한 4가지 이유</span>
            <span className="reasons-count">
              {r.no} / 04
            </span>
          </div>
          <div className="reasons-body">
            <ul className="reasons-list">
              {REASONS.map((x, i) => (
                <li key={x.no} className={i === active ? 'on' : ''}>
                  <button onClick={() => pick(i)} onMouseEnter={() => pick(i)} aria-expanded={i === active}>
                    <span className="r-no">{x.no}</span>
                    <span className="r-title">{x.title}</span>
                    <span className="r-bar" key={i === active ? `a${active}` : 'x'} />
                  </button>
                  <div className="r-inline">
                    <p className="r-lead">{x.lead}</p>
                    <p className="r-text">{x.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reasons-panel" key={r.no}>
              <Icon name={r.icon} size={38} stroke={1.1} className="rp-ico" />
              <span className="rp-no">{r.no}</span>
              <p className="rp-lead">{r.lead}</p>
              <p className="rp-text">{r.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
