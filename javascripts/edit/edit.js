class EditCallsToActionWidget {

  constructor() {

    const featuredContentPopOutNames = [],
          widgetSlug = window.top.$('.modal').find("[class*=form-field-widget-slug-]");

    $("#side-nav-secondary").find(".g5-widget-fa-featured-content-pop-out").each(function(index, element) {
      featuredContentPopOutNames.push($( element ).closest(".widget-thumbnail").next().text());
    });

    widgetSlug.find("label").html(function(_, html) {
      return html.replace(/(Enter Featured Content Pop Out Widget Name)/g, '<span class="input-check">$1</span>')
    });

    function inputTextCheck(input) {
      let inputElement = input,
          inputVal = inputElement.val(),
          inputCheck = inputElement.siblings("label").find("span.input-check");
      if(!inputVal) {
        inputCheck.removeClass("pass fail");
      } else {
        for (let i = 0; i < featuredContentPopOutNames.length; i++) {
          if(inputVal === featuredContentPopOutNames[i]) {
            inputCheck.removeClass("fail").addClass("pass");
          break;
          } else {
            inputCheck.removeClass("pass").addClass("fail");
          }
        }
      }
    }

    widgetSlug.find("input[type=text]").each(function(index, element) {
      inputTextCheck($(element));
    });

    widgetSlug.find("input[type=text]").keyup(function(e) {
      inputTextCheck($(e.currentTarget));
    });

  }

}

new EditCallsToActionWidget();