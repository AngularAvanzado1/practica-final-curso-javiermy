import { visitHome, getA, getH1, getP } from '../support/app.po';

describe('GIVEN: the worldb web app', () => {
  beforeEach(() => visitHome());

  context('WHEN: user visits / page', () => {
    it('THEN: should display Regions link', () => {
      getA().contains('Regions');

      it('THEN: should display H1 message', () => {
        getH1();
      });

      it('THEN: should display introdaction message', () => {
        getP().contains('Advanced ANGULAR course');
      });

    });

  });
});
