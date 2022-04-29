import { FC, FormEventHandler, ChangeEventHandler, useState } from 'react';

interface SubscriptionFormProps {
  onSubmit: (email: string) => Promise<void>;
}

export const SubscriptionForm: FC<SubscriptionFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setEmail(target.value);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await onSubmit(email);
    setIsSubmitting(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" disabled={isSubmitting || !email.length}>
          Subscribe
        </button>
      </form>
    </>
  );
};
