import React, { useState } from "react";

export type TimelineItem = {
  year: number;
  text: string;
};

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={className}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border" aria-hidden />

        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={`${item.year}-${i}`} className="relative pl-10">
              {/* Dot */}
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border transition-colors ${
                  i === active ? 'bg-primary border-primary' : 'bg-background border-border hover:border-primary/60'
                }`}
                aria-label={`Select year ${item.year}`}
                aria-pressed={i === active}
              />

              <div className={`p-4 rounded-xl border ${i === active ? 'border-primary/60 bg-card' : 'border-border bg-card/40'}`}>
                <div className="text-sm text-muted-foreground">{item.year}</div>
                <div className="text-foreground">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
