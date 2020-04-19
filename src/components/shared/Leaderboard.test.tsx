import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Leaderboard } from './Leaderboard';
import Team from '../../models/Team';

afterEach(cleanup);

let mockupData: Team[] = [];

for (let index = 0; index < 50; index++) {
  mockupData[index] = {
    order: index,
    team: `team-${index}`,
    clicks: 20,
  };
}

test('renders without crashing', () => {
  // arrange
  const { getByText } = render(<Leaderboard data={mockupData} />);
});

test('no "Load more" button if theres less items then the limit', () => {
  // arrange
  const smallSet = mockupData.slice(0, 10);
  const { queryByText } = render(<Leaderboard data={smallSet} />);
  const button = queryByText('Load more') as HTMLButtonElement;

  // assert
  expect(button).toBeNull();
});

test('show "Load more" button if theres items then the limit', () => {
  // arrange
  const { queryByText } = render(<Leaderboard data={mockupData} />);
  const button = queryByText('Load more') as HTMLButtonElement;

  // assert
  expect(button).toBeTruthy();
});

test('load mote items if the current limit is less then the max size of data', () => {
  // arrange
  const { queryByText, container } = render(<Leaderboard data={mockupData} />);
  const button = queryByText('Load more') as HTMLButtonElement;

  // act
  fireEvent.click(button);

  // assert
  const rowCount = container.getElementsByTagName('table')[0].rows.length - 1;
  expect(rowCount).toBe(40);
});
