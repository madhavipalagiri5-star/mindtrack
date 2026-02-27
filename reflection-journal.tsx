"use client"

import { useState } from "react"
import { PenLine } from "lucide-react"

export function ReflectionJournal() {
  const [text, setText] = useState("")

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <PenLine className="h-5 w-5 text-lavender" />
        <h3 className="text-lg font-semibold text-foreground">Reflection Journal</h3>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">Write freely about your day</p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind today? What went well? What could be better?"
        className="mt-4 h-32 w-full resize-none rounded-xl border border-border bg-muted/50 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {text.length} characters
        </span>
        <button className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
          Save Entry
        </button>
      </div>
    </div>
  )
}