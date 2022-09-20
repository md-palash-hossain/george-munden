(() => {
  "use strict";
  var e,
    t,
    r,
    n,
    o,
    a = {},
    s = {};
  function i(e) {
    var t = s[e];
    if (void 0 !== t) return t.exports;
    var r = (s[e] = { id: e, loaded: !1, exports: {} });
    return a[e].call(r.exports, r, r.exports, i), (r.loaded = !0), r.exports;
  }
  (i.m = a),
    (i.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (i.amdO = {}),
    (e = []),
    (i.O = (t, r, n, o) => {
      if (!r) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [r, n, o] = e[l], s = !0, d = 0; d < r.length; d++)
            (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](r[d]))
              ? r.splice(d--, 1)
              : ((s = !1), o < a && (a = o));
          if (s) {
            e.splice(l--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [r, n, o];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      i.r(o);
      var a = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var s = 2 & n && e; "object" == typeof s && !~t.indexOf(s); s = r(s))
        Object.getOwnPropertyNames(s).forEach((t) => (a[t] = () => e[t]));
      return (a.default = () => e), i.d(o, a), o;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      404 === e
        ? "88036148cf5f4aa4.js"
        : 553 === e
        ? "462ea8ec2452a384.vendor.js"
        : 46 === e
        ? "7b27f07fa14f4e6c.js"
        : 342 === e
        ? "adcb8bd816eca101.js"
        : 360 === e
        ? "6361248fa32e75f5.vendor.js"
        : 501 === e
        ? "5882974707bfa3c6.vendor.js"
        : 84 === e
        ? "1f59bed74aae8986.vendor.js"
        : 311 === e
        ? "b4cf7413e5433e96.vendor.js"
        : 887 === e
        ? "752d526c14c0fcd0.js"
        : 848 === e
        ? "a5fa182d228a00d8.js"
        : 196 === e
        ? "5dcb4616e7062e75.js"
        : 24 === e
        ? "848acc9748765360.vendor.js"
        : 456 === e
        ? "1b203c93f4b26cf6.vendor.js"
        : void 0),
    (i.miniCssF = (e) =>
      404 === e
        ? "1e41492cd2bcf705.ltr.css"
        : { 553: 1, 360: 1, 501: 1, 84: 1, 311: 1, 24: 1, 456: 1 }[e]
        ? "ef46db3751d8e999.vendor.ltr.css"
        : 46 === e
        ? "7bdd7522c63e5bd4.ltr.css"
        : 342 === e
        ? "a0ecd07684c4803f.ltr.css"
        : 887 === e
        ? "b125265dbce96e1e.ltr.css"
        : { 848: 1, 196: 1 }[e]
        ? "ef46db3751d8e999.ltr.css"
        : void 0),
    (i.miniCssFRtl = (e) =>
      810 === e
        ? "c166e5d20ad58f4e.runtime.rtl.css"
        : {
            33: 1,
            922: 1,
            553: 1,
            360: 1,
            501: 1,
            84: 1,
            311: 1,
            24: 1,
            456: 1,
          }[e]
        ? "c166e5d20ad58f4e.vendor.rtl.css"
        : 45 === e
        ? "be70fde6c55076f2.rtl.css"
        : 404 === e
        ? "8b7bdbee5fe5f96c.rtl.css"
        : 46 === e
        ? "47e2ae422d83af20.rtl.css"
        : 342 === e
        ? "d71869eeaa343e8b.rtl.css"
        : 887 === e
        ? "29b3ff41a8763a43.rtl.css"
        : { 848: 1, 196: 1 }[e]
        ? "c166e5d20ad58f4e.rtl.css"
        : void 0),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (o = "@canva/web:"),
    (i.l = (e, t, r, a) => {
      if (n[e]) n[e].push(t);
      else {
        var s, d;
        if (void 0 !== r)
          for (
            var c = document.getElementsByTagName("script"), l = 0;
            l < c.length;
            l++
          ) {
            var f = c[l];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == o + r
            ) {
              s = f;
              break;
            }
          }
        s ||
          ((d = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          s.setAttribute("data-webpack", o + r),
          (s.src = e),
          (s.async = !1)),
          (n[e] = [t]);
        var u = (t, r) => {
            (s.onerror = s.onload = null), clearTimeout(p);
            var o = n[e];
            if (
              (delete n[e],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = u.bind(null, s.onerror)),
          (s.onload = u.bind(null, s.onload)),
          d && document.head.appendChild(s);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      const e = i.e,
        t = function e(t, r, n) {
          return t().catch(function (o) {
            return 0 === n
              ? Promise.reject(o)
              : ((a = r),
                new Promise(function (e) {
                  setTimeout(e, a);
                })).then(function () {
                  return e(t, r, n - 1);
                });
            var a;
          });
        };
      i.e = function (r) {
        return t(
          function () {
            return e(r);
          },
          1e3,
          5
        );
      };
    })(),
    (i.p = ""),
    (() => {
      const e = JSON.parse(
          '{"3424":404,"4908":848,"15573":46,"19280":404,"19590":887,"21734":196,"31895":848,"31937":196,"32342":196,"32871":456,"40459":196,"42171":848,"49349":196,"60329":404,"60628":404,"62532":46,"73978":196,"80224":404,"82794":196,"89512":196,"91007":342,"92592":311,"97762":501,"97914":24}'
        ),
        t = JSON.parse(
          '{"24":[360],"33":[],"45":[],"46":[553,404],"84":[],"196":[360],"311":[84],"342":[404],"360":[],"404":[],"456":[],"501":[360],"553":[],"848":[84,404],"887":[404],"922":[]}'
        ),
        r = (e, n) => {
          if (!n.has(e))
            return (
              n.add(e),
              t[e].forEach((e) => r(e, n)),
              t[e].forEach((e) => r(e, n)),
              n
            );
        };
      i.me = function (t) {
        const n = e[t];
        if (null == n) return Promise.resolve(i(t));
        const o = Array.from(r(n, new Set()));
        return Promise.all(o.map((e) => i.e(e))).then(() => i(t));
      };
    })(),
    (() => {
      let e =
        "undefined" != typeof self && void 0 !== self.document
          ? self.document.body.parentElement.getAttribute("dir")
          : "ltr";
      "ltr" !== e &&
        "rtl" !== e &&
        (console.warn(
          "Could not determine the direction of text, please check that the dir attribute is set on the html tag"
        ),
        (e = "ltr")),
        "rtl" === e && (i.miniCssF = i.miniCssFRtl);
    })();
  var d,
    c,
    l = {};
  (i.f.compat = (e, t) => {
    !(function (e, t, r) {
      if (null == t[e]) {
        let r, o;
        try {
          (r = window.cmsg.locale || "en"),
            (o = window.cmsg.assets[r][e].js || []);
        } catch (n) {
          return;
        }
        t[e] = Promise.all(
          o.map(
            (r) =>
              new Promise((n, o) => {
                const a = document.createElement("script");
                (a.async = !1),
                  (a.onerror = () => {
                    delete t[e],
                      o(new Error(`Fail to load message files@${r}`));
                  }),
                  (a.onload = () => {
                    (t[e] = 0), n();
                  }),
                  (a.src = i.p + r),
                  document.head.appendChild(a);
              })
          )
        );
      }
      t[e] && r.push(t[e]);
    })(e, l, t);
  }),
    (d = (e) =>
      new Promise((t, r) => {
        var n = i.miniCssF(e),
          o = i.p + n;
        if (
          ((e, t) => {
            for (
              var r = document.getElementsByTagName("link"), n = 0;
              n < r.length;
              n++
            ) {
              var o =
                (s = r[n]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (o === e || o === t)) return s;
            }
            var a = document.getElementsByTagName("style");
            for (n = 0; n < a.length; n++) {
              var s;
              if ((o = (s = a[n]).getAttribute("data-href")) === e || o === t)
                return s;
            }
          })(n, o)
        )
          return t();
        ((e, t, r, n) => {
          var o = document.createElement("link");
          (o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.onerror = o.onload =
              (a) => {
                if (((o.onerror = o.onload = null), "load" === a.type)) r();
                else {
                  var s = a && ("load" === a.type ? "missing" : a.type),
                    i = (a && a.target && a.target.href) || t,
                    d = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = s),
                    (d.request = i),
                    o.parentNode.removeChild(o),
                    n(d);
                }
              }),
            (o.href = t),
            ((e) => {
              document.querySelector(".css-link")
                ? document.body.appendChild(e)
                : document.head.appendChild(e);
            })(o);
        })(e, o, t, r);
      })),
    (c = { 810: 0 }),
    (i.f.miniCss = (e, t) => {
      c[e]
        ? t.push(c[e])
        : 0 !== c[e] &&
          { 46: 1, 342: 1, 404: 1, 887: 1 }[e] &&
          t.push(
            (c[e] = d(e).then(
              () => {
                c[e] = 0;
              },
              (t) => {
                throw (delete c[e], t);
              }
            ))
          );
    }),
    (() => {
      var e = { 810: 0 };
      (i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else if (810 != t) {
            var o = new Promise((r, o) => (n = e[t] = [r, o]));
            r.push((n[2] = o));
            var a = i.p + i.u(t),
              s = new Error();
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = a),
                    n[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          } else e[t] = 0;
      }),
        (i.O.j = (t) => 0 === e[t]);
      var t = (t, r) => {
          var n,
            o,
            [a, s, d] = r,
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
            if (d) var l = d(i);
          }
          for (t && t(r); c < a.length; c++)
            (o = a[c]), i.o(e, o) && e[o] && e[o][0](), (e[a[c]] = 0);
          return i.O(l);
        },
        r = (self.webpackChunk_canva_web = self.webpackChunk_canva_web || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
})();
//# sourceMappingURL=sourcemaps/cb9b46eae5e99a2a.runtime.js.map
