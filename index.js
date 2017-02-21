const express = require('express');
const moment = require('moment');
const sender = require('./sender');
const path = require('path');
const app = express();

//Use port 1337 by default
app.set('port', (process.env.PORT || 1337));

//html file located in 'client' directory
app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/:date', function(req, res) {
  var date = req.params.date;
  
  //Check if date is human readable or UNIX timestamp
  if (/\D/.test(req.params.date)) {
    //Check if human readable date is valid
    if (!moment(date).isValid()) {
      sender.invalidSend(res);
    } else {
      sender.validSend(res, (moment(date).unix()), date)
    }
  } else {
    //Check if UNIX timestamp is valid
    if (!(moment(Number(date)).isValid())) {
      sender.invalidSend(res);
    } else {
      sender.validSend(res, date, (moment.unix(date).utc().format('MMMM DD, YYYY')));
    }
  }
});

app.listen(app.get('port'));
console.log(`Server listening on port ${app.get('port')}`);
