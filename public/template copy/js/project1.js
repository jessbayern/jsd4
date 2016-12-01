$.ajax({
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    },
    url : 'https://www.googleapis.com/drive/v3/files/1qJuMYpGc2W4-xADwKMFVG3J8wIaKwreMp284U3IZ6pw?key=AIzaSyCxR7LGbCDiLDIv_Eyz1sdGz-Jl7_UJFMg',
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