import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset
} from './counterSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 0,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(-1);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(2);
  });

  it('should handle decrementByAmount', () => {
    const actual = counterReducer(initialState, decrementByAmount(2));
    expect(actual.value).toEqual(-2);
  });

  it('should handle reset', () => {
    const actual = counterReducer(initialState, reset());
    expect(actual.value).toEqual(0);
  });
});
