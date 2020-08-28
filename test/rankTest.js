const rankTest = require('ava');
const { voyageRisk, captainHistoryRisk, voyageProfitFactor, rating} = require('../src/rank')
rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result, 1)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result, 3)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result, 4)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result, 5)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result, 7)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result, 8)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'east-indies',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result, 5)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'east-indies',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result, 7)
});

rankTest('voyage',t=>{
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result, 8)
});

rankTest('captain History Risk',t=>{
   const history = [
     {
       zone: 'east-indies',
       profit: 5,
     },{
       zone: 'west-indies',
       profit: 15,
     },{
       zone: 'china',
       profit: -2,
     },
     {
       zone: 'west-africa',
       profit: 7,
     },
   ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 6)
});

rankTest('captain History Risk',t=>{
   const history = [
     {
       zone: 'east-indies',
       profit: 5,
     },{
       zone: 'west-indies',
       profit: 15,
     },{
       zone: 'china',
       profit: -2,
     },
     {
       zone: 'west-africa',
       profit: 7,
     },
     {
        zone: 'east-africa',
        profit: 7,
     },
   ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 2)
});

rankTest('captain History Risk',t=>{
   const history = [
     {
       zone: 'east-indies',
       profit: 5,
     },{
       zone: 'west-indies',
       profit: 15,
     },{
       zone: 'china',
       profit: -2,
     },
     {
       zone: 'west-africa',
       profit: 7,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 4)
});

rankTest('captain History Risk',t=>{
   const history = [
     {
       zone: 'east-indies',
       profit: 5,
     },
     {
       zone: 'west-indies',
       profit: 15,
     },
     {
       zone: 'china',
       profit: -2,
     },
     {
       zone: 'west-africa',
       profit: 7,
     },
     {
        zone: 'east-africa',
        profit: 7,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 0)
});

rankTest('captain History Risk',t=>{
   const history = [
     {
       zone: 'east-indies',
       profit: 5,
     },{
       zone: 'west-indies',
       profit: 15,
     },{
       zone: 'china',
       profit: 2,
     },
     {
       zone: 'west-africa',
       profit: 7,
     },
     {
        zone: 'east-africa',
        profit: 7,
     },
   ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 1)
});

rankTest('captain History Risk',t=>{
   const history = [
     {
       zone: 'east-indies',
       profit: 5,
     },
     {
       zone: 'west-indies',
       profit: 15,
     },
     {
       zone: 'china',
       profit: 2,
     },
     {
       zone: 'west-africa',
       profit: 7,
     },
     {
        zone: 'east-africa',
        profit: 7,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 0)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
     {
       zone: 'china',
       profit: 2,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 6)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
          zone: 'east-africa',
          profit: 7,
          },
      ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 7)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 8)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 7)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-africa',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'east-africa',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 4)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
     {
       zone: 'china',
       profit: 2,
     },
   ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 3)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
          zone: 'east-africa',
          profit: 7,
          },
      ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 4)
});

rankTest('voyage Profit Factor',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-africa',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'east-africa',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const result = voyageProfitFactor(voyage, history);
  t.is(result, 3)
});

rankTest('rating',t=>{
   const history = [
     {
       zone: 'china',
       profit: 2,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 3,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
     {
       zone: 'china',
       profit: 2,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
     {
       zone: 'china',
       profit: 2,
     },
   ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
          zone: 'east-africa',
          profit: 7,
          },
      ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-africa',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'east-africa',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
     {
       zone: 'china',
       profit: 2,
     },
   ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = rating(voyage, history);
  t.is(result, 'B')
});

rankTest('rating',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'china',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'china',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
         {
          zone: 'east-africa',
          profit: 7,
          },
      ];
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = rating(voyage, history);
  t.is(result, 'A')
});

rankTest('rating',t=>{
   const history = [
        {
          zone: 'east-indies',
          profit: 5,
        },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-indies',
          profit: 5,
          },
        {
          zone: 'west-indies',
          profit: 15,
        },
        {
          zone: 'east-africa',
          profit: 2,
        },
        {
          zone: 'west-africa',
          profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
           zone: 'east-africa',
           profit: 7,
        },
        {
         zone: 'east-africa',
         profit: 2,
         },
         {
         zone: 'west-africa',
         profit: 7,
         },
         {
         zone: 'east-africa',
         profit: 7,
         },
      ];
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const result = rating(voyage, history);
  t.is(result, 'B')
});





