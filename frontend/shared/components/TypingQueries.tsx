'use client'
import { useState, useEffect } from 'react'

const queries = [
  "Need an emergency plumber near me now",
  "Best dentist in my area for tooth pain",
  "HVAC repair service open on weekends",
  "Reliable electrician for urgent repairs",
  "Top-rated lawyer for car accident near me",
  "Emergency roofer for leak repair today",
  "Local auto mechanic with good reviews"
]

export default function TypingQueries() {
  const [currentQuery, setCurrentQuery] = useState('')
  const [queryIndex, setQueryIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showQuery, setShowQuery] = useState(true)

  useEffect(() => {
    const query = queries[queryIndex]
    
    if (isTyping && charIndex < query.length) {
      const timer = setTimeout(() => {
        setCurrentQuery(query.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100) // Typing speed
      
      return () => clearTimeout(timer)
    } else if (isTyping && charIndex === query.length) {
      // Finished typing, wait 10 seconds then fade out
      const timer = setTimeout(() => {
        setShowQuery(false)
      }, 10000)
      
      setIsTyping(false)
      return () => clearTimeout(timer)
    } else if (!showQuery) {
      // Fade out completed, move to next query
      const timer = setTimeout(() => {
        setQueryIndex((prev) => (prev + 1) % queries.length)
        setCharIndex(0)
        setCurrentQuery('')
        setIsTyping(true)
        setShowQuery(true)
      }, 1000) // Fade out duration
      
      return () => clearTimeout(timer)
    }
  }, [charIndex, queryIndex, isTyping, showQuery])

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
      <div 
        className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-opacity duration-1000 ${
          showQuery ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span className="text-white/60 text-sm ml-auto">ChatGPT</span>
        </div>
        <div className="bg-white/10 rounded px-3 py-2 min-h-[40px] flex items-center">
          <span className="text-white font-medium">
            {currentQuery}
            {isTyping && (
              <span className="animate-pulse ml-1 text-white/80">|</span>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}