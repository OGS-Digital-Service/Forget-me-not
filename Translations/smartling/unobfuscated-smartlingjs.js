SmtMenu = {};  

(function(){

// BEGIN SERVER DATA
SmtMenu.sdata =
{
	doRedirect 		: (typeof smtRedirect != "undefined") ? smtRedirect : false,
    defaultStyles 	: (typeof smtDefaultStyles != "undefined") ? smtDefaultStyles : true,
    autoPlace		: (typeof smtAuto != "undefined") ? smtAuto : false,
    preRender		: (typeof smtPreRender != "undefined") ? smtPreRender : null,
    postRender		: (typeof smtPostRender != "undefined") ? smtPostRender : null,	
    settings: (typeof smtAuto != "undefined" && smtAuto === true) ? smtSettings : {}, // if auto on, there must be settings
	openDir: (typeof smtOpenDir != "undefined") ? smtOpenDir : "down",
	scrollThresh: 15,
	stylePath: window.location.protocol + "//cdn01.smartling.com/ls/static/menu-v3.css",	
	sites 			: [
	{
							"en-us"	: { code : "en-us", name : "English", host : "coronavirus.health.ny.gov", word : "Language", def : true }
		,						"es-us"	: { code : "es-us", name : "Spanish (United States)", host : "es-us-e4325aa4498069b85.getsmartling.com", word : "Idioma", def : false }
				},	{
							"en-us"	: { code : "en-us", name : "English", host : "covid19vaccine.health.ny.gov", word : "Language", def : true }
		,						"es-us"	: { code : "es-us", name : "Spanish (United States)", host : "es-us-4f675f78373b803d7.getsmartling.com", word : "Idioma", def : false }
				},	{
							"en-us"	: { code : "en-us", name : "English", host : "forward.ny.gov", word : "Language", def : true }
		,						"es-us"	: { code : "es-us", name : "Spanish (United States)", host : "es-us-f4570eaefc419bf9b.getsmartling.com", word : "Idioma", def : false }
				}]
};
// END SERVER DATA

	
//END SOURCE CODE

var inlineStyles = {
    topRight: {
        root: {
            "position": "absolute",
            "top": "0px",
            "right": "0px",
            "width": "auto"
        }
    },
    botRight: {
        root: {
            "position": "fixed",
            "bottom": "0px",
            "right": "0px",
            "width": "auto"
        }
    }
};
SmtMenu.smdd = {
    redirecting: false,
    makeMenu: function(langs, cookieDomain) {
        if (SmtMenu.sdata.preRender) {
            SmtMenu.sdata.preRender(langs)
        }
        var address = (typeof smdebugurl != 'undefined') ? smdebugurl : window.location.host.toString();
        var script = lib.get(settings.scriptId);
        var root = lib.create("ul");
        root.style.display = 'none';
        lib.addClass(root, settings.rootClass);
        if ("autoPlace" in SmtMenu.sdata && SmtMenu.sdata.autoPlace === true) {
            lib.addClass(root, "smt-autoPlace")
        }
        var topLi = lib.create("li");
        lib.addClass(topLi, settings.triggerClass);
        var triggerLink = lib.create("a");
        lib.addClass(triggerLink, settings.triggerLink);
        if ("buttonBg" in SmtMenu.sdata.settings) {
            triggerLink.style.backgroundColor = SmtMenu.sdata.settings.buttonBg
        }
        var langLabel = lib.create("span");
        lib.addClass(langLabel, settings.wordClass);
        var currentLangSpan = lib.create("span");
        lib.addClass(currentLangSpan, settings.currentLangClass);
        if ("selectedColor" in SmtMenu.sdata.settings) {
            currentLangSpan.style.color = SmtMenu.sdata.settings.selectedColor
        }
        var lang = lib.getLocFromAddress(address, langs);
        var languageName, languageword, currentLang;
        if (lang in langs) {
            languageName = langs[lang].name;
            languageWord = langs[lang].word;
            currentLang = lang
        } else {
            var def = lib.getDefaultLang(langs);
            languageName = def.name;
            languageWord = def.word;
            currentLang = def.code
        }
        currentLangSpan.innerHTML = languageName.toUpperCase();
        langLabel.innerHTML = languageWord;
        triggerLink.appendChild(currentLangSpan);
        topLi.appendChild(triggerLink);
        root.appendChild(topLi);
        var items = lib.create("ul");
        if ("itemBg" in SmtMenu.sdata.settings) {
            items.style.backgroundColor = SmtMenu.sdata.settings.itemBg
        }
        if ("position" in SmtMenu.sdata.settings && SmtMenu.sdata.settings.position.match(/bot/) != null) {
            topLi.insertBefore(items, topLi.childNodes[0])
        } else {
            topLi.appendChild(items)
        }
        var qstring = window.location.search.replace(/(&|\?)smtNoRedir=1/, "").replace("?", "").replace(window.location.hash, "").replace(/^&/, "");
        var langLength = 0;
        for (var l in langs) {
            langLength++;
            var a = lib.create("a");
            var li = lib.create("li");
            lib.addClass(li, settings.itemClass);
            lib.addClass(a, settings.linkClass);
            var pre = (lib.debug) ? "#" : "";
            var isDefault = langs[l].def;
            var arr = (qstring.length > 0) ? qstring.split("&") : [];
            if (isDefault) {
                arr.push("smtNoRedir=1")
            }
            var q = (arr.length > 0) ? "?" + arr.join("&") : "";
            a.href = pre + window.location.protocol + "//" + langs[l].host + window.location.pathname + q + window.location.hash;
            a.innerHTML = langs[l].name;
            a.style.display = 'block';
            if ("itemColor" in SmtMenu.sdata.settings) {
                a.style.color = SmtMenu.sdata.settings.itemColor
            }
            li.appendChild(a);
            items.appendChild(li);
            a.onclick = (function(items, code) {
                return function() {
                    if (!langs[code].def) {
                        lib.setCookie(settings.cookieName, code, 360, '/', cookieDomain)
                    }
                }
            })(items, langs[l].code)
        }
        if ("position" in SmtMenu.sdata.settings) {
            for (var rule in inlineStyles[SmtMenu.sdata.settings.position].root) {
                root.style[rule] = inlineStyles[SmtMenu.sdata.settings.position].root[rule]
            }
            lib.addClass(root, "smt-" + SmtMenu.sdata.settings.position)
        }
        if (SmtMenu.sdata.autoPlace === true) {
            document.body.appendChild(root)
        } else {
            document.getElementById("smt-lang-selector").appendChild(root)
        }
        var timeout = null;
        var sfEls = root.getElementsByTagName("LI");
        if (langLength > SmtMenu.sdata.scrollThresh) {
            items.style.height = "320px";
            items.style.overflowY = "scroll"
        }
        lib.addEvent(triggerLink, "click", function() {
            items.style.display = 'block';
            lib.addClass(root, "smt-on");
            if (SmtMenu.sdata.openDir == "up") {
                height = items.offsetHeight;
                items.style.top = height * (-1) + "px"
            }
        });
        root.onmouseout = function(e) {
            if (typeof e == "undefined") {
                e = event
            }
            if (lib.isMouseLeaveOrEnter(e, this)) {
                items.style.display = "none";
                lib.removeClass(root, "smt-on")
            }
        };
        if (SmtMenu.sdata.postRender) {
            SmtMenu.sdata.postRender(root)
        }
        var loadCount = 0;
        var styleLoadInt = setInterval(function() {
            var styleLoaded = (lib.getStyle(root, "overflow") === "hidden");
            loadCount++;
            if (loadCount > 50 || styleLoaded || SmtMenu.sdata.defaultStyles === false) {
                root.style.display = "block";
                if (SmtMenu.sdata.defaultStyles) {
                    root.style.overflow = "visible"
                }
                clearInterval(styleLoadInt);
                var width = parseFloat(lib.getStyle(root, "width").replace("px", ""));
                items.style.width = (width - 2) + "px"
            }
        }, 100)
    }
};
var lib = {
    debug: false,
    debugBrowserPref: true,
    log: function(str, title) {
        if (lib.debug && console) {
            if (title) {
                console.log(title, str)
            } else {
                console.log(str)
            }
        }
    },
    create: function(s) {
        return document.createElement(s)
    },
    get: function(s) {
        return document.getElementById(s)
    },
    addEvent: function(elm, evType, fn, useCapture) {
        if (elm.addEventListener) {
            elm.addEventListener(evType, fn, useCapture);
            return true
        } else if (elm.attachEvent) {
            var r = elm.attachEvent('on' + evType, fn);
            return r
        } else {
            elm['on' + evType] = fn;
            return true
        }
    },
    isMouseLeaveOrEnter: function(e, handler) {
        var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;
        while (reltg && reltg != handler) reltg = reltg.parentNode;
        return (reltg != handler)
    },
    getLocFromAddress: function(host, langs) {
        var ret = null;
        for (var l in langs) {
            var obj = langs[l];
            if (obj.host == host) {
                ret = l
            }
        }
        return ret
    },
    addClass: function(elem, value) {
        if (value && typeof value === "string") {
            var classNames = (value || "").split(" ");
            if (elem.nodeType === 1) {
                if (!elem.className) {
                    elem.className = value
                } else {
                    var className = " " + elem.className + " ",
                        setClass = elem.className;
                    for (var c = 0, cl = classNames.length; c < cl; c++) {
                        if (className.indexOf(" " + classNames[c] + " ") < 0) {
                            setClass += " " + classNames[c]
                        }
                    }
                    elem.className = setClass
                }
            }
        }
    },
    removeClass: function(elem, value) {
        elem.className = elem.className.replace(new RegExp(value, "g"), "")
    },
    addOnReadyEvent: function(fnc) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", fnc, false)
        } else {
            this.addOnloadEvent(fnc)
        }
    },
    addOnloadEvent: function(fnc) {
        if (typeof window.addEventListener != "undefined") window.addEventListener("load", fnc, false);
        else if (typeof window.attachEvent != "undefined") {
            window.attachEvent("onload", fnc)
        } else {
            if (window.onload != null) {
                var oldOnload = window.onload;
                window.onload = function(e) {
                    oldOnload(e);
                    window[fnc]()
                }
            } else window.onload = fnc
        }
    },
    getDefaultLang: function(langs) {
        for (lang in langs) {
            return langs[lang]
        }
    },
    setCookie: function(name, value, expiresDays, path, domain, secure) {
        if (expiresDays) {
            var today = new Date();
            var expires = new Date(today.getTime() + (expiresDays * 1000 * 3600 * 24))
        }
        var curCookie = name + "=" + escape(value) + ((expiresDays) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
        document.cookie = curCookie
    },
    getCookie: function(name) {
        var prefix = name + "=";
        var cookieStartIndex = document.cookie.indexOf(prefix);
        if (cookieStartIndex == -1) {
            return null
        }
        var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
        if (cookieEndIndex == -1) {
            cookieEndIndex = document.cookie.length
        }
        return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
    },
    isRedirectNeeded: function(domain, url) {
        var currentHost = window.location.host.split(':')[0];
        return ((domain == currentHost) && (url.indexOf('://' + currentHost) == -1))
    },
    getDefaultDomain: function(sites) {
        var ret = null;
        for (var l in sites) {
            if (sites[l].def) {
                ret = sites[l].host
            }
        }
        return ret
    },
    getCookieDomain: function(domain) {
        var dom = domain.split(".").reverse();
        dom = "." + dom[1] + "." + dom[0];
        return dom
    },
    getUrlWithCurrentPath: function(url) {
        var path = window.location.pathname;
        if (url.lastIndexOf('/') == url.length - 1) {
            path = path.substring(1, path.length)
        }
        var search = window.location.search;
        var protocol = window.location.protocol + "//";
        var hash = window.location.hash;
        return protocol + url + path + search + hash
    },
    getStyle: function(el, styleProp) {
        if (el.currentStyle) var y = el.currentStyle[styleProp];
        else if (window.getComputedStyle) var y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        return y
    },
    getParam: function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) return null;
        else return results[1]
    }
};
SmtMenu.lib = lib;
SmtMenu.redirect = function(originalDomain, cookieDomain, sites) {
    var getCurrentLocale = function() {
        if (lib.getParam("smtLoc") !== null) {
            return lib.getParam("smtLoc")
        }
        var ret = (navigator.userLanguage) ? (navigator.userLanguage) : (window.navigator.language);
        try {
            return ret.toLowerCase()
        } catch (ex) {
            return ""
        }
    };
    var getCurrentLanguage = function() {
        return getCurrentLocale().split('-')[0]
    };
    var doRedirect = function(site) {
        lib.setCookie(settings.cookieName, site.code, 360, '/', cookieDomain, '');
        var newAddress = lib.getUrlWithCurrentPath(site.host);
        if (window.location.host != site.host) {
            SmtMenu.smdd.redirecting = true;
            window.location = newAddress
        }
    };
    var isCookieSet = function() {
        return (document.cookie.indexOf(settings.cookieName + '=') == -1) ? false : true
    };
    var isCookiesEnabled = function() {
        lib.setCookie("test", 1, 360, '/', cookieDomain, '');
        return (document.cookie.indexOf("test" + '=') == -1) ? false : true
    };
    this.doRedirectByBrowserPreferences = function(args) {
        var retVal = null;
        if (args.cookiesEnabled) {
            if (typeof smtRedirectMapper === "function") {
                retVal = smtRedirectMapper(args.locale, args.sites)
            } else {
                var locale = args.locale.toLowerCase();
                if (locale in args.sites && locale != args.def.code.toLowerCase()) {
                    retVal = args.sites[locale]
                } else {
                    var language = args.language;
                    if (language != args.def.code) {
                        if (args.language in args.sites) {
                            retVal = args.sites[args.language]
                        }
                    }
                }
            }
        }
        return retVal
    };
    var getSiteByLastVisited = function() {
        if (isCookiesEnabled()) {
            var l = getLastVisitedByCookie();
            if (sites[l]) {
                return sites[l]
            }
            return null
        }
    };
    var getLastVisitedByCookie = function() {
        return lib.getCookie(settings.cookieName)
    };
    var getValidLastVisitedHost = function() {
        var url = lib.getCookie(settings.cookieName);
        for (var language in sites) {
            if (url == sites[language]) {
                return url
            }
        }
        return null
    };
    this.initialize = function() {
        var site = getSiteByLastVisited();
        var args = {
            cookiesEnabled: isCookiesEnabled(),
            locale: getCurrentLocale(),
            debugging: redirectDebug,
            sites: sites,
            language: getCurrentLanguage(),
            def: lib.getDefaultLang(sites)
        };
        var targetSite = null;
        if (redirectDebug === true) {
            doRedirect = function(site) {
                console.log("Redirecting to:");
                console.log(site)
            }
        }
        if (!isCookieSet()) {
            targetSite = this.doRedirectByBrowserPreferences(args)
        } else {
            if (site && site.host != window.location.host) {
                targetSite = site
            } else {
                targetSite = this.doRedirectByBrowserPreferences(args)
            }
        } if (targetSite) {
            doRedirect(targetSite)
        }
    };
    this.initialize()
};
try {
    var settings = {
        scriptId: "smt-script",
        rootClass: "smt-menu",
        itemClass: "smt-item",
        linkClass: "smt-link",
        wordClass: "smt-word",
        currentLangClass: "smt-lang",
        triggerClass: "smt-trigger",
        triggerLink: "smt-trigger-link",
        cookieName: "_smtLastVisitedHost",
        defaultStyles: true
    };
    var sites = null;
    var currHost = window.location.host;
    for (var i = 0; i < SmtMenu.sdata.sites.length; i++) {
        for (var site in SmtMenu.sdata.sites[i]) {
            if (currHost == SmtMenu.sdata.sites[i][site].host) {
                sites = SmtMenu.sdata.sites[i];
                SmtMenu.currentSites = sites
            }
        }
    }
    if (sites == null) {
        sites = SmtMenu.sdata.sites[SmtMenu.sdata.sites.length - 1];
        SmtMenu.currentSites = sites;
        SmtMenu.sdata.doRedirect = false
    }
    if (sites && (typeof smtUnitTesting == "undefined")) {
        var originalDomain = lib.getDefaultDomain(sites);
        var cookieDomain = lib.getCookieDomain(originalDomain);
        SmtMenu.cookieDomain = cookieDomain;
        var cookieNoRedirect = (lib.getCookie(settings.cookieName) == "noredirect");
        var urlNoRedirect = (window.location.href.match(/smtNoRedir/) != null);
        var redirectDebug = (window.location.href.match(/redirectDebug/) != null);
        if (urlNoRedirect) {
            lib.setCookie(settings.cookieName, "noredirect", 360, '/', cookieDomain)
        }
        var isOpera = (/Opera/.test(navigator.userAgent));
        if (!urlNoRedirect && (typeof smtRedirect != "undefined" && smtRedirect === true && window.location.host == originalDomain && !cookieNoRedirect && !isOpera)) {
            new SmtMenu.redirect(originalDomain, cookieDomain, sites)
        }
        if (!SmtMenu.smdd.redirecting) {
            lib.addOnReadyEvent(function() {
                SmtMenu.smdd.makeMenu(sites, cookieDomain)
            })
        }
        if (typeof smtDefaultStyles != "undefined" && smtDefaultStyles === true) {
            document.write("<link rel='stylesheet' href='" + SmtMenu.sdata.stylePath + "'></link>")
        }
    }
} catch (ex) {}

// END// end minified

}());
