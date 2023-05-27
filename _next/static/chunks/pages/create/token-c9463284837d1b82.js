(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4569], {
        22224: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return S
                }
            });
            var r = n(63366),
                o = n(87462),
                i = n(67294),
                a = n(86010),
                s = n(27192),
                l = n(41796),
                c = n(11496),
                u = n(71657),
                d = n(59773),
                p = n(47739),
                m = n(58974),
                f = n(51705),
                b = n(35097),
                v = n(84592),
                h = n(76087);
            var g = (0, h.Z)("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]),
                x = n(28979);

            function y(e) {
                return (0, x.Z)("MuiMenuItem", e)
            }
            var Z = (0, h.Z)("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]),
                j = n(85893);
            const k = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"],
                w = (0, c.ZP)(p.Z, {
                    shouldForwardProp: e => (0, c.FO)(e) || "classes" === e,
                    name: "MuiMenuItem",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: n
                        } = e;
                        return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({}, e.typography.body1, {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    textDecoration: "none",
                    minHeight: 48,
                    paddingTop: 6,
                    paddingBottom: 6,
                    boxSizing: "border-box",
                    whiteSpace: "nowrap"
                }, !t.disableGutters && {
                    paddingLeft: 16,
                    paddingRight: 16
                }, t.divider && {
                    borderBottom: `1px solid ${e.palette.divider}`,
                    backgroundClip: "padding-box"
                }, {
                    "&:hover": {
                        textDecoration: "none",
                        backgroundColor: e.palette.action.hover,
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    },
                    [`&.${Z.selected}`]: {
                        backgroundColor: (0, l.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity),
                        [`&.${Z.focusVisible}`]: {
                            backgroundColor: (0, l.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
                        }
                    },
                    [`&.${Z.selected}:hover`]: {
                        backgroundColor: (0, l.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: (0, l.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity)
                        }
                    },
                    [`&.${Z.focusVisible}`]: {
                        backgroundColor: e.palette.action.focus
                    },
                    [`&.${Z.disabled}`]: {
                        opacity: e.palette.action.disabledOpacity
                    },
                    [`& + .${b.Z.root}`]: {
                        marginTop: e.spacing(1),
                        marginBottom: e.spacing(1)
                    },
                    [`& + .${b.Z.inset}`]: {
                        marginLeft: 52
                    },
                    [`& .${g.root}`]: {
                        marginTop: 0,
                        marginBottom: 0
                    },
                    [`& .${g.inset}`]: {
                        paddingLeft: 36
                    },
                    [`& .${v.Z.root}`]: {
                        minWidth: 36
                    }
                }, !t.dense && {
                    [e.breakpoints.up("sm")]: {
                        minHeight: "auto"
                    }
                }, t.dense && (0, o.Z)({
                    minHeight: 32,
                    paddingTop: 4,
                    paddingBottom: 4
                }, e.typography.body2, {
                    [`& .${v.Z.root} svg`]: {
                        fontSize: "1.25rem"
                    }
                }))));
            var S = i.forwardRef((function(e, t) {
                const n = (0, u.Z)({
                        props: e,
                        name: "MuiMenuItem"
                    }),
                    {
                        autoFocus: l = !1,
                        component: c = "li",
                        dense: p = !1,
                        divider: b = !1,
                        disableGutters: v = !1,
                        focusVisibleClassName: h,
                        role: g = "menuitem",
                        tabIndex: x
                    } = n,
                    Z = (0, r.Z)(n, k),
                    S = i.useContext(d.Z),
                    O = {
                        dense: p || S.dense || !1,
                        disableGutters: v
                    },
                    P = i.useRef(null);
                (0, m.Z)((() => {
                    l && P.current && P.current.focus()
                }), [l]);
                const C = (0, o.Z)({}, n, {
                        dense: O.dense,
                        divider: b,
                        disableGutters: v
                    }),
                    T = (e => {
                        const {
                            disabled: t,
                            dense: n,
                            divider: r,
                            disableGutters: i,
                            selected: a,
                            classes: l
                        } = e, c = {
                            root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
                        }, u = (0, s.Z)(c, y, l);
                        return (0, o.Z)({}, l, u)
                    })(n),
                    A = (0, f.Z)(P, t);
                let E;
                return n.disabled || (E = void 0 !== x ? x : -1), (0, j.jsx)(d.Z.Provider, {
                    value: O,
                    children: (0, j.jsx)(w, (0, o.Z)({
                        ref: A,
                        role: g,
                        tabIndex: E,
                        component: c,
                        focusVisibleClassName: (0, a.Z)(T.focusVisible, h)
                    }, Z, {
                        ownerState: C,
                        classes: T
                    }))
                })
            }))
        },
        92393: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/create/token", function() {
                return n(16814)
            }])
        },
        16814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var r = n(28520),
                o = n.n(r),
                i = n(85893),
                a = n(8987),
                s = n(94054),
                l = n(47312),
                c = n(40138),
                u = n(22224),
                d = n(61903),
                p = n(83321),
                m = n(50122),
                f = n(86886),
                b = n(15861),
                v = n(67294),
                h = n(54340),
                g = n(31041),
                x = n(60717),
                y = n(82661),
                Z = n(61744),
                j = n(84243),
                k = n(86501),
                w = n(69077);

            function S(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        l = s.value
                } catch (c) {
                    return void n(c)
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function O(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function T(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            function A() {
                var e, t, n, r, A = (0, v.useState)(!1),
                    E = A[0],
                    N = A[1],
                    F = (0, v.useState)(x.BasicToken),
                    $ = F[0],
                    _ = F[1],
                    I = (0, v.useState)({}),
                    B = I[0],
                    M = I[1],
                    G = (0, v.useState)(""),
                    V = G[0],
                    q = G[1];
                (0, v.useEffect)((function() {
                    M({})
                }), [$]);
                var R, L = (0, w.LN)(),
                    W = (R = o().mark((function e() {
                        var t, n, r, i, a, s, l, c, u, d, p, m, f, b, v, h, x, w;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return q(""), N(!0), console.log(B), r = null === (t = $.abi.find((function(e) {
                                        return "constructor" === e.type
                                    }))) || void 0 === t || null === (n = t.inputs) || void 0 === n ? void 0 : n.map((function(e) {
                                        return "bool" === e.type ? "true" === B[e.name] : B[e.name]
                                    })), console.log(r), i = new g.Web3Provider(window.ethereum).getSigner(), a = new g.ContractFactory($.abi, $.bytecode, i), e.prev = 8, e.next = 12, a.signer.estimateGas((s = a).getDeployTransaction.apply(s, C(r).concat([{
                                        value: Z.parseEther($.fee)
                                    }])));
                                case 12:
                                    return c = e.sent, e.next = 15, a.signer.getGasPrice();
                                case 15:
                                    if (u = e.sent, console.log("gasFee", Z.formatEther(u.mul(c))), window.confirm("Deploy this contract will cost you about ".concat(Number(Z.formatEther(u.mul(c)).toString()) + Number($.fee), " ETH fee (maybe less), confirm to continue ?"))) {
                                        e.next = 22;
                                        break
                                    }
                                    return (0, k.Am)("Stopped deployment"), N(!1), e.abrupt("return");
                                case 22:
                                    return e.next = 24, (l = a).deploy.apply(l, C(r).concat([{
                                        value: Z.parseEther($.fee)
                                    }]));
                                case 24:
                                    return d = e.sent, e.next = 27, d.deployTransaction.wait();
                                case 27:
                                    if (!(p = e.sent).contractAddress) {
                                        e.next = 42;
                                        break
                                    }
                                    return v = j.$, h = v.encode(null === (m = $.abi.find((function(e) {
                                        return "constructor" === e.type
                                    }))) || void 0 === m || null === (f = m.inputs) || void 0 === f ? void 0 : f.map((function(e) {
                                        return e.type
                                    })), r), e.next = 34, fetch(y.v1[(null === (b = L.chain) || void 0 === b ? void 0 : b.id) || y.uI.id], {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            contractAddress: p.contractAddress,
                                            sourceCode: {
                                                language: "Solidity",
                                                sources: O({}, $.sourceName, {
                                                    content: $.content
                                                }),
                                                settings: {
                                                    optimizer: {
                                                        enabled: !0,
                                                        mode: "3"
                                                    },
                                                    compilerPath: "",
                                                    experimental: {}
                                                }
                                            },
                                            codeFormat: "solidity-standard-json-input",
                                            contractName: "".concat($.sourceName, ":").concat($.contractName),
                                            compilerSolcVersion: "0.8.15",
                                            compilerZksolcVersion: "v1.3.7",
                                            constructorArguments: h,
                                            optimizationUsed: !0
                                        })
                                    });
                                case 34:
                                    return x = e.sent, e.next = 37, x.text();
                                case 37:
                                    q(p.contractAddress), (0, k.Am)("deploy successfull"), M({}), e.next = 43;
                                    break;
                                case 42:
                                    (0, k.Am)("deploy failed");
                                case 43:
                                    N(!1), e.next = 52;
                                    break;
                                case 46:
                                    e.prev = 46, e.t0 = e.catch(8), console.log(e.t0), (0, k.Am)((null === e.t0 || void 0 === e.t0 || null === (w = e.t0.data) || void 0 === w ? void 0 : w.message) || "Failed to create token"), N(!1);
                                case 52:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [8, 46]
                        ])
                    })), function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var o = R.apply(e, t);

                            function i(e) {
                                S(o, n, r, i, a, "next", e)
                            }

                            function a(e) {
                                S(o, n, r, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    });
                return (0, i.jsxs)(f.ZP, {
                    container: !0,
                    spacing: 6,
                    children: [(0, i.jsxs)(f.ZP, {
                        item: !0,
                        xs: 12,
                        sx: {
                            paddingBottom: 4
                        },
                        children: [(0, i.jsx)(b.Z, {
                            variant: "h5",
                            children: "Token Factory"
                        }), (0, i.jsx)(b.Z, {
                            variant: "body2",
                            children: "Token created will be automatic verified on zkSync Era Explorer."
                        })]
                    }), (0, i.jsx)(f.ZP, {
                        item: !0,
                        xs: 12,
                        sx: {
                            paddingBottom: 4
                        },
                        children: (0, i.jsx)(h.Z, {
                            children: (0, i.jsxs)(f.ZP, {
                                item: !0,
                                xs: 12,
                                component: "form",
                                container: !0,
                                spacing: 4,
                                onSubmit: function(e) {
                                    e.preventDefault(), W()
                                },
                                children: [(0, i.jsx)(f.ZP, {
                                    item: !0,
                                    xs: 9,
                                    children: (0, i.jsxs)(s.Z, {
                                        fullWidth: !0,
                                        children: [(0, i.jsx)(l.Z, {
                                            id: "demo-simple-select-label",
                                            children: " Token type "
                                        }), (0, i.jsx)(c.Z, {
                                            labelId: "demo-simple-select-label",
                                            id: "demo-simple-select",
                                            label: "Token type",
                                            value: $.contractName,
                                            onChange: function(e) {
                                                _(x[e.target.value] || null)
                                            },
                                            children: Object.keys(x).map((function(e, t) {
                                                return (0, i.jsxs)(u.Z, {
                                                    value: e,
                                                    children: [x[e].name, " (", x[e].fee, " ETH) "]
                                                }, "code-".concat(t))
                                            }))
                                        })]
                                    })
                                }), (0, i.jsx)(f.ZP, {
                                    item: !0,
                                    xs: 3,
                                    children: (0, i.jsx)(d.Z, {
                                        fullWidth: !0,
                                        required: !0,
                                        type: "text",
                                        label: "Creation fee",
                                        value: "".concat($.fee, " ETH"),
                                        disabled: !0
                                    })
                                }), null === (e = $.abi.find((function(e) {
                                    return "constructor" === e.type
                                }))) || void 0 === e || null === (t = e.inputs) || void 0 === t ? void 0 : t.map((function(e, t) {
                                    var n, r, o, a, p, m, b, v, h;
                                    return "bool" !== e.type ? (0, i.jsx)(f.ZP, {
                                        item: !0,
                                        xs: ((null === (n = $.abi.find((function(e) {
                                            return "constructor" === e.type
                                        }))) || void 0 === n || null === (r = n.inputs) || void 0 === r ? void 0 : r.length) || 0) % 2 === 1 && t === ((null === (o = $.abi.find((function(e) {
                                            return "constructor" === e.type
                                        }))) || void 0 === o || null === (a = o.inputs) || void 0 === a ? void 0 : a.length) || 0) - 1 ? 12 : 6,
                                        children: (0, i.jsx)(d.Z, {
                                            fullWidth: !0,
                                            required: !0,
                                            type: "text",
                                            label: T(e.name).replace("_", "").replace(/([A-Z])/g, " $1").trim(),
                                            helperText: (h = e.name, ["name", "symbol", "suply", "supply"].some((function(e) {
                                                return h.indexOf(e) >= 0
                                            })) ? " " : ["int"].some((function(e) {
                                                return h.indexOf(e) >= 0
                                            })) ? "input valid number" : ["maxTransactionRateBuy", "maxTransactionRateSell"].some((function(e) {
                                                return h.includes(e)
                                            })) ? "10 units = 1%, >= 0.1%" : ["maxWalletLimitRate"].some((function(e) {
                                                return h.includes(e)
                                            })) ? "10 units = 1%, >= 1%" : ["buyFee", "sellFee"].some((function(e) {
                                                return h.indexOf(e) >= 0
                                            })) ? "1 unit = 1%, <= 15%" : ["liquidityShare", "marketingShare"].some((function(e) {
                                                return h.indexOf(e) >= 0
                                            })) ? "LP Share + Mkt Share must be equals 100" : "input valid value"),
                                            value: B[e.name] || "",
                                            onChange: function(t) {
                                                M((function(n) {
                                                    return P({}, n, O({}, e.name, e.type.includes("int") ? t.target.value.replace(/[^0-9,.]/g, "").replace(",", ".") : t.target.value))
                                                }))
                                            },
                                            focused: !0
                                        })
                                    }) : (0, i.jsx)(f.ZP, {
                                        item: !0,
                                        xs: ((null === (p = $.abi.find((function(e) {
                                            return "constructor" === e.type
                                        }))) || void 0 === p || null === (m = p.inputs) || void 0 === m ? void 0 : m.length) || 0) % 2 === 1 && t === ((null === (b = $.abi.find((function(e) {
                                            return "constructor" === e.type
                                        }))) || void 0 === b || null === (v = b.inputs) || void 0 === v ? void 0 : v.length) || 0) - 1 ? 12 : 6,
                                        children: (0, i.jsxs)(s.Z, {
                                            fullWidth: !0,
                                            children: [(0, i.jsx)(l.Z, {
                                                id: "demo-simple-select-label",
                                                children: T(e.name).replace("_", "").replace(/([A-Z])/g, " $1").trim()
                                            }), (0, i.jsxs)(c.Z, {
                                                labelId: "demo-simple-select-label",
                                                id: "demo-simple-select",
                                                label: T(e.name).replace("_", "").replace(/([A-Z])/g, " $1").trim(),
                                                value: B[e.name] || "false",
                                                onChange: function(t) {
                                                    M((function(n) {
                                                        return P({}, n, O({}, e.name, t.target.value))
                                                    }))
                                                },
                                                children: [(0, i.jsx)(u.Z, {
                                                    value: "false",
                                                    children: "False"
                                                }), (0, i.jsx)(u.Z, {
                                                    value: "true",
                                                    children: "True"
                                                })]
                                            })]
                                        })
                                    })
                                })), (0, i.jsx)(f.ZP, {
                                    item: !0,
                                    xs: 12,
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: E ? (0, i.jsx)(a.Z, {
                                        loading: !0,
                                        variant: "contained",
                                        children: "Create"
                                    }) : (0, i.jsx)(p.Z, {
                                        type: "submit",
                                        variant: "contained",
                                        children: "Create"
                                    })
                                })]
                            })
                        })
                    }), (0, i.jsx)(f.ZP, {
                        item: !0,
                        xs: 12,
                        sx: {
                            paddingBottom: 4
                        },
                        children: V && (0, i.jsxs)(m.Z, {
                            href: "".concat((null === (n = L.chain) || void 0 === n || null === (r = n.blockExplorers) || void 0 === r ? void 0 : r.default.url) || y.uI.blockExplorers.default.url, "/address/").concat(V),
                            target: "_blank",
                            children: ["Contract: ", V]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [138, 1903, 6089, 7409, 4527, 9774, 2888, 179], (function() {
            return t = 92393, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);