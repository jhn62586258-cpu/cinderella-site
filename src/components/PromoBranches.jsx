import { useMemo, useState } from 'react'
import Icon from './Icons'
import { BRANCHES } from '../data'
import { useApply } from '../ApplyContext'

export default function PromoBranches() {
  const { openApply } = useApply()
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(BRANCHES[0].id)
  const list = useMemo(() => {
    const k = q.trim()
    return k ? BRANCHES.filter((b) => (b.name + b.region + b.address + b.area).includes(k)) : BRANCHES
  }, [q])
  const b = BRANCHES.find((x) => x.id === sel) || BRANCHES[0]

  return (
    <section className="promo" id="branches">
      <div className="promo-hero">
        <div className="wrap promo-in">
          <p className="eyebrow reveal">FIRST EVENT</p>
          <h2 className="promo-title reveal" style={{ '--d': 100 }}>
            신규 첫 이용고객 <em>전 품목 30% 할인</em>
          </h2>
          <p className="promo-sub reveal" style={{ '--d': 180 }}>
            지점별 맞춤 추가 혜택까지, 신데렐라 세탁을 처음 만나는 가장 좋은 방법
          </p>
          <button className="btn btn-solid reveal" style={{ '--d': 250 }} onClick={() => openApply()}>
            지금 수거 신청하기 <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>

      <div className="wrap">
        <div className="br reveal">
          <div className="br-side">
            <h3 className="br-h">지점 안내</h3>
            <label className="br-search">
              <Icon name="search" size={18} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="지점명 · 지역 검색" aria-label="지점 검색" />
            </label>
            <ul className="br-list">
              {list.map((x) => (
                <li key={x.id}>
                  <button className={x.id === sel ? 'on' : ''} onClick={() => setSel(x.id)}>
                    <span>{x.name}</span>
                    <small>{x.region}</small>
                  </button>
                </li>
              ))}
              {!list.length && <li className="br-empty">검색 결과가 없습니다.</li>}
            </ul>
          </div>

          <div className="br-detail" key={b.id}>
            <div className="br-top">
              <h4>{b.name}</h4>
              <span className="br-status">{b.status}</span>
            </div>
            <dl>
              <div><dt>주소</dt><dd>{b.address}</dd></div>
              <div><dt>수거 지역</dt><dd>{b.area}</dd></div>
              <div><dt>운영 시간</dt><dd>{b.hours}</dd></div>
              <div><dt>문의</dt><dd><a href={`tel:${b.phone.replace(/-/g, '')}`}>{b.phone}</a></dd></div>
            </dl>
            <button className="btn btn-line btn-sm" onClick={() => openApply({ branch: b.id })}>
              이 지점으로 수거 신청 <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
