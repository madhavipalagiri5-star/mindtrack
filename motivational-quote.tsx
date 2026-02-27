import { Quote } from "lucide-react"

export function MotivationalQuote() {
  return (
    <div className="rounded-2xl border border-lavender/30 bg-lavender/5 p-6">
      <Quote className="h-6 w-6 text-lavender" />
      <p className="mt-3 text-base font-medium leading-relaxed text-foreground">
        You don&apos;t have to control your thoughts. You just have to stop letting them control you.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        &mdash; Dan Millman
      </p>
    </div>
  )
}