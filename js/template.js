/* global TrelloPowerUp */

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var parkMap = {
  acad: 'Acadia National Park',
  arch: 'Arches National Park',
  badl: 'Badlands National Park',
  brca: 'Bryce Canyon National Park',
  crla: 'Crater Lake National Park',
  dena: 'Denali National Park',
  glac: 'Glacier National Park',
  grca: 'Grand Canyon National Park',
  grte: 'Grand Teton National Park',
  olym: 'Olympic National Park',
  yell: 'Yellowstone National Park',
  yose: 'Yosemite National Park',
  zion: 'Zion National Park'
};

var boardButtonCallback = function(t, board){
  console.log(board);
  return [
    {
      icon: './images/icon.svg',
      text: '',
      url: 'http://trello.karting.arcturus.uberspace.de'
    }
  ];
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
