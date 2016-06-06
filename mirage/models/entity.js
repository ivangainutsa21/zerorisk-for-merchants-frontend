import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  users: hasMany(),

 	// TEST
  children: hasMany('entity', { inverse: 'parent', async: true }),
  parent: belongsTo('entity', { inverse: 'children', async: true })
});
