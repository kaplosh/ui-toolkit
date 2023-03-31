import { Component } from 'vue';

import Controls_TextInputsPage from './Controls/TextInputsPage.vue';
import Controls_NumberInputsPage from './Controls/NumberInputsPage.vue';
import HomePage from './HomePage.vue';

interface Page {
  pathname: string;
  component: Component;
}

export const pages = {
  Home: page('', HomePage),
  Controls_TextInput: page('/controls/text-inputs', Controls_TextInputsPage),
  Controls_NumberInput: page('/controls/number-inputs', Controls_NumberInputsPage),
};

function page(pathname: string, component: Component): Page {
  return { pathname, component };
}

export function getPageForPathname(pathname: string = window.location.hash): undefined | Page {
  pathname = pathname.slice(1);
  if (pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return Object.values(pages).find(page => page.pathname === pathname) ?? undefined;
}
