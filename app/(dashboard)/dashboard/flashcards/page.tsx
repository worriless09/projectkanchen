'use client'
import { useState } from 'react'

// Dummy card data; replace this with API fetch or Supabase later
const sampleCards = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Who wrote the Indian Constitution?',
    answer: 'Dr. B.R. Ambedkar',
  },
  {
    id: 3,
    question: 'Define Judicial Review.',
    answer: 'Power of courts to determine constitutionality of laws.',
  },
]

export default function FlashcardsPage() {
  const [current, setCurrent] = useState(0)
  const [front, setFront] = useState(true)
  const [cards, setCards] = useState(sampleCards)
  const [reviewed, setReviewed] = useState<boolean[]>(Array(sampleCards.length).fill(false))
  const card = cards[current]

  // Handler for review button click. Replace with API call for SM2 (spaced repetition) logic.
  const handleReview = async (quality: 'again'|'good'|'easy') => {
    // TODO: Call backend API here to update review status for `card.id`
    setReviewed(r => {
      const n = [...r]
      n[current] = true
      return n
    })
    // go to next unreviewed card, or reset to 0 if all done
    let next = (current + 1) % cards.length
    let count = 0
    while (reviewed[next] && count < cards.length) {
      next = (next + 1) % cards.length
      count++
    }
    setCurrent(next)
    setFront(true)
  }

  if (!card) return <div className="p-8">No flashcards available.</div>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-accent">
      <h1 className="text-3xl font-bold mb-8 text-primary">Flashcards Review</h1>
      <div className="flex flex-col items-center space-y-6 w-full max-w-sm">

        <div
          className={`relative w-full h-56 cursor-pointer perspective group`}
          onClick={() => setFront(f => !f)}
        >
          <div className={`absolute w-full h-full rounded-xl shadow-card flex flex-col items-center justify-center 
            bg-white transition-transform duration-500 [transform-style:preserve-3d]
            ${front ? '' : '[transform:rotateY(180deg)]'}
          `}>
            {/* Front Face */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden px-6">
              <p className="text-ink text-lg font-semibold mb-4">Question</p>
              <p className="text-2xl">{card.question}</p>
              <span className="mt-6 text-sm text-primary">Click to reveal answer</span>
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden px-6 [transform:rotateY(180deg)]">
              <p className="text-ink text-lg font-semibold mb-4">Answer</p>
              <p className="text-2xl">{card.answer}</p>
              <span className="mt-6 text-sm text-primary">Click to see question</span>
            </div>
          </div>
        </div>

        {/* Flip button (for screen readers or mobile) */}
        <button
          className="mt-2 text-primary underline hover:text-primary-dark focus:outline-none"
          onClick={() => setFront(f => !f)}
          aria-label="Flip card"
        >Flip Card</button>

        {/* Review Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary/30 focus:outline-none"
            onClick={() => handleReview('again')}
          >
            Again
          </button>
          <button
            className="px-4 py-2 rounded-full bg-accent text-primary hover:bg-primary/30 focus:outline-none"
            onClick={() => handleReview('good')}
          >
            Good
          </button>
          <button
            className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none"
            onClick={() => handleReview('easy')}
          >
            Easy
          </button>
        </div>

        {/* Card navigation */}
        <div className="mt-6 flex w-full items-center justify-between">
          <button
            className="px-3 py-1 rounded bg-primary text-white disabled:bg-accent disabled:text-primary/40 transition"
            onClick={() => { setCurrent((current - 1 + cards.length) % cards.length); setFront(true); }}
            disabled={cards.length <= 1}
          >Prev</button>
          <span className="text-gray-600 text-sm">
            Card {current+1} of {cards.length}
          </span>
          <button
            className="px-3 py-1 rounded bg-primary text-white disabled:bg-accent disabled:text-primary/40 transition"
            onClick={() => { setCurrent((current+1)%cards.length); setFront(true); }}
            disabled={cards.length <= 1}
          >Next</button>
        </div>
      </div>
    </div>
  )
}
