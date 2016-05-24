export default function(server) {

  // This data will not be loaded in your tests.
  let entity = server.create('entity', { id: 2 });

  server.createList('user', 10, { entityId: entity.id });

  let saqs = server.createList('saq', 2, { entityId: entity.id });
  let questions = server.createList('saq-question', 6, { saqId: saqs[0].id, section: 'Requirement 1:  Install and maintain a firewall configuration to protect data'});
  let questions2 = server.createList('saq-question', 6, { saqId: saqs[0].id, section: 'Requirement 2: Do not use vendor-supplied defaults for system passwords and other security parameters'});
  let questions3 = server.createList('saq-question', 6, { saqId: saqs[0].id, section: 'Requirement 3:  Protect stored cardholder data'});
  questions.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );
  questions2.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );
  questions3.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );

}
