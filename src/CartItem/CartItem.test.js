//SMOKE TEST

// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

// make the App component available
import App from './CartItem';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

//SNAPSHOT TEST

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CartItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });