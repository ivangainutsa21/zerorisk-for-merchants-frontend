import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-wizard/yes-now-answer', 'Integration | Component | text wizard/yes now answer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{text-wizard/yes-now-answer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#text-wizard/yes-now-answer}}
      template block text
    {{/text-wizard/yes-now-answer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
