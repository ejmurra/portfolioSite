$(document).ready(function(){
  var toHide = $('[id=info]');
  toHide.hide();
  $('[id=itemMaster]').click(function(){
    $('#info',this).toggle('fast');
  });
});
