// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
//account sid is: ACdb0326f0ea7d1adeeb7489e1ac09f816
//auth token:404dbd78f1ec45ed8a67bab9efb9afcc
//from number:'+1 443-648-9618 '
const accountSid = 'ACdb0326f0ea7d1adeeb7489e1ac09f816';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);


client.messages
      .create({
         body: `Let's grab lunch at Milliways tomorrow!`,
         from: '+14158141829', //this is my number
         mediaUrl: 'http://www.example.com/cheeseburger.png',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid))
      .done();
