/**
	
	A wrapper function which will override the default implementation of window.alert. This wrapper will raise a custom event 'winalert', whenever an 'window.alert' function is invoked by the client.
	
	This can be used to cleanly handle alert invokes.
	
	@author: kalpesh.shirodker@gmail.com
	
**/

var winalertjs = (function () {
  try {
    var _eventName = "winalert";
    var _refAlert;

    raiseWinAlertEvent = function (message) {
      // create a <_eventName> event; and pass the 'message' as parameter
      var winAlertEvt = new CustomEvent(_eventName, {
        detail: message,
      });

      winAlertEvt.getMessage = function () {
        return this.detail;
      };

      window.dispatchEvent(ssoAlertEvent);
    };
  } catch (e) {
    if (console && console.error) {
      console.error(
        "winalert.js",
        "An error occured while registering winalert event"
      );
    }
  }

  var canActivate = function (allPages) {
    if (allPages !== undefined && typeof allPages !== "undefined") {
      if (
        allPages ||
        (typeof allPages == "string" && allPages.toLowerCase() === "true")
      ) {
        return true;
      } else {
        return !!window.frameElement;
      }
    } else {
      return !!window.frameElement;
    }
  };

  /**
    
    Activate 'winalert' event
    Parameters:
    inIFramePagesOnly : activate 'winalert' only for pages only in IFrame;
                        default false
    
  **/
  var activate = function (allPages) {
    if (canActivate(allPages)) {
      _refAlert = window.alert;

      window.alert = function (message) {
        raiseWinAlertEvent(message);
      };
    } else {
      deactivate();
    }
  };

  var deactivate = function () {
    if (_refAlert !== undefined || typeof _refAlert !== "undefined") {
      window.alert = _refAlert;
    }
  };

  return {
    activate: activate,
    deactivate: deactivate,
  };
})();
