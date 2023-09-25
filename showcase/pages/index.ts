import { Component } from 'vue';

import HomePage from './HomePage.vue';
import Components_DropdownPage from './Components/DropdownsPage.vue';
import Controls_TextInputsPage from './Controls/TextInputsPage.vue';
import Controls_OptionsSelectsPage from './Controls/OptionsSelectsPage.vue';

interface Page {
  pathname: string;
  component: Component;
}

export const pages = {
  Home: page('', HomePage),
  Components: page('/components/dropdown', Components_DropdownPage),
  Controls_TextInput: page('/controls/text-inputs', Controls_TextInputsPage),
  Controls_OptionsSelects: page('/controls/options-selects', Controls_OptionsSelectsPage),
};

function page(pathname: string, component: Component): Page {
  return { pathname, component };
}

export function getPageForPathname(pathname: string = window.location.hash): undefined | Page {
  pathname = pathname.slice(1);
  if (pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return Object.values(pages).find(page => page.pathname === pathname) ?? undefined;
}
