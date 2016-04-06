import Ember from 'ember';

export default Ember.Controller.extend({
	// filteredModel: Ember.computed('model.[]', 'searchQuery', function() {
	// 	let searchQuery	= this.get('searchQuery');
		
	// 	if(searchQuery) {
	// 		var rolesPromise = this.get('model').get('assetIps');

	// 		var filteredRolesPromise = rolesPromise.then(function (roles) {
	// 		    return roles.filterBy('ipNumber', "79.62.194.89");
	// 		});

	// 		filteredRolesPromise.then(function(filteredRoles){
	// 		    // available here
	// 		    console.log(filteredRoles.get('length'));
	// 		});

	// 		return DS.PromiseArray.create({
	// 		    promise: Ember.RSVP.filter(this.get('model').toArray(), entity => {
	// 		      return entity.get('assetIps').then( assetIps => {
	// 		      	return assetIps.filterBy('ipNumber', "79.62.194.89");
	// 		      	// return assetIps.filter( (assetIp) => {			      		
	// 		      	// 	return assetIp.get('ipNumber').toLowerCase().indexOf( searchQuery.toLowerCase() ) !== -1;
	// 		      	// });			      	
	// 		      });
	// 		    })
	// 		  });
	// 	} else {
	// 		return this.get('model');
	// 	}
	// })
});
