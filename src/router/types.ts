export interface Route {
  label: string;
  title?: string;
  component: Page;
  pathname: string;
  className?: string;
}

export interface Page {
  header?: () => Element;
  main: () => Element;
}
