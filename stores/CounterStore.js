import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import assign from 'object-assign';

let counter = 0;
const CHANGE_EVENT = 'change';

const CounterStore = assign({}, EventEmitter.prototype, {
  getCounter() {
    return counter;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

});

AppDispatcher.register((action) => {
  const { count } = action;
  switch(action.type) {
    case INCREMENT_COUNTER:
      counter += count;
      CounterStore.emitChange();
      break;
    case DECREMENT_COUNTER:
      counter -= count;
      CounterStore.emitChange();
      break;
    default:
      // nop
  }
});

export default CounterStore;

