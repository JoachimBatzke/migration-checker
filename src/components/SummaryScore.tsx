'use client';

import type { ComparisonResult } from '@/lib/types';

function getScoreColor(score: number): string {
  if (score >= 90) return 'bg-green-500/15 text-green-400 border-green-500/30';
  if (score >= 70) return 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30';
  return 'bg-red-500/15 text-red-400 border-red-500/30';
}

export default function SummaryScore({ result }: { result: ComparisonResult }) {
  const { overallScore, textDiff, images } = result;
  const imageScore = images.total === 0 ? 100 : (images.found / images.total) * 100;

  const stats = [
    { label: 'Overall', value: `${Math.round(overallScore * 10) / 10}%` },
    { label: 'Text', value: `${Math.round(textDiff.similarity * 10) / 10}%` },
    { label: 'Images', value: `${images.found}/${images.total}` },
  ];

  const scores = [overallScore, textDiff.similarity, imageScore];

  return (
    <div className="flex items-center gap-2">
      {stats.map((stat, i) => (
        <span
          key={stat.label}
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${getScoreColor(scores[i])}`}
        >
          <span className="text-white/60 font-normal">{stat.label}</span>
          {stat.value}
        </span>
      ))}
    </div>
  );
}
