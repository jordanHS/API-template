//import { Species } from '../src/species';

describe('word', function() {
  it('should return word', function() {
    var message = word();
    expect(message).toEqual("word");
  });
});

/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});