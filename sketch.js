let txt = "花開花落花無悔，緣來緣去緣如水。花謝為花開，花飛為花悲，花悲為花淚，花淚為花碎。花舞花落淚，花哭花瓣飛。花開為誰謝，花謝為誰悲。桃花簾外東風軟，桃花簾內晨妝懶。簾外桃花簾內人，人與桃花隔不遠。東風有意揭簾栊，花欲窺人簾不卷。若將人淚比桃花，淚自長流花自媚。淚眼觀花淚易乾，淚乾春盡花憔悴。憔悴花遮憔悴人，花飛人倦易黃昏。一聲杜宇春歸盡，寂寞簾栊空月痕。花開花落花無悔緣來緣去緣如水花謝為花開花飛為花悲花悲為花淚花淚為花碎花舞花落淚花哭花瓣飛花開為誰謝花謝為誰悲桃花簾外東風軟桃花簾內晨妝懶簾外桃花簾內人人與桃花隔不遠東風有意揭簾栊花欲窺人簾不卷若將人淚淚自長流花自媚淚眼觀花淚易乾淚乾春盡花憔悴憔悴花遮憔悴人花飛人倦易黃昏一聲杜宇春歸盡寂寞簾栊空月痕。"

let order = 2;
let ngrams = {};
let sec = 0;


function setup() {
  createCanvas(600, 900);
  frameRate(1.5);
  
  for(let i = 0; i < txt.length - order; i++){
    let gram = txt.substring(i, i + order);
    
    if (!ngrams[gram]){
      
      ngrams[gram] = [];
      ngrams[gram].push(txt.charAt(i + order));
    }
    else{
      ngrams[gram].push(txt.charAt(i + order));
    }
  }
}

function draw(){
  
if(sec < 1){
  background(226, 197, 137);
  }
  else{
  background(226, 197, 137, 150);
    }
  
  sec++;
  if(sec > 400){
    frameCount = 0;
    sec = 0;
  }
  for(let a = 0; a < 14; a++){
   for(let b = 0; b < 11; b++){
    stroke(0, 50);
    let count = a + b * 14;
    if(count < (sec + 2)){
      stroke(226, 197, 137, 150);

    }

    strokeWeight(2);
    line(a * 30 + 92, b * 60 + 61, a * 30 + 116, b * 60 + 85);
    line(a * 30 + 116, b * 60 + 61, a * 30 + 92, b * 60 + 85);
    
    noFill();
    rect(a * 30 + 92, b * 60 + 61, 24, 24);
    rect(a * 30 + 92, b * 60 + 61, 12, 12);
    rect(a * 30 + 104, b * 60 + 73, 12, 12);
    
    }
  }
  ngram();
  
  for(a = 0; a < 14; a++){
    for(b = 0; b < 12; b++){
      stroke(0, 50);
      let count = a + b * 16;
      if(count < (sec + 2)){
        stroke(226, 197, 137, 150);
      }

  noFill();
  stroke(226, 197, 137, 50);
    rect(a * 30 + 92, b * 60 + 61, 24, 24);
    rect(a * 30 + 92, b * 60 + 61, 12, 12);
    rect(a * 30 + 104, b * 60 + 73, 12, 12);

  }
    fill(226, 197, 137, 150);
    rect(511, 0, width - 510, height);
}


}

function ngram(){
  let currentGram = txt.substring(0, order);
  let result = currentGram;
  
  for(let j = 0; j < frameCount; j++){
    let possibilities = ngrams[currentGram];
    if(!possibilities){
      possibilities = "花";

    }
   
    let next = random(possibilities);

    result += next;
    let len = result.length;
    currentGram = result.substring(len - order, len);
  }
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(30);
  textWidth(300);
  textFont('宋体');
  textLeading(60);
  fill(159, 53, 58, 200);
  noStroke();
  text(result, 90, 50, width - 160, height - 230);
  
  
  
}
