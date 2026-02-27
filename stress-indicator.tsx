"use client"

export function StressIndicator() {
  const stressLevel = 35
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (stressLevel / 100) * circumference

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">Stress Level</h3>
      <p className="mt-1 text-sm text-muted-foreground">Based on your recent check-ins</p>

      <div className="mt-5 flex items-center justify-center">
        <div className="relative">
          <svg width="120" height="120" className="-rotate-90">
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="var(--muted)"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="var(--mint)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{stressLevel}%</span>
            <span className="text-xs text-mint font-medium">Low</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Your stress is manageable. Keep up your healthy habits!
      </p>
    </div>
  )
}