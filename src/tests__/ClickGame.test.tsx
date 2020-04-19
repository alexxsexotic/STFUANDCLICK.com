import React from 'react';
import { cleanup } from '@testing-library/react';
import { ClickGame } from '../pages/ClickGame';
import { customRender } from './helpers/customRender';
import { Route } from 'react-router';
import store from '../reducers/redux';

afterEach(cleanup);

test('renders without crashing', () => {
  // arrange
  const { getByText } = customRender(
    <Route exact path="/:team" component={ClickGame} />,
    { route: '/test-team' }
  );
});

test('check team name is same as in url', () => {
  // arrange
  const { queryByText } = customRender(
    <Route exact path="/:team" component={ClickGame} />,
    { route: '/test-team' }
  );
  const name = queryByText('Team test-team') as HTMLElement;

  // assert
  expect(name).toBeTruthy();
});

test('check if session was created on page entering', () => {
  // arrange
  const { queryByText } = customRender(
    <Route exact path="/:team" component={ClickGame} />,
    { route: '/test-team' }
  );
  const session = store.getState().user.session;

  expect(session).toBeTruthy();
});
