import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ui } from '@ema/ui-toolkit';

describe('InputField', () => {
  test('displaces placeholder', () => {
    const wrapper = mount(ui.controls.InputField, {
      props: { placeholder: 'kkk' },
    });
    expect(wrapper.attributes().placeholder).toEqual('kkk');
  } );
});
