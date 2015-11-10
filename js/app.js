comedianVotes = [];

comedianStats = function(filepath, comedian) {
  this.filepath = filepath;
  this.comedian = comedian;
  this.votes = 0;
  comedianVotes.push(this); //pushing this object in to comedianVotes
};

console.log(comedianStats);

var comedianList = [
  new comedianStats('../images/amy.jpg', 'Amy Poehler'),
  new comedianStats('../images/aziz.jpg', 'Aziz Ansari'),
  new comedianStats('../images/billburr.jpg', 'Bill Burr'),
  new comedianStats('../images/carlin.jpg', 'George Carlin'),
  new comedianStats('../images/chappelle.jpg', 'Dave Chappelle'),
  new comedianStats('../images/chelsea.jpg', 'Chelsea Peretti'),
  new comedianStats('../images/doug.jpg', 'Doug Benson'),
  new comedianStats('../images/esther.jpg', 'Lil\' Esther'),
  new comedianStats('../images/louis.jpg', 'Louis CK'),
  new comedianStats('../images/richard.jpg', 'Richard Pryor'),
  new comedianStats('../images/sarah.jpg', 'Sarah Silverman'),
  new comedianStats('../images/seinfield.jpg', 'Jerry Seinfield')];

console.log(comedianList);





var tracker = {
  genRandChoice: function() {
    return Math.floor(Math.random() * comedianList.length);
  },
  getImages: function() {
    var imgPath1 = comedianList[this.genRandChoice()].filepath;


    var imgPath2 = comedianList[this.genRandChoice()].filepath;


    while (imgPath1 === imgPath2) {
      imgPath2 = comedianList[this.genRandChoice()].filepath;
    }

    var imageFirst = document.getElementById('image1');

    var imageSecond = document.getElementById('image2');

    imageFirst.src = imgPath1;
    imageSecond.src = imgPath2;
    return [imgPath1,imgPath2];

    // var el1 = document.getElementById("image1");
    // el1.addEventListener("click", tracker.getImages);

  },


};
tracker.getImages();

//chart js
// var countries= document.getElementById("countries").getContext("2d");
// new Chart(countries).Pie(pieData, pieOptions);
// var pieData = [
//   {
//     value: 20,
//     color:"#878BB6"
//   },
//   {
//     value : 40,
//     color : "#4ACAB4"
//   },
//   {
//     value : 10,
//     color : "#FF8153"
//   },
//   {
//     value : 30,
//     color : "#FFEA88"
//   }
// ];
// var pieOptions = {
//   segmentShowStroke : false,
//   animateScale : true
// }
