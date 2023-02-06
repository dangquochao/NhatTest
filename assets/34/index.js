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
  AssetDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d419F3ytxPxpU6nhk4DeNG", "AssetDieuThuyen");
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
        _this.listSpItemBlur = [];
        _this.listSpItem = [];
        _this.listSFItem = [];
        _this.itemIconEf = null;
        _this.itemEffNearWin = null;
        _this.itemCanhHoa = null;
        _this.itemXu = null;
        _this.itemScaterShow = null;
        _this.itemScaterIdle = null;
        _this.itemNoLuBo = null;
        _this.itemNoDieuThuyen = null;
        _this.itemWildDieuThuyen = null;
        _this.itemParticleLuBo = null;
        _this.poolIconEf = new cc.NodePool();
        _this.poolEffNearWin = new cc.NodePool();
        _this.poolCanhHoa = new cc.NodePool();
        _this.poolXu = new cc.NodePool();
        _this.poolScaterShow = new cc.NodePool();
        _this.poolScaterIdle = new cc.NodePool();
        _this.poolNoLuBo = new cc.NodePool();
        _this.poolNoDieuThuyen = new cc.NodePool();
        _this.poolWildDieuThuyen = new cc.NodePool();
        _this.poolParticleLuBo = new cc.NodePool();
        return _this;
      }
      NewClass.prototype.getIconEf = function() {
        var node = null;
        node = this.poolIconEf.size() > 0 ? this.poolIconEf.get() : cc.instantiate(this.itemIconEf);
        node.active = true;
        return node;
      };
      NewClass.prototype.putIconEf = function(node) {
        this.poolIconEf.put(node);
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
      NewClass.prototype.getCanhHoa = function() {
        var node = null;
        node = this.poolCanhHoa.size() > 0 ? this.poolCanhHoa.get() : cc.instantiate(this.itemCanhHoa);
        node.active = true;
        return node;
      };
      NewClass.prototype.putCanhHoa = function(node) {
        this.poolCanhHoa.put(node);
      };
      NewClass.prototype.getXu = function() {
        var node = null;
        if (this.poolXu.size() > 0) node = this.poolXu.get(); else {
          node = cc.instantiate(this.itemXu);
          node.name = "Xu";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putXu = function(node) {
        this.poolXu.put(node);
      };
      NewClass.prototype.getScaterShow = function() {
        var node = null;
        if (this.poolScaterShow.size() > 0) node = this.poolScaterShow.get(); else {
          node = cc.instantiate(this.itemScaterShow);
          node.name = "ScaterShow";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putScaterShow = function(node) {
        this.poolScaterShow.put(node);
      };
      NewClass.prototype.getScaterIdle = function() {
        var node = null;
        if (this.poolScaterIdle.size() > 0) node = this.poolScaterIdle.get(); else {
          node = cc.instantiate(this.itemScaterIdle);
          node.name = "ScaterIdle";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putScaterIdle = function(node) {
        this.poolScaterIdle.put(node);
      };
      NewClass.prototype.getNoLuBo = function() {
        var node = null;
        if (this.poolNoLuBo.size() > 0) node = this.poolNoLuBo.get(); else {
          node = cc.instantiate(this.itemNoLuBo);
          node.name = "NoLuBo";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putNoLuBo = function(node) {
        this.poolNoLuBo.put(node);
      };
      NewClass.prototype.getNoDieuThuyen = function() {
        var node = null;
        if (this.poolNoDieuThuyen.size() > 0) node = this.poolNoDieuThuyen.get(); else {
          node = cc.instantiate(this.itemNoDieuThuyen);
          node.name = "NoDieuThuyen";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putNoDieuThuyen = function(node) {
        this.poolNoDieuThuyen.put(node);
      };
      NewClass.prototype.getWildDieuThuyen = function() {
        var node = null;
        if (this.poolWildDieuThuyen.size() > 0) node = this.poolWildDieuThuyen.get(); else {
          node = cc.instantiate(this.itemWildDieuThuyen);
          node.name = "WildDieuThuyen";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putWildDieuThuyen = function(node) {
        this.poolWildDieuThuyen.put(node);
      };
      NewClass.prototype.getParticleLuBo = function() {
        var node = null;
        if (this.poolParticleLuBo.size() > 0) node = this.poolParticleLuBo.get(); else {
          node = cc.instantiate(this.itemParticleLuBo);
          node.name = "ParticleLuBo";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putParticleLuBo = function(node) {
        this.poolParticleLuBo.put(node);
      };
      NewClass.prototype.onDestroy = function() {
        this.poolIconEf.clear();
        this.poolEffNearWin.clear();
        this.poolCanhHoa.clear();
        this.poolXu.clear();
        this.poolScaterShow.clear();
        this.poolScaterIdle.clear();
        this.poolNoLuBo.clear();
        this.poolNoDieuThuyen.clear();
        this.poolWildDieuThuyen.clear();
        this.poolParticleLuBo.clear();
      };
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpItemBlur", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], NewClass.prototype, "listSpItem", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSFItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemIconEf", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemEffNearWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemCanhHoa", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemXu", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemScaterShow", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemScaterIdle", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemNoLuBo", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemNoDieuThuyen", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemWildDieuThuyen", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemParticleLuBo", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  AudioDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "393e5qTtCZB2oxSav0+xPXb", "AudioDieuThuyen");
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
        _this.big_win_start = null;
        _this.bonus_multiple_hide = null;
        _this.diao_chan_bg = null;
        _this.diao_chan_expand = null;
        _this.dong_zhuo_bg = null;
        _this.dong_zhuo_four_times = null;
        _this.dong_zhuo_laughing = null;
        _this.dong_zhuo_money_fall = null;
        _this.feature_exchange = null;
        _this.five_kind = null;
        _this.infobar_uplifter = null;
        _this.infobar_uplifter_highlight = null;
        _this.list_item_click = null;
        _this.load_coins = null;
        _this.lv_bu_attacked = null;
        _this.lv_bu_bg = null;
        _this.lv_bu_horse_neigh = null;
        _this.lv_bu_slash_four = null;
        _this.lv_bu_slash_one = null;
        _this.lv_bu_slash_three = null;
        _this.lv_bu_slash_two = null;
        _this.lv_bu_symbol_start = null;
        _this.medium_win = null;
        _this.medium_win_coins = null;
        _this.mega_win_end = null;
        _this.mega_win_start = null;
        _this.menu_icon_press = null;
        _this.multiple_free_spin_effect = null;
        _this.result_count_end = null;
        _this.result_counting = null;
        _this.scatter_explosion = null;
        _this.scatter_scrolling_long = null;
        _this.scatter_scrolling_short = null;
        _this.selector_bgm = null;
        _this.slider_effect = null;
        _this.slot_end_scroll = null;
        _this.slot_scrolling = null;
        _this.slot_scrolling_two = null;
        _this.small_win = null;
        _this.small_win_coins = null;
        _this.spin_click = null;
        _this.wallet_counting_above = null;
        _this.win_rolling = null;
        _this.luboChemGio = null;
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
      NewClass.prototype.playChooseFreeType = function() {
        this.stopMusic();
        this.playEffectNoStop(this.selector_bgm, 1, true);
      };
      NewClass.prototype.offChooseFree = function() {
        this.stopEffect(this.selector_bgm);
      };
      NewClass.prototype.offFree = function() {
        this.stopEffect(this.lv_bu_bg);
        this.stopEffect(this.dong_zhuo_bg);
        this.stopEffect(this.diao_chan_bg);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "big_win_start", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bonus_multiple_hide", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "diao_chan_bg", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "diao_chan_expand", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "dong_zhuo_bg", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "dong_zhuo_four_times", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "dong_zhuo_laughing", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "dong_zhuo_money_fall", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "feature_exchange", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "five_kind", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "infobar_uplifter", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "infobar_uplifter_highlight", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "list_item_click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "load_coins", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_attacked", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_bg", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_horse_neigh", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_slash_four", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_slash_one", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_slash_three", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_slash_two", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "lv_bu_symbol_start", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "medium_win", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "medium_win_coins", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "mega_win_end", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "mega_win_start", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "menu_icon_press", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "multiple_free_spin_effect", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "result_count_end", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "result_counting", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scatter_explosion", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scatter_scrolling_long", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scatter_scrolling_short", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "selector_bgm", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slider_effect", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slot_end_scroll", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slot_scrolling", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "slot_scrolling_two", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "small_win", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "small_win_coins", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "spin_click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wallet_counting_above", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "win_rolling", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "luboChemGio", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
  } ],
  DetailHistoryDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef1ab1A745CcIxS9KEtTBIH", "DetailHistoryDieuThuyen");
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
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.lbTitle = null;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.lbMNUser = null;
        _this.parentMutil = null;
        _this.spAtlas = null;
        _this.parentItemLine = null;
        _this.colorOf = null;
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
        var obj = null;
        try {
          obj = JSON.parse(jsonResult);
        } catch (e) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
          return;
        }
        this.isFreeSpin = obj.freeSpin;
        var listResult = JSON.parse(obj.views2);
        this.setResult(listResult);
        this.setLineAn(obj.listLineWin);
        obj.isTakeJP ? this.lbTitle.string = "N\u1ed5 H\u0169" : obj.freeSpin ? this.lbTitle.string = "Quay mi\u1ec5n ph\xed" : this.lbTitle.string = "Quay th\u01b0\u1eddng";
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM HH:mm:ss");
        this.lbBet.string = Windown_1.Windown.formatNumber(30 * obj.agBet);
        this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        this.lbMNUser.string = Windown_1.Windown.formatNumber(obj.agUser);
        var mutil = obj.freeNow;
        this.parentMutil.active = true;
        this.parentMutil.children.forEach(function(v) {
          return v.active = false;
        });
        2 == mutil ? this.parentMutil.children[0].active = true : 4 == mutil ? this.parentMutil.children[1].active = true : this.parentMutil.active = false;
      };
      NewClass.prototype.setResult = function(list) {
        var childItemColum = this.parentItem.children;
        for (var i = 0; i < list.length; i++) {
          var resultColum = list[i];
          for (var j = 0; j < resultColum.length; j++) {
            var idResult = resultColum[j];
            childItemColum[i].children[j].getComponent(cc.Sprite).spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSFItem[idResult];
            childItemColum[i].children[j].color = this.colorOf;
          }
        }
      };
      NewClass.prototype.setLineAn = function(list) {
        var childItemColum = this.parentItem.children;
        var parItemLine = this.parentItemLine;
        var childItemLine = parItemLine.children;
        var itemLineTemp = childItemLine[0];
        for (var i = 0, l = list.length; i < l; i++) {
          var SFSObject = list[i];
          var idLine = SFSObject.id;
          var moneyWin = SFSObject.agWinLine;
          var listItem = JSON.parse(SFSObject.lineIndex);
          var id = idLine;
          id < 10 && (id = "0" + id);
          var money = moneyWin;
          for (var j = 0; j < listItem.length; j++) childItemColum[j].children[listItem[j]].color = cc.Color.WHITE;
          var nodeLine = childItemLine[i];
          if (null == nodeLine) {
            nodeLine = cc.instantiate(itemLineTemp);
            nodeLine.parent = parItemLine;
          }
          nodeLine.active = true;
          nodeLine.children[0].getComponent(cc.Sprite).spriteFrame = this.spAtlas.getSpriteFrame(id.toString());
          nodeLine.children[1].getComponent(cc.Label).string = "W:" + Windown_1.Windown.formatMoney(money, 1);
        }
        for (var i = list.length; i < childItemLine.length; i++) childItemLine[i].active = false;
      };
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, 721.812, 0), cc.fadeOut(.3).easing(cc.easeElasticOut(3))), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTitle", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbWin", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMNUser", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentMutil", void 0);
      __decorate([ property(cc.SpriteAtlas) ], NewClass.prototype, "spAtlas", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemLine", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "colorOf", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  DieuThuyenView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d531ADUAlKnJwp03UHWXVZ", "DieuThuyenView");
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
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var AssetDieuThuyen_1 = require("./AssetDieuThuyen");
    var AudioDieuThuyen_1 = require("./AudioDieuThuyen");
    var EffectDieuThuyen_1 = require("./EffectDieuThuyen");
    var InfoBarController_1 = require("./InfoBarController");
    var ItemSlotDieuThuyen_1 = require("./ItemReel/ItemSlotDieuThuyen");
    var LichSuDieuThuyen_1 = require("./LichSuDieuThuyen");
    var SetingSpinDieuThuyen_1 = require("./SetingSpinDieuThuyen");
    var SpinNormal_1 = require("./StateSpin/SpinNormal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bkgSprite = null;
        _this.asset = null;
        _this.parentItem = null;
        _this.parentLine = null;
        _this.lb_Mn_Per_Line = null;
        _this.effect = null;
        _this.nodeBtnPlay = null;
        _this.nodeBtnSeting = null;
        _this.bangThuong = null;
        _this.cachChoi = null;
        _this.labelChipReviceInBox = null;
        _this.lb_totalBet = null;
        _this.lb_FSLeft = null;
        _this.lb_CountAuto = null;
        _this.audio = null;
        _this.btnSpin = null;
        _this.nodeFireLuBo = null;
        _this.infoBar = null;
        _this.parentMutil = null;
        _this.toggleMusic = null;
        _this.parentItemBet = null;
        _this.setingSpin = null;
        _this.listNodeDeactive = [];
        _this.popupLichSu = null;
        _this.currentMutil = 1;
        _this.stateSpin = null;
        _this.listColum = [];
        _this.listConfigBet = [];
        _this.listResult = [];
        _this.listResult2 = [];
        _this.listIdLineAn = [];
        _this.dataFinish = null;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.sfsObjTest = null;
        _this.gameType = null;
        _this.stateReel = 0;
        _this.totalLineBet = 30;
        _this.curRoomBet = 50;
        _this.funEnd = null;
        _this.isShowBtnPlay = true;
        _this.listConfigLine = [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ], [ 2, 2, 2, 2, 2 ], [ 0, 1, 2, 1, 0 ], [ 2, 1, 0, 1, 2 ], [ 0, 0, 1, 0, 0 ], [ 2, 2, 1, 2, 2 ], [ 1, 2, 2, 2, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ], [ 2, 1, 1, 1, 2 ], [ 1, 1, 0, 1, 1 ], [ 1, 1, 2, 1, 1 ], [ 0, 2, 2, 2, 0 ], [ 2, 0, 0, 0, 2 ], [ 1, 0, 1, 0, 1 ], [ 1, 2, 1, 2, 1 ], [ 0, 2, 0, 2, 0 ], [ 2, 0, 2, 0, 2 ], [ 0, 1, 0, 1, 0 ], [ 2, 1, 2, 1, 2 ], [ 0, 2, 1, 2, 0 ], [ 2, 0, 1, 0, 2 ], [ 1, 0, 2, 0, 1 ], [ 1, 2, 0, 2, 1 ], [ 0, 0, 2, 0, 0 ], [ 2, 2, 0, 2, 2 ], [ 0, 0, 0, 0, 1 ], [ 2, 2, 2, 2, 1 ], [ 1, 1, 1, 1, 0 ] ];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.DieuThuyen = this;
        this.initItem();
        cc.log("start dieu thuyen");
        this.gameType = GAME_TYPE_1.default.DieuThuyen;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        this.setupView();
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.stateSpin = new SpinNormal_1.default();
        this.sendJoinRoom();
      };
      NewClass.prototype.start = function() {
        if (Windown_1.Windown.AudioManager.isActiveSound && Windown_1.Windown.AudioManager.isActiveMusic) {
          this.toggleMusic.isChecked = true;
          this.toggleMusic.checkMark.node.active = true;
          this.toggleMusic.node.children[0].active = false;
        } else {
          this.toggleMusic.isChecked = false;
          this.toggleMusic.checkMark.node.active = false;
          this.toggleMusic.node.children[0].active = true;
        }
      };
      NewClass.prototype.sendJoinRoom = function() {
        cc.log("send creat room");
        try {
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("DieuThuyenExtension", "ext.Room.SlotDieuThuyen.SlotGameView");
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 1;
          roomSeting.groupId = "DieuThuyen";
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
        if ("DieuThuyen" == room.groupId) {
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
        if ("DieuThuyen" == room.groupId) {
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
          this.infoBar.showRdContent();
          var itemTemp = this.parentItemBet.children[0];
          for (var i = 0, l = list.length; i < l; i++) {
            var node = this.parentItemBet.children[i];
            if (null == node) {
              node = cc.instantiate(itemTemp);
              node.parent = this.parentItemBet;
            }
            node.active = true;
            var cpBtn = node.getComponent(cc.Button);
            cpBtn.clickEvents[0].customEventData = i.toString();
            node.getComponentInChildren(cc.Label).string = Windown_1.Windown.formatNumber(list[i].bet * this.totalLineBet);
          }
          this.onClickChooseBet(null, 0);
          cc.log(JSON.stringify(list));
        }
      };
      NewClass.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      NewClass.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.SpinDieuThuyen:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          this.handleFinish(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryDieuThuyen:
          this.popupLichSu.responseServer(SFSObject);
        }
      };
      NewClass.prototype.handleFinish = function(data) {
        var _this = this;
        if (data.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          this.stateSpin.onEnd();
          Windown_1.Windown.Dialog.showLog(data.get(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          this.activeAllBtn();
          return;
        }
        if (!data.containsKey("agUser") || !data.containsKey("agBet") || !data.containsKey("views") || !data.containsKey("views2") || !data.containsKey("agWin")) {
          this.stateSpin.onEnd();
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
          this.activeAllBtn();
          return;
        }
        this.dataFinish = data;
        Windown_1.Windown.MoneyUser.pushDelayMoney(this.gameType, this.dataFinish.get("agUser"), this.dataFinish.getLong("agWin"));
        this.truTienBet(this.dataFinish.get("agBet") * this.totalLineBet, this.dataFinish.get("agUser"));
        this.listResult = JSON.parse(data.get("views"));
        this.listResult2 = JSON.parse(data.get("views2"));
        this.setResult();
        this.getAllLineItem();
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
        Windown_1.Windown.DieuThuyen = null;
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
      };
      NewClass.prototype.setupView = function() {
        var nodeGame = cc.find("Game", this.node);
        if (cc.sys.isMobile) nodeGame.angle = 90; else {
          var scale = cc.winSize.height / 1280;
          nodeGame.angle = 0;
          nodeGame.scale = scale;
        }
        Windown_1.Windown.UIManager.changeRotation(true);
        this.bkgSprite.setContentSize(cc.winSize.height, cc.winSize.width);
      };
      NewClass.prototype.initItem = function() {
        var itemTemplate = this.parentItem.children[0];
        for (var i = 0; i < 5; i++) {
          var node = this.parentItem.children[i];
          if (null == node || "fire" == node.name) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          var cpItem = node.getComponent(ItemSlotDieuThuyen_1.default);
          this.listColum.push(cpItem);
          cpItem.index = i;
          cpItem.randomFirtGame();
          cpItem.node.x = cpItem.node.width * i + cpItem.node.width / 2 + 2 * i + 7;
          cpItem.node.y = 0;
        }
        this.nodeFireLuBo.parent = this.parentItem;
        this.nodeFireLuBo.setPosition(293.488, -309.26);
      };
      NewClass.prototype.setResult = function() {
        var _this = this;
        var count = 0;
        this.listResult.forEach(function(v) {
          _this.listColum[count].setResult(v);
          count++;
        });
      };
      NewClass.prototype.getBo5 = function() {
        var isResult = false;
        for (var _i = 0, _a = this.listIdLineAn; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.listItem.length > 4) {
            isResult = true;
            break;
          }
        }
        return isResult;
      };
      NewClass.prototype.getLitsChangLuBo = function() {
        var listTemp = [ [ -1, -1, -1 ], [ -1, -1, -1 ], [ -1, -1, -1 ], [ -1, -1, -1 ], [ -1, -1, -1 ] ];
        var listConverted = JSON.parse(this.dataFinish.get("views2"));
        for (var i = 0; i < listConverted.length; i++) for (var j = 0; j < listConverted[i].length; j++) {
          if (0 == i && 1 == j) continue;
          listConverted[i][j] != this.listResult[i][j] && (listTemp[i][j] = j);
        }
        return listTemp;
      };
      NewClass.prototype.getAllLineItem = function() {
        this.listIdLineAn = [];
        var sfsArray = this.dataFinish.getSFSArray("listLineWin");
        if (sfsArray.size() < 1) return;
        for (var i = 0, l = sfsArray.size(); i < l; i++) {
          var SFSObject = sfsArray.getSFSObject(i);
          var idLine = SFSObject.get("id");
          var moneyWin = SFSObject.get("agWinLine");
          var obj = Object.create(null);
          obj.id = idLine;
          obj.money = moneyWin;
          obj.listItem = JSON.parse(SFSObject.get("lineIndex"));
          this.listIdLineAn.push(obj);
        }
        cc.log(JSON.stringify(this.listIdLineAn));
      };
      NewClass.prototype.getListActiveByIdLine = function(id, result) {
        var listReturn = [];
        var idItemLineAn = this.getIdItemByIdLine(id, result);
        var listConfigLine = this.listConfigLine[id - 1].slice();
        for (var i = 0; i < 5; i++) {
          var idItem = result[i][listConfigLine[i]];
          if (9 != idItem && idItem != idItemLineAn) break;
          listReturn.push(listConfigLine[i]);
        }
        return listReturn;
      };
      NewClass.prototype.getIdItemByIdLine = function(id, result) {
        var listConfigLine = this.listConfigLine[id - 1].slice();
        for (var i = 0, l = listConfigLine.length; i < l; i++) {
          var idItem = result[i][listConfigLine[i]];
          if (9 != idItem) return idItem;
        }
        cc.error("loi get id Line");
        return -1;
      };
      NewClass.prototype.getListActiveScaster = function() {
        var list = [];
        var listResult = this.listResult;
        var countScaster = 0;
        for (var i = 0; i < listResult.length; i++) {
          countScaster >= 2 ? list.push(true) : list.push(false);
          listResult[i].includes(10) && countScaster++;
        }
        return list;
      };
      NewClass.prototype.showEffectMoneyPerLine = function(money) {
        this.lb_Mn_Per_Line.string = Windown_1.Windown.formatNumber(money);
        this.lb_Mn_Per_Line.node.active = true;
        this.lb_Mn_Per_Line.node.stopAllActions();
        this.lb_Mn_Per_Line.node.opacity = 255;
        this.lb_Mn_Per_Line.node.runAction(cc.fadeOut(1.4).easing(cc.easeSineIn()));
      };
      NewClass.prototype.setMutilMoney = function() {
        this.currentMutil = this.dataFinish.get("freeBonus");
      };
      NewClass.prototype.getMutilMoney = function() {
        return this.currentMutil;
      };
      NewClass.prototype.showMoneyAllWin = function(money) {
        this.labelChipReviceInBox.setMoney(money);
        Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
      };
      NewClass.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          _this.scheduleOnce(resolve, time);
        });
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
              return [ 4, this.stateSpin.onStart() ];

             case 1:
              _a.sent();
              cc.log("chay xuogn duoi nay");
              this.sendClickSpin();
              return [ 3, 3 ];

             case 2:
              if (this.stateReel == StateReelSlot_1.default.CAN_STOP) {
                this.unschedule(this.funEnd);
                this.stateReel = StateReelSlot_1.default.STOP;
                this.stateSpin.onForceEnd();
              } else if (this.stateReel == StateReelSlot_1.default.STOP) ; else if (this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
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
      NewClass.prototype.sendClickSpin = function() {
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("testSpin", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinDieuThuyen, sfsObj, this.roomSFS);
      };
      NewClass.prototype.setStateEffBtnSpin = function() {
        var ani = this.btnSpin.children[2].getComponent(cc.Animation);
        var nodeRotate = this.btnSpin.children[3];
        if (this.stateReel != StateReelSlot_1.default.STOP) {
          var materialNormal = cc.Material.getBuiltinMaterial("2d-sprite");
          nodeRotate.getComponent(cc.Sprite).setMaterial(0, materialNormal);
        }
        if (this.stateReel == StateReelSlot_1.default.WAITING || this.stateReel == StateReelSlot_1.default.SHOW_EFFECT) {
          nodeRotate.children[0].active = false;
          nodeRotate.runAction(cc.repeatForever(cc.rotateBy(3, -360)));
        } else if (this.stateReel == StateReelSlot_1.default.RUN) {
          this.audio.playEffect(this.audio.spin_click);
          ani.play("BtnSpinTab");
          nodeRotate.stopAllActions();
          nodeRotate.runAction(cc.repeatForever(cc.rotateBy(.3, -360)));
          nodeRotate.children[0].active = true;
        } else if (this.stateReel == StateReelSlot_1.default.STOP) {
          nodeRotate.stopAllActions();
          nodeRotate.children[0].active = false;
          var materialGray = cc.Material.getBuiltinMaterial("2d-gray-sprite");
          nodeRotate.getComponent(cc.Sprite).setMaterial(0, materialGray);
        }
      };
      NewClass.prototype.offAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = false;
          var nodeKbg = v.node.children[0];
          nodeKbg.color = cc.Color.fromHEX(new cc.Color(), "#945F00");
        });
      };
      NewClass.prototype.activeAllBtn = function() {
        this.listNodeDeactive.forEach(function(v) {
          v.interactable = true;
          var nodeKbg = v.node.children[0];
          nodeKbg.color = cc.Color.fromHEX(new cc.Color(), "#FFA300");
        });
      };
      NewClass.prototype.activeLbFree = function() {
        this.lb_FSLeft.node.parent.active = true;
      };
      NewClass.prototype.offLbFree = function() {
        this.lb_FSLeft.node.parent.active = false;
      };
      NewClass.prototype.activeNodeMutil = function() {
        var mutil = this.getMutilMoney();
        if (1 == mutil) return;
        cc.log("mutil la: " + mutil);
        this.parentMutil.active = true;
        this.parentMutil.children.forEach(function(v) {
          v.active = false;
        });
        2 == mutil ? this.parentMutil.children[0].active = true : this.parentMutil.children[1].active = true;
      };
      NewClass.prototype.offNodeMutil = function() {
        this.parentMutil.active = false;
      };
      NewClass.prototype.getNodeActionMutil = function() {
        var mutil = this.getMutilMoney();
        if (2 == mutil) return this.parentMutil.children[0];
        if (4 == mutil) return this.parentMutil.children[1];
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
      NewClass.prototype.onClickResetCountAuto = function() {
        this.stateSpin.countAutoSpin = 0;
        this.lb_CountAuto.node.parent.active = false;
      };
      NewClass.prototype.onClickSeting = function() {
        this.audio.playClick();
        cc.log("click onClickSeting");
        this.isShowBtnPlay = !this.isShowBtnPlay;
        if (this.isShowBtnPlay) {
          var vecTarget = cc.v2(0, -732.036);
          this.nodeBtnPlay.runAction(cc.fadeIn(.25));
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeOut(.2), cc.moveTo(.2, vecTarget)));
        } else {
          this.nodeBtnPlay.stopAllActions();
          this.nodeBtnSeting.stopAllActions();
          var vecTarget = cc.v2(0, -525.727);
          this.nodeBtnPlay.runAction(cc.fadeOut(.2));
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeIn(.25), cc.moveTo(.2, vecTarget)));
        }
      };
      NewClass.prototype.resetForNewGame = function() {
        this.stateReel = StateReelSlot_1.default.WAITING;
        this.setStateEffBtnSpin();
        this.parentLine.children.forEach(function(v) {
          return v.active = false;
        });
        this.labelChipReviceInBox.setMoney(this.dataFinish.getLong("agWin"));
      };
      NewClass.prototype.actionHideBtnSpin = function() {
        var _this = this;
        this.btnSpin.stopAllActions();
        this.btnSpin.runAction(cc.sequence(cc.spawn(cc.fadeOut(.32), cc.moveTo(.32, cc.v2(0, -712))), cc.callFunc(function() {
          _this.btnSpin.active = false;
        })));
      };
      NewClass.prototype.actionShowBtnSpin = function() {
        this.btnSpin.active = true;
        this.btnSpin.runAction(cc.spawn(cc.fadeIn(.32), cc.moveTo(.32, cc.v2(0, -533.092))));
      };
      NewClass.prototype.showContentTip = function() {};
      NewClass.prototype.offAllLineWin = function() {
        this.lb_Mn_Per_Line.node.active = false;
        this.parentLine.children.forEach(function(v) {
          return v.active = false;
        });
      };
      NewClass.prototype.onClickOpenChooseBet = function() {
        this.audio.playClick();
        var node = this.parentItemBet.parent.parent.parent;
        if (node.active) {
          node.stopAllActions();
          node.runAction(cc.sequence(cc.scaleTo(.3, 1, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
            node.active = false;
          })));
        } else {
          node.active = true;
          node.stopAllActions();
          node.runAction(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()));
        }
      };
      NewClass.prototype.onClickOpenChooseTypeSpin = function() {
        this.audio.playClick();
        this.setingSpin.show();
      };
      NewClass.prototype.onClickChooseBet = function(event, data) {
        this.audio.playClick();
        this.listConfigBet.length < 1 && Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
        if (this.stateSpin.lastFreeSpinLeft > 0) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_CHANGE_BET_FS);
          return;
        }
        var currentIndex = JSON.parse(data);
        this.curRoomBet = this.listConfigBet[currentIndex].bet;
        this.lb_totalBet.string = Windown_1.Windown.formatNumber(this.totalLineBet * this.curRoomBet);
        "string" == typeof data && this.onClickOpenChooseBet();
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
      NewClass.prototype.onClickBackToLobby = function() {
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      NewClass.prototype.onClickCachChoi = function() {
        this.cachChoi.active = true;
        this.cachChoi.y = -1280;
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.moveTo(.3, 0, 0));
      };
      NewClass.prototype.onCloseCachChoi = function() {
        var _this = this;
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.cachChoi.active = false;
        })));
      };
      NewClass.prototype.closeBangThuong = function() {
        var _this = this;
        this.bangThuong.stopAllActions();
        this.bangThuong.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.bangThuong.active = false;
        })));
      };
      NewClass.prototype.onClickBangThuong = function() {
        this.bangThuong.active = true;
        this.bangThuong.y = -1280;
        this.bangThuong.stopAllActions();
        this.bangThuong.runAction(cc.moveTo(.3, 0, 0));
      };
      NewClass.prototype.onClickLichSu = function() {
        this.popupLichSu.show();
      };
      NewClass.prototype.onClickTest = function(event, data) {
        return __awaiter(this, void 0, void 0, function() {
          var dataSet;
          return __generator(this, function(_a) {
            dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
            dataSet.putInt("bet", this.curRoomBet);
            "2 scater" == data ? dataSet.putUtfString("arr", "[[10,8,2],[10,8,0],[3,8,0],[2,8,0],[1,8,5]]") : "3 scater" == data ? dataSet.putUtfString("arr", "[[0,8,2],[10,8,0],[10,8,0],[2,8,0],[10,8,5]]") : "4 scater" == data ? dataSet.putUtfString("arr", "[[10,8,2],[10,8,0],[10,8,0],[10,8,0],[1,8,5]]") : "5 scater" == data && dataSet.putUtfString("arr", "[[10,8,2],[10,8,0],[10,8,0],[10,8,0],[10,8,5]]");
            this.sfsObjTest = dataSet;
            this.onClickBtnSpin();
            return [ 2 ];
          });
        });
      };
      NewClass.prototype.truTienBet = function(moneyBet, moneyPlayer) {
        if (0 == moneyBet) return;
        Windown_1.Windown.MoneyUser.subMoney(moneyBet, moneyPlayer);
      };
      NewClass.prototype.playerEffect1 = function(node, parent, offset) {
        var worldPos2 = node.parent.convertToWorldSpaceAR(node.getPosition());
        var viewPos2 = parent.convertToNodeSpaceAR(worldPos2);
        var nodeTemp = cc.instantiate(node);
        nodeTemp.parent = parent;
        nodeTemp.opacity = 100;
        nodeTemp.setPosition(viewPos2);
        if (offset) {
          nodeTemp.x += offset.x;
          nodeTemp.y += offset.y;
        }
        nodeTemp.runAction(cc.sequence(cc.spawn(cc.scaleBy(.17, 1.6 * nodeTemp.scale), cc.fadeOut(.17)), cc.callFunc(function() {
          nodeTemp.destroy();
        })));
      };
      NewClass.prototype.playerEffect2 = function(node, parent, offset) {
        var scale = node.scale;
        node.stopAllActions();
        node.runAction(cc.sequence(cc.scaleTo(.1, .6 * scale), cc.callFunc(function() {
          var worldPos2 = node.parent.convertToWorldSpaceAR(node.getPosition());
          var viewPos2 = parent.convertToNodeSpaceAR(worldPos2);
          var nodeTemp = cc.instantiate(node);
          nodeTemp.setPosition(viewPos2);
          nodeTemp.parent = parent;
          nodeTemp.opacity = 120;
          nodeTemp.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 1.3 * nodeTemp.scale), cc.fadeOut(.2).easing(cc.easeIn(3))), cc.callFunc(function() {
            nodeTemp.destroy();
          })));
        }), cc.scaleTo(.05, scale)));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgSprite", void 0);
      __decorate([ property(AssetDieuThuyen_1.default) ], NewClass.prototype, "asset", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentLine", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_Mn_Per_Line", void 0);
      __decorate([ property(EffectDieuThuyen_1.default) ], NewClass.prototype, "effect", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBtnPlay", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBtnSeting", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bangThuong", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "cachChoi", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "labelChipReviceInBox", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_totalBet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_FSLeft", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_CountAuto", void 0);
      __decorate([ property(AudioDieuThuyen_1.default) ], NewClass.prototype, "audio", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeFireLuBo", void 0);
      __decorate([ property(InfoBarController_1.default) ], NewClass.prototype, "infoBar", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentMutil", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemBet", void 0);
      __decorate([ property(SetingSpinDieuThuyen_1.default) ], NewClass.prototype, "setingSpin", void 0);
      __decorate([ property([ cc.Button ]) ], NewClass.prototype, "listNodeDeactive", void 0);
      __decorate([ property(LichSuDieuThuyen_1.default) ], NewClass.prototype, "popupLichSu", void 0);
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
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./AssetDieuThuyen": "AssetDieuThuyen",
    "./AudioDieuThuyen": "AudioDieuThuyen",
    "./EffectDieuThuyen": "EffectDieuThuyen",
    "./InfoBarController": "InfoBarController",
    "./ItemReel/ItemSlotDieuThuyen": "ItemSlotDieuThuyen",
    "./LichSuDieuThuyen": "LichSuDieuThuyen",
    "./SetingSpinDieuThuyen": "SetingSpinDieuThuyen",
    "./StateSpin/SpinNormal": "SpinNormal"
  } ],
  EffectDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebb7dwcqsFDl7UkV/U/9pNo", "EffectDieuThuyen");
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
    var FreeController_1 = require("./FS/FreeController");
    var NodeChooseFS_1 = require("./NodeChooseFS");
    var ParticerDieuThuyen_1 = require("./ParticerDieuThuyen");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.lb_Money = null;
        _this.bkgSpinFree = null;
        _this.bkgSpinFree2 = null;
        _this.nodeFree2 = null;
        _this.aniBo5 = null;
        _this.clBkgDT = null;
        _this.clBkgDTR = null;
        _this.clBkgLB = null;
        _this.parentTotalFS = null;
        _this.nodeBigWin = null;
        _this.nodeMiniBigWin = null;
        _this.colorBigWin = [];
        _this.sfSBigWin = null;
        _this.iconLuBo = null;
        _this.particel = null;
        _this.freeConTrl = null;
        _this.funNext = null;
        _this.funDelayOff = null;
        _this.mapColor = new Map();
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.funNext = null;
        this.mapColor.set("freeDieuThuyen", this.clBkgDT);
        this.mapColor.set("freeLuBo", this.clBkgLB);
        this.mapColor.set("freeDongTrac", this.clBkgDTR);
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.scheduleOnce(this.funDelayOff = function() {
          _this.node.on(cc.Node.EventType.TOUCH_END, _this.onClose, _this);
        }, .7);
      };
      NewClass.prototype.onDisable = function() {
        this.unschedule(this.funDelayOff);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClose, this);
      };
      NewClass.prototype.initPosMask = function(pos) {
        cc.find("mask", this.node).y = pos;
      };
      NewClass.prototype.showJackpot = function() {
        return new Promise(function(resolve, reject) {
          resolve(null);
        });
      };
      NewClass.prototype.showBigWin = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var money, moneyBet, delta, nodeTile, nodeFire, timeLb, sfsObj, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 14, , 15 ]);
                money = Windown_1.Windown.DieuThuyen.dataFinish.get("agWin") / Windown_1.Windown.DieuThuyen.getMutilMoney();
                moneyBet = Windown_1.Windown.DieuThuyen.curRoomBet * Windown_1.Windown.DieuThuyen.totalLineBet;
                delta = Windown_1.Windown.DieuThuyen.stateSpin.isMaxSpeed ? 2 : 1;
                if (money < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                if (!(money < 4 * moneyBet)) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.DieuThuyen.stateSpin.showMoneyRevice() ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 2 ];

               case 2:
                if (!(money < 8 * moneyBet)) return [ 3, 5 ];
                return [ 4, this.showMiniBigWin(money) ];

               case 3:
                _a.sent();
                return [ 4, Windown_1.Windown.DieuThuyen.stateSpin.showMoneyRevice() ];

               case 4:
                _a.sent();
                resolve(null);
                return [ 2 ];

               case 5:
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1 / delta) ];

               case 6:
                _a.sent();
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.win_rolling, 1, true);
                nodeTile = cc.find("title", this.nodeBigWin);
                nodeFire = cc.find("bkg", this.nodeBigWin);
                nodeTile.getComponent(cc.Sprite).spriteFrame = this.sfSBigWin.getSpriteFrame("win_big");
                this.particel.node.active = true;
                this.particel.setColor(this.colorBigWin[0]);
                timeLb = 3 / delta;
                this.node.active = true;
                this.node.runAction(cc.fadeIn(.5));
                this.nodeBigWin.active = true;
                this.nodeMask.active = true;
                money > 12 * moneyBet ? timeLb = 6 / delta : money > 20 * moneyBet && (timeLb = 9 / delta);
                this.lb_Money.node.active = true;
                this.lb_Money.time = timeLb;
                this.lb_Money.node.setPosition(0, 6.236);
                this.lb_Money.setMoney(money);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.big_win_start);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3) ];

               case 7:
                _a.sent();
                if (!(money > 12 * moneyBet)) return [ 3, 9 ];
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.mega_win_start);
                nodeTile.getComponent(cc.Sprite).spriteFrame = this.sfSBigWin.getSpriteFrame("win_mega");
                nodeTile.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.scaleTo(.2, .8)));
                this.particel.setColor(this.colorBigWin[1]);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3 / delta) ];

               case 8:
                _a.sent();
                _a.label = 9;

               case 9:
                if (!(money > 20 * moneyBet)) return [ 3, 11 ];
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.mega_win_end);
                nodeTile.getComponent(cc.Sprite).spriteFrame = this.sfSBigWin.getSpriteFrame("win_super_mega");
                nodeTile.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.scaleTo(.2, .8)));
                this.particel.setColor(this.colorBigWin[2]);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3 / delta) ];

               case 10:
                _a.sent();
                _a.label = 11;

               case 11:
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1 / delta) ];

               case 12:
                _a.sent();
                Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.win_rolling);
                return [ 4, Windown_1.Windown.DieuThuyen.stateSpin.showMoneyRevice() ];

               case 13:
                _a.sent();
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.DieuThuyen);
                sfsObj.putInt("mt", Windown_1.Windown.DieuThuyen.dataFinish.get("agWin"));
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "bw");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                this.funNext = resolve;
                this.onClose();
                return [ 3, 15 ];

               case 14:
                e_1 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_1);
                return [ 3, 15 ];

               case 15:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.showMiniBigWin = function(money) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var delta, lbMoney_1;
            var _this = this;
            return __generator(this, function(_a) {
              try {
                delta = Windown_1.Windown.DieuThuyen.stateSpin.isMaxSpeed ? 2 : 1;
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.medium_win);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.medium_win_coins);
                Windown_1.Windown.DieuThuyen.infoBar.tungXu2();
                lbMoney_1 = this.nodeMiniBigWin.getComponentInChildren(LbMoneyChange_1.default);
                this.nodeMiniBigWin.active = true;
                lbMoney_1.resetLb();
                lbMoney_1.time = 2 / delta;
                lbMoney_1.setMoney(money);
                lbMoney_1.node.scale = 1;
                this.nodeMiniBigWin.scale = .5;
                this.nodeMiniBigWin.runAction(cc.sequence(cc.scaleTo(2 / delta, 1), cc.delayTime(.5 / delta), cc.callFunc(function() {
                  lbMoney_1.node.stopAllActions();
                  lbMoney_1.node.runAction(cc.sequence(cc.scaleTo(.25, 1.3).easing(cc.easeSineOut()), cc.scaleBy(.2, .5).easing(cc.easeSineIn())));
                }), cc.delayTime(.35), cc.scaleTo(.15, .5), cc.callFunc(function() {
                  _this.nodeMiniBigWin.active = false;
                  Windown_1.Windown.DieuThuyen.infoBar.resetXu();
                  resolve(null);
                })));
              } catch (e) {
                Util_1.Util.ThrowErrProsime(e);
              }
              return [ 2 ];
            });
          });
        });
      };
      NewClass.prototype.showFreeSpin3 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var _a, pre, pre2, node, cp, nodeCharacter, e_2;
            return __generator(this, function(_b) {
              switch (_b.label) {
               case 0:
                _b.trys.push([ 0, 8, , 9 ]);
                Windown_1.Windown.DieuThuyen.infoBar.setContentLb("Th\u1eafng v\xf2ng quay mi\u1ec5n ph\xed");
                Windown_1.Windown.DieuThuyen.infoBar.scale();
                Windown_1.Windown.DieuThuyen.infoBar.offContenRd();
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1) ];

               case 1:
                _b.sent();
                Windown_1.Windown.UIManager.showLoading();
                return [ 4, Promise.all([ Windown_1.Windown.loadRes(GAME_TYPE_1.default.DieuThuyen.toString(), "Prefabs/NodeChooseFS", cc.Prefab), Windown_1.Windown.loadRes(GAME_TYPE_1.default.DieuThuyen.toString(), "Prefabs/ChacterFS", cc.Prefab) ]) ];

               case 2:
                _a = _b.sent(), pre = _a[0], pre2 = _a[1];
                Windown_1.Windown.UIManager.hideLoading();
                node = cc.instantiate(pre);
                node.parent = this.node.parent;
                cp = node.getComponent(NodeChooseFS_1.default);
                return [ 4, cp.waitHandle() ];

               case 3:
                _b.sent();
                nodeCharacter = cc.instantiate(pre2);
                nodeCharacter.parent = cc.find("Game/Top", Windown_1.Windown.DieuThuyen.node);
                this.freeConTrl = nodeCharacter.getComponent(FreeController_1.default);
                this.freeConTrl.show();
                this.activeBkgFree(cp.typeFree);
                if (!("freeLuBo" == cp.typeFree)) return [ 3, 5 ];
                return [ 4, this.showEffectFsLuBo() ];

               case 4:
                _b.sent();
                return [ 3, 7 ];

               case 5:
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.5) ];

               case 6:
                _b.sent();
                _b.label = 7;

               case 7:
                resolve(null);
                return [ 3, 9 ];

               case 8:
                e_2 = _b.sent();
                Util_1.Util.ThrowErrProsime(e_2);
                return [ 3, 9 ];

               case 9:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.activeBkgFree = function(freeType) {
        this.bkgSpinFree.active = true;
        this.bkgSpinFree.opacity = 0;
        this.bkgSpinFree.runAction(cc.fadeIn(.3));
        this.bkgSpinFree.color = this.mapColor.get(freeType);
        this.bkgSpinFree2.color = this.mapColor.get(freeType);
      };
      NewClass.prototype.showFreeSpin2 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var freeType, nodeMain, chu1, chu2, e_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 7, , 8 ]);
                freeType = Windown_1.Windown.DieuThuyen.dataFinish.get("typeFreeSpin");
                Windown_1.Windown.DieuThuyen.infoBar.offContenRd();
                Windown_1.Windown.DieuThuyen.infoBar.setContentLb("V\xf2ng quay mi\u1ec5n ph\xed \u0111\u01a1n");
                Windown_1.Windown.DieuThuyen.infoBar.scale();
                Windown_1.Windown.DieuThuyen.actionHideBtnSpin();
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1) ];

               case 1:
                _a.sent();
                return [ 4, Windown_1.Windown.DieuThuyen.infoBar.randomEffect(freeType) ];

               case 2:
                _a.sent();
                this.activeBkgFree(freeType);
                this.nodeFree2.active = true;
                this.nodeFree2.opacity = 0;
                this.nodeFree2.runAction(cc.fadeIn(.3));
                nodeMain = cc.find(freeType, this.nodeFree2);
                nodeMain.active = true;
                chu1 = nodeMain.children[1].getComponent(cc.Sprite);
                chu2 = nodeMain.children[2].getComponent(cc.Sprite);
                "freeDongTrac" == freeType && nodeMain.getComponentInChildren(sp.Skeleton).setAnimation(0, "Animation", true);
                chu1.fillRange = 0;
                chu2.fillRange = 0;
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.3) ];

               case 3:
                _a.sent();
                cc.tween(chu1).to(.3, {
                  fillRange: -1
                }).start();
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.3) ];

               case 4:
                _a.sent();
                cc.tween(chu2).to(.3, {
                  fillRange: -1
                }).start();
                if (!("freeLuBo" == freeType)) return [ 3, 6 ];
                return [ 4, this.showEffectFsLuBo() ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
                resolve(null);
                return [ 3, 8 ];

               case 7:
                e_3 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_3);
                return [ 3, 8 ];

               case 8:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.showEffectFsLuBo = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_4;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                this.iconLuBo.active = true;
                this.iconLuBo.scale = 0;
                this.iconLuBo.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
                Windown_1.Windown.DieuThuyen.nodeFireLuBo.active = true;
                Windown_1.Windown.DieuThuyen.nodeFireLuBo.opacity = 0;
                Windown_1.Windown.DieuThuyen.nodeFireLuBo.runAction(cc.fadeTo(.3, 255));
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 1:
                _a.sent();
                resolve(null);
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
      NewClass.prototype.showEffBo5 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_5;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.five_kind);
                this.aniBo5.node.active = true;
                Windown_1.Windown.DieuThuyen.scheduleOnce(function() {
                  Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.load_coins);
                }, 1.5);
                this.aniBo5.once(cc.Animation.EventType.FINISHED, function() {
                  _this.aniBo5.node.active = false;
                });
                this.aniBo5.play("Bo5");
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.2) ];

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
      NewClass.prototype.showBonus = function() {};
      NewClass.prototype.showTtMnFs = function(money) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var child, sfsObj, e_6;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 3, , 4 ]);
                Windown_1.Windown.DieuThuyen.audio.offFree();
                if (money < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.result_counting);
                child = cc.find(Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree, this.parentTotalFS);
                child.active = true;
                this.lb_Money.time = 2;
                this.lb_Money.node.setPosition(0, -206.191);
                this.lb_Money.node.active = true;
                this.lb_Money.resetLb();
                this.lb_Money.setMoney(money);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(2) ];

               case 1:
                _a.sent();
                Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.result_counting);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.result_count_end);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3.5) ];

               case 2:
                _a.sent();
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.DieuThuyen);
                sfsObj.putInt("mt", money);
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "fs");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                this.funNext = resolve;
                child.active = false;
                this.onClose();
                return [ 3, 4 ];

               case 3:
                e_6 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_6);
                return [ 3, 4 ];

               case 4:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.resetView = function() {
        this.lb_Money.node.getComponent(LbMoneyChange_1.default).resetLb();
        this.lb_Money.node.active = false;
        this.nodeMask.active = false;
        this.nodeMask.opacity = 200;
        this.node.opacity = 255;
        this.particel.node.active = false;
        this.nodeBigWin.active = false;
      };
      NewClass.prototype.onClose = function() {
        var _this = this;
        this.unschedule(this.funDelayOff);
        this.unschedule(this.onClose);
        this.funNext && this.funNext();
        this.funNext = null;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
          _this.resetView();
        })));
      };
      NewClass.prototype.tungXu = function(pos, parent) {
        var lengthXu = Windown_1.Windown.RandomNumber(10, 15);
        var _loop_1 = function(i) {
          var nodeXu = Windown_1.Windown.DieuThuyen.asset.getXu();
          nodeXu.parent = parent;
          nodeXu.setPosition(cc.v2(pos.x + Windown_1.Windown.RandomNumber(-20, 20), pos.y + Windown_1.Windown.RandomNumber(-20, 20)));
          var posEnd = cc.v2(pos.x - 212 + Windown_1.Windown.RandomNumber(-100, 100), pos.y - 156 + Windown_1.Windown.RandomNumber(-100, 100));
          nodeXu.getComponent(cc.Animation).play("DongXu");
          nodeXu.angle = -Windown_1.Windown.RandomNumber(0, 360);
          var time = Windown_1.Windown.RandomNumber(10, 20) / 10;
          nodeXu.runAction(cc.sequence(cc.jumpTo(time, posEnd, Windown_1.Windown.RandomNumber(150, 350), 1), cc.callFunc(function() {
            Windown_1.Windown.DieuThuyen.asset.putXu(nodeXu);
          })));
        };
        for (var i = 0; i < lengthXu; i++) _loop_1(i);
      };
      NewClass.prototype.tungXu2 = function(pos, parent) {
        var lengthXu = Windown_1.Windown.RandomNumber(5, 10);
        var _loop_2 = function(i) {
          var nodeXu = Windown_1.Windown.DieuThuyen.asset.getXu();
          nodeXu.parent = parent;
          nodeXu.scale = .3;
          nodeXu.setPosition(cc.v2(pos.x + Windown_1.Windown.RandomNumber(-20, 20), pos.y + Windown_1.Windown.RandomNumber(-20, 20)));
          var posEnd = cc.v2(pos.x - 400 + Windown_1.Windown.RandomNumber(-100, 100), pos.y + 100 + Windown_1.Windown.RandomNumber(-100, 100));
          nodeXu.getComponent(cc.Animation).play("DongXu");
          nodeXu.angle = -Windown_1.Windown.RandomNumber(0, 360);
          var time = Windown_1.Windown.RandomNumber(10, 20) / 10;
          nodeXu.runAction(cc.sequence(cc.jumpTo(time, posEnd, Windown_1.Windown.RandomNumber(150, 350), 1), cc.callFunc(function() {
            Windown_1.Windown.DieuThuyen.asset.putXu(nodeXu);
          })));
        };
        for (var i = 0; i < lengthXu; i++) _loop_2(i);
      };
      NewClass.prototype.roiXu = function(parent) {
        var lengthXu = Windown_1.Windown.RandomNumber(20, 30);
        var _loop_3 = function(i) {
          var timeDelay = i % 3 + Windown_1.Windown.RandomNumber(0, 5) / 10;
          var nodeXu = Windown_1.Windown.DieuThuyen.asset.getXu();
          nodeXu.parent = parent;
          nodeXu.scale = .3;
          nodeXu.setPosition(cc.v2(Windown_1.Windown.RandomNumber(-333, 333), 680));
          var posEndBy = cc.v2(0, -700);
          nodeXu.getComponent(cc.Animation).play("DongXu");
          nodeXu.angle = -Windown_1.Windown.RandomNumber(0, 360);
          var time = Windown_1.Windown.RandomNumber(14, 30) / 10;
          nodeXu.runAction(cc.sequence(cc.delayTime(timeDelay), cc.moveBy(time, posEndBy), cc.callFunc(function() {
            Windown_1.Windown.DieuThuyen.asset.putXu(nodeXu);
          })));
        };
        for (var i = 0; i < lengthXu; i++) _loop_3(i);
      };
      NewClass.prototype.NoXu = function(pos, parent) {
        var lengthXu = Windown_1.Windown.RandomNumber(30, 50);
        var _loop_4 = function(i) {
          var timeDelay = i * (Windown_1.Windown.RandomNumber(0, 5) / 10);
          var nodeXu = Windown_1.Windown.DieuThuyen.asset.getXu();
          nodeXu.parent = parent;
          nodeXu.scale = .3;
          nodeXu.setPosition(cc.v2(Windown_1.Windown.RandomNumber(-333, 333), 680));
          var posEndBy = cc.v2(0, -700);
          nodeXu.getComponent(cc.Animation).play("DongXu");
          nodeXu.angle = -Windown_1.Windown.RandomNumber(0, 360);
          var time = Windown_1.Windown.RandomNumber(14, 30) / 10;
          nodeXu.runAction(cc.sequence(cc.delayTime(timeDelay), cc.moveBy(time, posEndBy), cc.callFunc(function() {
            Windown_1.Windown.DieuThuyen.asset.putXu(nodeXu);
          })));
        };
        for (var i = 0; i < lengthXu; i++) _loop_4(i);
      };
      NewClass.prototype.checkAndShowEffectItemFree2 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var freeType, listColum, isCheck, _i, listColum_1, temp, isCheck, _a, listColum_2, temp, nodeMain, ske, listChangeLuBo, timeDelay, count, colum1, i, j, e_7;
            return __generator(this, function(_b) {
              switch (_b.label) {
               case 0:
                _b.trys.push([ 0, 15, , 16 ]);
                freeType = Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree;
                listColum = Windown_1.Windown.DieuThuyen.stateSpin.listColum;
                if (!("freeDieuThuyen" == freeType)) return [ 3, 3 ];
                isCheck = false;
                for (_i = 0, listColum_1 = listColum; _i < listColum_1.length; _i++) {
                  temp = listColum_1[_i];
                  temp.checkShowDieuThuyen() && (isCheck = true);
                }
                if (!isCheck) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.5) ];

               case 1:
                _b.sent();
                _b.label = 2;

               case 2:
                return [ 3, 14 ];

               case 3:
                if (!("freeDongTrac" == freeType && Windown_1.Windown.DieuThuyen.listIdLineAn.length > 0)) return [ 3, 6 ];
                isCheck = false;
                for (_a = 0, listColum_2 = listColum; _a < listColum_2.length; _a++) {
                  temp = listColum_2[_a];
                  temp.checkShowDongTrac() && (isCheck = true);
                }
                if (!isCheck) return [ 3, 5 ];
                nodeMain = cc.find(freeType, this.nodeFree2);
                ske = nodeMain.getComponentInChildren(sp.Skeleton);
                ske.setAnimation(0, "Celebrate", false);
                ske.addAnimation(0, "Animation", true);
                Windown_1.Windown.DieuThuyen.effect.tungXu2(cc.v2(32, 69), nodeMain);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.5) ];

               case 4:
                _b.sent();
                _b.label = 5;

               case 5:
                return [ 3, 14 ];

               case 6:
                if (!("freeLuBo" == freeType)) return [ 3, 14 ];
                listChangeLuBo = Windown_1.Windown.DieuThuyen.getLitsChangLuBo();
                timeDelay = .2;
                count = 0;
                colum1 = Windown_1.Windown.DieuThuyen.listColum[0];
                colum1.activeIconLubBoNoEf();
                i = 0;
                _b.label = 7;

               case 7:
                if (!(i < listChangeLuBo.length)) return [ 3, 12 ];
                j = 0;
                _b.label = 8;

               case 8:
                if (!(j < listChangeLuBo[i].length)) return [ 3, 11 ];
                if (!(-1 != listChangeLuBo[i][j])) return [ 3, 10 ];
                count++;
                listColum[i].activeIconLuBo(listChangeLuBo[i][j]);
                count > 3 && (timeDelay = 0);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(timeDelay) ];

               case 9:
                _b.sent();
                _b.label = 10;

               case 10:
                j++;
                return [ 3, 8 ];

               case 11:
                i++;
                return [ 3, 7 ];

               case 12:
                if (!(count > 0)) return [ 3, 14 ];
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 13:
                _b.sent();
                _b.label = 14;

               case 14:
                resolve(null);
                return [ 3, 16 ];

               case 15:
                e_7 = _b.sent();
                Util_1.Util.ThrowErrProsime(e_7);
                return [ 3, 16 ];

               case 16:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.checkAndShowEffectItemFree3 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_8;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, this.freeConTrl.showTakeMoney() ];

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
      NewClass.prototype.offFree2 = function() {
        var _this = this;
        for (var i = 1; i < this.nodeFree2.children.length; i++) {
          var node = this.nodeFree2.children[i];
          if (node.active) {
            node.active = false;
            if ("freeLuBo" == node.name) {
              this.iconLuBo.active = false;
              Windown_1.Windown.DieuThuyen.nodeFireLuBo.active = false;
            }
          }
        }
        this.bkgSpinFree.stopAllActions();
        this.bkgSpinFree.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          _this.bkgSpinFree.active = false;
        })));
        this.nodeFree2.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
          _this.nodeFree2.active = false;
        })));
      };
      NewClass.prototype.offFree3 = function() {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_9;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, this.freeConTrl.onClose() ];

               case 1:
                _a.sent();
                this.bkgSpinFree.stopAllActions();
                this.bkgSpinFree.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                  _this.bkgSpinFree.active = false;
                })));
                this.freeConTrl = null;
                this.iconLuBo.active = false;
                Windown_1.Windown.DieuThuyen.nodeFireLuBo.active = false;
                Windown_1.Windown.DieuThuyen.setMutilMoney();
                Windown_1.Windown.DieuThuyen.offNodeMutil();
                Windown_1.Windown.DieuThuyen.audio.offFree();
                r(null);
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
      NewClass.prototype.resetFree3NewTurn = function() {
        this.freeConTrl && this.freeConTrl.resetForNewTurn();
      };
      NewClass.prototype.test = function() {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMask", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "lb_Money", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgSpinFree", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgSpinFree2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeFree2", void 0);
      __decorate([ property(cc.Animation) ], NewClass.prototype, "aniBo5", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "clBkgDT", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "clBkgDTR", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "clBkgLB", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentTotalFS", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBigWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMiniBigWin", void 0);
      __decorate([ property([ cc.Color ]) ], NewClass.prototype, "colorBigWin", void 0);
      __decorate([ property(cc.SpriteAtlas) ], NewClass.prototype, "sfSBigWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "iconLuBo", void 0);
      __decorate([ property(ParticerDieuThuyen_1.default) ], NewClass.prototype, "particel", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./FS/FreeController": "FreeController",
    "./NodeChooseFS": "NodeChooseFS",
    "./ParticerDieuThuyen": "ParticerDieuThuyen"
  } ],
  FreeController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b43c8Ge2kpAY6P9uL9btyxr", "FreeController");
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
    var Util_1 = require("../../../../Scritps/Util");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FreeDT_1 = require("./FreeDT");
    var FreeDTR_1 = require("./FreeDTR");
    var FreeLuBo_1 = require("./FreeLuBo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.freeDieuThuyen = null;
        _this.freeDongTrac = null;
        _this.freeLuBo = null;
        return _this;
      }
      NewClass.prototype.show = function() {
        var freeType = Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree;
        this[freeType].node.active = true;
        this[freeType].reset();
      };
      NewClass.prototype.showTakeMoney = function() {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var freeType, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                freeType = Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree;
                return [ 4, this[freeType].showTakeMoney() ];

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
        });
      };
      NewClass.prototype.resetForNewTurn = function() {
        var freeType = Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree;
        this[freeType].resetForNewTurn();
      };
      NewClass.prototype.onClose = function() {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var freeType, e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                freeType = Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree;
                return [ 4, this[freeType].onClose() ];

               case 1:
                _a.sent();
                this.node.destroy();
                r(null);
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
        });
      };
      __decorate([ property(FreeDT_1.default) ], NewClass.prototype, "freeDieuThuyen", void 0);
      __decorate([ property(FreeDTR_1.default) ], NewClass.prototype, "freeDongTrac", void 0);
      __decorate([ property(FreeLuBo_1.default) ], NewClass.prototype, "freeLuBo", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Util": void 0,
    "../../../../Scritps/Windown": void 0,
    "./FreeDT": "FreeDT",
    "./FreeDTR": "FreeDTR",
    "./FreeLuBo": "FreeLuBo"
  } ],
  FreeDTR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "487e7Crw/lC4bx2gahU1CcN", "FreeDTR");
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
    var Util_1 = require("../../../../Scritps/Util");
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.aniMain = null;
        _this.soHeadMoney = null;
        _this.nodeTakeX4 = null;
        _this.parentXu = null;
        return _this;
      }
      NewClass.prototype.showTakeMoney = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listColum, isCheck, _i, listColum_1, temp, animation, nodeX4, e_1;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 3, , 4 ]);
                listColum = Windown_1.Windown.DieuThuyen.stateSpin.listColum;
                isCheck = false;
                for (_i = 0, listColum_1 = listColum; _i < listColum_1.length; _i++) {
                  temp = listColum_1[_i];
                  temp.checkShowDongTrac() && (isCheck = true);
                }
                if (Windown_1.Windown.DieuThuyen.listIdLineAn.length > 0) {
                  Windown_1.Windown.RandomNumber(0, 10) < 5 ? this.aniMain.setAnimation(0, "Idle_2", false) : this.aniMain.setAnimation(0, "Celebreate_1", false);
                  this.aniMain.addAnimation(0, "Idle_1", true);
                }
                if (!isCheck || 0 == Windown_1.Windown.DieuThuyen.listIdLineAn.length) {
                  resolve(null);
                  return [ 2 ];
                }
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.dong_zhuo_four_times);
                this.nodeTakeX4.active = true;
                animation = cc.find("animation", this.nodeTakeX4).getComponent(cc.Animation);
                animation.play("TakeX4");
                nodeX4 = cc.find("x4", this.nodeTakeX4);
                nodeX4.stopAllActions();
                nodeX4.opacity = 0;
                nodeX4.runAction(cc.sequence(cc.delayTime(1), cc.fadeIn(1)));
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(2.5) ];

               case 1:
                _a.sent();
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.dong_zhuo_laughing);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.dong_zhuo_money_fall);
                this.nodeTakeX4.active = false;
                this.soHeadMoney.node.parent.active = true;
                this.soHeadMoney.node.opacity = 255;
                this.soHeadMoney.setAnimation(0, "animation5", false);
                this.soHeadMoney.setCompleteListener(function() {
                  _this.soHeadMoney.setCompleteListener(null);
                  _this.soHeadMoney.node.stopAllActions();
                  _this.soHeadMoney.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                    _this.soHeadMoney.node.parent.active = false;
                  })));
                });
                Windown_1.Windown.DieuThuyen.effect.tungXu(cc.v2(-16.099, 201.239), this.parentXu);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1) ];

               case 2:
                _a.sent();
                Windown_1.Windown.DieuThuyen.effect.roiXu(this.parentXu);
                resolve(null);
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
        });
      };
      NewClass.prototype.reset = function() {
        this.soHeadMoney.node.parent.active = false;
        while (this.parentXu.childrenCount > 0) {
          var v = this.parentXu.children[0];
          v.stopAllActions();
          Windown_1.Windown.DieuThuyen.asset.putXu(v);
        }
        this.aniMain.setAnimation(0, "Idle_2", false);
        this.aniMain.addAnimation(0, "Idle_1", true);
        Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.dong_zhuo_laughing);
        Windown_1.Windown.DieuThuyen.scheduleOnce(function() {
          Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.dong_zhuo_laughing);
        }, 2.5);
      };
      NewClass.prototype.resetForNewTurn = function() {};
      NewClass.prototype.onClose = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1) ];

               case 1:
                _a.sent();
                this.node.active = false;
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
        });
      };
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "aniMain", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "soHeadMoney", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeTakeX4", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentXu", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Util": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  FreeDT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5ff1kJXVpM466ZF/wHFUaG", "FreeDT");
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
    var Util_1 = require("../../../../Scritps/Util");
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        this.canhHoaBkgEff();
      };
      NewClass.prototype.canhHoaBkgEff = function() {
        for (var i = 0; i < 15; i++) {
          var node = Windown_1.Windown.DieuThuyen.asset.getCanhHoa();
          node.parent = this.node;
          this.startCanhHoa(node, i);
        }
      };
      NewClass.prototype.startCanhHoa = function(node, timeDelay) {
        var _this = this;
        node.stopAllActions();
        var start = cc.v2(Windown_1.Windown.RandomNumber(-360, 100), 700);
        var end = cc.v2(Windown_1.Windown.RandomNumber(100, 670), 0);
        var time = Windown_1.Windown.RandomNumber(5, 10);
        timeDelay += Windown_1.Windown.RandomNumber(0, 5);
        node.setPosition(start);
        var action1 = cc.moveTo(time, end);
        node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.callFunc(function() {
          node.getComponent(cc.Animation).play("CanhHoa");
        }), action1, cc.callFunc(function() {
          _this.startCanhHoa(node, 0);
        })));
      };
      NewClass.prototype.showTakeMoney = function() {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var listColum, isCheck, _i, listColum_1, temp, parentItem, rd, node, ske_1, e_1;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 4, , 5 ]);
                listColum = Windown_1.Windown.DieuThuyen.stateSpin.listColum;
                isCheck = false;
                for (_i = 0, listColum_1 = listColum; _i < listColum_1.length; _i++) {
                  temp = listColum_1[_i];
                  temp.checkShowDieuThuyen() && (isCheck = true);
                }
                if (!(!isCheck || 0 == Windown_1.Windown.DieuThuyen.listIdLineAn.length)) return [ 3, 2 ];
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 1:
                _a.sent();
                r(null);
                return [ 2 ];

               case 2:
                parentItem = cc.find("TakeDT", this.node);
                rd = Windown_1.Windown.RandomNumber(0, parentItem.children.length);
                node = parentItem.children[rd];
                node.active = true;
                ske_1 = node.getComponent(sp.Skeleton);
                ske_1.setAnimation(0, "Idle_1", false);
                ske_1.setCompleteListener(function() {
                  ske_1.setCompleteListener(null);
                  _this.offTakeWild();
                });
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.5) ];

               case 3:
                _a.sent();
                r(null);
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
        });
      };
      NewClass.prototype.resetForNewTurn = function() {
        var listSke = cc.find("TakeDT", this.node).getComponentsInChildren(sp.Skeleton);
        listSke.forEach(function(v) {
          v.setCompleteListener(null);
          v.node.stopAllActions();
          v.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
            v.node.active = false;
          })));
        });
      };
      NewClass.prototype.offTakeWild = function() {
        var parentItem = cc.find("TakeDT", this.node);
        parentItem.children.forEach(function(v) {
          v.active = false;
        });
      };
      NewClass.prototype.reset = function() {
        this.offTakeWild();
      };
      NewClass.prototype.onClose = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1) ];

               case 1:
                _a.sent();
                this.node.active = false;
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
        });
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Util": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  FreeLuBo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a4deBEOQxMoLw8Ol+UUiU8", "FreeLuBo");
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
    var Util_1 = require("../../../../Scritps/Util");
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSpSolider = [];
        _this.nodeLubuChay = null;
        _this.nodeMutil = null;
        _this.lbHit = null;
        _this.currentCount = 1;
        _this.poolEffectHitIcon = new cc.NodePool();
        _this.listFunHitIcon = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        var nodeLine = cc.find("line", this.nodeLubuChay);
        nodeLine.x = 460;
        nodeLine.runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, -600, 337), cc.delayTime(Windown_1.Windown.RandomNumber(1, 4)), cc.callFunc(function() {
          nodeLine.x = 460;
        }))));
        var nodeGround = cc.find("bkg", this.nodeLubuChay);
        nodeGround.x = 276;
        nodeGround.runAction(cc.repeatForever(cc.sequence(cc.moveTo(.8, -276, 362.246), cc.callFunc(function() {
          nodeGround.x = 276;
        }))));
        this.startBinhLinh();
      };
      NewClass.prototype.zoomLubu = function() {
        var vecTarget = cc.v2(-263.592, -1690);
        var scale = 4.5;
        this.nodeLubuChay.stopAllActions();
        this.nodeLubuChay.runAction(cc.spawn(cc.scaleTo(1, scale).easing(cc.easeSineOut()), cc.moveTo(1, vecTarget).easing(cc.easeSineOut())));
      };
      NewClass.prototype.offZoomLubu = function(time) {
        void 0 === time && (time = 0);
        this.nodeLubuChay.stopAllActions();
        this.nodeLubuChay.runAction(cc.spawn(cc.scaleTo(time, 1).easing(cc.easeSineIn()), cc.moveTo(time, cc.v2(0, 0)).easing(cc.easeSineIn())));
      };
      NewClass.prototype.startBinhLinh = function() {
        var _this = this;
        var nodeBinhlinh = cc.find("binhlinh", this.nodeLubuChay);
        nodeBinhlinh.active = true;
        nodeBinhlinh.x = 600;
        nodeBinhlinh.stopAllActions();
        nodeBinhlinh.runAction(cc.repeatForever(cc.sequence(cc.delayTime(Windown_1.Windown.RandomNumber(2, 4)), cc.moveTo(.7, -600, 153), cc.callFunc(function() {
          nodeBinhlinh.x = 600;
          nodeBinhlinh.getComponent(cc.Sprite).spriteFrame = _this.listSpSolider[Windown_1.Windown.RandomNumber(0, _this.listSpSolider.length)];
        }))));
      };
      NewClass.prototype.offBinhLinh = function() {
        var nodeBinhlinh = cc.find("binhlinh", this.nodeLubuChay);
        nodeBinhlinh.active = false;
      };
      NewClass.prototype.showTakeMoney = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var colum1, count_1, listChangeIcon, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 8, , 9 ]);
                colum1 = Windown_1.Windown.DieuThuyen.listColum[0];
                colum1.activeIconLubBoNoEf();
                count_1 = 0;
                listChangeIcon = Windown_1.Windown.DieuThuyen.getLitsChangLuBo();
                listChangeIcon.forEach(function(v) {
                  v.forEach(function(j) {
                    -1 != j && count_1++;
                  });
                });
                if (0 == count_1) {
                  resolve(null);
                  return [ 2 ];
                }
                if (!(1 == count_1)) return [ 3, 1 ];
                this.showChem1();
                return [ 3, 6 ];

               case 1:
                if (!(2 == count_1)) return [ 3, 2 ];
                this.showChem2();
                return [ 3, 6 ];

               case 2:
                if (!(3 == count_1)) return [ 3, 4 ];
                this.showChem3();
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(5) ];

               case 3:
                _a.sent();
                return [ 3, 6 ];

               case 4:
                this.showChem4();
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(5) ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
                this.setupActiveIconLubo();
                return [ 4, this.showMutil(count_1) ];

               case 7:
                _a.sent();
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
      NewClass.prototype.setupActiveIconLubo = function() {
        var _this = this;
        this.listFunHitIcon = [];
        var listColum = Windown_1.Windown.DieuThuyen.stateSpin.listColum;
        var listChangeLuBo = Windown_1.Windown.DieuThuyen.getLitsChangLuBo();
        var _loop_1 = function(i) {
          var _loop_2 = function(j) {
            if (-1 != listChangeLuBo[i][j]) {
              var fun = function() {
                var indexIcon = listChangeLuBo[i][j];
                var nodeHitIcon = _this.getEfHitIcon();
                nodeHitIcon.parent = Windown_1.Windown.DieuThuyen.parentItem;
                var pos = listColum[i].getPointItem(indexIcon, nodeHitIcon.parent);
                nodeHitIcon.setPosition(pos);
                nodeHitIcon.getComponent(cc.Animation).play("mulltikill");
                nodeHitIcon.once(cc.Animation.EventType.FINISHED, function() {
                  _this.putEfHitIcon(nodeHitIcon);
                });
                listColum[i].activeIconLuBo2(indexIcon);
              };
              this_1.listFunHitIcon.push(fun);
            }
          };
          for (var j = 0; j < listChangeLuBo[i].length; j++) _loop_2(j);
        };
        var this_1 = this;
        for (var i = 0; i < listChangeLuBo.length; i++) _loop_1(i);
      };
      NewClass.prototype.showChem3 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var skeShow, skeChem_1, aniChem2, e_2;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 4, , 5 ]);
              this.zoomLubu();
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(2) ];

             case 1:
              _a.sent();
              this.nodeMutil.active = true;
              skeShow = cc.find("LbMutil/animShow", this.node).getComponent(sp.Skeleton);
              skeChem_1 = cc.find("LbMutil/aniChem", this.node).getComponent(sp.Skeleton);
              aniChem2 = cc.find("LBAttackAnimation_00", this.node).getComponent(cc.Animation);
              skeShow.node.active = true;
              skeShow.setAnimation(0, "animation2", false);
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3) ];

             case 2:
              _a.sent();
              skeShow.node.active = false;
              aniChem2.node.active = true;
              aniChem2.play("LuBuChem");
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.2) ];

             case 3:
              _a.sent();
              aniChem2.node.active = false;
              skeChem_1.node.active = true;
              skeChem_1.setAnimation(0, "animation1", false);
              skeChem_1.setCompleteListener(function() {
                skeChem_1.setCompleteListener(null);
                _this.offChem();
                _this.offZoomLubu(1);
              });
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
      };
      NewClass.prototype.showChem4 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var skeShow, skeChem_2, aniChem2, e_3;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 4, , 5 ]);
              this.zoomLubu();
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(2) ];

             case 1:
              _a.sent();
              this.nodeMutil.active = true;
              skeShow = cc.find("LbMutil/animShow", this.node).getComponent(sp.Skeleton);
              skeChem_2 = cc.find("LbMutil/aniChem2", this.node).getComponent(sp.Skeleton);
              aniChem2 = cc.find("LBAttackAnimation_00", this.node).getComponent(cc.Animation);
              skeShow.node.active = true;
              skeShow.setAnimation(0, "animation2", false);
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3) ];

             case 2:
              _a.sent();
              skeShow.node.active = false;
              aniChem2.node.active = true;
              aniChem2.play("LuBuChem");
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.8) ];

             case 3:
              _a.sent();
              aniChem2.node.active = false;
              skeChem_2.node.active = true;
              skeChem_2.setAnimation(0, "animation5", false);
              skeChem_2.setCompleteListener(function() {
                skeChem_2.setCompleteListener(null);
                _this.offChem();
                _this.offZoomLubu(1);
              });
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
      };
      NewClass.prototype.showChem1 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var aniChem2, e_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              aniChem2 = cc.find("LBAttackAnimation_00", this.node).getComponent(cc.Animation);
              aniChem2.node.active = true;
              aniChem2.play("LuBuChem");
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.3) ];

             case 1:
              _a.sent();
              aniChem2.node.active = false;
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
      };
      NewClass.prototype.showChem2 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var aniChem2, e_5;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              aniChem2 = cc.find("LBAttackAnimation_00", this.node).getComponent(cc.Animation);
              aniChem2.node.active = true;
              aniChem2.play("LuBuChem");
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.2) ];

             case 1:
              _a.sent();
              aniChem2.node.active = false;
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
      };
      NewClass.prototype.onClose = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var node, ske, e_6;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_horse_neigh);
                node = cc.find("dc_portrait", this.nodeLubuChay);
                ske = node.getComponent(sp.Skeleton);
                ske.setAnimation(0, "Rearing", false);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(3) ];

               case 1:
                _a.sent();
                this.node.active = false;
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
      NewClass.prototype.showMutil = function(mutil) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var count, e_7;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                count = 1;
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_slash_one);
                this.upMutil(count);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 1:
                _a.sent();
                count++;
                if (count > mutil) {
                  resolve(null);
                  return [ 2 ];
                }
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_slash_two);
                this.upMutil(count);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.7) ];

               case 2:
                _a.sent();
                count++;
                if (count > mutil) {
                  resolve(null);
                  return [ 2 ];
                }
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_slash_three);
                this.upMutil(count);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.6) ];

               case 3:
                _a.sent();
                count++;
                if (count > mutil) {
                  resolve(null);
                  return [ 2 ];
                }
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_slash_four);
                this.upMutil(count);
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 4:
                _a.sent();
                resolve(null);
                return [ 3, 6 ];

               case 5:
                e_7 = _a.sent();
                Util_1.Util.ThrowErrProsime(e_7);
                return [ 3, 6 ];

               case 6:
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.resetForNewTurn = function() {};
      NewClass.prototype.upMutil = function(count) {
        var parentText = this.lbHit.node.parent;
        var aniSo = cc.find("multikill_00", parentText);
        aniSo.getComponent(cc.Animation).play("mulltikill");
        this.lbHit.node.active = false;
        var nodeHit = cc.find("lv_bu_hit", parentText);
        var nodeCombo = cc.find("combo", parentText);
        nodeHit.active = false;
        nodeCombo.active = false;
        if (count < 4) {
          this.lbHit.node.active = true;
          nodeHit.active = true;
          parentText.active = true;
          this.lbHit.string = count.toString();
          var fun = this.listFunHitIcon.shift();
          fun();
        } else {
          Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_attacked);
          nodeCombo.active = true;
          this.listFunHitIcon.forEach(function(v) {
            v();
          });
          this.listFunHitIcon = [];
        }
        parentText.stopAllActions();
        parentText.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
          parentText.active = false;
        })));
      };
      NewClass.prototype.offChem = function() {
        for (var i = 1; i < this.nodeMutil.children.length; i++) this.nodeMutil.children[i].active = false;
        this.nodeMutil.active = false;
      };
      NewClass.prototype.reset = function() {
        this.nodeLubuChay.active = true;
        this.nodeMutil.active = false;
        this.lbHit.node.parent.active = false;
        cc.find("LBAttackAnimation_00", this.node).active = false;
        this.nodeLubuChay.scale = 1;
        this.nodeLubuChay.setPosition(0, 0);
      };
      NewClass.prototype.onClickTest = function() {
        this.offChem();
        this.showTakeMoney();
      };
      NewClass.prototype.getEfHitIcon = function() {
        var node = null;
        if (this.poolEffectHitIcon.size() > 0) node = this.poolEffectHitIcon.get(); else {
          var parentText = this.lbHit.node.parent;
          var aniSo = cc.find("multikill_00", parentText);
          node = cc.instantiate(aniSo);
          node.name = "EfHitIcon";
          node.scale = 1.4;
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putEfHitIcon = function(node) {
        this.poolEffectHitIcon.put(node);
      };
      NewClass.prototype.onDestroy = function() {
        this.poolEffectHitIcon.clear();
      };
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpSolider", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeLubuChay", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMutil", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbHit", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Util": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  InfoBarController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6cf3vlTsJEh7eO7Rb7JDJb", "InfoBarController");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbContent = null;
        _this.lbContentRd = null;
        _this.bkgRed = null;
        _this.parentItemFake = null;
        _this.listDefined = [ "T\xednh n\u0103ng \u0110\u1ed5ng Tr\xe1c", "T\xednh n\u0103ng \u0110i\xeau Thuy\u1ec1n", "T\xednh n\u0103ng L\u1eef B\u1ed1" ];
        _this.bkgCoin = null;
        _this.listContent = [ "2 bi\u1ec3u t\u01b0\u1ee3ng Scatter k\xedch ho\u1ea1t V\xf2ng quay mi\u1ec5n ph\xed \u0111\u01a1n", "3 bi\u1ec3u t\u01b0\u1ee3ng Scatter k\xedch ho\u1ea1t V\xf2ng quay mi\u1ec5n ph\xed", "4 bi\u1ec3u t\u01b0\u1ee3ng Scatter k\xedch ho\u1ea1t x2 trong V\xf2ng quay mi\u1ec5n ph\xed", "5 bi\u1ec3u t\u01b0\u1ee3ng Scatter k\xedch ho\u1ea1t x4 trong V\xf2ng quay mi\u1ec5n ph\xed" ];
        _this.isShowContentRd = false;
        return _this;
      }
      NewClass.prototype.showRdContent = function() {
        var _this = this;
        if (this.isShowContentRd) return;
        this.isShowContentRd = true;
        this.lbContent.node.active = false;
        this.lbContentRd.string = this.listContent[Windown_1.Windown.RandomNumber(0, this.listContent.length)];
        this.lbContentRd.node.active = true;
        this.lbContentRd.node.x = -255.766;
        this.lbContentRd.node.stopAllActions();
        this.lbContentRd.node.runAction(cc.sequence(cc.delayTime(2), cc.moveBy(7, -this.lbContentRd.node.width - 100, 0), cc.callFunc(function() {
          _this.isShowContentRd = false;
          _this.showRdContent();
        })));
      };
      NewClass.prototype.setContentLb = function(content) {
        this.lbContent.string = content;
      };
      NewClass.prototype.scale = function() {
        var _this = this;
        Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.infobar_uplifter_highlight);
        this.bkgRed.active = true;
        this.bkgRed.opacity = 0;
        this.bkgRed.runAction(cc.sequence(cc.fadeIn(.2), cc.fadeOut(.2), cc.callFunc(function() {
          _this.bkgRed.active = false;
        })));
        this.node.runAction(cc.sequence(cc.scaleTo(.2, .8), cc.scaleTo(.2, .6)));
      };
      NewClass.prototype.randomEffect = function(stringFree) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.infobar_uplifter);
          _this.offContenRd();
          _this.bkgRed.active = true;
          var listLb = _this.parentItemFake.getComponentsInChildren(cc.Label);
          "freeDieuThuyen" == stringFree ? listLb[0].string = _this.listDefined[1] : "freeLuBo" == stringFree ? listLb[0].string = _this.listDefined[2] : "freeDongTrac" == stringFree && (listLb[0].string = _this.listDefined[0]);
          var currentCount = Windown_1.Windown.RandomNumber(0, 3);
          for (var i = 1; i < listLb.length; i++) {
            listLb[i].string = _this.listDefined[currentCount % 3];
            currentCount++;
          }
          _this.parentItemFake.setPosition(0, 345);
          _this.lbContent.node.runAction(cc.sequence(cc.delayTime(.25), cc.moveTo(.4, 0, -64)));
          _this.parentItemFake.active = true;
          _this.parentItemFake.runAction(cc.sequence(cc.moveTo(2, 0, -262).easing(cc.easeCubicActionInOut()), cc.callFunc(function() {
            _this.lbContent.string = listLb[0].string;
            _this.lbContent.node.setPosition(0, 5);
            Windown_1.Windown.DieuThuyen.playerEffect1(_this.lbContent.node, _this.node.parent, cc.v2(0, 10));
            _this.bkgRed.active = false;
            _this.scale();
          }), cc.delayTime(1), cc.callFunc(function() {
            _this.parentItemFake.active = false;
            resolve(null);
          })));
        });
      };
      NewClass.prototype.offContenRd = function() {
        this.isShowContentRd = false;
        this.lbContentRd.node.active = false;
        this.lbContent.node.active = true;
      };
      NewClass.prototype.showTakeMoney = function(money) {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var mutil, bkg, nodeMutilAc, e_1;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 5, , 6 ]);
                if (0 == money) {
                  r(null);
                  return [ 2 ];
                }
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.small_win);
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.small_win_coins);
                mutil = Windown_1.Windown.DieuThuyen.getMutilMoney();
                this.resetXu();
                this.offContenRd();
                this.lbContent.node.active = true;
                this.lbContentRd.node.stopAllActions();
                this.bkgCoin.active = true;
                bkg = this.bkgCoin.children[0];
                bkg.stopAllActions();
                bkg.opacity = 0;
                bkg.runAction(cc.spawn(cc.rotateBy(5, 2e3), cc.sequence(cc.fadeIn(.5), cc.fadeOut(.5), cc.callFunc(function() {
                  _this.bkgCoin.active = false;
                }))));
                this.tungXu1();
                this.lbContent.string = "Th\u1eafng " + Windown_1.Windown.formatNumber(money / mutil);
                this.bkgRed.active = true;
                this.bkgRed.opacity = 0;
                this.node.runAction(cc.sequence(cc.callFunc(function() {
                  _this.bkgRed.runAction(cc.fadeIn(.3));
                  Windown_1.Windown.DieuThuyen.playerEffect1(_this.lbContent.node, _this.node.parent, cc.v2(0, 10));
                }), cc.scaleTo(.2, .7), cc.callFunc(function() {
                  _this.bkgRed.runAction(cc.fadeOut(.3));
                }), cc.scaleTo(.2, .6), cc.callFunc(function() {
                  _this.bkgRed.active = false;
                })));
                if (!(1 != mutil)) return [ 3, 3 ];
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 1:
                _a.sent();
                Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.bonus_multiple_hide);
                nodeMutilAc = Windown_1.Windown.DieuThuyen.getNodeActionMutil();
                nodeMutilAc.stopAllActions();
                nodeMutilAc.runAction(cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1), cc.callFunc(function() {
                  _this.lbContent.string = "Th\u1eafng " + Windown_1.Windown.formatNumber(money);
                })));
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.5) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(1.5) ];

               case 4:
                _a.sent();
                r(null);
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
      NewClass.prototype.tungXu1 = function() {
        var _loop_1 = function(i, l) {
          var xu = Windown_1.Windown.DieuThuyen.asset.getXu();
          xu.scale = Windown_1.Windown.RandomNumber(12, 18) / 100;
          xu.parent = this_1.bkgCoin;
          xu.setPosition(Windown_1.Windown.RandomNumber(-100, 100), 17);
          var vecTarget = cc.v2(Windown_1.Windown.RandomNumber(-100, 100), 17);
          var time = Windown_1.Windown.RandomNumber(5, 10) / 10;
          xu.getComponent(cc.Animation).play("DongXu");
          xu.angle = -Windown_1.Windown.RandomNumber(0, 360);
          xu.runAction(cc.sequence(cc.jumpTo(time, vecTarget, Windown_1.Windown.RandomNumber(50, 130), 1), cc.callFunc(function() {
            Windown_1.Windown.DieuThuyen.asset.putXu(xu);
          })));
        };
        var this_1 = this;
        for (var i = 0, l = Windown_1.Windown.RandomNumber(5, 10); i < l; i++) _loop_1(i, l);
      };
      NewClass.prototype.tungXu2 = function() {
        var _this = this;
        this.bkgCoin.active = true;
        var bkg = this.bkgCoin.children[0];
        bkg.stopAllActions();
        bkg.opacity = 0;
        bkg.runAction(cc.spawn(cc.rotateBy(5, 2e3), cc.sequence(cc.fadeIn(.5), cc.delayTime(3), cc.fadeOut(.5), cc.callFunc(function() {
          _this.bkgCoin.active = false;
        }))));
        for (var i = 0, l = Windown_1.Windown.RandomNumber(10, 15); i < l; i++) {
          var xu = Windown_1.Windown.DieuThuyen.asset.getXu();
          xu.scale = Windown_1.Windown.RandomNumber(12, 18) / 100;
          xu.parent = this.bkgCoin;
          this.tungXuLoop(xu, i % 5 / 10);
        }
      };
      NewClass.prototype.tungXuLoop = function(xu, delayTime) {
        var _this = this;
        var vecStart = cc.v2(Windown_1.Windown.RandomNumber(-220, 220), 17);
        xu.stopAllActions();
        xu.setPosition(vecStart);
        var vecTarget = cc.v2(vecStart.x + Windown_1.Windown.RandomNumber(-10, 10), 17);
        var time = Windown_1.Windown.RandomNumber(5, 10) / 10;
        xu.getComponent(cc.Animation).play("DongXu");
        xu.angle = -Windown_1.Windown.RandomNumber(0, 360);
        xu.runAction(cc.sequence(cc.delayTime(delayTime), cc.jumpTo(time, vecTarget, Windown_1.Windown.RandomNumber(30, 150), 1), cc.callFunc(function() {
          _this.tungXuLoop(xu, 0);
        })));
      };
      NewClass.prototype.resetXu = function() {
        for (var i = 0; i < this.bkgCoin.childrenCount; i++) {
          var v = this.bkgCoin.children[i];
          if ("Xu" == v.name) {
            Windown_1.Windown.DieuThuyen.asset.putXu(v);
            i--;
          }
        }
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbContent", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbContentRd", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgRed", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemFake", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgCoin", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ItemLichSuDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0d64XSx+hNUK+CwVJ+Zcfj", "ItemLichSuDieuThuyen");
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
          this.lbBet.string = Windown_1.Windown.formatNumber(obj.agBet * Windown_1.Windown.DieuThuyen.totalLineBet);
          this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        } catch (e) {
          console.error(e);
        }
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.DieuThuyen.audio.playClick();
        Windown_1.Windown.DieuThuyen.popupLichSu.showDetail(this.data);
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
  ItemLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2ad8n8ce5Oqa94Myfu9ojJ", "ItemLine");
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
  ItemSlotDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b0485vbvNGx7NO8J/prCVl", "ItemSlotDieuThuyen");
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StateSpin = {
      Wating: 0,
      Run: 1,
      CanStop: 2,
      ShowEffect: 3,
      Stop: 4
    };
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentBlur = null;
        _this.aniBlur = null;
        _this.parentItem = null;
        _this.listSpItem = null;
        _this.stateSpin = 0;
        _this.funReject = null;
        _this.stateWhel = 0;
        _this.result = [];
        _this.listIconEff = [];
        _this.listScaterIdle = [];
        _this.nodeEffNearWin = null;
        _this.nodeWildDT = null;
        _this.nodeWildShowDT = null;
        _this.index = -1;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.randomFirtGame = function() {
        var listResult = [];
        for (var i = 0; i < 3; i++) listResult.push(Windown_1.Windown.RandomNumber(0, 10));
        this.setResult(listResult);
      };
      NewClass.prototype.setIsResult = function() {
        var children = this.parentItem.children;
        children[3].active = false;
        children[4].active = false;
      };
      NewClass.prototype.activeNodeNearWin = function() {
        if (null == this.nodeEffNearWin) {
          this.nodeEffNearWin = Windown_1.Windown.DieuThuyen.asset.getNearWin();
          this.nodeEffNearWin.parent = Windown_1.Windown.DieuThuyen.parentItem;
          this.nodeEffNearWin.setPosition(this.node.x, -263.751);
        }
        this.nodeEffNearWin.active = true;
        this.nodeEffNearWin.getComponent(cc.Animation).play("Main1");
        var listColum = Windown_1.Windown.DieuThuyen.listColum;
        for (var i = 0; i < listColum.length - 1; i++) listColum[i].offAllItemNoScater();
        Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.scatter_scrolling_short);
      };
      NewClass.prototype.offNearWin = function() {
        this.nodeEffNearWin && (this.nodeEffNearWin.active = false);
        var listColum = Windown_1.Windown.DieuThuyen.listColum;
        for (var i = 0; i < listColum.length - 1; i++) listColum[i].activeAllItemNoScater();
        Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.scatter_scrolling_short);
      };
      NewClass.prototype.activeWildDT = function() {
        var _this = this;
        if (null == this.nodeWildDT) {
          this.nodeWildDT = Windown_1.Windown.DieuThuyen.asset.getWildDieuThuyen();
          this.nodeWildDT.parent = this.node;
          this.nodeWildDT.setPosition(7, -274);
        }
        Windown_1.Windown.DieuThuyen.audio.playEffectNoStop(Windown_1.Windown.DieuThuyen.audio.diao_chan_expand);
        var indexWild = this.result.indexOf(9);
        this.nodeWildDT.active = true;
        this.nodeWildDT.opacity = 0;
        this.nodeWildDT.anchorY = 1;
        this.nodeWildDT.scaleY = 0;
        this.nodeWildDT.runAction(cc.spawn(cc.fadeIn(.4).easing(cc.easeCubicActionIn()), cc.scaleTo(.4, 1)));
        if (null == this.nodeWildShowDT) {
          this.nodeWildShowDT = Windown_1.Windown.DieuThuyen.asset.getNoDieuThuyen();
          this.nodeWildShowDT.parent = this.node;
        }
        this.nodeWildShowDT.setPosition(this.getPointItem(indexWild, this.node));
        this.nodeWildShowDT.active = true;
        this.nodeWildShowDT.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(0, -280)), cc.callFunc(function() {
          _this.getListItemSp()[2].active = false;
        })));
        this.nodeWildShowDT.getComponent(cc.Animation).play("DTEffectWild");
      };
      NewClass.prototype.deActiveWildDT = function() {
        this.nodeWildDT && (this.nodeWildDT.active = false);
        this.nodeWildShowDT && (this.nodeWildShowDT.active = false);
        this.getListItemSp()[2].active = true;
      };
      NewClass.prototype.activeIconLuBo = function(index) {
        var _this = this;
        Windown_1.Windown.DieuThuyen.audio.playEffectNoStop(Windown_1.Windown.DieuThuyen.audio.luboChemGio);
        var nodeParticle = Windown_1.Windown.DieuThuyen.asset.getParticleLuBo();
        nodeParticle.parent = this.node.parent;
        nodeParticle.setPosition(80.776, -284.74);
        nodeParticle.getComponent(cc.ParticleSystem).resetSystem();
        nodeParticle.stopAllActions();
        var target = this.getPointItem(index, this.node.parent);
        var nodeActive = this.getListItemSp()[index];
        var ske = nodeActive.getComponentInChildren(sp.Skeleton);
        var sprite = nodeActive.getComponentInChildren(cc.Sprite);
        nodeParticle.runAction(cc.sequence(cc.moveTo(.3, target), cc.callFunc(function() {
          Windown_1.Windown.DieuThuyen.asset.putParticleLuBo(nodeParticle);
          sprite.node.active = false;
          ske.node.active = true;
          ske.node.opacity = 0;
          ske.skeletonData = Windown_1.Windown.DieuThuyen.asset.listSpItem[8];
          ske.clearTracks();
          ske.setAnimation(0, "idle", true);
          ske.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeIn(.2)));
          var nodeNo = Windown_1.Windown.DieuThuyen.asset.getNoLuBo();
          nodeNo.parent = _this.node.parent;
          nodeNo.setPosition(target);
          nodeNo.getComponent(cc.Animation).play("NoLuBo");
          nodeNo.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
            Windown_1.Windown.DieuThuyen.asset.putNoLuBo(nodeNo);
          })));
        })));
      };
      NewClass.prototype.activeIconLuBo2 = function(index) {
        var target = this.getPointItem(index, this.node.parent);
        var nodeActive = this.getListItemSp()[index];
        var ske = nodeActive.getComponentInChildren(sp.Skeleton);
        var sprite = nodeActive.getComponentInChildren(cc.Sprite);
        sprite.node.active = false;
        ske.node.active = true;
        ske.node.opacity = 0;
        ske.skeletonData = Windown_1.Windown.DieuThuyen.asset.listSpItem[8];
        ske.clearTracks();
        ske.setAnimation(0, "idle", true);
        ske.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeIn(.2)));
        var nodeNo = Windown_1.Windown.DieuThuyen.asset.getNoLuBo();
        nodeNo.parent = this.node.parent;
        nodeNo.setPosition(target);
        nodeNo.getComponent(cc.Animation).play("NoLuBo");
        nodeNo.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
          Windown_1.Windown.DieuThuyen.asset.putNoLuBo(nodeNo);
        })));
      };
      NewClass.prototype.activeIconLubBoNoEf = function() {
        var item = this.getListItemSp()[1];
        var sprite = item.getComponentInChildren(cc.Sprite);
        var ske = item.getComponentInChildren(sp.Skeleton);
        ske.node.active = true;
        sprite.node.active = false;
        sprite.spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSFItem[8];
        ske.skeletonData = Windown_1.Windown.DieuThuyen.asset.listSpItem[8];
        ske.setAnimation(0, "idle", true);
        this.result[1] = 8;
      };
      NewClass.prototype.setResult = function(listId) {
        this.result = listId;
        var listNode = this.getListItemSp();
        this.listScaterIdle.forEach(function(v) {
          Windown_1.Windown.DieuThuyen.asset.putScaterIdle(v);
        });
        this.listScaterIdle = [];
        for (var i = 0, l = listNode.length; i < l; i++) {
          var cpSp = listNode[i].getComponentInChildren(sp.Skeleton);
          var cpSprite = listNode[i].getComponentInChildren(cc.Sprite);
          var id = listId[i];
          cpSp.node.active = false;
          cpSprite.node.active = true;
          cpSp.node.y = 6 == id ? -63 : -76;
          cpSprite.spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSFItem[id];
          if (id < 6 || 10 == id) {
            if (10 == id) {
              var nodeScaterIdle = Windown_1.Windown.DieuThuyen.asset.getScaterIdle();
              nodeScaterIdle.parent = cpSprite.node;
              nodeScaterIdle.setPosition(-3, 18);
              this.listScaterIdle.push(nodeScaterIdle);
            }
          } else {
            cpSp.skeletonData = Windown_1.Windown.DieuThuyen.asset.listSpItem[id];
            cpSp.setAnimation(0, "idle", true);
          }
        }
      };
      NewClass.prototype.activeItem = function(listItem, isAll) {
        var _this = this;
        void 0 === isAll && (isAll = false);
        var listNode = this.getListItemSp();
        listItem.forEach(function(v) {
          var node = listNode[v];
          node.children[0].color = cc.Color.WHITE;
          node.children[1].color = cc.Color.WHITE;
          if (_this.result[v] < 6 || 10 == _this.result[v]) Windown_1.Windown.DieuThuyen.playerEffect2(node.children[0], Windown_1.Windown.DieuThuyen.parentItem); else {
            var cpSp = node.getComponentInChildren(sp.Skeleton);
            cpSp.setAnimation(0, "win", false);
            cpSp.addAnimation(0, "idle", true);
          }
          _this.playAniActive(v, isAll);
        });
      };
      NewClass.prototype.checkActiveItemWhenStop = function() {
        var listNode = this.getListItemSp();
        var _loop_1 = function(i) {
          if (10 == this_1.result[i]) {
            Windown_1.Windown.DieuThuyen.audio.playEffectNoStop(Windown_1.Windown.DieuThuyen.audio.scatter_explosion);
            var nodeAniShow_1 = Windown_1.Windown.DieuThuyen.asset.getScaterShow();
            nodeAniShow_1.parent = Windown_1.Windown.DieuThuyen.parentItem;
            nodeAniShow_1.setPosition(this_1.getPointItem(i, Windown_1.Windown.DieuThuyen.parentItem));
            var animation = nodeAniShow_1.getComponent(cc.Animation);
            animation.play("ScaterShow");
            animation.once("finished", function() {
              Windown_1.Windown.DieuThuyen.asset.putScaterShow(nodeAniShow_1);
            }, this_1);
          }
          var cpSp = listNode[i].getComponentInChildren(sp.Skeleton);
          var cpSprite = listNode[i].getComponentInChildren(cc.Sprite);
          var id = this_1.result[i];
          if (id < 6 || 10 == id) {
            cpSp.node.active = false;
            cpSprite.node.active = true;
          } else {
            cpSp.node.active = true;
            cpSprite.node.active = false;
          }
        };
        var this_1 = this;
        for (var i = 0; i < this.result.length; i++) _loop_1(i);
      };
      NewClass.prototype.offAllItem = function() {
        this.getListItemSp().forEach(function(v) {
          v.children[0].color = cc.Color.GRAY;
          v.children[1].color = cc.Color.GRAY;
        });
        this.listIconEff.forEach(function(v) {
          Windown_1.Windown.DieuThuyen.asset.putIconEf(v);
        });
        this.listIconEff = [];
      };
      NewClass.prototype.showFLyScaster = function() {};
      NewClass.prototype.offAllItemNoScater = function() {
        var listNode = this.getListItemSp();
        for (var i = 0; i < listNode.length; i++) if (10 != this.result[i]) {
          var v = listNode[i];
          v.children[0].color = cc.Color.GRAY;
          v.children[1].color = cc.Color.GRAY;
        }
      };
      NewClass.prototype.activeAllItemNoScater = function() {
        var listNode = this.getListItemSp();
        for (var i = 0; i < listNode.length; i++) if (10 != this.result[i]) {
          var v = listNode[i];
          v.children[0].color = cc.Color.WHITE;
          v.children[1].color = cc.Color.WHITE;
        }
      };
      NewClass.prototype.reset = function() {
        var listId = this.result;
        var listNode = this.getListItemSp();
        for (var i = 0, l = listNode.length; i < l; i++) {
          var cpSp = listNode[i].getComponentInChildren(sp.Skeleton);
          var cpSprite = listNode[i].getComponentInChildren(cc.Sprite);
          cpSprite.node.color = cc.Color.WHITE;
          cpSp.node.color = cc.Color.WHITE;
          var id = listId[i];
          if (id < 6 || 10 == id) {
            cpSp.node.active = false;
            cpSprite.node.active = true;
          } else {
            cpSp.node.active = true;
            cpSprite.node.active = false;
            "idle" != cpSp.animation && cpSp.setAnimation(0, "idle", true);
          }
        }
        this.listIconEff.forEach(function(v) {
          Windown_1.Windown.DieuThuyen.asset.putIconEf(v);
        });
        this.listIconEff = [];
      };
      NewClass.prototype.playAniActive = function(index, isAll) {
        void 0 === isAll && (isAll = false);
        var nodeSke = Windown_1.Windown.DieuThuyen.asset.getIconEf();
        nodeSke.parent = Windown_1.Windown.DieuThuyen.parentItem;
        nodeSke.setPosition(this.getPointItem(index, Windown_1.Windown.DieuThuyen.parentItem));
        this.listIconEff.push(nodeSke);
        var ske = nodeSke.getComponent(cc.Animation);
        ske.play("ActiveIcon");
      };
      NewClass.prototype.getPointItem = function(index, inNode) {
        var listNode = this.getListItemSp();
        var node = listNode[index];
        var worldPos2 = node.parent.convertToWorldSpaceAR(node.getPosition());
        var viewPos2 = inNode.convertToNodeSpaceAR(worldPos2);
        return viewPos2;
      };
      NewClass.prototype.getListItemSp = function() {
        if (null != this.listSpItem) return this.listSpItem;
        this.listSpItem = [];
        var children = this.parentItem.children;
        for (var i = 0; i < 3; i++) this.listSpItem.push(children[i]);
        return this.listSpItem;
      };
      NewClass.prototype.runSpin = function() {
        var _this = this;
        this.randomBlur();
        var actionMoveUp = cc.moveBy(.08, 0, 40).easing(cc.easeSineOut());
        var actionMoveDown = cc.moveBy(.1, 0, -180);
        var funCall = cc.callFunc(function() {
          _this.parentBlur.active = true;
          _this.aniBlur.play("ItemBlur");
          _this.parentBlur.y = 815;
          _this.node.y = 0;
          _this.parentItem.active = false;
          _this.deActiveWildDT();
        });
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(actionMoveUp, actionMoveDown, funCall));
        this.stateWhel = StateSpin.Run;
      };
      NewClass.prototype.stopEndGame = function() {
        this.stateWhel = StateSpin.Stop;
        this.node.y = 0;
        this.parentItem.active = true;
        this.parentBlur.active = false;
        this.node.stopAllActions();
        this.funReject && this.funReject();
      };
      NewClass.prototype.stopSpin = function(isScarter) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.funReject = reject;
          var funCall = cc.callFunc(function() {
            _this.stateWhel = StateSpin.Stop;
            _this.node.y = 0;
            _this.parentItem.active = true;
            _this.parentBlur.active = false;
            Windown_1.Windown.DieuThuyen.audio.playEffectNoStop(Windown_1.Windown.DieuThuyen.audio.slot_end_scroll);
          });
          var actionMoveDown = cc.moveBy(.08, 0, -15).easing(cc.easeSineOut());
          var actionMoveUp = cc.moveBy(.08, 0, 15).easing(cc.easeSineIn());
          var acNext = cc.callFunc(function() {
            _this.funReject = null;
            resolve(null);
            _this.checkActiveItemWhenStop();
          });
          _this.node.stopAllActions();
          if (isScarter && !Windown_1.Windown.DieuThuyen.stateSpin.isMaxSpeed) {
            _this.activeNodeNearWin();
            var timeActiveNearWin = .7;
            3 == _this.index ? timeActiveNearWin = 1.2 : 4 == _this.index && (timeActiveNearWin = 3);
            _this.node.runAction(cc.sequence(cc.delayTime(timeActiveNearWin), funCall, actionMoveDown, cc.callFunc(_this.offNearWin, _this), actionMoveUp, acNext));
          } else _this.node.runAction(cc.sequence(funCall, actionMoveDown, actionMoveUp, acNext));
        });
      };
      NewClass.prototype.forceStopSpin = function() {
        var _this = this;
        if (this.funReject) {
          this.funReject(null);
          this.funReject = null;
          cc.log("reject roi");
        }
        if (this.stateWhel == StateSpin.Run) {
          var funCall = cc.callFunc(function() {
            _this.stateWhel = StateSpin.Stop;
            _this.node.y = 0;
            _this.parentItem.active = true;
            _this.parentBlur.active = false;
            Windown_1.Windown.DieuThuyen.audio.playEffectNoStop(Windown_1.Windown.DieuThuyen.audio.slot_end_scroll);
          });
          var actionMoveDown = cc.moveBy(.08, 0, -15).easing(cc.easeSineOut());
          var actionMoveUp = cc.moveBy(.08, 0, 15).easing(cc.easeSineIn());
          var acNext = cc.callFunc(function() {
            _this.funReject = null;
            _this.checkActiveItemWhenStop();
          });
          this.offNearWin();
          this.node.stopAllActions();
          this.node.runAction(cc.sequence(funCall, actionMoveDown, actionMoveUp, acNext));
        }
      };
      NewClass.prototype.randomBlur = function() {
        var children = this.parentItem.children;
        var itemFake1 = children[3];
        var itemFake2 = children[4];
        var rdFake1 = Windown_1.Windown.RandomNumber(0, 10);
        var rdFake2 = Windown_1.Windown.RandomNumber(0, 10);
        itemFake1.getComponentInChildren(cc.Sprite).spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSFItem[rdFake1];
        itemFake2.getComponentInChildren(cc.Sprite).spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSFItem[rdFake2];
        var childrenBlur = this.parentBlur.getComponentsInChildren(cc.Sprite);
        var length = childrenBlur.length;
        childrenBlur[6].spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSpItemBlur[rdFake1];
        childrenBlur[7].spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSpItemBlur[this.result[0]];
        childrenBlur[8].spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSpItemBlur[this.result[1]];
        for (var i = 0; i < length - 3; i++) {
          var rd = Windown_1.Windown.RandomNumber(0, 11);
          childrenBlur[i].spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSpItemBlur[rd];
        }
      };
      NewClass.prototype.loopBlur = function() {
        var childrenBlur = this.parentBlur.getComponentsInChildren(cc.Sprite);
        var length = childrenBlur.length;
        for (var i = length - 3; i < length; i++) childrenBlur[i].spriteFrame = childrenBlur[i - length + 3].spriteFrame;
        for (var i = 0; i < length - 3; i++) {
          var rd = Windown_1.Windown.RandomNumber(0, 11);
          childrenBlur[i].spriteFrame = Windown_1.Windown.DieuThuyen.asset.listSpItemBlur[rd];
        }
      };
      NewClass.prototype.checkShowDieuThuyen = function() {
        if (this.result.includes(9)) {
          this.activeWildDT();
          return true;
        }
        return false;
      };
      NewClass.prototype.checkShowDongTrac = function() {
        if (this.result.includes(9)) return true;
        return false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentBlur", void 0);
      __decorate([ property(cc.Animation) ], NewClass.prototype, "aniBlur", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0
  } ],
  LichSuDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a92a0rYkZ5EAodQWLuozm6z", "LichSuDieuThuyen");
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
    var DetailHistoryDieuThuyen_1 = require("./DetailHistoryDieuThuyen");
    var ItemLichSuDieuThuyen_1 = require("./ItemLichSuDieuThuyen");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuDieuThuyen = function(_super) {
      __extends(LichSuDieuThuyen, _super);
      function LichSuDieuThuyen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.detail = null;
        _this.listData = null;
        _this.maxRow = 11;
        return _this;
      }
      LichSuDieuThuyen.prototype.show = function() {
        this.node.active = true;
        this.reset();
        this.node.y = -1280;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.3, 0, 0));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryDieuThuyen, null, Windown_1.Windown.DieuThuyen.roomSFS);
        Windown_1.Windown.UIManager.showLoading();
      };
      LichSuDieuThuyen.prototype.responseServer = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = sfsObj.getSFSArray("history");
        this.initWithListData(sfsArr);
      };
      LichSuDieuThuyen.prototype.initWithListData = function(listData) {
        cc.log(listData);
        var child = this.pageDate.content.children;
        var lengthRows = listData.size();
        var totalPage = parseInt(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.listData = listData;
        this.onChangePage(1);
      };
      LichSuDieuThuyen.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuDieuThuyen_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuDieuThuyen.prototype.showDetail = function(SFSObject) {
        this.detail.show(SFSObject);
      };
      LichSuDieuThuyen.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuDieuThuyen.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuDieuThuyen.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.DieuThuyen.audio.playClick();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(PageData_1.default) ], LichSuDieuThuyen.prototype, "pageDate", void 0);
      __decorate([ property(DetailHistoryDieuThuyen_1.default) ], LichSuDieuThuyen.prototype, "detail", void 0);
      LichSuDieuThuyen = __decorate([ ccclass ], LichSuDieuThuyen);
      return LichSuDieuThuyen;
    }(cc.Component);
    exports.default = LichSuDieuThuyen;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./DetailHistoryDieuThuyen": "DetailHistoryDieuThuyen",
    "./ItemLichSuDieuThuyen": "ItemLichSuDieuThuyen"
  } ],
  NodeChooseFS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55ec3TfL61FqqQKp96p7GmN", "NodeChooseFS");
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
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.funNext = null;
        _this.typeFree = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.SelectTypeFree, this.responseServer, this);
        var btnNext = cc.find("BtnNext", this.node);
        var btnPre = cc.find("BtnPre", this.node);
        var btnSpin = cc.find("BtnSpine", this.node);
        var nodeDT = this.parentItem.children[0];
        var nodeLB = this.parentItem.children[1];
        var nodeDTR = this.parentItem.children[2];
        nodeDT.runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, 0)).easing(cc.easeSineOut()), cc.callFunc(function() {
          _this.activeAc(nodeDT);
        })));
        this.scheduleOnce(function() {
          nodeLB.runAction(cc.sequence(cc.moveTo(.6, cc.v2(-280, 0)).easing(cc.easeSineOut()), cc.delayTime(.6), cc.spawn(cc.scaleTo(.4, .8), cc.bezierTo(.8, [ cc.v2(-600, 0), cc.v2(-700, 0), cc.v2(-323) ]).easing(cc.easeSineOut()))));
          nodeDTR.runAction(cc.sequence(cc.moveTo(.6, cc.v2(280, 0)).easing(cc.easeSineOut()), cc.delayTime(.6), cc.spawn(cc.scaleTo(.4, .8), cc.bezierTo(.8, [ cc.v2(600, 0), cc.v2(700, 0), cc.v2(323) ]).easing(cc.easeSineOut()))));
          _this.scheduleOnce(function() {
            nodeLB.zIndex = 0;
            nodeDTR.zIndex = 1;
            nodeDT.zIndex = 2;
            _this.parentItem.sortAllChildren();
            _this.onMask(nodeDT);
            btnNext.active = true;
            btnPre.active = true;
            btnSpin.active = true;
            btnNext.runAction(cc.fadeIn(.3));
            btnPre.runAction(cc.fadeIn(.3));
            btnSpin.runAction(cc.fadeIn(.3));
          }, 1.6);
        }, 1);
        Windown_1.Windown.DieuThuyen.audio.playChooseFreeType();
        Windown_1.Windown.DieuThuyen.stateSpin.countAutoSpin > 0 && this.scheduleOnce(this.autoChoose, 5);
      };
      NewClass.prototype.autoChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
          var count, i, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 5, , 6 ]);
              count = Windown_1.Windown.RandomNumber(1, 5);
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < count)) return [ 3, 4 ];
              this.onClickNext();
              return [ 4, Windown_1.Windown.DieuThuyen.makeDelay(.35) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              this.onClickXacNhan();
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
      NewClass.prototype.responseServer = function(sfsObj) {
        var _this = this;
        this.unschedule(this.autoChoose);
        Windown_1.Windown.Dialog.checkAndShowLog(sfsObj);
        cc.log(Windown_1.Windown.SFSObjToJson(sfsObj));
        this.typeFree = sfsObj.get("type");
        var numFre = sfsObj.get("numFree");
        Windown_1.Windown.DieuThuyen.stateSpin.lastTypeFree = this.typeFree;
        Windown_1.Windown.DieuThuyen.stateSpin.lastFreeSpinLeft = numFre;
        Windown_1.Windown.DieuThuyen.stateSpin.freeSpinLeft = numFre;
        Windown_1.Windown.DieuThuyen.setLbFreeSpinLeft(numFre);
        Windown_1.Windown.DieuThuyen.setMutilMoney();
        Windown_1.Windown.DieuThuyen.activeLbFree();
        Windown_1.Windown.DieuThuyen.activeNodeMutil();
        Windown_1.Windown.DieuThuyen.audio.offChooseFree();
        "freeLuBo" == this.typeFree ? Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.lv_bu_bg, 1, true) : "freeDieuThuyen" == this.typeFree ? Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.diao_chan_bg, 1, true) : Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.dong_zhuo_bg, .7);
        this.funNext && this.funNext();
        this.node.runAction(cc.sequence(cc.moveTo(.3, cc.v2(0, -1e3)), cc.callFunc(function() {
          _this.node.destroy();
        })));
      };
      NewClass.prototype.waitHandle = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.funNext = resolve;
        });
      };
      NewClass.prototype.onClickPre = function() {
        var _this = this;
        var children = this.parentItem.children;
        children.forEach(function(v) {
          v.stopAllActions();
        });
        children[2].runAction(cc.spawn(cc.scaleTo(.25, .8), cc.moveTo(.25, cc.v2(323)).easing(cc.easeSineOut())));
        children[1].runAction(cc.spawn(cc.scaleTo(.25, .8), cc.moveTo(.25, cc.v2(-323)).easing(cc.easeSineOut())));
        children[0].runAction(cc.spawn(cc.scaleTo(.25, 1), cc.moveTo(.25, cc.v2(0)).easing(cc.easeSineOut())));
        this.scheduleOnce(function() {
          children[2].zIndex = 1;
          children[1].zIndex = 0;
          children[0].zIndex = 2;
          _this.parentItem.sortAllChildren();
        }, .1);
        this.scheduleOnce(function() {
          _this.offAc(children[1]);
          _this.offAc(children[0]);
          _this.activeAc(children[2]);
        }, .25);
        this.offMask(children[2]);
        this.offMask(children[1]);
        this.onMask(children[0]);
      };
      NewClass.prototype.onClickNext = function() {
        var _this = this;
        var children = this.parentItem.children;
        children.forEach(function(v) {
          v.stopAllActions();
        });
        children[2].runAction(cc.spawn(cc.scaleTo(.25, .8), cc.moveTo(.25, cc.v2(-323)).easing(cc.easeSineOut())));
        children[1].runAction(cc.spawn(cc.scaleTo(.25, 1), cc.moveTo(.25, cc.v2(0)).easing(cc.easeSineOut())));
        children[0].runAction(cc.spawn(cc.scaleTo(.25, .8), cc.moveTo(.25, cc.v2(323)).easing(cc.easeSineOut())));
        this.scheduleOnce(function() {
          children[2].zIndex = 0;
          children[1].zIndex = 2;
          children[0].zIndex = 1;
          _this.parentItem.sortAllChildren();
        }, .1);
        this.scheduleOnce(function() {
          _this.offAc(children[1]);
          _this.offAc(children[0]);
          _this.activeAc(children[2]);
        }, .25);
        this.offMask(children[2]);
        this.offMask(children[0]);
        this.onMask(children[1]);
      };
      NewClass.prototype.offAc = function(nodeMain) {
        var node = nodeMain.children[0];
        for (var i = 2; i < 6; i++) node.children[i].stopAllActions();
        node.children[2].runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeOut(.2), cc.moveTo(.2, cc.v2(0, -784)).easing(cc.easeSineIn()))));
        node.children[3].runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeOut(.2), cc.moveTo(.2, cc.v2(0, -650)).easing(cc.easeSineIn()))));
        node.children[4].runAction(cc.sequence(cc.delayTime(.1), cc.spawn(cc.fadeOut(.2), cc.moveTo(.2, cc.v2(0, -766)).easing(cc.easeSineIn()))));
        node.children[5].runAction(cc.spawn(cc.fadeOut(.2), cc.moveTo(.2, cc.v2(0, -852)).easing(cc.easeSineIn())));
      };
      NewClass.prototype.activeAc = function(nodeMain) {
        var node = nodeMain.children[0];
        var spine = node.children[1].getComponent(sp.Skeleton);
        spine.setAnimation(0, "Idle_2", false);
        spine.addAnimation(0, "Idle_1", true);
        for (var i = 2; i < 6; i++) node.children[i].stopAllActions();
        node.children[2].runAction(cc.spawn(cc.fadeIn(.2), cc.moveTo(.2, cc.v2(0, -284)).easing(cc.easeSineOut())));
        node.children[3].runAction(cc.spawn(cc.fadeIn(.2), cc.moveTo(.2, cc.v2(0, -150)).easing(cc.easeSineOut())));
        node.children[4].runAction(cc.sequence(cc.delayTime(.1), cc.spawn(cc.fadeIn(.2), cc.moveTo(.2, cc.v2(0, -266)).easing(cc.easeSineOut()))));
        node.children[5].runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(.2), cc.moveTo(.2, cc.v2(0, -352)).easing(cc.easeSineOut()))));
      };
      NewClass.prototype.onClickXacNhan = function() {
        Windown_1.Windown.UIManager.showLoading();
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putUtfString("type", this.parentItem.children[2].name);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SelectTypeFree, sfsObj, Windown_1.Windown.DieuThuyen.roomSFS);
        this.unschedule(this.autoChoose);
      };
      NewClass.prototype.offMask = function(nodeMain) {
        var mask1 = nodeMain.children[1];
        var mask2 = nodeMain.children[2];
        mask1.runAction(cc.fadeOut(.2));
        mask2.runAction(cc.fadeOut(.2));
      };
      NewClass.prototype.onMask = function(nodeMain) {
        var mask1 = nodeMain.children[1];
        var mask2 = nodeMain.children[2];
        mask1.runAction(cc.fadeTo(.2, 150));
        mask2.runAction(cc.fadeTo(.2, 150));
      };
      NewClass.prototype.onDestroy = function() {
        this.unschedule(this.autoChoose);
        cc.systemEvent.removeAll(this);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ParticerDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bfa89x9ZKVMups0NCSFYhLV", "ParticerDieuThuyen");
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
        _this.xoc = null;
        _this.set = null;
        _this.listSfSet = [];
        _this.poolXoc = new cc.NodePool();
        _this.poolSet = new cc.NodePool();
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        var child = this.node.children;
        for (var i = 0, l = child.length; i < l; i++) {
          var v = child[0];
          "xoc" == v.name ? this.putXoc(v) : "set" == v.name ? this.putSet(v) : Windown_1.Windown.DieuThuyen.asset.putXu(v);
        }
        for (var i = 0; i < 100; i++) {
          var node = Windown_1.Windown.DieuThuyen.asset.getXu();
          node.parent = this.node;
          node.zIndex = 10;
          this.startXu(node, i % 3);
        }
        for (var i = 0; i < 80; i++) {
          var node = this.getXoc();
          node.parent = this.node;
          node.zIndex = 0;
          this.startXoc(node, i % 3);
        }
        for (var i = 0; i < 5; i++) {
          var node = this.getSet();
          node.parent = this.node;
          node.zIndex = 15;
          this.startSet(node, i % 3);
        }
      };
      NewClass.prototype.startXu = function(node, timeDelay) {
        var _this = this;
        node.opacity = 0;
        node.stopAllActions();
        var start = cc.v2(0, 0);
        var scaleStart = Windown_1.Windown.RandomNumber(200, 400) / 1e3;
        var scaleEnd = Windown_1.Windown.RandomNumber(200, 500) / 1e3;
        node.scale = scaleStart;
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
        var action1 = cc.spawn(cc.scaleTo(.3, scaleEnd), cc.moveTo(time, end));
        node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.callFunc(function() {
          node.opacity = 255;
          node.getComponent(cc.Animation).play("DongXu");
        }), action1, cc.callFunc(function() {
          _this.startXu(node, 0);
        })));
      };
      NewClass.prototype.startXoc = function(node, timeDelay) {
        var _this = this;
        node.opacity = 0;
        node.stopAllActions();
        var start = cc.v2(0, 0);
        var angle = Windown_1.Windown.RandomNumber(0, 360);
        var _a = this.pointsOnCircle({
          radius: 1e3,
          angle: angle,
          cx: 0,
          cy: 0
        }), x = _a[0], y = _a[1];
        var end = cc.v2(x, y);
        var time = Windown_1.Windown.RandomNumber(2, 3.5);
        timeDelay += Windown_1.Windown.RandomNumber(0, 10) / 10;
        node.angle = -angle - 90;
        node.setPosition(start);
        var action1 = cc.moveTo(time, end);
        node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.callFunc(function() {
          node.opacity = 150;
        }), action1, cc.callFunc(function() {
          _this.startXoc(node, 0);
        })));
      };
      NewClass.prototype.startSet = function(node, timeDelay) {
        var _this = this;
        node.opacity = 0;
        node.stopAllActions();
        node.getComponent(cc.Sprite).spriteFrame = this.listSfSet[Windown_1.Windown.RandomNumber(0, this.listSfSet.length)];
        var angle = Windown_1.Windown.RandomNumber(0, 360);
        timeDelay += Windown_1.Windown.RandomNumber(0, 10) / 10;
        node.angle = angle;
        var action1 = cc.delayTime(.2);
        node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.callFunc(function() {
          node.opacity = 255;
        }), action1, cc.callFunc(function() {
          _this.startSet(node, 0);
        })));
      };
      NewClass.prototype.setColor = function(color) {
        this.node.children.forEach(function(v) {
          "set" == v.name && (v.color = color);
        });
      };
      NewClass.prototype.pointsOnCircle = function(_a) {
        var radius = _a.radius, angle = _a.angle, cx = _a.cx, cy = _a.cy;
        angle *= Math.PI / 180;
        var x = cx + radius * Math.sin(angle);
        var y = cy + radius * Math.cos(angle);
        return [ x, y ];
      };
      NewClass.prototype.getXoc = function() {
        var node = null;
        if (this.poolXoc.size() > 0) node = this.poolXoc.get(); else {
          node = cc.instantiate(this.xoc);
          node.name = "xoc";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putXoc = function(node) {
        this.poolXoc.put(node);
      };
      NewClass.prototype.getSet = function() {
        var node = null;
        if (this.poolSet.size() > 0) node = this.poolSet.get(); else {
          node = cc.instantiate(this.set);
          node.name = "set";
        }
        node.active = true;
        return node;
      };
      NewClass.prototype.putSet = function(node) {
        this.poolSet.put(node);
      };
      NewClass.prototype.onDestroy = function() {
        this.poolXoc.clear();
        this.poolSet.clear();
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "xoc", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "set", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSfSet", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  SetingSpinDieuThuyen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac009iU6wdM/INsv+aR5c+R", "SetingSpinDieuThuyen");
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
        _this.mask = null;
        _this.toggleAuto = null;
        _this.btnStart = null;
        return _this;
      }
      NewClass.prototype.show = function() {
        var _this = this;
        this.node.active = true;
        this.reset();
        this.mask.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(.3, cc.v2(0, -340)), cc.callFunc(function() {
          _this.mask.runAction(cc.fadeTo(.3, 150));
        })));
      };
      NewClass.prototype.onToggleTypeSpin = function(event, data) {
        cc.log(event.node);
        var name = event.node.name;
        Windown_1.Windown.DieuThuyen.stateSpin.isMaxSpeed = "normal" != name;
      };
      NewClass.prototype.onToggleAutoSpin = function(event, data) {
        cc.log("toggle auto spin: ");
        var name = event.node.name;
        var count = Number(name);
        Windown_1.Windown.DieuThuyen.stateSpin.countAutoSpin = count;
        this.btnStart.interactable = true;
        this.btnStart.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#FF8E26");
      };
      NewClass.prototype.onClickStartSpin = function() {
        Windown_1.Windown.DieuThuyen.onClickBtnSpin();
        Windown_1.Windown.DieuThuyen.stateSpin.countAutoSpin > 0 && Windown_1.Windown.DieuThuyen.setCountAuto(Windown_1.Windown.DieuThuyen.stateSpin.countAutoSpin);
        this.onClickClose();
      };
      NewClass.prototype.reset = function() {
        this.toggleAuto.allowSwitchOff = true;
        this.toggleAuto.getComponentsInChildren(cc.Toggle).forEach(function(v) {
          v.isChecked && v.uncheck();
        });
        this.btnStart.interactable = false;
        this.btnStart.node.children[0].color = cc.Color.fromHEX(new cc.Color(), "#945F00");
      };
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        this.mask.opacity = 0;
        this.node.runAction(cc.sequence(cc.moveTo(.3, cc.v2(0, -958)), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "mask", void 0);
      __decorate([ property(cc.ToggleContainer) ], NewClass.prototype, "toggleAuto", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "btnStart", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  SpinNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04dba57PO1Mw6XX1o4+kZ6r", "SpinNormal");
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
    var StateReelSlot_1 = require("../../../../Scritps/DefineTs/StateReelSlot");
    var Util_1 = require("../../../../Scritps/Util");
    var Windown_1 = require("../../../../Scritps/Windown");
    var SpinNormal = function() {
      function SpinNormal() {
        this.listFunShowOceLine = [];
        this.funShowOceLine = null;
        this.listColum = [];
        this.effect = null;
        this.isMaxSpeed = false;
        this.isAutoSpin = false;
        this.lastAutoSpin = false;
        this.countAutoSpin = 0;
        this.lastFreeSpinLeft = 0;
        this.lastTypeFree = "BASSIC";
        this.lastFree3 = false;
        this.lastFree2 = false;
        this.freeSpinLeft = 0;
        this.moneyTotalFs = 0;
        this.listColum = Windown_1.Windown.DieuThuyen.listColum;
        this.effect = Windown_1.Windown.DieuThuyen.effect;
      }
      SpinNormal.prototype.onStart = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var i, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 7, , 8 ]);
                this.lastFree2 ? Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.slot_scrolling_two) : Windown_1.Windown.DieuThuyen.audio.playEffect(Windown_1.Windown.DieuThuyen.audio.slot_scrolling);
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < this.listColum.length)) return [ 3, 4 ];
                this.listColum[i].runSpin();
                if (!!this.isMaxSpeed) return [ 3, 3 ];
                return [ 4, this.makeDelay(.05) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                if (!this.isMaxSpeed) return [ 3, 6 ];
                return [ 4, this.makeDelay(.1) ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
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
      SpinNormal.prototype.onEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listSc, count, _i, _a, temp, e_2;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 9, , 10 ]);
              Windown_1.Windown.DieuThuyen.stateReel = StateReelSlot_1.default.STOP;
              listSc = Windown_1.Windown.DieuThuyen.getListActiveScaster();
              count = 0;
              _i = 0, _a = this.listColum;
              _b.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 6 ];
              temp = _a[_i];
              if (!!this.isMaxSpeed) return [ 3, 3 ];
              return [ 4, temp.stopSpin(listSc[count]) ];

             case 2:
              _b.sent();
              return [ 3, 4 ];

             case 3:
              temp.stopSpin(listSc[count]);
              _b.label = 4;

             case 4:
              count++;
              _b.label = 5;

             case 5:
              _i++;
              return [ 3, 1 ];

             case 6:
              if (!this.isMaxSpeed) return [ 3, 8 ];
              return [ 4, this.makeDelay(.25) ];

             case 7:
              _b.sent();
              _b.label = 8;

             case 8:
              Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.slot_scrolling);
              Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.slot_scrolling_two);
              this.handleStopAllColum();
              return [ 3, 10 ];

             case 9:
              e_2 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_2);
              return [ 3, 10 ];

             case 10:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormal.prototype.onForceEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _i, _a, temp, e_3;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 2, , 3 ]);
              for (_i = 0, _a = this.listColum; _i < _a.length; _i++) {
                temp = _a[_i];
                temp.forceStopSpin();
              }
              Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.slot_scrolling);
              Windown_1.Windown.DieuThuyen.audio.stopEffect(Windown_1.Windown.DieuThuyen.audio.slot_scrolling_two);
              return [ 4, this.makeDelay(.25) ];

             case 1:
              _b.sent();
              this.handleStopAllColum();
              return [ 3, 3 ];

             case 2:
              e_3 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_3);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormal.prototype.onShowAllLine = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var listIdLineAn, listActive_1, _loop_1, i, count_1;
            return __generator(this, function(_a) {
              try {
                listIdLineAn = Windown_1.Windown.DieuThuyen.listIdLineAn;
                if (listIdLineAn.length < 1) {
                  resolve(null);
                  return [ 2 ];
                }
                listActive_1 = [];
                _loop_1 = function(i) {
                  var list = listActive_1[i];
                  if (void 0 == list) {
                    list = [];
                    listActive_1[i] = list;
                  }
                  listIdLineAn.forEach(function(v) {
                    var listIdAn = v.listItem;
                    var indexItem = listIdAn[i];
                    void 0 == indexItem || list.includes(indexItem) || list.push(indexItem);
                  });
                };
                for (i = 0; i < 5; i++) _loop_1(i);
                count_1 = 0;
                listIdLineAn.forEach(function(v) {
                  Windown_1.Windown.DieuThuyen.parentLine.children[v.id - 1].active = true;
                });
                this.listColum.forEach(function(v) {
                  v.activeItem(listActive_1[count_1], true);
                  count_1++;
                });
                resolve(null);
              } catch (e) {
                Util_1.Util.ThrowErrProsime(e);
              }
              return [ 2 ];
            });
          });
        });
      };
      SpinNormal.prototype.handleStopAllColum = function() {
        Windown_1.Windown.DieuThuyen.stateReel = StateReelSlot_1.default.STOP;
        this.checkAndShowEffect();
        Windown_1.Windown.DieuThuyen.setStateEffBtnSpin();
      };
      SpinNormal.prototype.makeDelay = function(time) {
        return Windown_1.Windown.DieuThuyen.makeDelay(time);
      };
      SpinNormal.prototype.setUpShowOnceLine = function() {
        var _this = this;
        var listIdLineAn = Windown_1.Windown.DieuThuyen.listIdLineAn;
        Windown_1.Windown.DieuThuyen.stateReel = StateReelSlot_1.default.SHOW_EFFECT;
        Windown_1.Windown.DieuThuyen.setStateEffBtnSpin();
        Windown_1.Windown.DieuThuyen.activeAllBtn();
        this.listFunShowOceLine = [];
        listIdLineAn.forEach(function(v) {
          var listIdAn = v.listItem;
          var funTemp = function() {
            Windown_1.Windown.DieuThuyen.offAllLineWin();
            _this.listColum.forEach(function(v) {
              v.offAllItem();
            });
            Windown_1.Windown.DieuThuyen.showEffectMoneyPerLine(v.money);
            for (var i = 0, l = listIdAn.length; i < l; i++) {
              _this.listColum[i].activeItem([ listIdAn[i] ]);
              Windown_1.Windown.DieuThuyen.parentLine.children[v.id - 1].active = true;
            }
          };
          _this.listFunShowOceLine.push(funTemp);
        });
        var current = 0;
        Windown_1.Windown.DieuThuyen.schedule(this.funShowOceLine = function() {
          var fun = _this.listFunShowOceLine[current % _this.listFunShowOceLine.length];
          fun && fun();
          current++;
        }, 1.5, cc.macro.REPEAT_FOREVER, 0);
      };
      SpinNormal.prototype.resetForNextNextSpin = function() {
        var _this = this;
        cc.log("reset nor nex");
        this.listFunShowOceLine = [];
        Windown_1.Windown.DieuThuyen.showContentTip();
        Windown_1.Windown.DieuThuyen.unschedule(this.funShowOceLine);
        Windown_1.Windown.DieuThuyen.lb_Mn_Per_Line.node.active = false;
        this.listColum.forEach(function(v) {
          v.reset();
        });
        Windown_1.Windown.DieuThuyen.resetForNewGame();
        this.effect.resetFree3NewTurn();
        Windown_1.Windown.DieuThuyen.infoBar.showRdContent();
        this.freeSpinLeft > 0 ? Windown_1.Windown.DieuThuyen.scheduleOnce(function() {
          Windown_1.Windown.DieuThuyen.setLbFreeSpinLeft(_this.freeSpinLeft - 1);
          Windown_1.Windown.DieuThuyen.onClickBtnSpin();
        }, .5) : this.countAutoSpin > 0 ? Windown_1.Windown.DieuThuyen.scheduleOnce(function() {
          _this.countAutoSpin--;
          Windown_1.Windown.DieuThuyen.setCountAuto(_this.countAutoSpin);
          Windown_1.Windown.DieuThuyen.onClickBtnSpin();
        }, .5) : Windown_1.Windown.DieuThuyen.activeAllBtn();
      };
      SpinNormal.prototype.checkAndShowEffect = function() {
        return __awaiter(this, void 0, void 0, function() {
          var isFree2, isFree3, typeFs, e_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 16, , 17 ]);
              if (null == Windown_1.Windown.DieuThuyen.dataFinish) return [ 2 ];
              isFree2 = Windown_1.Windown.DieuThuyen.dataFinish.getBool("Scarter2");
              isFree3 = Windown_1.Windown.DieuThuyen.dataFinish.getBool("Scarter3");
              this.freeSpinLeft = Windown_1.Windown.DieuThuyen.dataFinish.get("numFreeSpin");
              typeFs = Windown_1.Windown.DieuThuyen.dataFinish.get("typeFreeSpin");
              this.lastFree3 && (this.moneyTotalFs += Windown_1.Windown.DieuThuyen.dataFinish.getLong("agWin"));
              if (!this.lastFree2) return [ 3, 2 ];
              return [ 4, this.effect.checkAndShowEffectItemFree2() ];

             case 1:
              _a.sent();
              return [ 3, 4 ];

             case 2:
              if (!this.lastFree3) return [ 3, 4 ];
              return [ 4, this.effect.checkAndShowEffectItemFree3() ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              isFree3 && (this.lastFree3 = isFree3);
              return [ 4, this.onShowAllLine() ];

             case 5:
              _a.sent();
              if (!Windown_1.Windown.DieuThuyen.getBo5()) return [ 3, 7 ];
              return [ 4, this.effect.showEffBo5() ];

             case 6:
              _a.sent();
              _a.label = 7;

             case 7:
              return [ 4, this.effect.showBigWin() ];

             case 8:
              _a.sent();
              if (!(1 == this.lastFreeSpinLeft && this.freeSpinLeft < 1 && this.lastFree3)) return [ 3, 11 ];
              return [ 4, this.effect.offFree3() ];

             case 9:
              _a.sent();
              cc.log("money total free la: " + this.moneyTotalFs);
              return [ 4, this.effect.showTtMnFs(this.moneyTotalFs) ];

             case 10:
              _a.sent();
              Windown_1.Windown.DieuThuyen.audio.playMusic();
              Windown_1.Windown.DieuThuyen.offLbFree();
              this.moneyTotalFs = 0;
              _a.label = 11;

             case 11:
              this.lastTypeFree = typeFs;
              this.lastFreeSpinLeft = this.freeSpinLeft;
              if (this.lastFree2) {
                Windown_1.Windown.DieuThuyen.actionShowBtnSpin();
                Windown_1.Windown.DieuThuyen.effect.offFree2();
              }
              this.lastFree2 = isFree2;
              0 == this.lastFreeSpinLeft && (this.lastFree3 = isFree3);
              if (!isFree3) return [ 3, 13 ];
              return [ 4, this.effect.showFreeSpin3() ];

             case 12:
              _a.sent();
              return [ 3, 15 ];

             case 13:
              if (!isFree2) return [ 3, 15 ];
              return [ 4, this.effect.showFreeSpin2() ];

             case 14:
              _a.sent();
              _a.label = 15;

             case 15:
              Windown_1.Windown.DieuThuyen.listIdLineAn.length > 0 && this.freeSpinLeft < 1 && this.countAutoSpin < 1 ? this.setUpShowOnceLine() : this.resetForNextNextSpin();
              return [ 3, 17 ];

             case 16:
              e_4 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_4);
              return [ 3, 17 ];

             case 17:
              return [ 2 ];
            }
          });
        });
      };
      SpinNormal.prototype.showMoneyRevice = function() {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          return __awaiter(_this, void 0, void 0, function() {
            var moneyRevice, e_5;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                _a.trys.push([ 0, 2, , 3 ]);
                moneyRevice = Windown_1.Windown.DieuThuyen.dataFinish.get("agWin");
                Windown_1.Windown.DieuThuyen.showMoneyAllWin(moneyRevice);
                return [ 4, Windown_1.Windown.DieuThuyen.infoBar.showTakeMoney(moneyRevice) ];

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
      SpinNormal.prototype.checkCointainLuBo = function() {};
      SpinNormal.prototype.checkContainDongChac = function() {};
      return SpinNormal;
    }();
    exports.default = SpinNormal;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/StateReelSlot": void 0,
    "../../../../Scritps/Util": void 0,
    "../../../../Scritps/Windown": void 0
  } ]
}, {}, [ "AssetDieuThuyen", "AudioDieuThuyen", "DetailHistoryDieuThuyen", "DieuThuyenView", "EffectDieuThuyen", "FreeController", "FreeDT", "FreeDTR", "FreeLuBo", "InfoBarController", "ItemLichSuDieuThuyen", "ItemLine", "ItemSlotDieuThuyen", "LichSuDieuThuyen", "NodeChooseFS", "ParticerDieuThuyen", "SetingSpinDieuThuyen", "SpinNormal" ]);