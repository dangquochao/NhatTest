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
  AssetTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba2c0nxtxJNaL0+6m2f3rYT", "AssetTruTien");
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
        _this.listSpMutilNormal = [];
        _this.listSpMutilFS = [];
        _this.itemIconEf = null;
        _this.itemEffNearWin = null;
        _this.itemFlyScater = null;
        _this.poolIconEf = new cc.NodePool();
        _this.poolEffNearWin = new cc.NodePool();
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
      NewClass.prototype.getFlyScater = function() {
        var node = cc.instantiate(this.itemFlyScater);
        node.active = true;
        return node;
      };
      NewClass.prototype.onDestroy = function() {
        this.poolIconEf.clear();
        this.poolEffNearWin.clear();
      };
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpItemBlur", void 0);
      __decorate([ property([ sp.SkeletonData ]) ], NewClass.prototype, "listSpItem", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSFItem", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpMutilNormal", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpMutilFS", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemIconEf", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemEffNearWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemFlyScater", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  AudioTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dce02PR3rFM5Ykn3YiRVpHG", "AudioTruTien");
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
        _this.bkgFree = null;
        _this.clickBtnSpin = null;
        _this.reelStop = null;
        _this.showwAllLine = null;
        _this.mutilAppear = null;
        _this.showMoneyFirt = null;
        _this.showMoneyFinal = null;
        _this.listNextMutilNormal = [];
        _this.listNextMutilFS = [];
        _this.scaterFly = null;
        _this.scaterDisapear = null;
        _this.xuatHienFree = null;
        _this.effFree = null;
        _this.xuatHien3IconJP = null;
        _this.showScater = null;
        _this.iconScater = null;
        _this.tienRoi = null;
        _this.startBigWin = null;
        _this.endBigWin = null;
        _this.tiengChemKiem = null;
        _this.showTotalFree = null;
        _this.jpFighting = null;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        this.playEffect(this.click);
      };
      NewClass.prototype.playMusic = function() {
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.4);
        }
      };
      NewClass.prototype.playNextMutilNormal = function(index) {
        if (index < 1) return;
        this.playEffect(this.listNextMutilNormal[index - 1]);
      };
      NewClass.prototype.playNextMutilFS = function(index) {
        if (index < 1) return;
        1 == index ? this.playEffect(this.listNextMutilFS[0]) : this.playEffect(this.listNextMutilFS[1]);
      };
      NewClass.prototype.playBkgFree = function() {
        this.stopMusic();
        this.playEffect(this.bkgFree, .8, true);
      };
      NewClass.prototype.endbkgFree = function() {
        this.playMusic();
        this.stopEffect(this.bkgFree);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "click", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bkgFree", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "clickBtnSpin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "reelStop", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "showwAllLine", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "mutilAppear", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "showMoneyFirt", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "showMoneyFinal", void 0);
      __decorate([ property([ cc.AudioClip ]) ], NewClass.prototype, "listNextMutilNormal", void 0);
      __decorate([ property([ cc.AudioClip ]) ], NewClass.prototype, "listNextMutilFS", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scaterFly", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "scaterDisapear", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "xuatHienFree", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "effFree", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "xuatHien3IconJP", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "showScater", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "iconScater", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tienRoi", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "startBigWin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "endBigWin", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tiengChemKiem", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "showTotalFree", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "jpFighting", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0
  } ],
  BonusTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6289Tl/11GnrT2YfsMYG9Y", "BonusTruTien");
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
        _this.sprItem = null;
        _this.sprItemOff = null;
        _this.sprItemXHeSo = null;
        _this.sprItemSpecial = null;
        _this.btn_quickOpen = null;
        _this.lb_ChipGet = null;
        _this.lb_hsBonus = null;
        _this.lb_time = null;
        _this.parentItem = null;
        _this.popupInfo = null;
        _this.lbChipWin = null;
        _this.lb_hsWin = null;
        _this.miniGame = null;
        _this.listItemMini = [];
        _this.listLb = [];
        _this.fontEgrypt = null;
        _this.listItem = [];
        _this.listItemClicked = [];
        _this.indexClick = 0;
        _this.totalBonusWin = 0;
        _this.curBonusWin = 0;
        _this.clickLeft = 0;
        _this.indexClickMiniGame = null;
        _this.dataBonus = [];
        _this.hsBonus = 1;
        _this.indexPos = cc.v2(-375, 145);
        _this.curTime = 15;
        _this.clickCheck = false;
        _this.itemBonusMini = null;
        _this.canTouch = false;
        _this.funNext = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.lb_ChipGet.string = "0";
        this.lb_hsBonus.string = "X1";
        this.indexClick = 0;
        this.totalBonusWin = 0;
        this.curBonusWin = 0;
        this.clickLeft = 0;
        this.listItemClicked = [];
        this.indexClickMiniGame = null;
        this.dataBonus = [];
        this.hsBonus = 1;
        this.popupInfo.zIndex = 10;
        this.curTime = 15;
        this.clickCheck = false;
        this.miniGame.scale = 0;
        this.itemBonusMini = null;
        this.canTouch = false;
        this.funNext = null;
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.initItem = function() {
        var _this = this;
        this.node.on("touchend", function(touch) {
          _this.canTouch && _this.handleTouch(touch);
        });
        var listChildren = this.parentItem.children;
        for (var i = 0, l = listChildren.length; i < l; i++) {
          var item = listChildren[i];
          this.listItem.push(item);
          item.scale = 0;
          cc.tween(item).to(.2, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
        }
        this.scheduleOnce(function() {
          _this.canTouch = true;
        }, .2);
      };
      NewClass.prototype.initBonus = function(dataBonus, funNext) {
        this.indexClick = 0;
        this.dataBonus = this.convertDataBonus(dataBonus);
        for (var i = 0; i < this.dataBonus.length; i++) this.totalBonusWin += this.dataBonus[i].chip;
        this.hsBonus = Windown_1.Windown.TruTien.dataFinish.startBonus;
        this.lb_hsBonus.string = "X" + this.hsBonus;
        this.clickLeft = this.dataBonus.length;
        this.funNext = funNext;
        this.curTime = Windown_1.Windown.TruTien.isMaxSpeed ? 5 : 15;
        this.initItem();
        this.onCountTime();
      };
      NewClass.prototype.convertDataBonus = function(data) {
        var arrData = data.split(";");
        var newList = [];
        for (var i = 0; i < arrData.length; i++) {
          var temp = arrData[i].split(",");
          temp = temp.map(function(x) {
            return parseInt(x);
          });
          var bonusData = {
            index: temp[0],
            idBonus: temp[1],
            chip: temp[3],
            mutiplier: temp[2]
          };
          newList.push(bonusData);
        }
        return newList;
      };
      NewClass.prototype.handleTouch = function(touch) {
        cc.log("chay vao handle touch");
        for (var i = 0; i < this.listItem.length; i++) {
          var item = this.listItem[i];
          if (item.getBoundingBoxToWorld().contains(touch.getLocation()) && !this.listItemClicked.includes(item)) {
            this.indexClick++;
            this.clickLeft--;
            this.handleClickItem(item);
            this.listItemClicked.push(item);
          }
        }
      };
      NewClass.prototype.playSound = function(resSound) {};
      NewClass.prototype.handleClickItem = function(itemNode) {
        var _this = this;
        if (this.clickLeft >= 0) {
          this.lb_hsBonus.string = "X" + this.hsBonus;
          this.clickCheck = true;
          for (var i = 0; i < this.dataBonus.length; i++) {
            var data = this.dataBonus[i];
            data.index === this.indexClick && this.effShowItem(itemNode, data);
          }
        }
        this.unscheduleAllCallbacks();
        0 === this.clickLeft && this.dataBonus[this.dataBonus.length - 1].idBonus >= 210 && setTimeout(function() {
          var msgData2 = {};
          msgData2[20] = Windown_1.Windown.TruTien.gameType;
          msgData2[1] = Windown_1.Windown.TruTien.indexRoom;
          require("SendRequest").getIns().MST_Client_Slot_Play_Bonus(msgData2);
          _this.onShowPopupInfo();
        }, 1e3);
      };
      NewClass.prototype.effShowItem = function(item, data) {
        var _this = this;
        var idItem = data.idBonus;
        var posItem = this.parentItem.convertToWorldSpaceAR(item.position);
        var poslb = this.node.convertToNodeSpaceAR(posItem);
        if (idItem > 210) {
          var str = Windown_1.Windown.formatMoney(data.chip);
          cc.log("str la " + str);
          var lbChip = this.createLb(str, poslb);
          this.curBonusWin += data.chip;
          this.node.addChild(lbChip.node, this.popupInfo.zIndex - 1);
          lbChip.node.scale = 0;
          lbChip.node.runAction(cc.scaleTo(.2, 1).easing(cc.easeBackOut()));
          this.lb_ChipGet.getComponent("LbMonneyChange").setMoney(this.curBonusWin);
          item.getComponentInChildren(cc.Sprite).spriteFrame = this.sprItemOff;
        } else if (210 === idItem) {
          this.hsBonus++;
          item.getComponentInChildren(cc.Sprite).spriteFrame = this.sprItemXHeSo;
          var nodeClone_1 = cc.instantiate(item);
          nodeClone_1.scale = .4;
          this.node.addChild(nodeClone_1, this.popupInfo.zIndex - 1);
          nodeClone_1.runAction(cc.sequence(cc.moveTo(.5, this.lb_hsBonus.node.getPosition()), cc.callFunc(function() {
            _this.lb_hsBonus.string = "X" + _this.hsBonus;
            _this.lb_hsBonus.node.runAction(cc.sequence(cc.scaleBy(.1, .1), cc.scaleTo(.1, 1)));
            nodeClone_1.destroy();
          })));
          item.scale = 0;
          item.runAction(cc.scaleTo(.2, 1).easing(cc.easeBackOut()));
        } else {
          item.getComponentInChildren(cc.Sprite).spriteFrame = this.sprItemSpecial;
          this.itemBonusMini = item;
          this.miniGame.active = true;
          this.miniGame.getComponent(cc.Sprite).enabled = false;
          this.miniGame.getChildByName("lb_title").active = false;
          this.miniGame.zIndex = 50;
          this.miniGame.position = item.position;
          this.miniGame.runAction(cc.sequence(cc.spawn(cc.moveTo(.5, cc.v2(0, 0)).easing(cc.easeSineOut()), cc.scaleTo(.5, 1).easing(cc.easeSineOut())), cc.callFunc(function() {
            _this.miniGame.getComponent(cc.Sprite).enabled = true;
            _this.miniGame.getChildByName("lb_title").active = true;
          })));
          this.node.off("touchend");
          this.indexClickMiniGame = null;
          for (var i = 0; i < this.listItemMini.length; i++) this.listItemMini[i].on("touchend", function(touch) {
            _this.handleTouchMiniItem(touch, data);
          });
        }
      };
      NewClass.prototype.handleClickMiniItem = function(index, data) {
        var _this = this;
        var dataChip = data.chip;
        this.listLb[index].string = Windown_1.Windown.formatMoney(dataChip);
        cc.log("chip get dc la " + this.listLb[index].string);
        var listRanChip = [ dataChip, dataChip + dataChip / 2, dataChip + dataChip / 4, dataChip - dataChip / 2, dataChip - dataChip / 4 ];
        var count = 1;
        this.listItemMini[index].getComponent(cc.Sprite).spriteFrame = this.sprItemOff;
        this.listLb[index].node.active = true;
        for (var i = 0; i < this.listItemMini.length; i++) this.listItemMini[i].off("touchend");
        this.scheduleOnce(function() {
          _this.resetMiniGame(index);
          var chip = Windown_1.Windown.formatMoney(dataChip);
          var posItem = _this.parentItem.convertToWorldSpaceAR(_this.itemBonusMini.position);
          var poslb = _this.node.convertToNodeSpaceAR(posItem);
          var lbChip = _this.createLb(chip, poslb);
          _this.node.addChild(lbChip.node);
          _this.curBonusWin += dataChip;
          _this.lb_ChipGet.getComponent("LbMonneyChange").setMoney(_this.curBonusWin);
          _this.node.on("touchend", function(touch) {
            _this.canTouch && _this.handleTouch(touch);
          });
          0 === _this.clickLeft && _this.onClickQuickOpen();
        }, 2);
      };
      NewClass.prototype.handleTouchMiniItem = function(touch, data) {
        for (var i = 0; i < this.listItemMini.length; i++) if (this.listItemMini[i].getBoundingBoxToWorld().contains(touch.getLocation()) && i != this.indexClickMiniGame) {
          this.indexClickMiniGame = i;
          this.handleClickMiniItem(i, data);
        }
      };
      NewClass.prototype.createLb = function(str, pos) {
        var lbChip = new cc.Node("hsWin");
        var lbChipWin = lbChip.addComponent(cc.Label);
        lbChipWin.font = this.fontEgrypt;
        lbChipWin.string = str;
        lbChipWin.fontSize = 40;
        lbChipWin.lineHeight = 40;
        lbChip.setPosition(cc.v2(pos.x, pos.y - 20));
        return lbChipWin;
      };
      NewClass.prototype.onClickQuickOpen = function() {
        this.unscheduleAllCallbacks();
        this.clickCheck = true;
        this.onShowPopupInfo();
        this.miniGame.active = false;
      };
      NewClass.prototype.onCloseInfoNode = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.popupInfo, function() {
          _this.popupInfo.active = false;
          Windown_1.Windown.TruTien.effectShowItemWithBonusGame();
          _this.funNext();
          _this.onClose();
        });
      };
      NewClass.prototype.onShowPopupInfo = function() {
        var _this = this;
        this.popupInfo.active = true;
        this.lbChipWin.node.getComponent("LbMonneyChange").setMoney(this.totalBonusWin);
        Windown_1.Windown.TruTien.isAutoSpin && this.scheduleOnce(function() {
          _this.onCloseInfoNode();
        }, 2);
      };
      NewClass.prototype.onCountTime = function() {
        var _this = this;
        this.schedule(function() {
          if (!_this.clickCheck && _this.curTime > 0) {
            _this.curTime--;
            _this.lb_time.string = "T\u1ef1 \u0111\u1ed9ng ch\u01a1i sau: " + _this.curTime + "s";
          } else 0 === _this.curTime && _this.onClickQuickOpen();
        }, 1);
      };
      NewClass.prototype.onClose = function() {
        this.hsBonus = 1;
        this.node.destroy();
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.TruTien.sendEndBonsuServer();
      };
      NewClass.prototype.resetMiniGame = function(index) {
        this.miniGame.active = false;
        this.miniGame.scale = 0;
        for (var i = 0; i < this.listItemMini.length; i++) {
          this.listItemMini[i].getComponent(cc.Sprite).spriteFrame = this.sprItem;
          this.listLb[i].node.active = false;
          this.listItemMini[i].off("touchend");
        }
        this.listLb[index].node.y -= 40;
        this.listLb[index].node.scale = 1;
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "sprItem", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "sprItemOff", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "sprItemXHeSo", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "sprItemSpecial", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "btn_quickOpen", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_ChipGet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_hsBonus", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_time", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "popupInfo", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbChipWin", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lb_hsWin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "miniGame", void 0);
      __decorate([ property([ cc.Node ]) ], NewClass.prototype, "listItemMini", void 0);
      __decorate([ property([ cc.Label ]) ], NewClass.prototype, "listLb", void 0);
      __decorate([ property(cc.Font) ], NewClass.prototype, "fontEgrypt", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0,
    SendRequest: void 0
  } ],
  DetailHistoryTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c4903dZDxOZLSQYoLN6uR3", "DetailHistoryTruTien");
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
        _this.parentItem = null;
        _this.lbTitle = null;
        _this.lbTime = null;
        _this.lbBet = null;
        _this.lbWin = null;
        _this.lbMNUser = null;
        _this.lbMultil = null;
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
        var obj = JSON.parse(jsonResult);
        this.isFreeSpin = obj.freeSpin;
        var listResult = JSON.parse(obj.views);
        this.setResult(listResult);
        this.setLineAn(obj.listLineWin, listResult);
        obj.isTakeJP ? this.lbTitle.string = "N\u1ed5 H\u0169" : obj.freeSpin ? this.lbTitle.string = "Quay mi\u1ec5n ph\xed" : this.lbTitle.string = "Quay th\u01b0\u1eddng";
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(date), "dd/MM HH:mm:ss");
        this.lbBet.string = Windown_1.Windown.formatNumber(50 * obj.agBet);
        this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        this.lbMNUser.string = Windown_1.Windown.formatNumber(obj.agUser);
        this.lbMultil.string = "x" + obj.rankNow;
      };
      NewClass.prototype.setResult = function(list) {
        var childItemColum = this.parentItem.children;
        for (var i = 0; i < list.length; i++) {
          var resultColum = list[i];
          for (var j = 0; j < resultColum.length; j++) {
            var idResult = resultColum[j];
            8 == idResult && this.isFreeSpin && (idResult = 9);
            childItemColum[i].children[j].getComponent(cc.Sprite).spriteFrame = Windown_1.Windown.TruTien.asset.listSFItem[idResult];
            childItemColum[i].children[j].color = this.colorOf;
          }
        }
      };
      NewClass.prototype.setLineAn = function(list, listResult) {
        var childItemColum = this.parentItem.children;
        var parItemLine = this.parentItemLine;
        var childItemLine = parItemLine.children;
        var itemLineTemp = childItemLine[0];
        for (var i = 0, l = list.length; i < l; i++) {
          var SFSObject = list[i];
          var idLine = SFSObject.id;
          var moneyWin = SFSObject.agWinLine;
          var id = idLine;
          id < 10 && (id = "0" + id);
          var money = moneyWin;
          var listItem = Windown_1.Windown.TruTien.getListActiveByIdLine(idLine, listResult);
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
        Windown_1.Windown.TruTien.audio.playClick();
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
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMultil", void 0);
      __decorate([ property(cc.SpriteAtlas) ], NewClass.prototype, "spAtlas", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemLine", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "colorOf", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  EffectTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b51efvUXtZF4qRbHvrUFst+", "EffectTruTien");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.lb_Money = null;
        _this.spTotalWin = null;
        _this.spBigWin = null;
        _this.spBkgFree = null;
        _this.spBkgNor = null;
        _this.spBkg = null;
        _this.nodeJP = null;
        _this.funNext = null;
        _this.funDelayOff = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.funNext = null;
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
      NewClass.prototype.showJackpot = function(funNext) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var lbMoneyJp, ske, sfsObj, e_1;
          var _this = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 5, , 6 ]);
              this.nodeJP.active = true;
              lbMoneyJp = cc.find("label", this.nodeJP).getComponent(LbMoneyChange_1.default);
              lbMoneyJp.resetLb();
              lbMoneyJp.node.active = false;
              this.nodeJP.opacity = 0;
              this.nodeJP.stopAllActions();
              this.nodeJP.runAction(cc.fadeIn(.5));
              ske = cc.find("ef_jackpot_spine", this.nodeJP).getComponent(sp.Skeleton);
              ske.setAnimation(0, "idle", true);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(1) ];

             case 1:
              _b.sent();
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.jpFighting);
              this.scheduleOnce(function() {
                Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tiengChemKiem);
                _this.scheduleOnce(function() {
                  Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tiengChemKiem);
                }, 1);
              }, 2);
              ske.setAnimation(0, "appear_jp", false);
              ske.addAnimation(0, "loop_jp", true);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(4.5) ];

             case 2:
              _b.sent();
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tienRoi);
              lbMoneyJp.time = 6;
              lbMoneyJp.node.active = true;
              lbMoneyJp.setMoney(null === (_a = Windown_1.Windown.TruTien.dataFinish) || void 0 === _a ? void 0 : _a.get("agWin"));
              return [ 4, Windown_1.Windown.TruTien.makeDelay(10) ];

             case 3:
              _b.sent();
              Windown_1.Windown.TruTien.audio.stopEffect(Windown_1.Windown.TruTien.audio.tienRoi);
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.scaterDisapear);
              lbMoneyJp.node.active = false;
              ske.setAnimation(0, "merge_jp", false);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(1) ];

             case 4:
              _b.sent();
              if (Windown_1.Windown.TruTien.dataFinish) {
                sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                sfsObj.putInt("gt", GAME_TYPE_1.default.TruTien);
                sfsObj.putInt("mt", Windown_1.Windown.TruTien.dataFinish.get("agWin"));
                sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
                sfsObj.putUtfString("dt", "nh");
                ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
              }
              this.nodeJP.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                funNext();
              })));
              return [ 3, 6 ];

             case 5:
              e_1 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_1);
              return [ 3, 6 ];

             case 6:
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.showBigWin = function(funNext) {
        return __awaiter(this, void 0, void 0, function() {
          var money, moneyBet, timeLb, sfsObj, e_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 7, , 8 ]);
              if (null == Windown_1.Windown.TruTien.dataFinish) return [ 2 ];
              money = Windown_1.Windown.TruTien.dataFinish.get("agWin");
              moneyBet = Windown_1.Windown.TruTien.curRoomBet * Windown_1.Windown.TruTien.totalLineBet;
              if (money < 10 * moneyBet) {
                funNext();
                return [ 2 ];
              }
              timeLb = 3;
              this.node.active = true;
              this.node.runAction(cc.fadeIn(.5));
              this.spBigWin.node.active = true;
              this.nodeMask.active = true;
              money > 15 * moneyBet ? timeLb = 6 : money > 20 * moneyBet && (timeLb = 9);
              this.lb_Money.node.active = true;
              this.lb_Money.time = timeLb;
              this.lb_Money.node.setPosition(0, -72.236);
              this.lb_Money.setMoney(money);
              this.spBigWin.setAnimation(0, "win_1_appear", false);
              this.spBigWin.addAnimation(0, "win_1_loop", true);
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tiengChemKiem);
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tienRoi, 1, true);
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.startBigWin, 1, true);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(3) ];

             case 1:
              _a.sent();
              if (!(money > 15 * moneyBet)) return [ 3, 3 ];
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tiengChemKiem);
              this.spBigWin.setAnimation(0, "win_2_appear", false);
              this.spBigWin.addAnimation(0, "win_2_loop", true);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(3) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              if (!(money > 20 * moneyBet)) return [ 3, 5 ];
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.tiengChemKiem);
              this.spBigWin.setAnimation(0, "win_3_appear", false);
              this.spBigWin.addAnimation(0, "win_3_loop", true);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(3) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              Windown_1.Windown.TruTien.audio.stopEffect(Windown_1.Windown.TruTien.audio.tienRoi);
              Windown_1.Windown.TruTien.audio.stopEffect(Windown_1.Windown.TruTien.audio.startBigWin);
              return [ 4, Windown_1.Windown.TruTien.audio.playEffectSync(Windown_1.Windown.TruTien.audio.endBigWin) ];

             case 6:
              _a.sent();
              sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("gt", GAME_TYPE_1.default.TruTien);
              sfsObj.putInt("mt", money);
              sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
              sfsObj.putUtfString("dt", "bw");
              ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
              this.funNext = funNext;
              this.onClose();
              return [ 3, 8 ];

             case 7:
              e_2 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_2);
              return [ 3, 8 ];

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.showFreeSpin = function(funNext) {
        return __awaiter(this, void 0, void 0, function() {
          var nodeFree, ske, e_3;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 4, , 5 ]);
              this.node.active = true;
              this.node.runAction(cc.fadeIn(.5));
              Windown_1.Windown.TruTien.listColum.forEach(function(v) {
                v.showFLyScaster();
              });
              return [ 4, Windown_1.Windown.TruTien.makeDelay(1.5) ];

             case 1:
              _a.sent();
              Windown_1.Windown.TruTien.audio.playNextMutilNormal(3);
              this.spBkg.node.stopAllActions();
              this.spBkg.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                _this.spBkg.spriteFrame = _this.spBkgFree;
              }), cc.fadeIn(.5)));
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.xuatHienFree);
              Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.effFree);
              this.nodeMask.active = true;
              Windown_1.Windown.TruTien.setupTextMutil();
              Windown_1.Windown.TruTien.setUpNodeMutil(1);
              nodeFree = cc.find("ef_free_game_spine", this.node);
              nodeFree.active = true;
              ske = nodeFree.getComponent(sp.Skeleton);
              ske.setAnimation(0, "fade_out", false);
              return [ 4, Windown_1.Windown.TruTien.makeDelay(5) ];

             case 2:
              _a.sent();
              this.nodeMask.runAction(cc.fadeOut(.3));
              return [ 4, Windown_1.Windown.TruTien.makeDelay(1.5) ];

             case 3:
              _a.sent();
              Windown_1.Windown.TruTien.audio.playBkgFree();
              this.funNext = funNext;
              this.onClose();
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
      NewClass.prototype.showBonus = function(funNext) {};
      NewClass.prototype.showTtMnFs = function(money, funNext) {
        var _this = this;
        if (money < 1) {
          funNext();
          Windown_1.Windown.TruTien.audio.endbkgFree();
          Windown_1.Windown.TruTien.audio.stopEffect(Windown_1.Windown.TruTien.audio.showTotalFree);
          Windown_1.Windown.TruTien.setupTextMutil();
          Windown_1.Windown.TruTien.setUpNodeMutil(1);
          return;
        }
        this.nodeMask.active = true;
        this.node.active = true;
        this.node.runAction(cc.fadeIn(.5));
        this.spTotalWin.node.active = true;
        this.spTotalWin.setAnimation(0, "appear_win", false);
        this.spTotalWin.addAnimation(0, "win_loop", false);
        this.lb_Money.time = 3;
        this.lb_Money.node.active = true;
        this.lb_Money.node.setPosition(0, -72.236);
        this.lb_Money.resetLb();
        this.lb_Money.setMoney(money);
        this.funNext = function() {
          funNext();
          Windown_1.Windown.TruTien.showTotalMoneyFree(money);
          Windown_1.Windown.TruTien.setupTextMutil();
          Windown_1.Windown.TruTien.setUpNodeMutil(1);
        };
        Windown_1.Windown.TruTien.audio.endbkgFree();
        Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.showTotalFree);
        this.spBkg.node.stopAllActions();
        this.spBkg.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
          _this.spBkg.spriteFrame = _this.spBkgNor;
        }), cc.fadeIn(.5)));
        this.scheduleOnce(function() {
          _this.onClose();
          Windown_1.Windown.TruTien.audio.stopEffect(Windown_1.Windown.TruTien.audio.showTotalFree);
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putInt("gt", GAME_TYPE_1.default.TruTien);
          sfsObj.putInt("mt", money);
          sfsObj.putUtfString("nn", Windown_1.Windown.User.nickName);
          sfsObj.putUtfString("dt", "fs");
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
        }, 4.5);
      };
      NewClass.prototype.resetView = function() {
        cc.find("ef_free_game_spine", this.node).active = false;
        this.lb_Money.node.active = false;
        this.nodeMask.active = false;
        this.nodeMask.opacity = 150;
        this.node.opacity = 255;
        this.spTotalWin.node.active = false;
        this.spBigWin.node.active = false;
      };
      NewClass.prototype.onClose = function() {
        var _this = this;
        this.unschedule(this.funDelayOff);
        this.unschedule(this.onClose);
        this.resetView();
        this.lb_Money.node.getComponent(LbMoneyChange_1.default).resetLb();
        this.funNext && this.funNext();
        this.funNext = null;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      NewClass.prototype.resetBackGame = function() {
        this.unschedule(this.funDelayOff);
        this.unschedule(this.onClose);
        this.resetView();
        this.lb_Money.node.getComponent(LbMoneyChange_1.default).resetLb();
        this.funNext = null;
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMask", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "lb_Money", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "spTotalWin", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "spBigWin", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "spBkgFree", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "spBkgNor", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "spBkg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeJP", void 0);
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
    "../../../Scritps/Windown": void 0
  } ],
  HelpTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64da4M2APhEE6JRHGcrLsbP", "HelpTruTien");
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
  ItemLichSuTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4c6c5A1KVDEJppFI6sH6nm", "ItemLichSuTruTien");
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
          this.lbBet.string = Windown_1.Windown.formatNumber(50 * obj.agBet);
          this.lbWin.string = Windown_1.Windown.formatNumber(obj.agWin);
        } catch (e) {
          console.error(e);
        }
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.TruTien.audio.playClick();
        Windown_1.Windown.TruTien.popupLichSu.showDetail(this.data);
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
  ItemSlotTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69a2bPXxmdK8bTyBzsX7Ctt", "ItemSlotTruTien");
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
        _this.nodeEffNearWin = null;
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
          this.nodeEffNearWin = Windown_1.Windown.TruTien.asset.getNearWin();
          this.nodeEffNearWin.parent = Windown_1.Windown.TruTien.parentItem;
          this.nodeEffNearWin.setPosition(this.node.x, -230);
        }
        this.nodeEffNearWin.active = true;
        var listColum = Windown_1.Windown.TruTien.listColum;
        for (var i = 0; i < listColum.length - 1; i++) listColum[i].offAllItemNoScater();
        Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.showScater);
      };
      NewClass.prototype.offNearWin = function() {
        this.nodeEffNearWin && (this.nodeEffNearWin.active = false);
        var listColum = Windown_1.Windown.TruTien.listColum;
        for (var i = 0; i < listColum.length - 1; i++) listColum[i].activeAllItemNoScater();
        Windown_1.Windown.TruTien.audio.stopEffect(Windown_1.Windown.TruTien.audio.showScater);
      };
      NewClass.prototype.setResult = function(listId) {
        this.result = listId;
        var listNode = this.getListItemSp();
        for (var i = 0, l = listNode.length; i < l; i++) {
          var cpSp = listNode[i].getComponentInChildren(sp.Skeleton);
          var cpSprite = listNode[i].getComponentInChildren(cc.Sprite);
          var id = listId[i];
          cpSp.node.active = !(id < 5);
          Windown_1.Windown.TruTien.lastFreeSpinLeft > 0 && 8 == id && (id = 9);
          cpSp.skeletonData = Windown_1.Windown.TruTien.asset.listSpItem[id];
          cpSprite.spriteFrame = Windown_1.Windown.TruTien.asset.listSFItem[id];
          if (id < 5) ; else {
            cpSp.clearTracks();
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
          var cpSp = node.getComponentInChildren(sp.Skeleton);
          cpSp.node.active = true;
          cpSp.setAnimation(0, "active", true);
          _this.playAniActive(v, isAll);
        });
      };
      NewClass.prototype.checkActiveItemWhenStop = function() {
        var listNode = this.getListItemSp();
        for (var i = 0; i < this.result.length; i++) if (this.result[i] > 4) {
          var node = listNode[i];
          var cpSp = node.getComponentInChildren(sp.Skeleton);
          cpSp.setAnimation(0, "active", false);
          cpSp.addAnimation(0, "idle", true);
        }
      };
      NewClass.prototype.offAllItem = function() {
        this.getListItemSp().forEach(function(v) {
          v.children[0].color = cc.Color.GRAY;
          v.children[1].active = false;
        });
        this.listIconEff.forEach(function(v) {
          Windown_1.Windown.TruTien.asset.putIconEf(v);
        });
        this.listIconEff = [];
      };
      NewClass.prototype.showFLyScaster = function() {
        var indexScater = -1;
        for (var temp in this.result) 8 == this.result[temp] && (indexScater = parseInt(temp));
        if (-1 != indexScater) {
          var itemFly_1 = Windown_1.Windown.TruTien.asset.getFlyScater();
          itemFly_1.parent = Windown_1.Windown.TruTien.effect.node;
          itemFly_1.setPosition(this.getPointItem(indexScater, itemFly_1.parent));
          var pointTarget = cc.v2(7, 222);
          var diff = pointTarget.clone().subSelf(itemFly_1.getPosition());
          var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
          itemFly_1.angle = -angle;
          var ske_1 = itemFly_1.getComponent(sp.Skeleton);
          ske_1.setAnimation(0, "fly_scatter", true);
          Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.scaterFly);
          itemFly_1.runAction(cc.sequence(cc.moveTo(1, pointTarget), cc.callFunc(function() {
            Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.scaterDisapear);
            ske_1.setAnimation(0, "fade_out_scatter", false);
            ske_1.setCompleteListener(function() {
              ske_1.setCompleteListener(null);
              itemFly_1.destroy();
            });
          })));
        }
      };
      NewClass.prototype.offAllItemNoScater = function() {
        var listNode = this.getListItemSp();
        for (var i = 0; i < listNode.length; i++) if (8 != this.result[i]) {
          var v = listNode[i];
          v.children[0].color = cc.Color.GRAY;
          v.children[1].color = cc.Color.GRAY;
        }
      };
      NewClass.prototype.activeAllItemNoScater = function() {
        var listNode = this.getListItemSp();
        for (var i = 0; i < listNode.length; i++) if (8 != this.result[i]) {
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
          var id = listId[i];
          if (id < 5) cpSp.node.active = false; else {
            cpSp.node.active = true;
            cpSp.clearTracks();
            cpSp.setAnimation(0, "idle", true);
          }
        }
        this.listIconEff.forEach(function(v) {
          Windown_1.Windown.TruTien.asset.putIconEf(v);
        });
        this.listIconEff = [];
      };
      NewClass.prototype.playAniActive = function(index, isAll) {
        void 0 === isAll && (isAll = false);
        var nodeSke = Windown_1.Windown.TruTien.asset.getIconEf();
        nodeSke.parent = Windown_1.Windown.TruTien.parentItem;
        nodeSke.setPosition(this.getPointItem(index, Windown_1.Windown.TruTien.parentItem));
        this.listIconEff.push(nodeSke);
        var ske = nodeSke.getComponent(sp.Skeleton);
        if (isAll) {
          ske.setAnimation(0, "idle", false);
          ske.addAnimation(0, "idle_info", true);
        } else ske.setAnimation(0, "tap", false);
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
            Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.reelStop);
          });
          var deltal = Windown_1.Windown.TruTien.isMaxSpeed ? 2 : 1;
          var actionMoveDown = cc.moveBy(.12, 0, -60).easing(cc.easeSineOut());
          var actionMoveUp = cc.moveBy(.12, 0, 60).easing(cc.easeSineIn());
          var acNext = cc.callFunc(function() {
            _this.funReject = null;
            resolve(null);
            _this.checkActiveItemWhenStop();
            _this.result.includes(8) && Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.iconScater);
          });
          _this.node.stopAllActions();
          if (isScarter && !Windown_1.Windown.TruTien.isMaxSpeed) {
            _this.activeNodeNearWin();
            _this.node.runAction(cc.sequence(cc.delayTime(3.3), funCall, actionMoveDown, cc.callFunc(_this.offNearWin, _this), actionMoveUp, acNext));
          } else _this.node.runAction(cc.sequence(funCall, actionMoveDown, actionMoveUp, acNext));
        });
      };
      NewClass.prototype.forceStopSpin = function(isScarter) {
        var _this = this;
        if (this.funReject) {
          this.funReject(null);
          this.funReject = null;
        }
        if (this.stateWhel == StateSpin.Run) {
          var funCall = cc.callFunc(function() {
            _this.stateWhel = StateSpin.Stop;
            _this.node.y = 0;
            _this.parentItem.active = true;
            _this.parentBlur.active = false;
            Windown_1.Windown.TruTien.audio.playEffect(Windown_1.Windown.TruTien.audio.reelStop);
          });
          var deltal = Windown_1.Windown.TruTien.isMaxSpeed ? 2 : 1;
          var actionMoveDown = cc.moveBy(.12, 0, -60).easing(cc.easeSineOut());
          var actionMoveUp = cc.moveBy(.12, 0, 60).easing(cc.easeSineIn());
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
        itemFake1.getComponentInChildren(sp.Skeleton).skeletonData = Windown_1.Windown.TruTien.asset.listSpItem[rdFake1];
        itemFake2.getComponentInChildren(sp.Skeleton).skeletonData = Windown_1.Windown.TruTien.asset.listSpItem[rdFake2];
        var childrenBlur = this.parentBlur.getComponentsInChildren(cc.Sprite);
        var length = childrenBlur.length;
        childrenBlur[6].spriteFrame = Windown_1.Windown.TruTien.asset.listSpItemBlur[rdFake1];
        childrenBlur[7].spriteFrame = Windown_1.Windown.TruTien.asset.listSpItemBlur[this.result[0]];
        childrenBlur[8].spriteFrame = Windown_1.Windown.TruTien.asset.listSpItemBlur[this.result[1]];
        for (var i = 0; i < length - 3; i++) {
          var rd = Windown_1.Windown.RandomNumber(0, 10);
          childrenBlur[i].spriteFrame = Windown_1.Windown.TruTien.asset.listSpItemBlur[rd];
        }
      };
      NewClass.prototype.loopBlur = function() {
        var childrenBlur = this.parentBlur.getComponentsInChildren(cc.Sprite);
        var length = childrenBlur.length;
        for (var i = length - 3; i < length; i++) childrenBlur[i].spriteFrame = childrenBlur[i - length + 3].spriteFrame;
        for (var i = 0; i < length - 3; i++) {
          var rd = Windown_1.Windown.RandomNumber(0, 10);
          childrenBlur[i].spriteFrame = Windown_1.Windown.TruTien.asset.listSpItemBlur[rd];
        }
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
    "../../../Scritps/Windown": void 0
  } ],
  LichSuTruTien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8e8eI7z1BIC5UFl1aqFdLh", "LichSuTruTien");
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
    var DetailHistoryTruTien_1 = require("./DetailHistoryTruTien");
    var ItemLichSuTruTien_1 = require("./ItemLichSuTruTien");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuTruTien = function(_super) {
      __extends(LichSuTruTien, _super);
      function LichSuTruTien() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.detail = null;
        _this.listData = null;
        _this.maxRow = 11;
        return _this;
      }
      LichSuTruTien.prototype.show = function() {
        this.node.active = true;
        this.reset();
        this.node.y = -1280;
        this.node.stopAllActions();
        this.node.runAction(cc.moveTo(.3, 0, 0));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HistoryTruTien, null, Windown_1.Windown.TruTien.roomSFS);
        Windown_1.Windown.UIManager.showLoading();
      };
      LichSuTruTien.prototype.responseServer = function(sfsObj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = sfsObj.getSFSArray("history");
        this.initWithListData(sfsArr);
      };
      LichSuTruTien.prototype.initWithListData = function(listData) {
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
      LichSuTruTien.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuTruTien_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuTruTien.prototype.showDetail = function(SFSObject) {
        this.detail.show(SFSObject);
      };
      LichSuTruTien.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuTruTien.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuTruTien.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.TruTien.audio.playClick();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      __decorate([ property(PageData_1.default) ], LichSuTruTien.prototype, "pageDate", void 0);
      __decorate([ property(DetailHistoryTruTien_1.default) ], LichSuTruTien.prototype, "detail", void 0);
      LichSuTruTien = __decorate([ ccclass ], LichSuTruTien);
      return LichSuTruTien;
    }(cc.Component);
    exports.default = LichSuTruTien;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./DetailHistoryTruTien": "DetailHistoryTruTien",
    "./ItemLichSuTruTien": "ItemLichSuTruTien"
  } ],
  "Test - 002": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4456j/ypBDoaSkUgOSnf0p", "Test - 002");
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
      NewClass.prototype.start = function() {
        cc.log("start class test");
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  TruTienView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02783TjNEREkYHpGX19BtoY", "TruTienView");
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
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var JackpotItem_1 = require("../../../Scritps/Obs/JackpotItem");
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var Util_1 = require("../../../Scritps/Util");
    var Windown_1 = require("../../../Scritps/Windown");
    var AssetTruTien_1 = require("./AssetTruTien");
    var AudioTruTien_1 = require("./AudioTruTien");
    var EffectTruTien_1 = require("./EffectTruTien");
    var ItemSlotTruTien_1 = require("./ItemSlotTruTien");
    var LichSuTruTien_1 = require("./LichSuTruTien");
    var StateSpin = {
      Wating: 0,
      Run: 1,
      CanStop: 2,
      ShowEffect: 3,
      Stop: 4
    };
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TruTienView = function(_super) {
      __extends(TruTienView, _super);
      function TruTienView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.asset = null;
        _this.parentItem = null;
        _this.parentLine = null;
        _this.lbJackpot = null;
        _this.labelChipReviceInBox = null;
        _this.effect = null;
        _this.lb_totalBet = null;
        _this.lb_Mn_Per_Line = null;
        _this.lb_totalWin = null;
        _this.lb_Mutil = null;
        _this.spWin = null;
        _this.lb_freeSpinLeft = null;
        _this.toggleAutoSpin = null;
        _this.toggleMaxSpeed = null;
        _this.toggleMusic = null;
        _this.btnSpin = null;
        _this.bangThuong = null;
        _this.cachChoi = null;
        _this.contentTip = null;
        _this.listSpContentTip = [];
        _this.parentMutil = null;
        _this.parentEffMain = null;
        _this.spineEffMain = null;
        _this.spineCharacter = null;
        _this.nodeBtnPlay = null;
        _this.nodeBtnSeting = null;
        _this.popupLichSu = null;
        _this.nodeTest = null;
        _this.audio = null;
        _this.bkgSprite = null;
        _this.isShowBtnPlay = true;
        _this.stateGame = 0;
        _this.listColum = [];
        _this.listNodeItem = [];
        _this.totalLineBet = 50;
        _this.curRoomBet = 20;
        _this.gameType = null;
        _this.dataFinish = null;
        _this.listPromises = [];
        _this.listFunShowOceLine = [];
        _this.curTimeRemain = 0;
        _this.isMaxSpeed = false;
        _this.vectorCacheLbMoneyLost = cc.v2(20, -10);
        _this.isAutoSpin = false;
        _this.isAutoSpinCache = false;
        _this.freeSpinLeft = 0;
        _this.lastFreeSpinLeft = 0;
        _this.moneyTotalFs = 0;
        _this.isFreeSpin = false;
        _this.isStopColun = false;
        _this.helpPopup = null;
        _this.funDelaySpin = null;
        _this.funShowOnceLine = null;
        _this.funNextAllWin = null;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.listConfigBet = [];
        _this.listResult = [];
        _this.listIdLineAn = [];
        _this.sfsObjTest = null;
        _this.listConfigLine = [ [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ], [ 2, 2, 2, 2, 2 ], [ 0, 1, 2, 1, 0 ], [ 2, 1, 0, 1, 2 ], [ 0, 0, 1, 0, 0 ], [ 2, 2, 1, 2, 2 ], [ 1, 2, 2, 2, 1 ], [ 1, 0, 0, 0, 1 ], [ 0, 1, 1, 1, 0 ], [ 2, 1, 1, 1, 2 ], [ 0, 1, 0, 1, 0 ], [ 2, 1, 2, 1, 2 ], [ 1, 0, 1, 0, 1 ], [ 1, 2, 1, 2, 1 ], [ 1, 1, 0, 1, 1 ], [ 1, 1, 2, 1, 1 ], [ 0, 2, 0, 2, 0 ], [ 2, 0, 2, 0, 2 ], [ 1, 0, 2, 0, 1 ], [ 1, 2, 0, 2, 1 ], [ 0, 0, 2, 0, 0 ], [ 2, 2, 0, 2, 2 ], [ 0, 2, 2, 2, 0 ], [ 2, 0, 0, 0, 2 ], [ 0, 2, 1, 2, 0 ], [ 2, 0, 1, 0, 2 ], [ 0, 0, 1, 2, 2 ], [ 2, 2, 1, 0, 0 ], [ 1, 0, 1, 2, 1 ], [ 1, 2, 1, 0, 1 ], [ 0, 2, 1, 0, 2 ], [ 2, 0, 1, 2, 0 ], [ 1, 0, 2, 1, 0 ], [ 1, 2, 0, 1, 2 ], [ 0, 1, 2, 0, 1 ], [ 2, 1, 0, 2, 1 ], [ 0, 0, 0, 1, 2 ], [ 2, 2, 2, 1, 0 ], [ 1, 1, 1, 0, 2 ], [ 1, 1, 1, 2, 0 ], [ 0, 2, 0, 1, 0 ], [ 2, 0, 2, 1, 2 ], [ 1, 0, 1, 2, 0 ], [ 2, 1, 2, 0, 2 ], [ 0, 0, 2, 1, 2 ], [ 2, 2, 0, 1, 0 ], [ 0, 1, 1, 1, 2 ], [ 2, 1, 1, 1, 0 ], [ 1, 0, 0, 1, 2 ] ];
        return _this;
      }
      TruTienView.prototype.onClickTest = function() {
        0 == this.stateGame ? this.runSpin() : this.stopSpin();
      };
      TruTienView.prototype.onLoad = function() {
        Windown_1.Windown.TruTien = this;
        this.gameType = GAME_TYPE_1.default.TruTien;
        this.stateGame = StateSpin.Wating;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        this.sendJoinRoom();
      };
      TruTienView.prototype.start = function() {
        var _this = this;
        this.initItem();
        this.lb_totalBet.string = Windown_1.Windown.formatNumber(this.totalLineBet * this.curRoomBet);
        this.setupView();
        this.showContentTip();
        this.setupTextMutil();
        this.setUpNodeMutil(1);
        this.setStateEffBtnSpin();
        if (Windown_1.Windown.AudioManager.isActiveSound && Windown_1.Windown.AudioManager.isActiveMusic) {
          this.toggleMusic.isChecked = true;
          this.toggleMusic.checkMark.node.active = true;
          this.toggleMusic.node.children[0].active = false;
        } else {
          this.toggleMusic.isChecked = false;
          this.toggleMusic.checkMark.node.active = false;
          this.toggleMusic.node.children[0].active = true;
        }
        this.schedule(function() {
          _this.contentTip.spriteFrame = _this.listSpContentTip[Windown_1.Windown.RandomNumber(0, _this.listSpContentTip.length)];
        }, 5);
      };
      TruTienView.prototype.userExitRoom = function(event) {
        var room = event.room;
        if ("TruTien" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            cc.log("user exit room tru tien");
            cc.director.loadScene("main");
            return;
          }
        }
      };
      TruTienView.prototype.onCreateError = function(event) {
        cc.log("creat errr");
        Windown_1.Windown.UIManager.hideLoading();
        cc.director.loadScene("main");
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      TruTienView.prototype.onJoinRoom = function(event) {
        cc.log("onJoinRoom ");
        var room = event.room;
        if ("TruTien" == room.groupId) {
          this.roomSFS = room;
          Windown_1.Windown.UIManager.hideLoadingData();
          var roomVCf = room.getVariable("cf");
          var stringCf = roomVCf.value;
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
          this.lbJackpot.reset();
          this.lbJackpot.changePer(list[0].perJp);
          cc.log(JSON.stringify(list));
        }
      };
      TruTienView.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        cc.director.loadScene("main");
      };
      TruTienView.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.SpinTruTien:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          this.handleFinish(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.HistoryTruTien:
          this.popupLichSu.responseServer(SFSObject);
        }
      };
      TruTienView.prototype.onDisconnect = function() {
        cc.log("disconnect");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.director.loadScene("main");
      };
      TruTienView.prototype.sendJoinRoom = function() {
        try {
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("TruTienExtension", "ext.Room.SlotTruTien.SlotGameView");
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 1;
          roomSeting.groupId = "TruTien";
          this.sfs.send(new SFS2X.CreateRoomRequest(roomSeting, true));
        } catch (e) {
          cc.error(e);
          this.onDisconnect();
        }
      };
      TruTienView.prototype.onDestroy = function() {
        cc.log("chay me vao ondestroy");
        Windown_1.Windown.TruTien = null;
        if (this.dataFinish) {
          Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
          this.dataFinish = null;
        }
        this.unscheduleAllCallbacks();
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
      TruTienView.prototype.setupView = function() {
        var nodeGame = cc.find("Game", this.node);
        if (cc.sys.isMobile) nodeGame.angle = 90; else {
          var scale = cc.winSize.height / 1280;
          nodeGame.angle = 0;
          nodeGame.scale = scale;
        }
        Windown_1.Windown.UIManager.changeRotation(true);
        this.bkgSprite.setContentSize(cc.winSize.height, cc.winSize.width);
      };
      TruTienView.prototype.initItem = function() {
        var itemTemplate = this.parentItem.children[0];
        for (var i = 0; i < 5; i++) {
          var node = this.parentItem.children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          var cpItem = node.getComponent(ItemSlotTruTien_1.default);
          this.listColum.push(cpItem);
          cpItem.randomFirtGame();
          cpItem.node.x = cpItem.node.width * i + cpItem.node.width / 2;
          cpItem.node.y = 0;
        }
      };
      TruTienView.prototype.onClickSpin = function() {
        if (this.stateGame == StateSpin.Wating) this.runSpin(); else if (this.stateGame == StateSpin.CanStop) this.forceStopSpin(); else if (this.stateGame == StateSpin.Stop) ; else if (this.stateGame == StateSpin.ShowEffect) {
          this.audio.playClick();
          this.resetForNewGame();
        }
      };
      TruTienView.prototype.checkStateFreeSpin = function() {
        cc.log("this.freeSpinLeft: " + this.freeSpinLeft);
        this.lb_freeSpinLeft.string = (this.freeSpinLeft - 1).toString();
        if (this.isFreeSpin) {
          this.lb_freeSpinLeft.node.parent.active = true;
          this.toggleAutoSpin.interactable = false;
          if (!this.isAutoSpin) {
            this.toggleAutoSpin.isChecked = true;
            this.toggleAutoSpin.checkMark.node.active = true;
            this.isAutoSpin = true;
          }
        } else {
          this.lb_freeSpinLeft.string = (this.freeSpinLeft - 1).toString();
          if (this.freeSpinLeft < 1) {
            this.lb_freeSpinLeft.node.parent.active = false;
            this.isFreeSpin = false;
            this.toggleAutoSpin.interactable = true;
            !this.isAutoSpinCache && this.toggleAutoSpin.isChecked && this.toggleAutoSpin.uncheck();
          }
        }
      };
      TruTienView.prototype.handleFinish = function(data) {
        var _this = this;
        var delta = this.isMaxSpeed ? 1.4 : 1;
        if (data.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          this.stopColum();
          Windown_1.Windown.Dialog.showLog(data.get(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          this.isAutoSpin && this.toggleAutoSpin.uncheck();
          return;
        }
        if (!data.containsKey("agUser") || !data.containsKey("agBet") || !data.containsKey("views") || !data.containsKey("agWin")) {
          this.stopColum();
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
          this.isAutoSpin && this.toggleAutoSpin.uncheck();
          return;
        }
        this.dataFinish = data;
        Windown_1.Windown.MoneyUser.pushDelayMoney(this.gameType, this.dataFinish.get("agUser"), this.dataFinish.get("agWin"));
        if (null == this.dataFinish) return;
        this.truTienBet(this.dataFinish.get("agBet") * this.totalLineBet, this.dataFinish.get("agUser"));
        this.scheduleOnce(this.funDelaySpin = function() {
          if (null == _this.dataFinish) return;
          _this.listResult = JSON.parse(_this.dataFinish.get("views"));
          _this.getAllLineItem();
          _this.setResult();
          _this.setUpShowOceLineWin();
          _this.stateGame = StateSpin.CanStop;
          var time = _this.isMaxSpeed ? .1 : .5;
          _this.scheduleOnce(_this.stopSpin, time);
          _this.isFreeSpin = _this.dataFinish.getBool("isScarter");
          _this.freeSpinLeft > 0 && !_this.isFreeSpin ? _this.moneyTotalFs += _this.dataFinish.getLong("agWin") : _this.moneyTotalFs = 0;
        }, .7 / delta);
      };
      TruTienView.prototype.convertSlotId = function(list) {
        var strView = list.split(",");
        var newList = [];
        var i = 0;
        var size = strView.length;
        if (strView[0] > 100) for (var i_1 = 0; i_1 < size; i_1++) strView[i_1] <= 103 ? strView[i_1] = strView[i_1] % 100 : strView[i_1] = strView[i_1] % 100 + 1;
        for (var i_2 = 0; i_2 < size; i_2++) for (i_2; i_2 < 5; i_2++) {
          var tempList = [];
          for (var j = i_2; j < size; j += 5) tempList.push(parseInt(strView[j]));
          newList.push(tempList);
        }
        return newList;
      };
      TruTienView.prototype.setResult = function() {
        var _this = this;
        var count = 0;
        this.listResult.forEach(function(v) {
          _this.listColum[count].setResult(v);
          count++;
        });
        this.freeSpinLeft = this.dataFinish.get("numFreeSpin");
      };
      TruTienView.prototype.sendClickSpin = function() {
        if (null != this.sfsObjTest) {
          ConectManager_1.ConectManager.getIns().sendRequest("testSpin", this.sfsObjTest, this.roomSFS);
          this.sfsObjTest = null;
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("bet", this.curRoomBet);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SpinTruTien, sfsObj, this.roomSFS);
      };
      TruTienView.prototype.setUpNodeMutil = function(mutil) {
        var parent = this.parentMutil;
        var child = parent.children;
        child.forEach(function(v) {
          var spine = v.getComponent(sp.Skeleton);
          spine.setAnimation(0, "orb_grey", true);
          v.children[0].color = cc.Color.GRAY;
          v.children[0].getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
        });
        var index = this.getIndexByMutil(mutil);
        if (-1 == index) return;
        var strX = "x" + (index + 1);
        var name_appe = "orb_" + strX + "_appear";
        var name_start = "orb_" + strX + "_in";
        var name_idle = "orb_" + strX;
        var spineMain = child[index].getComponent(sp.Skeleton);
        spineMain.setAnimation(0, name_appe, false);
        spineMain.addAnimation(0, name_start, false);
        spineMain.addAnimation(0, name_idle, true);
        var nodeText = spineMain.node.children[0];
        nodeText.color = cc.Color.WHITE;
        nodeText.getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
        nodeText.stopAllActions();
        nodeText.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.3, 1)));
        var parretEffMain = this.parentEffMain;
        parretEffMain.children.forEach(function(v) {
          v.stopAllActions();
          v.runAction(cc.fadeOut(1));
        });
        var strEffMain = "ef_" + (index + 1);
        this.spineEffMain.setAnimation(0, strEffMain, true);
        parretEffMain.children[index].runAction(cc.fadeIn(1));
        if (this.freeSpinLeft > 0) {
          var strEffCharacter = "dark_active" + (index + 1);
          this.spineCharacter.setAnimation(0, strEffCharacter, false);
          this.spineCharacter.addAnimation(0, "dark_idle", true);
          this.audio.playNextMutilFS(index);
        } else {
          var strEffCharacter = "main_active" + index;
          this.spineCharacter.setAnimation(0, strEffCharacter, false);
          index >= 3 ? this.spineCharacter.addAnimation(0, "dark_idle", true) : this.spineCharacter.addAnimation(0, "main_idle", true);
          this.audio.playNextMutilNormal(index);
        }
      };
      TruTienView.prototype.resetMutilWin = function() {
        var parent = this.parentMutil;
        var child = parent.children;
        if (this.dataFinish) {
          var oldRank = this.dataFinish.get("rankNow");
          var newRank = this.dataFinish.get("rankWin");
          if (oldRank == newRank && !this.isFreeSpin) return;
        }
        var parretEffMain = this.parentEffMain;
        parretEffMain.children.forEach(function(v) {
          v.stopAllActions();
          v.runAction(cc.fadeOut(1));
        });
        var strEffMain = "ef_1";
        this.spineEffMain.setAnimation(0, strEffMain, true);
        parretEffMain.children[0].runAction(cc.fadeIn(1));
        child.forEach(function(v) {
          var spine = v.getComponent(sp.Skeleton);
          spine.setAnimation(0, "orb_grey", true);
          v.children[0].color = cc.Color.GRAY;
          v.children[0].getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
        });
        if (this.freeSpinLeft > 0) this.spineCharacter.setAnimation(0, "dark_idle", true); else {
          var spineMain = child[0].getComponent(sp.Skeleton);
          this.spineCharacter.setAnimation(0, "main_idle", true);
          var strX = "x1";
          var name_appe = "orb_" + strX + "_appear";
          var name_start = "orb_" + strX + "_in";
          var name_idle = "orb_" + strX;
          spineMain.setAnimation(0, name_appe, false);
          spineMain.addAnimation(0, name_start, false);
          spineMain.addAnimation(0, name_idle, true);
          var nodeText = spineMain.node.children[0];
          nodeText.color = cc.Color.WHITE;
          nodeText.getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
          nodeText.stopAllActions();
          nodeText.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.3, 1)));
        }
      };
      TruTienView.prototype.getIndexByMutil = function(mutil) {
        cc.log("gia tri free spine: " + this.freeSpinLeft + "---" + mutil);
        if (this.freeSpinLeft > 0) switch (mutil) {
         case 3:
          return 0;

         case 6:
          return 1;

         case 9:
          return 2;

         case 20:
          return 3;
        } else switch (mutil) {
         case 1:
          return 0;

         case 2:
          return 1;

         case 3:
          return 2;

         case 5:
          return 3;
        }
        return -1;
      };
      TruTienView.prototype.setupTextMutil = function() {
        var _this = this;
        var parent = this.parentMutil;
        var child = parent.children;
        var count = 0;
        if (this.freeSpinLeft > 0) {
          this.spineCharacter.setAnimation(0, "main_transform_dark", false);
          this.spineCharacter.addAnimation(0, "dark_idle", true);
          child.forEach(function(v) {
            v.children[0].getComponent(cc.Sprite).spriteFrame = _this.asset.listSpMutilFS[count];
            count++;
          });
        } else {
          this.spineCharacter.setAnimation(0, "dark_transform_main", false);
          this.spineCharacter.addAnimation(0, "main_idle", true);
          this.spineCharacter.addAnimation(0, "dark_idle", true);
          child.forEach(function(v) {
            v.children[0].getComponent(cc.Sprite).spriteFrame = _this.asset.listSpMutilNormal[count];
            count++;
          });
        }
      };
      TruTienView.prototype.showContentTip = function() {
        this.contentTip.node.active = true;
        this.lb_totalWin.node.active = false;
      };
      TruTienView.prototype.offContentTip = function() {
        this.contentTip.node.active = false;
      };
      TruTienView.prototype.setStateEffBtnSpin = function() {
        var ske = this.btnSpin.node.children[0].getComponent(sp.Skeleton);
        var nodeRotate = this.btnSpin.node.children[1];
        if (this.stateGame != StateSpin.Stop) {
          var materialNormal = cc.Material.getBuiltinMaterial("2d-sprite");
          nodeRotate.getComponent(cc.Sprite).setMaterial(0, materialNormal);
        }
        if (this.stateGame == StateSpin.Wating || this.stateGame == StateSpin.ShowEffect) {
          ske.setAnimation(0, "normal", true);
          nodeRotate.children[0].active = false;
          nodeRotate.runAction(cc.repeatForever(cc.rotateBy(3, -360)));
        } else if (this.stateGame == StateSpin.Run) {
          this.audio.playEffect(this.audio.clickBtnSpin);
          ske.setAnimation(0, "tap", false);
          nodeRotate.stopAllActions();
          nodeRotate.runAction(cc.repeatForever(cc.rotateBy(.3, -360)));
          nodeRotate.children[0].active = true;
        } else if (this.stateGame == StateSpin.Stop) {
          nodeRotate.stopAllActions();
          ske.setAnimation(0, "disappear", true);
          nodeRotate.children[0].active = false;
          var materialGray = cc.Material.getBuiltinMaterial("2d-gray-sprite");
          nodeRotate.getComponent(cc.Sprite).setMaterial(0, materialGray);
        }
      };
      TruTienView.prototype.runSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 5, , 6 ]);
              this.stateGame = StateSpin.Run;
              this.setStateEffBtnSpin();
              this.sendClickSpin();
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < this.listColum.length)) return [ 3, 4 ];
              this.listColum[i].runSpin();
              if (!!this.isMaxSpeed) return [ 3, 3 ];
              return [ 4, this.makeDelay(.1) ];

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
      TruTienView.prototype.stopSpin = function() {
        this.stopColum();
      };
      TruTienView.prototype.forceStopSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _i, _a, temp, e_2;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 2, , 3 ]);
              this.unschedule(this.stopSpin);
              this.stateGame = StateSpin.Stop;
              this.listPromises = [];
              for (_i = 0, _a = this.listColum; _i < _a.length; _i++) {
                temp = _a[_i];
                temp.forceStopSpin(false);
              }
              return [ 4, this.makeDelay(.25) ];

             case 1:
              _b.sent();
              this.handleStopAllColum();
              return [ 3, 3 ];

             case 2:
              e_2 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_2);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      TruTienView.prototype.checkAndShowEffect = function() {
        var _this = this;
        if (null == this.dataFinish) {
          this.stateGame = StateSpin.Wating;
          return;
        }
        var isJackpot = this.dataFinish.getBool("isTakeJP");
        var isFree = this.dataFinish.getBool("isScarter");
        var funJackpot = function(funNext) {
          isJackpot ? _this.effect.showJackpot(funNext) : funNext();
        };
        var funBigWin = function(funNext) {
          isJackpot ? funNext() : _this.effect.showBigWin(funNext);
        };
        var funFree = function(funNext) {
          isFree ? _this.effect.showFreeSpin(funNext) : funNext();
        };
        var funShowTotalFree = function(funNext) {
          if (1 == _this.lastFreeSpinLeft && _this.freeSpinLeft < 1) {
            _this.effect.showTtMnFs(_this.moneyTotalFs, funNext);
            _this.moneyTotalFs = 0;
          } else funNext();
          _this.lastFreeSpinLeft = _this.freeSpinLeft;
        };
        this.showWild(function() {
          _this.showAllLineWin(function() {
            funJackpot(function() {
              funBigWin(function() {
                funFree(function() {
                  funShowTotalFree(function() {
                    _this.showOnceLine();
                  });
                });
              });
            });
          });
        });
      };
      TruTienView.prototype.handleStopAllColum = function() {
        cc.log("handle stop colum");
        this.stateGame = StateSpin.Stop;
        this.checkAndShowEffect();
        this.setStateEffBtnSpin();
      };
      TruTienView.prototype.stopColum = function() {
        return __awaiter(this, void 0, void 0, function() {
          var listSc, count, _i, _a, temp, e_3;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _b.trys.push([ 0, 9, , 10 ]);
              listSc = this.getListActiveScaster();
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
              this.handleStopAllColum();
              return [ 3, 10 ];

             case 9:
              e_3 = _b.sent();
              Util_1.Util.ThrowErrProsime(e_3);
              return [ 3, 10 ];

             case 10:
              return [ 2 ];
            }
          });
        });
      };
      TruTienView.prototype.setUpShowOceLineWin = function() {
        var _this = this;
        this.listFunShowOceLine = [];
        if (this.listIdLineAn.length < 1) return;
        var listActive = [];
        this.listIdLineAn.forEach(function(v) {
          var listIdAn = v.listItem;
          var funTemp = function() {
            _this.offMoneyReviceSpin(true);
            _this.offAllLineWin();
            _this.lb_Mn_Per_Line.string = Windown_1.Windown.formatNumber(v.money);
            _this.lb_Mn_Per_Line.node.active = true;
            _this.lb_Mn_Per_Line.node.stopAllActions();
            _this.lb_Mn_Per_Line.node.opacity = 255;
            _this.lb_Mn_Per_Line.node.runAction(cc.fadeOut(1.4).easing(cc.easeSineIn()));
            for (var i = 0, l = listIdAn.length; i < l; i++) _this.listColum[i].activeItem([ listIdAn[i] ]);
          };
          _this.listFunShowOceLine.push(funTemp);
        });
      };
      TruTienView.prototype.showOnceLine = function() {
        var _this = this;
        cc.log("chay vao show onceline ne");
        var current = 0;
        this.checkStateFreeSpin();
        if (this.listFunShowOceLine.length < 1) {
          if (this.isMaxSpeed) this.scheduleOnce(function() {
            _this.stateGame = StateSpin.ShowEffect;
            _this.setStateEffBtnSpin();
            _this.resetMutilWin();
            _this.showContentTip();
            _this.resetForNewGame();
            _this.labelChipReviceInBox.setMoney(0);
          }, .5); else {
            this.stateGame = StateSpin.ShowEffect;
            this.setStateEffBtnSpin();
            this.resetMutilWin();
            this.showContentTip();
            this.resetForNewGame();
            this.labelChipReviceInBox.setMoney(0);
          }
          return;
        }
        var mutil = this.dataFinish.get("rankNow");
        var timeDelay = mutil > 1 ? 1.5 : 0;
        this.showMoneyReviceSpin();
        this.scheduleOnce(function() {
          _this.stateGame = StateSpin.ShowEffect;
          _this.setStateEffBtnSpin();
        }, timeDelay);
        this.isAutoSpin ? this.scheduleOnce(this.resetForNewGame, 1 + timeDelay) : this.schedule(this.funShowOnceLine = function() {
          var fun = _this.listFunShowOceLine[current % _this.listFunShowOceLine.length];
          fun && fun();
          current++;
        }, 1.5);
      };
      TruTienView.prototype.getListActiveScaster = function() {
        var list = [];
        var listResult = this.listResult;
        var countScaster = 0;
        for (var i = 0; i < listResult.length; i++) {
          listResult[i].includes(8) && countScaster++;
          4 == i && countScaster > 2 ? list.push(true) : list.push(false);
        }
        return list;
      };
      TruTienView.prototype.truTienBet = function(moneyBet, moneyPlayer) {
        if (0 == moneyBet) return;
        Windown_1.Windown.MoneyUser.subMoney(moneyBet, moneyPlayer);
      };
      TruTienView.prototype.showMoneyReviceSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var money, mutil, mutilNext, indexLbMutil, nodeLbMutil, e_4;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 5, , 6 ]);
              money = this.dataFinish.getLong("agWin");
              mutil = this.dataFinish.getInt("rankNow");
              mutilNext = this.dataFinish.getInt("rankWin");
              this.isMaxSpeed ? this.labelChipReviceInBox.time = .25 : this.labelChipReviceInBox.time = .5;
              if (!(money > 0)) return [ 3, 4 ];
              indexLbMutil = this.getIndexByMutil(mutil);
              cc.log("indexLbMutil: " + indexLbMutil);
              nodeLbMutil = null;
              indexLbMutil > -1 && (nodeLbMutil = this.parentMutil.children[indexLbMutil].children[0]);
              this.offContentTip();
              this.lb_totalWin.node.active = true;
              if (!(1 != mutil)) return [ 3, 2 ];
              this.audio.playEffect(this.audio.showMoneyFirt);
              this.lb_totalWin.string = "#" + money / mutil;
              this.labelChipReviceInBox.setMoney(money / mutil);
              this.spWin.setAnimation(0, "win", false);
              this.lb_Mutil.string = "x" + mutil;
              this.lb_Mutil.node.opacity = 0;
              this.lb_Mutil.node.stopAllActions();
              this.lb_Mutil.node.runAction(cc.sequence(cc.delayTime(.75), cc.fadeIn(0), cc.callFunc(function() {
                _this.audio.playEffect(_this.audio.mutilAppear);
              }), cc.scaleTo(.35, 1.2), cc.spawn(cc.scaleTo(.35, 1), cc.fadeOut(.35).easing(cc.easeCubicActionIn()))));
              if (nodeLbMutil) {
                nodeLbMutil.stopAllActions();
                nodeLbMutil.runAction(cc.sequence(cc.delayTime(.75), cc.scaleTo(.35, 1.2), cc.scaleTo(.35, 1)));
              }
              return [ 4, this.makeDelay(1.5) ];

             case 1:
              _a.sent();
              this.lb_totalWin.string = "^" + money;
              this.spWin.setAnimation(0, "total_win", false);
              this.labelChipReviceInBox.setMoney(money);
              this.addMoneyUser(money);
              return [ 3, 3 ];

             case 2:
              this.lb_totalWin.string = "^" + money;
              this.spWin.setAnimation(0, "total_win", false);
              this.labelChipReviceInBox.setMoney(money);
              this.addMoneyUser(money);
              _a.label = 3;

             case 3:
              this.audio.playEffect(this.audio.showMoneyFinal);
              this.isFreeSpin || this.setUpNodeMutil(mutilNext);
              _a.label = 4;

             case 4:
              return [ 3, 6 ];

             case 5:
              e_4 = _a.sent();
              Util_1.Util.ThrowErrProsime(e_4);
              return [ 3, 6 ];

             case 6:
              return [ 2 ];
            }
          });
        });
      };
      TruTienView.prototype.showTotalMoneyFree = function(money) {
        this.labelChipReviceInBox.setMoney(money);
        this.lb_totalWin.string = "^" + money;
        this.offContentTip();
        this.lb_totalWin.node.active = true;
      };
      TruTienView.prototype.offMoneyReviceSpin = function(isEffect) {
        void 0 === isEffect && (isEffect = false);
        isEffect || this.labelChipReviceInBox.resetLb();
      };
      TruTienView.prototype.addMoneyUser = function(money) {
        Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
      };
      TruTienView.prototype.showWild = function(funNext) {
        funNext();
      };
      TruTienView.prototype.showAllLineWin = function(funNext) {
        this.funNextAllWin = funNext;
        if (this.listIdLineAn.length < 1) {
          funNext();
          return;
        }
        this.scheduleOnce(funNext, 1);
        this.audio.playEffect(this.audio.showwAllLine);
        this.dataFinish.get("isTakeJP") && this.audio.playEffect(this.audio.xuatHien3IconJP);
        var listActive = [];
        var totalMoney = this.dataFinish.getLong("agWin");
        var _loop_1 = function(i) {
          var list = listActive[i];
          if (void 0 == list) {
            list = [];
            listActive[i] = list;
          }
          this_1.listIdLineAn.forEach(function(v) {
            var listIdAn = v.listItem;
            var indexItem = listIdAn[i];
            void 0 == indexItem || list.includes(indexItem) || list.push(indexItem);
          });
        };
        var this_1 = this;
        for (var i = 0; i < 5; i++) _loop_1(i);
        var count = 0;
        this.listColum.forEach(function(v) {
          v.activeItem(listActive[count], true);
          count++;
        });
      };
      TruTienView.prototype.getAllLineItem = function() {
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
          obj.listItem = this.getListActiveByIdLine(idLine, this.listResult);
          this.listIdLineAn.push(obj);
        }
        cc.log(JSON.stringify(this.listIdLineAn));
      };
      TruTienView.prototype.getListActiveByIdLine = function(id, result) {
        var listReturn = [];
        var idItemLineAn = this.getIdItemByIdLine(id, result);
        var listConfigLine = this.listConfigLine[id - 1].slice();
        for (var i = 0; i < 5; i++) {
          var idItem = result[i][listConfigLine[i]];
          if (7 != idItem && idItem != idItemLineAn) break;
          listReturn.push(listConfigLine[i]);
        }
        return listReturn;
      };
      TruTienView.prototype.getIdItemByIdLine = function(id, result) {
        var listConfigLine = this.listConfigLine[id - 1].slice();
        for (var i = 0, l = listConfigLine.length; i < l; i++) {
          var idItem = result[i][listConfigLine[i]];
          if (7 != idItem) return idItem;
        }
        cc.error("loi get id Line");
        return -1;
      };
      TruTienView.prototype.offAllLineWin = function() {
        this.lb_Mn_Per_Line.node.active = false;
        this.listColum.forEach(function(v) {
          v.offAllItem();
        });
      };
      TruTienView.prototype.effectShowItemWithBonusGame = function() {
        cc.find("bkg", this.node).runAction(cc.fadeIn(.2));
      };
      TruTienView.prototype.resetForNewGame = function() {
        var _this = this;
        cc.log("chay vao reset new game ");
        this.dataFinish = null;
        this.stateGame = StateSpin.Wating;
        this.isStopColun = false;
        this.unschedule(this.funNextAllWin);
        this.unschedule(this.funShowOnceLine);
        this.unschedule(this.resetForNewGame);
        this.lb_Mn_Per_Line.node.active = false;
        this.listColum.forEach(function(v) {
          v.reset();
        });
        if (this.isAutoSpin) {
          this.scheduleOnce(function() {
            _this.offMoneyReviceSpin(true);
          }, .5);
          this.onClickSpin();
        } else this.offMoneyReviceSpin();
      };
      TruTienView.prototype.onClickChooseLine = function(even, data) {};
      TruTienView.prototype.setTxtChooseLine = function(listLine) {};
      TruTienView.prototype.onClickChooseRoom = function(event, data) {
        this.audio.playClick();
        this.listConfigBet.length < 1 && Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
        cc.log("click onClickChooseRoom");
        if (this.freeSpinLeft > 0) return;
        if (this.freeSpinLeft > 0) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_CHANGE_BET_FS);
          return;
        }
        this.isAutoSpin && !this.isFreeSpin && this.toggleAutoSpin.uncheck();
        if (this.stateGame == StateSpin.ShowEffect) {
          this.resetForNewGame();
          return;
        }
        if (this.stateGame != StateSpin.Wating) return;
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
        this.lbJackpot.changePer(this.listConfigBet[currentIndex].perJp);
        this.resetMutilWin();
      };
      TruTienView.prototype.onClickBackToLobby = function() {
        this.audio.playClick();
        cc.log("click onClickBackToLobby");
        if (this.freeSpinLeft > 0) return;
        this.roomSFS ? ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main");
      };
      TruTienView.prototype.onClickSeting = function() {
        this.audio.playClick();
        cc.log("click onClickSeting");
        if (this.freeSpinLeft > 0) return;
        this.isShowBtnPlay = !this.isShowBtnPlay;
        if (this.isShowBtnPlay) {
          var vecTarget = cc.v2(0, -732.036);
          this.nodeBtnPlay.runAction(cc.fadeIn(.4));
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeOut(.3), cc.moveTo(.3, vecTarget)));
        } else {
          this.nodeBtnPlay.stopAllActions();
          this.nodeBtnSeting.stopAllActions();
          var vecTarget = cc.v2(0, -557.727);
          this.nodeBtnPlay.runAction(cc.fadeOut(.3));
          this.nodeBtnSeting.runAction(cc.spawn(cc.fadeIn(.4), cc.moveTo(.4, vecTarget)));
        }
      };
      TruTienView.prototype.onClickAutoSpin = function() {
        this.audio.playClick();
        cc.log("click onClickAutoSpin");
        if (this.freeSpinLeft > 0) return;
        this.isAutoSpin = this.toggleAutoSpin.isChecked;
        this.isAutoSpinCache = this.isAutoSpin;
        this.isAutoSpin && (this.stateGame != StateSpin.Wating && this.stateGame != StateSpin.ShowEffect || this.onClickSpin());
      };
      TruTienView.prototype.onClickMusic = function() {
        this.audio.playClick();
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
      TruTienView.prototype.onClickMaxSpeed = function() {
        this.audio.playClick();
        this.isMaxSpeed = this.toggleMaxSpeed.isChecked;
        this.toggleMaxSpeed.node.children[0].active = true;
        if (this.isMaxSpeed) {
          this.stateGame != StateSpin.Wating && this.stateGame != StateSpin.ShowEffect || this.toggleAutoSpin.check();
          this.toggleMaxSpeed.node.children[0].active = false;
        }
      };
      TruTienView.prototype.onClickLichSu = function() {
        this.audio.playClick();
        if (this.freeSpinLeft > 0) return;
        this.popupLichSu.show();
      };
      TruTienView.prototype.onClichTop = function() {};
      TruTienView.prototype.onClickCachChoi = function() {
        this.audio.playClick();
        this.cachChoi.active = true;
        this.cachChoi.y = -1280;
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.moveTo(.3, 0, 0));
      };
      TruTienView.prototype.onCloseCachChoi = function() {
        var _this = this;
        this.audio.playClick();
        this.cachChoi.stopAllActions();
        this.cachChoi.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.cachChoi.active = false;
        })));
      };
      TruTienView.prototype.closeBangThuong = function() {
        var _this = this;
        this.audio.playClick();
        this.bangThuong.stopAllActions();
        this.bangThuong.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
          _this.bangThuong.active = false;
        })));
      };
      TruTienView.prototype.onClickBangThuong = function() {
        this.audio.playClick();
        this.bangThuong.active = true;
        this.bangThuong.y = -1280;
        this.bangThuong.stopAllActions();
        this.bangThuong.runAction(cc.moveTo(.3, 0, 0));
      };
      TruTienView.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, rejects) {
          _this.scheduleOnce(resolve, time);
        });
      };
      TruTienView.prototype.onSetData = function(even, data) {
        var dataSet = ConectManager_1.ConectManager.getIns().getSFSObj();
        dataSet.putInt("bet", this.curRoomBet);
        this.sfsObjTest = dataSet;
        this.onClickSpin();
      };
      __decorate([ property(AssetTruTien_1.default) ], TruTienView.prototype, "asset", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "parentLine", void 0);
      __decorate([ property(JackpotItem_1.default) ], TruTienView.prototype, "lbJackpot", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], TruTienView.prototype, "labelChipReviceInBox", void 0);
      __decorate([ property(EffectTruTien_1.default) ], TruTienView.prototype, "effect", void 0);
      __decorate([ property(cc.Label) ], TruTienView.prototype, "lb_totalBet", void 0);
      __decorate([ property(cc.Label) ], TruTienView.prototype, "lb_Mn_Per_Line", void 0);
      __decorate([ property(cc.Label) ], TruTienView.prototype, "lb_totalWin", void 0);
      __decorate([ property(cc.Label) ], TruTienView.prototype, "lb_Mutil", void 0);
      __decorate([ property(sp.Skeleton) ], TruTienView.prototype, "spWin", void 0);
      __decorate([ property(cc.Label) ], TruTienView.prototype, "lb_freeSpinLeft", void 0);
      __decorate([ property(cc.Toggle) ], TruTienView.prototype, "toggleAutoSpin", void 0);
      __decorate([ property(cc.Toggle) ], TruTienView.prototype, "toggleMaxSpeed", void 0);
      __decorate([ property(cc.Toggle) ], TruTienView.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Button) ], TruTienView.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "bangThuong", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "cachChoi", void 0);
      __decorate([ property(cc.Sprite) ], TruTienView.prototype, "contentTip", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TruTienView.prototype, "listSpContentTip", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "parentMutil", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "parentEffMain", void 0);
      __decorate([ property(sp.Skeleton) ], TruTienView.prototype, "spineEffMain", void 0);
      __decorate([ property(sp.Skeleton) ], TruTienView.prototype, "spineCharacter", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "nodeBtnPlay", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "nodeBtnSeting", void 0);
      __decorate([ property(LichSuTruTien_1.default) ], TruTienView.prototype, "popupLichSu", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "nodeTest", void 0);
      __decorate([ property(AudioTruTien_1.default) ], TruTienView.prototype, "audio", void 0);
      __decorate([ property(cc.Node) ], TruTienView.prototype, "bkgSprite", void 0);
      TruTienView = __decorate([ ccclass ], TruTienView);
      return TruTienView;
    }(cc.Component);
    exports.default = TruTienView;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Obs/JackpotItem": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../Scritps/Util": void 0,
    "../../../Scritps/Windown": void 0,
    "./AssetTruTien": "AssetTruTien",
    "./AudioTruTien": "AudioTruTien",
    "./EffectTruTien": "EffectTruTien",
    "./ItemSlotTruTien": "ItemSlotTruTien",
    "./LichSuTruTien": "LichSuTruTien"
  } ]
}, {}, [ "AssetTruTien", "AudioTruTien", "BonusTruTien", "DetailHistoryTruTien", "EffectTruTien", "HelpTruTien", "ItemLichSuTruTien", "ItemSlotTruTien", "LichSuTruTien", "Test - 002", "TruTienView" ]);