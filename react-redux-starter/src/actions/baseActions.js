import { ACTIONS } from '../constants';

/**
 * Toggle the sidebar.
 * @return {object} the type and the payload of the action type
 */
export const toggleDrawer = () => ({ type: ACTIONS.TOGGLE_DRAWER });
