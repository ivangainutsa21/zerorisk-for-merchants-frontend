import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.lorem.sentence();
  },
  type(i) { 
    return faker.list.random('YES_NO', 'NONE')(i); 
  },
  //section: 'Requirement 1:  Install and maintain a firewall configuration to protect data',
  milestone: 'Build and Maintain a Secure Network',
  code(i) {
    if(this.section === 'Requirement 1:  Install and maintain a firewall configuration to protect data')
      return `1.${i}`; 
    if(this.section === 'Requirement 2: Do not use vendor-supplied defaults for system passwords and other security parameters')
      return `2.${i}`; 
    if(this.section === 'Requirement 3:  Protect stored cardholder data')
      return `2.${i}`; 
  }
});
