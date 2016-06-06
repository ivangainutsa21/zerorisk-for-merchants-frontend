export default function(server) {

  // This data will not be loaded in your tests.
  // Entity tree: 
  /*
      2
      |- 3 
         |- 5
         |- 6
         |- 7
            | - 8
            | - 9
      | - 4
          | - 10
  */
  let entity2 = server.create('entity', { id: 2, childrenId: [ 3, 4 ] });
    let entity3 = server.create('entity', { id: 3, parentId: entity2.id, childrenId: [ 5, 6, 7 ] });
      let entity5 = server.create('entity', { id: 5, parentId: entity3.id });
      let entity6 = server.create('entity', { id: 6, parentId: entity3.id });
      let entity7 = server.create('entity', { id: 7, parentId: entity3.id, childrenId: [ 8, 9 ] });
        let entity8 = server.create('entity', { id: 8, parentId: entity7.id });
        let entity9 = server.create('entity', { id: 9, parentId: entity7.id });
    let entity4 = server.create('entity', { id: 4, parentId: entity2.id, childrenId: [ 10 ] });
      let entity10 = server.create('entity', { id: 10, parentId: entity4.id });

  let user1 = server.create('user', { entityId: entity7.id });
  let user2 = server.create('user', { entityId: entity2.id });

  let saqA = server.create('saq', { entityId: entity2.id, type: 'SAQ_A', version: '3.1', status: 'draft' });

  let section9 = 'Requirement 9:  Restrict physical access to cardholder data';
  let q95 = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.5', text: "Are all media physically secured (including but not limited to computers, removable electronic media, paper receipts, paper reports, and faxes)? <br>For purposes of Requirement 9, <b>media</b> refers to all paper and electronic media containing cardholder data."});
  server.create('saq-answer', { saqId: saqA.id, questionId: q95.id, type: 'NOT_APPLICABLE' });
  let q9sa = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.A', text: "Is strict control maintained over the internal or external distribution of any kind of media?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q9sa.id, type: 'NOT_APPLICABLE' });
  let q961 = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.1', text: "Is media classified so the sensitivity of the data can be determined?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q961.id, type: 'NOT_APPLICABLE' });
  let q962 = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.2', text: "Is media sent by secured courier or other delivery method that can be accurately tracked?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q962.id, type: 'NOT_APPLICABLE' });
  let q963 = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.6.3', text: "Is management approval obtained prior to moving the media (especially when media is distributed to individuals)?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q963.id, type: 'NOT_APPLICABLE' });
  let q97 = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.7', text: "Is strict control maintained over the storage and accessibility of media?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q97.id, type: 'NOT_APPLICABLE' });
  let q98a = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.8.A', text: "Is all media destroyed when it is no longer needed for business or legal reasons?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q98a.id, type: 'NOT_APPLICABLE' });
  let q981a = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.8.1.A', text: "Are hardcopy materials cross-cut shredded, incinerated, or pulped so that cardholder data cannot be reconstructed?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q981a.id, type: 'NOT_APPLICABLE' });
  let q981b = server.create('saq-question', { saqId: saqA.id, section: section9, code: '9.8.1.B', text: "Are storage containers used for materials that contain information to be destroyed secured to prevent access to the contents?"});
  server.create('saq-answer', { saqId: saqA.id, questionId: q981b.id, type: 'NOT_APPLICABLE' });
  let section12 = 'Requirement 12:  Maintain a policy that addresses information security for all personnel';
  let q1281 = server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.1', text: "Is a list of service providers maintained?"});
  let q1282 = server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.2', text: "Is a written agreement maintained that includes an acknowledgement that the service providers are responsible for the security of cardholder data the service providers possess or otherwise store, process, or transmit on behalf of the customer, or to the extent that they could impact the security of the customer cardholder data environment?<br><br><i><b>Note</b></i>: The exact wording of an acknowledgement will depend on the agreement between the two parties, the details of the service being provided, and the responsibilities assigned to each party. The acknowledgement does not have to include the exact wording provided in this requirement."});
  server.create('saq-answer', { saqId: saqA.id, questionId: q1282.id, type: 'NOT_APPLICABLE' });
  let q1283 = server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.3', text: "Is there an established process for engaging service providers, including proper due diligence prior to engagement?"});
  let q1284 = server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.4', text: "Is a program maintained to monitor service providers PCI DSS compliance status at least annually?"});
  let q1285 = server.create('saq-question', { saqId: saqA.id, section: section12, code: '12.8.5', text: "Is information maintained about which PCI DSS requirements are managed by each service provider, and which are managed by the entity?"});
}
