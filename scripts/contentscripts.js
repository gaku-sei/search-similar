var fillAndSubmit = function(formSelector, inputSelector) {
  var $form = $(formSelector);
  $form.find(inputSelector).val(location.hash.slice(1));
  $form.submit();
};

switch(location.host) {
  case 'karmadecay.com':
    if(location.hash !== '')
      fillAndSubmit('.form:first form', 'input[name="url"]');
    break;
  case 'www.tineye.com':
    if(location.hash !== '')
      fillAndSubmit('#url_form', '#url_box');
    break;
}
