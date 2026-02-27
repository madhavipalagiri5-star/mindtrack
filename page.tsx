import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HabitList } from "@/components/habits/habit-list"

export default function HabitsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Healthy Habits</h1>
            <p className="mt-2 text-muted-foreground">
              Small, consistent actions lead to big changes. Build your daily wellness routine.
            </p>
          </div>

          <HabitList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
