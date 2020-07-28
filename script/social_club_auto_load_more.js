!(function () {
    function loadjQuery(a) {
        var b = document.createElement("script");
        b.src = "//cdn.staticfile.org/jquery/3.5.1/jquery.min.js", b.onload = a, document.getElementsByTagName("head")[0].appendChild(b)
    }
    loadjQuery(function () {
        window.addEventListener('load', function (e) {
            console.log('load');
            $(document).ready(function () {
                //alert('ready');
                function loadcards() {
                    var loadmore = document.getElementsByClassName('UI__Button-socialclub__btn')[2];
                    if (loadmore === undefined) {
                        //console.log('loading');
                    }
                    else {
                        if (loadmore.innerText == 'Load more') {
                            //setTimeout(function(){
                            //console.log('clicked');
                            loadmore.click();
                            //},200);
                        }
                    }
                }
                document.body.addEventListener('mousemove', function (e) {
                    //console.log(document.documentElement.clientHeight - document.documentElement.scrollHeight);
                    if (document.documentElement.clientHeight - document.documentElement.scrollHeight <= 100 && document.documentElement.clientHeight - document.documentElement.scrollHeight >= 0) {
                        loadcards();
                    }
                });
                window.addEventListener('scroll', function (e) {
                    //console.log(document.documentElement.scrollTop);
                    //alert('document.documentElement.scrollTop ' + document.documentElement.scrollTop + ' ' + document.body.scrollTop + '\r\ndocument.documentElement.clientHeight ' + document.documentElement.clientHeight + '\r\ndocument.body.clientHeight ' + document.body.clientHeight + '\r\ndocument.documentElement.scrollHeight ' + document.documentElement.scrollHeight + '\r\ndocument.body.scrollHeight ' + document.body.scrollHeight);
                    if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight - 100) {
                        //console.log('end');
                        loadcards();
                    }
                });
            });
        });
        //     $(document).ready(function(){
        //         $(window).scroll(function(){
        //             var scrollTop = $(this).scrollTop();
        //             conssole.log('scrollTop',scrollTop);
        //             var scrollHeight = $(document).height();
        //             console.log('scrollHeight',scrollHeight);
        //             var windowHeight = $(this).height();
        //             console.log('windowHeight',windowHeight);
        //             if(scrollTop + windowHeight >= scrollHeight){
        //                 $('.UI__Button-socialclub__btn')[2].click();
        //                 //document.getElementsByClassName('UI__Button-socialclub__btn')[2].click();
        //                 alert('thats all');
        //             }
        //         })
        //     });
    });
})()