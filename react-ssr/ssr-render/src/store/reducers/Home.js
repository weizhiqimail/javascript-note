import * as Types from '../action-types';

const initState = {
  list: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case Types.GET_HOME_LIST:
      return {...state, list: action.payload};
    default:
      return {...state};
  }
}