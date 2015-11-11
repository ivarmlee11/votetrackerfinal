comedianVotes = [];

comedianStats = function(filepath, comedian) {
  this.filepath = filepath;
  this.comedian = comedian;
  this.votes = 0;
  comedianVotes.push(this); //pushing this object in to comedianVotes array
};



new comedianStats('../images/amy.jpg', 'Amy Poehler');
new comedianStats('../images/aziz.jpg', 'Aziz Ansari');
new comedianStats('../images/billburr.jpg', 'Bill Burr');
new comedianStats('../images/carlin.jpg', 'George Carlin');
new comedianStats('../images/chappelle.jpg', 'Dave Chappelle');
new comedianStats('../images/chelsea.jpg', 'Chelsea Peretti');
new comedianStats('../images/doug.jpg', 'Doug Benson');
new comedianStats('../images/esther.jpg', 'Lil\' Esther');
new comedianStats('../images/louis.jpg', 'Louis CK');
new comedianStats('../images/richard.jpg', 'Richard Pryor');
new comedianStats('../images/sarah.jpg', 'Sarah Silverman');
new comedianStats('../images/seinfield.jpg', 'Jerry Seinfield');


var imageFirst = document.getElementById('image1');
var imageSecond = document.getElementById('image2');

var nameFirst = document.getElementById('named1');   //name info
var nameSecond = document.getElementById('named2');  //name info







var tracker = {
  genRandChoice: function() {
    return Math.floor(Math.random() * comedianVotes.length);
  },
  getImages: function() {
    var img1 = comedianVotes[this.genRandChoice()];
    var img2 = comedianVotes[this.genRandChoice()];

    while (img1 === img2) {
      img2 = comedianVotes[this.genRandChoice()];
    }

    imageFirst.addEventListener("click", this.voteForOne);
    imageSecond.addEventListener("click", this.voteForTwo);

    imageFirst.src = img1.filepath;
    imageSecond.src = img2.filepath;
    imageFirst.data = comedianVotes.indexOf(img1);
    imageSecond.data = comedianVotes.indexOf(img2);

    imageFirst.name = img1.comedian;
    console.log(imageFirst.name);
    document.getElementById("named1").innerHTML = imageFirst.name;
    imageSecond.name = img2.comedian;
    console.log(imageSecond.name);
    document.getElementById("named2").innerHTML = imageSecond.name;
  },

  voteForOne: function() {
    var ourNumber = imageFirst.data;
    comedianVotes[ourNumber].votes += 1;
    tracker.getImages();
  },

  voteForTwo: function() {
    var ourNumber = imageSecond.data;
    comedianVotes[ourNumber].votes += 1;
    tracker.getImages();
  },





};



tracker.getImages();
