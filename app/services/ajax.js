import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  // namespace: '/api/v1',
  isSuccess(status, headers, payload) {
    return payload.success;
  }
});
