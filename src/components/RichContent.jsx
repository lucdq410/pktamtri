// Hiển thị nội dung dạng khối của dịch vụ / bài viết (xem định dạng trong data/services.js)

function ListItem({ item }) {
  if (typeof item === 'string') return <li>{item}</li>
  return (
    <li>
      <strong>{item.title}:</strong> {item.text}
    </li>
  )
}

function Cards({ items }) {
  const simple = items.every((i) => !i.items)
  const cols = items.length >= 3 && simple ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'
  return (
    <div className={`grid gap-4 ${cols}`}>
      {items.map((card, i) => (
        <div key={card.title} className="rounded-3xl border border-ink/5 bg-white p-6 shadow-[0_20px_40px_-30px_rgba(43,36,32,0.25)]">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-honey-100 text-xs font-bold text-honey-700">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-base font-semibold text-ink">{card.title}</h3>
          </div>
          {card.text && <p className="mt-3 text-[0.9375rem] leading-relaxed">{card.text}</p>}
          {card.items && (
            <ul className="mt-4 text-[0.9375rem]">
              {card.items.map((it) => (
                <ListItem key={typeof it === 'string' ? it : it.title} item={it} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

function Steps({ items }) {
  return (
    <ol className={`grid gap-4 sm:grid-cols-2 ${items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {items.map((step, i) => (
        <li key={step.title} className="relative rounded-3xl bg-honey-50 p-6 ring-1 ring-honey-200/60">
          <span className="font-display text-3xl font-semibold text-honey-500">{i + 1}</span>
          <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

function Timeline({ items }) {
  return (
    <ol className="relative ml-2 border-l-2 border-dashed border-honey-200">
      {items.map((item) => (
        <li key={item.label} className="relative pb-8 pl-8 last:pb-0">
          <span className="absolute top-1 -left-[9px] h-4 w-4 rounded-full border-4 border-cream bg-honey-400 ring-2 ring-honey-200" />
          <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-semibold tracking-wide text-cream">{item.label}</span>
          <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
          {item.text && <p className="mt-1.5">{item.text}</p>}
          {item.items && (
            <ul className="mt-3 text-[0.9375rem]">
              {item.items.map((it) => (
                <ListItem key={it} item={it} />
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

export default function RichContent({ blocks }) {
  return (
    <div className="prose-tt">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i}>{block.text}</h2>
          case 'h3':
            return <h3 key={i}>{block.text}</h3>
          case 'quote':
            return <blockquote key={i}>{block.text}</blockquote>
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((it, j) => (
                  <ListItem key={j} item={it} />
                ))}
              </ul>
            )
          case 'cards':
            return <Cards key={i} items={block.items} />
          case 'steps':
            return <Steps key={i} items={block.items} />
          case 'timeline':
            return <Timeline key={i} items={block.items} />
          default:
            return <p key={i}>{block.text}</p>
        }
      })}
    </div>
  )
}
