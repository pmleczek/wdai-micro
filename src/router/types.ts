export interface Route {
  label: string;
  title?: string;
  component: Page | string;
  pathname: string;
  className?: string;
}

export interface Page {
  header?: Element;
  main: Element;
}
