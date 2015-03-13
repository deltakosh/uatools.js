var uaTools = (function (uaTools) {
    var currentUA = navigator.userAgent || "";
    var currentLowerUA = currentUA.toLowerCase();

    uaTools.OPERATING_SYSTEMS = {
        WINDOWS_PHONE: "Windows Phone",
        WINDOWS: "Windows",
        ANDROID: "Android",
        IOS: "iOS",
        BLACKBERRY: "BlackBerry",
        KINDLE: "Kindle",
        MACINTOSH: "Macintosh",
        LINUX: "Linux",
        OPENBSD: "OpenBSD",
        FIREFOX_OS: "Firefox OS",
        UNKNOWN: "Unknown operating system"
    };

    uaTools.STORES = {
        WINDOWS_PHONE_STORE: "Windows Phone Store",
        WINDOWS_STORE: "Windows Store",
        ITUNES: "iTunes",
        GOOGLE_PLAY: "Google Play"
    };

    if (Object.freeze) {
        Object.freeze(uaTools.OPERATING_SYSTEMS);
        Object.freeze(uaTools.STORES);
        Object.seal(uaTools.OPERATING_SYSTEMS);
        Object.seal(uaTools.STORES);
        Object.preventExtensions(uaTools.OPERATING_SYSTEMS);
        Object.preventExtensions(uaTools.STORES);
    }

    function deprecated(newFunction) {
        return function () {
            if (console && console.warn) {
                console.warn('This method is deprecated!');
            }
            return newFunction.call(this, arguments);
        }
    }

    uaTools.isTablet = function () {
        return currentLowerUA.indexOf("tablet") >= 0;
    };
    uaTools.IsTablet = deprecated(uaTools.isTablet);

    uaTools.isMobile = function () {
        return currentLowerUA.indexOf("mobile") >= 0;
    };
    uaTools.IsMobile = deprecated(uaTools.isMobile);

    uaTools.getUserAgentString = function () {
        return currentUA;
    };
    uaTools.GetUserAgentString = deprecated(uaTools.getUserAgentString);

    uaTools.getStore = function () {
        // Features testing first
        if (window.chrome && window.chrome.app) {
            return uaTools.STORES.GOOGLE_PLAY;
        }

        // Get OS then
        var os = uaTools.getOperatingSystem();

        switch (os) {
            case uaTools.OPERATING_SYSTEMS.WINDOWS_PHONE:
                return uaTools.STORES.WINDOWS_PHONE_STORE;
            case uaTools.OPERATING_SYSTEMS.WINDOWS:
                return uaTools.STORES.WINDOWS_STORE;
            case uaTools.OPERATING_SYSTEMS.IOS:
                return uaTools.STORES.ITUNES;
            default:
                return os;
        }
    };
    uaTools.GetStore = deprecated(uaTools.getStore);

    uaTools.getOperatingSystem = function () {
        if (currentLowerUA.indexOf("windows phone") >= 0) {
            return uaTools.OPERATING_SYSTEMS.WINDOWS_PHONE;
        }

        if (currentLowerUA.indexOf("windows") >= 0) {
            return uaTools.OPERATING_SYSTEMS.WINDOWS;
        }

        if (currentLowerUA.indexOf("android") >= 0) {
            return uaTools.OPERATING_SYSTEMS.ANDROID;
        }

        if (currentLowerUA.indexOf("apple-i") >= 0) {
            return uaTools.OPERATING_SYSTEMS.IOS;
        }

        if (currentLowerUA.indexOf("iphone") >= 0) {
            return uaTools.OPERATING_SYSTEMS.IOS;
        }

        if (currentLowerUA.indexOf("ipad") >= 0) {
            return uaTools.OPERATING_SYSTEMS.IOS;
        }

        if (currentLowerUA.indexOf("blackberry") >= 0) {
            return uaTools.OPERATING_SYSTEMS.BLACKBERRY;
        }

        if (currentLowerUA.indexOf("(bb") >= 0) {
            return uaTools.OPERATING_SYSTEMS.BLACKBERRY;
        }

        if (currentLowerUA.indexOf("kindle") >= 0) {
            return uaTools.OPERATING_SYSTEMS.KINDLE;
        }

        if (currentLowerUA.indexOf("macintosh") >= 0) {
            return uaTools.OPERATING_SYSTEMS.MACINTOSH;
        }

        if (currentLowerUA.indexOf("linux") >= 0) {
            return uaTools.OPERATING_SYSTEMS.LINUX;
        }

        if (currentLowerUA.indexOf("openbsd") >= 0) {
            return uaTools.OPERATING_SYSTEMS.OPENBSD;
        }

        if (currentLowerUA.indexOf("firefox") >= 0) {
            return uaTools.OPERATING_SYSTEMS.FIREFOX_OS;
        }

        return uaTools.OPERATING_SYSTEMS.UNKNOWN;
    };
    uaTools.GetOperatingSystem = deprecated(uaTools.getOperatingSystem);

    return uaTools;
}(uaTools || {}));

//deprecated
var UATOOLS = uaTools;
