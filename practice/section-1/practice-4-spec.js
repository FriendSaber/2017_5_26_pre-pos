/*global collectSameElements*/
'use strict';

describe('practice-1-4', () => {

  const collectionA = [
    {name: 'a'}, {name: 'e'}, {name: 'h'}, {name: 't'}, {name: 'f'}, {name: 'c'}, {name: 'g'}, {name: 'b'}, {name: 'd'}
  ];
  const collectionB = {value: ['a', 'd', 'e', 'f']};

  it('选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
