import Ember from 'ember';
import DS from 'ember-data';
import injectService from 'ember-service/inject';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
	tagName: '',

	ajax: injectService(),

	currentFeed: 'advantio',
	feedSources: Ember.A([
		{ "id": 1, "name": "advantio", "title": "Advantio", "url": "https://blog.advantio.com/rss.xml", "bgClass": "bg-info"},
		{"id": 2, "name": "pci-dss", "title": "PCI", "url": "https://www.pcisecuritystandards.org/news_events/rss.php?type=media", "bgClass": "bg-info"},
		{"id": 3, "name": "visa-europe", "title": "Visa", "url": "https://www.visaeurope.com/newsroom/rss-feeds", "bgClass": "bg-success"},
		{"id": 4, "name": "mastercard-corporate", "title": "Mastercard", "url": "http://newsroom.mastercard.com/feed/?post_type=press-releases", "bgClass": "bg-complete"}		
	]),

	rotateFeedSource: task(function * () {
		while(true) {
			yield timeout(9000);
			let currentFeedId = this.get('feedSources').findBy('name', this.get('currentFeed')).id;
			let nextFeedSource = this.get('feedSources').findBy('id', currentFeedId+1);
			if(!nextFeedSource) {
				nextFeedSource = this.get('feedSources').findBy('id', 1);
			}

			this.set('currentFeed', nextFeedSource.name);
		}
	}).on('init').restartable(),

	showBackdrop: false,

	bgClass: Ember.computed('currentFeed', function() {
		return this.get('feedSources').findBy('name', this.get('currentFeed')).bgClass;
	}),	

	backgroundImg: Ember.computed('feed.entries', 'currentFeed', function() {
		let content = this.get('feed.entries.firstObject.content');
		
    // TODO: why is this here?
		Ember.run.scheduleOnce('afterRender', function() {
			Ember.$(".news-reader-panel-body").css('height', Ember.$(".news-reader-panel").height() - 37);
			Ember.$.Pages.initScrollBarPlugin();
			Ember.$(".news-reader-leading-entry").css('padding-top', Ember.$(".news-reader-panel").height() - Ember.$(".news-reader-leading-entry").height() - 68);
		});

		this.set('showBackdrop', false);

		if(content) {
			let tmp = document.createElement('div');
			tmp.innerHTML = content;		
			let img = tmp.querySelector('img');
      let src = null;
			if(img) {
				let src = img.getAttribute('src');
			}

			if(img && src) {
				Ember.run.later(this, function() {
					this.set('showBackdrop', true);
				}, 500);

				return src;		
			}
		}	
	}),

	feed: Ember.computed('currentFeed', function() {
		let temporaryHack = this.get('ajax.namespace');
		this.set('ajax.namespace', null);
		let currentFeedUrl = this.get('feedSources').findBy('name', this.get('currentFeed')).url;

		return DS.PromiseObject.create({
			promise: this.get('ajax').request(`/News/rss?feedUrl=${currentFeedUrl}`).then(payload => {
				this.set('ajax.namespace', temporaryHack);
				this.trigger('feedLoadComplete');
        		// TODO: cache feeds
				return payload;
			})
		}); 
	})
});
