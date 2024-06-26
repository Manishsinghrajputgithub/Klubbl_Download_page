(function() {
    "use strict";
    var e = {
            function: !0,
            object: !0
        },
        G = e[typeof window] && window || this,
        i = e[typeof exports] && exports,
        t = e[typeof module] && module && !module.nodeType && module,
        r = i && t && "object" == typeof global && global;
    !r || r.global !== r && r.window !== r && r.self !== r || (G = r);
    var a = Math.pow(2, 53) - 1,
        $ = /\bOpera/,
        n = Object.prototype,
        o = n.hasOwnProperty,
        X = n.toString;

    function l(e) {
        return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
    }

    function K(e) {
        return e = H(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : l(e)
    }

    function j(e, t) {
        for (var i in e) o.call(e, i) && t(e[i], i, e)
    }

    function N(e) {
        return null == e ? l(e) : X.call(e).slice(8, -1)
    }

    function V(e) {
        return String(e).replace(/([ -])(?!$)/g, "$1?")
    }

    function z(i, r) {
        var n = null;
        return function(e, t) {
            var i = -1,
                r = e ? e.length : 0;
            if ("number" == typeof r && -1 < r && r <= a)
                for (; ++i < r;) t(e[i], i, e);
            else j(e, t)
        }(i, function(e, t) {
            n = r(n, e, t, i)
        }), n
    }

    function H(e) {
        return String(e).replace(/^ +| +$/g, "")
    }

    function L(l) {
        var t = G,
            e = l && "object" == typeof l && "String" != N(l);
        e && (t = l, l = null);
        var i = t.navigator || {},
            r = i.userAgent || "";
        l = l || r;
        var n, a, o, s, b, p = e ? !!i.likeChrome : /\bChrome\b/.test(l) && !/internal|\n/i.test(X.toString()),
            c = "Object",
            d = e ? c : "ScriptBridgingProxyObject",
            u = e ? c : "Environment",
            f = e && t.java ? "JavaPackage" : N(t.java),
            S = e ? c : "RuntimeObject",
            x = /\bJava/.test(f) && t.java,
            h = x && N(t.environment) == u,
            m = x ? "a" : "α",
            g = x ? "b" : "β",
            O = t.document || {},
            y = t.operamini || t.opera,
            M = $.test(M = e && y ? y["[[Class]]"] : N(y)) ? M : y = null,
            E = l,
            w = [],
            v = null,
            P = l == r,
            C = P && y && "function" == typeof y.version && y.version(),
            B = z([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
                return e || RegExp("\\b" + (t.pattern || V(t)) + "\\b", "i").exec(l) && (t.label || t)
            }),
            W = z(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                label: "Samsung Internet",
                pattern: "SamsungBrowser"
            }, "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", {
                label: "SRWare Iron",
                pattern: "Iron"
            }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                label: "Yandex Browser",
                pattern: "YaBrowser"
            }, {
                label: "UC Browser",
                pattern: "UCBrowser"
            }, "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
            }, "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chromium", "Chrome", {
                label: "Chrome",
                pattern: "(?:HeadlessChrome)"
            }, {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "Firefox for iOS",
                pattern: "FxiOS"
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"], function(e, t) {
                return e || RegExp("\\b" + (t.pattern || V(t)) + "\\b", "i").exec(l) && (t.label || t)
            }),
            k = I([{
                label: "BlackBerry",
                pattern: "BB10"
            }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
            }, {
                label: "Galaxy S5",
                pattern: "SM-G900"
            }, {
                label: "Galaxy S6",
                pattern: "SM-G920"
            }, {
                label: "Galaxy S6 Edge",
                pattern: "SM-G925"
            }, {
                label: "Galaxy S7",
                pattern: "SM-G930"
            }, {
                label: "Galaxy S7 Edge",
                pattern: "SM-G935"
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"]),
            R = z({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Alcatel: {},
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                Huawei: {},
                Lenovo: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Oppo: {},
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                },
                Xiaomi: {
                    Mi: 1,
                    Redmi: 1
                }
            }, function(e, t, i) {
                return e || (t[k] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(k)] || RegExp("\\b" + V(i) + "(?:\\b|\\w*\\d)", "i").exec(l)) && i
            }),
            A = z(["Windows Phone", "KaiOS", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", {
                label: "DragonFly BSD",
                pattern: "DragonFly"
            }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], function(e, t) {
                var i, r, n, a, o = t.pattern || V(t);
                return !e && (e = RegExp("\\b" + o + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(l)) && (i = e, r = o, n = t.label || t, a = {
                    "10.0": "10",
                    6.4: "10 Technical Preview",
                    6.3: "8.1",
                    6.2: "8",
                    6.1: "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    5.2: "Server 2003 / XP 64-bit",
                    5.1: "XP",
                    5.01: "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME"
                }, r && n && /^Win/i.test(i) && !/^Windows Phone /i.test(i) && (a = a[/[\d.]+$/.exec(i)]) && (i = "Windows " + a), i = String(i), r && n && (i = i.replace(RegExp(r, "i"), n)), e = i = K(i.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])), e
            });

        function I(e) {
            return z(e, function(e, t) {
                var i = t.pattern || V(t);
                return !e && (e = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(l) || RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(l) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(l)) && ((e = String(t.label && !RegExp(i, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = K(e[0].replace(RegExp(i, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
            })
        }

        function F(e) {
            return z(e, function(e, t) {
                return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(l) || 0)[1] || null
            })
        }
        if (B = B && [B], /\bAndroid\b/.test(A) && !k && (n = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(l)) && (k = H(n[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), R && !k ? k = I([R]) : R && k && (k = k.replace(RegExp("^(" + V(R) + ")[-_.\\s]", "i"), R + " ").replace(RegExp("^(" + V(R) + ")[-_.]?(\\w)", "i"), R + " $2")), (n = /\bGoogle TV\b/.exec(k)) && (k = n[0]), /\bSimulator\b/i.test(l) && (k = (k ? k + " " : "") + "Simulator"), "Opera Mini" == W && /\bOPiOS\b/.test(l) && w.push("running in Turbo/Uncompressed mode"), "IE" == W && /\blike iPhone OS\b/.test(l) ? (R = (n = L(l.replace(/like iPhone OS/, ""))).manufacturer, k = n.product) : /^iP/.test(k) ? (W = W || "Safari", A = "iOS" + ((n = / OS ([\d_]+)/i.exec(l)) ? " " + n[1].replace(/_/g, ".") : "")) : "Konqueror" == W && /^Linux\b/i.test(A) ? A = "Kubuntu" : R && "Google" != R && (/Chrome/.test(W) && !/\bMobile Safari\b/i.test(l) || /\bVita\b/.test(k)) || /\bAndroid\b/.test(A) && /^Chrome/.test(W) && /\bVersion\//i.test(l) ? (W = "Android Browser", A = /\bAndroid\b/.test(A) ? A : "Android") : "Silk" == W ? (/\bMobi/i.test(l) || (A = "Android", w.unshift("desktop mode")), /Accelerated *= *true/i.test(l) && w.unshift("accelerated")) : "UC Browser" == W && /\bUCWEB\b/.test(l) ? w.push("speed mode") : "PaleMoon" == W && (n = /\bFirefox\/([\d.]+)\b/.exec(l)) ? w.push("identifying as Firefox " + n[1]) : "Firefox" == W && (n = /\b(Mobile|Tablet|TV)\b/i.exec(l)) ? (A = A || "Firefox OS", k = k || n[1]) : !W || (n = !/\bMinefield\b/i.test(l) && /\b(?:Firefox|Safari)\b/.exec(W)) ? (W && !k && /[\/,]|^[^(]+?\)/.test(l.slice(l.indexOf(n + "/") + 8)) && (W = null), (n = k || R || A) && (k || R || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(A)) && (W = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(A) ? A : n) + " Browser")) : "Electron" == W && (n = (/\bChrome\/([\d.]+)\b/.exec(l) || 0)[1]) && w.push("Chromium " + n), C = C || F(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", V(W), "(?:Firefox|Minefield|NetFront)"]), (n = ("iCab" == B && 3 < parseFloat(C) ? "WebKit" : /\bOpera\b/.test(W) && (/\bOPR\b/.test(l) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(l) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(l) && ("Mac OS" == A ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(W) && "NetFront") && (B = [n]), "IE" == W && (n = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(l) || 0)[1]) ? (W += " Mobile", A = "Windows Phone " + (/\+$/.test(n) ? n : n + ".x"), w.unshift("desktop mode")) : /\bWPDesktop\b/i.test(l) ? (W = "IE Mobile", A = "Windows Phone 8.x", w.unshift("desktop mode"), C = C || (/\brv:([\d.]+)/.exec(l) || 0)[1]) : "IE" != W && "Trident" == B && (n = /\brv:([\d.]+)/.exec(l)) && (W && w.push("identifying as " + W + (C ? " " + C : "")), W = "IE", C = n[1]), P) {
            if (s = "global", b = null != (o = t) ? typeof o[s] : "number", /^(?:boolean|number|string|undefined)$/.test(b) || "object" == b && !o[s]) N(n = t.runtime) == d ? (W = "Adobe AIR", A = n.flash.system.Capabilities.os) : N(n = t.phantom) == S ? (W = "PhantomJS", C = (n = n.version || null) && n.major + "." + n.minor + "." + n.patch) : "number" == typeof O.documentMode && (n = /\bTrident\/(\d+)/i.exec(l)) ? (C = [C, O.documentMode], (n = +n[1] + 4) != C[1] && (w.push("IE " + C[1] + " mode"), B && (B[1] = ""), C[1] = n), C = "IE" == W ? String(C[1].toFixed(1)) : C[0]) : "number" == typeof O.documentMode && /^(?:Chrome|Firefox)\b/.test(W) && (w.push("masking as " + W + " " + C), W = "IE", C = "11.0", B = ["Trident"], A = "Windows");
            else if (x && (E = (n = x.lang.System).getProperty("os.arch"), A = A || n.getProperty("os.name") + " " + n.getProperty("os.version")), h) {
                try {
                    C = t.require("ringo/engine").version.join("."), W = "RingoJS"
                } catch (e) {
                    (n = t.system) && n.global.system == t.system && (W = "Narwhal", A = A || (n[0].os || null))
                }
                W = W || "Rhino"
            } else "object" == typeof t.process && !t.process.browser && (n = t.process) && ("object" == typeof n.versions && ("string" == typeof n.versions.electron ? (w.push("Node " + n.versions.node), W = "Electron", C = n.versions.electron) : "string" == typeof n.versions.nw && (w.push("Chromium " + C, "Node " + n.versions.node), W = "NW.js", C = n.versions.nw)), W || (W = "Node.js", E = n.arch, A = n.platform, C = (C = /[\d.]+/.exec(n.version)) ? C[0] : null));
            A = A && K(A)
        }
        if (C && (n = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(C) || /(?:alpha|beta)(?: ?\d)?/i.exec(l + ";" + (P && i.appMinorVersion)) || /\bMinefield\b/i.test(l) && "a") && (v = /b/i.test(n) ? "beta" : "alpha", C = C.replace(RegExp(n + "\\+?$"), "") + ("beta" == v ? g : m) + (/\d+\+?/.exec(n) || "")), "Fennec" == W || "Firefox" == W && /\b(?:Android|Firefox OS|KaiOS)\b/.test(A)) W = "Firefox Mobile";
        else if ("Maxthon" == W && C) C = C.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(k)) "Xbox 360" == k && (A = null), "Xbox 360" == k && /\bIEMobile\b/.test(l) && w.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(W) && (!W || k || /Browser|Mobi/.test(W)) || "Windows CE" != A && !/Mobi/i.test(l))
            if ("IE" == W && P) try {
                null === t.external && w.unshift("platform preview")
            } catch (e) {
                w.unshift("embedded")
            } else(/\bBlackBerry\b/.test(k) || /\bBB10\b/.test(l)) && (n = (RegExp(k.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(l) || 0)[1] || C) ? (A = ((n = [n, /BB10/.test(l)])[1] ? (k = null, R = "BlackBerry") : "Device Software") + " " + n[0], C = null) : this != j && "Wii" != k && (P && y || /Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(l) || "Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(A) || "IE" == W && (A && !/^Win/.test(A) && 5.5 < C || /\bWindows XP\b/.test(A) && 8 < C || 8 == C && !/\bTrident\b/.test(l))) && !$.test(n = L.call(j, l.replace($, "") + ";")) && n.name && (n = "ing as " + n.name + ((n = n.version) ? " " + n : ""), $.test(W) ? (/\bIE\b/.test(n) && "Mac OS" == A && (A = null), n = "identify" + n) : (n = "mask" + n, W = M ? K(M.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(n) && (A = null), P || (C = null)), B = ["Presto"], w.push(n));
            else W += " Mobile";
        (n = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(l) || 0)[1]) && (n = [parseFloat(n.replace(/\.(\d)$/, ".0$1")), n], "Safari" == W && "+" == n[1].slice(-1) ? (W = "WebKit Nightly", v = "alpha", C = n[1].slice(0, -1)) : C != n[1] && C != (n[2] = (/\bSafari\/([\d.]+\+?)/i.exec(l) || 0)[1]) || (C = null), n[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(l) || 0)[1], 537.36 == n[0] && 537.36 == n[2] && 28 <= parseFloat(n[1]) && "WebKit" == B && (B = ["Blink"]), n = P && (p || n[1]) ? (B && (B[1] = "like Chrome"), n[1] || ((n = n[0]) < 530 ? 1 : n < 532 ? 2 : n < 532.05 ? 3 : n < 533 ? 4 : n < 534.03 ? 5 : n < 534.07 ? 6 : n < 534.1 ? 7 : n < 534.13 ? 8 : n < 534.16 ? 9 : n < 534.24 ? 10 : n < 534.3 ? 11 : n < 535.01 ? 12 : n < 535.02 ? "13+" : n < 535.07 ? 15 : n < 535.11 ? 16 : n < 535.19 ? 17 : n < 536.05 ? 18 : n < 536.1 ? 19 : n < 537.01 ? 20 : n < 537.11 ? "21+" : n < 537.13 ? 23 : n < 537.18 ? 24 : n < 537.24 ? 25 : n < 537.36 ? 26 : "Blink" != B ? "27" : "28")) : (B && (B[1] = "like Safari"), (n = n[0]) < 400 ? 1 : n < 500 ? 2 : n < 526 ? 3 : n < 533 ? 4 : n < 534 ? "4+" : n < 535 ? 5 : n < 537 ? 6 : n < 538 ? 7 : n < 601 ? 8 : n < 602 ? 9 : n < 604 ? 10 : n < 606 ? 11 : n < 608 ? 12 : "12"), B && (B[1] += " " + (n += "number" == typeof n ? ".x" : /[.+]/.test(n) ? "" : "+")), "Safari" == W && (!C || 45 < parseInt(C)) ? C = n : "Chrome" == W && /\bHeadlessChrome/i.test(l) && w.unshift("headless")), "Opera" == W && (n = /\bzbov|zvav$/.exec(A)) ? (W += " ", w.unshift("desktop mode"), "zvav" == n ? (W += "Mini", C = null) : W += "Mobile", A = A.replace(RegExp(" *" + n + "$"), "")) : "Safari" == W && /\bChrome\b/.exec(B && B[1]) ? (w.unshift("desktop mode"), W = "Chrome Mobile", C = null, A = /\bOS X\b/.test(A) ? (R = "Apple", "iOS 4.3+") : null) : /\bSRWare Iron\b/.test(W) && !C && (C = F("Chrome")), C && 0 == C.indexOf(n = /[\d.]+$/.exec(A)) && -1 < l.indexOf("/" + n + "-") && (A = H(A.replace(n, ""))), A && -1 != A.indexOf(W) && !RegExp(W + " OS").test(A) && (A = A.replace(RegExp(" *" + V(W) + " *"), "")), B && !/\b(?:Avant|Nook)\b/.test(W) && (/Browser|Lunascape|Maxthon/.test(W) || "Safari" != W && /^iOS/.test(A) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(W) && B[1]) && (n = B[B.length - 1]) && w.push(n), w.length && (w = ["(" + w.join("; ") + ")"]), R && k && k.indexOf(R) < 0 && w.push("on " + R), k && w.push((/^on /.test(w[w.length - 1]) ? "" : "on ") + k), A && (n = / ([\d.+]+)$/.exec(A), a = n && "/" == A.charAt(A.length - n[0].length - 1), A = {
            architecture: 32,
            family: n && !a ? A.replace(n[0], "") : A,
            version: n ? n[1] : null,
            toString: function() {
                var e = this.version;
                return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
            }
        }), (n = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(E)) && !/\bi686\b/i.test(E) ? (A && (A.architecture = 64, A.family = A.family.replace(RegExp(" *" + n), "")), W && (/\bWOW64\b/i.test(l) || P && /\w(?:86|32)$/.test(i.cpuClass || i.platform) && !/\bWin64; x64\b/i.test(l)) && w.unshift("32-bit")) : A && /^OS X/.test(A.family) && "Chrome" == W && 39 <= parseFloat(C) && (A.architecture = 64), l = l || null;
        var T = {};
        return T.description = l, T.layout = B && B[0], T.manufacturer = R, T.name = W, T.prerelease = v, T.product = k, T.ua = l, T.version = W && C, T.os = A || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        }, T.parse = L, T.toString = function() {
            return this.description || ""
        }, T.version && w.unshift(C), T.name && w.unshift(W), A && W && (A != String(A).split(" ")[0] || A != W.split(" ")[0] && !k) && w.push(k ? "(" + A + ")" : "on " + A), w.length && (T.description = w.join(" ")), T
    }
    var s = L();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (G.platform = s, define(function() {
        return s
    })) : i && t ? j(s, function(e, t) {
        i[t] = e
    }) : G.platform = s
}).call(this);