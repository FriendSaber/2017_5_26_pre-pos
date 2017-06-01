/*global createUpdatedCollection*/
'use strict';

describe('practice-3-2', () => {

  const collectionA = [
    {name: 'a', summary: 3},
    {name: 'e', summary: 7},
    {name: 'h', summary: 11},
    {name: 't', summary: 20},
    {name: 'f', summary: 9},
    {name: 'c', summary: 8},
    {name: 'g', summary: 7},
    {name: 'b', summary: 6},
    {name: 'd', summary: 5}
  ];

  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新A集', () => {

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
