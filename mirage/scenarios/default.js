export default function(server) {

  // This data will not be loaded in your tests.
  let entity = server.create('entity', { id: 2 });

  server.createList('user', 10, { entityId: entity.id });

  let saqA = server.create('saq', { entityId: entity.id, type: 'SAQ_A', version: '3.1', status: 'draft' });
  // let questions = server.createList('saq-question', 6, { saqId: saqs[0].id, section: 'Requirement 1:  Install and maintain a firewall configuration to protect data'});
  // let questions2 = server.createList('saq-question', 6, { saqId: saqs[0].id, section: 'Requirement 2: Do not use vendor-supplied defaults for system passwords and other security parameters'});
  // let questions3 = server.createList('saq-question', 6, { saqId: saqs[0].id, section: 'Requirement 3:  Protect stored cardholder data'});
  // questions.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );
  // questions2.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );
  // questions3.forEach(q => server.create('saq-answer', { saqId: saqs[0].id, questionId: q.id }) );
  let section9 = 'Requirement 9:  Restrict physical access to cardholder data';
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.5', text: "Are all media physically secured (including but not limited to computers, removable electronic media, paper receipts, paper reports, and faxes)? <br>For purposes of Requirement 9, <b>media</b> refers to all paper and electronic media containing cardholder data."});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.A', text: "Is strict control maintained over the internal or external distribution of any kind of media?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.1', text: "Is media classified so the sensitivity of the data can be determined?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.2', text: "Is media sent by secured courier or other delivery method that can be accurately tracked?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.3', text: "Is management approval obtained prior to moving the media (especially when media is distributed to individuals)?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.7', text: "Is strict control maintained over the storage and accessibility of media?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.8.A', text: "Is all media destroyed when it is no longer needed for business or legal reasons?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.8.1.A', text: "Are hardcopy materials cross-cut shredded, incinerated, or pulped so that cardholder data cannot be reconstructed?"});
  server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.8.1.B', text: "Are storage containers used for materials that contain information to be destroyed secured to prevent access to the contents?"});
  let section12 = 'Requirement 12:  Maintain a policy that addresses information security for all personnel';
  server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.1', text: "Is a list of service providers maintained?"});
  server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.2', text: "Is a written agreement maintained that includes an acknowledgement that the service providers are responsible for the security of cardholder data the service providers possess or otherwise store, process, or transmit on behalf of the customer, or to the extent that they could impact the security of the customer cardholder data environment?<br><br><i><b>Note</b></i>: The exact wording of an acknowledgement will depend on the agreement between the two parties, the details of the service being provided, and the responsibilities assigned to each party. The acknowledgement does not have to include the exact wording provided in this requirement."});
  server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.3', text: "Is there an established process for engaging service providers, including proper due diligence prior to engagement?"});
  server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.4', text: "Is a program maintained to monitor service providers PCI DSS compliance status at least annually?"});
  server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.5', text: "Is information maintained about which PCI DSS requirements are managed by each service provider, and which are managed by the entity?"});
}
