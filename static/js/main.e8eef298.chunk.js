/*! For license information please see main.e8eef298.chunk.js.LICENSE.txt */
(this["webpackJsonpproject-coinflip-v-6"] =
  this["webpackJsonpproject-coinflip-v-6"] || []).push([
  [0],
  {
    122: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a,
        i,
        o,
        c,
        s,
        u,
        l,
        p,
        f = n(0),
        d = n.n(f),
        h = n(7),
        m = n.n(h),
        y = (n(34), n(4)),
        b = n(2),
        v = n(3),
        g = n(20),
        w = n.n(g),
        x = n(5),
        O = n(9),
        j = n(6),
        E = n.n(j),
        k = n(21),
        T = n.n(k),
        L = d.a.createContext({
          userAddress: "",
          setUserAddress: function () {},
          userBalance: "",
          setUserBalance: function () {},
          winningsBalance: "",
          setWinningsBalance: function () {},
        }),
        C = L.Provider,
        A = function () {
          return Object(f.useContext)(L);
        },
        N = d.a.createContext({
          contractAddress: "",
          setContractAddress: "",
          coinflip: "",
          setCoinflip: function () {},
          web3: "",
          setWeb3: function () {},
          network: "",
          setNetwork: "",
          contractBalance: "",
          setContractBalance: function () {},
          owner: "",
          setOwner: function () {},
          isOwner: !1,
          setIsOwner: function () {},
          sentQueryId: "",
          setSentQueryId: function () {},
          awaitingCallbackResponse: !1,
          setAwaitingCallbackResponse: function () {},
          awaitingWithdrawal: !1,
          setAwaitingWithdrawal: function () {},
        }),
        B = N.Provider,
        _ = function () {
          return Object(f.useContext)(N);
        };
      function M() {
        M = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            o = Object.create(i.prototype),
            c = new A(r || []);
          return a(o, "_invoke", { value: k(e, n, c) }), o;
        }
        function p(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var f = "suspendedStart",
          d = "executing",
          h = "completed",
          m = {};
        function y() {}
        function b() {}
        function v() {}
        var g = {};
        u(g, o, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          x = w && w(w(N([])));
        x && x !== n && r.call(x, o) && (g = x);
        var O = (v.prototype = y.prototype = Object.create(g));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(a, i, o, c) {
            var s = p(e[a], e, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                l = u.value;
              return l && "object" == typeof l && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, o, c);
                    },
                    function (e) {
                      n("throw", e, o, c);
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      (u.value = e), o(u);
                    },
                    function (e) {
                      return n("throw", e, o, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (i = i ? i.then(a, a) : a());
            },
          });
        }
        function k(t, n, r) {
          var a = f;
          return function (i, o) {
            if (a === d) throw new Error("Generator is already running");
            if (a === h) {
              if ("throw" === i) throw o;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = o; ; ) {
              var c = r.delegate;
              if (c) {
                var s = T(c, r);
                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (a === f) throw ((a = h), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              a = d;
              var u = p(t, n, r);
              if ("normal" === u.type) {
                if (((a = r.done ? h : "suspendedYield"), u.arg === m))
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((a = h), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function T(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                T(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              m
            );
          var i = p(a, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((n[t.resultName] = o.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : o
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[o];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                i = function n() {
                  for (; ++a < t.length; )
                    if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(typeof t + " is not iterable");
        }
        return (
          (b.prototype = v),
          a(O, "constructor", { value: v, configurable: !0 }),
          a(v, "constructor", { value: b, configurable: !0 }),
          (b.displayName = u(v, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          j(E.prototype),
          u(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new E(l(e, n, r, a), i);
            return t.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          j(O),
          u(O, s, "Generator"),
          u(O, o, function () {
            return this;
          }),
          u(O, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(C),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function a(r, a) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = e)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  c = o.completion;
                if ("root" === o.tryLoc) return a("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      var S,
        F,
        W = v.a.nav(
          r ||
            (r = Object(b.a)([
              "\n    height: 4rem;\n",
            ]))
        ),
        P = v.a.div(
          a ||
            (a = Object(b.a)([
              "\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: .5rem;\n    ",
            ]))
        ),
        G = v.a.div(
          i ||
            (i = Object(b.a)([
              "\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    ",
            ]))
        ),
        I = v.a.img(
          o ||
            (o = Object(b.a)([
              "\n    margin-left: 1.2rem;\n    height: 5.5rem;\n    width: 5.rem;\n    pointer-events: none;\n",
            ]))
        ),
        z = v.a.div(
          c ||
            (c = Object(b.a)([
              "\n    color: white;\n    text-shadow: 2px 2px #666666;\n    font-size: 2.25rem;\n    font-weight: bolder;\n    margin-left: 1rem;\n",
            ]))
        ),
        U = v.a.div(
          s ||
            (s = Object(b.a)([
              "\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 2.2rem;\n    width: 19.5rem;\n    padding-left: .6rem;\n    border-radius: .8rem;\n    border: 1px solid #666666;\n    background: white;\n    color: #5D432C;\n    font-height: 4rem;\n    font-size: 1rem;\n    text-shadow: .5px .5px pink;\n    border-right: 1px solid #666666;\n    margin-right: 2rem;\n    ",
            ]))
        ),
        D = Object(v.a)(U)(
          u ||
            (u = Object(b.a)([
              "\n    border: 1px solid #35281E;\n    height: 1.9rem;\n    width: 7.8rem;\n    color: white;\n    padding-right: .5rem;\n    padding-left: .4rem;\n    padding-bottom: .05rem;\n    background: #5D432C;\n    border-radius: .8rem;\n    margin-right: 0\n",
            ]))
        ),
        Y = v.a.div(
          l ||
            (l = Object(b.a)([
              "\n    display: flex;\n    align-items: center;\n",
            ]))
        ),
        R = v.a.div(
          p ||
            (p = Object(b.a)([
              "\n    margin-right: 2rem;\n    font-size: 1.3rem;\n",
            ]))
        );
      function H() {
        var e = A(),
          t = e.userAddress,
          n = e.userBalance,
          r = e.setUserAddress,
          a = _().network,
          i = t ? t.slice(0, 5) + "..." + t.slice(37, 42) : null,
          o = (function () {
            var e = Object(x.a)(
              M().mark(function e() {
                var t, n, a;
                return M().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), window.ethereum.enable();
                      case 2:
                        return (
                          (t = new E.a(E.a.givenProvider)),
                          console.log("user addresses start"),
                          (e.next = 6),
                          t.eth.getAccounts()
                        );
                      case 6:
                        return (
                          (n = e.sent),
                          console.log("accounts", n),
                          (a = n[0]),
                          r(a),
                          e.abrupt("return", a)
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          console.log("userbalance----", parseFloat(n).toFixed(3), typeof n),
          d.a.createElement(
            W,
            null,
            d.a.createElement(
              P,
              null,
              d.a.createElement(
                G,
                null,
                d.a.createElement(I, { src: T.a, alt: "ethereum logo" }),
                d.a.createElement(
                  z,
                  { className: "nav-title" },
                  "  "
                )
              ),
              d.a.createElement(
                Y,
                null,
                d.a.createElement(R, { className: "nav-title" }, a),
                t
                  ? d.a.createElement(
                      U,
                      null,
                      n,
                      " WETH",
                      d.a.createElement(D, null, i)
                    )
                  : d.a.createElement(
                      "div",
                      null,
                      d.a.createElement(
                        "button",
                        { className: "connect-wallet", onClick: o },
                        "connect wallet"
                      )
                    )
              )
            )
          )
        );
      }
      var Q = v.a.div(
          S ||
            (S = Object(b.a)([
              "\n    font-size: 1.7rem;\n    display: flex;\n    justify-content: center;\n color: rgb(255, 156, 25);\n   ",
            ]))
        ),
        V = Object(v.a)(Q)(
          F || (F = Object(b.a)(["\n    margin-top: rem;\n"]))
        );
      function J() {
        var e = _().contractBalance;
        return d.a.createElement(
          d.a.Fragment,
          null,
          d.a.createElement(
            Q,
            null,
            "".concat(parseFloat(e).toFixed(3), " WETH")
          ),
          d.a.createElement(V, null, "Available to Win")
        );
      }
      var K,
        Z,
        $,
        q,
        X,
        ee,
        te = n(25),
        ne = n.n(te),
        re = n(26),
        ae = n.n(re),
        ie = n(10);
      function oe() {
        oe = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            o = Object.create(i.prototype),
            c = new A(r || []);
          return a(o, "_invoke", { value: k(e, n, c) }), o;
        }
        function p(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var f = "suspendedStart",
          d = "executing",
          h = "completed",
          m = {};
        function y() {}
        function b() {}
        function v() {}
        var g = {};
        u(g, o, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          x = w && w(w(N([])));
        x && x !== n && r.call(x, o) && (g = x);
        var O = (v.prototype = y.prototype = Object.create(g));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(a, i, o, c) {
            var s = p(e[a], e, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                l = u.value;
              return l && "object" == typeof l && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, o, c);
                    },
                    function (e) {
                      n("throw", e, o, c);
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      (u.value = e), o(u);
                    },
                    function (e) {
                      return n("throw", e, o, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (i = i ? i.then(a, a) : a());
            },
          });
        }
        function k(t, n, r) {
          var a = f;
          return function (i, o) {
            if (a === d) throw new Error("Generator is already running");
            if (a === h) {
              if ("throw" === i) throw o;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = o; ; ) {
              var c = r.delegate;
              if (c) {
                var s = T(c, r);
                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (a === f) throw ((a = h), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              a = d;
              var u = p(t, n, r);
              if ("normal" === u.type) {
                if (((a = r.done ? h : "suspendedYield"), u.arg === m))
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((a = h), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function T(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                T(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              m
            );
          var i = p(a, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((n[t.resultName] = o.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : o
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[o];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                i = function n() {
                  for (; ++a < t.length; )
                    if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(typeof t + " is not iterable");
        }
        return (
          (b.prototype = v),
          a(O, "constructor", { value: v, configurable: !0 }),
          a(v, "constructor", { value: b, configurable: !0 }),
          (b.displayName = u(v, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          j(E.prototype),
          u(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new E(l(e, n, r, a), i);
            return t.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          j(O),
          u(O, s, "Generator"),
          u(O, o, function () {
            return this;
          }),
          u(O, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(C),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function a(r, a) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = e)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  c = o.completion;
                if ("root" === o.tryLoc) return a("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      var ce,
        se,
        ue,
        le,
        pe,
        fe,
        de,
        he = O.address,
        me = new E.a(E.a.givenProvider),
        ye = new me.eth.Contract(
          O.usdtAbi,
          "0x4200000000000000000000000000000000000006"
        ),
        be = v.a.div(
          K ||
            (K = Object(b.a)([
              "\n    position: relative;\n    top: 2rem;\n    border: 1px solid black;\n    border-radius: 1rem;\n       height: 18rem;\n    margin-left: 20px;\n  margin-right:20px;\n",
            ]))
        ),
        ve = v.a.div(
          Z ||
            (Z = Object(b.a)([
              "\n    color: black;\n    font-size: 1rem;\n font-weight: 600;\n   display: flex;\n    justify-content: space-around;\n    margin-top: 2rem;\n    margin-left: 1rem;\n    margin-right: 1.8rem;\n",
            ]))
        ),
        ge = v.a.button(
          $ ||
            ($ = Object(b.a)([
              "\n    background-color: #5D7B93;\n    padding: 7px 5px;\n    font-size: 15px;\n    min-width: 120px;\n    border-radius: 10px;\n    font-weight: 700;\n    color: black;\n    border: none;\n    cursor: pointer;\n    outline: none;\n\n    :hover {\n        background-color: rgb(255, 156, 25);\n    }\n    ",
            ]))
        ),
        we = Object(v.a)(ge)(
          q ||
            (q = Object(b.a)([
              "\n    background-color: rgb(255, 156, 25);\n\n    :hover {\n        background-color: #5D7B93;\n    }\n",
            ]))
        ),
        xe = v.a.div(
          X ||
            (X = Object(b.a)([
              "\n  background-image: url(",
              ");\n  height: 160px;\n  background-repeat: no-repeat;\n",
            ])),
          ne.a
        ),
        Oe = v.a.div(
          ee ||
            (ee = Object(b.a)([
              "\n  background-image: url(",
              ");\n  height: 160px;\n  background-repeat: no-repeat;\n",
            ])),
          ae.a
        );
      function je(e) {
        function t(e) {
          return me.utils.toWei(e, "ether");
        }
        var n = A(),
          r = n.userAddress,
          a = n.setUserBalance,
          i = n.setWinningsBalance,
          o = _().setContractBalance,
          c = (function () {
            var n = Object(x.a)(
              oe().mark(function n(c, s) {
                var p, f, d;
                return oe().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (p = c),
                          (f = s),
                          (d = { from: r }),
                          "",
                          ye.methods
                            .approve(he, t(f))
                            .send(d)
                            .on(
                              "receipt",
                              Object(x.a)(
                                oe().mark(function n() {
                                  return oe().wrap(function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          try {
                                            e.coinflip.methods
                                              .flip(p, t(f))
                                              .send(d)
                                              .on(
                                                "transactionHash",
                                                function (e) {
                                                  u(), e;
                                                }
                                              )
                                              .on(
                                                "receipt",
                                                (function () {
                                                  var t = Object(x.a)(
                                                    oe().mark(function t(n) {
                                                      var s, u, p, f, d;
                                                      return oe().wrap(
                                                        function (t) {
                                                          for (;;)
                                                            switch (
                                                              (t.prev = t.next)
                                                            ) {
                                                              case 0:
                                                                return (
                                                                  (s = parseInt(
                                                                    n.events
                                                                      .filpFinshed
                                                                      .raw.data,
                                                                    16
                                                                  )),
                                                                  console.log(
                                                                    "result",
                                                                    c,
                                                                    s,
                                                                    n
                                                                  ),
                                                                  s
                                                                    ? (ie.NotificationManager.info(
                                                                        "Congratulations you win"
                                                                      ),
                                                                      l(c))
                                                                    : (ie.NotificationManager.info(
                                                                        "You lose"
                                                                      ),
                                                                      l(
                                                                        (c +
                                                                          1) %
                                                                          2
                                                                      )),
                                                                  (t.next = 5),
                                                                  e.coinflip.methods
                                                                    .contractBalance()
                                                                    .call()
                                                                );
                                                              case 5:
                                                                return (
                                                                  (u = t.sent),
                                                                  o(
                                                                    me.utils.fromWei(
                                                                      u,
                                                                      "ether"
                                                                    )
                                                                  ),
                                                                  (t.next = 9),
                                                                  ye.methods
                                                                    .balanceOf(
                                                                      r
                                                                    )
                                                                    .call()
                                                                );
                                                              case 9:
                                                                return (
                                                                  (p = t.sent),
                                                                  a(
                                                                    Number.parseFloat(
                                                                      me.utils.fromWei(
                                                                        p
                                                                      )
                                                                    ).toPrecision(
                                                                      3
                                                                    )
                                                                  ),
                                                                  (f = {
                                                                    from: r,
                                                                  }),
                                                                  (t.next = 14),
                                                                  e.coinflip.methods
                                                                    .getWinningsBalance()
                                                                    .call(f)
                                                                );
                                                              case 14:
                                                                (d = t.sent),
                                                                  i(
                                                                    Number.parseFloat(
                                                                      me.utils.fromWei(
                                                                        d,
                                                                        "ether"
                                                                      )
                                                                    ).toPrecision(
                                                                      3
                                                                    )
                                                                  );
                                                              case 16:
                                                              case "end":
                                                                return t.stop();
                                                            }
                                                        },
                                                        t
                                                      );
                                                    })
                                                  );
                                                  return function (e) {
                                                    return t.apply(
                                                      this,
                                                      arguments
                                                    );
                                                  };
                                                })()
                                              )
                                              .catch(function (e) {
                                                console.log(
                                                  "Transaction error-------:",
                                                  e
                                                ),
                                                  l(c);
                                              });
                                          } catch (s) {
                                            console.log(s), l(c);
                                          }
                                        case 1:
                                        case "end":
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              )
                            );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })(),
          s = Object(f.useRef)(),
          u = function () {
            var e = Math.floor(2 * Math.random());
            (s.current.style.animation = "none"),
              e
                ? setTimeout(function () {
                    s.current.style.animation = "spin-heads 3s linear infinite";
                  }, 100)
                : setTimeout(function () {
                    s.current.style.animation = "spin-tails 3s linear infinite";
                  }, 100);
          },
          l = function (e) {
            (s.current.style.animation = "none"),
              (s.current.style.transform =
                1 === e ? "rotateY(180deg)" : "rotateY(0)");
          };
        return d.a.createElement(
          be,
          null,
          d.a.createElement(
            ve,
            null,
            d.a.createElement(
              ge,
              {
                onClick: function () {
                  if (e.betAmt <= 0.008)
                    ie.NotificationManager.warning(
                      "Bets must be higher than .008 ETH"
                    );
                  else {
                    u();
                    var t = e.betAmt;
                    c(0, t);
                  }
                },
              },
              "Heads"
            ),
            d.a.createElement("div", null, "or"),
            d.a.createElement(
              we,
              {
                onClick: function () {
                  if (e.betAmt <= 0.008)
                    ie.NotificationManager.warning(
                      "Bets must be higher than .008 ETH"
                    );
                  else {
                    u();
                    var t = e.betAmt;
                    c(1, t);
                  }
                  l(0);
                },
              },
              "Tails"
            )
          ),
          d.a.createElement(
            "div",
            { className: "coin", ref: s },
            d.a.createElement(
              "div",
              { className: "heads" },
              d.a.createElement(xe, null)
            ),
            d.a.createElement(
              "div",
              { className: "tails" },
              d.a.createElement(Oe, null)
            )
          )
        );
      }
      var Ee,
        ke,
        Te,
        Le,
        Ce,
        Ae,
        Ne = v.a.div(
          ce ||
            (ce = Object(b.a)([
              "\n    position: relative;\n    top: 1rem;\n    border: 1px solid black;\n    border-radius: 1rem;\n      height: 5.4rem;\n    margin-left: 20px;\n  margin-right:20px;\n",
            ]))
        ),
        Be = v.a.div(
          se ||
            (se = Object(b.a)([
              "\n    display: flex;\n    justify-content: space-between;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: .5rem;\n",
            ]))
        ),
        _e = v.a.div(
          ue ||
            (ue = Object(b.a)([
              "\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-left: 1rem;\n    margin-right: 2rem;\n    margin-top: .7rem;\n\n",
            ]))
        ),
        Me = v.a.div(
          le ||
            (le = Object(b.a)(["\n    font-size: 1rem;\n    color: black;\n font-weight: 800;\n"]))
        ),
        Se = v.a.input(
          pe ||
            (pe = Object(b.a)([
              "\n    border-top-style: hidden;\n    border-right-style: hidden;\n    border-left-style: hidden;\n    border-bottom-style: hidden;\n    outline: none;\n    background-color: transparent;\n    width: 10rem;\n    font-size: 2rem;\n    color: black;\n font-weight: 600;\n",
            ]))
        ),
        Fe =
          (v.a.div(
            fe ||
              (fe = Object(b.a)([
                "\n    font-size: 1rem;\n    color: black;\n font-weight: 600;\n",
              ]))
          ),
          v.a.div(
            de ||
              (de = Object(b.a)([
                "\n    display: flex;\n    align-self:\n    margin-right: 1rem;\n    font-size: 2rem;\n    color: black;\n font-weight: 600;\n",
              ]))
          ));
      function We(e) {
        A().userBalance;
        var t = Object(f.useState)("0"),
          n = Object(y.a)(t, 2),
          r = n[0],
          a = n[1];
        return d.a.createElement(
          d.a.Fragment,
          null,
          d.a.createElement(
            Ne,
            null,
            d.a.createElement(Be, null, d.a.createElement(Me, null, "Bet Amount")),
            d.a.createElement(
              _e,
              null,
              d.a.createElement(Se, {
                placeholder: "0.0",
                onChange: function (e) {
                  a(e.target.value);
                },
              }),
              d.a.createElement(Fe, null, "WETH")
            )
          ),
          d.a.createElement(je, {
            betAmt: r,
            coinflip: e.coinflip,
            updateBalances: e.updateBalances,
          })
        );
      }
      var Pe,
        Ge = v.a.button(
          Ee ||
            (Ee = Object(b.a)([
              "\n    position: relative;\n width: 100%;\n   display: block;\n    margin:auto;\n    top: 6rem;\n    background: linear-gradient(90deg,#cb4e03,rgba(238,169,0,.9794511554621849) 43%,#fff100);\n    border-radius: 1rem;\n        height: 5.4rem;\n    cursor: pointer;\n    outline: none;\n border: 2px solid;\n border-color: rgba(253,143,0,.52) rgba(196,143,0,.52) rgba(251,255,7,.52) rgba(231,197,0,.52);\n\n    :hover {\n box-shadow: 0 0 14px red;\n } \n",
            ]))
        ),
        Ie = v.a.div(
          ke ||
            (ke = Object(b.a)([
              "\n    position: relative;\n    top: 4rem;\n    font-size: 1rem;\n    margin-left: 2rem;\n    color: black;\n font-weight: 600;\n",
            ]))
        ),
        ze = Object(v.a)(Ie)(
          Te || (Te = Object(b.a)(["\n    margin-right: 2rem;\n"]))
        ),
        Ue = v.a.div(
          Le ||
            (Le = Object(b.a)([
              "\n    display: flex;\n    justify-content: center;\n",
            ]))
        ),
        De = v.a.div(
          Ce ||
            (Ce = Object(b.a)([
              "\n    font-size: 1.5rem;\n    color: black;\n    text-shadow: .6px .6px pink;\n",
            ]))
        ),
        Ye = v.a.div(
          Ae ||
            (Ae = Object(b.a)([
              "\n    position: relative;\n    top: 3rem;\n    display:block;\n    border:none;\n    color: #5D432C;\n    height:3px;\n font-weight: 600;\n",
            ]))
        );
      function Re(e) {
        var t = A().winningsBalance;
        return d.a.createElement(
          d.a.Fragment,
          null,
          d.a.createElement(Ye, null),
          d.a.createElement(
            Ue,
            null,
            d.a.createElement(Ie, null, "Your Winnings:"),
            d.a.createElement(ze, null, t)
          ),
          d.a.createElement(
            Ge,
            {
              onClick: function () {
                e.withdrawWin();
              },
            },
            d.a.createElement(De, null, "Withdraw")
          )
        );
      }
      var He,
        Qe,
        Ve,
        Je,
        Ke,
        Ze,
        $e,
        qe,
        Xe,
        et = v.a.div(
          Pe ||
            (Pe = Object(b.a)([
              "\n    position: relative;\n    // height: 29.4rem;\n    width: 380px;\n    background: linear-gradient(90deg,#cb4e03,rgba(238,169,0,.9794511554621849) 43%,#fff100);\n    border: 2px solid;\n border-color: rgba(253,143,0,.52) rgba(196,143,0,.52) rgba(251,255,7,.52) rgba(231,197,0,.52);\n    border-radius: 1.5rem;\n    margin auto;\n    margin-top: .5rem;\n :hover {\n   box-shadow: 0 0 14px red;     \n   }\n",
            ]))
        );
      function tt(e) {
        return d.a.createElement(
          et,
          null,
          d.a.createElement(We, {
            userBalance: e.userBalance,
            coinflip: e.coinflip,
            updateBalances: e.updateBalances,
          }),
          d.a.createElement(Re, {
            withdrawWin: function () {
              e.withdrawUserWinnings();
            },
          })
        );
      }
      var nt = v.a.div(
          He ||
            (He = Object(b.a)([
              "\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n",
            ]))
        ),
        rt =
          (Object(v.a)(nt)(
            Qe || (Qe = Object(b.a)(["\n    margin-top: 3rem;\n"]))
          ),
          v.a.ul(
            Ve ||
              (Ve = Object(b.a)([
                "\n    margin: auto;\n    margin-right: 4rem;\n",
              ]))
          ),
          v.a.button(
            Je ||
              (Je = Object(b.a)([
                "\n    width: 8rem;\n    height: 3rem;\n    border-radius: 1rem;\n    background-color: #333333;\n    color: white;\n    text-shadow: .8px .8px #5D7B93;\n    font-size: 1.1rem;\n    outline: none;\n    cursor: pointer;\n    margin-bottom: 1.2rem;\n",
              ]))
          ),
          v.a.input(
            Ke ||
              (Ke = Object(b.a)(["\n    width: 4rem;\n    height: 1rem;\n"]))
          )),
        at =
          (Object(v.a)(rt)(Ze || (Ze = Object(b.a)(["\n"]))),
          v.a.button(
            $e ||
              ($e = Object(b.a)([
                "\n    width: 4.5rem;\n    height: 1.4rem;\n    background-color: orange;\n",
              ]))
          ));
      Object(v.a)(at)(qe || (qe = Object(b.a)(["\n"]))),
        v.a.button(
          Xe ||
            (Xe = Object(b.a)([
              "\n    width: 10rem;\n    height: 4rem;\n    background-color: green;\n    font-size: 1rem;\n",
            ]))
        );
      var it,
        ot,
        ct,
        st,
        ut,
        lt,
        pt,
        ft,
        dt,
        ht = n(27),
        mt = Object(v.b)(it || (it = Object(b.a)(["", ""])), ht.bounce);
      v.a.button(
        ot ||
          (ot = Object(b.a)([
            "\n    text-shadow: .6px .6px pink;\n    width: 8rem;\n    height: 3rem;\n    border-radius: 1rem;\n    margin-bottom: 1rem;\n    background-color: #333333;\n    color: white;\n    font-size: 1.1rem;\n    outline: none;\n    cursor: pointer;\n    animation-duration: 1.5s;\n    animation-name: ",
            ";\n",
          ])),
        function (e) {
          return e.isActive ? mt : "";
        }
      ),
        v.a.ul(
          ct ||
            (ct = Object(b.a)([
              "\n    margin: auto;\n    margin-left: 3.5rem;\n",
            ]))
        ),
        v.a.li(st || (st = Object(b.a)(["\n    margin-top: 1.3rem;\n"]))),
        v.a.span(
          ut ||
            (ut = Object(b.a)([
              "\n    color: blue;\n    :hover {\n        cursor: pointer;\n        color: pink;\n    }\n",
            ]))
        );
      var yt,
        bt,
        vt,
        gt = {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#FFF",
          padding: "50px",
          height: "9rem",
          width: "24rem",
          zIndex: 1e3,
        },
        wt = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, .7)",
          zIndex: 1e3,
        },
        xt = v.a.div(lt || (lt = Object(b.a)(["\n    font-size: 2rem;\n"]))),
        Ot = v.a.div(
          pt ||
            (pt = Object(b.a)([
              "\n    display: flex;\n    justify-content: center;\n",
            ]))
        ),
        jt = Object(v.a)(Ot)(
          ft ||
            (ft = Object(b.a)([
              "\n    margin-top: 3rem;\n    margin-bottom: 0;\n",
            ]))
        ),
        Et = v.a.button(
          dt ||
            (dt = Object(b.a)([
              "\n    height: 2.5rem;\n    width: 5rem;\n    background-color: pink;\n",
            ]))
        );
      function kt(e) {
        var t = e.open,
          n = e.children,
          r = e.onClose;
        return t
          ? d.a.createElement(
              d.a.Fragment,
              null,
              d.a.createElement("div", { style: wt }),
              d.a.createElement(
                "div",
                { style: gt },
                d.a.createElement(Ot, null, d.a.createElement(xt, null, n)),
                d.a.createElement(
                  jt,
                  null,
                  d.a.createElement(Et, { onClick: r }, "Close")
                )
              )
            )
          : null;
      }
      function Tt() {
        Tt = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            o = Object.create(i.prototype),
            c = new A(r || []);
          return a(o, "_invoke", { value: k(e, n, c) }), o;
        }
        function p(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var f = "suspendedStart",
          d = "executing",
          h = "completed",
          m = {};
        function y() {}
        function b() {}
        function v() {}
        var g = {};
        u(g, o, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          x = w && w(w(N([])));
        x && x !== n && r.call(x, o) && (g = x);
        var O = (v.prototype = y.prototype = Object.create(g));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(a, i, o, c) {
            var s = p(e[a], e, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                l = u.value;
              return l && "object" == typeof l && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, o, c);
                    },
                    function (e) {
                      n("throw", e, o, c);
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      (u.value = e), o(u);
                    },
                    function (e) {
                      return n("throw", e, o, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (i = i ? i.then(a, a) : a());
            },
          });
        }
        function k(t, n, r) {
          var a = f;
          return function (i, o) {
            if (a === d) throw new Error("Generator is already running");
            if (a === h) {
              if ("throw" === i) throw o;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = o; ; ) {
              var c = r.delegate;
              if (c) {
                var s = T(c, r);
                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (a === f) throw ((a = h), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              a = d;
              var u = p(t, n, r);
              if ("normal" === u.type) {
                if (((a = r.done ? h : "suspendedYield"), u.arg === m))
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((a = h), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function T(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                T(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              m
            );
          var i = p(a, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((n[t.resultName] = o.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : o
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[o];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                i = function n() {
                  for (; ++a < t.length; )
                    if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(typeof t + " is not iterable");
        }
        return (
          (b.prototype = v),
          a(O, "constructor", { value: v, configurable: !0 }),
          a(v, "constructor", { value: b, configurable: !0 }),
          (b.displayName = u(v, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          j(E.prototype),
          u(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new E(l(e, n, r, a), i);
            return t.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          j(O),
          u(O, s, "Generator"),
          u(O, o, function () {
            return this;
          }),
          u(O, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(C),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function a(r, a) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = e)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  c = o.completion;
                if ("root" === o.tryLoc) return a("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      v.a.div(
        yt ||
          (yt = Object(b.a)([
            "\n    position: relative;\n    top: 1rem;\n    display: flex;\n    justify-content: space-between;\n",
          ]))
      ),
        v.a.div(bt || (bt = Object(b.a)(["\n    width: 25%\n"]))),
        v.a.div(vt || (vt = Object(b.a)(["\n    width: 50%\n"])));
      var Lt,
        Ct = new E.a(E.a.givenProvider),
        At = Ct.utils.toChecksumAddress(O.address);
      function Nt() {
        var e = A(),
          t = e.userAddress,
          n = e.setUserAddress,
          r = e.userBalance,
          a = e.setUserBalance,
          i = e.winningsBalance,
          o = e.setWinningsBalance,
          c = _(),
          s = (c.contractBalance, c.setContractBalance),
          u = c.owner,
          l = c.setOwner,
          p = c.setIsOwner,
          h = c.network,
          m = c.setNetwork,
          b = (c.setAwaitingCallbackResponse, c.awaitingWithdrawal),
          v = c.setAwaitingWithdrawal,
          g = Object(f.useCallback)(
            Object(x.a)(
              Tt().mark(function e() {
                var t;
                return Tt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Ct.currentProvider.chainId;
                      case 2:
                        (t = e.sent),
                          m(
                            "0x1" === t
                              ? "Mainnet"
                              : "0x3" === t
                              ? "Ropsten"
                              : "0x4" === t
                              ? "Rinkeby"
                              : "0x5" === t
                              ? "Goerli"
                              : "0x42" === t
                              ? "Kovan"
                              : "0x38" === t
                              ? "BASE"
                              : "0x2105" === t
                              ? ""
                              : "N/A"
                          );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [m]
          ),
          w = Object(f.useState)(!1),
          j = Object(y.a)(w, 2),
          k = j[0],
          T = j[1],
          L = Object(f.useState)(new Ct.eth.Contract(O.abi, At)),
          C = Object(y.a)(L, 2),
          N = C[0],
          B = C[1],
          M = Object(f.useState)(""),
          S = Object(y.a)(M, 2),
          F = S[0],
          W = S[1],
          P = (function () {
            var e = Object(x.a)(
              Tt().mark(function e() {
                var t;
                return Tt().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!window.ethereum) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (e.prev = 1), (e.next = 4), window.ethereum.enable()
                          );
                        case 4:
                          (t = new E.a(window.ethereum)),
                            B(new t.eth.Contract(O.abi, At)),
                            G(),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            console.error(e.t0);
                        case 12:
                          e.next = 15;
                          break;
                        case 14:
                          console.log(
                            "MetaMask not found. Please install MetaMask wallet extension."
                          );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(f.useEffect)(
          function () {
            P();
          },
          [t]
        );
        var G = Object(f.useCallback)(
            Object(x.a)(
              Tt().mark(function e() {
                var t, n;
                return Tt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log("user addresses start"),
                          (e.next = 3),
                          Ct.eth.getAccounts()
                        );
                      case 3:
                        return (
                          (t = e.sent),
                          console.log("accounts", t),
                          (n = t[0]),
                          e.abrupt("return", n)
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [N]
          ),
          I = Object(f.useCallback)(
            Object(x.a)(
              Tt().mark(function e() {
                var t;
                return Tt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), N.methods.contractBalance().call();
                      case 2:
                        (t = e.sent),
                          s(Ct.utils.fromWei(t, "ether")),
                          console.log("contract balance", t);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [s]
          ),
          z = Object(f.useCallback)(
            (function () {
              var e = Object(x.a)(
                Tt().mark(function e(t) {
                  var n, r, i;
                  return Tt().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((console.log("get user balance", t), !t)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            "0x4200000000000000000000000000000000000006",
                            (n = new E.a(E.a.givenProvider)),
                            (r = new n.eth.Contract(
                              O.usdtAbi,
                              "0x4200000000000000000000000000000000000006"
                            )),
                            (e.next = 7),
                            r.methods.balanceOf(t).call()
                          );
                        case 7:
                          (i = e.sent),
                            a(Number.parseFloat(n.utils.fromWei(i)).toFixed(3));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [a]
          ),
          U = Object(f.useCallback)(
            (function () {
              var e = Object(x.a)(
                Tt().mark(function e(t) {
                  var n, r;
                  return Tt().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = { from: t }),
                            (e.next = 3),
                            N.methods.getWinningsBalance().call(n)
                          );
                        case 3:
                          (r = e.sent),
                            o(
                              Number.parseFloat(
                                Ct.utils.fromWei(r, "ether")
                              ).toPrecision(3)
                            );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [o]
          ),
          D = Object(f.useCallback)(
            Object(x.a)(
              Tt().mark(function e() {
                var t;
                return Tt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), N.methods.owner().call();
                      case 2:
                        return (t = e.sent), l(t), e.abrupt("return", t);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [l]
          ),
          Y = Object(f.useCallback)(
            Object(x.a)(
              Tt().mark(function e() {
                return Tt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          G().then(function (e) {
                            n(e), z(e), U(e);
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [G, n, z, U]
          );
        Object(f.useEffect)(
          function () {
            Y();
          },
          [Y, t]
        ),
          Object(f.useEffect)(
            function () {
              g(),
                I(),
                D().then(function (e) {
                  l(e);
                });
            },
            [h, g, I, D, l]
          ),
          Object(f.useEffect)(
            function () {
              t && 0 !== t.length && 0 !== u.length && p(t === u);
            },
            [t, u, p, N]
          );
        return (
          Object(f.useEffect)(
            function () {
              b &&
                (N.events.userWithdrawal(
                  { fromBlock: "latest" },
                  function (e, n) {
                    n.returnValues[0] === t &&
                      (W(
                        Ct.utils.froether(n.returnValues[1], "ether") +
                          " WETH Successfully Withdrawn"
                      ),
                      U(),
                      z(t));
                  }
                ),
                v(!1));
            },
            [b, i, r, t, z, U, v]
          ),
          Object(f.useEffect)(
            function () {
              "" !== F && T(!0);
            },
            [F]
          ),
          d.a.createElement(
            "div",
            null,
            d.a.createElement(H, null),
            d.a.createElement(
              kt,
              {
                open: k,
                onClose: function () {
                  return T(!1), void W("");
                },
              },
              F
            ),
            d.a.createElement(
              "div",
              { className: "maincard-content" },
              d.a.createElement(
                "div",
                null,
                d.a.createElement(J, null),
                d.a.createElement(tt, {
                  withdrawUserWinnings: function () {
                    var e = i;
                    N.methods.withdrawUserWinnings().send(e, { from: t }),
                      v(!0);
                  },
                  coinflip: N,
                  updateBalances: function () {
                    I(), z(t);
                  },
                })
              )
            ),
            d.a.createElement(ie.NotificationContainer, null)
          )
        );
      }
      var Bt = v.a.div(
        Lt ||
          (Lt = Object(b.a)([
            "\n  border: 1px solid #000;\n  background-image: url(",
            ");\n  min-height: 800px;\n  height: 100vh;\n",
          ])),
        w.a
      );
      var _t = function () {
        var e = Object(f.useState)(""),
          t = Object(y.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Object(f.useState)(""),
          i = Object(y.a)(a, 2),
          o = i[0],
          c = i[1],
          s = Object(f.useState)(""),
          u = Object(y.a)(s, 2),
          l = {
            userAddress: n,
            setUserAddress: r,
            userBalance: o,
            setUserBalance: c,
            winningsBalance: u[0],
            setWinningsBalance: u[1],
          },
          p = Object(f.useState)(""),
          h = Object(y.a)(p, 2),
          m = h[0],
          b = h[1],
          v = Object(f.useState)(""),
          g = Object(y.a)(v, 2),
          w = g[0],
          x = g[1],
          O = Object(f.useState)(""),
          j = Object(y.a)(O, 2),
          E = j[0],
          k = j[1],
          T = Object(f.useState)(!1),
          L = Object(y.a)(T, 2),
          A = L[0],
          N = L[1],
          _ = Object(f.useState)(""),
          M = Object(y.a)(_, 2),
          S = M[0],
          F = M[1],
          W = Object(f.useState)(""),
          P = Object(y.a)(W, 2),
          G = P[0],
          I = P[1],
          z = Object(f.useState)(""),
          U = Object(y.a)(z, 2),
          D = {
            contractBalance: m,
            setContractBalance: b,
            owner: w,
            setOwner: x,
            isOwner: A,
            setIsOwner: N,
            network: E,
            setNetwork: k,
            sentQueryId: S,
            setSentQueryId: F,
            awaitingCallbackResponse: G,
            setAwaitingCallbackResponse: I,
            awaitingWithdrawal: U[0],
            setAwaitingWithdrawal: U[1],
          };
        return d.a.createElement(
          Bt,
          null,
          d.a.createElement(
            C,
            { value: l },
            d.a.createElement(B, { value: D }, d.a.createElement(Nt, null))
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      n(120);
      m.a.render(
        d.a.createElement(d.a.StrictMode, null, d.a.createElement(_t, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    20: function (e, t, n) {
      e.exports = n.p + "";
    },
    21: function (e, t, n) {
      e.exports = n.p + "static/media/logo.370f4d14.png";
    },
    25: function (e, t, n) {
      e.exports = n.p + "static/media/head.53ccd981.png";
    },
    26: function (e, t, n) {
      e.exports = n.p + "static/media/tail.bc77fba8.png";
    },
    29: function (e, t, n) {
      e.exports = n(122);
    },
    34: function (e, t, n) {},
    9: function (e) {
      e.exports = JSON.parse(
        '{"contractName":"Coinflip","address":"0xC3DFBF6BFE25d551bc292E7E0F814cE38dA43aB0","abi":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"result","type":"uint256"}],"name":"filpFinshed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"logNewProvableQuery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"userWithdrawal","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"oneZero","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"flip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeCallback","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getWinningsBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerWinnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"waiting","outputs":[{"internalType":"address","name":"playerAddress","type":"address"},{"internalType":"uint256","name":"betValue","type":"uint256"},{"internalType":"uint256","name":"headsTails","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawUserWinnings","outputs":[],"stateMutability":"nonpayable","type":"function"}],"usdtAbi":[{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setAirdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
      );
    },
  },
  [[29, 1, 2]],
]);
//# sourceMappingURL=main.e8eef298.chunk.js.map
