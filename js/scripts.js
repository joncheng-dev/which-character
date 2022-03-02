$(document).ready(function () {
  $("form#survey").submit(function (event) {
    event.preventDefault();
    const q1 = parseInt($("#question1").val());
    const q2 = parseInt($("#question2").val());
    const q3 = parseInt($("#question3").val());
    const q4 = parseInt($("input:radio[name=question4]:checked").val());
    const q5 = parseInt($("input:radio[name=question5]:checked").val());

    const total = q1 + q2 + q3 + q4 + q5;

    if (total >= 5 && total <= 10) {
      $("#character").text("Bart Simpson");
      $("#picture").append("<img src='img/bart.jpg' alt='Picture of Bart'>");
    } else if (total >= 11 && total <= 15) {
      $("#character").text("Lisa Simpson");
      $("#picture").append("<img src='img/lisa.jpg' alt='Picture of Lisa'>");
    } else if (total >= 16 && total <= 20) {
      $("#character").text("Maggie Simpson");
      $("#picture").append(
        "<img src='img/maggie.jpg' alt='Picture of Maggie'>"
      );
    }
  });
});
