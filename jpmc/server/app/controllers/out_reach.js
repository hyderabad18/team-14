var twilio=require('twilio');
const accountSid = 'ACdb0326f0ea7d1adeeb7489e1ac09f816';
const authToken = '404dbd78f1ec45ed8a67bab9efb9afcc';
var client = new twilio(accountSid, authToken);
client.messages
  .create({
     body: 'Want to experience a new unique platform to connect companies and sutuednts with disabilities? Visit www.gwfej.com today!',
    // numbers from reactjs
     from: '+14436489618',
     to: '+91 9618813316'
   })
  .then(message => console.log(message.sid))
  .done();
