
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/314889863',function(sound){
        $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop1').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

///tracks/456435057
    SC.stream('/tracks/314889863',function(sound){
        $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop2').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/301809954',function(sound){
        $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop3').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/172125512',function(sound){
        $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop4').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/333329462',function(sound){
        $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop5').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/291358852',function(sound){
        $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop6').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/283748366',function(sound){
        $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop7').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/347843083',function(sound){
        $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop8').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/285444469',function(sound){
        $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop9').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/112521788',function(sound){
        $('#start10').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop10').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/314710336',function(sound){
        $('#start11').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop11').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });

    SC.stream('/tracks/35009278',function(sound){
        $('#start12').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop12').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
    });
});
