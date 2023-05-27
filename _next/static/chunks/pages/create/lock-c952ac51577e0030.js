(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2173], {
        70617: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/create/lock", function() {
                return n(15485)
            }])
        },
        15485: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(28520),
                r = n.n(a),
                o = n(85893),
                s = n(86886),
                i = n(15861),
                c = n(66242),
                l = n(44267),
                u = n(61903),
                d = n(7906),
                h = n(53816),
                f = n(53252),
                x = n(94054),
                m = n(50480),
                p = n(69368),
                v = n(87109),
                b = n(83321),
                j = n(21046),
                Z = n(19485),
                g = n(61744),
                k = n(2593),
                w = n(67294),
                P = n(10164),
                y = n(69077),
                A = (n(51360), n(25463)),
                N = n(9198),
                O = n.n(N),
                S = n(86501),
                L = n(11163),
                C = n(8987),
                D = n(82661);

            function M(e, t, n, a, r, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (l) {
                    return void n(l)
                }
                i.done ? t(c) : Promise.resolve(c).then(a, r)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var o = e.apply(t, n);

                        function s(e) {
                            M(o, a, r, s, i, "next", e)
                        }

                        function i(e) {
                            M(o, a, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function T(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function W(e) {
                var t, n = e.tokenInfo,
                    a = e.waitApproval,
                    i = e.approval,
                    c = e.amount,
                    l = e.isOtherOwner,
                    d = e.owner,
                    h = e.account,
                    f = e.token,
                    x = e.isMuteLP,
                    m = e.title,
                    p = e.setError,
                    v = e.error,
                    j = e.locker,
                    Z = (0, L.useRouter)(),
                    N = (0, w.useState)(Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 2))),
                    D = N[0],
                    M = N[1],
                    T = (0, y.PJ)({
                        address: j,
                        abi: P.IP,
                        functionName: "lock",
                        args: [l ? d : h.address || "0x0", f, x, g.parseUnits((n.data && n.data[4] && n.data[2] && Number(g.formatUnits(n.data[4], n.data[2])) < c ? 0 : c).toString(), n.data && n.data[2]), k.O$.from(D), m],
                        onSuccess: function() {
                            p(null)
                        },
                        onError: function(e) {
                            p(e)
                        }
                    }),
                    W = (0, y.GG)(I({}, T.config)),
                    B = (0, y.BX)({
                        hash: null === (t = W.data) || void 0 === t ? void 0 : t.hash,
                        onError: function(e) {
                            (0, S.Am)(e.message)
                        },
                        onSuccess: function(e) {
                            (0, S.Am)("Locked successfully"), M(Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 2))), Z.push("/lock/".concat(f))
                        }
                    }),
                    q = E(r().mark((function e() {
                        var t, n;
                        return r().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(v && v.data && v.data.message)) {
                                        e.next = 6;
                                        break
                                    }
                                    return (0, S.Am)(v.data.message), i.reset(), e.abrupt("return");
                                case 6:
                                    return e.next = 9, null === (t = W.writeAsync) || void 0 === t ? void 0 : t.call(W);
                                case 9:
                                    if (e.t1 = n = e.sent, e.t0 = null === e.t1, e.t0) {
                                        e.next = 13;
                                        break
                                    }
                                    e.t0 = void 0 === n;
                                case 13:
                                    if (!e.t0) {
                                        e.next = 17;
                                        break
                                    }
                                    e.next = 18;
                                    break;
                                case 17:
                                    n.wait();
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                return (0, o.jsxs)(s.ZP, {
                    item: !0,
                    container: !0,
                    xs: 12,
                    spacing: 4,
                    children: [(0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, o.jsx)(A.Z, {
                            children: (0, o.jsx)(O(), {
                                selected: new Date(1e3 * D),
                                showYearDropdown: !0,
                                showMonthDropdown: !0,
                                showTimeInput: !0,
                                value: new Date(1e3 * D).toLocaleString(),
                                placeholderText: "MM-DD-YYYY hh:mm:ss",
                                customInput: (0, o.jsx)(u.Z, {
                                    fullWidth: !0,
                                    label: "Unlock Date (Local time)",
                                    autoComplete: "off"
                                }),
                                id: "form-layouts-separator-date",
                                onChange: function(e) {
                                    M(Number(e.getTime() / 1e3))
                                },
                                required: !0
                            })
                        })
                    }), (0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        sx: {
                            margin: "auto"
                        },
                        children: n.data && n.data[4] && n.data[2] && Number(g.formatUnits(n.data[4], n.data[2])) < c ? (0, o.jsx)(b.Z, {
                            disabled: a.isLoading,
                            variant: "contained",
                            onClick: E(r().mark((function e() {
                                var t, n;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 3, null === (t = i.writeAsync) || void 0 === t ? void 0 : t.call(i);
                                        case 3:
                                            if (e.t1 = n = e.sent, e.t0 = null === e.t1, e.t0) {
                                                e.next = 7;
                                                break
                                            }
                                            e.t0 = void 0 === n;
                                        case 7:
                                            if (!e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            e.next = 12;
                                            break;
                                        case 11:
                                            n.wait();
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            children: "Approval"
                        }) : B.isLoading ? (0, o.jsx)(C.Z, {
                            loading: !0,
                            variant: "contained",
                            children: "Loading"
                        }) : (0, o.jsx)(b.Z, {
                            disabled: "success" !== T.status,
                            variant: "contained",
                            onClick: q,
                            children: "Lock"
                        })
                    })]
                })
            }

            function B(e) {
                var t, n = e.tokenInfo,
                    a = e.waitApproval,
                    i = e.approval,
                    c = e.amount,
                    l = e.isOtherOwner,
                    d = e.owner,
                    h = e.account,
                    f = e.token,
                    x = e.isMuteLP,
                    m = e.title,
                    p = e.setError,
                    v = e.error,
                    j = e.locker,
                    Z = (0, L.useRouter)(),
                    N = (0, w.useState)(Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 2))),
                    D = N[0],
                    M = N[1],
                    T = (0, w.useState)(0),
                    W = T[0],
                    B = T[1],
                    q = (0, w.useState)(0),
                    _ = q[0],
                    Y = q[1],
                    R = (0, w.useState)(0),
                    U = R[0],
                    G = R[1],
                    $ = (0, y.PJ)({
                        address: j,
                        abi: P.IP,
                        functionName: "vestingLock",
                        args: [l ? d : h.address || "0x0", f, x, g.parseUnits((n.data && n.data[4] && n.data[2] && Number(g.formatUnits(n.data[4], n.data[2])) < c ? 0 : c).toString(), n.data && n.data[2]), k.O$.from(D), k.O$.from(100 * W), k.O$.from(86400 * _), k.O$.from(100 * U), m],
                        onSuccess: function() {
                            p(null)
                        },
                        onError: function(e) {
                            p(e)
                        }
                    }),
                    X = (0, y.GG)(I({}, $.config)),
                    J = (0, y.BX)({
                        hash: null === (t = X.data) || void 0 === t ? void 0 : t.hash,
                        onError: function(e) {
                            (0, S.Am)(e.message)
                        },
                        onSuccess: function(e) {
                            (0, S.Am)("Locked successfully"), M(Math.floor(3600 * Math.floor(Date.now() / 1e3 / 3600 + 2))), Z.push("/lock/".concat(f))
                        }
                    }),
                    z = E(r().mark((function e() {
                        var t, n;
                        return r().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(v && v.data && v.data.message)) {
                                        e.next = 6;
                                        break
                                    }
                                    return (0, S.Am)(v.data.message), i.reset(), e.abrupt("return");
                                case 6:
                                    return e.next = 9, null === (t = X.writeAsync) || void 0 === t ? void 0 : t.call(X);
                                case 9:
                                    if (e.t1 = n = e.sent, e.t0 = null === e.t1, e.t0) {
                                        e.next = 13;
                                        break
                                    }
                                    e.t0 = void 0 === n;
                                case 13:
                                    if (!e.t0) {
                                        e.next = 17;
                                        break
                                    }
                                    e.next = 18;
                                    break;
                                case 17:
                                    n.wait();
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                return (0, o.jsxs)(s.ZP, {
                    item: !0,
                    container: !0,
                    xs: 12,
                    spacing: 4,
                    children: [(0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, o.jsx)(A.Z, {
                            children: (0, o.jsx)(O(), {
                                selected: new Date(1e3 * D),
                                showYearDropdown: !0,
                                showMonthDropdown: !0,
                                showTimeInput: !0,
                                value: new Date(1e3 * D).toLocaleString(),
                                placeholderText: "MM-DD-YYYY hh:mm:ss",
                                customInput: (0, o.jsx)(u.Z, {
                                    fullWidth: !0,
                                    label: "TGE Date (Local Time)",
                                    autoComplete: "off"
                                }),
                                id: "form-layouts-separator-date",
                                onChange: function(e) {
                                    M(Number(e.getTime() / 1e3))
                                },
                                required: !0
                            })
                        })
                    }), (0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, o.jsx)(u.Z, {
                            fullWidth: !0,
                            type: "number",
                            label: "TGE Percent",
                            required: !0,
                            value: W,
                            onChange: function(e) {
                                return B(Number(e.target.value))
                            },
                            inputProps: {
                                step: 1,
                                min: 0
                            }
                        })
                    }), (0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, o.jsx)(u.Z, {
                            fullWidth: !0,
                            type: "number",
                            label: "Cycle (days)",
                            required: !0,
                            value: _,
                            onChange: function(e) {
                                return Y(Number(e.target.value))
                            },
                            inputProps: {
                                step: 1,
                                min: 0
                            }
                        })
                    }), (0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, o.jsx)(u.Z, {
                            fullWidth: !0,
                            type: "number",
                            label: "Cycle Release Percent",
                            required: !0,
                            value: U,
                            onChange: function(e) {
                                return G(Number(e.target.value))
                            },
                            inputProps: {
                                step: 1,
                                min: 0
                            }
                        })
                    }), (0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        sx: {
                            margin: "auto"
                        },
                        children: n.data && n.data[4] && n.data[2] && Number(g.formatUnits(n.data[4], n.data[2])) < c ? (0, o.jsx)(b.Z, {
                            disabled: a.isLoading,
                            variant: "contained",
                            onClick: E(r().mark((function e() {
                                var t, n;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 3, null === (t = i.writeAsync) || void 0 === t ? void 0 : t.call(i);
                                        case 3:
                                            if (e.t1 = n = e.sent, e.t0 = null === e.t1, e.t0) {
                                                e.next = 7;
                                                break
                                            }
                                            e.t0 = void 0 === n;
                                        case 7:
                                            if (!e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            e.next = 12;
                                            break;
                                        case 11:
                                            n.wait();
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            children: "Approval"
                        }) : J.isLoading ? (0, o.jsx)(C.Z, {
                            loading: !0,
                            variant: "contained",
                            children: "Loading"
                        }) : (0, o.jsx)(b.Z, {
                            disabled: "success" !== $.status,
                            variant: "contained",
                            onClick: z,
                            children: "Lock"
                        })
                    })]
                })
            }
            t.default = function() {
                var e, t, n, a, r, A, N = (0, y.LN)(),
                    O = (0, w.useState)(""),
                    L = O[0],
                    C = O[1],
                    M = (0, w.useState)(!1),
                    E = M[0],
                    T = M[1],
                    q = (0, w.useState)(!1),
                    _ = q[0],
                    Y = q[1],
                    R = (0, w.useState)(null),
                    U = R[0],
                    G = R[1],
                    $ = (0, w.useState)(0),
                    X = $[0],
                    J = $[1],
                    z = (0, w.useState)(""),
                    F = z[0],
                    H = z[1],
                    K = (0, w.useState)(null),
                    Q = K[0],
                    V = K[1],
                    ee = (0, y.mA)(),
                    te = (0, y.Dm)({
                        contracts: [{
                            address: L,
                            abi: P.RB,
                            functionName: "name"
                        }, {
                            address: L,
                            abi: P.RB,
                            functionName: "symbol"
                        }, {
                            address: L,
                            abi: P.RB,
                            functionName: "decimals"
                        }, {
                            address: L,
                            abi: P.RB,
                            functionName: "balanceOf",
                            args: [ee.address || "0x0"]
                        }, {
                            address: L,
                            abi: P.RB,
                            functionName: "allowance",
                            args: [ee.address || "0x0", D.WA[(null === (e = N.chain) || void 0 === e ? void 0 : e.id) || D.uI.id]]
                        }],
                        watch: !0
                    }),
                    ne = (0, y.PJ)({
                        address: L,
                        abi: P.RB,
                        functionName: "approve",
                        args: [D.WA[(null === (t = N.chain) || void 0 === t ? void 0 : t.id) || D.uI.id], j.Bz],
                        cacheTime: 1
                    }),
                    ae = (0, y.GG)(I({}, ne.config, {
                        onError: function(e) {
                            (0, S.Am)(e.message), ne.refetch(), ae.reset()
                        }
                    })),
                    re = (0, y.BX)({
                        hash: null === (n = ae.data) || void 0 === n ? void 0 : n.hash,
                        onError: function(e) {
                            (0, S.Am)(e.message)
                        },
                        onSuccess: function() {
                            (0, S.Am)("Approval Successfully")
                        }
                    }),
                    oe = (0, w.useState)(!1),
                    se = oe[0],
                    ie = oe[1];
                return (0, o.jsxs)(s.ZP, {
                    container: !0,
                    children: [(0, o.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        sx: {
                            marginBottom: 6
                        },
                        children: (0, o.jsx)(i.Z, {
                            variant: "h5",
                            children: "zkBoost Locker"
                        })
                    }), (0, o.jsx)(c.Z, {
                        children: (0, o.jsxs)(s.ZP, {
                            component: l.Z,
                            container: !0,
                            spacing: 4,
                            children: [(0, o.jsxs)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: [(0, o.jsxs)(i.Z, {
                                    variant: "body2",
                                    children: ["Lock address: ", D.WA[(null === (a = N.chain) || void 0 === a ? void 0 : a.id) || D.uI.id]]
                                }), (0, o.jsx)(i.Z, {
                                    variant: "body2",
                                    children: "Please exclude Lock address above from fees, rewards, max tx amount to start locking tokens. We don't support rebase tokens."
                                })]
                            }), (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, o.jsx)(u.Z, {
                                    fullWidth: !0,
                                    type: "text",
                                    label: "Token or Liquidity token",
                                    helperText: "Fill in valid token or liquidity token: 0x...",
                                    required: !0,
                                    value: L,
                                    onChange: function(e) {
                                        return C(e.target.value)
                                    },
                                    error: !Z.isAddress(L)
                                })
                            }), te.data && te.data.length === te.data.map((function(e) {
                                if (null !== e) return e
                            })).length && (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, o.jsxs)(d.Z, {
                                    children: [(0, o.jsxs)(h.Z, {
                                        children: [(0, o.jsx)(f.Z, {
                                            children: "Name"
                                        }), (0, o.jsx)(f.Z, {
                                            children: te.data[0]
                                        })]
                                    }), (0, o.jsxs)(h.Z, {
                                        children: [(0, o.jsx)(f.Z, {
                                            children: "Symbol"
                                        }), (0, o.jsx)(f.Z, {
                                            children: te.data[1]
                                        })]
                                    }), (0, o.jsxs)(h.Z, {
                                        children: [(0, o.jsx)(f.Z, {
                                            children: "Decimals"
                                        }), (0, o.jsx)(f.Z, {
                                            children: te.data[2]
                                        })]
                                    }), ee.address && (0, o.jsxs)(h.Z, {
                                        children: [(0, o.jsx)(f.Z, {
                                            children: "Balance"
                                        }), (0, o.jsx)(f.Z, {
                                            children: Number(g.formatUnits(te.data[3] || k.O$.from(0), te.data[2]))
                                        })]
                                    })]
                                })
                            }), (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, o.jsx)(x.Z, {
                                    children: (0, o.jsx)(m.Z, {
                                        control: (0, o.jsx)(p.Z, {
                                            checked: E,
                                            onChange: function(e, t) {
                                                return T(t)
                                            }
                                        }),
                                        label: "This is Liquidity Token"
                                    })
                                })
                            }), (0, o.jsxs)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: [(0, o.jsx)(x.Z, {
                                    children: (0, o.jsx)(m.Z, {
                                        control: (0, o.jsx)(p.Z, {
                                            checked: _,
                                            onChange: function(e, t) {
                                                return Y(t)
                                            }
                                        }),
                                        label: "use another owner?"
                                    })
                                }), _ && (0, o.jsx)(u.Z, {
                                    fullWidth: !0,
                                    type: "text",
                                    label: "Owner Address",
                                    value: U,
                                    required: _,
                                    onChange: function(e) {
                                        return G(e.target.value)
                                    },
                                    error: !Z.isAddress(U)
                                })]
                            }), (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, o.jsx)(u.Z, {
                                    fullWidth: !0,
                                    type: "text",
                                    label: "Title",
                                    value: F,
                                    required: !0,
                                    onChange: function(e) {
                                        return H(e.target.value)
                                    }
                                })
                            }), (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, o.jsx)(u.Z, {
                                    fullWidth: !0,
                                    type: "number",
                                    label: "Amount",
                                    required: !0,
                                    value: X,
                                    onChange: function(e) {
                                        return J(Number(e.target.value))
                                    },
                                    inputProps: {
                                        step: 1,
                                        min: 0
                                    },
                                    InputProps: {
                                        endAdornment: (0, o.jsx)(v.Z, {
                                            position: "start",
                                            children: (0, o.jsx)(b.Z, {
                                                onClick: function() {
                                                    return te.data && te.data[3] && te.data[2] && J(Number(g.formatUnits(te.data[3], te.data[2])))
                                                },
                                                children: "Max"
                                            })
                                        })
                                    }
                                })
                            }), (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, o.jsx)(x.Z, {
                                    children: (0, o.jsx)(m.Z, {
                                        control: (0, o.jsx)(p.Z, {
                                            checked: se,
                                            onChange: function(e, t) {
                                                return ie(t)
                                            }
                                        }),
                                        label: "use vesting?"
                                    })
                                })
                            }), se ? (0, o.jsx)(B, {
                                tokenInfo: te,
                                waitApproval: re,
                                approval: ae,
                                amount: X,
                                isOtherOwner: _,
                                owner: U,
                                account: ee,
                                token: L,
                                isMuteLP: E,
                                title: F,
                                setError: V,
                                error: Q,
                                locker: D.WA[(null === (r = N.chain) || void 0 === r ? void 0 : r.id) || D.uI.id]
                            }) : (0, o.jsx)(W, {
                                tokenInfo: te,
                                waitApproval: re,
                                approval: ae,
                                amount: X,
                                isOtherOwner: _,
                                owner: U,
                                account: ee,
                                token: L,
                                isMuteLP: E,
                                title: F,
                                setError: V,
                                error: Q,
                                locker: D.WA[(null === (A = N.chain) || void 0 === A ? void 0 : A.id) || D.uI.id]
                            })]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [138, 1903, 6089, 2638, 5104, 164, 9774, 2888, 179], (function() {
            return t = 70617, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);