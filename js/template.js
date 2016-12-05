/* global TrelloPowerUp */

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var boardButtonCallback = function(t){
  return t.get('board', 'shared', 'group_by')
  .then(function(group_by) {
    group_by = group_by || 'list';
    window.open('https://trello.karting.arcturus.uberspace.de/board/' + t.args[0].context.board + '?group_by=' + group_by);
  });
};

var cardButtonCallback = function(t){
  var items = Object.keys(parkMap).map(function(parkCode){
    var urlForCode = 'http://www.nps.gov/' + parkCode + '/';
    return {
      text: parkMap[parkCode],
      url: urlForCode,
      callback: function(t){
        return t.attach({ url: urlForCode, name: parkMap[parkCode] })
        .then(function(){
          return t.closePopup();
        })
      }
    };
  });

  return t.popup({
    title: 'Popup Search Example',
    items: items,
    search: {
      count: 5,
      placeholder: 'Search National Parks',
      empty: 'No parks found'
    }
  });
};

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: WHITE_ICON,
      text: 'Template',
      callback: boardButtonCallback
    }];
  },
  'format-url': function(t, options) {
    var parkName = formatNPSUrl(t, options.url);
    if(parkName){
      return {
        icon: GRAY_ICON,
        text: parkName
      };
    } else {
      throw t.NotHandled();
    }
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
