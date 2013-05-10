var getClickHandler = function(website) {
  return function(info) {
    chrome.tabs.create({url: website.replace('%s', info.srcUrl)});
  };
};

var engines = {
  'Google Images': 'http://images.google.com/searchbyimage?image_url=%s',
  'Tineye': 'http://www.tineye.com/search?url=%s',
  'KarmaDecay': 'http://karmadecay.com/search?q=%s',
  'Open With ImgOps': 'http://imgops.com/%s',
  'Open With GifExplode': 'http://gif-explode.com/?explode=%s'
};

for(title in engines)
  chrome.contextMenus.create({
    'title': title,
    'type': 'normal',
    'contexts': ['image'],
    'onclick': getClickHandler(engines[title])
  });
