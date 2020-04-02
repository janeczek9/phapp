function setup() {
  createCanvas(800, 600);
}

function draw() {
  // put drawing code here
  noFill();
  var kolory = ['blue', 'black', 'red'];
  var kolory2 = ['yellow', 'green'];
  strokeWeight(10);
  var krok = 180;
  var szerokosc = 150;
  for (i = 0; i < kolory.length; i++) {
  	stroke(kolory[i]);
  	ellipse(100 + (i*krok), 100, szerokosc, szerokosc);
  }
  for (i = 0; i < kolory2.length; i++) {
  	stroke(kolory2[i]);
  	ellipse(190 + (i*krok), 175, szerokosc, szerokosc);
  }
  //pozwala rysowac prostokąty rect()

}
