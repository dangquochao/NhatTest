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
  BanPhimTaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f28a6gGsthGSbAU837Uux9B", "BanPhimTaiXiu");
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
        _this._infoBet = null;
        _this.totalBet = 0;
        return _this;
      }
      NewClass.prototype.init = function(info) {
        Windown_1.Windown.TaiXiu.sound.playClick();
        this.node.active = true;
        this._infoBet = info;
        this.totalBet = 0;
      };
      NewClass.prototype.onClickNum = function(event, data, isPlayMusic) {
        void 0 === isPlayMusic && (isPlayMusic = true);
        cc.log("data: " + data);
        if (!this._infoBet) return;
        isPlayMusic && Windown_1.Windown.TaiXiu.sound.playClick();
        var number = parseInt(data);
        this.totalBet += number;
        if (Windown_1.Windown.User.userAg < 1e3) {
          Windown_1.Windown.TaiXiu.showLog("M\u1ee9c c\u01b0\u1ee3c t\u1ed1i ti\u1ec3u l\xe0 1.000");
          return;
        }
        this.totalBet = cc.misc.clampf(this.totalBet, 0, Windown_1.Windown.User.userAg);
        this._infoBet.setMoneyTempBet(this.totalBet);
      };
      NewClass.prototype.onClickHuy = function() {
        this.totalBet = 0;
        this.node.active = false;
        this._infoBet && this._infoBet.onHuyBet();
        Windown_1.Windown.TaiXiu.sound.playClick();
      };
      NewClass.prototype.onClickDongY = function() {
        if (0 == this.totalBet || null == this._infoBet) return;
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("type", this._infoBet.type);
        sfsObj.putLong("bet", this.totalBet);
        Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXbet, sfsObj);
        Windown_1.Windown.TaiXiu.sound.playClick();
      };
      NewClass.prototype.reset = function() {
        this.totalBet = 0;
        this.onClickNum(null, "0", false);
      };
      NewClass.prototype.onClickX2 = function() {
        this.onClickNum(null, this._infoBet.lastBet);
        Windown_1.Windown.TaiXiu.sound.playClick();
      };
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
  BatDrag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3821fZWQd1CqISYlOJC1cC9", "BatDrag");
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
        _this._isTouch = false;
        _this._v2OffsetChange = null;
        _this._isOpenBat = false;
        _this.updateTimer = 0;
        _this.updateInterval = 0;
        _this.isNan = true;
        _this.vecStart = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.updateInterval = .2;
        this.updateTimer = 0;
        this.vecStart = this.node.getPosition();
      };
      NewClass.prototype.startGame = function() {
        this.reset();
        this.getComponent(cc.Animation).play("EffectDongBat");
      };
      NewClass.prototype.reset = function() {
        this.node.opacity = 255;
        this.node.setPosition(this.vecStart);
        this.getComponent(cc.Animation).stop();
      };
      NewClass.prototype.setIsNan = function(isNan) {
        this.isNan = isNan;
      };
      NewClass.prototype.handleFinish = function() {
        if (this.isNan) this.canDrag(); else {
          this._isTouch = false;
          this.openBat();
        }
      };
      NewClass.prototype.checkOpenBat = function() {
        if (!this._isOpenBat) {
          this.offDrag();
          if (this.node.getPosition().subSelf(this.vecStart).mag() < 5) {
            this.openBat();
            cc.log("nhay vao openBat");
          } else {
            cc.log("nhay vao forceOpenbat");
            this.forceOpenbat();
          }
        }
      };
      NewClass.prototype.canDrag = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this._isOpenBat = false;
      };
      NewClass.prototype.touchStart = function(touch) {
        var v2Touch = cc.v2(touch.getLocation());
        var target = this.node.parent.convertToNodeSpaceAR(v2Touch);
        this._v2OffsetChange = this.node.getPosition().subSelf(target);
        this._isTouch = true;
        touch.stopPropagation();
      };
      NewClass.prototype.touchMove = function(touch) {
        if (this._isTouch) {
          var v2Touch = cc.v2(touch.getLocation());
          var target = this.node.parent.convertToNodeSpaceAR(v2Touch);
          this.node.setPosition(target.add(this._v2OffsetChange));
        }
        touch.stopPropagation();
      };
      NewClass.prototype.touchEnd = function(touch) {
        this._isTouch = false;
        touch.stopPropagation();
      };
      NewClass.prototype.update = function(dt) {
        if (this._isOpenBat) return;
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var vec = this.node.getPosition().subSelf(this.vecStart).mag();
        if (vec > 150) {
          this._isOpenBat = true;
          this.offDrag();
          Windown_1.Windown.TaiXiu.handleFinish();
        }
      };
      NewClass.prototype.offDrag = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.runAction(cc.fadeOut(.4));
        this._isOpenBat = true;
      };
      NewClass.prototype.openBat = function() {
        this._isTouch || this.node.runAction(cc.moveTo(1, cc.v2(-7, -486)));
        Windown_1.Windown.TaiXiu && Windown_1.Windown.TaiXiu.handleFinish();
        this._isOpenBat = true;
      };
      NewClass.prototype.forceOpenbat = function() {
        if (!Windown_1.Windown.TaiXiu) return;
        Windown_1.Windown.TaiXiu.handleFinish();
        var vecChiPhuong = this.node.getPosition().subSelf(this.vecStart);
        vecChiPhuong.normalizeSelf().mulSelf(300);
        this.node.runAction(cc.moveTo(.3, vecChiPhuong));
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ChatTaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf8f3ovChBAm4fdQnC32uyg", "ChatTaiXiu");
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
    var ChatTaiXiu = function(_super) {
      __extends(ChatTaiXiu, _super);
      function ChatTaiXiu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrChat = null;
        _this.itemChat = null;
        _this.edbChat = null;
        return _this;
      }
      ChatTaiXiu.prototype.start = function() {};
      ChatTaiXiu.prototype.setInfo = function(dataChat) {
        var size = Math.min(20, dataChat.size());
        for (var i = dataChat.size() - size, l = dataChat.size(); i < l; i++) this.addItemMess(dataChat.getSFSObject(i));
        this.scrChat.scrollToBottom(.3);
      };
      ChatTaiXiu.prototype.addItemMess = function(sfsObject) {
        var _this = this;
        var nickname = sfsObject.get("username");
        nickname.length > 15 && (nickname = nickname.substr(0, 12) + "...");
        var content = sfsObject.get("mes");
        var itemMes;
        if (this.scrChat.content.childrenCount < 20) {
          itemMes = cc.instantiate(this.itemChat);
          this.scrChat.content.addChild(itemMes);
        } else {
          itemMes = cc.instantiate(this.itemChat);
          this.scrChat.content.addChild(itemMes);
          setTimeout(function() {
            _this.scrChat.content.children[0];
            _this.scrChat.scrollToBottom();
          }, 500);
        }
        var lbContent = itemMes.children[0].getComponent(cc.Label);
        var lbNickname = itemMes.children[0].children[0].getComponent(cc.Label);
        lbContent.string = nickname + ": " + content;
        lbNickname.string = nickname + ": ";
        if (nickname == Windown_1.Windown.User.nickName || nickname == Windown_1.Windown.User.userName) {
          lbNickname.node.color = cc.Color.GREEN;
          lbContent.node.color = new cc.Color().fromHEX("#00ADFF");
        } else if ("admin" == nickname.toLocaleLowerCase()) {
          lbNickname.node.color = cc.Color.RED;
          lbContent.node.color = cc.Color.GREEN;
        } else {
          lbNickname.node.color = cc.Color.YELLOW;
          lbContent.node.color = cc.Color.WHITE;
        }
        itemMes.active = true;
      };
      ChatTaiXiu.prototype.onClickSend = function() {
        if ("" != this.edbChat.string.trim()) {
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putUtfString("mes", this.edbChat.string);
          Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXChat, sfsObj);
          Windown_1.Windown.TaiXiu.sound.playClick();
          this.edbChat.string = "";
        }
      };
      __decorate([ property(cc.ScrollView) ], ChatTaiXiu.prototype, "scrChat", void 0);
      __decorate([ property(cc.Node) ], ChatTaiXiu.prototype, "itemChat", void 0);
      __decorate([ property(cc.EditBox) ], ChatTaiXiu.prototype, "edbChat", void 0);
      ChatTaiXiu = __decorate([ ccclass ], ChatTaiXiu);
      return ChatTaiXiu;
    }(cc.Component);
    exports.default = ChatTaiXiu;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  ChiTietPhien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bf8dPlDgtLH4DJxMXhdRAS", "ChiTietPhien");
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
    var BaseScrollView_1 = require("../../../Scritps/Parent/BaseScrollView");
    var PageData_1 = require("../../../Scritps/Popup/PageData/PageData");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrTai = null;
        _this.scrXiu = null;
        _this.parentResult = null;
        _this.lbPhien = null;
        _this.lbSumTai = null;
        _this.lbSumXiu = null;
        _this.lbMd5 = null;
        _this.lbMd5Raw = null;
        _this.skeWin = null;
        _this.pageDate = null;
        _this.iconTai = null;
        _this.iconXiu = null;
        _this.arrHistory = null;
        _this.xTai = -287.397;
        _this.xXiu = 303.528;
        return _this;
      }
      NewClass.prototype.start = function() {
        Windown_1.Windown.TaiXiu && Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXinfoRoundBetOld, null);
      };
      NewClass.prototype.responseServer = function(SFSObject) {
        var arr = SFSObject.getSFSArray("data");
        this.arrHistory = arr;
        this.pageDate.setTotalPage(arr.size(), true);
        Windown_1.Windown.UIManager.hideLoading();
      };
      NewClass.prototype.onChangePage = function(index) {
        var object = this.arrHistory.getSFSObject(index - 1);
        var arrResult = JSON.parse(object.get("view"));
        var totalRrsult = object.get("result");
        var phien = object.get("rounds");
        var md5 = object.get("MD5");
        var md5Raw = object.get("MD5finish");
        var arrBetTai = object.getSFSArray("dataTai");
        var arrBetXiu = object.getSFSArray("dataXiu");
        var arrTai = [];
        var arrXiu = [];
        var sumTai = 0;
        var sumXiu = 0;
        for (var i = 0, l = arrBetTai.size(); i < l; i++) {
          var obj = arrBetTai.getSFSObject(i);
          arrTai.push(obj);
          sumTai += obj.get("agBet");
        }
        for (var i = 0, l = arrBetXiu.size(); i < l; i++) {
          var obj = arrBetXiu.getSFSObject(i);
          arrXiu.push(obj);
          sumXiu += obj.get("agBet");
        }
        this.scrTai.resetScr();
        this.scrXiu.resetScr();
        this.scrTai.init(arrTai);
        this.scrXiu.init(arrXiu);
        this.parentResult.children.forEach(function(v, index) {
          var ske = v.getComponent(sp.Skeleton);
          ske.setAnimation(0, arrResult[index].toString(), false);
        });
        this.lbPhien.string = "#" + phien;
        this.setInfoSkeWin(totalRrsult);
        this.lbMd5.string = md5;
        this.lbMd5Raw.string = md5Raw;
        this.lbSumTai.string = Windown_1.Windown.formatNumber(sumTai);
        this.lbSumXiu.string = Windown_1.Windown.formatNumber(sumXiu);
      };
      NewClass.prototype.setInfoSkeWin = function(result) {
        if (result > 10) {
          this.skeWin.node.x = this.xTai;
          this.skeWin.setAnimation(0, "tai", true);
          this.iconTai.active = false;
          this.iconXiu.active = true;
        } else {
          this.skeWin.node.x = this.xXiu;
          this.skeWin.setAnimation(0, "xiu", true);
          this.iconTai.active = true;
          this.iconXiu.active = false;
        }
      };
      NewClass.prototype.onClickClose = function() {
        Windown_1.Windown.TaiXiu && (Windown_1.Windown.TaiXiu.chiTietPhien = null);
        this.node.destroy();
      };
      NewClass.prototype.onClickCopyMd5 = function() {
        Windown_1.Windown.coppyToClip(this.lbMd5.string);
      };
      NewClass.prototype.onClickCopyMd5Raw = function() {
        Windown_1.Windown.coppyToClip(this.lbMd5Raw.string);
      };
      __decorate([ property(BaseScrollView_1.default) ], NewClass.prototype, "scrTai", void 0);
      __decorate([ property(BaseScrollView_1.default) ], NewClass.prototype, "scrXiu", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentResult", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbPhien", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbSumTai", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbSumXiu", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMd5", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMd5Raw", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "skeWin", void 0);
      __decorate([ property(PageData_1.default) ], NewClass.prototype, "pageDate", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "iconTai", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "iconXiu", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Parent/BaseScrollView": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  HistoryTaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff4fcF+IXRDPIdqd6qFPT61", "HistoryTaiXiu");
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
        _this.parentItem = null;
        _this.itemTemp = null;
        _this.listSp = [];
        _this.xStart = -1;
        _this.listHistory = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.xStart = this.itemTemp.x;
      };
      NewClass.prototype.init = function(listHistory, isGame) {
        this.listHistory = listHistory;
        var statr = cc.misc.clampf(listHistory.length - 18, 0, listHistory.length - 2);
        var width = this.itemTemp.width;
        var xStart = this.xStart;
        for (var i = statr, l = listHistory.length; i < l; i++) {
          var node = this.parentItem.children[i - statr];
          if (null == node) {
            node = cc.instantiate(this.itemTemp);
            node.parent = this.parentItem;
          }
          node.stopAllActions();
          node.x = xStart;
          node.getComponent(cc.Sprite).spriteFrame = this.listSp[listHistory[i].result > 10 ? 0 : 1];
          xStart += width + 5.3;
        }
        var lastNode = this.parentItem.children[this.parentItem.childrenCount - 1];
        if (lastNode) {
          lastNode.scale = 1.2;
          lastNode.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, 1.2))));
        }
      };
      NewClass.prototype.addResult = function(result, listView) {
        var obj = Object.create(null);
        obj.result = result;
        obj.view = listView;
        this.listHistory.shift();
        this.listHistory.push(obj);
        this.init(this.listHistory, true);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemTemp", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSp", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  HuongDan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1063alBA/dIzqKPqymR44h3", "HuongDan");
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
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onClickClose = function() {
        this.node.destroy();
      };
      NewClass.prototype.onClickOpenLink = function() {
        cc.sys.openURL("https://md5.services/");
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  InfoBetTX: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57cdbGQJOZM/ZhTcBUF9U9Z", "InfoBetTX");
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
    var InfoBetTX = function(_super) {
      __extends(InfoBetTX, _super);
      function InfoBetTX() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbBetTotal = null;
        _this.lbCountUser = null;
        _this.lbMeBet = null;
        _this.lbMeTempBet = null;
        _this.btnActiveBet = null;
        _this.type = 0;
        _this.spineWin = null;
        _this.icon = null;
        _this.totalBet = 0;
        _this.lastBet = 0;
        return _this;
      }
      InfoBetTX.prototype.setMoneyMeBet = function(money) {
        this.lbMeBet.string = Windown_1.Windown.formatNumber(money);
        if (0 == money) {
          this.lbMeBet.string = "";
          this.lastBet = this.totalBet;
          this.spineWin.node.active = false;
          this.icon.active = true;
        }
        this.totalBet = money;
      };
      InfoBetTX.prototype.setMoneyTempBet = function(money) {
        this.lbMeTempBet.string = Windown_1.Windown.formatNumber(money);
      };
      InfoBetTX.prototype.setMoneyTotalUserBet = function(money) {
        var stringTemp = Windown_1.Windown.formatNumber(money);
        this.lbBetTotal.string != stringTemp && this.lbBetTotal.node.runAction(cc.sequence(cc.scaleTo(.05, 1.3), cc.scaleTo(.3, 1)));
        this.lbBetTotal.string = stringTemp;
      };
      InfoBetTX.prototype.setCountTotaluser = function(count) {
        this.lbCountUser.string = Windown_1.Windown.formatNumber(count);
      };
      InfoBetTX.prototype.onWin = function() {
        this.spineWin.node.active = true;
        this.icon.active = false;
        this.spineWin.setAnimation(0, this.spineWin.animation, true);
      };
      InfoBetTX.prototype.onClickBet = function() {
        Windown_1.Windown.TaiXiu.listInfo.forEach(function(v) {
          v.onHuyBet();
        });
        this.lbMeTempBet.node.parent.active = true;
        this.lbMeTempBet.string = "0";
        this.btnActiveBet.active = false;
        Windown_1.Windown.TaiXiu.banPhim.init(this);
      };
      InfoBetTX.prototype.onHuyBet = function() {
        this.lbMeTempBet.node.parent.active = false;
        this.btnActiveBet.active = true;
      };
      __decorate([ property(cc.Label) ], InfoBetTX.prototype, "lbBetTotal", void 0);
      __decorate([ property(cc.Label) ], InfoBetTX.prototype, "lbCountUser", void 0);
      __decorate([ property(cc.Label) ], InfoBetTX.prototype, "lbMeBet", void 0);
      __decorate([ property(cc.Label) ], InfoBetTX.prototype, "lbMeTempBet", void 0);
      __decorate([ property(cc.Node) ], InfoBetTX.prototype, "btnActiveBet", void 0);
      __decorate([ property(cc.Integer) ], InfoBetTX.prototype, "type", void 0);
      __decorate([ property(sp.Skeleton) ], InfoBetTX.prototype, "spineWin", void 0);
      __decorate([ property(cc.Node) ], InfoBetTX.prototype, "icon", void 0);
      InfoBetTX = __decorate([ ccclass ], InfoBetTX);
      return InfoBetTX;
    }(cc.Component);
    exports.default = InfoBetTX;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemChiTietPhien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46d3cmoSNRJKYxA2We3DXFS", "ItemChiTietPhien");
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
        _this.lbName = null;
        _this.lbBet = null;
        return _this;
      }
      NewClass.prototype.initItem = function(SFSObject) {
        this.lbTime.string = Windown_1.Windown.formatDate(new Date(SFSObject.get("timeBet")), "HH:mm:ss");
        this.lbName.string = SFSObject.get("name");
        this.lbBet.string = Windown_1.Windown.formatNumber(SFSObject.get("agBet"));
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbBet", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemTopTx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b276c7Z0cpB2resRj2n2r/Y", "ItemTopTx");
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
        _this.idPlayer = null;
        return _this;
      }
      NewClass.prototype.initItem = function(SFSObject) {
        var listLable = this.getComponentsInChildren(cc.Label);
        listLable[1].string = SFSObject.get("nickname");
        listLable[2].string = Windown_1.Windown.formatNumber(SFSObject.get("agWin"), false);
        var spAva = cc.find("ava", this.node).getComponent(cc.Sprite);
        this.idPlayer = SFSObject.get("iduser");
        Windown_1.Windown.updateAvatar(SFSObject, spAva);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.onDestroy = function() {};
      NewClass.prototype.onClick = function() {
        return;
        var SFSObject;
      };
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
  LichSuCuoc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "541b7z2VoZHNbTFPrmHaAaU", "LichSuCuoc");
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
    var PageData_1 = require("../../../Scritps/Popup/PageData/PageData");
    var Windown_1 = require("../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.parentItem = null;
        _this.maxRow = 7;
        _this.listData = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXhistoryBet, null);
      };
      NewClass.prototype.response = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var sfsArry = SFSObject.getSFSArray("history");
        sfsArry._dataHolder.reverse();
        var lengthRows = sfsArry.size();
        var totalPage = parseInt(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.listData = sfsArry;
        this.pageDate.setTotalPage(totalPage);
        this.onChangePage(1);
      };
      NewClass.prototype.onChangePage = function(index) {
        var parent = this.parentItem;
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
            this.initItem(node, sfsObj, i);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      NewClass.prototype.initItem = function(node, data, index) {
        var listLb = node.getComponentsInChildren(cc.Label);
        var result = data.get("info");
        listLb[0].string = "#" + data.get("round");
        listLb[1].string = Windown_1.Windown.formatDate(new Date(data.get("time")), "dd/MM\nHH:mm:ss");
        listLb[2].string = Windown_1.Windown.formatNumber(data.get("bet"), false);
        node.getComponentInChildren(cc.Sprite).enabled = index % 2 == 0;
        var stringBet = "";
        if (data.get("agWin") <= 0) {
          listLb[3].string = "-" + Windown_1.Windown.formatNumber(data.get("bet"), false);
          listLb[3].node.color = cc.Color.RED;
          stringBet = "T\xe0i" == result ? "X\u1ec9u" : "T\xe0i";
        } else {
          listLb[3].string = "+" + Windown_1.Windown.formatNumber(data.get("agWin"), false);
          listLb[3].node.color = cc.Color.GREEN;
          stringBet = "T\xe0i" == result ? "T\xe0i" : "X\u1ec9u";
        }
        listLb[4].string = "K\u1ebft qu\u1ea3: " + result + "\n\u0110\u1eb7t " + stringBet + ": " + Windown_1.Windown.formatNumber(data.get("bet")) + " Nh\u1eadn: " + Windown_1.Windown.formatNumber(data.get("agWin"));
      };
      NewClass.prototype.onClickClose = function() {
        Windown_1.Windown.TaiXiu && (Windown_1.Windown.TaiXiu.lichSuCuoc = null);
        this.node.destroy();
      };
      __decorate([ property(PageData_1.default) ], NewClass.prototype, "pageDate", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  SoiCau: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9f47ytNz5MwZ4VNOHL7XKi", "SoiCau");
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
        _this.listSpKetQua = [];
        _this.listSpTaiXiu = [];
        _this.Cau1 = null;
        _this.Cau2 = null;
        _this.Cau3 = null;
        _this.Cau4 = null;
        _this.index = 0;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.emitAllCau();
      };
      NewClass.prototype.emitAllCau = function() {
        this.initCau1();
        this.initCau2();
        this.initCau3();
        this.initCau4();
      };
      NewClass.prototype.initCau1 = function() {
        var _this = this;
        var parent = cc.find("parentItem", this.Cau1);
        var startX = -451.117;
        var startY = 63.783;
        var offSetX = 46.45;
        var offSetY = 33.8;
        var listResult = Windown_1.Windown.TaiXiu.history.listHistory;
        var children = parent.children;
        var itemTemplate = children[0];
        var count = 0;
        var heSo = -1;
        var countT = 0;
        var countX = 0;
        listResult.forEach(function(v, i) {
          var sum = v.result;
          sum > 10 ? countT++ : countX++;
          var spF = _this.getSpTaiXiu(sum);
          var node = children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = parent;
          }
          node.setPosition(cc.v2(startX, startY));
          node.getComponent(cc.Sprite).spriteFrame = spF;
          count++;
          if (count >= 5) {
            startX += offSetX;
            heSo *= -1;
            count = 0;
          } else startY += offSetY * heSo;
        });
        cc.find("tai", this.Cau1).getComponentInChildren(cc.Label).string = "" + countT;
        cc.find("xiu", this.Cau1).getComponentInChildren(cc.Label).string = "" + countX;
      };
      NewClass.prototype.initCau2 = function() {
        var _this = this;
        var parent = cc.find("parentItem", this.Cau2);
        var startX = -418.167;
        var startY = 28.06;
        var tempY = startY;
        var offSetX = 44.1;
        var offSetY = 27.5;
        var listResult = Windown_1.Windown.TaiXiu.history.listHistory.slice();
        var listTemp = [];
        var count = 0;
        var listChild = [];
        listResult.forEach(function(v, i) {
          var sum = v.result;
          var current = sum > 10;
          var next = !!(listResult[i + 1] && listResult[i + 1].result > 10);
          listChild.push(sum);
          count++;
          if (count >= 5 || current != next) {
            count = 0;
            listTemp.push(listChild.slice());
            listChild.length = 0;
          }
        });
        listChild.length > 0 && listTemp.push(listChild.slice());
        cc.log(JSON.stringify(listTemp));
        listTemp = listTemp.slice(cc.misc.clampf(listTemp.length - 20, 0, listTemp.length), listTemp.length);
        cc.log(JSON.stringify(listTemp));
        var countChild = 0;
        var children = parent.children;
        var itemTemplate = children[0];
        children.forEach(function(v) {
          return v.active = false;
        });
        listTemp.forEach(function(v) {
          v.reverse();
          v.forEach(function(c) {
            var spF = _this.getSpResult(c);
            var node = children[countChild];
            if (null == node) {
              node = cc.instantiate(itemTemplate);
              node.parent = parent;
            }
            node.active = true;
            node.setPosition(cc.v2(startX, startY));
            node.getComponent(cc.Sprite).spriteFrame = spF;
            startY -= offSetY;
            countChild++;
          });
          startY = tempY;
          startX += offSetX;
        });
      };
      NewClass.prototype.initCau3 = function() {
        var _this = this;
        var parent = cc.find("parentItem", this.Cau3);
        var line = cc.find("Line", this.Cau3).getComponent(cc.Graphics);
        line.clear(true);
        var startX = -414.419;
        var startY = 14.775;
        var offSetX = 41.5;
        var offSetY = 8;
        var length = Windown_1.Windown.TaiXiu.history.listHistory.length;
        var listResult = Windown_1.Windown.TaiXiu.history.listHistory.slice(cc.misc.clampf(length - 21, 0, length), length);
        var children = parent.children;
        var itemTemplate = children[0];
        line.lineWidth = 5;
        listResult.forEach(function(v, i) {
          var sum = v.result;
          var spF = _this.getSpResult(sum);
          var node = children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = parent;
          }
          node.setPosition(cc.v2(startX, startY + (sum - 3) * offSetY));
          0 == i ? line.moveTo(node.x, node.y) : line.lineTo(node.x, node.y);
          node.getComponent(cc.Sprite).spriteFrame = spF;
          startX += offSetX;
        });
        line.stroke();
        var lable = cc.find("Title", this.Cau3).getComponent(cc.Label);
        var infoLast = listResult[listResult.length - 1];
        var sum = infoLast.result;
        var listView = JSON.parse(infoLast.view);
        var stringTemp = "Phi\xean g\u1ea7n nh\u1ea5t: " + (sum > 10 ? "T\xe0i" : "X\u1ec9u") + "(" + listView[0] + "-" + listView[1] + "-" + listView[2] + ")";
        lable.string = stringTemp;
      };
      NewClass.prototype.initCau4 = function() {
        var length = Windown_1.Windown.TaiXiu.history.listHistory.length;
        var listResult = Windown_1.Windown.TaiXiu.history.listHistory.slice(cc.misc.clampf(length - 21, 0, length), length);
        var _loop_1 = function(z) {
          var Cau4 = cc.find("parentItem" + z, this_1.Cau4);
          var parent = cc.find("parentItem", Cau4);
          var line = cc.find("Line", Cau4).getComponent(cc.Graphics);
          line.clear(true);
          var startX = -414.419;
          var startY = -157.713;
          var offSetX = 41.5;
          var offSetY = 26;
          var children = parent.children;
          var itemTemplate = children[0];
          line.lineWidth = 4;
          listResult.forEach(function(v, i) {
            var sum = JSON.parse(v.view)[z - 1];
            var node = children[i];
            if (null == node) {
              node = cc.instantiate(itemTemplate);
              node.parent = parent;
            }
            node.setPosition(cc.v2(startX, startY + (sum - 1) * offSetY));
            0 == i ? line.moveTo(node.x, node.y) : line.lineTo(node.x, node.y);
            startX += offSetX;
          });
          line.stroke();
        };
        var this_1 = this;
        for (var z = 1; z < 4; z++) _loop_1(z);
      };
      NewClass.prototype.onClickChangePage = function(event, data) {
        if ("0" == data) {
          this.Cau1.active = true;
          this.Cau2.active = true;
          this.Cau3.active = false;
          this.Cau4.active = false;
        } else {
          this.Cau1.active = false;
          this.Cau2.active = false;
          this.Cau3.active = true;
          this.Cau4.active = true;
        }
      };
      NewClass.prototype.onToggleXiNgau = function(event, data) {
        var index = JSON.parse(data);
        var parent = cc.find("parentItem" + index, this.Cau4);
        parent.active = event.isChecked;
      };
      NewClass.prototype.getSpTaiXiu = function(sum) {
        if (sum > 10) return this.listSpTaiXiu[1];
        return this.listSpTaiXiu[0];
      };
      NewClass.prototype.getSpResult = function(sum) {
        return this.listSpKetQua[sum - 3];
      };
      NewClass.prototype.onClickClose = function() {
        Windown_1.Windown.TaiXiu && (Windown_1.Windown.TaiXiu.soiCau = null);
        this.node.destroy();
      };
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpKetQua", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "listSpTaiXiu", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "Cau1", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "Cau2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "Cau3", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "Cau4", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  SoundTaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46b169IDq5IRaHLV2Hj8z/l", "SoundTaiXiu");
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
        _this.click = null;
        _this.ketQua = null;
        _this.lacxiNgau = null;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        Windown_1.Windown.AudioManager && Windown_1.Windown.AudioManager.isActiveSound && this.click.play();
      };
      NewClass.prototype.playKetQua = function() {
        Windown_1.Windown.AudioManager && Windown_1.Windown.AudioManager.isActiveSound && this.ketQua.play();
      };
      NewClass.prototype.playTungXucXac = function() {
        Windown_1.Windown.AudioManager && Windown_1.Windown.AudioManager.isActiveSound && this.lacxiNgau.play();
      };
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "click", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "ketQua", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "lacxiNgau", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  TaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "857dbIExzlDg4uSgzwEaILu", "TaiXiu");
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
    var REQUEST_CODE_1 = require("../../../Scritps/DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var DragMiniGame_1 = require("../../../Scritps/Other/DragMiniGame");
    var OffMiniGame_1 = require("../../../Scritps/Other/OffMiniGame");
    var Windown_1 = require("../../../Scritps/Windown");
    var BanPhimTaiXiu_1 = require("./BanPhimTaiXiu");
    var BatDrag_1 = require("./BatDrag");
    var ChatTaiXiu_1 = require("./ChatTaiXiu");
    var ChiTietPhien_1 = require("./ChiTietPhien");
    var HistoryTaiXiu_1 = require("./HistoryTaiXiu");
    var InfoBetTX_1 = require("./InfoBetTX");
    var LichSuCuoc_1 = require("./LichSuCuoc");
    var SoiCau_1 = require("./SoiCau");
    var SoundTaiXiu_1 = require("./SoundTaiXiu");
    var TopTaiXiu_1 = require("./TopTaiXiu");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbMd5 = null;
        _this.lbMd5Raw = null;
        _this.lbPhien = null;
        _this.lbThongBao = null;
        _this.nodeTimeGame = null;
        _this.lbTimeEnd = null;
        _this.listInfo = [];
        _this.banPhim = null;
        _this.history = null;
        _this.lichSuCuoc = null;
        _this.top = null;
        _this.soiCau = null;
        _this.parentResult = null;
        _this.batDrag = null;
        _this.lbAgWin = null;
        _this.spineTungXucXac = null;
        _this.chatView = null;
        _this.sound = null;
        _this.gameType = 0;
        _this.sfs = null;
        _this.roomSFS = null;
        _this.objFinish = null;
        _this.chiTietPhien = null;
        _this.funCountDown = null;
        _this.funDelayUpBat = null;
        _this.funDelayUpBat2 = null;
        _this.funAutoBet = null;
        _this.isDelayLeave = false;
        return _this;
      }
      NewClass.prototype.start = function() {
        Windown_1.Windown.TaiXiu = this;
        this.gameType = GAME_TYPE_1.default.TaiXiu;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.onChangRotate, this);
        cc.systemEvent.on(cc.game.EVENT_SHOW, this.eventShow, this);
        this.getComponent(DragMiniGame_1.default).nomalSize();
        this.sendJoinRoom();
        this.listInfo.forEach(function(v) {
          v.onHuyBet();
          v.setMoneyMeBet(0);
          v.setMoneyTotalUserBet(0);
        });
        this.lbAgWin.node.active = false;
        this.spineTungXucXac.node.active = false;
        Windown_1.Windown.BtnMiniGame.onActiveTx();
        this.onChangRotate(Windown_1.Windown.UIManager.isVertical);
        cc.sys.isNative && jsb.Device.setKeepScreenOn(true);
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.TaiXiu = null;
      };
      NewClass.prototype.eventShow = function() {
        this.sendGetInfoRoom();
      };
      NewClass.prototype.onChangRotate = function(isVertical) {
        if (isVertical) {
          this.node.rotation = -90;
          this.node.scale = .9;
        } else {
          this.node.rotation = 0;
          this.node.scale = 1;
        }
      };
      NewClass.prototype.onClickTest = function() {
        var vecStart = this.batDrag.node.getPosition();
        this.batDrag.node.setPosition(80, 80);
        var vecChiPhuong = this.batDrag.node.getPosition().subSelf(vecStart);
        cc.log("trc do" + vecChiPhuong.toString());
        vecChiPhuong.normalizeSelf().mulSelf(300);
        cc.log(vecChiPhuong.toString());
        this.batDrag.node.runAction(cc.moveTo(.3, vecChiPhuong));
      };
      NewClass.prototype.sendJoinRoom = function() {
        Windown_1.Windown.UIManager.showLoading();
        var rooms = this.sfs.roomManager.getRoomListFromGroup("TX");
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
        } else this.scheduleOnce(this.sendJoinRoom, 3);
      };
      NewClass.prototype.sendGetInfoRoom = function() {
        this.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXinfoRoom, ConectManager_1.ConectManager.getIns().getSFSObj());
      };
      NewClass.prototype.userExitRoom = function(event) {
        var room = event.room;
        if ("MD5" == room.groupId) {
          cc.log("user exit room tx");
          var user = event.user;
          if (user.isItMe) {
            this.clear();
            this.node.destroy();
            return;
          }
        }
      };
      NewClass.prototype.onJoinRoom = function(event) {
        var room = event.room;
        if ("MD5" == room.groupId) {
          cc.log("r\xf4m lak " + room.id);
          Windown_1.Windown.UIManager.hideLoading();
        }
      };
      NewClass.prototype.sendRequest = function(code, sfsObj) {
        ConectManager_1.ConectManager.getIns().sendRequest(code, sfsObj, this.roomSFS);
      };
      NewClass.prototype.showLog = function(string, time) {
        void 0 === time && (time = 2);
        this.lbThongBao.string = string;
        var node = this.lbThongBao.node.parent.parent;
        node.stopAllActions();
        node.opacity = 0;
        node.y = 150;
        node.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, 0, 120).easing(cc.easeQuarticActionOut()), cc.fadeIn(.3).easing(cc.easeQuarticActionOut())), cc.delayTime(time), cc.spawn(cc.moveTo(.3, 0, 150).easing(cc.easeQuarticActionIn()), cc.fadeOut(.3).easing(cc.easeQuarticActionIn()))));
      };
      NewClass.prototype.onJoinRoomErr = function(event) {
        cc.log("onJoinRoomErr ");
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      NewClass.prototype.extResponse = function(packet) {
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.TXstartGame:
          this.startGameTaiXiu(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXendGame:
          this.endGameTaiXiu(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXbet:
          this.responseBet(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXinfoRoundBetOld:
          this.chiTietPhien && this.chiTietPhien.responseServer(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXhistoryGame:
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXhistoryBet:
          this.lichSuCuoc && this.lichSuCuoc.response(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXtopGame:
          this.top && this.top.responseServer(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXinfoCurrentRoom:
          this.handleUpdateAllBet(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXinfoRoom:
          this.initGame(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.TXChat:
          this.chatView.addItemMess(SFSObject);
          break;

         default:
          cc.log("Khong vao Case Nao ca:" + code + "\n", Windown_1.Windown.SFSObjToJson(SFSObject));
        }
      };
      NewClass.prototype.miniSize = function() {
        cc.isValid(this.node, true) && (this.parentResult.opacity = 0);
      };
      NewClass.prototype.normalSize = function() {
        if (this.node && this.parentResult) {
          this.parentResult.opacity = 255;
          cc.log("normal size this.node.opacity:" + this.node.opacity);
        }
      };
      NewClass.prototype.initGame = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        this.parentResult.children.forEach(function(v, index) {
          v.getComponent(sp.Skeleton).setAnimation(0, null, false);
        });
        this.listInfo[1].setCountTotaluser(SFSObject.get("sizeT"));
        this.listInfo[1].setMoneyTotalUserBet(SFSObject.get("agBetT"));
        this.listInfo[1].setMoneyMeBet(SFSObject.get("UagBetT"));
        this.listInfo[0].setCountTotaluser(SFSObject.get("sizeX"));
        this.listInfo[0].setMoneyTotalUserBet(SFSObject.get("agBetX"));
        this.listInfo[0].setMoneyMeBet(SFSObject.get("UagBetX"));
        var isGame = SFSObject.get("isGame");
        var time = SFSObject.get("time");
        var phien = SFSObject.get("rounds");
        this.setHistory(SFSObject.get("history"), isGame);
        SFSObject.containsKey("dataChat") && this.chatView.setInfo(SFSObject.getSFSArray("dataChat"));
        this.batDrag.reset();
        this.parentResult.active = false;
        if (isGame) this.botAutoBet(time); else {
          var view_1 = JSON.parse(SFSObject.get("view"));
          this.batDrag.handleFinish();
          this.parentResult.active = true;
          this.parentResult.children.forEach(function(v, index) {
            v.getComponent(sp.Skeleton).setAnimation(0, view_1[index].toString(), false);
          });
        }
        this.setupByStatusGame(isGame, time);
        this.lbPhien.string = "#" + phien;
        this.lbAgWin.node.active = false;
        this.unschedule(this.funDelayUpBat);
        this.unschedule(this.funDelayUpBat2);
        this.spineTungXucXac.node.active = false;
        var node = this.lbThongBao.node.parent.parent;
        node.stopAllActions();
        node.opacity = 0;
      };
      NewClass.prototype.setHistory = function(string, isGame) {
        var obj = JSON.parse(LZString.decompressFromBase64(string));
        this.history.init(obj, isGame);
      };
      NewClass.prototype.botAutoBet = function(time) {
        var _this = this;
        if (Windown_1.Windown.BotController && Windown_1.Windown.RandomNumber(0, 100) < 60) {
          this.unschedule(this.funAutoBet);
          this.scheduleOnce(this.funAutoBet = function() {
            var listBet = [ 1e3, 1e4, 5e4, 1e5, 5e5, 1e6 ];
            var listCanBet = listBet.filter(function(v, i) {
              return v < Windown_1.Windown.User.userAg;
            });
            if (listCanBet.length > 0) {
              var type_1 = Windown_1.Windown.RandomNumber(0, 2);
              var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("type", type_1);
              sfsObj.putLong("bet", listCanBet[Windown_1.Windown.RandomNumber(0, listCanBet.length)]);
              Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXbet, sfsObj);
              Windown_1.Windown.RandomNumber(0, 100) < 20 && _this.scheduleOnce(function() {
                listCanBet = listBet.filter(function(v, i) {
                  return v < Windown_1.Windown.User.userAg;
                });
                if (listCanBet.length > 0) {
                  var sfsObj_1 = ConectManager_1.ConectManager.getIns().getSFSObj();
                  sfsObj_1.putInt("type", type_1);
                  sfsObj_1.putLong("bet", listCanBet[Windown_1.Windown.RandomNumber(0, listCanBet.length)]);
                  Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXbet, sfsObj_1);
                }
              }, Windown_1.Windown.RandomNumber(1, cc.misc.clampf(5, 0, time - 2)));
            } else Windown_1.Windown.restartGame();
          }, Windown_1.Windown.RandomNumber(1, time - 3));
        }
      };
      NewClass.prototype.startGameTaiXiu = function(SFSObject) {
        var _this = this;
        var _a;
        var phien = SFSObject.get("round");
        var MD5 = SFSObject.get("MD5");
        var time = SFSObject.get("time");
        this.listInfo.forEach(function(v) {
          v.onHuyBet();
          v.setMoneyMeBet(0);
          v.setMoneyTotalUserBet(0);
        });
        this.lbPhien.string = "#" + phien;
        this.setupByStatusGame(true, time);
        this.nodeTimeGame.active = false;
        this.spineTungXucXac.node.active = true;
        this.spineTungXucXac.setAnimation(0, "effect", false);
        this.parentResult.children.forEach(function(v, index) {
          v.getComponent(sp.Skeleton).setAnimation(0, "xi ngau bay " + Windown_1.Windown.RandomNumber(1, 7), false);
        });
        this.scheduleOnce(this.funDelayUpBat = function() {
          _this.scheduleOnce(_this.funDelayUpBat2 = function() {
            _this.parentResult.active = false;
          }, .5);
          _this.batDrag.startGame();
          _this.scheduleOnce(function() {
            _this.nodeTimeGame.active = true;
          }, 1);
        }, 1.8);
        this.objFinish = null;
        this.lbAgWin.node.active = false;
        null === (_a = this.sound) || void 0 === _a ? void 0 : _a.playTungXucXac();
        this.botAutoBet(time);
        this.isDelayLeave && this.onClickClose();
      };
      NewClass.prototype.endGameTaiXiu = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var views = JSON.parse(SFSObject.get("view"));
        var agWin = SFSObject.get("agWin");
        var md5 = SFSObject.get("MD5");
        var time = SFSObject.get("time");
        var moneyUser = SFSObject.get("agUser");
        this.unschedule(this.funDelayUpBat);
        this.unschedule(this.funDelayUpBat2);
        this.parentResult.active = true;
        this.parentResult.children.forEach(function(v, index) {
          v.getComponent(sp.Skeleton).setAnimation(0, views[index].toString(), false);
        });
        this.setupByStatusGame(false, time);
        this.objFinish = SFSObject;
        Windown_1.Windown.MoneyUser.pushDelayMoney(this.gameType, moneyUser, agWin);
        this.batDrag.handleFinish();
        this.batDrag.isNan && this.showLog("Xin m\u1eddi n\u1eb7n!", .5);
      };
      NewClass.prototype.handleFinish = function() {
        var SFSObject = this.objFinish;
        if (null == SFSObject) return;
        var views = JSON.parse(SFSObject.get("view"));
        var agWin = SFSObject.get("agWin");
        var md5 = SFSObject.get("MD5");
        this.setLbMd5(md5);
        var sum = 0;
        views.forEach(function(v) {
          sum += v;
        });
        sum > 10 ? this.listInfo[1].onWin() : this.listInfo[0].onWin();
        this.history.addResult(sum, SFSObject.get("view"));
        this.soiCau && this.soiCau.emitAllCau();
        if (agWin > 0) {
          this.lbAgWin.string = "+" + Windown_1.Windown.formatNumber(agWin, false);
          this.lbAgWin.node.active = true;
          this.lbAgWin.node.opacity = 255;
          this.lbAgWin.node.stopAllActions();
          this.lbAgWin.node.y = -18;
          this.lbAgWin.node.runAction(cc.sequence(cc.moveTo(2, 0, 50).easing(cc.easeQuadraticActionOut()), cc.delayTime(2), cc.fadeOut(1)));
        }
        Windown_1.Windown.MoneyUser.removeDelay(this.gameType);
        Windown_1.Windown.TaiXiu.sound.playKetQua();
        this.objFinish = null;
      };
      NewClass.prototype.responseBet = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject);
        var type = SFSObject.getInt("type");
        var moneyBet = SFSObject.getLong("bet");
        var moneyTotalBet = SFSObject.getLong("ttBet");
        var moneyUser = SFSObject.get("ag");
        Windown_1.Windown.MoneyUser.subMoney(moneyBet, moneyUser);
        this.getInfoBetByType(type).setMoneyMeBet(moneyTotalBet);
        this.banPhim.reset();
        this.listInfo.forEach(function(v) {
          return v.setMoneyTempBet(0);
        });
        this.showLog("\u0110\u1eb7t c\u01b0\u1ee3c th\xe0nh c\xf4ng");
      };
      NewClass.prototype.setLbMd5 = function(string) {
        cc.Tween.stopAllByTarget(this.lbMd5);
      };
      NewClass.prototype.setLbMd5Raw = function(string) {
        var _this = this;
        cc.Tween.stopAllByTarget(this.lbMd5Raw);
        cc.tween(this.lbMd5Raw).to(.3, {
          time: {
            value: 1,
            progress: function(start, end, current, ratio) {
              var _current = start + (end - start) * ratio;
              var num = cc.misc.lerp(0, string.length, _current);
              _this.lbMd5Raw.string = string.substring(0, num);
              return _current;
            }
          }
        }).start();
      };
      NewClass.prototype.onClickCoppyMd5 = function() {
        Windown_1.Windown.coppyToClip(this.lbMd5.string);
      };
      NewClass.prototype.onClickCoppyMd5Raw = function() {
        Windown_1.Windown.coppyToClip(this.lbMd5Raw.string);
      };
      NewClass.prototype.setupByStatusGame = function(status, time) {
        var _this = this;
        this.unschedule(this.funCountDown);
        time = parseInt(time);
        time -= 2;
        time < 0 && (time = 0);
        if (status) {
          this.nodeTimeGame.active = true;
          this.lbTimeEnd.node.parent.active = false;
          var listLabel_1 = this.nodeTimeGame.getComponentsInChildren(cc.Label);
          this.schedule(this.funCountDown = function() {
            if (time < 10) {
              listLabel_1[0].string = "0";
              listLabel_1[1].string = time;
            } else {
              listLabel_1[0].string = time.toString()[0];
              listLabel_1[1].string = time.toString()[1];
            }
            time--;
          }, 1, time, .01);
        } else {
          this.lbTimeEnd.string = time;
          this.nodeTimeGame.active = false;
          this.lbTimeEnd.node.parent.active = true;
          this.schedule(this.funCountDown = function() {
            _this.lbTimeEnd.string = (time < 10 ? "0" : "") + time;
            time--;
            time < 5 && _this.batDrag.checkOpenBat();
          }, 1, time, .01);
        }
      };
      NewClass.prototype.handleUpdateAllBet = function(SFSObject) {
        this.listInfo[1].setCountTotaluser(SFSObject.get("sizeT"));
        this.listInfo[1].setMoneyTotalUserBet(SFSObject.get("agBetT"));
        this.listInfo[0].setCountTotaluser(SFSObject.get("sizeX"));
        this.listInfo[0].setMoneyTotalUserBet(SFSObject.get("agBetX"));
      };
      NewClass.prototype.clear = function() {
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
      NewClass.prototype.getInfoBetByType = function(type) {
        if (0 == type) return this.listInfo[0];
        return this.listInfo[1];
      };
      NewClass.prototype.onDisconnect = function() {
        this.clear();
        this.node.destroy();
      };
      NewClass.prototype.onToggleBat = function(event, data) {
        var isCheck = event.isChecked;
        this.batDrag.setIsNan(isCheck);
      };
      NewClass.prototype.onClickClose = function() {
        Windown_1.Windown.BtnMiniGame.onDeActiveTx();
        Windown_1.Windown.UIManager.parentMiniGame.getComponentInChildren(OffMiniGame_1.default)._touchStart(null);
        if (this.checkIsBet()) {
          this.node.setPosition(1e4, 1e4);
          this.node.opacity = 0;
          this.isDelayLeave = true;
        } else {
          this.node.active = false;
          this.node.opacity = 255;
          try {
            ConectManager_1.ConectManager.getIns().sendLeaveRoom(this.roomSFS);
          } catch (error) {
            this.clear();
            this.node.destroy();
          }
        }
      };
      NewClass.prototype.checkIsBet = function() {
        for (var _i = 0, _a = this.listInfo; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.totalBet > 0) return true;
        }
        return false;
      };
      NewClass.prototype.onClickChiTietPhien = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/ChiTietPhien", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentPopup;
              this.chiTietPhien = node.getComponent(ChiTietPhien_1.default);
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.onClickHuongDan = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/HuongDan", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentPopup;
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.onClickSoiCau = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/SoiCau", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentPopup;
              this.soiCau = node.getComponent(SoiCau_1.default);
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.onClickLichSuCuoc = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/LichSuCuoc", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentPopup;
              this.lichSuCuoc = node.getComponent(LichSuCuoc_1.default);
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.onClickTop = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadRes(this.gameType.toString(), "Prefabs/TopTaiXiu", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentPopup;
              this.top = node.getComponent(TopTaiXiu_1.default);
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMd5", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMd5Raw", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbPhien", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbThongBao", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeTimeGame", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTimeEnd", void 0);
      __decorate([ property(InfoBetTX_1.default) ], NewClass.prototype, "listInfo", void 0);
      __decorate([ property(BanPhimTaiXiu_1.default) ], NewClass.prototype, "banPhim", void 0);
      __decorate([ property(HistoryTaiXiu_1.default) ], NewClass.prototype, "history", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentResult", void 0);
      __decorate([ property(BatDrag_1.default) ], NewClass.prototype, "batDrag", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbAgWin", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "spineTungXucXac", void 0);
      __decorate([ property(ChatTaiXiu_1.default) ], NewClass.prototype, "chatView", void 0);
      __decorate([ property(SoundTaiXiu_1.default) ], NewClass.prototype, "sound", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Other/DragMiniGame": void 0,
    "../../../Scritps/Other/OffMiniGame": void 0,
    "../../../Scritps/Windown": void 0,
    "./BanPhimTaiXiu": "BanPhimTaiXiu",
    "./BatDrag": "BatDrag",
    "./ChatTaiXiu": "ChatTaiXiu",
    "./ChiTietPhien": "ChiTietPhien",
    "./HistoryTaiXiu": "HistoryTaiXiu",
    "./InfoBetTX": "InfoBetTX",
    "./LichSuCuoc": "LichSuCuoc",
    "./SoiCau": "SoiCau",
    "./SoundTaiXiu": "SoundTaiXiu",
    "./TopTaiXiu": "TopTaiXiu"
  } ],
  TopTaiXiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1c17E3ypRP6bi2UeaRmXpr", "TopTaiXiu");
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
    var Windown_1 = require("../../../Scritps/Windown");
    var ItemTopTx_1 = require("./ItemTopTx");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        Windown_1.Windown.TaiXiu.sendRequest(REQUEST_CODE_1.REQUEST_CODE.TXtopGame, null);
      };
      NewClass.prototype.responseServer = function(SFSObject) {
        var sfsArr = SFSObject.getSFSArray("data");
        var listChild = this.parentItem.children;
        for (var i = 0, l = cc.misc.clampf(sfsArr.size(), 0, this.parentItem.childrenCount); i < l; i++) {
          var SFSObject_1 = sfsArr.getSFSObject(i);
          var node = listChild[i];
          node.active = true;
          node.getComponent(ItemTopTx_1.default).initItem(SFSObject_1);
        }
        for (var i = cc.misc.clampf(sfsArr.size(), 0, this.parentItem.childrenCount); i < listChild.length; i++) listChild[i].active = false;
      };
      NewClass.prototype.onClickClose = function() {
        Windown_1.Windown.TaiXiu && (Windown_1.Windown.TaiXiu.top = null);
        this.node.destroy();
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Windown": void 0,
    "./ItemTopTx": "ItemTopTx"
  } ]
}, {}, [ "BanPhimTaiXiu", "BatDrag", "ChatTaiXiu", "ChiTietPhien", "HistoryTaiXiu", "HuongDan", "InfoBetTX", "ItemChiTietPhien", "ItemTopTx", "LichSuCuoc", "SoiCau", "SoundTaiXiu", "TaiXiu", "TopTaiXiu" ]);