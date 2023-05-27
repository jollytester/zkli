(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1018], {
        52585: function(t, a, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/launchpad", function() {
                return n(22353)
            }])
        },
        61144: function(t, a, n) {
            "use strict";
            n.d(a, {
                xA: function() {
                    return e
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
            var e = new(n(42660).j3)({
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdlMGQyYjZkOTM1ZmQ1QWI0OTY5YTkzRjgzNWE3NzVjMkNlZjM2MTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDcwOTExMTU3NSwibmFtZSI6InVwbG9hZGVyIn0.Jtu9dKUr_W0Iep4Vqo_-Gvc797O-YRDEPVnYsbqx9d0"
            });

            function r(t) {
                var a;
                try {
                    a = new URL(t)
                } catch (n) {
                    return !1
                }
                return "http:" === a.protocol || "https:" === a.protocol
            }

            function i(t) {
                switch (t.split(":")[0].toLowerCase()) {
                    case "https":
                        return [t];
                    case "http":
                        return ["https" + t.substr(4), t];
                    case "ipfs":
                        var a, n = null === (a = t.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === a ? void 0 : a[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(n, "/"), "https://ipfs.io/ipfs/".concat(n, "/")];
                    case "ipns":
                        var e, r = null === (e = t.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === e ? void 0 : e[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(r, "/"), "https://ipfs.io/ipns/".concat(r, "/")];
                    default:
                        return [""]
                }
            }

            function s(t) {
                switch (t) {
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
        22353: function(t, a, n) {
            "use strict";
            n.r(a);
            var e = n(28520),
                r = n.n(e),
                i = n(85893),
                s = n(87357),
                o = n(15861),
                d = n(86886),
                c = n(70519),
                l = n(81458),
                u = n(50122),
                h = n(87918),
                x = n(18979),
                p = n(26447),
                m = n(66242),
                f = n(83321),
                g = n(69661),
                j = n(44267),
                w = n(69077),
                Z = n(10164),
                b = n(61744),
                v = n(67294),
                k = n(98130),
                y = n(47140),
                _ = n(82661),
                N = n(61144);

            function C(t, a, n, e, r, i, s) {
                try {
                    var o = t[i](s),
                        d = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? a(d) : Promise.resolve(d).then(e, r)
            }

            function S(t) {
                var a, n = t.address,
                    e = t.type,
                    d = t.className,
                    c = (0, v.useState)(null),
                    h = c[0],
                    _ = c[1],
                    S = (0, w.do)({
                        abi: Z.qD,
                        address: n,
                        functionName: "tokeninfo",
                        watch: !0
                    }),
                    P = (0, w.do)({
                        abi: Z.qD,
                        address: n,
                        functionName: "presale_info",
                        watch: !0
                    }),
                    D = (0, w.do)({
                        abi: Z.qD,
                        address: n,
                        functionName: "metadata"
                    }),
                    H = (0, w.do)({
                        abi: Z.qD,
                        address: n,
                        functionName: "status",
                        watch: !0
                    }),
                    I = (0, w.do)({
                        abi: Z.qD,
                        address: n,
                        functionName: "presaleStatus",
                        watch: !0
                    });
                return (0, v.useEffect)((function() {
                    var t;
                    D.data && (t = r().mark((function t() {
                        return r().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.t0 = _, t.next = 3, fetch("https://".concat(D.data, ".ipfs.nftstorage.link/metadata.json"));
                                case 3:
                                    return t.next = 5, t.sent.json();
                                case 5:
                                    t.t1 = t.sent, (0, t.t0)(t.t1);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })), function() {
                        var a = this,
                            n = arguments;
                        return new Promise((function(e, r) {
                            var i = t.apply(a, n);

                            function s(t) {
                                C(i, e, r, s, o, "next", t)
                            }

                            function o(t) {
                                C(i, e, r, s, o, "throw", t)
                            }
                            s(void 0)
                        }))
                    })()
                }), [D.data]), S.data && P.data && H.data && I.data ? (0, i.jsx)(m.Z, {
                    sx: {
                        height: "100%",
                        border: "1px solid black"
                    },
                    className: d,
                    children: (0, i.jsxs)(j.Z, {
                        sx: {
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: function(t) {
                                return "".concat(t.spacing(9.75, 5, 9.25), " !important")
                            }
                        },
                        children: [(0, i.jsx)(g.Z, {
                            sx: {
                                width: 105,
                                height: 105,
                                marginBottom: 2.25,
                                border: "1.5px solid #4e806b"
                            },
                            src: null === h || void 0 === h || null === (a = h.properties) || void 0 === a ? void 0 : a.logo
                        }), (0, i.jsxs)(o.Z, {
                            variant: "h6",
                            sx: {
                                marginBottom: 2.75
                            },
                            children: [S.data.name, " ", (0, N.vM)(e)]
                        }), (0, i.jsx)(p.Z, {
                            direction: "row",
                            spacing: 1,
                            sx: {
                                marginBottom: 2.75,
                                height: "25px"
                            },
                            children: (0, i.jsx)(y.Z, {
                                presaleaddress: n
                            })
                        }), (0, i.jsxs)(o.Z, {
                            variant: "h6",
                            sx: {
                                marginBottom: 0,
                                marginTop: 4
                            },
                            children: ["Progress (", Math.floor(100 * Number(parseFloat(b.formatEther(H.data.raised_amount)).toFixed(5)) / Number(b.formatEther(2 !== e ? P.data.hardcap : P.data.softcap))), "%)"]
                        }), (0, i.jsx)(s.Z, {
                            sx: {
                                width: "100%"
                            },
                            children: (0, i.jsx)(l.Z, {
                                variant: "determinate",
                                value: Math.floor(100 * Number(parseFloat(b.formatEther(H.data.raised_amount)).toFixed(5)) / Number(b.formatEther(2 !== e ? P.data.hardcap : P.data.softcap))),
                                sx: {
                                    height: "20px",
                                    borderRadius: "10px"
                                }
                            })
                        }), (0, i.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                marginBottom: 4
                            },
                            children: [(0, i.jsxs)(o.Z, {
                                variant: "body2",
                                children: [Number(parseFloat(b.formatEther(H.data.raised_amount)).toFixed(5)), " ETH"]
                            }), (0, i.jsxs)(o.Z, {
                                variant: "body2",
                                children: [2 !== e ? b.formatEther(P.data.hardcap).toString() : b.formatEther(P.data.softcap).toString(), " ETH"]
                            })]
                        }), (0, i.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between"
                            },
                            children: [(0, i.jsx)(o.Z, {
                                variant: "h6",
                                children: "Liquidity %"
                            }), (0, i.jsxs)(o.Z, {
                                variant: "h6",
                                children: [P.data.liquidity_percent.toString(), "%"]
                            })]
                        }), (0, i.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                marginBottom: 6
                            },
                            children: [(0, i.jsx)(o.Z, {
                                variant: "h6",
                                children: "Lockup Time"
                            }), (0, i.jsxs)(o.Z, {
                                variant: "h6",
                                children: [P.data.liquidity_lock.toString(), " day(s)"]
                            })]
                        }), (0, i.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between"
                            },
                            children: [(0, i.jsxs)(s.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [(0, i.jsx)(o.Z, {
                                    variant: "h6",
                                    children: (0, i.jsx)(k.ZP, {
                                        date: new Date(1e3 * P.data.presale_start.toNumber()),
                                        renderer: function(t) {
                                            var a, n;
                                            return t.completed ? ((null === P || void 0 === P || null === (a = P.data) || void 0 === a || null === (n = a.presale_end) || void 0 === n ? void 0 : n.toNumber()) || 0) > Date.now() ? "Sale end in" : "Status" : "Sale start in"
                                        }
                                    }, "".concat(n, "-check1"))
                                }), (0, i.jsx)(o.Z, {
                                    variant: "h6",
                                    children: I.data.toNumber() <= 1 ? (0, i.jsx)(k.ZP, {
                                        date: new Date(1e3 * P.data.presale_start.toNumber()),
                                        children: (0, i.jsx)(k.ZP, {
                                            date: new Date(1e3 * P.data.presale_end.toNumber()),
                                            children: (0, i.jsx)("div", {
                                                children: "Sale ended"
                                            })
                                        }, "".concat(n, "-end"))
                                    }, "".concat(n, "-start")) : (0, i.jsx)("div", {
                                        children: "Sale ended"
                                    })
                                })]
                            }), (0, i.jsx)(u.Z, {
                                href: "/launchpad/".concat(n),
                                children: (0, i.jsx)(f.Z, {
                                    variant: "contained",
                                    sx: {
                                        padding: function(t) {
                                            return t.spacing(1.75, 5.5)
                                        }
                                    },
                                    children: "View"
                                })
                            })]
                        })]
                    })
                }) : (0, i.jsx)(m.Z, {
                    children: (0, i.jsxs)(j.Z, {
                        sx: {
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: function(t) {
                                return "".concat(t.spacing(9.75, 5, 9.25), " !important")
                            }
                        },
                        children: [(0, i.jsx)(x.Z, {
                            variant: "circular",
                            width: 105,
                            height: 105
                        }), (0, i.jsx)(x.Z, {
                            variant: "rectangular",
                            width: "100%",
                            height: 60,
                            sx: {
                                margin: "10px"
                            }
                        }), (0, i.jsx)(x.Z, {
                            variant: "rectangular",
                            width: "100%",
                            height: 60,
                            sx: {
                                margin: "10px"
                            }
                        })]
                    })
                })
            }

            function P() {
                return (0, i.jsx)(m.Z, {
                    sx: {
                        height: "100%",
                        border: "1px solid black"
                    },
                    className: "rainbow",
                    children: (0, i.jsxs)(j.Z, {
                        sx: {
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: function(t) {
                                return "".concat(t.spacing(9.75, 5, 9.25), " !important")
                            }
                        },
                        children: [(0, i.jsx)(g.Z, {
                            sx: {
                                width: 105,
                                height: 105,
                                marginBottom: 2.25,
                                border: "1.5px solid #4e806b"
                            },
                            src: "/images/zkb-token.png"
                        }), (0, i.jsx)(o.Z, {
                            variant: "h6",
                            sx: {
                                marginBottom: 2.75
                            },
                            children: "zkBoost Token IDO"
                        }), (0, i.jsxs)(p.Z, {
                            direction: "row",
                            spacing: 1,
                            sx: {
                                marginBottom: 2.75,
                                height: "25px"
                            },
                            children: [(0, i.jsx)(h.Z, {
                                size: "small",
                                label: "KYC",
                                color: "info"
                            }), (0, i.jsx)(h.Z, {
                                size: "small",
                                label: "Audit",
                                color: "success"
                            }), (0, i.jsx)(h.Z, {
                                size: "small",
                                label: "SAFU",
                                color: "primary"
                            }), (0, i.jsx)(h.Z, {
                                size: "small",
                                label: "Trust",
                                sx: {
                                    backgroundColor: "#AA4731",
                                    color: "white"
                                }
                            }), (0, i.jsx)(h.Z, {
                                size: "small",
                                label: "ZKBP",
                                sx: {
                                    backgroundColor: "#F37467",
                                    color: "white"
                                }
                            })]
                        }), (0, i.jsx)(o.Z, {
                            variant: "h6",
                            sx: {
                                marginBottom: 0,
                                marginTop: 4
                            },
                            children: "Softcap/Hardcap"
                        }), (0, i.jsx)(s.Z, {
                            sx: {
                                width: "100%"
                            },
                            children: (0, i.jsx)(l.Z, {
                                variant: "determinate",
                                value: 0,
                                sx: {
                                    height: "20px",
                                    borderRadius: "10px"
                                }
                            })
                        }), (0, i.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                marginBottom: 4
                            },
                            children: [(0, i.jsx)(o.Z, {
                                variant: "body2",
                                children: "200 ETH"
                            }), (0, i.jsx)(o.Z, {
                                variant: "body2",
                                children: "450 ETH"
                            })]
                        }), (0, i.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                marginTop: 5,
                                alignContent: "center",
                                alignItems: "center"
                            },
                            children: [(0, i.jsxs)(s.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [(0, i.jsx)(o.Z, {
                                    variant: "h6",
                                    children: "Presale time"
                                }), (0, i.jsx)(o.Z, {
                                    variant: "h6",
                                    children: "TBA"
                                })]
                            }), (0, i.jsx)(f.Z, {
                                variant: "contained",
                                sx: {
                                    padding: function(t) {
                                        return t.spacing(1.75, 5.5)
                                    }
                                },
                                children: "Detail"
                            })]
                        })]
                    })
                })
            }
            a.default = function(t) {
                t = null !== t ? t : function(t) {
                    throw t
                }(new TypeError("Cannot destructure undefined"));
                var a, n = (0, w.LN)(),
                    e = (0, w.do)({
                        address: _.du[(null === (a = n.chain) || void 0 === a ? void 0 : a.id) || _.uI.id],
                        abi: Z.m,
                        functionName: "getAllLaunchpads",
                        watch: !0
                    }),
                    r = (0, v.useState)(0),
                    l = r[0],
                    u = r[1],
                    h = (0, v.useState)(16),
                    x = h[0],
                    p = h[1],
                    m = Array.from(e.data || []);
                return m.sort((function(t, a) {
                    return a.create_at.toNumber() - t.create_at.toNumber()
                })), (0, i.jsxs)(s.Z, {
                    children: [(0, i.jsx)(s.Z, {
                        sx: {
                            marginBottom: 6
                        },
                        children: (0, i.jsx)(o.Z, {
                            variant: "h5",
                            children: "Launchpad List"
                        })
                    }), (0, i.jsxs)(d.ZP, {
                        container: !0,
                        spacing: 6,
                        sx: {
                            marginBottom: 6
                        },
                        children: [(0, i.jsx)(d.ZP, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            lg: 3,
                            children: (0, i.jsx)(P, {})
                        }, "launchpad-card-ido"), m.filter((function(t) {
                            return t.create_at.toNumber() > 0 && t.sale_type.toNumber() <= 2
                        })).slice(l * x, l * x + x).map((function(t, a) {
                            return (0, i.jsx)(d.ZP, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                lg: 3,
                                children: (0, i.jsx)(S, {
                                    address: t.presale_add,
                                    type: t.sale_type.toNumber()
                                })
                            }, "launchpad-card-".concat(a))
                        }))]
                    }), (0, i.jsx)(s.Z, {
                        sx: {
                            marginBottom: 4
                        },
                        children: (0, i.jsx)(c.Z, {
                            rowsPerPageOptions: [16, 32, 128],
                            component: "div",
                            count: m.length,
                            rowsPerPage: x,
                            page: l,
                            onPageChange: function(t, a) {
                                u(a)
                            },
                            onRowsPerPageChange: function(t) {
                                p(+t.target.value), u(0)
                            }
                        })
                    })]
                })
            }
        },
        47140: function(t, a, n) {
            "use strict";
            var e = n(85893),
                r = n(26447),
                i = n(87918),
                s = n(2593),
                o = n(10164),
                d = n(69077),
                c = n(61144);
            a.Z = function(t) {
                var a = t.presaleaddress,
                    n = (t.isAdmin, (0, d.Dm)({
                        contracts: Array.from(Array(8), (function(t, a) {
                            return a
                        })).map((function(t) {
                            return {
                                address: a,
                                abi: o.qD,
                                functionName: "tags",
                                args: [s.O$.from(t)]
                            }
                        })),
                        watch: !0
                    }));
                return n.data ? (0, e.jsxs)(r.Z, {
                    direction: "row",
                    spacing: 1,
                    sx: {
                        position: "relative",
                        top: 4
                    },
                    children: [n.data[7] && n.data[7].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "SCAM",
                        sx: {
                            backgroundColor: "#f00"
                        },
                        onClick: function() {
                            n.data && n.data[7] && (0, c.HH)(n.data[7]) && window.open(n.data[7], "_ blank")
                        }
                    }), n.data[0] && n.data[0].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "KYC",
                        color: "info",
                        onClick: function() {
                            n.data && n.data[0] && (0, c.HH)(n.data[0]) && window.open(n.data[0], "_ blank")
                        }
                    }), n.data[1] && n.data[1].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "Audit",
                        color: "success",
                        onClick: function() {
                            n.data && n.data[1] && (0, c.HH)(n.data[1]) && window.open(n.data[1], "_ blank")
                        }
                    }), n.data[2] && n.data[2].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "SAFU",
                        color: "primary",
                        onClick: function() {
                            n.data && n.data[2] && (0, c.HH)(n.data[2]) && window.open(n.data[2], "_ blank")
                        }
                    }), n.data[3] && n.data[3].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "Doxx",
                        color: "warning",
                        onClick: function() {
                            n.data && n.data[3] && (0, c.HH)(n.data[3]) && window.open(n.data[3], "_ blank")
                        }
                    }), n.data[4] && n.data[4].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "Trust",
                        sx: {
                            backgroundColor: "#AA4731",
                            color: "white"
                        },
                        onClick: function() {
                            n.data && n.data[4] && (0, c.HH)(n.data[4]) && window.open(n.data[4], "_ blank")
                        }
                    }), n.data[5] && n.data[5].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "ZKBP",
                        sx: {
                            backgroundColor: "#F37467",
                            color: "white"
                        },
                        onClick: function() {
                            n.data && n.data[5] && (0, c.HH)(n.data[5]) && window.open(n.data[5], "_ blank")
                        }
                    }), n.data[6] && n.data[6].toString().length > 0 && (0, e.jsx)(i.Z, {
                        size: "small",
                        label: "Premium",
                        sx: {
                            backgroundColor: "#ab350a",
                            color: "white"
                        },
                        onClick: function() {
                            n.data && n.data[6] && (0, c.HH)(n.data[6]) && window.open(n.data[6], "_ blank")
                        }
                    })]
                }) : null
            }
        }
    },
    function(t) {
        t.O(0, [138, 8764, 961, 3949, 519, 9840, 164, 9774, 2888, 179], (function() {
            return a = 52585, t(t.s = a);
            var a
        }));
        var a = t.O();
        _N_E = a
    }
]);