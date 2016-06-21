import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modals/terms-and-conditions', 'Integration | Component | modals/terms and conditions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modals/terms-and-conditions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modals/terms-and-conditions}}
      template block text
    {{/modals/terms-and-conditions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
