
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/438430806',function(sound){
  $('#start1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop1').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
 // laali laali


  SC.stream('/tracks/400360410',function(sound){
  $('#start2').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop2').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
 // yaayum

  SC.stream('/tracks/345946410',function(sound){
  $('#start3').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop3').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
 // munbe vaa


  SC.stream('/tracks/456435057',function(sound){
  $('#start4').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop4').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
 // yei penne en nenjil


  SC.stream('/tracks/394655895',function(sound){
  $('#start5').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop5').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
 // seramal ponaal


  SC.stream('/tracks/242542934',function(sound){
  $('#start6').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop6').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
}); // thalli pogathe
});
