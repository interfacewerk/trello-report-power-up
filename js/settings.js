/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var groupBySelector = document.getElementById('group_by');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'group_by')
  ])
  .spread(function(group_by){
    if(group_by && /[a-z]+/.test(group_by)){
      groupBySelector.value = group_by;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'shared', 'group_by', groupBySelector.value)
  .then(function(){
    t.closePopup();
  })
})
