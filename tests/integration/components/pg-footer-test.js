import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pg-footer', 'Integration | Component | pg footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pg-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pg-footer}}
      template block text
    {{/pg-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
