import {ByteLength} from "./encode";

describe('encode', () => {
   test('return number of bytes', () => {
      expect(ByteLength('test')).toEqual(4);
   });
});
