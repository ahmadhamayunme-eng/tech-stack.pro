import type { ComparisonMetric } from "@/data/site";

type ToolComparisonTableProps = {
  leftLabel: string;
  rightLabel: string;
  metrics: ComparisonMetric[];
};

export function ToolComparisonTable({ leftLabel, rightLabel, metrics }: ToolComparisonTableProps) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
        <div className="p-4">Criteria</div>
        <div className="p-4">{leftLabel}</div>
        <div className="p-4">{rightLabel}</div>
      </div>
      {metrics.map((metric) => (
        <div key={metric.label} className="grid grid-cols-3 border-b border-white/8 text-sm text-white/66 last:border-b-0">
          <div className="p-4 font-semibold text-white/85">{metric.label}</div>
          <div className="p-4">{metric.toolA}</div>
          <div className="p-4">{metric.toolB}</div>
        </div>
      ))}
    </div>
  );
}
