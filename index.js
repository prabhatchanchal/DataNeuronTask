$(document).ready(function () {
  $(".box1").resizable({
    handles: "e,w,n,s",
    resize: function (event, ui) {
      $(".box1").css({ left: 0, top: 0 });
      $(".box2").height($(".box1").height());
      $(".box2").width($(".container1").width() - 60 - $(".box1").width());
      $(".container1").height($(".box1").height() + 60);
      $(".container2").height(
        $(".container").height() - $(".box1").height() - 60
      );
    },
  });
  $(".box2").resizable({
    handles: "e,w,n,s",
    resize: function (event, ui) {
      $(".box2").css({ left: 0, top: 0 });
      $(".box1").width($(".container1").width() - ui.size.width);
      $(".box1").height($(".box2").height());
      $(".container1").height($(".box2").height() + 60);
      $(".container2").height(
        $(".container").height() - $(".box2").height() - 60
      );
    },
  });
  $(".box3").resizable({
    handles: "e,w,n,s",
    resize: function (event, ui) {
      $(".container1").height($(".container").height() - $(".box3").height());
      $(".container2").height($(".box3").height() + 60);
      $(".container1").width($(".box3").width() + 60);

      $(".box1").height($(".container1").height() - 60);
      $(".box2").height($(".container1").height() - 60);
    },
  });
});
