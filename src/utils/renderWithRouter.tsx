import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory, History } from 'history';

export default function renderWithRouter(
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: {
    route?: string;
    history?: History;
  }
) {
  const Wrapper: React.FC = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
}
