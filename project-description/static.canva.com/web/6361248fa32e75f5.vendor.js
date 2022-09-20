/*! For license information please see 6361248fa32e75f5.vendor.js.LICENSE.txt */
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
  [360],
  {
    37051: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__;
      (function () {
        "undefined" != typeof self && self,
          (__WEBPACK_AMD_DEFINE_ARRAY__ = []),
          (__WEBPACK_AMD_DEFINE_FACTORY__ = function () {
            var t,
              n = {};
            function i(t) {
              var e = 0;
              return function () {
                return e < t.length
                  ? { done: !1, value: t[e++] }
                  : { done: !0 };
              };
            }
            function r(t) {
              var e =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                t[Symbol.iterator];
              return e ? e.call(t) : { next: i(t) };
            }
            var o =
                "function" == typeof Object.create
                  ? Object.create
                  : function (t) {
                      function e() {}
                      return (e.prototype = t), new e();
                    },
              s =
                "function" == typeof Object.defineProperties
                  ? Object.defineProperty
                  : function (t, e, n) {
                      return (
                        t == Array.prototype ||
                          t == Object.prototype ||
                          (t[e] = n.value),
                        t
                      );
                    };
            function u(t) {
              t = [
                "object" == typeof globalThis && globalThis,
                t,
                "object" == typeof window && window,
                "object" == typeof self && self,
                "object" == typeof __webpack_require__.g &&
                  __webpack_require__.g,
              ];
              for (var e = 0; e < t.length; ++e) {
                var n = t[e];
                if (n && n.Math == Math) return n;
              }
              throw Error("Cannot find global object");
            }
            var l,
              f = u(this);
            function p(t, e) {
              if (e)
                t: {
                  var n = f;
                  t = t.split(".");
                  for (var i = 0; i < t.length - 1; i++) {
                    var r = t[i];
                    if (!(r in n)) break t;
                    n = n[r];
                  }
                  (e = e((i = n[(t = t[t.length - 1])]))) != i &&
                    null != e &&
                    s(n, t, { configurable: !0, writable: !0, value: e });
                }
            }
            if ("function" == typeof Object.setPrototypeOf)
              l = Object.setPrototypeOf;
            else {
              var v;
              t: {
                var y = { sf: !0 },
                  m = {};
                try {
                  (m.__proto__ = y), (v = m.sf);
                  break t;
                } catch (a) {}
                v = !1;
              }
              l = v
                ? function (t, e) {
                    if (((t.__proto__ = e), t.__proto__ !== e))
                      throw new TypeError(t + " is not extensible");
                    return t;
                  }
                : null;
            }
            var _ = l;
            function w(t, e) {
              if (
                ((t.prototype = o(e.prototype)),
                (t.prototype.constructor = t),
                _)
              )
                _(t, e);
              else
                for (var n in e)
                  if ("prototype" != n)
                    if (Object.defineProperties) {
                      var i = Object.getOwnPropertyDescriptor(e, n);
                      i && Object.defineProperty(t, n, i);
                    } else t[n] = e[n];
              t.Jg = e.prototype;
            }
            p("String.prototype.repeat", function (t) {
              return (
                t ||
                function (t) {
                  if (null == this)
                    throw new TypeError(
                      "The 'this' value for String.prototype.repeat must not be null or undefined"
                    );
                  var e = this + "";
                  if (0 > t || 1342177279 < t)
                    throw new RangeError("Invalid count value");
                  t |= 0;
                  for (var n = ""; t; )
                    1 & t && (n += e), (t >>>= 1) && (e += e);
                  return n;
                }
              );
            }),
              p("Promise", function (t) {
                function e(t) {
                  (this.Cb = 0), (this.nd = void 0), (this.ib = []);
                  var e = this.Oc();
                  try {
                    t(e.resolve, e.reject);
                  } catch (k) {
                    e.reject(k);
                  }
                }
                function n() {
                  this.Ca = null;
                }
                function i(t) {
                  return t instanceof e
                    ? t
                    : new e(function (e) {
                        e(t);
                      });
                }
                if (t) return t;
                n.prototype.be = function (t) {
                  if (null == this.Ca) {
                    this.Ca = [];
                    var e = this;
                    this.ce(function () {
                      e.Ff();
                    });
                  }
                  this.Ca.push(t);
                };
                var o = f.setTimeout;
                (n.prototype.ce = function (t) {
                  o(t, 0);
                }),
                  (n.prototype.Ff = function () {
                    for (; this.Ca && this.Ca.length; ) {
                      var t = this.Ca;
                      this.Ca = [];
                      for (var e = 0; e < t.length; ++e) {
                        var n = t[e];
                        t[e] = null;
                        try {
                          n();
                        } catch (i) {
                          this.vf(i);
                        }
                      }
                    }
                    this.Ca = null;
                  }),
                  (n.prototype.vf = function (t) {
                    this.ce(function () {
                      throw t;
                    });
                  }),
                  (e.prototype.Oc = function () {
                    function t(t) {
                      return function (i) {
                        n || ((n = !0), t.call(e, i));
                      };
                    }
                    var e = this,
                      n = !1;
                    return { resolve: t(this.Rf), reject: t(this.kd) };
                  }),
                  (e.prototype.Rf = function (t) {
                    if (t === this)
                      this.kd(
                        new TypeError("A Promise cannot resolve to itself")
                      );
                    else if (t instanceof e) this.gg(t);
                    else {
                      t: switch (typeof t) {
                        case "object":
                          var n = null != t;
                          break t;
                        case "function":
                          n = !0;
                          break t;
                        default:
                          n = !1;
                      }
                      n ? this.Qf(t) : this.ke(t);
                    }
                  }),
                  (e.prototype.Qf = function (t) {
                    var e = void 0;
                    try {
                      e = t.then;
                    } catch (k) {
                      return void this.kd(k);
                    }
                    "function" == typeof e ? this.hg(e, t) : this.ke(t);
                  }),
                  (e.prototype.kd = function (t) {
                    this.qe(2, t);
                  }),
                  (e.prototype.ke = function (t) {
                    this.qe(1, t);
                  }),
                  (e.prototype.qe = function (t, e) {
                    if (0 != this.Cb)
                      throw Error(
                        "Cannot settle(" +
                          t +
                          ", " +
                          e +
                          "): Promise already settled in state" +
                          this.Cb
                      );
                    (this.Cb = t), (this.nd = e), this.Gf();
                  }),
                  (e.prototype.Gf = function () {
                    if (null != this.ib) {
                      for (var t = 0; t < this.ib.length; ++t) s.be(this.ib[t]);
                      this.ib = null;
                    }
                  });
                var s = new n();
                return (
                  (e.prototype.gg = function (t) {
                    var e = this.Oc();
                    t.dc(e.resolve, e.reject);
                  }),
                  (e.prototype.hg = function (t, e) {
                    var n = this.Oc();
                    try {
                      t.call(e, n.resolve, n.reject);
                    } catch (i) {
                      n.reject(i);
                    }
                  }),
                  (e.prototype.then = function (t, n) {
                    function i(t, e) {
                      return "function" == typeof t
                        ? function (e) {
                            try {
                              r(t(e));
                            } catch (n) {
                              o(n);
                            }
                          }
                        : e;
                    }
                    var r,
                      o,
                      s = new e(function (t, e) {
                        (r = t), (o = e);
                      });
                    return this.dc(i(t, r), i(n, o)), s;
                  }),
                  (e.prototype.catch = function (t) {
                    return this.then(void 0, t);
                  }),
                  (e.prototype.dc = function (t, e) {
                    function n() {
                      switch (i.Cb) {
                        case 1:
                          t(i.nd);
                          break;
                        case 2:
                          e(i.nd);
                          break;
                        default:
                          throw Error("Unexpected state: " + i.Cb);
                      }
                    }
                    var i = this;
                    null == this.ib ? s.be(n) : this.ib.push(n);
                  }),
                  (e.resolve = i),
                  (e.reject = function (t) {
                    return new e(function (e, n) {
                      n(t);
                    });
                  }),
                  (e.race = function (t) {
                    return new e(function (e, n) {
                      for (var o = r(t), s = o.next(); !s.done; s = o.next())
                        i(s.value).dc(e, n);
                    });
                  }),
                  (e.all = function (t) {
                    var n = r(t),
                      o = n.next();
                    return o.done
                      ? i([])
                      : new e(function (t, e) {
                          function r(e) {
                            return function (n) {
                              (s[e] = n), 0 == --a && t(s);
                            };
                          }
                          var s = [],
                            a = 0;
                          do {
                            s.push(void 0),
                              a++,
                              i(o.value).dc(r(s.length - 1), e),
                              (o = n.next());
                          } while (!o.done);
                        });
                  }),
                  e
                );
              });
            var S = {
                pg: function (t) {
                  var e = "=".repeat((4 - (t.length % 4)) % 4);
                  (t = (t + e).replace(/\-/g, "+").replace(/_/g, "/")),
                    (t = atob(t)),
                    (e = new Uint8Array(t.length));
                  for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
                  return e;
                },
              },
              E = {
                fc: function () {
                  function t(t) {
                    var e = (Math.random().toString(16) + "000000000").substr(
                      2,
                      8
                    );
                    return t ? "-" + e.substr(0, 4) + "-" + e.substr(4, 4) : e;
                  }
                  return t() + t(!0) + t(!0) + t();
                },
              };
            function D(t) {
              var e = F;
              (this.Vd = "undefined" == typeof window ? self : window),
                (this.C = t),
                (this.F = e);
            }
            function x(t) {
              if ("indexedDB" in t.Vd) return t.Vd.indexedDB;
            }
            function A(t) {
              try {
                if (null == x(t)) return !1;
                if (
                  (x(t).open("Braze IndexedDB Support Test"),
                  "undefined" != typeof window)
                ) {
                  var e = window.Ag || window.cb || window.Fg;
                  if (e && e.Tf && e.Tf.id)
                    return (
                      t.F.info(
                        "Not using IndexedDB for storage because we are running inside an extension"
                      ),
                      !1
                    );
                }
                return !0;
              } catch (c) {
                return (
                  t.F.info(
                    "Not using IndexedDB for storage due to following error: " +
                      c
                  ),
                  !1
                );
              }
            }
            function T(t, e, n) {
              var i = x(t).open(t.C.P, t.C.VERSION);
              return null == i
                ? ("function" == typeof n && n(), !1)
                : ((i.onupgradeneeded = function (e) {
                    for (var n in (t.F.info(
                      "Upgrading indexedDB " +
                        t.C.P +
                        " to v" +
                        t.C.VERSION +
                        "..."
                    ),
                    (e = e.target.result),
                    t.C.L))
                      t.C.L.hasOwnProperty(n) &&
                        !e.objectStoreNames.contains(t.C.L[n]) &&
                        e.createObjectStore(t.C.L[n]);
                  }),
                  (i.onsuccess = function (i) {
                    var r = i.target.result;
                    (r.onversionchange = function () {
                      r.close(),
                        "function" == typeof n && n(),
                        t.F.error(
                          "Needed to close the database unexpectedly because of an upgrade in another tab"
                        );
                    }),
                      e(r);
                  }),
                  (i.onerror = function (e) {
                    return (
                      t.F.info(
                        "Could not open indexedDB " +
                          t.C.P +
                          " v" +
                          t.C.VERSION +
                          ": " +
                          e.target.errorCode
                      ),
                      "function" == typeof n && n(),
                      !0
                    );
                  }),
                  !0);
            }
            function C(t, e, n, i) {
              A(t)
                ? T(
                    t,
                    function (r) {
                      r.objectStoreNames.contains(e)
                        ? (((r = r
                            .transaction([e], "readonly")
                            .objectStore(e)
                            .openCursor(null, "prev")).onerror = function () {
                            t.F.error(
                              "Could not open cursor for " +
                                e +
                                " on indexedDB " +
                                t.C.P
                            ),
                              "function" == typeof i && i();
                          }),
                          (r.onsuccess = function (t) {
                            null != (t = t.target.result) &&
                            null != t.value &&
                            null != t.key
                              ? n(t.key, t.value)
                              : "function" == typeof i && i();
                          }))
                        : (t.F.error(
                            "Could not retrieve last record from " +
                              e +
                              " on indexedDB " +
                              t.C.P +
                              " - " +
                              e +
                              " is not a valid objectStore"
                          ),
                          "function" == typeof i && i());
                    },
                    i
                  )
                : "function" == typeof i && i();
            }
            function O(t, e, n) {
              A(t) &&
                T(t, function (i) {
                  i.objectStoreNames.contains(e)
                    ? (i
                        .transaction([e], "readwrite")
                        .objectStore(e)
                        .delete(n).onerror = function () {
                        t.F.error(
                          "Could not delete record " +
                            n +
                            " from " +
                            e +
                            " on indexedDB " +
                            t.C.P
                        );
                      })
                    : t.F.error(
                        "Could not delete record " +
                          n +
                          " from " +
                          e +
                          " on indexedDB " +
                          t.C.P +
                          " - " +
                          e +
                          " is not a valid objectStore"
                      );
                });
            }
            function I(t, e, n) {
              A(t) &&
                T(t, function (i) {
                  if (i.objectStoreNames.contains(e)) {
                    var r = i.transaction([e], "readwrite").objectStore(e);
                    i = r.openCursor();
                    var o = [];
                    (i.onerror = function () {
                      0 < o.length
                        ? (t.F.info(
                            "Cursor closed midway through for " +
                              e +
                              " on indexedDB " +
                              t.C.P
                          ),
                          n(o))
                        : t.F.error(
                            "Could not open cursor for " +
                              e +
                              " on indexedDB " +
                              t.C.P
                          );
                    }),
                      (i.onsuccess = function (t) {
                        var e = t.target.result;
                        null != e
                          ? (null != e.value &&
                              null != e.key &&
                              (r.delete(e.key).onsuccess = function () {
                                o.push(e.value);
                              }),
                            e.continue())
                          : 0 < o.length && n(o);
                      });
                  } else t.F.error("Could not retrieve objects from " + e + " on indexedDB " + t.C.P + " - " + e + " is not a valid objectStore");
                });
            }
            (D.prototype.setItem = function (t, e, n, i, r) {
              if (!A(this)) return "function" == typeof r && r(), !1;
              var o = this;
              return T(
                this,
                function (s) {
                  s.objectStoreNames.contains(t)
                    ? (((s = s
                        .transaction([t], "readwrite")
                        .objectStore(t)
                        .put(n, e)).onerror = function () {
                        o.F.error(
                          "Could not store object " +
                            e +
                            " in " +
                            t +
                            " on indexedDB " +
                            o.C.P
                        ),
                          "function" == typeof r && r();
                      }),
                      (s.onsuccess = function () {
                        "function" == typeof i && i();
                      }))
                    : (o.F.error(
                        "Could not store object " +
                          e +
                          " in " +
                          t +
                          " on indexedDB " +
                          o.C.P +
                          " - " +
                          t +
                          " is not a valid objectStore"
                      ),
                      "function" == typeof r && r());
                },
                r
              );
            }),
              (D.prototype.getItem = function (t, e, n) {
                if (!A(this)) return !1;
                var i = this;
                return T(this, function (r) {
                  r.objectStoreNames.contains(t)
                    ? (((r = r
                        .transaction([t], "readonly")
                        .objectStore(t)
                        .get(e)).onerror = function () {
                        i.F.error(
                          "Could not retrieve object " +
                            e +
                            " in " +
                            t +
                            " on indexedDB " +
                            i.C.P
                        );
                      }),
                      (r.onsuccess = function (t) {
                        null != (t = t.target.result) && n(t);
                      }))
                    : i.F.error(
                        "Could not retrieve object " +
                          e +
                          " in " +
                          t +
                          " on indexedDB " +
                          i.C.P +
                          " - " +
                          t +
                          " is not a valid objectStore"
                      );
                });
              }),
              (D.prototype.clearData = function () {
                if (!A(this)) return !1;
                var t,
                  e = [];
                for (t in this.C.L)
                  this.C.L.hasOwnProperty(t) &&
                    this.C.L[t] !== this.C.L.wc &&
                    e.push(this.C.L[t]);
                var n = this;
                return T(this, function (t) {
                  t = t.transaction(e, "readwrite");
                  for (var i = 0; i < e.length; i++)
                    t.objectStore(e[i]).clear().onerror = function () {
                      n.F.error(
                        "Could not clear " +
                          this.source.name +
                          " on indexedDB " +
                          n.C.P
                      );
                    };
                  t.onerror = function () {
                    n.F.error(
                      "Could not clear object stores on indexedDB " + n.C.P
                    );
                  };
                });
              });
            var N = {
                Vc: function (t) {
                  (void 0 === t && void 0 !== N.Na) || (N.Na = !!t),
                    N.Sd || (N.Sd = !0);
                },
                ub: function () {
                  (N.Sd = !1), (N.Na = void 0), (N.F = void 0);
                },
                pd: function (t) {
                  "function" != typeof t
                    ? N.info(
                        "Ignoring setLogger call since logger is not a function"
                      )
                    : (N.Vc(), (N.F = t));
                },
                sd: function () {
                  N.Vc(),
                    N.Na
                      ? (console.log("Disabling Appboy logging"), (N.Na = !1))
                      : (console.log("Enabled Appboy logging"), (N.Na = !0));
                },
                info: function (t) {
                  N.Na &&
                    ((t = "Appboy: " + t),
                    null != N.F ? N.F(t) : console.log(t));
                },
                error: function (t) {
                  N.Na &&
                    ((t = "Appboy SDK Error: " + t + " (v3.0.1)"),
                    null != N.F ? N.F(t) : console.error(t));
                },
              },
              M = {
                CustomEvent: "ce",
                Qe: "p",
                Ye: "pc",
                xg: "ca",
                Re: "i",
                rc: "ie",
                Ae: "cci",
                Ce: "ccic",
                ye: "ccc",
                ze: "ccd",
                Id: "ss",
                $e: "se",
                Pe: "si",
                Ad: "sc",
                zd: "sbc",
                Oe: "sfe",
                De: "iec",
                Xe: "lr",
                ue: "uae",
                xe: "ci",
                we: "cc",
                Ve: "lcaa",
                We: "lcar",
                Fe: "inc",
                Ee: "add",
                Ge: "rem",
                He: "set",
              },
              R = { Ne: "feed_displayed", Be: "content_cards_displayed" },
              P = {
                Ja: {
                  P: "AppboyServiceWorkerAsyncStorage",
                  VERSION: 5,
                  L: {
                    Ie: "data",
                    Fd: "pushClicks",
                    yc: "pushSubscribed",
                    tg: "fallbackDevice",
                    ve: "cardUpdates",
                    wc: "optOut",
                  },
                  Sb: 1,
                },
              },
              F = N;
            function U(t, e, n, i) {
              return (
                -1 !== (t = G(t)).indexOf(e) ||
                (F.error(
                  n +
                    " Valid values from " +
                    i +
                    ' are "' +
                    t.join('"/"') +
                    '".'
                ),
                !1)
              );
            }
            function L(t) {
              return Array.isArray
                ? Array.isArray(t)
                : "[object Array]" === Object.prototype.toString.call(t);
            }
            function j(t) {
              return "[object Date]" === Object.prototype.toString.call(t);
            }
            function B(t) {
              var e,
                n = [];
              for (e in t) t.hasOwnProperty(e) && n.push(e);
              return n;
            }
            function G(t) {
              var e,
                n = [];
              for (e in t)
                t.hasOwnProperty(e) && void 0 !== t[e] && n.push(t[e]);
              return n;
            }
            function z(t, e) {
              if (t === e) return 0 !== t || 1 / t == 1 / e;
              if (null == t || null == e) return t === e;
              var n = t.toString();
              if (n !== e.toString()) return !1;
              switch (n) {
                case "[object RegExp]":
                case "[object String]":
                  return "" + t == "" + e;
                case "[object Number]":
                  return +t != +t
                    ? +e != +e
                    : 0 == +t
                    ? 1 / +t == 1 / e
                    : +t == +e;
                case "[object Date]":
                case "[object Boolean]":
                  return +t == +e;
              }
              if (!(n = "[object Array]" === n)) {
                if ("object" != typeof t || "object" != typeof e) return !1;
                var i = t.constructor,
                  r = e.constructor;
                if (
                  i !== r &&
                  !(
                    "function" == typeof i &&
                    i instanceof i &&
                    "function" == typeof r &&
                    r instanceof r
                  ) &&
                  "constructor" in t &&
                  "constructor" in e
                )
                  return !1;
              }
              r = [];
              for (var o = (i = []).length; o--; )
                if (i[o] === t) return r[o] === e;
              if ((i.push(t), r.push(e), n)) {
                if ((o = t.length) !== e.length) return !1;
                for (; o--; ) if (!z(t[o], e[o])) return !1;
              } else {
                if (((o = (n = B(t)).length), B(e).length !== o)) return !1;
                for (; o--; ) {
                  var s = n[o];
                  if (!e.hasOwnProperty(s) || !z(t[s], e[s])) return !1;
                }
              }
              return i.pop(), r.pop(), !0;
            }
            function W(t, e) {
              return (t /= 1e3), e && (t = Math.floor(t)), t;
            }
            function V(t) {
              var e = parseInt(t);
              return null == t || isNaN(e) ? null : new Date(1e3 * e);
            }
            function q(t) {
              return null != t && j(t)
                ? t.toISOString().replace(/\.[0-9]{3}Z$/, "")
                : t;
            }
            function K(t) {
              return null == t || "" === t ? null : new Date(t);
            }
            function H(t, e, n, i, r) {
              (this.Eb = t),
                (this.type = e),
                (this.time = null == n || "" === n ? new Date().valueOf() : n),
                (this.sessionId = i),
                (this.data = r);
            }
            function Y(t) {
              return (
                null != t &&
                "[object Object]" === Object.prototype.toString.call(t) &&
                null != t.t &&
                "" !== t.t
              );
            }
            function J(t) {
              return new H(t.u, t.t, t.ts, t.s, t.d);
            }
            function X(t, e, n) {
              null == t && (t = E.fc()),
                (n = parseInt(n)),
                (isNaN(n) || 0 === n) && (n = new Date().valueOf()),
                (this.ea = t),
                (this.tb = n),
                (this.hc = new Date().valueOf()),
                (this.Pc = e);
            }
            function $(t) {
              if (null == t || null == t.g) return null;
              var e = new X(t.g, t.e, t.c);
              return (e.hc = t.l), e;
            }
            function Z(t, e, n, i) {
              return (
                (i = "string" == typeof t || (null === t && i)) ||
                  F.error(
                    "Cannot " + e + " because " + n + ' "' + t + '" is invalid.'
                  ),
                i
              );
            }
            function Q(t, e, n) {
              var i =
                null != t && "string" == typeof t && ("" === t || t.match(tt));
              return (
                i ||
                  F.error(
                    "Cannot " + e + " because " + n + ' "' + t + '" is invalid.'
                  ),
                i
              );
            }
            (H.prototype.cc = function () {
              var t = {
                name: this.type,
                time: W(this.time),
                data: this.data || {},
                session_id: this.sessionId,
              };
              return null != this.Eb && (t.user_id = this.Eb), t;
            }),
              (H.prototype.A = function () {
                return {
                  u: this.Eb,
                  t: this.type,
                  ts: this.time,
                  s: this.sessionId,
                  d: this.data,
                };
              }),
              (X.prototype.A = function () {
                return { g: this.ea, e: this.Pc, c: this.tb, l: this.hc };
              });
            var tt = /^[^\x00-\x1F\x22]+$/,
              et =
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              nt = {};
            function it(t, e) {
              (this.f = t), (this.H = e);
            }
            ((t = it.prototype).o = function (t) {
              null == t &&
                F.error(
                  "getUserId must be supplied with a callback. e.g., appboy.getUser().getUserId(function(userId) {console.log('the user id is ' + userId)})"
                ),
                "function" == typeof t && t(this.f.o());
            }),
              (t.tf = function (t, e) {
                if (!Z(t, "add alias", "the alias", !1) || 0 >= t.length)
                  return F.error("addAlias requires a non-empty alias"), !1;
                if (!Z(e, "add alias", "the label", !1) || 0 >= e.length)
                  return F.error("addAlias requires a non-empty label"), !1;
                var n = this.H,
                  i = new Ve(),
                  r = Di(n.D),
                  o = M.ue;
                return (
                  i.j.push(
                    new H(n.f.o(), o, new Date().valueOf(), r, { a: t, l: e })
                  ),
                  (i.h = mt(n.b, i.j)),
                  i.h
                );
              }),
              (t.ag = function (t) {
                return (
                  !!Z(t, "set first name", "the firstName", !0) &&
                  Ci(this.f, "first_name", t)
                );
              }),
              (t.eg = function (t) {
                return (
                  !!Z(t, "set last name", "the lastName", !0) &&
                  Ci(this.f, "last_name", t)
                );
              }),
              (t.Zf = function (t) {
                return null === t ||
                  ("string" == typeof t && null != t.toLowerCase().match(et))
                  ? Ci(this.f, "email", t)
                  : (F.error(
                      'Cannot set email address - "' +
                        t +
                        '" did not pass RFC-5322 validation.'
                    ),
                    !1);
              }),
              (t.bg = function (t) {
                return (
                  "string" == typeof t && (t = t.toLowerCase()),
                  !(
                    null !== t &&
                    !U(
                      ot,
                      t,
                      'Gender "' + t + '" is not a valid gender.',
                      "User.Genders"
                    )
                  ) && Ci(this.f, "gender", t)
                );
              }),
              (t.Yf = function (t, e, n) {
                return null === t && null === e && null === n
                  ? Ci(this.f, "dob", null)
                  : ((t = parseInt(t)),
                    (e = parseInt(e)),
                    (n = parseInt(n)),
                    isNaN(t) ||
                    isNaN(e) ||
                    isNaN(n) ||
                    12 < e ||
                    1 > e ||
                    31 < n ||
                    1 > n
                      ? (F.error(
                          "Cannot set date of birth - parameters should comprise a valid date e.g. setDateOfBirth(1776, 7, 4);"
                        ),
                        !1)
                      : Ci(this.f, "dob", t + "-" + e + "-" + n));
              }),
              (t.Wf = function (t) {
                return (
                  !!Z(t, "set country", "the country", !0) &&
                  Ci(this.f, "country", t)
                );
              }),
              (t.cg = function (t) {
                return (
                  !!Z(t, "set home city", "the homeCity", !0) &&
                  Ci(this.f, "home_city", t)
                );
              }),
              (t.dg = function (t) {
                return (
                  !!Z(t, "set language", "the language", !0) &&
                  Ci(this.f, "language", t)
                );
              }),
              (t.$f = function (t) {
                return (
                  !!U(
                    st,
                    t,
                    'Email notification setting "' +
                      t +
                      '" is not a valid subscription type.',
                    "User.NotificationSubscriptionTypes"
                  ) && Ci(this.f, "email_subscribe", t)
                );
              }),
              (t.qd = function (t) {
                return (
                  !!U(
                    st,
                    t,
                    'Push notification setting "' +
                      t +
                      '" is not a valid subscription type.',
                    "User.NotificationSubscriptionTypes"
                  ) && Ci(this.f, "push_subscribe", t)
                );
              }),
              (t.fg = function (t) {
                return (
                  !!Z(t, "set phone number", "the phoneNumber", !0) &&
                  (null === t || t.match(rt)
                    ? Ci(this.f, "phone", t)
                    : (F.error(
                        'Cannot set phone number - "' +
                          t +
                          '" did not pass validation.'
                      ),
                      !1))
                );
              }),
              (t.Vf = function (t) {
                return Ci(this.f, "image_url", t);
              }),
              (t.kc = function (t, e, n, i, r) {
                return null == t || null == e
                  ? (F.error(
                      "Cannot set last-known location - latitude and longitude are required."
                    ),
                    !1)
                  : ((t = parseFloat(t)),
                    (e = parseFloat(e)),
                    null != n && (n = parseFloat(n)),
                    null != i && (i = parseFloat(i)),
                    null != r && (r = parseFloat(r)),
                    isNaN(t) ||
                    isNaN(e) ||
                    (null != n && isNaN(n)) ||
                    (null != i && isNaN(i)) ||
                    (null != r && isNaN(r))
                      ? (F.error(
                          "Cannot set last-known location - all supplied parameters must be numeric."
                        ),
                        !1)
                      : 90 < t || -90 > t || 180 < e || -180 > e
                      ? (F.error(
                          "Cannot set last-known location - latitude and longitude are bounded by ±90 and ±180 respectively."
                        ),
                        !1)
                      : (null != n && 0 > n) || (null != r && 0 > r)
                      ? (F.error(
                          "Cannot set last-known location - accuracy and altitudeAccuracy may not be negative."
                        ),
                        !1)
                      : this.H.kc(this.f.o(), t, e, i, n, r).h);
              }),
              (t.od = function (t, e) {
                if (!Q(t, "set custom user attribute", "the given key"))
                  return !1;
                var n = typeof e,
                  i = j(e),
                  r = L(e);
                if (
                  "number" !== n &&
                  "boolean" !== n &&
                  !i &&
                  !r &&
                  null !== e &&
                  !Q(
                    e,
                    'set custom user attribute "' + t + '"',
                    "the given value"
                  )
                )
                  return !1;
                if ((i && (e = q(e)), r)) {
                  for (n = 0; n < e.length; n++)
                    if (
                      !Q(
                        e[n],
                        'set custom user attribute "' + t + '"',
                        "the element in the given array"
                      )
                    )
                      return !1;
                  return $n(this.H, M.He, t, e).h;
                }
                return this.f.od(t, e);
              }),
              (t.uf = function (t, e) {
                return (
                  !(
                    !Q(
                      t,
                      "add to custom user attribute array",
                      "the given key"
                    ) ||
                    (null != e &&
                      !Q(
                        e,
                        "add to custom user attribute array",
                        "the given value"
                      ))
                  ) && $n(this.H, M.Ee, t, e).h
                );
              }),
              (t.Pf = function (t, e) {
                return (
                  !(
                    !Q(
                      t,
                      "remove from custom user attribute array",
                      "the given key"
                    ) ||
                    (null != e &&
                      !Q(
                        e,
                        "remove from custom user attribute array",
                        "the given value"
                      ))
                  ) && $n(this.H, M.Ge, t, e).h
                );
              }),
              (t.Jf = function (t, e) {
                if (!Q(t, "increment custom user attribute", "the given key"))
                  return !1;
                null == e && (e = 1);
                var n = parseInt(e);
                return isNaN(n) || n !== parseFloat(e)
                  ? (F.error(
                      'Cannot increment custom user attribute because the given incrementValue "' +
                        e +
                        '" is not an integer.'
                    ),
                    !1)
                  : $n(this.H, M.Fe, t, n).h;
              }),
              (t.jd = function (t, e, n, i, r) {
                this.f.jd(t, e, n, i, r), ti(this.H);
              }),
              (t.Ab = function (t) {
                this.f.Ab(t);
              }),
              (t.Xf = function (t, e, n) {
                if (!Q(t, "set custom location attribute", "the given key"))
                  return !1;
                if (
                  (null !== e || null !== n) &&
                  ((e = parseFloat(e)),
                  (n = parseFloat(n)),
                  isNaN(e) ||
                    90 < e ||
                    -90 > e ||
                    isNaN(n) ||
                    180 < n ||
                    -180 > n)
                )
                  return (
                    F.error(
                      "Received invalid values for latitude and/or longitude. Latitude and longitude are bounded by ±90 and ±180 respectively, or must both be null for removal."
                    ),
                    !1
                  );
                var i = this.H,
                  r = n;
                if (((n = new Ve()), wi(i.I, t)))
                  F.info(
                    'Custom Attribute "' + t + '" is blacklisted, ignoring.'
                  ),
                    (n.h = !1);
                else {
                  var o = Di(i.D);
                  if (null === e && null === r) {
                    var s = M.We;
                    t = { key: t };
                  } else
                    (s = M.Ve), (t = { key: t, latitude: e, longitude: r });
                  n.j.push(new H(i.f.o(), s, new Date().valueOf(), o, t)),
                    (n.h = mt(i.b, n.j));
                }
                return n.h;
              });
            var rt = /^[0-9 .\\(\\)\\+\\-]+$/,
              ot = {
                MALE: "m",
                FEMALE: "f",
                OTHER: "o",
                UNKNOWN: "u",
                NOT_APPLICABLE: "n",
                PREFER_NOT_TO_SAY: "p",
              },
              st = {
                OPTED_IN: "opted_in",
                SUBSCRIBED: "subscribed",
                UNSUBSCRIBED: "unsubscribed",
              };
            function at() {}
            function ut(t, e) {
              if (t && e)
                if (((t = t.toLowerCase()), L(e.N))) {
                  for (var n = 0; n < e.N.length; n++)
                    if (-1 !== t.indexOf(e.N[n].toLowerCase())) return e.S;
                } else if (-1 !== t.indexOf(e.N.toLowerCase())) return e.S;
            }
            (nt.User = it),
              (nt.User.Genders = ot),
              (nt.User.NotificationSubscriptionTypes = st),
              (nt.User.prototype.getUserId = it.prototype.o),
              (nt.User.prototype.setFirstName = it.prototype.ag),
              (nt.User.prototype.setLastName = it.prototype.eg),
              (nt.User.prototype.setEmail = it.prototype.Zf),
              (nt.User.prototype.setGender = it.prototype.bg),
              (nt.User.prototype.setDateOfBirth = it.prototype.Yf),
              (nt.User.prototype.setCountry = it.prototype.Wf),
              (nt.User.prototype.setHomeCity = it.prototype.cg),
              (nt.User.prototype.setLanguage = it.prototype.dg),
              (nt.User.prototype.setEmailNotificationSubscriptionType =
                it.prototype.$f),
              (nt.User.prototype.setPushNotificationSubscriptionType =
                it.prototype.qd),
              (nt.User.prototype.setPhoneNumber = it.prototype.fg),
              (nt.User.prototype.setAvatarImageUrl = it.prototype.Vf),
              (nt.User.prototype.setLastKnownLocation = it.prototype.kc),
              (nt.User.prototype.setCustomUserAttribute = it.prototype.od),
              (nt.User.prototype.addToCustomAttributeArray = it.prototype.uf),
              (nt.User.prototype.removeFromCustomAttributeArray =
                it.prototype.Pf),
              (nt.User.prototype.incrementCustomUserAttribute =
                it.prototype.Jf),
              (nt.User.prototype.addAlias = it.prototype.tf),
              (nt.User.prototype.setCustomLocationAttribute = it.prototype.Xf),
              (at.prototype.Rc = function () {}),
              (at.prototype.Uc = function () {}),
              (at.prototype.gb = function () {});
            var lt = {
              vd: "Chrome",
              oc: "Edge",
              pc: "Internet Explorer",
              Cd: "Opera",
              zc: "Safari",
              ug: "Firefox",
            };
            function ct() {
              if ((this.userAgentData = navigator.userAgentData)) {
                var t = this.userAgentData.brands;
                if (t && t.length)
                  for (var e = (t = r(t)).next(); !e.done; e = t.next()) {
                    e = e.value;
                    var n = void 0,
                      i = [];
                    for (n in lt) lt[n] !== lt.pc && i.push(lt[n]);
                    if (
                      (n = e.brand.match(
                        new RegExp("(" + i.join("|") + ")", "i")
                      )) &&
                      0 < n.length
                    ) {
                      var o = n[0],
                        s = e.version;
                      break;
                    }
                  }
                (this.cb = o || "Unknown Browser"),
                  (this.version = s || "Unknown Version");
              }
            }
            function ht() {
              this.fe = ft();
            }
            function ft() {
              var t = navigator.userAgent || "",
                e =
                  t.match(
                    /(samsungbrowser|tizen|roku|konqueror|icab|crios|opera|ucbrowser|chrome|safari|firefox|camino|msie|trident(?=\/))\/?\s*(\.?\d+(\.\d+)*)/i
                  ) || [];
              if (/trident/i.test(e[1])) {
                var n = /\brv[ :]+(\.?\d+(\.\d+)*)/g.exec(t) || [];
                return [lt.pc, n[1] || ""];
              }
              return -1 !== t.indexOf("(Web0S; Linux/SmartTV)")
                ? ["LG Smart TV", null]
                : -1 !== t.indexOf("CrKey")
                ? ["Chromecast", null]
                : -1 !== t.indexOf("BRAVIA") ||
                  -1 !== t.indexOf("SonyCEBrowser") ||
                  -1 !== t.indexOf("SonyDTV")
                ? ["Sony Smart TV", null]
                : -1 !== t.indexOf("PhilipsTV")
                ? ["Philips Smart TV", null]
                : t.match(/\b(Roku)\b/)
                ? ["Roku", null]
                : t.match(/\bAFTM\b/)
                ? ["Amazon Fire Stick", null]
                : e[1] === lt.vd &&
                  null !=
                    (n = t.match(
                      /\b(OPR|Edge|EdgA|Edg|UCBrowser)\/(\.?\d+(\.\d+)*)/
                    ))
                ? (((n = n.slice(1))[0] = n[0].replace("OPR", lt.Cd)),
                  (n[0] = n[0].replace("EdgA", lt.oc)),
                  "Edg" === n[0] && (n[0] = lt.oc),
                  [n[0], n[1]])
                : e[1] === lt.zc &&
                  null != (n = t.match(/\b(EdgiOS)\/(\.?\d+(\.\d+)*)/))
                ? (((n = n.slice(1))[0] = n[0].replace("EdgiOS", lt.oc)),
                  [n[0], n[1]])
                : ((e = e[2] ? [e[1], e[2]] : [null, null])[0] === lt.zc &&
                    null != (n = t.match(/version\/(\.?\d+(\.\d+)*)/i)) &&
                    e.splice(1, 1, n[1]),
                  null != (n = t.match(/\b(UCBrowser)\/(\.?\d+(\.\d+)*)/)) &&
                    e.splice(1, 1, n[2]),
                  e[0] === lt.Cd &&
                  null != (n = t.match(/mini\/(\.?\d+(\.\d+)*)/i))
                    ? ["Opera Mini", n[1] || ""]
                    : (e[0] &&
                        ("msie" === (t = e[0].toLowerCase()) && (e[0] = lt.pc),
                        "crios" === t && (e[0] = lt.vd),
                        "tizen" === t &&
                          ((e[0] = "Samsung Smart TV"), (e[1] = null)),
                        "samsungbrowser" === t && (e[0] = "Samsung Browser")),
                      e));
            }
            function pt() {
              var t = this;
              (this.fd = new (navigator.userAgentData ? ct : ht)()),
                (this.userAgent = navigator.userAgent),
                (this.cb = this.fd.Rc()),
                (this.version = this.fd.Uc()),
                this.gb().then(function (e) {
                  return (t.Ia = e);
                }),
                (this.language = (
                  navigator.Mg ||
                  navigator.language ||
                  navigator.browserLanguage ||
                  navigator.Kg ||
                  ""
                ).toLowerCase()),
                (this.Kf = dt(this.userAgent));
            }
            function dt(t) {
              t = t.toLowerCase();
              for (
                var e =
                    "googlebot bingbot slurp duckduckbot baiduspider yandex facebookexternalhit sogou ia_archiver https://github.com/prerender/prerender aolbuild bingpreview msnbot adsbot mediapartners-google teoma".split(
                      " "
                    ),
                  n = 0;
                n < e.length;
                n++
              )
                if (-1 !== t.indexOf(e[n])) return !0;
              return !1;
            }
            w(ct, at),
              (ct.prototype.Rc = function () {
                return this.cb;
              }),
              (ct.prototype.Uc = function () {
                return this.version;
              }),
              (ct.prototype.gb = function (t) {
                var e = this;
                return this.Ia
                  ? Promise.resolve(this.Ia)
                  : (this.userAgentData.getHighEntropyValues
                      ? this.userAgentData.getHighEntropyValues(["platform"])
                      : Promise.reject()
                    )
                      .then(function (n) {
                        n = n.platform;
                        for (var i = 0; i < t.length; i++) {
                          var r = ut(n, t[i]);
                          if (r) return (e.Ia = r), e.Ia;
                        }
                        return n;
                      })
                      .catch(function () {
                        return navigator.platform;
                      });
              }),
              w(ht, at),
              (ht.prototype.Rc = function () {
                return this.fe[0] || "Unknown Browser";
              }),
              (ht.prototype.Uc = function () {
                return this.fe[1] || "Unknown Version";
              }),
              (ht.prototype.gb = function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = ut(t[e].V, t[e]);
                  if (n) return Promise.resolve(n);
                }
                return Promise.resolve(navigator.platform);
              }),
              (pt.prototype.gb = function () {
                var t = this;
                return this.Ia
                  ? Promise.resolve(this.Ia)
                  : this.fd.gb(gt).then(function (e) {
                      return (t.Ia = e);
                    });
              });
            var gt = [
                { V: navigator.platform, N: "Win", S: "Windows" },
                { V: navigator.platform, N: "Mac", S: "Mac" },
                { V: navigator.platform, N: "BlackBerry", S: "BlackBerry" },
                { V: navigator.platform, N: "FreeBSD", S: "FreeBSD" },
                { V: navigator.platform, N: "OpenBSD", S: "OpenBSD" },
                { V: navigator.platform, N: "Nintendo", S: "Nintendo" },
                { V: navigator.platform, N: "SunOS", S: "SunOS" },
                { V: navigator.platform, N: "PlayStation", S: "PlayStation" },
                { V: navigator.platform, N: "X11", S: "X11" },
                {
                  V: navigator.userAgent,
                  N: ["iPhone", "iPad", "iPod"],
                  S: "iOS",
                },
                { V: navigator.platform, N: "Pike v", S: "iOS" },
                { V: navigator.userAgent, N: ["Web0S"], S: "WebOS" },
                {
                  V: navigator.platform,
                  N: ["Linux armv7l", "Android"],
                  S: "Android",
                },
                { V: navigator.userAgent, N: ["Android"], S: "Android" },
                { V: navigator.platform, N: "Linux", S: "Linux" },
              ],
              vt = new pt();
            function bt(t, e) {
              (this.ia = t), (this.R = e);
            }
            function yt(t, e, n) {
              var i = n;
              null != n && n instanceof X && (i = n.A()), t.ia.store(e, i);
            }
            function mt(t, e) {
              if (null == e || 0 === e.length) return !1;
              L(e) || (e = [e]);
              var n = t.R.M(Tt.Fb);
              (null != n && L(n)) || (n = []);
              for (var i = 0; i < e.length; i++) n.push(e[i].A());
              return t.R.store(Tt.Fb, n);
            }
            function _t(t) {
              var e = t.R.M(Tt.Fb);
              t.R.remove(Tt.Fb), null == e && (e = []), (t = []);
              var n = !1,
                i = null;
              if (L(e))
                for (var r = 0; r < e.length; r++)
                  Y(e[r]) ? t.push(J(e[r])) : (i = r);
              else n = !0;
              return (
                (n || null != i) &&
                  ((r = "Stored events could not be deserialized as Events"),
                  n &&
                    (r +=
                      ", was " +
                      Object.prototype.toString.call(e) +
                      " not an array"),
                  null != i &&
                    (r +=
                      ", value at index " + i + " does not look like an event"),
                  (r +=
                    ", serialized values were of type " +
                    typeof e +
                    ": " +
                    JSON.stringify(e)),
                  t.push(
                    new H(null, M.rc, new Date().valueOf(), null, { e: r })
                  )),
                t
              );
            }
            function wt(t, e, n) {
              U(
                Tt,
                e,
                "StorageManager cannot store object.",
                "StorageManager.KEYS.OBJECTS"
              ) && t.R.store(e, n);
            }
            function St(t, e) {
              return (
                !!U(
                  Tt,
                  e,
                  "StorageManager cannot retrieve object.",
                  "StorageManager.KEYS.OBJECTS"
                ) && t.R.M(e)
              );
            }
            function Et(t, e) {
              U(
                Tt,
                e,
                "StorageManager cannot remove object.",
                "StorageManager.KEYS.OBJECTS"
              ) && t.R.remove(e);
            }
            function kt(t, e) {
              var n = t.R.M(Tt.Ga);
              null == n && (n = {});
              var i,
                r = e.user_id || Tt.td;
              for (i in e)
                "user_id" === i ||
                  (null != n[r] && null != n[r][i]) ||
                  Dt(t, e.user_id, i, e[i]);
            }
            function Dt(t, e, n, i) {
              var r = t.R.M(Tt.Ga);
              null == r && (r = {});
              var o = e || Tt.td,
                s = r[o];
              if (
                (null == s && ((s = {}), null != e && (s.user_id = e)),
                "custom" === n)
              )
                for (var a in (null == s[n] && (s[n] = {}), i)) s[n][a] = i[a];
              else s[n] = i;
              return (r[o] = s), t.R.store(Tt.Ga, r);
            }
            function xt(t) {
              var e = t.R.M(Tt.Ga);
              for (var n in (t.R.remove(Tt.Ga), (t = []), e))
                null != e[n] && t.push(e[n]);
              return t;
            }
            bt.prototype.clearData = function () {
              for (var t = B(At), e = B(Tt), n = 0; n < t.length; n++)
                this.ia.remove(At[t[n]]);
              for (t = 0; t < e.length; t++) this.R.remove(Tt[e[t]]);
            };
            var At = {
                Dc: "ab.storage.userId",
                xd: "ab.storage.deviceId",
                Ka: "ab.storage.sessionId",
              },
              Tt = {
                Ac: "ab.test",
                Fb: "ab.storage.events",
                Ga: "ab.storage.attributes",
                nc: "ab.storage.device",
                Rb: "ab.storage.pushToken",
                uc: "ab.storage.newsFeed",
                tc: "ab.storage.lastNewsFeedRefresh",
                jb: "ab.storage.cardImpressions",
                Hd: "ab.storage.serverConfig",
                Bc: "ab.storage.triggers",
                Cc: "ab.storage.triggers.ts",
                Te: "ab.storage.lastTriggeredTime",
                Se: "ab.storage.lastTriggeredTimesById",
                Ue: "ab.storage.lastTriggerEventDataById",
                Ob: "ab.storage.messagingSessionStart",
                kb: "ab.storage.cc",
                Kb: "ab.storage.ccLastFullSync",
                Jb: "ab.storage.ccLastCardUpdated",
                Za: "ab.storage.ccClicks",
                $a: "ab.storage.ccImpressions",
                qa: "ab.storage.ccDismissals",
                Nb: "ab.storage.lastDisplayedTriggerTimesById",
                sc: "ab.storage.lastDisplayedTriggerTime",
                mb: "ab.storage.triggerFireInstancesById",
              };
            function Ct(t) {
              (this.Z = t), (this.je = vt.cb === lt.zc ? 3 : 10);
            }
            function Ot(t, e) {
              (this.Z = t), (t = 0);
              for (
                var n = document.domain,
                  i = n.split("."),
                  r = "ab._gd" + new Date().valueOf();
                t < i.length - 1 && -1 === document.cookie.indexOf(r + "=" + r);

              )
                t++,
                  (n = "." + i.slice(-1 - t).join(".")),
                  (document.cookie = r + "=" + r + ";domain=" + n + ";");
              (document.cookie =
                r +
                "=;expires=" +
                new Date(0).toGMTString() +
                ";domain=" +
                n +
                ";"),
                (this.Wd = n),
                (this.Pd = 525949),
                (this.$d = !!e);
            }
            function It(t) {
              var e = new Date();
              return e.setTime(e.getTime() + 6e4 * t.Pd), e.getFullYear();
            }
            function Nt(t, e) {
              (e = e + "=;expires=" + new Date(0).toGMTString()),
                (document.cookie = e),
                (document.cookie = e + ";path=/"),
                (document.cookie = e + ";path=" + document.location.pathname),
                (t = e + ";domain=" + t.Wd),
                (document.cookie = t),
                (document.cookie = t + ";path=/"),
                (document.cookie = t + ";path=" + document.location.pathname);
            }
            function Mt() {
              (this.Ic = {}), (this.Ud = 5242880), (this.je = 3);
            }
            function Rt(t, e, n) {
              (this.ha = []),
                e && this.ha.push(new Ot(t)),
                n && this.ha.push(new Ct(t)),
                this.ha.push(new Mt());
            }
            function Pt() {
              this.qb = {};
            }
            function Ft(t, e) {
              if ("function" != typeof e) return null;
              var n = E.fc();
              return (t.qb[n] = e), n;
            }
            function Ut(t, e) {
              var n,
                i = [];
              for (n in t.qb) i.push(t.qb[n](e));
            }
            (Ct.prototype.Oa = function (t) {
              return t + "." + this.Z;
            }),
              (Ct.prototype.store = function (t, e) {
                e = { v: e };
                try {
                  return (
                    localStorage.setItem(this.Oa(t), JSON.stringify(e)), !0
                  );
                } catch (c) {
                  return F.info("Storage failure: " + c.message), !1;
                }
              }),
              (Ct.prototype.M = function (t) {
                try {
                  var e = JSON.parse(localStorage.getItem(this.Oa(t)));
                  return null == e ? null : e.v;
                } catch (c) {
                  return (
                    F.info("Storage retrieval failure: " + c.message), null
                  );
                }
              }),
              (Ct.prototype.remove = function (t) {
                try {
                  localStorage.removeItem(this.Oa(t));
                } catch (b) {
                  return F.info("Storage removal failure: " + b.message), !1;
                }
              }),
              (Ot.prototype.Oa = function (t) {
                return null != this.Z ? t + "." + this.Z : t;
              }),
              (Ot.prototype.store = function (t, e) {
                for (
                  var n = G(At), i = document.cookie.split(";"), r = 0;
                  r < i.length;
                  r++
                ) {
                  for (var o = i[r]; " " === o.charAt(0); ) o = o.substring(1);
                  for (var s = !1, a = 0; a < n.length; a++)
                    if (0 === o.indexOf(n[a])) {
                      s = !0;
                      break;
                    }
                  s &&
                    -1 === (o = o.split("=")[0]).indexOf("." + this.Z) &&
                    Nt(this, o);
                }
                return (
                  (n = new Date()).setTime(n.getTime() + 6e4 * this.Pd),
                  (n = "expires=" + n.toUTCString()),
                  (i = "domain=" + this.Wd),
                  (e = this.$d ? e : encodeURIComponent(JSON.stringify(e))),
                  4093 <=
                  (t = this.Oa(t) + "=" + e + ";" + n + ";" + i + ";path=/")
                    .length
                    ? (F.info(
                        "Storage failure: string is " +
                          t.length +
                          " chars which is too large to store as a cookie."
                      ),
                      !1)
                    : ((document.cookie = t), !0)
                );
              }),
              (Ot.prototype.M = function (t) {
                for (
                  var e = [],
                    n = this.Oa(t) + "=",
                    i = document.cookie.split(";"),
                    r = 0;
                  r < i.length;
                  r++
                ) {
                  for (var o = i[r]; " " === o.charAt(0); ) o = o.substring(1);
                  if (0 === o.indexOf(n))
                    try {
                      var s = void 0;
                      (s = this.$d
                        ? o.substring(n.length, o.length)
                        : JSON.parse(
                            decodeURIComponent(o.substring(n.length, o.length))
                          )),
                        e.push(s);
                    } catch (h) {
                      return (
                        F.info("Storage retrieval failure: " + h.message),
                        this.remove(t),
                        null
                      );
                    }
                }
                return 0 < e.length ? e[e.length - 1] : null;
              }),
              (Ot.prototype.remove = function (t) {
                Nt(this, this.Oa(t));
              }),
              (Mt.prototype.store = function (t, e) {
                var n = { value: e },
                  i = [];
                e = [e];
                for (var r = 0; e.length; ) {
                  var o = e.pop();
                  if ("boolean" == typeof o) r += 4;
                  else if ("string" == typeof o) r += 2 * o.length;
                  else if ("number" == typeof o) r += 8;
                  else if ("object" == typeof o && -1 === i.indexOf(o))
                    for (var s in (i.push(o), o)) e.push(o[s]);
                }
                return (i = r) > this.Ud
                  ? (F.info(
                      "Storage failure: object is ≈" +
                        i +
                        " bytes which is greater than the max of " +
                        this.Ud
                    ),
                    !1)
                  : ((this.Ic[t] = n), !0);
              }),
              (Mt.prototype.M = function (t) {
                return null == (t = this.Ic[t]) ? null : t.value;
              }),
              (Mt.prototype.remove = function (t) {
                this.Ic[t] = null;
              }),
              (Rt.prototype.store = function (t, e) {
                for (var n = !0, i = 0; i < this.ha.length; i++)
                  n = this.ha[i].store(t, e) && n;
                return n;
              }),
              (Rt.prototype.M = function (t) {
                for (var e = 0; e < this.ha.length; e++) {
                  var n = this.ha[e].M(t);
                  if (null != n) return n;
                }
                return null;
              }),
              (Rt.prototype.remove = function (t) {
                for (var e = 0; e < this.ha.length; e++) this.ha[e].remove(t);
              }),
              (Pt.prototype.O = function (t) {
                delete this.qb[t];
              }),
              (Pt.prototype.K = function () {
                this.qb = {};
              });
            var Lt = {
              Dg: function () {
                return 600 >= screen.width;
              },
              Bg: function () {
                if ("orientation" in window)
                  return 90 === Math.abs(window.orientation) ||
                    270 === window.orientation
                    ? Lt.Qb.Bd
                    : Lt.Qb.Dd;
                if ("screen" in window) {
                  var t = window.screen.orientation || screen.Eg || screen.Gg;
                  if (
                    (null != t && "object" == typeof t && (t = t.type),
                    "landscape-primary" === t || "landscape-secondary" === t)
                  )
                    return Lt.Qb.Bd;
                }
                return Lt.Qb.Dd;
              },
              Nf: function (t, e, n) {
                n || (null != e && e.metaKey)
                  ? window.open(t)
                  : (window.location = t);
              },
              Qb: { Dd: 0, Bd: 1 },
            };
            function jt(t, e, n, i, r, o, s, a, u, l, c, h, f, p, d, g) {
              (this.id = t),
                (this.viewed = e || !1),
                (this.title = n || ""),
                (this.imageUrl = i),
                (this.description = r || ""),
                (this.created = o || null),
                (this.updated = s || null),
                (this.categories = a || []),
                (this.expiresAt = u || null),
                (this.url = l),
                (this.linkText = c),
                (h = parseFloat(h)),
                (this.aspectRatio = isNaN(h) ? null : h),
                (this.extras = f),
                (this.pinned = p || !1),
                (this.dismissible = d || !1),
                (this.dismissed = !1),
                (this.clicked = g || !1),
                (this.test = !1),
                (this.Fc = this.X = null);
            }
            function Bt(t) {
              return null == t.X && (t.X = new Pt()), t.X;
            }
            function Gt(t) {
              return null == t.Fc && (t.Fc = new Pt()), t.Fc;
            }
            function zt(t, e) {
              if (null == e || e[Ht.sa] !== t.id) return !0;
              if (e[Ht.Gd]) return !1;
              if (
                null != e[Ht.aa] &&
                null != t.updated &&
                e[Ht.aa] < W(t.updated.valueOf())
              )
                return !0;
              if (
                (e[Ht.va] && !t.viewed && (t.viewed = !0),
                e[Ht.pa] && !t.clicked && (t.clicked = e[Ht.pa]),
                null != e[Ht.La] && (t.title = e[Ht.La]),
                null != e[Ht.ta] && (t.imageUrl = e[Ht.ta]),
                null != e[Ht.Ha] && (t.description = e[Ht.Ha]),
                null != e[Ht.aa])
              ) {
                var n = V(e[Ht.aa]);
                null != n && (t.updated = n);
              }
              return (
                null != e[Ht.$] &&
                  (t.expiresAt = e[Ht.$] === qt ? null : V(e[Ht.$])),
                null != e[Ht.URL] && (t.url = e[Ht.URL]),
                null != e[Ht.ua] && (t.linkText = e[Ht.ua]),
                null != e[Ht.oa] &&
                  ((n = parseFloat(e[Ht.oa])),
                  (t.aspectRatio = isNaN(n) ? null : n)),
                null != e[Ht.fa] && (t.extras = e[Ht.fa]),
                null != e[Ht.ga] && (t.pinned = e[Ht.ga]),
                null != e[Ht.ra] && (t.dismissible = e[Ht.ra]),
                null != e[Ht.W] && (t.test = e[Ht.W]),
                !0
              );
            }
            function Wt(t) {
              if (t[Ht.Gd]) return null;
              var e = t[Ht.sa],
                n = t[Ht.TYPE],
                i = t[Ht.va],
                r = t[Ht.La],
                o = t[Ht.ta],
                s = t[Ht.Ha],
                a = V(t[Ht.aa]),
                u = t[Ht.$] === qt ? null : V(t[Ht.$]),
                l = t[Ht.URL],
                c = t[Ht.ua],
                h = t[Ht.oa],
                f = t[Ht.fa],
                p = t[Ht.ga],
                d = t[Ht.ra],
                g = t[Ht.pa];
              if (((t = t[Ht.W] || !1), n === Kt.Kd || n === Kt.Pb))
                e = new Zt(
                  e,
                  i,
                  r,
                  o,
                  s,
                  null,
                  a,
                  null,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  d,
                  g
                );
              else if (n === Kt.Hb)
                e = new $t(
                  e,
                  i,
                  r,
                  o,
                  s,
                  null,
                  a,
                  null,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  d,
                  g
                );
              else if (n === Kt.Gb)
                e = new Xt(e, i, o, null, a, null, u, l, c, h, f, p, d, g);
              else {
                if (n !== Kt.lc)
                  return F.error("Ignoring card with unknown type " + n), null;
                e = new Qt(e, i, a, u, f, p);
              }
              return (e.test = t), e;
            }
            function Vt(t) {
              var e = t[Yt.sa],
                n = t[Yt.TYPE],
                i = t[Yt.va],
                r = t[Yt.La],
                o = t[Yt.ta],
                s = t[Yt.Ha],
                a = K(t[Yt.Lb]),
                u = K(t[Yt.aa]),
                l = t[Yt.Ib],
                c = K(t[Yt.$]),
                h = t[Yt.URL],
                f = t[Yt.ua],
                p = t[Yt.oa],
                d = t[Yt.fa],
                g = t[Yt.ga],
                v = t[Yt.ra],
                b = t[Yt.pa];
              if (((t = t[Yt.W] || !1), n === Kt.Pb))
                e = new Zt(e, i, r, o, s, a, u, l, c, h, f, p, d, g, v, b);
              else if (n === Kt.Hb)
                e = new $t(e, i, r, o, s, a, u, l, c, h, f, p, d, g, v, b);
              else if (n === Kt.Gb)
                e = new Xt(e, i, o, a, u, l, c, h, f, p, d, g, v, b);
              else {
                if (n !== Kt.lc) return;
                e = new Qt(e, i, u, c, d, g);
              }
              return (e.test = t), e;
            }
            (nt.WindowUtils = Lt),
              (nt.WindowUtils.openUri = Lt.Nf),
              ((t = jt.prototype).Db = function (t) {
                return Ft(Bt(this), t);
              }),
              (t.rd = function (t) {
                return Ft(Gt(this), t);
              }),
              (t.O = function (t) {
                Bt(this).O(t), Gt(this).O(t);
              }),
              (t.K = function () {
                Bt(this).K(), Gt(this).K();
              }),
              (t.hd = function () {
                this.viewed = !0;
              }),
              (t.Xa = function () {
                (this.clicked = this.viewed = !0), Ut(Bt(this));
              }),
              (t.gd = function () {
                return !(
                  !this.dismissible ||
                  this.dismissed ||
                  ((this.dismissed = !0), Ut(Gt(this)), 0)
                );
              }),
              (t.Ef = function () {
                if (this.dismissible && !this.dismissed) {
                  this.gf && this.gf(this);
                  var t = this.yg;
                  t &&
                    ((t.style.height = t.offsetHeight + "px"),
                    (t.className += " ab-hide"),
                    setTimeout(function () {
                      t &&
                        t.parentNode &&
                        ((t.style.height = "0"),
                        (t.style.margin = "0"),
                        setTimeout(function () {
                          t && t.parentNode && t.parentNode.removeChild(t);
                        }, Jt));
                    }, ze));
                }
              });
            var qt = -1,
              Kt = {
                Hb: "captioned_image",
                Kd: "text_announcement",
                Pb: "short_news",
                Gb: "banner_image",
                lc: "control",
              },
              Ht = {
                sa: "id",
                va: "v",
                ra: "db",
                Gd: "r",
                aa: "ca",
                ga: "p",
                $: "ea",
                fa: "e",
                TYPE: "tp",
                ta: "i",
                La: "tt",
                Ha: "ds",
                URL: "u",
                ua: "dm",
                oa: "ar",
                pa: "cl",
                W: "t",
              },
              Yt = {
                sa: "id",
                va: "v",
                ra: "db",
                Lb: "cr",
                aa: "ca",
                ga: "p",
                Ib: "t",
                $: "ea",
                fa: "e",
                TYPE: "tp",
                ta: "i",
                La: "tt",
                Ha: "ds",
                URL: "u",
                ua: "dm",
                oa: "ar",
                pa: "cl",
                W: "s",
              },
              Jt = 400;
            function Xt(t, e, n, i, r, o, s, a, u, l, c, h, f, p) {
              jt.call(
                this,
                t,
                e,
                null,
                n,
                null,
                i,
                r,
                o,
                s,
                a,
                u,
                l,
                c,
                h,
                f,
                p
              );
            }
            function $t(t, e, n, i, r, o, s, a, u, l, c, h, f, p, d, g) {
              jt.call(this, t, e, n, i, r, o, s, a, u, l, c, h, f, p, d, g);
            }
            function Zt(t, e, n, i, r, o, s, a, u, l, c, h, f, p, d, g) {
              jt.call(this, t, e, n, i, r, o, s, a, u, l, c, h, f, p, d, g);
            }
            function Qt(t, e, n, i, r, o) {
              jt.call(
                this,
                t,
                e,
                null,
                null,
                null,
                null,
                n,
                null,
                i,
                null,
                null,
                null,
                r,
                o,
                null
              );
            }
            function te(
              t,
              e,
              n,
              i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f,
              p,
              d,
              g,
              v,
              b,
              y,
              m,
              _,
              w,
              S,
              E,
              k,
              D,
              x,
              A,
              T,
              C,
              O
            ) {
              (this.message = t),
                (this.messageAlignment = e || ye),
                (this.duration = h || 5e3),
                (this.slideFrom = n || ue),
                (this.extras = i || {}),
                (this.campaignId = r),
                (this.cardId = o),
                (this.triggerId = s),
                (this.clickAction = a || ce),
                (this.uri = u),
                (this.openTarget = l || de),
                (this.dismissType = c || fe),
                (this.icon = f),
                (this.imageUrl = p),
                (this.imageStyle = d || ve),
                (this.iconColor = g || se.Ec),
                (this.iconBackgroundColor = v || se.ud),
                (this.backgroundColor = b || se.Ec),
                (this.textColor = y || se.wd),
                (this.closeButtonColor = m || se.Je),
                (this.animateIn = _),
                null == this.animateIn && (this.animateIn = !0),
                (this.animateOut = w),
                null == this.animateOut && (this.animateOut = !0),
                (this.header = S),
                (this.headerAlignment = E || ye),
                (this.headerTextColor = k || se.wd),
                (this.frameColor = D || se.Ze),
                (this.buttons = x || []),
                (this.cropType = A || _e),
                (this.orientation = T),
                (this.htmlId = C),
                (this.css = O),
                (this.Qd = this.Ma = this.Rd = !1),
                (this.X = new Pt()),
                (this.Ub = new Pt());
            }
            function ee(t) {
              if (
                null != t.htmlId &&
                4 < t.htmlId.length &&
                null != t.htmlId &&
                4 < t.htmlId.length &&
                null != t.css &&
                0 < t.css.length
              )
                return t.htmlId + "-css";
            }
            function ne(t) {
              if (t.is_control) return new Pe(t.trigger_id);
              var e = t.type;
              null != e && (e = e.toUpperCase());
              var n = t.message,
                i = t.text_align_message,
                r = t.slide_from,
                o = t.extras,
                s = t.campaign_id,
                a = t.card_id,
                u = t.trigger_id,
                l = t.click_action,
                c = t.uri,
                h = t.open_target,
                f = t.message_close,
                p = t.duration,
                d = t.icon,
                g = t.image_url,
                v = t.image_style,
                b = t.icon_color,
                y = t.icon_bg_color,
                m = t.bg_color,
                _ = t.text_color,
                w = t.close_btn_color,
                S = t.header,
                E = t.text_align_header,
                k = t.header_text_color,
                D = t.frame_color,
                x = [],
                A = t.btns;
              null == A && (A = []);
              for (var T = 0; T < A.length; T++) {
                var C = A[T];
                x.push(
                  new Ne(
                    C.text,
                    C.bg_color,
                    C.text_color,
                    C.border_color,
                    C.click_action,
                    C.uri,
                    C.id
                  )
                );
              }
              (A = t.crop_type), (T = t.orientation), (C = t.animate_in);
              var O = t.animate_out,
                I = t.html_id,
                N = t.css;
              if (
                ((null != I && "" !== I && null != N && "" !== N) ||
                  (N = I = void 0),
                e === Ee || e === ke)
              )
                n = new Le(
                  n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  d,
                  g,
                  v,
                  b,
                  y,
                  m,
                  _,
                  w,
                  C,
                  O,
                  S,
                  E,
                  k,
                  D,
                  x,
                  A,
                  I,
                  N
                );
              else if (e === De)
                n = new Fe(
                  n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  d,
                  g,
                  v,
                  b,
                  y,
                  m,
                  _,
                  w,
                  C,
                  O,
                  S,
                  E,
                  k,
                  D,
                  x,
                  A,
                  T,
                  I,
                  N
                );
              else if (e === Se)
                n = new je(
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  d,
                  g,
                  b,
                  y,
                  m,
                  _,
                  w,
                  C,
                  O,
                  I,
                  N
                );
              else {
                if (e !== xe && e !== Ae)
                  return void F.error(
                    "Ignoring message with unknown type " + e
                  );
                (n = new Ue(
                  n,
                  o,
                  s,
                  a,
                  u,
                  f,
                  p,
                  C,
                  O,
                  D,
                  I,
                  N,
                  t.message_fields
                )).Lg = t.trusted || !1;
              }
              return (n.Uf = e), n;
            }
            function ie(t, e) {
              if (e && e.parentNode) {
                var n = e.closest(".ab-iam-root");
                null == n && (n = e),
                  t.me() &&
                    null != n.parentNode &&
                    ((e = n.parentNode.classList) &&
                      e.contains(Ie) &&
                      e.remove(Ie),
                    document.body.removeEventListener("touchmove", oe)),
                  (n.className = n.className.replace(Ce, Oe));
              }
              return t.animateOut;
            }
            function re(t, e) {
              if (null != e) {
                t.hf = null;
                var n =
                    -1 === e.className.indexOf("ab-in-app-message")
                      ? e.getElementsByClassName("ab-in-app-message")[0]
                      : e,
                  i = !1;
                n && (i = ie(t, n));
                var r = document.body;
                if (null != r) var o = r.scrollTop;
                (n = function () {
                  if (e && e.parentNode) {
                    var n = e.closest(".ab-iam-root");
                    null == n && (n = e),
                      n.parentNode && n.parentNode.removeChild(n);
                  }
                  null != ee(t) &&
                    (n = document.getElementById(ee(t))) &&
                    n.parentNode &&
                    n.parentNode.removeChild(n),
                    null != r && "Safari" === vt.cb && (r.scrollTop = o),
                    t.gd();
                }),
                  i ? setTimeout(n, Te) : n(),
                  t.kf && t.kf.focus();
              }
            }
            function oe(t) {
              (t.targetTouches && 1 < t.targetTouches.length) ||
                (t.target.classList &&
                  t.target.classList.contains("ab-message-text") &&
                  t.target.scrollHeight > t.target.clientHeight) ||
                t.preventDefault();
            }
            (nt.Card = jt),
              (nt.Card.prototype.dismissCard = jt.prototype.Ef),
              (nt.Card.prototype.subscribeToClickedEvent = jt.prototype.Db),
              (nt.Card.prototype.subscribeToDismissedEvent = jt.prototype.rd),
              (nt.Card.prototype.removeSubscription = jt.prototype.O),
              (nt.Card.prototype.removeAllSubscriptions = jt.prototype.K),
              w(Xt, jt),
              (Xt.prototype.A = function () {
                var t = {};
                return (
                  (t[Yt.TYPE] = Kt.Gb),
                  (t[Yt.sa] = this.id),
                  (t[Yt.va] = this.viewed),
                  (t[Yt.ta] = this.imageUrl),
                  (t[Yt.aa] = this.updated),
                  (t[Yt.Lb] = this.created),
                  (t[Yt.Ib] = this.categories),
                  (t[Yt.$] = this.expiresAt),
                  (t[Yt.URL] = this.url),
                  (t[Yt.ua] = this.linkText),
                  (t[Yt.oa] = this.aspectRatio),
                  (t[Yt.fa] = this.extras),
                  (t[Yt.ga] = this.pinned),
                  (t[Yt.ra] = this.dismissible),
                  (t[Yt.pa] = this.clicked),
                  (t[Yt.W] = this.test),
                  t
                );
              }),
              (nt.Banner = Xt),
              w($t, jt),
              ($t.prototype.A = function () {
                var t = {};
                return (
                  (t[Yt.TYPE] = Kt.Hb),
                  (t[Yt.sa] = this.id),
                  (t[Yt.va] = this.viewed),
                  (t[Yt.La] = this.title),
                  (t[Yt.ta] = this.imageUrl),
                  (t[Yt.Ha] = this.description),
                  (t[Yt.aa] = this.updated),
                  (t[Yt.Lb] = this.created),
                  (t[Yt.Ib] = this.categories),
                  (t[Yt.$] = this.expiresAt),
                  (t[Yt.URL] = this.url),
                  (t[Yt.ua] = this.linkText),
                  (t[Yt.oa] = this.aspectRatio),
                  (t[Yt.fa] = this.extras),
                  (t[Yt.ga] = this.pinned),
                  (t[Yt.ra] = this.dismissible),
                  (t[Yt.pa] = this.clicked),
                  (t[Yt.W] = this.test),
                  t
                );
              }),
              (nt.CaptionedImage = $t),
              w(Zt, jt),
              (Zt.prototype.A = function () {
                var t = {};
                return (
                  (t[Yt.TYPE] = Kt.Pb),
                  (t[Yt.sa] = this.id),
                  (t[Yt.va] = this.viewed),
                  (t[Yt.La] = this.title),
                  (t[Yt.ta] = this.imageUrl),
                  (t[Yt.Ha] = this.description),
                  (t[Yt.aa] = this.updated),
                  (t[Yt.Lb] = this.created),
                  (t[Yt.Ib] = this.categories),
                  (t[Yt.$] = this.expiresAt),
                  (t[Yt.URL] = this.url),
                  (t[Yt.ua] = this.linkText),
                  (t[Yt.oa] = this.aspectRatio),
                  (t[Yt.fa] = this.extras),
                  (t[Yt.ga] = this.pinned),
                  (t[Yt.ra] = this.dismissible),
                  (t[Yt.pa] = this.clicked),
                  (t[Yt.W] = this.test),
                  t
                );
              }),
              (nt.ClassicCard = Zt),
              w(Qt, jt),
              (Qt.prototype.A = function () {
                var t = {};
                return (
                  (t[Yt.TYPE] = Kt.lc),
                  (t[Yt.sa] = this.id),
                  (t[Yt.va] = this.viewed),
                  (t[Yt.aa] = this.updated),
                  (t[Yt.$] = this.expiresAt),
                  (t[Yt.fa] = this.extras),
                  (t[Yt.ga] = this.pinned),
                  (t[Yt.W] = this.test),
                  t
                );
              }),
              (nt.ControlCard = Qt),
              ((t = te.prototype).me = function () {
                return !0;
              }),
              (t.Db = function (t) {
                return Ft(this.X, t);
              }),
              (t.rd = function (t) {
                return Ft(this.Ub, t);
              }),
              (t.O = function (t) {
                this.X.O(t), this.Ub.O(t);
              }),
              (t.K = function () {
                this.X.K(), this.Ub.K();
              }),
              (t.hd = function () {
                return !this.Rd && (this.Rd = !0);
              }),
              (t.Xa = function () {
                return !this.Ma && ((this.Ma = !0), Ut(this.X), !0);
              }),
              (t.gd = function () {
                return !this.Qd && ((this.Qd = !0), Ut(this.Ub), !0);
              }),
              (t.Df = function () {
                re(this, this.hf);
              });
            var se = {
                wd: 4281545523,
                Ec: 4294967295,
                ud: 4278219733,
                Ke: 4293914607,
                Le: 4283782485,
                Ze: 3224580915,
                Je: 4288387995,
              },
              ae = {
                vg: "hd",
                sg: "ias",
                wg: "of",
                Me: "do",
                nb: "umt",
                lb: "tf",
                yd: "te",
              },
              ue = "BOTTOM",
              le = { TOP: "TOP", BOTTOM: ue },
              ce = "NONE",
              he = { NEWS_FEED: "NEWS_FEED", URI: "URI", NONE: ce },
              fe = "AUTO_DISMISS",
              pe = { AUTO_DISMISS: fe, MANUAL: "SWIPE" },
              de = "NONE",
              ge = { NONE: de, BLANK: "BLANK" },
              ve = "TOP",
              be = { TOP: ve, GRAPHIC: "GRAPHIC" },
              ye = "CENTER",
              me = { START: "START", CENTER: ye, END: "END" },
              _e = "FIT_CENTER",
              we = { CENTER_CROP: "CENTER_CROP", FIT_CENTER: _e },
              Se = "SLIDEUP",
              Ee = "MODAL",
              ke = "MODAL_STYLED",
              De = "FULL",
              xe = "WEB_HTML",
              Ae = "HTML",
              Te = 500,
              Ce = "ab-show",
              Oe = "ab-hide",
              Ie = "ab-pause-scrolling";
            function Ne(t, e, n, i, r, o, s) {
              (this.text = t || ""),
                (this.backgroundColor = e || se.ud),
                (this.textColor = n || se.Ec),
                (this.borderColor = i || this.backgroundColor),
                (this.clickAction = r || ce),
                (this.uri = o),
                null == s && (s = Re),
                (this.id = s),
                (this.Ma = !1),
                (this.X = new Pt());
            }
            (nt.InAppMessage = te),
              (nt.InAppMessage.SlideFrom = le),
              (nt.InAppMessage.ClickAction = he),
              (nt.InAppMessage.DismissType = pe),
              (nt.InAppMessage.OpenTarget = ge),
              (nt.InAppMessage.ImageStyle = be),
              (nt.InAppMessage.TextAlignment = me),
              (nt.InAppMessage.Orientation = {
                PORTRAIT: "PORTRAIT",
                LANDSCAPE: "LANDSCAPE",
              }),
              (nt.InAppMessage.CropType = we),
              (nt.InAppMessage.prototype.subscribeToClickedEvent =
                te.prototype.Db),
              (nt.InAppMessage.prototype.subscribeToDismissedEvent =
                te.prototype.rd),
              (nt.InAppMessage.prototype.removeSubscription = te.prototype.O),
              (nt.InAppMessage.prototype.removeAllSubscriptions =
                te.prototype.K),
              (nt.InAppMessage.prototype.closeMessage = te.prototype.Df),
              (Ne.prototype.Db = function (t) {
                return Ft(this.X, t);
              }),
              (Ne.prototype.O = function (t) {
                this.X.O(t);
              }),
              (Ne.prototype.K = function () {
                this.X.K();
              }),
              (Ne.prototype.Xa = function () {
                return !this.Ma && ((this.Ma = !0), Ut(this.X), !0);
              });
            var Me,
              Re = -1;
            function Pe(t) {
              this.triggerId = t;
            }
            function Fe(
              t,
              e,
              n,
              i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f,
              p,
              d,
              g,
              v,
              b,
              y,
              m,
              _,
              w,
              S,
              E,
              k,
              D,
              x,
              A,
              T,
              C
            ) {
              te.call(
                this,
                t,
                e,
                null,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l || "SWIPE",
                c,
                h,
                f,
                p,
                d,
                g,
                v,
                b,
                y,
                m,
                _,
                w,
                S,
                E,
                k,
                D,
                x || "CENTER_CROP",
                A || "PORTRAIT",
                T,
                C
              );
            }
            function Ue(t, e, n, i, r, o, s, a, u, l, c, h, f) {
              null != t &&
                0 < t.length &&
                0 <
                  t.indexOf(
                    '"ab-in-app-message ab-html-message ab-email-capture"'
                  ) &&
                0 <
                  t.indexOf(
                    '"ab-in-app-message ab-show ab-modal ab-effect-modal"'
                  ) &&
                (u = a = !0),
                te.call(
                  this,
                  t,
                  null,
                  null,
                  e,
                  n,
                  i,
                  r,
                  null,
                  null,
                  null,
                  o || "SWIPE",
                  s,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  a,
                  u,
                  null,
                  null,
                  null,
                  l,
                  void 0,
                  void 0,
                  void 0,
                  c,
                  h
                ),
                (this.messageFields = f);
            }
            function Le(
              t,
              e,
              n,
              i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f,
              p,
              d,
              g,
              v,
              b,
              y,
              m,
              _,
              w,
              S,
              E,
              k,
              D,
              x,
              A,
              T
            ) {
              (x = x || _e),
                te.call(
                  this,
                  t,
                  e,
                  null,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l || "SWIPE",
                  c,
                  h,
                  f,
                  p,
                  d,
                  g,
                  v,
                  b,
                  y,
                  m,
                  _,
                  w,
                  S,
                  E,
                  k,
                  D,
                  x,
                  void 0,
                  A,
                  T
                );
            }
            function je(
              t,
              e,
              n,
              i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f,
              p,
              d,
              g,
              v,
              b,
              y,
              m,
              _,
              w,
              S
            ) {
              (b = b || se.Le),
                (v = v || se.Ke),
                te.call(
                  this,
                  t,
                  e || "START",
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  null,
                  d,
                  g,
                  v,
                  b,
                  y,
                  m,
                  _,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  w,
                  S
                );
            }
            function Be(t, e) {
              if (
                ((Me = {
                  en: {
                    NO_CARDS_MESSAGE:
                      "We have no updates for you at this time.<br/>Please check again later.",
                    FEED_TIMEOUT_MESSAGE:
                      "Sorry, this refresh timed out.<br/>Please try again later.",
                  },
                  ar: {
                    NO_CARDS_MESSAGE:
                      "ليس لدينا أي تحديث. يرجى التحقق مرة أخرى لاحقاً",
                    FEED_TIMEOUT_MESSAGE: "يرجى تكرار المحاولة لاحقا",
                  },
                  cs: {
                    NO_CARDS_MESSAGE:
                      "V tuto chvíli pro vás nemáme žádné aktualizace.<br/>Zkontrolujte prosím znovu později.",
                    FEED_TIMEOUT_MESSAGE: "Prosím zkuste to znovu později.",
                  },
                  da: {
                    NO_CARDS_MESSAGE:
                      "Vi har ingen updates.<br/>Prøv venligst senere.",
                    FEED_TIMEOUT_MESSAGE: "Prøv venligst senere.",
                  },
                  de: {
                    NO_CARDS_MESSAGE:
                      "Derzeit sind keine Updates verfügbar.<br/>Bitte später noch einmal versuchen.",
                    FEED_TIMEOUT_MESSAGE: "Bitte später noch einmal versuchen.",
                  },
                  es: {
                    NO_CARDS_MESSAGE:
                      "No tenemos actualizaciones.<br/>Por favor compruébelo más tarde.",
                    FEED_TIMEOUT_MESSAGE: "Por favor inténtelo más tarde.",
                  },
                  "es-mx": {
                    NO_CARDS_MESSAGE:
                      "No tenemos ninguna actualización.<br/>Vuelva a verificar más tarde.",
                    FEED_TIMEOUT_MESSAGE:
                      "Por favor, vuelva a intentarlo más tarde.",
                  },
                  et: {
                    NO_CARDS_MESSAGE:
                      "Uuendusi pole praegu saadaval.<br/>Proovige hiljem uuesti.",
                    FEED_TIMEOUT_MESSAGE: "Palun proovige hiljem uuesti.",
                  },
                  fi: {
                    NO_CARDS_MESSAGE:
                      "Päivityksiä ei ole saatavilla.<br/>Tarkista myöhemmin uudelleen.",
                    FEED_TIMEOUT_MESSAGE: "Yritä myöhemmin uudelleen.",
                  },
                  fr: {
                    NO_CARDS_MESSAGE:
                      "Aucune mise à jour disponible.<br/>Veuillez vérifier ultérieurement.",
                    FEED_TIMEOUT_MESSAGE: "Veuillez réessayer ultérieurement.",
                  },
                  he: {
                    NO_CARDS_MESSAGE: ".אין לנו עדכונים. בבקשה בדוק שוב בקרוב",
                    FEED_TIMEOUT_MESSAGE: ".בבקשה נסה שוב בקרוב",
                  },
                  hi: {
                    NO_CARDS_MESSAGE:
                      "हमारे पास कोई अपडेट नहीं हैं। कृपया बाद में फिर से जाँच करें.।",
                    FEED_TIMEOUT_MESSAGE: "कृपया बाद में दोबारा प्रयास करें।.",
                  },
                  id: {
                    NO_CARDS_MESSAGE:
                      "Kami tidak memiliki pembaruan. Coba lagi nanti.",
                    FEED_TIMEOUT_MESSAGE: "Coba lagi nanti.",
                  },
                  it: {
                    NO_CARDS_MESSAGE:
                      "Non ci sono aggiornamenti.<br/>Ricontrollare più tardi.",
                    FEED_TIMEOUT_MESSAGE: "Riprovare più tardi.",
                  },
                  ja: {
                    NO_CARDS_MESSAGE:
                      "アップデートはありません。<br/>後でもう一度確認してください。",
                    FEED_TIMEOUT_MESSAGE: "後でもう一度試してください。",
                  },
                  ko: {
                    NO_CARDS_MESSAGE:
                      "업데이트가 없습니다. 다음에 다시 확인해 주십시오.",
                    FEED_TIMEOUT_MESSAGE: "나중에 다시 시도해 주십시오.",
                  },
                  ms: {
                    NO_CARDS_MESSAGE:
                      "Tiada kemas kini. Sila periksa kemudian.",
                    FEED_TIMEOUT_MESSAGE: "Sila cuba kemudian.",
                  },
                  nl: {
                    NO_CARDS_MESSAGE:
                      "Er zijn geen updates.<br/>Probeer het later opnieuw.",
                    FEED_TIMEOUT_MESSAGE: "Probeer het later opnieuw.",
                  },
                  no: {
                    NO_CARDS_MESSAGE:
                      "Vi har ingen oppdateringer.<br/>Vennligst sjekk igjen senere.",
                    FEED_TIMEOUT_MESSAGE: "Vennligst prøv igjen senere.",
                  },
                  pl: {
                    NO_CARDS_MESSAGE:
                      "Brak aktualizacji.<br/>Proszę sprawdzić ponownie później.",
                    FEED_TIMEOUT_MESSAGE: "Proszę spróbować ponownie później.",
                  },
                  pt: {
                    NO_CARDS_MESSAGE:
                      "Não temos atualizações.<br/>Por favor, verifique mais tarde.",
                    FEED_TIMEOUT_MESSAGE: "Por favor, tente mais tarde.",
                  },
                  "pt-br": {
                    NO_CARDS_MESSAGE:
                      "Não temos nenhuma atualização.<br/>Verifique novamente mais tarde.",
                    FEED_TIMEOUT_MESSAGE: "Tente novamente mais tarde.",
                  },
                  ru: {
                    NO_CARDS_MESSAGE:
                      "Обновления недоступны.<br/>Пожалуйста, проверьте снова позже.",
                    FEED_TIMEOUT_MESSAGE:
                      "Пожалуйста, повторите попытку позже.",
                  },
                  sv: {
                    NO_CARDS_MESSAGE:
                      "Det finns inga uppdateringar.<br/>Försök igen senare.",
                    FEED_TIMEOUT_MESSAGE: "Försök igen senare.",
                  },
                  th: {
                    NO_CARDS_MESSAGE: "เราไม่มีการอัพเดต กรุณาตรวจสอบภายหลัง.",
                    FEED_TIMEOUT_MESSAGE: "กรุณาลองใหม่ภายหลัง.",
                  },
                  uk: {
                    NO_CARDS_MESSAGE:
                      "Оновлення недоступні.<br/>ласка, перевірте знову пізніше.",
                    FEED_TIMEOUT_MESSAGE:
                      "Будь ласка, спробуйте ще раз пізніше.",
                  },
                  vi: {
                    NO_CARDS_MESSAGE:
                      "Chúng tôi không có cập nhật nào.<br/>Vui lòng kiểm tra lại sau.",
                    FEED_TIMEOUT_MESSAGE: "Vui lòng thử lại sau.",
                  },
                  "zh-hk": {
                    NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                    FEED_TIMEOUT_MESSAGE: "請稍候再試.",
                  },
                  "zh-hans": {
                    NO_CARDS_MESSAGE: "暂时没有更新.<br/>请稍后再试.",
                    FEED_TIMEOUT_MESSAGE: "请稍候再试.",
                  },
                  "zh-hant": {
                    NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                    FEED_TIMEOUT_MESSAGE: "請稍候再試.",
                  },
                  "zh-tw": {
                    NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                    FEED_TIMEOUT_MESSAGE: "請稍候再試.",
                  },
                  zh: {
                    NO_CARDS_MESSAGE: "暂时没有更新.<br/>请稍后再试.",
                    FEED_TIMEOUT_MESSAGE: "请稍候再试.",
                  },
                }),
                null != t && (t = t.toLowerCase()),
                null != t && null == Me[t])
              ) {
                var n = t.indexOf("-");
                0 < n && (t = t.substring(0, n));
              }
              null == Me[t] &&
                ((t =
                  "Braze does not yet have a localization for language " +
                  t +
                  ", defaulting to English. Please contact us if you are willing and able to help us translate our SDK into this language."),
                e ? F.error(t) : F.info(t));
            }
            function Ge(t, e) {
              (this.cards = t), (this.lastUpdated = e);
            }
            (nt.InAppMessageButton = Ne),
              (nt.InAppMessageButton.prototype.subscribeToClickedEvent =
                Ne.prototype.Db),
              (nt.InAppMessageButton.prototype.removeSubscription =
                Ne.prototype.O),
              (nt.InAppMessageButton.prototype.removeAllSubscriptions =
                Ne.prototype.K),
              (nt.ControlMessage = Pe),
              w(Fe, te),
              (nt.FullScreenMessage = Fe),
              w(Ue, te),
              (Ue.prototype.Xa = function (t) {
                if (this.Uf === xe) {
                  if (this.Ma) return !1;
                  this.Ma = !0;
                }
                return Ut(this.X, t), !0;
              }),
              (nt.HtmlMessage = Ue),
              w(Le, te),
              (nt.ModalMessage = Le),
              w(je, te),
              (je.prototype.me = function () {
                return !1;
              }),
              (nt.SlideUpMessage = je),
              (Ge.prototype.le = function () {
                for (var t = 0, e = 0; e < this.cards.length; e++)
                  this.cards[e].viewed || t++;
                return t;
              }),
              (Ge.prototype.Ua = function (t, e) {
                t.Ua(e);
              }),
              (Ge.prototype.Ta = function (t, e) {
                t.Ta(e);
              });
            var ze = 500;
            function We(t, e) {
              Ge.call(this, t, e);
            }
            function Ve() {
              (this.h = !1), (this.j = []);
            }
            function qe(t) {
              this.Sa = t;
            }
            function Ke(t, e, n, i) {
              (this.oe = t),
                (this.jc = e),
                (this.eb = n),
                (this.G = i),
                this.jc === sn &&
                  this.eb !== Xe &&
                  this.eb !== Ze &&
                  this.eb !== nn &&
                  this.eb !== rn &&
                  (this.G = V(this.G));
            }
            (nt.Feed = Ge),
              (nt.Feed.prototype.getUnreadCardCount = Ge.prototype.le),
              w(We, Ge),
              (We.prototype.If = function () {
                return Ge.prototype.le.call(this);
              }),
              (We.prototype.Ua = function (t, e) {
                t.Ua(e, !0);
              }),
              (We.prototype.Ta = function (t, e) {
                t.Ta(e, !0);
              }),
              (nt.ContentCards = We),
              (nt.ContentCards.prototype.getUnviewedCardCount =
                We.prototype.If),
              (qe.prototype.ba = function (t) {
                return null == this.Sa || this.Sa === t[0];
              }),
              (qe.prototype.A = function () {
                return this.Sa;
              }),
              (Ke.prototype.ba = function (t) {
                var e = null;
                switch ((null != t && (e = t[this.oe]), this.eb)) {
                  case He:
                    return null != e && e.valueOf() === this.G.valueOf();
                  case Ye:
                    return null == e || e.valueOf() !== this.G.valueOf();
                  case Je:
                    return typeof e == typeof this.G && e > this.G;
                  case Xe:
                    return this.jc === sn
                      ? null != e &&
                          j(e) &&
                          (new Date().valueOf() - e.valueOf()) / 1e3 <= this.G
                      : typeof e == typeof this.G && e >= this.G;
                  case $e:
                    return typeof e == typeof this.G && e < this.G;
                  case Ze:
                    return this.jc === sn
                      ? null != e &&
                          j(e) &&
                          (new Date().valueOf() - e.valueOf()) / 1e3 >= this.G
                      : typeof e == typeof this.G && e <= this.G;
                  case Qe:
                    return (
                      null != e &&
                      "string" == typeof e &&
                      typeof e == typeof this.G &&
                      null != e.match(this.G)
                    );
                  case tn:
                    return null != e;
                  case en:
                    return null == e;
                  case nn:
                    return (
                      null != e &&
                      j(e) &&
                      (e.valueOf() - new Date().valueOf()) / 1e3 < this.G
                    );
                  case rn:
                    return (
                      null != e &&
                      j(e) &&
                      (e.valueOf() - new Date().valueOf()) / 1e3 > this.G
                    );
                  case on:
                    return (
                      null == e ||
                      typeof e != typeof this.G ||
                      "string" != typeof e ||
                      null == e.match(this.G)
                    );
                }
                return !1;
              }),
              (Ke.prototype.A = function () {
                var t = this.G;
                return (
                  j(this.G) && (t = W(t.valueOf())),
                  { k: this.oe, t: this.jc, c: this.eb, v: t }
                );
              });
            var He = 1,
              Ye = 2,
              Je = 3,
              Xe = 4,
              $e = 5,
              Ze = 6,
              Qe = 10,
              tn = 11,
              en = 12,
              nn = 15,
              rn = 16,
              on = 17,
              sn = "date";
            function an(t) {
              this.filters = t;
            }
            function un(t) {
              if (null == t || !L(t)) return null;
              for (var e = [], n = 0; n < t.length; n++) {
                for (var i = [], r = t[n], o = 0; o < r.length; o++) {
                  var s = r[o];
                  i.push(
                    new Ke(
                      s.property_key,
                      s.property_type,
                      s.comparator,
                      s.property_value
                    )
                  );
                }
                e.push(i);
              }
              return new an(e);
            }
            function ln(t) {
              for (var e = [], n = 0; n < t.length; n++) {
                for (var i = [], r = t[n], o = 0; o < r.length; o++) {
                  var s = r[o];
                  i.push(new Ke(s.k, s.t, s.c, s.v));
                }
                e.push(i);
              }
              return new an(e);
            }
            function cn(t, e) {
              (this.Sa = t), (this.Wa = e);
            }
            function hn(t, e) {
              (this.Pa = t), (this.rb = e);
            }
            function fn(t) {
              this.Va = t;
            }
            function pn(t, e) {
              (this.Va = t), (this.Wa = e);
            }
            function dn(t) {
              this.Pa = t;
            }
            (an.prototype.ba = function (t) {
              for (var e = !0, n = 0; n < this.filters.length; n++) {
                for (var i = this.filters[n], r = !1, o = 0; o < i.length; o++)
                  if (i[o].ba(t)) {
                    r = !0;
                    break;
                  }
                if (!r) {
                  e = !1;
                  break;
                }
              }
              return e;
            }),
              (an.prototype.A = function () {
                for (var t = [], e = 0; e < this.filters.length; e++) {
                  for (
                    var n = this.filters[e], i = [], r = 0;
                    r < n.length;
                    r++
                  )
                    i.push(n[r].A());
                  t.push(i);
                }
                return t;
              }),
              (cn.prototype.ba = function (t) {
                if (null == this.Sa || null == this.Wa) return !1;
                var e = t[1];
                return t[0] === this.Sa && this.Wa.ba(e);
              }),
              (cn.prototype.A = function () {
                return { e: this.Sa, pf: this.Wa.A() };
              }),
              (hn.prototype.ba = function (t) {
                if (null == this.Pa) return !1;
                var e = yn(t[0], this.Pa);
                if (!e) return !1;
                var n = null == this.rb || 0 === this.rb.length;
                if (null != this.rb)
                  for (var i = 0; i < this.rb.length; i++)
                    if (this.rb[i] === t[1]) {
                      n = !0;
                      break;
                    }
                return e && n;
              }),
              (hn.prototype.A = function () {
                return this.Pa;
              }),
              (fn.prototype.ba = function (t) {
                return null == this.Va || t[0] === this.Va;
              }),
              (fn.prototype.A = function () {
                return this.Va;
              }),
              (pn.prototype.ba = function (t) {
                if (null == this.Va || null == this.Wa) return !1;
                var e = t[1];
                return t[0] === this.Va && this.Wa.ba(e);
              }),
              (pn.prototype.A = function () {
                return { id: this.Va, pf: this.Wa.A() };
              }),
              (dn.prototype.ba = function (t) {
                return null == this.Pa || yn(t[0], this.Pa);
              }),
              (dn.prototype.A = function () {
                return this.Pa;
              });
            var gn = {
              OPEN: "open",
              xc: "purchase",
              Ed: "push_click",
              mc: "custom_event",
              Mb: "iam_click",
              W: "test",
            };
            function vn(t, e) {
              (this.type = t), (this.data = e);
            }
            function bn(t, e, n) {
              return Cn[t.type] === e && (null == t.data || t.data.ba(n));
            }
            function yn(t, e) {
              var n = null;
              try {
                n = window.atob(t);
              } catch (d) {
                return (
                  F.info(
                    "Failed to unencode analytics id " + t + ": " + d.message
                  ),
                  !1
                );
              }
              return e === n.split("_")[0];
            }
            function mn(t) {
              var e = t.type;
              switch (e) {
                case wn:
                  var n = null;
                  break;
                case Sn:
                  n = new fn((t = t.data) ? t.product_id : null);
                  break;
                case En:
                  n = new pn(
                    (t = t.data) ? t.product_id : null,
                    t ? un(t.property_filters) : null
                  );
                  break;
                case kn:
                  n = new dn((t = t.data) ? t.campaign_id : null);
                  break;
                case Dn:
                  n = new qe((t = t.data) ? t.event_name : null);
                  break;
                case xn:
                  n = new cn(
                    (t = t.data) ? t.event_name : null,
                    t ? un(t.property_filters) : null
                  );
                  break;
                case An:
                  n = new hn((t = t.data) ? t.id : null, t ? t.buttons : null);
                  break;
                case Tn:
                  n = null;
              }
              return new vn(e, n);
            }
            function _n(t) {
              switch (t.t) {
                case wn:
                  var e = null;
                  break;
                case Sn:
                  e = new fn(t.d);
                  break;
                case En:
                  e = new pn((e = t.d || {}).id, ln(e.pf || []));
                  break;
                case kn:
                  e = new dn(t.d);
                  break;
                case Dn:
                  e = new qe(t.d);
                  break;
                case xn:
                  e = new cn((e = t.d || {}).e, ln(e.pf || []));
                  break;
                case An:
                  e = new hn(t.d);
                  break;
                case Tn:
                  e = null;
              }
              return new vn(t.t, e);
            }
            vn.prototype.A = function () {
              return { t: this.type, d: this.data ? this.data.A() : null };
            };
            var wn = "open",
              Sn = "purchase",
              En = "purchase_property",
              kn = "push_click",
              Dn = "custom_event",
              xn = "custom_event_property",
              An = "iam_click",
              Tn = "test",
              Cn = {};
            function On(t, e, n, i, r, o, s, a, u, l, c, h) {
              (this.id = t),
                (this.fb = e || []),
                void 0 === n && (n = null),
                (this.startTime = n),
                void 0 === i && (i = null),
                (this.endTime = i),
                (this.priority = r || 0),
                (this.type = o),
                (this.Ra = a || 0),
                null == l && (l = 1e3 * (this.Ra + 30)),
                (this.Ea = l),
                (this.data = s),
                null == u && (u = Mn),
                (this.zb = u),
                (this.ne = c),
                (this.ya = h || null);
            }
            function In(t, e) {
              var n = new Date().valueOf() - e;
              return (
                (e = null == e || isNaN(n) || null == t.Ea || n < t.Ea) ||
                  F.info(
                    "Trigger action " +
                      t.type +
                      " is no longer eligible for display - fired " +
                      n +
                      "ms ago and has a timeout of " +
                      t.Ea +
                      "ms"
                  ),
                !e
              );
            }
            function Nn(t) {
              for (var e = [], n = 0; n < t.c.length; n++) e.push(_n(t.c[n]));
              return new On(
                t.i,
                e,
                K(t.s),
                K(t.e),
                t.p,
                t.t,
                t.da,
                t.d,
                t.r,
                t.tm,
                t.ss,
                t.ld
              );
            }
            (Cn[wn] = gn.OPEN),
              (Cn[Sn] = gn.xc),
              (Cn[En] = gn.xc),
              (Cn[kn] = gn.Ed),
              (Cn[Dn] = gn.mc),
              (Cn[xn] = gn.mc),
              (Cn[An] = gn.Mb),
              (Cn[Tn] = gn.W),
              (On.prototype.A = function () {
                for (var t = [], e = 0; e < this.fb.length; e++)
                  t.push(this.fb[e].A());
                return {
                  i: this.id,
                  c: t,
                  s: this.startTime,
                  e: this.endTime,
                  p: this.priority,
                  t: this.type,
                  da: this.data,
                  d: this.Ra,
                  r: this.zb,
                  tm: this.Ea,
                  ss: this.ne,
                  ld: this.ya,
                };
              });
            var Mn = -1,
              Rn = { qc: "inapp", Jd: "templated_iam" };
            function Pn(t, e) {
              return (
                (t = Math.ceil(t)),
                (e = Math.floor(e)),
                Math.floor(Math.random() * (e - t + 1)) + t
              );
            }
            function Fn(t) {
              var e,
                n = !1;
              try {
                if (
                  ((window.XMLHttpRequest &&
                    (e = new XMLHttpRequest()) &&
                    void 0 !== e.withCredentials) ||
                    ("undefined" != typeof XDomainRequest
                      ? ((e = new XDomainRequest()), (n = e.async = !0))
                      : F.error(
                          "This browser does not have any supported ajax options!"
                        )),
                  null != e)
                ) {
                  var i = function () {
                    "function" == typeof t.error && t.error(e.status),
                      "function" == typeof t.bc && t.bc(!1);
                  };
                  (e.onload = function () {
                    if (n) var r = !0;
                    else {
                      if (4 !== e.readyState) return;
                      r =
                        (200 <= e.status && 300 > e.status) || 304 === e.status;
                    }
                    if (r) {
                      if ("function" == typeof t.h) {
                        try {
                          var o = JSON.parse(e.responseText);
                        } catch (s) {
                          t.h({
                            error:
                              "" === e.responseText
                                ? "empty_response"
                                : "invalid_json_response",
                            response: e.responseText,
                          });
                        }
                        o && t.h(o);
                      }
                      "function" == typeof t.bc && t.bc(!0);
                    } else i();
                  }),
                    (e.onerror = function () {
                      i();
                    }),
                    (e.ontimeout = function () {
                      i();
                    });
                  var r = JSON.stringify(t.data);
                  if (n) (e.onprogress = function () {}), e.open("post", t.url);
                  else {
                    e.open("POST", t.url, !0),
                      e.setRequestHeader("Content-type", "application/json"),
                      e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    for (var o = t.headers || [], s = 0; s < o.length; s++)
                      e.setRequestHeader(o[s][0], o[s][1]);
                  }
                  e.send(r);
                }
              } catch (h) {
                F.error("Network request error: " + h.message);
              }
            }
            function Un(t, e, n, i, r, o, s, a, u, l, c) {
              (this.Z = t),
                (this.mf = e),
                (this.Yd = n),
                (this.ef = i),
                (this.ob = r),
                (this.ab = 0),
                (this.Wb = l.R.je),
                (this.Td = null),
                (this.D = o),
                (this.Tb = s),
                (this.f = a),
                (this.I = u),
                (this.b = l),
                (this.cf = c),
                (this.Hc = new Pt()),
                (this.bf = 1e3),
                (this.af = 6e4);
            }
            function Ln(t, e) {
              var n = ri(t.Tb),
                i = n.cc();
              return (
                z(St(t.b, Tt.nc), i) || (e.device = i),
                (e.api_key = t.Z),
                (e.time = W(new Date().valueOf(), !0)),
                (e.sdk_version = t.mf),
                t.Yd && (e.sdk_flavor = t.Yd),
                (e.app_version = t.ef),
                (e.device_id = n.id),
                e
              );
            }
            function jn(t, e, n) {
              if (n.error) {
                var i = n.error;
                switch (i) {
                  case "empty_response":
                    return (
                      mt(t.b, [
                        new H(t.f.o(), M.rc, new Date().valueOf(), t.D.Tc, {
                          e: "Received successful response with empty body.",
                        }),
                      ]),
                      F.info("Received successful response with empty body."),
                      !1
                    );
                  case "invalid_json_response":
                    return (
                      mt(t.b, [
                        new H(t.f.o(), M.rc, new Date().valueOf(), t.D.Tc, {
                          e:
                            "Received successful response with invalid JSON: " +
                            n.response,
                        }),
                      ]),
                      F.info("Received successful response with invalid JSON"),
                      !1
                    );
                  case "invalid_api_key":
                    i =
                      'The API key "' +
                      e.api_key +
                      '" is invalid for the baseUrl ' +
                      t.ob;
                    break;
                  case "blacklisted":
                    i =
                      "Sorry, we are not currently accepting your requests. If you think this is in error, please contact us.";
                    break;
                  case "no_device_identifier":
                    i =
                      "No device identifier. Please contact support@braze.com";
                }
                return F.error("Backend error: " + i), !1;
              }
              return !0;
            }
            function Bn(t, e, n, i, r, o, s) {
              null == i && (i = !0), i && Yn(t);
              var a = _t(t.b),
                u = xt(t.b),
                l = ki(t.D);
              if (0 < a.length)
                for (var c = 0; c < a.length; c++)
                  a[c].type === M.Id && (l = !0);
              var h = n || l;
              if (!i || 0 !== a.length || 0 !== u.length || e || h) {
                var f = Wn(t, e, h);
                if (0 < a.length) {
                  for (e = [], n = 0; n < a.length; n++) e.push(a[n].cc());
                  f.events = e;
                }
                0 < u.length && (f.attributes = u), (f = Ln(t, f));
                var p = Vn(t, f);
                h && t.ab++;
                var d = function () {
                  Fn({
                    url: t.ob + "/data/",
                    data: f,
                    headers: p,
                    h: function (e) {
                      if ((h && (t.ab = Math.max(t.ab - 1, 0)), jn(t, f, e))) {
                        var n = t.I;
                        if (null != e && null != e.config) {
                          var i = e.config;
                          if (i.time > yi(n).yb) {
                            var o = !1;
                            null !=
                              (i = new vi(
                                i.time,
                                i.events_blacklist,
                                i.attributes_blacklist,
                                i.purchases_blacklist,
                                i.messaging_session_timeout,
                                i.vapid_public_key,
                                i.content_cards
                              )).na &&
                              yi(n).na !== i.na &&
                              (o = !0);
                            var s = !1;
                            null != i.sb.enabled &&
                              (yi(n).sb.enabled || !1) !== i.sb.enabled &&
                              (s = !0),
                              (n.Yb = i),
                              wt(n.b, Tt.Hd, i.A()),
                              o && Ut(n.Lc),
                              s && Ut(n.Ld);
                          }
                        }
                        (null != f.respond_with &&
                          f.respond_with.user_id != t.f.o()) ||
                          (null != f.device && wt(t.b, Tt.nc, f.device),
                          t.cf(e),
                          "function" == typeof r && r());
                      }
                    },
                    error: function () {
                      h && (t.ab = Math.max(t.ab - 1, 0)), mt(t.b, a);
                      for (var e = 0; e < u.length; e++) kt(t.b, u[e]);
                      "function" == typeof o && o();
                    },
                    bc: function (e) {
                      "function" == typeof s && s(e),
                        i &&
                          (e
                            ? Hn(t)
                            : ((null == (e = t.Td) || e < 1e3 * t.Wb) &&
                                (e = 1e3 * t.Wb),
                              Hn(t, Math.min(3e5, Pn(1e3 * t.Wb, 3 * e)))));
                    },
                  });
                };
                (e = f.device) && e.os_version instanceof Promise
                  ? e.os_version.then(function (t) {
                      (f.device.os_version = t), d();
                    })
                  : d(),
                  l && (F.info("Invoking new session subscriptions"), Ut(t.Hc));
              } else Hn(t), "function" == typeof s && s(!0);
            }
            function Gn(t, e) {
              var n = "HTTP error ";
              null != t && (n += t + " "), F.error(n + e);
            }
            function zn(t, e, n, i, r) {
              var o = Wn(t, !1, !1);
              ((o = Ln(t, o)).template = {
                trigger_id: e.Fa,
                trigger_event_type: n,
              }),
                null != i && (o.template.data = i.cc());
              var s = Vn(t, o);
              Fn({
                url: t.ob + "/template/",
                data: o,
                headers: s,
                h: function (n) {
                  jn(t, o, n)
                    ? null == n || null == n.templated_message
                      ? t.U(e.Fa, ae.lb)
                      : (n = n.templated_message).type !== Rn.qc ||
                        null == (n = ne(n.data))
                      ? t.U(e.Fa, ae.nb)
                      : "function" == typeof e.te
                      ? e.te(n)
                      : t.U(e.Fa, ae.lb)
                    : (t.U(e.Fa, ae.lb), "function" == typeof e.se && e.se());
                },
                error: function (o) {
                  var s = "getting user personalization for message " + e.Fa;
                  if (new Date().valueOf() - e.ec > e.Ea) t.U(e.Fa, ae.lb);
                  else {
                    var a = Math.min(e.Ea, t.af),
                      u = t.bf;
                    null == r && (r = u);
                    var l = Math.min(a, Pn(u, 3 * r));
                    (s += ". Retrying in " + l + "ms"),
                      setTimeout(function () {
                        zn(t, e, n, i, l);
                      }, l);
                  }
                  Gn(o, s);
                },
              });
            }
            function Wn(t, e, n) {
              var i = {};
              return (
                e && (i.feed = !0),
                n && (i.triggers = !0),
                null != (e = t.f.o()) && (i.user_id = e),
                (i.config = { config_time: yi(t.I).yb }),
                { respond_with: i }
              );
            }
            function Vn(t, e) {
              t = [["X-Braze-Api-Key", t.Z]];
              var n = !1;
              return (
                null != e.respond_with &&
                  e.respond_with.triggers &&
                  (t.push(["X-Braze-TriggersRequest", "true"]), (n = !0)),
                null != e.respond_with &&
                  e.respond_with.feed &&
                  (t.push(["X-Braze-FeedRequest", "true"]), (n = !0)),
                n && t.push(["X-Braze-DataRequest", "true"]),
                t
              );
            }
            function qn(t) {
              if (
                null == t.campaignId &&
                null == t.cardId &&
                null == t.triggerId
              )
                return (
                  F.info(
                    "The in-app message has no analytics id. Not logging event to Braze servers."
                  ),
                  null
                );
              var e = {};
              return (
                null != t.cardId && (e.card_ids = [t.cardId]),
                null != t.campaignId && (e.campaign_ids = [t.campaignId]),
                null != t.triggerId && (e.trigger_ids = [t.triggerId]),
                e
              );
            }
            function Kn(t) {
              for (var e = null, n = 0; n < t.length; n++)
                null != t[n].id &&
                  "" !== t[n].id &&
                  (((e = e || {}).ids = e.ids || []), e.ids.push(t[n].id));
              return e;
            }
            function Hn(t, e) {
              t.Nd ||
                (null == e && (e = 1e3 * t.Wb),
                Yn(t),
                (t.Xb = setTimeout(function () {
                  if (document.hidden) {
                    var e = function () {
                      document.hidden ||
                        (document.removeEventListener(
                          "visibilitychange",
                          e,
                          !1
                        ),
                        Bn(t));
                    };
                    document.addEventListener("visibilitychange", e, !1);
                  } else Bn(t);
                }, e)),
                (t.Td = e));
            }
            function Yn(t) {
              null != t.Xb && (clearTimeout(t.Xb), (t.Xb = null));
            }
            function Jn(t, e) {
              Ft(t.Hc, e);
            }
            function Xn(t, e, n) {
              Di(t.D),
                F.info("Requesting explicit trigger refresh."),
                Bn(t, null, !0, null, e, n);
            }
            function $n(t, e, n, i) {
              var r = new Ve(),
                o = Di(t.D);
              return wi(t.I, n)
                ? (F.info(
                    'Custom Attribute "' + n + '" is blacklisted, ignoring.'
                  ),
                  r)
                : (r.j.push(
                    new H(t.f.o(), e, new Date().valueOf(), o, {
                      key: n,
                      value: i,
                    })
                  ),
                  (r.h = mt(t.b, r.j)),
                  r);
            }
            function Zn(t, e) {
              var n = new Ve(),
                i = Di(t.D);
              return (
                n.j.push(
                  new H(t.f.o(), M.Re, new Date().valueOf(), i, { n: e })
                ),
                (n.h = mt(t.b, n.j)),
                n
              );
            }
            function Qn(t, e, n) {
              var i = Di(t.D);
              return new H(t.f.o(), M.Ye, e, i, { cid: n });
            }
            function ti(t) {
              var e = P.Ja;
              new D(e).setItem(e.L.Ie, 1, {
                baseUrl: t.ob,
                data: { api_key: t.Z, device_id: ri(t.Tb).id },
                userId: t.f.o(),
              });
            }
            ((t = Un.prototype).Ya = function (t, e, n) {
              var i = this,
                r = Ln(this, {});
              (r.last_full_sync_at = t),
                (r.last_card_updated_at = e),
                null != (t = this.f.o()) && (r.user_id = t),
                Fn({
                  url: this.ob + "/content_cards/sync",
                  data: r,
                  headers: [
                    ["X-Braze-Api-Key", this.Z],
                    ["X-Braze-DataRequest", "true"],
                    ["X-Braze-ContentCardsRequest", "true"],
                  ],
                  h: function (t) {
                    jn(i, r, t) && n(t);
                  },
                  error: function (t) {
                    Gn(t, "retrieving content cards");
                  },
                });
            }),
              (t.Wc = function () {
                (this.Nd = !1), Hn(this);
              }),
              (t.ub = function () {
                this.Hc.K(),
                  Yn(this),
                  (this.Nd = !0),
                  Bn(this, null, null, !1),
                  (this.Xb = null);
              }),
              (t.ic = function (t) {
                var e = this,
                  n = this.D.Tc();
                if (
                  ((n = n !== Di(this.D)),
                  Bn(this, null, !1, null, null, null),
                  ti(this),
                  n && null != t && (t.xb() || t.Da()))
                ) {
                  var i = function () {
                    t.ff
                      ? F.info(
                          "Push token maintenance is disabled, not refreshing token for backend."
                        )
                      : t.subscribe();
                  };
                  C(
                    new D((n = P.Ja)),
                    n.L.yc,
                    function (t, e) {
                      e && i();
                    },
                    function () {
                      var t = St(e.b, Tt.Rb);
                      (null == t || t) && i();
                    }
                  );
                }
              }),
              (t.Qa = function (t, e, n) {
                var i = this.f.o();
                if (i !== t) {
                  var r = this.D,
                    o = $(r.b.ia.M(At.Ka));
                  if (
                    (null != o &&
                      (r.b.ia.remove(At.Ka),
                      null == (o = Ei(r, new Date().valueOf(), o)) ||
                        mt(r.b, [o])),
                    (o = null == (r = this.f).o()),
                    yt(r.b, At.Dc, new X(t)),
                    o)
                  ) {
                    if (null != (o = (r = r.b).R.M(Tt.Ga))) {
                      var s = Tt.td,
                        a = o[s];
                      null != a &&
                        ((o[s] = void 0),
                        r.R.store(Tt.Ga, o),
                        (a.user_id = t),
                        kt(r, a));
                    }
                    if (
                      ((o = null),
                      null != (s = $(r.ia.M(At.Ka))) && (o = s.ea),
                      null != (s = _t(r)))
                    )
                      for (a = 0; a < s.length; a++) {
                        var u = s[a];
                        null == u.Eb && u.sessionId == o && (u.Eb = t),
                          null == u || mt(r, [u]);
                      }
                  }
                  for (r = 0; r < e.length; r++) e[r].Qa(null == i);
                  null != i && Et(this.b, Tt.jb),
                    Et(this.b, Tt.nc),
                    this.ic(n),
                    F.info('Changed user to "' + t + '".');
                } else
                  F.info('Current user is already "' + t + '". Doing nothing.');
              }),
              (t.hb = function () {
                return new it(this.f, this);
              }),
              (t.Bb = function (t) {
                Yn(this), Di(this.D), Bn(this, null, null, null, null, null, t);
              }),
              (t.md = function () {
                Di(this.D), Bn(this, !0);
              }),
              (t.Zc = function (t, e) {
                var n = new Ve(),
                  i = Di(this.D);
                return -1 !== yi(this.I).ie.indexOf(t)
                  ? (F.info(
                      'Custom Event "' + t + '" is blacklisted, ignoring.'
                    ),
                    n)
                  : (n.j.push(
                      new H(
                        this.f.o(),
                        M.CustomEvent,
                        new Date().valueOf(),
                        i,
                        { n: t, p: e }
                      )
                    ),
                    (n.h = mt(this.b, n.j)),
                    n);
              }),
              (t.dd = function (t, e, n, i, r) {
                var o = new Ve(),
                  s = Di(this.D);
                return -1 !== yi(this.I).pe.indexOf(t)
                  ? (F.info('Purchase "' + t + '" is blacklisted, ignoring.'),
                    o)
                  : (o.j.push(
                      new H(this.f.o(), M.Qe, new Date().valueOf(), s, {
                        pid: t,
                        c: n,
                        p: e,
                        q: i,
                        pr: r,
                      })
                    ),
                    (o.h = mt(this.b, o.j)),
                    o);
              }),
              (t.kc = function (t, e, n, i, r, o) {
                var s = new Ve(),
                  a = Di(this.D);
                return (
                  (e = { latitude: e, longitude: n }),
                  null != i && (e.altitude = i),
                  null != r && (e.ll_accuracy = r),
                  null != o && (e.alt_accuracy = o),
                  s.j.push(new H(t, M.Xe, new Date().valueOf(), a, e)),
                  (s.h = mt(this.b, s.j)),
                  s
                );
              }),
              (t.cd = function (t) {
                var e = new Ve(),
                  n = Di(this.D);
                if (t instanceof Pe)
                  e.j.push(
                    new H(this.f.o(), M.De, new Date().valueOf(), n, {
                      trigger_ids: [t.triggerId],
                    })
                  );
                else {
                  if (!t.hd())
                    return (
                      F.info(
                        "This in-app message has already received an impression. Ignoring analytics event."
                      ),
                      e
                    );
                  if (null == (t = qn(t))) return e;
                  e.j.push(new H(this.f.o(), M.Pe, new Date().valueOf(), n, t));
                }
                return (e.h = mt(this.b, e.j)), e;
              }),
              (t.ad = function (t) {
                var e = new Ve(),
                  n = Di(this.D);
                return t.Xa()
                  ? (null == (t = qn(t)) ||
                      (e.j.push(
                        new H(this.f.o(), M.Ad, new Date().valueOf(), n, t)
                      ),
                      (e.h = mt(this.b, e.j))),
                    e)
                  : (F.info(
                      "This in-app message has already received a click. Ignoring analytics event."
                    ),
                    e);
              }),
              (t.$c = function (t, e) {
                var n = new Ve(),
                  i = Di(this.D);
                return t.Xa()
                  ? null == (e = qn(e))
                    ? n
                    : t.id === Re
                    ? (F.info(
                        "This in-app message button does not have a tracking id. Not logging event to Braze servers."
                      ),
                      n)
                    : (null != t.id && (e.bid = t.id),
                      n.j.push(
                        new H(this.f.o(), M.zd, new Date().valueOf(), i, e)
                      ),
                      (n.h = mt(this.b, n.j)),
                      n)
                  : (F.info(
                      "This in-app message button has already received a click. Ignoring analytics event."
                    ),
                    n);
              }),
              (t.bd = function (t, e, n) {
                var i = new Ve(),
                  r = Di(this.D);
                return t.Xa(n)
                  ? (null == (t = qn(t)) ||
                      ((n = M.Ad),
                      null != e && ((t.bid = e), (n = M.zd)),
                      i.j.push(
                        new H(this.f.o(), n, new Date().valueOf(), r, t)
                      ),
                      (i.h = mt(this.b, i.j))),
                    i)
                  : (F.info(
                      "This in-app message has already received a click. Ignoring analytics event."
                    ),
                    i);
              }),
              (t.U = function (t, e) {
                var n = new Ve(),
                  i = Di(this.D);
                return (
                  (t = { trigger_ids: [t], error_code: e }),
                  n.j.push(new H(this.f.o(), M.Oe, new Date().valueOf(), i, t)),
                  (n.h = mt(this.b, n.j)),
                  n
                );
              }),
              (t.Ua = function (t, e) {
                for (
                  var n = new Ve(),
                    i = Di(this.D),
                    r = [],
                    o = [],
                    s = e ? St(this.b, Tt.$a) || {} : St(this.b, Tt.jb) || {},
                    a = 0;
                  a < t.length;
                  a++
                )
                  t[a].hd(),
                    t[a] instanceof Qt ? o.push(t[a]) : r.push(t[a]),
                    (s[t[a].id] = !0);
                return (
                  (t = Kn(r)),
                  (o = Kn(o)),
                  (null == t && null == o) ||
                    (wt(this.b, e ? Tt.$a : Tt.jb, s),
                    null != t &&
                      n.j.push(
                        new H(
                          this.f.o(),
                          e ? M.Ae : M.xe,
                          new Date().valueOf(),
                          i,
                          t
                        )
                      ),
                    null != o &&
                      e &&
                      n.j.push(
                        new H(this.f.o(), M.Ce, new Date().valueOf(), i, o)
                      ),
                    (n.h = mt(this.b, n.j))),
                  n
                );
              }),
              (t.Ta = function (t, e) {
                var n = new Ve(),
                  i = Di(this.D);
                if ((t.Xa(), null == t.url || "" === t.url))
                  return (
                    F.info(
                      "Card " +
                        t.id +
                        " has no url. Not logging click to Braze servers."
                    ),
                    n
                  );
                if (e) {
                  var r = St(this.b, Tt.Za) || {};
                  (r[t.id] = !0), wt(this.b, Tt.Za, r);
                }
                return (
                  null == (t = Kn([t])) ||
                    (n.j.push(
                      new H(
                        this.f.o(),
                        e ? M.ye : M.we,
                        new Date().valueOf(),
                        i,
                        t
                      )
                    ),
                    (n.h = mt(this.b, n.j))),
                  n
                );
              }),
              (t.Yc = function (t) {
                var e = new Ve(),
                  n = Di(this.D);
                if (!t.gd())
                  return (
                    F.info(
                      "Card " +
                        t.id +
                        " refused this dismissal. Ignoring analytics event."
                    ),
                    e
                  );
                var i = St(this.b, Tt.qa) || {};
                return (
                  (i[t.id] = !0),
                  wt(this.b, Tt.qa, i),
                  null == (t = Kn([t])) ||
                    (e.j.push(
                      new H(this.f.o(), M.ze, new Date().valueOf(), n, t)
                    ),
                    (e.h = mt(this.b, e.j))),
                  e
                );
              });
            var ei = {
              BROWSER: "browser",
              BROWSER_VERSION: "browserVersion",
              OS: "os",
              RESOLUTION: "resolution",
              LANGUAGE: "language",
              TIME_ZONE: "timeZone",
              USER_AGENT: "userAgent",
            };
            function ni(t) {
              this.id = t;
            }
            function ii(t, e) {
              (this.b = t), null == e && (e = G(ei)), (this.Od = e);
            }
            function ri(t) {
              var e = $(t.b.ia.M(At.xd));
              null == e && ((e = new X(E.fc())), yt(t.b, At.xd, e)),
                (e = new ni(e.ea));
              for (var n = 0; n < t.Od.length; n++) {
                var i = t.Od[n];
                switch (i) {
                  case "browser":
                    e[i] = vt.cb;
                    break;
                  case "browserVersion":
                    e[i] = vt.version;
                    break;
                  case "os":
                    e[i] = vt.gb();
                    break;
                  case "resolution":
                    e[i] = screen.width + "x" + screen.height;
                    break;
                  case "language":
                    e[i] = vt.language;
                    break;
                  case "timeZone":
                    t: {
                      var r = new Date();
                      if (
                        "undefined" != typeof Intl &&
                        "function" == typeof Intl.DateTimeFormat
                      )
                        try {
                          if (
                            "function" ==
                            typeof Intl.DateTimeFormat().resolvedOptions
                          ) {
                            var o =
                              Intl.DateTimeFormat().resolvedOptions().timeZone;
                            if (null != o && "" !== o) {
                              var s = o;
                              break t;
                            }
                          }
                        } catch (l) {
                          F.info(
                            "Intl.DateTimeFormat threw an error, probably https://bugs.chromium.org/p/chromium/issues/detail?id=811403, falling back to GTM offset: " +
                              l.message
                          );
                        }
                      (s = r.getTimezoneOffset()), (r = parseInt(s / 60));
                      var a = parseInt(s % 60),
                        u = "GMT";
                      0 !== s &&
                        (u =
                          u +
                          (0 > s ? "+" : "-") +
                          ("00" + Math.abs(r)).slice(-2) +
                          ":" +
                          ("00" + Math.abs(a)).slice(-2)),
                        (s = u);
                    }
                    e[i] = s;
                    break;
                  case "userAgent":
                    e[i] = vt.userAgent;
                }
              }
              return e;
            }
            function oi(t) {
              (this.Aa = t),
                (this.$b = null),
                (this.ae = "geolocation" in navigator);
            }
            function si(t) {
              t.ae
                ? null != t.$b &&
                  (navigator.geolocation.clearWatch(t.$b),
                  (t.$b = null),
                  F.info("Stopped watching Geolocation"))
                : F.info(t.vc);
            }
            function ai(t, e, n, i, r) {
              (this.endpoint = t || null),
                (this.ge = e || null),
                (this.publicKey = n || null),
                (this.qg = i || null),
                (this.na = r || null);
            }
            function ui(t, e, n, i, r, o, s, a, u, l) {
              (this.Aa = t),
                (this.Z = e),
                (this.Tb = n),
                (this.lf = i),
                (this.Zd = r || "/service-worker.js"),
                (this.Xd = o),
                (this.I = s),
                (this.Gc = a || !1),
                (this.ff = u || !1),
                (this.b = l),
                (this.Zb =
                  "serviceWorker" in navigator &&
                  "undefined" != typeof ServiceWorkerRegistration &&
                  "showNotification" in ServiceWorkerRegistration.prototype &&
                  "PushManager" in window),
                (this.Jc =
                  "safari" in window && "pushNotification" in window.safari);
            }
            function li(t, e, n, i, r, o) {
              e.unsubscribe()
                .then(function (e) {
                  e
                    ? di(t, n, i, r, o)
                    : (F.error("Failed to unsubscribe device from push."),
                      "function" == typeof o && o(!1));
                })
                .catch(function (t) {
                  F.error("Push unsubscription error: " + t),
                    "function" == typeof o && o(!1);
                });
            }
            function ci(t, e, n, i) {
              var r = (function (t) {
                  if ("string" == typeof t) return t;
                  if (
                    0 !==
                    t.endpoint.indexOf(
                      "https://android.googleapis.com/gcm/send"
                    )
                  )
                    return t.endpoint;
                  var e = t.endpoint;
                  return (
                    t.subscriptionId &&
                      -1 === t.endpoint.indexOf(t.subscriptionId) &&
                      (e = t.endpoint + "/" + t.subscriptionId),
                    e
                  );
                })(e),
                o = null,
                s = null;
              if (null != e.getKey)
                try {
                  (o = btoa(
                    String.fromCharCode.apply(
                      null,
                      new Uint8Array(e.getKey("p256dh"))
                    )
                  )),
                    (s = btoa(
                      String.fromCharCode.apply(
                        null,
                        new Uint8Array(e.getKey("auth"))
                      )
                    ));
                } catch (h) {
                  if ("invalid arguments" !== h.message) throw h;
                }
              (e = (function (t) {
                var e;
                return t.options &&
                  (e = t.options.applicationServerKey) &&
                  e.byteLength &&
                  0 < e.byteLength
                  ? btoa(String.fromCharCode.apply(null, new Uint8Array(e)))
                      .replace(/\+/g, "-")
                      .replace(/\//g, "_")
                  : null;
              })(e)),
                t.Aa.jd(r, i, o, s, e),
                r && "function" == typeof n && n(r, o, s);
            }
            function hi(t, e, n) {
              t.Aa.Ab(!1), F.info(e), "function" == typeof n && n(!1);
            }
            function fi(t, e, n, i, r) {
              if ("default" === n.permission)
                try {
                  window.safari.pushNotification.requestPermission(
                    t.lf,
                    e,
                    { api_key: t.Z, device_id: ri(t.Tb).id },
                    function (n) {
                      "granted" === n.permission && t.Aa.qd("opted_in"),
                        fi(t, e, n, i, r);
                    }
                  );
                } catch (g) {
                  hi(t, "Could not request permission for push: " + g, r);
                }
              else
                "denied" === n.permission
                  ? hi(
                      t,
                      "The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard.",
                      r
                    )
                  : "granted" === n.permission &&
                    (F.info("Device successfully subscribed to push."),
                    ci(t, n.deviceToken, i, new Date()));
            }
            function pi(t, e, n) {
              function i(i) {
                switch (i) {
                  case "granted":
                    "function" == typeof t && t();
                    break;
                  case "default":
                    "function" == typeof e && e();
                    break;
                  case "denied":
                    "function" == typeof n && n();
                    break;
                  default:
                    F.error("Received unexpected permission result " + i);
                }
              }
              var r = !1,
                o = window.Notification.requestPermission(function (t) {
                  r && i(t);
                });
              o
                ? o.then(function (t) {
                    i(t);
                  })
                : (r = !0);
            }
            function di(t, e, n, i, r) {
              var o = { userVisibleOnly: !0 };
              null != n && (o.applicationServerKey = n),
                e.pushManager
                  .subscribe(o)
                  .then(function (e) {
                    F.info("Device successfully subscribed to push."),
                      ci(t, e, i, new Date());
                  })
                  .catch(function (e) {
                    t.Da()
                      ? (F.info(
                          "Permission for push notifications was denied."
                        ),
                        "function" == typeof r && r(!1))
                      : F.error("Push subscription failed: " + e);
                  });
            }
            function gi(t) {
              return t.Gc
                ? navigator.serviceWorker.getRegistration()
                : navigator.serviceWorker.register(t.Zd).then(function () {
                    return navigator.serviceWorker.ready.then(function (t) {
                      return (
                        t &&
                          "function" == typeof t.update &&
                          t.update().catch(function (t) {
                            F.info("ServiceWorker update failed: " + t);
                          }),
                        t
                      );
                    });
                  });
            }
            function vi(t, e, n, i, r, o, s) {
              (this.yb = t || 0),
                (this.ie = e || []),
                (this.ee = n || []),
                (this.pe = i || []),
                (this.ed = r),
                (null != r && "" !== r) || (this.ed = null),
                (this.na = o || null),
                (this.sb = s || {});
            }
            function bi(t) {
              (this.b = t),
                (this.Lc = new Pt()),
                (this.Ld = new Pt()),
                (this.Yb = null);
            }
            function yi(t) {
              if (null == t.Yb) {
                var e = St(t.b, Tt.Hd);
                if (null != e) {
                  var n = e.l;
                  "3.0.1" !== e.s && (n = 0),
                    (e = new vi(n, e.e, e.a, e.p, e.m, e.v, e.c));
                } else e = new vi();
                t.Yb = e;
              }
              return t.Yb;
            }
            function mi(t, e) {
              (e = Ft(t.Lc, e)), t.Md && t.Lc.O(t.Md), (t.Md = e);
            }
            function _i(t, e) {
              Ft(t.Ld, e);
            }
            function wi(t, e) {
              return -1 !== yi(t).ee.indexOf(e);
            }
            function Si(t, e, n, i) {
              (this.b = t),
                (this.f = e),
                (this.I = n),
                (this.pb = 1e3),
                (i = parseFloat(i)),
                isNaN(i) && (i = 1800),
                i < this.pb / 1e3 &&
                  (F.info(
                    "Specified session timeout of " +
                      i +
                      "s is too small, using the minimum session timeout of " +
                      this.pb / 1e3 +
                      "s instead."
                  ),
                  (i = this.pb / 1e3)),
                (this.nf = i);
            }
            function Ei(t, e, n) {
              return new H(t.f.o(), M.$e, e, n.ea, { d: W(e - n.tb) });
            }
            function ki(t) {
              var e = new Date().valueOf(),
                n = yi(t.I).ed;
              if (null == n) return !1;
              var i = St(t.b, Tt.Ob);
              return (n = null == i || e - i > 1e3 * n) && wt(t.b, Tt.Ob, e), n;
            }
            function Di(t) {
              var e = new Date().valueOf(),
                n = e + 1e3 * t.nf,
                i = $(t.b.ia.M(At.Ka));
              if (null == i || (!(e - i.tb < t.pb) && i.Pc < e)) {
                var r = "Generating session start event with time " + e;
                if (null != i) {
                  var o = i.hc;
                  o - i.tb < t.pb && (o = i.tb + t.zg),
                    null == (i = Ei(t, o, i)) || mt(t.b, [i]),
                    (r += " (old session ended " + o + ")");
                }
                return (
                  (r += ". Will expire " + n.valueOf()),
                  F.info(r),
                  (n = new X(E.fc(), n)),
                  null == (r = new H(t.f.o(), M.Id, e, n.ea)) || mt(t.b, [r]),
                  yt(t.b, At.Ka, n),
                  null == St(t.b, Tt.Ob) && wt(t.b, Tt.Ob, e),
                  n.ea
                );
              }
              return (i.hc = e), (i.Pc = n), yt(t.b, At.Ka, i), i.ea;
            }
            function xi(t, n) {
              var i = !1;
              try {
                if (localStorage && localStorage.getItem)
                  try {
                    localStorage.setItem(Tt.Ac, !0),
                      localStorage.getItem(Tt.Ac) &&
                        (localStorage.removeItem(Tt.Ac), (i = !0));
                  } catch (e) {
                    if (
                      ("QuotaExceededError" !== e.name &&
                        "NS_ERROR_DOM_QUOTA_REACHED" !== e.name) ||
                      !(0 < localStorage.length)
                    )
                      throw e;
                    i = !0;
                  }
              } catch (e) {
                F.info("Local Storage not supported!");
              }
              return new bt(
                (n = new Rt(
                  t,
                  (navigator.cookieEnabled ||
                    ("cookie" in document &&
                      (0 < document.cookie.length ||
                        -1 <
                          (document.cookie = "test").indexOf.call(
                            document.cookie,
                            "test"
                          )))) &&
                    !n,
                  i
                )),
                i ? new Ct(t) : new Mt()
              );
            }
            function Ai(t) {
              for (var e = t.length, n = t.length - 1; 0 <= n; n--) {
                var i = t.charCodeAt(n);
                127 < i && 2047 >= i ? e++ : 2047 < i && 65535 >= i && (e += 2),
                  56320 <= i && 57343 >= i && n--;
              }
              return e;
            }
            function Ti(t, e) {
              (this.I = t), (this.b = e);
            }
            function Ci(t, e, n) {
              return Dt(t.b, t.o(), e, n);
            }
            function Oi() {}
            function Ii(t, e, n, i, r) {
              (this.ca = t),
                (this.H = e),
                (this.b = n),
                (this.I = i),
                (this.df = r),
                (this.wa = this.za = 0),
                this.Ba();
            }
            function Ni(t, e) {
              if (Pi(t)) {
                t.Ba();
                var n = t.B.slice();
                t.H.hb().o(function (i) {
                  for (var r = 0; r < e.length; r++)
                    if (
                      i === e[r].userId ||
                      (null == i && null == e[r].userId)
                    ) {
                      for (
                        var o = e[r].card, s = null, a = 0;
                        a < t.B.length;
                        a++
                      )
                        if (o.id === t.B[a].id) {
                          s = t.B[a];
                          break;
                        }
                      if (null == s) null != (o = Wt(o)) && n.push(o);
                      else if (!zt(s, o))
                        for (s = 0; s < n.length; s++)
                          if (o.id === n[s].id) {
                            n.splice(s, 1);
                            break;
                          }
                    }
                  (t.B = Ri(t, Mi(t, n, !1))), t.ac(), Ut(t.ca, t.vb(!0));
                });
              }
            }
            function Mi(t, e, n) {
              for (
                var i = St(t.b, Tt.Za) || {},
                  r = St(t.b, Tt.$a) || {},
                  o = St(t.b, Tt.qa) || {},
                  s = {},
                  a = {},
                  u = {},
                  l = 0;
                l < e.length;
                l++
              )
                i[e[l].id] && ((e[l].clicked = !0), (s[e[l].id] = !0)),
                  r[e[l].id] && ((e[l].viewed = !0), (a[e[l].id] = !0)),
                  o[e[l].id] && ((e[l].dismissed = !0), (u[e[l].id] = !0));
              return (
                n && (wt(t.b, Tt.Za, s), wt(t.b, Tt.$a, a), wt(t.b, Tt.qa, u)),
                e
              );
            }
            function Ri(t, e) {
              for (
                var n = [],
                  i = new Date(),
                  r = St(t.b, Tt.qa) || {},
                  o = !1,
                  s = 0;
                s < e.length;
                s++
              ) {
                var a,
                  u = e[s].url;
                (a = !t.df && u) &&
                  (a = !(
                    !(a = u) ||
                    (0 !==
                      (a = a.toString().toLowerCase()).lastIndexOf(
                        "javascript:",
                        0
                      ) &&
                      0 !== a.lastIndexOf("data:", 0))
                  )),
                  a
                    ? F.error(
                        'Card with url "' +
                          u +
                          '" will not be displayed because Javascript URLs are disabled. Use the "allowUserSuppliedJavascript" option for appboy.initialize to enable this card.'
                      )
                    : (null == e[s].expiresAt || e[s].expiresAt >= i) &&
                      !e[s].dismissed
                    ? n.push(e[s])
                    : (o = r[e[s].id] = !0);
              }
              return o && wt(t.b, Tt.qa, r), n;
            }
            function Pi(t) {
              return (
                !!yi(t.I).sb.enabled ||
                (0 !== yi(t.I).yb &&
                  (Ut(t.ca, new We([], new Date().valueOf())), Et(t.b, Tt.kb)),
                !1)
              );
            }
            function Fi(t, e) {
              (this.ca = t), (this.b = e), this.Ba();
            }
            function Ui(t, e, n, i, r) {
              (this.Fa = t),
                (this.te = e),
                (this.se = n),
                (this.ec = i),
                (this.Ea = r);
            }
            function Li(t, e, n, i, r) {
              return null == t || null == t.trigger_id
                ? null
                : new Ui(t.trigger_id, e, n, i, r);
            }
            function ji(t, e, n, i) {
              (this.jf = t),
                (this.ca = e),
                (this.b = n),
                (this.H = i),
                (this.Vb = []),
                (this.ka = []),
                (this.xa = null),
                (this.J = {}),
                (this.Y = {}),
                Gi(this),
                zi(this);
            }
            function Bi(t) {
              (t.xa = St(t.b, Tt.sc) || t.xa),
                (t.J = St(t.b, Tt.mb) || t.J),
                (t.Y = St(t.b, Tt.Nb) || t.Y);
              for (var e = 0; e < t.T.length; e++) {
                var n = t.T[e];
                null != t.Y[n.id] && (n.ya = t.Y[n.id]);
              }
            }
            function Gi(t) {
              t.Kc = St(t.b, Tt.Cc) || 0;
              for (
                var e = St(t.b, Tt.Bc) || [], n = [], i = 0;
                i < e.length;
                i++
              )
                n.push(Nn(e[i]));
              (t.T = n), Bi(t);
            }
            function zi(t) {
              function e(e, n, i, r, o) {
                return function () {
                  Wi(t, e, n, i, r, o);
                };
              }
              for (var n = {}, i = 0; i < t.T.length; i++)
                n[t.T[i].id] = t.T[i];
              i = !1;
              for (var r = 0; r < t.T.length; r++) {
                var o = t.T[r];
                if (null != t.J[o.id]) {
                  for (var s = t.J[o.id], a = [], u = 0; u < s.length; u++) {
                    var l = s[u],
                      c = Math.max(l.ec + 1e3 * o.Ra - new Date().valueOf(), 0);
                    if (0 < c) {
                      a.push(l);
                      var h = void 0,
                        f = void 0;
                      null != l.re && (h = l.re),
                        null != l.Mc && Y(l.Mc) && (f = J(l.Mc));
                      var p = [];
                      if (L(l.Qc))
                        for (var d = 0; d < l.Qc.length; d++) {
                          var g = n[l.Qc[d]];
                          null != g && p.push(g);
                        }
                      t.ka.push(setTimeout(e(o, l.ec, h, f, p), c));
                    }
                  }
                  t.J[o.id].length > a.length &&
                    ((t.J[o.id] = a),
                    (i = !0),
                    0 === t.J[o.id].length && delete t.J[o.id]);
                }
              }
              i && wt(t.b, Tt.mb, t.J);
            }
            function Wi(t, e, n, i, r, o) {
              function s() {
                Bi(t);
                var e = o.pop();
                if (null != e)
                  if ((qi(t, e, n, i, r, o), In(e, n))) {
                    var a =
                      "Server aborted in-app message display, but the timeout on fallback trigger " +
                      e.id +
                      "has already elapsed.";
                    0 < o.length && (a += " Continuing to fall back."),
                      F.info(a),
                      t.H.U(e.id, ae.yd),
                      s();
                  } else
                    F.info(
                      "Server aborted in-app message display. Falling back to lower priority " +
                        e.type +
                        " trigger action " +
                        e.id
                    ),
                      0 < (a = 1e3 * e.Ra - (new Date().valueOf() - n))
                        ? t.ka.push(
                            setTimeout(function () {
                              Wi(t, e, n, i, r, o);
                            }, a)
                          )
                        : Wi(t, e, n, i, r, o);
              }
              function a(r) {
                Bi(t);
                var o = new Date().valueOf();
                In(e, n)
                  ? e.type === Rn.Jd
                    ? t.H.U(e.id, ae.lb)
                    : t.H.U(e.id, ae.yd)
                  : !1 === navigator.onLine && e.type === Rn.qc && r.imageUrl
                  ? (F.info(
                      "Not showing " +
                        e.type +
                        " trigger action " +
                        e.id +
                        " due to offline state."
                    ),
                    t.H.U(e.id, ae.Me))
                  : (null == e.ya || (e.zb !== Mn && o - e.ya >= 1e3 * e.zb)) &&
                    Vi(t, e, o, i)
                  ? (Ut(t.ca, [r]),
                    Bi(t),
                    (e.ya = o),
                    (t.xa = o),
                    wt(t.b, Tt.sc, o),
                    (t.Y[e.id] = o),
                    wt(t.b, Tt.Nb, t.Y))
                  : F.info(
                      "Not displaying trigger " +
                        e.id +
                        " because display time fell outside of the acceptable time window."
                    );
              }
              switch (e.type) {
                case Rn.qc:
                  var u = ne(e.data);
                  if (null == u) {
                    F.error(
                      "Could not parse trigger data for trigger " +
                        e.id +
                        ", ignoring."
                    ),
                      t.H.U(e.id, ae.nb);
                    break;
                  }
                  a(u);
                  break;
                case Rn.Jd:
                  if (null == (u = Li(e.data, a, s, n, e.Ea))) {
                    F.error(
                      "Could not parse trigger data for trigger " +
                        e.id +
                        ", ignoring."
                    ),
                      t.H.U(e.id, ae.nb);
                    break;
                  }
                  zn(t.H, u, i, r);
                  break;
                default:
                  F.error(
                    "Trigger " +
                      e.id +
                      " was of unexpected type " +
                      e.type +
                      ", ignoring."
                  ),
                    t.H.U(e.id, ae.nb);
              }
            }
            function Vi(t, e, n, i) {
              return (
                null == t.xa ||
                (i === gn.W
                  ? (F.info(
                      "Ignoring minimum interval between trigger because it is a test type."
                    ),
                    !0)
                  : (null == (e = e.ne) && (e = t.jf), n - t.xa >= 1e3 * e))
              );
            }
            function qi(t, e, n, i, r, o) {
              Bi(t), (t.J[e.id] = t.J[e.id] || []);
              var s,
                a = {};
              for (
                a.ec = n,
                  a.re = i,
                  null != r && (s = r.A()),
                  a.Mc = s,
                  n = [],
                  i = 0;
                i < o.length;
                i++
              )
                n.push(o[i].id);
              (a.Qc = n), t.J[e.id].push(a), wt(t.b, Tt.mb, t.J);
            }
            (nt.DeviceProperties = ei),
              (ni.prototype.cc = function () {
                var t = {};
                return (
                  null != this.browser && (t.browser = this.browser),
                  null != this.browserVersion &&
                    (t.browser_version = this.browserVersion),
                  null != this.os && (t.os_version = this.os),
                  null != this.resolution && (t.resolution = this.resolution),
                  null != this.language && (t.locale = this.language),
                  null != this.timeZone && (t.time_zone = this.timeZone),
                  null != this.userAgent && (t.user_agent = this.userAgent),
                  t
                );
              }),
              (oi.prototype.rf = function (t) {
                var e = this;
                if (document.hidden) {
                  si(this);
                  var n = function () {
                    document.hidden ||
                      (document.removeEventListener("visibilitychange", n, !1),
                      e.watchPosition());
                  };
                  document.addEventListener("visibilitychange", n, !1);
                }
                this.Aa.kc(
                  t.coords.latitude,
                  t.coords.longitude,
                  t.coords.accuracy,
                  t.coords.altitude,
                  t.coords.altitudeAccuracy
                );
              }),
              (oi.prototype.qf = function (t) {
                t.code === t.PERMISSION_DENIED
                  ? F.info(t.message)
                  : F.error(
                      "Could not detect user location: " +
                        t.code +
                        " - " +
                        t.message
                    );
              }),
              (oi.prototype.watchPosition = function () {
                this.ae
                  ? (si(this),
                    (this.$b = navigator.geolocation.watchPosition(
                      this.rf.bind(this),
                      this.qf.bind(this)
                    )),
                    F.info("Requested Geolocation"))
                  : F.info(this.vc);
              }),
              (ai.prototype.A = function () {
                return {
                  e: this.endpoint,
                  c: this.ge,
                  p: this.publicKey,
                  u: this.qg,
                  v: this.na,
                };
              }),
              ((t = ui.prototype).ma = function () {
                return this.Zb || this.Jc;
              }),
              (t.Da = function () {
                var t =
                    this.ma() &&
                    "Notification" in window &&
                    null != window.Notification &&
                    null != window.Notification.permission &&
                    "denied" === window.Notification.permission,
                  e =
                    this.ma() &&
                    (!("Notification" in window) ||
                      null == window.Notification);
                return t || e;
              }),
              (t.xb = function () {
                return (
                  this.ma() &&
                  "Notification" in window &&
                  null != window.Notification &&
                  null != window.Notification.permission &&
                  "granted" === window.Notification.permission
                );
              }),
              (t.Xc = function (t, e, n) {
                var i = this;
                (n = this.Xd || n),
                  this.ma()
                    ? this.Zb
                      ? gi(this)
                          .then(function (n) {
                            i.Da() || null == n
                              ? e()
                              : n.pushManager
                                  .getSubscription()
                                  .then(function (n) {
                                    n ? t() : e();
                                  })
                                  .catch(function () {
                                    e();
                                  });
                          })
                          .catch(function () {
                            e();
                          })
                      : null == n || "" === n
                      ? F.error(
                          "You must supply the safariWebsitePushId argument in order to use isPushGranted on Safari"
                        )
                      : "granted" ===
                        window.safari.pushNotification.permission(n).permission
                      ? t()
                      : e()
                    : e();
              }),
              (t.subscribe = function (t, e, n) {
                var i = this;
                if (((t = this.Xd || t), this.ma()))
                  if (this.Zb) {
                    if (!this.Gc && null != window.location) {
                      var r = this.Zd;
                      if (
                        (-1 === r.indexOf(window.location.host) &&
                          (r = window.location.host + r),
                        -1 === r.indexOf(window.location.protocol) &&
                          (r = window.location.protocol + "//" + r),
                        0 !==
                          window.location.href.indexOf(
                            r.substr(0, r.lastIndexOf("/") + 1)
                          ))
                      )
                        return void F.error(
                          "Cannot subscribe to push from a path higher than the service worker location (tried to subscribe from " +
                            window.location.pathname +
                            " but service worker is at " +
                            r +
                            ")"
                        );
                    }
                    if (this.Da())
                      hi(
                        this,
                        "Notifications from this site are blocked. This may be a temporary embargo or a permanent denial.",
                        n
                      );
                    else if (this.I && !yi(this.I).na && 0 === yi(this.I).yb)
                      F.info(
                        "Waiting for VAPID key from server config before subscribing to push."
                      ),
                        mi(this.I, function () {
                          i.subscribe(t, e, n);
                        });
                    else {
                      var o = this.xb();
                      pi(
                        function () {
                          o || i.Aa.qd("opted_in"),
                            gi(i)
                              .then(function (t) {
                                null == t
                                  ? (F.error(
                                      "No service worker registration. Set the `manageServiceWorkerExternally` initialization option to false or ensure that your service worker is registered before calling registerAppboyPushMessages."
                                    ),
                                    "function" == typeof n && n())
                                  : t.pushManager
                                      .getSubscription()
                                      .then(function (r) {
                                        var o = null;
                                        if (
                                          (i.I &&
                                            null != yi(i.I).na &&
                                            (o = S.pg(yi(i.I).na)),
                                          r)
                                        ) {
                                          var s = null,
                                            a = null,
                                            u = St(i.b, Tt.Rb);
                                          if (u && !L(u)) {
                                            try {
                                              var l = new ai(
                                                u.e,
                                                K(u.c),
                                                u.p,
                                                u.u,
                                                u.v
                                              ).ge;
                                            } catch (c) {
                                              l = null;
                                            }
                                            null == l ||
                                              isNaN(l.getTime()) ||
                                              0 === l.getTime() ||
                                              ((s = l),
                                              (a = new Date(s)).setMonth(
                                                s.getMonth() + 6
                                              ));
                                          }
                                          null != o &&
                                          r.options &&
                                          r.options.applicationServerKey &&
                                          r.options.applicationServerKey
                                            .byteLength &&
                                          0 <
                                            r.options.applicationServerKey
                                              .byteLength &&
                                          !z(
                                            o,
                                            new Uint8Array(
                                              r.options.applicationServerKey
                                            )
                                          )
                                            ? (12 <
                                              r.options.applicationServerKey
                                                .byteLength
                                                ? F.info(
                                                    "Device was already subscribed to push using a different VAPID provider, creating new subscription."
                                                  )
                                                : F.info(
                                                    "Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."
                                                  ),
                                              li(i, r, t, o, e, n))
                                            : r.expirationTime &&
                                              new Date(r.expirationTime) <=
                                                new Date().valueOf()
                                            ? (F.info(
                                                "Push subscription is expired, creating new subscription."
                                              ),
                                              li(i, r, t, o, e, n))
                                            : u && L(u)
                                            ? li(i, r, t, o, e, n)
                                            : null == a
                                            ? (F.info(
                                                "No push subscription creation date found, creating new subscription."
                                              ),
                                              li(i, r, t, o, e, n))
                                            : a <= new Date().valueOf()
                                            ? (F.info(
                                                "Push subscription older than 6 months, creating new subscription."
                                              ),
                                              li(i, r, t, o, e, n))
                                            : (F.info(
                                                "Device already subscribed to push, sending existing subscription to backend."
                                              ),
                                              ci(i, r, e, s));
                                        } else di(i, t, o, e, n);
                                      })
                                      .catch(function (t) {
                                        F.error(
                                          "Error checking current push subscriptions: " +
                                            t
                                        );
                                      });
                              })
                              .catch(function (t) {
                                F.error(
                                  "ServiceWorker registration failed: " + t
                                );
                              });
                        },
                        function () {
                          var t =
                            "Permission for push notifications was ignored.";
                          i.Da() &&
                            (t +=
                              " The browser has automatically blocked further permission requests for a period (probably 1 week)."),
                            F.info(t),
                            "function" == typeof n && n(!0);
                        },
                        function () {
                          F.info(
                            "Permission for push notifications was denied."
                          ),
                            "function" == typeof n && n(!1);
                        }
                      );
                    }
                  } else
                    this.Jc &&
                      (null == t || "" === t
                        ? F.error(
                            "You must supply the safariWebsitePushId argument in order to use registerAppboyPushMessages on Safari"
                          )
                        : ((r = window.safari.pushNotification.permission(t)),
                          fi(this, t, r, e, n)));
                else F.info(this.vc);
              }),
              (t.unsubscribe = function (t, e) {
                var n = this;
                this.ma()
                  ? this.Zb
                    ? navigator.serviceWorker
                        .getRegistration()
                        .then(function (i) {
                          i &&
                            i.pushManager
                              .getSubscription()
                              .then(function (r) {
                                r &&
                                  (n.Aa.Ab(!0),
                                  r
                                    .unsubscribe()
                                    .then(function (r) {
                                      r
                                        ? (F.info(
                                            "Device successfully unsubscribed from push."
                                          ),
                                          "function" == typeof t && t())
                                        : (F.error(
                                            "Failed to unsubscribe device from push."
                                          ),
                                          "function" == typeof e && e()),
                                        n.Gc ||
                                          (i.unregister(),
                                          F.info(
                                            "Service worker successfully unregistered."
                                          ));
                                    })
                                    .catch(function (t) {
                                      F.error(
                                        "Push unsubscription error: " + t
                                      ),
                                        "function" == typeof e && e();
                                    }));
                              })
                              .catch(function (t) {
                                F.error("Error unsubscribing from push: " + t),
                                  "function" == typeof e && e();
                              });
                        })
                    : this.Jc &&
                      (this.Aa.Ab(!0),
                      F.info("Device unsubscribed from push."),
                      "function" == typeof t && t())
                  : F.info(this.vc);
              }),
              (vi.prototype.A = function () {
                return {
                  s: "3.0.1",
                  l: this.yb,
                  e: this.ie,
                  a: this.ee,
                  p: this.pe,
                  m: this.ed,
                  v: this.na,
                  c: this.sb,
                };
              }),
              (Si.prototype.Tc = function () {
                var t = $(this.b.ia.M(At.Ka));
                return null == t ? null : t.ea;
              }),
              (Ti.prototype.o = function () {
                var t = $(this.b.ia.M(At.Dc));
                if (null == t) return null;
                var e = t.ea,
                  n = Ai(e);
                if (997 < n) {
                  for (; 997 < n; ) n = Ai((e = e.slice(0, e.length - 1)));
                  (t.ea = e), yt(this.b, At.Dc, t);
                }
                return e;
              }),
              (Ti.prototype.od = function (t, e) {
                if (wi(this.I, t))
                  return (
                    F.info(
                      'Custom Attribute "' + t + '" is blacklisted, ignoring.'
                    ),
                    !1
                  );
                var n = {};
                return (n[t] = e), Ci(this, "custom", n);
              }),
              (Ti.prototype.jd = function (t, e, n, i, r) {
                Ci(this, "push_token", t),
                  Ci(this, "custom_push_public_key", n),
                  Ci(this, "custom_push_user_auth", i),
                  Ci(this, "custom_push_vapid_public_key", r);
                var o = P.Ja,
                  s = new D(o);
                wt(this.b, Tt.Rb, new ai(t, e, n, i, r).A()),
                  s.setItem(o.L.yc, o.Sb, !0);
              }),
              (Ti.prototype.Ab = function (t) {
                if (
                  (Ci(this, "push_token", null),
                  Ci(this, "custom_push_public_key", null),
                  Ci(this, "custom_push_user_auth", null),
                  Ci(this, "custom_push_vapid_public_key", null),
                  t)
                ) {
                  var e = new D((t = P.Ja));
                  wt(this.b, Tt.Rb, !1), e.setItem(t.L.yc, t.Sb, !1);
                }
              }),
              (Oi.prototype.wb = function () {}),
              (Oi.prototype.Qa = function () {}),
              (Oi.prototype.clearData = function () {}),
              w(Ii, Oi),
              ((t = Ii.prototype).Ba = function () {
                for (
                  var t = St(this.b, Tt.kb) || [], e = [], n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = Vt(t[n]);
                  null != i && e.push(i);
                }
                (this.B = Ri(this, Mi(this, e, !1))),
                  (this.za = St(this.b, Tt.Kb) || this.za),
                  (this.wa = St(this.b, Tt.Jb) || this.wa);
              }),
              (t.wb = function (t) {
                if (Pi(this) && null != t && t.cards) {
                  var e = t.full_sync;
                  e || this.Ba();
                  var n = t.cards,
                    i = t.last_full_sync_at;
                  if (((t = t.last_card_updated_at), e))
                    for (
                      var o = [], s = r(this.B), a = s.next();
                      !a.done;
                      a = s.next()
                    )
                      (a = a.value).test && o.push(a);
                  else o = this.B.slice();
                  for (s = 0; s < n.length; s++) {
                    a = n[s];
                    for (var u = null, l = 0; l < this.B.length; l++)
                      if (a.id === this.B[l].id) {
                        u = this.B[l];
                        break;
                      }
                    if (e)
                      (a = Wt(a)),
                        null != u && u.viewed && (a.viewed = !0),
                        null != a && o.push(a);
                    else if (null == u) null != (a = Wt(a)) && o.push(a);
                    else if (!zt(u, a))
                      for (u = 0; u < o.length; u++)
                        if (a.id === o[u].id) {
                          o.splice(u, 1);
                          break;
                        }
                  }
                  (this.B = Ri(this, Mi(this, o, e))),
                    this.ac(),
                    (this.za = i || 0),
                    wt(this.b, Tt.Kb, this.za),
                    (this.wa = t || 0),
                    wt(this.b, Tt.Jb, this.wa),
                    Ut(this.ca, this.vb(!0));
                }
              }),
              (t.ac = function () {
                for (var t = [], e = 0; e < this.B.length; e++)
                  t.push(this.B[e].A());
                wt(this.b, Tt.kb, t);
              }),
              (t.Ya = function () {
                if (Pi(this))
                  return this.H.Ya(this.za, this.wa, this.wb.bind(this));
              }),
              (t.vb = function (t) {
                t || this.Ba(),
                  (t = Ri(this, this.B)).sort(function (t, e) {
                    return t.pinned && !e.pinned
                      ? -1
                      : e.pinned && !t.pinned
                      ? 1
                      : t.updated > e.updated
                      ? -1
                      : e.updated > t.updated
                      ? 1
                      : 0;
                  });
                var e = Math.max(this.wa || 0, this.za || 0);
                return 0 === e && (e = void 0), new We(t, V(e));
              }),
              (t.Qa = function (t) {
                t ||
                  ((this.B = []),
                  Ut(this.ca, new We(this.B.slice(), null)),
                  Et(this.b, Tt.kb),
                  Et(this.b, Tt.Za),
                  Et(this.b, Tt.$a),
                  Et(this.b, Tt.qa)),
                  (this.wa = this.za = 0),
                  Et(this.b, Tt.Kb),
                  Et(this.b, Tt.Jb);
              }),
              (t.clearData = function (t) {
                (this.wa = this.za = 0),
                  (this.B = []),
                  Ut(this.ca, new We(this.B.slice(), null)),
                  t &&
                    (Et(this.b, Tt.kb),
                    Et(this.b, Tt.Za),
                    Et(this.b, Tt.$a),
                    Et(this.b, Tt.qa),
                    Et(this.b, Tt.Kb),
                    Et(this.b, Tt.Jb));
              }),
              w(Fi, Oi),
              ((t = Fi.prototype).Ba = function () {
                for (
                  var t = St(this.b, Tt.uc) || [], e = [], n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = Vt(t[n]);
                  null != i && e.push(i);
                }
                (this.B = e), (this.bb = K(St(this.b, Tt.tc)));
              }),
              (t.ac = function () {
                for (var t = [], e = 0; e < this.B.length; e++)
                  t.push(this.B[e].A());
                wt(this.b, Tt.uc, t);
              }),
              (t.wb = function (t) {
                if (null != t && t.feed) {
                  this.Ba(), (t = t.feed);
                  for (
                    var e, n = [], i = St(this.b, Tt.jb) || {}, r = {}, o = 0;
                    o < t.length;
                    o++
                  ) {
                    var s = (e = t[o]).id,
                      a = e.type,
                      u = e.viewed,
                      l = e.title,
                      c = e.image,
                      h = e.description,
                      f = V(e.created),
                      p = V(e.updated),
                      d = e.categories,
                      g = V(e.expires_at),
                      v = e.url,
                      b = e.domain,
                      y = e.aspect_ratio;
                    (e = e.extras),
                      null !=
                        (s =
                          a === Kt.Kd || a === Kt.Pb
                            ? new Zt(
                                s,
                                u,
                                l,
                                c,
                                h,
                                f,
                                p,
                                d,
                                g,
                                v,
                                b,
                                y,
                                e,
                                !1,
                                !1
                              )
                            : a === Kt.Hb
                            ? new $t(
                                s,
                                u,
                                l,
                                c,
                                h,
                                f,
                                p,
                                d,
                                g,
                                v,
                                b,
                                y,
                                e,
                                !1,
                                !1
                              )
                            : a === Kt.Gb
                            ? new Xt(s, u, c, f, p, d, g, v, b, y, e, !1, !1)
                            : null) &&
                        (i[s.id] && ((s.viewed = !0), (r[s.id] = !0)),
                        n.push(s));
                  }
                  wt(this.b, Tt.jb, r),
                    (this.B = n),
                    this.ac(),
                    (this.bb = new Date()),
                    wt(this.b, Tt.tc, this.bb),
                    Ut(this.ca, new Ge(this.B.slice(), this.bb));
                }
              }),
              (t.Sc = function () {
                this.Ba();
                for (var t = [], e = new Date(), n = 0; n < this.B.length; n++)
                  (null == this.B[n].expiresAt || this.B[n].expiresAt >= e) &&
                    t.push(this.B[n]);
                return new Ge(t, this.bb);
              }),
              (t.clearData = function (t) {
                null == t && (t = !1),
                  (this.B = []),
                  (this.bb = null),
                  t && (Et(this.b, Tt.uc), Et(this.b, Tt.tc)),
                  Ut(this.ca, new Ge(this.B.slice(), this.bb));
              }),
              w(ji, Oi),
              (ji.prototype.wb = function (t) {
                var e = !1;
                if (null != t && t.triggers) {
                  Bi(this);
                  var n = {},
                    i = {};
                  this.T = [];
                  for (var r = 0; r < t.triggers.length; r++) {
                    for (
                      var o = t.triggers[r], s = o.id, a = [], u = 0;
                      u < o.trigger_condition.length;
                      u++
                    )
                      a.push(mn(o.trigger_condition[u]));
                    u = V(o.start_time);
                    var l = V(o.end_time),
                      c = o.priority,
                      h = o.type,
                      f = o.delay,
                      p = o.re_eligibility,
                      d = o.timeout,
                      g = o.data;
                    for (
                      o = o.min_seconds_since_last_trigger,
                        s = U(
                          Rn,
                          h,
                          "Could not construct Trigger from server data",
                          "Trigger.Types"
                        )
                          ? new On(s, a, u, l, c, h, g, f, p, d, o)
                          : null,
                        null != this.Y[s.id] &&
                          ((s.ya = this.Y[s.id]), (n[s.id] = this.Y[s.id])),
                        null != this.J[s.id] && (i[s.id] = this.J[s.id]),
                        a = 0;
                      a < s.fb.length;
                      a++
                    )
                      if (bn(s.fb[a], gn.W, null)) {
                        e = !0;
                        break;
                      }
                    null != s && this.T.push(s);
                  }
                  for (
                    z(this.Y, n) || ((this.Y = n), wt(this.b, Tt.Nb, this.Y)),
                      z(this.J, i) || ((this.J = i), wt(this.b, Tt.mb, this.J)),
                      t = [],
                      n = 0;
                    n < this.T.length;
                    n++
                  )
                    t.push(this.T[n].A());
                  for (
                    this.Kc = new Date().valueOf(),
                      wt(this.b, Tt.Bc, t),
                      wt(this.b, Tt.Cc, this.Kc),
                      e &&
                        (F.info(
                          "Trigger with test condition found, firing test."
                        ),
                        this.la(gn.W)),
                      this.la(gn.OPEN),
                      e = this.Vb,
                      this.Vb = [],
                      t = 0;
                    t < e.length;
                    t++
                  )
                    this.la.apply(this, e[t]);
                }
              }),
              (ji.prototype.la = function (t, e, n) {
                var i = this;
                if (U(gn, t, "Cannot fire trigger action.", "TriggerEvents"))
                  if (0 < this.H.ab)
                    F.info(
                      "Trigger sync is currently in progress, awaiting sync completion before firing trigger event."
                    ),
                      this.Vb.push(arguments);
                  else {
                    (St(this.b, Tt.Cc) || 0) > this.Kc ? Gi(this) : Bi(this);
                    for (
                      var r = new Date().valueOf(),
                        o = r - this.xa,
                        s = !0,
                        a = !0,
                        u = [],
                        l = 0;
                      l < this.T.length;
                      l++
                    ) {
                      var c = this.T[l],
                        h = r + 1e3 * c.Ra;
                      if (
                        (null == c.ya ||
                          (c.zb !== Mn && h - c.ya >= 1e3 * c.zb)) &&
                        (null == c.startTime || c.startTime <= r) &&
                        (null == c.endTime || c.endTime >= r)
                      ) {
                        for (var f = !1, p = 0; p < c.fb.length; p++)
                          if (bn(c.fb[p], t, e)) {
                            f = !0;
                            break;
                          }
                        f &&
                          ((s = !1),
                          Vi(this, c, h, t) && ((a = !1), u.push(c)));
                      }
                    }
                    if (s)
                      F.info(
                        "Trigger event " +
                          t +
                          " did not match any trigger conditions."
                      );
                    else if (a)
                      F.info(
                        "Ignoring " +
                          t +
                          " trigger event because a trigger was displayed " +
                          o / 1e3 +
                          "s ago."
                      );
                    else {
                      u.sort(function (t, e) {
                        return t.priority - e.priority;
                      });
                      var d = u.pop();
                      null != d &&
                        (F.info(
                          "Firing " +
                            d.type +
                            " trigger action " +
                            d.id +
                            " from trigger event " +
                            t +
                            "."
                        ),
                        qi(this, d, r, t, n, u),
                        0 === d.Ra
                          ? Wi(this, d, r, t, n, u)
                          : this.ka.push(
                              setTimeout(function () {
                                Wi(i, d, r, t, n, u);
                              }, 1e3 * d.Ra)
                            ));
                    }
                  }
              }),
              (ji.prototype.Qa = function (t) {
                if (((this.T = []), Et(this.b, Tt.Bc), !t)) {
                  for (
                    this.Vb = [],
                      this.xa = null,
                      this.Y = {},
                      this.J = {},
                      t = 0;
                    t < this.ka.length;
                    t++
                  )
                    clearTimeout(this.ka[t]);
                  (this.ka = []),
                    Et(this.b, Tt.sc),
                    Et(this.b, Tt.Nb),
                    Et(this.b, Tt.mb),
                    Et(this.b, Tt.Te),
                    Et(this.b, Tt.Se),
                    Et(this.b, Tt.Ue);
                }
              }),
              (ji.prototype.clearData = function () {
                (this.T = []), (this.xa = null), (this.Y = {}), (this.J = {});
                for (var t = 0; t < this.ka.length; t++)
                  clearTimeout(this.ka[t]);
                this.ka = [];
              }),
              "undefined" == typeof console &&
                (window.console = { log: function () {} });
            var Ki,
              Hi = window.Element.prototype;
            if (
              ("function" != typeof Hi.matches &&
                (Hi.matches =
                  Hi.msMatchesSelector ||
                  Hi.mozMatchesSelector ||
                  Hi.webkitMatchesSelector ||
                  function (t) {
                    t = (this.document || this.ownerDocument).querySelectorAll(
                      t
                    );
                    for (var e = 0; t[e] && t[e] !== this; ) ++e;
                    return !!t[e];
                  }),
              Element.prototype.closest ||
                (Element.prototype.closest = function (t) {
                  var e = this;
                  if (!document.documentElement.contains(e)) return null;
                  do {
                    if (e.matches(t)) return e;
                    e = e.parentElement || e.parentNode;
                  } while (null !== e && 1 === e.nodeType);
                  return null;
                }),
              "function" != typeof window.CustomEvent)
            ) {
              var Yi = function (t, e) {
                e = e || { bubbles: !1, cancelable: !1, detail: null };
                var n = document.createEvent("CustomEvent");
                return (
                  n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
                );
              };
              (Yi.prototype = window.Event.prototype),
                (window.CustomEvent = Yi);
            }
            module.exports
              ? (Ki = module.exports)
              : (window.appboy || (window.appboy = {}), (Ki = window.appboy));
            var Ji,
              Xi = Ki,
              $i = new (function (t) {
                function e(t) {
                  var e,
                    n = {};
                  for (e in t) {
                    var i = t[e];
                    null == i ? delete t[e] : (n[e] = j(i) ? q(i) : i);
                  }
                  return n;
                }
                function n(t, e, n, i, r) {
                  if ((null == t && (t = {}), "object" != typeof t || L(t)))
                    return (
                      F.error(
                        e +
                          " requires that " +
                          n +
                          " be an object. Ignoring " +
                          r +
                          "."
                      ),
                      !1
                    );
                  for (var o in t) {
                    if (!Q(o, i, "the " + r + " property name")) return !1;
                    if ((n = null != (e = t[o]))) {
                      n = typeof e;
                      var s = j(e);
                      (n =
                        null != e &&
                        ("number" === n ||
                          "boolean" === n ||
                          s ||
                          "string" === n)) ||
                        F.error(
                          "Cannot " +
                            i +
                            " because the " +
                            r +
                            ' property "' +
                            o +
                            '" "' +
                            e +
                            '" is invalid.'
                        ),
                        (n = !n);
                    }
                    if (n) return !1;
                  }
                  return !0;
                }
                function i() {
                  F.ub(),
                    E &&
                      (Ut(w),
                      w.K(),
                      p.clearData(!1),
                      (p = null),
                      v.clearData(!1),
                      (v = null),
                      f.K(),
                      (f = null),
                      b.K(),
                      (b = null),
                      d.K(),
                      (d = null),
                      c.ub(),
                      (y = c = null),
                      si(m),
                      (s = u = m = null),
                      (S = []),
                      (l = null)),
                    (k = E = !1);
                }
                function r() {
                  if (k) return !1;
                  if (!E)
                    throw Error(
                      "Appboy must be initialized before calling methods."
                    );
                  return !0;
                }
                var o = {
                  xf: function (t, e) {
                    return new ii(t, e);
                  },
                  Bf: function (t, e, n, i, r, o, s, a, u) {
                    null == r && (r = {});
                    var l = new Ti(u, s),
                      c = new Si(s, l, u, r.sessionTimeoutInSeconds);
                    return new Un(t, n, i, r.appVersion, e, c, a, l, u, s, o);
                  },
                  Nc: function () {
                    return new Pt();
                  },
                  yf: function (t, e) {
                    return new Fi(t, e);
                  },
                  wf: function (t, e, n, i) {
                    return new Ii(t, e, n, i);
                  },
                  Cf: function (t, e, n, i) {
                    return new ji(t, e, n, i);
                  },
                  Af: function (t, e, n, i, r, o, s) {
                    return (
                      null == r && (r = {}),
                      new ui(
                        t,
                        e,
                        n,
                        i + "/safari/" + e,
                        r.serviceWorkerLocation,
                        r.safariWebsitePushId,
                        o,
                        r.manageServiceWorkerExternally,
                        r.disablePushTokenMaintenance,
                        s
                      )
                    );
                  },
                  zf: function (t) {
                    return new oi(t);
                  },
                };
                null == t && (t = o);
                var s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  p,
                  d,
                  g,
                  v,
                  b,
                  y,
                  m,
                  _ = new Pt(),
                  w = new Pt(),
                  S = [],
                  E = !1,
                  k = !1;
                return {
                  Ig: function (t) {
                    return Ft(_, t);
                  },
                  Hg: function (t) {
                    return Ft(w, t);
                  },
                  Wc: function (e, n) {
                    if (E)
                      return (
                        F.info(
                          "Braze has already been initialized with an API key."
                        ),
                        !0
                      );
                    if (
                      (F.Vc(null != n && n.enableLogging),
                      null == e || "" === e || "string" != typeof e)
                    )
                      return (
                        F.error(
                          "Braze requires a valid API key to be initialized."
                        ),
                        !1
                      );
                    if (
                      ((s = e), (u = n || {}), vt.Kf && !u.allowCrawlerActivity)
                    )
                      return (
                        F.info(
                          "Ignoring activity from crawler bot " +
                            navigator.userAgent
                        ),
                        (k = !0),
                        !1
                      );
                    if (
                      ((a = n = xi(e, u.noCookies || !1)),
                      new Ot(null, !0).M("ab.optOut"))
                    )
                      return (
                        F.info("Ignoring all activity due to previous opt out"),
                        (k = !0),
                        !1
                      );
                    var i = ["mparticle", "wordpress", "tealium"];
                    if (null != u.sdkFlavor) {
                      var r = u.sdkFlavor;
                      -1 !== i.indexOf(r)
                        ? (l = r)
                        : F.error("Invalid sdk flavor passed: " + r);
                    }
                    var o = [];
                    if (
                      ((f = t.Nc()),
                      S.push(f),
                      (p = t.yf(f, n)),
                      o.push(p),
                      (b = t.Nc()),
                      S.push(b),
                      null == (i = u.baseUrl) ||
                        "" === i ||
                        "string" != typeof i)
                    )
                      return (
                        F.error(
                          "Braze requires a valid SDK Endpoint to be initialized. Please set the 'baseUrl' initialization option to the value of your SDK Endpoint."
                        ),
                        !1
                      );
                    if (
                      (0 !==
                        (i = i.replace(
                          /(\.[a-z]+)[^\.]*$/i,
                          "$1/api/v3"
                        )).indexOf("http") && (i = "https://" + i),
                      null != (r = u.devicePropertyWhitelist))
                    )
                      if (L(r)) {
                        for (var w = [], D = 0; D < r.length; D++)
                          U(
                            ei,
                            r[D],
                            "devicePropertyWhitelist contained an invalid value.",
                            "DeviceProperties"
                          ) && w.push(r[D]);
                        r = w;
                      } else
                        F.error(
                          "devicePropertyWhitelist must be an array. Defaulting to all properties."
                        ),
                          (r = null);
                    return (
                      (h = t.xf(n, r)),
                      (r = new bi(n)),
                      (c = t.Bf(
                        s,
                        i,
                        "3.0.1",
                        l,
                        u,
                        function (t) {
                          if (E) for (var e = 0; e < o.length; e++) o[e].wb(t);
                        },
                        n,
                        h,
                        r
                      )),
                      null ==
                        (w = u.minimumIntervalBetweenTriggerActionsInSeconds) &&
                        (w = 30),
                      (v = t.Cf(w, b, n, c)),
                      o.push(v),
                      (w =
                        !0 === u.allowUserSuppliedJavascript ||
                        !0 === u.enableHtmlInAppMessages),
                      (d = t.Nc()),
                      S.push(d),
                      (g = t.wf(d, c, n, r, w)),
                      o.push(g),
                      _i(r, function () {
                        g.Ya();
                      }),
                      Jn(c, function () {
                        g.Ya();
                      }),
                      c.Wc(),
                      (y = t.Af(c.hb(), s, h, i, u, r, n)),
                      (m = t.zf(c.hb())),
                      (n = "Initialized "),
                      u &&
                        u.baseUrl &&
                        (n += 'for the Braze backend at "' + u.baseUrl + '" '),
                      F.info(n + 'with API key "' + e + '".'),
                      (e = vt.language),
                      (n = !1),
                      u &&
                        (u.language && ((e = u.language), (n = !0)),
                        u.localization && ((e = u.localization), (n = !0))),
                      Be(e, n),
                      Ut(_, u),
                      (E = !0)
                    );
                  },
                  ub: function () {
                    F.info("Destroying appboy instance"), (a = null), i();
                  },
                  Hf: function (t) {
                    r() &&
                      (null == t &&
                        F.error(
                          "getDeviceId must be supplied with a callback. e.g., appboy.getDeviceId(function(deviceId) {console.log('the device id is ' + deviceId)})"
                        ),
                      "function" == typeof t && t(ri(h).id));
                  },
                  sd: function () {
                    F.sd();
                  },
                  pd: function (t) {
                    F.pd(t);
                  },
                  ic: function () {
                    if (r()) {
                      c.ic(y);
                      var t = P.Ja,
                        e = new D(t);
                      C(e, t.L.Fd, function (n, i) {
                        function r() {
                          v.la(gn.Ed, [s], a);
                        }
                        var o = i.lastClick,
                          s = i.trackingString;
                        F.info(
                          "Firing push click trigger from " +
                            s +
                            " push click at " +
                            o
                        );
                        var a = Qn(c, o, s);
                        Xn(c, r, r), O(e, t.L.Fd, n);
                      }),
                        I(e, t.L.ve, function (t) {
                          Ni(g, t);
                        });
                    }
                  },
                  Qa: function (t) {
                    r() &&
                      (null == t || 0 === t.length || t != t
                        ? F.error("changeUser requires a non-empty userId.")
                        : 997 < Ai(t)
                        ? F.error(
                            'Rejected user id "' +
                              t +
                              '" because it is longer than 997 bytes.'
                          )
                        : c.Qa(t.toString(), [p, g, v], y));
                  },
                  hb: function () {
                    if (r()) return c.hb();
                  },
                  Cg: function () {
                    if (r()) return u.contentSecurityNonce;
                  },
                  Bb: function (t) {
                    r() && c.Bb(t);
                  },
                  md: function () {
                    r() && c.md();
                  },
                  kg: function (t) {
                    if (r()) return Ft(f, t);
                  },
                  Sc: function () {
                    if (r()) return p.Sc();
                  },
                  Ya: function () {
                    if (r()) return g.Ya();
                  },
                  jg: function (t) {
                    if (r()) return Ft(d, t);
                  },
                  vb: function () {
                    if (r()) return g.vb(!1);
                  },
                  mg: function (t) {
                    if (r()) return Ft(b, t);
                  },
                  lg: function (t) {
                    if (r())
                      return "function" != typeof t
                        ? null
                        : Ft(b, function (e) {
                            return t(e[0]), e.slice(1);
                          });
                  },
                  cd: function (t) {
                    if (r())
                      return t instanceof te || t instanceof Pe
                        ? c.cd(t).h
                        : (F.error(
                            "inAppMessage must be an InAppMessage object"
                          ),
                          !1);
                  },
                  ad: function (t) {
                    if (r()) {
                      if (!(t instanceof te))
                        return (
                          F.error(
                            "inAppMessage must be an InAppMessage object"
                          ),
                          !1
                        );
                      var e = c.ad(t);
                      if (e.h)
                        for (var n = 0; n < e.j.length; n++)
                          v.la(gn.Mb, [t.triggerId], e.j[n]);
                      return e.h;
                    }
                  },
                  $c: function (t, e) {
                    if (r()) {
                      if (!(t instanceof Ne))
                        return (
                          F.error(
                            "button must be an InAppMessageButton object"
                          ),
                          !1
                        );
                      if (!(e instanceof te))
                        return (
                          F.error(
                            "inAppMessage must be an InAppMessage object"
                          ),
                          !1
                        );
                      var n = c.$c(t, e);
                      if (n.h)
                        for (var i = 0; i < n.j.length; i++)
                          v.la(gn.Mb, [e.triggerId, t.id], n.j[i]);
                      return n.h;
                    }
                  },
                  bd: function (t, e, n) {
                    if (r()) {
                      if (!(t instanceof Ue))
                        return (
                          F.error(
                            "inAppMessage argument to logInAppMessageHtmlClick must be an HtmlMessage object."
                          ),
                          !1
                        );
                      if ((n = c.bd(t, e, n)).h)
                        for (var i = 0; i < n.j.length; i++)
                          v.la(gn.Mb, [t.triggerId, e], n.j[i]);
                      return n.h;
                    }
                  },
                  U: function (t, e) {
                    if (r())
                      return t instanceof te || t instanceof Pe
                        ? !!U(
                            ae,
                            e,
                            e +
                              " is not a valid in-app message display failure",
                            "InAppMessage.DisplayFailures"
                          ) && c.U(t.triggerId, e).h
                        : (F.error(
                            "inAppMessage must be an InAppMessage object"
                          ),
                          !1);
                  },
                  Ua: function (t, e) {
                    if (r()) {
                      if (!L(t)) return F.error("cards must be an array"), !1;
                      for (var n = 0; n < t.length; n++)
                        if (!(t[n] instanceof jt))
                          return (
                            F.error("Each card in cards must be a Card object"),
                            !1
                          );
                      return c.Ua(t, e).h;
                    }
                  },
                  Ta: function (t, e) {
                    if (r())
                      return t instanceof jt
                        ? c.Ta(t, e).h
                        : (F.error("card must be a Card object"), !1);
                  },
                  Yc: function (t) {
                    if (r())
                      return t instanceof jt
                        ? c.Yc(t).h
                        : (F.error("card must be a Card object"), !1);
                  },
                  Mf: function () {
                    if (r()) return Zn(c, R.Ne).h;
                  },
                  Lf: function () {
                    if (r()) return Zn(c, R.Be).h;
                  },
                  O: function (t) {
                    if (r()) {
                      for (var e = 0; e < S.length; e++) S[e].O(t);
                      _.O(t), w.O(t);
                    }
                  },
                  K: function () {
                    if (r()) for (var t = 0; t < S.length; t++) S[t].K();
                  },
                  Zc: function (t, i) {
                    if (r()) {
                      if (null == t || 0 >= t.length)
                        return (
                          F.error(
                            'logCustomEvent requires a non-empty eventName, got "' +
                              t +
                              '". Ignoring event.'
                          ),
                          !1
                        );
                      if (
                        !Q(t, "log custom event", "the event name") ||
                        !n(
                          i,
                          "logCustomEvent",
                          "eventProperties",
                          'log custom event "' + t + '"',
                          "event"
                        )
                      )
                        return !1;
                      var o = c.Zc(t, e(i));
                      if (o.h) {
                        F.info('Logged custom event "' + t + '".');
                        for (var s = 0; s < o.j.length; s++)
                          v.la(gn.mc, [t, i], o.j[s]);
                      }
                      return o.h;
                    }
                  },
                  dd: function (t, i, o, s, a) {
                    if (r()) {
                      if (
                        (null == o && (o = "USD"),
                        null == s && (s = 1),
                        null == t || 0 >= t.length)
                      )
                        return (
                          F.error(
                            'logPurchase requires a non-empty productId, got "' +
                              t +
                              '", ignoring.'
                          ),
                          !1
                        );
                      if (!Q(t, "log purchase", "the purchase name")) return !1;
                      var u = parseFloat(i);
                      if (isNaN(u))
                        return (
                          F.error(
                            "logPurchase requires a numeric price, got " +
                              i +
                              ", ignoring."
                          ),
                          !1
                        );
                      if (((u = u.toFixed(2)), (i = parseInt(s)), isNaN(i)))
                        return (
                          F.error(
                            "logPurchase requires an integer quantity, got " +
                              s +
                              ", ignoring."
                          ),
                          !1
                        );
                      if (1 > i || 100 < i)
                        return (
                          F.error(
                            "logPurchase requires a quantity >1 and <100, got " +
                              i +
                              ", ignoring."
                          ),
                          !1
                        );
                      if (
                        ((o = o.toUpperCase()),
                        -1 ===
                          "AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYR BZD CAD CDF CHF CLF CLP CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EEK EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LTL LVL LYD MAD MDL MGA MKD MMK MNT MOP MRO MTL MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD STD SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMK ZMW ZWL"
                            .split(" ")
                            .indexOf(o))
                      )
                        return (
                          F.error(
                            "logPurchase requires a valid currencyCode, got " +
                              o +
                              ", ignoring."
                          ),
                          !1
                        );
                      if (
                        !n(
                          a,
                          "logPurchase",
                          "purchaseProperties",
                          'log purchase "' + t + '"',
                          "purchase"
                        )
                      )
                        return !1;
                      if ((s = c.dd(t, u, o, i, e(a))).h)
                        for (
                          F.info(
                            "Logged " +
                              i +
                              " purchase" +
                              (1 < i ? "s" : "") +
                              ' of "' +
                              t +
                              '" for ' +
                              o +
                              " " +
                              u +
                              "."
                          ),
                            o = 0;
                          o < s.j.length;
                          o++
                        )
                          v.la(gn.xc, [t, a], s.j[o]);
                      return s.h;
                    }
                  },
                  ma: function () {
                    if (r()) return y.ma();
                  },
                  Da: function () {
                    if (r()) return y.Da();
                  },
                  Xc: function (t, e, n) {
                    r() && y.Xc(t, e, n);
                  },
                  xb: function () {
                    if (r()) return y.xb();
                  },
                  Of: function (t, e, n) {
                    if (r())
                      return y.subscribe(
                        n,
                        function (e, n, i) {
                          c.Bb(), "function" == typeof t && t(e, n, i);
                        },
                        e
                      );
                  },
                  og: function (t, e) {
                    if (r()) return y.unsubscribe(t, e);
                  },
                  ng: function () {
                    r() && m.watchPosition();
                  },
                  ig: function () {
                    null != c && c.Bb();
                    var t = new Ot(null, !0);
                    t.store("ab.optOut", "This-cookie-will-expire-in-" + It(t)),
                      new D((t = P.Ja)).setItem(t.L.wc, t.Sb, !0),
                      i(),
                      (k = !0);
                  },
                  Sf: function () {
                    new Ot(null, !0).remove("ab.optOut");
                    var t = P.Ja;
                    O(new D(t), t.L.wc, t.Sb), i();
                  },
                  rg: function () {
                    if (null == a)
                      throw Error(
                        "Appboy must be initialized before calling methods."
                      );
                    a.clearData();
                    for (var t = B(P), e = 0; e < t.length; e++)
                      new D(P[t[e]]).clearData();
                    E && (p.clearData(!0), v.clearData(!0));
                  },
                };
              })(),
              Zi = {};
            for (Ji in nt) Zi[Ji] = nt[Ji];
            for (var Qi in ((Zi.initialize = $i.Wc),
            (Zi.destroy = $i.ub),
            (Zi.getDeviceId = $i.Hf),
            (Zi.toggleAppboyLogging = $i.sd),
            (Zi.setLogger = $i.pd),
            (Zi.openSession = $i.ic),
            (Zi.changeUser = $i.Qa),
            (Zi.getUser = $i.hb),
            (Zi.requestImmediateDataFlush = $i.Bb),
            (Zi.requestFeedRefresh = $i.md),
            (Zi.getCachedFeed = $i.Sc),
            (Zi.subscribeToFeedUpdates = $i.kg),
            (Zi.requestContentCardsRefresh = $i.Ya),
            (Zi.getCachedContentCards = $i.vb),
            (Zi.subscribeToContentCardsUpdates = $i.jg),
            (Zi.logCardImpressions = $i.Ua),
            (Zi.logCardClick = $i.Ta),
            (Zi.logCardDismissal = $i.Yc),
            (Zi.logFeedDisplayed = $i.Mf),
            (Zi.logContentCardsDisplayed = $i.Lf),
            (Zi.logInAppMessageImpression = $i.cd),
            (Zi.logInAppMessageClick = $i.ad),
            (Zi.logInAppMessageButtonClick = $i.$c),
            (Zi.logInAppMessageHtmlClick = $i.bd),
            (Zi.subscribeToNewInAppMessages = $i.mg),
            (Zi.subscribeToInAppMessage = $i.lg),
            (Zi.removeSubscription = $i.O),
            (Zi.removeAllSubscriptions = $i.K),
            (Zi.logCustomEvent = $i.Zc),
            (Zi.logPurchase = $i.dd),
            (Zi.isPushSupported = $i.ma),
            (Zi.isPushBlocked = $i.Da),
            (Zi.isPushGranted = $i.Xc),
            (Zi.isPushPermissionGranted = $i.xb),
            (Zi.registerAppboyPushMessages = $i.Of),
            (Zi.unregisterAppboyPushMessages = $i.og),
            (Zi.trackLocation = $i.ng),
            (Zi.stopWebTracking = $i.ig),
            (Zi.resumeWebTracking = $i.Sf),
            (Zi.wipeData = $i.rg),
            Zi))
              "object" == typeof n ? (n[Qi] = Zi[Qi]) : (Xi[Qi] = Zi[Qi]);
            return n;
          }),
          void 0 ===
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__) ||
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
        var a =
          window.appboyQueue ||
          ("undefined" != typeof appboyQueue ? appboyQueue : null);
        if (void 0 !== a && a && a.length && 0 < a.length) {
          var b = a === window.appboyQueue;
          window.appboyQueue = appboyQueue = null;
          for (var c = 0; c < a.length; c++)
            if (a[c].callee) {
              var d = a[c].callee.name;
              if (
                ((null != d && "" !== d) ||
                  (d = /^function ([\w]*)\(/g.exec(a[c].callee.toString())[1]),
                null != d && "" !== d)
              ) {
                for (
                  var e = d.split("_"),
                    f = b ? window.appboy : appboy,
                    g = this,
                    h = "appboy",
                    k = 0;
                  k < e.length;
                  k++
                ) {
                  if ("prototype" === e[k]) {
                    var l = eval(
                      {
                        "appboy.ContentCards": "appboy.getCachedContentCards",
                        "appboy.Feed": "appboy.getCachedFeed",
                        "appboy.User": "appboy.getUser",
                      }[h]
                    );
                    g = f = null != l ? l.apply() : new f.constructor();
                  } else f = f[e[k]];
                  h += "." + e[k];
                }
                null != f && "function" == typeof f && f.apply(g, a[c]);
              }
            }
        }
      }.call(window));
    },
    38641: (t, e, n) => {
      "use strict";
      n.d(e, { Xb: () => h, cu: () => f, Gd: () => d });
      var i = n(68907),
        r = n(97199),
        o = n(62844),
        s = n(21170),
        a = n(12343),
        u = n(61422),
        l = n(46769),
        c = n(95771),
        h = (function () {
          function t(t, e, n) {
            void 0 === e && (e = new l.s()),
              void 0 === n && (n = 4),
              (this._version = n),
              (this._stack = [{}]),
              (this.getStackTop().scope = e),
              this.bindClient(t);
          }
          return (
            (t.prototype.isOlderThan = function (t) {
              return this._version < t;
            }),
            (t.prototype.bindClient = function (t) {
              (this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations();
            }),
            (t.prototype.pushScope = function () {
              var t = l.s.clone(this.getScope());
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              );
            }),
            (t.prototype.popScope = function () {
              return !(this.getStack().length <= 1) && !!this.getStack().pop();
            }),
            (t.prototype.withScope = function (t) {
              var e = this.pushScope();
              try {
                t(e);
              } finally {
                this.popScope();
              }
            }),
            (t.prototype.getClient = function () {
              return this.getStackTop().client;
            }),
            (t.prototype.getScope = function () {
              return this.getStackTop().scope;
            }),
            (t.prototype.getStack = function () {
              return this._stack;
            }),
            (t.prototype.getStackTop = function () {
              return this._stack[this._stack.length - 1];
            }),
            (t.prototype.captureException = function (t, e) {
              var n = (this._lastEventId = (0, o.DM)()),
                r = e;
              if (!e) {
                var s = void 0;
                try {
                  throw new Error("Sentry syntheticException");
                } catch (t) {
                  s = t;
                }
                r = { originalException: t, syntheticException: s };
              }
              return (
                this._invokeClient(
                  "captureException",
                  t,
                  (0, i.pi)((0, i.pi)({}, r), { event_id: n })
                ),
                n
              );
            }),
            (t.prototype.captureMessage = function (t, e, n) {
              var r = (this._lastEventId = (0, o.DM)()),
                s = n;
              if (!n) {
                var a = void 0;
                try {
                  throw new Error(t);
                } catch (u) {
                  a = u;
                }
                s = { originalException: t, syntheticException: a };
              }
              return (
                this._invokeClient(
                  "captureMessage",
                  t,
                  e,
                  (0, i.pi)((0, i.pi)({}, s), { event_id: r })
                ),
                r
              );
            }),
            (t.prototype.captureEvent = function (t, e) {
              var n = (this._lastEventId = (0, o.DM)());
              return (
                this._invokeClient(
                  "captureEvent",
                  t,
                  (0, i.pi)((0, i.pi)({}, e), { event_id: n })
                ),
                n
              );
            }),
            (t.prototype.lastEventId = function () {
              return this._lastEventId;
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = this.getStackTop(),
                r = n.scope,
                a = n.client;
              if (r && a) {
                var u = (a.getOptions && a.getOptions()) || {},
                  l = u.beforeBreadcrumb,
                  c = void 0 === l ? null : l,
                  h = u.maxBreadcrumbs,
                  f = void 0 === h ? 100 : h;
                if (!(f <= 0)) {
                  var p = (0, s.yW)(),
                    d = (0, i.pi)({ timestamp: p }, t),
                    g = c
                      ? (0, o.Cf)(function () {
                          return c(d, e);
                        })
                      : d;
                  null !== g && r.addBreadcrumb(g, f);
                }
              }
            }),
            (t.prototype.setUser = function (t) {
              var e = this.getScope();
              e && e.setUser(t);
            }),
            (t.prototype.setTags = function (t) {
              var e = this.getScope();
              e && e.setTags(t);
            }),
            (t.prototype.setExtras = function (t) {
              var e = this.getScope();
              e && e.setExtras(t);
            }),
            (t.prototype.setTag = function (t, e) {
              var n = this.getScope();
              n && n.setTag(t, e);
            }),
            (t.prototype.setExtra = function (t, e) {
              var n = this.getScope();
              n && n.setExtra(t, e);
            }),
            (t.prototype.setContext = function (t, e) {
              var n = this.getScope();
              n && n.setContext(t, e);
            }),
            (t.prototype.configureScope = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                i = e.client;
              n && i && t(n);
            }),
            (t.prototype.run = function (t) {
              var e = p(this);
              try {
                t(this);
              } finally {
                p(e);
              }
            }),
            (t.prototype.getIntegration = function (t) {
              var e = this.getClient();
              if (!e) return null;
              try {
                return e.getIntegration(t);
              } catch (n) {
                return (
                  a.k.warn(
                    "Cannot retrieve integration " +
                      t.id +
                      " from the current Hub"
                  ),
                  null
                );
              }
            }),
            (t.prototype.startSpan = function (t) {
              return this._callExtensionMethod("startSpan", t);
            }),
            (t.prototype.startTransaction = function (t, e) {
              return this._callExtensionMethod("startTransaction", t, e);
            }),
            (t.prototype.traceHeaders = function () {
              return this._callExtensionMethod("traceHeaders");
            }),
            (t.prototype.captureSession = function (t) {
              if ((void 0 === t && (t = !1), t)) return this.endSession();
              this._sendSessionUpdate();
            }),
            (t.prototype.endSession = function () {
              var t, e, n, i, r;
              null ===
                (n =
                  null ===
                    (e =
                      null === (t = this.getStackTop()) || void 0 === t
                        ? void 0
                        : t.scope) || void 0 === e
                    ? void 0
                    : e.getSession()) ||
                void 0 === n ||
                n.close(),
                this._sendSessionUpdate(),
                null ===
                  (r =
                    null === (i = this.getStackTop()) || void 0 === i
                      ? void 0
                      : i.scope) ||
                  void 0 === r ||
                  r.setSession();
            }),
            (t.prototype.startSession = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                o = e.client,
                s = (o && o.getOptions()) || {},
                a = s.release,
                u = s.environment,
                l = new c.z(
                  (0, i.pi)(
                    (0, i.pi)(
                      { release: a, environment: u },
                      n && { user: n.getUser() }
                    ),
                    t
                  )
                );
              if (n) {
                var h = n.getSession && n.getSession();
                h && h.status === r.$.Ok && h.update({ status: r.$.Exited }),
                  this.endSession(),
                  n.setSession(l);
              }
              return l;
            }),
            (t.prototype._sendSessionUpdate = function () {
              var t = this.getStackTop(),
                e = t.scope,
                n = t.client;
              if (e) {
                var i = e.getSession && e.getSession();
                i && n && n.captureSession && n.captureSession(i);
              }
            }),
            (t.prototype._invokeClient = function (t) {
              for (var e, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
              var o = this.getStackTop(),
                s = o.scope,
                a = o.client;
              a && a[t] && (e = a)[t].apply(e, (0, i.fl)(n, [s]));
            }),
            (t.prototype._callExtensionMethod = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = f(),
                r = i.__SENTRY__;
              if (r && r.extensions && "function" == typeof r.extensions[t])
                return r.extensions[t].apply(this, e);
              a.k.warn(
                "Extension method " + t + " couldn't be found, doing nothing."
              );
            }),
            t
          );
        })();
      function f() {
        var t = (0, o.Rf)();
        return (
          (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
        );
      }
      function p(t) {
        var e = f(),
          n = v(e);
        return b(e, t), n;
      }
      function d() {
        var t = f();
        return (
          (g(t) && !v(t).isOlderThan(4)) || b(t, new h()),
          (0, u.KV)()
            ? (function (t) {
                var e, n, i;
                try {
                  var r =
                    null ===
                      (i =
                        null ===
                          (n =
                            null === (e = f().__SENTRY__) || void 0 === e
                              ? void 0
                              : e.extensions) || void 0 === n
                          ? void 0
                          : n.domain) || void 0 === i
                      ? void 0
                      : i.active;
                  if (!r) return v(t);
                  if (!g(r) || v(r).isOlderThan(4)) {
                    var o = v(t).getStackTop();
                    b(r, new h(o.client, l.s.clone(o.scope)));
                  }
                  return v(r);
                } catch (s) {
                  return v(t);
                }
              })(t)
            : v(t)
        );
      }
      function g(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
      }
      function v(t) {
        return (
          (t && t.__SENTRY__ && t.__SENTRY__.hub) ||
            ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = new h())),
          t.__SENTRY__.hub
        );
      }
      function b(t, e) {
        return (
          !!t &&
          ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = e), !0)
        );
      }
    },
    46769: (t, e, n) => {
      "use strict";
      n.d(e, { s: () => u });
      var i = n(68907),
        r = n(67597),
        o = n(21170),
        s = n(96893),
        a = n(62844),
        u = (function () {
          function t() {
            (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {});
          }
          return (
            (t.clone = function (e) {
              var n = new t();
              return (
                e &&
                  ((n._breadcrumbs = (0, i.fl)(e._breadcrumbs)),
                  (n._tags = (0, i.pi)({}, e._tags)),
                  (n._extra = (0, i.pi)({}, e._extra)),
                  (n._contexts = (0, i.pi)({}, e._contexts)),
                  (n._user = e._user),
                  (n._level = e._level),
                  (n._span = e._span),
                  (n._session = e._session),
                  (n._transactionName = e._transactionName),
                  (n._fingerprint = e._fingerprint),
                  (n._eventProcessors = (0, i.fl)(e._eventProcessors)),
                  (n._requestSession = e._requestSession)),
                n
              );
            }),
            (t.prototype.addScopeListener = function (t) {
              this._scopeListeners.push(t);
            }),
            (t.prototype.addEventProcessor = function (t) {
              return this._eventProcessors.push(t), this;
            }),
            (t.prototype.setUser = function (t) {
              return (
                (this._user = t || {}),
                this._session && this._session.update({ user: t }),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.getUser = function () {
              return this._user;
            }),
            (t.prototype.getRequestSession = function () {
              return this._requestSession;
            }),
            (t.prototype.setRequestSession = function (t) {
              return (this._requestSession = t), this;
            }),
            (t.prototype.setTags = function (t) {
              return (
                (this._tags = (0, i.pi)((0, i.pi)({}, this._tags), t)),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setTag = function (t, e) {
              var n;
              return (
                (this._tags = (0, i.pi)(
                  (0, i.pi)({}, this._tags),
                  (((n = {})[t] = e), n)
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setExtras = function (t) {
              return (
                (this._extra = (0, i.pi)((0, i.pi)({}, this._extra), t)),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setExtra = function (t, e) {
              var n;
              return (
                (this._extra = (0, i.pi)(
                  (0, i.pi)({}, this._extra),
                  (((n = {})[t] = e), n)
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setFingerprint = function (t) {
              return (
                (this._fingerprint = t), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.setLevel = function (t) {
              return (this._level = t), this._notifyScopeListeners(), this;
            }),
            (t.prototype.setTransactionName = function (t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.setTransaction = function (t) {
              return this.setTransactionName(t);
            }),
            (t.prototype.setContext = function (t, e) {
              var n;
              return (
                null === e
                  ? delete this._contexts[t]
                  : (this._contexts = (0, i.pi)(
                      (0, i.pi)({}, this._contexts),
                      (((n = {})[t] = e), n)
                    )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setSpan = function (t) {
              return (this._span = t), this._notifyScopeListeners(), this;
            }),
            (t.prototype.getSpan = function () {
              return this._span;
            }),
            (t.prototype.getTransaction = function () {
              var t,
                e,
                n,
                i,
                r = this.getSpan();
              return (null === (t = r) || void 0 === t ? void 0 : t.transaction)
                ? null === (e = r) || void 0 === e
                  ? void 0
                  : e.transaction
                : (
                    null ===
                      (i =
                        null === (n = r) || void 0 === n
                          ? void 0
                          : n.spanRecorder) || void 0 === i
                      ? void 0
                      : i.spans[0]
                  )
                ? r.spanRecorder.spans[0]
                : void 0;
            }),
            (t.prototype.setSession = function (t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.getSession = function () {
              return this._session;
            }),
            (t.prototype.update = function (e) {
              if (!e) return this;
              if ("function" == typeof e) {
                var n = e(this);
                return n instanceof t ? n : this;
              }
              return (
                e instanceof t
                  ? ((this._tags = (0, i.pi)(
                      (0, i.pi)({}, this._tags),
                      e._tags
                    )),
                    (this._extra = (0, i.pi)(
                      (0, i.pi)({}, this._extra),
                      e._extra
                    )),
                    (this._contexts = (0, i.pi)(
                      (0, i.pi)({}, this._contexts),
                      e._contexts
                    )),
                    e._user &&
                      Object.keys(e._user).length &&
                      (this._user = e._user),
                    e._level && (this._level = e._level),
                    e._fingerprint && (this._fingerprint = e._fingerprint),
                    e._requestSession &&
                      (this._requestSession = e._requestSession))
                  : (0, r.PO)(e) &&
                    ((e = e),
                    (this._tags = (0, i.pi)((0, i.pi)({}, this._tags), e.tags)),
                    (this._extra = (0, i.pi)(
                      (0, i.pi)({}, this._extra),
                      e.extra
                    )),
                    (this._contexts = (0, i.pi)(
                      (0, i.pi)({}, this._contexts),
                      e.contexts
                    )),
                    e.user && (this._user = e.user),
                    e.level && (this._level = e.level),
                    e.fingerprint && (this._fingerprint = e.fingerprint),
                    e.requestSession &&
                      (this._requestSession = e.requestSession)),
                this
              );
            }),
            (t.prototype.clear = function () {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = "number" == typeof e ? Math.min(e, 100) : 100;
              if (n <= 0) return this;
              var r = (0, i.pi)({ timestamp: (0, o.yW)() }, t);
              return (
                (this._breadcrumbs = (0, i.fl)(this._breadcrumbs, [r]).slice(
                  -n
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.clearBreadcrumbs = function () {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.applyToEvent = function (t, e) {
              var n;
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = (0, i.pi)((0, i.pi)({}, this._extra), t.extra)),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = (0, i.pi)((0, i.pi)({}, this._tags), t.tags)),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = (0, i.pi)((0, i.pi)({}, this._user), t.user)),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = (0, i.pi)(
                    (0, i.pi)({}, this._contexts),
                    t.contexts
                  )),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = (0, i.pi)(
                  { trace: this._span.getTraceContext() },
                  t.contexts
                );
                var r =
                  null === (n = this._span.transaction) || void 0 === n
                    ? void 0
                    : n.name;
                r && (t.tags = (0, i.pi)({ transaction: r }, t.tags));
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = (0, i.fl)(
                  t.breadcrumbs || [],
                  this._breadcrumbs
                )),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                this._notifyEventProcessors(
                  (0, i.fl)(l(), this._eventProcessors),
                  t,
                  e
                )
              );
            }),
            (t.prototype._notifyEventProcessors = function (t, e, n, o) {
              var a = this;
              return (
                void 0 === o && (o = 0),
                new s.c(function (s, u) {
                  var l = t[o];
                  if (null === e || "function" != typeof l) s(e);
                  else {
                    var c = l((0, i.pi)({}, e), n);
                    (0, r.J8)(c)
                      ? c
                          .then(function (e) {
                            return a
                              ._notifyEventProcessors(t, e, n, o + 1)
                              .then(s);
                          })
                          .then(null, u)
                      : a
                          ._notifyEventProcessors(t, c, n, o + 1)
                          .then(s)
                          .then(null, u);
                  }
                })
              );
            }),
            (t.prototype._notifyScopeListeners = function () {
              var t = this;
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach(function (e) {
                  e(t);
                }),
                (this._notifyingListeners = !1));
            }),
            (t.prototype._applyFingerprint = function (t) {
              (t.fingerprint = t.fingerprint
                ? Array.isArray(t.fingerprint)
                  ? t.fingerprint
                  : [t.fingerprint]
                : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }),
            t
          );
        })();
      function l() {
        var t = (0, a.Rf)();
        return (
          (t.__SENTRY__ = t.__SENTRY__ || {}),
          (t.__SENTRY__.globalEventProcessors =
            t.__SENTRY__.globalEventProcessors || []),
          t.__SENTRY__.globalEventProcessors
        );
      }
    },
    95771: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => a });
      var i = n(97199),
        r = n(62844),
        o = n(21170),
        s = n(20535),
        a = (function () {
          function t(t) {
            (this.errors = 0),
              (this.sid = (0, r.DM)()),
              (this.duration = 0),
              (this.status = i.$.Ok),
              (this.init = !0),
              (this.ignoreDuration = !1);
            var e = (0, o.ph)();
            (this.timestamp = e), (this.started = e), t && this.update(t);
          }
          return (
            (t.prototype.update = function (t) {
              if (
                (void 0 === t && (t = {}),
                t.user &&
                  (t.user.ip_address && (this.ipAddress = t.user.ip_address),
                  t.did ||
                    (this.did = t.user.id || t.user.email || t.user.username)),
                (this.timestamp = t.timestamp || (0, o.ph)()),
                t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
                t.sid && (this.sid = 32 === t.sid.length ? t.sid : (0, r.DM)()),
                void 0 !== t.init && (this.init = t.init),
                t.did && (this.did = "" + t.did),
                "number" == typeof t.started && (this.started = t.started),
                this.ignoreDuration)
              )
                this.duration = void 0;
              else if ("number" == typeof t.duration)
                this.duration = t.duration;
              else {
                var e = this.timestamp - this.started;
                this.duration = e >= 0 ? e : 0;
              }
              t.release && (this.release = t.release),
                t.environment && (this.environment = t.environment),
                t.ipAddress && (this.ipAddress = t.ipAddress),
                t.userAgent && (this.userAgent = t.userAgent),
                "number" == typeof t.errors && (this.errors = t.errors),
                t.status && (this.status = t.status);
            }),
            (t.prototype.close = function (t) {
              t
                ? this.update({ status: t })
                : this.status === i.$.Ok
                ? this.update({ status: i.$.Exited })
                : this.update();
            }),
            (t.prototype.toJSON = function () {
              return (0, s.Jr)({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(1e3 * this.started).toISOString(),
                timestamp: new Date(1e3 * this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did:
                  "number" == typeof this.did || "string" == typeof this.did
                    ? "" + this.did
                    : void 0,
                duration: this.duration,
                attrs: (0, s.Jr)({
                  release: this.release,
                  environment: this.environment,
                  ip_address: this.ipAddress,
                  user_agent: this.userAgent,
                }),
              });
            }),
            t
          );
        })();
    },
    68907: (t, e, n) => {
      "use strict";
      n.d(e, { pi: () => i, fl: () => o });
      var i = function () {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }),
          i.apply(this, arguments)
        );
      };
      function r(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var i,
          r,
          o = n.call(t),
          s = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
            s.push(i.value);
        } catch (a) {
          r = { error: a };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        return s;
      }
      function o() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(r(arguments[e]));
        return t;
      }
    },
    97199: (t, e, n) => {
      "use strict";
      var i, r;
      n.d(e, { $: () => i }),
        (function (t) {
          (t.Ok = "ok"),
            (t.Exited = "exited"),
            (t.Crashed = "crashed"),
            (t.Abnormal = "abnormal");
        })(i || (i = {})),
        (function (t) {
          (t.Ok = "ok"), (t.Errored = "errored"), (t.Crashed = "crashed");
        })(r || (r = {}));
    },
    87373: (t, e, n) => {
      "use strict";
      var i;
      n.d(e, { K: () => i }),
        (function (t) {
          (t.Explicit = "explicitly_set"),
            (t.Sampler = "client_sampler"),
            (t.Rate = "client_rate"),
            (t.Inheritance = "inheritance");
        })(i || (i = {}));
    },
    9732: (t, e, n) => {
      "use strict";
      n.d(e, { o: () => g });
      var i,
        r = n(50832),
        o = n(67597),
        s = n(12343),
        a = n(62844),
        u = n(20535),
        l = n(30360),
        c = n(8823),
        h = (0, a.Rf)(),
        f = {},
        p = {};
      function d(t) {
        if (!p[t])
          switch (((p[t] = !0), t)) {
            case "console":
              !(function () {
                if (!("console" in h)) return;
                ["debug", "info", "warn", "error", "log", "assert"].forEach(
                  function (t) {
                    t in h.console &&
                      (0, u.hl)(h.console, t, function (e) {
                        return function () {
                          for (var n = [], i = 0; i < arguments.length; i++)
                            n[i] = arguments[i];
                          v("console", { args: n, level: t }),
                            e && Function.prototype.apply.call(e, h.console, n);
                        };
                      });
                  }
                );
              })();
              break;
            case "dom":
              !(function () {
                if (!("document" in h)) return;
                var t = v.bind(null, "dom"),
                  e = w(t, !0);
                h.document.addEventListener("click", e, !1),
                  h.document.addEventListener("keypress", e, !1),
                  ["EventTarget", "Node"].forEach(function (e) {
                    var n = h[e] && h[e].prototype;
                    n &&
                      n.hasOwnProperty &&
                      n.hasOwnProperty("addEventListener") &&
                      ((0, u.hl)(n, "addEventListener", function (e) {
                        return function (n, i, r) {
                          if ("click" === n || "keypress" == n)
                            try {
                              var o = this,
                                s = (o.__sentry_instrumentation_handlers__ =
                                  o.__sentry_instrumentation_handlers__ || {}),
                                a = (s[n] = s[n] || { refCount: 0 });
                              if (!a.handler) {
                                var u = w(t);
                                (a.handler = u), e.call(this, n, u, r);
                              }
                              a.refCount += 1;
                            } catch (l) {}
                          return e.call(this, n, i, r);
                        };
                      }),
                      (0, u.hl)(n, "removeEventListener", function (t) {
                        return function (e, n, i) {
                          if ("click" === e || "keypress" == e)
                            try {
                              var r = this,
                                o = r.__sentry_instrumentation_handlers__ || {},
                                s = o[e];
                              s &&
                                ((s.refCount -= 1),
                                s.refCount <= 0 &&
                                  (t.call(this, e, s.handler, i),
                                  (s.handler = void 0),
                                  delete o[e]),
                                0 === Object.keys(o).length &&
                                  delete r.__sentry_instrumentation_handlers__);
                            } catch (a) {}
                          return t.call(this, e, n, i);
                        };
                      }));
                  });
              })();
              break;
            case "xhr":
              !(function () {
                if (!("XMLHttpRequest" in h)) return;
                var t = [],
                  e = [],
                  n = XMLHttpRequest.prototype;
                (0, u.hl)(n, "open", function (n) {
                  return function () {
                    for (var i = [], r = 0; r < arguments.length; r++)
                      i[r] = arguments[r];
                    var s = this,
                      a = i[1];
                    (s.__sentry_xhr__ = {
                      method: (0, o.HD)(i[0]) ? i[0].toUpperCase() : i[0],
                      url: i[1],
                    }),
                      (0, o.HD)(a) &&
                        "POST" === s.__sentry_xhr__.method &&
                        a.match(/sentry_key/) &&
                        (s.__sentry_own_request__ = !0);
                    var l = function () {
                      if (4 === s.readyState) {
                        try {
                          s.__sentry_xhr__ &&
                            (s.__sentry_xhr__.status_code = s.status);
                        } catch (o) {}
                        try {
                          var n = t.indexOf(s);
                          if (-1 !== n) {
                            t.splice(n);
                            var r = e.splice(n)[0];
                            s.__sentry_xhr__ &&
                              void 0 !== r[0] &&
                              (s.__sentry_xhr__.body = r[0]);
                          }
                        } catch (o) {}
                        v("xhr", {
                          args: i,
                          endTimestamp: Date.now(),
                          startTimestamp: Date.now(),
                          xhr: s,
                        });
                      }
                    };
                    return (
                      "onreadystatechange" in s &&
                      "function" == typeof s.onreadystatechange
                        ? (0, u.hl)(s, "onreadystatechange", function (t) {
                            return function () {
                              for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                              return l(), t.apply(s, e);
                            };
                          })
                        : s.addEventListener("readystatechange", l),
                      n.apply(s, i)
                    );
                  };
                }),
                  (0, u.hl)(n, "send", function (n) {
                    return function () {
                      for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                      return (
                        t.push(this),
                        e.push(i),
                        v("xhr", {
                          args: i,
                          startTimestamp: Date.now(),
                          xhr: this,
                        }),
                        n.apply(this, i)
                      );
                    };
                  });
              })();
              break;
            case "fetch":
              !(function () {
                if (!(0, c.t$)()) return;
                (0, u.hl)(h, "fetch", function (t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var i = {
                      args: e,
                      fetchData: { method: b(e), url: y(e) },
                      startTimestamp: Date.now(),
                    };
                    return (
                      v("fetch", (0, r.pi)({}, i)),
                      t.apply(h, e).then(
                        function (t) {
                          return (
                            v(
                              "fetch",
                              (0, r.pi)((0, r.pi)({}, i), {
                                endTimestamp: Date.now(),
                                response: t,
                              })
                            ),
                            t
                          );
                        },
                        function (t) {
                          throw (
                            (v(
                              "fetch",
                              (0, r.pi)((0, r.pi)({}, i), {
                                endTimestamp: Date.now(),
                                error: t,
                              })
                            ),
                            t)
                          );
                        }
                      )
                    );
                  };
                });
              })();
              break;
            case "history":
              !(function () {
                if (!(0, c.Bf)()) return;
                var t = h.onpopstate;
                function e(t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var r = e.length > 2 ? e[2] : void 0;
                    if (r) {
                      var o = i,
                        s = String(r);
                      (i = s), v("history", { from: o, to: s });
                    }
                    return t.apply(this, e);
                  };
                }
                (h.onpopstate = function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  var r = h.location.href,
                    o = i;
                  if (((i = r), v("history", { from: o, to: r }), t))
                    try {
                      return t.apply(this, e);
                    } catch (s) {}
                }),
                  (0, u.hl)(h.history, "pushState", e),
                  (0, u.hl)(h.history, "replaceState", e);
              })();
              break;
            case "error":
              (S = h.onerror),
                (h.onerror = function (t, e, n, i, r) {
                  return (
                    v("error", {
                      column: i,
                      error: r,
                      line: n,
                      msg: t,
                      url: e,
                    }),
                    !!S && S.apply(this, arguments)
                  );
                });
              break;
            case "unhandledrejection":
              (E = h.onunhandledrejection),
                (h.onunhandledrejection = function (t) {
                  return (
                    v("unhandledrejection", t), !E || E.apply(this, arguments)
                  );
                });
              break;
            default:
              s.k.warn("unknown instrumentation type:", t);
          }
      }
      function g(t) {
        t &&
          "string" == typeof t.type &&
          "function" == typeof t.callback &&
          ((f[t.type] = f[t.type] || []),
          f[t.type].push(t.callback),
          d(t.type));
      }
      function v(t, e) {
        var n, i;
        if (t && f[t])
          try {
            for (
              var o = (0, r.XA)(f[t] || []), a = o.next();
              !a.done;
              a = o.next()
            ) {
              var u = a.value;
              try {
                u(e);
              } catch (c) {
                s.k.error(
                  "Error while triggering instrumentation handler.\nType: " +
                    t +
                    "\nName: " +
                    (0, l.$)(u) +
                    "\nError: " +
                    c
                );
              }
            }
          } catch (h) {
            n = { error: h };
          } finally {
            try {
              a && !a.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
      }
      function b(t) {
        return (
          void 0 === t && (t = []),
          "Request" in h && (0, o.V9)(t[0], Request) && t[0].method
            ? String(t[0].method).toUpperCase()
            : t[1] && t[1].method
            ? String(t[1].method).toUpperCase()
            : "GET"
        );
      }
      function y(t) {
        return (
          void 0 === t && (t = []),
          "string" == typeof t[0]
            ? t[0]
            : "Request" in h && (0, o.V9)(t[0], Request)
            ? t[0].url
            : String(t[0])
        );
      }
      var m, _;
      function w(t, e) {
        return (
          void 0 === e && (e = !1),
          function (n) {
            if (
              n &&
              _ !== n &&
              !(function (t) {
                if ("keypress" !== t.type) return !1;
                try {
                  var e = t.target;
                  if (!e || !e.tagName) return !0;
                  if (
                    "INPUT" === e.tagName ||
                    "TEXTAREA" === e.tagName ||
                    e.isContentEditable
                  )
                    return !1;
                } catch (n) {}
                return !0;
              })(n)
            ) {
              var i = "keypress" === n.type ? "input" : n.type;
              (void 0 === m ||
                (function (t, e) {
                  if (!t) return !0;
                  if (t.type !== e.type) return !0;
                  try {
                    if (t.target !== e.target) return !0;
                  } catch (n) {}
                  return !1;
                })(_, n)) &&
                (t({ event: n, name: i, global: e }), (_ = n)),
                clearTimeout(m),
                (m = h.setTimeout(function () {
                  m = void 0;
                }, 1e3));
            }
          }
        );
      }
      var S = null;
      var E = null;
    },
    8823: (t, e, n) => {
      "use strict";
      n.d(e, { t$: () => a, Bf: () => u });
      var i = n(12343),
        r = n(62844);
      function o() {
        if (!("fetch" in (0, r.Rf)())) return !1;
        try {
          return new Headers(), new Request(""), new Response(), !0;
        } catch (t) {
          return !1;
        }
      }
      function s(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      function a() {
        if (!o()) return !1;
        var t = (0, r.Rf)();
        if (s(t.fetch)) return !0;
        var e = !1,
          n = t.document;
        if (n && "function" == typeof n.createElement)
          try {
            var a = n.createElement("iframe");
            (a.hidden = !0),
              n.head.appendChild(a),
              a.contentWindow &&
                a.contentWindow.fetch &&
                (e = s(a.contentWindow.fetch)),
              n.head.removeChild(a);
          } catch (u) {
            i.k.warn(
              "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
              u
            );
          }
        return e;
      }
      function u() {
        var t = (0, r.Rf)(),
          e = t.chrome,
          n = e && e.app && e.app.runtime,
          i =
            "history" in t && !!t.history.pushState && !!t.history.replaceState;
        return !n && i;
      }
    },
    96893: (t, e, n) => {
      "use strict";
      n.d(e, { c: () => o });
      var i,
        r = n(67597);
      !(function (t) {
        (t.PENDING = "PENDING"),
          (t.RESOLVED = "RESOLVED"),
          (t.REJECTED = "REJECTED");
      })(i || (i = {}));
      var o = (function () {
        function t(t) {
          var e = this;
          (this._state = i.PENDING),
            (this._handlers = []),
            (this._resolve = function (t) {
              e._setResult(i.RESOLVED, t);
            }),
            (this._reject = function (t) {
              e._setResult(i.REJECTED, t);
            }),
            (this._setResult = function (t, n) {
              e._state === i.PENDING &&
                ((0, r.J8)(n)
                  ? n.then(e._resolve, e._reject)
                  : ((e._state = t), (e._value = n), e._executeHandlers()));
            }),
            (this._attachHandler = function (t) {
              (e._handlers = e._handlers.concat(t)), e._executeHandlers();
            }),
            (this._executeHandlers = function () {
              if (e._state !== i.PENDING) {
                var t = e._handlers.slice();
                (e._handlers = []),
                  t.forEach(function (t) {
                    t.done ||
                      (e._state === i.RESOLVED &&
                        t.onfulfilled &&
                        t.onfulfilled(e._value),
                      e._state === i.REJECTED &&
                        t.onrejected &&
                        t.onrejected(e._value),
                      (t.done = !0));
                  });
              }
            });
          try {
            t(this._resolve, this._reject);
          } catch (n) {
            this._reject(n);
          }
        }
        return (
          (t.resolve = function (e) {
            return new t(function (t) {
              t(e);
            });
          }),
          (t.reject = function (e) {
            return new t(function (t, n) {
              n(e);
            });
          }),
          (t.all = function (e) {
            return new t(function (n, i) {
              if (Array.isArray(e))
                if (0 !== e.length) {
                  var r = e.length,
                    o = [];
                  e.forEach(function (e, s) {
                    t.resolve(e)
                      .then(function (t) {
                        (o[s] = t), 0 === (r -= 1) && n(o);
                      })
                      .then(null, i);
                  });
                } else n([]);
              else i(new TypeError("Promise.all requires an array as input."));
            });
          }),
          (t.prototype.then = function (e, n) {
            var i = this;
            return new t(function (t, r) {
              i._attachHandler({
                done: !1,
                onfulfilled: function (n) {
                  if (e)
                    try {
                      return void t(e(n));
                    } catch (i) {
                      return void r(i);
                    }
                  else t(n);
                },
                onrejected: function (e) {
                  if (n)
                    try {
                      return void t(n(e));
                    } catch (i) {
                      return void r(i);
                    }
                  else r(e);
                },
              });
            });
          }),
          (t.prototype.catch = function (t) {
            return this.then(function (t) {
              return t;
            }, t);
          }),
          (t.prototype.finally = function (e) {
            var n = this;
            return new t(function (t, i) {
              var r, o;
              return n
                .then(
                  function (t) {
                    (o = !1), (r = t), e && e();
                  },
                  function (t) {
                    (o = !0), (r = t), e && e();
                  }
                )
                .then(function () {
                  o ? i(r) : t(r);
                });
            });
          }),
          (t.prototype.toString = function () {
            return "[object SyncPromise]";
          }),
          t
        );
      })();
    },
    21170: (t, e, n) => {
      "use strict";
      n.d(e, { yW: () => u, ph: () => l, _I: () => c, Z1: () => h });
      var i = n(62844),
        r = n(61422);
      t = n.hmd(t);
      var o = {
        nowSeconds: function () {
          return Date.now() / 1e3;
        },
      };
      var s = (0, r.KV)()
          ? (function () {
              try {
                return (0, r.l$)(t, "perf_hooks").performance;
              } catch (e) {
                return;
              }
            })()
          : (function () {
              var t = (0, i.Rf)().performance;
              if (t && t.now)
                return {
                  now: function () {
                    return t.now();
                  },
                  timeOrigin: Date.now() - t.now(),
                };
            })(),
        a =
          void 0 === s
            ? o
            : {
                nowSeconds: function () {
                  return (s.timeOrigin + s.now()) / 1e3;
                },
              },
        u = o.nowSeconds.bind(o),
        l = a.nowSeconds.bind(a),
        c = l,
        h = (function () {
          var t = (0, i.Rf)().performance;
          if (t && t.now) {
            var e = 36e5,
              n = t.now(),
              r = Date.now(),
              o = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
              s = o < e,
              a = t.timing && t.timing.navigationStart,
              u = "number" == typeof a ? Math.abs(a + n - r) : e;
            return s || u < e
              ? o <= u
                ? ("timeOrigin", t.timeOrigin)
                : ("navigationStart", a)
              : ("dateNow", r);
          }
          ("none");
        })();
    },
    38698: (t, e, n) => {
      "use strict";
      var i = n(27418),
        r = n(67294);
      function o(t) {
        for (
          var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
            n = 1;
          n < arguments.length;
          n++
        )
          e += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          t +
          "; visit " +
          e +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var s = 60106,
        a = 60107,
        u = 60108,
        l = 60114,
        c = 60109,
        h = 60110,
        f = 60112,
        p = 60113,
        d = 60120,
        g = 60115,
        v = 60116,
        b = 60121,
        y = 60117,
        m = 60119,
        _ = 60129,
        w = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var S = Symbol.for;
        (s = S("react.portal")),
          (a = S("react.fragment")),
          (u = S("react.strict_mode")),
          (l = S("react.profiler")),
          (c = S("react.provider")),
          (h = S("react.context")),
          (f = S("react.forward_ref")),
          (p = S("react.suspense")),
          (d = S("react.suspense_list")),
          (g = S("react.memo")),
          (v = S("react.lazy")),
          (b = S("react.block")),
          (y = S("react.fundamental")),
          (m = S("react.scope")),
          (_ = S("react.debug_trace_mode")),
          (w = S("react.legacy_hidden"));
      }
      function E(t) {
        if (null == t) return null;
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
        switch (t) {
          case a:
            return "Fragment";
          case s:
            return "Portal";
          case l:
            return "Profiler";
          case u:
            return "StrictMode";
          case p:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if ("object" == typeof t)
          switch (t.$$typeof) {
            case h:
              return (t.displayName || "Context") + ".Consumer";
            case c:
              return (t._context.displayName || "Context") + ".Provider";
            case f:
              var e = t.render;
              return (
                (e = e.displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case g:
              return E(t.type);
            case b:
              return E(t._render);
            case v:
              (e = t._payload), (t = t._init);
              try {
                return E(t(e));
              } catch (n) {}
          }
        return null;
      }
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        D = {};
      function x(t, e) {
        for (var n = 0 | t._threadCount; n <= e; n++)
          (t[n] = t._currentValue2), (t._threadCount = n + 1);
      }
      for (var A = new Uint16Array(16), T = 0; 15 > T; T++) A[T] = T + 1;
      A[15] = 0;
      var C =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        O = Object.prototype.hasOwnProperty,
        I = {},
        N = {};
      function M(t) {
        return (
          !!O.call(N, t) ||
          (!O.call(I, t) && (C.test(t) ? (N[t] = !0) : ((I[t] = !0), !1)))
        );
      }
      function R(t, e, n, i, r, o, s) {
        (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
          (this.attributeName = i),
          (this.attributeNamespace = r),
          (this.mustUseProperty = n),
          (this.propertyName = t),
          (this.type = e),
          (this.sanitizeURL = o),
          (this.removeEmptyString = s);
      }
      var P = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (t) {
          P[t] = new R(t, 0, !1, t, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (t) {
          var e = t[0];
          P[e] = new R(e, 1, !1, t[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (t) {
            P[t] = new R(t, 2, !1, t.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (t) {
          P[t] = new R(t, 2, !1, t, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (t) {
            P[t] = new R(t, 3, !1, t.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (t) {
          P[t] = new R(t, 3, !0, t, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (t) {
          P[t] = new R(t, 4, !1, t, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (t) {
          P[t] = new R(t, 6, !1, t, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (t) {
          P[t] = new R(t, 5, !1, t.toLowerCase(), null, !1, !1);
        });
      var F = /[\-:]([a-z])/g;
      function U(t) {
        return t[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (t) {
          var e = t.replace(F, U);
          P[e] = new R(e, 1, !1, t, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (t) {
            var e = t.replace(F, U);
            P[e] = new R(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
          var e = t.replace(F, U);
          P[e] = new R(
            e,
            1,
            !1,
            t,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (t) {
          P[t] = new R(t, 1, !1, t.toLowerCase(), null, !1, !1);
        }),
        (P.xlinkHref = new R(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (t) {
          P[t] = new R(t, 1, !1, t.toLowerCase(), null, !0, !0);
        });
      var L = /["'&<>]/;
      function j(t) {
        if ("boolean" == typeof t || "number" == typeof t) return "" + t;
        t = "" + t;
        var e = L.exec(t);
        if (e) {
          var n,
            i = "",
            r = 0;
          for (n = e.index; n < t.length; n++) {
            switch (t.charCodeAt(n)) {
              case 34:
                e = "&quot;";
                break;
              case 38:
                e = "&amp;";
                break;
              case 39:
                e = "&#x27;";
                break;
              case 60:
                e = "&lt;";
                break;
              case 62:
                e = "&gt;";
                break;
              default:
                continue;
            }
            r !== n && (i += t.substring(r, n)), (r = n + 1), (i += e);
          }
          t = r !== n ? i + t.substring(r, n) : i;
        }
        return t;
      }
      function B(t, e) {
        var n,
          i = P.hasOwnProperty(t) ? P[t] : null;
        return (
          (n = "style" !== t) &&
            (n =
              null !== i
                ? 0 === i.type
                : 2 < t.length &&
                  ("o" === t[0] || "O" === t[0]) &&
                  ("n" === t[1] || "N" === t[1])),
          n ||
          (function (t, e, n, i) {
            if (
              null == e ||
              (function (t, e, n, i) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof e) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !i &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (t = t.toLowerCase().slice(0, 5)) &&
                          "aria-" !== t)
                    );
                  default:
                    return !1;
                }
              })(t, e, n, i)
            )
              return !0;
            if (i) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !e;
                case 4:
                  return !1 === e;
                case 5:
                  return isNaN(e);
                case 6:
                  return isNaN(e) || 1 > e;
              }
            return !1;
          })(t, e, i, !1)
            ? ""
            : null !== i
            ? ((t = i.attributeName),
              3 === (n = i.type) || (4 === n && !0 === e)
                ? t + '=""'
                : (i.sanitizeURL && (e = "" + e), t + '="' + j(e) + '"'))
            : M(t)
            ? t + '="' + j(e) + '"'
            : ""
        );
      }
      var G =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        z = null,
        W = null,
        V = null,
        q = !1,
        K = !1,
        H = null,
        Y = 0;
      function J() {
        if (null === z) throw Error(o(321));
        return z;
      }
      function X() {
        if (0 < Y) throw Error(o(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function $() {
        return (
          null === V
            ? null === W
              ? ((q = !1), (W = V = X()))
              : ((q = !0), (V = W))
            : null === V.next
            ? ((q = !1), (V = V.next = X()))
            : ((q = !0), (V = V.next)),
          V
        );
      }
      function Z(t, e, n, i) {
        for (; K; ) (K = !1), (Y += 1), (V = null), (n = t(e, i));
        return Q(), n;
      }
      function Q() {
        (z = null), (K = !1), (W = null), (Y = 0), (V = H = null);
      }
      function tt(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
      function et(t, e, n) {
        if (((z = J()), (V = $()), q)) {
          var i = V.queue;
          if (((e = i.dispatch), null !== H && void 0 !== (n = H.get(i)))) {
            H.delete(i), (i = V.memoizedState);
            do {
              (i = t(i, n.action)), (n = n.next);
            } while (null !== n);
            return (V.memoizedState = i), [i, e];
          }
          return [V.memoizedState, e];
        }
        return (
          (t =
            t === tt
              ? "function" == typeof e
                ? e()
                : e
              : void 0 !== n
              ? n(e)
              : e),
          (V.memoizedState = t),
          (t = (t = V.queue = { last: null, dispatch: null }).dispatch =
            it.bind(null, z, t)),
          [V.memoizedState, t]
        );
      }
      function nt(t, e) {
        if (((z = J()), (e = void 0 === e ? null : e), null !== (V = $()))) {
          var n = V.memoizedState;
          if (null !== n && null !== e) {
            var i = n[1];
            t: if (null === i) i = !1;
            else {
              for (var r = 0; r < i.length && r < e.length; r++)
                if (!G(e[r], i[r])) {
                  i = !1;
                  break t;
                }
              i = !0;
            }
            if (i) return n[0];
          }
        }
        return (t = t()), (V.memoizedState = [t, e]), t;
      }
      function it(t, e, n) {
        if (!(25 > Y)) throw Error(o(301));
        if (t === z)
          if (
            ((K = !0),
            (t = { action: n, next: null }),
            null === H && (H = new Map()),
            void 0 === (n = H.get(e)))
          )
            H.set(e, t);
          else {
            for (e = n; null !== e.next; ) e = e.next;
            e.next = t;
          }
      }
      function rt() {}
      var ot = null,
        st = {
          readContext: function (t) {
            var e = ot.threadID;
            return x(t, e), t[e];
          },
          useContext: function (t) {
            J();
            var e = ot.threadID;
            return x(t, e), t[e];
          },
          useMemo: nt,
          useReducer: et,
          useRef: function (t) {
            z = J();
            var e = (V = $()).memoizedState;
            return null === e
              ? ((t = { current: t }), (V.memoizedState = t))
              : e;
          },
          useState: function (t) {
            return et(tt, t);
          },
          useLayoutEffect: function () {},
          useCallback: function (t, e) {
            return nt(function () {
              return t;
            }, e);
          },
          useImperativeHandle: rt,
          useEffect: rt,
          useDebugValue: rt,
          useDeferredValue: function (t) {
            return J(), t;
          },
          useTransition: function () {
            return (
              J(),
              [
                function (t) {
                  t();
                },
                !1,
              ]
            );
          },
          useOpaqueIdentifier: function () {
            return (
              (ot.identifierPrefix || "") + "R:" + (ot.uniqueID++).toString(36)
            );
          },
          useMutableSource: function (t, e) {
            return J(), e(t._source);
          },
        },
        at = "http://www.w3.org/1999/xhtml";
      function ut(t) {
        switch (t) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      var lt = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
        ct = i({ menuitem: !0 }, lt),
        ht = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        ft = ["Webkit", "ms", "Moz", "O"];
      Object.keys(ht).forEach(function (t) {
        ft.forEach(function (e) {
          (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (ht[e] = ht[t]);
        });
      });
      var pt = /([A-Z])/g,
        dt = /^ms-/,
        gt = r.Children.toArray,
        vt = k.ReactCurrentDispatcher,
        bt = { listing: !0, pre: !0, textarea: !0 },
        yt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        mt = {},
        _t = {};
      var wt = Object.prototype.hasOwnProperty,
        St = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null,
        };
      function Et(t, e) {
        if (void 0 === t) throw Error(o(152, E(e) || "Component"));
      }
      function kt(t, e, n) {
        function s(r, s) {
          var a = s.prototype && s.prototype.isReactComponent,
            u = (function (t, e, n, i) {
              if (i && "object" == typeof (i = t.contextType) && null !== i)
                return x(i, n), i[n];
              if ((t = t.contextTypes)) {
                for (var r in ((n = {}), t)) n[r] = e[r];
                e = n;
              } else e = D;
              return e;
            })(s, e, n, a),
            l = [],
            c = !1,
            h = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {
                if (null === l) return null;
              },
              enqueueReplaceState: function (t, e) {
                (c = !0), (l = [e]);
              },
              enqueueSetState: function (t, e) {
                if (null === l) return null;
                l.push(e);
              },
            };
          if (a) {
            if (
              ((a = new s(r.props, u, h)),
              "function" == typeof s.getDerivedStateFromProps)
            ) {
              var f = s.getDerivedStateFromProps.call(null, r.props, a.state);
              null != f && (a.state = i({}, a.state, f));
            }
          } else if (
            ((z = {}),
            (a = s(r.props, u, h)),
            null == (a = Z(s, r.props, a, u)) || null == a.render)
          )
            return void Et((t = a), s);
          if (
            ((a.props = r.props),
            (a.context = u),
            (a.updater = h),
            void 0 === (h = a.state) && (a.state = h = null),
            "function" == typeof a.UNSAFE_componentWillMount ||
              "function" == typeof a.componentWillMount)
          )
            if (
              ("function" == typeof a.componentWillMount &&
                "function" != typeof s.getDerivedStateFromProps &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                "function" != typeof s.getDerivedStateFromProps &&
                a.UNSAFE_componentWillMount(),
              l.length)
            ) {
              h = l;
              var p = c;
              if (((l = null), (c = !1), p && 1 === h.length)) a.state = h[0];
              else {
                f = p ? h[0] : a.state;
                var d = !0;
                for (p = p ? 1 : 0; p < h.length; p++) {
                  var g = h[p];
                  null !=
                    (g =
                      "function" == typeof g ? g.call(a, f, r.props, u) : g) &&
                    (d ? ((d = !1), (f = i({}, f, g))) : i(f, g));
                }
                a.state = f;
              }
            } else l = null;
          if (
            (Et((t = a.render()), s),
            "function" == typeof a.getChildContext &&
              "object" == typeof (r = s.childContextTypes))
          ) {
            var v = a.getChildContext();
            for (var b in v)
              if (!(b in r)) throw Error(o(108, E(s) || "Unknown", b));
          }
          v && (e = i({}, e, v));
        }
        for (; r.isValidElement(t); ) {
          var a = t,
            u = a.type;
          if ("function" != typeof u) break;
          s(a, u);
        }
        return { child: t, context: e };
      }
      var Dt = (function () {
        function t(t, e, n) {
          r.isValidElement(t)
            ? t.type !== a
              ? (t = [t])
              : ((t = t.props.children),
                (t = r.isValidElement(t) ? [t] : gt(t)))
            : (t = gt(t)),
            (t = {
              type: null,
              domNamespace: at,
              children: t,
              childIndex: 0,
              context: D,
              footer: "",
            });
          var i = A[0];
          if (0 === i) {
            var s = A,
              u = 2 * (i = s.length);
            if (!(65536 >= u)) throw Error(o(304));
            var l = new Uint16Array(u);
            for (l.set(s), (A = l)[0] = i + 1, s = i; s < u - 1; s++)
              A[s] = s + 1;
            A[u - 1] = 0;
          } else A[0] = A[i];
          (this.threadID = i),
            (this.stack = [t]),
            (this.exhausted = !1),
            (this.currentSelectValue = null),
            (this.previousWasTextNode = !1),
            (this.makeStaticMarkup = e),
            (this.suspenseDepth = 0),
            (this.contextIndex = -1),
            (this.contextStack = []),
            (this.contextValueStack = []),
            (this.uniqueID = 0),
            (this.identifierPrefix = (n && n.identifierPrefix) || "");
        }
        var e = t.prototype;
        return (
          (e.destroy = function () {
            if (!this.exhausted) {
              (this.exhausted = !0), this.clearProviders();
              var t = this.threadID;
              (A[t] = A[0]), (A[0] = t);
            }
          }),
          (e.pushProvider = function (t) {
            var e = ++this.contextIndex,
              n = t.type._context,
              i = this.threadID;
            x(n, i);
            var r = n[i];
            (this.contextStack[e] = n),
              (this.contextValueStack[e] = r),
              (n[i] = t.props.value);
          }),
          (e.popProvider = function () {
            var t = this.contextIndex,
              e = this.contextStack[t],
              n = this.contextValueStack[t];
            (this.contextStack[t] = null),
              (this.contextValueStack[t] = null),
              this.contextIndex--,
              (e[this.threadID] = n);
          }),
          (e.clearProviders = function () {
            for (var t = this.contextIndex; 0 <= t; t--)
              this.contextStack[t][this.threadID] = this.contextValueStack[t];
          }),
          (e.read = function (t) {
            if (this.exhausted) return null;
            var e = ot;
            ot = this;
            var n = vt.current;
            vt.current = st;
            try {
              for (var i = [""], r = !1; i[0].length < t; ) {
                if (0 === this.stack.length) {
                  this.exhausted = !0;
                  var s = this.threadID;
                  (A[s] = A[0]), (A[0] = s);
                  break;
                }
                var a = this.stack[this.stack.length - 1];
                if (r || a.childIndex >= a.children.length) {
                  var u = a.footer;
                  if (
                    ("" !== u && (this.previousWasTextNode = !1),
                    this.stack.pop(),
                    "select" === a.type)
                  )
                    this.currentSelectValue = null;
                  else if (
                    null != a.type &&
                    null != a.type.type &&
                    a.type.type.$$typeof === c
                  )
                    this.popProvider(a.type);
                  else if (a.type === p) {
                    this.suspenseDepth--;
                    var l = i.pop();
                    if (r) {
                      r = !1;
                      var h = a.fallbackFrame;
                      if (!h) throw Error(o(303));
                      this.stack.push(h),
                        (i[this.suspenseDepth] += "\x3c!--$!--\x3e");
                      continue;
                    }
                    i[this.suspenseDepth] += l;
                  }
                  i[this.suspenseDepth] += u;
                } else {
                  var f = a.children[a.childIndex++],
                    d = "";
                  try {
                    d += this.render(f, a.context, a.domNamespace);
                  } catch (g) {
                    if (null != g && "function" == typeof g.then)
                      throw Error(o(294));
                    throw g;
                  }
                  i.length <= this.suspenseDepth && i.push(""),
                    (i[this.suspenseDepth] += d);
                }
              }
              return i[0];
            } finally {
              (vt.current = n), (ot = e), Q();
            }
          }),
          (e.render = function (t, e, n) {
            if ("string" == typeof t || "number" == typeof t)
              return "" === (n = "" + t)
                ? ""
                : this.makeStaticMarkup
                ? j(n)
                : this.previousWasTextNode
                ? "\x3c!-- --\x3e" + j(n)
                : ((this.previousWasTextNode = !0), j(n));
            if (
              ((t = (e = kt(t, e, this.threadID)).child),
              (e = e.context),
              null === t || !1 === t)
            )
              return "";
            if (!r.isValidElement(t)) {
              if (null != t && null != t.$$typeof) {
                if ((n = t.$$typeof) === s) throw Error(o(257));
                throw Error(o(258, n.toString()));
              }
              return (
                (t = gt(t)),
                this.stack.push({
                  type: null,
                  domNamespace: n,
                  children: t,
                  childIndex: 0,
                  context: e,
                  footer: "",
                }),
                ""
              );
            }
            var b = t.type;
            if ("string" == typeof b) return this.renderDOM(t, e, n);
            switch (b) {
              case w:
              case _:
              case u:
              case l:
              case d:
              case a:
                return (
                  (t = gt(t.props.children)),
                  this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: t,
                    childIndex: 0,
                    context: e,
                    footer: "",
                  }),
                  ""
                );
              case p:
                throw Error(o(294));
              case m:
                throw Error(o(343));
            }
            if ("object" == typeof b && null !== b)
              switch (b.$$typeof) {
                case f:
                  z = {};
                  var S = b.render(t.props, t.ref);
                  return (
                    (S = Z(b.render, t.props, S, t.ref)),
                    (S = gt(S)),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: S,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
                case g:
                  return (
                    (t = [r.createElement(b.type, i({ ref: t.ref }, t.props))]),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: t,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
                case c:
                  return (
                    (n = {
                      type: t,
                      domNamespace: n,
                      children: (b = gt(t.props.children)),
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    this.pushProvider(t),
                    this.stack.push(n),
                    ""
                  );
                case h:
                  (b = t.type), (S = t.props);
                  var E = this.threadID;
                  return (
                    x(b, E),
                    (b = gt(S.children(b[E]))),
                    this.stack.push({
                      type: t,
                      domNamespace: n,
                      children: b,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
                case y:
                  throw Error(o(338));
                case v:
                  return (
                    (b = (S = (b = t.type)._init)(b._payload)),
                    (t = [r.createElement(b, i({ ref: t.ref }, t.props))]),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: t,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
              }
            throw Error(o(130, null == b ? b : typeof b, ""));
          }),
          (e.renderDOM = function (t, e, n) {
            var s = t.type.toLowerCase();
            if ((n === at && ut(s), !mt.hasOwnProperty(s))) {
              if (!yt.test(s)) throw Error(o(65, s));
              mt[s] = !0;
            }
            var a = t.props;
            if ("input" === s)
              a = i({ type: void 0 }, a, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != a.value ? a.value : a.defaultValue,
                checked: null != a.checked ? a.checked : a.defaultChecked,
              });
            else if ("textarea" === s) {
              var u = a.value;
              if (null == u) {
                u = a.defaultValue;
                var l = a.children;
                if (null != l) {
                  if (null != u) throw Error(o(92));
                  if (Array.isArray(l)) {
                    if (!(1 >= l.length)) throw Error(o(93));
                    l = l[0];
                  }
                  u = "" + l;
                }
                null == u && (u = "");
              }
              a = i({}, a, { value: void 0, children: "" + u });
            } else if ("select" === s)
              (this.currentSelectValue =
                null != a.value ? a.value : a.defaultValue),
                (a = i({}, a, { value: void 0 }));
            else if ("option" === s) {
              l = this.currentSelectValue;
              var c = (function (t) {
                if (null == t) return t;
                var e = "";
                return (
                  r.Children.forEach(t, function (t) {
                    null != t && (e += t);
                  }),
                  e
                );
              })(a.children);
              if (null != l) {
                var h = null != a.value ? a.value + "" : c;
                if (((u = !1), Array.isArray(l))) {
                  for (var f = 0; f < l.length; f++)
                    if ("" + l[f] === h) {
                      u = !0;
                      break;
                    }
                } else u = "" + l === h;
                a = i({ selected: void 0, children: void 0 }, a, {
                  selected: u,
                  children: c,
                });
              }
            }
            if ((u = a)) {
              if (
                ct[s] &&
                (null != u.children || null != u.dangerouslySetInnerHTML)
              )
                throw Error(o(137, s));
              if (null != u.dangerouslySetInnerHTML) {
                if (null != u.children) throw Error(o(60));
                if (
                  "object" != typeof u.dangerouslySetInnerHTML ||
                  !("__html" in u.dangerouslySetInnerHTML)
                )
                  throw Error(o(61));
              }
              if (null != u.style && "object" != typeof u.style)
                throw Error(o(62));
            }
            (u = a),
              (l = this.makeStaticMarkup),
              (c = 1 === this.stack.length),
              (h = "<" + t.type);
            t: if (-1 === s.indexOf("-")) f = "string" == typeof u.is;
            else
              switch (s) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                  f = !1;
                  break t;
                default:
                  f = !0;
              }
            for (w in u)
              if (wt.call(u, w)) {
                var p = u[w];
                if (null != p) {
                  if ("style" === w) {
                    var d = void 0,
                      g = "",
                      v = "";
                    for (d in p)
                      if (p.hasOwnProperty(d)) {
                        var b = 0 === d.indexOf("--"),
                          y = p[d];
                        if (null != y) {
                          if (b) var m = d;
                          else if (((m = d), _t.hasOwnProperty(m))) m = _t[m];
                          else {
                            var _ = m
                              .replace(pt, "-$1")
                              .toLowerCase()
                              .replace(dt, "-ms-");
                            m = _t[m] = _;
                          }
                          (g += v + m + ":"),
                            (v = d),
                            (g += b =
                              null == y || "boolean" == typeof y || "" === y
                                ? ""
                                : b ||
                                  "number" != typeof y ||
                                  0 === y ||
                                  (ht.hasOwnProperty(v) && ht[v])
                                ? ("" + y).trim()
                                : y + "px"),
                            (v = ";");
                        }
                      }
                    p = g || null;
                  }
                  (d = null),
                    f
                      ? St.hasOwnProperty(w) ||
                        (d =
                          M((d = w)) && null != p ? d + '="' + j(p) + '"' : "")
                      : (d = B(w, p)),
                    d && (h += " " + d);
                }
              }
            l || (c && (h += ' data-reactroot=""'));
            var w = h;
            (u = ""),
              lt.hasOwnProperty(s)
                ? (w += "/>")
                : ((w += ">"), (u = "</" + t.type + ">"));
            t: {
              if (null != (l = a.dangerouslySetInnerHTML)) {
                if (null != l.__html) {
                  l = l.__html;
                  break t;
                }
              } else if (
                "string" == typeof (l = a.children) ||
                "number" == typeof l
              ) {
                l = j(l);
                break t;
              }
              l = null;
            }
            return (
              null != l
                ? ((a = []),
                  bt.hasOwnProperty(s) && "\n" === l.charAt(0) && (w += "\n"),
                  (w += l))
                : (a = gt(a.children)),
              (t = t.type),
              (n =
                null == n || "http://www.w3.org/1999/xhtml" === n
                  ? ut(t)
                  : "http://www.w3.org/2000/svg" === n && "foreignObject" === t
                  ? "http://www.w3.org/1999/xhtml"
                  : n),
              this.stack.push({
                domNamespace: n,
                type: s,
                children: a,
                childIndex: 0,
                context: e,
                footer: u,
              }),
              (this.previousWasTextNode = !1),
              w
            );
          }),
          t
        );
      })();
      (e.renderToNodeStream = function () {
        throw Error(o(207));
      }),
        (e.renderToStaticMarkup = function (t, e) {
          t = new Dt(t, !0, e);
          try {
            return t.read(1 / 0);
          } finally {
            t.destroy();
          }
        }),
        (e.renderToStaticNodeStream = function () {
          throw Error(o(208));
        }),
        (e.renderToString = function (t, e) {
          t = new Dt(t, !1, e);
          try {
            return t.read(1 / 0);
          } finally {
            t.destroy();
          }
        }),
        (e.version = "17.0.2");
    },
  },
]);
//# sourceMappingURL=sourcemaps/6361248fa32e75f5.vendor.js.map
