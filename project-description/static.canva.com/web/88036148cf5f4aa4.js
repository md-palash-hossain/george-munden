(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [404],
  {
    /***/ 60329: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(2868);
      self._8b3e58fb1042841aa4d6377195d71189 =
        self._8b3e58fb1042841aa4d6377195d71189 || {};
      (function (__c) {
        "use strict";
        var I = __c.I,
          O5,
          E = __c.E,
          NH = __c.NH,
          M = __c.M,
          D = __c.D,
          F = __c.F,
          Va = __c.Va,
          U = __c.U,
          V = __c.V,
          z = __c.z,
          C = __c.C,
          R = __c.R,
          Wa = __c.Wa,
          RH = __c.RH,
          OH = __c.OH,
          SH = __c.SH,
          PH = __c.PH,
          x = __c.x,
          bb = __c.bb,
          W = __c.W,
          Xa = __c.Xa,
          fK = __c.fK,
          QH = __c.QH,
          dK = __c.dK,
          T = __c.T,
          jo = __c.jo;
        var G5,
          M5,
          N5,
          Q5,
          U5,
          W5,
          D5,
          X5,
          Y5,
          Z5,
          $5,
          a6,
          b6,
          H5,
          c6,
          d6,
          L5,
          e6,
          f6,
          g6,
          h6,
          i6,
          j6,
          k6,
          l6;
        __c.C5 = function (a) {
          return Array(Math.max(0, Math.floor(a)))
            .fill(0)
            .map((b, c) => 0 + c);
        };
        __c.E5 = function () {
          const [a, b] = (0, __c.sF)(() => (D5 ? __c.D_.next() : void 0));
          (0, __c.E_)(() => {
            null == a && b(__c.D_.next());
          }, []);
          (0, __c.pE)(() => {
            D5 = !0;
          }, []);
          return a;
        };
        __c.F5 = function ({ children: a, count: b = 1 }) {
          b = __c.C5(b).map(__c.E5);
          return I(__c.yu, null, a(...b));
        };
        G5 = function (a) {
          var b = Object.assign({}, a),
            c = a.variant;
          a = a.children;
          b = (delete b.variant, delete b.children, b);
          const d = __c.E5(),
            e = __c.Ku(Object.assign({}, b, { variant: c }));
          return I(
            "div",
            {
              className: (0, __c.pq)("sqQRZQ", {
                cy_gNg: "xsmall" === e,
                ukOaGA: "small" === e,
                R4mVEg: "medium" === e,
                rPqAFA: "large" === e,
              }),
            },
            I(
              __c.P_,
              Object.assign({}, b, { variant: c, shape: "circle" }),
              __c.Lu(
                Object.assign({}, b, {
                  Kc: b.Kc,
                  lG: b.lG || "top",
                  shape: "circle",
                  variant: c,
                  uf: d,
                })
              )
            ),
            I(
              "label",
              { className: "RPdvnA" },
              I(
                __c.pY,
                {
                  size: "small",
                  id: d,
                  tagName: "span",
                  Pe: "center",
                  color: "dark" === b.yb ? "monoWhiteA100" : "monoBlackA100",
                  lineClamp: 2,
                },
                a
              )
            )
          );
        };
        M5 = function ({ Uf: a, disabled: b }) {
          const c = H5(I5),
            d = J5(() => new K5(c));
          L5(() => {
            d.DF(a);
            if (b) d.Iy();
            else
              return (
                c.hA(d, a),
                d.Iy(),
                () => {
                  c.$E(d, a);
                }
              );
          }, [a, b, d, c]);
          return { nU: d };
        };
        N5 = function (a) {
          return "hasAttribute" in a
            ? a.hasAttribute("data-focus-lock-excepted")
            : !1;
        };
        Q5 = function (a) {
          const b = a.props.jf;
          a = a.props.No;
          return null == b || "background" === a
            ? null
            : O5("div", { className: "i7NByQ" }, O5(P5, { onClick: b }));
        };
        U5 = function (a) {
          a = a.props.at;
          return null == a
            ? null
            : O5(__c.R5, {
                onClick: a,
                className: S5("dxeRgA", "kMfzIA", { g3xmag: __c.iu() }),
                icon: T5,
                qk: "large",
                ariaLabel: __c.Df("M50kBA"),
              });
        };
        W5 = function (a) {
          a = a.props.$s;
          return null == a
            ? null
            : O5(__c.R5, {
                onClick: a,
                className: S5("dxeRgA", "qquEjw"),
                icon: V5,
                qk: "large",
                ariaLabel: __c.Df("WMuMxg"),
              });
        };
        D5 = !1;
        X5 = (a) =>
          I(
            __c.P_,
            Object.assign({}, a, { shape: "circle" }),
            __c.Lu(Object.assign({}, a, { shape: "circle" }))
          );
        __c.R5 = (a) => {
          a = Object.assign({}, a, { variant: "basic" });
          return "link" === a.type
            ? null != a.Kc && 0 < a.Kc.length
              ? I(__c.O_, Object.assign({}, a, { Kc: a.Kc }))
              : I(__c.M_, Object.assign({}, a, { Kc: void 0 }))
            : __c.Lu(a);
        };
        Y5 = (a) =>
          "undefined" !== typeof a.children
            ? I(G5, Object.assign({}, a))
            : I(X5, Object.assign({}, a));
        Z5 = (a) => {
          const b = a.children;
          ({ ref: a } = __c.uF(a.map, { fm: a.fm }));
          return I(__c.yu, null, b({ ref: a }));
        };
        $5 = __webpack_require__(67294);
        a6 = $5.createContext;
        b6 = $5.memo;
        H5 = $5.useContext;
        c6 = $5.useEffect;
        O5 = __c.O5 = $5.createElement;
        d6 = $5.Fragment;
        L5 = $5.useLayoutEffect;
        e6 = $5.forwardRef;
        f6 = $5.useState;
        g6 = $5.useRef;
        h6 = $5.useCallback;
        i6 = $5.useMemo;
        j6 = $5.PureComponent;
        k6 = $5.Component;
        l6 = $5.createRef;
        var m6 = __webpack_require__(22188).LO;
        var n6 = __webpack_require__(70655).gn;
        var J5 = __webpack_require__(33581).hN;
        var o6 = __webpack_require__(99601).Z;
        var p6 = __webpack_require__(29323).Pi;
        var q6 = __webpack_require__,
          r6 = q6(94184),
          S5 = q6.n_x(r6)();
        var s6 = __webpack_require__(96630),
          t6 = s6.ZP,
          u6 = s6.cn;
        var v6 = a6(!0),
          w6 = b6(function ({
            open: a,
            Rv: b,
            G0: c = document.body,
            jc: d,
            Eo: e = "window",
            children: f,
            qP: g,
          }) {
            const h = H5(v6),
              k = h && a;
            c6(() => {
              if (k) {
                const m = c.style.overflow;
                c.style.overflow = "hidden";
                return () => {
                  c.style.overflow = m;
                };
              }
            }, [k, c]);
            const l = k && "none" !== g;
            c6(() => {
              if (l) {
                const m = b || document.querySelector("#root");
                if (null != m) {
                  const p = "moderate" === g ? "Tr4BVQ" : "_8O9_Zg",
                    q = Array.from(m.parentNode ? m.parentNode.children : [])
                      .filter(
                        (t) =>
                          2 >
                          (parseInt(window.getComputedStyle(t).zIndex, 10) || 0)
                      )
                      .concat(m);
                  q.forEach((t) => {
                    t.classList.add(p);
                    t.setAttribute("aria-hidden", "true");
                  });
                  return () => {
                    q.forEach((t) => {
                      t.classList.remove(p);
                      t.removeAttribute("aria-hidden");
                    });
                  };
                }
              }
            }, [b, l, g]);
            a = O5(v6.Provider, { value: !1 }, f);
            return h && "window" === e
              ? O5(__c.EP, { open: !0, level: 3, jc: d }, a)
              : O5(d6, null, a);
          });
        var x6 =
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.06 5.94a1.5 1.5 0 0 1 0 2.12l-6.878 6.88a1.5 1.5 0 0 0 0 2.12l6.879 6.88a1.5 1.5 0 0 1-2.122 2.12l-6.878-6.878a4.5 4.5 0 0 1 0-6.364l6.878-6.879a1.5 1.5 0 0 1 2.122 0Z" fill="currentColor"/></svg>';
        var y6 =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M9.53 11.71 5.99 8.18a.25.25 0 0 1 0-.36L9.53 4.3a.75.75 0 1 0-1.06-1.06L4.93 6.76c-.68.69-.68 1.8 0 2.48l3.54 3.53a.75.75 0 0 0 1.06-1.06z"/></svg>';
        var z6 =
          '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83"/></svg>';
        var A6 =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.45 17.97 9.5 12.01a.25.25 0 0 1 0-.36l5.87-5.87a.75.75 0 0 0-1.06-1.06l-5.87 5.87c-.69.68-.69 1.8 0 2.48l5.96 5.96a.75.75 0 0 0 1.06-1.06z"/></svg>';
        var T5 = __c.NX({ xq: z6, small: y6, medium: A6, Wh: x6 }, !0);
        var B6 =
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.94 26.06a1.5 1.5 0 0 1 0-2.12l6.878-6.88a1.5 1.5 0 0 0 0-2.12l-6.879-6.88a1.5 1.5 0 1 1 2.122-2.12l6.878 6.878a4.5 4.5 0 0 1 0 6.364l-6.878 6.879a1.5 1.5 0 0 1-2.122 0Z" fill="currentColor"/></svg>';
        var C6 =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"/></svg>';
        var D6 =
          '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M5 8.83 7.12 6.7a1 1 0 0 0 0-1.42L5 3.17"/></svg>';
        var E6 =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m8.55 5.78 5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z"/></svg>';
        var V5 = __c.NX({ xq: D6, small: C6, medium: E6, Wh: B6 }, !0);
        var F6 = (a) => !a.hasAttribute("data-focus-guard"),
          G6 = (a) => "-1" !== a.getAttribute("tabIndex");
        var K5 = class {
          constructor(a) {
            this.AE = a;
            this.Ij = new Map();
            this.Uf = window;
            this.Vu = !1;
          }
          get Yw() {
            if (!this.AE) return !0;
            const a = this.AE.Ij.get(this.Uf);
            return a ? (a[a.length - 1] === this ? this.AE.Yw : !1) : !0;
          }
          get nq() {
            if (!this.isReady || !this.Yw) return !0;
            const a = this.Ij.get(this.Uf);
            return a && 0 !== a.length ? !0 : !1;
          }
          get isReady() {
            return this.Vu;
          }
          Iy() {
            this.Vu = !0;
          }
          DF(a) {
            this.Uf = a;
          }
          hA(a, b) {
            var c;
            const d = null !== (c = this.Ij.get(b)) && void 0 !== c ? c : [];
            this.Ij.set(b, [...d, a]);
          }
          $E(a, b) {
            var c = this.Ij.get(b);
            c &&
              ((c = c.filter((d) => d !== a)),
              0 === c.length ? this.Ij.delete(b) : this.Ij.set(b, c));
          }
        };
        __c.n = K5.prototype;
        _dp([m6.shallow], K5.prototype, "Ij", void 0);
        _dmr(K5, "Uf");
        _dmr(K5, "Vu");
        _dmc(K5, "Yw");
        _dmc(K5, "nq");
        _dmc(K5, "isReady");
        _dmb(K5, "Iy", null);
        _dmb(K5, "DF", null);
        _dmb(K5, "hA", null);
        _dmb(K5, "$E", null);
        var I5 = a6(new K5()),
          H6 = I5.Provider;
        var I6 = { "data-focus-guard": !0 },
          J6 = p6(
            e6(function (a, b) {
              var {
                autoFocus: c = !0,
                children: d,
                className: e,
                disabled: f = !1,
                t4: g,
                JW: h = !0,
                preventScroll: k = !1,
                w4: l = !1,
                U6: m,
                Cs: p = [],
                d3: q = !0,
              } = a;
              const [t, u] = f6(window),
                y = g6(window.document.activeElement),
                A = g6(null),
                B = g6([]),
                G = g6(!0);
              L5(() => {
                var Y;
                const za =
                  null === (Y = A.current) || void 0 === Y
                    ? void 0
                    : Y.ownerDocument.defaultView;
                za &&
                  za !== window &&
                  (u(za), (y.current = za.document.activeElement));
              }, []);
              const { nU: H } = M5({ Uf: t, disabled: f }),
                O = f || H.nq;
              L5(() => {
                if (A.current && !O) {
                  var Y = new MutationObserver(() => {
                    G.current = !0;
                  });
                  Y.observe(A.current, { childList: !0, subtree: !0 });
                  return () => {
                    Y.disconnect();
                  };
                }
              }, [O]);
              const S = h6(() => {
                  G.current &&
                    A.current &&
                    ((G.current = !1),
                    (B.current = Array.from(
                      A.current.querySelectorAll(
                        "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]"
                      )
                    )
                      .filter(F6)
                      .filter(G6)));
                }, []),
                Q = h6(() => {
                  S();
                  0 < B.current.length &&
                    B.current[0].focus({ preventScroll: k });
                }, [k, S]);
              a = h6(() => {
                S();
                0 < B.current.length &&
                  B.current[B.current.length - 1].focus({ preventScroll: k });
              }, [k, S]);
              const P = h6(
                  (Y) => {
                    A.current &&
                      null != Y.target &&
                      (N5(Y.target) ||
                        null != Y.relatedTarget ||
                        A.current.contains(Y.target) ||
                        Q());
                  },
                  [Q]
                ),
                X = h6(
                  (Y) => {
                    A.current &&
                      !H.nq &&
                      (!Y.relatedTarget ||
                        A.current.contains(Y.relatedTarget) ||
                        N5(Y.relatedTarget) ||
                        (Y.target && A.current.contains(Y.target)
                          ? Y.target.focus({ preventScroll: k })
                          : Q()));
                  },
                  [Q, H, k]
                );
              L5(() => {
                if (!O)
                  return (
                    t.document.addEventListener("focusout", X, !0),
                    t.document.addEventListener("focusin", P, !0),
                    () => {
                      t.document.removeEventListener("focusout", X, !0);
                      t.document.removeEventListener("focusin", P, !0);
                    }
                  );
              }, [t.document, O, P, X]);
              const ja = g6(!1);
              L5(() => {
                if (
                  !ja.current &&
                  H.isReady &&
                  ((ja.current = !0), !f && !H.nq)
                )
                  if (c) {
                    var Y;
                    A.current
                      ? (Y = A.current.querySelector(
                          "[data-focus-lock-autofocus='true']"
                        ))
                        ? ((Y = Array.from(
                            Y.querySelectorAll(
                              "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]"
                            )
                          )),
                          (Y = 0 < Y.length ? Y[0] : null))
                        : (Y = null)
                      : (Y = null);
                    Y ? Y.focus({ preventScroll: k }) : Q();
                  } else
                    (Y = t.document.activeElement) &&
                      A.current &&
                      !A.current.contains(Y) &&
                      Y.blur();
              }, [c, t.document, Q, H.isReady, H.nq, k, f]);
              const oa = g6(h && !O);
              oa.current = h && !O;
              c6(() => {
                const Y = y.current;
                return () => {
                  oa.current && Y && Y.focus({ preventScroll: k });
                };
              }, []);
              var N = i6(
                () =>
                  [
                    m && !O
                      ? [
                          "Escape",
                          (Y) => {
                            Y.stopPropagation();
                            m();
                          },
                        ]
                      : void 0,
                    ...p,
                  ].filter(__c.qa),
                [O, p, m]
              );
              ({ ref: N } = __c.uF(N, { fm: q }));
              return O5(
                H6,
                { value: H },
                O5(
                  "div",
                  Object.assign({}, g, {
                    className: e,
                    ref: o6(A, b, N),
                    tabIndex: l ? -1 : void 0,
                  }),
                  O5(
                    "div",
                    Object.assign(
                      {},
                      { onFocus: O ? void 0 : a, tabIndex: O ? void 0 : 0 },
                      I6
                    )
                  ),
                  d,
                  O5(
                    "div",
                    Object.assign(
                      {},
                      { onFocus: O ? void 0 : Q, tabIndex: O ? void 0 : 0 },
                      I6
                    )
                  )
                )
              );
            })
          );
        var K6, L6, P5, M6, O6;
        K6 = { enter: 0, exit: 250 };
        __c.N6 = p6(function ({
          uf: a,
          Cg: b,
          id: c,
          children: d,
          SY: e,
          Eo: f,
          mode: g = __c.mu() ? "sheet" : "backdrop",
          f9: h = "auto",
          KM: k,
          from: l,
          s1: m,
          Rv: p,
          jc: q,
          Os: t,
          ap: u,
          open: y,
          Wa: A,
          EK: B,
          No: G,
          Cs: H,
          at: O,
          $s: S,
          jf: Q,
          R6: P,
          $h: X,
          autoFocus: ja,
        }) {
          const oa = h6(
            (N) => {
              const Y = P || Q;
              y && Y && (N.stopPropagation(), Y());
            },
            [y, Q, P]
          );
          d = e ? O5(e, { mode: g }) : d;
          if ("backdrop" === g || "positioned-ancestor" === f)
            return O5(
              L6,
              {
                uf: a,
                Cg: b,
                id: c,
                Rv: p,
                jc: q,
                Eo: f,
                Os: t,
                ap: u,
                open: y,
                Wa: A,
                EK: B,
                No: G,
                Cs: H,
                at: O,
                $s: S,
                jf: Q,
                $h: X,
                autoFocus: ja,
              },
              O5(M6, { ap: u }, d)
            );
          if ("sheet" === g)
            return O5(__c.h5, {
              content: O5("div", { className: "iUtNrw Z2VWzw" }, d),
              open: y,
              from: l,
              eg: !0,
              Gk: oa,
              jf: Q,
              $h: X,
              size: h,
              FR: m,
              Wa: A,
              hC: k,
            });
          throw new __c.w(g);
        });
        L6 = class extends j6 {
          render() {
            const {
                uf: a,
                Cg: b,
                id: c,
                children: d,
                Rv: e,
                jc: f,
                Eo: g,
                Os: h,
                ap: k,
                open: l,
                No: m = "buttonOrBackground",
                EK: p,
                Wa: q = __c.Gr.Wa,
                autoFocus: t,
                Cs: u,
                at: y,
                $s: A,
                jf: B,
                $h: G,
              } = this.props,
              H = !__c.hu() && !__c.Gr.GQ;
            return O5(
              t6,
              {
                in: l,
                timeout: q ? K6 : 0,
                mountOnEnter: !0,
                unmountOnExit: !0,
                appear: !0,
              },
              (O) =>
                O5(
                  w6,
                  {
                    open: l,
                    Rv: e,
                    jc: f,
                    Eo: g,
                    qP: H ? (p ? "intense" : "moderate") : "none",
                  },
                  O5(
                    O6,
                    {
                      uf: a,
                      Cg: b,
                      id: c,
                      open: O === u6,
                      Eo: g || "window",
                      Wa: q,
                      Os: h,
                      autoFocus: t,
                      No: m,
                      kP: p
                        ? H
                          ? "moderate"
                          : "intense"
                        : H
                        ? "none"
                        : "moderate",
                      ap: k,
                      Cs: u,
                      at: y,
                      $s: A,
                      jf: B,
                      $h: G,
                    },
                    d
                  )
                )
            );
          }
        };
        P5 = ({ onClick: a }) =>
          O5(Y5, {
            variant: "contrast",
            className: "T2s_Vg",
            onClick: a,
            ariaLabel: __c.Df("ezdcfw"),
            icon: __c.U_,
            qk: "small",
            size: "xsmall",
          });
        M6 = e6(({ children: a, W_: b, jf: c, ap: d }, e) =>
          O5(
            "div",
            { className: "HmLo5g", ref: e },
            c && O5("div", { className: "MxkZUA" }, O5(P5, { onClick: c })),
            O5(
              "div",
              { className: S5("JFEjrQ OdX8fA Z2VWzw", b, { y8vKyg: d }) },
              a
            )
          )
        );
        O6 = class extends k6 {
          constructor() {
            super(...arguments);
            this.Bv = l6();
            this.Tb = l6();
            this.mL = null;
            this.kV = (a) => {
              const b = this.props.jf;
              null != b && (b(), a.preventDefault());
            };
            this.YU = (a) => {
              const b = this.props.at;
              null != b && (b(), a.preventDefault());
            };
            this.ZU = (a) => {
              const b = this.props.$s;
              null != b && (b(), a.preventDefault());
            };
            this.Gk = (a) => {
              const b = this.props.jf;
              this.props.open && b && (a.stopPropagation(), b());
            };
            this.bV = (a) => {
              const b = this.props.jf;
              "button" !== this.props.No &&
                this.Bv.current === a.target &&
                0 === a.touches.length &&
                (b && b(), a.preventDefault());
            };
            this.$U = (a) => {
              const b = this.props.jf;
              "button" !== this.props.No &&
                this.Bv.current === a.target &&
                this.mL === a.target &&
                b &&
                b();
            };
            this.aV = (a) => {
              this.mL = a.target;
            };
          }
          get RT() {
            const { Cs: a = [] } = this.props,
              b = ["Escape", "ArrowLeft", "ArrowRight"];
            return [
              ...a.filter(([c]) => !b.includes(c)),
              ["Escape", this.kV],
              ["ArrowLeft", this.YU],
              ["ArrowRight", this.ZU],
            ];
          }
          componentDidMount() {
            var a, b, c;
            const { autoFocus: d = !0 } = this.props;
            d &&
              (null === (a = this.Tb.current) || void 0 === a
                ? void 0
                : a.focus(),
              null ===
                (c =
                  null === (b = this.Bv.current) || void 0 === b
                    ? void 0
                    : b.scrollTo) || void 0 === c
                ? void 0
                : c.call(b, 0, 0));
          }
          componentWillUnmount() {
            const a = this.props.$h;
            a && a();
          }
          render() {
            const {
                uf: a,
                Cg: b,
                id: c,
                role: d = "dialog",
                children: e,
                open: f,
                Eo: g,
                kP: h,
                Wa: k = __c.Gr.Wa,
                ap: l,
                Os: m,
              } = this.props,
              p = S5("MxhaIQ", {
                R4vkCQ: k,
                V6lwGg: "positioned-ancestor" === g,
                _5aUrJg: f,
                upxRvA: "moderate" === h,
                mvLZKw: "intense" === h,
              }),
              q = S5("IywfPg", m, { _5aUrJg: f }),
              t = S5("EYTKnA", { y8vKyg: l, p6gJdA: __c.Cu.ej });
            return O5(
              __c.AF,
              { Gk: this.Gk },
              O5(Z5, { fm: !1, map: this.RT }, ({ ref: u }) =>
                O5(
                  d6,
                  null,
                  O5(
                    "div",
                    {
                      className: p,
                      onTouchEnd: this.bV,
                      onMouseDown: this.aV,
                      onClick: this.$U,
                      ref: o6(this.Bv, u),
                    },
                    O5(
                      J6,
                      {
                        disabled: __c.Gr.HQ,
                        autoFocus: !1,
                        JW: !0,
                        className: q,
                      },
                      U5(this),
                      O5(__c.F5, null, (y) =>
                        O5(
                          "div",
                          {
                            tabIndex: -1,
                            ref: this.Tb,
                            role: d,
                            "aria-modal": !0,
                            "aria-labelledby": `${y} ${
                              null !== a && void 0 !== a ? a : ""
                            }`,
                            "aria-describedby": b,
                            className: t,
                            id: c,
                          },
                          O5(__c.qu, { id: y }, __c.Df("MfH6Iw")),
                          e
                        )
                      ),
                      W5(this),
                      Q5(this)
                    )
                  )
                )
              )
            );
          }
        };
        O6 = n6([p6], O6);
        var P6 = {
          monoBlackA150: "rgba(17, 23, 29, 0.6)",
          monoWhite: "rgb(255, 255, 255)",
          monoWhiteA100: "rgba(255, 255, 255, 0.65)",
          gridBaseline: "8px",
          colorTypographyPrimary: "var(--pUV7hA)",
          colorTypographyTertiary: "var(--fSfh3A)",
          unthemed: "body:not(:global(.theme))",
          fontWeightSemiBold: "600",
          textMedium: "fFOiLQ",
          textSmall: "_5RSqIg",
          labelMargin: "8px",
          label: "FFnr-w",
          labelText: "Uc1_7g",
          medium: "_0bqX9Q fFOiLQ",
          small: "_69xTJA _5RSqIg",
          smallRegular: "TCjqdQ _5RSqIg",
          disabled: "z2dDaQ",
          dark: "Rkqp9g",
        };
        __c.Q6 = (a) => {
          var {
            id: b,
            className: c,
            disabled: d = !1,
            fontVariant: e,
            children: f,
            yb: g,
          } = a;
          if (!f && 0 !== f) return null;
          a = S5(c, "FFnr-w", P6[e], { z2dDaQ: d, Rkqp9g: "dark" === g });
          return "string" === typeof f
            ? O5("p", { id: b, className: a }, f)
            : O5("div", { id: b, className: a }, f);
        };
        __c.R6 = E(() => ({}));
        E(() => ({}));
        var S6 = E(() => ({ time: NH(1), value: M(2) }));
        E(() => ({ y9: NH(1), f1: NH(2), interval: NH(3), points: D(4, S6) }));
        var T6 = F(() => [1, 2, 3], 1);
        var U6 = F(() => [1, 2, 3, { Ci: !0 }], 1);
        var V6 = E(() => ({ source: Va(1, U6), r9: U(2), u9: V(3), t9: V(4) }));
        var W6 = F(() => [1, 2], 1);
        __c.X6 = E(() => ({ container: Va(1, W6) }));
        var Y6 = E(() => ({ Ra: U(1), key: U(2) }));
        __c.Z6 = E(() => ({
          Tm: z(1, __c.X6),
          reference: C(2, Y6),
          url: V(3),
        }));
        var $6 = E(() => ({ filename: U(1), Ra: U(2), key: U(3), url: V(4) }));
        __c.a7 = E(() => ({
          width: R(1),
          height: R(2),
          reference: C(3, Y6),
          url: V(4),
        }));
        var b7 = F(() => [1, 2], 1);
        var c7 = E(() => ({ lk: U(1), DX: V(2) }));
        var d7 = E(() => ({ w$: U(1), x$: U(2) }));
        __c.e7 = E(() => ({
          pd: R(1),
          mJ: M(17),
          mv: D(2, __c.a7),
          title: V(3),
          d8: Wa(20, b7),
          lk: RH(4),
          DX: RH(19),
          q2: D(21, c7),
          JU: RH(5),
          i_: OH(6),
          U9: RH(7),
          artist: RH(8),
          label: V(9),
          D7: RH(10),
          Ll: RH(11),
          CC: SH(12),
          f8: PH(13),
          K: RH(14),
          description: V(15),
          s9: C(16, d7),
        }));
        var f7 = E(() => ({ title: V(1), description: V(2), K: RH(3) }));
        var g7 = F(() => [1, 2, 3, 4, 5, 6], 1);
        var h7 = E(() =>
          Object.assign(
            {},
            {},
            { type: x("A?", 1, "BRAND_USER"), brand: U(1), user: U(2) }
          )
        );
        var i7 = E(() =>
          Object.assign(
            {},
            {},
            { type: x("A?", 2, "BRAND_GROUP"), brand: U(1), group: U(2) }
          )
        );
        var j7 = E(() =>
          Object.assign({}, {}, { type: x("A?", 3, "BRAND"), brand: U(1) })
        );
        var k7 = bb(
          () => ({ type: [1, h7, 2, i7, 3, j7] }),
          () => ({})
        );
        var aaa = E(() =>
          Object.assign({}, {}, { type: x("A?", 1, "FOLDER_ORIGIN"), MJ: U(1) })
        );
        var baa = E(() =>
          Object.assign({}, {}, { type: x("A?", 2, "USER_ORIGIN"), user: U(1) })
        );
        var caa = bb(
          () => ({ type: [1, aaa, 2, baa] }),
          () => ({})
        );
        var daa = E(() => ({
          Qk: z(1, k7),
          origin: z(2, caa),
          version: NH(3),
        }));
        var eaa = F(() => [1, 2, 3, 4], 1);
        var faa = E(() => ({ key: z(1, daa), CH: Va(2, eaa) }));
        var gaa = E(() => ({ Bi: U("token", 1), Xo: NH("expiry", 2) }));
        var haa = F(() => [1, 2, 3, 4], 1);
        var iaa = F(() => [1, 2], 1);
        __c.jaa = E(() => ({
          id: U(1),
          brand: U(2),
          user: V(3),
          status: U(4),
          nf: W(5),
          W: Va(10, __c.hW),
          cU: Wa(22, iaa),
          Gj: SH(6),
          bq: Va(11, T6),
          ZW: SH(16),
          $W: PH(17),
          source: C(7, V6),
          files: D(8, __c.Z6),
          sourceFile: C(13, $6),
          metadata: C(9, __c.e7),
          vx: (0, __c.YH)(21, f7),
          NR: V(12),
          bv: Xa(14, g7),
          Sf: D(15, faa),
          yh: C(20, gaa),
          Fm: PH(18),
          $j: PH(19),
          LW: Wa(23, haa),
          $F: V(24),
        }));
        var kaa = F(() => [
          1,
          "CENTIMETERS",
          2,
          "INCHES",
          3,
          "MILLIMETERS",
          4,
          "PIXELS",
        ]);
        var l7 = F(() => [
          0,
          "LOSSLESS",
          1,
          "EDITING_AFFECTED",
          2,
          "RENDERING_AFFECTED",
          3,
          "UNREPRESENTABLE",
        ]);
        var laa = F(() => [1, "SINGLE", 2, "COLLAB"]);
        var maa = F(() => [1, 2, 3]);
        __c.m7 = E(() => ({
          Bi: V(1),
          identifier: U(2),
          display: V(6),
          role: Va(3, fK),
          status: Va(4, maa),
          expiresAt: NH(5),
        }));
        var naa = E(() => ({ Bi: U(1), role: Va(2, fK) }));
        __c.n7 = E(() => ({
          rules: D("rules", 1, __c.CV),
          bY: Wa("tosRestriction", 5, __c.mK),
          KK: D("invites", 4, __c.m7),
          Xa: V("extension", 6),
          e9: D("shareTokens", 7, naa),
          version: R("version", 2),
          Fe: z("owner", 3, __c.iK),
        }));
        __c.kb = E(() => ({}));
        __c.o7 = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "REFERENCE", 9, "REFERENCE"),
              id: U("id", 1),
              version: R("version", 2),
            }
          )
        );
        __c.p7 = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "INLINE", 10, "INLINE"),
              width: M("width", 1),
              height: M("height", 2),
              units: Va("units", 3, kaa),
            }
          )
        );
        var oaa = bb(
          () => ({ type: [9, __c.o7, 10, __c.p7] }),
          () => ({})
        );
        var q7 = E(() => ({ id: U("id", 1), version: R("version", 2) }));
        __c.r7 = E(() => ({
          title: V("title", 2),
          description: V("description", 3),
          K: RH("keywords", 4),
          doctype: z("doctype", 5, oaa),
        }));
        __c.s7 = E(() => ({
          Ra: U("bucket", 1),
          key: U("key", 2),
          page: R("page", 3),
          HL: OH("pageHash", 5),
          height: OH("height", 6),
          width: OH("width", 7),
          url: V("url", 4),
        }));
        __c.t7 = E(() => ({
          height: R("height", 1),
          width: R("width", 2),
          version: R("version", 3),
          images: D("images", 4, __c.s7),
        }));
        __c.u7 = E(() => ({
          tq: z("thumbnail", 1, __c.t7),
          qt: C("preview", 2, __c.t7),
        }));
        __c.v7 = E(() => ({
          content: z("content", 1, __c.r7),
          hg: U("schema", 11),
          Et: U("schemaFamily", 12),
          version: R("version", 2),
          timestamp: NH("timestamp", 3),
          pY: W("untouched", 13),
          ZH: R("bodyCount", 14),
          xE: R("pageCount", 5),
          Qh: z("imageSets", 8, __c.u7),
          OH: V("associatedMedia", 9),
        }));
        var paa = E(() => ({ timestamp: NH("timestamp", 1) }));
        __c.w7 = E(() => ({
          id: U("id", 1),
          GL: U("owningBrand", 10),
          $j: NH("creationDate", 2),
          origin: C("origin", 9, q7),
          extensions: C("extensions", 3, __c.l5),
          tags: RH("tags", 5),
          Sf: z("acl", 6, __c.n7),
          Il: W("brandTemplate", 13),
          Oc: z("draft", 4, __c.v7),
          version: R("version", 7),
          timestamp: PH("timestamp", 8),
          Gj: C("trashed", 11, paa),
          dQ: (0, __c.VH)("contributors", 12),
        }));
        E(() => ({ IU: W("modified", 1) }));
        E(() => ({ IU: W("modified", 1) }));
        E(() => ({}));
        E(() => ({
          document: z("document", 1, __c.w7),
          Mj: Va("accessRole", 3, fK),
        }));
        E(() => ({ Sf: z("acl", 1, __c.n7) }));
        var qaa = E(() => ({ df: U(1), image: z(2, __c.s7) }));
        E(() => ({ images: D(1, qaa), Hg: V(2) }));
        E(() => ({
          bk: D("documents", 1, __c.w7),
          oZ: (0, __c.XH)("accessRoles", 3, fK),
          Hg: V("continuation", 2),
        }));
        var raa = F(() => [1, 2]);
        var saa = E(() => ({
          id: U(1),
          Fe: z(2, __c.iK),
          origin: Va(3, raa),
          q9: NH(4),
          f3: PH(7),
          reason: V(5),
          t_: W(6),
        }));
        E(() => ({ bk: D(1, saa), Hg: V(2) }));
        E(() => ({ Sf: z("acl", 1, __c.n7) }));
        __c.x7 = E(() => ({
          timestamp: NH(2),
          version: R(3),
          Fe: z(4, __c.iK),
          reason: V(5),
        }));
        E(() => ({ u8: D(1, __c.x7) }));
        E(() => ({ Bt: z(1, __c.x7) }));
        E(() => ({ tags: RH("tags", 1) }));
        E(() => ({}));
        E(() => ({}));
        E(() => ({}));
        __c.y7 = E(() => ({
          hg: U("schema", 10),
          content: z("content", 1, __c.eb),
          version: R("version", 2),
          timestamp: NH("timestamp", 3),
          pY: W("untouched", 13),
          ZH: R("bodyCount", 14),
          xE: R("pageCount", 5),
          i7: QH("pageHashes", 16),
          Qh: z("imageSets", 8, __c.u7),
          OH: V("associatedMedia", 9),
          L_: Wa("collaborationMode", 15, laa),
        }));
        __c.z7 = E(() => ({
          id: U("id", 1),
          GL: U("owningBrand", 10),
          $j: NH("creationDate", 2),
          origin: C("origin", 9, q7),
          extensions: z("extensions", 3, __c.l5),
          tags: RH("tags", 5),
          Sf: z("acl", 6, __c.n7),
          Il: W("brandTemplate", 13),
          b5: V("narrationId", 15),
          Oc: z("draft", 4, __c.y7),
          version: R("version", 7),
          timestamp: PH("timestamp", 8),
          dQ: (0, __c.VH)("contributors", 12),
        }));
        __c.fb = E(() => ({
          document: z("document", 1, __c.z7),
          Mf: R("session", 4),
          hQ: Wa("conversionResult", 5, l7),
        }));
        E(() => ({
          document: z("document", 1, __c.z7),
          fonts: D("fonts", 2, __c.yK),
          J4: D("mediaMap", 3, __c.s5),
          Oa: D("videos", 4, __c.Wn),
          audio: D("audio", 5, __c.iW),
          embeds: D("embeds", 6, __c.g0),
          Mj: Va("accessRole", 7, fK),
          $_: V("conversionLoss", 8),
          hQ: Wa("conversionResult", 9, l7),
        }));
        __c.BK = E(() => ({
          fonts: D("fonts", 2, __c.yK),
          xw: D("fontFiles", 7, __c.A5),
          media: D("media", 3, __c.s5),
          Oa: D("videos", 4, __c.Wn),
          audio: D("audio", 5, __c.iW),
          embeds: D("embeds", 6, __c.g0),
          Hg: V("continuation", 1),
        }));
        __c.CK = E(() => ({}));
        __c.hb = E(() => ({}));
        var taa = F(() => [1, "NOT_APPLICABLE", 2, "FREE", 3, "STANDARD"]);
        __c.A7 = E(() => ({
          url: U("url", 1),
          Ra: U("bucket", 5),
          key: U("key", 4),
          format: Va("format", 2, __c.vA),
          ib: R("sizeBytes", 3),
        }));
        var B7 = () => ({
          url: U("url", 3),
          format: Va("format", 4, __c.vA),
          ib: R("sizeBytes", 5),
        });
        var uaa = E(() =>
          Object.assign({}, B7(), {
            type: x(
              "type",
              "GLYPH_SUBSETTED_FONT_FILE",
              1,
              "GLYPH_SUBSETTED_FONT_FILE"
            ),
            FS: U("glyphs", 1),
          })
        );
        var vaa = E(() =>
          Object.assign({}, B7(), {
            type: x(
              "type",
              "LOCALE_SUBSETTED_FONT_FILE",
              2,
              "LOCALE_SUBSETTED_FONT_FILE"
            ),
            Ke: D("unicodeRanges", 1, __c.t5),
            supportedLocales: RH("supportedLocales", 2),
          })
        );
        var waa = bb(() => ({ type: [1, uaa, 2, vaa] }), B7);
        var xaa = F(() => [0, "FONT_NAME", 1, "STYLE_NAME"]);
        __c.C7 = E(() => ({
          url: U("url", 1),
          width: R("width", 2),
          height: R("height", 3),
          role: Va("role", 4, xaa),
          quality: OH("quality", 5),
        }));
        __c.D7 = E(() => ({
          style: Va("style", 1, __c.n2),
          jl: V("styleName", 6),
          nt: V("postscriptName", 7),
          weight: OH("weight", 9),
          files: D("files", 2, __c.A7),
          Bj: D("subsettedFiles", 8, waa),
          Nb: W("canSubset", 3),
          metadata: C("metadata", 4, __c.y5),
          images: D("images", 5, __c.C7),
        }));
        var yaa = F(() => [
          0,
          "FONT_FAMILY",
          1,
          "SCRIPT_PREVIEW",
          2,
          "MARKETING_POSTER",
        ]);
        __c.E7 = E(() => ({
          url: U("url", 1),
          width: R("width", 2),
          height: R("height", 3),
          role: Va("role", 4, yaa),
          locale: RH("locale", 5),
          Xb: SH("preferredImage", 6),
          quality: OH("quality", 7),
        }));
        var zaa = E(() => ({ locale: U("locale", 1), K: RH("keywords", 2) }));
        var Aaa = E(() => ({ script: U("script", 1), c7: R("ordering", 2) }));
        var Baa = E(() => ({
          $F: V("syncId", 1),
          M9: PH("syncVersion", 2),
          p$: PH("updatedAt", 3),
        }));
        __c.F7 = E(() => ({
          id: U("id", 1),
          version: R("version", 2),
          $f: V("legacyId", 3),
          name: U("name", 4),
          brand: V("brand", 5),
          W: Wa("licensing", 6, taa),
          hidden: W("hidden", 7),
          Ic: W("needsLigatures", 8),
          Gc: W("library", 9),
          xd: W("premium", 10),
          fonts: D("fonts", 11, __c.D7),
          locales: RH("locales", 12),
          Lf: RH("primaryLocales", 16),
          images: D("images", 13, __c.E7),
          K: D("keywords", 14, zaa),
          jW: D("recommendations", 15, Aaa),
          Y_: C("contentSyncMetadata", 17, Baa),
        }));
        var G7 = F(() => [
          2,
          "RASTER",
          3,
          "VECTOR",
          4,
          "DESIGN",
          5,
          "FONT",
          6,
          "ELEMENT_GROUP",
        ]);
        var H7 = F(() => [
          13,
          "APP_STORE",
          15,
          "DEVICE",
          1,
          "DROPBOX",
          2,
          "FACEBOOK",
          3,
          "GETTY",
          4,
          "INSTAGRAM",
          5,
          "FLICKR",
          11,
          "GOOGLE_DRIVE",
          9,
          "LENSDROP",
          12,
          "MEDIA_PRIVATE",
          6,
          "PEXELS",
          14,
          "PINTEREST",
          { Ci: !0 },
          7,
          "PIXABAY",
          8,
          "STOCK_UNLIMITED",
          10,
          "VCG",
          16,
          "VIEWSTOCK",
          17,
          "PUBLIC_CONTENT_APP",
          { Ci: !0 },
        ]);
        __c.I7 = E(() => ({
          dW: Va("provider", 1, H7),
          I7: V("providerGroupId", 3),
          id: U("id", 2),
        }));
        __c.J7 = E(() => ({
          tK: V("importBucket", 1),
          importKey: V("importKey", 2),
          iT: V("importFilename", 3),
          vK: V("importVersion", 4),
          cJ: V("design", 5),
          EQ: OH("designVersion", 6),
          type: Wa("type", 7, G7),
          nf: SH("restrictedAccess", 8),
          Dp: SH("listed", 9),
          HU: Xa("mintUrls", 10, dK),
          locale: V("locale", 11),
          JR: C("externalRef", 13, __c.I7),
          sX: V("sourceMedia", 14),
          yh: V("accessToken", 16),
          appId: V("appId", 15),
        }));
        E(() => ({
          fileSize: PH("fileSize", 1),
          file: V("file", 2),
          r8: SH("restricted", 3),
          Dp: SH("listed", 4),
          bM: Xa("qualities", 5, dK),
          F1: Wa("externalRefProvider", 6, H7),
          G1: V("externalRefProviderGroupId", 9),
          E1: V("externalRefId", 7),
          sX: V("sourceMedia", 10),
          yh: V("accessToken", 12),
          zZ: V("anonToken", 13),
          appId: V("appId", 11),
          body: C("body", 8, __c.J7),
        }));
        var K7 = F(() => [
          1,
          "PENDING_SUBMISSION",
          2,
          "PENDING_REVIEW",
          3,
          "APPROVED",
          4,
          "SOFT_REJECTED",
          5,
          "HARD_REJECTED",
          6,
          "ETCH_REJECTED",
          7,
          "SET_REJECTED",
          8,
          "DIFFICULT_VECTOR_REJECTED",
          9,
          "CANCELLED",
        ]);
        var L7 = F(() => [0, 1]);
        var Caa = E(() => ({ width: R(1), height: R(2) }));
        var M7 = F(() => [1, "GENERAL", 2, "PARENTAL_GUIDANCE"]);
        __c.N7 = E(() => ({ locale: U("locale", 1), text: U("text", 2) }));
        var O7 = E(() => ({
          Ra: U("bucket", 1),
          key: U("key", 2),
          page: R("page", 3),
          mimeType: V("mimeType", 4),
        }));
        __c.P7 = E(() => ({
          page: R("page", 1),
          quality: Va("quality", 2, dK),
          Ra: U("bucket", 3),
          key: U("key", 4),
          width: OH("width", 5),
          height: OH("height", 6),
          l: W("watermarked", 7),
          rb: W("spritesheet", 10),
          url: U("url", 8),
          kd: PH("urlExpiry", 11),
          zb: W("urlDenied", 9),
          Zo: PH("fileSizeBytes", 12),
          mimeType: V("mimeType", 13),
        }));
        var Daa = E(() => ({
          family: U("family", 1),
          style: U("style", 2),
          italic: W("italic", 3),
          weight: R("weight", 4),
          manufacturer: V("manufacturer", 5),
        }));
        __c.Q7 = E(() => ({
          timestamp: PH("timestamp", 1),
          RZ: V("author", 2),
          keyword: U("keyword", 3),
        }));
        var Eaa = F(() => [1, "P", 6, "G"]);
        var R7 = E(() => ({
          left: M("left", 1),
          top: M("top", 2),
          width: M("width", 3),
          height: M("height", 4),
          BM: M("score", 5),
        }));
        var Faa = E(() => ({
          name: U("name", 1),
          BM: M("score", 2),
          g_: D("boundingBoxes", 3, R7),
        }));
        var Gaa = E(() => ({
          model: U("model", 1),
          version: U("version", 2),
          tags: D("tags", 3, Faa),
        }));
        var Haa = E(() => ({ country: U(1), language: U(2) }));
        var Iaa = E(() => ({ J1: z(1, R7), m1: U(2), sZ: U(3), n2: U(4) }));
        __c.S7 = E(() => ({
          title: V("title", 1),
          description: V("description", 2),
          K: D("keywords", 3, __c.N7),
          EX: D("superKeywords2", 4, __c.Q7),
          H4: Wa("mediaContentType", 5, Eaa),
          tags: D("tags", 6, Gaa),
          j1: RH("ethnicities", 7),
          xT: C("intendedAudienceLocale", 8, Haa),
          K1: D("faces", 9, Iaa),
        }));
        __c.T7 = E(() => ({
          Ul: (0, __c.UH)("dominantColors", 1),
          WP: (0, __c.TH)("colorHistogram", 2),
          c8: RH("recolorableVectorColors", 3),
        }));
        var Jaa = F(() => [1, "MODERN", 2, "STOCK"]);
        var U7 = E(() => ({
          quality: OH("quality", 1),
          l0: SH("curated", 2),
          style: Wa("style", 3, Jaa),
          M1: PH("featured", 4),
        }));
        var V7 = E(() => ({
          locale: U("locale", 1, "en"),
          title: V("title", 2),
          description: V("description", 3),
          K: RH("keywords", 4),
          I9: RH("superKeywords", 5),
        }));
        __c.W7 = E(() => ({
          B1: V("externalId", 1),
          displayName: V("displayName", 2),
          KZ: V("artistUrl", 3),
        }));
        __c.X7 = E(() => ({
          version: R("version", 1),
          vK: V("importVersion", 2),
          x3: V("importFileUrl", 3),
          EQ: OH("designVersion", 4),
          x0: V("designType", 5),
          v0: V("designSchemaVersion", 6),
          Dp: W("listed", 7),
          uK: Va("importState", 8, __c.U0),
          jT: V("importMessage", 9),
          status: Va("status", 10, K7),
          hT: Wa("importFailureType", 46, L7),
          nW: V("rejectionReason", 11),
          E9: V("submittedBy", 12),
          F9: PH("submittedDate", 13),
          MW: V("reviewedBy", 14),
          t8: PH("reviewedDate", 15),
          Fm: NH("modifiedDate", 16),
          N: C("dimensions", 47, Caa),
          artist: V("artist", 17),
          title: V("title", 18),
          description: V("description", 19),
          locale: V("locale", 20),
          background: W("background", 21),
          WI: W("cutout", 22),
          TK: W("isolated", 23),
          RL: W("photoholder", 24),
          mN: W("textholder", 25),
          nM: W("repeating", 26),
          gM: W("recolorable", 27),
          colorSpace: V("colorSpace", 28),
          quality: OH("quality", 29),
          HH: Wa("ageRating", 30, M7),
          K: D("keywords", 31, __c.N7),
          XL: D("processedFiles", 32, O7),
          files: D("files", 45, __c.P7),
          PR: D("files_", 33, __c.P7),
          aQ: D("componentMedia", 34, __c.AK),
          i2: C("fontMetadata", 35, Daa),
          qf: C("spritesheetMetadata", 36, __c.Z0),
          W: Va("licensing", 37, __c.P0),
          wb: C("contentMetadata", 38, __c.S7),
          fileSize: PH("fileSize", 39),
          Kl: C("colorInfo", 40, __c.T7),
          Tm: C("qualityMetadata", 41, U7),
          vx: (0, __c.YH)("localizedMetadata", 42, V7),
          NH: C("artistMetadata", 43, __c.W7),
          appId: V("appId", 44),
        }));
        var Kaa = F(() => [1, "APP", 2, "COPY", 3, "TRANSFORMATION"]);
        var Laa = E(() => ({
          l7: z("parentMedia", 1, __c.AK),
          z8: z("rootMedia", 2, __c.AK),
          type: Wa("type", 3, Kaa),
        }));
        var Maa = F(() => [
          1,
          "GET",
          2,
          "UPDATE_METADATA",
          3,
          "UPDATE",
          4,
          "DEACTIVATE",
          5,
          "MANAGE_ACL",
          6,
          "REMIX",
        ]);
        var Naa = E(() =>
          Object.assign(
            {},
            {},
            {
              UE: x("principalType", "USER", 1, "USER"),
              brand: U("brand", 1),
              user: U("user", 2),
            }
          )
        );
        var Oaa = E(() =>
          Object.assign(
            {},
            {},
            {
              UE: x("principalType", "GROUP", 2, "GROUP"),
              brand: U("brand", 1),
              group: U("group", 2),
            }
          )
        );
        var Paa = E(() =>
          Object.assign(
            {},
            {},
            {
              UE: x("principalType", "BRAND", 3, "BRAND"),
              brand: U("brand", 1),
            }
          )
        );
        var Qaa = bb(
          () => ({ UE: [1, Naa, 2, Oaa, 3, Paa] }),
          () => ({})
        );
        var Raa = E(() =>
          Object.assign(
            {},
            {},
            {
              pE: x("originType", "FOLDER_ORIGIN", 1, "FOLDER_ORIGIN"),
              MJ: U("folder", 1),
            }
          )
        );
        var Saa = E(() =>
          Object.assign(
            {},
            {},
            {
              pE: x("originType", "USER_ORIGIN", 2, "USER_ORIGIN"),
              user: U("user", 1),
            }
          )
        );
        var Taa = E(() =>
          Object.assign(
            {},
            {},
            {
              pE: x("originType", "BRAND_KIT_ORIGIN", 3, "BRAND_KIT_ORIGIN"),
              j_: U("brandKit", 1),
            }
          )
        );
        var Uaa = bb(
          () => ({ pE: [1, Raa, 2, Saa, 3, Taa] }),
          () => ({})
        );
        var Vaa = E(() => ({
          Qk: z("principal", 1, Qaa),
          C8: z("ruleOrigin", 2, Uaa),
        }));
        var Waa = E(() => ({
          A7: z("principalOrigin", 1, Vaa),
          version: NH("version", 2),
        }));
        var Xaa = F(() => [1, "VIEWER", 2, "REMIXER", 3, "EDITOR"]);
        var Yaa = E(() => ({
          key: z("key", 1, Waa),
          CH: Va("access", 2, Xaa),
        }));
        var Zaa = E(() =>
          Object.assign(
            {},
            {},
            { type: x("type", "BACKGROUND_REMOVAL", 1, "BACKGROUND_REMOVAL") }
          )
        );
        var $aa = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "LUT", 2, "LUT"),
              tm: M("intensity", 1),
              name: U("name", 2),
              D8: R("samplesPerChannel", 3),
              A: U("layout", 4),
            }
          )
        );
        var aba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "ADJUSTMENT", 3, "ADJUSTMENT"),
              blur: T("blur", 1),
              wf: T("clarity", 2),
              Gf: T("highlights", 3),
              Nf: T("shadows", 4),
              Rf: T("vibrance", 5),
              brightness: T("brightness", 6),
              contrast: T("contrast", 7),
              saturation: T("saturation", 8),
              yg: T("warmth", 9),
              a$: T("tintHue", 10),
              b$: T("tintIntensity", 11),
              Xf: T("fade", 12),
              R$: T("xprocess", 13),
            }
          )
        );
        var Y7 = E(() => ({ a: M(1), b: M(2), c: M(3) }));
        var bba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "ADJUSTMENT_V2", 4, "ADJUSTMENT_V2"),
              brightness: T("brightness", 1),
              contrast: T("contrast", 2),
              Gf: T("highlights", 3),
              Nf: T("shadows", 4),
              N$: T("whites", 5),
              $Z: T("blacks", 6),
              saturation: T("saturation", 7),
              Rf: T("vibrance", 8),
              T9: T("temperature", 9),
              Hd: T("tint", 10),
              wf: T("clarity", 11),
              sharpness: T("sharpness", 14),
              a9: C("shaderTint", 12, Y7),
              b9: C("shaderWhitePoint", 13, Y7),
            }
          )
        );
        var cba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "DUOTONE", 5, "DUOTONE"),
              tm: M("intensity", 1),
              o3: U("highlightColorHex", 2),
              c9: U("shadowColorHex", 3),
            }
          )
        );
        var dba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "CROP_AND_ROTATE", 6, "CROP_AND_ROTATE"),
              iI: M("centerX", 1),
              jI: M("centerY", 2),
              h0: M("cropWidth", 3),
              g0: M("cropHeight", 4),
              rotation: M("rotation", 5),
            }
          )
        );
        var eba = E(() =>
          Object.assign(
            {},
            {},
            { type: x("type", "VIGNETTE", 7, "VIGNETTE"), CX: M("strength", 1) }
          )
        );
        var fba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "VIGNETTE_V2", 8, "VIGNETTE_V2"),
              CX: M("strength", 1),
            }
          )
        );
        var gba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "INPAINTING", 9, "INPAINTING"),
              D4: V("maskId", 1),
            }
          )
        );
        var hba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "AUTOFOCUS", 10, "AUTOFOCUS"),
              c2: M("focusDepth", 1),
              d_: M("blurIntensity", 2),
            }
          )
        );
        var iba = E(() =>
          Object.assign({}, {}, { type: x("type", "GLOBAL", 1, "GLOBAL") })
        );
        var jba = bb(
          () => ({ type: [1, iba] }),
          () => ({})
        );
        var kba = E(() =>
          Object.assign(
            {},
            {},
            {
              type: x("type", "GAUSSIAN_BLUR", 11, "GAUSSIAN_BLUR"),
              c_: z("blurCoverage", 1, jba),
              tm: M("intensity", 2),
            }
          )
        );
        var lba = bb(
          () => ({
            type: [
              1,
              Zaa,
              2,
              $aa,
              3,
              aba,
              4,
              bba,
              5,
              cba,
              6,
              dba,
              7,
              eba,
              8,
              fba,
              9,
              gba,
              10,
              hba,
              11,
              kba,
            ],
          }),
          () => ({})
        );
        __c.Z7 = E(() => ({
          id: U("id", 1),
          brand: U("brand", 2),
          user: V("user", 3),
          tK: V("importBucket", 4),
          importKey: V("importKey", 5),
          iT: V("importFilename", 6),
          type: Va("type", 7, G7),
          ya: z("bundle", 11, __c.X7),
          XI: W("deactivated", 12),
          Kk: W("oneTimeUseDiscountable", 13),
          W: z("licensing", 25, __c.T0),
          cJ: V("design", 14),
          set: V("set", 15),
          JR: C("externalRef", 16, __c.I7),
          s0: C("derivationMetadata", 21, Laa),
          Pf: D("transformations", 24, lba),
          nf: W("restrictedAccess", 17),
          bv: Xa("aclAllowedActions", 18, Maa),
          Sf: D("acl", 19, Yaa),
          created: NH("created", 20),
          updated: NH("updated", 22),
          yh: C("accessToken", 23, __c.V0),
          $F: V("syncId", 26),
        }));
        var mba = E(() => ({
          background: W("background", 1),
          WI: W("cutout", 2),
          TK: W("isolated", 3),
          RL: W("photoholder", 4),
          mN: W("textholder", 5),
          nM: W("repeating", 6),
          gM: W("recolorable", 7),
          colorSpace: V("colorSpace", 8),
        }));
        var nba = F(() => [1, "A", 2, "R"]);
        var $7 = F(() => [1, "MERGE", 2, "REPLACE"]);
        var oba = E(() => ({
          data: z("data", 1, __c.S7),
          Z3: Wa("keywordsUpdatePolicy", 2, $7),
          K9: Wa("superKeywordsUpdatePolicy", 3, $7),
          J9: Wa("superKeywords2UpdatePolicy", 4, $7),
          l1: Wa("ethnicitiesUpdatePolicy", 5, $7),
          L1: Wa("facesUpdatePolicy", 6, $7),
        }));
        var pba = E(() => ({
          id: V(9),
          mimeType: V(10),
          Ra: U(1),
          key: U(2),
          quality: Va(3, dK),
          l: W(4),
          width: OH(5),
          height: OH(6),
          Zo: PH(7),
          rb: SH(8),
        }));
        var qba = E(() => ({ PR: D("files_", 2, pba) }));
        var rba = E(() => ({ id: V(3), mimeType: V(4), Ra: U(1), key: U(2) }));
        var sba = E(() => ({
          XL: D("processedFiles", 1, O7),
          $V: D("processedFiles_", 2, rba),
        }));
        var tba = E(() => ({
          data: z("data", 1, U7),
          H_: SH("clearFeatured", 2),
        }));
        var uba = E(() => ({ vx: (0, __c.YH)("localizedMetadata", 1, V7) }));
        var vba = E(() => ({ data: z("data", 1, __c.W7) }));
        E(() => ({
          id: U("id", 1),
          version: R("version", 2),
          commit: SH("commit", 3),
          reset: SH("reset", 4),
          z6: SH("newImport", 5),
          uK: Wa("importState", 7, __c.U0),
          jT: V("importMessage", 8),
          status: Wa("status", 9, K7),
          hT: Wa("importFailureType", 38, L7),
          nW: V("rejectionReason", 10),
          quality: OH("quality", 11),
          HH: Wa("ageRating", 12, M7),
          vK: V("importVersion", 13),
          y3: PH("importSize", 14),
          style: C("style", 15, mba),
          W: Wa("licensing", 16, __c.P0),
          XI: SH("deactivated", 17),
          Dp: SH("listed", 19),
          qf: C("spritesheetMetadata", 24, __c.Z0),
          HU: Xa("mintUrls", 25, dK),
          locale: V("locale", 26),
          MW: V("reviewedBy", 27),
          U8: Wa("setOperation", 28, nba),
          set: V("set", 29),
          wb: C("contentMetadata", 30, oba),
          Kl: C("colorInfo", 31, __c.T7),
          files: C("files", 32, qba),
          $V: C("processedFiles_", 33, sba),
          Tm: C("qualityMetadata", 35, tba),
          vx: C("localizedMetadata", 36, uba),
          NH: C("artistMetadata", 37, vba),
        }));
        var wba = F(() => [1, 2, { Ci: !0 }, 3, { Ci: !0 }, 4, 5]);
        __c.xba = E(() => ({ body: z(5, __c.NL) }));
        __c.a8 = E(() => ({ Gg: QH(1), tg: QH(2) }));
        E(() => ({ prompt: Va(1, wba) }));
        E(() => ({}));
        E(() => ({
          Q_: W("consentRequired", 5),
          e8: W("rejectAllRequired", 6),
          F0: W("doNotSellMyDataMessageRequired", 10),
          o0: QH("defaultConsented", 9),
          Q4: QH("minInformed", 8),
        }));
        var yba = E(() => ({
          wl: R(1),
          vl: R(2),
          Ek: R(7),
          mj: R(3),
          Dk: R(4),
          Xk: M(5),
          url: U(6),
          kd: PH(8),
        }));
        __c.zba = E(() => ({
          id: U(1),
          status: U(2),
          cd: RH(3),
          jd: D(13, yba),
          GG: RH(5),
          title: V(6),
          Ua: OH(7),
          pd: T(12),
          width: R(8),
          height: R(9),
          contentType: U(10),
          description: V(11),
        }));
        E(() => ({ video: z(1, jo) }));
        __c.b8 = E(() => ({ T: (0, __c.WH)(1), UL: U(2), QV: U(3) }));
        var Aba = E(() => ({ m7: R(1), o_: NH(2), n_: NH(3), UL: U(4) }));
        var Bba = E(() => ({ parts: D(1, Aba) }));
        E(() => ({ video: z(1, jo), q$: C(2, __c.b8), a5: C(3, Bba) }));
        E(() => ({ Oa: D(1, jo), Hg: V(2) }));
        E(() => ({ Oa: D(1, jo) }));
        E(() => ({ video: z(1, jo) }));
        E(() => ({ brand: U(1), user: U(2), d$: NH(3), e$: R(4) }));
        E(() => ({ video: z(1, jo) }));
        E(() => ({ video: z(1, jo) }));
        E(() => ({ video: z(1, jo) }));
      }.call(self, self._8b3e58fb1042841aa4d6377195d71189));
    },

    /***/ 3424: (_, __, r) => r(60329),

    /***/ 19280: (_, __, r) => r(60329),

    /***/ 60628: (_, __, r) => r(60329),

    /***/ 80224: (_, __, r) => r(60329),
  },
]);
//# sourceMappingURL=sourcemaps/88036148cf5f4aa4.js.map
