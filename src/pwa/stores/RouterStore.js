import { CHANGE_ROUTE } from './ActionTypes';

import { types } from 'mobx-state-tree';

const Item = types.model({
  type: types.string,
  id: types.number,
  page: types.optional(types.union(types.number, types.undefined), undefined),
  extract: types.optional(types.boolean, false),
});

const Context = types.model({
  options: types.frozen,
  items: types.array(types.union(Item, types.array(Item))),
  infinite: true,
  // overwrite: false, --> this property might be used only when calling an action...
});

const RouterStore = types
  .model({
    contexts: types.optional(types.array(Context), []),
  })
  .views(self => ({
    // utilities
    currentContext: id => {
      return self.contexts[0];
    },
  }))
  .actions(self => ({
    // actions
    [CHANGE_ROUTE]({ selection: { type, id, page }, method }) {
      // TODO - implement logic.
    },
  }));

export default RouterStore;
