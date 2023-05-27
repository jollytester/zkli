"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7409], {
        50122: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return P
                }
            });
            var a = n(63366),
                r = n(87462),
                i = n(67294),
                s = n(86010),
                o = n(27192),
                u = n(54844),
                p = n(41796),
                y = n(98216),
                l = n(11496),
                c = n(71657),
                d = n(18791),
                m = n(51705),
                b = n(15861),
                T = n(28979);

            function f(e) {
                return (0, T.Z)("MuiLink", e)
            }
            var h = (0, n(76087).Z)("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]),
                g = n(85893);
            const v = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"],
                w = {
                    primary: "primary.main",
                    textPrimary: "text.primary",
                    secondary: "secondary.main",
                    textSecondary: "text.secondary",
                    error: "error.main"
                },
                _ = (0, l.ZP)(b.Z, {
                    name: "MuiLink",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: n
                        } = e;
                        return [t.root, t[`underline${(0,y.Z)(n.underline)}`], "button" === n.component && t.button]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    const n = (0, u.D)(e, `palette.${(e=>w[e]||e)(t.color)}`) || t.color;
                    return (0, r.Z)({}, "none" === t.underline && {
                        textDecoration: "none"
                    }, "hover" === t.underline && {
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline"
                        }
                    }, "always" === t.underline && {
                        textDecoration: "underline",
                        textDecorationColor: "inherit" !== n ? (0, p.Fq)(n, .4) : void 0,
                        "&:hover": {
                            textDecorationColor: "inherit"
                        }
                    }, "button" === t.component && {
                        position: "relative",
                        WebkitTapHighlightColor: "transparent",
                        backgroundColor: "transparent",
                        outline: 0,
                        border: 0,
                        margin: 0,
                        borderRadius: 0,
                        padding: 0,
                        cursor: "pointer",
                        userSelect: "none",
                        verticalAlign: "middle",
                        MozAppearance: "none",
                        WebkitAppearance: "none",
                        "&::-moz-focus-inner": {
                            borderStyle: "none"
                        },
                        [`&.${h.focusVisible}`]: {
                            outline: "auto"
                        }
                    })
                }));
            var P = i.forwardRef((function(e, t) {
                const n = (0, c.Z)({
                        props: e,
                        name: "MuiLink"
                    }),
                    {
                        className: u,
                        color: p = "primary",
                        component: l = "a",
                        onBlur: b,
                        onFocus: T,
                        TypographyClasses: h,
                        underline: w = "always",
                        variant: P = "inherit"
                    } = n,
                    k = (0, a.Z)(n, v),
                    {
                        isFocusVisibleRef: L,
                        onBlur: x,
                        onFocus: A,
                        ref: E
                    } = (0, d.Z)(),
                    [I, B] = i.useState(!1),
                    D = (0, m.Z)(t, E),
                    S = (0, r.Z)({}, n, {
                        color: p,
                        component: l,
                        focusVisible: I,
                        underline: w,
                        variant: P
                    }),
                    M = (e => {
                        const {
                            classes: t,
                            component: n,
                            focusVisible: a,
                            underline: r
                        } = e, i = {
                            root: ["root", `underline${(0,y.Z)(r)}`, "button" === n && "button", a && "focusVisible"]
                        };
                        return (0, o.Z)(i, f, t)
                    })(S);
                return (0, g.jsx)(_, (0, r.Z)({
                    className: (0, s.Z)(M.root, u),
                    classes: h,
                    color: p,
                    component: l,
                    onBlur: e => {
                        x(e), !1 === L.current && B(!1), b && b(e)
                    },
                    onFocus: e => {
                        A(e), !0 === L.current && B(!0), T && T(e)
                    },
                    ref: D,
                    ownerState: S,
                    variant: P
                }, k))
            }))
        },
        7779: function(e, t, n) {
            n.r(t), n.d(t, {
                BaseContract: function() {
                    return o.VZ
                },
                BigNumber: function() {
                    return u.O$
                },
                Contract: function() {
                    return o.CH
                },
                ContractFactory: function() {
                    return o.lV
                },
                FixedNumber: function() {
                    return p.xs
                },
                Signer: function() {
                    return y.E
                },
                VoidSigner: function() {
                    return y.b
                },
                Wallet: function() {
                    return l.Wallet
                },
                Wordlist: function() {
                    return me.D
                },
                constants: function() {
                    return a
                },
                errors: function() {
                    return _.ErrorCode
                },
                ethers: function() {
                    return s
                },
                getDefaultProvider: function() {
                    return ce
                },
                logger: function() {
                    return Ve
                },
                providers: function() {
                    return r
                },
                utils: function() {
                    return i
                },
                version: function() {
                    return Ge
                },
                wordlists: function() {
                    return de.E
                }
            });
            var a = {};
            n.r(a), n.d(a, {
                AddressZero: function() {
                    return c.d
                },
                EtherSymbol: function() {
                    return b
                },
                HashZero: function() {
                    return m.R
                },
                MaxInt256: function() {
                    return d.PS
                },
                MaxUint256: function() {
                    return d.Bz
                },
                MinInt256: function() {
                    return d.$B
                },
                NegativeOne: function() {
                    return d.tL
                },
                One: function() {
                    return d.fh
                },
                Two: function() {
                    return d.Py
                },
                WeiPerEther: function() {
                    return d.Ce
                },
                Zero: function() {
                    return d._Y
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                AlchemyProvider: function() {
                    return M
                },
                AlchemyWebSocketProvider: function() {
                    return S
                },
                AnkrProvider: function() {
                    return O
                },
                BaseProvider: function() {
                    return h.Zk
                },
                CloudflareProvider: function() {
                    return G
                },
                EtherscanProvider: function() {
                    return $
                },
                FallbackProvider: function() {
                    return X.H
                },
                Formatter: function() {
                    return v.Mb
                },
                InfuraProvider: function() {
                    return ae
                },
                InfuraWebSocketProvider: function() {
                    return ne
                },
                IpcProvider: function() {
                    return Q
                },
                JsonRpcBatchProvider: function() {
                    return re
                },
                JsonRpcProvider: function() {
                    return w.r
                },
                JsonRpcSigner: function() {
                    return w.C
                },
                NodesmithProvider: function() {
                    return se
                },
                PocketProvider: function() {
                    return pe
                },
                Provider: function() {
                    return T.zt
                },
                Resolver: function() {
                    return h.H2
                },
                StaticJsonRpcProvider: function() {
                    return I.c
                },
                UrlJsonRpcProvider: function() {
                    return I.l
                },
                Web3Provider: function() {
                    return ye.Q
                },
                WebSocketProvider: function() {
                    return E
                },
                getDefaultProvider: function() {
                    return ce
                },
                getNetwork: function() {
                    return f.H
                },
                isCommunityResourcable: function() {
                    return v.Ed
                },
                isCommunityResource: function() {
                    return v.Gp
                },
                showThrottleMessage: function() {
                    return v.vh
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                AbiCoder: function() {
                    return be.R
                },
                ConstructorFragment: function() {
                    return Te.Xg
                },
                ErrorFragment: function() {
                    return Te.IC
                },
                EventFragment: function() {
                    return Te.QV
                },
                FormatTypes: function() {
                    return Te.pc
                },
                Fragment: function() {
                    return Te.HY
                },
                FunctionFragment: function() {
                    return Te.YW
                },
                HDNode: function() {
                    return xe.HDNode
                },
                Indexed: function() {
                    return he.Hk
                },
                Interface: function() {
                    return he.vU
                },
                LogDescription: function() {
                    return he.CC
                },
                Logger: function() {
                    return _.Logger
                },
                ParamType: function() {
                    return Te._R
                },
                RLP: function() {
                    return Me
                },
                SigningKey: function() {
                    return Ce.SigningKey
                },
                SupportedAlgorithm: function() {
                    return He.p
                },
                TransactionDescription: function() {
                    return he.vk
                },
                TransactionTypes: function() {
                    return U.TransactionTypes
                },
                UnicodeNormalizationForm: function() {
                    return Ne.Uj
                },
                Utf8ErrorFuncs: function() {
                    return Ne.te
                },
                Utf8ErrorReason: function() {
                    return Ne.Uw
                },
                _TypedDataEncoder: function() {
                    return Le.E
                },
                _fetchData: function() {
                    return z._fetchData
                },
                _toEscapedUtf8String: function() {
                    return Ne.U$
                },
                accessListify: function() {
                    return U.accessListify
                },
                arrayify: function() {
                    return V.arrayify
                },
                base58: function() {
                    return we.Base58
                },
                base64: function() {
                    return ve
                },
                checkProperties: function() {
                    return g.checkProperties
                },
                checkResultErrors: function() {
                    return fe.BR
                },
                commify: function() {
                    return Fe.commify
                },
                computeAddress: function() {
                    return U.computeAddress
                },
                computeHmac: function() {
                    return Ie.Gy
                },
                computePublicKey: function() {
                    return Ce.computePublicKey
                },
                concat: function() {
                    return V.concat
                },
                deepCopy: function() {
                    return g.deepCopy
                },
                defaultAbiCoder: function() {
                    return be.$
                },
                defaultPath: function() {
                    return xe.defaultPath
                },
                defineReadOnly: function() {
                    return g.defineReadOnly
                },
                dnsEncode: function() {
                    return _e.Kn
                },
                entropyToMnemonic: function() {
                    return xe.entropyToMnemonic
                },
                fetchJson: function() {
                    return z.fetchJson
                },
                formatBytes32String: function() {
                    return Oe.s
                },
                formatEther: function() {
                    return Fe.formatEther
                },
                formatUnits: function() {
                    return Fe.formatUnits
                },
                getAccountPath: function() {
                    return xe.getAccountPath
                },
                getAddress: function() {
                    return ge.getAddress
                },
                getContractAddress: function() {
                    return ge.getContractAddress
                },
                getCreate2Address: function() {
                    return ge.getCreate2Address
                },
                getIcapAddress: function() {
                    return ge.getIcapAddress
                },
                getJsonWalletAddress: function() {
                    return Ae.Rb
                },
                getStatic: function() {
                    return g.getStatic
                },
                hashMessage: function() {
                    return Pe.r
                },
                hexConcat: function() {
                    return V.hexConcat
                },
                hexDataLength: function() {
                    return V.hexDataLength
                },
                hexDataSlice: function() {
                    return V.hexDataSlice
                },
                hexStripZeros: function() {
                    return V.hexStripZeros
                },
                hexValue: function() {
                    return V.hexValue
                },
                hexZeroPad: function() {
                    return V.hexZeroPad
                },
                hexlify: function() {
                    return V.hexlify
                },
                id: function() {
                    return ke.id
                },
                isAddress: function() {
                    return ge.isAddress
                },
                isBytes: function() {
                    return V.isBytes
                },
                isBytesLike: function() {
                    return V.isBytesLike
                },
                isHexString: function() {
                    return V.isHexString
                },
                isValidMnemonic: function() {
                    return xe.isValidMnemonic
                },
                isValidName: function() {
                    return _e.r1
                },
                joinSignature: function() {
                    return V.joinSignature
                },
                keccak256: function() {
                    return Ee.keccak256
                },
                mnemonicToEntropy: function() {
                    return xe.mnemonicToEntropy
                },
                mnemonicToSeed: function() {
                    return xe.mnemonicToSeed
                },
                namehash: function() {
                    return _e.VM
                },
                nameprep: function() {
                    return Re.Ll
                },
                parseBytes32String: function() {
                    return Oe.F
                },
                parseEther: function() {
                    return Fe.parseEther
                },
                parseTransaction: function() {
                    return U.parse
                },
                parseUnits: function() {
                    return Fe.parseUnits
                },
                poll: function() {
                    return z.poll
                },
                randomBytes: function() {
                    return De.O
                },
                recoverAddress: function() {
                    return U.recoverAddress
                },
                recoverPublicKey: function() {
                    return Ce.recoverPublicKey
                },
                resolveProperties: function() {
                    return g.resolveProperties
                },
                ripemd160: function() {
                    return Ie.bP
                },
                serializeTransaction: function() {
                    return U.serialize
                },
                sha256: function() {
                    return Ie.JQ
                },
                sha512: function() {
                    return Ie.o
                },
                shallowCopy: function() {
                    return g.shallowCopy
                },
                shuffled: function() {
                    return Se.y
                },
                solidityKeccak256: function() {
                    return Be.keccak256
                },
                solidityPack: function() {
                    return Be.pack
                },
                soliditySha256: function() {
                    return Be.sha256
                },
                splitSignature: function() {
                    return V.splitSignature
                },
                stripZeros: function() {
                    return V.stripZeros
                },
                toUtf8Bytes: function() {
                    return Ne.Y0
                },
                toUtf8CodePoints: function() {
                    return Ne.XL
                },
                toUtf8String: function() {
                    return Ne.ZN
                },
                verifyMessage: function() {
                    return l.verifyMessage
                },
                verifyTypedData: function() {
                    return l.verifyTypedData
                },
                zeroPad: function() {
                    return V.zeroPad
                }
            });
            var s = {};
            n.r(s), n.d(s, {
                BaseContract: function() {
                    return o.VZ
                },
                BigNumber: function() {
                    return u.O$
                },
                Contract: function() {
                    return o.CH
                },
                ContractFactory: function() {
                    return o.lV
                },
                FixedNumber: function() {
                    return p.xs
                },
                Signer: function() {
                    return y.E
                },
                VoidSigner: function() {
                    return y.b
                },
                Wallet: function() {
                    return l.Wallet
                },
                Wordlist: function() {
                    return me.D
                },
                constants: function() {
                    return a
                },
                errors: function() {
                    return _.ErrorCode
                },
                getDefaultProvider: function() {
                    return ce
                },
                logger: function() {
                    return Ve
                },
                providers: function() {
                    return r
                },
                utils: function() {
                    return i
                },
                version: function() {
                    return Ge
                },
                wordlists: function() {
                    return de.E
                }
            });
            var o = n(64146),
                u = n(2593),
                p = n(20335),
                y = n(48088),
                l = n(79911),
                c = n(9279),
                d = n(21046),
                m = n(57218);
            const b = "\u039e";
            var T = n(81556),
                f = n(45710),
                h = n(97013),
                g = n(6881),
                v = n(30032),
                w = n(82169),
                _ = n(1581),
                P = n(34216);
            let k = null;
            try {
                if (k = WebSocket, null == k) throw new Error("inject please")
            } catch (Ue) {
                const e = new _.Logger(P.i);
                k = function() {
                    e.throwError("WebSockets not supported in this environment", _.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new WebSocket()"
                    })
                }
            }
            var L = function(e, t, n, a) {
                return new(n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            u(a.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function o(e) {
                        try {
                            u(a.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, o)
                    }
                    u((a = a.apply(e, t || [])).next())
                }))
            };
            const x = new _.Logger(P.i);
            let A = 1;
            class E extends w.r {
                constructor(e, t) {
                    "any" === t && x.throwError("WebSocketProvider does not support 'any' network yet", _.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "network:any"
                    }), super("string" === typeof e ? e : "_websocket", t), this._pollingInterval = -1, this._wsReady = !1, "string" === typeof e ? (0, g.defineReadOnly)(this, "_websocket", new k(this.connection.url)) : (0, g.defineReadOnly)(this, "_websocket", e), (0, g.defineReadOnly)(this, "_requests", {}), (0, g.defineReadOnly)(this, "_subs", {}), (0, g.defineReadOnly)(this, "_subIds", {}), (0, g.defineReadOnly)(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                        this._wsReady = !0, Object.keys(this._requests).forEach((e => {
                            this.websocket.send(this._requests[e].payload)
                        }))
                    }, this.websocket.onmessage = e => {
                        const t = e.data,
                            n = JSON.parse(t);
                        if (null != n.id) {
                            const e = String(n.id),
                                a = this._requests[e];
                            if (delete this._requests[e], void 0 !== n.result) a.callback(null, n.result), this.emit("debug", {
                                action: "response",
                                request: JSON.parse(a.payload),
                                response: n.result,
                                provider: this
                            });
                            else {
                                let e = null;
                                n.error ? (e = new Error(n.error.message || "unknown error"), (0, g.defineReadOnly)(e, "code", n.error.code || null), (0, g.defineReadOnly)(e, "response", t)) : e = new Error("unknown error"), a.callback(e, void 0), this.emit("debug", {
                                    action: "response",
                                    error: e,
                                    request: JSON.parse(a.payload),
                                    provider: this
                                })
                            }
                        } else if ("eth_subscription" === n.method) {
                            const e = this._subs[n.params.subscription];
                            e && e.processFunc(n.params.result)
                        } else console.warn("this should not happen")
                    };
                    const n = setInterval((() => {
                        this.emit("poll")
                    }), 1e3);
                    n.unref && n.unref()
                }
                get websocket() {
                    return this._websocket
                }
                detectNetwork() {
                    return this._detectNetwork
                }
                get pollingInterval() {
                    return 0
                }
                resetEventsBlock(e) {
                    x.throwError("cannot reset events block on WebSocketProvider", _.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
                set pollingInterval(e) {
                    x.throwError("cannot set polling interval on WebSocketProvider", _.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
                poll() {
                    return L(this, void 0, void 0, (function*() {
                        return null
                    }))
                }
                set polling(e) {
                    e && x.throwError("cannot set polling on WebSocketProvider", _.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
                send(e, t) {
                    const n = A++;
                    return new Promise(((a, r) => {
                        const i = JSON.stringify({
                            method: e,
                            params: t,
                            id: n,
                            jsonrpc: "2.0"
                        });
                        this.emit("debug", {
                            action: "request",
                            request: JSON.parse(i),
                            provider: this
                        }), this._requests[String(n)] = {
                            callback: function(e, t) {
                                return e ? r(e) : a(t)
                            },
                            payload: i
                        }, this._wsReady && this.websocket.send(i)
                    }))
                }
                static defaultUrl() {
                    return "ws://localhost:8546"
                }
                _subscribe(e, t, n) {
                    return L(this, void 0, void 0, (function*() {
                        let a = this._subIds[e];
                        null == a && (a = Promise.all(t).then((e => this.send("eth_subscribe", e))), this._subIds[e] = a);
                        const r = yield a;
                        this._subs[r] = {
                            tag: e,
                            processFunc: n
                        }
                    }))
                }
                _startEvent(e) {
                    switch (e.type) {
                        case "block":
                            this._subscribe("block", ["newHeads"], (e => {
                                const t = u.O$.from(e.number).toNumber();
                                this._emitted.block = t, this.emit("block", t)
                            }));
                            break;
                        case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], (e => {
                                this.emit("pending", e)
                            }));
                            break;
                        case "filter":
                            this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], (t => {
                                null == t.removed && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t))
                            }));
                            break;
                        case "tx":
                            {
                                const t = e => {
                                    const t = e.hash;
                                    this.getTransactionReceipt(t).then((e => {
                                        e && this.emit(t, e)
                                    }))
                                };t(e),
                                this._subscribe("tx", ["newHeads"], (e => {
                                    this._events.filter((e => "tx" === e.type)).forEach(t)
                                }));
                                break
                            }
                        case "debug":
                        case "poll":
                        case "willPoll":
                        case "didPoll":
                        case "error":
                            break;
                        default:
                            console.log("unhandled:", e)
                    }
                }
                _stopEvent(e) {
                    let t = e.tag;
                    if ("tx" === e.type) {
                        if (this._events.filter((e => "tx" === e.type)).length) return;
                        t = "tx"
                    } else if (this.listenerCount(e.event)) return;
                    const n = this._subIds[t];
                    n && (delete this._subIds[t], n.then((e => {
                        this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
                    })))
                }
                destroy() {
                    return L(this, void 0, void 0, (function*() {
                        this.websocket.readyState === k.CONNECTING && (yield new Promise((e => {
                            this.websocket.onopen = function() {
                                e(!0)
                            }, this.websocket.onerror = function() {
                                e(!1)
                            }
                        }))), this.websocket.close(1e3)
                    }))
                }
            }
            var I = n(93901);
            const B = new _.Logger(P.i),
                D = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            class S extends E {
                constructor(e, t) {
                    const n = new M(e, t);
                    super(n.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), n.network), (0, g.defineReadOnly)(this, "apiKey", n.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === D
                }
            }
            class M extends I.l {
                static getWebSocketProvider(e, t) {
                    return new S(e, t)
                }
                static getApiKey(e) {
                    return null == e ? D : (e && "string" !== typeof e && B.throwArgumentError("invalid apiKey", "apiKey", e), e)
                }
                static getUrl(e, t) {
                    let n = null;
                    switch (e.name) {
                        case "homestead":
                            n = "eth-mainnet.alchemyapi.io/v2/";
                            break;
                        case "goerli":
                            n = "eth-goerli.g.alchemy.com/v2/";
                            break;
                        case "matic":
                            n = "polygon-mainnet.g.alchemy.com/v2/";
                            break;
                        case "maticmum":
                            n = "polygon-mumbai.g.alchemy.com/v2/";
                            break;
                        case "arbitrum":
                            n = "arb-mainnet.g.alchemy.com/v2/";
                            break;
                        case "arbitrum-goerli":
                            n = "arb-goerli.g.alchemy.com/v2/";
                            break;
                        case "optimism":
                            n = "opt-mainnet.g.alchemy.com/v2/";
                            break;
                        case "optimism-goerli":
                            n = "opt-goerli.g.alchemy.com/v2/";
                            break;
                        default:
                            B.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + n + t,
                        throttleCallback: (e, n) => (t === D && (0, v.vh)(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === D
                }
            }
            const C = new _.Logger(P.i),
                R = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";

            function N(e) {
                switch (e) {
                    case "homestead":
                        return "rpc.ankr.com/eth/";
                    case "ropsten":
                        return "rpc.ankr.com/eth_ropsten/";
                    case "rinkeby":
                        return "rpc.ankr.com/eth_rinkeby/";
                    case "goerli":
                        return "rpc.ankr.com/eth_goerli/";
                    case "matic":
                        return "rpc.ankr.com/polygon/";
                    case "arbitrum":
                        return "rpc.ankr.com/arbitrum/"
                }
                return C.throwArgumentError("unsupported network", "name", e)
            }
            class O extends I.l {
                isCommunityResource() {
                    return this.apiKey === R
                }
                static getApiKey(e) {
                    return null == e ? R : e
                }
                static getUrl(e, t) {
                    null == t && (t = R);
                    const n = {
                        allowGzip: !0,
                        url: "https://" + N(e.name) + t,
                        throttleCallback: (e, n) => (t.apiKey === R && (0, v.vh)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (n.user = "", n.password = t.projectSecret), n
                }
            }
            var F = function(e, t, n, a) {
                return new(n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            u(a.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function o(e) {
                        try {
                            u(a.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, o)
                    }
                    u((a = a.apply(e, t || [])).next())
                }))
            };
            const H = new _.Logger(P.i);
            class G extends I.l {
                static getApiKey(e) {
                    return null != e && H.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null
                }
                static getUrl(e, t) {
                    let n = null;
                    switch (e.name) {
                        case "homestead":
                            n = "https://cloudflare-eth.com/";
                            break;
                        default:
                            H.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return n
                }
                perform(e, t) {
                    const n = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return F(this, void 0, void 0, (function*() {
                        if ("getBlockNumber" === e) {
                            return (yield n.perform.call(this, "getBlock", {
                                blockTag: "latest"
                            })).number
                        }
                        return n.perform.call(this, e, t)
                    }))
                }
            }
            var V = n(16441),
                U = n(83875),
                z = n(37707),
                j = function(e, t, n, a) {
                    return new(n || (n = Promise))((function(r, i) {
                        function s(e) {
                            try {
                                u(a.next(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function o(e) {
                            try {
                                u(a.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, o)
                        }
                        u((a = a.apply(e, t || [])).next())
                    }))
                };
            const W = new _.Logger(P.i);

            function K(e) {
                const t = {};
                for (let n in e) {
                    if (null == e[n]) continue;
                    let a = e[n];
                    "type" === n && 0 === a || (a = {
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    }[n] ? (0, V.hexValue)((0, V.hexlify)(a)) : "accessList" === n ? "[" + (0, U.accessListify)(a).map((e => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`)).join(",") + "]" : (0, V.hexlify)(a), t[n] = a)
                }
                return t
            }

            function Z(e) {
                if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
                if (1 != e.status || "string" !== typeof e.message || !e.message.match(/^OK/)) {
                    const t = new Error("invalid response");
                    throw t.result = JSON.stringify(e), (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0), t
                }
                return e.result
            }

            function q(e) {
                if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                    const t = new Error("throttled response");
                    throw t.result = JSON.stringify(e), t.throttleRetry = !0, t
                }
                if ("2.0" != e.jsonrpc) {
                    const t = new Error("invalid response");
                    throw t.result = JSON.stringify(e), t
                }
                if (e.error) {
                    const t = new Error(e.error.message || "unknown error");
                    throw e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t
                }
                return e.result
            }

            function Y(e) {
                if ("pending" === e) throw new Error("pending not supported");
                return "latest" === e ? e : parseInt(e.substring(2), 16)
            }

            function J(e, t, n) {
                if ("call" === e && t.code === _.Logger.errors.SERVER_ERROR) {
                    const e = t.error;
                    if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
                        let n = e.data;
                        if (n && (n = "0x" + n.replace(/^.*0x/i, "")), (0, V.isHexString)(n)) return n;
                        W.throwError("missing revert data in call exception", _.Logger.errors.CALL_EXCEPTION, {
                            error: t,
                            data: "0x"
                        })
                    }
                }
                let a = t.message;
                throw t.code === _.Logger.errors.SERVER_ERROR && (t.error && "string" === typeof t.error.message ? a = t.error.message : "string" === typeof t.body ? a = t.body : "string" === typeof t.responseText && (a = t.responseText)), a = (a || "").toLowerCase(), a.match(/insufficient funds/) && W.throwError("insufficient funds for intrinsic transaction cost", _.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: n
                }), a.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && W.throwError("nonce has already been used", _.Logger.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: n
                }), a.match(/another transaction with same nonce/) && W.throwError("replacement fee too low", _.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: n
                }), a.match(/execution failed due to an exception|execution reverted/) && W.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", _.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: n
                }), t
            }
            class $ extends h.Zk {
                constructor(e, t) {
                    super(e), (0, g.defineReadOnly)(this, "baseUrl", this.getBaseUrl()), (0, g.defineReadOnly)(this, "apiKey", t || null)
                }
                getBaseUrl() {
                    switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                            return "https://api.etherscan.io";
                        case "goerli":
                            return "https://api-goerli.etherscan.io";
                        case "sepolia":
                            return "https://api-sepolia.etherscan.io";
                        case "matic":
                            return "https://api.polygonscan.com";
                        case "maticmum":
                            return "https://api-testnet.polygonscan.com";
                        case "arbitrum":
                            return "https://api.arbiscan.io";
                        case "arbitrum-goerli":
                            return "https://api-goerli.arbiscan.io";
                        case "optimism":
                            return "https://api-optimistic.etherscan.io";
                        case "optimism-goerli":
                            return "https://api-goerli-optimistic.etherscan.io"
                    }
                    return W.throwArgumentError("unsupported network", "network", this.network.name)
                }
                getUrl(e, t) {
                    const n = Object.keys(t).reduce(((e, n) => {
                            const a = t[n];
                            return null != a && (e += `&${n}=${a}`), e
                        }), ""),
                        a = this.apiKey ? `&apikey=${this.apiKey}` : "";
                    return `${this.baseUrl}/api?module=${e}${n}${a}`
                }
                getPostUrl() {
                    return `${this.baseUrl}/api`
                }
                getPostData(e, t) {
                    return t.module = e, t.apikey = this.apiKey, t
                }
                fetch(e, t, n) {
                    return j(this, void 0, void 0, (function*() {
                        const a = n ? this.getPostUrl() : this.getUrl(e, t),
                            r = n ? this.getPostData(e, t) : null,
                            i = "proxy" === e ? q : Z;
                        this.emit("debug", {
                            action: "request",
                            request: a,
                            provider: this
                        });
                        const s = {
                            url: a,
                            throttleSlotInterval: 1e3,
                            throttleCallback: (e, t) => (this.isCommunityResource() && (0, v.vh)(), Promise.resolve(!0))
                        };
                        let o = null;
                        r && (s.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, o = Object.keys(r).map((e => `${e}=${r[e]}`)).join("&"));
                        const u = yield(0, z.fetchJson)(s, o, i || q);
                        return this.emit("debug", {
                            action: "response",
                            request: a,
                            response: (0, g.deepCopy)(u),
                            provider: this
                        }), u
                    }))
                }
                detectNetwork() {
                    return j(this, void 0, void 0, (function*() {
                        return this.network
                    }))
                }
                perform(e, t) {
                    const n = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return j(this, void 0, void 0, (function*() {
                        switch (e) {
                            case "getBlockNumber":
                                return this.fetch("proxy", {
                                    action: "eth_blockNumber"
                                });
                            case "getGasPrice":
                                return this.fetch("proxy", {
                                    action: "eth_gasPrice"
                                });
                            case "getBalance":
                                return this.fetch("account", {
                                    action: "balance",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getTransactionCount":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionCount",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getCode":
                                return this.fetch("proxy", {
                                    action: "eth_getCode",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getStorageAt":
                                return this.fetch("proxy", {
                                    action: "eth_getStorageAt",
                                    address: t.address,
                                    position: t.position,
                                    tag: t.blockTag
                                });
                            case "sendTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_sendRawTransaction",
                                    hex: t.signedTransaction
                                }, !0).catch((e => J("sendTransaction", e, t.signedTransaction)));
                            case "getBlock":
                                if (t.blockTag) return this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: t.blockTag,
                                    boolean: t.includeTransactions ? "true" : "false"
                                });
                                throw new Error("getBlock by blockHash not implemented");
                            case "getTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionByHash",
                                    txhash: t.transactionHash
                                });
                            case "getTransactionReceipt":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionReceipt",
                                    txhash: t.transactionHash
                                });
                            case "call":
                                {
                                    if ("latest" !== t.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
                                    const e = K(t.transaction);e.module = "proxy",
                                    e.action = "eth_call";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (Ue) {
                                        return J("call", Ue, t.transaction)
                                    }
                                }
                            case "estimateGas":
                                {
                                    const e = K(t.transaction);e.module = "proxy",
                                    e.action = "eth_estimateGas";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (Ue) {
                                        return J("estimateGas", Ue, t.transaction)
                                    }
                                }
                            case "getLogs":
                                {
                                    const e = {
                                        action: "getLogs"
                                    };
                                    if (t.filter.fromBlock && (e.fromBlock = Y(t.filter.fromBlock)), t.filter.toBlock && (e.toBlock = Y(t.filter.toBlock)), t.filter.address && (e.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && W.throwError("unsupported topic count", _.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topics: t.filter.topics
                                        }), 1 === t.filter.topics.length)) {
                                        const n = t.filter.topics[0];
                                        "string" === typeof n && 66 === n.length || W.throwError("unsupported topic format", _.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topic0: n
                                        }), e.topic0 = n
                                    }
                                    const n = yield this.fetch("logs", e);
                                    let a = {};
                                    for (let t = 0; t < n.length; t++) {
                                        const e = n[t];
                                        if (null == e.blockHash) {
                                            if (null == a[e.blockNumber]) {
                                                const t = yield this.getBlock(e.blockNumber);
                                                t && (a[e.blockNumber] = t.hash)
                                            }
                                            e.blockHash = a[e.blockNumber]
                                        }
                                    }
                                    return n
                                }
                            case "getEtherPrice":
                                return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
                                    action: "ethprice"
                                })).ethusd)
                        }
                        return n.perform.call(this, e, t)
                    }))
                }
                getHistory(e, t, n) {
                    return j(this, void 0, void 0, (function*() {
                        const a = {
                            action: "txlist",
                            address: yield this.resolveName(e), startblock: null == t ? 0 : t, endblock: null == n ? 99999999 : n, sort: "asc"
                        };
                        return (yield this.fetch("account", a)).map((e => {
                            ["contractAddress", "to"].forEach((function(t) {
                                "" == e[t] && delete e[t]
                            })), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                            const t = this.formatter.transactionResponse(e);
                            return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t
                        }))
                    }))
                }
                isCommunityResource() {
                    return null == this.apiKey
                }
            }
            var X = n(51619);
            const Q = null,
                ee = new _.Logger(P.i),
                te = "84842078b09946638c03157f83405213";
            class ne extends E {
                constructor(e, t) {
                    const n = new ae(e, t),
                        a = n.connection;
                    a.password && ee.throwError("INFURA WebSocket project secrets unsupported", _.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "InfuraProvider.getWebSocketProvider()"
                    });
                    super(a.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e), (0, g.defineReadOnly)(this, "apiKey", n.projectId), (0, g.defineReadOnly)(this, "projectId", n.projectId), (0, g.defineReadOnly)(this, "projectSecret", n.projectSecret)
                }
                isCommunityResource() {
                    return this.projectId === te
                }
            }
            class ae extends I.l {
                static getWebSocketProvider(e, t) {
                    return new ne(e, t)
                }
                static getApiKey(e) {
                    const t = {
                        apiKey: te,
                        projectId: te,
                        projectSecret: null
                    };
                    return null == e || ("string" === typeof e ? t.projectId = e : null != e.projectSecret ? (ee.assertArgument("string" === typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), ee.assertArgument("string" === typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t
                }
                static getUrl(e, t) {
                    let n = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            n = "mainnet.infura.io";
                            break;
                        case "goerli":
                            n = "goerli.infura.io";
                            break;
                        case "sepolia":
                            n = "sepolia.infura.io";
                            break;
                        case "matic":
                            n = "polygon-mainnet.infura.io";
                            break;
                        case "maticmum":
                            n = "polygon-mumbai.infura.io";
                            break;
                        case "optimism":
                            n = "optimism-mainnet.infura.io";
                            break;
                        case "optimism-goerli":
                            n = "optimism-goerli.infura.io";
                            break;
                        case "arbitrum":
                            n = "arbitrum-mainnet.infura.io";
                            break;
                        case "arbitrum-goerli":
                            n = "arbitrum-goerli.infura.io";
                            break;
                        default:
                            ee.throwError("unsupported network", _.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    const a = {
                        allowGzip: !0,
                        url: "https://" + n + "/v3/" + t.projectId,
                        throttleCallback: (e, n) => (t.projectId === te && (0, v.vh)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (a.user = "", a.password = t.projectSecret), a
                }
                isCommunityResource() {
                    return this.projectId === te
                }
            }
            class re extends w.r {
                send(e, t) {
                    const n = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    const a = {
                            request: n,
                            resolve: null,
                            reject: null
                        },
                        r = new Promise(((e, t) => {
                            a.resolve = e, a.reject = t
                        }));
                    return this._pendingBatch.push(a), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout((() => {
                        const e = this._pendingBatch;
                        this._pendingBatch = null, this._pendingBatchAggregator = null;
                        const t = e.map((e => e.request));
                        return this.emit("debug", {
                            action: "requestBatch",
                            request: (0, g.deepCopy)(t),
                            provider: this
                        }), (0, z.fetchJson)(this.connection, JSON.stringify(t)).then((n => {
                            this.emit("debug", {
                                action: "response",
                                request: t,
                                response: n,
                                provider: this
                            }), e.forEach(((e, t) => {
                                const a = n[t];
                                if (a.error) {
                                    const t = new Error(a.error.message);
                                    t.code = a.error.code, t.data = a.error.data, e.reject(t)
                                } else e.resolve(a.result)
                            }))
                        }), (n => {
                            this.emit("debug", {
                                action: "response",
                                error: n,
                                request: t,
                                provider: this
                            }), e.forEach((e => {
                                e.reject(n)
                            }))
                        }))
                    }), 10)), r
                }
            }
            const ie = new _.Logger(P.i);
            class se extends I.l {
                static getApiKey(e) {
                    return e && "string" !== typeof e && ie.throwArgumentError("invalid apiKey", "apiKey", e), e || "ETHERS_JS_SHARED"
                }
                static getUrl(e, t) {
                    ie.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    let n = null;
                    switch (e.name) {
                        case "homestead":
                            n = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                        case "ropsten":
                            n = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                        case "rinkeby":
                            n = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                        case "goerli":
                            n = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                        case "kovan":
                            n = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                        default:
                            ie.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return n + "?apiKey=" + t
                }
            }
            const oe = new _.Logger(P.i),
                ue = "62e1ad51b37b8e00394bda3b";
            class pe extends I.l {
                static getApiKey(e) {
                    const t = {
                        applicationId: null,
                        loadBalancer: !0,
                        applicationSecretKey: null
                    };
                    return null == e ? t.applicationId = ue : "string" === typeof e ? t.applicationId = e : null != e.applicationSecretKey ? (t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey) : e.applicationId ? t.applicationId = e.applicationId : oe.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t
                }
                static getUrl(e, t) {
                    let n = null;
                    switch (e ? e.name : "unknown") {
                        case "goerli":
                            n = "eth-goerli.gateway.pokt.network";
                            break;
                        case "homestead":
                            n = "eth-mainnet.gateway.pokt.network";
                            break;
                        case "kovan":
                            n = "poa-kovan.gateway.pokt.network";
                            break;
                        case "matic":
                            n = "poly-mainnet.gateway.pokt.network";
                            break;
                        case "maticmum":
                            n = "polygon-mumbai-rpc.gateway.pokt.network";
                            break;
                        case "rinkeby":
                            n = "eth-rinkeby.gateway.pokt.network";
                            break;
                        case "ropsten":
                            n = "eth-ropsten.gateway.pokt.network";
                            break;
                        default:
                            oe.throwError("unsupported network", _.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    const a = {
                        headers: {},
                        url: `https://${n}/v1/lb/${t.applicationId}`
                    };
                    return null != t.applicationSecretKey && (a.user = "", a.password = t.applicationSecretKey), a
                }
                isCommunityResource() {
                    return this.applicationId === ue
                }
            }
            var ye = n(241);
            const le = new _.Logger(P.i);

            function ce(e, t) {
                if (null == e && (e = "homestead"), "string" === typeof e) {
                    const t = e.match(/^(ws|http)s?:/i);
                    if (t) switch (t[1].toLowerCase()) {
                        case "http":
                        case "https":
                            return new w.r(e);
                        case "ws":
                        case "wss":
                            return new E(e);
                        default:
                            le.throwArgumentError("unsupported URL scheme", "network", e)
                    }
                }
                const n = (0, f.H)(e);
                return n && n._defaultProvider || le.throwError("unsupported getDefaultProvider network", _.Logger.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: e
                }), n._defaultProvider({
                    FallbackProvider: X.H,
                    AlchemyProvider: M,
                    AnkrProvider: O,
                    CloudflareProvider: G,
                    EtherscanProvider: $,
                    InfuraProvider: ae,
                    JsonRpcProvider: w.r,
                    NodesmithProvider: se,
                    PocketProvider: pe,
                    Web3Provider: ye.Q,
                    IpcProvider: Q
                }, t)
            }
            var de = n(10234),
                me = n(48812),
                be = n(84243),
                Te = n(11388),
                fe = n(61184),
                he = n(8198),
                ge = n(19485),
                ve = n(4089),
                we = n(57727),
                _e = n(27586),
                Pe = n(93684),
                ke = n(32046),
                Le = n(67827),
                xe = n(84178),
                Ae = n(67949),
                Ee = n(38197),
                Ie = n(2006),
                Be = n(31886),
                De = n(5634),
                Se = n(52472),
                Me = n(59052),
                Ce = n(67669),
                Re = n(35637),
                Ne = n(29251),
                Oe = n(86237),
                Fe = n(61744),
                He = n(21261);
            const Ge = "ethers/5.7.2",
                Ve = new _.Logger(Ge);
            try {
                const e = window;
                null == e._ethers && (e._ethers = s)
            } catch (Ue) {}
        },
        21659: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AdapterL2 = t.AdapterL1 = void 0;
            const a = n(7779),
                r = n(17627),
                i = n(79662);
            async function s(e, t) {
                if (!t.gasPrice && !t.maxFeePerGas) {
                    const n = await e.getFeeData(),
                        a = (n.lastBaseFeePerGas || n.gasPrice).mul(3).div(2).add(n.maxPriorityFeePerGas);
                    t.maxFeePerGas = a, t.maxPriorityFeePerGas = n.maxPriorityFeePerGas
                }
            }
            t.AdapterL1 = function(e) {
                return class extends e {
                    _providerL2() {
                        throw new Error("Must be implemented by the derived class!")
                    }
                    _providerL1() {
                        throw new Error("Must be implemented by the derived class!")
                    }
                    _signerL1() {
                        throw new Error("Must be implemented by the derived class!")
                    }
                    async getMainContract() {
                        const e = await this._providerL2().getMainContractAddress();
                        return r.IZkSyncFactory.connect(e, this._signerL1())
                    }
                    async getL1BridgeContracts() {
                        const e = await this._providerL2().getDefaultBridgeAddresses();
                        return {
                            erc20: r.IL1BridgeFactory.connect(e.erc20L1, this._signerL1())
                        }
                    }
                    async getBalanceL1(e, t) {
                        if (null !== e && void 0 !== e || (e = i.ETH_ADDRESS), (0, i.isETH)(e)) return await this._providerL1().getBalance(await this.getAddress(), t); {
                            const t = r.IERC20MetadataFactory.connect(e, this._providerL1());
                            return await t.balanceOf(await this.getAddress())
                        }
                    }
                    async l2TokenAddress(e) {
                        if (e == i.ETH_ADDRESS) return i.ETH_ADDRESS; {
                            const t = (await this.getL1BridgeContracts()).erc20;
                            return await t.l2TokenAddress(e)
                        }
                    }
                    async approveERC20(e, t, n) {
                        if ((0, i.isETH)(e)) throw new Error("ETH token can't be approved. The address of the token does not exist on L1.");
                        let a = null === n || void 0 === n ? void 0 : n.bridgeAddress;
                        const s = r.IERC20MetadataFactory.connect(e, this._signerL1());
                        return null == a ? a = (await this._providerL2().getDefaultBridgeAddresses()).erc20L1 : delete n.bridgeAddress, await s.approve(a, t, n)
                    }
                    async getBaseCost(e) {
                        var t, n;
                        const r = await this.getMainContract(),
                            s = { ...(0, i.layer1TxDefaults)(),
                                ...e
                            };
                        return null !== (t = s.gasPrice) && void 0 !== t || (s.gasPrice = await this._providerL1().getGasPrice()), null !== (n = s.gasPerPubdataByte) && void 0 !== n || (s.gasPerPubdataByte = i.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT), a.BigNumber.from(await r.l2TransactionBaseCost(s.gasPrice, s.gasLimit, s.gasPerPubdataByte))
                    }
                    async deposit(e) {
                        var t;
                        const n = await this.getDepositTx(e);
                        if (e.token == i.ETH_ADDRESS) return this.requestExecute(n); {
                            const a = await this.getL1BridgeContracts();
                            if (e.approveERC20) {
                                const n = await this.approveERC20(e.token, e.amount, {
                                    bridgeAddress: null !== (t = e.bridgeAddress) && void 0 !== t ? t : a.erc20.address,
                                    ...e.approveOverrides
                                });
                                await n.wait()
                            }
                            return await this._providerL2().getPriorityOpResponse(await this._signerL1().sendTransaction(n))
                        }
                    }
                    async estimateGasDeposit(e) {
                        const t = await this.getDepositTx(e);
                        return e.token == i.ETH_ADDRESS ? await this.estimateGasRequestExecute(t) : await this._providerL1().estimateGas(t)
                    }
                    async getDepositTx(e) {
                        var t, n, r, o, u, p, y;
                        const l = await this.getL1BridgeContracts();
                        e.bridgeAddress && l.erc20.attach(e.bridgeAddress);
                        const { ...c
                        } = e;
                        null !== (t = c.to) && void 0 !== t || (c.to = await this.getAddress()), null !== (n = c.operatorTip) && void 0 !== n || (c.operatorTip = a.BigNumber.from(0)), null !== (r = c.overrides) && void 0 !== r || (c.overrides = {}), null !== (o = c.gasPerPubdataByte) && void 0 !== o || (c.gasPerPubdataByte = i.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT), null !== (u = c.l2GasLimit) && void 0 !== u || (c.l2GasLimit = await (0, i.estimateDefaultBridgeDepositL2Gas)(this._providerL1(), this._providerL2(), c.token, c.amount, c.to, await this.getAddress(), c.gasPerPubdataByte));
                        const {
                            to: d,
                            token: m,
                            amount: b,
                            operatorTip: T,
                            overrides: f
                        } = c;
                        await s(this._providerL1(), f);
                        const h = f.maxFeePerGas || f.gasPrice,
                            g = await this.getMainContract(),
                            v = await g.l2TransactionBaseCost(await h, c.l2GasLimit, c.gasPerPubdataByte);
                        if (m == i.ETH_ADDRESS) return null !== (p = f.value) && void 0 !== p || (f.value = v.add(T).add(b)), {
                            contractAddress: d,
                            calldata: "0x",
                            l2Value: b,
                            l2GasLimit: c.l2GasLimit,
                            ...c
                        }; {
                            const e = [d, m, b, c.l2GasLimit, c.gasPerPubdataByte];
                            return null !== (y = f.value) && void 0 !== y || (f.value = v.add(T)), await (0, i.checkBaseCost)(v, f.value), await l.erc20.populateTransaction.deposit(...e, f)
                        }
                    }
                    async _getWithdrawalLog(e, t = 0) {
                        const n = a.ethers.utils.hexlify(e),
                            r = await this._providerL2().getTransactionReceipt(n);
                        return {
                            log: r.logs.filter((e => e.address == i.L1_MESSENGER_ADDRESS && e.topics[0] == a.ethers.utils.id("L1MessageSent(address,bytes32,bytes)")))[t],
                            l1BatchTxId: r.l1BatchTxIndex
                        }
                    }
                    async _getWithdrawalL2ToL1Log(e, t = 0) {
                        const n = a.ethers.utils.hexlify(e),
                            r = await this._providerL2().getTransactionReceipt(n),
                            s = Array.from(r.l2ToL1Logs.entries()).filter((([e, t]) => t.sender == i.L1_MESSENGER_ADDRESS)),
                            [o, u] = s[t];
                        return {
                            l2ToL1LogIndex: o,
                            l2ToL1Log: u
                        }
                    }
                    async finalizeWithdrawalParams(e, t = 0) {
                        const {
                            log: n,
                            l1BatchTxId: r
                        } = await this._getWithdrawalLog(e, t), {
                            l2ToL1LogIndex: i
                        } = await this._getWithdrawalL2ToL1Log(e, t), s = a.ethers.utils.hexDataSlice(n.topics[1], 12), o = await this._providerL2().getLogProof(e, i), u = a.ethers.utils.defaultAbiCoder.decode(["bytes"], n.data)[0];
                        return {
                            l1BatchNumber: n.l1BatchNumber,
                            l2MessageIndex: o.id,
                            l2TxNumberInBlock: r,
                            message: u,
                            sender: s,
                            proof: o.proof
                        }
                    }
                    async finalizeWithdrawal(e, t = 0, n) {
                        const {
                            l1BatchNumber: a,
                            l2MessageIndex: s,
                            l2TxNumberInBlock: o,
                            message: u,
                            sender: p,
                            proof: y
                        } = await this.finalizeWithdrawalParams(e, t);
                        if ((0, i.isETH)(p)) {
                            const e = await this._providerL2().getMainContractAddress(),
                                t = r.IZkSyncFactory.connect(e, this._signerL1());
                            return await t.finalizeEthWithdrawal(a, s, o, u, y, null !== n && void 0 !== n ? n : {})
                        }
                        const l = r.IL2BridgeFactory.connect(p, this._providerL2()),
                            c = r.IL1BridgeFactory.connect(await l.l1Bridge(), this._signerL1());
                        return await c.finalizeWithdrawal(a, s, o, u, y, null !== n && void 0 !== n ? n : {})
                    }
                    async isWithdrawalFinalized(e, t = 0) {
                        const {
                            log: n
                        } = await this._getWithdrawalLog(e, t), {
                            l2ToL1LogIndex: s
                        } = await this._getWithdrawalL2ToL1Log(e, t), o = a.ethers.utils.hexDataSlice(n.topics[1], 12), u = await this._providerL2().getLogProof(e, s);
                        if ((0, i.isETH)(o)) {
                            const e = await this._providerL2().getMainContractAddress(),
                                t = r.IZkSyncFactory.connect(e, this._signerL1());
                            return await t.isEthWithdrawalFinalized(n.l1BatchNumber, u.id)
                        }
                        const p = r.IL2BridgeFactory.connect(o, this._providerL2()),
                            y = r.IL1BridgeFactory.connect(await p.l1Bridge(), this._providerL1());
                        return await y.isWithdrawalFinalized(n.l1BatchNumber, u.id)
                    }
                    async claimFailedDeposit(e, t) {
                        const n = await this._providerL2().getTransactionReceipt(a.ethers.utils.hexlify(e)),
                            s = n.l2ToL1Logs.findIndex((t => t.sender == i.BOOTLOADER_FORMAL_ADDRESS && t.key == e));
                        if (n.l2ToL1Logs[s].value != a.ethers.constants.HashZero) throw new Error("Cannot claim successful deposit");
                        const o = await this._providerL2().getTransaction(a.ethers.utils.hexlify(e)),
                            u = (0, i.undoL1ToL2Alias)(n.from),
                            p = n.to,
                            y = r.IL1BridgeFactory.connect(u, this._signerL1()),
                            l = r.IL2BridgeFactory.connect(p, this._providerL2()).interface.decodeFunctionData("finalizeDeposit", o.data),
                            c = await this._providerL2().getLogProof(e, s);
                        return await y.claimFailedDeposit(l._l1Sender, l._l1Token, e, n.l1BatchNumber, c.id, n.l1BatchTxIndex, c.proof, null !== t && void 0 !== t ? t : {})
                    }
                    async requestExecute(e) {
                        const t = await this.getRequestExecuteTx(e);
                        return this._providerL2().getPriorityOpResponse(await this._signerL1().sendTransaction(t))
                    }
                    async estimateGasRequestExecute(e) {
                        const t = await this.getRequestExecuteTx(e);
                        return this._providerL1().estimateGas(t)
                    }
                    async getRequestExecuteTx(e) {
                        var t, n, r, o, u, p, y, l;
                        const c = await this.getMainContract(),
                            { ...d
                            } = e;
                        null !== (t = d.l2Value) && void 0 !== t || (d.l2Value = a.BigNumber.from(0)), null !== (n = d.operatorTip) && void 0 !== n || (d.operatorTip = a.BigNumber.from(0)), null !== (r = d.factoryDeps) && void 0 !== r || (d.factoryDeps = []), null !== (o = d.overrides) && void 0 !== o || (d.overrides = {}), null !== (u = d.gasPerPubdataByte) && void 0 !== u || (d.gasPerPubdataByte = i.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT), null !== (p = d.refundRecipient) && void 0 !== p || (d.refundRecipient = await this.getAddress()), null !== (y = d.l2GasLimit) && void 0 !== y || (d.l2GasLimit = await this._providerL2().estimateL1ToL2Execute(e));
                        const {
                            contractAddress: m,
                            l2Value: b,
                            calldata: T,
                            l2GasLimit: f,
                            factoryDeps: h,
                            operatorTip: g,
                            overrides: v,
                            gasPerPubdataByte: w,
                            refundRecipient: _
                        } = d;
                        await s(this._providerL1(), v);
                        const P = v.maxFeePerGas || v.gasPrice,
                            k = await this.getBaseCost({
                                gasPrice: await P,
                                gasPerPubdataByte: w,
                                gasLimit: f
                            });
                        return null !== (l = v.value) && void 0 !== l || (v.value = k.add(g).add(b)), await (0, i.checkBaseCost)(k, v.value), await c.populateTransaction.requestL2Transaction(m, b, T, f, i.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT, h, _, v)
                    }
                }
            }, t.AdapterL2 = function(e) {
                return class extends e {
                    _providerL2() {
                        throw new Error("Must be implemented by the derived class!")
                    }
                    _signerL2() {
                        throw new Error("Must be implemented by the derived class!")
                    }
                    async getBalance(e, t = "committed") {
                        return await this._providerL2().getBalance(await this.getAddress(), t, e)
                    }
                    async getAllBalances() {
                        return await this._providerL2().getAllAccountBalances(await this.getAddress())
                    }
                    async getL2BridgeContracts() {
                        const e = await this._providerL2().getDefaultBridgeAddresses();
                        return {
                            erc20: r.IL2BridgeFactory.connect(e.erc20L2, this._signerL2())
                        }
                    }
                    _fillCustomData(e) {
                        var t, n;
                        const a = { ...e
                        };
                        return null !== (t = a.gasPerPubdata) && void 0 !== t || (a.gasPerPubdata = i.DEFAULT_GAS_PER_PUBDATA_LIMIT), null !== (n = a.factoryDeps) && void 0 !== n || (a.factoryDeps = []), a
                    }
                    async withdraw(e) {
                        const t = await this._providerL2().getWithdrawTx({
                                from: await this.getAddress(),
                                ...e
                            }),
                            n = await this.sendTransaction(t);
                        return this._providerL2()._wrapTransaction(n)
                    }
                    async transfer(e) {
                        const t = await this._providerL2().getTransferTx({
                                from: await this.getAddress(),
                                ...e
                            }),
                            n = await this.sendTransaction(t);
                        return this._providerL2()._wrapTransaction(n)
                    }
                }
            }
        },
        34171: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContractFactory = t.Contract = void 0;
            const a = n(7779),
                r = n(79662),
                i = n(23430);
            var s = n(7779);
            Object.defineProperty(t, "Contract", {
                enumerable: !0,
                get: function() {
                    return s.Contract
                }
            });
            class o extends a.ethers.ContractFactory {
                constructor(e, t, n, a) {
                    super(e, t, n), this.deploymentType = a || "create"
                }
                encodeCalldata(e, t, n) {
                    if ("create" == this.deploymentType) return r.CONTRACT_DEPLOYER.encodeFunctionData("create", [e, t, n]);
                    if ("createAccount" == this.deploymentType) return r.CONTRACT_DEPLOYER.encodeFunctionData("createAccount", [e, t, n, i.AccountAbstractionVersion.Version1]);
                    throw new Error(`Unsupported deployment type ${this.deploymentType}`)
                }
                getDeployTransaction(...e) {
                    var t, n, i, s, o;
                    const u = super.getDeployTransaction(...e);
                    this.interface.deploy.inputs.length + 1 == e.length && e.pop();
                    const p = (0, r.hashBytecode)(this.bytecode),
                        y = a.utils.arrayify(this.interface.encodeDeploy(e)),
                        l = this.encodeCalldata("0x0000000000000000000000000000000000000000000000000000000000000000", p, y);
                    return u.type = r.EIP712_TX_TYPE, u.to = r.CONTRACT_DEPLOYER_ADDRESS, u.data = l, null !== (t = u.customData) && void 0 !== t || (u.customData = {}), null !== (n = (s = u.customData).factoryDeps) && void 0 !== n || (s.factoryDeps = []), null !== (i = (o = u.customData).gasPerPubdata) && void 0 !== i || (o.gasPerPubdata = r.DEFAULT_GAS_PER_PUBDATA_LIMIT), u.customData.factoryDeps.includes(this.bytecode) || u.customData.factoryDeps.push(this.bytecode), u
                }
                async deploy(...e) {
                    const t = await super.deploy(...e),
                        n = await t.deployTransaction.wait(),
                        i = (0, r.getDeployedContracts)(n).map((e => e.deployedAddress)),
                        s = new a.ethers.Contract(i[i.length - 1], t.interface, t.signer);
                    return a.utils.defineReadOnly(s, "deployTransaction", t.deployTransaction), s
                }
            }
            t.ContractFactory = o
        },
        31041: function(e, t, n) {
            var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, a, r)
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && a(t, e, n);
                    return r(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Contract = t.ContractFactory = t.Provider = t.Web3Provider = t.Wallet = t.L1Signer = t.Signer = t.EIP712Signer = t.types = t.utils = void 0, t.utils = i(n(79662)), t.types = i(n(23430));
            var s = n(47815);
            Object.defineProperty(t, "EIP712Signer", {
                enumerable: !0,
                get: function() {
                    return s.EIP712Signer
                }
            }), Object.defineProperty(t, "Signer", {
                enumerable: !0,
                get: function() {
                    return s.Signer
                }
            }), Object.defineProperty(t, "L1Signer", {
                enumerable: !0,
                get: function() {
                    return s.L1Signer
                }
            });
            var o = n(6440);
            Object.defineProperty(t, "Wallet", {
                enumerable: !0,
                get: function() {
                    return o.Wallet
                }
            });
            var u = n(45539);
            Object.defineProperty(t, "Web3Provider", {
                enumerable: !0,
                get: function() {
                    return u.Web3Provider
                }
            }), Object.defineProperty(t, "Provider", {
                enumerable: !0,
                get: function() {
                    return u.Provider
                }
            });
            var p = n(34171);
            Object.defineProperty(t, "ContractFactory", {
                enumerable: !0,
                get: function() {
                    return p.ContractFactory
                }
            }), Object.defineProperty(t, "Contract", {
                enumerable: !0,
                get: function() {
                    return p.Contract
                }
            })
        },
        71002: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPaymasterParams = t.getGeneralPaymasterInput = t.getApprovalBasedPaymasterInput = t.IPaymasterFlow = void 0;
            const a = n(7779);

            function r(e) {
                return t.IPaymasterFlow.encodeFunctionData("approvalBased", [e.token, e.minimalAllowance, e.innerInput])
            }

            function i(e) {
                return t.IPaymasterFlow.encodeFunctionData("general", [e.innerInput])
            }
            t.IPaymasterFlow = new a.ethers.utils.Interface(n(53151).M), t.getApprovalBasedPaymasterInput = r, t.getGeneralPaymasterInput = i, t.getPaymasterParams = function(e, t) {
                return "General" == t.type ? {
                    paymaster: e,
                    paymasterInput: i(t)
                } : {
                    paymaster: e,
                    paymasterInput: r(t)
                }
            }
        },
        45539: function(e, t, n) {
            var a = n(34155);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Web3Provider = t.Provider = void 0;
            const r = n(7779);
            var i = r.providers.Formatter;
            const s = n(37707),
                o = n(17627),
                u = n(23430),
                p = n(79662),
                y = n(47815);
            let l = null;
            class c extends r.ethers.providers.JsonRpcProvider {
                constructor(e, t) {
                    super(e, t), this.pollingInterval = 500;
                    const n = this.formatter.blockTag.bind(this.formatter);
                    this.formatter.blockTag = e => "committed" == e || "finalized" == e ? e : n(e), this.contractAddresses = {}, this.formatter.transaction = p.parseTransaction
                }
                async getTransactionReceipt(e) {
                    await this.getNetwork(), e = await e;
                    const t = {
                        transactionHash: this.formatter.hash(e, !0)
                    };
                    return (0, s.poll)((async () => {
                        const n = await this.perform("getTransactionReceipt", t);
                        if (null == n) return null == this._emitted["t:" + e] ? null : void 0;
                        if (null == n.blockNumber && null != n.status && r.BigNumber.from(n.status).isZero()) return { ...this.formatter.receipt({ ...n,
                                confirmations: 1,
                                blockNumber: 0,
                                blockHash: r.ethers.constants.HashZero
                            }),
                            blockNumber: null,
                            blockHash: null,
                            l1BatchNumber: null,
                            l1BatchTxIndex: null
                        };
                        if (null != n.blockHash) {
                            const e = this.formatter.receipt(n);
                            if (null == e.blockNumber) e.confirmations = 0;
                            else if (null == e.confirmations) {
                                let t = await this._getInternalBlockNumber(100 + 2 * this.pollingInterval) - e.blockNumber + 1;
                                t <= 0 && (t = 1), e.confirmations = t
                            }
                            return e
                        }
                    }), {
                        oncePoll: this
                    })
                }
                async getBlock(e) {
                    return this._getBlock(e, !1)
                }
                async getBlockWithTransactions(e) {
                    return this._getBlock(e, !0)
                }
                static getFormatter() {
                    if (null == l) {
                        l = new i;
                        const e = l.number.bind(l),
                            t = l.boolean.bind(l),
                            n = l.hash.bind(l),
                            a = l.address.bind(l);
                        l.formats.receiptLog.l1BatchNumber = i.allowNull(e), l.formats.l2Tol1Log = {
                            blockNumber: e,
                            blockHash: n,
                            l1BatchNumber: i.allowNull(e),
                            transactionIndex: e,
                            shardId: e,
                            isService: t,
                            sender: a,
                            key: n,
                            value: n,
                            transactionHash: n,
                            logIndex: e
                        }, l.formats.receipt.l1BatchNumber = i.allowNull(e), l.formats.receipt.l1BatchTxIndex = i.allowNull(e), l.formats.receipt.l2ToL1Logs = i.arrayOf((e => i.check(l.formats.l2Tol1Log, e))), l.formats.block.l1BatchNumber = i.allowNull(e), l.formats.block.l1BatchTimestamp = i.allowNull(e), l.formats.blockWithTransactions.l1BatchNumber = i.allowNull(e), l.formats.blockWithTransactions.l1BatchTimestamp = i.allowNull(e), l.formats.transaction.l1BatchNumber = i.allowNull(e), l.formats.transaction.l1BatchTxIndex = i.allowNull(e), l.formats.filterLog.l1BatchNumber = i.allowNull(e)
                    }
                    return l
                }
                async getBalance(e, t, n) {
                    const a = this.formatter.blockTag(t);
                    if (null == n || (0, p.isETH)(n)) return await super.getBalance(e, a);
                    try {
                        let t = o.IERC20MetadataFactory.connect(n, this);
                        return await t.balanceOf(e, {
                            blockTag: a
                        })
                    } catch {
                        return r.BigNumber.from(0)
                    }
                }
                async l2TokenAddress(e) {
                    if (e == p.ETH_ADDRESS) return p.ETH_ADDRESS; {
                        const t = (await this.getDefaultBridgeAddresses()).erc20L2,
                            n = o.IL2BridgeFactory.connect(t, this);
                        return await n.l2TokenAddress(e)
                    }
                }
                async l1TokenAddress(e) {
                    if (e == p.ETH_ADDRESS) return p.ETH_ADDRESS; {
                        const t = (await this.getDefaultBridgeAddresses()).erc20L2,
                            n = o.IL2BridgeFactory.connect(t, this);
                        return await n.l1TokenAddress(e)
                    }
                }
                static hexlifyTransaction(e, t) {
                    var n;
                    const a = r.ethers.providers.JsonRpcProvider.hexlifyTransaction(e, { ...t,
                        customData: !0,
                        from: !0
                    });
                    return null == e.customData || (a.eip712Meta = {
                        gasPerPubdata: r.utils.hexValue(null !== (n = e.customData.gasPerPubdata) && void 0 !== n ? n : 0)
                    }, e.type = p.EIP712_TX_TYPE, e.customData.factoryDeps && (a.eip712Meta.factoryDeps = e.customData.factoryDeps.map((e => Array.from(r.utils.arrayify(e))))), e.customData.paymasterParams && (a.eip712Meta.paymasterParams = {
                        paymaster: r.utils.hexlify(e.customData.paymasterParams.paymaster),
                        paymasterInput: Array.from(r.utils.arrayify(e.customData.paymasterParams.paymasterInput))
                    })), a
                }
                async estimateGas(e) {
                    await this.getNetwork();
                    const t = await r.utils.resolveProperties({
                        transaction: this._getTransactionRequest(e)
                    });
                    null != e.customData && (t.transaction.customData = e.customData);
                    const n = await this.perform("estimateGas", t);
                    try {
                        return r.BigNumber.from(n)
                    } catch (a) {
                        throw new Error(`bad result from backend (estimateGas): ${n}`)
                    }
                }
                async estimateGasL1(e) {
                    await this.getNetwork();
                    const t = await r.utils.resolveProperties({
                        transaction: this._getTransactionRequest(e)
                    });
                    null != e.customData && (t.transaction.customData = e.customData);
                    const n = await this.send("zks_estimateGasL1ToL2", [c.hexlifyTransaction(t.transaction, {
                        from: !0
                    })]);
                    try {
                        return r.BigNumber.from(n)
                    } catch (a) {
                        throw new Error(`bad result from backend (zks_estimateGasL1ToL2): ${n}`)
                    }
                }
                async getGasPrice(e) {
                    const t = e ? [e] : [],
                        n = await this.send("eth_gasPrice", t);
                    return r.BigNumber.from(n)
                }
                async getMessageProof(e, t, n, a) {
                    return await this.send("zks_getL2ToL1MsgProof", [r.BigNumber.from(e).toNumber(), t, r.ethers.utils.hexlify(n), a])
                }
                async getLogProof(e, t) {
                    return await this.send("zks_getL2ToL1LogProof", [r.ethers.utils.hexlify(e), t])
                }
                async getL1BatchBlockRange(e) {
                    const t = await this.send("zks_getL1BatchBlockRange", [e]);
                    return null == t ? null : [parseInt(t[0], 16), parseInt(t[1], 16)]
                }
                async getMainContractAddress() {
                    return this.contractAddresses.mainContract || (this.contractAddresses.mainContract = await this.send("zks_getMainContract", [])), this.contractAddresses.mainContract
                }
                async getTestnetPaymasterAddress() {
                    return await this.send("zks_getTestnetPaymaster", [])
                }
                async getDefaultBridgeAddresses() {
                    if (!this.contractAddresses.erc20BridgeL1) {
                        let e = await this.send("zks_getBridgeContracts", []);
                        this.contractAddresses.erc20BridgeL1 = e.l1Erc20DefaultBridge, this.contractAddresses.erc20BridgeL2 = e.l2Erc20DefaultBridge
                    }
                    return {
                        erc20L1: this.contractAddresses.erc20BridgeL1,
                        erc20L2: this.contractAddresses.erc20BridgeL2
                    }
                }
                async getConfirmedTokens(e = 0, t = 255) {
                    return (await this.send("zks_getConfirmedTokens", [e, t])).map((e => ({
                        address: e.l2Address,
                        ...e
                    })))
                }
                async getTokenPrice(e) {
                    return await this.send("zks_getTokenPrice", [e])
                }
                async getAllAccountBalances(e) {
                    let t = await this.send("zks_getAllAccountBalances", [e]);
                    for (let n in t) t[n] = r.BigNumber.from(t[n]);
                    return t
                }
                async l1ChainId() {
                    const e = await this.send("zks_L1ChainId", []);
                    return r.BigNumber.from(e).toNumber()
                }
                async getL1BatchNumber() {
                    const e = await this.send("zks_L1BatchNumber", []);
                    return r.BigNumber.from(e).toNumber()
                }
                async getBlockDetails(e) {
                    return await this.send("zks_getBlockDetails", [e])
                }
                async getTransactionDetails(e) {
                    return await this.send("zks_getTransactionDetails", [e])
                }
                async getWithdrawTx(e) {
                    var t, n, a, i;
                    const { ...s
                    } = e;
                    if (null == s.to && null == s.from) throw new Error("withdrawal target address is undefined");
                    if (null !== (t = s.to) && void 0 !== t || (s.to = s.from), null !== (n = s.overrides) && void 0 !== n || (s.overrides = {}), null !== (a = (i = s.overrides).from) && void 0 !== a || (i.from = s.from), (0, p.isETH)(s.token)) {
                        s.overrides.value || (s.overrides.value = s.amount);
                        if (!r.BigNumber.from(s.overrides.value).eq(s.amount)) throw new Error("The tx.value is not equal to the value withdrawn");
                        return o.IEthTokenFactory.connect(p.L2_ETH_TOKEN_ADDRESS, this).populateTransaction.withdraw(s.to, s.overrides)
                    }
                    if (null == s.bridgeAddress) {
                        const e = await this.getDefaultBridgeAddresses();
                        s.bridgeAddress = e.erc20L2
                    }
                    return o.IL2BridgeFactory.connect(s.bridgeAddress, this).populateTransaction.withdraw(s.to, s.token, s.amount, s.overrides)
                }
                async estimateGasWithdraw(e) {
                    const t = await this.getWithdrawTx(e);
                    return await this.estimateGas(t)
                }
                async getTransferTx(e) {
                    var t, n, a;
                    const { ...i
                    } = e;
                    if (null !== (t = i.overrides) && void 0 !== t || (i.overrides = {}), null !== (n = (a = i.overrides).from) && void 0 !== n || (a.from = i.from), null == i.token || i.token == p.ETH_ADDRESS) return { ...await r.ethers.utils.resolveProperties(i.overrides),
                        to: i.to,
                        value: i.amount
                    }; {
                        const e = o.IERC20MetadataFactory.connect(i.token, this);
                        return await e.populateTransaction.transfer(i.to, i.amount, i.overrides)
                    }
                }
                async estimateGasTransfer(e) {
                    const t = await this.getTransferTx(e);
                    return await this.estimateGas(t)
                }
                static getDefaultProvider() {
                    return new c(a.env.ZKSYNC_WEB3_API_URL || "http://localhost:3050")
                }
                async newFilter(e) {
                    e = await e;
                    const t = await this.send("eth_newFilter", [this._prepareFilter(e)]);
                    return r.BigNumber.from(t)
                }
                async newBlockFilter() {
                    const e = await this.send("eth_newBlockFilter", []);
                    return r.BigNumber.from(e)
                }
                async newPendingTransactionsFilter() {
                    const e = await this.send("eth_newPendingTransactionFilter", []);
                    return r.BigNumber.from(e)
                }
                async getFilterChanges(e) {
                    const t = await this.send("eth_getFilterChanges", [e.toHexString()]);
                    return "string" === typeof t[0] ? t : this._parseLogs(t)
                }
                async getLogs(e = {}) {
                    e = await e;
                    const t = await this.send("eth_getLogs", [this._prepareFilter(e)]);
                    return this._parseLogs(t)
                }
                _parseLogs(e) {
                    return i.arrayOf(this.formatter.filterLog.bind(this.formatter))(e)
                }
                _prepareFilter(e) {
                    return { ...e,
                        fromBlock: null == e.fromBlock ? null : this.formatter.blockTag(e.fromBlock),
                        toBlock: null == e.fromBlock ? null : this.formatter.blockTag(e.toBlock)
                    }
                }
                _wrapTransaction(e, t) {
                    const n = super._wrapTransaction(e, t);
                    return n.waitFinalize = async () => {
                        const e = await n.wait();
                        for (;;) {
                            const t = await this.getBlock("finalized");
                            if (e.blockNumber <= t.number) return await this.getTransactionReceipt(e.transactionHash);
                            await (0, p.sleep)(this.pollingInterval)
                        }
                    }, n
                }
                async getTransactionStatus(e) {
                    const t = await this.getTransaction(e);
                    if (null == t) return u.TransactionStatus.NotFound;
                    if (null == t.blockNumber) return u.TransactionStatus.Processing;
                    const n = await this.getBlock("finalized");
                    return t.blockNumber <= n.number ? u.TransactionStatus.Finalized : u.TransactionStatus.Committed
                }
                async getTransaction(e) {
                    e = await e;
                    const t = await super.getTransaction(e);
                    return t ? this._wrapTransaction(t, e) : null
                }
                async sendTransaction(e) {
                    return await super.sendTransaction(e)
                }
                async getL2TransactionFromPriorityOp(e) {
                    const t = await e.wait(),
                        n = (0, p.getL2HashFromPriorityOp)(t, await this.getMainContractAddress());
                    let a = null;
                    do {
                        a = await this.getTransactionStatus(n), await (0, p.sleep)(this.pollingInterval)
                    } while (a == u.TransactionStatus.NotFound);
                    return await this.getTransaction(n)
                }
                async getPriorityOpResponse(e) {
                    const t = { ...e
                    };
                    return t.waitL1Commit = t.wait, t.wait = async () => {
                        const t = await this.getL2TransactionFromPriorityOp(e);
                        return await t.wait()
                    }, t.waitFinalize = async () => {
                        const t = await this.getL2TransactionFromPriorityOp(e);
                        return await t.waitFinalize()
                    }, t
                }
                async getContractAccountInfo(e) {
                    const t = new r.Contract(p.CONTRACT_DEPLOYER_ADDRESS, p.CONTRACT_DEPLOYER, this),
                        n = await t.getAccountInfo(e);
                    return {
                        supportedAAVersion: n.supportedAAVersion,
                        nonceOrdering: n.nonceOrdering
                    }
                }
                async estimateL1ToL2Execute(e) {
                    var t, n;
                    null !== (t = e.gasPerPubdataByte) && void 0 !== t || (e.gasPerPubdataByte = p.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT), null !== (n = e.caller) && void 0 !== n || (e.caller = r.ethers.Wallet.createRandom().address);
                    const a = {
                        gasPerPubdataByte: e.gasPerPubdataByte
                    };
                    e.factoryDeps && Object.assign(a, {
                        factoryDeps: e.factoryDeps
                    });
                    return await this.estimateGasL1({
                        from: e.caller,
                        data: e.calldata,
                        to: e.contractAddress,
                        value: e.l2Value,
                        customData: a
                    })
                }
            }
            t.Provider = c;
            t.Web3Provider = class extends c {
                constructor(e, t) {
                    if (null == e) throw new Error("missing provider");
                    if (!e.request) throw new Error("provider must implement eip-1193");
                    super(e.host || e.path || (e.isMetaMask ? "metamask" : "eip-1193:"), t), this.provider = e
                }
                async send(e, t) {
                    return null !== t && void 0 !== t || (t = []), "eth_sign" == e && (this.provider.isMetaMask || this.provider.isStatus) && (e = "personal_sign", t = [t[1], t[0]]), await this.provider.request({
                        method: e,
                        params: t
                    })
                }
                getSigner(e) {
                    return y.Signer.from(super.getSigner(e))
                }
                async estimateGas(e) {
                    const t = await super.estimateGas(e),
                        n = r.BigNumber.from(21e3),
                        a = null != e.customData || e.type == p.EIP712_TX_TYPE;
                    return t.gt(n) || a ? t : n
                }
            }
        },
        47815: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.L1Signer = t.Signer = t.EIP712Signer = t.eip712Types = void 0;
            const a = n(7779),
                r = n(79662),
                i = n(75931),
                s = n(21659);
            t.eip712Types = {
                Transaction: [{
                    name: "txType",
                    type: "uint256"
                }, {
                    name: "from",
                    type: "uint256"
                }, {
                    name: "to",
                    type: "uint256"
                }, {
                    name: "gasLimit",
                    type: "uint256"
                }, {
                    name: "gasPerPubdataByteLimit",
                    type: "uint256"
                }, {
                    name: "maxFeePerGas",
                    type: "uint256"
                }, {
                    name: "maxPriorityFeePerGas",
                    type: "uint256"
                }, {
                    name: "paymaster",
                    type: "uint256"
                }, {
                    name: "nonce",
                    type: "uint256"
                }, {
                    name: "value",
                    type: "uint256"
                }, {
                    name: "data",
                    type: "bytes"
                }, {
                    name: "factoryDeps",
                    type: "bytes32[]"
                }, {
                    name: "paymasterInput",
                    type: "bytes"
                }]
            };
            class o {
                constructor(e, t) {
                    this.ethSigner = e, this.eip712Domain = Promise.resolve(t).then((e => ({
                        name: "zkSync",
                        version: "2",
                        chainId: e
                    })))
                }
                static getSignInput(e) {
                    var t, n, i, s, o, u, p;
                    const y = e.maxFeePerGas || e.gasPrice,
                        l = e.maxPriorityFeePerGas || y,
                        c = (null === (t = e.customData) || void 0 === t ? void 0 : t.gasPerPubdata) || r.DEFAULT_GAS_PER_PUBDATA_LIMIT;
                    return {
                        txType: e.type,
                        from: e.from,
                        to: e.to,
                        gasLimit: e.gasLimit,
                        gasPerPubdataByteLimit: c,
                        maxFeePerGas: y,
                        maxPriorityFeePerGas: l,
                        paymaster: (null === (i = null === (n = e.customData) || void 0 === n ? void 0 : n.paymasterParams) || void 0 === i ? void 0 : i.paymaster) || a.ethers.constants.AddressZero,
                        nonce: e.nonce,
                        value: e.value,
                        data: e.data,
                        factoryDeps: (null === (o = null === (s = e.customData) || void 0 === s ? void 0 : s.factoryDeps) || void 0 === o ? void 0 : o.map((e => (0, r.hashBytecode)(e)))) || [],
                        paymasterInput: (null === (p = null === (u = e.customData) || void 0 === u ? void 0 : u.paymasterParams) || void 0 === p ? void 0 : p.paymasterInput) || "0x"
                    }
                }
                async sign(e) {
                    return await this.ethSigner._signTypedData(await this.eip712Domain, t.eip712Types, o.getSignInput(e))
                }
                static getSignedDigest(e) {
                    if (!e.chainId) throw Error("Transaction chainId isn't set");
                    const n = {
                        name: "zkSync",
                        version: "2",
                        chainId: e.chainId
                    };
                    return i._TypedDataEncoder.hash(n, t.eip712Types, o.getSignInput(e))
                }
            }
            t.EIP712Signer = o;
            class u extends((0, s.AdapterL2)(a.ethers.providers.JsonRpcSigner)) {
                _signerL2() {
                    return this
                }
                _providerL2() {
                    return this.provider
                }
                static from(e) {
                    const t = Object.setPrototypeOf(e, u.prototype);
                    return t.eip712 = new o(t, t.getChainId()), t
                }
                async getNonce(e) {
                    return await this.getTransactionCount(e)
                }
                async sendTransaction(e) {
                    var t, n, a, i, s, o, u;
                    if (null == e.customData && null == e.type && (e.type = 0), null == e.customData && e.type != r.EIP712_TX_TYPE) return await super.sendTransaction(e); {
                        const p = await this.getAddress();
                        if (null !== (t = e.from) && void 0 !== t || (e.from = p), e.from.toLowerCase() != p.toLowerCase()) throw new Error("Transaction `from` address mismatch");
                        e.type = r.EIP712_TX_TYPE, null !== (n = e.value) && void 0 !== n || (e.value = 0), null !== (a = e.data) && void 0 !== a || (e.data = "0x"), null !== (i = e.nonce) && void 0 !== i || (e.nonce = await this.getNonce()), e.customData = this._fillCustomData(e.customData), null !== (s = e.gasPrice) && void 0 !== s || (e.gasPrice = await this.provider.getGasPrice()), null !== (o = e.gasLimit) && void 0 !== o || (e.gasLimit = await this.provider.estimateGas(e)), null !== (u = e.chainId) && void 0 !== u || (e.chainId = (await this.provider.getNetwork()).chainId), e.customData.customSignature = await this.eip712.sign(e);
                        const y = (0, r.serialize)(e);
                        return await this.provider.sendTransaction(y)
                    }
                }
            }
            t.Signer = u;
            class p extends((0, s.AdapterL1)(a.ethers.providers.JsonRpcSigner)) {
                _providerL2() {
                    return this.providerL2
                }
                _providerL1() {
                    return this.provider
                }
                _signerL1() {
                    return this
                }
                static from(e, t) {
                    const n = Object.setPrototypeOf(e, p.prototype);
                    return n.providerL2 = t, n
                }
                connectToL2(e) {
                    return this.providerL2 = e, this
                }
            }
            t.L1Signer = p
        },
        23430: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AccountNonceOrdering = t.AccountAbstractionVersion = t.TransactionStatus = t.PriorityOpTree = t.PriorityQueueType = t.Network = void 0,
                function(e) {
                    e[e.Mainnet = 1] = "Mainnet", e[e.Ropsten = 3] = "Ropsten", e[e.Rinkeby = 4] = "Rinkeby", e[e.Goerli = 5] = "Goerli", e[e.Localhost = 9] = "Localhost"
                }(t.Network || (t.Network = {})),
                function(e) {
                    e[e.Deque = 0] = "Deque", e[e.HeapBuffer = 1] = "HeapBuffer", e[e.Heap = 2] = "Heap"
                }(t.PriorityQueueType || (t.PriorityQueueType = {})),
                function(e) {
                    e[e.Full = 0] = "Full", e[e.Rollup = 1] = "Rollup"
                }(t.PriorityOpTree || (t.PriorityOpTree = {})),
                function(e) {
                    e.NotFound = "not-found", e.Processing = "processing", e.Committed = "committed", e.Finalized = "finalized"
                }(t.TransactionStatus || (t.TransactionStatus = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Version1 = 1] = "Version1"
                }(t.AccountAbstractionVersion || (t.AccountAbstractionVersion = {})),
                function(e) {
                    e[e.Sequential = 0] = "Sequential", e[e.Arbitrary = 1] = "Arbitrary"
                }(t.AccountNonceOrdering || (t.AccountNonceOrdering = {}))
        },
        79662: function(e, t, n) {
            var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, a, r)
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                r = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || a(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.estimateDefaultBridgeDepositL2Gas = t.isTypedDataSignatureCorrect = t.isMessageSignatureCorrect = t.getERC20BridgeCalldata = t.undoL1ToL2Alias = t.applyL1ToL2Alias = t.getL2HashFromPriorityOp = t.parseTransaction = t.hashBytecode = t.serialize = t.checkBaseCost = t.createAddress = t.create2Address = t.getDeployedContracts = t.getHashedL2ToL1Msg = t.layer1TxDefaults = t.sleep = t.isETH = t.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT = t.DEFAULT_GAS_PER_PUBDATA_LIMIT = t.MAX_BYTECODE_LEN_BYTES = t.PRIORITY_OPERATION_L2_TX_TYPE = t.EIP712_TX_TYPE = t.EIP1271_MAGIC_VALUE = t.L1_TO_L2_ALIAS_OFFSET = t.L2_ETH_TOKEN_ADDRESS = t.L1_MESSENGER_ADDRESS = t.CONTRACT_DEPLOYER_ADDRESS = t.BOOTLOADER_FORMAL_ADDRESS = t.L2_BRIDGE_ABI = t.L1_BRIDGE_ABI = t.IERC1271 = t.IERC20 = t.L1_MESSENGER = t.CONTRACT_DEPLOYER = t.ZKSYNC_MAIN_ABI = t.ETH_ADDRESS = void 0;
            const i = n(7779),
                s = n(23430),
                o = n(47815),
                u = n(17627),
                p = n(56371);
            r(n(71002), t), t.ETH_ADDRESS = "0x0000000000000000000000000000000000000000", t.ZKSYNC_MAIN_ABI = new i.utils.Interface(n(97763).M), t.CONTRACT_DEPLOYER = new i.utils.Interface(n(74741).M), t.L1_MESSENGER = new i.utils.Interface(n(13465).M), t.IERC20 = new i.utils.Interface(n(8804).M), t.IERC1271 = new i.utils.Interface(n(84371).M), t.L1_BRIDGE_ABI = new i.utils.Interface(n(22281).M), t.L2_BRIDGE_ABI = new i.utils.Interface(n(41432).M), t.BOOTLOADER_FORMAL_ADDRESS = "0x0000000000000000000000000000000000008001", t.CONTRACT_DEPLOYER_ADDRESS = "0x0000000000000000000000000000000000008006", t.L1_MESSENGER_ADDRESS = "0x0000000000000000000000000000000000008008", t.L2_ETH_TOKEN_ADDRESS = "0x000000000000000000000000000000000000800a", t.L1_TO_L2_ALIAS_OFFSET = "0x1111000000000000000000000000000000001111", t.EIP1271_MAGIC_VALUE = "0x1626ba7e", t.EIP712_TX_TYPE = 113, t.PRIORITY_OPERATION_L2_TX_TYPE = 255, t.MAX_BYTECODE_LEN_BYTES = 2097120, t.DEFAULT_GAS_PER_PUBDATA_LIMIT = 5e4, t.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT = 800, t.isETH = function(e) {
                return e.toLowerCase() == t.ETH_ADDRESS || e.toLowerCase() == t.L2_ETH_TOKEN_ADDRESS
            }, t.sleep = function(e) {
                return new Promise((t => setTimeout(t, e)))
            }, t.layer1TxDefaults = function() {
                return {
                    queueType: s.PriorityQueueType.Deque,
                    opTree: s.PriorityOpTree.Full
                }
            }, t.getHashedL2ToL1Msg = function(e, n, a) {
                const r = new Uint8Array([0, 1, ...i.ethers.utils.zeroPad(i.ethers.utils.hexlify(a), 2), ...i.ethers.utils.arrayify(t.L1_MESSENGER_ADDRESS), ...i.ethers.utils.zeroPad(e, 32), ...i.ethers.utils.arrayify(i.ethers.utils.keccak256(n))]);
                return i.ethers.utils.keccak256(r)
            }, t.getDeployedContracts = function(e) {
                return e.logs.filter((e => e.topics[0] == i.utils.id("ContractDeployed(address,bytes32,address)") && e.address == t.CONTRACT_DEPLOYER_ADDRESS)).map((e => {
                    const t = `0x${e.topics[1].slice(e.topics[1].length-40)}`,
                        n = e.topics[2],
                        a = `0x${e.topics[3].slice(e.topics[3].length-40)}`;
                    return {
                        sender: i.utils.getAddress(t),
                        bytecodeHash: n,
                        deployedAddress: i.utils.getAddress(a)
                    }
                }))
            }, t.create2Address = function(e, t, n, a) {
                const r = i.ethers.utils.keccak256(i.ethers.utils.toUtf8Bytes("zksyncCreate2")),
                    s = i.ethers.utils.keccak256(a),
                    o = i.ethers.utils.keccak256(i.ethers.utils.concat([r, i.ethers.utils.zeroPad(e, 32), n, t, s])).slice(26);
                return i.ethers.utils.getAddress(o)
            }, t.createAddress = function(e, t) {
                const n = i.ethers.utils.keccak256(i.ethers.utils.toUtf8Bytes("zksyncCreate")),
                    a = i.ethers.utils.keccak256(i.ethers.utils.concat([n, i.ethers.utils.zeroPad(e, 32), i.ethers.utils.zeroPad(i.ethers.utils.hexlify(t), 32)])).slice(26);
                return i.ethers.utils.getAddress(a)
            }, t.checkBaseCost = async function(e, t) {
                if (e.gt(await t)) throw new Error(`The base cost of performing the priority operation is higher than the provided value parameter for the transaction: baseCost: ${e}, provided value: ${t}`)
            }, t.serialize = function(e, n) {
                var a;
                if (null == e.customData && e.type != t.EIP712_TX_TYPE) return i.utils.serializeTransaction(e, n);
                if (!e.chainId) throw Error("Transaction chainId isn't set");

                function r(e, t) {
                    const n = i.utils.stripZeros(i.BigNumber.from(e).toHexString());
                    if (n.length > 32) throw new Error("invalid length for " + t);
                    return n
                }
                if (!e.from) throw new Error("Explicitly providing `from` field is reqiured for EIP712 transactions");
                const s = e.from,
                    o = e.customData;
                let u = e.maxFeePerGas || e.gasPrice || 0,
                    p = e.maxPriorityFeePerGas || u;
                const y = [r(e.nonce || 0, "nonce"), r(p, "maxPriorityFeePerGas"), r(u, "maxFeePerGas"), r(e.gasLimit || 0, "gasLimit"), null != e.to ? i.utils.getAddress(e.to) : "0x", r(e.value || 0, "value"), e.data || "0x"];
                if (n) {
                    const e = i.utils.splitSignature(n);
                    y.push(r(e.recoveryParam, "recoveryParam")), y.push(i.utils.stripZeros(e.r)), y.push(i.utils.stripZeros(e.s))
                } else y.push(r(e.chainId, "chainId")), y.push("0x"), y.push("0x");
                if (y.push(r(e.chainId, "chainId")), y.push(i.utils.getAddress(s)), y.push(r(o.gasPerPubdata || t.DEFAULT_GAS_PER_PUBDATA_LIMIT, "gasPerPubdata")), y.push((null !== (a = o.factoryDeps) && void 0 !== a ? a : []).map((e => i.utils.hexlify(e)))), o.customSignature && 0 == i.ethers.utils.arrayify(o.customSignature).length) throw new Error("Empty signatures are not supported");
                return y.push(o.customSignature || "0x"), o.paymasterParams ? y.push([o.paymasterParams.paymaster, i.ethers.utils.hexlify(o.paymasterParams.paymasterInput)]) : y.push([]), i.utils.hexConcat([
                    [t.EIP712_TX_TYPE], i.utils.RLP.encode(y)
                ])
            }, t.hashBytecode = function(e) {
                const n = i.ethers.utils.arrayify(e);
                if (n.length % 32 != 0) throw new Error("The bytecode length in bytes must be divisible by 32");
                if (n.length > t.MAX_BYTECODE_LEN_BYTES) throw new Error(`Bytecode can not be longer than ${t.MAX_BYTECODE_LEN_BYTES} bytes`);
                const a = i.ethers.utils.sha256(n),
                    r = i.ethers.utils.arrayify(a),
                    s = n.length / 32;
                if (s % 2 == 0) throw new Error("Bytecode length in 32-byte words must be odd");
                const o = i.ethers.utils.arrayify(s),
                    u = i.ethers.utils.zeroPad(o, 2),
                    p = new Uint8Array([1, 0]);
                return r.set(p, 0), r.set(u, 2), r
            }, t.parseTransaction = function(e) {
                function n(e) {
                    return "0x" === e ? null : i.utils.getAddress(e)
                }

                function a(e) {
                    return "0x" === e ? i.BigNumber.from(0) : i.BigNumber.from(e)
                }
                const r = i.utils.arrayify(e);
                if (r[0] != t.EIP712_TX_TYPE) return i.utils.parseTransaction(r);
                const s = i.utils.RLP.decode(r.slice(1)),
                    u = {
                        type: t.EIP712_TX_TYPE,
                        nonce: a(s[0]).toNumber(),
                        maxPriorityFeePerGas: a(s[1]),
                        maxFeePerGas: a(s[2]),
                        gasLimit: a(s[3]),
                        to: n(s[4]),
                        value: a(s[5]),
                        data: s[6],
                        chainId: a(s[10]),
                        from: n(s[11]),
                        customData: {
                            gasPerPubdata: a(s[12]),
                            factoryDeps: s[13],
                            customSignature: s[14],
                            paymasterParams: function(e) {
                                if (0 != e.length) {
                                    if (2 != e.length) throw new Error(`Invalid paymaster parameters, expected to have length of 2, found ${e.length}`);
                                    return {
                                        paymaster: i.utils.getAddress(e[0]),
                                        paymasterInput: i.utils.arrayify(e[1])
                                    }
                                }
                            }(s[15])
                        }
                    },
                    p = {
                        v: a(s[7]).toNumber(),
                        r: s[8],
                        s: s[9]
                    };
                if (("0x" == i.utils.hexlify(p.r) || "0x" == i.utils.hexlify(p.s)) && !u.customData.customSignature) return u;
                if (0 !== p.v && 1 !== p.v && !u.customData.customSignature) throw new Error("Failed to parse signature");
                return u.customData.customSignature || (u.v = p.v, u.s = p.s, u.r = p.r), u.hash = function(e, t) {
                    const n = o.EIP712Signer.getSignedDigest(e),
                        a = i.ethers.utils.keccak256(function(e, t) {
                            var n;
                            if ((null === (n = null === e || void 0 === e ? void 0 : e.customData) || void 0 === n ? void 0 : n.customSignature) && e.customData.customSignature.length) return i.ethers.utils.arrayify(e.customData.customSignature);
                            if (!t) throw new Error("No signature provided");
                            const a = i.ethers.utils.zeroPad(i.ethers.utils.arrayify(t.r), 32),
                                r = i.ethers.utils.zeroPad(i.ethers.utils.arrayify(t.s), 32),
                                s = t.v;
                            return new Uint8Array([...a, ...r, s])
                        }(e, t));
                    return i.ethers.utils.keccak256(i.ethers.utils.hexConcat([n, a]))
                }(u, p), u
            }, t.getL2HashFromPriorityOp = function(e, n) {
                let a = null;
                for (const r of e.logs)
                    if (r.address.toLowerCase() == n.toLowerCase()) try {
                        const e = t.ZKSYNC_MAIN_ABI.parseLog(r);
                        e && null != e.args.txHash && (a = e.args.txHash)
                    } catch {}
                if (!a) throw new Error("Failed to parse tx logs");
                return a
            };
            const y = i.BigNumber.from(2).pow(160);

            function l(e) {
                return i.ethers.utils.hexlify(i.ethers.BigNumber.from(e).add(t.L1_TO_L2_ALIAS_OFFSET).mod(y))
            }
            async function c(e, n, a, r, i) {
                const s = await async function(e, t) {
                    const n = u.IERC20MetadataFactory.connect(e, t),
                        a = await n.name(),
                        r = await n.symbol(),
                        i = await n.decimals(),
                        s = new p.AbiCoder,
                        o = s.encode(["string"], [a]),
                        y = s.encode(["string"], [r]),
                        l = s.encode(["uint256"], [i]);
                    return s.encode(["bytes", "bytes", "bytes"], [o, y, l])
                }(e, i);
                return t.L2_BRIDGE_ABI.encodeFunctionData("finalizeDeposit", [n, a, e, r, s])
            }
            async function d(e, n, a, r) {
                let s = !1;
                const o = await e.getCode(n);
                return s = 0 != i.ethers.utils.arrayify(o).length, s ? await async function(e, n, a, r) {
                    const s = new i.ethers.Contract(n, t.IERC1271, e);
                    return await s.isValidSignature(a, r) == t.EIP1271_MAGIC_VALUE
                }(e, n, a, r) : function(e, t, n) {
                    try {
                        return e == i.ethers.utils.recoverAddress(t, n)
                    } catch {
                        return !1
                    }
                }(n, a, r)
            }
            t.applyL1ToL2Alias = l, t.undoL1ToL2Alias = function(e) {
                let n = i.ethers.BigNumber.from(e).sub(t.L1_TO_L2_ALIAS_OFFSET);
                return n.lt(i.BigNumber.from(0)) && (n = n.add(y)), i.ethers.utils.hexlify(n)
            }, t.getERC20BridgeCalldata = c, t.isMessageSignatureCorrect = async function(e, t, n, a) {
                const r = i.ethers.utils.hashMessage(n);
                return await d(e, t, r, a)
            }, t.isTypedDataSignatureCorrect = async function(e, t, n, a, r, s) {
                const o = i.ethers.utils._TypedDataEncoder.hash(n, a, r);
                return await d(e, t, o, s)
            }, t.estimateDefaultBridgeDepositL2Gas = async function(e, n, a, r, s, o, u) {
                if (null !== o && void 0 !== o || (o = i.ethers.Wallet.createRandom().address), a == t.ETH_ADDRESS) return await n.estimateL1ToL2Execute({
                    contractAddress: s,
                    gasPerPubdataByte: u,
                    caller: o,
                    calldata: "0x",
                    l2Value: r
                }); {
                    const t = (await n.getDefaultBridgeAddresses()).erc20L1,
                        i = (await n.getDefaultBridgeAddresses()).erc20L2,
                        p = await c(a, o, s, r, e);
                    return await n.estimateL1ToL2Execute({
                        caller: l(t),
                        contractAddress: i,
                        gasPerPubdataByte: u,
                        calldata: p
                    })
                }
            }
        },
        6440: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Wallet = void 0;
            const a = n(47815),
                r = n(79662),
                i = n(7779),
                s = n(21659);
            class o extends((0, s.AdapterL2)((0, s.AdapterL1)(i.ethers.Wallet))) {
                constructor(e, t, n) {
                    if (super(e, t), null != this.provider) {
                        const e = this.getChainId();
                        this.eip712 = new a.EIP712Signer(this, e)
                    }
                    this.providerL1 = n
                }
                _providerL1() {
                    if (null == this.providerL1) throw new Error("L1 provider missing: use `connectToL1` to specify");
                    return this.providerL1
                }
                _providerL2() {
                    return this.provider
                }
                _signerL1() {
                    return this.ethWallet()
                }
                _signerL2() {
                    return this
                }
                ethWallet() {
                    return new i.ethers.Wallet(this._signingKey(), this._providerL1())
                }
                async getNonce(e) {
                    return await this.getTransactionCount(e)
                }
                connect(e) {
                    return new o(this._signingKey(), e, this.providerL1)
                }
                connectToL1(e) {
                    return new o(this._signingKey(), this.provider, e)
                }
                static fromMnemonic(e, t, n) {
                    const a = super.fromMnemonic(e, t, n);
                    return new o(a._signingKey())
                }
                static async fromEncryptedJson(e, t, n) {
                    const a = await super.fromEncryptedJson(e, t, n);
                    return new o(a._signingKey())
                }
                static fromEncryptedJsonSync(e, t) {
                    const n = super.fromEncryptedJsonSync(e, t);
                    return new o(n._signingKey())
                }
                static createRandom(e) {
                    const t = super.createRandom(e);
                    return new o(t._signingKey())
                }
                async populateTransaction(e) {
                    var t, n;
                    return null == e.type && null == e.customData && (e.type = 0), null == (e = await super.populateTransaction(e)).customData && e.type != r.EIP712_TX_TYPE || (e.type = r.EIP712_TX_TYPE, null !== (t = e.value) && void 0 !== t || (e.value = 0), null !== (n = e.data) && void 0 !== n || (e.data = "0x"), e.customData = this._fillCustomData(e.customData), e.gasPrice = await this.provider.getGasPrice()), e
                }
                async signTransaction(e) {
                    var t;
                    if (null == e.customData && e.type != r.EIP712_TX_TYPE) return 2 == e.type && null == e.maxFeePerGas && (e.maxFeePerGas = await this.provider.getGasPrice()), await super.signTransaction(e);
                    if (null !== (t = e.from) && void 0 !== t || (e.from = this.address), e.from.toLowerCase() != this.address.toLowerCase()) throw new Error("Transaction `from` address mismatch");
                    return e.customData.customSignature = await this.eip712.sign(e), (0, r.serialize)(e)
                }
                async sendTransaction(e) {
                    return await super.sendTransaction(e)
                }
            }
            t.Wallet = o
        },
        54577: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IAllowListFactory = void 0;
            const a = n(7779);
            t.IAllowListFactory = class {
                static connect(e, t) {
                    return new a.Contract(e, r, t)
                }
            };
            const r = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "enum IAllowList.AccessMode",
                    name: "previousMode",
                    type: "uint8"
                }, {
                    indexed: !1,
                    internalType: "enum IAllowList.AccessMode",
                    name: "newMode",
                    type: "uint8"
                }],
                name: "UpdateAccessMode",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "caller",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "bytes4",
                    name: "functionSig",
                    type: "bytes4"
                }, {
                    indexed: !1,
                    internalType: "bool",
                    name: "status",
                    type: "bool"
                }],
                name: "UpdateCallPermission",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_caller",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_target",
                    type: "address"
                }, {
                    internalType: "bytes4",
                    name: "_functionSig",
                    type: "bytes4"
                }],
                name: "canCall",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_target",
                    type: "address"
                }],
                name: "getAccessMode",
                outputs: [{
                    internalType: "enum IAllowList.AccessMode",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }],
                name: "getTokenDepositLimitData",
                outputs: [{
                    components: [{
                        internalType: "bool",
                        name: "depositLimitation",
                        type: "bool"
                    }, {
                        internalType: "uint256",
                        name: "depositCap",
                        type: "uint256"
                    }],
                    internalType: "struct IAllowList.Deposit",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_caller",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_target",
                    type: "address"
                }, {
                    internalType: "bytes4",
                    name: "_functionSig",
                    type: "bytes4"
                }],
                name: "hasSpecialAccessToCall",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_target",
                    type: "address"
                }, {
                    internalType: "enum IAllowList.AccessMode",
                    name: "_accessMode",
                    type: "uint8"
                }],
                name: "setAccessMode",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "_targets",
                    type: "address[]"
                }, {
                    internalType: "enum IAllowList.AccessMode[]",
                    name: "_accessMode",
                    type: "uint8[]"
                }],
                name: "setBatchAccessMode",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "_callers",
                    type: "address[]"
                }, {
                    internalType: "address[]",
                    name: "_targets",
                    type: "address[]"
                }, {
                    internalType: "bytes4[]",
                    name: "_functionSigs",
                    type: "bytes4[]"
                }, {
                    internalType: "bool[]",
                    name: "_enables",
                    type: "bool[]"
                }],
                name: "setBatchPermissionToCall",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }, {
                    internalType: "bool",
                    name: "_depositLimitation",
                    type: "bool"
                }, {
                    internalType: "uint256",
                    name: "_depositCap",
                    type: "uint256"
                }],
                name: "setDepositLimit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_caller",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_target",
                    type: "address"
                }, {
                    internalType: "bytes4",
                    name: "_functionSig",
                    type: "bytes4"
                }, {
                    internalType: "bool",
                    name: "_enable",
                    type: "bool"
                }],
                name: "setPermissionToCall",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }]
        },
        86020: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IERC20MetadataFactory = void 0;
            const a = n(7779);
            t.IERC20MetadataFactory = class {
                static connect(e, t) {
                    return new a.Contract(e, r, t)
                }
            };
            const r = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }]
        },
        47238: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IEthTokenFactory = void 0;
            const a = n(7779);
            t.IEthTokenFactory = class {
                static connect(e, t) {
                    return new a.Contract(e, r, t)
                }
            };
            const r = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "Mint",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "_l1Receiver",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "Withdrawal",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_account",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "mint",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "transferFromTo",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Receiver",
                    type: "address"
                }],
                name: "withdraw",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }]
        },
        28966: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IL1BridgeFactory = void 0;
            const a = n(7779);
            t.IL1BridgeFactory = class {
                static connect(e, t) {
                    return new a.Contract(e, r, t)
                }
            };
            const r = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "l1Token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "ClaimedFailedDeposit",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "l1Token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "DepositInitiated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "l1Token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "WithdrawalFinalized",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_depositSender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }, {
                    internalType: "bytes32",
                    name: "_l2TxHash",
                    type: "bytes32"
                }, {
                    internalType: "uint256",
                    name: "_l2BlockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2MessageIndex",
                    type: "uint256"
                }, {
                    internalType: "uint16",
                    name: "_l2TxNumberInBlock",
                    type: "uint16"
                }, {
                    internalType: "bytes32[]",
                    name: "_merkleProof",
                    type: "bytes32[]"
                }],
                name: "claimFailedDeposit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l2Receiver",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2TxGasLimit",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2TxGasPerPubdataByte",
                    type: "uint256"
                }],
                name: "deposit",
                outputs: [{
                    internalType: "bytes32",
                    name: "txHash",
                    type: "bytes32"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_l2BlockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2MessageIndex",
                    type: "uint256"
                }, {
                    internalType: "uint16",
                    name: "_l2TxNumberInBlock",
                    type: "uint16"
                }, {
                    internalType: "bytes",
                    name: "_message",
                    type: "bytes"
                }, {
                    internalType: "bytes32[]",
                    name: "_merkleProof",
                    type: "bytes32[]"
                }],
                name: "finalizeWithdrawal",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_l2BlockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2MessageIndex",
                    type: "uint256"
                }],
                name: "isWithdrawalFinalized",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }],
                name: "l2TokenAddress",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }]
        },
        9738: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IL2BridgeFactory = void 0;
            const a = n(7779);
            t.IL2BridgeFactory = class {
                static connect(e, t) {
                    return new a.Contract(e, r, t)
                }
            };
            const r = [{
                inputs: [{
                    internalType: "address",
                    name: "_l1Sender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_l2Receiver",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "finalizeDeposit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Bridge",
                    type: "address"
                }, {
                    internalType: "bytes32",
                    name: "_l2TokenProxyBytecodeHash",
                    type: "bytes32"
                }, {
                    internalType: "address",
                    name: "_governor",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "l1Bridge",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l2Token",
                    type: "address"
                }],
                name: "l1TokenAddress",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Token",
                    type: "address"
                }],
                name: "l2TokenAddress",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_l1Receiver",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_l2Token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "withdraw",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }]
        },
        49049: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IZkSyncFactory = void 0;
            const a = n(7779);
            t.IZkSyncFactory = class {
                static connect(e, t) {
                    return new a.Contract(e, r, t)
                }
            };
            const r = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "blockNumber",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "blockHash",
                    type: "bytes32"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "commitment",
                    type: "bytes32"
                }],
                name: "BlockCommit",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "blockNumber",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "blockHash",
                    type: "bytes32"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "commitment",
                    type: "bytes32"
                }],
                name: "BlockExecution",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "totalBlocksCommitted",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "totalBlocksVerified",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "totalBlocksExecuted",
                    type: "uint256"
                }],
                name: "BlocksRevert",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "previousLastVerifiedBlock",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "uint256",
                    name: "currentLastVerifiedBlock",
                    type: "uint256"
                }],
                name: "BlocksVerification",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "proposalId",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "proposalHash",
                    type: "bytes32"
                }],
                name: "CancelUpgradeProposal",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "EthWithdrawalFinalized",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "proposalId",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "proposalHash",
                    type: "bytes32"
                }, {
                    indexed: !1,
                    internalType: "bytes32",
                    name: "proposalSalt",
                    type: "bytes32"
                }],
                name: "ExecuteUpgrade",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [],
                name: "Freeze",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "bool",
                    name: "isPorterAvailable",
                    type: "bool"
                }],
                name: "IsPorterAvailableStatusUpdate",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "oldGovernor",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newGovernor",
                    type: "address"
                }],
                name: "NewGovernor",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "bytes32",
                    name: "previousBytecodeHash",
                    type: "bytes32"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "newBytecodeHash",
                    type: "bytes32"
                }],
                name: "NewL2BootloaderBytecodeHash",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "bytes32",
                    name: "previousBytecodeHash",
                    type: "bytes32"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "newBytecodeHash",
                    type: "bytes32"
                }],
                name: "NewL2DefaultAccountBytecodeHash",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "oldPendingGovernor",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newPendingGovernor",
                    type: "address"
                }],
                name: "NewPendingGovernor",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "txId",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "bytes32",
                    name: "txHash",
                    type: "bytes32"
                }, {
                    indexed: !1,
                    internalType: "uint64",
                    name: "expirationTimestamp",
                    type: "uint64"
                }, {
                    components: [{
                        internalType: "uint256",
                        name: "txType",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "from",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "to",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "gasPerPubdataByteLimit",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "paymaster",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256[4]",
                        name: "reserved",
                        type: "uint256[4]"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }, {
                        internalType: "uint256[]",
                        name: "factoryDeps",
                        type: "uint256[]"
                    }, {
                        internalType: "bytes",
                        name: "paymasterInput",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "reservedDynamic",
                        type: "bytes"
                    }],
                    indexed: !1,
                    internalType: "struct IMailbox.L2CanonicalTransaction",
                    name: "transaction",
                    type: "tuple"
                }, {
                    indexed: !1,
                    internalType: "bytes[]",
                    name: "factoryDeps",
                    type: "bytes[]"
                }],
                name: "NewPriorityRequest",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "oldPriorityTxMaxGasLimit",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newPriorityTxMaxGasLimit",
                    type: "uint256"
                }],
                name: "NewPriorityTxMaxGasLimit",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "oldVerifier",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newVerifier",
                    type: "address"
                }],
                name: "NewVerifier",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    components: [{
                        internalType: "bytes32",
                        name: "recursionNodeLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionLeafLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionCircuitsSetVksHash",
                        type: "bytes32"
                    }],
                    indexed: !1,
                    internalType: "struct VerifierParams",
                    name: "oldVerifierParams",
                    type: "tuple"
                }, {
                    components: [{
                        internalType: "bytes32",
                        name: "recursionNodeLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionLeafLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionCircuitsSetVksHash",
                        type: "bytes32"
                    }],
                    indexed: !1,
                    internalType: "struct VerifierParams",
                    name: "newVerifierParams",
                    type: "tuple"
                }],
                name: "NewVerifierParams",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "proposalId",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "proposalHash",
                    type: "bytes32"
                }],
                name: "ProposeShadowUpgrade",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    components: [{
                        components: [{
                            internalType: "address",
                            name: "facet",
                            type: "address"
                        }, {
                            internalType: "enum Diamond.Action",
                            name: "action",
                            type: "uint8"
                        }, {
                            internalType: "bool",
                            name: "isFreezable",
                            type: "bool"
                        }, {
                            internalType: "bytes4[]",
                            name: "selectors",
                            type: "bytes4[]"
                        }],
                        internalType: "struct Diamond.FacetCut[]",
                        name: "facetCuts",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "initAddress",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "initCalldata",
                        type: "bytes"
                    }],
                    indexed: !1,
                    internalType: "struct Diamond.DiamondCutData",
                    name: "diamondCut",
                    type: "tuple"
                }, {
                    indexed: !0,
                    internalType: "uint256",
                    name: "proposalId",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "bytes32",
                    name: "proposalSalt",
                    type: "bytes32"
                }],
                name: "ProposeTransparentUpgrade",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "proposalId",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "proposalHash",
                    type: "bytes32"
                }],
                name: "SecurityCouncilUpgradeApprove",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [],
                name: "Unfreeze",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "validatorAddress",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "bool",
                    name: "isActive",
                    type: "bool"
                }],
                name: "ValidatorStatusUpdate",
                type: "event"
            }, {
                inputs: [],
                name: "acceptGovernor",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "_proposedUpgradeHash",
                    type: "bytes32"
                }],
                name: "cancelUpgradeProposal",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "uint64",
                        name: "blockNumber",
                        type: "uint64"
                    }, {
                        internalType: "bytes32",
                        name: "blockHash",
                        type: "bytes32"
                    }, {
                        internalType: "uint64",
                        name: "indexRepeatedStorageChanges",
                        type: "uint64"
                    }, {
                        internalType: "uint256",
                        name: "numberOfLayer1Txs",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "priorityOperationsHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "l2LogsTreeRoot",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "commitment",
                        type: "bytes32"
                    }],
                    internalType: "struct IExecutor.StoredBlockInfo",
                    name: "_lastCommittedBlockData",
                    type: "tuple"
                }, {
                    components: [{
                        internalType: "uint64",
                        name: "blockNumber",
                        type: "uint64"
                    }, {
                        internalType: "uint64",
                        name: "timestamp",
                        type: "uint64"
                    }, {
                        internalType: "uint64",
                        name: "indexRepeatedStorageChanges",
                        type: "uint64"
                    }, {
                        internalType: "bytes32",
                        name: "newStateRoot",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "numberOfLayer1Txs",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "l2LogsTreeRoot",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "priorityOperationsHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes",
                        name: "initialStorageChanges",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "repeatedStorageChanges",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "l2Logs",
                        type: "bytes"
                    }, {
                        internalType: "bytes[]",
                        name: "l2ArbitraryLengthMessages",
                        type: "bytes[]"
                    }, {
                        internalType: "bytes[]",
                        name: "factoryDeps",
                        type: "bytes[]"
                    }],
                    internalType: "struct IExecutor.CommitBlockInfo[]",
                    name: "_newBlocksData",
                    type: "tuple[]"
                }],
                name: "commitBlocks",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "uint64",
                        name: "blockNumber",
                        type: "uint64"
                    }, {
                        internalType: "bytes32",
                        name: "blockHash",
                        type: "bytes32"
                    }, {
                        internalType: "uint64",
                        name: "indexRepeatedStorageChanges",
                        type: "uint64"
                    }, {
                        internalType: "uint256",
                        name: "numberOfLayer1Txs",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "priorityOperationsHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "l2LogsTreeRoot",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "commitment",
                        type: "bytes32"
                    }],
                    internalType: "struct IExecutor.StoredBlockInfo[]",
                    name: "_blocksData",
                    type: "tuple[]"
                }],
                name: "executeBlocks",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        components: [{
                            internalType: "address",
                            name: "facet",
                            type: "address"
                        }, {
                            internalType: "enum Diamond.Action",
                            name: "action",
                            type: "uint8"
                        }, {
                            internalType: "bool",
                            name: "isFreezable",
                            type: "bool"
                        }, {
                            internalType: "bytes4[]",
                            name: "selectors",
                            type: "bytes4[]"
                        }],
                        internalType: "struct Diamond.FacetCut[]",
                        name: "facetCuts",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "initAddress",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "initCalldata",
                        type: "bytes"
                    }],
                    internalType: "struct Diamond.DiamondCutData",
                    name: "_diamondCut",
                    type: "tuple"
                }, {
                    internalType: "bytes32",
                    name: "_proposalSalt",
                    type: "bytes32"
                }],
                name: "executeUpgrade",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes4",
                    name: "_selector",
                    type: "bytes4"
                }],
                name: "facetAddress",
                outputs: [{
                    internalType: "address",
                    name: "facet",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "facetAddresses",
                outputs: [{
                    internalType: "address[]",
                    name: "facets",
                    type: "address[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_facet",
                    type: "address"
                }],
                name: "facetFunctionSelectors",
                outputs: [{
                    internalType: "bytes4[]",
                    name: "",
                    type: "bytes4[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "facets",
                outputs: [{
                    components: [{
                        internalType: "address",
                        name: "addr",
                        type: "address"
                    }, {
                        internalType: "bytes4[]",
                        name: "selectors",
                        type: "bytes4[]"
                    }],
                    internalType: "struct IGetters.Facet[]",
                    name: "",
                    type: "tuple[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_l2BlockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2MessageIndex",
                    type: "uint256"
                }, {
                    internalType: "uint16",
                    name: "_l2TxNumberInBlock",
                    type: "uint16"
                }, {
                    internalType: "bytes",
                    name: "_message",
                    type: "bytes"
                }, {
                    internalType: "bytes32[]",
                    name: "_merkleProof",
                    type: "bytes32[]"
                }],
                name: "finalizeEthWithdrawal",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "freezeDiamond",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "getCurrentProposalId",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getFirstUnprocessedPriorityTx",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getGovernor",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getL2BootloaderBytecodeHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getL2DefaultAccountBytecodeHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getPendingGovernor",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getPriorityQueueSize",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getProposedUpgradeHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getProposedUpgradeTimestamp",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getSecurityCouncil",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getTotalBlocksCommitted",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getTotalBlocksExecuted",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getTotalBlocksVerified",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getTotalPriorityTxs",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getUpgradeProposalState",
                outputs: [{
                    internalType: "enum UpgradeState",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getVerifier",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getVerifierParams",
                outputs: [{
                    components: [{
                        internalType: "bytes32",
                        name: "recursionNodeLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionLeafLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionCircuitsSetVksHash",
                        type: "bytes32"
                    }],
                    internalType: "struct VerifierParams",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getpriorityTxMaxGasLimit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "isApprovedBySecurityCouncil",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "isDiamondStorageFrozen",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_l2BlockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2MessageIndex",
                    type: "uint256"
                }],
                name: "isEthWithdrawalFinalized",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_facet",
                    type: "address"
                }],
                name: "isFacetFreezable",
                outputs: [{
                    internalType: "bool",
                    name: "isFreezable",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes4",
                    name: "_selector",
                    type: "bytes4"
                }],
                name: "isFunctionFreezable",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_address",
                    type: "address"
                }],
                name: "isValidator",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }],
                name: "l2LogsRootHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "hash",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_gasPrice",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2GasLimit",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2GasPerPubdataByteLimit",
                    type: "uint256"
                }],
                name: "l2TransactionBaseCost",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "priorityQueueFrontOperation",
                outputs: [{
                    components: [{
                        internalType: "bytes32",
                        name: "canonicalTxHash",
                        type: "bytes32"
                    }, {
                        internalType: "uint64",
                        name: "expirationTimestamp",
                        type: "uint64"
                    }, {
                        internalType: "uint192",
                        name: "layer2Tip",
                        type: "uint192"
                    }],
                    internalType: "struct PriorityOperation",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "_proposalHash",
                    type: "bytes32"
                }, {
                    internalType: "uint40",
                    name: "_proposalId",
                    type: "uint40"
                }],
                name: "proposeShadowUpgrade",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        components: [{
                            internalType: "address",
                            name: "facet",
                            type: "address"
                        }, {
                            internalType: "enum Diamond.Action",
                            name: "action",
                            type: "uint8"
                        }, {
                            internalType: "bool",
                            name: "isFreezable",
                            type: "bool"
                        }, {
                            internalType: "bytes4[]",
                            name: "selectors",
                            type: "bytes4[]"
                        }],
                        internalType: "struct Diamond.FacetCut[]",
                        name: "facetCuts",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "initAddress",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "initCalldata",
                        type: "bytes"
                    }],
                    internalType: "struct Diamond.DiamondCutData",
                    name: "_diamondCut",
                    type: "tuple"
                }, {
                    internalType: "uint40",
                    name: "_proposalId",
                    type: "uint40"
                }],
                name: "proposeTransparentUpgrade",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "uint64",
                        name: "blockNumber",
                        type: "uint64"
                    }, {
                        internalType: "bytes32",
                        name: "blockHash",
                        type: "bytes32"
                    }, {
                        internalType: "uint64",
                        name: "indexRepeatedStorageChanges",
                        type: "uint64"
                    }, {
                        internalType: "uint256",
                        name: "numberOfLayer1Txs",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "priorityOperationsHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "l2LogsTreeRoot",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "commitment",
                        type: "bytes32"
                    }],
                    internalType: "struct IExecutor.StoredBlockInfo",
                    name: "_prevBlock",
                    type: "tuple"
                }, {
                    components: [{
                        internalType: "uint64",
                        name: "blockNumber",
                        type: "uint64"
                    }, {
                        internalType: "bytes32",
                        name: "blockHash",
                        type: "bytes32"
                    }, {
                        internalType: "uint64",
                        name: "indexRepeatedStorageChanges",
                        type: "uint64"
                    }, {
                        internalType: "uint256",
                        name: "numberOfLayer1Txs",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "priorityOperationsHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "l2LogsTreeRoot",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }, {
                        internalType: "bytes32",
                        name: "commitment",
                        type: "bytes32"
                    }],
                    internalType: "struct IExecutor.StoredBlockInfo[]",
                    name: "_committedBlocks",
                    type: "tuple[]"
                }, {
                    components: [{
                        internalType: "uint256[]",
                        name: "recursiveAggregationInput",
                        type: "uint256[]"
                    }, {
                        internalType: "uint256[]",
                        name: "serializedProof",
                        type: "uint256[]"
                    }],
                    internalType: "struct IExecutor.ProofInput",
                    name: "_proof",
                    type: "tuple"
                }],
                name: "proveBlocks",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "_l2TxHash",
                    type: "bytes32"
                }, {
                    internalType: "uint256",
                    name: "_l2BlockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2MessageIndex",
                    type: "uint256"
                }, {
                    internalType: "uint16",
                    name: "_l2TxNumberInBlock",
                    type: "uint16"
                }, {
                    internalType: "bytes32[]",
                    name: "_merkleProof",
                    type: "bytes32[]"
                }, {
                    internalType: "enum TxStatus",
                    name: "_status",
                    type: "uint8"
                }],
                name: "proveL1ToL2TransactionStatus",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_index",
                    type: "uint256"
                }, {
                    components: [{
                        internalType: "uint8",
                        name: "l2ShardId",
                        type: "uint8"
                    }, {
                        internalType: "bool",
                        name: "isService",
                        type: "bool"
                    }, {
                        internalType: "uint16",
                        name: "txNumberInBlock",
                        type: "uint16"
                    }, {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "key",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "value",
                        type: "bytes32"
                    }],
                    internalType: "struct L2Log",
                    name: "_log",
                    type: "tuple"
                }, {
                    internalType: "bytes32[]",
                    name: "_proof",
                    type: "bytes32[]"
                }],
                name: "proveL2LogInclusion",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_index",
                    type: "uint256"
                }, {
                    components: [{
                        internalType: "uint16",
                        name: "txNumberInBlock",
                        type: "uint16"
                    }, {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    internalType: "struct L2Message",
                    name: "_message",
                    type: "tuple"
                }, {
                    internalType: "bytes32[]",
                    name: "_proof",
                    type: "bytes32[]"
                }],
                name: "proveL2MessageInclusion",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_contractL2",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_l2Value",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "_calldata",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "_l2GasLimit",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_l2GasPerPubdataByteLimit",
                    type: "uint256"
                }, {
                    internalType: "bytes[]",
                    name: "_factoryDeps",
                    type: "bytes[]"
                }, {
                    internalType: "address",
                    name: "_refundRecipient",
                    type: "address"
                }],
                name: "requestL2Transaction",
                outputs: [{
                    internalType: "bytes32",
                    name: "canonicalTxHash",
                    type: "bytes32"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_newLastBlock",
                    type: "uint256"
                }],
                name: "revertBlocks",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "_upgradeProposalHash",
                    type: "bytes32"
                }],
                name: "securityCouncilUpgradeApprove",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "_l2BootloaderBytecodeHash",
                    type: "bytes32"
                }],
                name: "setL2BootloaderBytecodeHash",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "_l2DefaultAccountBytecodeHash",
                    type: "bytes32"
                }],
                name: "setL2DefaultAccountBytecodeHash",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_newPendingGovernor",
                    type: "address"
                }],
                name: "setPendingGovernor",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bool",
                    name: "_zkPorterIsAvailable",
                    type: "bool"
                }],
                name: "setPorterAvailability",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_newPriorityTxMaxGasLimit",
                    type: "uint256"
                }],
                name: "setPriorityTxMaxGasLimit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_validator",
                    type: "address"
                }, {
                    internalType: "bool",
                    name: "_active",
                    type: "bool"
                }],
                name: "setValidator",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract Verifier",
                    name: "_newVerifier",
                    type: "address"
                }],
                name: "setVerifier",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "bytes32",
                        name: "recursionNodeLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionLeafLevelVkHash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "recursionCircuitsSetVksHash",
                        type: "bytes32"
                    }],
                    internalType: "struct VerifierParams",
                    name: "_newVerifierParams",
                    type: "tuple"
                }],
                name: "setVerifierParams",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }],
                name: "storedBlockHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "unfreezeDiamond",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        components: [{
                            internalType: "address",
                            name: "facet",
                            type: "address"
                        }, {
                            internalType: "enum Diamond.Action",
                            name: "action",
                            type: "uint8"
                        }, {
                            internalType: "bool",
                            name: "isFreezable",
                            type: "bool"
                        }, {
                            internalType: "bytes4[]",
                            name: "selectors",
                            type: "bytes4[]"
                        }],
                        internalType: "struct Diamond.FacetCut[]",
                        name: "facetCuts",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "initAddress",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "initCalldata",
                        type: "bytes"
                    }],
                    internalType: "struct Diamond.DiamondCutData",
                    name: "_diamondCut",
                    type: "tuple"
                }, {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256"
                }, {
                    internalType: "bytes32",
                    name: "_salt",
                    type: "bytes32"
                }],
                name: "upgradeProposalHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "pure",
                type: "function"
            }]
        },
        17627: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IEthTokenFactory = t.IAllowListFactory = t.IL2BridgeFactory = t.IL1BridgeFactory = t.IERC20MetadataFactory = t.IZkSyncFactory = void 0;
            var a = n(49049);
            Object.defineProperty(t, "IZkSyncFactory", {
                enumerable: !0,
                get: function() {
                    return a.IZkSyncFactory
                }
            });
            var r = n(86020);
            Object.defineProperty(t, "IERC20MetadataFactory", {
                enumerable: !0,
                get: function() {
                    return r.IERC20MetadataFactory
                }
            });
            var i = n(28966);
            Object.defineProperty(t, "IL1BridgeFactory", {
                enumerable: !0,
                get: function() {
                    return i.IL1BridgeFactory
                }
            });
            var s = n(9738);
            Object.defineProperty(t, "IL2BridgeFactory", {
                enumerable: !0,
                get: function() {
                    return s.IL2BridgeFactory
                }
            });
            var o = n(54577);
            Object.defineProperty(t, "IAllowListFactory", {
                enumerable: !0,
                get: function() {
                    return o.IAllowListFactory
                }
            });
            var u = n(47238);
            Object.defineProperty(t, "IEthTokenFactory", {
                enumerable: !0,
                get: function() {
                    return u.IEthTokenFactory
                }
            })
        },
        74741: function(e) {
            e.exports = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"accountAddress","type":"address"},{"indexed":false,"internalType":"enum IContractDeployer.AccountNonceOrdering","name":"nonceOrdering","type":"uint8"}],"name":"AccountNonceOrderingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"accountAddress","type":"address"},{"indexed":false,"internalType":"enum IContractDeployer.AccountAbstractionVersion","name":"aaVersion","type":"uint8"}],"name":"AccountVersionUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"deployerAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bytecodeHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"contractAddress","type":"address"}],"name":"ContractDeployed","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_salt","type":"bytes32"},{"internalType":"bytes32","name":"_bytecodeHash","type":"bytes32"},{"internalType":"bytes","name":"_input","type":"bytes"}],"name":"create","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_salt","type":"bytes32"},{"internalType":"bytes32","name":"_bytecodeHash","type":"bytes32"},{"internalType":"bytes","name":"_input","type":"bytes"}],"name":"create2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_salt","type":"bytes32"},{"internalType":"bytes32","name":"_bytecodeHash","type":"bytes32"},{"internalType":"bytes","name":"_input","type":"bytes"},{"internalType":"enum IContractDeployer.AccountAbstractionVersion","name":"_aaVersion","type":"uint8"}],"name":"create2Account","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"_bytecodeHash","type":"bytes32"},{"internalType":"bytes","name":"_input","type":"bytes"},{"internalType":"enum IContractDeployer.AccountAbstractionVersion","name":"_aaVersion","type":"uint8"}],"name":"createAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"extendedAccountVersion","outputs":[{"internalType":"enum IContractDeployer.AccountAbstractionVersion","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"bytecodeHash","type":"bytes32"},{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"bool","name":"callConstructor","type":"bool"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"input","type":"bytes"}],"internalType":"struct ContractDeployer.ForceDeployment","name":"_deployment","type":"tuple"},{"internalType":"address","name":"_sender","type":"address"}],"name":"forceDeployOnAddress","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"bytecodeHash","type":"bytes32"},{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"bool","name":"callConstructor","type":"bool"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"input","type":"bytes"}],"internalType":"struct ContractDeployer.ForceDeployment[]","name":"_deployments","type":"tuple[]"}],"name":"forceDeployOnAddresses","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAccountInfo","outputs":[{"components":[{"internalType":"enum IContractDeployer.AccountAbstractionVersion","name":"supportedAAVersion","type":"uint8"},{"internalType":"enum IContractDeployer.AccountNonceOrdering","name":"nonceOrdering","type":"uint8"}],"internalType":"struct IContractDeployer.AccountInfo","name":"info","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_senderNonce","type":"uint256"}],"name":"getNewAddressCreate","outputs":[{"internalType":"address","name":"newAddress","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"bytes32","name":"_bytecodeHash","type":"bytes32"},{"internalType":"bytes32","name":"_salt","type":"bytes32"},{"internalType":"bytes","name":"_input","type":"bytes"}],"name":"getNewAddressCreate2","outputs":[{"internalType":"address","name":"newAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum IContractDeployer.AccountAbstractionVersion","name":"_version","type":"uint8"}],"name":"updateAccountVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum IContractDeployer.AccountNonceOrdering","name":"_nonceOrdering","type":"uint8"}],"name":"updateNonceOrdering","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
        },
        84371: function(e) {
            e.exports = JSON.parse('{"M":[{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"magicValue","type":"bytes4"}],"stateMutability":"view","type":"function"}]}')
        },
        8804: function(e) {
            e.exports = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')
        },
        22281: function(e) {
            e.exports = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"l1Token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ClaimedFailedDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"l1Token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DepositInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"l1Token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawalFinalized","type":"event"},{"inputs":[{"internalType":"address","name":"_depositSender","type":"address"},{"internalType":"address","name":"_l1Token","type":"address"},{"internalType":"bytes32","name":"_l2TxHash","type":"bytes32"},{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"},{"internalType":"uint16","name":"_l2TxNumberInBlock","type":"uint16"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"claimFailedDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_l2Receiver","type":"address"},{"internalType":"address","name":"_l1Token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_l2TxGasLimit","type":"uint256"},{"internalType":"uint256","name":"_l2TxGasPerPubdataByte","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"bytes32","name":"txHash","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"},{"internalType":"uint16","name":"_l2TxNumberInBlock","type":"uint16"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"finalizeWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"}],"name":"isWithdrawalFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_l1Token","type":"address"}],"name":"l2TokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')
        },
        13465: function(e) {
            e.exports = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_sender","type":"address"},{"indexed":true,"internalType":"bytes32","name":"_hash","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"_message","type":"bytes"}],"name":"L1MessageSent","type":"event"},{"inputs":[{"internalType":"bytes","name":"_message","type":"bytes"}],"name":"sendToL1","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"}]}')
        },
        41432: function(e) {
            e.exports = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"l1Sender","type":"address"},{"indexed":true,"internalType":"address","name":"l2Receiver","type":"address"},{"indexed":true,"internalType":"address","name":"l2Token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FinalizeDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"l2Sender","type":"address"},{"indexed":true,"internalType":"address","name":"l1Receiver","type":"address"},{"indexed":true,"internalType":"address","name":"l2Token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawalInitiated","type":"event"},{"inputs":[{"internalType":"address","name":"_l1Sender","type":"address"},{"internalType":"address","name":"_l2Receiver","type":"address"},{"internalType":"address","name":"_l1Token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"finalizeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"l1Bridge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_l2Token","type":"address"}],"name":"l1TokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_l1Token","type":"address"}],"name":"l2TokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_l1Receiver","type":"address"},{"internalType":"address","name":"_l2Token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
        },
        53151: function(e) {
            e.exports = JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_minAllowance","type":"uint256"},{"internalType":"bytes","name":"_innerInput","type":"bytes"}],"name":"approvalBased","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"input","type":"bytes"}],"name":"general","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
        },
        97763: function(e) {
            e.exports = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"commitment","type":"bytes32"}],"name":"BlockCommit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"commitment","type":"bytes32"}],"name":"BlockExecution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalBlocksCommitted","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBlocksVerified","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBlocksExecuted","type":"uint256"}],"name":"BlocksRevert","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousLastVerifiedBlock","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"currentLastVerifiedBlock","type":"uint256"}],"name":"BlocksVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"proposalHash","type":"bytes32"}],"name":"CancelUpgradeProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EthWithdrawalFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"proposalHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"proposalSalt","type":"bytes32"}],"name":"ExecuteUpgrade","type":"event"},{"anonymous":false,"inputs":[],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPorterAvailable","type":"bool"}],"name":"IsPorterAvailableStatusUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"newGovernor","type":"address"}],"name":"NewGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"previousBytecodeHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newBytecodeHash","type":"bytes32"}],"name":"NewL2BootloaderBytecodeHash","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"previousBytecodeHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newBytecodeHash","type":"bytes32"}],"name":"NewL2DefaultAccountBytecodeHash","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldPendingGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"newPendingGovernor","type":"address"}],"name":"NewPendingGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"txId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"expirationTimestamp","type":"uint64"},{"components":[{"internalType":"uint256","name":"txType","type":"uint256"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"uint256","name":"gasPerPubdataByteLimit","type":"uint256"},{"internalType":"uint256","name":"maxFeePerGas","type":"uint256"},{"internalType":"uint256","name":"maxPriorityFeePerGas","type":"uint256"},{"internalType":"uint256","name":"paymaster","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256[4]","name":"reserved","type":"uint256[4]"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256[]","name":"factoryDeps","type":"uint256[]"},{"internalType":"bytes","name":"paymasterInput","type":"bytes"},{"internalType":"bytes","name":"reservedDynamic","type":"bytes"}],"indexed":false,"internalType":"struct IMailbox.L2CanonicalTransaction","name":"transaction","type":"tuple"},{"indexed":false,"internalType":"bytes[]","name":"factoryDeps","type":"bytes[]"}],"name":"NewPriorityRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldPriorityTxMaxGasLimit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPriorityTxMaxGasLimit","type":"uint256"}],"name":"NewPriorityTxMaxGasLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVerifier","type":"address"},{"indexed":true,"internalType":"address","name":"newVerifier","type":"address"}],"name":"NewVerifier","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"recursionNodeLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionLeafLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionCircuitsSetVksHash","type":"bytes32"}],"indexed":false,"internalType":"struct VerifierParams","name":"oldVerifierParams","type":"tuple"},{"components":[{"internalType":"bytes32","name":"recursionNodeLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionLeafLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionCircuitsSetVksHash","type":"bytes32"}],"indexed":false,"internalType":"struct VerifierParams","name":"newVerifierParams","type":"tuple"}],"name":"NewVerifierParams","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"proposalHash","type":"bytes32"}],"name":"ProposeShadowUpgrade","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"address","name":"facet","type":"address"},{"internalType":"enum Diamond.Action","name":"action","type":"uint8"},{"internalType":"bool","name":"isFreezable","type":"bool"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct Diamond.FacetCut[]","name":"facetCuts","type":"tuple[]"},{"internalType":"address","name":"initAddress","type":"address"},{"internalType":"bytes","name":"initCalldata","type":"bytes"}],"indexed":false,"internalType":"struct Diamond.DiamondCutData","name":"diamondCut","type":"tuple"},{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"proposalSalt","type":"bytes32"}],"name":"ProposeTransparentUpgrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"proposalHash","type":"bytes32"}],"name":"SecurityCouncilUpgradeApprove","type":"event"},{"anonymous":false,"inputs":[],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"validatorAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"ValidatorStatusUpdate","type":"event"},{"inputs":[],"name":"acceptGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_proposedUpgradeHash","type":"bytes32"}],"name":"cancelUpgradeProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint64","name":"blockNumber","type":"uint64"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"internalType":"uint64","name":"indexRepeatedStorageChanges","type":"uint64"},{"internalType":"uint256","name":"numberOfLayer1Txs","type":"uint256"},{"internalType":"bytes32","name":"priorityOperationsHash","type":"bytes32"},{"internalType":"bytes32","name":"l2LogsTreeRoot","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bytes32","name":"commitment","type":"bytes32"}],"internalType":"struct IExecutor.StoredBlockInfo","name":"_lastCommittedBlockData","type":"tuple"},{"components":[{"internalType":"uint64","name":"blockNumber","type":"uint64"},{"internalType":"uint64","name":"timestamp","type":"uint64"},{"internalType":"uint64","name":"indexRepeatedStorageChanges","type":"uint64"},{"internalType":"bytes32","name":"newStateRoot","type":"bytes32"},{"internalType":"uint256","name":"numberOfLayer1Txs","type":"uint256"},{"internalType":"bytes32","name":"l2LogsTreeRoot","type":"bytes32"},{"internalType":"bytes32","name":"priorityOperationsHash","type":"bytes32"},{"internalType":"bytes","name":"initialStorageChanges","type":"bytes"},{"internalType":"bytes","name":"repeatedStorageChanges","type":"bytes"},{"internalType":"bytes","name":"l2Logs","type":"bytes"},{"internalType":"bytes[]","name":"l2ArbitraryLengthMessages","type":"bytes[]"},{"internalType":"bytes[]","name":"factoryDeps","type":"bytes[]"}],"internalType":"struct IExecutor.CommitBlockInfo[]","name":"_newBlocksData","type":"tuple[]"}],"name":"commitBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint64","name":"blockNumber","type":"uint64"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"internalType":"uint64","name":"indexRepeatedStorageChanges","type":"uint64"},{"internalType":"uint256","name":"numberOfLayer1Txs","type":"uint256"},{"internalType":"bytes32","name":"priorityOperationsHash","type":"bytes32"},{"internalType":"bytes32","name":"l2LogsTreeRoot","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bytes32","name":"commitment","type":"bytes32"}],"internalType":"struct IExecutor.StoredBlockInfo[]","name":"_blocksData","type":"tuple[]"}],"name":"executeBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"facet","type":"address"},{"internalType":"enum Diamond.Action","name":"action","type":"uint8"},{"internalType":"bool","name":"isFreezable","type":"bool"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct Diamond.FacetCut[]","name":"facetCuts","type":"tuple[]"},{"internalType":"address","name":"initAddress","type":"address"},{"internalType":"bytes","name":"initCalldata","type":"bytes"}],"internalType":"struct Diamond.DiamondCutData","name":"_diamondCut","type":"tuple"},{"internalType":"bytes32","name":"_proposalSalt","type":"bytes32"}],"name":"executeUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_selector","type":"bytes4"}],"name":"facetAddress","outputs":[{"internalType":"address","name":"facet","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facetAddresses","outputs":[{"internalType":"address[]","name":"facets","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_facet","type":"address"}],"name":"facetFunctionSelectors","outputs":[{"internalType":"bytes4[]","name":"","type":"bytes4[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facets","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct IGetters.Facet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"},{"internalType":"uint16","name":"_l2TxNumberInBlock","type":"uint16"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"finalizeEthWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freezeDiamond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCurrentProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFirstUnprocessedPriorityTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGovernor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getL2BootloaderBytecodeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getL2DefaultAccountBytecodeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPendingGovernor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriorityQueueSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProposedUpgradeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProposedUpgradeTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecurityCouncil","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalBlocksCommitted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalBlocksExecuted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalBlocksVerified","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalPriorityTxs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUpgradeProposalState","outputs":[{"internalType":"enum UpgradeState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVerifier","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVerifierParams","outputs":[{"components":[{"internalType":"bytes32","name":"recursionNodeLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionLeafLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionCircuitsSetVksHash","type":"bytes32"}],"internalType":"struct VerifierParams","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getpriorityTxMaxGasLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isApprovedBySecurityCouncil","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isDiamondStorageFrozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"}],"name":"isEthWithdrawalFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_facet","type":"address"}],"name":"isFacetFreezable","outputs":[{"internalType":"bool","name":"isFreezable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_selector","type":"bytes4"}],"name":"isFunctionFreezable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isValidator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"l2LogsRootHash","outputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gasPrice","type":"uint256"},{"internalType":"uint256","name":"_l2GasLimit","type":"uint256"},{"internalType":"uint256","name":"_l2GasPerPubdataByteLimit","type":"uint256"}],"name":"l2TransactionBaseCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priorityQueueFrontOperation","outputs":[{"components":[{"internalType":"bytes32","name":"canonicalTxHash","type":"bytes32"},{"internalType":"uint64","name":"expirationTimestamp","type":"uint64"},{"internalType":"uint192","name":"layer2Tip","type":"uint192"}],"internalType":"struct PriorityOperation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_proposalHash","type":"bytes32"},{"internalType":"uint40","name":"_proposalId","type":"uint40"}],"name":"proposeShadowUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"facet","type":"address"},{"internalType":"enum Diamond.Action","name":"action","type":"uint8"},{"internalType":"bool","name":"isFreezable","type":"bool"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct Diamond.FacetCut[]","name":"facetCuts","type":"tuple[]"},{"internalType":"address","name":"initAddress","type":"address"},{"internalType":"bytes","name":"initCalldata","type":"bytes"}],"internalType":"struct Diamond.DiamondCutData","name":"_diamondCut","type":"tuple"},{"internalType":"uint40","name":"_proposalId","type":"uint40"}],"name":"proposeTransparentUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint64","name":"blockNumber","type":"uint64"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"internalType":"uint64","name":"indexRepeatedStorageChanges","type":"uint64"},{"internalType":"uint256","name":"numberOfLayer1Txs","type":"uint256"},{"internalType":"bytes32","name":"priorityOperationsHash","type":"bytes32"},{"internalType":"bytes32","name":"l2LogsTreeRoot","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bytes32","name":"commitment","type":"bytes32"}],"internalType":"struct IExecutor.StoredBlockInfo","name":"_prevBlock","type":"tuple"},{"components":[{"internalType":"uint64","name":"blockNumber","type":"uint64"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"internalType":"uint64","name":"indexRepeatedStorageChanges","type":"uint64"},{"internalType":"uint256","name":"numberOfLayer1Txs","type":"uint256"},{"internalType":"bytes32","name":"priorityOperationsHash","type":"bytes32"},{"internalType":"bytes32","name":"l2LogsTreeRoot","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bytes32","name":"commitment","type":"bytes32"}],"internalType":"struct IExecutor.StoredBlockInfo[]","name":"_committedBlocks","type":"tuple[]"},{"components":[{"internalType":"uint256[]","name":"recursiveAggregationInput","type":"uint256[]"},{"internalType":"uint256[]","name":"serializedProof","type":"uint256[]"}],"internalType":"struct IExecutor.ProofInput","name":"_proof","type":"tuple"}],"name":"proveBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_l2TxHash","type":"bytes32"},{"internalType":"uint256","name":"_l2BlockNumber","type":"uint256"},{"internalType":"uint256","name":"_l2MessageIndex","type":"uint256"},{"internalType":"uint16","name":"_l2TxNumberInBlock","type":"uint16"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"},{"internalType":"enum TxStatus","name":"_status","type":"uint8"}],"name":"proveL1ToL2TransactionStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"},{"components":[{"internalType":"uint8","name":"l2ShardId","type":"uint8"},{"internalType":"bool","name":"isService","type":"bool"},{"internalType":"uint16","name":"txNumberInBlock","type":"uint16"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32","name":"value","type":"bytes32"}],"internalType":"struct L2Log","name":"_log","type":"tuple"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"proveL2LogInclusion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"},{"components":[{"internalType":"uint16","name":"txNumberInBlock","type":"uint16"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct L2Message","name":"_message","type":"tuple"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"proveL2MessageInclusion","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractL2","type":"address"},{"internalType":"uint256","name":"_l2Value","type":"uint256"},{"internalType":"bytes","name":"_calldata","type":"bytes"},{"internalType":"uint256","name":"_l2GasLimit","type":"uint256"},{"internalType":"uint256","name":"_l2GasPerPubdataByteLimit","type":"uint256"},{"internalType":"bytes[]","name":"_factoryDeps","type":"bytes[]"},{"internalType":"address","name":"_refundRecipient","type":"address"}],"name":"requestL2Transaction","outputs":[{"internalType":"bytes32","name":"canonicalTxHash","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLastBlock","type":"uint256"}],"name":"revertBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_upgradeProposalHash","type":"bytes32"}],"name":"securityCouncilUpgradeApprove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_l2BootloaderBytecodeHash","type":"bytes32"}],"name":"setL2BootloaderBytecodeHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_l2DefaultAccountBytecodeHash","type":"bytes32"}],"name":"setL2DefaultAccountBytecodeHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPendingGovernor","type":"address"}],"name":"setPendingGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_zkPorterIsAvailable","type":"bool"}],"name":"setPorterAvailability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPriorityTxMaxGasLimit","type":"uint256"}],"name":"setPriorityTxMaxGasLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_validator","type":"address"},{"internalType":"bool","name":"_active","type":"bool"}],"name":"setValidator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Verifier","name":"_newVerifier","type":"address"}],"name":"setVerifier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"recursionNodeLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionLeafLevelVkHash","type":"bytes32"},{"internalType":"bytes32","name":"recursionCircuitsSetVksHash","type":"bytes32"}],"internalType":"struct VerifierParams","name":"_newVerifierParams","type":"tuple"}],"name":"setVerifierParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"storedBlockHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unfreezeDiamond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"facet","type":"address"},{"internalType":"enum Diamond.Action","name":"action","type":"uint8"},{"internalType":"bool","name":"isFreezable","type":"bool"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct Diamond.FacetCut[]","name":"facetCuts","type":"tuple[]"},{"internalType":"address","name":"initAddress","type":"address"},{"internalType":"bytes","name":"initCalldata","type":"bytes"}],"internalType":"struct Diamond.DiamondCutData","name":"_diamondCut","type":"tuple"},{"internalType":"uint256","name":"_proposalId","type":"uint256"},{"internalType":"bytes32","name":"_salt","type":"bytes32"}],"name":"upgradeProposalHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"}]}')
        }
    }
]);