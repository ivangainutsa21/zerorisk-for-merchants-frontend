import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('saq-editor/sidebar', 'Integration | Component | saq editor/sidebar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{saq-editor/sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#saq-editor/sidebar}}
      template block text
    {{/saq-editor/sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
