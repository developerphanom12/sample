import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react';

import { useOutsideClick } from '../useOutsideClick';

const handler = jest.fn();

const setupFc = () => {
  const { result } = renderHook(() => useOutsideClick(handler));
  const component = (
    <>
      <div ref={result.current} data-testid="inside-element">
        useOutsideClick
      </div>
      <div data-testid="outside-element">outSideElement</div>
    </>
  );
  render(component);
  return { result };
};

describe('useOutsideClick', () => {
  it('calls handler when click is outside element', () => {
    setupFc();

    fireEvent.click(screen.getByTestId('outside-element'));
    expect(handler).toBeCalled();
  });

  it(`doesn't calls handler when click is within element`, () => {
    setupFc();

    fireEvent.click(screen.getByTestId('inside-element'));
    expect(handler).not.toBeCalled();
  });
});
