var UATOOLS = (function (UATOOLS) {
    var currentUA = navigator.userAgent || "";
    var currentLowerUA = currentUA.toLowerCase();

    function deprecated(newFunction) {
        return function () {
            if (console && console.warn) {
                console.log('This method is deprecated!');
            }
            return newFunction.call(this, arguments);
        }
    }

    UATOOLS.isTablet = function () {
        return currentLowerUA.indexOf("tablet") >= 0;
    };
    UATOOLS.IsTablet = deprecated(UATOOLS.isTablet);

    UATOOLS.isMobile = function () {
        return currentLowerUA.indexOf("mobile") >= 0;
    };
    UATOOLS.IsMobile = deprecated(UATOOLS.isMobile);

    UATOOLS.getUserAgentString = function () {
        return currentUA;
    };
    UATOOLS.GetUserAgentString = deprecated(UATOOLS.getUserAgentString);

    UATOOLS.getStore = function () {
        // Features testing first
        if (window.chrome && window.chrome.app) {
            return "Google Play";
        }

        // Get OS then
        var os = UATOOLS.getOperatingSystem();

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
    };
    UATOOLS.GetStore = deprecated(UATOOLS.getStore);

    UATOOLS.getOperatingSystem = function () {
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
    };
    UATOOLS.GetOperatingSystem = deprecated(UATOOLS.getOperatingSystem);

    return UATOOLS;
}(UATOOLS || {}));
