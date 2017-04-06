import config from '../config/environment';

const host = window.location.host;
const protocol = window.location.protocol;
const isIngenico = (host === "urltest.zerori.sk" || host === "ifsboarding.dev" || host === "ifsboarding.com"); 
const isDevelopment = config.environment === "development"; //(host.indexOf("local") !== -1 || host.indexOf("127.0.0.1") !== -1) 

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
		},
		cookieDomain() {
			if(isIngenico || isDevelopment) {
				return ".zerorisk.local";
			} else {
				return ".zerorisk.io";
			}
		},
		appLinks() {
			let hostWithoutPorts = host.replace(/:4100|:4200|:4300|:4400/gi, '');

			let urls = {
				zerorisk: { base: hostWithoutPorts.replace(/mpa|merchant|pinpoint/gi, ""), port: (isDevelopment ? ':4100' : '') },
				mpa: { base: hostWithoutPorts.replace(/mpa|merchant|pinpoint/gi, "mpa"), port: (isDevelopment ? ':4200' : '') },
				merchant: { base: hostWithoutPorts.replace(/mpa|merchant|pinpoint/gi, "merchant"), port: (isDevelopment ? ':4300' : '') },
				pinpoint: { base: hostWithoutPorts.replace(/mpa|merchant|pinpoint/gi, "pinpoint"), port: (isDevelopment ? ':4400' : '') },
			}

			urls.zerorisk.base = urls.zerorisk.base[0] === "." ? urls.zerorisk.base.substring(1) : urls.zerorisk.base; 

			return {
				zerorisk: `${protocol}//${urls.zerorisk.base}${urls.zerorisk.port}`,
				mpa: `${protocol}//${urls.mpa.base}${urls.mpa.port}`,
				merchant: `${protocol}//${urls.merchant.base}${urls.merchant.port}`,
				pinpoint: `${protocol}//${urls.pinpoint.base}${urls.pinpoint.port}`
			}
		}
	};
}