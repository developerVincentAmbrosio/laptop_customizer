//SMOKE TEST

// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import CustomizeYourLaptop from './CustomizeYourLaptop';

// make the App component available
import App from './CustomizeYourLaptop';

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
    ReactDOM.render(<CustomizeYourLaptop />, div);
    ReactDOM.unmountComponentAtNode(div);
  });