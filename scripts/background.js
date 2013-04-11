function getClickHandler(website) {
  return function(info) {
    var src = info.srcUrl, url = '';
    switch(website) {
      case 'google': url = 'http://images.google.com/searchbyimage?image_url=' + src; break;
      case 'tineye': alert('WIP'); return;
      case 'karmadecay': alert('WIP'); return;
    }
    chrome.tabs.create({url: url});
  };
};

chrome.contextMenus.create({
  'title' : 'Find similar image via Google Images',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('google')
});

chrome.contextMenus.create({
  'title' : 'Find similar image via Tineye',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('tineye')
});

chrome.contextMenus.create({
  'title' : 'Find similar image via Karmadecay',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('karmadecay')
});