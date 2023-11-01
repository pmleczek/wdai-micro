const onClick = (event: MouseEvent) => {
  event.preventDefault();
  window.history.pushState({}, '', (event.target as HTMLAnchorElement).href);
  const navigationEvent = new PopStateEvent('navigate');
  window.dispatchEvent(navigationEvent);
};

const NavLink = (to: string, label: string, className: string = ''): HTMLAnchorElement => {
  const navLink = document.createElement('a');

  navLink.setAttribute('href', to);
  navLink.innerText = label;
  navLink.addEventListener('click', onClick);
  navLink.setAttribute(
    'class',
    `nav-link font-semibold hover:opacity px-4 py-2 rounded-2 md:p-0 ${className}`,
  );

  return navLink;
};

export default NavLink;