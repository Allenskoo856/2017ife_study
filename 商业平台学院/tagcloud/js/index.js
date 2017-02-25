/**
 * Created by xcallen on 2017/2/24 0024.
 */
/*********************初始化操作**************************/
var cloudTag = $('.tagcloud'),
    tagElement = $('.tagcloud a'),
    radius = 250, //半径
    focalLength = 550, //焦距
    ZX = cloudTag.width()/2,
    ZY = cloudTag.height()/2,
    α = Math.PI/500,   /*大小控制 旋转速度*/
    β = Math.PI/500,
    tagArray = [], // 标签数组
    eventX = cloudTag.width() + document.body.scrollLeft + document.documentElement.scrollLeft,
    eventY = cloudTag.height() + document.body.scrollTop + document.documentElement.scrollTop;

/*Tags 属性*/
var tags = function (elem,x,y,z) {
    this.elem = elem;
    this.x = x;
    this.y = y;
    this.z = z;
};
/*Tags 方法*/
tags.prototype = {
    styles:function () {
        var scale = focalLength / (focalLength - this.z); //比例
        var alpha = (this.z + radius) / (2 * radius); // 透明度
        $(this.elem).css({
           "fontSize": 15 * scale + "px", // 字体大小
            "opacity": alpha + 0.5,     // 透明度
            "zIndex": parseInt(scale*100),  // 层级
            "left": this.x + ZX - this.elem.offsetWidth/2 +"px",
            "top": this.y + ZY - this.elem.offsetHeight/2 +"px"
        });
    }
};

/*生成球面点的x，y，z坐标*/
function init() {
    for (var i = 0; i < $('a').length; i++) {
        /* 调用平均分布的坐标点公式：
        * θ = arccos( ((2*num)-1)/all - 1);
        * Φ = θ*sqrt(all * π);
        */
        var k = (2 * (i + 1) - 1) / $('a').length - 1;
        var a = Math.acos(k);
        var b = a * Math.sqrt($('a').length * Math.PI);
        /* 球面方程坐标公式：
        *  x=r*sinθ*cosΦ ；y=r*sinθ*sinΦ ；z=r*cosθ;
        */
        var x = radius * Math.sin(a) * Math.cos(b);
        var y = radius * Math.sin(a) * Math.sin(b);
        var z = radius * Math.cos(a);
        var t = new tags($('a')[i],x,y,z);
        $('a')[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")"; // 随机颜色
        tagArray.push(t);
        t.styles();
    }
}

/* 矩阵旋转公式
* 绕X轴旋转 ：  y()= ycosα - zsinα ;
*              Z() = ysinα + zcosα ;
*              X() = x
*绕Y轴旋转:     Z() = zcosβ - xsinβ ;
*              X() = zsinβ + xcosβ ;
*              Y() = y
 */
function rotateX() {
    $.each(tagArray,function () {
        var y1 = this.y * Math.cos(α) - this.z * Math.sin(α);
        var z1 = this.y * Math.sin(α) + this.z * Math.cos(α);
        this.y = y1;
        this.z = z1;
    })
}
function rotateY() {
    $.each(tagArray,function () {
        var z1 = this.z * Math.cos(β) - this.x * Math.sin(β);
        var x1 = this.z * Math.sin(β) + this.x * Math.cos(β);
        this.z = z1;
        this.x = x1;
    })
}

/*动画效果*/
function animate(){
    setInterval(function(){
        rotateX();
        rotateY();
        $.each(tagArray,function () {
            this.styles();
        });
    } , 14)
}

/*鼠标移入事件*/
cloudTag.on({
    mousemove: function (event) {
        var x = event.clientX - eventX - ZX ;
        var y = event.clientY - eventY - ZY ;
        α = x*0.00001 ;
        β = y*0.00001 ;
    },mouseleave : function () {
        α = Math.PI/500 ;
        β = Math.PI/500 ;
    }
});
init();
animate();
/*********************初始化操作**************************/

/*********************表单操作效果**************************/
var Content = $("#content"),
    Count = $("#count"),
    Speed = $("#speed"),
    ShowEfc = $("#showEfc"),
    ResetEfc = $("#resetEfc");

    /*注册点击事件*/
    ShowEfc.click(function () {
       if(Content.val()=="" || Count.val()=="" || Speed.val()==""){
           $(this).removeClass('positive').addClass('negative');
           $(this).html('请输入内容！');
       }
       else if (Count.val() < 10 || Count.val() > 100 || Speed.val() < 100 || Speed.val() > 10000){
           $(this).removeClass('positive').addClass('negative');
           $(this).html('请输入合理的范围！');
       }
       else if (!/^[0-9]*$/.test(Speed.val()) || !/^[0-9]*$/.test(Count.val())){
           $(this).removeClass('positive').addClass('negative');
           $(this).html('请输入数字！');
       }
       else {
           $(this).removeClass('negative').addClass('positive');
           $(this).html('展示');
           tagElement.remove();
           for (var i = 0; i < Count.val(); i++) {
               var str = "" ;
               str += "<a href='#' target='_blank'>"+ Content.val()+"</a>";
               cloudTag.append(str);
           }
           α = Math.PI / Speed.val();
           β = Math.PI/  Speed.val();
           init();
           animate();
       }
    });
    /*重置效果*/
    ResetEfc.click(function () {
        $('a').detach();
        tagElement.appendTo(cloudTag);
        α = Math.PI/500 ;
        β = Math.PI/500 ;
        init();
        animate();
        Count.val("");
        Speed.val("");
        Content.val("");
    });
/*********************表单操作效果**************************/
