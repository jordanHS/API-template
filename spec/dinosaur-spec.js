import Word from '../src/theWord';

describe('Word', function() {
  let newWord;
  beforeEach(function(){
    newWord = new Word("child");
  });
  it('should return Word', function() {
    let newWord
    expect(newWord.word).toEqual("child"); //fails with "Word",
  });

  // it("yourpage.html", function (nModif, nVisit) {
  //   expect(console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!")).toEqual("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!"));
  // });

/* Let's test the file "yourpage.html"... */

  // ifHasChanged("yourpage.html", function (nModif, nVisit) {
  //   console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
  // });
  //});
});