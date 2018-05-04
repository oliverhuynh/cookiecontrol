[Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function(e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function() {
            var e = Array.prototype.slice.call(arguments),
                t = document.createDocumentFragment();
            e.forEach(function(e) {
                var o = e instanceof Node;
                t.appendChild(o ? e : document.createTextNode(String(e)))
            }), this.appendChild(t)
        }
    })
});
var acceptedState = "accepted",
    revokedState = "revoked",
    CookieControl = function() {
        var e = {
                COMMUNITY: "CookieControl Free",
                PRO: "CookieControl Single-Site",
                PRO_MULTISITE: "CookieControl Multi-Site"
            },
            t = null,
            o = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB"],
            n = ["Belgium", "Bulgaria", "Czech Republic", "Denmark", "Germany", "Estonia", "Ireland", "Greece", "Spain", "France", "Croatia", "Italy", "Cyprus", "Latvia", "Lithuania", "Luxembourg", "Hungary", "Malta", "Netherlands", "Austria", "Poland", "Portugal", "Romania", "Slovenia", "Slovakia", "Finland", "Sweden", "United Kingdom"],
            i = ["branding", "excludedCountries", "locales"],
            r = {
                iconLeft: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72.5 72.5" enable-background="new 0 0 72.5 72.5" xml:space="preserve"><g id="triangle"><path d="M0,0l72.5,72.5H0V0z"/></g><g id="star"><path d="M33.2,51.9l-3.9-2.6l1.6-4.4l-4.7,0.2L25,40.6l-3.7,2.9l-3.7-2.9l-1.2,4.5l-4.7-0.2l1.6,4.4l-3.9,2.6l3.9,2.6l-1.6,4.4l4.7-0.2l1.2,4.5l3.7-2.9l3.7,2.9l1.2-4.5l4.7,0.2l-1.6-4.4L33.2,51.9z M24.6,55.3c-0.3,0.4-0.8,0.8-1.3,1s-1.1,0.3-1.9,0.3c-0.9,0-1.7-0.1-2.3-0.4s-1.1-0.7-1.5-1.4c-0.4-0.7-0.6-1.6-0.6-2.6c0-1.4,0.4-2.5,1.1-3.3c0.8-0.8,1.8-1.1,3.2-1.1c1.1,0,1.9,0.2,2.6,0.7s1.1,1.1,1.4,2L23,50.9c-0.1-0.3-0.2-0.5-0.3-0.6c-0.1-0.2-0.3-0.4-0.5-0.5s-0.5-0.2-0.7-0.2c-0.6,0-1.1,0.2-1.4,0.7c-0.2,0.4-0.4,0.9-0.4,1.7c0,1,0.1,1.6,0.4,2c0.3,0.4,0.7,0.5,1.2,0.5c0.5,0,0.9-0.1,1.2-0.4s0.4-0.7,0.6-1.2l2.3,0.7C25.2,54.3,25,54.8,24.6,55.3z"/></g></svg>',
                iconRight: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72.5 72.5" enable-background="new 0 0 72.5 72.5" xml:space="preserve"><g id="triangle"><path d="M72.5,72.5H0L72.5,0V72.5z"/></g><g id="star"><path d="M62.2,51.9l-3.9-2.6l1.6-4.4l-4.7,0.2L54,40.6l-3.7,2.9l-3.7-2.9l-1.2,4.5l-4.7-0.2l1.6,4.4l-3.9,2.6l3.9,2.6l-1.6,4.4l4.7-0.2l1.2,4.5l3.7-2.9l3.7,2.9l1.2-4.5l4.7,0.2l-1.6-4.4L62.2,51.9z M53.6,55.3c-0.3,0.4-0.8,0.8-1.3,1s-1.1,0.3-1.9,0.3c-0.9,0-1.7-0.1-2.3-0.4s-1.1-0.7-1.5-1.4c-0.4-0.7-0.6-1.6-0.6-2.6c0-1.4,0.4-2.5,1.1-3.3c0.8-0.8,1.8-1.1,3.2-1.1c1.1,0,1.9,0.2,2.6,0.7s1.1,1.1,1.4,2L52,50.9c-0.1-0.3-0.2-0.5-0.3-0.6c-0.1-0.2-0.3-0.4-0.5-0.5s-0.5-0.2-0.7-0.2c-0.6,0-1.1,0.2-1.4,0.7c-0.2,0.4-0.4,0.9-0.4,1.7c0,1,0.1,1.6,0.4,2c0.3,0.4,0.7,0.5,1.2,0.5c0.5,0,0.9-0.1,1.2-0.4s0.4-0.7,0.6-1.2l2.3,0.7C54.2,54.3,54,54.8,53.6,55.3z"/></g></svg>',
                iconClose: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
            },
            a = {
                overlayStyling: "position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 1; background: rgba(0,0,0,0.8); -webkit-transition: opacity 0.4s, -webkit-transform 0s; transition: opacity 0.4s, -webkit-transform 0s; -o-transition: transform 0s, opacity 0.4s; transition: transform 0s, opacity 0.4s; transition: transform 0s, opacity 0.4s, -webkit-transform 0s; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-perspective: 1000; perspective: 1000; will-change: transform, opacity; -webkit-transform: translate3d(0%, -100%, 0); transform: translate3d(0%, -100%, 0); opacity: 0;",
                widgetStyling: "position: fixed; top: 0; bottom: 0; width: 100%; max-width: 480px; height: 100%; font-family: sans-serif; font-size: 16px; line-height: 1.4em; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; z-index: 2; -webkit-transition: -webkit-transform 0.6s; transition: -webkit-transform 0.6s; -o-transition: transform 0.6s; transition: transform 0.6s; transition: transform 0.6s, -webkit-transform 0.6s; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-perspective: 1000; perspective: 1000; will-change: transform;",
                iconStyling: "position: absolute; bottom: 0; width: 64px; height: 64px; cursor: pointer;",
                popupStyling: "position: absolute; top: 0; bottom: 0; height: 100%; overflow-y: auto; padding: 24px; box-sizing: border-box;"
            },
            l = {
                fontColor: "#333",
                backgroundColor: "#f4f4f4",
                fontSizeTitle: "1.2em",
                fontSizeIntro: "1em",
                fontSizeHeaders: "1em",
                fontSize: "0.8em",
                toggleText: "#fff",
                toggleColor: "#222",
                toggleBackground: "#444",
                buttonIcon: null,
                buttonIconWidth: "64px",
                buttonIconHeight: "64px",
                removeIcon: !1,
                removeAbout: !1
            },
            s = {
                fontColor: "#FFF",
                fontSizeTitle: "1.2em",
                fontSizeIntro: "1em",
                fontSizeHeaders: "1em",
                fontSize: "0.8em",
                backgroundColor: "#313147",
                toggleText: "#fff",
                toggleColor: "#2f2f5f",
                toggleBackground: "#111125",
                buttonIcon: null,
                buttonIconWidth: "64px",
                buttonIconHeight: "64px",
                removeIcon: !1,
                removeAbout: !1
            },
            c = document.body,
            d = document.createElement("section");
        d.id = "ccc", d.style.zIndex = 21474836475, d.style.position = "fixed", d.innerHTML = '<div id="ccc-overlay"></div><div id="ccc-module"><div id="ccc-icon"></div><div id="ccc-popup"><div id="ccc-close" style="cursor: pointer; width: 24px; position: absolute; right: 16px; top: 16px;">' + r.iconClose + '</div><h2 id="ccc-title" style="line-height: 1.6em; font-weight: 700; padding-right: 32px;"></h2><p id="ccc-intro" style="margin: 1em 0; font-weight: 400;"></p><hr style="height: 1px; border: 0; margin: 24px 0; opacity: 0.5;"/><h3 id="ccc-necessary-title" style="font-weight: 700;"></h3><p id="ccc-necessary-description" style="margin: 1em 0; font-weight: 400;"></p><hr style="height: 1px; border: 0; margin: 24px 0; opacity: 0.5;"/><div id="ccc-optional-categories"></div><div id="ccc-info"></div></div></div>';
        var p = {
                title: d.querySelector("#ccc-title"),
                intro: d.querySelector("#ccc-intro"),
                necessaryTitle: d.querySelector("#ccc-necessary-title"),
                necessaryDescription: d.querySelector("#ccc-necessary-description"),
                optionalCookies: d.querySelector("#ccc-optional-categories"),
                hrs: d.querySelectorAll("hr"),
                widget: d.querySelector("#ccc-module"),
                button: d.querySelector("#ccc-icon"),
                popup: d.querySelector("#ccc-popup"),
                close: d.querySelector("#ccc-close"),
                overlay: d.querySelector("#ccc-overlay"),
                aboutInfo: d.querySelector("#ccc-info")
            },
            g = {
                title: p.title,
                intro: p.intro,
                necessaryTitle: p.necessaryTitle,
                necessaryDescription: p.necessaryDescription
            };

        function u() {
            var e;
            e = "left" === y.position.toLowerCase() ? a.widgetStyling + "right: 100%; -webkit-transform: translate3d(100%, 0%, 0); transform: translate3d(100%, 0, 0);" : a.widgetStyling + "left: 100%; -webkit-transform: translate3d(-100%, 0%, 0); transform: translate3d(-100%, 0, 0);", d.setAttribute("open", ""), d.removeAttribute("closed"), L(p.overlay, a.overlayStyling + "-webkit-transform: translate3d(0, 0%, 0); transform: translate3d(0, 0%, 0); opacity: 1;"), L(p.widget, e), localStorage.removeItem("ccClosed")
        }

        function f() {
            var e;
            e = "left" === y.position.toLowerCase() ? a.widgetStyling + "right: 100%; -webkit-transform: translate3d(64px, 0, 0); transform: translate3d(64px, 0, 0); height: auto;" : a.widgetStyling + "left: 100%; -webkit-transform: translate3d(-64px, 0, 0); transform: translate3d(-64px, 0, 0); height: auto; ", d.setAttribute("closed", ""), d.removeAttribute("open"), L(p.overlay, a.overlayStyling), L(p.widget, e), setTimeout(function() {
                p.widget.style.top = "unset"
            }, 700), localStorage.setItem("ccClosed", !0)
        }

        function h(r) {
            var a;
            if (null != r && r.product && e[r.product.toUpperCase()]) {
                var p = "https://apikeys.civiccomputing.com/c/v?d=" + encodeURIComponent(document.location.hostname) + "&p=" + encodeURIComponent(e[r.product.toUpperCase()]) + "&v=8&k=" + encodeURIComponent(r.apiKey) + "&format=json";
                null == r.theme ? y.branding = s : "light" === r.theme.toLowerCase() ? y.branding = l : y.branding = s;
                var g = new XMLHttpRequest;
                g.open("GET", p), g.onload = function() {
                    200 === g.status ? (a = "API VERIFICATION PASSED", function(r, a) {
                        if (function(i, r) {
                                if (i && t.product.toLowerCase() !== e.COMMUNITY.toLowerCase()) {
                                    var a = t.geo.countryName,
                                        l = t.geo.country;
                                    if ("" === l || "" === a) return !1;
                                    if (o.indexOf(l) >= 0 || n.indexOf(a) >= 0) return !1;
                                    if (i.indexOf("all") >= 0 || i.indexOf(l) >= 0 || i.indexOf(a) >= 0) {
                                        for (var s = 0; s < r.length; s++) {
                                            var c = r[s];
                                            null != c.onAccept && c.onAccept()
                                        }
                                        return !0
                                    }
                                }
                                return !1
                            }(a.excludedCountries, a.optionalCookies)) return;
                        if (null == document.querySelector("#ccc")) {
                            if (null == c) return void console.error("Cookie Control cannot be rendered. Make sure you put it inside the <body> of your page instead of <head>.");
                            c.append(d)
                        }
                        if (r.product.toLowerCase() === e.COMMUNITY.toLowerCase())
                            for (var l = 0; l < i.length; l++) a[i[l]] && (console.warn("Cookie Control: Users with a community license cannot use the " + i[l] + " option."), delete a[i[l]]);
                        b(a)
                    }(t = JSON.parse(g.responseText), r)) : (a = "API VERIFICATION FAILED", console.error("Cookie Control failed to verify your API key.\nPlease refer to https://www.civicuk.com/cookie-control/v8/documentation."))
                }, g.send()
            } else a = "FAILED", console.error("Cookie Control failed to verify your settings.\nPlease refer to https://www.civicuk.com/cookie-control/v8/documentation.");
            return a
        }
        p.button.addEventListener("click", function() {
            d.hasAttribute("open") ? f() : d.hasAttribute("closed") && u()
        }, !1), p.close.addEventListener("click", f, !1);
        var y = JSON.parse(JSON.stringify({
            initialState: "open",
            position: "right",
            text: {
                title: "This site uses cookies to store information on your computer.",
                intro: "Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used.",
                necessaryTitle: "Necessary Cookies",
                necessaryDescription: "Necessary cookies enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.",
                thirdPartyTitle: "Warning: Some cookies require your attention",
                thirdPartyDescription: "Consent for the following cookies could not be automatically revoked. Please follow the link(s) below to opt out manually."
            },
            necessaryCookies: [],
            consentCookieExpiry: 90
        }));

        function b(o) {
            var n = Object.keys(o);
            n.indexOf("theme") >= 0 && ("light" === o.theme.toLowerCase() ? y.branding = l : y.branding = s);
            for (var i = 0; i < n.length; i++)
                if ("object" == typeof o[n[i]] && !1 === Array.isArray(o[n[i]])) {
                    if ("branding" === n[i] && t.product.toLowerCase() === e.COMMUNITY.toLowerCase()) continue;
                    for (var c = Object.keys(o[n[i]]), f = 0; f < c.length; f++) y[n[i]][c[f]] = o[n[i]][c[f]]
                } else y[n[i]] = o[n[i]];
            ! function(o) {
                var n, i;
                if (n = "left" === o.position.toLowerCase() ? a.widgetStyling + "right: 100%; left: auto; -webkit-transform: translate3d(64px, 0, 0); transform: translate3d(64px, 0, 0);" : a.widgetStyling + "left: 100%; right: auto; -webkit-transform: translate3d(-64px, 0, 0); transform: translate3d(-64px, 0, 0);", L(p.widget, n), i = "left" === o.position.toLowerCase() ? a.popupStyling + "left: 0; right: 64px;" : a.popupStyling + "left: 64px; right: 0;", !0 === o.branding.removeIcon) p.button.innerHTML = "";
                else {
                    var l, s;
                    "left" === o.position.toLowerCase() ? (l = r.iconLeft, s = a.iconStyling + "right: 0; left: auto;") : (l = r.iconRight, s = a.iconStyling + "left: 0; right: auto;"), L(p.button, s), p.button.style.fill = o.branding.backgroundColor, null != o.branding.buttonIcon && (l = '<img src="' + o.branding.buttonIcon + '" alt="Cookie Control toggle icon" style="width: ' + o.branding.buttonIconWidth + "; height: " + o.branding.buttonIconHeight + ';" />', p.button.style.width = o.branding.buttonIconWidth, p.button.style.height = o.branding.buttonIconHeight), p.button.innerHTML = l, null === o.branding.buttonIcon && (p.button.querySelector("svg g#star path").style.fill = o.branding.fontColor)
                }
                i = i + " color: " + o.branding.fontColor + "; fill: " + o.branding.fontColor + "; background: " + o.branding.backgroundColor + ";", L(p.popup, i);
                for (var c = 0; c < p.hrs.length; c++) {
                    var f = p.hrs[c];
                    f.style.background = o.branding.fontColor
                }!0 !== o.branding.removeAbout && (p.aboutInfo.innerHTML = '<a id="ccc-info-link" href="https://www.civicuk.com/cookie-control" target="_blank" style="font-size: 0.8em; font-weight: 700; text-decoration: none; color: ' + o.branding.fontColor + ';">About this tool</a>');
                p.title.style.color = o.branding.fontColor, p.intro.style.color = o.branding.fontColor, p.necessaryTitle.style.color = o.branding.fontColor, p.necessaryDescription.style.color = o.branding.fontColor, p.title.style.fontSize = o.branding.fontSizeTitle, p.intro.style.fontSize = o.branding.fontSizeIntro, p.necessaryTitle.style.fontSize = o.branding.fontSizeHeaders, p.necessaryDescription.style.fontSize = o.branding.fontSize;
                var h = null;
                if (null != o.locales && t.product.toLowerCase() !== e.COMMUNITY.toLowerCase()) {
                    var b = window.navigator.userLanguage || window.navigator.language,
                        m = (b = b.replace("-", "_")).substring(0, 2),
                        k = o.locales.filter(function(e) {
                            return e.locale.toLowerCase() === b
                        }),
                        C = o.locales.filter(function(e) {
                            return e.locale.toLowerCase() === m
                        });
                    k.length > 0 ? h = k[0] : C.length > 0 && (h = C[0])
                }
                if (function(e) {
                        for (var t in e = null == e ? y.text : e.text, g) {
                            g[t].innerHTML = e[t] || y.text[t];
                            for (var o = g[t].querySelectorAll("a, p, span"), n = 0; n < o.length; n++) o[n].style.color = y.branding.fontColor
                        }
                    }(h), p.optionalCookies.innerHTML = "", null != o.optionalCookies && o.optionalCookies.length > 0)
                    for (var x = 0; x < o.optionalCookies.length; x++) {
                        var w = o.optionalCookies[x],
                            I = document.createElement("div"),
                            z = w.label || "Category " + (parseInt(x) + 1),
                            M = w.description || "A description for " + z + " has not been provided.";
                        null != h && null != h.text.optionalCookies && null != h.text.optionalCookies[x] && (z = h.text.optionalCookies[x].label || z), null != h && null != h.text.optionalCookies && null != h.text.optionalCookies[x] && (M = h.text.optionalCookies[x].description || M), I.setAttribute("data-index", x), I.style.position = "relative", I.innerHTML = '<h3 style="font-size: ' + o.branding.fontSizeHeaders + "; font-weight: 700; padding-right: 96px; color: " + o.branding.fontColor + ';">' + z + '</h3><div class="checkbox-toggle" style="position: absolute; top: 0; right: 0; margin: 0; width: 80px; height: 26px; background: ' + o.branding.toggleBackground + '; border-radius: 50px;"><label style="display: block; margin: 0; position: absolute; left: 0;bottom: 0; top: 0; right: 0; cursor: pointer; z-index: 1;"><input type="checkbox" style="margin: 0; visibility: hidden; display: inline" onchange="CookieControl.toggleCategory(' + x + ')" /><span class="on" style="color: ' + o.branding.toggleText + '; position: absolute; left: 10px; z-index: 2; font: 12px/26px Arial, sans-serif; font-weight: bold;">On</span><span class="off" style="color: ' + o.branding.toggleText + '; position: absolute; right: 10px; z-index: 2; font: 12px/26px Arial, sans-serif; font-weight: bold; opacity: 0.65;">Off</span><span class="toggle" data-index="' + x + '" style="display: block; width: 40px; height: 20px; cursor: pointer; position: absolute; top: 3px; left: 4px; z-index: 3; background: ' + o.branding.toggleColor + '; border-radius: 50px; transition: all 0.4s ease;"></span></label></div><p style="margin: 1em 0; font-size: ' + o.branding.fontSize + "; font-weight: 400; color: " + o.branding.fontColor + ';">' + M + '</p><div class="ccc-alert"></div><hr style="height: 1px; border: 0; background: ' + o.branding.fontColor + '; margin: 24px 0; opacity: 0.5;"/>';
                        var A = I.querySelector("input"),
                            O = I.querySelector(".toggle");
                        (v(w.name) || T(w) && S(w.name)) && (A.setAttribute("checked", ""), O.style.left = "36px", null != w.onAccept && w.onAccept()), p.optionalCookies.append(I)
                    } else console.warn("Please provide at least one optional cookie category.");
                "open" !== o.initialState.toLowerCase() || localStorage.getItem("ccClosed") ? (d.setAttribute("closed", ""), p.widget.style.top = "unset", p.widget.style.height = "auto") : (d.setAttribute("open", ""), u())
            }(y), x()
        }

        function m(e) {
            var t = k(),
                o = "false";
            for (var n in t)
                if (n === e) {
                    o = t[n];
                    break
                }
            return o
        }

        function v(e) {
            return m(e).toLowerCase() === acceptedState
        }

        function k() {
            var e = {};
            if (!document.cookie.trim()) return {};
            for (var t = document.cookie.split(/\s*;\s*/), o = 0; o < t.length; o++) {
                var n = t[o].split(/\s*=\s*/);
                n && (e[n[0]] = unescape(n[1]))
            }
            return e
        }

        function C(e) {
            document.cookie = e + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;", document.cookie = e + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";
            for (var t = location.hostname.split("."); t.length;) {
                var o = t.join(".");
                document.cookie = e + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=" + o, document.cookie = e + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=" + o, document.cookie = e + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=." + o, document.cookie = e + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=." + o, t.shift()
            }
        }

        function x(e) {
            var t = k(),
                o = Object.keys(t);
            if (!0 === e)
                for (var n = 0; n < o.length; n++) C(o[n]);
            else {
                for (var i = [], r = 0; r < y.necessaryCookies.length; r++) {
                    i = w(y.necessaryCookies[r], o, i)
                }
                if (null != y.optionalCookies)
                    for (var a = 0; a < y.optionalCookies.length; a++) {
                        var l = y.optionalCookies[a];
                        if (v(l.name) || S(l.name) && T(l))
                            for (var s in i.push(l.name), l.cookies) i = w(l.cookies[s], o, i)
                    }
                for (var c = 0; c < o.length; c++) i.indexOf(o[c]) < 0 && C(o[c])
            }
        }

        function w(e, t, o) {
            if (e.lastIndexOf("*") == e.length - 1)
                for (var n = e.slice(0, -1), i = 0; i < t.length; i++) 0 == t[i].indexOf(n) && o.push(t[i]);
            else o.push(e);
            return o
        }

        function S(e) {
            return v(e) || localStorage.getItem("ccc-" + e) !== acceptedState || localStorage.removeItem("ccc-" + e), null === localStorage.getItem("ccc-" + e)
        }

        function T(e) {
            return "string" == typeof e.initialConsentState && "on" === e.initialConsentState.toLowerCase()
        }

        function I(e) {
            var t, o, n = y.optionalCookies[e];
            if (v(n.name) || T(n) && S(n.name)) localStorage.setItem("ccc-" + n.name, revokedState), C(n.name), x(), null != n.thirdPartyCookies && function(e) {
                var t = y.optionalCookies[e],
                    o = d.querySelector('#ccc-optional-categories [data-index="' + e + '"] .ccc-alert');
                o.innerHTML = "", o.style = null, o.style.background = y.branding.backgroundColor, o.style.padding = "12px 12px 20px;", o.style.filter = "sepia(100%) invert(100%)", o.innerHTML = '<h3 class="ccc-alert-title" style="font-size: ' + y.branding.fontSize + ';font-weight: 700;">' + y.text.thirdPartyTitle + '</h3><p class="ccc-alert-description" style="margin: 1em 0; font-size: ' + y.branding.fontSize + ';font-weight: 400;">' + y.text.thirdPartyDescription + "</p>";
                for (var n = 0; n < t.thirdPartyCookies.length; n++) {
                    var i = t.thirdPartyCookies[n],
                        r = document.createElement("a");
                    r.href = i.optOutLink, r.target = "_blank", r.style.display = "flex", r.style.alignItems = "center", r.style.margin = "12px 0", r.style.color = y.branding.fontColor, r.innerHTML = '<span style="font-size: ' + y.branding.fontSizeHeaders + '; font-weight: 700;">' + i.name + '</span><span style="display: inline-block; width: 24px; height: 24px; margin-left: 16px; fill: ' + y.branding.fontColor + ';"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="external-link" viewBox="0 0 32 40" x="0px" y="0px"><path d="M32 0l-8 1 2.438 2.438-9.5 9.5-1.063 1.063 2.125 2.125 1.063-1.063 9.5-9.5 2.438 2.438 1-8zm-30 3c-.483 0-1.047.172-1.438.563-.391.391-.563.954-.563 1.438v25c0 .483.172 1.047.563 1.438.391.391.954.563 1.438.563h25c.483 0 1.047-.172 1.438-.563.391-.391.563-.954.563-1.438v-15h-3v14h-23v-23h15v-3h-16z"/></svg></span>', o.append(r)
                }
            }(e), null != n.onRevoke && n.onRevoke(), d.querySelector('.toggle[data-index="' + e + '"]').style.left = "4px";
            else {
                localStorage.setItem("ccc-" + n.name, acceptedState);
                for (var i = 0, r = location.hostname.split("."), a = n.name + "=accepted;path=/;"; i < r.length && !1 === v(n.name);) {
                    domainTest = r.slice(-1 - ++i).join(".");
                    var l = new Date,
                        s = new Date(l.setDate(l.getDate() + y.consentCookieExpiry));
                    document.cookie = a + "domain=" + domainTest + ";expires=" + s.toUTCString() + ";"
                }
                null != n.thirdPartyCookies && (t = e, (o = d.querySelector('#ccc-optional-categories [data-index="' + t + '"] .ccc-alert')).style = null, o.innerHTML = ""), null != n.onAccept && n.onAccept(), d.querySelector('.toggle[data-index="' + e + '"]').style.left = "36px"
            }
        }

        function L(e, t) {
            for (var o = t.split(";"), n = 0; n < o.length; n++) {
                var i = o[n].trim();
                if (-1 != i.indexOf(":")) {
                    var r = i.split(":");
                    e.style[r[0].trim()] = r[1].trim()
                }
            }
        }
        return {
            info: function() {
                return "Cookie Control Version: " + 8..toFixed(1)
            },
            load: function(e) {
                return h(e)
            },
            update: function(e) {
                return b(e), "Cookie Control - update complete"
            },
            getCookie: function(e) {
                return m(e)
            },
            getAllCookies: function() {
                return k()
            },
            delete: function(e) {
                return C(e), "Cookie Control - " + e + " cookie successfully deleted."
            },
            deleteAll: function(e) {
                return x(e), "Cookie Control - all cookies successfully deleted."
            },
            toggleCategory: function(e) {
                I(e)
            },
            config: function() {
                return y
            },
            open: function() {
                return u(), "Cookie Control Opened"
            },
            hide: function() {
                return f(), "Cookie Control Closed"
            }
        }
    }();
