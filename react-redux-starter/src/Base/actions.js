/* @flow */

import type { ActionType } from './types';
import { TOGGLE_DRAWER } from './types';

/**
 * Toggle the sidebar.
 * @return {object} the type and the payload of the action type
 */
export const toggleDrawer = (): ActionType => ({
  type: TOGGLE_DRAWER
});
