import React from 'react';
import ReactDOM, { render } from 'react-dom';
import a11y from 'react-a11y';
import config from 'config';
import Client from './client';

// React Accessibility setup - dev env only
if (config.environment === 'dev') {
  a11y(React, { ReactDOM, includeSrcNode: true });
}

render(<Client />, document.getElementById('retirement-app'));
