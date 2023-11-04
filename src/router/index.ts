import { LogoLink, NavLink } from '../components';
import { CloseIcon, MenuIcon } from '../components/icons';
import { Page, Route } from './types';

const navLinks = document.querySelector('#nav-links');
const navbar = document.querySelector('#navbar');
const navbarToggler = document.querySelector('#navbar-toggler');
const title = document.querySelector('title');

const headerOutlet = document.querySelector('#header-outlet');
const mainOutlet = document.querySelector('#router-outlet');

const renderPage = (page: Page) => {
  if (mainOutlet) {
    mainOutlet.replaceChildren(page.main());
  }

  if (headerOutlet) {
    if (page.header) {
      headerOutlet.replaceChildren(page.header());
    } else {
      headerOutlet.replaceChildren('');
    }
  }
};

const onNavigate = (routes: Route[]) => {
  if (mainOutlet) {
    const route = routes.find(
      (route) => route.pathname === window.location.pathname,
    );

    if (!route) {
      return;
    }

    if (typeof route.component === 'string') {
      mainOutlet.innerHTML = route.component;
    } else {
      renderPage(route.component);
    }

    if (title) {
      title.innerText = route.title ?? route.label;
    }

    const navLinksA = document.querySelectorAll('a.nav-link');

    if (navLinksA) {
      navLinksA.forEach((element) => {
        element.classList.remove('active');
      });
    }

    const navLink = document.querySelector(
      `a[href="${window.location.pathname}"].nav-link:not(.disabled)`,
    );

    if (navLink) {
      navLink.classList.add('active');
    }

    if (navLinks && navbarToggler && !navLinks.classList.contains('none')) {
      navLinks.classList.add('none');
      navbarToggler.innerHTML = MenuIcon;
    }
  }
};

const onClick = () => {
  if (navLinks) {
    navLinks.classList.toggle('none');

    if (navbarToggler) {
      if (navLinks.classList.contains('none')) {
        navbarToggler.innerHTML = MenuIcon;
      } else {
        navbarToggler.innerHTML = CloseIcon;
      }
    }
  }
};

export const setupRouter = (routes: Route[]) => {
  if (navLinks) {
    routes.forEach((route) => {
      navLinks.appendChild(
        NavLink(route.pathname, route.label, route.className),
      );
    });
  }

  if (navbar) {
    navbar.prepend(LogoLink());

    navbar.appendChild(
      NavLink(
        '/new',
        'New post',
        'none md:flex bg-primary !py-2 !px-4 font-medium rounded-2 disabled text-3.5 md:order-3',
      ),
    );
  }

  if (navbarToggler) {
    navbarToggler.innerHTML = MenuIcon;
    navbarToggler.addEventListener('click', onClick);
  }

  window.addEventListener('navigate', () => onNavigate(routes));

  window.addEventListener('popstate', () => onNavigate(routes));

  onNavigate(routes);
};
