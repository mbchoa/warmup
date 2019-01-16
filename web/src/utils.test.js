import { getPlates } from './utils'

describe('utils Test Suite', () => {
  describe('#getPlates', () => {
    it('should return empty array if targetWeight === 0', () => {
      expect(getPlates([], 0)).toEqual([]);
    });

    it('should return empty array if targetWeight <= 0', () => {
      expect(getPlates([], 35)).toEqual([]);
    });

    it('should return non-empty array if targetWeight can be exactly matched', () => {
      expect(getPlates([45, 25, 10], 205)).toEqual([[10, 1], [25, 1], [45, 1]]);
    });

    it('should return empty array if targetWeight can not be exactly matched', () => {
      expect(getPlates([45], 100)).toEqual([]);
    });
  });
});