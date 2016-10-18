var UATOOLS;

(function (UATOOLS) {
    var currentUA = navigator.userAgent || "";

    var currentLowerUA = currentUA.toLowerCase();

    // Features
    UATOOLS.IsTablet = function () {
        return currentLowerUA.indexOf("tablet") >= 0;
    }

    UATOOLS.IsMobile = function () {
        return currentLowerUA.indexOf("mobile") >= 0;
    }

    UATOOLS.GetUserAgentString = function () {
        return currentUA;
    }

    UATOOLS.GetStore = function () {
        // Get OS then
        var os = UATOOLS.GetOperatingSystem();
        
        // Features testing first
        if (window.chrome && window.chrome.app && os !== "Windows Phone") {
            return "Google Play";
        }

        switch (os) {
            case "Windows Phone":
                return "Windows Phone Store";
            case "Windows":
                return "Windows Store";
            case "iOS":
                return "iTunes"; // Smart App Banner should be used as well
            default:
                return os;
        }
    }

    UATOOLS.GetOperatingSystem = function () {
        // Windows Phone
        if (currentLowerUA.indexOf("windows phone") >= 0) {
            return "Windows Phone";
        }

        // Windows
        if (currentLowerUA.indexOf("windows") >= 0) {
            return "Windows";
        }

        // Android
        if (currentLowerUA.indexOf("android") >= 0) {
            return "Android";
        }

        // iOS
        if (currentLowerUA.indexOf("apple-i") >= 0) {
            return "iOS";
        }

        if (currentLowerUA.indexOf("iphone") >= 0) {
            return "iOS";
        }

        if (currentLowerUA.indexOf("ipad") >= 0) {
            return "iOS";
        }

        // BlackBerry
        if (currentLowerUA.indexOf("blackberry") >= 0) {
            return "BlackBerry";
        }

        // BlackBerry
        if (currentLowerUA.indexOf("(bb") >= 0) {
            return "BlackBerry";
        }

        // Kindle
        if (currentLowerUA.indexOf("kindle") >= 0) {
            return "Kindle";
        }

        // Macintosh
        if (currentLowerUA.indexOf("macintosh") >= 0) {
            return "Macintosh";
        }

        // Linux
        if (currentLowerUA.indexOf("linux") >= 0) {
            return "Linux";
        }

        // OpenBSD
        if (currentLowerUA.indexOf("openbsd") >= 0) {
            return "OpenBSD";
        }

        // Firefox OS
        if (currentLowerUA.indexOf("firefox") >= 0) {
            return "Firefox OS"; // Web is the plaform
        }

        return "Unknown operating system";
    }

    UATOOLS.IsOpera = function () {
        // Opera 8.0+
        return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    }

    UATOOLS.IsFirefox = function () {
        // Firefox 1.0+
        return typeof InstallTrigger !== 'undefined';
    }

    UATOOLS.IsSafari = function () {
        // Safari <= 9 "[object HTMLElementConstructor]" 
        return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    }

    UATOOLS.IsIE = function () {
        // Internet Explorer 6-11
        return /*@cc_on!@*/false || !!document.documentMode;
    }

    UATOOLS.IsEdge = function () {
        // Edge 20+
        return !UATOOLS.IsIE() && !!window.StyleMedia;
    }

    UATOOLS.IsChrome = function () {
        // Chrome 1+
        return !!window.chrome && !!window.chrome.webstore;
    }

    UATOOLS.IsBlink = function () {
        // Blink engine detection
        return (UATOOLS.IsChrome() || UATOOLS.IsOpera()) && !!window.CSS;
    }

     // Features
    UATOOLS.IsWindowsVersionEqualOrAboveRS1 = function () {
        // is it Windows 10 ?
        if (currentLowerUA.indexOf("windows nt 10") < 0) {
            return false;
        }

        //Hack using canvas and font size which was handled differently previous to RS1 (Lower than 1607)
        var context = document.createElement('canvas').getContext('2d');

        context.font = '64px Segoe UI Emoji'
        var width = context.measureText('\uD83D\uDC31\u200D\uD83D\uDC64').width

        if (UATOOLS.IsChrome() || UATOOLS.IsFirefox() || UATOOLS.IsOpera() || UATOOLS.IsEdge()) {
            if (width <= 90) {
                return true;
            } 
            return false;
        }
        else if(UATOOLS.IsIE()){
            if (width > 128) {
                return true;
            } 
            return false;
        }
        
        return false;
    }

})(UATOOLS || (UATOOLS = {}));