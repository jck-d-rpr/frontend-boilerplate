/* @flow */
/* eslint-disable space-infix-ops */

import type { ActionType, ModelType } from './types';
import { TOGGLE_DRAWER, BASE_STATE } from './types';


/**
 * This is the reducer for the base Components
 * @param {object} state The portion of the store's state that this reducer will modify (Not exactly modify button
 * return a new one with the action applied to it)
 * @param {object} action The action that we want to perform on the state (should contain type of the action
 * as that is required in the switch case as to resolve what kind of an action it is)
 * @return {object} A new state with action applied to it
 */
const baseReducer = (state: ModelType = BASE_STATE, action: ActionType): ModelType => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return { openDrawer: !state.openDrawer };
    }
    default: {
      return state;
    }
  }
};

export default baseReducer;
