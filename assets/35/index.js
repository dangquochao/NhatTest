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
  AssetNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f182ccA64NIRrmSXVXy20/0", "AssetNgoKhong");
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
    var SymbolNgoKhong_1 = require("./SymbolNgoKhong");
    var WildMutilSymbol_1 = require("./WildMutilSymbol");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSpItemBlur = [];
        _this.listSpItem = [];
        _this.listSFItem = [];
        _this.listSpBkgSymbol = [];
        _this.listSpBkgSymbolBlur = [];
        _this.itemSymbolNgoKhong = null;
        _this.itemEffNearWin = null;
        _this.spineGayNhuY = null;
        _this.spineScater = null;
        _this.effectAddSymbol = null;
        _this.effectWinSymbol = null;
        _this.effectBkgAddSymbol = null;
        _this.parentSpineWild = null;
        _this.itemNearWinNoSap = null;
        _this.itemXu = null;
        _this.itemAddSymbol2 = null;
        _this.itemSymbolMutilWild = null;
        _this.poolSymbol = new cc.NodePool(SymbolNgoKhong_1.default);
        _this.poolEffNearWin = new cc.NodePool();
        _this.poolSpineGayNhuY = new cc.NodePool();
        _this.poolSpineScater = new cc.NodePool();
        _this.poolAddSymbol = new cc.NodePool();
        _this.poolBkgAddSymbol = new cc.NodePool();
        _this.poolWinSymbol = new cc.NodePool();
        _this.poolNearWinNoSap = new cc.NodePool();
        _this.poolXu = new cc.NodePool();
        _this.poolAddSymbol2 = new cc.NodePool();
        _this.poolSymbolMutilWild = new cc.NodePool(WildMutilSymbol_1.default);
        return _this;
      }
      NewClass.prototype.getSymbol = function() {
        var node = null;
        node = this.poolSymbol.size() > 0 ? this.poolSymbol.get() : cc.instantiate(this.itemSymbolNgoKhong);
        node.active = true;
        return node;
      };
      NewClass.prototype.putSymbol = function(node) {
        this.poolSymbol.put(node);
      };
      NewClass.prototype.getNearWin = function() {
        var node = null;
        node = this.poolEffNearWin.size() > 0 ? this.poolEffNearWin.get() : cc.instantiate(this.itemEffNearWin);
        node.active = true;
        return node;
      };
      NewClass.prototype.putNearWin = function(node) {
        this.poolEffNearWin.put(node);
      };
      NewClass.prototype.getSpineGayNhuY = function() {
        var node = null;
        if (this.poolSpineGayNhuY.size() > 0) node = this.poolSpineGayNhuY.get(); else {
          node = cc.instantiate(this.spineGayNhuY);
          node.children[0].runAction(cc.repeatForever(cc.rotateBy(2, 360)));
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putSpineGayNhuY = function(node) {
        this.poolSpineGayNhuY.put(node);
      };
      NewClass.prototype.getSpineScater = function() {
        var node = null;
        node = this.poolSpineScater.size() > 0 ? this.poolSpineScater.get() : cc.instantiate(this.spineScater);
        node.active = true;
        return node;
      };
      NewClass.prototype.putSpineScater = function(node) {
        this.poolSpineScater.put(node);
      };
      NewClass.prototype.getAddSymbol = function() {
        var node = null;
        node = this.poolAddSymbol.size() > 0 ? this.poolAddSymbol.get() : cc.instantiate(this.effectAddSymbol);
        node.active = true;
        return node;
      };
      NewClass.prototype.putAddSymbol = function(node) {
        this.poolAddSymbol.put(node);
      };
      NewClass.prototype.getBkgAddSymbol = function() {
        var node = null;
        node = this.poolBkgAddSymbol.size() > 0 ? this.poolBkgAddSymbol.get() : cc.instantiate(this.effectBkgAddSymbol);
        node.active = true;
        return node;
      };
      NewClass.prototype.putBkgAddSymbol = function(node) {
        this.poolBkgAddSymbol.put(node);
      };
      NewClass.prototype.getWinSymbol = function() {
        var node = null;
        node = this.poolWinSymbol.size() > 0 ? this.poolWinSymbol.get() : cc.instantiate(this.effectWinSymbol);
        node.active = true;
        return node;
      };
      NewClass.prototype.putWinSymbol = function(node) {
        this.poolWinSymbol.put(node);
      };
      NewClass.prototype.getNearWinNoSap = function() {
        var node = null;
        node = this.poolNearWinNoSap.size() > 0 ? this.poolNearWinNoSap.get() : cc.instantiate(this.itemNearWinNoSap);
        node.active = true;
        return node;
      };
      NewClass.prototype.putNearWinNoSap = function(node) {
        this.poolNearWinNoSap.put(node);
      };
      NewClass.prototype.getXu = function() {
        var node = null;
        node = this.poolXu.size() > 0 ? this.poolXu.get() : cc.instantiate(this.itemXu);
        node.active = true;
        return node;
      };
      NewClass.prototype.putXu = function(node) {
        this.poolXu.put(node);
      };
      NewClass.prototype.getAddSymbol2 = function() {
        var node = null;
        node = this.poolAddSymbol2.size() > 0 ? this.poolAddSymbol2.get() : cc.instantiate(this.itemAddSymbol2);
        node.active = true;
        return node;
      };
      NewClass.prototype.putAddSymbol2 = function(node) {
        this.poolAddSymbol2.put(node);
      };
      NewClass.prototype.getSymbolMutilWild = function() {
        var node = null;
        node = this.poolSymbolMutilWild.size() > 0 ? this.poolSymbolMutilWild.get() : cc.instantiate(this.itemSymbolMutilWild);
        node.active = true;
        return node;
      };
      NewClass.prototype.putSymbolMutilWild = function(node) {
        this.poolSymbolMutilWild.put(node);
      };
      NewClass.prototype.getSpineWild = function(wildCount) {
        var node = cc.instantiate(this.parentSpineWild.children[wildCount - 1]);
        node.active = true;
        return node;
      };
      NewClass.prototype.putSpineWild = function(node) {
        node.destroy();
      };
      NewClass.prototype.onDestroy = function() {
        this.poolSymbol.clear();
        this.poolEffNearWin.clear();
        this.poolSpineGayNhuY.clear();
        this.poolSpineScater.clear();
        this.poolAddSymbol.clear();
        this.poolBkgAddSymbol.clear();
        this.poolNearWinNoSap.clear();
        this.poolXu.clear();
        this.poolAddSymbol2.clear();
        this.poolSymbolMutilWild.clear();
        this.poolWinSymbol.clear();
      };
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpItemBlur", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], NewClass.prototype, "listSpItem", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSFItem", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpBkgSymbol", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpBkgSymbolBlur", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemSymbolNgoKhong", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemEffNearWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "spineGayNhuY", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "spineScater", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "effectAddSymbol", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "effectWinSymbol", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "effectBkgAddSymbol", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentSpineWild", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemNearWinNoSap", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemXu", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemAddSymbol2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemSymbolMutilWild", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./SymbolNgoKhong": "SymbolNgoKhong",
    "./WildMutilSymbol": "WildMutilSymbol"
  } ],
  AudioNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a63ebvLqPJHGbqaP4HGQmjm", "AudioNgoKhong");
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
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.click = null;
        _this.bgm_bigwin_end = null;
        _this.bgm_bigwin_main = null;
        _this.bgm_fs = null;
        _this.bgm_mg = null;
        _this.bgm_totalwin_end = null;
        _this.bgm_totalwin_main_1 = null;
        _this.bgm_totalwin_main_2 = null;
        _this.bgm_totalwin_main_3 = null;
        _this.fastspinEnd = null;
        _this.fastspinStart = null;
        _this.featureJingubangExpand = null;
        _this.featureJingubangSpawn = null;
        _this.fsReelAppear = null;
        _this.fsSpin = null;
        _this.fsTrans = null;
        _this.fsWonRemainingIncrease = null;
        _this.fsWonTitle = null;
        _this.heartbeat = null;
        _this.heartbeatNoise = null;
        _this.heartbeatSlowdrop = null;
        _this.menu_icon_press = null;
        _this.multiTitle = null;
        _this.multiUp = null;
        _this.prizeInfobarTotalwin = null;
        _this.prizeInfobarTotalwinMedEnd = null;
        _this.prizeInfobarTotalwinMedMain = null;
        _this.prizeSmallwin = null;
        _this.prizeSmallwinMultiplied = null;
        _this.reelReset = null;
        _this.scatterWinHighlight = null;
        _this.slider_effect = null;
        _this.spinActiveLoop = null;
        _this.spinBtn = null;
        _this.spinStop = null;
        _this.spinStopQuick = null;
        _this.symCollapse = null;
        _this.symScatter = null;
        _this.symShrink = null;
        _this.symWildSeparate = null;
        _this.symWildSpawn = null;
        _this.uiCollect = null;
        _this.uiInfo = null;
        _this.uiStart = null;
        _this.voxCounting1 = null;
        _this.voxCounting2 = null;
        _this.voxCounting3 = null;
        _this.voxSmallwin1 = null;
        _this.voxSmallwin2 = null;
        _this.voxSmallwin3 = null;
        _this.wallet_counting_above = null;
        _this.slot_scrolling = null;
        _this.lastRdNumber = -1;
        _this.lastRdNumber2 = -1;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      NewClass.prototype.playMusic = function() {
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.3);
        }
      };
      NewClass.prototype.playIndexTakeLine = function() {
        var rd = Windown_1.Windown.RandomNumber(0, 3);
        while (rd == this.lastRdNumber) rd = Windown_1.Windown.RandomNumber(0, 3);
        this.lastRdNumber = rd;
        0 == rd ? this.playEffect(this.voxSmallwin1) : 1 == rd ? this.playEffect(this.voxSmallwin2) : this.playEffect(this.voxSmallwin3);
      };
      NewClass.prototype.playSmalWin = function() {
        var rd = Windown_1.Windown.RandomNumber(0, 3);
        while (rd == this.lastRdNumber2) rd = Windown_1.Windown.RandomNumber(0, 3);
        this.lastRdNumber2 = rd;
        0 == rd ? this.playEffect(this.voxCounting1) : 1 == rd ? this.playEffect(this.voxCounting2) : this.playEffect(this.voxCounting3);
      };
      NewClass.prototype.playBkgfs = function() {
        var _this = this;
        this.stopMusic();
        this.playEffect(this.fsSpin);
        this.playEffect(this.bgm_fs, .6, true);
        this.scheduleOnce(function() {
          _this.playEffect(_this.reelReset);
        }, 3);
      };
      NewClass.prototype.stopBkgFs = function() {
        this.stopEffect(this.bgm_fs, true);
        this.playMusic();
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_bigwin_end", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_bigwin_main", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_fs", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_mg", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_totalwin_end", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_totalwin_main_1", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_totalwin_main_2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_totalwin_main_3", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fastspinEnd", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fastspinStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "featureJingubangExpand", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "featureJingubangSpawn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsReelAppear", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsSpin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsTrans", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsWonRemainingIncrease", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsWonTitle", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "heartbeat", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "heartbeatNoise", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "heartbeatSlowdrop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "menu_icon_press", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "multiTitle", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "multiUp", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeInfobarTotalwin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeInfobarTotalwinMedEnd", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeInfobarTotalwinMedMain", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeSmallwin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeSmallwinMultiplied", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "reelReset", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scatterWinHighlight", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slider_effect", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinActiveLoop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinBtn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinStop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinStopQuick", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symCollapse", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symScatter", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symShrink", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symWildSeparate", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symWildSpawn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "uiCollect", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "uiInfo", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "uiStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voxCounting1", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voxCounting2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voxCounting3", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voxSmallwin1", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voxSmallwin2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voxSmallwin3", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wallet_counting_above", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slot_scrolling", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  DetailHistoryNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ce4fJPlAJBQqYO8KTMyLpG", "DetailHistoryNgoKhong");
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
    var ItemResultDetail_1 = require("./ItemResultDetail");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.itemTemplate = null;
        _this.lbTitle = null;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.lbMNUser = null;
        _this.lbCuocCoSo = null;
        _this.isFreeSpin = false;
        return _this;
      }
      NewClass.prototype.show = function(SFSObject) {
        this.node.active = true;
        this.node.x = 721.812;
        this.node.stopAllActions();
        this.node.opacity = 0;
        this.node.runAction(cc.spawn(cc.moveTo(.3, 0, 0), cc.fadeIn(.3).easing(cc.easeElasticIn(3))));
        var date = SFSObject.get("date");
        var jsonResult = SFSObject.get("infolog");
        var obj = JSON.parse(jsonResult);
        this.isFreeSpin = obj.numFreeSpin > 0;
        0 == obj.agBet ? this.lbTitle.string = "Quay mi\u1ec5n ph\xed" : this.lbTitle.string = "Quay th\u01b0\u1eddng";
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM HH:mm:ss");
        this.lbBet.string = Windown_1.Windown.formatNumber(20 * obj.agBet);
        this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        this.lbMNUser.string = Windown_1.Windown.formatNumber(obj.agUser);
        this.lbCuocCoSo.string = Windown_1.Windown.formatNumber(obj.agBet);
        var listMutil = JSON.parse(obj.bonusFreeSpin);
        var muti = listMutil[0] || 1;
        var listResultConvert = null;
        try {
          listResultConvert = Windown_1.Windown.NgoKhong.convertResult(JSON.parse(obj.views), obj.listItemWin);
        } catch (e) {
          this.onClickClose();
        }
        cc.log(JSON.stringify(listResultConvert));
        while (this.parentItem.childrenCount > 0) {
          var node = this.parentItem.children[0];
          node.removeFromParent();
          node.destroy();
        }
        for (var i = 0, l = listResultConvert.length; i < l; i++) {
          var node = this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(this.itemTemplate);
            node.parent = this.parentItem;
            node.active = true;
          }
          var cp = node.getComponent(ItemResultDetail_1.default);
          var itemResultConvert = listResultConvert[i];
          cp.init(itemResultConvert.listIdSymbol, itemResultConvert.listItemWin, muti, obj.agBet);
          0 == obj.agBet && itemResultConvert.listItemWin && muti++;
        }
      };
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, 721.812, 0), cc.fadeOut(.3).easing(cc.easeElasticOut(3))), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTitle", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbWin", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMNUser", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCuocCoSo", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0,
    "./ItemResultDetail": "ItemResultDetail"
  } ],
  EffectNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c45eid27ZED5ctAdOe0E+Z", "EffectNgoKhong");
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
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectNgoKhong = function(_super) {
      __extends(EffectNgoKhong, _super);
      function EffectNgoKhong() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.lb_Money = null;
        _this.nodeBigWin = null;
        _this.lb_MutilFs = null;
        _this.lb_MutilFsFake = null;
        _this.listNodeBoxMoney = [];
        _this.btnFast = null;
        _this.listPromiseIgro = [];
        _this.isClickBtnFast = false;
        _this.funNext = null;
        _this.funDelayOff = null;
        _this.mapColor = new Map();
        return _this;
      }
      EffectNgoKhong.prototype.onLoad = function() {
        this.funNext = null;
      };
      EffectNgoKhong.prototype.onEnable = function() {};
      EffectNgoKhong.prototype.onDisable = function() {
        this.unschedule(this.funDelayOff);
      };
      EffectNgoKhong.prototype.initPosMask = function(pos) {
        cc.find("mask", this.node).y = pos;
      };
      EffectNgoKhong.prototype.onClickBtnShowFast = function() {
        this.btnFast.interactable = false;
        this.isClickBtnFast = true;
        while (this.listPromiseIgro.length > 0) {
          var obj = this.listPromiseIgro.shift();
          obj.cancle(true);
        }
      };
      EffectNgoKhong.prototype.showBigWin = function(moneyRevice, mutilRevice) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var time, objDelay1, objDelay2, objDelay2, sfsObj, e_1;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 7, , 8 ]);
                this.scheduleOnce(function() {
                  _this.btnFast.interactable = true;
                }, 1);
                this.lb_Money.node.active = true;
                this.nodeBigWin.active = true;
                this.nodeBigWin.opacity = 255;
                this.lb_Money.resetLb();
                time = 4;
                time = mutilRevice < 25 ? 4 : mutilRevice < 35 ? 8 : 12;
                this.lb_Money.time = time;
                this.lb_Money.setMoney(moneyRevice);
                this.nodeBigWin.getComponent(cc.Animation).play("ShowBigWin");
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.bgm_bigwin_main, 1);
                objDelay1 = Windown_1.Windown.NgoKhong.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay1);
                return [ 4, objDelay1.prosime ];

               case 1:
                _a.sent();
                if (!(mutilRevice >= 25)) return [ 3, 3 ];
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.bgm_bigwin_end, .5);
                this.nodeBigWin.getComponent(cc.Animation).play("ShowMega");
                if (!!this.isClickBtnFast) return [ 3, 3 ];
                objDelay2 = Windown_1.Windown.NgoKhong.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                if (!(mutilRevice >= 35)) return [ 3, 5 ];
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.bgm_bigwin_end, .5);
                this.nodeBigWin.getComponent(cc.Animation).play("ShowSuper");
                if (!!this.isClickBtnFast) return [ 3, 5 ];
                objDelay2 = Windown_1.Windown.NgoKhong.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                Windown_1.Windown.NgoKhong.audio.stopEffect(Windown_1.Windown.NgoKhong.audio.bgm_bigwin_main);
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.bgm_bigwin_end);
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.NgoKhong);
                sfsObj.putInt("mt", Windown_1.Windown.NgoKhong.dataFinish.get("agWin"));
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "bw");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                this.lb_Money.setMoneyNoTime(moneyRevice);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(3).prosime ];

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
      EffectNgoKhong.prototype.showTakeFreeSpin = function(numFree) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listColum, listSymbolScater, pre, nodeMid_1, node_1, ani, pre2, node2, nodeBkg, e_2;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                Windown_1.Windown.NgoKhong.stateSpin.freeSpinCache = numFree;
                listColum = Windown_1.Windown.NgoKhong.listColum;
                listSymbolScater = [];
                listColum.forEach(function(v) {
                  var listSymbol = v.getListSymbol();
                  var indexScater = v.result.indexOf(12);
                  listSymbol[indexScater + 1].effectScaterShowFS();
                });
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.scatterWinHighlight);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1.5).prosime ];

               case 1:
                _a.sent();
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.NgoKhong.toString(), "Frefabs/ShowFreeSpin", cc.Prefab) ];

               case 2:
                pre = _a.sent();
                nodeMid_1 = cc.find("Game/Mid", Windown_1.Windown.NgoKhong.node);
                nodeMid_1.runAction(cc.fadeOut(.5));
                node_1 = cc.instantiate(pre);
                node_1.parent = this.node;
                node_1.zIndex = 1;
                ani = node_1.getComponent(cc.Animation);
                cc.find("title1/numFree", node_1).getComponent(cc.Label).string = Windown_1.Windown.NgoKhong.stateSpin.freeSpinLeft.toString();
                Windown_1.Windown.NgoKhong.audio.playBkgfs();
                ani.play("ShowFS");
                ani.once(cc.Animation.EventType.FINISHED, function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    var e_3;
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                       case 0:
                        _a.trys.push([ 0, 2, , 3 ]);
                        nodeMid_1.runAction(cc.fadeIn(.5));
                        return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.5).prosime ];

                       case 1:
                        _a.sent();
                        node_1.destroy();
                        resolve(null);
                        return [ 3, 3 ];

                       case 2:
                        e_3 = _a.sent();
                        Util_1.Util.ThrowErrProsime(e_3);
                        return [ 3, 3 ];

                       case 3:
                        return [ 2 ];
                      }
                    });
                  });
                });
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1).prosime ];

               case 3:
                _a.sent();
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.NgoKhong.toString(), "Frefabs/BkgFreeSpin", cc.Prefab) ];

               case 4:
                pre2 = _a.sent();
                node2 = cc.instantiate(pre2);
                node2.name = "bkgFreeSpin";
                node2.parent = cc.find("Game", Windown_1.Windown.NgoKhong.node);
                nodeBkg = cc.find("Game/BkgGround", Windown_1.Windown.NgoKhong.node);
                node2.setSiblingIndex(1);
                nodeBkg.active = false;
                this.lb_MutilFs.node.active = true;
                this.lb_MutilFsFake.node.active = true;
                this.lb_MutilFs.string = "x1";
                this.lb_MutilFsFake.string = "x1";
                Windown_1.Windown.NgoKhong.setLbFreeSpinLeft(numFree);
                Windown_1.Windown.NgoKhong.lb_FSLeft.node.parent.active = true;
                this.listNodeBoxMoney.forEach(function(v) {
                  v.y = -613;
                });
                Windown_1.Windown.NgoKhong.stateSpin.removeAllSymbolAdded();
                return [ 3, 6 ];

               case 5:
                e_2 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_2);
                return [ 3, 6 ];

               case 6:
                return [ 2 ];
              }
            });
          });
        });
      };
      EffectNgoKhong.prototype.showEndFree = function(totalMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var pre, node_2, parentXu_1, lbMoney, i, node_3, ani, sfsObj, e_4;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.NgoKhong.toString(), "Frefabs/EndFreeSpin", cc.Prefab) ];

               case 1:
                pre = _a.sent();
                this.listNodeBoxMoney.forEach(function(v) {
                  v.y = -386;
                });
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.bgm_totalwin_main_1);
                this.scheduleOnce(function() {
                  Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.bgm_totalwin_end);
                }, 2.7);
                this.lb_MutilFs.node.active = false;
                this.lb_MutilFsFake.node.active = false;
                cc.find("Game/BkgGround", Windown_1.Windown.NgoKhong.node).active = true;
                Windown_1.Windown.NgoKhong.lb_FSLeft.node.parent.active = false;
                cc.find("Game/bkgFreeSpin", Windown_1.Windown.NgoKhong.node).destroy();
                node_2 = cc.instantiate(pre);
                node_2.parent = this.node;
                node_2.zIndex = 999;
                parentXu_1 = cc.find("ParentXu", node_2);
                lbMoney = node_2.getComponentInChildren(LbMoneyChange_1.default);
                lbMoney.resetLb();
                lbMoney.time = 4.3;
                lbMoney.setMoney(totalMoney);
                for (i = 0; i < 100; i++) {
                  node_3 = Windown_1.Windown.NgoKhong.asset.getXu();
                  node_3.parent = parentXu_1;
                  node_3.zIndex = 10;
                  this.startXu(node_3, i % 3);
                }
                cc.find("ParentLabel/numFS", node_2).getComponent(cc.Label).string = Windown_1.Windown.NgoKhong.stateSpin.freeSpinCache + "";
                ani = node_2.getComponent(cc.Animation);
                ani.play("EndFree");
                ani.once(cc.Animation.EventType.FINISHED, function() {
                  while (parentXu_1.childrenCount > 0) Windown_1.Windown.NgoKhong.asset.putXu(parentXu_1.children[0]);
                  node_2.destroy();
                  resolve(null);
                  Windown_1.Windown.NgoKhong.audio.stopBkgFs();
                });
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.NgoKhong);
                sfsObj.putInt("mt", totalMoney);
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "fs");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                cc.log("n\xf3 xong r nay");
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
        });
      };
      EffectNgoKhong.prototype.startXu = function(node, timeDelay) {
        var _this = this;
        node.opacity = 0;
        node.stopAllActions();
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
      EffectNgoKhong.prototype.pointsOnCircle = function(_a) {
        var radius = _a.radius, angle = _a.angle, cx = _a.cx, cy = _a.cy;
        angle *= Math.PI / 180;
        var x = cx + radius * Math.sin(angle);
        var y = cy + radius * Math.cos(angle);
        return [ x, y ];
      };
      EffectNgoKhong.prototype.effectMutilUp = function(mutil) {
        Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.multiUp);
        this.lb_MutilFs.string = "x" + mutil;
        this.lb_MutilFsFake.string = "x" + mutil;
        this.lb_MutilFs.node.stopAllActions();
        this.lb_MutilFs.node.runAction(cc.sequence(cc.scaleTo(.2, 1.5).easing(cc.easeSineOut()), cc.scaleTo(.2, 1).easing(cc.easeSineIn())));
        this.lb_MutilFsFake.node.stopAllActions();
        this.lb_MutilFsFake.node.scale = 1.5;
        this.lb_MutilFsFake.node.opacity = 0;
        this.lb_MutilFsFake.node.y = 548.186;
        this.lb_MutilFsFake.node.runAction(cc.sequence(cc.delayTime(.15), cc.fadeTo(0, 255), cc.spawn(cc.sequence(cc.delayTime(.1), cc.fadeOut(.3)), cc.scaleTo(.15, 2))));
      };
      EffectNgoKhong.prototype.effectTakeMutil = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              try {
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.multiTitle);
                this.lb_MutilFs.node.stopAllActions();
                this.lb_MutilFs.node.runAction(cc.sequence(cc.scaleTo(.2, 1.5).easing(cc.easeSineOut()), cc.scaleTo(.2, 1).easing(cc.easeSineIn())));
                this.lb_MutilFsFake.node.stopAllActions();
                this.lb_MutilFsFake.node.scale = 1.5;
                this.lb_MutilFsFake.node.opacity = 0;
                this.lb_MutilFsFake.node.y = 548.186;
                this.lb_MutilFsFake.node.runAction(cc.sequence(cc.delayTime(.15), cc.fadeTo(0, 255), cc.spawn(cc.moveTo(1, 0, 150).easing(cc.easeQuarticActionOut()), cc.scaleTo(.5, 5).easing(cc.easeQuarticActionOut())), cc.sequence(cc.spawn(cc.moveTo(.1, 0, -300).easing(cc.easeCubicActionIn()), cc.scaleTo(.1, 3).easing(cc.easeCubicActionIn())), cc.callFunc(resolve), cc.spawn(cc.fadeOut(.2), cc.scaleTo(.1, 5).easing(cc.easeSineOut())))));
              } catch (e) {
                Util_1.Util.ThrowErrProsime(e);
              }
              return [ 2 ];
            });
          });
        });
      };
      EffectNgoKhong.prototype.resetView = function() {
        this.lb_Money.node.getComponent(LbMoneyChange_1.default).resetLb();
        this.lb_Money.node.active = false;
        this.node.opacity = 255;
        this.nodeBigWin.active = false;
      };
      EffectNgoKhong.prototype.onClose = function() {
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
      __decorate([ property(cc.Node) ], EffectNgoKhong.prototype, "nodeMask", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], EffectNgoKhong.prototype, "lb_Money", void 0);
      __decorate([ property(cc.Node) ], EffectNgoKhong.prototype, "nodeBigWin", void 0);
      __decorate([ property(cc.Label) ], EffectNgoKhong.prototype, "lb_MutilFs", void 0);
      __decorate([ property(cc.Label) ], EffectNgoKhong.prototype, "lb_MutilFsFake", void 0);
      __decorate([ property([ cc.Node ]) ], EffectNgoKhong.prototype, "listNodeBoxMoney", void 0);
      __decorate([ property(cc.Button) ], EffectNgoKhong.prototype, "btnFast", void 0);
      EffectNgoKhong = __decorate([ ccclass ], EffectNgoKhong);
      return EffectNgoKhong;
    }(cc.Component);
    exports.default = EffectNgoKhong;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  InfoBarControllerNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1354bN9ZatPIr4MgzUJLBlm", "InfoBarControllerNgoKhong");
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
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbMoney = null;
        _this.spTotalWin = null;
        _this.spWin = null;
        _this.spInfoBar = null;
        _this.listInfoBar = [];
        _this.parentOneMore = null;
        _this.parentContent = null;
        _this.parentMoney = null;
        _this.anhSang = null;
        _this.mask = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        this.parentContent.x = 360;
        this.parentContent.runAction(cc.repeatForever(cc.sequence(cc.moveTo(40, -4778, -5), cc.callFunc(function() {
          _this.parentContent.x = 360;
        }))));
        this.showRdContent();
      };
      NewClass.prototype.showRdContent = function() {
        this.parentContent.active = true;
        this.parentOneMore.active = false;
        this.parentMoney.active = false;
        this.anhSang.opacity = 0;
      };
      NewClass.prototype.showOneMoreScater = function() {
        this.parentContent.active = false;
        this.parentOneMore.active = true;
        this.parentMoney.active = false;
        this.getComponent(cc.Animation).play("InfoBarOneMoreScater");
      };
      NewClass.prototype.showTakeMoneyTurn = function(money, mutilBonus) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(r, j) {
              return __awaiter(_this, void 0, void 0, function() {
                var e_1;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 3, , 4 ]);
                    cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spWin;
                    this.getComponent(cc.Animation).play("InfoBarTakeMoney");
                    this.parentContent.active = false;
                    this.parentOneMore.active = false;
                    this.parentMoney.active = true;
                    this.lbMoney.setMoneyNoTime(money / mutilBonus);
                    if (!(Windown_1.Windown.NgoKhong.stateSpin.freeSpinLeft > 0 && mutilBonus > 1)) return [ 3, 2 ];
                    cc.find("ParrentMOney/info_win", this.node).active = false;
                    return [ 4, Windown_1.Windown.NgoKhong.effect.effectTakeMutil() ];

                   case 1:
                    _a.sent();
                    Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.prizeSmallwinMultiplied);
                    this.getComponent(cc.Animation).play("InfoBarTakeMoney");
                    cc.find("ParrentMOney/info_win", this.node).active = true;
                    _a.label = 2;

                   case 2:
                    this.lbMoney.setMoneyNoTime(money);
                    r(null);
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
            }) ];
          });
        });
      };
      NewClass.prototype.reset = function() {
        this.mask.active = true;
        this.spInfoBar.spriteFrame = this.listInfoBar[0];
      };
      NewClass.prototype.showTotalMoney = function(money) {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyBet, mutilWin, e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 9, , 10 ]);
                if (0 == money) {
                  r(null);
                  return [ 2 ];
                }
                this.lbMoney.resetLb();
                this.mask.active = false;
                moneyBet = Windown_1.Windown.NgoKhong.curRoomBet * Windown_1.Windown.NgoKhong.totalLineBet;
                mutilWin = money / moneyBet;
                if (!(mutilWin < 5)) return [ 3, 2 ];
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.prizeInfobarTotalwinMedEnd, .7);
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.getComponent(cc.Animation).play("InfoBarTakeMoney");
                this.spInfoBar.spriteFrame = this.listInfoBar[0];
                this.lbMoney.setMoneyNoTime(money);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1).prosime ];

               case 1:
                _a.sent();
                return [ 3, 8 ];

               case 2:
                if (!(mutilWin < 15)) return [ 3, 5 ];
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.prizeInfobarTotalwinMedMain);
                Windown_1.Windown.NgoKhong.audio.playSmalWin();
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.getComponent(cc.Animation).play("InfoBarTakeMoney");
                this.spInfoBar.spriteFrame = this.listInfoBar[1];
                this.lbMoney.time = 2;
                this.lbMoney.setMoney(money);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(2).prosime ];

               case 3:
                _a.sent();
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.prizeInfobarTotalwinMedEnd);
                this.parentMoney.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)));
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.3).prosime ];

               case 4:
                _a.sent();
                return [ 3, 8 ];

               case 5:
                return [ 4, Windown_1.Windown.NgoKhong.effect.showBigWin(money, mutilWin) ];

               case 6:
                _a.sent();
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.getComponent(cc.Animation).play("InfoBarTakeMoney");
                this.spInfoBar.spriteFrame = this.listInfoBar[2];
                this.lbMoney.setMoneyNoTime(money);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1).prosime ];

               case 7:
                _a.sent();
                _a.label = 8;

               case 8:
                r(null);
                return [ 3, 10 ];

               case 9:
                e_2 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_2);
                return [ 3, 10 ];

               case 10:
                return [ 2 ];
              }
            });
          });
        });
      };
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "lbMoney", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "spTotalWin", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "spWin", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "spInfoBar", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listInfoBar", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentOneMore", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentContent", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentMoney", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "anhSang", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "mask", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ItemDetalNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a1ad7yCG9GxKzS3mbrdriU", "ItemDetalNgoKhong");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ItemKhung: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "283a5LlZsFPkZdm7WpnNtGB", "ItemKhung");
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
    var ItemKhung = function(_super) {
      __extends(ItemKhung, _super);
      function ItemKhung() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listChanSize = [];
        _this.currentIndex = 0;
        _this.listChanSizeMax = [];
        _this.nodeMoveBot = null;
        _this.nodeMoveTop = null;
        _this.itemPre = null;
        return _this;
      }
      ItemKhung.prototype.intiItemKhungPre = function(itemPre) {
        this.itemPre = itemPre;
      };
      ItemKhung.prototype.updateIndex = function() {
        this.currentIndex++;
      };
      ItemKhung.prototype.reset = function() {
        if (0 == this.currentIndex) return;
        this.currentIndex = 0;
        this.emitNewSize();
      };
      ItemKhung.prototype.emitNewSize = function(isEffest) {
        var _this = this;
        void 0 === isEffest && (isEffest = true);
        var time = .2;
        isEffest || (time = 0);
        if (this.itemPre) {
          var indexOffset_1 = Math.abs(this.currentIndex - this.itemPre.currentIndex);
          0 == indexOffset_1 ? this.listChanSize.forEach(function(v) {
            cc.Tween.stopAllByTarget(v);
            cc.tween(v).to(time, {
              height: 0
            }).start();
          }) : this.listChanSize.forEach(function(v) {
            cc.Tween.stopAllByTarget(v);
            cc.tween(v).to(time, {
              height: 3 + 65 * indexOffset_1
            }).start();
          });
          var indexMove = this.currentIndex > this.itemPre.currentIndex ? this.itemPre.currentIndex : this.currentIndex;
          var y = 265 + 65 * indexMove;
          this.listChanSize[0].runAction(cc.moveTo(time, cc.v2(this.listChanSize[0].x, y)));
          this.listChanSize[1].runAction(cc.moveTo(time, cc.v2(this.listChanSize[0].x, 5 - y)));
        }
        var sizeMax = 528 + 130 * this.currentIndex;
        this.listChanSizeMax.forEach(function(v) {
          cc.Tween.stopAllByTarget(v);
          cc.tween(v).to(time, {
            height: sizeMax
          }).start();
        });
        var sizeMe = 520 + 130 * this.currentIndex;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(time, {
          height: sizeMe
        }).call(function() {
          _this.getComponentsInChildren(cc.Widget).forEach(function(v) {
            v.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
          });
        }).start();
        var size = 3 + 65 * this.currentIndex;
        this.nodeMoveTop.stopAllActions();
        this.nodeMoveTop.runAction(cc.moveTo(time, cc.v2(this.nodeMoveTop.x, 263 + size)));
        this.nodeMoveBot.stopAllActions();
        this.nodeMoveBot.runAction(cc.moveTo(time, cc.v2(this.nodeMoveBot.x, -(260 + size - 3))));
      };
      __decorate([ property([ cc.Node ]) ], ItemKhung.prototype, "listChanSize", void 0);
      __decorate([ property([ cc.Node ]) ], ItemKhung.prototype, "listChanSizeMax", void 0);
      __decorate([ property(cc.Node) ], ItemKhung.prototype, "nodeMoveBot", void 0);
      __decorate([ property(cc.Node) ], ItemKhung.prototype, "nodeMoveTop", void 0);
      ItemKhung = __decorate([ ccclass ], ItemKhung);
      return ItemKhung;
    }(cc.Component);
    exports.default = ItemKhung;
    cc._RF.pop();
  }, {} ],
  ItemLichSuNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13597drg8JLDa/u5DMK/xFm", "ItemLichSuNgoKhong");
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
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.data = null;
        return _this;
      }
      NewClass.prototype.initItem = function(info) {
        try {
          this.data = info;
          var date = this.data.get("date");
          this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM\nHH:mm:ss");
          var jsonResult = this.data.get("infolog");
          var obj = JSON.parse(jsonResult);
          this.lbBet.string = Windown_1.Windown.formatNumber(obj.agBet * Windown_1.Windown.NgoKhong.totalLineBet);
          this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        } catch (e) {
          console.error(e);
        }
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.NgoKhong.audio.playClick();
        Windown_1.Windown.NgoKhong.popupLichSu.showDetail(this.data);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbWin", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemResultDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29f891JaoVLXbBX51spQO/z", "ItemResultDetail");
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
        _this.lbX = null;
        _this.lbTitleToHopWin = null;
        _this.parentItemResult = null;
        _this.parentItemWin = null;
        _this.colorOf = null;
        _this.playTable = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 3, 3, 5, 5, 8, 10, 15, 20, 20, 30, 50, 0, 0 ], [ 8, 8, 10, 10, 15, 20, 30, 40, 40, 50, 80, 0, 0 ], [ 10, 10, 15, 15, 20, 30, 40, 50, 50, 80, 100, 0, 0 ] ];
        return _this;
      }
      NewClass.prototype.init = function(listResult, itemWin, mutil, moneyBet) {
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
            node.children[0].children[0].getComponent(cc.Sprite).spriteFrame = Windown_1.Windown.NgoKhong.asset.listSpBkgSymbol[result];
            node.children[0].children[1].getComponent(cc.Sprite).spriteFrame = Windown_1.Windown.NgoKhong.asset.listSFItem[result];
          }
          for (var i = itemWin.lsIdItem.length; i < this.parentItemWin.childrenCount; i++) this.parentItemWin.children[i].active = false;
          this.lbX.node.active = true;
        } else {
          this.lbTitleToHopWin.string = "-------------";
          this.parentItemWin.active = false;
          this.lbX.node.active = false;
        }
        var listChild = this.parentItemResult.children;
        for (var temp in listChild) {
          var listResultColum = listResult[Number(temp)];
          var itemColum = listChild[temp];
          var itemTemp = itemColum.children[0];
          for (var i = 0, l = listResultColum.length; i < l; i++) {
            var node = itemColum.children[i];
            if (null == node) {
              node = cc.instantiate(itemTemp);
              node.parent = itemColum;
            }
            node.active = true;
            var spBkg = node.children[0].getComponent(cc.Sprite);
            var spResult = node.children[1].getComponent(cc.Sprite);
            spResult.spriteFrame = Windown_1.Windown.NgoKhong.asset.listSFItem[listResultColum[i]];
            spBkg.spriteFrame = Windown_1.Windown.NgoKhong.asset.listSpBkgSymbol[listResultColum[i]];
            node.setPosition(0, l * node.height / 2 - node.height * i - node.height / 2);
            if (11 == listResultColum[i]) {
              spBkg.node.color = cc.Color.WHITE;
              spResult.node.color = cc.Color.WHITE;
            } else {
              spBkg.node.color = this.colorOf;
              spResult.node.color = this.colorOf;
            }
          }
        }
        if (itemWin) {
          var listId = itemWin.lsIdItem;
          var listStack = itemWin.lsstack;
          var listAgwin = itemWin.lsAgWin;
          for (var i = 0, l = listId.length; i < l; i++) {
            var string = "";
            for (var j = 0; j < listStack[i] + 1; j++) {
              var list = listChild[j];
              var count = 0;
              for (var z = 0, lz = list.childrenCount; z < lz; z++) if (listResult[j][z] == listId[i] || 10 == listResult[j][z]) {
                var node_1 = list.children[z];
                node_1.children[0].color = cc.Color.WHITE;
                node_1.children[1].color = cc.Color.WHITE;
                count++;
              }
              string += count + "x";
            }
            string += this.playTable[listStack[i]][listId[i]] + "x" + Windown_1.Windown.formatNumber(moneyBet);
            var node = this.parentItemWin.children[i];
            node.children[1].getComponent(cc.Label).string = string + "=\n" + Windown_1.Windown.formatNumber(listAgwin[i]);
          }
        }
        this.lbX.string = "x" + mutil;
        var max = 0;
        for (var temp in listResult) {
          var v = listResult[temp];
          v.length - 4 > max && (max = v.length - 4);
        }
        var scale = .8;
        for (var i = 0; i < max; i++) scale *= .92;
        this.parentItemResult.scale = scale;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbX", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTitleToHopWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemResult", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemWin", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "colorOf", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemSlotNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c98cmHIuxGZ7NzNZZI8exw", "ItemSlotNgoKhong");
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
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var SymbolNgoKhong_1 = require("./SymbolNgoKhong");
    var SymbolNgoKhong_2 = require("./SymbolNgoKhong");
    var WildMutilSymbol_1 = require("./WildMutilSymbol");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemSlotNgoKhong = function(_super) {
      __extends(ItemSlotNgoKhong, _super);
      function ItemSlotNgoKhong() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.stateSpin = 0;
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
        _this.totalItem = 4;
        _this.index = -1;
        _this.indexNodeFirt = 0;
        _this.isMoveSlowDown = false;
        _this.deltaSlowDown = 0;
        _this.listNumMutilWild = [];
        _this.indexMaxWild = 0;
        return _this;
      }
      ItemSlotNgoKhong.prototype.onLoad = function() {};
      ItemSlotNgoKhong.prototype.getListSymbol = function() {
        var list = [];
        this.parentItem.children.forEach(function(v) {
          var cp = v.getComponent(SymbolNgoKhong_1.default);
          cp && list.push(cp);
        });
        return list;
      };
      ItemSlotNgoKhong.prototype.getListWildMutil = function() {
        var list = [];
        this.parentItem.children.forEach(function(v) {
          var cp = v.getComponent(WildMutilSymbol_1.default);
          cp && list.push(cp);
        });
        return list;
      };
      ItemSlotNgoKhong.prototype.setResultFirtGame = function(result) {
        var _this = this;
        this.setResult(result);
        this.getListSymbol().forEach(function(v) {
          v.setItemColum(_this);
        });
        for (var i = 0, l = result.length; i < l; i++) {
          var itemSymbol = Windown_1.Windown.NgoKhong.asset.getSymbol();
          itemSymbol.parent = this.parentItem;
          itemSymbol.setSiblingIndex(i + 1);
          itemSymbol.getComponent(SymbolNgoKhong_2.default).setItemColum(this);
          itemSymbol.getComponent(SymbolNgoKhong_2.default).setResult(result[i]);
        }
        this.parentItem.sortAllChildren();
        var list = this.getListSymbol();
        for (var i = 0, l = list.length; i < l; i++) {
          var v = list[i];
          v.node.y = list.length * v.node.height / 2 - v.node.height * i - v.node.height / 2;
        }
        this.totalItem = 4;
        Windown_1.Windown.NgoKhong.listKhung[this.index].currentIndex = result.length - 4;
        Windown_1.Windown.NgoKhong.listKhung[this.index].emitNewSize(false);
        var heigth = 130 * (list.length - 2);
        this.node.height = heigth;
      };
      ItemSlotNgoKhong.prototype.activeNodeNearWin = function() {
        if (null == this.nodeEffNearWin) {
          this.nodeEffNearWin = Windown_1.Windown.NgoKhong.asset.getNearWin();
          this.nodeEffNearWin.parent = Windown_1.Windown.NgoKhong.parentItem;
          this.nodeEffNearWin.setPosition(this.node.getPosition());
        }
        this.nodeEffNearWin.opacity = 255;
        this.nodeEffNearWin.active = true;
        this.activeAllSymbol();
        var listColum = Windown_1.Windown.NgoKhong.listColum;
        for (var i = 0; i < listColum.length; i++) listColum[i] != this && listColum[i].offAllSymbol();
        Windown_1.Windown.NgoKhong.activeMask(true);
        Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.fastspinEnd);
      };
      ItemSlotNgoKhong.prototype.offNearWin = function() {
        var _this = this;
        if (this.nodeEffNearWin) {
          this.nodeEffNearWin.stopAllActions();
          this.nodeEffNearWin.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function() {
            _this.nodeEffNearWin.active = false;
          })));
        }
      };
      ItemSlotNgoKhong.prototype.effectAddColum = function(symbolGayNhuY) {
        Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.fastspinStart, .7);
        Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.fsReelAppear);
        Windown_1.Windown.NgoKhong.effectShake();
        var listSymbol = this.getListSymbol();
        var lengSymbol = listSymbol.length;
        var heigth = 130 * (lengSymbol - 2);
        cc.tween(this.node).to(.2, {
          height: heigth
        }).start();
        var listKhung = Windown_1.Windown.NgoKhong.listKhung;
        listKhung[this.index].currentIndex = lengSymbol - 6;
        listKhung.forEach(function(v) {
          return v.emitNewSize();
        });
        Windown_1.Windown.NgoKhong.emitNewScale();
        var nodeEfAdd = Windown_1.Windown.NgoKhong.asset.getAddSymbol();
        nodeEfAdd.parent = this.node.parent;
        nodeEfAdd.setPosition(this.node.getPosition());
        var ani = nodeEfAdd.getComponent(cc.Animation);
        ani.once(cc.Animation.EventType.FINISHED, function() {
          Windown_1.Windown.NgoKhong.asset.putAddSymbol(nodeEfAdd);
        }, this);
        ani.play("AddSymbol");
        var sizeAdd = 130 * listKhung[this.index].currentIndex;
        nodeEfAdd.children[0].height = 600 + sizeAdd;
        nodeEfAdd.children[1].height = 600 + sizeAdd;
        var nodeGay = nodeEfAdd.children[2];
        nodeGay.height = 100;
        nodeGay.y = symbolGayNhuY.y;
        var nodeAddSymbol2 = Windown_1.Windown.NgoKhong.asset.getAddSymbol2();
        nodeAddSymbol2.setPosition(this.node.x, symbolGayNhuY.y);
        nodeAddSymbol2.parent = this.node.parent;
        var aniNodeAddSymbol2 = nodeAddSymbol2.getComponent(cc.Animation);
        aniNodeAddSymbol2.play("AddGayNhuY");
        aniNodeAddSymbol2.once(cc.Animation.EventType.FINISHED, function() {
          Windown_1.Windown.NgoKhong.asset.putAddSymbol2(nodeAddSymbol2);
        });
        cc.tween(nodeGay).to(.2, {
          height: 600 + sizeAdd,
          y: 0
        }).start();
      };
      ItemSlotNgoKhong.prototype.removeAddSymbolAdded = function() {
        var list = this.getListSymbol();
        var lengthRemove = list.length - 6;
        for (var i = 1, l = 1 + lengthRemove; i < l; i++) list[i].removeItem();
        this.result.splice(0, lengthRemove);
        this.parentItem.sortAllChildren();
        var listSymbol = this.getListSymbol();
        var lengSymbol = listSymbol.length;
        var heigth = 130 * (lengSymbol - 2);
        cc.tween(this.node).to(.2, {
          height: heigth
        }).start();
        for (var i = 0, l = listSymbol.length; i < l; i++) {
          var v = listSymbol[i];
          v.node.stopAllActions();
          var y = listSymbol.length * v.node.height / 2 - v.node.height * i - v.node.height / 2;
          v.node.runAction(cc.moveTo(.2, cc.v2(v.node.x, y)));
        }
      };
      ItemSlotNgoKhong.prototype.showGayNhuY = function(listSymbolNew) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var indexOf_1, symbolGayNhyY_1, listSymbol, lengSymbol, heigth, listKhung, funNext, e_1;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                cc.log("json.:  " + this.result);
                indexOf_1 = this.result.indexOf(11);
                symbolGayNhyY_1 = this.getListSymbol()[indexOf_1 + 1];
                if (null == symbolGayNhyY_1 || void 0 == symbolGayNhyY_1) {
                  this.result[indexOf_1] = listSymbolNew[0];
                  this.result.splice(indexOf_1 + 1, 0, listSymbolNew[1]);
                  this.resetAllItem();
                  listSymbol = this.getListSymbol();
                  lengSymbol = listSymbol.length;
                  heigth = 130 * (lengSymbol - 2);
                  cc.tween(this.node).to(.2, {
                    height: heigth
                  }).start();
                  listKhung = Windown_1.Windown.NgoKhong.listKhung;
                  listKhung[this.index].currentIndex = lengSymbol - 6;
                  listKhung.forEach(function(v) {
                    return v.emitNewSize();
                  });
                  Windown_1.Windown.NgoKhong.emitNewScale();
                  resolve(null);
                  Util_1.Util.ThrowErrProsime({
                    stack: "null gay nhu y: " + Windown_1.Windown.SFSObjToJson(Windown_1.Windown.NgoKhong.dataFinish)
                  });
                  return [ 2 ];
                }
                this.result[indexOf_1] = listSymbolNew[0];
                this.result.splice(indexOf_1 + 1, 0, listSymbolNew[1]);
                funNext = function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    var nodeSymbolNew, list, i, l, v, y;
                    return __generator(this, function(_a) {
                      try {
                        nodeSymbolNew = Windown_1.Windown.NgoKhong.asset.getSymbol();
                        nodeSymbolNew.setPosition(symbolGayNhyY_1.node.getPosition());
                        nodeSymbolNew.parent = symbolGayNhyY_1.node.parent;
                        nodeSymbolNew.setSiblingIndex(symbolGayNhyY_1.node.getSiblingIndex() + 1);
                        this.node.parent.sortAllChildren();
                        symbolGayNhyY_1.setResult(listSymbolNew[0]);
                        nodeSymbolNew.getComponent(SymbolNgoKhong_1.default).setItemColum(this);
                        nodeSymbolNew.getComponent(SymbolNgoKhong_1.default).setResult(listSymbolNew[1]);
                        symbolGayNhyY_1.addEffectBackGround();
                        nodeSymbolNew.getComponent(SymbolNgoKhong_1.default).addEffectBackGround();
                        this.getListWildMutil().forEach(function(v) {
                          v.moveWhenGayNhuY(indexOf_1);
                        });
                        list = this.getListSymbol();
                        for (i = 0, l = list.length; i < l; i++) {
                          v = list[i];
                          v.node.stopAllActions();
                          y = list.length * v.node.height / 2 - v.node.height * i - v.node.height / 2;
                          cc.log("y: " + y);
                          v.node.runAction(cc.moveTo(.2, cc.v2(v.node.x, y)));
                        }
                        this.effectAddColum(symbolGayNhyY_1.node);
                      } catch (e) {
                        Util_1.Util.ThrowErrProsime(e);
                      }
                      return [ 2 ];
                    });
                  });
                };
                if (!Windown_1.Windown.NgoKhong.stateSpin.isMaxSpeed) return [ 3, 2 ];
                symbolGayNhyY_1.activeItem();
                funNext();
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.2).prosime ];

               case 1:
                _a.sent();
                return [ 3, 4 ];

               case 2:
                Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.featureJingubangExpand, .7);
                symbolGayNhyY_1.addNodeGayNhuY(funNext);
                symbolGayNhyY_1.activeItem();
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.4).prosime ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                resolve(null);
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
        });
      };
      ItemSlotNgoKhong.prototype.setResult = function(listId) {
        this.result = listId;
        this.resultTemp = listId.slice();
        this.indexMaxWild = this.resultTemp.length;
      };
      ItemSlotNgoKhong.prototype.checkIsNoSap = function(listItemNew) {
        var list = this.getListSymbol();
        return list.length - 2 != listItemNew.length;
      };
      ItemSlotNgoKhong.prototype.checkItemWin = function(idSymbol) {
        return __awaiter(this, void 0, void 0, function() {
          var list, listWildMutil, i, l, e_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              list = this.getListSymbol();
              return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.03 * this.index).prosime ];

             case 1:
              _a.sent();
              listWildMutil = this.getListWildMutil();
              listWildMutil.forEach(function(v) {
                v.playAniTake();
              });
              for (i = 1, l = list.length; i < l - 1; i++) list[i].result != idSymbol && 10 != list[i].result || list[i].takeItem();
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
      };
      ItemSlotNgoKhong.prototype.addNewListSymbol = function(listResult, indexDelayScater) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var isShowNearWin, listSymbol, symbolFirt, listNewSymbolAdd, lengthNewSymbol, i, l, nodeSymbol, symbol, listSymbolNew, i, l, i, l, v, y, timeDelay, i, l, v, nodeNearWin_1, y, _loop_1, this_1, i, e_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 6, , 7 ]);
                isShowNearWin = Windown_1.Windown.NgoKhong.stateSpin.curentCountScater > 1;
                this.setResult(listResult);
                listSymbol = this.getListSymbol();
                symbolFirt = listSymbol[0];
                listNewSymbolAdd = [];
                listNewSymbolAdd.unshift(symbolFirt);
                symbolFirt.node.setSiblingIndex(0);
                lengthNewSymbol = listResult.length - listSymbol.length + 2;
                for (i = 0, l = lengthNewSymbol; i < l; i++) {
                  nodeSymbol = Windown_1.Windown.NgoKhong.asset.getSymbol();
                  nodeSymbol.parent = this.parentItem;
                  nodeSymbol.setSiblingIndex(0);
                  nodeSymbol.y = listSymbol[0].node.y + nodeSymbol.height * (i + 2);
                  symbol = nodeSymbol.getComponent(SymbolNgoKhong_1.default);
                  symbol.setItemColum(this);
                  listNewSymbolAdd.unshift(symbol);
                }
                symbolFirt.node.y += symbolFirt.node.height;
                this.parentItem.sortAllChildren();
                listSymbolNew = this.getListSymbol();
                for (i = 1, l = listNewSymbolAdd.length; i < l; i++) listNewSymbolAdd[i].setResult(listResult[i - 1]);
                for (i = 0, l = listSymbolNew.length; i < l; i++) {
                  v = listSymbolNew[i];
                  if (!listNewSymbolAdd.includes(v)) {
                    v.node.stopAllActions();
                    y = listSymbolNew.length * v.node.height / 2 - v.node.height * i - v.node.height / 2;
                    this.actionMove(0, cc.v2(v.node.x, y), v.node);
                  }
                }
                timeDelay = .05;
                if (!(isShowNearWin && !Windown_1.Windown.NgoKhong.stateSpin.isMaxSpeed)) return [ 3, 4 ];
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.3).prosime ];

               case 1:
                _a.sent();
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.heartbeatNoise);
                Windown_1.Windown.NgoKhong.listColum.forEach(function(v) {
                  v.offAllSymbol();
                });
                Windown_1.Windown.NgoKhong.activeMask(true);
                for (i = 0, l = listSymbolNew.length; i < l; i++) {
                  v = listSymbolNew[i];
                  listNewSymbolAdd.includes(v) || v.effectNearWinScater();
                }
                nodeNearWin_1 = Windown_1.Windown.NgoKhong.asset.getNearWinNoSap();
                nodeNearWin_1.parent = this.parentItem;
                nodeNearWin_1.height = 130 * lengthNewSymbol;
                y = (symbolFirt.node.y + listSymbol[1].node.y - 130) / 2;
                nodeNearWin_1.setPosition(cc.v2(0, y));
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(4.5).prosime ];

               case 2:
                _a.sent();
                Windown_1.Windown.NgoKhong.listColum.forEach(function(v) {
                  v.activeAllSymbol();
                });
                Windown_1.Windown.NgoKhong.activeMask(false);
                nodeNearWin_1.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                  nodeNearWin_1.opacity = 255;
                  Windown_1.Windown.NgoKhong.asset.putNearWinNoSap(nodeNearWin_1);
                })));
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.3 + .5 * indexDelayScater).prosime ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                _loop_1 = function(i) {
                  var v = listSymbolNew[i];
                  if (listNewSymbolAdd.includes(v)) {
                    timeDelay += Windown_1.Windown.RandomNumber(0, 100) / 600;
                    v.node.stopAllActions();
                    var y = listSymbolNew.length * v.node.height / 2 - v.node.height * i - v.node.height / 2;
                    var funCall = function() {
                      if (12 == v.result) {
                        v.addNodeScater();
                        Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.symScatter, .6);
                      } else if (10 == v.result) {
                        v.activeWild();
                        Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.symWildSpawn, .7);
                      }
                    };
                    isShowNearWin && !Windown_1.Windown.NgoKhong.stateSpin.isMaxSpeed && Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.heartbeatSlowdrop, .8);
                    this_1.actionMove(timeDelay, cc.v2(v.node.x, y), v.node, funCall);
                  }
                };
                this_1 = this;
                for (i = listSymbolNew.length - 1; i >= 0; i--) _loop_1(i);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(timeDelay + .5).prosime ];

               case 5:
                _a.sent();
                resolve(null);
                return [ 3, 7 ];

               case 6:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 7 ];

               case 7:
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemSlotNgoKhong.prototype.actionMove = function(timeDelay, pos, node, funCall) {
        void 0 === funCall && (funCall = null);
        if (Math.abs(node.y - pos.y) < 10) {
          funCall && funCall();
          return;
        }
        Windown_1.Windown.NgoKhong.stateSpin.isMaxSpeed && (timeDelay = 0);
        var action1 = cc.moveTo(.25, pos).easing(cc.easeSineIn());
        var action2 = cc.sequence(cc.moveBy(.03, 0, 15).easing(cc.easeSineOut()), cc.moveBy(.03, 0, -15).easing(cc.easeSineIn()), cc.callFunc(function() {
          funCall && funCall();
        }));
        node.runAction(cc.sequence(cc.delayTime(timeDelay), action1, cc.callFunc(function() {
          Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.slider_effect, .5);
        }), action2));
      };
      ItemSlotNgoKhong.prototype.offAllSymbol = function() {
        this.getListSymbol().forEach(function(v) {
          v.offItem();
        });
      };
      ItemSlotNgoKhong.prototype.activeAllSymbol = function() {
        this.getListSymbol().forEach(function(v) {
          v.activeItem();
        });
      };
      ItemSlotNgoKhong.prototype.reset = function() {};
      ItemSlotNgoKhong.prototype.runSpin = function() {
        var _this = this;
        var actionStart = cc.moveBy(.15, 0, -130).easing(cc.easeBackIn());
        var actionLoop = cc.repeat(cc.moveBy(1, 0, -2500), cc.macro.REPEAT_FOREVER);
        this.parentItem.stopAllActions();
        this.parentItem.runAction(cc.sequence(actionStart, cc.callFunc(function() {
          _this.getListSymbol().forEach(function(v) {
            v.removeNodeScater();
          });
        }), actionLoop));
        this.stateWhel = StateReelSlot_1.default.RUN;
      };
      ItemSlotNgoKhong.prototype.stopSpin = function(isScarter, result) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_4;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 4, , 5 ]);
                this.setResult(result);
                this.funReject = reject;
                this.isScater = isScarter;
                this.resolve = resolve;
                if (!isScarter) return [ 3, 2 ];
                this.activeNodeNearWin();
                this.runSlowDownActicon();
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1.5).prosime ];

               case 1:
                _a.sent();
                this.stateWhel = StateReelSlot_1.default.SHOW_EFFECT;
                return [ 3, 3 ];

               case 2:
                this.stateWhel = StateReelSlot_1.default.STOP;
                _a.label = 3;

               case 3:
                return [ 3, 5 ];

               case 4:
                e_4 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_4);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemSlotNgoKhong.prototype.forceStopSpin = function() {};
      ItemSlotNgoKhong.prototype.errSpin = function() {};
      ItemSlotNgoKhong.prototype.effStopSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var list, i, l, v, listWildMutil;
          return __generator(this, function(_a) {
            try {
              this.parentItem.stopAllActions();
              this.parentItem.y = 0;
              this.resetAllItem();
              list = this.getListSymbol();
              for (i = 0, l = list.length; i < l; i++) {
                v = list[i];
                if (0 == i || i == l - 1) v.offBlur(); else if (12 == v.result) {
                  v.addNodeScater();
                  Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.symScatter);
                } else if (10 == v.result) {
                  v.activeWild();
                  Windown_1.Windown.NgoKhong.audio.playEffectNoStop(Windown_1.Windown.NgoKhong.audio.symWildSpawn, .7);
                }
              }
              listWildMutil = this.getListWildMutil();
              listWildMutil.forEach(function(v) {
                v.effectShow();
              });
              this.parentItem.children.forEach(function(v) {
                var cp = v.getComponent(WildMutilSymbol_1.default);
                cp && cp.isStopColum();
              });
              this.isMoveSlowDown = false;
              if (this.isScater) this.parentItem.runAction(cc.sequence(cc.moveBy(.15, 0, -30).easing(cc.easeSineOut()), cc.callFunc(this.offNearWin, this), cc.moveBy(.2, 0, 30).easing(cc.easeSineIn()), cc.callFunc(this.resolve, this))); else {
                this.parentItem.runAction(cc.sequence(cc.moveBy(.08, 0, -15).easing(cc.easeSineOut()), cc.moveBy(.08, 0, 15).easing(cc.easeSineIn())));
                this.resolve();
              }
            } catch (e) {
              Util_1.Util.ThrowErrProsime(e);
            }
            return [ 2 ];
          });
        });
      };
      ItemSlotNgoKhong.prototype.resetAllItem = function() {
        var _this = this;
        this.parentItem.sortAllChildren();
        var list = this.getListSymbol();
        Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.spinStop);
        var isSorted = false;
        var count = 0;
        list[count].setResult(Windown_1.Windown.RandomNumber(0, 13));
        count++;
        this.result.forEach(function(v, i) {
          var cp = list[count];
          if (null == cp || void 0 == cp) {
            var nodeSymbol = Windown_1.Windown.NgoKhong.asset.getSymbol();
            nodeSymbol.parent = _this.parentItem;
            nodeSymbol.setSiblingIndex(list[count - 1].node.getSiblingIndex() + 1);
            cp = nodeSymbol.getComponent(SymbolNgoKhong_1.default);
            cp.setItemColum(_this);
            list.push(cp);
            isSorted = true;
          }
          cp.setResult(v);
          count++;
        });
        var cp2 = list[count];
        if (null == cp2 || void 0 == cp2) {
          var nodeSymbol = Windown_1.Windown.NgoKhong.asset.getSymbol();
          nodeSymbol.parent = this.parentItem;
          nodeSymbol.setSiblingIndex(list[count - 1].node.getSiblingIndex() + 1);
          cp2 = nodeSymbol.getComponent(SymbolNgoKhong_1.default);
          cp2.setItemColum(this);
          isSorted = true;
        }
        cp2.setResult(Windown_1.Windown.RandomNumber(0, 13));
        isSorted && this.parentItem.sortAllChildren();
        list = this.getListSymbol();
        for (var i = 0, l = list.length; i < l; i++) {
          var v = list[i];
          v.node.y = list.length * v.node.height / 2 - v.node.height * i - v.node.height / 2;
        }
      };
      ItemSlotNgoKhong.prototype.getIdSymbolResult = function() {
        if (this.stateWhel == StateReelSlot_1.default.STOP) {
          var result = this.resultTemp.pop();
          if (result && 10 == result && this.resultTemp.length <= this.indexMaxWild) {
            var countMutilWild = 1;
            for (var i = this.resultTemp.length - 1; i >= 0; i--) {
              2 == this.index;
              if (10 != this.resultTemp[i]) break;
              countMutilWild++;
              this.indexMaxWild = i;
            }
            if (countMutilWild > 1) {
              cc.log("nhay me vao add count r ne");
              var listSymbol = this.getListSymbol();
              var nodeFirt = listSymbol[0].node;
              var nodeWildMutil = Windown_1.Windown.NgoKhong.asset.getSymbolMutilWild();
              nodeWildMutil.parent = this.parentItem;
              nodeWildMutil.setSiblingIndex(999);
              nodeWildMutil.zIndex = cc.macro.MAX_ZINDEX;
              nodeWildMutil.getComponent(WildMutilSymbol_1.default).init(countMutilWild, this, cc.v2(0, 130 * listSymbol.length / 2 - 130 * (this.resultTemp.length + 2) + 130 * parseInt(countMutilWild / 2) + countMutilWild % 2 * 130 / 2), this.resultTemp.length);
              nodeWildMutil.setPosition(0, nodeFirt.y + 130 * parseInt(countMutilWild / 2) + countMutilWild % 2 * 130 / 2 - 65);
            }
          }
          return result;
        }
        return Windown_1.Windown.RandomNumber(0, 13);
      };
      ItemSlotNgoKhong.prototype.checkParentItem = function() {};
      ItemSlotNgoKhong.prototype.runSlowDownActicon = function() {
        this.parentItem.stopAllActions();
        this.isMoveSlowDown = true;
        this.deltaSlowDown = 6e3;
      };
      ItemSlotNgoKhong.prototype.update = function(dt) {
        if (this.isMoveSlowDown) {
          this.parentItem.y -= dt * this.deltaSlowDown;
          this.deltaSlowDown > 500 ? this.deltaSlowDown -= 1800 * dt : this.deltaSlowDown < 1e3 && (this.stateWhel = StateReelSlot_1.default.STOP);
        }
      };
      __decorate([ property(cc.Node) ], ItemSlotNgoKhong.prototype, "parentItem", void 0);
      ItemSlotNgoKhong = __decorate([ ccclass ], ItemSlotNgoKhong);
      return ItemSlotNgoKhong;
    }(cc.Component);
    exports.default = ItemSlotNgoKhong;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./SymbolNgoKhong": "SymbolNgoKhong",
    "./WildMutilSymbol": "WildMutilSymbol"
  } ],
  LichSuNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19872zHUT1MpqyYlTQhlbH2", "LichSuNgoKhong");
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
    var DetailHistoryNgoKhong_1 = require("./DetailHistoryNgoKhong");
    var ItemLichSuNgoKhong_1 = require("./ItemLichSuNgoKhong");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuNgoKhong = function(_super) {
      __extends(LichSuNgoKhong, _super);
      function LichSuNgoKhong() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.detail = null;
        _this.listData = null;
        _this.maxRow = 11;
        return _this;
      }
      LichSuNgoKhong.prototype.show = function() {
        this.node.active = true;
        this.reset();
        this.node.y = -1280;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.3, 0, 0));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryNgoKhong, null, Windown_1.Windown.NgoKhong.roomSFS);
        Windown_1.Windown.UIManager.showLoading();
      };
      LichSuNgoKhong.prototype.responseServer = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = sfsObj.getSFSArray("history");
        this.initWithListData(sfsArr);
      };
      LichSuNgoKhong.prototype.initWithListData = function(listData) {
        cc.log(Windown_1.Windown.SFSArrToJson(listData));
        var child = this.pageDate.content.children;
        var lengthRows = listData.size();
        var totalPage = parseInt(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.listData = listData;
        this.onChangePage(1);
      };
      LichSuNgoKhong.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuNgoKhong_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuNgoKhong.prototype.showDetail = function(SFSObject) {
        this.detail.show(SFSObject);
      };
      LichSuNgoKhong.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuNgoKhong.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuNgoKhong.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.NgoKhong.audio.playClick();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(PageData_1.default) ], LichSuNgoKhong.prototype, "pageDate", void 0);
      __decorate([ property(DetailHistoryNgoKhong_1.default) ], LichSuNgoKhong.prototype, "detail", void 0);
      LichSuNgoKhong = __decorate([ ccclass ], LichSuNgoKhong);
      return LichSuNgoKhong;
    }(cc.Component);
    exports.default = LichSuNgoKhong;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./DetailHistoryNgoKhong": "DetailHistoryNgoKhong",
    "./ItemLichSuNgoKhong": "ItemLichSuNgoKhong"
  } ],
  NgoKhongView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95758DSxFpOBbtEFrKxDUs0", "NgoKhongView");
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
    var MakeDelay_1 = require("../../../Scritps/Other/MakeDelay");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var AssetNgoKhong_1 = require("./AssetNgoKhong");
    var AudioNgoKhong_1 = require("./AudioNgoKhong");
    var EffectNgoKhong_1 = require("./EffectNgoKhong");
    var InfoBarControllerNgoKhong_1 = require("./InfoBarControllerNgoKhong");
    var ItemKhung_1 = require("./ItemKhung");
    var ItemSlotNgoKhong_1 = require("./ItemSlotNgoKhong");
    var LichSuNgoKhong_1 = require("./LichSuNgoKhong");
    var SpinNormalNgoKhong_1 = require("./SpinNormalNgoKhong");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.aniAsAt = null;
        _this.aniSaoRoi = null;
        _this.asset = null;
        _this.bkgSprite = null;
        _this.parentItem = null;
        _this.parentEffect = null;
        _this.parentKhung = null;
        _this.nodeLine = null;
        _this.effect = null;
        _this.labelChipReviceInBox = null;
        _this.listKhung = [];
        _this.lb_totalBet = null;
        _this.lb_FSLeft = null;
        _this.lb_TotalLine = null;
        _this.lb_CountAuto = null;
        _this.infoBar = null;
        _this.btnSpin = null;
        _this.mask = null;
        _this.nodeChooseAuto = null;
        _this.popupLichSu = null;
        _this.audio = null;
        _this.listNodeDeactive = [];
        _this.cachChoi = null;
        _this.nodeBtnPlay = null;
        _this.nodeBtnSeting = null;
        _this.toggleMusic = null;
        _this.toggleTurbo = null;
        _this.btnStartAuto = null;
        _this.listColum = [];
        _this.listResult = [];
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
        _this.stateSpin = null;
        _this.timeShake = 0;
        _this.forceShake = 0;
        _this.makeDelay = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.NgoKhong = this;
        this.makeDelay = new MakeDelay_1.default(this);
        cc.log("start dieu thuyen");
        this.gameType = GAME_TYPE_1.default.NgoKhong;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        this.setupView();
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.stateSpin = new SpinNormalNgoKhong_1.default();
        this.sendJoinRoom();
        this.activeMask(false);
      };
      NewClass.prototype.sendJoinRoom = function() {
        cc.log("send creat room");
        try {
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("NgoKhongExtension", "ext.Room.SlotNgoKhong.SlotGameView");
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 1;
          roomSeting.groupId = "NgoKhong";
          this.sfs.send(new SFS2X.CreateRoomRequest(roomSeting, true));
        } catch (e) {
          cc.error(e);
          this.onDisconnect();
        }
      };
      NewClass.prototype.onDisconnect = function() {
        cc.log("disconnect");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.director.loadScene("main");
      };
      NewClass.prototype.userExitRoom = function(event) {
        cc.log("user exit room");
        var room = event.room;
        if ("NgoKhong" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            cc.director.loadScene("main");
            return;
          }
        }
      };
      NewClass.prototype.onCreateError = function(event) {
        cc.log("creat errr");
        Windown_1.Windown.UIManager.hideLoading();
        cc.director.loadScene("main");
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      NewClass.prototype.onJoinRoom = function(event) {
        var room = event.room;
        if ("NgoKhong" == room.groupId) {
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
          this.curRoomBet = this.listConfigBet[0].bet;
          this.lb_totalBet.string = Windown_1.Windown.formatNumber(this.totalLineBet * this.curRoomBet);
        }
      };
      NewClass.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      NewClass.prototype.activeMask = function(isActive) {
        if (isActive) {
          this.mask.stopAllActions();
          this.mask.runAction(cc.fadeIn(.3));
        } else {
          this.mask.stopAllActions();
          this.mask.runAction(cc.fadeOut(.3));
        }
      };
      NewClass.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.SpinNgoKhong:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          this.handleFinish(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryNgoKhong:
          this.popupLichSu.responseServer(SFSObject);
        }
      };
      NewClass.prototype.handleFinish = function(data) {
        var _this = this;
        if (data.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          this.stateSpin.handleErrSpin();
          Windown_1.Windown.Dialog.showLog(data.get(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          this.activeAllBtn();
          this.onClickResetCountAuto();
          return;
        }
        this.dataFinish = data;
        Windown_1.Windown.MoneyUser.pushDelayMoney(this.gameType, this.dataFinish.get("agUser"), this.dataFinish.getLong("agWin"));
        this.truTienBet(this.dataFinish.get("agBet") * this.totalLineBet, this.dataFinish.get("agUser"));
        this.listResult = JSON.parse(data.get("views"));
        this.listResultConvert = this.convertResult(this.listResult, JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("listItemWin"))));
        var itemLast = this.listResultConvert[this.listResultConvert.length - 1];
        if (itemLast) {
          var listView = itemLast.listIdSymbol;
          Windown_1.Windown.setLocalStorage("lastNgoKhong", JSON.stringify(listView));
        }
        var delta = this.stateSpin.isMaxSpeed ? 2.5 : 1;
        this.scheduleOnce(function() {
          _this.stateReel = StateReelSlot_1.default.CAN_STOP;
          var time = _this.stateSpin.isMaxSpeed ? .2 : .5;
          _this.scheduleOnce(_this.funEnd = function() {
            _this.stateSpin.onEnd();
          }, time);
        }, .4 / delta);
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.NgoKhong = null;
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
      NewClass.prototype.start = function() {
        var _this = this;
        this.setupView();
        this.setUpPreItemKhung();
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
                return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.NgoKhong.toString()) ];

               case 1:
                bundle = _a.sent();
                bundle.loadDir("Frefabs", function(err, asset) {
                  cc.log("load xong r ne");
                });
                return [ 2 ];
              }
            });
          });
        }, 3);
      };
      NewClass.prototype.initItem = function() {
        var itemTemplate = cc.instantiate(this.parentItem.children[0]);
        var width = itemTemplate.width;
        var lengtItem = 5;
        var lastResult = Windown_1.Windown.getLocalStorage("lastNgoKhong");
        var listResult = null;
        if (lastResult) {
          listResult = JSON.parse(lastResult);
          cc.log("json.string: " + JSON.stringify(lastResult));
        } else {
          listResult = [];
          for (var i = 0; i < lengtItem; i++) {
            var listItem = [];
            for (var j = 0; j < 4; j++) listItem.push(Windown_1.Windown.RandomNumber(0, 13));
            listResult.push(listItem);
          }
        }
        for (var i = 0; i < lengtItem; i++) {
          var node = this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          var cpItem = node.getComponent(ItemSlotNgoKhong_1.default);
          this.listColum.push(cpItem);
          cpItem.index = i;
          cpItem.setResultFirtGame(listResult[i]);
          cpItem.node.x = width * i + width / 2 - lengtItem * width / 2;
          cpItem.node.y = 0;
        }
        this.emitNewScale(false);
      };
      NewClass.prototype.setUpPreItemKhung = function() {
        for (var i = 0, l = this.listKhung.length; i < l; i++) {
          var item = this.listKhung[i];
          i > 0 && item.intiItemKhungPre(this.listKhung[i - 1]);
          item.emitNewSize();
        }
      };
      NewClass.prototype.setupView = function() {
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
      NewClass.prototype.emitNewScale = function(isEffect) {
        void 0 === isEffect && (isEffect = true);
        var max = 0;
        var maxMid = 0;
        var totalLine = 1;
        var time = .2;
        isEffect || (time = 0);
        for (var temp in this.listKhung) {
          var v = this.listKhung[temp];
          v.currentIndex > max && (max = v.currentIndex);
          totalLine *= v.currentIndex + 4;
          Number(temp) > 0 && Number(temp) < 4 && v.currentIndex > maxMid && (maxMid = v.currentIndex);
        }
        var scale = 1;
        for (var i = 0; i < max; i++) scale *= .92;
        this.parentItem.runAction(cc.scaleTo(time, scale));
        this.parentKhung.runAction(cc.scaleTo(time, scale));
        this.parentEffect.runAction(cc.scaleTo(time, scale));
        var heightTotal = 130 * max / 2 + 3 * max;
        heightTotal *= scale;
        var heightTotalMid = 130 * maxMid / 2 + 3 * maxMid;
        heightTotalMid *= scale;
        var y = 400 + heightTotalMid / 2;
        this.nodeLine.runAction(cc.moveTo(time, cc.v2(this.nodeLine.x, y)));
        this.lb_TotalLine.setMoney(totalLine, false, "", false);
      };
      NewClass.prototype.sendClickSpin = function() {
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("testSpin", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          cc.log("send test ne");
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinNgoKhong, sfsObj, this.roomSFS);
      };
      NewClass.prototype.onClickBtnSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 4, , 5 ]);
              if (!(this.stateReel == StateReelSlot_1.default.WAITING)) return [ 3, 2 ];
              this.stateReel = StateReelSlot_1.default.RUN;
              this.setStateEffBtnSpin();
              this.offAllBtn();
              this.infoBar.reset();
              return [ 4, this.stateSpin.onStart() ];

             case 1:
              _a.sent();
              this.sendClickSpin();
              return [ 3, 3 ];

             case 2:
              if (this.stateReel == StateReelSlot_1.default.CAN_STOP) return [ 2 ];
              if (this.stateReel == StateReelSlot_1.default.STOP) ; else if (this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
                this.audio.playClick();
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
      NewClass.prototype.showContentTip = function() {};
      NewClass.prototype.resetForNewGame = function() {
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.setStateEffBtnSpin();
      };
      NewClass.prototype.setStateEffBtnSpin = function() {
        var ani = this.btnSpin.getComponent(cc.Animation);
        var nodeRotate = cc.find("sb_arrow", this.btnSpin);
        var nodeRotateBlur = cc.find("sb_arrow_blur", this.btnSpin);
        if (this.stateReel != StateReelSlot_1.default.STOP) {
          var materialNormal = cc.Material.getBuiltinMaterial("2d-sprite");
          nodeRotate.getComponent(cc.Sprite).setMaterial(0, materialNormal);
        }
        if (this.stateReel == StateReelSlot_1.default.WAITING || this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
          nodeRotateBlur.active = false;
          nodeRotate.active = true;
          nodeRotate.stopAllActions();
          nodeRotate.runAction(cc.repeatForever(cc.rotateBy(3, -360)));
        } else if (this.stateReel == StateReelSlot_1.default.RUN) {
          this.audio.playEffect(this.audio.spinBtn);
          this.audio.playEffect(this.audio.menu_icon_press);
          ani.play("BtnSpin");
          nodeRotateBlur.active = true;
          nodeRotateBlur.stopAllActions();
          nodeRotateBlur.runAction(cc.repeatForever(cc.rotateBy(.3, -360)));
          nodeRotate.active = false;
          this.infoBar.showRdContent();
          if (this.aniAsAt.node.activeInHierarchy) {
            this.aniAsAt.play("AnhSangActive");
            this.aniSaoRoi.play("SaoRoi");
          }
        } else if (this.stateReel == StateReelSlot_1.default.STOP) {
          nodeRotate.active = true;
          nodeRotate.stopAllActions();
          nodeRotateBlur.active = false;
          var materialGray = cc.Material.getBuiltinMaterial("2d-gray-sprite");
          nodeRotate.getComponent(cc.Sprite).setMaterial(0, materialGray);
        }
      };
      NewClass.prototype.setLbFreeSpinLeft = function(num) {
        var parent = this.lb_FSLeft.node.parent;
        this.lb_FSLeft.string = num;
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
      NewClass.prototype.setCountAuto = function(count) {
        this.lb_CountAuto.node.parent.active = !(count < 1);
        this.lb_CountAuto.string = count.toString();
      };
      NewClass.prototype.showMoneyAllWin = function(money) {
        cc.log("money win: " + money);
        this.labelChipReviceInBox.setMoney(money);
        Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
      };
      NewClass.prototype.offLbFree = function() {
        this.lb_FSLeft.node.parent.active = false;
      };
      NewClass.prototype.onClickSendObjTest = function(event, data) {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        dataSet.putInt("bet", this.curRoomBet);
        dataSet.putUtfString("arr", "[[10,10,0,11],[10,9,0,3],[2,7,10,10],[0,5,6,0],[2,5,1,1]]");
        this.sfsObjTest = dataSet;
        this.onClickBtnSpin();
        cc.log("onClickSendObjTest");
      };
      NewClass.prototype.onClickTest = function() {
        return __awaiter(this, void 0, void 0, function() {
          var dataSet;
          return __generator(this, function(_a) {
            dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
            dataSet.putInt("bet", this.curRoomBet);
            dataSet.putUtfString("arr", "[[9,10,1,11],[9,7,0,3],[0,7,0,5],[6,0,7,7],[7,0,10,2]]");
            this.sfsObjTest = dataSet;
            this.onClickBtnSpin();
            return [ 2 ];
          });
        });
      };
      NewClass.prototype.onClickResetCountAuto = function() {
        this.stateSpin.countAutoSpin = 0;
        this.lb_CountAuto.node.parent.active = false;
      };
      NewClass.prototype.onClickItemAutoSpin = function(event, data) {
        var toggleContainer = this.btnStartAuto.node.parent.getComponentInChildren(cc.ToggleContainer);
        toggleContainer.allowSwitchOff = false;
        var name = event.node.name;
        var count = Number(name);
        this.stateSpin.countAutoSpin = count;
        this.btnStartAuto.interactable = true;
        this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#FF8E26");
      };
      NewClass.prototype.onClickStartAutoSpin = function() {
        this.onClickBtnSpin();
        this.onClickCloseListAuto();
        Windown_1.Windown.NgoKhong.stateSpin.countAutoSpin > 0 && Windown_1.Windown.NgoKhong.setCountAuto(Windown_1.Windown.NgoKhong.stateSpin.countAutoSpin);
      };
      NewClass.prototype.onClickShowListAuto = function() {
        this.nodeChooseAuto.active = true;
        this.nodeChooseAuto.opacity = 0;
        this.nodeChooseAuto.runAction(cc.fadeIn(.3));
        this.btnStartAuto.interactable = false;
        this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#945F00");
      };
      NewClass.prototype.onClickCloseListAuto = function() {
        var _this = this;
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
      NewClass.prototype.convertResult = function(listResult, listItemWin) {
        var listReturn = [];
        for (var _i = 0, listResult_1 = listResult; _i < listResult_1.length; _i++) {
          var temp = listResult_1[_i];
          for (var i = 0, l = temp.length; i < l; i++) {
            var temp2 = temp[i];
            temp2.forEach(function(element) {
              element.reverse();
            });
            var itemResult = Object.create(null);
            itemResult.listIdSymbol = temp2;
            itemResult.isNoSap = false;
            itemResult.countScater = this.getCountScater(temp2);
            if (i == l - 1) {
              var itemWin = listItemWin.shift();
              if (itemWin) {
                itemWin.lsIdItem = JSON.parse(itemWin.lsIdItem);
                itemWin.lsstack = JSON.parse(itemWin.lsstack);
                itemWin.lsAgWin = JSON.parse(itemWin.lsAgWin);
                if (itemWin.lsAgWin.length > 0) {
                  itemResult.listItemWin = itemWin;
                  itemResult.isNoSap = true;
                }
              }
            }
            listReturn.push(itemResult);
          }
        }
        return listReturn;
      };
      NewClass.prototype.setResult = function() {};
      NewClass.prototype.getListActiveScaster = function(listResult) {
        var list = [];
        var countScaster = 0;
        for (var i = 0; i < listResult.length; i++) {
          countScaster >= 2 ? list.push(true) : list.push(false);
          listResult[i].includes(12) && countScaster++;
        }
        return list;
      };
      NewClass.prototype.onClickChangeBet = function(event, data) {
        this.audio.playClick();
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
      NewClass.prototype.onClickCachChoi = function() {
        this.cachChoi.active = true;
        this.cachChoi.opacity = 0;
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.fadeIn(.3));
      };
      NewClass.prototype.onCloseCachChoi = function() {
        var _this = this;
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          _this.cachChoi.active = false;
        })));
      };
      NewClass.prototype.onClickBackToLobby = function() {
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      NewClass.prototype.onClickMusic = function() {
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
      NewClass.prototype.onClickTurbo = function() {
        var isCheck = this.toggleTurbo.isChecked;
        this.toggleTurbo.node.children[1].active = !isCheck;
        this.stateSpin.isMaxSpeed = isCheck;
        isCheck ? Windown_1.Windown.UIManager.showAlertMini("\u0110\xe3 B\u1eacT quay nhanh") : Windown_1.Windown.UIManager.showAlertMini("\u0110\xe3 T\u1eaeT quay nhanh");
      };
      NewClass.prototype.onClickSeting = function() {
        this.audio.playClick();
        cc.log("click onClickSeting");
        this.isShowBtnPlay = !this.isShowBtnPlay;
        if (this.isShowBtnPlay) {
          var vecTarget = cc.v2(0, -750);
          this.nodeBtnPlay.runAction(cc.fadeIn(.4));
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeOut(.3), cc.moveTo(.3, vecTarget)));
        } else {
          this.nodeBtnPlay.stopAllActions();
          this.nodeBtnSeting.stopAllActions();
          var vecTarget = cc.v2(0, -483.765);
          this.nodeBtnPlay.runAction(cc.fadeOut(.3));
          this.nodeBtnSeting.opacity = 0;
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeIn(.4), cc.moveTo(.4, vecTarget)));
        }
      };
      NewClass.prototype.getCountScater = function(listResult) {
        var count = 0;
        listResult.forEach(function(v) {
          v.includes(12) && count++;
        });
        return count;
      };
      NewClass.prototype.getMakeDelay = function(time) {
        return this.makeDelay.getDelay(time);
      };
      NewClass.prototype.activeAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = true;
          v.node.children.forEach(function(v) {
            v.color = cc.Color.fromHEX(new cc.Color(), "#FFD500");
          });
        });
      };
      NewClass.prototype.offAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = false;
          v.node.children.forEach(function(v) {
            v.color = cc.Color.fromHEX(new cc.Color(), "#999999");
          });
        });
      };
      NewClass.prototype.truTienBet = function(moneyBet, moneyPlayer) {
        if (0 == moneyBet) return;
        Windown_1.Windown.MoneyUser.subMoney(moneyBet, moneyPlayer);
      };
      NewClass.prototype.effectShake = function(time, volum) {
        void 0 === time && (time = .2);
        void 0 === volum && (volum = 10);
        this.timeShake = time;
        this.forceShake = volum;
      };
      NewClass.prototype.onClickLichSu = function() {
        this.popupLichSu.show();
      };
      NewClass.prototype.update = function(dt) {
        if (this.timeShake > 0) {
          var v2 = cc.v2(Windown_1.Windown.RandomNumber(-this.forceShake, this.forceShake + 1), Windown_1.Windown.RandomNumber(-this.forceShake, this.forceShake + 1));
          this.parentEffect.parent.setPosition(v2);
          this.timeShake -= dt;
        } else this.parentEffect.parent.setPosition(0, 0);
      };
      __decorate([ property(cc.Animation) ], NewClass.prototype, "aniAsAt", void 0);
      __decorate([ property(cc.Animation) ], NewClass.prototype, "aniSaoRoi", void 0);
      __decorate([ property(AssetNgoKhong_1.default) ], NewClass.prototype, "asset", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgSprite", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentEffect", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentKhung", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeLine", void 0);
      __decorate([ property(EffectNgoKhong_1.default) ], NewClass.prototype, "effect", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "labelChipReviceInBox", void 0);
      __decorate([ property([ ItemKhung_1.default ]) ], NewClass.prototype, "listKhung", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_totalBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_FSLeft", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "lb_TotalLine", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_CountAuto", void 0);
      __decorate([ property(InfoBarControllerNgoKhong_1.default) ], NewClass.prototype, "infoBar", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeChooseAuto", void 0);
      __decorate([ property(LichSuNgoKhong_1.default) ], NewClass.prototype, "popupLichSu", void 0);
      __decorate([ property(AudioNgoKhong_1.default) ], NewClass.prototype, "audio", void 0);
      __decorate([ property([ cc.Button ]) ], NewClass.prototype, "listNodeDeactive", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "cachChoi", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBtnPlay", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBtnSeting", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "toggleTurbo", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "btnStartAuto", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
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
    "../../../Scritps/Other/MakeDelay": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./AssetNgoKhong": "AssetNgoKhong",
    "./AudioNgoKhong": "AudioNgoKhong",
    "./EffectNgoKhong": "EffectNgoKhong",
    "./InfoBarControllerNgoKhong": "InfoBarControllerNgoKhong",
    "./ItemKhung": "ItemKhung",
    "./ItemSlotNgoKhong": "ItemSlotNgoKhong",
    "./LichSuNgoKhong": "LichSuNgoKhong",
    "./SpinNormalNgoKhong": "SpinNormalNgoKhong"
  } ],
  SpinNormalNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5972b8gRddBX6n5S9kpD82t", "SpinNormalNgoKhong");
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
    var SpinNormalNgoKhong = function() {
      function SpinNormalNgoKhong() {
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
        this.listColum = Windown_1.Windown.NgoKhong.listColum;
        this.effect = Windown_1.Windown.NgoKhong.effect;
      }
      SpinNormalNgoKhong.prototype.onStart = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var i, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 8, , 9 ]);
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.slot_scrolling);
                return [ 4, this.removeAllSymbolAdded() ];

               case 1:
                _a.sent();
                i = 0;
                _a.label = 2;

               case 2:
                if (!(i < this.listColum.length)) return [ 3, 5 ];
                this.listColum[i].runSpin();
                if (!!this.isMaxSpeed) return [ 3, 4 ];
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.025).prosime ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i++;
                return [ 3, 2 ];

               case 5:
                if (!this.isMaxSpeed) return [ 3, 7 ];
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.1).prosime ];

               case 6:
                _a.sent();
                _a.label = 7;

               case 7:
                resolve(null);
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
        });
      };
      SpinNormalNgoKhong.prototype.onEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, listSc, count, listProsime, _i, _a, temp, e_2;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 10, , 11 ]);
              listResult = Windown_1.Windown.NgoKhong.listResultConvert;
              listSc = Windown_1.Windown.NgoKhong.getListActiveScaster(listResult[0].listIdSymbol);
              count = 0;
              listProsime = [];
              _i = 0, _a = this.listColum;
              _b.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 6 ];
              temp = _a[_i];
              if (!!this.isMaxSpeed) return [ 3, 3 ];
              return [ 4, temp.stopSpin(listSc[count], listResult[0].listIdSymbol[count]) ];

             case 2:
              _b.sent();
              return [ 3, 4 ];

             case 3:
              listProsime.push(temp.stopSpin(listSc[count], listResult[0].listIdSymbol[count]));
              _b.label = 4;

             case 4:
              count++;
              _b.label = 5;

             case 5:
              _i++;
              return [ 3, 1 ];

             case 6:
              if (!this.isMaxSpeed) return [ 3, 9 ];
              return [ 4, Promise.all(listProsime) ];

             case 7:
              _b.sent();
              return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.25).prosime ];

             case 8:
              _b.sent();
              _b.label = 9;

             case 9:
              Windown_1.Windown.NgoKhong.audio.stopEffect(Windown_1.Windown.NgoKhong.audio.slot_scrolling);
              this.handleStopAllColum();
              return [ 3, 11 ];

             case 10:
              e_2 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_2);
              return [ 3, 11 ];

             case 11:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalNgoKhong.prototype.handleErrSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _i, _a, temp, e_3;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 6, , 7 ]);
              Windown_1.Windown.NgoKhong.audio.stopEffect(Windown_1.Windown.NgoKhong.audio.slot_scrolling);
              _i = 0, _a = this.listColum;
              _b.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 5 ];
              temp = _a[_i];
              if (!!this.isMaxSpeed) return [ 3, 3 ];
              return [ 4, temp.stopSpin(false, temp.result) ];

             case 2:
              _b.sent();
              return [ 3, 4 ];

             case 3:
              temp.stopSpin(false, temp.result);
              _b.label = 4;

             case 4:
              _i++;
              return [ 3, 1 ];

             case 5:
              Windown_1.Windown.NgoKhong.resetForNewGame();
              return [ 3, 7 ];

             case 6:
              e_3 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_3);
              return [ 3, 7 ];

             case 7:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalNgoKhong.prototype.handleStopAllColum = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, i, l, itemResult, e_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 11, , 12 ]);
              Windown_1.Windown.NgoKhong.stateReel = StateReelSlot_1.default.STOP;
              Windown_1.Windown.NgoKhong.setStateEffBtnSpin();
              listResult = Windown_1.Windown.NgoKhong.listResultConvert;
              i = 0, l = listResult.length;
              _a.label = 1;

             case 1:
              if (!(i < l)) return [ 3, 8 ];
              itemResult = listResult[i];
              this.curentCountScater = itemResult.countScater;
              if (!(!itemResult.isNoSap && i != l - 1)) return [ 3, 3 ];
              return [ 4, this.checkAndShowGayNhuY(listResult[i].listIdSymbol, listResult[i + 1].listIdSymbol) ];

             case 2:
              _a.sent();
              return [ 3, 5 ];

             case 3:
              if (!itemResult.listItemWin) return [ 3, 5 ];
              return [ 4, this.checkAndShowLineAn(itemResult.listItemWin) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              if (!itemResult.isNoSap) return [ 3, 7 ];
              return [ 4, this.effectNoSap(listResult[i + 1].listIdSymbol) ];

             case 6:
              _a.sent();
              _a.label = 7;

             case 7:
              i++;
              return [ 3, 1 ];

             case 8:
              return [ 4, this.showMoneyTotalRevice() ];

             case 9:
              _a.sent();
              return [ 4, this.checkAndShowEffect() ];

             case 10:
              _a.sent();
              this.resetForNextNextSpin();
              return [ 3, 12 ];

             case 11:
              e_4 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_4);
              return [ 3, 12 ];

             case 12:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalNgoKhong.prototype.checkAndShowGayNhuY = function(listIdSymbol, listIdSymbolNext) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var listColum, i, _a, _b, _i, temp, indexOfGayNhuY, e_5;
            return __generator(this, function(_c) {
              switch (_c.label) {
               case 0:
                _c.trys.push([ 0, 10, , 11 ]);
                listColum = Windown_1.Windown.NgoKhong.listColum;
                for (i = 0; i < listColum.length; i++) listColum[i].offAllSymbol();
                Windown_1.Windown.NgoKhong.activeMask(true);
                _a = [];
                for (_b in listIdSymbol) _a.push(_b);
                _i = 0;
                _c.label = 1;

               case 1:
                if (!(_i < _a.length)) return [ 3, 4 ];
                temp = _a[_i];
                indexOfGayNhuY = listIdSymbol[temp].indexOf(11);
                if (!(indexOfGayNhuY > -1)) return [ 3, 3 ];
                return [ 4, this.listColum[temp].showGayNhuY([ listIdSymbolNext[temp][indexOfGayNhuY], listIdSymbolNext[temp][indexOfGayNhuY + 1] ]) ];

               case 2:
                _c.sent();
                _c.label = 3;

               case 3:
                _i++;
                return [ 3, 1 ];

               case 4:
                if (!this.isMaxSpeed) return [ 3, 6 ];
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.5).prosime ];

               case 5:
                _c.sent();
                return [ 3, 8 ];

               case 6:
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(2).prosime ];

               case 7:
                _c.sent();
                _c.label = 8;

               case 8:
                Windown_1.Windown.NgoKhong.activeMask(false);
                this.listColum.forEach(function(v) {
                  v.activeAllSymbol();
                });
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.3).prosime ];

               case 9:
                _c.sent();
                resolve(null);
                return [ 3, 11 ];

               case 10:
                e_5 = _c.sent();
                Util_1.Util.ThrowErrProsime(e_5);
                return [ 3, 11 ];

               case 11:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNgoKhong.prototype.effectNoSap = function(listIdSymbolNew) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var count, listPro, temp, e_6;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                count = 0;
                listPro = [];
                for (temp in this.listColum) if (this.listColum[temp].checkIsNoSap(listIdSymbolNew[temp])) {
                  listPro.push(this.listColum[temp].addNewListSymbol(listIdSymbolNew[temp], count));
                  count++;
                }
                return [ 4, Promise.all(listPro) ];

               case 1:
                _a.sent();
                if (this.lastFreeSpinLeft > 0) {
                  this.currentMutilFs++;
                  Windown_1.Windown.NgoKhong.effect.effectMutilUp(this.currentMutilFs);
                }
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
      SpinNormalNgoKhong.prototype.checkAndShowLineAn = function(itemWin) {
        var _this = this;
        cc.log("checkAndShowLineAn");
        this.isMaxSpeed || this.listColum.forEach(function(v) {
          v.offAllSymbol();
        });
        Windown_1.Windown.NgoKhong.activeMask(true);
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var totalMoney, listId, listStack, listMoney, i, l, j, itemColum, e_7;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 6, , 7 ]);
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.prizeSmallwin);
                totalMoney = 0;
                listId = itemWin.lsIdItem;
                listStack = itemWin.lsstack;
                listMoney = itemWin.lsAgWin;
                for (i = 0, l = listId.length; i < l; i++) {
                  for (j = 0; j < listStack[i] + 1; j++) {
                    itemColum = this.listColum[j];
                    itemColum.checkItemWin(listId[i]);
                  }
                  totalMoney += listMoney[i];
                }
                Windown_1.Windown.NgoKhong.infoBar.showTakeMoneyTurn(totalMoney * this.currentMutilFs, this.currentMutilFs);
                if (!!this.isMaxSpeed) return [ 3, 3 ];
                Windown_1.Windown.NgoKhong.audio.playIndexTakeLine();
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1.2).prosime ];

               case 1:
                _a.sent();
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.heartbeatSlowdrop, .6);
                Windown_1.Windown.NgoKhong.activeMask(false);
                this.listColum.forEach(function(v) {
                  v.activeAllSymbol();
                });
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1).prosime ];

               case 2:
                _a.sent();
                return [ 3, 5 ];

               case 3:
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.heartbeatSlowdrop, .6);
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(1).prosime ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                resolve(null);
                return [ 3, 7 ];

               case 6:
                e_7 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_7);
                return [ 3, 7 ];

               case 7:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNgoKhong.prototype.removeAllSymbolAdded = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var listKhung, isCheck_1, e_8;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                this.listColum.forEach(function(element) {
                  element.getListSymbol().forEach(function(v) {
                    v.removeNodeScater(true);
                  });
                });
                if (this.freeSpinLeft > 0 && this.lastFreeSpinLeft == this.freeSpinLeft) {
                  resolve(null);
                  return [ 2 ];
                }
                listKhung = Windown_1.Windown.NgoKhong.listKhung;
                isCheck_1 = false;
                listKhung.forEach(function(element) {
                  if (0 != element.currentIndex) {
                    element.currentIndex = 0;
                    isCheck_1 = true;
                  }
                });
                if (!isCheck_1) {
                  resolve(null);
                  return [ 2 ];
                }
                Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.reelReset, .7);
                this.listColum.forEach(function(element) {
                  element.removeAddSymbolAdded();
                });
                listKhung.forEach(function(element) {
                  element.emitNewSize();
                });
                Windown_1.Windown.NgoKhong.emitNewScale();
                return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(.2).prosime ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_8 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_8);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNgoKhong.prototype.resetForNextNextSpin = function() {
        var _this = this;
        cc.log("reset nor nex");
        this.listFunShowOceLine = [];
        Windown_1.Windown.NgoKhong.resetForNewGame();
        this.freeSpinLeft > 0 ? Windown_1.Windown.NgoKhong.scheduleOnce(function() {
          Windown_1.Windown.NgoKhong.setLbFreeSpinLeft(_this.freeSpinLeft - 1);
          Windown_1.Windown.NgoKhong.onClickBtnSpin();
        }, .5) : this.countAutoSpin > 0 ? Windown_1.Windown.NgoKhong.scheduleOnce(function() {
          _this.countAutoSpin--;
          Windown_1.Windown.NgoKhong.setCountAuto(_this.countAutoSpin);
          Windown_1.Windown.NgoKhong.onClickBtnSpin();
        }, .5) : Windown_1.Windown.NgoKhong.activeAllBtn();
      };
      SpinNormalNgoKhong.prototype.checkAndShowEffect = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var isFree3, numFs, e_9;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                isFree3 = Windown_1.Windown.NgoKhong.dataFinish.getBool("Scarter3");
                numFs = Windown_1.Windown.NgoKhong.dataFinish.get("numFreeSpin");
                this.freeSpinLeft = numFs;
                if (!isFree3 && this.lastFreeSpinLeft < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                if (!isFree3) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.NgoKhong.effect.showTakeFreeSpin(numFs) ];

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
                e_9 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_9);
                return [ 3, 6 ];

               case 6:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNgoKhong.prototype.showMoneyTotalRevice = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyTotal, e_10;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                moneyTotal = Windown_1.Windown.NgoKhong.dataFinish.get("agWin");
                this.lastFreeSpinLeft > 0 && (this.moneyTotalFs += moneyTotal);
                Windown_1.Windown.NgoKhong.activeMask(false);
                this.listColum.forEach(function(v) {
                  v.activeAllSymbol();
                });
                if (moneyTotal < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                return [ 4, Windown_1.Windown.NgoKhong.infoBar.showTotalMoney(moneyTotal) ];

               case 1:
                _a.sent();
                Windown_1.Windown.NgoKhong.showMoneyAllWin(moneyTotal);
                cc.log("chay vao end show total money");
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_10 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_10);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNgoKhong.prototype.checkCointainLuBo = function() {};
      SpinNormalNgoKhong.prototype.checkContainDongChac = function() {};
      return SpinNormalNgoKhong;
    }();
    exports.default = SpinNormalNgoKhong;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  SymbolNgoKhong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4470ckDRsZD1Io9Mb2Lwx4/", "SymbolNgoKhong");
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
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SymbolNgoKhong = function(_super) {
      __extends(SymbolNgoKhong, _super);
      function SymbolNgoKhong() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spriteBkg = null;
        _this.skeletonItem = null;
        _this.nodeScater = null;
        _this.nodeNhuY = null;
        _this.itemColum = null;
        _this.result = -1;
        return _this;
      }
      SymbolNgoKhong.prototype.setItemColum = function(itemColum) {
        this.itemColum = itemColum;
      };
      SymbolNgoKhong.prototype.setResult = function(result) {
        if (null == result) return;
        this.result = result;
        this.skeletonItem.node.active = false;
        this.itemColum.stateWhel == StateReelSlot_1.default.RUN ? this.activeBlur() : this.offBlur();
      };
      SymbolNgoKhong.prototype.activeBlur = function() {
        this.sprite.spriteFrame = Windown_1.Windown.NgoKhong.asset.listSpItemBlur[this.result];
        this.spriteBkg.spriteFrame = Windown_1.Windown.NgoKhong.asset.listSpBkgSymbolBlur[this.result];
      };
      SymbolNgoKhong.prototype.offBlur = function() {
        this.sprite.spriteFrame = Windown_1.Windown.NgoKhong.asset.listSFItem[this.result];
        this.spriteBkg.spriteFrame = Windown_1.Windown.NgoKhong.asset.listSpBkgSymbol[this.result];
        this.skeletonItem.skeletonData = Windown_1.Windown.NgoKhong.asset.listSpItem[this.result];
      };
      SymbolNgoKhong.prototype.activeWild = function() {
        if (10 == this.result) {
          this.skeletonItem.node.active = true;
          this.skeletonItem.setAnimation(0, "animation", false);
        }
      };
      SymbolNgoKhong.prototype.effectNearWinScater = function() {
        if (this.nodeScater && 12 == this.result) {
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
            Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.fsWonTitle);
          }), cc.repeat(cc.sequence(cc.scaleTo(.25, .75), cc.scaleTo(.25, .67)), 2), cc.delayTime(.5)), 3));
        }
      };
      SymbolNgoKhong.prototype.effectScaterShowFS = function() {
        if (this.nodeScater) {
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.sequence(cc.scaleTo(.4, .8), cc.delayTime(3), cc.scaleTo(0, .67)));
        }
      };
      SymbolNgoKhong.prototype.offItem = function() {
        this.node.children.forEach(function(v) {
          v.stopActionByTag(999);
          cc.tween(v).to(.3, {
            color: cc.Color.GRAY
          }).tag(999).start();
        });
      };
      SymbolNgoKhong.prototype.activeItem = function() {
        this.node.children.forEach(function(v) {
          v.stopActionByTag(999);
          cc.tween(v).to(.3, {
            color: cc.Color.WHITE
          }).tag(999).start();
        });
      };
      SymbolNgoKhong.prototype.removeNodeScater = function(isEffect) {
        var _this = this;
        void 0 === isEffect && (isEffect = false);
        if (this.nodeScater) if (isEffect) {
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function() {
            _this.nodeScater.opacity = 255;
            Windown_1.Windown.NgoKhong.asset.putSpineScater(_this.nodeScater);
            _this.nodeScater = null;
          })));
        } else Windown_1.Windown.NgoKhong.asset.putSpineScater(this.nodeScater);
        if (this.nodeNhuY) {
          Windown_1.Windown.NgoKhong.asset.putSpineGayNhuY(this.nodeNhuY);
          this.nodeNhuY = null;
        }
      };
      SymbolNgoKhong.prototype.addNodeGayNhuY = function(funCall) {
        var _this = this;
        this.nodeNhuY = Windown_1.Windown.NgoKhong.asset.getSpineGayNhuY();
        this.nodeNhuY.parent = Windown_1.Windown.NgoKhong.parentEffect;
        this.nodeNhuY.zIndex = 101;
        this.nodeNhuY.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.NgoKhong.parentEffect));
        var ske = this.nodeNhuY.getComponentInChildren(sp.Skeleton);
        ske.setAnimation(0, "animation", false);
        this.scheduleOnce(function() {
          funCall();
          Windown_1.Windown.NgoKhong.asset.putSpineGayNhuY(_this.nodeNhuY);
          _this.nodeNhuY = null;
        }, 1.3);
      };
      SymbolNgoKhong.prototype.addNodeScater = function() {
        if (this.nodeScater) return;
        this.nodeScater = Windown_1.Windown.NgoKhong.asset.getSpineScater();
        this.nodeScater.parent = Windown_1.Windown.NgoKhong.parentEffect;
        this.nodeScater.zIndex = 100;
        this.nodeScater.scale = .67;
        this.nodeScater.opacity = 255;
        this.nodeScater.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.NgoKhong.parentEffect));
        var ske = this.nodeScater.getComponent(sp.Skeleton);
        ske.setAnimation(0, "animation", true);
      };
      SymbolNgoKhong.prototype.addEffectBackGround = function() {
        var _this = this;
        var node = Windown_1.Windown.NgoKhong.asset.getBkgAddSymbol();
        node.parent = Windown_1.Windown.NgoKhong.parentEffect;
        node.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.NgoKhong.parentEffect));
        var ani = node.getComponent(cc.Animation);
        var funPosChange = function() {
          node.setPosition(Windown_1.Windown.convertNodeInOtherNode(_this.node, Windown_1.Windown.NgoKhong.parentEffect));
        };
        this.node.on(cc.Node.EventType.POSITION_CHANGED, funPosChange, node);
        ani.once(cc.Animation.EventType.FINISHED, function() {
          _this.node.targetOff(node);
          Windown_1.Windown.NgoKhong.asset.putBkgAddSymbol(node);
        }, this);
        ani.play("AddSymbol2");
      };
      SymbolNgoKhong.prototype.setStateScater = function(state) {
        if (null == this.nodeScater) return;
        if ("waitScater" == state) {
          var ske = this.nodeScater.getComponent(sp.Skeleton);
          ske.setAnimation(0, "win_idle", true);
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.scaleTo(.3, .75));
        } else if ("waitScater2" == state) {
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.repeat(cc.sequence(cc.scaleTo(.2, .75), cc.scaleTo(.2, .67)), 2));
        } else if ("idle" == state) {
          var ske_1 = this.nodeScater.getComponent(sp.Skeleton);
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.sequence(cc.scaleTo(.2, .67), cc.callFunc(function() {
            ske_1.setAnimation(0, "spawn", false);
            ske_1.addAnimation(0, "idle", true);
          })));
        }
      };
      SymbolNgoKhong.prototype.activeSkeleton = function() {};
      SymbolNgoKhong.prototype.setPosNodeWild = function() {
        this.nodeNhuY && this.nodeNhuY.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.NgoKhong.parentEffect));
        this.nodeScater && this.nodeScater.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.NgoKhong.parentEffect));
      };
      SymbolNgoKhong.prototype.takeItem = function() {
        return __awaiter(this, void 0, void 0, function() {
          var timeDelay, nodeWildIdle_1, skedata, ske_2, nodeEff, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              timeDelay = 1.4;
              nodeWildIdle_1 = Windown_1.Windown.NgoKhong.asset.getWinSymbol();
              nodeWildIdle_1.parent = Windown_1.Windown.NgoKhong.parentEffect;
              nodeWildIdle_1.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.NgoKhong.parentEffect));
              skedata = Windown_1.Windown.NgoKhong.asset.listSpItem[this.result];
              ske_2 = nodeWildIdle_1.getComponent(sp.Skeleton);
              if (Windown_1.Windown.NgoKhong.stateSpin.isMaxSpeed) {
                nodeWildIdle_1.opacity = 255;
                ske_2.setAnimation(0, "win", false);
                ske_2.setCompleteListener(function() {
                  Windown_1.Windown.NgoKhong.asset.putWinSymbol(nodeWildIdle_1);
                  ske_2.setCompleteListener(null);
                });
                timeDelay = .7;
              } else {
                if (skedata) {
                  this.skeletonItem.node.active = true;
                  this.skeletonItem.skeletonData = skedata;
                  this.skeletonItem.setAnimation(0, "animation", false);
                } else {
                  nodeEff = this.sprite.node;
                  nodeEff.runAction(cc.spawn(cc.scaleTo(.1, .77), cc.sequence(cc.moveTo(.1, 0, 10), cc.moveTo(.1, 0, 1))));
                }
                if (10 != this.result) {
                  ske_2.setAnimation(0, "win_idle", false);
                  nodeWildIdle_1.opacity = 255;
                } else nodeWildIdle_1.opacity = 0;
                ske_2.scheduleOnce(function() {
                  nodeWildIdle_1.opacity = 255;
                  ske_2.setAnimation(0, "win", false);
                  ske_2.setCompleteListener(function() {
                    Windown_1.Windown.NgoKhong.asset.putWinSymbol(nodeWildIdle_1);
                    ske_2.setCompleteListener(null);
                  });
                }, 1.4);
              }
              this.activeItem();
              return [ 4, Windown_1.Windown.NgoKhong.getMakeDelay(timeDelay).prosime ];

             case 1:
              _a.sent();
              this.removeItem();
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
      };
      SymbolNgoKhong.prototype.removeItem = function() {
        var _this = this;
        if (cc.isValid(this.node, true) && this.itemColum && cc.isValid(this.itemColum.node, true)) {
          this.node.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, this.itemColum.node));
          this.node.parent = this.itemColum.node;
          this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
            Windown_1.Windown.NgoKhong.asset.putSymbol(_this.node);
          })));
        }
      };
      SymbolNgoKhong.prototype.unuse = function() {
        this.skeletonItem.node.active = false;
        this.itemColum = null;
        this.result = -1;
        this.node.opacity = 255;
        this.sprite.node.scale = .67;
        this.sprite.node.y = 1;
        this.node.stopAllActions();
      };
      SymbolNgoKhong.prototype.checkEndCot = function() {
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var viewPos = this.itemColum.node.convertToNodeSpaceAR(worldPos);
        var yCheck = (this.itemColum.result.length + 2 + 1) * this.node.height / 2 * -1;
        if (viewPos.y <= yCheck) {
          this.node.y = this.node.parent.children[0].y + this.node.height;
          this.node.zIndex = 0;
          this.node.setSiblingIndex(0);
          this.node.parent.sortAllChildren();
          var result = this.itemColum.getIdSymbolResult();
          if (void 0 == result) {
            this.itemColum.effStopSpin();
            return;
          }
          this.setResult(result);
        }
      };
      SymbolNgoKhong.prototype.update = function(dt) {
        this.checkEndCot();
        this.setPosNodeWild();
      };
      __decorate([ property(cc.Sprite) ], SymbolNgoKhong.prototype, "sprite", void 0);
      __decorate([ property(cc.Sprite) ], SymbolNgoKhong.prototype, "spriteBkg", void 0);
      __decorate([ property(sp.Skeleton) ], SymbolNgoKhong.prototype, "skeletonItem", void 0);
      SymbolNgoKhong = __decorate([ ccclass ], SymbolNgoKhong);
      return SymbolNgoKhong;
    }(cc.Component);
    exports.default = SymbolNgoKhong;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  WildMutilSymbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a8f6a7QG5EC4zNZ4AI13KS", "WildMutilSymbol");
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
        _this.spWild = null;
        _this.ske = null;
        _this.nodeKhung = null;
        _this.listSpWild = [];
        _this.listSkedataWild = [];
        _this.posCache = null;
        _this.isCanRemove = false;
        _this.lengthWild = 0;
        _this.itemColum = null;
        _this.index = 0;
        return _this;
      }
      NewClass.prototype.init = function(lengWildMutil, itemColum, posCache, index) {
        this.spWild.spriteFrame = this.listSpWild[lengWildMutil - 1];
        this.ske.skeletonData = this.listSkedataWild[lengWildMutil - 1];
        this.node.height = 130 * lengWildMutil;
        this.itemColum = itemColum;
        this.posCache = posCache;
        this.index = index;
      };
      NewClass.prototype.moveWhenGayNhuY = function(indexGayNhuY) {
        this.index < indexGayNhuY ? this.node.runAction(cc.moveBy(.2, 0, 65)) : this.node.runAction(cc.moveBy(.2, 0, -65));
      };
      NewClass.prototype.playAniTake = function() {
        var _this = this;
        Windown_1.Windown.NgoKhong.audio.playEffect(Windown_1.Windown.NgoKhong.audio.symWildSeparate, .6);
        this.nodeKhung.active = true;
        this.ske.node.active = true;
        this.ske.setAnimation(0, "animation", false);
        this.scheduleOnce(function() {
          Windown_1.Windown.NgoKhong.asset.putSymbolMutilWild(_this.node);
        }, .8);
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.fadeOut(.2)));
      };
      NewClass.prototype.effectShow = function() {
        this.ske.node.active = true;
        this.ske.setAnimation(0, "animation", false);
      };
      NewClass.prototype.isStopColum = function() {
        this.node.setPosition(this.posCache);
        this.isCanRemove = true;
      };
      NewClass.prototype.unuse = function() {
        this.node.stopAllActions();
        this.node.opacity = 255;
        this.itemColum = null;
        this.ske.node.active = false;
        this.nodeKhung.active = false;
        this.isCanRemove = false;
      };
      NewClass.prototype.update = function(dt) {
        if (!this.isCanRemove) return;
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var viewPos = this.itemColum.node.convertToNodeSpaceAR(worldPos);
        var yCheck = (this.itemColum.result.length + 2) * this.node.height / 2 * -1;
        viewPos.y <= yCheck && Windown_1.Windown.NgoKhong.asset.putSymbolMutilWild(this.node);
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "spWild", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "ske", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeKhung", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpWild", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], NewClass.prototype, "listSkedataWild", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ]
}, {}, [ "AssetNgoKhong", "AudioNgoKhong", "DetailHistoryNgoKhong", "EffectNgoKhong", "InfoBarControllerNgoKhong", "ItemDetalNgoKhong", "ItemKhung", "ItemLichSuNgoKhong", "ItemResultDetail", "ItemSlotNgoKhong", "LichSuNgoKhong", "NgoKhongView", "SpinNormalNgoKhong", "SymbolNgoKhong", "WildMutilSymbol" ]);