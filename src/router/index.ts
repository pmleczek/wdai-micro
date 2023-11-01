import { NavLink } from '../components';
import { CloseIcon, MenuIcon } from '../components/icons';
import { Route } from './types';

const navLinks = document.querySelector('#nav-links');
const navbar = document.querySelector('#navbar');
const navbarToggler = document.querySelector('#navbar-toggler');
const routerOutlet = document.querySelector('#router-outlet');
const title = document.querySelector('title');

const onNavigate = (routes: Route[]) => {
  if (routerOutlet) {
    const route = routes.find(
      (route) => route.pathname === window.location.pathname,
    );

    if (!route) {
      return;
    }

    routerOutlet.innerHTML = route.component;

    if (title) {
      title.innerText = route.title ?? route.label;
    }

    const navLinks = document.querySelectorAll('a.nav-link');

    if (navLinks) {
      navLinks.forEach((element) => {
        element.classList.remove('active');
      });
    }

    const navLink = document.querySelector(
      `a[href="${window.location.pathname}"].nav-link:not(.disabled)`,
    );

    if (navLink) {
      navLink.classList.add('active');
    }

    onClick();
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

  onNavigate(routes);
};
