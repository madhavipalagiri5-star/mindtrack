import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MoodSelector } from "@/components/mood/mood-selector"
import { MoodCalendar } from "@/components/mood/mood-calendar"
import { MoodAnalytics } from "@/components/mood/mood-analytics"

export default function MoodTrackerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Mood Tracker</h1>
            <p className="mt-2 text-muted-foreground">
              Understanding your emotions is the first step to managing them.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <MoodSelector />
            <MoodCalendar />
            <MoodAnalytics />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}