export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  server.createList('user', 10);
  server.createList('saq', 1);
  server.createList('saq-question', 12);
  server.createList('saq-answer', 12);
}
