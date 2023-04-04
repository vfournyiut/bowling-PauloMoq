import { Game, Frame } from './bowling';

describe('Frame', () => {
  describe('a strike',()=>{
    test('with no following rolls', () => {
      const frame = new Frame(10);
      expect(frame.score()).toBe(10);
      expect(frame.isComplete()).toBeTruthy(); // égalité stricte, on est sûr d'avoir un bool
      expect(frame.isScoreComplete()).toBeFalsy();
    })
  
    test('with 1 following roll', () => {
      const frame = new Frame(10, 6);
      expect(frame.score()).toBe(16);
      expect(frame.isComplete()).toBeTruthy();
      expect(frame.isScoreComplete()).toBeFalsy();
    })
  
    test('with 2 following rolls', () => {
      const frame = new Frame(10, 6, 3);
      expect(frame.score()).toBe(19);
      expect(frame.isComplete()).toBeTruthy();
      expect(frame.isScoreComplete()).toBeTruthy();
    })
  })

  describe('a spare',()=>{
    test('with no following rolls', () => {
      const frame = new Frame(6, 4);
      expect(frame.score()).toBe(10);
      expect(frame.isComplete()).toBeTruthy();
      expect(frame.isScoreComplete()).toBeFalsy();
    })
  
    test('with 1 following roll', () => {
      const frame = new Frame(6, 4, 9);
      expect(frame.score()).toBe(19);
      expect(frame.isComplete()).toBeTruthy();
      expect(frame.isScoreComplete()).toBeTruthy();
    })
  
    test('with 2 following rolls', () => {
      const frame = new Frame(6, 4, 9, 5);
      expect(frame.score()).toBe(19);
      expect(frame.isComplete()).toBeTruthy();
      expect(frame.isScoreComplete()).toBeTruthy();
    })
  })

  describe('an open frame',()=>{
    test('with two rolls', () => {
      const frame = new Frame(1, 4);
      expect(frame.score()).toBe(5);
      expect(frame.isComplete()).toBeTruthy();
      expect(frame.isScoreComplete()).toBeTruthy();
    })
  
    test('with only 1 roll', () => {
      const frame = new Frame(1);
      expect(frame.score()).toBe(1);
      expect(frame.isComplete()).toBeFalsy();
      expect(frame.isScoreComplete()).toBeFalsy();
    })
  })
})

describe('Game', () => {
  test('a game with no pins knocked down', () => {
    
  })

  test('a game starting with 3 strikes', () => {
  
  })

  test('a game with a mix of strikes, spares, and open frames', () => {
  
  })

  test('a game with a strike on all frames', () => {

  })
})
