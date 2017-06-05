$(document).ready(function() {
  $("#blanks form").submit(function() {
  var countryInput = $("input#country").val();
  var person1Input = $("input#person1").val();
  var person2Input= $("input#person2").val();
  var foodInput = $("input#food").val();
  var verbInput = $("input#verb").val();
  var clothingInput = $("input#clothing").val();
  var gadgetInput = $("input#gadget").val();

    $(".country").append("blah blah");
    $(".person1").append("blah blah");
    $(".pesron2").append("blah blah");
    $(".food").append("blah blah");
    $(".verb").append("blah blah");
    $(".clothing").append("blah blah");
    $(".gadget").append("blah blah");

    $("#story").show();

    event.preventDefault();
  });
});
