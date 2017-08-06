'use strict';

describe('NodeJS: Chapter One', () => {

  let co;
  beforeEach(() => {
      co = require('./chapterone');
  });

  describe('Maps and Sets', () => {

    it('should retrieve the twitter handle for Ada Lovelace', () => {
        console.log(co);
      let entry = co.retrieveProfiles();
      expect(entry[0].twitter).toEqual('@adalovelace');
    });
  });
});
