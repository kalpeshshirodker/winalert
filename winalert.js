
/**
	
	A wrapper function which will override the default implementation of window.alert. This wrapper will raise a custom event 'winalert', whenever an 'window.alert' function is invoked by the client.
	
	This can be used to cleanly handle alert invokes.
	
**/


(function() {
	try {
		var eventName = 'winalert';
	  
		raiseWinAlertEvent = function(message) {
			// create a 'ssoalert' event; and pass the 'message' as parameter
			var ssoAlertEvent = new CustomEvent(eventName, {
				detail : message
			});

			ssoAlertEvent.getMessage = function() {
				return this.detail;
			}

			window.dispatchEvent(ssoAlertEvent);
		}

		if(window.frameElement) {
			
			window.alert = function(message) {  
				raiseWinAlertEvent(message);
			}
		}
	}
	catch(e) {
		if(console && console.error) {
			console.error('winalert.js', 'An error occured while registering winalert event')
		}
	}
})();

