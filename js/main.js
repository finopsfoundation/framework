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