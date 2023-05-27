(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [961], {
        19824: function(t, e) {
            "use strict";
            const r = "undefined" !== typeof BigUint64Array,
                n = Symbol(),
                o = 1024;

            function i(t, e) {
                const r = new Uint32Array(t),
                    n = new Uint16Array(t);
                var i = r[e + -4 >>> 2] >>> 1,
                    s = e >>> 1;
                if (i <= o) return String.fromCharCode.apply(String, n.subarray(s, s + i));
                const a = [];
                do {
                    const t = n[s + o - 1],
                        e = t >= 55296 && t < 56320 ? 1023 : o;
                    a.push(String.fromCharCode.apply(String, n.subarray(s, s += e))), i -= e
                } while (i > o);
                return a.join("") + String.fromCharCode.apply(String, n.subarray(s, s + i))
            }

            function s(t) {
                const e = {};

                function r(t, e) {
                    return t ? i(t.buffer, e) : "<yet unknown>"
                }
                const n = t.env = t.env || {};
                return n.abort = n.abort || function(t, o, i, s) {
                    const a = e.memory || n.memory;
                    throw Error("abort: " + r(a, t) + " at " + r(a, o) + ":" + i + ":" + s)
                }, n.trace = n.trace || function(t, o) {
                    const i = e.memory || n.memory;
                    console.log("trace: " + r(i, t) + (o ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + o).join(", "))
                }, t.Math = t.Math || Math, t.Date = t.Date || Date, e
            }

            function a(t, e) {
                const n = e.exports,
                    o = n.memory,
                    s = n.table,
                    a = n.__alloc,
                    c = n.__retain,
                    u = n.__rtti_base || -1;

                function f(t) {
                    const e = new Uint32Array(o.buffer);
                    if ((t >>>= 0) >= e[u >>> 2]) throw Error("invalid id: " + t);
                    return e[(u + 4 >>> 2) + 2 * t]
                }

                function h(t) {
                    const e = new Uint32Array(o.buffer);
                    if ((t >>>= 0) >= e[u >>> 2]) throw Error("invalid id: " + t);
                    return e[(u + 4 >>> 2) + 2 * t + 1]
                }

                function d(t) {
                    return 31 - Math.clz32(t >>> 5 & 31)
                }

                function p(t, e, r) {
                    const n = o.buffer;
                    if (r) switch (t) {
                        case 2:
                            return new Float32Array(n);
                        case 3:
                            return new Float64Array(n)
                    } else switch (t) {
                        case 0:
                            return new(e ? Int8Array : Uint8Array)(n);
                        case 1:
                            return new(e ? Int16Array : Uint16Array)(n);
                        case 2:
                            return new(e ? Int32Array : Uint32Array)(n);
                        case 3:
                            return new(e ? BigInt64Array : BigUint64Array)(n)
                    }
                    throw Error("unsupported align: " + t)
                }

                function y(t) {
                    const e = new Uint32Array(o.buffer),
                        r = e[t + -8 >>> 2],
                        n = f(r);
                    if (!(1 & n)) throw Error("not an array: " + r);
                    const i = d(n);
                    var s = e[t + 4 >>> 2];
                    const a = 2 & n ? e[t + 12 >>> 2] : e[s + -4 >>> 2] >>> i;
                    return p(i, 1024 & n, 2048 & n).subarray(s >>>= i, s + a)
                }

                function w(t, e, r) {
                    return new t(g(t, e, r))
                }

                function g(t, e, r) {
                    const n = o.buffer,
                        i = new Uint32Array(n),
                        s = i[r + 4 >>> 2];
                    return new t(n, s, i[s + -4 >>> 2] >>> e)
                }
                return t.__allocString = function(t) {
                    const e = t.length,
                        r = a(e << 1, 1),
                        n = new Uint16Array(o.buffer);
                    for (var i = 0, s = r >>> 1; i < e; ++i) n[s + i] = t.charCodeAt(i);
                    return r
                }, t.__getString = function(t) {
                    const e = o.buffer;
                    if (1 !== new Uint32Array(e)[t + -8 >>> 2]) throw Error("not a string: " + t);
                    return i(e, t)
                }, t.__allocArray = function(t, e) {
                    const r = f(t);
                    if (!(3 & r)) throw Error("not an array: " + t + " @ " + r);
                    const n = d(r),
                        i = e.length,
                        s = a(i << n, 0),
                        u = a(2 & r ? 16 : 12, t),
                        l = new Uint32Array(o.buffer);
                    l[u + 0 >>> 2] = c(s), l[u + 4 >>> 2] = s, l[u + 8 >>> 2] = i << n, 2 & r && (l[u + 12 >>> 2] = i);
                    const h = p(n, 1024 & r, 2048 & r);
                    if (8192 & r)
                        for (let o = 0; o < i; ++o) h[(s >>> n) + o] = c(e[o]);
                    else h.set(e, s >>> n);
                    return u
                }, t.__getArrayView = y, t.__getArray = function(t) {
                    const e = y(t),
                        r = e.length,
                        n = new Array(r);
                    for (let o = 0; o < r; o++) n[o] = e[o];
                    return n
                }, t.__getArrayBuffer = function(t) {
                    const e = o.buffer,
                        r = new Uint32Array(e)[t + -4 >>> 2];
                    return e.slice(t, t + r)
                }, t.__getInt8Array = w.bind(null, Int8Array, 0), t.__getInt8ArrayView = g.bind(null, Int8Array, 0), t.__getUint8Array = w.bind(null, Uint8Array, 0), t.__getUint8ArrayView = g.bind(null, Uint8Array, 0), t.__getUint8ClampedArray = w.bind(null, Uint8ClampedArray, 0), t.__getUint8ClampedArrayView = g.bind(null, Uint8ClampedArray, 0), t.__getInt16Array = w.bind(null, Int16Array, 1), t.__getInt16ArrayView = g.bind(null, Int16Array, 1), t.__getUint16Array = w.bind(null, Uint16Array, 1), t.__getUint16ArrayView = g.bind(null, Uint16Array, 1), t.__getInt32Array = w.bind(null, Int32Array, 2), t.__getInt32ArrayView = g.bind(null, Int32Array, 2), t.__getUint32Array = w.bind(null, Uint32Array, 2), t.__getUint32ArrayView = g.bind(null, Uint32Array, 2), r && (t.__getInt64Array = w.bind(null, BigInt64Array, 3), t.__getInt64ArrayView = g.bind(null, BigInt64Array, 3), t.__getUint64Array = w.bind(null, BigUint64Array, 3), t.__getUint64ArrayView = g.bind(null, BigUint64Array, 3)), t.__getFloat32Array = w.bind(null, Float32Array, 2), t.__getFloat32ArrayView = g.bind(null, Float32Array, 2), t.__getFloat64Array = w.bind(null, Float64Array, 3), t.__getFloat64ArrayView = g.bind(null, Float64Array, 3), t.__instanceof = function(t, e) {
                    const r = new Uint32Array(o.buffer);
                    var n = r[t + -8 >>> 2];
                    if (n <= r[u >>> 2])
                        do {
                            if (n == e) return !0
                        } while (n = h(n));
                    return !1
                }, t.memory = t.memory || o, t.table = t.table || s, l(n, t)
            }

            function c(t) {
                return "undefined" !== typeof Response && t instanceof Response
            }
            async function u(t, e) {
                return c(t = await t) ? f(t, e) : a(s(e || (e = {})), await WebAssembly.instantiate(t instanceof WebAssembly.Module ? t : await WebAssembly.compile(t), e))
            }
            async function f(t, e) {
                return WebAssembly.instantiateStreaming ? a(s(e || (e = {})), (await WebAssembly.instantiateStreaming(t, e)).instance) : u(c(t = await t) ? t.arrayBuffer() : t, e)
            }

            function l(t, e) {
                var r = e ? Object.create(e) : {},
                    o = t.__argumentsLength ? function(e) {
                        t.__argumentsLength.value = e
                    } : t.__setArgumentsLength || t.__setargc || function() {};
                for (let i in t) {
                    if (!Object.prototype.hasOwnProperty.call(t, i)) continue;
                    const e = t[i];
                    let s = i.split("."),
                        a = r;
                    for (; s.length > 1;) {
                        let t = s.shift();
                        Object.prototype.hasOwnProperty.call(a, t) || (a[t] = {}), a = a[t]
                    }
                    let c = s[0],
                        u = c.indexOf("#");
                    if (u >= 0) {
                        let r = c.substring(0, u),
                            s = a[r];
                        if ("undefined" === typeof s || !s.prototype) {
                            let t = function(...e) {
                                return t.wrap(t.prototype.constructor(0, ...e))
                            };
                            t.prototype = {
                                valueOf: function() {
                                    return this[n]
                                }
                            }, t.wrap = function(e) {
                                return Object.create(t.prototype, {
                                    [n]: {
                                        value: e,
                                        writable: !1
                                    }
                                })
                            }, s && Object.getOwnPropertyNames(s).forEach((e => Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e)))), a[r] = t
                        }
                        if (c = c.substring(u + 1), a = a[r].prototype, /^(get|set):/.test(c)) {
                            if (!Object.prototype.hasOwnProperty.call(a, c = c.substring(4))) {
                                let e = t[i.replace("set:", "get:")],
                                    r = t[i.replace("get:", "set:")];
                                Object.defineProperty(a, c, {
                                    get: function() {
                                        return e(this[n])
                                    },
                                    set: function(t) {
                                        r(this[n], t)
                                    },
                                    enumerable: !0
                                })
                            }
                        } else "constructor" === c ? (a[c] = (...t) => (o(t.length), e(...t))).original = e : (a[c] = function(...t) {
                            return o(t.length), e(this[n], ...t)
                        }).original = e
                    } else /^(get|set):/.test(c) ? Object.prototype.hasOwnProperty.call(a, c = c.substring(4)) || Object.defineProperty(a, c, {
                        get: t[i.replace("set:", "get:")],
                        set: t[i.replace("get:", "set:")],
                        enumerable: !0
                    }) : "function" === typeof e && e !== o ? (a[c] = (...t) => (o(t.length), e(...t))).original = e : a[c] = e
                }
                return r
            }
            e.instantiate = u, e.instantiateSync = function(t, e) {
                return a(s(e || (e = {})), new WebAssembly.Instance(t instanceof WebAssembly.Module ? t : new WebAssembly.Module(t), e))
            }, e.instantiateStreaming = f, e.demangle = l
        },
        66242: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return w
                }
            });
            var n = r(87462),
                o = r(63366),
                i = r(67294),
                s = r(86010),
                a = r(27192),
                c = r(11496),
                u = r(71657),
                f = r(55113),
                l = r(28979);

            function h(t) {
                return (0, l.Z)("MuiCard", t)
            }(0, r(76087).Z)("MuiCard", ["root"]);
            var d = r(85893);
            const p = ["className", "raised"],
                y = (0, c.ZP)(f.Z, {
                    name: "MuiCard",
                    slot: "Root",
                    overridesResolver: (t, e) => e.root
                })((() => ({
                    overflow: "hidden"
                })));
            var w = i.forwardRef((function(t, e) {
                const r = (0, u.Z)({
                        props: t,
                        name: "MuiCard"
                    }),
                    {
                        className: i,
                        raised: c = !1
                    } = r,
                    f = (0, o.Z)(r, p),
                    l = (0, n.Z)({}, r, {
                        raised: c
                    }),
                    w = (t => {
                        const {
                            classes: e
                        } = t;
                        return (0, a.Z)({
                            root: ["root"]
                        }, h, e)
                    })(l);
                return (0, d.jsx)(y, (0, n.Z)({
                    className: (0, s.Z)(w.root, i),
                    elevation: c ? 8 : void 0,
                    ref: e,
                    ownerState: l
                }, f))
            }))
        },
        34537: function(t) {
            "use strict";
            t.exports = function(t, e) {
                var r = new Array(arguments.length - 1),
                    n = 0,
                    o = 2,
                    i = !0;
                for (; o < arguments.length;) r[n++] = arguments[o++];
                return new Promise((function(o, s) {
                    r[n] = function(t) {
                        if (i)
                            if (i = !1, t) s(t);
                            else {
                                for (var e = new Array(arguments.length - 1), r = 0; r < e.length;) e[r++] = arguments[r];
                                o.apply(null, e)
                            }
                    };
                    try {
                        t.apply(e || null, r)
                    } catch (a) {
                        i && (i = !1, s(a))
                    }
                }))
            }
        },
        97419: function(t, e) {
            "use strict";
            var r = e;
            r.length = function(t) {
                var e = t.length;
                if (!e) return 0;
                for (var r = 0; --e % 4 > 1 && "=" === t.charAt(e);) ++r;
                return Math.ceil(3 * t.length) / 4 - r
            };
            for (var n = new Array(64), o = new Array(123), i = 0; i < 64;) o[n[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
            r.encode = function(t, e, r) {
                for (var o, i = null, s = [], a = 0, c = 0; e < r;) {
                    var u = t[e++];
                    switch (c) {
                        case 0:
                            s[a++] = n[u >> 2], o = (3 & u) << 4, c = 1;
                            break;
                        case 1:
                            s[a++] = n[o | u >> 4], o = (15 & u) << 2, c = 2;
                            break;
                        case 2:
                            s[a++] = n[o | u >> 6], s[a++] = n[63 & u], c = 0
                    }
                    a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, s)), a = 0)
                }
                return c && (s[a++] = n[o], s[a++] = 61, 1 === c && (s[a++] = 61)), i ? (a && i.push(String.fromCharCode.apply(String, s.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
            };
            var s = "invalid encoding";
            r.decode = function(t, e, r) {
                for (var n, i = r, a = 0, c = 0; c < t.length;) {
                    var u = t.charCodeAt(c++);
                    if (61 === u && a > 1) break;
                    if (void 0 === (u = o[u])) throw Error(s);
                    switch (a) {
                        case 0:
                            n = u, a = 1;
                            break;
                        case 1:
                            e[r++] = n << 2 | (48 & u) >> 4, n = u, a = 2;
                            break;
                        case 2:
                            e[r++] = (15 & n) << 4 | (60 & u) >> 2, n = u, a = 3;
                            break;
                        case 3:
                            e[r++] = (3 & n) << 6 | u, a = 0
                    }
                }
                if (1 === a) throw Error(s);
                return r - i
            }, r.test = function(t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
        },
        19211: function(t) {
            "use strict";

            function e() {
                this._listeners = {}
            }
            t.exports = e, e.prototype.on = function(t, e, r) {
                return (this._listeners[t] || (this._listeners[t] = [])).push({
                    fn: e,
                    ctx: r || this
                }), this
            }, e.prototype.off = function(t, e) {
                if (void 0 === t) this._listeners = {};
                else if (void 0 === e) this._listeners[t] = [];
                else
                    for (var r = this._listeners[t], n = 0; n < r.length;) r[n].fn === e ? r.splice(n, 1) : ++n;
                return this
            }, e.prototype.emit = function(t) {
                var e = this._listeners[t];
                if (e) {
                    for (var r = [], n = 1; n < arguments.length;) r.push(arguments[n++]);
                    for (n = 0; n < e.length;) e[n].fn.apply(e[n++].ctx, r)
                }
                return this
            }
        },
        10945: function(t) {
            "use strict";

            function e(t) {
                return "undefined" !== typeof Float32Array ? function() {
                    var e = new Float32Array([-0]),
                        r = new Uint8Array(e.buffer),
                        n = 128 === r[3];

                    function o(t, n, o) {
                        e[0] = t, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3]
                    }

                    function i(t, n, o) {
                        e[0] = t, n[o] = r[3], n[o + 1] = r[2], n[o + 2] = r[1], n[o + 3] = r[0]
                    }

                    function s(t, n) {
                        return r[0] = t[n], r[1] = t[n + 1], r[2] = t[n + 2], r[3] = t[n + 3], e[0]
                    }

                    function a(t, n) {
                        return r[3] = t[n], r[2] = t[n + 1], r[1] = t[n + 2], r[0] = t[n + 3], e[0]
                    }
                    t.writeFloatLE = n ? o : i, t.writeFloatBE = n ? i : o, t.readFloatLE = n ? s : a, t.readFloatBE = n ? a : s
                }() : function() {
                    function e(t, e, r, n) {
                        var o = e < 0 ? 1 : 0;
                        if (o && (e = -e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, r, n);
                        else if (isNaN(e)) t(2143289344, r, n);
                        else if (e > 34028234663852886e22) t((o << 31 | 2139095040) >>> 0, r, n);
                        else if (e < 11754943508222875e-54) t((o << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, r, n);
                        else {
                            var i = Math.floor(Math.log(e) / Math.LN2);
                            t((o << 31 | i + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -i) * 8388608)) >>> 0, r, n)
                        }
                    }

                    function s(t, e, r) {
                        var n = t(e, r),
                            o = 2 * (n >> 31) + 1,
                            i = n >>> 23 & 255,
                            s = 8388607 & n;
                        return 255 === i ? s ? NaN : o * (1 / 0) : 0 === i ? 1401298464324817e-60 * o * s : o * Math.pow(2, i - 150) * (s + 8388608)
                    }
                    t.writeFloatLE = e.bind(null, r), t.writeFloatBE = e.bind(null, n), t.readFloatLE = s.bind(null, o), t.readFloatBE = s.bind(null, i)
                }(), "undefined" !== typeof Float64Array ? function() {
                    var e = new Float64Array([-0]),
                        r = new Uint8Array(e.buffer),
                        n = 128 === r[7];

                    function o(t, n, o) {
                        e[0] = t, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3], n[o + 4] = r[4], n[o + 5] = r[5], n[o + 6] = r[6], n[o + 7] = r[7]
                    }

                    function i(t, n, o) {
                        e[0] = t, n[o] = r[7], n[o + 1] = r[6], n[o + 2] = r[5], n[o + 3] = r[4], n[o + 4] = r[3], n[o + 5] = r[2], n[o + 6] = r[1], n[o + 7] = r[0]
                    }

                    function s(t, n) {
                        return r[0] = t[n], r[1] = t[n + 1], r[2] = t[n + 2], r[3] = t[n + 3], r[4] = t[n + 4], r[5] = t[n + 5], r[6] = t[n + 6], r[7] = t[n + 7], e[0]
                    }

                    function a(t, n) {
                        return r[7] = t[n], r[6] = t[n + 1], r[5] = t[n + 2], r[4] = t[n + 3], r[3] = t[n + 4], r[2] = t[n + 5], r[1] = t[n + 6], r[0] = t[n + 7], e[0]
                    }
                    t.writeDoubleLE = n ? o : i, t.writeDoubleBE = n ? i : o, t.readDoubleLE = n ? s : a, t.readDoubleBE = n ? a : s
                }() : function() {
                    function e(t, e, r, n, o, i) {
                        var s = n < 0 ? 1 : 0;
                        if (s && (n = -n), 0 === n) t(0, o, i + e), t(1 / n > 0 ? 0 : 2147483648, o, i + r);
                        else if (isNaN(n)) t(0, o, i + e), t(2146959360, o, i + r);
                        else if (n > 17976931348623157e292) t(0, o, i + e), t((s << 31 | 2146435072) >>> 0, o, i + r);
                        else {
                            var a;
                            if (n < 22250738585072014e-324) t((a = n / 5e-324) >>> 0, o, i + e), t((s << 31 | a / 4294967296) >>> 0, o, i + r);
                            else {
                                var c = Math.floor(Math.log(n) / Math.LN2);
                                1024 === c && (c = 1023), t(4503599627370496 * (a = n * Math.pow(2, -c)) >>> 0, o, i + e), t((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, i + r)
                            }
                        }
                    }

                    function s(t, e, r, n, o) {
                        var i = t(n, o + e),
                            s = t(n, o + r),
                            a = 2 * (s >> 31) + 1,
                            c = s >>> 20 & 2047,
                            u = 4294967296 * (1048575 & s) + i;
                        return 2047 === c ? u ? NaN : a * (1 / 0) : 0 === c ? 5e-324 * a * u : a * Math.pow(2, c - 1075) * (u + 4503599627370496)
                    }
                    t.writeDoubleLE = e.bind(null, r, 0, 4), t.writeDoubleBE = e.bind(null, n, 4, 0), t.readDoubleLE = s.bind(null, o, 0, 4), t.readDoubleBE = s.bind(null, i, 4, 0)
                }(), t
            }

            function r(t, e, r) {
                e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24
            }

            function n(t, e, r) {
                e[r] = t >>> 24, e[r + 1] = t >>> 16 & 255, e[r + 2] = t >>> 8 & 255, e[r + 3] = 255 & t
            }

            function o(t, e) {
                return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
            }

            function i(t, e) {
                return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
            }
            t.exports = e(e)
        },
        67199: function(module) {
            "use strict";

            function inquire(moduleName) {
                try {
                    var mod = eval("quire".replace(/^/, "re"))(moduleName);
                    if (mod && (mod.length || Object.keys(mod).length)) return mod
                } catch (e) {}
                return null
            }
            module.exports = inquire
        },
        76662: function(t) {
            "use strict";
            t.exports = function(t, e, r) {
                var n = r || 8192,
                    o = n >>> 1,
                    i = null,
                    s = n;
                return function(r) {
                    if (r < 1 || r > o) return t(r);
                    s + r > n && (i = t(n), s = 0);
                    var a = e.call(i, s, s += r);
                    return 7 & s && (s = 1 + (7 | s)), a
                }
            }
        },
        94997: function(t, e) {
            "use strict";
            var r = e;
            r.length = function(t) {
                for (var e = 0, r = 0, n = 0; n < t.length; ++n)(r = t.charCodeAt(n)) < 128 ? e += 1 : r < 2048 ? e += 2 : 55296 === (64512 & r) && 56320 === (64512 & t.charCodeAt(n + 1)) ? (++n, e += 4) : e += 3;
                return e
            }, r.read = function(t, e, r) {
                if (r - e < 1) return "";
                for (var n, o = null, i = [], s = 0; e < r;)(n = t[e++]) < 128 ? i[s++] = n : n > 191 && n < 224 ? i[s++] = (31 & n) << 6 | 63 & t[e++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, i[s++] = 55296 + (n >> 10), i[s++] = 56320 + (1023 & n)) : i[s++] = (15 & n) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), s = 0);
                return o ? (s && o.push(String.fromCharCode.apply(String, i.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, s))
            }, r.write = function(t, e, r) {
                for (var n, o, i = r, s = 0; s < t.length; ++s)(n = t.charCodeAt(s)) < 128 ? e[r++] = n : n < 2048 ? (e[r++] = n >> 6 | 192, e[r++] = 63 & n | 128) : 55296 === (64512 & n) && 56320 === (64512 & (o = t.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & o), ++s, e[r++] = n >> 18 | 240, e[r++] = n >> 12 & 63 | 128, e[r++] = n >> 6 & 63 | 128, e[r++] = 63 & n | 128) : (e[r++] = n >> 12 | 224, e[r++] = n >> 6 & 63 | 128, e[r++] = 63 & n | 128);
                return r - i
            }
        },
        9668: function(t, e, r) {
            "use strict";
            const {
                Buffer: n
            } = r(48764), o = Symbol.for("BufferList");

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                i._init.call(this, t)
            }
            i._init = function(t) {
                    Object.defineProperty(this, o, {
                        value: !0
                    }), this._bufs = [], this.length = 0, t && this.append(t)
                }, i.prototype._new = function(t) {
                    return new i(t)
                }, i.prototype._offset = function(t) {
                    if (0 === t) return [0, 0];
                    let e = 0;
                    for (let r = 0; r < this._bufs.length; r++) {
                        const n = e + this._bufs[r].length;
                        if (t < n || r === this._bufs.length - 1) return [r, t - e];
                        e = n
                    }
                }, i.prototype._reverseOffset = function(t) {
                    const e = t[0];
                    let r = t[1];
                    for (let n = 0; n < e; n++) r += this._bufs[n].length;
                    return r
                }, i.prototype.get = function(t) {
                    if (t > this.length || t < 0) return;
                    const e = this._offset(t);
                    return this._bufs[e[0]][e[1]]
                }, i.prototype.slice = function(t, e) {
                    return "number" === typeof t && t < 0 && (t += this.length), "number" === typeof e && e < 0 && (e += this.length), this.copy(null, 0, t, e)
                }, i.prototype.copy = function(t, e, r, o) {
                    if (("number" !== typeof r || r < 0) && (r = 0), ("number" !== typeof o || o > this.length) && (o = this.length), r >= this.length) return t || n.alloc(0);
                    if (o <= 0) return t || n.alloc(0);
                    const i = !!t,
                        s = this._offset(r),
                        a = o - r;
                    let c = a,
                        u = i && e || 0,
                        f = s[1];
                    if (0 === r && o === this.length) {
                        if (!i) return 1 === this._bufs.length ? this._bufs[0] : n.concat(this._bufs, this.length);
                        for (let e = 0; e < this._bufs.length; e++) this._bufs[e].copy(t, u), u += this._bufs[e].length;
                        return t
                    }
                    if (c <= this._bufs[s[0]].length - f) return i ? this._bufs[s[0]].copy(t, e, f, f + c) : this._bufs[s[0]].slice(f, f + c);
                    i || (t = n.allocUnsafe(a));
                    for (let n = s[0]; n < this._bufs.length; n++) {
                        const e = this._bufs[n].length - f;
                        if (!(c > e)) {
                            this._bufs[n].copy(t, u, f, f + c), u += e;
                            break
                        }
                        this._bufs[n].copy(t, u, f), u += e, c -= e, f && (f = 0)
                    }
                    return t.length > u ? t.slice(0, u) : t
                }, i.prototype.shallowSlice = function(t, e) {
                    if (t = t || 0, e = "number" !== typeof e ? this.length : e, t < 0 && (t += this.length), e < 0 && (e += this.length), t === e) return this._new();
                    const r = this._offset(t),
                        n = this._offset(e),
                        o = this._bufs.slice(r[0], n[0] + 1);
                    return 0 === n[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, n[1]), 0 !== r[1] && (o[0] = o[0].slice(r[1])), this._new(o)
                }, i.prototype.toString = function(t, e, r) {
                    return this.slice(e, r).toString(t)
                }, i.prototype.consume = function(t) {
                    if (t = Math.trunc(t), Number.isNaN(t) || t <= 0) return this;
                    for (; this._bufs.length;) {
                        if (!(t >= this._bufs[0].length)) {
                            this._bufs[0] = this._bufs[0].slice(t), this.length -= t;
                            break
                        }
                        t -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                    }
                    return this
                }, i.prototype.duplicate = function() {
                    const t = this._new();
                    for (let e = 0; e < this._bufs.length; e++) t.append(this._bufs[e]);
                    return t
                }, i.prototype.append = function(t) {
                    if (null == t) return this;
                    if (t.buffer) this._appendBuffer(n.from(t.buffer, t.byteOffset, t.byteLength));
                    else if (Array.isArray(t))
                        for (let e = 0; e < t.length; e++) this.append(t[e]);
                    else if (this._isBufferList(t))
                        for (let e = 0; e < t._bufs.length; e++) this.append(t._bufs[e]);
                    else "number" === typeof t && (t = t.toString()), this._appendBuffer(n.from(t));
                    return this
                }, i.prototype._appendBuffer = function(t) {
                    this._bufs.push(t), this.length += t.length
                }, i.prototype.indexOf = function(t, e, r) {
                    if (void 0 === r && "string" === typeof e && (r = e, e = void 0), "function" === typeof t || Array.isArray(t)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
                    if ("number" === typeof t ? t = n.from([t]) : "string" === typeof t ? t = n.from(t, r) : this._isBufferList(t) ? t = t.slice() : Array.isArray(t.buffer) ? t = n.from(t.buffer, t.byteOffset, t.byteLength) : n.isBuffer(t) || (t = n.from(t)), e = Number(e || 0), isNaN(e) && (e = 0), e < 0 && (e = this.length + e), e < 0 && (e = 0), 0 === t.length) return e > this.length ? this.length : e;
                    const o = this._offset(e);
                    let i = o[0],
                        s = o[1];
                    for (; i < this._bufs.length; i++) {
                        const e = this._bufs[i];
                        for (; s < e.length;) {
                            if (e.length - s >= t.length) {
                                const r = e.indexOf(t, s);
                                if (-1 !== r) return this._reverseOffset([i, r]);
                                s = e.length - t.length + 1
                            } else {
                                const e = this._reverseOffset([i, s]);
                                if (this._match(e, t)) return e;
                                s++
                            }
                        }
                        s = 0
                    }
                    return -1
                }, i.prototype._match = function(t, e) {
                    if (this.length - t < e.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (this.get(t + r) !== e[r]) return !1;
                    return !0
                },
                function() {
                    const t = {
                        readDoubleBE: 8,
                        readDoubleLE: 8,
                        readFloatBE: 4,
                        readFloatLE: 4,
                        readInt32BE: 4,
                        readInt32LE: 4,
                        readUInt32BE: 4,
                        readUInt32LE: 4,
                        readInt16BE: 2,
                        readInt16LE: 2,
                        readUInt16BE: 2,
                        readUInt16LE: 2,
                        readInt8: 1,
                        readUInt8: 1,
                        readIntBE: null,
                        readIntLE: null,
                        readUIntBE: null,
                        readUIntLE: null
                    };
                    for (const e in t) ! function(e) {
                        i.prototype[e] = null === t[e] ? function(t, r) {
                            return this.slice(t, t + r)[e](0, r)
                        } : function(r = 0) {
                            return this.slice(r, r + t[e])[e](0)
                        }
                    }(e)
                }(), i.prototype._isBufferList = function(t) {
                    return t instanceof i || i.isBufferList(t)
                }, i.isBufferList = function(t) {
                    return null != t && t[o]
                }, t.exports = i
        },
        23294: function(t, e, r) {
            "use strict";
            const n = r(86154);
            t.exports = function(t) {
                return "function" === typeof t.stream ? n(t.stream()) : n(new Response(t).body)
            }
        },
        86154: function(t) {
            "use strict";
            t.exports = async function*(t, e = {}) {
                const r = t.getReader();
                try {
                    for (;;) {
                        const t = await r.read();
                        if (t.done) return;
                        yield t.value
                    }
                } finally {
                    !0 !== e.preventCancel && r.cancel(), r.releaseLock()
                }
            }
        },
        32114: function(t) {
            "use strict";

            function e(t, e) {
                for (const r in e) Object.defineProperty(t, r, {
                    value: e[r],
                    enumerable: !0,
                    configurable: !0
                });
                return t
            }
            t.exports = function(t, r, n) {
                if (!t || "string" === typeof t) throw new TypeError("Please pass an Error to err-code");
                n || (n = {}), "object" === typeof r && (n = r, r = ""), r && (n.code = r);
                try {
                    return e(t, n)
                } catch (o) {
                    n.message = t.message, n.stack = t.stack;
                    const r = function() {};
                    r.prototype = Object.create(Object.getPrototypeOf(t));
                    return e(new r, n)
                }
            }
        },
        30043: function(t, e, r) {
            "use strict";
            const n = r(20544),
                {
                    fromString: o
                } = r(68855);
            class i {
                constructor(t, e, r = 0) {
                    this._options = t, this._popCount = 0, this._parent = e, this._posAtParent = r, this._children = new n, this.key = null
                }
                async put(t, e) {
                    const r = await this._findNewBucketAndPos(t);
                    await r.bucket._putAt(r, t, e)
                }
                async get(t) {
                    const e = await this._findChild(t);
                    if (e) return e.value
                }
                async del(t) {
                    const e = await this._findPlace(t),
                        r = e.bucket._at(e.pos);
                    r && r.key === t && e.bucket._delAt(e.pos)
                }
                leafCount() {
                    return this._children.compactArray().reduce(((t, e) => e instanceof i ? t + e.leafCount() : t + 1), 0)
                }
                childrenCount() {
                    return this._children.length
                }
                onlyChild() {
                    return this._children.get(0)
                }* eachLeafSeries() {
                    const t = this._children.compactArray();
                    for (const e of t) e instanceof i ? yield* e.eachLeafSeries(): yield e;
                    return []
                }
                serialize(t, e) {
                    return e(this._children.reduce(((r, n, o) => (n && (n instanceof i ? r.push(n.serialize(t, e)) : r.push(t(n, o))), r)), []))
                }
                asyncTransform(t, e) {
                    return u(this, t, e)
                }
                toJSON() {
                    return this.serialize(a, c)
                }
                prettyPrint() {
                    return JSON.stringify(this.toJSON(), null, "  ")
                }
                tableSize() {
                    return Math.pow(2, this._options.bits)
                }
                async _findChild(t) {
                    const e = await this._findPlace(t),
                        r = e.bucket._at(e.pos);
                    if (!(r instanceof i)) return r && r.key === t ? r : void 0
                }
                async _findPlace(t) {
                    const e = this._options.hash("string" === typeof t ? o(t) : t),
                        r = await e.take(this._options.bits),
                        n = this._children.get(r);
                    return n instanceof i ? n._findPlace(e) : {
                        bucket: this,
                        pos: r,
                        hash: e,
                        existingChild: n
                    }
                }
                async _findNewBucketAndPos(t) {
                    const e = await this._findPlace(t);
                    if (e.existingChild && e.existingChild.key !== t) {
                        const t = new i(this._options, e.bucket, e.pos);
                        e.bucket._putObjectAt(e.pos, t);
                        const r = await t._findPlace(e.existingChild.hash);
                        return r.bucket._putAt(r, e.existingChild.key, e.existingChild.value), t._findNewBucketAndPos(e.hash)
                    }
                    return e
                }
                _putAt(t, e, r) {
                    this._putObjectAt(t.pos, {
                        key: e,
                        value: r,
                        hash: t.hash
                    })
                }
                _putObjectAt(t, e) {
                    this._children.get(t) || this._popCount++, this._children.set(t, e)
                }
                _delAt(t) {
                    if (-1 === t) throw new Error("Invalid position");
                    this._children.get(t) && this._popCount--, this._children.unset(t), this._level()
                }
                _level() {
                    if (this._parent && this._popCount <= 1)
                        if (1 === this._popCount) {
                            const t = this._children.find(s);
                            if (t && !(t instanceof i)) {
                                const e = t.hash;
                                e.untake(this._options.bits);
                                const r = {
                                    pos: this._posAtParent,
                                    hash: e,
                                    bucket: this._parent
                                };
                                this._parent._putAt(r, t.key, t.value)
                            }
                        } else this._parent._delAt(this._posAtParent)
                }
                _at(t) {
                    return this._children.get(t)
                }
            }

            function s(t) {
                return Boolean(t)
            }

            function a(t, e) {
                return t.key
            }

            function c(t) {
                return t
            }
            async function u(t, e, r) {
                const n = [];
                for (const o of t._children.compactArray())
                    if (o instanceof i) await u(o, e, r);
                    else {
                        const r = await e(o);
                        n.push({
                            bitField: t._children.bitField(),
                            children: r
                        })
                    }
                return r(n)
            }
            t.exports = i
        },
        51536: function(t) {
            "use strict";
            const e = [255, 254, 252, 248, 240, 224, 192, 128],
                r = [1, 3, 7, 15, 31, 63, 127, 255];

            function n(t, n, o) {
                return (t & function(t, n) {
                    return e[t] & r[Math.min(n + t - 1, 7)]
                }(n, o)) >>> n
            }
            t.exports = class {
                constructor(t) {
                    this._value = t, this._currentBytePos = t.length - 1, this._currentBitPos = 7
                }
                availableBits() {
                    return this._currentBitPos + 1 + 8 * this._currentBytePos
                }
                totalBits() {
                    return 8 * this._value.length
                }
                take(t) {
                    let e = t,
                        r = 0;
                    for (; e && this._haveBits();) {
                        const t = this._value[this._currentBytePos],
                            o = this._currentBitPos + 1,
                            i = Math.min(o, e);
                        r = (r << i) + n(t, o - i, i), e -= i, this._currentBitPos -= i, this._currentBitPos < 0 && (this._currentBitPos = 7, this._currentBytePos--)
                    }
                    return r
                }
                untake(t) {
                    for (this._currentBitPos += t; this._currentBitPos > 7;) this._currentBitPos -= 8, this._currentBytePos += 1
                }
                _haveBits() {
                    return this._currentBytePos >= 0
                }
            }
        },
        31712: function(t, e, r) {
            "use strict";
            const n = r(51536),
                {
                    concat: o
                } = r(20605);
            class i {
                constructor(t, e) {
                    if (!(t instanceof Uint8Array)) throw new Error("can only hash Uint8Arrays");
                    this._value = t, this._hashFn = e, this._depth = -1, this._availableBits = 0, this._currentBufferIndex = 0, this._buffers = []
                }
                async take(t) {
                    let e = t;
                    for (; this._availableBits < e;) await this._produceMoreBits();
                    let r = 0;
                    for (; e > 0;) {
                        const t = this._buffers[this._currentBufferIndex],
                            n = Math.min(t.availableBits(), e);
                        r = (r << n) + t.take(n), e -= n, this._availableBits -= n, 0 === t.availableBits() && this._currentBufferIndex++
                    }
                    return r
                }
                untake(t) {
                    let e = t;
                    for (; e > 0;) {
                        const t = this._buffers[this._currentBufferIndex],
                            r = Math.min(t.totalBits() - t.availableBits(), e);
                        t.untake(r), e -= r, this._availableBits += r, this._currentBufferIndex > 0 && t.totalBits() === t.availableBits() && (this._depth--, this._currentBufferIndex--)
                    }
                }
                async _produceMoreBits() {
                    this._depth++;
                    const t = this._depth ? o([this._value, Uint8Array.from([this._depth])]) : this._value,
                        e = await this._hashFn(t),
                        r = new n(e);
                    this._buffers.push(r), this._availableBits += r.availableBits()
                }
            }
            t.exports = function(t) {
                return function(e) {
                    return e instanceof i ? e : new i(e, t)
                }
            }, t.exports.InfiniteHash = i
        },
        54563: function(t, e, r) {
            "use strict";
            const n = r(30043),
                o = r(31712);
            t.exports = {
                createHAMT: function(t) {
                    if (!t || !t.hashFn) throw new Error("please define an options.hashFn");
                    const e = {
                        bits: t.bits || 8,
                        hash: o(t.hashFn)
                    };
                    return new n(e)
                },
                Bucket: n
            }
        },
        33310: function(t) {
            "use strict";
            t.exports = t => {
                if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
                const e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }
        },
        31303: function(t) {
            "use strict";
            t.exports = async t => {
                const e = [];
                for await (const r of t) e.push(r);
                return e
            }
        },
        78165: function(t) {
            "use strict";
            t.exports = async function*(t, e = 1) {
                let r = [];
                e < 1 && (e = 1);
                for await (const n of t) for (r.push(n); r.length >= e;) yield r.slice(0, e), r = r.slice(e);
                for (; r.length;) yield r.slice(0, e), r = r.slice(e)
            }
        },
        64593: function(t) {
            "use strict";
            t.exports = async t => {
                for await (const e of t);
            }
        },
        55565: function(t) {
            "use strict";
            t.exports = async function*(t, e) {
                for await (const r of t) await e(r) && (yield r)
            }
        },
        93093: function(t) {
            "use strict";
            t.exports = async t => {
                let e;
                for await (const r of t) e = r;
                return e
            }
        },
        32121: function(t) {
            "use strict";
            t.exports = async function*(t, e) {
                for await (const r of t) yield e(r)
            }
        },
        84810: function(t, e, r) {
            "use strict";
            const n = r(78165);
            t.exports = async function*(t, e = 1) {
                for await (const r of n(t, e)) {
                    const t = r.map((t => t().then((t => ({
                        ok: !0,
                        value: t
                    })), (t => ({
                        ok: !1,
                        err: t
                    })))));
                    for (let e = 0; e < t.length; e++) {
                        const r = await t[e];
                        if (!r.ok) throw r.err;
                        yield r.value
                    }
                }
            }
        },
        28132: function(t) {
            "use strict";
            t.exports = function(t) {
                const [e, r] = t[Symbol.asyncIterator] ? [t[Symbol.asyncIterator](), Symbol.asyncIterator] : [t[Symbol.iterator](), Symbol.iterator], n = [];
                return {
                    peek: () => e.next(),
                    push: t => {
                        n.push(t)
                    },
                    next: () => n.length ? {
                        done: !1,
                        value: n.shift()
                    } : e.next(),
                    [r]() {
                        return this
                    }
                }
            }
        },
        60618: function(t) {
            const e = (...t) => {
                    let e;
                    for (; t.length;) e = t.shift()(e);
                    return e
                },
                r = t => t && ("function" === typeof t[Symbol.asyncIterator] || "function" === typeof t[Symbol.iterator] || "function" === typeof t.next),
                n = t => t && "function" === typeof t.sink && r(t.source),
                o = t => e => (t.sink(e), t.source),
                i = (...t) => {
                    if (n(t[0])) {
                        const e = t[0];
                        t[0] = () => e.source
                    } else if (r(t[0])) {
                        const e = t[0];
                        t[0] = () => e
                    }
                    if (t.length > 1 && n(t[t.length - 1]) && (t[t.length - 1] = t[t.length - 1].sink), t.length > 2)
                        for (let e = 1; e < t.length - 1; e++) n(t[e]) && (t[e] = o(t[e]));
                    return e(...t)
                };
            t.exports = i, t.exports.pipe = i, t.exports.rawPipe = e, t.exports.isIterable = r, t.exports.isDuplex = n
        },
        37939: function(t) {
            "use strict";
            t.exports = async function*(t, e) {
                let r = 0;
                if (!(e < 1))
                    for await (const n of t) if (yield n, r++, r === e) return
            }
        },
        70942: function(t, e, r) {
            "use strict";
            const n = r(33310),
                {
                    hasOwnProperty: o
                } = Object.prototype,
                {
                    propertyIsEnumerable: i
                } = Object,
                s = (t, e, r) => Object.defineProperty(t, e, {
                    value: r,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a = this,
                c = {
                    concatArrays: !1,
                    ignoreUndefined: !1
                },
                u = t => {
                    const e = [];
                    for (const r in t) o.call(t, r) && e.push(r);
                    if (Object.getOwnPropertySymbols) {
                        const r = Object.getOwnPropertySymbols(t);
                        for (const n of r) i.call(t, n) && e.push(n)
                    }
                    return e
                };

            function f(t) {
                return Array.isArray(t) ? function(t) {
                    const e = t.slice(0, 0);
                    return u(t).forEach((r => {
                        s(e, r, f(t[r]))
                    })), e
                }(t) : n(t) ? function(t) {
                    const e = null === Object.getPrototypeOf(t) ? Object.create(null) : {};
                    return u(t).forEach((r => {
                        s(e, r, f(t[r]))
                    })), e
                }(t) : t
            }
            const l = (t, e, r, n) => (r.forEach((r => {
                "undefined" === typeof e[r] && n.ignoreUndefined || (r in t && t[r] !== Object.getPrototypeOf(t) ? s(t, r, h(t[r], e[r], n)) : s(t, r, f(e[r])))
            })), t);

            function h(t, e, r) {
                return r.concatArrays && Array.isArray(t) && Array.isArray(e) ? ((t, e, r) => {
                    let n = t.slice(0, 0),
                        i = 0;
                    return [t, e].forEach((e => {
                        const a = [];
                        for (let r = 0; r < e.length; r++) o.call(e, r) && (a.push(String(r)), s(n, i++, e === t ? e[r] : f(e[r])));
                        n = l(n, e, u(e).filter((t => !a.includes(t))), r)
                    })), n
                })(t, e, r) : n(e) && n(t) ? l(t, e, u(e), r) : f(e)
            }
            t.exports = function(...t) {
                const e = h(f(c), this !== a && this || {}, c);
                let r = {
                    _: {}
                };
                for (const o of t)
                    if (void 0 !== o) {
                        if (!n(o)) throw new TypeError("`" + o + "` is not an Option Object");
                        r = h(r, {
                            _: o
                        }, e)
                    }
                return r._
            }
        },
        40469: function(t, e, r) {
            t.exports = r(18027)
        },
        18027: function(t, e) {
            ! function(r, n) {
                "use strict";
                var o = {
                    version: "3.0.0",
                    x86: {},
                    x64: {},
                    inputValidation: !0
                };

                function i(t) {
                    if (!Array.isArray(t) && !ArrayBuffer.isView(t)) return !1;
                    for (var e = 0; e < t.length; e++)
                        if (!Number.isInteger(t[e]) || t[e] < 0 || t[e] > 255) return !1;
                    return !0
                }

                function s(t, e) {
                    return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16)
                }

                function a(t, e) {
                    return t << e | t >>> 32 - e
                }

                function c(t) {
                    return t = s(t ^= t >>> 16, 2246822507), t = s(t ^= t >>> 13, 3266489909), t ^= t >>> 16
                }

                function u(t, e) {
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                    var r = [0, 0, 0, 0];
                    return r[3] += t[3] + e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] + e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] + e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] + e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                }

                function f(t, e) {
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                    var r = [0, 0, 0, 0];
                    return r[3] += t[3] * e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] * e[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += t[3] * e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] * e[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[2] * e[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[3] * e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                }

                function l(t, e) {
                    return 32 === (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
                }

                function h(t, e) {
                    return 0 === (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
                }

                function d(t, e) {
                    return [t[0] ^ e[0], t[1] ^ e[1]]
                }

                function p(t) {
                    return t = d(t, [0, t[0] >>> 1]), t = d(t = f(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), t = d(t = f(t, [3301882366, 444984403]), [0, t[0] >>> 1])
                }
                o.x86.hash32 = function(t, e) {
                    if (o.inputValidation && !i(t)) return n;
                    e = e || 0;
                    for (var r = t.length % 4, u = t.length - r, f = e, l = 0, h = 3432918353, d = 461845907, p = 0; p < u; p += 4) l = s(l = t[p] | t[p + 1] << 8 | t[p + 2] << 16 | t[p + 3] << 24, h), l = s(l = a(l, 15), d), f = s(f = a(f ^= l, 13), 5) + 3864292196;
                    switch (l = 0, r) {
                        case 3:
                            l ^= t[p + 2] << 16;
                        case 2:
                            l ^= t[p + 1] << 8;
                        case 1:
                            l = s(l ^= t[p], h), f ^= l = s(l = a(l, 15), d)
                    }
                    return (f = c(f ^= t.length)) >>> 0
                }, o.x86.hash128 = function(t, e) {
                    if (o.inputValidation && !i(t)) return n;
                    e = e || 0;
                    for (var r = t.length % 16, u = t.length - r, f = e, l = e, h = e, d = e, p = 0, y = 0, w = 0, g = 0, b = 597399067, m = 2869860233, v = 951274213, _ = 2716044179, k = 0; k < u; k += 16) p = t[k] | t[k + 1] << 8 | t[k + 2] << 16 | t[k + 3] << 24, y = t[k + 4] | t[k + 5] << 8 | t[k + 6] << 16 | t[k + 7] << 24, w = t[k + 8] | t[k + 9] << 8 | t[k + 10] << 16 | t[k + 11] << 24, g = t[k + 12] | t[k + 13] << 8 | t[k + 14] << 16 | t[k + 15] << 24, p = a(p = s(p, b), 15), f = a(f ^= p = s(p, m), 19), f = s(f += l, 5) + 1444728091, y = a(y = s(y, m), 16), l = a(l ^= y = s(y, v), 17), l = s(l += h, 5) + 197830471, w = a(w = s(w, v), 17), h = a(h ^= w = s(w, _), 15), h = s(h += d, 5) + 2530024501, g = a(g = s(g, _), 18), d = a(d ^= g = s(g, b), 13), d = s(d += f, 5) + 850148119;
                    switch (p = 0, y = 0, w = 0, g = 0, r) {
                        case 15:
                            g ^= t[k + 14] << 16;
                        case 14:
                            g ^= t[k + 13] << 8;
                        case 13:
                            g = s(g ^= t[k + 12], _), d ^= g = s(g = a(g, 18), b);
                        case 12:
                            w ^= t[k + 11] << 24;
                        case 11:
                            w ^= t[k + 10] << 16;
                        case 10:
                            w ^= t[k + 9] << 8;
                        case 9:
                            w = s(w ^= t[k + 8], v), h ^= w = s(w = a(w, 17), _);
                        case 8:
                            y ^= t[k + 7] << 24;
                        case 7:
                            y ^= t[k + 6] << 16;
                        case 6:
                            y ^= t[k + 5] << 8;
                        case 5:
                            y = s(y ^= t[k + 4], m), l ^= y = s(y = a(y, 16), v);
                        case 4:
                            p ^= t[k + 3] << 24;
                        case 3:
                            p ^= t[k + 2] << 16;
                        case 2:
                            p ^= t[k + 1] << 8;
                        case 1:
                            p = s(p ^= t[k], b), f ^= p = s(p = a(p, 15), m)
                    }
                    return f ^= t.length, f += l ^= t.length, f += h ^= t.length, l += f += d ^= t.length, h += f, d += f, f = c(f), f += l = c(l), f += h = c(h), l += f += d = c(d), h += f, d += f, ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (h >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8)
                }, o.x64.hash128 = function(t, e) {
                    if (o.inputValidation && !i(t)) return n;
                    e = e || 0;
                    for (var r = t.length % 16, s = t.length - r, a = [0, e], c = [0, e], y = [0, 0], w = [0, 0], g = [2277735313, 289559509], b = [1291169091, 658871167], m = 0; m < s; m += 16) y = [t[m + 4] | t[m + 5] << 8 | t[m + 6] << 16 | t[m + 7] << 24, t[m] | t[m + 1] << 8 | t[m + 2] << 16 | t[m + 3] << 24], w = [t[m + 12] | t[m + 13] << 8 | t[m + 14] << 16 | t[m + 15] << 24, t[m + 8] | t[m + 9] << 8 | t[m + 10] << 16 | t[m + 11] << 24], y = l(y = f(y, g), 31), a = u(a = l(a = d(a, y = f(y, b)), 27), c), a = u(f(a, [0, 5]), [0, 1390208809]), w = l(w = f(w, b), 33), c = u(c = l(c = d(c, w = f(w, g)), 31), a), c = u(f(c, [0, 5]), [0, 944331445]);
                    switch (y = [0, 0], w = [0, 0], r) {
                        case 15:
                            w = d(w, h([0, t[m + 14]], 48));
                        case 14:
                            w = d(w, h([0, t[m + 13]], 40));
                        case 13:
                            w = d(w, h([0, t[m + 12]], 32));
                        case 12:
                            w = d(w, h([0, t[m + 11]], 24));
                        case 11:
                            w = d(w, h([0, t[m + 10]], 16));
                        case 10:
                            w = d(w, h([0, t[m + 9]], 8));
                        case 9:
                            w = f(w = d(w, [0, t[m + 8]]), b), c = d(c, w = f(w = l(w, 33), g));
                        case 8:
                            y = d(y, h([0, t[m + 7]], 56));
                        case 7:
                            y = d(y, h([0, t[m + 6]], 48));
                        case 6:
                            y = d(y, h([0, t[m + 5]], 40));
                        case 5:
                            y = d(y, h([0, t[m + 4]], 32));
                        case 4:
                            y = d(y, h([0, t[m + 3]], 24));
                        case 3:
                            y = d(y, h([0, t[m + 2]], 16));
                        case 2:
                            y = d(y, h([0, t[m + 1]], 8));
                        case 1:
                            y = f(y = d(y, [0, t[m]]), g), a = d(a, y = f(y = l(y, 31), b))
                    }
                    return a = u(a = d(a, [0, t.length]), c = d(c, [0, t.length])), c = u(c, a), a = u(a = p(a), c = p(c)), c = u(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
                }, t.exports && (e = t.exports = o), e.murmurHash3 = o
            }()
        },
        42693: function(t, e, r) {
            "use strict";
            const n = r(99353),
                o = ["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed"];
            class i extends Error {
                constructor(t) {
                    super(), t instanceof Error ? (this.originalError = t, ({
                        message: t
                    } = t)) : (this.originalError = new Error(t), this.originalError.stack = this.stack), this.name = "AbortError", this.message = t
                }
            }
            const s = (t, e) => new Promise(((r, s) => {
                e = {
                    onFailedAttempt: () => {},
                    retries: 10,
                    ...e
                };
                const a = n.operation(e);
                a.attempt((async n => {
                    try {
                        r(await t(n))
                    } catch (u) {
                        if (!(u instanceof Error)) return void s(new TypeError(`Non-error was thrown: "${u}". You should only throw errors.`));
                        if (u instanceof i) a.stop(), s(u.originalError);
                        else if (u instanceof TypeError && (c = u.message, !o.includes(c))) a.stop(), s(u);
                        else {
                            ((t, e, r) => {
                                const n = r.retries - (e - 1);
                                t.attemptNumber = e, t.retriesLeft = n
                            })(u, n, e);
                            try {
                                await e.onFailedAttempt(u)
                            } catch (u) {
                                return void s(u)
                            }
                            a.retry(u) || s(a.mainError())
                        }
                    }
                    var c
                }))
            }));
            t.exports = s, t.exports.default = s, t.exports.AbortError = i
        },
        62100: function(t, e, r) {
            "use strict";
            t.exports = r(89482)
        },
        89482: function(t, e, r) {
            "use strict";
            var n = e;

            function o() {
                n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader)
            }
            n.build = "minimal", n.Writer = r(41173), n.BufferWriter = r(43155), n.Reader = r(51408), n.BufferReader = r(50593), n.util = r(99693), n.rpc = r(35994), n.roots = r(85054), n.configure = o, o()
        },
        51408: function(t, e, r) {
            "use strict";
            t.exports = c;
            var n, o = r(99693),
                i = o.LongBits,
                s = o.utf8;

            function a(t, e) {
                return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
            }

            function c(t) {
                this.buf = t, this.pos = 0, this.len = t.length
            }
            var u = "undefined" !== typeof Uint8Array ? function(t) {
                    if (t instanceof Uint8Array || Array.isArray(t)) return new c(t);
                    throw Error("illegal buffer")
                } : function(t) {
                    if (Array.isArray(t)) return new c(t);
                    throw Error("illegal buffer")
                },
                f = function() {
                    return o.Buffer ? function(t) {
                        return (c.create = function(t) {
                            return o.Buffer.isBuffer(t) ? new n(t) : u(t)
                        })(t)
                    } : u
                };

            function l() {
                var t = new i(0, 0),
                    e = 0;
                if (!(this.len - this.pos > 4)) {
                    for (; e < 3; ++e) {
                        if (this.pos >= this.len) throw a(this);
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
                }
                for (; e < 4; ++e)
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
                if (e = 0, this.len - this.pos > 4) {
                    for (; e < 5; ++e)
                        if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                } else
                    for (; e < 5; ++e) {
                        if (this.pos >= this.len) throw a(this);
                        if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                throw Error("invalid varint encoding")
            }

            function h(t, e) {
                return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
            }

            function d() {
                if (this.pos + 8 > this.len) throw a(this, 8);
                return new i(h(this.buf, this.pos += 4), h(this.buf, this.pos += 4))
            }
            c.create = f(), c.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, c.prototype.uint32 = function() {
                var t = 4294967295;
                return function() {
                    if (t = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return t;
                    if (t = (t | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return t;
                    if ((this.pos += 5) > this.len) throw this.pos = this.len, a(this, 10);
                    return t
                }
            }(), c.prototype.int32 = function() {
                return 0 | this.uint32()
            }, c.prototype.sint32 = function() {
                var t = this.uint32();
                return t >>> 1 ^ -(1 & t) | 0
            }, c.prototype.bool = function() {
                return 0 !== this.uint32()
            }, c.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw a(this, 4);
                return h(this.buf, this.pos += 4)
            }, c.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw a(this, 4);
                return 0 | h(this.buf, this.pos += 4)
            }, c.prototype.float = function() {
                if (this.pos + 4 > this.len) throw a(this, 4);
                var t = o.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, t
            }, c.prototype.double = function() {
                if (this.pos + 8 > this.len) throw a(this, 4);
                var t = o.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, t
            }, c.prototype.bytes = function() {
                var t = this.uint32(),
                    e = this.pos,
                    r = this.pos + t;
                if (r > this.len) throw a(this, t);
                return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, r) : e === r ? new this.buf.constructor(0) : this._slice.call(this.buf, e, r)
            }, c.prototype.string = function() {
                var t = this.bytes();
                return s.read(t, 0, t.length)
            }, c.prototype.skip = function(t) {
                if ("number" === typeof t) {
                    if (this.pos + t > this.len) throw a(this, t);
                    this.pos += t
                } else
                    do {
                        if (this.pos >= this.len) throw a(this)
                    } while (128 & this.buf[this.pos++]);
                return this
            }, c.prototype.skipType = function(t) {
                switch (t) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 !== (t = 7 & this.uint32());) this.skipType(t);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + t + " at offset " + this.pos)
                }
                return this
            }, c._configure = function(t) {
                n = t, c.create = f(), n._configure();
                var e = o.Long ? "toLong" : "toNumber";
                o.merge(c.prototype, {
                    int64: function() {
                        return l.call(this)[e](!1)
                    },
                    uint64: function() {
                        return l.call(this)[e](!0)
                    },
                    sint64: function() {
                        return l.call(this).zzDecode()[e](!1)
                    },
                    fixed64: function() {
                        return d.call(this)[e](!0)
                    },
                    sfixed64: function() {
                        return d.call(this)[e](!1)
                    }
                })
            }
        },
        50593: function(t, e, r) {
            "use strict";
            t.exports = i;
            var n = r(51408);
            (i.prototype = Object.create(n.prototype)).constructor = i;
            var o = r(99693);

            function i(t) {
                n.call(this, t)
            }
            i._configure = function() {
                o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice)
            }, i.prototype.string = function() {
                var t = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len))
            }, i._configure()
        },
        85054: function(t) {
            "use strict";
            t.exports = {}
        },
        35994: function(t, e, r) {
            "use strict";
            e.Service = r(77948)
        },
        77948: function(t, e, r) {
            "use strict";
            t.exports = o;
            var n = r(99693);

            function o(t, e, r) {
                if ("function" !== typeof t) throw TypeError("rpcImpl must be a function");
                n.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(r)
            }(o.prototype = Object.create(n.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function t(e, r, o, i, s) {
                if (!i) throw TypeError("request must be specified");
                var a = this;
                if (!s) return n.asPromise(t, a, e, r, o, i);
                if (a.rpcImpl) try {
                    return a.rpcImpl(e, r[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function(t, r) {
                        if (t) return a.emit("error", t, e), s(t);
                        if (null !== r) {
                            if (!(r instanceof o)) try {
                                r = o[a.responseDelimited ? "decodeDelimited" : "decode"](r)
                            } catch (t) {
                                return a.emit("error", t, e), s(t)
                            }
                            return a.emit("data", r, e), s(null, r)
                        }
                        a.end(!0)
                    }))
                } catch (c) {
                    return a.emit("error", c, e), void setTimeout((function() {
                        s(c)
                    }), 0)
                } else setTimeout((function() {
                    s(Error("already ended"))
                }), 0)
            }, o.prototype.end = function(t) {
                return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        },
        1945: function(t, e, r) {
            "use strict";
            t.exports = o;
            var n = r(99693);

            function o(t, e) {
                this.lo = t >>> 0, this.hi = e >>> 0
            }
            var i = o.zero = new o(0, 0);
            i.toNumber = function() {
                return 0
            }, i.zzEncode = i.zzDecode = function() {
                return this
            }, i.length = function() {
                return 1
            };
            var s = o.zeroHash = "\0\0\0\0\0\0\0\0";
            o.fromNumber = function(t) {
                if (0 === t) return i;
                var e = t < 0;
                e && (t = -t);
                var r = t >>> 0,
                    n = (t - r) / 4294967296 >>> 0;
                return e && (n = ~n >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++n > 4294967295 && (n = 0))), new o(r, n)
            }, o.from = function(t) {
                if ("number" === typeof t) return o.fromNumber(t);
                if (n.isString(t)) {
                    if (!n.Long) return o.fromNumber(parseInt(t, 10));
                    t = n.Long.fromString(t)
                }
                return t.low || t.high ? new o(t.low >>> 0, t.high >>> 0) : i
            }, o.prototype.toNumber = function(t) {
                if (!t && this.hi >>> 31) {
                    var e = 1 + ~this.lo >>> 0,
                        r = ~this.hi >>> 0;
                    return e || (r = r + 1 >>> 0), -(e + 4294967296 * r)
                }
                return this.lo + 4294967296 * this.hi
            }, o.prototype.toLong = function(t) {
                return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: Boolean(t)
                }
            };
            var a = String.prototype.charCodeAt;
            o.fromHash = function(t) {
                return t === s ? i : new o((a.call(t, 0) | a.call(t, 1) << 8 | a.call(t, 2) << 16 | a.call(t, 3) << 24) >>> 0, (a.call(t, 4) | a.call(t, 5) << 8 | a.call(t, 6) << 16 | a.call(t, 7) << 24) >>> 0)
            }, o.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, o.prototype.zzEncode = function() {
                var t = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
            }, o.prototype.zzDecode = function() {
                var t = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
            }, o.prototype.length = function() {
                var t = this.lo,
                    e = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    r = this.hi >>> 24;
                return 0 === r ? 0 === e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
            }
        },
        99693: function(t, e, r) {
            "use strict";
            var n = e;

            function o(t, e, r) {
                for (var n = Object.keys(e), o = 0; o < n.length; ++o) void 0 !== t[n[o]] && r || (t[n[o]] = e[n[o]]);
                return t
            }

            function i(t) {
                function e(t, r) {
                    if (!(this instanceof e)) return new e(t, r);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                        value: (new Error).stack || ""
                    }), r && o(this, r)
                }
                return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
                    get: function() {
                        return t
                    }
                }), e.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, e
            }
            n.asPromise = r(34537), n.base64 = r(97419), n.EventEmitter = r(19211), n.float = r(10945), n.inquire = r(67199), n.utf8 = r(94997), n.pool = r(76662), n.LongBits = r(1945), n.isNode = Boolean("undefined" !== typeof r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node), n.global = n.isNode && r.g || "undefined" !== typeof window && window || "undefined" !== typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isInteger = Number.isInteger || function(t) {
                return "number" === typeof t && isFinite(t) && Math.floor(t) === t
            }, n.isString = function(t) {
                return "string" === typeof t || t instanceof String
            }, n.isObject = function(t) {
                return t && "object" === typeof t
            }, n.isset = n.isSet = function(t, e) {
                var r = t[e];
                return !(null == r || !t.hasOwnProperty(e)) && ("object" !== typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
            }, n.Buffer = function() {
                try {
                    var t = n.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (e) {
                    return null
                }
            }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
                return "number" === typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" === typeof Uint8Array ? t : new Uint8Array(t)
            }, n.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
                return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
            }, n.longFromHash = function(t, e) {
                var r = n.LongBits.fromHash(t);
                return n.Long ? n.Long.fromBits(r.lo, r.hi, e) : r.toNumber(Boolean(e))
            }, n.merge = o, n.lcFirst = function(t) {
                return t.charAt(0).toLowerCase() + t.substring(1)
            }, n.newError = i, n.ProtocolError = i("ProtocolError"), n.oneOfGetter = function(t) {
                for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 1;
                return function() {
                    for (var t = Object.keys(this), r = t.length - 1; r > -1; --r)
                        if (1 === e[t[r]] && void 0 !== this[t[r]] && null !== this[t[r]]) return t[r]
                }
            }, n.oneOfSetter = function(t) {
                return function(e) {
                    for (var r = 0; r < t.length; ++r) t[r] !== e && delete this[t[r]]
                }
            }, n.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, n._configure = function() {
                var t = n.Buffer;
                t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, r) {
                    return new t(e, r)
                }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
                    return new t(e)
                }) : n._Buffer_from = n._Buffer_allocUnsafe = null
            }
        },
        41173: function(t, e, r) {
            "use strict";
            t.exports = l;
            var n, o = r(99693),
                i = o.LongBits,
                s = o.base64,
                a = o.utf8;

            function c(t, e, r) {
                this.fn = t, this.len = e, this.next = void 0, this.val = r
            }

            function u() {}

            function f(t) {
                this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
            }

            function l() {
                this.len = 0, this.head = new c(u, 0, 0), this.tail = this.head, this.states = null
            }
            var h = function() {
                return o.Buffer ? function() {
                    return (l.create = function() {
                        return new n
                    })()
                } : function() {
                    return new l
                }
            };

            function d(t, e, r) {
                e[r] = 255 & t
            }

            function p(t, e) {
                this.len = t, this.next = void 0, this.val = e
            }

            function y(t, e, r) {
                for (; t.hi;) e[r++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
                for (; t.lo > 127;) e[r++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                e[r++] = t.lo
            }

            function w(t, e, r) {
                e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24
            }
            l.create = h(), l.alloc = function(t) {
                return new o.Array(t)
            }, o.Array !== Array && (l.alloc = o.pool(l.alloc, o.Array.prototype.subarray)), l.prototype._push = function(t, e, r) {
                return this.tail = this.tail.next = new c(t, e, r), this.len += e, this
            }, p.prototype = Object.create(c.prototype), p.prototype.fn = function(t, e, r) {
                for (; t > 127;) e[r++] = 127 & t | 128, t >>>= 7;
                e[r] = t
            }, l.prototype.uint32 = function(t) {
                return this.len += (this.tail = this.tail.next = new p((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
            }, l.prototype.int32 = function(t) {
                return t < 0 ? this._push(y, 10, i.fromNumber(t)) : this.uint32(t)
            }, l.prototype.sint32 = function(t) {
                return this.uint32((t << 1 ^ t >> 31) >>> 0)
            }, l.prototype.uint64 = function(t) {
                var e = i.from(t);
                return this._push(y, e.length(), e)
            }, l.prototype.int64 = l.prototype.uint64, l.prototype.sint64 = function(t) {
                var e = i.from(t).zzEncode();
                return this._push(y, e.length(), e)
            }, l.prototype.bool = function(t) {
                return this._push(d, 1, t ? 1 : 0)
            }, l.prototype.fixed32 = function(t) {
                return this._push(w, 4, t >>> 0)
            }, l.prototype.sfixed32 = l.prototype.fixed32, l.prototype.fixed64 = function(t) {
                var e = i.from(t);
                return this._push(w, 4, e.lo)._push(w, 4, e.hi)
            }, l.prototype.sfixed64 = l.prototype.fixed64, l.prototype.float = function(t) {
                return this._push(o.float.writeFloatLE, 4, t)
            }, l.prototype.double = function(t) {
                return this._push(o.float.writeDoubleLE, 8, t)
            };
            var g = o.Array.prototype.set ? function(t, e, r) {
                e.set(t, r)
            } : function(t, e, r) {
                for (var n = 0; n < t.length; ++n) e[r + n] = t[n]
            };
            l.prototype.bytes = function(t) {
                var e = t.length >>> 0;
                if (!e) return this._push(d, 1, 0);
                if (o.isString(t)) {
                    var r = l.alloc(e = s.length(t));
                    s.decode(t, r, 0), t = r
                }
                return this.uint32(e)._push(g, e, t)
            }, l.prototype.string = function(t) {
                var e = a.length(t);
                return e ? this.uint32(e)._push(a.write, e, t) : this._push(d, 1, 0)
            }, l.prototype.fork = function() {
                return this.states = new f(this), this.head = this.tail = new c(u, 0, 0), this.len = 0, this
            }, l.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(u, 0, 0), this.len = 0), this
            }, l.prototype.ldelim = function() {
                var t = this.head,
                    e = this.tail,
                    r = this.len;
                return this.reset().uint32(r), r && (this.tail.next = t.next, this.tail = e, this.len += r), this
            }, l.prototype.finish = function() {
                for (var t = this.head.next, e = this.constructor.alloc(this.len), r = 0; t;) t.fn(t.val, e, r), r += t.len, t = t.next;
                return e
            }, l._configure = function(t) {
                n = t, l.create = h(), n._configure()
            }
        },
        43155: function(t, e, r) {
            "use strict";
            t.exports = i;
            var n = r(41173);
            (i.prototype = Object.create(n.prototype)).constructor = i;
            var o = r(99693);

            function i() {
                n.call(this)
            }

            function s(t, e, r) {
                t.length < 40 ? o.utf8.write(t, e, r) : e.utf8Write ? e.utf8Write(t, r) : e.write(t, r)
            }
            i._configure = function() {
                i.alloc = o._Buffer_allocUnsafe, i.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function(t, e, r) {
                    e.set(t, r)
                } : function(t, e, r) {
                    if (t.copy) t.copy(e, r, 0, t.length);
                    else
                        for (var n = 0; n < t.length;) e[r++] = t[n++]
                }
            }, i.prototype.bytes = function(t) {
                o.isString(t) && (t = o._Buffer_from(t, "base64"));
                var e = t.length >>> 0;
                return this.uint32(e), e && this._push(i.writeBytesBuffer, e, t), this
            }, i.prototype.string = function(t) {
                var e = o.Buffer.byteLength(t);
                return this.uint32(e), e && this._push(s, e, t), this
            }, i._configure()
        },
        33286: function(t, e, r) {
            const {
                instantiate: n
            } = r(19824);

            function o(t = {}) {
                if (!o.supported) return null;
                var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 78, 14, 96, 2, 127, 126, 0, 96, 1, 127, 1, 126, 96, 2, 127, 127, 0, 96, 1, 127, 1, 127, 96, 1, 127, 0, 96, 2, 127, 127, 1, 127, 96, 3, 127, 127, 127, 1, 127, 96, 0, 0, 96, 3, 127, 127, 127, 0, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 0, 96, 5, 127, 127, 127, 127, 127, 1, 127, 96, 1, 126, 1, 127, 96, 2, 126, 126, 1, 126, 2, 13, 1, 3, 101, 110, 118, 5, 97, 98, 111, 114, 116, 0, 10, 3, 54, 53, 2, 2, 8, 9, 3, 5, 2, 8, 6, 5, 3, 4, 2, 6, 9, 12, 13, 2, 5, 11, 3, 2, 3, 2, 3, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 6, 7, 7, 4, 4, 5, 3, 1, 0, 1, 6, 47, 9, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 3, 11, 127, 0, 65, 4, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 240, 2, 11, 127, 0, 65, 6, 11, 7, 240, 5, 41, 6, 109, 101, 109, 111, 114, 121, 2, 0, 7, 95, 95, 97, 108, 108, 111, 99, 0, 10, 8, 95, 95, 114, 101, 116, 97, 105, 110, 0, 11, 9, 95, 95, 114, 101, 108, 101, 97, 115, 101, 0, 12, 9, 95, 95, 99, 111, 108, 108, 101, 99, 116, 0, 51, 11, 95, 95, 114, 116, 116, 105, 95, 98, 97, 115, 101, 3, 7, 13, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 95, 73, 68, 3, 2, 13, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 95, 73, 68, 3, 3, 6, 100, 101, 103, 114, 101, 101, 0, 16, 3, 109, 111, 100, 0, 17, 5, 82, 97, 98, 105, 110, 3, 8, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 21, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 22, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 23, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 24, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 112, 111, 115, 0, 25, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 112, 111, 115, 0, 26, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 111, 117, 110, 116, 0, 27, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 111, 117, 110, 116, 0, 28, 13, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 115, 0, 29, 13, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 115, 0, 30, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 115, 116, 97, 114, 116, 0, 31, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 115, 116, 97, 114, 116, 0, 32, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 33, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 34, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 35, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 36, 22, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 37, 22, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 38, 31, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 39, 31, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 40, 20, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 41, 20, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 42, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 43, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 44, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 45, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 46, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 115, 107, 0, 47, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 115, 107, 0, 48, 17, 82, 97, 98, 105, 110, 35, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 0, 20, 17, 82, 97, 98, 105, 110, 35, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 49, 8, 1, 50, 10, 165, 31, 53, 199, 1, 1, 4, 127, 32, 1, 40, 2, 0, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 3, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 3, 65, 7, 107, 11, 33, 3, 32, 1, 40, 2, 20, 33, 2, 32, 1, 40, 2, 16, 34, 5, 4, 64, 32, 5, 32, 2, 54, 2, 20, 11, 32, 2, 4, 64, 32, 2, 32, 5, 54, 2, 16, 11, 32, 1, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 70, 4, 64, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 2, 54, 2, 96, 32, 2, 69, 4, 64, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 65, 127, 115, 113, 34, 1, 54, 2, 4, 32, 1, 69, 4, 64, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 65, 127, 115, 113, 54, 2, 0, 11, 11, 11, 11, 226, 2, 1, 6, 127, 32, 1, 40, 2, 0, 33, 3, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 34, 5, 65, 1, 113, 4, 64, 32, 3, 65, 124, 113, 65, 16, 106, 32, 5, 65, 124, 113, 106, 34, 2, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 4, 16, 1, 32, 1, 32, 2, 32, 3, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 33, 5, 11, 11, 32, 3, 65, 2, 113, 4, 64, 32, 1, 65, 4, 107, 40, 2, 0, 34, 2, 40, 2, 0, 34, 6, 65, 124, 113, 65, 16, 106, 32, 3, 65, 124, 113, 106, 34, 7, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 2, 16, 1, 32, 2, 32, 7, 32, 6, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 2, 33, 1, 11, 11, 32, 4, 32, 5, 65, 2, 114, 54, 2, 0, 32, 4, 65, 4, 107, 32, 1, 54, 2, 0, 32, 0, 32, 3, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 2, 65, 7, 107, 11, 34, 3, 65, 4, 116, 32, 4, 106, 65, 2, 116, 106, 40, 2, 96, 33, 2, 32, 1, 65, 0, 54, 2, 16, 32, 1, 32, 2, 54, 2, 20, 32, 2, 4, 64, 32, 2, 32, 1, 54, 2, 16, 11, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 1, 54, 2, 96, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 114, 54, 2, 0, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 114, 54, 2, 4, 11, 119, 1, 1, 127, 32, 2, 2, 127, 32, 0, 40, 2, 160, 12, 34, 2, 4, 64, 32, 2, 32, 1, 65, 16, 107, 70, 4, 64, 32, 2, 40, 2, 0, 33, 3, 32, 1, 65, 16, 107, 33, 1, 11, 11, 32, 1, 11, 107, 34, 2, 65, 48, 73, 4, 64, 15, 11, 32, 1, 32, 3, 65, 2, 113, 32, 2, 65, 32, 107, 65, 1, 114, 114, 54, 2, 0, 32, 1, 65, 0, 54, 2, 16, 32, 1, 65, 0, 54, 2, 20, 32, 1, 32, 2, 106, 65, 16, 107, 34, 2, 65, 2, 54, 2, 0, 32, 0, 32, 2, 54, 2, 160, 12, 32, 0, 32, 1, 16, 2, 11, 155, 1, 1, 3, 127, 35, 0, 34, 0, 69, 4, 64, 65, 1, 63, 0, 34, 0, 74, 4, 127, 65, 1, 32, 0, 107, 64, 0, 65, 0, 72, 5, 65, 0, 11, 4, 64, 0, 11, 65, 176, 3, 34, 0, 65, 0, 54, 2, 0, 65, 208, 15, 65, 0, 54, 2, 0, 3, 64, 32, 1, 65, 23, 73, 4, 64, 32, 1, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 4, 65, 0, 33, 2, 3, 64, 32, 2, 65, 16, 73, 4, 64, 32, 1, 65, 4, 116, 32, 2, 106, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 96, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 65, 176, 3, 65, 224, 15, 63, 0, 65, 16, 116, 16, 3, 65, 176, 3, 36, 0, 11, 32, 0, 11, 45, 0, 32, 0, 65, 240, 255, 255, 255, 3, 79, 4, 64, 65, 32, 65, 224, 0, 65, 201, 3, 65, 29, 16, 0, 0, 11, 32, 0, 65, 15, 106, 65, 112, 113, 34, 0, 65, 16, 32, 0, 65, 16, 75, 27, 11, 169, 1, 1, 1, 127, 32, 0, 32, 1, 65, 128, 2, 73, 4, 127, 32, 1, 65, 4, 118, 33, 1, 65, 0, 5, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 64, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 106, 65, 1, 107, 33, 1, 11, 32, 1, 65, 31, 32, 1, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 1, 32, 2, 65, 7, 107, 11, 34, 2, 65, 2, 116, 106, 40, 2, 4, 65, 127, 32, 1, 116, 113, 34, 1, 4, 127, 32, 0, 32, 1, 104, 32, 2, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 32, 0, 40, 2, 0, 65, 127, 32, 2, 65, 1, 106, 116, 113, 34, 1, 4, 127, 32, 0, 32, 0, 32, 1, 104, 34, 0, 65, 2, 116, 106, 40, 2, 4, 104, 32, 0, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 65, 0, 11, 11, 11, 111, 1, 1, 127, 63, 0, 34, 2, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 127, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 65, 1, 107, 106, 5, 32, 1, 11, 65, 16, 32, 0, 40, 2, 160, 12, 32, 2, 65, 16, 116, 65, 16, 107, 71, 116, 106, 65, 255, 255, 3, 106, 65, 128, 128, 124, 113, 65, 16, 118, 34, 1, 32, 2, 32, 1, 74, 27, 64, 0, 65, 0, 72, 4, 64, 32, 1, 64, 0, 65, 0, 72, 4, 64, 0, 11, 11, 32, 0, 32, 2, 65, 16, 116, 63, 0, 65, 16, 116, 16, 3, 11, 113, 1, 2, 127, 32, 1, 40, 2, 0, 34, 3, 65, 124, 113, 32, 2, 107, 34, 4, 65, 32, 79, 4, 64, 32, 1, 32, 2, 32, 3, 65, 2, 113, 114, 54, 2, 0, 32, 2, 32, 1, 65, 16, 106, 106, 34, 1, 32, 4, 65, 16, 107, 65, 1, 114, 54, 2, 0, 32, 0, 32, 1, 16, 2, 5, 32, 1, 32, 3, 65, 126, 113, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 40, 2, 0, 65, 125, 113, 54, 2, 0, 11, 11, 91, 1, 2, 127, 32, 0, 32, 1, 16, 5, 34, 4, 16, 6, 34, 3, 69, 4, 64, 65, 1, 36, 1, 65, 0, 36, 1, 32, 0, 32, 4, 16, 6, 34, 3, 69, 4, 64, 32, 0, 32, 4, 16, 7, 32, 0, 32, 4, 16, 6, 33, 3, 11, 11, 32, 3, 65, 0, 54, 2, 4, 32, 3, 32, 2, 54, 2, 8, 32, 3, 32, 1, 54, 2, 12, 32, 0, 32, 3, 16, 1, 32, 0, 32, 3, 32, 4, 16, 8, 32, 3, 11, 13, 0, 16, 4, 32, 0, 32, 1, 16, 9, 65, 16, 106, 11, 33, 1, 1, 127, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 18, 0, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 140, 3, 1, 1, 127, 2, 64, 32, 1, 69, 13, 0, 32, 0, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 1, 107, 65, 0, 58, 0, 0, 32, 1, 65, 2, 77, 13, 0, 32, 0, 65, 1, 106, 65, 0, 58, 0, 0, 32, 0, 65, 2, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 34, 2, 65, 2, 107, 65, 0, 58, 0, 0, 32, 2, 65, 3, 107, 65, 0, 58, 0, 0, 32, 1, 65, 6, 77, 13, 0, 32, 0, 65, 3, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 4, 107, 65, 0, 58, 0, 0, 32, 1, 65, 8, 77, 13, 0, 32, 1, 65, 0, 32, 0, 107, 65, 3, 113, 34, 1, 107, 33, 2, 32, 0, 32, 1, 106, 34, 0, 65, 0, 54, 2, 0, 32, 0, 32, 2, 65, 124, 113, 34, 1, 106, 65, 4, 107, 65, 0, 54, 2, 0, 32, 1, 65, 8, 77, 13, 0, 32, 0, 65, 4, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 12, 107, 65, 0, 54, 2, 0, 32, 2, 65, 8, 107, 65, 0, 54, 2, 0, 32, 1, 65, 24, 77, 13, 0, 32, 0, 65, 12, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 20, 106, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 28, 107, 65, 0, 54, 2, 0, 32, 2, 65, 24, 107, 65, 0, 54, 2, 0, 32, 2, 65, 20, 107, 65, 0, 54, 2, 0, 32, 2, 65, 16, 107, 65, 0, 54, 2, 0, 32, 0, 32, 0, 65, 4, 113, 65, 24, 106, 34, 2, 106, 33, 0, 32, 1, 32, 2, 107, 33, 1, 3, 64, 32, 1, 65, 32, 79, 4, 64, 32, 0, 66, 0, 55, 3, 0, 32, 0, 65, 8, 106, 66, 0, 55, 3, 0, 32, 0, 65, 16, 106, 66, 0, 55, 3, 0, 32, 0, 65, 24, 106, 66, 0, 55, 3, 0, 32, 1, 65, 32, 107, 33, 1, 32, 0, 65, 32, 106, 33, 0, 12, 1, 11, 11, 11, 11, 178, 1, 1, 3, 127, 32, 1, 65, 240, 255, 255, 255, 3, 32, 2, 118, 75, 4, 64, 65, 144, 1, 65, 192, 1, 65, 23, 65, 56, 16, 0, 0, 11, 32, 1, 32, 2, 116, 34, 3, 65, 0, 16, 10, 34, 2, 32, 3, 16, 13, 32, 0, 69, 4, 64, 65, 12, 65, 2, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 2, 34, 1, 32, 0, 40, 2, 0, 34, 4, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 4, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 32, 0, 32, 2, 54, 2, 4, 32, 0, 32, 3, 54, 2, 8, 32, 0, 11, 46, 1, 2, 127, 65, 12, 65, 5, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 65, 128, 2, 65, 3, 16, 14, 11, 9, 0, 65, 63, 32, 0, 121, 167, 107, 11, 49, 1, 2, 127, 65, 63, 32, 1, 121, 167, 107, 33, 2, 3, 64, 65, 63, 32, 0, 121, 167, 107, 32, 2, 107, 34, 3, 65, 0, 78, 4, 64, 32, 0, 32, 1, 32, 3, 172, 134, 133, 33, 0, 12, 1, 11, 11, 32, 0, 11, 40, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 163, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 65, 0, 58, 0, 0, 11, 38, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 152, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 45, 0, 0, 11, 254, 5, 2, 1, 127, 4, 126, 32, 0, 69, 4, 64, 65, 232, 0, 65, 6, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 32, 0, 66, 0, 55, 3, 40, 32, 0, 66, 0, 55, 3, 48, 32, 0, 66, 0, 55, 3, 56, 32, 0, 66, 0, 55, 3, 64, 32, 0, 66, 0, 55, 3, 72, 32, 0, 66, 0, 55, 3, 80, 32, 0, 66, 0, 55, 3, 88, 32, 0, 66, 0, 55, 3, 96, 32, 0, 32, 2, 173, 55, 3, 80, 32, 0, 32, 3, 173, 55, 3, 88, 65, 12, 65, 4, 16, 10, 34, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 32, 4, 65, 0, 16, 14, 33, 2, 32, 0, 40, 2, 0, 16, 12, 32, 0, 32, 2, 54, 2, 0, 32, 0, 32, 4, 54, 2, 4, 32, 0, 66, 1, 32, 1, 173, 134, 66, 1, 125, 55, 3, 96, 32, 0, 66, 243, 130, 183, 218, 216, 230, 232, 30, 55, 3, 72, 35, 4, 69, 4, 64, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 32, 2, 65, 255, 1, 113, 173, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 65, 0, 33, 4, 3, 64, 32, 4, 32, 0, 40, 2, 4, 65, 1, 107, 72, 4, 64, 32, 6, 66, 8, 134, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 4, 65, 1, 106, 33, 4, 12, 1, 11, 11, 35, 6, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 63, 32, 0, 41, 3, 72, 121, 167, 107, 172, 33, 7, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 35, 5, 33, 1, 32, 2, 172, 32, 7, 134, 34, 8, 33, 6, 65, 63, 32, 0, 41, 3, 72, 34, 9, 121, 167, 107, 33, 3, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 3, 107, 34, 4, 65, 0, 78, 4, 64, 32, 6, 32, 9, 32, 4, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 1, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 32, 8, 132, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 1, 36, 4, 11, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 65, 0, 33, 2, 3, 64, 32, 2, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 2, 16, 18, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 6, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 6, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 0, 11, 38, 1, 1, 127, 32, 0, 40, 2, 0, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 55, 1, 2, 127, 32, 1, 32, 0, 40, 2, 0, 34, 2, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 11, 7, 0, 32, 0, 40, 2, 4, 11, 9, 0, 32, 0, 32, 1, 54, 2, 4, 11, 7, 0, 32, 0, 40, 2, 8, 11, 9, 0, 32, 0, 32, 1, 54, 2, 8, 11, 7, 0, 32, 0, 41, 3, 16, 11, 9, 0, 32, 0, 32, 1, 55, 3, 16, 11, 7, 0, 32, 0, 41, 3, 24, 11, 9, 0, 32, 0, 32, 1, 55, 3, 24, 11, 7, 0, 32, 0, 41, 3, 32, 11, 9, 0, 32, 0, 32, 1, 55, 3, 32, 11, 7, 0, 32, 0, 41, 3, 40, 11, 9, 0, 32, 0, 32, 1, 55, 3, 40, 11, 7, 0, 32, 0, 41, 3, 48, 11, 9, 0, 32, 0, 32, 1, 55, 3, 48, 11, 7, 0, 32, 0, 41, 3, 56, 11, 9, 0, 32, 0, 32, 1, 55, 3, 56, 11, 7, 0, 32, 0, 41, 3, 64, 11, 9, 0, 32, 0, 32, 1, 55, 3, 64, 11, 7, 0, 32, 0, 41, 3, 72, 11, 9, 0, 32, 0, 32, 1, 55, 3, 72, 11, 7, 0, 32, 0, 41, 3, 80, 11, 9, 0, 32, 0, 32, 1, 55, 3, 80, 11, 7, 0, 32, 0, 41, 3, 88, 11, 9, 0, 32, 0, 32, 1, 55, 3, 88, 11, 7, 0, 32, 0, 41, 3, 96, 11, 9, 0, 32, 0, 32, 1, 55, 3, 96, 11, 172, 4, 2, 5, 127, 1, 126, 32, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 4, 32, 4, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 33, 4, 65, 0, 33, 2, 32, 1, 40, 2, 8, 33, 5, 32, 1, 40, 2, 4, 33, 6, 3, 64, 2, 127, 65, 0, 33, 3, 3, 64, 32, 3, 32, 5, 72, 4, 64, 32, 3, 32, 6, 106, 45, 0, 0, 33, 1, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 7, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 32, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 7, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 1, 173, 32, 8, 66, 8, 134, 132, 133, 55, 3, 40, 32, 0, 32, 0, 41, 3, 16, 66, 1, 124, 55, 3, 16, 32, 0, 32, 0, 41, 3, 24, 66, 1, 124, 55, 3, 24, 32, 0, 41, 3, 16, 32, 0, 41, 3, 80, 90, 4, 127, 32, 0, 41, 3, 40, 32, 0, 41, 3, 96, 131, 80, 5, 65, 0, 11, 4, 127, 65, 1, 5, 32, 0, 41, 3, 16, 32, 0, 41, 3, 88, 90, 11, 4, 64, 32, 0, 32, 0, 41, 3, 32, 55, 3, 48, 32, 0, 32, 0, 41, 3, 16, 55, 3, 56, 32, 0, 32, 0, 41, 3, 40, 55, 3, 64, 65, 0, 33, 1, 3, 64, 32, 1, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 1, 16, 18, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 8, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 3, 65, 1, 106, 12, 3, 11, 32, 3, 65, 1, 106, 33, 3, 12, 1, 11, 11, 65, 127, 11, 34, 1, 65, 0, 78, 4, 64, 32, 5, 32, 1, 107, 33, 5, 32, 1, 32, 6, 106, 33, 6, 32, 2, 34, 1, 65, 1, 106, 33, 2, 32, 4, 40, 2, 4, 32, 1, 65, 2, 116, 106, 32, 0, 41, 3, 56, 62, 2, 0, 12, 1, 11, 11, 32, 4, 11, 10, 0, 16, 15, 36, 5, 16, 15, 36, 6, 11, 3, 0, 1, 11, 73, 1, 2, 127, 32, 0, 40, 2, 4, 34, 1, 65, 255, 255, 255, 255, 0, 113, 34, 2, 65, 1, 70, 4, 64, 32, 0, 65, 16, 106, 16, 53, 32, 0, 32, 0, 40, 2, 0, 65, 1, 114, 54, 2, 0, 35, 0, 32, 0, 16, 2, 5, 32, 0, 32, 2, 65, 1, 107, 32, 1, 65, 128, 128, 128, 128, 127, 113, 114, 54, 2, 4, 11, 11, 58, 0, 2, 64, 2, 64, 2, 64, 32, 0, 65, 8, 107, 40, 2, 0, 14, 7, 0, 0, 1, 1, 1, 1, 1, 2, 11, 15, 11, 32, 0, 40, 2, 0, 34, 0, 4, 64, 32, 0, 65, 172, 3, 79, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 15, 11, 0, 11, 11, 137, 3, 7, 0, 65, 16, 11, 55, 40, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 97, 0, 108, 0, 108, 0, 111, 0, 99, 0, 97, 0, 116, 0, 105, 0, 111, 0, 110, 0, 32, 0, 116, 0, 111, 0, 111, 0, 32, 0, 108, 0, 97, 0, 114, 0, 103, 0, 101, 0, 65, 208, 0, 11, 45, 30, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 30, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 114, 0, 116, 0, 47, 0, 116, 0, 108, 0, 115, 0, 102, 0, 46, 0, 116, 0, 115, 0, 65, 128, 1, 11, 43, 28, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 73, 0, 110, 0, 118, 0, 97, 0, 108, 0, 105, 0, 100, 0, 32, 0, 108, 0, 101, 0, 110, 0, 103, 0, 116, 0, 104, 0, 65, 176, 1, 11, 53, 38, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 38, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 98, 0, 117, 0, 102, 0, 102, 0, 101, 0, 114, 0, 46, 0, 116, 0, 115, 0, 65, 240, 1, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 73, 0, 110, 0, 100, 0, 101, 0, 120, 0, 32, 0, 111, 0, 117, 0, 116, 0, 32, 0, 111, 0, 102, 0, 32, 0, 114, 0, 97, 0, 110, 0, 103, 0, 101, 0, 65, 176, 2, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 116, 0, 121, 0, 112, 0, 101, 0, 100, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 46, 0, 116, 0, 115, 0, 65, 240, 2, 11, 53, 7, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 145, 4, 0, 0, 2, 0, 0, 0, 49, 0, 0, 0, 2, 0, 0, 0, 17, 1, 0, 0, 2, 0, 0, 0, 16, 0, 34, 16, 115, 111, 117, 114, 99, 101, 77, 97, 112, 112, 105, 110, 103, 85, 82, 76, 16, 46, 47, 114, 97, 98, 105, 110, 46, 119, 97, 115, 109, 46, 109, 97, 112]);
                return n(new Response(new Blob([e], {
                    type: "application/wasm"
                })), t)
            }
            o.supported = "undefined" !== typeof WebAssembly, t.exports = o
        },
        63060: function(t, e, r) {
            const n = r(57118),
                o = r(33286);
            t.exports = {
                Rabin: n,
                create: async (t, e, r, i, s) => {
                    const a = await o();
                    return new n(a, t, e, r, i, s)
                }
            }
        },
        57118: function(t) {
            t.exports = class {
                constructor(t, e = 12, r = 8192, n = 32768, o = 64, i) {
                    this.bits = e, this.min = r, this.max = n, this.asModule = t, this.rabin = new t.Rabin(e, r, n, o, i), this.polynomial = i
                }
                fingerprint(t) {
                    const {
                        __retain: e,
                        __release: r,
                        __allocArray: n,
                        __getInt32Array: o,
                        Int32Array_ID: i,
                        Uint8Array_ID: s
                    } = this.asModule, a = e(n(i, new Int32Array(Math.ceil(t.length / this.min)))), c = e(n(s, t)), u = o(this.rabin.fingerprint(c, a));
                    r(c), r(a);
                    const f = u.indexOf(0);
                    return f >= 0 ? u.subarray(0, f) : u
                }
            }
        },
        99353: function(t, e, r) {
            t.exports = r(71846)
        },
        71846: function(t, e, r) {
            var n = r(41960);
            e.operation = function(t) {
                var r = e.timeouts(t);
                return new n(r, {
                    forever: t && (t.forever || t.retries === 1 / 0),
                    unref: t && t.unref,
                    maxRetryTime: t && t.maxRetryTime
                })
            }, e.timeouts = function(t) {
                if (t instanceof Array) return [].concat(t);
                var e = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 1 / 0,
                    randomize: !1
                };
                for (var r in t) e[r] = t[r];
                if (e.minTimeout > e.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
                for (var n = [], o = 0; o < e.retries; o++) n.push(this.createTimeout(o, e));
                return t && t.forever && !n.length && n.push(this.createTimeout(o, e)), n.sort((function(t, e) {
                    return t - e
                })), n
            }, e.createTimeout = function(t, e) {
                var r = e.randomize ? Math.random() + 1 : 1,
                    n = Math.round(r * Math.max(e.minTimeout, 1) * Math.pow(e.factor, t));
                return n = Math.min(n, e.maxTimeout)
            }, e.wrap = function(t, r, n) {
                if (r instanceof Array && (n = r, r = null), !n)
                    for (var o in n = [], t) "function" === typeof t[o] && n.push(o);
                for (var i = 0; i < n.length; i++) {
                    var s = n[i],
                        a = t[s];
                    t[s] = function(n) {
                        var o = e.operation(r),
                            i = Array.prototype.slice.call(arguments, 1),
                            s = i.pop();
                        i.push((function(t) {
                            o.retry(t) || (t && (arguments[0] = o.mainError()), s.apply(this, arguments))
                        })), o.attempt((function() {
                            n.apply(t, i)
                        }))
                    }.bind(t, a), t[s].options = r
                }
            }
        },
        41960: function(t) {
            function e(t, e) {
                "boolean" === typeof e && (e = {
                    forever: e
                }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
            }
            t.exports = e, e.prototype.reset = function() {
                this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
            }, e.prototype.stop = function() {
                this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
            }, e.prototype.retry = function(t) {
                if (this._timeout && clearTimeout(this._timeout), !t) return !1;
                var e = (new Date).getTime();
                if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.push(t), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
                this._errors.push(t);
                var r = this._timeouts.shift();
                if (void 0 === r) {
                    if (!this._cachedTimeouts) return !1;
                    this._errors.splice(0, this._errors.length - 1), r = this._cachedTimeouts.slice(-1)
                }
                var n = this;
                return this._timer = setTimeout((function() {
                    n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout((function() {
                        n._operationTimeoutCb(n._attempts)
                    }), n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts)
                }), r), this._options.unref && this._timer.unref(), !0
            }, e.prototype.attempt = function(t, e) {
                this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb));
                var r = this;
                this._operationTimeoutCb && (this._timeout = setTimeout((function() {
                    r._operationTimeoutCb()
                }), r._operationTimeout)), this._operationStart = (new Date).getTime(), this._fn(this._attempts)
            }, e.prototype.try = function(t) {
                console.log("Using RetryOperation.try() is deprecated"), this.attempt(t)
            }, e.prototype.start = function(t) {
                console.log("Using RetryOperation.start() is deprecated"), this.attempt(t)
            }, e.prototype.start = e.prototype.try, e.prototype.errors = function() {
                return this._errors
            }, e.prototype.attempts = function() {
                return this._attempts
            }, e.prototype.mainError = function() {
                if (0 === this._errors.length) return null;
                for (var t = {}, e = null, r = 0, n = 0; n < this._errors.length; n++) {
                    var o = this._errors[n],
                        i = o.message,
                        s = (t[i] || 0) + 1;
                    t[i] = s, s >= r && (e = o, r = s)
                }
                return e
            }
        },
        20544: function(t) {
            "use strict";

            function e(t, e) {
                return t + r(e)
            }

            function r(t) {
                let e = t;
                return e -= e >> 1 & 1431655765, e = (858993459 & e) + (e >> 2 & 858993459), 16843009 * (e + (e >> 4) & 252645135) >> 24
            }

            function n(t, e) {
                return t[0] - e[0]
            }

            function o(t) {
                return t[1]
            }
            t.exports = class {
                constructor() {
                    this._bitArrays = [], this._data = [], this._length = 0, this._changedLength = !1, this._changedData = !1
                }
                set(t, e) {
                    let r = this._internalPositionFor(t, !1);
                    if (void 0 === e) - 1 !== r && (this._unsetInternalPos(r), this._unsetBit(t), this._changedLength = !0, this._changedData = !0);
                    else {
                        let n = !1; - 1 === r ? (r = this._data.length, this._setBit(t), this._changedData = !0) : n = !0, this._setInternalPos(r, t, e, n), this._changedLength = !0
                    }
                }
                unset(t) {
                    this.set(t, void 0)
                }
                get(t) {
                    this._sortData();
                    const e = this._internalPositionFor(t, !0);
                    if (-1 !== e) return this._data[e][1]
                }
                push(t) {
                    return this.set(this.length, t), this.length
                }
                get length() {
                    if (this._sortData(), this._changedLength) {
                        const t = this._data[this._data.length - 1];
                        this._length = t ? t[0] + 1 : 0, this._changedLength = !1
                    }
                    return this._length
                }
                forEach(t) {
                    let e = 0;
                    for (; e < this.length;) t(this.get(e), e, this), e++
                }
                map(t) {
                    let e = 0,
                        r = new Array(this.length);
                    for (; e < this.length;) r[e] = t(this.get(e), e, this), e++;
                    return r
                }
                reduce(t, e) {
                    let r = 0,
                        n = e;
                    for (; r < this.length;) {
                        n = t(n, this.get(r), r), r++
                    }
                    return n
                }
                find(t) {
                    let e, r, n = 0;
                    for (; n < this.length && !e;) r = this.get(n), e = t(r), n++;
                    return e ? r : void 0
                }
                _internalPositionFor(t, n) {
                    const o = this._bytePosFor(t, n);
                    if (o >= this._bitArrays.length) return -1;
                    const i = this._bitArrays[o],
                        s = t - 7 * o;
                    if (!((i & 1 << s) > 0)) return -1;
                    return this._bitArrays.slice(0, o).reduce(e, 0) + r(i & ~(4294967295 << s + 1)) - 1
                }
                _bytePosFor(t, e) {
                    const r = Math.floor(t / 7),
                        n = r + 1;
                    for (; !e && this._bitArrays.length < n;) this._bitArrays.push(0);
                    return r
                }
                _setBit(t) {
                    const e = this._bytePosFor(t, !1);
                    this._bitArrays[e] |= 1 << t - 7 * e
                }
                _unsetBit(t) {
                    const e = this._bytePosFor(t, !1);
                    this._bitArrays[e] &= ~(1 << t - 7 * e)
                }
                _setInternalPos(t, e, r, n) {
                    const o = this._data,
                        i = [e, r];
                    if (n) this._sortData(), o[t] = i;
                    else {
                        if (o.length)
                            if (o[o.length - 1][0] >= e) o.push(i);
                            else if (o[0][0] <= e) o.unshift(i);
                        else {
                            const t = Math.round(o.length / 2);
                            this._data = o.slice(0, t).concat(i).concat(o.slice(t))
                        } else this._data.push(i);
                        this._changedData = !0, this._changedLength = !0
                    }
                }
                _unsetInternalPos(t) {
                    this._data.splice(t, 1)
                }
                _sortData() {
                    this._changedData && this._data.sort(n), this._changedData = !1
                }
                bitField() {
                    const t = [];
                    let e, r = 8,
                        n = 0,
                        o = 0;
                    const i = this._bitArrays.slice();
                    for (; i.length || n;) {
                        0 === n && (e = i.shift(), n = 7);
                        const s = Math.min(n, r);
                        o |= (e & ~(255 << s)) << 8 - r, e >>>= s, n -= s, r -= s, r && (n || i.length) || (t.push(o), o = 0, r = 8)
                    }
                    for (var s = t.length - 1; s > 0; s--) {
                        if (0 !== t[s]) break;
                        t.pop()
                    }
                    return t
                }
                compactArray() {
                    return this._sortData(), this._data.map(o)
                }
            }
        },
        28230: function(t, e) {
            "use strict";

            function r(t, e, r) {
                void 0 === r && (r = !1), r && (e /= t, t = 1);
                var n, o = [],
                    i = 0,
                    s = 0,
                    a = function() {
                        var r = i + e,
                            c = Date.now();
                        if (c < r) return void 0 !== n && clearTimeout(n), void(n = setTimeout(a, r - c));
                        i = c, s = 0;
                        for (var u = 0, f = o.splice(0, t); u < f.length; u++) {
                            var l = f[u];
                            s++, l()
                        }
                        n = o.length ? setTimeout(a, e) : void 0
                    };
                return function(r) {
                    return new Promise((function(c, u) {
                        var f = function() {
                                return Promise.resolve().then(r).then(c).catch(u)
                            },
                            l = Date.now();
                        void 0 === n && l - i > e && (i = l, s = 0), s++ < t ? f() : (o.push(f), void 0 === n && (n = setTimeout(a, i + e - l)))
                    }))
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), t.exports = r, e.default = r
        },
        26988: function(t) {
            t.exports = function t(e, r) {
                var n, o = 0,
                    i = 0,
                    s = r = r || 0,
                    a = e.length;
                do {
                    if (s >= a || i > 49) throw t.bytes = 0, new RangeError("Could not decode varint");
                    n = e[s++], o += i < 28 ? (127 & n) << i : (127 & n) * Math.pow(2, i), i += 7
                } while (n >= 128);
                return t.bytes = s - r, o
            }
        },
        1312: function(t) {
            t.exports = function t(r, n, o) {
                if (Number.MAX_SAFE_INTEGER && r > Number.MAX_SAFE_INTEGER) throw t.bytes = 0, new RangeError("Could not encode varint");
                n = n || [];
                var i = o = o || 0;
                for (; r >= e;) n[o++] = 255 & r | 128, r /= 128;
                for (; - 128 & r;) n[o++] = 255 & r | 128, r >>>= 7;
                return n[o] = 0 | r, t.bytes = o - i + 1, n
            };
            var e = Math.pow(2, 31)
        },
        94676: function(t, e, r) {
            t.exports = {
                encode: r(1312),
                decode: r(26988),
                encodingLength: r(10082)
            }
        },
        10082: function(t) {
            var e = Math.pow(2, 7),
                r = Math.pow(2, 14),
                n = Math.pow(2, 21),
                o = Math.pow(2, 28),
                i = Math.pow(2, 35),
                s = Math.pow(2, 42),
                a = Math.pow(2, 49),
                c = Math.pow(2, 56),
                u = Math.pow(2, 63);
            t.exports = function(t) {
                return t < e ? 1 : t < r ? 2 : t < n ? 3 : t < o ? 4 : t < i ? 5 : t < s ? 6 : t < a ? 7 : t < c ? 8 : t < u ? 9 : 10
            }
        },
        31114: function(t, e, r) {
            "use strict";
            r.d(e, {
                kU: function() {
                    return l
                },
                Dp: function() {
                    return f
                },
                ET: function() {
                    return h
                }
            });
            var n = function(t, e) {
                    if (t.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                    for (var o = 0; o < t.length; o++) {
                        var i = t.charAt(o),
                            s = i.charCodeAt(0);
                        if (255 !== r[s]) throw new TypeError(i + " is ambiguous");
                        r[s] = o
                    }
                    var a = t.length,
                        c = t.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        f = Math.log(256) / Math.log(a);

                    function l(t) {
                        if ("string" !== typeof t) throw new TypeError("Expected String");
                        if (0 === t.length) return new Uint8Array;
                        var e = 0;
                        if (" " !== t[e]) {
                            for (var n = 0, o = 0; t[e] === c;) n++, e++;
                            for (var i = (t.length - e) * u + 1 >>> 0, s = new Uint8Array(i); t[e];) {
                                var f = r[t.charCodeAt(e)];
                                if (255 === f) return;
                                for (var l = 0, h = i - 1;
                                    (0 !== f || l < o) && -1 !== h; h--, l++) f += a * s[h] >>> 0, s[h] = f % 256 >>> 0, f = f / 256 >>> 0;
                                if (0 !== f) throw new Error("Non-zero carry");
                                o = l, e++
                            }
                            if (" " !== t[e]) {
                                for (var d = i - o; d !== i && 0 === s[d];) d++;
                                for (var p = new Uint8Array(n + (i - d)), y = n; d !== i;) p[y++] = s[d++];
                                return p
                            }
                        }
                    }
                    return {
                        encode: function(e) {
                            if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === e.length) return "";
                            for (var r = 0, n = 0, o = 0, i = e.length; o !== i && 0 === e[o];) o++, r++;
                            for (var s = (i - o) * f + 1 >>> 0, u = new Uint8Array(s); o !== i;) {
                                for (var l = e[o], h = 0, d = s - 1;
                                    (0 !== l || h < n) && -1 !== d; d--, h++) l += 256 * u[d] >>> 0, u[d] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                n = h, o++
                            }
                            for (var p = s - n; p !== s && 0 === u[p];) p++;
                            for (var y = c.repeat(r); p < s; ++p) y += t.charAt(u[p]);
                            return y
                        },
                        decodeUnsafe: l,
                        decode: function(t) {
                            var r = l(t);
                            if (r) return r;
                            throw new Error(`Non-${e} character`)
                        }
                    }
                },
                o = r(95934);
            class i {
                constructor(t, e, r) {
                    this.name = t, this.prefix = e, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class s {
                constructor(t, e, r) {
                    if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" === typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return c(this, t)
                }
            }
            class a {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return c(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const c = (t, e) => new a({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class u {
                constructor(t, e, r, n) {
                    this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = n, this.encoder = new i(t, e, r), this.decoder = new s(t, e, n)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const f = ({
                    name: t,
                    prefix: e,
                    encode: r,
                    decode: n
                }) => new u(t, e, r, n),
                l = ({
                    prefix: t,
                    name: e,
                    alphabet: r
                }) => {
                    const {
                        encode: i,
                        decode: s
                    } = n(r, e);
                    return f({
                        prefix: t,
                        name: e,
                        encode: i,
                        decode: t => (0, o.coerce)(s(t))
                    })
                },
                h = ({
                    name: t,
                    prefix: e,
                    bitsPerChar: r,
                    alphabet: n
                }) => f({
                    prefix: e,
                    name: t,
                    encode: t => ((t, e, r) => {
                        const n = "=" === e[e.length - 1],
                            o = (1 << r) - 1;
                        let i = "",
                            s = 0,
                            a = 0;
                        for (let c = 0; c < t.length; ++c)
                            for (a = a << 8 | t[c], s += 8; s > r;) s -= r, i += e[o & a >> s];
                        if (s && (i += e[o & a << r - s]), n)
                            for (; i.length * r & 7;) i += "=";
                        return i
                    })(t, n, r),
                    decode: e => ((t, e, r, n) => {
                        const o = {};
                        for (let f = 0; f < e.length; ++f) o[e[f]] = f;
                        let i = t.length;
                        for (;
                            "=" === t[i - 1];) --i;
                        const s = new Uint8Array(i * r / 8 | 0);
                        let a = 0,
                            c = 0,
                            u = 0;
                        for (let f = 0; f < i; ++f) {
                            const e = o[t[f]];
                            if (void 0 === e) throw new SyntaxError(`Non-${n} character`);
                            c = c << r | e, a += r, a >= 8 && (a -= 8, s[u++] = 255 & c >> a)
                        }
                        if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                        return s
                    })(e, n, r, t)
                })
        },
        22817: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                base32: function() {
                    return o
                },
                base32upper: function() {
                    return i
                },
                base32pad: function() {
                    return s
                },
                base32padupper: function() {
                    return a
                },
                base32hex: function() {
                    return c
                },
                base32hexupper: function() {
                    return u
                },
                base32hexpad: function() {
                    return f
                },
                base32hexpadupper: function() {
                    return l
                },
                base32z: function() {
                    return h
                }
            });
            var n = r(31114);
            const o = (0, n.ET)({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                i = (0, n.ET)({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                s = (0, n.ET)({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                a = (0, n.ET)({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                c = (0, n.ET)({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                u = (0, n.ET)({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                f = (0, n.ET)({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                l = (0, n.ET)({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                h = (0, n.ET)({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                })
        },
        99086: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                base58btc: function() {
                    return o
                },
                base58flickr: function() {
                    return i
                }
            });
            var n = r(31114);
            const o = (0, n.kU)({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                i = (0, n.kU)({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                })
        },
        95934: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                equals: function() {
                    return s
                },
                coerce: function() {
                    return a
                },
                isBinary: function() {
                    return c
                },
                fromHex: function() {
                    return i
                },
                toHex: function() {
                    return o
                },
                fromString: function() {
                    return u
                },
                toString: function() {
                    return f
                },
                empty: function() {
                    return n
                }
            });
            const n = new Uint8Array(0),
                o = t => t.reduce(((t, e) => t + e.toString(16).padStart(2, "0")), ""),
                i = t => {
                    const e = t.match(/../g);
                    return e ? new Uint8Array(e.map((t => parseInt(t, 16)))) : n
                },
                s = (t, e) => {
                    if (t === e) return !0;
                    if (t.byteLength !== e.byteLength) return !1;
                    for (let r = 0; r < t.byteLength; r++)
                        if (t[r] !== e[r]) return !1;
                    return !0
                },
                a = t => {
                    if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                    if (t instanceof ArrayBuffer) return new Uint8Array(t);
                    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                    throw new Error("Unknown type, must be binary type")
                },
                c = t => t instanceof ArrayBuffer || ArrayBuffer.isView(t),
                u = t => (new TextEncoder).encode(t),
                f = t => (new TextDecoder).decode(t)
        },
        81362: function(t, e, r) {
            "use strict";
            r.d(e, {
                k: function() {
                    return c
                }
            });
            var n = r(15216),
                o = r(28924),
                i = r(99086),
                s = r(22817),
                a = r(95934);
            class c {
                constructor(t, e, r, n) {
                    this.code = e, this.version = t, this.multihash = r, this.bytes = n, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: g,
                        byteLength: g,
                        code: w,
                        version: w,
                        multihash: w,
                        bytes: w,
                        _baseCache: g,
                        asCID: g
                    })
                }
                toV0() {
                    switch (this.version) {
                        case 0:
                            return this;
                        default:
                            {
                                const {
                                    code: t,
                                    multihash: e
                                } = this;
                                if (t !== h) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                                if (e.code !== d) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                                return c.createV0(e)
                            }
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                const {
                                    code: t,
                                    digest: e
                                } = this.multihash,
                                r = o.Ue(t, e);
                                return c.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(t) {
                    return t && this.code === t.code && this.version === t.version && o.fS(this.multihash, t.multihash)
                }
                toString(t) {
                    const {
                        bytes: e,
                        version: r,
                        _baseCache: n
                    } = this;
                    switch (r) {
                        case 0:
                            return f(e, n, t || i.base58btc.encoder);
                        default:
                            return l(e, n, t || s.base32.encoder)
                    }
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(t) {
                    return b(/^0\.0/, m), !(!t || !t[y] && t.asCID !== t)
                }
                get toBaseEncodedString() {
                    throw new Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw new Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw new Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw new Error('"prefix" property is deprecated')
                }
                static asCID(t) {
                    if (t instanceof c) return t;
                    if (null != t && t.asCID === t) {
                        const {
                            version: e,
                            code: r,
                            multihash: n,
                            bytes: o
                        } = t;
                        return new c(e, r, n, o || p(e, r, n.bytes))
                    }
                    if (null != t && !0 === t[y]) {
                        const {
                            version: e,
                            multihash: r,
                            code: n
                        } = t, i = o.Jx(r);
                        return c.create(e, n, i)
                    }
                    return null
                }
                static create(t, e, r) {
                    if ("number" !== typeof e) throw new Error("String codecs are no longer supported");
                    switch (t) {
                        case 0:
                            if (e !== h) throw new Error(`Version 0 CID must use dag-pb (code: ${h}) block encoding`);
                            return new c(t, e, r, r.bytes);
                        case 1:
                            {
                                const n = p(t, e, r.bytes);
                                return new c(t, e, r, n)
                            }
                        default:
                            throw new Error("Invalid version")
                    }
                }
                static createV0(t) {
                    return c.create(0, h, t)
                }
                static createV1(t, e) {
                    return c.create(1, t, e)
                }
                static decode(t) {
                    const [e, r] = c.decodeFirst(t);
                    if (r.length) throw new Error("Incorrect length");
                    return e
                }
                static decodeFirst(t) {
                    const e = c.inspectBytes(t),
                        r = e.size - e.multihashSize,
                        n = (0, a.coerce)(t.subarray(r, r + e.multihashSize));
                    if (n.byteLength !== e.multihashSize) throw new Error("Incorrect length");
                    const i = n.subarray(e.multihashSize - e.digestSize),
                        s = new o.zZ(e.multihashCode, e.digestSize, i, n);
                    return [0 === e.version ? c.createV0(s) : c.createV1(e.codec, s), t.subarray(e.size)]
                }
                static inspectBytes(t) {
                    let e = 0;
                    const r = () => {
                        const [r, o] = n.Jx(t.subarray(e));
                        return e += o, r
                    };
                    let o = r(),
                        i = h;
                    if (18 === o ? (o = 0, e = 0) : 1 === o && (i = r()), 0 !== o && 1 !== o) throw new RangeError(`Invalid CID version ${o}`);
                    const s = e,
                        a = r(),
                        c = r(),
                        u = e + c;
                    return {
                        version: o,
                        codec: i,
                        multihashCode: a,
                        digestSize: c,
                        multihashSize: u - s,
                        size: u
                    }
                }
                static parse(t, e) {
                    const [r, n] = u(t, e), o = c.decode(n);
                    return o._baseCache.set(r, t), o
                }
            }
            const u = (t, e) => {
                    switch (t[0]) {
                        case "Q":
                            {
                                const r = e || i.base58btc;
                                return [i.base58btc.prefix, r.decode(`${i.base58btc.prefix}${t}`)]
                            }
                        case i.base58btc.prefix:
                            {
                                const r = e || i.base58btc;
                                return [i.base58btc.prefix, r.decode(t)]
                            }
                        case s.base32.prefix:
                            {
                                const r = e || s.base32;
                                return [s.base32.prefix, r.decode(t)]
                            }
                        default:
                            if (null == e) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [t[0], e.decode(t)]
                    }
                },
                f = (t, e, r) => {
                    const {
                        prefix: n
                    } = r;
                    if (n !== i.base58btc.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    const o = e.get(n);
                    if (null == o) {
                        const o = r.encode(t).slice(1);
                        return e.set(n, o), o
                    }
                    return o
                },
                l = (t, e, r) => {
                    const {
                        prefix: n
                    } = r, o = e.get(n);
                    if (null == o) {
                        const o = r.encode(t);
                        return e.set(n, o), o
                    }
                    return o
                },
                h = 112,
                d = 18,
                p = (t, e, r) => {
                    const o = n.P$(t),
                        i = o + n.P$(e),
                        s = new Uint8Array(i + r.byteLength);
                    return n.mL(t, s, 0), n.mL(e, s, o), s.set(r, i), s
                },
                y = Symbol.for("@ipld/js-cid/CID"),
                w = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                g = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                b = (t, e) => {
                    if (!t.test("0.0.0-dev")) throw new Error(e);
                    console.warn(e)
                },
                m = "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n"
        },
        96945: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                name: function() {
                    return o
                },
                code: function() {
                    return i
                },
                encode: function() {
                    return s
                },
                decode: function() {
                    return a
                }
            });
            var n = r(95934);
            const o = "raw",
                i = 85,
                s = t => (0, n.coerce)(t),
                a = t => (0, n.coerce)(t)
        },
        28924: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ue: function() {
                    return i
                },
                Jx: function() {
                    return s
                },
                fS: function() {
                    return a
                },
                zZ: function() {
                    return c
                }
            });
            var n = r(95934),
                o = r(15216);
            const i = (t, e) => {
                    const r = e.byteLength,
                        n = o.P$(t),
                        i = n + o.P$(r),
                        s = new Uint8Array(i + r);
                    return o.mL(t, s, 0), o.mL(r, s, n), s.set(e, i), new c(t, r, e, s)
                },
                s = t => {
                    const e = (0, n.coerce)(t),
                        [r, i] = o.Jx(e),
                        [s, a] = o.Jx(e.subarray(i)),
                        u = e.subarray(i + a);
                    if (u.byteLength !== s) throw new Error("Incorrect length");
                    return new c(r, s, u, e)
                },
                a = (t, e) => t === e || t.code === e.code && t.size === e.size && (0, n.equals)(t.bytes, e.bytes);
            class c {
                constructor(t, e, r, n) {
                    this.code = t, this.size = e, this.digest = r, this.bytes = n
                }
            }
        },
        7225: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return o
                }
            });
            var n = r(28924);
            const o = ({
                name: t,
                code: e,
                encode: r
            }) => new i(t, e, r);
            class i {
                constructor(t, e, r) {
                    this.name = t, this.code = e, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t);
                        return e instanceof Uint8Array ? n.Ue(this.code, e) : e.then((t => n.Ue(this.code, t)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
        },
        56155: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                sha256: function() {
                    return i
                },
                sha512: function() {
                    return s
                }
            });
            var n = r(7225);
            const o = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                i = (0, n.D)({
                    name: "sha2-256",
                    code: 18,
                    encode: o("SHA-256")
                }),
                s = (0, n.D)({
                    name: "sha2-512",
                    code: 19,
                    encode: o("SHA-512")
                })
        },
        87232: function(t, e, r) {
            "use strict";
            r.d(e, {
                k0: function() {
                    return n.k
                },
                aI: function() {
                    return o
                }
            });
            var n = r(81362),
                o = (r(15216), r(95934));
            r(7225), r(28924)
        },
        15216: function(t, e, r) {
            "use strict";
            r.d(e, {
                Jx: function() {
                    return w
                },
                mL: function() {
                    return g
                },
                P$: function() {
                    return b
                }
            });
            var n = function t(e, r, n) {
                    r = r || [];
                    var i = n = n || 0;
                    for (; e >= o;) r[n++] = 255 & e | 128, e /= 128;
                    for (; - 128 & e;) r[n++] = 255 & e | 128, e >>>= 7;
                    return r[n] = 0 | e, t.bytes = n - i + 1, r
                },
                o = Math.pow(2, 31);
            var i = function t(e, r) {
                var n, o = 0,
                    i = 0,
                    s = r = r || 0,
                    a = e.length;
                do {
                    if (s >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
                    n = e[s++], o += i < 28 ? (127 & n) << i : (127 & n) * Math.pow(2, i), i += 7
                } while (n >= 128);
                return t.bytes = s - r, o
            };
            var s = Math.pow(2, 7),
                a = Math.pow(2, 14),
                c = Math.pow(2, 21),
                u = Math.pow(2, 28),
                f = Math.pow(2, 35),
                l = Math.pow(2, 42),
                h = Math.pow(2, 49),
                d = Math.pow(2, 56),
                p = Math.pow(2, 63),
                y = {
                    encode: n,
                    decode: i,
                    encodingLength: function(t) {
                        return t < s ? 1 : t < a ? 2 : t < c ? 3 : t < u ? 4 : t < f ? 5 : t < l ? 6 : t < h ? 7 : t < d ? 8 : t < p ? 9 : 10
                    }
                };
            const w = (t, e = 0) => [y.decode(t, e), y.decode.bytes],
                g = (t, e, r = 0) => (y.encode(t, e, r), e),
                b = t => y.encodingLength(t)
        },
        42660: function(t, e, r) {
            "use strict";
            r.d(e, {
                j3: function() {
                    return jn
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                code: function() {
                    return he
                },
                decode: function() {
                    return pe
                },
                encode: function() {
                    return de
                },
                name: function() {
                    return le
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                code: function() {
                    return Re
                },
                createLink: function() {
                    return Pe
                },
                createNode: function() {
                    return Le
                },
                decode: function() {
                    return Fe
                },
                encode: function() {
                    return Me
                },
                name: function() {
                    return je
                },
                prepare: function() {
                    return Oe
                },
                validate: function() {
                    return Ue
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                abortedError: function() {
                    return un
                },
                notFoundError: function() {
                    return cn
                }
            });
            r(34155);
            Symbol("TIMEOUT");

            function s(t) {
                if ("function" === typeof t.next) return t;
                if ("function" === typeof t[Symbol.iterator]) return t[Symbol.iterator]();
                if ("function" === typeof t[Symbol.asyncIterator]) return t[Symbol.asyncIterator]();
                throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols')
            }

            function a() {
                let t, e;
                return {
                    promise: new Promise(((r, n) => {
                        e = r, t = n
                    })),
                    reject: t,
                    resolve: e
                }
            }

            function c(t, e, r) {
                const n = s(r),
                    o = [],
                    i = [];
                let c = !1,
                    u = !1,
                    f = 0,
                    l = null;

                function h() {
                    for (; i.length > 0 && o.length > 0;) {
                        const {
                            resolve: t
                        } = i.shift();
                        t({
                            done: !1,
                            value: o.shift()
                        })
                    }
                    for (; i.length > 0 && 0 === f && c;) {
                        const {
                            resolve: t,
                            reject: e
                        } = i.shift();
                        l ? (e(l), l = null) : t({
                            done: !0,
                            value: void 0
                        })
                    }
                }
                async function d() {
                    if (c) h();
                    else if (!u && !(f + o.length >= t)) {
                        u = !0, f++;
                        try {
                            const {
                                done: t,
                                value: r
                            } = await n.next();
                            t ? (c = !0, f--, h()) : async function(t) {
                                try {
                                    const r = await e(t);
                                    o.push(r)
                                } catch (r) {
                                    c = !0, l = r
                                }
                                f--, h(), d()
                            }(r)
                        } catch (r) {
                            c = !0, f--, l = r, h()
                        }
                        u = !1, d()
                    }
                }
                const p = {
                    next: async function() {
                        if (0 === o.length) {
                            const t = a();
                            return i.push(t), d(), t.promise
                        }
                        const t = o.shift();
                        return d(), {
                            done: !1,
                            value: t
                        }
                    },
                    [Symbol.asyncIterator]: () => p
                };
                return p
            }

            function u(t, e, r) {
                return void 0 === e ? (e, r) => r ? u(t, e, r) : u(t, e) : void 0 === r ? r => u(t, e, r) : c(t, e, r)
            }
            var f = r(42693),
                l = r(94676),
                h = r(81362),
                d = r(28924);
            const p = ["string", "number", "bigint", "symbol"],
                y = ["Function", "Generator", "AsyncGenerator", "GeneratorFunction", "AsyncGeneratorFunction", "AsyncFunction", "Observable", "Array", "Buffer", "Object", "RegExp", "Date", "Error", "Map", "Set", "WeakMap", "WeakSet", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Promise", "URL", "HTMLElement", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"];

            function w(t) {
                if (null === t) return "null";
                if (void 0 === t) return "undefined";
                if (!0 === t || !1 === t) return "boolean";
                const e = typeof t;
                if (p.includes(e)) return e;
                if ("function" === e) return "Function";
                if (Array.isArray(t)) return "Array";
                if (function(t) {
                        return t && t.constructor && t.constructor.isBuffer && t.constructor.isBuffer.call(null, t)
                    }(t)) return "Buffer";
                const r = function(t) {
                    const e = Object.prototype.toString.call(t).slice(8, -1);
                    if (y.includes(e)) return e;
                    return
                }(t);
                return r || "Object"
            }
            class g {
                constructor(t, e, r) {
                    this.major = t, this.majorEncoded = t << 5, this.name = e, this.terminal = r
                }
                toString() {
                    return `Type[${this.major}].${this.name}`
                }
                compare(t) {
                    return this.major < t.major ? -1 : this.major > t.major ? 1 : 0
                }
            }
            g.uint = new g(0, "uint", !0), g.negint = new g(1, "negint", !0), g.bytes = new g(2, "bytes", !0), g.string = new g(3, "string", !0), g.array = new g(4, "array", !1), g.map = new g(5, "map", !1), g.tag = new g(6, "tag", !1), g.float = new g(7, "float", !0), g.false = new g(7, "false", !0), g.true = new g(7, "true", !0), g.null = new g(7, "null", !0), g.undefined = new g(7, "undefined", !0), g.break = new g(7, "break", !0);
            class b {
                constructor(t, e, r) {
                    this.type = t, this.value = e, this.encodedLength = r, this.encodedBytes = void 0, this.byteValue = void 0
                }
                toString() {
                    return `Token[${this.type}].${this.value}`
                }
            }
            const m = globalThis.process && !globalThis.process.browser && globalThis.Buffer && "function" === typeof globalThis.Buffer.isBuffer,
                v = new TextDecoder,
                _ = new TextEncoder;

            function k(t) {
                return m && globalThis.Buffer.isBuffer(t)
            }

            function E(t) {
                return t instanceof Uint8Array ? k(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t : Uint8Array.from(t)
            }
            const A = m ? (t, e, r) => r - e > 64 ? globalThis.Buffer.from(t.subarray(e, r)).toString("utf8") : I(t, e, r) : (t, e, r) => r - e > 64 ? v.decode(t.subarray(e, r)) : I(t, e, r),
                x = m ? t => t.length > 64 ? globalThis.Buffer.from(t) : D(t) : t => t.length > 64 ? _.encode(t) : D(t),
                S = t => Uint8Array.from(t),
                T = m ? (t, e, r) => k(t) ? new Uint8Array(t.subarray(e, r)) : t.slice(e, r) : (t, e, r) => t.slice(e, r),
                B = m ? (t, e) => (t = t.map((t => t instanceof Uint8Array ? t : globalThis.Buffer.from(t))), E(globalThis.Buffer.concat(t, e))) : (t, e) => {
                    const r = new Uint8Array(e);
                    let n = 0;
                    for (let o of t) n + o.length > r.length && (o = o.subarray(0, r.length - n)), r.set(o, n), n += o.length;
                    return r
                },
                C = m ? t => globalThis.Buffer.allocUnsafe(t) : t => new Uint8Array(t);

            function D(t, e = 1 / 0) {
                let r;
                const n = t.length;
                let o = null;
                const i = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function I(t, e, r) {
                const n = [];
                for (; e < r;) {
                    const o = t[e];
                    let i = null,
                        s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (e + s <= r) {
                        let r, n, a, c;
                        switch (s) {
                            case 1:
                                o < 128 && (i = o);
                                break;
                            case 2:
                                r = t[e + 1], 128 === (192 & r) && (c = (31 & o) << 6 | 63 & r, c > 127 && (i = c));
                                break;
                            case 3:
                                r = t[e + 1], n = t[e + 2], 128 === (192 & r) && 128 === (192 & n) && (c = (15 & o) << 12 | (63 & r) << 6 | 63 & n, c > 2047 && (c < 55296 || c > 57343) && (i = c));
                                break;
                            case 4:
                                r = t[e + 1], n = t[e + 2], a = t[e + 3], 128 === (192 & r) && 128 === (192 & n) && 128 === (192 & a) && (c = (15 & o) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, c > 65535 && c < 1114112 && (i = c))
                        }
                    }
                    null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), e += s
                }
                return function(t) {
                    const e = t.length;
                    if (e <= N) return String.fromCharCode.apply(String, t);
                    let r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += N));
                    return r
                }(n)
            }
            const N = 4096;
            class z {
                constructor(t = 256) {
                    this.chunkSize = t, this.cursor = 0, this.maxCursor = -1, this.chunks = [], this._initReuseChunk = null
                }
                reset() {
                    this.cursor = 0, this.maxCursor = -1, this.chunks.length && (this.chunks = []), null !== this._initReuseChunk && (this.chunks.push(this._initReuseChunk), this.maxCursor = this._initReuseChunk.length - 1)
                }
                push(t) {
                    let e = this.chunks[this.chunks.length - 1];
                    if (this.cursor + t.length <= this.maxCursor + 1) {
                        const r = e.length - (this.maxCursor - this.cursor) - 1;
                        e.set(t, r)
                    } else {
                        if (e) {
                            const t = e.length - (this.maxCursor - this.cursor) - 1;
                            t < e.length && (this.chunks[this.chunks.length - 1] = e.subarray(0, t), this.maxCursor = this.cursor - 1)
                        }
                        t.length < 64 && t.length < this.chunkSize ? (e = C(this.chunkSize), this.chunks.push(e), this.maxCursor += e.length, null === this._initReuseChunk && (this._initReuseChunk = e), e.set(t, 0)) : (this.chunks.push(t), this.maxCursor += t.length)
                    }
                    this.cursor += t.length
                }
                toBytes(t = !1) {
                    let e;
                    if (1 === this.chunks.length) {
                        const r = this.chunks[0];
                        t && this.cursor > r.length / 2 ? (e = this.cursor === r.length ? r : r.subarray(0, this.cursor), this._initReuseChunk = null, this.chunks = []) : e = T(r, 0, this.cursor)
                    } else e = B(this.chunks, this.cursor);
                    return t && this.reset(), e
                }
            }
            const O = [];

            function U(t, e, r) {
                if (t.length - e < r) throw new Error("CBOR decode error: not enough data for type")
            }
            O[23] = 1, O[24] = 2, O[25] = 3, O[26] = 5, O[27] = 9;
            const L = [24, 256, 65536, 4294967296, BigInt("18446744073709551616")];

            function P(t, e, r) {
                U(t, e, 1);
                const n = t[e];
                if (!0 === r.strict && n < L[0]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                return n
            }

            function j(t, e, r) {
                U(t, e, 2);
                const n = t[e] << 8 | t[e + 1];
                if (!0 === r.strict && n < L[1]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                return n
            }

            function R(t, e, r) {
                U(t, e, 4);
                const n = 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
                if (!0 === r.strict && n < L[2]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                return n
            }

            function M(t, e, r) {
                U(t, e, 8);
                const n = 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3],
                    o = 16777216 * t[e + 4] + (t[e + 5] << 16) + (t[e + 6] << 8) + t[e + 7],
                    i = (BigInt(n) << BigInt(32)) + BigInt(o);
                if (!0 === r.strict && i < L[3]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");
                if (i <= Number.MAX_SAFE_INTEGER) return Number(i);
                if (!0 === r.allowBigInt) return i;
                throw new Error("CBOR decode error: integers outside of the safe integer range are not supported")
            }

            function F(t, e) {
                return H(t, 0, e.value)
            }

            function H(t, e, r) {
                if (r < L[0]) {
                    const n = Number(r);
                    t.push([e | n])
                } else if (r < L[1]) {
                    const n = Number(r);
                    t.push([24 | e, n])
                } else if (r < L[2]) {
                    const n = Number(r);
                    t.push([25 | e, n >>> 8, 255 & n])
                } else if (r < L[3]) {
                    const n = Number(r);
                    t.push([26 | e, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n])
                } else {
                    const n = BigInt(r);
                    if (!(n < L[4])) throw new Error("CBOR decode error: encountered BigInt larger than allowable range"); {
                        const r = [27 | e, 0, 0, 0, 0, 0, 0, 0];
                        let o = Number(n & BigInt(4294967295)),
                            i = Number(n >> BigInt(32) & BigInt(4294967295));
                        r[8] = 255 & o, o >>= 8, r[7] = 255 & o, o >>= 8, r[6] = 255 & o, o >>= 8, r[5] = 255 & o, r[4] = 255 & i, i >>= 8, r[3] = 255 & i, i >>= 8, r[2] = 255 & i, i >>= 8, r[1] = 255 & i, t.push(r)
                    }
                }
            }
            F.encodedSize = function(t) {
                return H.encodedSize(t.value)
            }, H.encodedSize = function(t) {
                return t < L[0] ? 1 : t < L[1] ? 2 : t < L[2] ? 3 : t < L[3] ? 5 : 9
            }, F.compareTokens = function(t, e) {
                return t.value < e.value ? -1 : t.value > e.value ? 1 : 0
            };
            const V = BigInt(-1),
                $ = BigInt(1);

            function W(t, e) {
                const r = e.value,
                    n = "bigint" === typeof r ? r * V - $ : -1 * r - 1;
                H(t, e.type.majorEncoded, n)
            }

            function J(t, e, r, n) {
                U(t, e, r + n);
                const o = T(t, e + r, e + r + n);
                return new b(g.bytes, o, r + n)
            }

            function G(t, e, r, n) {
                return J(t, e, 1, r)
            }

            function q(t) {
                return void 0 === t.encodedBytes && (t.encodedBytes = t.type === g.string ? x(t.value) : t.value), t.encodedBytes
            }

            function Z(t, e) {
                const r = q(e);
                H(t, e.type.majorEncoded, r.length), t.push(r)
            }

            function K(t, e, r, n, o) {
                const i = r + n;
                U(t, e, i);
                const s = new b(g.string, A(t, e + r, e + i), i);
                return !0 === o.retainStringBytes && (s.byteValue = T(t, e + r, e + i)), s
            }

            function X(t, e, r, n) {
                return K(t, e, 1, r, n)
            }
            W.encodedSize = function(t) {
                const e = t.value,
                    r = "bigint" === typeof e ? e * V - $ : -1 * e - 1;
                return r < L[0] ? 1 : r < L[1] ? 2 : r < L[2] ? 3 : r < L[3] ? 5 : 9
            }, W.compareTokens = function(t, e) {
                return t.value < e.value ? 1 : t.value > e.value ? -1 : 0
            }, Z.encodedSize = function(t) {
                const e = q(t);
                return H.encodedSize(e.length) + e.length
            }, Z.compareTokens = function(t, e) {
                return r = q(t), n = q(e), r.length < n.length ? -1 : r.length > n.length ? 1 : function(t, e) {
                    if (k(t) && k(e)) return t.compare(e);
                    for (let r = 0; r < t.length; r++)
                        if (t[r] !== e[r]) return t[r] < e[r] ? -1 : 1;
                    return 0
                }(r, n);
                var r, n
            };
            const Y = Z;

            function Q(t, e, r, n) {
                return new b(g.array, n, r)
            }

            function tt(t, e, r, n) {
                return Q(0, 0, 1, r)
            }

            function et(t, e) {
                H(t, g.array.majorEncoded, e.value)
            }

            function rt(t, e, r, n) {
                return new b(g.map, n, r)
            }

            function nt(t, e, r, n) {
                return rt(0, 0, 1, r)
            }

            function ot(t, e) {
                H(t, g.map.majorEncoded, e.value)
            }

            function it(t, e, r, n) {
                return new b(g.tag, r, 1)
            }

            function st(t, e) {
                H(t, g.tag.majorEncoded, e.value)
            }
            et.compareTokens = F.compareTokens, et.encodedSize = function(t) {
                return H.encodedSize(t.value)
            }, ot.compareTokens = F.compareTokens, ot.encodedSize = function(t) {
                return H.encodedSize(t.value)
            }, st.compareTokens = F.compareTokens, st.encodedSize = function(t) {
                return H.encodedSize(t.value)
            };

            function at(t, e, r) {
                if (r) {
                    if (!1 === r.allowNaN && Number.isNaN(t)) throw new Error("CBOR decode error: NaN values are not supported");
                    if (!1 === r.allowInfinity && (t === 1 / 0 || t === -1 / 0)) throw new Error("CBOR decode error: Infinity values are not supported")
                }
                return new b(g.float, t, e)
            }

            function ct(t, e, r) {
                const n = e.value;
                if (!1 === n) t.push([20 | g.float.majorEncoded]);
                else if (!0 === n) t.push([21 | g.float.majorEncoded]);
                else if (null === n) t.push([22 | g.float.majorEncoded]);
                else if (void 0 === n) t.push([23 | g.float.majorEncoded]);
                else {
                    let e, i = !1;
                    r && !0 === r.float64 || (ht(n), e = dt(lt, 1), n === e || Number.isNaN(n) ? (lt[0] = 249, t.push(lt.slice(0, 3)), i = !0) : (pt(n), e = yt(lt, 1), n === e && (lt[0] = 250, t.push(lt.slice(0, 5)), i = !0))), i || (o = n, ft.setFloat64(0, o, !1), e = wt(lt, 1), lt[0] = 251, t.push(lt.slice(0, 9)))
                }
                var o
            }
            ct.encodedSize = function(t, e) {
                const r = t.value;
                if (!1 === r || !0 === r || null === r || void 0 === r) return 1;
                if (!e || !0 !== e.float64) {
                    ht(r);
                    let t = dt(lt, 1);
                    if (r === t || Number.isNaN(r)) return 3;
                    if (pt(r), t = yt(lt, 1), r === t) return 5
                }
                return 9
            };
            const ut = new ArrayBuffer(9),
                ft = new DataView(ut, 1),
                lt = new Uint8Array(ut, 0);

            function ht(t) {
                if (t === 1 / 0) ft.setUint16(0, 31744, !1);
                else if (t === -1 / 0) ft.setUint16(0, 64512, !1);
                else if (Number.isNaN(t)) ft.setUint16(0, 32256, !1);
                else {
                    ft.setFloat32(0, t);
                    const e = ft.getUint32(0),
                        r = (2139095040 & e) >> 23,
                        n = 8388607 & e;
                    if (255 === r) ft.setUint16(0, 31744, !1);
                    else if (0 === r) ft.setUint16(0, (2147483648 & t) >> 16 | n >> 13, !1);
                    else {
                        const t = r - 127;
                        t < -24 ? ft.setUint16(0, 0) : t < -14 ? ft.setUint16(0, (2147483648 & e) >> 16 | 1 << 24 + t, !1) : ft.setUint16(0, (2147483648 & e) >> 16 | t + 15 << 10 | n >> 13, !1)
                    }
                }
            }

            function dt(t, e) {
                if (t.length - e < 2) throw new Error("CBOR decode error: not enough data for float16");
                const r = (t[e] << 8) + t[e + 1];
                if (31744 === r) return 1 / 0;
                if (64512 === r) return -1 / 0;
                if (32256 === r) return NaN;
                const n = r >> 10 & 31,
                    o = 1023 & r;
                let i;
                return i = 0 === n ? o * 2 ** -24 : 31 !== n ? (o + 1024) * 2 ** (n - 25) : 0 === o ? 1 / 0 : NaN, 32768 & r ? -i : i
            }

            function pt(t) {
                ft.setFloat32(0, t, !1)
            }

            function yt(t, e) {
                if (t.length - e < 4) throw new Error("CBOR decode error: not enough data for float32");
                const r = (t.byteOffset || 0) + e;
                return new DataView(t.buffer, r, 4).getFloat32(0, !1)
            }

            function wt(t, e) {
                if (t.length - e < 8) throw new Error("CBOR decode error: not enough data for float64");
                const r = (t.byteOffset || 0) + e;
                return new DataView(t.buffer, r, 8).getFloat64(0, !1)
            }

            function gt(t, e, r) {
                throw new Error(`CBOR decode error: encountered invalid minor (${r}) for major ${t[e]>>>5}`)
            }

            function bt(t) {
                return () => {
                    throw new Error(`CBOR decode error: ${t}`)
                }
            }
            ct.compareTokens = F.compareTokens;
            const mt = [];
            for (let $n = 0; $n <= 23; $n++) mt[$n] = gt;
            mt[24] = function(t, e, r, n) {
                return new b(g.uint, P(t, e + 1, n), 2)
            }, mt[25] = function(t, e, r, n) {
                return new b(g.uint, j(t, e + 1, n), 3)
            }, mt[26] = function(t, e, r, n) {
                return new b(g.uint, R(t, e + 1, n), 5)
            }, mt[27] = function(t, e, r, n) {
                return new b(g.uint, M(t, e + 1, n), 9)
            }, mt[28] = gt, mt[29] = gt, mt[30] = gt, mt[31] = gt;
            for (let $n = 32; $n <= 55; $n++) mt[$n] = gt;
            mt[56] = function(t, e, r, n) {
                return new b(g.negint, -1 - P(t, e + 1, n), 2)
            }, mt[57] = function(t, e, r, n) {
                return new b(g.negint, -1 - j(t, e + 1, n), 3)
            }, mt[58] = function(t, e, r, n) {
                return new b(g.negint, -1 - R(t, e + 1, n), 5)
            }, mt[59] = function(t, e, r, n) {
                const o = M(t, e + 1, n);
                if ("bigint" !== typeof o) {
                    const t = -1 - o;
                    if (t >= Number.MIN_SAFE_INTEGER) return new b(g.negint, t, 9)
                }
                if (!0 !== n.allowBigInt) throw new Error("CBOR decode error: integers outside of the safe integer range are not supported");
                return new b(g.negint, V - BigInt(o), 9)
            }, mt[60] = gt, mt[61] = gt, mt[62] = gt, mt[63] = gt;
            for (let $n = 64; $n <= 87; $n++) mt[$n] = G;
            mt[88] = function(t, e, r, n) {
                return J(t, e, 2, P(t, e + 1, n))
            }, mt[89] = function(t, e, r, n) {
                return J(t, e, 3, j(t, e + 1, n))
            }, mt[90] = function(t, e, r, n) {
                return J(t, e, 5, R(t, e + 1, n))
            }, mt[91] = function(t, e, r, n) {
                const o = M(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer bytes lengths not supported");
                return J(t, e, 9, o)
            }, mt[92] = gt, mt[93] = gt, mt[94] = gt, mt[95] = bt("indefinite length bytes/strings are not supported");
            for (let $n = 96; $n <= 119; $n++) mt[$n] = X;
            mt[120] = function(t, e, r, n) {
                return K(t, e, 2, P(t, e + 1, n), n)
            }, mt[121] = function(t, e, r, n) {
                return K(t, e, 3, j(t, e + 1, n), n)
            }, mt[122] = function(t, e, r, n) {
                return K(t, e, 5, R(t, e + 1, n), n)
            }, mt[123] = function(t, e, r, n) {
                const o = M(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer string lengths not supported");
                return K(t, e, 9, o, n)
            }, mt[124] = gt, mt[125] = gt, mt[126] = gt, mt[127] = bt("indefinite length bytes/strings are not supported");
            for (let $n = 128; $n <= 151; $n++) mt[$n] = tt;
            mt[152] = function(t, e, r, n) {
                return Q(0, 0, 2, P(t, e + 1, n))
            }, mt[153] = function(t, e, r, n) {
                return Q(0, 0, 3, j(t, e + 1, n))
            }, mt[154] = function(t, e, r, n) {
                return Q(0, 0, 5, R(t, e + 1, n))
            }, mt[155] = function(t, e, r, n) {
                const o = M(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer array lengths not supported");
                return Q(0, 0, 9, o)
            }, mt[156] = gt, mt[157] = gt, mt[158] = gt, mt[159] = function(t, e, r, n) {
                if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed");
                return Q(0, 0, 1, 1 / 0)
            };
            for (let $n = 160; $n <= 183; $n++) mt[$n] = nt;
            mt[184] = function(t, e, r, n) {
                return rt(0, 0, 2, P(t, e + 1, n))
            }, mt[185] = function(t, e, r, n) {
                return rt(0, 0, 3, j(t, e + 1, n))
            }, mt[186] = function(t, e, r, n) {
                return rt(0, 0, 5, R(t, e + 1, n))
            }, mt[187] = function(t, e, r, n) {
                const o = M(t, e + 1, n);
                if ("bigint" === typeof o) throw new Error("CBOR decode error: 64-bit integer map lengths not supported");
                return rt(0, 0, 9, o)
            }, mt[188] = gt, mt[189] = gt, mt[190] = gt, mt[191] = function(t, e, r, n) {
                if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed");
                return rt(0, 0, 1, 1 / 0)
            };
            for (let $n = 192; $n <= 215; $n++) mt[$n] = it;
            mt[216] = function(t, e, r, n) {
                return new b(g.tag, P(t, e + 1, n), 2)
            }, mt[217] = function(t, e, r, n) {
                return new b(g.tag, j(t, e + 1, n), 3)
            }, mt[218] = function(t, e, r, n) {
                return new b(g.tag, R(t, e + 1, n), 5)
            }, mt[219] = function(t, e, r, n) {
                return new b(g.tag, M(t, e + 1, n), 9)
            }, mt[220] = gt, mt[221] = gt, mt[222] = gt, mt[223] = gt;
            for (let $n = 224; $n <= 243; $n++) mt[$n] = bt("simple values are not supported");
            mt[244] = gt, mt[245] = gt, mt[246] = gt, mt[247] = function(t, e, r, n) {
                if (!1 === n.allowUndefined) throw new Error("CBOR decode error: undefined values are not supported");
                return !0 === n.coerceUndefinedToNull ? new b(g.null, null, 1) : new b(g.undefined, void 0, 1)
            }, mt[248] = bt("simple values are not supported"), mt[249] = function(t, e, r, n) {
                return at(dt(t, e + 1), 3, n)
            }, mt[250] = function(t, e, r, n) {
                return at(yt(t, e + 1), 5, n)
            }, mt[251] = function(t, e, r, n) {
                return at(wt(t, e + 1), 9, n)
            }, mt[252] = gt, mt[253] = gt, mt[254] = gt, mt[255] = function(t, e, r, n) {
                if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed");
                return new b(g.break, void 0, 1)
            };
            const vt = [];
            for (let $n = 0; $n < 24; $n++) vt[$n] = new b(g.uint, $n, 1);
            for (let $n = -1; $n >= -24; $n--) vt[31 - $n] = new b(g.negint, $n, 1);
            vt[64] = new b(g.bytes, new Uint8Array(0), 1), vt[96] = new b(g.string, "", 1), vt[128] = new b(g.array, 0, 1), vt[160] = new b(g.map, 0, 1), vt[244] = new b(g.false, !1, 1), vt[245] = new b(g.true, !0, 1), vt[246] = new b(g.null, null, 1);
            const _t = {
                float64: !1,
                mapSorter: function(t, e) {
                    const r = Array.isArray(t[0]) ? t[0][0] : t[0],
                        n = Array.isArray(e[0]) ? e[0][0] : e[0];
                    if (r.type !== n.type) return r.type.compare(n.type);
                    const o = r.type.major,
                        i = kt[o].compareTokens(r, n);
                    0 === i && console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");
                    return i
                },
                quickEncodeToken: function(t) {
                    switch (t.type) {
                        case g.false:
                            return S([244]);
                        case g.true:
                            return S([245]);
                        case g.null:
                            return S([246]);
                        case g.bytes:
                            return t.value.length ? void 0 : S([64]);
                        case g.string:
                            return "" === t.value ? S([96]) : void 0;
                        case g.array:
                            return 0 === t.value ? S([128]) : void 0;
                        case g.map:
                            return 0 === t.value ? S([160]) : void 0;
                        case g.uint:
                            return t.value < 24 ? S([Number(t.value)]) : void 0;
                        case g.negint:
                            if (t.value >= -24) return S([31 - Number(t.value)])
                    }
                }
            };
            const kt = function() {
                    const t = [];
                    return t[g.uint.major] = F, t[g.negint.major] = W, t[g.bytes.major] = Z, t[g.string.major] = Y, t[g.array.major] = et, t[g.map.major] = ot, t[g.tag.major] = st, t[g.float.major] = ct, t
                }(),
                Et = new z;
            class At {
                constructor(t, e) {
                    this.obj = t, this.parent = e
                }
                includes(t) {
                    let e = this;
                    do {
                        if (e.obj === t) return !0
                    } while (e = e.parent);
                    return !1
                }
                static createCheck(t, e) {
                    if (t && t.includes(e)) throw new Error("CBOR encode error: object contains circular references");
                    return new At(e, t)
                }
            }
            const xt = {
                    null: new b(g.null, null),
                    undefined: new b(g.undefined, void 0),
                    true: new b(g.true, !0),
                    false: new b(g.false, !1),
                    emptyArray: new b(g.array, 0),
                    emptyMap: new b(g.map, 0)
                },
                St = {
                    number: (t, e, r, n) => Number.isInteger(t) && Number.isSafeInteger(t) ? new b(t >= 0 ? g.uint : g.negint, t) : new b(g.float, t),
                    bigint: (t, e, r, n) => t >= BigInt(0) ? new b(g.uint, t) : new b(g.negint, t),
                    Uint8Array: (t, e, r, n) => new b(g.bytes, t),
                    string: (t, e, r, n) => new b(g.string, t),
                    boolean: (t, e, r, n) => t ? xt.true : xt.false,
                    null: (t, e, r, n) => xt.null,
                    undefined: (t, e, r, n) => xt.undefined,
                    ArrayBuffer: (t, e, r, n) => new b(g.bytes, new Uint8Array(t)),
                    DataView: (t, e, r, n) => new b(g.bytes, new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
                    Array(t, e, r, n) {
                        if (!t.length) return !0 === r.addBreakTokens ? [xt.emptyArray, new b(g.break)] : xt.emptyArray;
                        n = At.createCheck(n, t);
                        const o = [];
                        let i = 0;
                        for (const s of t) o[i++] = Tt(s, r, n);
                        return r.addBreakTokens ? [new b(g.array, t.length), o, new b(g.break)] : [new b(g.array, t.length), o]
                    },
                    Object(t, e, r, n) {
                        const o = "Object" !== e,
                            i = o ? t.keys() : Object.keys(t),
                            s = o ? t.size : i.length;
                        if (!s) return !0 === r.addBreakTokens ? [xt.emptyMap, new b(g.break)] : xt.emptyMap;
                        n = At.createCheck(n, t);
                        const a = [];
                        let c = 0;
                        for (const u of i) a[c++] = [Tt(u, r, n), Tt(o ? t.get(u) : t[u], r, n)];
                        return function(t, e) {
                            e.mapSorter && t.sort(e.mapSorter)
                        }(a, r), r.addBreakTokens ? [new b(g.map, s), a, new b(g.break)] : [new b(g.map, s), a]
                    }
                };
            St.Map = St.Object, St.Buffer = St.Uint8Array;
            for (const $n of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" ")) St[`${$n}Array`] = St.DataView;

            function Tt(t, e = {}, r) {
                const n = w(t),
                    o = e && e.typeEncoders && e.typeEncoders[n] || St[n];
                if ("function" === typeof o) {
                    const i = o(t, n, e, r);
                    if (null != i) return i
                }
                const i = St[n];
                if (!i) throw new Error(`CBOR encode error: unsupported type: ${n}`);
                return i(t, n, e, r)
            }

            function Bt(t, e, r, n) {
                if (Array.isArray(e))
                    for (const o of e) Bt(t, o, r, n);
                else r[e.type.major](t, e, n)
            }

            function Ct(t, e, r) {
                const n = Tt(t, r);
                if (!Array.isArray(n) && r.quickEncodeToken) {
                    const t = r.quickEncodeToken(n);
                    if (t) return t;
                    const o = e[n.type.major];
                    if (o.encodedSize) {
                        const t = o.encodedSize(n, r),
                            e = new z(t);
                        if (o(e, n, r), 1 !== e.chunks.length) throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`);
                        return E(e.chunks[0])
                    }
                }
                return Et.reset(), Bt(Et, n, e, r), Et.toBytes(!0)
            }

            function Dt(t, e) {
                return e = Object.assign({}, _t, e), Ct(t, kt, e)
            }
            const It = {
                strict: !1,
                allowIndefinite: !0,
                allowUndefined: !0,
                allowBigInt: !0
            };
            class Nt {
                constructor(t, e = {}) {
                    this.pos = 0, this.data = t, this.options = e
                }
                done() {
                    return this.pos >= this.data.length
                }
                next() {
                    const t = this.data[this.pos];
                    let e = vt[t];
                    if (void 0 === e) {
                        const r = mt[t];
                        if (!r) throw new Error(`CBOR decode error: no decoder for major type ${t>>>5} (byte 0x${t.toString(16).padStart(2,"0")})`);
                        const n = 31 & t;
                        e = r(this.data, this.pos, n, this.options)
                    }
                    return this.pos += e.encodedLength, e
                }
            }
            const zt = Symbol.for("DONE"),
                Ot = Symbol.for("BREAK");

            function Ut(t, e) {
                if (t.done()) return zt;
                const r = t.next();
                if (r.type === g.break) return Ot;
                if (r.type.terminal) return r.value;
                if (r.type === g.array) return function(t, e, r) {
                    const n = [];
                    for (let o = 0; o < t.value; o++) {
                        const i = Ut(e, r);
                        if (i === Ot) {
                            if (t.value === 1 / 0) break;
                            throw new Error("CBOR decode error: got unexpected break to lengthed array")
                        }
                        if (i === zt) throw new Error(`CBOR decode error: found array but not enough entries (got ${o}, expected ${t.value})`);
                        n[o] = i
                    }
                    return n
                }(r, t, e);
                if (r.type === g.map) return function(t, e, r) {
                    const n = !0 === r.useMaps,
                        o = n ? void 0 : {},
                        i = n ? new Map : void 0;
                    for (let s = 0; s < t.value; s++) {
                        const a = Ut(e, r);
                        if (a === Ot) {
                            if (t.value === 1 / 0) break;
                            throw new Error("CBOR decode error: got unexpected break to lengthed map")
                        }
                        if (a === zt) throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no key], expected ${t.value})`);
                        if (!0 !== n && "string" !== typeof a) throw new Error(`CBOR decode error: non-string keys not supported (got ${typeof a})`);
                        if (!0 === r.rejectDuplicateMapKeys && (n && i.has(a) || !n && a in o)) throw new Error(`CBOR decode error: found repeat map key "${a}"`);
                        const c = Ut(e, r);
                        if (c === zt) throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no value], expected ${t.value})`);
                        n ? i.set(a, c) : o[a] = c
                    }
                    return n ? i : o
                }(r, t, e);
                if (r.type === g.tag) {
                    if (e.tags && "function" === typeof e.tags[r.value]) {
                        const n = Ut(t, e);
                        return e.tags[r.value](n)
                    }
                    throw new Error(`CBOR decode error: tag not supported (${r.value})`)
                }
                throw new Error("unsupported")
            }

            function Lt(t, e) {
                if (!(t instanceof Uint8Array)) throw new Error("CBOR decode error: data to decode must be a Uint8Array");
                const r = (e = Object.assign({}, It, e)).tokenizer || new Nt(t, e),
                    n = Ut(r, e);
                if (n === zt) throw new Error("CBOR decode error: did not find any content to decode");
                if (n === Ot) throw new Error("CBOR decode error: got unexpected break");
                if (!r.done()) throw new Error("CBOR decode error: too many terminals, data makes no sense");
                return n
            }
            const Pt = {
                float64: !0,
                typeEncoders: {
                    Object: function(t) {
                        if (t.asCID !== t) return null;
                        const e = h.k.asCID(t);
                        if (!e) return null;
                        const r = new Uint8Array(e.bytes.byteLength + 1);
                        return r.set(e.bytes, 1), [new b(g.tag, 42), new b(g.bytes, r)]
                    },
                    undefined: function() {
                        throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")
                    },
                    number: function(t) {
                        if (Number.isNaN(t)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
                        if (t === 1 / 0 || t === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
                        return null
                    }
                }
            };
            const jt = {
                allowIndefinite: !1,
                coerceUndefinedToNull: !0,
                allowNaN: !1,
                allowInfinity: !1,
                allowBigInt: !0,
                strict: !0,
                useMaps: !1,
                tags: []
            };
            jt.tags[42] = function(t) {
                if (0 !== t[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
                return h.k.decode(t.subarray(1))
            };
            const Rt = 18,
                Mt = 32,
                Ft = 112;
            async function Ht(t) {
                const e = await t.upTo(8),
                    r = l.decode(e);
                return t.seek(l.decode.bytes), r
            }
            async function Vt(t) {
                const e = await Ht(t);
                if (0 === e) throw new Error("Invalid CAR header (zero length)");
                const r = await t.exactly(e);
                t.seek(e);
                const n = Lt(r, jt);
                if (null == n || Array.isArray(n) || "object" !== typeof n) throw new Error("Invalid CAR header format");
                if (1 !== n.version) {
                    if ("string" === typeof n.version) throw new Error(`Invalid CAR version: "${n.version}"`);
                    throw new Error(`Invalid CAR version: ${n.version}`)
                }
                if (!Array.isArray(n.roots)) throw new Error("Invalid CAR header format");
                if (Object.keys(n).filter((t => "roots" !== t && "version" !== t)).length) throw new Error("Invalid CAR header format");
                return n
            }
            async function $t(t) {
                const e = await t.exactly(2);
                if (e[0] === Rt && e[1] === Mt) {
                    const e = await t.exactly(34);
                    t.seek(34);
                    const r = d.Jx(e);
                    return h.k.create(0, Ft, r)
                }
                const r = await Ht(t);
                if (1 !== r) throw new Error(`Unexpected CID version (${r})`);
                const n = await Ht(t),
                    o = await async function(t) {
                        const e = await t.upTo(8);
                        l.decode(e);
                        const r = l.decode.bytes,
                            n = l.decode(e.subarray(l.decode.bytes)),
                            o = r + l.decode.bytes + n,
                            i = await t.exactly(o);
                        return t.seek(o), i
                    }(t),
                    i = d.Jx(o);
                return h.k.create(r, n, i)
            }
            async function Wt(t) {
                const e = t.pos;
                let r = await Ht(t);
                if (0 === r) throw new Error("Invalid CAR section (zero length)");
                r += t.pos - e;
                return {
                    cid: await $t(t),
                    length: r,
                    blockLength: r - (t.pos - e)
                }
            }
            async function Jt(t) {
                const {
                    cid: e,
                    blockLength: r
                } = await Wt(t), n = await t.exactly(r);
                return t.seek(r), {
                    bytes: n,
                    cid: e
                }
            }
            async function Gt(t) {
                const e = t.pos,
                    {
                        cid: r,
                        length: n,
                        blockLength: o
                    } = await Wt(t),
                    i = {
                        cid: r,
                        length: n,
                        blockLength: o,
                        offset: e,
                        blockOffset: t.pos
                    };
                return t.seek(i.blockLength), i
            }

            function qt(t) {
                let e = 0;
                return {
                    upTo: async r => t.subarray(e, e + Math.min(r, t.length - e)),
                    async exactly(r) {
                        if (r > t.length - e) throw new Error("Unexpected end of data");
                        return t.subarray(e, e + r)
                    },
                    seek(t) {
                        e += t
                    },
                    get pos() {
                        return e
                    }
                }
            }

            function Zt(t) {
                const e = t[Symbol.asyncIterator]();
                return function(t) {
                    let e = 0,
                        r = 0,
                        n = 0,
                        o = new Uint8Array(0);
                    const i = async e => {
                        r = o.length - n;
                        const i = [o.subarray(n)];
                        for (; r < e;) {
                            const e = await t();
                            if (null == e) break;
                            r < 0 ? e.length > r && i.push(e.subarray(-r)) : i.push(e), r += e.length
                        }
                        o = new Uint8Array(i.reduce(((t, e) => t + e.length), 0));
                        let s = 0;
                        for (const t of i) o.set(t, s), s += t.length;
                        n = 0
                    };
                    return {
                        upTo: async t => (o.length - n < t && await i(t), o.subarray(n, n + Math.min(o.length - n, t))),
                        async exactly(t) {
                            if (o.length - n < t && await i(t), o.length - n < t) throw new Error("Unexpected end of data");
                            return o.subarray(n, n + t)
                        },
                        seek(t) {
                            e += t, n += t
                        },
                        get pos() {
                            return e
                        }
                    }
                }((async function() {
                    const t = await e.next();
                    return t.done ? null : t.value
                }))
            }
            class Kt {
                constructor(t, e, r) {
                    this._version = t, this._roots = e, this._blocks = r, this._keys = r.map((t => t.cid.toString()))
                }
                get version() {
                    return this._version
                }
                async getRoots() {
                    return this._roots
                }
                async has(t) {
                    return this._keys.indexOf(t.toString()) > -1
                }
                async get(t) {
                    const e = this._keys.indexOf(t.toString());
                    return e > -1 ? this._blocks[e] : void 0
                }
                async * blocks() {
                    for (const t of this._blocks) yield t
                }
                async * cids() {
                    for (const t of this._blocks) yield t.cid
                }
                static async fromBytes(t) {
                    if (!(t instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array");
                    return Xt(qt(t))
                }
                static async fromIterable(t) {
                    if (!t || "function" !== typeof t[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable");
                    return Xt(Zt(t))
                }
            }
            async function Xt(t) {
                const e = function(t) {
                        const e = Vt(t);
                        return {
                            header: () => e,
                            async * blocks() {
                                for (await e;
                                    (await t.upTo(8)).length > 0;) yield await Jt(t)
                            },
                            async * blocksIndex() {
                                for (await e;
                                    (await t.upTo(8)).length > 0;) yield await Gt(t)
                            }
                        }
                    }(t),
                    {
                        version: r,
                        roots: n
                    } = await e.header(),
                    o = [];
                for await (const i of e.blocks()) o.push(i);
                return new Kt(r, n, o)
            }
            Symbol.asyncIterator;
            Symbol.asyncIterator;
            Symbol.asyncIterator;

            function Yt(t) {
                const e = Dt({
                    version: 1,
                    roots: t
                }, Pt);
                const r = l.encode(e.length),
                    n = new Uint8Array(r.length + e.length);
                return n.set(r, 0), n.set(e, r.length), n
            }

            function Qt() {}
            class te {
                constructor(t, e) {
                    this._encoder = e, this._mutex = e.setRoots(t), this._ended = !1
                }
                async put(t) {
                    if (!(t.bytes instanceof Uint8Array) || !t.cid) throw new TypeError("Can only write {cid, bytes} objects");
                    if (this._ended) throw new Error("Already closed");
                    const e = h.k.asCID(t.cid);
                    if (!e) throw new TypeError("Can only write {cid, bytes} objects");
                    return this._mutex = this._mutex.then((() => this._encoder.writeBlock({
                        cid: e,
                        bytes: t.bytes
                    }))), this._mutex
                }
                async close() {
                    if (this._ended) throw new Error("Already closed");
                    return await this._mutex, this._ended = !0, this._encoder.close()
                }
                static create(t) {
                    t = function(t) {
                        if (void 0 === t) return [];
                        if (!Array.isArray(t)) {
                            const e = h.k.asCID(t);
                            if (!e) throw new TypeError("roots must be a single CID or an array of CIDs");
                            return [e]
                        }
                        const e = [];
                        for (const r of t) {
                            const t = h.k.asCID(r);
                            if (!t) throw new TypeError("roots must be a single CID or an array of CIDs");
                            e.push(t)
                        }
                        return e
                    }(t);
                    const {
                        encoder: e,
                        iterator: r
                    } = re();
                    return {
                        writer: new te(t, e),
                        out: new ee(r)
                    }
                }
                static createAppender() {
                    const {
                        encoder: t,
                        iterator: e
                    } = re();
                    t.setRoots = () => Promise.resolve();
                    return {
                        writer: new te([], t),
                        out: new ee(e)
                    }
                }
                static async updateRootsInBytes(t, e) {
                    const r = qt(t);
                    await Vt(r);
                    const n = Yt(e);
                    if (r.pos !== n.length) throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${r.pos} bytes, new header is ${n.length} bytes)`);
                    return t.set(n, 0), t
                }
            }
            class ee {
                constructor(t) {
                    this._iterator = t
                }[Symbol.asyncIterator]() {
                    if (this._iterating) throw new Error("Multiple iterator not supported");
                    return this._iterating = !0, this._iterator
                }
            }

            function re() {
                const t = function() {
                        const t = [];
                        let e = null,
                            r = Qt,
                            n = !1,
                            o = null,
                            i = Qt;
                        const s = () => (e || (e = new Promise((t => {
                                r = () => {
                                    e = null, r = Qt, t()
                                }
                            }))), e),
                            a = {
                                async next() {
                                    const e = t.shift();
                                    return e ? (0 === t.length && r(), {
                                        done: !1,
                                        value: e
                                    }) : n ? (r(), {
                                        done: !0,
                                        value: void 0
                                    }) : (o || (o = new Promise((t => {
                                        i = () => (o = null, i = Qt, t(a.next()))
                                    }))), o)
                                }
                            };
                        return {
                            writer: {
                                write(e) {
                                    t.push(e);
                                    const r = s();
                                    return i(), r
                                },
                                async end() {
                                    n = !0;
                                    const t = s();
                                    return i(), t
                                }
                            },
                            iterator: a
                        }
                    }(),
                    {
                        writer: e,
                        iterator: r
                    } = t;
                return {
                    encoder: function(t) {
                        return {
                            async setRoots(e) {
                                const r = Yt(e);
                                await t.write(r)
                            },
                            async writeBlock(e) {
                                const {
                                    cid: r,
                                    bytes: n
                                } = e;
                                await t.write(new Uint8Array(l.encode(r.bytes.length + n.length))), await t.write(r.bytes), n.length && await t.write(n)
                            },
                            close: async () => t.end()
                        }
                    }(e),
                    iterator: r
                }
            }
            var ne = r(87232);
            const oe = ({
                    enumerable: t = !0,
                    configurable: e = !1
                } = {}) => ({
                    enumerable: t,
                    configurable: e,
                    writable: !1
                }),
                ie = function*(t, e) {
                    if (null != t && !(t instanceof Uint8Array))
                        for (const [r, n] of Object.entries(t)) {
                            const t = [...e, r];
                            if (null != n && "object" === typeof n)
                                if (Array.isArray(n))
                                    for (const [e, r] of n.entries()) {
                                        const n = [...t, e],
                                            o = ne.k0.asCID(r);
                                        o ? yield [n.join("/"), o]: "object" === typeof r && (yield* ie(r, n))
                                    } else {
                                        const e = ne.k0.asCID(n);
                                        e ? yield [t.join("/"), e]: yield* ie(n, t)
                                    }
                        }
                },
                se = function*(t, e) {
                    if (null != t)
                        for (const [r, n] of Object.entries(t)) {
                            const t = [...e, r];
                            if (yield t.join("/"), null != n && !(n instanceof Uint8Array) && "object" === typeof n && !ne.k0.asCID(n))
                                if (Array.isArray(n))
                                    for (const [e, r] of n.entries()) {
                                        const n = [...t, e];
                                        yield n.join("/"), "object" !== typeof r || ne.k0.asCID(r) || (yield* se(r, n))
                                    } else yield* se(n, t)
                        }
                };
            class ae {
                constructor({
                    cid: t,
                    bytes: e,
                    value: r
                }) {
                    if (!t || !e || "undefined" === typeof r) throw new Error("Missing required argument");
                    this.cid = t, this.bytes = e, this.value = r, this.asBlock = this, Object.defineProperties(this, {
                        cid: oe(),
                        bytes: oe(),
                        value: oe(),
                        asBlock: oe()
                    })
                }
                links() {
                    return ie(this.value, [])
                }
                tree() {
                    return se(this.value, [])
                }
                get(t = "/") {
                    return ((t, e) => {
                        let r = t;
                        for (const [n, o] of e.entries()) {
                            if (r = r[o], null == r) throw new Error(`Object has no property at ${e.slice(0,n+1).map((t=>`[${JSON.stringify(t)}]`)).join("")}`);
                            const t = ne.k0.asCID(r);
                            if (t) return {
                                value: t,
                                remaining: e.slice(n + 1).join("/")
                            }
                        }
                        return {
                            value: r
                        }
                    })(this.value, t.split("/").filter(Boolean))
                }
            }
            var ce = r(96945);
            const ue = {
                float64: !0,
                typeEncoders: {
                    Object: function(t) {
                        if (t.asCID !== t) return null;
                        const e = h.k.asCID(t);
                        if (!e) return null;
                        const r = new Uint8Array(e.bytes.byteLength + 1);
                        return r.set(e.bytes, 1), [new b(g.tag, 42), new b(g.bytes, r)]
                    },
                    undefined: function() {
                        throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")
                    },
                    number: function(t) {
                        if (Number.isNaN(t)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
                        if (t === 1 / 0 || t === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
                        return null
                    }
                }
            };
            const fe = {
                allowIndefinite: !1,
                allowUndefined: !1,
                allowNaN: !1,
                allowInfinity: !1,
                allowBigInt: !0,
                strict: !0,
                useMaps: !1,
                tags: []
            };
            fe.tags[42] = function(t) {
                if (0 !== t[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
                return h.k.decode(t.subarray(1))
            };
            const le = "dag-cbor",
                he = 113,
                de = t => Dt(t, ue),
                pe = t => Lt(t, fe),
                ye = new TextDecoder;

            function we(t, e) {
                let r = 0;
                for (let n = 0;; n += 7) {
                    if (n >= 64) throw new Error("protobuf: varint overflow");
                    if (e >= t.length) throw new Error("protobuf: unexpected end of data");
                    const o = t[e++];
                    if (r += n < 28 ? (127 & o) << n : (127 & o) * 2 ** n, o < 128) break
                }
                return [r, e]
            }

            function ge(t, e) {
                let r;
                [r, e] = we(t, e);
                const n = e + r;
                if (r < 0 || n < 0) throw new Error("protobuf: invalid length");
                if (n > t.length) throw new Error("protobuf: unexpected end of data");
                return [t.subarray(e, n), n]
            }

            function be(t, e) {
                let r;
                return [r, e] = we(t, e), [7 & r, r >> 3, e]
            }

            function me(t) {
                const e = {},
                    r = t.length;
                let n = 0;
                for (; n < r;) {
                    let r, o;
                    if ([r, o, n] = be(t, n), 1 === o) {
                        if (e.Hash) throw new Error("protobuf: (PBLink) duplicate Hash section");
                        if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Hash`);
                        if (void 0 !== e.Name) throw new Error("protobuf: (PBLink) invalid order, found Name before Hash");
                        if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Hash");
                        [e.Hash, n] = ge(t, n)
                    } else if (2 === o) {
                        if (void 0 !== e.Name) throw new Error("protobuf: (PBLink) duplicate Name section");
                        if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Name`);
                        if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Name");
                        let o;
                        [o, n] = ge(t, n), e.Name = ye.decode(o)
                    } else {
                        if (3 !== o) throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${o}`);
                        if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) duplicate Tsize section");
                        if (0 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Tsize`);
                        [e.Tsize, n] = we(t, n)
                    }
                }
                if (n > r) throw new Error("protobuf: (PBLink) unexpected end of data");
                return e
            }
            const ve = new TextEncoder,
                _e = 2 ** 32;

            function ke(t, e) {
                let r = e.length;
                if ("number" === typeof t.Tsize) {
                    if (t.Tsize < 0) throw new Error("Tsize cannot be negative");
                    if (!Number.isSafeInteger(t.Tsize)) throw new Error("Tsize too large for encoding");
                    r = xe(e, r, t.Tsize) - 1, e[r] = 24
                }
                if ("string" === typeof t.Name) {
                    const n = ve.encode(t.Name);
                    r -= n.length, e.set(n, r), r = xe(e, r, n.length) - 1, e[r] = 18
                }
                return t.Hash && (r -= t.Hash.length, e.set(t.Hash, r), r = xe(e, r, t.Hash.length) - 1, e[r] = 10), e.length - r
            }

            function Ee(t) {
                const e = function(t) {
                        let e = 0;
                        if (t.Data) {
                            const r = t.Data.length;
                            e += 1 + r + Se(r)
                        }
                        if (t.Links)
                            for (const r of t.Links) {
                                const t = Ae(r);
                                e += 1 + t + Se(t)
                            }
                        return e
                    }(t),
                    r = new Uint8Array(e);
                let n = e;
                if (t.Data && (n -= t.Data.length, r.set(t.Data, n), n = xe(r, n, t.Data.length) - 1, r[n] = 10), t.Links)
                    for (let o = t.Links.length - 1; o >= 0; o--) {
                        const e = ke(t.Links[o], r.subarray(0, n));
                        n -= e, n = xe(r, n, e) - 1, r[n] = 18
                    }
                return r
            }

            function Ae(t) {
                let e = 0;
                if (t.Hash) {
                    const r = t.Hash.length;
                    e += 1 + r + Se(r)
                }
                if ("string" === typeof t.Name) {
                    const r = ve.encode(t.Name).length;
                    e += 1 + r + Se(r)
                }
                return "number" === typeof t.Tsize && (e += 1 + Se(t.Tsize)), e
            }

            function xe(t, e, r) {
                const n = e -= Se(r);
                for (; r >= 2147483648;) t[e++] = 127 & r | 128, r /= 128;
                for (; r >= 128;) t[e++] = 127 & r | 128, r >>>= 7;
                return t[e] = r, n
            }

            function Se(t) {
                return t % 2 === 0 && t++, Math.floor((function(t) {
                    let e = 0;
                    t >= _e && (t = Math.floor(t / _e), e = 32);
                    t >= 65536 && (t >>>= 16, e += 16);
                    t >= 256 && (t >>>= 8, e += 8);
                    return e + Te[t]
                }(t) + 6) / 7)
            }
            const Te = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                Be = ["Data", "Links"],
                Ce = ["Hash", "Name", "Tsize"],
                De = new TextEncoder;

            function Ie(t, e) {
                if (t === e) return 0;
                const r = t.Name ? De.encode(t.Name) : [],
                    n = e.Name ? De.encode(e.Name) : [];
                let o = r.length,
                    i = n.length;
                for (let s = 0, a = Math.min(o, i); s < a; ++s)
                    if (r[s] !== n[s]) {
                        o = r[s], i = n[s];
                        break
                    }
                return o < i ? -1 : i < o ? 1 : 0
            }

            function Ne(t, e) {
                return !Object.keys(t).some((t => !e.includes(t)))
            }

            function ze(t) {
                if ("object" === typeof t.asCID) {
                    const e = h.k.asCID(t);
                    if (!e) throw new TypeError("Invalid DAG-PB form");
                    return {
                        Hash: e
                    }
                }
                if ("object" !== typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form");
                const e = {};
                if (t.Hash) {
                    let n = h.k.asCID(t.Hash);
                    try {
                        n || ("string" === typeof t.Hash ? n = h.k.parse(t.Hash) : t.Hash instanceof Uint8Array && (n = h.k.decode(t.Hash)))
                    } catch (r) {
                        throw new TypeError(`Invalid DAG-PB form: ${r.message}`)
                    }
                    n && (e.Hash = n)
                }
                if (!e.Hash) throw new TypeError("Invalid DAG-PB form");
                return "string" === typeof t.Name && (e.Name = t.Name), "number" === typeof t.Tsize && (e.Tsize = t.Tsize), e
            }

            function Oe(t) {
                if ((t instanceof Uint8Array || "string" === typeof t) && (t = {
                        Data: t
                    }), "object" !== typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form");
                const e = {};
                if (void 0 !== t.Data)
                    if ("string" === typeof t.Data) e.Data = De.encode(t.Data);
                    else {
                        if (!(t.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form");
                        e.Data = t.Data
                    }
                if (void 0 !== t.Links) {
                    if (!Array.isArray(t.Links)) throw new TypeError("Invalid DAG-PB form");
                    e.Links = t.Links.map(ze), e.Links.sort(Ie)
                } else e.Links = [];
                return e
            }

            function Ue(t) {
                if (!t || "object" !== typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form");
                if (!Ne(t, Be)) throw new TypeError("Invalid DAG-PB form (extraneous properties)");
                if (void 0 !== t.Data && !(t.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form (Data must be a Uint8Array)");
                if (!Array.isArray(t.Links)) throw new TypeError("Invalid DAG-PB form (Links must be an array)");
                for (let e = 0; e < t.Links.length; e++) {
                    const r = t.Links[e];
                    if (!r || "object" !== typeof r || Array.isArray(r)) throw new TypeError("Invalid DAG-PB form (bad link object)");
                    if (!Ne(r, Ce)) throw new TypeError("Invalid DAG-PB form (extraneous properties on link object)");
                    if (!r.Hash) throw new TypeError("Invalid DAG-PB form (link must have a Hash)");
                    if (r.Hash.asCID !== r.Hash) throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)");
                    if (void 0 !== r.Name && "string" !== typeof r.Name) throw new TypeError("Invalid DAG-PB form (link Name must be a string)");
                    if (void 0 !== r.Tsize && ("number" !== typeof r.Tsize || r.Tsize % 1 !== 0)) throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)");
                    if (e > 0 && -1 === Ie(r, t.Links[e - 1])) throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)")
                }
            }

            function Le(t, e = []) {
                return Oe({
                    Data: t,
                    Links: e
                })
            }

            function Pe(t, e, r) {
                return ze({
                    Hash: r,
                    Name: t,
                    Tsize: e
                })
            }
            const je = "dag-pb",
                Re = 112;

            function Me(t) {
                Ue(t);
                const e = {};
                return t.Links && (e.Links = t.Links.map((t => {
                    const e = {};
                    return t.Hash && (e.Hash = t.Hash.bytes), void 0 !== t.Name && (e.Name = t.Name), void 0 !== t.Tsize && (e.Tsize = t.Tsize), e
                }))), t.Data && (e.Data = t.Data), Ee(e)
            }

            function Fe(t) {
                const e = function(t) {
                        const e = t.length;
                        let r, n, o = 0,
                            i = !1;
                        for (; o < e;) {
                            let e, s;
                            if ([e, s, o] = be(t, o), 2 !== e) throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${e}`);
                            if (1 === s) {
                                if (n) throw new Error("protobuf: (PBNode) duplicate Data section");
                                [n, o] = ge(t, o), r && (i = !0)
                            } else {
                                if (2 !== s) throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${s}`); {
                                    if (i) throw new Error("protobuf: (PBNode) duplicate Links section");
                                    let e;
                                    r || (r = []), [e, o] = ge(t, o), r.push(me(e))
                                }
                            }
                        }
                        if (o > e) throw new Error("protobuf: (PBNode) unexpected end of data");
                        const s = {};
                        return n && (s.Data = n), s.Links = r || [], s
                    }(t),
                    r = {};
                return e.Data && (r.Data = e.Data), e.Links && (r.Links = e.Links.map((t => {
                    const e = {};
                    try {
                        e.Hash = h.k.decode(t.Hash)
                    } catch (r) {}
                    if (!e.Hash) throw new Error("Invalid Hash field found in link, expected CID");
                    return void 0 !== t.Name && (e.Name = t.Name), void 0 !== t.Tsize && (e.Tsize = t.Tsize), e
                }))), r
            }
            class He {
                constructor(t, e, r = {}) {
                    if ("number" !== typeof e || e <= 0) throw new Error("invalid target chunk size");
                    this._reader = t, this._targetSize = e, this._decoders = [o, ce, n, ...r.decoders || []]
                }
                async * cars() {
                    const t = await this._reader.getRoots();
                    if (1 !== t.length) throw new Error(`unexpected number of roots: ${t.length}`);
                    let e;
                    for await (const r of this._cars(t[0])) e = r.channel, r.out && (yield r.out);
                    if (!e) throw new Error("missing CAR writer channel");
                    e.writer.close(), yield e.out
                }
                async _get(t) {
                    const e = await this._reader.get(t);
                    if (!e) throw new Error(`missing block for ${t}`);
                    const {
                        bytes: r
                    } = e, n = this._decoders.find((e => e.code === t.code));
                    if (!n) throw new Error(`missing decoder for ${t.code}`);
                    return new ae({
                        cid: t,
                        bytes: r,
                        value: n.decode(r)
                    })
                }
                async * _cars(t, e = [], r) {
                    const n = await this._get(t);
                    if ((r = r || Object.assign(te.create(t), {
                            size: 0
                        })).size > 0 && r.size + n.bytes.byteLength >= this._targetSize) {
                        r.writer.close();
                        const {
                            out: t
                        } = r;
                        r = function(t) {
                            const e = Object.assign(te.create(t[0].cid), {
                                size: t.reduce(((t, e) => t + e.bytes.byteLength), 0)
                            });
                            for (const r of t) e.writer.put(r);
                            return e
                        }(e), yield {
                            channel: r,
                            out: t
                        }
                    }
                    e = e.concat(n), r.size += n.bytes.byteLength, r.writer.put(n);
                    for (const [, o] of n.links())
                        for await (const t of this._cars(o, e, r)) r = t.channel, yield t;
                    if (!r) throw new Error("missing CAR writer channel");
                    yield {
                        channel: r
                    }
                }
                static async fromIterable(t, e, r) {
                    const n = await Kt.fromIterable(t);
                    return new He(n, e, r)
                }
                static async fromBlob(t, e, r) {
                    const n = await t.arrayBuffer(),
                        o = await Kt.fromBytes(new Uint8Array(n));
                    return new He(o, e, r)
                }
            }
            var Ve = r(93093),
                $e = r(60618),
                We = r(84810),
                Je = r(70942),
                Ge = r(56155),
                qe = r(7225),
                Ze = r(40469);
            (0, qe.D)({
                name: "murmur3-32",
                code: 35,
                encode: t => function(t) {
                    const e = new Array(4);
                    for (let r = 0; r < 4; r++) e[r] = 255 & t, t >>= 8;
                    return new Uint8Array(e)
                }(Ze.x86.hash32(t))
            });
            const Ke = (0, qe.D)({
                name: "murmur3-128",
                code: 34,
                encode: t => ne.aI.fromHex(Ze.x64.hash128(t))
            });
            const Xe = {
                chunker: "fixed",
                strategy: "balanced",
                rawLeaves: !1,
                onlyHash: !1,
                reduceSingleLeafToSelf: !0,
                hasher: Ge.sha256,
                leafType: "file",
                cidVersion: 0,
                progress: () => () => {},
                shardSplitThreshold: 1e3,
                fileImportConcurrency: 50,
                blockWriteConcurrency: 10,
                minChunkSize: 262144,
                maxChunkSize: 262144,
                avgChunkSize: 262144,
                window: 16,
                polynomial: 0x3df305dfb2a804,
                maxChildrenPerNode: 174,
                layerRepeat: 4,
                wrapWithDirectory: !1,
                recursive: !1,
                hidden: !1,
                timeout: void 0,
                hamtHashFn: async function(t) {
                    return (await Ke.encode(t)).slice(0, 8).reverse()
                },
                hamtHashCode: 34,
                hamtBucketBits: 8
            };
            var Ye = r(32114),
                Qe = r(62100);
            const tr = Qe.Reader,
                er = Qe.Writer,
                rr = Qe.util,
                nr = Qe.roots["ipfs-unixfs"] || (Qe.roots["ipfs-unixfs"] = {}),
                or = nr.Data = (() => {
                    function t(t) {
                        if (this.blocksizes = [], t)
                            for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]])
                    }
                    return t.prototype.Type = 0, t.prototype.Data = rr.newBuffer([]), t.prototype.filesize = rr.Long ? rr.Long.fromBits(0, 0, !0) : 0, t.prototype.blocksizes = rr.emptyArray, t.prototype.hashType = rr.Long ? rr.Long.fromBits(0, 0, !0) : 0, t.prototype.fanout = rr.Long ? rr.Long.fromBits(0, 0, !0) : 0, t.prototype.mode = 0, t.prototype.mtime = null, t.encode = function(t, e) {
                        if (e || (e = er.create()), e.uint32(8).int32(t.Type), null != t.Data && Object.hasOwnProperty.call(t, "Data") && e.uint32(18).bytes(t.Data), null != t.filesize && Object.hasOwnProperty.call(t, "filesize") && e.uint32(24).uint64(t.filesize), null != t.blocksizes && t.blocksizes.length)
                            for (var r = 0; r < t.blocksizes.length; ++r) e.uint32(32).uint64(t.blocksizes[r]);
                        return null != t.hashType && Object.hasOwnProperty.call(t, "hashType") && e.uint32(40).uint64(t.hashType), null != t.fanout && Object.hasOwnProperty.call(t, "fanout") && e.uint32(48).uint64(t.fanout), null != t.mode && Object.hasOwnProperty.call(t, "mode") && e.uint32(56).uint32(t.mode), null != t.mtime && Object.hasOwnProperty.call(t, "mtime") && nr.UnixTime.encode(t.mtime, e.uint32(66).fork()).ldelim(), e
                    }, t.decode = function(t, e) {
                        t instanceof tr || (t = tr.create(t));
                        for (var r = void 0 === e ? t.len : t.pos + e, n = new nr.Data; t.pos < r;) {
                            var o = t.uint32();
                            switch (o >>> 3) {
                                case 1:
                                    n.Type = t.int32();
                                    break;
                                case 2:
                                    n.Data = t.bytes();
                                    break;
                                case 3:
                                    n.filesize = t.uint64();
                                    break;
                                case 4:
                                    if (n.blocksizes && n.blocksizes.length || (n.blocksizes = []), 2 === (7 & o))
                                        for (var i = t.uint32() + t.pos; t.pos < i;) n.blocksizes.push(t.uint64());
                                    else n.blocksizes.push(t.uint64());
                                    break;
                                case 5:
                                    n.hashType = t.uint64();
                                    break;
                                case 6:
                                    n.fanout = t.uint64();
                                    break;
                                case 7:
                                    n.mode = t.uint32();
                                    break;
                                case 8:
                                    n.mtime = nr.UnixTime.decode(t, t.uint32());
                                    break;
                                default:
                                    t.skipType(7 & o)
                            }
                        }
                        if (!n.hasOwnProperty("Type")) throw rr.ProtocolError("missing required 'Type'", {
                            instance: n
                        });
                        return n
                    }, t.fromObject = function(t) {
                        if (t instanceof nr.Data) return t;
                        var e = new nr.Data;
                        switch (t.Type) {
                            case "Raw":
                            case 0:
                                e.Type = 0;
                                break;
                            case "Directory":
                            case 1:
                                e.Type = 1;
                                break;
                            case "File":
                            case 2:
                                e.Type = 2;
                                break;
                            case "Metadata":
                            case 3:
                                e.Type = 3;
                                break;
                            case "Symlink":
                            case 4:
                                e.Type = 4;
                                break;
                            case "HAMTShard":
                            case 5:
                                e.Type = 5
                        }
                        if (null != t.Data && ("string" === typeof t.Data ? rr.base64.decode(t.Data, e.Data = rr.newBuffer(rr.base64.length(t.Data)), 0) : t.Data.length && (e.Data = t.Data)), null != t.filesize && (rr.Long ? (e.filesize = rr.Long.fromValue(t.filesize)).unsigned = !0 : "string" === typeof t.filesize ? e.filesize = parseInt(t.filesize, 10) : "number" === typeof t.filesize ? e.filesize = t.filesize : "object" === typeof t.filesize && (e.filesize = new rr.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0))), t.blocksizes) {
                            if (!Array.isArray(t.blocksizes)) throw TypeError(".Data.blocksizes: array expected");
                            e.blocksizes = [];
                            for (var r = 0; r < t.blocksizes.length; ++r) rr.Long ? (e.blocksizes[r] = rr.Long.fromValue(t.blocksizes[r])).unsigned = !0 : "string" === typeof t.blocksizes[r] ? e.blocksizes[r] = parseInt(t.blocksizes[r], 10) : "number" === typeof t.blocksizes[r] ? e.blocksizes[r] = t.blocksizes[r] : "object" === typeof t.blocksizes[r] && (e.blocksizes[r] = new rr.LongBits(t.blocksizes[r].low >>> 0, t.blocksizes[r].high >>> 0).toNumber(!0))
                        }
                        if (null != t.hashType && (rr.Long ? (e.hashType = rr.Long.fromValue(t.hashType)).unsigned = !0 : "string" === typeof t.hashType ? e.hashType = parseInt(t.hashType, 10) : "number" === typeof t.hashType ? e.hashType = t.hashType : "object" === typeof t.hashType && (e.hashType = new rr.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0))), null != t.fanout && (rr.Long ? (e.fanout = rr.Long.fromValue(t.fanout)).unsigned = !0 : "string" === typeof t.fanout ? e.fanout = parseInt(t.fanout, 10) : "number" === typeof t.fanout ? e.fanout = t.fanout : "object" === typeof t.fanout && (e.fanout = new rr.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0))), null != t.mode && (e.mode = t.mode >>> 0), null != t.mtime) {
                            if ("object" !== typeof t.mtime) throw TypeError(".Data.mtime: object expected");
                            e.mtime = nr.UnixTime.fromObject(t.mtime)
                        }
                        return e
                    }, t.toObject = function(t, e) {
                        e || (e = {});
                        var r = {};
                        if ((e.arrays || e.defaults) && (r.blocksizes = []), e.defaults) {
                            if (r.Type = e.enums === String ? "Raw" : 0, e.bytes === String ? r.Data = "" : (r.Data = [], e.bytes !== Array && (r.Data = rr.newBuffer(r.Data))), rr.Long) {
                                var n = new rr.Long(0, 0, !0);
                                r.filesize = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.filesize = e.longs === String ? "0" : 0;
                            if (rr.Long) {
                                n = new rr.Long(0, 0, !0);
                                r.hashType = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.hashType = e.longs === String ? "0" : 0;
                            if (rr.Long) {
                                n = new rr.Long(0, 0, !0);
                                r.fanout = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.fanout = e.longs === String ? "0" : 0;
                            r.mode = 0, r.mtime = null
                        }
                        if (null != t.Type && t.hasOwnProperty("Type") && (r.Type = e.enums === String ? nr.Data.DataType[t.Type] : t.Type), null != t.Data && t.hasOwnProperty("Data") && (r.Data = e.bytes === String ? rr.base64.encode(t.Data, 0, t.Data.length) : e.bytes === Array ? Array.prototype.slice.call(t.Data) : t.Data), null != t.filesize && t.hasOwnProperty("filesize") && ("number" === typeof t.filesize ? r.filesize = e.longs === String ? String(t.filesize) : t.filesize : r.filesize = e.longs === String ? rr.Long.prototype.toString.call(t.filesize) : e.longs === Number ? new rr.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0) : t.filesize), t.blocksizes && t.blocksizes.length) {
                            r.blocksizes = [];
                            for (var o = 0; o < t.blocksizes.length; ++o) "number" === typeof t.blocksizes[o] ? r.blocksizes[o] = e.longs === String ? String(t.blocksizes[o]) : t.blocksizes[o] : r.blocksizes[o] = e.longs === String ? rr.Long.prototype.toString.call(t.blocksizes[o]) : e.longs === Number ? new rr.LongBits(t.blocksizes[o].low >>> 0, t.blocksizes[o].high >>> 0).toNumber(!0) : t.blocksizes[o]
                        }
                        return null != t.hashType && t.hasOwnProperty("hashType") && ("number" === typeof t.hashType ? r.hashType = e.longs === String ? String(t.hashType) : t.hashType : r.hashType = e.longs === String ? rr.Long.prototype.toString.call(t.hashType) : e.longs === Number ? new rr.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0) : t.hashType), null != t.fanout && t.hasOwnProperty("fanout") && ("number" === typeof t.fanout ? r.fanout = e.longs === String ? String(t.fanout) : t.fanout : r.fanout = e.longs === String ? rr.Long.prototype.toString.call(t.fanout) : e.longs === Number ? new rr.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0) : t.fanout), null != t.mode && t.hasOwnProperty("mode") && (r.mode = t.mode), null != t.mtime && t.hasOwnProperty("mtime") && (r.mtime = nr.UnixTime.toObject(t.mtime, e)), r
                    }, t.prototype.toJSON = function() {
                        return this.constructor.toObject(this, Qe.util.toJSONOptions)
                    }, t.DataType = function() {
                        const t = {},
                            e = Object.create(t);
                        return e[t[0] = "Raw"] = 0, e[t[1] = "Directory"] = 1, e[t[2] = "File"] = 2, e[t[3] = "Metadata"] = 3, e[t[4] = "Symlink"] = 4, e[t[5] = "HAMTShard"] = 5, e
                    }(), t
                })(),
                ir = (nr.UnixTime = (() => {
                    function t(t) {
                        if (t)
                            for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]])
                    }
                    return t.prototype.Seconds = rr.Long ? rr.Long.fromBits(0, 0, !1) : 0, t.prototype.FractionalNanoseconds = 0, t.encode = function(t, e) {
                        return e || (e = er.create()), e.uint32(8).int64(t.Seconds), null != t.FractionalNanoseconds && Object.hasOwnProperty.call(t, "FractionalNanoseconds") && e.uint32(21).fixed32(t.FractionalNanoseconds), e
                    }, t.decode = function(t, e) {
                        t instanceof tr || (t = tr.create(t));
                        for (var r = void 0 === e ? t.len : t.pos + e, n = new nr.UnixTime; t.pos < r;) {
                            var o = t.uint32();
                            switch (o >>> 3) {
                                case 1:
                                    n.Seconds = t.int64();
                                    break;
                                case 2:
                                    n.FractionalNanoseconds = t.fixed32();
                                    break;
                                default:
                                    t.skipType(7 & o)
                            }
                        }
                        if (!n.hasOwnProperty("Seconds")) throw rr.ProtocolError("missing required 'Seconds'", {
                            instance: n
                        });
                        return n
                    }, t.fromObject = function(t) {
                        if (t instanceof nr.UnixTime) return t;
                        var e = new nr.UnixTime;
                        return null != t.Seconds && (rr.Long ? (e.Seconds = rr.Long.fromValue(t.Seconds)).unsigned = !1 : "string" === typeof t.Seconds ? e.Seconds = parseInt(t.Seconds, 10) : "number" === typeof t.Seconds ? e.Seconds = t.Seconds : "object" === typeof t.Seconds && (e.Seconds = new rr.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber())), null != t.FractionalNanoseconds && (e.FractionalNanoseconds = t.FractionalNanoseconds >>> 0), e
                    }, t.toObject = function(t, e) {
                        e || (e = {});
                        var r = {};
                        if (e.defaults) {
                            if (rr.Long) {
                                var n = new rr.Long(0, 0, !1);
                                r.Seconds = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n
                            } else r.Seconds = e.longs === String ? "0" : 0;
                            r.FractionalNanoseconds = 0
                        }
                        return null != t.Seconds && t.hasOwnProperty("Seconds") && ("number" === typeof t.Seconds ? r.Seconds = e.longs === String ? String(t.Seconds) : t.Seconds : r.Seconds = e.longs === String ? rr.Long.prototype.toString.call(t.Seconds) : e.longs === Number ? new rr.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber() : t.Seconds), null != t.FractionalNanoseconds && t.hasOwnProperty("FractionalNanoseconds") && (r.FractionalNanoseconds = t.FractionalNanoseconds), r
                    }, t.prototype.toJSON = function() {
                        return this.constructor.toObject(this, Qe.util.toJSONOptions)
                    }, t
                })(), nr.Metadata = (() => {
                    function t(t) {
                        if (t)
                            for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]])
                    }
                    return t.prototype.MimeType = "", t.encode = function(t, e) {
                        return e || (e = er.create()), null != t.MimeType && Object.hasOwnProperty.call(t, "MimeType") && e.uint32(10).string(t.MimeType), e
                    }, t.decode = function(t, e) {
                        t instanceof tr || (t = tr.create(t));
                        for (var r = void 0 === e ? t.len : t.pos + e, n = new nr.Metadata; t.pos < r;) {
                            var o = t.uint32();
                            switch (o >>> 3) {
                                case 1:
                                    n.MimeType = t.string();
                                    break;
                                default:
                                    t.skipType(7 & o)
                            }
                        }
                        return n
                    }, t.fromObject = function(t) {
                        if (t instanceof nr.Metadata) return t;
                        var e = new nr.Metadata;
                        return null != t.MimeType && (e.MimeType = String(t.MimeType)), e
                    }, t.toObject = function(t, e) {
                        e || (e = {});
                        var r = {};
                        return e.defaults && (r.MimeType = ""), null != t.MimeType && t.hasOwnProperty("MimeType") && (r.MimeType = t.MimeType), r
                    }, t.prototype.toJSON = function() {
                        return this.constructor.toObject(this, Qe.util.toJSONOptions)
                    }, t
                })(), or),
                sr = ["raw", "directory", "file", "metadata", "symlink", "hamt-sharded-directory"],
                ar = ["directory", "hamt-sharded-directory"],
                cr = parseInt("0644", 8),
                ur = parseInt("0755", 8);

            function fr(t) {
                if (null != t) return "number" === typeof t ? 4095 & t : "0" === (t = t.toString()).substring(0, 1) ? 4095 & parseInt(t, 8) : 4095 & parseInt(t, 10)
            }

            function lr(t) {
                if (null == t) return;
                let e;
                if (null != t.secs && (e = {
                        secs: t.secs,
                        nsecs: t.nsecs
                    }), null != t.Seconds && (e = {
                        secs: t.Seconds,
                        nsecs: t.FractionalNanoseconds
                    }), Array.isArray(t) && (e = {
                        secs: t[0],
                        nsecs: t[1]
                    }), t instanceof Date) {
                    const r = t.getTime(),
                        n = Math.floor(r / 1e3);
                    e = {
                        secs: n,
                        nsecs: 1e3 * (r - 1e3 * n)
                    }
                }
                if (Object.prototype.hasOwnProperty.call(e, "secs")) {
                    if (null != e && null != e.nsecs && (e.nsecs < 0 || e.nsecs > 999999999)) throw Ye(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
                    return e
                }
            }
            class hr {
                static unmarshal(t) {
                    const e = ir.decode(t),
                        r = ir.toObject(e, {
                            defaults: !1,
                            arrays: !0,
                            longs: Number,
                            objects: !1
                        }),
                        n = new hr({
                            type: sr[r.Type],
                            data: r.Data,
                            blockSizes: r.blocksizes,
                            mode: r.mode,
                            mtime: r.mtime ? {
                                secs: r.mtime.Seconds,
                                nsecs: r.mtime.FractionalNanoseconds
                            } : void 0
                        });
                    return n._originalMode = r.mode || 0, n
                }
                constructor(t = {
                    type: "file"
                }) {
                    const {
                        type: e,
                        data: r,
                        blockSizes: n,
                        hashType: o,
                        fanout: i,
                        mtime: s,
                        mode: a
                    } = t;
                    if (e && !sr.includes(e)) throw Ye(new Error("Type: " + e + " is not valid"), "ERR_INVALID_TYPE");
                    this.type = e || "file", this.data = r, this.hashType = o, this.fanout = i, this.blockSizes = n || [], this._originalMode = 0, this.mode = fr(a), s && (this.mtime = lr(s), this.mtime && !this.mtime.nsecs && (this.mtime.nsecs = 0))
                }
                set mode(t) {
                    this._mode = this.isDirectory() ? ur : cr;
                    const e = fr(t);
                    void 0 !== e && (this._mode = e)
                }
                get mode() {
                    return this._mode
                }
                isDirectory() {
                    return Boolean(this.type && ar.includes(this.type))
                }
                addBlockSize(t) {
                    this.blockSizes.push(t)
                }
                removeBlockSize(t) {
                    this.blockSizes.splice(t, 1)
                }
                fileSize() {
                    if (this.isDirectory()) return 0;
                    let t = 0;
                    return this.blockSizes.forEach((e => {
                        t += e
                    })), this.data && (t += this.data.length), t
                }
                marshal() {
                    let t;
                    switch (this.type) {
                        case "raw":
                            t = ir.DataType.Raw;
                            break;
                        case "directory":
                            t = ir.DataType.Directory;
                            break;
                        case "file":
                            t = ir.DataType.File;
                            break;
                        case "metadata":
                            t = ir.DataType.Metadata;
                            break;
                        case "symlink":
                            t = ir.DataType.Symlink;
                            break;
                        case "hamt-sharded-directory":
                            t = ir.DataType.HAMTShard;
                            break;
                        default:
                            throw Ye(new Error("Type: " + t + " is not valid"), "ERR_INVALID_TYPE")
                    }
                    let e, r, n = this.data;
                    if (this.data && this.data.length || (n = void 0), null != this.mode && (e = 4294963200 & this._originalMode | (fr(this.mode) || 0), e !== cr || this.isDirectory() || (e = void 0), e === ur && this.isDirectory() && (e = void 0)), null != this.mtime) {
                        const t = lr(this.mtime);
                        t && (r = {
                            Seconds: t.secs,
                            FractionalNanoseconds: t.nsecs
                        }, 0 === r.FractionalNanoseconds && delete r.FractionalNanoseconds)
                    }
                    const o = {
                        Type: t,
                        Data: n,
                        filesize: this.isDirectory() ? void 0 : this.fileSize(),
                        blocksizes: this.blockSizes,
                        hashType: this.hashType,
                        fanout: this.fanout,
                        mode: e,
                        mtime: r
                    };
                    return ir.encode(o).finish()
                }
            }
            var dr = async (t, e, r) => {
                r.codec || (r.codec = o), r.hasher || (r.hasher = Ge.sha256), void 0 === r.cidVersion && (r.cidVersion = 1), r.codec === o && r.hasher !== Ge.sha256 && (r.cidVersion = 1);
                const n = await r.hasher.digest(t),
                    i = h.k.create(r.cidVersion, r.codec.code, n);
                return r.onlyHash || await e.put(i, t, {
                    signal: r.signal
                }), i
            };
            var pr = async (t, e, r) => {
                    const n = new hr({
                            type: "directory",
                            mtime: t.mtime,
                            mode: t.mode
                        }),
                        o = Me(Oe({
                            Data: n.marshal()
                        }));
                    return {
                        cid: await dr(o, e, r),
                        path: t.path,
                        unixfs: n,
                        size: o.length
                    }
                },
                yr = r(31303);
            var wr = async function(t, e) {
                    return e(await yr(t))
                },
                gr = r(78165);
            async function br(t, e, r) {
                const n = [];
                for await (const o of gr(t, r.maxChildrenPerNode)) n.push(await e(o));
                return n.length > 1 ? br(n, e, r) : n[0]
            }
            var mr = function(t, e, r) {
                return br(t, e, r)
            };
            var vr = async function(t, e, r) {
                const n = new kr(r.layerRepeat);
                let o = 0,
                    i = 1,
                    s = n;
                for await (const a of gr(t, r.maxChildrenPerNode)) s.isFull() && (s !== n && n.addChild(await s.reduce(e)), o && o % r.layerRepeat === 0 && i++, s = new _r(i, r.layerRepeat, o), o++), s.append(a);
                return s && s !== n && n.addChild(await s.reduce(e)), n.reduce(e)
            };
            class _r {
                constructor(t, e, r = 0) {
                    this.maxDepth = t, this.layerRepeat = e, this.currentDepth = 1, this.iteration = r, this.root = this.node = this.parent = {
                        children: [],
                        depth: this.currentDepth,
                        maxDepth: t,
                        maxChildren: (this.maxDepth - this.currentDepth) * this.layerRepeat
                    }
                }
                isFull() {
                    if (!this.root.data) return !1;
                    if (this.currentDepth < this.maxDepth && this.node.maxChildren) return this._addNextNodeToParent(this.node), !1;
                    const t = this._findParent(this.node, this.currentDepth);
                    return !t || (this._addNextNodeToParent(t), !1)
                }
                _addNextNodeToParent(t) {
                    this.parent = t;
                    const e = {
                        children: [],
                        depth: t.depth + 1,
                        parent: t,
                        maxDepth: this.maxDepth,
                        maxChildren: Math.floor(t.children.length / this.layerRepeat) * this.layerRepeat
                    };
                    t.children.push(e), this.currentDepth = e.depth, this.node = e
                }
                append(t) {
                    this.node.data = t
                }
                reduce(t) {
                    return this._reduce(this.root, t)
                }
                async _reduce(t, e) {
                    let r = [];
                    return t.children.length && (r = await Promise.all(t.children.filter((t => t.data)).map((t => this._reduce(t, e))))), e((t.data || []).concat(r))
                }
                _findParent(t, e) {
                    const r = t.parent;
                    if (r && 0 !== r.depth) return r.children.length !== r.maxChildren && r.maxChildren ? r : this._findParent(r, e)
                }
            }
            class kr extends _r {
                constructor(t) {
                    super(0, t), this.root.depth = 0, this.currentDepth = 1
                }
                addChild(t) {
                    this.root.children.push(t)
                }
                reduce(t) {
                    return t((this.root.data || []).concat(this.root.children))
                }
            }
            var Er = async function*(t, e, r) {
                for await (let n of t.content) yield async () => {
                    let i;
                    r.progress(n.length, t.path);
                    const s = {
                        codec: o,
                        cidVersion: r.cidVersion,
                        hasher: r.hasher,
                        onlyHash: r.onlyHash
                    };
                    return r.rawLeaves ? (s.codec = ce, s.cidVersion = 1) : (i = new hr({
                        type: r.leafType,
                        data: n
                    }), n = Me({
                        Data: i.marshal(),
                        Links: []
                    })), {
                        cid: await dr(n, e, s),
                        unixfs: i,
                        size: n.length
                    }
                }
            };
            const Ar = {
                flat: wr,
                balanced: mr,
                trickle: vr
            };
            var xr = function(t, e, r) {
                    const n = Ar[r.strategy];
                    if (!n) throw Ye(new Error(`Unknown importer build strategy name: ${r.strategy}`), "ERR_BAD_STRATEGY");
                    return n(async function*(t, e, r) {
                        let n, o, i = -1;
                        o = "function" === typeof r.bufferImporter ? r.bufferImporter : Er;
                        for await (const s of We(o(t, e, r), r.blockWriteConcurrency)) i++, 0 !== i ? (1 === i && n && (yield n, n = null), yield s) : n = s;
                        n && (n.single = !0, yield n)
                    }(t, e, r), ((t, e, r) => async function(n) {
                        if (1 === n.length && n[0].single && r.reduceSingleLeafToSelf) {
                            const i = n[0];
                            if (void 0 !== t.mtime || void 0 !== t.mode) {
                                let n = await e.get(i.cid);
                                i.unixfs = new hr({
                                    type: "file",
                                    mtime: t.mtime,
                                    mode: t.mode,
                                    data: n
                                }), n = Me(Oe({
                                    Data: i.unixfs.marshal()
                                })), i.cid = await dr(n, e, { ...r,
                                    codec: o,
                                    hasher: r.hasher,
                                    cidVersion: r.cidVersion
                                }), i.size = n.length
                            }
                            return {
                                cid: i.cid,
                                path: t.path,
                                unixfs: i.unixfs,
                                size: i.size
                            }
                        }
                        const i = new hr({
                                type: "file",
                                mtime: t.mtime,
                                mode: t.mode
                            }),
                            s = n.filter((t => !(t.cid.code !== ce.code || !t.size) || !(!t.unixfs || t.unixfs.data || !t.unixfs.fileSize()) || Boolean(t.unixfs && t.unixfs.data && t.unixfs.data.length))).map((t => t.cid.code === ce.code ? (i.addBlockSize(t.size), {
                                Name: "",
                                Tsize: t.size,
                                Hash: t.cid
                            }) : (t.unixfs && t.unixfs.data ? i.addBlockSize(t.unixfs.data.length) : i.addBlockSize(t.unixfs && t.unixfs.fileSize() || 0), {
                                Name: "",
                                Tsize: t.size,
                                Hash: t.cid
                            }))),
                            a = {
                                Data: i.marshal(),
                                Links: s
                            },
                            c = Me(Oe(a));
                        return {
                            cid: await dr(c, e, r),
                            path: t.path,
                            unixfs: i,
                            size: c.length + a.Links.reduce(((t, e) => t + e.Tsize), 0)
                        }
                    })(t, e, r), r)
                },
                Sr = r(9668),
                Tr = r(63060);
            var Br = async function*(t, e) {
                let r, n, o;
                if (e.minChunkSize && e.maxChunkSize && e.avgChunkSize) o = e.avgChunkSize, r = e.minChunkSize, n = e.maxChunkSize;
                else {
                    if (!e.avgChunkSize) throw Ye(new Error("please specify an average chunk size"), "ERR_INVALID_AVG_CHUNK_SIZE");
                    o = e.avgChunkSize, r = o / 3, n = o + o / 2
                }
                if (r < 16) throw Ye(new Error("rabin min must be greater than 16"), "ERR_INVALID_MIN_CHUNK_SIZE");
                n < r && (n = r), o < r && (o = r);
                const i = Math.floor(Math.log2(o));
                for await (const s of async function*(t, e) {
                    const r = await (0, Tr.create)(e.bits, e.min, e.max, e.window),
                        n = new Sr;
                    for await (const o of t) {
                        n.append(o);
                        const t = r.fingerprint(o);
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e],
                                o = n.slice(0, r);
                            n.consume(r), yield o
                        }
                    }
                    n.length && (yield n.slice(0))
                }(t, {
                    min: r,
                    max: n,
                    bits: i,
                    window: e.window,
                    polynomial: e.polynomial
                })) yield s
            };
            var Cr = async function*(t, e) {
                    let r = new Sr,
                        n = 0,
                        o = !1;
                    const i = e.maxChunkSize;
                    for await (const s of t) for (r.append(s), n += s.length; n >= i;)
                        if (yield r.slice(0, i), o = !0, i === r.length) r = new Sr, n = 0;
                        else {
                            const t = new Sr;
                            t.append(r.shallowSlice(i)), r = t, n -= i
                        }
                    o && !n || (yield r.slice(0, n))
                },
                Dr = r(68855);
            var Ir = async function*(t) {
                for await (const e of t) {
                    if (void 0 === e.length) throw Ye(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
                    if ("string" === typeof e || e instanceof String) yield(0, Dr.fromString)(e.toString());
                    else if (Array.isArray(e)) yield Uint8Array.from(e);
                    else {
                        if (!(e instanceof Uint8Array)) throw Ye(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
                        yield e
                    }
                }
            };

            function Nr(t) {
                try {
                    if (t instanceof Uint8Array) return async function*() {
                        yield t
                    }();
                    if (e = t, Symbol.iterator in e) return async function*() {
                        yield* t
                    }();
                    if (function(t) {
                            return Symbol.asyncIterator in t
                        }(t)) return t
                } catch {
                    throw Ye(new Error("Content was invalid"), "ERR_INVALID_CONTENT")
                }
                var e;
                throw Ye(new Error("Content was invalid"), "ERR_INVALID_CONTENT")
            }
            var zr = async function*(t, e, r) {
                for await (const n of t) if (n.path && ("./" === n.path.substring(0, 2) && (r.wrapWithDirectory = !0), n.path = n.path.split("/").filter((t => t && "." !== t)).join("/")), n.content) {
                    let t, o;
                    t = "function" === typeof r.chunker ? r.chunker : "rabin" === r.chunker ? Br : Cr, o = "function" === typeof r.chunkValidator ? r.chunkValidator : Ir;
                    const i = {
                        path: n.path,
                        mtime: n.mtime,
                        mode: n.mode,
                        content: t(o(Nr(n.content), r), r)
                    };
                    yield() => xr(i, e, r)
                } else {
                    if (!n.path) throw new Error("Import candidate must have content or path or both"); {
                        const t = {
                            path: n.path,
                            mtime: n.mtime,
                            mode: n.mode
                        };
                        yield() => pr(t, e, r)
                    }
                }
            };
            var Or = class {
                constructor(t, e) {
                    this.options = e || {}, this.root = t.root, this.dir = t.dir, this.path = t.path, this.dirty = t.dirty, this.flat = t.flat, this.parent = t.parent, this.parentKey = t.parentKey, this.unixfs = t.unixfs, this.mode = t.mode, this.mtime = t.mtime, this.cid = void 0, this.size = void 0
                }
                async put(t, e) {}
                get(t) {
                    return Promise.resolve(this)
                }
                async * eachChildSeries() {}
                async * flush(t) {}
            };
            var Ur = class extends Or {
                    constructor(t, e) {
                        super(t, e), this._children = {}
                    }
                    async put(t, e) {
                        this.cid = void 0, this.size = void 0, this._children[t] = e
                    }
                    get(t) {
                        return Promise.resolve(this._children[t])
                    }
                    childCount() {
                        return Object.keys(this._children).length
                    }
                    directChildrenCount() {
                        return this.childCount()
                    }
                    onlyChild() {
                        return this._children[Object.keys(this._children)[0]]
                    }
                    async * eachChildSeries() {
                        const t = Object.keys(this._children);
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            yield {
                                key: r,
                                child: this._children[r]
                            }
                        }
                    }
                    async * flush(t) {
                        const e = Object.keys(this._children),
                            r = [];
                        for (let c = 0; c < e.length; c++) {
                            let n = this._children[e[c]];
                            if (n instanceof Or)
                                for await (const e of n.flush(t)) n = e, yield n;
                            null != n.size && n.cid && r.push({
                                Name: e[c],
                                Tsize: n.size,
                                Hash: n.cid
                            })
                        }
                        const n = new hr({
                                type: "directory",
                                mtime: this.mtime,
                                mode: this.mode
                            }),
                            o = {
                                Data: n.marshal(),
                                Links: r
                            },
                            i = Me(Oe(o)),
                            s = await dr(i, t, this.options),
                            a = i.length + o.Links.reduce(((t, e) => t + (null == e.Tsize ? 0 : e.Tsize)), 0);
                        this.cid = s, this.size = a, yield {
                            cid: s,
                            unixfs: n,
                            path: this.path,
                            size: a
                        }
                    }
                },
                Lr = r(54563);
            var Pr = class extends Or {
                constructor(t, e) {
                    super(t, e), this._bucket = (0, Lr.createHAMT)({
                        hashFn: e.hamtHashFn,
                        bits: e.hamtBucketBits
                    })
                }
                async put(t, e) {
                    await this._bucket.put(t, e)
                }
                get(t) {
                    return this._bucket.get(t)
                }
                childCount() {
                    return this._bucket.leafCount()
                }
                directChildrenCount() {
                    return this._bucket.childrenCount()
                }
                onlyChild() {
                    return this._bucket.onlyChild()
                }
                async * eachChildSeries() {
                    for await (const {
                        key: t,
                        value: e
                    } of this._bucket.eachLeafSeries()) yield {
                        key: t,
                        child: e
                    }
                }
                async * flush(t) {
                    for await (const e of jr(this._bucket, t, this, this.options)) yield { ...e,
                        path: this.path
                    }
                }
            };
            async function* jr(t, e, r, n) {
                const o = t._children,
                    i = [];
                let s = 0;
                for (let h = 0; h < o.length; h++) {
                    const t = o.get(h);
                    if (!t) continue;
                    const r = h.toString(16).toUpperCase().padStart(2, "0");
                    if (t instanceof Lr.Bucket) {
                        let o;
                        for await (const r of await jr(t, e, null, n)) o = r;
                        if (!o) throw new Error("Could not flush sharded directory, no subshard found");
                        i.push({
                            Name: r,
                            Tsize: o.size,
                            Hash: o.cid
                        }), s += o.size
                    } else if ("function" === typeof t.value.flush) {
                        const n = t.value;
                        let o;
                        for await (const t of n.flush(e)) o = t, yield o;
                        const a = r + t.key;
                        i.push({
                            Name: a,
                            Tsize: o.size,
                            Hash: o.cid
                        }), s += o.size
                    } else {
                        const e = t.value;
                        if (!e.cid) continue;
                        const n = r + t.key,
                            o = e.size;
                        i.push({
                            Name: n,
                            Tsize: o,
                            Hash: e.cid
                        }), s += o
                    }
                }
                const a = Uint8Array.from(o.bitField().reverse()),
                    c = new hr({
                        type: "hamt-sharded-directory",
                        data: a,
                        fanout: t.tableSize(),
                        hashType: n.hamtHashCode,
                        mtime: r && r.mtime,
                        mode: r && r.mode
                    }),
                    u = Me(Oe({
                        Data: c.marshal(),
                        Links: i
                    })),
                    f = await dr(u, e, n),
                    l = u.length + s;
                yield {
                    cid: f,
                    unixfs: c,
                    size: l
                }
            }
            var Rr = async function t(e, r, n, o) {
                let i = r;
                r instanceof Ur && r.directChildrenCount() >= n && (i = await async function(t, e) {
                    const r = new Pr({
                        root: t.root,
                        dir: !0,
                        parent: t.parent,
                        parentKey: t.parentKey,
                        path: t.path,
                        dirty: t.dirty,
                        flat: !1,
                        mtime: t.mtime,
                        mode: t.mode
                    }, e);
                    for await (const {
                        key: n,
                        child: o
                    } of t.eachChildSeries()) await r.put(n, o);
                    return r
                }(r, o));
                const s = i.parent;
                if (s) {
                    if (i !== r) {
                        if (e && (e.parent = i), !i.parentKey) throw new Error("No parent key found");
                        await s.put(i.parentKey, i)
                    }
                    return t(i, s, n, o)
                }
                return i
            };
            var Mr = (t = "") => (t.trim().match(/([^\\/]|\\\/)+/g) || []).filter(Boolean);
            async function Fr(t, e, r) {
                const n = Mr(t.path || ""),
                    o = n.length - 1;
                let i = e,
                    s = "";
                for (let a = 0; a < n.length; a++) {
                    const c = n[a];
                    s += `${s?"/":""}${c}`;
                    const u = a === o;
                    if (i.dirty = !0, i.cid = void 0, i.size = void 0, u) await i.put(c, t), e = await Rr(null, i, r.shardSplitThreshold, r);
                    else {
                        let t = await i.get(c);
                        t && t instanceof Or || (t = new Ur({
                            root: !1,
                            dir: !0,
                            parent: i,
                            parentKey: c,
                            path: s,
                            dirty: !0,
                            flat: !0,
                            mtime: t && t.unixfs && t.unixfs.mtime,
                            mode: t && t.unixfs && t.unixfs.mode
                        }, r)), await i.put(c, t), i = t
                    }
                }
                return e
            }
            async function* Hr(t, e) {
                t instanceof Or ? yield* t.flush(e): t && t.unixfs && t.unixfs.isDirectory() && (yield t)
            }
            var Vr = async function*(t, e, r) {
                let n = new Ur({
                    root: !0,
                    dir: !0,
                    path: "",
                    dirty: !0,
                    flat: !0
                }, r);
                for await (const o of t) o && (n = await Fr(o, n, r), o.unixfs && o.unixfs.isDirectory() || (yield o));
                if (r.wrapWithDirectory) yield* Hr(n, e);
                else
                    for await (const o of n.eachChildSeries()) o && (yield* Hr(o.child, e))
            };
            async function* $r(t, e, r = {}) {
                const n = ((t = {}) => Je.bind({
                    ignoreUndefined: !0
                })(Xe, t))(r);
                let o, i, s;
                o = "function" === typeof r.dagBuilder ? r.dagBuilder : zr, i = "function" === typeof r.treeBuilder ? r.treeBuilder : Vr, s = Symbol.asyncIterator in t || Symbol.iterator in t ? t : [t];
                for await (const a of i(We(o(s, e, n), n.fileImportConcurrency), e, n)) yield {
                    cid: a.cid,
                    path: a.path,
                    unixfs: a.unixfs,
                    size: a.size
                }
            }
            var Wr = r(86154),
                Jr = r(23294),
                Gr = r(28132),
                qr = r(32121);

            function Zr(t) {
                return ArrayBuffer.isView(t) || t instanceof ArrayBuffer
            }

            function Kr(t) {
                return t.constructor && ("Blob" === t.constructor.name || "File" === t.constructor.name) && "function" === typeof t.stream
            }

            function Xr(t) {
                return "object" === typeof t && (t.path || t.content)
            }
            const Yr = t => t && "function" === typeof t.getReader;
            async function* Qr(t) {
                yield t
            }
            async function tn(t) {
                if (Zr(t)) return Qr(en(t));
                if ("string" === typeof t || t instanceof String) return Qr(en(t.toString()));
                if (Kr(t)) return Jr(t);
                if (Yr(t) && (t = Wr(t)), Symbol.iterator in t || Symbol.asyncIterator in t) {
                    const e = Gr(t),
                        {
                            value: r,
                            done: n
                        } = await e.peek();
                    if (n) return Qr(new Uint8Array(0));
                    if (e.push(r), Number.isInteger(r)) return Qr(Uint8Array.from(await yr(e)));
                    if (Zr(r) || "string" === typeof r || r instanceof String) return qr(e, en)
                }
                throw Ye(new Error(`Unexpected input: ${t}`), "ERR_UNEXPECTED_INPUT")
            }

            function en(t) {
                return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? new Uint8Array(t) : Array.isArray(t) ? Uint8Array.from(t) : (0, Dr.fromString)(t.toString())
            }
            async function rn(t, e) {
                const {
                    path: r,
                    mode: n,
                    mtime: o,
                    content: i
                } = t, s = {
                    path: r || "",
                    mode: fr(n),
                    mtime: lr(o)
                };
                return i ? s.content = await e(i) : r || (s.content = await e(t)), s
            }

            function nn(t) {
                return async function*(t, e) {
                    if (null === t || void 0 === t) throw Ye(new Error(`Unexpected input: ${t}`), "ERR_UNEXPECTED_INPUT");
                    if ("string" === typeof t || t instanceof String) yield rn(t.toString(), e);
                    else if (Zr(t) || Kr(t)) yield rn(t, e);
                    else {
                        if (Yr(t) && (t = Wr(t)), Symbol.iterator in t || Symbol.asyncIterator in t) {
                            const r = Gr(t),
                                {
                                    value: n,
                                    done: o
                                } = await r.peek();
                            if (o) return void(yield {
                                content: []
                            });
                            if (r.push(n), Number.isInteger(n) || Zr(n) || "string" === typeof n || n instanceof String) return void(yield rn(r, e));
                            throw Ye(new Error("Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead"), "ERR_UNEXPECTED_INPUT")
                        }
                        if (!Xr(t)) throw Ye(new Error('Unexpected input: cannot convert "' + typeof t + '" into ImportCandidate'), "ERR_UNEXPECTED_INPUT");
                        yield rn(t, e)
                    }
                }(t, tn)
            }
            async function on(t, e) {
                const {
                    path: r,
                    mode: n,
                    mtime: o,
                    content: i
                } = t, s = {
                    path: r || "",
                    mode: fr(n),
                    mtime: lr(o)
                };
                return i ? s.content = await e(i) : r || (s.content = await e(t)), s
            }

            function sn(t) {
                return async function*(t, e) {
                    if ("string" === typeof t || t instanceof String || Zr(t) || Kr(t) || t._readableState) throw Ye(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
                    if (Yr(t) && (t = Wr(t)), Symbol.iterator in t || Symbol.asyncIterator in t) {
                        const r = Gr(t),
                            {
                                value: n,
                                done: o
                            } = await r.peek();
                        if (o) return void(yield*[]);
                        if (r.push(n), Number.isInteger(n)) throw Ye(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
                        if (n._readableState) return void(yield* qr(r, (t => on({
                            content: t
                        }, e))));
                        if (Zr(n)) return void(yield on({
                            content: r
                        }, e));
                        if (Xr(n) || n[Symbol.iterator] || n[Symbol.asyncIterator] || Yr(n) || Kr(n)) return void(yield* qr(r, (t => on(t, e))))
                    }
                    if (Xr(t)) throw Ye(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
                    throw Ye(new Error("Unexpected input: " + typeof t), "ERR_UNEXPECTED_INPUT")
                }(t, tn)
            }

            function an(t) {
                return "string" === typeof t || t instanceof String || (e = t, ArrayBuffer.isView(e) || e instanceof ArrayBuffer) || function(t) {
                    return Boolean(t.constructor) && ("Blob" === t.constructor.name || "File" === t.constructor.name) && "function" === typeof t.stream
                }(t) || "_readableState" in t;
                var e
            }

            function cn(t) {
                return t = t || new Error("Not Found"), Ye(t, "ERR_NOT_FOUND")
            }

            function un(t) {
                return t = t || new Error("Aborted"), Ye(t, "ERR_ABORTED")
            }
            var fn = r(64593),
                ln = r(55565),
                hn = r(37939);
            const dn = (t, e) => async function*() {
                const r = await yr(t);
                yield* r.sort(e)
            }();
            r(22817);
            class pn extends class {
                open() {
                    return Promise.reject(new Error(".open is not implemented"))
                }
                close() {
                    return Promise.reject(new Error(".close is not implemented"))
                }
                put(t, e, r) {
                    return Promise.reject(new Error(".put is not implemented"))
                }
                get(t, e) {
                    return Promise.reject(new Error(".get is not implemented"))
                }
                has(t, e) {
                    return Promise.reject(new Error(".has is not implemented"))
                }
                delete(t, e) {
                    return Promise.reject(new Error(".delete is not implemented"))
                }
                async * putMany(t, e = {}) {
                    for await (const {
                        key: r,
                        value: n
                    } of t) await this.put(r, n, e), yield {
                        key: r,
                        value: n
                    }
                }
                async * getMany(t, e = {}) {
                    for await (const r of t) yield this.get(r, e)
                }
                async * deleteMany(t, e = {}) {
                    for await (const r of t) await this.delete(r, e), yield r
                }
                batch() {
                    let t = [],
                        e = [];
                    return {
                        put(e, r) {
                            t.push({
                                key: e,
                                value: r
                            })
                        },
                        delete(t) {
                            e.push(t)
                        },
                        commit: async r => {
                            await fn(this.putMany(t, r)), t = [], await fn(this.deleteMany(e, r)), e = []
                        }
                    }
                }
                async * _all(t, e) {
                    throw new Error("._all is not implemented")
                }
                async * _allKeys(t, e) {
                    throw new Error("._allKeys is not implemented")
                }
                query(t, e) {
                    let r = this._all(t, e);
                    if (null != t.prefix && (r = ln(r, (e => e.key.toString().startsWith(t.prefix || "")))), Array.isArray(t.filters) && (r = t.filters.reduce(((t, e) => ln(t, e)), r)), Array.isArray(t.orders) && (r = t.orders.reduce(((t, e) => dn(t, e)), r)), null != t.offset) {
                        let e = 0;
                        r = ln(r, (() => e++ >= (t.offset || 0)))
                    }
                    return null != t.limit && (r = hn(r, t.limit)), r
                }
                queryKeys(t, e) {
                    let r = this._allKeys(t, e);
                    if (null != t.prefix && (r = ln(r, (e => e.toString().startsWith(t.prefix || "")))), Array.isArray(t.filters) && (r = t.filters.reduce(((t, e) => ln(t, e)), r)), Array.isArray(t.orders) && (r = t.orders.reduce(((t, e) => dn(t, e)), r)), null != t.offset) {
                        let e = 0;
                        r = ln(r, (() => e++ >= t.offset))
                    }
                    return null != t.limit && (r = hn(r, t.limit)), r
                }
            } {
                constructor() {
                    super(), this.store = new Map
                }
                async * blocks() {
                    for (const [t, e] of this.store.entries()) yield {
                        cid: ne.k0.parse(t),
                        bytes: e
                    }
                }
                put(t, e) {
                    return this.store.set(t.toString(), e), Promise.resolve()
                }
                get(t) {
                    const e = this.store.get(t.toString());
                    if (!e) throw new Error(`block with cid ${t.toString()} no found`);
                    return Promise.resolve(e)
                }
                has(t) {
                    return Promise.resolve(this.store.has(t.toString()))
                }
                close() {
                    return this.store.clear(), Promise.resolve()
                }
            }
            const yn = {
                cidVersion: 1,
                chunker: "fixed",
                maxChunkSize: 262144,
                hasher: Ge.sha256,
                rawLeaves: !0,
                wrapWithDirectory: !0,
                maxChildrenPerNode: 174
            };
            async function wn({
                input: t,
                blockstore: e,
                hasher: r,
                maxChunkSize: n,
                maxChildrenPerNode: o,
                wrapWithDirectory: i,
                rawLeaves: s
            }) {
                if (!t || Array.isArray(t) && !t.length) throw new Error("missing input file(s)");
                const a = e || new pn,
                    c = await Ve($e(function(t) {
                        return an(t) ? nn(t) : sn(t)
                    }(t), (t => $r(t, a, { ...yn,
                        hasher: r || yn.hasher,
                        maxChunkSize: n || yn.maxChunkSize,
                        maxChildrenPerNode: o || yn.maxChildrenPerNode,
                        wrapWithDirectory: !1 !== i && yn.wrapWithDirectory,
                        rawLeaves: null == s ? yn.rawLeaves : s
                    }))));
                if (!c || !c.cid) throw new Error("given input could not be parsed correctly");
                const u = c.cid,
                    {
                        writer: f,
                        out: l
                    } = await te.create([u]),
                    h = l[Symbol.asyncIterator]();
                let d;
                return {
                    root: u,
                    out: {
                        [Symbol.asyncIterator]() {
                            if (null != d) throw new Error("Multiple iterator not supported");
                            return d = (async () => {
                                for await (const t of a.blocks()) await f.put(t);
                                await f.close(), e || await a.close()
                            })(), {
                                async next() {
                                    const t = await h.next();
                                    return t.done && await d, t
                                }
                            }
                        }
                    }
                }
            }
            var gn = r(28230);
            const bn = globalThis.fetch,
                mn = (globalThis.FormData, globalThis.Headers, globalThis.Request, globalThis.Response, globalThis.Blob),
                vn = (globalThis.File, globalThis.ReadableStream, pn),
                _n = new URL("https://nftstorage.link/"),
                kn = (t, e = {}) => {
                    const r = e.gateway || _n;
                    return "ipfs:" === (t = new URL(String(t))).protocol ? new URL(`/ipfs/${t.href.slice("ipfs://".length)}`, r) : t
                };
            class En {
                constructor(t, e, r) {
                    this._version = t, this._roots = e, this._blockstore = r
                }
                get version() {
                    return this._version
                }
                get blockstore() {
                    return this._blockstore
                }
                async getRoots() {
                    return this._roots
                }
                has(t) {
                    return this._blockstore.has(t)
                }
                async get(t) {
                    return {
                        cid: t,
                        bytes: await this._blockstore.get(t)
                    }
                }
                blocks() {
                    return this._blockstore.blocks()
                }
                async * cids() {
                    for await (const t of this.blocks()) yield t.cid
                }
            }
            class An {
                constructor(t, e, r) {
                    this.ipnft = t, this.url = e, this.data = r, Object.defineProperties(this, {
                        ipnft: {
                            enumerable: !0,
                            writable: !1
                        },
                        url: {
                            enumerable: !0,
                            writable: !1
                        },
                        data: {
                            enumerable: !1,
                            writable: !1
                        }
                    })
                }
                embed() {
                    return An.embed(this)
                }
                static embed({
                    data: t
                }) {
                    return xn(t, {
                        gateway: _n
                    })
                }
                static async encode(t) {
                    const e = new vn,
                        [r, o] = Dn(t),
                        i = JSON.parse(JSON.stringify(o)),
                        s = JSON.parse(JSON.stringify(o));
                    for (const [n, u] of r.entries()) {
                        const t = u.name || "blob",
                            r = u.stream(),
                            {
                                root: o
                            } = await wn({
                                input: [{
                                    path: t,
                                    content: r
                                }],
                                blockstore: e,
                                wrapWithDirectory: !0
                            }),
                            a = new URL(`ipfs://${o}/${t}`),
                            c = n.split(".");
                        Un(i, c, a), Un(s, c, o)
                    }
                    const {
                        root: a
                    } = await wn({
                        input: [{
                            path: "metadata.json",
                            content: JSON.stringify(i)
                        }],
                        blockstore: e,
                        wrapWithDirectory: !1
                    }), c = await (async ({
                        value: t,
                        codec: e,
                        hasher: r
                    }) => {
                        if ("undefined" === typeof t) throw new Error('Missing required argument "value"');
                        if (!e || !r) throw new Error("Missing required argument: codec or hasher");
                        const n = e.encode(t),
                            o = await r.digest(n),
                            i = ne.k0.create(1, e.code, o);
                        return new ae({
                            value: t,
                            bytes: n,
                            cid: i
                        })
                    })({
                        value: { ...s,
                            "metadata.json": a,
                            type: "nft"
                        },
                        codec: n,
                        hasher: Ge.sha256
                    });
                    return await e.put(c.cid, c.bytes), {
                        cid: c.cid,
                        token: new An(c.cid.toString(), `ipfs://${c.cid}/metadata.json`, i),
                        car: new En(1, [c.cid], e)
                    }
                }
            }
            const xn = (t, e) => In(t, Sn, Tn, e),
                Sn = t => t instanceof URL,
                Tn = (t, e) => [t, kn(e, t)],
                Bn = (t, e, r) => (t.set(r.join("."), e), [t, void 0]),
                Cn = t => t instanceof mn,
                Dn = t => Nn(t, Cn, Bn, new Map, []),
                In = (t, e, r, n) => {
                    const [, o] = Nn(t, e, r, n, []);
                    return o
                },
                Nn = (t, e, r, n, o) => {
                    return e(t, n, o) ? r(n, t, o) : Array.isArray(t) ? On(t, e, r, n, o) : "object" === typeof(i = t) && null != i ? zn(t, e, r, n, o) : [n, t];
                    var i
                },
                zn = (t, e, r, n, o) => {
                    let i = n;
                    const s = {};
                    for (const [a, c] of Object.entries(t)) {
                        const [t, n] = Nn(c, e, r, i, [...o, a]);
                        s[a] = n, i = t
                    }
                    return [i, s]
                },
                On = (t, e, r, n, o) => {
                    const i = [];
                    let s = n;
                    for (const [a, c] of t.entries()) {
                        const [t, n] = Nn(c, e, r, s, [...o, a]);
                        i[a] = n, s = t
                    }
                    return [s, i]
                },
                Un = (t, e, r) => {
                    const n = e.length - 1;
                    let o = t;
                    for (let [i, s] of e.entries()) i === n ? o[s] = r : o = o[s]
                };

            function Ln() {
                const t = gn(30, 1e4);
                return () => t((() => {}))
            }
            const Pn = Ln();
            class jn {
                constructor({
                    token: t,
                    did: e,
                    endpoint: r = new URL("https://api.nft.storage"),
                    rateLimiter: n
                }) {
                    this.token = t, this.endpoint = r, this.rateLimiter = n || Ln(), this.did = e
                }
                static auth({
                    token: t,
                    did: e
                }) {
                    if (!t) throw new Error("missing token");
                    return {
                        Authorization: `Bearer ${t}`,
                        "X-Client": "nft.storage/js",
                        ...e ? {
                            "x-agent-did": e
                        } : {}
                    }
                }
                static async storeBlob(t, e, r) {
                    const n = new vn;
                    let o;
                    try {
                        const {
                            cid: i,
                            car: s
                        } = await jn.encodeBlob(e, {
                            blockstore: n
                        });
                        await jn.storeCar(t, s, r), o = i.toString()
                    } finally {
                        await n.close()
                    }
                    return o
                }
                static async storeCar({
                    endpoint: t,
                    rateLimiter: e = Pn,
                    ...r
                }, n, {
                    onStoredChunk: o,
                    maxRetries: i,
                    decoders: s,
                    signal: a
                } = {}) {
                    const c = new URL("upload/", t),
                        l = jn.auth(r),
                        h = 52428800,
                        d = n instanceof mn ? await He.fromBlob(n, h, {
                            decoders: s
                        }) : new He(n, h, {
                            decoders: s
                        }),
                        p = u(3, (async function(t) {
                            const r = [];
                            for await (const e of t) r.push(e);
                            const n = new mn(r, {
                                    type: "application/car"
                                }),
                                s = await f((async () => {
                                    let t;
                                    await e();
                                    try {
                                        t = await bn(c.toString(), {
                                            method: "POST",
                                            headers: l,
                                            body: n,
                                            signal: a
                                        })
                                    } catch (o) {
                                        throw a && a.aborted ? new f.AbortError(o) : o
                                    }
                                    if (429 === t.status) throw new Error("rate limited");
                                    const r = await t.json();
                                    if (!r.ok) {
                                        if (401 === t.status) throw new f.AbortError(r.error.message);
                                        throw new Error(r.error.message)
                                    }
                                    return r.value.cid
                                }), {
                                    retries: null == i ? 5 : i
                                });
                            return o && o(n.size), s
                        }));
                    let y;
                    for await (const u of p(d.cars())) y = u;
                    return y
                }
                static async storeDirectory(t, e, r) {
                    const n = new vn;
                    let o;
                    try {
                        const {
                            cid: i,
                            car: s
                        } = await jn.encodeDirectory(e, {
                            blockstore: n
                        });
                        await jn.storeCar(t, s, r), o = i.toString()
                    } finally {
                        await n.close()
                    }
                    return o
                }
                static async store(t, e, r) {
                    const {
                        token: n,
                        car: o
                    } = await jn.encodeNFT(e);
                    return await jn.storeCar(t, o, r), n
                }
                static async status({
                    endpoint: t,
                    rateLimiter: e = Pn,
                    ...r
                }, n, o) {
                    const i = new URL(`${n}/`, t);
                    await e();
                    const s = await bn(i.toString(), {
                        method: "GET",
                        headers: jn.auth(r),
                        signal: o && o.signal
                    });
                    if (429 === s.status) throw new Error("rate limited");
                    const a = await s.json();
                    if (a.ok) return {
                        cid: a.value.cid,
                        deals: Fn(a.value.deals),
                        size: a.value.size,
                        pin: Hn(a.value.pin),
                        created: new Date(a.value.created)
                    };
                    throw new Error(a.error.message)
                }
                static async check({
                    endpoint: t,
                    rateLimiter: e = Pn
                }, r, n) {
                    const o = new URL(`check/${r}/`, t);
                    await e();
                    const i = await bn(o.toString(), {
                        signal: n && n.signal
                    });
                    if (429 === i.status) throw new Error("rate limited");
                    const s = await i.json();
                    if (s.ok) return {
                        cid: s.value.cid,
                        deals: Fn(s.value.deals),
                        pin: s.value.pin
                    };
                    throw new Error(s.error.message)
                }
                static async delete({
                    endpoint: t,
                    rateLimiter: e = Pn,
                    ...r
                }, n, o) {
                    const i = new URL(`${n}/`, t);
                    await e();
                    const s = await bn(i.toString(), {
                        method: "DELETE",
                        headers: jn.auth(r),
                        signal: o && o.signal
                    });
                    if (429 === s.status) throw new Error("rate limited");
                    const a = await s.json();
                    if (!a.ok) throw new Error(a.error.message)
                }
                static async encodeNFT(t) {
                    return Rn(t), An.encode(t)
                }
                static async encodeBlob(t, {
                    blockstore: e
                } = {}) {
                    if (0 === t.size) throw new Error("Content size is 0, make sure to provide some content");
                    return Mn([Vn("blob", t)], {
                        blockstore: e,
                        wrapWithDirectory: !1
                    })
                }
                static async encodeDirectory(t, {
                    blockstore: e
                } = {}) {
                    let r = 0;
                    const n = $e(t, (async function*(t) {
                            for await (const e of t) yield Vn(e.name, e), r += e.size
                        })),
                        o = await Mn(n, {
                            blockstore: e,
                            wrapWithDirectory: !0
                        });
                    if (0 === r) throw new Error("Total size of files should exceed 0, make sure to provide some content");
                    return o
                }
                storeBlob(t, e) {
                    return jn.storeBlob(this, t, e)
                }
                storeCar(t, e) {
                    return jn.storeCar(this, t, e)
                }
                storeDirectory(t, e) {
                    return jn.storeDirectory(this, t, e)
                }
                status(t, e) {
                    return jn.status(this, t, e)
                }
                delete(t, e) {
                    return jn.delete(this, t, e)
                }
                check(t, e) {
                    return jn.check(this, t, e)
                }
                store(t, e) {
                    return jn.store(this, t, e)
                }
            }
            const Rn = ({
                    name: t,
                    description: e,
                    image: r,
                    decimals: n
                }) => {
                    if ("string" !== typeof t) throw new TypeError("string property `name` identifying the asset is required");
                    if ("string" !== typeof e) throw new TypeError("string property `description` describing asset is required");
                    if (!(r instanceof mn)) throw new TypeError("property `image` must be a Blob or File object");
                    if (r.type.startsWith("image/") || console.warn("According to ERC721 Metadata JSON Schema 'image' must have 'image/*' mime type.\n\nFor better interoperability we would highly recommend storing content with different mime type under 'properties' namespace e.g. `properties: { video: file }` and using 'image' field for storing a preview image for it instead.\n\nFor more context please see ERC-721 specification https://eips.ethereum.org/EIPS/eip-721"), "undefined" !== typeof n && "number" !== typeof n) throw new TypeError("property `decimals` must be an integer value")
                },
                Mn = async (t, {
                    blockstore: e,
                    wrapWithDirectory: r
                } = {}) => {
                    e = e || new vn;
                    const {
                        root: n
                    } = await wn({
                        input: t,
                        blockstore: e,
                        wrapWithDirectory: r
                    });
                    return {
                        cid: n,
                        car: new En(1, [n], e)
                    }
                },
                Fn = t => t.map((t => {
                    const {
                        dealActivation: e,
                        dealExpiration: r,
                        lastChanged: n
                    } = {
                        dealExpiration: null,
                        dealActivation: null,
                        ...t
                    };
                    return { ...t,
                        lastChanged: new Date(n),
                        ...e && {
                            dealActivation: new Date(e)
                        },
                        ...r && {
                            dealExpiration: new Date(r)
                        }
                    }
                })),
                Hn = t => ({ ...t,
                    created: new Date(t.created)
                });

            function Vn(t, e) {
                let r;
                return {
                    path: t,
                    get content() {
                        return r = r || e.stream(), r
                    }
                }
            }
        },
        53160: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return o
                }
            });
            var n = r(16867);

            function o(t = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0, n.P)(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
            }
        },
        20605: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                concat: function() {
                    return i
                }
            });
            var n = r(53160),
                o = r(16867);

            function i(t, e) {
                e || (e = t.reduce(((t, e) => t + e.length), 0));
                const r = (0, n.E)(e);
                let i = 0;
                for (const n of t) r.set(n, i), i += n.length;
                return (0, o.P)(r)
            }
        },
        68855: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                fromString: function() {
                    return K
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                identity: function() {
                    return y
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base2: function() {
                    return w
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                base8: function() {
                    return g
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base10: function() {
                    return b
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return m
                },
                base16upper: function() {
                    return v
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base36: function() {
                    return k
                },
                base36upper: function() {
                    return E
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base64: function() {
                    return x
                },
                base64pad: function() {
                    return S
                },
                base64url: function() {
                    return T
                },
                base64urlpad: function() {
                    return B
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                base256emoji: function() {
                    return N
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                identity: function() {
                    return L
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                code: function() {
                    return M
                },
                decode: function() {
                    return H
                },
                encode: function() {
                    return F
                },
                name: function() {
                    return R
                }
            });
            var d = r(31114),
                p = r(95934);
            const y = (0, d.Dp)({
                    prefix: "\0",
                    name: "identity",
                    encode: t => (0, p.toString)(t),
                    decode: t => (0, p.fromString)(t)
                }),
                w = (0, d.ET)({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                g = (0, d.ET)({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                b = (0, d.kU)({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                m = (0, d.ET)({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                v = (0, d.ET)({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var _ = r(22817);
            const k = (0, d.kU)({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                E = (0, d.kU)({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var A = r(99086);
            const x = (0, d.ET)({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                S = (0, d.ET)({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                T = (0, d.ET)({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                B = (0, d.ET)({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                C = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                D = C.reduce(((t, e, r) => (t[r] = e, t)), []),
                I = C.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
            const N = (0, d.Dp)({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(t) {
                    return t.reduce(((t, e) => t += D[e]), "")
                },
                decode: function(t) {
                    const e = [];
                    for (const r of t) {
                        const t = I[r.codePointAt(0)];
                        if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            });
            var z = r(56155),
                O = r(28924);
            const U = p.coerce,
                L = {
                    code: 0,
                    name: "identity",
                    encode: U,
                    digest: t => O.Ue(0, U(t))
                };
            r(96945);
            const P = new TextEncoder,
                j = new TextDecoder,
                R = "json",
                M = 512,
                F = t => P.encode(JSON.stringify(t)),
                H = t => JSON.parse(j.decode(t));
            r(87232);
            const V = { ...n,
                ...o,
                ...i,
                ...s,
                ...a,
                ..._,
                ...c,
                ...A,
                ...u,
                ...f
            };
            var $ = r(53160);

            function W(t, e, r, n) {
                return {
                    name: t,
                    prefix: e,
                    encoder: {
                        name: t,
                        prefix: e,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }
            const J = W("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
                G = W("ascii", "a", (t => {
                    let e = "a";
                    for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }), (t => {
                    t = t.substring(1);
                    const e = (0, $.E)(t.length);
                    for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                    return e
                }));
            var q = {
                    utf8: J,
                    "utf-8": J,
                    hex: V.base16,
                    latin1: G,
                    ascii: G,
                    binary: G,
                    ...V
                },
                Z = r(16867);

            function K(t, e = "utf8") {
                const r = q[e];
                if (!r) throw new Error(`Unsupported encoding "${e}"`);
                return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : (0, Z.P)(globalThis.Buffer.from(t, "utf-8"))
            }
        },
        16867: function(t, e, r) {
            "use strict";

            function n(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }
            r.d(e, {
                P: function() {
                    return n
                }
            })
        }
    }
]);