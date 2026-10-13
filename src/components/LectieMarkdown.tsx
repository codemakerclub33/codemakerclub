import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import LectieCheckbox from '@/components/LectieCheckbox'
import LectieCopyGuard from '@/components/LectieCopyGuard'

type HastNode = {
  type: string
  tagName?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

/** Numerotează căsuțele de bifat în ordinea din lecție (id stabil pentru salvare). */
function rehypeNumerotareCasute() {
  return (tree: HastNode) => {
    let i = 0
    const walk = (node: HastNode) => {
      if (node.type === 'element' && node.tagName === 'input' && node.properties?.type === 'checkbox') {
        node.properties = { ...node.properties, dataCheckIndex: i++ }
      }
      node.children?.forEach(walk)
    }
    walk(tree)
  }
}

type Props = {
  markdown: string
  accentColor?: string
  /** Numele contului, adăugat în mențiunea de la copiere. */
  cont?: string | null
}

/** Afișează lecțiile markdown, inclusiv culorile Scratch din <span style="..."> */
export default function LectieMarkdown({ markdown, accentColor = '#0ea5e9', cont }: Props) {
  return (
    <LectieCopyGuard
      cont={cont}
      className="lectie-md prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-a:text-sky-600 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-slate-100 prose-table:text-sm [&_iframe]:max-w-full"
      style={{ ['--tw-prose-links' as string]: accentColor }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeNumerotareCasute]}
        components={{
          input: props => {
            const { node, type, ...rest } = props
            void node
            const index = (props as Record<string, unknown>)['data-check-index']
            return type === 'checkbox' ? (
              <LectieCheckbox index={typeof index === 'number' ? index : undefined} accentColor={accentColor} />
            ) : (
              <input type={type} {...rest} />
            )
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </LectieCopyGuard>
  )
}
