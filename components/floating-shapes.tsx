"use client"

import { useEffect, useState } from "react"

export default function FloatingShapes() {
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    // Create random shapes
    const newShapes = []
    const colors = ["#007749", "#FFCE00", "#E94B3C", "#FFFFFF"]

    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.15 + 0.05,
        speed: Math.random() * 50 + 10,
        direction: Math.random() > 0.5 ? 1 : -1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 2 - 1) * 0.5,
      })
    }

    setShapes(newShapes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
            animation: `float ${shape.speed}s infinite linear, rotate ${Math.abs(30 / shape.rotationSpeed)}s infinite linear`,
            animationDirection: shape.direction > 0 ? "normal" : "reverse",
          }}
        />
      ))}
    </div>
  )
}

