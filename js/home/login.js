/**
 * Created by linruilian on 2017/2/25.
 */
define(['jquery','jqueryCookie','nprogress'], function($,undefined,nprogress) {
    /*
     * 1、先监听form表单的提交事件，
     * 2、事件回调中return false阻止默认的提交
     * 3、事件回调中通过ajax的方式发送表单数据
     * 4、如果返回结果中的code为200，证明登陆成功，跳转到首页
     * */
    var userInfo = null;
    try {
        userInfo = JSON.parse($.cookie('userInfo'))
        }
    catch(e){
        userInfo={};
    }
    $('.login .avatar img').attr('src',userInfo.tc_avatar? userInfo.tc_avatar:'/img/default.png');

    /*
     * 1、先监听form表单的提交事件，
     * 2、事件回调中return false阻止默认的提交
     * 3、事件回调中通过ajax的方式发送表单数据
     * 4、如果返回结果中的code为200，证明登陆成功，跳转到首页
     * */


    $('#form-login').on('submit',function(){
        $.ajax({
            url:'/v6/login',//接口，前后端接连在一起
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                // 如果登陆成功，使用cookie的方式保存用户信息，
                // 注意：cookie值必须为字符串，我们得到的是js对象，需要使用JSON.stringify进行转换
                if(data.code === 200 ){
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/'
                }
            }
        });
        return false;

    });
    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

});
