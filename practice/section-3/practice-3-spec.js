/*global createUpdatedCollection*/
'use strict';

describe('practice-3-3', () => {

  const collectionA = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd', 'd', 'd', 'd', 'd'
  ];


  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('统计出A集合中相同的元素的个数，形成C集合，C集合中的元素要形如{key:"a", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {name: 'a', summary: 2},
      {name: 'e', summary: 5},
      {name: 'h', summary: 11},
      {name: 't', summary: 20},
      {name: 'f', summary: 6},
      {name: 'c', summary: 8},
      {name: 'g', summary: 7},
      {name: 'b', summary: 6},
      {name: 'd', summary: 4}
    ]);
  });
});
