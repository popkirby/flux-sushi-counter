import React from 'react';
import CounterStore from '../stores/CounterStore';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

export default class SushiCounterApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: CounterStore.getCounter()
    };
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnMount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  render() {
    const { counter } = this.state;
    return (
      <Counter counter={counter}
        increment={::this.handleIncrement}
        decrement={::this.handleDecrement}/>
    );
  }

  onChange = () => {
    this.setState({
      counter: CounterStore.getCounter()
    });
  }

  handleIncrement(counter) {
    CounterActions.increment(counter);
  }

  handleDecrement(counter) {
    CounterActions.decrement(counter);
  }

}

