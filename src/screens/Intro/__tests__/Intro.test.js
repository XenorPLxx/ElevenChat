import Intro from '../Intro';
import { setupJestShallow } from '../../../../jest/testSetup';

describe('<Intro />', () => {
  const props = {};

  describe('snapshots', () => {
    it('with default props', () => {
      const { wrapper } = setupJestShallow({
        props: { ...props },
        Component: Intro,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
