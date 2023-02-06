/*!
 * SmartFoxServer 2X HTML5/JavaScript API v1.7.17
 * (c) gotoAndPlay | All rights reserved
 * http://www.smartfoxserver.com
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SFS2X = t() : e.SFS2X = t()
}(this, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 323)
    }([function(e, t, n) {
        var r = n(6),
            i = n(37),
            o = n(18),
            s = n(15),
            a = n(27),
            u = function(e, t, n) {
                var c, l, f, h, _ = e & u.F,
                    y = e & u.G,
                    p = e & u.S,
                    d = e & u.P,
                    g = e & u.B,
                    v = y ? r : p ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    b = y ? i : i[t] || (i[t] = {}),
                    m = b.prototype || (b.prototype = {});
                for (c in y && (n = t), n) f = ((l = !_ && v && void 0 !== v[c]) ? v : n)[c], h = g && l ? a(f, r) : d && "function" == typeof f ? a(Function.call, f) : f, v && s(v, c, f, e & u.U), b[c] != f && o(b, c, h), d && m[c] != f && (m[c] = f)
            };
        r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function(e) {
                function t(e) {
                    r(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "SFSError", n
                }
                return o(t, Error), t
            }(),
            a = function(e) {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    r(this, t);
                    var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return o.name = "SFSValidationError", o.errors = n, o
                }
                return o(t, s), t
            }(),
            u = function(e) {
                function t(e) {
                    r(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "SFSTypeError", n
                }
                return o(t, s), t
            }();
        t.SFSError = s, t.SFSValidationError = a, t.SFSTypeError = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Message = t.Requests = t.BaseRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(8),
            o = n(50);

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(t) {
                    s(this, e), this._reqObj = new i.SFSObject, this._id = t, this._targetController = 0, this._logger = o.Logger.instance
                }
                return r(e, null, [{
                    key: "KEY_ERROR_CODE",
                    get: function() {
                        return "ec"
                    }
                }, {
                    key: "KEY_ERROR_PARAMS",
                    get: function() {
                        return "ep"
                    }
                }]), r(e, [{
                    key: "getMessage",
                    value: function() {
                        return new u(this._id, this._targetController, this._reqObj)
                    }
                }, {
                    key: "validate",
                    value: function() {
                        this._logger.error("BaseRequest.validate = no child-class implementation found!")
                    }
                }, {
                    key: "execute",
                    value: function() {
                        this._logger.error("BaseRequest.execute = no child-class implementation found!")
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }]), e
            }(),
            u = function() {
                function e(t, n, r) {
                    s(this, e), this._id = t, this._targetController = n, this._content = r, Object.freeze(this)
                }
                return r(e, [{
                    key: "dump",
                    value: function() {
                        return (c.getNameFromId(this.id) + " (" + this.id + ")").trim() + "\n" + this.content.getDump()
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "targetController",
                    get: function() {
                        return this._targetController
                    }
                }, {
                    key: "content",
                    get: function() {
                        return this._content
                    }
                }]), e
            }(),
            c = Object.freeze({
                Handshake: 0,
                Login: 1,
                Logout: 2,
                JoinRoom: 4,
                CreateRoom: 6,
                GenericMessage: 7,
                ChangeRoomName: 8,
                ChangeRoomPassword: 9,
                SetRoomVariables: 11,
                SetUserVariables: 12,
                CallExtension: 13,
                LeaveRoom: 14,
                SubscribeRoomGroup: 15,
                UnsubscribeRoomGroup: 16,
                SpectatorToPlayer: 17,
                PlayerToSpectator: 18,
                ChangeRoomCapacity: 19,
                KickUser: 24,
                BanUser: 25,
                FindRooms: 27,
                FindUsers: 28,
                PingPong: 29,
                SetUserPosition: 30,
                InitBuddyList: 200,
                AddBuddy: 201,
                BlockBuddy: 202,
                RemoveBuddy: 203,
                SetBuddyVariables: 204,
                GoOnline: 205,
                InviteUsers: 300,
                InvitationReply: 301,
                CreateSFSGame: 302,
                QuickJoinGame: 303,
                JoinRoomInvite: 304,
                getNameFromId: function(e) {
                    for (var t in this)
                        if (this.hasOwnProperty(t) && this[t] === e) return t;
                    return ""
                }
            });
        t.BaseRequest = a, t.Requests = c, t.Message = u
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t, n) {
        var r = n(4);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(e, t, n) {
        var r = n(94)("wks"),
            i = n(35),
            o = n(6).Symbol,
            s = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = s && o[e] || (s ? o : i)("Symbol." + e))
        }).store = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Vec3D = t.SFSArray = t.SFSObject = t.SFSDataWrapper = t.SFSDataType = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(172),
            o = n(51),
            s = n(50),
            a = n(1);

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var c = Object.freeze({
                NULL: 0,
                BOOL: 1,
                BYTE: 2,
                SHORT: 3,
                INT: 4,
                LONG: 5,
                FLOAT: 6,
                DOUBLE: 7,
                UTF_STRING: 8,
                BOOL_ARRAY: 9,
                BYTE_ARRAY: 10,
                SHORT_ARRAY: 11,
                INT_ARRAY: 12,
                LONG_ARRAY: 13,
                FLOAT_ARRAY: 14,
                DOUBLE_ARRAY: 15,
                UTF_STRING_ARRAY: 16,
                SFS_ARRAY: 17,
                SFS_OBJECT: 18,
                TEXT: 20,
                fromId: function(e) {
                    if ("number" != typeof e) return null;
                    for (var t in this)
                        if (this.hasOwnProperty(t) && this[t] === e) return t
                },
                validate: function(e, t) {
                    if (null == this.fromId(e)) throw new a.SFSTypeError("Invalid type passed; use one of the SFSDataType constants");
                    var n = null;
                    if (e === this.NULL && null != t && (n = "a null value"), e !== this.NULL && null == t && (n = "a non-null value"), e !== this.BOOL || this.isBoolType(t) || (n = "a boolean value"), e !== this.BYTE || this.isByteType(t) || (n = "an integer number in this range: 0 <= value < 256"), e !== this.SHORT || this.isShortType(t) || (n = "an integer number in this range: -32.768 <= value < +32.768"), e !== this.INT || this.isIntType(t) || (n = "an integer number in this range: -2^31 <= value < +2^31"), e !== this.LONG || this.isLongType(t) || (n = "an integer number in this range: -(2^53 - 1) <= value <= +(2^53 - 1)"), e !== this.FLOAT || this.isFloatType(t) || (n = "a number in this range: -3.4028234663852886e+38 <= value <= 3.4028234663852886e+38"), e !== this.DOUBLE || this.isDoubleType(t) || (n = "a finite number"), e !== this.UTF_STRING && e !== this.TEXT || this.isStringType(t) || (n = "a string value"), e !== this.BOOL_ARRAY || this.isArrayType(t, this.isBoolType) || (n = "an array of boolean values"), e !== this.BYTE_ARRAY || t instanceof Uint8Array || (n = "a Uint8Array"), e !== this.SHORT_ARRAY || this.isArrayType(t, this.isShortType) || (n = "an array of integer numbers in this range: -32.768 <= value < +32.768"), e !== this.INT_ARRAY || this.isArrayType(t, this.isIntType) || (n = "an array of integer numbers in this range: -2^31 <= value < +2^31"), e !== this.LONG_ARRAY || this.isArrayType(t, this.isLongType) || (n = "an array of integer numbers in this range: -(2^53 - 1) <= value <= +(2^53 - 1)"), e !== this.FLOAT_ARRAY || this.isArrayType(t, this.isFloatType) || (n = "an array of numbers in this range: -3.4028234663852886e+38 <= value <= 3.4028234663852886e+38"), e !== this.DOUBLE_ARRAY || this.isArrayType(t, this.isDoubleType) || (n = "an array of finite numbers"), e !== this.UTF_STRING_ARRAY || this.isArrayType(t, this.isStringType) || (n = "an array of string values"), e !== this.SFS_OBJECT || t instanceof f || (n = "a SFSObject instance"), e !== this.SFS_ARRAY || t instanceof h || (n = "a SFSArray instance"), null != n) throw new a.SFSTypeError("Invalid value passed; type SFSDataType." + this.fromId(e) + " requires " + n)
                },
                isBoolType: function(e) {
                    return "boolean" == typeof e
                },
                isByteType: function(e) {
                    return "number" == typeof e && Math.floor(e) === e && e >= 0 && e < 256
                },
                isShortType: function(e) {
                    return "number" == typeof e && Math.floor(e) === e && e >= -32768 && e < 32768
                },
                isIntType: function(e) {
                    return "number" == typeof e && Math.floor(e) === e && e >= -2147483648 && e < 2147483648
                },
                isLongType: function(e) {
                    return "number" == typeof e && Math.floor(e) === e && Number.isSafeInteger(e)
                },
                isFloatType: function(e) {
                    return "number" == typeof e && e >= -3.4028234663852886e38 && e <= 3.4028234663852886e38
                },
                isDoubleType: function(e) {
                    return "number" == typeof e && isFinite(e)
                },
                isStringType: function(e) {
                    return "string" == typeof e
                },
                isArrayType: function(e, t) {
                    return e instanceof Array && (!(e.length > 0) || t(e[0]))
                }
            }),
            l = function e(t, n) {
                u(this, e), this.type = t, this.value = n, Object.freeze(this)
            },
            f = function() {
                function e() {
                    u(this, e), this._dataHolder = new Map, this._serializer = i.SFSDataSerializer.instance, Object.freeze(this)
                }
                return r(e, [{
                    key: "toBinary",
                    value: function() {
                        return this._serializer.object2binary(this)
                    }
                }, {
                    key: "keys",
                    value: function() {
                        return this._dataHolder.keys()
                    }
                }, {
                    key: "getWrappedItem",
                    value: function(e) {
                        return this._dataHolder.get(e)
                    }
                }, {
                    key: "getKeysArray",
                    value: function() {
                        return Array.from(this.keys())
                    }
                }, {
                    key: "size",
                    value: function() {
                        return this._dataHolder.size
                    }
                }, {
                    key: "containsKey",
                    value: function(e) {
                        return null != this.getWrappedItem(e)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this.getWrappedItem(e);
                        if (null != n && null != t && n.type != t) throw new a.SFSTypeError("Requested value is not of type SFSDataType." + c.fromId(t));
                        return null != n ? n.value : null
                    }
                }, {
                    key: "isNull",
                    value: function(e) {
                        var t = this.getWrappedItem(e);
                        return null == t || t.type == c.NULL
                    }
                }, {
                    key: "getBool",
                    value: function(e) {
                        return this.get(e, c.BOOL)
                    }
                }, {
                    key: "getByte",
                    value: function(e) {
                        return this.get(e, c.BYTE)
                    }
                }, {
                    key: "getShort",
                    value: function(e) {
                        return this.get(e, c.SHORT)
                    }
                }, {
                    key: "getInt",
                    value: function(e) {
                        return this.get(e, c.INT)
                    }
                }, {
                    key: "getLong",
                    value: function(e) {
                        var t = this.get(e, c.LONG);
                        return Number.isSafeInteger(t) || s.Logger.instance.warn("Long value contained in SFSObject is not safe"), t
                    }
                }, {
                    key: "getFloat",
                    value: function(e) {
                        return this.get(e, c.FLOAT)
                    }
                }, {
                    key: "getDouble",
                    value: function(e) {
                        return this.get(e, c.DOUBLE)
                    }
                }, {
                    key: "getUtfString",
                    value: function(e) {
                        return this.get(e, c.UTF_STRING)
                    }
                }, {
                    key: "getText",
                    value: function(e) {
                        return this.get(e, c.TEXT)
                    }
                }, {
                    key: "getBoolArray",
                    value: function(e) {
                        return this.get(e, c.BOOL_ARRAY)
                    }
                }, {
                    key: "getByteArray",
                    value: function(e) {
                        return this.get(e, c.BYTE_ARRAY)
                    }
                }, {
                    key: "getShortArray",
                    value: function(e) {
                        return this.get(e, c.SHORT_ARRAY)
                    }
                }, {
                    key: "getIntArray",
                    value: function(e) {
                        return this.get(e, c.INT_ARRAY)
                    }
                }, {
                    key: "getLongArray",
                    value: function(e) {
                        return this.get(e, c.LONG_ARRAY)
                    }
                }, {
                    key: "getFloatArray",
                    value: function(e) {
                        return this.get(e, c.FLOAT_ARRAY)
                    }
                }, {
                    key: "getDoubleArray",
                    value: function(e) {
                        return this.get(e, c.DOUBLE_ARRAY)
                    }
                }, {
                    key: "getUtfStringArray",
                    value: function(e) {
                        return this.get(e, c.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "getSFSObject",
                    value: function(e) {
                        return this.get(e, c.SFS_OBJECT)
                    }
                }, {
                    key: "getSFSArray",
                    value: function(e) {
                        return this.get(e, c.SFS_ARRAY)
                    }
                }, {
                    key: "put",
                    value: function(e, t, n) {
                        if (!(arguments.length > 3 && void 0 !== arguments[3] && arguments[3])) {
                            if ("string" != typeof e) throw "Invalid key passed; must be of type string";
                            c.validate(n, t)
                        }
                        this._dataHolder.set(e, new l(n, t))
                    }
                }, {
                    key: "putNull",
                    value: function(e) {
                        this.put(e, null, c.NULL)
                    }
                }, {
                    key: "putBool",
                    value: function(e, t) {
                        this.put(e, t, c.BOOL)
                    }
                }, {
                    key: "putByte",
                    value: function(e, t) {
                        this.put(e, t, c.BYTE)
                    }
                }, {
                    key: "putShort",
                    value: function(e, t) {
                        this.put(e, t, c.SHORT)
                    }
                }, {
                    key: "putInt",
                    value: function(e, t) {
                        this.put(e, t, c.INT)
                    }
                }, {
                    key: "putLong",
                    value: function(e, t) {
                        this.put(e, t, c.LONG)
                    }
                }, {
                    key: "putFloat",
                    value: function(e, t) {
                        this.put(e, t, c.FLOAT)
                    }
                }, {
                    key: "putDouble",
                    value: function(e, t) {
                        this.put(e, t, c.DOUBLE)
                    }
                }, {
                    key: "putUtfString",
                    value: function(e, t) {
                        this.put(e, t, c.UTF_STRING)
                    }
                }, {
                    key: "putText",
                    value: function(e, t) {
                        this.put(e, t, c.TEXT)
                    }
                }, {
                    key: "putBoolArray",
                    value: function(e, t) {
                        this.put(e, t, c.BOOL_ARRAY)
                    }
                }, {
                    key: "putByteArray",
                    value: function(e, t) {
                        this.put(e, t, c.BYTE_ARRAY)
                    }
                }, {
                    key: "putShortArray",
                    value: function(e, t) {
                        this.put(e, t, c.SHORT_ARRAY)
                    }
                }, {
                    key: "putIntArray",
                    value: function(e, t) {
                        this.put(e, t, c.INT_ARRAY)
                    }
                }, {
                    key: "putLongArray",
                    value: function(e, t) {
                        this.put(e, t, c.LONG_ARRAY)
                    }
                }, {
                    key: "putFloatArray",
                    value: function(e, t) {
                        this.put(e, t, c.FLOAT_ARRAY)
                    }
                }, {
                    key: "putDoubleArray",
                    value: function(e, t) {
                        this.put(e, t, c.DOUBLE_ARRAY)
                    }
                }, {
                    key: "putUtfStringArray",
                    value: function(e, t) {
                        this.put(e, t, c.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "putSFSArray",
                    value: function(e, t) {
                        this.put(e, t, c.SFS_ARRAY)
                    }
                }, {
                    key: "putSFSObject",
                    value: function(e, t) {
                        this.put(e, t, c.SFS_OBJECT)
                    }
                }, {
                    key: "getDump",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return 0 === this.size() ? "[ Empty SFSObject ]" : e ? o.DumpFormatter.prettyPrintDump(this._dump()) : this._dump()
                    }
                }, {
                    key: "getHexDump",
                    value: function() {
                        return o.DumpFormatter.hexDump(this.toBinary())
                    }
                }, {
                    key: "_dump",
                    value: function() {
                        var e = o.DumpFormatter.TOKEN_INDENT_OPEN,
                            t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, s = this.keys()[Symbol.iterator](); !(t = (i = s.next()).done); t = !0) {
                                var a = i.value,
                                    u = this.getWrappedItem(a);
                                e += "(" + c.fromId(u.type).toLowerCase() + ") " + a + ": ", u.type === c.SFS_OBJECT || u.type === c.SFS_ARRAY ? e += u.value.getDump(!1) : u.type === c.BYTE_ARRAY ? e += o.DumpFormatter.prettyPrintByteArray(u.value) : e += u.value, e += o.DumpFormatter.TOKEN_DIVIDER
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && s.return && s.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return e += o.DumpFormatter.TOKEN_INDENT_CLOSE
                    }
                }], [{
                    key: "newFromBinaryData",
                    value: function(e) {
                        return i.SFSDataSerializer.instance.binary2object(e)
                    }
                }]), e
            }(),
            h = function() {
                function e() {
                    u(this, e), this._dataHolder = [], this._serializer = i.SFSDataSerializer.instance, Object.freeze(this)
                }
                return r(e, [{
                    key: "toBinary",
                    value: function() {
                        return this._serializer.array2binary(this)
                    }
                }, {
                    key: "getWrappedItem",
                    value: function(e) {
                        return "number" != typeof e || e >= this._dataHolder.length ? null : this._dataHolder[e]
                    }
                }, {
                    key: "size",
                    value: function() {
                        return this._dataHolder.length
                    }
                }, {
                    key: "contains",
                    value: function(t) {
                        if (t instanceof e || t instanceof f) throw new a.SFSError("SFSArray and SFSObject types are not supported by the SFSArray.contains method");
                        for (var n = 0; n < this.size(); n++) {
                            var r = this.getWrappedItem(n);
                            if (null != r && r.value == t) return !0
                        }
                        return !1
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if ("number" != typeof e || e >= this._dataHolder.length) return null;
                        var n = this.getWrappedItem(e);
                        if (null != n && null != t && n.type != t) throw new a.SFSTypeError("Requested value is not of type SFSDataType." + c.fromId(t));
                        return null != n ? n.value : null
                    }
                }, {
                    key: "isNull",
                    value: function(e) {
                        var t = this.getWrappedItem(e);
                        return null == t || t.type == c.NULL
                    }
                }, {
                    key: "getBool",
                    value: function(e) {
                        return this.get(e, c.BOOL)
                    }
                }, {
                    key: "getByte",
                    value: function(e) {
                        return this.get(e, c.BYTE)
                    }
                }, {
                    key: "getShort",
                    value: function(e) {
                        return this.get(e, c.SHORT)
                    }
                }, {
                    key: "getInt",
                    value: function(e) {
                        return this.get(e, c.INT)
                    }
                }, {
                    key: "getLong",
                    value: function(e) {
                        var t = this.get(e, c.LONG);
                        return Number.isSafeInteger(t) || s.Logger.instance.warn("Long value contained in SFSObject is not safe"), t
                    }
                }, {
                    key: "getFloat",
                    value: function(e) {
                        return this.get(e, c.FLOAT)
                    }
                }, {
                    key: "getDouble",
                    value: function(e) {
                        return this.get(e, c.DOUBLE)
                    }
                }, {
                    key: "getUtfString",
                    value: function(e) {
                        return this.get(e, c.UTF_STRING)
                    }
                }, {
                    key: "getText",
                    value: function(e) {
                        return this.get(e, c.TEXT)
                    }
                }, {
                    key: "getBoolArray",
                    value: function(e) {
                        return this.get(e, c.BOOL_ARRAY)
                    }
                }, {
                    key: "getByteArray",
                    value: function(e) {
                        return this.get(e, c.BYTE_ARRAY)
                    }
                }, {
                    key: "getShortArray",
                    value: function(e) {
                        return this.get(e, c.SHORT_ARRAY)
                    }
                }, {
                    key: "getIntArray",
                    value: function(e) {
                        return this.get(e, c.INT_ARRAY)
                    }
                }, {
                    key: "getLongArray",
                    value: function(e) {
                        return this.get(e, c.LONG_ARRAY)
                    }
                }, {
                    key: "getFloatArray",
                    value: function(e) {
                        return this.get(e, c.FLOAT_ARRAY)
                    }
                }, {
                    key: "getDoubleArray",
                    value: function(e) {
                        return this.get(e, c.DOUBLE_ARRAY)
                    }
                }, {
                    key: "getUtfStringArray",
                    value: function(e) {
                        return this.get(e, c.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "getSFSObject",
                    value: function(e) {
                        return this.get(e, c.SFS_OBJECT)
                    }
                }, {
                    key: "getSFSArray",
                    value: function(e) {
                        return this.get(e, c.SFS_ARRAY)
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || c.validate(t, e), this._dataHolder.push(new l(t, e))
                    }
                }, {
                    key: "addNull",
                    value: function() {
                        this.add(null, c.NULL)
                    }
                }, {
                    key: "addBool",
                    value: function(e) {
                        this.add(e, c.BOOL)
                    }
                }, {
                    key: "addByte",
                    value: function(e) {
                        this.add(e, c.BYTE)
                    }
                }, {
                    key: "addShort",
                    value: function(e) {
                        this.add(e, c.SHORT)
                    }
                }, {
                    key: "addInt",
                    value: function(e) {
                        this.add(e, c.INT)
                    }
                }, {
                    key: "addLong",
                    value: function(e) {
                        this.add(e, c.LONG)
                    }
                }, {
                    key: "addFloat",
                    value: function(e) {
                        this.add(e, c.FLOAT)
                    }
                }, {
                    key: "addDouble",
                    value: function(e) {
                        this.add(e, c.DOUBLE)
                    }
                }, {
                    key: "addUtfString",
                    value: function(e) {
                        this.add(e, c.UTF_STRING)
                    }
                }, {
                    key: "addText",
                    value: function(e) {
                        this.add(e, c.TEXT)
                    }
                }, {
                    key: "addBoolArray",
                    value: function(e) {
                        this.add(e, c.BOOL_ARRAY)
                    }
                }, {
                    key: "addByteArray",
                    value: function(e) {
                        this.add(e, c.BYTE_ARRAY)
                    }
                }, {
                    key: "addShortArray",
                    value: function(e) {
                        this.add(e, c.SHORT_ARRAY)
                    }
                }, {
                    key: "addIntArray",
                    value: function(e) {
                        this.add(e, c.INT_ARRAY)
                    }
                }, {
                    key: "addLongArray",
                    value: function(e) {
                        this.add(e, c.LONG_ARRAY)
                    }
                }, {
                    key: "addFloatArray",
                    value: function(e) {
                        this.add(e, c.FLOAT_ARRAY)
                    }
                }, {
                    key: "addDoubleArray",
                    value: function(e) {
                        this.add(e, c.DOUBLE_ARRAY)
                    }
                }, {
                    key: "addUtfStringArray",
                    value: function(e) {
                        this.add(e, c.UTF_STRING_ARRAY)
                    }
                }, {
                    key: "addSFSArray",
                    value: function(e) {
                        this.add(e, c.SFS_ARRAY)
                    }
                }, {
                    key: "addSFSObject",
                    value: function(e) {
                        this.add(e, c.SFS_OBJECT)
                    }
                }, {
                    key: "getDump",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return 0 === this.size() ? "[ Empty SFSArray ]" : e ? o.DumpFormatter.prettyPrintDump(this._dump()) : this._dump()
                    }
                }, {
                    key: "getHexDump",
                    value: function() {
                        return o.DumpFormatter.hexDump(this.toBinary())
                    }
                }, {
                    key: "_dump",
                    value: function() {
                        for (var e = o.DumpFormatter.TOKEN_INDENT_OPEN, t = 0; t < this.size(); t++) {
                            var n = this.getWrappedItem(t);
                            e += "(" + c.fromId(n.type).toLowerCase() + ") " + t + ": ", n.type === c.SFS_OBJECT || n.type === c.SFS_ARRAY ? e += n.value.getDump(!1) : n.type === c.BYTE_ARRAY ? e += o.DumpFormatter.prettyPrintByteArray(n.value) : e += n.value, e += o.DumpFormatter.TOKEN_DIVIDER
                        }
                        return e += o.DumpFormatter.TOKEN_INDENT_CLOSE
                    }
                }], [{
                    key: "newFromBinaryData",
                    value: function(e) {
                        return i.SFSDataSerializer.instance.binary2array(e)
                    }
                }]), e
            }(),
            _ = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    u(this, e), this.px = t, this.py = n, this.pz = r, this._useFloatCoordinates = i
                }
                return r(e, [{
                    key: "toString",
                    value: function() {
                        return "(" + this.px + "," + this.py + "," + this.pz + ")"
                    }
                }, {
                    key: "toArray",
                    value: function() {
                        return [this.px, this.py, this.pz]
                    }
                }, {
                    key: "isFloat",
                    get: function() {
                        return this._useFloatCoordinates
                    }
                }], [{
                    key: "fromArray",
                    value: function(t) {
                        return new e(t[0], t[1], t[2])
                    }
                }]), e
            }();
        t.SFSDataType = c, t.SFSDataWrapper = l, t.SFSObject = f, t.SFSArray = h, t.Vec3D = _
    }, function(e, t, n) {
        var r = n(5),
            i = n(148),
            o = n(30),
            s = Object.defineProperty;
        t.f = n(11) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return s(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MMORoom = t.SFSRoom = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(8),
            o = n(49),
            s = n(119),
            a = n(1);

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var c = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default",
                        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    u(this, e), this._id = t, this._name = n, this._groupId = r, this._isGame = !1, this._isHidden = !1, this._isJoined = !1, this._isPasswordProtected = !1, this._maxUsers = 0, this._maxSpectators = 0, this._userCount = 0, this._specCount = 0, this._isManaged = !0, this._variables = new Map, this._userManager = new s.SFSUserManager, this._roomManager = null, this.properties = {}, i && Object.seal(this)
                }
                return r(e, [{
                    key: "toString",
                    value: function() {
                        return "[Room: " + this.name + ", Id: " + this.id + ", Group Id: " + this.groupId + "]"
                    }
                }, {
                    key: "getUserByName",
                    value: function(e) {
                        return this._userManager.getUserByName(e)
                    }
                }, {
                    key: "getUserById",
                    value: function(e) {
                        return this._userManager.getUserById(e)
                    }
                }, {
                    key: "containsUser",
                    value: function(e) {
                        return this._userManager.containsUser(e)
                    }
                }, {
                    key: "getUserList",
                    value: function() {
                        return this._userManager.getUserList()
                    }
                }, {
                    key: "getPlayerList",
                    value: function() {
                        var e = this;
                        return this._userManager.getUserList().filter(function(t) {
                            return t.isPlayerInRoom(e)
                        })
                    }
                }, {
                    key: "getSpectatorList",
                    value: function() {
                        var e = this;
                        return this._userManager.getUserList().filter(function(t) {
                            return t.isSpectatorInRoom(e)
                        })
                    }
                }, {
                    key: "getVariable",
                    value: function(e) {
                        return this._variables.get(e)
                    }
                }, {
                    key: "containsVariable",
                    value: function(e) {
                        return this._variables.has(e)
                    }
                }, {
                    key: "getVariables",
                    value: function() {
                        return Array.from(this._variables.values())
                    }
                }, {
                    key: "getRoomManager",
                    value: function() {
                        return this._roomManager
                    }
                }, {
                    key: "_addUser",
                    value: function(e) {
                        this._userManager._addUser(e)
                    }
                }, {
                    key: "_removeUser",
                    value: function(e) {
                        this._userManager._removeUser(e)
                    }
                }, {
                    key: "_setVariables",
                    value: function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                var s = i.value;
                                this._setVariable(s)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function(e) {
                        e.isNull ? this._variables.delete(e.name) : this._variables.set(e.name, e)
                    }
                }, {
                    key: "_setRoomManager",
                    value: function(e) {
                        if (null != this._roomManager) throw new a.SFSError("Room Manager already assigned to " + this.toString());
                        this._roomManager = e
                    }
                }, {
                    key: "_merge",
                    value: function(e) {
                        if (!this.isJoined) {
                            this._variables.clear();
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e._variables.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var s = i.value;
                                    this._setVariable(s)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            this._userManager._clearAll();
                            var a = !0,
                                u = !1,
                                c = void 0;
                            try {
                                for (var l, f = e.getUserList()[Symbol.iterator](); !(a = (l = f.next()).done); a = !0) {
                                    var h = l.value;
                                    this._addUser(h)
                                }
                            } catch (e) {
                                u = !0, c = e
                            } finally {
                                try {
                                    !a && f.return && f.return()
                                } finally {
                                    if (u) throw c
                                }
                            }
                        }
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "groupId",
                    get: function() {
                        return this._groupId
                    }
                }, {
                    key: "isGame",
                    get: function() {
                        return this._isGame
                    }
                }, {
                    key: "isHidden",
                    get: function() {
                        return this._isHidden
                    }
                }, {
                    key: "isJoined",
                    get: function() {
                        return this._isJoined
                    }
                }, {
                    key: "isPasswordProtected",
                    get: function() {
                        return this._isPasswordProtected
                    }
                }, {
                    key: "maxUsers",
                    get: function() {
                        return this._maxUsers
                    }
                }, {
                    key: "maxSpectators",
                    get: function() {
                        return this._maxSpectators
                    }
                }, {
                    key: "userCount",
                    get: function() {
                        return this.isJoined ? this.isGame ? this.getPlayerList().length : this._userManager.getUserCount() : this._userCount
                    }
                }, {
                    key: "spectatorCount",
                    get: function() {
                        return this.isGame ? this.isJoined ? this.getSpectatorList().length : this._specCount : 0
                    }
                }, {
                    key: "capacity",
                    get: function() {
                        return this.maxUsers + this.maxSpectators
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function(t) {
                        var n = 14 === t.size(),
                            r = void 0;
                        (r = n ? new l(t.get(0), t.get(1), t.get(2)) : new e(t.get(0), t.get(1), t.get(2)))._isGame = t.get(3), r._isHidden = t.get(4), r._isPasswordProtected = t.get(5), r._userCount = t.get(6), r._maxUsers = t.get(7);
                        var s = t.get(8);
                        if (null != s)
                            for (var a = 0; a < s.size(); a++) {
                                var u = o.SFSRoomVariable.fromSFSArray(s.get(a));
                                r._setVariable(u)
                            }
                        return r._isGame && (r._specCount = t.get(9), r._maxSpectators = t.get(10)), n && (r._defaultAOI = i.Vec3D.fromArray(t.get(11)), null != t.get(13) && (r._lowerMapLimit = i.Vec3D.fromArray(t.get(12)), r._higherMapLimit = i.Vec3D.fromArray(t.get(13)))), r
                    }
                }]), e
            }(),
            l = function(e) {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                    u(this, t);
                    var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, !1));
                    return i._defaultAOI = null, i._lowerMapLimit = null, i._higherMapLimit = null, i._itemsById = new Map, Object.seal(i), i
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, c), r(t, [{
                    key: "getMMOItem",
                    value: function(e) {
                        return this._itemsById.get(e)
                    }
                }, {
                    key: "getMMOItems",
                    value: function() {
                        return Array.from(this._itemsById.values())
                    }
                }, {
                    key: "_addMMOItem",
                    value: function(e) {
                        this._itemsById.set(e.id, e)
                    }
                }, {
                    key: "_removeItem",
                    value: function(e) {
                        this._itemsById.delete(e)
                    }
                }, {
                    key: "defaultAOI",
                    get: function() {
                        return this._defaultAOI
                    }
                }, {
                    key: "lowerMapLimit",
                    get: function() {
                        return this._lowerMapLimit
                    }
                }, {
                    key: "higherMapLimit",
                    get: function() {
                        return this._higherMapLimit
                    }
                }]), t
            }();
        t.SFSRoom = c, t.MMORoom = l
    }, function(e, t, n) {
        e.exports = !n(3)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        var r = n(24),
            i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    }, function(e, t, n) {
        var r = n(0),
            i = n(3),
            o = n(28),
            s = /"/g,
            a = function(e, t, n, r) {
                var i = String(o(e)),
                    a = "<" + t;
                return "" !== n && (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'), a + ">" + i + "</" + t + ">"
            };
        e.exports = function(e, t) {
            var n = {};
            n[e] = t(a), r(r.P + r.F * i(function() {
                var t = "" [e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3
            }), "String", n)
        }
    }, function(e, t, n) {
        var r = n(28);
        e.exports = function(e) {
            return Object(r(e))
        }
    }, function(e, t, n) {
        var r = n(6),
            i = n(18),
            o = n(16),
            s = n(35)("src"),
            a = Function.toString,
            u = ("" + a).split("toString");
        n(37).inspectSource = function(e) {
            return a.call(e)
        }, (e.exports = function(e, t, n, a) {
            var c = "function" == typeof n;
            c && (o(n, "name") || i(n, "name", t)), e[t] !== n && (c && (o(n, s) || i(n, s, e[t] ? "" + e[t] : u.join(String(t)))), e === r ? e[t] = n : a ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || a.call(this)
        })
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = function(e, t) {
            return !!e && r(function() {
                t ? e.call(null, function() {}, 1) : e.call(null)
            })
        }
    }, function(e, t, n) {
        var r = n(9),
            i = n(36);
        e.exports = n(11) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, function(e, t, n) {
        var r = n(27),
            i = n(54),
            o = n(14),
            s = n(12),
            a = n(229);
        e.exports = function(e, t) {
            var n = 1 == e,
                u = 2 == e,
                c = 3 == e,
                l = 4 == e,
                f = 6 == e,
                h = 5 == e || f,
                _ = t || a;
            return function(t, a, y) {
                for (var p, d, g = o(t), v = i(g), b = r(a, y, 3), m = s(v.length), S = 0, E = n ? _(t, m) : u ? _(t, 0) : void 0; m > S; S++)
                    if ((h || S in v) && (d = b(p = v[S], S, g), e))
                        if (n) E[S] = d;
                        else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return p;
                    case 6:
                        return S;
                    case 2:
                        E.push(p)
                } else if (l) return !1;
                return f ? -1 : c || l ? l : E
            }
        }
    }, function(e, t, n) {
        var r = n(0),
            i = n(37),
            o = n(3);
        e.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e],
                s = {};
            s[e] = t(n), r(r.S + r.F * o(function() {
                n(1)
            }), "Object", s)
        }
    }, function(e, t, n) {
        var r = n(54),
            i = n(28);
        e.exports = function(e) {
            return r(i(e))
        }
    }, function(e, t, n) {
        "use strict";
        if (n(11)) {
            var r = n(43),
                i = n(6),
                o = n(3),
                s = n(0),
                a = n(59),
                u = n(74),
                c = n(27),
                l = n(41),
                f = n(36),
                h = n(18),
                _ = n(40),
                y = n(24),
                p = n(12),
                d = n(121),
                g = n(34),
                v = n(30),
                b = n(16),
                m = n(65),
                S = n(4),
                E = n(14),
                R = n(79),
                O = n(33),
                A = n(31),
                w = n(32).f,
                I = n(78),
                M = n(35),
                T = n(7),
                k = n(19),
                P = n(93),
                F = n(75),
                N = n(128),
                j = n(53),
                U = n(63),
                B = n(42),
                L = n(77),
                D = n(129),
                Y = n(9),
                C = n(23),
                x = Y.f,
                q = C.f,
                V = i.RangeError,
                K = i.TypeError,
                G = i.Uint8Array,
                z = Array.prototype,
                H = u.ArrayBuffer,
                J = u.DataView,
                W = k(0),
                X = k(2),
                Z = k(3),
                Q = k(4),
                $ = k(5),
                ee = k(6),
                te = P(!0),
                ne = P(!1),
                re = N.values,
                ie = N.keys,
                oe = N.entries,
                se = z.lastIndexOf,
                ae = z.reduce,
                ue = z.reduceRight,
                ce = z.join,
                le = z.sort,
                fe = z.slice,
                he = z.toString,
                _e = z.toLocaleString,
                ye = T("iterator"),
                pe = T("toStringTag"),
                de = M("typed_constructor"),
                ge = M("def_constructor"),
                ve = a.CONSTR,
                be = a.TYPED,
                me = a.VIEW,
                Se = k(1, function(e, t) {
                    return we(F(e, e[ge]), t)
                }),
                Ee = o(function() {
                    return 1 === new G(new Uint16Array([1]).buffer)[0]
                }),
                Re = !!G && !!G.prototype.set && o(function() {
                    new G(1).set({})
                }),
                Oe = function(e, t) {
                    var n = y(e);
                    if (n < 0 || n % t) throw V("Wrong offset!");
                    return n
                },
                Ae = function(e) {
                    if (S(e) && be in e) return e;
                    throw K(e + " is not a typed array!")
                },
                we = function(e, t) {
                    if (!(S(e) && de in e)) throw K("It is not a typed array constructor!");
                    return new e(t)
                },
                Ie = function(e, t) {
                    return Me(F(e, e[ge]), t)
                },
                Me = function(e, t) {
                    for (var n = 0, r = t.length, i = we(e, r); r > n;) i[n] = t[n++];
                    return i
                },
                Te = function(e, t, n) {
                    x(e, t, {
                        get: function() {
                            return this._d[n]
                        }
                    })
                },
                ke = function(e) {
                    var t, n, r, i, o, s, a = E(e),
                        u = arguments.length,
                        l = u > 1 ? arguments[1] : void 0,
                        f = void 0 !== l,
                        h = I(a);
                    if (void 0 != h && !R(h)) {
                        for (s = h.call(a), r = [], t = 0; !(o = s.next()).done; t++) r.push(o.value);
                        a = r
                    }
                    for (f && u > 2 && (l = c(l, arguments[2], 2)), t = 0, n = p(a.length), i = we(this, n); n > t; t++) i[t] = f ? l(a[t], t) : a[t];
                    return i
                },
                Pe = function() {
                    for (var e = 0, t = arguments.length, n = we(this, t); t > e;) n[e] = arguments[e++];
                    return n
                },
                Fe = !!G && o(function() {
                    _e.call(new G(1))
                }),
                Ne = function() {
                    return _e.apply(Fe ? fe.call(Ae(this)) : Ae(this), arguments)
                },
                je = {
                    copyWithin: function(e, t) {
                        return D.call(Ae(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    every: function(e) {
                        return Q(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    fill: function(e) {
                        return L.apply(Ae(this), arguments)
                    },
                    filter: function(e) {
                        return Ie(this, X(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    find: function(e) {
                        return $(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    findIndex: function(e) {
                        return ee(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    forEach: function(e) {
                        W(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    indexOf: function(e) {
                        return ne(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    includes: function(e) {
                        return te(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    join: function(e) {
                        return ce.apply(Ae(this), arguments)
                    },
                    lastIndexOf: function(e) {
                        return se.apply(Ae(this), arguments)
                    },
                    map: function(e) {
                        return Se(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    reduce: function(e) {
                        return ae.apply(Ae(this), arguments)
                    },
                    reduceRight: function(e) {
                        return ue.apply(Ae(this), arguments)
                    },
                    reverse: function() {
                        for (var e, t = Ae(this).length, n = Math.floor(t / 2), r = 0; r < n;) e = this[r], this[r++] = this[--t], this[t] = e;
                        return this
                    },
                    some: function(e) {
                        return Z(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    sort: function(e) {
                        return le.call(Ae(this), e)
                    },
                    subarray: function(e, t) {
                        var n = Ae(this),
                            r = n.length,
                            i = g(e, r);
                        return new(F(n, n[ge]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, p((void 0 === t ? r : g(t, r)) - i))
                    }
                },
                Ue = function(e, t) {
                    return Ie(this, fe.call(Ae(this), e, t))
                },
                Be = function(e) {
                    Ae(this);
                    var t = Oe(arguments[1], 1),
                        n = this.length,
                        r = E(e),
                        i = p(r.length),
                        o = 0;
                    if (i + t > n) throw V("Wrong length!");
                    for (; o < i;) this[t + o] = r[o++]
                },
                Le = {
                    entries: function() {
                        return oe.call(Ae(this))
                    },
                    keys: function() {
                        return ie.call(Ae(this))
                    },
                    values: function() {
                        return re.call(Ae(this))
                    }
                },
                De = function(e, t) {
                    return S(e) && e[be] && "symbol" != typeof t && t in e && String(+t) == String(t)
                },
                Ye = function(e, t) {
                    return De(e, t = v(t, !0)) ? f(2, e[t]) : q(e, t)
                },
                Ce = function(e, t, n) {
                    return !(De(e, t = v(t, !0)) && S(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? x(e, t, n) : (e[t] = n.value, e)
                };
            ve || (C.f = Ye, Y.f = Ce), s(s.S + s.F * !ve, "Object", {
                getOwnPropertyDescriptor: Ye,
                defineProperty: Ce
            }), o(function() {
                he.call({})
            }) && (he = _e = function() {
                return ce.call(this)
            });
            var xe = _({}, je);
            _(xe, Le), h(xe, ye, Le.values), _(xe, {
                slice: Ue,
                set: Be,
                constructor: function() {},
                toString: he,
                toLocaleString: Ne
            }), Te(xe, "buffer", "b"), Te(xe, "byteOffset", "o"), Te(xe, "byteLength", "l"), Te(xe, "length", "e"), x(xe, pe, {
                get: function() {
                    return this[be]
                }
            }), e.exports = function(e, t, n, u) {
                var c = e + ((u = !!u) ? "Clamped" : "") + "Array",
                    f = "get" + e,
                    _ = "set" + e,
                    y = i[c],
                    g = y || {},
                    v = y && A(y),
                    b = !y || !a.ABV,
                    E = {},
                    R = y && y.prototype,
                    I = function(e, n) {
                        x(e, n, {
                            get: function() {
                                return function(e, n) {
                                    var r = e._d;
                                    return r.v[f](n * t + r.o, Ee)
                                }(this, n)
                            },
                            set: function(e) {
                                return function(e, n, r) {
                                    var i = e._d;
                                    u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[_](n * t + i.o, r, Ee)
                                }(this, n, e)
                            },
                            enumerable: !0
                        })
                    };
                b ? (y = n(function(e, n, r, i) {
                    l(e, y, c, "_d");
                    var o, s, a, u, f = 0,
                        _ = 0;
                    if (S(n)) {
                        if (!(n instanceof H || "ArrayBuffer" == (u = m(n)) || "SharedArrayBuffer" == u)) return be in n ? Me(y, n) : ke.call(y, n);
                        o = n, _ = Oe(r, t);
                        var g = n.byteLength;
                        if (void 0 === i) {
                            if (g % t) throw V("Wrong length!");
                            if ((s = g - _) < 0) throw V("Wrong length!")
                        } else if ((s = p(i) * t) + _ > g) throw V("Wrong length!");
                        a = s / t
                    } else a = d(n), o = new H(s = a * t);
                    for (h(e, "_d", {
                            b: o,
                            o: _,
                            l: s,
                            e: a,
                            v: new J(o)
                        }); f < a;) I(e, f++)
                }), R = y.prototype = O(xe), h(R, "constructor", y)) : o(function() {
                    y(1)
                }) && o(function() {
                    new y(-1)
                }) && U(function(e) {
                    new y, new y(null), new y(1.5), new y(e)
                }, !0) || (y = n(function(e, n, r, i) {
                    var o;
                    return l(e, y, c), S(n) ? n instanceof H || "ArrayBuffer" == (o = m(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new g(n, Oe(r, t), i) : void 0 !== r ? new g(n, Oe(r, t)) : new g(n) : be in n ? Me(y, n) : ke.call(y, n) : new g(d(n))
                }), W(v !== Function.prototype ? w(g).concat(w(v)) : w(g), function(e) {
                    e in y || h(y, e, g[e])
                }), y.prototype = R, r || (R.constructor = y));
                var M = R[ye],
                    T = !!M && ("values" == M.name || void 0 == M.name),
                    k = Le.values;
                h(y, de, !0), h(R, be, c), h(R, me, !0), h(R, ge, y), (u ? new y(1)[pe] == c : pe in R) || x(R, pe, {
                    get: function() {
                        return c
                    }
                }), E[c] = y, s(s.G + s.W + s.F * (y != g), E), s(s.S, c, {
                    BYTES_PER_ELEMENT: t
                }), s(s.S + s.F * o(function() {
                    g.of.call(y, 1)
                }), c, {
                    from: ke,
                    of: Pe
                }), "BYTES_PER_ELEMENT" in R || h(R, "BYTES_PER_ELEMENT", t), s(s.P, c, je), B(c), s(s.P + s.F * Re, c, {
                    set: Be
                }), s(s.P + s.F * !T, c, Le), r || R.toString == he || (R.toString = he), s(s.P + s.F * o(function() {
                    new y(1).slice()
                }), c, {
                    slice: Ue
                }), s(s.P + s.F * (o(function() {
                    return [1, 2].toLocaleString() != new y([1, 2]).toLocaleString()
                }) || !o(function() {
                    R.toLocaleString.call([1, 2])
                })), c, {
                    toLocaleString: Ne
                }), j[c] = T ? M : k, r || T || h(R, ye, k)
            }
        } else e.exports = function() {}
    }, function(e, t, n) {
        var r = n(66),
            i = n(36),
            o = n(21),
            s = n(30),
            a = n(16),
            u = n(148),
            c = Object.getOwnPropertyDescriptor;
        t.f = n(11) ? c : function(e, t) {
            if (e = o(e), t = s(t, !0), u) try {
                return c(e, t)
            } catch (e) {}
            if (a(e, t)) return i(!r.f.call(e, t), e[t])
        }
    }, function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, n) {
        var r = n(26);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t, n) {
        var r = n(35)("meta"),
            i = n(4),
            o = n(16),
            s = n(9).f,
            a = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            c = !n(3)(function() {
                return u(Object.preventExtensions({}))
            }),
            l = function(e) {
                s(e, r, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            f = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, r)) {
                        if (!u(e)) return "F";
                        if (!t) return "E";
                        l(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!o(e, r)) {
                        if (!u(e)) return !0;
                        if (!t) return !1;
                        l(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) {
                    return c && f.NEED && u(e) && !o(e, r) && l(e), e
                }
            }
    }, function(e, t, n) {
        var r = n(4);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t, n) {
        var r = n(16),
            i = n(14),
            o = n(92)("IE_PROTO"),
            s = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, function(e, t, n) {
        var r = n(146),
            i = n(91).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, i)
        }
    }, function(e, t, n) {
        var r = n(5),
            i = n(145),
            o = n(91),
            s = n(92)("IE_PROTO"),
            a = function() {},
            u = function() {
                var e, t = n(95)("iframe"),
                    r = o.length;
                for (t.style.display = "none", n(89).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
                return u()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = u(), void 0 === t ? n : i(n, t)
        }
    }, function(e, t, n) {
        var r = n(24),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    }, function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t) {
        var n = e.exports = {
            version: "2.5.4"
        };
        "number" == typeof __e && (__e = n)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._listenersByEvent = {}
                }
                return r(e, [{
                    key: "addEventListener",
                    value: function(e, t, n) {
                        this._listenersByEvent[e] || (this._listenersByEvent[e] = []), this._listenersByEvent[e].push({
                            callback: t,
                            scope: n
                        })
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t) {
                        var n = this._listenersByEvent[e];
                        if (n)
                            for (var r = 0; r < n.length; r++)
                                if (n[r].callback === t) {
                                    n.splice(r, 1);
                                    break
                                }
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e, t) {
                        var n = this._listenersByEvent[e];
                        if (n) {
                            var r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var s, a = n[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                                    var u = s.value;
                                    u.callback.call(u.scope, t)
                                }
                            } catch (e) {
                                i = !0, o = e
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                        }
                    }
                }]), e
            }(),
            o = Object.freeze({
                HANDSHAKE: "handshake",
                CONNECTION: "connection",
                CONNECTION_LOST: "connectionLost",
                LOGIN: "login",
                LOGIN_ERROR: "loginError",
                LOGOUT: "logout",
                ROOM_ADD: "roomAdd",
                ROOM_CREATION_ERROR: "roomCreationError",
                ROOM_REMOVE: "roomRemove",
                ROOM_JOIN: "roomJoin",
                ROOM_JOIN_ERROR: "roomJoinError",
                USER_ENTER_ROOM: "userEnterRoom",
                USER_EXIT_ROOM: "userExitRoom",
                USER_COUNT_CHANGE: "userCountChange",
                PROXIMITY_LIST_UPDATE: "proximityListUpdate",
                PLAYER_TO_SPECTATOR: "playerToSpectator",
                PLAYER_TO_SPECTATOR_ERROR: "playerToSpectatorError",
                SPECTATOR_TO_PLAYER: "spectatorToPlayer",
                SPECTATOR_TO_PLAYER_ERROR: "spectatorToPlayerError",
                ROOM_NAME_CHANGE: "roomNameChange",
                ROOM_NAME_CHANGE_ERROR: "roomNameChangeError",
                ROOM_PASSWORD_STATE_CHANGE: "roomPasswordStateChange",
                ROOM_PASSWORD_STATE_CHANGE_ERROR: "roomPasswordStateChangeError",
                ROOM_CAPACITY_CHANGE: "roomCapacityChange",
                ROOM_CAPACITY_CHANGE_ERROR: "roomCapacityChangeError",
                PUBLIC_MESSAGE: "publicMessage",
                PRIVATE_MESSAGE: "privateMessage",
                OBJECT_MESSAGE: "objectMessage",
                MODERATOR_MESSAGE: "moderatorMessage",
                ADMIN_MESSAGE: "adminMessage",
                EXTENSION_RESPONSE: "extensionResponse",
                ROOM_VARIABLES_UPDATE: "roomVariablesUpdate",
                USER_VARIABLES_UPDATE: "userVariablesUpdate",
                MMOITEM_VARIABLES_UPDATE: "mmoItemVariablesUpdate",
                ROOM_GROUP_SUBSCRIBE: "roomGroupSubscribe",
                ROOM_GROUP_SUBSCRIBE_ERROR: "roomGroupSubscribeError",
                ROOM_GROUP_UNSUBSCRIBE: "roomGroupUnsubscribe",
                ROOM_GROUP_UNSUBSCRIBE_ERROR: "roomGroupUnsubscribeError",
                ROOM_FIND_RESULT: "roomFindResult",
                USER_FIND_RESULT: "userFindResult",
                INVITATION: "invitation",
                INVITATION_REPLY: "invitationReply",
                INVITATION_REPLY_ERROR: "invitationReplyError",
                PING_PONG: "pingPong",
                SOCKET_ERROR: "socketError"
            }),
            s = Object.freeze({
                BUDDY_LIST_INIT: "buddyListInit",
                BUDDY_ADD: "buddyAdd",
                BUDDY_REMOVE: "buddyRemove",
                BUDDY_BLOCK: "buddyBlock",
                BUDDY_ERROR: "buddyError",
                BUDDY_ONLINE_STATE_CHANGE: "buddyOnlineStateChange",
                BUDDY_VARIABLES_UPDATE: "buddyVariablesUpdate",
                BUDDY_MESSAGE: "buddyMessage"
            });
        t.EventDispatcher = i, t.SFSEvent = o, t.SFSBuddyEvent = s
    }, function(e, t, n) {
        var r = n(4);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    }, function(e, t, n) {
        var r = n(15);
        e.exports = function(e, t, n) {
            for (var i in t) r(e, i, t[i], n);
            return e
        }
    }, function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(9),
            o = n(11),
            s = n(7)("species");
        e.exports = function(e) {
            var t = r[e];
            o && t && !t[s] && i.f(t, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(e, t) {
        e.exports = !1
    }, function(e, t, n) {
        var r = n(9).f,
            i = n(16),
            o = n(7)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LogicOperator = t.MatchExpression = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(8);

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var s = function() {
                function e(t, n, r) {
                    o(this, e), this._varName = t, this._condition = n, this._value = r, this._logicOp = null, this._next = null, this._parent = null, Object.seal(this)
                }
                return r(e, [{
                    key: "and",
                    value: function(t, n, r) {
                        return this._next = e.chainedMatchExpression(t, n, r, a.AND, this), this._next
                    }
                }, {
                    key: "or",
                    value: function(t, n, r) {
                        return this._next = e.chainedMatchExpression(t, n, r, a.OR, this), this._next
                    }
                }, {
                    key: "hasNext",
                    value: function() {
                        return null != this._next
                    }
                }, {
                    key: "rewind",
                    value: function() {
                        for (var e = this; null != e._parent;) e = e._parent;
                        return e
                    }
                }, {
                    key: "toString",
                    value: function() {
                        for (var e = this.rewind(), t = e.asString(); e.hasNext();) t += (e = e.next).asString();
                        return t
                    }
                }, {
                    key: "asString",
                    value: function() {
                        var e = "";
                        null != this._logicOp && (e += " " + this._logicOp.id + " ");
                        var t = "string" == typeof this._value ? "' " + this._value + " '" : this._value;
                        return e += "(" + this._varName + " " + this._condition.symbol + " " + t + ")"
                    }
                }, {
                    key: "toSFSArray",
                    value: function() {
                        var e = this.rewind(),
                            t = new i.SFSArray;
                        for (t.addSFSArray(e.expressionAsSFSArray()); e.hasNext();) e = e.next, t.addSFSArray(e.expressionAsSFSArray());
                        return t
                    }
                }, {
                    key: "expressionAsSFSArray",
                    value: function() {
                        var e = new i.SFSArray;
                        return null != this._logicOp ? e.addUtfString(this._logicOp.id) : e.addNull(), e.addUtfString(this._varName), e.addByte(this._condition.type), e.addUtfString(this._condition.symbol), 0 === this._condition.type ? e.addBool(this._value) : 1 === this._condition.type ? e.addDouble(this._value) : e.addUtfString(this._value), e
                    }
                }, {
                    key: "varName",
                    get: function() {
                        return this._varName
                    }
                }, {
                    key: "condition",
                    get: function() {
                        return this._condition
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    }
                }, {
                    key: "logicOp",
                    get: function() {
                        return this._logicOp
                    }
                }, {
                    key: "next",
                    get: function() {
                        return this._next
                    }
                }], [{
                    key: "chainedMatchExpression",
                    value: function(t, n, r, i, o) {
                        var s = new e(t, n, r);
                        return s._logicOp = i, s._parent = o, s
                    }
                }]), e
            }(),
            a = function() {
                function e(t) {
                    o(this, e), this._id = t, Object.freeze(this)
                }
                return r(e, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }], [{
                    key: "AND",
                    get: function() {
                        return new e("AND")
                    }
                }, {
                    key: "OR",
                    get: function() {
                        return new e("OR")
                    }
                }]), e
            }();
        t.MatchExpression = s, t.LogicOperator = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SFSBuddyVariable = t.ReservedBuddyVariables = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(48);
        var o = Object.freeze({
                BV_ONLINE: "$__BV_ONLINE__",
                BV_STATE: "$__BV_STATE__",
                BV_NICKNAME: "$__BV_NICKNAME__"
            }),
            s = function(e) {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                    return Object.freeze(i), i
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.BaseVariable), r(t, null, [{
                    key: "OFFLINE_PREFIX",
                    get: function() {
                        return "$"
                    }
                }]), r(t, [{
                    key: "toString",
                    value: function() {
                        return "[BuddyVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]"
                    }
                }, {
                    key: "isOffline",
                    get: function() {
                        return this._name.charAt(0) === t.OFFLINE_PREFIX
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function(e) {
                        return new t(e.get(0), e.get(2), e.get(1))
                    }
                }]), t
            }();
        t.ReservedBuddyVariables = o, t.SFSBuddyVariable = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UserPrivileges = t.SFSUser = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(58),
            o = n(1);
        var s = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._id = t, this._name = n, this._isItMe = r, this._privilegeId = 0, this._aoiEntryPoint = null, this._variables = new Map, this._playerIdByRoomId = new Map, this._userManager = null, this.properties = {}, Object.seal(this)
                }
                return r(e, [{
                    key: "toString",
                    value: function() {
                        return "[User: " + this.name + ", Id: " + this.id + ", Is me: " + this.isItMe + "]"
                    }
                }, {
                    key: "isJoinedInRoom",
                    value: function(e) {
                        return e.containsUser(this)
                    }
                }, {
                    key: "getPlayerId",
                    value: function(e) {
                        var t = this._playerIdByRoomId.get(e.id);
                        return null != t ? t : 0
                    }
                }, {
                    key: "isPlayerInRoom",
                    value: function(e) {
                        return !!e.isGame && this.getPlayerId(e) > 0
                    }
                }, {
                    key: "isSpectatorInRoom",
                    value: function(e) {
                        return !!e.isGame && this.getPlayerId(e) < 0
                    }
                }, {
                    key: "getVariable",
                    value: function(e) {
                        return this._variables.get(e)
                    }
                }, {
                    key: "containsVariable",
                    value: function(e) {
                        return this._variables.has(e)
                    }
                }, {
                    key: "getVariables",
                    value: function() {
                        return Array.from(this._variables.values())
                    }
                }, {
                    key: "getUserManager",
                    value: function() {
                        return this._userManager
                    }
                }, {
                    key: "_setPlayerId",
                    value: function(e, t) {
                        this._playerIdByRoomId.set(t.id, e)
                    }
                }, {
                    key: "_removePlayerId",
                    value: function(e) {
                        this._playerIdByRoomId.delete(e.id)
                    }
                }, {
                    key: "_setVariables",
                    value: function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                var s = i.value;
                                this._setVariable(s)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function(e) {
                        e.isNull ? this._variables.delete(e.name) : this._variables.set(e.name, e)
                    }
                }, {
                    key: "_setUserManager",
                    value: function(e) {
                        if (null != this._userManager) throw new o.SFSError("User Manager already assigned to user " + this.toString());
                        this._userManager = e
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "isItMe",
                    get: function() {
                        return this._isItMe
                    }
                }, {
                    key: "privilegeId",
                    get: function() {
                        return this._privilegeId
                    }
                }, {
                    key: "aoiEntryPoint",
                    get: function() {
                        return this._aoiEntryPoint
                    }
                }, {
                    key: "isGuest",
                    get: function() {
                        return this._privilegeId === a.GUEST
                    }
                }, {
                    key: "isStandardUser",
                    get: function() {
                        return this._privilegeId === a.STANDARD
                    }
                }, {
                    key: "isModerator",
                    get: function() {
                        return this._privilegeId === a.MODERATOR
                    }
                }, {
                    key: "isAdmin",
                    get: function() {
                        return this.privilegeId === a.ADMINISTRATOR
                    }
                }, {
                    key: "isPlayer",
                    get: function() {
                        return this.isPlayerInRoom(this._userManager._sfs.lastJoinedRoom)
                    }
                }, {
                    key: "isSpectator",
                    get: function() {
                        return this.isSpectatorInRoom(this._userManager._sfs.lastJoinedRoom)
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = new e(t.get(0), t.get(1));
                        r._privilegeId = t.get(2), null != n && r._setPlayerId(t.get(3), n);
                        var o = t.get(4);
                        if (null != o)
                            for (var s = 0; s < o.size(); s++) r._setVariable(i.SFSUserVariable.fromSFSArray(o.get(s)));
                        return r
                    }
                }]), e
            }(),
            a = Object.freeze({
                GUEST: 0,
                STANDARD: 1,
                MODERATOR: 2,
                ADMINISTRATOR: 3
            });
        t.SFSUser = s, t.UserPrivileges = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BaseVariable = t.VariableType = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(8);
        var s = Object.freeze({
                NULL: 0,
                BOOLEAN: 1,
                INT: 2,
                DOUBLE: 3,
                STRING: 4,
                SFSOBJECT: 5,
                SFSARRAY: 6,
                getTypeName: function(e) {
                    return ["null", "boolean", "int", "double", "string", "SFSObject", "SFSArray"][e]
                }
            }),
            a = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._name = t, this._value = n, this._type = r > -1 ? r : this._evalType()
                }
                return i(e, [{
                    key: "toSFSArray",
                    value: function() {
                        var e = new o.SFSArray;
                        return e.addUtfString(this.name), e.addByte(this._type), this._populateArrayWithValue(e), e
                    }
                }, {
                    key: "_populateArrayWithValue",
                    value: function(e) {
                        switch (this._type) {
                            case s.NULL:
                                e.addNull();
                                break;
                            case s.BOOLEAN:
                                e.addBool(this.value);
                                break;
                            case s.INT:
                                e.addInt(this.value);
                                break;
                            case s.DOUBLE:
                                e.addDouble(this.value);
                                break;
                            case s.STRING:
                                e.addUtfString(this.value);
                                break;
                            case s.SFSOBJECT:
                                e.addSFSObject(this.value);
                                break;
                            case s.SFSARRAY:
                                e.addSFSArray(this.value)
                        }
                    }
                }, {
                    key: "_evalType",
                    value: function() {
                        if (null == this._value) return s.NULL;
                        var e = r(this._value);
                        if ("boolean" === e) return s.BOOLEAN;
                        if ("number" === e) {
                            var t = this._value;
                            return t === +t && t === (0 | t) ? s.INT : s.DOUBLE
                        }
                        return "string" === e ? s.STRING : "object" === e ? this._value instanceof o.SFSArray ? s.SFSARRAY : s.SFSOBJECT : void 0
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    }
                }, {
                    key: "type",
                    get: function() {
                        return s.getTypeName(this._type)
                    }
                }, {
                    key: "isNull",
                    get: function() {
                        return this._type === s.NULL
                    }
                }]), e
            }();
        t.VariableType = s, t.BaseVariable = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SFSRoomVariable = t.ReservedRoomVariables = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(48);
        var o = Object.freeze({
                RV_GAME_STARTED: "$GS"
            }),
            s = function(e) {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                    return i.isPrivate = !1, i.isPersistent = !1, Object.seal(i), i
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.BaseVariable), r(t, [{
                    key: "toString",
                    value: function() {
                        return "[RoomVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Private: " + this.isPrivate + "]"
                    }
                }, {
                    key: "toSFSArray",
                    value: function() {
                        var e = function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r)
                            }
                            if ("value" in i) return i.value;
                            var s = i.get;
                            return void 0 !== s ? s.call(r) : void 0
                        }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "toSFSArray", this).call(this);
                        return e.addBool(this.isPrivate), e.addBool(this.isPersistent), e
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function(e) {
                        var n = new t(e.get(0), e.get(2), e.get(1));
                        return n.isPrivate = e.get(3), n.isPersistent = e.get(4), n
                    }
                }]), t
            }();
        t.ReservedRoomVariables = o, t.SFSRoomVariable = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LoggerEvent = t.Logger = t.LogLevel = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(38);
        var o = Object.freeze({
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                toString: function(e) {
                    return e === this.DEBUG ? "DEBUG" : e === this.INFO ? "INFO" : e === this.WARN ? "WARN" : e === this.ERROR ? "ERROR" : void 0
                }
            }),
            s = Object.freeze({
                DEBUG: "debug",
                INFO: "info",
                WARNING: "warn",
                ERROR: "error"
            }),
            a = Symbol(),
            u = Symbol(),
            c = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (e !== u) throw "Logger is a singleton class; you can't instantiate it";
                    return n._enableConsoleOutput = void 0 !== console, n._enableEventDispatching = !1, n._level = o.INFO, n._useBasicLog = !0, void 0 !== console && (n._useBasicLog = "function" != typeof console.debug || "function" != typeof console.info || "function" != typeof console.warn || "function" != typeof console.error), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.EventDispatcher), r(t, [{
                    key: "log",
                    value: function(e) {
                        for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        if (this.isValidLevel(e) && e >= this._level) {
                            if (this._enableConsoleOutput) {
                                var s = function(e, n) {
                                    t._useBasicLog && (n = function(e) {
                                        console.log(e)
                                    }), n("[ SFS2X | " + e + " ] " + r.join(" "))
                                };
                                switch (e) {
                                    case o.DEBUG:
                                        s("DEBUG", function(e) {
                                            console.debug(e)
                                        });
                                        break;
                                    case o.INFO:
                                        s("INFO", function(e) {
                                            console.info(e)
                                        });
                                        break;
                                    case o.WARN:
                                        s("WARN", function(e) {
                                            console.warn(e)
                                        });
                                        break;
                                    case o.ERROR:
                                        s("ERROR", function(e) {
                                            console.error(e)
                                        })
                                }
                            }
                            this._enableEventDispatching && this.dispatchEvent(o.toString(e).toLowerCase(), {
                                message: r.join(" ")
                            })
                        }
                    }
                }, {
                    key: "debug",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        this.log(o.DEBUG, t)
                    }
                }, {
                    key: "info",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        this.log(o.INFO, t)
                    }
                }, {
                    key: "warn",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        this.log(o.WARN, t)
                    }
                }, {
                    key: "error",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        this.log(o.ERROR, t)
                    }
                }, {
                    key: "isValidLevel",
                    value: function(e) {
                        if (!Number.isInteger(e) || e < o.DEBUG || e > o.ERROR) throw "Logging level must be set to a valid value (see LogLevel class)";
                        return !0
                    }
                }, {
                    key: "level",
                    set: function(e) {
                        this.isValidLevel(e) && (this._level = e)
                    },
                    get: function() {
                        return this._level
                    }
                }, {
                    key: "enableConsoleOutput",
                    set: function(e) {
                        void 0 !== console && (this._enableConsoleOutput = e)
                    },
                    get: function() {
                        return this._enableConsoleOutput
                    }
                }, {
                    key: "enableEventDispatching",
                    set: function(e) {
                        this._enableEventDispatching = e
                    },
                    get: function() {
                        return this._enableEventDispatching
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this[a] || (this[a] = new t(u)), Object.seal(this[a])
                    }
                }]), t
            }();
        t.LogLevel = o, t.Logger = c, t.LoggerEvent = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = Object.freeze({
                IDLE: "idle",
                KICK: "kick",
                BAN: "ban",
                MANUAL: "manual",
                UNKNOWN: "unknown",
                getReason: function(e) {
                    switch (e) {
                        case 0:
                            return this.IDLE;
                        case 1:
                            return this.KICK;
                        case 2:
                            return this.BAN;
                        case 3:
                            return this.MANUAL;
                        case 4:
                            return this.UNKNOWN
                    }
                }
            }),
            o = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, null, [{
                    key: "prettyPrintByteArray",
                    value: function(e) {
                        return null == e ? "Null" : e.length < 32 ? e.toString() : "Byte[" + e.length + "]"
                    }
                }, {
                    key: "prettyPrintDump",
                    value: function(e) {
                        for (var t = "", n = 0, r = 0; r < e.length; r++) {
                            var i = e.charAt(r);
                            if (i == this.TOKEN_INDENT_OPEN) n++, t += this.NEW_LINE + this.getFormatTabs(n);
                            else if (i == this.TOKEN_INDENT_CLOSE) {
                                if (--n < 0) throw "DumpFormatter: the indentPos is negative. TOKENS ARE NOT BALANCED!";
                                t += this.NEW_LINE + this.getFormatTabs(n)
                            } else i == this.TOKEN_DIVIDER ? t += this.NEW_LINE + this.getFormatTabs(n) : t += i
                        }
                        if (0 != n) throw "DumpFormatter: the indentPos is not === 0 (" + n + "). TOKENS ARE NOT BALANCED!";
                        return t
                    }
                }, {
                    key: "getFormatTabs",
                    value: function(e) {
                        return this.strFill(this.TAB, e)
                    }
                }, {
                    key: "strFill",
                    value: function(e, t) {
                        for (var n = "", r = 0; r < t; r++) n += e;
                        return n
                    }
                }, {
                    key: "hexDump",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1; - 1 === t && (t = this.HEX_BYTES_PER_LINE);
                        var n = "Binary size: " + e.byteLength + this.NEW_LINE,
                            r = "",
                            i = "",
                            o = 0,
                            s = 0,
                            a = null;
                        do {
                            var u = (a = e[o]).toString(16).toUpperCase();
                            1 === u.length && (u = "0" + u), r += u + " ", i += a >= 33 && a <= 126 ? String.fromCharCode(a) : this.DOT, ++s === t && (s = 0, n += r + this.TAB + i + this.NEW_LINE, r = "", i = "")
                        } while (++o < e.length);
                        if (0 !== s) {
                            for (var c = t - s; c > 0; --c) r += "   ", i += " ";
                            n += r + this.TAB + i + this.NEW_LINE
                        }
                        return n
                    }
                }, {
                    key: "TOKEN_INDENT_OPEN",
                    get: function() {
                        return "{"
                    }
                }, {
                    key: "TOKEN_INDENT_CLOSE",
                    get: function() {
                        return "}"
                    }
                }, {
                    key: "TOKEN_DIVIDER",
                    get: function() {
                        return ";"
                    }
                }, {
                    key: "NEW_LINE",
                    get: function() {
                        return "\n"
                    }
                }, {
                    key: "TAB",
                    get: function() {
                        return "\t"
                    }
                }, {
                    key: "DOT",
                    get: function() {
                        return "."
                    }
                }, {
                    key: "HEX_BYTES_PER_LINE",
                    get: function() {
                        return 16
                    }
                }]), e
            }();
        t.ClientDisconnectionReason = i, t.DumpFormatter = o
    }, function(e, t, n) {
        var r = n(7)("unscopables"),
            i = Array.prototype;
        void 0 == i[r] && n(18)(i, r, {}), e.exports = function(e) {
            i[r][e] = !0
        }
    }, function(e, t) {
        e.exports = {}
    }, function(e, t, n) {
        var r = n(25);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function(e, t, n) {
        var r = n(146),
            i = n(91);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MessageRecipientMode = t.BanMode = t.MapLimits = t.RoomExtension = t.RoomEvents = t.RoomPermissions = t.MMORoomSettings = t.SFSGameSettings = t.RoomSettings = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(1);

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var u = function e(t) {
                a(this, e), this.name = t, this.password = "", this.groupId = "default", this.isGame = !1, this.maxUsers = 10, this.maxSpectators = 0, this.maxVariables = 5, this.variables = [], this.permissions = null, this.events = null, this.extension = null, this.allowOwnerOnlyInvitation = !0
            },
            c = function(e) {
                function t(e) {
                    a(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.isPublic = !0, n.minPlayersToStartGame = 2, n.invitedPlayers = null, n.searchableRooms = null, n.invitationExpiryTime = 15, n.leaveLastJoinedRoom = !0, n.notifyGameStarted = !1, n.playerMatchExpression = null, n.spectatorMatchExpression = null, n.invitationParams = null, Object.seal(n), n
                }
                return s(t, u), t
            }(),
            l = function(e) {
                function t(e, n) {
                    a(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return r.defaultAOI = n, r.mapLimits = null, r.userMaxLimboSeconds = 50, r.proximityListUpdateMillis = 250, r.sendAOIEntryPoint = !0, Object.seal(r), r
                }
                return s(t, u), t
            }(),
            f = Object.freeze({
                BY_ADDRESS: 0,
                BY_NAME: 1
            }),
            h = function() {
                function e(t, n) {
                    if (a(this, e), t < e.TO_USER || t > e.TO_ZONE) throw new i.SFSError("Illegal recipient mode: " + t);
                    this._mode = t, this._target = n, Object.freeze(this)
                }
                return r(e, null, [{
                    key: "TO_USER",
                    get: function() {
                        return 0
                    }
                }, {
                    key: "TO_ROOM",
                    get: function() {
                        return 1
                    }
                }, {
                    key: "TO_GROUP",
                    get: function() {
                        return 2
                    }
                }, {
                    key: "TO_ZONE",
                    get: function() {
                        return 3
                    }
                }]), r(e, [{
                    key: "mode",
                    get: function() {
                        return this._mode
                    }
                }, {
                    key: "target",
                    get: function() {
                        return this._target
                    }
                }]), e
            }();
        t.RoomSettings = u, t.SFSGameSettings = c, t.MMORoomSettings = l, t.RoomPermissions = function e() {
            a(this, e), this.allowNameChange = !1, this.allowPasswordStateChange = !1, this.allowPublicMessages = !0, this.allowResizing = !1, Object.seal(this)
        }, t.RoomEvents = function e() {
            a(this, e), this.allowUserCountChange = !1, this.allowUserEnter = !1, this.allowUserExit = !1, this.allowUserVariablesUpdate = !1, Object.seal(this)
        }, t.RoomExtension = function e(t, n) {
            a(this, e), this.id = t, this.className = n, this.propertiesFile = "", Object.seal(this)
        }, t.MapLimits = function e(t, n) {
            if (a(this, e), null == t || null == n) throw new i.SFSError("Map limits arguments must be both non null!");
            this.lowerLimit = t, this.higherLimit = n, Object.seal(this)
        }, t.BanMode = f, t.MessageRecipientMode = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BuddyOnlineState = t.SFSBuddy = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(46);
        var o = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._id = t, this._name = n, this._isBlocked = r, this._isTemp = i, this._variables = new Map, Object.seal(this)
                }
                return r(e, [{
                    key: "toString",
                    value: function() {
                        return "[Buddy: " + this.name + ", Id: " + this.id + "]"
                    }
                }, {
                    key: "getVariable",
                    value: function(e) {
                        return this._variables.get(e)
                    }
                }, {
                    key: "containsVariable",
                    value: function(e) {
                        return this._variables.has(e)
                    }
                }, {
                    key: "getVariables",
                    value: function() {
                        return Array.from(this._variables.values())
                    }
                }, {
                    key: "getOfflineVariables",
                    value: function() {
                        return this.getVariables().filter(function(e) {
                            return e.name.charAt(0) === i.SFSBuddyVariable.OFFLINE_PREFIX
                        })
                    }
                }, {
                    key: "getOnlineVariables",
                    value: function() {
                        return this.getVariables().filter(function(e) {
                            return e.name.charAt(0) !== i.SFSBuddyVariable.OFFLINE_PREFIX
                        })
                    }
                }, {
                    key: "_setVariables",
                    value: function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                var s = i.value;
                                this._setVariable(s)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }, {
                    key: "_setVariable",
                    value: function(e) {
                        e.isNull ? this._variables.delete(e.name) : this._variables.set(e.name, e)
                    }
                }, {
                    key: "_removeVariable",
                    value: function(e) {
                        this._variables.delete(e)
                    }
                }, {
                    key: "_clearVolatileVariables",
                    value: function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, i = this.getOnlineVariables()[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                var o = r.value;
                                this._removeVariable(o.name)
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && i.return && i.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "isBlocked",
                    get: function() {
                        return this._isBlocked
                    }
                }, {
                    key: "isTemp",
                    get: function() {
                        return this._isTemp
                    }
                }, {
                    key: "isOnline",
                    get: function() {
                        var e = !0;
                        return this.containsVariable(i.ReservedBuddyVariables.BV_ONLINE) && (e = this.getVariable(i.ReservedBuddyVariables.BV_ONLINE).value), e && this._id > -1
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this.containsVariable(i.ReservedBuddyVariables.BV_STATE) ? this.getVariable(i.ReservedBuddyVariables.BV_STATE).value : null
                    }
                }, {
                    key: "nickName",
                    get: function() {
                        return this.containsVariable(i.ReservedBuddyVariables.BV_NICKNAME) ? this.getVariable(i.ReservedBuddyVariables.BV_NICKNAME).value : null
                    }
                }], [{
                    key: "fromSFSArray",
                    value: function(t) {
                        var n = new e(t.get(0), t.get(1), t.get(2), t.size() > 3 && t.get(4)),
                            r = t.get(3);
                        if (null != r)
                            for (var o = 0; o < r.size(); o++) n._setVariable(i.SFSBuddyVariable.fromSFSArray(r.get(o)));
                        return n
                    }
                }]), e
            }(),
            s = Object.freeze({
                ONLINE: 0,
                OFFLINE: 1,
                LEFT_THE_SERVER: 2
            });
        t.SFSBuddy = o, t.BuddyOnlineState = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SFSUserVariable = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(48);
        var o = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                return i.isPrivate = !1, Object.seal(i), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseVariable), r(t, [{
                key: "toString",
                value: function() {
                    return "[UserVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Private: " + this.isPrivate + "]"
                }
            }, {
                key: "toSFSArray",
                value: function() {
                    var e = function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, n, r)
                        }
                        if ("value" in i) return i.value;
                        var s = i.get;
                        return void 0 !== s ? s.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "toSFSArray", this).call(this);
                    return e.addBool(this.isPrivate), e
                }
            }], [{
                key: "fromSFSArray",
                value: function(e) {
                    var n = new t(e.get(0), e.get(2), e.get(1));
                    return e.size() > 3 && (n.isPrivate = e.get(3)), n
                }
            }]), t
        }();
        t.SFSUserVariable = o
    }, function(e, t, n) {
        for (var r, i = n(6), o = n(18), s = n(35), a = s("typed_array"), u = s("view"), c = !(!i.ArrayBuffer || !i.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = i[h[f++]]) ? (o(r.prototype, a, !0), o(r.prototype, u, !0)) : l = !1;
        e.exports = {
            ABV: c,
            CONSTR: l,
            TYPED: a,
            VIEW: u
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(0),
            o = n(15),
            s = n(40),
            a = n(29),
            u = n(61),
            c = n(41),
            l = n(4),
            f = n(3),
            h = n(63),
            _ = n(44),
            y = n(86);
        e.exports = function(e, t, n, p, d, g) {
            var v = r[e],
                b = v,
                m = d ? "set" : "add",
                S = b && b.prototype,
                E = {},
                R = function(e) {
                    var t = S[e];
                    o(S, e, "delete" == e ? function(e) {
                        return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function(e) {
                        return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function(e) {
                        return g && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if ("function" == typeof b && (g || S.forEach && !f(function() {
                    (new b).entries().next()
                }))) {
                var O = new b,
                    A = O[m](g ? {} : -0, 1) != O,
                    w = f(function() {
                        O.has(1)
                    }),
                    I = h(function(e) {
                        new b(e)
                    }),
                    M = !g && f(function() {
                        for (var e = new b, t = 5; t--;) e[m](t, t);
                        return !e.has(-0)
                    });
                I || ((b = t(function(t, n) {
                    c(t, b, e);
                    var r = y(new v, t, b);
                    return void 0 != n && u(n, d, r[m], r), r
                })).prototype = S, S.constructor = b), (w || M) && (R("delete"), R("has"), d && R("get")), (M || A) && R(m), g && S.clear && delete S.clear
            } else b = p.getConstructor(t, e, d, m), s(b.prototype, n), a.NEED = !0;
            return _(b, e), E[e] = b, i(i.G + i.W + i.F * (b != v), E), g || p.setStrong(b, e, d), b
        }
    }, function(e, t, n) {
        var r = n(27),
            i = n(132),
            o = n(79),
            s = n(5),
            a = n(12),
            u = n(78),
            c = {},
            l = {};
        (t = e.exports = function(e, t, n, f, h) {
            var _, y, p, d, g = h ? function() {
                    return e
                } : u(e),
                v = r(n, f, t ? 2 : 1),
                b = 0;
            if ("function" != typeof g) throw TypeError(e + " is not iterable!");
            if (o(g)) {
                for (_ = a(e.length); _ > b; b++)
                    if ((d = t ? v(s(y = e[b])[0], y[1]) : v(e[b])) === c || d === l) return d
            } else
                for (p = g.call(e); !(y = p.next()).done;)
                    if ((d = i(p, v, y.value, t)) === c || d === l) return d
        }).BREAK = c, t.RETURN = l
    }, function(e, t, n) {
        "use strict";
        var r = n(18),
            i = n(15),
            o = n(3),
            s = n(28),
            a = n(7);
        e.exports = function(e, t, n) {
            var u = a(e),
                c = n(s, u, "" [e]),
                l = c[0],
                f = c[1];
            o(function() {
                var t = {};
                return t[u] = function() {
                    return 7
                }, 7 != "" [e](t)
            }) && (i(String.prototype, e, l), r(RegExp.prototype, u, 2 == t ? function(e, t) {
                return f.call(e, this, t)
            } : function(e) {
                return f.call(e, this)
            }))
        }
    }, function(e, t, n) {
        var r = n(7)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function() {
                i = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    s = o[r]();
                s.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[r] = function() {
                    return s
                }, e(o)
            } catch (e) {}
            return n
        }
    }, function(e, t, n) {
        var r = n(0),
            i = n(28),
            o = n(3),
            s = n(87),
            a = "[" + s + "]",
            u = RegExp("^" + a + a + "*"),
            c = RegExp(a + a + "*$"),
            l = function(e, t, n) {
                var i = {},
                    a = o(function() {
                        return !!s[e]() || "​" != "​" [e]()
                    }),
                    u = i[e] = a ? t(f) : s[e];
                n && (i[n] = u), r(r.P + r.F * a, "String", i)
            },
            f = l.trim = function(e, t) {
                return e = String(i(e)), 1 & t && (e = e.replace(u, "")), 2 & t && (e = e.replace(c, "")), e
            };
        e.exports = l
    }, function(e, t, n) {
        var r = n(25),
            i = n(7)("toStringTag"),
            o = "Arguments" == r(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InviteUsersRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(47),
            a = n(57),
            u = n(8);
        var c = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.InviteUsers));
                return o._invitedUsers = e, o._secondsForAnswer = n, o._params = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_USER",
                get: function() {
                    return "u"
                }
            }, {
                key: "KEY_USER_ID",
                get: function() {
                    return "ui"
                }
            }, {
                key: "KEY_INVITATION_ID",
                get: function() {
                    return "ii"
                }
            }, {
                key: "KEY_TIME",
                get: function() {
                    return "t"
                }
            }, {
                key: "KEY_PARAMS",
                get: function() {
                    return "p"
                }
            }, {
                key: "KEY_INVITEE_ID",
                get: function() {
                    return "ee"
                }
            }, {
                key: "KEY_INVITED_USERS",
                get: function() {
                    return "iu"
                }
            }, {
                key: "KEY_REPLY_ID",
                get: function() {
                    return "ri"
                }
            }, {
                key: "MAX_INVITATIONS_FROM_CLIENT_SIDE",
                get: function() {
                    return 8
                }
            }, {
                key: "MIN_EXPIRY_TIME",
                get: function() {
                    return 5
                }
            }, {
                key: "MAX_EXPIRY_TIME",
                get: function() {
                    return 300
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var n = [];
                    if (null == this._invitedUsers ? n.push("No invited users") : this._invitedUsers instanceof Array ? (this._invitedUsers.length < 1 && n.push("No invited users"), this._invitedUsers.length > t.MAX_INVITATIONS_FROM_CLIENT_SIDE && n.push("Too many invitations; " + t.MAX_INVITATIONS_FROM_CLIENT_SIDE + " max are allowed from client side"), this._invitedUsers.every(function(e) {
                            return e instanceof s.SFSUser || e instanceof a.SFSBuddy
                        }) || n.push("Each invited user must be an instance of SFSUser or SFSBuddy class")) : n.push("Invited users must be passed in an array"), (this._secondsForAnswer < t.MIN_EXPIRY_TIME || this._secondsForAnswer > t.MAX_EXPIRY_TIME) && n.push("secondsForAnswer value is out of range (min: " + t.MIN_EXPIRY_TIME + "; max: " + t.MAX_EXPIRY_TIME + ")"), null == this._params || this._params instanceof u.SFSObject || n.push("Custom invitation parameters must be set in a SFSObject class instance"), n.length > 0) throw new o.SFSValidationError("InviteUsersRequest Error", n)
                }
            }, {
                key: "execute",
                value: function(e) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, c = this._invitedUsers[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                            var l = u.value;
                            if (l instanceof s.SFSUser || l instanceof a.SFSBuddy) {
                                if (l === e.mySelf) continue;
                                n.push(l.id)
                            }
                        }
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    this._reqObj.putIntArray(t.KEY_INVITED_USERS, n), this._reqObj.putShort(t.KEY_TIME, this._secondsForAnswer), null != this._params && this._reqObj.putSFSObject(t.KEY_PARAMS, this._params)
                }
            }]), t
        }();
        t.InviteUsersRequest = c
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AdminMessageRequest = t.ModeratorMessageRequest = t.ObjectMessageRequest = t.PrivateMessageRequest = t.PublicMessageRequest = t.GenericMessageRequest = t.GenericMessageType = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(56),
            a = n(8),
            u = n(10),
            c = n(47);

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function f(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var _ = Object.freeze({
                PUBLIC_MSG: 0,
                PRIVATE_MSG: 1,
                MODERATOR_MSG: 2,
                ADMING_MSG: 3,
                OBJECT_MSG: 4,
                BUDDY_MSG: 5
            }),
            y = function(e) {
                function t() {
                    l(this, t);
                    var e = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.GenericMessage));
                    return e._type = -1, e._room = null, e._user = null, e._message = null, e._params = null, e._recipient = null, e._sendMode = -1, Object.seal(e), e
                }
                return h(t, i.BaseRequest), r(t, null, [{
                    key: "KEY_ROOM_ID",
                    get: function() {
                        return "r"
                    }
                }, {
                    key: "KEY_USER_ID",
                    get: function() {
                        return "u"
                    }
                }, {
                    key: "KEY_MESSAGE",
                    get: function() {
                        return "m"
                    }
                }, {
                    key: "KEY_MESSAGE_TYPE",
                    get: function() {
                        return "t"
                    }
                }, {
                    key: "KEY_RECIPIENT",
                    get: function() {
                        return "rc"
                    }
                }, {
                    key: "KEY_RECIPIENT_MODE",
                    get: function() {
                        return "rm"
                    }
                }, {
                    key: "KEY_XTRA_PARAMS",
                    get: function() {
                        return "p"
                    }
                }, {
                    key: "KEY_SENDER_DATA",
                    get: function() {
                        return "sd"
                    }
                }]), r(t, [{
                    key: "validate",
                    value: function(e) {
                        if (this._type < 0) throw new o.SFSValidationError("GenericMessageRequest Error", ["Unsupported message type: " + this._type]);
                        var t = [];
                        switch (this._type) {
                            case _.PUBLIC_MSG:
                                this._validatePublicMessage(e, t);
                                break;
                            case _.PRIVATE_MSG:
                                this._validatePrivateMessage(e, t);
                                break;
                            case _.OBJECT_MSG:
                                this._validateObjectMessage(e, t);
                                break;
                            case _.BUDDY_MSG:
                                this._validateBuddyMessage(e, t);
                                break;
                            default:
                                this._validateSuperUserMessage(e, t)
                        }
                        if (t.length > 0) throw new o.SFSValidationError("GenericMessageRequest Error", t)
                    }
                }, {
                    key: "execute",
                    value: function(e) {
                        switch (this._reqObj.putByte(t.KEY_MESSAGE_TYPE, this._type), this._type) {
                            case _.PUBLIC_MSG:
                                this._executePublicMessage(e);
                                break;
                            case _.PRIVATE_MSG:
                                this._executePrivateMessage(e);
                                break;
                            case _.OBJECT_MSG:
                                this._executeObjectMessage(e);
                                break;
                            case _.BUDDY_MSG:
                                this._executeBuddyMessage(e);
                                break;
                            default:
                                this._executeSuperUserMessage(e)
                        }
                    }
                }, {
                    key: "_validatePublicMessage",
                    value: function(e, t) {
                        null != this._message && 0 !== this._message.length || t.push("Public message is empty"), null == this._room && (this._room = e.lastJoinedRoom), null == this._room ? t.push("You must be joined in a Room to send a message") : this._room instanceof u.SFSRoom ? e.getJoinedRooms().indexOf(this._room) < 0 && t.push("You are not joined in the target Room: " + this._room) : t.push("Target Room must be an instance of SFSRoom class"), null == this._params || this._params instanceof a.SFSObject || t.push("Message parameters must be set in a SFSObject class instance")
                    }
                }, {
                    key: "_validatePrivateMessage",
                    value: function(e, t) {
                        null != this._message && 0 !== this._message.length || t.push("Private message is empty"), this._recipient < 0 && t.push("Invalid recipient id: " + this._recipient), null == this._params || this._params instanceof a.SFSObject || t.push("Message parameters must be set in a SFSObject class instance")
                    }
                }, {
                    key: "_validateObjectMessage",
                    value: function(e, t) {
                        null == this._params ? t.push("Object message is null") : this._params instanceof a.SFSObject || t.push("Message object must be an instance of SFSObject class"), null == this._room && (this._room = e.lastJoinedRoom), null == this._room ? t.push("You must be joined in a Room to send a message") : this._room instanceof u.SFSRoom ? e.getJoinedRooms().indexOf(this._room) < 0 && t.push("You are not joined in the target Room: " + this._room) : t.push("Target Room must be an instance of SFSRoom class"), null != this._recipient && (this._recipient instanceof Array ? this._recipient.every(function(e) {
                            return e instanceof c.SFSUser
                        }) || t.push("Each message recipient must be an instance of SFSUser class") : t.push("Message recipients must be passed in an array"), this._recipient.length > this._room.capacity && t.push("The number of recipients is bigger than the target Room capacity: " + this._recipient.length))
                    }
                }, {
                    key: "_validateBuddyMessage",
                    value: function(e, t) {
                        e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), !1 === e.buddyManager.myOnlineState && t.push("Can't send messages while you are offline in the Buddy List system"), null != this._message && 0 !== this._message.length || t.push("Buddy message is empty"), this._recipient < 0 && t.push("Recipient is offline or not in your Buddy List"), null == this._params || this._params instanceof a.SFSObject || t.push("Message parameters must be set in a SFSObject class instance")
                    }
                }, {
                    key: "_validateSuperUserMessage",
                    value: function(e, t) {
                        switch (null != this._message && 0 !== this._message.length || t.push("Moderator message is empty"), null == this._params || this._params instanceof a.SFSObject || t.push("Message parameters must be set in a SFSObject class instance"), this._sendMode) {
                            case s.MessageRecipientMode.TO_USER:
                                this._recipient instanceof c.SFSUser || t.push("Recipient must be an instance of SFSUser class");
                                break;
                            case s.MessageRecipientMode.TO_ROOM:
                                this._recipient instanceof u.SFSRoom || t.push("Recipient must be an instance of SFSRoom class");
                                break;
                            case s.MessageRecipientMode.TO_GROUP:
                                "string" != typeof this._recipient && t.push("Recipient must be a string (the groupId)")
                        }
                    }
                }, {
                    key: "_executePublicMessage",
                    value: function(e) {
                        this._reqObj.putInt(t.KEY_ROOM_ID, this._room.id), this._reqObj.putInt(t.KEY_USER_ID, e.mySelf.id), this._reqObj.putUtfString(t.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t.KEY_XTRA_PARAMS, this._params)
                    }
                }, {
                    key: "_executePrivateMessage",
                    value: function(e) {
                        this._reqObj.putInt(t.KEY_RECIPIENT, this._recipient), this._reqObj.putUtfString(t.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t.KEY_XTRA_PARAMS, this._params)
                    }
                }, {
                    key: "_executeBuddyMessage",
                    value: function(e) {
                        this._reqObj.putInt(t.KEY_RECIPIENT, this._recipient), this._reqObj.putUtfString(t.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t.KEY_XTRA_PARAMS, this._params)
                    }
                }, {
                    key: "_executeSuperUserMessage",
                    value: function(e) {
                        switch (this._reqObj.putUtfString(t.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t.KEY_XTRA_PARAMS, this._params), this._reqObj.putInt(t.KEY_RECIPIENT_MODE, this._sendMode), this._sendMode) {
                            case s.MessageRecipientMode.TO_USER:
                            case s.MessageRecipientMode.TO_ROOM:
                                this._reqObj.putInt(t.KEY_RECIPIENT, this._recipient.id);
                                break;
                            case s.MessageRecipientMode.TO_GROUP:
                                this._reqObj.putUtfString(t.KEY_RECIPIENT, this._recipient)
                        }
                    }
                }, {
                    key: "_executeObjectMessage",
                    value: function(e) {
                        this._reqObj.putInt(t.KEY_ROOM_ID, this._room.id), this._reqObj.putSFSObject(t.KEY_XTRA_PARAMS, this._params);
                        var n = new Set;
                        if (null != this._recipient) {
                            var r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var s, a = this._recipient[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                                    var u = s.value;
                                    n.add(u.id)
                                }
                            } catch (e) {
                                i = !0, o = e
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                        }
                        n.size > 0 && this._reqObj.putIntArray(t.KEY_RECIPIENT, Array.from(n))
                    }
                }]), t
            }(),
            p = function(e) {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    l(this, t);
                    var i = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return i._type = _.OBJECT_MSG, i._params = e, i._room = n, i._recipient = r, Object.seal(i), i
                }
                return h(t, y), t
            }(),
            d = function(e) {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    l(this, t);
                    var i = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return i._type = _.PUBLIC_MSG, i._message = e, i._room = r, i._params = n, Object.seal(i), i
                }
                return h(t, y), t
            }(),
            g = function(e) {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    l(this, t);
                    var i = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return i._type = _.PRIVATE_MSG, i._message = e, i._recipient = n, i._params = r, Object.seal(i), i
                }
                return h(t, y), t
            }(),
            v = function(e) {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    l(this, t);
                    var i = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (null == n) throw new o.SFSError("Recipient mode cannot be null");
                    if (!(n instanceof s.MessageRecipientMode)) throw new o.SFSError("Recipient mode must be an instance of MessageRecipientMode class");
                    return i._type = _.MODERATOR_MSG, i._message = e, i._params = r, i._recipient = n.target, i._sendMode = n.mode, Object.seal(i), i
                }
                return h(t, y), t
            }(),
            b = function(e) {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    l(this, t);
                    var i = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (null == n) throw new o.SFSError("Recipient mode cannot be null");
                    if (!(n instanceof s.MessageRecipientMode)) throw new o.SFSError("Recipient mode must an instance of MessageRecipientMode class");
                    return i._type = _.ADMING_MSG, i._message = e, i._params = r, i._recipient = n.target, i._sendMode = n.mode, Object.seal(i), i
                }
                return h(t, y), t
            }();
        t.GenericMessageType = _, t.GenericMessageRequest = y, t.PublicMessageRequest = d, t.PrivateMessageRequest = g, t.ObjectMessageRequest = p, t.ModeratorMessageRequest = v, t.AdminMessageRequest = b
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateRoomRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(56),
            a = n(8),
            u = n(10),
            c = n(49);
        var l = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.CreateRoom));
                return o._settings = e, o._autoJoin = n, o._roomToLeave = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_NAME",
                get: function() {
                    return "n"
                }
            }, {
                key: "KEY_PASSWORD",
                get: function() {
                    return "p"
                }
            }, {
                key: "KEY_GROUP_ID",
                get: function() {
                    return "g"
                }
            }, {
                key: "KEY_ISGAME",
                get: function() {
                    return "ig"
                }
            }, {
                key: "KEY_MAXUSERS",
                get: function() {
                    return "mu"
                }
            }, {
                key: "KEY_MAXSPECTATORS",
                get: function() {
                    return "ms"
                }
            }, {
                key: "KEY_MAXVARS",
                get: function() {
                    return "mv"
                }
            }, {
                key: "KEY_ROOMVARS",
                get: function() {
                    return "rv"
                }
            }, {
                key: "KEY_PERMISSIONS",
                get: function() {
                    return "pm"
                }
            }, {
                key: "KEY_EVENTS",
                get: function() {
                    return "ev"
                }
            }, {
                key: "KEY_EXTID",
                get: function() {
                    return "xn"
                }
            }, {
                key: "KEY_EXTCLASS",
                get: function() {
                    return "xc"
                }
            }, {
                key: "KEY_EXTPROP",
                get: function() {
                    return "xp"
                }
            }, {
                key: "KEY_AUTOJOIN",
                get: function() {
                    return "aj"
                }
            }, {
                key: "KEY_ROOM_TO_LEAVE",
                get: function() {
                    return "rl"
                }
            }, {
                key: "KEY_ALLOW_JOIN_INVITATION_BY_OWNER",
                get: function() {
                    return "aji"
                }
            }, {
                key: "KEY_MMO_DEFAULT_AOI",
                get: function() {
                    return "maoi"
                }
            }, {
                key: "KEY_MMO_MAP_LOW_LIMIT",
                get: function() {
                    return "mllm"
                }
            }, {
                key: "KEY_MMO_MAP_HIGH_LIMIT",
                get: function() {
                    return "mlhm"
                }
            }, {
                key: "KEY_MMO_USER_MAX_LIMBO_SECONDS",
                get: function() {
                    return "muls"
                }
            }, {
                key: "KEY_MMO_PROXIMITY_UPDATE_MILLIS",
                get: function() {
                    return "mpum"
                }
            }, {
                key: "KEY_MMO_SEND_ENTRY_POINT",
                get: function() {
                    return "msep"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    if (!(this._settings instanceof s.RoomSettings)) throw new o.SFSValidationError("CreateRoomRequest Error", ["Room configuration must be an instance of RoomSettings class"]);
                    var t = [];
                    if (null != this._settings.name && 0 !== this._settings.name.length || t.push("Missing Room name"), this._settings.maxUsers <= 0 && t.push("Max number of users must be > 0"), this._settings.maxSpectators < 0 && t.push("Max number of spectators must be >= 0"), this._settings.maxVariables < 0 && t.push("Max number of Room Variables must be >= 0"), null != this._settings.variables && (this._settings.variables instanceof Array ? this._settings.variables.every(function(e) {
                            return e instanceof c.SFSRoomVariable
                        }) || t.push("Each Room Variable must be an instance of SFSRoomVariable class") : t.push("Room Variables must be passed in an array")), null == this._settings.permissions || this._settings.permissions instanceof s.RoomPermissions || t.push("Allowed room permissions must be an instance of RoomPermissions class"), null == this._settings.events || this._settings.events instanceof s.RoomEvents || t.push("Allowed room events must be an instance of RoomEvents class"), null != this._settings.extension && (this._settings.extension instanceof s.RoomExtension ? (null != this._settings.extension.className && 0 !== this._settings.extension.className.length || t.push("Missing Room Extension class name"), null != this._settings.extension.id && 0 !== this._settings.extension.id.length || t.push("Missing Room Extension id")) : t.push("Room Extension settings must be an instance of RoomExtension class")), this._settings instanceof s.MMORoomSettings && (null == this._settings.defaultAOI && t.push("Missing MMORoom's default AoI (Area of Interest)"), this._settings.defaultAOI instanceof a.Vec3D || t.push("MMORoom's AoI (Area of Interest) must be an instance of Vec3D class"), null != this._settings.mapLimits && (this._settings.mapLimits instanceof s.MapLimits ? (null != this._settings.mapLimits.lowerLimit && null != this._settings.mapLimits.higherLimit || t.push("MMORoom's lower and higher map limits must be both set"), this._settings.mapLimits.lowerLimit instanceof a.Vec3D && this._settings.mapLimits.higherLimit instanceof a.Vec3D || t.push("MMORoom's lower and higher map limits must be both instances of Vec3D class")) : t.push("MMORoom's map limits must be set in an instance of MapLimits class"))), null == this._roomToLeave || this._roomToLeave instanceof u.SFSRoom || t.push("Room to leave must be an instance of SFSRoom class"), t.length > 0) throw new o.SFSValidationError("CreateRoomRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    if (this._reqObj.putUtfString(t.KEY_NAME, this._settings.name), this._reqObj.putUtfString(t.KEY_GROUP_ID, this._settings.groupId), this._reqObj.putUtfString(t.KEY_PASSWORD, this._settings.password), this._reqObj.putBool(t.KEY_ISGAME, this._settings.isGame), this._reqObj.putShort(t.KEY_MAXUSERS, this._settings.maxUsers), this._reqObj.putShort(t.KEY_MAXSPECTATORS, this._settings.maxSpectators), this._reqObj.putShort(t.KEY_MAXVARS, this._settings.maxVariables), this._reqObj.putBool(t.KEY_ALLOW_JOIN_INVITATION_BY_OWNER, this._settings.allowOwnerOnlyInvitation), null != this._settings.variables && this._settings.variables.length > 0) {
                        var n = new a.SFSArray,
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var u, c = this._settings.variables[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                                var l = u.value;
                                n.addSFSArray(l.toSFSArray())
                            }
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && c.return && c.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        this._reqObj.putSFSArray(t.KEY_ROOMVARS, n)
                    }
                    if (null != this._settings.permissions) {
                        var f = [];
                        f.push(this._settings.permissions.allowNameChange), f.push(this._settings.permissions.allowPasswordStateChange), f.push(this._settings.permissions.allowPublicMessages), f.push(this._settings.permissions.allowResizing), this._reqObj.putBoolArray(t.KEY_PERMISSIONS, f)
                    }
                    if (null != this._settings.events) {
                        var h = [];
                        h.push(this._settings.events.allowUserEnter), h.push(this._settings.events.allowUserExit), h.push(this._settings.events.allowUserCountChange), h.push(this._settings.events.allowUserVariablesUpdate), this._reqObj.putBoolArray(t.KEY_EVENTS, h)
                    }
                    null != this._settings.extension && (this._reqObj.putUtfString(t.KEY_EXTID, this._settings.extension.id), this._reqObj.putUtfString(t.KEY_EXTCLASS, this._settings.extension.className), null != this._settings.extension.propertiesFile && this._settings.extension.propertiesFile.length > 0 && this._reqObj.putUtfString(t.KEY_EXTPROP, this._settings.extension.propertiesFile)), this._settings instanceof s.MMORoomSettings && (this._settings.defaultAOI.isFloat ? (this._reqObj.putFloatArray(t.KEY_MMO_DEFAULT_AOI, this._settings.defaultAOI.toArray()), null != this._settings.mapLimits && (this._reqObj.putFloatArray(t.KEY_MMO_MAP_LOW_LIMIT, this._settings.mapLimits.lowerLimit.toArray()), this._reqObj.putFloatArray(t.KEY_MMO_MAP_HIGH_LIMIT, this._settings.mapLimits.higherLimit.toArray()))) : (this._reqObj.putIntArray(t.KEY_MMO_DEFAULT_AOI, this._settings.defaultAOI.toArray()), null != this._settings.mapLimits && (this._reqObj.putIntArray(t.KEY_MMO_MAP_LOW_LIMIT, this._settings.mapLimits.lowerLimit.toArray()), this._reqObj.putIntArray(t.KEY_MMO_MAP_HIGH_LIMIT, this._settings.mapLimits.higherLimit.toArray()))), this._reqObj.putShort(t.KEY_MMO_USER_MAX_LIMBO_SECONDS, this._settings.userMaxLimboSeconds), this._reqObj.putShort(t.KEY_MMO_PROXIMITY_UPDATE_MILLIS, this._settings.proximityListUpdateMillis), this._reqObj.putBool(t.KEY_MMO_SEND_ENTRY_POINT, this._settings.sendAOIEntryPoint)), this._reqObj.putBool(t.KEY_AUTOJOIN, this._autoJoin), null != this._roomToLeave && this._reqObj.putInt(t.KEY_ROOM_TO_LEAVE, this._roomToLeave.id)
                }
            }]), t
        }();
        t.CreateRoomRequest = l
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._id = -1, this._inviter = t, this._invitee = n, this._secondsForAnswer = r, this._params = i, Object.seal(this)
                }
                return r(e, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "inviter",
                    get: function() {
                        return this._inviter
                    }
                }, {
                    key: "invitee",
                    get: function() {
                        return this._invitee
                    }
                }, {
                    key: "secondsForAnswer",
                    get: function() {
                        return this._secondsForAnswer
                    }
                }, {
                    key: "params",
                    get: function() {
                        return this._params
                    }
                }]), e
            }(),
            o = Object.freeze({
                ACCEPT: 0,
                REFUSE: 1,
                EXPIRED: 255
            });
        t.SFSInvitation = i, t.InvitationReply = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MMOItemVariable = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(48);
        var o = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                return Object.freeze(i), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseVariable), r(t, [{
                key: "toString",
                value: function() {
                    return "[ItemVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]"
                }
            }], [{
                key: "fromSFSArray",
                value: function(e) {
                    return new t(e.get(0), e.get(2), e.get(1))
                }
            }]), t
        }();
        t.MMOItemVariable = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = function() {
            function e() {
                throw function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), "Class SFSErrorCodes cannot be instantiated. Please check the documentation for more details on its usage"
            }
            return r(e, null, [{
                key: "setErrorMessage",
                value: function(e, t) {
                    this._errorsByCode[e] = t
                }
            }, {
                key: "getErrorMessage",
                value: function(e, t) {
                    return this.stringFormat(this._errorsByCode[e], t)
                }
            }, {
                key: "stringFormat",
                value: function(e, t) {
                    if (null == e) return "";
                    if (null != t)
                        for (var n = 0; n < t.length; n++) {
                            var r = "{" + n + "}";
                            e = e.replace(r, t[n])
                        }
                    return e
                }
            }, {
                key: "_errorsByCode",
                get: function() {
                    return o
                }
            }]), e
        }();
        t.SFSErrorCodes = i;
        var o = ["Client API version is obsolete: {0}; required version: {1}", "Requested Zone {0} does not exist", "User name {0} is not recognized", "Wrong password for user {0}", "User {0} is banned", "Zone {0} is full", "User {0} is already logged in Zone {1}", "The server is full", "Zone {0} is currently inactive", "User name {0} contains bad words; filtered: {1}", "Guest users not allowed in Zone {0}", "IP address {0} is banned", "A Room with the same name already exists: {0}", "Requested Group is not available - Room: {0}; Group: {1}", "Bad Room name length -  Min: {0}; max: {1}; passed name length: {2}", "Room name contains bad words: {0}", "Zone is full; can't add Rooms anymore", "You have exceeded the number of Rooms that you can create per session: {0}", "Room creation failed, wrong parameter: {0}", "User {0} already joined in Room", "Room {0} is full", "Wrong password for Room {0}", "Requested Room does not exist", "Room {0} is locked", "Group {0} is already subscribed", "Group {0} does not exist", "Group {0} is not subscribed", "Group {0} does not exist", "{0}", "Room permission error; Room {0} cannot be renamed", "Room permission error; Room {0} cannot change password state", "Room permission error; Room {0} cannot change capacity", "Switch user error; no player slots available in Room {0}", "Switch user error; no spectator slots available in Room {0}", "Switch user error; Room {0} is not a Game Room", "Switch user error; you are not joined in Room {0}", "Buddy Manager initialization error, could not load buddy list: {0}", "Buddy Manager error, your buddy list is full; size is {0}", "Buddy Manager error, was not able to block buddy {0} because offline", "Buddy Manager error, you are attempting to set too many Buddy Variables; limit is {0}", "Game {0} access denied, user does not match access criteria", "QuickJoinGame action failed: no matching Rooms were found", "Your previous invitation reply was invalid or arrived too late"]
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(11),
            o = n(43),
            s = n(59),
            a = n(18),
            u = n(40),
            c = n(3),
            l = n(41),
            f = n(24),
            h = n(12),
            _ = n(121),
            y = n(32).f,
            p = n(9).f,
            d = n(77),
            g = n(44),
            v = "prototype",
            b = "Wrong index!",
            m = r.ArrayBuffer,
            S = r.DataView,
            E = r.Math,
            R = r.RangeError,
            O = r.Infinity,
            A = m,
            w = E.abs,
            I = E.pow,
            M = E.floor,
            T = E.log,
            k = E.LN2,
            P = i ? "_b" : "buffer",
            F = i ? "_l" : "byteLength",
            N = i ? "_o" : "byteOffset";

        function j(e, t, n) {
            var r, i, o, s = new Array(n),
                a = 8 * n - t - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                l = 23 === t ? I(2, -24) - I(2, -77) : 0,
                f = 0,
                h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for ((e = w(e)) != e || e === O ? (i = e != e ? 1 : 0, r = u) : (r = M(T(e) / k), e * (o = I(2, -r)) < 1 && (r--, o *= 2), (e += r + c >= 1 ? l / o : l * I(2, 1 - c)) * o >= 2 && (r++, o /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (e * o - 1) * I(2, t), r += c) : (i = e * I(2, c - 1) * I(2, t), r = 0)); t >= 8; s[f++] = 255 & i, i /= 256, t -= 8);
            for (r = r << t | i, a += t; a > 0; s[f++] = 255 & r, r /= 256, a -= 8);
            return s[--f] |= 128 * h, s
        }

        function U(e, t, n) {
            var r, i = 8 * n - t - 1,
                o = (1 << i) - 1,
                s = o >> 1,
                a = i - 7,
                u = n - 1,
                c = e[u--],
                l = 127 & c;
            for (c >>= 7; a > 0; l = 256 * l + e[u], u--, a -= 8);
            for (r = l & (1 << -a) - 1, l >>= -a, a += t; a > 0; r = 256 * r + e[u], u--, a -= 8);
            if (0 === l) l = 1 - s;
            else {
                if (l === o) return r ? NaN : c ? -O : O;
                r += I(2, t), l -= s
            }
            return (c ? -1 : 1) * r * I(2, l - t)
        }

        function B(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }

        function L(e) {
            return [255 & e]
        }

        function D(e) {
            return [255 & e, e >> 8 & 255]
        }

        function Y(e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        }

        function C(e) {
            return j(e, 52, 8)
        }

        function x(e) {
            return j(e, 23, 4)
        }

        function q(e, t, n) {
            p(e[v], t, {
                get: function() {
                    return this[n]
                }
            })
        }

        function V(e, t, n, r) {
            var i = _(+n);
            if (i + t > e[F]) throw R(b);
            var o = e[P]._b,
                s = i + e[N],
                a = o.slice(s, s + t);
            return r ? a : a.reverse()
        }

        function K(e, t, n, r, i, o) {
            var s = _(+n);
            if (s + t > e[F]) throw R(b);
            for (var a = e[P]._b, u = s + e[N], c = r(+i), l = 0; l < t; l++) a[u + l] = c[o ? l : t - l - 1]
        }
        if (s.ABV) {
            if (!c(function() {
                    m(1)
                }) || !c(function() {
                    new m(-1)
                }) || c(function() {
                    return new m, new m(1.5), new m(NaN), "ArrayBuffer" != m.name
                })) {
                for (var G, z = (m = function(e) {
                        return l(this, m), new A(_(e))
                    })[v] = A[v], H = y(A), J = 0; H.length > J;)(G = H[J++]) in m || a(m, G, A[G]);
                o || (z.constructor = m)
            }
            var W = new S(new m(2)),
                X = S[v].setInt8;
            W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || u(S[v], {
                setInt8: function(e, t) {
                    X.call(this, e, t << 24 >> 24)
                },
                setUint8: function(e, t) {
                    X.call(this, e, t << 24 >> 24)
                }
            }, !0)
        } else m = function(e) {
            l(this, m, "ArrayBuffer");
            var t = _(e);
            this._b = d.call(new Array(t), 0), this[F] = t
        }, S = function(e, t, n) {
            l(this, S, "DataView"), l(e, m, "DataView");
            var r = e[F],
                i = f(t);
            if (i < 0 || i > r) throw R("Wrong offset!");
            if (i + (n = void 0 === n ? r - i : h(n)) > r) throw R("Wrong length!");
            this[P] = e, this[N] = i, this[F] = n
        }, i && (q(m, "byteLength", "_l"), q(S, "buffer", "_b"), q(S, "byteLength", "_l"), q(S, "byteOffset", "_o")), u(S[v], {
            getInt8: function(e) {
                return V(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function(e) {
                return V(this, 1, e)[0]
            },
            getInt16: function(e) {
                var t = V(this, 2, e, arguments[1]);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function(e) {
                var t = V(this, 2, e, arguments[1]);
                return t[1] << 8 | t[0]
            },
            getInt32: function(e) {
                return B(V(this, 4, e, arguments[1]))
            },
            getUint32: function(e) {
                return B(V(this, 4, e, arguments[1])) >>> 0
            },
            getFloat32: function(e) {
                return U(V(this, 4, e, arguments[1]), 23, 4)
            },
            getFloat64: function(e) {
                return U(V(this, 8, e, arguments[1]), 52, 8)
            },
            setInt8: function(e, t) {
                K(this, 1, e, L, t)
            },
            setUint8: function(e, t) {
                K(this, 1, e, L, t)
            },
            setInt16: function(e, t) {
                K(this, 2, e, D, t, arguments[2])
            },
            setUint16: function(e, t) {
                K(this, 2, e, D, t, arguments[2])
            },
            setInt32: function(e, t) {
                K(this, 4, e, Y, t, arguments[2])
            },
            setUint32: function(e, t) {
                K(this, 4, e, Y, t, arguments[2])
            },
            setFloat32: function(e, t) {
                K(this, 4, e, x, t, arguments[2])
            },
            setFloat64: function(e, t) {
                K(this, 8, e, C, t, arguments[2])
            }
        });
        g(m, "ArrayBuffer"), g(S, "DataView"), a(S[v], s.VIEW, !0), t.ArrayBuffer = m, t.DataView = S
    }, function(e, t, n) {
        var r = n(5),
            i = n(26),
            o = n(7)("species");
        e.exports = function(e, t) {
            var n, s = r(e).constructor;
            return void 0 === s || void 0 == (n = r(s)[o]) ? t : i(n)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(5);
        e.exports = function() {
            var e = r(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(34),
            o = n(12);
        e.exports = function(e) {
            for (var t = r(this), n = o(t.length), s = arguments.length, a = i(s > 1 ? arguments[1] : void 0, n), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > a;) t[a++] = e;
            return t
        }
    }, function(e, t, n) {
        var r = n(65),
            i = n(7)("iterator"),
            o = n(53);
        e.exports = n(37).getIteratorMethod = function(e) {
            if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    }, function(e, t, n) {
        var r = n(53),
            i = n(7)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    }, function(e, t, n) {
        var r = n(7)("match");
        e.exports = function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[r] = !1, !"/./" [e](t)
                } catch (e) {}
            }
            return !0
        }
    }, function(e, t, n) {
        var r = n(4),
            i = n(25),
            o = n(7)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    }, function(e, t, n) {
        var r = n(81),
            i = n(28);
        e.exports = function(e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(43),
            i = n(0),
            o = n(15),
            s = n(18),
            a = n(53),
            u = n(133),
            c = n(44),
            l = n(31),
            f = n(7)("iterator"),
            h = !([].keys && "next" in [].keys()),
            _ = function() {
                return this
            };
        e.exports = function(e, t, n, y, p, d, g) {
            u(n, t, y);
            var v, b, m, S = function(e) {
                    if (!h && e in A) return A[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                E = t + " Iterator",
                R = "values" == p,
                O = !1,
                A = e.prototype,
                w = A[f] || A["@@iterator"] || p && A[p],
                I = w || S(p),
                M = p ? R ? S("entries") : I : void 0,
                T = "Array" == t && A.entries || w;
            if (T && (m = l(T.call(new e))) !== Object.prototype && m.next && (c(m, E, !0), r || "function" == typeof m[f] || s(m, f, _)), R && w && "values" !== w.name && (O = !0, I = function() {
                    return w.call(this)
                }), r && !g || !h && !O && A[f] || s(A, f, I), a[t] = I, a[E] = _, p)
                if (v = {
                        values: R ? I : S("values"),
                        keys: d ? I : S("keys"),
                        entries: M
                    }, g)
                    for (b in v) b in A || o(A, b, v[b]);
                else i(i.P + i.F * (h || O), t, v);
            return v
        }
    }, function(e, t) {
        var n = Math.expm1;
        e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e) {
            return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
        } : n
    }, function(e, t) {
        e.exports = Math.sign || function(e) {
            return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
        }
    }, function(e, t, n) {
        var r = n(4),
            i = n(88).set;
        e.exports = function(e, t, n) {
            var o, s = t.constructor;
            return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && r(o) && i && i(e, o), e
        }
    }, function(e, t) {
        e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, function(e, t, n) {
        var r = n(4),
            i = n(5),
            o = function(e, t) {
                if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
            };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                try {
                    (r = n(27)(Function.call, n(23).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                } catch (e) {
                    t = !0
                }
                return function(e, n) {
                    return o(e, n), t ? e.__proto__ = n : r(e, n), e
                }
            }({}, !1) : void 0),
            check: o
        }
    }, function(e, t, n) {
        var r = n(6).document;
        e.exports = r && r.documentElement
    }, function(e, t, n) {
        var r = n(25);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, n) {
        var r = n(94)("keys"),
            i = n(35);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    }, function(e, t, n) {
        var r = n(21),
            i = n(12),
            o = n(34);
        e.exports = function(e) {
            return function(t, n, s) {
                var a, u = r(t),
                    c = i(u.length),
                    l = o(s, c);
                if (e && n != n) {
                    for (; c > l;)
                        if ((a = u[l++]) != a) return !0
                } else
                    for (; c > l; l++)
                        if ((e || l in u) && u[l] === n) return e || l || 0;
                return !e && -1
            }
        }
    }, function(e, t, n) {
        var r = n(6),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        e.exports = function(e) {
            return i[e] || (i[e] = {})
        }
    }, function(e, t, n) {
        var r = n(4),
            i = n(6).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ExtensionRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(8),
            a = n(10);
        var u = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.CallExtension));
                return o._targetController = 1, o._extCmd = e, o._params = n, o._room = r, null == o._params && (o._params = new s.SFSObject), Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_CMD",
                get: function() {
                    return "c"
                }
            }, {
                key: "KEY_PARAMS",
                get: function() {
                    return "p"
                }
            }, {
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null != this._extCmd && 0 !== this._extCmd.length || t.push("Missing extension command"), null == this._params || this._params instanceof s.SFSObject || t.push("Custom parameters must be set in a SFSObject class instance"), null == this._room || this._room instanceof a.SFSRoom || t.push("Room must be an instance of SFSRoom class"), t.length > 0) throw new o.SFSValidationError("ExtensionRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_CMD, this._extCmd), this._reqObj.putInt(t.KEY_ROOM, null == this._room ? -1 : this._room.id), this._reqObj.putSFSObject(t.KEY_PARAMS, this._params)
                }
            }]), t
        }();
        t.ExtensionRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SetBuddyVariablesRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(8),
            a = n(46);
        var u = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.SetBuddyVariables));
                return n._buddyVariables = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_BUDDY_NAME",
                get: function() {
                    return "bn"
                }
            }, {
                key: "KEY_BUDDY_VARS",
                get: function() {
                    return "bv"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), !1 === e.buddyManager.getMyOnlineState() && t.push("Can't set Buddy Variables while you are offline in the Buddy List system"), null == this._buddyVariables ? t.push("No Buddy Variables specified") : this._buddyVariables instanceof Array ? 0 === this._buddyVariables.length ? t.push("No Buddy Variables specified") : this._buddyVariables.every(function(e) {
                            return e instanceof a.SFSBuddyVariable
                        }) || t.push("Buddy Variables must be passed as instances of SFSBuddyVariable class") : t.push("Buddy Variables must be passed in an array"), t.length > 0) throw new o.SFSValidationError("SetBuddyVariablesRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    var n = new s.SFSArray,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = this._buddyVariables[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var c = a.value;
                            n.addSFSArray(c.toSFSArray())
                        }
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    this._reqObj.putSFSArray(t.KEY_BUDDY_VARS, n)
                }
            }]), t
        }();
        t.SetBuddyVariablesRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GoOnlineRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.GoOnline));
                return n._online = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ONLINE",
                get: function() {
                    return "o"
                }
            }, {
                key: "KEY_BUDDY_NAME",
                get: function() {
                    return "bn"
                }
            }, {
                key: "KEY_BUDDY_ID",
                get: function() {
                    return "bi"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), t.length > 0) throw new o.SFSValidationError("GoOnlineRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    e.buddyManager._setMyOnlineState(this._online), this._reqObj.putBool(t.KEY_ONLINE, this._online)
                }
            }]), t
        }();
        t.GoOnlineRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BlockBuddyRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.BlockBuddy));
                return r._name = e, r._blocked = n, Object.seal(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_BUDDY_NAME",
                get: function() {
                    return "bn"
                }
            }, {
                key: "KEY_BUDDY_BLOCK_STATE",
                get: function() {
                    return "bs"
                }
            }, {
                key: "KEY_BUDDY",
                get: function() {
                    return "bd"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), !1 === e.buddyManager.getMyOnlineState() && t.push("Can't block a buddy while you are offline in the Buddy List system"), null == this._name || this._name.length < 1) t.push("Invalid buddy name (null or empty string)");
                    else {
                        var n = e.buddyManager.getBuddyByName(this._name);
                        null == n ? t.push("Can't block buddy '" + this._name + "' because it isn't in your list") : n.isBlocked == this._blocked && t.push("Block flag is already in the requested '" + this._blocked + "' state for buddy '" + this._name + "'")
                    }
                    if (t.length > 0) throw new o.SFSValidationError("BlockBuddyRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_BUDDY_NAME, this._name), this._reqObj.putBool(t.KEY_BUDDY_BLOCK_STATE, this._blocked)
                }
            }]), t
        }();
        t.BlockBuddyRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RemoveBuddyRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.RemoveBuddy));
                return n._name = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_BUDDY_NAME",
                get: function() {
                    return "bn"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), !1 === e.buddyManager.getMyOnlineState() && t.push("Can't remove a buddy while you are offline in the Buddy List system"), null == this._name || this._name.length < 1 ? t.push("Invalid buddy name (null or empty string)") : e.buddyManager.containsBuddy(this._name) || t.push("Can't remove buddy '" + this._name + "' because it isn't in your list"), t.length > 0) throw new o.SFSValidationError("RemoveBuddyRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_BUDDY_NAME, this._name)
                }
            }]), t
        }();
        t.RemoveBuddyRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AddBuddyRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.AddBuddy));
                return n._name = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_BUDDY_NAME",
                get: function() {
                    return "bn"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), (null == this._name || this._name.length < 1) && t.push("Invalid buddy name (null or empty string)"), !1 === e.buddyManager.getMyOnlineState() && t.push("Can't add a buddy while you are offline in the Buddy List system");
                    var n = e.buddyManager.getBuddyByName(this._name);
                    if (null == n || n.isTemp || t.push("Can't add buddy '" + this._name + "' because it is already in your list"), t.length > 0) throw new o.SFSValidationError("AddBuddyRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_BUDDY_NAME, this._name)
                }
            }]), t
        }();
        t.AddBuddyRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InitBuddyListRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.InitBuddyList));
                return Object.seal(e), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_BLIST",
                get: function() {
                    return "bl"
                }
            }, {
                key: "KEY_BUDDY_STATES",
                get: function() {
                    return "bs"
                }
            }, {
                key: "KEY_MY_VARS",
                get: function() {
                    return "mv"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.buddyManager.isInited && t.push("Buddy List is already initialized"), t.length > 0) throw new o.SFSValidationError("InitBuddyListRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {}
            }]), t
        }();
        t.InitBuddyListRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SetUserPositionRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(8),
            a = n(10);
        var u = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.SetUserPosition));
                return r._pos = e, r._room = n, Object.seal(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_VEC3D",
                get: function() {
                    return "v"
                }
            }, {
                key: "KEY_PLUS_USER_LIST",
                get: function() {
                    return "p"
                }
            }, {
                key: "KEY_MINUS_USER_LIST",
                get: function() {
                    return "m"
                }
            }, {
                key: "KEY_PLUS_ITEM_LIST",
                get: function() {
                    return "q"
                }
            }, {
                key: "KEY_MINUS_ITEM_LIST",
                get: function() {
                    return "n"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null != this._pos && this._pos instanceof s.Vec3D || t.push("Position must be an instance of Vec3D class"), null == this._room && (this._room = e.lastJoinedRoom), null == this._room && t.push("You are not joined in any room"), this._room instanceof a.MMORoom || t.push("Target room must be an instance of MMORoom class"), t.length > 0) throw new o.SFSValidationError("SetUserPosition Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_ROOM, this._room.id), this._pos.isFloat ? this._reqObj.putFloatArray(t.KEY_VEC3D, this._pos.toArray()) : this._reqObj.putIntArray(t.KEY_VEC3D, this._pos.toArray())
                }
            }]), t
        }();
        t.SetUserPositionRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FindUsersRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10),
            a = n(45);
        var u = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.FindUsers));
                return o._matchExpr = e, o._target = n, o._limit = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_EXPRESSION",
                get: function() {
                    return "e"
                }
            }, {
                key: "KEY_GROUP",
                get: function() {
                    return "g"
                }
            }, {
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_LIMIT",
                get: function() {
                    return "l"
                }
            }, {
                key: "KEY_FILTERED_USERS",
                get: function() {
                    return "fu"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null == this._matchExpr && t.push("Missing match expression"), null == this._matchExpr || this._matchExpr instanceof a.MatchExpression || t.push("Match expression must be passed as an instance of MatchExpression class"), t.length > 0) throw new o.SFSValidationError("FindUsersRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putSFSArray(t.KEY_EXPRESSION, this._matchExpr.toSFSArray()), null != this._target && (this._target instanceof s.SFSRoom ? this._reqObj.putInt(t.KEY_ROOM, this._target.id) : "string" == typeof this._target ? this._reqObj.putUtfString(t.KEY_GROUP, this._target) : this._logger.warn("Unsupported target type for FindUsersRequest: " + this._target)), this._limit > 0 && this._reqObj.putShort(t.KEY_LIMIT, this._limit)
                }
            }]), t
        }();
        t.FindUsersRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FindRoomsRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(45);
        var a = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.FindRooms));
                return o._matchExpr = e, o._groupId = n, o._limit = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_EXPRESSION",
                get: function() {
                    return "e"
                }
            }, {
                key: "KEY_GROUP",
                get: function() {
                    return "g"
                }
            }, {
                key: "KEY_LIMIT",
                get: function() {
                    return "l"
                }
            }, {
                key: "KEY_FILTERED_ROOMS",
                get: function() {
                    return "fr"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null == this._matchExpr && t.push("Missing match expression"), null == this._matchExpr || this._matchExpr instanceof s.MatchExpression || t.push("Match expression must be passed as an instance of MatchExpression class"), t.length > 0) throw new o.SFSValidationError("FindRoomsRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putSFSArray(t.KEY_EXPRESSION, this._matchExpr.toSFSArray()), null != this._groupId && this._reqObj.putUtfString(t.KEY_GROUP, this._groupId), this._limit > 0 && this._reqObj.putShort(t.KEY_LIMIT, this._limit)
                }
            }]), t
        }();
        t.FindRoomsRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerToSpectatorRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.PlayerToSpectator));
                return n._room = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM_ID",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_USER_ID",
                get: function() {
                    return "u"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.getJoinedRooms().length < 1 && t.push("You are not joined in any Room"), null == this._room || this._room instanceof s.SFSRoom || t.push("Target Room must be an instance of SFSRoom class"), t.length > 0) throw new o.SFSValidationError("PlayerToSpectatorRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    null == this._room && (this._room = e.lastJoinedRoom), this._reqObj.putInt(t.KEY_ROOM_ID, this._room.id)
                }
            }]), t
        }();
        t.PlayerToSpectatorRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SpectatorToPlayerRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.SpectatorToPlayer));
                return n._room = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM_ID",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_USER_ID",
                get: function() {
                    return "u"
                }
            }, {
                key: "KEY_PLAYER_ID",
                get: function() {
                    return "p"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.getJoinedRooms().length < 1 && t.push("You are not joined in any Room"), null == this._room || this._room instanceof s.SFSRoom || t.push("Target Room must be an instance of SFSRoom class"), t.length > 0) throw new o.SFSValidationError("SpectatorToPlayerRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    null == this._room && (this._room = e.lastJoinedRoom), this._reqObj.putInt(t.KEY_ROOM_ID, this._room.id)
                }
            }]), t
        }();
        t.SpectatorToPlayerRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UnsubscribeRoomGroupRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.UnsubscribeRoomGroup));
                return n._groupId = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_GROUP_ID",
                get: function() {
                    return "g"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null != this._groupId && 0 !== this._groupId.length || t.push("Invalid group id passed; must be a string with at least one character"), t.length > 0) throw new o.SFSValidationError("UnsubscribeGroupRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_GROUP_ID, this._groupId)
                }
            }]), t
        }();
        t.UnsubscribeRoomGroupRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SubscribeRoomGroupRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.SubscribeRoomGroup));
                return n._groupId = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_GROUP_ID",
                get: function() {
                    return "g"
                }
            }, {
                key: "KEY_ROOM_LIST",
                get: function() {
                    return "rl"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null != this._groupId && 0 !== this._groupId.length || t.push("Invalid group id passed; must be a string with at least one character"), t.length > 0) throw new o.SFSValidationError("SubscribeGroupRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_GROUP_ID, this._groupId)
                }
            }]), t
        }();
        t.SubscribeRoomGroupRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SetUserVariablesRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(8),
            a = n(58);
        var u = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.SetUserVariables));
                return n._userVariables = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_USER",
                get: function() {
                    return "u"
                }
            }, {
                key: "KEY_VAR_LIST",
                get: function() {
                    return "vl"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null == this._userVariables ? t.push("No User Variables specified") : this._userVariables instanceof Array ? 0 === this._userVariables.length ? t.push("No User Variables specified") : this._userVariables.every(function(e) {
                            return e instanceof a.SFSUserVariable
                        }) || t.push("User Variables must be passed as instances of SFSUserVariable class") : t.push("User Variables must be passed in an array"), t.length > 0) throw new o.SFSValidationError("SetUserVariablesRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    var n = new s.SFSArray,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = this._userVariables[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var c = a.value;
                            n.addSFSArray(c.toSFSArray())
                        }
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    this._reqObj.putSFSArray(t.KEY_VAR_LIST, n)
                }
            }]), t
        }();
        t.SetUserVariablesRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SetRoomVariablesRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(8),
            a = n(10),
            u = n(49);
        var c = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.SetRoomVariables));
                return r._roomVariables = e, r._room = n, Object.seal(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_VAR_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_VAR_LIST",
                get: function() {
                    return "vl"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null == this._room && (this._room = e.lastJoinedRoom), null == this._room ? t.push("You must be joined in a Room to send a message") : this._room instanceof a.SFSRoom ? e.getJoinedRooms().indexOf(this._room) < 0 && t.push("You are not joined in the target Room: " + this._room) : t.push("Target Room must be an instance of SFSRoom class"), null == this._roomVariables ? t.push("No Room Variables specified") : this._roomVariables instanceof Array ? 0 === this._roomVariables.length ? t.push("No Room Variables specified") : this._roomVariables.every(function(e) {
                            return e instanceof u.SFSRoomVariable
                        }) || t.push("Room Variables must be passed as instances of SFSRoomVariable class") : t.push("Room Variables must be passed in an array"), t.length > 0) throw new o.SFSValidationError("SetRoomVariablesRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    var n = new s.SFSArray,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = this._roomVariables[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var c = a.value;
                            n.addSFSArray(c.toSFSArray())
                        }
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    this._reqObj.putSFSArray(t.KEY_VAR_LIST, n), this._reqObj.putInt(t.KEY_VAR_ROOM, this._room.id)
                }
            }]), t
        }();
        t.SetRoomVariablesRequest = c
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ChangeRoomCapacityRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.ChangeRoomCapacity));
                return o._room = e, o._newMaxUsers = n, o._newMaxSpect = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_USER_SIZE",
                get: function() {
                    return "u"
                }
            }, {
                key: "KEY_SPEC_SIZE",
                get: function() {
                    return "s"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (this._room instanceof s.SFSRoom || t.push("Room must be an instance of SFSRoom class"), t.length > 0) throw new o.SFSValidationError("ChangeRoomCapacityRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_ROOM, this._room.id), this._reqObj.putInt(t.KEY_USER_SIZE, this._newMaxUsers), this._reqObj.putInt(t.KEY_SPEC_SIZE, this._newMaxSpect)
                }
            }]), t
        }();
        t.ChangeRoomCapacityRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ChangeRoomPasswordStateRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.ChangeRoomPassword));
                return r._room = e, r._newPass = n, Object.seal(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_PASS",
                get: function() {
                    return "p"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (this._room instanceof s.SFSRoom || t.push("Room must be an instance of SFSRoom class"), null == this._newPass && t.push("New room password must be a non-null string (empty string to remove the password)"), t.length > 0) throw new o.SFSValidationError("ChangeRoomPasswordStateRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_ROOM, this._room.id), this._reqObj.putUtfString(t.KEY_PASS, this._newPass)
                }
            }]), t
        }();
        t.ChangeRoomPasswordStateRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ChangeRoomNameRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.ChangeRoomName));
                return r._room = e, r._newName = n, Object.seal(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_NAME",
                get: function() {
                    return "n"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (this._room instanceof s.SFSRoom || t.push("Room must be an instance of SFSRoom class"), null != this._newName && 0 !== this._newName.length || t.push("New room name must be a non-null and non-empty string"), t.length > 0) throw new o.SFSValidationError("ChangeRoomNameRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_ROOM, this._room.id), this._reqObj.putUtfString(t.KEY_NAME, this._newName)
                }
            }]), t
        }();
        t.ChangeRoomNameRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.JoinRoomRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.JoinRoom));
                return "string" == typeof e ? a._rName = e : "number" == typeof e ? a._rId = e : e instanceof s.SFSRoom && (a._rId = e.id, a._rName = e.name), a._password = n, a._roomIdToLeave = r, a._asSpectator = o, Object.seal(a), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_USER_LIST",
                get: function() {
                    return "ul"
                }
            }, {
                key: "KEY_ROOM_NAME",
                get: function() {
                    return "n"
                }
            }, {
                key: "KEY_ROOM_ID",
                get: function() {
                    return "i"
                }
            }, {
                key: "KEY_PASS",
                get: function() {
                    return "p"
                }
            }, {
                key: "KEY_ROOM_TO_LEAVE",
                get: function() {
                    return "rl"
                }
            }, {
                key: "KEY_AS_SPECTATOR",
                get: function() {
                    return "sp"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    if (null == this._rId && null == this._rName) throw new o.SFSValidationError("JoinRoomRequest Error", ["Missing Room id or name, please provide one of the two or an existing SFSRoom object"])
                }
            }, {
                key: "execute",
                value: function(e) {
                    e._isJoining = !0, this._rId >= 0 ? this._reqObj.putInt(t.KEY_ROOM_ID, this._rId) : null != this._rName && this._reqObj.putUtfString(t.KEY_ROOM_NAME, this._rName), null != this._password && this._reqObj.putUtfString(t.KEY_PASS, this._password), null != this._roomIdToLeave && this._reqObj.putInt(t.KEY_ROOM_TO_LEAVE, this._roomIdToLeave), this._asSpectator && this._reqObj.putBool(t.KEY_AS_SPECTATOR, this._asSpectator)
                }
            }]), t
        }();
        t.JoinRoomRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LogoutRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.Logout));
                return Object.seal(e), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ZONE_NAME",
                get: function() {
                    return "zn"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    if (null == e.mySelf) throw new o.SFSValidationError("LogoutRequest error", ["You are not logged in"])
                }
            }, {
                key: "execute",
                value: function(e) {}
            }]), t
        }();
        t.LogoutRequest = s
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "MD5", function() {
            return r
        });
        var r = function() {
            this.hexcase = 0, this.b64pad = ""
        };
        r.prototype = {}, r.prototype.hex_md5 = function(e) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)))
        }, r.prototype.b64_md5 = function(e) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)))
        }, r.prototype.any_md5 = function(e, t) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t)
        }, r.prototype.hex_hmac_md5 = function(e, t) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
        }, r.prototype.b64_hmac_md5 = function(e, t) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
        }, r.prototype.any_hmac_md5 = function(e, t, n) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), n)
        }, r.prototype.md5_vm_test = function() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
        }, r.prototype.rstr_md5 = function(e) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
        }, r.prototype.rstr_hmac_md5 = function(e, t) {
            var n = this.rstr2binl(e);
            n.length > 16 && (n = this.binl_md5(n, 8 * e.length));
            for (var r = Array(16), i = Array(16), o = 0; o < 16; o++) r[o] = 909522486 ^ n[o], i[o] = 1549556828 ^ n[o];
            var s = this.binl_md5(r.concat(this.rstr2binl(t)), 512 + 8 * t.length);
            return this.binl2rstr(this.binl_md5(i.concat(s), 640))
        }, r.prototype.rstr2hex = function(e) {
            try {
                this.hexcase
            } catch (e) {
                this.hexcase = 0
            }
            for (var t, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", i = 0; i < e.length; i++) t = e.charCodeAt(i), r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
            return r
        }, r.prototype.rstr2b64 = function(e) {
            try {
                this.b64pad
            } catch (e) {
                this.b64pad = ""
            }
            for (var t = "", n = e.length, r = 0; r < n; r += 3)
                for (var i = e.charCodeAt(r) << 16 | (r + 1 < n ? e.charCodeAt(r + 1) << 8 : 0) | (r + 2 < n ? e.charCodeAt(r + 2) : 0), o = 0; o < 4; o++) 8 * r + 6 * o > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - o) & 63);
            return t
        }, r.prototype.rstr2any = function(e, t) {
            var n, r, i, o, s, a = t.length,
                u = Array(Math.ceil(e.length / 2));
            for (n = 0; n < u.length; n++) u[n] = e.charCodeAt(2 * n) << 8 | e.charCodeAt(2 * n + 1);
            var c = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))),
                l = Array(c);
            for (r = 0; r < c; r++) {
                for (s = Array(), o = 0, n = 0; n < u.length; n++) o = (o << 16) + u[n], o -= (i = Math.floor(o / a)) * a, (s.length > 0 || i > 0) && (s[s.length] = i);
                l[r] = o, u = s
            }
            var f = "";
            for (n = l.length - 1; n >= 0; n--) f += t.charAt(l[n]);
            return f
        }, r.prototype.str2rstr_utf8 = function(e) {
            for (var t, n, r = "", i = -1; ++i < e.length;) t = e.charCodeAt(i), n = i + 1 < e.length ? e.charCodeAt(i + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= n && n <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & n), i++), t <= 127 ? r += String.fromCharCode(t) : t <= 2047 ? r += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? r += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (r += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
            return r
        }, r.prototype.str2rstr_utf16le = function(e) {
            for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(255 & e.charCodeAt(n), e.charCodeAt(n) >>> 8 & 255);
            return t
        }, r.prototype.str2rstr_utf16be = function(e) {
            for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) >>> 8 & 255, 255 & e.charCodeAt(n));
            return t
        }, r.prototype.rstr2binl = function(e) {
            for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
            for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
            return t
        }, r.prototype.binl2rstr = function(e) {
            for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
            return t
        }, r.prototype.binl_md5 = function(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var n = 1732584193, r = -271733879, i = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
                var a = n,
                    u = r,
                    c = i,
                    l = o;
                n = this.md5_ff(n, r, i, o, e[s + 0], 7, -680876936), o = this.md5_ff(o, n, r, i, e[s + 1], 12, -389564586), i = this.md5_ff(i, o, n, r, e[s + 2], 17, 606105819), r = this.md5_ff(r, i, o, n, e[s + 3], 22, -1044525330), n = this.md5_ff(n, r, i, o, e[s + 4], 7, -176418897), o = this.md5_ff(o, n, r, i, e[s + 5], 12, 1200080426), i = this.md5_ff(i, o, n, r, e[s + 6], 17, -1473231341), r = this.md5_ff(r, i, o, n, e[s + 7], 22, -45705983), n = this.md5_ff(n, r, i, o, e[s + 8], 7, 1770035416), o = this.md5_ff(o, n, r, i, e[s + 9], 12, -1958414417), i = this.md5_ff(i, o, n, r, e[s + 10], 17, -42063), r = this.md5_ff(r, i, o, n, e[s + 11], 22, -1990404162), n = this.md5_ff(n, r, i, o, e[s + 12], 7, 1804603682), o = this.md5_ff(o, n, r, i, e[s + 13], 12, -40341101), i = this.md5_ff(i, o, n, r, e[s + 14], 17, -1502002290), r = this.md5_ff(r, i, o, n, e[s + 15], 22, 1236535329), n = this.md5_gg(n, r, i, o, e[s + 1], 5, -165796510), o = this.md5_gg(o, n, r, i, e[s + 6], 9, -1069501632), i = this.md5_gg(i, o, n, r, e[s + 11], 14, 643717713), r = this.md5_gg(r, i, o, n, e[s + 0], 20, -373897302), n = this.md5_gg(n, r, i, o, e[s + 5], 5, -701558691), o = this.md5_gg(o, n, r, i, e[s + 10], 9, 38016083), i = this.md5_gg(i, o, n, r, e[s + 15], 14, -660478335), r = this.md5_gg(r, i, o, n, e[s + 4], 20, -405537848), n = this.md5_gg(n, r, i, o, e[s + 9], 5, 568446438), o = this.md5_gg(o, n, r, i, e[s + 14], 9, -1019803690), i = this.md5_gg(i, o, n, r, e[s + 3], 14, -187363961), r = this.md5_gg(r, i, o, n, e[s + 8], 20, 1163531501), n = this.md5_gg(n, r, i, o, e[s + 13], 5, -1444681467), o = this.md5_gg(o, n, r, i, e[s + 2], 9, -51403784), i = this.md5_gg(i, o, n, r, e[s + 7], 14, 1735328473), r = this.md5_gg(r, i, o, n, e[s + 12], 20, -1926607734), n = this.md5_hh(n, r, i, o, e[s + 5], 4, -378558), o = this.md5_hh(o, n, r, i, e[s + 8], 11, -2022574463), i = this.md5_hh(i, o, n, r, e[s + 11], 16, 1839030562), r = this.md5_hh(r, i, o, n, e[s + 14], 23, -35309556), n = this.md5_hh(n, r, i, o, e[s + 1], 4, -1530992060), o = this.md5_hh(o, n, r, i, e[s + 4], 11, 1272893353), i = this.md5_hh(i, o, n, r, e[s + 7], 16, -155497632), r = this.md5_hh(r, i, o, n, e[s + 10], 23, -1094730640), n = this.md5_hh(n, r, i, o, e[s + 13], 4, 681279174), o = this.md5_hh(o, n, r, i, e[s + 0], 11, -358537222), i = this.md5_hh(i, o, n, r, e[s + 3], 16, -722521979), r = this.md5_hh(r, i, o, n, e[s + 6], 23, 76029189), n = this.md5_hh(n, r, i, o, e[s + 9], 4, -640364487), o = this.md5_hh(o, n, r, i, e[s + 12], 11, -421815835), i = this.md5_hh(i, o, n, r, e[s + 15], 16, 530742520), r = this.md5_hh(r, i, o, n, e[s + 2], 23, -995338651), n = this.md5_ii(n, r, i, o, e[s + 0], 6, -198630844), o = this.md5_ii(o, n, r, i, e[s + 7], 10, 1126891415), i = this.md5_ii(i, o, n, r, e[s + 14], 15, -1416354905), r = this.md5_ii(r, i, o, n, e[s + 5], 21, -57434055), n = this.md5_ii(n, r, i, o, e[s + 12], 6, 1700485571), o = this.md5_ii(o, n, r, i, e[s + 3], 10, -1894986606), i = this.md5_ii(i, o, n, r, e[s + 10], 15, -1051523), r = this.md5_ii(r, i, o, n, e[s + 1], 21, -2054922799), n = this.md5_ii(n, r, i, o, e[s + 8], 6, 1873313359), o = this.md5_ii(o, n, r, i, e[s + 15], 10, -30611744), i = this.md5_ii(i, o, n, r, e[s + 6], 15, -1560198380), r = this.md5_ii(r, i, o, n, e[s + 13], 21, 1309151649), n = this.md5_ii(n, r, i, o, e[s + 4], 6, -145523070), o = this.md5_ii(o, n, r, i, e[s + 11], 10, -1120210379), i = this.md5_ii(i, o, n, r, e[s + 2], 15, 718787259), r = this.md5_ii(r, i, o, n, e[s + 9], 21, -343485551), n = this.safe_add(n, a), r = this.safe_add(r, u), i = this.safe_add(i, c), o = this.safe_add(o, l)
            }
            return Array(n, r, i, o)
        }, r.prototype.md5_cmn = function(e, t, n, r, i, o) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(r, o)), i), n)
        }, r.prototype.md5_ff = function(e, t, n, r, i, o, s) {
            return this.md5_cmn(t & n | ~t & r, e, t, i, o, s)
        }, r.prototype.md5_gg = function(e, t, n, r, i, o, s) {
            return this.md5_cmn(t & r | n & ~r, e, t, i, o, s)
        }, r.prototype.md5_hh = function(e, t, n, r, i, o, s) {
            return this.md5_cmn(t ^ n ^ r, e, t, i, o, s)
        }, r.prototype.md5_ii = function(e, t, n, r, i, o, s) {
            return this.md5_cmn(n ^ (t | ~r), e, t, i, o, s)
        }, r.prototype.safe_add = function(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }, r.prototype.bit_rol = function(e, t) {
            return e << t | e >>> 32 - t
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LoginRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(117),
            o = n(2),
            s = n(1),
            a = n(8);
        var u = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var s = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o.Requests.Login));
                return s._userName = e, s._password = n, s._params = r, s._zoneName = i, Object.seal(s), s
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.BaseRequest), r(t, null, [{
                key: "KEY_ZONE_NAME",
                get: function() {
                    return "zn"
                }
            }, {
                key: "KEY_USER_NAME",
                get: function() {
                    return "un"
                }
            }, {
                key: "KEY_PASSWORD",
                get: function() {
                    return "pw"
                }
            }, {
                key: "KEY_PARAMS",
                get: function() {
                    return "p"
                }
            }, {
                key: "KEY_PRIVILEGE_ID",
                get: function() {
                    return "pi"
                }
            }, {
                key: "KEY_ID",
                get: function() {
                    return "id"
                }
            }, {
                key: "KEY_ROOMLIST",
                get: function() {
                    return "rl"
                }
            }, {
                key: "KEY_RECONNECTION_SECONDS",
                get: function() {
                    return "rs"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    if (null != e.mySelf) throw new s.SFSValidationError("LoginRequest error", ["You are already logged in; logout before attempting a new login"]);
                    var t = [],
                        n = null != e.config && null != e.config.zone ? e.config.zone : null;
                    if (null != this._zoneName && (n = this._zoneName), null == n || 0 === n.length ? t.push("Missing Zone name") : this._zoneName = n, null == this._params || this._params instanceof a.SFSObject || t.push("Custom parameters must be passed in a SFSObject"), t.length > 0) throw new s.SFSValidationError("LoginRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    null == this._userName && (this._userName = ""), null == this._password && (this._password = ""), this._reqObj.putUtfString(t.KEY_ZONE_NAME, this._zoneName), this._reqObj.putUtfString(t.KEY_USER_NAME, this._userName), this._reqObj.putUtfString(t.KEY_PASSWORD, this._password.length > 0 ? (new i.MD5).hex_md5(e.sessionToken + this._password) : ""), null != this._params && this._reqObj.putSFSObject(t.KEY_PARAMS, this._params)
                }
            }]), t
        }();
        t.LoginRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(t) {
                    i(this, e), this._sfs = t, this._usersById = new Map, this._usersByName = new Map
                }
                return r(e, [{
                    key: "containsUserName",
                    value: function(e) {
                        return this._usersByName.has(e)
                    }
                }, {
                    key: "containsUserId",
                    value: function(e) {
                        return this._usersById.has(e)
                    }
                }, {
                    key: "containsUser",
                    value: function(e) {
                        return this._usersById.has(e.id)
                    }
                }, {
                    key: "getUserById",
                    value: function(e) {
                        return this._usersById.get(e)
                    }
                }, {
                    key: "getUserByName",
                    value: function(e) {
                        return this._usersByName.get(e)
                    }
                }, {
                    key: "getUserCount",
                    value: function() {
                        return this._usersById.size
                    }
                }, {
                    key: "getUserList",
                    value: function() {
                        return Array.from(this._usersById.values())
                    }
                }, {
                    key: "_addUser",
                    value: function(e) {
                        this.__addUser(e)
                    }
                }, {
                    key: "__addUser",
                    value: function(e) {
                        this._usersByName.set(e.name, e), this._usersById.set(e.id, e)
                    }
                }, {
                    key: "_removeUser",
                    value: function(e) {
                        this._usersById.delete(e.id), this._usersByName.delete(e.name)
                    }
                }, {
                    key: "_clearAll",
                    value: function() {
                        this._usersById.clear(), this._usersByName.clear()
                    }
                }]), e
            }(),
            s = function(e) {
                function t(e) {
                    i(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n._roomRefCount = new Map, Object.freeze(n), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o), r(t, [{
                    key: "_addUser",
                    value: function(e) {
                        this._roomRefCount.has(e) ? this._roomRefCount.set(e, this._roomRefCount.get(e) + 1) : this._roomRefCount.set(e, 1), this.__addUser(e)
                    }
                }, {
                    key: "_removeUser",
                    value: function(e) {
                        this._removeUserReference(e, !1)
                    }
                }, {
                    key: "_removeUserReference",
                    value: function(e, n) {
                        var r = this._roomRefCount.get(e);
                        r < 1 && void 0 != this._sfs ? this._sfs.logger.warn("GlobalUserManager RefCount is already at zero. User: " + e) : (this._roomRefCount.set(e, this._roomRefCount.get(e) - 1), (0 === r || n) && (function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r)
                            }
                            if ("value" in i) return i.value;
                            var s = i.get;
                            return void 0 !== s ? s.call(r) : void 0
                        }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeUser", this).call(this, e), this._roomRefCount.delete(e)))
                    }
                }]), t
            }();
        t.SFSUserManager = o, t.GlobalUserManager = s
    }, function(e, t, n) {
        (function(e) {
            var n, r = function(e, t, n) {
                this._byteOffset = t || 0, e instanceof ArrayBuffer ? this.buffer = e : "object" == typeof e ? (this.dataView = e, t && (this._byteOffset += t)) : this.buffer = new ArrayBuffer(e || 1), this.position = 0, this.endianness = null == n ? r.LITTLE_ENDIAN : n
            };
            r.prototype = {}, void 0 === Uint8Array.prototype.BYTES_PER_ELEMENT && (Uint8Array.prototype.BYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT, Int8Array.prototype.BYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT, Uint8ClampedArray.prototype.BYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT, Uint16Array.prototype.BYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT, Int16Array.prototype.BYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT, Uint32Array.prototype.BYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT, Int32Array.prototype.BYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT, Float64Array.prototype.BYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT), r.prototype.save = function(e) {
                var t = new Blob(this.buffer),
                    n = window.webkitURL || window.URL;
                if (!n || !n.createObjectURL) throw "DataStream.save: Can't create object URL.";
                var r = n.createObjectURL(t),
                    i = document.createElement("a");
                i.setAttribute("href", r), i.setAttribute("download", e), i.click(), n.revokeObjectURL(r)
            }, r.BIG_ENDIAN = !1, r.LITTLE_ENDIAN = !0, r.prototype._dynamicSize = !0, Object.defineProperty(r.prototype, "dynamicSize", {
                get: function() {
                    return this._dynamicSize
                },
                set: function(e) {
                    e || this._trimAlloc(), this._dynamicSize = e
                }
            }), r.prototype._byteLength = 0, Object.defineProperty(r.prototype, "byteLength", {
                get: function() {
                    return this._byteLength - this._byteOffset
                }
            }), Object.defineProperty(r.prototype, "buffer", {
                get: function() {
                    return this._trimAlloc(), this._buffer
                },
                set: function(e) {
                    this._buffer = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
                }
            }), Object.defineProperty(r.prototype, "byteOffset", {
                get: function() {
                    return this._byteOffset
                },
                set: function(e) {
                    this._byteOffset = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
                }
            }), Object.defineProperty(r.prototype, "dataView", {
                get: function() {
                    return this._dataView
                },
                set: function(e) {
                    this._byteOffset = e.byteOffset, this._buffer = e.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + e.byteLength
                }
            }), r.prototype._realloc = function(e) {
                if (this._dynamicSize) {
                    var t = this._byteOffset + this.position + e,
                        n = this._buffer.byteLength;
                    if (t <= n) t > this._byteLength && (this._byteLength = t);
                    else {
                        for (n < 1 && (n = 1); t > n;) n *= 2;
                        var r = new ArrayBuffer(n),
                            i = new Uint8Array(this._buffer);
                        new Uint8Array(r, 0, i.length).set(i), this.buffer = r, this._byteLength = t
                    }
                }
            }, r.prototype._trimAlloc = function() {
                if (this._byteLength != this._buffer.byteLength) {
                    var e = new ArrayBuffer(this._byteLength),
                        t = new Uint8Array(e),
                        n = new Uint8Array(this._buffer, 0, t.length);
                    t.set(n), this.buffer = e
                }
            }, r.prototype.seek = function(e) {
                var t = Math.max(0, Math.min(this.byteLength, e));
                this.position = isNaN(t) || !isFinite(t) ? 0 : t
            }, r.prototype.isEof = function() {
                return this.position >= this.byteLength
            }, r.prototype.mapInt32Array = function(e, t) {
                this._realloc(4 * e);
                var n = new Int32Array(this._buffer, this.byteOffset + this.position, e);
                return r.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n
            }, r.prototype.mapInt16Array = function(e, t) {
                this._realloc(2 * e);
                var n = new Int16Array(this._buffer, this.byteOffset + this.position, e);
                return r.arrayToNative(n, null == t ? this.endianness : t), this.position += 2 * e, n
            }, r.prototype.mapInt8Array = function(e) {
                this._realloc(1 * e);
                var t = new Int8Array(this._buffer, this.byteOffset + this.position, e);
                return this.position += 1 * e, t
            }, r.prototype.mapUint32Array = function(e, t) {
                this._realloc(4 * e);
                var n = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
                return r.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n
            }, r.prototype.mapUint16Array = function(e, t) {
                this._realloc(2 * e);
                var n = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
                return r.arrayToNative(n, null == t ? this.endianness : t), this.position += 2 * e, n
            }, r.prototype.mapUint8Array = function(e) {
                this._realloc(1 * e);
                var t = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
                return this.position += 1 * e, t
            }, r.prototype.mapFloat64Array = function(e, t) {
                this._realloc(8 * e);
                var n = new Float64Array(this._buffer, this.byteOffset + this.position, e);
                return r.arrayToNative(n, null == t ? this.endianness : t), this.position += 8 * e, n
            }, r.prototype.mapFloat32Array = function(e, t) {
                this._realloc(4 * e);
                var n = new Float32Array(this._buffer, this.byteOffset + this.position, e);
                return r.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n
            }, r.prototype.readInt32Array = function(e, t) {
                e = null == e ? this.byteLength - this.position / 4 : e;
                var n = new Int32Array(e);
                return r.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), r.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
            }, r.prototype.readInt16Array = function(e, t) {
                e = null == e ? this.byteLength - this.position / 2 : e;
                var n = new Int16Array(e);
                return r.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), r.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
            }, r.prototype.readInt8Array = function(e) {
                e = null == e ? this.byteLength - this.position : e;
                var t = new Int8Array(e);
                return r.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
            }, r.prototype.readUint32Array = function(e, t) {
                e = null == e ? this.byteLength - this.position / 4 : e;
                var n = new Uint32Array(e);
                return r.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), r.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
            }, r.prototype.readUint16Array = function(e, t) {
                e = null == e ? this.byteLength - this.position / 2 : e;
                var n = new Uint16Array(e);
                return r.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), r.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
            }, r.prototype.readUint8Array = function(e) {
                e = null == e ? this.byteLength - this.position : e;
                var t = new Uint8Array(e);
                return r.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
            }, r.prototype.readFloat64Array = function(e, t) {
                e = null == e ? this.byteLength - this.position / 8 : e;
                var n = new Float64Array(e);
                return r.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), r.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
            }, r.prototype.readFloat32Array = function(e, t) {
                e = null == e ? this.byteLength - this.position / 4 : e;
                var n = new Float32Array(e);
                return r.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), r.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n
            }, r.prototype.writeInt32Array = function(e, t) {
                if (this._realloc(4 * e.length), e instanceof Int32Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapInt32Array(e.length, t);
                else
                    for (var n = 0; n < e.length; n++) this.writeInt32(e[n], t)
            }, r.prototype.writeInt16Array = function(e, t) {
                if (this._realloc(2 * e.length), e instanceof Int16Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapInt16Array(e.length, t);
                else
                    for (var n = 0; n < e.length; n++) this.writeInt16(e[n], t)
            }, r.prototype.writeInt8Array = function(e) {
                if (this._realloc(1 * e.length), e instanceof Int8Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapInt8Array(e.length);
                else
                    for (var t = 0; t < e.length; t++) this.writeInt8(e[t])
            }, r.prototype.writeUint32Array = function(e, t) {
                if (this._realloc(4 * e.length), e instanceof Uint32Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapUint32Array(e.length, t);
                else
                    for (var n = 0; n < e.length; n++) this.writeUint32(e[n], t)
            }, r.prototype.writeUint16Array = function(e, t) {
                if (this._realloc(2 * e.length), e instanceof Uint16Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapUint16Array(e.length, t);
                else
                    for (var n = 0; n < e.length; n++) this.writeUint16(e[n], t)
            }, r.prototype.writeUint8Array = function(e) {
                if (this._realloc(1 * e.length), e instanceof Uint8Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapUint8Array(e.length);
                else
                    for (var t = 0; t < e.length; t++) this.writeUint8(e[t])
            }, r.prototype.writeFloat64Array = function(e, t) {
                if (this._realloc(8 * e.length), e instanceof Float64Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapFloat64Array(e.length, t);
                else
                    for (var n = 0; n < e.length; n++) this.writeFloat64(e[n], t)
            }, r.prototype.writeFloat32Array = function(e, t) {
                if (this._realloc(4 * e.length), e instanceof Float32Array && (this.byteOffset + this.position) % e.BYTES_PER_ELEMENT == 0) r.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, e.byteOffset, e.byteLength), this.mapFloat32Array(e.length, t);
                else
                    for (var n = 0; n < e.length; n++) this.writeFloat32(e[n], t)
            }, r.prototype.readInt32 = function(e) {
                var t = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
                return this.position += 4, t
            }, r.prototype.readInt16 = function(e) {
                var t = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
                return this.position += 2, t
            }, r.prototype.readInt8 = function() {
                var e = this._dataView.getInt8(this.position);
                return this.position += 1, e
            }, r.prototype.readUint32 = function(e) {
                var t = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
                return this.position += 4, t
            }, r.prototype.readUint16 = function(e) {
                var t = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
                return this.position += 2, t
            }, r.prototype.readUint8 = function() {
                var e = this._dataView.getUint8(this.position);
                return this.position += 1, e
            }, r.prototype.readFloat32 = function(e) {
                var t = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
                return this.position += 4, t
            }, r.prototype.readFloat64 = function(e) {
                var t = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
                return this.position += 8, t
            }, r.prototype.writeInt32 = function(e, t) {
                this._realloc(4), this._dataView.setInt32(this.position, e, null == t ? this.endianness : t), this.position += 4
            }, r.prototype.writeInt16 = function(e, t) {
                this._realloc(2), this._dataView.setInt16(this.position, e, null == t ? this.endianness : t), this.position += 2
            }, r.prototype.writeInt8 = function(e) {
                this._realloc(1), this._dataView.setInt8(this.position, e), this.position += 1
            }, r.prototype.writeUint32 = function(e, t) {
                this._realloc(4), this._dataView.setUint32(this.position, e, null == t ? this.endianness : t), this.position += 4
            }, r.prototype.writeUint16 = function(e, t) {
                this._realloc(2), this._dataView.setUint16(this.position, e, null == t ? this.endianness : t), this.position += 2
            }, r.prototype.writeUint8 = function(e) {
                this._realloc(1), this._dataView.setUint8(this.position, e), this.position += 1
            }, r.prototype.writeFloat32 = function(e, t) {
                this._realloc(4), this._dataView.setFloat32(this.position, e, null == t ? this.endianness : t), this.position += 4
            }, r.prototype.writeFloat64 = function(e, t) {
                this._realloc(8), this._dataView.setFloat64(this.position, e, null == t ? this.endianness : t), this.position += 8
            }, r.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, r.memcpy = function(e, t, n, r, i) {
                var o = new Uint8Array(e, t, i),
                    s = new Uint8Array(n, r, i);
                o.set(s)
            }, r.arrayToNative = function(e, t) {
                return t == this.endianness ? e : this.flipArrayEndianness(e)
            }, r.nativeToEndian = function(e, t) {
                return this.endianness == t ? e : this.flipArrayEndianness(e)
            }, r.flipArrayEndianness = function(e) {
                for (var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), n = 0; n < e.byteLength; n += e.BYTES_PER_ELEMENT)
                    for (var r = n + e.BYTES_PER_ELEMENT - 1, i = n; r > i; r--, i++) {
                        var o = t[i];
                        t[i] = t[r], t[r] = o
                    }
                return e
            }, r.createStringFromArray = function(e) {
                for (var t = [], n = 0; n < e.length; n += 32768) t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
                return t.join("")
            }, r.prototype.failurePosition = 0, r.prototype.readStruct = function(e) {
                for (var t, n, r = {}, i = this.position, o = 0; o < e.length; o += 2) {
                    if (t = e[o + 1], null == (n = this.readType(t, r))) return 0 == this.failurePosition && (this.failurePosition = this.position), this.position = i, null;
                    r[e[o]] = n
                }
                return r
            }, r.prototype.readUCS2String = function(e, t) {
                return r.createStringFromArray(this.readUint16Array(e, t))
            }, r.prototype.writeUCS2String = function(e, t, n) {
                null == n && (n = e.length);
                for (var r = 0; r < e.length && r < n; r++) this.writeUint16(e.charCodeAt(r), t);
                for (; r < n; r++) this.writeUint16(0)
            }, r.prototype.readString = function(e, t) {
                return null == t || "ASCII" == t ? r.createStringFromArray(this.mapUint8Array(null == e ? this.byteLength - this.position : e)) : new TextDecoder(t).decode(this.mapUint8Array(e))
            }, r.prototype.writeString = function(e, t, n) {
                if (null == t || "ASCII" == t)
                    if (null != n) {
                        var r = 0,
                            i = Math.min(e.length, n);
                        for (r = 0; r < i; r++) this.writeUint8(e.charCodeAt(r));
                        for (; r < n; r++) this.writeUint8(0)
                    } else
                        for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
                else this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, n)))
            }, r.prototype.readCString = function(e) {
                var t = this.byteLength - this.position,
                    n = new Uint8Array(this._buffer, this._byteOffset + this.position),
                    i = t;
                null != e && (i = Math.min(e, t));
                for (var o = 0; o < i && 0 != n[o]; o++);
                var s = r.createStringFromArray(this.mapUint8Array(o));
                return null != e ? this.position += i - o : o != t && (this.position += 1), s
            }, r.prototype.writeCString = function(e, t) {
                if (null != t) {
                    var n = 0,
                        r = Math.min(e.length, t);
                    for (n = 0; n < r; n++) this.writeUint8(e.charCodeAt(n));
                    for (; n < t; n++) this.writeUint8(0)
                } else {
                    for (n = 0; n < e.length; n++) this.writeUint8(e.charCodeAt(n));
                    this.writeUint8(0)
                }
            }, r.prototype.readType = function(e, t) {
                if ("function" == typeof e) return e(this, t);
                if (!("object" != typeof e || e instanceof Array)) return e.get(this, t);
                if (e instanceof Array && 3 != e.length) return this.readStruct(e, t);
                var n, i = null,
                    o = null,
                    s = "ASCII",
                    a = this.position;
                "string" == typeof e && /:/.test(e) && (e = (n = e.split(":"))[0], o = null != t[u = n[1]] ? parseInt(t[u]) : parseInt(n[1]));
                "string" == typeof e && /,/.test(e) && (e = (n = e.split(","))[0], s = parseInt(n[1]));
                switch (e) {
                    case "uint8":
                        i = this.readUint8();
                        break;
                    case "int8":
                        i = this.readInt8();
                        break;
                    case "uint16":
                        i = this.readUint16(this.endianness);
                        break;
                    case "int16":
                        i = this.readInt16(this.endianness);
                        break;
                    case "uint32":
                        i = this.readUint32(this.endianness);
                        break;
                    case "int32":
                        i = this.readInt32(this.endianness);
                        break;
                    case "float32":
                        i = this.readFloat32(this.endianness);
                        break;
                    case "float64":
                        i = this.readFloat64(this.endianness);
                        break;
                    case "uint16be":
                        i = this.readUint16(r.BIG_ENDIAN);
                        break;
                    case "int16be":
                        i = this.readInt16(r.BIG_ENDIAN);
                        break;
                    case "uint32be":
                        i = this.readUint32(r.BIG_ENDIAN);
                        break;
                    case "int32be":
                        i = this.readInt32(r.BIG_ENDIAN);
                        break;
                    case "float32be":
                        i = this.readFloat32(r.BIG_ENDIAN);
                        break;
                    case "float64be":
                        i = this.readFloat64(r.BIG_ENDIAN);
                        break;
                    case "uint16le":
                        i = this.readUint16(r.LITTLE_ENDIAN);
                        break;
                    case "int16le":
                        i = this.readInt16(r.LITTLE_ENDIAN);
                        break;
                    case "uint32le":
                        i = this.readUint32(r.LITTLE_ENDIAN);
                        break;
                    case "int32le":
                        i = this.readInt32(r.LITTLE_ENDIAN);
                        break;
                    case "float32le":
                        i = this.readFloat32(r.LITTLE_ENDIAN);
                        break;
                    case "float64le":
                        i = this.readFloat64(r.LITTLE_ENDIAN);
                        break;
                    case "cstring":
                        i = this.readCString(o);
                        break;
                    case "string":
                        i = this.readString(o, s);
                        break;
                    case "u16string":
                        i = this.readUCS2String(o, this.endianness);
                        break;
                    case "u16stringle":
                        i = this.readUCS2String(o, r.LITTLE_ENDIAN);
                        break;
                    case "u16stringbe":
                        i = this.readUCS2String(o, r.BIG_ENDIAN);
                        break;
                    default:
                        if (3 == e.length) {
                            var u, c = e[1],
                                l = 0;
                            if (l = "function" == typeof(u = e[2]) ? u(t, this, e) : "string" == typeof u && null != t[u] ? parseInt(t[u]) : parseInt(u), "string" == typeof c) {
                                var f = c.replace(/(le|be)$/, ""),
                                    h = null;
                                switch (/le$/.test(c) ? h = r.LITTLE_ENDIAN : /be$/.test(c) && (h = r.BIG_ENDIAN), "*" == u && (l = null), f) {
                                    case "uint8":
                                        i = this.readUint8Array(l);
                                        break;
                                    case "uint16":
                                        i = this.readUint16Array(l, h);
                                        break;
                                    case "uint32":
                                        i = this.readUint32Array(l, h);
                                        break;
                                    case "int8":
                                        i = this.readInt8Array(l);
                                        break;
                                    case "int16":
                                        i = this.readInt16Array(l, h);
                                        break;
                                    case "int32":
                                        i = this.readInt32Array(l, h);
                                        break;
                                    case "float32":
                                        i = this.readFloat32Array(l, h);
                                        break;
                                    case "float64":
                                        i = this.readFloat64Array(l, h);
                                        break;
                                    case "cstring":
                                    case "utf16string":
                                    case "string":
                                        if (null == l)
                                            for (i = []; !this.isEof();) {
                                                if (null == (d = this.readType(c, t))) break;
                                                i.push(d)
                                            } else {
                                                i = new Array(l);
                                                for (var _ = 0; _ < l; _++) i[_] = this.readType(c, t)
                                            }
                                }
                            } else if ("*" == u)
                                for (i = [], this.buffer;;) {
                                    var y = this.position;
                                    try {
                                        var p = this.readType(c, t);
                                        if (null == p) {
                                            this.position = y;
                                            break
                                        }
                                        i.push(p)
                                    } catch (e) {
                                        this.position = y;
                                        break
                                    }
                                } else {
                                    i = new Array(l);
                                    for (_ = 0; _ < l; _++) {
                                        var d;
                                        if (null == (d = this.readType(c, t))) return null;
                                        i[_] = d
                                    }
                                }
                            break
                        }
                }
                return null != o && (this.position = a + o), i
            }, r.prototype.writeStruct = function(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n + 1];
                    this.writeType(r, t[e[n]], t)
                }
            }, r.prototype.writeType = function(e, t, n) {
                if ("function" == typeof e) return e(this, t);
                if ("object" == typeof e && !(e instanceof Array)) return e.set(this, t, n);
                var i, o = null,
                    s = "ASCII",
                    a = this.position;
                "string" == typeof e && /:/.test(e) && (e = (i = e.split(":"))[0], o = parseInt(i[1]));
                "string" == typeof e && /,/.test(e) && (e = (i = e.split(","))[0], s = parseInt(i[1]));
                switch (e) {
                    case "uint8":
                        this.writeUint8(t);
                        break;
                    case "int8":
                        this.writeInt8(t);
                        break;
                    case "uint16":
                        this.writeUint16(t, this.endianness);
                        break;
                    case "int16":
                        this.writeInt16(t, this.endianness);
                        break;
                    case "uint32":
                        this.writeUint32(t, this.endianness);
                        break;
                    case "int32":
                        this.writeInt32(t, this.endianness);
                        break;
                    case "float32":
                        this.writeFloat32(t, this.endianness);
                        break;
                    case "float64":
                        this.writeFloat64(t, this.endianness);
                        break;
                    case "uint16be":
                        this.writeUint16(t, r.BIG_ENDIAN);
                        break;
                    case "int16be":
                        this.writeInt16(t, r.BIG_ENDIAN);
                        break;
                    case "uint32be":
                        this.writeUint32(t, r.BIG_ENDIAN);
                        break;
                    case "int32be":
                        this.writeInt32(t, r.BIG_ENDIAN);
                        break;
                    case "float32be":
                        this.writeFloat32(t, r.BIG_ENDIAN);
                        break;
                    case "float64be":
                        this.writeFloat64(t, r.BIG_ENDIAN);
                        break;
                    case "uint16le":
                        this.writeUint16(t, r.LITTLE_ENDIAN);
                        break;
                    case "int16le":
                        this.writeInt16(t, r.LITTLE_ENDIAN);
                        break;
                    case "uint32le":
                        this.writeUint32(t, r.LITTLE_ENDIAN);
                        break;
                    case "int32le":
                        this.writeInt32(t, r.LITTLE_ENDIAN);
                        break;
                    case "float32le":
                        this.writeFloat32(t, r.LITTLE_ENDIAN);
                        break;
                    case "float64le":
                        this.writeFloat64(t, r.LITTLE_ENDIAN);
                        break;
                    case "cstring":
                        this.writeCString(t, o);
                        break;
                    case "string":
                        this.writeString(t, s, o);
                        break;
                    case "u16string":
                        this.writeUCS2String(t, this.endianness, o);
                        break;
                    case "u16stringle":
                        this.writeUCS2String(t, r.LITTLE_ENDIAN, o);
                        break;
                    case "u16stringbe":
                        this.writeUCS2String(t, r.BIG_ENDIAN, o);
                        break;
                    default:
                        if (3 == e.length) {
                            for (var u = e[1], c = 0; c < t.length; c++) this.writeType(u, t[c]);
                            break
                        }
                        this.writeStruct(e, t)
                }
                null != o && (this.position = a, this._realloc(o), this.position = a + o)
            }, void 0 === (n = function() {
                return r
            }.apply(t, [])) || (e.exports = n), "object" == typeof e && e && e.exports && (e.exports = r)
        }).call(this, n(171)(e))
    }, function(e, t, n) {
        var r = n(24),
            i = n(12);
        e.exports = function(e) {
            if (void 0 === e) return 0;
            var t = r(e),
                n = i(t);
            if (t !== n) throw RangeError("Wrong length!");
            return n
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(40),
            i = n(29).getWeak,
            o = n(5),
            s = n(4),
            a = n(41),
            u = n(61),
            c = n(19),
            l = n(16),
            f = n(39),
            h = c(5),
            _ = c(6),
            y = 0,
            p = function(e) {
                return e._l || (e._l = new d)
            },
            d = function() {
                this.a = []
            },
            g = function(e, t) {
                return h(e.a, function(e) {
                    return e[0] === t
                })
            };
        d.prototype = {
            get: function(e) {
                var t = g(this, e);
                if (t) return t[1]
            },
            has: function(e) {
                return !!g(this, e)
            },
            set: function(e, t) {
                var n = g(this, e);
                n ? n[1] = t : this.a.push([e, t])
            },
            delete: function(e) {
                var t = _(this.a, function(t) {
                    return t[0] === e
                });
                return ~t && this.a.splice(t, 1), !!~t
            }
        }, e.exports = {
            getConstructor: function(e, t, n, o) {
                var c = e(function(e, r) {
                    a(e, c, t, "_i"), e._t = t, e._i = y++, e._l = void 0, void 0 != r && u(r, n, e[o], e)
                });
                return r(c.prototype, {
                    delete: function(e) {
                        if (!s(e)) return !1;
                        var n = i(e);
                        return !0 === n ? p(f(this, t)).delete(e) : n && l(n, this._i) && delete n[this._i]
                    },
                    has: function(e) {
                        if (!s(e)) return !1;
                        var n = i(e);
                        return !0 === n ? p(f(this, t)).has(e) : n && l(n, this._i)
                    }
                }), c
            },
            def: function(e, t, n) {
                var r = i(o(t), !0);
                return !0 === r ? p(e).set(t, n) : r[e._i] = n, e
            },
            ufstore: p
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(9).f,
            i = n(33),
            o = n(40),
            s = n(27),
            a = n(41),
            u = n(61),
            c = n(83),
            l = n(127),
            f = n(42),
            h = n(11),
            _ = n(29).fastKey,
            y = n(39),
            p = h ? "_s" : "size",
            d = function(e, t) {
                var n, r = _(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t) return n
            };
        e.exports = {
            getConstructor: function(e, t, n, c) {
                var l = e(function(e, r) {
                    a(e, l, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[p] = 0, void 0 != r && u(r, n, e[c], e)
                });
                return o(l.prototype, {
                    clear: function() {
                        for (var e = y(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                        e._f = e._l = void 0, e[p] = 0
                    },
                    delete: function(e) {
                        var n = y(this, t),
                            r = d(n, e);
                        if (r) {
                            var i = r.n,
                                o = r.p;
                            delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[p]--
                        }
                        return !!r
                    },
                    forEach: function(e) {
                        y(this, t);
                        for (var n, r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(e) {
                        return !!d(y(this, t), e)
                    }
                }), h && r(l.prototype, "size", {
                    get: function() {
                        return y(this, t)[p]
                    }
                }), l
            },
            def: function(e, t, n) {
                var r, i, o = d(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = _(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[p]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: d,
            setStrong: function(e, t, n) {
                c(e, t, function(e, n) {
                    this._t = y(e, t), this._k = n, this._l = void 0
                }, function() {
                    for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                    return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, l(1))
                }, n ? "entries" : "values", !n, !0), f(t)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(26);
        e.exports.f = function(e) {
            return new function(e) {
                var t, n;
                this.promise = new e(function(e, r) {
                    if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e, n = r
                }), this.resolve = r(t), this.reject = r(n)
            }(e)
        }
    }, function(e, t, n) {
        var r, i, o, s = n(27),
            a = n(141),
            u = n(89),
            c = n(95),
            l = n(6),
            f = l.process,
            h = l.setImmediate,
            _ = l.clearImmediate,
            y = l.MessageChannel,
            p = l.Dispatch,
            d = 0,
            g = {},
            v = function() {
                var e = +this;
                if (g.hasOwnProperty(e)) {
                    var t = g[e];
                    delete g[e], t()
                }
            },
            b = function(e) {
                v.call(e.data)
            };
        h && _ || (h = function(e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return g[++d] = function() {
                a("function" == typeof e ? e : Function(e), t)
            }, r(d), d
        }, _ = function(e) {
            delete g[e]
        }, "process" == n(25)(f) ? r = function(e) {
            f.nextTick(s(v, e, 1))
        } : p && p.now ? r = function(e) {
            p.now(s(v, e, 1))
        } : y ? (o = (i = new y).port2, i.port1.onmessage = b, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
            l.postMessage(e + "", "*")
        }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this), v.call(e)
            }
        } : function(e) {
            setTimeout(s(v, e, 1), 0)
        }), e.exports = {
            set: h,
            clear: _
        }
    }, function(e, t, n) {
        n(11) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(76)
        })
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(52),
            i = n(127),
            o = n(53),
            s = n(21);
        e.exports = n(83)(Array, "Array", function(e, t) {
            this._t = s(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(34),
            o = n(12);
        e.exports = [].copyWithin || function(e, t) {
            var n = r(this),
                s = o(n.length),
                a = i(e, s),
                u = i(t, s),
                c = arguments.length > 2 ? arguments[2] : void 0,
                l = Math.min((void 0 === c ? s : i(c, s)) - u, s - a),
                f = 1;
            for (u < a && a < u + l && (f = -1, u += l - 1, a += l - 1); l-- > 0;) u in n ? n[a] = n[u] : delete n[a], a += f, u += f;
            return n
        }
    }, function(e, t, n) {
        var r = n(26),
            i = n(14),
            o = n(54),
            s = n(12);
        e.exports = function(e, t, n, a, u) {
            r(t);
            var c = i(e),
                l = o(c),
                f = s(c.length),
                h = u ? f - 1 : 0,
                _ = u ? -1 : 1;
            if (n < 2)
                for (;;) {
                    if (h in l) {
                        a = l[h], h += _;
                        break
                    }
                    if (h += _, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; u ? h >= 0 : f > h; h += _) h in l && (a = t(a, l[h], h, c));
            return a
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(9),
            i = n(36);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    }, function(e, t, n) {
        var r = n(5);
        e.exports = function(e, t, n, i) {
            try {
                return i ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                var o = e.return;
                throw void 0 !== o && r(o.call(e)), t
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(33),
            i = n(36),
            o = n(44),
            s = {};
        n(18)(s, n(7)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(s, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    }, function(e, t, n) {
        var r = n(24),
            i = n(28);
        e.exports = function(e) {
            return function(t, n) {
                var o, s, a = String(i(t)),
                    u = r(n),
                    c = a.length;
                return u < 0 || u >= c ? e ? "" : void 0 : (o = a.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : o : e ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function(e, t) {
        e.exports = Math.log1p || function(e) {
            return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
        }
    }, function(e, t, n) {
        var r = n(4),
            i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(24),
            i = n(28);
        e.exports = function(e) {
            var t = String(i(this)),
                n = "",
                o = r(e);
            if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
            for (; o > 0;
                (o >>>= 1) && (t += t)) 1 & o && (n += t);
            return n
        }
    }, function(e, t, n) {
        var r = n(25);
        e.exports = function(e, t) {
            if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
            return +e
        }
    }, function(e, t, n) {
        var r = n(6).parseFloat,
            i = n(64).trim;
        e.exports = 1 / r(n(87) + "-0") != -1 / 0 ? function(e) {
            var t = i(String(e), 3),
                n = r(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n
        } : r
    }, function(e, t, n) {
        var r = n(6).parseInt,
            i = n(64).trim,
            o = n(87),
            s = /^[-+]?0[xX]/;
        e.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(e, t) {
            var n = i(String(e), 3);
            return r(n, t >>> 0 || (s.test(n) ? 16 : 10))
        } : r
    }, function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(26),
            i = n(4),
            o = n(141),
            s = [].slice,
            a = {};
        e.exports = Function.bind || function(e) {
            var t = r(this),
                n = s.call(arguments, 1),
                u = function() {
                    var r = n.concat(s.call(arguments));
                    return this instanceof u ? function(e, t, n) {
                        if (!(t in a)) {
                            for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                            a[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                        }
                        return a[t](e, n)
                    }(t, r.length, r) : o(t, r, e)
                };
            return i(t.prototype) && (u.prototype = t.prototype), u
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(55),
            i = n(67),
            o = n(66),
            s = n(14),
            a = n(54),
            u = Object.assign;
        e.exports = !u || n(3)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
                t[e] = e
            }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
        }) ? function(e, t) {
            for (var n = s(e), u = arguments.length, c = 1, l = i.f, f = o.f; u > c;)
                for (var h, _ = a(arguments[c++]), y = l ? r(_).concat(l(_)) : r(_), p = y.length, d = 0; p > d;) f.call(_, h = y[d++]) && (n[h] = _[h]);
            return n
        } : u
    }, function(e, t, n) {
        var r = n(21),
            i = n(32).f,
            o = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return s && "[object Window]" == o.call(e) ? function(e) {
                try {
                    return i(e)
                } catch (e) {
                    return s.slice()
                }
            }(e) : i(r(e))
        }
    }, function(e, t, n) {
        var r = n(9),
            i = n(5),
            o = n(55);
        e.exports = n(11) ? Object.defineProperties : function(e, t) {
            i(e);
            for (var n, s = o(t), a = s.length, u = 0; a > u;) r.f(e, n = s[u++], t[n]);
            return e
        }
    }, function(e, t, n) {
        var r = n(16),
            i = n(21),
            o = n(93)(!1),
            s = n(92)("IE_PROTO");
        e.exports = function(e, t) {
            var n, a = i(e),
                u = 0,
                c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; t.length > u;) r(a, n = t[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function(e, t, n) {
        t.f = n(7)
    }, function(e, t, n) {
        e.exports = !n(11) && !n(3)(function() {
            return 7 != Object.defineProperty(n(95)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        "use strict";
        Number.MAX_SAFE_INTEGER || (Number.MAX_SAFE_INTEGER = 9007199254740991), Number.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, Number.isSafeInteger = Number.isSafeInteger || function(e) {
            return Number.isInteger(e) && Math.abs(e) <= Number.MAX_SAFE_INTEGER
        }, Number.isFinite = Number.isFinite || function(e) {
            return "number" == typeof e && isFinite(e)
        }, Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(e) {
                if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var t = Object(this), n = t.length >>> 0, r = arguments[1], i = 0; i !== n; i++)
                    if (e.call(r, this[i], i, t)) return this[i]
            }
        })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BuddyMessageRequest = void 0;
        var r = n(69),
            i = n(1),
            o = n(57);
        var s = function(e) {
            function t(e, n) {
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                if (null != n && !(n instanceof o.SFSBuddy)) throw new i.SFSError("Target buddy must be an instance of SFSBuddy class");
                return a._type = r.GenericMessageType.BUDDY_MSG, a._message = e, a._recipient = null != n ? n.id : -1, a._params = s, Object.seal(a), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.GenericMessageRequest), t
        }();
        t.BuddyMessageRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.QuickJoinGameRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10),
            a = n(45);
        var u = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.QuickJoinGame));
                return o._matchExpression = e, o._whereToSearch = n, o._roomToLeave = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM_LIST",
                get: function() {
                    return "rl"
                }
            }, {
                key: "KEY_GROUP_LIST",
                get: function() {
                    return "gl"
                }
            }, {
                key: "KEY_ROOM_TO_LEAVE",
                get: function() {
                    return "tl"
                }
            }, {
                key: "KEY_MATCH_EXPRESSION",
                get: function() {
                    return "me"
                }
            }, {
                key: "MAX_ROOMS",
                get: function() {
                    return 32
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var n = [];
                    if (null == this._matchExpression || this._matchExpression instanceof a.MatchExpression || n.push("Match expression must be an instance of MatchExpression class"), null == this._whereToSearch || this._whereToSearch.length < 1 ? n.push("Missing list of Rooms or Group names where to search the game to join") : this._whereToSearch.length > t.MAX_ROOMS && n.push("Too many Rooms specified in list where to search the game to join; client limit is: " + t.MAX_ROOMS), null == this._roomToLeave || this._roomToLeave instanceof s.SFSRoom || n.push("Room to leave must be an instance of SFSRoom class"), n.length > 0) throw new o.SFSValidationError("CreateSFSGameRequest Error", n)
                }
            }, {
                key: "execute",
                value: function(e) {
                    if ("string" == typeof this._whereToSearch[0]) this._reqObj.putUtfStringArray(t.KEY_GROUP_LIST, this._whereToSearch);
                    else {
                        if (!(this._whereToSearch[0] instanceof s.SFSRoom)) throw new o.SFSError("Invalid type in whereToSearch parameter");
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var u, c = this._whereToSearch[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                                var l = u.value;
                                l instanceof s.SFSRoom && n.push(l.id)
                            }
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !r && c.return && c.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        this._reqObj.putIntArray(t.KEY_ROOM_LIST, n)
                    }
                    null != this._roomToLeave && this._reqObj.putInt(t.KEY_ROOM_TO_LEAVE, this._roomToLeave.id), null != this._matchExpression && this._reqObj.putSFSArray(t.KEY_MATCH_EXPRESSION, this._matchExpression.toSFSArray())
                }
            }]), t
        }();
        t.QuickJoinGameRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.JoinRoomInvitationRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10),
            a = n(8);
        var u = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                    s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.JoinRoomInvite));
                return a._targetRoom = e, a._invitedUserNames = n, a._params = r, a._expirySeconds = o, a._asSpectator = s, Object.seal(a), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM_ID",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_EXPIRY_SECONDS",
                get: function() {
                    return "es"
                }
            }, {
                key: "KEY_INVITED_NAMES",
                get: function() {
                    return "in"
                }
            }, {
                key: "KEY_AS_SPECT",
                get: function() {
                    return "as"
                }
            }, {
                key: "KEY_OPTIONAL_PARAMS",
                get: function() {
                    return "op"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null == this._targetRoom && t.push("Missing target room"), null == this._targetRoom || this._targetRoom instanceof s.SFSRoom || t.push("Target room must be an instance of SFSRoom class"), null == this._invitedUserNames ? t.push("No invitees provided") : this._invitedUserNames instanceof Array ? this._invitedUserNames.length < 1 && t.push("No invitees provided") : t.push("Invited user names must be passed in an array"), null == this._params || this._params instanceof a.SFSObject || t.push("Custom invitation parameters must be set in a SFSObject class instance"), t.length > 0) throw new o.SFSValidationError("JoinRoomInvitationRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_ROOM_ID, this._targetRoom.id), this._reqObj.putUtfStringArray(t.KEY_INVITED_NAMES, this._invitedUserNames), this._reqObj.putInt(t.KEY_EXPIRY_SECONDS, this._expirySeconds), this._reqObj.putBool(t.KEY_AS_SPECT, this._asSpectator), null != this._params && this._reqObj.putSFSObject(t.KEY_OPTIONAL_PARAMS, this._params)
                }
            }]), t
        }();
        t.JoinRoomInvitationRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InvitationReplyRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(8),
            a = n(71);
        var u = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.InvitationReply));
                return o._invitation = e, o._reply = n, o._params = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_INVITATION_ID",
                get: function() {
                    return "i"
                }
            }, {
                key: "KEY_INVITATION_REPLY",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_INVITATION_PARAMS",
                get: function() {
                    return "p"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (null == this._invitation ? t.push("Missing invitation object") : this._invitation instanceof a.SFSInvitation || t.push("Invitation object must be an instance of Invitation class"), null == this._params || this._params instanceof s.SFSObject || t.push("Custom invitation parameters must be set in a SFSObject class instance"), t.length > 0) throw new o.SFSValidationError("InvitationReplyRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_INVITATION_ID, this._invitation.id), this._reqObj.putByte(t.KEY_INVITATION_REPLY, this._reply), null != this._params && this._reqObj.putSFSObject(t.KEY_INVITATION_PARAMS, this._params)
                }
            }]), t
        }();
        t.InvitationReplyRequest = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateSFSGameRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(56),
            a = n(70),
            u = n(68),
            c = n(47),
            l = n(57),
            f = n(8),
            h = n(45);
        var _ = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.CreateSFSGame));
                return n._settings = e, n._createRoomRequest = new a.CreateRoomRequest(e, !1, null), Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_IS_PUBLIC",
                get: function() {
                    return "gip"
                }
            }, {
                key: "KEY_MIN_PLAYERS",
                get: function() {
                    return "gmp"
                }
            }, {
                key: "KEY_INVITED_PLAYERS",
                get: function() {
                    return "ginp"
                }
            }, {
                key: "KEY_SEARCHABLE_ROOMS",
                get: function() {
                    return "gsr"
                }
            }, {
                key: "KEY_PLAYER_MATCH_EXP",
                get: function() {
                    return "gpme"
                }
            }, {
                key: "KEY_SPECTATOR_MATCH_EXP",
                get: function() {
                    return "gsme"
                }
            }, {
                key: "KEY_INVITATION_EXPIRY",
                get: function() {
                    return "gie"
                }
            }, {
                key: "KEY_LEAVE_ROOM",
                get: function() {
                    return "glr"
                }
            }, {
                key: "KEY_NOTIFY_GAME_STARTED",
                get: function() {
                    return "gns"
                }
            }, {
                key: "KEY_INVITATION_PARAMS",
                get: function() {
                    return "ip"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    if (!(this._settings instanceof s.SFSGameSettings)) throw new o.SFSValidationError("CreateSFSGameRequest Error", ["Room configuration must be an instance of SFSGameSettings class"]);
                    var t = [];
                    try {
                        this._createRoomRequest.validate(e)
                    } catch (e) {
                        t = e.getErrors()
                    }
                    if (this._settings.minPlayersToStartGame > this._settings.maxUsers && t.push("Minimum number of players to start the game can't be greater than the Room's maximum number of users"), (this._settings.invitationExpiryTime < u.InviteUsersRequest.MIN_EXPIRY_TIME || this._settings.invitationExpiryTime > u.InviteUsersRequest.MAX_EXPIRY_TIME) && t.push("Invitation expiration time value is out of range (min: " + u.InviteUsersRequest.MIN_EXPIRY_TIME + "; max: " + u.InviteUsersRequest.MAX_EXPIRY_TIME + ")"), null != this._settings.invitedPlayers && (this._settings.invitedPlayers instanceof Array ? (this._settings.invitedPlayers.length > u.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE && t.push("Can't invite more than " + u.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE + " players from client side"), this._settings.invitedPlayers.every(function(e) {
                            return e instanceof c.SFSUser || e instanceof l.SFSBuddy
                        }) || t.push("Each invited player must be an instance of SFSUser or SFSBuddy classes")) : t.push("Invited players must be passed in an array")), null == this._settings.playerMatchExpression || this._settings.playerMatchExpression instanceof h.MatchExpression || t.push("Player match expression must be an instance of MatchExpression class"), null == this._settings.spectatorMatchExpression || this._settings.spectatorMatchExpression instanceof h.MatchExpression || t.push("Spectator match expression must be an instance of MatchExpression class"), null == this._settings.invitationParams || this._settings.invitationParams instanceof f.SFSObject || t.push("Custom invitation parameters must be set in a SFSObject class instance"), t.length > 0) throw new o.SFSValidationError("CreateSFSGameRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    if (this._createRoomRequest.execute(e), this._reqObj = this._createRoomRequest._reqObj, this._reqObj.putBool(t.KEY_IS_PUBLIC, this._settings.isPublic), this._reqObj.putShort(t.KEY_MIN_PLAYERS, this._settings.minPlayersToStartGame), this._reqObj.putShort(t.KEY_INVITATION_EXPIRY, this._settings.invitationExpiryTime), this._reqObj.putBool(t.KEY_LEAVE_ROOM, this._settings.leaveLastJoinedRoom), this._reqObj.putBool(t.KEY_NOTIFY_GAME_STARTED, this._settings.notifyGameStarted), null != this._settings.playerMatchExpression && this._reqObj.putSFSArray(t.KEY_PLAYER_MATCH_EXP, this._settings.playerMatchExpression.toSFSArray()), null != this._settings.spectatorMatchExpression && this._reqObj.putSFSArray(t.KEY_SPECTATOR_MATCH_EXP, this._settings.spectatorMatchExpression.toSFSArray()), null != this._settings.invitedPlayers) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var s, a = this._settings.invitedPlayers[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                                var u = s.value;
                                n.push(u.id)
                            }
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && a.return && a.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        this._reqObj.putIntArray(t.KEY_INVITED_PLAYERS, n)
                    }
                    null != this._settings.searchableRooms && this._reqObj.putUtfStringArray(t.KEY_SEARCHABLE_ROOMS, this._settings.searchableRooms), null != this._settings.invitationParams && this._reqObj.putSFSObject(t.KEY_INVITATION_PARAMS, this._settings.invitationParams)
                }
            }]), t
        }();
        t.CreateSFSGameRequest = _
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BanUserRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 24;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.BanUser));
                return a._userId = e, a._message = n, a._banMode = r, a._delay = o, a._durationHours = s, Object.seal(a), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_USER_ID",
                get: function() {
                    return "u"
                }
            }, {
                key: "KEY_MESSAGE",
                get: function() {
                    return "m"
                }
            }, {
                key: "KEY_DELAY",
                get: function() {
                    return "d"
                }
            }, {
                key: "KEY_BAN_MODE",
                get: function() {
                    return "b"
                }
            }, {
                key: "KEY_BAN_DURATION_HOURS",
                get: function() {
                    return "dh"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (t.length > 0) throw new o.SFSValidationError("BanUserRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_USER_ID, this._userId), this._reqObj.putInt(t.KEY_DELAY, this._delay), this._reqObj.putInt(t.KEY_BAN_MODE, this._banMode), this._reqObj.putInt(t.KEY_BAN_DURATION_HOURS, this._durationHours), null != this._message && this._message.length > 0 && this._reqObj.putUtfString(t.KEY_MESSAGE, this._message)
                }
            }]), t
        }();
        t.BanUserRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.KickUserRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1);
        var s = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.KickUser));
                return r < 0 && (r = 0), o._userId = e, o._message = n, o._delay = r, Object.seal(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_USER_ID",
                get: function() {
                    return "u"
                }
            }, {
                key: "KEY_MESSAGE",
                get: function() {
                    return "m"
                }
            }, {
                key: "KEY_DELAY",
                get: function() {
                    return "d"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (t.length > 0) throw new o.SFSValidationError("KickUserRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putInt(t.KEY_USER_ID, this._userId), this._reqObj.putInt(t.KEY_DELAY, this._delay), null != this._message && this._message.length > 0 && this._reqObj.putUtfString(t.KEY_MESSAGE, this._message)
                }
            }]), t
        }();
        t.KickUserRequest = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LeaveRoomRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(1),
            s = n(10);
        var a = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.LeaveRoom));
                return n._room = e, Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_ROOM_ID",
                get: function() {
                    return "r"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {
                    var t = [];
                    if (e.getJoinedRooms().length < 1 && t.push("You are not joined in any Room"), null == this._room || this._room instanceof s.SFSRoom || t.push("Room must be an instance of SFSRoom class"), t.length > 0) throw new o.SFSValidationError("LeaveRoomRequest Error", t)
                }
            }, {
                key: "execute",
                value: function(e) {
                    null != this._room && this._reqObj.putInt(t.KEY_ROOM_ID, this._room.id)
                }
            }]), t
        }();
        t.LeaveRoomRequest = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.freeze({
                NAME: "${N}",
                GROUP_ID: "${G}",
                MAX_USERS: "${MXU}",
                MAX_SPECTATORS: "${MXS}",
                USER_COUNT: "${UC}",
                SPECTATOR_COUNT: "${SC}",
                IS_GAME: "${ISG}",
                IS_PRIVATE: "${ISP}",
                HAS_FREE_PLAYER_SLOTS: "${HFP}",
                IS_TYPE_SFSGAME: "${IST}"
            }),
            i = Object.freeze({
                NAME: "${N}",
                IS_PLAYER: "${ISP}",
                IS_SPECTATOR: "${ISS}",
                IS_NPC: "${ISN}",
                PRIVILEGE_ID: "${PRID}",
                IS_IN_ANY_ROOM: "${IAR}"
            });
        t.RoomProperties = r, t.UserProperties = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(t, n) {
                    s(this, e), this._type = t, this._symbol = n, Object.freeze(this)
                }
                return r(e, [{
                    key: "type",
                    get: function() {
                        return this._type
                    }
                }, {
                    key: "symbol",
                    get: function() {
                        return this._symbol
                    }
                }]), e
            }(),
            u = function(e) {
                function t(e) {
                    s(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 0, e));
                    return Object.freeze(n), n
                }
                return o(t, a), r(t, null, [{
                    key: "EQUALS",
                    get: function() {
                        return new t("==")
                    }
                }, {
                    key: "NOT_EQUALS",
                    get: function() {
                        return new t("!=")
                    }
                }]), t
            }(),
            c = function(e) {
                function t(e) {
                    s(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 1, e));
                    return Object.freeze(n), n
                }
                return o(t, a), r(t, null, [{
                    key: "EQUALS",
                    get: function() {
                        return new t("==")
                    }
                }, {
                    key: "NOT_EQUALS",
                    get: function() {
                        return new t("!=")
                    }
                }, {
                    key: "GREATER_THAN",
                    get: function() {
                        return new t(">")
                    }
                }, {
                    key: "GREATER_THAN_OR_EQUAL_TO",
                    get: function() {
                        return new t(">=")
                    }
                }, {
                    key: "LESS_THAN",
                    get: function() {
                        return new t("<")
                    }
                }, {
                    key: "LESS_THAN_OR_EQUAL_TO",
                    get: function() {
                        return new t("<=")
                    }
                }]), t
            }(),
            l = function(e) {
                function t(e) {
                    s(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 2, e));
                    return Object.freeze(n), n
                }
                return o(t, a), r(t, null, [{
                    key: "EQUALS",
                    get: function() {
                        return new t("==")
                    }
                }, {
                    key: "NOT_EQUALS",
                    get: function() {
                        return new t("!=")
                    }
                }, {
                    key: "CONTAINS",
                    get: function() {
                        return new t("contains")
                    }
                }, {
                    key: "STARTS_WITH",
                    get: function() {
                        return new t("startsWith")
                    }
                }, {
                    key: "ENDS_WITH",
                    get: function() {
                        return new t("endsWith")
                    }
                }]), t
            }();
        t.BoolMatch = u, t.NumberMatch = c, t.StringMatch = l
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PingPongRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2);
        var o = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.PingPong));
                return Object.seal(e), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, [{
                key: "validate",
                value: function(e) {}
            }, {
                key: "execute",
                value: function(e) {}
            }]), t
        }();
        t.PingPongRequest = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LagMonitor = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(160);
        var o = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._sfs = t, this._valueQueue = [], this._interval = n, this._queueSize = r, this._thread = null, this._lastReqTime = -1
            }
            return r(e, [{
                key: "start",
                value: function() {
                    this.isRunning || null == this._sfs || (this._thread = setInterval(this._threadRunner, 1e3 * this._interval, this))
                }
            }, {
                key: "stop",
                value: function() {
                    this.isRunning && (clearInterval(this._thread), this._thread = null, this._valueQueue = [])
                }
            }, {
                key: "destroy",
                value: function() {
                    this.stop(), this._sfs = null
                }
            }, {
                key: "getLastPingTime",
                value: function() {
                    return this._valueQueue.length > 0 ? this._valueQueue[this._valueQueue.length - 1] : 0
                }
            }, {
                key: "_threadRunner",
                value: function(e) {
                    e._lastReqTime = (new Date).getTime(), e._sfs.send(new i.PingPongRequest)
                }
            }, {
                key: "_onPingPong",
                value: function() {
                    var e = (new Date).getTime() - this._lastReqTime;
                    return this._valueQueue.length >= this._queueSize && this._valueQueue.shift(), this._valueQueue.push(e), this._getAveragePingTime()
                }
            }, {
                key: "_getAveragePingTime",
                value: function() {
                    if (0 == this._valueQueue.length) return 0;
                    for (var e = 0, t = 0; t < this._valueQueue.length; t++) e += this._valueQueue[t];
                    return e / this._valueQueue.length
                }
            }, {
                key: "isRunning",
                get: function() {
                    return null != this._thread
                }
            }]), e
        }();
        t.LagMonitor = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.HandshakeRequest = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2);
        var o = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i.Requests.Handshake));
                return r._apiVersion = e, r._clientDetails = n, Object.seal(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.BaseRequest), r(t, null, [{
                key: "KEY_SESSION_TOKEN",
                get: function() {
                    return "tk"
                }
            }, {
                key: "KEY_API",
                get: function() {
                    return "api"
                }
            }, {
                key: "KEY_COMPRESSION_THRESHOLD",
                get: function() {
                    return "ct"
                }
            }, {
                key: "KEY_CLIENT_TYPE",
                get: function() {
                    return "cl"
                }
            }, {
                key: "KEY_MAX_MESSAGE_SIZE",
                get: function() {
                    return "ms"
                }
            }]), r(t, [{
                key: "validate",
                value: function(e) {}
            }, {
                key: "execute",
                value: function(e) {
                    this._reqObj.putUtfString(t.KEY_API, this._apiVersion), this._reqObj.putUtfString(t.KEY_CLIENT_TYPE, this._clientDetails)
                }
            }]), t
        }();
        t.HandshakeRequest = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SFSBuddyManager = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(46);
        var o = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._sfs = t, this._buddiesByName = new Map, this._myVariables = new Map, this._inited = !1, this._buddyStates = new Set, Object.seal(this)
            }
            return r(e, [{
                key: "containsBuddy",
                value: function(e) {
                    return this._buddiesByName.has(e)
                }
            }, {
                key: "getBuddyById",
                value: function(e) {
                    return this.getBuddyList().find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "getBuddyByName",
                value: function(e) {
                    return this._buddiesByName.get(e)
                }
            }, {
                key: "getBuddyByNickName",
                value: function(e) {
                    return this.getBuddyList().find(function(t) {
                        return t.nickName === e
                    })
                }
            }, {
                key: "getOfflineBuddies",
                value: function() {
                    return this.getBuddyList().filter(function(e) {
                        return !e.isOnline
                    })
                }
            }, {
                key: "getOnlineBuddies",
                value: function() {
                    return this.getBuddyList().filter(function(e) {
                        return e.isOnline
                    })
                }
            }, {
                key: "getBuddyList",
                value: function() {
                    return Array.from(this._buddiesByName.values())
                }
            }, {
                key: "getMyVariable",
                value: function(e) {
                    return this._myVariables.get(e)
                }
            }, {
                key: "getMyVariables",
                value: function() {
                    return Array.from(this._myVariables.values())
                }
            }, {
                key: "getMyOnlineState",
                value: function() {
                    if (!this._inited) return !1;
                    var e = this.getMyVariable(i.ReservedBuddyVariables.BV_ONLINE);
                    return null == e || e.value
                }
            }, {
                key: "getMyNickName",
                value: function() {
                    var e = this.getMyVariable(i.ReservedBuddyVariables.BV_NICKNAME);
                    return null != e ? e.value : null
                }
            }, {
                key: "getMyState",
                value: function() {
                    var e = this.getMyVariable(i.ReservedBuddyVariables.BV_STATE);
                    return null != e ? e.value : null
                }
            }, {
                key: "getBuddyStates",
                value: function() {
                    return Array.from(this._buddyStates.values())
                }
            }, {
                key: "_setInited",
                value: function() {
                    this._inited = !0
                }
            }, {
                key: "_addBuddy",
                value: function(e) {
                    this._buddiesByName.set(e.name, e)
                }
            }, {
                key: "_clearAll",
                value: function() {
                    this._buddiesByName.clear()
                }
            }, {
                key: "_removeBuddyById",
                value: function(e) {
                    var t = this.getBuddyById(e);
                    return null != t && this._buddiesByName.delete(t.name), t
                }
            }, {
                key: "_removeBuddyByName",
                value: function(e) {
                    var t = this.getBuddyByName(e);
                    return null != t && this._buddiesByName.delete(e), t
                }
            }, {
                key: "_setMyVariables",
                value: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = i.value;
                            this._setMyVariable(s)
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "_setMyVariable",
                value: function(e) {
                    e.isNull ? this._myVariables.delete(e.name) : this._myVariables.set(e.name, e)
                }
            }, {
                key: "_setMyOnlineState",
                value: function(e) {
                    this._setMyVariable(new i.SFSBuddyVariable(i.ReservedBuddyVariables.BV_ONLINE, e))
                }
            }, {
                key: "_setMyNickName",
                value: function(e) {
                    this._setMyVariable(new i.SFSBuddyVariable(i.ReservedBuddyVariables.BV_NICKNAME, e))
                }
            }, {
                key: "_setMyState",
                value: function(e) {
                    this._setMyVariable(new i.SFSBuddyVariable(i.ReservedBuddyVariables.BV_STATE, e))
                }
            }, {
                key: "_setBuddyStates",
                value: function(e) {
                    this._buddyStates = new Set(e)
                }
            }, {
                key: "isInited",
                get: function() {
                    return this._inited
                }
            }]), e
        }();
        t.SFSBuddyManager = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SFSRoomManager = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(10);
        var o = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._sfs = t, this._groups = new Set, this._roomsById = new Map, this._roomsByName = new Map, Object.seal(this)
            }
            return r(e, [{
                key: "getRoomGroups",
                value: function() {
                    return Array.from(this._groups)
                }
            }, {
                key: "containsGroup",
                value: function(e) {
                    return this._groups.has(e)
                }
            }, {
                key: "containsRoom",
                value: function(e) {
                    return "number" == typeof e ? this._roomsById.has(e) : this._roomsByName.has(e)
                }
            }, {
                key: "containsRoomInGroup",
                value: function(e, t) {
                    var n = this.getRoomListFromGroup(t);
                    return "number" == typeof e ? n.some(function(t) {
                        return t.id === e
                    }) : n.some(function(t) {
                        return t.name === e
                    })
                }
            }, {
                key: "getRoomById",
                value: function(e) {
                    return this._roomsById.get(e)
                }
            }, {
                key: "getRoomByName",
                value: function(e) {
                    return this._roomsByName.get(e)
                }
            }, {
                key: "getRoomList",
                value: function() {
                    return Array.from(this._roomsById.values())
                }
            }, {
                key: "getRoomCount",
                value: function() {
                    return this._roomsById.size
                }
            }, {
                key: "getRoomListFromGroup",
                value: function(e) {
                    return this.getRoomList().filter(function(t) {
                        return t.groupId === e
                    })
                }
            }, {
                key: "getJoinedRooms",
                value: function() {
                    return this.getRoomList().filter(function(e) {
                        return e.isJoined
                    })
                }
            }, {
                key: "getUserRooms",
                value: function(e) {
                    return this.getRoomList().filter(function(t) {
                        return t.containsUser(e)
                    })
                }
            }, {
                key: "_addRoom",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._roomsById.set(e.id, e), this._roomsByName.set(e.name, e), e._setRoomManager(this), t ? this._addGroup(e.groupId) : e._isManaged = !1
                }
            }, {
                key: "_replaceRoom",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this.getRoomById(e.id);
                    return null != n ? (n._merge(e), n) : (this._addRoom(e, t), e)
                }
            }, {
                key: "_removeRoom",
                value: function(e) {
                    this._roomsById.delete(e.id), this._roomsByName.delete(e.name)
                }
            }, {
                key: "_removeRoomById",
                value: function(e) {
                    var t = this.getRoomById(e);
                    null != t && this._removeRoom(t)
                }
            }, {
                key: "_removeRoomByName",
                value: function(e) {
                    var t = this.getRoomByName(e);
                    null != t && this._removeRoom(t)
                }
            }, {
                key: "_changeRoomName",
                value: function(e, t) {
                    var n = e.name;
                    e._name = t, this._roomsByName.set(t, e), this._roomsByName.delete(n)
                }
            }, {
                key: "_changeRoomPasswordState",
                value: function(e, t) {
                    e._isPasswordProtected = t
                }
            }, {
                key: "_changeRoomCapacity",
                value: function(e, t, n) {
                    e._maxUsers = t, e._maxSpectators = n
                }
            }, {
                key: "_addGroup",
                value: function(e) {
                    this.containsGroup(e) || this._groups.add(e)
                }
            }, {
                key: "_removeGroup",
                value: function(e) {
                    this._groups.delete(e);
                    var t = this.getRoomListFromGroup(e),
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                            var a = o.value;
                            a.isJoined ? a._isManaged = !1 : this._removeRoom(a)
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }
            }, {
                key: "_removeUser",
                value: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, s = this.getUserRooms(e)[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
                            var a = o.value;
                            a instanceof i.MMORoom || a._removeUser(e)
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && s.return && s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }]), e
        }();
        t.SFSRoomManager = o
    }, function(e, t) {
        /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
        (function() {
            "use strict";

            function e(e) {
                throw e
            }
            var t = void 0,
                n = !0,
                r = this;

            function i(e, n) {
                var i, o = e.split("."),
                    s = r;
                !(o[0] in s) && s.execScript && s.execScript("var " + o[0]);
                for (; o.length && (i = o.shift());) o.length || n === t ? s = s[i] ? s[i] : s[i] = {} : s[i] = n
            }
            var o = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;

            function s(t, n) {
                this.index = "number" == typeof n ? n : 0, this.i = 0, this.buffer = t instanceof(o ? Uint8Array : Array) ? t : new(o ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && e(Error("invalid index")), this.buffer.length <= this.index && this.f()
            }
            s.prototype.f = function() {
                var e, t = this.buffer,
                    n = t.length,
                    r = new(o ? Uint8Array : Array)(n << 1);
                if (o) r.set(t);
                else
                    for (e = 0; e < n; ++e) r[e] = t[e];
                return this.buffer = r
            }, s.prototype.d = function(e, t, n) {
                var r, i = this.buffer,
                    o = this.index,
                    s = this.i,
                    a = i[o];
                if (n && 1 < t && (e = 8 < t ? (h[255 & e] << 24 | h[e >>> 8 & 255] << 16 | h[e >>> 16 & 255] << 8 | h[e >>> 24 & 255]) >> 32 - t : h[e] >> 8 - t), 8 > t + s) a = a << t | e, s += t;
                else
                    for (r = 0; r < t; ++r) a = a << 1 | e >> t - r - 1 & 1, 8 == ++s && (s = 0, i[o++] = h[a], a = 0, o === i.length && (i = this.f()));
                i[o] = a, this.buffer = i, this.i = s, this.index = o
            }, s.prototype.finish = function() {
                var e, t = this.buffer,
                    n = this.index;
                return 0 < this.i && (t[n] <<= 8 - this.i, t[n] = h[t[n]], n++), o ? e = t.subarray(0, n) : (t.length = n, e = t), e
            };
            var a, u = new(o ? Uint8Array : Array)(256);
            for (a = 0; 256 > a; ++a) {
                for (var c = f = a, l = 7, f = f >>> 1; f; f >>>= 1) c <<= 1, c |= 1 & f, --l;
                u[a] = (c << l & 255) >>> 0
            }
            var h = u;

            function _(e) {
                this.buffer = new(o ? Uint16Array : Array)(2 * e), this.length = 0
            }

            function y(e) {
                var t, n, r, i, s, a, u, c, l, f, h = e.length,
                    _ = 0,
                    y = Number.POSITIVE_INFINITY;
                for (c = 0; c < h; ++c) e[c] > _ && (_ = e[c]), e[c] < y && (y = e[c]);
                for (t = 1 << _, n = new(o ? Uint32Array : Array)(t), r = 1, i = 0, s = 2; r <= _;) {
                    for (c = 0; c < h; ++c)
                        if (e[c] === r) {
                            for (a = 0, u = i, l = 0; l < r; ++l) a = a << 1 | 1 & u, u >>= 1;
                            for (f = r << 16 | c, l = a; l < t; l += s) n[l] = f;
                            ++i
                        }++ r, i <<= 1, s <<= 1
                }
                return [n, _, y]
            }

            function p(e, t) {
                this.h = g, this.w = 0, this.input = o && e instanceof Array ? new Uint8Array(e) : e, this.b = 0, t && (t.lazy && (this.w = t.lazy), "number" == typeof t.compressionType && (this.h = t.compressionType), t.outputBuffer && (this.a = o && t.outputBuffer instanceof Array ? new Uint8Array(t.outputBuffer) : t.outputBuffer), "number" == typeof t.outputIndex && (this.b = t.outputIndex)), this.a || (this.a = new(o ? Uint8Array : Array)(32768))
            }
            _.prototype.getParent = function(e) {
                return 2 * ((e - 2) / 4 | 0)
            }, _.prototype.push = function(e, t) {
                var n, r, i, o = this.buffer;
                for (n = this.length, o[this.length++] = t, o[this.length++] = e; 0 < n && (r = this.getParent(n), o[n] > o[r]);) i = o[n], o[n] = o[r], o[r] = i, i = o[n + 1], o[n + 1] = o[r + 1], o[r + 1] = i, n = r;
                return this.length
            }, _.prototype.pop = function() {
                var e, t, n, r, i, o = this.buffer;
                for (t = o[0], e = o[1], this.length -= 2, o[0] = o[this.length], o[1] = o[this.length + 1], i = 0; !((r = 2 * i + 2) >= this.length) && (r + 2 < this.length && o[r + 2] > o[r] && (r += 2), o[r] > o[i]);) n = o[i], o[i] = o[r], o[r] = n, n = o[i + 1], o[i + 1] = o[r + 1], o[r + 1] = n, i = r;
                return {
                    index: e,
                    value: t,
                    length: this.length
                }
            };
            var d, g = 2,
                v = {
                    NONE: 0,
                    r: 1,
                    k: g,
                    O: 3
                },
                b = [];
            for (d = 0; 288 > d; d++) switch (n) {
                case 143 >= d:
                    b.push([d + 48, 8]);
                    break;
                case 255 >= d:
                    b.push([d - 144 + 400, 9]);
                    break;
                case 279 >= d:
                    b.push([d - 256 + 0, 7]);
                    break;
                case 287 >= d:
                    b.push([d - 280 + 192, 8]);
                    break;
                default:
                    e("invalid literal: " + d)
            }
            p.prototype.j = function() {
                var r, i, a, u, c = this.input;
                switch (this.h) {
                    case 0:
                        for (a = 0, u = c.length; a < u;) {
                            var l, f, h, _ = i = o ? c.subarray(a, a + 65535) : c.slice(a, a + 65535),
                                y = (a += i.length) === u,
                                p = t,
                                d = t,
                                v = this.a,
                                m = this.b;
                            if (o) {
                                for (v = new Uint8Array(this.a.buffer); v.length <= m + _.length + 5;) v = new Uint8Array(v.length << 1);
                                v.set(this.a)
                            }
                            if (l = y ? 1 : 0, v[m++] = 0 | l, h = 65536 + ~(f = _.length) & 65535, v[m++] = 255 & f, v[m++] = f >>> 8 & 255, v[m++] = 255 & h, v[m++] = h >>> 8 & 255, o) v.set(_, m), m += _.length, v = v.subarray(0, m);
                            else {
                                for (p = 0, d = _.length; p < d; ++p) v[m++] = _[p];
                                v.length = m
                            }
                            this.b = m, this.a = v
                        }
                        break;
                    case 1:
                        var S = new s(o ? new Uint8Array(this.a.buffer) : this.a, this.b);
                        S.d(1, 1, n), S.d(1, 2, n);
                        var R, w, I, M = E(this, c);
                        for (R = 0, w = M.length; R < w; R++)
                            if (I = M[R], s.prototype.d.apply(S, b[I]), 256 < I) S.d(M[++R], M[++R], n), S.d(M[++R], 5), S.d(M[++R], M[++R], n);
                            else if (256 === I) break;
                        this.a = S.finish(), this.b = this.a.length;
                        break;
                    case g:
                        var T, k, P, F, N, j, U, B, L, D, Y, C, x, q, V, K = new s(o ? new Uint8Array(this.a.buffer) : this.a, this.b),
                            G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                            z = Array(19);
                        for (T = g, K.d(1, 1, n), K.d(T, 2, n), k = E(this, c), U = A(j = O(this.M, 15)), L = A(B = O(this.L, 7)), P = 286; 257 < P && 0 === j[P - 1]; P--);
                        for (F = 30; 1 < F && 0 === B[F - 1]; F--);
                        var H, J, W, X, Z, Q, $ = P,
                            ee = F,
                            te = new(o ? Uint32Array : Array)($ + ee),
                            ne = new(o ? Uint32Array : Array)(316),
                            re = new(o ? Uint8Array : Array)(19);
                        for (H = J = 0; H < $; H++) te[J++] = j[H];
                        for (H = 0; H < ee; H++) te[J++] = B[H];
                        if (!o)
                            for (H = 0, X = re.length; H < X; ++H) re[H] = 0;
                        for (H = Z = 0, X = te.length; H < X; H += J) {
                            for (J = 1; H + J < X && te[H + J] === te[H]; ++J);
                            if (W = J, 0 === te[H])
                                if (3 > W)
                                    for (; 0 < W--;) ne[Z++] = 0, re[0]++;
                                else
                                    for (; 0 < W;)(Q = 138 > W ? W : 138) > W - 3 && Q < W && (Q = W - 3), 10 >= Q ? (ne[Z++] = 17, ne[Z++] = Q - 3, re[17]++) : (ne[Z++] = 18, ne[Z++] = Q - 11, re[18]++), W -= Q;
                            else if (ne[Z++] = te[H], re[te[H]]++, 3 > --W)
                                for (; 0 < W--;) ne[Z++] = te[H], re[te[H]]++;
                            else
                                for (; 0 < W;)(Q = 6 > W ? W : 6) > W - 3 && Q < W && (Q = W - 3), ne[Z++] = 16, ne[Z++] = Q - 3, re[16]++, W -= Q
                        }
                        for (r = o ? ne.subarray(0, Z) : ne.slice(0, Z), D = O(re, 7), q = 0; 19 > q; q++) z[q] = D[G[q]];
                        for (N = 19; 4 < N && 0 === z[N - 1]; N--);
                        for (Y = A(D), K.d(P - 257, 5, n), K.d(F - 1, 5, n), K.d(N - 4, 4, n), q = 0; q < N; q++) K.d(z[q], 3, n);
                        for (q = 0, V = r.length; q < V; q++)
                            if (C = r[q], K.d(Y[C], D[C], n), 16 <= C) {
                                switch (q++, C) {
                                    case 16:
                                        x = 2;
                                        break;
                                    case 17:
                                        x = 3;
                                        break;
                                    case 18:
                                        x = 7;
                                        break;
                                    default:
                                        e("invalid code: " + C)
                                }
                                K.d(r[q], x, n)
                            } var ie, oe, se, ae, ue, ce, le, fe, he = [U, j],
                            _e = [L, B];
                        for (ue = he[0], ce = he[1], le = _e[0], fe = _e[1], ie = 0, oe = k.length; ie < oe; ++ie)
                            if (se = k[ie], K.d(ue[se], ce[se], n), 256 < se) K.d(k[++ie], k[++ie], n), ae = k[++ie], K.d(le[ae], fe[ae], n), K.d(k[++ie], k[++ie], n);
                            else if (256 === se) break;
                        this.a = K.finish(), this.b = this.a.length;
                        break;
                    default:
                        e("invalid compression type")
                }
                return this.a
            };
            var m = function() {
                    function t(t) {
                        switch (n) {
                            case 3 === t:
                                return [257, t - 3, 0];
                            case 4 === t:
                                return [258, t - 4, 0];
                            case 5 === t:
                                return [259, t - 5, 0];
                            case 6 === t:
                                return [260, t - 6, 0];
                            case 7 === t:
                                return [261, t - 7, 0];
                            case 8 === t:
                                return [262, t - 8, 0];
                            case 9 === t:
                                return [263, t - 9, 0];
                            case 10 === t:
                                return [264, t - 10, 0];
                            case 12 >= t:
                                return [265, t - 11, 1];
                            case 14 >= t:
                                return [266, t - 13, 1];
                            case 16 >= t:
                                return [267, t - 15, 1];
                            case 18 >= t:
                                return [268, t - 17, 1];
                            case 22 >= t:
                                return [269, t - 19, 2];
                            case 26 >= t:
                                return [270, t - 23, 2];
                            case 30 >= t:
                                return [271, t - 27, 2];
                            case 34 >= t:
                                return [272, t - 31, 2];
                            case 42 >= t:
                                return [273, t - 35, 3];
                            case 50 >= t:
                                return [274, t - 43, 3];
                            case 58 >= t:
                                return [275, t - 51, 3];
                            case 66 >= t:
                                return [276, t - 59, 3];
                            case 82 >= t:
                                return [277, t - 67, 4];
                            case 98 >= t:
                                return [278, t - 83, 4];
                            case 114 >= t:
                                return [279, t - 99, 4];
                            case 130 >= t:
                                return [280, t - 115, 4];
                            case 162 >= t:
                                return [281, t - 131, 5];
                            case 194 >= t:
                                return [282, t - 163, 5];
                            case 226 >= t:
                                return [283, t - 195, 5];
                            case 257 >= t:
                                return [284, t - 227, 5];
                            case 258 === t:
                                return [285, t - 258, 0];
                            default:
                                e("invalid length: " + t)
                        }
                    }
                    var r, i, o = [];
                    for (r = 3; 258 >= r; r++) i = t(r), o[r] = i[2] << 24 | i[1] << 16 | i[0];
                    return o
                }(),
                S = o ? new Uint32Array(m) : m;

            function E(r, i) {
                function s(t, r) {
                    var i, o, s, a, u = t.H,
                        c = [],
                        l = 0;
                    switch (i = S[t.length], c[l++] = 65535 & i, c[l++] = i >> 16 & 255, c[l++] = i >> 24, n) {
                        case 1 === u:
                            o = [0, u - 1, 0];
                            break;
                        case 2 === u:
                            o = [1, u - 2, 0];
                            break;
                        case 3 === u:
                            o = [2, u - 3, 0];
                            break;
                        case 4 === u:
                            o = [3, u - 4, 0];
                            break;
                        case 6 >= u:
                            o = [4, u - 5, 1];
                            break;
                        case 8 >= u:
                            o = [5, u - 7, 1];
                            break;
                        case 12 >= u:
                            o = [6, u - 9, 2];
                            break;
                        case 16 >= u:
                            o = [7, u - 13, 2];
                            break;
                        case 24 >= u:
                            o = [8, u - 17, 3];
                            break;
                        case 32 >= u:
                            o = [9, u - 25, 3];
                            break;
                        case 48 >= u:
                            o = [10, u - 33, 4];
                            break;
                        case 64 >= u:
                            o = [11, u - 49, 4];
                            break;
                        case 96 >= u:
                            o = [12, u - 65, 5];
                            break;
                        case 128 >= u:
                            o = [13, u - 97, 5];
                            break;
                        case 192 >= u:
                            o = [14, u - 129, 6];
                            break;
                        case 256 >= u:
                            o = [15, u - 193, 6];
                            break;
                        case 384 >= u:
                            o = [16, u - 257, 7];
                            break;
                        case 512 >= u:
                            o = [17, u - 385, 7];
                            break;
                        case 768 >= u:
                            o = [18, u - 513, 8];
                            break;
                        case 1024 >= u:
                            o = [19, u - 769, 8];
                            break;
                        case 1536 >= u:
                            o = [20, u - 1025, 9];
                            break;
                        case 2048 >= u:
                            o = [21, u - 1537, 9];
                            break;
                        case 3072 >= u:
                            o = [22, u - 2049, 10];
                            break;
                        case 4096 >= u:
                            o = [23, u - 3073, 10];
                            break;
                        case 6144 >= u:
                            o = [24, u - 4097, 11];
                            break;
                        case 8192 >= u:
                            o = [25, u - 6145, 11];
                            break;
                        case 12288 >= u:
                            o = [26, u - 8193, 12];
                            break;
                        case 16384 >= u:
                            o = [27, u - 12289, 12];
                            break;
                        case 24576 >= u:
                            o = [28, u - 16385, 13];
                            break;
                        case 32768 >= u:
                            o = [29, u - 24577, 13];
                            break;
                        default:
                            e("invalid distance")
                    }
                    for (i = o, c[l++] = i[0], c[l++] = i[1], c[l++] = i[2], s = 0, a = c.length; s < a; ++s) g[v++] = c[s];
                    m[c[0]]++, E[c[3]]++, b = t.length + r - 1, y = null
                }
                var a, u, c, l, f, h, _, y, p, d = {},
                    g = o ? new Uint16Array(2 * i.length) : [],
                    v = 0,
                    b = 0,
                    m = new(o ? Uint32Array : Array)(286),
                    E = new(o ? Uint32Array : Array)(30),
                    O = r.w;
                if (!o) {
                    for (c = 0; 285 >= c;) m[c++] = 0;
                    for (c = 0; 29 >= c;) E[c++] = 0
                }
                for (m[256] = 1, a = 0, u = i.length; a < u; ++a) {
                    for (c = f = 0, l = 3; c < l && a + c !== u; ++c) f = f << 8 | i[a + c];
                    if (d[f] === t && (d[f] = []), h = d[f], !(0 < b--)) {
                        for (; 0 < h.length && 32768 < a - h[0];) h.shift();
                        if (a + 3 >= u) {
                            for (y && s(y, -1), c = 0, l = u - a; c < l; ++c) p = i[a + c], g[v++] = p, ++m[p];
                            break
                        }
                        0 < h.length ? (_ = R(i, a, h), y ? y.length < _.length ? (p = i[a - 1], g[v++] = p, ++m[p], s(_, 0)) : s(y, -1) : _.length < O ? y = _ : s(_, 0)) : y ? s(y, -1) : (p = i[a], g[v++] = p, ++m[p])
                    }
                    h.push(a)
                }
                return g[v++] = 256, m[256]++, r.M = m, r.L = E, o ? g.subarray(0, v) : g
            }

            function R(e, t, n) {
                var r, i, o, s, a, u, c = 0,
                    l = e.length;
                s = 0, u = n.length;
                e: for (; s < u; s++) {
                    if (r = n[u - s - 1], o = 3, 3 < c) {
                        for (a = c; 3 < a; a--)
                            if (e[r + a - 1] !== e[t + a - 1]) continue e;
                        o = c
                    }
                    for (; 258 > o && t + o < l && e[r + o] === e[t + o];) ++o;
                    if (o > c && (i = r, c = o), 258 === o) break
                }
                return new function(e, t) {
                    this.length = e, this.H = t
                }(c, t - i)
            }

            function O(e, t) {
                var n, r, i, s, a, u = e.length,
                    c = new _(572),
                    l = new(o ? Uint8Array : Array)(u);
                if (!o)
                    for (s = 0; s < u; s++) l[s] = 0;
                for (s = 0; s < u; ++s) 0 < e[s] && c.push(s, e[s]);
                if (n = Array(c.length / 2), r = new(o ? Uint32Array : Array)(c.length / 2), 1 === n.length) return l[c.pop().index] = 1, l;
                for (s = 0, a = c.length / 2; s < a; ++s) n[s] = c.pop(), r[s] = n[s].value;
                for (i = function(e, t, n) {
                        function r(e) {
                            var n = y[e][p[e]];
                            n === t ? (r(e + 1), r(e + 1)) : --h[n], ++p[e]
                        }
                        var i, s, a, u, c, l = new(o ? Uint16Array : Array)(n),
                            f = new(o ? Uint8Array : Array)(n),
                            h = new(o ? Uint8Array : Array)(t),
                            _ = Array(n),
                            y = Array(n),
                            p = Array(n),
                            d = (1 << n) - t,
                            g = 1 << n - 1;
                        for (l[n - 1] = t, s = 0; s < n; ++s) d < g ? f[s] = 0 : (f[s] = 1, d -= g), d <<= 1, l[n - 2 - s] = (l[n - 1 - s] / 2 | 0) + t;
                        for (l[0] = f[0], _[0] = Array(l[0]), y[0] = Array(l[0]), s = 1; s < n; ++s) l[s] > 2 * l[s - 1] + f[s] && (l[s] = 2 * l[s - 1] + f[s]), _[s] = Array(l[s]), y[s] = Array(l[s]);
                        for (i = 0; i < t; ++i) h[i] = n;
                        for (a = 0; a < l[n - 1]; ++a) _[n - 1][a] = e[a], y[n - 1][a] = a;
                        for (i = 0; i < n; ++i) p[i] = 0;
                        for (1 === f[n - 1] && (--h[0], ++p[n - 1]), s = n - 2; 0 <= s; --s) {
                            for (u = i = 0, c = p[s + 1], a = 0; a < l[s]; a++)(u = _[s + 1][c] + _[s + 1][c + 1]) > e[i] ? (_[s][a] = u, y[s][a] = t, c += 2) : (_[s][a] = e[i], y[s][a] = i, ++i);
                            p[s] = 0, 1 === f[s] && r(s)
                        }
                        return h
                    }(r, r.length, t), s = 0, a = n.length; s < a; ++s) l[n[s].index] = i[s];
                return l
            }

            function A(e) {
                var t, n, r, i, s = new(o ? Uint16Array : Array)(e.length),
                    a = [],
                    u = [],
                    c = 0;
                for (t = 0, n = e.length; t < n; t++) a[e[t]] = 1 + (0 | a[e[t]]);
                for (t = 1, n = 16; t <= n; t++) u[t] = c, c += 0 | a[t], c <<= 1;
                for (t = 0, n = e.length; t < n; t++)
                    for (c = u[e[t]], u[e[t]] += 1, r = s[t] = 0, i = e[t]; r < i; r++) s[t] = s[t] << 1 | 1 & c, c >>>= 1;
                return s
            }

            function w(t, n) {
                switch (this.l = [], this.m = 32768, this.e = this.g = this.c = this.q = 0, this.input = o ? new Uint8Array(t) : t, this.s = !1, this.n = M, this.C = !1, !n && (n = {}) || (n.index && (this.c = n.index), n.bufferSize && (this.m = n.bufferSize), n.bufferType && (this.n = n.bufferType), n.resize && (this.C = n.resize)), this.n) {
                    case I:
                        this.b = 32768, this.a = new(o ? Uint8Array : Array)(32768 + this.m + 258);
                        break;
                    case M:
                        this.b = 0, this.a = new(o ? Uint8Array : Array)(this.m), this.f = this.K, this.t = this.I, this.o = this.J;
                        break;
                    default:
                        e(Error("invalid inflate mode"))
                }
            }
            var I = 0,
                M = 1,
                T = {
                    F: I,
                    D: M
                };
            w.prototype.p = function() {
                for (; !this.s;) {
                    var r = J(this, 3);
                    switch (1 & r && (this.s = n), r >>>= 1) {
                        case 0:
                            var i = this.input,
                                s = this.c,
                                a = this.a,
                                u = this.b,
                                c = i.length,
                                l = t,
                                f = a.length,
                                h = t;
                            switch (this.e = this.g = 0, s + 1 >= c && e(Error("invalid uncompressed block header: LEN")), l = i[s++] | i[s++] << 8, s + 1 >= c && e(Error("invalid uncompressed block header: NLEN")), l === ~(i[s++] | i[s++] << 8) && e(Error("invalid uncompressed block header: length verify")), s + l > i.length && e(Error("input buffer is broken")), this.n) {
                                case I:
                                    for (; u + l > a.length;) {
                                        if (l -= h = f - u, o) a.set(i.subarray(s, s + h), u), u += h, s += h;
                                        else
                                            for (; h--;) a[u++] = i[s++];
                                        this.b = u, a = this.f(), u = this.b
                                    }
                                    break;
                                case M:
                                    for (; u + l > a.length;) a = this.f({
                                        v: 2
                                    });
                                    break;
                                default:
                                    e(Error("invalid inflate mode"))
                            }
                            if (o) a.set(i.subarray(s, s + l), u), u += l, s += l;
                            else
                                for (; l--;) a[u++] = i[s++];
                            this.c = s, this.b = u, this.a = a;
                            break;
                        case 1:
                            this.o(G, H);
                            break;
                        case 2:
                            X(this);
                            break;
                        default:
                            e(Error("unknown BTYPE: " + r))
                    }
                }
                return this.t()
            };
            var k, P, F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                N = o ? new Uint16Array(F) : F,
                j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
                U = o ? new Uint16Array(j) : j,
                B = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
                L = o ? new Uint8Array(B) : B,
                D = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
                Y = o ? new Uint16Array(D) : D,
                C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                x = o ? new Uint8Array(C) : C,
                q = new(o ? Uint8Array : Array)(288);
            for (k = 0, P = q.length; k < P; ++k) q[k] = 143 >= k ? 8 : 255 >= k ? 9 : 279 >= k ? 7 : 8;
            var V, K, G = y(q),
                z = new(o ? Uint8Array : Array)(30);
            for (V = 0, K = z.length; V < K; ++V) z[V] = 5;
            var H = y(z);

            function J(t, n) {
                for (var r, i = t.g, o = t.e, s = t.input, a = t.c, u = s.length; o < n;) a >= u && e(Error("input buffer is broken")), i |= s[a++] << o, o += 8;
                return r = i & (1 << n) - 1, t.g = i >>> n, t.e = o - n, t.c = a, r
            }

            function W(e, t) {
                for (var n, r, i = e.g, o = e.e, s = e.input, a = e.c, u = s.length, c = t[0], l = t[1]; o < l && !(a >= u);) i |= s[a++] << o, o += 8;
                return r = (n = c[i & (1 << l) - 1]) >>> 16, e.g = i >> r, e.e = o - r, e.c = a, 65535 & n
            }

            function X(e) {
                function t(e, t, n) {
                    var r, i, o, s = this.z;
                    for (o = 0; o < e;) switch (r = W(this, t), r) {
                        case 16:
                            for (i = 3 + J(this, 2); i--;) n[o++] = s;
                            break;
                        case 17:
                            for (i = 3 + J(this, 3); i--;) n[o++] = 0;
                            s = 0;
                            break;
                        case 18:
                            for (i = 11 + J(this, 7); i--;) n[o++] = 0;
                            s = 0;
                            break;
                        default:
                            s = n[o++] = r
                    }
                    return this.z = s, n
                }
                var n, r, i, s, a = J(e, 5) + 257,
                    u = J(e, 5) + 1,
                    c = J(e, 4) + 4,
                    l = new(o ? Uint8Array : Array)(N.length);
                for (s = 0; s < c; ++s) l[N[s]] = J(e, 3);
                if (!o)
                    for (s = c, c = l.length; s < c; ++s) l[N[s]] = 0;
                n = y(l), r = new(o ? Uint8Array : Array)(a), i = new(o ? Uint8Array : Array)(u), e.z = 0, e.o(y(t.call(e, a, n, r)), y(t.call(e, u, n, i)))
            }

            function Z(e) {
                if ("string" == typeof e) {
                    var t, n, r = e.split("");
                    for (t = 0, n = r.length; t < n; t++) r[t] = (255 & r[t].charCodeAt(0)) >>> 0;
                    e = r
                }
                for (var i, o = 1, s = 0, a = e.length, u = 0; 0 < a;) {
                    a -= i = 1024 < a ? 1024 : a;
                    do {
                        s += o += e[u++]
                    } while (--i);
                    o %= 65521, s %= 65521
                }
                return (s << 16 | o) >>> 0
            }

            function Q(t, n) {
                var r, i;
                switch (this.input = t, this.c = 0, !n && (n = {}) || (n.index && (this.c = n.index), n.verify && (this.N = n.verify)), r = t[this.c++], i = t[this.c++], 15 & r) {
                    case $:
                        this.method = $;
                        break;
                    default:
                        e(Error("unsupported compression method"))
                }
                0 != ((r << 8) + i) % 31 && e(Error("invalid fcheck flag:" + ((r << 8) + i) % 31)), 32 & i && e(Error("fdict flag is not supported")), this.B = new w(t, {
                    index: this.c,
                    bufferSize: n.bufferSize,
                    bufferType: n.bufferType,
                    resize: n.resize
                })
            }
            w.prototype.o = function(e, t) {
                var n = this.a,
                    r = this.b;
                this.u = e;
                for (var i, o, s, a, u = n.length - 258; 256 !== (i = W(this, e));)
                    if (256 > i) r >= u && (this.b = r, n = this.f(), r = this.b), n[r++] = i;
                    else
                        for (a = U[o = i - 257], 0 < L[o] && (a += J(this, L[o])), i = W(this, t), s = Y[i], 0 < x[i] && (s += J(this, x[i])), r >= u && (this.b = r, n = this.f(), r = this.b); a--;) n[r] = n[r++ - s];
                for (; 8 <= this.e;) this.e -= 8, this.c--;
                this.b = r
            }, w.prototype.J = function(e, t) {
                var n = this.a,
                    r = this.b;
                this.u = e;
                for (var i, o, s, a, u = n.length; 256 !== (i = W(this, e));)
                    if (256 > i) r >= u && (u = (n = this.f()).length), n[r++] = i;
                    else
                        for (a = U[o = i - 257], 0 < L[o] && (a += J(this, L[o])), i = W(this, t), s = Y[i], 0 < x[i] && (s += J(this, x[i])), r + a > u && (u = (n = this.f()).length); a--;) n[r] = n[r++ - s];
                for (; 8 <= this.e;) this.e -= 8, this.c--;
                this.b = r
            }, w.prototype.f = function() {
                var e, t, n = new(o ? Uint8Array : Array)(this.b - 32768),
                    r = this.b - 32768,
                    i = this.a;
                if (o) n.set(i.subarray(32768, n.length));
                else
                    for (e = 0, t = n.length; e < t; ++e) n[e] = i[e + 32768];
                if (this.l.push(n), this.q += n.length, o) i.set(i.subarray(r, r + 32768));
                else
                    for (e = 0; 32768 > e; ++e) i[e] = i[r + e];
                return this.b = 32768, i
            }, w.prototype.K = function(e) {
                var t, n, r, i = this.input.length / this.c + 1 | 0,
                    s = this.input,
                    a = this.a;
                return e && ("number" == typeof e.v && (i = e.v), "number" == typeof e.G && (i += e.G)), 2 > i ? n = (r = (s.length - this.c) / this.u[2] / 2 * 258 | 0) < a.length ? a.length + r : a.length << 1 : n = a.length * i, o ? (t = new Uint8Array(n)).set(a) : t = a, this.a = t
            }, w.prototype.t = function() {
                var e, t, n, r, i, s = 0,
                    a = this.a,
                    u = this.l,
                    c = new(o ? Uint8Array : Array)(this.q + (this.b - 32768));
                if (0 === u.length) return o ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
                for (t = 0, n = u.length; t < n; ++t)
                    for (r = 0, i = (e = u[t]).length; r < i; ++r) c[s++] = e[r];
                for (t = 32768, n = this.b; t < n; ++t) c[s++] = a[t];
                return this.l = [], this.buffer = c
            }, w.prototype.I = function() {
                var e, t = this.b;
                return o ? this.C ? (e = new Uint8Array(t)).set(this.a.subarray(0, t)) : e = this.a.subarray(0, t) : (this.a.length > t && (this.a.length = t), e = this.a), this.buffer = e
            }, Q.prototype.p = function() {
                var t, n = this.input;
                return t = this.B.p(), this.c = this.B.c, this.N && ((n[this.c++] << 24 | n[this.c++] << 16 | n[this.c++] << 8 | n[this.c++]) >>> 0 !== Z(t) && e(Error("invalid adler-32 checksum"))), t
            };
            var $ = 8;

            function ee(e, t) {
                this.input = e, this.a = new(o ? Uint8Array : Array)(32768), this.h = te.k;
                var n, r = {};
                for (n in !t && (t = {}) || "number" != typeof t.compressionType || (this.h = t.compressionType), t) r[n] = t[n];
                r.outputBuffer = this.a, this.A = new p(this.input, r)
            }
            var te = v;

            function ne(e, t) {
                var n, r, o, s;
                if (Object.keys) n = Object.keys(t);
                else
                    for (r in n = [], o = 0, t) n[o++] = r;
                for (o = 0, s = n.length; o < s; ++o) i(e + "." + (r = n[o]), t[r])
            }
            ee.prototype.j = function() {
                var t, n, r, i, s, a, u, c = 0;
                switch (u = this.a, t = $) {
                    case $:
                        n = Math.LOG2E * Math.log(32768) - 8;
                        break;
                    default:
                        e(Error("invalid compression method"))
                }
                switch (r = n << 4 | t, u[c++] = r, t) {
                    case $:
                        switch (this.h) {
                            case te.NONE:
                                s = 0;
                                break;
                            case te.r:
                                s = 1;
                                break;
                            case te.k:
                                s = 2;
                                break;
                            default:
                                e(Error("unsupported compression type"))
                        }
                        break;
                    default:
                        e(Error("invalid compression method"))
                }
                return i = s << 6 | 0, u[c++] = i | 31 - (256 * r + i) % 31, a = Z(this.input), this.A.b = c, c = (u = this.A.j()).length, o && ((u = new Uint8Array(u.buffer)).length <= c + 4 && (this.a = new Uint8Array(u.length + 4), this.a.set(u), u = this.a), u = u.subarray(0, c + 4)), u[c++] = a >> 24 & 255, u[c++] = a >> 16 & 255, u[c++] = a >> 8 & 255, u[c++] = 255 & a, u
            }, i("Zlib.Inflate", Q), i("Zlib.Inflate.prototype.decompress", Q.prototype.p), ne("Zlib.Inflate.BufferType", {
                ADAPTIVE: T.D,
                BLOCK: T.F
            }), i("Zlib.Deflate", ee), i("Zlib.Deflate.compress", function(e, t) {
                return new ee(e, t).j()
            }), i("Zlib.Deflate.prototype.compress", ee.prototype.j), ne("Zlib.Deflate.CompressionType", {
                NONE: te.NONE,
                FIXED: te.r,
                DYNAMIC: te.k
            })
        }).call(this)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SocketEngine = t.SocketEvent = void 0;
        var r, i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(120),
            s = (r = o) && r.__esModule ? r : {
                default: r
            },
            a = n(165),
            u = n(38),
            c = n(8),
            l = n(2),
            f = n(50),
            h = n(51),
            _ = n(1);

        function y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var p = Object.freeze({
                CONNECT: "socketConnect",
                DISCONNECT: "socketDisconnect",
                DATA: "socketData",
                IOERROR: "socketIOError"
            }),
            d = function(e) {
                function t(e) {
                    y(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n._sfs = e, n._logger = f.Logger.instance, n._isConnected = !1, n._isConnecting = !1, n._socket = null, n._protocolCodec = new g(e), n._disconnectionReason = h.ClientDisconnectionReason.UNKNOWN, Object.seal(n), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, u.EventDispatcher), i(t, [{
                    key: "connect",
                    value: function(e, t, n) {
                        this._isConnecting = !0;
                        var r = "ws" + (n ? "s" : "");
                        this._socket = new WebSocket(r + "://" + e + ":" + t + "/BlueBox/websocket",[],Global.Ca), this._socket.binaryType = "arraybuffer", this._socket._scope = this, this._socket.onopen = this._onSocketConnect, this._socket.onclose = this._onSocketDisconnect, this._socket.onmessage = this._onSocketData, this._socket.onerror = this._onSocketError
                    }
                }, {
                    key: "disconnect",
                    value: function(e) {
                        this._disconnectionReason = e, this._socket.close()
                    }
                }, {
                    key: "addController",
                    value: function(e, t) {
                        null == this._controllers[e] && (this._controllers[e] = t)
                    }
                }, {
                    key: "removeController",
                    value: function(e) {
                        delete this._controllers[e]
                    }
                }, {
                    key: "send",
                    value: function(e) {
                        this._sfs.debug && this._logger.debug("OUTGOING MESSAGE: " + e.dump());
                        var t = this._protocolCodec.onPacketWrite(e);
                        this._socket.send(t)
                    }
                }, {
                    key: "_onSocketConnect",
                    value: function() {
                        this._scope._sfs.debug && this._scope._logger.debug("Socket connection established"), this._scope._isConnected = !0, this._scope._isConnecting = !1, this._scope.dispatchEvent(p.CONNECT, {
                            success: !0
                        })
                    }
                }, {
                    key: "_onSocketDisconnect",
                    value: function() {
                        this._scope._isConnected = !1, this._scope.isConnecting ? (this._scope._sfs.debug && this._scope._logger.debug("Can't establish socket connection"), this._scope._isConnecting = !1, this._scope.dispatchEvent(p.CONNECT, {
                            success: !1
                        })) : (this._scope._sfs.debug && this._scope._logger.debug("Socket disconnection occurred"), this._scope.dispatchEvent(p.DISCONNECT, {
                            reason: this._scope._disconnectionReason
                        }), this._scope._disconnectionReason = h.ClientDisconnectionReason.UNKNOWN)
                    }
                }, {
                    key: "_onSocketData",
                    value: function(e) {
                        var t = this._scope._protocolCodec.onPacketRead(e.data);
                        this._scope._sfs.debug && this._scope._logger.debug("INCOMING MESSAGE: " + t.dump()), this._scope.dispatchEvent(p.DATA, t)
                    }
                }, {
                    key: "_onSocketError",
                    value: function(e) {
                        this._scope.dispatchEvent(p.IOERROR, e.data)
                    }
                }, {
                    key: "isConnected",
                    get: function() {
                        return this._isConnected
                    }
                }, {
                    key: "isConnecting",
                    get: function() {
                        return this._isConnecting
                    }
                }, {
                    key: "maxMessageSize",
                    get: function() {
                        return this._protocolCodec.maxMessageSize
                    },
                    set: function(e) {
                        this._protocolCodec.maxMessageSize = e
                    }
                }, {
                    key: "compressionThreshold",
                    get: function() {
                        return this._protocolCodec.compressionThreshold
                    },
                    set: function(e) {
                        this._protocolCodec.compressionThreshold = e
                    }
                }]), t
            }(),
            g = function() {
                function e(t) {
                    y(this, e), this.CONTROLLER_ID = "c", this.ACTION_ID = "a", this.PARAM_ID = "p", this._maxMessageSize = 1e4, this._compressionThreshold = 1024, this._sfs = t, this._logger = f.Logger.instance, Object.seal(this)
                }
                return i(e, [{
                    key: "onPacketRead",
                    value: function(e) {
                        if (0 !== e.byteLength) {
                            var t = new s.default(e, 0, s.default.BIG_ENDIAN),
                                n = t.readUint8(),
                                r = (32 & n) > 0,
                                i = (8 & n) > 0 ? t.readUint32() : t.readUint16(),
                                o = t.readUint8Array(i);
                            r && (o = this.decompress(o)), this._sfs.debug && (e.byteLength > 1024 ? this._logger.debug("DATA READ - Binary size > 1024; dump omitted") : this._logger.debug("DATA READ - " + h.DumpFormatter.hexDump(o)));
                            var a = c.SFSObject.newFromBinaryData(o);
                            return new l.Message(a.get(this.ACTION_ID), a.get(this.CONTROLLER_ID), a.get(this.PARAM_ID))
                        }
                        this._logger.error("Unexpected empty packet data: no readable bytes available!")
                    }
                }, {
                    key: "onPacketWrite",
                    value: function(e) {
                        var t = new c.SFSObject;
                        t.put(this.CONTROLLER_ID, e.targetController, c.SFSDataType.BYTE), t.put(this.ACTION_ID, e.id, c.SFSDataType.SHORT), t.put(this.PARAM_ID, e.content, c.SFSDataType.SFS_OBJECT);
                        var n = t.toBinary(),
                            r = n.byteLength,
                            i = new s.default(new ArrayBuffer(0), 0, s.default.BIG_ENDIAN),
                            o = 128;
                        r > this.compressionThreshold && (o += 32, r = (n = this.compress(n)).byteLength);
                        var a = r > 65335;
                        a && (o += 8), i.writeUint8(o), a ? i.writeUint32(r) : i.writeUint16(r), i.writeUint8Array(n);
                        var u = new Uint8Array(i.buffer);
                        if (u.byteLength > this.maxMessageSize) throw new _.SFSError("Message size is too big: " + u.byteLength + "; the server limit is: " + this.maxMessageSize);
                        return this._sfs.debug && this._logger.debug("DATA WRITTEN - " + h.DumpFormatter.hexDump(u)), u
                    }
                }, {
                    key: "decompress",
                    value: function(e) {
                        return new a.Zlib.Inflate(e).decompress()
                    }
                }, {
                    key: "compress",
                    value: function(e) {
                        return new a.Zlib.Deflate(e).compress()
                    }
                }, {
                    key: "maxMessageSize",
                    get: function() {
                        return this._maxMessageSize
                    },
                    set: function(e) {
                        this._maxMessageSize = e
                    }
                }, {
                    key: "compressionThreshold",
                    get: function() {
                        return this._compressionThreshold
                    },
                    set: function(e) {
                        this._compressionThreshold = e
                    }
                }]), e
            }();
        t.SocketEvent = p, t.SocketEngine = d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ExtensionController = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(38),
            o = n(96);
        var s = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._sfs = t, this._logger = t.logger, this._id = 1, Object.freeze(this)
            }
            return r(e, [{
                key: "handleMessage",
                value: function(e, t) {
                    this._sfs.debug && this._logger.info("Handling Extension response");
                    var n = {};
                    n.cmd = e.get(o.ExtensionRequest.KEY_CMD), n.params = e.get(o.ExtensionRequest.KEY_PARAMS);
                    var r = e.get(o.ExtensionRequest.KEY_ROOM);
                    null != r && (n.room = this._sfs.roomManager.getRoomById(r)), this._sfs.dispatchEvent(i.SFSEvent.EXTENSION_RESPONSE, n)
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }]), e
        }();
        t.ExtensionController = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, null, [{
                key: "KEY_ROOM_ID",
                get: function() {
                    return "r"
                }
            }, {
                key: "KEY_ITEM_ID",
                get: function() {
                    return "i"
                }
            }, {
                key: "KEY_VAR_LIST",
                get: function() {
                    return "v"
                }
            }]), e
        }();
        t.SetMMOItemVariables = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MMOItem = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(72);
        var o = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._id = t, this._aoiEntryPoint = null, this._variables = new Map, Object.seal(this)
            }
            return r(e, [{
                key: "toString",
                value: function() {
                    return "[Item: " + this.id + "]"
                }
            }, {
                key: "getVariable",
                value: function(e) {
                    return this._variables.get(e)
                }
            }, {
                key: "containsVariable",
                value: function(e) {
                    return this._variables.has(e)
                }
            }, {
                key: "getVariables",
                value: function() {
                    return Array.from(this._variables.values())
                }
            }, {
                key: "_setVariables",
                value: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = i.value;
                            this._setVariable(s)
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "_setVariable",
                value: function(e) {
                    e.isNull ? this._variables.delete(e.name) : this._variables.set(e.name, e)
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "aoiEntryPoint",
                get: function() {
                    return this._aoiEntryPoint
                }
            }], [{
                key: "fromSFSArray",
                value: function(t) {
                    var n = new e(t.get(0)),
                        r = t.get(1);
                    if (null != r)
                        for (var o = 0; o < r.size(); o++) n._setVariable(i.MMOItemVariable.fromSFSArray(r.get(o)));
                    return n
                }
            }]), e
        }();
        t.MMOItem = o
    }, function(e, t) {
        ! function(e) {
            "use strict";

            function t(e, t, n) {
                return t <= e && e <= n
            }

            function n(e, t) {
                return Math.floor(e / t)
            }
            var r = -1,
                i = -1;

            function o(e, t) {
                if (e) throw new Error("EncodingError");
                return t || 65533
            }

            function s(e) {
                throw new Error("EncodingError")
            }

            function a(e) {
                if (e = String(e).trim().toLowerCase(), Object.prototype.hasOwnProperty.call(c, e)) return c[e];
                throw new Error("EncodingError: Unknown encoding: " + e)
            }
            var u = {},
                c = {};

            function l(e, t) {
                return (t || [])[e] || null
            }

            function f(e, t) {
                var n = t.indexOf(e);
                return -1 === n ? null : n
            } [{
                encodings: [{
                    labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
                    name: "utf-8"
                }],
                heading: "The Encoding"
            }, {
                encodings: [{
                    labels: ["cp864", "ibm864"],
                    name: "ibm864"
                }, {
                    labels: ["cp866", "ibm866"],
                    name: "ibm866"
                }, {
                    labels: ["csisolatin2", "iso-8859-2", "iso-ir-101", "iso8859-2", "iso_8859-2", "l2", "latin2"],
                    name: "iso-8859-2"
                }, {
                    labels: ["csisolatin3", "iso-8859-3", "iso_8859-3", "iso-ir-109", "l3", "latin3"],
                    name: "iso-8859-3"
                }, {
                    labels: ["csisolatin4", "iso-8859-4", "iso_8859-4", "iso-ir-110", "l4", "latin4"],
                    name: "iso-8859-4"
                }, {
                    labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso_8859-5", "iso-ir-144"],
                    name: "iso-8859-5"
                }, {
                    labels: ["arabic", "csisolatinarabic", "ecma-114", "iso-8859-6", "iso_8859-6", "iso-ir-127"],
                    name: "iso-8859-6"
                }, {
                    labels: ["csisolatingreek", "ecma-118", "elot_928", "greek", "greek8", "iso-8859-7", "iso_8859-7", "iso-ir-126"],
                    name: "iso-8859-7"
                }, {
                    labels: ["csisolatinhebrew", "hebrew", "iso-8859-8", "iso-8859-8-i", "iso-ir-138", "iso_8859-8", "visual"],
                    name: "iso-8859-8"
                }, {
                    labels: ["csisolatin6", "iso-8859-10", "iso-ir-157", "iso8859-10", "l6", "latin6"],
                    name: "iso-8859-10"
                }, {
                    labels: ["iso-8859-13"],
                    name: "iso-8859-13"
                }, {
                    labels: ["iso-8859-14", "iso8859-14"],
                    name: "iso-8859-14"
                }, {
                    labels: ["iso-8859-15", "iso_8859-15"],
                    name: "iso-8859-15"
                }, {
                    labels: ["iso-8859-16"],
                    name: "iso-8859-16"
                }, {
                    labels: ["koi8-r", "koi8_r"],
                    name: "koi8-r"
                }, {
                    labels: ["koi8-u"],
                    name: "koi8-u"
                }, {
                    labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
                    name: "macintosh"
                }, {
                    labels: ["iso-8859-11", "tis-620", "windows-874"],
                    name: "windows-874"
                }, {
                    labels: ["windows-1250", "x-cp1250"],
                    name: "windows-1250"
                }, {
                    labels: ["windows-1251", "x-cp1251"],
                    name: "windows-1251"
                }, {
                    labels: ["ascii", "ansi_x3.4-1968", "csisolatin1", "iso-8859-1", "iso8859-1", "iso_8859-1", "l1", "latin1", "us-ascii", "windows-1252"],
                    name: "windows-1252"
                }, {
                    labels: ["cp1253", "windows-1253"],
                    name: "windows-1253"
                }, {
                    labels: ["csisolatin5", "iso-8859-9", "iso-ir-148", "l5", "latin5", "windows-1254"],
                    name: "windows-1254"
                }, {
                    labels: ["cp1255", "windows-1255"],
                    name: "windows-1255"
                }, {
                    labels: ["cp1256", "windows-1256"],
                    name: "windows-1256"
                }, {
                    labels: ["windows-1257"],
                    name: "windows-1257"
                }, {
                    labels: ["cp1258", "windows-1258"],
                    name: "windows-1258"
                }, {
                    labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
                    name: "x-mac-cyrillic"
                }],
                heading: "Legacy single-byte encodings"
            }, {
                encodings: [{
                    labels: ["chinese", "csgb2312", "csiso58gb231280", "gb2312", "gbk", "gb_2312", "gb_2312-80", "iso-ir-58", "x-gbk"],
                    name: "gbk"
                }, {
                    labels: ["gb18030"],
                    name: "gb18030"
                }, {
                    labels: ["hz-gb-2312"],
                    name: "hz-gb-2312"
                }],
                heading: "Legacy multi-byte Chinese (simplified) encodings"
            }, {
                encodings: [{
                    labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
                    name: "big5"
                }],
                heading: "Legacy multi-byte Chinese (traditional) encodings"
            }, {
                encodings: [{
                    labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
                    name: "euc-jp"
                }, {
                    labels: ["csiso2022jp", "iso-2022-jp"],
                    name: "iso-2022-jp"
                }, {
                    labels: ["csshiftjis", "ms_kanji", "shift-jis", "shift_jis", "sjis", "windows-31j", "x-sjis"],
                    name: "shift_jis"
                }],
                heading: "Legacy multi-byte Japanese encodings"
            }, {
                encodings: [{
                    labels: ["cseuckr", "csksc56011987", "euc-kr", "iso-ir-149", "korean", "ks_c_5601-1987", "ks_c_5601-1989", "ksc5601", "ksc_5601", "windows-949"],
                    name: "euc-kr"
                }, {
                    labels: ["csiso2022kr", "iso-2022-kr"],
                    name: "iso-2022-kr"
                }],
                heading: "Legacy multi-byte Korean encodings"
            }, {
                encodings: [{
                    labels: ["utf-16", "utf-16le"],
                    name: "utf-16"
                }, {
                    labels: ["utf-16be"],
                    name: "utf-16be"
                }],
                heading: "Legacy utf-16 encodings"
            }].forEach(function(e) {
                e.encodings.forEach(function(e) {
                    u[e.name] = e, e.labels.forEach(function(t) {
                        c[t] = e
                    })
                })
            });
            var h = e["encoding-indexes"] || {};

            function _(e, n) {
                var s = n.fatal,
                    a = 0,
                    u = 0,
                    c = 0;
                this.decode = function(n) {
                    var f, _ = n.get();
                    if (_ === r && 0 === a && 0 === u && 0 === c) return i;
                    if (_ !== r || 0 === a && 0 === u && 0 === c || (a = 0, u = 0, c = 0, o(s)), n.offset(1), 0 !== c) return f = null, t(_, 48, 57) && (f = function(e) {
                        if (e > 39419 && e < 189e3 || e > 1237575) return null;
                        var t, n = 0,
                            r = 0,
                            i = h.gb18030;
                        for (t = 0; t < i.length; ++t) {
                            var o = i[t];
                            if (!(o[0] <= e)) break;
                            n = o[0], r = o[1]
                        }
                        return r + e - n
                    }(10 * (126 * (10 * (a - 129) + (u - 48)) + (c - 129)) + _ - 48)), a = 0, u = 0, c = 0, null === f ? (n.offset(-3), o(s)) : f;
                    if (0 !== u) return t(_, 129, 254) ? (c = _, null) : (n.offset(-2), a = 0, u = 0, o(s));
                    if (0 !== a) {
                        if (t(_, 48, 57) && e) return u = _, null;
                        var y = a,
                            p = null;
                        a = 0;
                        var d = _ < 127 ? 64 : 65;
                        return (t(_, 64, 126) || t(_, 128, 254)) && (p = 190 * (y - 129) + (_ - d)), f = null === p ? null : l(p, h.gbk), null === p && n.offset(-1), null === f ? o(s) : f
                    }
                    return t(_, 0, 127) ? _ : 128 === _ ? 8364 : t(_, 129, 254) ? (a = _, null) : o(s)
                }
            }

            function y(e, o) {
                o.fatal;
                this.encode = function(o, a) {
                    var u = a.get();
                    if (u === i) return r;
                    if (a.offset(1), t(u, 0, 127)) return o.emit(u);
                    var c = f(u, h.gbk);
                    if (null !== c) {
                        var l = n(c, 190) + 129,
                            _ = c % 190,
                            y = _ < 63 ? 64 : 65;
                        return o.emit(l, _ + y)
                    }
                    if (null === c && !e) return s();
                    var p = n(n(n(c = function(e) {
                            var t, n = 0,
                                r = 0,
                                i = h.gb18030;
                            for (t = 0; t < i.length; ++t) {
                                var o = i[t];
                                if (!(o[1] <= e)) break;
                                n = o[1], r = o[0]
                            }
                            return r + e - n
                        }(u), 10), 126), 10),
                        d = n(n(c -= 10 * p * 126 * 10, 10), 126),
                        g = n(c -= 10 * d * 126, 10),
                        v = c - 10 * g;
                    return o.emit(p + 129, d + 48, g + 129, v + 48)
                }
            }

            function p(e, n) {
                var s = n.fatal,
                    a = null,
                    u = null;
                this.decode = function(n) {
                    var c, l = n.get();
                    if (l === r && null === a && null === u) return i;
                    if (l === r && (null !== a || null !== u)) return o(s);
                    if (n.offset(1), null === a) return a = l, null;
                    if (c = e ? (a << 8) + l : (l << 8) + a, a = null, null !== u) {
                        var f = u;
                        return u = null, t(c, 56320, 57343) ? 65536 + 1024 * (f - 55296) + (c - 56320) : (n.offset(-2), o(s))
                    }
                    return t(c, 55296, 56319) ? (u = c, null) : t(c, 56320, 57343) ? o(s) : c
                }
            }

            function d(e, o) {
                o.fatal;
                this.encode = function(o, a) {
                    function u(t) {
                        var n = t >> 8,
                            r = 255 & t;
                        return e ? o.emit(n, r) : o.emit(r, n)
                    }
                    var c = a.get();
                    if (c === i) return r;
                    if (a.offset(1), t(c, 55296, 57343) && s(), c <= 65535) return u(c);
                    var l = (c - 65536) % 1024 + 56320;
                    return u(n(c - 65536, 1024) + 55296), u(l)
                }
            }
            u["utf-8"].getEncoder = function(e) {
                return new function(e) {
                    e.fatal, this.encode = function(e, o) {
                        var a, u, c = o.get();
                        if (c === i) return r;
                        if (o.offset(1), t(c, 55296, 57343)) return s();
                        if (t(c, 0, 127)) return e.emit(c);
                        t(c, 128, 2047) ? (a = 1, u = 192) : t(c, 2048, 65535) ? (a = 2, u = 224) : t(c, 65536, 1114111) && (a = 3, u = 240);
                        for (var l = e.emit(n(c, Math.pow(64, a)) + u); a > 0;) {
                            var f = n(c, Math.pow(64, a - 1));
                            l = e.emit(128 + f % 64), a -= 1
                        }
                        return l
                    }
                }(e)
            }, u["utf-8"].getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0,
                        a = 0,
                        u = 0,
                        c = 0;
                    this.decode = function(e) {
                        var l = e.get();
                        if (l === r) return 0 !== a ? o(n) : i;
                        if (e.offset(1), 0 === a) {
                            if (t(l, 0, 127)) return l;
                            if (t(l, 194, 223)) a = 1, c = 128, s = l - 192;
                            else if (t(l, 224, 239)) a = 2, c = 2048, s = l - 224;
                            else {
                                if (!t(l, 240, 244)) return o(n);
                                a = 3, c = 65536, s = l - 240
                            }
                            return s *= Math.pow(64, a), null
                        }
                        if (!t(l, 128, 191)) return s = 0, a = 0, u = 0, c = 0, e.offset(-1), o(n);
                        if (u += 1, s += (l - 128) * Math.pow(64, a - u), u !== a) return null;
                        var f = s,
                            h = c;
                        return s = 0, a = 0, u = 0, c = 0, t(f, h, 1114111) && !t(f, 55296, 57343) ? f : o(n)
                    }
                }(e)
            }, ["ibm864", "ibm866", "iso-8859-2", "iso-8859-3", "iso-8859-4", "iso-8859-5", "iso-8859-6", "iso-8859-7", "iso-8859-8", "iso-8859-10", "iso-8859-13", "iso-8859-14", "iso-8859-15", "iso-8859-16", "koi8-r", "koi8-u", "macintosh", "windows-874", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254", "windows-1255", "windows-1256", "windows-1257", "windows-1258", "x-mac-cyrillic"].forEach(function(e) {
                var n = u[e],
                    a = h[e];
                n.getDecoder = function(e) {
                    return new function(e, n) {
                        var s = n.fatal;
                        this.decode = function(n) {
                            var a = n.get();
                            if (a === r) return i;
                            if (n.offset(1), t(a, 0, 127)) return a;
                            var u = e[a - 128];
                            return null === u ? o(s) : u
                        }
                    }(a, e)
                }, n.getEncoder = function(e) {
                    return new function(e, n) {
                        n.fatal, this.encode = function(n, o) {
                            var a = o.get();
                            if (a === i) return r;
                            if (o.offset(1), t(a, 0, 127)) return n.emit(a);
                            var u = f(a, e);
                            return null === u && s(), n.emit(u + 128)
                        }
                    }(a, e)
                }
            }), u.gbk.getEncoder = function(e) {
                return new y(!1, e)
            }, u.gbk.getDecoder = function(e) {
                return new _(!1, e)
            }, u.gb18030.getEncoder = function(e) {
                return new y(!0, e)
            }, u.gb18030.getDecoder = function(e) {
                return new _(!0, e)
            }, u["hz-gb-2312"].getEncoder = function(e) {
                return new function(e) {
                    e.fatal;
                    var o = !1;
                    this.encode = function(e, a) {
                        var u = a.get();
                        if (u === i) return r;
                        if (a.offset(1), t(u, 0, 127) && o) return a.offset(-1), o = !1, e.emit(126, 125);
                        if (126 === u) return e.emit(126, 126);
                        if (t(u, 0, 127)) return e.emit(u);
                        if (!o) return a.offset(-1), o = !0, e.emit(126, 123);
                        var c = f(u, h.gbk);
                        if (null === c) return s();
                        var l = n(c, 190) + 1,
                            _ = c % 190 - 63;
                        return t(l, 33, 126) && t(_, 33, 126) ? e.emit(l, _) : s()
                    }
                }(e)
            }, u["hz-gb-2312"].getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = !1,
                        a = 0;
                    this.decode = function(e) {
                        var u = e.get();
                        if (u === r && 0 === a) return i;
                        if (u === r && 0 !== a) return a = 0, o(n);
                        if (e.offset(1), 126 === a) return a = 0, 123 === u ? (s = !0, null) : 125 === u ? (s = !1, null) : 126 === u ? 126 : 10 === u ? null : (e.offset(-1), o(n));
                        if (0 !== a) {
                            var c = a;
                            a = 0;
                            var f = null;
                            return t(u, 33, 126) && (f = l(190 * (c - 1) + (u + 63), h.gbk)), 10 === u && (s = !1), null === f ? o(n) : f
                        }
                        return 126 === u ? (a = 126, null) : s ? t(u, 32, 127) ? (a = u, null) : (10 === u && (s = !1), o(n)) : t(u, 0, 127) ? u : o(n)
                    }
                }(e)
            }, u.big5.getEncoder = function(e) {
                return new function(e) {
                    e.fatal, this.encode = function(e, o) {
                        var a = o.get();
                        if (a === i) return r;
                        if (o.offset(1), t(a, 0, 127)) return e.emit(a);
                        var u = f(a, h.big5);
                        if (null === u) return s();
                        var c = n(u, 157) + 129,
                            l = u % 157,
                            _ = l < 63 ? 64 : 98;
                        return e.emit(c, l + _)
                    }
                }(e)
            }, u.big5.getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0,
                        a = null;
                    this.decode = function(e) {
                        if (null !== a) {
                            var u = a;
                            return a = null, u
                        }
                        var c = e.get();
                        if (c === r && 0 === s) return i;
                        if (c === r && 0 !== s) return s = 0, o(n);
                        if (e.offset(1), 0 !== s) {
                            var f = s,
                                _ = null;
                            s = 0;
                            var y = c < 127 ? 64 : 98;
                            if ((t(c, 64, 126) || t(c, 161, 254)) && (_ = 157 * (f - 129) + (c - y)), 1133 === _) return a = 772, 202;
                            if (1135 === _) return a = 780, 202;
                            if (1164 === _) return a = 772, 234;
                            if (1166 === _) return a = 780, 234;
                            var p = null === _ ? null : l(_, h.big5);
                            return null === _ && e.offset(-1), null === p ? o(n) : p
                        }
                        return t(c, 0, 127) ? c : t(c, 129, 254) ? (s = c, null) : o(n)
                    }
                }(e)
            }, u["euc-jp"].getEncoder = function(e) {
                return new function(e) {
                    e.fatal, this.encode = function(e, o) {
                        var a = o.get();
                        if (a === i) return r;
                        if (o.offset(1), t(a, 0, 127)) return e.emit(a);
                        if (165 === a) return e.emit(92);
                        if (8254 === a) return e.emit(126);
                        if (t(a, 65377, 65439)) return e.emit(142, a - 65377 + 161);
                        var u = f(a, h.jis0208);
                        if (null === u) return s();
                        var c = n(u, 94) + 161,
                            l = u % 94 + 161;
                        return e.emit(c, l)
                    }
                }(e)
            }, u["euc-jp"].getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0,
                        a = 0;
                    this.decode = function(e) {
                        var u, c, f = e.get();
                        return f === r ? 0 === s && 0 === a ? i : (s = 0, a = 0, o(n)) : (e.offset(1), 0 !== a ? (u = a, a = 0, c = null, t(u, 161, 254) && t(f, 161, 254) && (c = l(94 * (u - 161) + f - 161, h.jis0212)), t(f, 161, 254) || e.offset(-1), null === c ? o(n) : c) : 142 === s && t(f, 161, 223) ? (s = 0, 65377 + f - 161) : 143 === s && t(f, 161, 254) ? (s = 0, a = f, null) : 0 !== s ? (u = s, s = 0, c = null, t(u, 161, 254) && t(f, 161, 254) && (c = l(94 * (u - 161) + f - 161, h.jis0208)), t(f, 161, 254) || e.offset(-1), null === c ? o(n) : c) : t(f, 0, 127) ? f : 142 === f || 143 === f || t(f, 161, 254) ? (s = f, null) : o(n))
                    }
                }(e)
            }, u["iso-2022-jp"].getEncoder = function(e) {
                return new function(e) {
                    e.fatal;
                    var o = 0,
                        a = 1,
                        u = 2,
                        c = o;
                    this.encode = function(e, l) {
                        var _ = l.get();
                        if (_ === i) return r;
                        if (l.offset(1), (t(_, 0, 127) || 165 === _ || 8254 === _) && c !== o) return l.offset(-1), c = o, e.emit(27, 40, 66);
                        if (t(_, 0, 127)) return e.emit(_);
                        if (165 === _) return e.emit(92);
                        if (8254 === _) return e.emit(126);
                        if (t(_, 65377, 65439) && c !== u) return l.offset(-1), c = u, e.emit(27, 40, 73);
                        if (t(_, 65377, 65439)) return e.emit(_ - 65377 - 33);
                        if (c !== a) return l.offset(-1), c = a, e.emit(27, 36, 66);
                        var y = f(_, h.jis0208);
                        if (null === y) return s();
                        var p = n(y, 94) + 33,
                            d = y % 94 + 33;
                        return e.emit(p, d)
                    }
                }(e)
            }, u["iso-2022-jp"].getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0,
                        a = 1,
                        u = 2,
                        c = 3,
                        f = 4,
                        _ = 5,
                        y = 6,
                        p = s,
                        d = !1,
                        g = 0;
                    this.decode = function(e) {
                        var v = e.get();
                        switch (v !== r && e.offset(1), p) {
                            default:
                            case s:
                                return 27 === v ? (p = a, null) : t(v, 0, 127) ? v : v === r ? i : o(n);
                            case a:
                                return 36 === v || 40 === v ? (g = v, p = u, null) : (v !== r && e.offset(-1), p = s, o(n));
                            case u:
                                var b = g;
                                return g = 0, 36 !== b || 64 !== v && 66 !== v ? 36 === b && 40 === v ? (p = c, null) : 40 !== b || 66 !== v && 74 !== v ? 40 === b && 73 === v ? (p = y, null) : (v === r ? e.offset(-1) : e.offset(-2), p = s, o(n)) : (p = s, null) : (d = !1, p = f, null);
                            case c:
                                return 68 === v ? (d = !0, p = f, null) : (v === r ? e.offset(-2) : e.offset(-3), p = s, o(n));
                            case f:
                                return 10 === v ? (p = s, o(n, 10)) : 27 === v ? (p = a, null) : v === r ? i : (g = v, p = _, null);
                            case _:
                                if (p = f, v === r) return o(n);
                                var m = null,
                                    S = 94 * (g - 33) + v - 33;
                                return t(g, 33, 126) && t(v, 33, 126) && (m = l(S, !1 === d ? h.jis0208 : h.jis0212)), null === m ? o(n) : m;
                            case y:
                                return 27 === v ? (p = a, null) : t(v, 33, 95) ? 65377 + v - 33 : v === r ? i : o(n)
                        }
                    }
                }(e)
            }, u.shift_jis.getEncoder = function(e) {
                return new function(e) {
                    e.fatal, this.encode = function(e, o) {
                        var a = o.get();
                        if (a === i) return r;
                        if (o.offset(1), t(a, 0, 128)) return e.emit(a);
                        if (165 === a) return e.emit(92);
                        if (8254 === a) return e.emit(126);
                        if (t(a, 65377, 65439)) return e.emit(a - 65377 + 161);
                        var u = f(a, h.jis0208);
                        if (null === u) return s();
                        var c = n(u, 188),
                            l = c < 31 ? 129 : 193,
                            _ = u % 188,
                            y = _ < 63 ? 64 : 65;
                        return e.emit(c + l, _ + y)
                    }
                }(e)
            }, u.shift_jis.getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0;
                    this.decode = function(e) {
                        var a = e.get();
                        if (a === r && 0 === s) return i;
                        if (a === r && 0 !== s) return s = 0, o(n);
                        if (e.offset(1), 0 !== s) {
                            var u = s;
                            if (s = 0, t(a, 64, 126) || t(a, 128, 252)) {
                                var c = l(188 * (u - (u < 160 ? 129 : 193)) + a - (a < 127 ? 64 : 65), h.jis0208);
                                return null === c ? o(n) : c
                            }
                            return e.offset(-1), o(n)
                        }
                        return t(a, 0, 128) ? a : t(a, 161, 223) ? 65377 + a - 161 : t(a, 129, 159) || t(a, 224, 252) ? (s = a, null) : o(n)
                    }
                }(e)
            }, u["euc-kr"].getEncoder = function(e) {
                return new function(e) {
                    e.fatal, this.encode = function(e, o) {
                        var a = o.get();
                        if (a === i) return r;
                        if (o.offset(1), t(a, 0, 127)) return e.emit(a);
                        var u, c, l = f(a, h["euc-kr"]);
                        if (null === l) return s();
                        if (l < 12460) {
                            u = n(l, 178) + 129;
                            var _ = (c = l % 178) < 26 ? 65 : c < 52 ? 71 : 77;
                            return e.emit(u, c + _)
                        }
                        return u = n(l -= 12460, 94) + 199, c = l % 94 + 161, e.emit(u, c)
                    }
                }(e)
            }, u["euc-kr"].getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0;
                    this.decode = function(e) {
                        var a = e.get();
                        if (a === r && 0 === s) return i;
                        if (a === r && 0 !== s) return s = 0, o(n);
                        if (e.offset(1), 0 !== s) {
                            var u = s,
                                c = null;
                            if (s = 0, t(u, 129, 198)) {
                                var f = 178 * (u - 129);
                                t(a, 65, 90) ? c = f + a - 65 : t(a, 97, 122) ? c = f + 26 + a - 97 : t(a, 129, 254) && (c = f + 26 + 26 + a - 129)
                            }
                            t(u, 199, 253) && t(a, 161, 254) && (c = 12460 + 94 * (u - 199) + (a - 161));
                            var _ = null === c ? null : l(c, h["euc-kr"]);
                            return null === c && e.offset(-1), null === _ ? o(n) : _
                        }
                        return t(a, 0, 127) ? a : t(a, 129, 253) ? (s = a, null) : o(n)
                    }
                }(e)
            }, u["iso-2022-kr"].getEncoder = function(e) {
                return new function(e) {
                    e.fatal;
                    var o = 0,
                        a = 1,
                        u = !1,
                        c = o;
                    this.encode = function(e, l) {
                        var _ = l.get();
                        if (_ === i) return r;
                        if (u || (u = !0, e.emit(27, 36, 41, 67)), l.offset(1), t(_, 0, 127) && c !== o) return l.offset(-1), c = o, e.emit(15);
                        if (t(_, 0, 127)) return e.emit(_);
                        if (c !== a) return l.offset(-1), c = a, e.emit(14);
                        var y, p, d = f(_, h["euc-kr"]);
                        return null === d ? s() : d < 12460 ? (p = d % 178 - 26 - 26 + 1, t(y = n(d, 178) + 1, 33, 70) && t(p, 33, 126) ? e.emit(y, p) : s()) : (p = (d -= 12460) % 94 + 33, t(y = n(d, 94) + 71, 71, 126) && t(p, 33, 126) ? e.emit(y, p) : s())
                    }
                }(e)
            }, u["iso-2022-kr"].getDecoder = function(e) {
                return new function(e) {
                    var n = e.fatal,
                        s = 0,
                        a = 1,
                        u = 2,
                        c = 3,
                        f = 4,
                        _ = 5,
                        y = s,
                        p = 0;
                    this.decode = function(e) {
                        var d = e.get();
                        switch (d !== r && e.offset(1), y) {
                            default:
                            case s:
                                return 14 === d ? (y = f, null) : 15 === d ? null : 27 === d ? (y = a, null) : t(d, 0, 127) ? d : d === r ? i : o(n);
                            case a:
                                return 36 === d ? (y = u, null) : (d !== r && e.offset(-1), y = s, o(n));
                            case u:
                                return 41 === d ? (y = c, null) : (d === r ? e.offset(-1) : e.offset(-2), y = s, o(n));
                            case c:
                                return 67 === d ? (y = s, null) : (d === r ? e.offset(-2) : e.offset(-3), y = s, o(n));
                            case f:
                                return 10 === d ? (y = s, o(n, 10)) : 14 === d ? null : 15 === d ? (y = s, null) : d === r ? i : (p = d, y = _, null);
                            case _:
                                if (y = f, d === r) return o(n);
                                var g = null;
                                return t(p, 33, 70) && t(d, 33, 126) ? g = l(178 * (p - 1) + 26 + 26 + d - 1, h["euc-kr"]) : t(p, 71, 126) && t(d, 33, 126) && (g = l(12460 + 94 * (p - 71) + (d - 33), h["euc-kr"])), null !== g ? g : o(n)
                        }
                    }
                }(e)
            }, u["utf-16"].getEncoder = function(e) {
                return new d(!1, e)
            }, u["utf-16"].getDecoder = function(e) {
                return new p(!1, e)
            }, u["utf-16be"].getEncoder = function(e) {
                return new d(!0, e)
            }, u["utf-16be"].getDecoder = function(e) {
                return new p(!0, e)
            };
            var g = "utf-8";

            function v(t, n) {
                return this && this !== e ? (t = t ? String(t) : g, n = Object(n), this._encoding = a(t), this._streaming = !1, this._encoder = null, this._options = {
                    fatal: Boolean(n.fatal)
                }, Object.defineProperty ? Object.defineProperty(this, "encoding", {
                    get: function() {
                        return this._encoding.name
                    }
                }) : this.encoding = this._encoding.name, this) : new v(t, n)
            }

            function b(t, n) {
                return this && this !== e ? (t = t ? String(t) : g, n = Object(n), this._encoding = a(t), this._streaming = !1, this._decoder = null, this._options = {
                    fatal: Boolean(n.fatal)
                }, Object.defineProperty ? Object.defineProperty(this, "encoding", {
                    get: function() {
                        return this._encoding.name
                    }
                }) : this.encoding = this._encoding.name, this) : new b(t, n)
            }
            v.prototype = {
                encode: function(e, n) {
                    e = e ? String(e) : "", n = Object(n), this._streaming || (this._encoder = this._encoding.getEncoder(this._options)), this._streaming = Boolean(n.stream);
                    for (var o = [], s = new function(e) {
                            var t = 0;
                            this.emit = function(n) {
                                var i, o = r;
                                for (i = 0; i < arguments.length; ++i) o = Number(arguments[i]), e[t++] = o;
                                return o
                            }
                        }(o), a = new function(e) {
                            var n = 0,
                                r = function() {
                                    for (var n = [], r = 0, i = e.length; r < e.length;) {
                                        var o = e.charCodeAt(r);
                                        if (t(o, 55296, 57343))
                                            if (t(o, 56320, 57343)) n.push(65533);
                                            else if (r === i - 1) n.push(65533);
                                        else {
                                            var s = e.charCodeAt(r + 1);
                                            if (t(s, 56320, 57343)) {
                                                var a = 1023 & o,
                                                    u = 1023 & s;
                                                r += 1, n.push(65536 + (a << 10) + u)
                                            } else n.push(65533)
                                        } else n.push(o);
                                        r += 1
                                    }
                                    return n
                                }();
                            this.offset = function(e) {
                                if ((n += e) < 0) throw new Error("Seeking past start of the buffer");
                                if (n > r.length) throw new Error("Seeking past EOF")
                            }, this.get = function() {
                                return n >= r.length ? i : r[n]
                            }
                        }(e); a.get() !== i;) this._encoder.encode(s, a);
                    if (!this._streaming) {
                        var u;
                        do {
                            u = this._encoder.encode(s, a)
                        } while (u !== r);
                        this._encoder = null
                    }
                    return new Uint8Array(o)
                }
            }, b.prototype = {
                decode: function(e, t) {
                    if (e && !("buffer" in e && "byteOffset" in e && "byteLength" in e)) throw new TypeError("Expected ArrayBufferView");
                    e || (e = new Uint8Array(0)), t = Object(t), this._streaming || (this._decoder = this._encoding.getDecoder(this._options)), this._streaming = Boolean(t.stream);
                    var n = new function(e) {
                        var t = 0;
                        this.get = function() {
                            return t >= e.length ? r : Number(e[t])
                        }, this.offset = function(n) {
                            if ((t += n) < 0) throw new Error("Seeking past start of the buffer");
                            if (t > e.length) throw new Error("Seeking past EOF")
                        }, this.match = function(n) {
                            if (n.length > t + e.length) return !1;
                            var r;
                            for (r = 0; r < n.length; r += 1)
                                if (Number(e[t + r]) !== n[r]) return !1;
                            return !0
                        }
                    }(new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
                    if (a(function(e, t) {
                            return t.match([255, 254]) ? (t.offset(2), "utf-16") : t.match([254, 255]) ? (t.offset(2), "utf-16be") : t.match([239, 187, 191]) ? (t.offset(3), "utf-8") : e
                        }(this._encoding.name, n)) !== this._encoding) throw new Error("BOM mismatch");
                    for (var o, s = new function() {
                            var e = "";
                            this.string = function() {
                                return e
                            }, this.emit = function(t) {
                                t <= 65535 ? e += String.fromCharCode(t) : (t -= 65536, e += String.fromCharCode(55296 + (t >> 10 & 1023)), e += String.fromCharCode(56320 + (1023 & t)))
                            }
                        }; n.get() !== r;) null !== (o = this._decoder.decode(n)) && o !== i && s.emit(o);
                    if (!this._streaming) {
                        do {
                            null !== (o = this._decoder.decode(n)) && o !== i && s.emit(o)
                        } while (o !== i);
                        this._decoder = null
                    }
                    return s.string()
                }
            }, e.TextEncoder = e.TextEncoder || v, e.TextDecoder = e.TextDecoder || b
        }(this)
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SFSDataSerializer = void 0;
        var r, i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(120),
            s = (r = o) && r.__esModule ? r : {
                default: r
            },
            a = n(170),
            u = n(8);
        var c = Symbol(),
            l = Symbol(),
            f = function() {
                function e(t) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), t !== l) throw "SFSDataSerializer is a singleton class; you can't instantiate it"
                }
                return i(e, [{
                    key: "object2binary",
                    value: function(e) {
                        var t = new s.default(new ArrayBuffer(0), 0, s.default.BIG_ENDIAN);
                        return t.writeInt8(u.SFSDataType.SFS_OBJECT), t.writeInt16(e.size()), this.obj2bin(e, t), new Uint8Array(t.buffer)
                    }
                }, {
                    key: "obj2bin",
                    value: function(e, t) {
                        var n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, s = e.keys()[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                var a = o.value,
                                    u = e.getWrappedItem(a);
                                this.encodeSFSObjectKey(t, a), this.encodeObject(t, u)
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    }
                }, {
                    key: "array2binary",
                    value: function(e) {
                        var t = new s.default(new ArrayBuffer(0), 0, s.default.BIG_ENDIAN);
                        return t.writeInt8(u.SFSDataType.SFS_ARRAY), t.writeInt16(e.size()), this.arr2bin(e, t), new Uint8Array(t.buffer)
                    }
                }, {
                    key: "arr2bin",
                    value: function(e, t) {
                        for (var n = 0; n < e.size(); n++) {
                            var r = e.getWrappedItem(n);
                            this.encodeObject(t, r)
                        }
                    }
                }, {
                    key: "encodeSFSObjectKey",
                    value: function(e, t) {
                        e.writeInt16(t.length), e.writeUint8Array(new a.TextEncoder("utf-8").encode(t))
                    }
                }, {
                    key: "encodeObject",
                    value: function(e, t) {
                        var n = t.type;
                        if (n === u.SFSDataType.NULL) this.binEncode_NULL(e, t);
                        else if (n === u.SFSDataType.BOOL) this.binEncode_BOOL(e, t);
                        else if (n === u.SFSDataType.BOOL_ARRAY) this.binEncode_BOOL_ARRAY(e, t);
                        else if (n === u.SFSDataType.BYTE) this.binEncode_BYTE(e, t);
                        else if (n === u.SFSDataType.BYTE_ARRAY) this.binEncode_BYTE_ARRAY(e, t);
                        else if (n === u.SFSDataType.SHORT) this.binEncode_SHORT(e, t);
                        else if (n === u.SFSDataType.SHORT_ARRAY) this.binEncode_SHORT_ARRAY(e, t);
                        else if (n === u.SFSDataType.INT) this.binEncode_INT(e, t);
                        else if (n === u.SFSDataType.INT_ARRAY) this.binEncode_INT_ARRAY(e, t);
                        else if (n === u.SFSDataType.LONG) this.binEncode_LONG(e, t);
                        else if (n === u.SFSDataType.LONG_ARRAY) this.binEncode_LONG_ARRAY(e, t);
                        else if (n === u.SFSDataType.FLOAT) this.binEncode_FLOAT(e, t);
                        else if (n === u.SFSDataType.FLOAT_ARRAY) this.binEncode_FLOAT_ARRAY(e, t);
                        else if (n === u.SFSDataType.DOUBLE) this.binEncode_DOUBLE(e, t);
                        else if (n === u.SFSDataType.DOUBLE_ARRAY) this.binEncode_DOUBLE_ARRAY(e, t);
                        else if (n === u.SFSDataType.UTF_STRING) this.binEncode_UTF_STRING(e, t);
                        else if (n === u.SFSDataType.TEXT) this.binEncode_TEXT(e, t);
                        else if (n === u.SFSDataType.UTF_STRING_ARRAY) this.binEncode_UTF_STRING_ARRAY(e, t);
                        else if (n === u.SFSDataType.SFS_ARRAY) e.writeUint8Array(this.array2binary(t.value));
                        else {
                            if (n !== u.SFSDataType.SFS_OBJECT) throw "Unknow SFSDataType ID: " + n;
                            e.writeUint8Array(this.object2binary(t.value))
                        }
                        return e
                    }
                }, {
                    key: "binEncode_NULL",
                    value: function(e, t) {
                        e.writeUint8(t.type)
                    }
                }, {
                    key: "binEncode_BOOL",
                    value: function(e, t) {
                        e.writeUint8(t.type), e.writeUint8(t.value ? 1 : 0)
                    }
                }, {
                    key: "binEncode_BOOL_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) e.writeUint8(n[r] ? 1 : 0)
                    }
                }, {
                    key: "binEncode_BYTE",
                    value: function(e, t) {
                        e.writeUint8(t.type), e.writeUint8(t.value)
                    }
                }, {
                    key: "binEncode_BYTE_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint32(n.length), e.writeUint8Array(n)
                    }
                }, {
                    key: "binEncode_SHORT",
                    value: function(e, t) {
                        e.writeUint8(t.type), e.writeUint16(t.value)
                    }
                }, {
                    key: "binEncode_SHORT_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) e.writeUint16(n[r])
                    }
                }, {
                    key: "binEncode_INT",
                    value: function(e, t) {
                        e.writeUint8(t.type), e.writeUint32(t.value)
                    }
                }, {
                    key: "binEncode_INT_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) e.writeUint32(n[r])
                    }
                }, {
                    key: "binEncode_LONG",
                    value: function(e, t) {
                        var n = t.value,
                            r = Math.floor(n / Math.pow(2, 32)),
                            i = n % Math.pow(2, 32);
                        e.writeUint8(t.type), e.writeInt32(r), e.writeInt32(i)
                    }
                }, {
                    key: "binEncode_LONG_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = Math.floor(i / Math.pow(2, 32)),
                                s = i % Math.pow(2, 32);
                            e.writeInt32(o), e.writeInt32(s)
                        }
                    }
                }, {
                    key: "binEncode_FLOAT",
                    value: function(e, t) {
                        e.writeUint8(t.type), e.writeFloat32(t.value)
                    }
                }, {
                    key: "binEncode_FLOAT_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) e.writeFloat32(n[r])
                    }
                }, {
                    key: "binEncode_DOUBLE",
                    value: function(e, t) {
                        e.writeUint8(t.type), e.writeFloat64(t.value)
                    }
                }, {
                    key: "binEncode_DOUBLE_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) e.writeFloat64(n[r])
                    }
                }, {
                    key: "binEncode_UTF_STRING",
                    value: function(e, t) {
                        var n = new a.TextEncoder("utf-8").encode(t.value);
                        e.writeUint8(t.type), e.writeUint16(n.length), e.writeUint8Array(n)
                    }
                }, {
                    key: "binEncode_TEXT",
                    value: function(e, t) {
                        var n = new a.TextEncoder("utf-8").encode(t.value);
                        e.writeUint8(t.type), e.writeUint32(n.length), e.writeUint8Array(n)
                    }
                }, {
                    key: "binEncode_UTF_STRING_ARRAY",
                    value: function(e, t) {
                        var n = t.value;
                        e.writeUint8(t.type), e.writeUint16(n.length);
                        for (var r = 0; r < n.length; r++) {
                            var i = new a.TextEncoder("utf-8").encode(n[r]);
                            e.writeUint16(i.byteLength), e.writeUint8Array(i)
                        }
                    }
                }, {
                    key: "binary2object",
                    value: function(e) {
                        if (e.byteLength < 3) throw "Can't decode an SFSObject. Byte data is insufficient. Size: " + e.byteLength + " bytes";
                        return this.decodeSFSObject(new s.default(e, 0, s.default.BIG_ENDIAN))
                    }
                }, {
                    key: "binary2array",
                    value: function(e) {
                        if (e.byteLength < 3) throw "Can't decode an SFSArray. Byte data is insufficient. Size: " + e.byteLength + " bytes";
                        return this.decodeSFSArray(new s.default(e, 0, s.default.BIG_ENDIAN))
                    }
                }, {
                    key: "decodeSFSObject",
                    value: function(e) {
                        var t = new u.SFSObject,
                            n = e.readUint8();
                        if (n !== u.SFSDataType.SFS_OBJECT) throw "Invalid SFSDataType. Expected: " + u.SFSDataType.SFS_OBJECT + ", found: " + n;
                        var r = e.readUint16();
                        if (r < 0) throw "Can't decode SFSObject. Size is negative: " + r;
                        try {
                            for (var i = 0; i < r; i++) {
                                var o = e.readUint16();
                                if (o < 0 || o > 255) throw "Invalid SFSObject key length. Found: " + o;
                                var s = e.readUint8Array(o),
                                    a = String.fromCharCode.apply(String, s),
                                    c = this.decodeObject(e);
                                if (null == c) throw "Could not decode value for key: " + a;
                                t.put(a, c.value, c.type, !0)
                            }
                        } catch (e) {
                            throw e
                        }
                        return t
                    }
                }, {
                    key: "decodeSFSArray",
                    value: function(e) {
                        var t = new u.SFSArray,
                            n = e.readUint8();
                        if (n !== u.SFSDataType.SFS_ARRAY) throw "Invalid SFSDataType. Expected: " + u.SFSDataType.SFS_ARRAY + ", found: " + n;
                        var r = e.readInt16();
                        if (r < 0) throw "Can't decode SFSArray. Size is negative: " + r;
                        try {
                            for (var i = 0; i < r; i++) {
                                var o = this.decodeObject(e);
                                if (null == o) throw "Could not decode value for index: " + i;
                                t.add(o.value, o.type, !0)
                            }
                        } catch (e) {
                            throw e
                        }
                        return t
                    }
                }, {
                    key: "decodeObject",
                    value: function(e) {
                        var t = null,
                            n = e.readUint8();
                        if (n === u.SFSDataType.NULL) t = this.binDecode_NULL(e);
                        else if (n === u.SFSDataType.BOOL) t = this.binDecode_BOOL(e);
                        else if (n === u.SFSDataType.BOOL_ARRAY) t = this.binDecode_BOOL_ARRAY(e);
                        else if (n === u.SFSDataType.BYTE) t = this.binDecode_BYTE(e);
                        else if (n === u.SFSDataType.BYTE_ARRAY) t = this.binDecode_BYTE_ARRAY(e);
                        else if (n === u.SFSDataType.SHORT) t = this.binDecode_SHORT(e);
                        else if (n === u.SFSDataType.SHORT_ARRAY) t = this.binDecode_SHORT_ARRAY(e);
                        else if (n === u.SFSDataType.INT) t = this.binDecode_INT(e);
                        else if (n === u.SFSDataType.INT_ARRAY) t = this.binDecode_INT_ARRAY(e);
                        else if (n === u.SFSDataType.LONG) t = this.binDecode_LONG(e);
                        else if (n === u.SFSDataType.LONG_ARRAY) t = this.binDecode_LONG_ARRAY(e);
                        else if (n === u.SFSDataType.FLOAT) t = this.binDecode_FLOAT(e);
                        else if (n === u.SFSDataType.FLOAT_ARRAY) t = this.binDecode_FLOAT_ARRAY(e);
                        else if (n === u.SFSDataType.DOUBLE) t = this.binDecode_DOUBLE(e);
                        else if (n === u.SFSDataType.DOUBLE_ARRAY) t = this.binDecode_DOUBLE_ARRAY(e);
                        else if (n === u.SFSDataType.UTF_STRING) t = this.binDecode_UTF_STRING(e);
                        else if (n === u.SFSDataType.TEXT) t = this.binDecode_TEXT(e);
                        else if (n === u.SFSDataType.UTF_STRING_ARRAY) t = this.binDecode_UTF_STRING_ARRAY(e);
                        else if (n === u.SFSDataType.SFS_ARRAY) {
                            e.seek(e.position - 1);
                            var r = this.decodeSFSArray(e);
                            t = new u.SFSDataWrapper(n, r)
                        } else {
                            if (n !== u.SFSDataType.SFS_OBJECT) throw "Unknow SFSDataType ID: " + n;
                            e.seek(e.position - 1);
                            var i = this.decodeSFSObject(e);
                            t = new u.SFSDataWrapper(n, i)
                        }
                        return t
                    }
                }, {
                    key: "binDecode_NULL",
                    value: function(e) {
                        return new u.SFSDataWrapper(u.SFSDataType.NULL, null)
                    }
                }, {
                    key: "binDecode_BOOL",
                    value: function(e) {
                        var t = e.readUint8(),
                            n = null;
                        if (0 === t) n = !1;
                        else {
                            if (1 !== t) throw "Error decoding Bool type. Illegal value: " + t;
                            n = !0
                        }
                        return new u.SFSDataWrapper(u.SFSDataType.BOOL, n)
                    }
                }, {
                    key: "binDecode_BOOL_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) {
                            var i = e.readUint8(),
                                o = null;
                            if (0 === i) o = !1;
                            else {
                                if (1 !== i) throw "Error decoding Bool type. Illegal value: " + i;
                                o = !0
                            }
                            n.push(o)
                        }
                        return new u.SFSDataWrapper(u.SFSDataType.BOOL_ARRAY, n)
                    }
                }, {
                    key: "binDecode_BYTE",
                    value: function(e) {
                        var t = e.readUint8();
                        return new u.SFSDataWrapper(u.SFSDataType.BYTE, t)
                    }
                }, {
                    key: "binDecode_BYTE_ARRAY",
                    value: function(e) {
                        var t = e.readInt32();
                        if (t < 0) throw "Error decoding typed array size. Negative size: " + t;
                        for (var n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.readUint8();
                        return new u.SFSDataWrapper(u.SFSDataType.BYTE_ARRAY, n)
                    }
                }, {
                    key: "binDecode_SHORT",
                    value: function(e) {
                        var t = e.readInt16();
                        return new u.SFSDataWrapper(u.SFSDataType.SHORT, t)
                    }
                }, {
                    key: "binDecode_SHORT_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) n.push(e.readInt16());
                        return new u.SFSDataWrapper(u.SFSDataType.SHORT_ARRAY, n)
                    }
                }, {
                    key: "binDecode_INT",
                    value: function(e) {
                        var t = e.readInt32();
                        return new u.SFSDataWrapper(u.SFSDataType.INT, t)
                    }
                }, {
                    key: "binDecode_INT_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) n.push(e.readInt32());
                        return new u.SFSDataWrapper(u.SFSDataType.INT_ARRAY, n)
                    }
                }, {
                    key: "binDecode_LONG",
                    value: function(e) {
                        var t = e.readInt32(),
                            n = e.readUint32(),
                            r = t * Math.pow(2, 32) + n;
                        return new u.SFSDataWrapper(u.SFSDataType.LONG, r)
                    }
                }, {
                    key: "binDecode_LONG_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) {
                            var i = e.readInt32(),
                                o = e.readUint32(),
                                s = i * Math.pow(2, 32) + o;
                            n.push(s)
                        }
                        return new u.SFSDataWrapper(u.SFSDataType.LONG_ARRAY, n)
                    }
                }, {
                    key: "binDecode_FLOAT",
                    value: function(e) {
                        var t = e.readFloat32();
                        return new u.SFSDataWrapper(u.SFSDataType.FLOAT, t)
                    }
                }, {
                    key: "binDecode_FLOAT_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) n.push(e.readFloat32());
                        return new u.SFSDataWrapper(u.SFSDataType.FLOAT_ARRAY, n)
                    }
                }, {
                    key: "binDecode_DOUBLE",
                    value: function(e) {
                        var t = e.readFloat64();
                        return new u.SFSDataWrapper(u.SFSDataType.DOUBLE, t)
                    }
                }, {
                    key: "binDecode_DOUBLE_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) n.push(e.readFloat64());
                        return new u.SFSDataWrapper(u.SFSDataType.DOUBLE_ARRAY, n)
                    }
                }, {
                    key: "binDecode_UTF_STRING",
                    value: function(e) {
                        var t = e.readInt16();
                        if (t < 0) throw "Error decoding UTF_STRING. Negative size: " + t;
                        var n = e.readUint8Array(t),
                            r = new a.TextDecoder("utf-8").decode(n);
                        return new u.SFSDataWrapper(u.SFSDataType.UTF_STRING, r)
                    }
                }, {
                    key: "binDecode_UTF_STRING_ARRAY",
                    value: function(e) {
                        for (var t = this.getTypedArraySize(e), n = [], r = 0; r < t; r++) {
                            var i = e.readInt16();
                            if (i < 0) throw "Error decoding UTF_STRING. Negative size: " + i;
                            var o = e.readUint8Array(i),
                                s = new a.TextDecoder("utf-8").decode(o);
                            n.push(s)
                        }
                        return new u.SFSDataWrapper(u.SFSDataType.UTF_STRING_ARRAY, n)
                    }
                }, {
                    key: "binDecode_TEXT",
                    value: function(e) {
                        var t = e.readInt32();
                        if (t < 0) throw "Error decoding TEXT. Negative size: " + t;
                        var n = e.readUint8Array(t),
                            r = new a.TextDecoder("utf-8").decode(n);
                        return new u.SFSDataWrapper(u.SFSDataType.TEXT, r)
                    }
                }, {
                    key: "getTypedArraySize",
                    value: function(e) {
                        var t = e.readUint16();
                        if (t < 0) throw "Error decoding typed array size. Negative size: " + t;
                        return t
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this[c] || (this[c] = new e(l)), Object.seal(this[c])
                    }
                }]), e
            }();
        t.SFSDataSerializer = f
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SystemController = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(2),
            o = n(38),
            s = n(73),
            a = n(8),
            u = n(10),
            c = n(47),
            l = n(169),
            f = n(57),
            h = n(71),
            _ = n(58),
            y = n(49),
            p = n(72),
            d = n(46),
            g = n(51),
            v = n(118),
            b = n(116),
            m = n(115),
            S = n(70),
            E = n(114),
            R = n(113),
            O = n(112),
            A = n(69),
            w = n(111),
            I = n(110),
            M = n(109),
            T = n(108),
            k = n(107),
            P = n(106),
            F = n(105),
            N = n(104),
            j = n(68),
            U = n(168),
            B = n(103),
            L = n(102),
            D = n(101),
            Y = n(100),
            C = n(99),
            x = n(98),
            q = n(97);
        var V = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._sfs = t, this._logger = t.logger, this._id = 0, this._messageHandlers = new Map, this._initMessageHandlers(), Object.freeze(this)
            }
            return r(e, null, [{
                key: "KEY_ERROR_CODE",
                get: function() {
                    return "ec"
                }
            }, {
                key: "KEY_ERROR_PARAMS",
                get: function() {
                    return "ep"
                }
            }, {
                key: "ROOM_PARAM",
                get: function() {
                    return "r"
                }
            }, {
                key: "USER_PARAM",
                get: function() {
                    return "u"
                }
            }, {
                key: "USER_COUNT_PARAM",
                get: function() {
                    return "uc"
                }
            }, {
                key: "SPECT_COUNT_PARAM",
                get: function() {
                    return "sc"
                }
            }, {
                key: "DISCONNECTION_REASON_PARAM",
                get: function() {
                    return "dr"
                }
            }]), r(e, [{
                key: "handleMessage",
                value: function(e, t) {
                    var n = this._messageHandlers.get(t);
                    null != n ? (this._sfs.debug && this._logger.info("Handling server event: " + n.name + " (" + t + ")"), n.handler.call(this, e)) : this._logger.warn("Unknown server event received; id: " + t)
                }
            }, {
                key: "_initMessageHandlers",
                value: function() {
                    this._setHandler(i.Requests.Handshake, this._fnHandshake), this._setHandler(i.Requests.Login, this._fnLogin), this._setHandler(i.Requests.Logout, this._fnLogout), this._setHandler(i.Requests.JoinRoom, this._fnJoinRoom), this._setHandler(i.Requests.CreateRoom, this._fnCreateRoom), this._setHandler(i.Requests.ChangeRoomName, this._fnChangeRoomName), this._setHandler(i.Requests.ChangeRoomPassword, this._fnChangeRoomPassword), this._setHandler(i.Requests.ChangeRoomCapacity, this._fnChangeRoomCapacity), this._setHandler(i.Requests.GenericMessage, this._fnGenericMessage), this._setHandler(i.Requests.SetRoomVariables, this._fnSetRoomVariables), this._setHandler(i.Requests.SetUserVariables, this._fnSetUserVariables), this._setHandler(i.Requests.SubscribeRoomGroup, this._fnSubscribeRoomGroup), this._setHandler(i.Requests.UnsubscribeRoomGroup, this._fnUnsubscribeRoomGroup), this._setHandler(i.Requests.SpectatorToPlayer, this._fnSpectatorToPlayer), this._setHandler(i.Requests.PlayerToSpectator, this._fnPlayerToSpectator), this._setHandler(i.Requests.FindRooms, this._fnFindRooms), this._setHandler(i.Requests.FindUsers, this._fnFindUsers), this._setHandler(i.Requests.PingPong, this._fnPingPong), this._setHandler(i.Requests.InitBuddyList, this._fnInitBuddyList), this._setHandler(i.Requests.AddBuddy, this._fnAddBuddy), this._setHandler(i.Requests.RemoveBuddy, this._fnRemoveBuddy), this._setHandler(i.Requests.BlockBuddy, this._fnBlockBuddy), this._setHandler(i.Requests.GoOnline, this._fnGoOnline), this._setHandler(i.Requests.SetBuddyVariables, this._fnSetBuddyVariables), this._setHandler(i.Requests.QuickJoinGame, this._fnQuickJoinGame), this._setHandler(i.Requests.InviteUsers, this._fnInviteUsers), this._setHandler(i.Requests.InvitationReply, this._fnInvitationReply), this._setHandler(i.Requests.SetUserPosition, this._fnSetUserPosition), this._setHandler(1e3, this._fnUserEnterRoom, "UserEnterRoom"), this._setHandler(1001, this._fnUserCountChange, "UserCountChange"), this._setHandler(1002, this._fnUserLost, "UserLost"), this._setHandler(1003, this._fnRoomLost, "RoomLost"), this._setHandler(1004, this._fnUserExitRoom, "UserExitRoom"), this._setHandler(1005, this._fnClientDisconnection, "ClientDisconnection"), this._setHandler(1007, this._fnSetMMOItemVariables, "SetMMOItemVariables")
                }
            }, {
                key: "_setHandler",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    null == n && (n = i.Requests.getNameFromId(e)), this._messageHandlers.set(e, {
                        name: n,
                        handler: t
                    })
                }
            }, {
                key: "_fnHandshake",
                value: function(e) {
                    this._sfs._handleHandShake(e)
                }
            }, {
                key: "_fnLogin",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        this._populateRoomList(t.get(v.LoginRequest.KEY_ROOMLIST)), this._sfs._mySelf = new c.SFSUser(t.get(v.LoginRequest.KEY_ID), t.get(v.LoginRequest.KEY_USER_NAME), !0), this._sfs.mySelf._setUserManager(this._sfs.userManager), this._sfs.mySelf._privilegeId = t.get(v.LoginRequest.KEY_PRIVILEGE_ID), this._sfs.userManager._addUser(this._sfs.mySelf);
                        var n = {};
                        n.zone = t.get(v.LoginRequest.KEY_ZONE_NAME), n.user = this._sfs.mySelf, n.data = t.get(v.LoginRequest.KEY_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.LOGIN, n)
                    } else this._dispatchError(o.SFSEvent.LOGIN_ERROR, t)
                }
            }, {
                key: "_fnLogout",
                value: function(e) {
                    this._sfs._handleLogout();
                    var t = {};
                    t.zone = e.get(b.LogoutRequest.KEY_ZONE_NAME), this._sfs.dispatchEvent(o.SFSEvent.LOGOUT, t)
                }
            }, {
                key: "_fnJoinRoom",
                value: function(t) {
                    if (this._sfs._isJoining = !1, null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(m.JoinRoomRequest.KEY_ROOM),
                            r = t.get(m.JoinRoomRequest.KEY_USER_LIST),
                            i = this._sfs.roomManager,
                            s = u.SFSRoom.fromSFSArray(n);
                        s = i._replaceRoom(s, i.containsGroup(s.groupId));
                        for (var a = 0; a < r.size(); a++) {
                            var c = r.get(a),
                                l = this._getOrCreateUser(c, !0, s);
                            s._addUser(l)
                        }
                        s._isJoined = !0, this._sfs._lastJoinedRoom = s;
                        var f = {};
                        f.room = s, this._sfs.dispatchEvent(o.SFSEvent.ROOM_JOIN, f)
                    } else this._dispatchError(o.SFSEvent.ROOM_JOIN_ERROR, t)
                }
            }, {
                key: "_fnCreateRoom",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = u.SFSRoom.fromSFSArray(t.get(S.CreateRoomRequest.KEY_ROOM));
                        this._sfs.roomManager._addRoom(n);
                        var r = {};
                        r.room = n, this._sfs.dispatchEvent(o.SFSEvent.ROOM_ADD, r)
                    } else this._dispatchError(o.SFSEvent.ROOM_CREATION_ERROR, t)
                }
            }, {
                key: "_fnChangeRoomName",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(E.ChangeRoomNameRequest.KEY_ROOM),
                            r = this._sfs.roomManager.getRoomById(n);
                        if (null != r) {
                            var i = r.name;
                            this._sfs.roomManager._changeRoomName(r, t.get(E.ChangeRoomNameRequest.KEY_NAME));
                            var s = {};
                            s.oldName = i, s.room = r, this._sfs.dispatchEvent(o.SFSEvent.ROOM_NAME_CHANGE, s)
                        } else this._logger.warn("Unexpected RoomNameChange event error; unknown Room id: " + n)
                    } else this._dispatchError(o.SFSEvent.ROOM_NAME_CHANGE_ERROR, t)
                }
            }, {
                key: "_fnChangeRoomPassword",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(R.ChangeRoomPasswordStateRequest.KEY_ROOM),
                            r = this._sfs.roomManager.getRoomById(n);
                        if (null != r) {
                            this._sfs.roomManager._changeRoomPasswordState(r, t.get(R.ChangeRoomPasswordStateRequest.KEY_PASS));
                            var i = {};
                            i.room = r, this._sfs.dispatchEvent(o.SFSEvent.ROOM_PASSWORD_STATE_CHANGE, i)
                        } else this._logger.warn("Unexpected RoomPasswordChange event error; unknown Room id: " + n)
                    } else this._dispatchError(o.SFSEvent.ROOM_PASSWORD_STATE_CHANGE_ERROR, t)
                }
            }, {
                key: "_fnChangeRoomCapacity",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(O.ChangeRoomCapacityRequest.KEY_ROOM),
                            r = this._sfs.roomManager.getRoomById(n);
                        if (null != r) {
                            this._sfs.roomManager._changeRoomCapacity(r, t.get(O.ChangeRoomCapacityRequest.KEY_USER_SIZE), t.get(O.ChangeRoomCapacityRequest.KEY_SPEC_SIZE));
                            var i = {};
                            i.room = r, this._sfs.dispatchEvent(o.SFSEvent.ROOM_CAPACITY_CHANGE, i)
                        } else this._logger.warn("Unexpected RoomCapacityChange event error; unknown Room id: " + n)
                    } else this._dispatchError(o.SFSEvent.ROOM_CAPACITY_CHANGE_ERROR, t)
                }
            }, {
                key: "_fnGenericMessage",
                value: function(e) {
                    switch (e.get(A.GenericMessageRequest.KEY_MESSAGE_TYPE)) {
                        case A.GenericMessageType.PUBLIC_MSG:
                            this._handlePublicMessage(e);
                            break;
                        case A.GenericMessageType.PRIVATE_MSG:
                            this._handlePrivateMessage(e);
                            break;
                        case A.GenericMessageType.BUDDY_MSG:
                            this._handleBuddyMessage(e);
                            break;
                        case A.GenericMessageType.MODERATOR_MSG:
                            this._handleModMessage(e);
                            break;
                        case A.GenericMessageType.ADMING_MSG:
                            this._handleAdminMessage(e);
                            break;
                        case A.GenericMessageType.OBJECT_MSG:
                            this._handleObjectMessage(e)
                    }
                }
            }, {
                key: "_handlePublicMessage",
                value: function(e) {
                    var t = e.get(A.GenericMessageRequest.KEY_ROOM_ID),
                        n = this._sfs.roomManager.getRoomById(t);
                    if (null != n) {
                        var r = {};
                        r.room = n, r.sender = this._sfs.userManager.getUserById(e.get(A.GenericMessageRequest.KEY_USER_ID)), r.message = e.get(A.GenericMessageRequest.KEY_MESSAGE), r.data = e.get(A.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.PUBLIC_MESSAGE, r)
                    } else this._logger.warn("Unexpected PublicMessage event error; unknown Room id: " + t)
                }
            }, {
                key: "_handlePrivateMessage",
                value: function(e) {
                    var t = e.get(A.GenericMessageRequest.KEY_USER_ID),
                        n = this._sfs.userManager.getUserById(t);
                    if (null == n) {
                        if (null == e.get(A.GenericMessageRequest.KEY_SENDER_DATA)) return void this._logger.warn("Unexpected PublicMessage event error; missing sender details");
                        n = c.SFSUser.fromSFSArray(e.get(A.GenericMessageRequest.KEY_SENDER_DATA))
                    }
                    var r = {};
                    r.sender = n, r.message = e.get(A.GenericMessageRequest.KEY_MESSAGE), r.data = e.get(A.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.PRIVATE_MESSAGE, r)
                }
            }, {
                key: "_handleBuddyMessage",
                value: function(e) {
                    var t = e.get(A.GenericMessageRequest.KEY_USER_ID),
                        n = this._sfs.buddyManager.getBuddyById(t),
                        r = {};
                    r.isItMe = this._sfs.mySelf.id === t, r.buddy = n, r.message = e.get(A.GenericMessageRequest.KEY_MESSAGE), r.data = e.get(A.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_MESSAGE, r)
                }
            }, {
                key: "_handleObjectMessage",
                value: function(e) {
                    var t = {};
                    t.sender = this._sfs.userManager.getUserById(e.get(A.GenericMessageRequest.KEY_USER_ID)), t.message = e.get(A.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.OBJECT_MESSAGE, t)
                }
            }, {
                key: "_handleModMessage",
                value: function(e) {
                    var t = {};
                    t.sender = c.SFSUser.fromSFSArray(e.get(A.GenericMessageRequest.KEY_SENDER_DATA)), t.message = e.get(A.GenericMessageRequest.KEY_MESSAGE), t.data = e.get(A.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.MODERATOR_MESSAGE, t)
                }
            }, {
                key: "_handleAdminMessage",
                value: function(e) {
                    var t = {};
                    t.sender = c.SFSUser.fromSFSArray(e.get(A.GenericMessageRequest.KEY_SENDER_DATA)), t.message = e.get(A.GenericMessageRequest.KEY_MESSAGE), t.data = e.get(A.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.ADMIN_MESSAGE, t)
                }
            }, {
                key: "_fnSetRoomVariables",
                value: function(e) {
                    var t = e.get(w.SetRoomVariablesRequest.KEY_VAR_ROOM),
                        n = e.get(w.SetRoomVariablesRequest.KEY_VAR_LIST),
                        r = this._sfs.roomManager.getRoomById(t),
                        i = new Set;
                    if (null != r) {
                        for (var s = 0; s < n.size(); s++) {
                            var a = y.SFSRoomVariable.fromSFSArray(n.get(s));
                            r._setVariable(a), i.add(a.name)
                        }
                        var u = {};
                        u.changedVars = Array.from(i), u.room = r, this._sfs.dispatchEvent(o.SFSEvent.ROOM_VARIABLES_UPDATE, u)
                    } else this._logger.warn("Unexpected RoomVariablesUpdate event error; unknown Room id: " + t)
                }
            }, {
                key: "_fnSetUserVariables",
                value: function(e) {
                    var t = e.get(I.SetUserVariablesRequest.KEY_USER),
                        n = e.get(I.SetUserVariablesRequest.KEY_VAR_LIST),
                        r = this._sfs.userManager.getUserById(t),
                        i = new Set;
                    if (null != r) {
                        for (var s = 0; s < n.size(); s++) {
                            var a = _.SFSUserVariable.fromSFSArray(n.get(s));
                            r._setVariable(a), i.add(a.name)
                        }
                        var u = {};
                        u.changedVars = Array.from(i), u.user = r, this._sfs.dispatchEvent(o.SFSEvent.USER_VARIABLES_UPDATE, u)
                    } else this._logger.warn("Unexpected UserVariablesUpdate event error; unknown User id: " + t)
                }
            }, {
                key: "_fnSubscribeRoomGroup",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(M.SubscribeRoomGroupRequest.KEY_GROUP_ID),
                            r = t.get(M.SubscribeRoomGroupRequest.KEY_ROOM_LIST);
                        this._sfs.roomManager.containsGroup(n) && this._logger.warn("Unexpected SubscribeRoomGroup event error; group already subscribed: " + n), this._sfs.roomManager._addGroup(n), this._populateRoomList(r);
                        var i = {};
                        i.groupId = n, i.newRooms = this._sfs.roomManager.getRoomListFromGroup(n), this._sfs.dispatchEvent(o.SFSEvent.ROOM_GROUP_SUBSCRIBE, i)
                    } else this._dispatchError(o.SFSEvent.ROOM_GROUP_SUBSCRIBE_ERROR, t)
                }
            }, {
                key: "_fnUnsubscribeRoomGroup",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(T.UnsubscribeRoomGroupRequest.KEY_GROUP_ID);
                        this._sfs.roomManager.containsGroup(n) || this._logger.warn("Unexpected UnsubscribeRoomGroup event error; group not found: " + n + " (maybe never subscribed, or the Room Manager doesn't contain Rooms belonging to that Group)"), this._sfs.roomManager._removeGroup(n);
                        var r = {};
                        r.groupId = n, this._sfs.dispatchEvent(o.SFSEvent.ROOM_GROUP_UNSUBSCRIBE, r)
                    } else this._dispatchError(o.SFSEvent.ROOM_GROUP_UNSUBSCRIBE_ERROR, t)
                }
            }, {
                key: "_fnSpectatorToPlayer",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(k.SpectatorToPlayerRequest.KEY_ROOM_ID),
                            r = t.get(k.SpectatorToPlayerRequest.KEY_USER_ID),
                            i = t.get(k.SpectatorToPlayerRequest.KEY_PLAYER_ID),
                            s = this._sfs.userManager.getUserById(r),
                            a = this._sfs.roomManager.getRoomById(n);
                        if (null != a)
                            if (null != s)
                                if (s.isJoinedInRoom(a)) {
                                    s._setPlayerId(i, a);
                                    var u = {};
                                    u.room = a, u.user = s, u.playerId = i, this._sfs.dispatchEvent(o.SFSEvent.SPECTATOR_TO_PLAYER, u)
                                } else this._logger.warn("Unexpected SpectatorToPlayer event error; User " + s + " not in Room " + a);
                        else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown User id: " + r);
                        else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown Room id: " + n)
                    } else this._dispatchError(o.SFSEvent.SPECTATOR_TO_PLAYER_ERROR, t)
                }
            }, {
                key: "_fnPlayerToSpectator",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(P.PlayerToSpectatorRequest.KEY_ROOM_ID),
                            r = t.get(P.PlayerToSpectatorRequest.KEY_USER_ID),
                            i = this._sfs.userManager.getUserById(r),
                            s = this._sfs.roomManager.getRoomById(n);
                        if (null != s)
                            if (null != i)
                                if (i.isJoinedInRoom(s)) {
                                    i._setPlayerId(-1, s);
                                    var a = {};
                                    a.room = s, a.user = i, this._sfs.dispatchEvent(o.SFSEvent.PLAYER_TO_SPECTATOR, a)
                                } else this._logger.warn("Unexpected PlayerToSpectator event error; User " + i + " not in Room " + s);
                        else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown User id: " + r);
                        else this._logger.warn("Unexpected SpectatorToPlayer event error; unknown Room id: " + n)
                    } else this._dispatchError(o.SFSEvent.PLAYER_TO_SPECTATOR_ERROR, t)
                }
            }, {
                key: "_fnPingPong",
                value: function(e) {
                    var t = {};
                    t.lagValue = this._sfs._lagMonitor._onPingPong(), this._sfs.dispatchEvent(o.SFSEvent.PING_PONG, t)
                }
            }, {
                key: "_fnFindRooms",
                value: function(e) {
                    for (var t = e.get(F.FindRoomsRequest.KEY_FILTERED_ROOMS), n = [], r = 0; r < t.size(); r++) {
                        var i = t.get(r),
                            s = u.SFSRoom.fromSFSArray(i),
                            a = this._sfs.roomManager.getRoomById(s.id);
                        null != a && (s._isJoined = a._isJoined), n.push(s)
                    }
                    var c = {};
                    c.rooms = n, this._sfs.dispatchEvent(o.SFSEvent.ROOM_FIND_RESULT, c)
                }
            }, {
                key: "_fnFindUsers",
                value: function(e) {
                    for (var t = e.get(N.FindUsersRequest.KEY_FILTERED_USERS), n = [], r = this._sfs.mySelf, i = 0; i < t.size(); i++) {
                        var s = t.get(i),
                            a = c.SFSUser.fromSFSArray(s);
                        a.id === r.id && (a = r), n.push(a)
                    }
                    var u = {};
                    u.users = n, this._sfs.dispatchEvent(o.SFSEvent.USER_FIND_RESULT, u)
                }
            }, {
                key: "_fnQuickJoinGame",
                value: function(t) {
                    null != t.get(e.KEY_ERROR_CODE) && this._dispatchError(o.SFSEvent.ROOM_JOIN_ERROR, t)
                }
            }, {
                key: "_fnInviteUsers",
                value: function(e) {
                    var t = null;
                    t = null != e.get(j.InviteUsersRequest.KEY_USER_ID) ? this._sfs.userManager.getUserById(e.get(j.InviteUsersRequest.KEY_USER_ID)) : c.SFSUser.fromSFSArray(e.get(j.InviteUsersRequest.KEY_USER));
                    var n = e.get(j.InviteUsersRequest.KEY_TIME),
                        r = e.get(j.InviteUsersRequest.KEY_INVITATION_ID),
                        i = e.get(j.InviteUsersRequest.KEY_PARAMS),
                        s = new h.SFSInvitation(t, this._sfs.mySelf, n, i);
                    s._id = r;
                    var a = {};
                    a.invitation = s, this._sfs.dispatchEvent(o.SFSEvent.INVITATION, a)
                }
            }, {
                key: "_fnInvitationReply",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = null;
                        n = null != t.get(j.InviteUsersRequest.KEY_USER_ID) ? this._sfs.userManager.getUserById(t.get(j.InviteUsersRequest.KEY_USER_ID)) : c.SFSUser.fromSFSArray(t.get(j.InviteUsersRequest.KEY_USER));
                        var r = t.get(j.InviteUsersRequest.KEY_REPLY_ID),
                            i = t.get(j.InviteUsersRequest.KEY_PARAMS),
                            s = {};
                        s.invitee = n, s.reply = r, s.data = i, this._sfs.dispatchEvent(o.SFSEvent.INVITATION_REPLY, s)
                    } else this._dispatchError(o.SFSEvent.INVITATION_REPLY_ERROR, t)
                }
            }, {
                key: "_fnSetUserPosition",
                value: function(e) {
                    var t = e.get(B.SetUserPositionRequest.KEY_ROOM),
                        n = this._sfs.roomManager.getRoomById(t),
                        r = e.get(B.SetUserPositionRequest.KEY_MINUS_USER_LIST),
                        i = e.get(B.SetUserPositionRequest.KEY_PLUS_USER_LIST),
                        s = e.get(B.SetUserPositionRequest.KEY_MINUS_ITEM_LIST),
                        u = e.get(B.SetUserPositionRequest.KEY_PLUS_ITEM_LIST),
                        c = [],
                        f = [],
                        h = [],
                        _ = [];
                    if (null != r) {
                        var y = !0,
                            p = !1,
                            d = void 0;
                        try {
                            for (var g, v = r[Symbol.iterator](); !(y = (g = v.next()).done); y = !0) {
                                var b = g.value,
                                    m = n.getUserById(b);
                                null != m && (n._removeUser(m), f.push(m))
                            }
                        } catch (e) {
                            p = !0, d = e
                        } finally {
                            try {
                                !y && v.return && v.return()
                            } finally {
                                if (p) throw d
                            }
                        }
                    }
                    if (null != i)
                        for (var S = 0; S < i.size(); S++) {
                            var E = i.get(S),
                                R = this._getOrCreateUser(E, !0, n);
                            c.push(R), n._addUser(R);
                            var O = E.get(5);
                            null != O && (R._aoiEntryPoint = a.Vec3D.fromArray(O))
                        }
                    if (null != s) {
                        var A = !0,
                            w = !1,
                            I = void 0;
                        try {
                            for (var M, T = s[Symbol.iterator](); !(A = (M = T.next()).done); A = !0) {
                                var k = M.value,
                                    P = n.getMMOItem(k);
                                null != P && (n._removeItem(P.id), _.push(P))
                            }
                        } catch (e) {
                            w = !0, I = e
                        } finally {
                            try {
                                !A && T.return && T.return()
                            } finally {
                                if (w) throw I
                            }
                        }
                    }
                    if (null != u)
                        for (var F = 0; F < u.size(); F++) {
                            var N = u.get(F),
                                j = l.MMOItem.fromSFSArray(N);
                            h.push(j), n._addMMOItem(j);
                            var U = N.get(2);
                            null != U && (j._aoiEntryPoint = a.Vec3D.fromArray(U))
                        }
                    var L = {};
                    L.addedItems = h, L.removedItems = _, L.removedUsers = f, L.addedUsers = c, L.room = n, this._sfs.dispatchEvent(o.SFSEvent.PROXIMITY_LIST_UPDATE, L)
                }
            }, {
                key: "_fnInitBuddyList",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(L.InitBuddyListRequest.KEY_BLIST),
                            r = t.get(L.InitBuddyListRequest.KEY_MY_VARS),
                            i = t.get(L.InitBuddyListRequest.KEY_BUDDY_STATES);
                        this._sfs.buddyManager._clearAll();
                        for (var s = 0; s < n.size(); s++) {
                            var a = f.SFSBuddy.fromSFSArray(n.get(s));
                            this._sfs.buddyManager._addBuddy(a)
                        }
                        null != i && this._sfs.buddyManager._setBuddyStates(i);
                        for (var u = [], c = 0; c < r.size(); c++) {
                            var l = d.SFSBuddyVariable.fromSFSArray(r.get(c));
                            u.push(l)
                        }
                        this._sfs.buddyManager._setMyVariables(u), this._sfs.buddyManager._setInited();
                        var h = {};
                        h.buddyList = this._sfs.buddyManager.getBuddyList(), h.myVariables = this._sfs.buddyManager.getMyVariables(), this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_LIST_INIT, h)
                    } else this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t)
                }
            }, {
                key: "_fnAddBuddy",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = f.SFSBuddy.fromSFSArray(t.get(D.AddBuddyRequest.KEY_BUDDY_NAME));
                        this._sfs.buddyManager._addBuddy(n);
                        var r = {};
                        r.buddy = n, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_ADD, r)
                    } else this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t)
                }
            }, {
                key: "_fnRemoveBuddy",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(Y.RemoveBuddyRequest.KEY_BUDDY_NAME),
                            r = this._sfs.buddyManager._removeBuddyByName(n);
                        if (null != r) {
                            var i = {};
                            i.buddy = r, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_REMOVE, i)
                        } else this._logger.warn("Unexpected RemoveBuddy event error; can't find " + n + " in local buddy list")
                    } else this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t)
                }
            }, {
                key: "_fnBlockBuddy",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(C.BlockBuddyRequest.KEY_BUDDY_NAME),
                            r = this._sfs.buddyManager.getBuddyByName(n);
                        null != t.get(C.BlockBuddyRequest.KEY_BUDDY) ? (r = f.SFSBuddy.fromSFSArray(t.get(C.BlockBuddyRequest.KEY_BUDDY)), this._sfs.buddyManager._addBuddy(r)) : null != r ? r._isBlocked = t.get(C.BlockBuddyRequest.KEY_BUDDY_BLOCK_STATE) : this._logger.warn("Unexpected BlockBuddy event error; can't find " + n + " in local buddy list");
                        var i = {};
                        i.buddy = r, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_BLOCK, i)
                    } else this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t)
                }
            }, {
                key: "_fnGoOnline",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        var n = t.get(x.GoOnlineRequest.KEY_BUDDY_NAME),
                            r = this._sfs.buddyManager.getBuddyByName(n),
                            i = n === this._sfs.mySelf.name,
                            s = t.get(x.GoOnlineRequest.KEY_ONLINE),
                            a = s === f.BuddyOnlineState.ONLINE,
                            u = !0;
                        if (i) this._sfs.buddyManager.getMyOnlineState() != a && (this._logger.warn("Unexpected GoOnline event error; current user's online state is not in synch with the server; resynching to: " + a), this._sfs.buddyManager._setMyOnlineState(a));
                        else {
                            if (null == r) return void this._logger.warn("Unexpected GoOnline event error; can't find " + n + " in local buddy list");
                            r._id = t.get(x.GoOnlineRequest.KEY_BUDDY_ID), r._setVariable(new d.SFSBuddyVariable(d.ReservedBuddyVariables.BV_ONLINE, a)), s === f.BuddyOnlineState.LEFT_THE_SERVER && r._clearVolatileVariables(), u = this._sfs.buddyManager.getMyOnlineState()
                        }
                        if (u) {
                            var c = {};
                            c.buddy = r, c.isItMe = i, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, c)
                        }
                    } else this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t)
                }
            }, {
                key: "_fnSetBuddyVariables",
                value: function(t) {
                    if (null == t.get(e.KEY_ERROR_CODE)) {
                        for (var n = t.get(q.SetBuddyVariablesRequest.KEY_BUDDY_NAME), r = t.get(q.SetBuddyVariablesRequest.KEY_BUDDY_VARS), i = this._sfs.buddyManager.getBuddyByName(n), s = n === this._sfs.mySelf.name, a = [], u = [], c = !0, l = 0; l < r.size(); l++) {
                            var f = d.SFSBuddyVariable.fromSFSArray(r.get(l));
                            u.push(f), a.push(f.name)
                        }
                        if (s) this._sfs.buddyManager._setMyVariables(u);
                        else {
                            if (null == i) return void this._logger.warn("Unexpected SetBuddyVariables event error; can't find " + n + " in local buddy list");
                            i._setVariables(u), c = this._sfs.buddyManager.getMyOnlineState()
                        }
                        if (c) {
                            var h = {};
                            h.buddy = i, h.isItMe = s, h.changedVars = a, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, h)
                        }
                    } else this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t)
                }
            }, {
                key: "_fnUserEnterRoom",
                value: function(t) {
                    var n = this._sfs.roomManager.getRoomById(t.get(e.ROOM_PARAM));
                    if (null != n) {
                        var r = t.get(e.USER_PARAM),
                            i = this._getOrCreateUser(r, !0, n);
                        n._addUser(i);
                        var s = {};
                        s.user = i, s.room = n, this._sfs.dispatchEvent(o.SFSEvent.USER_ENTER_ROOM, s)
                    }
                }
            }, {
                key: "_fnUserCountChange",
                value: function(t) {
                    var n = this._sfs.roomManager.getRoomById(t.get(e.ROOM_PARAM));
                    if (null != n) {
                        var r = t.get(e.USER_COUNT_PARAM),
                            i = null != t.get(e.SPECT_COUNT_PARAM) ? t.get(e.SPECT_COUNT_PARAM) : 0;
                        n._userCount = r, n._specCount = i;
                        var s = {};
                        s.room = n, s.uCount = r, s.sCount = i, this._sfs.dispatchEvent(o.SFSEvent.USER_COUNT_CHANGE, s)
                    }
                }
            }, {
                key: "_fnUserLost",
                value: function(t) {
                    var n = this._sfs.userManager.getUserById(t.get(e.USER_PARAM));
                    if (null != n) {
                        var r = this._sfs.roomManager.getUserRooms(n);
                        this._sfs.roomManager._removeUser(n), this._sfs.userManager._removeUserReference(n, !0);
                        var i = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var u, c = r[Symbol.iterator](); !(i = (u = c.next()).done); i = !0) {
                                var l = u.value,
                                    f = {};
                                f.user = n, f.room = l, this._sfs.dispatchEvent(o.SFSEvent.USER_EXIT_ROOM, f)
                            }
                        } catch (e) {
                            s = !0, a = e
                        } finally {
                            try {
                                !i && c.return && c.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }
            }, {
                key: "_fnRoomLost",
                value: function(t) {
                    var n = this._sfs.roomManager.getRoomById(t.get(e.ROOM_PARAM));
                    if (null != n) {
                        this._sfs.roomManager._removeRoom(n);
                        var r = !0,
                            i = !1,
                            s = void 0;
                        try {
                            for (var a, u = n.getUserList()[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                                var c = a.value;
                                this._sfs.userManager._removeUser(c)
                            }
                        } catch (e) {
                            i = !0, s = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        var l = {};
                        l.room = n, this._sfs.dispatchEvent(o.SFSEvent.ROOM_REMOVE, l)
                    }
                }
            }, {
                key: "_fnUserExitRoom",
                value: function(t) {
                    var n = this._sfs.roomManager.getRoomById(t.get(e.ROOM_PARAM)),
                        r = this._sfs.userManager.getUserById(t.get(e.USER_PARAM));
                    if (null != n && null != r) {
                        n._removeUser(r), this._sfs.userManager._removeUser(r), r.isItMe && n.isJoined && (n._isJoined = !1, 0 !== this._sfs.roomManager.getJoinedRooms().length && this._sfs._lastJoinedRoom !== n || (this._sfs._lastJoinedRoom = null), n._isManaged || this._sfs.roomManager._removeRoom(n));
                        var i = {};
                        i.user = r, i.room = n, this._sfs.dispatchEvent(o.SFSEvent.USER_EXIT_ROOM, i)
                    } else this._logger.debug("Failed to handle UserExit event; Room: " + n + ", User: " + r)
                }
            }, {
                key: "_fnClientDisconnection",
                value: function(t) {
                    var n = t.get(e.DISCONNECTION_REASON_PARAM);
                    this._sfs._handleClientDisconnection(g.ClientDisconnectionReason.getReason(n))
                }
            }, {
                key: "_fnSetMMOItemVariables",
                value: function(e) {
                    var t = e.get(U.SetMMOItemVariables.KEY_ROOM_ID),
                        n = e.get(U.SetMMOItemVariables.KEY_ITEM_ID),
                        r = e.get(U.SetMMOItemVariables.KEY_VAR_LIST),
                        i = this._sfs.roomManager.getRoomById(t),
                        s = new Set;
                    if (null != i) {
                        var a = i.getMMOItem(n);
                        if (null != a) {
                            for (var u = 0; u < r.size(); u++) {
                                var c = p.MMOItemVariable.fromSFSArray(r.get(u));
                                a._setVariable(c), s.add(c.name)
                            }
                            var l = {};
                            l.changedVars = Array.from(s), l.mmoItem = a, l.room = i, this._sfs.dispatchEvent(o.SFSEvent.MMOITEM_VARIABLES_UPDATE, l)
                        } else this._logger.warn("Unexpected MMOItemVariablesUpdate event error; unknown MMOItem id: " + n)
                    } else this._logger.warn("Unexpected MMOItemVariablesUpdate event error; unknown MMORoom id: " + t)
                }
            }, {
                key: "_dispatchError",
                value: function(t, n) {
                    var r = {};
                    r.errorCode = n.get(e.KEY_ERROR_CODE), r.errorMessage = s.SFSErrorCodes.getErrorMessage(r.errorCode, n.get(e.KEY_ERROR_PARAMS)), this._sfs.dispatchEvent(t, r)
                }
            }, {
                key: "_populateRoomList",
                value: function(e) {
                    for (var t = 0; t < e.size(); t++) {
                        var n = u.SFSRoom.fromSFSArray(e.get(t));
                        this._sfs.roomManager._replaceRoom(n)
                    }
                }
            }, {
                key: "_getOrCreateUser",
                value: function(e, t, n) {
                    var r = e.get(0),
                        i = this._sfs.userManager.getUserById(r);
                    if (null == i)(i = c.SFSUser.fromSFSArray(e, n))._setUserManager(this._sfs.userManager);
                    else {
                        i._setPlayerId(e.get(3), n);
                        var o = e.get(4);
                        if (null != o)
                            for (var s = 0; s < o.size(); s++) i._setVariable(_.SFSUserVariable.fromSFSArray(o.get(s)))
                    }
                    return t && this._sfs.userManager._addUser(i), i
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }]), e
        }();
        t.SystemController = V
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SmartFox = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(173),
            o = n(167),
            s = n(38),
            a = n(1),
            u = n(166),
            c = n(119),
            l = n(164),
            f = n(163),
            h = n(2),
            _ = n(162),
            y = n(73),
            p = n(50),
            d = n(161),
            g = n(51);
        var v = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n._majVersion = 1, n._minVersion = 7, n._subVersion = 17, n._configData = e, n._logger = p.Logger.instance, n._sessionToken = null, n._socketEngine = new u.SocketEngine(n), n._socketEngine.addEventListener(u.SocketEvent.CONNECT, n._onSocketConnect, n), n._socketEngine.addEventListener(u.SocketEvent.DISCONNECT, n._onSocketDisconnect, n), n._socketEngine.addEventListener(u.SocketEvent.DATA, n._onSocketData, n), n._socketEngine.addEventListener(u.SocketEvent.IOERROR, n._onSocketIOError, n), n._controllers = {}, n._controllers[0] = new i.SystemController(n), n._controllers[1] = new o.ExtensionController(n), n._reset(), n._clientDetails = "JavaScript", n.debug = null != n.config && n.config.debug, n.debug && (n._logger.info("SmartFox instance ready"), n._logger.info("SFS2X JavaScript API v" + n.version)), Object.seal(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, s.EventDispatcher), r(t, [{
                key: "setClientDetails",
                value: function(e, t) {
                    if (this.isConnected) this._logger.warn("Method setClientDetails must be called before the connection is started");
                    else {
                        e = null != e ? e.replace(":", " ") : "", t = null != t ? t.replace(":", " ") : "", this._clientDetails = e + ":" + t
                    }
                }
            }, {
                key: "connect",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (this.debug && this._logger.info("Attempting connection to server"), this.isConnected) this._logger.warn("Connection attempt interrupted: already connected");
                    else if (this._socketEngine.isConnecting) this._logger.warn("Connection attempt interrupted: another attempt is already in progress");
                    else {
                        var r = null != this.config && null != this.config.host ? this.config.host : null,
                            i = null != this.config && null != this.config.port ? this.config.port : null,
                            o = null != this.config && this.config.useSSL;
                        null != e && (r = e), t > -1 && (i = t), null != n && (o = n), null != r && "string" == typeof r && 0 !== r.length ? "number" != typeof i || i < 0 || i > 65535 ? this._logger.error("Invalid TCP connection port: " + i) : ("boolean" != typeof o && (o = !1), this._socketEngine.connect(r, i, o)) : this._logger.error("Invalid connection host/address")
                    }
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.isConnected && this._handleClientDisconnection(g.ClientDisconnectionReason.MANUAL)
                }
            }, {
                key: "enableLagMonitor",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    null != this.mySelf ? (null != this._lagMonitor && this._lagMonitor.destroy(), e && (this._lagMonitor = new d.LagMonitor(this, t, n), this._lagMonitor.start())) : this._logger.warn("Lag monitoring requires that you are logged in a Zone; please retry after completing the login process")
                }
            }, {
                key: "send",
                value: function(e) {
                    if (this.isConnected) {
                        if (null != e.validate && null != e.execute) {
                            this.debug && this._logger.info("Sending request '" + h.Requests.getNameFromId(e.id) + "' to server");
                            try {
                                e.validate(this), e.execute(this)
                            } catch (e) {
                                if (!(e instanceof a.SFSValidationError && null != e.message)) throw e;
                                var t = e.message;
                                if (null != e.errors) {
                                    t += ":";
                                    for (var n = 0; n < e.errors.length; n++) e.errors.length > 1 && (t += " " + (n + 1) + ")"), t += " " + e.errors[n]
                                }
                                return this._logger.error("Request failed | " + t), !1
                            }
                            return this._socketEngine.send(e.getMessage()), !0
                        }
                        this._logger.error("An invalid request was passed: " + e)
                    } else this._logger.error("You are not connected. Request cannot be sent: " + h.Requests.getNameFromId(e.id))
                }
            }, {
                key: "getRoomById",
                value: function(e) {
                    return this.roomManager.getRoomById(e)
                }
            }, {
                key: "getRoomByName",
                value: function(e) {
                    return this.roomManager.getRoomByName(e)
                }
            }, {
                key: "getRoomList",
                value: function() {
                    return this.roomManager.getRoomList()
                }
            }, {
                key: "getRoomListFromGroup",
                value: function(e) {
                    return this.roomManager.getRoomListFromGroup(e)
                }
            }, {
                key: "getJoinedRooms",
                value: function() {
                    return this.roomManager.getJoinedRooms()
                }
            }, {
                key: "_reset",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    null != this._buddyManager && (this._buddyManager._clearAll(), this._buddyManager._inited = !1), this._userManager = new c.GlobalUserManager(this), this._roomManager = new l.SFSRoomManager(this), this._buddyManager = new f.SFSBuddyManager(this), null != this._lagMonitor && this._lagMonitor.destroy(), this._lagMonitor = null, this._isJoining = !1, this._currentZone = null, this._lastJoinedRoom = null, this._mySelf = null, e && (this._sessionToken = null)
                }
            }, {
                key: "_onSocketConnect",
                value: function(e) {
                    e.success ? this.send(new _.HandshakeRequest(this.version, this._clientDetails)) : this.dispatchEvent(s.SFSEvent.CONNECTION, {
                        success: !1
                    })
                }
            }, {
                key: "_onSocketDisconnect",
                value: function(e) {
                    this.dispatchEvent(s.SFSEvent.CONNECTION_LOST, {
                        reason: e.reason
                    }), this._reset(!0)
                }
            }, {
                key: "_onSocketData",
                value: function(e) {
                    var t = e.targetController,
                        n = e.id,
                        r = e.content;
                    null != t ? null != n ? this._controllers[t].handleMessage(r, n) : this._logger.error("Incoming message rejected: Command ID is missing") : this._logger.error("Incoming message rejected: Controller ID is missing")
                }
            }, {
                key: "_onSocketIOError",
                value: function(e) {
                    this.dispatchEvent(s.SFSEvent.SOCKET_ERROR, {
                        message: e
                    })
                }
            }, {
                key: "_handleHandShake",
                value: function(e) {
                    var t = e.get(h.BaseRequest.KEY_ERROR_CODE);
                    if (null == t) this._sessionToken = e.get(_.HandshakeRequest.KEY_SESSION_TOKEN), this._socketEngine.maxMessageSize = e.get(_.HandshakeRequest.KEY_MAX_MESSAGE_SIZE), this._socketEngine.compressionThreshold = e.get(_.HandshakeRequest.KEY_COMPRESSION_THRESHOLD), this.dispatchEvent(s.SFSEvent.CONNECTION, {
                        success: !0
                    });
                    else {
                        var n = {
                            success: !1,
                            errorMessage: y.SFSErrorCodes.getErrorMessage(t, e.get(h.BaseRequest.KEY_ERROR_PARAMS)),
                            errorCode: t
                        };
                        this.dispatchEvent(s.SFSEvent.CONNECTION, n)
                    }
                }
            }, {
                key: "_handleLogout",
                value: function() {
                    this._reset()
                }
            }, {
                key: "_handleClientDisconnection",
                value: function(e) {
                    this.isConnected && this._socketEngine.disconnect(e)
                }
            }, {
                key: "version",
                get: function() {
                    return this._majVersion + "." + this._minVersion + "." + this._subVersion
                }
            }, {
                key: "config",
                get: function() {
                    return this._configData
                }
            }, {
                key: "logger",
                get: function() {
                    return this._logger
                }
            }, {
                key: "sessionToken",
                get: function() {
                    return this._sessionToken
                }
            }, {
                key: "roomManager",
                get: function() {
                    return this._roomManager
                }
            }, {
                key: "userManager",
                get: function() {
                    return this._userManager
                }
            }, {
                key: "buddyManager",
                get: function() {
                    return this._buddyManager
                }
            }, {
                key: "mySelf",
                get: function() {
                    return this._mySelf
                }
            }, {
                key: "lastJoinedRoom",
                get: function() {
                    return this._lastJoinedRoom
                }
            }, {
                key: "isConnected",
                get: function() {
                    return null != this._socketEngine && this._socketEngine.isConnected
                }
            }, {
                key: "maxMessageSize",
                get: function() {
                    return null != this._socketEngine ? this._socketEngine.maxMessageSize : 0
                }
            }]), t
        }();
        t.SmartFox = v
    }, function(e, t, n) {
        var r = n(0),
            i = n(88);
        i && r(r.S, "Reflect", {
            setPrototypeOf: function(e, t) {
                i.check(e, t);
                try {
                    return i.set(e, t), !0
                } catch (e) {
                    return !1
                }
            }
        })
    }, function(e, t, n) {
        var r = n(9),
            i = n(23),
            o = n(31),
            s = n(16),
            a = n(0),
            u = n(36),
            c = n(5),
            l = n(4);
        a(a.S, "Reflect", {
            set: function e(t, n, a) {
                var f, h, _ = arguments.length < 4 ? t : arguments[3],
                    y = i.f(c(t), n);
                if (!y) {
                    if (l(h = o(t))) return e(h, n, a, _);
                    y = u(0)
                }
                return s(y, "value") ? !(!1 === y.writable || !l(_) || ((f = i.f(_, n) || u(0)).value = a, r.f(_, n, f), 0)) : void 0 !== y.set && (y.set.call(_, a), !0)
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(5),
            o = Object.preventExtensions;
        r(r.S, "Reflect", {
            preventExtensions: function(e) {
                i(e);
                try {
                    return o && o(e), !0
                } catch (e) {
                    return !1
                }
            }
        })
    }, function(e, t, n) {
        var r = n(32),
            i = n(67),
            o = n(5),
            s = n(6).Reflect;
        e.exports = s && s.ownKeys || function(e) {
            var t = r.f(o(e)),
                n = i.f;
            return n ? t.concat(n(e)) : t
        }
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Reflect", {
            ownKeys: n(178)
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(5),
            o = Object.isExtensible;
        r(r.S, "Reflect", {
            isExtensible: function(e) {
                return i(e), !o || o(e)
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Reflect", {
            has: function(e, t) {
                return t in e
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(31),
            o = n(5);
        r(r.S, "Reflect", {
            getPrototypeOf: function(e) {
                return i(o(e))
            }
        })
    }, function(e, t, n) {
        var r = n(23),
            i = n(0),
            o = n(5);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function(e, t) {
                return r.f(o(e), t)
            }
        })
    }, function(e, t, n) {
        var r = n(23),
            i = n(31),
            o = n(16),
            s = n(0),
            a = n(4),
            u = n(5);
        s(s.S, "Reflect", {
            get: function e(t, n) {
                var s, c, l = arguments.length < 3 ? t : arguments[2];
                return u(t) === l ? t[n] : (s = r.f(t, n)) ? o(s, "value") ? s.value : void 0 !== s.get ? s.get.call(l) : void 0 : a(c = i(t)) ? e(c, n, l) : void 0
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(5),
            o = function(e) {
                this._t = i(e), this._i = 0;
                var t, n = this._k = [];
                for (t in e) n.push(t)
            };
        n(133)(o, "Object", function() {
            var e, t = this._k;
            do {
                if (this._i >= t.length) return {
                    value: void 0,
                    done: !0
                }
            } while (!((e = t[this._i++]) in this._t));
            return {
                value: e,
                done: !1
            }
        }), r(r.S, "Reflect", {
            enumerate: function(e) {
                return new o(e)
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(23).f,
            o = n(5);
        r(r.S, "Reflect", {
            deleteProperty: function(e, t) {
                var n = i(o(e), t);
                return !(n && !n.configurable) && delete e[t]
            }
        })
    }, function(e, t, n) {
        var r = n(9),
            i = n(0),
            o = n(5),
            s = n(30);
        i(i.S + i.F * n(3)(function() {
            Reflect.defineProperty(r.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function(e, t, n) {
                o(e), t = s(t, !0), o(n);
                try {
                    return r.f(e, t, n), !0
                } catch (e) {
                    return !1
                }
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(33),
            o = n(26),
            s = n(5),
            a = n(4),
            u = n(3),
            c = n(142),
            l = (n(6).Reflect || {}).construct,
            f = u(function() {
                function e() {}
                return !(l(function() {}, [], e) instanceof e)
            }),
            h = !u(function() {
                l(function() {})
            });
        r(r.S + r.F * (f || h), "Reflect", {
            construct: function(e, t) {
                o(e), s(t);
                var n = arguments.length < 3 ? e : o(arguments[2]);
                if (h && !f) return l(e, t, n);
                if (e == n) {
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3])
                    }
                    var r = [null];
                    return r.push.apply(r, t), new(c.apply(e, r))
                }
                var u = n.prototype,
                    _ = i(a(u) ? u : Object.prototype),
                    y = Function.apply.call(e, _, t);
                return a(y) ? y : _
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(26),
            o = n(5),
            s = (n(6).Reflect || {}).apply,
            a = Function.apply;
        r(r.S + r.F * !n(3)(function() {
            s(function() {})
        }), "Reflect", {
            apply: function(e, t, n) {
                var r = i(e),
                    u = o(n);
                return s ? s(r, t, u) : a.call(r, t, u)
            }
        })
    }, function(e, t, n) {
        n(22)("Float64", 8, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Float32", 4, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Uint32", 4, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Int32", 4, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Uint16", 2, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Int16", 2, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Uint8", 1, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        }, !0)
    }, function(e, t, n) {
        n(22)("Uint8", 1, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        n(22)("Int8", 1, function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.G + r.W + r.F * !n(59).ABV, {
            DataView: n(74).DataView
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(59),
            o = n(74),
            s = n(5),
            a = n(34),
            u = n(12),
            c = n(4),
            l = n(6).ArrayBuffer,
            f = n(75),
            h = o.ArrayBuffer,
            _ = o.DataView,
            y = i.ABV && l.isView,
            p = h.prototype.slice,
            d = i.VIEW;
        r(r.G + r.W + r.F * (l !== h), {
            ArrayBuffer: h
        }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
            isView: function(e) {
                return y && y(e) || c(e) && d in e
            }
        }), r(r.P + r.U + r.F * n(3)(function() {
            return !new h(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(e, t) {
                if (void 0 !== p && void 0 === t) return p.call(s(this), e);
                for (var n = s(this).byteLength, r = a(e, n), i = a(void 0 === t ? n : t, n), o = new(f(this, h))(u(i - r)), c = new _(this), l = new _(o), y = 0; r < i;) l.setUint8(y++, c.getUint8(r++));
                return o
            }
        }), n(42)("ArrayBuffer")
    }, function(e, t, n) {
        "use strict";
        var r = n(122),
            i = n(39);
        n(60)("WeakSet", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return r.def(i(this, "WeakSet"), e, !0)
            }
        }, r, !1, !0)
    }, function(e, t, n) {
        "use strict";
        var r, i = n(19)(0),
            o = n(15),
            s = n(29),
            a = n(143),
            u = n(122),
            c = n(4),
            l = n(3),
            f = n(39),
            h = s.getWeak,
            _ = Object.isExtensible,
            y = u.ufstore,
            p = {},
            d = function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            g = {
                get: function(e) {
                    if (c(e)) {
                        var t = h(e);
                        return !0 === t ? y(f(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                    }
                },
                set: function(e, t) {
                    return u.def(f(this, "WeakMap"), e, t)
                }
            },
            v = e.exports = n(60)("WeakMap", d, g, u, !0, !0);
        l(function() {
            return 7 != (new v).set((Object.freeze || Object)(p), 7).get(p)
        }) && (a((r = u.getConstructor(d, "WeakMap")).prototype, g), s.NEED = !0, i(["delete", "has", "get", "set"], function(e) {
            var t = v.prototype,
                n = t[e];
            o(t, e, function(t, i) {
                if (c(t) && !_(t)) {
                    this._f || (this._f = new r);
                    var o = this._f[e](t, i);
                    return "set" == e ? this : o
                }
                return n.call(this, t, i)
            })
        }))
    }, function(e, t, n) {
        "use strict";
        var r = n(123),
            i = n(39);
        e.exports = n(60)("Set", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    }, function(e, t, n) {
        "use strict";
        var r = n(123),
            i = n(39);
        e.exports = n(60)("Map", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(e) {
                var t = r.getEntry(i(this, "Map"), e);
                return t && t.v
            },
            set: function(e, t) {
                return r.def(i(this, "Map"), 0 === e ? 0 : e, t)
            }
        }, r, !0)
    }, function(e, t, n) {
        var r = n(5),
            i = n(4),
            o = n(124);
        e.exports = function(e, t) {
            if (r(e), i(t) && t.constructor === e) return t;
            var n = o.f(e);
            return (0, n.resolve)(t), n.promise
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    }, function(e, t, n) {
        var r = n(6),
            i = n(125).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            s = r.process,
            a = r.Promise,
            u = "process" == n(25)(s);
        e.exports = function() {
            var e, t, n, c = function() {
                var r, i;
                for (u && (r = s.domain) && r.exit(); e;) {
                    i = e.fn, e = e.next;
                    try {
                        i()
                    } catch (r) {
                        throw e ? n() : t = void 0, r
                    }
                }
                t = void 0, r && r.enter()
            };
            if (u) n = function() {
                s.nextTick(c)
            };
            else if (!o || r.navigator && r.navigator.standalone)
                if (a && a.resolve) {
                    var l = a.resolve();
                    n = function() {
                        l.then(c)
                    }
                } else n = function() {
                    i.call(r, c)
                };
            else {
                var f = !0,
                    h = document.createTextNode("");
                new o(c).observe(h, {
                    characterData: !0
                }), n = function() {
                    h.data = f = !f
                }
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                t && (t.next = i), e || (e = i, n()), t = i
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r, i, o, s, a = n(43),
            u = n(6),
            c = n(27),
            l = n(65),
            f = n(0),
            h = n(4),
            _ = n(26),
            y = n(41),
            p = n(61),
            d = n(75),
            g = n(125).set,
            v = n(207)(),
            b = n(124),
            m = n(206),
            S = n(205),
            E = u.TypeError,
            R = u.process,
            O = u.Promise,
            A = "process" == l(R),
            w = function() {},
            I = i = b.f,
            M = !! function() {
                try {
                    var e = O.resolve(1),
                        t = (e.constructor = {})[n(7)("species")] = function(e) {
                            e(w, w)
                        };
                    return (A || "function" == typeof PromiseRejectionEvent) && e.then(w) instanceof t
                } catch (e) {}
            }(),
            T = function(e) {
                var t;
                return !(!h(e) || "function" != typeof(t = e.then)) && t
            },
            k = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    v(function() {
                        for (var r = e._v, i = 1 == e._s, o = 0, s = function(t) {
                                var n, o, s, a = i ? t.ok : t.fail,
                                    u = t.resolve,
                                    c = t.reject,
                                    l = t.domain;
                                try {
                                    a ? (i || (2 == e._h && N(e), e._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === t.promise ? c(E("Promise-chain cycle")) : (o = T(n)) ? o.call(n, u, c) : u(n)) : c(r)
                                } catch (e) {
                                    l && !s && l.exit(), c(e)
                                }
                            }; n.length > o;) s(n[o++]);
                        e._c = [], e._n = !1, t && !e._h && P(e)
                    })
                }
            },
            P = function(e) {
                g.call(u, function() {
                    var t, n, r, i = e._v,
                        o = F(e);
                    if (o && (t = m(function() {
                            A ? R.emit("unhandledRejection", i, e) : (n = u.onunhandledrejection) ? n({
                                promise: e,
                                reason: i
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                        }), e._h = A || F(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
                })
            },
            F = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            },
            N = function(e) {
                g.call(u, function() {
                    var t;
                    A ? R.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            },
            j = function(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), k(t, !0))
            },
            U = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw E("Promise can't be resolved itself");
                        (t = T(e)) ? v(function() {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                t.call(e, c(U, r, 1), c(j, r, 1))
                            } catch (e) {
                                j.call(r, e)
                            }
                        }): (n._v = e, n._s = 1, k(n, !1))
                    } catch (e) {
                        j.call({
                            _w: n,
                            _d: !1
                        }, e)
                    }
                }
            };
        M || (O = function(e) {
            y(this, O, "Promise", "_h"), _(e), r.call(this);
            try {
                e(c(U, this, 1), c(j, this, 1))
            } catch (e) {
                j.call(this, e)
            }
        }, (r = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(40)(O.prototype, {
            then: function(e, t) {
                var n = I(d(this, O));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = A ? R.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), o = function() {
            var e = new r;
            this.promise = e, this.resolve = c(U, e, 1), this.reject = c(j, e, 1)
        }, b.f = I = function(e) {
            return e === O || e === s ? new o(e) : i(e)
        }), f(f.G + f.W + f.F * !M, {
            Promise: O
        }), n(44)(O, "Promise"), n(42)("Promise"), s = n(37).Promise, f(f.S + f.F * !M, "Promise", {
            reject: function(e) {
                var t = I(this);
                return (0, t.reject)(e), t.promise
            }
        }), f(f.S + f.F * (a || !M), "Promise", {
            resolve: function(e) {
                return S(a && this === s ? O : this, e)
            }
        }), f(f.S + f.F * !(M && n(63)(function(e) {
            O.all(e).catch(w)
        })), "Promise", {
            all: function(e) {
                var t = this,
                    n = I(t),
                    r = n.resolve,
                    i = n.reject,
                    o = m(function() {
                        var n = [],
                            o = 0,
                            s = 1;
                        p(e, !1, function(e) {
                            var a = o++,
                                u = !1;
                            n.push(void 0), s++, t.resolve(e).then(function(e) {
                                u || (u = !0, n[a] = e, --s || r(n))
                            }, i)
                        }), --s || r(n)
                    });
                return o.e && i(o.v), n.promise
            },
            race: function(e) {
                var t = this,
                    n = I(t),
                    r = n.reject,
                    i = m(function() {
                        p(e, !1, function(e) {
                            t.resolve(e).then(n.resolve, r)
                        })
                    });
                return i.e && r(i.v), n.promise
            }
        })
    }, function(e, t, n) {
        n(62)("split", 2, function(e, t, r) {
            "use strict";
            var i = n(81),
                o = r,
                s = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var a = void 0 === /()??/.exec("")[1];
                r = function(e, t) {
                    var n = String(this);
                    if (void 0 === e && 0 === t) return [];
                    if (!i(e)) return o.call(n, e, t);
                    var r, u, c, l, f, h = [],
                        _ = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                        y = 0,
                        p = void 0 === t ? 4294967295 : t >>> 0,
                        d = new RegExp(e.source, _ + "g");
                    for (a || (r = new RegExp("^" + d.source + "$(?!\\s)", _));
                        (u = d.exec(n)) && !((c = u.index + u[0].length) > y && (h.push(n.slice(y, u.index)), !a && u.length > 1 && u[0].replace(r, function() {
                            for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (u[f] = void 0)
                        }), u.length > 1 && u.index < n.length && s.apply(h, u.slice(1)), l = u[0].length, y = c, h.length >= p));) d.lastIndex === u.index && d.lastIndex++;
                    return y === n.length ? !l && d.test("") || h.push("") : h.push(n.slice(y)), h.length > p ? h.slice(0, p) : h
                }
            } else "0".split(void 0, 0).length && (r = function(e, t) {
                return void 0 === e && 0 === t ? [] : o.call(this, e, t)
            });
            return [function(n, i) {
                var o = e(this),
                    s = void 0 == n ? void 0 : n[t];
                return void 0 !== s ? s.call(n, o, i) : r.call(String(o), n, i)
            }, r]
        })
    }, function(e, t, n) {
        n(62)("search", 1, function(e, t, n) {
            return [function(n) {
                "use strict";
                var r = e(this),
                    i = void 0 == n ? void 0 : n[t];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r))
            }, n]
        })
    }, function(e, t, n) {
        n(62)("replace", 2, function(e, t, n) {
            return [function(r, i) {
                "use strict";
                var o = e(this),
                    s = void 0 == r ? void 0 : r[t];
                return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i)
            }, n]
        })
    }, function(e, t, n) {
        n(62)("match", 1, function(e, t, n) {
            return [function(n) {
                "use strict";
                var r = e(this),
                    i = void 0 == n ? void 0 : n[t];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r))
            }, n]
        })
    }, function(e, t, n) {
        "use strict";
        n(126);
        var r = n(5),
            i = n(76),
            o = n(11),
            s = /./.toString,
            a = function(e) {
                n(15)(RegExp.prototype, "toString", e, !0)
            };
        n(3)(function() {
            return "/a/b" != s.call({
                source: "a",
                flags: "b"
            })
        }) ? a(function() {
            var e = r(this);
            return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? i.call(e) : void 0)
        }) : "toString" != s.name && a(function() {
            return s.call(this)
        })
    }, function(e, t, n) {
        var r = n(6),
            i = n(86),
            o = n(9).f,
            s = n(32).f,
            a = n(81),
            u = n(76),
            c = r.RegExp,
            l = c,
            f = c.prototype,
            h = /a/g,
            _ = /a/g,
            y = new c(h) !== h;
        if (n(11) && (!y || n(3)(function() {
                return _[n(7)("match")] = !1, c(h) != h || c(_) == _ || "/a/i" != c(h, "i")
            }))) {
            c = function(e, t) {
                var n = this instanceof c,
                    r = a(e),
                    o = void 0 === t;
                return !n && r && e.constructor === c && o ? e : i(y ? new l(r && !o ? e.source : e, t) : l((r = e instanceof c) ? e.source : e, r && o ? u.call(e) : t), n ? this : f, c)
            };
            for (var p = function(e) {
                    e in c || o(c, e, {
                        configurable: !0,
                        get: function() {
                            return l[e]
                        },
                        set: function(t) {
                            l[e] = t
                        }
                    })
                }, d = s(l), g = 0; d.length > g;) p(d[g++]);
            f.constructor = c, c.prototype = f, n(15)(r, "RegExp", c)
        }
        n(42)("RegExp")
    }, function(e, t, n) {
        n(42)("Array")
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(6),
            o = "findIndex",
            s = !0;
        o in [] && Array(1)[o](function() {
            s = !1
        }), r(r.P + r.F * s, "Array", {
            findIndex: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(52)(o)
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(5),
            o = !0;
        "find" in [] && Array(1).find(function() {
            o = !1
        }), r(r.P + r.F * o, "Array", {
            find: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(52)("find")
    }, function(e, t, n) {
        var r = n(0);
        r(r.P, "Array", {
            fill: n(77)
        }), n(52)("fill")
    }, function(e, t, n) {
        var r = n(0);
        r(r.P, "Array", {
            copyWithin: n(129)
        }), n(52)("copyWithin")
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(21),
            o = n(24),
            s = n(12),
            a = [].lastIndexOf,
            u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
        r(r.P + r.F * (u || !n(17)(a)), "Array", {
            lastIndexOf: function(e) {
                if (u) return a.apply(this, arguments) || 0;
                var t = i(this),
                    n = s(t.length),
                    r = n - 1;
                for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                    if (r in t && t[r] === e) return r || 0;
                return -1
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(93)(!1),
            o = [].indexOf,
            s = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (s || !n(17)(o)), "Array", {
            indexOf: function(e) {
                return s ? o.apply(this, arguments) || 0 : i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(130);
        r(r.P + r.F * !n(17)([].reduceRight, !0), "Array", {
            reduceRight: function(e) {
                return i(this, e, arguments.length, arguments[1], !0)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(130);
        r(r.P + r.F * !n(17)([].reduce, !0), "Array", {
            reduce: function(e) {
                return i(this, e, arguments.length, arguments[1], !1)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(4);
        r(r.P + r.F * !n(17)([].every, !0), "Array", {
            every: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(3);
        r(r.P + r.F * !n(17)([].some, !0), "Array", {
            some: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(2);
        r(r.P + r.F * !n(17)([].filter, !0), "Array", {
            filter: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(1);
        r(r.P + r.F * !n(17)([].map, !0), "Array", {
            map: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        var r = n(4),
            i = n(90),
            o = n(7)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    }, function(e, t, n) {
        var r = n(228);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(19)(0),
            o = n(17)([].forEach, !0);
        r(r.P + r.F * !o, "Array", {
            forEach: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(26),
            o = n(14),
            s = n(3),
            a = [].sort,
            u = [1, 2, 3];
        r(r.P + r.F * (s(function() {
            u.sort(void 0)
        }) || !s(function() {
            u.sort(null)
        }) || !n(17)(a)), "Array", {
            sort: function(e) {
                return void 0 === e ? a.call(o(this)) : a.call(o(this), i(e))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(89),
            o = n(25),
            s = n(34),
            a = n(12),
            u = [].slice;
        r(r.P + r.F * n(3)(function() {
            i && u.call(i)
        }), "Array", {
            slice: function(e, t) {
                var n = a(this.length),
                    r = o(this);
                if (t = void 0 === t ? n : t, "Array" == r) return u.call(this, e, t);
                for (var i = s(e, n), c = s(t, n), l = a(c - i), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == r ? this.charAt(i + h) : this[i + h];
                return f
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(21),
            o = [].join;
        r(r.P + r.F * (n(54) != Object || !n(17)(o)), "Array", {
            join: function(e) {
                return o.call(i(this), void 0 === e ? "," : e)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(131);
        r(r.S + r.F * n(3)(function() {
            function e() {}
            return !(Array.of.call(e) instanceof e)
        }), "Array", {
            of: function() {
                for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) i(n, e, arguments[e++]);
                return n.length = t, n
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(27),
            i = n(0),
            o = n(14),
            s = n(132),
            a = n(79),
            u = n(12),
            c = n(131),
            l = n(78);
        i(i.S + i.F * !n(63)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e) {
                var t, n, i, f, h = o(e),
                    _ = "function" == typeof this ? this : Array,
                    y = arguments.length,
                    p = y > 1 ? arguments[1] : void 0,
                    d = void 0 !== p,
                    g = 0,
                    v = l(h);
                if (d && (p = r(p, y > 2 ? arguments[2] : void 0, 2)), void 0 == v || _ == Array && a(v))
                    for (n = new _(t = u(h.length)); t > g; g++) c(n, g, d ? p(h[g], g) : h[g]);
                else
                    for (f = v.call(h), n = new _; !(i = f.next()).done; g++) c(n, g, d ? s(f, p, [i.value, g], !0) : i.value);
                return n.length = g, n
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Array", {
            isArray: n(90)
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(5),
            i = n(30);
        e.exports = function(e) {
            if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
            return i(r(this), "number" != e)
        }
    }, function(e, t, n) {
        var r = n(7)("toPrimitive"),
            i = Date.prototype;
        r in i || n(18)(i, r, n(237))
    }, function(e, t, n) {
        var r = Date.prototype,
            i = r.toString,
            o = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(15)(r, "toString", function() {
            var e = o.call(this);
            return e == e ? i.call(this) : "Invalid Date"
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(3),
            i = Date.prototype.getTime,
            o = Date.prototype.toISOString,
            s = function(e) {
                return e > 9 ? e : "0" + e
            };
        e.exports = r(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
        }) || !r(function() {
            o.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var e = this,
                t = e.getUTCFullYear(),
                n = e.getUTCMilliseconds(),
                r = t < 0 ? "-" : t > 9999 ? "+" : "";
            return r + ("00000" + Math.abs(t)).slice(r ? -6 : -4) + "-" + s(e.getUTCMonth() + 1) + "-" + s(e.getUTCDate()) + "T" + s(e.getUTCHours()) + ":" + s(e.getUTCMinutes()) + ":" + s(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
        } : o
    }, function(e, t, n) {
        var r = n(0),
            i = n(240);
        r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
            toISOString: i
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(14),
            o = n(30);
        r(r.P + r.F * n(3)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function(e) {
                var t = i(this),
                    n = o(t);
                return "number" != typeof n || isFinite(n) ? t.toISOString() : null
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("sup", function(e) {
            return function() {
                return e(this, "sup", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("sub", function(e) {
            return function() {
                return e(this, "sub", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("strike", function(e) {
            return function() {
                return e(this, "strike", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("small", function(e) {
            return function() {
                return e(this, "small", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("link", function(e) {
            return function(t) {
                return e(this, "a", "href", t)
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("italics", function(e) {
            return function() {
                return e(this, "i", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("fontsize", function(e) {
            return function(t) {
                return e(this, "font", "size", t)
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("fontcolor", function(e) {
            return function(t) {
                return e(this, "font", "color", t)
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("fixed", function(e) {
            return function() {
                return e(this, "tt", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("bold", function(e) {
            return function() {
                return e(this, "b", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("blink", function(e) {
            return function() {
                return e(this, "blink", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("big", function(e) {
            return function() {
                return e(this, "big", "", "")
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(13)("anchor", function(e) {
            return function(t) {
                return e(this, "a", "name", t)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(12),
            o = n(82),
            s = "".startsWith;
        r(r.P + r.F * n(80)("startsWith"), "String", {
            startsWith: function(e) {
                var t = o(this, e, "startsWith"),
                    n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                    r = String(e);
                return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.P, "String", {
            repeat: n(137)
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(82);
        r(r.P + r.F * n(80)("includes"), "String", {
            includes: function(e) {
                return !!~i(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(12),
            o = n(82),
            s = "".endsWith;
        r(r.P + r.F * n(80)("endsWith"), "String", {
            endsWith: function(e) {
                var t = o(this, e, "endsWith"),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = i(t.length),
                    a = void 0 === n ? r : Math.min(i(n), r),
                    u = String(e);
                return s ? s.call(t, u, a) : t.slice(a - u.length, a) === u
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(134)(!1);
        r(r.P, "String", {
            codePointAt: function(e) {
                return i(this, e)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(134)(!0);
        n(83)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    }, function(e, t, n) {
        "use strict";
        n(64)("trim", function(e) {
            return function() {
                return e(this, 3)
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(21),
            o = n(12);
        r(r.S, "String", {
            raw: function(e) {
                for (var t = i(e.raw), n = o(t.length), r = arguments.length, s = [], a = 0; n > a;) s.push(String(t[a++])), a < r && s.push(String(arguments[a]));
                return s.join("")
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(34),
            o = String.fromCharCode,
            s = String.fromCodePoint;
        r(r.S + r.F * (!!s && 1 != s.length), "String", {
            fromCodePoint: function(e) {
                for (var t, n = [], r = arguments.length, s = 0; r > s;) {
                    if (t = +arguments[s++], i(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
                    n.push(t < 65536 ? o(t) : o(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
                }
                return n.join("")
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            trunc: function(e) {
                return (e > 0 ? Math.floor : Math.ceil)(e)
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(84),
            o = Math.exp;
        r(r.S, "Math", {
            tanh: function(e) {
                var t = i(e = +e),
                    n = i(-e);
                return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (o(e) + o(-e))
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(84),
            o = Math.exp;
        r(r.S + r.F * n(3)(function() {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function(e) {
                return Math.abs(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (o(e - 1) - o(-e - 1)) * (Math.E / 2)
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            sign: n(85)
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            log2: function(e) {
                return Math.log(e) / Math.LN2
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            log1p: n(135)
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            log10: function(e) {
                return Math.log(e) * Math.LOG10E
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = Math.imul;
        r(r.S + r.F * n(3)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length
        }), "Math", {
            imul: function(e, t) {
                var n = +e,
                    r = +t,
                    i = 65535 & n,
                    o = 65535 & r;
                return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = Math.abs;
        r(r.S, "Math", {
            hypot: function(e, t) {
                for (var n, r, o = 0, s = 0, a = arguments.length, u = 0; s < a;) u < (n = i(arguments[s++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
                return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
            }
        })
    }, function(e, t, n) {
        var r = n(85),
            i = Math.pow,
            o = i(2, -52),
            s = i(2, -23),
            a = i(2, 127) * (2 - s),
            u = i(2, -126);
        e.exports = Math.fround || function(e) {
            var t, n, i = Math.abs(e),
                c = r(e);
            return i < u ? c * (i / u / s + 1 / o - 1 / o) * u * s : (n = (t = (1 + s / o) * i) - (t - i)) > a || n != n ? c * (1 / 0) : c * n
        }
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            fround: n(275)
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(84);
        r(r.S + r.F * (i != Math.expm1), "Math", {
            expm1: i
        })
    }, function(e, t, n) {
        var r = n(0),
            i = Math.exp;
        r(r.S, "Math", {
            cosh: function(e) {
                return (i(e = +e) + i(-e)) / 2
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Math", {
            clz32: function(e) {
                return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(85);
        r(r.S, "Math", {
            cbrt: function(e) {
                return i(e = +e) * Math.pow(Math.abs(e), 1 / 3)
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = Math.atanh;
        r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function(e) {
                return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = Math.asinh;
        r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
            asinh: function e(t) {
                return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(135),
            o = Math.sqrt,
            s = Math.acosh;
        r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
            acosh: function(e) {
                return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : i(e - 1 + o(e - 1) * o(e + 1))
            }
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(140);
        r(r.S + r.F * (Number.parseInt != i), "Number", {
            parseInt: i
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(139);
        r(r.S + r.F * (Number.parseFloat != i), "Number", {
            parseFloat: i
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(136),
            o = Math.abs;
        r(r.S, "Number", {
            isSafeInteger: function(e) {
                return i(e) && o(e) <= 9007199254740991
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Number", {
            isNaN: function(e) {
                return e != e
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Number", {
            isInteger: n(136)
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(6).isFinite;
        r(r.S, "Number", {
            isFinite: function(e) {
                return "number" == typeof e && i(e)
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(3),
            o = n(138),
            s = 1..toPrecision;
        r(r.P + r.F * (i(function() {
            return "1" !== s.call(1, void 0)
        }) || !i(function() {
            s.call({})
        })), "Number", {
            toPrecision: function(e) {
                var t = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === e ? s.call(t) : s.call(t, e)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(24),
            o = n(138),
            s = n(137),
            a = 1..toFixed,
            u = Math.floor,
            c = [0, 0, 0, 0, 0, 0],
            l = "Number.toFixed: incorrect invocation!",
            f = function(e, t) {
                for (var n = -1, r = t; ++n < 6;) r += e * c[n], c[n] = r % 1e7, r = u(r / 1e7)
            },
            h = function(e) {
                for (var t = 6, n = 0; --t >= 0;) n += c[t], c[t] = u(n / e), n = n % e * 1e7
            },
            _ = function() {
                for (var e = 6, t = ""; --e >= 0;)
                    if ("" !== t || 0 === e || 0 !== c[e]) {
                        var n = String(c[e]);
                        t = "" === t ? n : t + s.call("0", 7 - n.length) + n
                    } return t
            },
            y = function(e, t, n) {
                return 0 === t ? n : t % 2 == 1 ? y(e, t - 1, n * e) : y(e * e, t / 2, n)
            };
        r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(3)(function() {
            a.call({})
        })), "Number", {
            toFixed: function(e) {
                var t, n, r, a, u = o(this, l),
                    c = i(e),
                    p = "",
                    d = "0";
                if (c < 0 || c > 20) throw RangeError(l);
                if (u != u) return "NaN";
                if (u <= -1e21 || u >= 1e21) return String(u);
                if (u < 0 && (p = "-", u = -u), u > 1e-21)
                    if (n = (t = function(e) {
                            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                            for (; n >= 2;) t += 1, n /= 2;
                            return t
                        }(u * y(2, 69, 1)) - 69) < 0 ? u * y(2, -t, 1) : u / y(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                        for (f(0, n), r = c; r >= 7;) f(1e7, 0), r -= 7;
                        for (f(y(10, r, 1), 0), r = t - 1; r >= 23;) h(1 << 23), r -= 23;
                        h(1 << r), f(1, 1), h(2), d = _()
                    } else f(0, n), f(1 << -t, 0), d = _() + s.call("0", c);
                return d = c > 0 ? p + ((a = d.length) <= c ? "0." + s.call("0", c - a) + d : d.slice(0, a - c) + "." + d.slice(a - c)) : p + d
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(16),
            o = n(25),
            s = n(86),
            a = n(30),
            u = n(3),
            c = n(32).f,
            l = n(23).f,
            f = n(9).f,
            h = n(64).trim,
            _ = r.Number,
            y = _,
            p = _.prototype,
            d = "Number" == o(n(33)(p)),
            g = "trim" in String.prototype,
            v = function(e) {
                var t = a(e, !1);
                if ("string" == typeof t && t.length > 2) {
                    var n, r, i, o = (t = g ? t.trim() : h(t, 3)).charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
                    } else if (48 === o) {
                        switch (t.charCodeAt(1)) {
                            case 66:
                            case 98:
                                r = 2, i = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, i = 55;
                                break;
                            default:
                                return +t
                        }
                        for (var s, u = t.slice(2), c = 0, l = u.length; c < l; c++)
                            if ((s = u.charCodeAt(c)) < 48 || s > i) return NaN;
                        return parseInt(u, r)
                    }
                }
                return +t
            };
        if (!_(" 0o1") || !_("0b1") || _("+0x1")) {
            _ = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof _ && (d ? u(function() {
                    p.valueOf.call(n)
                }) : "Number" != o(n)) ? s(new y(v(t)), n, _) : v(t)
            };
            for (var b, m = n(11) ? c(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; m.length > S; S++) i(y, b = m[S]) && !i(_, b) && f(_, b, l(y, b));
            _.prototype = p, p.constructor = _, n(15)(r, "Number", _)
        }
    }, function(e, t, n) {
        var r = n(0),
            i = n(139);
        r(r.G + r.F * (parseFloat != i), {
            parseFloat: i
        })
    }, function(e, t, n) {
        var r = n(0),
            i = n(140);
        r(r.G + r.F * (parseInt != i), {
            parseInt: i
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(4),
            i = n(31),
            o = n(7)("hasInstance"),
            s = Function.prototype;
        o in s || n(9).f(s, o, {
            value: function(e) {
                if ("function" != typeof this || !r(e)) return !1;
                if (!r(this.prototype)) return e instanceof this;
                for (; e = i(e);)
                    if (this.prototype === e) return !0;
                return !1
            }
        })
    }, function(e, t, n) {
        var r = n(9).f,
            i = Function.prototype,
            o = /^\s*function ([^ (]*)/;
        "name" in i || n(11) && r(i, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.P, "Function", {
            bind: n(142)
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(65),
            i = {};
        i[n(7)("toStringTag")] = "z", i + "" != "[object z]" && n(15)(Object.prototype, "toString", function() {
            return "[object " + r(this) + "]"
        }, !0)
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Object", {
            setPrototypeOf: n(88).set
        })
    }, function(e, t) {
        e.exports = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Object", {
            is: n(303)
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S + r.F, "Object", {
            assign: n(143)
        })
    }, function(e, t, n) {
        var r = n(4);
        n(20)("isExtensible", function(e) {
            return function(t) {
                return !!r(t) && (!e || e(t))
            }
        })
    }, function(e, t, n) {
        var r = n(4);
        n(20)("isSealed", function(e) {
            return function(t) {
                return !r(t) || !!e && e(t)
            }
        })
    }, function(e, t, n) {
        var r = n(4);
        n(20)("isFrozen", function(e) {
            return function(t) {
                return !r(t) || !!e && e(t)
            }
        })
    }, function(e, t, n) {
        var r = n(4),
            i = n(29).onFreeze;
        n(20)("preventExtensions", function(e) {
            return function(t) {
                return e && r(t) ? e(i(t)) : t
            }
        })
    }, function(e, t, n) {
        var r = n(4),
            i = n(29).onFreeze;
        n(20)("seal", function(e) {
            return function(t) {
                return e && r(t) ? e(i(t)) : t
            }
        })
    }, function(e, t, n) {
        var r = n(4),
            i = n(29).onFreeze;
        n(20)("freeze", function(e) {
            return function(t) {
                return e && r(t) ? e(i(t)) : t
            }
        })
    }, function(e, t, n) {
        n(20)("getOwnPropertyNames", function() {
            return n(144).f
        })
    }, function(e, t, n) {
        var r = n(14),
            i = n(55);
        n(20)("keys", function() {
            return function(e) {
                return i(r(e))
            }
        })
    }, function(e, t, n) {
        var r = n(14),
            i = n(31);
        n(20)("getPrototypeOf", function() {
            return function(e) {
                return i(r(e))
            }
        })
    }, function(e, t, n) {
        var r = n(21),
            i = n(23).f;
        n(20)("getOwnPropertyDescriptor", function() {
            return function(e, t) {
                return i(r(e), t)
            }
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S + r.F * !n(11), "Object", {
            defineProperties: n(145)
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S + r.F * !n(11), "Object", {
            defineProperty: n(9).f
        })
    }, function(e, t, n) {
        var r = n(0);
        r(r.S, "Object", {
            create: n(33)
        })
    }, function(e, t, n) {
        var r = n(55),
            i = n(67),
            o = n(66);
        e.exports = function(e) {
            var t = r(e),
                n = i.f;
            if (n)
                for (var s, a = n(e), u = o.f, c = 0; a.length > c;) u.call(e, s = a[c++]) && t.push(s);
            return t
        }
    }, function(e, t, n) {
        var r = n(6),
            i = n(37),
            o = n(43),
            s = n(147),
            a = n(9).f;
        e.exports = function(e) {
            var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {
                value: s.f(e)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(16),
            o = n(11),
            s = n(0),
            a = n(15),
            u = n(29).KEY,
            c = n(3),
            l = n(94),
            f = n(44),
            h = n(35),
            _ = n(7),
            y = n(147),
            p = n(320),
            d = n(319),
            g = n(90),
            v = n(5),
            b = n(4),
            m = n(21),
            S = n(30),
            E = n(36),
            R = n(33),
            O = n(144),
            A = n(23),
            w = n(9),
            I = n(55),
            M = A.f,
            T = w.f,
            k = O.f,
            P = r.Symbol,
            F = r.JSON,
            N = F && F.stringify,
            j = _("_hidden"),
            U = _("toPrimitive"),
            B = {}.propertyIsEnumerable,
            L = l("symbol-registry"),
            D = l("symbols"),
            Y = l("op-symbols"),
            C = Object.prototype,
            x = "function" == typeof P,
            q = r.QObject,
            V = !q || !q.prototype || !q.prototype.findChild,
            K = o && c(function() {
                return 7 != R(T({}, "a", {
                    get: function() {
                        return T(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, n) {
                var r = M(C, t);
                r && delete C[t], T(e, t, n), r && e !== C && T(C, t, r)
            } : T,
            G = function(e) {
                var t = D[e] = R(P.prototype);
                return t._k = e, t
            },
            z = x && "symbol" == typeof P.iterator ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                return e instanceof P
            },
            H = function(e, t, n) {
                return e === C && H(Y, t, n), v(e), t = S(t, !0), v(n), i(D, t) ? (n.enumerable ? (i(e, j) && e[j][t] && (e[j][t] = !1), n = R(n, {
                    enumerable: E(0, !1)
                })) : (i(e, j) || T(e, j, E(1, {})), e[j][t] = !0), K(e, t, n)) : T(e, t, n)
            },
            J = function(e, t) {
                v(e);
                for (var n, r = d(t = m(t)), i = 0, o = r.length; o > i;) H(e, n = r[i++], t[n]);
                return e
            },
            W = function(e) {
                var t = B.call(this, e = S(e, !0));
                return !(this === C && i(D, e) && !i(Y, e)) && (!(t || !i(this, e) || !i(D, e) || i(this, j) && this[j][e]) || t)
            },
            X = function(e, t) {
                if (e = m(e), t = S(t, !0), e !== C || !i(D, t) || i(Y, t)) {
                    var n = M(e, t);
                    return !n || !i(D, t) || i(e, j) && e[j][t] || (n.enumerable = !0), n
                }
            },
            Z = function(e) {
                for (var t, n = k(m(e)), r = [], o = 0; n.length > o;) i(D, t = n[o++]) || t == j || t == u || r.push(t);
                return r
            },
            Q = function(e) {
                for (var t, n = e === C, r = k(n ? Y : m(e)), o = [], s = 0; r.length > s;) !i(D, t = r[s++]) || n && !i(C, t) || o.push(D[t]);
                return o
            };
        x || (a((P = function() {
            if (this instanceof P) throw TypeError("Symbol is not a constructor!");
            var e = h(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) {
                    this === C && t.call(Y, n), i(this, j) && i(this[j], e) && (this[j][e] = !1), K(this, e, E(1, n))
                };
            return o && V && K(C, e, {
                configurable: !0,
                set: t
            }), G(e)
        }).prototype, "toString", function() {
            return this._k
        }), A.f = X, w.f = H, n(32).f = O.f = Z, n(66).f = W, n(67).f = Q, o && !n(43) && a(C, "propertyIsEnumerable", W, !0), y.f = function(e) {
            return G(_(e))
        }), s(s.G + s.W + s.F * !x, {
            Symbol: P
        });
        for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; $.length > ee;) _($[ee++]);
        for (var te = I(_.store), ne = 0; te.length > ne;) p(te[ne++]);
        s(s.S + s.F * !x, "Symbol", {
            for: function(e) {
                return i(L, e += "") ? L[e] : L[e] = P(e)
            },
            keyFor: function(e) {
                if (!z(e)) throw TypeError(e + " is not a symbol!");
                for (var t in L)
                    if (L[t] === e) return t
            },
            useSetter: function() {
                V = !0
            },
            useSimple: function() {
                V = !1
            }
        }), s(s.S + s.F * !x, "Object", {
            create: function(e, t) {
                return void 0 === t ? R(e) : J(R(e), t)
            },
            defineProperty: H,
            defineProperties: J,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: Q
        }), F && s(s.S + s.F * (!x || c(function() {
            var e = P();
            return "[null]" != N([e]) || "{}" != N({
                a: e
            }) || "{}" != N(Object(e))
        })), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
                if (n = t = r[1], (b(t) || void 0 !== e) && !z(e)) return g(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !z(t)) return t
                }), r[1] = t, N.apply(F, r)
            }
        }), P.prototype[U] || n(18)(P.prototype, U, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
    }, function(e, t, n) {
        n(321), n(318), n(317), n(316), n(315), n(314), n(313), n(312), n(311), n(310), n(309), n(308), n(307), n(306), n(305), n(304), n(302), n(301), n(300), n(299), n(298), n(297), n(296), n(295), n(294), n(293), n(292), n(291), n(290), n(289), n(288), n(287), n(286), n(285), n(284), n(283), n(282), n(281), n(280), n(279), n(278), n(277), n(276), n(274), n(273), n(272), n(271), n(270), n(269), n(268), n(267), n(266), n(265), n(264), n(263), n(262), n(261), n(260), n(259), n(258), n(257), n(256), n(255), n(254), n(253), n(252), n(251), n(250), n(249), n(248), n(247), n(246), n(245), n(244), n(243), n(242), n(241), n(239), n(238), n(236), n(235), n(234), n(233), n(232), n(231), n(230), n(227), n(226), n(225), n(224), n(223), n(222), n(221), n(220), n(219), n(218), n(217), n(216), n(215), n(128), n(214), n(213), n(126), n(212), n(211), n(210), n(209), n(208), n(204), n(203), n(202), n(201), n(200), n(199), n(198), n(197), n(196), n(195), n(194), n(193), n(192), n(191), n(190), n(189), n(188), n(187), n(186), n(185), n(184), n(183), n(182), n(181), n(180), n(179), n(177), n(176), n(175), e.exports = n(37)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MD5 = t.SFSRoom = t.SetBuddyVariablesRequest = t.RemoveBuddyRequest = t.InitBuddyListRequest = t.GoOnlineRequest = t.BuddyMessageRequest = t.BlockBuddyRequest = t.AddBuddyRequest = t.SetUserPositionRequest = t.QuickJoinGameRequest = t.JoinRoomInvitationRequest = t.InviteUsersRequest = t.InvitationReplyRequest = t.CreateSFSGameRequest = t.BanUserRequest = t.KickUserRequest = t.ExtensionRequest = t.FindUsersRequest = t.FindRoomsRequest = t.PlayerToSpectatorRequest = t.SpectatorToPlayerRequest = t.UnsubscribeRoomGroupRequest = t.SubscribeRoomGroupRequest = t.SetUserVariablesRequest = t.SetRoomVariablesRequest = t.AdminMessageRequest = t.ModeratorMessageRequest = t.ObjectMessageRequest = t.PrivateMessageRequest = t.PublicMessageRequest = t.ChangeRoomCapacityRequest = t.ChangeRoomPasswordStateRequest = t.ChangeRoomNameRequest = t.LeaveRoomRequest = t.CreateRoomRequest = t.JoinRoomRequest = t.LogoutRequest = t.LoginRequest = t.ClientDisconnectionReason = t.LoggerEvent = t.LogLevel = t.SFSErrorCodes = t.MessageRecipientMode = t.BanMode = t.MapLimits = t.RoomExtension = t.RoomEvents = t.RoomPermissions = t.MMORoomSettings = t.SFSGameSettings = t.RoomSettings = t.UserProperties = t.RoomProperties = t.StringMatch = t.NumberMatch = t.BoolMatch = t.LogicOperator = t.MatchExpression = t.MMOItemVariable = t.ReservedBuddyVariables = t.SFSBuddyVariable = t.ReservedRoomVariables = t.SFSRoomVariable = t.SFSUserVariable = t.VariableType = t.UserPrivileges = t.InvitationReply = t.Vec3D = t.SFSArray = t.SFSObject = t.SFSDataType = t.SFSBuddyEvent = t.SFSEvent = t.SmartFox = void 0;
        var r = n(322);
        Object.keys(r).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            })
        });
        var i = n(174);
        Object.defineProperty(t, "SmartFox", {
            enumerable: !0,
            get: function() {
                return i.SmartFox
            }
        });
        var o = n(38);
        Object.defineProperty(t, "SFSEvent", {
            enumerable: !0,
            get: function() {
                return o.SFSEvent
            }
        }), Object.defineProperty(t, "SFSBuddyEvent", {
            enumerable: !0,
            get: function() {
                return o.SFSBuddyEvent
            }
        });
        var s = n(8);
        Object.defineProperty(t, "SFSDataType", {
            enumerable: !0,
            get: function() {
                return s.SFSDataType
            }
        }), Object.defineProperty(t, "SFSObject", {
            enumerable: !0,
            get: function() {
                return s.SFSObject
            }
        }), Object.defineProperty(t, "SFSArray", {
            enumerable: !0,
            get: function() {
                return s.SFSArray
            }
        }), Object.defineProperty(t, "Vec3D", {
            enumerable: !0,
            get: function() {
                return s.Vec3D
            }
        });
        var a = n(71);
        Object.defineProperty(t, "InvitationReply", {
            enumerable: !0,
            get: function() {
                return a.InvitationReply
            }
        });
        var u = n(47);
        Object.defineProperty(t, "UserPrivileges", {
            enumerable: !0,
            get: function() {
                return u.UserPrivileges
            }
        });
        var c = n(48);
        Object.defineProperty(t, "VariableType", {
            enumerable: !0,
            get: function() {
                return c.VariableType
            }
        });
        var l = n(58);
        Object.defineProperty(t, "SFSUserVariable", {
            enumerable: !0,
            get: function() {
                return l.SFSUserVariable
            }
        });
        var f = n(49);
        Object.defineProperty(t, "SFSRoomVariable", {
            enumerable: !0,
            get: function() {
                return f.SFSRoomVariable
            }
        }), Object.defineProperty(t, "ReservedRoomVariables", {
            enumerable: !0,
            get: function() {
                return f.ReservedRoomVariables
            }
        });
        var h = n(46);
        Object.defineProperty(t, "SFSBuddyVariable", {
            enumerable: !0,
            get: function() {
                return h.SFSBuddyVariable
            }
        }), Object.defineProperty(t, "ReservedBuddyVariables", {
            enumerable: !0,
            get: function() {
                return h.ReservedBuddyVariables
            }
        });
        var _ = n(72);
        Object.defineProperty(t, "MMOItemVariable", {
            enumerable: !0,
            get: function() {
                return _.MMOItemVariable
            }
        });
        var y = n(45);
        Object.defineProperty(t, "MatchExpression", {
            enumerable: !0,
            get: function() {
                return y.MatchExpression
            }
        }), Object.defineProperty(t, "LogicOperator", {
            enumerable: !0,
            get: function() {
                return y.LogicOperator
            }
        });
        var p = n(159);
        Object.defineProperty(t, "BoolMatch", {
            enumerable: !0,
            get: function() {
                return p.BoolMatch
            }
        }), Object.defineProperty(t, "NumberMatch", {
            enumerable: !0,
            get: function() {
                return p.NumberMatch
            }
        }), Object.defineProperty(t, "StringMatch", {
            enumerable: !0,
            get: function() {
                return p.StringMatch
            }
        });
        var d = n(158);
        Object.defineProperty(t, "RoomProperties", {
            enumerable: !0,
            get: function() {
                return d.RoomProperties
            }
        }), Object.defineProperty(t, "UserProperties", {
            enumerable: !0,
            get: function() {
                return d.UserProperties
            }
        });
        var g = n(56);
        Object.defineProperty(t, "RoomSettings", {
            enumerable: !0,
            get: function() {
                return g.RoomSettings
            }
        }), Object.defineProperty(t, "SFSGameSettings", {
            enumerable: !0,
            get: function() {
                return g.SFSGameSettings
            }
        }), Object.defineProperty(t, "MMORoomSettings", {
            enumerable: !0,
            get: function() {
                return g.MMORoomSettings
            }
        }), Object.defineProperty(t, "RoomPermissions", {
            enumerable: !0,
            get: function() {
                return g.RoomPermissions
            }
        }), Object.defineProperty(t, "RoomEvents", {
            enumerable: !0,
            get: function() {
                return g.RoomEvents
            }
        }), Object.defineProperty(t, "RoomExtension", {
            enumerable: !0,
            get: function() {
                return g.RoomExtension
            }
        }), Object.defineProperty(t, "MapLimits", {
            enumerable: !0,
            get: function() {
                return g.MapLimits
            }
        }), Object.defineProperty(t, "BanMode", {
            enumerable: !0,
            get: function() {
                return g.BanMode
            }
        }), Object.defineProperty(t, "MessageRecipientMode", {
            enumerable: !0,
            get: function() {
                return g.MessageRecipientMode
            }
        });
        var v = n(73);
        Object.defineProperty(t, "SFSErrorCodes", {
            enumerable: !0,
            get: function() {
                return v.SFSErrorCodes
            }
        });
        var b = n(50);
        Object.defineProperty(t, "LogLevel", {
            enumerable: !0,
            get: function() {
                return b.LogLevel
            }
        }), Object.defineProperty(t, "LoggerEvent", {
            enumerable: !0,
            get: function() {
                return b.LoggerEvent
            }
        });
        var m = n(51);
        Object.defineProperty(t, "ClientDisconnectionReason", {
            enumerable: !0,
            get: function() {
                return m.ClientDisconnectionReason
            }
        });
        var S = n(118);
        Object.defineProperty(t, "LoginRequest", {
            enumerable: !0,
            get: function() {
                return S.LoginRequest
            }
        });
        var E = n(116);
        Object.defineProperty(t, "LogoutRequest", {
            enumerable: !0,
            get: function() {
                return E.LogoutRequest
            }
        });
        var R = n(115);
        Object.defineProperty(t, "JoinRoomRequest", {
            enumerable: !0,
            get: function() {
                return R.JoinRoomRequest
            }
        });
        var O = n(70);
        Object.defineProperty(t, "CreateRoomRequest", {
            enumerable: !0,
            get: function() {
                return O.CreateRoomRequest
            }
        });
        var A = n(157);
        Object.defineProperty(t, "LeaveRoomRequest", {
            enumerable: !0,
            get: function() {
                return A.LeaveRoomRequest
            }
        });
        var w = n(114);
        Object.defineProperty(t, "ChangeRoomNameRequest", {
            enumerable: !0,
            get: function() {
                return w.ChangeRoomNameRequest
            }
        });
        var I = n(113);
        Object.defineProperty(t, "ChangeRoomPasswordStateRequest", {
            enumerable: !0,
            get: function() {
                return I.ChangeRoomPasswordStateRequest
            }
        });
        var M = n(112);
        Object.defineProperty(t, "ChangeRoomCapacityRequest", {
            enumerable: !0,
            get: function() {
                return M.ChangeRoomCapacityRequest
            }
        });
        var T = n(69);
        Object.defineProperty(t, "PublicMessageRequest", {
            enumerable: !0,
            get: function() {
                return T.PublicMessageRequest
            }
        }), Object.defineProperty(t, "PrivateMessageRequest", {
            enumerable: !0,
            get: function() {
                return T.PrivateMessageRequest
            }
        }), Object.defineProperty(t, "ObjectMessageRequest", {
            enumerable: !0,
            get: function() {
                return T.ObjectMessageRequest
            }
        }), Object.defineProperty(t, "ModeratorMessageRequest", {
            enumerable: !0,
            get: function() {
                return T.ModeratorMessageRequest
            }
        }), Object.defineProperty(t, "AdminMessageRequest", {
            enumerable: !0,
            get: function() {
                return T.AdminMessageRequest
            }
        });
        var k = n(111);
        Object.defineProperty(t, "SetRoomVariablesRequest", {
            enumerable: !0,
            get: function() {
                return k.SetRoomVariablesRequest
            }
        });
        var P = n(110);
        Object.defineProperty(t, "SetUserVariablesRequest", {
            enumerable: !0,
            get: function() {
                return P.SetUserVariablesRequest
            }
        });
        var F = n(109);
        Object.defineProperty(t, "SubscribeRoomGroupRequest", {
            enumerable: !0,
            get: function() {
                return F.SubscribeRoomGroupRequest
            }
        });
        var N = n(108);
        Object.defineProperty(t, "UnsubscribeRoomGroupRequest", {
            enumerable: !0,
            get: function() {
                return N.UnsubscribeRoomGroupRequest
            }
        });
        var j = n(107);
        Object.defineProperty(t, "SpectatorToPlayerRequest", {
            enumerable: !0,
            get: function() {
                return j.SpectatorToPlayerRequest
            }
        });
        var U = n(106);
        Object.defineProperty(t, "PlayerToSpectatorRequest", {
            enumerable: !0,
            get: function() {
                return U.PlayerToSpectatorRequest
            }
        });
        var B = n(105);
        Object.defineProperty(t, "FindRoomsRequest", {
            enumerable: !0,
            get: function() {
                return B.FindRoomsRequest
            }
        });
        var L = n(104);
        Object.defineProperty(t, "FindUsersRequest", {
            enumerable: !0,
            get: function() {
                return L.FindUsersRequest
            }
        });
        var D = n(96);
        Object.defineProperty(t, "ExtensionRequest", {
            enumerable: !0,
            get: function() {
                return D.ExtensionRequest
            }
        });
        var Y = n(156);
        Object.defineProperty(t, "KickUserRequest", {
            enumerable: !0,
            get: function() {
                return Y.KickUserRequest
            }
        });
        var C = n(155);
        Object.defineProperty(t, "BanUserRequest", {
            enumerable: !0,
            get: function() {
                return C.BanUserRequest
            }
        });
        var x = n(154);
        Object.defineProperty(t, "CreateSFSGameRequest", {
            enumerable: !0,
            get: function() {
                return x.CreateSFSGameRequest
            }
        });
        var q = n(153);
        Object.defineProperty(t, "InvitationReplyRequest", {
            enumerable: !0,
            get: function() {
                return q.InvitationReplyRequest
            }
        });
        var V = n(68);
        Object.defineProperty(t, "InviteUsersRequest", {
            enumerable: !0,
            get: function() {
                return V.InviteUsersRequest
            }
        });
        var K = n(152);
        Object.defineProperty(t, "JoinRoomInvitationRequest", {
            enumerable: !0,
            get: function() {
                return K.JoinRoomInvitationRequest
            }
        });
        var G = n(151);
        Object.defineProperty(t, "QuickJoinGameRequest", {
            enumerable: !0,
            get: function() {
                return G.QuickJoinGameRequest
            }
        });
        var z = n(103);
        Object.defineProperty(t, "SetUserPositionRequest", {
            enumerable: !0,
            get: function() {
                return z.SetUserPositionRequest
            }
        });
        var H = n(101);
        Object.defineProperty(t, "AddBuddyRequest", {
            enumerable: !0,
            get: function() {
                return H.AddBuddyRequest
            }
        });
        var J = n(99);
        Object.defineProperty(t, "BlockBuddyRequest", {
            enumerable: !0,
            get: function() {
                return J.BlockBuddyRequest
            }
        });
        var W = n(150);
        Object.defineProperty(t, "BuddyMessageRequest", {
            enumerable: !0,
            get: function() {
                return W.BuddyMessageRequest
            }
        });
        var X = n(98);
        Object.defineProperty(t, "GoOnlineRequest", {
            enumerable: !0,
            get: function() {
                return X.GoOnlineRequest
            }
        });
        var Z = n(102);
        Object.defineProperty(t, "InitBuddyListRequest", {
            enumerable: !0,
            get: function() {
                return Z.InitBuddyListRequest
            }
        });
        var Q = n(100);
        Object.defineProperty(t, "RemoveBuddyRequest", {
            enumerable: !0,
            get: function() {
                return Q.RemoveBuddyRequest
            }
        });
        var $ = n(97);
        Object.defineProperty(t, "SetBuddyVariablesRequest", {
            enumerable: !0,
            get: function() {
                return $.SetBuddyVariablesRequest
            }
        });
        var ee = n(10);
        Object.defineProperty(t, "SFSRoom", {
            enumerable: !0,
            get: function() {
                return ee.SFSRoom
            }
        });
        var te = n(117);
        Object.defineProperty(t, "MD5", {
            enumerable: !0,
            get: function() {
                return te.MD5
            }
        }), n(149)
    }])
});
//# sourceMappingURL=sfs2x-api-1.7.17.js.map