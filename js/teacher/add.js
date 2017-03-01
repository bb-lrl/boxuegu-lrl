define(['jquery','common','nprogress'],function($,undefine,nprogress){
    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

    $('#id="teacher-add-form"').on('submit',function () {
        $.ajax({
            url:'/v6/teacher/add',
            type:'post',
            data:$(this).serialize(),
            success:function (data) {
                if(data.code == 200){
                    location.href ='/html/teacher/list.html'
                }
            }
        })
        return false;
    })
});