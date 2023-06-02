import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import Home from './index';

test("renders the user's journal entry ", () => {
  const { getByTestId, getByRole, getByLabelText } = render(<Home />);
  const submitBtn = getByRole('button');
  const text = getByTestId('entry');
  const textarea = getByLabelText(/Talk about how this month was for you?/i);
  const entry = 'today was a very annoying day, thank god the month is over!';

  expect(submitBtn).toBeDisabled();

  user.type(textarea, entry);
  expect(submitBtn).toBeEnabled();

  user.click(submitBtn);
  expect(text).toHaveTextContent(entry);
});

