export default function() {

  //this.urlPrefix = 'http://localhost:8080';    // make this `http://localhost:8080`, for example, if your API is on a different server
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

  // this.passthrough('/api/v1/users/sign_in');

  // this.passthrough('/Wizard/**');
  // this.passthrough('/api/v2/Wizard/**');

  // this.passthrough('/logout');

  this.get('/api/v2/shared/entities');

  this.get('/api/v2/shared/users/:id');
  // this.get('/api/v2/shared/users', 'users', { coalesce: true });
  // this.passthrough('/api/v2/shared/users/**');


  this.get('/api/v2/merchant/saqs/:id');
  this.put('/api/v2/merchant/saqs/:id');

  // this.passthrough('/api/v2/merchant/saqs/**');
  // this.passthrough('/api/v2/merchant/saqQuestions/**');
  // this.passthrough('/api/v2/merchant/saqAnswers/**');


  // this.get('/api/v2/merchant/saqQuestions', 'saqQuestions', { coalesce: true });

  // this.get('/api/v2/merchant/saqAnswers', 'saqAnswers', { coalesce: true });
  // this.get('/api/v2/merchant/saqAnswers/:id', 'saqAnswer');

  // this.put('/api/v2/merchant/saqAnswers/:id', (schema, request) => {
  //   let payload = JSON.parse(request.requestBody);
  //   payload.saqAnswer.questionId = payload.saqAnswer.question;
  //   payload.saqAnswer.saqId = payload.saqAnswer.saq;    
  //   delete payload.saqAnswer.question;
  //   delete payload.saqAnswer.saq;
  //   payload = payload.saqAnswer;
  //   schema.db.saqAnswers.update(request.params.id, payload);
  //   return schema.saqAnswers.find(request.params.id); 
  // });

  // this.post('/api/v2/merchant/saqAnswers', (schema, request) => {
  //   let payload = JSON.parse(request.requestBody);
  //   payload.saqAnswer.questionId = payload.saqAnswer.question;
  //   payload.saqAnswer.saqId = payload.saqAnswer.saq;    
  //   delete payload.saqAnswer.question;
  //   delete payload.saqAnswer.saq;
  //   payload = payload.saqAnswer;    
  //   return schema.saqAnswers.create(payload);
  //   // return schema.saqAnswers.find(request.params.id); 
  // });

}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
