import * as filters from './TodoFilters';

describe('TodoFilters', () => {
  it('contains SHOW_ACTIVE', () => {
    expect(filters.SHOW_ACTIVE).toEqual('SHOW_ACTIVE');
  });

  it('contains SHOW_ALL', () => {
    expect(filters.SHOW_ALL).toEqual('SHOW_ALL');
  });

  it('contains SHOW_COMPLETED', () => {
    expect(filters.SHOW_COMPLETED).toEqual('SHOW_COMPLETED');
  });
});
