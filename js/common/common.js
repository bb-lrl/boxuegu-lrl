/**
 * Created by linruilian on 2017/2/26.
 */
define(['jquery'],function($){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();

    });
    $.ajax({
        url:'/v6/login',
        type:'post',
        data:{
            tc_name:123,
            tc_pass:123
        },
        success:function(){
            console.log('chenggong')
        },
        error:function(){
            console.log('bai')
        }
    });

});
