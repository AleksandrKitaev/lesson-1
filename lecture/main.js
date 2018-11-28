

/*console.log('Простые числа от 0 до 100:')

for (i = 2; i <= 100; i++) {
    for (let j = 1; j < i; j++ ) {
        if ( i % j == 0 ) 
        console.log('j');
    };
    console.log(i + '<br>');
};



for (let i = 2; i <= 100; i++ ) {
  a = true;
  q = Math.sqrt(i);
  for (let j = 2; j <= q; j++ ) {
    if ( i % j == 0 ) {
      a = false;
      break;
    }
  }
  if ( a ) console.log('<li>'+ i +'</li>')
}*/


console.log('Простые числа от 0 до 100:')

for (let i = 2; i <= 100; i++ ) {
    let a = true;
    let q = Math.sqrt(i);
    for (let j = 2; j <= q; j++ ) {
      if ( i % j == 0 ) {
        a = false;
        break;
      }
    }
    if ( a ) console.log(' ' + i + ' ' + 'делители этого числа:' + ' 1 и ' + i + '')
}