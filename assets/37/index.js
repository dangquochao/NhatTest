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
  AssetNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2a0aycXpZF67HeKt4IBOrH", "AssetNeko");
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
    var ItemMuitlNeko_1 = require("./ItemMuitlNeko");
    var SymbolNeko_1 = require("./SymbolNeko");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlasSymbol = null;
        _this.atlasSpecial = null;
        _this.listSkeData1 = [];
        _this.listSkeData2 = [];
        _this.itemSymbolNeko = null;
        _this.itemEffNearWin = null;
        _this.effectWinSymbol = [];
        _this.effectBkgShuffSymbol = null;
        _this.itemNearWinNoSap = null;
        _this.itemXu = null;
        _this.itemSymbolMutil = null;
        _this.itemAddScater = null;
        _this.itemShuffToWild = null;
        _this.itemShuffToNormal = null;
        _this.poolSymbol = new cc.NodePool(SymbolNeko_1.default);
        _this.poolAddScater = new cc.NodePool(SymbolNeko_1.default);
        _this.poolEffNearWin = new cc.NodePool();
        _this.poolBkgShuffSymbol = new cc.NodePool();
        _this.poolWinSymbol1 = new cc.NodePool();
        _this.poolWinSymbol2 = new cc.NodePool();
        _this.poolWinSymbol3 = new cc.NodePool();
        _this.poolWinSymbol4 = new cc.NodePool();
        _this.poolNearWinNoSap = new cc.NodePool();
        _this.poolXu = new cc.NodePool();
        _this.poolSymbolMutil = new cc.NodePool(ItemMuitlNeko_1.default);
        _this.poolShuffToWild = new cc.NodePool();
        _this.poolShuffToNormal = new cc.NodePool();
        return _this;
      }
      NewClass.prototype.getSymbol = function() {
        var node = null;
        node = this.poolSymbol.size() > 0 ? this.poolSymbol.get() : cc.instantiate(this.itemSymbolNeko);
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
        node.destroy();
      };
      NewClass.prototype.getBkgShuffSymbol = function() {
        var node = null;
        node = this.poolBkgShuffSymbol.size() > 0 ? this.poolBkgShuffSymbol.get() : cc.instantiate(this.effectBkgShuffSymbol);
        node.active = true;
        return node;
      };
      NewClass.prototype.putBkgShuffSymbol = function(node) {
        node.destroy();
      };
      NewClass.prototype.getWinSymbol = function(size) {
        var node = null;
        node = this["poolWinSymbol" + size].size() > 0 ? this["poolWinSymbol" + size].get() : cc.instantiate(this.effectWinSymbol[size - 1]);
        node.active = true;
        return node;
      };
      NewClass.prototype.putWinSymbol = function(node, size) {
        node.destroy();
      };
      NewClass.prototype.getNearWinNoSap = function() {
        var node = null;
        node = this.poolNearWinNoSap.size() > 0 ? this.poolNearWinNoSap.get() : cc.instantiate(this.itemNearWinNoSap);
        node.active = true;
        return node;
      };
      NewClass.prototype.putNearWinNoSap = function(node) {
        node.destroy();
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
      NewClass.prototype.getSymbolMutil = function() {
        var node = null;
        node = this.poolSymbolMutil.size() > 0 ? this.poolSymbolMutil.get() : cc.instantiate(this.itemSymbolMutil);
        node.getComponent(cc.ParticleSystem).stopSystem();
        node.active = true;
        return node;
      };
      NewClass.prototype.putSymbolMutil = function(node) {
        node.destroy();
      };
      NewClass.prototype.getAddScater = function() {
        var node = null;
        node = this.poolAddScater.size() > 0 ? this.poolAddScater.get() : cc.instantiate(this.itemAddScater);
        node.active = true;
        return node;
      };
      NewClass.prototype.putAddScater = function(node) {
        node.destroy();
      };
      NewClass.prototype.getShuffToWild = function() {
        var node = null;
        node = this.poolShuffToWild.size() > 0 ? this.poolShuffToWild.get() : cc.instantiate(this.itemShuffToWild);
        node.active = true;
        return node;
      };
      NewClass.prototype.putShuffToWild = function(node) {
        node.destroy();
      };
      NewClass.prototype.getShuffToNormal = function() {
        var node = null;
        node = this.poolShuffToNormal.size() > 0 ? this.poolShuffToNormal.get() : cc.instantiate(this.itemShuffToNormal);
        node.active = true;
        return node;
      };
      NewClass.prototype.putShuffToNormal = function(node) {
        node.destroy();
      };
      NewClass.prototype.onDestroy = function() {
        this.poolSymbol.clear();
        this.poolEffNearWin.clear();
        this.poolBkgShuffSymbol.clear();
        this.poolNearWinNoSap.clear();
        this.poolXu.clear();
        this.poolSymbolMutil.clear();
        this.poolWinSymbol1.clear();
        this.poolWinSymbol2.clear();
        this.poolWinSymbol3.clear();
        this.poolWinSymbol4.clear();
        this.poolAddScater.clear();
        this.poolShuffToWild.clear();
        this.poolShuffToNormal.clear();
      };
      __decorate([ property(cc.SpriteAtlas) ], NewClass.prototype, "atlasSymbol", void 0);
      __decorate([ property(cc.SpriteAtlas) ], NewClass.prototype, "atlasSpecial", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], NewClass.prototype, "listSkeData1", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], NewClass.prototype, "listSkeData2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemSymbolNeko", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemEffNearWin", void 0);
      __decorate([ property([ cc.Node ]) ], NewClass.prototype, "effectWinSymbol", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "effectBkgShuffSymbol", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemNearWinNoSap", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemXu", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemSymbolMutil", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemAddScater", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemShuffToWild", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemShuffToNormal", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./ItemMuitlNeko": "ItemMuitlNeko",
    "./SymbolNeko": "SymbolNeko"
  } ],
  AudioNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94dc6nejsBEiL1X3SDvynjz", "AudioNeko");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
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
        _this.fsWonRemainingIncrease = null;
        _this.fsWonTitle = null;
        _this.heartbeat = null;
        _this.heartbeatNoise = null;
        _this.heartbeatSlowdrop = null;
        _this.list_item_click = null;
        _this.menu_icon_press = null;
        _this.prizeInfobarTotalwin = null;
        _this.spinActiveLoop = null;
        _this.prizeInfobarTotalwinMedEnd = null;
        _this.prizeInfobarTotalwinMedMain = null;
        _this.prizePayoutHighlight = null;
        _this.prizePayoutHighlightStart = null;
        _this.prizeSmallwin = null;
        _this.prizeWinMultiplied = null;
        _this.scatterWinHighlight = null;
        _this.slider_effect = null;
        _this.spinBtn = null;
        _this.spinStop = null;
        _this.symCollapse = null;
        _this.symMultiFly = null;
        _this.symMultiFlyB = null;
        _this.symMultiReach = null;
        _this.symMultiReachB = null;
        _this.symMultiSpawn = null;
        _this.symRouletteEnd = null;
        _this.symRouletteRolling = null;
        _this.symRouletteStart = null;
        _this.symScatter = null;
        _this.symShrink = null;
        _this.symWild = null;
        _this.uiCollect = null;
        _this.takeSymTop = null;
        _this.uiInfo = null;
        _this.uiStart = null;
        _this.wallet_counting_above = null;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      NewClass.prototype.playMusic = function() {
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.6);
        }
      };
      NewClass.prototype.playIndexTakeLine = function() {};
      NewClass.prototype.playSmalWin = function() {};
      NewClass.prototype.playBkgfs = function() {
        this.stopMusic();
        this.playEffect(this.fsSpin);
        this.playEffect(this.bgm_fs, .6, true);
      };
      NewClass.prototype.stopBkgFs = function() {
        this.stopEffect(this.bgm_fs, true);
        this.playMusic();
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_bigwin_end", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_bigwin_end_coin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_bigwin_main", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_fs", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_mg", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_totalwin_end", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm_totalwin_main", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fastspinEnd", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fastspinStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "featureBuyBtn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "featureBuyCancel", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "featureBuyHover", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "featureBuyStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsIntro", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsSpin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsWonRemainingIncrease", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "fsWonTitle", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "heartbeat", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "heartbeatNoise", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "heartbeatSlowdrop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "list_item_click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "menu_icon_press", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeInfobarTotalwin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinActiveLoop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeInfobarTotalwinMedEnd", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeInfobarTotalwinMedMain", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizePayoutHighlight", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizePayoutHighlightStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeSmallwin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "prizeWinMultiplied", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scatterWinHighlight", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slider_effect", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinBtn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spinStop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symCollapse", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symMultiFly", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symMultiFlyB", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symMultiReach", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symMultiReachB", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symMultiSpawn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symRouletteEnd", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symRouletteRolling", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symRouletteStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symScatter", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symShrink", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "symWild", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "uiCollect", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "takeSymTop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "uiInfo", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "uiStart", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wallet_counting_above", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
  } ],
  DetailHistoryNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4bc1aZ4BYRFNpHJVnHewMbA", "DetailHistoryNeko");
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
    var ItemResultDetailNeko_1 = require("./ItemResultDetailNeko");
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
        var _this = this;
        this.node.active = true;
        this.node.x = 721.812;
        this.node.stopAllActions();
        this.node.opacity = 0;
        this.node.runAction(cc.spawn(cc.moveTo(.3, 0, 0), cc.fadeIn(.3).easing(cc.easeElasticIn(3))));
        var date = SFSObject.get("date");
        var jsonResult = SFSObject.get("infolog");
        var obj = JSON.parse(jsonResult);
        cc.log(jsonResult);
        this.isFreeSpin = obj.numFreeSpin > 0;
        0 == obj.agBet ? this.lbTitle.string = "Quay mi\u1ec5n ph\xed" : this.lbTitle.string = "Quay th\u01b0\u1eddng";
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM HH:mm:ss");
        this.lbBet.string = Windown_1.Windown.formatNumber(20 * obj.agBet);
        this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        this.lbMNUser.string = Windown_1.Windown.formatNumber(obj.agUser);
        this.lbCuocCoSo.string = Windown_1.Windown.formatNumber(obj.agBet);
        var listMutil = obj.bonusSpin;
        while (this.parentItem.childrenCount > 0) {
          var node = this.parentItem.children[0];
          node.removeFromParent();
          node.destroy();
        }
        obj.views.forEach(function(v, i) {
          var node = _this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(_this.itemTemplate);
            node.parent = _this.parentItem;
            node.active = true;
          }
          node.active = true;
          var cp = node.getComponent(ItemResultDetailNeko_1.default);
          if (obj.listItemWin[i]) {
            obj.listItemWin[i].lsIdItem = JSON.parse(obj.listItemWin[i].lsIdItem);
            obj.listItemWin[i].lsstack = JSON.parse(obj.listItemWin[i].lsstack);
            obj.listItemWin[i].lsAgWin = JSON.parse(obj.listItemWin[i].lsAgWin);
          }
          cp.init(v, obj.listItemWin[i], listMutil[i], obj.agBet);
        });
        for (var i = obj.views.length; i < this.parentItem.childrenCount; i++) this.parentItem.children[i].active = false;
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
    "./ItemResultDetailNeko": "ItemResultDetailNeko"
  } ],
  EffectNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5fdfFPSJJEL5gQOktwfGby", "EffectNeko");
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
    var EffectNeko = function(_super) {
      __extends(EffectNeko, _super);
      function EffectNeko() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.lb_Money = null;
        _this.nodeBigWin = null;
        _this.listNodeBoxMoney = [];
        _this.btnFast = null;
        _this.spineChangeView = null;
        _this.listPromiseIgro = [];
        _this.isClickBtnFast = false;
        _this.funNext = null;
        _this.funDelayOff = null;
        _this.mapColor = new Map();
        return _this;
      }
      EffectNeko.prototype.onLoad = function() {
        this.funNext = null;
        cc.find("BigWin/hoangQuang", this.node).runAction(cc.repeatForever(cc.rotateBy(1, 45)));
      };
      EffectNeko.prototype.onEnable = function() {};
      EffectNeko.prototype.onDisable = function() {
        this.unschedule(this.funDelayOff);
      };
      EffectNeko.prototype.initPosMask = function(pos) {
        cc.find("mask", this.node).y = pos;
      };
      EffectNeko.prototype.onClickBtnShowFast = function() {
        this.btnFast.interactable = false;
        this.isClickBtnFast = true;
        while (this.listPromiseIgro.length > 0) {
          var obj = this.listPromiseIgro.shift();
          obj.cancle(true);
        }
      };
      EffectNeko.prototype.showBigWin = function(moneyRevice, mutilRevice) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var time, objDelay1, parentXu, i, node, objDelay2, parentXu, i, node, objDelay2, sfsObj, e_1;
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
                this.nodeBigWin.getComponent(cc.Animation).play("ShowBig");
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.bgm_bigwin_main, 1);
                objDelay1 = Windown_1.Windown.Neko.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay1);
                return [ 4, objDelay1.prosime ];

               case 1:
                _a.sent();
                if (!(mutilRevice >= 30)) return [ 3, 3 ];
                parentXu = cc.find("BigWin/parentXu", this.node);
                for (i = 0; i < 50; i++) {
                  node = Windown_1.Windown.Neko.asset.getXu();
                  node.parent = parentXu;
                  node.zIndex = 10;
                  this.startXu(node, i % 3);
                }
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.bgm_bigwin_end, .5);
                this.nodeBigWin.getComponent(cc.Animation).play("ShowMega");
                if (!!this.isClickBtnFast) return [ 3, 3 ];
                objDelay2 = Windown_1.Windown.Neko.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                if (!(mutilRevice >= 50)) return [ 3, 5 ];
                parentXu = cc.find("BigWin/parentXu", this.node);
                for (i = 0; i < 50; i++) {
                  node = Windown_1.Windown.Neko.asset.getXu();
                  node.parent = parentXu;
                  node.zIndex = 10;
                  this.startXu(node, i % 3);
                }
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.bgm_bigwin_end, .5);
                this.nodeBigWin.getComponent(cc.Animation).play("ShowSuper");
                if (!!this.isClickBtnFast) return [ 3, 5 ];
                objDelay2 = Windown_1.Windown.Neko.getMakeDelay(4);
                this.listPromiseIgro.push(objDelay2);
                return [ 4, objDelay2.prosime ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.bgm_bigwin_main);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.bgm_bigwin_end);
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.Neko);
                sfsObj.putInt("mt", Windown_1.Windown.Neko.dataFinish.get("agWin"));
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "bw");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                this.lb_Money.setMoneyNoTime(moneyRevice);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(3).prosime ];

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
      EffectNeko.prototype.showTakeFreeSpin = function(numFree) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var pre, node, node2_1, node1, funOffShowTake_1, e_2;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 3, , 4 ]);
                Windown_1.Windown.Neko.stateSpin.freeSpinCache = numFree;
                Windown_1.Windown.Neko.stateSpin.activeAllSymbol();
                Windown_1.Windown.Neko.listColum.forEach(function(v) {
                  v.getListSymbol().forEach(function(v2) {
                    v2.effectScaterShowFS();
                  });
                });
                Windown_1.Windown.Neko.itemSlotNekoNgang.getListSymbol().forEach(function(v) {
                  v.effectScaterShowFS();
                });
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.scatterWinHighlight);
                this.showChangeViewEffect();
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(1.5).prosime ];

               case 1:
                _a.sent();
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.Neko.toString(), "Frefabs/ShowFreeSpin", cc.Prefab) ];

               case 2:
                pre = _a.sent();
                node = cc.instantiate(pre);
                node.parent = this.node;
                node.zIndex = 1;
                Windown_1.Windown.Neko.audio.playBkgfs();
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.fsIntro);
                node2_1 = cc.find("NodeContent", node);
                cc.find("lbCount", node2_1).getComponent(cc.Label).string = numFree;
                node2_1.opacity = 0;
                cc.find("Alats7-bl_vfx_a_screen_00", node).getComponent(cc.Animation).play("ShowTakeFs1");
                node1 = cc.find("Alats8-fs_vfx_c_add", node);
                node1.opacity = 0;
                funOffShowTake_1 = function() {
                  node2_1.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                    node2_1.destroy();
                  })));
                  _this.listNodeBoxMoney.forEach(function(v) {
                    v.y = -613;
                  });
                  resolve(null);
                };
                node1.runAction(cc.sequence(cc.fadeIn(.4), cc.callFunc(function() {
                  node2_1.runAction(cc.fadeIn(.3));
                  Windown_1.Windown.Neko.switchBkgGame(true);
                  var nodeHaoQuang = cc.find("Alats8-bl_vfx_d_screen", node2_1);
                  nodeHaoQuang.runAction(cc.scaleTo(3, 4));
                  var button = cc.find("Alats9-start_button", node2_1).getComponent(cc.Button);
                  button.node.opacity = 0;
                  button.node.runAction(cc.sequence(cc.fadeIn(1), cc.callFunc(function() {
                    button.node.once("click", funOffShowTake_1);
                  }), cc.delayTime(5), cc.callFunc(funOffShowTake_1)));
                }), cc.fadeOut(.5)));
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
      EffectNeko.prototype.showChangeViewEffect = function() {
        var _this = this;
        this.spineChangeView.node.active = true;
        this.spineChangeView.setAnimation(0, "BG", false);
        this.spineChangeView.setCompleteListener(function() {
          _this.spineChangeView.node.active = false;
        });
      };
      EffectNeko.prototype.showEndFree = function(totalMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listDelay_1, pre, node_1, parentXu_1, lbMoney, ani, sfsObj, btnThuThap, funClickThuThap, objDelay1, i, node_2, objDelay2, e_3;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 4, , 5 ]);
                if (totalMoney < 1) {
                  Windown_1.Windown.Neko.audio.stopBkgFs();
                  Windown_1.Windown.Neko.switchBkgGame(false);
                  this.listNodeBoxMoney.forEach(function(v) {
                    v.y = -415;
                  });
                  resolve(null);
                  return [ 2 ];
                }
                listDelay_1 = [];
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.Neko.toString(), "Frefabs/EndFreeSpin", cc.Prefab) ];

               case 1:
                pre = _a.sent();
                this.listNodeBoxMoney.forEach(function(v) {
                  v.y = -415;
                });
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.bgm_totalwin_main);
                Windown_1.Windown.Neko.switchBkgGame(false);
                node_1 = cc.instantiate(pre);
                node_1.parent = this.node;
                node_1.zIndex = 999;
                parentXu_1 = cc.find("ParentXu", node_1);
                lbMoney = node_1.getComponentInChildren(LbMoneyChange_1.default);
                lbMoney.resetLb();
                lbMoney.time = 4.3;
                lbMoney.setMoney(totalMoney);
                cc.find("lbCount", node_1).getComponent(cc.Label).string = Windown_1.Windown.Neko.stateSpin.freeSpinCache + "";
                ani = cc.find("Effect", node_1).getComponent(cc.Animation);
                ani.play("TakeMutilIB");
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.Neko);
                sfsObj.putInt("mt", totalMoney);
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "fs");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                btnThuThap = cc.find("collect", node_1);
                btnThuThap.active = false;
                btnThuThap.opacity = 0;
                funClickThuThap = function() {
                  _this.showChangeViewEffect();
                  node_1.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                    node_1.destroy();
                    while (parentXu_1.childrenCount > 0) Windown_1.Windown.Neko.asset.putXu(parentXu_1.children[0]);
                    resolve(null);
                    Windown_1.Windown.Neko.audio.stopBkgFs();
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
                objDelay1 = Windown_1.Windown.Neko.getMakeDelay(4.25);
                listDelay_1.push(objDelay1);
                return [ 4, objDelay1.prosime ];

               case 2:
                _a.sent();
                lbMoney.setMoneyNoTime(totalMoney);
                lbMoney.node.runAction(cc.sequence(cc.scaleTo(.3, 1.3), cc.scaleTo(.3, 1)));
                btnThuThap.active = true;
                btnThuThap.runAction(cc.fadeIn(.5));
                btnThuThap.once("click", funClickThuThap);
                for (i = 0; i < 100; i++) {
                  node_2 = Windown_1.Windown.Neko.asset.getXu();
                  node_2.parent = parentXu_1;
                  node_2.zIndex = 10;
                  this.startXu(node_2, i % 3);
                }
                Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.bgm_totalwin_main);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.bgm_totalwin_end);
                objDelay2 = Windown_1.Windown.Neko.getMakeDelay(6);
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
      EffectNeko.prototype.startXu = function(node, timeDelay) {
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
      EffectNeko.prototype.pointsOnCircle = function(_a) {
        var radius = _a.radius, angle = _a.angle, cx = _a.cx, cy = _a.cy;
        angle *= Math.PI / 180;
        var x = cx + radius * Math.sin(angle);
        var y = cy + radius * Math.cos(angle);
        return [ x, y ];
      };
      EffectNeko.prototype.resetView = function() {
        this.lb_Money.node.getComponent(LbMoneyChange_1.default).resetLb();
        this.lb_Money.node.active = false;
        this.node.opacity = 255;
        this.nodeBigWin.active = false;
      };
      EffectNeko.prototype.onClose = function() {
        var _this = this;
        this.btnFast.interactable = false;
        this.unschedule(this.funDelayOff);
        this.unschedule(this.onClose);
        var parentXu = cc.find("BigWin/parentXu", this.node);
        while (parentXu.childrenCount > 0) Windown_1.Windown.Neko.asset.putXu(parentXu.children[0]);
        this.funNext && this.funNext();
        this.funNext = null;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
          _this.resetView();
        })));
        this.isClickBtnFast = false;
      };
      __decorate([ property(cc.Node) ], EffectNeko.prototype, "nodeMask", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], EffectNeko.prototype, "lb_Money", void 0);
      __decorate([ property(cc.Node) ], EffectNeko.prototype, "nodeBigWin", void 0);
      __decorate([ property([ cc.Node ]) ], EffectNeko.prototype, "listNodeBoxMoney", void 0);
      __decorate([ property(cc.Button) ], EffectNeko.prototype, "btnFast", void 0);
      __decorate([ property(sp.Skeleton) ], EffectNeko.prototype, "spineChangeView", void 0);
      EffectNeko = __decorate([ ccclass ], EffectNeko);
      return EffectNeko;
    }(cc.Component);
    exports.default = EffectNeko;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  InfoBarControllerNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6da6FzsWlKZry/mV+px7vJ", "InfoBarControllerNeko");
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
        _this.spMaskInfoBar = [];
        _this.listMaskInfoBar = [];
        _this.parentOneMore = null;
        _this.parentContent = null;
        _this.parentMoney = null;
        _this.ani = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        this.parentContent.x = 360;
        this.parentContent.runAction(cc.repeatForever(cc.sequence(cc.moveTo(80, -5723.291, 4.555), cc.callFunc(function() {
          _this.parentContent.x = 272;
        }))));
        this.showRdContent();
        this.ani = this.getComponent(cc.Animation);
        cc.find("anhsang", this.node).active = false;
      };
      NewClass.prototype.showRdContent = function() {
        this.parentContent.active = true;
        this.parentOneMore.active = false;
        this.parentMoney.active = false;
      };
      NewClass.prototype.showOneMoreScater = function() {
        this.parentContent.active = false;
        this.parentOneMore.active = true;
        this.parentMoney.active = false;
        this.getComponent(cc.Animation).play("InfoBarOneMoreScater");
      };
      NewClass.prototype.showTakeMoney = function(money) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(r, j) {
              return __awaiter(_this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                  try {
                    cc.find("anhsang", this.node).active = true;
                    cc.find("ParrentMOney/info_win", this.node).active = false;
                    this.ani.play("StartTakeMoneyIb");
                    this.ani.once(cc.Animation.EventType.FINISHED, function() {
                      _this.ani.play("LoopLapLanhIB");
                    });
                    this.parentMoney.active = true;
                    this.parentMoney.stopAllActions();
                    this.parentMoney.scale = 0;
                    this.parentMoney.runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(r)));
                    this.parentContent.active = false;
                    this.parentOneMore.active = false;
                    this.lbMoney.setMoneyNoTime(money);
                    Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeSmallwin);
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
      NewClass.prototype.showTakeMoneyTurn = function(money) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(r, j) {
              return __awaiter(_this, void 0, void 0, function() {
                var moneyBet, mutilWin;
                var _this = this;
                return __generator(this, function(_a) {
                  try {
                    cc.find("ParrentMOney/info_win", this.node).active = true;
                    cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spWin;
                    cc.find("LapLanhIb", this.node).getComponent(cc.Sprite).spriteFrame = null;
                    this.parentContent.active = false;
                    this.parentOneMore.active = false;
                    this.parentMoney.active = true;
                    this.parentMoney.scale = 0;
                    this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3)));
                    Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeWinMultiplied);
                    this.lbMoney.setMoneyNoTime(money);
                    moneyBet = Windown_1.Windown.Neko.curRoomBet * Windown_1.Windown.Neko.totalLineBet;
                    mutilWin = money / moneyBet;
                    if (mutilWin < 5) {
                      this.spInfoBar.spriteFrame = this.listInfoBar[0];
                      this.spInfoBar.node.width = 656;
                      this.spMaskInfoBar.forEach(function(v) {
                        v.spriteFrame = _this.listMaskInfoBar[0];
                      });
                    } else if (mutilWin < 15) {
                      this.spInfoBar.spriteFrame = this.listInfoBar[1];
                      this.spInfoBar.node.width = 676;
                      this.spMaskInfoBar.forEach(function(v) {
                        v.spriteFrame = _this.listMaskInfoBar[1];
                      });
                    } else {
                      this.spInfoBar.spriteFrame = this.listInfoBar[2];
                      this.spInfoBar.node.width = 676;
                      this.spMaskInfoBar.forEach(function(v) {
                        v.spriteFrame = _this.listMaskInfoBar[2];
                      });
                    }
                    r(null);
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
      NewClass.prototype.reset = function() {
        var _this = this;
        this.spInfoBar.spriteFrame = this.listInfoBar[0];
        this.spInfoBar.node.width = 656;
        this.spMaskInfoBar.forEach(function(v) {
          v.spriteFrame = _this.listMaskInfoBar[0];
        });
        cc.find("anhsang", this.node).active = false;
        cc.find("LapLanhIb", this.node).getComponent(cc.Sprite).spriteFrame = null;
        this.ani.stop();
      };
      NewClass.prototype.showTotalMoney = function(money) {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyBet, mutilWin, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 10, , 11 ]);
                if (0 == money) {
                  r(null);
                  return [ 2 ];
                }
                this.lbMoney.resetLb();
                moneyBet = Windown_1.Windown.Neko.curRoomBet * Windown_1.Windown.Neko.totalLineBet;
                mutilWin = money / moneyBet;
                if (!(mutilWin < 5)) return [ 3, 3 ];
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                this.parentMoney.scale = 0;
                cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3)));
                this.spInfoBar.spriteFrame = this.listInfoBar[0];
                this.spInfoBar.node.width = 656;
                this.lbMoney.time = 1;
                this.lbMoney.setMoney(money);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.wallet_counting_above);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(1).prosime ];

               case 1:
                _a.sent();
                Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.wallet_counting_above);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeInfobarTotalwin);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(1).prosime ];

               case 2:
                _a.sent();
                return [ 3, 9 ];

               case 3:
                if (!(mutilWin < 10)) return [ 3, 6 ];
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeInfobarTotalwinMedMain);
                Windown_1.Windown.Neko.audio.playSmalWin();
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.spInfoBar.spriteFrame = this.listInfoBar[1];
                this.spInfoBar.node.width = 676;
                this.lbMoney.time = 2;
                this.lbMoney.setMoney(money);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.wallet_counting_above);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(2).prosime ];

               case 4:
                _a.sent();
                Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.wallet_counting_above);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeInfobarTotalwinMedEnd);
                this.parentMoney.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)));
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.3).prosime ];

               case 5:
                _a.sent();
                return [ 3, 9 ];

               case 6:
                return [ 4, Windown_1.Windown.Neko.effect.showBigWin(money, mutilWin) ];

               case 7:
                _a.sent();
                this.parentMoney.scale = 0;
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeInfobarTotalwin);
                this.parentContent.active = false;
                this.parentOneMore.active = false;
                this.parentMoney.active = true;
                cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin;
                this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3)));
                this.spInfoBar.spriteFrame = this.listInfoBar[2];
                this.spInfoBar.node.width = 676;
                this.lbMoney.time = 2;
                this.lbMoney.setMoney(money);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.wallet_counting_above);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(1).prosime ];

               case 8:
                _a.sent();
                Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.wallet_counting_above);
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.prizeInfobarTotalwinMedEnd);
                _a.label = 9;

               case 9:
                r(null);
                return [ 3, 11 ];

               case 10:
                e_1 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_1);
                return [ 3, 11 ];

               case 11:
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
      __decorate([ property([ cc.Sprite ]) ], NewClass.prototype, "spMaskInfoBar", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listMaskInfoBar", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentOneMore", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentContent", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentMoney", void 0);
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
  ItemDetalNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7743085i4RNu5hc6neJLqdT", "ItemDetalNeko");
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
  ItemLichSuNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eccfbG4bbtKPYUDoGBJWyhN", "ItemLichSuNeko");
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
          var moneyBet = this.data.get("bet");
          var moneyWin = this.data.get("agWin");
          this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM\nHH:mm:ss");
          this.lbBet.string = Windown_1.Windown.formatNumber(moneyBet * Windown_1.Windown.Neko.totalLineBet);
          this.lbWin.string = Windown_1.Windown.formatNumber(moneyWin);
        } catch (e) {
          console.error(e);
        }
      };
      NewClass.prototype.onClick = function() {
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("id", this.data.get("id"));
        console.log("id la: " + this.data.get("id"));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryChiTietNeko, obj, Windown_1.Windown.Neko.roomSFS);
        Windown_1.Windown.Neko.audio.playClick();
        Windown_1.Windown.UIManager.showLoading();
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
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ItemMuitlNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37d85kVet1J9q93Y52ziZ08", "ItemMuitlNeko");
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
      NewClass.prototype.onOffEffectMutil = function(isOn) {
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
      NewClass.prototype.moveToMultilLabel = function(index, pos, fun, target, isSaveMutil) {
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
      NewClass.prototype.startRun = function() {
        var _this = this;
        this.getComponent(cc.ParticleSystem).enabled = true;
        this.getComponent(cc.ParticleSystem).stopSystem();
        Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symMultiSpawn);
        this.node.children[1].stopAllActions();
        this.node.children[1].runAction(cc.sequence(cc.scaleTo(.4, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
          _this.getComponent(cc.ParticleSystem).resetSystem();
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
  ItemResultDetailNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fbffkE6NlBmJBRlomI6oKU", "ItemResultDetailNeko");
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
        _this.playTable = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 4, 4, 6, 6, 8, 10, 20, 30, 0, 0 ], [ 2, 2, 2, 6, 6, 10, 10, 15, 25, 25, 40, 0, 0 ], [ 3, 3, 3, 8, 8, 12, 12, 20, 30, 30, 50, 0, 0 ], [ 4, 4, 4, 10, 10, 15, 15, 30, 40, 50, 80, 0, 0 ] ];
        return _this;
      }
      NewClass.prototype.init = function(listResult, itemWin, mutil, moneyBet) {
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
      NewClass.prototype.getArrSf = function(result, size, khung) {
        var atlas = result < 12 ? Windown_1.Windown.Neko.asset.atlasSymbol : Windown_1.Windown.Neko.asset.atlasSpecial;
        var sizeTemp = result < 12 ? cc.misc.clampf(size, 1, 2) : size;
        var list = [ atlas.getSpriteFrame("bkg_" + result + "_" + size), 0 == khung ? null : atlas.getSpriteFrame("khung_" + khung + "_" + size), atlas.getSpriteFrame("item_" + result + "_" + sizeTemp) ];
        return list;
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
  ItemSlotNekoNgang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "913f8Kqu0FAzaCqD3ZIe5d8", "ItemSlotNekoNgang");
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
    var ItemSlotNeko_1 = require("./ItemSlotNeko");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(ItemSlotNeko_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./ItemSlotNeko": "ItemSlotNeko"
  } ],
  ItemSlotNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0553Jaoe9HqY8V5v7BXtYe", "ItemSlotNeko");
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
    var SymbolNeko_1 = require("./SymbolNeko");
    var TYPE_MOVE;
    (function(TYPE_MOVE) {
      TYPE_MOVE[TYPE_MOVE["NORMAL"] = 0] = "NORMAL";
      TYPE_MOVE[TYPE_MOVE["ADD_NEW"] = 1] = "ADD_NEW";
    })(TYPE_MOVE = exports.TYPE_MOVE || (exports.TYPE_MOVE = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemSlotNeko = function(_super) {
      __extends(ItemSlotNeko, _super);
      function ItemSlotNeko() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.sizeSymbol = 7;
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
        return _this;
      }
      ItemSlotNeko.prototype.onLoad = function() {};
      ItemSlotNeko.prototype.getListSymbol = function() {
        if (null == this.parentItem) return;
        var list = [];
        var child = this.parentItem.children;
        for (var _i = 0, child_1 = child; _i < child_1.length; _i++) {
          var node = child_1[_i];
          var cp = node.getComponent(SymbolNeko_1.default);
          cp && list.push(cp);
        }
        return list;
      };
      ItemSlotNeko.prototype.getListSymbolResult = function() {
        var list = [];
        var listItem = this.getListSymbol();
        this.result.forEach(function(v, k) {
          list.push(listItem[k + 1]);
        });
        return list;
      };
      ItemSlotNeko.prototype.setResultFirtGame = function() {
        var result = this.getListRandomResult();
        var resultCache = result.slice(1, result.length - 1);
        this.setResult(resultCache);
        var listChild = this.parentItem.children;
        for (var i = 0, l = this.sizeSymbol; i < l; i++) {
          var itemSymbol = listChild[i];
          if (null == itemSymbol) {
            itemSymbol = this.getSymbol();
            itemSymbol.parent = this.parentItem;
          }
          itemSymbol.setSiblingIndex(i);
          var cp = itemSymbol.getComponent(SymbolNeko_1.default);
          6 == this.sizeSymbol ? cp.isVectical = false : cp.isVectical = true;
          cp.setItemColum(this);
          cp.setResult(result[i]);
        }
        this.parentItem.sortAllChildren();
        this.emitNewList();
        this.getListSymbol().forEach(function(v) {
          return v.initPosStartGame();
        });
      };
      ItemSlotNeko.prototype.getListRandomResult = function() {
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
      ItemSlotNeko.prototype.activeNodeNearWin = function() {
        Windown_1.Windown.Neko.stateSpin.offAllSymbol();
        if (null == this.nodeEffNearWin) {
          this.nodeEffNearWin = Windown_1.Windown.Neko.asset.getNearWin();
          this.nodeEffNearWin.parent = Windown_1.Windown.Neko.parentEffect;
          this.nodeEffNearWin.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
        }
        this.nodeEffNearWin.opacity = 255;
        this.nodeEffNearWin.active = true;
        this.nodeEffNearWin.getComponent(cc.Animation).play("StartNearFS");
        this.activeAllSymbol();
        Windown_1.Windown.Neko.activeMask(true);
        Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.fastspinStart);
      };
      ItemSlotNeko.prototype.offNearWin = function() {
        var _this = this;
        if (this.nodeEffNearWin) {
          Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.fastspinEnd);
          this.nodeEffNearWin.stopAllActions();
          this.nodeEffNearWin.getComponent(cc.Animation).play("EndNearFS");
          this.nodeEffNearWin.getComponent(cc.Animation).once(cc.Animation.EventType.FINISHED, function() {
            _this.nodeEffNearWin.active = false;
          });
        }
      };
      ItemSlotNeko.prototype.setResult = function(listId) {
        this.result = listId;
        this.resultTemp = listId.slice();
        this.indexMaxWild = this.resultTemp.length;
      };
      ItemSlotNeko.prototype.emitNewList = function() {
        return;
        var list;
      };
      ItemSlotNeko.prototype.checkAndRemoveItem = function(idSymbol, lengStack) {
        var isCheck = false;
        var listSymbolTemp = this.getListSymbol().slice(1, this.result.length + 1);
        if (6 == this.sizeSymbol) {
          listSymbolTemp.reverse();
          listSymbolTemp = listSymbolTemp.slice(0, lengStack + 1);
        }
        6 == this.sizeSymbol && listSymbolTemp.reverse();
        for (var i = 0; i < listSymbolTemp.length; i++) if (listSymbolTemp[i].result - 1 == idSymbol || 12 == listSymbolTemp[i].result) {
          if (0 == listSymbolTemp[i].typeItem) {
            listSymbolTemp[i].removeItem();
            this.result[i] = null;
          } else listSymbolTemp[i].isShuff = true;
          isCheck = true;
        }
        if (isCheck) {
          this.parentItem.sortAllChildren();
          this.emitNewList();
          this.result = this.result.filter(function(v) {
            return null != v;
          });
        }
      };
      ItemSlotNeko.prototype.checkItemWin = function(idSymbol, lengthStack) {
        return __awaiter(this, void 0, void 0, function() {
          var list, listSymbolTemp, _i, listSymbolTemp_1, symbol, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 8, , 9 ]);
              list = this.getListSymbol();
              if (!(6 == this.sizeSymbol)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.Neko.getMakeDelay(.07).prosime ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 4, Windown_1.Windown.Neko.getMakeDelay(.07 * this.index).prosime ];

             case 3:
              _a.sent();
              listSymbolTemp = this.getListSymbol().slice(1, this.result.length + 1);
              if (6 == this.sizeSymbol) {
                listSymbolTemp.reverse();
                listSymbolTemp = listSymbolTemp.slice(0, lengthStack + 1);
              }
              _i = 0, listSymbolTemp_1 = listSymbolTemp;
              _a.label = 4;

             case 4:
              if (!(_i < listSymbolTemp_1.length)) return [ 3, 7 ];
              symbol = listSymbolTemp_1[_i];
              if (!(symbol.result - 1 == idSymbol || 12 == symbol.result)) return [ 3, 6 ];
              symbol.takeItem();
              if (!(6 == this.sizeSymbol)) return [ 3, 6 ];
              return [ 4, Windown_1.Windown.Neko.getMakeDelay(.07).prosime ];

             case 5:
              _a.sent();
              _a.label = 6;

             case 6:
              _i++;
              return [ 3, 4 ];

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
      ItemSlotNeko.prototype.addNewListSymbol = function(listResult) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var isShowNearWin, oldResult, lengNewSymbolAdd, listSymbol, lastSymbol, i, symbol, cp, listSymbolNew_1, listPro_1, lastIndexOf, cp, e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 4, , 5 ]);
                isShowNearWin = Windown_1.Windown.Neko.stateSpin.curentCountScater > 1;
                oldResult = this.result.slice();
                oldResult.reverse();
                this.setResult(listResult);
                lengNewSymbolAdd = this.result.length - oldResult.length;
                oldResult.length = this.result.length;
                oldResult.reverse();
                listSymbol = this.getListSymbol();
                lastSymbol = listSymbol[0];
                for (i = 0; i < lengNewSymbolAdd; i++) {
                  symbol = Windown_1.Windown.Neko.asset.getSymbol();
                  this.parentItem.addChild(symbol, 0);
                  symbol.setSiblingIndex(0);
                  cp = symbol.getComponent(SymbolNeko_1.default);
                  6 == this.sizeSymbol ? cp.isVectical = false : cp.isVectical = true;
                  cp.setItemColum(this);
                }
                this.parentItem.sortAllChildren();
                this.emitNewList();
                listSymbolNew_1 = this.getListSymbol();
                listPro_1 = [];
                listSymbolNew_1[0].setResult(this.getRandomResult());
                this.result.forEach(function(v, k) {
                  var symboll = listSymbolNew_1[k + 1];
                  var typeItemNew = v.getInt("typeItem");
                  var typeItemOld = symboll.typeItem;
                  typeItemNew != typeItemOld && symboll.isShuff ? listPro_1.push(symboll.actionRandomNewResultNextKhung(v.getInt("idItem"))) : symboll.setResult(v);
                });
                lastSymbol.node.y = lastSymbol.node.height / 2;
                lastIndexOf = lastSymbol.getIndexOf() - 1;
                while (lastIndexOf >= 0) {
                  cp = listSymbolNew_1[lastIndexOf];
                  cp.node.y = lastSymbol.node.y + lastSymbol.node.height / 2 + cp.node.height / 2;
                  lastSymbol = cp;
                  lastIndexOf--;
                }
                return [ 4, Promise.all(listPro_1) ];

               case 1:
                _a.sent();
                if (!(listPro_1.length < 1)) return [ 3, 3 ];
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.9).prosime ];

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
      ItemSlotNeko.prototype.getSymbol = function() {
        return Windown_1.Windown.Neko.asset.getSymbol();
      };
      ItemSlotNeko.prototype.checkIsNorSap = function() {
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
      ItemSlotNeko.prototype.moveAllSymbol = function(indexDelayScater) {
        var _this = this;
        return new Promise(function(re, je) {
          return __awaiter(_this, void 0, void 0, function() {
            var isShowNearWin, delay, listSymbolNew_2, listSymbolInView_1, firtSymbol, lastSymbol, posYTarget_1, _loop_1, i, l, totalSizeCurrent_1, sizeLeft, nodeNearWin_1, y, listPro_2, listSymboMove_1, posYTarget_2, e_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 10, , 11 ]);
                isShowNearWin = Windown_1.Windown.Neko.stateSpin.curentCountScater > 2 && !Windown_1.Windown.Neko.stateSpin.isMaxSpeed;
                delay = isShowNearWin || Windown_1.Windown.Neko.stateSpin.isMaxSpeed ? 0 : .05 * Windown_1.Windown.RandomNumber(0, 5);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.2 + delay).prosime ];

               case 1:
                _a.sent();
                listSymbolNew_2 = this.getListSymbol();
                listSymbolNew_2.forEach(function(v) {
                  v.activeItem();
                });
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
                      var action1 = cc.moveTo(.25, node.x, posYTarget_1).easing(cc.easeSineIn());
                      var action2 = cc.sequence(cc.moveBy(.059, 0, 18).easing(cc.easeSineOut()), cc.moveBy(.059, 0, -18).easing(cc.easeSineIn()), cc.callFunc(function() {
                        temp.effectSpawnSymbol();
                      }));
                      node.runAction(cc.sequence(action1, cc.callFunc(function() {
                        Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symCollapse, .6);
                      }), action2));
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
                if (!isShowNearWin) return [ 3, 8 ];
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.4).prosime ];

               case 2:
                _a.sent();
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.heartbeatNoise);
                Windown_1.Windown.Neko.stateSpin.offAllSymbol(false);
                listSymbolInView_1.forEach(function(v) {
                  v.effectNearWinScater();
                });
                if (!(sizeLeft > 0)) return [ 3, 5 ];
                nodeNearWin_1 = Windown_1.Windown.Neko.asset.getNearWinNoSap();
                nodeNearWin_1.parent = this.parentItem;
                nodeNearWin_1.height = firtSymbol ? sizeLeft * firtSymbol.size.height : sizeLeft * listSymbolNew_2[0].size.height;
                y = -nodeNearWin_1.height / 2;
                nodeNearWin_1.setPosition(cc.v2(0, y));
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(4.5).prosime ];

               case 3:
                _a.sent();
                Windown_1.Windown.Neko.stateSpin.activeAllSymbol();
                nodeNearWin_1.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                  nodeNearWin_1.opacity = 255;
                  Windown_1.Windown.Neko.asset.putNearWinNoSap(nodeNearWin_1);
                })));
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.3 + .5 * indexDelayScater).prosime ];

               case 4:
                _a.sent();
                return [ 3, 7 ];

               case 5:
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(3.5).prosime ];

               case 6:
                _a.sent();
                _a.label = 7;

               case 7:
                listSymbolInView_1.forEach(function(v) {
                  v.removeAddScater();
                });
                _a.label = 8;

               case 8:
                isShowNearWin && sizeLeft > 0 && !Windown_1.Windown.Neko.stateSpin.isMaxSpeed && Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.heartbeatSlowdrop);
                listPro_2 = [];
                listSymboMove_1 = listSymbolNew_2;
                posYTarget_2 = listSymbolNew_2[0].node.height / 2;
                listSymboMove_1.forEach(function(v, k) {
                  var cp = listSymbolNew_2[k];
                  var node = cp.node;
                  !listSymbolInView_1.includes(cp) && Math.abs(posYTarget_2 - node.y) > 1 && listPro_2.push(new Promise(function(re1, je) {
                    var action1 = cc.moveTo(.25, node.x, posYTarget_2).easing(cc.easeSineIn());
                    var action2 = cc.sequence(cc.moveBy(.059, 0, 18).easing(cc.easeSineOut()), cc.moveBy(.059, 0, -18).easing(cc.easeSineIn()), cc.callFunc(function() {
                      re1(null);
                      listSymbolNew_2[k].effectSpawnSymbol();
                    }));
                    node.runAction(cc.sequence(action1, cc.callFunc(function() {
                      Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symCollapse, .6);
                    }), action2));
                  }));
                  k < listSymboMove_1.length - 1 && (posYTarget_2 = posYTarget_2 - node.height / 2 - listSymbolNew_2[k + 1].node.height / 2);
                });
                return [ 4, Promise.all(listPro_2) ];

               case 9:
                _a.sent();
                this.reSetResultColum();
                re(null);
                return [ 3, 11 ];

               case 10:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 11 ];

               case 11:
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemSlotNeko.prototype.offAllSymbol = function(isOffScater) {
        this.getListSymbol().forEach(function(v) {
          (isOffScater || 13 != v.result) && v.offItem();
        });
      };
      ItemSlotNeko.prototype.activeAllSymbol = function() {
        this.getListSymbol().forEach(function(v) {
          v.activeItem();
        });
      };
      ItemSlotNeko.prototype.reset = function() {};
      ItemSlotNeko.prototype.runSpin = function() {
        this.stateWhel = StateReelSlot_1.default.RUN;
        this.getListSymbol().forEach(function(v) {
          v.runSpin();
        });
      };
      ItemSlotNeko.prototype.stopSpin = function(isScarter, result) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_4;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 6, , 7 ]);
                this.setResult(result);
                this.funReject = reject;
                this.isScater = isScarter;
                this.resolve = resolve;
                if (!!isScarter) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.07).prosime ];

               case 1:
                _a.sent();
                resolve(null);
                _a.label = 2;

               case 2:
                if (!isScarter) return [ 3, 4 ];
                this.activeNodeNearWin();
                this.runSlowDownActicon();
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(1.5).prosime ];

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
      ItemSlotNeko.prototype.recaculateSpeedSpin = function(isShowScater) {
        this.emitNewList();
        var list = this.getListSymbol();
        var posYSymbolFirt = list[0].node.y;
        var posYTarget = -this.node.height - list[0].node.height / 2;
        var s = Math.abs(posYTarget - posYSymbolFirt);
        var t = .28;
        isShowScater && (t = 2);
        list.forEach(function(v, k) {
          v.stopSpin(cc.moveBy(t, 0, -s));
        });
      };
      ItemSlotNeko.prototype.forceStopSpin = function() {};
      ItemSlotNeko.prototype.errSpin = function() {};
      ItemSlotNeko.prototype.reSetResultColum = function() {
        var list = this.getListSymbol();
        if (list.length > this.sizeSymbol) while (list.length > this.sizeSymbol) {
          Windown_1.Windown.Neko.asset.putSymbol(list[list.length - 1].node);
          list = this.getListSymbol();
        } else if (list.length < this.sizeSymbol) {
          for (var i = list.length; i < this.sizeSymbol; i++) {
            var symbol = this.getSymbol();
            this.parentItem.addChild(symbol);
            var cp = symbol.getComponent(SymbolNeko_1.default);
            6 == this.sizeSymbol ? cp.isVectical = false : cp.isVectical = true;
            cp.setItemColum(this);
          }
          list = this.getListSymbol();
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
      ItemSlotNeko.prototype.effStopSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            try {
              if (this.stateWhel == StateReelSlot_1.default.SHOW_EFFECT) return [ 2 ];
              this.stateWhel = StateReelSlot_1.default.SHOW_EFFECT;
              this.parentItem.sortAllChildren();
              this.parentItem.stopAllActions();
              this.emitNewList();
              this.parentItem.y = this.node.height / 2;
              this.reSetResultColum();
              if (this.sizeSymbol > 6) {
                Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.spinStop);
                this.index >= 1 && this.index <= 4 ? Windown_1.Windown.Neko.updateNewTotalLine(this.result.length + 1) : Windown_1.Windown.Neko.updateNewTotalLine(this.result.length);
              }
              this.isMoveSlowDown = false;
              this.isScater ? this.parentItem.runAction(cc.sequence(cc.moveBy(.15, 0, -30).easing(cc.easeSineOut()), cc.callFunc(this.offNearWin, this), cc.moveBy(.2, 0, 30).easing(cc.easeSineIn()), cc.callFunc(function() {
                _this.resolve && _this.resolve(null);
                _this.getListSymbolResult().forEach(function(v) {
                  v.effectSpawnSymbol();
                });
              }))) : this.parentItem.runAction(cc.sequence(cc.moveBy(.04, 0, -8).easing(cc.easeSineOut()), cc.moveBy(.04, 0, 8).easing(cc.easeSineIn()), cc.callFunc(function() {
                _this.getListSymbolResult().forEach(function(v) {
                  v.effectSpawnSymbol();
                });
              })));
            } catch (e) {
              Util_1.Util.ThrowErrProsime(e);
            }
            return [ 2 ];
          });
        });
      };
      ItemSlotNeko.prototype.getIdSymbolResult = function() {
        var objReturn = null;
        if (this.stateWhel == StateReelSlot_1.default.STOP) {
          var result = this.resultTemp.pop();
          return result || this.getRandomResult();
        }
        objReturn = this.getRandomResult();
        return objReturn;
      };
      ItemSlotNeko.prototype.checkLastSymbol = function(symbol) {
        var list = this.getListSymbol();
        return list[list.length - 1] == symbol;
      };
      ItemSlotNeko.prototype.getRandomResult = function(size) {
        0 != this.index && 5 != this.index || (size = 1);
        var objReturn = null;
        objReturn = ConectManager_1.ConectManager.getIns().getSFSObj();
        if (size) {
          objReturn.putInt("size", size);
          size > 1 ? objReturn.putInt("idItem", Windown_1.Windown.RandomNumber(0, 12)) : objReturn.putInt("idItem", Windown_1.Windown.RandomNumber(0, 13));
        } else {
          objReturn.putInt("idItem", Windown_1.Windown.RandomNumber(0, 13));
          if (objReturn.getInt("idItem") < 12) {
            var randomSize = Windown_1.Windown.RandomNumber(0, 100);
            objReturn.putInt("size", Windown_1.Windown.RandomNumber(1, 5));
          } else objReturn.putInt("size", 1);
        }
        1 == objReturn.getInt("size") || 11 == objReturn.getInt("idItem") ? objReturn.putInt("typeItem", 0) : objReturn.putInt("typeItem", Windown_1.Windown.RandomNumber(0, 3));
        return objReturn;
      };
      ItemSlotNeko.prototype.checkParentItem = function() {};
      ItemSlotNeko.prototype.runSlowDownActicon = function() {
        this.getListSymbol().forEach(function(v) {
          v.node.stopAllActions();
        });
        this.isMoveSlowDown = true;
        this.deltaSlowDown = 6e3;
      };
      ItemSlotNeko.prototype.update = function(dt) {
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
      __decorate([ property(cc.Node) ], ItemSlotNeko.prototype, "parentItem", void 0);
      __decorate([ property(cc.Integer) ], ItemSlotNeko.prototype, "sizeSymbol", void 0);
      ItemSlotNeko = __decorate([ ccclass ], ItemSlotNeko);
      return ItemSlotNeko;
    }(cc.Component);
    exports.default = ItemSlotNeko;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./SymbolNeko": "SymbolNeko"
  } ],
  LichSuNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e98b2OnyZlJu5cE9Fe+HpTm", "LichSuNeko");
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
    var DetailHistoryNeko_1 = require("./DetailHistoryNeko");
    var ItemLichSuNeko_1 = require("./ItemLichSuNeko");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuNeko = function(_super) {
      __extends(LichSuNeko, _super);
      function LichSuNeko() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.detail = null;
        _this.listData = null;
        _this.maxRow = 11;
        return _this;
      }
      LichSuNeko.prototype.show = function() {
        this.node.active = true;
        this.reset();
        this.node.y = -1280;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.3, 0, 0));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryNeko, null, Windown_1.Windown.Neko.roomSFS);
        Windown_1.Windown.UIManager.showLoading();
      };
      LichSuNeko.prototype.responseServer = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = sfsObj.getSFSArray("history");
        this.initWithListData(sfsArr);
      };
      LichSuNeko.prototype.responseServerChiTiet = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        this.showDetail(sfsObj);
      };
      LichSuNeko.prototype.initWithListData = function(listData) {
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
      LichSuNeko.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuNeko_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuNeko.prototype.showDetail = function(SFSObject) {
        console.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        this.detail.show(SFSObject);
      };
      LichSuNeko.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuNeko.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuNeko.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.Neko.audio.playClick();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(PageData_1.default) ], LichSuNeko.prototype, "pageDate", void 0);
      __decorate([ property(DetailHistoryNeko_1.default) ], LichSuNeko.prototype, "detail", void 0);
      LichSuNeko = __decorate([ ccclass ], LichSuNeko);
      return LichSuNeko;
    }(cc.Component);
    exports.default = LichSuNeko;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./DetailHistoryNeko": "DetailHistoryNeko",
    "./ItemLichSuNeko": "ItemLichSuNeko"
  } ],
  MutilControlNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85c6aRtCuBMGLLrllj6syLw", "MutilControlNeko");
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
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var ItemMuitlNeko_1 = require("./ItemMuitlNeko");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMultil = null;
        _this.nodeMultilFade = null;
        _this.itemBkgTake = null;
        _this.curentMutil = 0;
        _this.resolve = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.nodeMultilFade.opacity = 0;
      };
      NewClass.prototype.take = function(re, isSaveMutil) {
        var scaleBig = 1.4;
        var scaleNormal = 1.2;
        var yItemBkg = 120;
        if (isSaveMutil) {
          scaleBig = .9;
          scaleNormal = .8;
          yItemBkg = -286;
        }
        this.curentMutil += 2;
        this.nodeMultil.stopAllActions();
        this.nodeMultil.runAction(cc.fadeIn(.1));
        this.nodeMultil.runAction(cc.sequence(cc.scaleTo(.1, scaleBig).easing(cc.easeSineOut()), cc.scaleTo(.2, scaleNormal).easing(cc.easeSineIn()), cc.callFunc(function() {
          re && re(null);
        })));
        var item = cc.instantiate(this.itemBkgTake);
        item.active = true;
        item.y = yItemBkg;
        this.node.addChild(item, cc.macro.MIN_ZINDEX);
        this.node.sortAllChildren();
        var node1 = item.children[0];
        var node2 = item.children[1];
        node1.runAction(cc.fadeIn(.2));
        node1.runAction(cc.sequence(cc.scaleTo(.1, scaleBig).easing(cc.easeSineOut()), cc.scaleTo(.2, scaleNormal).easing(cc.easeSineIn()), cc.fadeOut(.1)));
        node2.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 4 * scaleBig), cc.sequence(cc.delayTime(.2), cc.fadeOut(.2))), cc.callFunc(function() {
          item.destroy();
        })));
        this.nodeMultil.getComponentInChildren(cc.Label).string = "x" + this.curentMutil.toString();
        this.nodeMultilFade.getComponentInChildren(cc.Label).string = "x" + this.curentMutil.toString();
      };
      NewClass.prototype.getListMeoMutil = function() {
        var listMeo = [];
        Windown_1.Windown.Neko.itemSlotNekoNgang.getListSymbol().forEach(function(v) {
          v.nodeMutil && v.nodeMutil.parent && listMeo.push(v.nodeMutil);
        });
        Windown_1.Windown.Neko.listColum.forEach(function(v) {
          v.getListSymbol().forEach(function(v2) {
            v2.nodeMutil && v2.nodeMutil.parent && listMeo.push(v2.nodeMutil);
          });
        });
        return listMeo;
      };
      NewClass.prototype.checkTakeMultil = function(isSaveMutil) {
        var _this = this;
        return new Promise(function(re, je) {
          return __awaiter(_this, void 0, void 0, function() {
            var listMeo, listPro, i, l, v, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 6, , 7 ]);
                this.resolve = re;
                listMeo = this.getListMeoMutil();
                if (listMeo.length < 1) {
                  re(null);
                  return [ 2 ];
                }
                if (!isSaveMutil) return [ 3, 1 ];
                return [ 3, 4 ];

               case 1:
                if (!(this.curentMutil > 0)) return [ 3, 3 ];
                this.nodeMultil.stopAllActions();
                this.nodeMultil.runAction(cc.spawn(cc.moveTo(.5, 0, 170), cc.scaleTo(.5, 1.2)));
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.5).prosime ];

               case 2:
                _a.sent();
                return [ 3, 4 ];

               case 3:
                if (0 == this.curentMutil) {
                  this.nodeMultil.setPosition(0, 170);
                  this.nodeMultil.opacity = 0;
                }
                _a.label = 4;

               case 4:
                listPro = [];
                for (i = 0, l = listMeo.length; i < l; i++) {
                  v = listMeo[i];
                  i == l - 1 ? listPro.push(v.getComponent(ItemMuitlNeko_1.default).moveToMultilLabel(i, this.nodeMultil.getPosition(), this.take, this, isSaveMutil)) : v.getComponent(ItemMuitlNeko_1.default).moveToMultilLabel(i, this.nodeMultil.getPosition(), this.take, this, isSaveMutil);
                }
                return [ 4, Promise.race(listPro) ];

               case 5:
                _a.sent();
                re(null);
                return [ 3, 7 ];

               case 6:
                e_1 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_1);
                return [ 3, 7 ];

               case 7:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.startFreeSpin = function() {
        this.curentMutil = 2;
        this.nodeMultil.getComponentInChildren(cc.Label).string = "x" + this.curentMutil.toString();
        this.nodeMultilFade.getComponentInChildren(cc.Label).string = "x" + this.curentMutil.toString();
        this.nodeMultil.opacity = 255;
      };
      NewClass.prototype.endTakeMultil = function() {
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
      NewClass.prototype.resetForNextSpin = function() {
        if (Windown_1.Windown.Neko.stateSpin.freeSpinLeft < 1) {
          this.nodeMultil.stopAllActions();
          this.nodeMultil.runAction(cc.fadeOut(.3));
          this.curentMutil = 0;
        }
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMultil", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMultilFade", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemBkgTake", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./ItemMuitlNeko": "ItemMuitlNeko"
  } ],
  NekoView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c975d9n7ddPl6yKHMEl/zaH", "NekoView");
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
    var AssetNeko_1 = require("./AssetNeko");
    var AudioNeko_1 = require("./AudioNeko");
    var EffectNeko_1 = require("./EffectNeko");
    var InfoBarControllerNeko_1 = require("./InfoBarControllerNeko");
    var ItemSlotNeko_1 = require("./ItemSlotNeko");
    var ItemSlotNekoNgang_1 = require("./ItemSlotNekoNgang");
    var LichSuNeko_1 = require("./LichSuNeko");
    var MutilControlNeko_1 = require("./MutilControlNeko");
    var SpinNormalNeko_1 = require("./SpinNormalNeko");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.asset = null;
        _this.bkgSprite = null;
        _this.itemSlotNekoNgang = null;
        _this.parentItem = null;
        _this.parentEffect = null;
        _this.nodeLine = null;
        _this.effect = null;
        _this.labelChipReviceInBox = null;
        _this.lb_totalBet = null;
        _this.lb_FSLeft = null;
        _this.lb_TotalLine = null;
        _this.lb_CountAuto = null;
        _this.infoBar = null;
        _this.muitlCtr = null;
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
        _this.stateSpin = null;
        _this.makeDelay = null;
        _this.currentTotalLine = 1;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.Neko = this;
        this.makeDelay = new MakeDelay_1.default(this);
        cc.log("start dieu thuyen");
        this.gameType = GAME_TYPE_1.default.Neko;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        this.setupView();
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.stateSpin = new SpinNormalNeko_1.default();
        this.sendJoinRoom();
        this.activeMask(false);
      };
      NewClass.prototype.sendJoinRoom = function() {
        cc.log("send creat room");
        try {
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("NekoExtension", "ext.Room.SlotNeko.SlotGameView");
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 1;
          roomSeting.groupId = "Neko";
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
        if ("Neko" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            cc.director.loadScene("main");
            return;
          }
        }
      };
      NewClass.prototype.onCreateError = function(event) {
        Windown_1.Windown.UIManager.hideLoading();
        cc.director.loadScene("main");
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      NewClass.prototype.onJoinRoom = function(event) {
        var room = event.room;
        if ("Neko" == room.groupId) {
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
          cc.log("ListBet=", list);
          this.curRoomBet = this.listConfigBet[0].bet;
          this.lb_totalBet.string = Windown_1.Windown.formatNumber(this.totalLineBet * this.curRoomBet);
        }
      };
      NewClass.prototype.switchBkgGame = function(isFs) {
        var nodeBkgFs = cc.find("Game/BkgGround/FreeSpin", this.node);
        nodeBkgFs.active = false;
        Windown_1.Windown.Neko.lb_FSLeft.node.parent.active = false;
        if (isFs) {
          nodeBkgFs.active = true;
          var nodeHaoQuang = cc.find("Alats8-fs_vfx_c_add", nodeBkgFs);
          nodeHaoQuang.stopAllActions();
          this.muitlCtr.startFreeSpin();
          nodeHaoQuang.runAction(cc.repeatForever(cc.rotateBy(1, 30)));
          Windown_1.Windown.Neko.lb_FSLeft.node.parent.active = true;
        }
      };
      NewClass.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      NewClass.prototype.activeMask = function(isActive) {};
      NewClass.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.SpinNeko:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          this.handleFinish(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryNeko:
          this.popupLichSu.responseServer(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryChiTietNeko:
          this.popupLichSu.responseServerChiTiet(SFSObject);
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
        this.listResult = data.get("views");
        var listBonus = data.getIntArray("bonusSpin");
        this.listResultConvert = this.convertResult(this.listResult, JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("listItemWin"))), listBonus);
        var delta = this.stateSpin.isMaxSpeed ? 10 : .5;
        this.scheduleOnce(function() {
          _this.stateReel = StateReelSlot_1.default.CAN_STOP;
          var time = _this.stateSpin.isMaxSpeed ? .2 : .5;
          _this.scheduleOnce(_this.funEnd = function() {
            _this.stateSpin.onEnd();
          }, time);
        }, .4 / delta);
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.Neko = null;
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
                return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.Neko.toString()) ];

               case 1:
                bundle = _a.sent();
                bundle.loadDir("Spine", function(err, asset) {});
                return [ 2 ];
              }
            });
          });
        }, 3);
      };
      NewClass.prototype.initItem = function() {
        var itemTemplate = cc.instantiate(this.parentItem.children[0]);
        var width = itemTemplate.width;
        var lengtItem = 6;
        for (var i = 0; i < lengtItem; i++) {
          var node = this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          var cpItem = node.getComponent(ItemSlotNeko_1.default);
          this.listColum.push(cpItem);
          cpItem.index = i;
          cpItem.setResultFirtGame();
          cpItem.node.x = width * i + width / 2 - lengtItem * width / 2;
          cpItem.node.y = 0;
        }
        this.itemSlotNekoNgang.index = 0;
        this.itemSlotNekoNgang.setResultFirtGame();
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
      NewClass.prototype.sendClickSpin = function() {
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("testSpin", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          cc.log("send test ne");
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinNeko, sfsObj, this.roomSFS);
      };
      NewClass.prototype.onClickBtnSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 4, , 5 ]);
              if (!(this.stateReel == StateReelSlot_1.default.WAITING)) return [ 3, 2 ];
              this.audio.playEffect(this.audio.spinBtn);
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
              if (this.stateReel == StateReelSlot_1.default.CAN_STOP) ; else if (this.stateReel == StateReelSlot_1.default.STOP) ; else if (this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
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
      NewClass.prototype.updateNewTotalLine = function(length) {
        this.currentTotalLine *= length;
        this.lb_TotalLine.string = this.currentTotalLine.toString();
      };
      NewClass.prototype.resetForNewGame = function() {
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.setStateEffBtnSpin();
      };
      NewClass.prototype.resetLbTotalLine = function() {
        this.currentTotalLine = 1;
        this.lb_TotalLine.string = ". . .";
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
          cc.log("play anim");
          ani.play("BtnSpin");
          nodeRotateBlur.active = true;
          nodeRotateBlur.stopAllActions();
          nodeRotateBlur.runAction(cc.repeatForever(cc.rotateBy(.3, -360)));
          nodeRotate.active = false;
          this.infoBar.showRdContent();
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
        dataSet.putUtfString("arr", '[[{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":0},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":12}],\n            [{"size":3,"typeItem":1,"idItem":0},{"size":2,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":12}],\n            [{"size":1,"typeItem":0,"idItem":0},{"size":2,"typeItem":1,"idItem":4},{"size":1,"typeItem":0,"idItem":0},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":12}],\n            [{"size":1,"typeItem":0,"idItem":4},{"size":3,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":12}],\n            [{"size":4,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":12}],\n            [{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":0},{"size":1,"typeItem":0,"idItem":8},{"size":1,"typeItem":0,"idItem":2}]]');
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
            dataSet.putUtfString("arr", '[[{"size":1,"typeItem":0,"idItem":4},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":1},{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":1}],[{"size":1,"typeItem":0,"idItem":12},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":0}],[{"size":1,"typeItem":0,"idItem":8},{"size":3,"typeItem":1,"idItem":2},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":2}],[{"size":3,"typeItem":1,"idItem":0},{"size":1,"typeItem":0,"idItem":6},{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":9}],[{"size":1,"typeItem":0,"idItem":12},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":2},{"size":1,"typeItem":0,"idItem":9},{"size":1,"typeItem":0,"idItem":3}],[{"size":1,"typeItem":0,"idItem":7},{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":5},{"size":1,"typeItem":0,"idItem":3},{"size":1,"typeItem":0,"idItem":7}]]');
            this.sfsObjTest = dataSet;
            this.onClickBtnSpin();
            return [ 2 ];
          });
        });
      };
      NewClass.prototype.onClickResetCountAuto = function() {
        this.stateSpin.countAutoSpin = 0;
        this.lb_CountAuto.node.parent.active = false;
        Windown_1.Windown.Neko.audio.playClick();
      };
      NewClass.prototype.onClickItemAutoSpin = function(event, data) {
        Windown_1.Windown.Neko.audio.playClick();
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
        Windown_1.Windown.Neko.stateSpin.countAutoSpin > 0 && Windown_1.Windown.Neko.setCountAuto(Windown_1.Windown.Neko.stateSpin.countAutoSpin);
      };
      NewClass.prototype.onClickShowListAuto = function() {
        Windown_1.Windown.Neko.audio.playClick();
        this.nodeChooseAuto.active = true;
        this.nodeChooseAuto.opacity = 0;
        this.nodeChooseAuto.runAction(cc.fadeIn(.3));
        this.btnStartAuto.interactable = false;
        this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#945F00");
      };
      NewClass.prototype.onClickCloseListAuto = function() {
        var _this = this;
        Windown_1.Windown.Neko.audio.playClick();
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
      NewClass.prototype.convertResult = function(listResult, listItemWin, listBonus) {
        var _this = this;
        var listReturn = [];
        Windown_1.Windown.foreachSFSArray(listResult, function(v, k) {
          var itemResult = Object.create(null);
          itemResult.listSFSObj = [];
          itemResult.listSFSObjNgang = [];
          itemResult.mutil = cc.misc.clampf(listBonus[k], 1, 9999999);
          itemResult.agWin = 0;
          Windown_1.Windown.foreachSFSArray(v, function(v1, k1) {
            var arrTemp = [];
            Windown_1.Windown.foreachSFSArray(v1, function(v2, k2) {
              k2 == v1.size() - 1 && k1 > 0 && k1 < 5 ? itemResult.listSFSObjNgang.push(v2) : arrTemp.push(v2);
            });
            arrTemp.reverse();
            itemResult.listSFSObj.push(arrTemp);
            if (k1 == v.size() - 1) {
              var itemWin = listItemWin.shift();
              if (itemWin) {
                itemWin.lsIdItem = JSON.parse(itemWin.lsIdItem);
                itemWin.lsstack = JSON.parse(itemWin.lsstack);
                itemWin.lsAgWin = JSON.parse(itemWin.lsAgWin);
                if (itemWin.lsAgWin.length > 0) {
                  itemResult.listItemWin = itemWin;
                  itemResult.isNoSap = true;
                }
                itemWin.lsAgWin.forEach(function(v) {
                  itemResult.agWin += v;
                });
              }
            }
          });
          itemResult.countScater = _this.getCountScater(itemResult.listSFSObj, itemResult.listSFSObjNgang);
          itemResult.listSFSObjNgang.reverse();
          listReturn.push(itemResult);
        });
        return listReturn;
      };
      NewClass.prototype.setResult = function() {};
      NewClass.prototype.getListActiveScaster = function(listResult, listResultObjNgang) {
        var list = [];
        var countScaster = 0;
        listResultObjNgang.forEach(function(v) {
          12 == v.getInt("idItem") && countScaster++;
        });
        for (var i = 0; i < listResult.length; i++) {
          countScaster > 2 ? list.push(true) : list.push(false);
          listResult[i].forEach(function(v) {
            12 == v.getInt("idItem") && countScaster++;
          });
        }
        return list;
      };
      NewClass.prototype.onClickChangeBet = function(event, data) {
        Windown_1.Windown.Neko.audio.playClick();
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
        Windown_1.Windown.Neko.audio.playClick();
        this.cachChoi.active = true;
        this.cachChoi.opacity = 0;
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.fadeIn(.3));
      };
      NewClass.prototype.onCloseCachChoi = function() {
        var _this = this;
        Windown_1.Windown.Neko.audio.playClick();
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          _this.cachChoi.active = false;
        })));
      };
      NewClass.prototype.onClickBackToLobby = function() {
        Windown_1.Windown.Neko.audio.playClick();
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      NewClass.prototype.onClickMusic = function() {
        Windown_1.Windown.Neko.audio.playClick();
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
        Windown_1.Windown.Neko.audio.playClick();
        var isCheck = this.toggleTurbo.isChecked;
        this.stateSpin.isMaxSpeed = isCheck;
        isCheck ? Windown_1.Windown.UIManager.showAlertMini("\u0110\xe3 B\u1eacT quay nhanh") : Windown_1.Windown.UIManager.showAlertMini("\u0110\xe3 T\u1eaeT quay nhanh");
      };
      NewClass.prototype.onClickSeting = function() {
        Windown_1.Windown.Neko.audio.playClick();
        cc.log("click onClickSeting");
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
      NewClass.prototype.getCountScater = function(listResult, listResultNgang) {
        var count = 0;
        listResult.forEach(function(v) {
          v.forEach(function(j) {
            12 == j.getInt("idItem") && count++;
          });
        });
        listResultNgang.forEach(function(v) {
          12 == v.getInt("idItem") && count++;
        });
        return count;
      };
      NewClass.prototype.getMakeDelay = function(time) {
        return this.makeDelay.getDelay(time);
      };
      NewClass.prototype.activeAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = true;
          v.node.children.forEach(function(child, index) {
            child.color = cc.Color.fromHEX(new cc.Color(), "#FFD500");
            "BtnFast" == v.node.name && (1 == index ? child.children[0].color = cc.Color.fromHEX(new cc.Color(), "#756200") : 2 == index && (child.children[0].color = cc.Color.fromHEX(new cc.Color(), "#FFD500")));
          });
        });
      };
      NewClass.prototype.offAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = false;
          v.node.children.forEach(function(child, index) {
            child.color = cc.Color.fromHEX(new cc.Color(), "#999999");
            "BtnFast" != v.node.name || 1 != index && 2 != index || (child.children[0].color = cc.Color.fromHEX(new cc.Color(), "#999999"));
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
      };
      NewClass.prototype.onClickLichSu = function() {
        Windown_1.Windown.Neko.audio.playClick();
        this.popupLichSu.show();
      };
      NewClass.prototype.update = function(dt) {};
      __decorate([ property(AssetNeko_1.default) ], NewClass.prototype, "asset", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgSprite", void 0);
      __decorate([ property(ItemSlotNekoNgang_1.default) ], NewClass.prototype, "itemSlotNekoNgang", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentEffect", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeLine", void 0);
      __decorate([ property(EffectNeko_1.default) ], NewClass.prototype, "effect", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "labelChipReviceInBox", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_totalBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_FSLeft", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_TotalLine", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_CountAuto", void 0);
      __decorate([ property(InfoBarControllerNeko_1.default) ], NewClass.prototype, "infoBar", void 0);
      __decorate([ property(MutilControlNeko_1.default) ], NewClass.prototype, "muitlCtr", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeChooseAuto", void 0);
      __decorate([ property(LichSuNeko_1.default) ], NewClass.prototype, "popupLichSu", void 0);
      __decorate([ property(AudioNeko_1.default) ], NewClass.prototype, "audio", void 0);
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
    "./AssetNeko": "AssetNeko",
    "./AudioNeko": "AudioNeko",
    "./EffectNeko": "EffectNeko",
    "./InfoBarControllerNeko": "InfoBarControllerNeko",
    "./ItemSlotNeko": "ItemSlotNeko",
    "./ItemSlotNekoNgang": "ItemSlotNekoNgang",
    "./LichSuNeko": "LichSuNeko",
    "./MutilControlNeko": "MutilControlNeko",
    "./SpinNormalNeko": "SpinNormalNeko"
  } ],
  SpinNormalNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b668c7It9NP8rK/57B/PrDE", "SpinNormalNeko");
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
    var SpinNormalNeko = function() {
      function SpinNormalNeko() {
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
        this.itemNekoNang = null;
        this.listColum = Windown_1.Windown.Neko.listColum;
        this.itemNekoNang = Windown_1.Windown.Neko.itemSlotNekoNgang;
        this.effect = Windown_1.Windown.Neko.effect;
      }
      SpinNormalNeko.prototype.onStart = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var i, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 7, , 8 ]);
                this.removeAllMutilAdded();
                this.itemNekoNang.runSpin();
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < this.listColum.length)) return [ 3, 4 ];
                this.listColum[i].runSpin();
                if (!!this.isMaxSpeed) return [ 3, 3 ];
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.025).prosime ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                if (!this.isMaxSpeed) return [ 3, 6 ];
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.1).prosime ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
                Windown_1.Windown.Neko.audio.playEffect(Windown_1.Windown.Neko.audio.spinActiveLoop, .5, true);
                resolve(null);
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
      SpinNormalNeko.prototype.onEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, listSc, count, listProsime, _i, _a, temp, e_2;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 13, , 14 ]);
              listResult = Windown_1.Windown.Neko.listResultConvert;
              listSc = Windown_1.Windown.Neko.getListActiveScaster(listResult[0].listSFSObj, listResult[0].listSFSObjNgang);
              count = 0;
              listProsime = [];
              this.itemNekoNang.stopSpin(false, listResult[0].listSFSObjNgang);
              if (!!this.isMaxSpeed) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.Neko.getMakeDelay(.3).prosime ];

             case 1:
              _b.sent();
              _b.label = 2;

             case 2:
              Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.spinActiveLoop);
              _i = 0, _a = this.listColum;
              _b.label = 3;

             case 3:
              if (!(_i < _a.length)) return [ 3, 8 ];
              temp = _a[_i];
              if (!!this.isMaxSpeed) return [ 3, 5 ];
              return [ 4, temp.stopSpin(listSc[count], listResult[0].listSFSObj[count]) ];

             case 4:
              _b.sent();
              return [ 3, 6 ];

             case 5:
              listProsime.push(temp.stopSpin(listSc[count], listResult[0].listSFSObj[count]));
              _b.label = 6;

             case 6:
              count++;
              _b.label = 7;

             case 7:
              _i++;
              return [ 3, 3 ];

             case 8:
              if (!this.isMaxSpeed) return [ 3, 11 ];
              return [ 4, Promise.all(listProsime) ];

             case 9:
              _b.sent();
              return [ 4, Windown_1.Windown.Neko.getMakeDelay(.25).prosime ];

             case 10:
              _b.sent();
              _b.label = 11;

             case 11:
              return [ 4, Windown_1.Windown.Neko.getMakeDelay(.5).prosime ];

             case 12:
              _b.sent();
              this.handleStopAllColum();
              return [ 3, 14 ];

             case 13:
              e_2 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_2);
              return [ 3, 14 ];

             case 14:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalNeko.prototype.handleErrSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _i, _a, temp, e_3;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 6, , 7 ]);
              Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.spinActiveLoop);
              this.itemNekoNang.stopSpin(false, this.itemNekoNang.result);
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
              Windown_1.Windown.Neko.resetForNewGame();
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
      SpinNormalNeko.prototype.handleStopAllColum = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listResult, i, l, itemResult, e_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 14, , 15 ]);
              Windown_1.Windown.Neko.stateReel = StateReelSlot_1.default.STOP;
              Windown_1.Windown.Neko.setStateEffBtnSpin();
              listResult = Windown_1.Windown.Neko.listResultConvert;
              this.itemNekoNang.getListSymbolResult().forEach(function(v) {
                return v.removeAddScater();
              });
              this.listColum.forEach(function(v) {
                v.getListSymbolResult().forEach(function(Symbol) {
                  Symbol.removeAddScater();
                });
              });
              this.activeAllSymbol();
              i = 0, l = listResult.length;
              _a.label = 1;

             case 1:
              if (!(i < l)) return [ 3, 9 ];
              itemResult = listResult[i];
              this.curentCountScater = itemResult.countScater;
              if (!itemResult.listItemWin) return [ 3, 8 ];
              return [ 4, this.checkAndShowLineAn(itemResult.listItemWin, itemResult.agWin) ];

             case 2:
              _a.sent();
              return [ 4, this.checkAndShowMutilMeo() ];

             case 3:
              _a.sent();
              return [ 4, this.caculateMutilMoney() ];

             case 4:
              _a.sent();
              return [ 4, Windown_1.Windown.Neko.infoBar.showTakeMoneyTurn(itemResult.agWin * itemResult.mutil) ];

             case 5:
              _a.sent();
              this.checkAndRemoveSymbol(itemResult.listItemWin);
              if (!itemResult.isNoSap) return [ 3, 8 ];
              return [ 4, this.addNewSymbol(listResult[i + 1]) ];

             case 6:
              _a.sent();
              return [ 4, this.moveAllSymbol() ];

             case 7:
              _a.sent();
              _a.label = 8;

             case 8:
              i++;
              return [ 3, 1 ];

             case 9:
              return [ 4, this.showMoneyTotalRevice() ];

             case 10:
              _a.sent();
              return [ 4, this.checkAndShowEffect() ];

             case 11:
              _a.sent();
              if (!(this.freeSpinLeft > 0 && !Windown_1.Windown.Neko.dataFinish.getBool("Scarter4"))) return [ 3, 13 ];
              return [ 4, this.checkAndShowMutilMeo(true) ];

             case 12:
              _a.sent();
              _a.label = 13;

             case 13:
              this.resetForNextNextSpin();
              return [ 3, 15 ];

             case 14:
              e_4 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_4);
              return [ 3, 15 ];

             case 15:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormalNeko.prototype.removeAllMutilAdded = function() {
        var _this = this;
        return new Promise(function(re, je) {
          Windown_1.Windown.Neko.resetLbTotalLine();
          Windown_1.Windown.Neko.muitlCtr.resetForNextSpin();
          _this.listColum.forEach(function(v) {
            v.getListSymbol().forEach(function(symbol) {
              symbol.removeMutilWhenSpin();
            });
          });
          _this.itemNekoNang.getListSymbol().forEach(function(symbol) {
            symbol.removeMutilWhenSpin();
          });
          re(null);
        });
      };
      SpinNormalNeko.prototype.checkAndRemoveSymbol = function(itemWin) {
        var listId = itemWin.lsIdItem;
        var listStack = itemWin.lsstack;
        for (var i = 0, l = listId.length; i < l; i++) {
          this.itemNekoNang.checkAndRemoveItem(listId[i], listStack[i]);
          for (var j = 0; j < listStack[i] + 1; j++) {
            var itemColum = this.listColum[j];
            itemColum.checkAndRemoveItem(listId[i], null);
          }
        }
      };
      SpinNormalNeko.prototype.addNewSymbol = function(itemResult) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var listPro, temp, e_5;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                listPro = [];
                listPro.push(this.itemNekoNang.addNewListSymbol(itemResult.listSFSObjNgang));
                for (temp in this.listColum) listPro.push(this.listColum[temp].addNewListSymbol(itemResult.listSFSObj[temp]));
                return [ 4, Promise.all(listPro) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_5 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_5);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNeko.prototype.moveAllSymbol = function() {
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
                listPro.push(this.itemNekoNang.moveAllSymbol(count));
                this.itemNekoNang.checkIsNorSap() && count++;
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
      SpinNormalNeko.prototype.checkAndShowMutilMeo = function(isSaveMutil) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_7;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, Windown_1.Windown.Neko.muitlCtr.checkTakeMultil(isSaveMutil) ];

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
      SpinNormalNeko.prototype.caculateMutilMoney = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_8;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, Windown_1.Windown.Neko.muitlCtr.endTakeMultil() ];

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
      SpinNormalNeko.prototype.offAllSymbol = function(isOffScater) {
        void 0 === isOffScater && (isOffScater = true);
        if (!this.isMaxSpeed) {
          this.listColum.forEach(function(v) {
            v.offAllSymbol(isOffScater);
          });
          this.itemNekoNang.offAllSymbol(isOffScater);
        }
        Windown_1.Windown.Neko.activeMask(true);
      };
      SpinNormalNeko.prototype.activeAllSymbol = function() {
        if (!this.isMaxSpeed) {
          this.listColum.forEach(function(v) {
            v.activeAllSymbol();
          });
          this.itemNekoNang.activeAllSymbol();
        }
        Windown_1.Windown.Neko.activeMask(false);
      };
      SpinNormalNeko.prototype.checkAndShowLineAn = function(itemWin, moneyWin) {
        var _this = this;
        this.offAllSymbol();
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var totalMoney, listId, listStack, listMoney, i, l, j, itemColum, e_9;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 3, , 4 ]);
                totalMoney = 0;
                listId = itemWin.lsIdItem;
                listStack = itemWin.lsstack;
                listMoney = itemWin.lsAgWin;
                Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.prizePayoutHighlightStart);
                for (i = 0, l = listId.length; i < l; i++) {
                  this.itemNekoNang.checkItemWin(listId[i], listStack[i]);
                  for (j = 0; j < listStack[i] + 1; j++) {
                    itemColum = this.listColum[j];
                    itemColum.checkItemWin(listId[i], null);
                  }
                  totalMoney += listMoney[i];
                }
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.5).prosime ];

               case 1:
                _a.sent();
                return [ 4, Windown_1.Windown.Neko.infoBar.showTakeMoney(moneyWin) ];

               case 2:
                _a.sent();
                resolve(null);
                return [ 3, 4 ];

               case 3:
                e_9 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_9);
                return [ 3, 4 ];

               case 4:
                return [ 2 ];
              }
            });
          });
        });
      };
      SpinNormalNeko.prototype.resetForNextNextSpin = function() {
        var _this = this;
        cc.log("reset nor nex");
        this.itemNekoNang.getListSymbolResult().forEach(function(v) {
          return v.removeAddScater(true);
        });
        this.listColum.forEach(function(v) {
          v.getListSymbolResult().forEach(function(Symbol) {
            Symbol.removeAddScater(true);
          });
        });
        Windown_1.Windown.Neko.resetForNewGame();
        this.freeSpinLeft > 0 ? Windown_1.Windown.Neko.scheduleOnce(function() {
          Windown_1.Windown.Neko.setLbFreeSpinLeft(_this.freeSpinLeft - 1);
          Windown_1.Windown.Neko.onClickBtnSpin();
        }, .5) : this.countAutoSpin > 0 ? Windown_1.Windown.Neko.scheduleOnce(function() {
          _this.countAutoSpin--;
          Windown_1.Windown.Neko.setCountAuto(_this.countAutoSpin);
          Windown_1.Windown.Neko.onClickBtnSpin();
        }, .5) : Windown_1.Windown.Neko.activeAllBtn();
      };
      SpinNormalNeko.prototype.checkAndShowEffect = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var isFree3, numFs, e_10;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                isFree3 = Windown_1.Windown.Neko.dataFinish.getBool("Scarter4");
                numFs = Windown_1.Windown.Neko.dataFinish.get("numFreeSpin");
                this.freeSpinLeft = numFs;
                if (!isFree3 && this.lastFreeSpinLeft < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                if (!isFree3) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.Neko.effect.showTakeFreeSpin(numFs) ];

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
      SpinNormalNeko.prototype.showMoneyTotalRevice = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyTotal, e_11;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                moneyTotal = Windown_1.Windown.Neko.dataFinish.get("agWin");
                this.lastFreeSpinLeft > 0 && (this.moneyTotalFs += moneyTotal);
                Windown_1.Windown.Neko.activeMask(false);
                this.listColum.forEach(function(v) {
                  v.activeAllSymbol();
                });
                if (moneyTotal < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                return [ 4, Windown_1.Windown.Neko.infoBar.showTotalMoney(moneyTotal) ];

               case 1:
                _a.sent();
                Windown_1.Windown.Neko.showMoneyAllWin(moneyTotal);
                cc.log("chay vao end show total money");
                resolve(null);
                return [ 3, 3 ];

               case 2:
                e_11 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_11);
                return [ 3, 3 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        });
      };
      return SpinNormalNeko;
    }();
    exports.default = SpinNormalNeko;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  SymbolNeko: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0deabLHIONANZHTW2mzAwP2", "SymbolNeko");
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
    exports.TYPE_ITEM = void 0;
    var BUNDLE_1 = require("../../../Scritps/DefineTs/BUNDLE");
    var StateReelSlot_1 = require("../../../Scritps/DefineTs/StateReelSlot");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var ItemMuitlNeko_1 = require("./ItemMuitlNeko");
    var ItemSlotNeko_1 = require("./ItemSlotNeko");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TYPE_ITEM;
    (function(TYPE_ITEM) {
      TYPE_ITEM[TYPE_ITEM["NONE"] = 0] = "NONE";
      TYPE_ITEM[TYPE_ITEM["BAC"] = 1] = "BAC";
      TYPE_ITEM[TYPE_ITEM["VANG"] = 2] = "VANG";
    })(TYPE_ITEM = exports.TYPE_ITEM || (exports.TYPE_ITEM = {}));
    var SymbolNeko = function(_super) {
      __extends(SymbolNeko, _super);
      function SymbolNeko() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spriteBkg = null;
        _this.spriteKhung = null;
        _this.skeletonItem = null;
        _this.parentMutil = null;
        _this.isVectical = true;
        _this.nodeScater = null;
        _this.sizeBkg = new cc.Size(122, 105);
        _this.size = new cc.Size(127, 103);
        _this.itemColum = null;
        _this.result = -1;
        _this.objSFS = null;
        _this.typeItem = TYPE_ITEM.NONE;
        _this.sizeItem = 0;
        _this.canRun = false;
        _this.efWin = null;
        _this.nodeMutil = null;
        _this.lastPos = null;
        _this.isShuff = false;
        _this.isShowEffectSpawn = false;
        return _this;
      }
      SymbolNeko.prototype.setItemColum = function(itemColum) {
        this.itemColum = itemColum;
        if (this.isVectical) {
          this.node.angle = 0;
          this.size.height = 103;
        } else {
          this.size.height = 120;
          this.node.angle = 90;
        }
      };
      SymbolNeko.prototype.setResult = function(result) {
        if (null == result) return;
        this.objSFS = result;
        this.result = result.getInt("idItem") + 1;
        this.typeItem = result.getInt("typeItem");
        this.sizeItem = result.getInt("size");
        this.setSize();
        this.skeletonItem.node.active = false;
        this.itemColum.stateWhel == StateReelSlot_1.default.RUN ? this.setImgResult(true) : this.setImgResult(false);
        this.setNewStateMutil();
        this.isShuff = false;
        this.isShowEffectSpawn = false;
      };
      SymbolNeko.prototype.setNewStateMutil = function() {
        11 != this.result || this.isShowEffectSpawn || null != this.nodeMutil ? this.parentMutil.active = false : this.parentMutil.active = true;
        this.parentMutil.active && (this.parentMutil.y = -this.node.height / 2 + this.parentMutil.height / 2 + 18);
      };
      SymbolNeko.prototype.setSize = function() {
        this.spriteBkg.node.height = this.sizeBkg.height * this.sizeItem;
        this.spriteKhung.node.height = this.sizeBkg.height * this.sizeItem;
        this.node.height = this.size.height * this.sizeItem;
      };
      SymbolNeko.prototype.setImgResult = function(isBlur) {
        this.sprite.spriteFrame = this.getSpItem(isBlur);
        this.spriteBkg.spriteFrame = this.getSpBkg(isBlur);
        this.spriteKhung.spriteFrame = this.getSpKhung(isBlur);
        if (isBlur) {
          this.sprite.node.scale = 1.4;
          this.spriteKhung.node.scale = 1.1;
          this.spriteBkg.node.scale = 1.1;
        } else {
          this.sprite.node.scale = .7;
          this.spriteBkg.node.scale = 1;
          this.spriteKhung.node.scale = 1;
        }
        12 == this.result || 13 == this.result ? this.skeletonItem.node.scale = .7 : this.skeletonItem.node.scale = .77;
        12 == this.result && 1 == this.sizeItem ? this.skeletonItem.node.y = -7.4 : this.skeletonItem.node.y = 0;
      };
      SymbolNeko.prototype.getSpKhung = function(isBlur) {
        if (this.sizeItem == TYPE_ITEM.NONE) return null;
        return isBlur ? this.getAtlas().getSpriteFrame("khung_" + this.typeItem + "_" + this.sizeItem + "_blur") : this.getAtlas().getSpriteFrame("khung_" + this.typeItem + "_" + this.sizeItem);
      };
      SymbolNeko.prototype.getSpBkg = function(isBlur) {
        return isBlur ? this.getAtlas().getSpriteFrame("bkg_" + this.result + "_" + this.sizeItem + "_blur") : this.getAtlas().getSpriteFrame("bkg_" + this.result + "_" + this.sizeItem);
      };
      SymbolNeko.prototype.getSpBkgShuff = function(isBlur) {
        return this.getAtlas().getSpriteFrame("bkg_" + this.result + "_" + this.sizeItem);
      };
      SymbolNeko.prototype.getSpItem = function(isBlur) {
        var size = this.sizeItem;
        this.result < 12 && (size = cc.misc.clampf(this.sizeItem, 1, 2));
        return isBlur ? this.getAtlas().getSpriteFrame("item_" + this.result + "_" + size + "_blur") : this.getAtlas().getSpriteFrame("item_" + this.result + "_" + size);
      };
      SymbolNeko.prototype.getAtlas = function() {
        return this.result < 12 ? Windown_1.Windown.Neko.asset.atlasSymbol : Windown_1.Windown.Neko.asset.atlasSpecial;
      };
      SymbolNeko.prototype.getSpin = function() {
        var str = this.convertNameSpineById() + this.convertNameSizeSpine();
        13 == this.result && cc.log("str: " + str);
        return Windown_1.Windown.loadRes(BUNDLE_1.BUNDLE.Neko, "Spine/" + str, sp.SkeletonData);
      };
      SymbolNeko.prototype.getIndexOf = function() {
        return this.itemColum.getListSymbol().indexOf(this);
      };
      SymbolNeko.prototype.convertNameSpineById = function() {
        switch (this.result) {
         case 1:
          return "l_10";

         case 2:
          return "l_j";

         case 3:
          return "l_q";

         case 4:
          return "l_k";

         case 5:
          return "l_a";

         case 6:
          return "h_sushi";

         case 7:
          return "h_f_sushi";

         case 8:
          return "h_fan";

         case 9:
          return "h_lantern";

         case 10:
          return "h_drum";

         case 11:
          return "h_neko";

         case 12:
          return "s_wild";

         case 13:
          return "s_scatter";
        }
      };
      SymbolNeko.prototype.convertNameSize = function() {
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
      SymbolNeko.prototype.convertNameSizeSpine = function() {
        switch (this.sizeItem) {
         case 1:
          return "_a_atlas_symbols";

         case 2:
          return "_b_atlas_symbols";

         case 3:
          return 11 == this.result ? "_cd_atlas_symbols" : 12 == this.result ? "_c_atlas_symbols" : "_b_atlas_symbols";

         case 4:
          return 11 == this.result ? "_cd_atlas_symbols" : 12 == this.result ? "_d_atlas_symbols" : "_b_atlas_symbols";
        }
      };
      SymbolNeko.prototype.removeAddScater = function(isDestroy) {
        if (null == this.nodeScater) return;
        if (isDestroy) {
          this.nodeScater && Windown_1.Windown.Neko.asset.putAddScater(this.nodeScater);
          this.nodeScater = null;
        } else this.nodeScater.active = false;
      };
      SymbolNeko.prototype.effectScaterShowFS = function() {
        if (13 == this.result && this.checkIsInView() && this.nodeScater) {
          this.nodeScater.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
          this.nodeScater.active = true;
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.sequence(cc.scaleTo(.3, 1.4), cc.delayTime(1)));
        }
      };
      SymbolNeko.prototype.effectNearWinScater = function() {
        if (13 == this.result && this.nodeScater) {
          this.nodeScater.active = true;
          this.nodeScater.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
          this.nodeScater.stopAllActions();
          this.nodeScater.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
            Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.heartbeat);
          }), cc.repeat(cc.sequence(cc.scaleTo(.25, 1.2), cc.scaleTo(.15, 1)), 2), cc.delayTime(.5)), 3));
        }
      };
      SymbolNeko.prototype.checkIsInView = function() {
        return this.node.y < 0 && this.node.y > -this.size.height * (this.itemColum.sizeSymbol - 2);
      };
      SymbolNeko.prototype.offItem = function() {
        this.node.children.forEach(function(v) {
          v.stopActionByTag(999);
          cc.tween(v).to(.3, {
            color: cc.Color.GRAY
          }).tag(999).start();
        });
      };
      SymbolNeko.prototype.activeItem = function(time) {
        void 0 === time && (time = .3);
        this.node.children.forEach(function(v) {
          v.stopActionByTag(999);
          cc.tween(v).to(time, {
            color: cc.Color.WHITE
          }).tag(999).start();
        });
      };
      SymbolNeko.prototype.runSpin = function() {
        var actionLoop = cc.repeatForever(cc.moveBy(1, 0, -2500));
        this.node.stopAllActions();
        this.node.runAction(actionLoop);
        this.canRun = true;
      };
      SymbolNeko.prototype.stopSpin = function(action) {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(action, cc.callFunc(function() {
          _this.itemColum.effStopSpin();
        })));
      };
      SymbolNeko.prototype.initPosStartGame = function() {
        var index = this.getIndexOf();
        var lastSymbol = this.itemColum.getListSymbol()[index - 1];
        var posLastSymboy = null === lastSymbol || void 0 === lastSymbol ? void 0 : lastSymbol.node.y;
        var targetPosY = null;
        targetPosY = lastSymbol ? posLastSymboy - this.node.height / 2 - lastSymbol.node.height / 2 : this.node.height / 2;
        this.node.y = targetPosY;
      };
      SymbolNeko.prototype.moveWhenListChange = function(type, timeDelay, funCall) {
        void 0 === timeDelay && (timeDelay = 0);
        void 0 === funCall && (funCall = null);
        var index = this.getIndexOf();
        var preSymbol = this.itemColum.getListSymbol()[index + 1];
        var posLastSymboy = preSymbol.node.y;
        var targetPosY = null;
        if (type == ItemSlotNeko_1.TYPE_MOVE.NORMAL) {
          targetPosY = posLastSymboy + this.node.height / 2 + preSymbol.node.height / 2;
          this.node.y = targetPosY;
        }
      };
      SymbolNeko.prototype.takeItem = function() {
        return __awaiter(this, void 0, void 0, function() {
          var timeDelay, nodeWildIdle, skedata, e_1, anim, e_2;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 5, , 6 ]);
              6 == this.itemColum.sizeSymbol ? Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.takeSymTop) : Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.prizePayoutHighlight);
              timeDelay = 1.4;
              nodeWildIdle = Windown_1.Windown.Neko.asset.getWinSymbol(this.sizeItem);
              nodeWildIdle.parent = Windown_1.Windown.Neko.parentEffect;
              nodeWildIdle.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
              skedata = null;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, this.getSpin() ];

             case 2:
              skedata = _a.sent();
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              cc.error(e_1);
              return [ 3, 4 ];

             case 4:
              this.removeEfWin();
              if (nodeWildIdle) {
                anim = nodeWildIdle.getComponent(cc.Animation);
                anim.play("TakeItem" + this.sizeItem);
                this.activeItem(0);
                this.efWin = nodeWildIdle;
                this.sprite.node.opacity = 0;
                if (skedata && this.skeletonItem.node) {
                  this.skeletonItem.node.active = true;
                  this.skeletonItem.skeletonData = skedata;
                  this.skeletonItem.setAnimation(0, "win", false);
                  this.skeletonItem.setCompleteListener(function() {
                    _this.skeletonItem.setCompleteListener(null);
                    _this.skeletonItem.node.active = false;
                    _this.sprite.node.opacity = 255;
                  });
                }
              }
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
      };
      SymbolNeko.prototype.removeEfWin = function() {
        if (this.efWin) {
          var ani = this.efWin.getComponent(cc.Animation);
          ani.targetOff(ani);
          ani.stop();
          Windown_1.Windown.Neko.asset.putWinSymbol(this.efWin, this.sizeItem);
        }
        this.efWin = null;
      };
      SymbolNeko.prototype.removeItem = function() {
        var _this = this;
        this.node.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, this.itemColum.node));
        this.node.parent = this.itemColum.node;
        this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          Windown_1.Windown.Neko.asset.putSymbol(_this.node);
        })));
        if (this.efWin) {
          var anim = this.efWin.getComponent(cc.Animation);
          anim.play("EndTakeItem" + this.sizeItem);
          anim.once(cc.Animation.EventType.FINISHED, function() {
            _this.removeEfWin();
          });
        }
      };
      SymbolNeko.prototype.actionRandomNewResultNextKhung = function(newResult) {
        var _this = this;
        return new Promise(function(re, je) {
          return __awaiter(_this, void 0, void 0, function() {
            var targetSY, nodeShuffToWild_1, ani, bkgShuff, i, rd, scale, nodeShuf_1, i, l, cirle, e_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 10, , 11 ]);
                this.isShowEffectSpawn = false;
                this.typeItem++;
                this.typeItem = this.typeItem % 3;
                this.spriteKhung.spriteFrame = this.getSpKhung(false);
                this.removeEfWin();
                Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symRouletteStart);
                if (!(11 == newResult)) return [ 3, 1 ];
                this.skeletonItem.node.active = false;
                this.sprite.node.opacity = 255;
                this.result = newResult + 1;
                this.sprite.spriteFrame = this.getSpItem(false);
                this.spriteBkg.spriteFrame = this.getSpBkg(false);
                targetSY = this.sprite.node.scale;
                this.sprite.node.scale = 0;
                this.sprite.node.stopAllActions();
                this.sprite.node.runAction(cc.sequence(cc.scaleTo(.8, targetSY).easing(cc.easeElasticOut(.3)), cc.callFunc(re)));
                nodeShuffToWild_1 = Windown_1.Windown.Neko.asset.getShuffToWild();
                nodeShuffToWild_1.parent = Windown_1.Windown.Neko.parentEffect;
                nodeShuffToWild_1.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
                ani = nodeShuffToWild_1.getComponent(cc.Animation);
                2 == this.sizeItem ? ani.play("ShuffToWild2") : ani.play("ShuffToWild4");
                ani.once(cc.Animation.EventType.FINISHED, function() {
                  Windown_1.Windown.Neko.asset.putShuffToWild(nodeShuffToWild_1);
                });
                return [ 3, 9 ];

               case 1:
                if (!!Windown_1.Windown.Neko.stateSpin.isMaxSpeed) return [ 3, 6 ];
                this.spriteBkg.node.active = false;
                bkgShuff = Windown_1.Windown.Neko.asset.getBkgShuffSymbol();
                this.node.addChild(bkgShuff, cc.macro.MIN_ZINDEX);
                bkgShuff.setContentSize(this.spriteBkg.node.getContentSize());
                bkgShuff.getComponent(cc.Animation).play("Shuff" + this.sizeItem);
                i = 0;
                _a.label = 2;

               case 2:
                if (!(i < 10)) return [ 3, 5 ];
                rd = Windown_1.Windown.RandomNumber(1, 12);
                while (this.result == rd) rd = Windown_1.Windown.RandomNumber(1, 12);
                Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symRouletteRolling);
                this.result = rd;
                1;
                this.sprite.spriteFrame = this.getSpItem(false);
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.09).prosime ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i++;
                return [ 3, 2 ];

               case 5:
                Windown_1.Windown.Neko.asset.putBkgShuffSymbol(bkgShuff);
                _a.label = 6;

               case 6:
                this.spriteBkg.node.active = true;
                Windown_1.Windown.Neko.audio.stopEffect(Windown_1.Windown.Neko.audio.symRouletteRolling);
                this.result = newResult + 1;
                this.sprite.spriteFrame = this.getSpItem(false);
                this.spriteBkg.spriteFrame = this.getSpBkg(false);
                Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symRouletteEnd);
                this.sprite.node.stopAllActions();
                scale = this.sprite.node.scale;
                this.setNewStateMutil();
                nodeShuf_1 = Windown_1.Windown.Neko.asset.getShuffToNormal();
                nodeShuf_1.parent = Windown_1.Windown.Neko.parentEffect;
                nodeShuf_1.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
                nodeShuf_1.height = this.sizeBkg.height * this.sizeItem;
                for (i = 1, l = nodeShuf_1.children.length; i < l; i++) nodeShuf_1.children[i].active = false;
                nodeShuf_1.children[this.sizeItem - 1].active = true;
                cirle = nodeShuf_1.children[0];
                cirle.stopAllActions();
                cirle.scale = 0;
                cirle.runAction(cc.sequence(cc.scaleTo(.4, 1.7 * (this.sizeItem - 1)), cc.callFunc(function() {
                  Windown_1.Windown.Neko.asset.putShuffToNormal(nodeShuf_1);
                })));
                this.sprite.node.runAction(cc.sequence(cc.scaleTo(.1, scale + .2), cc.scaleTo(.1, scale)));
                if (!Windown_1.Windown.Neko.stateSpin.isMaxSpeed) return [ 3, 8 ];
                return [ 4, Windown_1.Windown.Neko.getMakeDelay(.4) ];

               case 7:
                _a.sent();
                _a.label = 8;

               case 8:
                re(null);
                _a.label = 9;

               case 9:
                return [ 3, 11 ];

               case 10:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 11 ];

               case 11:
                return [ 2 ];
              }
            });
          });
        });
      };
      SymbolNeko.prototype.removeMutilWhenSpin = function() {
        if (this.nodeMutil) {
          Windown_1.Windown.Neko.asset.putSymbolMutil(this.nodeMutil);
          this.parentMutil.active = true;
        }
        this.nodeMutil = null;
        this.removeEfWin();
      };
      SymbolNeko.prototype.effectSpawnSymbol = function() {
        return __awaiter(this, void 0, void 0, function() {
          var nodeAddScater, anim, nodeHaoQuang, nodeVong_1, skedata, e_4, parent, e_5;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 8, , 9 ]);
              if (!cc.isValid(this.node, true)) return [ 2 ];
              if (this.isShowEffectSpawn || !this.checkIsInView()) return [ 2 ];
              if (!(13 == this.result)) return [ 3, 1 ];
              Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symScatter);
              this.isShowEffectSpawn = true;
              if (this.nodeScater) return [ 2 ];
              nodeAddScater = Windown_1.Windown.Neko.asset.getAddScater();
              nodeAddScater.parent = Windown_1.Windown.Neko.parentEffect;
              nodeAddScater.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.node, Windown_1.Windown.Neko.parentEffect));
              this.nodeScater = nodeAddScater;
              anim = nodeAddScater.getComponent(cc.Animation);
              anim.play("AddScater");
              anim.playAdditive("AddScaterLoop");
              this.nodeScater.stopAllActions();
              this.nodeScater.runAction(cc.sequence(cc.scaleTo(.3, 1.2).easing(cc.easeSineOut()), cc.scaleTo(.3, 1).easing(cc.easeSineIn())));
              nodeHaoQuang = cc.find("Alats8-fs_vfx_c_add", nodeAddScater);
              nodeHaoQuang.stopAllActions();
              nodeHaoQuang.runAction(cc.repeatForever(cc.rotateBy(1, 30)));
              nodeVong_1 = cc.find("Alats8-mh_vfx_01_add", nodeAddScater);
              nodeVong_1.stopAllActions();
              nodeVong_1.scale = 1;
              nodeVong_1.opacity = 255;
              nodeVong_1.runAction(cc.repeatForever(cc.sequence(cc.spawn(cc.scaleTo(.5, 1.6).easing(cc.easeQuarticActionOut()), cc.fadeTo(.5, 50).easing(cc.easeQuarticActionOut())), cc.callFunc(function() {
                nodeVong_1.scale = 1;
                nodeVong_1.opacity = 255;
              }))));
              return [ 3, 7 ];

             case 1:
              if (!(12 == this.result)) return [ 3, 6 ];
              this.isShowEffectSpawn = true;
              skedata = null;
              _a.label = 2;

             case 2:
              _a.trys.push([ 2, 4, , 5 ]);
              return [ 4, this.getSpin() ];

             case 3:
              skedata = _a.sent();
              return [ 3, 5 ];

             case 4:
              e_4 = _a.sent();
              cc.error(e_4);
              return [ 3, 5 ];

             case 5:
              if (skedata) {
                this.skeletonItem.node.active = true;
                this.skeletonItem.skeletonData = skedata;
                this.skeletonItem.setAnimation(0, "spawn", false);
                this.skeletonItem.setCompleteListener(function() {
                  _this.skeletonItem.setCompleteListener(null);
                  _this.skeletonItem.node.active = false;
                });
              }
              Windown_1.Windown.Neko.audio.playEffectNoStop(Windown_1.Windown.Neko.audio.symWild);
              return [ 3, 7 ];

             case 6:
              if (11 == this.result) {
                this.isShowEffectSpawn = true;
                if (null == this.nodeMutil) {
                  parent = Windown_1.Windown.Neko.muitlCtr.node;
                  this.nodeMutil = Windown_1.Windown.Neko.asset.getSymbolMutil();
                  this.nodeMutil.parent = parent;
                  this.nodeMutil.setPosition(Windown_1.Windown.convertNodeInOtherNode(this.parentMutil, parent));
                }
                this.parentMutil.active = false;
                this.nodeMutil["_components"] && this.nodeMutil.getComponent(ItemMuitlNeko_1.default).onOffEffectMutil(true);
              }
              _a.label = 7;

             case 7:
              return [ 3, 9 ];

             case 8:
              e_5 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_5);
              return [ 3, 9 ];

             case 9:
              return [ 2 ];
            }
          });
        });
      };
      SymbolNeko.prototype.unuse = function() {
        this.skeletonItem.node.active = false;
        this.itemColum = null;
        this.isShowEffectSpawn = false;
        this.isShuff = false;
        this.result = -1;
        this.node.opacity = 255;
        this.sprite.node.scale = .67;
        this.sprite.node.y = 1;
        this.sprite.node.opacity = 255;
        this.node.stopAllActions();
        this.removeAddScater(true);
      };
      SymbolNeko.prototype.checkEndCot = function() {
        if (0 == this.getIndexOf()) {
          var yCheck = -this.node.height / 2;
          if (this.node.y <= yCheck) {
            var result = this.itemColum.getIdSymbolResult();
            var listSymbol = this.itemColum.getListSymbol();
            var cpSybolChange = listSymbol[listSymbol.length - 1];
            cpSybolChange.node.zIndex = 0;
            cpSybolChange.node.setSiblingIndex(0);
            cpSybolChange.node.parent.sortAllChildren();
            cpSybolChange.setResult(result);
            this.itemColum.emitNewList();
            cpSybolChange.moveWhenListChange(ItemSlotNeko_1.TYPE_MOVE.NORMAL);
          }
        }
      };
      SymbolNeko.prototype.update = function(dt) {
        this.canRun && this.checkEndCot();
      };
      __decorate([ property(cc.Sprite) ], SymbolNeko.prototype, "sprite", void 0);
      __decorate([ property(cc.Sprite) ], SymbolNeko.prototype, "spriteBkg", void 0);
      __decorate([ property(cc.Sprite) ], SymbolNeko.prototype, "spriteKhung", void 0);
      __decorate([ property(sp.Skeleton) ], SymbolNeko.prototype, "skeletonItem", void 0);
      __decorate([ property(cc.Node) ], SymbolNeko.prototype, "parentMutil", void 0);
      SymbolNeko = __decorate([ ccclass ], SymbolNeko);
      return SymbolNeko;
    }(cc.Component);
    exports.default = SymbolNeko;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/BUNDLE": void 0,
    "../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./ItemMuitlNeko": "ItemMuitlNeko",
    "./ItemSlotNeko": "ItemSlotNeko"
  } ]
}, {}, [ "AssetNeko", "AudioNeko", "DetailHistoryNeko", "EffectNeko", "InfoBarControllerNeko", "ItemDetalNeko", "ItemLichSuNeko", "ItemMuitlNeko", "ItemResultDetailNeko", "ItemSlotNeko", "ItemSlotNekoNgang", "LichSuNeko", "MutilControlNeko", "NekoView", "SpinNormalNeko", "SymbolNeko" ]);