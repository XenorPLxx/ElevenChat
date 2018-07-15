import Home from '../Home';
import { setupJestShallow } from '../../../../jest/testSetup';

describe('<Home />', () => {
  const props = {};

  describe('snapshots', () => {
    it('with default props', () => {
      const { wrapper } = setupJestShallow({
        props: { ...props },
        Component: Home,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
