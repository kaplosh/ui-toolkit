import { Component } from 'vue';

import HomePage from './HomePage.vue';
import Controls_TextInputsPage from './Controls/TextInputsPage.vue';
import Controls_OptionsSelectsPage from './Controls/OptionsSelectsPage.vue';
import Controls_NumberInputsPage from './Controls/IntegerInputsPage.vue';
import Controls_CheckBoxPage from './Controls/CheckBoxPage.vue';
import Controls_MultilineInputPage from './Controls/MultilineInputPage.vue';
import Controls_RadioInput from './Controls/RadioInputPage.vue';
import Controls_TranslateTable from './Controls/TranslateTablePage.vue';
import ComponentsPage from './ComponentsPage/ComponentsPage.vue';

interface Page {
  pathname: string;
  component: Component;
}

export const pages = {
  Home: page('', HomePage),
  Components: page('/components', ComponentsPage),
  Controls_TextInput: page('/controls/text-inputs', Controls_TextInputsPage),
  Controls_OptionsSelects: page('/controls/options-selects', Controls_OptionsSelectsPage),
  Controls_NumberInput: page('/controls/integer-inputs', Controls_NumberInputsPage),
  Controls_CheckBoxField: page('/controls/check-box-inputs', Controls_CheckBoxPage),
  Controls_MultilineInputPage: page('controls/multiline-inputs', Controls_MultilineInputPage), // TODO bad path
  Controls_RadioInputPage: page('controls/radio-inputs', Controls_RadioInput),
  Controls_TranslateTable: page('controls/translate-table', Controls_TranslateTable),
};

function page(pathname: string, component: Component): Page {
  return { pathname, component };
}

export function getPageForPathname(pathname: string = window.location.hash): undefined | Page {
  pathname = pathname.slice(1);
  if (pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return Object.values(pages).find(page => page.pathname === pathname) ?? undefined;
}
