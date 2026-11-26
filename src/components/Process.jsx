import Icon from './Icons'
import { STEPS } from '../data'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="process-head">
          <p className="eyebrow reveal">HOW IT WORKS</p>
          <h2 className="h2 reveal" style={{ '--d': 100 }}>
            문 앞에서 문 앞까지, <em>4단계</em>
          </h2>
        </div>

        <ol className="flow reveal" style={{ '--d': 150 }}>
          {STEPS.map((s, i) => (
            <li key={s.no} style={{ '--i': i }}>
              <div className="flow-ico">
                <Icon name={s.icon} size={28} stroke={1.15} />
              </div>
              <span className="flow-no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
