import React from 'react';

export default class Counter extends React.Component {
  render() {
    const { increment, decrement, counter } = this.props;
    let sushiStyle = {
      minHeight: '1.5em'
    };

    if (counter < 0) {
      sushiStyle.transform = 'rotateX(180deg)';
    }

    return (
      <div>
        <p style={sushiStyle}>
          { counter === 0 ? '' : '\uD83C\uDF63'.repeat(Math.abs(counter))}
        </p>
        {' '}
        <button onClick={() => increment(1)}>+</button>
        {' '}
        <button onClick={() => decrement(1)}>-</button>
      </div>
    );
  }
}

