(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1920], {
        69368: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var a = n(63366),
                r = n(87462),
                i = n(67294),
                s = n(27192),
                o = n(41796),
                l = n(21964),
                c = n(88169),
                d = n(85893),
                u = (0, c.Z)((0, d.jsx)("path", {
                    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                }), "CheckBoxOutlineBlank"),
                h = (0, c.Z)((0, d.jsx)("path", {
                    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                }), "CheckBox"),
                p = (0, c.Z)((0, d.jsx)("path", {
                    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
                }), "IndeterminateCheckBox"),
                x = n(98216),
                f = n(71657),
                m = n(11496),
                b = n(28979);

            function j(e) {
                return (0, b.Z)("MuiCheckbox", e)
            }
            var Z = (0, n(76087).Z)("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]);
            const v = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"],
                g = (0, m.ZP)(l.Z, {
                    shouldForwardProp: e => (0, m.FO)(e) || "classes" === e,
                    name: "MuiCheckbox",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: n
                        } = e;
                        return [t.root, n.indeterminate && t.indeterminate, "default" !== n.color && t[`color${(0,x.Z)(n.color)}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, r.Z)({
                    color: e.palette.text.secondary
                }, !t.disableRipple && {
                    "&:hover": {
                        backgroundColor: (0, o.Fq)("default" === t.color ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                }, "default" !== t.color && {
                    [`&.${Z.checked}, &.${Z.indeterminate}`]: {
                        color: e.palette[t.color].main
                    },
                    [`&.${Z.disabled}`]: {
                        color: e.palette.action.disabled
                    }
                }))),
                y = (0, d.jsx)(h, {}),
                k = (0, d.jsx)(u, {}),
                _ = (0, d.jsx)(p, {});
            var w = i.forwardRef((function(e, t) {
                var n, o;
                const l = (0, f.Z)({
                        props: e,
                        name: "MuiCheckbox"
                    }),
                    {
                        checkedIcon: c = y,
                        color: u = "primary",
                        icon: h = k,
                        indeterminate: p = !1,
                        indeterminateIcon: m = _,
                        inputProps: b,
                        size: Z = "medium"
                    } = l,
                    w = (0, a.Z)(l, v),
                    P = p ? m : h,
                    S = p ? m : c,
                    N = (0, r.Z)({}, l, {
                        color: u,
                        indeterminate: p,
                        size: Z
                    }),
                    C = (e => {
                        const {
                            classes: t,
                            indeterminate: n,
                            color: a
                        } = e, i = {
                            root: ["root", n && "indeterminate", `color${(0,x.Z)(a)}`]
                        }, o = (0, s.Z)(i, j, t);
                        return (0, r.Z)({}, t, o)
                    })(N);
                return (0, d.jsx)(g, (0, r.Z)({
                    type: "checkbox",
                    inputProps: (0, r.Z)({
                        "data-indeterminate": p
                    }, b),
                    icon: i.cloneElement(P, {
                        fontSize: null != (n = P.props.fontSize) ? n : Z
                    }),
                    checkedIcon: i.cloneElement(S, {
                        fontSize: null != (o = S.props.fontSize) ? o : Z
                    }),
                    ownerState: N,
                    ref: t
                }, w, {
                    classes: C
                }))
            }))
        },
        68628: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/create/fairlaunch", function() {
                return n(3064)
            }])
        },
        54340: function(e, t, n) {
            "use strict";
            var a = n(85893),
                r = n(83321),
                i = n(77295);

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            t.Z = function(e) {
                var t = e.children;
                return (0, a.jsx)(i.NL.Custom, {
                    children: function(e) {
                        var n = e.account,
                            i = e.chain,
                            o = (e.openAccountModal, e.openChainModal),
                            l = e.openConnectModal,
                            c = e.authenticationStatus,
                            d = e.mounted && "loading" !== c,
                            u = d && n && i && (!c || "authenticated" === c);
                        return (0, a.jsx)("div", function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), a.forEach((function(t) {
                                    s(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, !d && {
                            "aria-hidden": !0,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none"
                            }
                        }, {
                            children: u ? i.unsupported ? (0, a.jsx)(r.Z, {
                                onClick: o,
                                type: "button",
                                variant: "contained",
                                color: "error",
                                children: "Wrong network"
                            }) : (0, a.jsx)("div", {
                                style: {
                                    display: "flex",
                                    gap: 12
                                },
                                children: t
                            }) : (0, a.jsx)(r.Z, {
                                onClick: l,
                                type: "button",
                                variant: "contained",
                                color: "success",
                                children: "Connect Wallet"
                            })
                        }))
                    }
                })
            }
        },
        61144: function(e, t, n) {
            "use strict";
            n.d(t, {
                xA: function() {
                    return a
                },
                HH: function() {
                    return r
                },
                ZP: function() {
                    return i
                },
                vM: function() {
                    return s
                }
            });
            var a = new(n(42660).j3)({
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdlMGQyYjZkOTM1ZmQ1QWI0OTY5YTkzRjgzNWE3NzVjMkNlZjM2MTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDcwOTExMTU3NSwibmFtZSI6InVwbG9hZGVyIn0.Jtu9dKUr_W0Iep4Vqo_-Gvc797O-YRDEPVnYsbqx9d0"
            });

            function r(e) {
                var t;
                try {
                    t = new URL(e)
                } catch (n) {
                    return !1
                }
                return "http:" === t.protocol || "https:" === t.protocol
            }

            function i(e) {
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https" + e.substr(4), e];
                    case "ipfs":
                        var t, n = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(n, "/"), "https://ipfs.io/ipfs/".concat(n, "/")];
                    case "ipns":
                        var a, r = null === (a = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === a ? void 0 : a[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(r, "/"), "https://ipfs.io/ipns/".concat(r, "/")];
                    default:
                        return [""]
                }
            }

            function s(e) {
                switch (e) {
                    case 1:
                        return "Presale";
                    case 2:
                        return "Fairlaunch";
                    case 3:
                        return "Private Sale";
                    case 4:
                        return "IDO (Overflow)";
                    default:
                        return "Unknown"
                }
            }
        },
        3064: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ie
                }
            });
            var a = n(85893),
                r = n(86886),
                i = n(15861),
                s = n(67294),
                o = n(40044),
                l = n(66242),
                c = n(66568),
                d = n(55050),
                u = n(45670),
                h = n(44267),
                p = n(635),
                x = n(87357),
                f = n(61903),
                m = n(72882),
                b = n(7906),
                j = n(295),
                Z = n(53816),
                v = n(53252),
                g = n(83321),
                y = n(45962),
                k = n(61744),
                _ = n(21046),
                w = n(86501),
                P = n(54340),
                S = n(10164),
                N = n(53532),
                C = n(82661),
                I = n(35769),
                B = n(17740),
                M = n(69077);

            function q(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = function(e) {
                    var t, n, s = e.setStep,
                        o = (0, B.R)(I.Z.state),
                        l = (0, M.mA)(),
                        c = (0, M.LN)(),
                        d = C.Mt[(null === (t = c.chain) || void 0 === t ? void 0 : t.id) || C.uI.id],
                        u = (0, M.Dm)({
                            contracts: [{
                                address: o.token,
                                abi: S.RB,
                                functionName: "name"
                            }, {
                                address: o.token,
                                abi: S.RB,
                                functionName: "totalSupply"
                            }, {
                                address: o.token,
                                abi: S.RB,
                                functionName: "decimals"
                            }, {
                                address: o.token,
                                abi: S.RB,
                                functionName: "allowance",
                                args: [l.address || "0x0", d]
                            }, {
                                address: o.token,
                                abi: S.RB,
                                functionName: "balanceOf",
                                args: [l.address || "0x0"]
                            }],
                            watch: !0
                        }),
                        h = (0, y.uX)(),
                        O = (0, M.PJ)({
                            address: o.token,
                            abi: S.RB,
                            functionName: "approve",
                            args: [d, u.data && u.data[1] ? u.data[1] : _.Bz],
                            cacheTime: 1
                        }),
                        L = O.config,
                        A = O.isLoading,
                        R = (0, M.GG)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), a.forEach((function(t) {
                                    q(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, L, {
                            onSuccess: function(e) {
                                h({
                                    hash: e.hash,
                                    description: "Approve Token"
                                })
                            }
                        })),
                        D = (0, M.BX)({
                            hash: null === (n = R.data) || void 0 === n ? void 0 : n.hash,
                            onError: function(e) {
                                (0, w.Am)(e.message)
                            },
                            onSuccess: function() {
                                (0, w.Am)("Approved successfully")
                            }
                        });
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(i.Z, {
                                variant: "h6",
                                sx: {
                                    marginBottom: 2
                                },
                                children: "Token Info"
                            }), (0, a.jsx)(i.Z, {
                                variant: "body2",
                                sx: {
                                    marginBottom: 4
                                },
                                children: "Enter the token address and verify"
                            })]
                        }), (0, a.jsx)(x.Z, {
                            children: (0, a.jsxs)(r.ZP, {
                                container: !0,
                                spacing: 5,
                                children: [(0, a.jsx)(r.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, a.jsx)(f.Z, {
                                        value: o.token,
                                        fullWidth: !0,
                                        type: "text",
                                        label: "Token address",
                                        placeholder: "0xAbC123...",
                                        helperText: "Pool creation fee: ".concat(N.p, " ETH & 10% presale raised"),
                                        onChange: function(e) {
                                            return I.Z.setToken(e.target.value)
                                        }
                                    })
                                }), u.data && u.data[0] && u.data[1] && (0, p.isBigNumberish)(u.data[1]) && u.data[2] && u.data[3] && u.data[4] && (0, a.jsx)(r.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, a.jsx)(m.Z, {
                                        children: (0, a.jsx)(b.Z, {
                                            sx: {
                                                minWidth: 650
                                            },
                                            "aria-label": "simple table",
                                            children: (0, a.jsxs)(j.Z, {
                                                children: [(0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(v.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Token"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: u.data[0]
                                                    })]
                                                }, "token"), (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(v.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Total Supply"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: Number(k.formatUnits(u.data[1], u.data[2])).toLocaleString()
                                                    })]
                                                }, "token sup"), (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(v.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Decimals"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: u.data[2]
                                                    })]
                                                }, "token dec"), (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(v.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Balance"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: Number(k.formatUnits(u.data[4], u.data[2])).toLocaleString()
                                                    })]
                                                }, "token blance")]
                                            })
                                        })
                                    })
                                })]
                            })
                        }), (0, a.jsx)(x.Z, {
                            sx: {
                                display: "flex",
                                justifyContent: "space-evenly",
                                mt: 20
                            },
                            children: (0, a.jsx)(P.Z, {
                                children: u.data && u.data[0] && u.data[1] && (0, p.isBigNumberish)(u.data[1]) && u.data[2] && u.data[3] && (0, p.isBigNumberish)(u.data[3]) && Number(k.formatUnits(u.data[3], u.data[2])) < Number(k.formatUnits(u.data[1], u.data[2])) ? (0, a.jsx)(g.Z, {
                                    disabled: R.isLoading || D.isLoading || A,
                                    variant: "contained",
                                    onClick: function() {
                                        var e;
                                        return null === (e = R.writeAsync) || void 0 === e ? void 0 : e.call(R)
                                    },
                                    children: R.isLoading || D.isLoading || A ? "Loading ..." : "Approval"
                                }) : (0, a.jsx)(g.Z, {
                                    disabled: !(u.data && u.data[0] && u.data[1] && (0, p.isBigNumberish)(u.data[1]) && u.data[2] && u.data[3]),
                                    onClick: function() {
                                        return s("2")
                                    },
                                    variant: "contained",
                                    children: "Next"
                                })
                            })
                        })]
                    })
                },
                L = n(28520),
                A = n.n(L),
                R = n(94054),
                D = n(50480),
                T = n(69368),
                E = n(2593),
                W = n(9198),
                z = n.n(W),
                F = (n(51360), n(25463)),
                Y = n(8987);

            function $(e, t, n, a, r, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, r)
            }
            var H = function(e) {
                    var t, n, o = e.setStep,
                        l = (0, B.R)(I.Z.state),
                        c = (0, M.mA)(),
                        d = (0, s.useState)(null),
                        u = d[0],
                        h = d[1],
                        p = (0, s.useState)(!1),
                        m = p[0],
                        b = p[1],
                        j = (0, M.LN)(),
                        Z = C.Mt[(null === (t = j.chain) || void 0 === t ? void 0 : t.id) || C.uI.id],
                        v = (0, M.Dm)({
                            contracts: [{
                                address: l.token,
                                abi: S.RB,
                                functionName: "name"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "totalSupply"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "decimals"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "symbol"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "balanceOf",
                                args: [c.address || "0x1"]
                            }],
                            watch: !0
                        }),
                        y = (0, M.PJ)({
                            address: Z,
                            abi: S.hZ,
                            functionName: "create_fairlaunch",
                            args: [l.token || "0x0", k.parseUnits(l.buy_rate.toString(), v.data && v.data[2]), k.parseEther(l.buy_max.toString()), k.parseEther(l.softcap.toString()), E.O$.from(l.liquidity_percent), E.O$.from(l.liquidity_lock), E.O$.from(l.presale_start), E.O$.from(l.presale_end), l.ipfsdata],
                            overrides: {
                                from: c.address,
                                value: k.parseEther(N.p)
                            },
                            onSuccess: function() {
                                h(null)
                            },
                            onError: function(e) {
                                h(e)
                            }
                        }),
                        _ = (n = A().mark((function e() {
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(l.buy_rate <= 0 || l.softcap <= 0 || l.liquidity_percent <= 50 || l.liquidity_lock < 0)) {
                                            e.next = 5;
                                            break
                                        }
                                        return (0, w.Am)("Please fill with valid value"), e.abrupt("return");
                                    case 5:
                                        if (!(l.liquidity_percent < 51 || l.liquidity_percent > 100)) {
                                            e.next = 10;
                                            break
                                        }
                                        return (0, w.Am)("Invalid liquidity percent"), e.abrupt("return");
                                    case 10:
                                        if (!(l.presale_start < Date.now() / 1e3)) {
                                            e.next = 15;
                                            break
                                        }
                                        return (0, w.Am)("Start time can not be in the pass"), e.abrupt("return");
                                    case 15:
                                        if (!(l.presale_end < l.presale_start)) {
                                            e.next = 20;
                                            break
                                        }
                                        return (0, w.Am)("End time can not be in the pass to Start time"), e.abrupt("return");
                                    case 20:
                                        if (!(v && v.data && v.data[4] && Number(k.formatUnits(v.data[4], v.data && v.data[2])) < l.buy_rate + .9 * l.buy_rate * (l.liquidity_percent / 100))) {
                                            e.next = 25;
                                            break
                                        }
                                        return (0, w.Am)("Token needed to more than token balance in your account"), e.abrupt("return");
                                    case 25:
                                        if (!(u && u.data && u.data.message)) {
                                            e.next = 30;
                                            break
                                        }
                                        return (0, w.Am)(u.data.message), e.abrupt("return");
                                    case 30:
                                        o("3");
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, r) {
                                var i = n.apply(e, t);

                                function s(e) {
                                    $(i, a, r, s, o, "next", e)
                                }

                                function o(e) {
                                    $(i, a, r, s, o, "throw", e)
                                }
                                s(void 0)
                            }))
                        });
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(i.Z, {
                                variant: "h6",
                                sx: {
                                    marginBottom: 2
                                },
                                children: "Fairlaunch Info"
                            }), (0, a.jsx)(i.Z, {
                                variant: "body2",
                                sx: {
                                    marginBottom: 4
                                },
                                children: "Enter the fairlaunch information that you want to raise, that should be enter all details about your fairlaunch"
                            })]
                        }), (0, a.jsx)(x.Z, {
                            children: (0, a.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(), _()
                                },
                                children: [(0, a.jsxs)(r.ZP, {
                                    container: !0,
                                    spacing: 5,
                                    children: [(0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(i.Z, {
                                            variant: "body1",
                                            textAlign: "left",
                                            color: "red",
                                            children: "(*) is required field."
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            value: l.buy_rate,
                                            fullWidth: !0,
                                            type: "number",
                                            label: "Token for fairlaunch",
                                            placeholder: "10",
                                            inputProps: {
                                                step: 1,
                                                min: 0
                                            },
                                            helperText: "Total amount of token for fairlaunch",
                                            onChange: function(e) {
                                                return I.Z.setBuyRate(Number(e.target.value))
                                            },
                                            required: !0,
                                            error: l.buy_rate <= 0
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            value: l.softcap,
                                            fullWidth: !0,
                                            type: "number",
                                            label: "Softcap",
                                            inputProps: {
                                                step: .001,
                                                min: 0
                                            },
                                            onChange: function(e) {
                                                return I.Z.setSoftCap(Number(e.target.value))
                                            },
                                            required: !0,
                                            error: l.softcap <= 0
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            value: l.liquidity_percent,
                                            fullWidth: !0,
                                            type: "number",
                                            label: "Liquidity (%)",
                                            inputProps: {
                                                step: 1,
                                                min: 51,
                                                max: 100
                                            },
                                            "aria-valuemin": 51,
                                            "aria-valuemax": 100,
                                            onChange: function(e) {
                                                return I.Z.setLiquidityPercent(Number(e.target.value))
                                            },
                                            required: !0,
                                            error: l.liquidity_percent <= 50 || l.liquidity_percent > 100
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        sx: {
                                            textAlign: "left",
                                            justifyContent: "left"
                                        },
                                        children: (0, a.jsx)(R.Z, {
                                            children: (0, a.jsx)(D.Z, {
                                                control: (0, a.jsx)(T.Z, {
                                                    checked: m,
                                                    onChange: function(e, t) {
                                                        b(t), I.Z.setBuyMax(0)
                                                    }
                                                }),
                                                label: "Use maximum buy"
                                            })
                                        })
                                    }), m && (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            value: l.buy_max,
                                            fullWidth: !0,
                                            inputProps: {
                                                step: .001,
                                                min: 0
                                            },
                                            type: "number",
                                            label: "Max buy",
                                            onChange: function(e) {
                                                return I.Z.setBuyMax(Number(e.target.value))
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(i.Z, {
                                            variant: "body2",
                                            textAlign: "left",
                                            color: "green",
                                            children: "Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)"
                                        })
                                    }), (0, a.jsxs)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        container: !0,
                                        spacing: 4,
                                        columns: 12,
                                        sx: {
                                            textAlign: "left",
                                            justifyContent: "left"
                                        },
                                        children: [(0, a.jsx)(r.ZP, {
                                            item: !0,
                                            xs: 6,
                                            children: (0, a.jsx)(F.Z, {
                                                children: (0, a.jsx)(z(), {
                                                    selected: new Date(1e3 * l.presale_start),
                                                    showYearDropdown: !0,
                                                    showMonthDropdown: !0,
                                                    showTimeInput: !0,
                                                    value: new Date(1e3 * l.presale_start).toLocaleString(),
                                                    placeholderText: "MM-DD-YYYY HH",
                                                    customInput: (0, a.jsx)(f.Z, {
                                                        fullWidth: !0,
                                                        label: "Fairlaunch start (Local time)",
                                                        autoComplete: "off"
                                                    }),
                                                    id: "form-layouts-separator-date",
                                                    onChange: function(e) {
                                                        I.Z.setPresaleStart(Number(e.getTime() / 1e3))
                                                    },
                                                    required: !0
                                                })
                                            })
                                        }), (0, a.jsx)(r.ZP, {
                                            item: !0,
                                            xs: 6,
                                            children: (0, a.jsx)(F.Z, {
                                                children: (0, a.jsx)(z(), {
                                                    selected: new Date(1e3 * l.presale_end),
                                                    showYearDropdown: !0,
                                                    showMonthDropdown: !0,
                                                    showTimeInput: !0,
                                                    value: new Date(1e3 * l.presale_end).toLocaleString(),
                                                    placeholderText: "MM-DD-YYYY HH",
                                                    customInput: (0, a.jsx)(f.Z, {
                                                        fullWidth: !0,
                                                        label: "Fairlaunch end (Local time)",
                                                        autoComplete: "off"
                                                    }),
                                                    id: "form-layouts-separator-date",
                                                    onChange: function(e) {
                                                        I.Z.setPresaleEnd(Number(e.getTime() / 1e3))
                                                    },
                                                    required: !0
                                                })
                                            })
                                        })]
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            value: l.liquidity_lock,
                                            fullWidth: !0,
                                            type: "number",
                                            label: "Liquid lock days",
                                            placeholder: "10",
                                            inputProps: {
                                                step: 1,
                                                min: 0
                                            },
                                            onChange: function(e) {
                                                return I.Z.setLiquidityLock(Number(e.target.value))
                                            },
                                            required: !0,
                                            error: l.liquidity_lock < 0
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsxs)(i.Z, {
                                            variant: "body1",
                                            textAlign: "center",
                                            color: "blue",
                                            children: ["You need ", (0, a.jsx)("b", {
                                                children: l.buy_rate + .9 * l.buy_rate * (l.liquidity_percent / 100)
                                            }), " ", v.data && v.data[3], " to create a zkBoost pool"]
                                        })
                                    })]
                                }), (0, a.jsx)(x.Z, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        mt: 20
                                    },
                                    children: (0, a.jsxs)(P.Z, {
                                        children: [(0, a.jsx)(g.Z, {
                                            onClick: function() {
                                                return o("1")
                                            },
                                            variant: "contained",
                                            children: "Back"
                                        }), "loading" === y.status ? (0, a.jsx)(Y.Z, {
                                            loading: !0,
                                            variant: "contained",
                                            children: "Next"
                                        }) : (0, a.jsx)(g.Z, {
                                            type: "submit",
                                            variant: "contained",
                                            children: "Next"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                U = n(87109),
                J = n(89583),
                V = n(61144);

            function G(e, t, n, a, r, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, r)
            }
            var X = function(e) {
                    var t, n, o = e.setStep,
                        l = (0, B.R)(I.Z.state),
                        c = (0, M.mA)(),
                        d = (0, s.useState)(null),
                        u = d[0],
                        h = d[1],
                        p = (0, M.LN)(),
                        m = C.Mt[(null === (t = p.chain) || void 0 === t ? void 0 : t.id) || C.uI.id],
                        b = (0, M.Dm)({
                            contracts: [{
                                address: l.token,
                                abi: S.RB,
                                functionName: "name"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "totalSupply"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "decimals"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "symbol"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "balanceOf",
                                args: [c.address || "0x0"]
                            }],
                            watch: !0
                        }),
                        j = (0, M.PJ)({
                            address: m,
                            abi: S.hZ,
                            functionName: "create_fairlaunch",
                            args: [l.token || "0x0", k.parseUnits(l.buy_rate.toString(), b.data && b.data[2]), k.parseEther(l.buy_max.toString()), k.parseEther(l.softcap.toString()), E.O$.from(l.liquidity_percent), E.O$.from(l.liquidity_lock), E.O$.from(l.presale_start), E.O$.from(l.presale_end), l.ipfsdata],
                            overrides: {
                                from: c.address,
                                value: k.parseEther(N.p)
                            },
                            onSuccess: function() {
                                h(null)
                            },
                            onError: function(e) {
                                h(e)
                            }
                        }),
                        Z = (n = A().mark((function e() {
                            var t, n, a;
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(l.buy_rate <= 0 || l.softcap <= 0 || l.liquidity_percent <= 50 || l.liquidity_lock < 0)) {
                                            e.next = 5;
                                            break
                                        }
                                        return (0, w.Am)("Please fill with valid value"), e.abrupt("return");
                                    case 5:
                                        if (!(l.liquidity_percent < 51 || l.liquidity_percent > 100)) {
                                            e.next = 10;
                                            break
                                        }
                                        return (0, w.Am)("Invalid liquidity percent"), e.abrupt("return");
                                    case 10:
                                        if (!(l.presale_start < Date.now() / 1e3)) {
                                            e.next = 15;
                                            break
                                        }
                                        return (0, w.Am)("Start time can not be in the pass"), e.abrupt("return");
                                    case 15:
                                        if (!(l.presale_end < l.presale_start)) {
                                            e.next = 20;
                                            break
                                        }
                                        return (0, w.Am)("End time can not be in the pass to Start time"), e.abrupt("return");
                                    case 20:
                                        if (!(b && b.data && b.data[4] && Number(k.formatUnits(b.data[4], b.data && b.data[2])) < l.buy_rate + .9 * l.buy_rate * (l.liquidity_percent / 100))) {
                                            e.next = 25;
                                            break
                                        }
                                        return (0, w.Am)("Token needed to more than token balance in your account"), e.abrupt("return");
                                    case 25:
                                        if (!(u && u.data && u.data.message)) {
                                            e.next = 30;
                                            break
                                        }
                                        return (0, w.Am)(u.data.message), e.abrupt("return");
                                    case 30:
                                        return I.Z.setLoading(!0), e.prev = 31, e.next = 34, fetch("https://zkboost.finance/images/favicon.png");
                                    case 34:
                                        return t = e.sent, e.next = 37, t.blob();
                                    case 37:
                                        return n = e.sent, e.next = 40, V.xA.store({
                                            name: "zkBoost Metadata Launchpad",
                                            description: "zkBoost Metadata Launchpad",
                                            image: n,
                                            properties: l.metadata
                                        });
                                    case 40:
                                        a = e.sent, console.log("IPFS for the metadata:", a.ipnft), I.Z.setIpfsData(a.ipnft), I.Z.setLoading(!1), o("4"), e.next = 51;
                                        break;
                                    case 47:
                                        e.prev = 47, e.t0 = e.catch(31), (0, w.Am)("Logo url loading failed"), I.Z.setLoading(!1);
                                    case 51:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [31, 47]
                            ])
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, r) {
                                var i = n.apply(e, t);

                                function s(e) {
                                    G(i, a, r, s, o, "next", e)
                                }

                                function o(e) {
                                    G(i, a, r, s, o, "throw", e)
                                }
                                s(void 0)
                            }))
                        });
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(i.Z, {
                                variant: "h6",
                                sx: {
                                    marginBottom: 2
                                },
                                children: "Additional Info"
                            }), (0, a.jsx)(i.Z, {
                                variant: "body2",
                                sx: {
                                    marginBottom: 4
                                },
                                children: "Let people know who you are"
                            })]
                        }), (0, a.jsx)(x.Z, {
                            children: (0, a.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(), Z()
                                },
                                children: [(0, a.jsxs)(r.ZP, {
                                    container: !0,
                                    spacing: 5,
                                    children: [(0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(i.Z, {
                                            variant: "body1",
                                            textAlign: "left",
                                            color: "red",
                                            children: "(*) is required field."
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Logo url",
                                            helperText: "URL must end with a supported image extension png, jpg, jpeg or gif",
                                            required: !0,
                                            value: l.metadata.logo,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("logo", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            name: "website",
                                            label: "Website",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.q3v, {})
                                                })
                                            },
                                            required: !0,
                                            value: l.metadata.website,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("website", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Twitter",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.fWC, {})
                                                })
                                            },
                                            value: l.metadata.twitter,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("twitter", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Telegram",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.Ww5, {})
                                                })
                                            },
                                            value: l.metadata.telegram,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("telegram", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Github",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.hJX, {})
                                                })
                                            },
                                            value: l.metadata.github,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("github", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 6,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Discord",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.j2d, {})
                                                })
                                            },
                                            value: l.metadata.discord,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("discord", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Document",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.kpq, {})
                                                })
                                            },
                                            value: l.metadata.document,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("document", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "url",
                                            label: "Youtube Video",
                                            InputProps: {
                                                startAdornment: (0, a.jsx)(U.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(J.V2E, {})
                                                })
                                            },
                                            helperText: "Input your youtube URL.",
                                            value: l.metadata.youtube,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("youtube", e.target.value)
                                            }
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            fullWidth: !0,
                                            type: "text",
                                            minRows: 6,
                                            multiline: !0,
                                            maxRows: 8,
                                            label: "Description",
                                            helperText: "Discribe your project to everyone.",
                                            value: l.metadata.description,
                                            onChange: function(e) {
                                                return I.Z.setMetadata("description", e.target.value)
                                            }
                                        })
                                    })]
                                }), (0, a.jsx)(x.Z, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        mt: 20
                                    },
                                    children: (0, a.jsxs)(P.Z, {
                                        children: [(0, a.jsx)(g.Z, {
                                            onClick: function() {
                                                o("2"), I.Z.setLoading(!1)
                                            },
                                            disabled: "loading" === j.status || l.loading,
                                            variant: "contained",
                                            children: "Back"
                                        }), "loading" === j.status || l.loading ? (0, a.jsx)(Y.Z, {
                                            loading: !0,
                                            variant: "contained",
                                            children: "Next"
                                        }) : (0, a.jsx)(g.Z, {
                                            type: "submit",
                                            variant: "contained",
                                            children: "Next"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                Q = n(53184),
                K = n(50122),
                ee = n(11163);

            function te(e, t, n, a, r, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function ne(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var ae = function(e) {
                    var t, n, o = e.setStep,
                        l = (0, B.R)(I.Z.state),
                        c = (0, M.mA)(),
                        d = (0, s.useState)(null),
                        u = d[0],
                        h = d[1],
                        p = (0, M.LN)(),
                        f = C.Mt[(null === (t = p.chain) || void 0 === t ? void 0 : t.id) || C.uI.id],
                        _ = (0, M.Dm)({
                            contracts: [{
                                address: l.token,
                                abi: S.RB,
                                functionName: "name"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "totalSupply"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "decimals"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "symbol"
                            }, {
                                address: l.token,
                                abi: S.RB,
                                functionName: "balanceOf",
                                args: [c.address || "0x0"]
                            }],
                            watch: !0
                        }),
                        q = (0, M.PJ)({
                            address: f,
                            abi: S.hZ,
                            functionName: "create_fairlaunch",
                            args: [l.token || "0x0", k.parseUnits(l.buy_rate.toString(), _.data && _.data[2]), k.parseEther(l.buy_max.toString()), k.parseEther(l.softcap.toString()), E.O$.from(l.liquidity_percent), E.O$.from(l.liquidity_lock), E.O$.from(l.presale_start), E.O$.from(l.presale_end), l.ipfsdata],
                            overrides: {
                                from: c.address,
                                value: k.parseEther(N.p)
                            },
                            onSuccess: function() {
                                h(null)
                            },
                            onError: function(e) {
                                h(e)
                            }
                        }),
                        O = (0, y.uX)(),
                        L = (0, M.GG)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), a.forEach((function(t) {
                                    ne(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, q.config, {
                            onError: function(e) {
                                console.log(e)
                            },
                            onSuccess: function(e) {
                                O({
                                    hash: e.hash,
                                    description: "Create Fairlaunch"
                                })
                            }
                        })),
                        R = (0, ee.useRouter)(),
                        D = (n = A().mark((function e(t) {
                            var n, a;
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(u && u.data && u.data.message)) {
                                            e.next = 5;
                                            break
                                        }
                                        return (0, w.Am)(u.data.message), e.abrupt("return");
                                    case 5:
                                        return I.Z.setLoading(!0), e.next = 9, null === (n = L.writeAsync) || void 0 === n ? void 0 : n.call(L);
                                    case 9:
                                        if (e.t1 = a = e.sent, e.t0 = null === e.t1, e.t0) {
                                            e.next = 13;
                                            break
                                        }
                                        e.t0 = void 0 === a;
                                    case 13:
                                        if (!e.t0) {
                                            e.next = 17;
                                            break
                                        }
                                        e.next = 18;
                                        break;
                                    case 17:
                                        a.wait().then((function(e) {
                                            I.Z.reset(), R.push("/launchpad/" + e.contractAddress.toString())
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, r) {
                                var i = n.apply(e, t);

                                function s(e) {
                                    te(i, a, r, s, o, "next", e)
                                }

                                function o(e) {
                                    te(i, a, r, s, o, "throw", e)
                                }
                                s(void 0)
                            }))
                        });
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)(x.Z, {
                            sx: {
                                marginBottom: "50px"
                            },
                            children: [(0, a.jsx)(i.Z, {
                                variant: "h6",
                                sx: {
                                    marginBottom: 2
                                },
                                children: "Finish"
                            }), (0, a.jsx)(i.Z, {
                                variant: "body2",
                                sx: {
                                    marginBottom: 4
                                },
                                children: "Review your information and create presale"
                            })]
                        }), (0, a.jsx)(x.Z, {
                            children: (0, a.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(), D(e)
                                },
                                children: [(0, a.jsx)(r.ZP, {
                                    container: !0,
                                    spacing: 5,
                                    children: (0, a.jsx)(m.Z, {
                                        sx: {
                                            maxHeight: 1e3
                                        },
                                        children: (0, a.jsxs)(b.Z, {
                                            stickyHeader: !0,
                                            "aria-label": "sticky table",
                                            children: [(0, a.jsx)(Q.Z, {
                                                children: (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Info"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: "Detail"
                                                    })]
                                                })
                                            }), (0, a.jsxs)(j.Z, {
                                                children: [(0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Total token"
                                                    }), (0, a.jsxs)(v.Z, {
                                                        align: "right",
                                                        children: [l.buy_rate + .9 * l.buy_rate * (l.liquidity_percent / 100), " ", _.data && _.data[3]]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "zkBoost Factory"
                                                    }), (0, a.jsxs)(v.Z, {
                                                        align: "right",
                                                        children: [f, " ", (0, a.jsx)(J.esY, {
                                                            onClick: function() {
                                                                navigator.clipboard.writeText(f), (0, w.Am)("Copied to clipboard")
                                                            }
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Token Name"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: _.data && _.data[0]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Token Symbol"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: _.data && _.data[3]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Token Decimals"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: _.data && _.data[2]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Token for Fairlaunch"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: l.buy_rate
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Softcap"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: l.softcap
                                                    })]
                                                }), l.buy_max > 0 && (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Maximum buy"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: l.buy_max
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Liquidity"
                                                    }), (0, a.jsxs)(v.Z, {
                                                        align: "right",
                                                        children: [l.liquidity_percent, "%"]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Start time"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: new Date(1e3 * l.presale_start).toLocaleString()
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "End time"
                                                    }), (0, a.jsx)(v.Z, {
                                                        align: "right",
                                                        children: new Date(1e3 * l.presale_end).toLocaleString()
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: "Liquidity lock time"
                                                    }), (0, a.jsxs)(v.Z, {
                                                        align: "right",
                                                        children: [l.liquidity_lock, " day(s)"]
                                                    })]
                                                }), Object.keys(l.metadata).map((function(e) {
                                                    return (0, a.jsxs)(Z.Z, {
                                                        hover: !0,
                                                        tabIndex: -1,
                                                        children: [(0, a.jsx)(v.Z, {
                                                            sx: {
                                                                textTransform: "capitalize"
                                                            },
                                                            children: e
                                                        }), (0, a.jsx)(v.Z, {
                                                            align: "right",
                                                            children: (0, V.HH)(l.metadata[e]) ? (0, a.jsx)(K.Z, {
                                                                underline: "none",
                                                                href: l.metadata[e],
                                                                target: "_blank",
                                                                children: l.metadata[e]
                                                            }) : l.metadata[e]
                                                        })]
                                                    }, e)
                                                }))]
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)(x.Z, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        mt: 20
                                    },
                                    children: (0, a.jsxs)(P.Z, {
                                        children: [(0, a.jsx)(g.Z, {
                                            disabled: "loading" === q.status || l.loading,
                                            onClick: function() {
                                                return o("3")
                                            },
                                            variant: "contained",
                                            children: "Back"
                                        }), "loading" === q.status || l.loading ? (0, a.jsx)(Y.Z, {
                                            loading: !0,
                                            variant: "contained",
                                            children: "Finish"
                                        }) : (0, a.jsx)(g.Z, {
                                            type: "submit",
                                            variant: "contained",
                                            children: "Finish"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                re = function() {
                    var e = (0, s.useState)("1"),
                        t = e[0],
                        n = e[1];
                    return (0, a.jsx)(s.Fragment, {
                        children: (0, a.jsx)(l.Z, {
                            children: (0, a.jsxs)(u.ZP, {
                                value: t,
                                children: [(0, a.jsxs)(c.Z, {
                                    centered: !0,
                                    "aria-label": "",
                                    onChange: function(e, t) {
                                        n(t)
                                    },
                                    indicatorColor: "secondary",
                                    children: [(0, a.jsx)(o.Z, {
                                        value: "1",
                                        label: "1. Token Info"
                                    }), (0, a.jsx)(o.Z, {
                                        value: "2",
                                        disabled: Number(t) < 2,
                                        label: "2. Fairlaunch Info"
                                    }), (0, a.jsx)(o.Z, {
                                        value: "3",
                                        disabled: Number(t) < 3,
                                        label: "3. Additional Info"
                                    }), (0, a.jsx)(o.Z, {
                                        value: "4",
                                        disabled: Number(t) < 4,
                                        label: "4. Finish"
                                    })]
                                }), (0, a.jsxs)(h.Z, {
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: [(0, a.jsx)(d.Z, {
                                        value: "1",
                                        sx: {
                                            p: 0,
                                            mb: 10
                                        },
                                        children: (0, a.jsx)(O, {
                                            setStep: n
                                        })
                                    }), (0, a.jsx)(d.Z, {
                                        value: "2",
                                        sx: {
                                            p: 0
                                        },
                                        children: (0, a.jsx)(H, {
                                            setStep: n
                                        })
                                    }), (0, a.jsx)(d.Z, {
                                        value: "3",
                                        sx: {
                                            p: 0
                                        },
                                        children: (0, a.jsx)(X, {
                                            setStep: n
                                        })
                                    }), (0, a.jsx)(d.Z, {
                                        value: "4",
                                        sx: {
                                            p: 0
                                        },
                                        children: (0, a.jsx)(ae, {
                                            setStep: n
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                ie = function() {
                    return (0, a.jsxs)(r.ZP, {
                        container: !0,
                        spacing: 6,
                        children: [(0, a.jsx)(r.ZP, {
                            item: !0,
                            xs: 12,
                            sx: {
                                paddingBottom: 4
                            },
                            children: (0, a.jsx)(i.Z, {
                                variant: "h5",
                                children: "Create Fairlaunch"
                            })
                        }), (0, a.jsx)(r.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, a.jsx)(re, {})
                        })]
                    })
                }
        },
        35769: function(e, t, n) {
            "use strict";
            var a = (0, n(86949).sj)({
                    token: void 0,
                    loading: !1,
                    buy_rate: 0,
                    list_rate: 0,
                    buy_min: 0,
                    buy_max: 0,
                    softcap: 0,
                    hardcap: 0,
                    isBurnRefund: !0,
                    liquidity_percent: 100,
                    liquidity_lock: 0,
                    presale_start: Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 1)),
                    presale_end: Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 2)),
                    whitelist: !0,
                    metadata: {},
                    ipfsdata: ""
                }),
                r = {
                    state: a,
                    setToken: function(e) {
                        a.token = e
                    },
                    setLoading: function(e) {
                        a.loading = e
                    },
                    setBuyRate: function(e) {
                        a.buy_rate = e
                    },
                    setListRate: function(e) {
                        a.list_rate = e
                    },
                    setBuyMin: function(e) {
                        a.buy_min = e
                    },
                    setBuyMax: function(e) {
                        a.buy_max = e
                    },
                    setSoftCap: function(e) {
                        a.softcap = e
                    },
                    setHardCap: function(e) {
                        a.hardcap = e
                    },
                    setBurnRefund: function(e) {
                        a.isBurnRefund = e
                    },
                    setLiquidityPercent: function(e) {
                        e > 100 && (e = 100), a.liquidity_percent = e
                    },
                    setLiquidityLock: function(e) {
                        e <= 0 && (e = 0), a.liquidity_lock = e
                    },
                    setPresaleStart: function(e) {
                        a.presale_start = e
                    },
                    setPresaleEnd: function(e) {
                        a.presale_end = e
                    },
                    setWhiteList: function(e) {
                        a.whitelist = e
                    },
                    setMetadata: function(e, t) {
                        t.length <= 0 || "" === t ? delete a.metadata[e] : a.metadata[e] = t
                    },
                    removeMetadata: function(e) {
                        delete a.metadata[e]
                    },
                    setIpfsData: function(e) {
                        a.ipfsdata = e
                    },
                    reset: function() {
                        a.token = void 0, a.loading = !1, a.buy_rate = 0, a.list_rate = 0, a.buy_min = 0, a.buy_max = 0, a.softcap = 0, a.hardcap = 0, a.isBurnRefund = !0, a.liquidity_percent = 100, a.liquidity_lock = 0, a.presale_start = Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 1)), a.presale_end = Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 2)), a.whitelist = !0, a.metadata = {}, a.ipfsdata = ""
                    }
                };
            t.Z = r
        }
    },
    function(e) {
        e.O(0, [5445, 138, 1903, 2453, 6089, 8764, 961, 2638, 6572, 2533, 164, 9774, 2888, 179], (function() {
            return t = 68628, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);