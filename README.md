##Timestamp Microservice API Project
By Brandon Roth

For [freeCodeCamp Back End Development Certification](http://freecodecamp.com) - [API Project - Timestamp Microservice](https://www.freecodecamp.com/challenges/timestamp-microservice)

It will accept either a human readable date or a UNIX timestamp and return a JSON object with both formats. If the input does not conform to either format, it will return `null` for both values.

You can test it at blank.

### Usage:

```
/test
```
```
/test
```

### Sample Output:

```javascript
{
  "unix": 1450137600,
  "natural: "December 15, 2015"
}

{
  "unix": null,
  "natural": null
}
```

### Running this project
Simply launch it with node using `npm run start` or `node index.js`