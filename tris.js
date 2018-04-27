var gameCount=0;
var count=0;
var player1;
var player2;
var oneDis=document.getElementById('oneDis');
var twoDis=document.getElementById('twoDis');
var win;
var pla1Points=0;
var pla2Points=0;
var firstMove;
var allow=false;


function start(){
$('#footer').slideDown(2500);
}

function play(h){
count++;   
if(gameCount%2===0&&allow===true){ 
      gameCount++;
$(h).append($('<img>',{class:'img',src:'x.png',heigth:'70%',width:'70%'})).prop('onclick',null);
check('x');
}else if(gameCount%2===1&&allow===true){
      gameCount++;
$(h).append($('<img>',{class:'img',src:'o.png',heigth:'60%',width:'60%'})).prop('onclick',null);
check('o');
}

}

function choosed(y){
$('.span').prop('onclick',null);
$('#footer').fadeOut(2000);
if(y=='x'){
    player1='x';player2='o';
oneDis.textContent= 'x';twoDis.textContent= 'o';
firstMove=0;
}else{
    player1='o';player2='x';
oneDis.textContent= 'o';twoDis.textContent= 'x';
firstMove=1;
    gameCount=1;
}
allow=true;
}


function check(sig){


if($('#one img').attr('src')==sig+'.png'&& $('#two img').attr('src')== sig+'.png'&& 
    $('#three img').attr('src')== sig+'.png'){
check2(sig);
return reset()};
if($('#four img').attr('src')==sig+'.png'&& $('#five img').attr('src')==sig+'.png'&& 
    $('#six img').attr('src')== sig+'.png'){
check2(sig);    
return reset()};
if($('#seven img').attr('src')==sig+'.png'&& $('#eight img').attr('src')==sig+'.png'&& 
    $('#nine img').attr('src')==sig+'.png'){
check2(sig);    
return reset()};
if($('#one img').attr('src')==sig+'.png'&& $('#four img').attr('src')==sig+'.png'&& 
    $('#seven img').attr('src')==sig+'.png'){
check2(sig);    
return reset()};
if($('#two img').attr('src')==sig+'.png'&& $('#five img').attr('src')==sig+'.png'&& 
    $('#eight img').attr('src')==sig+'.png'){
check2(sig);    
return reset()};
if($('#three img').attr('src')==sig+'.png'&& $('#six img').attr('src')==sig+'.png'&& 
    $('#nine img').attr('src')==sig+'.png'){
check2(sig);    
return reset()};
if($('#one img').attr('src')==sig+'.png'&& $('#five img').attr('src')==sig+'.png'&&
    $('#nine img').attr('src')==sig+'.png'){
check2(sig);    
return reset()};
if($('#three img').attr('src')==sig+'.png'&& $('#five img').attr('src')==sig+'.png'&& 
    $('#seven img').attr('src')==sig+'.png'){
check2(sig);    
return reset()};

if(count==9&&win===undefined){return setTimeout(resetSquares,1500)};


function check2(sig){
if(sig==='x'){win='x'}else if(sig==='o'){win='o'};
}
}


function reset(){

if(win===player1){
    pla1Points++;
for (var i = 0; i < 5; i++) {
      $('#points1').html(pla1Points).delay(30).fadeOut(50).delay(30).fadeIn(50); 
}
      $('#points2').html(pla2Points);

}

if(win===player2){
    pla2Points++;
for (var i = 0; i < 5; i++) {
      $('#points2').html(pla2Points).delay(30).fadeOut(50).delay(30).fadeIn(50);  
}
      $('#points1').html(pla1Points);

}
setTimeout(resetSquares,1500);
allow=false;
}



function resetSquares(){
firstMove++;
firMove(); 
$(".quad img:last-child").remove();   
$( ".square" ).attr('onclick','play(this)').slideUp(3500).slideDown(3500);

}


function firMove(){  
if(firstMove%2===0){gameCount=0};
if(firstMove%2===1){gameCount=1};
setTimeout(function delay(){allow=true;win=undefined;count=0},2000);
}




































































































































































	
	
	
