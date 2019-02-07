jQuery(document).ready(function(){
  console.log('impact report animations loaded');

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  /* Paralax banner */

  var parallaxTl = new TimelineMax();
  parallaxTl
    .from('.bcg', 2, {y: '-35%', ease:Power0.easeNone}, 0) // moving from -30% to 0. This is using Green Sock. This is another tween. The ,0 is where the second Tween will start, it is an absolute position. The first number is the timing.
    ;

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(parallaxTl) // During 100% of the scroll (because duration 100%) the parallaxTl Tween will be playing
  .addTo(controller);

  /* Counting up */

  var countUp = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-block',
    reverse: false
  })

  .on('start', function () {

    function numberWithCommas(n) {
      var parts=n.toString().split(".");
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var counter = { var: 0 };
    var tal = document.getElementById("count-1");
    TweenMax.to(counter, 2, {
      var: 17500000,
      onUpdate: function () {
        var nwc = numberWithCommas(counter.var);
        tal.innerHTML = nwc;
      },
      ease:Circ.easeOut
    });

    function numberWithCommas2(n) {
      var parts2=n.toString().split(".");
      return parts2[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var counter2 = { var: 0 };
    var tal2 = document.getElementById("count-2");
    TweenMax.to(counter2, 2, {
      var: 2900000,
      onUpdate: function () {
        var nwc = numberWithCommas2(counter2.var);
        tal2.innerHTML = nwc;
      },
      ease:Circ.easeOut
    });
  })
  .addTo(controller);


  /* Interaction Block 2 */

  // pin interaction block 2
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-2',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('.impact-report-interaction-2', {pushFollowers: false})

  .addTo(controller);


  /* Fly in from left and right */

  // move in from left edge and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-2',
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-2 .div-left', 'flown-from-left') // add class to interaction-2

  
  .addTo(controller);

  // build scene
    var scene = new ScrollMagic.Scene({
              triggerElement: "impact-report-interaction-2"
            })
            .setTween(".impact-report-icon", 0.5, {scale: 2}) // trigger a TweenMax.to tween
            
            .addTo(controller);

  // move in from right edge andfade in
  var moveFromRight = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-2',
    offset: 100,
    reverse: true // doesn't replay when scrolling back up and down
  })
  .setClassToggle('.impact-report-interaction-2 .div-right', 'flown-from-right') // add class to interaction-2
  
  .addTo(controller);

// move in from top and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-2',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-2 .div-middle', 'flown-from-top') // add class to interaction-4

  
  .addTo(controller);


  /* Interaction Block 3 */

  // pin interaction block 3
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-3',
    triggerHook: 0,
    duration: '300%'
  })
  .setPin('.impact-report-interaction-3', {pushFollowers: false})
  
  .addTo(controller);

  // interaction block 3 image fade in
  var moveFromRight = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-3',
    offset: 100,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-3 img.interaction-3-fade-in', 'interaction-3-faded-in') // add class to interaction-2
  
  .addTo(controller);

  // interaction block 3 1st line fade in
  var moveFromRight = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-3',
    offset: 400,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-3 .fade-in-1', 'faded-in-1') // add class to interaction-2
  
  .addTo(controller);

  // interaction block 3 2nd line fade in
  var moveFromRight = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-3',
    offset: 700,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-3 .fade-in-2', 'faded-in-2') // add class to interaction-2
  
  .addTo(controller);

  // interaction block 3 3rd line fade in
  var moveFromRight = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-3',
    offset: 1000,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-3 .fade-in-3', 'faded-in-3') // add class to interaction-2
  
  .addTo(controller);

  // interaction block fade out
  var moveFromRight = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-gradient',
    offset: 1300,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-3', 'fade-out') // add class to interaction-2
  
  .addTo(controller);


  /* Interaction Block 4 */

  // pin interaction block 4 gradient
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-3',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('.impact-report-interaction-4-gradient', {pushFollowers: true})
  
  .addTo(controller);


  // pin interaction block 4 solid
  var pinGradientScene = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    triggerHook: 0,
    duration: '80%'
  })
  .setPin('.impact-report-interaction-4-solid', {pushFollowers: false})
  .addTo(controller);

  // move in from top and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-4-2 .div-left.fly-from-top', 'flown-from-top') // add class to interaction-4
  .addTo(controller);

  // move in from bottom and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-4-2 .div-left.fly-from-bottom', 'flown-from-bottom') // add class to interaction-4
  .addTo(controller);


  // move in from top and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-4-2 .div-right.fly-from-top', 'flown-from-top') // add class to interaction-4
  .addTo(controller);

  // move in from bottom and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-4-2 .div-right.fly-from-bottom', 'flown-from-bottom') // add class to interaction-4
  .addTo(controller);

  // move in from top and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-4-2 .div-middle.fly-from-top', 'flown-from-top') // add class to interaction-4
  .addTo(controller);

  // move in from bottom and fade in
  var moveFromLeft = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-4-solid',
    offset: 200,
    reverse: true
  })
  .setClassToggle('.impact-report-interaction-4-2 .div-middle.fly-from-bottom', 'flown-from-bottom') // add class to interaction-4
  .addTo(controller);

  /* Interaction Block 5 */

 // parallax scene

  var parallaxTl2 = new TimelineMax();
  parallaxTl2
    .from('.impact-report-interaction-5 .content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.75)
    .from('.bcg-interaction-5', 2, {y: '-100%', ease:Power0.easeNone}, 0)
    ;

  var slideParallaxScene2 = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-5',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(parallaxTl2)
  .addTo(controller);

  /* Interaction Block 6 */


  // pin interaction block 6
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    triggerHook: 0,
    duration: '1000'
  })
  .setPin('.impact-report-interaction-6', {pushFollowers: true})
  .addTo(controller);


  /* Graph on small screens */

   // succession of images
  var images = [
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph0.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph1.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph2.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph3.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph4.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph5.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph6.svg",
    "/sites/oneyoungworld.com/themes/contrib/bootstrap_subtheme/images/impact-graph7.svg"
  ];

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  var obj = {curImg: 0};

  // create tween
  var tween = TweenMax.to(obj, 0.5,
    {
      curImg: images.length - 1,  // animate propery curImg to number of images
      roundProps: "curImg",       // only integers so it can be used as an array index
      repeat: 0,                  // repeat 3 times
      immediateRender: true,      // load first image automatically
      ease: Linear.easeNone,      // show every image the same ammount of time
      onUpdate: function () {
        jQuery("#myimg").attr("src", images[obj.curImg]); // set the image source
      }
    }
  );

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: ".impact-report-graph-title", duration: 100, delay: 0.5, reverse: true})
          .setTween(tween)
          
          .addTo(controller);

