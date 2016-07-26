import Ember from 'ember';
import DS from 'ember-data';
import injectService from 'ember-service/inject';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
	tagName: '',

	ajax: injectService(),

	currentFeed: 'ntt-security',
	feedSources: Ember.A([
		{"id": 1, "name": "ntt-security", "title": "NTT Sec", "url": "http://blog.ntt-security.com/rss.xml", "bgClass": "bg-info"},
		{"id": 2, "name": "pci-dss", "title": "PCI", "url": "https://www.pcisecuritystandards.org/news_events/rss.php?type=media", "bgClass": "bg-info"},
		{"id": 3, "name": "visa-europe", "title": "Visa", "url": "http://www.visaeurope.com/en/newsroom/rss_feeds/visa_europe_rss_feed.aspx", "bgClass": "bg-success"},
		{"id": 4, "name": "mastercard-corporate", "title": "Mastercard", "url": "http://investor.mastercard.com/rss/PressRelease.aspx", "bgClass": "bg-complete"}		
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
		
		Ember.run.scheduleOnce('afterRender', function() {
			$(".news-reader-panel-body").css('height', $(".news-reader-panel").height() - 37);
			Ember.$.Pages.initScrollBarPlugin();
			$(".news-reader-leading-entry").css('padding-top', $(".news-reader-panel").height() - $(".news-reader-leading-entry").height() - 68);
		});

		this.set('showBackdrop', false);

		if(content) {
			var tmp = document.createElement('div');
			tmp.innerHTML = content;		
			var img = tmp.querySelector('img');
			if(img) {
				var src = img.getAttribute('src');
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
				return payload.responseData.feed;
			})
		}); 
	})
});
