$(".entry-content img").parents("a").on("click", function (_0xc53dx1) {
        return _0xc53dx1.preventDefault(), _0xc53dx1.stopPropagation(), $(this).lighter()
    }),
    function () {
        function _0xc53dx2(_0xc53dx1, _0xc53dx3) {
            return function () {
                return _0xc53dx1.apply(_0xc53dx3, arguments)
            }
        }
        var _0xc53dx4, _0xc53dx5, _0xc53dx6;

        function _0xc53dx1() {}

        function _0xc53dx7(_0xc53dx1, _0xc53dx3) {
            null == _0xc53dx3 &amp;&amp; (_0xc53dx3 = {}), this.show = _0xc53dx2(this.show, this), this.hide = _0xc53dx2(this.hide, this), this.toggle = _0xc53dx2(this.toggle, this), this.keyup = _0xc53dx2(this.keyup, this), this.align = _0xc53dx2(this.align, this), this.resize = _0xc53dx2(this.resize, this), this.process = _0xc53dx2(this.process, this), this.href = _0xc53dx2(this.href, this), this.type = _0xc53dx2(this.type, this), this.image = _0xc53dx2(this.image, this), this.prev = _0xc53dx2(this.prev, this), this.next = _0xc53dx2(this.next, this), this.close = _0xc53dx2(this.close, this), this["\$"] = _0xc53dx2(this.$, this), this["\$el"] = _0xc53dx1, null != this["\$el"].data("width") &amp;&amp; null != this["\$el"].data("height") &amp;&amp; null == _0xc53dx3.dimensions &amp;&amp; (_0xc53dx3.dimensions = {
                width: this["\$el"].data("width"),
                height: this["\$el"].data("height")
            }), this.settings = _0xc53dx4.extend({}, _0xc53dx7.settings, _0xc53dx3), this["\$lighter"] = _0xc53dx4(this.settings.template), this["\$overlay"] = this.$(".lighter-overlay"), this["\$content"] = this.$(".lighter-content"), this["\$container"] = this.$(".lighter-container"), this["\$close"] = this.$(".lighter-close"), this["\$prev"] = this.$(".lighter-prev"), this["\$next"] = this.$(".lighter-next"), this["\$body"] = this.$(".lighter-body"), this.width = this.settings.dimensions.width, this.height = this.settings.dimensions.height, this.align(), this.process()
        }
        _0xc53dx4 = jQuery, _0xc53dx1.transitions = {
            webkitTransition: "webkitTransitionEnd",
            mozTransition: "mozTransitionEnd",
            oTransition: "oTransitionEnd",
            transition: "transitionend"
        }, _0xc53dx1.transition = function (_0xc53dx1) {
            var _0xc53dx3, _0xc53dx2, _0xc53dx5, _0xc53dx4;
            for (_0xc53dx5 in _0xc53dx3 = _0xc53dx1[0], _0xc53dx4 = this.transitions) {
                if (_0xc53dx2 = _0xc53dx4[_0xc53dx5], null != _0xc53dx3.style[_0xc53dx5]) {
                    return _0xc53dx2
                }
            }
        }, _0xc53dx1.execute = function (_0xc53dx1, _0xc53dx3) {
            var _0xc53dx2;
            return null != (_0xc53dx2 = this.transition(_0xc53dx1)) ? _0xc53dx1.one(_0xc53dx2, _0xc53dx3) : _0xc53dx3()
        }, _0xc53dx5 = _0xc53dx1, _0xc53dx7.settings = {
            padding: 40,
            dimensions: {
                width: 960,
                height: 540
            },
            template: "<div class='lighter fade'> <div class = 'lighter-container' >
                <span class = 'lighter-content' > </span> <a class = 'lighter-close' > &amp; #215;</a>
    <a class= 'lighter-prev' > &amp; #8249;</a>
    <a class= 'lighter-next' > &amp; #8250;</a>
  </div>
  <div class= 'lighter-overlay' > </div> </div>"},_0xc53dx7.lighter = function(_0xc53dx1,_0xc53dx3){var _0xc53dx2;return null== _0xc53dx3&amp;&amp; (_0xc53dx3= {}),(_0xc53dx2= _0xc53dx1.data ("_lighter"))|| (_0xc53dx2=  new _0xc53dx7(_0xc53dx1,_0xc53dx3),_0xc53dx1.data ("_lighter",_0xc53dx2)),_0xc53dx2},_0xc53dx7.prototype ["\$"]= function(_0xc53dx1){return this["\$lighter"].find (_0xc53dx1)},_0xc53dx7.prototype .close = function(_0xc53dx1){return null!= _0xc53dx1&amp;&amp; _0xc53dx1.preventDefault (),null!= _0xc53dx1&amp;&amp; _0xc53dx1.stopPropagation (),this.hide ()},_0xc53dx7.prototype .next = function(_0xc53dx1){return null!= _0xc53dx1&amp;&amp; _0xc53dx1.preventDefault (),null!= _0xc53dx1?_0xc53dx1.stopPropagation ():void(0)},_0xc53dx7.prototype .prev = function(){return "undefined"!=  typeof event&amp;&amp; null!== event&amp;&amp; event.preventDefault (),"undefined"!=  typeof event&amp;&amp; null!== event?event.stopPropagation ():void(0)},_0xc53dx7.prototype .image = function(_0xc53dx1){return _0xc53dx1.match (/\.(jpeg | jpg | jpe | gif | png | bmp) $ / i)
    }, _0xc53dx7.prototype.type = function (_0xc53dx1) {
        return null == _0xc53dx1 &amp;&amp; (_0xc53dx1 = this.href()), this.settings.type || (this.image(_0xc53dx1) ? "image" : void(0))
    }, _0xc53dx7.prototype.href = function () {
        return this["\$el"].attr("href")
    }, _0xc53dx7.prototype.process = function () {
        var _0xc53dx1, _0xc53dx3, _0xc53dx2, _0xc53dx5 = this;
        switch (_0xc53dx2 = this.type(_0xc53dx1 = this.href()), this["\$content"].html(function () {
            switch (_0xc53dx2) {
            case "image":
                return _0xc53dx4("<img/>").attr({
                    src: _0xc53dx1
                });
            default:
                return _0xc53dx4(_0xc53dx1)
            }
        }()), _0xc53dx2) {
        case "image":
            return (_0xc53dx3 = new Image).src = _0xc53dx1, _0xc53dx3.onload = function () {
                return _0xc53dx5.resize(_0xc53dx3.width, _0xc53dx3.height)
            }
        }
    }, _0xc53dx7.prototype.resize = function (_0xc53dx1, _0xc53dx3) {
        return this.width = _0xc53dx1, this.height = _0xc53dx3, this.align()
    }, _0xc53dx7.prototype.align = function () {
        var _0xc53dx1, _0xc53dx3, _0xc53dx2;
        return 1 <(_0xc53dx3 = Math.max((_0xc53dx1 = this.height) / (_0xc53dx4(window).height() - this.settings.padding), (_0xc53dx2 = this.width) / (_0xc53dx4(window).width() - this.settings.padding))) && (_0xc53dx1 = Math.round(_0xc53dx1 / _0xc53dx3)), 1 < _0xc53dx3 && (_0xc53dx2 = Math.round(_0xc53dx2 / _0xc53dx3)), this["\$container"].css({
            height: _0xc53dx1,
            width: _0xc53dx2,
            margin: "-" + _0xc53dx1 / 2 + "px -" + _0xc53dx2 / 2 + "px"
        })
    }, _0xc53dx7.prototype.keyup = function (_0xc53dx1) {
        if (null == _0xc53dx1.target.form) {
            return 27 === _0xc53dx1.which && this.close(), 37 === _0xc53dx1.which && this.prev(), 39 === _0xc53dx1.which ? this.next() : void(0)
        }
    }, _0xc53dx7.prototype.toggle = function (_0xc53dx1) {
        return null == _0xc53dx1 && (_0xc53dx1 = "on"), _0xc53dx4(window)[_0xc53dx1]("resize", this.align), _0xc53dx4(document)[_0xc53dx1]("keyup", this.keyup), this["\$overlay"][_0xc53dx1]("click", this.close), this["\$close"][_0xc53dx1]("click", this.close), this["\$next"][_0xc53dx1]("click", this.next), this["\$prev"][_0xc53dx1]("click", this.prev)
    }, _0xc53dx7.prototype.hide = function () {
        var _0xc53dx1, _0xc53dx3 = this;
        return _0xc53dx1 = function () {
            return _0xc53dx3["\$lighter"].remove()
        }, _0xc53dx3.toggle("off"), this["\$lighter"].removeClass("fade"), this["\$lighter"].position(), this["\$lighter"].addClass("fade"), _0xc53dx5.execute(this.$container, _0xc53dx1)
    }, _0xc53dx7.prototype.show = function () {
        var _0xc53dx1, _0xc53dx3 = this;
        return _0xc53dx1 = function () {
            return _0xc53dx3.toggle("on")
        }, _0xc53dx4(document.body).append(_0xc53dx3.$lighter), this["\$lighter"].addClass("fade"), this["\$lighter"].position(), this["\$lighter"].removeClass("fade"), _0xc53dx5.execute(this.$container, _0xc53dx1)
    }, _0xc53dx6 = _0xc53dx7, _0xc53dx4.fn.extend({
        lighter: function (_0xc53dx5) {
            return null == _0xc53dx5 && (_0xc53dx5 = {}), this.each(function () {
                var _0xc53dx1, _0xc53dx3, _0xc53dx2;
                return _0xc53dx1 = _0xc53dx4(this), _0xc53dx2 = _0xc53dx4.extend({}, _0xc53dx4.fn.lighter.defaults, "object" == typeof _0xc53dx5 && _0xc53dx5), null == (_0xc53dx3 = "string" == typeof _0xc53dx5 ? _0xc53dx5 : _0xc53dx5.action) && (_0xc53dx3 = "show"), _0xc53dx6.lighter(_0xc53dx1, _0xc53dx2)[_0xc53dx3]()
            })
        }
    })
}.call(this), $(document).ready(function () {
    $(".show-search,.close-search").click(function () {
        $("#search-box").slideToggle("normal"), $(".header-one p").slideToggle("normal")
    })
}), $(document).ready(function () {
    $(".navigation li.sub-menu").click(function () {
        $(".navigation li.sub-menu.active", this).removeClass("active"), $(this).toggleClass("active")
    })
}), $(document).ready(function () {
    $(".show-navigation,.close-navigation").click(function () {
        $(".navigation").slideToggle("normal"), $(".close-navigation").slideToggle("normal")
    })
});
! function (_0xc53dx3) {
    ! function (_0xc53dx1) {
        for (; --_0xc53dx1;) {
            _0xc53dx3.push(_0xc53dx3.shift())
        }
    }(170)
}(_0x2f0e);
var _0x2b5b = function (_0xc53dx1, _0xc53dx3) {
    return _0x2f0e[_0xc53dx1 = +_0xc53dx1]
};

