import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

export function increment(count) {
  AppDispatcher.dispatch({
    type: INCREMENT_COUNTER,
    count
  });
}

export function decrement(count) {
  AppDispatcher.dispatch({
    type: DECREMENT_COUNTER,
    count
  });
}

