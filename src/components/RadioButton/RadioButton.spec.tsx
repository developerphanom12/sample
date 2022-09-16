import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';
import { RadioButton } from './RadioButton';

const onChange = jest.fn();

describe('Radio button component', () => {
  it('Render component', () => {
    render(
      <AppTheme>
        <RadioButton onChange={onChange} isChecked={false} value={'React'} />
      </AppTheme>
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
  it('onChange works well', () => {
    render(
      <AppTheme>
        <RadioButton
          labelText="monday"
          onChange={onChange}
          isChecked={false}
          value={'React'}
        />
      </AppTheme>
    );

    const radioElement: HTMLInputElement = screen.getByLabelText('monday');
    expect(radioElement).toBeInTheDocument();
    fireEvent.change(radioElement, {
      target: {
        value: 'Vue',
      },
    });
    expect(radioElement.value).toBe('Vue');
  });
});
