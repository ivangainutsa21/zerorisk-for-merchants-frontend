import Serializer from './application';

export default Serializer.extend({

  serialize(saq, request) {
    let json = Serializer.prototype.serialize.apply(this, arguments);

    if (saq.questions) {
      json.result.saq.questions = saq.questions.models.map(sq => sq.id);
    }

    if (saq.answers) {
      json.result.saq.answers = saq.answers.models.map(sa => sa.id);
    }

    return json;
  }

});
