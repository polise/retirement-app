// @flow
import { REQUEST_CONFIG, RECEIVE_CONFIG, RECEIVE_CONFIG_FAILURE, SHOW_APP_INIT_ERROR_BANNER } from 'ActionsConst';

const initialState: {
  defaultCurrencyCode: string,
} = {
  defaultCurrencyCode: '',
};

export default function AppReducer(state: Object = initialState, action: Object) {
  switch (action.type) {
    case REQUEST_CONFIG:
      return state;
    default:
      return state;
  }
}
