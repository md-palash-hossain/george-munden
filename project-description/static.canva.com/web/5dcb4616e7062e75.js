(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [196],
  {
    /***/ 40459: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(2868);
      self._8b3e58fb1042841aa4d6377195d71189 =
        self._8b3e58fb1042841aa4d6377195d71189 || {};
      (function (__c) {
        "use strict";
        var Cga = async function (a, b) {
            const c = __c.va(__c.ta([Bga, "create"])),
              [d, { xO: e }] = await Promise.all([
                a.ye.post(c, __c.uL.xa(b)),
                __webpack_require__.me(60329).then(() => ({ xO: __c.R6 })),
              ]);
            return e.la(d);
          },
          I$ = function (a) {
            if (a.Gg.oF)
              return (
                a.pF ||
                  ((a.pF = new Promise((b) => {
                    a.global.sensorsDataAnalytic201505 = "sa";
                    a.global.sa = {
                      para: {
                        name: "sa",
                        server_url: a.Ey.url,
                        cross_domain: !0,
                        show_log: a.mU,
                        send_type: a.Ey.yY ? "beacon" : "ajax",
                        preset_properties: {
                          latest_referrer_host: !0,
                          url: !1,
                        },
                      },
                    };
                    __webpack_require__
                      .me(32871)
                      .then(() => {
                        b(__c.v(a.global.sa));
                      })
                      .catch(() => {
                        b(void 0);
                      });
                  })),
                  a.pF.then((b) => {
                    null != b &&
                      null != a.Ey.Bg &&
                      null != b.identify &&
                      b.identify(a.Ey.Bg, !0);
                  })),
                a.pF
              );
          },
          J$ = function (a, b) {
            var c, d, e;
            return {
              app_name: null === (c = b.app) || void 0 === c ? void 0 : c.name,
              product_variant:
                null === (d = b.app) || void 0 === d ? void 0 : d.variant,
              experience: a.we,
              country_code:
                null === (e = a.location) || void 0 === e ? void 0 : e.qe,
              locale: a.locale,
              brand: a.Rj,
              experience_brand: a.Ff,
            };
          },
          K$ = function (a) {
            return __c.ic({
              anonymous_id: a.Bg,
              app_name: a.appName,
              brand: a.brand,
              cohort: a.Wq,
              country_code: a.qe,
              created_at: a.mB,
              current_subscriptions: a.m0,
              dispatch_group: a.C0,
              display_name: a.displayName,
              email: a.email,
              email_confirmed: a.N0,
              email_validated: a.O0,
              experience: a.we,
              experience_brand: a.Ff,
              external_app_platform: a.Ui,
              id: a.id,
              identification_token: a.u3,
              is_education_user: a.P3,
              is_c4ed_teacher: a.L3,
              is_district_teacher: a.O3,
              journey: a.X3,
              large_avatar_url: a.d4,
              last_brand_display_name: a.g4,
              last_opened_design: a.i4,
              last_tier: a.j4,
              locale: a.locale,
              marketing_email_consent: a.B4,
              name: a.name,
              open_id: a.Y6,
              personal_brand: a.q7,
              product_variant: a.aW,
              profession: a.F7,
              roles: a.y8,
              signup_date: a.m9,
              signup_referrer: a.pX,
              trialing_subscriptions: a.k$,
              user_created: a.v$,
              user_cohort: a.u$,
              user_id: a.xg,
              username: a.username,
              onboarding: a.W6,
              is_element_creator_brand_owner: a.Q3,
            });
          },
          L$ = function (a) {
            return new Date(a.ub.now()).toISOString();
          },
          Dga = async function (a, b, c) {
            await c.handleEvent(new __c.EN({ event: b })).catch(async () => {
              await M$(a, b);
            });
          },
          M$ = async function (a, b) {
            b = new __c.uL({ event: b, ET: a.BT() });
            await Cga(a.YO, b);
          },
          Ega = function (a, b) {
            return new Promise((c, d) => {
              const e = a.createElement("script");
              e.onload = () => c();
              e.onerror = () => d(Error("Failed to load URL: " + b));
              e.src = b;
              a.body.appendChild(e);
            });
          },
          Gga = function (a) {
            if (!a.cL) {
              const b = __c.va(__c.ua(__c.ta(["hm.js"]), a.config.tA, !0));
              a.cL = a.hU(a.document, `${Fga}${b}`).catch(() => {
                a.cL = void 0;
              });
            }
          },
          O$ = function (a, b) {
            a.dataLayer.push({
              event: "consent_state",
              consent: {
                essential: "yes",
                functionality: N$(b.Dw),
                performance: N$(b.performance),
                targeting: N$(b.Zt),
                social_media: N$(b.Py),
                gtm_yandex: N$(b.TS),
                gtm_amazon: N$(b.LS),
                gtm_outbrain: N$(b.PS),
                gtm_spotify: N$(b.RS),
                gtm_qs: N$(b.QS),
                gtm_tiktok_session: N$(b.SS),
                gtm_fpc_engagement_event: N$(b.MS),
                gtm_innovid: N$(b.NS),
              },
            });
          },
          Hga = function (a) {
            if (!a.global.document.getElementById(P$)) {
              a.dataLayer.push({ event: "gtm.js", "gtm.start": a.ub.now() });
              var b = a.global.document.createElement("script");
              b.id = P$;
              b.src = `https://www.googletagmanager.com/gtm.js?id=${a.config.containerId}&l=dataLayer`;
              b.async = !0;
              b.onerror = () => {
                a.stop();
              };
              a.global.document.head.appendChild(b);
            }
          },
          N$ = function (a) {
            return a ? "yes" : "no";
          },
          Iga = function (a) {
            const b = {};
            Object.entries(a).forEach((c) => {
              var [d, e] = c;
              void 0 !== e && (b[d] = e);
            });
            return b;
          },
          Q$ = function (a) {
            const b = {};
            for (const [c, d] of Object.entries(a))
              if (Array.isArray(d))
                0 !== d.length &&
                  (__c.fc(d)
                    ? (b[c] = d)
                    : (b[c] = d.map((e) => JSON.stringify(Q$(e)))));
              else if ("object" === typeof d) b[c] = Q$(d);
              else if ("string" === typeof d) b[c] = d;
              else if ("number" === typeof d) b[c] = d;
              else if ("boolean" === typeof d) b[c] = d;
              else throw new __c.w(d);
            return b;
          },
          R$ = function (a) {
            const b = {};
            for (const c of Object.entries(a)) {
              const [d, e] = c;
              Array.isArray(e)
                ? "string" === typeof e[0]
                  ? (b[d] = e)
                  : (b[d] = e.map((f) => JSON.stringify(f)))
                : (b[d] = "object" === typeof e ? JSON.stringify(e) : e);
            }
            return b;
          },
          S$ = function (a) {
            var b, c, d;
            if (null === (b = a.Ts) || void 0 === b ? 0 : b.status) {
              switch (null === (c = a.Ts) || void 0 === c ? void 0 : c.status) {
                case 2:
                  a = "online";
                  break;
                case 1:
                  a = "offline";
                  break;
                case 3:
                  return {};
                default:
                  throw new __c.w(
                    null === (d = a.Ts) || void 0 === d ? void 0 : d.status
                  );
              }
              return { network: { status: a } };
            }
            return {};
          },
          Bga = "ae",
          Jga = __webpack_require__(22188).EH;
        var T$ = __webpack_require__,
          Kga = T$(37051),
          Lga = T$.n_x(Kga);
        var Mga = new Set(
          "design_create design_first_edited design_open design_opened design_publish editor_template_applied mobile_design_create_enriched new_event_partnership_artwork_created partnership_artwork_created post_publish_dialog_clicked printegration_page_content_selected printegration_page_loaded publish_button_clicked publish_completed publish_endpoint_clicked publish_print_confirm_bleed_continue_clicked publish_print_confirm_order_details_continue_clicked publish_print_funnel_step_selected publish_print_funnel_step_selected_v2 publish_print_margin_check_continue_clicked publish_print_panel_shown publish_print_proof_pdf_download publish_print_proof_review_continue_clicked publish_print_resolution_check_continue_clicked publish_print_shipping_details_continue_clicked signup_completed".split(
            " "
          )
        );
        var U$;
        U$ = class {
          constructor(a, b, c, d, e, f) {
            f = void 0 === f ? __c.Bb : f;
            this.YO = a;
            this.OA = b;
            this.gw = c;
            this.Km = d;
            this.BT = e;
            this.ub = f;
            Jga(async () => {
              if (this.Km) {
                var g = new __c.GN({ JT: 1 === this.Km.status }),
                  h = await this.OA;
                await (null === h || void 0 === h ? void 0 : h.wG(g));
              }
            });
          }
          static create(a, b, c, d, e) {
            return new U$(a, c, b, d, e);
          }
          identify(a) {
            var b, c, d;
            const e = Object.assign(
              {},
              {
                appName:
                  null === (b = a.Dc.app) || void 0 === b ? void 0 : b.name,
                aW:
                  null === (c = a.Dc.app) || void 0 === c ? void 0 : c.variant,
                we: a.Da.we,
                qe:
                  null === (d = a.Da.location) || void 0 === d ? void 0 : d.qe,
                locale: a.Da.locale,
                brand: a.Da.Rj,
                Ff: a.Da.Ff,
              },
              a.Az
            );
            a = new __c.pL(
              Object.assign({}, a, {
                Da: new __c.oL(Object.assign({}, a.Da, { qF: L$(this) })),
                Az: JSON.stringify(K$(e)),
              })
            );
            return this.dispatchEvent(a);
          }
          page(a) {
            const b = Object.assign({}, J$(a.Da, a.Dc), a.Fd);
            a = new __c.qL(
              Object.assign({}, a, {
                Da: new __c.oL(Object.assign({}, a.Da, { qF: L$(this) })),
                Fd: JSON.stringify(b),
              })
            );
            return this.dispatchEvent(a);
          }
          track(a) {
            var b = Object,
              c = b.assign;
            var d = a.Da;
            d = Mga.has(a.event) ? d.Ff : void 0;
            b = c.call(b, {}, { experience_brand: d }, a.Fd);
            a = new __c.sL(
              Object.assign({}, a, {
                Da: new __c.oL(Object.assign({}, a.Da, { qF: L$(this) })),
                Fd: JSON.stringify(b),
              })
            );
            return this.dispatchEvent(a);
          }
          async reset() {
            const a = await this.OA;
            a && this.gw && (await a.PF(new __c.IN({ PP: !0 })));
          }
          async dispatchEvent(a) {
            const b = await this.OA;
            b && this.gw ? await Dga(this, a, b) : await M$(this, a);
          }
          Le() {}
        };
        __c.cd = {};
        __c.cd.XN = U$;
        __c.cd.CT = function (a) {
          a = a.split(";");
          for (let b = 0; b < a.length; b++)
            if (0 === a[b].trim().indexOf("CAI=")) return !1;
          return !0;
        };
        var V$, Fga;
        V$ = class {
          constructor(a, b, c = Ega) {
            this.document = a;
            this.config = b;
            this.hU = c;
          }
          async track() {}
          async identify() {}
          async page() {}
          async reset() {}
          static create(a, b, c) {
            a = new V$(a, b);
            a.Le(c);
            return a;
          }
          Le(a) {
            a.Zt && Gga(this);
          }
        };
        Fga = "https://hm.baidu.com";
        __c.gd = {};
        __c.gd.aO = V$;
        var W$;
        W$ = class {
          constructor(a, b, c) {
            this.config = a;
            this.getUserId = b;
            this.appboy = c;
            this.active = !1;
          }
          static create(a, b, c, d = Lga()) {
            b = new W$(b, c, d);
            a.$H && b.start();
            return b;
          }
          start() {
            if (!this.active) {
              this.appboy.initialize(this.config.tA, {
                baseUrl: "sdk.iad-01.braze.com",
                manageServiceWorkerExternally: !0,
              });
              var a = this.getUserId();
              a && this.appboy.changeUser(a);
              this.appboy.openSession();
              this.active = !0;
            }
          }
          stop() {
            !1 !== this.active &&
              (this.appboy.wipeData(),
              this.appboy.destroy(),
              (this.active = !1));
          }
          Le(a) {
            a.$H ? this.start() : this.stop();
          }
          async identify(a) {
            this.active && a.Da.xg && this.appboy.changeUser(a.Da.xg);
          }
          async page() {}
          async track() {}
          async reset() {}
        };
        __c.hd = {};
        __c.hd.bO = W$;
        var X$, P$;
        X$ = class {
          constructor(a, b, c) {
            this.config = a;
            this.ub = b;
            this.global = c;
            this.active = !1;
            this.dataLayer = [];
            __c.r(
              void 0 === c.dataLayer,
              "dataLayer is already initialized. You might be creating more than 1 instance of GoogleTagManagerPlugin."
            );
            c.dataLayer = this.dataLayer;
          }
          static create(a, b, c, d) {
            d = void 0 === d ? __c.Bb : d;
            a = new X$(a, d, c);
            b.hK && (a.start(), O$(a, b));
            return a;
          }
          async identify() {}
          async page(a) {
            if (this.active) {
              var b = {
                type: "TRACK",
                Da: a.Da,
                Dc: a.Dc,
                Jh: a.Jh,
                event: "Loaded a Page",
                Fd: {},
              };
              this.track(b);
              if ((a = a.name))
                (b = Object.assign({}, b, {
                  event: `Viewed ${a} Page`,
                  Fd: { name: a },
                })),
                  this.track(b);
            }
          }
          async track(a) {
            if (this.active) {
              var b = Object.assign({}, J$(a.Da, a.Dc), a.Fd, {
                userId: a.Da.xg,
                segmentAnonymousId: a.Da.Bg,
              });
              a = Object.assign({}, Iga(b), { event: a.event });
              this.dataLayer.push(a);
            }
          }
          async reset() {}
          Le(a) {
            a.hK ? (this.start(), O$(this, a)) : (O$(this, a), this.stop());
          }
          start() {
            this.active = !0;
            Hga(this);
          }
          stop() {
            this.active = !1;
          }
        };
        P$ = "gtm-plugin-script-tag";
        __c.dd = {};
        __c.dd.jO = X$;
        var Y$;
        Y$ = class {
          constructor(a) {
            this.FM = a;
          }
          static create(a) {
            return new Y$(a);
          }
          identify() {
            return Promise.resolve();
          }
          page() {
            return Promise.resolve();
          }
          async track(a) {
            const b = Q$(a.Fd);
            this.FM.tN(a.event, b);
          }
          async reset() {}
          Le(a) {
            a.aK || this.FM.stop();
          }
        };
        __c.id = {};
        __c.id.oO = Y$;
        var Z$, Qga, Oga, Pga, Nga;
        Z$ = class {
          constructor(a, b, c, d, e = __c.sb, f = __c.Bb) {
            this.config = a;
            this.global = c;
            this.bj = d;
            this.CY = e;
            this.ub = f;
            this.active = b.EL;
          }
          static create(a, b, c, d) {
            return new Z$(a, b, c, d);
          }
          identify() {
            return Promise.resolve(void 0);
          }
          page() {
            return Promise.resolve(void 0);
          }
          async track(a) {
            if (this.active) {
              var b;
              if (
                (b =
                  "undefined" === typeof URLSearchParams
                    ? null
                    : new URLSearchParams(this.global.location.search).get(
                        "ovid"
                      ))
              ) {
                a = a.event;
                var c = Nga.get(a);
                c &&
                  ((b = {
                    account_id: this.config.QO,
                    project_id: this.config.projectId,
                    client_name: Oga,
                    client_version: Pga,
                    anonymize_ip: !0,
                    enrich_decisions: !0,
                    visitors: [
                      {
                        visitor_id: b,
                        snapshots: [
                          {
                            decisions: [],
                            events: [
                              {
                                timestamp: this.ub.now(),
                                uuid: this.CY(),
                                key: a,
                                entity_id: c,
                                tags: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  }),
                  this.sendEvent(b));
              }
            }
          }
          async reset() {}
          sendEvent(a) {
            a = {
              url: Qga,
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(a),
            };
            return this.bj
              .Ay(a)
              .then(() => {})
              .catch(() => {});
          }
          Le(a) {
            this.active = a.EL;
          }
        };
        Qga = "https://logx.optimizely.com/v1/events";
        Oga = "canva/optimizely-analytics-plugin";
        Pga = "0.0.1";
        Nga = new Map([
          ["signup_submitted", "17936623469"],
          ["signup_completed", "17963771082"],
          ["login_submitted", "17924893243"],
          ["login_success", "17971061254"],
          ["password_changed", "17929437843"],
          ["authenticating_item_clicked", "17971740897"],
          ["homepage_visit", "17953652549"],
          ["pre_signup_step_clicked", "17904425976"],
        ]);
        __c.ed = {};
        __c.ed.sO = Z$;
        var $$;
        $$ = class {
          constructor(a, b, c) {
            this.Kt = b;
            this.global = c;
            this.active = !1;
            a.oF && (this.active = !0);
          }
          static create(a, b, c) {
            return new $$(a, b, c);
          }
          async identify(a) {
            var b, c, d, e;
            if (this.active) {
              var f = await I$(this.Kt);
              null != f &&
                f.login &&
                f.setProfile &&
                (f.login(null !== (b = a.Da.xg) && void 0 !== b ? b : ""),
                (b = __c.qc(K$(a.Az))),
                f.setProfile(
                  R$(
                    __c.ic(
                      Object.assign(
                        {},
                        {
                          app_name:
                            null === (c = a.Dc.app) || void 0 === c
                              ? void 0
                              : c.name,
                          experience: a.Da.we,
                          country_code:
                            null === (d = a.Da.location) || void 0 === d
                              ? void 0
                              : d.qe,
                          locale: a.Da.locale,
                          brand: a.Da.Rj,
                          experience_brand: a.Da.Ff,
                          product_variant:
                            null === (e = a.Dc.app) || void 0 === e
                              ? void 0
                              : e.variant,
                        },
                        S$(a.Dc),
                        b
                      )
                    )
                  )
                ));
            }
          }
          async page(a) {
            var b, c, d, e;
            if (this.active) {
              var f = await I$(this.Kt);
              if (f) {
                const g = [
                  "utm_source",
                  "utm_medium",
                  "utm_term",
                  "utm_content",
                  "utm_campaign",
                ];
                if (f.registerPage) {
                  const h = new URLSearchParams(this.global.location.search),
                    k = {};
                  g.forEach((l) => {
                    const m = h.get(l);
                    m && (k[l] = m);
                  });
                  f.registerPage(
                    Object.assign({}, k, {
                      referrer:
                        null === (b = a.Da.page) || void 0 === b
                          ? void 0
                          : b.referrer,
                      title: "",
                      url:
                        null === (c = a.Da.page) || void 0 === c
                          ? void 0
                          : c.url,
                      path:
                        null === (d = a.Da.page) || void 0 === d
                          ? void 0
                          : d.path,
                      search:
                        null === (e = a.Da.page) || void 0 === e
                          ? void 0
                          : e.search,
                      userAgent: a.Dc.userAgent,
                    })
                  );
                }
                return this.track({
                  type: "TRACK",
                  event: "page_visit",
                  Da: a.Da,
                  Dc: a.Dc,
                  Fd: {},
                  Jh: a.Jh,
                });
              }
            }
          }
          async track(a) {
            var b, c, d;
            if (this.active) {
              var e = await I$(this.Kt);
              if (null != e) {
                const f = __c.qc(a.Fd);
                e.track &&
                  e.track(
                    a.event,
                    R$(
                      __c.ic(
                        Object.assign(
                          {},
                          {
                            app_name:
                              null === (b = a.Dc.app) || void 0 === b
                                ? void 0
                                : b.name,
                            experience: a.Da.we,
                            country_code:
                              null === (c = a.Da.location) || void 0 === c
                                ? void 0
                                : c.qe,
                            locale: a.Da.locale,
                            brand: a.Da.Rj,
                            experience_brand: a.Da.Ff,
                            product_variant:
                              null === (d = a.Dc.app) || void 0 === d
                                ? void 0
                                : d.variant,
                          },
                          S$(a.Dc),
                          f
                        )
                      )
                    )
                  );
              }
            }
          }
          async reset() {
            const a = await I$(this.Kt);
            null != a && a.logout && a.logout(!0);
          }
          Le(a) {
            this.active = a.oF;
            this.Kt.Le(a);
          }
        };
        __c.jd = {};
        __c.jd.AO = $$;
      }.call(self, self._8b3e58fb1042841aa4d6377195d71189));
    },

    /***/ 73978: (_, __, r) => r(40459),

    /***/ 32342: (_, __, r) => r(40459),

    /***/ 89512: (_, __, r) => r(40459),

    /***/ 82794: (_, __, r) => r(40459),

    /***/ 49349: (_, __, r) => r(40459),

    /***/ 21734: (_, __, r) => r(40459),

    /***/ 31937: (_, __, r) => r(40459),
  },
]);
//# sourceMappingURL=sourcemaps/5dcb4616e7062e75.js.map
