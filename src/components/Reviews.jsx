import { useEffect, useState } from 'react'
import Icon from './Icons'
import { REVIEWS } from '../data'
import { SHOW_SAMPLE_REVIEW_NOTICE } from '../config'
import useSwipe from '../hooks/useSwipe'

export default function Reviews() {
  const n = REVIEWS.length
  const [i, setI] = useState(0)
  const [hold, setHold] = useState(false)
  const go = (k) => setI((k + n) % n)
  const swipe = useSwipe({ onLeft: () => go(i + 1), onRight: () => go(i - 1) })

  useEffect(() => {
    if (hold) return
    const id = setTimeout(() => setI((x) => (x + 1) % n), 7000)
    return () => clearTimeout(id)
  }, [i, hold, n])

  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <p className="eyebrow reveal">REVIEWS</p>
        <div
          className="rv reveal"
          style={{ '--d': 100 }}
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
          {...swipe}
        >
          <span className="rv-mark" aria-hidden="true">“</span>
          <div className="rv-track" style={{ transform: `translateX(-${i * 100}%)` }}>
            {REVIEWS.map((r, k) => (
              <figure key={k} className="rv-slide" aria-hidden={k !== i}>
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <b>{r.who}</b>
                  <span>{r.place} 이용 고객</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="rv-ctrl">
          <button onClick={() => go(i - 1)} aria-label="이전 후기">
            <Icon name="arrowL" size={18} />
          </button>
          <div className="dots" role="tablist" aria-label="후기 선택">
            {REVIEWS.map((_, k) => (
              <button key={k} role="tab" aria-selected={k === i} aria-label={`${k + 1}번째 후기`} className={k === i ? 'on' : ''} onClick={() => setI(k)} />
            ))}
          </div>
          <button onClick={() => go(i + 1)} aria-label="다음 후기">
            <Icon name="arrow" size={18} />
          </button>
        </div>
        {SHOW_SAMPLE_REVIEW_NOTICE && <p className="rv-note">※ 예시 후기입니다. 실제 고객 후기로 교체해 주세요.</p>}
      </div>
    </section>
  )
}
