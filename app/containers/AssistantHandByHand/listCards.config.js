const HEART = 13;
const SPADE = 14;
const CLUB = 15;
const DIAMOND = 16;

const AS = 0;
const TWO = 1;
const THREE = 2;
const FOUR = 3;
const FIVE = 4;
const SIX = 5;
const SEVEN = 6;
const EIGHT = 7;
const NINE = 8;
const TEN = 9;
const JACK = 10;
const QUEEN = 11;
const KING = 12;

const listCards = [
  {name: AS, id: 0, type: HEART, letterName: 'A', letterType: 'h', fullName: 'As de coeur'},
  {name: AS, id: 1, type: SPADE, letterName: 'A', letterType: 's', fullName: 'As de pique'},
  {name: AS, id: 2, type: CLUB, letterName: 'A', letterType: 'c', fullName: 'As de trèfle'},
  {name: AS, id: 3, type: DIAMOND, letterName: 'A', letterType: 'd', fullName: 'As de carreau'},
  {name: KING, id: 4, type: HEART, letterName: 'K', letterType: 'h', fullName: 'Roi de coeur'},
  {name: KING, id: 5, type: SPADE, letterName: 'K', letterType: 's', fullName: 'Roi de pique'},
  {name: KING, id: 6, type: CLUB, letterName: 'K', letterType: 'c', fullName: 'Roi de trèfle'},
  {name: KING, id: 7, type: DIAMOND, letterName: 'K', letterType: 'd', fullName: 'Roi de carreau'},
  {name: QUEEN, id: 8, type: HEART, letterName: 'Q', letterType: 'h', fullName: 'Dame de coeur'},
  {name: QUEEN, id: 9, type: SPADE, letterName: 'Q', letterType: 's', fullName: 'Dame de pique'},
  {name: QUEEN, id: 10, type: CLUB, letterName: 'Q', letterType: 'c', fullName: 'Dame de trèfle'},
  {name: QUEEN, id: 11, type: DIAMOND, letterName: 'Q', letterType: 'd', fullName: 'Dame de carreau'},
  {name: JACK, id: 12, type: HEART, letterName: 'J', letterType: 'h', fullName: 'Valet de coeur'},
  {name: JACK, id: 13, type: SPADE, letterName: 'J', letterType: 's', fullName: 'Valet de pique'},
  {name: JACK, id: 14, type: CLUB, letterName: 'J', letterType: 'c', fullName: 'Valet de trèfle'},
  {name: JACK, id: 15, type: DIAMOND, letterName: 'J', letterType: 'd', fullName: 'Valet de carreau'},
  {name: TEN, id: 16, type: HEART, letterName: 'T', letterType: 'h', fullName: '10 de coeur'},
  {name: TEN, id: 17, type: SPADE, letterName: 'T', letterType: 's', fullName: '10 de pique'},
  {name: TEN, id: 18, type: CLUB, letterName: 'T', letterType: 'c', fullName: '10 de trèfle'},
  {name: TEN, id: 19, type: DIAMOND, letterName: 'T', letterType: 'd', fullName: '10 de carreau'},
  {name: NINE, id: 20, type: HEART, letterName: '9', letterType: 'h', fullName: '9 de coeur'},
  {name: NINE, id: 21, type: SPADE, letterName: '9', letterType: 's', fullName: '9 de pique'},
  {name: NINE, id: 22, type: CLUB, letterName: '9', letterType: 'c', fullName: '9 de trèfle'},
  {name: NINE, id: 23, type: DIAMOND, letterName: '9', letterType: 'd', fullName: '9 de carreau'},
  {name: EIGHT, id: 24, type: HEART, letterName: '8', letterType: 'h', fullName: '8 de coeur'},
  {name: EIGHT, id: 25, type: SPADE, letterName: '8', letterType: 's', fullName: '8 de pique'},
  {name: EIGHT, id: 26, type: CLUB, letterName: '8', letterType: 'c', fullName: '8 de trèfle'},
  {name: EIGHT, id: 27, type: DIAMOND, letterName: '8', letterType: 'd', fullName: '8 de carreau'},
  {name: SEVEN, id: 28, type: HEART, letterName: '7', letterType: 'h', fullName: '7 de coeur'},
  {name: SEVEN, id: 29, type: SPADE, letterName: '7', letterType: 's', fullName: '7 de pique'},
  {name: SEVEN, id: 30, type: CLUB, letterName: '7', letterType: 'c', fullName: '7 de trèfle'},
  {name: SEVEN, id: 31, type: DIAMOND, letterName: '7', letterType: 'd', fullName: '7 de carreau'},
  {name: SIX, id: 32, type: HEART, letterName: '6', letterType: 'h', fullName: '6 de coeur'},
  {name: SIX, id: 33, type: SPADE, letterName: '6', letterType: 's', fullName: '6 de pique'},
  {name: SIX, id: 34, type: CLUB, letterName: '6', letterType: 'c', fullName: '6 de trèfle'},
  {name: SIX, id: 35, type: DIAMOND, letterName: '6', letterType: 'd', fullName: '6 de carreau'},
  {name: FIVE, id: 36, type: HEART, letterName: '5', letterType: 'h', fullName: '5 de coeur'},
  {name: FIVE, id: 37, type: SPADE, letterName: '5', letterType: 's', fullName: '5 de pique'},
  {name: FIVE, id: 38, type: CLUB, letterName: '5', letterType: 'c', fullName: '5 de trèfle'},
  {name: FIVE, id: 39, type: DIAMOND, letterName: '5', letterType: 'd', fullName: '5 de carreau'},
  {name: FOUR, id: 40, type: HEART, letterName: '4', letterType: 'h', fullName: '4 de coeur'},
  {name: FOUR, id: 41, type: SPADE, letterName: '4', letterType: 's', fullName: '4 de pique'},
  {name: FOUR, id: 42, type: CLUB, letterName: '4', letterType: 'c', fullName: '4 de trèfle'},
  {name: FOUR, id: 43, type: DIAMOND, letterName: '4', letterType: 'd', fullName: '4 de carreau'},
  {name: THREE, id: 44, type: HEART, letterName: '3', letterType: 'h', fullName: '3 de coeur'},
  {name: THREE, id: 45, type: SPADE, letterName: '3', letterType: 's', fullName: '3 de pique'},
  {name: THREE, id: 46, type: CLUB, letterName: '3', letterType: 'c', fullName: '3 de trèfle'},
  {name: THREE, id: 47, type: DIAMOND, letterName: '3', letterType: 'd', fullName: '3 de carreau'},
  {name: TWO, id: 48, type: HEART, letterName: '2', letterType: 'h', fullName: '2 de coeur'},
  {name: TWO, id: 49, type: SPADE, letterName: '2', letterType: 's', fullName: '2 de pique'},
  {name: TWO, id: 50, type: CLUB, letterName: '2', letterType: 'c', fullName: '2 de trèfle'},
  {name: TWO, id: 51, type: DIAMOND, letterName: '2', letterType: 'd', fullName: '2 de carreau'},
];

export {listCards};
