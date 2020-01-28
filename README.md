# json-string-merge

Merge two JSON strings while keeping both properties. 
The value of the property with the same name will be overwritten.

# Usage

## Install

```
npm install json-string-merge
```

## Example

```js
const mergeJson = require('json-string-merge');

const jsonA = `{"foo":"myValue","bar":{"barKey1":"myValue1","barKey2":"myValue2"},
"myArray":[{"arrKey1":"arrValue1"},{"arrKey2":"arrValue2"}]}`;

const jsonB = `{"foo":"updatedMyValue","bar":{"barKey1":"updatedMyValue1","barKey2":"myValue2"},
"some":{"someKey":"someValue"},
"myArray":[{"arrKey3":"arrValue3"},{"arrKey4":"arrValue4"}]}`;

const jsonResult =mergeJson(jsonA,jsonB);

console.log('jsonResult=');
console.log(jsonResult);


```

When you run it you will get the following result.

```js
jsonResult=
{"foo":"updatedMyValue","bar":{"barKey1":"updatedMyValue1","barKey2":"myValue2"},"myArray":[{"arrKey1":"arrValue1"},{"arrKey2":"arrValue2"},{"arrKey3":"arrValue3"},{"arrKey4":"arrValue4"}],"some":{"someKey":"someValue"}}
```