'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface VisualPreviewProps {
  label: string;
  annotatedHtml: string;
  url: string;
  defaultHighlightMode?: 'migrated' | 'not-migrated';
  onIframeRef?: (iframe: HTMLIFrameElement | null) => void;
}

export default function VisualPreview({
  label,
  annotatedHtml,
  url,
  defaultHighlightMode = 'migrated',
  onIframeRef,
}: VisualPreviewProps) {
  const [highlightMode, setHighlightMode] = useState<'migrated' | 'not-migrated'>(defaultHighlightMode);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Expose iframe ref to parent via callback
  useEffect(() => {
    onIframeRef?.(iframeRef.current);
    return () => onIframeRef?.(null);
  }, [onIframeRef]);

  const sendToggle = useCallback((mode: 'migrated' | 'not-migrated') => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'toggle-highlight', mode },
        '*'
      );
    }
  }, []);

  const handleToggle = useCallback((mode: 'migrated' | 'not-migrated') => {
    setHighlightMode(mode);
    sendToggle(mode);
  }, [sendToggle]);

  const handleIframeLoad = useCallback(() => {
    // Send current mode when iframe finishes loading
    sendToggle(highlightMode);
  }, [sendToggle, highlightMode]);

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] shadow-sm">
      <div className="px-4 py-3 border-b border-white/10 bg-white/[0.05] rounded-t-lg">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="text-sm font-semibold text-white shrink-0">{label}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C4FF47]/70 hover:text-[#C4FF47] hover:underline truncate"
            >
              {url}
            </a>
          </div>

          <div className="flex rounded-lg overflow-hidden border border-white/20">
            <button
              type="button"
              onClick={() => handleToggle('migrated')}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                highlightMode === 'migrated'
                  ? 'bg-green-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              Migrated
            </button>
            <button
              type="button"
              onClick={() => handleToggle('not-migrated')}
              className={`px-3 py-1.5 text-xs font-medium border-l border-white/20 transition-colors ${
                highlightMode === 'not-migrated'
                  ? 'bg-red-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              Not Migrated
            </button>
          </div>
        </div>
      </div>

      <div className="relative" style={{ height: '600px' }}>
        <iframe
          ref={iframeRef}
          srcDoc={annotatedHtml}
          sandbox="allow-scripts allow-same-origin"
          onLoad={handleIframeLoad}
          className="w-full h-full border-0 rounded-b-lg bg-white"
          title={`${label} preview`}
        />
      </div>
    </div>
  );
}