/* Graph on larger screens */

  // growing graph 2011
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 500,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2011', 'graph-built') // add class to impact-report-graph-2011
  .addTo(controller);

// growing graph 2012
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 600,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2012', 'graph-built') // add class to impact-report-graph-2012
  .addTo(controller);

  // growing graph 2013
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 700,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2013', 'graph-built') // add class to impact-report-graph-2013
  .addTo(controller);

  // growing graph 2014
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 800,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2014', 'graph-built') // add class to impact-report-graph-2014
  .addTo(controller);

// growing graph 2015
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 900,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2015', 'graph-built') // add class to impact-report-graph-2015
  .addTo(controller);

// growing graph 2016
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 1000,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2016', 'graph-built') // add class to impact-report-graph-2016
  .addTo(controller);

  // growing graph 2017
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 1100,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-2017', 'graph-built') // add class to impact-report-graph-2017
  .addTo(controller);

  //

  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 600,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2011', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);

  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 700,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2012', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);

  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 800,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2013', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);
  
  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 900,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2014', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);

  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 1000,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2015', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);

  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 1100,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2016', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);

  var graphBuild = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 1200,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-year-2017', 'year-built') // add class to impact-report-graph-2011
  .addTo(controller);

  var graphTotalAppear = new ScrollMagic.Scene({
    triggerElement: '.impact-report-interaction-6',
    offset: 1200,
    reverse: true
  })
  .setClassToggle('.impact-report-graph-total.fade-in', 'faded-in') // add class to impact-report-graph-2011
  .addTo(controller);

});