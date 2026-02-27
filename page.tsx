import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MoodCheckIn } from "@/components/dashboard/mood-check-in"
import { WeeklyMoodChart } from "@/components/dashboard/weekly-mood-chart"
import { HabitTrackerCard } from "@/components/dashboard/habit-tracker-card"
import { StressIndicator } from "@/components/dashboard/stress-indicator"
import { ReflectionJournal } from "@/components/dashboard/reflection-journal"
import { MotivationalQuote } from "@/components/dashboard/motivational-quote"
import { CalendarDays } from "lucide-react"

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background px-6 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              Good morning, Student
            </h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {today}
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <MoodCheckIn />
              <WeeklyMoodChart />
              <ReflectionJournal />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <StressIndicator />
              <HabitTrackerCard />
              <MotivationalQuote />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}