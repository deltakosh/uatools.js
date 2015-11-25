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
})(UATOOLS || (UATOOLS = {}));