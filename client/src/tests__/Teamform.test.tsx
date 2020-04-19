import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { Teamform } from '../components/home/Teamform';
import { customRender } from './helpers/customRender';

afterEach(cleanup);

test('renders without crashing', () => {
  // arrange
  const { getByPlaceholderText } = customRender(<Teamform />, {
    route: '/',
  });
});

test('not allowing to play if input is empty', () => {
  // arrange
  const { getByPlaceholderText, getByText } = customRender(<Teamform />, {
    route: '/',
  });
  const input = getByPlaceholderText('Your team name') as HTMLInputElement;
  const button = getByText('PLAY');

  // act
  fireEvent.click(button);

  // assert
  expect(input.value).toBe('');
  expect(button).toBeDisabled();
});

test('redirect on button click with input filled', () => {
  // arrange
  const { getByPlaceholderText, getByText, history } = customRender(
    <Teamform />,
    {
      route: '/',
    }
  );
  const input = getByPlaceholderText('Your team name') as HTMLInputElement;
  const button = getByText('PLAY');

  // act
  fireEvent.change(input, { target: { value: 'test-team' } });
  fireEvent.click(button);

  // assert
  expect(history.location.pathname).toBe('/test-team');
});
