export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
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

  this.get('/api/v2/shared/users/:id', function(db, request) {
    let userId = request.params.id;
    return {
      result: {
        users: db.users.find(2)
      }, success: true
    }
  })

  this.get('/api/v2/merchant/saqs/:id', function(db, request) {
    let saqId = request.params.id;
    return {
      result: {
        saqs: db.saqs.find(saqId)
      }, success: true
    }
  });

  this.get('/api/v2/merchant/saqQuestions/:id', function(db, request) {
    let saqQuestionId = request.params.id;
    return {
      result: {
        saqQuestions: db['saq-questions'].find(saqQuestionId)
      }, success: true
    }
  });

  this.get('/api/v2/merchant/saqAnswers/:id', function(db, request) {
    let saqAnswerId = request.params.id;
    return {
      result: {
        saqAnswers: db['saq-answers'].find(saqAnswerId)
      }, success: true
    }
  });

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
