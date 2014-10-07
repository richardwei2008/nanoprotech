/*global $, jQuery, window: true, browser: true, alert: true, BMap, AppConfig, Beyond*/
var App = {};
App = {
    Config: AppConfig,
    alert: function (obj) {
        "use strict";
        Beyond.Common.alert(this.Config.DEBUG, obj);
    },

    mySwiper: null,

    formatRedirectUri : function(relativeTargetUri) {
        return (function() {
            return 'http://' + window.location.hostname + '/' + App.Config.ROOT + '/' + relativeTargetUri;
        }());
    },

    initSwiper: function() {
        mySwiper = new Swiper('.swiper-container',{
            pagination: '.pagination',
            loop:true,
            grabCursor: true,
            paginationClickable: false
        });
        $("#arrow-left").click(function(e){
            e.preventDefault();
            mySwiper.swipeNext();
        });
        $("#arrow-right").click( function(e){
            e.preventDefault();
            mySwiper.swipePrev();
        });
    }

};




