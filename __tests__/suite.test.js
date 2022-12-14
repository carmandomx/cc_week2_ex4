const { bubbleSort } = require('../exercise');

test('Testing the bubbleSort exercise', () => { 
    expect(bubbleSort([
        1,
        4,
        2,
        8,
        345,
        123,
        43,
        32,
        5643,
        63,
        123,
        43,
        2,
        55,
        1,
        234,
        92
      ])).toEqual([
        1,    1,   2,   2,   4,
        8,   32,  43,  43,  55,
       63,   92, 123, 123, 234,
      345, 5643
    ]);

    expect(bubbleSort([504,38,1,3,5,6,7,9,23,45,123,533,43,90,75,36,65,6,7,1999])).toEqual([
        1,    3,  5,  6,   6,   7,
        7,    9, 23, 36,  38,  43,
       45,   65, 75, 90, 123, 504,
      533, 1999
    ])
    
 })