$(function(){
    $('.btn').on('click',function(){
        $('.text-box').prop("input",function(){
            $(this).val('クリックしました！');
        });
    });
});