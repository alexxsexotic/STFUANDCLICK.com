import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../reducers/redux';
import { createMemoryHistory, History } from 'history';

export const customRender = (
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: {
    route?: string;
    history?: History;
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store,
    history,
  };
};
