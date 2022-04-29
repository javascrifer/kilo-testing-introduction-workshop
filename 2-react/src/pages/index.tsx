import type { NextPage } from 'next';

import SubscriptionForm from '@/components/SubscriptionForm';

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Subscribe</h1>
      <SubscriptionForm onSubmit={() => Promise.resolve()} />
    </>
  );
};

export default HomePage;
