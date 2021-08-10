# Introduction
```winalert.js``` is small wrapper for ```window.alert``` function, which will raise an ```winalert``` event whenever the client invokes the ```window.alert``` function.


# Motivation
The primary motivation for this library, was to overcome the recent anouncement by ```Google Chrome``` where they have effectively stopped support for ```alert```, ```confirm``` and ```prompt``` dialogs from being displayed in pages loaded in ```Iframe```. 

See [Chrome update - Feature: Remove alert(), confirm(), and prompt for cross origin iframes]( https://www.chromestatus.com/feature/5148698084376576) for more information.

# ```winalert``` event argument
```winalertjs``` will raise a custom event ```winalert``` on the window object. The ```winalert``` event contains the following properties:
- detail - Contains the actual message passed to the ```window.alert``` 
- getMessage() - helper function which will return the actual message passed to the ```window.alert```

# Usage
## Add the ```winalert.js``` to your application
```
<script type="text/javascript" src="path-to-winalertjs-javascript-file.js"></script>
```
## Activate ```winalert.js```
```
winalertjs.activate();
```
By default, ```winalert``` events will be raised only for pages which are loaded inside ```Iframe``` only. 
If you want to raise the ```winalert``` for pages which are not loaded in ```Iframe``` also.
```
winalertjs.activate(true);
```

## Register Event handler to listen to ```winalert``` event
```
// Use the event arguments for 'winalert', to get the message from the original ```window.alert``` invocation
window.addEventListener('winalert', function(earg) {
  console.log('winalert event handler ::: ' + earg.getMessage());
});
```
