'use client';

import type { ImageReport as ImageReportType } from '@/lib/types';

const STATUS_STYLES = {
  found: 'bg-green-500/15 text-green-400',
  missing: 'bg-red-500/15 text-red-400',
  unverified: 'bg-yellow-500/15 text-yellow-400',
};

const METHOD_LABELS: Record<string, string> = {
  'exact-url': 'Exact URL',
  filename: 'Filename',
  'normalized-filename': 'Normalized filename',
  'content-hash': 'Content hash',
  'alt-text': 'Alt text',
};

export default function ImageReport({
  report,
}: {
  report: ImageReportType;
}) {
  if (report.total === 0) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">
          Image Report
        </h2>
        <p className="text-white/40 text-sm">
          No images found in the source page content area.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-3">
        Image Report
        <span className="ml-2 text-sm font-normal text-white/50">
          ({report.found}/{report.total} found)
        </span>
      </h2>
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/[0.05]">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-white/60">
                Source Image
              </th>
              <th className="text-left px-4 py-2 font-medium text-white/60">
                Alt Text
              </th>
              <th className="text-left px-4 py-2 font-medium text-white/60">
                Status
              </th>
              <th className="text-left px-4 py-2 font-medium text-white/60">
                Match Method
              </th>
              <th className="text-left px-4 py-2 font-medium text-white/60">
                Target Match
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {report.details.map((detail, i) => {
              const filename = detail.src.split('/').pop() || detail.src;
              return (
                <tr key={i} className="hover:bg-white/[0.03]">
                  <td className="px-4 py-2 max-w-[200px] truncate" title={detail.src}>
                    <a
                      href={detail.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4FF47]/70 hover:text-[#C4FF47] hover:underline"
                    >
                      {filename}
                    </a>
                  </td>
                  <td className="px-4 py-2 max-w-[150px] truncate text-white/50">
                    {detail.alt || '-'}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[detail.status]}`}
                    >
                      {detail.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-white/50">
                    {detail.matchMethod
                      ? METHOD_LABELS[detail.matchMethod] || detail.matchMethod
                      : '-'}
                  </td>
                  <td className="px-4 py-2 max-w-[200px] truncate">
                    {detail.targetMatch ? (
                      <a
                        href={detail.targetMatch}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C4FF47]/70 hover:text-[#C4FF47] hover:underline"
                      >
                        {detail.targetMatch.split('/').pop()}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
