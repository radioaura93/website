import React, { Component } from 'react';
import { injectGlobal } from 'emotion';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './HomePage';

// GLOBAL theme

injectGlobal`

/* Ostrich Sans */

@font-face {
	font-family: 'Ostrich Sans';
	src: url('fonts/ostrich-sans-black.eot');
	src: local('☺'), url('fonts/ostrich-sans-black.woff') format('woff'), url('fonts/ostrich-sans-black.ttf') format('truetype'), url('fonts/ostrich-sans-black.svg') format('svg');
	font-weight: 900;
	font-style: normal;
}
@font-face {
	font-family: 'Ostrich Sans';
	src: url('fonts/ostrich-sans-bold.eot');
	src: local('☺'), url('fonts/ostrich-sans-bold.woff') format('woff'), url('fonts/ostrich-sans-bold.ttf') format('truetype'), url('fonts/ostrich-sans-bold.svg') format('svg');
	font-weight: 700;
	font-style: normal;
}
@font-face {
	font-family: 'Ostrich Sans';
	src: url('fonts/ostrich-sans-regular.eot');
	src: local('☺'), url('fonts/ostrich-sans-regular.woff') format('woff'), url('fonts/ostrich-sans-regular.ttf') format('truetype'), url('fonts/ostrich-sans-regular.svg') format('svg');
	font-weight: 400;
	font-style: normal;
}
@font-face {
	font-family: 'Ostrich Sans';
	src: url('fonts/ostrich-sans-light.eot');
	src: local('☺'), url('fonts/ostrich-sans-light.woff') format('woff'), url('fonts/ostrich-sans-light.ttf') format('truetype'), url('fonts/ostrich-sans-light.svg') format('svg');
	font-weight: 300;
	font-style: normal;
}

/* Ostrich Sans Dashed */

@font-face {
	font-family: 'Ostrich Sans Dashed';
	src: url('fonts/ostrich-sans-dashed.eot');
	src: local('☺'), url('fonts/ostrich-sans-dashed.woff') format('woff'), url('fonts/ostrich-sans-dashed.ttf') format('truetype'), url('fonts/ostrich-sans-dashed.svg') format('svg');
	font-weight: 500;
	font-style: normal;
}

/* Ostrich Sans Rounded */

@font-face {
	font-family: 'Ostrich Sans Rounded';
	src: url('fonts/ostrich-sans-rounded.eot');
	src: local('☺'), url('fonts/ostrich-sans-rounded.woff') format('woff'), url('fonts/ostrich-sans-rounded.ttf') format('truetype'), url('fonts/ostrich-sans-rounded.svg') format('svg');
	font-weight: 500;
	font-style: normal;
}

/* Ostrich Sans Inline */

@font-face {
	font-family: 'Ostrich Sans Inline';
	src: url('fonts/ostrich-sans-inline-regular.eot');
	src: local('☺'), url('fonts/ostrich-sans-inline-regular.woff') format('woff'), url('fonts/ostrich-sans-inline-regular.ttf') format('truetype'), url('fonts/ostrich-sans-inline-regular.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Ostrich Sans Inline';
	src: url('fonts/ostrich-sans-inline-italic.eot');
	src: local('☺'), url('fonts/ostrich-sans-inline-italic.woff') format('woff'), url('fonts/ostrich-sans-inline-italic.ttf') format('truetype'), url('fonts/ostrich-sans-inline-italic.svg') format('svg');
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: 'Futura Md BT Medium';
	font-style: normal;
	font-weight: normal;
	src: local('Futura Md BT Medium'), url('fonts/futuram.woff') format('woff');
	}

  body {
    background-color : #3C1041 !important;
		font-family: 'Ostrich Sans' !important;
		overflow-x: hidden;
  }

  h1 {
    backround: yellow !important;
    padding: 40px;
  }

  * {
    box-sizing: border-box;
  }

`;

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
