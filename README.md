## Timestamp Microservice API
By Brandon Roth

This is a microservice API project for Free Code Camp that will accept either a human readable date or a UNIX timestamp and return a JSON object with both formats. If the input does not conform to either format, it will return `null` values.

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
  "natural": "December 15, 2015"
}
```

### Running this project
Simply launch it with node using `npm run start` or `node index.js`