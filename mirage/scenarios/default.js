export default function(server) {

  // This data will not be loaded in your tests.

  server.createList('user', 10);

  let entity = server.create('entity');

  let saqs = server.createList('saq', 2, { entityId: entity.id });
  let questions = server.createList('saq-question', 12, { saqId: saqs[0].id });
  questions.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );

}
