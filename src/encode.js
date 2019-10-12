import {TextEncoder} from 'fastestsmallesttextencoderdecoder';

export const ByteLength = (text) => {
  return new TextEncoder('utf-8').encode(text).length;
};
