/**
 * Scroll-spy + mobile drawer.
 *
 * Scroll-spy uses IntersectionObserver rather than recomputing `offsetTop` on
 * every scroll event: the section closest to the top of the viewport that is
 * still intersecting wins.
 */

const links = Array.from(
  document.querySelectorAll<HTMLAnchorElement>('a[data-nav-link]')
);

function setActive(id: string) {
  for (const link of links) {
    const isActive = link.dataset.navLink === id;
    if (isActive) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
const visible = new Set<string>();

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.add(entry.target.id);
        } else {
          visible.delete(entry.target.id);
        }
      }

      // Pick the topmost currently-visible section so the highlight matches
      // what the reader is looking at, not whatever intersected most recently.
      const topmost = sections.find((section) => visible.has(section.id));
      if (topmost) setActive(topmost.id);
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  );

  for (const section of sections) observer.observe(section);
}

/* ---------- mobile drawer ---------- */

const menu = document.getElementById('mobile-menu');
const panel = document.getElementById('menu-panel');
const openButton = document.getElementById('menu-open');
const closeButton = document.getElementById('menu-close');
const overlay = document.getElementById('menu-overlay');

if (menu && panel && openButton) {
  let lastFocused: HTMLElement | null = null;

  const openMenu = () => {
    lastFocused = document.activeElement as HTMLElement | null;
    menu.classList.remove('invisible', 'opacity-0');
    panel.classList.remove('translate-x-full');
    menu.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeButton?.focus();
  };

  const closeMenu = () => {
    menu.classList.add('opacity-0');
    panel.classList.add('translate-x-full');
    menu.setAttribute('aria-hidden', 'true');
    openButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Wait out the slide before hiding, so the transition is visible.
    window.setTimeout(() => menu.classList.add('invisible'), 300);
    lastFocused?.focus();
  };

  openButton.addEventListener('click', openMenu);
  closeButton?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  for (const link of menu.querySelectorAll('[data-menu-dismiss]')) {
    link.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-hidden') === 'false') {
      closeMenu();
    }
  });

  // Keep focus inside the drawer while it is open.
  panel.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;

    const focusable = panel.querySelectorAll<HTMLElement>('a[href], button');
    if (focusable.length === 0) return;

    const first = focusable[0]!;
    const last = focusable[focusable.length - 1]!;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // A resize past the breakpoint leaves the drawer stranded, so close it.
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches && menu.getAttribute('aria-hidden') === 'false') closeMenu();
  });
}
