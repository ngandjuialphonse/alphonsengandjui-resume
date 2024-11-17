// src/components/Layout/Header.tsx
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../shared/ThemeToggle';
import { LanguageSelector } from '../shared/LanguageSelector';
import { Logo } from '../shared/Logo';
import { useLanguage } from '../../context/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();
  const navLinks = [
    { path: '/about', label: t('about') },
    { path: '/experience', label: t('experience') },
    { path: '/education', label: t('education') },
    { path: '/projects', label: t('projects') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <header className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <nav className="section-container h-20 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;