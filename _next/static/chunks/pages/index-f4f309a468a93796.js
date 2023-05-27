(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        69661: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return w
                }
            });
            var t = r(63366),
                i = r(87462),
                o = r(67294),
                a = r(86010),
                s = r(27192),
                c = r(11496),
                d = r(71657),
                l = r(88169),
                u = r(85893),
                m = (0, l.Z)((0, u.jsx)("path", {
                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                }), "Person"),
                p = r(28979);

            function g(e) {
                return (0, p.Z)("MuiAvatar", e)
            }(0, r(76087).Z)("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
            const h = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"],
                f = (0, c.ZP)("div", {
                    name: "MuiAvatar",
                    slot: "Root",
                    overridesResolver: (e, n) => {
                        const {
                            ownerState: r
                        } = e;
                        return [n.root, n[r.variant], r.colorDefault && n.colorDefault]
                    }
                })((({
                    theme: e,
                    ownerState: n
                }) => (0, i.Z)({
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(20),
                    lineHeight: 1,
                    borderRadius: "50%",
                    overflow: "hidden",
                    userSelect: "none"
                }, "rounded" === n.variant && {
                    borderRadius: e.shape.borderRadius
                }, "square" === n.variant && {
                    borderRadius: 0
                }, n.colorDefault && {
                    color: e.palette.background.default,
                    backgroundColor: "light" === e.palette.mode ? e.palette.grey[400] : e.palette.grey[600]
                }))),
                x = (0, c.ZP)("img", {
                    name: "MuiAvatar",
                    slot: "Img",
                    overridesResolver: (e, n) => n.img
                })({
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    objectFit: "cover",
                    color: "transparent",
                    textIndent: 1e4
                }),
                v = (0, c.ZP)(m, {
                    name: "MuiAvatar",
                    slot: "Fallback",
                    overridesResolver: (e, n) => n.fallback
                })({
                    width: "75%",
                    height: "75%"
                });
            var w = o.forwardRef((function(e, n) {
                const r = (0, d.Z)({
                        props: e,
                        name: "MuiAvatar"
                    }),
                    {
                        alt: c,
                        children: l,
                        className: m,
                        component: p = "div",
                        imgProps: w,
                        sizes: Z,
                        src: S,
                        srcSet: k,
                        variant: b = "circular"
                    } = r,
                    y = (0, t.Z)(r, h);
                let j = null;
                const $ = function({
                        crossOrigin: e,
                        referrerPolicy: n,
                        src: r,
                        srcSet: t
                    }) {
                        const [i, a] = o.useState(!1);
                        return o.useEffect((() => {
                            if (!r && !t) return;
                            a(!1);
                            let i = !0;
                            const o = new Image;
                            return o.onload = () => {
                                i && a("loaded")
                            }, o.onerror = () => {
                                i && a("error")
                            }, o.crossOrigin = e, o.referrerPolicy = n, o.src = r, t && (o.srcset = t), () => {
                                i = !1
                            }
                        }), [e, n, r, t]), i
                    }((0, i.Z)({}, w, {
                        src: S,
                        srcSet: k
                    })),
                    z = S || k,
                    M = z && "error" !== $,
                    C = (0, i.Z)({}, r, {
                        colorDefault: !M,
                        component: p,
                        variant: b
                    }),
                    N = (e => {
                        const {
                            classes: n,
                            variant: r,
                            colorDefault: t
                        } = e, i = {
                            root: ["root", r, t && "colorDefault"],
                            img: ["img"],
                            fallback: ["fallback"]
                        };
                        return (0, s.Z)(i, g, n)
                    })(C);
                return j = M ? (0, u.jsx)(x, (0, i.Z)({
                    alt: c,
                    src: S,
                    srcSet: k,
                    sizes: Z,
                    ownerState: C,
                    className: N.img
                }, w)) : null != l ? l : z && c ? c[0] : (0, u.jsx)(v, {
                    className: N.fallback
                }), (0, u.jsx)(f, (0, i.Z)({
                    as: p,
                    ownerState: C,
                    className: (0, a.Z)(N.root, m),
                    ref: n
                }, y, {
                    children: j
                }))
            }))
        },
        66242: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return f
                }
            });
            var t = r(87462),
                i = r(63366),
                o = r(67294),
                a = r(86010),
                s = r(27192),
                c = r(11496),
                d = r(71657),
                l = r(55113),
                u = r(28979);

            function m(e) {
                return (0, u.Z)("MuiCard", e)
            }(0, r(76087).Z)("MuiCard", ["root"]);
            var p = r(85893);
            const g = ["className", "raised"],
                h = (0, c.ZP)(l.Z, {
                    name: "MuiCard",
                    slot: "Root",
                    overridesResolver: (e, n) => n.root
                })((() => ({
                    overflow: "hidden"
                })));
            var f = o.forwardRef((function(e, n) {
                const r = (0, d.Z)({
                        props: e,
                        name: "MuiCard"
                    }),
                    {
                        className: o,
                        raised: c = !1
                    } = r,
                    l = (0, i.Z)(r, g),
                    u = (0, t.Z)({}, r, {
                        raised: c
                    }),
                    f = (e => {
                        const {
                            classes: n
                        } = e;
                        return (0, s.Z)({
                            root: ["root"]
                        }, m, n)
                    })(u);
                return (0, p.jsx)(h, (0, t.Z)({
                    className: (0, a.Z)(f.root, o),
                    elevation: c ? 8 : void 0,
                    ref: n,
                    ownerState: u
                }, l))
            }))
        },
        44267: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return h
                }
            });
            var t = r(87462),
                i = r(63366),
                o = r(67294),
                a = r(86010),
                s = r(27192),
                c = r(11496),
                d = r(71657),
                l = r(28979);

            function u(e) {
                return (0, l.Z)("MuiCardContent", e)
            }(0, r(76087).Z)("MuiCardContent", ["root"]);
            var m = r(85893);
            const p = ["className", "component"],
                g = (0, c.ZP)("div", {
                    name: "MuiCardContent",
                    slot: "Root",
                    overridesResolver: (e, n) => n.root
                })((() => ({
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 24
                    }
                })));
            var h = o.forwardRef((function(e, n) {
                const r = (0, d.Z)({
                        props: e,
                        name: "MuiCardContent"
                    }),
                    {
                        className: o,
                        component: c = "div"
                    } = r,
                    l = (0, i.Z)(r, p),
                    h = (0, t.Z)({}, r, {
                        component: c
                    }),
                    f = (e => {
                        const {
                            classes: n
                        } = e;
                        return (0, s.Z)({
                            root: ["root"]
                        }, u, n)
                    })(h);
                return (0, m.jsx)(g, (0, t.Z)({
                    as: c,
                    className: (0, a.Z)(f.root, o),
                    ownerState: h,
                    ref: n
                }, l))
            }))
        },
        83965: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return x
                }
            });
            var t = r(63366),
                i = r(87462),
                o = r(67294),
                a = r(86010),
                s = r(27192),
                c = r(71657),
                d = r(11496),
                l = r(28979);

            function u(e) {
                return (0, l.Z)("MuiCardMedia", e)
            }(0, r(76087).Z)("MuiCardMedia", ["root", "media", "img"]);
            var m = r(85893);
            const p = ["children", "className", "component", "image", "src", "style"],
                g = (0, d.ZP)("div", {
                    name: "MuiCardMedia",
                    slot: "Root",
                    overridesResolver: (e, n) => {
                        const {
                            ownerState: r
                        } = e, {
                            isMediaComponent: t,
                            isImageComponent: i
                        } = r;
                        return [n.root, t && n.media, i && n.img]
                    }
                })((({
                    ownerState: e
                }) => (0, i.Z)({
                    display: "block",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }, e.isMediaComponent && {
                    width: "100%"
                }, e.isImageComponent && {
                    objectFit: "cover"
                }))),
                h = ["video", "audio", "picture", "iframe", "img"],
                f = ["picture", "img"];
            var x = o.forwardRef((function(e, n) {
                const r = (0, c.Z)({
                        props: e,
                        name: "MuiCardMedia"
                    }),
                    {
                        children: o,
                        className: d,
                        component: l = "div",
                        image: x,
                        src: v,
                        style: w
                    } = r,
                    Z = (0, t.Z)(r, p),
                    S = -1 !== h.indexOf(l),
                    k = !S && x ? (0, i.Z)({
                        backgroundImage: `url("${x}")`
                    }, w) : w,
                    b = (0, i.Z)({}, r, {
                        component: l,
                        isMediaComponent: S,
                        isImageComponent: -1 !== f.indexOf(l)
                    }),
                    y = (e => {
                        const {
                            classes: n,
                            isMediaComponent: r,
                            isImageComponent: t
                        } = e, i = {
                            root: ["root", r && "media", t && "img"]
                        };
                        return (0, s.Z)(i, u, n)
                    })(b);
                return (0, m.jsx)(g, (0, i.Z)({
                    className: (0, a.Z)(y.root, d),
                    as: l,
                    role: !S && x ? "img" : void 0,
                    ref: n,
                    style: k,
                    ownerState: b,
                    src: S ? x || v : void 0
                }, Z, {
                    children: o
                }))
            }))
        },
        86886: function(e, n, r) {
            "use strict";
            r.d(n, {
                ZP: function() {
                    return k
                }
            });
            var t = r(63366),
                i = r(87462),
                o = r(67294),
                a = r(86010),
                s = r(95408),
                c = r(39707),
                d = r(27192),
                l = r(11496),
                u = r(71657);
            var m = o.createContext(),
                p = r(28979);

            function g(e) {
                return (0, p.Z)("MuiGrid", e)
            }
            const h = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            var f = (0, r(76087).Z)("MuiGrid", ["root", "container", "item", "zeroMinWidth", ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e => `spacing-xs-${e}`)), ...["column-reverse", "column", "row-reverse", "row"].map((e => `direction-xs-${e}`)), ...["nowrap", "wrap-reverse", "wrap"].map((e => `wrap-xs-${e}`)), ...h.map((e => `grid-xs-${e}`)), ...h.map((e => `grid-sm-${e}`)), ...h.map((e => `grid-md-${e}`)), ...h.map((e => `grid-lg-${e}`)), ...h.map((e => `grid-xl-${e}`))]),
                x = r(85893);
            const v = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "lg", "md", "rowSpacing", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"];

            function w(e) {
                const n = parseFloat(e);
                return `${n}${String(e).replace(String(n),"")||"px"}`
            }

            function Z(e, n, r = {}) {
                if (!n || !e || e <= 0) return [];
                if ("string" === typeof e && !Number.isNaN(Number(e)) || "number" === typeof e) return [r[`spacing-xs-${String(e)}`] || `spacing-xs-${String(e)}`];
                const {
                    xs: t,
                    sm: i,
                    md: o,
                    lg: a,
                    xl: s
                } = e;
                return [Number(t) > 0 && (r[`spacing-xs-${String(t)}`] || `spacing-xs-${String(t)}`), Number(i) > 0 && (r[`spacing-sm-${String(i)}`] || `spacing-sm-${String(i)}`), Number(o) > 0 && (r[`spacing-md-${String(o)}`] || `spacing-md-${String(o)}`), Number(a) > 0 && (r[`spacing-lg-${String(a)}`] || `spacing-lg-${String(a)}`), Number(s) > 0 && (r[`spacing-xl-${String(s)}`] || `spacing-xl-${String(s)}`)]
            }
            const S = (0, l.ZP)("div", {
                name: "MuiGrid",
                slot: "Root",
                overridesResolver: (e, n) => {
                    const {
                        container: r,
                        direction: t,
                        item: i,
                        lg: o,
                        md: a,
                        sm: s,
                        spacing: c,
                        wrap: d,
                        xl: l,
                        xs: u,
                        zeroMinWidth: m
                    } = e.ownerState;
                    return [n.root, r && n.container, i && n.item, m && n.zeroMinWidth, ...Z(c, r, n), "row" !== t && n[`direction-xs-${String(t)}`], "wrap" !== d && n[`wrap-xs-${String(d)}`], !1 !== u && n[`grid-xs-${String(u)}`], !1 !== s && n[`grid-sm-${String(s)}`], !1 !== a && n[`grid-md-${String(a)}`], !1 !== o && n[`grid-lg-${String(o)}`], !1 !== l && n[`grid-xl-${String(l)}`]]
                }
            })((({
                ownerState: e
            }) => (0, i.Z)({
                boxSizing: "border-box"
            }, e.container && {
                display: "flex",
                flexWrap: "wrap",
                width: "100%"
            }, e.item && {
                margin: 0
            }, e.zeroMinWidth && {
                minWidth: 0
            }, "wrap" !== e.wrap && {
                flexWrap: e.wrap
            })), (function({
                theme: e,
                ownerState: n
            }) {
                const r = (0, s.P$)({
                    values: n.direction,
                    breakpoints: e.breakpoints.values
                });
                return (0, s.k9)({
                    theme: e
                }, r, (e => {
                    const n = {
                        flexDirection: e
                    };
                    return 0 === e.indexOf("column") && (n[`& > .${f.item}`] = {
                        maxWidth: "none"
                    }), n
                }))
            }), (function({
                theme: e,
                ownerState: n
            }) {
                const {
                    container: r,
                    rowSpacing: t
                } = n;
                let i = {};
                if (r && 0 !== t) {
                    const n = (0, s.P$)({
                        values: t,
                        breakpoints: e.breakpoints.values
                    });
                    i = (0, s.k9)({
                        theme: e
                    }, n, (n => {
                        const r = e.spacing(n);
                        return "0px" !== r ? {
                            marginTop: `-${w(r)}`,
                            [`& > .${f.item}`]: {
                                paddingTop: w(r)
                            }
                        } : {}
                    }))
                }
                return i
            }), (function({
                theme: e,
                ownerState: n
            }) {
                const {
                    container: r,
                    columnSpacing: t
                } = n;
                let i = {};
                if (r && 0 !== t) {
                    const n = (0, s.P$)({
                        values: t,
                        breakpoints: e.breakpoints.values
                    });
                    i = (0, s.k9)({
                        theme: e
                    }, n, (n => {
                        const r = e.spacing(n);
                        return "0px" !== r ? {
                            width: `calc(100% + ${w(r)})`,
                            marginLeft: `-${w(r)}`,
                            [`& > .${f.item}`]: {
                                paddingLeft: w(r)
                            }
                        } : {}
                    }))
                }
                return i
            }), (function({
                theme: e,
                ownerState: n
            }) {
                let r;
                return e.breakpoints.keys.reduce(((t, o) => {
                    let a = {};
                    if (n[o] && (r = n[o]), !r) return t;
                    if (!0 === r) a = {
                        flexBasis: 0,
                        flexGrow: 1,
                        maxWidth: "100%"
                    };
                    else if ("auto" === r) a = {
                        flexBasis: "auto",
                        flexGrow: 0,
                        flexShrink: 0,
                        maxWidth: "none",
                        width: "auto"
                    };
                    else {
                        const c = (0, s.P$)({
                                values: n.columns,
                                breakpoints: e.breakpoints.values
                            }),
                            d = "object" === typeof c ? c[o] : c;
                        if (void 0 === d || null === d) return t;
                        const l = Math.round(r / d * 1e8) / 1e6 + "%";
                        let u = {};
                        if (n.container && n.item && 0 !== n.columnSpacing) {
                            const r = e.spacing(n.columnSpacing);
                            if ("0px" !== r) {
                                const e = `calc(${l} + ${w(r)})`;
                                u = {
                                    flexBasis: e,
                                    maxWidth: e
                                }
                            }
                        }
                        a = (0, i.Z)({
                            flexBasis: l,
                            flexGrow: 0,
                            maxWidth: l
                        }, u)
                    }
                    return 0 === e.breakpoints.values[o] ? Object.assign(t, a) : t[e.breakpoints.up(o)] = a, t
                }), {})
            }));
            var k = o.forwardRef((function(e, n) {
                const r = (0, u.Z)({
                        props: e,
                        name: "MuiGrid"
                    }),
                    s = (0, c.Z)(r),
                    {
                        className: l,
                        columns: p,
                        columnSpacing: h,
                        component: f = "div",
                        container: w = !1,
                        direction: k = "row",
                        item: b = !1,
                        lg: y = !1,
                        md: j = !1,
                        rowSpacing: $,
                        sm: z = !1,
                        spacing: M = 0,
                        wrap: C = "wrap",
                        xl: N = !1,
                        xs: P = !1,
                        zeroMinWidth: R = !1
                    } = s,
                    B = (0, t.Z)(s, v),
                    W = $ || M,
                    E = h || M,
                    T = o.useContext(m),
                    _ = w ? p || 12 : T,
                    I = (0, i.Z)({}, s, {
                        columns: _,
                        container: w,
                        direction: k,
                        item: b,
                        lg: y,
                        md: j,
                        sm: z,
                        rowSpacing: W,
                        columnSpacing: E,
                        wrap: C,
                        xl: N,
                        xs: P,
                        zeroMinWidth: R
                    }),
                    L = (e => {
                        const {
                            classes: n,
                            container: r,
                            direction: t,
                            item: i,
                            lg: o,
                            md: a,
                            sm: s,
                            spacing: c,
                            wrap: l,
                            xl: u,
                            xs: m,
                            zeroMinWidth: p
                        } = e, h = {
                            root: ["root", r && "container", i && "item", p && "zeroMinWidth", ...Z(c, r), "row" !== t && `direction-xs-${String(t)}`, "wrap" !== l && `wrap-xs-${String(l)}`, !1 !== m && `grid-xs-${String(m)}`, !1 !== s && `grid-sm-${String(s)}`, !1 !== a && `grid-md-${String(a)}`, !1 !== o && `grid-lg-${String(o)}`, !1 !== u && `grid-xl-${String(u)}`]
                        };
                        return (0, d.Z)(h, g, n)
                    })(I);
                return (0, x.jsx)(m.Provider, {
                    value: _,
                    children: (0, x.jsx)(S, (0, i.Z)({
                        ownerState: I,
                        className: (0, a.Z)(L.root, l),
                        as: f,
                        ref: n
                    }, B))
                })
            }))
        },
        45301: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(30441)
            }])
        },
        30441: function(e, n, r) {
            "use strict";
            r.r(n);
            var t = r(85893),
                i = r(87357),
                o = r(83321),
                a = r(66242),
                s = r(83965),
                c = r(69661),
                d = r(44267),
                l = r(86886),
                u = r(15861),
                m = r(41664),
                p = [{
                    name: "zkSync Era",
                    description: "zkBoost is built on top of zkSync Era, a cutting-edge layer-2 scaling solution for Ethereum."
                }, {
                    name: "Launchpad Services",
                    description: "zkBoost offers a launchpad for blockchain projects, enabling them to raise funds, launch tokens, and access a range of support services"
                }, {
                    name: "Token Standards",
                    description: "zkBoost supports a variety of token standards, including ERC-20, ERC-721, and ERC-1155"
                }, {
                    name: "User-Friendly Interface",
                    description: "The zkBoost platform is designed to be user-friendly, with a streamlined interface that makes it easy for anyone"
                }, {
                    name: "Robust Security",
                    description: "zkBoost places a strong emphasis on security, using cutting-edge technologies such as zero-knowledge proofs and multi-factor authentication"
                }, {
                    name: "Trustworthy Verification",
                    description: "zkBoost is built on top of zkSync Era, a cutting-edge layer-2 scaling solution for Ethereum."
                }, {
                    name: "Strategic Partnerships",
                    description: "zkBoost has established strategic partnerships with a variety of leading companies and organizations in the blockchain space"
                }, {
                    name: "Native Token",
                    description: "The zkBoost platform has its own native token, ZKB, which can be used for a variety of purposes"
                }],
                g = [{
                    name: "Presale",
                    description: "Best launchpad with best service"
                }, {
                    name: "Premium Launch",
                    description: "For tier 1 launchpad"
                }, {
                    name: "Fairlaunch",
                    description: "Launch tokens with zkBoost"
                }, {
                    name: "zkBoost Swap",
                    description: "Swap and farm tokens $ZKB"
                }, {
                    name: "zkBoost Locker",
                    description: "Locking liquidity and token with zkBoost"
                }, {
                    name: "zkBoost Factory",
                    description: "Create token with few clicks"
                }, {
                    name: "zkBoost Wallet",
                    description: "Wallet with security and transparency"
                }];
            n.default = function() {
                return (0, t.jsxs)(i.Z, {
                    width: "100%",
                    sx: {
                        display: "flex",
                        textAlign: "center",
                        flexDirection: "column"
                    },
                    children: [(0, t.jsx)(u.Z, {
                        variant: "h3",
                        sx: {
                            marginX: "auto",
                            marginTop: "80px"
                        },
                        children: "The Launchpad Protocol for Everyone!"
                    }), (0, t.jsxs)(u.Z, {
                        variant: "body1",
                        sx: {
                            marginX: "auto",
                            marginY: "20px",
                            fontSize: "25px"
                        },
                        children: ["zkBoost helps everyone to create their own tokens and token sales in few seconds.", (0, t.jsx)("br", {}), "Tokens created on zkBoost will be verified and published on explorer websites."]
                    }), (0, t.jsxs)(i.Z, {
                        children: [(0, t.jsx)(m.default, {
                            href: "/launchpad",
                            children: (0, t.jsx)(o.Z, {
                                variant: "outlined",
                                sx: {
                                    margin: 3.5
                                },
                                children: "Launchpad list"
                            })
                        }), (0, t.jsx)(m.default, {
                            href: "/create/presale",
                            children: (0, t.jsx)(o.Z, {
                                variant: "contained",
                                sx: {
                                    margin: 3.5
                                },
                                children: "Create now"
                            })
                        }), (0, t.jsx)(m.default, {
                            href: "https://zkboost.gitbook.io/zkboost/",
                            children: (0, t.jsx)(o.Z, {
                                variant: "outlined",
                                color: "secondary",
                                sx: {
                                    margin: 3.5
                                },
                                children: "Learn more"
                            })
                        })]
                    }), (0, t.jsx)(u.Z, {
                        variant: "h4",
                        sx: {
                            marginX: "auto",
                            marginTop: "80px"
                        },
                        children: "The revolutionary launch-pad on ZkSync Era"
                    }), (0, t.jsx)(u.Z, {
                        variant: "body1",
                        sx: {
                            marginX: "auto",
                            marginY: "20px"
                        },
                        children: "A Launch-pad on zkSync Era that provides startups with a streamlined, secure, and scalable platform to raise capital and launch their projects"
                    }), (0, t.jsx)(l.ZP, {
                        container: !0,
                        spacing: 4,
                        children: p.map((function(e, n) {
                            return (0, t.jsx)(l.ZP, {
                                item: !0,
                                xs: 6,
                                md: 4,
                                lg: 3,
                                children: (0, t.jsxs)(a.Z, {
                                    sx: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    children: [(0, t.jsx)(s.Z, {
                                        sx: {
                                            height: "auto"
                                        },
                                        children: (0, t.jsx)(i.Z, {
                                            sx: {
                                                alignContent: "center"
                                            },
                                            children: (0, t.jsx)(c.Z, {
                                                src: "/images/logo.svg",
                                                sx: {
                                                    width: 100,
                                                    height: 100,
                                                    margin: "auto",
                                                    padding: 4
                                                }
                                            })
                                        })
                                    }), (0, t.jsxs)(d.Z, {
                                        children: [(0, t.jsx)(u.Z, {
                                            variant: "h6",
                                            sx: {
                                                marginBottom: 2
                                            },
                                            children: e.name
                                        }), (0, t.jsx)(u.Z, {
                                            variant: "body2",
                                            children: e.description
                                        })]
                                    })]
                                })
                            }, "item1-" + n.toString())
                        }))
                    }), (0, t.jsx)(u.Z, {
                        variant: "h4",
                        sx: {
                            marginX: "auto",
                            marginTop: "80px"
                        },
                        children: "Immense Ecosystem"
                    }), (0, t.jsx)(u.Z, {
                        variant: "body1",
                        sx: {
                            marginX: "auto",
                            marginY: "20px"
                        },
                        children: "Our platform provides a secure, scalable, and user-friendly environment for launching blockchain projects with confidence along side with a focus on transparency, trust, and innovation"
                    }), (0, t.jsx)(l.ZP, {
                        container: !0,
                        spacing: 4,
                        children: g.map((function(e, n) {
                            return (0, t.jsx)(l.ZP, {
                                item: !0,
                                xs: 6,
                                md: 4,
                                lg: 3,
                                children: (0, t.jsxs)(a.Z, {
                                    sx: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    children: [(0, t.jsx)(s.Z, {
                                        sx: {
                                            height: "auto"
                                        },
                                        children: (0, t.jsx)(i.Z, {
                                            sx: {
                                                alignContent: "center"
                                            },
                                            children: (0, t.jsx)(c.Z, {
                                                src: "/images/logo.svg",
                                                sx: {
                                                    width: 100,
                                                    height: 100,
                                                    margin: "auto",
                                                    padding: 4
                                                }
                                            })
                                        })
                                    }), (0, t.jsxs)(d.Z, {
                                        children: [(0, t.jsx)(u.Z, {
                                            variant: "h6",
                                            sx: {
                                                marginBottom: 2
                                            },
                                            children: e.name
                                        }), (0, t.jsx)(u.Z, {
                                            variant: "body2",
                                            children: e.description
                                        })]
                                    })]
                                })
                            }, "item2-" + n.toString())
                        }))
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return n = 45301, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);