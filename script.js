// Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript.
// Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.
$(".header-right > a").click(function(){
  console.log("Apro"); //DEBUG
  // $(".hamburger-menu").fadeIn(1000) // Per aprirlo al click con una transazione in entrata
  $(".hamburger-menu").show(); //Per aprirlo al click
})
$(".hamburger-menu > a.close").click(function(){
  // $(".hamburger-menu").fadeOut(1000); //Per farlo sparire al click con una transazione in uscita
  $(".hamburger-menu").hide(); // Per nasconderlo al click.
})
