'use client';

import { useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

type Theme = 'dark' | 'light';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(current);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem('sypher-theme', next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      className={`theme-toggle${compact ? ' compact' : ''}`}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
      </span>
      {!compact && <span>{theme === 'dark' ? 'Claro' : 'Escuro'}</span>}
    </button>
  );
}
