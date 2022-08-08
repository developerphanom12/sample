import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from '../useDebounce';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('useDebounce hook', () => {
  it('hooks return value', () => {
    const { result } = renderHook(() => useDebounce('React', 250));
    expect(result.current).toBe('React');
  });

  it('setTimeout was called', async () => {
    renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: '123', delay: 500 },
    });
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
