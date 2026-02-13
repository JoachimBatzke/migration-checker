'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useComparison } from '@/context/ComparisonContext';

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M340-148.42q-65.69-28.43-114.42-77.16-48.73-48.73-77.16-114.42Q120-405.69 120-480.12q0-74.42 28.42-140 28.43-65.57 77.16-114.3 48.73-48.73 114.42-77.16Q405.69-840 480.12-840q74.42 0 140 28.42 65.57 28.43 114.3 77.16 48.73 48.73 77.16 114.3 28.42 65.58 28.42 140 0 74.43-28.42 140.12-28.43 65.69-77.16 114.42-48.73 48.73-114.3 77.16-65.58 28.42-140 28.42-74.43 0-140.12-28.42Zm140-11.27q35.23-45.23 58.08-88.85 22.84-43.61 37.15-97.61H384.77q15.85 57.07 37.92 100.69 22.08 43.61 57.31 85.77Zm-50.92-6q-28-33-51.12-81.58-23.11-48.58-34.42-98.88H190.15q34.39 74.61 97.5 122.38 63.12 47.77 141.43 58.08Zm101.84 0q78.31-10.31 141.43-58.08 63.11-47.77 97.5-122.38H616.46q-15.15 51.07-38.27 99.65-23.11 48.58-47.27 80.81ZM173.85-386.15h161.38q-4.54-24.62-6.42-47.97-1.89-23.34-1.89-45.88 0-22.54 1.89-45.88 1.88-23.35 6.42-47.97H173.85q-6.54 20.77-10.2 45.27Q160-504.08 160-480t3.65 48.58q3.66 24.5 10.2 45.27Zm201.38 0h209.54q4.54-24.62 6.42-47.2 1.89-22.57 1.89-46.65t-1.89-46.65q-1.88-22.58-6.42-47.2H375.23q-4.54 24.62-6.42 47.2-1.89 22.57-1.89 46.65t1.89 46.65q1.88 22.58 6.42 47.2Zm249.54 0h161.38q6.54-20.77 10.2-45.27Q800-455.92 800-480t-3.65-48.58q-3.66-24.5-10.2-45.27H624.77q4.54 24.62 6.42 47.97 1.89 23.34 1.89 45.88 0 22.54-1.89 45.88-1.88 23.35-6.42 47.97Zm-8.31-227.7h153.39Q734.69-690 673.5-736.23q-61.19-46.23-142.58-58.85 28 36.85 50.35 84.27 22.35 47.43 35.19 96.96Zm-231.69 0h190.46q-15.85-56.3-39.08-101.84-23.23-45.54-56.15-84.62-32.92 39.08-56.15 84.62-23.23 45.54-39.08 101.84Zm-194.62 0h153.39q12.84-49.53 35.19-96.96 22.35-47.42 50.35-84.27-82.16 12.62-142.96 59.23-60.81 46.62-95.97 122Z" />
    </svg>
  );
}

