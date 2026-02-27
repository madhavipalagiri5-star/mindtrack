"use client"

import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 3 },
  { day: "Thu", mood: 5 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 4 },
  { day: "Sun", mood: 5 },
]

const moodLabels: Record<number, string> = {
  1: "Awful",
  2: "Bad",
  3: "Okay",
  4: "Good",
  5: "Great",
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-xs font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{moodLabels[payload[0].value]}</p>
      </div>
    )
  }
  return null
}

export function WeeklyMoodChart() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">Weekly Mood</h3>
      <p className="mt-1 text-sm text-muted-foreground">Your mood patterns this week</p>

      <div className="mt-5 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[1, 5]}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
              ticks={[1, 2, 3, 4, 5]}
              tickFormatter={(val) => moodLabels[val]?.[0] || ""}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="var(--primary)"
              strokeWidth={3}
              dot={{ r: 5, fill: "var(--primary)", stroke: "var(--card)", strokeWidth: 2 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}