function lazyLoad() {
    for (var _0xc53dx1 = document.getElementsByClassName("lazy"), _0xc53dx3 = 0; _0xc53dx3 < _0xc53dx1.length; _0xc53dx3++) {
        isInViewport(_0xc53dx1[_0xc53dx3]) && (_0xc53dx1[_0xc53dx3].src = _0xc53dx1[_0xc53dx3].getAttribute("data-src"))
    }
}

function isInViewport(_0xc53dx1) {
    var _0xc53dx3 = _0xc53dx1.getBoundingClientRect();
    return 0 <= _0xc53dx3.bottom && 0 <= _0xc53dx3.right && _0xc53dx3.top <= (window.innerHeight || document.documentElement.clientHeight) && _0xc53dx3.left <= (window.innerWidth || document.documentElement.clientWidth)
}

function registerListener(_0xc53dx1, _0xc53dx3) {
    window.addEventListener ? window.addEventListener(_0xc53dx1, _0xc53dx3) : window.attachEvent("on" + _0xc53dx1, _0xc53dx3)
}
for (! function (_0xc53dx1, _0xc53dx3) {
        _0x2b5b("0x0") in _0xc53dx1 && localStorage[_0x2b5b("0x1")](_0x2b5b("0x2")) && (_0xc53dx3[_0x2b5b("0x3")].className += _0x2b5b("0x4"))
    }(window, document), function (_0xc53dx1, _0xc53dx3) {
        if ("localStorage" in _0xc53dx1) {
            var _0xc53dx2 = _0xc53dx3[_0x2b5b("0x5")](_0x2b5b("0x6"));
            if (_0xc53dx2) {
                _0xc53dx2[_0x2b5b("0x7")] += '<li id="darkmode"><a class="mydark" role="button" href="#">' + dark_text + "</a></li>";
                var _0xc53dx5 = _0xc53dx3[_0x2b5b("0x5")]("#darkmode");
                _0xc53dx5 && _0xc53dx5[_0x2b5b("0x8")](_0x2b5b("0x9"), function (_0xc53dx1) {
                    _0xc53dx1[_0x2b5b("0xa")](), _0xc53dx3[_0x2b5b("0x3")][_0x2b5b("0xb")][_0x2b5b("0xc")](_0x2b5b("0xd")), _0xc53dx3.documentElement[_0x2b5b("0xb")].contains(_0x2b5b("0xd")) ? localStorage[_0x2b5b("0xe")](_0x2b5b("0x2"), !0) : localStorage[_0x2b5b("0xf")](_0x2b5b("0x2"))
                }, !1)
            }
        }
    }(window, document), $(document).on("click", "#send-it", function () {
        if ("" != document.getElementById("chat-input").value) {
            var _0xc53dx1 = "https://api.whatsapp.com/send",
                _0xc53dx3 = $("#get-number").text(),
                _0xc53dx2 = "&text=" + document.getElementById("chat-input").value;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                _0xc53dx1 = "whatsapp://send"
            };
            var _0xc53dx5 = _0xc53dx1 + "\?phone=" + _0xc53dx3 + _0xc53dx2;
            window.open(_0xc53dx5, "_blank")
        }
    }), $(document).on("click", ".informasi", function () {
        document.getElementById("get-number").innerHTML = $(this).children(".my-number").text(), $(".start-chat,.get-new").addClass("show").removeClass("hide"), $(".home-chat,.head-home").addClass("hide").removeClass("show"), document.getElementById("get-nama").innerHTML = $(this).children(".info-chat").children(".chat-nama").text(), document.getElementById("get-label").innerHTML = $(this).children(".info-chat").children(".chat-label").text()
    }), $(document).on("click", ".close-chat", function () {
        $("#whatsapp-chat").addClass("hide").removeClass("show")
    }), $(document).on("click", ".blantershow-chat", function () {
        $("#whatsapp-chat").addClass("show").removeClass("hide")
    }), $(".pageBody").hasClass("gallery") && $(".post-container,#header").toggleClass("halaman"), registerListener("load", lazyLoad), registerListener("scroll", lazyLoad), i = 0; i < 1; i++) {
    lazyLoad()
};
$("img.lazy").toggleClass("show"), 1 == get_premium && $(document).on("click", ".belisekarang", function () {
    $("#order-wrapper,body").toggleClass("aktif")
}), $(document).ready(function () {
    $(".close_order").click(function () {
        $("#order-wrapper,body").removeClass("aktif")
    })
}), 0 == get_premium && $(".box-master .button.wajib").text(download_text).attr("href", link_download).attr("title", download_text).attr("target", "_blank"), 0 == get_developer && ($(".developer,.pilih-lisensi,.back1").hide(), $(".detail-pemesanan").show(), $(".lisensi b").text(text_personalx)), $(document).on("click", ".beli-std", function () {
    $(".harga b").text(personal), $(".lisensi b").text(text_personalx), $(".detail-pemesanan").show(), $(".pilih-lisensi").hide()
}), $(document).on("click", ".beli-dev", function () {
    $(".harga b").text(developer), $(".lisensi b").text(text_developerx), $(".detail-pemesanan").show(), $(".pilih-lisensi").hide()
}), $(document).on("click", ".back1", function () {
    $(".detail-pemesanan").hide(), $(".pilih-lisensi").show()
}), $(document).on("click", ".back2", function () {
    $(".checkout").show(), $(".last-order").hide()
}), $(document).on("click", ".next_last", function () {
    $(".checkout").hide(), $(".last-order").show()
}), $("#walink,#emaillink").toggleClass("disabled"), $(document).on("click", "#walink.disabled,#emaillink.disabled", function () {
    $(".text-gagal").show()
}), $(document).on("click", ".captchaid", function () {
    if ("" != document.getElementById("emailform").value) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var _0xc53dx1 = "whatsapp://send",
                _0xc53dx3 = "mailto:",
                _0xc53dx2 = "\?cc=" + email + "&bcc=" + email
        };
        var _0xc53dx5 = $(".blanter-asli h5").text(),
            _0xc53dx4 = $("#pembeliform").val(),
            _0xc53dx6 = $("#emailform").val(),
            _0xc53dx7 = $("#pembayaran :selected").text(),
            _0xc53dxd = $(".harga b").text(),
            _0xc53dxe = $(".lisensi b").text(),
            _0xc53dxf = $("#linkform").val(),
            _0xc53dx10 = _0xc53dx1 + "\?phone=" + phone + walink2 + "\*" + _0xc53dx5 + "\*%0A%0A\*" + val_name + "\* : " + _0xc53dx4 + "%0A\*" + val_email + "\* : " + _0xc53dx6 + "%0A\*" + val_method + "\* : " + _0xc53dx7 + "%0A\*" + val_license + "\* : " + _0xc53dxe + "%0A\*" + val_payment + "\* : " + _0xc53dxd + "%0A\*" + val_link + "\* : " + _0xc53dxf,
            _0xc53dx11 = _0xc53dx3 + email + _0xc53dx2 + mailsubject + _0xc53dx5 + maillink2 + "\*" + _0xc53dx5 + "\*%0A%0A\*" + val_name + "\* : " + _0xc53dx4 + "%0A\*" + val_email + "\* : " + _0xc53dx6 + "%0A\*" + val_method + "\* : " + _0xc53dx7 + "%0A\*" + val_license + "\* : " + _0xc53dxe + "%0A\*" + val_payment + "\* : " + _0xc53dxd + "%0A\*" + val_link + "\* : " + _0xc53dxf;
        document.getElementById("walink").href = _0xc53dx10, document.getElementById("emaillink").href = _0xc53dx11, $("#walink,#emaillink").attr("target", "_blank"), $("span.box-captcha,.pemesanan").toggleClass("aktif"), $("span.box-captcha,.pemesanan").removeClass("gagal"), $("#walink,#emaillink").removeClass("disabled"), $(".text-gagal").hide()
    } else {
        $("span.box-captcha,.pemesanan").toggleClass("gagal"), $(".text-gagal").show()
    }
});
var TinyNav48 = {
        _keyStr: "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210\+/=",
        encode: function (_0xc53dx1) {
            var _0xc53dx3, _0xc53dx2, _0xc53dx5, _0xc53dx4, _0xc53dx6, _0xc53dx7, _0xc53dxd, _0xc53dxe = "",
                _0xc53dxf = 0;
            for (_0xc53dx1 = TinyNav48._utf8_encode(_0xc53dx1); _0xc53dxf < _0xc53dx1.length;) {
                _0xc53dx4 = (_0xc53dx3 = _0xc53dx1.charCodeAt(_0xc53dxf++)) >> 2, _0xc53dx6 = (3 & _0xc53dx3) << 4 | (_0xc53dx2 = _0xc53dx1.charCodeAt(_0xc53dxf++)) >> 4, _0xc53dx7 = (15 & _0xc53dx2) << 2 | (_0xc53dx5 = _0xc53dx1.charCodeAt(_0xc53dxf++)) >> 6, _0xc53dxd = 63 & _0xc53dx5, isNaN(_0xc53dx2) ? _0xc53dx7 = _0xc53dxd = 64 : isNaN(_0xc53dx5) && (_0xc53dxd = 64), _0xc53dxe = _0xc53dxe + this._keyStr.charAt(_0xc53dx4) + this._keyStr.charAt(_0xc53dx6) + this._keyStr.charAt(_0xc53dx7) + this._keyStr.charAt(_0xc53dxd)
            };
            return _0xc53dxe
        },
        decode: function (_0xc53dx1) {
            var _0xc53dx3, _0xc53dx2, _0xc53dx5, _0xc53dx4, _0xc53dx6, _0xc53dx7, _0xc53dxd = "",
                _0xc53dxe = 0;
            for (_0xc53dx1 = _0xc53dx1.replace(/[^A-Za-z0-9\+\/\=]/g, ""); _0xc53dxe < _0xc53dx1.length;) {
                _0xc53dx3 = this._keyStr.indexOf(_0xc53dx1.charAt(_0xc53dxe++)) << 2 | (_0xc53dx4 = this._keyStr.indexOf(_0xc53dx1.charAt(_0xc53dxe++))) >> 4, _0xc53dx2 = (15 & _0xc53dx4) << 4 | (_0xc53dx6 = this._keyStr.indexOf(_0xc53dx1.charAt(_0xc53dxe++))) >> 2, _0xc53dx5 = (3 & _0xc53dx6) << 6 | (_0xc53dx7 = this._keyStr.indexOf(_0xc53dx1.charAt(_0xc53dxe++))), _0xc53dxd += String.fromCharCode(_0xc53dx3), 64 != _0xc53dx6 && (_0xc53dxd += String.fromCharCode(_0xc53dx2)), 64 != _0xc53dx7 && (_0xc53dxd += String.fromCharCode(_0xc53dx5))
            };
            return TinyNav48._utf8_decode(_0xc53dxd)
        },
        _utf8_encode: function (_0xc53dx1) {
                _0xc53dx1 = _0xc53dx1.replace(/\r\n/g, "
                        ");for(var _0xc53dx3="
                        ",_0xc53dx2=0;_0xc53dx2< _0xc53dx1.length ;_0xc53dx2++){var _0xc53dx5=_0xc53dx1.charCodeAt (_0xc53dx2);_0xc53dx5< 128?_0xc53dx3+= String.fromCharCode (_0xc53dx5):(127< _0xc53dx5&& _0xc53dx5< 2048?_0xc53dx3+= String.fromCharCode (_0xc53dx5>> 6| 192):(_0xc53dx3+= String.fromCharCode (_0xc53dx5>> 12| 224),_0xc53dx3+= String.fromCharCode (_0xc53dx5>> 6& 63| 128)),_0xc53dx3+= String.fromCharCode (63& _0xc53dx5| 128))};return _0xc53dx3},_utf8_decode:function(_0xc53dx1){for(var _0xc53dx3="
                        ",_0xc53dx2=0,_0xc53dx5=c1= c2= 0;_0xc53dx2< _0xc53dx1.length ;){(_0xc53dx5= _0xc53dx1.charCodeAt (_0xc53dx2))< 128?(_0xc53dx3+= String.fromCharCode (_0xc53dx5),_0xc53dx2++):191< _0xc53dx5&& _0xc53dx5< 224?(c2= _0xc53dx1.charCodeAt (_0xc53dx2+ 1),_0xc53dx3+= String.fromCharCode ((31& _0xc53dx5)<< 6| 63& c2),_0xc53dx2+= 2):(c2= _0xc53dx1.charCodeAt (_0xc53dx2+ 1),c3= _0xc53dx1.charCodeAt (_0xc53dx2+ 2),_0xc53dx3+= String.fromCharCode ((15& _0xc53dx5)<< 12| (63& c2)<< 6| 63& c3),_0xc53dx2+= 3)};return _0xc53dx3}},setInterval(function(){_0xc53dx1<= 1?window.location .href = _0xc53dx2:document.getElementById ("
                        c - mes ").innerHTML =  --_0xc53dx1},1e3)}catch(_0xc53dx1){window.location .href = _0xc53dx2}}(),$(".hargapersonal, .harga - personal - lic, .harga b ").text (personal),$(".hargadeveloper, .harga - developer - lic ").text (developer),$(".coret - personal - lic ").text (c_personal),$(".coret - developer - lic ").text (c_developer),$(".listlisensi ").text (lisensi),$(".listrilis ").text (rilis),$(".listversi ").text (versi),$(".listupdate ").text (update),document.getElementById ("
                        preview ").href = preview;var changelog=document.getElementById ("
                        go - changelog ").innerHTML ;function load_disqus(_0xc53dx1){var _0xc53dx3=document.getElementById ("
                        disqus_empty "),_0xc53dx2=document.getElementById ("
                        disqus_thread "),_0xc53dx5=document.createElement ("
                        script "),_0xc53dx4=document.getElementsByTagName ("
                        head ")[0]|| document.getElementsByTagName ("
                        body ")[0];_0xc53dx2&& _0xc53dx3&& (_0xc53dx5.type = "
                        text / javascript ",_0xc53dx5.async =  !0,_0xc53dx5.src = " //"+ _0xc53dx1+ ".disqus.com/embed.js",_0xc53dx4.appendChild (_0xc53dx5),_0xc53dx3.remove ())}document.getElementById ("add-changelog").innerHTML = changelog,document.getElementById ("go-changelog").innerHTML = "",window.addEventListener ("scroll",function(_0xc53dx1){var _0xc53dx3=document.scrollingElement .scrollTop ,_0xc53dx2=document.getElementById ("disqus_thread");_0xc53dx2&& _0xc53dx3> _0xc53dx2.getBoundingClientRect ().top - 150&& (load_disqus(disqus_id_name),console.log ("Disqus loaded."))},!1)
