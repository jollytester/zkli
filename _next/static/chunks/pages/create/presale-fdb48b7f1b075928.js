(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8648], {
        76122: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/create/presale", function() {
                return n(16034)
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
                            d = e.authenticationStatus,
                            c = e.mounted && "loading" !== d,
                            u = c && n && i && (!d || "authenticated" === d);
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
                        }({}, !c && {
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
        16034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ce
                }
            });
            var a = n(85893),
                r = n(86886),
                i = n(15861),
                s = n(67294),
                o = n(40044),
                l = n(66242),
                d = n(66568),
                c = n(55050),
                u = n(45670),
                h = n(44267),
                p = n(635),
                x = n(87357),
                f = n(61903),
                m = n(72882),
                b = n(7906),
                j = n(295),
                Z = n(53816),
                g = n(53252),
                v = n(83321),
                y = n(45962),
                k = n(61744),
                _ = n(21046),
                w = n(86501),
                P = n(54340),
                S = n(10164),
                I = n(53532),
                N = n(82661),
                B = n(35769),
                C = n(17740),
                q = n(69077);

            function R(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var M = function(e) {
                    var t, n, s = e.setStep,
                        o = (0, C.R)(B.Z.state),
                        l = (0, q.mA)(),
                        d = (0, q.LN)(),
                        c = N.Mt[(null === (t = d.chain) || void 0 === t ? void 0 : t.id) || N.uI.id],
                        u = (0, q.Dm)({
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
                                args: [l.address || "0x0", c]
                            }, {
                                address: o.token,
                                abi: S.RB,
                                functionName: "balanceOf",
                                args: [l.address || "0x0"]
                            }],
                            watch: !0
                        }),
                        h = (0, q.PJ)({
                            address: o.token,
                            abi: S.RB,
                            functionName: "approve",
                            args: [c, u.data && u.data[1] ? u.data[1] : _.Bz],
                            cacheTime: 1
                        }).config,
                        M = (0, y.uX)(),
                        O = (0, q.GG)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), a.forEach((function(t) {
                                    R(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, h, {
                            onSuccess: function(e) {
                                M({
                                    hash: e.hash,
                                    description: "Approve Token"
                                })
                            }
                        })),
                        L = (0, q.BX)({
                            hash: null === (n = O.data) || void 0 === n ? void 0 : n.hash,
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
                                        helperText: "Pool creation fee: ".concat(I.p, " ETH & 10% presale raised"),
                                        onChange: function(e) {
                                            return B.Z.setToken(e.target.value)
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
                                                    children: [(0, a.jsx)(g.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Token"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: u.data[0]
                                                    })]
                                                }, "token"), (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(g.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Total Supply"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: Number(k.formatUnits(u.data[1], u.data[2])).toLocaleString()
                                                    })]
                                                }, "token sup"), (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(g.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Decimals"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: u.data[2]
                                                    })]
                                                }, "token dec"), (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(g.Z, {
                                                        component: "th",
                                                        scope: "row",
                                                        children: "Balance"
                                                    }), (0, a.jsx)(g.Z, {
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
                                children: u.data && u.data[0] && u.data[4] && (0, p.isBigNumberish)(u.data[4]) && u.data[2] && u.data[3] && (0, p.isBigNumberish)(u.data[3]) && Number(k.formatUnits(u.data[3], u.data[2])) < Number(k.formatUnits(u.data[4], u.data[2])) ? (0, a.jsx)(v.Z, {
                                    disabled: O.isLoading || L.isLoading,
                                    variant: "contained",
                                    onClick: function() {
                                        var e;
                                        return null === (e = O.write) || void 0 === e ? void 0 : e.call(O)
                                    },
                                    children: O.isLoading || L.isLoading ? "Loading ..." : "Approval"
                                }) : (0, a.jsx)(v.Z, {
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
                O = n(28520),
                L = n.n(O),
                A = n(94054),
                E = n(40476),
                D = n(72890),
                T = n(50480),
                W = n(36872),
                U = n(47312),
                Y = n(40138),
                H = n(22224),
                $ = n(2593),
                J = n(9198),
                z = n.n(J),
                F = (n(51360), n(25463)),
                G = n(8987);

            function V(e, t, n, a, r, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (d) {
                    return void n(d)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, r)
            }
            var X = function(e) {
                    var t, n, o = e.setStep,
                        l = (0, C.R)(B.Z.state),
                        d = (0, q.mA)(),
                        c = (0, s.useState)(null),
                        u = c[0],
                        h = c[1],
                        p = (0, q.LN)(),
                        m = N.Mt[(null === (t = p.chain) || void 0 === t ? void 0 : t.id) || N.uI.id],
                        b = (0, q.Dm)({
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
                                args: [d.address || "0x1"]
                            }],
                            watch: !0
                        }),
                        j = (0, q.PJ)({
                            address: m,
                            abi: S.hZ,
                            functionName: "create",
                            args: [l.token || "0x0", k.parseUnits(l.buy_rate.toString(), b.data && b.data[2]), k.parseUnits(l.list_rate.toString(), b.data && b.data[2]), k.parseEther(l.buy_min.toString()), k.parseEther(l.buy_max.toString()), k.parseEther(l.softcap.toString()), k.parseEther(l.hardcap.toString()), l.isBurnRefund, $.O$.from(l.liquidity_percent), $.O$.from(l.liquidity_lock), l.whitelist, $.O$.from(l.presale_start), $.O$.from(l.presale_end), l.ipfsdata],
                            overrides: {
                                from: d.address,
                                value: k.parseEther(I.p)
                            },
                            onSuccess: function() {
                                h(null)
                            },
                            onError: function(e) {
                                h(e)
                            }
                        }),
                        Z = (n = L().mark((function e() {
                            return L().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(l.buy_rate <= 0 || l.list_rate <= 0 || l.buy_max <= 0 || l.buy_min <= 0 || l.softcap <= 0 || l.hardcap <= 0 || l.liquidity_percent <= 0 || l.liquidity_lock < 0)) {
                                            e.next = 5;
                                            break
                                        }
                                        return (0, w.Am)("Please fill with valid value"), e.abrupt("return");
                                    case 5:
                                        if (!(2 * l.softcap < l.hardcap || l.softcap >= l.hardcap)) {
                                            e.next = 10;
                                            break
                                        }
                                        return (0, w.Am)("Soft cap must be >= 50% hardcap and < hardcap"), e.abrupt("return");
                                    case 10:
                                        if (!(l.buy_min > l.buy_max)) {
                                            e.next = 15;
                                            break
                                        }
                                        return (0, w.Am)("Buy min must be < buy max"), e.abrupt("return");
                                    case 15:
                                        if (!(l.liquidity_percent < 51 || l.liquidity_percent > 100)) {
                                            e.next = 20;
                                            break
                                        }
                                        return (0, w.Am)("Invalid liquidity percent"), e.abrupt("return");
                                    case 20:
                                        if (!(l.presale_start < Date.now() / 1e3)) {
                                            e.next = 25;
                                            break
                                        }
                                        return (0, w.Am)("Start time can not be in the pass"), e.abrupt("return");
                                    case 25:
                                        if (!(l.presale_end < l.presale_start)) {
                                            e.next = 30;
                                            break
                                        }
                                        return (0, w.Am)("End time can not be in the pass to Start time"), e.abrupt("return");
                                    case 30:
                                        if (!(b && b.data && b.data[4] && Number(k.formatUnits(b.data[4], b.data && b.data[2])) < l.buy_rate * l.hardcap + l.list_rate * (90 * l.hardcap / 100) * (l.liquidity_percent / 100))) {
                                            e.next = 35;
                                            break
                                        }
                                        return (0, w.Am)("Token needed to more than token balance in your account"), e.abrupt("return");
                                    case 35:
                                        if (!(u && u.data && u.data.message)) {
                                            e.next = 40;
                                            break
                                        }
                                        return (0, w.Am)(u.data.message), e.abrupt("return");
                                    case 40:
                                        o("3");
                                    case 41:
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
                                    V(i, a, r, s, o, "next", e)
                                }

                                function o(e) {
                                    V(i, a, r, s, o, "throw", e)
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
                                children: "Presale Info"
                            }), (0, a.jsx)(i.Z, {
                                variant: "body2",
                                sx: {
                                    marginBottom: 4
                                },
                                children: "Enter the presale information that you want to raise, that should be enter all details about your presale"
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
                                        xs: 12,
                                        children: (0, a.jsx)(f.Z, {
                                            value: l.buy_rate,
                                            fullWidth: !0,
                                            type: "number",
                                            label: "Presale Rate",
                                            placeholder: "10",
                                            inputProps: {
                                                step: 1,
                                                min: 0
                                            },
                                            helperText: "If I spend 1 ETH how many tokens will I receive?",
                                            onChange: function(e) {
                                                return B.Z.setBuyRate(Number(e.target.value))
                                            },
                                            required: !0,
                                            error: l.buy_rate <= 0
                                        })
                                    }), (0, a.jsx)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        sx: {
                                            textAlign: "left",
                                            justifyContent: "left"
                                        },
                                        children: (0, a.jsxs)(A.Z, {
                                            required: !0,
                                            children: [(0, a.jsx)(E.Z, {
                                                id: "demo-form-control-label-placement",
                                                children: "Whitelist"
                                            }), (0, a.jsxs)(D.Z, {
                                                row: !0,
                                                "aria-labelledby": "demo-form-control-label-placement",
                                                name: "position",
                                                defaultValue: !0,
                                                onChange: function(e) {
                                                    return B.Z.setWhiteList(Boolean(e.target.value))
                                                },
                                                children: [(0, a.jsx)(T.Z, {
                                                    value: !0,
                                                    control: (0, a.jsx)(W.Z, {}),
                                                    label: "Enable"
                                                }), (0, a.jsx)(T.Z, {
                                                    value: !1,
                                                    control: (0, a.jsx)(W.Z, {}),
                                                    label: "Disable"
                                                })]
                                            })]
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
                                            children: (0, a.jsx)(f.Z, {
                                                value: l.softcap,
                                                fullWidth: !0,
                                                type: "number",
                                                label: "Softcap",
                                                inputProps: {
                                                    step: .001,
                                                    min: 0
                                                },
                                                helperText: "Softcap must be >= 50% of Hardcap!",
                                                onChange: function(e) {
                                                    return B.Z.setSoftCap(Number(e.target.value))
                                                },
                                                required: !0,
                                                error: 2 * l.softcap < l.hardcap || l.softcap >= l.hardcap || l.softcap <= 0
                                            })
                                        }), (0, a.jsx)(r.ZP, {
                                            item: !0,
                                            xs: 6,
                                            children: (0, a.jsx)(f.Z, {
                                                value: l.hardcap,
                                                fullWidth: !0,
                                                type: "number",
                                                label: "Hardcap",
                                                inputProps: {
                                                    step: .001,
                                                    min: 0
                                                },
                                                onChange: function(e) {
                                                    return B.Z.setHardCap(Number(e.target.value))
                                                },
                                                required: !0,
                                                error: 2 * l.softcap < l.hardcap || l.softcap >= l.hardcap || l.hardcap <= 0
                                            })
                                        })]
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
                                            children: (0, a.jsx)(f.Z, {
                                                value: l.buy_min,
                                                fullWidth: !0,
                                                type: "number",
                                                label: "Min buy",
                                                inputProps: {
                                                    step: .001,
                                                    min: 0
                                                },
                                                onChange: function(e) {
                                                    return B.Z.setBuyMin(Number(e.target.value))
                                                },
                                                required: !0,
                                                error: l.buy_min <= 0 || l.buy_min > l.buy_max
                                            })
                                        }), (0, a.jsx)(r.ZP, {
                                            item: !0,
                                            xs: 6,
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
                                                    return B.Z.setBuyMax(Number(e.target.value))
                                                },
                                                required: !0,
                                                error: l.buy_max <= 0 || l.buy_min > l.buy_max
                                            })
                                        })]
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
                                            children: (0, a.jsx)(f.Z, {
                                                value: l.list_rate,
                                                fullWidth: !0,
                                                type: "number",
                                                label: "Listing rate",
                                                inputProps: {
                                                    step: 1,
                                                    min: 0
                                                },
                                                onChange: function(e) {
                                                    return B.Z.setListRate(Number(e.target.value))
                                                },
                                                required: !0,
                                                error: l.list_rate <= 0
                                            })
                                        }), (0, a.jsx)(r.ZP, {
                                            item: !0,
                                            xs: 3,
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
                                                    return B.Z.setLiquidityPercent(Number(e.target.value))
                                                },
                                                required: !0,
                                                error: l.liquidity_percent <= 50 || l.liquidity_percent > 100
                                            })
                                        }), (0, a.jsx)(r.ZP, {
                                            item: !0,
                                            xs: 3,
                                            children: (0, a.jsxs)(A.Z, {
                                                required: !0,
                                                fullWidth: !0,
                                                children: [(0, a.jsx)(U.Z, {
                                                    id: "form-layouts-separator-select-label",
                                                    children: "Refund type"
                                                }), (0, a.jsxs)(Y.Z, {
                                                    label: "refund",
                                                    defaultValue: l.isBurnRefund,
                                                    id: "form-layouts-separator-select",
                                                    labelId: "form-layouts-separator-select-label",
                                                    onChange: function(e) {
                                                        return B.Z.setBurnRefund(Boolean(e.target.value))
                                                    },
                                                    children: [(0, a.jsx)(H.Z, {
                                                        value: (!0).toString(),
                                                        children: "Burn"
                                                    }), (0, a.jsx)(H.Z, {
                                                        value: (!1).toString(),
                                                        children: "Refund"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, a.jsxs)(r.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: [(0, a.jsx)(i.Z, {
                                            variant: "body2",
                                            textAlign: "left",
                                            color: "green",
                                            children: "Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)"
                                        }), (0, a.jsx)(i.Z, {
                                            variant: "body2",
                                            textAlign: "left",
                                            color: "green",
                                            children: "If I spend 1 ETH on how many tokens will I receive? Usually this amount is lower than presale rate to allow for a higher listing price on"
                                        })]
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
                                                        label: "Presale start (Local time)",
                                                        autoComplete: "off"
                                                    }),
                                                    id: "form-layouts-separator-date",
                                                    onChange: function(e) {
                                                        B.Z.setPresaleStart(Number(e.getTime() / 1e3))
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
                                                        label: "Presale end (Local time)",
                                                        autoComplete: "off"
                                                    }),
                                                    id: "form-layouts-separator-date",
                                                    onChange: function(e) {
                                                        B.Z.setPresaleEnd(Number(e.getTime() / 1e3))
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
                                                return B.Z.setLiquidityLock(Number(e.target.value))
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
                                                children: l.buy_rate * l.hardcap + l.list_rate * (90 * l.hardcap / 100) * (l.liquidity_percent / 100)
                                            }), " ", b.data && b.data[3], " to create a zkBoost pool"]
                                        })
                                    })]
                                }), (0, a.jsx)(x.Z, {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        mt: 20
                                    },
                                    children: (0, a.jsxs)(P.Z, {
                                        children: [(0, a.jsx)(v.Z, {
                                            onClick: function() {
                                                return o("1")
                                            },
                                            variant: "contained",
                                            children: "Back"
                                        }), "loading" === j.status ? (0, a.jsx)(G.Z, {
                                            loading: !0,
                                            variant: "contained",
                                            children: "Next"
                                        }) : (0, a.jsx)(v.Z, {
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
                Q = n(87109),
                K = n(89583),
                ee = n(61144);

            function te(e, t, n, a, r, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (d) {
                    return void n(d)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, r)
            }
            var ne = function(e) {
                    var t, n, o = e.setStep,
                        l = (0, C.R)(B.Z.state),
                        d = (0, q.mA)(),
                        c = (0, s.useState)(null),
                        u = c[0],
                        h = c[1],
                        p = (0, q.LN)(),
                        m = N.Mt[(null === (t = p.chain) || void 0 === t ? void 0 : t.id) || N.uI.id],
                        b = (0, q.Dm)({
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
                                args: [d.address || "0x0"]
                            }],
                            watch: !0
                        }),
                        j = (0, q.PJ)({
                            address: m,
                            abi: S.hZ,
                            functionName: "create",
                            args: [l.token || "0x0", k.parseUnits(l.buy_rate.toString(), b.data && b.data[2]), k.parseUnits(l.list_rate.toString(), b.data && b.data[2]), k.parseEther(l.buy_min.toString()), k.parseEther(l.buy_max.toString()), k.parseEther(l.softcap.toString()), k.parseEther(l.hardcap.toString()), l.isBurnRefund, $.O$.from(l.liquidity_percent), $.O$.from(l.liquidity_lock), l.whitelist, $.O$.from(l.presale_start), $.O$.from(l.presale_end), l.ipfsdata],
                            overrides: {
                                from: d.address,
                                value: k.parseEther(I.p)
                            },
                            onSuccess: function() {
                                h(null)
                            },
                            onError: function(e) {
                                h(e)
                            }
                        }),
                        Z = (n = L().mark((function e(t) {
                            var n, a, r;
                            return L().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("logo" in l.metadata) {
                                            e.next = 5;
                                            break
                                        }
                                        return (0, w.Am)("Please input project's logo"), e.abrupt("return");
                                    case 5:
                                        if ("website" in l.metadata) {
                                            e.next = 10;
                                            break
                                        }
                                        return (0, w.Am)("Please input project's logo"), e.abrupt("return");
                                    case 10:
                                        if (!(u && u.data && u.data.message)) {
                                            e.next = 15;
                                            break
                                        }
                                        return (0, w.Am)(u.data.message), e.abrupt("return");
                                    case 15:
                                        return B.Z.setLoading(!0), e.prev = 16, e.next = 19, fetch("https://zkboost.finance/images/favicon.png");
                                    case 19:
                                        return n = e.sent, e.next = 22, n.blob();
                                    case 22:
                                        return a = e.sent, e.next = 25, ee.xA.store({
                                            name: "zkBoost Metadata Launchpad",
                                            description: "zkBoost Metadata Launchpad",
                                            image: a,
                                            properties: l.metadata
                                        });
                                    case 25:
                                        r = e.sent, console.log("IPFS for the metadata:", r.ipnft), B.Z.setIpfsData(r.ipnft), B.Z.setLoading(!1), o("4"), e.next = 36;
                                        break;
                                    case 32:
                                        e.prev = 32, e.t0 = e.catch(16), (0, w.Am)("Logo url loading failed"), B.Z.setLoading(!1);
                                    case 36:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [16, 32]
                            ])
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
                                    e.preventDefault(), Z(e)
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
                                                return B.Z.setMetadata("logo", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.q3v, {})
                                                })
                                            },
                                            required: !0,
                                            value: l.metadata.website,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("website", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.fWC, {})
                                                })
                                            },
                                            value: l.metadata.twitter,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("twitter", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.Ww5, {})
                                                })
                                            },
                                            value: l.metadata.telegram,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("telegram", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.hJX, {})
                                                })
                                            },
                                            value: l.metadata.github,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("github", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.j2d, {})
                                                })
                                            },
                                            value: l.metadata.discord,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("discord", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.kpq, {})
                                                })
                                            },
                                            value: l.metadata.document,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("document", e.target.value)
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
                                                startAdornment: (0, a.jsx)(Q.Z, {
                                                    position: "start",
                                                    children: (0, a.jsx)(K.V2E, {})
                                                })
                                            },
                                            helperText: "Input your youtube URL.",
                                            value: l.metadata.youtube,
                                            onChange: function(e) {
                                                return B.Z.setMetadata("youtube", e.target.value)
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
                                                return B.Z.setMetadata("description", e.target.value)
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
                                        children: [(0, a.jsx)(v.Z, {
                                            onClick: function() {
                                                o("2"), B.Z.setLoading(!1)
                                            },
                                            disabled: "loading" === j.status || l.loading,
                                            variant: "contained",
                                            children: "Back"
                                        }), "loading" === j.status || l.loading ? (0, a.jsx)(G.Z, {
                                            loading: !0,
                                            variant: "contained",
                                            children: "Next"
                                        }) : (0, a.jsx)(v.Z, {
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
                ae = n(53184),
                re = n(50122),
                ie = n(11163);

            function se(e, t, n, a, r, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (d) {
                    return void n(d)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function oe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var le = function(e) {
                    var t, n, o = e.setStep,
                        l = (0, C.R)(B.Z.state),
                        d = (0, q.mA)(),
                        c = (0, s.useState)(null),
                        u = c[0],
                        h = c[1],
                        p = (0, q.LN)(),
                        f = N.Mt[(null === (t = p.chain) || void 0 === t ? void 0 : t.id) || N.uI.id],
                        _ = (0, q.Dm)({
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
                                args: [d.address || "0x0"]
                            }],
                            watch: !0
                        }),
                        R = (0, q.PJ)({
                            address: f,
                            abi: S.hZ,
                            functionName: "create",
                            args: [l.token || "0x0", k.parseUnits(l.buy_rate.toString(), _.data && _.data[2]), k.parseUnits(l.list_rate.toString(), _.data && _.data[2]), k.parseEther(l.buy_min.toString()), k.parseEther(l.buy_max.toString()), k.parseEther(l.softcap.toString()), k.parseEther(l.hardcap.toString()), l.isBurnRefund, $.O$.from(l.liquidity_percent), $.O$.from(l.liquidity_lock), l.whitelist, $.O$.from(l.presale_start), $.O$.from(l.presale_end), l.ipfsdata],
                            overrides: {
                                from: d.address,
                                value: k.parseEther(I.p)
                            },
                            onSuccess: function() {
                                h(null)
                            },
                            onError: function(e) {
                                h(e)
                            }
                        }),
                        M = (0, y.uX)(),
                        O = (0, q.GG)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), a.forEach((function(t) {
                                    oe(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, R.config, {
                            onError: function(e) {
                                console.log(e)
                            },
                            onSuccess: function(e) {
                                M({
                                    hash: e.hash,
                                    description: "Create Presale"
                                })
                            }
                        })),
                        A = (0, ie.useRouter)(),
                        E = (n = L().mark((function e(t) {
                            var n, a;
                            return L().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(u && u.data && u.data.message)) {
                                            e.next = 5;
                                            break
                                        }
                                        return (0, w.Am)(u.data.message), e.abrupt("return");
                                    case 5:
                                        return B.Z.setLoading(!0), e.next = 9, null === (n = O.writeAsync) || void 0 === n ? void 0 : n.call(O);
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
                                            B.Z.reset(), A.push("/launchpad/" + e.contractAddress.toString())
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
                                    se(i, a, r, s, o, "next", e)
                                }

                                function o(e) {
                                    se(i, a, r, s, o, "throw", e)
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
                                    e.preventDefault(), E(e)
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
                                            children: [(0, a.jsx)(ae.Z, {
                                                children: (0, a.jsxs)(Z.Z, {
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Info"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: "Detail"
                                                    })]
                                                })
                                            }), (0, a.jsxs)(j.Z, {
                                                children: [(0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Total token"
                                                    }), (0, a.jsxs)(g.Z, {
                                                        align: "right",
                                                        children: [l.buy_rate * l.hardcap + l.list_rate * (90 * l.hardcap / 100) * (l.liquidity_percent / 100), " ", _.data && _.data[3]]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "zkBoost Factory"
                                                    }), (0, a.jsxs)(g.Z, {
                                                        align: "right",
                                                        children: [f, " ", (0, a.jsx)(K.esY, {
                                                            onClick: function() {
                                                                navigator.clipboard.writeText(f), (0, w.Am)("Copied to clipboard")
                                                            }
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Token Name"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: _.data && _.data[0]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Token Symbol"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: _.data && _.data[3]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Token Decimals"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: _.data && _.data[2]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Presale rate"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.buy_rate
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Listing rate"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.list_rate
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Sale method"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.whitelist ? "Whitelist" : "Public"
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Softcap"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.softcap
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Hardcap"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.hardcap
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Unsold token"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.isBurnRefund ? "Burn" : "Refund"
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Minimum buy"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.buy_min
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Maximum buy"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: l.buy_max
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Liquidity"
                                                    }), (0, a.jsxs)(g.Z, {
                                                        align: "right",
                                                        children: [l.liquidity_percent, "%"]
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Start time"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: new Date(1e3 * l.presale_start).toLocaleString()
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "End time"
                                                    }), (0, a.jsx)(g.Z, {
                                                        align: "right",
                                                        children: new Date(1e3 * l.presale_end).toLocaleString()
                                                    })]
                                                }), (0, a.jsxs)(Z.Z, {
                                                    hover: !0,
                                                    tabIndex: -1,
                                                    children: [(0, a.jsx)(g.Z, {
                                                        children: "Liquidity lock time"
                                                    }), (0, a.jsxs)(g.Z, {
                                                        align: "right",
                                                        children: [l.liquidity_lock, " day(s)"]
                                                    })]
                                                }), Object.keys(l.metadata).map((function(e) {
                                                    return (0, a.jsxs)(Z.Z, {
                                                        hover: !0,
                                                        tabIndex: -1,
                                                        children: [(0, a.jsx)(g.Z, {
                                                            sx: {
                                                                textTransform: "capitalize"
                                                            },
                                                            children: e
                                                        }), (0, a.jsx)(g.Z, {
                                                            align: "right",
                                                            children: (0, ee.HH)(l.metadata[e]) ? (0, a.jsx)(re.Z, {
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
                                        children: [(0, a.jsx)(v.Z, {
                                            disabled: "loading" === R.status || l.loading,
                                            onClick: function() {
                                                return o("3")
                                            },
                                            variant: "contained",
                                            children: "Back"
                                        }), "loading" === R.status || l.loading ? (0, a.jsx)(G.Z, {
                                            loading: !0,
                                            variant: "contained",
                                            children: "Finish"
                                        }) : (0, a.jsx)(v.Z, {
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
                de = function() {
                    var e = (0, s.useState)("1"),
                        t = e[0],
                        n = e[1];
                    return (0, a.jsx)(s.Fragment, {
                        children: (0, a.jsx)(l.Z, {
                            children: (0, a.jsxs)(u.ZP, {
                                value: t,
                                children: [(0, a.jsxs)(d.Z, {
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
                                        label: "2. Presale Info"
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
                                    children: [(0, a.jsx)(c.Z, {
                                        value: "1",
                                        sx: {
                                            p: 0,
                                            mb: 10
                                        },
                                        children: (0, a.jsx)(M, {
                                            setStep: n
                                        })
                                    }), (0, a.jsx)(c.Z, {
                                        value: "2",
                                        sx: {
                                            p: 0
                                        },
                                        children: (0, a.jsx)(X, {
                                            setStep: n
                                        })
                                    }), (0, a.jsx)(c.Z, {
                                        value: "3",
                                        sx: {
                                            p: 0
                                        },
                                        children: (0, a.jsx)(ne, {
                                            setStep: n
                                        })
                                    }), (0, a.jsx)(c.Z, {
                                        value: "4",
                                        sx: {
                                            p: 0
                                        },
                                        children: (0, a.jsx)(le, {
                                            setStep: n
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                ce = function() {
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
                                children: "Create Presale"
                            })
                        }), (0, a.jsx)(r.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, a.jsx)(de, {})
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
        e.O(0, [5445, 138, 1903, 2453, 6089, 8764, 961, 2638, 6572, 2533, 2207, 164, 9774, 2888, 179], (function() {
            return t = 76122, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);