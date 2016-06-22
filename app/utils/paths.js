const host = window.location.host;
const protocol = window.location.protocol;
const isIngenico = (host === "urltest.zerori.sk" || host === "ifsboarding.dev" || host === "ifsboarding.com"); 
 
export default function() {
	return {
		rootURL() {
			if(isIngenico) {
				return "/saq/";
			} else {
				return "/";
			}
		},
		namespace: 'api/v2',
		host() {
			if(isIngenico) {
				return `${protocol}//${host}/saq`;
			} else {
				return `${protocol}//${host}`; 
			}
		}
	};
}