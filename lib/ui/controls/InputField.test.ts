import { describe, it, expect } from 'vitest';
import { ui } from '@ema/ui-toolkit';
import { render } from '@testing-library/vue';

describe('InputField', () => {
  it('shows placeholder', () => {
    const { container } = render(ui.controls.InputField, {
      props: {
        placeholder: '...',
      },
    });
    const input = container.querySelector('input');
    expect(input.placeholder).to.equal('...');
  });
});
