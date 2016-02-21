import * as TodoFilters from './TodoFilters';

describe('TodoFilters', () => {
  it('contains SHOW_ACTIVE', () => {
    expect(TodoFilters.SHOW_ACTIVE).toEqual('show_active');
  });

  it('contains SHOW_ALL', () => {
    expect(TodoFilters.SHOW_ALL).toEqual('show_all');
  });

  it('contains SHOW_COMPLETED', () => {
    expect(TodoFilters.SHOW_COMPLETED).toEqual('show_completed');
  });
});
