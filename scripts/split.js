// Instantiate the SDK. CDN will expose splitio globally
let myKey = Math.random().toString(36).substring(2);
// console.log(myKey);

let factory = splitio({
  core: {
    authorizationKey: 'vrjk97huv9pf95if78uo9178buskbfnbi23t',
    // your internal user id, or the account id that
    // the user belongs to.
    // This coudld also be a cookie you generate
    // for anonymous users
    // random generation from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript but with a different length
    key: myKey,
  },
});
// And get the client instance you'll use
let client = factory.client();

// console.log(factory.client());

client.on(client.Event.SDK_READY, function () {
  let treatment = client.getTreatment('double_column');
  //   console.log(treatment);
  if (treatment == 'on') {
    document.querySelectorAll('main')[0].className = 'double-column';
    // console.log('double on');
  } else if (treatment == 'off') {
    document.querySelectorAll('main')[0].className = '';
    // console.log('double off');
  } else {
    // insert code for control treatment
  }
});
