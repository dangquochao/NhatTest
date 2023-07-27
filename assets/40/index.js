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
        _this.paylineAtlas = null;
        _this.nodeNFS = null;
        _this.symbolScatter = null;
        _this.evenBall = null;
        _this.assetParent = null;
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
      __decorate([ property(cc.SpriteAtlas) ], KingKongAssets.prototype, "paylineAtlas", void 0);
      __decorate([ property(cc.Node) ], KingKongAssets.prototype, "nodeNFS", void 0);
      __decorate([ property(cc.Node) ], KingKongAssets.prototype, "symbolScatter", void 0);
      __decorate([ property(cc.Node) ], KingKongAssets.prototype, "evenBall", void 0);
      __decorate([ property(cc.Node) ], KingKongAssets.prototype, "assetParent", void 0);
      KingKongAssets = KingKongAssets_1 = __decorate([ ccclass ], KingKongAssets);
      return KingKongAssets;
    }(cc.Component);
    exports.default = KingKongAssets;
    cc._RF.pop();
  }, {
    "./KingKongSymbol": "KingKongSymbol"
  } ],
  KingKongAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04779T1u/ZBiIwn/wZl2yft", "KingKongAudio");
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
    var AudioManager_1 = require("../../../Scritps/Parent/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongAudio = function(_super) {
      __extends(KingKongAudio, _super);
      function KingKongAudio() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.click = null;
        _this.fsSpin = null;
        _this.bgm_fs = null;
        _this.SE_BigWin = null;
        _this.SE_FreeSpinEnd = null;
        _this.SE_ReelSpeedUp = null;
        _this.SE_Scoring_01 = null;
        _this.SE_ScoringEnd = null;
        _this.SE_Base_Hit = [];
        return _this;
      }
      KingKongAudio.prototype.start = function() {};
      KingKongAudio.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      KingKongAudio.prototype.playMusic = function() {
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.6);
        }
      };
      KingKongAudio.prototype.playIndexTakeLine = function() {};
      KingKongAudio.prototype.playSmalWin = function() {};
      KingKongAudio.prototype.playBkgfs = function() {
        this.stopMusic();
        this.playEffect(this.fsSpin);
        this.playEffect(this.bgm_fs, .6, true);
      };
      KingKongAudio.prototype.stopBkgFs = function() {
        this.stopEffect(this.bgm_fs, true);
        this.playMusic();
      };
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "fsSpin", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "bgm_fs", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "SE_BigWin", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "SE_FreeSpinEnd", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "SE_ReelSpeedUp", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "SE_Scoring_01", void 0);
      __decorate([ property(cc.AudioClip) ], KingKongAudio.prototype, "SE_ScoringEnd", void 0);
      __decorate([ property([ cc.AudioClip ]) ], KingKongAudio.prototype, "SE_Base_Hit", void 0);
      KingKongAudio = __decorate([ ccclass ], KingKongAudio);
      return KingKongAudio;
    }(AudioManager_1.default);
    exports.default = KingKongAudio;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
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
    var Windown_1 = require("../../../Scritps/Windown");
    var KingKongSymbol_1 = require("./KingKongSymbol");
    var KingKongView_1 = require("./KingKongView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SPEED_TYPE = {
      NORMAL: .08,
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
        _this.speedNFS = .05;
        _this.nodeNFS = null;
        _this.resolveStop = null;
        _this.isSetDarkForNFS = false;
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
        null != this.nodeNFS && (this.nodeNFS.active = false);
        if (null != this.resolveStop) {
          this.resolveStop();
          this.resolveStop = null;
        }
      };
      KingKongCollum.prototype.activeAllSymbol = function() {
        this.listSymbols.forEach(function(symbol) {
          symbol.sprite.node.color = cc.Color.WHITE;
        });
      };
      KingKongCollum.prototype.prepareStop = function() {
        this.hideNFS();
        cc.log("prepareStop---");
      };
      KingKongCollum.prototype.Stop = function(listID) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.listIDResult = listID;
            return [ 2, new Promise(function(re, je) {
              if (_this.isNeerSpin) {
                cc.log("nearFSP:" + _this.collumIndex);
                _this.isChangeSpeedNFS = true;
                _this.showNFS();
                _this.kingKongView.setDarkForNFS(_this);
                _this.scheduleOnce(function() {
                  _this.isChangeSpeedNFS = false;
                  _this.isStop = true;
                  _this.resolveStop = re;
                }, 3.5);
                _this.slowDownSpeed();
              } else {
                _this.isStop = true;
                _this.scheduleOnce(function() {
                  re(null);
                  Windown_1.Windown.KingKong.audio.playEffect(Windown_1.Windown.KingKong.audio.SE_Base_Hit[_this.collumIndex]);
                }, .2);
              }
            }) ];
          });
        });
      };
      KingKongCollum.prototype.showScatter = function() {
        for (var i = 0; i < this.listSymbols.length; i++) 12 == this.listSymbols[i].id && this.listSymbols[i].showScatter();
      };
      KingKongCollum.prototype.slowDownSpeed = function(speedEnd) {
        var _this = this;
        void 0 === speedEnd && (speedEnd = .5);
        Windown_1.Windown.KingKong.audio.playEffect(Windown_1.Windown.KingKong.audio.SE_ReelSpeedUp);
        var obj = {
          a: SPEED_TYPE["TURBO"]
        };
        cc.tween(obj).to(3.5, {
          a: speedEnd
        }, {
          progress: function(start, end, current, ratio) {
            _this.speedNFS = start + (end - start) * ratio;
          },
          easing: cc.easing.quadIn
        }).start();
      };
      KingKongCollum.prototype.showSymbolWin = function(index) {
        this.listSymbols[index].showEffectWin();
      };
      KingKongCollum.prototype.getSpeedNFS = function() {
        return this.speedNFS;
      };
      KingKongCollum.prototype.showNFS = function() {
        if (null == this.nodeNFS) {
          this.nodeNFS = cc.instantiate(Windown_1.Windown.KingKong.AssetsKingKong.nodeNFS);
          this.nodeNFS.parent = this.node.parent;
          this.nodeNFS.x = this.node.x;
          this.nodeNFS.y = this.node.y;
          Windown_1.Windown.KingKong.isFreeSpin ? this.nodeNFS.getComponent(cc.Animation).play("NearFreeSpin2") : this.nodeNFS.getComponent(cc.Animation).play("NearFreeSpin");
        }
        this.nodeNFS.active = true;
      };
      KingKongCollum.prototype.hideNFS = function() {
        this.spineNFS && (this.spineNFS.active = false);
      };
      KingKongCollum.prototype.hideAllSymbol = function(ignoreID) {
        void 0 === ignoreID && (ignoreID = -1);
        this.listSymbols.forEach(function(symbol) {
          symbol.sprite.node.color = symbol.id != ignoreID ? cc.Color.GRAY : cc.Color.WHITE;
          symbol.hideSpine();
        });
      };
      KingKongCollum.prototype.Reset = function() {
        this.isStop = false;
        this.listIDResult = [];
        this.listSymbols.forEach(function(symbol) {
          symbol.Reset();
        });
        this.isNeerSpin = false;
        this.speedNFS = .05;
        this.isChangeSpeedNFS = false;
        this.isSetDarkForNFS = false;
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
    "../../../Scritps/Windown": void 0,
    "./KingKongSymbol": "KingKongSymbol",
    "./KingKongView": "KingKongView"
  } ],
  KingKongEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41482Sn7CNPf6wQwGNTd1jq", "KingKongEffect");
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
    var LbMonoSpace_1 = require("../../../Scritps/Other/LbMonoSpace");
    var Util_1 = require("../../../Scritps/Util");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongEffect = function(_super) {
      __extends(KingKongEffect, _super);
      function KingKongEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.effectContainer = null;
        _this.animBigWin = null;
        _this.lbBgWin = null;
        _this.btnConfirm = null;
        return _this;
      }
      KingKongEffect.prototype.start = function() {};
      KingKongEffect.prototype.showBigWin = function(agWin) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, rejects) {
              return __awaiter(_this, void 0, void 0, function() {
                var boneKong, BigWin_FX;
                var _this = this;
                return __generator(this, function(_a) {
                  try {
                    this.effectContainer.active = true;
                    boneKong = this.animBigWin.node.parent.getComponentInChildren(dragonBones.ArmatureDisplay);
                    boneKong.playAnimation("Win_1", 1);
                    this.animBigWin.node.parent.active = true;
                    this.animBigWin.setAnimation(0, "Idle", false);
                    this.lbBgWin.resetLb();
                    this.lbBgWin.time = 3;
                    this.lbBgWin.callBack = function() {
                      _this.btnConfirm.node.active = true;
                    };
                    this.lbBgWin.setMoney(agWin, true);
                    this.btnConfirm.node.active = false;
                    this.btnConfirm.node.off("click");
                    this.btnConfirm.node.on("click", function() {
                      resolve(null);
                      _this.animBigWin.node.parent.active = false;
                      _this.effectContainer.active = false;
                    });
                    BigWin_FX = this.animBigWin.node.parent.getChildByName("BigWin_FX");
                    cc.tween(BigWin_FX).by(2, {
                      angle: -360
                    }).repeatForever().start();
                    cc.tween(BigWin_FX).set({
                      opacity: 150
                    }).to(.5, {
                      opacity: 255
                    }).start();
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
      __decorate([ property(cc.Node) ], KingKongEffect.prototype, "effectContainer", void 0);
      __decorate([ property(sp.Skeleton) ], KingKongEffect.prototype, "animBigWin", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongEffect.prototype, "lbBgWin", void 0);
      __decorate([ property(cc.Button) ], KingKongEffect.prototype, "btnConfirm", void 0);
      KingKongEffect = __decorate([ ccclass ], KingKongEffect);
      return KingKongEffect;
    }(cc.Component);
    exports.default = KingKongEffect;
    cc._RF.pop();
  }, {
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Util": void 0
  } ],
  KingKongHistoryDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80698mIAQJMvIKQ0wUsF36G", "KingKongHistoryDetail");
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
    var KingKongHistoryDetail = function(_super) {
      __extends(KingKongHistoryDetail, _super);
      function KingKongHistoryDetail() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTitle = null;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.lbMNUser = null;
        _this.parentItem = null;
        _this.itemPayline = null;
        _this.scrItemPayline = null;
        _this.listItem = [];
        _this.isFreeSpin = false;
        _this.payLine = [];
        return _this;
      }
      KingKongHistoryDetail.prototype.onLoad = function() {
        for (var i = 0; i < this.parentItem.childrenCount; i++) {
          var itemCol = this.parentItem.children[i];
          this.listItem.push(itemCol.children);
        }
        this.payLine = Windown_1.Windown.KingKong.payLine;
      };
      KingKongHistoryDetail.prototype.show = function(SFSObject) {
        this.node.active = true;
        this.node.x = 721.812;
        cc.Tween.stopAllByTarget(this.node);
        this.node.opacity = 0;
        cc.tween(this.node).to(.2, {
          x: 0,
          opacity: 255
        }, {
          easing: cc.easing.quadIn
        }).start();
        var date = SFSObject.get("date");
        var jsonResult = SFSObject.get("infolog");
        var obj = JSON.parse(jsonResult);
        this.isFreeSpin = obj.freeSpin;
        this.lbTitle.string = this.isFreeSpin ? "QUAY MI\u1ec4N PH\xcd" : "QUAY TH\u01af\u1edcNG";
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM HH:mm:ss");
        var isScatter = obj["isScarter"];
        var listResult = JSON.parse(obj.views);
        var countScatter = 0;
        listResult.forEach(function(view) {
          view.includes(12) && countScatter++;
        });
        for (var i = 0; i < 5; i++) for (var j = 0; j < 3; j++) {
          var id = listResult[i][j];
          this.listItem[i][j].getComponent(cc.Sprite).spriteFrame = Windown_1.Windown.KingKong.AssetsKingKong.symbolAtlas.getSpriteFrame(id.toString());
          this.listItem[i][j].color = cc.Color.GRAY;
          !isScatter && 2 != countScatter || 12 != id || (this.listItem[i][j].color = cc.Color.WHITE);
        }
        this.lbBet.string = Windown_1.Windown.formatNumber(20 * obj.agBet);
        this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        this.lbMNUser.string = Windown_1.Windown.formatNumber(obj.agUser);
        this.setLineAn(obj.listLineWin, listResult);
      };
      KingKongHistoryDetail.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.KingKong.audio.playClick();
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.2, {
          x: 720,
          opacity: 0
        }, {
          easing: cc.easing.quadOut
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      KingKongHistoryDetail.prototype.setLineAn = function(listLineWin, views) {
        this.scrItemPayline.content.children.forEach(function(item) {
          item.active = false;
        });
        for (var i = 0, l = listLineWin.length; i < l; i++) {
          var symbol = listLineWin[i].symbol;
          var stack = listLineWin[i].stack;
          var payLine = Windown_1.Windown.KingKong.payLine[listLineWin[i].id - 1];
          for (var j = 0; j < stack + 1; j++) this.listItem[j][payLine[j]].color = cc.Color.WHITE;
          var itemPayline = this.scrItemPayline.content.children[i];
          if (!cc.isValid(itemPayline)) {
            itemPayline = cc.instantiate(this.scrItemPayline.content.children[0]);
            itemPayline.parent = this.scrItemPayline.content;
          }
          itemPayline.active = true;
          itemPayline.getComponentInChildren(cc.Sprite).spriteFrame = Windown_1.Windown.KingKong.AssetsKingKong.paylineAtlas.getSpriteFrame("line_" + listLineWin[i].id);
          itemPayline.getChildByName("lbWin").getComponent(cc.Label).string = "W: " + Windown_1.Windown.formatMoney(listLineWin[i].agWinLine);
          itemPayline.getChildByName("lbIdLine").getComponent(cc.Label).string = listLineWin[i].id + "";
        }
      };
      __decorate([ property(cc.Label) ], KingKongHistoryDetail.prototype, "lbTitle", void 0);
      __decorate([ property(cc.Label) ], KingKongHistoryDetail.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], KingKongHistoryDetail.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], KingKongHistoryDetail.prototype, "lbWin", void 0);
      __decorate([ property(cc.Label) ], KingKongHistoryDetail.prototype, "lbMNUser", void 0);
      __decorate([ property(cc.Node) ], KingKongHistoryDetail.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], KingKongHistoryDetail.prototype, "itemPayline", void 0);
      __decorate([ property(cc.ScrollView) ], KingKongHistoryDetail.prototype, "scrItemPayline", void 0);
      KingKongHistoryDetail = __decorate([ ccclass ], KingKongHistoryDetail);
      return KingKongHistoryDetail;
    }(cc.Component);
    exports.default = KingKongHistoryDetail;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  KingKongHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c88flrUh5CK4nF9b9ArS5J", "KingKongHistory");
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
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var PageData_1 = require("../../../Scritps/Popup/PageData/PageData");
    var Windown_1 = require("../../../Scritps/Windown");
    var KingKongHistoryDetail_1 = require("./KingKongHistoryDetail");
    var KingKongItemHistory_1 = require("./KingKongItemHistory");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongHistory = function(_super) {
      __extends(KingKongHistory, _super);
      function KingKongHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.detail = null;
        _this.listData = null;
        _this.maxRow = 11;
        return _this;
      }
      KingKongHistory.prototype.show = function() {
        this.node.active = true;
        this.reset();
        this.node.y = -1280;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.3, {
          y: 0
        }, {
          easing: cc.easing.quadOut
        }).start();
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryInCa, null, Windown_1.Windown.KingKong.roomSFS);
        Windown_1.Windown.UIManager.showLoading();
      };
      KingKongHistory.prototype.start = function() {};
      KingKongHistory.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      KingKongHistory.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      KingKongHistory.prototype.responseServer = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = sfsObj.getSFSArray("history");
        this.initWithListData(sfsArr);
      };
      KingKongHistory.prototype.initWithListData = function(listData) {
        cc.log("history:" + Windown_1.Windown.SFSArrToJson(listData));
        var child = this.pageDate.content.children;
        var lengthRows = listData.size();
        var totalPage = Math.floor(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.listData = listData;
        this.onChangePage(1);
      };
      KingKongHistory.prototype.onChangePage = function(index) {
        var parent = this.pageDate.content;
        var child = parent.children;
        var itemTemplate = child[0];
        var start = (index - 1) * this.maxRow;
        for (var i = 0, l = this.maxRow; i < l; i++) {
          var node = child[i];
          if (start < this.listData.size()) {
            if (null == node) {
              node = cc.instantiate(itemTemplate);
              parent.addChild(node);
              node.y = -(i + 1) * node.height + node.height / 2;
            }
            var sfsObj = this.listData.getSFSObject(start);
            node.getComponent(KingKongItemHistory_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      KingKongHistory.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.KingKong.audio.playClick();
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.2, {
          y: -1280
        }, {
          easing: cc.easing.quadIn
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      KingKongHistory.prototype.showDetail = function(SFSObject) {
        this.detail.show(SFSObject);
      };
      __decorate([ property(PageData_1.default) ], KingKongHistory.prototype, "pageDate", void 0);
      __decorate([ property(KingKongHistoryDetail_1.default) ], KingKongHistory.prototype, "detail", void 0);
      KingKongHistory = __decorate([ ccclass ], KingKongHistory);
      return KingKongHistory;
    }(cc.Component);
    exports.default = KingKongHistory;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./KingKongHistoryDetail": "KingKongHistoryDetail",
    "./KingKongItemHistory": "KingKongItemHistory"
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
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KingKongInfoBar = function(_super) {
      __extends(KingKongInfoBar, _super);
      function KingKongInfoBar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTotalWin = null;
        _this.lbInfo = null;
        return _this;
      }
      KingKongInfoBar.prototype.start = function() {};
      KingKongInfoBar.prototype.prepareSpin = function() {};
      KingKongInfoBar.prototype.updateTotalWin = function(agWin) {
        var soundScore = Windown_1.Windown.KingKong.audio.playEffect(Windown_1.Windown.KingKong.audio.SE_Scoring_01);
        this.lbTotalWin.resetLb();
        this.lbTotalWin.time = 1.5;
        this.lbTotalWin.setMoney(agWin);
        this.lbTotalWin.cb = function() {
          Windown_1.Windown.KingKong.audio.stopEffect(Windown_1.Windown.KingKong.audio.SE_Scoring_01);
          Windown_1.Windown.KingKong.audio.playEffect(Windown_1.Windown.KingKong.audio.SE_ScoringEnd);
        };
        this.lbInfo.node.active = false;
        this.lbTotalWin.node.parent.active = true;
      };
      KingKongInfoBar.prototype.updateInfoText = function(msg) {
        this.lbInfo.node.active = true;
        this.lbInfo.string = msg;
        this.lbTotalWin.node.parent.active = false;
      };
      __decorate([ property(LbMoneyChange_1.default) ], KingKongInfoBar.prototype, "lbTotalWin", void 0);
      __decorate([ property(cc.Label) ], KingKongInfoBar.prototype, "lbInfo", void 0);
      KingKongInfoBar = __decorate([ ccclass ], KingKongInfoBar);
      return KingKongInfoBar;
    }(cc.Component);
    exports.default = KingKongInfoBar;
    cc._RF.pop();
  }, {
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  KingKongItemHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b00ddOoqRBj5E/WTaHQQlK", "KingKongItemHistory");
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
    var KingKongItemHistory = function(_super) {
      __extends(KingKongItemHistory, _super);
      function KingKongItemHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.data = null;
        return _this;
      }
      KingKongItemHistory.prototype.initItem = function(info) {
        try {
          this.data = info;
          var date = this.data.get("date");
          this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM\nHH:mm:ss");
          var jsonResult = this.data.get("infolog");
          var obj = JSON.parse(jsonResult);
          this.lbBet.string = Windown_1.Windown.formatNumber(50 * obj.agBet);
          this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        } catch (e) {
          console.error(e);
        }
      };
      KingKongItemHistory.prototype.onClick = function() {
        Windown_1.Windown.KingKong.audio.playClick();
        Windown_1.Windown.KingKong.popupLichSu.showDetail(this.data);
      };
      __decorate([ property(cc.Label) ], KingKongItemHistory.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], KingKongItemHistory.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], KingKongItemHistory.prototype, "lbWin", void 0);
      KingKongItemHistory = __decorate([ ccclass ], KingKongItemHistory);
      return KingKongItemHistory;
    }(cc.Component);
    exports.default = KingKongItemHistory;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
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
          this.loseLimited = 9999999;
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
          this.lbLoseLitmitedValue.string = "[-" + Windown_1.Windown.formatNumber(this.loseLimited * Windown_1.Windown.KingKong.betValue) + "]";
        } else this.lbLoseLitmitedValue.node.active = false;
        cc.log("loseLimited===" + this.loseLimited);
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
      KingKongSetting.prototype.onClickHome = function() {
        Windown_1.Windown.KingKong.onClickBackToLobby();
      };
      KingKongSetting.prototype.onClickSound = function() {
        this.soundOn = !this.soundOn;
        this.spriteSound.spriteFrame = this.sprSoundState[this.soundOn ? 0 : 1];
        Windown_1.Windown.KingKong.audio.isActiveMusic = this.soundOn;
        Windown_1.Windown.KingKong.audio.isActiveSound = this.soundOn;
      };
      KingKongSetting.prototype.onClickRule = function() {
        this.nodeRule.active = true;
        cc.Tween.stopAllByTarget(this.nodeRule);
        cc.tween(this.nodeRule).set({
          y: -1280,
          opacity: 0
        }).to(.3, {
          y: 0,
          opacity: 255
        }, {
          easing: cc.easing.quadIn
        }).start();
        this.NodeFunction.active = false;
      };
      KingKongSetting.prototype.onHideRule = function() {
        var _this = this;
        this.NodeFunction.active = true;
        cc.Tween.stopAllByTarget(this.nodeRule);
        cc.tween(this.nodeRule).to(.2, {
          y: -1280
        }, {
          easing: cc.easing.quadOut
        }).call(function() {
          _this.nodeRule.active = false;
        }).start();
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
      KingKongSetting.prototype.onClickHistory = function() {
        Windown_1.Windown.KingKong.audio.playClick();
        Windown_1.Windown.KingKong.onShowPopupHistory();
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
        _this.animScatter = null;
        _this.animWild = null;
        return _this;
      }
      SymbolKingKong.prototype.update = function() {
        this.collumCtrl.isChangeSpeedNFS && (this.speed = this.collumCtrl.speedNFS);
      };
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
        this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        idSprite < 4 && this.sprite.node.setContentSize(cc.size(1.2 * this.sprite.node.width, 1.2 * this.sprite.node.height));
        this.sprite.node.scale = 11 == this.id ? .7 : .8;
        this.spine && (this.spine.active = false);
        this.collumCtrl.isSetDarkForNFS && 12 != this.id ? this.sprite.node.color = cc.Color.GRAY : this.sprite.node.color = cc.Color.WHITE;
      };
      SymbolKingKong.prototype.setSpine = function(id) {};
      SymbolKingKong.prototype.setRandomSprite = function() {
        var randomId = Windown_1.Windown.RandomNumber(0, 10);
        this.sprite.spriteFrame = this.symbolAtlas.getSpriteFrame(randomId.toString());
        this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        randomId < 4 && this.sprite.node.setContentSize(cc.size(1.2 * this.sprite.node.width, 1.2 * this.sprite.node.height));
        this.sprite.node.scale = 11 == randomId ? .7 : .8;
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
        cc.tween(this.node).by(this.speed, {
          y: -this.collumCtrl.stepMove
        }).call(function() {
          _this.collumCtrl.isStop ? _this.stopMove() : _this.loopMove();
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
            var easingg = (this.indexSymbol = 0) ? cc.easing.backOut : null;
            cc.tween(this.node).to(this.speed, {
              y: this.node.y - this.collumCtrl.stepMove
            }, {
              easing: easingg
            }).start();
            this.setSprite(Windown_1.Windown.RandomNumber(0, 9));
          }
        } else {
          var easingg = this.indexSymbol + 1 == this.indexStop ? cc.easing.backOut : null;
          var speedMove = this.indexSymbol + 1 == this.indexStop ? 3 * this.speed : this.speed;
          if (this.collumCtrl.isNeerSpin) {
            easingg = null;
            speedMove = this.speed;
          }
          this.indexSymbol++;
          cc.tween(this.node).by(speedMove, {
            y: -this.collumCtrl.stepMove
          }, {
            easing: easingg
          }).call(function() {
            _this.indexSymbol != _this.indexStop ? _this.stopMove() : 3 == _this.indexSymbol && _this.collumCtrl.stopCollumCompleted();
          }).start();
          3 == this.indexSymbol && this.scheduleOnce(function() {
            _this.collumCtrl.prepareStop();
          }, .85 * speedMove);
        }
      };
      SymbolKingKong.prototype.showEffectWin = function() {
        switch (this.id) {
         case 11:
          this.spine.active = true;
          this.sprite.node.active = false;
          this.spine.destroyAllChildren();
          var symbol = cc.instantiate(Windown_1.Windown.KingKong.AssetsKingKong.assetParent.getChildByName("Symbol_" + this.id));
          this.spine.addChild(symbol);
          symbol.active = true;
          break;

         case 12:
          this.spine.active = true;
          this.sprite.node.active = false;
          break;

         default:
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
        this.sprite.node.scale = 11 == this.id ? .7 : this.initSpriteScale;
        this.sprite.node.active = true;
        this.spine.active = false;
        this.hideSpine();
      };
      SymbolKingKong.prototype.showScatter = function() {
        var _this = this;
        this.sprite.node.active = false;
        if (null == this.animScatter) {
          this.animScatter = cc.instantiate(Windown_1.Windown.KingKong.AssetsKingKong.symbolScatter);
          this.animScatter.parent = this.node;
        }
        this.scheduleOnce(function() {
          _this.sprite.node.active = true;
        }, 2);
        cc.log("showScatter Windown.KingKong.isFreeSpin=" + Windown_1.Windown.KingKong.isFreeSpin);
        Windown_1.Windown.KingKong.isWin2Scatter || Windown_1.Windown.KingKong.isFreeSpin || this.scheduleOnce(function() {
          var ball = cc.instantiate(Windown_1.Windown.KingKong.AssetsKingKong.evenBall);
          var parentMid = Windown_1.Windown.KingKong.animKong.node.parent;
          ball.active = true;
          ball.parent = parentMid;
          ball.setPosition(parentMid.convertToNodeSpaceAR(_this.node.parent.convertToWorldSpaceAR(_this.node.position)));
          var posAnimKong = Windown_1.Windown.KingKong.animKong.node.position;
          cc.tween(ball).to(.5, {
            position: posAnimKong
          }, {
            easing: cc.easing.sineIn
          }).call(function() {
            if (3 == _this.collumCtrl.collumIndex) {
              Windown_1.Windown.KingKong.animKong.playAnimation("Collect", 1);
              Windown_1.Windown.KingKong.animKong.once("complete", function() {
                Windown_1.Windown.KingKong.animKong.playAnimation("Idle_2", 1);
                Windown_1.Windown.KingKong.animKong.once("complete", function() {
                  Windown_1.Windown.KingKong.animKong.playAnimation("Win_2", 1);
                  Windown_1.Windown.KingKong.animKong.once("complete", function() {
                    cc.tween(Windown_1.Windown.KingKong.animKong.node).to(.3, {
                      opacity: 0
                    }).call(function() {
                      Windown_1.Windown.KingKong.animKong.node.active = false;
                      Windown_1.Windown.KingKong.animKong.node.opacity = 255;
                    }).start();
                  });
                });
              });
            }
            ball.destroy();
          }).start();
        }, 1.5);
        this.animScatter.active = true;
        this.animScatter.getChildByName("Symbol_1_ske_0").getComponent(dragonBones.ArmatureDisplay).playAnimation("Symbol_1", 1);
      };
      SymbolKingKong.prototype.hideSpine = function() {
        null != this.animScatter && (this.animScatter.active = false);
        null != this.animWild && (this.animWild.active = false);
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
    exports.WIN_TYPE = exports.GAME_STATE = exports.SPINE_TYPE = void 0;
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
    var KingKongAudio_1 = require("./KingKongAudio");
    var KingKongCollum_1 = require("./KingKongCollum");
    var KingKongEffect_1 = require("./KingKongEffect");
    var KingKongHistory_1 = require("./KingKongHistory");
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
    var WIN_TYPE;
    (function(WIN_TYPE) {
      WIN_TYPE[WIN_TYPE["NORMAL"] = 0] = "NORMAL";
      WIN_TYPE[WIN_TYPE["BIGWIN"] = 1] = "BIGWIN";
    })(WIN_TYPE = exports.WIN_TYPE || (exports.WIN_TYPE = {}));
    var KingKongView = function(_super) {
      __extends(KingKongView, _super);
      function KingKongView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bkgSprite = null;
        _this.collumContainer = null;
        _this.sprGameName = null;
        _this.maskFS = null;
        _this.nodeFSLeft = null;
        _this.nodeBottomNormal = null;
        _this.nodePopupClickToFS = null;
        _this.maskEndFS = null;
        _this.maskGetFS = null;
        _this.baseBgSpin = null;
        _this.listSfBgGetFS = [];
        _this.listSfBGSpin = [];
        _this.btnSpin = null;
        _this.btnAuto = null;
        _this.btnStopAuto = null;
        _this.btnChangeBet = null;
        _this.lbAutoSpinRemain = null;
        _this.lbBetValue = null;
        _this.lbBalance = null;
        _this.lbTotalWin = null;
        _this.lbFSGet = null;
        _this.lbFSRemain = null;
        _this.lbFSTotal = null;
        _this.lbFSTotalWin = null;
        _this.animKong = null;
        _this.animBaseBGVolcano = null;
        _this.animBaseBGFront = null;
        _this.AssetsKingKong = null;
        _this.infoBar = null;
        _this.settingView = null;
        _this.settingAuto = null;
        _this.effectController = null;
        _this.popupLichSu = null;
        _this.audio = null;
        _this.makeDelay = null;
        _this.listCol = [];
        _this.listCollum = [];
        _this.listBetValue = [];
        _this.spinReelView = [];
        _this.isAutoSpin = false;
        _this.isTurbo = false;
        _this.isScatter = false;
        _this.isFreeSpin = false;
        _this.isWin2Scatter = false;
        _this.autoSpinRemain = 0;
        _this.limitLoseValue = 0;
        _this.betValue = 1e3;
        _this.gameType = -1;
        _this.winType = 0;
        _this.curRoomBet = 100;
        _this.totalLineBet = 20;
        _this.agWin = 0;
        _this.agUser = 0;
        _this.freeSpinLeft = 0;
        _this.currentFSTurn = 0;
        _this.totalFreeSpin = 0;
        _this.totalWinFS = 0;
        _this.limitAgUserLose = 0;
        _this.dataFinish = null;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.listConfigBet = [];
        _this.listLineWin = [];
        _this.stopShowLineCB = null;
        _this.spinType = SPINE_TYPE.NORMAL;
        _this.gameState = GAME_STATE.JOIN_GAME;
        _this.payLine = [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ], [ 2, 2, 2, 2, 2 ], [ 0, 1, 2, 1, 0 ], [ 2, 1, 0, 1, 2 ], [ 0, 0, 1, 2, 2 ], [ 2, 2, 1, 0, 0 ], [ 1, 0, 1, 2, 1 ], [ 1, 2, 1, 0, 1 ], [ 1, 0, 0, 1, 0 ], [ 1, 2, 2, 1, 2 ], [ 0, 1, 0, 0, 1 ], [ 2, 1, 2, 2, 1 ], [ 0, 2, 0, 2, 0 ], [ 2, 0, 2, 0, 2 ], [ 1, 0, 2, 0, 1 ], [ 1, 2, 0, 2, 1 ], [ 0, 1, 1, 1, 0 ], [ 2, 1, 1, 1, 2 ], [ 0, 2, 2, 2, 0 ] ];
        _this.indexSpinTest = 0;
        _this.indexSpin = 0;
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
        this.agUser = Windown_1.Windown.User.userAg;
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
      KingKongView.prototype.onDestroy = function() {
        Windown_1.Windown.KingKong = null;
        if (this.dataFinish) {
          Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
          this.dataFinish = null;
        }
        Windown_1.Windown.MoneyUser.endGameMOney(this.gameType);
        cc.systemEvent.removeAll(this);
        this.roomSFS = null;
        this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr);
        this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse);
        Windown_1.Windown.UIManager.changeRotation();
        this.makeDelay.clear();
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

         case REQUEST_CODE_1.REQUEST_CODE.HistoryInCa:
          this.popupLichSu.responseServer(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryChiTietInCa:
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
        this.animBaseBGFront.armatureName = "Volcano";
        this.animBaseBGFront.playAnimation("Base_BG", -1);
        this.animBaseBGVolcano.playAnimation("Base_BG", -1);
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
        this.audio.playClick();
        cc.log("onClickSpin:", this.gameState);
        if (this.gameState == GAME_STATE.SHOWING_RESULT) return;
        this.infoBar.lbTotalWin.setMoneyNoTime(0);
        cc.log("totaFreeSPin=" + this.totalFreeSpin);
        if (this.totalFreeSpin > 0) {
          this.currentFSTurn++;
          this.lbFSRemain.string = this.currentFSTurn + "";
        }
        this.startSpin();
        this.setStateBtn();
        this.effectButtonSpin();
        this.sendClickSpin();
      };
      KingKongView.prototype.onClickSpinTest = function() {
        this.audio.playClick();
        if (this.gameState == GAME_STATE.SHOWING_RESULT) return;
        if (this.totalFreeSpin > 0) {
          this.currentFSTurn++;
          this.lbFSRemain.string = this.currentFSTurn + "";
        }
        this.startSpin();
        this.setStateBtn();
        this.effectButtonSpin();
        this.sendClickSpinTest("[[1,2,3],[12,3,4],[12,5,6],[12,7,8],[9,10,11]]");
      };
      KingKongView.prototype.sendClickSpinTest = function(arr) {
        this.lbBalance.setMoney(this.agUser - this.betValue);
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        sfsObj.putUtfString("arr", arr);
        ConectManager_1.ConectManager.getIns().sendRequest("testSpinInCa", sfsObj, this.roomSFS);
      };
      KingKongView.prototype.sendClickSpin = function() {
        this.lbBalance.setMoney(this.agUser - this.betValue);
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinInCa, sfsObj, this.roomSFS);
      };
      KingKongView.prototype.startSpin = function() {
        if (this.autoSpinRemain > 0 && this.isAutoSpin) {
          this.autoSpinRemain--;
          this.lbAutoSpinRemain.node.active = true;
          this.lbAutoSpinRemain.string = this.autoSpinRemain + "";
        } else {
          this.autoSpinRemain = 0;
          this.lbAutoSpinRemain.node.active = false;
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
        this.agWin = this.dataFinish.getLong("agWin");
        this.agUser = this.dataFinish.getLong("agUser");
        this.spinReelView = JSON.parse(data.get("views"));
        this.isWin2Scatter = this.checkWin2Scatter();
        this.isScatter = data.getBool("isScarter");
        this.listLineWin = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("listLineWin")));
        this.isFreeSpin = data.getBool("freeSpin");
        this.freeSpinLeft = data.getInt("numFreeSpin");
        this.isScatter && (this.totalFreeSpin += 15);
        this.isFreeSpin && (this.totalWinFS += this.agWin);
        this.agWin > 10 * this.betValue ? this.winType = WIN_TYPE.BIGWIN : this.winType = WIN_TYPE.NORMAL;
        this.setNearSpinEffect();
        this.scheduleOnce(function() {
          _this.handleStopSpin();
        }, this.isAutoSpin ? .5 : 1);
      };
      KingKongView.prototype.checkWin2Scatter = function() {
        var countScatter = 0;
        this.spinReelView.forEach(function(col) {
          col.includes(12) && countScatter++;
        });
        return 2 == countScatter;
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
              _a.trys.push([ 0, 8, , 9 ]);
              i = 0, l = this.listCollum.length;
              _a.label = 1;

             case 1:
              if (!(i < l)) return [ 3, 7 ];
              col = this.listCollum[i];
              if (!col.isNeerSpin) return [ 3, 3 ];
              return [ 4, col.Stop(this.spinReelView[i]) ];

             case 2:
              _a.sent();
              return [ 3, 4 ];

             case 3:
              col.Stop(this.spinReelView[i]);
              _a.label = 4;

             case 4:
              return [ 4, Windown_1.Windown.KingKong.getMakeDelay(this.isAutoSpin ? .1 : .25).prosime ];

             case 5:
              _a.sent();
              _a.label = 6;

             case 6:
              i++;
              return [ 3, 1 ];

             case 7:
              return [ 3, 9 ];

             case 8:
              e_1 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_1);
              return [ 3, 9 ];

             case 9:
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
              if (!(this.currentFSTurn == this.totalFreeSpin && this.isFreeSpin)) return [ 3, 2 ];
              return [ 4, this.showTotalWinFreeSPin() ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              if (!(this.isScatter || this.isWin2Scatter)) return [ 3, 4 ];
              return [ 4, this.showScatterSymbol() ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              if (!(this.listLineWin.length > 0 || this.isWin2Scatter || this.isScatter)) return [ 3, 6 ];
              this.infoBar.updateTotalWin(this.agWin);
              this.lbBalance.setMoney(this.agUser);
              if (!(this.listLineWin.length > 0)) return [ 3, 6 ];
              return [ 4, this.showAllWinLine() ];

             case 5:
              _a.sent();
              _a.label = 6;

             case 6:
              if (!this.isScatter) return [ 3, 9 ];
              return [ 4, this.effectController.showBigWin(this.agWin) ];

             case 7:
              _a.sent();
              return [ 4, this.showBgFS() ];

             case 8:
              _a.sent();
              _a.label = 9;

             case 9:
              cc.log("winType=", this.winType);
              if (!(this.winType == WIN_TYPE.BIGWIN)) return [ 3, 13 ];
              if (!(this.isFreeSpin && this.currentFSTurn == this.totalFreeSpin)) return [ 3, 11 ];
              return [ 4, this.effectController.showBigWin(this.totalWinFS) ];

             case 10:
              _a.sent();
              return [ 3, 13 ];

             case 11:
              if (!!this.isScatter) return [ 3, 13 ];
              return [ 4, this.effectController.showBigWin(this.agWin) ];

             case 12:
              _a.sent();
              _a.label = 13;

             case 13:
              return [ 4, Windown_1.Windown.KingKong.getMakeDelay(this.agWin > 0 ? 1 : .5).prosime ];

             case 14:
              _a.sent();
              this.resetSlotView();
              return [ 2 ];
            }
          });
        });
      };
      KingKongView.prototype.showScatterSymbol = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var i, e_2;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 2, , 3 ]);
                    for (i = 0; i < this.listCollum.length; i++) this.listCollum[i].showScatter();
                    return [ 4, Windown_1.Windown.KingKong.getMakeDelay(this.isWin2Scatter || this.isFreeSpin ? 3 : 8).prosime ];

                   case 1:
                    _a.sent();
                    cc.log("ShowwScatter Symbol xong");
                    resolve(null);
                    return [ 3, 3 ];

                   case 2:
                    e_2 = _a.sent();
                    Util_1.Util.ThrowErrProsime(e_2);
                    return [ 3, 3 ];

                   case 3:
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      KingKongView.prototype.showBgFS = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                  try {
                    this.sprGameName.active = false;
                    if (this.isFreeSpin) cc.tween(this.maskGetFS).delay(2).to(.5, {
                      scale: 2,
                      opacity: 0,
                      y: -50
                    }, {
                      easing: cc.easing.sineIn
                    }).call(function() {
                      _this.maskGetFS.y = 0;
                      _this.maskGetFS.scale = 1;
                      _this.maskGetFS.opacity = 255;
                      _this.maskFS.active = false;
                      resolve(null);
                    }).start(); else {
                      this.animBaseBGVolcano.playAnimation("TS", 1);
                      this.animBaseBGFront.playAnimation("TS", 1);
                      this.animBaseBGVolcano.once("complete", function() {
                        _this.animBaseBGFront.playAnimation("Free_BG", -1);
                        _this.animBaseBGVolcano.playAnimation("Free_BG", -1);
                        _this.maskEndFS.active = false;
                        cc.tween(_this.maskGetFS).delay(.5).to(.5, {
                          scale: 2,
                          opacity: 0,
                          y: -50
                        }, {
                          easing: cc.easing.sineIn
                        }).call(function() {
                          _this.maskGetFS.y = 0;
                          _this.maskGetFS.scale = 1;
                          _this.maskGetFS.opacity = 255;
                          _this.maskFS.active = false;
                          resolve(null);
                        }).start();
                      });
                    }
                    this.maskFS.active = true;
                    this.maskGetFS.active = true;
                    this.isFreeSpin ? this.maskGetFS.getChildByName("sprTextMask").getComponent(cc.Sprite).spriteFrame = this.listSfBgGetFS[1] : this.maskGetFS.getChildByName("sprTextMask").getComponent(cc.Sprite).spriteFrame = this.listSfBgGetFS[0];
                    this.nodeBottomNormal.active = false;
                    this.nodeFSLeft.active = true;
                    this.baseBgSpin.spriteFrame = this.listSfBGSpin[1];
                    this.lbFSTotal.setMoney(this.totalFreeSpin, false);
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
      KingKongView.prototype.showAllWinLine = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            cc.log("showAllWinLine");
            return [ 2, new Promise(function(resolve, rejects) {
              return __awaiter(_this, void 0, void 0, function() {
                var i, l, data, e_3;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 3, , 4 ]);
                    this.hideAllSymbol();
                    for (i = 0, l = this.listLineWin.length; i < l; i++) {
                      data = this.listLineWin[i];
                      this.effectWinline(data["id"], data["symbol"], data["stack"]);
                    }
                    this.btnSpin.node.off("click");
                    this.btnSpin.node.on("click", function() {
                      cc.log("OnCLickBtnSpin");
                      resolve(null);
                    });
                    if (!(this.isScatter || this.isFreeSpin || this.isAutoSpin)) return [ 3, 2 ];
                    return [ 4, Windown_1.Windown.KingKong.getMakeDelay(1.5).prosime ];

                   case 1:
                    _a.sent();
                    resolve(null);
                    _a.label = 2;

                   case 2:
                    return [ 3, 4 ];

                   case 3:
                    e_3 = _a.sent();
                    Util_1.Util.ThrowErrProsime(e_3);
                    return [ 3, 4 ];

                   case 4:
                    return [ 2 ];
                  }
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
        cc.log("ResetSlotViewL Limit Lose=" + this.limitLoseValue);
        cc.log("ResetSlotViewL Limit AGUser=" + this.limitAgUserLose);
        this.setStateSpin(GAME_STATE.PREPARE);
        this.infoBar.prepareSpin();
        this.listCollum.forEach(function(col) {
          col.Reset();
        });
        if (this.agUser < this.limitAgUserLose) {
          this.limitAgUserLose = 0;
          false == this.isAutoSpin;
          this.autoSpinRemain = 0;
          this.infoBar.updateInfoText("Ch\u1ea1m h\u1ea1n m\u1ee9c d\u1eebng l\u1ed7!");
        }
        if (this.isAutoSpin && this.autoSpinRemain > 0) 0 == this.totalFreeSpin && this.onClickSpin(); else {
          this.lbAutoSpinRemain.node.active = false;
          this.btnStopAuto.node.active = false;
        }
        if (this.isScatter && !this.isFreeSpin) {
          this.nodePopupClickToFS.active = true;
          this.isAutoSpin = true;
        }
        if (this.isFreeSpin) if (this.currentFSTurn == this.totalFreeSpin) {
          cc.log("resetFreeSpin");
          this.isFreeSpin = false;
          this.currentFSTurn = 0;
          this.totalFreeSpin = 0;
          this.totalWinFS = 0;
          this.indexSpinTest = 0;
          this.lbFSRemain.string = "0";
        } else this.onClickSpin();
      };
      KingKongView.prototype.hidePopupClickToFS = function() {
        this.nodePopupClickToFS.active = false;
        this.onClickSpin();
      };
      KingKongView.prototype.hideAllSymbol = function(ignoredId) {
        void 0 === ignoredId && (ignoredId = -1);
        this.listCollum.forEach(function(col) {
          col.hideAllSymbol(ignoredId);
        });
      };
      KingKongView.prototype.setDarkForNFS = function(colNFS) {
        this.listCollum.forEach(function(col) {
          if (col != colNFS) {
            col.isSetDarkForNFS = true;
            col.hideAllSymbol(12);
          }
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
        this.audio.playClick();
        this.settingView.node.active = true;
        this.settingView.show(1);
      };
      KingKongView.prototype.onClickChangeBet = function() {
        this.audio.playClick();
        if (this.isAutoSpin) return;
        this.settingView.node.active = true;
        this.settingView.show(2);
      };
      KingKongView.prototype.onClickAuto = function() {
        this.audio.playClick();
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
        this.audio.playClick();
        this.btnStopAuto.node.active = false;
        this.isAutoSpin = false;
        this.lbAutoSpinRemain.node.active = false;
      };
      KingKongView.prototype.setAutoSpin = function(numberSession, litmitValue) {
        this.isAutoSpin = true;
        this.autoSpinRemain = numberSession;
        this.limitLoseValue = litmitValue * this.betValue;
        this.btnStopAuto.node.active = true;
        this.lbAutoSpinRemain.string = this.autoSpinRemain + "";
        this.lbAutoSpinRemain.node.active = true;
        this.limitAgUserLose = this.agUser - this.limitLoseValue;
        this.onClickSpin();
      };
      KingKongView.prototype.setNearSpinEffect = function() {
        var _this = this;
        var scatterInCol = 0;
        this.spinReelView.forEach(function(colView) {
          scatterInCol >= 2 && 3 == _this.listCollum[_this.spinReelView.indexOf(colView)].collumIndex && (_this.listCollum[_this.spinReelView.indexOf(colView)].isNeerSpin = true);
          colView.includes(12) && scatterInCol++;
        });
      };
      KingKongView.prototype.showTotalWinFreeSPin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var Volcano_text_1, Volcano_text_0, TS_MSG03_vn_png, e_4;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 2, , 3 ]);
                    this.maskEndFS.active = true;
                    this.maskFS.active = true;
                    this.maskGetFS.active = false;
                    Volcano_text_1 = this.maskEndFS.getChildByName("Volcano_text_1").getComponent(dragonBones.ArmatureDisplay);
                    Volcano_text_0 = this.maskEndFS.getChildByName("Volcano_text_0").getComponent(dragonBones.ArmatureDisplay);
                    Volcano_text_1.playAnimation("FreeSpin_nd_1_fnt", 1);
                    Volcano_text_0.playAnimation("FreeSpin_nd_1_fnt", 1);
                    this.animBaseBGFront.playAnimation("FreeSpinEnd_1", 1);
                    this.animBaseBGVolcano.playAnimation("FreeSpinEnd_1", 1);
                    TS_MSG03_vn_png = this.maskEndFS.getChildByName("TS_MSG03_vn_png");
                    TS_MSG03_vn_png.y = 400;
                    TS_MSG03_vn_png.scaleY = .5;
                    TS_MSG03_vn_png.opacity = 0;
                    this.totalWinFS > 10 * this.betValue ? this.winType = WIN_TYPE.BIGWIN : this.winType = WIN_TYPE.NORMAL;
                    cc.tween(TS_MSG03_vn_png).delay(2).call(function() {
                      _this.lbFSTotalWin.setMoney(_this.totalWinFS);
                    }).to(.3, {
                      scaleY: 1,
                      opacity: 255,
                      y: 165
                    }).to(.1, {
                      scaleY: .8
                    }).to(.1, {
                      scaleY: 1
                    }).delay(2.5).call(function() {
                      _this.lbFSTotal.resetLb();
                      _this.maskEndFS.active = false;
                      _this.animBaseBGFront.playAnimation("Base_BG", -1);
                      _this.animBaseBGVolcano.playAnimation("Base_BG", -1);
                      _this.maskFS.active = false;
                      _this.nodeFSLeft.active = false;
                      _this.nodeBottomNormal.active = true;
                      _this.baseBgSpin.spriteFrame = _this.listSfBGSpin[0];
                      _this.animKong.node.active = true;
                      _this.animKong.playAnimation("Idle_1", -1);
                      _this.sprGameName.active = true;
                      resolve(null);
                    }).start();
                    return [ 4, Windown_1.Windown.KingKong.getMakeDelay(3).prosime ];

                   case 1:
                    _a.sent();
                    return [ 3, 3 ];

                   case 2:
                    e_4 = _a.sent();
                    Util_1.Util.ThrowErrProsime(e_4);
                    return [ 3, 3 ];

                   case 3:
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      KingKongView.prototype.showBigWin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, rejects) {
              return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      KingKongView.prototype.onClickBackToLobby = function() {
        Windown_1.Windown.KingKong.audio.playClick();
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      KingKongView.prototype.onShowPopupHistory = function() {
        this.popupLichSu.show();
      };
      KingKongView.instance = null;
      __decorate([ property(cc.Node) ], KingKongView.prototype, "bkgSprite", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "collumContainer", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "sprGameName", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "maskFS", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "nodeFSLeft", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "nodeBottomNormal", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "nodePopupClickToFS", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "maskEndFS", void 0);
      __decorate([ property(cc.Node) ], KingKongView.prototype, "maskGetFS", void 0);
      __decorate([ property(cc.Sprite) ], KingKongView.prototype, "baseBgSpin", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], KingKongView.prototype, "listSfBgGetFS", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], KingKongView.prototype, "listSfBGSpin", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnAuto", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnStopAuto", void 0);
      __decorate([ property(cc.Button) ], KingKongView.prototype, "btnChangeBet", void 0);
      __decorate([ property(cc.Label) ], KingKongView.prototype, "lbAutoSpinRemain", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbBetValue", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbBalance", void 0);
      __decorate([ property(cc.Label) ], KingKongView.prototype, "lbTotalWin", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbFSGet", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbFSRemain", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbFSTotal", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], KingKongView.prototype, "lbFSTotalWin", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], KingKongView.prototype, "animKong", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], KingKongView.prototype, "animBaseBGVolcano", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], KingKongView.prototype, "animBaseBGFront", void 0);
      __decorate([ property(KingKongAssets_1.default) ], KingKongView.prototype, "AssetsKingKong", void 0);
      __decorate([ property(KingKongInfoBar_1.default) ], KingKongView.prototype, "infoBar", void 0);
      __decorate([ property(KingKongSetting_1.default) ], KingKongView.prototype, "settingView", void 0);
      __decorate([ property(KingKongSettingAuto_1.default) ], KingKongView.prototype, "settingAuto", void 0);
      __decorate([ property(KingKongEffect_1.default) ], KingKongView.prototype, "effectController", void 0);
      __decorate([ property(KingKongHistory_1.default) ], KingKongView.prototype, "popupLichSu", void 0);
      __decorate([ property(KingKongAudio_1.default) ], KingKongView.prototype, "audio", void 0);
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
    "./KingKongAudio": "KingKongAudio",
    "./KingKongCollum": "KingKongCollum",
    "./KingKongEffect": "KingKongEffect",
    "./KingKongHistory": "KingKongHistory",
    "./KingKongInfoBar": "KingKongInfoBar",
    "./KingKongSetting": "KingKongSetting",
    "./KingKongSettingAuto": "KingKongSettingAuto"
  } ]
}, {}, [ "KingKongAssets", "KingKongAudio", "KingKongCollum", "KingKongEffect", "KingKongHistory", "KingKongHistoryDetail", "KingKongInfoBar", "KingKongItemHistory", "KingKongSetting", "KingKongSettingAuto", "KingKongSymbol", "KingKongView" ]);