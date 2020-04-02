$(document).ready(function(){
  $(".wynik").text("Nowa treść");
  console.log(($("p").text())); // odczytanie tekstu z jakiegoś znacznika
  $("#przycisk").click(function(){
    var vnk = parseInt($("#vnk").val());
    var nk = parseInt($("#vnk").val());
    var R = vnk / nk * 100;
    var div2 = '<div class="wspolczynnik">'+R+'</div>';
    $("div.wynik").after(div2);
  });
  $("input").mouseover(function(){
    $(this).addClass("tloBlue");
  });
  $("input").mouseleave(function(){
    $(this).removeClass("tloBlue");
  });
  $("#img1").dblclick(function(){
    $("#img1").toggle(100);
  });
  $("#img2").mouseover(function(){
    $("#img2").toggle(100);
  });
  $("#img3").mouseover(function(){
    $("#img4").toggle(1000);
  });
  $("#img3").mouseleave(function(){
    $("#img4").toggle(1000);
  });
  $("#img4").mouseover(function(){
    $("#img3").toggle(1000);
  });
  $("#img4").mouseleave(function(){
    $("#img3").toggle(1000);
});
  // podczas opuszczenia myszką obszaru input przywróć poprzedni kolor tła
	// wywołania jQuery
});
