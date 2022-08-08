import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../useToggle';

it('change value to true', () => {
  const { result } = renderHook(() => useToggle());

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe(true);
});
