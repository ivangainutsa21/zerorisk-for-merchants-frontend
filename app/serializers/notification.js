import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    action: {  serialize: false },
    body: {  serialize: false },
    code: {  serialize: false },
    created: {  serialize: false },
    subject: {  serialize: false },
    type: { serialize: false }
  }
});
