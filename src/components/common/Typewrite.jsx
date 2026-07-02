import React, { useEffect, useState } from "react"

const Typewrite = ({ words = [], speed = 90, pause = 1400 }) => {
  const [i, setI] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const current = words[i % words.length]

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)

        if (next === current) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)

        if (next === "") {
          setDeleting(false)
          setI((v) => v + 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return (
    <span className="caret brand-gradient-text font-semibold">
      {text}
    </span>
  )
}

export default Typewrite