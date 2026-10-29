import { useEffect, useId } from 'react'

type Props = { onClose: () => void }

export default function Modal({ onClose }: Props) {
  const titleId = useId()
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <h2 id={titleId}>Informations</h2>
        <p>Ce module couvre l'accessibilité et le SEO.</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}