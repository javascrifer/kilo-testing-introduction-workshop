import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SubscriptionForm } from './SubscriptionForm';

const getEmailInput = () => {
  return screen.getByPlaceholderText(/email/i) as HTMLInputElement;
};

const getSubmitButton = () => {
  return screen.getByRole('button', { name: /subscribe/i });
};

describe('<SubscriptionForm />', () => {
  it('enables auto complete for email input', () => {
    render(<SubscriptionForm onSubmit={jest.fn()} />);
    expect(getEmailInput()).toHaveProperty('autocomplete', 'email');
  });

  it('initially renders submit button disabled', () => {
    render(<SubscriptionForm onSubmit={jest.fn()} />);
    expect(getSubmitButton()).toBeDisabled();
  });

  it('enables submit button when user has typed his/her email', () => {
    render(<SubscriptionForm onSubmit={jest.fn()} />);
    userEvent.type(getEmailInput(), 'test@test.com');
    expect(getSubmitButton()).toBeEnabled();
  });

  it('executes onSubmit callback when form is submitted', async () => {
    const onSubmit = jest.fn();
    render(<SubscriptionForm onSubmit={onSubmit} />);

    userEvent.type(getEmailInput(), 'test@test.com');
    await act(async () => userEvent.click(getSubmitButton()));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith('test@test.com');
  });
});
