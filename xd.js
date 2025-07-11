( () => {
    "use strict";
    var e, t, n = {}, i = {};
    function s(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e](r, r.exports, s),
        r.loaded = !0,
        r.exports
    }
    s.m = n,
    s.d = (e, t) => {
        for (var n in t)
            s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    s.f = {},
    s.e = e => Promise.all(Object.keys(s.f).reduce(( (t, n) => (s.f[n](e, t),
    t)), [])),
    s.u = e => "core.ruffle." + {
        662: "a049a495754deac2856f",
        966: "fc1803165034f0fa22f7"
    }[e] + ".js",
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.hmd = e => ((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "ruffle-selfhosted:",
    s.l = (n, i, r, o) => {
        if (e[n])
            e[n].push(i);
        else {
            var a, l;
            if (void 0 !== r)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == n || d.getAttribute("data-webpack") == t + r) {
                        a = d;
                        break
                    }
                }
            a || (l = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 120,
            s.nc && a.setAttribute("nonce", s.nc),
            a.setAttribute("data-webpack", t + r),
            a.src = n),
            e[n] = [i];
            var h = (t, i) => {
                a.onerror = a.onload = null,
                clearTimeout(f);
                var s = e[n];
                if (delete e[n],
                a.parentNode && a.parentNode.removeChild(a),
                s && s.forEach((e => e(i))),
                t)
                    return t(i)
            }
              , f = setTimeout(h.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = h.bind(null, a.onerror),
            a.onload = h.bind(null, a.onload),
            l && document.head.appendChild(a)
        }
    }
    ,
    s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.p = "",
    ( () => {
        s.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
        s.f.j = (t, n) => {
            var i = s.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    n.push(i[2]);
                else {
                    var r = new Promise(( (n, s) => i = e[t] = [n, s]));
                    n.push(i[2] = r);
                    var o = s.p + s.u(t)
                      , a = new Error;
                    s.l(o, (n => {
                        if (s.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0),
                        i)) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , o = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")",
                            a.name = "ChunkLoadError",
                            a.type = r,
                            a.request = o,
                            i[1](a)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t, n) => {
            var i, r, [o,a,l] = n, c = 0;
            if (o.some((t => 0 !== e[t]))) {
                for (i in a)
                    s.o(a, i) && (s.m[i] = a[i]);
                l && l(s)
            }
            for (t && t(n); c < o.length; c++)
                r = o[c],
                s.o(e, r) && e[r] && e[r][0](),
                e[r] = 0
        }
          , n = self.webpackChunkruffle_selfhosted = self.webpackChunkruffle_selfhosted || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )();
    const r = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11]))
      , o = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11]))
      , a = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11]))
      , l = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
    function c(e) {
        const t = "function" == typeof Function.prototype.toString ? Function.prototype.toString() : null;
        return "string" == typeof t && t.indexOf("[native code]") >= 0 && Function.prototype.toString.call(e).indexOf("[native code]") >= 0
    }
    let u = "";
    try {
        if (void 0 !== document.currentScript && null !== document.currentScript && "src"in document.currentScript && "" !== document.currentScript.src) {
            let e = document.currentScript.src;
            e.endsWith(".js") || e.endsWith("/") || (e += "/"),
            u = new URL(".",e).href
        }
    } catch (e) {
        console.warn("Unable to get currentScript URL")
    }
    function d(e) {
        let t = u;
        return void 0 !== e && void 0 !== e.publicPath && (t = e.publicPath),
        "" === t || t.endsWith("/") || (t += "/"),
        t
    }
    let h = null;
    function f(e) {
        return null === h && (h = async function(e) {
            "function" == typeof Array.prototype.reduce && c(Array.prototype.reduce) || Object.defineProperty(Array.prototype, "reduce", {
                value(...e) {
                    if (0 === e.length && window.Prototype && window.Prototype.Version && window.Prototype.Version < "1.6.1")
                        return this.length > 1 ? this : this[0];
                    const t = e[0];
                    if (null === this)
                        throw new TypeError("Array.prototype.reduce called on null or undefined");
                    if ("function" != typeof t)
                        throw new TypeError(`${t} is not a function`);
                    const n = Object(this)
                      , i = n.length >>> 0;
                    let s, r = 0;
                    if (e.length >= 2)
                        s = e[1];
                    else {
                        for (; r < i && !(r in n); )
                            r++;
                        if (r >= i)
                            throw new TypeError("Reduce of empty array with no initial value");
                        s = n[r++]
                    }
                    for (; r < i; )
                        r in n && (s = t(s, n[r], r, n)),
                        r++;
                    return s
                }
            }),
            "function" == typeof Window && c(Window) || "function" == typeof window.constructor && c(window.constructor) && (window.Window = window.constructor),
            void 0 === window.Reflect && (window.Reflect = {}),
            "function" != typeof Reflect.get && Object.defineProperty(Reflect, "get", {
                value: (e, t) => e[t]
            }),
            "function" != typeof Reflect.set && Object.defineProperty(Reflect, "set", {
                value(e, t, n) {
                    e[t] = n
                }
            });
            const t = (await Promise.all([r(), l(), o(), a()])).every(Boolean);
            t || console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),
            s.p = d(e);
            const {default: n, Ruffle: i} = await (t ? s.e(966).then(s.bind(s, 966)) : s.e(662).then(s.bind(s, 662)));
            return await n(),
            i
        }(e)),
        h
    }
    class p {
        constructor(e) {
            if (this.__mimetypes = [],
            this.__named_mimetypes = {},
            e)
                for (let t = 0; t < e.length; t++)
                    this.install(e[t])
        }
        install(e) {
            const t = this.__mimetypes.length;
            this.__mimetypes.push(e),
            this.__named_mimetypes[e.type] = e,
            this[e.type] = e,
            this[t] = e
        }
        item(e) {
            return this.__mimetypes[e]
        }
        namedItem(e) {
            return this.__named_mimetypes[e]
        }
        get length() {
            return this.__mimetypes.length
        }
        [Symbol.iterator]() {
            return this.__mimetypes[Symbol.iterator]()
        }
    }
    class m extends p {
        constructor(e, t, n, i) {
            super(i),
            this.name = e,
            this.description = t,
            this.filename = n
        }
        install(e) {
            super.install(e)
        }
        [Symbol.iterator]() {
            return super[Symbol.iterator]()
        }
    }
    class g {
        constructor(e) {
            this.__plugins = [],
            this.__named_plugins = {};
            for (let t = 0; t < e.length; t++)
                this.install(e[t])
        }
        install(e) {
            const t = this.__plugins.length;
            this.__plugins.push(e),
            this.__named_plugins[e.name] = e,
            this[e.name] = e,
            this[t] = e
        }
        item(e) {
            return this.__plugins[e]
        }
        namedItem(e) {
            return this.__named_plugins[e]
        }
        refresh() {}
        get length() {
            return this.__plugins.length
        }
    }
    const w = new m("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js",null);
    w.install({
        type: "application/futuresplash",
        description: "Shockwave Flash",
        suffixes: "spl",
        enabledPlugin: w
    }),
    w.install({
        type: "application/x-shockwave-flash",
        description: "Shockwave Flash",
        suffixes: "swf",
        enabledPlugin: w
    }),
    w.install({
        type: "application/x-shockwave-flash2-preview",
        description: "Shockwave Flash",
        suffixes: "swf",
        enabledPlugin: w
    }),
    w.install({
        type: "application/vnd.adobe.flash-movie",
        description: "Shockwave Flash",
        suffixes: "swf",
        enabledPlugin: w
    });
    const v = document.createElement("template");
    v.innerHTML = `\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n\n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n border: 1px solid #ccc;       }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n\t    font-size: 20px;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .menu_item.disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .menu_item:not(.disabled):hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><img src="chrome-extension://${document.querySelector("myFlashExtensionId")?.id}/icons/playicon600.png" /><div style="font-family: SF Pro Display;font-weight: 700;font-size: 16px;color: rgba(117,102,151,1);font-style: normal;letter-spacing: 0px;text-decoration: none;" class="text">click  to play flash content</div></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584"  width="100%" height="100%" scale="0.8"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" font-size="60px" fill="#FFF" stroke="#FFF">Click to unmute</text></svg></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n`;
    const y = {};
    function b(e, t) {
        if (void 0 !== y[e]) {
            if (y[e].class !== t)
                throw new Error("Internal naming conflict on " + e);
            return y[e].name
        }
        let n = 0;
        if (void 0 !== window.customElements)
            for (; n < 999; ) {
                let i = e;
                if (n > 0 && (i = i + "-" + n),
                void 0 === window.customElements.get(i))
                    return window.customElements.define(i, t),
                    y[e] = {
                        class: t,
                        name: i,
                        internalName: e
                    },
                    i;
                n += 1
            }
        throw new Error("Failed to assign custom element " + e)
    }
    const x = "application/x-shockwave-flash"
      , k = "application/futuresplash"
      , E = "application/x-shockwave-flash2-preview"
      , I = "application/vnd.adobe.flash-movie"
      , _ = "https://ruffle.rs"
      , S = /^\s*(\d+(\.\d+)?(%)?)/;
    let A = !1;
    function C(e) {
        if (null == e)
            return {};
        e instanceof URLSearchParams || (e = new URLSearchParams(e));
        const t = {};
        for (const [n,i] of e)
            t[n] = i.toString();
        return t
    }
    class R extends HTMLElement {
        constructor() {
            return super(),
            this.hasContextMenu = !1,
            this.contextMenuForceDisabled = !1,
            this.isTouch = !1,
            this.showSwfDownload = !1,
            this.panicked = !1,
            this.isExtension = !1,
            this.config = {},
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadow.appendChild(v.content.cloneNode(!0)),
            this.dynamicStyles = this.shadow.getElementById("dynamic_styles"),
            this.container = this.shadow.getElementById("container"),
            this.playButton = this.shadow.getElementById("play_button"),
            this.playButton && this.playButton.addEventListener("click", ( () => {
                document.querySelector("myFlashExtensionId").click();
                this.play()
            }
            )),
            this.unmuteOverlay = this.shadow.getElementById("unmute_overlay"),
            this.contextMenuElement = this.shadow.getElementById("context-menu"),
            this.addEventListener("contextmenu", this.showContextMenu.bind(this)),
            this.addEventListener("pointerdown", this.pointerDown.bind(this)),
            this.addEventListener("fullscreenchange", this.fullScreenChange.bind(this)),
            this.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this)),
            window.addEventListener("click", this.hideContextMenu.bind(this)),
            this.instance = null,
            this.options = null,
            this.onFSCommand = null,
            this._readyState = 0,
            this._metadata = null,
            this.lastActivePlayingState = !1,
            this.setupPauseOnTabHidden(),
            this
        }
        get readyState() {
            return this._readyState
        }
        get metadata() {
            return this._metadata
        }
        setupPauseOnTabHidden() {
            document.addEventListener("visibilitychange", ( () => {
                this.instance && (document.hidden && (this.lastActivePlayingState = this.instance.is_playing(),
                this.instance.pause()),
                document.hidden || !0 !== this.lastActivePlayingState || this.instance.play())
            }
            ), !1)
        }
        connectedCallback() {
            this.updateStyles()
        }
        static get observedAttributes() {
            return ["width", "height"]
        }
        attributeChangedCallback(e, t, n) {
            "width" !== e && "height" !== e || this.updateStyles()
        }
        disconnectedCallback() {
            this.destroy()
        }
        updateStyles() {
            if (this.dynamicStyles.sheet) {
                if (this.dynamicStyles.sheet.rules)
                    for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++)
                        this.dynamicStyles.sheet.deleteRule(e);
                const e = this.attributes.getNamedItem("width");
                if (null != e) {
                    const t = R.htmlDimensionToCssDimension(e.value);
                    null !== t && this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)
                }
                const t = this.attributes.getNamedItem("height");
                if (null != t) {
                    const e = R.htmlDimensionToCssDimension(t.value);
                    null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)
                }
            }
        }
        isUnusedFallbackObject() {
            const e = function(e) {
                const t = y[e];
                return void 0 !== t ? {
                    internalName: e,
                    name: t.name,
                    class: t.class
                } : null
            }("ruffle-object");
            if (null !== e) {
                let t = this.parentNode;
                for (; t !== document && null !== t; ) {
                    if (t.nodeName === e.name)
                        return !0;
                    t = t.parentNode
                }
            }
            return !1
        }
        async ensureFreshInstance(e) {
            var t;
            this.destroy();
            const n = await f(e).catch((e => {
                if (console.error(`Serious error loading Ruffle: ${e}`),
                "file:" === window.location.protocol)
                    e.ruffleIndexError = 2;
                else {
                    e.ruffleIndexError = 9;
                    const t = String(e.message).toLowerCase();
                    t.includes("mime") ? e.ruffleIndexError = 8 : t.includes("networkerror") || t.includes("failed to fetch") ? e.ruffleIndexError = 6 : t.includes("disallowed by embedder") ? e.ruffleIndexError = 1 : "CompileError" === e.name ? e.ruffleIndexError = 3 : t.includes("could not download wasm module") && "TypeError" === e.name ? e.ruffleIndexError = 7 : "TypeError" === e.name ? e.ruffleIndexError = 5 : navigator.userAgent.includes("Edg") && t.includes("webassembly is not defined") && (e.ruffleIndexError = 10)
                }
                throw this.panic(e),
                e
            }
            ));
            if (this.instance = await new n(this.container,this,e),
            console.log("New Ruffle instance created (WebAssembly extensions: " + (n.is_wasm_simd_used() ? "ON" : "OFF") + ")"),
            "running" !== this.audioState() && (this.container.style.visibility = "hidden",
            await new Promise((e => {
                window.setTimeout(( () => {
                    e()
                }
                ), 200)
            }
            )),
            this.container.style.visibility = ""),
            this.unmuteAudioContext(),
            "on" === e.autoplay || "off" !== e.autoplay && "running" === this.audioState()) {
                if (this.play(),
                "running" !== this.audioState()) {
                    "hidden" !== e.unmuteOverlay && (this.unmuteOverlay.style.display = "block"),
                    this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                        once: !0
                    });
                    const n = null === (t = this.instance) || void 0 === t ? void 0 : t.audio_context();
                    n && (n.onstatechange = () => {
                        "running" === n.state && this.unmuteOverlayClicked(),
                        n.onstatechange = null
                    }
                    )
                }
            } else
                this.playButton.style.display = "block"
        }
        destroy() {
            this.instance && (this.instance.destroy(),
            this.instance = null,
            this._metadata = null,
            this._readyState = 0,
            console.log("Ruffle instance destroyed."))
        }
        async load(e) {
            var t, n;
            let i = "";
            switch (typeof e) {
            case "string":
                e = {
                    url: e
                };
                break;
            case "object":
                null === e ? i = "Argument 0 must be a string or object" : "url"in e || "data"in e ? "url"in e && "string" != typeof e.url && (i = "`url` must be a string") : i = "Argument 0 must contain a `url` or `data` key";
                break;
            default:
                i = "Argument 0 must be a string or object"
            }
            if (i.length > 0) {
                const e = new TypeError(i);
                throw e.ruffleIndexError = 4,
                this.panic(e),
                e
            }
            if (this.isConnected && !this.isUnusedFallbackObject()) {
                if (!T(this))
                    try {
                        const i = Object.assign(Object.assign(Object.assign({}, null !== (n = null === (t = window.RufflePlayer) || void 0 === t ? void 0 : t.config) && void 0 !== n ? n : {}), this.config), e);
                        if (i.allowScriptAccess = e.allowScriptAccess,
                        this.showSwfDownload = !0 === i.showSwfDownload,
                        this.options = e,
                        this.hasContextMenu = !1 !== i.contextMenu,
                        i.backgroundColor && "transparent" !== i.wmode && (this.container.style.backgroundColor = i.backgroundColor),
                        await this.ensureFreshInstance(i),
                        "url"in e) {
                            console.log(`Loading SWF file ${e.url}`),
                            this.swfUrl = new URL(e.url,document.baseURI);
                            const t = Object.assign(Object.assign({}, C(e.url.substring(e.url.indexOf("?")))), C(e.parameters));
                            this.instance.stream_from(this.swfUrl.href, t)
                        } else
                            "data"in e && (console.log("Loading SWF data"),
                            this.instance.load_data(new Uint8Array(e.data), C(e.parameters)))
                    } catch (e) {
                        throw console.error(`Serious error occurred loading SWF file: ${e}`),
                        e
                    }
            } else
                console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")
        }
        play() {
            this.instance && (this.instance.play(),
            this.playButton && (this.playButton.style.display = "none"))
        }
        get isPlaying() {
            return !!this.instance && this.instance.is_playing()
        }
        get fullscreenEnabled() {
            return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled)
        }
        get isFullscreen() {
            return (document.fullscreenElement || document.webkitFullscreenElement) === this
        }
        setFullscreen(e) {
            this.fullscreenEnabled && (e ? this.enterFullscreen() : this.exitFullscreen())
        }
        enterFullscreen() {
            const e = {
                navigationUI: "hide"
            };
            this.requestFullscreen ? this.requestFullscreen(e) : this.webkitRequestFullscreen ? this.webkitRequestFullscreen(e) : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e)
        }
        exitFullscreen() {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }
        fullScreenChange() {
            var e;
            null === (e = this.instance) || void 0 === e || e.set_fullscreen(this.isFullscreen)
        }
        pointerDown(e) {
            "touch" !== e.pointerType && "pen" !== e.pointerType || (this.isTouch = !0)
        }
        async downloadSwf() {
            try {
                if (this.swfUrl) {
                    console.log("Downloading SWF: " + this.swfUrl);
                    const e = await fetch(this.swfUrl.href);
                    if (!e.ok)
                        return void console.error("SWF download failed");
                    const t = await e.blob()
                      , n = URL.createObjectURL(t)
                      , i = document.createElement("a");
                    i.style.display = "none",
                    i.href = n,
                    i.download = function(e) {
                        const t = e.pathname;
                        return t.substring(t.lastIndexOf("/") + 1)
                    }(this.swfUrl),
                    document.body.appendChild(i),
                    i.click(),
                    document.body.removeChild(i),
                    URL.revokeObjectURL(n)
                } else
                    console.error("SWF download failed")
            } catch (e) {
                console.error("SWF download failed")
            }
        }
        contextMenuItems() {
            const e = String.fromCharCode(10003)
              , t = [];
            this.instance && this.instance.prepare_context_menu().forEach(( (n, i) => {
                n.separatorBefore && t.push(null),
                t.push({
                    text: n.caption + (n.checked ? ` (${e})` : ""),
                    onClick: () => {
                        var e;
                        return null === (e = this.instance) || void 0 === e ? void 0 : e.run_context_menu_callback(i)
                    }
                    ,
                    enabled: n.enabled
                })
            }
            )),
            t.push(null),
            this.fullscreenEnabled && (this.isFullscreen ? t.push({
                text: "Exit fullscreen",
                onClick: () => {
                    var e;
                    return null === (e = this.instance) || void 0 === e ? void 0 : e.set_fullscreen(!1)
                }
            }) : t.push({
                text: "Enter fullscreen",
                onClick: () => {
                    var e;
                    return null === (e = this.instance) || void 0 === e ? void 0 : e.set_fullscreen(!0)
                }
            })),
            this.instance && this.swfUrl && this.showSwfDownload && (t.push(null),
            t.push({
                text: "Download .swf",
                onClick: this.downloadSwf.bind(this)
            })),
            t.push(null);
            const n = this.isExtension ? "extension" : "";
            return t.push({
                text: `About Ruffle ${n} (nightly 2022-07-14)`,
                onClick() {
                    window.open(_, "_blank")
                }
            }),
            this.isTouch && (t.push(null),
            t.push({
                text: "Hide this menu",
                onClick: () => this.contextMenuForceDisabled = !0
            })),
            t
        }
        showContextMenu(e) {
            if (e.preventDefault(),
            !this.hasContextMenu || this.contextMenuForceDisabled)
                return;
            for (; this.contextMenuElement.firstChild; )
                this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
            for (const e of this.contextMenuItems())
                if (null === e) {
                    if (!this.contextMenuElement.lastElementChild)
                        continue;
                    if (this.contextMenuElement.lastElementChild.classList.contains("menu_separator"))
                        continue;
                    const e = document.createElement("li");
                    e.className = "menu_separator";
                    const t = document.createElement("hr");
                    e.appendChild(t),
                    this.contextMenuElement.appendChild(e)
                } else {
                    const {text: t, onClick: n, enabled: i} = e
                      , s = document.createElement("li");
                    s.className = "menu_item",
                    s.textContent = t,
                    this.contextMenuElement.appendChild(s),
                    !1 !== i ? s.addEventListener("click", n) : s.classList.add("disabled")
                }
            this.contextMenuElement.style.left = "0",
            this.contextMenuElement.style.top = "0",
            this.contextMenuElement.style.display = "block";
            const t = this.getBoundingClientRect()
              , n = e.clientX - t.x
              , i = e.clientY - t.y
              , s = t.width - this.contextMenuElement.clientWidth - 1
              , r = t.height - this.contextMenuElement.clientHeight - 1;
            this.contextMenuElement.style.left = Math.floor(Math.min(n, s)) + "px",
            this.contextMenuElement.style.top = Math.floor(Math.min(i, r)) + "px"
        }
        hideContextMenu() {
            var e;
            null === (e = this.instance) || void 0 === e || e.clear_custom_menu_items(),
            this.contextMenuElement.style.display = "none"
        }
        pause() {
            this.instance && (this.instance.pause(),
            this.playButton && (this.playButton.style.display = "block"))
        }
        audioState() {
            if (this.instance) {
                const e = this.instance.audio_context();
                return e && e.state || "running"
            }
            return "suspended"
        }
        unmuteOverlayClicked() {
            if (this.instance) {
                if ("running" !== this.audioState()) {
                    const e = this.instance.audio_context();
                    e && e.resume()
                }
                this.unmuteOverlay && (this.unmuteOverlay.style.display = "none")
            }
        }
        unmuteAudioContext() {
            A || (navigator.maxTouchPoints < 1 ? A = !0 : this.container.addEventListener("click", ( () => {
                var e;
                if (A)
                    return;
                const t = null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
                if (!t)
                    return;
                const n = new Audio;
                n.src = ( () => {
                    const e = new ArrayBuffer(10)
                      , n = new DataView(e)
                      , i = t.sampleRate;
                    return n.setUint32(0, i, !0),
                    n.setUint32(4, i, !0),
                    n.setUint16(8, 1, !0),
                    `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(e))).slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
                }
                )(),
                n.load(),
                n.play().then(( () => {
                    A = !0
                }
                )).catch((e => {
                    console.warn(`Failed to play dummy sound: ${e}`)
                }
                ))
            }
            ), {
                once: !0
            }))
        }
        copyElement(e) {
            if (e) {
                for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t];
                    if (n.specified) {
                        if ("title" === n.name && "Adobe Flash Player" === n.value)
                            continue;
                        try {
                            this.setAttribute(n.name, n.value)
                        } catch (e) {
                            console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)
                        }
                    }
                }
                for (const t of Array.from(e.children))
                    this.appendChild(t)
            }
        }
        static htmlDimensionToCssDimension(e) {
            if (e) {
                const t = e.match(S);
                if (t) {
                    let e = t[1];
                    return t[3] || (e += "px"),
                    e
                }
            }
            return null
        }
        onCallbackAvailable(e) {
            const t = this.instance;
            this[e] = (...n) => null == t ? void 0 : t.call_exposed_callback(e, n)
        }
        set traceObserver(e) {
            var t;
            null === (t = this.instance) || void 0 === t || t.set_trace_observer(e)
        }
        panic(e) {
            var t;
            if (this.panicked)
                return;
            if (this.panicked = !0,
            e instanceof Error && ("AbortError" === e.name || e.message.includes("AbortError")))
                return;
            const n = null !== (t = null == e ? void 0 : e.ruffleIndexError) && void 0 !== t ? t : 0
              , i = Object.assign([], {
                stackIndex: -1
            });
            if (i.push("# Error Info\n"),
            e instanceof Error) {
                if (i.push(`Error name: ${e.name}\n`),
                i.push(`Error message: ${e.message}\n`),
                e.stack) {
                    const t = i.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
                    i.stackIndex = t
                }
            } else
                i.push(`Error: ${e}\n`);
            i.push("\n# Player Info\n"),
            i.push(this.debugPlayerInfo()),
            i.push("\n# Page Info\n"),
            i.push(`Page URL: ${document.location.href}\n`),
            this.swfUrl && i.push(`SWF URL: ${this.swfUrl}\n`),
            i.push("\n# Browser Info\n"),
            i.push(`User Agent: ${window.navigator.userAgent}\n`),
            i.push(`Platform: ${window.navigator.platform}\n`),
            i.push(`Has touch support: ${window.navigator.maxTouchPoints > 0}\n`),
            i.push("\n# Ruffle Info\n"),
            i.push("Version: 0.1.0\n"),
            i.push("Name: nightly 2022-07-14\n"),
            i.push("Channel: nightly\n"),
            i.push("Built: 2022-07-14T00:14:22.180Z\n"),
            i.push("Commit: cfc9f51c5d3c53c4591e6e2f631f1be17234ea5b\n"),
            i.push(`Is extension: ${this.isExtension}\n`);
            const s = i.join("")
              , r = new Date("2022-07-14T00:14:22.180Z")
              , o = new Date;
            o.setMonth(o.getMonth() - 6);
            const a = o > r;
            let l, c, u;
            if (a)
                l = `<a target="_top" href="${_}#downloads">Update Ruffle</a>`;
            else {
                const e = document.location.href.split(/[?#]/)[0];
                let t = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${e}`)}&template=error_report.md&labels=error-report&body=`
                  , n = encodeURIComponent(s);
                i.stackIndex > -1 && String(t + n).length > 8195 && (i[i.stackIndex] = null,
                n = encodeURIComponent(i.join(""))),
                t += n,
                l = `<a target="_top" href="${t}">Report Bug</a>`
            }
            switch (n) {
            case 2:
                c = '\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                ',
                u = `\n                    <li><a target="_top" href="${_}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `;
                break;
            case 4:
                c = "\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                ",
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 9:
                c = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                ',
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 8:
                c = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 11:
                c = "\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.</p>\n                    <p>Try contacting the website administrator for help.</p>\n                ",
                u = '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 6:
                c = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 3:
                c = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page has missing or invalid files for running Ruffle.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ",
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 7:
                c = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This can often resolve itself, so you can try reloading the page.</p>\n                    <p>Otherwise, please contact the website administrator.</p>\n                ",
                u = '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 10:
                c = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>To fix this, try opening your browser\'s settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".</p>\n                    <p>This will allow your browser to load the required ".wasm" files.</p>\n                    <p>If the issue persists, you might have to use a different browser.</p>\n                ',
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error">More Information</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            case 5:
                c = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                ",
                a && (c += "<p>You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: 2022-07-14T00:14:22.180Z).</p>"),
                u = `\n                    <li>${l}</li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `;
                break;
            case 1:
                c = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',
                u = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                break;
            default:
                c = "<p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>",
                c += a ? "<p>If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: 2022-07-14T00:14:22.180Z).</p>" : "<p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>",
                u = `\n                    <li>${l}</li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `
            }
            this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${c}</div>\n                <div id="panic-footer">\n                    <ul>${u}</ul>\n                </div>\n            </div>\n        `;
            const d = this.container.querySelector("#panic-view-details");
            d && (d.onclick = () => {
                const e = this.container.querySelector("#panic-body");
                return e.classList.add("details"),
                e.innerHTML = `<textarea>${s}</textarea>`,
                !1
            }
            ),
            this.destroy()
        }
        displayRootMovieDownloadFailedMessage() {
            if (window.location.origin === this.swfUrl.origin || !this.isExtension || !window.location.protocol.includes("http")) {
                const e = new Error("Failed to fetch: " + this.swfUrl);
                return e.ruffleIndexError = 11,
                void this.panic(e)
            }
            const e = document.createElement("div");
            e.id = "message_overlay",
            e.innerHTML = `<div class="message">\n            <p>Ruffle wasn't able to run the Flash embedded in this page.</p>\n            <p>You can try to open the file in a separate tab, to sidestep this issue.</p>\n            <div>\n                <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>\n            </div>\n        </div>`,
            this.container.prepend(e)
        }
        displayUnsupportedMessage() {
            const e = document.createElement("div");
            e.id = "message_overlay",
            e.innerHTML = '<div class="message">\n            <p>The Ruffle emulator does not yet support ActionScript 3, required by this content.</p>\n            <p>If you choose to run it anyway, interactivity will be missing or limited.</p>\n            <div>\n                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>',
            this.container.prepend(e),
            e.querySelector("#run-anyway-btn").onclick = () => {
                e.parentNode.removeChild(e)
            }
        }
        displayMessage(e) {
            const t = document.createElement("div");
            t.id = "message_overlay",
            t.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`,
            this.container.prepend(t),
            this.container.querySelector("#continue-btn").onclick = () => {
                t.parentNode.removeChild(t)
            }
        }
        debugPlayerInfo() {
            var e, t;
            return `Allows script access: ${null !== (t = null === (e = this.options) || void 0 === e ? void 0 : e.allowScriptAccess) && void 0 !== t && t}\n`
        }
        setMetadata(e) {
            this._metadata = e,
            this._readyState = 2,
            this.dispatchEvent(new Event(R.LOADED_METADATA)),
            this.dispatchEvent(new Event(R.LOADED_DATA))
        }
        setIsExtension(e) {
            this.isExtension = e
        }
    }
    function F(e, t) {
        switch (e || (e = "sameDomain"),
        e.toLowerCase()) {
        case "always":
            return !0;
        case "never":
            return !1;
        default:
            try {
                return new URL(window.location.href).origin === new URL(t,window.location.href).origin
            } catch (e) {
                return !1
            }
        }
    }
    function j(e) {
        return null === e || "true" === e.toLowerCase()
    }
    function O(e) {
        if (e) {
            let t = ""
              , n = "";
            try {
                const i = new URL(e,_);
                t = i.pathname,
                n = i.hostname.replace("www.", "")
            } catch (e) {}
            if (t.startsWith("/v/") && ("youtube.com" === n || "youtube-nocookie.com" === n))
                return !0
        }
        return !1
    }
    function P(e, t) {
        var n, i;
        const s = e.getAttribute(t)
          , r = null !== (i = null === (n = window.RufflePlayer) || void 0 === n ? void 0 : n.config) && void 0 !== i ? i : {};
        if (s)
            try {
                const n = new URL(s);
                "http:" === n.protocol && "https:" === window.location.protocol && !1 !== r.upgradeToHttps && (n.protocol = "https:",
                e.setAttribute(t, n.toString()))
            } catch (e) {}
    }
    function N(e) {
        if (e) {
            let t = "";
            try {
                t = new URL(e,_).pathname
            } catch (e) {}
            if (t && t.length >= 4) {
                const e = t.slice(-4).toLowerCase();
                if (".swf" === e || ".spl" === e)
                    return !0
            }
        }
        return !1
    }
    function T(e) {
        let t = e.parentElement;
        for (; null !== t; ) {
            switch (t.tagName) {
            case "AUDIO":
            case "VIDEO":
                return !0
            }
            t = t.parentElement
        }
        return !1
    }
    R.LOADED_METADATA = "loadedmetadata",
    R.LOADED_DATA = "loadeddata";
    class L extends R {
        constructor() {
            super()
        }
        connectedCallback() {
            var e, t, n, i, s, r, o, a, l, c, u, d, h, f, p;
            super.connectedCallback();
            const m = this.attributes.getNamedItem("src");
            if (m) {
                const g = null !== (t = null === (e = this.attributes.getNamedItem("allowScriptAccess")) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : null
                  , w = null !== (i = null === (n = this.attributes.getNamedItem("menu")) || void 0 === n ? void 0 : n.value) && void 0 !== i ? i : null;
                this.load({
                    url: m.value,
                    allowScriptAccess: F(g, m.value),
                    parameters: null === (s = this.attributes.getNamedItem("flashvars")) || void 0 === s ? void 0 : s.value,
                    backgroundColor: null === (r = this.attributes.getNamedItem("bgcolor")) || void 0 === r ? void 0 : r.value,
                    base: null === (o = this.attributes.getNamedItem("base")) || void 0 === o ? void 0 : o.value,
                    menu: j(w),
                    salign: null !== (l = null === (a = this.attributes.getNamedItem("salign")) || void 0 === a ? void 0 : a.value) && void 0 !== l ? l : "",
                    quality: null !== (u = null === (c = this.attributes.getNamedItem("quality")) || void 0 === c ? void 0 : c.value) && void 0 !== u ? u : "high",
                    scale: null !== (h = null === (d = this.attributes.getNamedItem("scale")) || void 0 === d ? void 0 : d.value) && void 0 !== h ? h : "showAll",
                    wmode: null !== (p = null === (f = this.attributes.getNamedItem("wmode")) || void 0 === f ? void 0 : f.value) && void 0 !== p ? p : "window"
                })
            }
        }
        get src() {
            var e;
            return null === (e = this.attributes.getNamedItem("src")) || void 0 === e ? void 0 : e.value
        }
        set src(e) {
            if (e) {
                const t = document.createAttribute("src");
                t.value = e,
                this.attributes.setNamedItem(t)
            } else
                this.attributes.removeNamedItem("src")
        }
        static get observedAttributes() {
            return ["src", "width", "height"]
        }
        attributeChangedCallback(e, t, n) {
            var i;
            if (super.attributeChangedCallback(e, t, n),
            this.isConnected && "src" === e) {
                let e;
                const t = this.attributes.getNamedItem("flashvars");
                t && (e = t.value);
                const n = this.attributes.getNamedItem("src");
                n && this.load({
                    url: n.value,
                    parameters: e,
                    base: null === (i = this.attributes.getNamedItem("base")) || void 0 === i ? void 0 : i.value
                })
            }
        }
        static isInterdictable(e) {
            if (T(e))
                return !1;
            if (!e.getAttribute("src"))
                return !1;
            if (O(e.getAttribute("src")))
                return P(e, "src"),
                !1;
            const t = e.getAttribute("type");
            if (!t)
                return N(e.getAttribute("src"));
            switch (t.toLowerCase()) {
            case x.toLowerCase():
            case k.toLowerCase():
            case E.toLowerCase():
            case I.toLowerCase():
                return !0;
            default:
                return !1
            }
        }
        static fromNativeEmbedElement(e) {
            const t = b("ruffle-embed", L)
              , n = document.createElement(t);
            return n.copyElement(e),
            n
        }
    }
    function M(e, t, n) {
        t = t.toLowerCase();
        for (const n in e)
            if (Object.hasOwnProperty.call(e, n) && t === n.toLowerCase())
                return e[n];
        return n
    }
    function U(e) {
        var t, n;
        const i = {};
        for (const s of e.children)
            if (s instanceof HTMLParamElement) {
                const e = null === (t = s.attributes.getNamedItem("name")) || void 0 === t ? void 0 : t.value
                  , r = null === (n = s.attributes.getNamedItem("value")) || void 0 === n ? void 0 : n.value;
                e && r && (i[e] = r)
            }
        return i
    }
    class D extends R {
        constructor() {
            super(),
            this.params = {}
        }
        connectedCallback() {
            var e;
            super.connectedCallback(),
            this.params = U(this);
            let t = null;
            this.attributes.getNamedItem("data") ? t = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (t = this.params.movie);
            const n = M(this.params, "allowScriptAccess", null)
              , i = M(this.params, "flashvars", this.getAttribute("flashvars"))
              , s = M(this.params, "bgcolor", this.getAttribute("bgcolor"))
              , r = M(this.params, "base", this.getAttribute("base"))
              , o = M(this.params, "menu", null)
              , a = M(this.params, "salign", "")
              , l = M(this.params, "quality", "high")
              , c = M(this.params, "scale", "showAll")
              , u = M(this.params, "wmode", "window");
            if (t) {
                const e = {
                    url: t
                };
                e.allowScriptAccess = F(n, t),
                i && (e.parameters = i),
                s && (e.backgroundColor = s),
                r && (e.base = r),
                e.menu = j(o),
                a && (e.salign = a),
                l && (e.quality = l),
                c && (e.scale = c),
                u && (e.wmode = u),
                this.load(e)
            }
        }
        debugPlayerInfo() {
            var e;
            let t = super.debugPlayerInfo();
            t += "Player type: Object\n";
            let n = null;
            return this.attributes.getNamedItem("data") ? n = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (n = this.params.movie),
            t += `SWF URL: ${n}\n`,
            Object.keys(this.params).forEach((e => {
                t += `Param ${e}: ${this.params[e]}\n`
            }
            )),
            Object.keys(this.attributes).forEach((e => {
                var n;
                t += `Attribute ${e}: ${null === (n = this.attributes.getNamedItem(e)) || void 0 === n ? void 0 : n.value}\n`
            }
            )),
            t
        }
        get data() {
            return this.getAttribute("data")
        }
        set data(e) {
            if (e) {
                const t = document.createAttribute("data");
                t.value = e,
                this.attributes.setNamedItem(t)
            } else
                this.attributes.removeNamedItem("data")
        }
        static isInterdictable(e) {
            var t, n;
            if (T(e))
                return !1;
            if (e.getElementsByTagName("ruffle-object").length > 0 || e.getElementsByTagName("ruffle-embed").length > 0)
                return !1;
            const i = null === (t = e.attributes.getNamedItem("data")) || void 0 === t ? void 0 : t.value.toLowerCase()
              , s = U(e);
            let r;
            if (i) {
                if (O(i))
                    return P(e, "data"),
                    !1;
                r = N(i)
            } else {
                if (!s || !s.movie)
                    return !1;
                if (O(s.movie)) {
                    const t = e.querySelector("param[name='movie']");
                    if (t) {
                        P(t, "value");
                        const n = t.getAttribute("value");
                        n && e.setAttribute("data", n)
                    }
                    return !1
                }
                r = N(s.movie)
            }
            const o = null === (n = e.attributes.getNamedItem("classid")) || void 0 === n ? void 0 : n.value.toLowerCase();
            if (o === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase())
                return !Array.from(e.getElementsByTagName("object")).some(D.isInterdictable) && !Array.from(e.getElementsByTagName("embed")).some(L.isInterdictable);
            if (o)
                return !1;
            const a = e.attributes.getNamedItem("type");
            if (!a)
                return r;
            switch (a.value.toLowerCase()) {
            case x.toLowerCase():
            case k.toLowerCase():
            case E.toLowerCase():
            case I.toLowerCase():
                return !0;
            default:
                return !1
            }
        }
        static fromNativeObjectElement(e) {
            const t = b("ruffle-object", D)
              , n = document.createElement(t);
            for (const t of Array.from(e.getElementsByTagName("embed")))
                L.isInterdictable(t) && t.remove();
            for (const t of Array.from(e.getElementsByTagName("object")))
                D.isInterdictable(t) && t.remove();
            return n.copyElement(e),
            n
        }
    }
    var $, B;
    let q;
    const W = null !== (B = null === ($ = window.RufflePlayer) || void 0 === $ ? void 0 : $.config) && void 0 !== B ? B : {}
      , V = d(W) + "ruffle.js";
    let z, H, Y, Z;
    function Q() {
        try {
            z = null != z ? z : document.getElementsByTagName("object"),
            H = null != H ? H : document.getElementsByTagName("embed");
            for (const e of Array.from(z))
                if (D.isInterdictable(e)) {
                    const t = D.fromNativeObjectElement(e);
                    t.setIsExtension(q),
                    e.replaceWith(t)
                }
            for (const e of Array.from(H))
                if (L.isInterdictable(e)) {
                    const t = L.fromNativeEmbedElement(e);
                    t.setIsExtension(q),
                    e.replaceWith(t)
                }
        } catch (e) {
            console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)
        }
    }
    function G() {
        Y = null != Y ? Y : document.getElementsByTagName("iframe"),
        Z = null != Z ? Z : document.getElementsByTagName("frame"),
        [Y, Z].forEach((e => {
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (void 0 !== n.dataset.rufflePolyfilled)
                    continue;
                n.dataset.rufflePolyfilled = "";
                const i = n.contentWindow
                  , s = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
                try {
                    "complete" === i.document.readyState && J(i, s)
                } catch (e) {
                    q || console.warn(s + e)
                }
                n.addEventListener("load", ( () => {
                    J(i, s)
                }
                ), !1)
            }
        }
        ))
    }
    async function J(e, t) {
        var n;
        let i;
        await new Promise((e => {
            window.setTimeout(( () => {
                e()
            }
            ), 100)
        }
        ));
        try {
            if (i = e.document,
            !i)
                return
        } catch (e) {
            return void (q || console.warn(t + e))
        }
        if (q || void 0 === i.documentElement.dataset.ruffleOptout)
            if (q)
                e.RufflePlayer || (e.RufflePlayer = {}),
                e.RufflePlayer.config = Object.assign(Object.assign({}, W), null !== (n = e.RufflePlayer.config) && void 0 !== n ? n : {});
            else if (!e.RufflePlayer) {
                const t = i.createElement("script");
                t.setAttribute("src", V),
                t.onload = () => {
                    e.RufflePlayer = {},
                    e.RufflePlayer.config = W
                }
                ,
                i.head.appendChild(t)
            }
    }
    class X {
        constructor(e, t, n, i, s) {
            this.major = e,
            this.minor = t,
            this.patch = n,
            this.prIdent = i,
            this.buildIdent = s
        }
        static fromSemver(e) {
            const t = e.split("+")
              , n = t[0].split("-")
              , i = n[0].split(".")
              , s = parseInt(i[0], 10);
            let r = 0
              , o = 0
              , a = null
              , l = null;
            return void 0 !== i[1] && (r = parseInt(i[1], 10)),
            void 0 !== i[2] && (o = parseInt(i[2], 10)),
            void 0 !== n[1] && (a = n[1].split(".")),
            void 0 !== t[1] && (l = t[1].split(".")),
            new X(s,r,o,a,l)
        }
        isCompatibleWith(e) {
            return 0 !== this.major && this.major === e.major || 0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor || 0 === this.major && 0 === e.major && 0 === this.minor && 0 === e.minor && 0 !== this.patch && this.patch === e.patch
        }
        hasPrecedenceOver(e) {
            if (this.major > e.major)
                return !0;
            if (this.major < e.major)
                return !1;
            if (this.minor > e.minor)
                return !0;
            if (this.minor < e.minor)
                return !1;
            if (this.patch > e.patch)
                return !0;
            if (this.patch < e.patch)
                return !1;
            if (null === this.prIdent && null !== e.prIdent)
                return !0;
            if (null !== this.prIdent && null !== e.prIdent) {
                const t = /^[0-9]*$/;
                for (let n = 0; n < this.prIdent.length && n < e.prIdent.length; n += 1) {
                    if (!t.test(this.prIdent[n]) && t.test(e.prIdent[n]))
                        return !0;
                    if (t.test(this.prIdent[n]) && t.test(e.prIdent[n])) {
                        if (parseInt(this.prIdent[n], 10) > parseInt(e.prIdent[n], 10))
                            return !0;
                        if (parseInt(this.prIdent[n], 10) < parseInt(e.prIdent[n], 10))
                            return !1
                    } else {
                        if (t.test(this.prIdent[n]) && !t.test(e.prIdent[n]))
                            return !1;
                        if (!t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) {
                            if (this.prIdent[n] > e.prIdent[n])
                                return !0;
                            if (this.prIdent[n] < e.prIdent[n])
                                return !1
                        }
                    }
                }
                return this.prIdent.length > e.prIdent.length
            }
            return !1
        }
        isEqual(e) {
            return this.major === e.major && this.minor === e.minor && this.patch === e.patch
        }
        isStableOrCompatiblePrerelease(e) {
            return null === e.prIdent || this.major === e.major && this.minor === e.minor && this.patch === e.patch
        }
    }
    class K {
        constructor(e) {
            this.requirements = e
        }
        satisfiedBy(e) {
            for (let t = 0; t < this.requirements.length; t += 1) {
                let n = !0;
                for (let i = 0; i < this.requirements[t].length; i += 1) {
                    const s = this.requirements[t][i].comparator
                      , r = this.requirements[t][i].version;
                    n = n && r.isStableOrCompatiblePrerelease(e),
                    "" === s || "=" === s ? n = n && r.isEqual(e) : ">" === s ? n = n && e.hasPrecedenceOver(r) : ">=" === s ? n = n && (e.hasPrecedenceOver(r) || r.isEqual(e)) : "<" === s ? n = n && r.hasPrecedenceOver(e) : "<=" === s ? n = n && (r.hasPrecedenceOver(e) || r.isEqual(e)) : "^" === s && (n = n && r.isCompatibleWith(e))
                }
                if (n)
                    return !0
            }
            return !1
        }
        static fromRequirementString(e) {
            const t = e.split(" ");
            let n = [];
            const i = [];
            for (let e = 0; e < t.length; e += 1)
                if ("||" === t[e])
                    n.length > 0 && (i.push(n),
                    n = []);
                else if (t[e].length > 0) {
                    const i = /[0-9]/.exec(t[e]);
                    if (i) {
                        const s = t[e].slice(0, i.index).trim()
                          , r = X.fromSemver(t[e].slice(i.index).trim());
                        n.push({
                            comparator: s,
                            version: r
                        })
                    }
                }
            return n.length > 0 && i.push(n),
            new K(i)
        }
    }
    class ee {
        constructor(e) {
            this.sources = {},
            this.config = {},
            this.invoked = !1,
            this.newestName = null,
            this.conflict = null,
            null != e && (e instanceof ee ? (this.sources = e.sources,
            this.config = e.config,
            this.invoked = e.invoked,
            this.conflict = e.conflict,
            this.newestName = e.newestName,
            e.superseded()) : e.constructor === Object && e.config instanceof Object ? this.config = e.config : this.conflict = e),
            "loading" === document.readyState ? document.addEventListener("readystatechange", this.init.bind(this)) : window.setTimeout(this.init.bind(this), 0)
        }
        get version() {
            return "0.1.0"
        }
        registerSource(e, t) {
            this.sources[e] = t
        }
        newestSourceName() {
            let e = null
              , t = X.fromSemver("0.0.0");
            for (const n in this.sources)
                if (Object.prototype.hasOwnProperty.call(this.sources, n)) {
                    const i = X.fromSemver(this.sources[n].version);
                    i.hasPrecedenceOver(t) && (e = n,
                    t = i)
                }
            return e
        }
        init() {
            if (!this.invoked) {
                if (this.invoked = !0,
                this.newestName = this.newestSourceName(),
                null === this.newestName)
                    throw new Error("No registered Ruffle source!");
                !1 !== this.config.polyfills && this.sources[this.newestName].polyfill("extension" === this.newestName)
            }
        }
        newest() {
            const e = this.newestSourceName();
            return null !== e ? this.sources[e] : null
        }
        satisfying(e) {
            const t = K.fromRequirementString(e);
            let n = null;
            for (const e in this.sources)
                if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
                    const i = X.fromSemver(this.sources[e].version);
                    t.satisfiedBy(i) && (n = this.sources[e])
                }
            return n
        }
        localCompatible() {
            return void 0 !== this.sources.local ? this.satisfying("^" + this.sources.local.version) : this.newest()
        }
        local() {
            return void 0 !== this.sources.local ? this.satisfying("=" + this.sources.local.version) : this.newest()
        }
        superseded() {
            this.invoked = !0
        }
        static negotiate(e, t, n) {
            let i;
            return i = e instanceof ee ? e : new ee(e),
            void 0 !== t && void 0 !== n && (i.registerSource(t, n),
            !1 !== i.config.polyfills && n.pluginPolyfill()),
            i
        }
    }
    window.RufflePlayer = ee.negotiate(window.RufflePlayer, "local", new class {
        constructor(e) {
            this.name = e
        }
        get version() {
            return "0.1.0"
        }
        polyfill(e) {
            !function(e) {
                q = e,
                Q(),
                G(),
                new MutationObserver((function(e) {
                    e.some((e => e.addedNodes.length > 0)) && (Q(),
                    G())
                }
                )).observe(document, {
                    childList: !0,
                    subtree: !0
                })
            }(e)
        }
        pluginPolyfill() {
            !function(e) {
                "install"in navigator.plugins && navigator.plugins.install || Object.defineProperty(navigator, "plugins", {
                    value: new g(navigator.plugins),
                    writable: !1
                }),
                navigator.plugins.install(e),
                !(e.length > 0) || "install"in navigator.mimeTypes && navigator.mimeTypes.install || Object.defineProperty(navigator, "mimeTypes", {
                    value: new p(navigator.mimeTypes),
                    writable: !1
                });
                const t = navigator.mimeTypes;
                for (let n = 0; n < e.length; n += 1)
                    t.install(e[n])
            }(w)
        }
        createPlayer() {
            const e = b("ruffle-player", R);
            return document.createElement(e)
        }
    }
    ("local"))
}
)();
//# sourceMappingURL=ruffle.js.map