import Ember from 'ember';

export default Ember.Component.extend({
  filteredAssetIps: Ember.computed('assetIps.[]', 'searchQuery', function() {
    if (this.get('searchQuery')) {
      return this.get('assetIps').filter((assetIp) => {
        return assetIp.get('ipNumber').toLowerCase().indexOf(this.get('searchQuery').toLowerCase()) !== -1 ||
          assetIp.get('hostName').toLowerCase().indexOf(this.get('searchQuery').toLowerCase()) !== -1 ||
          assetIp.get('tag').toLowerCase().indexOf(this.get('searchQuery').toLowerCase()) !== -1 ||
          assetIp.get('description').toLowerCase().indexOf(this.get('searchQuery').toLowerCase()) !== -1;
      });
    } else {
      return this.get('assetIps');
    }
  })
});