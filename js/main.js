// Scroll to function
function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
  var startingY = window.pageYOffset
  var elementY = getElementY(element)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  var diff = targetY - startingY - 40
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

if(document.getElementById('js-training-1')) {
  document.getElementById('js-training-1').addEventListener('click', doScrolling.bind(null, '#finops-certified-practitioner-certification-exam--300', 1000));
}

if(document.getElementById('js-training-2')) {
document.getElementById('js-training-2').addEventListener('click', doScrolling.bind(null, '#self-paced-online-course---499', 1500));
}

if(document.getElementById('js-training-3')) {
document.getElementById('js-training-3').addEventListener('click', doScrolling.bind(null, '#instructor-led-live-training--890', 2000));
}

if(document.getElementById('js-cert-1')) {
  document.getElementById('js-cert-1').addEventListener('click', doScrolling.bind(null, '#finops-certified-platform', 1000));
}

if(document.getElementById('js-cert-2')) {
document.getElementById('js-cert-2').addEventListener('click', doScrolling.bind(null, '#finops-certified-service-provider', 1500));
}

if(document.getElementById('js-cert-3')) {
document.getElementById('js-cert-3').addEventListener('click', doScrolling.bind(null, '#finops-training-partner', 2000));
}



// Off canvas menu
document.addEventListener('DOMContentLoaded', function() {

  var Nav = new hcOffcanvasNav('#off-canvas', {
    levelOpen: 'expand',
    navTitle: 'FinOps Foundation',
    disableAt: '768',
    levelTitles: true,
    levelTitleAsBack: true
  });

});


// Modal

function toggleModal(modalID){
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById("modal-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById("modal-backdrop").classList.toggle("flex");
}


// Accordian

$(function(){
  $('[data-collapse-target]').each(function(){
    /**
     * Apply these data attributes to the a|button element to show|hide other elements
    *
    * data-collapse-target (ID of the element to show/hide)
    * data-collapse-initial-state ("visible" or "hidden", defines the current visibilty of the target element)
    * data-collapse-expand-text (button text to show when the target element is hidden)
    * data-collapse-collapse-text (button text to show when the target element is visible)
    */
    var button = $(this);
    var targetSelector = '#' + button.attr('data-collapse-target');
    var target = $(targetSelector);
    var visible = true;
    var initialState = button.attr('data-collapse-initial-state');
    
    if(initialState && initialState === 'hidden'){
      visible = false;
    }
    else if(!initialState){
      visible = target.is(':visible');
    }
    
    var collapseText = button.attr('data-collapse-collapse-text');
    if(!collapseText) collapseText = button.text();
    var expandText = button.attr('data-collapse-expand-text');
    if(!expandText) expandText = button.text();
    button.click(function(e){
      e.preventDefault();
      if(visible){
        button.text(expandText);
        target.slideUp();
      }
      else{
        button.text(collapseText);
        target.slideDown();
      }
      // Visible > Hidden, Hidden > Visible
      visible = !visible;
    });
  });
});


// Clickable divs
$('div[data-url]').each(function(){
  $(this).click(function(){
    var url = $(this).attr('data-url');
    window.location.href = url;
  })
});

// data attributes and helpers to enable event data on elements
$(function(){
  $('.js-label-path').each(function(){
    var pathname = window.location.pathname;
    $(this).attr('data-ga-label', pathname);
  });
});

// GA event tracking helper
$('*[data-ga-category]').each(function(){
  $(this).click(function(){
    var category = $(this).data('ga-category');
    var action = $(this).data('ga-action');
    var label = $(this).data('ga-label');
    if (typeof gtag !== 'undefined'){
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    } else {
      console.log("Whoa! no ga script");
    }
  });
});

// Cards filter on waste reduction
if(document.getElementById('js-waste')) {
  var mixer = mixitup('.js-waste', {
    "animation": {
        "duration": 250,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade translateZ(-100px)"
    }
  });
};

