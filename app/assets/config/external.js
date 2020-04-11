// ===========================
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#uploaded_img').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
// ===========================
$(".menu-sp .fa").click(function(){
	$(".navigation-menu").slideToggle(300);
});

// function t(t) {
//   $(t).bind("click", function (t) {
//     t.preventDefault();
//     $(this).parent().fadeOut()
//   })
// }
// $(".dropdown-toggle").click(function () {
//   var t = $(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
//   $(".button-dropdown .dropdown-menu").hide();
//   $(".button-dropdown .dropdown-toggle").removeClass("active");
//   if (t) {
//     $(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
//   }
// });
// $(document).bind("click", function (t) {
//   var n = $(t.target);
//   if (!n.parents().hasClass("button-dropdown")) $(".button-dropdown .dropdown-menu").hide();
// });
// $(document).bind("click", function (t) {
//   var n = $(t.target);
//   if (!n.parents().hasClass("button-dropdown")) $(".button-dropdown .dropdown-toggle").removeClass("active");
// })
// // ===========================
// $(window).scroll(function(){
//   if ($(this).scrollTop() > 50) {
//     $('.inner-header').addClass('darkHeader');
//     $(".scrollTop").show();
//   } else {
//     $('.inner-header').removeClass('darkHeader');
//     $(".scrollTop").hide();
//   }
// });

// $('.scrollTop a').click(function(e) {
//   $('html, body').animate({scrollTop:0}, '300');
// });
// // ===========================
//   $('#funding-table').DataTable();

//   $('#funding-providers-table').DataTable();
// // ===========================
// $('.menu-bar ul li a').click(function(){
//   $('html, body').stop().animate({
//       scrollTop: $( $(this).attr('href') ).offset().top - 10
//   }, 400);
//   return false;
// });
// // ===========================
// $(".menu-icon").click(function(){
//   $(".menu-bar").slideToggle(300);
// });