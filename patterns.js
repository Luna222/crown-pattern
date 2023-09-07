'use strict';

/* 👀 Observe that:

i = 1 *
i = 2 **
i = 3 ***
i = 4 ****
i = 5 *****

===> the number of the iteration ~ the number of the stars in each row
*/

///////////////////////////////////////
// 👑 In this mini project, I'll print out the desired pattern looking like this:
//

/*

 ✭         ✭         ✭         ✭
 ✭✭       ✭✭✭       ✭ ✭       ✭✭
 ✭ ✭     ✭✭✭✭✭     ✭   ✭     ✭✭✭
 ✭  ✭   ✭✭✭✭✭✭✭   ✭     ✭   ✭✭✭✭
 ✭✭✭✭✭ ✭✭✭✭✭✭✭✭✭ ✭✭✭✭✭✭✭✭✭ ✭✭✭✭✭
  ✭✭✭✭  ✭     ✭   ✭✭✭✭✭✭✭  ✭  ✭
   ✭✭✭   ✭   ✭     ✭✭✭✭✭   ✭ ✭
    ✭✭----✭ ✭-------✭✭✭----✭✭
     ✭-----✭---------✭-----✭

*/

const n = 5;
let shape1 = '';
let shape2 = '';

//___⭐️ the first half___

for (let i = 1; i < n; i++) {
  shape1 += ' ';
  //draw triangle
  for (let j = 1; j <= i; j++) {
    j === 1 || j === i ? (shape1 += '✭') : (shape1 += ' ');
  }

  //draw reverse hill pattern of spaces
  for (let j = i; j <= n; j++) {
    shape1 += ' ';
  }
  for (let j = i; j < n; j++) {
    shape1 += ' ';
  }

  //draw hill pattern
  for (let j = 1; j <= i; j++) {
    shape1 += '✭';
  }
  for (let j = 1; j < i; j++) {
    shape1 += '✭';
  }

  //draw reverse hill pattern of spaces
  for (let j = i; j <= n; j++) {
    shape1 += ' ';
  }
  for (let j = i; j < n; j++) {
    shape1 += ' ';
  }

  //draw hill pattern
  if (i > 1) {
    for (let j = 1; j <= i; j++) {
      j === 1 ? (shape1 += '✭') : (shape1 += ' ');
    }
    for (let j = 1; j < i; j++) {
      j === i - 1 ? (shape1 += '✭') : (shape1 += ' ');
    }
  } else {
    for (let j = 1; j <= i; j++) {
      shape1 += '✭';
    }
    for (let j = 1; j < i; j++) {
      shape1 += '✭';
    }
  }

  //draw reverse hill pattern of spaces
  for (let j = i; j <= n; j++) {
    shape1 += ' ';
  }
  for (let j = i; j < n; j++) {
    shape1 += ' ';
  }

  //draw triangle
  for (let j = 1; j <= i; j++) {
    shape1 += '✭';
  }

  //newline after each row
  shape1 += '\n';
}

//___⭐️ the second half___

for (let i = 1; i <= n; i++) {
  //draw triangle
  for (let j = 1; j <= i; j++) {
    shape2 += ' ';
  }
  for (let j = i; j <= n; j++) {
    shape2 += '✭';
  }

  //draw triangle of spaces
  if (i === n || i === n - 1) {
    for (let j = 1; j <= i; j++) {
      shape2 += '-';
    }
  } else {
    for (let j = 1; j <= i; j++) {
      shape2 += ' ';
    }
  }

  //draw reverse hill pattern
  if (i > 1) {
    for (let j = i; j < n; j++) {
      j === i ? (shape2 += '✭') : (shape2 += ' ');
    }
    for (let j = i; j <= n; j++) {
      j === n ? (shape2 += '✭') : (shape2 += ' ');
    }
  } else {
    for (let j = i; j < n; j++) {
      shape2 += '✭';
    }
    for (let j = i; j <= n; j++) {
      shape2 += '✭';
    }
  }

  //draw hill pattern of spaces
  if (i === n || i === n - 1) {
    for (let j = 1; j < i; j++) {
      shape2 += '-';
    }
    for (let j = 1; j <= i; j++) {
      shape2 += '-';
    }
  } else {
    for (let j = 1; j < i; j++) {
      shape2 += ' ';
    }
    for (let j = 1; j <= i; j++) {
      shape2 += ' ';
    }
  }

  //draw reverse hill pattern
  for (let j = i; j < n; j++) {
    shape2 += '✭';
  }
  for (let j = i; j <= n; j++) {
    shape2 += '✭';
  }

  //draw triangle of spaces
  if (i === n || i === n - 1) {
    for (let j = 1; j <= i; j++) {
      shape2 += '-';
    }
  } else {
    for (let j = 1; j <= i; j++) {
      shape2 += ' ';
    }
  }

  //draw reverse triangle
  if (i > 1) {
    for (let j = i; j <= n; j++) {
      j === i || j === n ? (shape2 += '✭') : (shape2 += ' ');
    }
  } else {
    for (let j = i; j <= n; j++) {
      shape2 += '✭';
    }
  }

  //newline after each row
  shape2 += '\n';
}

console.log(shape1 + shape2);
