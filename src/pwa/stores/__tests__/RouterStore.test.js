import { getSnapshot } from 'mobx-state-tree';
import RouterStore from '../RouterStore';
import * as types from '../ActionTypes';

function router(initialState, action) {
  const store = RouterStore.create({ contexts: initialState });

  const actionType = action.type;
  if (actionType) store[actionType](action);

  return getSnapshot(store).contexts;
}

describe('Router store', () => {
  it('should handle initial state', () => {
    expect(router(undefined, {})).toEqual([]);
  });

  it('should allow a stack of items as an item in a context list')
});
