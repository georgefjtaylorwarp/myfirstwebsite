"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from 'lucide-react'

const interests = [
  "Photography",
  "Travel",
  "Reading",
  "Gaming",
  "Cooking",
  "Hiking",
  "Music",
  "Art",
  "Technology",
  "Fitness",
  "Writing",
  "Movies",
  "Gardening",
  "Programming",
  "Languages",
  "Meditation",
  "Yoga",
  "Dancing",
  "Sports",
  "Design",
  "Science",
  "History",
  "Philosophy",
  "Animals"
]

const transitionProps = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5,
}

export default function InterestSelector() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-12">
      <h1 className="text-gray-900 text-3xl font-semibold mb-12 text-center tracking-tighter">
        some of my interests
      </h1>
      <div className="max-w-[570px] mx-auto">
        <motion.div 
          className="flex flex-wrap gap-3 overflow-visible"
          layout
          transition={transitionProps}
        >
          {interests.map((interest) => {
            const isSelected = selected.includes(interest)
            return (
              <motion.button
                key={interest}
                onClick={() => toggleInterest(interest)}
                layout
                initial={false}
                animate={{
                  backgroundColor: isSelected ? "#fff3f0" : "rgba(243, 244, 246, 0.8)",
                }}
                whileHover={{
                  backgroundColor: isSelected ? "#ffe4dc" : "rgba(243, 244, 246, 1)",
                }}
                whileTap={{
                  backgroundColor: isSelected ? "#ffd5c8" : "rgba(229, 231, 235, 1)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                  backgroundColor: { duration: 0.1 },
                }}
                className={`
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  ${isSelected 
                    ? "text-orange-600 ring-orange-200" 
                    : "text-gray-600 ring-gray-200"}
                `}
              >
                <motion.div 
                  className="relative flex items-center"
                  animate={{ 
                    width: isSelected ? "auto" : "100%",
                    paddingRight: isSelected ? "1.5rem" : "0",
                  }}
                  transition={{
                    ease: [0.175, 0.885, 0.32, 1.275],
                    duration: 0.3,
                  }}
                >
                  <span>{interest}</span>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30, 
                          mass: 0.5 
                        }}
                        className="absolute right-0"
                      >
                        <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" strokeWidth={1.5} />
                        </div>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

