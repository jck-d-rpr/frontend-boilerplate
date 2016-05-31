import { ACTIONS } from '../constants';


/**
 * This is the reducer for the base Components
 * @param {object} state The portion of the store's state that this reducer will modify (Not exactly modify button
 * return a new one with the action applied to it)
 * @param {object} action The action that we want to perform on the state (should contain type of the action
 * as that is required in the switch case as to resolve what kind of an action it is)
 * @return {object} A new state with action applied to it
 */
const baseReducer = (state = { openDrawer: false }, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_DRAWER: {
      return { openDrawer: !state.openDrawer };
    }
    default: {
      return state;
    }
  }
};

export default baseReducer;
