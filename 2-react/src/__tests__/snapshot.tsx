import { render } from '@testing-library/react';

import Home from '@/pages/index';

describe('<HomePage/>', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    // eslint-disable-next-line @kilohealth/jest/no-snapshots
    expect(container).toMatchSnapshot();
  });
});
