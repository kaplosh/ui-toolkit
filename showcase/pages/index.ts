import { Component } from 'vue';

import HomePage from './HomePage.vue';
import ComponentsPage from './ComponentsPage/ComponentsPage.vue';
import Controls_TextInputsPage from './Controls/TextInputsPage.vue';
import Controls_OptionsSelectsPage from './Controls/OptionsSelectsPage.vue';
import Controls_DateSetPage from './Controls/DateSetPage.vue';

interface Page {
  pathname: string;
  component: Component;
}

export const pages = {
  Home: page('', HomePage),
  Components: page('/components', ComponentsPage),
  Controls_TextInput: page('/controls/text-inputs', Controls_TextInputsPage),
  Controls_OptionsSelects: page('/controls/options-selects', Controls_OptionsSelectsPage),
  Controls_DateSet: page('/controls/date-set', Controls_DateSetPage),
};

function page(pathname: string, component: Component): Page {
  return { pathname, component };
}

export function getPageForPathname(pathname: string = window.location.hash): undefined | Page {
  pathname = pathname.slice(1);
  if (pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return Object.values(pages).find(page => page.pathname === pathname) ?? undefined;
}
