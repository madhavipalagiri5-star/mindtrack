"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Droplets, Moon, Footprints, Wind, BookOpenCheck, Flame } from "lucide-react"

const habits = [
  { id: "water", label: "Drink Water", icon: Droplets, streak: 5, color: "text-soft-blue" },
  { id: "sleep", label: "Sleep 7+ hrs", icon: Moon, streak: 3, color: "text-lavender" },
  { id: "walk", label: "Take a Walk", icon: Footprints, streak: 7, color: "text-mint" },
  { id: "breathe", label: "Breathe", icon: Wind, streak: 2, color: "text-peach" },
  { id: "study", label: "Study Break", icon: BookOpenCheck, streak: 4, color: "text-primary" },
]

export function HabitTrackerCard() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    water: true,
    walk: true,
  })

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">Today&apos;s Habits</h3>
      <p className="mt-1 text-sm text-muted-foreground">Check off as you complete them</p>

      <div className="mt-5 flex flex-col gap-3">
        {habits.map((habit) => (
          <button
            key={habit.id}
            onClick={() => toggle(habit.id)}
            className={cn(
              "flex items-center gap-3 rounded-xl border p-3 transition-all",
              checked[habit.id]
                ? "border-primary/30 bg-primary/5"
                : "border-border hover:bg-muted"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg",
              <Flame className="h-3.5 w-3.5 text-peach" />
              {habit.streak}
            </div>
            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-md border-2 transition-colors",
                checked[habit.id]
                  ? "border-primary bg-primary"
                  : "border-muted-foreground/30"
              )}
            >
              {checked[habit.id] && (
                <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}                checked[habit.id] ? "bg-primary/10" : "bg-muted"
              )}
            >
              <habit.icon className={cn("h-4 w-4", habit.color)} />
            </div>
            <span
              className={cn(
                "flex-1 text-left text-sm font-medium",
                checked[habit.id] ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {habit.label}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground"></div>