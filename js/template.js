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

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: WHITE_ICON,
      text: 'Business Report',
      callback: boardButtonCallback
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
