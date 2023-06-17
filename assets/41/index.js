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
  "Baccarat.Assets": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3929B7DJJFJ56uustrPN2z", "Baccarat.Assets");
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
    var BaccaratAsset = function(_super) {
      __extends(BaccaratAsset, _super);
      function BaccaratAsset() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipBetTemp = null;
        _this.effectWin = null;
        _this.chipBetSprites = [];
        _this.listBetValue = [ 1, 5, 10, 50, 100, 500, 1e3, 2e3, 5e3, 1e4, 5e4, 1e5, 15e4, 2e5 ];
        _this.chipBetPool = null;
        _this.cardAtlas = null;
        _this.spriteCard = [];
        return _this;
      }
      BaccaratAsset.prototype.onLoad = function() {
        this.chipBetPool = new cc.NodePool("chipbet");
        for (var i = 39; i < 52; i++) this.spriteCard.push(this.cardAtlas.getSpriteFrame(i + ""));
        for (var i = 26; i < 39; i++) this.spriteCard.push(this.cardAtlas.getSpriteFrame(i + ""));
        for (var i = 0; i < 13; i++) this.spriteCard.push(this.cardAtlas.getSpriteFrame(i + ""));
        for (var i = 13; i < 26; i++) this.spriteCard.push(this.cardAtlas.getSpriteFrame(i + ""));
      };
      BaccaratAsset.prototype.start = function() {};
      BaccaratAsset.prototype.getCardSprite = function(id) {
        return this.spriteCard[id - 1];
      };
      BaccaratAsset.prototype.getCardBack = function() {
        return this.cardAtlas.getSpriteFrame("52");
      };
      BaccaratAsset.prototype.getEffectWin = function(value, isTie) {
        void 0 === isTie && (isTie = false);
        var efftWin = cc.instantiate(this.effectWin);
        efftWin.getChildByName("lbChipWin").getComponent(cc.Label).string = Windown_1.Windown.formatMoney(value);
        efftWin.active = true;
        return efftWin;
      };
      BaccaratAsset.prototype.getChipBet = function(value) {
        var chip = null;
        0 == this.chipBetPool.size() && this.chipBetPool.put(cc.instantiate(this.chipBetTemp));
        chip = this.chipBetPool.get();
        chip.active = true;
        chip.opacity = 255;
        chip.scale = 1;
        chip["value"] = 0;
        chip["gate"] = -1;
        chip["playerID"] = 0;
        chip["isChipPayOther"] = null;
        var indexChip = this.listBetValue.indexOf(value / 1e3);
        chip.getComponent(cc.Sprite).spriteFrame = -1 != indexChip ? this.chipBetSprites[indexChip] : this.chipBetSprites[this.chipBetSprites.length - 1];
        return chip;
      };
      __decorate([ property(cc.Node) ], BaccaratAsset.prototype, "chipBetTemp", void 0);
      __decorate([ property(cc.Node) ], BaccaratAsset.prototype, "effectWin", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], BaccaratAsset.prototype, "chipBetSprites", void 0);
      __decorate([ property(cc.SpriteAtlas) ], BaccaratAsset.prototype, "cardAtlas", void 0);
      BaccaratAsset = __decorate([ ccclass ], BaccaratAsset);
      return BaccaratAsset;
    }(cc.Component);
    exports.default = BaccaratAsset;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  "Baccarat.Audio": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ca9efPaMxHzZsWZa9sBXbH", "Baccarat.Audio");
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
    var BaccaratAudio = function(_super) {
      __extends(BaccaratAudio, _super);
      function BaccaratAudio() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgm_fs = null;
        _this.click = null;
        _this.flipCard = null;
        _this.openCard = null;
        _this.bankerWin = null;
        _this.playerWin = null;
        _this.youWin = null;
        _this.gateWinEffect = null;
        _this.dealer_startBet = null;
        _this.dealer_endBet = null;
        _this.getChip = null;
        _this.chipMoveToPlayer_turn1 = null;
        _this.chipMoveToPlayer_turn2 = null;
        _this.throwChip = null;
        _this.openPopup = null;
        _this.fsSpin = null;
        return _this;
      }
      BaccaratAudio.prototype.start = function() {};
      BaccaratAudio.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      BaccaratAudio.prototype.playMusic = function() {
        cc.log("chay vao play music " + this.isActiveMusic);
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(1);
        }
      };
      BaccaratAudio.prototype.playIndexTakeLine = function() {};
      BaccaratAudio.prototype.playSmalWin = function() {};
      BaccaratAudio.prototype.playBkgfs = function() {
        this.stopMusic();
        this.playEffect(this.bgm_fs, .6, true);
      };
      BaccaratAudio.prototype.stopBkgFs = function() {
        this.stopEffect(this.bgm_fs, true);
        this.playMusic();
      };
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "bgm_fs", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "flipCard", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "openCard", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "bankerWin", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "playerWin", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "youWin", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "gateWinEffect", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "dealer_startBet", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "dealer_endBet", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "getChip", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "chipMoveToPlayer_turn1", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "chipMoveToPlayer_turn2", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "throwChip", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "openPopup", void 0);
      __decorate([ property(cc.AudioClip) ], BaccaratAudio.prototype, "fsSpin", void 0);
      BaccaratAudio = __decorate([ ccclass ], BaccaratAudio);
      return BaccaratAudio;
    }(AudioManager_1.default);
    exports.default = BaccaratAudio;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
  } ],
  "Baccarat.BigRoad": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b11de7wPypMRIitreKWlaa4", "Baccarat.BigRoad");
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
    var BACCARAT_WIN_GATE = cc.Enum({
      PLAYER: 1,
      TIE: 2,
      BANKER: 3,
      PLAYER_PP: 14,
      PLAYER_BP: 15,
      PLAYER_PBP: 145,
      BANKER_PP: 34,
      BANKER_BP: 35,
      BANKER_PBP: 345,
      TIE_PP: 24,
      TIE_BP: 25,
      TIE_PBP: 245
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BacaratBigRoad = function(_super) {
      __extends(BacaratBigRoad, _super);
      function BacaratBigRoad() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spfBanker = null;
        _this.spfPlayer = null;
        _this.spfTieBanker = null;
        _this.spfTiePlayer = null;
        _this.spfTie_BankerWinPlayerPair = null;
        _this.spfTie_BankerWinBankerPair = null;
        _this.spfTie_PlayerWinPlayerPair = null;
        _this.spfBanker_BankerPair = null;
        _this.spfBanker_PlayerPair = null;
        _this.spfBanker_BankerPlayerPair = null;
        _this.spfPlayer_BankerPair = null;
        _this.spfPlayer_PlayerPair = null;
        _this.spfPlayer_BankerPlayerPair = null;
        _this.template = null;
        _this.container = null;
        _this.topRightPos = null;
        _this.BacaratBetSite = {
          PLAYER_PAIR: 1,
          PLAYER: 2,
          TIE: 3,
          BANKER: 4,
          BANKER_PAIR: 5
        };
        _this.dataHistory = [];
        _this.deltaXCol = 34;
        _this.deltaYRow = 34;
        _this.currentIndex = 0;
        _this.currentCol = 0;
        _this.currentPosX = 0;
        return _this;
      }
      BacaratBigRoad.prototype.start = function() {
        this.currentPosX = this.topRightPos.x;
      };
      BacaratBigRoad.prototype.setInfo = function(history) {
        for (var i = 0, l = history.length; i < l - 1; i++) {
          var arrayCol = [];
          arrayCol.push(history[i]);
          var idCheck = history[i];
          cc.log("idCheck=" + idCheck);
          var gateWinNormal = this.getGateWinNormal(idCheck);
          var isBreak = false;
          for (var j = i + 1; j < l; j++) {
            var idNext = history[j];
            var gateWinNormalIdNext = this.getGateWinNormal(idNext);
            if (gateWinNormal != BACCARAT_WIN_GATE.TIE) {
              if (gateWinNormal != gateWinNormalIdNext && gateWinNormal != BACCARAT_WIN_GATE.TIE) {
                0 != arrayCol.length && (i += arrayCol.length - 1);
                break;
              }
              arrayCol.push(idNext);
            } else idCheck = idNext;
          }
          this.dataHistory.push(arrayCol);
        }
        for (var i = 0, l = this.dataHistory.length; i < l; i++) {
          var dataCol = this.dataHistory[i].reverse();
          var indexRow = 0;
          cc.log("dataCol=", dataCol);
          for (var j = 0; j < dataCol.length; j++) {
            var data = dataCol[j];
            var gateWin = this.getGateWinNormal(data);
            if (gateWin != BACCARAT_WIN_GATE.TIE) {
              var item = cc.instantiate(this.template);
              item.parent = this.container;
              item.active = true;
              item.getChildByName("spr").getComponent(cc.Sprite).spriteFrame = this.getSpf(data);
              item.setPosition(cc.v2(this.topRightPos.x - this.deltaXCol * this.currentCol, this.topRightPos.y - this.deltaYRow * indexRow));
              this.currentIndex++;
              indexRow++;
            } else {
              cc.isValid(this.container.children[this.currentIndex - 1]) && (this.container.children[this.currentIndex - 1].getChildByName("tie").active = true);
              j == dataCol.length - 1 && this.currentCol--;
            }
          }
          this.currentCol++;
        }
      };
      BacaratBigRoad.prototype.getSpf = function(BigGateIDWin) {
        var spf = null;
        switch (BigGateIDWin) {
         case BACCARAT_WIN_GATE.BANKER:
          spf = this.spfBanker;
          break;

         case BACCARAT_WIN_GATE.BANKER_BP:
          spf = this.spfBanker_BankerPair;
          break;

         case BACCARAT_WIN_GATE.BANKER_PP:
          spf = this.spfBanker_PlayerPair;
          break;

         case BACCARAT_WIN_GATE.BANKER_PBP:
          spf = this.spfBanker_BankerPlayerPair;
          break;

         case BACCARAT_WIN_GATE.PLAYER:
          spf = this.spfPlayer;
          break;

         case BACCARAT_WIN_GATE.PLAYER_BP:
          spf = this.spfPlayer_BankerPair;
          break;

         case BACCARAT_WIN_GATE.PLAYER_PP:
          spf = this.spfPlayer_PlayerPair;
          break;

         case BACCARAT_WIN_GATE.PLAYER_PBP:
          spf = this.spfPlayer_BankerPlayerPair;
          break;

         default:
          cc.log("BigRoad:ko vao case nao ca:" + BigGateIDWin);
        }
        return spf;
      };
      BacaratBigRoad.prototype.getGateWinNormal = function(gate) {
        var gateW = 0;
        switch (gate) {
         case BACCARAT_WIN_GATE.PLAYER:
         case BACCARAT_WIN_GATE.PLAYER_BP:
         case BACCARAT_WIN_GATE.PLAYER_PP:
         case BACCARAT_WIN_GATE.PLAYER_PBP:
          gateW = BACCARAT_WIN_GATE.PLAYER;
          break;

         case BACCARAT_WIN_GATE.BANKER:
         case BACCARAT_WIN_GATE.BANKER_BP:
         case BACCARAT_WIN_GATE.BANKER_PP:
         case BACCARAT_WIN_GATE.BANKER_PBP:
          gateW = BACCARAT_WIN_GATE.BANKER;
          break;

         case BACCARAT_WIN_GATE.TIE:
         case BACCARAT_WIN_GATE.TIE_BP:
         case BACCARAT_WIN_GATE.TIE_PP:
         case BACCARAT_WIN_GATE.TIE_PBP:
          gateW = BACCARAT_WIN_GATE.TIE;
          break;

         default:
          cc.log("KO vao cAse nao getGateWinNormal:" + gate);
        }
        return gateW;
      };
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfBanker", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfPlayer", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfTieBanker", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfTiePlayer", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfTie_BankerWinPlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfTie_BankerWinBankerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfTie_PlayerWinPlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfBanker_BankerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfBanker_PlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfBanker_BankerPlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfPlayer_BankerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfPlayer_PlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratBigRoad.prototype, "spfPlayer_BankerPlayerPair", void 0);
      __decorate([ property(cc.Node) ], BacaratBigRoad.prototype, "template", void 0);
      __decorate([ property(cc.Node) ], BacaratBigRoad.prototype, "container", void 0);
      __decorate([ property(cc.Vec2) ], BacaratBigRoad.prototype, "topRightPos", void 0);
      BacaratBigRoad = __decorate([ ccclass ], BacaratBigRoad);
      return BacaratBigRoad;
    }(cc.Component);
    exports.default = BacaratBigRoad;
    cc._RF.pop();
  }, {} ],
  "Baccarat.ButtonBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "931e1pN48lEV4zRZ4h/Z0lo", "Baccarat.ButtonBet");
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
    var BaccaratButtonBet = function(_super) {
      __extends(BaccaratButtonBet, _super);
      function BaccaratButtonBet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrBtn = null;
        _this.btnX2 = null;
        _this.btnRebet = null;
        _this.btnBetB = null;
        _this.currbetBtnBet = null;
        _this.chipBorder = null;
        _this.listBetValue = [ 1, 5, 10, 50, 100, 500, 1e3, 2e3, 5e3, 1e4, 5e4, 15e4, 2e5 ];
        _this.currentBetValue = 1;
        return _this;
      }
      BaccaratButtonBet.prototype.start = function() {
        var _this = this;
        var content = this.scrBtn.content;
        content.children.forEach(function(btn, index) {
          var clickEventHandler = new cc.Component.EventHandler();
          clickEventHandler.target = _this.node;
          clickEventHandler.component = "Baccarat.ButtonBet";
          clickEventHandler.handler = "onClickBet";
          clickEventHandler.customEventData = _this.listBetValue[index] + "";
          btn.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        });
        this.currbetBtnBet.y = 10;
      };
      BaccaratButtonBet.prototype.onClickBet = function(even, data) {
        cc.log("clickbet:" + data);
        Windown_1.Windown.BaccaratView.audio.playEffect(Windown_1.Windown.BaccaratView.audio.chipMoveToPlayer_turn1);
        cc.tween(this.currbetBtnBet).to(.1, {
          y: 0
        }).start();
        this.currbetBtnBet = even.target;
        this.chipBorder.parent = this.currbetBtnBet;
        this.currentBetValue = 1e3 * parseInt(data);
        Windown_1.Windown.BaccaratView.currentBetValue = this.currentBetValue;
        cc.tween(this.currbetBtnBet).to(.1, {
          y: 10
        }).start();
      };
      BaccaratButtonBet.prototype.onClickX2 = function() {
        var totalHistoryBet = Windown_1.Windown.BaccaratView.HistoryBet.getTotalHistoryBet();
        var listGateBet = Windown_1.Windown.BaccaratView.HistoryBet.ListGateBet;
        if (2 * totalHistoryBet > Windown_1.Windown.User.userAg) {
          Windown_1.Windown.UIManager.showAlertMini("B\u1ea1n kh\xf4ng \u0111\u1ee7 ti\u1ec1n c\u01b0\u1ee3c X2!");
          return;
        }
        for (var i = 0; i < 5; i++) if (listGateBet[i] > 0) {
          Windown_1.Windown.BaccaratController.sendBet(i + 1, 2 * listGateBet[i]);
          Windown_1.Windown.BaccaratController.isCanSendData = true;
        }
        this.btnRebet.interactable = false;
        this.btnX2.interactable = false;
      };
      BaccaratButtonBet.prototype.onClickRebet = function() {
        var totalHistoryBet = Windown_1.Windown.BaccaratView.HistoryBet.getTotalHistoryBet();
        var listGateBet = Windown_1.Windown.BaccaratView.HistoryBet.ListGateBet;
        if (totalHistoryBet > Windown_1.Windown.User.userAg) {
          Windown_1.Windown.UIManager.showAlertMini("B\u1ea1n kh\xf4ng \u0111\u1ee7 ti\u1ec1n c\u01b0\u1ee3c l\u1ea1i!");
          return;
        }
        for (var i = 0; i < 5; i++) if (listGateBet[i] > 0) {
          Windown_1.Windown.BaccaratController.sendBet(i + 1, listGateBet[i]);
          Windown_1.Windown.BaccaratController.isCanSendData = true;
        }
        this.btnRebet.interactable = false;
        this.btnX2.interactable = false;
      };
      BaccaratButtonBet.prototype.onChangeListChip = function(even, data) {
        var currentOffset = this.scrBtn.getScrollOffset();
        var maxScollOffset = this.scrBtn.getMaxScrollOffset();
        "previous" == data ? currentOffset.x < 0 && cc.tween(this.scrBtn.content).to(.3, {
          x: this.scrBtn.content.x + 100
        }).start() : Math.abs(currentOffset.x) < maxScollOffset.x && cc.tween(this.scrBtn.content).to(.3, {
          x: this.scrBtn.content.x - 100
        }).start();
      };
      BaccaratButtonBet.prototype.setStatusBtnBet = function() {
        var totalHistoryBet = Windown_1.Windown.BaccaratView.HistoryBet.getTotalHistoryBet();
        cc.log("setStatusBtnBet:" + totalHistoryBet);
        if (totalHistoryBet > 0) {
          this.btnRebet.interactable = totalHistoryBet <= Windown_1.Windown.User.userAg;
          this.btnX2.interactable = 2 * totalHistoryBet < Windown_1.Windown.User.userAg;
        } else this.btnRebet.interactable = this.btnX2.interactable = false;
      };
      __decorate([ property(cc.ScrollView) ], BaccaratButtonBet.prototype, "scrBtn", void 0);
      __decorate([ property(cc.Button) ], BaccaratButtonBet.prototype, "btnX2", void 0);
      __decorate([ property(cc.Button) ], BaccaratButtonBet.prototype, "btnRebet", void 0);
      __decorate([ property(cc.Button) ], BaccaratButtonBet.prototype, "btnBetB", void 0);
      __decorate([ property(cc.Node) ], BaccaratButtonBet.prototype, "currbetBtnBet", void 0);
      __decorate([ property(cc.Node) ], BaccaratButtonBet.prototype, "chipBorder", void 0);
      BaccaratButtonBet = __decorate([ ccclass ], BaccaratButtonBet);
      return BaccaratButtonBet;
    }(cc.Component);
    exports.default = BaccaratButtonBet;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  "Baccarat.ChipBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b2c9dxWN1hHoKMW78LL6xzK", "Baccarat.ChipBet");
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
    var BaccaratChipBet = function(_super) {
      __extends(BaccaratChipBet, _super);
      function BaccaratChipBet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerID = 0;
        _this.value = 0;
        _this.gate = -1;
        return _this;
      }
      BaccaratChipBet = __decorate([ ccclass ], BaccaratChipBet);
      return BaccaratChipBet;
    }(cc.Component);
    exports.default = BaccaratChipBet;
    cc._RF.pop();
  }, {} ],
  "Baccarat.DishRoadBoard": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c845LrMoVADKOGcGrNxDL2", "Baccarat.DishRoadBoard");
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
    var BACCARAT_WIN_GATE = cc.Enum({
      PLAYER: 1,
      TIE: 2,
      BANKER: 3,
      PLAYER_PP: 14,
      PLAYER_BP: 15,
      PLAYER_PBP: 145,
      BANKER_PP: 34,
      BANKER_BP: 35,
      BANKER_PBP: 345,
      TIE_PP: 24,
      TIE_BP: 25,
      TIE_PBP: 245
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BacaratDishRoadBoard = function(_super) {
      __extends(BacaratDishRoadBoard, _super);
      function BacaratDishRoadBoard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spfBanker = null;
        _this.spfPlayer = null;
        _this.spfTie = null;
        _this.spfTie_BankerPair = null;
        _this.spfTie_PlayerPair = null;
        _this.spfTie_BankerPlayerPair = null;
        _this.spfBanker_BankerPair = null;
        _this.spfBanker_PlayerPair = null;
        _this.spfBanker_BankerPlayerPair = null;
        _this.spfPlayer_BankerPair = null;
        _this.spfPlayer_PlayerPair = null;
        _this.spfPlayer_BankerPlayerPair = null;
        _this.template = null;
        _this.container = null;
        _this.markRecentMatch = null;
        _this.history = [];
        _this.BacaratBetSite = {
          PLAYER_PAIR: 1,
          PLAYER: 2,
          TIE: 3,
          BANKER: 4,
          BANKER_PAIR: 5
        };
        return _this;
      }
      BacaratDishRoadBoard.prototype.start = function() {};
      BacaratDishRoadBoard.prototype.setInfo = function(histortyData) {
        var _this = this;
        this.history = histortyData;
        this.markRecentMatch.active = false;
        this.history.forEach(function(data, index) {
          var item = null;
          item = _this.container.childrenCount < 72 ? cc.instantiate(_this.template) : _this.container.children[_this.history.indexOf(data)];
          var BigGateIDWin = data;
          var spf = _this.getSpf(BigGateIDWin);
          item.getComponentInChildren(cc.Sprite).spriteFrame = spf;
          item.parent = _this.container;
          item.active = true;
          cc.tween(item).set({
            opacity: 0
          }).to(.3, {
            opacity: 255
          }).call(function() {
            if (index == _this.history.length - 1) {
              _this.markRecentMatch.active = true;
              cc.tween(_this.markRecentMatch).sequence(cc.tween().to(.5, {
                scale: 1
              }), cc.tween().to(.5, {
                scale: .8
              })).repeatForever().start();
            }
          }).start();
        });
      };
      BacaratDishRoadBoard.prototype.getSpf = function(BigGateIDWin) {
        var spf = null;
        switch (BigGateIDWin) {
         case BACCARAT_WIN_GATE.BANKER:
         case BACCARAT_WIN_GATE.BANKER_PP:
          spf = this.spfBanker;
          break;

         case BACCARAT_WIN_GATE.BANKER_BP:
          spf = this.spfBanker_BankerPair;
          break;

         case BACCARAT_WIN_GATE.BANKER_PBP:
          spf = this.spfBanker_BankerPlayerPair;
          break;

         case BACCARAT_WIN_GATE.PLAYER:
          spf = this.spfPlayer;
          break;

         case BACCARAT_WIN_GATE.PLAYER_BP:
          spf = this.spfPlayer_BankerPair;
          break;

         case BACCARAT_WIN_GATE.PLAYER_PP:
          spf = this.spfPlayer_PlayerPair;
          break;

         case BACCARAT_WIN_GATE.PLAYER_PBP:
          spf = this.spfPlayer_BankerPlayerPair;
          break;

         case BACCARAT_WIN_GATE.TIE:
          spf = this.spfTie;
          break;

         case BACCARAT_WIN_GATE.TIE_BP:
          spf = this.spfTie_BankerPair;
          break;

         case BACCARAT_WIN_GATE.TIE_PP:
          spf = this.spfTie_PlayerPair;
          break;

         case BACCARAT_WIN_GATE.TIE_PBP:
          spf = this.spfTie_BankerPlayerPair;
          break;

         default:
          cc.log("ko vao case nao:result= " + BigGateIDWin);
        }
        return spf;
      };
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfBanker", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfPlayer", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfTie", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfTie_BankerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfTie_PlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfTie_BankerPlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfBanker_BankerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfBanker_PlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfBanker_BankerPlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfPlayer_BankerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfPlayer_PlayerPair", void 0);
      __decorate([ property(cc.SpriteFrame) ], BacaratDishRoadBoard.prototype, "spfPlayer_BankerPlayerPair", void 0);
      __decorate([ property(cc.Node) ], BacaratDishRoadBoard.prototype, "template", void 0);
      __decorate([ property(cc.Node) ], BacaratDishRoadBoard.prototype, "container", void 0);
      __decorate([ property(cc.Node) ], BacaratDishRoadBoard.prototype, "markRecentMatch", void 0);
      BacaratDishRoadBoard = __decorate([ ccclass ], BacaratDishRoadBoard);
      return BacaratDishRoadBoard;
    }(cc.Component);
    exports.default = BacaratDishRoadBoard;
    cc._RF.pop();
  }, {} ],
  "Baccarat.HistoryBet": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6d9eFbBkZBVYxeOPA7zija", "Baccarat.HistoryBet");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaccaratHistoryBet = function() {
      function BaccaratHistoryBet() {
        this.BET_PLAYER = 0;
        this.BET_TIE = 0;
        this.BET_BANKER = 0;
        this.BET_PLAYER_P = 0;
        this.BET_BANKER_P = 0;
        this.ListGateBet = [ this.BET_PLAYER, this.BET_TIE, this.BET_BANKER, this.BET_PLAYER_P, this.BET_BANKER_P ];
      }
      BaccaratHistoryBet.prototype.resetHistory = function() {
        this.ListGateBet.forEach(function(value) {
          value = 0;
        });
      };
      BaccaratHistoryBet.prototype.getTotalHistoryBet = function() {
        var totalBet = 0;
        this.ListGateBet.forEach(function(value) {
          totalBet += value;
        });
        return totalBet;
      };
      BaccaratHistoryBet = __decorate([ ccclass ], BaccaratHistoryBet);
      return BaccaratHistoryBet;
    }();
    exports.default = BaccaratHistoryBet;
    cc._RF.pop();
  }, {} ],
  "Baccarat.HistoryMini": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "882baXqUhlKe44bJM1ERT8b", "Baccarat.HistoryMini");
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
    var BACCARAT_WIN_GATE = cc.Enum({
      PLAYER: 1,
      TIE: 2,
      BANKER: 3,
      PLAYER_PP: 14,
      PLAYER_BP: 15,
      PLAYER_PBP: 145,
      BANKER_PP: 34,
      BANKER_BP: 35,
      BANKER_PBP: 345,
      TIE_PP: 24,
      TIE_BP: 25,
      TIE_PBP: 245
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaccaratHistoryMini = function(_super) {
      __extends(BaccaratHistoryMini, _super);
      function BaccaratHistoryMini() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTotalBanker = null;
        _this.lbTotalPlayer = null;
        _this.lbTotalTie = null;
        _this.itemContainer = null;
        _this.itemTemplate = null;
        _this.markRecentMatch = null;
        _this.sprResult = [];
        _this.startPosItem = null;
        _this.spacingY = 18;
        _this.spacingX = 22;
        _this.totalBanker = 0;
        _this.totalPlayer = 0;
        _this.totalTie = 0;
        return _this;
      }
      BaccaratHistoryMini.prototype.onLoad = function() {
        this.startPosItem = cc.v2(98.26, 28.12);
      };
      BaccaratHistoryMini.prototype.start = function() {};
      BaccaratHistoryMini.prototype.setInfo = function(data, isAddItem) {
        void 0 === isAddItem && (isAddItem = false);
        data.length > 40 && (data = data.slice(0, 40));
        for (var i = 0, l = data.length; i < l; i++) {
          var item = void 0;
          var posItem = this.getPosItem(i);
          item = cc.instantiate(this.itemTemplate);
          item.parent = this.itemContainer;
          item.setPosition(posItem);
          item.active = true;
          item.setSiblingIndex(i);
          var hisNum = data[i];
          var sprRes = null;
          switch (this.getTypeGate(hisNum)) {
           case BACCARAT_WIN_GATE.BANKER:
            this.totalBanker++;
            sprRes = this.sprResult[2];
            break;

           case BACCARAT_WIN_GATE.PLAYER:
            this.totalPlayer++;
            sprRes = this.sprResult[0];
            break;

           case BACCARAT_WIN_GATE.TIE:
            this.totalTie++;
            sprRes = this.sprResult[1];
          }
          null == sprRes && cc.log(" bi null:" + hisNum + "---gate==" + this.getTypeGate(hisNum));
          item.getComponent(cc.Sprite).spriteFrame = sprRes;
        }
        this.lbTotalBanker.string = this.totalBanker + "";
        this.lbTotalPlayer.string = this.totalPlayer + "";
        this.lbTotalTie.string = this.totalTie + "";
        cc.tween(this.markRecentMatch).sequence(cc.tween().to(.5, {
          scale: 1
        }), cc.tween().to(.5, {
          scale: .8
        })).repeatForever().start();
      };
      BaccaratHistoryMini.prototype.addItemHistory = function(dataHis) {
        var _this = this;
        this.markRecentMatch.active = false;
        dataHis.length > 40 && (dataHis = dataHis.slice(0, 40));
        var firsItem = cc.instantiate(this.itemTemplate);
        firsItem.parent = this.itemContainer;
        firsItem.setSiblingIndex(0);
        firsItem.active = true;
        firsItem.setPosition(cc.v2(this.getPosItem(0).x + 100, this.getPosItem(0).y));
        var sprRes;
        switch (this.getTypeGate(dataHis[0])) {
         case BACCARAT_WIN_GATE.BANKER:
          this.totalBanker++;
          this.lbTotalBanker.string = this.totalBanker + "";
          sprRes = this.sprResult[2];
          break;

         case BACCARAT_WIN_GATE.PLAYER:
          this.totalPlayer++;
          sprRes = this.sprResult[0];
          this.lbTotalPlayer.string = this.totalPlayer + "";
          break;

         case BACCARAT_WIN_GATE.TIE:
          this.totalTie++;
          sprRes = this.sprResult[1];
          this.lbTotalTie.string = this.totalTie + "";
        }
        firsItem.getComponent(cc.Sprite).spriteFrame = sprRes;
        var _loop_1 = function(i, l) {
          var item = this_1.itemContainer.children[i];
          var posItem = this_1.getPosItem(i);
          cc.tween(item).to(.3, {
            x: posItem.x,
            y: posItem.y
          }).call(function() {
            if (i == l - 1) {
              _this.markRecentMatch.active = true;
              cc.tween(_this.markRecentMatch).sequence(cc.tween().to(.5, {
                scale: 1
              }), cc.tween().to(.5, {
                scale: .8
              })).repeatForever().start();
            }
          }).start();
        };
        var this_1 = this;
        for (var i = 0, l = dataHis.length; i < l; i++) _loop_1(i, l);
        var lastItem = this.itemContainer.children[this.itemContainer.childrenCount - 1];
        cc.tween(lastItem).to(.3, {
          x: lastItem.x - 100
        }).call(function() {
          lastItem.destroy();
        }).start();
      };
      BaccaratHistoryMini.prototype.getPosItem = function(index) {
        var posItem = cc.v2(0, 0);
        if (index < 4) posItem = cc.v2(this.startPosItem.x, this.startPosItem.y - index * this.spacingY); else {
          var indexCol = Math.floor(index / 4);
          posItem.x = this.startPosItem.x - indexCol * this.spacingX;
          posItem.y = indexCol % 2 == 0 ? this.startPosItem.y - index % 4 * this.spacingY : this.startPosItem.y - (3 - index % 4) * this.spacingY;
        }
        return posItem;
      };
      BaccaratHistoryMini.prototype.getTypeGate = function(hisNum) {
        var typeGate;
        switch (hisNum) {
         case BACCARAT_WIN_GATE.BANKER:
         case BACCARAT_WIN_GATE.BANKER_PP:
         case BACCARAT_WIN_GATE.BANKER_BP:
         case BACCARAT_WIN_GATE.BANKER_PBP:
          typeGate = BACCARAT_WIN_GATE.BANKER;
          break;

         case BACCARAT_WIN_GATE.PLAYER:
         case BACCARAT_WIN_GATE.PLAYER_PP:
         case BACCARAT_WIN_GATE.PLAYER_BP:
         case BACCARAT_WIN_GATE.PLAYER_PBP:
          typeGate = BACCARAT_WIN_GATE.PLAYER;
          break;

         case BACCARAT_WIN_GATE.TIE:
         case BACCARAT_WIN_GATE.TIE_PP:
         case BACCARAT_WIN_GATE.TIE_BP:
         case BACCARAT_WIN_GATE.TIE_PBP:
          typeGate = BACCARAT_WIN_GATE.TIE;
        }
        return typeGate;
      };
      __decorate([ property(cc.Label) ], BaccaratHistoryMini.prototype, "lbTotalBanker", void 0);
      __decorate([ property(cc.Label) ], BaccaratHistoryMini.prototype, "lbTotalPlayer", void 0);
      __decorate([ property(cc.Label) ], BaccaratHistoryMini.prototype, "lbTotalTie", void 0);
      __decorate([ property(cc.Node) ], BaccaratHistoryMini.prototype, "itemContainer", void 0);
      __decorate([ property(cc.Node) ], BaccaratHistoryMini.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Node) ], BaccaratHistoryMini.prototype, "markRecentMatch", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], BaccaratHistoryMini.prototype, "sprResult", void 0);
      BaccaratHistoryMini = __decorate([ ccclass ], BaccaratHistoryMini);
      return BaccaratHistoryMini;
    }(cc.Component);
    exports.default = BaccaratHistoryMini;
    cc._RF.pop();
  }, {} ],
  "Baccarat.MenuView": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6dda6oiz2lCWIhPjbSY5E8H", "Baccarat.MenuView");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaccaratMenuView = function(_super) {
      __extends(BaccaratMenuView, _super);
      function BaccaratMenuView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.container = null;
        return _this;
      }
      BaccaratMenuView.prototype.onLoad = function() {};
      BaccaratMenuView.prototype.start = function() {};
      BaccaratMenuView.prototype.onshow = function() {
        cc.tween(this.container).set({
          x: -cc.winSize.width / 2 - this.container.width / 2 - 50
        }).to(.3, {
          x: -cc.winSize.width / 2 + this.container.width / 2
        }, {
          easing: cc.easing.sineIn
        }).start();
      };
      BaccaratMenuView.prototype.onHide = function() {
        cc.tween(this.container).set({
          x: -cc.winSize.width / 2 + this.container.width / 2
        }).to(.3, {
          x: -cc.winSize.width / 2 - this.container.width / 2 - 50
        }, {
          easing: cc.easing.sineOut
        }).start();
      };
      BaccaratMenuView.prototype.onClickBack = function() {
        Windown_1.Windown.BaccaratView.audio.playClick();
        Windown_1.Windown.BaccaratController.onClickBackToLobby();
      };
      BaccaratMenuView.prototype.onClickRule = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prfabRule, nodeRule;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.BaccaratView.audio.playEffect(Windown_1.Windown.BaccaratView.audio.openPopup);
              return [ 4, Windown_1.Windown.BaccaratController.loadPrefabBundle("PopupRule") ];

             case 1:
              prfabRule = _a.sent();
              nodeRule = cc.instantiate(prfabRule);
              nodeRule.parent = Windown_1.Windown.BaccaratView.node;
              Windown_1.Windown.actionEffectOpen(nodeRule);
              cc.find("Container/btnClose", nodeRule).once("click", function() {
                Windown_1.Windown.actionEffectClose(nodeRule, function() {
                  nodeRule.destroy();
                });
              });
              this.onHide();
              return [ 2 ];
            }
          });
        });
      };
      BaccaratMenuView.prototype.onClickHistoryBet = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prfabHistory, nodeHistory;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.BaccaratController.loadPrefabBundle("PopupHistory") ];

             case 1:
              prfabHistory = _a.sent();
              nodeHistory = cc.instantiate(prfabHistory);
              nodeHistory.parent = Windown_1.Windown.BaccaratView.node;
              Windown_1.Windown.actionEffectOpen(nodeHistory);
              this.onHide();
              return [ 2 ];
            }
          });
        });
      };
      BaccaratMenuView.prototype.onClickSetting = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prfabSetting, nodeSetting;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.BaccaratView.audio.playEffect(Windown_1.Windown.BaccaratView.audio.openPopup);
              return [ 4, Windown_1.Windown.BaccaratController.loadPrefabBundle("PopupSetting") ];

             case 1:
              prfabSetting = _a.sent();
              nodeSetting = cc.instantiate(prfabSetting);
              nodeSetting.parent = Windown_1.Windown.BaccaratView.node;
              Windown_1.Windown.actionEffectOpen(nodeSetting);
              this.onHide();
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], BaccaratMenuView.prototype, "container", void 0);
      BaccaratMenuView = __decorate([ ccclass ], BaccaratMenuView);
      return BaccaratMenuView;
    }(cc.Component);
    exports.default = BaccaratMenuView;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  "Baccarat.Player": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad580J02flDJ5w8uubVmJFs", "Baccarat.Player");
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
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaccaratPlayer = function(_super) {
      __extends(BaccaratPlayer, _super);
      function BaccaratPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbNickName = null;
        _this.lbChips = null;
        _this.avatar = null;
        _this.lbChipWin = null;
        _this.posPayChip = [];
        _this.spineEffectWin = null;
        _this.dynamicIndex = 0;
        _this.nickname = "Player";
        _this.currentChips = 0;
        _this.id = 0;
        _this.isThisPlayer = false;
        _this.listChipBet = [];
        _this.listChipPay = [];
        _this.gateBetted = [];
        _this.effecWin = null;
        return _this;
      }
      BaccaratPlayer.prototype.start = function() {};
      BaccaratPlayer.prototype.setInfo = function(id, name, chip, idAvt) {
        this.setName(name);
        this.setId(id);
        this.setChip(chip);
        this.setAvatar(idAvt);
      };
      BaccaratPlayer.prototype.setName = function(name) {
        this.lbNickName.string = name;
        this.nickname = name;
        name.length > 10 && (this.lbNickName.string = name.slice(0, 7) + "...");
      };
      BaccaratPlayer.prototype.setChip = function(value, isFormatMoney) {
        void 0 === isFormatMoney && (isFormatMoney = true);
        this.isThisPlayer ? this.lbChips.setMoney(value, false) : this.lbChips.setMoney(value, isFormatMoney);
        this.currentChips = value;
      };
      BaccaratPlayer.prototype.setAvatar = function(idava) {
        return __awaiter(this, void 0, void 0, function() {
          var str, spFrame;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              str = PathResource_1.PathResource.Avatar.replace("%d", idava.toString());
              return [ 4, Windown_1.Windown.getSpFrameRes(str) ];

             case 1:
              spFrame = _a.sent();
              this.avatar.spriteFrame = spFrame;
              return [ 2 ];
            }
          });
        });
      };
      BaccaratPlayer.prototype.setId = function(idPl) {
        this.id = idPl;
      };
      BaccaratPlayer.prototype.getChipBet = function(nodePutChip) {
        this.listChipBet.forEach(function(chip, index) {
          var posOut = nodePutChip.parent.convertToWorldSpaceAR(nodePutChip.position);
          var posIn = chip.parent.convertToNodeSpaceAR(posOut);
          cc.tween(chip).to(1, {
            position: posIn
          }, {
            easing: cc.easing.quintOut
          }).start();
          cc.tween(chip).to(1, {
            opacity: 0
          }, {
            easing: cc.easing.sineOut
          }).start();
        });
      };
      BaccaratPlayer.prototype.showWinEffect = function(agWin, isTie) {
        void 0 === isTie && (isTie = false);
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var spineWin_1;
                var _this = this;
                return __generator(this, function(_a) {
                  try {
                    if (null == this.effecWin) {
                      this.effecWin = Windown_1.Windown.BaccaratView.assets.getEffectWin(agWin);
                      this.effecWin.y = 20;
                    }
                    spineWin_1 = this.effecWin.getComponentInChildren(sp.Skeleton);
                    spineWin_1.setCompleteListener(null);
                    this.effecWin.parent = this.node;
                    this.effecWin.active = true;
                    if (!isTie) {
                      spineWin_1.setSkin("win");
                      spineWin_1.setSlotsToSetupPose();
                      spineWin_1.setAnimation(0, "appear", false);
                      spineWin_1.setCompleteListener(function() {
                        spineWin_1.setAnimation(0, "idle", false);
                        spineWin_1.setCompleteListener(function() {
                          spineWin_1.setCompleteListener(null);
                        });
                      });
                      this.scheduleOnce(function() {
                        resolve(null);
                        _this.effecWin.active = false;
                      }, 3);
                    }
                  } catch (error) {
                    Util_1.Util.ThrowErrProsime(error);
                  }
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      BaccaratPlayer.prototype.showWinSpineEffect = function(agWin) {
        var _this = this;
        this.spineEffectWin.node.scale = 1;
        this.spineEffectWin.node.active = true;
        this.lbChipWin.string = Windown_1.Windown.formatMoney(agWin);
        this.lbChipWin.node.parent.active = true;
        this.spineEffectWin.setSkin("win");
        this.spineEffectWin.setSlotsToSetupPose();
        this.spineEffectWin.setAnimation(0, "appear", false);
        cc.tween(this.lbChipWin.node.parent).set({
          scaleX: 0
        }).to(.3, {
          scaleX: .5
        }, {
          easing: cc.easing.backOut
        }).start();
        this.spineEffectWin.setCompleteListener(function() {
          _this.spineEffectWin.setAnimation(0, "idle", false);
          _this.spineEffectWin.setCompleteListener(null);
        });
        this.scheduleOnce(function() {
          _this.hideSpineWin();
        }, 3);
      };
      BaccaratPlayer.prototype.hideSpineWin = function() {
        var _this = this;
        cc.tween(this.spineEffectWin.node).to(.2, {
          scaleX: 0
        }, {
          easing: cc.easing.backIn
        }).call(function() {
          _this.spineEffectWin.node.active = false;
        }).start();
      };
      BaccaratPlayer.prototype.showButtonBet = function() {
        this.node.getComponent(cc.Animation).play("EffectShowBtnBet");
        Windown_1.Windown.BaccaratView.buttonBetController.setStatusBtnBet();
      };
      BaccaratPlayer.prototype.hideButtonBet = function() {
        this.node.getComponent(cc.Animation).play("EffectHideBtnBet");
      };
      BaccaratPlayer.prototype.resetPlayer = function() {
        cc.log("resetPlayer");
        this.listChipBet = [];
        this.listChipPay = [];
        this.gateBetted = [];
      };
      __decorate([ property(cc.Label) ], BaccaratPlayer.prototype, "lbNickName", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratPlayer.prototype, "lbChips", void 0);
      __decorate([ property(cc.Sprite) ], BaccaratPlayer.prototype, "avatar", void 0);
      __decorate([ property(cc.Label) ], BaccaratPlayer.prototype, "lbChipWin", void 0);
      __decorate([ property([ cc.Vec2 ]) ], BaccaratPlayer.prototype, "posPayChip", void 0);
      __decorate([ property(sp.Skeleton) ], BaccaratPlayer.prototype, "spineEffectWin", void 0);
      __decorate([ property ], BaccaratPlayer.prototype, "isThisPlayer", void 0);
      BaccaratPlayer = __decorate([ ccclass ], BaccaratPlayer);
      return BaccaratPlayer;
    }(cc.Component);
    exports.default = BaccaratPlayer;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/PathResource": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  "Baccarat.PopupHistory": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12b70F/6IlPrKo5cjLpFF6w", "Baccarat.PopupHistory");
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
    var BaccaratPopupHistory = function(_super) {
      __extends(BaccaratPopupHistory, _super);
      function BaccaratPopupHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listCardPlayer = [];
        _this.listCardBanker = [];
        _this.sprGate = [];
        _this.lbSession = null;
        _this.lbScoreP = null;
        _this.lbScoreB = null;
        _this.lbPage = null;
        _this.scrItemHis = null;
        _this.itemHisTemp = null;
        _this.currentIndexSession = 0;
        _this.historyData = [];
        return _this;
      }
      BaccaratPopupHistory.prototype.onLoad = function() {
        Windown_1.Windown.BaccaratView.popupHistoryBetView = this;
        Windown_1.Windown.BaccaratView.audio.playEffect(Windown_1.Windown.BaccaratView.audio.openPopup);
      };
      BaccaratPopupHistory.prototype.start = function() {
        Windown_1.Windown.BaccaratController.sendGetHistoryBet();
      };
      BaccaratPopupHistory.prototype.setInfo = function(data) {
        this.historyData = JSON.parse(Windown_1.Windown.SFSObjToJson(data))["history"];
        this.historyData.reverse();
        cc.log("historyData===", this.historyData);
        this.setInfoSession(this.historyData[this.currentIndexSession]);
        this.lbPage.string = "1/" + this.historyData.length;
      };
      BaccaratPopupHistory.prototype.setInfoSession = function(data) {
        var _this = this;
        var sesstion = data["round"];
        var time = Windown_1.Windown.formatDate(new Date(data.time), "HH:mm:ss dd/MM/yyyy");
        this.lbSession.string = cc.js.formatStr("S\u1ed1 Phi\xean:#%s(%s)", sesstion, time);
        var vP = JSON.parse(data["vP"]);
        var vD = JSON.parse(data["vD"]);
        vP.forEach(function(carData, index) {
          if (0 != carData["I"]) {
            _this.listCardPlayer[index].node.active = true;
            _this.listCardPlayer[index].spriteFrame = Windown_1.Windown.BaccaratView.assets.getCardSprite(carData["I"]);
          }
        });
        vD.forEach(function(carData, index) {
          if (0 != carData["I"]) {
            _this.listCardBanker[index].spriteFrame = Windown_1.Windown.BaccaratView.assets.getCardSprite(carData["I"]);
            _this.listCardBanker[index].node.active = true;
          }
        });
        this.listCardBanker[2].node.active = 3 == vD.length && 0 != vD[2]["I"];
        this.listCardPlayer[2].node.active = 3 == vP.length && 0 != vP[2]["I"];
        this.lbScoreP.string = Windown_1.Windown.BaccaratView.getScore(vP, vP.length) + "";
        this.lbScoreB.string = Windown_1.Windown.BaccaratView.getScore(vD, vD.length) + "";
        this.lbPage.string = this.currentIndexSession + 1 + "/" + this.historyData.length;
        var listBet = data["bet"];
        this.scrItemHis.content.children.forEach(function(child) {
          child.active = false;
        });
        for (var i = 0; i < listBet.length; i++) {
          var bet = listBet[i];
          var item = this.scrItemHis.content.children[i];
          if (!cc.isValid(item)) {
            item = cc.instantiate(this.itemHisTemp);
            item.parent = this.scrItemHis.content;
          }
          item.active = true;
          item.getComponentInChildren(cc.Sprite).spriteFrame = this.sprGate[bet["id"] - 1];
          item.getChildByName("lbbetValue").getComponent(cc.Label).string = Windown_1.Windown.formatMoney(bet["agBet"], 1, 100);
          if (0 == bet["agWin"]) {
            item.getChildByName("lbWinValue").getComponent(cc.Label).string = "-" + Windown_1.Windown.formatMoney(bet["agBet"], 1, 100);
            item.getChildByName("lbWinValue").color = cc.Color.RED;
          } else {
            item.getChildByName("lbWinValue").color = cc.Color.GREEN;
            item.getChildByName("lbWinValue").getComponent(cc.Label).string = "+" + Windown_1.Windown.formatMoney(bet["agWin"], 1, 100);
          }
        }
      };
      BaccaratPopupHistory.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
          Windown_1.Windown.BaccaratView.popupHistoryBetView = null;
        });
        Windown_1.Windown.BaccaratView.audio.playClick();
      };
      BaccaratPopupHistory.prototype.onClickChangePage = function(even, data) {
        "next" == data ? this.currentIndexSession <= this.historyData.length - 2 && this.currentIndexSession++ : this.currentIndexSession > 0 && this.currentIndexSession--;
        this.setInfoSession(this.historyData[this.currentIndexSession]);
      };
      __decorate([ property([ cc.Sprite ]) ], BaccaratPopupHistory.prototype, "listCardPlayer", void 0);
      __decorate([ property([ cc.Sprite ]) ], BaccaratPopupHistory.prototype, "listCardBanker", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], BaccaratPopupHistory.prototype, "sprGate", void 0);
      __decorate([ property(cc.Label) ], BaccaratPopupHistory.prototype, "lbSession", void 0);
      __decorate([ property(cc.Label) ], BaccaratPopupHistory.prototype, "lbScoreP", void 0);
      __decorate([ property(cc.Label) ], BaccaratPopupHistory.prototype, "lbScoreB", void 0);
      __decorate([ property(cc.Label) ], BaccaratPopupHistory.prototype, "lbPage", void 0);
      __decorate([ property(cc.ScrollView) ], BaccaratPopupHistory.prototype, "scrItemHis", void 0);
      __decorate([ property(cc.Node) ], BaccaratPopupHistory.prototype, "itemHisTemp", void 0);
      BaccaratPopupHistory = __decorate([ ccclass ], BaccaratPopupHistory);
      return BaccaratPopupHistory;
    }(cc.Component);
    exports.default = BaccaratPopupHistory;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  "Baccarat.ScoreBoard": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcc79XVRDNDxZhD/f3VQlfC", "Baccarat.ScoreBoard");
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
    var BacaratScoreBoard = function(_super) {
      __extends(BacaratScoreBoard, _super);
      function BacaratScoreBoard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprBgItem = [];
        _this.template = null;
        _this.container = null;
        _this.topRightPos = null;
        _this.dataHistory = [];
        _this.deltaXCol = 38.85;
        _this.deltaYRow = 39.12;
        _this.currentIndex = 0;
        _this.currentCol = 0;
        _this.BacaratBetSite = {
          PLAYER_PAIR: 1,
          PLAYER: 2,
          TIE: 3,
          BANKER: 4,
          BANKER_PAIR: 5
        };
        return _this;
      }
      BacaratScoreBoard.prototype.setInfo = function(history) {
        for (var i = 0, l = history.length; i < l - 1; i++) {
          var arrayCol = [];
          var data = history[i];
          arrayCol.push(data);
          var idCheck = data["BigGateIDWin"];
          for (var j = i + 1; j < l; j++) {
            var data2 = history[j];
            var idNext = data2["BigGateIDWin"];
            if (idCheck != this.BacaratBetSite.TIE) {
              if (idCheck != idNext && idNext != this.BacaratBetSite.TIE) {
                0 != arrayCol.length && (i += arrayCol.length - 1);
                break;
              }
              arrayCol.push(data2);
            } else {
              arrayCol.push(data2);
              idCheck = data2["BigGateIDWin"];
            }
          }
          this.dataHistory.push(arrayCol);
        }
        this.dataHistory.forEach(function(data) {
          data.forEach(function(item) {
            cc.log(item["BigGateIDWin"]);
          });
        });
        for (var i = 0, l = this.dataHistory.length; i < l; i++) {
          var dataCol = this.dataHistory[i].reverse();
          var indexRow = 0;
          for (var j = 0; j < dataCol.length; j++) {
            var data = dataCol[j];
            var item = cc.instantiate(this.template);
            item.parent = this.container;
            item.active = true;
            item.getComponent(cc.Sprite).spriteFrame = this.getSpf(data["BigGateIDWin"], data["IsBankerPair"], data["IsPlayerPair"]);
            item.setPosition(cc.v2(this.topRightPos.x - this.deltaXCol * this.currentCol, this.topRightPos.y - this.deltaYRow * indexRow));
            this.currentIndex++;
            indexRow++;
            data["BigGateIDWin"] == this.BacaratBetSite.BANKER || data["BigGateIDWin"] == this.BacaratBetSite.PLAYER ? item.getChildByName("lbScoreUp").getComponent(cc.Label).string = data["HandValue"] : item.getChildByName("lbScoreDown").getComponent(cc.Label).string = data["HandValue"];
            item.position.x < -272 && (item.active = false);
          }
          this.currentCol++;
        }
      };
      BacaratScoreBoard.prototype.getSpf = function(BigGateIDWin, isBankerPair, isPlayerPair) {
        var spf = null;
        switch (BigGateIDWin) {
         case this.BacaratBetSite.BANKER:
          spf = this.sprBgItem[0];
          break;

         case this.BacaratBetSite.PLAYER:
          spf = this.sprBgItem[1];
          break;

         case this.BacaratBetSite.TIE:
          spf = this.sprBgItem[2];
        }
        return spf;
      };
      __decorate([ property([ cc.SpriteFrame ]) ], BacaratScoreBoard.prototype, "sprBgItem", void 0);
      __decorate([ property(cc.Node) ], BacaratScoreBoard.prototype, "template", void 0);
      __decorate([ property(cc.Node) ], BacaratScoreBoard.prototype, "container", void 0);
      __decorate([ property(cc.Vec2) ], BacaratScoreBoard.prototype, "topRightPos", void 0);
      BacaratScoreBoard = __decorate([ ccclass ], BacaratScoreBoard);
      return BacaratScoreBoard;
    }(cc.Component);
    exports.default = BacaratScoreBoard;
    cc._RF.pop();
  }, {} ],
  "Baccarat.SettingView": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50329oJ33tAQaFdbELw/pGK", "Baccarat.SettingView");
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
    var BaccaratSetting = function(_super) {
      __extends(BaccaratSetting, _super);
      function BaccaratSetting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tglSound = null;
        _this.tglMusic = null;
        return _this;
      }
      BaccaratSetting.prototype.start = function() {
        this.tglSound.isChecked = !Windown_1.Windown.BaccaratView.audio.isActiveSound;
        this.tglMusic.isChecked = !Windown_1.Windown.BaccaratView.audio.isActiveMusic;
      };
      BaccaratSetting.prototype.onClickTglSound = function() {
        Windown_1.Windown.BaccaratView.audio.isActiveSound = !this.tglSound.isChecked;
      };
      BaccaratSetting.prototype.onClickTglMusic = function() {
        Windown_1.Windown.BaccaratView.audio.isActiveMusic = !this.tglMusic.isChecked;
      };
      BaccaratSetting.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
        Windown_1.Windown.BaccaratView.audio.playClick();
      };
      __decorate([ property(cc.Toggle) ], BaccaratSetting.prototype, "tglSound", void 0);
      __decorate([ property(cc.Toggle) ], BaccaratSetting.prototype, "tglMusic", void 0);
      BaccaratSetting = __decorate([ ccclass ], BaccaratSetting);
      return BaccaratSetting;
    }(cc.Component);
    exports.default = BaccaratSetting;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  "Baccarat.SoiCauView": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "724422/HvZHeoMg/O8YPLNr", "Baccarat.SoiCauView");
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
    var Baccarat_BigRoad_1 = require("./Baccarat.BigRoad");
    var Baccarat_DishRoadBoard_1 = require("./Baccarat.DishRoadBoard");
    var Baccarat_ScoreBoard_1 = require("./Baccarat.ScoreBoard");
    var BACCARAT_WIN_GATE = cc.Enum({
      PLAYER: 1,
      TIE: 2,
      BANKER: 3,
      PLAYER_PP: 14,
      PLAYER_BP: 15,
      PLAYER_PBP: 145,
      BANKER_PP: 34,
      BANKER_BP: 35,
      BANKER_PBP: 345,
      TIE_PP: 24,
      TIE_BP: 25,
      TIE_PBP: 245
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaccaratSoiCauView = function(_super) {
      __extends(BaccaratSoiCauView, _super);
      function BaccaratSoiCauView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbBankerWin = null;
        _this.lbPlayerWin = null;
        _this.lbTie = null;
        _this.lbBankerPair = null;
        _this.lbPlayerPair = null;
        _this.lbBankerPercent = null;
        _this.lbPlayerPercent = null;
        _this.lbTiePercent = null;
        _this.lbBankerPairPercent = null;
        _this.lbPlayerPairPercent = null;
        _this.dishRoad = null;
        _this.bigRoad = null;
        _this.scoreBoard = null;
        _this.animation = null;
        _this.listDataBankerWin = [];
        _this.listDataPlayerWin = [];
        _this.listDataTie = [];
        _this.listDataBankerPair = [];
        _this.listDataPlayerPair = [];
        _this.dataHistory = [];
        return _this;
      }
      BaccaratSoiCauView.prototype.start = function() {};
      BaccaratSoiCauView.prototype.setInfo = function() {
        this.dataHistory = Windown_1.Windown.BaccaratView.historyTable.slice(0, 72);
        this.listDataBankerWin = this.dataHistory.filter(function(data) {
          return data == BACCARAT_WIN_GATE.BANKER;
        });
        this.listDataPlayerWin = this.dataHistory.filter(function(data) {
          return data == BACCARAT_WIN_GATE.PLAYER;
        });
        this.listDataTie = this.dataHistory.filter(function(data) {
          return data == BACCARAT_WIN_GATE.TIE;
        });
        this.listDataBankerPair = this.dataHistory.filter(function(data) {
          return data == BACCARAT_WIN_GATE.PLAYER_BP || data == BACCARAT_WIN_GATE.BANKER_BP || data == BACCARAT_WIN_GATE.TIE_BP;
        });
        this.listDataPlayerPair = this.dataHistory.filter(function(data) {
          return data == BACCARAT_WIN_GATE.PLAYER_PP || data == BACCARAT_WIN_GATE.BANKER_PP || data == BACCARAT_WIN_GATE.TIE_PP;
        });
        this.lbBankerWin.string = this.listDataBankerWin.length + "";
        this.lbPlayerWin.string = this.listDataPlayerWin.length + "";
        this.lbBankerWin.string = this.listDataBankerWin.length + "";
        this.lbTie.string = this.listDataTie.length + "";
        this.lbBankerPair.string = this.listDataBankerPair.length + "";
        this.lbPlayerPair.string = this.listDataPlayerPair.length + "";
        this.lbBankerPercent.string = (this.listDataBankerWin.length / this.dataHistory.length * 100).toFixed(2) + "%";
        this.lbPlayerPercent.string = (this.listDataPlayerWin.length / this.dataHistory.length * 100).toFixed(2) + "%";
        this.lbTiePercent.string = (this.listDataTie.length / this.dataHistory.length * 100).toFixed(2) + "%";
        this.lbBankerPairPercent.string = (this.listDataBankerPair.length / this.dataHistory.length * 100).toFixed(2) + "%";
        this.lbPlayerPairPercent.string = (this.listDataPlayerPair.length / this.dataHistory.length * 100).toFixed(2) + "%";
        this.dishRoad.setInfo(Windown_1.Windown.BaccaratView.historyTable.slice(0, 72));
        this.bigRoad.setInfo(Windown_1.Windown.BaccaratView.historyTable.slice(0, 72));
        cc.log("Windown.BaccaratView.historyTable size=" + Windown_1.Windown.BaccaratView.historyTable.length);
      };
      BaccaratSoiCauView.prototype.onEnable = function() {
        this.setInfo();
      };
      BaccaratSoiCauView.prototype.show = function() {
        this.node.active = true;
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      BaccaratSoiCauView.prototype.hide = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbBankerWin", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbPlayerWin", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbTie", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbBankerPair", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbPlayerPair", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbBankerPercent", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbPlayerPercent", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbTiePercent", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbBankerPairPercent", void 0);
      __decorate([ property(cc.Label) ], BaccaratSoiCauView.prototype, "lbPlayerPairPercent", void 0);
      __decorate([ property(Baccarat_DishRoadBoard_1.default) ], BaccaratSoiCauView.prototype, "dishRoad", void 0);
      __decorate([ property(Baccarat_BigRoad_1.default) ], BaccaratSoiCauView.prototype, "bigRoad", void 0);
      __decorate([ property(Baccarat_ScoreBoard_1.default) ], BaccaratSoiCauView.prototype, "scoreBoard", void 0);
      __decorate([ property(cc.Animation) ], BaccaratSoiCauView.prototype, "animation", void 0);
      BaccaratSoiCauView = __decorate([ ccclass ], BaccaratSoiCauView);
      return BaccaratSoiCauView;
    }(cc.Component);
    exports.default = BaccaratSoiCauView;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0,
    "./Baccarat.BigRoad": "Baccarat.BigRoad",
    "./Baccarat.DishRoadBoard": "Baccarat.DishRoadBoard",
    "./Baccarat.ScoreBoard": "Baccarat.ScoreBoard"
  } ],
  BaccaratController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d65e4chFb9JX5TYXArxHQ4s", "BaccaratController");
    "use strict";
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
    var EVENT_MANAGER_1 = require("../../../Scritps/DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../Scritps/Windown");
    var BaccaratController = function() {
      function BaccaratController() {
        this.sfs = null;
        this.roomSFS = null;
        this.listTimeOut = [];
        this.objFinish = null;
        this.gameType = 0;
        this.isCanSendData = true;
        this.joinRoomData = null;
        this.infoRoom = null;
        this.startGameData = null;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        Windown_1.Windown.BaccaratController = this;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
      }
      BaccaratController.prototype.onDisconnect = function() {
        this.clear();
        this.baccaratView.node.destroy();
      };
      BaccaratController.prototype.clear = function() {
        cc.systemEvent.targetOff(this);
        this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr);
        this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse);
        if (this.objFinish) {
          var agWin = this.objFinish.get("agWin");
          Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
        }
        Windown_1.Windown.MoneyUser.endGameMOney(this.gameType);
      };
      BaccaratController.prototype.userExitRoom = function(event) {
        var room = event.room;
        if ("Baccarat" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            this.onDestroy();
            cc.director.loadScene("main");
            return;
          }
        }
      };
      BaccaratController.prototype.onCreateError = function(event) {
        cc.log("creat err");
        Windown_1.Windown.UIManager.hideLoading();
        this.onDestroy();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      BaccaratController.prototype.onDestroy = function() {
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.UIManager.hideLoading();
        cc.systemEvent.removeAll(this);
        this.clearAllTimeOut();
        this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr);
        this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse);
        Windown_1.Windown.BaccaratController = null;
        this.roomSFS = null;
        Windown_1.Windown.MoneyUser.targetOff(this);
        Windown_1.Windown.MoneyUser.endGameMOney(GAME_TYPE_1.default.Baccarat);
      };
      BaccaratController.prototype.clearAllTimeOut = function() {
        this.listTimeOut.forEach(function(v) {
          clearTimeout(v);
        });
      };
      BaccaratController.prototype.onJoinRoom = function(event) {
        return __awaiter(this, void 0, void 0, function() {
          var room;
          return __generator(this, function(_a) {
            room = event.room;
            Windown_1.Windown.UIManager.hideLoadingData();
            return [ 2 ];
          });
        });
      };
      BaccaratController.prototype.onJoinRoomErr = function(event) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        this.onDestroy();
      };
      BaccaratController.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        cc.log("Baccarat Code:" + code + "\n" + Windown_1.Windown.SFSObjToJson(SFSObject));
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.BCRPlayerInfo:
          this.baccaratView.handlePlayerInfo(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCRInfoRoom:
          this.baccaratView.handleRoomInfo(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCRStartGame:
          null == this.baccaratView ? this.startGameData = SFSObject : this.baccaratView.handleStartGame(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCRBet:
          cc.log("handlePlayerbet");
          this.baccaratView.handlePlayerBet(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCREndGame:
          this.baccaratView.handleEndGame(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCRHistoryBet:
          this.baccaratView.popupHistoryBetView.setInfo(SFSObject);
        }
      };
      BaccaratController.prototype.sendJoinRoom = function() {
        var _this = this;
        Windown_1.Windown.UIManager.showLoading();
        var rooms = this.sfs.roomManager.getRoomListFromGroup("Baccarat");
        var room = rooms.find(function(roomTemp) {
          cc.log("value" + roomTemp.getVariable("cj").value);
          return roomTemp.containsVariable("cj") && roomTemp.getVariable("cj").value;
        });
        if (room) {
          this.roomSFS = room;
          if (room.isJoined) this.sendGetInfoRoom(); else {
            cc.log("nhay vao send join rom: " + room);
            this.sfs.send(new SFS2X.JoinRoomRequest(room, null, -1));
          }
        } else setTimeout(function() {
          _this.sendJoinRoom();
        }, 3e3);
      };
      BaccaratController.prototype.sendGetInfoRoom = function() {
        this.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXinfoRoom, ConectManager_1.ConectManager.getIns().getSFSObj());
      };
      BaccaratController.prototype.sendRequest = function(code, sfsObj) {
        ConectManager_1.ConectManager.getIns().sendRequest(code, sfsObj, this.roomSFS);
      };
      BaccaratController.prototype.sendToServer = function(event, data) {
        if (!this.isCanSendData || null == this.roomSFS) return;
        this.isCanSendData = false;
        ConectManager_1.ConectManager.getIns().sendRequest(event, data, this.roomSFS);
      };
      BaccaratController.prototype.sendBet = function(gateId, vaueBet) {
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putLong("bet", vaueBet);
        obj.putInt("id", gateId);
        this.sendToServer("bet", obj);
      };
      BaccaratController.prototype.intiGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var bundle;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.Baccarat.toString()) ];

             case 1:
              bundle = _a.sent();
              Windown_1.Windown.UIManager.showLoadingData();
              bundle.preloadScene("Baccarat", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                bundle.loadScene("Baccarat", function(err, scence) {
                  if (err) {
                    Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                    Windown_1.Windown.UIManager.hideLoadingData();
                    return;
                  }
                  cc.director.runScene(scence, null, function() {
                    Windown_1.Windown.UIManager.hideLoadingData();
                  });
                });
              });
              return [ 2 ];
            }
          });
        });
      };
      BaccaratController.prototype.onClickBackToLobby = function() {
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      BaccaratController.prototype.loadPrefabBundle = function(name) {
        return __awaiter(this, void 0, void 0, function() {
          var baccaratBundle;
          return __generator(this, function(_a) {
            baccaratBundle = cc.assetManager.getBundle(GAME_TYPE_1.default.Baccarat.toString());
            return [ 2, new Promise(function(resolve, reject) {
              baccaratBundle.load("Prefab/" + name, function(err, pref) {
                if (err) {
                  reject(err);
                  return null;
                }
                resolve(pref);
              });
            }) ];
          });
        });
      };
      BaccaratController.prototype.sendGetHistoryBet = function() {
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        this.sendToServer("historyBetBa", obj);
        Windown_1.Windown.BaccaratController.isCanSendData = true;
      };
      return BaccaratController;
    }();
    exports.default = BaccaratController;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  BaccaratView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91133cyz0FNj4WIQhDdRhjP", "BaccaratView");
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
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var MakeDelay_1 = require("../../../Scritps/Other/MakeDelay");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var Baccarat_Assets_1 = require("./Baccarat.Assets");
    var Baccarat_Audio_1 = require("./Baccarat.Audio");
    var Baccarat_ButtonBet_1 = require("./Baccarat.ButtonBet");
    var Baccarat_HistoryBet_1 = require("./Baccarat.HistoryBet");
    var Baccarat_HistoryMini_1 = require("./Baccarat.HistoryMini");
    var Baccarat_MenuView_1 = require("./Baccarat.MenuView");
    var Baccarat_Player_1 = require("./Baccarat.Player");
    var Baccarat_PopupHistory_1 = require("./Baccarat.PopupHistory");
    var Baccarat_SoiCauView_1 = require("./Baccarat.SoiCauView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BACCARAT_GATE = cc.Enum({
      PLAYER: 1,
      TIE: 2,
      BANKER: 3,
      PLAYER_PAIR: 4,
      BANKER_PAIR: 5
    });
    var BACCARAT_WIN_GATE = cc.Enum({
      PLAYER: 1,
      TIE: 2,
      BANKER: 3,
      PLAYER_PP: 14,
      PLAYER_BP: 15,
      PLAYER_PBP: 145,
      BANKER_PP: 34,
      BANKER_BP: 35,
      BANKER_PBP: 345,
      TIE_PP: 24,
      TIE_BP: 25,
      TIE_PBP: 245
    });
    var GAME_STATE = cc.Enum({
      BETTING: 1,
      FINISHED: 2,
      WAITTING: 3
    });
    var BaccaratView = function(_super) {
      __extends(BaccaratView, _super);
      function BaccaratView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.players = [];
        _this.thisPlayer = null;
        _this.assets = null;
        _this.menu = null;
        _this.buttonBetController = null;
        _this.historyMini = null;
        _this.popupHistoryBetView = null;
        _this.audio = null;
        _this.popupSoiCau = null;
        _this.nodeGroupUser = null;
        _this.nodeGateBet = [];
        _this.listCardPlayer = [];
        _this.listCardBanker = [];
        _this.nodeGetChip = null;
        _this.lbOtherPlayer = null;
        _this.lbTimer = null;
        _this.lbWaitting = null;
        _this.lbSession = null;
        _this.sprTimer = null;
        _this.lbScoreP = null;
        _this.lbScoreB = null;
        _this.lbTotalBet = null;
        _this.animDealer = null;
        _this.animWinResult = null;
        _this.posPayChipOther = [];
        _this.lbTotalBetB = null;
        _this.lbTotalBetP = null;
        _this.lbTotalBetT = null;
        _this.lbTotalBetBP = null;
        _this.lbTotalBetPP = null;
        _this.listPosChipOnTable = [];
        _this.lbTotalGateBetUser = [];
        _this.effectWinOther = null;
        _this.currentTimer = 60;
        _this.totalBetB = 0;
        _this.totalBetP = 0;
        _this.totalBetBP = 0;
        _this.totalBetPP = 0;
        _this.totalBetT = 0;
        _this.totalBetAllGate = 0;
        _this.agUser = 0;
        _this.currentBetValue = 1e3;
        _this.listTotalBetValue = null;
        _this.listTotalUserBetGate = null;
        _this.listDataPlayerOther = [];
        _this.listLbTotalBet = [];
        _this.gateWin = null;
        _this.gameState = GAME_STATE.BETTING;
        _this.listValueChip = [ .1, 1, 5, 10, 50, 100, 500, 1e3, 2e3, 5e3, 1e4, 5e4, 1e5, 15e4, 2e5 ];
        _this.lastPlayerInfoData = null;
        _this.makeDelay = null;
        _this.infoCardOnTable_Player = [];
        _this.infoCardOnTable_Banker = [];
        _this.listChipBet = [];
        _this.listChipbetOther = [];
        _this.listBtnBet = [];
        _this.isResetView = false;
        _this.isReconnect = false;
        _this.listGateWin = [];
        _this.HistoryBet = null;
        _this.historyTable = [];
        _this.timeInBg = 0;
        return _this;
      }
      BaccaratView.prototype.onLoad = function() {
        var _this = this;
        this.HistoryBet = new Baccarat_HistoryBet_1.default();
        this.players.forEach(function(player, index) {
          index > 0 && (player.node.active = false);
        });
        this.nodeGateBet.forEach(function(btn) {
          _this.listBtnBet.push(btn.getComponent(cc.Button));
        });
        for (var i = 0, l = this.listValueChip.length; i < l; i++) this.listValueChip[i] *= 1e3;
        for (var i = 0; i < 3; i++) {
          var cardPlayer = this.listCardPlayer[i];
          var dataPlayer = {
            scaleX: cardPlayer.scaleX,
            scaleY: cardPlayer.scaleY,
            position: cardPlayer.position,
            angle: cardPlayer.angle,
            skew: cc.v2(cardPlayer.skewX, cardPlayer.skewY)
          };
          this.infoCardOnTable_Player.push(dataPlayer);
          var cardBanker = this.listCardBanker[i];
          var dataBanker = {
            scaleX: cardBanker.scaleX,
            scaleY: cardBanker.scaleY,
            position: cardBanker.position,
            angle: cardBanker.angle,
            skew: cc.v2(cardBanker.skewX, cardBanker.skewY)
          };
          this.infoCardOnTable_Banker.push(dataBanker);
        }
        this.listTotalBetValue = [ this.totalBetP, this.totalBetT, this.totalBetB, this.totalBetPP, this.totalBetBP ];
        this.listTotalUserBetGate = [ 0, 0, 0, 0, 0 ];
        this.listLbTotalBet = [ this.lbTotalBetP, this.lbTotalBetT, this.lbTotalBetB, this.lbTotalBetPP, this.lbTotalBetBP ];
        Windown_1.Windown.BaccaratController.baccaratView = this;
        Windown_1.Windown.BaccaratView = this;
        this.makeDelay = new MakeDelay_1.default(this);
      };
      BaccaratView.prototype.start = function() {
        Windown_1.Windown.BaccaratController.sendJoinRoom();
        this.audio.playMusic();
        if (null != Windown_1.Windown.BaccaratController.startGameData) {
          this.handleStartGame(Windown_1.Windown.BaccaratController.startGameData);
          Windown_1.Windown.BaccaratController.startGameData = null;
        }
        this.setupTimeRunInBg();
      };
      BaccaratView.prototype.getMakeDelay = function(time) {
        return this.makeDelay.getDelay(time);
      };
      BaccaratView.prototype.handlePlayerInfo = function(data) {
        if (this.gameState == GAME_STATE.FINISHED) {
          this.lastPlayerInfoData = data;
          return;
        }
        this.listDataPlayerOther = [];
        var listPlayer = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("data")));
        var thisPldata = listPlayer.find(function(dataPl) {
          return dataPl["id"] == Windown_1.Windown.User.userId;
        });
        if (null != thisPldata) {
          cc.log("Co this player trong listPlayer, xoa no di");
          listPlayer.splice(listPlayer.indexOf(thisPldata), 1);
        }
        if (7 == listPlayer.length) {
          this.listDataPlayerOther.push(listPlayer.pop());
          cc.log("Co 7 player trong listPlayer, xoa 1 thang  di:" + listPlayer.length);
        }
        this.thisPlayer.setAvatar(Windown_1.Windown.User.avatrId);
        this.thisPlayer.setName(Windown_1.Windown.User.nickName);
        this.thisPlayer.setChip(Windown_1.Windown.User.userAg, false);
        this.thisPlayer.setId(Windown_1.Windown.User.userId);
        this.agUser = Windown_1.Windown.User.userAg;
        var indexPlayer = 1;
        for (var i = 0, l = listPlayer.length; i < l; i++) {
          var dataPl = listPlayer[i];
          var player = this.players[indexPlayer];
          if (cc.isValid(player) && player != this.thisPlayer) {
            player.node.active = true;
            player.resetPlayer();
            player.setInfo(dataPl["id"], dataPl["nn"], dataPl["ag"], dataPl["iv"]);
            indexPlayer++;
          } else cc.error(" ko du player de hien thi");
        }
        for (var i = indexPlayer; i < this.players.length; i++) {
          this.players[i].node.active = false;
          this.players[i].resetPlayer();
        }
        this.lbOtherPlayer.string = data.getInt("so") + this.listDataPlayerOther.length + "";
      };
      BaccaratView.prototype.handleRoomInfo = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          var isGame, currenBetInfo, firstHistory, vP, vD, i, card, i, card, currenBetInfo_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.hideLoading();
              this.currentTimer = data.getInt("time");
              this.sprTimer.fillRange = this.currentTimer / 30;
              this.lbSession.string = "#" + data.getInt("sision");
              isGame = data.getBool("isG");
              currenBetInfo = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("cur")));
              this.gameState = isGame ? GAME_STATE.BETTING : GAME_STATE.FINISHED;
              this.historyTable = JSON.parse(data.get("his")).reverse();
              firstHistory = this.historyTable[0];
              this.gameState == GAME_STATE.FINISHED && this.currentTimer > 15 && this.historyTable.splice(0, 1);
              this.historyMini.setInfo(this.historyTable);
              this.setStateBtnGate(this.gameState == GAME_STATE.BETTING);
              this.gameState == GAME_STATE.BETTING ? this.onCountTimeRemain() : this.onCountWaitting();
              if (!(this.gameState == GAME_STATE.BETTING)) return [ 3, 1 ];
              this.thisPlayer.showButtonBet();
              this.setCurBetInfo(currenBetInfo);
              return [ 3, 9 ];

             case 1:
              Windown_1.Windown.UIManager.showAlertMini("Vui l\xf2ng ch\u1edd  v\xe1n ch\u01a1i k\u1ebft th\xfac!");
              if (!(this.currentTimer > 15)) return [ 3, 9 ];
              vP = JSON.parse(data.getUtfString("vP"));
              vD = JSON.parse(data.getUtfString("vD"));
              cc.log(" Card  Player = ", vP);
              cc.log(" Card  Banker = ", vD);
              for (i = 0; i < vP.length; i++) {
                card = this.listCardPlayer[i];
                card.active = true;
                card.getComponent(cc.Sprite).spriteFrame = this.assets.getCardSprite(vP[i]["I"]);
                card.opacity = 255;
                card.scaleX = this.infoCardOnTable_Player[i].scaleX;
                card.scaleY = this.infoCardOnTable_Player[i].scaleY;
                card.angle = this.infoCardOnTable_Player[i].angle;
                card.skewX = this.infoCardOnTable_Player[i].skew.x;
                card.skewY = this.infoCardOnTable_Player[i].skew.y;
                card.position = this.infoCardOnTable_Player[i].position;
              }
              for (i = 0; i < vD.length; i++) {
                card = this.listCardBanker[i];
                card.active = true;
                card.getComponent(cc.Sprite).spriteFrame = this.assets.getCardSprite(vD[i]["I"]);
                card.opacity = 255;
                card.scaleX = this.infoCardOnTable_Banker[i].scaleX;
                card.scaleY = this.infoCardOnTable_Banker[i].scaleY;
                card.angle = this.infoCardOnTable_Banker[i].angle;
                card.skewX = this.infoCardOnTable_Banker[i].skew.x;
                card.skewY = this.infoCardOnTable_Banker[i].skew.y;
                card.position = this.infoCardOnTable_Banker[i].position;
              }
              currenBetInfo_1 = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("cur")));
              this.setCurBetInfo(currenBetInfo_1);
              return [ 4, Windown_1.Windown.BaccaratView.getMakeDelay(.5).prosime ];

             case 2:
              _a.sent();
              this.listGateWin = [];
              currenBetInfo_1.forEach(function(betInfo) {
                betInfo["w"] && _this.listGateWin.push(betInfo["id"]);
              });
              this.showScore(BACCARAT_GATE.BANKER, vD, 2 == vD.length);
              this.showScore(BACCARAT_GATE.PLAYER, vP, 2 == vP.length);
              return [ 4, Windown_1.Windown.BaccaratView.getMakeDelay(1.5).prosime ];

             case 3:
              _a.sent();
              this.gateWin = parseInt(this.listGateWin.toString().split(",").join(""));
              return [ 4, this.showWinResult() ];

             case 4:
              _a.sent();
              this.getAllChipOnTable();
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 5:
              _a.sent();
              this.payChipWinOnTalbe();
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 6:
              _a.sent();
              this.moveChipToPlayer();
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 7:
              _a.sent();
              return [ 4, this.showResultAgWinReconnect(currenBetInfo_1) ];

             case 8:
              _a.sent();
              this.historyTable.unshift(firstHistory);
              this.resetView();
              _a.label = 9;

             case 9:
              return [ 2 ];
            }
          });
        });
      };
      BaccaratView.prototype.setCurBetInfo = function(currenBetInfo) {
        for (var i = 0; i < currenBetInfo.length; i++) {
          var dataBet = currenBetInfo[i];
          var gateBet = dataBet["id"];
          var listBet = dataBet["b"];
          for (var i_1 = 0; i_1 < listBet.length; i_1++) {
            var valueBet = listBet[i_1]["bet"];
            var playerBet = this.getPlayerWithId(listBet[i_1]["idP"]);
            var listChipBet = this.getListChipValue(valueBet);
            for (var i_2 = 0, l = listChipBet.length; i_2 < l; i_2++) {
              var chipbet = this.assets.getChipBet(listChipBet[i_2]);
              if (cc.isValid(playerBet)) {
                if (playerBet.id == Windown_1.Windown.User.userId) {
                  this.totalBetAllGate += valueBet;
                  this.listTotalUserBetGate[gateBet - 1] += valueBet;
                  this.lbTotalBet.setMoney(this.totalBetAllGate, true);
                  this.lbTotalGateBetUser[gateBet - 1].string = Windown_1.Windown.formatMoney(this.listTotalUserBetGate[gateBet - 1]);
                  this.lbTotalGateBetUser[gateBet - 1].node.parent.active = true;
                }
                playerBet.listChipBet.push(chipbet);
                chipbet["playerID"] = playerBet.id;
              } else {
                this.listChipbetOther.push(chipbet);
                chipbet["playerID"] = -1;
              }
              this.listChipBet.push(chipbet);
              chipbet.parent = this.nodeGateBet[gateBet - 1];
              chipbet["gate"] = gateBet;
              chipbet["value"] = listChipBet[i_2];
              var deltaRandom = gateBet > 3 ? 20 : 30;
              var ranPosX = Windown_1.Windown.RandomNumber(this.listPosChipOnTable[gateBet - 1].x - deltaRandom, this.listPosChipOnTable[gateBet - 1].x + deltaRandom);
              var ranPosY = Windown_1.Windown.RandomNumber(this.listPosChipOnTable[gateBet - 1].y - deltaRandom, this.listPosChipOnTable[gateBet - 1].y + deltaRandom);
              chipbet.setPosition(cc.v2(ranPosX, ranPosY));
            }
          }
          switch (gateBet) {
           case BACCARAT_GATE.BANKER:
            this.totalBetB = dataBet["t"];
            break;

           case BACCARAT_GATE.PLAYER:
            this.totalBetP = dataBet["t"];
            break;

           case BACCARAT_GATE.BANKER_PAIR:
            this.totalBetBP = dataBet["t"];
            break;

           case BACCARAT_GATE.PLAYER_PAIR:
            this.totalBetPP = dataBet["t"];
            break;

           case BACCARAT_GATE.TIE:
            this.totalBetT = dataBet["t"];
          }
          this.lbTotalBetB.setMoney(this.totalBetB, true);
          this.lbTotalBetP.setMoney(this.totalBetP, true);
          this.lbTotalBetBP.setMoney(this.totalBetBP, true);
          this.lbTotalBetPP.setMoney(this.totalBetPP, true);
          this.lbTotalBetT.setMoney(this.totalBetT, true);
        }
      };
      BaccaratView.prototype.handleStartGame = function(data) {
        cc.log("handleStartGame");
        this.audio.playEffect(this.audio.dealer_startBet);
        this.setStateBtnGate(true);
        this.isResetView = false;
        this.lbSession.string = "#" + data.getInt("sision");
        this.currentTimer = data.getInt("time");
        this.lbTimer.string = this.currentTimer + "";
        this.sprTimer.fillRange = 1;
        this.onCountTimeRemain();
        this.setDealerAnim("Start_Bet", false);
        this.thisPlayer.showButtonBet();
      };
      BaccaratView.prototype.handlePlayerBet = function(data) {
        var idPl = data.getInt("pid");
        this.audio.playEffect(this.audio.throwChip);
        var gateBet = data.getInt("id");
        var playerBet = this.getPlayerWithId(idPl);
        var valueBet = data.getLong("bet");
        if (null != playerBet && playerBet == this.thisPlayer) {
          this.totalBetAllGate += valueBet;
          this.listTotalUserBetGate[gateBet - 1] += valueBet;
          this.lbTotalBet.setMoney(this.totalBetAllGate, true);
          this.lbTotalGateBetUser[gateBet - 1].string = Windown_1.Windown.formatMoney(this.listTotalUserBetGate[gateBet - 1]);
          this.lbTotalGateBetUser[gateBet - 1].node.parent.active = true;
        }
        var listChipBet = this.getListChipValue(valueBet);
        for (var i = 0, l = listChipBet.length; i < l; i++) {
          var chipbet = this.assets.getChipBet(listChipBet[i]);
          this.listChipBet.push(chipbet);
          var parentChipGate = this.nodeGateBet[gateBet - 1];
          var posFromPlayer = null;
          if (null != playerBet) {
            posFromPlayer = parentChipGate.convertToNodeSpaceAR(playerBet.node.parent.convertToWorldSpaceAR(playerBet.node.position));
            playerBet.setChip(data.getLong("ag"));
            playerBet.listChipBet.push(chipbet);
            chipbet["playerID"] = playerBet.id;
            playerBet.gateBetted.includes(gateBet) || playerBet.gateBetted.push(gateBet);
          } else {
            posFromPlayer = parentChipGate.convertToNodeSpaceAR(this.nodeGroupUser.parent.convertToWorldSpaceAR(this.nodeGroupUser.position));
            this.listChipbetOther.push(chipbet);
            chipbet["playerID"] = -1;
          }
          chipbet.parent = parentChipGate;
          chipbet["gate"] = gateBet;
          chipbet["value"] = listChipBet[i];
          chipbet.setPosition(posFromPlayer);
          var deltaRandom = gateBet > 3 ? 20 : 30;
          var ranPosX = Windown_1.Windown.RandomNumber(this.listPosChipOnTable[gateBet - 1].x - deltaRandom, this.listPosChipOnTable[gateBet - 1].x + deltaRandom);
          var ranPosY = Windown_1.Windown.RandomNumber(this.listPosChipOnTable[gateBet - 1].y - deltaRandom, this.listPosChipOnTable[gateBet - 1].y + deltaRandom);
          var randomPosTo = cc.v2(ranPosX, ranPosY);
          cc.tween(chipbet).set({
            position: posFromPlayer
          }).delay(.05 * i).to(.3, {
            x: randomPosTo.x,
            y: randomPosTo.y
          }, {
            easing: cc.easing.sineOut
          }).start();
        }
        this.listTotalBetValue[gateBet - 1] = data.getLong("ttB");
        this.listLbTotalBet[gateBet - 1].setMoney(this.listTotalBetValue[gateBet - 1], true);
      };
      BaccaratView.prototype.setStateBtnGate = function(state) {
        this.listBtnBet.forEach(function(btnBet) {
          btnBet.interactable = state;
        });
      };
      BaccaratView.prototype.handleEndGame = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          var vP, vD, playerInfo, agWinUser, listW, timeDelay1, infoCardPlayer1, infoCardBanker1, infoCardPlayer2, infoCardBanker2, infoCardPlayer3_1, infoCardBanker3_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("handleEndGame");
              this.setStateBtnGate(false);
              this.onCountWaitting();
              this.sprTimer.fillRange = 0;
              this.gameState = GAME_STATE.FINISHED;
              this.thisPlayer.hideButtonBet();
              this.setDealerAnim("Stop_Bet");
              this.audio.playEffect(this.audio.dealer_endBet);
              vP = JSON.parse(data.getUtfString("vP"));
              vD = JSON.parse(data.getUtfString("vD"));
              this.historyTable = JSON.parse(data.get("his")).reverse();
              playerInfo = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("d7")));
              agWinUser = data.getLong("agW");
              this.agUser = data.getLong("ag");
              listW = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("w")));
              this.listGateWin = [];
              listW.forEach(function(win) {
                _this.listGateWin.push(win["id"]);
              });
              cc.log("vp====", vP);
              cc.log("vD====", vD);
              timeDelay1 = this.animDealer.findAnimation("Stop_Bet").duration;
              return [ 4, Windown_1.Windown.BaccaratView.getMakeDelay(timeDelay1 + .5).prosime ];

             case 1:
              _a.sent();
              this.setDealerAnim("DealCard");
              this.gateWin = parseInt(this.listGateWin.toString().split(",").join(""));
              infoCardPlayer1 = this.infoCardOnTable_Player[0];
              cc.tween(this.listCardPlayer[0]).set({
                scaleX: .15,
                scaleY: .15,
                angle: -30,
                x: -95,
                y: 149
              }).delay(.85).call(function() {
                _this.audio.playEffect(_this.audio.flipCard);
                _this.listCardPlayer[0].active = true;
                _this.listCardPlayer[0].opacity = 255;
              }).to(.3, {
                scaleX: infoCardPlayer1.scaleX,
                scaleY: infoCardPlayer1.scaleY,
                angle: infoCardPlayer1.angle,
                skewX: infoCardPlayer1.skew.x,
                skewY: infoCardPlayer1.skew.y,
                position: infoCardPlayer1.position
              }, {
                easing: cc.easing.sineIn
              }).start();
              infoCardBanker1 = this.infoCardOnTable_Banker[0];
              cc.tween(this.listCardBanker[0]).set({
                scaleX: .15,
                scaleY: .15,
                angle: 36,
                x: 30,
                y: 133
              }).delay(2.25).call(function() {
                _this.audio.playEffect(_this.audio.flipCard);
                _this.listCardBanker[0].active = true;
                _this.listCardBanker[0].opacity = 255;
              }).to(.3, {
                scaleX: infoCardBanker1.scaleX,
                scaleY: infoCardBanker1.scaleY,
                angle: infoCardBanker1.angle,
                skewX: infoCardBanker1.skew.x,
                skewY: infoCardBanker1.skew.y,
                position: infoCardBanker1.position
              }, {
                easing: cc.easing.sineIn
              }).delay(.5).call(function() {
                _this.openCard(_this.listCardPlayer[0], vP[0]["I"], infoCardPlayer1);
              }).start();
              infoCardPlayer2 = this.infoCardOnTable_Player[1];
              cc.tween(this.listCardPlayer[1]).set({
                scaleX: .15,
                scaleY: .15,
                angle: -36,
                x: -95,
                y: 149
              }).delay(3.5).call(function() {
                _this.audio.playEffect(_this.audio.flipCard);
                _this.listCardPlayer[1].active = true;
                _this.listCardPlayer[1].opacity = 255;
              }).to(.3, {
                scaleX: infoCardPlayer2.scaleX,
                scaleY: infoCardPlayer2.scaleY,
                angle: infoCardPlayer2.angle,
                skewX: infoCardPlayer2.skew.x,
                skewY: infoCardPlayer2.skew.y,
                position: infoCardPlayer2.position
              }, {
                easing: cc.easing.sineIn
              }).delay(.5).call(function() {
                _this.openCard(_this.listCardBanker[0], vD[0]["I"], infoCardBanker1);
              }).start();
              infoCardBanker2 = this.infoCardOnTable_Banker[1];
              cc.tween(this.listCardBanker[1]).set({
                scaleX: .15,
                scaleY: .15,
                angle: 36,
                x: 30,
                y: 133
              }).delay(4.85).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      this.audio.playEffect(this.audio.flipCard);
                      this.listCardBanker[1].active = true;
                      this.listCardBanker[1].opacity = 255;
                      return [ 4, this.getMakeDelay(.75).prosime ];

                     case 1:
                      _a.sent();
                      this.showScore(BACCARAT_GATE.PLAYER, vP, true);
                      return [ 2 ];
                    }
                  });
                });
              }).to(.3, {
                scaleX: infoCardBanker2.scaleX,
                scaleY: infoCardBanker2.scaleY,
                angle: infoCardBanker2.angle,
                skewX: infoCardBanker2.skew.x,
                skewY: infoCardBanker2.skew.y,
                position: infoCardBanker2.position
              }, {
                easing: cc.easing.sineIn
              }).delay(.5).call(function() {
                _this.openCard(_this.listCardPlayer[1], vP[1]["I"], infoCardPlayer2);
              }).delay(1).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      this.openCard(this.listCardBanker[1], vD[1]["I"], infoCardBanker2);
                      return [ 4, this.getMakeDelay(.75).prosime ];

                     case 1:
                      _a.sent();
                      return [ 4, this.showScore(BACCARAT_GATE.BANKER, vD, true) ];

                     case 2:
                      _a.sent();
                      return [ 2 ];
                    }
                  });
                });
              }).start();
              return [ 4, this.getMakeDelay(8.25).prosime ];

             case 2:
              _a.sent();
              if (!(2 == vP.length && 2 == vD.length)) return [ 3, 4 ];
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 3:
              _a.sent();
              return [ 3, 8 ];

             case 4:
              if (!(3 == vP.length)) return [ 3, 6 ];
              infoCardPlayer3_1 = this.infoCardOnTable_Player[2];
              this.setDealerAnim("DealCard_Nan");
              cc.tween(this.listCardPlayer[2]).set({
                scaleX: .15,
                scaleY: .15,
                angle: -36,
                x: -20,
                y: 125
              }).delay(1.1).call(function() {
                _this.audio.playEffect(_this.audio.flipCard);
                _this.listCardPlayer[2].active = true;
                _this.listCardPlayer[2].opacity = 255;
              }).to(.3, {
                scaleX: infoCardPlayer3_1.scaleX,
                scaleY: infoCardPlayer3_1.scaleY,
                angle: infoCardPlayer3_1.angle,
                skewX: infoCardPlayer3_1.skew.x,
                skewY: infoCardPlayer3_1.skew.y,
                position: infoCardPlayer3_1.position
              }, {
                easing: cc.easing.sineIn
              }).delay(.5).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      this.openCard(this.listCardPlayer[2], vP[2]["I"], infoCardPlayer3_1);
                      return [ 4, this.getMakeDelay(1).prosime ];

                     case 1:
                      _a.sent();
                      this.showScore(BACCARAT_GATE.PLAYER, vP, false);
                      return [ 2 ];
                    }
                  });
                });
              }).start();
              return [ 4, this.getMakeDelay(1.1 + .3 + .5 + 1).prosime ];

             case 5:
              _a.sent();
              _a.label = 6;

             case 6:
              if (!(3 == vD.length)) return [ 3, 8 ];
              infoCardBanker3_1 = this.infoCardOnTable_Banker[2];
              this.setDealerAnim("DealCard_Table_Right");
              cc.tween(this.listCardBanker[2]).set({
                scaleX: .15,
                scaleY: .15,
                angle: 36,
                x: 30,
                y: 133
              }).delay(1.1).call(function() {
                _this.audio.playEffect(_this.audio.flipCard);
                _this.listCardBanker[2].active = true;
                _this.listCardBanker[2].opacity = 255;
              }).to(.3, {
                scaleX: infoCardBanker3_1.scaleX,
                scaleY: infoCardBanker3_1.scaleY,
                angle: infoCardBanker3_1.angle,
                skewX: infoCardBanker3_1.skew.x,
                skewY: infoCardBanker3_1.skew.y,
                position: infoCardBanker3_1.position
              }, {
                easing: cc.easing.sineIn
              }).delay(.5).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      this.openCard(this.listCardBanker[2], vD[2]["I"], infoCardBanker3_1);
                      return [ 4, this.getMakeDelay(1).prosime ];

                     case 1:
                      _a.sent();
                      this.showScore(BACCARAT_GATE.BANKER, vD, false);
                      return [ 2 ];
                    }
                  });
                });
              }).start();
              return [ 4, this.getMakeDelay(1.1 + .3 + .5 + 1).prosime ];

             case 7:
              _a.sent();
              _a.label = 8;

             case 8:
              return [ 4, this.showWinResult() ];

             case 9:
              _a.sent();
              this.getAllChipOnTable();
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 10:
              _a.sent();
              this.payChipWinOnTalbe();
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 11:
              _a.sent();
              this.moveChipToPlayer();
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 12:
              _a.sent();
              return [ 4, this.showResultAgWin(playerInfo, agWinUser) ];

             case 13:
              _a.sent();
              this.resetView();
              return [ 2 ];
            }
          });
        });
      };
      BaccaratView.prototype.getAllChipOnTable = function() {
        var _this = this;
        cc.log("this.listGateWin=" + this.listGateWin);
        this.audio.playEffect(this.audio.getChip);
        this.listChipBet.forEach(function(chip) {
          if (!_this.listGateWin.includes(chip["gate"])) {
            var posOut = _this.nodeGetChip.parent.convertToWorldSpaceAR(_this.nodeGetChip.position);
            var posIn = chip.parent.convertToNodeSpaceAR(posOut);
            cc.tween(chip).delay(Windown_1.Windown.RandomNumber(0, 3) / 10).to(1.5, {
              position: posIn
            }, {
              easing: cc.easing.quintOut
            }).to(.1, {
              opacity: 0
            }).call(function() {
              _this.assets.chipBetPool.put(chip);
              var playerOwn = _this.getPlayerWithId(chip["playerID"]);
              null != playerOwn && playerOwn.listChipBet.splice(playerOwn.listChipBet.indexOf(chip), 1);
              _this.listChipbetOther.includes(chip) && _this.listChipbetOther.splice(_this.listChipbetOther.indexOf(chip), 1);
            }).start();
          }
        });
      };
      BaccaratView.prototype.payChipWinOnTalbe = function() {
        var _this = this;
        var isGateWin = false;
        var _loop_1 = function(i) {
          var gate = this_1.listGateWin[i];
          this_1.players.forEach(function(playerBet) {
            var listChipPl = playerBet.listChipBet;
            listChipPl.forEach(function(chip, index) {
              if (chip["gate"] == gate) {
                isGateWin = true;
                chip["value"] = _this.getChipWinValueOnGate(chip["value"], gate);
                var listChipBet = _this.getListChipValue(chip["value"]);
                for (var j = 0, size = listChipBet.length; j < size; j++) _this.effectChipPay(listChipBet[j], gate, .07 * index, playerBet.listChipPay);
              }
            });
          });
          this_1.listChipbetOther.forEach(function(chip, index) {
            if (chip["gate"] == gate) {
              isGateWin = true;
              chip["value"] = _this.getChipWinValueOnGate(chip["value"], gate);
              var listChipBet = _this.getListChipValue(chip["value"]);
              for (var i_3 = 0, l = listChipBet.length; i_3 < l; i_3++) _this.effectChipPay(listChipBet[i_3], gate, .07 * index, _this.listChipbetOther);
            }
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.listGateWin.length; i++) _loop_1(i);
        isGateWin && this.audio.playEffect(this.audio.chipMoveToPlayer_turn1);
      };
      BaccaratView.prototype.getChipWinValueOnGate = function(value, gate) {
        gate != BACCARAT_GATE.PLAYER_PAIR && gate != BACCARAT_GATE.BANKER_PAIR || (value *= 15);
        gate == BACCARAT_GATE.TIE && (value *= 9);
        return value;
      };
      BaccaratView.prototype.moveChipToPlayer = function() {
        var _this = this;
        var playerContainer = cc.find("bg/playerContainer", this.node);
        var isWinChip = false;
        this.players.forEach(function(playerBet) {
          playerBet.listChipBet.forEach(function(chip, index) {
            if (index < 7) {
              cc.log("playerBet =" + playerBet.nickname);
              if (!cc.isValid(chip.parent)) {
                cc.log("Chip ko co cha:", chip["playerID"]);
                chip.parent = _this.nodeGateBet[chip["gate"] - 1];
              }
              var posIn = Windown_1.Windown.convertNodeInOtherNode(chip, playerContainer);
              chip.parent = playerContainer;
              chip.setPosition(posIn);
              isWinChip = true;
              cc.tween(chip).to(.6, {
                x: playerBet.posPayChip[0].x,
                y: playerBet.posPayChip[0].y + 5 * index,
                scale: .8 * chip.scale
              }).delay(1).to(.3, {
                position: playerBet.node.position
              }).call(function() {
                _this.assets.chipBetPool.put(chip);
              }).start();
            } else {
              cc.log("chip >7");
              cc.tween(chip).to(.3, {
                opacity: 0
              }, {
                easing: cc.easing.sineOut
              }).call(function() {
                _this.assets.chipBetPool.put(chip);
                cc.log("player listchipo bet size=" + playerBet.listChipBet.length);
              }).start();
            }
          });
          playerBet.listChipPay.forEach(function(chip, index) {
            if (index < 7) {
              var posIn = Windown_1.Windown.convertNodeInOtherNode(chip, playerContainer);
              chip.parent = playerContainer;
              chip.setPosition(posIn);
              isWinChip = true;
              cc.tween(chip).to(.6, {
                x: playerBet.posPayChip[1].x,
                y: playerBet.posPayChip[1].y + 5 * index,
                scale: .8 * chip.scale
              }).delay(.75).to(.3, {
                position: playerBet.node.position
              }).call(function() {
                _this.assets.chipBetPool.put(chip);
              }).start();
            } else cc.tween(chip).to(.3, {
              opacity: 0
            }, {
              easing: cc.easing.sineOut
            }).call(function() {
              _this.assets.chipBetPool.put(chip);
            }).start();
          });
        });
        var totalOtherWin = 0;
        this.listChipbetOther.forEach(function(chip, index) {
          if (index < 7) {
            isWinChip = true;
            totalOtherWin += chip["value"];
            cc.log("Chip Parent=" + chip.parent.name);
            var posIn = Windown_1.Windown.convertNodeInOtherNode(chip, playerContainer);
            chip.parent = playerContainer;
            chip.setPosition(posIn);
            var indexPos = true == chip["isChipPayOther"] ? 0 : 1;
            cc.tween(chip).to(.6, {
              x: _this.posPayChipOther[indexPos].x,
              y: _this.posPayChipOther[indexPos].y + 5 * index,
              scale: .8 * chip.scale
            }).delay(.75).to(.3, {
              position: _this.nodeGroupUser.position
            }).call(function() {
              _this.assets.chipBetPool.put(chip);
            }).start();
          } else {
            totalOtherWin += chip["value"];
            _this.assets.chipBetPool.put(chip);
          }
          cc.log("total other win=" + totalOtherWin);
        });
        this.listChipbetOther.length > 0 && cc.tween(this.node).delay(1.5).call(function() {
          _this.showEffectWinOther(totalOtherWin);
        }).start();
        this.listChipBet.forEach(function(chip, index) {
          cc.isValid(_this.getPlayerWithId(chip["playerID"])) || _this.listChipbetOther.includes(chip) || cc.tween(chip).to(.3, {
            opacity: 0
          }, {
            easing: cc.easing.sineOut
          }).call(function() {
            _this.assets.chipBetPool.put(chip);
          }).start();
        });
        isWinChip && this.audio.playEffect(this.audio.chipMoveToPlayer_turn1);
      };
      BaccaratView.prototype.showEffectWinOther = function(totalOtherWin) {
        var _this = this;
        if (null == this.effectWinOther) {
          cc.log("show effectWinOther");
          this.effectWinOther = this.assets.getEffectWin(totalOtherWin);
          this.effectWinOther.parent = this.node;
          this.effectWinOther.position = this.nodeGroupUser.position;
        } else this.effectWinOther.getChildByName("lbChipWin").getComponent(cc.Label).string = Windown_1.Windown.formatMoney(totalOtherWin);
        this.effectWinOther.active = true;
        var spineEffWinOther = this.effectWinOther.getComponentInChildren(sp.Skeleton);
        spineEffWinOther.setSkin("win");
        spineEffWinOther.setSlotsToSetupPose();
        spineEffWinOther.setAnimation(0, "appear", false);
        spineEffWinOther.setCompleteListener(function() {
          spineEffWinOther.setAnimation(0, "idle", false);
          spineEffWinOther.setCompleteListener(null);
        });
        this.scheduleOnce(function() {
          cc.tween(_this.effectWinOther).to(.2, {
            scaleX: 0
          }, {
            easing: cc.easing.backIn
          }).call(function() {
            _this.effectWinOther.active = false;
          }).start();
        }, 3);
      };
      BaccaratView.prototype.showResultAgWin = function(dataResult, agWinUser) {
        void 0 === dataResult && (dataResult = []);
        return __awaiter(this, void 0, void 0, function() {
          var listPromise, isWin;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              listPromise = [];
              isWin = false;
              dataResult.forEach(function(data) {
                var idPl = data["id"];
                var player = _this.getPlayerWithId(idPl);
                if (cc.isValid(player) && data["agw"] > 0 && player != _this.thisPlayer) {
                  isWin = true;
                  listPromise.push(player.showWinEffect(data["agw"]));
                  player.setChip(data["ag"]);
                }
              });
              if (0 != agWinUser) {
                listPromise.push(this.thisPlayer.showWinSpineEffect(agWinUser));
                this.thisPlayer.setChip(this.agUser);
                this.audio.playEffect(this.audio.youWin);
              }
              isWin && this.audio.playEffect(this.audio.chipMoveToPlayer_turn2);
              return [ 4, Promise.all(listPromise) ];

             case 1:
              _a.sent();
              return [ 4, this.getMakeDelay(.25).prosime ];

             case 2:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      BaccaratView.prototype.showResultAgWinReconnect = function(dataBet) {
        void 0 === dataBet && (dataBet = []);
        return __awaiter(this, void 0, void 0, function() {
          var listPromise, isWin, agWinUser, playerInfo, checkPl;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              listPromise = [];
              isWin = false;
              agWinUser = 0;
              playerInfo = [];
              checkPl = function(playerId) {
                playerInfo.forEach(function(pl) {
                  if (pl["idP"] == playerId) return pl;
                  return null;
                });
              };
              dataBet.forEach(function(data) {
                if (data["w"]) {
                  var dataB = data["b"];
                  dataB.forEach(function(bet) {
                    var idPl = bet["idP"];
                    var playerBet = checkPl(idPl);
                    if (null == playerBet) {
                      playerInfo.push(bet);
                      idPl == _this.thisPlayer.id && (agWinUser = bet["agWin"]);
                    } else {
                      playerBet["agWin"] += bet["agWin"];
                      idPl == _this.thisPlayer.id && (agWinUser = playerBet["agWin"]);
                    }
                  });
                }
              });
              cc.log(" Player info=", playerInfo);
              playerInfo.forEach(function(plInfo) {
                var idPl = plInfo["idP"];
                var player = _this.getPlayerWithId(idPl);
                if (cc.isValid(player) && plInfo["agWin"] > 0 && player != _this.thisPlayer) {
                  isWin = true;
                  listPromise.push(player.showWinEffect(plInfo["agWin"]));
                }
              });
              cc.log(" Player agWinUser=", agWinUser);
              if (0 != agWinUser) {
                listPromise.push(this.thisPlayer.showWinSpineEffect(agWinUser));
                this.thisPlayer.setChip(this.agUser);
                this.audio.playEffect(this.audio.youWin);
              }
              isWin && this.audio.playEffect(this.audio.chipMoveToPlayer_turn2);
              return [ 4, Promise.all(listPromise) ];

             case 1:
              _a.sent();
              return [ 4, this.getMakeDelay(.25).prosime ];

             case 2:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      BaccaratView.prototype.endResultAgWin = function() {};
      BaccaratView.prototype.resetView = function() {
        var _this = this;
        if (!this.isResetView) {
          this.isResetView = true;
          this.totalBetAllGate = 0;
          this.lbTotalBet.setMoney(0);
          this.listChipBet.forEach(function(chip) {
            _this.assets.chipBetPool.put(chip);
          });
          this.listChipBet = [];
          this.listChipbetOther.forEach(function(chip) {
            _this.assets.chipBetPool.put(chip);
          });
          this.listChipbetOther = [];
          this.totalBetB = this.totalBetP = this.totalBetPP = this.totalBetBP = 0;
          this.listBtnBet.forEach(function(btnBet) {
            btnBet.getComponentInChildren(cc.Animation).node.active = false;
          });
          this.animWinResult.node.active = false;
          this.setDealerAnim("DiscardCard");
          var _loop_2 = function(i) {
            var cardP = this_2.listCardPlayer[i];
            var cardB = this_2.listCardBanker[i];
            cardP.parent.getChildByName("cardBgWin" + (i + 1)).active = false;
            cardB.parent.getChildByName("cardBgWin" + (i + 1)).active = false;
            cc.tween(cardP).delay(.1 * i).to(.3, {
              opacity: 0
            }, {
              easing: cc.easing.sineOut
            }).call(function() {
              cc.audioEngine.play(_this.audio.flipCard, false, 1);
              cardP.getComponent(cc.Sprite).spriteFrame = _this.assets.getCardBack();
              cardP.active = false;
            }).start();
            cc.tween(cardB).delay(.1 * i).to(.3, {
              opacity: 0
            }, {
              easing: cc.easing.sineOut
            }).call(function() {
              cc.log("Player effect Get Card");
              _this.audio.playEffect(_this.audio.flipCard);
              cardB.getComponent(cc.Sprite).spriteFrame = _this.assets.getCardBack();
              cardB.active = false;
            }).start();
          };
          var this_2 = this;
          for (var i = 0; i < 3; i++) _loop_2(i);
          this.lbScoreP.node.active = false;
          this.lbScoreB.node.active = false;
          this.players.forEach(function(player) {
            player.resetPlayer();
          });
          this.gameState = GAME_STATE.WAITTING;
          if (null != this.lastPlayerInfoData) {
            this.handlePlayerInfo(this.lastPlayerInfoData);
            this.lastPlayerInfoData = null;
          }
          this.listLbTotalBet.forEach(function(lb) {
            lb.setMoneyNoTime(0);
          });
          this.lbTotalGateBetUser.forEach(function(lb, index) {
            lb.node.parent.active = false;
            _this.HistoryBet.ListGateBet[index] = _this.listTotalUserBetGate[index];
            _this.listTotalUserBetGate[index] = 0;
          });
          this.historyMini.addItemHistory(this.historyTable);
          cc.log("listTotalUserBetGate=", this.listTotalUserBetGate);
        }
      };
      BaccaratView.prototype.effectChipPay = function(value, gate, timedel, arrPutChip, cb) {
        void 0 === cb && (cb = null);
        var chipPay = this.assets.getChipBet(value);
        chipPay["isChipPayOther"] = arrPutChip == this.listChipbetOther;
        arrPutChip.push(chipPay);
        var parentChipGate = this.nodeGateBet[gate - 1];
        chipPay.parent = parentChipGate;
        var deltaRandom = gate > 3 ? 20 : 30;
        var ranPosX = Windown_1.Windown.RandomNumber(this.listPosChipOnTable[gate - 1].x - deltaRandom, this.listPosChipOnTable[gate - 1].x + deltaRandom);
        var ranPosY = Windown_1.Windown.RandomNumber(this.listPosChipOnTable[gate - 1].y - deltaRandom, this.listPosChipOnTable[gate - 1].y + deltaRandom);
        var randomPosTo = cc.v2(ranPosX, ranPosY);
        timedel = timedel < .75 ? timedel : .75;
        chipPay.opacity = 0;
        cc.tween(chipPay).set({
          x: randomPosTo.x,
          y: randomPosTo.y + 50,
          opacity: 0
        }).delay(timedel).to(.3, {
          x: randomPosTo.x,
          y: randomPosTo.y,
          opacity: 255
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          null != cb && cb();
        }).start();
      };
      BaccaratView.prototype.showWinResult = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var e_1;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 2, , 3 ]);
                    this.animWinResult.node.active = true;
                    this.audio.playEffect(this.audio.gateWinEffect);
                    if (this.getGateWinNormal() == BACCARAT_GATE.TIE) {
                      this.animWinResult.node.x = 0;
                      this.animWinResult.setSkin("tie");
                      this.animWinResult.setSlotsToSetupPose();
                    } else {
                      this.animWinResult.node.x = this.getGateWinNormal() == BACCARAT_GATE.PLAYER ? -170 : 170;
                      this.animWinResult.setSkin("win");
                      this.animWinResult.setSlotsToSetupPose();
                      this.getGateWinNormal() == BACCARAT_GATE.BANKER ? this.listCardBanker.forEach(function(card, index) {
                        card.active && (card.parent.getChildByName("cardBgWin" + (index + 1)).active = true);
                      }) : this.listCardPlayer.forEach(function(card, index) {
                        card.active && (card.parent.getChildByName("cardBgWin" + (index + 1)).active = true);
                      });
                    }
                    this.animWinResult.setAnimation(0, "appear", false);
                    this.animWinResult.setCompleteListener(function() {
                      _this.animWinResult.setAnimation(0, "idle", true);
                    });
                    this.setDealerAnim(this.getGateWinNormal() == BACCARAT_GATE.TIE ? "Win_Draw" : this.getGateWinNormal() == BACCARAT_GATE.PLAYER ? "Win_Player" : "Win_Banker");
                    this.listGateWin.forEach(function(gateId) {
                      _this.listBtnBet[gateId - 1].getComponentInChildren(cc.Animation).node.active = true;
                    });
                    return [ 4, this.getMakeDelay(1.5).prosime ];

                   case 1:
                    _a.sent();
                    resolve(null);
                    return [ 3, 3 ];

                   case 2:
                    e_1 = _a.sent();
                    Util_1.Util.ThrowErrProsime(e_1);
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
      BaccaratView.prototype.setDealerAnim = function(animName, isLoop, endListener) {
        var _this = this;
        void 0 === isLoop && (isLoop = false);
        void 0 === endListener && (endListener = null);
        this.animDealer.setAnimation(0, animName, isLoop);
        this.animDealer.setCompleteListener(null);
        if (null != endListener) {
          this.animDealer.setCompleteListener(endListener);
          this.animDealer.setCompleteListener(null);
        } else this.animDealer.setCompleteListener(function() {
          _this.animDealer.setAnimation(0, "Idle_Tap", true);
        });
      };
      BaccaratView.prototype.showScore = function(gate, arrCard, isFirstTurn) {
        cc.log("arrCArd= ", arrCard);
        var size = isFirstTurn ? 2 : 3;
        var score = this.getScore(arrCard, size);
        var showAc = cc.tween().set({
          scale: 0
        }).to(.3, {
          scale: 1
        }, {
          easing: cc.easing.backOut
        });
        if (gate == BACCARAT_GATE.PLAYER) {
          this.lbScoreP.node.active = true;
          if (isFirstTurn) {
            this.lbScoreP.setMoneyNoTime(score);
            showAc.clone(this.lbScoreP.node).start();
          } else this.lbScoreP.setMoney(score);
        } else {
          this.lbScoreB.node.active = true;
          if (isFirstTurn) {
            this.lbScoreB.setMoneyNoTime(score);
            showAc.clone(this.lbScoreB.node).start();
          } else this.lbScoreB.setMoney(score);
        }
      };
      BaccaratView.prototype.getScore = function(arrCard, size) {
        void 0 === size && (size = 2);
        var score = 0;
        for (var i = 0; i < size; i++) {
          var card = arrCard[i];
          var N = card["N"] >= 10 ? 0 : card["N"];
          score += N;
        }
        return score % 10;
      };
      BaccaratView.prototype.openCard = function(cardNode, id, infoCard) {
        var _this = this;
        var sk1 = 0;
        var sk2 = 0;
        if (cardNode.x > 0) {
          sk1 = 10;
          sk2 = 15;
        } else {
          sk1 = -10;
          sk2 = -15;
        }
        var deltaX = cardNode.x > 0 ? -30 : 30;
        var posCard = cardNode.getPosition();
        cc.tween(cardNode).to(.55, {
          scaleX: .01,
          angle: infoCard.angle + 10,
          skewX: infoCard.skew.x + sk1
        }, {
          easing: cc.easing.cubicInOut
        }).call(function() {
          cardNode.getComponent(cc.Sprite).spriteFrame = _this.assets.getCardSprite(id);
          _this.audio.playEffect(_this.audio.openCard);
        }).to(.2, {
          scaleX: infoCard.scaleX,
          angle: infoCard.angle,
          skewX: infoCard.skew.x
        }, {
          easing: cc.easing.cubicInOut
        }).start();
      };
      BaccaratView.prototype.onCountTimeRemain = function() {
        var _this = this;
        this.lbTimer.node.active = true;
        this.lbWaitting.node.active = false;
        cc.Tween.stopAllByTarget(this.lbWaitting);
        this.lbTimer.string = this.currentTimer + "";
        this.schedule(function() {
          if (_this.currentTimer > 0) {
            _this.currentTimer--;
            _this.lbTimer.string = _this.currentTimer + "";
            _this.currentTimer < 6 && cc.tween(_this.lbTimer.node).to(.3, {
              scale: 1.5
            }, {
              easing: cc.easing.sineOut
            }).to(.3, {
              scale: 1
            }, {
              easing: cc.easing.sineIn
            }).start();
          } else _this.lbTimer.string = "0";
        }, 1, this.currentTimer);
        cc.tween(this.sprTimer).to(this.currentTimer, {
          fillRange: 0
        }).start();
      };
      BaccaratView.prototype.onCountWaitting = function() {
        this.lbTimer.node.active = false;
        this.lbWaitting.node.active = true;
        this.sprTimer.fillRange = 0;
        cc.tween(this.lbWaitting).repeatForever(cc.tween().set({
          string: ""
        }).delay(.5).set({
          string: "."
        }).delay(.5).set({
          string: ".."
        }).delay(.5).set({
          string: "..."
        }).delay(.5)).start();
      };
      BaccaratView.prototype.getPlayerWithId = function(idPl) {
        var player = null;
        player = idPl == Windown_1.Windown.User.userId ? this.thisPlayer : this.players.find(function(player) {
          return player.id == idPl;
        });
        "";
        return player;
      };
      BaccaratView.prototype.getListChipValue = function(valueBet) {
        var listValueChipSplit = [];
        this.getNameChip(valueBet, listValueChipSplit);
        return listValueChipSplit;
      };
      BaccaratView.prototype.getNameChip = function(value, listDataChip) {
        var numbOfChip = 0;
        var soDu = 0;
        var valueChip = 0;
        for (var i = 0; i < this.listValueChip.length; i++) if (this.listValueChip[i] > value) {
          valueChip = this.listValueChip[i - 1];
          break;
        }
        if (0 == valueChip) for (var i = this.listValueChip.length - 1; i >= 0; i++) if (value >= this.listValueChip[i]) {
          valueChip = this.listValueChip[i];
          break;
        }
        numbOfChip = Math.floor(value / valueChip);
        soDu = value % valueChip;
        value = soDu;
        var dataChip = {
          value: valueChip,
          num: numbOfChip
        };
        if (valueChip >= 1e3) for (var i = 0; i < numbOfChip; i++) listDataChip.push(valueChip);
        soDu > 0 && this.getNameChip(value, listDataChip);
      };
      BaccaratView.prototype.getGateWinNormal = function() {
        var gateW = 0;
        switch (this.gateWin) {
         case BACCARAT_WIN_GATE.PLAYER:
         case BACCARAT_WIN_GATE.PLAYER_BP:
         case BACCARAT_WIN_GATE.PLAYER_PP:
         case BACCARAT_WIN_GATE.PLAYER_PBP:
          gateW = BACCARAT_WIN_GATE.PLAYER;
          break;

         case BACCARAT_WIN_GATE.BANKER:
         case BACCARAT_WIN_GATE.BANKER_BP:
         case BACCARAT_WIN_GATE.BANKER_PP:
         case BACCARAT_WIN_GATE.BANKER_PBP:
          gateW = BACCARAT_WIN_GATE.BANKER;
          break;

         case BACCARAT_WIN_GATE.TIE:
         case BACCARAT_WIN_GATE.TIE_BP:
         case BACCARAT_WIN_GATE.TIE_PP:
         case BACCARAT_WIN_GATE.TIE_PBP:
          gateW = BACCARAT_WIN_GATE.TIE;
        }
        return gateW;
      };
      BaccaratView.prototype.onClickSendBet = function(even, data) {
        Windown_1.Windown.BaccaratController.sendBet(parseInt(data), this.currentBetValue);
        setTimeout(function() {
          Windown_1.Windown.BaccaratController.isCanSendData = true;
        }, 500);
      };
      BaccaratView.prototype.onClickShowMenu = function() {
        this.audio.playClick();
        this.menu.node.active = true;
        this.menu.onshow();
      };
      BaccaratView.prototype.onClickShowPopupSoiCau = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prfabSoiCau;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(null == this.popupSoiCau)) return [ 3, 2 ];
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.BaccaratController.loadPrefabBundle("PopupSoiCau") ];

             case 1:
              prfabSoiCau = _a.sent();
              this.popupSoiCau = cc.instantiate(prfabSoiCau).getComponent(Baccarat_SoiCauView_1.default);
              this.popupSoiCau.node.parent = Windown_1.Windown.BaccaratView.node;
              Windown_1.Windown.UIManager.hideLoading();
              _a.label = 2;

             case 2:
              this.popupSoiCau.node.active = true;
              this.popupSoiCau.show();
              return [ 2 ];
            }
          });
        });
      };
      BaccaratView.prototype.setupTimeRunInBg = function() {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function() {
          _this.timeInBg = cc.sys.now();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          var timeNow = cc.sys.now();
          var timeHide = _this.timeInBg;
          cc.director.getActionManager().update((timeNow - timeHide) / 1e3);
          cc.Tween.stopAllByTag(1);
          (timeNow - timeHide) / 1e3 > 15 && Windown_1.Windown.BaccaratController.onClickBackToLobby();
        });
      };
      __decorate([ property([ Baccarat_Player_1.default ]) ], BaccaratView.prototype, "players", void 0);
      __decorate([ property(Baccarat_Player_1.default) ], BaccaratView.prototype, "thisPlayer", void 0);
      __decorate([ property(Baccarat_Assets_1.default) ], BaccaratView.prototype, "assets", void 0);
      __decorate([ property(Baccarat_MenuView_1.default) ], BaccaratView.prototype, "menu", void 0);
      __decorate([ property(Baccarat_ButtonBet_1.default) ], BaccaratView.prototype, "buttonBetController", void 0);
      __decorate([ property(Baccarat_HistoryMini_1.default) ], BaccaratView.prototype, "historyMini", void 0);
      __decorate([ property(Baccarat_PopupHistory_1.default) ], BaccaratView.prototype, "popupHistoryBetView", void 0);
      __decorate([ property(Baccarat_Audio_1.default) ], BaccaratView.prototype, "audio", void 0);
      __decorate([ property(Baccarat_SoiCauView_1.default) ], BaccaratView.prototype, "popupSoiCau", void 0);
      __decorate([ property(cc.Node) ], BaccaratView.prototype, "nodeGroupUser", void 0);
      __decorate([ property([ cc.Node ]) ], BaccaratView.prototype, "nodeGateBet", void 0);
      __decorate([ property([ cc.Node ]) ], BaccaratView.prototype, "listCardPlayer", void 0);
      __decorate([ property([ cc.Node ]) ], BaccaratView.prototype, "listCardBanker", void 0);
      __decorate([ property(cc.Node) ], BaccaratView.prototype, "nodeGetChip", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbOtherPlayer", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbTimer", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbWaitting", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbSession", void 0);
      __decorate([ property(cc.Sprite) ], BaccaratView.prototype, "sprTimer", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbScoreP", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbScoreB", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBet", void 0);
      __decorate([ property(sp.Skeleton) ], BaccaratView.prototype, "animDealer", void 0);
      __decorate([ property(sp.Skeleton) ], BaccaratView.prototype, "animWinResult", void 0);
      __decorate([ property([ cc.Vec2 ]) ], BaccaratView.prototype, "posPayChipOther", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetB", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetP", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetT", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetBP", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetPP", void 0);
      __decorate([ property([ cc.Vec2 ]) ], BaccaratView.prototype, "listPosChipOnTable", void 0);
      __decorate([ property([ cc.Label ]) ], BaccaratView.prototype, "lbTotalGateBetUser", void 0);
      BaccaratView = __decorate([ ccclass ], BaccaratView);
      return BaccaratView;
    }(cc.Component);
    exports.default = BaccaratView;
    cc._RF.pop();
  }, {
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Other/MakeDelay": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./Baccarat.Assets": "Baccarat.Assets",
    "./Baccarat.Audio": "Baccarat.Audio",
    "./Baccarat.ButtonBet": "Baccarat.ButtonBet",
    "./Baccarat.HistoryBet": "Baccarat.HistoryBet",
    "./Baccarat.HistoryMini": "Baccarat.HistoryMini",
    "./Baccarat.MenuView": "Baccarat.MenuView",
    "./Baccarat.Player": "Baccarat.Player",
    "./Baccarat.PopupHistory": "Baccarat.PopupHistory",
    "./Baccarat.SoiCauView": "Baccarat.SoiCauView"
  } ]
}, {}, [ "Baccarat.Assets", "Baccarat.Audio", "Baccarat.BigRoad", "Baccarat.ButtonBet", "Baccarat.ChipBet", "Baccarat.DishRoadBoard", "Baccarat.HistoryBet", "Baccarat.HistoryMini", "Baccarat.MenuView", "Baccarat.Player", "Baccarat.PopupHistory", "Baccarat.ScoreBoard", "Baccarat.SettingView", "Baccarat.SoiCauView", "BaccaratController", "BaccaratView" ]);