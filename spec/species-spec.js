import { Species } from '../src/species';

describe('hello', function() {
  it('should return hello', function() {
    var message = hello();
    expect(message).toEqual("Hello");
  });
});

/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});