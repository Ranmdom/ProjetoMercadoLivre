"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        background: "#eee",
        border: "none",
        cursor: "pointer"
      }}
    >
      {darkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  )
}