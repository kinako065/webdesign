// ページトップ表示
//ある程度 スクロールした→p.pagetopフェードイン
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // console.log(sc);
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});
