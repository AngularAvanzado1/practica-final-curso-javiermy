import { getA } from '../support/app.po';
import { visitRegions, getSection, getH2, getMain } from '../support/regions.po';

describe('GIVEN: the worldb web app', () => {
  beforeEach(() => visitRegions());

  context('WHEN: user visits Regions page', () => {
    it('THEN: should display Regions link', () => {
      getA().contains('Regions');
    });

    it('THEN: should display Regions link', () => {
      getSection();
    });

    it('THEN: should display H2 message', () => {
      getH2();
    });

    it('THEN: should contains a main per region', () => {
      getMain();
    });

  });
});
