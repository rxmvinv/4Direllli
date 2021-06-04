// describe("Fetching data", function() {
//     var itemsList = document.querySelector("items-list");
  
//     it("and so is a spec", function() {
//       var counter = [...itemsList.children].length; // > 0
  
//       expect(counter).toBe(37); // true
//     });
// });


// describe("Fetching data", function() {

//     beforeEach(function() {
//        jasmine.Ajax.install();
//     });  
    
//     afterEach(function() {
//       jasmine.Ajax.uninstall();
//     });
  
  
//     it("and so is a spec", function() {
//       var doneFn = jasmine.createSpy("success");

//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function(args) {
//         if (this.readyState == this.DONE) {
//           doneFn(this.responseText);
//         }
//       };

//       xhr.open("GET", "");
//       xhr.send();

//       expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
//       expect(doneFn).not.toHaveBeenCalled();

//       jasmine.Ajax.requests.mostRecent().respondWith({

//         "status": 200,
//         "contentType": 'text/plain',
//         "responseText": 'awesome response'
 
//       });
  
//       expect(doneFn).toHaveBeenCalledWith('awesome response');
//     });
// });