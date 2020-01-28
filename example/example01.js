const mergeJson = require('../src/index.js');

const jsonA = `{"foo":"myValue","bar":{"barKey1":"myValue1","barKey2":"myValue2"},
"myArray":[{"arrKey1":"arrValue1"},{"arrKey2":"arrValue2"}]}`;

const jsonB = `{"foo":"updatedMyValue","bar":{"barKey1":"updatedMyValue1","barKey2":"myValue2"},
"some":{"someKey":"someValue"},
"myArray":[{"arrKey3":"arrValue3"},{"arrKey4":"arrValue4"}]}`;

const jsonResult =mergeJson(jsonA,jsonB);

console.log('jsonResult=');
console.log(jsonResult);
