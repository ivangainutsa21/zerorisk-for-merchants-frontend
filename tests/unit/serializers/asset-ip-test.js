import { moduleForModel, test } from 'ember-qunit';

moduleForModel('asset-ip', 'Unit | Serializer | asset ip', {
  // Specify the other units that are required for this test.
  needs: ['serializer:asset-ip']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
