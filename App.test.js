import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

import {parseResponse} from './src/functions';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('parses response', () => {
    const response = require('./tests/response.json');
    expect(parseResponse(response).slice(0, 3)).toEqual([
        {
            name: 'Warwick Avenue Station, Maida Vale',
            distance: 1.11,
            installed: true,
            locked: false,
            bikes: 18,
            spaces: 1,
            lat: 51.523344,
            lon: -0.183846,
        },
        {
            name: 'Bevington Road West, North Kensington',
            distance: 1.2,
            installed: true,
            locked: false,
            bikes: 14,
            spaces: 9,
            lat: 51.5212,
            lon: -0.208888,
        },
        {
            name: "All Saints' Road, Portobello",
            distance: 1.23,
            installed: true,
            locked: false,
            bikes: 21,
            spaces: 1,
            lat: 51.519042,
            lon: -0.204764,
        }
    ]);
});
