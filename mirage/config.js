export default function() {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = 'api/v2';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.post('/api/v1/users/sign_in', function() {
    return {
      result: {
        "token": 'DF3ED2FD7496A15FF0FACF1F70D61FF4',
        "role": 'ROLE_MERCHANT_ENTITY_ADMIN',
        "firstName": 'Luca',
        "lastName": "D'Alessandro",
        "userId": 2
      }, success: true
    };
  });

  this.get('/api/v2/shared/users/:id');

  this.get('/api/v2/merchant/saqs/:id');

  this.get('/api/v2/merchant/saqQuestions', 'saqQuestions', { coalesce: true });

  this.get('/api/v2/merchant/saqAnswers', 'saqAnswers', { coalesce: true });

}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
