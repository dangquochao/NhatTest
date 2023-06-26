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
  AudioTL: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12f4f+39W1Knbt7MwWTXeMS", "AudioTL");
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
    var AudioTL = function(_super) {
      __extends(AudioTL, _super);
      function AudioTL() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.anBai = null;
        _this.chiabaiLoop = null;
        _this.click = null;
        _this.danhBaiVaBocBai = null;
        _this.denTurn = null;
        _this.dichuyenLabai = null;
        _this.Lose = null;
        _this.Win = null;
        _this.startGame = null;
        _this.alert = null;
        _this.fold = null;
        _this.nemxu = null;
        _this.bom = null;
        _this.kiss = null;
        _this.rose = null;
        _this.beer = null;
        _this.water = null;
        return _this;
      }
      AudioTL.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      AudioTL.prototype.playMusic = function() {
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.6);
        }
      };
      AudioTL.prototype.playIndexTakeLine = function() {};
      AudioTL.prototype.playSmalWin = function() {};
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "anBai", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "chiabaiLoop", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "danhBaiVaBocBai", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "denTurn", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "dichuyenLabai", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "Lose", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "Win", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "startGame", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "alert", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "fold", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "nemxu", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "bom", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "kiss", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "rose", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "beer", void 0);
      __decorate([ property(cc.AudioClip) ], AudioTL.prototype, "water", void 0);
      AudioTL = __decorate([ ccclass ], AudioTL);
      return AudioTL;
    }(AudioManager_1.default);
    exports.default = AudioTL;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
  } ],
  CardTL: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f29aoxhuNJOJY4vWRouOv0", "CardTL");
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
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CardTL = function(_super) {
      __extends(CardTL, _super);
      function CardTL() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.imgBackground = null;
        _this.imgValue = null;
        _this.imgSuitSmall = null;
        _this.imgSuitLarge = null;
        _this.borderCard = null;
        _this.bg_cardSmall = null;
        _this.bkgMask = null;
        _this.listFrameCard = null;
        _this.card_border_blue = null;
        _this.code = 0;
        _this.N = 0;
        _this.S = 0;
        _this.nameCard = "";
        _this.isSelect = false;
        _this.isTouch = true;
        return _this;
      }
      CardTL.prototype.start = function() {};
      CardTL.prototype.setTextureWithCode = function(cod, isSmall, isShan, isShowCorner) {
        void 0 === isSmall && (isSmall = false);
        void 0 === isShan && (isShan = false);
        void 0 === isShowCorner && (isShowCorner = false);
        this.code = cod;
        if (this.code <= 0 || this.code > 52) {
          this.imgValue.node.active = false;
          this.imgSuitSmall.node.active = false;
          this.imgSuitLarge.node.active = false;
          this.bg_cardSmall.active = false;
          this.imgBackground.spriteFrame = this.listFrameCard.getSpriteFrame("card_back_red1");
        } else {
          this.imgValue.node.active = true;
          this.imgSuitSmall.node.active = true;
          this.imgSuitLarge.node.active = true;
          this.decodeCard(this.code);
          this.imgBackground.spriteFrame = this.listFrameCard.getSpriteFrame("card_bg");
          var strSuit = this.getSuitInVN();
          this.imgValue.spriteFrame = this.listFrameCard.getSpriteFrame(cc.js.formatStr("card_%d", this.getValue()));
          this.imgSuitSmall.spriteFrame = this.listFrameCard.getSpriteFrame(cc.js.formatStr("card_%s_small", strSuit));
          this.N >= 11 && this.N <= 13 ? this.imgSuitLarge.spriteFrame = this.listFrameCard.getSpriteFrame(cc.js.formatStr("card_%d_%s", this.getValue(), strSuit)) : this.imgSuitLarge.spriteFrame = this.listFrameCard.getSpriteFrame(cc.js.formatStr("card_%s", strSuit));
          this.imgValue.node.color = "tep" === strSuit || "bich" === strSuit ? cc.Color.BLACK : cc.Color.RED;
          this.imgValue.type = cc.Sprite.Type.SIMPLE;
          this.imgValue.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          this.imgSuitSmall.type = cc.Sprite.Type.SIMPLE;
          this.imgSuitSmall.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          this.imgSuitLarge.type = cc.Sprite.Type.SIMPLE;
          this.imgSuitLarge.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          this.imgValue.node.setContentSize(32, 50);
          this.imgSuitSmall.node.setContentSize(38, 34);
          this.imgSuitLarge.node.setContentSize(90, 100);
          this.imgValue.node.setScale(1);
          this.imgSuitSmall.node.setScale(1);
          this.imgSuitLarge.node.setScale(1);
        }
        var cardValue = this.bg_cardSmall.children[0].getComponent(cc.Sprite);
        var cardSuit = this.bg_cardSmall.children[1].getComponent(cc.Sprite);
        cardValue.spriteFrame = this.imgValue.spriteFrame;
        cardValue.node.color = this.imgValue.node.color;
        cardSuit.spriteFrame = this.imgSuitSmall.spriteFrame;
        cardValue.type = cc.Sprite.Type.SIMPLE;
        cardValue.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        cardSuit.type = cc.Sprite.Type.SIMPLE;
        cardSuit.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        cardValue.node.setContentSize(48.6, 64.3);
        cardSuit.node.setContentSize(73, 79.4);
        cardSuit.node.setPosition(10.5, -83.2);
      };
      CardTL.prototype.encodeCard = function() {
        return 13 * (this.S - 1) + this.N - 1;
      };
      CardTL.prototype.decodeCard = function(cod) {
        try {
          this.code = cod;
          this.S = Math.floor((cod - 1) / 13) + 1;
          this.N = Math.floor((cod - 1) % 13) + 2;
          14 === this.N && Windown_1.Windown.GameView.gameType == GAME_TYPE_1.default.Binh && (this.N = 1);
          this.nameCard = this.N + this.getSuitInVN();
        } catch (e) {
          console.log(e);
        }
      };
      CardTL.prototype.getSuitInVN = function() {
        switch (this.S) {
         case 1:
          return "bich";

         case 2:
          return "tep";

         case 3:
          return "ro";

         case 4:
          return "co";

         default:
          return "joker";
        }
      };
      CardTL.prototype.getValue = function() {
        if (this.N > 13) return this.N - 13;
        return this.N;
      };
      CardTL.prototype.resetCard = function() {
        this.setBorder(false);
      };
      CardTL.prototype.setBorder = function(isBorder) {
        this.borderCard.node.active = isBorder;
      };
      CardTL.prototype.moveCardNoBug = function(time, pos) {
        this.node.runAction(cc.moveTo(time, pos).easing(cc.easeCubicActionOut()));
      };
      CardTL.prototype.turnBorderBlue = function(isOn, scalex, scaley) {
        void 0 === scalex && (scalex = 1);
        void 0 === scaley && (scaley = 1);
        this.card_border_blue.node.active = isOn;
        this.card_border_blue.node.setScale(scalex, scaley);
      };
      __decorate([ property(cc.Sprite) ], CardTL.prototype, "imgBackground", void 0);
      __decorate([ property(cc.Sprite) ], CardTL.prototype, "imgValue", void 0);
      __decorate([ property(cc.Sprite) ], CardTL.prototype, "imgSuitSmall", void 0);
      __decorate([ property(cc.Sprite) ], CardTL.prototype, "imgSuitLarge", void 0);
      __decorate([ property(cc.Sprite) ], CardTL.prototype, "borderCard", void 0);
      __decorate([ property(cc.Node) ], CardTL.prototype, "bg_cardSmall", void 0);
      __decorate([ property(cc.Node) ], CardTL.prototype, "bkgMask", void 0);
      __decorate([ property(cc.SpriteAtlas) ], CardTL.prototype, "listFrameCard", void 0);
      __decorate([ property(cc.Sprite) ], CardTL.prototype, "card_border_blue", void 0);
      CardTL = __decorate([ ccclass ], CardTL);
      return CardTL;
    }(cc.Component);
    exports.default = CardTL;
    cc._RF.pop();
  }, {
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  LogicManagerTL: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c865axVbS9EGJZ7VqasZHET", "LogicManagerTL");
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
    var LogicManager = function(_super) {
      __extends(LogicManager, _super);
      function LogicManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LogicManager_1 = LogicManager;
      LogicManager.checkDoiTL = function(listIn) {
        if (!LogicManager_1.checkDoi(listIn) || 2 !== listIn.length) return false;
        if (listIn.length > 0 && 2 == listIn[0].N) return false;
        return true;
      };
      LogicManager.checkXamTL = function(listIn) {
        if (!LogicManager_1.checkXam(listIn) || 3 !== listIn.length) return false;
        return true;
      };
      LogicManager.checkSanhTL = function(listIn) {
        var list = listIn.slice();
        if (list.length < 3) return false;
        list.sort(function(x, y) {
          return x.N - y.N;
        });
        for (var i = 0; i < list.length - 1; i++) if (list[i].N + 1 !== list[i + 1].N) return false;
        return true;
      };
      LogicManager.ckeckThungPhaSanhTL = function(listIn) {
        var list = listIn.slice();
        if (!this.checkSanhTL(list)) return false;
        for (var i = 0; i < list.length - 1; i++) if (list[i].S !== list[i + 1].S) return false;
        return true;
      };
      LogicManager.check2DoiThongTL = function(listIn) {
        return false;
      };
      LogicManager.check3DoiThongTL = function(listIn) {
        var list = listIn.slice();
        if (6 !== list.length) return false;
        list.sort(function(x, y) {
          return x.N - y.N;
        });
        if (list[0].N != list[1].N) return false;
        for (var i = 0; i < list.length - 2; i++) if (list[i].N + 1 !== list[i + 2].N || 2 == list[i].N) return false;
        return true;
      };
      LogicManager.check4DoiThongTL = function(listIn) {
        var list = listIn.slice();
        if (8 !== list.length) return false;
        list.sort(function(x, y) {
          return x.N - y.N;
        });
        if (list[0].N != list[1].N) return false;
        for (var i = 0; i < list.length - 2; i++) if (list[i].N + 1 !== list[i + 2].N || 2 == list[i].N) return false;
        return true;
      };
      LogicManager.checkHaiTL = function(listIn) {
        var list = listIn.slice();
        if (1 != list.length) return false;
        if (2 == list[0].N) return true;
        return false;
      };
      LogicManager.checkDoiHaiTL = function(listIn) {
        var list = listIn.slice();
        if (2 != list.length) return false;
        for (var i = 0; i < list.length; i++) if (2 != list[i].N) return false;
        return true;
      };
      LogicManager.checkTuQuy = function(listIn) {
        var list = listIn.slice();
        list.sort(function(x, y) {
          return x.N - y.N;
        });
        if (list.length < 4) return false;
        for (var i = 0; i < list.length - 1; i++) {
          var count = 0;
          for (var j = i + 1; j < list.length; j++) list[j].N === list[i].N && count++;
          if (3 === count) return true;
        }
        return false;
      };
      LogicManager.checkDoi = function(listIn) {
        var list = listIn.slice();
        list.sort(function(x, y) {
          return x.N - y.N;
        });
        if (list.length < 2) return false;
        for (var i = 0; i < list.length - 1; i++) if (list[i].N === list[i + 1].N) return true;
        return false;
      };
      LogicManager.checkXam = function(listIn) {
        var list = listIn.slice();
        list.sort(function(x, y) {
          return x.N - y.N;
        });
        if (list.length < 3) return false;
        for (var i = 0; i < list.length - 2; i++) if (list[i].N === list[i + 1].N && list[i + 1].N === list[i + 2].N) return true;
        return false;
      };
      LogicManager.checkSetOfTwos = function(listIn) {
        var list = listIn.slice();
        if (list.length > 3 || list.length < 2) return false;
        for (var i = 0; i < list.length; i++) if (2 !== list[i].N) return false;
        return true;
      };
      var LogicManager_1;
      LogicManager = LogicManager_1 = __decorate([ ccclass ], LogicManager);
      return LogicManager;
    }(cc.Component);
    exports.default = LogicManager;
    cc._RF.pop();
  }, {} ],
  PlayerViewTL: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07d1c0ZZwNMsYgKK3OZf9na", "PlayerViewTL");
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
    var PathResource_1 = require("../../../Scritps/DefineTs/PathResource");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerViewTL = function(_super) {
      __extends(PlayerViewTL, _super);
      function PlayerViewTL() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.lbAg = null;
        _this.imgAvatar = null;
        _this.imgBack = null;
        _this.imgTime = null;
        _this.timeTurn = 0;
        _this.timeCurrentTurn = 0;
        _this.aniLose = null;
        _this.aniWin = null;
        _this.aniPhao = null;
        _this.bkgThanhBar = null;
        _this.listAnimItems = [];
        _this.listSprItems = [];
        _this.fontLb = [];
        _this._isTurn = false;
        _this.idUser = 0;
        _this._indexDynamic = 0;
        _this.id = 0;
        _this.vectorCard = [];
        _this.displayName = "";
        _this.numberCard = 0;
        _this.vectorCardD = [];
        _this.ag = 0;
        _this.point = 0;
        _this.typeWin = -1;
        _this.currentLevel = 0;
        return _this;
      }
      PlayerViewTL.prototype.start = function() {};
      PlayerViewTL.prototype.cleanPlayerView = function() {
        this.vectorCard = [];
      };
      PlayerViewTL.prototype.update = function(dt) {
        if (this._isTurn) {
          this.timeCurrentTurn += dt;
          if (this.timeCurrentTurn <= this.timeTurn) {
            this.imgTime.fillRange = (this.timeTurn - this.timeCurrentTurn) / this.timeTurn;
            this.imgTime.fillRange <= .25 ? this.imgTime.node.color = cc.Color.RED : this.imgTime.fillRange <= .5 ? this.imgTime.node.color = cc.Color.ORANGE : this.imgTime.node.color = cc.Color.WHITE;
            var angleNow = -this.timeCurrentTurn * (360 / this.timeTurn / 180 * Math.PI);
            var x = 65 * Math.cos(angleNow);
            var y = 65 * Math.sin(angleNow);
            this.aniPhao.node.setPosition(cc.v2(x, y));
          } else {
            this.imgTime.node.active = false;
            this._isTurn = false;
          }
        }
      };
      PlayerViewTL.prototype.effLbName = function() {
        this.lbName.node.stopAllActions();
        this.lbName.node.setPosition(cc.v2(0, 0));
        cc.log("WIDTH LB NAME==" + this.lbName.node.width);
        if (2 * this.lbName.node.width > this.lbName.node.parent.width - 10) {
          var offset = (this.lbName.node.width - this.lbName.node.parent.width) / 2;
          var timer = offset / 30;
          var acMove1 = cc.moveTo(timer, offset / 4, 0);
          var acMove2 = cc.moveTo(timer, -offset / 4, 0);
          cc.log("offset==" + offset);
          timer < 1 && (timer = 1);
          if (offset < 3) return;
          this.lbName.node.anchorX = .5;
          this.lbName.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(1.5), acMove1, cc.delayTime(1.5), acMove2)));
        }
      };
      PlayerViewTL.prototype.setPosThanhBarThisPlayer = function() {
        this.bkgThanhBar.setPosition(cc.v2(0, 0));
        this.bkgThanhBar.getComponent(cc.Sprite).enabled = true;
        this.lbAg.fontSize = 30;
        this.lbAg.node.parent.setPosition(cc.v2(-190, -25));
        this.lbName.fontSize = 30;
        this.lbName.node.parent.setPosition(cc.v2(-140, 20));
      };
      PlayerViewTL.prototype.setName = function(strName) {
        var _this = this;
        null !== this.lbName && (this.lbName.string = strName);
        cc.log("Chay vao ham set name:" + strName);
        this.scheduleOnce(function() {
          if (null == _this.node || "undefined" == typeof _this.node) return;
          _this.effLbName();
        }, .5);
      };
      PlayerViewTL.prototype.setAg = function(ag) {
        if (null !== this.lbAg) {
          this.lbAg.string = this.formatMoney(ag);
          this.lbAg.node.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1)));
        }
      };
      PlayerViewTL.prototype.setAvatar = function(sprAvatar) {
        this.imgAvatar.spriteFrame = sprAvatar;
      };
      PlayerViewTL.prototype.setTurn = function(isTurn, timeTurn, isEffect, message) {
        void 0 === isEffect && (isEffect = false);
        void 0 === message && (message = null);
        if (!this.imgTime || !this.imgTime.node) return;
        this.imgTime.node.active = isTurn;
        this._isTurn = isTurn;
        if (isTurn) {
          this.timeCurrentTurn = 0;
          this.timeTurn = timeTurn;
          this.imgTime.fillRange = 1;
        }
        null != message;
      };
      PlayerViewTL.prototype.onEnable = function() {
        this.aniWin.node.active = false;
        this.aniLose.node.active = false;
      };
      PlayerViewTL.prototype.onDisable = function() {
        this.setTurn(false, 0, false, null);
        this.bkgThanhBar.setPosition(cc.v2(0, -70));
        this.imgBack.node.active = false;
      };
      PlayerViewTL.prototype.showEffectWinLose = function(isWin) {
        var _this = this;
        cc.log("Chay vao set EffectWinLose");
        if (1 === isWin) {
          this.aniWin.node.active = true;
          this.aniWin.setAnimation(0, "win", true);
          var funcEnd = function() {
            _this.aniWin.node.active = false;
          };
          var actionNode = this.aniWin.node;
        } else {
          this.aniLose.node.active = true;
          this.aniLose.setAnimation(0, "animation", true);
          var funcEnd = function() {
            _this.aniLose.node.active = false;
          };
          var actionNode = this.aniLose.node;
        }
        actionNode.stopAllActions();
        actionNode.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(funcEnd)));
      };
      PlayerViewTL.prototype.isTurn = function() {
        return this._isTurn;
      };
      PlayerViewTL.prototype.updateAg = function(ag) {
        this.lbAg.string = "" + this.formatMoney(ag);
        this.ag = ag;
      };
      PlayerViewTL.prototype.updatePlayerView = function(data) {
        var _this = this;
        console.log("updatePlayerView:", data);
        this.lbName.string = data.nickname;
        this.scheduleOnce(function() {
          if (null == _this.node || "undefined" == typeof _this.node) return;
          _this.effLbName();
        }, .5);
        this.lbAg.string = "" + this.formatMoney(data.ag);
      };
      PlayerViewTL.prototype.effectFlyMoney = function(money, fontSize, moveTo, posX, posY) {
        void 0 === fontSize && (fontSize = 20);
        void 0 === moveTo && (moveTo = 50);
        void 0 === posX && (posX = 0);
        void 0 === posY && (posY = 0);
        cc.log("money la ", money);
        if ("number" !== typeof money || 0 == money) return;
        var prefix = "";
        var font = null;
        if (money >= 0) {
          prefix = "+";
          font = this.fontLb[0];
        } else {
          prefix = "-";
          font = this.fontLb[1];
        }
        if (null == this.node) return;
        var nodeText = new cc.Node("TextFly");
        var labelText = nodeText.addComponent(cc.Label);
        labelText.string = prefix + this.formatNumber(Math.abs(money));
        labelText.fontSize = fontSize;
        labelText.font = font;
        labelText.spacingX = -5;
        this.node.addChild(nodeText, 270);
        var moveUp = cc.moveBy(4, cc.v2(0, moveTo));
        var del = cc.delayTime(moveUp.getDuration() - .5);
        var fade = cc.fadeOut(moveUp.getDuration() - del.getDuration());
        var eff = cc.spawn(moveUp, cc.sequence(del, fade));
        var act = cc.sequence(eff, cc.callFunc(function() {
          null !== labelText.node && labelText.node.destroy();
        }));
        labelText.node.runAction(act);
      };
      PlayerViewTL.prototype.formatMoney = function(money) {
        var isNeg = money < 0;
        var format = "";
        var mo = Math.abs(money);
        money = Math.abs(money);
        if (mo >= 1e9) {
          mo /= 1e9;
          format = "B";
        } else {
          if (!(mo >= 1e6)) return (true == isNeg ? "-" : "") + this.formatNumber(money);
          mo /= 1e6;
          format = "M";
        }
        var str = money.toString() + "0";
        var str1 = mo.toString() + "a";
        var idex = 0;
        for (var i = 0; i < str.length; i++) if (str[i] !== str1[i]) {
          idex = i;
          break;
        }
        return (true == isNeg ? "-" : "") + Math.floor(mo) + ("0" === str.toString()[idex] && "0" === str.toString()[idex + 1] ? "" : ",") + ("0" === str.toString()[idex] && "0" === str.toString()[idex + 1] ? "" : str.toString()[idex]) + ("0" === str.toString()[idex + 1] ? "" : str.toString()[idex + 1]) + format.toUpperCase();
      };
      PlayerViewTL.prototype.formatNumber = function(number, width) {
        void 0 === width && (width = 3);
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      };
      PlayerViewTL.prototype.onClickPlayer = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prefab, nodePlayerInfo;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.InfoPlayerView) ];

             case 1:
              prefab = _a.sent();
              nodePlayerInfo = cc.instantiate(prefab);
              Windown_1.Windown.GameView.node.addChild(nodePlayerInfo, 999);
              nodePlayerInfo.getComponent("InfoPlayerView").setInfo(this);
              return [ 2 ];
            }
          });
        });
      };
      PlayerViewTL.prototype.showBackExit = function() {
        this.imgBack.node.active = !this.imgBack.node.active;
      };
      PlayerViewTL.prototype.setBgAvatar = function() {
        var nodeParentKhungVip = this.node.getChildByName("ParentKhungVip");
      };
      PlayerViewTL.prototype.clearState = function() {
        this.numberCard = 0;
      };
      PlayerViewTL.prototype.clearVectorCardD = function() {
        var poolCard = Windown_1.Windown.GameView.cardPool;
        for (var i = 0; i < this.vectorCardD.length; i++) poolCard.put(this.vectorCardD[i].node);
        this.vectorCardD = [];
      };
      PlayerViewTL.prototype.clearAllCard = function() {
        for (var i = 0; i < this.vectorCard.length; i++) this.vectorCard[i].node.destroy();
        for (var i = 0; i < this.vectorCardD.length; i++) this.vectorCardD[i].node.destroy();
        this.vectorCard = [];
        this.vectorCardD = [];
      };
      __decorate([ property(cc.Label) ], PlayerViewTL.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], PlayerViewTL.prototype, "lbAg", void 0);
      __decorate([ property(cc.Sprite) ], PlayerViewTL.prototype, "imgAvatar", void 0);
      __decorate([ property(cc.Sprite) ], PlayerViewTL.prototype, "imgBack", void 0);
      __decorate([ property(cc.Sprite) ], PlayerViewTL.prototype, "imgTime", void 0);
      __decorate([ property(cc.Integer) ], PlayerViewTL.prototype, "timeTurn", void 0);
      __decorate([ property(cc.Integer) ], PlayerViewTL.prototype, "timeCurrentTurn", void 0);
      __decorate([ property(sp.Skeleton) ], PlayerViewTL.prototype, "aniLose", void 0);
      __decorate([ property(sp.Skeleton) ], PlayerViewTL.prototype, "aniWin", void 0);
      __decorate([ property(sp.Skeleton) ], PlayerViewTL.prototype, "aniPhao", void 0);
      __decorate([ property(cc.Node) ], PlayerViewTL.prototype, "bkgThanhBar", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], PlayerViewTL.prototype, "listAnimItems", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PlayerViewTL.prototype, "listSprItems", void 0);
      __decorate([ property([ cc.Font ]) ], PlayerViewTL.prototype, "fontLb", void 0);
      PlayerViewTL = __decorate([ ccclass ], PlayerViewTL);
      return PlayerViewTL;
    }(cc.Component);
    exports.default = PlayerViewTL;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/PathResource": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  TienLenGameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3c4fzexQdMz6F3cU0qoZTZ", "TienLenGameView");
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
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../../../Scritps/DefineTs/EVENT_MANAGER");
    var PathResource_1 = require("../../../Scritps/DefineTs/PathResource");
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var MakeDelay_1 = require("../../../Scritps/Other/MakeDelay");
    var Windown_1 = require("../../../Scritps/Windown");
    var AudioTL_1 = require("./AudioTL");
    var LogicManagerTL_1 = require("./LogicManagerTL");
    var PlayerViewTL_1 = require("./PlayerViewTL");
    var STATE_GAME = {
      WAITING: 0,
      PLAYING: 1,
      VIEWING: 2
    };
    var GAME_ZORDER = {
      Z_PLAYERVIEW: 40,
      Z_CARD: 50,
      Z_BET: 100,
      Z_CHAT: 150,
      Z_EMO: 200,
      Z_BUTTON: 250,
      Z_MENU_VIEW: 300
    };
    var TYPE_CARD_TIEN_LEN = {
      TL_NONE: -1,
      TL_DOI: 0,
      TL_XAM: 1,
      TL_SANH: 2,
      TL_TPS: 3,
      TL_HAI: 4,
      TL_DOIHAI: 5,
      TL_BADOITHONG: 6,
      TL_BONDOITHONG: 7,
      TL_TUQUY: 8,
      TL_HAIDOITHONG: 9
    };
    var SCALE_CARD = .85;
    var SCALE_CARD_OTHER = .5;
    var SCALE_CARD_DANH = .5;
    var DIS_CARD = .55;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TienLenGameView = function(_super) {
      __extends(TienLenGameView, _super);
      function TienLenGameView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbInfo = null;
        _this.listPosView = [];
        _this.listPosCard = [];
        _this.listPosCardDanh = [];
        _this.btnMenu = null;
        _this.btnQuickChat = null;
        _this.btnPass = null;
        _this.btnDiscard = null;
        _this.lbDiscard = null;
        _this.btnSort = null;
        _this.lbTimeStart = null;
        _this.lbNumberCard = [];
        _this.listSpritePass = [];
        _this.listBgScore = [];
        _this.listLbScore = [];
        _this.bgHint = null;
        _this.lbHint = null;
        _this.timerControl = null;
        _this.vtChipFinish = [];
        _this.vtChipDenLang = [];
        _this.listDataPlayerResult = [];
        _this.aniCardSpecial = null;
        _this.aniWinSpecial = null;
        _this.aniStartGame = null;
        _this.aniFinish = null;
        _this.aniChayBai = [];
        _this.lbNameWin = null;
        _this.avtSpecial = null;
        _this.icon_chips = null;
        _this.prefabsPlayerView = null;
        _this.cardPrefab = null;
        _this.audio = null;
        _this.thisPlayer = null;
        _this.currenPlayer = null;
        _this.players = [];
        _this.cardSelect = null;
        _this.listCardSuggest = [];
        _this.numCardSelect = 0;
        _this.posDefaultCard = cc.v2(0, 0);
        _this.posTouchBegan = cc.v2(0, 0);
        _this.zOrderCard = 0;
        _this.sizeCardW = 0;
        _this.zIndexCardD = 0;
        _this.touched = false;
        _this.dangPhatBai = false;
        _this.turnIdCurrent = 0;
        _this.lastTurnId = 0;
        _this.timeToStart = 0;
        _this.timeTurn = 0;
        _this.typeSort = 0;
        _this.playerSpecail = null;
        _this.stateGame = 0;
        _this.cardPool = null;
        _this.isFinish = false;
        _this.gameType = -1;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.funEnd = null;
        _this.dataFinish = null;
        _this.sfsObjTest = null;
        _this.sfsObjTest2 = null;
        _this.makeDelay = null;
        _this.indexFunc = 0;
        _this.quickChat = null;
        _this.markCurrent = 0;
        _this.roomIdCurrent = 0;
        _this.passRoomCurrent = "";
        _this.isAllowClickDownAllCard = false;
        _this.cardSelectNumberOne = null;
        _this.resultSuggest = [];
        _this.listEvt = [];
        return _this;
      }
      TienLenGameView.prototype.onLoad = function() {
        this.node.setContentSize(cc.winSize);
        var cp = this.getComponent(cc.Sprite);
        cp && (cp.sizeMode = 0);
        cc.sys.localStorage.setItem("isBack", false);
        this.cardPool = new cc.NodePool("Card");
        var cardC = this.getCard();
        this.sizeCardW = cardC.node.getContentSize().width;
        this.initLoad();
        this.initInviteNode();
        Windown_1.Windown.TienLen = this;
        Windown_1.Windown.GameView = this;
        this.makeDelay = new MakeDelay_1.default(this);
        console.log("start");
        this.gameType = GAME_TYPE_1.default.TienLen;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, this.onLogin, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
      };
      TienLenGameView.prototype.onLogin = function() {
        this.sendJoinRoom(this.roomIdCurrent, this.passRoomCurrent);
        this.sendGetInfoRoomReconnect();
      };
      TienLenGameView.prototype.handleAutoExit = function(strData) {
        var data = JSON.parse(strData);
        if (data.status) {
          var player = this.getPlayerWithId(data.id);
          if (null == player || "undefined" == typeof player) return;
          if (data.id === Windown_1.Windown.User.userId) {
            cc.sys.localStorage.setItem("isBack", false);
            cc.director.loadScene("main");
            return;
          }
          this.removePlayer(data.id);
          this.setTimeStart(0);
          return;
        }
        if (-1 == data.type) {
          this.thisPlayer.showBackExit();
          Windown_1.Windown.Dialog.showLog("B\u1ea1n \u0111ang trong b\xe0n!");
          return;
        }
        this.thisPlayer.showBackExit();
        Windown_1.Windown.Dialog.showLog("Kh\xf4ng th\u1ec3 chuy\u1ec3n b\xe0n cho t\u1edbi khi v\xe1n ch\u01a1i k\u1ebft th\xfac!");
        return;
      };
      TienLenGameView.prototype.removePlayer = function(id, isInGame) {
        void 0 === isInGame && (isInGame = false);
        var player = this.getPlayerWithId(id);
        if (null !== player) {
          this.players.splice(this.players.indexOf(player), 1);
          player.node.destroy();
          player = null;
          isInGame || this.updatePositionPlayerView();
        }
      };
      TienLenGameView.prototype.getMakeDelay = function(time) {
        return this.makeDelay.getDelay(time);
      };
      TienLenGameView.prototype.onDestroy = function() {
        cc.systemEvent.removeAll(this);
        this.roomSFS = null;
        this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr);
        this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse);
        Windown_1.Windown.GameView = null;
      };
      TienLenGameView.prototype.sendJoinRoom = function(idRoom, pass) {
        Windown_1.Windown.UIManager.showLoading();
        cc.log("send join room");
        try {
          ConectManager_1.ConectManager.getIns().sendJoinRoom(idRoom, pass);
          this.roomIdCurrent = idRoom;
          this.passRoomCurrent = pass;
        } catch (e) {
          cc.error(e);
          this.onDisconnect();
        }
      };
      TienLenGameView.prototype.sendGetInfoRoom = function(mark) {
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("roomType", 0);
        sfsObj.putInt("gameType", GAME_TYPE_1.default.TienLen);
        sfsObj.putInt("mark", mark);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetIdJoinRoom, sfsObj);
        cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.GetIdJoinRoom, function(sfsObj) {
          var roomId = sfsObj.get("idRoom");
          cc.log("roomId getInfo " + roomId);
        }, this);
      };
      TienLenGameView.prototype.onDisconnect = function() {
        cc.log("disconnect");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.director.loadScene("main");
        Windown_1.Windown.LobbyView && (Windown_1.Windown.LobbyView.node.active = false);
      };
      TienLenGameView.prototype.userExitRoom = function(event) {
        var room = event.room;
        if ("TE" == room.groupId) {
          var user = event.user;
          cc.log("user exit room: ", user);
          if (user.isItMe) {
            cc.director.loadScene("main");
            return;
          }
        }
      };
      TienLenGameView.prototype.onCreateError = function(event) {
        cc.log("creat errr");
        Windown_1.Windown.UIManager.hideLoading();
        cc.director.loadScene("main");
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      TienLenGameView.prototype.onJoinRoom = function(event) {
        cc.log("onJoinRoom tienLen");
        var room = event.room;
        if ("TE" == room.groupId) {
          this.roomSFS = room;
          Windown_1.Windown.UIManager.hideLoading();
          Windown_1.Windown.UIManager.hideLoadingData();
          var roomVCf = room.getVariable("cf");
          var roomMoney = roomVCf.value;
          cc.log("no vao room nay: " + roomMoney);
        }
      };
      TienLenGameView.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      TienLenGameView.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        var strData = Windown_1.Windown.SFSObjToJson(SFSObject);
        switch (code) {
         case "infoRoomTL":
          cc.log("extResponse infoRoom:", strData);
          this.handleInfoRoom(strData);
          break;

         case "st":
          cc.log("extResponse st:", strData);
          this.handleStartTime(strData);
          break;

         case "lc":
          cc.log("extResponse Lc:", strData);
          this.handleLc(strData);
          break;

         case "uj":
          cc.log("extResponse Uj:", strData);
          this.handleUserJoin(strData);
          break;

         case "dc":
          cc.log("extResponse dc:", strData);
          this.handleDc(strData);
          break;

         case "pa":
          cc.log("extResponse pass:", strData);
          this.handlePass(strData);
          break;

         case "finish":
          cc.log("extResponse finish:", strData);
          this.handleFinish(strData);
          break;

         case "autoExit":
          cc.log("extResponse autoExit:", strData);
          this.handleAutoExit(strData);
          break;

         case "chat":
          cc.log("extResponse chat:", strData);
          this.handleChat(strData);
          break;

         case "chatI":
          cc.log("extResponse chat:", strData);
          this.handleChatI(strData);
        }
      };
      TienLenGameView.prototype.initInviteNode = function() {
        var _this = this;
        cc.loader.loadRes("inviteBtn", function(err, prefab) {
          if (err) cc.log(err); else {
            if (null == _this.node) return;
            for (var i = 1; i < _this.listPosView.length; i++) {
              if (null == _this.listPosView[i]) continue;
              var item = cc.instantiate(prefab).getComponent(cc.Button);
              item.node.setPosition(_this.listPosView[i]);
              _this.node.addChild(item.node, 1);
              var clickEventHandler = new cc.Component.EventHandler();
              clickEventHandler.target = _this.node;
              clickEventHandler.component = "TienLenGameView";
              clickEventHandler.handler = "onClickInvite";
              clickEventHandler.customEventData = "";
              item.clickEvents.push(clickEventHandler);
            }
          }
        });
      };
      TienLenGameView.prototype.initLoad = function() {
        var _this = this;
        var POS_CARD = this.listPosCard[0];
        var cardC = this.getCard();
        this.sizeCardW = cardC.node.getContentSize().width;
        this.isFinish = false;
        for (var i = 0; i < 4; i++) {
          this.lbNumberCard[i].node.zIndex = GAME_ZORDER.Z_CARD + 20;
          this.lbNumberCard[i].node.active = false;
          this.listBgScore[i].node.active = false;
          this.aniChayBai[i].node.active = false;
          this.aniChayBai[i].node.zIndex = GAME_ZORDER.Z_EMO;
        }
        this.btnSort.node.active = false;
        this.btnPass.node.active = false;
        this.btnDiscard.node.active = false;
        this.bgHint.node.active = false;
        this.aniCardSpecial.node.active = false;
        this.aniCardSpecial.animation = "eng";
        this.aniCardSpecial.timeScale = .5;
        this.aniCardSpecial.node.zIndex = GAME_ZORDER.Z_EMO;
        this.aniWinSpecial.node.active = true;
        this.aniWinSpecial.node.zIndex = GAME_ZORDER.Z_EMO;
        this.aniFinish.node.active = false;
        this.aniFinish.animation = "finish";
        this.aniFinish.node.zIndex = 1111;
        this.aniStartGame.node.active = false;
        this.aniStartGame.node.zIndex = 1111;
        this.typeSort = 2;
        this.isAllowClickDownAllCard = false;
        this.node.setContentSize(cc.winSize);
        this.node.on(cc.Node.EventType.TOUCH_START, function(touch) {
          cc.log("ON TOUCH BEGAN");
          if (_this.touched || _this.isFinish || _this.dangPhatBai || !_this.thisPlayer || _this.stateGame !== STATE_GAME.PLAYING) return;
          _this.posTouchBegan = cc.v2(touch.getLocation());
          for (var i = _this.thisPlayer.vectorCard.length - 1; i >= 0; i--) {
            var card = _this.thisPlayer.vectorCard[i];
            if (card.node.getBoundingBoxToWorld().contains(_this.posTouchBegan) && card.isTouch) {
              _this.cardSelect = card;
              _this.posDefaultCard = card.node.getPosition();
              _this.zOrderCard = card.node.zIndex;
              _this.touched = true;
              var pos = card.node.position;
              card.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.scaleTo(.2, 1.1).easing(cc.easeCubicActionOut()), cc.moveTo(.2, cc.v2(pos.x, -260)))));
              cc.log("=======click card th\u1ee9 %d ", _this.zOrderCard - GAME_ZORDER.Z_CARD);
              for (var j = i - 2; j <= i + 2; j++) if (j >= 0 && j < _this.thisPlayer.vectorCard.length && i != j) if (j == i - 1 || j == i + 1) {
                var subCard = _this.thisPlayer.vectorCard[j];
                subCard.node.runAction(cc.sequence(cc.delayTime(.2), cc.scaleTo(.2, 1.08).easing(cc.easeCubicActionOut())));
              } else {
                var subCard = _this.thisPlayer.vectorCard[j];
                subCard.node.runAction(cc.sequence(cc.delayTime(.2), cc.scaleTo(.2, 1).easing(cc.easeCubicActionOut())));
              }
              return;
            }
          }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(touch) {
          if (!_this.touched || _this.isFinish || !_this.thisPlayer || _this.stateGame !== STATE_GAME.PLAYING) {
            _this.cardSelect = null;
            return;
          }
          var indexC = _this.thisPlayer.vectorCard.length / 2;
          var touchPos = cc.v2(touch.getLocation());
          var indexTemp = 0;
          for (var i = 0; i < _this.thisPlayer.vectorCard.length; i++) if (_this.thisPlayer.vectorCard[i] === _this.cardSelect) {
            indexTemp = i;
            break;
          }
          var disCard = _this.sizeCardW * SCALE_CARD * DIS_CARD;
          if (_this.thisPlayer.vectorCard.length % 2 == 0) var posXMin = POS_CARD.x - disCard * (indexC + 1); else var posXMin = POS_CARD.x - disCard * indexC;
          var posXMax = POS_CARD.x + disCard * indexC;
          var posX = _this.posDefaultCard.x + touchPos.x - _this.posTouchBegan.x;
          var posY = POS_CARD.y;
          posX > posXMax && (posX = posXMax);
          posX < posXMin && (posX = posXMin);
          _this.cardSelect.node.x = posX;
          if (_this.posTouchBegan.sub(touchPos).mag() >= .25 * _this.sizeCardW) {
            var index1Temp = indexTemp + 1;
            if (index1Temp < _this.thisPlayer.vectorCard.length) {
              var cardTemp = _this.thisPlayer.vectorCard[index1Temp];
              if (cardTemp.node.position.x < posX) {
                _this.cardSelect.node.zIndex = cardTemp.node.zIndex;
                var posNew = cardTemp.node.position.x - disCard;
                cardTemp.node.runAction(cc.moveTo(.2, cc.v2(posNew, posY)).easing(cc.easeCubicActionOut()));
                cardTemp.node.zIndex = _this.cardSelect.node.zIndex - 1;
                var tt = _this.thisPlayer.vectorCard[indexTemp];
                _this.thisPlayer.vectorCard[indexTemp] = _this.thisPlayer.vectorCard[index1Temp];
                _this.thisPlayer.vectorCard[index1Temp] = tt;
                indexTemp++;
                _this.macBookCard(indexTemp);
              }
            }
            var index2Temp = indexTemp - 1;
            if (index2Temp >= 0) {
              var cardTemp = _this.thisPlayer.vectorCard[index2Temp];
              if (cardTemp.node.position.x > posX) {
                _this.cardSelect.node.zIndex = cardTemp.node.zIndex;
                var posNew_1 = cardTemp.node.getPosition().x + disCard;
                cardTemp.node.runAction(cc.moveTo(.2, cc.v2(posNew_1, posY)).easing(cc.easeCubicActionOut()));
                cardTemp.node.zIndex = _this.cardSelect.node.zIndex + 1;
                var tt = _this.thisPlayer.vectorCard[indexTemp];
                _this.thisPlayer.vectorCard[indexTemp] = _this.thisPlayer.vectorCard[index2Temp];
                _this.thisPlayer.vectorCard[index2Temp] = tt;
                indexTemp--;
                _this.macBookCard(indexTemp);
              }
            }
            for (var j = 0; j < _this.thisPlayer.vectorCard.length; j++) var tempCard = _this.thisPlayer.vectorCard[j];
            var scale = 1;
          }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(touch) {
          cc.log("ON TOUCH ENDED");
          if (!_this.touched || _this.isFinish || !_this.thisPlayer || _this.stateGame !== STATE_GAME.PLAYING) {
            _this.cardSelect = null;
            return;
          }
          _this.touched = false;
          var touchPos = cc.v2(touch.getLocation());
          if (_this.posTouchBegan.sub(touchPos).mag() <= .2 * _this.sizeCardW) {
            0 === _this.numCardSelect && (_this.cardSelectNumberOne = _this.cardSelect);
            if (0 === _this.numCardSelect && 0 !== _this.lastTurnId) {
              _this.suggestOnTouch(_this.cardSelect, _this.lastTurnId);
              for (var i = 0; i < _this.listCardSuggest.length; i++) for (var j = 0; j < _this.thisPlayer.vectorCard.length; j++) {
                var card = _this.thisPlayer.vectorCard[j];
                if (_this.listCardSuggest[i] === card) {
                  var posX = card.node.position.x;
                  card.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                  card.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y + 30)).easing(cc.easeCubicActionOut()));
                  card.isSelect = true;
                  _this.numCardSelect++;
                  _this.numCardSelect > _this.thisPlayer.vectorCard.length && (_this.numCardSelect = _this.thisPlayer.vectorCard.length);
                }
              }
            } else if (1 === _this.numCardSelect) {
              console.error("Cam la thu 2");
              _this.resultSuggest = [];
              var posX = _this.posDefaultCard.x;
              if (_this.cardSelect.isSelect) {
                _this.cardSelect.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                _this.cardSelect.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y)).easing(cc.easeCubicActionOut()));
                _this.cardSelect.isSelect = false;
                _this.numCardSelect--;
                _this.numCardSelect <= 0 && (_this.numCardSelect = 0);
              } else {
                var list = _this.thisPlayer.vectorCard.slice();
                var allResult_1 = [];
                var listSuggestStraight = _this.findStraightCard(list);
                listSuggestStraight.forEach(function(element) {
                  return allResult_1.push(element);
                });
                var listSuggestTuQuy = _this.findTuQuy(list);
                listSuggestTuQuy.forEach(function(element) {
                  allResult_1.push(element);
                });
                var listSuggestSuggestFourPair = _this.findFourPairs(list);
                listSuggestSuggestFourPair.forEach(function(element) {
                  allResult_1.push(element);
                });
                var listSuggestThreePair = _this.findThreePairs(list);
                listSuggestThreePair.forEach(function(element) {
                  allResult_1.push(element);
                });
                var listSuggestThreeCards = _this.findThreeCards(list);
                listSuggestThreeCards.forEach(function(element) {
                  allResult_1.push(element);
                });
                var listSuggestTwoPair = _this.findTwoPairs(list);
                listSuggestTwoPair.forEach(function(element) {
                  allResult_1.push(element);
                });
                console.error("allResult===" + allResult_1.length);
                for (var i = 0; i < _this.thisPlayer.vectorCard.length; i++) {
                  var card = _this.thisPlayer.vectorCard[i];
                  if (card !== _this.cardSelect && card.isSelect) {
                    _this.cardSelectNumberOne = card;
                    break;
                  }
                }
                _this.resultSuggest = _this.findContainsTwoCardSelected(allResult_1, _this.cardSelectNumberOne, _this.cardSelect);
                console.error("Boc2la: ", _this.resultSuggest);
                for (var i = 0; i < _this.resultSuggest.length; i++) for (var j = 0; j < _this.thisPlayer.vectorCard.length; j++) {
                  var card = _this.thisPlayer.vectorCard[j];
                  if (_this.resultSuggest[i] === card) {
                    var posX_1 = card.node.position.x;
                    card.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                    card.node.runAction(cc.moveTo(.2, cc.v2(posX_1, POS_CARD.y + 30)).easing(cc.easeCubicActionOut()));
                    card.isSelect = true;
                    _this.numCardSelect++;
                    _this.numCardSelect > _this.thisPlayer.vectorCard.length && (_this.numCardSelect = _this.thisPlayer.vectorCard.length);
                  }
                }
                _this.cardSelect.node.stopAllActions();
                _this.cardSelect.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                _this.cardSelect.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y + 30)).easing(cc.easeCubicActionOut()));
                _this.cardSelect.isSelect = true;
                _this.numCardSelect++;
                _this.numCardSelect > _this.thisPlayer.vectorCard.length && (_this.numCardSelect = _this.thisPlayer.vectorCard.length);
              }
            } else {
              var posX = _this.posDefaultCard.x;
              if (_this.cardSelect.isSelect) {
                _this.cardSelect.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                _this.cardSelect.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y)).easing(cc.easeCubicActionOut()));
                _this.cardSelect.isSelect = false;
                _this.numCardSelect--;
                _this.numCardSelect <= 0 && (_this.numCardSelect = 0);
              } else {
                _this.cardSelect.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                _this.cardSelect.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y + 30)).easing(cc.easeCubicActionOut()));
                _this.cardSelect.isSelect = true;
                _this.numCardSelect++;
                _this.numCardSelect > _this.thisPlayer.vectorCard.length && (_this.numCardSelect = _this.thisPlayer.vectorCard.length);
              }
            }
            cc.log("-=-=-=--==-=-==--==-=> Tienlen numCardSelect", _this.numCardSelect);
            _this.sortCardSelect();
            return;
          }
          _this.cardSelect = null;
          _this.windowCard();
          _this.sortCardView();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(touch) {
          cc.log("ON TOUCH CANCEL");
          if (!_this.touched || _this.isFinish || !_this.thisPlayer || _this.stateGame !== STATE_GAME.PLAYING) {
            _this.cardSelect = null;
            return;
          }
          _this.touched = false;
          var touchPos = cc.v2(touch.getLocation());
          if (_this.posTouchBegan.sub(touchPos).mag() <= .25 * _this.sizeCardW) {
            if (0 === _this.numCardSelect && 0 !== _this.lastTurnId) {
              _this.suggestOnTouch(_this.cardSelect, _this.lastTurnId);
              for (var i = 0; i < _this.listCardSuggest.length; i++) for (var j = 0; j < _this.thisPlayer.vectorCard.length; j++) {
                var card = _this.thisPlayer.vectorCard[j];
                if (_this.listCardSuggest[i] === card) {
                  var posX_2 = card.node.position.x;
                  card.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                  card.node.runAction(cc.moveTo(.2, cc.v2(posX_2, POS_CARD.y + 30)).easing(cc.easeCubicActionOut()));
                  card.isSelect = true;
                  _this.numCardSelect++;
                  _this.numCardSelect > _this.thisPlayer.vectorCard.length && (_this.numCardSelect = _this.thisPlayer.vectorCard.length);
                }
              }
            } else {
              var posX = _this.posDefaultCard.x;
              if (_this.cardSelect.isSelect) {
                _this.cardSelect.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                _this.cardSelect.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y)).easing(cc.easeCubicActionOut()));
                _this.cardSelect.isSelect = false;
                _this.numCardSelect--;
                _this.numCardSelect <= 0 && (_this.numCardSelect = 0);
              } else {
                _this.cardSelect.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
                _this.cardSelect.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y + 30)).easing(cc.easeCubicActionOut()));
                _this.cardSelect.isSelect = true;
                _this.numCardSelect++;
                _this.numCardSelect > _this.thisPlayer.vectorCard.length && (_this.numCardSelect = _this.thisPlayer.vectorCard.length);
              }
            }
            cc.log("-=-=-=--==-=-==--==-=> Tienlen numCardSelect", _this.numCardSelect);
            _this.sortCardSelect();
            return;
          }
          _this.cardSelect = null;
          _this.sortCardView();
          _this.windowCard();
        }, this);
      };
      TienLenGameView.prototype.sortCardView = function() {
        var _this = this;
        cc.log("!> sort card view");
        this.dangPhatBai = true;
        var index = Math.round(this.thisPlayer.vectorCard.length / 2 * -1);
        var _loop_1 = function(i) {
          var card = this_1.thisPlayer.vectorCard[i];
          card.node.stopAllActions();
          card.node.runAction(cc.scaleTo(.2, SCALE_CARD).easing(cc.easeCubicActionOut()));
          card.node.zIndex = GAME_ZORDER.Z_CARD + i;
          card.node.opacity = 255;
          posCard = this_1.listPosCard[0].add(cc.v2(this_1.sizeCardW * SCALE_CARD * DIS_CARD * index, 0));
          var move = cc.moveTo(.1, posCard).easing(cc.easeCubicActionInOut());
          var sq = cc.sequence(move, cc.callFunc(function() {
            card.isTouch = true;
            card.isSelect = false;
          }));
          card.node.runAction(sq);
          index++;
        };
        var this_1 = this, posCard;
        for (var i = 0; i < this.thisPlayer.vectorCard.length; i++) _loop_1(i);
        this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
          _this.dangPhatBai = false;
        })));
        this.numCardSelect = 0;
      };
      TienLenGameView.prototype.sortCardSelect = function() {
        var _this = this;
        cc.log("!> sort card select");
        var index = Math.round(this.thisPlayer.vectorCard.length / 2 * -1);
        this.numCardSelect = 0;
        this.dangPhatBai = true;
        var _loop_2 = function(i) {
          var card = this_2.thisPlayer.vectorCard[i];
          card.node.stopAllActions();
          card.node.zIndex = GAME_ZORDER.Z_CARD + i;
          card.node.opacity = 255;
          if (card.isSelect) {
            posCard = this_2.listPosCard[0].add(cc.v2(this_2.sizeCardW * SCALE_CARD * DIS_CARD * index, 30));
            this_2.numCardSelect++;
          } else posCard = this_2.listPosCard[0].add(cc.v2(this_2.sizeCardW * SCALE_CARD * DIS_CARD * index, 0));
          var move = cc.moveTo(.1, posCard).easing(cc.easeCubicActionInOut());
          var sq = cc.sequence(move, cc.callFunc(function() {
            card.isTouch = true;
          }));
          card.node.runAction(sq);
          index++;
        };
        var this_2 = this, posCard, posCard;
        for (var i = 0; i < this.thisPlayer.vectorCard.length; i++) _loop_2(i);
        this.windowCard();
        this.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
          _this.dangPhatBai = false;
        })));
      };
      TienLenGameView.prototype.initPrefabs = function(namePrefabs) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/" + namePrefabs, cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.GameView.node;
              return [ 2, node ];
            }
          });
        });
      };
      TienLenGameView.prototype.readDataPlayer = function(_player, data) {
        _player.id = data.id;
        _player.displayName = data.nn;
        _player.info = data;
        _player.idUser = data.id;
        _player.ag = data.ag;
        _player.currentLevel = data.clv;
        _player.currentLevel > 5 && (_player.currentLevel = 5);
        _player.setBgAvatar();
      };
      TienLenGameView.prototype.handleInfoRoom = function(strData) {
        Windown_1.Windown.LobbyView && (Windown_1.Windown.LobbyView.node.active = false);
        var dataJson = JSON.parse(strData);
        var data = dataJson.data;
        this.markCurrent = data.mark;
        this.roomIdCurrent = data.idRoom;
        console.log("Ctable: ", data);
        data.isPass ? this.lbInfo.string = "ID: " + data.idRoom + "\nBet: " + Windown_1.Windown.formatNumber(data.mark) : this.lbInfo.string = "Bet: " + Windown_1.Windown.formatNumber(data.mark);
        var listPlayer = data.listUser;
        var isCheckPlayerViewing = true;
        for (var i = 0; i < listPlayer.length; i++) {
          var nodePlayerView = cc.instantiate(this.prefabsPlayerView);
          var player = nodePlayerView.getComponent("PlayerViewTL");
          this.players.push(player);
          this.node.addChild(player.node, 9);
          this.readDataPlayer(player, listPlayer[i].info);
          player.updatePlayerView(listPlayer[i].info);
          Windown_1.Windown.updateAvatar(Windown_1.Windown.ObjToSFSObj(listPlayer[i].info), player.imgAvatar);
          if (player.id === Windown_1.Windown.User.userId) {
            cc.log("ko phai la viewing");
            this.thisPlayer = player;
            isCheckPlayerViewing = false;
          }
          player.setTurn(true, 0, false, null);
        }
        this.stateGame = STATE_GAME.PLAYING;
        if (isCheckPlayerViewing) {
          var nodePlayerView = cc.instantiate(this.prefabsPlayerView);
          var player = nodePlayerView.getComponent("PlayerViewTL");
          cc.log("viewing: ", Windown_1.Windown.SFSObjToJson(Windown_1.Windown.SFSInfouser));
          this.stateGame = STATE_GAME.VIEWING;
          this.node.addChild(player.node, 99);
          this.thisPlayer = player;
          this.players.push(player);
          var objectInfoThisPlayer = {
            ag: Windown_1.Windown.User.userAg,
            clv: Windown_1.Windown.User.currentLevel,
            currentlevelpoint: Windown_1.Windown.User.currentLevelPoint,
            currentvippoint: Windown_1.Windown.User.currentVipPoint,
            id: Windown_1.Windown.User.userId,
            iv: Windown_1.Windown.User.avatrId,
            isFirtLogin: Windown_1.Windown.User.isFirtLogin,
            isFirtNap: Windown_1.Windown.User.isFirtNap,
            isPlayNow: Windown_1.Windown.User.isPlayNow,
            nn: Windown_1.Windown.User.nickName,
            phonenumber: Windown_1.Windown.User.phoneNumber,
            status: Windown_1.Windown.User.status,
            totallevelpoint: Windown_1.Windown.User.totalLevelPoint,
            tv: Windown_1.Windown.User.typeAvarta,
            username: Windown_1.Windown.User.userName
          };
          this.readDataPlayer(player, objectInfoThisPlayer);
          player.updatePlayerView(objectInfoThisPlayer);
          Windown_1.Windown.updateAvatar(Windown_1.Windown.ObjToSFSObj(objectInfoThisPlayer), player.imgAvatar);
          player.setTurn(false, 0, false, null);
        }
        this.updatePositionPlayerView();
        cc.log("!> rj", data);
        if (!data.startGame) return;
        this.connectGame(data);
      };
      TienLenGameView.prototype.connectGame = function(data) {
        var listPlayer = data.listUser;
        for (var i = 0; i < listPlayer.length; i++) {
          var player_1 = this.getPlayerWithId(listPlayer[i].info.id);
          for (var j = 0; j < listPlayer[i].cards.length; j++) {
            var card = this.getCard();
            card.decodeCard(listPlayer[i].cards[j]);
            player_1.vectorCard.push(card);
          }
        }
        this.turnIdCurrent = data.idCurr;
        this.lastTurnId = data.idlw;
        this.timeTurn = 10;
        var player = this.getPlayerWithId(data.idlw);
        if (player) for (var i = 0; i < data.cardsOut.length; i++) {
          var card = this.getCard();
          card.decodeCard(data.cardsOut[i]);
          player.vectorCardD.push(card);
        }
        this.initPlayerCard(data);
        var playerTurnCur = this.getPlayerWithId(data.idCurr);
        playerTurnCur.setTurn(true, data.time, true, null);
      };
      TienLenGameView.prototype.initPlayerCard = function(data) {
        if (this.stateGame === STATE_GAME.PLAYING) {
          cc.log("--=-=-==-=--=-=-=-=-=-=-=>>>>>>> Tienlen v\xe0o \u0111\xe2y ch\u01b0a em \u01a1i");
          this.btnSort.node.active = true;
          this.btnSort.enabled = true;
          this.btnSort.interactable = true;
          cc.log("--=-=-==-=--=-=-=-=-=-=-=>>>>>>> Tienlen ten palyer cu ->>>" + this.turnIdCurrent);
          if (data.idCurr === this.thisPlayer.id) {
            this.btnPass.node.active = true;
            this.btnDiscard.node.active = true;
            this.btnPass.enabled = true;
            this.btnDiscard.enabled = true;
            this.btnPass.interactable = true;
            this.btnDiscard.interactable = true;
          }
        }
        var index = Math.round(this.thisPlayer.vectorCard.length / 2 * -1);
        cc.log("=-=-=-=-=--=-=-=-=-==--=-=-=-=-=-=-==> Tienlen index : " + index);
        for (var i = 0; i < this.players.length; i++) {
          var player = this.players[i];
          if (player === this.thisPlayer && this.stateGame === STATE_GAME.VIEWING) continue;
          var siC = player.vectorCard.length;
          var siD = player.vectorCardD.length;
          player.numberCard = siC;
          var idexPos = player._indexDynamic;
          var posC = this.listPosCard[idexPos];
          var posCardD = this.listPosCardDanh[idexPos];
          0 === idexPos || 2 === idexPos ? posCardD = posCardD.sub(cc.v2(this.sizeCardW * SCALE_CARD_DANH * DIS_CARD * siD / 2, 0)) : 1 === idexPos && (posCardD = posCardD.sub(cc.v2(this.sizeCardW * SCALE_CARD_DANH * DIS_CARD * siD, 0)));
          for (var j = 0; j < siC; j++) {
            var card = player.vectorCard[j];
            card.node.active = true;
            this.node.addChild(card.node, GAME_ZORDER.Z_CARD + j);
            card.setTextureWithCode(card.code);
            if (player === this.thisPlayer) {
              cc.log("==----------------=============>>> Tienlen abc " + this.sizeCardW * SCALE_CARD * DIS_CARD * index);
              var posCard = this.listPosCard[0].add(cc.v2(this.sizeCardW * SCALE_CARD * DIS_CARD * index, 0));
              card.node.setScale(SCALE_CARD);
              card.node.setPosition(posCard.x, posCard.y);
              cc.log("--=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=>>>>>>> Tienlen poscard: " + posCard);
              index++;
              cc.log("=-=-=-=-=--=-=-=-=-==--=-=-=-=-=-=-==> Tienlen index : " + index);
            } else {
              card.node.setScale(SCALE_CARD_OTHER);
              card.node.setPosition(posC.x, posC.y);
            }
          }
          if (player !== this.thisPlayer && player.numberCard > 0) {
            this.lbNumberCard[idexPos].string = player.numberCard.toString();
            this.lbNumberCard[idexPos].node.active = true;
          }
          for (var j = 0; j < player.vectorCardD.length; j++) {
            var card = player.vectorCardD[j];
            posCardD = posCardD.add(cc.v2(this.sizeCardW * SCALE_CARD_DANH * .45, 0));
            card.node.active = true;
            this.node.addChild(card.node, GAME_ZORDER.Z_CARD + j);
            card.setTextureWithCode(card.code);
            card.node.setScale(SCALE_CARD_DANH);
            card.node.setPosition(posCardD.x, posCardD.y);
          }
        }
        this.stateGame === STATE_GAME.PLAYING && this.onClickSortCard();
      };
      TienLenGameView.prototype.initPlayerView = function(infor) {};
      TienLenGameView.prototype.handleLc = function(strData) {
        return __awaiter(this, void 0, void 0, function() {
          var data, arr, firtRound, i, player, j, card;
          var _this = this;
          return __generator(this, function(_a) {
            data = JSON.parse(strData);
            this.audio.playEffect(this.audio.startGame);
            this.beforeStartGame();
            this.aniStartGame.node.active = true;
            this.aniStartGame.setAnimation(0, "startgame", false);
            arr = JSON.parse(data.arr);
            this.timeTurn = data.time;
            this.turnIdCurrent = data.idTurn;
            firtRound = data.firstRound;
            for (i = 0; i < this.players.length; i++) {
              player = this.players[i];
              player.vectorCard = [];
              for (j = 0; j < arr.length; j++) {
                card = this.getCard();
                card.node.setScale(SCALE_CARD_OTHER);
                card.setTextureWithCode(0);
                card.node.active = false;
                this.node.addChild(card.node, GAME_ZORDER.Z_CARD - j);
                card.node.setPosition(0, 0);
                player === this.thisPlayer && card.decodeCard(arr[j]);
                player.vectorCard.push(card);
              }
              player === this.thisPlayer ? player.numberCard = 13 : player.numberCard = 0;
            }
            cc.tween(this.node).delay(1).call(function() {
              _this.dealCard();
            }).delay(2.8).call(function() {
              _this.dangPhatBai = false;
              _this.onClickSortCard();
              var playerTurn = _this.getPlayerWithId(data.idTurn);
              playerTurn.setTurn(true, data.time, true, null);
              if (_this.turnIdCurrent === _this.thisPlayer.id && firtRound) {
                _this.bgHint.node.active = true;
                var scale = cc.scaleTo(.25, 1.1);
                var scale1 = cc.scaleTo(.25, .9);
                var sq = cc.sequence(scale, scale1);
                var rp = cc.repeat(sq, 6);
                _this.bgHint.node.runAction(cc.sequence(rp, cc.callFunc(function() {
                  _this.bgHint.node.active = false;
                })));
              }
              if (_this.turnIdCurrent === _this.thisPlayer.id) {
                _this.btnDiscard.node.active = true;
                _this.btnDiscard.enabled = true;
                _this.btnDiscard.interactable = true;
                _this.btnDiscard.node.setPosition(cc.v2(0, _this.btnDiscard.node.position.y));
                _this.lbDiscard.string = "Beat";
              }
              _this.btnSort.node.active = true;
              _this.btnSort.enabled = true;
              _this.btnSort.interactable = true;
            }).delay(1).call(function() {
              _this.isAllowClickDownAllCard = true;
            }).start();
            return [ 2 ];
          });
        });
      };
      TienLenGameView.prototype.dealCard = function() {
        var _this = this;
        this.aniStartGame.node.active = false;
        this.dangPhatBai = true;
        var _loop_3 = function(i) {
          var player = this_3.players[i];
          var idex = player._indexDynamic;
          posCard = this_3.listPosCard[idex];
          timedelay = 0;
          index = -6;
          var _loop_4 = function(id) {
            var card = player.vectorCard[id];
            card.node.active = true;
            card.node.angle = -90;
            if (player === this_3.thisPlayer) {
              posCard = this_3.listPosCard[0].add(cc.v2(this_3.sizeCardW * SCALE_CARD * DIS_CARD * index, 0));
              var move = cc.moveTo(.4, posCard).easing(cc.easeCubicActionOut());
              var scale = cc.scaleTo(.4, SCALE_CARD);
              var rota = cc.rotateTo(.3, 0);
              var ac = cc.callFunc(function() {
                card.node.zIndex = GAME_ZORDER.Z_CARD + id;
              });
              var spawn = cc.spawn(move, ac, scale, rota);
              var scale1 = cc.spawn(cc.scaleTo(.15, 0, SCALE_CARD), cc.skewTo(.15, 0, -20));
              var scale2 = cc.spawn(cc.scaleTo(.15, SCALE_CARD, SCALE_CARD), cc.skewTo(.15, 0, 0));
              card.node.runAction(cc.sequence(cc.delayTime(timedelay), spawn, scale1, cc.callFunc(function() {
                _this.audio.playEffect(_this.audio.dichuyenLabai);
                card.setTextureWithCode(card.code);
                card.node.skewY = 20;
              }), scale2));
              index++;
            } else {
              var move = cc.moveTo(.2, posCard).easing(cc.easeCubicActionInOut());
              var ac = cc.callFunc(function() {
                card.node.zIndex = GAME_ZORDER.Z_CARD + id;
              });
              var rota = cc.rotateTo(.3, 0);
              var spawn = cc.spawn(move, ac, rota);
              card.node.runAction(cc.sequence(cc.delayTime(timedelay), spawn, cc.callFunc(function() {
                player.numberCard++;
                _this.lbNumberCard[idex].string = player.numberCard.toString();
                _this.lbNumberCard[idex].node.active = true;
              })));
            }
            timedelay += .15;
          };
          for (var id = 0; id < player.vectorCard.length; id++) _loop_4(id);
        };
        var this_3 = this, posCard, timedelay, index;
        for (var i = 0; i < this.players.length; i++) _loop_3(i);
      };
      TienLenGameView.prototype.beforeStartGame = function() {
        this.stateGame = STATE_GAME.PLAYING;
        this.typeSort = 2;
        this.turnIdCurrent = 0;
        this.lastTurnId = 0;
        this.playerSpecail = null;
        this.listCardSuggest = [];
        this.isFinish = false;
        this.zIndexCardD = GAME_ZORDER.Z_CARD + 10;
        for (var i = 0; i < this.players.length; i++) this.players[i].clearState();
        this.updatePositionPlayerView();
      };
      TienLenGameView.prototype.handleStartTime = function(strData) {
        return __awaiter(this, void 0, void 0, function() {
          var data;
          return __generator(this, function(_a) {
            data = JSON.parse(strData);
            console.log("st: ", data);
            this.cleanTable();
            this.setTimeStart(data.time);
            return [ 2 ];
          });
        });
      };
      TienLenGameView.prototype.setTimeStart = function(timeStart) {
        var _this = this;
        if (null !== this.timerControl) {
          this.timerControl.stopAllActions();
          this.timerControl.active = true;
          var delTime = cc.delayTime(1);
          var timeCheck = cc.callFunc(function() {
            if (timeStart > 0) {
              _this.timerControl.getChildByName("lbTimeStart").getComponent(cc.Label).string = "" + timeStart;
              timeStart--;
            } else _this.timerControl.active = false;
          });
          var eff = cc.sequence(timeCheck, delTime);
          var act = cc.repeatForever(eff);
          this.timerControl.runAction(act);
        }
      };
      TienLenGameView.prototype.handleUserJoin = function(strData) {
        return __awaiter(this, void 0, void 0, function() {
          var data, playerJoin, player, index;
          return __generator(this, function(_a) {
            data = JSON.parse(strData);
            console.log("UserJoin: ", data);
            playerJoin = data;
            player = cc.instantiate(this.prefabsPlayerView).getComponent("PlayerViewTL");
            this.players.push(player);
            this.node.addChild(player.node, 9);
            this.readDataPlayer(player, playerJoin);
            Windown_1.Windown.updateAvatar(Windown_1.Windown.ObjToSFSObj(data), player.imgAvatar);
            player.setTurn(false, 0, false, null);
            player.updatePlayerView(playerJoin);
            index = this.checkIndexPlayerIsExisted();
            player._indexDynamic = index;
            player.node.setPosition(this.listPosView[index]);
            return [ 2 ];
          });
        });
      };
      TienLenGameView.prototype.handleDc = function(strData) {
        return __awaiter(this, void 0, void 0, function() {
          var data, player, playerSetTurn, playerIdc, playerIdic, i, vtCard, i, j, card, i, card, timedelay, indexPos, posCardD, posC, i, card, code, move1, i, card, move1, scale, spawn;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.audio.playEffect(this.audio.danhBaiVaBocBai);
              if (!this.dangPhatBai) return [ 3, 2 ];
              return [ 4, this.getMakeDelay(3.2).prosime ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              data = JSON.parse(strData);
              player = this.getPlayerWithId(data.pid);
              player && player.setTurn(false, 0, false, null);
              if (0 != data.idNext) {
                data.idNext == Windown_1.Windown.User.userId && this.audio.playEffect(this.audio.denTurn);
                playerSetTurn = this.getPlayerWithId(data.idNext);
                playerSetTurn.setTurn(true, this.timeTurn, true, null);
              }
              if (data.agc > 0) {
                playerIdc = this.getPlayerWithId(data.idc);
                playerIdc.effectFlyMoney(data.agic, 20);
                playerIdc.ag += data.agic;
                playerIdc.updateAg(playerIdc.ag);
                playerIdic = this.getPlayerWithId(data.idic);
                playerIdic.effectFlyMoney(-data.agc, 20);
                playerIdic.ag -= data.agc;
                playerIdic.updateAg(playerIdic.ag);
              }
              this.turnIdCurrent = data.idNext;
              this.lastTurnId = data.pid;
              this.turnIdCurrent === this.thisPlayer.id && (this.dangPhatBai = true);
              this.aniCardSpecial.node.active = false;
              this.aniCardSpecial.node.zIndex = 1001;
              for (i = 0; i < this.players.length; i++) this.players[i].clearVectorCardD();
              if (player === this.thisPlayer) {
                this.btnPass.node.active = false;
                this.btnDiscard.node.active = false;
              }
              vtCard = data.arrD;
              if (player === this.thisPlayer) {
                for (i = 0; i < vtCard.length; i++) for (j = 0; j < this.thisPlayer.vectorCard.length; j++) if (this.thisPlayer.vectorCard[j].code === vtCard[i]) {
                  card = this.thisPlayer.vectorCard[j];
                  card.isTouch = false;
                  player.vectorCardD.push(card);
                  player.vectorCard.splice(j, 1);
                  break;
                }
              } else for (i = 0; i < vtCard.length; i++) {
                card = player.vectorCard[0];
                card.decodeCard(vtCard[i]);
                card.setTextureWithCode(card.code);
                player.vectorCardD.push(card);
                player.vectorCard.splice(0, 1);
              }
              player.numberCard -= vtCard.length;
              timedelay = 0;
              indexPos = player._indexDynamic;
              posCardD = this.listPosCardDanh[indexPos];
              0 === indexPos || 2 === indexPos ? posCardD = posCardD.sub(cc.v2(this.sizeCardW * SCALE_CARD_DANH * (DIS_CARD / 2) * (vtCard.length - 1), 0)) : 1 === indexPos && (posCardD = posCardD.sub(cc.v2(this.sizeCardW * SCALE_CARD_DANH * DIS_CARD * vtCard.length, 0)));
              if (LogicManagerTL_1.default.check3DoiThongTL(player.vectorCardD) || LogicManagerTL_1.default.check4DoiThongTL(player.vectorCardD) || LogicManagerTL_1.default.checkTuQuy(player.vectorCardD) || LogicManagerTL_1.default.checkSetOfTwos(player.vectorCardD)) {
                posC = cc.v2(0, -20);
                posC = posC.sub(cc.v2(this.sizeCardW * (DIS_CARD / 2) * (vtCard.length - 1), 0));
                for (i = 0; i < player.vectorCardD.length; i++) {
                  card = player.vectorCardD[i];
                  code = card.code;
                  card.setTextureWithCode(0);
                  card.node.zIndex = this.zIndexCardD;
                  card.isTouch = false;
                  this.zIndexCardD++;
                  move1 = cc.moveTo(.5, posC).easing(cc.easeCubicActionOut());
                  card.node.runAction(cc.sequence(cc.delayTime(timedelay), move1));
                  this.showSpecialCard(card.node, code, timedelay);
                  timedelay += .05;
                  posC = posC.add(cc.v2(this.sizeCardW * DIS_CARD, 0));
                }
                this.node.runAction(cc.sequence(cc.delayTime(timedelay + .1), cc.callFunc(function() {
                  _this.dangPhatBai = false;
                  if (LogicManagerTL_1.default.check3DoiThongTL(player.vectorCardD)) {
                    _this.aniCardSpecial.node.active = true;
                    _this.aniCardSpecial.setAnimation(0, "3 Consecutive Pairs", false);
                  } else if (LogicManagerTL_1.default.check4DoiThongTL(player.vectorCardD)) {
                    _this.aniCardSpecial.node.active = true;
                    _this.aniCardSpecial.setAnimation(0, "4 Consecutive Pairs", false);
                  } else if (LogicManagerTL_1.default.checkTuQuy(player.vectorCardD)) {
                    _this.aniCardSpecial.node.active = true;
                    _this.aniCardSpecial.setAnimation(0, "4 of a kind", false);
                  } else if (LogicManagerTL_1.default.checkSetOfTwos(player.vectorCardD)) {
                    _this.aniCardSpecial.node.active = true;
                    _this.aniCardSpecial.setAnimation(0, "Set of twos", false);
                  }
                  if (player === _this.thisPlayer) _this.sortCardView(); else {
                    _this.lbNumberCard[indexPos].string = player.numberCard.toString();
                    0 === player.numberCard && (_this.lbNumberCard[indexPos].node.active = false);
                  }
                }), cc.delayTime(1), cc.callFunc(function() {
                  for (var i = 0; i < player.vectorCardD.length; i++) {
                    var card = player.vectorCardD[i];
                    card.node.zIndex = _this.zIndexCardD;
                    _this.zIndexCardD++;
                    var move1 = cc.moveTo(.2, posCardD).easing(cc.easeCubicActionInOut());
                    var scale = cc.scaleTo(.15, SCALE_CARD_DANH);
                    var spawn = cc.spawn(scale, move1);
                    card.node.runAction(spawn);
                    posCardD = posCardD.add(cc.v2(_this.sizeCardW * SCALE_CARD_DANH * DIS_CARD, 0));
                  }
                  if (_this.turnIdCurrent === _this.thisPlayer.id) {
                    _this.btnPass.node.active = true;
                    _this.btnDiscard.node.active = true;
                    _this.btnPass.enabled = true;
                    _this.btnDiscard.enabled = true;
                    _this.btnPass.interactable = true;
                    _this.btnDiscard.interactable = true;
                    _this.btnDiscard.node.setPosition(cc.v2(140, _this.btnDiscard.node.position.y));
                    _this.lbDiscard.string = "Beat";
                    _this.sortCardSelect();
                  }
                  _this.aniCardSpecial.node.active = false;
                })));
              } else {
                for (i = 0; i < player.vectorCardD.length; i++) {
                  card = player.vectorCardD[i];
                  card.node.zIndex = this.zIndexCardD;
                  card.isTouch = false;
                  this.zIndexCardD++;
                  move1 = cc.moveTo(.2, posCardD).easing(cc.easeCubicActionInOut());
                  scale = cc.scaleTo(.15, SCALE_CARD_DANH);
                  spawn = cc.spawn(scale, move1);
                  card.node.runAction(cc.sequence(cc.delayTime(timedelay), spawn));
                  timedelay += .03;
                  posCardD = posCardD.add(cc.v2(this.sizeCardW * SCALE_CARD_DANH * DIS_CARD, 0));
                }
                this.node.runAction(cc.sequence(cc.delayTime(timedelay + .1), cc.callFunc(function() {
                  _this.dangPhatBai = false;
                  if (player === _this.thisPlayer) _this.sortCardView(); else {
                    _this.lbNumberCard[indexPos].string = player.numberCard.toString();
                    0 === player.numberCard && (_this.lbNumberCard[indexPos].node.active = false);
                  }
                  if (_this.turnIdCurrent === _this.thisPlayer.id) {
                    _this.btnPass.node.active = true;
                    _this.btnDiscard.node.active = true;
                    _this.btnPass.enabled = true;
                    _this.btnDiscard.enabled = true;
                    _this.btnPass.interactable = true;
                    _this.btnDiscard.interactable = true;
                    _this.btnDiscard.node.setPosition(cc.v2(140, _this.btnDiscard.node.position.y));
                    _this.lbDiscard.string = "Beat";
                    _this.sortCardSelect();
                  }
                })));
              }
              return [ 2 ];
            }
          });
        });
      };
      TienLenGameView.prototype.handlePass = function(strData) {
        return __awaiter(this, void 0, void 0, function() {
          var data, player, playerNextTurn, i, i, sp;
          return __generator(this, function(_a) {
            data = JSON.parse(strData);
            player = this.getPlayerWithId(data.pid);
            player && player.setTurn(false, 0, false, null);
            if (0 != data.idNext) {
              playerNextTurn = this.getPlayerWithId(data.idNext);
              playerNextTurn.setTurn(true, this.timeTurn, true, null);
            }
            this.turnIdCurrent = data.idNext;
            if (player === this.thisPlayer) {
              this.btnPass.node.active = false;
              this.btnDiscard.node.active = false;
              this.allCardDown();
            }
            if (data.nt) {
              if (this.turnIdCurrent === this.thisPlayer.id) {
                cc.log("Tat cai pass di");
                this.btnPass.node.active = false;
                this.btnDiscard.node.active = true;
                this.btnDiscard.enabled = true;
                this.btnDiscard.interactable = true;
                this.btnDiscard.node.setPosition(cc.v2(0, this.btnDiscard.node.getPosition().y));
                this.lbDiscard.string = "Beat";
              }
              for (i = 0; i < this.players.length; i++) this.players[i].clearVectorCardD();
              this.lastTurnId = 0;
              this.aniCardSpecial.node.active = false;
              for (i = 0; i < this.listSpritePass.length; i++) this.listSpritePass[i].node.active = false;
              this.zIndexCardD = GAME_ZORDER.Z_CARD + 10;
            } else {
              if (this.turnIdCurrent === this.thisPlayer.id) {
                this.btnPass.node.active = true;
                this.btnDiscard.node.active = true;
                this.btnPass.enabled = true;
                this.btnDiscard.enabled = true;
                this.btnPass.interactable = true;
                this.btnDiscard.interactable = true;
                this.btnDiscard.node.setPosition(cc.v2(140, this.btnDiscard.node.position.y));
                this.lbDiscard.string = "Beat";
              }
              sp = this.listSpritePass[player._indexDynamic];
              sp.node.active = true;
              sp.node.setScale(0);
              sp.node.runAction(cc.scaleTo(.2, 1));
            }
            return [ 2 ];
          });
        });
      };
      TienLenGameView.prototype.handleFinish = function(strData) {
        return __awaiter(this, void 0, void 0, function() {
          var dataFinish, data, i, dataPlayer, player, playerData, arrC, id, id, card, actions, sq;
          var _this = this;
          return __generator(this, function(_a) {
            this.audio.playEffect(this.audio.alert);
            this.isFinish = true;
            dataFinish = JSON.parse(strData);
            data = JSON.parse(dataFinish.data);
            cc.log("Handle Finish: ", data);
            this.listDataPlayerResult = [];
            this.aniFinish.node.active = true;
            this.aniFinish.setAnimation(0, "finish", false);
            this.aniCardSpecial.node.active = false;
            for (i = 0; i < data.length; i++) {
              dataPlayer = data[i];
              player = this.getPlayerWithId(dataPlayer.playerId);
              if (null === player) continue;
              player == this.thisPlayer && (Windown_1.Windown.User.userAg = data[i].ag);
              player.point = dataPlayer.score;
              playerData = {
                ag: dataPlayer.ag,
                point: dataPlayer.score,
                typeWin: dataPlayer.TypeWin,
                lstDenLang: [],
                id: dataPlayer.playerId
              };
              this.listDataPlayerResult.push(playerData);
              arrC = dataPlayer.arr;
              for (id = 0; id < arrC.length; id++) null == player.vectorCard[id] && void 0 == player.vectorCard[id] || player.vectorCard[id].decodeCard(arrC[id]);
              if (dataFinish.tw > 0 && dataFinish.wn && dataFinish.idw == dataPlayer.playerId) {
                this.playerSpecail = new PlayerViewTL_1.default();
                this.playerSpecail.name = player.displayName;
                this.playerSpecail.info = player.info;
                this.playerSpecail.typeWin = dataFinish.tw;
                this.playerSpecail.id = player.id;
                for (id = 0; id < arrC.length; id++) {
                  card = this.getCard();
                  card.decodeCard(arrC[id]);
                  card.node.setScale(SCALE_CARD);
                  this.playerSpecail.vectorCard.push(card);
                }
                cc.log("-=--==--=-=-==--=-=--=----=-=--=-==-=>>>>>>> Tienlen win special: " + this.playerSpecail.vectorCard);
              }
            }
            this.playerSpecail && this.node.stopAllActions();
            actions = [];
            actions.push(cc.delayTime(.5));
            actions.push(cc.callFunc(function() {
              _this.prepareFinish();
            }));
            actions.push(cc.delayTime(1));
            if (this.playerSpecail) {
              actions.push(cc.callFunc(function() {
                _this.TienLenCardSpecial();
              }));
              actions.push(cc.delayTime(2.5));
              actions.push(cc.callFunc(function() {
                _this.aniWinSpecial.node.parent.active = false;
                _this.showCard(dataFinish);
              }));
              actions.push(cc.delayTime(2.5));
            } else {
              actions.push(cc.callFunc(function() {
                _this.showCard(dataFinish);
              }));
              actions.push(cc.delayTime(2.5));
            }
            actions.push(cc.callFunc(function() {
              _this.showExchangeMoney(data);
            }));
            actions.push(cc.delayTime(4));
            actions.push(cc.callFunc(function() {
              _this.handleFinishGame();
            }));
            sq = cc.sequence(actions);
            this.node.runAction(sq);
            return [ 2 ];
          });
        });
      };
      TienLenGameView.prototype.getCard = function() {
        var card = null;
        card = this.cardPool.size() < 1 ? cc.instantiate(this.cardPrefab).getComponent("CardTL") : this.cardPool.get().getComponent("CardTL");
        return card;
      };
      TienLenGameView.prototype.updatePositionPlayerView = function() {
        for (var i = 0; i < this.players.length; i++) {
          var index = this.getDynamicIndex(this.getIndexOf(this.players[i]));
          cc.log("index Update Pos: ", index);
          this.players[i]._indexDynamic = index;
          this.players[i].node.setPosition(this.listPosView[index]);
        }
      };
      TienLenGameView.prototype.getDynamicIndex = function(index) {
        if (0 == index) return 0;
        var _index = index;
        2 === this.players.length && _index++;
        return _index;
      };
      TienLenGameView.prototype.getIndexOf = function(player) {
        var index = this.getIndexOfPlayer(player);
        var thisPlayerIndex = this.players.length;
        this.thisPlayer && (thisPlayerIndex = this.getIndexOfPlayer(this.thisPlayer));
        return (index + this.players.length - thisPlayerIndex) % this.players.length;
      };
      TienLenGameView.prototype.getIndexOfPlayer = function(player) {
        return this.players.indexOf(player);
      };
      TienLenGameView.prototype.checkIndexPlayerIsExisted = function() {
        var listIndexExits = [];
        for (var i = 0; i < this.players.length; i++) this.players[i]._indexDynamic >= 0 && this.players[i]._indexDynamic < this.listPosView.length && listIndexExits.push(this.players[i]._indexDynamic);
        var lisIindexDynamic = [];
        for (var i = 0; i < this.listPosView.length; i++) lisIindexDynamic.push(i);
        for (var i = 0; i < lisIindexDynamic.length; i++) if (!listIndexExits.includes(i)) {
          cc.log("index fill: ", i);
          return i;
        }
      };
      TienLenGameView.prototype.getPlayerWithId = function(idPlayer) {
        for (var i = 0; i < this.players.length; i++) if (idPlayer == this.players[i].id) return this.players[i];
        return null;
      };
      TienLenGameView.prototype.onClickSortCard = function() {
        var _this = this;
        this.audio.playEffect(this.audio.click);
        cc.log("=---=-=-=-=-=-==-=-=-=-=-=-==-=-> Tienlen sort");
        this.typeSort = (this.typeSort + 1) % 3;
        cc.log("OnClickSort: ", this.typeSort);
        0 === this.typeSort ? this.thisPlayer.vectorCard.sort(function(x, y) {
          var kq = x.N - y.N;
          0 === kq && (kq = x.S - y.S);
          return kq;
        }) : 1 === this.typeSort ? this.thisPlayer.vectorCard.sort(function(x, y) {
          var kq = y.N - x.N;
          0 === kq && (kq = x.S - y.S);
          return kq;
        }) : this.thisPlayer.vectorCard.sort(function(x, y) {
          var kq = x.S - y.S;
          0 === kq && (kq = x.N - y.N);
          return kq;
        });
        this.sortCard();
        cc.tween(this.node).call(function() {
          _this.btnSort.interactable = false;
        }).delay(.3).call(function() {
          _this.btnSort.interactable = true;
        }).start();
      };
      TienLenGameView.prototype.sortCard = function() {
        var _this = this;
        var index = Math.round(this.thisPlayer.vectorCard.length / 2 * -1);
        this.dangPhatBai = true;
        this.numCardSelect = 0;
        var _loop_5 = function(i) {
          var card = this_4.thisPlayer.vectorCard[i];
          card.node.stopAllActions();
          card.node.runAction(cc.scaleTo(.2, SCALE_CARD).easing(cc.easeCubicActionOut()));
          card.node.zIndex = GAME_ZORDER.Z_CARD + i;
          card.node.opacity = 255;
          posCard = this_4.listPosCard[0].add(cc.v2(this_4.sizeCardW * SCALE_CARD * DIS_CARD * index, 0));
          var move1 = cc.moveTo(.15, this_4.listPosCard[0]).easing(cc.easeCubicActionOut());
          var move2 = cc.moveTo(.15, posCard).easing(cc.easeCubicActionOut());
          var sq = cc.sequence(move1, move2, cc.callFunc(function() {
            card.isTouch = true;
            card.isSelect = false;
          }));
          card.node.runAction(sq);
          index++;
        };
        var this_4 = this, posCard;
        for (var i = 0; i < this.thisPlayer.vectorCard.length; i++) _loop_5(i);
        this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
          _this.dangPhatBai = false;
        })));
      };
      TienLenGameView.prototype.macBookCard = function(index) {
        for (var i = 0; i <= this.thisPlayer.vectorCard.length; i++) {
          var scale = SCALE_CARD;
          var card = this.thisPlayer.vectorCard[i];
          i != index - 1 && i != index + 1 || (scale = 1);
          i != index - 2 && i != index + 2 || (scale = 1);
          null != card && i != index && card.node.runAction(cc.scaleTo(.2, scale).easing(cc.easeCubicActionOut()));
          i == index && card.node.setScale(1.1);
        }
      };
      TienLenGameView.prototype.windowCard = function() {
        for (var i = 0; i < this.thisPlayer.vectorCard.length; i++) {
          var card = this.thisPlayer.vectorCard[i];
          null != card && card.node.runAction(cc.scaleTo(.2, SCALE_CARD).easing(cc.easeCubicActionOut()));
        }
      };
      TienLenGameView.prototype.suggestOnTouch = function(card, lastTurnId) {
        var player = this.getPlayerWithId(lastTurnId);
        this.listCardSuggest = [];
        if (!player) return;
        var vtCard = player.vectorCardD;
        var siC = vtCard.length;
        var typeCard = this.getTypeCard(vtCard);
        var targetCard = vtCard[siC - 1];
        switch (typeCard) {
         case TYPE_CARD_TIEN_LEN.TL_DOI:
         case TYPE_CARD_TIEN_LEN.TL_XAM:
          this.listCardSuggest = this.getlistDoiXam(card, typeCard, targetCard);
          break;

         case TYPE_CARD_TIEN_LEN.TL_SANH:
         case TYPE_CARD_TIEN_LEN.TL_TPS:
          this.listCardSuggest = this.getlistSanh(card, typeCard, siC, targetCard);
          break;

         case TYPE_CARD_TIEN_LEN.TL_HAI:
          this.listCardSuggest = this.getTuQuy(card, targetCard);
          if (this.listCardSuggest.length > 0) break;
          this.listCardSuggest = this.getBonDoiThong(card, targetCard);
          if (this.listCardSuggest.length > 0) break;
          this.listCardSuggest = this.getBaDoiThong(card, targetCard);
          0 == this.listCardSuggest.length && this.listCardSuggest.push(card);
          break;

         case TYPE_CARD_TIEN_LEN.TL_DOIHAI:
          this.listCardSuggest = this.getBonDoiThong(card, targetCard);
          if (this.listCardSuggest.length > 0) break;
          this.listCardSuggest = this.getTuQuy(card, null);
          0 == this.listCardSuggest.length && this.listCardSuggest.push(card);
          break;

         case TYPE_CARD_TIEN_LEN.TL_BADOITHONG:
          this.listCardSuggest = this.getTuQuy(card, null);
          if (this.listCardSuggest.length > 0) break;
          this.listCardSuggest = this.getBaDoiThong(card, targetCard);
          0 == this.listCardSuggest.length && this.listCardSuggest.push(card);
          break;

         case TYPE_CARD_TIEN_LEN.TL_BONDOITHONG:
          this.listCardSuggest = this.getBonDoiThong(card, targetCard);
          0 == this.listCardSuggest.length && this.listCardSuggest.push(card);
          break;

         case TYPE_CARD_TIEN_LEN.TL_TUQUY:
          this.listCardSuggest = this.getTuQuy(card, targetCard);
          0 == this.listCardSuggest.length && this.listCardSuggest.push(card);
          break;

         case TYPE_CARD_TIEN_LEN.TL_HAIDOITHONG:
          this.listCardSuggest = this.getHaiDoiThong(card, targetCard);
          0 == this.listCardSuggest.length && this.listCardSuggest.push(card);
          break;

         case TYPE_CARD_TIEN_LEN.TL_NONE:
          this.listCardSuggest.push(card);
        }
      };
      TienLenGameView.prototype.getTypeCard = function(vtCard) {
        return LogicManagerTL_1.default.checkDoiTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_DOI : LogicManagerTL_1.default.checkXamTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_XAM : LogicManagerTL_1.default.ckeckThungPhaSanhTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_TPS : LogicManagerTL_1.default.checkSanhTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_SANH : LogicManagerTL_1.default.checkHaiTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_HAI : LogicManagerTL_1.default.checkDoiHaiTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_DOIHAI : LogicManagerTL_1.default.check3DoiThongTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_BADOITHONG : LogicManagerTL_1.default.check4DoiThongTL(vtCard) ? TYPE_CARD_TIEN_LEN.TL_BONDOITHONG : LogicManagerTL_1.default.checkTuQuy(vtCard) ? TYPE_CARD_TIEN_LEN.TL_TUQUY : TYPE_CARD_TIEN_LEN.TL_NONE;
      };
      TienLenGameView.prototype.getlistDoiXam = function(card, typeCard, targetCard) {
        var list = this.thisPlayer.vectorCard.slice();
        list.sort(function(x, y) {
          var kq = x.S - y.S;
          0 === kq && (kq = x.N - y.N);
          return kq;
        });
        var listSuggest = [];
        var index = 1;
        var dcown = 0;
        listSuggest.push(card);
        if (card.N < targetCard.N && 2 !== card.N) return listSuggest;
        if (card.N > targetCard.N && 2 === targetCard.N) return listSuggest;
        for (var i = 0; i < list.length; i++) {
          if (list[i].N === card.N && list[i].code !== card.code) {
            listSuggest.push(list[i]);
            index++;
          }
          if (typeCard === TYPE_CARD_TIEN_LEN.TL_DOI && 2 === index) {
            if (card.N == targetCard.N && targetCard.N > 5) for (var i_1 = 0; i_1 < listSuggest.length; i_1++) listSuggest[i_1].S < targetCard.S && dcown++;
            break;
          }
          if (typeCard === TYPE_CARD_TIEN_LEN.TL_XAM && 3 === index) break;
        }
        if (typeCard === TYPE_CARD_TIEN_LEN.TL_DOI && index < 2 || typeCard === TYPE_CARD_TIEN_LEN.TL_XAM && index < 3 || 2 === dcown) {
          listSuggest = [];
          listSuggest.push(card);
        }
        return listSuggest;
      };
      TienLenGameView.prototype.getTuQuy = function(card, targetCard) {
        var list = this.thisPlayer.vectorCard.slice();
        var listSuggest = this.findTuQuy(list);
        console.log("GetTuQuy: ", listSuggest);
        var result = [];
        for (var i = 0; i < listSuggest.length; i++) for (var j = 0; j < listSuggest[i].length; j++) if (null != targetCard) {
          if (listSuggest[i][j].N == card.N && listSuggest[i][j].N > targetCard.N) {
            result = listSuggest[i];
            break;
          }
        } else if (listSuggest[i][j].N == card.N) {
          result = listSuggest[i];
          break;
        }
        return result;
      };
      TienLenGameView.prototype.getHaiDoiThong = function(card, targetCard) {
        var list = this.thisPlayer.vectorCard.slice();
        var listSuggest = this.findTwoPairs(list);
        console.log("GetTwoPairs: ", listSuggest);
        var result = [];
        for (var i = 0; i < listSuggest.length; i++) if (listSuggest[i].includes(card) && listSuggest[i][listSuggest[i].length - 1].N > targetCard.N) {
          result = listSuggest[i];
          break;
        }
        return result;
      };
      TienLenGameView.prototype.getBaDoiThong = function(card, targetCard) {
        var list = this.thisPlayer.vectorCard.slice();
        var listSuggest = this.findThreePairs(list);
        console.log("GetThreePairs: ", listSuggest);
        var result = [];
        for (var i = 0; i < listSuggest.length; i++) if (listSuggest[i].includes(card) && listSuggest[i][listSuggest[i].length - 1].N > targetCard.N) {
          result = listSuggest[i];
          break;
        }
        return result;
      };
      TienLenGameView.prototype.getBonDoiThong = function(card, targetCard) {
        var list = this.thisPlayer.vectorCard.slice();
        var listSuggest = this.findFourPairs(list);
        console.log("GetFourPairs: ", listSuggest);
        var result = [];
        for (var i = 0; i < listSuggest.length; i++) if (listSuggest[i].includes(card) && listSuggest[i][listSuggest[i].length - 1].N > targetCard.N) {
          result = listSuggest[i];
          break;
        }
        return result;
      };
      TienLenGameView.prototype.getlistSanh = function(card, typeCard, size, targetCard) {
        var list = this.thisPlayer.vectorCard.slice();
        list.sort(function(x, y) {
          var kq = x.N - y.N;
          0 === kq && (kq = x.S - y.S);
          return kq;
        });
        var listSuggest = [];
        var indexAdd = 1;
        var indexSub = 1;
        var tempCard = null;
        listSuggest.push(card);
        for (var i = 0; i < list.length; i++) {
          if (list[i].S === card.S && list[i].N === card.N + indexAdd) {
            listSuggest.push(list[i]);
            indexAdd++;
          }
          if (indexAdd === size) break;
        }
        if (indexAdd !== size) {
          list.sort(function(x, y) {
            var kq = y.N - x.N;
            0 === kq && (kq = x.S - y.S);
            return kq;
          });
          for (var i = 0; i < list.length; i++) {
            if (list[i].N === card.N - indexSub && list[i].S === card.S) {
              listSuggest.push(list[i]);
              indexSub++;
            }
            if (indexSub + indexAdd - 1 === size) {
              listSuggest.sort(function(x, y) {
                return x.N - y.N;
              });
              break;
            }
          }
        }
        if (typeCard === TYPE_CARD_TIEN_LEN.TL_SANH && (listSuggest.length !== size || listSuggest[size - 1].N < targetCard.N || listSuggest[size - 1].N === targetCard.N && listSuggest[size - 1].S < targetCard.S && targetCard.N > 5)) {
          listSuggest = [];
          listSuggest.push(card);
          var indexAdd = 1;
          var indexSub = 1;
          var tempCard = null;
          list.sort(function(x, y) {
            var kq = x.N - y.N;
            0 === kq && (kq = x.S - y.S);
            return kq;
          });
          for (var i = 0; i < list.length; i++) {
            if (list[i].N === card.N + indexAdd) {
              listSuggest.push(list[i]);
              indexAdd++;
            }
            if (indexAdd === size) {
              tempCard = list[i];
              for (var j = i + 1; j < list.length; j++) if (list[j].N === tempCard.N && list[j].S > tempCard.S) {
                tempCard = list[j];
                listSuggest.pop();
                listSuggest.push(tempCard);
              }
              break;
            }
          }
          if (indexAdd !== size) {
            list.sort(function(x, y) {
              var kq = y.N - x.N;
              0 === kq && (kq = x.S - y.S);
              return kq;
            });
            for (var i = 0; i < list.length; i++) {
              if (list[i].N === card.N - indexSub) {
                listSuggest.push(list[i]);
                indexSub++;
              }
              if (indexSub + indexAdd - 1 === size) break;
            }
          }
          if (listSuggest.length === size) {
            listSuggest.sort(function(x, y) {
              return x.N - y.N;
            });
            tempCard = listSuggest[size - 1];
            for (var i = 0; i < list.length; i++) if (list[i].N === tempCard.N && list[i].S > tempCard.S) {
              tempCard = list[i];
              listSuggest.pop();
              listSuggest.push(tempCard);
            }
          }
        }
        if (listSuggest.length !== size) {
          listSuggest = [];
          listSuggest.push(card);
        } else {
          listSuggest.sort(function(x, y) {
            return x.N - y.N;
          });
          if (listSuggest[size - 1].N < targetCard.N || listSuggest[size - 1].N === targetCard.N && listSuggest[size - 1].S < targetCard.S && targetCard.N > 5) {
            listSuggest = [];
            listSuggest.push(card);
          }
        }
        return listSuggest;
      };
      TienLenGameView.prototype.findContainsTwoCardSelected = function(listCard, card1, card2) {
        var result = [];
        cc.log("card1:", card1);
        cc.log("card2:", card2);
        for (var i = 0; i < listCard.length; i++) if (listCard[i].includes(card1) && listCard[i].includes(card2) && card1 !== card2) {
          result = listCard[i].slice();
          return result;
        }
        return result;
      };
      TienLenGameView.prototype.findThreeCards = function(_listCard) {
        var listXam = [];
        var listCard = __spreadArrays(_listCard);
        listXam.sort(function(x, y) {
          return x.N - y.N;
        });
        if (!LogicManagerTL_1.default.checkXam(_listCard)) return listXam;
        _listCard.sort(function(x, y) {
          return x.N - y.N;
        });
        for (var i = listCard.length - 1; i > 1; i--) {
          var xam = [];
          if (listCard[i].N == listCard[i - 2].N) {
            xam.push(listCard[i], listCard[i - 1], listCard[i - 2]);
            listXam.push(xam);
          }
        }
        return listXam;
      };
      TienLenGameView.prototype.findFourPairs = function(listCard) {
        var listFourPairs = [];
        var listXam = [];
        var listCardDiffFromXam = [];
        if (listCard.length < 8) return [];
        listCard.sort(function(x, y) {
          return x.N - y.N;
        });
        for (var i = 0; i < listCard.length - 2; i++) {
          var listCardCheck = listCard.slice(i, i + 3);
          if (LogicManagerTL_1.default.checkXam(listCardCheck)) {
            listXam.push(listCardCheck);
            listCard = listCard.slice(0, i).concat(listCard.slice(i + 1, listCard.length).concat(listCardCheck[0]));
            listCardDiffFromXam.push(listCardCheck[0]);
          }
        }
        for (var i = 0; i < listCard.length - 7; i++) {
          var listCardCheck = listCard.slice(i, i + 8);
          LogicManagerTL_1.default.check4DoiThongTL(listCardCheck) && listFourPairs.push(listCardCheck);
        }
        for (var k = 0; k < listCardDiffFromXam.length; k++) for (var i = 0; i < listFourPairs.length; i++) {
          var arrayCopy = listFourPairs[i].slice();
          for (var j = 0; j < arrayCopy.length; j++) if (arrayCopy[j].N == listCardDiffFromXam[k].N && arrayCopy[j].S != listCardDiffFromXam[k].S) {
            arrayCopy[j] = listCardDiffFromXam[k];
            listFourPairs.push(arrayCopy);
            break;
          }
        }
        return listFourPairs;
      };
      TienLenGameView.prototype.findThreePairs = function(listCard) {
        var listThreePairs = [];
        var listXam = [];
        var listCardDiffFromXam = [];
        if (listCard.length < 6) return [];
        listCard.sort(function(x, y) {
          return x.N - y.N;
        });
        for (var i = 0; i < listCard.length - 2; i++) {
          var listCardCheck = listCard.slice(i, i + 3);
          if (LogicManagerTL_1.default.checkXam(listCardCheck)) {
            listXam.push(listCardCheck);
            listCard = listCard.slice(0, i).concat(listCard.slice(i + 1, listCard.length).concat(listCardCheck[0]));
            listCardDiffFromXam.push(listCardCheck[0]);
          }
        }
        for (var i = 0; i < listCard.length - 5; i++) {
          var listCardCheck = listCard.slice(i, i + 6);
          LogicManagerTL_1.default.check3DoiThongTL(listCardCheck) && listThreePairs.push(listCardCheck);
        }
        for (var k = 0; k < listCardDiffFromXam.length; k++) for (var i = 0; i < listThreePairs.length; i++) {
          var arrayCopy = listThreePairs[i].slice();
          for (var j = 0; j < arrayCopy.length; j++) if (arrayCopy[j].N == listCardDiffFromXam[k].N && arrayCopy[j].S != listCardDiffFromXam[k].S) {
            arrayCopy[j] = listCardDiffFromXam[k];
            listThreePairs.push(arrayCopy);
            break;
          }
        }
        return listThreePairs;
      };
      TienLenGameView.prototype.findTwoPairs = function(listCard) {
        var listTwoPairs = [];
        var listXam = [];
        var listCardDiffFromXam = [];
        if (listCard.length < 4) return [];
        listCard.sort(function(x, y) {
          return x.N - y.N;
        });
        for (var i = 0; i < listCard.length - 2; i++) {
          var listCardCheck = listCard.slice(i, i + 3);
          if (LogicManagerTL_1.default.checkXam(listCardCheck)) {
            listXam.push(listCardCheck);
            listCard = listCard.slice(0, i).concat(listCard.slice(i + 1, listCard.length).concat(listCardCheck[0]));
            listCardDiffFromXam.push(listCardCheck[0]);
          }
        }
        for (var i = 0; i < listCard.length - 3; i++) {
          var listCardCheck = listCard.slice(i, i + 4);
          console.log("GetTwoPairs: ", LogicManagerTL_1.default.check2DoiThongTL(listCardCheck));
          console.log("GetTwoPairs: ", listCardCheck);
          LogicManagerTL_1.default.check2DoiThongTL(listCardCheck) && listTwoPairs.push(listCardCheck);
        }
        for (var k = 0; k < listCardDiffFromXam.length; k++) for (var i = 0; i < listTwoPairs.length; i++) {
          var arrayCopy = listTwoPairs[i].slice();
          for (var j = 0; j < arrayCopy.length; j++) if (arrayCopy[j].N == listCardDiffFromXam[k].N && arrayCopy[j].S != listCardDiffFromXam[k].S) {
            arrayCopy[j] = listCardDiffFromXam[k];
            listTwoPairs.push(arrayCopy);
            break;
          }
        }
        console.log("GetTwoPairs: ", listTwoPairs);
        return listTwoPairs;
      };
      TienLenGameView.prototype.findTuQuy = function(_listCard) {
        var listCard = __spreadArrays(_listCard);
        var listTuquy = [];
        if (!LogicManagerTL_1.default.checkTuQuy(listCard)) return listTuquy;
        listCard.sort(function(x, y) {
          return x.N - y.N;
        });
        for (var i = listCard.length - 1; i > 2; i--) {
          var tuquy = [];
          if (listCard[i].N === listCard[i - 3].N) {
            console.log("check tuquy: ", listCard);
            tuquy.push(listCard[i]);
            tuquy.push(listCard[i - 1]);
            tuquy.push(listCard[i - 2]);
            tuquy.push(listCard[i - 3]);
            listTuquy.push(tuquy);
          }
        }
        console.log("check tuquy2: ", listTuquy);
        return listTuquy;
      };
      TienLenGameView.prototype.findStraightCard = function(listCard) {
        listCard.sort(function(x, y) {
          var kq = x.N - y.N;
          0 === kq && (kq = x.S - y.S);
          return kq;
        });
        var result = [];
        var index = 0;
        var arraySameN = [];
        console.log("SameN sort:  ", listCard);
        for (var i = 0; i < listCard.length - 1; i++) listCard[i].N == listCard[i + 1].N && 2 !== listCard[i].N && (arraySameN.includes(listCard[i + 1].N) || arraySameN.push(listCard[i + 1]));
        while (index < listCard.length - 1) {
          var testArray = [];
          var jump = 0;
          if (2 != listCard[index].N) {
            testArray.push(listCard[index]);
            for (var i = index + 1; i < listCard.length; i++) {
              if (listCard[index].N == listCard[i].N) continue;
              testArray.push(listCard[i]);
              if (!this.checkStraightCard(testArray)) {
                testArray.pop();
                continue;
              }
            }
            if (testArray.length >= 3) {
              result.push(testArray);
              jump = testArray.length;
            }
            index + jump < listCard.length - 3 && jump > 0 ? index += jump : index++;
          } else index++;
        }
        console.log("SameN: ", arraySameN);
        console.log("SameN Result: ", result);
        for (var k = 0; k < arraySameN.length; k++) for (var i = 0; i < result.length; i++) {
          var arrayCopy = result[i].slice();
          for (var j = 0; j < arrayCopy.length; j++) if (arrayCopy[j].N == arraySameN[k].N && arrayCopy[j].S != arraySameN[k].S) {
            arrayCopy[j] = arraySameN[k];
            result.push(arrayCopy);
            break;
          }
        }
        console.log("SameN Result2: ", result);
        return result;
      };
      TienLenGameView.prototype.checkStraightCard = function(listCard) {
        for (var i = 0; i < listCard.length - 1; i++) if (listCard[i].N + 1 != listCard[i + 1].N) return false;
        return true;
      };
      TienLenGameView.prototype.onClickPass = function() {
        Windown_1.Windown.TienLen.audio.playClick();
        this.sendPass();
        this.allCardDown();
      };
      TienLenGameView.prototype.onClickBeat = function() {
        Windown_1.Windown.TienLen.audio.playClick();
        var vtCard = [];
        for (var i = 0; i < this.thisPlayer.vectorCard.length; i++) if (this.thisPlayer.vectorCard[i].isSelect) {
          cc.log("-=-==--=-=-=-=-=-==---=-=-=->>>>>>>>> Tienlen: " + this.thisPlayer.vectorCard[i].nameCard);
          vtCard.push(this.thisPlayer.vectorCard[i].code);
        }
        cc.log("-=-==--=-=-=-=-=-==---=-=-=->>>>>>>>> Tienlen size: " + vtCard.length);
        this.sendDc(vtCard);
      };
      TienLenGameView.prototype.allCardDown = function() {
        if (this.thisPlayer.vectorCard.length < 1 || !this.isAllowClickDownAllCard) return;
        var POS_CARD = this.listPosCard[0];
        for (var i = 0; i < this.thisPlayer.vectorCard.length; i++) {
          var card = this.thisPlayer.vectorCard[i];
          var posX = card.node.position.x;
          card.node.stopAllActions();
          card.node.runAction(cc.scaleTo(.4, SCALE_CARD).easing(cc.easeCubicActionOut()));
          card.node.runAction(cc.moveTo(.2, cc.v2(posX, POS_CARD.y)).easing(cc.easeCubicActionOut()));
          card.isSelect = false;
          this.numCardSelect = 0;
        }
      };
      TienLenGameView.prototype.sendDc = function(arr) {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        dataSet.putInt("pid", this.thisPlayer.id);
        dataSet.putIntArray("arr", arr);
        this.sfsObjTest = dataSet;
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("dc", this.sfsObjTest, this.roomSFS);
          cc.log("send dc:", dataSet);
          this.sfsObjTest = null;
          return;
        }
      };
      TienLenGameView.prototype.sendPass = function() {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        dataSet.putInt("pid", this.thisPlayer.id);
        this.sfsObjTest = dataSet;
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("pa", this.sfsObjTest, this.roomSFS);
          cc.log("send pa:", dataSet);
          this.sfsObjTest = null;
          this.thisPlayer.setTurn(false, 0, false, null);
          return;
        }
      };
      TienLenGameView.prototype.showSpecialCard = function(card, code, delay) {
        card.zIndex = 1e3;
        card.runAction(cc.sequence(cc.delayTime(delay), cc.spawn(cc.scaleTo(.15, .01, 1.2), cc.skewTo(.15, 0, -15)), cc.callFunc(function() {
          card.skewY = 15;
          card.getComponent("CardTL").setTextureWithCode(code);
        }), cc.spawn(cc.scaleTo(.15, 1.2), cc.skewTo(.15, 0, 0)), cc.delayTime(.1), cc.scaleTo(.2, 1).easing(cc.easeCubicActionIn()), cc.delayTime(.2)));
      };
      TienLenGameView.prototype.showBlackCover = function() {};
      TienLenGameView.prototype.hideBlackCover = function() {};
      TienLenGameView.prototype.prepareFinish = function() {
        this.bgHint.node.active = false;
        this.btnSort.node.active = false;
        this.btnPass.node.active = false;
        this.btnDiscard.node.active = false;
        this.isAllowClickDownAllCard = false;
        this.turnIdCurrent = 0;
        this.lastTurnId = 0;
        for (var i = 0; i < this.lbNumberCard.length; i++) this.lbNumberCard[i].node.active = false;
        for (var i = 0; i < this.listSpritePass.length; i++) this.listSpritePass[i].node.active = false;
        for (var i = 0; i < this.players.length; i++) {
          var player = this.players[i];
          var siC = player.vectorCard.length;
          for (var id = 0; id < siC; id++) {
            var card = player.vectorCard[id];
            card.node.active = false;
            card.isTouch = false;
          }
          player.clearVectorCardD();
        }
      };
      TienLenGameView.prototype.TienLenCardSpecial = function() {
        cc.log("!> tien len card special");
        this.aniFinish.node.active = false;
        Windown_1.Windown.updateAvatar(Windown_1.Windown.ObjToSFSObj(this.playerSpecail.info), this.avtSpecial);
        this.playerSpecail.vectorCard.sort(function(x, y) {
          var kq = x.N - y.N;
          0 === kq && (kq = x.S - y.S);
          return kq;
        });
        var posC = cc.v2(0, -170);
        posC = posC.sub(cc.v2(this.sizeCardW * DIS_CARD * SCALE_CARD * 6, 0));
        for (var i = 0; i < this.playerSpecail.vectorCard.length; i++) {
          var card = this.playerSpecail.vectorCard[i];
          cc.log("=---==-=--=-=-==-=--==--=>>> Tienlen, card xxxx: ", posC);
          this.node.addChild(card.node);
          card.setTextureWithCode(card.code);
          card.node.setPosition(posC.x, posC.y);
          card.node.zIndex = GAME_ZORDER.Z_MENU_VIEW + i;
          posC = posC.add(cc.v2(this.sizeCardW * DIS_CARD * SCALE_CARD, 0));
        }
        this.aniWinSpecial.node.active = true;
        this.aniWinSpecial.node.parent.active = true;
        this.aniWinSpecial.node.zIndex = 999;
        this.lbNameWin.string = this.playerSpecail.name;
        switch (this.playerSpecail.typeWin) {
         case 1:
          this.aniWinSpecial.setAnimation(0, "four2s", false);
          break;

         case 2:
          this.aniWinSpecial.setAnimation(0, "dragon", false);
          break;

         case 3:
          this.aniWinSpecial.setAnimation(0, "6pairs", false);
          break;

         case 4:
          this.aniWinSpecial.setAnimation(0, "four triples", false);
          break;

         case 5:
          this.aniWinSpecial.setAnimation(0, "Five consecutive", false);
          break;

         case 6:
          this.aniWinSpecial.setAnimation(0, "four3s", false);
        }
      };
      TienLenGameView.prototype.showCard = function(data) {
        this.aniWinSpecial.node.active = true;
        this.aniFinish.node.active = false;
        if (this.playerSpecail) {
          this.playerSpecail.clearAllCard();
          this.playerSpecail = null;
        }
        for (var i = 0; i < this.players.length; i++) {
          var player = this.players[i];
          var siC = player.vectorCard.length;
          var idexPos = player._indexDynamic;
          var posC = this.listPosCard[idexPos];
          if (0 === siC || player.typeWin > 0) continue;
          cc.log("Show point:", player.point);
          this.listBgScore[idexPos].node.active = true;
          this.listLbScore[idexPos].string = "" + player.point;
          0 === idexPos ? posC = posC.sub(cc.v2(this.sizeCardW * SCALE_CARD * DIS_CARD * siC / 2, 0)) : 1 !== idexPos && 2 !== idexPos || (posC = posC.sub(cc.v2(this.sizeCardW * SCALE_CARD_OTHER * .45 * (siC - 1), 0)));
          for (var id = 0; id < siC; id++) {
            var card = player.vectorCard[id];
            card.node.zIndex = GAME_ZORDER.Z_CARD + id;
            card.node.active = true;
            card.setTextureWithCode(card.code);
            card.node.setPosition(posC);
            if (player === this.thisPlayer) {
              var pos = posC.add(cc.v2(this.sizeCardW * id * SCALE_CARD * DIS_CARD + 20, 0));
              card.node.setScale(SCALE_CARD);
            } else var pos = posC.add(cc.v2(this.sizeCardW * id * SCALE_CARD_OTHER * .45, 0));
            card.node.runAction(cc.moveTo(.2, pos).easing(cc.easeCubicActionInOut()));
          }
          if (13 === siC) {
            var idSpecial = 0;
            cc.log("tienlenSpecial: ", player.id + " || " + idSpecial);
            if (player.id != data.idw) {
              this.aniChayBai[idexPos].node.active = true;
              this.aniChayBai[idexPos].setAnimation(0, "animation", true);
            }
          }
        }
      };
      TienLenGameView.prototype.showExchangeMoney = function(data) {
        var _this = this;
        for (var i = 0; i < this.players.length; i++) this.players[i].clearAllCard();
        for (var i = 0; i < this.listBgScore.length; i++) {
          this.listBgScore[i].node.active = false;
          this.aniChayBai[i].node.active = false;
        }
        for (var i = 0; i < data.length; i++) {
          var player = this.getPlayerWithId(data[i].playerId);
          if (data[i].ag - player.ag < 0) {
            cc.log("Chip lose: ", data[i].ag - player.ag);
            player === this.thisPlayer && this.audio.playEffect(this.audio.Lose);
            this.audio.playEffect(this.audio.nemxu);
            player.showEffectWinLose(-1);
            player.effectFlyMoney(data[i].ag - player.ag, 20);
            player.updateAg(data[i].ag);
            var delayT = 0;
            for (var id = 0; id < 10; id++) {
              var nodeChip = new cc.Node();
              nodeChip.addComponent(cc.Sprite);
              nodeChip.getComponent(cc.Sprite).spriteFrame = this.icon_chips;
              this.node.addChild(nodeChip);
              this.vtChipFinish.push(nodeChip);
              nodeChip.setPosition(player.node.getPosition());
              var pos = cc.v2(0, 0);
              var num1 = Math.floor(80 * Math.random()) - 40;
              var num2 = Math.floor(80 * Math.random()) - 40;
              pos = pos.add(cc.v2(num1, num2));
              var move = cc.moveTo(.25, pos).easing(cc.easeCubicActionInOut());
              var delay = cc.delayTime(delayT);
              nodeChip.runAction(cc.sequence(delay, move));
              delayT += .075;
            }
          }
        }
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
          for (var i = 0; i < data.length; i++) {
            var player = _this.getPlayerWithId(data[i].playerId);
            if (data[i].ag - player.ag > 0) {
              cc.log("Chip win: ", data[i].ag - player.ag);
              _this.audio.playEffect(_this.audio.nemxu);
              player === _this.thisPlayer && _this.audio.playEffect(_this.audio.Win);
              player.showEffectWinLose(1);
              player.effectFlyMoney(data[i].ag - player.ag);
              player.updateAg(data[i].ag);
              var delayT = 0;
              for (var id = 0; id < _this.vtChipFinish.length; id++) {
                var chip = _this.vtChipFinish[id];
                var move = cc.moveTo(.25, player.node.getPosition()).easing(cc.easeCubicActionInOut());
                var fadeOut = cc.fadeTo(.05, 0);
                var delay = cc.delayTime(delayT);
                chip.runAction(cc.sequence(delay, move, fadeOut, cc.callFunc(function() {
                  chip.active = false;
                })));
                delayT += .05;
              }
            }
          }
        })));
      };
      TienLenGameView.prototype.handleFinishGame = function() {
        for (var i = 0; i < this.players.length; i++) this.players[i].clearAllCard();
        for (var i_2 = 0; i_2 < this.vtChipFinish.length; i_2++) this.vtChipFinish[i_2].destroy();
        this.vtChipFinish = [];
        for (var i_3 = 0; i_3 < this.vtChipDenLang.length; i_3++) this.vtChipDenLang[i_3].destroy();
        this.vtChipDenLang = [];
        this.aniFinish.node.active = false;
        this.unscheduleAllCallbacks();
      };
      TienLenGameView.prototype.onClickMenuInGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prefabMenu;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.TienLen.audio.playClick();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.MenuIngame) ];

             case 1:
              prefabMenu = _a.sent();
              this.node.addChild(cc.instantiate(prefabMenu), 999);
              return [ 2 ];
            }
          });
        });
      };
      TienLenGameView.prototype.onClickQuickChat = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prefabQuickChat, nodeQuickChat;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.TienLen.audio.playClick();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.QuickChat) ];

             case 1:
              prefabQuickChat = _a.sent();
              nodeQuickChat = cc.instantiate(prefabQuickChat);
              this.node.addChild(nodeQuickChat, 999);
              this.quickChat = nodeQuickChat.getComponent("QuickChat");
              this.quickChat.init();
              return [ 2 ];
            }
          });
        });
      };
      TienLenGameView.prototype.handleChat = function(strData) {
        var data = JSON.parse(strData);
        var playerChat = this.getPlayerWithId(data.id);
        this.createChat(playerChat.node, data);
      };
      TienLenGameView.prototype.sendAutoExit = function() {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        this.sfsObjTest = dataSet;
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("autoExit", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          cc.log("send autoExit");
          return;
        }
      };
      TienLenGameView.prototype.handleChatI = function(strData) {
        var _this = this;
        var data = JSON.parse(strData);
        var playerTarget = this.getPlayerWithId(data.idt);
        var playerSend = this.getPlayerWithId(data.id);
        var item = data.idItem;
        var skeData = null;
        var spr = null;
        var audio = null;
        switch (item) {
         case 0:
          skeData = this.thisPlayer.listAnimItems[0];
          spr = this.thisPlayer.listSprItems[0];
          break;

         case 1:
          skeData = this.thisPlayer.listAnimItems[1];
          spr = this.thisPlayer.listSprItems[1];
          break;

         case 2:
          skeData = this.thisPlayer.listAnimItems[2];
          spr = this.thisPlayer.listSprItems[2];
          break;

         case 3:
          skeData = this.thisPlayer.listAnimItems[3];
          spr = this.thisPlayer.listSprItems[3];
          break;

         case 4:
          skeData = this.thisPlayer.listAnimItems[4];
          spr = this.thisPlayer.listSprItems[4];
        }
        var positionSend = playerSend.node.getPosition();
        if (playerTarget == playerSend) {
          var _loop_6 = function(i) {
            if (this_5.players[i] != playerSend) {
              var positionTarget_1 = this_5.players[i].node.getPosition();
              cc.tween(this_5.players[i].node).call(function() {
                _this.effectItem(spr, skeData, positionTarget_1, positionSend, audio);
              }).start();
            }
          };
          var this_5 = this;
          for (var i = 0; i < this.players.length; i++) _loop_6(i);
        } else {
          var positionTarget_2 = playerTarget.node.getPosition();
          cc.tween(playerTarget.node).call(function() {
            _this.effectItem(spr, skeData, positionTarget_2, positionSend, audio);
          }).start();
        }
      };
      TienLenGameView.prototype.effectItem = function(spr, skeData, positionTarget, positionSend, audio) {
        var _this = this;
        var spriteEffect = this.createSprite(spr);
        var animationEffect = this.createAnimation(skeData);
        this.node.addChild(spriteEffect.node, 999);
        this.node.addChild(animationEffect.node, 999);
        animationEffect.node.active = false;
        spriteEffect.node.setPosition(positionSend);
        animationEffect.node.setPosition(positionTarget);
        cc.tween(spriteEffect.node).to(.5, {
          position: positionTarget
        }).delay(.1).call(function() {
          spriteEffect.destroy();
        }).start();
        cc.tween(animationEffect.node).delay(.5).call(function() {
          animationEffect.node.active = true;
          animationEffect.setAnimation(0, "animation", false);
          _this.audio.playEffect(audio);
        }).delay(2).call(function() {
          animationEffect.node.destroy();
        }).start();
      };
      TienLenGameView.prototype.createAnimation = function(skeleData) {
        var animNode = new cc.Node("anim").addComponent(sp.Skeleton);
        animNode.premultipliedAlpha = false;
        animNode.skeletonData = skeleData;
        return animNode;
      };
      TienLenGameView.prototype.createSprite = function(spriteFrame) {
        var spr = new cc.Node("spr").addComponent(cc.Sprite);
        spr.spriteFrame = spriteFrame;
        return spr;
      };
      TienLenGameView.prototype.createChat = function(parent, dataChat) {
        return __awaiter(this, void 0, void 0, function() {
          var prefab, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.BubbleChat) ];

             case 1:
              prefab = _a.sent();
              node = cc.instantiate(prefab);
              node.getComponent("BubbleChat").initChat(dataChat);
              parent.addChild(node, 99);
              return [ 2 ];
            }
          });
        });
      };
      TienLenGameView.prototype.onClickRule = function() {
        Windown_1.Windown.TienLen.audio.playClick();
      };
      TienLenGameView.prototype.sendGetInfoRoomReconnect = function() {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        this.sfsObjTest = dataSet;
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("infoRoomTL", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          cc.log("send infoRoom");
          return;
        }
      };
      TienLenGameView.prototype.cleanGame = function() {
        this.node.stopAllActions();
        this.cleanTable();
        this.unscheduleAllCallbacks();
        for (var i = 0; i < this.players.length; i++) {
          this.players[i].cleanPlayerView();
          this.players[i].node.destroy();
        }
        this.players = [];
      };
      TienLenGameView.prototype.cleanTable = function() {
        for (var i = 0; i < this.players.length; i++) this.players[i].clearAllCard();
        for (var i = 0; i < 4; i++) {
          this.lbNumberCard[i].node.active = false;
          this.aniChayBai[i].node.active = false;
          this.listBgScore[i].node.active = false;
        }
        this.btnPass.node.active = false;
        this.btnDiscard.node.active = false;
        this.bgHint.node.active = false;
        this.aniCardSpecial.node.active = false;
        this.aniFinish.node.active = false;
        this.aniStartGame.node.active = false;
        this.typeSort = 2;
        this.isAllowClickDownAllCard = false;
      };
      __decorate([ property(cc.Label) ], TienLenGameView.prototype, "lbInfo", void 0);
      __decorate([ property([ cc.Vec2 ]) ], TienLenGameView.prototype, "listPosView", void 0);
      __decorate([ property([ cc.Vec2 ]) ], TienLenGameView.prototype, "listPosCard", void 0);
      __decorate([ property([ cc.Vec2 ]) ], TienLenGameView.prototype, "listPosCardDanh", void 0);
      __decorate([ property(cc.Button) ], TienLenGameView.prototype, "btnMenu", void 0);
      __decorate([ property(cc.Button) ], TienLenGameView.prototype, "btnQuickChat", void 0);
      __decorate([ property(cc.Button) ], TienLenGameView.prototype, "btnPass", void 0);
      __decorate([ property(cc.Button) ], TienLenGameView.prototype, "btnDiscard", void 0);
      __decorate([ property(cc.Label) ], TienLenGameView.prototype, "lbDiscard", void 0);
      __decorate([ property(cc.Button) ], TienLenGameView.prototype, "btnSort", void 0);
      __decorate([ property(cc.Label) ], TienLenGameView.prototype, "lbTimeStart", void 0);
      __decorate([ property([ cc.Label ]) ], TienLenGameView.prototype, "lbNumberCard", void 0);
      __decorate([ property([ cc.Sprite ]) ], TienLenGameView.prototype, "listSpritePass", void 0);
      __decorate([ property([ cc.Sprite ]) ], TienLenGameView.prototype, "listBgScore", void 0);
      __decorate([ property([ cc.Label ]) ], TienLenGameView.prototype, "listLbScore", void 0);
      __decorate([ property(cc.Sprite) ], TienLenGameView.prototype, "bgHint", void 0);
      __decorate([ property(cc.Label) ], TienLenGameView.prototype, "lbHint", void 0);
      __decorate([ property(cc.Node) ], TienLenGameView.prototype, "timerControl", void 0);
      __decorate([ property({
        visible: false,
        type: [ cc.Node ]
      }) ], TienLenGameView.prototype, "vtChipFinish", void 0);
      __decorate([ property({
        visible: false,
        type: [ cc.Node ]
      }) ], TienLenGameView.prototype, "vtChipDenLang", void 0);
      __decorate([ property(sp.Skeleton) ], TienLenGameView.prototype, "aniCardSpecial", void 0);
      __decorate([ property(sp.Skeleton) ], TienLenGameView.prototype, "aniWinSpecial", void 0);
      __decorate([ property(sp.Skeleton) ], TienLenGameView.prototype, "aniStartGame", void 0);
      __decorate([ property(sp.Skeleton) ], TienLenGameView.prototype, "aniFinish", void 0);
      __decorate([ property([ sp.Skeleton ]) ], TienLenGameView.prototype, "aniChayBai", void 0);
      __decorate([ property(cc.Label) ], TienLenGameView.prototype, "lbNameWin", void 0);
      __decorate([ property(cc.Sprite) ], TienLenGameView.prototype, "avtSpecial", void 0);
      __decorate([ property(cc.SpriteFrame) ], TienLenGameView.prototype, "icon_chips", void 0);
      __decorate([ property(cc.Prefab) ], TienLenGameView.prototype, "prefabsPlayerView", void 0);
      __decorate([ property(cc.Prefab) ], TienLenGameView.prototype, "cardPrefab", void 0);
      __decorate([ property(AudioTL_1.default) ], TienLenGameView.prototype, "audio", void 0);
      TienLenGameView = __decorate([ ccclass ], TienLenGameView);
      return TienLenGameView;
    }(cc.Component);
    exports.default = TienLenGameView;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/PathResource": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Other/MakeDelay": void 0,
    "../../../Scritps/Windown": void 0,
    "./AudioTL": "AudioTL",
    "./LogicManagerTL": "LogicManagerTL",
    "./PlayerViewTL": "PlayerViewTL"
  } ]
}, {}, [ "AudioTL", "CardTL", "LogicManagerTL", "PlayerViewTL", "TienLenGameView" ]);