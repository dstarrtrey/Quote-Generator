var arr =["\"You are never too old to set another goal or to dream a new dream.\" <br />-C.S. Lewis","\"True humility is not thinking less of yourself\; it is thinking of yourself less.\" <br />-C.S. Lewis","\"You can never get a cup of tea large enough or a book long enough to suit me.\" <br />-C.S. Lewis","\"To live without Hope is to Cease to live.\" <br />-Fyodor Dostoevsky","\"To love someone means to see him as God intended him.\"  <br />-Fyodor Dostoevsky","\"Beauty is mysterious as well as terrible. God and devil are fighting there, and the battlefield is the heart of man.\" <br />-Fyodor Dostoevsky","\"Life can only be understood backwards\; but it must be lived forwards.\" <br />-Søren Kierkegaard","\"The function of prayer is not to influence God, but rather to change the nature of the one who prays.\" <br />-Søren Kierkegaard"];
var number1;
function quote(){
  
  var num=Math.floor(Math.random()*(arr.length));
  number1=num;
  return arr[num];
}
function url(x){
  var arr=x.split("<br />");
  var next=arr.join("%20");
  var third=next.split("\;");
  var text=third.join("%3B");
  text.split(' ').join('%20');
  var url ="https://twitter.com/intent/tweet?text="+text;
  window.open(url,'_blank');
}