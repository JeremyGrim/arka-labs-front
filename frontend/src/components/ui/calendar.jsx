import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
} from "date-fns"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const WEEK_START_ON = 1 // Monday

function buildCalendarWeeks(month) {
  const monthStart = startOfMonth(month)
  const monthEnd = endOfMonth(month)
  const firstVisibleDay = startOfWeek(monthStart, { weekStartsOn: WEEK_START_ON })
  const lastVisibleDay = endOfWeek(monthEnd, { weekStartsOn: WEEK_START_ON })

  const weeks = []
  let current = firstVisibleDay

  while (current <= lastVisibleDay) {
    const week = []
    for (let index = 0; index < 7; index++) {
      week.push(addDays(current, index))
    }
    weeks.push(week)
    current = addDays(current, 7)
  }

  return weeks
}

function getSelectedState(day, selected) {
  if (!selected) {
    return {
      isSelected: false,
      isRangeStart: false,
      isRangeEnd: false,
      isInRange: false,
    }
  }

  if (Array.isArray(selected)) {
    const match = selected.some((date) => date && isSameDay(date, day))
    return {
      isSelected: match,
      isRangeStart: false,
      isRangeEnd: false,
      isInRange: false,
    }
  }

  if (selected && typeof selected === "object" && ("from" in selected || "to" in selected)) {
    const from = selected.from
    const to = selected.to ?? selected.from

    if (!from) {
      return {
        isSelected: false,
        isRangeStart: false,
        isRangeEnd: false,
        isInRange: false,
      }
    }

    const isRangeStart = isSameDay(day, from)
    const isRangeEnd = !!selected.to && isSameDay(day, selected.to)
    const isInRange =
      !!selected.to &&
      !isRangeStart &&
      !isRangeEnd &&
      isWithinInterval(day, {
        start: from,
        end: selected.to,
      })

    return {
      isSelected: isRangeStart || isRangeEnd || (!selected.to && isRangeStart),
      isRangeStart,
      isRangeEnd,
      isInRange,
    }
  }

  return {
    isSelected: isSameDay(day, selected),
    isRangeStart: false,
    isRangeEnd: false,
    isInRange: false,
  }
}

function matchDisabledRule(day, rule) {
  if (!rule) {
    return false
  }

  if (typeof rule === "function") {
    return rule(day)
  }

  if (Array.isArray(rule)) {
    return rule.some((item) => matchDisabledRule(day, item))
  }

  if (rule instanceof Date) {
    return isSameDay(rule, day)
  }

  if (rule.before && isBefore(day, rule.before)) {
    return true
  }

  if (rule.after && isAfter(day, rule.after)) {
    return true
  }

  if (rule.from && rule.to) {
    if (isAfter(rule.from, rule.to)) {
      return false
    }
    return isWithinInterval(day, { start: rule.from, end: rule.to })
  }

  if (rule.from && !rule.to && (isAfter(day, rule.from) || isSameDay(day, rule.from))) {
    return true
  }

  if (rule.to && !rule.from && (isBefore(day, rule.to) || isSameDay(day, rule.to))) {
    return true
  }

  if (rule.dayOfWeek && Array.isArray(rule.dayOfWeek)) {
    return rule.dayOfWeek.includes(getDay(day))
  }

  return false
}

const weekdayLabels = (() => {
  const base = startOfWeek(new Date(), { weekStartsOn: WEEK_START_ON })
  return Array.from({ length: 7 }, (_, index) =>
    format(addDays(base, index), "EEEEE"),
  )
})()

