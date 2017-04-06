import CookieStore from 'ember-simple-auth/session-stores/cookie';
import paths from '../utils/paths';

export default CookieStore.extend({
	cookieName: 'zr:session',
	cookieDomain: paths().cookieDomain()
});
