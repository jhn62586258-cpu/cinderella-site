import { useEffect, useRef, useState } from 'react'
import Icon from './Icons'
import { BRANCHES, ITEMS } from '../data'
import { FORM_ENDPOINT } from '../config'
import { useApply } from '../ApplyContext'

const today = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}
const fmtPhone = (v) => {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length < 4) return d
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`
  return `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`
}

export default function ApplyModal() {
  const { open, preset, closeApply } = useApply()
  const init = () => ({ branch: BRANCHES[0].id, name: '', phone: '', address: '', date: '', items: [], memo: '' })
  const [f, setF] = useState(init)
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const [netErr, setNetErr] = useState('')
  const box = useRef(null)

  useEffect(() => {
    if (!open) return
    setDone(false); setErr({}); setNetErr('')
    setF((p) => ({
      ...p,
      branch: preset.branch || p.branch,
      items: preset.item ? [preset.item] : p.items,
    }))
    document.body.classList.add('no-scroll')
    const k = (e) => e.key === 'Escape' && closeApply()
    window.addEventListener('keydown', k)
    setTimeout(() => box.current?.focus(), 30)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', k)
    }
  }, [open, preset, closeApply])

  if (!open) return null
  const branch = BRANCHES.find((b) => b.id === f.branch) || BRANCHES[0]
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }))
  const toggle = (it) => set('items', f.items.includes(it) ? f.items.filter((x) => x !== it) : [...f.items, it])

  const summary = () =>
    [
      '[신데렐라 세탁 수거 신청]',
      `지점: ${branch.name}`,
      `이름: ${f.name}`,
      `연락처: ${f.phone}`,
      `주소: ${f.address}`,
      `희망 수거일: ${f.date}`,
      `품목: ${f.items.join(', ')}`,
      f.memo ? `요청사항: ${f.memo}` : '',
    ].filter(Boolean).join('\n')

  const smsHref = () => {
    const ua = navigator.userAgent
    const sep = /iPhone|iPad|iPod/.test(ua) ? '&' : '?'
    return `sms:${branch.phone.replace(/-/g, '')}${sep}body=${encodeURIComponent(summary())}`
  }

  const submit = async (e) => {
    e.preventDefault()
    const x = {}
    if (f.name.trim().length < 2) x.name = '이름을 입력해 주세요.'
    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(f.phone)) x.phone = '연락처를 정확히 입력해 주세요.'
    if (f.address.trim().length < 6) x.address = '수거 주소를 상세히 입력해 주세요.'
    if (!f.date) x.date = '희망 수거일을 선택해 주세요.'
    if (!f.items.length) x.items = '품목을 하나 이상 선택해 주세요.'
    setErr(x)
    if (Object.keys(x).length) return
    if (FORM_ENDPOINT) {
      setBusy(true); setNetErr('')
      try {
        const r = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...f, branchName: branch.name, items: f.items.join(', ') }),
        })
        if (!r.ok) throw new Error('bad')
        setDone('sent')
      } catch {
        setNetErr('전송에 실패했습니다. 잠시 후 다시 시도하거나 문자로 접수해 주세요.')
        setDone(false)
      }
      setBusy(false)
    } else {
      setDone('sms')
    }
  }

  const reset = () => { setF(init()); setDone(false) }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="수거 신청" onMouseDown={(e) => e.target === e.currentTarget && closeApply()}>
      <div className="modal-box" tabIndex={-1} ref={box}>
        <button className="modal-x" onClick={closeApply} aria-label="닫기"><Icon name="close" size={20} /></button>

        {done ? (
          <div className="done">
            <span className="done-ico"><Icon name="check" size={28} stroke={1.5} /></span>
            {done === 'sent' ? (
              <>
                <h3>접수가 완료되었습니다</h3>
                <p>입력하신 연락처로 확인 문자를 보내드리겠습니다.<br />추가요금·주의사항은 접수 후 사전에 안내해 드립니다.</p>
              </>
            ) : (
              <>
                <h3>마지막 단계입니다</h3>
                <p>아래 버튼을 누르면 <b>{branch.name}</b>으로 신청 내용이 담긴 문자가 준비됩니다.<br />전송하시면 접수가 완료됩니다.</p>
                <a className="btn btn-solid" href={smsHref()}>문자로 접수하기 <Icon name="arrow" size={18} /></a>
              </>
            )}
            <button className="btn btn-text" onClick={reset}>새 신청 작성</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <p className="eyebrow">PICK-UP REQUEST</p>
            <h3 className="modal-h">수거 신청</h3>
            <p className="modal-s">문 앞에 두시면 비대면으로 수거해 드립니다. 신규 첫 이용 30% 할인.</p>

            <div className="fld">
              <label htmlFor="ap-branch">지점</label>
              <select id="ap-branch" value={f.branch} onChange={(e) => set('branch', e.target.value)}>
                {BRANCHES.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>
            <div className="row2">
              <div className={`fld ${err.name ? 'bad' : ''}`}>
                <label htmlFor="ap-name">이름</label>
                <input id="ap-name" autoComplete="name" value={f.name} onChange={(e) => set('name', e.target.value)} />
                {err.name && <em>{err.name}</em>}
              </div>
              <div className={`fld ${err.phone ? 'bad' : ''}`}>
                <label htmlFor="ap-phone">연락처</label>
                <input id="ap-phone" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" value={f.phone} onChange={(e) => set('phone', fmtPhone(e.target.value))} />
                {err.phone && <em>{err.phone}</em>}
              </div>
            </div>
            <div className={`fld ${err.address ? 'bad' : ''}`}>
              <label htmlFor="ap-addr">수거 주소</label>
              <input id="ap-addr" autoComplete="street-address" placeholder="동·호수까지 입력해 주세요" value={f.address} onChange={(e) => set('address', e.target.value)} />
              {err.address && <em>{err.address}</em>}
            </div>
            <div className={`fld ${err.date ? 'bad' : ''}`}>
              <label htmlFor="ap-date">희망 수거일</label>
              <input id="ap-date" type="date" min={today()} value={f.date} onChange={(e) => set('date', e.target.value)} />
              {err.date && <em>{err.date}</em>}
            </div>
            <div className={`fld ${err.items ? 'bad' : ''}`}>
              <label>품목 (복수 선택)</label>
              <div className="chips">
                {ITEMS.map((it) => (
                  <button type="button" key={it} className={f.items.includes(it) ? 'on' : ''} aria-pressed={f.items.includes(it)} onClick={() => toggle(it)}>{it}</button>
                ))}
              </div>
              {err.items && <em>{err.items}</em>}
            </div>
            <div className="fld">
              <label htmlFor="ap-memo">요청사항 (선택)</label>
              <textarea id="ap-memo" rows="2" value={f.memo} onChange={(e) => set('memo', e.target.value)} />
            </div>
            {netErr && <p className="net-err">{netErr}</p>}
            <button className="btn btn-solid btn-block" disabled={busy}>{busy ? '전송 중…' : '수거 신청하기'}</button>
            <p className="modal-fine">추가요금·주의사항은 접수 후 사전에 안내해 드립니다.</p>
          </form>
        )}
      </div>
    </div>
  )
}
