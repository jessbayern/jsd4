
window.onload = function() {
  console.log("fnAuth");
  chrome.identity.getAuthToken({
      interactive: true
  }, function(token) {
      console.log(token);

      console.log('fnAjax')
      $.ajax({
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + token
        },
        url : 'https://www.googleapis.com/drive/v3/files/1qJuMYpGc2W4-xADwKMFVG3J8wIaKwreMp284U3IZ6pw?key=AIzaSyBjSMpJ3Z9XGLMYQ2uwTUP4ULd4eJTPTUw',
        type : 'PATCH',
        data : JSON.stringify({
             'viewersCanCopyContent': false,
             'writersCanShare': false
            }),
        success : function(response, textStatus, jqXhr) {
            console.log("Venue Successfully Patched!");
        },
        error : function(jqXHR, textStatus, errorThrown) {
            // log the error to the console
            console.log("The following error occured: " + textStatus, errorThrown);
        },
        complete : function() {
            console.log("Venue Patch Ran");
        }
      });

  });
};

// PATCHING TO API

// chrome.tabs.onUpdated.addListener(function(){
//   console.log('before')
  // if (document.URL.indexOf("https://docs.google.com/") >= 0){ 
//   function patch() {
      
//     }
//   // }
// // });

