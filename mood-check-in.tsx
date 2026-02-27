"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const moods = [
  { emoji: "\u{1F614}", label: "Awful", value: 1 },
  { emoji: "\u{1F61E}", label: "Bad", value: 2 },
  { emoji: "\u{1F610}", label: "Okay", value: 3 },
  { emoji: "\u{1F60A}", label: "Good", value: 4 },
  { emoji: "\u{1F929}", label: "Great", value: 5 },
]

export function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">Daily Mood Check-In</h3>
      <p className="mt-1 text-sm text-muted-foreground">How are you feeling right now?</p>

      <div className="mt-5 flex items-center justify-between gap-2">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setSelectedMood(mood.value)}
            className={cn(
              "flex flex-1 flex-col items-center gap-1.5 rounded-xl p-3 transition-all",
              selectedMood === mood.value
                ? "bg-primary/10 ring-2 ring-primary"
                : "hover:bg-muted"
            )}
          >
            <span className="text-2xl md:text-3xl">{mood.emoji}</span>
            <span className="text-xs font-medium text-muted-foreground">{mood.label}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mt-4 rounded-xl bg-primary/5 px-4 py-3">
          <p className="text-sm text-primary">
            {selectedMood >= 4
              ? "That's wonderful! Keep doing what feels good."
              : selectedMood === 3
              ? "A neutral day is perfectly okay. Small wins count."
              : "It's brave to acknowledge tough feelings. You've got this."}
          </p>
        </div>
      )}
    </div>
  )
}