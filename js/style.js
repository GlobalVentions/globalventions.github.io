/*code start for Custom dropdown code*/
$(function () {
    var $divs = $("#banner-group").children("div"),
        index = 0;

    $("#next").click(function () {
        updateStatus(1);
    });

    $("#prev").click(function () {
        updateStatus(-1);
    });

    function updateStatus(a) {

        $divs.eq(index).removeClass("current").hide();
        index += a;
        $divs.eq(index).addClass("current").show();

        $("#next").toggle((index !== $divs.length - 1));
        $("#prev").toggle(index !== 0);
    }

    /* JS Code for video slider */
    if ($('.owl-most-popular').length) {
        $('.owl-most-popular').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    /* JS Code for video slider */
    if ($('.owl-featured-today').length) {
        $('.owl-featured-today').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            center: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 30
                },
                992: {
                    items: 2,
                    margin: 80
                }
            }
        });
    }
    if ($('.owl-career-opportunities').length) {
        $('.owl-career-opportunities').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.owl-most-articles').length) {
        $('.owl-most-articles').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
});

/**/
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {

    var dd = new DropDown( $('#dd') );
});

/**/
function DropDown(el) {
    this.dd1 = el;
    this.placeholder = this.dd1.children('span');
    this.opts = this.dd1.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd1.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd1') );
});

/**/
function DropDown(el) {
    this.dd2 = el;
    this.placeholder = this.dd2.children('span');
    this.opts = this.dd2.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd2.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd2') );
});

/**/
function DropDown(el) {
    this.dd3 = el;
    this.placeholder = this.dd3.children('span');
    this.opts = this.dd3.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd3.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd3') );
});

/**/
function DropDown(el) {
    this.dd4 = el;
    this.placeholder = this.dd4.children('span');
    this.opts = this.dd4.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd4.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd4') );
});

/**/
function DropDown(el) {
    this.dd5 = el;
    this.placeholder = this.dd5.children('span');
    this.opts = this.dd5.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd5.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd5') );
});

/**/
function DropDown(el) {
    this.dd6 = el;
    this.placeholder = this.dd6.children('span');
    this.opts = this.dd6.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd6.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd6') );
});

/**/
function DropDown(el) {
    this.dd7 = el;
    this.placeholder = this.dd7.children('span');
    this.opts = this.dd7.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd7.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd7') );
});

/**/
function DropDown(el) {
    this.dd8 = el;
    this.placeholder = this.dd8.children('span');
    this.opts = this.dd8.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd8.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd8') );
});

/**/
function DropDown(el) {
    this.dd9 = el;
    this.placeholder = this.dd9.children('span');
    this.opts = this.dd9.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd9.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd9') );
});

/**/
function DropDown(el) {
    this.dd10 = el;
    this.placeholder = this.dd10.children('span');
    this.opts = this.dd10.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd10.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd10') );
});

/**/
function DropDown(el) {
    this.dd11 = el;
    this.placeholder = this.dd11.children('span');
    this.opts = this.dd11.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd11.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {
    var dd1 = new DropDown( $('#dd11') );
});

/* Js code for include header file */
$(document).ready(function(){
    $.get("header.html", function(data) {
        $("#header").html(data);
    });
});

$(document).ready(function(){
    $.get("pro-header.html", function(data) {
        $("#pro-header").html(data);
    });
});

/* Js code for include footer file */
$(document).ready(function(){
    $.get("footer.html", function(data) {
        $("#footer").html(data);
    });
});

$(document).ready(function(){
    $.get("pro-footer.html", function(data) {
        $("#pro-footer").html(data);
    });
});

/* Toggle Image Change Code */
$(".LikeToggler").click(function() {
    $(this).find('img').toggle();
});

/* JS code for hide show link your bank form */
$(document).ready(function(){
    $(".stepsDivs .DivStepDiv").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next-form").click(function(){
        if ($(".stepsDivs .DivStepDiv:visible").next().length != 0)
            $(".stepsDivs .DivStepDiv:visible").next().show().prev().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:first").show();
        }
        return false;
    });

    $("#prev-form").click(function(){
        if ($(".stepsDivs .DivStepDiv:visible").prev().length != 0)
            $(".stepsDivs .DivStepDiv:visible").prev().show().next().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:last").show();
        }
        return false;
    });
    $("#next-form-1").click(function(){
        if ($(".stepsDivs .DivStepDiv:visible").next().length != 0)
            $(".stepsDivs .DivStepDiv:visible").next().show().prev().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:first").show();
        }
        return false;
    });

    $("#prev-form-1").click(function(){
        if ($(".stepsDivs .DivStepDiv:visible").prev().length != 0)
            $(".stepsDivs .DivStepDiv:visible").prev().show().next().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:last").show();
        }
        return false;
    });
});

/* JS code for hide show div based on checkbox in Global Sign Up Page*/
$(function () {
    $("#chkPassport").click(function () {
        if ($(this).is(":checked")) {
            $("#dvPassport").show();
        } else {
            $("#dvPassport").hide();
        }
    });
});