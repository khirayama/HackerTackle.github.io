$('.speaker').click(function(src) {
    var session = (src.target.id === "" ? src.target.parentElement : src.target ).id.replace(/speaker-/, '');
    $('[name=detail-' + session + ']').css('display', 'block');
    $('[name=detail-' + session + ']').css('top', $(window).scrollTop());
    $('#shadow').css('display','block');
});
$('.speakers li').click(function(src) {
    var session = src.target.id.replace(/img-/, '');
    $('[name=detail-' + session + ']').css('display', 'block');
});
$('#shadow').click(function(src) {
   $('[id^=overlay]').css('display', 'none');
   $('#shadow').css('display','none');
});
$('[id^=overlay]').click(function(src) {
    if(src.target.id==="overlay" || $.inArray("cancel",src.target.classList)>=0 ){
        $('[id^=overlay]').css('display', 'none');
        $('#shadow').css('display','none');
    }
});
$(".h-lane-btn").click(function() {
    $(".timetable td").css('display', 'none');
    $(".timetable th").css('display', 'none');
    $(".timetable tr").css('display', 'block');
    $(".timetable tbody").attr( 'class', 'h-lane-body');
    $(".timetable th:nth-child(2)").css('display', 'block');
    $(".timetable td:nth-child(1)").css('display', 'block');
    $(".timetable td:nth-child(2)").css('display', 'block');
    $(".timetable .row-break td").css('display', 'block');
    $(".timetable .row-break td:empty").css('display', 'none');
    $(this).parent().find("a").css('display', 'block');
    $(this).css('display', 'none');
});
$(".k-lane-btn").click(function() {
    $(".timetable td").css('display', 'none');
    $(".timetable th").css('display', 'none');
    $(".timetable tr").css('display', 'block');
    $(".timetable tbody").attr( 'class', 'k-lane-body');
    $(".timetable th:nth-child(3)").css('display', 'block');
    $(".timetable td:nth-child(1)").css('display', 'block');
    $(".timetable td:nth-child(3)").css('display', 'block');
    $(".timetable .row-break td").css('display', 'block');
    $(".timetable .row-break td:empty").css('display', 'none');
    $(this).parent().find("a").css('display', 'block');
    $(this).css('display', 'none');
});
$(".t-lane-btn").click(function() {
    $(".timetable td").css('display', 'none');
    $(".timetable th").css('display', 'none');
    $(".timetable tr").css('display', 'block');
    $(".timetable tbody").attr( 'class', 't-lane-body');
    $(".timetable th:nth-child(4)").css('display', 'block');
    $(".timetable td:nth-child(1)").css('display', 'block');
    $(".timetable td:nth-child(4)").css('display', 'block');
    $(".timetable .row-break td").css('display', 'block');
    $(".timetable .row-break td:empty").css('display', 'none');
    $(this).parent().find("a").css('display', 'block');
    $(this).css('display', 'none');
});
