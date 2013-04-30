var getClickHandler = function(website) {
  return function(info) {
    var src = info.srcUrl, url = '';
    switch(website) {
      case 'google': url = 'http://images.google.com/searchbyimage?image_url=' + src; break;
      case 'tineye': url = 'http://www.tineye.com/search?url=' + src; break;
      case 'karmadecay': url = 'http://karmadecay.com/search?q=' + src; break;
      case 'imgops': url = 'http://imgops.com/' + src; break;
    }
    chrome.tabs.create({url: url});
  };
};

chrome.contextMenus.create({
  'title' : 'Google Images',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('google')
});

chrome.contextMenus.create({
  'title' : 'Tineye',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('tineye')
});

chrome.contextMenus.create({
  'title' : 'KarmaDecay',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('karmadecay')
});

chrome.contextMenus.create({
  'title' : 'Open With ImgOps',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : getClickHandler('imgops')
});
