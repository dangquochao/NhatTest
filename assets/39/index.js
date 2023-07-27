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
  AssetMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00bc5lPecpBq4qS2VwC9EjS", "AssetMatTroi");
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
    var ItemMuitlMatTroi_1 = require("./ItemMuitlMatTroi");
    var SymbolMatTroi_1 = require("./SymbolMatTroi");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AssetMatTroi = function(_super) {
      __extends(AssetMatTroi, _super);
      function AssetMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlasSymbol = null;
        _this.atlasSpecial = null;
        _this.listSkeDataSymbol = [];
        _this.itemSymbolNeko = null;
        _this.itemEffNearWin = null;
        _this.effectWinSymbol = [];
        _this.effectBkgShuffSymbol = null;
        _this.itemNearWinNoSap = null;
        _this.backgroundScatter = null;
        _this.effScater = null;
        _this.itemLightingSun = null;
        _this.itemLightingMoon = null;
        _this.poolSymbol = new cc.NodePool(SymbolMatTroi_1.default);
        _this.poolAddScater = new cc.NodePool(SymbolMatTroi_1.default);
        _this.poolEffNearWin = new cc.NodePool();
        _this.poolBkgShuffSymbol = new cc.NodePool();
        _this.poolWinSymbol1 = new cc.NodePool();
        _this.poolWinSymbol0 = new cc.NodePool();
        _this.poolNearWinNoSap = new cc.NodePool();
        _this.poolBgScatter = new cc.NodePool();
        _this.poolXu = new cc.NodePool();
        _this.poolSymbolMutil = new cc.NodePool(ItemMuitlMatTroi_1.default);
        _this.poolShuffToWild = new cc.NodePool();
        _this.poolShuffToNormal = new cc.NodePool();
        _this.poolLightingSun = new cc.NodePool();
        _this.poolLightingMoon = new cc.NodePool();
        return _this;
      }
      AssetMatTroi.prototype.getSymbol = function() {
        var node = null;
        node = this.poolSymbol.size() > 0 ? this.poolSymbol.get() : cc.instantiate(this.itemSymbolNeko);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putSymbol = function(node) {
        this.poolSymbol.put(node);
      };
      AssetMatTroi.prototype.getNearWin = function() {
        var node = null;
        node = this.poolEffNearWin.size() > 0 ? this.poolEffNearWin.get() : cc.instantiate(this.itemEffNearWin);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putNearWin = function(node) {
        node.destroy();
      };
      AssetMatTroi.prototype.getBkgShuffSymbol = function() {
        var node = null;
        node = this.poolBkgShuffSymbol.size() > 0 ? this.poolBkgShuffSymbol.get() : cc.instantiate(this.effectBkgShuffSymbol);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putBkgShuffSymbol = function(node) {
        node.destroy();
      };
      AssetMatTroi.prototype.getWinSymbol = function(type) {
        var node = null;
        var nodePool = 0 == type ? this.poolWinSymbol0 : this.poolWinSymbol1;
        node = nodePool.size() > 0 ? nodePool.get() : cc.instantiate(this.effectWinSymbol[type]);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putWinSymbol = function(node, type) {
        node.destroy();
      };
      AssetMatTroi.prototype.getNearWinNoSap = function() {
        var node = null;
        node = this.poolNearWinNoSap.size() > 0 ? this.poolNearWinNoSap.get() : cc.instantiate(this.itemNearWinNoSap);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putNearWinNoSap = function(node) {
        node.destroy();
      };
      AssetMatTroi.prototype.getBgScatter = function() {
        var node = null;
        node = this.poolBgScatter.size() > 0 ? this.poolBgScatter.get() : cc.instantiate(this.backgroundScatter);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putBgScatter = function(node) {
        node.destroy();
      };
      AssetMatTroi.prototype.getItemLighting = function(idItem) {
        var node = null;
        node = 9 == idItem ? this.poolLightingMoon.size() > 0 ? this.poolLightingMoon.get() : cc.instantiate(this.itemLightingMoon) : this.poolLightingSun.size() > 0 ? this.poolLightingSun.get() : cc.instantiate(this.itemLightingSun);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.putItemLighting = function(node, idItem) {
        node.destroy();
      };
      AssetMatTroi.prototype.getEffScater = function() {
        var node = cc.instantiate(this.effScater);
        node.active = true;
        return node;
      };
      AssetMatTroi.prototype.onDestroy = function() {
        this.poolSymbol.clear();
        this.poolEffNearWin.clear();
        this.poolBkgShuffSymbol.clear();
        this.poolNearWinNoSap.clear();
        this.poolXu.clear();
        this.poolSymbolMutil.clear();
        this.poolWinSymbol0.clear();
        this.poolWinSymbol1.clear();
        this.poolAddScater.clear();
        this.poolShuffToWild.clear();
        this.poolShuffToNormal.clear();
      };
      __decorate([ property(cc.SpriteAtlas) ], AssetMatTroi.prototype, "atlasSymbol", void 0);
      __decorate([ property(cc.SpriteAtlas) ], AssetMatTroi.prototype, "atlasSpecial", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], AssetMatTroi.prototype, "listSkeDataSymbol", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "itemSymbolNeko", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "itemEffNearWin", void 0);
      __decorate([ property([ cc.Node ]) ], AssetMatTroi.prototype, "effectWinSymbol", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "effectBkgShuffSymbol", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "itemNearWinNoSap", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "backgroundScatter", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "effScater", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "itemLightingSun", void 0);
      __decorate([ property(cc.Node) ], AssetMatTroi.prototype, "itemLightingMoon", void 0);
      AssetMatTroi = __decorate([ ccclass ], AssetMatTroi);
      return AssetMatTroi;
    }(cc.Component);
    exports.default = AssetMatTroi;
    cc._RF.pop();
  }, {
    "./ItemMuitlMatTroi": "ItemMuitlMatTroi",
    "./SymbolMatTroi": "SymbolMatTroi"
  } ],
  AudioMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89c77NtWgJEKbrWZBjE9f19", "AudioMatTroi");
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
    var AudioMatTroi = function(_super) {
      __extends(AudioMatTroi, _super);
      function AudioMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.click = null;
        _this.bgm_bigwin_end = null;
        _this.bgm_bigwin_end_coin = null;
        _this.bgm_bigwin_main = null;
        _this.bgm_fs = null;
        _this.bgm_mg = null;
        _this.bgm_totalwin_end = null;
        _this.bgm_totalwin_main = null;
        _this.fastspinEnd = null;
        _this.fastspinStart = null;
        _this.featureBuyBtn = null;
        _this.featureBuyCancel = null;
        _this.featureBuyHover = null;
        _this.featureBuyStart = null;
        _this.fsIntro = null;
        _this.fsSpin = null;
        _this.heartbeat = null;
        _this.heartbeatNoise = null;
        _this.heartbeatSlowdrop = null;
        _this.list_item_click = null;
        _this.menu_icon_press = null;
        _this.prizeInfobarTotalwin = null;
        _this.spinActiveLoop = null;
        _this.prizePayoutHighlight = null;
        _this.prizePayoutHighlightStart = null;
        _this.prizeSmallwin = null;
        _this.prizeWinMultiplied = null;
        _this.scatterWinHighlight = null;
        _this.spinBtn = null;
        _this.spinStop = null;
        _this.spinStopQuick = null;
        _this.symCollapse = null;
        _this.symScatter = null;
        _this.symShrink = null;
        _this.symWild = null;
        _this.uiCollect = null;
        _this.takeSymTop = null;
        _this.uiInfo = null;
        _this.uiStart = null;
        _this.wallet_counting_above = null;
        _this.spinActivated = null;
        _this.multiLightning = null;
        _this.prizeInfobarSmallwin = null;
        _this.prizeInfobarMultiwin = null;
        _this.multiIncreaseLeft = null;
        _this.multiIncreaseRight = null;
        _this.multiFly = null;
        _this.prizeInfobarCountingMain = null;
        _this.prizeInfobarCountingEnd = null;
        _this.multiIncreaseCenterClose = null;
        _this.multiIncreaseCenter = null;
        return _this;
      }
      AudioMatTroi.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      AudioMatTroi.prototype.playMusic = function() {
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.6);
        }
      };
      AudioMatTroi.prototype.playIndexTakeLine = function() {};
      AudioMatTroi.prototype.playSmalWin = function() {};
      AudioMatTroi.prototype.playBkgfs = function() {
        this.stopMusic();
        this.playEffect(this.fsSpin);
        this.playEffect(this.bgm_fs, .6, true);
      };
      AudioMatTroi.prototype.stopBkgFs = function() {
        this.stopEffect(this.bgm_fs, true);
        this.playMusic();
      };
      AudioMatTroi.prototype.playStopAudio = function() {
        var audio = this["spinStop"];
        this.playEffect(audio, .7);
      };
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_bigwin_end", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_bigwin_end_coin", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_bigwin_main", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_fs", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_mg", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_totalwin_end", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "bgm_totalwin_main", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "fastspinEnd", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "fastspinStart", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "featureBuyBtn", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "featureBuyCancel", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "featureBuyHover", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "featureBuyStart", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "fsIntro", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "fsSpin", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "heartbeat", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "heartbeatNoise", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "heartbeatSlowdrop", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "list_item_click", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "menu_icon_press", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeInfobarTotalwin", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "spinActiveLoop", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizePayoutHighlight", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizePayoutHighlightStart", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeSmallwin", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeWinMultiplied", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "scatterWinHighlight", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "spinBtn", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "spinStop", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "spinStopQuick", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "symCollapse", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "symScatter", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "symShrink", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "symWild", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "uiCollect", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "takeSymTop", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "uiInfo", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "uiStart", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "wallet_counting_above", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "spinActivated", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "multiLightning", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeInfobarSmallwin", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeInfobarMultiwin", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "multiIncreaseLeft", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "multiIncreaseRight", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "multiFly", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeInfobarCountingMain", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "prizeInfobarCountingEnd", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "multiIncreaseCenterClose", void 0);
      __decorate([ property(cc.AudioClip) ], AudioMatTroi.prototype, "multiIncreaseCenter", void 0);
      AudioMatTroi = __decorate([ ccclass ], AudioMatTroi);
      return AudioMatTroi;
    }(AudioManager_1.default);
    exports.default = AudioMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
  } ],
  CachChoiMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f436FbBvtKwqNcsP6rvDqW", "CachChoiMatTroi");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.MatTroiView.audio.playClick();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          _this.node.destroy();
        })));
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  DetailHistoryMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc92cFkWI5E5Lc0yzLbtnRn", "DetailHistoryMatTroi");
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
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var LbMonoSpace_1 = require("../../../Scritps/Other/LbMonoSpace");
    var Windown_1 = require("../../../Scritps/Windown");
    var ItemSlotMatTroi_1 = require("./ItemSlotMatTroi");
    var ItemWinDetailHistory_1 = require("./ItemWinDetailHistory");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DetaiHistoryMatTroi = function(_super) {
      __extends(DetaiHistoryMatTroi, _super);
      function DetaiHistoryMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.itemTemplate = null;
        _this.lbTitle = null;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.lbMNUser = null;
        _this.lbCuocCoSo = null;
        _this.listColum = [];
        _this.scrItemWin = null;
        _this.itemWinTemplate = null;
        _this.btnNextView = null;
        _this.btnBackView = null;
        _this.lbBonusSun = null;
        _this.lbBonusMoon = null;
        _this.lbNoWin = null;
        _this.viewDetail = null;
        _this.CApem = null;
        _this.totalViews = [];
        _this.currentView = 0;
        _this.dataHistory = null;
        _this.isFreeSpin = false;
        return _this;
      }
      DetaiHistoryMatTroi.prototype.onEnable = function() {
        this.totalViews = [];
        this.currentView = 0;
        this.dataHistory = null;
      };
      DetaiHistoryMatTroi.prototype.show = function(SFSObject) {
        this.node.active = true;
        this.node.x = 721.812;
        this.node.stopAllActions();
        this.node.opacity = 0;
        this.node.runAction(cc.spawn(cc.moveTo(.3, 0, 0), cc.fadeIn(.3).easing(cc.easeElasticIn(3))));
        var date = SFSObject.get("date");
        var jsonResult = SFSObject.get("infolog");
        var obj = JSON.parse(jsonResult);
        this.dataHistory = obj;
        cc.log("Detail:", jsonResult);
        this.initItem();
        this.isFreeSpin = obj.numFreeSpin > 0;
        0 == obj.agBet ? this.lbTitle.string = "Quay Mi\u1ec5n Ph\xed" : this.lbTitle.string = "Quay Th\u01b0\u1eddng";
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM HH:mm:ss");
        this.lbBet.string = Windown_1.Windown.formatNumber(20 * obj.agBet);
        this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        this.lbMNUser.string = Windown_1.Windown.formatNumber(obj.agUser);
        this.lbCuocCoSo.string = Windown_1.Windown.formatNumber(obj.agBet);
        this.totalViews = obj.views;
        this.totalViews.length > 1 ? this.btnNextView.node.active = true : this.btnNextView.node.active = false;
        this.setViewHistory();
      };
      DetaiHistoryMatTroi.prototype.setViewHistory = function() {
        var _this = this;
        this.scrItemWin.content.destroyAllChildren();
        var views = this.totalViews[this.currentView];
        views.forEach(function(element, index) {
          var listSFSObjResult = [];
          for (var i = 0; i < element.length; i++) listSFSObjResult.push(_this.createSFSObjResult(element[i]));
          listSFSObjResult.reverse();
          _this.listColum[index].setResultIcon(listSFSObjResult);
        });
        var listItemWinL = [];
        var listItemWinR = [];
        var lsIdItem = [];
        var lsAgWin = [];
        var lsstack = [];
        var bonusSpinR = this.dataHistory["bonusSpinR"];
        var bonusSpinL = this.dataHistory["bonusSpinL"];
        this.lbBonusMoon.string = "x" + bonusSpinR;
        if (bonusSpinL.length > 0 && bonusSpinL[this.currentView] > 1) {
          this.lbBonusSun.string = "x" + bonusSpinL[this.currentView];
          this.lbBonusSun.node.opacity = 255;
          this.lbBonusSun.node.scale = .6;
        } else {
          this.lbBonusSun.node.opacity = 133;
          this.lbBonusSun.string = "x1";
          this.lbBonusSun.node.scale = .5;
        }
        if (bonusSpinR.length > 0 && bonusSpinR[this.currentView] > 1) {
          this.lbBonusMoon.string = "x" + bonusSpinR[this.currentView];
          this.lbBonusMoon.node.opacity = 255;
          this.lbBonusMoon.node.scale = .6;
        } else {
          this.lbBonusMoon.node.opacity = 133;
          this.lbBonusMoon.string = "x1";
          this.lbBonusMoon.node.scale = .5;
        }
        if (this.dataHistory["listItemWinL"].length > 0 && null != this.dataHistory["listItemWinL"][this.currentView]) {
          listItemWinL = this.dataHistory["listItemWinL"][this.currentView];
          lsIdItem = JSON.parse(listItemWinL["lsIdItem"]);
          lsAgWin = JSON.parse(listItemWinL["lsAgWin"]);
          lsstack = JSON.parse(listItemWinL["lsstack"]);
          var _loop_1 = function(i) {
            var listIdPerCol = [];
            for (var j = 0, l = views.length; j < l; j++) {
              var element = views[j];
              var numberOfIdWinInCol = element.filter(function(dataID) {
                dataID["idItem"] != lsIdItem[i] && 10 != dataID["idItem"] || 10 == dataID["idItem"] && (dataID["isWinLeft"] = true);
                return dataID["idItem"] == lsIdItem[i] || 10 == dataID["idItem"];
              }).length;
              if (0 == numberOfIdWinInCol) break;
              listIdPerCol.push(numberOfIdWinInCol);
            }
            this_1.addItemWinPayline(lsIdItem[i] + 1, lsstack[i], lsAgWin[i], 0, listIdPerCol);
          };
          var this_1 = this;
          for (var i = 0; i < lsIdItem.length; i++) _loop_1(i);
        }
        if (this.dataHistory["listItemWinR"].length > 0 && null != this.dataHistory["listItemWinR"][this.currentView]) {
          listItemWinR = this.dataHistory["listItemWinR"][this.currentView];
          lsIdItem = JSON.parse(listItemWinR["lsIdItem"]);
          lsAgWin = JSON.parse(listItemWinR["lsAgWin"]);
          lsstack = JSON.parse(listItemWinR["lsstack"]);
          var _loop_2 = function(i) {
            var listIdPerCol = [];
            for (var j = views.length - 1; j > 0; j--) {
              var element = views[j];
              var numberOfIdWinInCol = element.filter(function(dataID) {
                return (dataID["idItem"] == lsIdItem[i] || 10 == dataID["idItem"]) && (!dataID.hasOwnProperty("isWinLeft") || dataID.hasOwnProperty("isWinLeft") && false == dataID["isWinLeft"]);
              }).length;
              if (0 == numberOfIdWinInCol) break;
              listIdPerCol.push(numberOfIdWinInCol);
            }
            this_2.addItemWinPayline(lsIdItem[i] + 1, lsstack[i], lsAgWin[i], 1, listIdPerCol);
          };
          var this_2 = this;
          for (var i = 0; i < lsIdItem.length; i++) _loop_2(i);
        }
        null == this.dataHistory["listItemWinR"][this.currentView] && null == this.dataHistory["listItemWinL"][this.currentView] ? this.lbNoWin.active = true : this.lbNoWin.active = false;
      };
      DetaiHistoryMatTroi.prototype.addItemWinPayline = function(id, consecutive, agWin, directionWin, listIdPerCol) {
        var itemWinPayline = cc.instantiate(this.itemWinTemplate).getComponent(ItemWinDetailHistory_1.default);
        this.scrItemWin.content.addChild(itemWinPayline.node);
        itemWinPayline.setInfo(id, consecutive, agWin, directionWin, listIdPerCol);
        itemWinPayline.node.active = true;
      };
      DetaiHistoryMatTroi.prototype.createSFSObjResult = function(objData) {
        var objReturn = null;
        objReturn = ConectManager_1.ConectManager.getIns().getSFSObj();
        objReturn.putInt("size", objData["size"]);
        objReturn.putInt("idItem", objData["idItem"]);
        objReturn.putInt("typeItem", objData["typeItem"]);
        return objReturn;
      };
      DetaiHistoryMatTroi.prototype.initItem = function() {
        var itemTemplate = cc.instantiate(this.parentItem.children[0]);
        var width = itemTemplate.width;
        var lengtItem = 6;
        for (var i = 0; i < lengtItem; i++) {
          var node = this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          var cpItem = node.getComponent(ItemSlotMatTroi_1.default);
          this.listColum.push(cpItem);
          cpItem.index = i;
          cpItem.setResultFirtGame();
          cpItem.node.y = 0;
        }
      };
      DetaiHistoryMatTroi.prototype.onClickClose = function() {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, 721.812, 0), cc.fadeOut(.3).easing(cc.easeElasticOut(3))), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      DetaiHistoryMatTroi.prototype.onClickNextView = function() {
        var _this = this;
        this.currentView < this.totalViews.length - 1 && this.currentView++;
        cc.tween(this.viewDetail).to(.3, {
          opacity: 0
        }, {
          easing: cc.easing.sineOut
        }).call(function() {
          _this.setViewHistory();
          if (_this.currentView == _this.totalViews.length - 1) {
            _this.btnNextView.node.active = false;
            _this.btnBackView.node.active = true;
          } else {
            _this.btnNextView.node.active = true;
            _this.btnBackView.node.active = true;
          }
        }).to(.3, {
          opacity: 255
        }, {
          easing: cc.easing.sineIn
        }).start();
      };
      DetaiHistoryMatTroi.prototype.onClickBackView = function() {
        var _this = this;
        this.currentView > 0 && this.currentView--;
        cc.tween(this.viewDetail).to(.3, {
          opacity: 0
        }, {
          easing: cc.easing.sineOut
        }).call(function() {
          _this.setViewHistory();
          if (0 == _this.currentView) {
            _this.btnNextView.node.active = true;
            _this.btnBackView.node.active = false;
          } else {
            _this.btnNextView.node.active = true;
            _this.btnBackView.node.active = true;
          }
        }).to(.3, {
          opacity: 255
        }, {
          easing: cc.easing.sineIn
        }).start();
      };
      __decorate([ property(cc.Node) ], DetaiHistoryMatTroi.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], DetaiHistoryMatTroi.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Label) ], DetaiHistoryMatTroi.prototype, "lbTitle", void 0);
      __decorate([ property(cc.Label) ], DetaiHistoryMatTroi.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], DetaiHistoryMatTroi.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], DetaiHistoryMatTroi.prototype, "lbWin", void 0);
      __decorate([ property(cc.Label) ], DetaiHistoryMatTroi.prototype, "lbMNUser", void 0);
      __decorate([ property(cc.Label) ], DetaiHistoryMatTroi.prototype, "lbCuocCoSo", void 0);
      __decorate([ property(ItemSlotMatTroi_1.default) ], DetaiHistoryMatTroi.prototype, "listColum", void 0);
      __decorate([ property(cc.ScrollView) ], DetaiHistoryMatTroi.prototype, "scrItemWin", void 0);
      __decorate([ property(cc.Node) ], DetaiHistoryMatTroi.prototype, "itemWinTemplate", void 0);
      __decorate([ property(cc.Button) ], DetaiHistoryMatTroi.prototype, "btnNextView", void 0);
      __decorate([ property(cc.Button) ], DetaiHistoryMatTroi.prototype, "btnBackView", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], DetaiHistoryMatTroi.prototype, "lbBonusSun", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], DetaiHistoryMatTroi.prototype, "lbBonusMoon", void 0);
      __decorate([ property(cc.Node) ], DetaiHistoryMatTroi.prototype, "lbNoWin", void 0);
      __decorate([ property(cc.Node) ], DetaiHistoryMatTroi.prototype, "viewDetail", void 0);
      __decorate([ property(cc.Asset) ], DetaiHistoryMatTroi.prototype, "CApem", void 0);
      DetaiHistoryMatTroi = __decorate([ ccclass ], DetaiHistoryMatTroi);
      return DetaiHistoryMatTroi;
    }(cc.Component);
    exports.default = DetaiHistoryMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Windown": void 0,
    "./ItemSlotMatTroi": "ItemSlotMatTroi",
    "./ItemWinDetailHistory": "ItemWinDetailHistory"
  } ],
  EffectControlMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18893ioByZGe6DFmxHIWQh8", "EffectControlMatTroi");
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
    var Windown_1 = require("../../../Scritps/Windown");
    var InfoBarControllerMatTroi_1 = require("./InfoBarControllerMatTroi");
    var TW = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectControlMatTroi = function(_super) {
      __extends(EffectControlMatTroi, _super);
      function EffectControlMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bottomParent = null;
        _this.parentEffect = null;
        _this.parentEffectLighting = null;
        _this.nodeBonusSun = null;
        _this.nodeBonusMoon = null;
        _this.listLightingMoon = [];
        _this.listLightingSun = [];
        _this.animSunAdd = null;
        _this.animMoonAdd = null;
        _this.animSunTotalBonusSpin = null;
        _this.animMoonTotalBonusSpin = null;
        _this.animGateBonus = null;
        _this.animSunController = null;
        _this.animMoonController = null;
        _this.lbBonusSpinSun = null;
        _this.lbBonusSpinMoon = null;
        _this.lbBonusTotalLR = null;
        _this.infoBarController = null;
        _this._mutilLeft = 1;
        _this._mutilRight = 1;
        return _this;
      }
      EffectControlMatTroi_1 = EffectControlMatTroi;
      EffectControlMatTroi.prototype.onLoad = function() {
        EffectControlMatTroi_1.instance = this;
      };
      EffectControlMatTroi.prototype.effectLightingBonus = function(pointA, idItem, multiplier) {
        var pointB = cc.v2(0, 0);
        var nodeBonus = 9 == idItem ? this.nodeBonusMoon : this.nodeBonusSun;
        pointB = Windown_1.Windown.convertNodeInOtherNode(nodeBonus, this.parentEffectLighting);
        var alpha = cc.misc.radiansToDegrees(Math.atan(Math.abs(pointA.x - pointB.x) / Math.abs(pointA.y - pointB.y)));
        alpha = pointA.x > pointB.x ? -alpha : alpha;
        var distance = cc.Vec2.distance(pointA, pointB);
        var distanceDefault = 665;
        var scaleDefault = cc.v2(1, 1);
        var scaleNew = cc.v2(scaleDefault.x * distance / distanceDefault, scaleDefault.y * distance / distanceDefault);
        var lightingItem = Windown_1.Windown.MatTroiView.asset.getItemLighting(idItem);
        lightingItem.parent = this.parentEffectLighting;
        lightingItem.scaleY = scaleNew.y;
        lightingItem.position = pointA;
        lightingItem.angle = alpha;
        lightingItem.runAction(cc.sequence(cc.delayTime(.3), cc.fadeOut(.2)));
        9 == idItem ? this.listLightingMoon.push(lightingItem) : this.listLightingSun.push(lightingItem);
      };
      EffectControlMatTroi.prototype.addMutil = function(idItem, multiplier) {
        var _this = this;
        return new Promise(function(re, je) {
          return __awaiter(_this, void 0, void 0, function() {
            var delta, current, i, current, i, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                delta = 0 == Windown_1.Windown.MatTroiView.stateSpin.lastFreeSpinLeft ? 1 : 2;
                _a.label = 1;

               case 1:
                _a.trys.push([ 1, 15, , 16 ]);
                if (!(9 == idItem)) return [ 3, 8 ];
                current = this._mutilRight + delta;
                i = 0;
                _a.label = 2;

               case 2:
                if (!(i < multiplier - this._mutilRight)) return [ 3, 5 ];
                this.lbBonusSpinMoon.string = "x" + current;
                this.animMoonAdd.node.active = true;
                this.animMoonAdd.play("Effect_moon_add");
                this.animMoonController.play("LabelMoonAdd");
                Windown_1.Windown.MatTroiView.audio.playEffectNoStop(Windown_1.Windown.MatTroiView.audio.multiIncreaseRight);
                current++;
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.1 / Windown_1.Windown.MatTroiView.getDelta()).prosime ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i += delta;
                return [ 3, 2 ];

               case 5:
                this._mutilRight = multiplier;
                this.lbBonusSpinMoon.string = "x" + multiplier;
                if (!(current > 0)) return [ 3, 7 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.5).prosime ];

               case 6:
                _a.sent();
                _a.label = 7;

               case 7:
                return [ 3, 14 ];

               case 8:
                current = this._mutilLeft + delta;
                i = 0;
                _a.label = 9;

               case 9:
                if (!(i < multiplier - this._mutilLeft)) return [ 3, 12 ];
                this.lbBonusSpinSun.string = "x" + current;
                this.animSunAdd.node.active = true;
                this.animSunAdd.play("Effect_Sun_add");
                this.animSunController.play("LabelSunAdd");
                Windown_1.Windown.MatTroiView.audio.playEffectNoStop(Windown_1.Windown.MatTroiView.audio.multiIncreaseLeft);
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.1 / Windown_1.Windown.MatTroiView.getDelta()).prosime ];

               case 10:
                _a.sent();
                _a.label = 11;

               case 11:
                i += delta;
                return [ 3, 9 ];

               case 12:
                this._mutilLeft = multiplier;
                this.lbBonusSpinSun.string = "x" + multiplier;
                if (!(current > 0)) return [ 3, 14 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.5).prosime ];

               case 13:
                _a.sent();
                _a.label = 14;

               case 14:
                re(null);
                return [ 3, 16 ];

               case 15:
                e_1 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_1);
                return [ 3, 16 ];

               case 16:
                return [ 2 ];
              }
            });
          });
        });
      };
      EffectControlMatTroi.prototype.removeEffectLighting = function(idItem) {
        if (9 == idItem) {
          this.listLightingMoon.forEach(function(lightingItem) {
            lightingItem.stopAllActions();
            lightingItem.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
              Windown_1.Windown.MatTroiView.asset.putItemLighting(lightingItem, idItem);
            })));
          });
          this.listLightingMoon = [];
        } else {
          this.listLightingSun.forEach(function(lightingItem) {
            lightingItem.stopAllActions();
            lightingItem.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
              Windown_1.Windown.MatTroiView.asset.putItemLighting(lightingItem, idItem);
            })));
          });
          this.listLightingSun = [];
        }
        Windown_1.Windown.MatTroiView.listColum.forEach(function(v) {
          v.getListSymbolResult().forEach(function(s) {
            s.result == idItem && s.removeBkgBonusSpin();
          });
        });
      };
      EffectControlMatTroi.prototype.addMultiBonus = function(idItem) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var lbEffectMultipler_1, normalScale, animAdd, posMoveTo, animName, c1, c2;
            return __generator(this, function(_a) {
              try {
                normalScale = 0;
                animAdd = null;
                posMoveTo = cc.v2(0, 0);
                animName = "";
                if (9 == idItem) {
                  lbEffectMultipler_1 = cc.instantiate(this.lbBonusSpinMoon.node.parent);
                  lbEffectMultipler_1.parent = this.bottomParent;
                  animAdd = this.animMoonAdd;
                  animName = "Effect_moon_add";
                  posMoveTo = Windown_1.Windown.convertNodeInOtherNode(this.infoBarController.nodePosMulti, this.bottomParent);
                  lbEffectMultipler_1.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.lbBonusSpinMoon.node.parent, this.bottomParent));
                } else {
                  lbEffectMultipler_1 = cc.instantiate(this.lbBonusSpinSun.node.parent);
                  lbEffectMultipler_1.parent = this.bottomParent;
                  animAdd = this.animSunAdd;
                  animName = "Effect_Sun_add";
                  posMoveTo = Windown_1.Windown.convertNodeInOtherNode(this.infoBarController.nodePosMulti, this.bottomParent);
                  lbEffectMultipler_1.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.lbBonusSpinSun.node.parent, this.bottomParent));
                }
                normalScale = lbEffectMultipler_1.scale;
                posMoveTo = cc.v2(posMoveTo.x, posMoveTo.y);
                animAdd.node.active = true;
                animAdd.play(animName);
                c1 = cc.v2(lbEffectMultipler_1.x, lbEffectMultipler_1.y + 50);
                c2 = cc.v2(lbEffectMultipler_1.x + (9 == idItem ? -150 : 150), lbEffectMultipler_1.y + 200);
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.multiFly);
                cc.tween(lbEffectMultipler_1).to(.3 / Windown_1.Windown.MatTroiView.getDelta(), {
                  scale: normalScale + 1,
                  opacity: 133
                }, {
                  easing: cc.easing.sineOut
                }).parallel(TW().bezierTo(.5 / Windown_1.Windown.MatTroiView.getDelta(), c1, c2, posMoveTo), TW().to(.5 / Windown_1.Windown.MatTroiView.getDelta(), {
                  scale: normalScale + .3
                })).call(function() {
                  resolve(null);
                  Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.prizeInfobarMultiwin);
                }).to(.2 / Windown_1.Windown.MatTroiView.getDelta(), {
                  scale: normalScale + 1.5,
                  opacity: 0
                }, {
                  easing: cc.easing.sineInOut
                }).call(function() {
                  lbEffectMultipler_1.destroy();
                }).start();
              } catch (e) {
                Util_1.Util.ThrowErrProsime(e);
              }
              return [ 2 ];
            });
          });
        });
      };
      EffectControlMatTroi.prototype.addMultiBonusTotal = function(totalBonus) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          var time = Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed ? .15 : .3;
          var cb = function(idItem) {
            var lbEffectMultipler;
            var normalScale = 0;
            var animAdd = null;
            var posMoveTo = cc.v2(0, 0);
            var animName = "";
            if (9 == idItem) {
              lbEffectMultipler = cc.instantiate(_this.lbBonusSpinMoon.node.parent);
              lbEffectMultipler.parent = _this.bottomParent;
              255 != _this.lbBonusSpinMoon.node.opacity && (lbEffectMultipler.scale = lbEffectMultipler.scale + .5);
              animAdd = _this.animMoonAdd;
              animName = "Effect_moon_add";
              posMoveTo = Windown_1.Windown.convertNodeInOtherNode(_this.animGateBonus.node, _this.bottomParent);
              lbEffectMultipler.setPosition(Windown_1.Windown.convertNodeInOtherNode(_this.lbBonusSpinMoon.node, _this.bottomParent));
            } else {
              lbEffectMultipler = cc.instantiate(_this.lbBonusSpinSun.node.parent);
              lbEffectMultipler.parent = _this.bottomParent;
              255 != _this.lbBonusSpinSun.node.opacity && (lbEffectMultipler.scale = lbEffectMultipler.scale + .5);
              animAdd = _this.animSunAdd;
              animName = "Effect_Sun_add";
              posMoveTo = Windown_1.Windown.convertNodeInOtherNode(_this.animGateBonus.node, _this.bottomParent);
              lbEffectMultipler.setPosition(Windown_1.Windown.convertNodeInOtherNode(_this.lbBonusSpinSun.node, _this.bottomParent));
            }
            normalScale = lbEffectMultipler.scale;
            animAdd.node.active = true;
            var c1 = cc.v2(lbEffectMultipler.x, lbEffectMultipler.y - 30);
            var c2 = cc.v2(lbEffectMultipler.x + (9 == idItem ? -100 : 100), lbEffectMultipler.y - 70);
            _this.lbBonusTotalLR.string = "x" + totalBonus;
            cc.tween(lbEffectMultipler).to(time, {
              scale: normalScale + .7,
              opacity: 133
            }, {
              easing: cc.easing.sineOut
            }).parallel(TW().bezierTo(time, c1, c2, posMoveTo), TW().to(time, {
              scale: normalScale + .2
            }, {
              easing: cc.easing.sineOut
            }), TW().delay(.1).call(function() {
              _this.animGateBonus.play("mf_podium_open");
              Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.multiIncreaseCenter);
              _this.hideAnimLightingSunMoonTotal(idItem);
              cc.tween(_this.animGateBonus.node).delay(.1).call(function() {
                _this.animGateBonus.node.getChildByName("mf_vfx_d_screen_01").active = true;
                _this.lbBonusTotalLR.node.active = true;
                _this.lbBonusTotalLR.node.opacity = 150;
                _this.lbBonusTotalLR.node.scale = .3;
                cc.tween(_this.lbBonusTotalLR.node).to(time, {
                  scale: .65,
                  opacity: 255
                }, {
                  easing: cc.easing.bounceOut
                }).delay(.5 / Windown_1.Windown.MatTroiView.getDelta()).call(function() {
                  var posMoveTo = Windown_1.Windown.convertNodeInOtherNode(_this.infoBarController.nodePosMulti, _this.lbBonusTotalLR.node.parent);
                  var lbFade = cc.instantiate(_this.lbBonusTotalLR.node);
                  lbFade.parent = _this.lbBonusTotalLR.node.parent;
                  _this.lbBonusTotalLR.node.opacity = 100;
                  cc.tween(lbFade).to(.35 / Windown_1.Windown.MatTroiView.getDelta(), {
                    scale: .35,
                    opacity: 100,
                    y: _this.lbBonusTotalLR.node.y - 80
                  }, {
                    easing: cc.easing.sineIn
                  }).call(function() {
                    resolve(null);
                  }).set({
                    x: posMoveTo.x,
                    y: posMoveTo.y,
                    opacity: 0
                  }).to(.35 / Windown_1.Windown.MatTroiView.getDelta(), {
                    opacity: 133,
                    scale: .9
                  }, {
                    easing: cc.easing.sineOut
                  }).call(function() {
                    lbFade.y = 1e3;
                  }).delay(1 / Windown_1.Windown.MatTroiView.getDelta()).call(function() {
                    if ("mf_podium_open" == _this.animGateBonus.currentClip.name) {
                      _this.animGateBonus.node.getChildByName("mf_vfx_d_screen_01").active = false;
                      _this.animGateBonus.play("mf_podium_close");
                      Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.multiIncreaseCenterClose);
                      cc.tween(_this.lbBonusTotalLR.node).to(.65, {
                        opacity: 0
                      }).call(function() {
                        _this.lbBonusTotalLR.node.active = false;
                      }).start();
                      lbFade.destroy();
                    }
                  }).start();
                }).start();
              }).start();
            })).call(function() {
              lbEffectMultipler.destroy();
            }).start();
          };
          cb(10);
          cb(9);
        });
      };
      EffectControlMatTroi.prototype.resetForNewSpin = function() {
        if (null != Windown_1.Windown.MatTroiView.dataFinish && 0 == Windown_1.Windown.MatTroiView.dataFinish.get("numFreeSpin") || null == Windown_1.Windown.MatTroiView.dataFinish) {
          this._mutilLeft = 1;
          this._mutilRight = 1;
          if (null != this.animMoonController.currentClip && "LabelMoonAdd" == this.animMoonController.currentClip.name) {
            cc.log("nhay me no vao day roi=====================");
            this.lbBonusSpinMoon.string = "x1";
            this.animMoonController.play("LabelMoonReset");
            this.animMoonAdd.node.active = false;
          } else this.animMoonAdd.node.active = false;
          if (null != this.animSunController.currentClip && "LabelSunAdd" == this.animSunController.currentClip.name) {
            this.lbBonusSpinSun.string = "x1";
            this.animSunController.play("LabelSunReset");
            this.animSunAdd.node.active = false;
          } else this.animSunAdd.node.active = false;
        }
      };
      EffectControlMatTroi.prototype.showAnimLightingSunMoonTotal = function(idCheck) {
        Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.multiLightning);
        var animTotal = 10 == idCheck ? this.animSunTotalBonusSpin : this.animMoonTotalBonusSpin;
        animTotal.node.active = true;
        cc.tween(animTotal.node).set({
          opacity: 0
        }).to(.2, {
          opacity: 255
        }).start();
      };
      EffectControlMatTroi.prototype.hideAnimLightingSunMoonTotal = function(idCheck) {
        var animTotal = 10 == idCheck ? this.animSunTotalBonusSpin : this.animMoonTotalBonusSpin;
        cc.tween(animTotal.node).to(.5 / Windown_1.Windown.MatTroiView.getDelta(), {
          opacity: 0
        }).call(function() {
          animTotal.node.active = false;
        }).start();
      };
      EffectControlMatTroi.prototype.openGateBonusSpin = function() {
        this.animGateBonus.play("mf_podium_open");
      };
      EffectControlMatTroi.prototype.showInitBonusFreeSpin = function(mutilLeft, mutilRight) {
        this._mutilLeft = mutilLeft || 2;
        this._mutilRight = mutilRight || 2;
        cc.log("bonus no la=============================");
        cc.log(this._mutilLeft);
        cc.log(this._mutilRight);
        this.lbBonusSpinMoon.string = "x" + this._mutilRight;
        this.animMoonController.play("LabelMoonAdd");
        this.lbBonusSpinSun.string = "x" + this._mutilLeft;
        this.animSunController.play("LabelSunAdd");
        this.animMoonAdd.node.active = true;
        this.animSunAdd.node.active = true;
      };
      EffectControlMatTroi.prototype.showWinScatter = function() {
        return new Promise(function(re, je) {});
      };
      var EffectControlMatTroi_1;
      EffectControlMatTroi.instance = null;
      __decorate([ property(cc.Node) ], EffectControlMatTroi.prototype, "bottomParent", void 0);
      __decorate([ property(cc.Node) ], EffectControlMatTroi.prototype, "parentEffect", void 0);
      __decorate([ property(cc.Node) ], EffectControlMatTroi.prototype, "parentEffectLighting", void 0);
      __decorate([ property(cc.Node) ], EffectControlMatTroi.prototype, "nodeBonusSun", void 0);
      __decorate([ property(cc.Node) ], EffectControlMatTroi.prototype, "nodeBonusMoon", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animSunAdd", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animMoonAdd", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animSunTotalBonusSpin", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animMoonTotalBonusSpin", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animGateBonus", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animSunController", void 0);
      __decorate([ property(cc.Animation) ], EffectControlMatTroi.prototype, "animMoonController", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], EffectControlMatTroi.prototype, "lbBonusSpinSun", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], EffectControlMatTroi.prototype, "lbBonusSpinMoon", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], EffectControlMatTroi.prototype, "lbBonusTotalLR", void 0);
      __decorate([ property(InfoBarControllerMatTroi_1.default) ], EffectControlMatTroi.prototype, "infoBarController", void 0);
      EffectControlMatTroi = EffectControlMatTroi_1 = __decorate([ ccclass ], EffectControlMatTroi);
      return EffectControlMatTroi;
    }(cc.Component);
    exports.default = EffectControlMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./InfoBarControllerMatTroi": "InfoBarControllerMatTroi"
  } ],
  EffectMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d61bcwBv1pNgKYUhq7OCyL2", "EffectMatTroi");
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
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var LbMonoSpace_1 = require("../../../Scritps/Other/LbMonoSpace");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var EffectControlMatTroi_1 = require("./EffectControlMatTroi");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectMatTroi = function(_super) {
      __extends(EffectMatTroi, _super);
      function EffectMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.lb_Money = null;
        _this.nodeBigWin = null;
        _this.listNodeBoxMoney = [];
        _this.btnFast = null;
        _this.aniBigWin = null;
        _this.listPromiseIgro = [];
        _this.isClickBtnFast = false;
        _this.funNext = null;
        _this.funDelayOff = null;
        _this.mapColor = new Map();
        return _this;
      }
      EffectMatTroi.prototype.onLoad = function() {
        this.funNext = null;
        this.aniBigWin = this.nodeBigWin.getComponent(cc.Animation);
      };
      EffectMatTroi.prototype.onEnable = function() {};
      EffectMatTroi.prototype.onDisable = function() {
        this.unschedule(this.funDelayOff);
      };
      EffectMatTroi.prototype.initPosMask = function(pos) {
        cc.find("mask", this.node).y = pos;
      };
      EffectMatTroi.prototype.onClickBtnShowFast = function() {
        this.btnFast.interactable = false;
        this.isClickBtnFast = true;
        while (this.listPromiseIgro.length > 0) {
          var obj = this.listPromiseIgro.shift();
          obj.cancle(true);
        }
      };
      EffectMatTroi.prototype.showBigWin = function(moneyRevice, mutilRevice) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var time, nodeBigWin_1, nodeMegaWin, nodeSuperWin, objDelay1, objDelay2, objDelay2, sfsObj, nodeLbm, objDelay3, e_1;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 7, , 8 ]);
                this.scheduleOnce(function() {
                  _this.btnFast.interactable = true;
                }, .5);
                this.lb_Money.node.active = true;
                this.nodeBigWin.active = true;
                this.nodeBigWin.opacity = 255;
                this.lb_Money.resetLb();
                time = 4;
                time = mutilRevice < 30 ? 4 : mutilRevice < 50 ? 8 : 12;
                nodeBigWin_1 = this.nodeBigWin.getChildByName("NodeBigWin");
                nodeMegaWin = this.nodeBigWin.getChildByName("NodeMegaWin");
                nodeSuperWin = this.nodeBigWin.getChildByName("NodeSuperWin");
                this.lb_Money.time = time;
                this.lb_Money.setMoney(moneyRevice);
                nodeBigWin_1.active = true;
                nodeMegaWin.active = false;
                nodeSuperWin.active = false;
                this.aniBigWin.off(cc.Animation.EventType.FINISHED);
                this.aniBigWin.once(cc.Animation.EventType.FINISHED, function() {
                  _this.aniBigWin.play("Effect_BigWinLoop");
                });
                this.aniBigWin.play("Effect_BigWin");
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.bgm_bigwin_main, .7);
                objDelay1 = Windown_1.Windown.MatTroiView.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay1);
                return [ 4, objDelay1.prosime ];

               case 1:
                _a.sent();
                if (!(mutilRevice >= 30)) return [ 3, 3 ];
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.bgm_bigwin_end);
                nodeMegaWin.active = true;
                cc.tween(nodeBigWin_1).to(.3, {
                  opacity: 0
                }).call(function() {
                  nodeBigWin_1.active = false;
                }).start();
                this.aniBigWin.off(cc.Animation.EventType.FINISHED);
                this.aniBigWin.once(cc.Animation.EventType.FINISHED, function() {
                  _this.aniBigWin.play("Effect_MegaWinLoop");
                });
                this.aniBigWin.play("Effect_MegaWin");
                if (!!this.isClickBtnFast) return [ 3, 3 ];
                objDelay2 = Windown_1.Windown.MatTroiView.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                if (!(mutilRevice >= 50)) return [ 3, 5 ];
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.bgm_bigwin_end);
                nodeSuperWin.active = true;
                cc.tween(nodeMegaWin).to(.3, {
                  opacity: 0
                }).call(function() {
                  nodeBigWin_1.active = false;
                }).start();
                this.aniBigWin.off(cc.Animation.EventType.FINISHED);
                this.aniBigWin.once(cc.Animation.EventType.FINISHED, function() {
                  _this.aniBigWin.play("Effect_SuperWinLoop");
                });
                this.aniBigWin.play("Effect_SuperWin");
                if (!!this.isClickBtnFast) return [ 3, 5 ];
                objDelay2 = Windown_1.Windown.MatTroiView.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                Windown_1.Windown.MatTroiView.audio.stopEffect(Windown_1.Windown.MatTroiView.audio.bgm_bigwin_main);
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.bgm_bigwin_end);
                if (Windown_1.Windown.MatTroiView.dataFinish) {
                  sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                  sfsObj.putInt("gt", GAME_TYPE_1.default.MatTroi);
                  sfsObj.putInt("mt", Windown_1.Windown.MatTroiView.dataFinish.get("agWin"));
                  sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                  sfsObj.putUtfString("dt", "bw");
                  ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                }
                this.lb_Money.setMoneyNoTime(moneyRevice);
                nodeLbm = this.lb_Money.node;
                nodeLbm.stopAllActions();
                nodeLbm.runAction(cc.sequence(cc.scaleTo(.3, 1.15), cc.scaleTo(.3, .8)));
                objDelay3 = Windown_1.Windown.MatTroiView.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay3);
                this.btnFast.interactable = true;
                return [ 4, objDelay3.prosime ];

               case 6:
                _a.sent();
                this.nodeBigWin.stopAllActions();
                this.nodeBigWin.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                  _this.nodeBigWin.active = false;
                  _this.funNext = resolve;
                  _this.onClose();
                })));
                return [ 3, 8 ];

               case 7:
                e_1 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_1);
                return [ 3, 8 ];

               case 8:
                return [ 2 ];
              }
            });
          });
        });
      };
      EffectMatTroi.prototype.showTakeFreeSpin = function(numFree) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var pre, node, node2_1, funOffShowTake_1, button_1, e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 3, , 4 ]);
                Windown_1.Windown.MatTroiView.stateSpin.freeSpinCache = numFree;
                Windown_1.Windown.MatTroiView.stateSpin.activeAllSymbol();
                Windown_1.Windown.MatTroiView.listColum.forEach(function(v) {
                  v.getListSymbolResult().forEach(function(v2) {
                    v2.effectScaterShowFS();
                  });
                });
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.scatterWinHighlight);
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.heartbeatNoise);
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(1.5).prosime ];

               case 1:
                _a.sent();
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.MatTroi.toString(), "Prefabs/ShowFreeSpin", cc.Prefab) ];

               case 2:
                pre = _a.sent();
                node = cc.instantiate(pre);
                node.parent = this.node;
                node.zIndex = 1;
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.fsIntro);
                node2_1 = cc.find("GetFreeSpin", node);
                cc.find("lbFreeSpinNum", node2_1).getComponent(LbMonoSpace_1.default).string = numFree + "";
                node2_1.active = true;
                this.swidthFS(true);
                funOffShowTake_1 = function() {
                  node2_1.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                    node2_1.destroy();
                  })));
                  resolve(null);
                };
                button_1 = cc.find("btnStart", node2_1).getComponent(cc.Button);
                button_1.node.opacity = 0;
                button_1.node.runAction(cc.sequence(cc.fadeIn(1), cc.callFunc(function() {
                  button_1.node.once("click", funOffShowTake_1);
                }), cc.delayTime(5), cc.callFunc(funOffShowTake_1)));
                return [ 3, 4 ];

               case 3:
                e_2 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_2);
                return [ 3, 4 ];

               case 4:
                return [ 2 ];
              }
            });
          });
        });
      };
      EffectMatTroi.prototype.showEndFree = function(totalMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listDelay_1, pre, node_1, animNode_1, lbMoney, sfsObj, btnThuThap, funClickThuThap, objDelay1, objDelay2, e_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 4, , 5 ]);
                if (totalMoney < 1) {
                  Windown_1.Windown.MatTroiView.audio.stopBkgFs();
                  this.swidthFS(false);
                  resolve(null);
                  return [ 2 ];
                }
                listDelay_1 = [];
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.MatTroi.toString(), "Prefabs/EndFreeSpin", cc.Prefab) ];

               case 1:
                pre = _a.sent();
                this.swidthFS(false);
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.bgm_totalwin_main);
                node_1 = cc.instantiate(pre);
                node_1.parent = this.node;
                node_1.zIndex = 999;
                animNode_1 = node_1.getComponent(cc.Animation);
                animNode_1.play("Effect_Total_Win");
                animNode_1.on(cc.Animation.EventType.FINISHED, function() {
                  animNode_1.play("Effect_Total_Win_Loop");
                });
                lbMoney = node_1.getComponentInChildren(LbMonoSpace_1.default);
                lbMoney.resetLb();
                lbMoney.time = 4.3;
                lbMoney.setMoney(totalMoney);
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.MatTroi);
                sfsObj.putInt("mt", totalMoney);
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "fs");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                btnThuThap = cc.find("btnStart", node_1);
                btnThuThap.active = false;
                btnThuThap.opacity = 0;
                funClickThuThap = function() {
                  node_1.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                    node_1.destroy();
                    resolve(null);
                    Windown_1.Windown.MatTroiView.audio.stopBkgFs();
                  })));
                };
                this.scheduleOnce(function() {
                  node_1.once(cc.Node.EventType.TOUCH_END, function() {
                    while (listDelay_1.length > 0) {
                      var obj = listDelay_1.shift();
                      obj.cancle(true);
                    }
                  });
                }, .5);
                objDelay1 = Windown_1.Windown.MatTroiView.getMakeDelay(4.25);
                listDelay_1.push(objDelay1);
                return [ 4, objDelay1.prosime ];

               case 2:
                _a.sent();
                lbMoney.setMoneyNoTime(totalMoney);
                lbMoney.node.runAction(cc.sequence(cc.scaleTo(.3, 1.1), cc.scaleTo(.3, .8)));
                cc.find("tw", node_1).runAction(cc.sequence(cc.scaleTo(.3, 1.3), cc.scaleTo(.3, 1)));
                btnThuThap.active = true;
                btnThuThap.runAction(cc.fadeIn(.5));
                btnThuThap.once("click", funClickThuThap);
                Windown_1.Windown.MatTroiView.audio.stopEffect(Windown_1.Windown.MatTroiView.audio.bgm_totalwin_main);
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.bgm_totalwin_end);
                objDelay2 = Windown_1.Windown.MatTroiView.getMakeDelay(6);
                listDelay_1.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 3:
                _a.sent();
                funClickThuThap();
                return [ 3, 5 ];

               case 4:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      EffectMatTroi.prototype.swidthFS = function(isFs, mutilLeft, mutilRight) {
        if (isFs) {
          this.listNodeBoxMoney.forEach(function(v) {
            v.y = -613;
          });
          Windown_1.Windown.MatTroiView.switchBkgGame(true);
          Windown_1.Windown.MatTroiView.audio.playBkgfs();
          EffectControlMatTroi_1.default.instance.showInitBonusFreeSpin(mutilLeft, mutilRight);
        } else {
          this.listNodeBoxMoney.forEach(function(v) {
            v.y = -391.26;
          });
          Windown_1.Windown.MatTroiView.switchBkgGame(false);
        }
      };
      EffectMatTroi.prototype.startXu = function(node, timeDelay) {
        var _this = this;
        node.opacity = 0;
        node.stopAllActions();
        node.scale = Windown_1.Windown.RandomNumber(30, 80) / 100;
        var start = cc.v2(0, 0);
        var scaleStart = Windown_1.Windown.RandomNumber(600, 1e3) / 1e3;
        var scaleEnd = Windown_1.Windown.RandomNumber(800, 1300) / 1e3;
        var _a = this.pointsOnCircle({
          radius: 1e3,
          angle: Windown_1.Windown.RandomNumber(0, 360),
          cx: 0,
          cy: 0
        }), x = _a[0], y = _a[1];
        var end = cc.v2(x, y);
        var time = Windown_1.Windown.RandomNumber(1.5, 2.5);
        timeDelay += Windown_1.Windown.RandomNumber(0, 10) / 10;
        node.angle = Windown_1.Windown.RandomNumber(0, 360);
        node.setPosition(start);
        var action1 = cc.moveTo(time, end);
        node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.callFunc(function() {
          node.opacity = 255;
          node.getComponent(cc.Animation).play("Xu");
        }), action1, cc.callFunc(function() {
          _this.startXu(node, 0);
        })));
      };
      EffectMatTroi.prototype.pointsOnCircle = function(_a) {
        var radius = _a.radius, angle = _a.angle, cx = _a.cx, cy = _a.cy;
        angle *= Math.PI / 180;
        var x = cx + radius * Math.sin(angle);
        var y = cy + radius * Math.cos(angle);
        return [ x, y ];
      };
      EffectMatTroi.prototype.resetView = function() {
        this.lb_Money.node.getComponent(LbMonoSpace_1.default).resetLb();
        this.lb_Money.node.active = false;
        this.node.opacity = 255;
        this.nodeBigWin.active = false;
      };
      EffectMatTroi.prototype.onClose = function() {
        var _this = this;
        this.btnFast.interactable = false;
        this.unschedule(this.funDelayOff);
        this.unschedule(this.onClose);
        this.funNext && this.funNext();
        this.funNext = null;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
          _this.resetView();
        })));
        this.isClickBtnFast = false;
      };
      __decorate([ property(cc.Node) ], EffectMatTroi.prototype, "nodeMask", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], EffectMatTroi.prototype, "lb_Money", void 0);
      __decorate([ property(cc.Node) ], EffectMatTroi.prototype, "nodeBigWin", void 0);
      __decorate([ property([ cc.Node ]) ], EffectMatTroi.prototype, "listNodeBoxMoney", void 0);
      __decorate([ property(cc.Button) ], EffectMatTroi.prototype, "btnFast", void 0);
      EffectMatTroi = __decorate([ ccclass ], EffectMatTroi);
      return EffectMatTroi;
    }(cc.Component);
    exports.default = EffectMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./EffectControlMatTroi": "EffectControlMatTroi"
  } ],
  EffectScaterMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd824NpxjBI46xHEpA74dos", "EffectScaterMatTroi");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.haoQuang2 = null;
        _this.haoQuang3 = null;
        _this.ani = null;
        _this.ske = null;
        return _this;
      }
      NewClass.prototype.showFs = function() {
        this.ani.play();
        this.ske.setAnimation(0, "spawn", false);
        this.ske.addAnimation(0, "fastspin_idle", true);
      };
      NewClass.prototype.start = function() {
        var _this = this;
        var nodeBkg = Windown_1.Windown.MatTroiView.asset.getBgScatter();
        nodeBkg.parent = Windown_1.Windown.MatTroiView.parentBackgroundEffect;
        nodeBkg.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, nodeBkg.parent));
        this.bkg = nodeBkg;
        this.bkg.opacity = 0;
        this.bkg.runAction(cc.fadeIn(.3));
        this.haoQuang3.runAction(cc.repeatForever(cc.rotateBy(1, 80)));
        this.haoQuang2.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
          _this.haoQuang2.scale = .4;
          _this.haoQuang2.opacity = 255;
        }), cc.spawn(cc.scaleTo(1, 1).easing(cc.easeQuarticActionOut()), cc.fadeOut(1.2).easing(cc.easeQuinticActionIn())))));
        this.ske.setAnimation(0, "fastspin_idle", true);
      };
      NewClass.prototype.onDestroy = function() {
        this.bkg && this.bkg.destroy();
      };
      NewClass.prototype.update = function(dt) {
        this.bkg && this.bkg.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, this.bkg.parent));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "haoQuang2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "haoQuang3", void 0);
      __decorate([ property(cc.Animation) ], NewClass.prototype, "ani", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "ske", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  InfoBarControllerMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "effc5kPMrFBMa0MD51Hb9zk", "InfoBarControllerMatTroi");
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
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InfoBarConTrollerMatTroi = function(_super) {
      __extends(InfoBarConTrollerMatTroi, _super);
      function InfoBarConTrollerMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbMoney = null;
        _this.spTotalWin = null;
        _this.spWin = null;
        _this.spInfoBar = null;
        _this.listInfoBar = [];
        _this.spMaskInfoBar = [];
        _this.listMaskInfoBar = [];
        _this.listBgInfoBar = [];
        _this.parentOneMore = null;
        _this.parentContent = null;
        _this.parentMoney = null;
        _this.listAnimAdd = [];
        _this.animTotalAdd = null;
        _this.nodePosMulti = null;
        _this.ani = null;
        _this.bgInfo = null;
        return _this;
      }
      InfoBarConTrollerMatTroi.prototype.onLoad = function() {
        var _this = this;
        this.parentContent.x = 360;
        this.parentContent.runAction(cc.repeatForever(cc.sequence(cc.moveTo(80, -5723.291, 4.555), cc.callFunc(function() {
          _this.parentContent.x = 272;
        }))));
        this.showRdContent();
        this.bgInfo = this.listBgInfoBar[0];
      };
      InfoBarConTrollerMatTroi.prototype.showRdContent = function() {
        this.parentContent.active = true;
        this.parentOneMore.active = false;
        this.parentMoney.active = false;
      };
      InfoBarConTrollerMatTroi.prototype.showOneMoreScater = function() {
        if (!this.parentOneMore.active) {
          this.parentContent.active = false;
          this.parentOneMore.active = true;
          this.parentMoney.active = false;
          this.parentOneMore.getComponent(cc.Animation).play("Effect_Oms");
        }
      };
      InfoBarConTrollerMatTroi.prototype.hideOneMoreScatter = function() {
        this.parentContent.active = true;
        this.parentOneMore.active = false;
      };
      InfoBarConTrollerMatTroi.prototype.showTakeMoney = function(money) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(r, j) {
              return __awaiter(_this, void 0, void 0, function() {
                var e_1;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 2, , 3 ]);
                    Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.prizeInfobarSmallwin);
                    cc.find("ParrentMoney/info_win", this.node).active = false;
                    this.ani = this.listAnimAdd[0];
                    this.ani.node.active = true;
                    this.ani.node.opacity = 255;
                    this.ani.off(cc.Animation.EventType.FINISHED);
                    this.ani.play("Effect_normal_add");
                    this.parentMoney.active = true;
                    this.parentMoney.stopAllActions();
                    this.parentMoney.scale = 0;
                    this.parentMoney.runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(r)));
                    this.parentContent.active = false;
                    this.parentOneMore.active = false;
                    this.lbMoney.setMoneyNoTime(money);
                    return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(3 / Windown_1.Windown.MatTroiView.getDelta()).prosime ];

                   case 1:
                    _a.sent();
                    r(null);
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
      InfoBarConTrollerMatTroi.prototype.showTakeMoneyTurn = function(money) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            cc.log("showTakeMoneyTurn");
            return [ 2, new Promise(function(r, j) {
              cc.find("ParrentMoney/info_win", _this.node).active = true;
              cc.find("ParrentMoney/info_win", _this.node).getComponent(cc.Sprite).spriteFrame = _this.spWin;
              _this.parentContent.active = false;
              _this.parentOneMore.active = false;
              _this.parentMoney.active = true;
              _this.parentMoney.scale = 0;
              _this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3)));
              _this.lbMoney.setMoneyNoTime(money);
              var moneyBet = Windown_1.Windown.MatTroiView.curRoomBet * Windown_1.Windown.MatTroiView.totalLineBet;
              var mutilWin = money / moneyBet;
              _this.ani.off(cc.Animation.EventType.FINISHED);
              if (mutilWin < 5) {
                _this.bgInfo = _this.listBgInfoBar[0];
                _this.bgInfo.active = true;
                _this.ani = _this.listAnimAdd[0];
                _this.ani.play("Effect_normal_add");
              } else if (mutilWin < 15) {
                _this.bgInfo = _this.listBgInfoBar[1];
                _this.bgInfo.active = true;
                _this.ani = _this.listAnimAdd[1];
                _this.ani.play("Effect_Small_add");
                _this.ani.on(cc.Animation.EventType.FINISHED, function() {
                  _this.ani.play("Effect_Small_add_loop");
                });
              } else {
                _this.bgInfo = _this.listBgInfoBar[2];
                _this.bgInfo.active = true;
                _this.ani = _this.listAnimAdd[0];
                _this.ani.play("Effect_Super_add");
              }
              _this.ani.node.active = true;
              _this.ani.node.opacity = 255;
              255 != _this.bgInfo.opacity && cc.tween(_this.bgInfo).set({
                opacity: 0
              }).to(.2, {
                opacity: 255
              }).start();
              r(null);
            }) ];
          });
        });
      };
      InfoBarConTrollerMatTroi.prototype.reset = function() {
        var _this = this;
        this.spInfoBar.spriteFrame = this.listInfoBar[0];
        this.spMaskInfoBar.forEach(function(v) {
          v.spriteFrame = _this.listMaskInfoBar[0];
        });
        this.listAnimAdd.forEach(function(ani) {
          ani.node.parent.active = false;
          ani.node.active = false;
        });
        if (this.bgInfo != this.listBgInfoBar[0]) {
          var bgPrevious_1 = this.bgInfo;
          cc.tween(bgPrevious_1).to(.3, {
            opacity: 0
          }).call(function() {
            bgPrevious_1.active = false;
          }).start();
        }
        this.bgInfo = this.listBgInfoBar[0];
        this.bgInfo.active = true;
      };
      InfoBarConTrollerMatTroi.prototype.showTotalMoney = function(money) {
        var _this = this;
        cc.log("showTotalMoney");
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyBet, mutilWin, e_2, e_3;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 11, , 12 ]);
                if (0 == money) {
                  r(null);
                  return [ 2 ];
                }
                moneyBet = Windown_1.Windown.MatTroiView.curRoomBet * Windown_1.Windown.MatTroiView.totalLineBet;
                mutilWin = money / moneyBet;
                cc.find("ParrentMoney/info_win", this.node).active = true;
                this.ani.off(cc.Animation.EventType.FINISHED);
                if (!(mutilWin < 7)) return [ 3, 2 ];
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.prizeInfobarTotalwin);
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                this.parentMoney.scale = 0;
                cc.find("ParrentMoney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3)));
                this.ani = this.listAnimAdd[0];
                this.ani.play("Effect_normal_add");
                this.bgInfo.active = true;
                this.lbMoney.setMoneyNoTime(money);
                this.ani.node.active = true;
                this.ani.node.opacity = 255;
                255 != this.bgInfo.opacity && cc.tween(this.bgInfo).set({
                  opacity: 0
                }).to(.2, {
                  opacity: 255
                }).start();
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(1).prosime ];

               case 1:
                _a.sent();
                return [ 3, 10 ];

               case 2:
                if (!(mutilWin < 15)) return [ 3, 5 ];
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.prizeInfobarCountingMain);
                Windown_1.Windown.MatTroiView.audio.playSmalWin();
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMoney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.ani = this.listAnimAdd[1];
                this.ani.play("Effect_Small_add");
                this.ani.on(cc.Animation.EventType.FINISHED, function() {
                  _this.ani.play("Effect_Small_add_loop");
                });
                this.bgInfo = this.listBgInfoBar[1];
                this.lbMoney.resetLb();
                this.bgInfo.active = true;
                this.lbMoney.time = 2.5;
                this.lbMoney.setMoney(money);
                this.ani.node.active = true;
                this.ani.node.opacity = 255;
                255 != this.bgInfo.opacity && cc.tween(this.bgInfo).set({
                  opacity: 0
                }).to(.2, {
                  opacity: 255
                }).start();
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(2.5).prosime ];

               case 3:
                _a.sent();
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.prizeInfobarCountingEnd);
                this.parentMoney.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)));
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.3).prosime ];

               case 4:
                _a.sent();
                return [ 3, 10 ];

               case 5:
                _a.trys.push([ 5, 7, , 8 ]);
                return [ 4, Windown_1.Windown.MatTroiView.effect.showBigWin(money, mutilWin) ];

               case 6:
                _a.sent();
                return [ 3, 8 ];

               case 7:
                e_2 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_2);
                return [ 3, 8 ];

               case 8:
                this.parentMoney.scale = 1;
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMoney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.ani = this.listAnimAdd[2];
                this.ani.play("Effect_Super_add");
                this.bgInfo = this.listBgInfoBar[2];
                this.bgInfo.active = true;
                this.lbMoney.setMoneyNoTime(money);
                cc.find("ParrentMoney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.ani.node.active = true;
                this.ani.node.opacity = 255;
                255 != this.bgInfo.opacity && cc.tween(this.bgInfo).set({
                  opacity: 0
                }).to(.2, {
                  opacity: 255
                }).start();
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.3).prosime ];

               case 9:
                _a.sent();
                _a.label = 10;

               case 10:
                r(null);
                return [ 3, 12 ];

               case 11:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 12 ];

               case 12:
                return [ 2 ];
              }
            });
          });
        });
      };
      __decorate([ property(LbMonoSpace_1.default) ], InfoBarConTrollerMatTroi.prototype, "lbMoney", void 0);
      __decorate([ property(cc.SpriteFrame) ], InfoBarConTrollerMatTroi.prototype, "spTotalWin", void 0);
      __decorate([ property(cc.SpriteFrame) ], InfoBarConTrollerMatTroi.prototype, "spWin", void 0);
      __decorate([ property(cc.Sprite) ], InfoBarConTrollerMatTroi.prototype, "spInfoBar", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], InfoBarConTrollerMatTroi.prototype, "listInfoBar", void 0);
      __decorate([ property([ cc.Sprite ]) ], InfoBarConTrollerMatTroi.prototype, "spMaskInfoBar", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], InfoBarConTrollerMatTroi.prototype, "listMaskInfoBar", void 0);
      __decorate([ property([ cc.Node ]) ], InfoBarConTrollerMatTroi.prototype, "listBgInfoBar", void 0);
      __decorate([ property(cc.Node) ], InfoBarConTrollerMatTroi.prototype, "parentOneMore", void 0);
      __decorate([ property(cc.Node) ], InfoBarConTrollerMatTroi.prototype, "parentContent", void 0);
      __decorate([ property(cc.Node) ], InfoBarConTrollerMatTroi.prototype, "parentMoney", void 0);
      __decorate([ property([ cc.Animation ]) ], InfoBarConTrollerMatTroi.prototype, "listAnimAdd", void 0);
      __decorate([ property(cc.Animation) ], InfoBarConTrollerMatTroi.prototype, "animTotalAdd", void 0);
      __decorate([ property(cc.Node) ], InfoBarConTrollerMatTroi.prototype, "nodePosMulti", void 0);
      InfoBarConTrollerMatTroi = __decorate([ ccclass ], InfoBarConTrollerMatTroi);
      return InfoBarConTrollerMatTroi;
    }(cc.Component);
    exports.default = InfoBarConTrollerMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ItemLichSuMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb3dbe9NfhGiordrMAHSLIp", "ItemLichSuMatTroi");
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
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemLichSuMatTroi = function(_super) {
      __extends(ItemLichSuMatTroi, _super);
      function ItemLichSuMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.data = null;
        return _this;
      }
      ItemLichSuMatTroi.prototype.initItem = function(info) {
        try {
          this.data = info;
          var date = this.data.get("date");
          var moneyBet = this.data.get("bet");
          var moneyWin = this.data.get("agWin");
          this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM\nHH:mm:ss");
          this.lbBet.string = Windown_1.Windown.formatNumber(moneyBet * Windown_1.Windown.MatTroiView.totalLineBet);
          this.lbWin.string = Windown_1.Windown.formatNumber(moneyWin);
        } catch (e) {
          console.error(e);
        }
      };
      ItemLichSuMatTroi.prototype.onClick = function() {
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("id", this.data.get("id"));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryChiTietMatTroi, obj, Windown_1.Windown.MatTroiView.roomSFS);
        Windown_1.Windown.MatTroiView.audio.playClick();
        Windown_1.Windown.UIManager.showLoading();
      };
      __decorate([ property(cc.Label) ], ItemLichSuMatTroi.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], ItemLichSuMatTroi.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], ItemLichSuMatTroi.prototype, "lbWin", void 0);
      ItemLichSuMatTroi = __decorate([ ccclass ], ItemLichSuMatTroi);
      return ItemLichSuMatTroi;
    }(cc.Component);
    exports.default = ItemLichSuMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ItemMuitlMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29eebAWT6pPcosdQdbQrnrj", "ItemMuitlMatTroi");
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
    var ItemMultiMatTroi = function(_super) {
      __extends(ItemMultiMatTroi, _super);
      function ItemMultiMatTroi() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ItemMultiMatTroi.prototype.onOffEffectMutil = function(isOn) {
        this.node.children[0].active = isOn;
        this.node.children[1].stopAllActions();
        this.node.children[0].stopAllActions();
        this.node.children[1].angle = 0;
        this.node.children[1].scale = 1;
        this.getComponent(cc.ParticleSystem).stopSystem();
        if (isOn) {
          this.node.children[0].runAction(cc.repeatForever(cc.rotateBy(1, 50)));
          this.node.children[1].runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, -20), cc.rotateTo(1.5, 0).easing(cc.easeElasticOut(.2)))));
        }
      };
      ItemMultiMatTroi.prototype.moveToMultilLabel = function(index, pos, fun, target, isSaveMutil) {
        var _this = this;
        return new Promise(function(re, je) {
          _this.startRun();
          var vecSub = cc.Vec2.lerp(cc.Vec2.ONE, _this.node.getPosition(), pos, .5);
          vecSub.x > 0 ? vecSub.addSelf(cc.v2(100, 100)) : vecSub.subSelf(cc.v2(100, 100));
          var action = cc.bezierTo(.8, [ vecSub, vecSub, pos ]).easing(cc.easeSineIn());
          _this.node.active = true;
          _this.node.stopAllActions();
          _this.node.runAction(cc.sequence(cc.delayTime(.3 + .2 * index), cc.callFunc(function() {
            Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symMultiFly);
          }), action, cc.callFunc(function() {
            fun.call(target, re, isSaveMutil);
          }), cc.callFunc(function() {
            Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symRouletteEnd);
            Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symMultiReach, 2);
            _this.getComponent(cc.ParticleSystem).stopSystem();
            _this.getComponent(cc.ParticleSystem).enabled = false;
            Windown_1.Windown.Neko.asset.putSymbolMutil(_this.node);
          })));
        });
      };
      ItemMultiMatTroi.prototype.startRun = function() {
        var _this = this;
        this.getComponent(cc.ParticleSystem).enabled = true;
        this.getComponent(cc.ParticleSystem).stopSystem();
        this.node.children[1].stopAllActions();
        this.node.children[1].runAction(cc.sequence(cc.scaleTo(.4, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
          _this.getComponent(cc.ParticleSystem).resetSystem();
        })));
      };
      ItemMultiMatTroi = __decorate([ ccclass ], ItemMultiMatTroi);
      return ItemMultiMatTroi;
    }(cc.Component);
    exports.default = ItemMultiMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemResultDetaiMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80d1bpT5j9JhK4x1bjta7Ie", "ItemResultDetaiMatTroi");
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
    var ItemResultMatTroi = function(_super) {
      __extends(ItemResultMatTroi, _super);
      function ItemResultMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbX = null;
        _this.lbTitleToHopWin = null;
        _this.parentItemResult = null;
        _this.parentItemWin = null;
        _this.colorOf = null;
        _this.playTable = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 4, 4, 6, 6, 8, 10, 20, 30, 0, 0 ], [ 2, 2, 2, 6, 6, 10, 10, 15, 25, 25, 40, 0, 0 ], [ 3, 3, 3, 8, 8, 12, 12, 20, 30, 30, 50, 0, 0 ], [ 4, 4, 4, 10, 10, 15, 15, 30, 40, 50, 80, 0, 0 ] ];
        return _this;
      }
      ItemResultMatTroi.prototype.init = function(listResult, itemWin, mutil, moneyBet) {
        var _this = this;
        var listTotalResult = [ 11 ];
        if (itemWin) {
          this.lbTitleToHopWin.string = "T\u1ed5 h\u1ee3p win";
          this.parentItemWin.active = true;
          var itemWinTemp = this.parentItemWin.children[0];
          for (var i = 0, l = itemWin.lsIdItem.length; i < l; i++) {
            var result = itemWin.lsIdItem[i];
            var moneyWin = itemWin.lsAgWin[i];
            var node = this.parentItemWin.children[i];
            if (null == node) {
              node = cc.instantiate(itemWinTemp);
              node.parent = this.parentItemWin;
            }
            node.active = true;
            var listSf = this.getArrSf(result + 1, 1, 0);
            node.children[0].children[0].getComponent(cc.Sprite).spriteFrame = listSf[0];
            node.children[0].children[1].getComponent(cc.Sprite).spriteFrame = listSf[2];
          }
          for (var i = itemWin.lsIdItem.length; i < this.parentItemWin.childrenCount; i++) this.parentItemWin.children[i].active = false;
          this.lbX.node.active = true;
        } else {
          this.lbTitleToHopWin.string = "-------------";
          this.parentItemWin.active = false;
          this.lbX.node.active = false;
        }
        var listChild = this.parentItemResult.children;
        var symbolTemplate = listChild[0].children[0];
        var scaleSymbol = .75;
        listResult.forEach(function(value, index) {
          var itemColum = listChild[index];
          var lastSymbol = null;
          value.forEach(function(v2, index2) {
            var symbolNode = itemColum.children[index2];
            var id = v2.idItem;
            var khung = v2.typeItem;
            var size = v2.size;
            if (null == symbolNode) {
              symbolNode = cc.instantiate(symbolTemplate);
              symbolNode.parent = itemColum;
            }
            var listSf = _this.getArrSf(id + 1, size, khung);
            symbolNode.children[0].getComponent(cc.Sprite).spriteFrame = listSf[0];
            symbolNode.children[1].getComponent(cc.Sprite).spriteFrame = listSf[1];
            symbolNode.children[2].getComponent(cc.Sprite).spriteFrame = listSf[2];
            symbolNode.children[0].color = _this.colorOf;
            symbolNode.children[1].color = _this.colorOf;
            symbolNode.children[2].color = _this.colorOf;
            symbolNode.children[0].height = 105 * size;
            symbolNode.children[1].height = 105 * size;
            symbolNode.height = 103 * size;
            var yLast = lastSymbol ? lastSymbol.y + lastSymbol.height / 2 * scaleSymbol : -230;
            symbolNode.y = yLast + symbolNode.height / 2 * scaleSymbol;
            lastSymbol = symbolNode;
          });
        });
        if (itemWin) {
          var listId = itemWin.lsIdItem;
          var listStack = itemWin.lsstack;
          var listAgwin = itemWin.lsAgWin;
          for (var i = 0, l = listId.length; i < l; i++) {
            var string = "";
            for (var j = 0; j < listStack[i] + 1; j++) {
              var list = listChild[j];
              var count = 0;
              for (var z = 0, lz = list.childrenCount; z < lz; z++) if (listResult[j][z].idItem == listId[i] || 11 == listResult[j][z].idItem) {
                var node_1 = list.children[z];
                node_1.children[0].color = cc.Color.WHITE;
                node_1.children[1].color = cc.Color.WHITE;
                node_1.children[2].color = cc.Color.WHITE;
                count++;
              }
              string += count + "x";
            }
            string += this.playTable[listStack[i]][listId[i]] + "x" + Windown_1.Windown.formatNumber(moneyBet);
            string += "\nx" + mutil;
            var node = this.parentItemWin.children[i];
            node.children[1].getComponent(cc.Label).string = string + "=\n" + Windown_1.Windown.formatNumber(listAgwin[i] * mutil);
          }
        }
        this.lbX.string = "x" + mutil;
        this.lbX.node.active = 1 != mutil;
      };
      ItemResultMatTroi.prototype.getArrSf = function(result, size, khung) {
        var atlas = result < 12 ? Windown_1.Windown.Neko.asset.atlasSymbol : Windown_1.Windown.Neko.asset.atlasSpecial;
        var sizeTemp = result < 12 ? cc.misc.clampf(size, 1, 2) : size;
        var list = [ atlas.getSpriteFrame("bkg_" + result + "_" + size), 0 == khung ? null : atlas.getSpriteFrame("khung_" + khung + "_" + size), atlas.getSpriteFrame("item_" + result + "_" + sizeTemp) ];
        return list;
      };
      __decorate([ property(cc.Label) ], ItemResultMatTroi.prototype, "lbX", void 0);
      __decorate([ property(cc.Label) ], ItemResultMatTroi.prototype, "lbTitleToHopWin", void 0);
      __decorate([ property(cc.Node) ], ItemResultMatTroi.prototype, "parentItemResult", void 0);
      __decorate([ property(cc.Node) ], ItemResultMatTroi.prototype, "parentItemWin", void 0);
      __decorate([ property(cc.Color) ], ItemResultMatTroi.prototype, "colorOf", void 0);
      ItemResultMatTroi = __decorate([ ccclass ], ItemResultMatTroi);
      return ItemResultMatTroi;
    }(cc.Component);
    exports.default = ItemResultMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemSlotMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dcf7b9AUZ1CaamFp8o4SAhS", "ItemSlotMatTroi");
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
    exports.TYPE_MOVE = void 0;
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var SymbolMatTroi_1 = require("./SymbolMatTroi");
    var TYPE_MOVE;
    (function(TYPE_MOVE) {
      TYPE_MOVE[TYPE_MOVE["NORMAL"] = 0] = "NORMAL";
      TYPE_MOVE[TYPE_MOVE["ADD_NEW"] = 1] = "ADD_NEW";
    })(TYPE_MOVE = exports.TYPE_MOVE || (exports.TYPE_MOVE = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemSlotMatTroi = function(_super) {
      __extends(ItemSlotMatTroi, _super);
      function ItemSlotMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.sizeSymbol = 12;
        _this.funReject = null;
        _this.resolve = null;
        _this.stateWhel = StateReelSlot_1.default.WAITING;
        _this.result = [];
        _this.resultTemp = [];
        _this.listIconEff = [];
        _this.nodeEffNearWin = null;
        _this.nodeWildDT = null;
        _this.nodeWildShowDT = null;
        _this.isScater = false;
        _this.index = -1;
        _this.indexNodeFirt = 0;
        _this.isMoveSlowDown = false;
        _this.deltaSlowDown = 0;
        _this.listNumMutilWild = [];
        _this.indexMaxWild = 0;
        _this.nodeNearWinNoSap = null;
        _this.listItemSymbol = [];
        _this.listProSkip = [];
        return _this;
      }
      ItemSlotMatTroi.prototype.onLoad = function() {};
      ItemSlotMatTroi.prototype.initParent = function() {
        this.parentItemFront = cc.instantiate(this.parentItem);
        this.parentItemFront.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.parentItem, Windown_1.Windown.MatTroiView.parentItemFront));
        this.parentItemFront.parent = Windown_1.Windown.MatTroiView.parentItemFront;
        this.parentItemActive = cc.instantiate(this.parentItem);
        this.parentItemActive.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.parentItem, Windown_1.Windown.MatTroiView.parentItemActive));
        this.parentItemActive.parent = Windown_1.Windown.MatTroiView.parentItemActive;
      };
      ItemSlotMatTroi.prototype.initListSymbol = function() {
        var list = [];
        var child = this.parentItem.children;
        for (var _i = 0, child_1 = child; _i < child_1.length; _i++) {
          var node = child_1[_i];
          var cp = node.getComponent(SymbolMatTroi_1.default);
          cp && list.push(cp);
        }
        this.listItemSymbol = list;
      };
      ItemSlotMatTroi.prototype.getListSymbol = function() {
        return this.listItemSymbol;
      };
      ItemSlotMatTroi.prototype.getListSymbolResult = function() {
        var list = [];
        var listItem = this.getListSymbol();
        this.result.forEach(function(v, k) {
          list.push(listItem[k + 1]);
        });
        return list;
      };
      ItemSlotMatTroi.prototype.setResultFirtGame = function() {
        var result = this.getListRandomResult();
        var resultTemp = result.slice(1, result.length - 1);
        this.setResult(resultTemp);
        this.initParent();
        var listChild = this.parentItem.children;
        for (var i = 0, l = this.sizeSymbol; i < l; i++) {
          var itemSymbol = listChild[i];
          if (null == itemSymbol) {
            itemSymbol = this.getSymbol();
            itemSymbol.parent = this.parentItem;
          }
          itemSymbol.x = 0;
          itemSymbol.setSiblingIndex(i);
          var cp = itemSymbol.getComponent(SymbolMatTroi_1.default);
          cp.isVectical = true;
          cp.setItemColum(this);
          cp.setResult(result[i]);
        }
        this.parentItem.sortAllChildren();
        this.initListSymbol();
        this.getListSymbol().forEach(function(v) {
          return v.initPosStartGame();
        });
      };
      ItemSlotMatTroi.prototype.getListRandomResult = function() {
        var list = [];
        if (0 == this.index || 5 == this.index) for (var i = 0; i < this.sizeSymbol; i++) list.push(this.getRandomResult()); else {
          list.push(this.getRandomResult());
          var objRd = this.getRandomResult();
          list.push(objRd);
          var totalSize = objRd.getInt("size");
          while (totalSize < 5) {
            objRd = this.getRandomResult(Windown_1.Windown.RandomNumber(1, 6 - totalSize));
            if (totalSize + objRd.getInt("size") <= 5) {
              totalSize += objRd.getInt("size");
              list.push(objRd);
            }
          }
          for (var i = list.length; i < this.sizeSymbol; i++) list.push(this.getRandomResult());
        }
        return list;
      };
      ItemSlotMatTroi.prototype.activeNodeNearWin = function() {
        Windown_1.Windown.MatTroiView.activeMask(true);
        Windown_1.Windown.MatTroiView.activeMask(false, this.index);
        if (null == this.nodeEffNearWin) {
          this.nodeEffNearWin = Windown_1.Windown.MatTroiView.asset.getNearWin();
          this.nodeEffNearWin.parent = Windown_1.Windown.MatTroiView.parentNearWin;
          this.nodeEffNearWin.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.MatTroiView.parentNearWin));
        }
        this.nodeEffNearWin.opacity = 255;
        this.nodeEffNearWin.active = true;
        this.nodeEffNearWin.getComponent(cc.Animation).play("NearFreeSpin");
        5 == this.index ? this.nodeEffNearWin.children[0].x = 161 : this.nodeEffNearWin.children[0].x = 167;
        Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.fastspinStart);
      };
      ItemSlotMatTroi.prototype.offNearWin = function() {
        Windown_1.Windown.MatTroiView.activeMask(true, this.index);
        if (this.nodeEffNearWin) {
          this.nodeEffNearWin.stopAllActions();
          this.nodeEffNearWin.active = false;
        }
        if (5 == this.index) {
          Windown_1.Windown.MatTroiView.activeMask(false);
          Windown_1.Windown.MatTroiView.infoBar.hideOneMoreScatter();
          Windown_1.Windown.MatTroiView.infoBar.showRdContent();
        }
      };
      ItemSlotMatTroi.prototype.setResult = function(listId) {
        this.result = listId;
        this.resultTemp = listId.slice();
        this.indexMaxWild = this.resultTemp.length;
      };
      ItemSlotMatTroi.prototype.checkAndRemoveItem = function(idSymbol) {
        var isCheck = false;
        var listSymbolTemp = this.getListSymbol().slice(1, this.result.length + 1);
        for (var i = 0; i < listSymbolTemp.length; i++) if (listSymbolTemp[i].result - 1 == idSymbol || listSymbolTemp[i].result - 1 == 10) {
          if (0 == listSymbolTemp[i].typeItem) {
            listSymbolTemp[i].removeItem();
            this.result[i] = null;
          } else listSymbolTemp[i].isShuff = true;
          isCheck = true;
        }
        if (isCheck) {
          this.parentItem.sortAllChildren();
          this.result = this.result.filter(function(v) {
            return null != v;
          });
        }
      };
      ItemSlotMatTroi.prototype.checkItemWin = function(idSymbol, typeWin) {
        return __awaiter(this, void 0, void 0, function() {
          var list, timeDelay, listSymbolTemp, _i, listSymbolTemp_1, symbol, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 3, , 4 ]);
              list = this.getListSymbol();
              timeDelay = 0 == typeWin ? .07 * this.index : .07 * (6 - this.index);
              if (!!Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(timeDelay).prosime ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              listSymbolTemp = this.getListSymbol().slice(1, this.result.length + 1);
              for (_i = 0, listSymbolTemp_1 = listSymbolTemp; _i < listSymbolTemp_1.length; _i++) {
                symbol = listSymbolTemp_1[_i];
                if (symbol.result - 1 == idSymbol || symbol.result - 1 == 10 && !symbol.isTakeItem) {
                  symbol.typewin = typeWin;
                  symbol.takeItem();
                }
              }
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      ItemSlotMatTroi.prototype.addNewListSymbol = function(listResult) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var isShowNearWin, oldResult, lengNewSymbolAdd, listSymbol, lastSymbol, i, symbol, cp, listSymbolNew_1, listPro, lastIndexOf, cp, e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 4, , 5 ]);
                isShowNearWin = Windown_1.Windown.MatTroiView.stateSpin.curentCountScater > 1;
                oldResult = this.result.slice();
                oldResult.reverse();
                this.setResult(listResult);
                lengNewSymbolAdd = this.result.length - oldResult.length;
                oldResult.length = this.result.length;
                oldResult.reverse();
                listSymbol = this.getListSymbol();
                lastSymbol = listSymbol[0];
                for (i = 0; i < lengNewSymbolAdd; i++) {
                  symbol = Windown_1.Windown.MatTroiView.asset.getSymbol();
                  this.parentItem.addChild(symbol, 0);
                  symbol.setSiblingIndex(0);
                  cp = symbol.getComponent(SymbolMatTroi_1.default);
                  cp.setItemColum(this);
                  this.getListSymbol().unshift(cp);
                }
                this.parentItem.sortAllChildren();
                listSymbolNew_1 = this.getListSymbol();
                listPro = [];
                listSymbolNew_1[0].setResult(this.getRandomResult());
                this.result.forEach(function(v, k) {
                  var symboll = listSymbolNew_1[k + 1];
                  var typeItemNew = v.getInt("typeItem");
                  var typeItemOld = symboll.typeItem;
                  typeItemNew != typeItemOld && symboll.isShuff || symboll.setResult(v);
                });
                lastSymbol.node.y = lastSymbol.node.height / 2;
                lastIndexOf = lastSymbol.getIndexOf() - 1;
                while (lastIndexOf >= 0) {
                  cp = listSymbolNew_1[lastIndexOf];
                  cp.node.x = 0;
                  cp.node.y = lastSymbol.node.y + lastSymbol.node.height / 2 + cp.node.height / 2;
                  lastSymbol = cp;
                  lastIndexOf--;
                }
                return [ 4, Promise.all(listPro) ];

               case 1:
                _a.sent();
                if (!(listPro.length < 1)) return [ 3, 3 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.9).prosime ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                resolve(null);
                return [ 3, 5 ];

               case 4:
                e_2 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_2);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemSlotMatTroi.prototype.getSymbol = function() {
        return Windown_1.Windown.MatTroiView.asset.getSymbol();
      };
      ItemSlotMatTroi.prototype.checkIsNorSap = function() {
        var listSymbolInView = this.getListSymbol().filter(function(v) {
          return v.checkIsInView();
        });
        var totalSizeCurrent = 0;
        listSymbolInView.forEach(function(v) {
          totalSizeCurrent += v.sizeItem;
        });
        var sizeLeft = this.sizeSymbol - 2 - totalSizeCurrent;
        return sizeLeft > 0;
      };
      ItemSlotMatTroi.prototype.moveAllSymbol = function(indexDelayScater) {
        var _this = this;
        return new Promise(function(re, je) {
          return __awaiter(_this, void 0, void 0, function() {
            var delta_1, isShowNearWin, delay, listSymbolNew_2, listSymbolInView_1, firtSymbol, lastSymbol, posYTarget_1, _loop_1, i, l, totalSizeCurrent_1, sizeLeft, nodeNearWin_1, listPro_1, listSymboMove_1, posYTarget_2, e_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 9, , 10 ]);
                delta_1 = Windown_1.Windown.MatTroiView.getDelta();
                isShowNearWin = Windown_1.Windown.MatTroiView.stateSpin.curentCountScater > 1 && !Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed;
                delay = isShowNearWin || Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed ? 0 : .05 * Windown_1.Windown.RandomNumber(0, 5);
                if (!!Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.2 + delay).prosime ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                listSymbolNew_2 = this.getListSymbol();
                listSymbolInView_1 = listSymbolNew_2.filter(function(v) {
                  return v.checkIsInView();
                });
                listSymbolInView_1.reverse();
                firtSymbol = listSymbolInView_1[listSymbolInView_1.length - 1];
                if (listSymbolInView_1.length > 0) {
                  lastSymbol = listSymbolInView_1[0];
                  posYTarget_1 = -lastSymbol.size.height * (this.sizeSymbol - 2) + lastSymbol.node.height / 2;
                  _loop_1 = function(i, l) {
                    var temp = listSymbolInView_1[i];
                    var node = temp.node;
                    if (Math.abs(posYTarget_1 - node.y) > 2) {
                      var action1 = cc.moveTo(.25 / delta_1, node.x, posYTarget_1).easing(cc.easeSineIn());
                      var action2 = cc.sequence(cc.moveBy(.059 / delta_1, 0, 18).easing(cc.easeSineOut()), cc.moveBy(.059 / delta_1, 0, -18).easing(cc.easeSineIn()), cc.callFunc(function() {
                        temp.effectSpawnSymbol();
                      }));
                      node.runAction(cc.sequence(action1, cc.callFunc(function() {}), action2));
                    } else temp.isShuff && temp.effectSpawnSymbol();
                    i < l - 1 && (posYTarget_1 = posYTarget_1 + node.height / 2 + listSymbolInView_1[i + 1].node.height / 2);
                  };
                  for (i = 0, l = listSymbolInView_1.length; i < l; i++) _loop_1(i, l);
                }
                totalSizeCurrent_1 = 0;
                listSymbolInView_1.forEach(function(v) {
                  totalSizeCurrent_1 += v.sizeItem;
                });
                sizeLeft = this.sizeSymbol - 2 - totalSizeCurrent_1;
                if (!isShowNearWin) return [ 3, 7 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.4).prosime ];

               case 3:
                _a.sent();
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.heartbeatNoise);
                Windown_1.Windown.MatTroiView.stateSpin.offAllSymbol(false);
                listSymbolInView_1.forEach(function(v) {
                  v.effectNearWinScater();
                });
                Windown_1.Windown.MatTroiView.infoBar.showOneMoreScater();
                if (!(sizeLeft > 0)) return [ 3, 6 ];
                Windown_1.Windown.MatTroiView.activeMask(false);
                nodeNearWin_1 = Windown_1.Windown.MatTroiView.asset.getNearWinNoSap();
                nodeNearWin_1.parent = this.parentItemActive;
                nodeNearWin_1.getComponent(cc.Animation).play();
                nodeNearWin_1.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.parentItem, nodeNearWin_1.parent));
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(4.5).prosime ];

               case 4:
                _a.sent();
                Windown_1.Windown.MatTroiView.stateSpin.activeAllSymbol();
                nodeNearWin_1.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                  Windown_1.Windown.MatTroiView.asset.putNearWinNoSap(nodeNearWin_1);
                })));
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.3 + .5 * indexDelayScater).prosime ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
                listSymbolInView_1.forEach(function(v) {
                  v.removeAddScater();
                });
                _a.label = 7;

               case 7:
                isShowNearWin && sizeLeft > 0 && !Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed && Windown_1.Windown.MatTroiView.audio.playEffectNoStop(Windown_1.Windown.MatTroiView.audio.heartbeatSlowdrop);
                listPro_1 = [];
                listSymboMove_1 = listSymbolNew_2;
                posYTarget_2 = listSymbolNew_2[0].node.height / 2;
                listSymboMove_1.forEach(function(v, k) {
                  var cp = listSymbolNew_2[k];
                  var node = cp.node;
                  !listSymbolInView_1.includes(cp) && Math.abs(posYTarget_2 - node.y) > 1 && listPro_1.push(new Promise(function(re1, je) {
                    var action1 = cc.moveTo(.25 / delta_1, node.x, posYTarget_2).easing(cc.easeSineIn());
                    var action2 = cc.sequence(cc.moveBy(.059 / delta_1, 0, 18).easing(cc.easeSineOut()), cc.moveBy(.059 / delta_1, 0, -18).easing(cc.easeSineIn()), cc.callFunc(function() {
                      re1(null);
                      listSymbolNew_2[k].effectSpawnSymbol();
                    }));
                    node.runAction(cc.sequence(action1, cc.callFunc(function() {
                      Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.spinStop, .6);
                    }), action2));
                  }));
                  k < listSymboMove_1.length - 1 && (posYTarget_2 = posYTarget_2 - node.height / 2 - listSymbolNew_2[k + 1].node.height / 2);
                });
                return [ 4, Promise.all(listPro_1) ];

               case 8:
                _a.sent();
                this.reSetResultColum();
                re(null);
                return [ 3, 10 ];

               case 9:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 10 ];

               case 10:
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemSlotMatTroi.prototype.runSpin = function() {
        this.funReject = null;
        this.resolve = null;
        this.stateWhel = StateReelSlot_1.default.RUN;
        this.getListSymbol().forEach(function(v) {
          v.runSpin();
        });
      };
      ItemSlotMatTroi.prototype.stopSpin = function(isScarter, result) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_4;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 6, , 7 ]);
                this.listProSkip = [];
                this.setResult(result);
                this.funReject = reject;
                this.isScater = isScarter;
                this.resolve = resolve;
                this.stateWhel = StateReelSlot_1.default.CAN_STOP;
                if (!!isScarter) return [ 3, 2 ];
                this.listProSkip.push(Windown_1.Windown.MatTroiView.getMakeDelay(.07));
                return [ 4, this.listProSkip[this.listProSkip.length - 1].prosime ];

               case 1:
                _a.sent();
                resolve(null);
                _a.label = 2;

               case 2:
                if (!isScarter) return [ 3, 4 ];
                this.activeNodeNearWin();
                this.runSlowDownActicon();
                Windown_1.Windown.MatTroiView.infoBar.showOneMoreScater();
                this.listProSkip.push(Windown_1.Windown.MatTroiView.getMakeDelay(1.5));
                return [ 4, this.listProSkip[this.listProSkip.length - 1].prosime ];

               case 3:
                _a.sent();
                this.stateWhel = StateReelSlot_1.default.SHOW_EFFECT;
                return [ 3, 5 ];

               case 4:
                this.stateWhel = StateReelSlot_1.default.STOP;
                this.recaculateSpeedSpin(false);
                _a.label = 5;

               case 5:
                return [ 3, 7 ];

               case 6:
                e_4 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_4);
                return [ 3, 7 ];

               case 7:
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemSlotMatTroi.prototype.forceStopSpin = function(isScarter, result) {
        this.listProSkip.forEach(function(v) {
          v.cancle(false);
        });
        this.funReject && this.funReject();
        if (isScarter) {
          this.offNearWin();
          Windown_1.Windown.MatTroiView.audio.stopEffect(Windown_1.Windown.MatTroiView.audio.fastspinStart);
          this.isMoveSlowDown = false;
        }
        return this.stopSpinIsFastSpin(isScarter, result);
      };
      ItemSlotMatTroi.prototype.stopSpinIsFastSpin = function(isScarter, result) {
        var _this = this;
        return new Promise(function(re, je) {
          if (_this.stateWhel == StateReelSlot_1.default.SHOW_EFFECT) {
            re(null);
            return;
          }
          _this.setResult(result);
          _this.stateWhel = StateReelSlot_1.default.SHOW_EFFECT;
          _this.parentItem.stopAllActions();
          _this.parentItem.y = _this.node.height / 2;
          _this.reSetResultColum();
          _this.isMoveSlowDown = false;
          _this.parentItem.y += 20;
          _this.parentItem.runAction(cc.sequence(cc.moveBy(.04, 0, -20).easing(cc.easeSineOut()), cc.callFunc(function() {
            _this.getListSymbolResult().forEach(function(v) {
              v.effectSpawnSymbol();
            });
            re(null);
          })));
        });
      };
      ItemSlotMatTroi.prototype.setResultIcon = function(listResult) {
        var oldResult = this.result.slice();
        oldResult.reverse();
        this.setResult(listResult);
        var lengNewSymbolAdd = this.result.length - oldResult.length;
        oldResult.length = this.result.length;
        oldResult.reverse();
        var listSymbol = this.getListSymbol();
        var lastSymbol = listSymbol[0];
        for (var i = 0; i < lengNewSymbolAdd; i++) {
          var symbol = Windown_1.Windown.MatTroiView.asset.getSymbol();
          this.parentItem.addChild(symbol, 0);
          symbol.setSiblingIndex(0);
          var cp = symbol.getComponent(SymbolMatTroi_1.default);
          cp.setItemColum(this);
        }
        var listSymbolNew = this.getListSymbol();
        var listPro = [];
        listSymbolNew[0].setResult(this.getRandomResult());
        this.result.forEach(function(v, k) {
          var symboll = listSymbolNew[k + 1];
          var typeItemNew = v.getInt("typeItem");
          var typeItemOld = symboll.typeItem;
          typeItemNew != typeItemOld && symboll.isShuff || symboll.setResult(v);
        });
      };
      ItemSlotMatTroi.prototype.recaculateSpeedSpin = function(isShowScater) {
        var list = this.getListSymbol();
        var posYSymbolFirt = list[0].node.y;
        var posYTarget = -this.node.height - list[0].node.height / 2;
        var s = Math.abs(posYTarget - posYSymbolFirt);
        var t = .22;
        isShowScater && (t = 1.5);
        list.forEach(function(v, k) {
          v.setImgResult(false);
          v.stopSpin(cc.moveBy(t, 0, -s));
        });
      };
      ItemSlotMatTroi.prototype.reSetResultColum = function() {
        var list = this.getListSymbol();
        if (list.length > this.sizeSymbol) while (list.length > this.sizeSymbol) {
          Windown_1.Windown.MatTroiView.asset.putSymbol(list[list.length - 1].node);
          list = this.getListSymbol();
          list.pop();
        } else if (list.length < this.sizeSymbol) for (var i = list.length; i < this.sizeSymbol; i++) {
          var symbol = this.getSymbol();
          this.parentItem.addChild(symbol);
          var cp = symbol.getComponent(SymbolMatTroi_1.default);
          6 == this.sizeSymbol ? cp.isVectical = false : cp.isVectical = true;
          cp.setItemColum(this);
          list.push(cp);
        }
        this.result.forEach(function(v, k) {
          list[k + 1].setResult(v);
        });
        for (var i = this.result.length + 1, l = list.length; i < l; i++) list[i].setResult(list[i].objSFS);
        list.forEach(function(v) {
          v.canRun = false;
          v.node.stopAllActions();
          v.initPosStartGame();
        });
      };
      ItemSlotMatTroi.prototype.effStopSpin = function() {
        var _this = this;
        if (this.stateWhel == StateReelSlot_1.default.SHOW_EFFECT) return;
        this.stateWhel = StateReelSlot_1.default.SHOW_EFFECT;
        this.parentItem.stopAllActions();
        this.parentItem.y = this.node.height / 2;
        this.reSetResultColum();
        this.isMoveSlowDown = false;
        false == Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed && Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.spinStop, .6);
        this.funReject = null;
        this.isScater ? this.parentItem.runAction(cc.sequence(cc.moveBy(.15, 0, -30).easing(cc.easeSineOut()), cc.callFunc(this.offNearWin, this), cc.moveBy(.2, 0, 30).easing(cc.easeSineIn()), cc.callFunc(function() {
          _this.resolve && _this.resolve(null);
          _this.resolve = null;
          _this.getListSymbolResult().forEach(function(v) {
            v.effectSpawnSymbol();
          });
          5 == _this.index && Windown_1.Windown.MatTroiView.infoBar.hideOneMoreScatter();
        }))) : this.parentItem.runAction(cc.sequence(cc.moveBy(.055, 0, 18).easing(cc.easeSineOut()), cc.moveBy(.055, 0, -18).easing(cc.easeSineIn()), cc.callFunc(function() {
          _this.getListSymbolResult().forEach(function(v) {
            v.effectSpawnSymbol();
          });
        })));
      };
      ItemSlotMatTroi.prototype.getIdSymbolResult = function() {
        var objReturn = null;
        if (this.stateWhel == StateReelSlot_1.default.STOP) {
          var result = this.resultTemp.pop();
          return result || this.getRandomResult();
        }
        objReturn = this.getRandomResult();
        return objReturn;
      };
      ItemSlotMatTroi.prototype.checkLastSymbol = function(symbol) {
        var list = this.getListSymbol();
        return list[list.length - 1] == symbol;
      };
      ItemSlotMatTroi.prototype.getRandomResult = function(size) {
        0 != this.index && 5 != this.index || (size = 1);
        var objReturn = null;
        objReturn = ConectManager_1.ConectManager.getIns().getSFSObj();
        objReturn.putInt("size", 1);
        objReturn.putInt("idItem", Windown_1.Windown.RandomNumber(0, 12));
        objReturn.putInt("typeItem", 0);
        return objReturn;
      };
      ItemSlotMatTroi.prototype.checkParentItem = function() {};
      ItemSlotMatTroi.prototype.runSlowDownActicon = function() {
        this.getListSymbol().forEach(function(v) {
          v.node.stopAllActions();
        });
        this.isMoveSlowDown = true;
        this.deltaSlowDown = 3500;
      };
      ItemSlotMatTroi.prototype.update = function(dt) {
        var _this = this;
        if (this.isMoveSlowDown) {
          this.getListSymbol().forEach(function(v) {
            v.node.y -= dt * _this.deltaSlowDown;
          });
          if (this.deltaSlowDown > 500) this.deltaSlowDown -= 1800 * dt; else if (this.deltaSlowDown < 1e3) {
            this.stateWhel = StateReelSlot_1.default.STOP;
            this.isMoveSlowDown = false;
            this.recaculateSpeedSpin(true);
          }
        }
      };
      __decorate([ property(cc.Node) ], ItemSlotMatTroi.prototype, "parentItem", void 0);
      __decorate([ property(cc.Integer) ], ItemSlotMatTroi.prototype, "sizeSymbol", void 0);
      ItemSlotMatTroi = __decorate([ ccclass ], ItemSlotMatTroi);
      return ItemSlotMatTroi;
    }(cc.Component);
    exports.default = ItemSlotMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./SymbolMatTroi": "SymbolMatTroi"
  } ],
  ItemWinDetailHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1a21Zm915LrL3n5xqwTL4U", "ItemWinDetailHistory");
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
    var ItemPaylineWinHistory = function(_super) {
      __extends(ItemPaylineWinHistory, _super);
      function ItemPaylineWinHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprIcon = null;
        _this.lbConsecutive = null;
        _this.lbWin = null;
        _this.lbDirectionWin = null;
        _this.iconAtlas = [];
        _this.payTable = {
          0: {
            3: 6,
            4: 8,
            5: 10,
            6: 12
          },
          1: {
            3: 6,
            4: 8,
            5: 10,
            6: 12
          },
          2: {
            3: 6,
            4: 8,
            5: 10,
            6: 12
          },
          3: {
            3: 6,
            4: 10,
            5: 12,
            6: 15
          },
          4: {
            3: 6,
            4: 10,
            5: 12,
            6: 15
          },
          5: {
            3: 6,
            4: 10,
            5: 12,
            6: 15
          },
          6: {
            3: 10,
            4: 12,
            5: 18,
            6: 20
          },
          7: {
            3: 10,
            4: 12,
            5: 18,
            6: 20
          },
          8: {
            3: 15,
            4: 20,
            5: 25,
            6: 30
          },
          9: {
            3: 15,
            4: 20,
            5: 25,
            6: 30
          }
        };
        return _this;
      }
      ItemPaylineWinHistory.prototype.start = function() {};
      ItemPaylineWinHistory.prototype.setInfo = function(id, consecutive, agWin, directionWin, listIdPerCol) {
        this.sprIcon.spriteFrame = id < 11 ? this.iconAtlas[0].getSpriteFrame(id.toString()) : this.iconAtlas[1].getSpriteFrame(id.toString());
        this.lbConsecutive.string = this.getLbConsecutive(consecutive);
        this.lbDirectionWin.string = 0 == directionWin ? "T\u1eeb tr\xe1i qua ph\u1ea3i" : "T\u1eeb ph\u1ea3i qua tr\xe1i";
        this.lbWin.string = "x" + listIdPerCol.join("x") + "x" + this.getMultiplierItemWin(id, consecutive) + "x" + Windown_1.Windown.MatTroiView.curRoomBet + "=" + Windown_1.Windown.formatNumber(agWin);
      };
      ItemPaylineWinHistory.prototype.getMultiplierItemWin = function(id, consecutive) {
        id -= 1;
        return this.payTable[id.toString()][(consecutive + 1).toString()];
      };
      ItemPaylineWinHistory.prototype.getLbConsecutive = function(consecutive) {
        var txtConsecutive = "";
        switch (consecutive) {
         case 2:
          txtConsecutive = "B\u1ed9 ba";
          break;

         case 3:
          txtConsecutive = "B\u1ed9 b\u1ed1n";
          break;

         case 4:
          txtConsecutive = "B\u1ed9 n\u0103m";
          break;

         case 5:
          txtConsecutive = "B\u1ed9 s\xe1u";
        }
        return txtConsecutive;
      };
      __decorate([ property(cc.Sprite) ], ItemPaylineWinHistory.prototype, "sprIcon", void 0);
      __decorate([ property(cc.Label) ], ItemPaylineWinHistory.prototype, "lbConsecutive", void 0);
      __decorate([ property(cc.Label) ], ItemPaylineWinHistory.prototype, "lbWin", void 0);
      __decorate([ property(cc.Label) ], ItemPaylineWinHistory.prototype, "lbDirectionWin", void 0);
      __decorate([ property([ cc.SpriteAtlas ]) ], ItemPaylineWinHistory.prototype, "iconAtlas", void 0);
      ItemPaylineWinHistory = __decorate([ ccclass ], ItemPaylineWinHistory);
      return ItemPaylineWinHistory;
    }(cc.Component);
    exports.default = ItemPaylineWinHistory;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  LichSuMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24686easvlN75Wa9mZi54Mo", "LichSuMatTroi");
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
    var DetailHistoryMatTroi_1 = require("./DetailHistoryMatTroi");
    var ItemLichSuMatTroi_1 = require("./ItemLichSuMatTroi");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuMatTroi = function(_super) {
      __extends(LichSuMatTroi, _super);
      function LichSuMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.detail = null;
        _this.listData = null;
        _this.maxRow = 11;
        return _this;
      }
      LichSuMatTroi.prototype.show = function() {
        this.node.active = true;
        this.reset();
        this.node.y = -1280;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.3, 0, 0));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryMatTroi, null, Windown_1.Windown.MatTroiView.roomSFS);
        Windown_1.Windown.UIManager.showLoading();
      };
      LichSuMatTroi.prototype.responseServer = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = sfsObj.getSFSArray("history");
        this.initWithListData(sfsArr);
      };
      LichSuMatTroi.prototype.responseServerChiTiet = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        this.showDetail(sfsObj);
      };
      LichSuMatTroi.prototype.initWithListData = function(listData) {
        cc.log(Windown_1.Windown.SFSArrToJson(listData));
        var child = this.pageDate.content.children;
        var lengthRows = listData.size();
        var totalPage = Math.floor(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.listData = listData;
        this.onChangePage(1);
      };
      LichSuMatTroi.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuMatTroi_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuMatTroi.prototype.showDetail = function(SFSObject) {
        console.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        this.detail.show(SFSObject);
      };
      LichSuMatTroi.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuMatTroi.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuMatTroi.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.MatTroiView.audio.playClick();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(PageData_1.default) ], LichSuMatTroi.prototype, "pageDate", void 0);
      __decorate([ property(DetailHistoryMatTroi_1.default) ], LichSuMatTroi.prototype, "detail", void 0);
      LichSuMatTroi = __decorate([ ccclass ], LichSuMatTroi);
      return LichSuMatTroi;
    }(cc.Component);
    exports.default = LichSuMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./DetailHistoryMatTroi": "DetailHistoryMatTroi",
    "./ItemLichSuMatTroi": "ItemLichSuMatTroi"
  } ],
  MatTroiView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5101eaMqfxDCqoPAkoIzvRN", "MatTroiView");
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
    var EVENT_MANAGER_1 = require("../../../Scritps/DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("../../../Scritps/DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var LbMonoSpace_1 = require("../../../Scritps/Other/LbMonoSpace");
    var MakeDelay_1 = require("../../../Scritps/Other/MakeDelay");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var AssetMatTroi_1 = require("./AssetMatTroi");
    var AudioMatTroi_1 = require("./AudioMatTroi");
    var EffectControlMatTroi_1 = require("./EffectControlMatTroi");
    var EffectMatTroi_1 = require("./EffectMatTroi");
    var InfoBarControllerMatTroi_1 = require("./InfoBarControllerMatTroi");
    var ItemSlotMatTroi_1 = require("./ItemSlotMatTroi");
    var LichSuMatTroi_1 = require("./LichSuMatTroi");
    var MultiControlMatTroi_1 = require("./MultiControlMatTroi");
    var SpinNormalMatTroi_1 = require("./SpinNormalMatTroi");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MatTroiView = function(_super) {
      __extends(MatTroiView, _super);
      function MatTroiView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.asset = null;
        _this.bkgSprite = null;
        _this.parentItem = null;
        _this.parentEffect = null;
        _this.parentBackgroundEffect = null;
        _this.parentItemFront = null;
        _this.parentItemActive = null;
        _this.parentNearWin = null;
        _this.nodeLine = null;
        _this.effect = null;
        _this.labelChipReviceInBox = null;
        _this.lb_totalBet = null;
        _this.toggleMusic = null;
        _this.lb_FSLeft = null;
        _this.lb_TotalLine = null;
        _this.lb_CountAuto = null;
        _this.infoBar = null;
        _this.effectController = null;
        _this.muitlCtr = null;
        _this.btnSpin = null;
        _this.parentMask = null;
        _this.nodeChooseAuto = null;
        _this.khungItem = null;
        _this._popupLichSu = null;
        _this.audio = null;
        _this.listNodeDeactive = [];
        _this.nodeBtnPlay = null;
        _this.nodeBtnSeting = null;
        _this.toggleTurbo = null;
        _this.btnStartAuto = null;
        _this.listColum = [];
        _this.listResult = null;
        _this.listResultConvert = [];
        _this.listConfigBet = [];
        _this.gameType = -1;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.stateReel = 0;
        _this.totalLineBet = 20;
        _this.curRoomBet = 50;
        _this.funEnd = null;
        _this.isShowBtnPlay = true;
        _this.dataFinish = null;
        _this.sfsObjTest = null;
        _this.sfsObjTest2 = null;
        _this.stateSpin = null;
        _this.makeDelay = null;
        _this.currentTotalLine = 1;
        _this.isMouseEnterSpin = false;
        return _this;
      }
      MatTroiView.prototype.onLoad = function() {
        Windown_1.Windown.MatTroiView = this;
        this.makeDelay = new MakeDelay_1.default(this);
        this.gameType = GAME_TYPE_1.default.MatTroi;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, this.onLogin, this);
        this.setupView();
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.stateSpin = new SpinNormalMatTroi_1.default();
        this.sendJoinRoom();
        this.activeMask(false);
        this.registerBtnSpinEffect();
      };
      MatTroiView.prototype.onLogin = function() {
        this.sendJoinRoom();
      };
      MatTroiView.prototype.registerBtnSpinEffect = function() {
        var _this = this;
        this.btnSpin.on(cc.Node.EventType.MOUSE_ENTER, function() {
          var circle = _this.btnSpin.getChildByName("cirle");
          _this.isMouseEnterSpin = true;
          if (1.2 == circle.scale && _this.stateReel == StateReelSlot_1.default.WAITING) {
            var acScale_1 = cc.tween(circle).set({
              scale: .5,
              opacity: 0
            }).to(.75, {
              scale: 1.2,
              opacity: 255
            }, {
              easing: cc.easing.sineOut
            }).to(.1, {
              opacity: 0
            }).delay(.5).call(function() {
              _this.isMouseEnterSpin && acScale_1.start();
            });
            acScale_1.start();
          }
        });
        this.btnSpin.on(cc.Node.EventType.MOUSE_LEAVE, function() {
          _this.isMouseEnterSpin = false;
        });
      };
      MatTroiView.prototype.start = function() {
        var _this = this;
        this.setupView();
        this.initItem();
        if (Windown_1.Windown.AudioManager.isActiveSound && Windown_1.Windown.AudioManager.isActiveMusic) {
          this.toggleMusic.isChecked = true;
          this.toggleMusic.checkMark.node.active = true;
          this.toggleMusic.node.children[0].active = false;
        } else {
          this.toggleMusic.isChecked = false;
          this.toggleMusic.checkMark.node.active = false;
          this.toggleMusic.node.children[0].active = true;
        }
        cc.sys.isNative || this.scheduleOnce(function() {
          return __awaiter(_this, void 0, void 0, function() {
            var bundle;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.MatTroi.toString()) ];

               case 1:
                bundle = _a.sent();
                bundle.loadDir("Spine", function(err, asset) {});
                return [ 2 ];
              }
            });
          });
        }, 3);
      };
      MatTroiView.prototype.onDestroy = function() {
        Windown_1.Windown.MatTroiView = null;
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
      MatTroiView.prototype.switchBkgGame = function(isFs) {
        var nodeBkgFs = cc.find("Game/BkgGround/FreeSpin", this.node);
        Windown_1.Windown.MatTroiView.lb_FSLeft.node.parent.active = false;
        if (isFs) {
          nodeBkgFs.active = true;
          cc.find("Game/BkgGround/Normal", this.node).active = false;
          Windown_1.Windown.MatTroiView.lb_FSLeft.node.parent.active = true;
        } else {
          cc.find("Game/BkgGround/Normal", this.node).active = true;
          nodeBkgFs.active = false;
        }
      };
      MatTroiView.prototype.initItem = function() {
        var itemTemplate = cc.instantiate(this.parentItem.children[0]);
        var width = itemTemplate.width;
        var lengtItem = 6;
        for (var i = 0; i < lengtItem; i++) {
          var node = this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          var cpItem = node.getComponent(ItemSlotMatTroi_1.default);
          this.listColum.push(cpItem);
          cpItem.index = i;
          cpItem.setResultFirtGame();
          cpItem.node.y = 0;
        }
      };
      MatTroiView.prototype.activeMask = function(isActive, index, time) {
        void 0 === time && (time = .3);
        var children = this.parentMask.children;
        if (isActive) if (index) {
          children[index].stopAllActions();
          children[index].runAction(cc.fadeTo(time, 180));
        } else {
          children.forEach(function(v) {
            v.stopAllActions();
            v.runAction(cc.fadeTo(time, 180));
          });
          this.khungItem.stopAllActions();
          cc.tween(this.khungItem).to(time, {
            color: cc.Color.GRAY
          }).start();
        } else if (index) {
          children[index].stopAllActions();
          children[index].runAction(cc.fadeOut(time));
        } else {
          children.forEach(function(v) {
            v.stopAllActions();
            v.runAction(cc.fadeOut(time));
          });
          this.khungItem.stopAllActions();
          cc.tween(this.khungItem).to(time, {
            color: cc.Color.WHITE
          }).start();
        }
      };
      MatTroiView.prototype.getMakeDelay = function(time) {
        return this.makeDelay.getDelay(time);
      };
      MatTroiView.prototype.resetLbTotalLine = function() {
        this.currentTotalLine = 1;
        this.lb_TotalLine.string = ". . .";
      };
      MatTroiView.prototype.onClickBtnSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 4, , 5 ]);
              if (!(this.stateReel == StateReelSlot_1.default.WAITING)) return [ 3, 2 ];
              this.audio.playEffect(this.audio.spinBtn);
              this.audio.playEffect(this.audio.spinActivated);
              this.stateReel = StateReelSlot_1.default.RUN;
              this.setStateEffBtnSpin();
              this.offAllBtn();
              this.infoBar.reset();
              this.effectController.resetForNewSpin();
              return [ 4, this.stateSpin.onStart() ];

             case 1:
              _a.sent();
              this.sendClickSpin();
              return [ 3, 3 ];

             case 2:
              if (this.stateReel == StateReelSlot_1.default.CAN_STOP) {
                if (!this.stateSpin.isMaxSpeed) {
                  this.unschedule(this.funEnd);
                  this.stateSpin.onForceEnd();
                  this.stateReel = StateReelSlot_1.default.RUN;
                }
              } else if (this.stateReel == StateReelSlot_1.default.STOP) ; else if (this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
                this.stateSpin.resetForNextNextSpin();
                this.onClickBtnSpin();
              }
              _a.label = 3;

             case 3:
              return [ 3, 5 ];

             case 4:
              e_1 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_1);
              return [ 3, 5 ];

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      MatTroiView.prototype.sendClickSpin = function() {
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("testSpin", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          cc.log("send test ne");
          return;
        }
        if (null != this.sfsObjTest2) {
          ConectManager_1.ConectManager.getIns().sendRequest("testSpin2", this.sfsObjTest2, this.roomSFS);
          this.sfsObjTest2 = null;
          cc.log("send test2 ne");
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinMatTroi, sfsObj, this.roomSFS);
      };
      MatTroiView.prototype.offAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = false;
          v.node.children.forEach(function(v) {
            v.color = cc.Color.fromHEX(new cc.Color(), "#999999");
          });
        });
      };
      MatTroiView.prototype.setStateEffBtnSpin = function() {
        var ani = this.btnSpin.getComponent(cc.Animation);
        var nodeRotate = cc.find("sb_arrow", this.btnSpin);
        var nodeRotateBlur = cc.find("sb_arrow_blur", this.btnSpin);
        if (this.stateReel != StateReelSlot_1.default.STOP) {
          var materialNormal = cc.Material.getBuiltinMaterial("2d-sprite");
          nodeRotate.getComponentInChildren(cc.Sprite).setMaterial(0, materialNormal);
        }
        if (this.stateReel == StateReelSlot_1.default.WAITING || this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
          if (0 == this.stateSpin.countAutoSpin) {
            nodeRotateBlur.active = false;
            nodeRotate.active = true;
            ani.play("btnSpin");
            var materialNormal = cc.Material.getBuiltinMaterial("2d-sprite");
            nodeRotate.getComponentInChildren(cc.Sprite).setMaterial(0, materialNormal);
            this.btnSpin.getChildByName("sb_base").active = true;
          } else this.btnSpin.getChildByName("sb_base").active = false;
          cc.find("mf_vfx_j_sun_add_00", this.btnSpin).getComponent(cc.Sprite).spriteFrame = null;
          cc.find("sb_vfx_b_screen", this.btnSpin).getComponent(cc.Sprite).spriteFrame = null;
        } else if (this.stateReel == StateReelSlot_1.default.RUN) {
          this.audio.playEffect(this.audio.spinBtn);
          this.audio.playEffect(this.audio.menu_icon_press);
          if (0 == this.stateSpin.countAutoSpin) {
            ani.play("btnSpin_Click");
            nodeRotateBlur.active = true;
            nodeRotateBlur.stopAllActions();
            nodeRotateBlur.runAction(cc.repeatForever(cc.rotateBy(.3, -360)));
            nodeRotate.active = false;
            this.btnSpin.getChildByName("sb_base").active = true;
          } else this.btnSpin.getChildByName("sb_base").active = false;
          this.infoBar.showRdContent();
        } else if (this.stateReel == StateReelSlot_1.default.STOP) {
          nodeRotate.active = true;
          nodeRotate.stopAllActions();
          nodeRotateBlur.active = false;
          var materialGray = cc.Material.getBuiltinMaterial("2d-gray-sprite");
          nodeRotate.getComponentInChildren(cc.Sprite).setMaterial(0, materialGray);
        }
      };
      MatTroiView.prototype.sendJoinRoom = function() {
        try {
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("MatTroiExtension", "ext.Room.SlotMatTroiMatTrang.SlotGameView");
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 1;
          roomSeting.groupId = "SlotMatTroi";
          this.sfs.send(new SFS2X.CreateRoomRequest(roomSeting, true));
        } catch (e) {
          cc.error(e);
          this.onDisconnect();
        }
      };
      MatTroiView.prototype.userExitRoom = function(event) {
        cc.log("user exit room");
        var room = event.room;
        if ("SlotMatTroi" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            cc.director.loadScene("main");
            return;
          }
        }
      };
      MatTroiView.prototype.onCreateError = function(event) {
        cc.log("creat errr");
        Windown_1.Windown.UIManager.hideLoading();
        cc.director.loadScene("main");
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      MatTroiView.prototype.onJoinRoom = function(event) {
        var room = event.room;
        if ("SlotMatTroi" == room.groupId) {
          this.roomSFS = room;
          Windown_1.Windown.UIManager.hideLoadingData();
          cc.log("hide loading data nay");
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
          this.curRoomBet = this.listConfigBet[0].bet;
          this.lb_totalBet.string = Windown_1.Windown.formatNumber(this.totalLineBet * this.curRoomBet);
        }
      };
      MatTroiView.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      MatTroiView.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.SpinMatTroi:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          this.handleFinish(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryMatTroi:
          this._popupLichSu && this._popupLichSu.responseServer(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryChiTietMatTroi:
          this._popupLichSu && this._popupLichSu.responseServerChiTiet(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.REQUEST_GET_LastSpin_SLOT:
          this.handleGetLastSpinSlot(SFSObject);
        }
      };
      MatTroiView.prototype.handleGetLastSpinSlot = function(obj) {
        var gameType = obj.get("t");
        var isFreeSpin = obj.get("iF");
        if (gameType == GAME_TYPE_1.default.MatTroi && isFreeSpin && null == this.dataFinish) {
          var data = obj.get("d");
          var numFs = data.get("numFreeSpin");
          this.stateSpin.lastFreeSpinLeft = numFs;
          this.stateSpin.freeSpinLeft = numFs - 1;
          this.lb_FSLeft.string = this.stateSpin.freeSpinLeft.toString();
          var listBonusR = data.getIntArray("bonusSpinR");
          var listBonusL = data.getIntArray("bonusSpinL");
          var bnL = listBonusL[listBonusL.length - 1];
          var bnR = listBonusR[listBonusR.length - 1];
          this.effect.swidthFS(true, bnL, bnR);
          this.dataFinish = data;
          this.onClickBtnSpin();
          return;
        }
        gameType == GAME_TYPE_1.default.MatTroi && this.stateReel == StateReelSlot_1.default.RUN && (!obj.containsKey("d") || this.dataFinish && Windown_1.Windown.SFSObjToJson(this.dataFinish) == Windown_1.Windown.SFSObjToJson(obj.get("d")) ? this.sendClickSpin() : this.handleFinish(obj.get("d")));
      };
      MatTroiView.prototype.handleFinish = function(data) {
        var _this = this;
        if (data.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          this.stateSpin.handleErrSpin();
          Windown_1.Windown.Dialog.showLog(data.get(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          this.activeAllBtn();
          this.onClickResetCountAuto();
          return;
        }
        this.dataFinish = data;
        Windown_1.Windown.MoneyUser.pushDelayMoney(this.gameType, this.dataFinish.get("agUser"), data.get("agWin"));
        this.truTienBet(this.dataFinish.get("agBet") * this.totalLineBet, this.dataFinish.get("agUser"));
        this.listResult = data.get("views");
        var listBonusR = data.getIntArray("bonusSpinR");
        var listBonusL = data.getIntArray("bonusSpinL");
        this.listResultConvert = this.convertResult(this.listResult, JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("listItemWinL"))), JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("listItemWinR"))), listBonusR, listBonusL);
        var delta = this.stateSpin.isMaxSpeed ? 10 : .5;
        this.stateReel = StateReelSlot_1.default.CAN_STOP;
        var time = this.stateSpin.isMaxSpeed ? 0 : .5;
        this.scheduleOnce(this.funEnd = function() {
          _this.stateSpin.onEnd();
        }, time);
      };
      MatTroiView.prototype.onClickResetCountAuto = function() {
        this.stateSpin.countAutoSpin = 0;
        this.lb_CountAuto.node.parent.active = false;
        Windown_1.Windown.MatTroiView.audio.playClick();
      };
      MatTroiView.prototype.convertResult = function(listResult, listItemWinL, listItemWinR, listBonusR, listBonusL) {
        var _this = this;
        var listReturn = [];
        Windown_1.Windown.foreachSFSArray(listResult, function(v, k) {
          var itemResult = Object.create(null);
          itemResult.listSFSObj = [];
          itemResult.agWin = 0;
          itemResult.bonusSpinR = k < listBonusR.length ? listBonusR[k] : 1;
          itemResult.bonusSpinL = k < listBonusL.length ? listBonusL[k] : 1;
          Windown_1.Windown.foreachSFSArray(v, function(v1, k1) {
            var arrTemp = [];
            Windown_1.Windown.foreachSFSArray(v1, function(v2, k2) {
              arrTemp.push(v2);
            });
            arrTemp.reverse();
            itemResult.listSFSObj.push(arrTemp);
            arrTemp.forEach(function(sfsObj) {
              var data = JSON.parse(Windown_1.Windown.SFSObjToJson(sfsObj));
            });
            if (k1 == v.size() - 1) {
              var itemWinL = listItemWinL.shift();
              if (itemWinL) {
                itemWinL.lsIdItem = JSON.parse(itemWinL.lsIdItem);
                itemWinL.lsstack = JSON.parse(itemWinL.lsstack);
                itemWinL.lsAgWin = JSON.parse(itemWinL.lsAgWin);
                if (itemWinL.lsAgWin.length > 0) {
                  itemResult.listItemWinL = itemWinL;
                  itemResult.isNoSap = true;
                }
                itemWinL.lsAgWin.forEach(function(v) {
                  itemResult.agWin += v;
                });
              }
              var itemWinR = listItemWinR.shift();
              if (itemWinR) {
                itemWinR.lsIdItem = JSON.parse(itemWinR.lsIdItem);
                itemWinR.lsstack = JSON.parse(itemWinR.lsstack);
                itemWinR.lsAgWin = JSON.parse(itemWinR.lsAgWin);
                if (itemWinR.lsAgWin.length > 0) {
                  itemResult.listItemWinR = itemWinR;
                  itemResult.isNoSap = true;
                }
                itemWinR.lsAgWin.forEach(function(v) {
                  itemResult.agWin += v;
                });
              }
            }
          });
          itemResult.countScater = _this.getCountScater(itemResult.listSFSObj);
          listReturn.push(itemResult);
        });
        return listReturn;
      };
      MatTroiView.prototype.getListActiveScaster = function(listResult) {
        var list = [];
        var countScaster = 0;
        for (var i = 0; i < listResult.length; i++) {
          list.push(countScaster >= 2);
          listResult[i].forEach(function(v) {
            11 == v.getInt("idItem") && countScaster++;
          });
        }
        return list;
      };
      MatTroiView.prototype.clearAllMakeDelay = function() {
        this.makeDelay.clear();
      };
      MatTroiView.prototype.resetForNewGame = function() {
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.setStateEffBtnSpin();
      };
      MatTroiView.prototype.setLbFreeSpinLeft = function(num) {
        var parent = this.lb_FSLeft.node.parent;
        this.lb_FSLeft.string = num.toString();
        if (num < 1) {
          cc.find("last_spin", parent).active = true;
          cc.find("remaining_spin", parent).active = false;
          this.lb_FSLeft.node.active = false;
        } else {
          cc.find("last_spin", parent).active = false;
          cc.find("remaining_spin", parent).active = true;
          this.lb_FSLeft.node.active = true;
        }
      };
      MatTroiView.prototype.setCountAuto = function(count) {
        this.lb_CountAuto.node.parent.active = !(count < 1);
        this.lb_CountAuto.string = count.toString();
      };
      MatTroiView.prototype.getCountScater = function(listResult) {
        var count = 0;
        listResult.forEach(function(v) {
          v.forEach(function(j) {
            11 == j.getInt("idItem") && count++;
          });
        });
        return count;
      };
      MatTroiView.prototype.truTienBet = function(moneyBet, moneyPlayer) {
        if (0 == moneyBet) return;
        Windown_1.Windown.MoneyUser.subMoney(moneyBet, moneyPlayer);
      };
      MatTroiView.prototype.activeAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = true;
          v.node.children.forEach(function(v) {
            v.color = cc.Color.fromHEX(new cc.Color(), "#FFD500");
          });
        });
      };
      MatTroiView.prototype.getDelta = function() {
        return this.stateSpin.isMaxSpeed ? 2 : 1;
      };
      MatTroiView.prototype.updateNewTotalLine = function(length) {
        this.currentTotalLine *= length;
        this.lb_TotalLine.string = this.currentTotalLine.toString();
      };
      MatTroiView.prototype.onDisconnect = function() {
        cc.log("disconnect");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.director.loadScene("main");
      };
      MatTroiView.prototype.setupView = function() {
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
      MatTroiView.prototype.onClickChangeBet = function(event, data) {
        Windown_1.Windown.MatTroiView.audio.playClick();
        if (this.listConfigBet.length < 1) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
          return;
        }
        var currentIndex = -1;
        for (var temp in this.listConfigBet) if (this.listConfigBet[temp].bet == this.curRoomBet) {
          currentIndex = parseInt(temp);
          break;
        }
        0 == data ? currentIndex-- : currentIndex++;
        currentIndex < 0 && (currentIndex = this.listConfigBet.length - 1);
        currentIndex > this.listConfigBet.length - 1 && (currentIndex = 0);
        this.curRoomBet = this.listConfigBet[currentIndex].bet;
        this.lb_totalBet.string = Windown_1.Windown.formatNumber(this.totalLineBet * this.curRoomBet);
      };
      MatTroiView.prototype.onClickSeting = function() {
        Windown_1.Windown.MatTroiView.audio.playClick();
        this.isShowBtnPlay = !this.isShowBtnPlay;
        if (this.isShowBtnPlay) {
          var vecTarget = cc.v2(0, -750);
          this.nodeBtnPlay.runAction(cc.fadeIn(.4));
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeOut(.3), cc.moveTo(.3, vecTarget)));
        } else {
          this.nodeBtnPlay.stopAllActions();
          this.nodeBtnSeting.stopAllActions();
          var vecTarget = cc.v2(0, -525.279);
          this.nodeBtnPlay.runAction(cc.fadeOut(.3));
          this.nodeBtnSeting.opacity = 0;
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeIn(.4), cc.moveTo(.4, vecTarget)));
        }
      };
      MatTroiView.prototype.onClickTurbo = function() {
        Windown_1.Windown.MatTroiView.audio.playClick();
        var isCheck = this.toggleTurbo.isChecked;
        this.toggleTurbo.node.children[1].active = !isCheck;
        this.stateSpin.isMaxSpeed = isCheck;
        isCheck ? Windown_1.Windown.UIManager.showAlertMini("B\u1eadt t\u0103ng t\u1ed1c") : Windown_1.Windown.UIManager.showAlertMini("T\u1eaft t\u0103ng t\u1ed1c");
      };
      MatTroiView.prototype.onClickBackToLobby = function() {
        Windown_1.Windown.MatTroiView.audio.playClick();
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      MatTroiView.prototype.onClickMusic = function() {
        Windown_1.Windown.MatTroiView.audio.playClick();
        var isCheck = this.toggleMusic.isChecked;
        this.toggleMusic.node.children[0].active = !isCheck;
        if (Windown_1.Windown.AudioManager) {
          Windown_1.Windown.AudioManager.isActiveSound = isCheck;
          Windown_1.Windown.AudioManager.isActiveMusic = isCheck;
        } else if (isCheck) {
          Windown_1.Windown.setLocalStorage("sound", "on");
          Windown_1.Windown.setLocalStorage("music", "on");
        } else {
          Windown_1.Windown.setLocalStorage("sound", "off");
          Windown_1.Windown.setLocalStorage("music", "off");
        }
      };
      MatTroiView.prototype.onClickCachChoi = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("onClickCachChoi1");
              Windown_1.Windown.MatTroiView.audio.playClick();
              cc.log("onClickCachChoi2");
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/CachChoi", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              cc.log("onClickCachChoi3");
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.MatTroiView.node.getChildByName("Game");
              cc.log("onClickCachChoi");
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      MatTroiView.prototype.onClickLichSu = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.MatTroiView.audio.playClick();
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/LichSu", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              this._popupLichSu = cc.instantiate(pre).getComponent(LichSuMatTroi_1.default);
              this._popupLichSu.node.parent = Windown_1.Windown.MatTroiView.node.getChildByName("Game");
              this._popupLichSu.show();
              return [ 2 ];
            }
          });
        });
      };
      MatTroiView.prototype.showMoneyAllWin = function(money) {
        this.labelChipReviceInBox.setMoney(money);
        Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
      };
      MatTroiView.prototype.onClickFakeAllData = function() {
        var dataSet = {
          data: '{"agWin":2100,"numFreeSpin":0,"bonusSpinR":[2,2],"agUser":147650,"listItemWinL":[{"2b":false,"lsIdItem":"[1]","lsstack":"[2]","lsAgWin":"[300]","win":300},{"2b":false,"lsIdItem":"[0]","lsstack":"[3]","lsAgWin":"[400]","win":400}],"bonusSpinL":[3,3],"agBet":50,"listItemWinR":[{"2b":false,"lsIdItem":"[]","lsstack":"[]","lsAgWin":"[]","win":0},{"2b":false,"lsIdItem":"[]","lsstack":"[]","lsAgWin":"[]","win":0}],"views":[[[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":1}],[{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":11},{"size":1,"typeItem":0,"idItem":8}],[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":11}]],[[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":0},{"size":1,"typeItem":0,"idItem":2}],[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":0},{"size":1,"typeItem":0,"idItem":3}],[{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":11},{"size":1,"typeItem":0,"idItem":8}],[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":11}]],[[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":5}],[{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":7}],[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":1}],[{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":11},{"size":1,"typeItem":0,"idItem":8}],[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":11}]]],"Scarter3":false}',
          bet: this.curRoomBet
        };
        this.sfsObjTest2 = Windown_1.Windown.JsonToSFSObj(JSON.stringify(dataSet));
        this.onClickBtnSpin();
        cc.log("onClickFakeAllData");
      };
      MatTroiView.prototype.onClickSendObjTest = function(event, data) {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        dataSet.putInt("bet", this.curRoomBet);
        dataSet.putUtfString("arr", '[[{"size":1,"typeItem":0,"idItem":0},{"size":1,"typeItem":0,"idItem":11}],\n            [{"size":1,"typeItem":0,"idItem":11},{"size":1,"typeItem":0,"idItem":8},{"size":1,"typeItem":0,"idItem":8}],\n            [{"size":1,"typeItem":0,"idItem":11},{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":0}],\n            [{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":10}],\n            [{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":3}],\n            [{"size":9,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":3}]]');
        this.sfsObjTest = dataSet;
        this.onClickBtnSpin();
        cc.log("onClickSendObjTest");
      };
      MatTroiView.prototype.onClickItemAutoSpin = function(event, data) {
        Windown_1.Windown.MatTroiView.audio.playClick();
        var toggleContainer = this.btnStartAuto.node.parent.getComponentInChildren(cc.ToggleContainer);
        toggleContainer.allowSwitchOff = false;
        var name = event.node.name;
        var count = Number(name);
        this.stateSpin.countAutoSpin = count;
        this.btnStartAuto.interactable = true;
        this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#FF8E26");
      };
      MatTroiView.prototype.onClickStartAutoSpin = function() {
        this.onClickBtnSpin();
        this.onClickCloseListAuto();
        Windown_1.Windown.MatTroiView.stateSpin.countAutoSpin > 0 && Windown_1.Windown.MatTroiView.setCountAuto(Windown_1.Windown.MatTroiView.stateSpin.countAutoSpin);
      };
      MatTroiView.prototype.onClickShowListAuto = function() {
        Windown_1.Windown.MatTroiView.audio.playClick();
        this.nodeChooseAuto.active = true;
        this.nodeChooseAuto.opacity = 0;
        this.nodeChooseAuto.runAction(cc.fadeIn(.3));
        this.btnStartAuto.interactable = false;
        this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#945F00");
      };
      MatTroiView.prototype.onClickCloseListAuto = function() {
        var _this = this;
        Windown_1.Windown.MatTroiView.audio.playClick();
        this.nodeChooseAuto.stopAllActions();
        this.nodeChooseAuto.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          var toggleContainer = _this.btnStartAuto.node.parent.getComponentInChildren(cc.ToggleContainer);
          toggleContainer.allowSwitchOff = true;
          toggleContainer.toggleItems.forEach(function(v) {
            v.isChecked && v.uncheck();
          });
          _this.nodeChooseAuto.active = false;
          _this.btnStartAuto.interactable = false;
          _this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#945F00");
        })));
      };
      __decorate([ property(AssetMatTroi_1.default) ], MatTroiView.prototype, "asset", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "bkgSprite", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentEffect", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentBackgroundEffect", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentItemFront", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentItemActive", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentNearWin", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "nodeLine", void 0);
      __decorate([ property(EffectMatTroi_1.default) ], MatTroiView.prototype, "effect", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], MatTroiView.prototype, "labelChipReviceInBox", void 0);
      __decorate([ property(cc.Label) ], MatTroiView.prototype, "lb_totalBet", void 0);
      __decorate([ property(cc.Toggle) ], MatTroiView.prototype, "toggleMusic", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], MatTroiView.prototype, "lb_FSLeft", void 0);
      __decorate([ property(cc.Label) ], MatTroiView.prototype, "lb_TotalLine", void 0);
      __decorate([ property(LbMonoSpace_1.default) ], MatTroiView.prototype, "lb_CountAuto", void 0);
      __decorate([ property(InfoBarControllerMatTroi_1.default) ], MatTroiView.prototype, "infoBar", void 0);
      __decorate([ property(EffectControlMatTroi_1.default) ], MatTroiView.prototype, "effectController", void 0);
      __decorate([ property(MultiControlMatTroi_1.default) ], MatTroiView.prototype, "muitlCtr", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "parentMask", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "nodeChooseAuto", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "khungItem", void 0);
      __decorate([ property(AudioMatTroi_1.default) ], MatTroiView.prototype, "audio", void 0);
      __decorate([ property([ cc.Button ]) ], MatTroiView.prototype, "listNodeDeactive", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "nodeBtnPlay", void 0);
      __decorate([ property(cc.Node) ], MatTroiView.prototype, "nodeBtnSeting", void 0);
      __decorate([ property(cc.Toggle) ], MatTroiView.prototype, "toggleTurbo", void 0);
      __decorate([ property(cc.Button) ], MatTroiView.prototype, "btnStartAuto", void 0);
      MatTroiView = __decorate([ ccclass ], MatTroiView);
      return MatTroiView;
    }(cc.Component);
    exports.default = MatTroiView;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Other/LbMonoSpace": void 0,
    "../../../Scritps/Other/MakeDelay": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./AssetMatTroi": "AssetMatTroi",
    "./AudioMatTroi": "AudioMatTroi",
    "./EffectControlMatTroi": "EffectControlMatTroi",
    "./EffectMatTroi": "EffectMatTroi",
    "./InfoBarControllerMatTroi": "InfoBarControllerMatTroi",
    "./ItemSlotMatTroi": "ItemSlotMatTroi",
    "./LichSuMatTroi": "LichSuMatTroi",
    "./MultiControlMatTroi": "MultiControlMatTroi",
    "./SpinNormalMatTroi": "SpinNormalMatTroi"
  } ],
  MultiControlMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed0dfBjo59Am5DM+R7ndcYX", "MultiControlMatTroi");
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
    var LbMonoSpace_1 = require("../../../Scritps/Other/LbMonoSpace");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MultiControlMatTroi = function(_super) {
      __extends(MultiControlMatTroi, _super);
      function MultiControlMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMultil = null;
        _this.nodeMultilFade = null;
        _this.curentMutil = 0;
        _this.resolve = null;
        return _this;
      }
      MultiControlMatTroi.prototype.start = function() {
        this.nodeMultilFade.opacity = 0;
      };
      MultiControlMatTroi.prototype.take = function(re, isSaveMutil) {
        var scaleBig = 1.4;
        var scaleNormal = 1.2;
        var yItemBkg = 120;
        this.nodeMultil.getComponentInChildren(LbMonoSpace_1.default).string = "x" + this.curentMutil.toString();
        this.nodeMultilFade.getComponentInChildren(LbMonoSpace_1.default).string = "x" + this.curentMutil.toString();
      };
      MultiControlMatTroi.prototype.startFreeSpin = function() {
        this.curentMutil = 2;
        this.nodeMultil.getComponentInChildren(LbMonoSpace_1.default).string = "x" + this.curentMutil.toString();
        this.nodeMultilFade.getComponentInChildren(LbMonoSpace_1.default).string = "x" + this.curentMutil.toString();
        this.nodeMultil.opacity = 255;
      };
      MultiControlMatTroi.prototype.endTakeMultil = function() {
        var _this = this;
        return new Promise(function(re, je) {
          if (_this.curentMutil > 0) {
            _this.nodeMultil.stopAllActions();
            _this.nodeMultil.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, .8).easing(cc.easeQuinticActionIn()), cc.moveTo(.3, 0, -138).easing(cc.easeQuinticActionIn())), cc.callFunc(function() {
              _this.getComponent(cc.Animation).play("TakeMutilIB");
              _this.nodeMultilFade.opacity = 0;
              _this.nodeMultilFade.scale = .8;
              _this.nodeMultilFade.stopAllActions();
              _this.nodeMultilFade.runAction(cc.spawn(cc.fadeTo(.1, 120), cc.scaleTo(.5, 2).easing(cc.easeQuinticActionOut()), cc.sequence(cc.delayTime(.4), cc.fadeOut(.1).easing(cc.easeQuinticActionOut()))));
              re(null);
              _this.resolve = null;
            }), cc.moveTo(.3, 0, -280).easing(cc.easeQuinticActionOut())));
          } else re(null);
        });
      };
      MultiControlMatTroi.prototype.resetForNextSpin = function() {};
      __decorate([ property(cc.Node) ], MultiControlMatTroi.prototype, "nodeMultil", void 0);
      __decorate([ property(cc.Node) ], MultiControlMatTroi.prototype, "nodeMultilFade", void 0);
      MultiControlMatTroi = __decorate([ ccclass ], MultiControlMatTroi);
      return MultiControlMatTroi;
    }(cc.Component);
    exports.default = MultiControlMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/Other/LbMonoSpace": void 0
  } ],
  SpinNormalMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38d83AoChdIjJBpcxkrJ8A5", "SpinNormalMatTroi");
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
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var EffectControlMatTroi_1 = require("./EffectControlMatTroi");
    var SpinNormalMatTroi = function() {
      function SpinNormalMatTroi() {
        this.listFunShowOceLine = [];
        this.funShowOceLine = null;
        this.listColum = [];
        this.effect = null;
        this.isMaxSpeed = false;
        this.isAutoSpin = false;
        this.lastAutoSpin = false;
        this.countAutoSpin = 0;
        this.lastFreeSpinLeft = 0;
        this.freeSpinLeft = 0;
        this.freeSpinCache = 0;
        this.moneyTotalFs = 0;
        this.curentCountScater = 0;
        this.currentMutilFs = 1;
        this.isShowNearWin = false;
        this.listColum = Windown_1.Windown.MatTroiView.listColum;
        this.effect = Windown_1.Windown.MatTroiView.effect;
      }
      SpinNormalMatTroi.prototype.onStart = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var i, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 7, , 8 ]);
                this.removeAllMutilAdded();
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < this.listColum.length)) return [ 3, 4 ];
                this.listColum[i].runSpin();
                if (!!this.isMaxSpeed) return [ 3, 3 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.025).prosime ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                if (!this.isMaxSpeed) return [ 3, 6 ];
                return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.1).prosime ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
                Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.spinActiveLoop, .5, true);
                return [ 3, 8 ];

               case 7:
                e_1 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_1);
                return [ 3, 8 ];

               case 8:
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.onEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, listSc, count, listProsime, _i, listSc_1, temp, _a, _b, temp, e_2;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              listResult = Windown_1.Windown.MatTroiView.listResultConvert;
              _c.label = 1;

             case 1:
              _c.trys.push([ 1, 13, , 14 ]);
              listSc = Windown_1.Windown.MatTroiView.getListActiveScaster(listResult[0].listSFSObj);
              count = 0;
              listProsime = [];
              this.isShowNearWin = false;
              for (_i = 0, listSc_1 = listSc; _i < listSc_1.length; _i++) {
                temp = listSc_1[_i];
                if (temp) {
                  this.isShowNearWin = true;
                  break;
                }
              }
              Windown_1.Windown.MatTroiView.audio.stopEffect(Windown_1.Windown.MatTroiView.audio.spinActiveLoop);
              _a = 0, _b = this.listColum;
              _c.label = 2;

             case 2:
              if (!(_a < _b.length)) return [ 3, 7 ];
              temp = _b[_a];
              if (!!this.isMaxSpeed) return [ 3, 4 ];
              return [ 4, temp.stopSpin(listSc[count], listResult[0].listSFSObj[count]) ];

             case 3:
              _c.sent();
              return [ 3, 5 ];

             case 4:
              listProsime.push(temp.stopSpinIsFastSpin(listSc[count], listResult[0].listSFSObj[count]));
              _c.label = 5;

             case 5:
              count++;
              _c.label = 6;

             case 6:
              _a++;
              return [ 3, 2 ];

             case 7:
              if (!this.isMaxSpeed) return [ 3, 10 ];
              return [ 4, Promise.all(listProsime) ];

             case 8:
              _c.sent();
              Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.spinStopQuick);
              return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.25).prosime ];

             case 9:
              _c.sent();
              return [ 3, 12 ];

             case 10:
              return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.5).prosime ];

             case 11:
              _c.sent();
              _c.label = 12;

             case 12:
              cc.log("stop all colum1");
              this.handleStopAllColum();
              return [ 3, 14 ];

             case 13:
              e_2 = _c.sent();
              Util_1.Util.ThrowErrProsime(e_2);
              return [ 3, 14 ];

             case 14:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalMatTroi.prototype.handleErrSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _i, _a, temp, e_3;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              Windown_1.Windown.MatTroiView.audio.stopEffect(Windown_1.Windown.MatTroiView.audio.spinActiveLoop);
              _b.label = 1;

             case 1:
              _b.trys.push([ 1, 7, , 8 ]);
              _i = 0, _a = this.listColum;
              _b.label = 2;

             case 2:
              if (!(_i < _a.length)) return [ 3, 6 ];
              temp = _a[_i];
              if (!!this.isMaxSpeed) return [ 3, 4 ];
              return [ 4, temp.stopSpin(false, temp.result) ];

             case 3:
              _b.sent();
              return [ 3, 5 ];

             case 4:
              temp.stopSpin(false, temp.result);
              _b.label = 5;

             case 5:
              _i++;
              return [ 3, 2 ];

             case 6:
              Windown_1.Windown.MatTroiView.resetForNewGame();
              return [ 3, 8 ];

             case 7:
              e_3 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_3);
              return [ 3, 8 ];

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalMatTroi.prototype.onForceEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, listSc, listProsime, count, _i, _a, temp, e_4;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 3, , 4 ]);
              Windown_1.Windown.MatTroiView.clearAllMakeDelay();
              listResult = Windown_1.Windown.MatTroiView.listResultConvert;
              listSc = Windown_1.Windown.MatTroiView.getListActiveScaster(listResult[0].listSFSObj);
              listProsime = [];
              count = 0;
              for (_i = 0, _a = this.listColum; _i < _a.length; _i++) {
                temp = _a[_i];
                listProsime.push(temp.forceStopSpin(listSc[count], listResult[0].listSFSObj[count]));
                count++;
              }
              Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.spinStopQuick);
              return [ 4, Promise.all(listProsime) ];

             case 1:
              _b.sent();
              return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.25).prosime ];

             case 2:
              _b.sent();
              cc.log("stop all colum2");
              this.handleStopAllColum();
              return [ 3, 4 ];

             case 3:
              e_4 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_4);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalMatTroi.prototype.handleStopAllColum = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, i, l, itemResult, isShowEffectTotal, e_5;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 32, , 33 ]);
              if (Windown_1.Windown.MatTroiView.stateReel == StateReelSlot_1.default.STOP) return [ 2 ];
              Windown_1.Windown.MatTroiView.stateReel = StateReelSlot_1.default.STOP;
              Windown_1.Windown.MatTroiView.setStateEffBtnSpin();
              listResult = Windown_1.Windown.MatTroiView.listResultConvert;
              this.activeAllSymbol();
              i = 0, l = listResult.length;
              _a.label = 1;

             case 1:
              if (!(i < l)) return [ 3, 29 ];
              itemResult = listResult[i];
              this.curentCountScater = itemResult.countScater;
              isShowEffectTotal = itemResult.listItemWinL && itemResult.listItemWinR;
              if (!isShowEffectTotal) return [ 3, 11 ];
              EffectControlMatTroi_1.default.instance.showAnimLightingSunMoonTotal(10);
              EffectControlMatTroi_1.default.instance.showAnimLightingSunMoonTotal(9);
              return [ 4, this.showItemBonusSpin(10, itemResult.bonusSpinL) ];

             case 2:
              _a.sent();
              EffectControlMatTroi_1.default.instance.removeEffectLighting(10);
              return [ 4, this.showItemBonusSpin(9, itemResult.bonusSpinR) ];

             case 3:
              _a.sent();
              EffectControlMatTroi_1.default.instance.removeEffectLighting(9);
              return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.3 / Windown_1.Windown.MatTroiView.getDelta()).prosime ];

             case 4:
              _a.sent();
              return [ 4, this.checkAndShowLineAn(itemResult.listItemWinL, itemResult.listItemWinR, itemResult.agWin) ];

             case 5:
              _a.sent();
              return [ 4, this.showMultiBonusTotal(itemResult.bonusSpinL + itemResult.bonusSpinR) ];

             case 6:
              _a.sent();
              return [ 4, this.caculateMutilMoney(itemResult.agWin, itemResult.bonusSpinL + itemResult.bonusSpinR) ];

             case 7:
              _a.sent();
              this.checkAndRemoveSymbol(itemResult.listItemWinL, itemResult.listItemWinR);
              if (!itemResult.isNoSap) return [ 3, 10 ];
              return [ 4, this.addNewSymbol(listResult[i + 1]) ];

             case 8:
              _a.sent();
              return [ 4, this.moveAllSymbol() ];

             case 9:
              _a.sent();
              _a.label = 10;

             case 10:
              return [ 3, 28 ];

             case 11:
              if (!(itemResult.listItemWinR || itemResult.listItemWinL)) return [ 3, 25 ];
              return [ 4, this.showItemBonusSpin(10, itemResult.bonusSpinL) ];

             case 12:
              _a.sent();
              EffectControlMatTroi_1.default.instance.removeEffectLighting(10);
              return [ 4, this.showItemBonusSpin(9, itemResult.bonusSpinR) ];

             case 13:
              _a.sent();
              EffectControlMatTroi_1.default.instance.removeEffectLighting(9);
              return [ 4, this.checkAndShowLineAn(itemResult.listItemWinL, itemResult.listItemWinR, itemResult.agWin) ];

             case 14:
              _a.sent();
              return [ 4, Windown_1.Windown.MatTroiView.getMakeDelay(.5 / Windown_1.Windown.MatTroiView.getDelta()).prosime ];

             case 15:
              _a.sent();
              if (!(itemResult.bonusSpinL > 1 && itemResult.listItemWinL && itemResult.listItemWinL.lsIdItem.length > 0)) return [ 3, 18 ];
              return [ 4, this.showMutliBonusReceive(10) ];

             case 16:
              _a.sent();
              return [ 4, this.caculateMutilMoney(itemResult.agWin, itemResult.bonusSpinL) ];

             case 17:
              _a.sent();
              _a.label = 18;

             case 18:
              if (!(itemResult.bonusSpinR > 1 && itemResult.listItemWinR && itemResult.listItemWinR.lsIdItem.length > 0)) return [ 3, 21 ];
              return [ 4, this.showMutliBonusReceive(9) ];

             case 19:
              _a.sent();
              return [ 4, this.caculateMutilMoney(itemResult.agWin, itemResult.bonusSpinR) ];

             case 20:
              _a.sent();
              _a.label = 21;

             case 21:
              this.checkAndRemoveSymbol(itemResult.listItemWinL, itemResult.listItemWinR);
              if (!itemResult.isNoSap) return [ 3, 24 ];
              return [ 4, this.addNewSymbol(listResult[i + 1]) ];

             case 22:
              _a.sent();
              return [ 4, this.moveAllSymbol() ];

             case 23:
              _a.sent();
              _a.label = 24;

             case 24:
              return [ 3, 28 ];

             case 25:
              if (!(this.lastFreeSpinLeft > 0)) return [ 3, 28 ];
              return [ 4, this.showItemBonusSpin(10, itemResult.bonusSpinL) ];

             case 26:
              _a.sent();
              EffectControlMatTroi_1.default.instance.removeEffectLighting(10);
              return [ 4, this.showItemBonusSpin(9, itemResult.bonusSpinR) ];

             case 27:
              _a.sent();
              EffectControlMatTroi_1.default.instance.removeEffectLighting(9);
              _a.label = 28;

             case 28:
              i++;
              return [ 3, 1 ];

             case 29:
              return [ 4, this.showMoneyTotalRevice() ];

             case 30:
              _a.sent();
              return [ 4, this.checkAndShowEffect() ];

             case 31:
              _a.sent();
              this.resetForNextNextSpin();
              return [ 3, 33 ];

             case 32:
              e_5 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_5);
              return [ 3, 33 ];

             case 33:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalMatTroi.prototype.removeAllMutilAdded = function() {
        var _this = this;
        return new Promise(function(re, je) {
          Windown_1.Windown.MatTroiView.muitlCtr.resetForNextSpin();
          _this.listColum.forEach(function(v) {
            v.getListSymbol().forEach(function(symbol) {
              symbol.removeMutilWhenSpin();
            });
          });
          re(null);
        });
      };
      SpinNormalMatTroi.prototype.checkAndRemoveSymbol = function(itemWinL, itemWinR) {
        this.activeAllSymbol();
        var listId = [];
        var listStack = [];
        if (itemWinL && "undefined" != typeof itemWinL) {
          listId = itemWinL.lsIdItem;
          listStack = itemWinL.lsstack;
          for (var i = 0, l = listId.length; i < l; i++) for (var j = 0; j < listStack[i] + 1; j++) {
            var itemColum = this.listColum[j];
            itemColum.checkAndRemoveItem(listId[i]);
          }
        }
        if (itemWinR && "undefined" != typeof itemWinR) {
          listId = itemWinR.lsIdItem;
          listStack = itemWinR.lsstack;
          for (var i = 0, l = listId.length; i < l; i++) for (var j = this.listColum.length - 1; j >= this.listColum.length - (listStack[i] + 1); j--) {
            var itemColum = this.listColum[j];
            itemColum.checkAndRemoveItem(listId[i]);
          }
        }
      };
      SpinNormalMatTroi.prototype.addNewSymbol = function(itemResult) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var listPro, temp, e_6;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                listPro = [];
                for (temp in this.listColum) listPro.push(this.listColum[temp].addNewListSymbol(itemResult.listSFSObj[temp]));
                return [ 4, Promise.all(listPro) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_6 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_6);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.moveAllSymbol = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var count, listPro, temp, e_7;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                count = 0;
                listPro = [];
                for (temp in this.listColum) {
                  listPro.push(this.listColum[temp].moveAllSymbol(count));
                  this.listColum[temp].checkIsNorSap() && count++;
                }
                return [ 4, Promise.all(listPro) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_7 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_7);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.caculateMutilMoney = function(moneyWin, multiplier) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              try {
                Windown_1.Windown.MatTroiView.infoBar.showTakeMoneyTurn(moneyWin * multiplier);
                resolve(null);
              } catch (e) {
                Util_1.Util.ThrowErrProsime(e);
              }
              return [ 2 ];
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.showItemBonusSpin = function(idCheck, multiplier) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var isHasBonus_1, e_8;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 3, , 4 ]);
                isHasBonus_1 = false;
                this.listColum.forEach(function(col) {
                  var listSymbolResult = col.getListSymbolResult();
                  listSymbolResult.forEach(function(symbol) {
                    if (symbol.result == idCheck && !symbol.isShowEffectBonus) {
                      isHasBonus_1 = true;
                      symbol.takeBonusSpinSunMoon(multiplier);
                    }
                  });
                });
                if (!isHasBonus_1) return [ 3, 2 ];
                return [ 4, EffectControlMatTroi_1.default.instance.addMutil(idCheck, multiplier) ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                resolve(null);
                return [ 3, 4 ];

               case 3:
                e_8 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_8);
                return [ 3, 4 ];

               case 4:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.offAllSymbol = function(isOffScater) {
        void 0 === isOffScater && (isOffScater = true);
        Windown_1.Windown.MatTroiView.activeMask(true);
      };
      SpinNormalMatTroi.prototype.activeAllSymbol = function() {
        Windown_1.Windown.MatTroiView.activeMask(false);
      };
      SpinNormalMatTroi.prototype.checkAndShowLineAn = function(itemWinL, itemWinR, moneyWin) {
        var _this = this;
        this.offAllSymbol();
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var totalMoney, listId, listStack, listMoney, i, l, j, itemColum, i, l, j, itemColum, e_9;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                totalMoney = 0;
                listId = [];
                listStack = [];
                listMoney = [];
                if ("undefined" != typeof itemWinL) {
                  listId = itemWinL.lsIdItem;
                  listStack = itemWinL.lsstack;
                  listMoney = itemWinL.lsAgWin;
                  for (i = 0, l = listId.length; i < l; i++) {
                    for (j = 0; j < listStack[i] + 1; j++) {
                      itemColum = this.listColum[j];
                      itemColum.checkItemWin(listId[i], 0);
                    }
                    totalMoney += listMoney[i];
                  }
                }
                if ("undefined" != typeof itemWinR) {
                  listId = itemWinR.lsIdItem;
                  listStack = itemWinR.lsstack;
                  listMoney = itemWinR.lsAgWin;
                  for (i = 0, l = listId.length; i < l; i++) {
                    for (j = this.listColum.length - 1; j >= this.listColum.length - (listStack[i] + 1); j--) {
                      itemColum = this.listColum[j];
                      itemColum.checkItemWin(listId[i], 1);
                    }
                    totalMoney += listMoney[i];
                  }
                }
                return [ 4, Windown_1.Windown.MatTroiView.infoBar.showTakeMoney(moneyWin) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_9 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_9);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.resetForNextNextSpin = function() {
        var _this = this;
        cc.log("resetForNextNextSpin:" + this.freeSpinLeft);
        Windown_1.Windown.MatTroiView.resetForNewGame();
        this.freeSpinLeft > 0 ? Windown_1.Windown.MatTroiView.scheduleOnce(function() {
          Windown_1.Windown.MatTroiView.setLbFreeSpinLeft(_this.freeSpinLeft - 1);
          Windown_1.Windown.MatTroiView.onClickBtnSpin();
        }, .5) : this.countAutoSpin > 0 ? Windown_1.Windown.MatTroiView.scheduleOnce(function() {
          _this.countAutoSpin--;
          Windown_1.Windown.MatTroiView.setCountAuto(_this.countAutoSpin);
          Windown_1.Windown.MatTroiView.onClickBtnSpin();
        }, .5) : Windown_1.Windown.MatTroiView.activeAllBtn();
      };
      SpinNormalMatTroi.prototype.checkAndShowEffect = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var isFree3, numFs, e_10;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                isFree3 = Windown_1.Windown.MatTroiView.dataFinish.getBool("Scarter3");
                numFs = Windown_1.Windown.MatTroiView.dataFinish.get("numFreeSpin");
                this.freeSpinLeft = numFs;
                if (!isFree3 && this.lastFreeSpinLeft < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                if (!isFree3) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.MatTroiView.effect.showTakeFreeSpin(numFs) ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                if (!(1 == this.lastFreeSpinLeft && this.freeSpinLeft < 1)) return [ 3, 4 ];
                return [ 4, this.effect.showEndFree(this.moneyTotalFs) ];

               case 3:
                _a.sent();
                this.moneyTotalFs = 0;
                this.currentMutilFs = 1;
                _a.label = 4;

               case 4:
                this.lastFreeSpinLeft = this.freeSpinLeft;
                resolve(null);
                return [ 3, 6 ];

               case 5:
                e_10 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_10);
                return [ 3, 6 ];

               case 6:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.showMoneyTotalRevice = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyTotal, e_11;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                cc.log("chay vao show total money");
                _a.label = 1;

               case 1:
                _a.trys.push([ 1, 3, , 4 ]);
                moneyTotal = Windown_1.Windown.MatTroiView.dataFinish.get("agWin");
                this.lastFreeSpinLeft > 0 && (this.moneyTotalFs += moneyTotal);
                Windown_1.Windown.MatTroiView.activeMask(false);
                if (moneyTotal < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                return [ 4, Windown_1.Windown.MatTroiView.infoBar.showTotalMoney(moneyTotal) ];

               case 2:
                _a.sent();
                Windown_1.Windown.MatTroiView.showMoneyAllWin(moneyTotal);
                resolve(null);
                return [ 3, 4 ];

               case 3:
                e_11 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_11);
                return [ 3, 4 ];

               case 4:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.showMutliBonusReceive = function(idCheck) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_12;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, EffectControlMatTroi_1.default.instance.addMultiBonus(idCheck) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_12 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_12);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalMatTroi.prototype.showMultiBonusTotal = function(totalBonus) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_13;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, EffectControlMatTroi_1.default.instance.addMultiBonusTotal(totalBonus) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_13 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_13);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      return SpinNormalMatTroi;
    }();
    exports.default = SpinNormalMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./EffectControlMatTroi": "EffectControlMatTroi"
  } ],
  SymbolMatTroi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d80dae+pyxLl79se67HbZpV", "SymbolMatTroi");
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
    exports.TYPE_ITEM = void 0;
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var Windown_1 = require("../../../Scritps/Windown");
    var EffectControlMatTroi_1 = require("./EffectControlMatTroi");
    var EffectScaterMatTroi_1 = require("./EffectScaterMatTroi");
    var ItemSlotMatTroi_1 = require("./ItemSlotMatTroi");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TYPE_ITEM;
    (function(TYPE_ITEM) {
      TYPE_ITEM[TYPE_ITEM["NONE"] = 0] = "NONE";
      TYPE_ITEM[TYPE_ITEM["BAC"] = 1] = "BAC";
      TYPE_ITEM[TYPE_ITEM["VANG"] = 2] = "VANG";
    })(TYPE_ITEM = exports.TYPE_ITEM || (exports.TYPE_ITEM = {}));
    var SymbolMatTroi = function(_super) {
      __extends(SymbolMatTroi, _super);
      function SymbolMatTroi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spriteBkg = null;
        _this.spriteKhung = null;
        _this.skeletonItem = null;
        _this.isVectical = true;
        _this.nodeScater = null;
        _this.sizeBkg = new cc.Size(122, 105);
        _this.size = new cc.Size(122, 130);
        _this.itemColum = null;
        _this.result = -1;
        _this.objSFS = null;
        _this.typeItem = TYPE_ITEM.NONE;
        _this.sizeItem = 1;
        _this.canRun = false;
        _this.efWin = null;
        _this.lastPos = null;
        _this.isShuff = false;
        _this.isShowEffectSpawn = false;
        _this.isShowEffectBonus = false;
        _this.isTakeItem = false;
        _this.typewin = -1;
        return _this;
      }
      SymbolMatTroi.prototype.setItemColum = function(itemColum) {
        this.itemColum = itemColum;
        if (this.isVectical) {
          this.node.angle = 0;
          this.size.height = 130;
        } else {
          this.size.height = 130;
          this.node.angle = 90;
        }
      };
      SymbolMatTroi.prototype.setResult = function(result) {
        this.objSFS = result;
        this.result = result.getInt("idItem") + 1;
        this.typeItem = result.getInt("typeItem");
        this.setSize();
        this.skeletonItem.node.active = false;
        this.itemColum.stateWhel == StateReelSlot_1.default.RUN ? this.setImgResult(true) : this.setImgResult(false);
        this.isShuff = false;
        this.isShowEffectSpawn = false;
      };
      SymbolMatTroi.prototype.setSize = function() {
        this.node.height = this.size.height * this.sizeItem;
      };
      SymbolMatTroi.prototype.setImgResult = function(isBlur) {
        this.sprite.node.active = true;
        this.sprite.spriteFrame = this.getSpItem(isBlur);
        this.sprite.node.scale = isBlur ? 1.3 : .65;
      };
      SymbolMatTroi.prototype.getSpKhung = function(isBlur) {
        if (this.sizeItem == TYPE_ITEM.NONE) return null;
        return isBlur ? this.getAtlas().getSpriteFrame("khung_" + this.typeItem + "_" + this.sizeItem + "_blur") : this.getAtlas().getSpriteFrame("khung_" + this.typeItem + "_" + this.sizeItem);
      };
      SymbolMatTroi.prototype.getSpBkg = function(isBlur) {
        return isBlur ? this.getAtlas().getSpriteFrame("bkg_" + this.result + "_" + this.sizeItem + "_blur") : this.getAtlas().getSpriteFrame("bkg_" + this.result + "_" + this.sizeItem);
      };
      SymbolMatTroi.prototype.getSpBkgShuff = function(isBlur) {
        return this.getAtlas().getSpriteFrame("bkg_" + this.result + "_" + this.sizeItem);
      };
      SymbolMatTroi.prototype.getSpItem = function(isBlur) {
        var size = this.sizeItem;
        this.result < 12 && (size = cc.misc.clampf(this.sizeItem, 1, 2));
        return isBlur ? this.getAtlas().getSpriteFrame(this.result + "_blur") : this.getAtlas().getSpriteFrame("" + this.result);
      };
      SymbolMatTroi.prototype.checkItemFront = function() {
        !this.checkIsInView() || 12 != this.result && 13 != this.result ? this.node.parent = this.itemColum.parentItem : this.node.parent = this.itemColum.parentItemFront;
      };
      SymbolMatTroi.prototype.getAtlas = function() {
        return this.result < 11 ? Windown_1.Windown.MatTroiView.asset.atlasSymbol : Windown_1.Windown.MatTroiView.asset.atlasSpecial;
      };
      SymbolMatTroi.prototype.getSpin = function() {
        return Windown_1.Windown.MatTroiView.asset.listSkeDataSymbol[this.result - 1];
      };
      SymbolMatTroi.prototype.getIndexOf = function() {
        return this.itemColum.getListSymbol().indexOf(this);
      };
      SymbolMatTroi.prototype.convertNameSpineById = function() {
        switch (this.result) {
         case 1:
          return "l_j";

         case 2:
          return "l_q";

         case 3:
          return "l_k";

         case 4:
          return "l_a";

         case 5:
          return "h_sundial";

         case 6:
          return "h_sextant";

         case 7:
          return "h_telescope";

         case 8:
          return "h_globe";

         case 9:
          return "h_moon";

         case 10:
          return "h_sun";

         case 11:
          return "s_wild";

         case 12:
          return "s_scatter";
        }
      };
      SymbolMatTroi.prototype.convertNameSize = function() {
        switch (this.sizeItem) {
         case 1:
          return "_a_atlas_symbols";

         case 2:
          return "_b_atlas_symbols";

         case 3:
          if (this.result < 11 || 13 == this.result) return "_b_atlas_symbols";
          if (11 == this.result) return "_cd_atlas_symbols";
          return "_c_atlas_symbols";

         case 4:
          if (this.result < 11 || 13 == this.result) return "_b_atlas_symbols";
          if (11 == this.result) return "_cd_atlas_symbols";
          return "_d_atlas_symbols";
        }
      };
      SymbolMatTroi.prototype.convertNameSizeSpine = function() {
        return this.result <= 10 ? "_atlas_symbols" : "_atlas_specials";
      };
      SymbolMatTroi.prototype.removeAddScater = function(isDestroy) {
        if (null == this.nodeScater) return;
        if (isDestroy) {
          this.nodeScater && this.nodeScater.destroy();
          this.nodeScater = null;
        }
      };
      SymbolMatTroi.prototype.effectAddScater = function() {
        Windown_1.Windown.MatTroiView.stateSpin.isShowNearWin && this.activeItem();
        if (this.nodeScater) return;
        Windown_1.Windown.MatTroiView.audio.playEffectNoStop(Windown_1.Windown.MatTroiView.audio.symScatter);
        this.nodeScater = Windown_1.Windown.MatTroiView.asset.getEffScater();
        this.nodeScater.parent = this.node;
        this.nodeScater.setPosition(0, 0);
        this.nodeScater.getComponent(EffectScaterMatTroi_1.default).showFs();
      };
      SymbolMatTroi.prototype.effectScaterShowFS = function() {
        if (12 == this.result && this.checkIsInView() && this.nodeScater) {
          this.activeItem();
          this.nodeScater.getComponent(EffectScaterMatTroi_1.default).showFs();
        }
      };
      SymbolMatTroi.prototype.effectNearWinScater = function() {
        if (12 == this.result && this.nodeScater) {
          this.activeItem();
          this.nodeScater.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
            Windown_1.Windown.MatTroiView.audio.playEffectNoStop(Windown_1.Windown.MatTroiView.audio.heartbeat);
          }), cc.repeat(cc.sequence(cc.scaleTo(.25, 1.2), cc.scaleTo(.15, 1)), 2), cc.delayTime(.5)), 3));
        }
      };
      SymbolMatTroi.prototype.checkIsInView = function() {
        return this.node.y < 0 && this.node.y > -this.size.height * (this.itemColum.sizeSymbol - 2);
      };
      SymbolMatTroi.prototype.offItem = function() {
        this.node.parent != this.itemColum.parentItem && this.checkItemFront();
      };
      SymbolMatTroi.prototype.offItemFront = function() {
        this.node.parent = this.itemColum.parentItem;
      };
      SymbolMatTroi.prototype.activeItem = function(time) {
        void 0 === time && (time = .3);
        this.node.parent = this.itemColum.parentItemActive;
      };
      SymbolMatTroi.prototype.runSpin = function() {
        this.offItemFront();
        this.removeAddScater(true);
        this.isShowEffectBonus = false;
        var actionLoop = cc.repeatForever(cc.moveBy(1, 0, -2500));
        this.node.stopAllActions();
        this.node.runAction(actionLoop);
        this.canRun = true;
      };
      SymbolMatTroi.prototype.stopSpin = function(action) {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(action, cc.callFunc(function() {
          _this.itemColum.effStopSpin();
        })));
      };
      SymbolMatTroi.prototype.initPosStartGame = function() {
        var index = this.getIndexOf();
        var lastSymbol = this.itemColum.getListSymbol()[index - 1];
        var posLastSymboy = null === lastSymbol || void 0 === lastSymbol ? void 0 : lastSymbol.node.y;
        var targetPosY = null;
        targetPosY = lastSymbol ? posLastSymboy - this.node.height / 2 - lastSymbol.node.height / 2 : this.node.height / 2;
        this.node.y = targetPosY;
      };
      SymbolMatTroi.prototype.moveWhenListChange = function(type, timeDelay, funCall) {
        void 0 === timeDelay && (timeDelay = 0);
        void 0 === funCall && (funCall = null);
        var index = this.getIndexOf();
        var preSymbol = this.itemColum.getListSymbol()[index + 1];
        var posLastSymboy = preSymbol.node.y;
        var targetPosY = null;
        if (type == ItemSlotMatTroi_1.TYPE_MOVE.NORMAL) {
          targetPosY = posLastSymboy + this.node.height / 2 + preSymbol.node.height / 2;
          this.node.y = targetPosY;
        }
      };
      SymbolMatTroi.prototype.takeItem = function() {
        var speed = Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed ? 2 : 1;
        var timeDelay = 1.4;
        var nodeWildIdle = Windown_1.Windown.MatTroiView.asset.getWinSymbol(this.typewin);
        nodeWildIdle.parent = this.itemColum.parentItemActive;
        nodeWildIdle.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, this.itemColum.parentItemActive));
        nodeWildIdle.zIndex = cc.macro.MIN_ZINDEX;
        this.node.parent = this.itemColum.parentItemActive;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.isTakeItem = true;
        this.removeEfWin();
        var anim = nodeWildIdle.getComponent(cc.Animation);
        var state = anim.play("TakeItem1");
        state.speed = speed;
        this.activeItem(0);
        this.efWin = nodeWildIdle;
        this.skeletonItem.setAnimation(0, "win", true);
      };
      SymbolMatTroi.prototype.takeBonusSpinSunMoon = function(multiplier) {
        this.isShowEffectBonus = true;
        cc.tween(this.skeletonItem.node).set({
          scale: .65
        }).to(.3 / Windown_1.Windown.MatTroiView.getDelta(), {
          scale: .75
        }, {
          easing: cc.easing.sineOut
        }).to(.3 / Windown_1.Windown.MatTroiView.getDelta(), {
          scale: .65
        }, {
          easing: cc.easing.sineIn
        }).start();
        var bgAdd = null;
        bgAdd = 9 == this.result ? this.node.getChildByName("bgMoonAdd") : this.node.getChildByName("bgSunAdd");
        bgAdd.active = true;
        var posSymbol = Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.MatTroiView.parentEffect);
        EffectControlMatTroi_1.default.instance.effectLightingBonus(posSymbol, this.result, multiplier);
      };
      SymbolMatTroi.prototype.removeBkgBonusSpin = function() {
        var bgAdd = null;
        9 == this.result ? bgAdd = this.node.getChildByName("bgMoonAdd") : 10 == this.result && (bgAdd = this.node.getChildByName("bgSunAdd"));
        if (bgAdd) {
          bgAdd.stopAllActions();
          bgAdd.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
            bgAdd.active = false;
          })));
        }
      };
      SymbolMatTroi.prototype.removeEfWin = function() {
        if (this.efWin) {
          var ani = this.efWin.getComponent(cc.Animation);
          ani.targetOff(ani);
          ani.stop();
          Windown_1.Windown.MatTroiView.asset.putWinSymbol(this.efWin, this.typewin);
        }
        this.efWin = null;
      };
      SymbolMatTroi.prototype.removeItem = function() {
        var _this = this;
        var speed = Windown_1.Windown.MatTroiView.stateSpin.isMaxSpeed ? 2 : 1;
        var indexOf = this.getIndexOf();
        indexOf > -1 && this.itemColum.getListSymbol().splice(indexOf, 1);
        this.node.runAction(cc.sequence(cc.fadeOut(.3 / Windown_1.Windown.MatTroiView.getDelta()), cc.callFunc(function() {
          Windown_1.Windown.MatTroiView.asset.putSymbol(_this.node);
        })));
        Windown_1.Windown.MatTroiView.audio.playEffect(Windown_1.Windown.MatTroiView.audio.symShrink);
        if (this.efWin) {
          var anim = this.efWin.getComponent(cc.Animation);
          var state = anim.play("TakeItem1End");
          state.speed = speed;
          anim.once(cc.Animation.EventType.FINISHED, function() {
            _this.removeEfWin();
          });
        }
      };
      SymbolMatTroi.prototype.removeMutilWhenSpin = function() {
        this.removeEfWin();
      };
      SymbolMatTroi.prototype.effectSpawnSymbol = function() {
        if (this.isShowEffectSpawn || !this.checkIsInView()) return;
        this.checkItemFront();
        this.sprite.node.active = false;
        var skedata = this.getSpin();
        this.skeletonItem.node.active = true;
        this.skeletonItem.skeletonData = skedata;
        this.skeletonItem.setAnimation(0, "spawn", false);
        this.skeletonItem.node.scale = .65;
        this.isShowEffectSpawn = true;
        12 == this.result ? this.effectAddScater() : 11 == this.result && Windown_1.Windown.MatTroiView.audio.playEffectNoStop(Windown_1.Windown.MatTroiView.audio.symWild);
      };
      SymbolMatTroi.prototype.unuse = function() {
        this.skeletonItem.node.active = false;
        this.itemColum = null;
        this.isShowEffectSpawn = false;
        this.isShowEffectBonus = false;
        this.isTakeItem = false;
        this.isShuff = false;
        this.result = -1;
        this.node.opacity = 255;
        this.sprite.node.scale = .65;
        this.sprite.node.y = 1;
        this.node.scale = 1;
        this.sprite.node.opacity = 255;
        this.sprite.node.active = true;
        this.skeletonItem.node.active = false;
        this.node.stopAllActions();
        this.removeAddScater(true);
      };
      SymbolMatTroi.prototype.checkEndCot = function() {
        if (0 == this.getIndexOf()) {
          var yCheck = -this.node.height / 2;
          if (this.node.y <= yCheck) {
            var result = this.itemColum.getIdSymbolResult();
            var listSymbol = this.itemColum.getListSymbol();
            var cpSybolChange = listSymbol.pop();
            listSymbol.unshift(cpSybolChange);
            cpSybolChange.node.zIndex = 0;
            cpSybolChange.setResult(result);
            cpSybolChange.moveWhenListChange(ItemSlotMatTroi_1.TYPE_MOVE.NORMAL);
          }
        }
      };
      SymbolMatTroi.prototype.update = function(dt) {
        this.canRun && this.checkEndCot();
      };
      __decorate([ property(cc.Sprite) ], SymbolMatTroi.prototype, "sprite", void 0);
      __decorate([ property(cc.Sprite) ], SymbolMatTroi.prototype, "spriteBkg", void 0);
      __decorate([ property(cc.Sprite) ], SymbolMatTroi.prototype, "spriteKhung", void 0);
      __decorate([ property(sp.Skeleton) ], SymbolMatTroi.prototype, "skeletonItem", void 0);
      SymbolMatTroi = __decorate([ ccclass ], SymbolMatTroi);
      return SymbolMatTroi;
    }(cc.Component);
    exports.default = SymbolMatTroi;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Windown": void 0,
    "./EffectControlMatTroi": "EffectControlMatTroi",
    "./EffectScaterMatTroi": "EffectScaterMatTroi",
    "./ItemSlotMatTroi": "ItemSlotMatTroi"
  } ]
}, {}, [ "AssetMatTroi", "AudioMatTroi", "CachChoiMatTroi", "DetailHistoryMatTroi", "EffectControlMatTroi", "EffectMatTroi", "EffectScaterMatTroi", "InfoBarControllerMatTroi", "ItemLichSuMatTroi", "ItemMuitlMatTroi", "ItemResultDetaiMatTroi", "ItemSlotMatTroi", "ItemWinDetailHistory", "LichSuMatTroi", "MatTroiView", "MultiControlMatTroi", "SpinNormalMatTroi", "SymbolMatTroi" ]);