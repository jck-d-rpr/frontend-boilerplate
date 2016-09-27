/* @flow */

type ToggleDrawerType = 'TOGGLE_DRAWER';

export type ActionType = {
  type: ToggleDrawerType
};

export type ModelType = {
  openDrawer: boolean
};

/**
 * All the actions that the application can genrate/create
 * @type {ToggleDrawerType}
 */
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

/**
 * The base state of the application's base part.
 * @type {ModelType}
 */
export const BASE_STATE = { openDrawer: false };