function AuthToggle({
  label,
  expanded,
  onToggle,
  disabled,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="mt-1 flex items-center gap-1 text-xs text-white/30 hover:text-white/50 transition"
    >
      <svg
        className={`h-3 w-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </button>
  );
}

function AuthFields({
  prefix,
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  disabled,
}: {
  prefix: string;
  username: string;
  password: string;
  onUsernameChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  disabled: boolean;
}) {
  const uid = `${prefix}Username`;
  const pid = `${prefix}Password`;
  return (
    <div className="mt-2 grid grid-cols-2 gap-3">
      <div>
        <label
          htmlFor={uid}
          className="block text-xs font-medium text-white/40 mb-1"
        >
          Username
        </label>
        <input
          id={uid}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          autoComplete="off"
          className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
          disabled={disabled}
        />
      </div>
      <div>
        <label
          htmlFor={pid}
          className="block text-xs font-medium text-white/40 mb-1"
        >
          Password
        </label>
        <input
          id={pid}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          autoComplete="off"
          className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default function CompareForm() {
  const router = useRouter();
  const { setResult, setIsLoading, setError, isLoading } = useComparison();
  const [sourceUrl, setSourceUrl] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSourceAuth, setShowSourceAuth] = useState(false);
  const [showTargetAuth, setShowTargetAuth] = useState(false);
  const [sourceSelector, setSourceSelector] = useState('');
  const [targetSelector, setTargetSelector] = useState('');
  const [sourceInclude, setSourceInclude] = useState('');
  const [sourceExclude, setSourceExclude] = useState('');
  const [targetInclude, setTargetInclude] = useState('');
  const [targetExclude, setTargetExclude] = useState('');
  const [sourceUsername, setSourceUsername] = useState('');
  const [sourcePassword, setSourcePassword] = useState('');
  const [targetUsername, setTargetUsername] = useState('');
  const [targetPassword, setTargetPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceUrl,
          targetUrl,
          sourceSelector: sourceSelector || null,
          targetSelector: targetSelector || null,
          sourceIncludeSelectors: sourceInclude ? sourceInclude.split(',').map(s => s.trim()).filter(Boolean) : null,
          sourceExcludeSelectors: sourceExclude ? sourceExclude.split(',').map(s => s.trim()).filter(Boolean) : null,
          targetIncludeSelectors: targetInclude ? targetInclude.split(',').map(s => s.trim()).filter(Boolean) : null,
          targetExcludeSelectors: targetExclude ? targetExclude.split(',').map(s => s.trim()).filter(Boolean) : null,
          sourceAuth: sourceUsername ? { username: sourceUsername, password: sourcePassword } : null,
          targetAuth: targetUsername ? { username: targetUsername, password: targetPassword } : null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || `Error ${res.status}`);
        setIsLoading(false);
        return;
      }

      setResult(data);
      setIsLoading(false);
      router.push('/results');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      );
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Source URL */}
      <div>
        <label
          htmlFor="sourceUrl"
          className="block text-sm font-medium text-white/70 mb-1"
        >
          Source URL (original page)
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25">
            <GlobeIcon />
          </div>
          <input
            id="sourceUrl"
            type="url"
            required
            placeholder="https://old-site.com/about"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/[0.07] pl-10 pr-4 py-3 text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
            disabled={isLoading}
          />
        </div>
        <AuthToggle
          label="HTTP Basic Auth"
          expanded={showSourceAuth}
          onToggle={() => setShowSourceAuth(!showSourceAuth)}
          disabled={isLoading}
        />
        {showSourceAuth && (
          <AuthFields
            prefix="source"
            username={sourceUsername}
            password={sourcePassword}
            onUsernameChange={setSourceUsername}
            onPasswordChange={setSourcePassword}
            disabled={isLoading}
          />
        )}
      </div>

      {/* Target URL */}
      <div>
        <label
          htmlFor="targetUrl"
          className="block text-sm font-medium text-white/70 mb-1"
        >
          Target URL (migrated page)
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25">
            <GlobeIcon />
          </div>
          <input
            id="targetUrl"
            type="url"
            required
            placeholder="https://new-site.com/about-us"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/[0.07] pl-10 pr-4 py-3 text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
            disabled={isLoading}
          />
        </div>
        <AuthToggle
          label="HTTP Basic Auth"
          expanded={showTargetAuth}
          onToggle={() => setShowTargetAuth(!showTargetAuth)}
          disabled={isLoading}
        />
        {showTargetAuth && (
          <AuthFields
            prefix="target"
            username={targetUsername}
            password={targetPassword}
            onUsernameChange={setTargetUsername}
            onPasswordChange={setTargetPassword}
            disabled={isLoading}
          />
        )}
      </div>

      {/* Compare button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-[#C4FF47] px-6 py-3 text-black font-semibold hover:bg-[#d4ff6a] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Comparing pages...
          </span>
        ) : (
          'Compare'
        )}
      </button>

      {/* Advanced options */}
      <div className="text-center">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-white/30 hover:text-white/50 transition"
        >
          {showAdvanced ? 'Hide' : 'Show'} advanced options
        </button>
      </div>

      {showAdvanced && (
        <div className="space-y-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="space-y-4">
            <p className="text-xs font-medium text-white/50 uppercase tracking-wide">
              Content Root Selector
            </p>
            <p className="text-xs text-white/30">
              Override the automatic content detection with a CSS selector. Only
              tag names, class selectors (.class), and ID selectors (#id) are
              allowed.
            </p>
            <div>
              <label
                htmlFor="sourceSelector"
                className="block text-sm font-medium text-white/50 mb-1"
              >
                Source CSS selector (optional)
              </label>
              <input
                id="sourceSelector"
                type="text"
                placeholder="#content"
                value={sourceSelector}
                onChange={(e) => setSourceSelector(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="targetSelector"
                className="block text-sm font-medium text-white/50 mb-1"
              >
                Target CSS selector (optional)
              </label>
              <input
                id="targetSelector"
                type="text"
                placeholder=".article-body"
                value={targetSelector}
                onChange={(e) => setTargetSelector(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-4">
            <p className="text-xs font-medium text-white/50 uppercase tracking-wide">
              Include / Exclude Selectors
            </p>
            <p className="text-xs text-white/30">
              Fine-tune which elements are compared within the content root.
              Comma-separated CSS selectors. Include keeps only matching elements;
              exclude removes them.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="sourceInclude"
                  className="block text-sm font-medium text-white/50 mb-1"
                >
                  Source include
                </label>
                <input
                  id="sourceInclude"
                  type="text"
                  placeholder=".article-body, .summary"
                  value={sourceInclude}
                  onChange={(e) => setSourceInclude(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label
                  htmlFor="sourceExclude"
                  className="block text-sm font-medium text-white/50 mb-1"
                >
                  Source exclude
                </label>
                <input
                  id="sourceExclude"
                  type="text"
                  placeholder=".author-bio, .cookie-banner"
                  value={sourceExclude}
                  onChange={(e) => setSourceExclude(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="targetInclude"
                  className="block text-sm font-medium text-white/50 mb-1"
                >
                  Target include
                </label>
                <input
                  id="targetInclude"
                  type="text"
                  placeholder=".article-body, .summary"
                  value={targetInclude}
                  onChange={(e) => setTargetInclude(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label
                  htmlFor="targetExclude"
                  className="block text-sm font-medium text-white/50 mb-1"
                >
                  Target exclude
                </label>
                <input
                  id="targetExclude"
                  type="text"
                  placeholder=".ad-slot, .social-share"
                  value={targetExclude}
                  onChange={(e) => setTargetExclude(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white placeholder-white/25 focus:border-[#C4FF47]/50 focus:ring-2 focus:ring-[#C4FF47]/20 outline-none transition"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
