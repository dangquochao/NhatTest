window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  KingKongAssets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b53aSiKNFKALQs4ThC+Zez", "KingKongAssets");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var KingKongSymbol_1 = require("./KingKongSymbol");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongAssets = function(_super) {
      __extends(KingKongAssets, _super);
      function KingKongAssets() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.symbol = null;
        _this.symbolAtlas = null;
        return _this;
      }
      KingKongAssets_1 = KingKongAssets;
      KingKongAssets.prototype.onLoad = function() {
        KingKongAssets_1.instance = this;
      };
      KingKongAssets.prototype.start = function() {};
      KingKongAssets.prototype.onDestroy = function() {
        KingKongAssets_1.instance = null;
      };
      var KingKongAssets_1;
      KingKongAssets.instance = null;
      __decorate([ property(KingKongSymbol_1.default) ], KingKongAssets.prototype, "symbol", void 0);
      __decorate([ property(cc.SpriteAtlas) ], KingKongAssets.prototype, "symbolAtlas", void 0);
      KingKongAssets = KingKongAssets_1 = __decorate([ ccclass ], KingKongAssets);
      return KingKongAssets;
    }(cc.Component);
    exports.default = KingKongAssets;
    cc._RF.pop();
  }, {
    "./KingKongSymbol": "KingKongSymbol"
  } ],
  KingKongCollum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16739gUTr5H/K3tjh1AOyFX", "KingKongCollum");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var KingKongSymbol_1 = require("./KingKongSymbol");
    var KingKongView_1 = require("./KingKongView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SPEED_TYPE = {
      NORMAL: .1,
      TURBO: .05
    };
    var KingKongCollum = function(_super) {
      __extends(KingKongCollum, _super);
      function KingKongCollum() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.collumIndex = 0;
        _this.numberSymbol = 4;
        _this.listSymbols = [];
        _this.kingKongView = null;
        _this.symbolContainer = null;
        _this.initPos = cc.v2(0, 0);
        _this.stepMove = 160;
        _this.positionReset = 320;
        _this.isStop = false;
        _this.listIDResult = [];
        _this.spineNFS = null;
        _this.isNeerSpin = false;
        _this.isChangeSpeedNFS = false;
        _this.speedNFS = SPEED_TYPE.NORMAL;
        return _this;
      }
      KingKongCollum.prototype.onLoad = function() {
        for (var i = 0; i < this.numberSymbol; i++) {
          var symbol = cc.instantiate(this.kingKongView.AssetsKingKong.symbol.node).getComponent(KingKongSymbol_1.default);
          this.listSymbols.push(symbol);
          this.symbolContainer.addChild(symbol.node);
          symbol.node.setPosition(cc.v2(0, this.initPos.y - 160 * i));
          symbol.node.active = true;
          symbol.collumCtrl = this;
          symbol.setRandomSprite();
          symbol.indexSymbol = i;
        }
      };
      KingKongCollum.prototype.update = function(dt) {};
      KingKongCollum.prototype.start = function() {};
      KingKongCollum.prototype.spinSymbol = function() {
        var _this = this;
        this.listSymbols.forEach(function(sym) {
          _this.kingKongView.isTurbo ? sym.speed = SPEED_TYPE["TURBO"] : sym.speed = SPEED_TYPE["NORMAL"];
          sym.spin();
        });
      };
      KingKongCollum.prototype.stopCollumCompleted = function() {
        this.listSymbols.sort(function(a, b) {
          return a.indexSymbol - b.indexSymbol;
        });
        if (4 == this.collumIndex) {
          this.kingKongView.activeAllSymbol();
          this.kingKongView.allCollumStopCompleted();
        }
      };
      KingKongCollum.prototype.activeAllSymbol = function() {
        this.listSymbols.forEach(function(symbol) {
          symbol.sprite.node.color = cc.Color.WHITE;
        });
      };
      KingKongCollum.prototype.prepareStop = function() {
        this.hideNFS();
      };
      KingKongCollum.prototype.Stop = function(listID) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(re, je) {
              _this.listIDResult = listID;
              if (_this.isNeerSpin) {
                _this.listSymbols.forEach(function(sym) {
                  sym.speed = SPEED_TYPE["TURBO"];
                });
                _this.isChangeSpeedNFS = true;
                _this.showNFS();
                _this.listSymbols.forEach(function(sym) {
                  sym.sprite.node.color = cc.Color.WHITE;
                });
                _this.scheduleOnce(function() {
                  _this.listSymbols.forEach(function(sym) {
                    sym.speed = _this.speedNFS;
                  });
                  _this.isChangeSpeedNFS = false;
                  _this.isStop = true;
                  re(null);
                }, 5);
              } else {
                _this.isStop = true;
                _this.scheduleOnce(function() {
                  re(null);
                }, .2);
              }
            }) ];
          });
        });
      };
      KingKongCollum.prototype.showSymbolWin = function(index) {
        this.listSymbols[index].showEffectWin();
      };
      KingKongCollum.prototype.showNFS = function() {};
      KingKongCollum.prototype.hideNFS = function() {
        this.spineNFS && (this.spineNFS.active = false);
      };
      KingKongCollum.prototype.hideAllSymbol = function(ignoreID) {
        void 0 === ignoreID && (ignoreID = -1);
        this.listSymbols.forEach(function(symbol) {
          symbol.id != ignoreID ? symbol.sprite.node.color = cc.Color.GRAY : symbol.sprite.node.color = cc.Color.WHITE;
        });
      };
      KingKongCollum.prototype.Reset = function() {
        this.isStop = false;
        this.listIDResult = [];
        this.listSymbols.forEach(function(symbol) {
          symbol.Reset();
        });
      };
      __decorate([ property ], KingKongCollum.prototype, "collumIndex", void 0);
      __decorate([ property ], KingKongCollum.prototype, "numberSymbol", void 0);
      __decorate([ property([ KingKongSymbol_1.default ]) ], KingKongCollum.prototype, "listSymbols", void 0);
      __decorate([ property(KingKongView_1.default) ], KingKongCollum.prototype, "kingKongView", void 0);
      __decorate([ property(cc.Node) ], KingKongCollum.prototype, "symbolContainer", void 0);
      __decorate([ property ], KingKongCollum.prototype, "initPos", void 0);
      KingKongCollum = __decorate([ ccclass ], KingKongCollum);
      return KingKongCollum;
    }(cc.Component);
    exports.default = KingKongCollum;
    cc._RF.pop();
  }, {
    "./KingKongSymbol": "KingKongSymbol",
    "./KingKongView": "KingKongView"
  } ],
  KingKongInfoBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d651Lh9BJOyqEc08wQUma9", "KingKongInfoBar");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongInfoBar = function(_super) {
      __extends(KingKongInfoBar, _super);
      function KingKongInfoBar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      KingKongInfoBar.prototype.start = function() {};
      KingKongInfoBar.prototype.prepareSpin = function() {};
      __decorate([ property(cc.Label) ], KingKongInfoBar.prototype, "label", void 0);
      __decorate([ property ], KingKongInfoBar.prototype, "text", void 0);
      KingKongInfoBar = __decorate([ ccclass ], KingKongInfoBar);
      return KingKongInfoBar;
    }(cc.Component);
    exports.default = KingKongInfoBar;
    cc._RF.pop();
  }, {} ],
  KingKongSettingAuto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48a94xzn2xAZ6ygRVAH5fFu", "KingKongSettingAuto");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongSettingAuto = function(_super) {
      __extends(KingKongSettingAuto, _super);
      function KingKongSettingAuto() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnConfirm = null;
        _this.tglUnlimited = null;
        _this.tglLoseLimited = null;
        _this.currentTglSession = null;
        _this.lbLoseLitmitedValue = null;
        _this.listTglLoseLimit = [];
        _this.autoSpinNumber = 0;
        _this.loseLimited = 0;
        _this.isTurbo = false;
        return _this;
      }
      KingKongSettingAuto.prototype.onLoad = function() {
        var _this = this;
        this.tglLoseLimited.node.children.forEach(function(child) {
          _this.listTglLoseLimit.push(child.getComponent(cc.Toggle));
        });
      };
      KingKongSettingAuto.prototype.start = function() {};
      KingKongSettingAuto.prototype.onEnable = function() {
        if (null != this.currentTglSession) if (0 != Windown_1.Windown.KingKong.autoSpinRemain) {
          cc.log("  this.currentTglSession.clickEvents=" + this.currentTglSession.clickEvents.length);
          this.currentTglSession.checkEvents[0].customEventData = Windown_1.Windown.KingKong.autoSpinRemain + "";
          this.currentTglSession.node.active = true;
          this.currentTglSession.getComponentInChildren(cc.Label).string = "(" + Windown_1.Windown.KingKong.autoSpinRemain + ")";
          this.currentTglSession.isChecked = true;
          this.currentTglSession.check();
        } else this.currentTglSession.getComponentInChildren(cc.Label).string = "(0)";
      };
      KingKongSettingAuto.prototype.onClickClose = function() {
        var _this = this;
        cc.tween(this.node).to(.3, {
          y: -this.node.height,
          opacity: 150
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      KingKongSettingAuto.prototype.onClickSelectNumberSession = function(even, data) {
        this.autoSpinNumber = parseInt(data);
        this.tglUnlimited.isChecked = true;
        this.btnConfirm.node.color = cc.Color.WHITE;
        this.btnConfirm.node.children[0].color = cc.Color.WHITE;
        this.btnConfirm.interactable = true;
        this.tglLoseLimited.allowSwitchOff = false;
        this.listTglLoseLimit.forEach(function(tgl) {
          tgl.interactable = true;
          tgl.node.color = cc.Color.WHITE;
        });
        this.tglUnlimited.isChecked = true;
      };
      KingKongSettingAuto.prototype.onClickClearSession = function() {
        this.autoSpinNumber = 0;
        this.btnConfirm.interactable = false;
        this.btnConfirm.node.color = cc.Color.GRAY;
        this.btnConfirm.node.children[0].color = cc.Color.GRAY;
        this.tglUnlimited.isChecked = false;
        this.tglLoseLimited.allowSwitchOff = true;
        this.listTglLoseLimit.forEach(function(tgl) {
          tgl.interactable = false;
          tgl.node.color = cc.Color.GRAY;
          tgl.isChecked = false;
        });
      };
      KingKongSettingAuto.prototype.onClickSelectLoseLimited = function(even, data) {
        switch (data) {
         case "unlimited":
          this.loseLimited = 999999999;
          break;

         case "500":
          this.loseLimited = 500;
          break;

         case "100":
          this.loseLimited = 100;
          break;

         case "50":
          this.loseLimited = 50;
          break;

         case "10":
          this.loseLimited = 10;
        }
        if (this.loseLimited < 1e3) {
          this.lbLoseLitmitedValue.node.active = true;
          this.lbLoseLitmitedValue.string = "[-" + Windown_1.Windown.formatNumber(this.loseLimited * Windown_1.Windown.KingKong.batValue) + "]";
        } else this.lbLoseLitmitedValue.node.active = false;
      };
      KingKongSettingAuto.prototype.onClickTurbo = function() {
        this.isTurbo = !this.isTurbo;
        Windown_1.Windown.KingKong.isTurbo = this.isTurbo;
      };
      KingKongSettingAuto.prototype.onClickConfirm = function() {
        Windown_1.Windown.KingKong.setAutoSpin(this.autoSpinNumber, this.loseLimited);
        this.onClickClose();
      };
      __decorate([ property(cc.Button) ], KingKongSettingAuto.prototype, "btnConfirm", void 0);
      __decorate([ property(cc.Toggle) ], KingKongSettingAuto.prototype, "tglUnlimited", void 0);
      __decorate([ property(cc.ToggleContainer) ], KingKongSettingAuto.prototype, "tglLoseLimited", void 0);
      __decorate([ property(cc.Toggle) ], KingKongSettingAuto.prototype, "currentTglSession", void 0);
      __decorate([ property(cc.Label) ], KingKongSettingAuto.prototype, "lbLoseLitmitedValue", void 0);
      KingKongSettingAuto = __decorate([ ccclass ], KingKongSettingAuto);
      return KingKongSettingAuto;
    }(cc.Component);
    exports.default = KingKongSettingAuto;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  KingKongSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6adbWwuG9H45MJb/Kb2Q4A", "KingKongSetting");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongSetting = function(_super) {
      __extends(KingKongSetting, _super);
      function KingKongSetting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.NodeFunction = null;
        _this.NodeBet = null;
        _this.spriteSound = null;
        _this.nodeRule = null;
        _this.scrRule = null;
        _this.sprSoundState = [];
        _this.soundOn = true;
        return _this;
      }
      KingKongSetting.prototype.start = function() {};
      KingKongSetting.prototype.onEnable = function() {
        cc.tween(this.node).set({
          opacity: 0
        }).to(.3, {
          opacity: 255
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      KingKongSetting.prototype.show = function(type) {
        void 0 === type && (type = 1);
        var nodeShow = 1 == type ? this.NodeFunction : this.NodeBet;
        var nodeHide = 1 == type ? this.NodeBet : this.NodeFunction;
        nodeShow.active = true;
        nodeHide.active = false;
        cc.tween(nodeShow).set({
          y: -cc.winSize.width / 2 - nodeShow.height / 2
        }).to(.3, {
          y: -cc.winSize.width / 2 + nodeShow.height / 2
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      KingKongSetting.prototype.setConfigBet = function(listBet) {
        var btnContainer = this.NodeBet.getChildByName("TglContainer");
        for (var i = 0; i < listBet.length; i++) {
          var tgl = btnContainer.children[i].getComponent(cc.Toggle);
          tgl.checkEvents[0].customEventData = listBet[i] + "";
          tgl.node.getComponentInChildren(cc.Label).string = Windown_1.Windown.formatNumber(listBet[i]) + "";
        }
      };
      KingKongSetting.prototype.onClickHome = function() {};
      KingKongSetting.prototype.onClickSound = function() {
        this.soundOn = !this.soundOn;
        this.spriteSound.spriteFrame = this.sprSoundState[this.soundOn ? 0 : 1];
      };
      KingKongSetting.prototype.onClickRule = function() {
        this.nodeRule.active = true;
        this.NodeFunction.active = false;
      };
      KingKongSetting.prototype.onHideRule = function() {
        this.NodeFunction.active = true;
        this.nodeRule.active = false;
        this.scrRule.scrollToTop();
      };
      KingKongSetting.prototype.onHideSetting = function() {
        var _this = this;
        cc.tween(this.node).to(.1, {
          opacity: 0
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      KingKongSetting.prototype.onClickSelectBet = function(even, data) {
        Windown_1.Windown.KingKong.setBetValue(parseInt(data));
      };
      __decorate([ property(cc.Node) ], KingKongSetting.prototype, "NodeFunction", void 0);
      __decorate([ property(cc.Node) ], KingKongSetting.prototype, "NodeBet", void 0);
      __decorate([ property(cc.Sprite) ], KingKongSetting.prototype, "spriteSound", void 0);
      __decorate([ property(cc.Node) ], KingKongSetting.prototype, "nodeRule", void 0);
      __decorate([ property(cc.ScrollView) ], KingKongSetting.prototype, "scrRule", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], KingKongSetting.prototype, "sprSoundState", void 0);
      KingKongSetting = __decorate([ ccclass ], KingKongSetting);
      return KingKongSetting;
    }(cc.Component);
    exports.default = KingKongSetting;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  KingKongSymbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a66f5jokn9IOIZKip+Gjcgm", "KingKongSymbol");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../Scritps/Windown");
    var KingKongAssets_1 = require("./KingKongAssets");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SymbolKingKong = function(_super) {
      __extends(SymbolKingKong, _super);
      function SymbolKingKong() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spine = null;
        _this.indexSymbol = 0;
        _this.indexStop = -1;
        _this.speed = .1;
        _this.id = 0;
        _this.symbolAtlas = null;
        _this.collumCtrl = null;
        _this.spriteAnim = null;
        _this.initSpriteScale = 1;
        return _this;
      }
      SymbolKingKong.prototype.onLoad = function() {
        this.spriteAnim = this.sprite.node.getComponent(cc.Animation);
        this.symbolAtlas = KingKongAssets_1.default.instance.symbolAtlas;
        this.initSpriteScale = this.sprite.node.scale;
      };
      SymbolKingKong.prototype.start = function() {};
      SymbolKingKong.prototype.setSprite = function(idSprite, isBlur) {
        void 0 === isBlur && (isBlur = false);
        this.id = idSprite;
        this.sprite.spriteFrame = this.symbolAtlas.getSpriteFrame(idSprite + "");
        this.spine && (this.spine.active = false);
      };
      SymbolKingKong.prototype.setSpine = function() {};
      SymbolKingKong.prototype.setRandomSprite = function() {
        var randomId = Windown_1.Windown.RandomNumber(0, 10);
        this.sprite.spriteFrame = this.symbolAtlas.getSpriteFrame(randomId.toString());
      };
      SymbolKingKong.prototype.spin = function() {
        var _this = this;
        var posNew = this.node.y - this.collumCtrl.stepMove;
        this.indexSymbol++;
        cc.tween(this.node).to(.25, {
          y: posNew
        }, {
          easing: cc.easing.backIn
        }).call(function() {
          _this.loopMove();
        }).start();
      };
      SymbolKingKong.prototype.loopMove = function() {
        var _this = this;
        if (this.indexSymbol > 3) {
          this.node.y = this.collumCtrl.positionReset;
          this.indexSymbol = 0;
          this.setSprite(Windown_1.Windown.RandomNumber(0, 8), true);
        }
        this.indexSymbol++;
        cc.tween(this.node).to(this.speed, {
          y: this.node.y - this.collumCtrl.stepMove
        }).call(function() {
          if (_this.collumCtrl.isStop) {
            cc.log("Thang Nay Stop:" + _this.collumCtrl.node.name);
            _this.stopMove();
          } else _this.loopMove();
        }).start();
      };
      SymbolKingKong.prototype.stopMove = function() {
        var _this = this;
        if (this.indexSymbol > 3) {
          this.node.y = this.collumCtrl.positionReset;
          this.indexSymbol = 0;
          if (this.collumCtrl.listIDResult.length > 0) {
            this.indexStop = this.collumCtrl.listIDResult.length;
            var idResult = this.collumCtrl.listIDResult.pop();
            this.setSprite(idResult);
            this.stopMove();
          } else {
            this.node.y = this.collumCtrl.positionReset + this.collumCtrl.stepMove;
            cc.tween(this.node).to(this.speed, {
              y: this.node.y - this.collumCtrl.stepMove
            }, {
              easing: cc.easing.backOut
            }).start();
            this.setSprite(Windown_1.Windown.RandomNumber(0, 9));
          }
        } else {
          var easingg = this.indexSymbol + 1 == this.indexStop ? cc.easing.backOut : cc.easing.smooth;
          var speedMove = this.indexSymbol + 1 == this.indexStop ? 3 * this.speed : this.speed;
          this.indexSymbol++;
          cc.tween(this.node).to(speedMove, {
            y: this.node.y - this.collumCtrl.stepMove
          }, {
            easing: easingg
          }).call(function() {
            _this.indexSymbol != _this.indexStop ? _this.stopMove() : 3 == _this.indexSymbol && _this.collumCtrl.stopCollumCompleted();
          }).start();
          3 == this.indexSymbol && this.scheduleOnce(function() {
            _this.collumCtrl.prepareStop();
          }, .85 * speedMove);
          cc.tween(this.node).delay(.85 * speedMove).call(function() {
            _this.collumCtrl.prepareStop();
          });
        }
      };
      SymbolKingKong.prototype.showEffectWin = function() {
        if (11 == this.id) ; else if (12 == this.id) ; else {
          this.spine.active = false;
          this.sprite.node.active = true;
          this.sprite.node.color = cc.Color.WHITE;
          this.spriteAnim.play("SymbolWin");
        }
      };
      SymbolKingKong.prototype.Reset = function() {
        0 == this.indexSymbol && this.setSprite(Windown_1.Windown.RandomNumber(0, 9));
        this.sprite.node.color = cc.Color.WHITE;
        this.indexStop = -1;
        this.spriteAnim.stop();
        this.sprite.node.scale = this.initSpriteScale;
      };
      __decorate([ property(cc.Sprite) ], SymbolKingKong.prototype, "sprite", void 0);
      __decorate([ property(cc.Node) ], SymbolKingKong.prototype, "spine", void 0);
      __decorate([ property ], SymbolKingKong.prototype, "indexSymbol", void 0);
      SymbolKingKong = __decorate([ ccclass ], SymbolKingKong);
      return SymbolKingKong;
    }(cc.Component);
    exports.default = SymbolKingKong;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0,
    "./KingKongAssets": "KingKongAssets"
  } ],
  KingKongView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "846abgTKt1FjqOmq2RxVufX", "KingKongView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GAME_STATE = exports.SPINE_TYPE = void 0;
    var EVENT_MANAGER_1 = require("../../../Scritps/DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("../../../Scritps/DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var LbMonoSpace_1 = require("../../../Scritps/Other/LbMonoSpace");
    var MakeDelay_1 = require("../../../Scritps/Other/MakeDelay");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var KingKongAssets_1 = require("./KingKongAssets");
    var KingKongCollum_1 = require("./KingKongCollum");
    var KingKongInfoBar_1 = require("./KingKongInfoBar");
    var KingKongSetting_1 = require("./KingKongSetting");
    var KingKongSettingAuto_1 = require("./KingKongSettingAuto");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SPINE_TYPE;
    (function(SPINE_TYPE) {
      SPINE_TYPE[SPINE_TYPE["NORMAL"] = 0] = "NORMAL";
      SPINE_TYPE[SPINE_TYPE["AUTO"] = 1] = "AUTO";
    })(SPINE_TYPE = exports.SPINE_TYPE || (exports.SPINE_TYPE = {}));
    var GAME_STATE;
    (function(GAME_STATE) {
      GAME_STATE[GAME_STATE["PREPARE"] = 0] = "PREPARE";
      GAME_STATE[GAME_STATE["SPINNING"] = 1] = "SPINNING";
      GAME_STATE[GAME_STATE["SHOWING_RESULT"] = 2] = "SHOWING_RESULT";
      GAME_STATE[GAME_STATE["JOIN_GAME"] = 3] = "JOIN_GAME";
    })(GAME_STATE = exports.GAME_STATE || (exports.GAME_STATE = {}));
    var KingKongView = function(_super) {
      __extends(KingKongView, _super);
      function KingKongView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bkgSprite = null;
        _this.collumContainer = null;
        _this.btnSpin = null;
        _this.btnAuto = null;
        _this.btnStopAuto = null;
        _this.btnChangeBet = null;
        _this.lbAutoSpinRemain = null;
        _this.lbBetValue = null;
        _this.lbBalance = null;
        _this.lbTotalWin = null;
        _this.AssetsKingKong = null;
        _this.infoBar = null;
        _this.settingView = null;
        _this.settingAuto = null;
        _this.makeDelay = null;
        _this.listCol = [];
        _this.listCollum = [];
        _this.listBetValue = [];
        _this.spinReelView = [];
        _this.isAutoSpin = false;
        _this.isTurbo = false;
        _this.autoSpinRemain = 0;
        _this.limitLoseValue = 0;
        _this.betValue = 1e3;
        _this.gameType = -1;
        _this.curRoomBet = 100;
        _this.totalLineBet = 20;
        _this.totalAgWin = 0;
        _this.agUser = 0;
        _this.dataFinish = null;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.listConfigBet = [];
        _this.listLineWin = [];
        _this.stopShowLineCB = null;
        _this.spinType = SPINE_TYPE.NORMAL;
        _this.gameState = GAME_STATE.JOIN_GAME;
        _this.payLine = [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ], [ 2, 2, 2, 2, 2 ], [ 0, 1, 2, 1, 0 ], [ 2, 1, 0, 1, 2 ], [ 0, 0, 1, 2, 2 ], [ 2, 2, 1, 0, 0 ], [ 1, 0, 1, 2, 1 ], [ 1, 2, 1, 0, 1 ], [ 1, 0, 0, 1, 0 ], [ 1, 2, 2, 1, 2 ], [ 0, 1, 0, 0, 1 ], [ 2, 1, 2, 2, 1 ], [ 0, 2, 0, 2, 0 ], [ 2, 0, 2, 0, 2 ], [ 1, 0, 2, 0, 1 ], [ 1, 2, 0, 2, 1 ], [ 0, 1, 1, 1, 0 ], [ 2, 1, 1, 1, 2 ], [ 0, 2, 2, 2, 0 ] ];
        return _this;
      }
      KingKongView.prototype.onLoad = function() {
        Windown_1.Windown.KingKong = this;
        this.makeDelay = new MakeDelay_1.default(this);
        cc.log("start KingKong");
        this.gameType = GAME_TYPE_1.default.KingKong;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        this.setupView();
        this.gameState = GAME_STATE.JOIN_GAME;
        this.sendJoinRoom();
      };
      KingKongView.prototype.sendJoinRoom = function() {
        cc.log("send creat room");
        try {
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("SlotInCaExtension", "ext.Room.SlotInCa.SlotGameView");
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 1;
          roomSeting.groupId = "SlotInCa";
          this.sfs.send(new SFS2X.CreateRoomRequest(roomSeting, true));
        } catch (e) {
          cc.error(e);
          this.onDisconnect();
        }
      };
      KingKongView.prototype.onDisconnect = function() {
        cc.log("disconnect");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.director.loadScene("main");
      };
      KingKongView.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.SpinInCa:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          this.handleFinish(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryNeko:
         case REQUEST_CODE_1.REQUEST_CODE.HistoryChiTietNeko:
          break;

         default:
          cc.log("extResponse:", Windown_1.Windown.SFSObjToJson(SFSObject));
        }
      };
      KingKongView.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      KingKongView.prototype.onJoinRoom = function(event) {
        var _this = this;
        var room = event.room;
        if ("SlotInCa" == room.groupId) {
          this.roomSFS = room;
          Windown_1.Windown.UIManager.hideLoadingData();
          var roomVCf = room.getVariable("cf");
          var stringCf = roomVCf.value;
          cc.log(stringCf);
          var list = [];
          var obj = JSON.parse(stringCf);
          for (var temp in obj) {
            var objTemp = Object.create(null);
            objTemp.bet = parseInt(temp);
            objTemp.perJp = obj[temp].percentPot / 100;
            list.push(objTemp);
          }
          list.sort(function(a, b) {
            return a.bet - b.bet;
          });
          this.listConfigBet = list;
          var listBet_1 = [];
          this.listConfigBet.forEach(function(mark, index) {
            index > 0 && listBet_1.push(mark["bet"] * _this.totalLineBet);
          });
          this.settingView.setConfigBet(listBet_1);
          this.curRoomBet = this.listConfigBet[1].bet;
          this.setBetValue(this.curRoomBet * this.totalLineBet);
          this.lbBalance.string = Windown_1.Windown.formatNumber(Windown_1.Windown.User.userAg);
          this.lbTotalWin.string = "0";
        }
      };
      KingKongView.prototype.userExitRoom = function(event) {
        cc.log("user exit room");
        var room = event.room;
        if ("SlotInCa" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            cc.director.loadScene("main");
            return;
          }
        }
      };
      KingKongView.prototype.onCreateError = function(event) {
        Windown_1.Windown.UIManager.hideLoading();
        cc.director.loadScene("main");
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      KingKongView.prototype.start = function() {
        for (var i = 0, l = this.listCol.length; i < l; i++) {
          var col = this.listCol[i].getComponent(KingKongCollum_1.default);
          this.listCollum.push(col);
        }
      };
      KingKongView.prototype.setBetValue = function(value) {
        this.betValue = value;
        this.curRoomBet = this.betValue / this.totalLineBet;
        this.lbBetValue.string = Windown_1.Windown.formatNumber(this.betValue) + "";
        cc.log("curRoomBet=" + this.curRoomBet);
      };
      KingKongView.prototype.setupView = function() {
        var nodeGame = cc.find("Game", this.node);
        if (cc.sys.isMobile) {
          nodeGame.angle = 90;
          this.bkgSprite.angle = 90;
          this.bkgSprite.scale = 1280 / 720;
        } else {
          var scale = cc.winSize.height / 1280;
          nodeGame.angle = 0;
          nodeGame.scale = scale;
          this.bkgSprite.angle = 0;
          var wg = this.bkgSprite.addComponent(cc.Widget);
          wg.left = 0;
          wg.right = 0;
          wg.bottom = 0;
          wg.top = 0;
        }
        Windown_1.Windown.UIManager.changeRotation(true);
      };
      KingKongView.prototype.onClickSpin = function() {
        cc.log("onClickSpin:", this.gameState);
        if (this.gameState == GAME_STATE.SHOWING_RESULT) return;
        this.startSpin();
        this.setStateBtn();
        this.effectButtonSpin();
        this.sendClickSpin();
      };
      KingKongView.prototype.sendClickSpin = function() {
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinInCa, sfsObj, this.roomSFS);
      };
      KingKongView.prototype.startSpin = function() {
        if (this.autoSpinRemain > 0) {
          this.autoSpinRemain--;
          this.lbAutoSpinRemain.node.active = true;
          this.lbAutoSpinRemain.string = this.autoSpinRemain + "";
        }
        this.setStateSpin(GAME_STATE.SPINNING);
        this.listCollum.forEach(function(col, index) {
          col.spinSymbol();
        });
      };
      KingKongView.prototype.activeAllSymbol = function() {
        this.listCollum.forEach(function(col) {
          col.activeAllSymbol();
        });
      };
      KingKongView.prototype.handleFinish = function(data) {
        var _this = this;
        if (data.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          Windown_1.Windown.Dialog.showLog(data.get(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          return;
        }
        this.dataFinish = data;
        this.spinReelView = [ [ 8, 0, 5 ], [ 8, 0, 4 ], [ 8, 7, 1 ], [ 12, 2, 4 ], [ 7, 0, 11 ] ];
        this.listLineWin = JSON.parse('[{"symbol":8,"stack":2,"id":2,"agWinLine":2000}]');
        this.totalAgWin = this.dataFinish.getLong("agWin");
        this.agUser = this.dataFinish.getLong("agUser");
        cc.log("listLineWin=", this.listLineWin);
        this.scheduleOnce(function() {
          _this.handleStopSpin();
        }, 1);
      };
      KingKongView.prototype.getMakeDelay = function(time) {
        return this.makeDelay.getDelay(time);
      };
      KingKongView.prototype.handleStopSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i, l, col, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 5, , 6 ]);
              i = 0, l = this.listCollum.length;
              _a.label = 1;

             case 1:
              if (!(i < l)) return [ 3, 4 ];
              col = this.listCollum[i];
              col.Stop(this.spinReelView[i]);
              return [ 4, Windown_1.Windown.KingKong.getMakeDelay(.2).prosime ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              return [ 3, 6 ];

             case 5:
              e_1 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_1);
              return [ 3, 6 ];

             case 6:
              return [ 2 ];
            }
          });
        });
      };
      KingKongView.prototype.allCollumStopCompleted = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.setStateSpin(GAME_STATE.SHOWING_RESULT);
              this.setStateBtn();
              this.effectButtonSpin();
              if (!(this.listLineWin.length > 0)) return [ 3, 2 ];
              return [ 4, this.showAllWinLine() ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 4, Windown_1.Windown.KingKong.getMakeDelay(.2).prosime ];

             case 3:
              _a.sent();
              this.resetSlotView();
              return [ 2 ];
            }
          });
        });
      };
      KingKongView.prototype.showAllWinLine = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            cc.log("showAllWinLine");
            return [ 2, new Promise(function(resolve, rejects) {
              return __awaiter(_this, void 0, void 0, function() {
                var i, l, data;
                return __generator(this, function(_a) {
                  try {
                    this.hideAllSymbol();
                    this.lbBalance.setMoney(this.agUser);
                    for (i = 0, l = this.listLineWin.length; i < l; i++) {
                      data = this.listLineWin[i];
                      this.effectWinline(data["id"], data["symbol"], data["stack"]);
                    }
                    this.btnSpin.node.off("click");
                    this.btnSpin.node.on("click", function() {
                      cc.log("OnCLickBtnSpin");
                      resolve(null);
                    });
                  } catch (e) {
                    Util_1.Util.ThrowErrProsime(e);
                  }
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      KingKongView.prototype.stopShowLine = function(resolve) {
        resolve(null);
      };
      KingKongView.prototype.effectWinline = function(lineID, symbol, stack) {
        var payLineID = this.payLine[lineID - 1];
        for (var i = 0; i < stack + 1; i++) this.listCollum[i].showSymbolWin(payLineID[i] + 1);
      };
      KingKongView.prototype.resetSlotView = function() {
        cc.log("ResetSlotView");
        this.setStateSpin(GAME_STATE.PREPARE);
        this.infoBar.prepareSpin();
        this.listCollum.forEach(function(col) {
          col.Reset();
        });
        if (this.isAutoSpin && this.autoSpinRemain > 0) this.onClickSpin(); else {
          this.lbAutoSpinRemain.node.active = false;
          this.btnStopAuto.node.active = false;
        }
      };
      KingKongView.prototype.hideAllSymbol = function(ignoredId) {
        void 0 === ignoredId && (ignoredId = -1);
        this.listCollum.forEach(function(col) {
          col.hideAllSymbol(ignoredId);
        });
      };
      KingKongView.prototype.setStateSpin = function(state) {
        this.gameState = state;
        switch (this.gameState) {
         case GAME_STATE.SPINNING:
         case GAME_STATE.SHOWING_RESULT:
         case GAME_STATE.JOIN_GAME:
         case GAME_STATE.PREPARE:
        }
      };
      KingKongView.prototype.setStateBtn = function() {
        if (this.gameState == GAME_STATE.SPINNING) {
          this.btnAuto.node.getChildByName("blockEven").active = true;
          this.btnSpin.node.getChildByName("blockEven").active = true;
          this.btnChangeBet.node.getChildByName("blockEven").active = true;
        } else {
          this.btnAuto.node.getChildByName("blockEven").active = false;
          this.btnSpin.node.getChildByName("blockEven").active = false;
          this.btnChangeBet.node.getChildByName("blockEven").active = false;
        }
      };
      KingKongView.prototype.effectButtonSpin = function() {
        var arrow = this.btnSpin.node.getChildByName("arrow");
        this.gameState == GAME_STATE.SPINNING ? cc.tween(arrow).to(.3, {
          angle: 180
        }, {
          easing: cc.easing.sineIn
        }).start() : this.gameState == GAME_STATE.SHOWING_RESULT && cc.tween(arrow).to(.3, {
          angle: 0
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      KingKongView.prototype.onClickMenu = function() {
        this.settingView.node.active = true;
        this.settingView.show(1);
      };
      KingKongView.prototype.onClickChangeBet = function() {
        this.settingView.node.active = true;
        this.settingView.show(2);
      };
      KingKongView.prototype.onClickAuto = function() {
        this.settingAuto.node.active = true;
        cc.tween(this.settingAuto.node).set({
          y: -this.settingAuto.node.height,
          opacity: 150
        }).to(.3, {
          y: 0,
          opacity: 255
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      KingKongView.prototype.onClickStopAuto = function() {
        this.btnStopAuto.node.active = false;
        this.isAutoSpin = false;
        this.lbAutoSpinRemain.node.active = false;
      };
      KingKongView.prototype.setAutoSpin = function(numberSession, litmitValue) {
        this.isAutoSpin = true;
        this.autoSpinRemain = numberSession;
        this.limitLoseValue = litmitValue * this.betValue;
        this.btnStopAuto.node.active = true;
        this.onClickSpin();
      };
      KingKongView.instance = null;
      __decorate([ property(cc.Node) ], KingKongView.prototype, "bkgSprite", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "collumContainer", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnAuto", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnStopAuto", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnChangeBet", void 0);
      __decorate([ property(cc.Label) ], KingKongView.prototype, "lbAutoSpinRemain", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbBetValue", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbBalance", void 0);
      __decorate([ property(cc.Label) ], KingKongView.prototype, "lbTotalWin", void 0);
      __decorate([ property(KingKongAssets_1.default) ], KingKongView.prototype, "AssetsKingKong", void 0);
      __decorate([ property(KingKongInfoBar_1.default) ], KingKongView.prototype, "infoBar", void 0);
      __decorate([ property(KingKongSetting_1.default) ], KingKongView.prototype, "settingView", void 0);
      __decorate([ property(KingKongSettingAuto_1.default) ], KingKongView.prototype, "settingAuto", void 0);
      __decorate([ property([ cc.Node ]) ], KingKongView.prototype, "listCol", void 0);
      KingKongView = __decorate([ ccclass ], KingKongView);
      return KingKongView;
    }(cc.Component);
    exports.default = KingKongView;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Other/MakeDelay": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./KingKongAssets": "KingKongAssets",
    "./KingKongCollum": "KingKongCollum",
    "./KingKongInfoBar": "KingKongInfoBar",
    "./KingKongSetting": "KingKongSetting",
    "./KingKongSettingAuto": "KingKongSettingAuto"
  } ]
}, {}, [ "KingKongAssets", "KingKongCollum", "KingKongInfoBar", "KingKongSetting", "KingKongSettingAuto", "KingKongSymbol", "KingKongView" ]);