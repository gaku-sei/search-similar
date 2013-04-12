var fillAndSubmit = function(formSelector, inputSelector) {
  var $form = $(formSelector), url = location.hash.slice(1);
  $form.find(inputSelector).val(url);
  $form.submit();
  $('body').html('<div style="width:500px;margin:200px auto;">Searching "' + url + '"...</div>');
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
