import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.lorem.sentence();
  },
  type() { 
    return faker.list.random(['YES_NO', 'NONE'])(); 
  },
  section: 'Requirement 1:  Install and maintain a firewall configuration to protect data',
  milestone: 'Build and Maintain a Secure Network',
  code(i) {
    return `1.${i}`;
  }
});
