$('.baricon').on('click',function(){
    $('.toggled-nav').toggle();
});

$(".cart-icon").on('click',function(){
    $('.sidebar').show();
});

$('.close-btn').on('click',function(){
    $('.sidebar').hide();
});

$('.pay').on('change', function () {
    $('.pay').not(this).prop('checked', false);
});

$('.address-check').on('change', function () {
    $('.address-check').not(this).prop('checked', false);
});