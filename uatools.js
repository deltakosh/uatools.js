var UATOOLS;

(function (UATOOLS) {
    var currentUA = navigator.userAgent || "";

    var currentLowerUA = currentUA.toLowerCase();

    // Features
    UATOOLS.IsMobile = function() {
        return currentUA.indexOf("mobile") >= 0;
    }

    UATOOLS.GetUserAgentString = function () {
        return currentUA;
    }

    UATOOLS.GetOperatingSystem = function () {
        // Windows Phone
        if (currentLowerUA.indexOf("Windows Phone") >= 0) {
            return "Windows";
        }

        // Windows
        if (currentLowerUA.indexOf("windows") >= 0) {
            return "Windows";
        }

        // Android
        if (currentLowerUA.indexOf("android") >= 0) {
            return "Android";
        }
    }
})(UATOOLS || (UATOOLS = {}));