$(document).ready(function () {
  let div = $("#divToShowHide");

  let pos = div.position();

  $(window).scroll(function () {
    let windowpos = $(window).scrollTop();
    console.log(pos.top);
    if (windowpos > pos.top && pos.top + 500 > windowpos) {
      div.addClass("AfterScroll");
      div.removeClass("BeforeScroll");
    } else {
      div.addClass("BeforeScroll");
      div.removeClass("AfterScroll");
    }
  });
});
