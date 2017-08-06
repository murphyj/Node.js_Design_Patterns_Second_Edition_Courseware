'use strict';

class ChapterOne {
    constructor() {

    }

    retrieveProfiles() {
        const profiles = new Map();
        profiles.set('twitter', '@adalovelace');
        profiles.set('facebook', 'adalovelace');
        profiles.set('googleplus', 'ada');

        profiles.size;
        profiles.has('twitter');
        profiles.get('twitter');
        profiles.has('youtube');
        profiles.delete('facebook');
        profiles.has('facebook');
        profiles.get('facebook');

        return profiles;
    }

    map() {
        const cards = new Set(['Jack', 'Queen', 'King']);
        cards.add('Ace');
        cards.size; // 4
        cards.delete('King');
        cards.has('Jack');

        for (const card of cards) {
            console.log(card);
        }
    }
}

let chapterOne = new ChapterOne();

//
// let profiles = chapterOne.retrieveProfiles();
// console.log(profiles.get('twitter'));

// map
chapterOne.map();
