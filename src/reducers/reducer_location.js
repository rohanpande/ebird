import { OBSERVATIONS } from '../actions/index';

export default function (state=[], action) {

  switch (action.type) {
    case OBSERVATIONS :
      // return state.concat([action.payload.data]);
      return [action.payload.data];
  }
  return state;
}
