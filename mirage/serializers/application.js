import RestSerializer from 'ember-cli-mirage/serializers/rest-serializer';
import { camelize } from 'ember-cli-mirage/utils/inflector';

export default RestSerializer.extend({
  keyForAttribute(attr) {
    let _attr = RestSerializer.prototype.keyForAttribute.apply(this, arguments);
    return _attr.replace('Id', '');
  },

  serialize(object, request) {
    // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
    let json = RestSerializer.prototype.serialize.apply(this, arguments);

    let result = { result: json, success: true };

    return result;
  }
});
