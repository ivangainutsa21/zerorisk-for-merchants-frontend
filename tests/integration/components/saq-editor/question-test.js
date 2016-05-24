import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('saq-editor/question', 'Integration | Component | saq editor/question', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{saq-editor/question}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#saq-editor/question}}
      template block text
    {{/saq-editor/question}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
