import React, { useState, useEffect, useRef } from 'react';

export default function Navbar({ theme = 'light', onResumeClick, activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop.current && currentScroll > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';
  const navClasses = isDark
    ? 'bg-black/50 text-white'
    : 'bg-white/80 text-black';
  const mobileMenuClasses = isDark ? 'bg-black/90' : 'bg-white';
  const linkHoverClass = isDark ? 'after:bg-white' : 'after:bg-black';
  const buttonClasses = isDark
    ? 'border-white text-white hover:bg-white hover:text-black'
    : 'border-black text-black hover:bg-black hover:text-white';
  const dividerClasses = isDark ? 'bg-gray-600' : 'bg-gray-300';
  const activeLinkClasses = isDark ? 'bg-white text-black' : 'bg-black text-white';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Clients', href: '/#clients' },
    { name: 'Contact', href: '/#contact' },
  ];

  const actionLinks = [
      { name: 'Blog', href: '/blog'},
      { name: 'Picstop', href: '/picstop'}
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-6 py-4 shadow-sm backdrop-blur-sm transition-transform duration-300 ${navClasses} ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="text-lg font-bold">
        <a href="/">Nazib Akbar</a>
      </div>
      <div
        className="text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute top-full left-0 w-full flex-col items-center gap-y-6 py-4 shadow-md md:relative md:top-auto md:flex md:w-auto md:flex-row md:gap-x-8 md:bg-transparent md:py-0 md:shadow-none ${mobileMenuClasses}`}
      >
        <ul className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-8">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className={`relative list-none text-sm font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 transition-all after:duration-300 hover:after:w-full ${linkHoverClass}`}
            >
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
          <button
            onClick={onResumeClick}
            className={`mt-2 md:mt-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${buttonClasses}`}
          >
            Resume
          </button>
          <div className={`w-px rounded-full h-6 hidden md:block ${dividerClasses}`} />
          {actionLinks.map(link => (
             <a
             key={link.name}
             href={link.href}
             className={`mt-2 md:mt-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activePage === link.name.toLowerCase()
                ? activeLinkClasses + ' pointer-events-none'
                : buttonClasses
             }`}
           >
             {link.name}
           </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}
