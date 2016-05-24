import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('saq-editor/answer', 'Integration | Component | saq editor/answer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{saq-editor/answer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#saq-editor/answer}}
      template block text
    {{/saq-editor/answer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