function Calendar({
  className,
  classNames = {},
  showOutsideDays = true,
  selected,
  onSelect,
  month,
  onMonthChange,
  disabled,
  mode = "single",
  ...rest
}) {
  if (mode !== "single" && mode !== "range" && mode !== "multiple") {
    console.warn(`[Calendar] Unsupported mode "${mode}". Supported modes: single, range, multiple.`)
  }

  const initialMonth = React.useMemo(() => {
    if (month) return month
    if (Array.isArray(selected) && selected.length > 0) return selected[0]
    if (selected && typeof selected === "object" && selected.from) return selected.from
    if (selected instanceof Date) return selected
    return new Date()
  }, [month, selected])

  const [displayMonth, setDisplayMonth] = React.useState(initialMonth)

  React.useEffect(() => {
    if (month) {
      setDisplayMonth(month)
    }
  }, [month])

  React.useEffect(() => {
    if (!month) {
      if (Array.isArray(selected) && selected[0]) {
        setDisplayMonth(selected[0])
      } else if (selected && typeof selected === "object" && selected.from) {
        setDisplayMonth(selected.from)
      } else if (selected instanceof Date) {
        setDisplayMonth(selected)
      }
    }
  }, [selected, month])

  const weeks = React.useMemo(() => buildCalendarWeeks(displayMonth), [displayMonth])

  const mergedClassNames = React.useMemo(
    () => ({
      months: cn(
        "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        classNames.months,
      ),
      month: cn("space-y-4", classNames.month),
      caption: cn("flex justify-center pt-1 relative items-center", classNames.caption),
      caption_label: cn("text-sm font-medium", classNames.caption_label),
      nav: cn("space-x-1 flex items-center", classNames.nav),
      nav_button: cn(
        buttonVariants({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100",
        classNames.nav_button,
      ),
      nav_button_previous: cn("absolute left-1", classNames.nav_button_previous),
      nav_button_next: cn("absolute right-1", classNames.nav_button_next),
      table: cn("w-full border-collapse space-y-1", classNames.table),
      head_row: cn("flex", classNames.head_row),
      head_cell: cn(
        "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] text-center",
        classNames.head_cell,
      ),
      row: cn("flex w-full mt-2", classNames.row),
      cell: cn(
        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
        classNames.cell,
      ),
      day: cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0 font-normal", classNames.day),
      day_today: cn("bg-accent text-accent-foreground", classNames.day_today),
      day_outside: cn(
        "text-muted-foreground opacity-60",
        classNames.day_outside,
      ),
      day_disabled: cn("text-muted-foreground opacity-50", classNames.day_disabled),
      day_selected: cn(
        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        classNames.day_selected,
      ),
      day_range_middle: cn("bg-accent text-accent-foreground", classNames.day_range_middle),
      day_range_start: cn(classNames.day_range_start),
      day_range_end: cn(classNames.day_range_end),
      day_hidden: cn("invisible", classNames.day_hidden),
    }),
    [classNames],
  )

  const handleMonthChange = React.useCallback(
    (nextMonth) => {
      setDisplayMonth(nextMonth)
      onMonthChange?.(nextMonth)
    },
    [onMonthChange],
  )

  const handleSelect = React.useCallback(
    (day) => {
      if (matchDisabledRule(day, disabled)) {
        return
      }

      if (mode === "multiple") {
        const current = Array.isArray(selected) ? selected : []
        const exists = current.some((value) => value && isSameDay(value, day))
        if (exists) {
          onSelect?.(current.filter((value) => !isSameDay(value, day)))
        } else {
          onSelect?.([...current, day])
        }
        return
      }

      if (mode === "range") {
        const range = selected && typeof selected === "object" ? selected : {}

        if (!range.from || (range.from && range.to)) {
          onSelect?.({ from: day, to: undefined })
        } else if (isBefore(day, range.from)) {
          onSelect?.({ from: day, to: range.from })
        } else {
          onSelect?.({ from: range.from, to: day })
        }
        return
      }

      onSelect?.(day)
    },
    [disabled, mode, onSelect, selected],
  )

  return (
    <div className={cn("p-3", className)} {...rest}>
      <div className={mergedClassNames.months}>
        <div className={mergedClassNames.month}>
          <div className={mergedClassNames.caption}>
            <div className={mergedClassNames.nav}>
              <button
                type="button"
                className={cn(
                  mergedClassNames.nav_button,
                  mergedClassNames.nav_button_previous,
                )}
                onClick={() => handleMonthChange(addMonths(displayMonth, -1))}
                aria-label="Mois précédent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className={mergedClassNames.caption_label}>
                {format(displayMonth, "MMMM yyyy")}
              </div>
              <button
                type="button"
                className={cn(
                  mergedClassNames.nav_button,
                  mergedClassNames.nav_button_next,
                )}
                onClick={() => handleMonthChange(addMonths(displayMonth, 1))}
                aria-label="Mois suivant"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className={mergedClassNames.table}>
            <div className={mergedClassNames.head_row}>
              {weekdayLabels.map((label, index) => (
                <div key={index} className={mergedClassNames.head_cell}>
                  {label}
                </div>
              ))}
            </div>

            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className={mergedClassNames.row}>
                {week.map((day) => {
                  const key = day.toISOString()
                  const isCurrentMonth = isSameMonth(day, displayMonth)

                  if (!showOutsideDays && !isCurrentMonth) {
                    return (
                      <div key={key} className={mergedClassNames.cell}>
                        <span className={mergedClassNames.day_hidden}> </span>
                      </div>
                    )
                  }

                  const disabledDay = matchDisabledRule(day, disabled)
                  const selection = getSelectedState(day, selected)

                  const dayClasses = cn(
                    mergedClassNames.day,
                    !isCurrentMonth && mergedClassNames.day_outside,
                    disabledDay && mergedClassNames.day_disabled,
                    selection.isSelected && mergedClassNames.day_selected,
                    selection.isRangeStart && mergedClassNames.day_range_start,
                    selection.isRangeEnd && mergedClassNames.day_range_end,
                    selection.isInRange && mergedClassNames.day_range_middle,
                    isToday(day) && mergedClassNames.day_today,
                  )

                  return (
                    <div key={key} className={mergedClassNames.cell}>
                      <button
                        type="button"
                        onClick={() => handleSelect(day)}
                        disabled={disabledDay}
                        className={dayClasses}
                        aria-pressed={selection.isSelected}
                        aria-selected={selection.isSelected || selection.isInRange}
                      >
                        {format(day, "d")}
                      </button>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
