'use client'
import { useState, useEffect } from 'react'

interface QueryData {
  text: string
  platform: string
}

const queries: QueryData[] = [
  { text: "Emergency dentist open now", platform: "ChatGPT" },
  { text: "Best plumber near me reviews", platform: "Perplexity" },
  { text: "HVAC repair weekend service", platform: "Google AI Mode" },
  { text: "Reliable electrician near me", platform: "Claude" },
  { text: "Top rated roofer emergency", platform: "Gemini" },
  { text: "Car accident lawyer consultation", platform: "ChatGPT" },
  { text: "24 hour auto repair shop", platform: "Perplexity" },
  { text: "Urgent vet clinic near me", platform: "Claude" },
  { text: "Weekend locksmith service", platform: "Gemini" },
  { text: "Emergency AC repair today", platform: "ChatGPT" },
  { text: "Late night pharmacy open", platform: "Perplexity" },
  { text: "Towing service available now", platform: "Google AI Mode" },
  { text: "Same day appliance repair", platform: "Claude" },
  { text: "Emergency tree removal service", platform: "Gemini" },
  { text: "24/7 water damage cleanup", platform: "ChatGPT" }
]

// Function to generate random position
const generateRandomPosition = () => {
  const topPercent = Math.floor(Math.random() * 70) + 10 // 10% to 80% from top
  const leftPercent = Math.floor(Math.random() * 80) + 5 // 5% to 85% from left
  
  return {
    top: `${topPercent}%`,
    left: `${leftPercent}%`
  }
}

export default function BackgroundQueries() {
  const [activeQueries, setActiveQueries] = useState<{ [key: number]: { text: string; isVisible: boolean; position: { top: string; left: string } } }>({})

  useEffect(() => {
    let globalQueryIndex = 0

    const startQueryAnimation = (queryIndex: number) => {
      const query = queries[queryIndex]
      const randomPosition = generateRandomPosition()
      
      // First fade in the empty container with random position
      setActiveQueries(prev => ({
        ...prev,
        [queryIndex]: {
          text: '',
          isVisible: true,
          position: randomPosition
        }
      }))
      
      // Start typing immediately
      let charIndex = 0
      const typeInterval = setInterval(() => {
        setActiveQueries(prev => ({
          ...prev,
          [queryIndex]: {
            text: query.text.slice(0, charIndex + 1),
            isVisible: true,
            position: randomPosition
          }
        }))
        charIndex++
        
        if (charIndex >= query.text.length) {
          clearInterval(typeInterval)
          
          // Fade out after 4 seconds
          setTimeout(() => {
            setActiveQueries(prev => ({
              ...prev,
              [queryIndex]: {
                ...prev[queryIndex],
                isVisible: false
              }
            }))
            
            // Clear after fade
            setTimeout(() => {
              setActiveQueries(prev => {
                const newState = { ...prev }
                delete newState[queryIndex]
                return newState
              })
            }, 1000)
          }, 4000)
        }
      }, 80)
    }

    // Start a new query every 3 seconds continuously
    const startNextQuery = () => {
      startQueryAnimation(globalQueryIndex % queries.length)
      globalQueryIndex++
      
      setTimeout(startNextQuery, 3000) // Start next query after 3 seconds
    }

    // Begin the continuous cycle
    startNextQuery()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {queries.map((query, index) => {
        const activeQuery = activeQueries[index]
        if (!activeQuery || !activeQuery.position) return null
        
        return (
          <div 
            key={index}
            className={`absolute hidden md:block transition-opacity duration-1000 ${
              activeQuery.isVisible ? 'opacity-80' : 'opacity-0'
            }`}
            style={{
              top: activeQuery.position.top,
              left: activeQuery.position.left,
              transform: 'translate(-50%, -50%)' // Center the element on the random point
            }}
          >
            <div className="bg-white/4 backdrop-blur-sm rounded-lg p-3 border border-white/8 max-w-xs">
              <div className="text-white/64 text-sm font-medium">
                {activeQuery.text}
                {activeQuery.text.length < query.text.length && (
                  <span className="animate-pulse ml-1">|</span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}