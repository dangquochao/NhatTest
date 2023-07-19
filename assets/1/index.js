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
  BaseButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fb0epD9JpOPKJU2XkKBnxh", "BaseButton");
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
    var BaseButton = function(_super) {
      __extends(BaseButton, _super);
      function BaseButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePress = null;
        _this.timeDelay = .2;
        _this.timeUpdate = 0;
        _this.deltaPlus = 10;
        _this.funMaxSpeed = null;
        _this.funMaxSpeed2 = null;
        _this.isClick = false;
        _this.isInitEvent = false;
        _this.xengController = null;
        _this.soundManager = null;
        return _this;
      }
      BaseButton.prototype.onTouchStart = function(event) {
        var _this = this;
        this.timeDelay = .2;
        this.isClick = true;
        this.nodePress.active = true;
        this.deltaPlus = 10;
        this.onPress(this.deltaPlus * Windown_1.Windown.XengController.mutil);
        this.timeUpdate = 0;
        this.scheduleOnce(this.funMaxSpeed = function() {
          _this.timeDelay = 0;
          _this.schedule(_this.funMaxSpeed2 = function() {
            _this.deltaPlus += 10;
          }, .7);
        }, .5);
        event.stopPropagation();
      };
      BaseButton.prototype.initGameController = function(gv) {
        this.xengController = gv;
      };
      BaseButton.prototype.onTouchEnd = function(event) {
        this.isClick = false;
        this.timeDelay = .2;
        this.deltaPlus = 10;
        this.unschedule(this.funMaxSpeed);
        this.unschedule(this.funMaxSpeed2);
        this.nodePress.active = false;
        event.stopPropagation();
      };
      BaseButton.prototype.onTouchCancel = function(event) {
        this.isClick = false;
        this.timeDelay = .2;
        this.deltaPlus = 10;
        this.unschedule(this.funMaxSpeed);
        this.unschedule(this.funMaxSpeed2);
        this.nodePress.active = false;
        event.stopPropagation();
      };
      BaseButton.prototype.initEvent = function() {
        if (this.isInitEvent) return;
        this.timeDelay = .2;
        this.isInitEvent = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      BaseButton.prototype.offEvent = function() {
        if (!this.isInitEvent) return;
        this.timeUpdate = 0;
        this.isInitEvent = false;
        this.isClick = false;
        this.nodePress.active = false;
        this.node.targetOff(this);
      };
      BaseButton.prototype.onDestroy = function() {
        this.offEvent();
      };
      BaseButton.prototype.update = function(dt) {
        if (!this.isClick) return;
        this.timeUpdate += dt;
        if (this.timeUpdate < this.timeDelay) return;
        this.onPress(this.deltaPlus * Windown_1.Windown.XengController.mutil);
        this.timeUpdate = 0;
      };
      BaseButton.prototype.start = function() {
        this.nodePress.active = false;
        this.initEvent();
        this.xengController && (this.soundManager = this.xengController.getSoundMng());
        this.reset();
      };
      __decorate([ property(cc.Node) ], BaseButton.prototype, "nodePress", void 0);
      BaseButton = __decorate([ ccclass ], BaseButton);
      return BaseButton;
    }(cc.Component);
    exports.default = BaseButton;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0
  } ],
  BaseEffectAnTruoc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8a23y/rjpJS6MEeXwJuZZK", "BaseEffectAnTruoc");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseEffect_1 = require("./BaseEffect");
    var BaseEffectAnTruoc = function(_super) {
      __extends(BaseEffectAnTruoc, _super);
      function BaseEffectAnTruoc() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataFinishItemAnTruoc = null;
        return _this;
      }
      BaseEffectAnTruoc.prototype.intData = function(dataFinishItemAnTruoc) {
        this.dataFinishItemAnTruoc = dataFinishItemAnTruoc;
        return this;
      };
      return BaseEffectAnTruoc;
    }(BaseEffect_1.default);
    exports.default = BaseEffectAnTruoc;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  BaseEffectEnd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8435fv8hREwo4alW31oc3a", "BaseEffectEnd");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseEffect_1 = require("./BaseEffect");
    var BaseEffectEnd = function(_super) {
      __extends(BaseEffectEnd, _super);
      function BaseEffectEnd() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataFinishiItemNomarl = null;
        return _this;
      }
      BaseEffectEnd.prototype.intiData = function(obj) {
        this.dataFinishiItemNomarl = obj;
        return this;
      };
      return BaseEffectEnd;
    }(BaseEffect_1.default);
    exports.default = BaseEffectEnd;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  BaseEffectXDVEnd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c7b9aL6sRHe7iN+bNoDLQL", "BaseEffectXDVEnd");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseEffect_1 = require("./BaseEffect");
    var BaseEffectXDVEnd = function(_super) {
      __extends(BaseEffectXDVEnd, _super);
      function BaseEffectXDVEnd() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataFinishXDV = null;
        return _this;
      }
      BaseEffectXDVEnd.prototype.intiData = function(obj) {
        this.dataFinishXDV = obj;
        return this;
      };
      return BaseEffectXDVEnd;
    }(BaseEffect_1.default);
    exports.default = BaseEffectXDVEnd;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  BaseEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e16beucptECbftQ8r2VhF9", "BaseEffect");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var listIndexTren = [ 21, 22, 23, 0, 1, 2, 3 ];
    var listIndexDuoi = [ 9, 10, 11, 12, 13, 14, 15 ];
    var listIndexTrai = [ 15, 16, 17, 18, 19, 20, 21 ];
    var listIndexPhai = [ 3, 4, 5, 6, 7, 8, 9 ];
    var listIndexRun = [ 22, 4, 10, 16 ];
    var listIndexBassNho1 = [ 20, 21, 22, 2, 3, 4, 8, 9, 10, 14, 15, 16 ];
    var listIndexBassNho2 = [ 17, 18, 19, 23, 0, 1, 5, 6, 7, 11, 12, 13 ];
    var listRun = [ listIndexTren, listIndexDuoi, listIndexTrai, listIndexPhai ];
    var BaseEffect = function() {
      function BaseEffect(xengController) {
        this.xengController = null;
        this.soundMgn = null;
        this.currentBtnTrai = null;
        this.currentBtnPhai = null;
        this._listRun = null;
        this.xengController = xengController;
        this.soundMgn = xengController.getSoundMng();
        this.currentBtnTrai = xengController.btnChangePointL;
        this.currentBtnPhai = xengController.btnChangePointR;
      }
      BaseEffect.prototype.getBtnItem = function(id) {
        (void 0 == id || null == id || id < 0) && (id = 0);
        return this.xengController.listBtnItem[id];
      };
      BaseEffect.prototype.setColor = function(type) {
        this.xengController.xengView.setColor(type);
      };
      BaseEffect.prototype.getBtnItemXDV = function(id) {
        return this.xengController.getBtnItemXDV(id);
      };
      BaseEffect.prototype.setPointItem = function(id, point) {
        this.getBtnItem(id).setPoint(point);
      };
      BaseEffect.prototype.setStringLbHeSo = function(number) {
        this.xengController.xengView.setStringLbHeSo(number);
      };
      BaseEffect.prototype.getLbBtnItem = function(id) {
        return this.getBtnItem(id).lbPoint;
      };
      BaseEffect.prototype.getNodeLbItem = function(id) {
        return this.getBtnItem(id).lbPoint.node;
      };
      BaseEffect.prototype.getListNodeLbItem = function() {
        var listReturn = [];
        this.xengController.listBtnItem.forEach(function(v) {
          listReturn.push(v.lbPoint.node);
        });
        return listReturn;
      };
      BaseEffect.prototype.getNodeLbItemXDV = function(id) {
        return this.getBtnItemXDV(id).lbPoint.node;
      };
      BaseEffect.prototype.getNodeLbHeso = function() {
        return this.xengController.xengView.lbHeso.node;
      };
      BaseEffect.prototype.getLbHeso = function() {
        return this.xengController.xengView.lbHeso;
      };
      BaseEffect.prototype.getLbLeft = function() {
        return this.currentBtnTrai.lbPoint;
      };
      BaseEffect.prototype.getNodeLbLeft = function() {
        return this.getLbLeft().node;
      };
      BaseEffect.prototype.getLbRight = function() {
        return this.currentBtnPhai.lbPoint;
      };
      BaseEffect.prototype.getNodeLbRight = function() {
        return this.getLbRight().node;
      };
      BaseEffect.prototype.getIdListLastResutl = function() {
        return this.xengController.xengView.getIdListLastResutl();
      };
      BaseEffect.prototype.getListRun = function() {
        var _this = this;
        var arrTemp = this._listRun;
        if (null == arrTemp) {
          arrTemp = [];
          listRun.forEach(function(v) {
            var listTemp = [];
            v.forEach(function(j) {
              listTemp.push(_this.getChildById(j));
            });
            arrTemp.push(listTemp);
          });
        }
        return arrTemp;
      };
      BaseEffect.prototype.getChildById = function(id) {
        return this.xengController.xengView.getChildById(id);
      };
      BaseEffect.prototype.getChildXDVById = function(id) {
        return this.xengController.xengView.getChildXDVById(id);
      };
      BaseEffect.prototype.getChildXoSoById = function(id) {
        return this.xengController.xengView.getChildXoSoById(id);
      };
      BaseEffect.prototype.getListLastResult = function() {
        return this.xengController.xengView.getListLastResult();
      };
      BaseEffect.prototype.getListChildren = function() {
        return this.xengController.xengView.getListChildren();
      };
      BaseEffect.prototype.getListXDV = function() {
        return this.xengController.xengView.getListChildXDV();
      };
      BaseEffect.prototype.getListXoSo = function() {
        return this.xengController.xengView.getListChildXoSo();
      };
      BaseEffect.prototype.getIdIndexRun = function() {
        return listIndexRun.slice();
      };
      BaseEffect.prototype.getLightMid = function(id) {
        return this.xengController.xengView.getLightMid(id);
      };
      BaseEffect.prototype.getListLightMid = function() {
        return this.xengController.xengView.getListLightMid();
      };
      BaseEffect.prototype.randomLbHeSo = function() {
        this.xengController.xengView.randomLbHeSo();
      };
      BaseEffect.prototype.runEffectNhapNhay1Lan = function(node, time) {
        this.xengController.runEffectNhapNhay1Lan(node, time);
      };
      BaseEffect.prototype.runEffectNhapNhay = function(node, time, repeat) {
        this.xengController.runEffectNhapNhay(node, time, repeat);
      };
      BaseEffect.prototype.runEffectRandomLabelHeso = function(min, max) {
        this.xengController.xengView.runEffectRandomLabelHeso(min, max);
      };
      BaseEffect.prototype.runEffectRandomLabelHesoSpecial = function() {
        this.xengController.xengView.runEffectRandomLabelHesoSpecial();
      };
      BaseEffect.prototype.runEffectActiveAndHideWithTime = function(node, timeHide) {
        this.xengController.runEffectActiveAndHideWithTime(node, timeHide);
      };
      BaseEffect.prototype.offEffect = function(node) {
        this.xengController.offEffect(node);
      };
      BaseEffect.prototype.offEffectRandomLabelHeso = function(number) {
        this.xengController.xengView.offEffectRandomLabelHeso(number);
      };
      BaseEffect.prototype.offItem = function(node) {
        this.xengController.offItem(node);
      };
      BaseEffect.prototype.getNodeJp = function() {
        return this.xengController.xengView.getNodeJp();
      };
      BaseEffect.prototype.pushIdResult = function(id) {
        this.xengController.xengView.putIdResult(id);
      };
      BaseEffect.prototype.pushIdXDVResult = function(ids) {
        var _this = this;
        ids.forEach(function(id) {
          return _this.xengController.xengView.putIdXDVResult(id);
        });
      };
      BaseEffect.prototype.resetIdXDVResult = function() {
        this.xengController.xengView.resetIdXDVResult();
      };
      BaseEffect.prototype.resetIdResult = function() {
        this.xengController.xengView.resetIdResult();
      };
      BaseEffect.prototype.actionFade = function(node, time) {
        if (time) {
          node.stopAllActions();
          node.runAction(cc.fadeIn(time));
        } else node.opacity = 255;
      };
      BaseEffect.prototype.activeIcon = function(node) {
        this.xengController.xengView.activeIcon(node);
      };
      BaseEffect.prototype.actionNhapNhay = function(node, repeat, timeDelay, isActive) {
        void 0 === isActive && (isActive = false);
        node.stopAllActions();
        node.opacity = 255;
        isActive ? node.runAction(cc.sequence(cc.blink(timeDelay, repeat), cc.callFunc(function() {
          node.opacity = 255;
        }))) : node.runAction(cc.sequence(cc.blink(timeDelay, repeat), cc.callFunc(function() {
          node.opacity = 0;
        })));
      };
      BaseEffect.prototype.activeWithTime = function(node, time) {
        this.offItem(node);
        node.opacity = 255;
        node.runAction(cc.sequence(cc.delayTime(time), cc.fadeOut(0)));
      };
      BaseEffect.prototype.activeWithTimeFadeOut = function(node, time, tiemFade) {
        this.offItem(node);
        node.opacity = 255;
        node.runAction(cc.sequence(cc.delayTime(time), cc.fadeOut(tiemFade)));
      };
      BaseEffect.prototype.hideWithTimeFadeIn = function(node, time, timeFade) {
        this.offItem(node);
        node.opacity = 0;
        node.runAction(cc.sequence(cc.delayTime(time), cc.fadeIn(timeFade)));
      };
      BaseEffect.prototype.makeDelay = function(time) {
        return this.xengController.makeDelay(time);
      };
      return BaseEffect;
    }();
    exports.default = BaseEffect;
    cc._RF.pop();
  }, {} ],
  BaseState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d8a5pxCdVL1o/9t0n6f6Rr", "BaseState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseState = function() {
      function BaseState(number) {
        this.type = number;
      }
      BaseState.prototype.initGameController = function(gv) {
        this.xengController = gv;
      };
      return BaseState;
    }();
    exports.default = BaseState;
    cc._RF.pop();
  }, {} ],
  "BtnAll+1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "400d4wgb2JE4ZOMWAeIdTlA", "BtnAll+1");
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
    var StateGame_1 = require("../State/StateGame");
    var BaseButton_1 = require("./BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onPress = function(dtPress) {
        if (this.xengController.stateGame.type == StateGame_1.default.PLAYINGMINI) return;
        this.xengController.onClickAllAdd1(dtPress);
      };
      NewClass.prototype.reset = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(BaseButton_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../State/StateGame": "StateGame",
    "./BaseButton": "BaseButton"
  } ],
  BtnBetItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07b52urzBxFS6FM9h79knOF", "BtnBetItem");
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
    var StateGame_1 = require("../State/StateGame");
    var BaseButton_1 = require("./BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnbetItem = function(_super) {
      __extends(BtnbetItem, _super);
      function BtnbetItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbPoint = null;
        _this.point = 0;
        return _this;
      }
      BtnbetItem.prototype.onPress = function(pointAdd) {
        if (this.xengController.stateGame.type == StateGame_1.default.WATINGPLAYGAME) {
          this.soundManager.playEffect(this.soundManager.Ting);
          this.xengController.setCurrentState(StateGame_1.default.WATING);
          return;
        }
        if (this.point >= 990 * Windown_1.Windown.XengController.mutil) return;
        if (this.xengController.btnChangePointR.point < 1) return;
        this.xengController.btnChangePointR.point < pointAdd && (pointAdd = this.xengController.btnChangePointR.point);
        this.setPointBy(pointAdd);
        this.xengController.btnChangePointR.setPointBy(-pointAdd);
        this.soundManager.playEffect(this.soundManager.Ting);
        this.xengController.setCurrentState(StateGame_1.default.PLAYING);
      };
      BtnbetItem.prototype.setLbPoint = function() {
        this.node && this.lbPoint.node && (this.lbPoint.string = (this.point / Windown_1.Windown.XengController.mutil).toString());
      };
      BtnbetItem.prototype.reset = function() {
        this.point = 0;
        this.setLbPoint();
      };
      BtnbetItem.prototype.setPointBy = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point += point;
        this.point = cc.misc.clampf(this.point, 0, 990 * Windown_1.Windown.XengController.mutil);
        isUpdate && this.setLbPoint();
      };
      BtnbetItem.prototype.setPoint = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point = point;
        isUpdate && this.setLbPoint();
      };
      __decorate([ property(cc.Label) ], BtnbetItem.prototype, "lbPoint", void 0);
      BtnbetItem = __decorate([ ccclass ], BtnbetItem);
      return BtnbetItem;
    }(BaseButton_1.default);
    exports.default = BtnbetItem;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../State/StateGame": "StateGame",
    "./BaseButton": "BaseButton"
  } ],
  BtnBetXDV: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2606Bla8NMbIeRU0pYLbT6", "BtnBetXDV");
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
    var StateGame_1 = require("../State/StateGame");
    var BaseButton_1 = require("./BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnBetXDV = function(_super) {
      __extends(BtnBetXDV, _super);
      function BtnBetXDV() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbPoint = null;
        _this.point = 0;
        return _this;
      }
      BtnBetXDV.prototype.onPress = function(pointAdd) {
        if (this.point >= 9990 * Windown_1.Windown.XengController.mutil) return;
        if (this.xengController.btnChangePointR.point < 1) return;
        this.xengController.btnChangePointR.point < pointAdd && (pointAdd = this.xengController.btnChangePointR.point);
        this.setPointBy(pointAdd);
        this.soundManager.playEffect(this.soundManager.Ting);
        this.xengController.btnChangePointR.setPointBy(-pointAdd);
        this.xengController.setCurrentState(StateGame_1.default.PLAYING);
      };
      BtnBetXDV.prototype.setLbPoint = function() {
        this.node && this.lbPoint.node && (this.lbPoint.string = (this.point / Windown_1.Windown.XengController.mutil).toString());
      };
      BtnBetXDV.prototype.reset = function() {
        this.point = 0;
        this.setLbPoint();
      };
      BtnBetXDV.prototype.setPointBy = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point += point;
        this.point = cc.misc.clampf(this.point, 0, 9990 * Windown_1.Windown.XengController.mutil);
        isUpdate && this.setLbPoint();
      };
      BtnBetXDV.prototype.setPoint = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point = point;
        isUpdate && this.setLbPoint();
      };
      __decorate([ property(cc.Label) ], BtnBetXDV.prototype, "lbPoint", void 0);
      BtnBetXDV = __decorate([ ccclass ], BtnBetXDV);
      return BtnBetXDV;
    }(BaseButton_1.default);
    exports.default = BtnBetXDV;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../State/StateGame": "StateGame",
    "./BaseButton": "BaseButton"
  } ],
  BtnChangePointLeft: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f2e3Tpzz9CX4wCsu35fqoK", "BtnChangePointLeft");
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
    var StateGame_1 = require("../State/StateGame");
    var BaseButton_1 = require("./BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnChangePointLeft = function(_super) {
      __extends(BtnChangePointLeft, _super);
      function BtnChangePointLeft() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbPoint = null;
        _this.point = 0;
        return _this;
      }
      BtnChangePointLeft.prototype.onPress = function(dtPress) {
        if (0 == this.xengController.btnChangePointR.point) return;
        this.xengController.btnChangePointR.point < dtPress && (dtPress = this.xengController.btnChangePointR.point);
        this.setPointBy(dtPress);
        this.xengController.btnChangePointR.setPointBy(-dtPress);
        this.soundManager.playEffect(this.soundManager.Ting);
        this.xengController.setCurrentState(StateGame_1.default.PLAYINGMINI);
      };
      BtnChangePointLeft.prototype.setPointBy = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point += point;
        isUpdate && this.setLbPoint();
      };
      BtnChangePointLeft.prototype.setPoint = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point = point;
        isUpdate && this.setLbPoint();
      };
      BtnChangePointLeft.prototype.reset = function() {
        this.point = 0;
        this.setLbPoint();
      };
      BtnChangePointLeft.prototype.setLbPoint = function() {
        this.node && this.lbPoint.node && (this.lbPoint.string = cc.misc.clampf(parseInt(this.point / Windown_1.Windown.XengController.mutil), 0, 999999).toString());
      };
      __decorate([ property(cc.Label) ], BtnChangePointLeft.prototype, "lbPoint", void 0);
      BtnChangePointLeft = __decorate([ ccclass ], BtnChangePointLeft);
      return BtnChangePointLeft;
    }(BaseButton_1.default);
    exports.default = BtnChangePointLeft;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../State/StateGame": "StateGame",
    "./BaseButton": "BaseButton"
  } ],
  BtnChangePointRight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22e7eg/USZHh4jZCYWZI6GQ", "BtnChangePointRight");
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var StateGame_1 = require("../State/StateGame");
    var BaseButton_1 = require("./BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnChangePointRight = function(_super) {
      __extends(BtnChangePointRight, _super);
      function BtnChangePointRight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbPoint = null;
        _this.point = 0;
        return _this;
      }
      BtnChangePointRight.prototype.onPress = function(dtPress) {
        if (0 == this.xengController.btnChangePointL.point) return;
        this.xengController.btnChangePointL.point < dtPress && (dtPress = this.xengController.btnChangePointL.point);
        this.setPointBy(dtPress);
        this.xengController.btnChangePointL.setPointBy(-dtPress);
        this.soundManager.playEffect(this.soundManager.Ting);
        this.xengController.btnChangePointL.point < 1 && this.xengController.setCurrentState(StateGame_1.default.WATING);
      };
      BtnChangePointRight.prototype.reset = function() {};
      BtnChangePointRight.prototype.setPointBy = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        point < 0 && Windown_1.Windown.MoneyUser.pushDelayMoney(GAME_TYPE_1.default.Xeng, Windown_1.Windown.MoneyUser.moneyCache, -point);
        this.point = Windown_1.Windown.MoneyUser.getMoneyCurrentWhitDelay();
        isUpdate && this.setLbPoint();
      };
      BtnChangePointRight.prototype.setPoint = function(point, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.point = point;
        isUpdate && this.setLbPoint();
      };
      BtnChangePointRight.prototype.setLbPoint = function() {
        this.node && this.lbPoint.node && (this.lbPoint.string = cc.misc.clampf(parseInt(this.point / Windown_1.Windown.XengController.mutil), 0, 999999).toString());
      };
      __decorate([ property(cc.Label) ], BtnChangePointRight.prototype, "lbPoint", void 0);
      BtnChangePointRight = __decorate([ ccclass ], BtnChangePointRight);
      return BtnChangePointRight;
    }(BaseButton_1.default);
    exports.default = BtnChangePointRight;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "../State/StateGame": "StateGame",
    "./BaseButton": "BaseButton"
  } ],
  BtnClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0913fTmuXJLqKoO1wAaD3t3", "BtnClick");
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
    var BaseButton_1 = require("./BaseButton");
    var TYPE = cc.Enum({
      BIG: 1,
      SMALL: 2,
      LE: 3,
      CHAN: 4
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnClick = function(_super) {
      __extends(BtnClick, _super);
      function BtnClick() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = TYPE.BIG;
        return _this;
      }
      BtnClick.prototype.onPress = function(dtPress) {
        cc.log("on press nay");
        switch (this.type) {
         case TYPE.BIG:
          this.xengController.onClick8_13();
          break;

         case TYPE.SMALL:
          this.xengController.onClick1_6();
          break;

         case TYPE.CHAN:
          this.xengController.onClickChan();
          break;

         case TYPE.LE:
          this.xengController.onClickLe();
        }
      };
      BtnClick.prototype.reset = function() {};
      __decorate([ property({
        type: TYPE
      }) ], BtnClick.prototype, "type", void 0);
      BtnClick = __decorate([ ccclass ], BtnClick);
      return BtnClick;
    }(BaseButton_1.default);
    exports.default = BtnClick;
    cc._RF.pop();
  }, {
    "./BaseButton": "BaseButton"
  } ],
  BtnGo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0daa1dePORASKhxJvObZ14u", "BtnGo");
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
    var BaseButton_1 = require("./BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BtnGo = function(_super) {
      __extends(BtnGo, _super);
      function BtnGo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BtnGo.prototype.onPress = function(dtPress) {
        this.xengController.onClickGo();
        this.soundManager.playEffect(this.soundManager.Ting);
      };
      BtnGo.prototype.reset = function() {};
      BtnGo = __decorate([ ccclass ], BtnGo);
      return BtnGo;
    }(BaseButton_1.default);
    exports.default = BtnGo;
    cc._RF.pop();
  }, {
    "./BaseButton": "BaseButton"
  } ],
  Effect1CuaTo20: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "104bdehi3xBiI8DH/PvW9X5", "Effect1CuaTo20");
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
    var BaseEffect_1 = require("./BaseEffect");
    var Effect1CuaTo20 = function(_super) {
      __extends(Effect1CuaTo20, _super);
      function Effect1CuaTo20() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Effect1CuaTo20.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listChildren, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                listChildren = this.getListChildren();
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < 5)) return [ 3, 4 ];
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                listChildren.forEach(function(v) {
                  _this.activeWithTime(v, .1);
                });
                return [ 4, this.makeDelay(.17) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                listChildren.forEach(function(v) {
                  _this.activeIcon(v);
                });
                return [ 4, this.makeDelay(1) ];

               case 5:
                _a.sent();
                listChildren.forEach(function(v) {
                  _this.offItem(v);
                });
                this.getListLastResult().forEach(function(v) {
                  _this.activeIcon(v);
                });
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return Effect1CuaTo20;
    }(BaseEffect_1.default);
    exports.default = Effect1CuaTo20;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  EffectAnJP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5ea3X+VsZECIbHcnwCjUYg", "EffectAnJP");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectAnJP = function(_super) {
      __extends(EffectAnJP, _super);
      function EffectAnJP() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectAnJP.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, mutil, moneyBet, money, i, l;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.EffectAnRandomItemNhoSau) ];

               case 1:
                _a.sent();
                mutil = dataFirt.hesoX;
                this.runEffectRandomLabelHeso(30, 100);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.RandomSo) ];

               case 2:
                _a.sent();
                this.offEffectRandomLabelHeso(mutil);
                if (0 == data.objReviceFirtItem.moneyRevice) {
                  resolve(null);
                  return [ 2 ];
                }
                moneyBet = this.getBtnItem(8).point;
                if (!(0 != moneyBet)) return [ 3, 7 ];
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.ShowHeSoRandom) ];

               case 3:
                _a.sent();
                money = moneyBet;
                i = 0, l = mutil;
                _a.label = 4;

               case 4:
                if (!(i < l)) return [ 3, 7 ];
                mutil--;
                this.setStringLbHeSo(mutil);
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                this.currentBtnTrai.setPointBy(money);
                return [ 4, this.makeDelay(.45) ];

               case 5:
                _a.sent();
                _a.label = 6;

               case 6:
                i++;
                return [ 3, 4 ];

               case 7:
                return [ 4, this.makeDelay(1) ];

               case 8:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectAnJP;
    }(BaseEffectEnd_1.default);
    exports.default = EffectAnJP;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectAnLuon1Cua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03158rKBIFBiKuyHGtGw9R3", "EffectAnLuon1Cua");
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
    var BaseEffect_1 = require("./BaseEffect");
    var EffectAnLuon1Cua = function(_super) {
      __extends(EffectAnLuon1Cua, _super);
      function EffectAnLuon1Cua() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectAnLuon1Cua.prototype.executed = function() {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var listNodeLastResult, i, listChild;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    listNodeLastResult = this.xengController.xengView.getListLastResult();
                    for (i = 0; i < listNodeLastResult.length; i++) this.actionNhapNhay(listNodeLastResult[i], 50, 10, true);
                    return [ 4, this.soundMgn.playEffectSync(this.soundMgn.EffectAnRandomItemNhoSau) ];

                   case 1:
                    _a.sent();
                    listChild = this.getListChildren();
                    listChild.forEach(function(v) {
                      _this.actionNhapNhay(v, 30, 3, true);
                    });
                    return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NoLienTuc) ];

                   case 2:
                    _a.sent();
                    listChild.forEach(function(v) {
                      _this.offItem(v);
                    });
                    listNodeLastResult.forEach(function(v) {
                      _this.activeIcon(v);
                    });
                    return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiAnTruoc1CuaX30) ];

                   case 3:
                    _a.sent();
                    listNodeLastResult.forEach(function(v) {
                      _this.actionNhapNhay(v, 40, 4);
                    });
                    return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengKen2) ];

                   case 4:
                    _a.sent();
                    listNodeLastResult.forEach(function(v) {
                      _this.offItem(v);
                    });
                    resolve(null);
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      return EffectAnLuon1Cua;
    }(BaseEffect_1.default);
    exports.default = EffectAnLuon1Cua;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  EffectBassNho: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19877DnWkNPvoFech+Rprnw", "EffectBassNho");
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectBassNho = function(_super) {
      __extends(EffectBassNho, _super);
      function EffectBassNho() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectBassNho.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var idResult, listItem, isActive, i, temp, temp, listIdResultSub, listIdRandom, listIdResult, currentIdRandom, lastId, nodeNhapNhay1, nodeNhapNhay2, list1, list2, i, temp, v, idPre, temp, v, listResultTemp, i, temp, temp, startIndex, targetIndex, count, tempStart, lastIdActive;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.soundMgn.playEffect(this.soundMgn.CauNoiVeBass);
                idResult = this.dataFinishiItemNomarl.objReviceFirtItem.idResult;
                listItem = this.getListChildren();
                isActive = true;
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < 20)) return [ 3, 4 ];
                if (isActive) {
                  this.offItem(this.getChildById(idResult));
                  for (temp in listItem) Number(temp) != idResult && this.offEffect(listItem[temp]);
                } else {
                  this.offEffect(this.getChildById(idResult));
                  for (temp in listItem) Number(temp) != idResult && this.offItem(listItem[temp]);
                }
                isActive = !isActive;
                return [ 4, this.makeDelay(.15) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                return [ 4, this.makeDelay(.5) ];

               case 5:
                _a.sent();
                listIdResultSub = this.dataFinishiItemNomarl.ListObjReviceSub;
                listIdResultSub.forEach(function(v) {
                  _this.pushIdResult(v.idResult);
                });
                listIdRandom = [ 3, 9, 11, 14, 17, 22 ];
                listIdResult = this.getIdListLastResutl();
                Windown_1.Windown.shuffle(listIdRandom);
                currentIdRandom = 0;
                lastId = -1;
                _a.label = 6;

               case 6:
                false;
                if (!(currentIdRandom == listIdRandom.length)) return [ 3, 8 ];
                -1 != lastId && this.offItem(this.getChildById(listIdRandom[lastId]));
                this.activeIcon(this.getChildById(listIdResult[1]));
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                return [ 4, this.makeDelay(2) ];

               case 7:
                _a.sent();
                return [ 3, 10 ];

               case 8:
                this.soundMgn.playEffect(this.soundMgn.Hu);
                -1 != lastId && this.offItem(this.getChildById(listIdRandom[lastId]));
                this.activeIcon(this.getChildById(listIdRandom[currentIdRandom]));
                lastId = currentIdRandom;
                currentIdRandom++;
                return [ 4, this.makeDelay(.5) ];

               case 9:
                _a.sent();
                return [ 3, 6 ];

               case 10:
                nodeNhapNhay1 = this.getChildById(listIdResult[0]);
                nodeNhapNhay2 = this.getChildById(listIdResult[1]);
                this.actionNhapNhay(nodeNhapNhay1, 30, 3, true);
                this.actionNhapNhay(nodeNhapNhay2, 30, 3, true);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NoLienTuc) ];

               case 11:
                _a.sent();
                list1 = [ 6, 7, 8, 9, 10, 11, 12, 13 ];
                list2 = [ 18, 19, 20, 21, 22, 23, 0, 1 ];
                this.soundMgn.playEffect(this.soundMgn.ChayItem);
                i = 0;
                _a.label = 12;

               case 12:
                if (!(i < 12)) return [ 3, 15 ];
                for (temp in list1) {
                  v = list1[temp];
                  this.offEffect(this.getChildById(v));
                  list1[temp]--;
                  list1[temp] < 0 && (list1[temp] = 23);
                }
                idPre = list1[list1.length - 1] + 1;
                idPre > 23 && (idPre = 0);
                this.offItem(this.getChildById(idPre));
                for (temp in list2) {
                  v = list2[temp];
                  this.offEffect(this.getChildById(v));
                  list2[temp]--;
                  list2[temp] < 0 && (list2[temp] = 23);
                }
                idPre = list2[list2.length - 1] + 1;
                idPre > 23 && (idPre = 0);
                this.offItem(this.getChildById(idPre));
                return [ 4, this.makeDelay(1.6 / 12) ];

               case 13:
                _a.sent();
                _a.label = 14;

               case 14:
                i++;
                return [ 3, 12 ];

               case 15:
                this.soundMgn.stopEffect(this.soundMgn.ChayItem);
                listItem.forEach(function(v) {
                  _this.offItem(v);
                });
                listResultTemp = [ listIdResult[0], listIdResult[1], listIdResult[2] ];
                listResultTemp.forEach(function(v) {
                  _this.offEffect(_this.getChildById(v));
                });
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNo) ];

               case 16:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.EffectAnRandomItemNhoSau);
                isActive = true;
                i = 0;
                _a.label = 17;

               case 17:
                if (!(i < 20)) return [ 3, 20 ];
                if (isActive) {
                  listResultTemp.forEach(function(v) {
                    _this.offItem(_this.getChildById(v));
                  });
                  for (temp in listItem) listResultTemp.includes(Number(temp)) || this.offEffect(listItem[temp]);
                } else {
                  listResultTemp.forEach(function(v) {
                    _this.offEffect(_this.getChildById(v));
                  });
                  for (temp in listItem) listResultTemp.includes(Number(temp)) || this.offItem(listItem[temp]);
                }
                isActive = !isActive;
                return [ 4, this.makeDelay(.1) ];

               case 18:
                _a.sent();
                _a.label = 19;

               case 19:
                i++;
                return [ 3, 17 ];

               case 20:
                startIndex = listIdResult[2];
                targetIndex = listIdResult[3];
                count = 0;
                tempStart = startIndex;
                while (true) {
                  tempStart++;
                  count++;
                  if (tempStart == targetIndex) break;
                  tempStart > 23 && (tempStart = 0);
                }
                lastIdActive = -1;
                _a.label = 21;

               case 21:
                false;
                -1 == lastIdActive || listResultTemp.includes(lastIdActive) || this.offItem(this.getChildById(lastIdActive));
                lastIdActive = startIndex;
                startIndex++;
                startIndex > 23 && (startIndex = 0);
                this.soundMgn.playEffect(this.soundMgn.Bip);
                this.activeIcon(this.getChildById(startIndex));
                if (startIndex == targetIndex) {
                  -1 == lastIdActive || listResultTemp.includes(lastIdActive) || this.offItem(this.getChildById(lastIdActive));
                  this.soundMgn.stopEffect(this.soundMgn.RandomSo);
                  return [ 3, 23 ];
                }
                return [ 4, this.makeDelay(.05) ];

               case 22:
                _a.sent();
                return [ 3, 21 ];

               case 23:
                return [ 4, this.makeDelay(1) ];

               case 24:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.RandomSo);
                this.actionNhapNhay(this.getChildById(listIdResult[3]), 20, 2, true);
                return [ 4, this.makeDelay(2) ];

               case 25:
                _a.sent();
                this.soundMgn.stopEffect(this.soundMgn.RandomSo);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Bip) ];

               case 26:
                _a.sent();
                this.offEffect(this.getChildById(listIdResult[4]));
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNo) ];

               case 27:
                _a.sent();
                return [ 4, this.makeDelay(.5) ];

               case 28:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectBassNho;
    }(BaseEffectEnd_1.default);
    exports.default = EffectBassNho;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectDapChuot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0de85nK0ntPjYj5NYBF0wxQ", "EffectDapChuot");
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
    var BaseEffect_1 = require("./BaseEffect");
    var EffectDapChuot = function(_super) {
      __extends(EffectDapChuot, _super);
      function EffectDapChuot() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectDapChuot.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var count, i, listItem, listIndexRun, z, length, i, num, nodeChild, z, length, i, num, nodeChild, listChildren;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.soundMgn.playEffect(this.soundMgn.StartDapChuot);
                this.setColor(0);
                count = 0;
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < 13)) return [ 3, 4 ];
                listItem = this.getListRun()[count];
                listItem.forEach(function(v) {
                  _this.activeWithTime(v, .25);
                });
                count++;
                count > 3 && (count = 0);
                return [ 4, this.makeDelay(.27) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                listIndexRun = this.getIdIndexRun();
                this.setColor(2);
                z = 0;
                _a.label = 5;

               case 5:
                if (!(z < 16)) return [ 3, 8 ];
                length = listIndexRun.length;
                for (i = 0; i < length; i++) {
                  num = listIndexRun[i];
                  nodeChild = this.getChildById(num);
                  this.activeWithTime(nodeChild, .08);
                  num++;
                  num > 23 && (num = 0);
                  listIndexRun[i] = num;
                }
                return [ 4, this.makeDelay(.08) ];

               case 6:
                _a.sent();
                _a.label = 7;

               case 7:
                z++;
                return [ 3, 5 ];

               case 8:
                z = 0;
                _a.label = 9;

               case 9:
                if (!(z < 32)) return [ 3, 12 ];
                length = listIndexRun.length;
                for (i = 0; i < length; i++) {
                  num = listIndexRun[i];
                  nodeChild = this.getChildById(num);
                  this.activeWithTime(nodeChild, .08);
                  num--;
                  num < 0 && (num = 23);
                  listIndexRun[i] = num;
                }
                return [ 4, this.makeDelay(.08) ];

               case 10:
                _a.sent();
                _a.label = 11;

               case 11:
                z++;
                return [ 3, 9 ];

               case 12:
                this.setColor(1);
                listChildren = this.getListChildren();
                listChildren.forEach(function(v) {
                  _this.actionNhapNhay(v, 10, 1.8);
                });
                return [ 4, this.makeDelay(1.9) ];

               case 13:
                _a.sent();
                listChildren.forEach(function(v) {
                  _this.offItem(v);
                });
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectDapChuot;
    }(BaseEffect_1.default);
    exports.default = EffectDapChuot;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  EffectDoiMau: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92151pYUFtBbYwtT60ge3Jo", "EffectDoiMau");
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
    var BaseEffect_1 = require("./BaseEffect");
    var EffectDoiMau = function(_super) {
      __extends(EffectDoiMau, _super);
      function EffectDoiMau() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataXDV = null;
        return _this;
      }
      EffectDoiMau.prototype.initData = function(data) {
        this.dataXDV = data;
        return this;
      };
      EffectDoiMau.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var result, moneyReviceDoiMau, nodeNhapNhayLb, listIdLastResult, listChild, isActive, i, temp, temp;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                result = this.dataXDV.result;
                moneyReviceDoiMau = 0 == result ? this.dataXDV.reviceXanh : this.dataXDV.reviceDo;
                nodeNhapNhayLb = 0 == result ? this.getNodeLbItemXDV(2) : this.getNodeLbItemXDV(0);
                0 == result ? this.setColor(2) : this.setColor(0);
                listIdLastResult = this.getIdListLastResutl();
                listChild = this.getListChildren();
                isActive = false;
                this.soundMgn.playEffect(this.soundMgn.NhacDoiMau);
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < 80)) return [ 3, 4 ];
                if (isActive) {
                  listIdLastResult.forEach(function(v) {
                    _this.activeIcon(_this.getChildById(v));
                  });
                  this.activeIcon(nodeNhapNhayLb);
                  for (temp in listChild) listIdLastResult.includes(Number(temp)) || this.offItem(listChild[temp]);
                } else {
                  listIdLastResult.forEach(function(v) {
                    _this.offItem(_this.getChildById(v));
                  });
                  this.offItem(nodeNhapNhayLb);
                  for (temp in listChild) listIdLastResult.includes(Number(temp)) || this.activeIcon(listChild[temp]);
                }
                isActive = !isActive;
                return [ 4, this.makeDelay(.1) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.AtOhh) ];

               case 5:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NiChieuSangCieu) ];

               case 6:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

               case 7:
                _a.sent();
                if (!(0 == result)) return [ 3, 9 ];
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauXanhLa) ];

               case 8:
                _a.sent();
                return [ 3, 11 ];

               case 9:
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauDo) ];

               case 10:
                _a.sent();
                _a.label = 11;

               case 11:
                this.currentBtnTrai.setPointBy(moneyReviceDoiMau);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 12:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XaPe) ];

               case 13:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.EndDoiMau) ];

               case 14:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectDoiMau;
    }(BaseEffect_1.default);
    exports.default = EffectDoiMau;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  EffectEndGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3c209/dW5IebUTdgIeBUJT", "EffectEndGame");
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var StateGame_1 = require("../State/StateGame");
    var BaseEffect_1 = require("./BaseEffect");
    var EffectEndGame = function(_super) {
      __extends(EffectEndGame, _super);
      function EffectEndGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataNormal = null;
        return _this;
      }
      EffectEndGame.prototype.intiData = function(data) {
        this.dataNormal = data;
        return this;
      };
      EffectEndGame.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var dataNormal, dataXDV, i, l, typeXDV, list;
            var _this = this;
            return __generator(this, function(_a) {
              this.xengController.listBtnItem.forEach(function(v) {
                _this.offItem(v.lbPoint.node);
              });
              this.xengController.listBtnXDV.forEach(function(v) {
                _this.offItem(v.lbPoint.node);
              });
              dataNormal = this.dataNormal.makeBetNormal;
              dataXDV = this.dataNormal.makebetXDV;
              for (i = 0, l = dataNormal.ListObjReviceSub.length; i < l; i++) this.actionNhapNhay(this.getNodeLbItem(dataNormal.ListObjReviceSub[i].resultType), 30, 10, true);
              this.actionNhapNhay(this.getNodeLbItem(dataNormal.objReviceFirtItem.resultType), 30, 10, true);
              this.currentBtnTrai.setPoint(this.dataNormal.totalRevice);
              typeXDV = dataXDV.result;
              this.currentBtnTrai.point > 0 && this.runEffectNhapNhay(this.getNodeLbLeft(), 10, 30);
              if (3 == typeXDV) {
                this.runEffectNhapNhay(this.getNodeLbItemXDV(0), 10, 30);
                this.runEffectNhapNhay(this.getNodeLbItemXDV(1), 10, 30);
                this.runEffectNhapNhay(this.getNodeLbItemXDV(2), 10, 30);
                this.pushIdXDVResult([ 0, 1, 2, 3, 4, 5 ]);
              } else {
                this.runEffectNhapNhay(this.getNodeLbItemXDV(typeXDV), 10, 30);
                list = this.getListXDVWithType(typeXDV);
                list.forEach(function(v) {
                  _this.actionNhapNhay(_this.getChildXDVById(v), 30, 10, true);
                });
                this.pushIdXDVResult(list);
              }
              Windown_1.Windown.MoneyUser.removeDelay(GAME_TYPE_1.default.Xeng, false);
              Windown_1.Windown.MoneyUser.pushDelayMoney(GAME_TYPE_1.default.Xeng, this.dataNormal.agXeng, this.dataNormal.totalRevice);
              this.xengController.xengView.addNewHistory(dataXDV.result);
              this.xengController.xengView.randomLbHeSoOGiua();
              this.xengController.setCurrentState(StateGame_1.default.WATINGPLAYGAME);
              resolve(null);
              return [ 2 ];
            });
          });
        });
      };
      EffectEndGame.prototype.getListXDVWithType = function(type) {
        var list = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ];
        return list[type];
      };
      return EffectEndGame;
    }(BaseEffect_1.default);
    exports.default = EffectEndGame;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "../State/StateGame": "StateGame",
    "./BaseEffect": "BaseEffect"
  } ],
  EffectEndNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bc7efksOVP848xX35RUsxA", "EffectEndNormal");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectEndNormal = function(_super) {
      __extends(EffectEndNormal, _super);
      function EffectEndNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectEndNormal.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                this.actionNhapNhay(this.getListLastResult()[0], 10, 2, true);
                this.runEffectNhapNhay(this.getNodeLbItem(dataFirt.resultType), 2, 10);
                this.soundMgn.playEffect(this.soundMgn.Item[dataFirt.resultType]);
                return [ 4, this.makeDelay(2.1) ];

               case 1:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectEndNormal;
    }(BaseEffectEnd_1.default);
    exports.default = EffectEndNormal;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectRan8Dot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ac19rAVslLkLfOYU38kdOb", "EffectRan8Dot");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectRan8Dot = function(_super) {
      __extends(EffectRan8Dot, _super);
      function EffectRan8Dot() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectRan8Dot.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, idDuoiRan, count, listRan, i, temp, v, idPre, temp, v, idPre, temp, v, _i, listIdResultSub_1, temp;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.soundMgn.playEffect(this.soundMgn.TiengKen1);
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                idDuoiRan = this.dataFinishiItemNomarl.mutil;
                this.actionNhapNhay(this.getChildById(4), 20, 4, true);
                return [ 4, this.makeDelay(4.5) ];

               case 1:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiDapChuot) ];

               case 2:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.ItemChay1Vong);
                count = 4;
                listRan = [ 4 ];
                i = 0;
                _a.label = 3;

               case 3:
                if (!(i < 32)) return [ 3, 6 ];
                for (temp in listRan) {
                  v = listRan[temp];
                  this.offEffect(this.getChildById(v));
                  listRan[temp]++;
                  listRan[temp] > 23 && (listRan[temp] = 0);
                }
                if (listRan.length < 8) listRan.unshift(4); else {
                  idPre = listRan[0] - 1;
                  idPre < 0 && (idPre = 23);
                  this.offItem(this.getChildById(idPre));
                }
                return [ 4, this.makeDelay(1 / 30) ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                i++;
                return [ 3, 3 ];

               case 6:
                false;
                for (temp in listRan) {
                  v = listRan[temp];
                  this.offEffect(this.getChildById(v));
                  listRan[temp]++;
                  listRan[temp] > 23 && (listRan[temp] = 0);
                }
                idPre = listRan[0] - 1;
                idPre < 0 && (idPre = 23);
                this.offItem(this.getChildById(idPre));
                if (listRan[0] == idDuoiRan) {
                  this.soundMgn.stopEffect(this.soundMgn.ItemChay1Vong);
                  return [ 3, 8 ];
                }
                return [ 4, this.makeDelay(1 / 30) ];

               case 7:
                _a.sent();
                return [ 3, 6 ];

               case 8:
                for (temp in listRan) {
                  v = listRan[temp];
                  this.offEffect(this.getChildById(v));
                }
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNoVaChemKiem) ];

               case 9:
                _a.sent();
                return [ 4, this.makeDelay(1) ];

               case 10:
                _a.sent();
                count = 0;
                _i = 0, listIdResultSub_1 = listIdResultSub;
                _a.label = 11;

               case 11:
                if (!(_i < listIdResultSub_1.length)) return [ 3, 14 ];
                temp = listIdResultSub_1[_i];
                this.pushIdResult(listRan[count]);
                this.runEffectNhapNhay1Lan(this.getChildById(listRan[count]), .3);
                temp.resultType > -1 && this.runEffectNhapNhay1Lan(this.getNodeLbItem(temp.resultType), .3);
                this.currentBtnTrai.setPointBy(temp.moneyRevice);
                count++;
                count > 23 && (count = 0);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CongTien) ];

               case 12:
                _a.sent();
                _a.label = 13;

               case 13:
                _i++;
                return [ 3, 11 ];

               case 14:
                return [ 4, this.makeDelay(.5) ];

               case 15:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectRan8Dot;
    }(BaseEffectEnd_1.default);
    exports.default = EffectRan8Dot;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectRunSpin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8dd78Q911lGm5bCHGMTE88A", "EffectRunSpin");
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var BaseEffect_1 = require("./BaseEffect");
    var EffectRunSpin = function(_super) {
      __extends(EffectRunSpin, _super);
      function EffectRunSpin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.resultId = 10;
        _this.totalRun = 0;
        _this.countRun = 0;
        _this.currentIdRun = 0;
        _this.countOffActive = 4;
        _this.lastIdXDV = 1;
        _this.hesoNhanRunXDV = 1;
        _this.resultIdXDV = 10;
        _this.totalRunXDV = 0;
        _this.countRunXDV = 0;
        _this.idCacheXDV = 0;
        _this.currentIdRunXDV = 0;
        _this.countSubXDV = 0;
        _this.isRuning = false;
        _this.timeDelay = .15;
        _this.timeUpdate = 0;
        _this.funEnd = null;
        _this.idTimeOut = null;
        return _this;
      }
      EffectRunSpin.prototype.executed = function() {
        throw new Error("Method not implemented.");
      };
      EffectRunSpin.prototype.spinWithId = function(id, typeXDV, isSpecial) {
        return __awaiter(this, void 0, void 0, function() {
          var listIdLastResult, lastId, countOffset2, listLastResult, objReturnCheck, idNeed;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.setColor(typeXDV);
              isSpecial ? this.soundMgn.playEffect(this.soundMgn.SpinSpecial) : this.soundMgn.playEffect(this.soundMgn.SpinNormal);
              listIdLastResult = this.getIdListLastResutl();
              lastId = listIdLastResult[0];
              null != lastId && void 0 != lastId || (lastId = 1);
              this.timeDelay = .08;
              this.countRun = 0;
              this.resultId = id;
              countOffset2 = 24 - lastId + id;
              this.totalRun = 72 + countOffset2 % 24;
              this.currentIdRun = lastId;
              this.countOffActive = 4;
              listLastResult = this.getListLastResult();
              listLastResult.forEach(function(v) {
                _this.actionNhapNhay(v, 3, .5);
              });
              this.resultIdXDV = typeXDV;
              objReturnCheck = this.getIdXDVWithTotal(this.totalRun);
              idNeed = this.getIdResultXDV(typeXDV > 2 ? 2 : typeXDV);
              this.countSubXDV = this.getCountSub(objReturnCheck.id, idNeed, objReturnCheck.heSoNhan);
              return [ 4, this.makeDelay(.5) ];

             case 1:
              _a.sent();
              listLastResult.forEach(function(v) {
                _this.offItem(v);
              });
              this.activeIcon(this.getChildById(lastId));
              this.isRuning = true;
              this.xengController.xengView.funUpdate = function(dt) {
                _this.isRuning ? _this.update(dt) : _this.xengController.xengView.funUpdate = null;
              };
              return [ 4, this.endSpinFun() ];

             case 2:
              _a.sent();
              return [ 4, this.makeDelay(1) ];

             case 3:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      EffectRunSpin.prototype.endSpinFun = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.funEnd = resolve;
        });
      };
      EffectRunSpin.prototype.getIdXDVWithTotal = function(total) {
        var objReturn = Object.create(null);
        var cache = this.hesoNhanRunXDV;
        var id = this.currentIdRunXDV;
        for (var i = 0; i < total; i++) {
          id += cache;
          if (id > 5) {
            id = 5;
            cache *= -1;
          }
          if (id < 0) {
            id = 0;
            cache *= -1;
          }
        }
        objReturn.id = id;
        objReturn.heSoNhan = cache;
        return objReturn;
      };
      EffectRunSpin.prototype.getIdResultXDV = function(type) {
        return this.getListXDVWithType(type)[Windown_1.Windown.RandomNumber(0, 2)];
      };
      EffectRunSpin.prototype.getListXDVWithType = function(type) {
        var list = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ];
        return list[type];
      };
      EffectRunSpin.prototype.getCountSub = function(input, need, heso) {
        var _heso = heso;
        var count = 0;
        while (true) {
          if (input == need) return count;
          count++;
          input -= _heso;
          if (input < 0 || input > 5) {
            input < 0 && (input = 0);
            input > 5 && (input = 5);
            _heso *= -1;
          }
        }
      };
      EffectRunSpin.prototype.checkStateRun = function() {
        var isReturn = true;
        this.countRun >= this.totalRun && (isReturn = false);
        return isReturn;
      };
      EffectRunSpin.prototype.runSpin = function() {
        this.randomLbHeSo();
        var indexOff = this.getIdOffWithRun(this.countOffActive);
        if (this.countRun > 3) {
          var node1 = this.getChildById(indexOff);
          this.offItem(node1);
        }
        this.countRun++;
        this.activeIcon(this.getChildById(this.currentIdRun));
        if (this.countRun == this.totalRun - 9) {
          this.offItem(this.getChildById(this.getIdOffWithRun(3)));
          this.offItem(this.getChildById(this.getIdOffWithRun(2)));
          this.offItem(this.getChildById(this.getIdOffWithRun(1)));
          this.countOffActive = 1;
        }
        3 == this.countRun && (this.timeDelay = .08);
        6 == this.countRun && (this.timeDelay = .062);
        9 == this.countRun && (this.timeDelay = .02);
        this.countRun == this.totalRun - 3 && (this.timeDelay = .08);
        this.currentIdRun++;
        this.currentIdRun > 23 && (this.currentIdRun = 0);
        if (this.countRun > 9 && this.countSubXDV > 0 && this.countRun % 6 == 3) {
          this.countSubXDV--;
          return;
        }
        this.countRun > 0 && this.offItem(this.getChildXDVById(this.idCacheXDV));
        this.activeIcon(this.getChildXDVById(this.currentIdRunXDV));
        if (this.currentIdRunXDV > 2) {
          this.offItem(this.getLightMid(0));
          this.activeIcon(this.getLightMid(1));
        } else {
          this.offItem(this.getLightMid(1));
          this.activeIcon(this.getLightMid(0));
        }
        this.idCacheXDV = this.currentIdRunXDV;
        this.currentIdRunXDV += this.hesoNhanRunXDV;
        if (this.currentIdRunXDV > 5) {
          this.currentIdRunXDV = 5;
          this.hesoNhanRunXDV *= -1;
        }
        if (this.currentIdRunXDV < 0) {
          this.currentIdRunXDV = 0;
          this.hesoNhanRunXDV *= -1;
        }
      };
      EffectRunSpin.prototype.endSpin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.resetIdResult();
            this.resetIdXDVResult();
            this.pushIdResult(this.resultId);
            this.isRuning = false;
            this.offItem(this.getChildById(this.getIdOffWithRun(1)));
            this.activeIcon(this.getChildById(this.currentIdRun));
            this.offItem(this.getChildXDVById(this.idCacheXDV));
            if (3 == this.resultIdXDV) {
              this.getListXDV().forEach(function(v) {
                _this.actionNhapNhay(v, 40, 12);
              });
              this.getListLightMid().forEach(function(v) {
                _this.actionNhapNhay(v, 40, 12);
              });
            } else {
              this.activeIcon(this.getLightMid(this.currentIdRunXDV > 2 ? 1 : 0));
              this.activeIcon(this.getChildXDVById(this.currentIdRunXDV));
            }
            this.soundMgn.stopEffect(this.soundMgn.SpinNormal);
            this.soundMgn.stopEffect(this.soundMgn.SpinSpecial);
            this.funEnd();
            return [ 2 ];
          });
        });
      };
      EffectRunSpin.prototype.getIdOffWithRun = function(count) {
        var id = this.currentIdRun - count;
        id < 0 && (id = 24 + id);
        return id;
      };
      EffectRunSpin.prototype.update = function(dt) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            if (!this.isRuning) return [ 2 ];
            this.timeUpdate += dt;
            if (this.timeUpdate < this.timeDelay) return [ 2 ];
            this.timeUpdate = 0;
            this.checkStateRun() ? this.runSpin() : this.endSpin();
            return [ 2 ];
          });
        });
      };
      return EffectRunSpin;
    }(BaseEffect_1.default);
    exports.default = EffectRunSpin;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseEffect": "BaseEffect"
  } ],
  EffectSpecial14: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3fc9nsyiFP9oWDXAn2AVVB", "EffectSpecial14");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial14 = function(_super) {
      __extends(EffectSpecial14, _super);
      function EffectSpecial14() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial14.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, objSub, count, i, total, i, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.soundMgn.playEffect(this.soundMgn.TiengKen1);
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                objSub = listIdResultSub[0];
                this.actionNhapNhay(this.getChildById(20), 20, 4, true);
                return [ 4, this.makeDelay(4.5) ];

               case 1:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CuocKhungHoang) ];

               case 2:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.ItemChay1Vong);
                count = 20;
                i = 0;
                _a.label = 3;

               case 3:
                if (!(i < 24)) return [ 3, 6 ];
                count++;
                count > 23 && (count = 0);
                this.offEffect(this.getChildById(count));
                return [ 4, this.makeDelay(2.8 / 24) ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                i++;
                return [ 3, 3 ];

               case 6:
                total = 0;
                listIdResultSub.forEach(function(v) {
                  total += v.moneyRevice;
                });
                this.currentBtnTrai.setPointBy(total);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.HieuUngAnTatCaCacCua) ];

               case 7:
                _a.sent();
                this.getListChildren().forEach(function(v) {
                  _this.actionNhapNhay(v, 5, 1, true);
                });
                i = 0;
                _a.label = 8;

               case 8:
                if (!(i < 5)) return [ 3, 11 ];
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                return [ 4, this.makeDelay(.2) ];

               case 9:
                _a.sent();
                _a.label = 10;

               case 10:
                i++;
                return [ 3, 8 ];

               case 11:
                this.resetIdResult();
                for (i = 0; i < 24; i++) this.pushIdResult(i);
                return [ 4, this.makeDelay(1) ];

               case 12:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial14;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial14;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpecial2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c74c1H8oVClq0RIHmB/fXm", "EffectSpecial2");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial2 = function(_super) {
      __extends(EffectSpecial2, _super);
      function EffectSpecial2() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial2.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, objSub, listIdLastResult, currentIdRun, idResult, lastIdResult, heso, curIdResule;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                objSub = listIdResultSub[0];
                this.soundMgn.playEffect(this.soundMgn.TiengKen1);
                listIdLastResult = this.getIdListLastResutl();
                currentIdRun = listIdLastResult[0];
                this.actionNhapNhay(this.getChildById(currentIdRun), 20, 4, true);
                return [ 4, this.makeDelay(4.5) ];

               case 1:
                _a.sent();
                this.soundMgn.stopEffect(this.soundMgn.TiengKen1);
                idResult = objSub.idResult;
                this.pushIdResult(idResult);
                lastIdResult = -1;
                heso = 6 == currentIdRun ? -1 : 1;
                curIdResule = currentIdRun;
                _a.label = 2;

               case 2:
                false;
                this.soundMgn.playEffect(this.soundMgn.Bip);
                -1 != lastIdResult && this.offItem(this.getChildById(lastIdResult));
                this.activeIcon(this.getChildById(curIdResule));
                if (!(curIdResule == idResult)) return [ 3, 5 ];
                return [ 4, this.makeDelay(1) ];

               case 3:
                _a.sent();
                cc.log("objSub.result: " + idResult);
                this.actionNhapNhay(this.getChildById(idResult), 10, 2, true);
                this.runEffectNhapNhay(this.getNodeLbItem(objSub.resultType), 2, 10);
                this.soundMgn.playEffect(this.soundMgn.Item[objSub.resultType]);
                return [ 4, this.makeDelay(2) ];

               case 4:
                _a.sent();
                resolve(null);
                return [ 3, 7 ];

               case 5:
                lastIdResult = curIdResule;
                curIdResule += heso;
                -1 == heso ? -1 == curIdResule && (curIdResule = 23) : 24 == curIdResule && (curIdResule = 0);
                return [ 4, this.makeDelay(.08) ];

               case 6:
                _a.sent();
                return [ 3, 2 ];

               case 7:
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial2;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial2;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpecial3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da396oEJxpNiLDbpR2nmWlf", "EffectSpecial3");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial3 = function(_super) {
      __extends(EffectSpecial3, _super);
      function EffectSpecial3() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial3.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, objSub, isJpActive, count, idResult, firtIdResult;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                objSub = listIdResultSub[0];
                this.soundMgn.playEffect(this.soundMgn.RandomSo);
                isJpActive = false;
                count = 0;
                idResult = objSub.idResult;
                this.pushIdResult(idResult);
                firtIdResult = this.getIdListLastResutl()[0];
                _a.label = 1;

               case 1:
                false;
                if (!(6 == count)) return [ 3, 5 ];
                this.soundMgn.stopEffect(this.soundMgn.RandomSo);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Bip) ];

               case 2:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                this.offItem(this.getNodeJp());
                this.activeIcon(this.getChildById(idResult));
                return [ 4, this.makeDelay(2) ];

               case 3:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Item[objSub.resultType]) ];

               case 4:
                _a.sent();
                resolve(null);
                return [ 3, 7 ];

               case 5:
                if (isJpActive) {
                  this.offItem(this.getNodeJp());
                  this.activeIcon(this.getChildById(firtIdResult));
                } else {
                  this.activeIcon(this.getNodeJp());
                  this.offItem(this.getChildById(firtIdResult));
                }
                isJpActive = !isJpActive;
                count++;
                return [ 4, this.makeDelay(.1) ];

               case 6:
                _a.sent();
                return [ 3, 1 ];

               case 7:
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial3;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial3;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpecial4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb0cdCraxdEWb2A5VfvK7rI", "EffectSpecial4");
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial4 = function(_super) {
      __extends(EffectSpecial4, _super);
      function EffectSpecial4() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial4.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, objSub, listIdRandom, currentIdRandom, lastId, idResult;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                objSub = listIdResultSub[0];
                listIdRandom = [ 3, 9, 11, 14, 17, 22 ];
                Windown_1.Windown.shuffle(listIdRandom);
                currentIdRandom = 0;
                lastId = -1;
                idResult = objSub.idResult;
                this.pushIdResult(idResult);
                _a.label = 1;

               case 1:
                false;
                if (!(currentIdRandom == listIdRandom.length)) return [ 3, 4 ];
                -1 != lastId && this.offItem(this.getChildById(listIdRandom[lastId]));
                this.activeIcon(this.getChildById(idResult));
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                return [ 4, this.makeDelay(2) ];

               case 2:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Item[objSub.resultType]) ];

               case 3:
                _a.sent();
                resolve(null);
                return [ 3, 6 ];

               case 4:
                this.soundMgn.playEffect(this.soundMgn.Hu);
                -1 != lastId && this.offItem(this.getChildById(listIdRandom[lastId]));
                this.activeIcon(this.getChildById(listIdRandom[currentIdRandom]));
                lastId = currentIdRandom;
                currentIdRandom++;
                return [ 4, this.makeDelay(.5) ];

               case 5:
                _a.sent();
                return [ 3, 1 ];

               case 6:
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial4;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial4;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpecial5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fccb2itoa5I25vSDjMSwOJS", "EffectSpecial5");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial5 = function(_super) {
      __extends(EffectSpecial5, _super);
      function EffectSpecial5() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial5.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, objReviceSub, resultSub, mutil;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                objReviceSub = listIdResultSub[0];
                resultSub = objReviceSub.resultType;
                mutil = objReviceSub.hesoX;
                this.runEffectNhapNhay(this.getNodeLbItem(dataFirt.resultType), 6, 30);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.EffectAnRandomItemNhoSau) ];

               case 1:
                _a.sent();
                this.runEffectRandomLabelHesoSpecial();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.RandomSo) ];

               case 2:
                _a.sent();
                this.offEffectRandomLabelHeso(mutil);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

               case 3:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 4:
                _a.sent();
                this.runEffectNhapNhay(this.getNodeLbItem(resultSub), 3, 15);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Item[resultSub]) ];

               case 5:
                _a.sent();
                return [ 4, this.makeDelay(1) ];

               case 6:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial5;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial5;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpecial6: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c21fcy1tNdB8qc4G3Nv+0GI", "EffectSpecial6");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial6 = function(_super) {
      __extends(EffectSpecial6, _super);
      function EffectSpecial6() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial6.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, i, l, mutil, i;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                this.actionNhapNhay(this.getListLastResult()[0], 50, 10, true);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.EffectAnRandomItemNhoSau) ];

               case 1:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiTraDiem) ];

               case 2:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNoVaChemKiem) ];

               case 3:
                _a.sent();
                return [ 4, this.makeDelay(1) ];

               case 4:
                _a.sent();
                i = 0, l = listIdResultSub.length;
                _a.label = 5;

               case 5:
                if (!(i < l)) return [ 3, 8 ];
                this.runEffectNhapNhay1Lan(this.getNodeLbItem(i), .3);
                this.currentBtnTrai.setPointBy(listIdResultSub[i].moneyRevice);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CongTien) ];

               case 6:
                _a.sent();
                _a.label = 7;

               case 7:
                i++;
                return [ 3, 5 ];

               case 8:
                this.actionNhapNhay(this.getListLastResult()[0], 12.5, 2.5, true);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiTraDiemXong) ];

               case 9:
                _a.sent();
                this.setStringLbHeSo(0);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NhacNenTraDiem) ];

               case 10:
                _a.sent();
                return [ 4, this.makeDelay(10) ];

               case 11:
                _a.sent();
                mutil = data.mutil;
                i = 0;
                _a.label = 12;

               case 12:
                if (!(i < mutil)) return [ 3, 15 ];
                this.setStringLbHeSo(i + 1);
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                this.currentBtnTrai.setPointBy(10);
                return [ 4, this.makeDelay(.45) ];

               case 13:
                _a.sent();
                _a.label = 14;

               case 14:
                i++;
                return [ 3, 12 ];

               case 15:
                return [ 4, this.makeDelay(2.5) ];

               case 16:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial6;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial6;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpecial7: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d481KQRd5LSpiHzuUPtdmL", "EffectSpecial7");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpecial7 = function(_super) {
      __extends(EffectSpecial7, _super);
      function EffectSpecial7() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpecial7.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, listIdLastResult, count1, count2, heso1, heso2, i, listChildren, i, l, type, money;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                listIdLastResult = this.getIdListLastResutl();
                this.actionNhapNhay(this.getChildById(listIdLastResult[0]), 20, 2.5);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNoVaChemKiem) ];

               case 1:
                _a.sent();
                this.offEffect(this.getChildById(listIdLastResult[0]));
                this.soundMgn.playEffect(this.soundMgn.ChayItem);
                count1 = listIdLastResult[0];
                count2 = count1;
                heso1 = 1;
                6 == count1 && (heso1 = -1);
                6 == count1 ? this.pushIdResult(18) : this.pushIdResult(6);
                heso2 = -1 * heso1;
                i = 0;
                _a.label = 2;

               case 2:
                if (!(i < 12)) return [ 3, 5 ];
                count1 += heso1;
                count2 += heso2;
                count1 > 23 ? count1 = 0 : count1 < 0 && (count1 = 23);
                count2 > 23 ? count2 = 0 : count2 < 0 && (count2 = 23);
                this.activeIcon(this.getChildById(count1));
                this.activeIcon(this.getChildById(count2));
                return [ 4, this.makeDelay(1.7 / 12) ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i++;
                return [ 3, 2 ];

               case 5:
                listChildren = this.getListChildren();
                listChildren.forEach(function(v) {
                  _this.offItem(v);
                });
                this.getIdListLastResutl().forEach(function(v) {
                  _this.activeIcon(_this.getChildById(v));
                });
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNo) ];

               case 6:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiDapChuot) ];

               case 7:
                _a.sent();
                this.getListNodeLbItem().forEach(function(v) {
                  _this.offItem(v);
                });
                i = 0, l = listIdResultSub.length;
                _a.label = 8;

               case 8:
                if (!(i < l)) return [ 3, 14 ];
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.RandomSo) ];

               case 9:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Bip) ];

               case 10:
                _a.sent();
                type = listIdResultSub[i].resultType;
                money = listIdResultSub[i].moneyRevice;
                this.currentBtnTrai.setPointBy(money);
                this.activeWithTime(this.getNodeLbItem(type), 1);
                return [ 4, this.makeDelay(1) ];

               case 11:
                _a.sent();
                this.actionNhapNhay(this.getNodeLbItem(type), 8, .9, false);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TuNaiXa) ];

               case 12:
                _a.sent();
                _a.label = 13;

               case 13:
                i++;
                return [ 3, 8 ];

               case 14:
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MiOLa) ];

               case 15:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengCuoi) ];

               case 16:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectSpecial7;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpecial7;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectSpineSoXo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5a42g4Ms1GC6Em6K/255QA", "EffectSpineSoXo");
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
    var BaseEffectEnd_1 = require("./BaseEffectEnd");
    var EffectSpineSoXo = function(_super) {
      __extends(EffectSpineSoXo, _super);
      function EffectSpineSoXo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSpineSoXo.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var data, dataFirt, typeSpecial, listIdResultSub, objReviceSub, id, type, listChildren, listChildXoSo, count, i, countRunToIdResult, currentCount, i, l, mutil, money, i, l;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                data = this.dataFinishiItemNomarl;
                dataFirt = data.objReviceFirtItem;
                typeSpecial = data.typeSpecial;
                listIdResultSub = data.ListObjReviceSub;
                objReviceSub = listIdResultSub[0];
                id = objReviceSub.idResult;
                type = objReviceSub.resultType;
                listChildren = this.getListChildren();
                this.actionNhapNhay(listChildren[16], 16, 4.7);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNoVaChemKiem) ];

               case 1:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Woa) ];

               case 2:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.ThingKaiSun) ];

               case 3:
                _a.sent();
                listChildXoSo = this.getListXoSo();
                this.actionNhapNhay(listChildXoSo[5], 15, 2.3);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TingTingDt) ];

               case 4:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.ItemChay1Vong);
                count = 5;
                i = 0;
                _a.label = 5;

               case 5:
                if (!(i < 8)) return [ 3, 8 ];
                this.activeWithTime(this.getChildXoSoById(count), 1.2);
                return [ 4, this.makeDelay(.15) ];

               case 6:
                _a.sent();
                count++;
                count > 7 && (count = 0);
                _a.label = 7;

               case 7:
                i++;
                return [ 3, 5 ];

               case 8:
                return [ 4, this.makeDelay(1.2) ];

               case 9:
                _a.sent();
                countRunToIdResult = this.getCountRunSoXo(5, id);
                currentCount = 5;
                i = 0, l = countRunToIdResult + 1;
                _a.label = 10;

               case 10:
                if (!(i < l)) return [ 3, 13 ];
                this.soundMgn.playEffect(this.soundMgn.NextSoXo);
                this.activeWithTime(this.getChildXoSoById(currentCount), 1.1);
                currentCount++;
                currentCount > 7 && (currentCount = 0);
                return [ 4, this.makeDelay(1.1) ];

               case 11:
                _a.sent();
                _a.label = 12;

               case 12:
                i++;
                return [ 3, 10 ];

               case 13:
                this.offEffect(this.getChildXoSoById(id));
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.AtOhh) ];

               case 14:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengCuoi) ];

               case 15:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

               case 16:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 17:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.Item[type]);
                this.actionNhapNhay(this.getChildXoSoById(id), 18, 3.8, true);
                return [ 4, this.makeDelay(4.1) ];

               case 18:
                _a.sent();
                if (0 == objReviceSub.moneyRevice) {
                  resolve(null);
                  return [ 2 ];
                }
                this.soundMgn.playEffect(this.soundMgn.ShowHeSoRandom);
                mutil = objReviceSub.hesoX;
                money = objReviceSub.moneyRevice / mutil;
                this.setStringLbHeSo(mutil);
                this.runEffectNhapNhay(this.getNodeLbHeso(), 7.3, 32);
                this.runEffectNhapNhay(this.getNodeLbLeft(), 7.3, 32);
                return [ 4, this.makeDelay(7.3) ];

               case 19:
                _a.sent();
                i = 0, l = mutil;
                _a.label = 20;

               case 20:
                if (!(i < l)) return [ 3, 23 ];
                mutil--;
                this.setStringLbHeSo(mutil);
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                this.currentBtnTrai.setPointBy(money);
                return [ 4, this.makeDelay(.45) ];

               case 21:
                _a.sent();
                _a.label = 22;

               case 22:
                i++;
                return [ 3, 20 ];

               case 23:
                return [ 4, this.makeDelay(1) ];

               case 24:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      EffectSpineSoXo.prototype.getCountRunSoXo = function(idStart, idResult) {
        var count = 0;
        while (true) {
          if (idStart == idResult) return count + 8;
          count++;
          idStart++;
          idStart > 7 && (idStart = 0);
        }
      };
      return EffectSpineSoXo;
    }(BaseEffectEnd_1.default);
    exports.default = EffectSpineSoXo;
    cc._RF.pop();
  }, {
    "./BaseEffectEnd": "BaseEffectEnd"
  } ],
  EffectTraDiem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89a67rxmGZOjLzaQw11ElS+", "EffectTraDiem");
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
    var BaseEffect_1 = require("./BaseEffect");
    var EffectTraDiem = function(_super) {
      __extends(EffectTraDiem, _super);
      function EffectTraDiem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectTraDiem.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listLastIdResult, listChildren, listColor, countColor, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.soundMgn.playEffect(this.soundMgn.BatDauQuayTraDiem);
                listLastIdResult = this.getListLastResult();
                listLastIdResult.forEach(function(v) {
                  _this.actionNhapNhay(v, 20, 3.2);
                });
                return [ 4, this.makeDelay(3) ];

               case 1:
                _a.sent();
                listChildren = this.getListChildren();
                listChildren.forEach(function(v) {
                  _this.activeIcon(v);
                });
                listColor = [ 0, 2, 1 ];
                countColor = 0;
                i = 0;
                _a.label = 2;

               case 2:
                if (!(i < 18)) return [ 3, 5 ];
                this.setColor(listColor[countColor]);
                countColor++;
                countColor > listColor.length - 1 && (countColor = 0);
                return [ 4, this.makeDelay(.2) ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i++;
                return [ 3, 2 ];

               case 5:
                return [ 4, this.makeDelay(1) ];

               case 6:
                _a.sent();
                listChildren.forEach(function(v) {
                  _this.offItem(v);
                });
                this.getListLastResult().forEach(function(v) {
                  _this.activeIcon(v);
                });
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectTraDiem;
    }(BaseEffect_1.default);
    exports.default = EffectTraDiem;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  EffectVe3CuaXDV: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b43ce1f9GRFeLHCLyvkL+0W", "EffectVe3CuaXDV");
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
    var BaseEffectXDVEnd_1 = require("./BaseEffectXDVEnd");
    var EffectVe3CuaXDV = function(_super) {
      __extends(EffectVe3CuaXDV, _super);
      function EffectVe3CuaXDV() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectVe3CuaXDV.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var typeXDV, typeSpecialXDV, mutil;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                typeXDV = this.dataFinishXDV.result;
                typeSpecialXDV = this.dataFinishXDV.typeSpecial;
                mutil = this.dataFinishXDV.mutilVang;
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NhacVeVang) ];

               case 1:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauDo) ];

               case 2:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauXanhLa) ];

               case 3:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauVang) ];

               case 4:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CuocKhungHoang) ];

               case 5:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.DonDap) ];

               case 6:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

               case 7:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauDo) ];

               case 8:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 9:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XaPe) ];

               case 10:
                _a.sent();
                this.hideWithTimeFadeIn(this.getChildXDVById(0), .3, 0);
                this.hideWithTimeFadeIn(this.getChildXDVById(1), .3, 0);
                this.runEffectNhapNhay1Lan(this.getNodeLbItemXDV(0), .3);
                this.currentBtnTrai.setPointBy(this.dataFinishXDV.reviceDo);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CongTien) ];

               case 11:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauXanhLa) ];

               case 12:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 13:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XaPe) ];

               case 14:
                _a.sent();
                this.hideWithTimeFadeIn(this.getChildXDVById(4), .3, 0);
                this.hideWithTimeFadeIn(this.getChildXDVById(5), .3, 0);
                this.runEffectNhapNhay1Lan(this.getNodeLbItemXDV(2), .3);
                this.currentBtnTrai.setPointBy(this.dataFinishXDV.reviceXanh);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CongTien) ];

               case 15:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauVang) ];

               case 16:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 17:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XiPe) ];

               case 18:
                _a.sent();
                this.hideWithTimeFadeIn(this.getChildXDVById(2), .3, 0);
                this.hideWithTimeFadeIn(this.getChildXDVById(3), .3, 0);
                this.runEffectNhapNhay1Lan(this.getNodeLbItemXDV(1), .3);
                this.currentBtnTrai.setPointBy(this.dataFinishXDV.reviceVang);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CongTien) ];

               case 19:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectVe3CuaXDV;
    }(BaseEffectXDVEnd_1.default);
    exports.default = EffectVe3CuaXDV;
    cc._RF.pop();
  }, {
    "./BaseEffectXDVEnd": "BaseEffectXDVEnd"
  } ],
  EffectVeBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcf579zIZNB3bDv4p0yaPxG", "EffectVeBar");
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
    var BaseEffect_1 = require("./BaseEffect");
    var EffectVeBar = function(_super) {
      __extends(EffectVeBar, _super);
      function EffectVeBar() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectVeBar.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var listIndexBassNho1, listIndexBassNho2, listChild, isActive, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                listIndexBassNho1 = [ 20, 21, 22, 2, 3, 4, 8, 9, 10, 14, 15, 16 ];
                listIndexBassNho2 = [ 17, 18, 19, 23, 0, 1, 5, 6, 7, 11, 12, 13 ];
                this.soundMgn.playEffect(this.soundMgn.NhacVeBar);
                listChild = this.getListChildren();
                isActive = true;
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < 25)) return [ 3, 4 ];
                if (isActive) {
                  listIndexBassNho1.forEach(function(v) {
                    _this.offEffect(listChild[v]);
                  });
                  listIndexBassNho2.forEach(function(v) {
                    _this.offItem(listChild[v]);
                  });
                } else {
                  listIndexBassNho1.forEach(function(v) {
                    _this.offItem(listChild[v]);
                  });
                  listIndexBassNho2.forEach(function(v) {
                    _this.offEffect(listChild[v]);
                  });
                }
                isActive = !isActive;
                return [ 4, this.makeDelay(.3) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                return [ 4, this.makeDelay(.2) ];

               case 5:
                _a.sent();
                listChild.forEach(function(v) {
                  _this.offItem(v);
                });
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectVeBar;
    }(BaseEffect_1.default);
    exports.default = EffectVeBar;
    cc._RF.pop();
  }, {
    "./BaseEffect": "BaseEffect"
  } ],
  EffectVeVang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce7a50KFcRHZYb8+kbfoMxD", "EffectVeVang");
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
    var BaseEffectXDVEnd_1 = require("./BaseEffectXDVEnd");
    var EffectVeVang = function(_super) {
      __extends(EffectVeVang, _super);
      function EffectVeVang() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectVeVang.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var typeXDV, typeSpecialXDV, mutil, i;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                typeXDV = this.dataFinishXDV.result;
                typeSpecialXDV = this.dataFinishXDV.typeSpecial;
                mutil = this.dataFinishXDV.mutilVang;
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NhacVeVang) ];

               case 1:
                _a.sent();
                this.runEffectRandomLabelHeso(10, 31);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.RandomSo) ];

               case 2:
                _a.sent();
                this.offEffectRandomLabelHeso(mutil);
                i = 0;
                _a.label = 3;

               case 3:
                if (!(i < 3)) return [ 3, 6 ];
                this.runEffectActiveAndHideWithTime(this.getNodeLbHeso(), .1);
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                return [ 4, this.makeDelay(.2) ];

               case 4:
                _a.sent();
                _a.label = 5;

               case 5:
                i++;
                return [ 3, 3 ];

               case 6:
                this.offEffect(this.getNodeLbHeso());
                return [ 4, this.makeDelay(1) ];

               case 7:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiKhiVeVang) ];

               case 8:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return EffectVeVang;
    }(BaseEffectXDVEnd_1.default);
    exports.default = EffectVeVang;
    cc._RF.pop();
  }, {
    "./BaseEffectXDVEnd": "BaseEffectXDVEnd"
  } ],
  EffectX8ChuyenMau: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b559687TExO4oZcB6rm5Wlx", "EffectX8ChuyenMau");
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
    var BaseEffectXDVEnd_1 = require("./BaseEffectXDVEnd");
    var EffectX8ChuyenMau = function(_super) {
      __extends(EffectX8ChuyenMau, _super);
      function EffectX8ChuyenMau() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectX8ChuyenMau.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var typeXDV, typeSpecialXDV, mutil;
            return __generator(this, function(_a) {
              typeXDV = this.dataFinishXDV.result;
              typeSpecialXDV = this.dataFinishXDV.typeSpecial;
              mutil = this.dataFinishXDV.mutilVang;
              return [ 2 ];
            });
          });
        });
      };
      return EffectX8ChuyenMau;
    }(BaseEffectXDVEnd_1.default);
    exports.default = EffectX8ChuyenMau;
    cc._RF.pop();
  }, {
    "./BaseEffectXDVEnd": "BaseEffectXDVEnd"
  } ],
  IDataFinish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bde2Gu7V1GHrvpCDs92NiA", "IDataFinish");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IServerResponse: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e101/DKHhES7RN+6nIlRTy", "IServerResponse");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../../Scritps/Windown");
    var IServerResponse = function() {
      function IServerResponse() {
        Windown_1.Windown.XengController.canSendData(true);
      }
      IServerResponse.prototype.getGameController = function() {
        return Windown_1.Windown.XengController;
      };
      IServerResponse.prototype.setGameView = function(gv) {
        this.xengController = gv;
      };
      IServerResponse.prototype.sendToServer = function(event, SFSObject) {
        this.xengController.sendToServer(event, SFSObject);
      };
      return IServerResponse;
    }();
    exports.default = IServerResponse;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0
  } ],
  ResponseBetToNho: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46827RwI3lN3ZbgJ27Qa68X", "ResponseBetToNho");
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var StateGame_1 = require("../State/StateGame");
    var IServerResponse_1 = require("./IServerResponse");
    var ResponseBetToNho = function(_super) {
      __extends(ResponseBetToNho, _super);
      function ResponseBetToNho() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundMgn = null;
        return _this;
      }
      ResponseBetToNho.prototype.handleResponse = function(SFSObject) {
        this.soundMgn = this.getSoundMng();
        var data = null;
        try {
          data = JSON.parse(SFSObject.getUtfString("data"));
        } catch (e) {}
        if (null == data) return;
        cc.log(JSON.stringify(data));
        var result = data.result;
        var listMoney = data.listRevice;
        var totalRevice = 0;
        for (var _i = 0, listMoney_1 = listMoney; _i < listMoney_1.length; _i++) {
          var money = listMoney_1[_i];
          totalRevice += money;
        }
        this.getGameController().moneyCurrent = data.agXeng;
        Windown_1.Windown.MoneyUser.pushDelayMoney(GAME_TYPE_1.default.Xeng, data.agXeng, totalRevice);
        this.getGameController().xengView.offEffectRandomLabelHeso(result);
        if (true == data.isSpecial) {
          var count = 0;
          var moneyTemp = listMoney[count];
          1 == listMoney.length ? this.runEffectXTonho7Lan(moneyTemp) : this.runEffectXTonhoMutil(data.listRevice);
        } else this.effectNormal(listMoney[0] || 0);
      };
      ResponseBetToNho.prototype.effectNormal = function(money) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.SangHao) ];

             case 1:
              _a.sent();
              return [ 4, this.getGameController().makeDelay(.5) ];

             case 2:
              _a.sent();
              this.getGameController().btnChangePointL.setPoint(money);
              if (money > 0) this.getGameController().setCurrentState(StateGame_1.default.WATINGPLAYGAMEMINI); else {
                this.getGameController().setCurrentState(StateGame_1.default.WATING);
                Windown_1.Windown.MoneyUser.removeDelay(GAME_TYPE_1.default.Xeng);
              }
              return [ 2 ];
            }
          });
        });
      };
      ResponseBetToNho.prototype.runEffectXTonho7Lan = function(moneyRevice) {
        return __awaiter(this, void 0, void 0, function() {
          var getGameController, count, node, nodeLbTrai, money, i;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              getGameController = this.getGameController();
              getGameController.xengView.lbHeso.string = "7";
              count = 0;
              node = getGameController.xengView.lbHeso.node;
              nodeLbTrai = getGameController.btnChangePointL.lbPoint.node;
              getGameController.runEffectNhapNhay(node, 8, 36);
              getGameController.runEffectNhapNhay(nodeLbTrai, 8, 36);
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.NhacVeVang) ];

             case 1:
              _a.sent();
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.SoundX7ToNho) ];

             case 2:
              _a.sent();
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

             case 3:
              _a.sent();
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

             case 4:
              _a.sent();
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XiPe) ];

             case 5:
              _a.sent();
              money = getGameController.btnChangePointL.point;
              i = 0;
              _a.label = 6;

             case 6:
              if (!(i < 6)) return [ 3, 9 ];
              this.soundMgn.playEffect(this.soundMgn.TiengNo);
              getGameController.btnChangePointL.setPointBy(money);
              getGameController.runEffectNhapNhay1Lan(getGameController.btnChangePointL.lbPoint.node);
              return [ 4, getGameController.makeDelay(.3) ];

             case 7:
              _a.sent();
              _a.label = 8;

             case 8:
              i++;
              return [ 3, 6 ];

             case 9:
              return [ 4, getGameController.makeDelay(1) ];

             case 10:
              _a.sent();
              getGameController.setCurrentState(StateGame_1.default.WATINGPLAYGAMEMINI);
              return [ 2 ];
            }
          });
        });
      };
      ResponseBetToNho.prototype.runEffectXTonhoMutil = function(listMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var gameController, listAction, count, length, moneyBet, moneyCurrent, i, moneyRevice, mutil, i_1, audioId;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              gameController = this.getGameController();
              listAction = [];
              count = 0;
              length = listMoney.length;
              moneyBet = gameController.btnChangePointL.point;
              moneyCurrent = moneyBet;
              gameController.runEffectNhapNhay(gameController.btnChangePointL.lbPoint.node, 8, 36);
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.StartXmutilToNho) ];

             case 1:
              _a.sent();
              cc.log(JSON.stringify(listMoney));
              i = 0;
              _a.label = 2;

             case 2:
              if (!(i < length)) return [ 3, 12 ];
              moneyRevice = listMoney[i];
              mutil = moneyRevice / moneyBet;
              gameController.xengView.runEffectRandomLabelHeso(1, 10);
              this.soundMgn.playEffect(this.soundMgn.RandomSo);
              return [ 4, gameController.makeDelay(.7) ];

             case 3:
              _a.sent();
              gameController.xengView.offEffectRandomLabelHeso(mutil);
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XaPe) ];

             case 4:
              _a.sent();
              i_1 = 0;
              _a.label = 5;

             case 5:
              if (!(i_1 < mutil)) return [ 3, 8 ];
              audioId = this.soundMgn.playEffect(this.soundMgn.TiengNo);
              gameController.btnChangePointL.setPointBy(moneyBet);
              return [ 4, gameController.makeDelay(.45) ];

             case 6:
              _a.sent();
              _a.label = 7;

             case 7:
              i_1++;
              return [ 3, 5 ];

             case 8:
              return [ 4, gameController.makeDelay(1.5) ];

             case 9:
              _a.sent();
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TuNaiXa) ];

             case 10:
              _a.sent();
              _a.label = 11;

             case 11:
              i++;
              return [ 3, 2 ];

             case 12:
              gameController.xengView.runEffectRandomLabelHeso(1, 10);
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.RandomSo) ];

             case 13:
              _a.sent();
              gameController.xengView.offEffectRandomLabelHeso(0);
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MiOLa) ];

             case 14:
              _a.sent();
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengCuoi) ];

             case 15:
              _a.sent();
              gameController.setCurrentState(StateGame_1.default.WATINGPLAYGAMEMINI);
              return [ 2 ];
            }
          });
        });
      };
      ResponseBetToNho.prototype.getSoundMng = function() {
        return this.getGameController().getSoundMng();
      };
      return ResponseBetToNho;
    }(IServerResponse_1.default);
    exports.default = ResponseBetToNho;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "../State/StateGame": "StateGame",
    "./IServerResponse": "IServerResponse"
  } ],
  ResponseLeaveRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad6d1PY8aVONbWS9gaxxc4j", "ResponseLeaveRoom");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IServerResponse_1 = require("./IServerResponse");
    var ResponseLeaveRoom = function(_super) {
      __extends(ResponseLeaveRoom, _super);
      function ResponseLeaveRoom() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ResponseLeaveRoom.prototype.handleResponse = function(SFSObject) {};
      return ResponseLeaveRoom;
    }(IServerResponse_1.default);
    exports.default = ResponseLeaveRoom;
    cc._RF.pop();
  }, {
    "./IServerResponse": "IServerResponse"
  } ],
  ResponseMakeBet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a451qiKE1C4Jd+B42gqq39", "ResponseMakeBet");
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
    var Effect1CuaTo20_1 = require("../Effect/Effect1CuaTo20");
    var EffectAnJP_1 = require("../Effect/EffectAnJP");
    var EffectBassNho_1 = require("../Effect/EffectBassNho");
    var EffectDapChuot_1 = require("../Effect/EffectDapChuot");
    var EffectDoiMau_1 = require("../Effect/EffectDoiMau");
    var EffectEndGame_1 = require("../Effect/EffectEndGame");
    var EffectEndNormal_1 = require("../Effect/EffectEndNormal");
    var EffectRan8Dot_1 = require("../Effect/EffectRan8Dot");
    var EffectRunSpin_1 = require("../Effect/EffectRunSpin");
    var EffectSpecial14_1 = require("../Effect/EffectSpecial14");
    var EffectSpecial2_1 = require("../Effect/EffectSpecial2");
    var EffectSpecial3_1 = require("../Effect/EffectSpecial3");
    var EffectSpecial4_1 = require("../Effect/EffectSpecial4");
    var EffectSpecial5_1 = require("../Effect/EffectSpecial5");
    var EffectSpecial6_1 = require("../Effect/EffectSpecial6");
    var EffectSpecial7_1 = require("../Effect/EffectSpecial7");
    var EffectSpineSoXo_1 = require("../Effect/EffectSpineSoXo");
    var EffectTraDiem_1 = require("../Effect/EffectTraDiem");
    var EffectVe3CuaXDV_1 = require("../Effect/EffectVe3CuaXDV");
    var EffectVeBar_1 = require("../Effect/EffectVeBar");
    var EffectVeVang_1 = require("../Effect/EffectVeVang");
    var X10_30_1Cua_1 = require("../Effect/X10_30_1Cua");
    var X3_1Cua_1 = require("../Effect/X3_1Cua");
    var IServerResponse_1 = require("./IServerResponse");
    var ResponseMakeBet = function(_super) {
      __extends(ResponseMakeBet, _super);
      function ResponseMakeBet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundMgn = null;
        _this.data = null;
        _this.dataFinishXDV = null;
        _this.dataFinishItemAnTruoc = null;
        _this.dataFinishiItemNomarl = null;
        _this.isStateSpin = false;
        return _this;
      }
      ResponseMakeBet.prototype.handleResponse = function(SFSObject) {
        var data = null;
        try {
          data = JSON.parse(SFSObject.getUtfString("data"));
        } catch (e) {}
        if (null == data) return;
        cc.log(JSON.stringify(data));
        this.soundMgn = this.getSoundMng();
        var dataXDV = data.makebetXDV;
        var dataItemAnTruoc = data.makeBetAnTruoc;
        var makeBetNormal = data.makeBetNormal;
        this.data = data;
        this.dataFinishXDV = dataXDV;
        this.dataFinishItemAnTruoc = dataItemAnTruoc;
        this.dataFinishiItemNomarl = data.makeBetNormal;
        var specialType = dataXDV.typeSpecial;
        var resultXDV = dataXDV.result;
        this.execute();
      };
      ResponseMakeBet.prototype.execute = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.checkAndShowAnTruoc() ];

             case 1:
              _a.sent();
              return [ 4, this.checkAndShowStartEffectSpecial() ];

             case 2:
              _a.sent();
              return [ 4, this.runSpinWithIdResult() ];

             case 3:
              _a.sent();
              return [ 4, this.checkAndShowEndEffectSpecial() ];

             case 4:
              _a.sent();
              return [ 4, this.checkAndShowXDVSpecil() ];

             case 5:
              _a.sent();
              return [ 4, this.xuLiTienCuoiGameNomarl() ];

             case 6:
              _a.sent();
              cc.log("done");
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.checkAndShowAnTruoc = function() {
        return __awaiter(this, void 0, void 0, function() {
          var typeAnLuon, x3_1Cua, x10_30;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              typeAnLuon = this.dataFinishItemAnTruoc.typeSpecialAnTruoc;
              if (!(1 == typeAnLuon)) return [ 3, 1 ];
              x3_1Cua = new X3_1Cua_1.default(this.getGameController());
              return [ 2, x3_1Cua.intData(this.dataFinishItemAnTruoc).executed() ];

             case 1:
              if (!(2 == typeAnLuon)) return [ 3, 3 ];
              x10_30 = new X10_30_1Cua_1.default(this.getGameController());
              return [ 4, x10_30.intData(this.dataFinishItemAnTruoc).executed() ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.checkAndShowStartEffectSpecial = function() {
        return __awaiter(this, void 0, void 0, function() {
          var typeSpecialXDV, typeSpecialNomal, effect, effect, effect, effect, effect, effect, effect;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              typeSpecialXDV = this.dataFinishXDV.typeSpecial;
              cc.log("type special XDV " + typeSpecialXDV);
              typeSpecialNomal = this.dataFinishiItemNomarl.typeSpecial;
              this.isStateSpin = false;
              if (!(1 == typeSpecialXDV)) return [ 3, 2 ];
              this.isStateSpin = true;
              effect = new EffectTraDiem_1.default(this.getGameController());
              return [ 4, effect.executed() ];

             case 1:
              _a.sent();
              return [ 3, 15 ];

             case 2:
              if (!(2 == typeSpecialXDV)) return [ 3, 4 ];
              effect = new EffectDoiMau_1.default(this.getGameController());
              return [ 4, effect.initData(this.dataFinishXDV).executed() ];

             case 3:
              _a.sent();
              return [ 3, 15 ];

             case 4:
              if (!(2 == typeSpecialNomal)) return [ 3, 6 ];
              effect = new Effect1CuaTo20_1.default(this.getGameController());
              return [ 4, effect.executed() ];

             case 5:
              _a.sent();
              return [ 3, 15 ];

             case 6:
              if (!(5 == typeSpecialNomal)) return [ 3, 7 ];
              this.isStateSpin = true;
              return [ 3, 15 ];

             case 7:
              if (!(6 == typeSpecialNomal)) return [ 3, 9 ];
              this.isStateSpin = true;
              effect = new EffectTraDiem_1.default(this.getGameController());
              return [ 4, effect.executed() ];

             case 8:
              _a.sent();
              return [ 3, 15 ];

             case 9:
              if (!(7 == typeSpecialNomal || 13 == typeSpecialNomal || 14 == typeSpecialNomal || 9 == typeSpecialNomal)) return [ 3, 11 ];
              13 == typeSpecialNomal && this.getGameController().xengView.activeIcon(this.getGameController().xengView.getNodeJp());
              this.isStateSpin = true;
              effect = new EffectDapChuot_1.default(this.getGameController());
              return [ 4, effect.executed() ];

             case 10:
              _a.sent();
              return [ 3, 15 ];

             case 11:
              if (!(10 == typeSpecialNomal)) return [ 3, 13 ];
              this.isStateSpin = true;
              effect = new EffectVeBar_1.default(this.getGameController());
              return [ 4, effect.executed() ];

             case 12:
              _a.sent();
              return [ 3, 15 ];

             case 13:
              if (!(8 == typeSpecialNomal)) return [ 3, 15 ];
              effect = new EffectTraDiem_1.default(this.getGameController());
              return [ 4, effect.executed() ];

             case 14:
              _a.sent();
              _a.label = 15;

             case 15:
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.runSpinWithIdResult = function() {
        return __awaiter(this, void 0, void 0, function() {
          var data, idResult, resultXDV, spin;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              data = this.dataFinishiItemNomarl;
              idResult = data.objReviceFirtItem.idResult;
              resultXDV = this.dataFinishXDV.result;
              spin = new EffectRunSpin_1.default(this.getGameController());
              return [ 4, spin.spinWithId(idResult, resultXDV, this.isStateSpin) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.checkAndShowEndEffectSpecial = function() {
        return __awaiter(this, void 0, void 0, function() {
          var data, dataFirt, typeSpecial, listIdResultSub, effect, effect, effect, effect, effect, effect, effect, effect, effect, effect, effect, effect;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              data = this.dataFinishiItemNomarl;
              dataFirt = data.objReviceFirtItem;
              typeSpecial = data.typeSpecial;
              listIdResultSub = data.ListObjReviceSub;
              if (!(2 == typeSpecial)) return [ 3, 2 ];
              effect = new EffectSpecial2_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 1:
              _a.sent();
              return [ 3, 24 ];

             case 2:
              if (!(4 == typeSpecial)) return [ 3, 4 ];
              effect = new EffectSpecial4_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 3:
              _a.sent();
              return [ 3, 24 ];

             case 4:
              if (!(3 == typeSpecial)) return [ 3, 6 ];
              effect = new EffectSpecial3_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 5:
              _a.sent();
              return [ 3, 24 ];

             case 6:
              if (!(5 == typeSpecial)) return [ 3, 8 ];
              effect = new EffectSpecial5_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 7:
              _a.sent();
              return [ 3, 24 ];

             case 8:
              if (!(6 == typeSpecial)) return [ 3, 10 ];
              effect = new EffectSpecial6_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 9:
              _a.sent();
              return [ 3, 24 ];

             case 10:
              if (!(7 == typeSpecial)) return [ 3, 12 ];
              effect = new EffectSpecial7_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 11:
              _a.sent();
              return [ 3, 24 ];

             case 12:
              if (!(8 == typeSpecial)) return [ 3, 14 ];
              effect = new EffectSpineSoXo_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 13:
              _a.sent();
              return [ 3, 24 ];

             case 14:
              if (!(9 == typeSpecial)) return [ 3, 16 ];
              effect = new EffectRan8Dot_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 15:
              _a.sent();
              return [ 3, 24 ];

             case 16:
              if (!(10 == typeSpecial)) return [ 3, 18 ];
              effect = new EffectBassNho_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 17:
              _a.sent();
              return [ 3, 24 ];

             case 18:
              if (!(13 == typeSpecial)) return [ 3, 20 ];
              effect = new EffectAnJP_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 19:
              _a.sent();
              return [ 3, 24 ];

             case 20:
              if (!(14 == typeSpecial)) return [ 3, 22 ];
              effect = new EffectSpecial14_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 21:
              _a.sent();
              return [ 3, 24 ];

             case 22:
              effect = new EffectEndNormal_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishiItemNomarl).executed() ];

             case 23:
              _a.sent();
              _a.label = 24;

             case 24:
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.checkAndShowXDVSpecil = function() {
        return __awaiter(this, void 0, void 0, function() {
          var typeXDV, typeSpecialXDV, mutil, effect, effect;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              typeXDV = this.dataFinishXDV.result;
              typeSpecialXDV = this.dataFinishXDV.typeSpecial;
              mutil = this.dataFinishXDV.mutilVang;
              if (!(1 == typeXDV)) return [ 3, 2 ];
              effect = new EffectVeVang_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishXDV).executed() ];

             case 1:
              _a.sent();
              return [ 3, 8 ];

             case 2:
              if (!(1 == typeSpecialXDV)) return [ 3, 4 ];
              effect = new EffectVe3CuaXDV_1.default(this.getGameController());
              return [ 4, effect.intiData(this.dataFinishXDV).executed() ];

             case 3:
              _a.sent();
              return [ 3, 8 ];

             case 4:
              if (!(0 == typeXDV)) return [ 3, 6 ];
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauDo) ];

             case 5:
              _a.sent();
              return [ 3, 8 ];

             case 6:
              if (!(2 == typeXDV)) return [ 3, 8 ];
              return [ 4, this.soundMgn.playEffectSync(this.soundMgn.MauXanhLa) ];

             case 7:
              _a.sent();
              _a.label = 8;

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.xuLiTienCuoiGameNomarl = function() {
        return __awaiter(this, void 0, void 0, function() {
          var effect;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              effect = new EffectEndGame_1.default(this.getGameController());
              return [ 4, effect.intiData(this.data).executed() ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      ResponseMakeBet.prototype.getSoundMng = function() {
        return this.getGameController().getSoundMng();
      };
      return ResponseMakeBet;
    }(IServerResponse_1.default);
    exports.default = ResponseMakeBet;
    cc._RF.pop();
  }, {
    "../Effect/Effect1CuaTo20": "Effect1CuaTo20",
    "../Effect/EffectAnJP": "EffectAnJP",
    "../Effect/EffectBassNho": "EffectBassNho",
    "../Effect/EffectDapChuot": "EffectDapChuot",
    "../Effect/EffectDoiMau": "EffectDoiMau",
    "../Effect/EffectEndGame": "EffectEndGame",
    "../Effect/EffectEndNormal": "EffectEndNormal",
    "../Effect/EffectRan8Dot": "EffectRan8Dot",
    "../Effect/EffectRunSpin": "EffectRunSpin",
    "../Effect/EffectSpecial14": "EffectSpecial14",
    "../Effect/EffectSpecial2": "EffectSpecial2",
    "../Effect/EffectSpecial3": "EffectSpecial3",
    "../Effect/EffectSpecial4": "EffectSpecial4",
    "../Effect/EffectSpecial5": "EffectSpecial5",
    "../Effect/EffectSpecial6": "EffectSpecial6",
    "../Effect/EffectSpecial7": "EffectSpecial7",
    "../Effect/EffectSpineSoXo": "EffectSpineSoXo",
    "../Effect/EffectTraDiem": "EffectTraDiem",
    "../Effect/EffectVe3CuaXDV": "EffectVe3CuaXDV",
    "../Effect/EffectVeBar": "EffectVeBar",
    "../Effect/EffectVeVang": "EffectVeVang",
    "../Effect/X10_30_1Cua": "X10_30_1Cua",
    "../Effect/X3_1Cua": "X3_1Cua",
    "./IServerResponse": "IServerResponse"
  } ],
  ResponseSetMutil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f37fddYhalLd4i3UmekDp8O", "ResponseSetMutil");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IServerResponse_1 = require("./IServerResponse");
    var ResponseSetMutil = function(_super) {
      __extends(ResponseSetMutil, _super);
      function ResponseSetMutil() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundMgn = null;
        return _this;
      }
      ResponseSetMutil.prototype.handleResponse = function(SFSObject) {
        var moneyPhai = SFSObject.get("point");
        this.getGameController().moneyCurrent = moneyPhai;
        this.getGameController().btnChangePointR.reset();
        this.getGameController().showDoiDiem(false);
        this.getSoundMng().playNhacCho();
      };
      ResponseSetMutil.prototype.getSoundMng = function() {
        return this.getGameController().getSoundMng();
      };
      return ResponseSetMutil;
    }(IServerResponse_1.default);
    exports.default = ResponseSetMutil;
    cc._RF.pop();
  }, {
    "./IServerResponse": "IServerResponse"
  } ],
  SoundXeng: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0634cDiJDtA35XbjM1Id9SW", "SoundXeng");
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
        var _this = _super.call(this) || this;
        _this.AtOhh = null;
        _this.BatDauQuayTraDiem = null;
        _this.Bip = null;
        _this.BonusKhiBet = null;
        _this.CauNoiAnTruoc1CuaX30 = null;
        _this.CauNoiDapChuot = null;
        _this.CauNoiKhiVeVang = null;
        _this.CauNoiShowResultAnTruocX30 = null;
        _this.CauNoiTraDiem = null;
        _this.CauNoiVeBass = null;
        _this.CauNoiTraDiemXong = null;
        _this.CauNoiX3Luon = null;
        _this.ChayItem = null;
        _this.CongTien = null;
        _this.CuocKhungHoang = null;
        _this.DonDap = null;
        _this.EffectAnRandomItemNhoSau = null;
        _this.ItemChay1Vong = null;
        _this.Gong = null;
        _this.HieuUngAnTatCaCacCua = null;
        _this.Hu = null;
        _this.MauDo = null;
        _this.MauVang = null;
        _this.MauXanhLa = null;
        _this.MiOLa = null;
        _this.NextSoXo = null;
        _this.NhacNenToNho = null;
        _this.NhacNenTraDiem = null;
        _this.NhacDoiMau = null;
        _this.NiChieuSangCieu = null;
        _this.EndDoiMau = null;
        _this.NhacVeVang = null;
        _this.NhacVeBar = null;
        _this.NoLienTuc = null;
        _this.RandomSo = null;
        _this.SangHao = null;
        _this.ShowHeSoRandom = null;
        _this.SpinNormal = null;
        _this.SpinSpecial = null;
        _this.StartDapChuot = null;
        _this.StartXmutilToNho = null;
        _this.TiengCuoi = null;
        _this.TiengKen1 = null;
        _this.TiengKen2 = null;
        _this.TiengNo = null;
        _this.TiengNoVaChemKiem = null;
        _this.TiengRandomHesoAnTruocX30 = null;
        _this.Ting = null;
        _this.Ting2 = null;
        _this.SoundX7ToNho = null;
        _this.TuNaiXa = null;
        _this.VuiMung = null;
        _this.XaPe = null;
        _this.XiPe = null;
        _this.Yabe = null;
        _this.Woa = null;
        _this.ThingKaiSun = null;
        _this.TingTingDt = null;
        _this.Item = [];
        _this.ListNhacCho = [];
        _this.currentCountNhac = 0;
        _this.currentCountNhac = Windown_1.Windown.RandomNumber(0, _this.ListNhacCho.length) - 1;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        this.playEffect(this.audios[0]);
      };
      NewClass.prototype.playSoundSync = function(audioclip, volum, timeCall) {
        void 0 === volum && (volum = 1);
        return this.playEffectSync(audioclip, volum, timeCall);
      };
      NewClass.prototype.playNhacCho = function() {
        this.stopNhacCho();
        this.currentCountNhac++;
        this.currentCountNhac > this.ListNhacCho.length - 1 && (this.currentCountNhac = 0);
        this.playEffect(this.ListNhacCho[this.currentCountNhac]);
      };
      NewClass.prototype.stopNhacCho = function() {
        this.stopEffect(this.ListNhacCho[this.currentCountNhac]);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "AtOhh", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "BatDauQuayTraDiem", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Bip", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "BonusKhiBet", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiAnTruoc1CuaX30", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiDapChuot", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiKhiVeVang", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiShowResultAnTruocX30", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiTraDiem", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiVeBass", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiTraDiemXong", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CauNoiX3Luon", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "ChayItem", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CongTien", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "CuocKhungHoang", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "DonDap", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "EffectAnRandomItemNhoSau", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "ItemChay1Vong", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Gong", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "HieuUngAnTatCaCacCua", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Hu", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "MauDo", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "MauVang", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "MauXanhLa", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "MiOLa", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NextSoXo", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NhacNenToNho", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NhacNenTraDiem", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NhacDoiMau", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NiChieuSangCieu", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "EndDoiMau", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NhacVeVang", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NhacVeBar", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "NoLienTuc", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "RandomSo", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "SangHao", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "ShowHeSoRandom", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "SpinNormal", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "SpinSpecial", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "StartDapChuot", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "StartXmutilToNho", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TiengCuoi", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TiengKen1", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TiengKen2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TiengNo", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TiengNoVaChemKiem", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TiengRandomHesoAnTruocX30", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Ting", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Ting2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "SoundX7ToNho", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TuNaiXa", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "VuiMung", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "XaPe", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "XiPe", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Yabe", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "Woa", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "ThingKaiSun", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "TingTingDt", void 0);
      __decorate([ property([ cc.AudioClip ]) ], NewClass.prototype, "Item", void 0);
      __decorate([ property([ cc.AudioClip ]) ], NewClass.prototype, "ListNhacCho", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  StateFinishedMini: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "071c3C5539FQKV6DT3hySvO", "StateFinishedMini");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseState_1 = require("./BaseState");
    var StateFinishedMini = function(_super) {
      __extends(StateFinishedMini, _super);
      function StateFinishedMini() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StateFinishedMini.prototype.execute = function() {
        this.xengController.listButton.forEach(function(v) {
          v.offEvent();
        });
        cc.log("off het event nay");
        this.xengController.getSoundMng().stopNhacCho();
      };
      return StateFinishedMini;
    }(BaseState_1.default);
    exports.default = StateFinishedMini;
    cc._RF.pop();
  }, {
    "./BaseState": "BaseState"
  } ],
  StateFinished: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b0f5EuQgtCMau3vDAb9Qyd", "StateFinished");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseState_1 = require("./BaseState");
    var StateFinished = function(_super) {
      __extends(StateFinished, _super);
      function StateFinished() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StateFinished.prototype.execute = function() {
        this.xengController.listButton.forEach(function(v) {
          v.offEvent();
        });
      };
      return StateFinished;
    }(BaseState_1.default);
    exports.default = StateFinished;
    cc._RF.pop();
  }, {
    "./BaseState": "BaseState"
  } ],
  StateGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45b58lbjplOVINoK0SU3agS", "StateGame");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateGame = function() {
      function StateGame() {}
      StateGame.WATING = 0;
      StateGame.PLAYING = 1;
      StateGame.FINISHED = 2;
      StateGame.PLAYINGMINI = 3;
      StateGame.FINISHEDMINI = 4;
      StateGame.WATINGPLAYGAME = 5;
      StateGame.WATINGPLAYGAMEMINI = 6;
      return StateGame;
    }();
    exports.default = StateGame;
    cc._RF.pop();
  }, {} ],
  StatePlayingMini: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a129f3A8jFOk5LPNRRbIZjX", "StatePlayingMini");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseState_1 = require("./BaseState");
    var StatePlayingMini = function(_super) {
      __extends(StatePlayingMini, _super);
      function StatePlayingMini() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StatePlayingMini.prototype.execute = function() {
        var _this = this;
        this.xengController.listBtnXDV.forEach(function(v) {
          v.offEvent();
        });
        this.xengController.listBtnItem.forEach(function(v) {
          v.offEvent();
        });
        this.xengController.btnChangePointL.initEvent();
        this.xengController.btnChangePointR.initEvent();
        this.xengController.listBtnClick.forEach(function(v) {
          v.initEvent();
        });
        this.xengController.listBtnItem.forEach(function(v) {
          v.reset();
          _this.xengController.offEffect(v.lbPoint.node);
        });
        this.xengController.listBtnXDV.forEach(function(v) {
          v.reset();
          _this.xengController.offEffect(v.lbPoint.node);
        });
        this.xengController.xengView.getListChildXDV().forEach(function(v) {
          _this.xengController.offItem(v);
        });
        this.xengController.xengView.getListChildren().forEach(function(v) {
          _this.xengController.offItem(v);
        });
        this.xengController.xengView.runEffectRandomLabelHesoMiniGame();
        this.xengController.getSoundMng().stopNhacCho();
        this.xengController.getSoundMng().playEffect(this.xengController.getSoundMng().NhacNenToNho);
      };
      return StatePlayingMini;
    }(BaseState_1.default);
    exports.default = StatePlayingMini;
    cc._RF.pop();
  }, {
    "./BaseState": "BaseState"
  } ],
  StatePlaying: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87eed/6USpPlJc9t0TRnp5j", "StatePlaying");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseState_1 = require("./BaseState");
    var StatePlaying = function(_super) {
      __extends(StatePlaying, _super);
      function StatePlaying() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StatePlaying.prototype.execute = function() {
        this.xengController.listBtnClick.forEach(function(v) {
          "all1" != v.node.name && v.offEvent();
        });
        this.xengController.btnChangePointL.offEvent();
        this.xengController.btnChangePointR.offEvent();
        this.xengController.btnGo.initEvent();
        this.xengController.getSoundMng().stopNhacCho();
      };
      return StatePlaying;
    }(BaseState_1.default);
    exports.default = StatePlaying;
    cc._RF.pop();
  }, {
    "./BaseState": "BaseState"
  } ],
  StateWatingPlayGameMini: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d681e4RLF9ErLm/yr6CnEJx", "StateWatingPlayGameMini");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateWatingPlayGame_1 = require("./StateWatingPlayGame");
    var StateWatingPlayGameMini = function(_super) {
      __extends(StateWatingPlayGameMini, _super);
      function StateWatingPlayGameMini() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StateWatingPlayGameMini.prototype.execute = function() {
        _super.prototype.execute.call(this);
        this.xengController.getSoundMng().stopNhacCho();
        this.xengController.xengView.runEffectRandomLabelHesoMiniGame();
        this.xengController.getSoundMng().playEffect(this.xengController.getSoundMng().NhacNenToNho);
      };
      return StateWatingPlayGameMini;
    }(StateWatingPlayGame_1.default);
    exports.default = StateWatingPlayGameMini;
    cc._RF.pop();
  }, {
    "./StateWatingPlayGame": "StateWatingPlayGame"
  } ],
  StateWatingPlayGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c2e3nymtRPfqd0JcmUiRiQ", "StateWatingPlayGame");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseState_1 = require("./BaseState");
    var StateWatingPlayGame = function(_super) {
      __extends(StateWatingPlayGame, _super);
      function StateWatingPlayGame() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StateWatingPlayGame.prototype.execute = function() {
        this.xengController.listBtnClick.forEach(function(v) {
          v.initEvent();
        });
        this.xengController.listBtnItem.forEach(function(v) {
          v.initEvent();
        });
        this.xengController.btnGo.initEvent();
        this.xengController.btnChangePointL.initEvent();
        this.xengController.btnChangePointR.initEvent();
        this.xengController.getSoundMng().playNhacCho();
      };
      return StateWatingPlayGame;
    }(BaseState_1.default);
    exports.default = StateWatingPlayGame;
    cc._RF.pop();
  }, {
    "./BaseState": "BaseState"
  } ],
  StateWating: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0befaq7Go5NKKHpl6lqCkak", "StateWating");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BaseState_1 = require("./BaseState");
    var StateWating = function(_super) {
      __extends(StateWating, _super);
      function StateWating() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StateWating.prototype.execute = function() {
        this.xengController.listButton.forEach(function(v) {
          v.initEvent();
        });
        this.xengController.listBtnClick.forEach(function(v) {
          v.offEvent();
        });
        this.xengController.btnGo.initEvent();
        this.xengController.btnChangePointL.reset();
        this.xengController.btnChangePointR.reset();
        this.xengController.resetEffectAll();
        this.xengController.xengView.offEffectLabelHeso();
        this.xengController.getSoundMng().stopNhacCho();
        this.xengController.getSoundMng().stopEffect(this.xengController.getSoundMng().NhacNenToNho);
        Windown_1.Windown.MoneyUser.removeDelay(GAME_TYPE_1.default.Xeng);
        Windown_1.Windown.MoneyUser.updateMoney();
      };
      return StateWating;
    }(BaseState_1.default);
    exports.default = StateWating;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "./BaseState": "BaseState"
  } ],
  Test: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75bf1R0nCdKKZJPT1668HgH", "Test");
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
    var BaseEffect_1 = require("./Effect/BaseEffect");
    var Test = function(_super) {
      __extends(Test, _super);
      function Test() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Test.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              resolve(null);
              return [ 2 ];
            });
          });
        });
      };
      return Test;
    }(BaseEffect_1.default);
    exports.default = Test;
    cc._RF.pop();
  }, {
    "./Effect/BaseEffect": "BaseEffect"
  } ],
  X10_30_1Cua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a89a1LFTW5ODrjXQJqp/5hl", "X10_30_1Cua");
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
    var BaseEffectAnTruoc_1 = require("./BaseEffectAnTruoc");
    var EffectAnLuon1Cua_1 = require("./EffectAnLuon1Cua");
    var X10_30_1Cua = function(_super) {
      __extends(X10_30_1Cua, _super);
      function X10_30_1Cua() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      X10_30_1Cua.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var result, mutil, moneyRevice, effect, listChild, funSchedule, index, count, hesoRun, isBreak, moneyCurrent, money, i, l;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                result = this.dataFinishItemAnTruoc.result;
                mutil = this.dataFinishItemAnTruoc.mutil;
                moneyRevice = this.dataFinishItemAnTruoc.moneyRevice;
                effect = new EffectAnLuon1Cua_1.default(this.xengController);
                return [ 4, effect.executed() ];

               case 1:
                _a.sent();
                this.soundMgn.playEffect(this.soundMgn.ItemChay1Vong);
                listChild = this.getListChildren();
                listChild.forEach(function(v) {
                  _this.offItem(v);
                });
                funSchedule = null;
                index = 0;
                count = 0;
                hesoRun = 1;
                isBreak = false;
                _a.label = 2;

               case 2:
                false;
                this.runEffectActiveAndHideWithTime(this.getNodeLbItem(index), .05);
                if (index == result && count > 27) return [ 3, 4 ];
                index += hesoRun;
                if (index > 8) {
                  hesoRun *= -1;
                  index = 8;
                }
                if (-1 == index) {
                  hesoRun *= -1;
                  index = 0;
                }
                count++;
                if (isBreak) return [ 3, 4 ];
                return [ 4, this.makeDelay(.05) ];

               case 3:
                _a.sent();
                return [ 3, 2 ];

               case 4:
                this.offEffect(this.getNodeLbItem(result));
                this.soundMgn.stopEffect(this.soundMgn.ItemChay1Vong);
                this.runEffectNhapNhay(this.getNodeLbItem(result), 10, 70);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiShowResultAnTruocX30) ];

               case 5:
                _a.sent();
                this.offEffect(this.getNodeLbItem(result));
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNoVaChemKiem) ];

               case 6:
                _a.sent();
                this.runEffectRandomLabelHesoSpecial();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengRandomHesoAnTruocX30) ];

               case 7:
                _a.sent();
                this.offEffectRandomLabelHeso(mutil);
                return [ 4, this.makeDelay(.5) ];

               case 8:
                _a.sent();
                this.runEffectNhapNhay(this.getNodeLbHeso(), 10, 70);
                this.runEffectNhapNhay(this.getNodeLbLeft(), 10, 70);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

               case 9:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Item[result]) ];

               case 10:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 11:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XiPe) ];

               case 12:
                _a.sent();
                this.offEffect(this.getNodeLbHeso());
                this.offEffect(this.getNodeLbLeft());
                if (!(moneyRevice > 0)) return [ 3, 18 ];
                moneyCurrent = this.getBtnItem(result).point;
                money = moneyCurrent;
                this.currentBtnTrai.setPointBy(moneyCurrent);
                i = 0, l = mutil;
                _a.label = 13;

               case 13:
                if (!(i < l)) return [ 3, 16 ];
                mutil--;
                this.setStringLbHeSo(mutil);
                this.soundMgn.playEffect(this.soundMgn.TiengNo);
                this.currentBtnTrai.setPointBy(moneyCurrent);
                return [ 4, this.makeDelay(.45) ];

               case 14:
                _a.sent();
                _a.label = 15;

               case 15:
                i++;
                return [ 3, 13 ];

               case 16:
                return [ 4, this.makeDelay(1) ];

               case 17:
                _a.sent();
                listChild.forEach(function(v) {
                  v.stopAllActions();
                  v.opacity = 255;
                });
                resolve(null);
                return [ 3, 20 ];

               case 18:
                return [ 4, this.makeDelay(1) ];

               case 19:
                _a.sent();
                resolve(null);
                _a.label = 20;

               case 20:
                return [ 2 ];
              }
            });
          });
        });
      };
      return X10_30_1Cua;
    }(BaseEffectAnTruoc_1.default);
    exports.default = X10_30_1Cua;
    cc._RF.pop();
  }, {
    "./BaseEffectAnTruoc": "BaseEffectAnTruoc",
    "./EffectAnLuon1Cua": "EffectAnLuon1Cua"
  } ],
  X3_1Cua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7ca8Ch1HtFPaH/dAGVsUWf", "X3_1Cua");
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
    var BaseEffectAnTruoc_1 = require("./BaseEffectAnTruoc");
    var X3_1Cua = function(_super) {
      __extends(X3_1Cua, _super);
      function X3_1Cua() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      X3_1Cua.prototype.executed = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var result, moneyRevice;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                result = this.dataFinishItemAnTruoc.result;
                moneyRevice = this.dataFinishItemAnTruoc.moneyRevice;
                this.runEffectNhapNhay(this.getNodeLbItem(result), 10, 40);
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.CauNoiX3Luon) ];

               case 1:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.VuiMung) ];

               case 2:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Item[result]) ];

               case 3:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.Gong) ];

               case 4:
                _a.sent();
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.XaPe) ];

               case 5:
                _a.sent();
                if (!(0 == moneyRevice)) return [ 3, 6 ];
                this.offEffect(this.getNodeLbItem(result));
                resolve(null);
                return [ 3, 8 ];

               case 6:
                this.currentBtnTrai.setPoint(moneyRevice);
                this.offEffect(this.getNodeLbItem(result));
                return [ 4, this.soundMgn.playEffectSync(this.soundMgn.TiengNo) ];

               case 7:
                _a.sent();
                resolve(null);
                _a.label = 8;

               case 8:
                return [ 2 ];
              }
            });
          });
        });
      };
      return X3_1Cua;
    }(BaseEffectAnTruoc_1.default);
    exports.default = X3_1Cua;
    cc._RF.pop();
  }, {
    "./BaseEffectAnTruoc": "BaseEffectAnTruoc"
  } ],
  XengController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8952cXBqARBTJ6Eo1zEBJDp", "XengController");
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
    var BtnBetItem_1 = require("./Button/BtnBetItem");
    var BtnBetXDV_1 = require("./Button/BtnBetXDV");
    var BtnChangePointLeft_1 = require("./Button/BtnChangePointLeft");
    var BtnChangePointRight_1 = require("./Button/BtnChangePointRight");
    var BtnClick_1 = require("./Button/BtnClick");
    var BtnGo_1 = require("./Button/BtnGo");
    var ResponseBetToNho_1 = require("./Event/ResponseBetToNho");
    var ResponseMakeBet_1 = require("./Event/ResponseMakeBet");
    var ResponseSetMutil_1 = require("./Event/ResponseSetMutil");
    var StateFinished_1 = require("./State/StateFinished");
    var StateFinishedMini_1 = require("./State/StateFinishedMini");
    var StateGame_1 = require("./State/StateGame");
    var StatePlaying_1 = require("./State/StatePlaying");
    var StatePlayingMini_1 = require("./State/StatePlayingMini");
    var StateWating_1 = require("./State/StateWating");
    var StateWatingPlayGame_1 = require("./State/StateWatingPlayGame");
    var StateWatingPlayGameMini_1 = require("./State/StateWatingPlayGameMini");
    var XengModel_1 = require("./XengModel");
    var XengController = function() {
      function XengController() {
        this.xengModel = new XengModel_1.default();
        this.stateGame = null;
        this.listButton = [];
        this.listBtnItem = [];
        this.listBtnXDV = [];
        this.btnChangePointL = null;
        this.btnChangePointR = null;
        this.listBtnClick = [];
        this.btnGo = null;
        this.roomSFS = null;
        this.isCanSendData = true;
        this.betCache = null;
        this.moneyCurrent = 0;
        this.sfs = null;
        this.listTimeOut = [];
        this.mutil = 1;
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        Windown_1.Windown.XengController = this;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
      }
      XengController.prototype.dangKyEventXeng = function() {
        Windown_1.Windown.MoneyUser.dangKyHandle(this.setGold, this);
      };
      XengController.prototype.setGold = function(money) {
        cc.log("money la: " + money);
        this.moneyCurrent = money;
        this.btnChangePointR && this.btnChangePointR.setPoint(money, true);
      };
      XengController.prototype.onDisconnect = function() {
        this.onDestroy();
        cc.director.loadScene("main");
      };
      XengController.prototype.userExitRoom = function(event) {
        var room = event.room;
        if ("Xeng" == room.groupId) {
          var user = event.user;
          if (user.isItMe) {
            this.onDestroy();
            cc.director.loadScene("main");
            return;
          }
        }
      };
      XengController.prototype.onCreateError = function(event) {
        cc.log("creat err");
        Windown_1.Windown.UIManager.hideLoading();
        this.onDestroy();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
      };
      XengController.prototype.onJoinRoom = function(event) {
        return __awaiter(this, void 0, void 0, function() {
          var room, bundle;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              room = event.room;
              if (!("Xeng" == room.groupId)) return [ 3, 2 ];
              this.roomSFS = room;
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.Xeng.toString()) ];

             case 1:
              bundle = _a.sent();
              bundle.loadScene("XengGame", function(err, scence) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  Windown_1.Windown.UIManager.hideLoadingData();
                  return;
                }
                cc.director.runScene(scence, null, function() {
                  Windown_1.Windown.UIManager.hideLoadingData();
                });
              });
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      XengController.prototype.onJoinRoomErr = function(event) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        this.onDestroy();
      };
      XengController.prototype.extResponse = function(packet) {
        var handle = null;
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.BetToNho:
          handle = new ResponseBetToNho_1.default();
          break;

         case REQUEST_CODE_1.REQUEST_CODE.MakeBet:
          handle = new ResponseMakeBet_1.default();
          break;

         case REQUEST_CODE_1.REQUEST_CODE.SetMutiXeng:
          handle = new ResponseSetMutil_1.default();
        }
        handle && handle.handleResponse(SFSObject);
      };
      XengController.prototype.onDestroy = function() {
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.UIManager.hideLoading();
        cc.systemEvent.removeAll(this);
        this.clearAllTimeOut();
        this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom);
        this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr);
        this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse);
        Windown_1.Windown.XengController = null;
        this.roomSFS = null;
        Windown_1.Windown.MoneyUser.targetOff(this);
        Windown_1.Windown.MoneyUser.endGameMOney(GAME_TYPE_1.default.Xeng);
      };
      XengController.prototype.intiGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var bundle;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.Xeng.toString()) ];

             case 1:
              bundle = _a.sent();
              Windown_1.Windown.UIManager.showLoadingData();
              bundle.preloadScene("XengGame", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                _this.sendJoinRoom();
              });
              return [ 2 ];
            }
          });
        });
      };
      XengController.prototype.initXengView = function(cp) {
        this.xengView = cp;
        Windown_1.Windown.UIManager.hideLoadingData();
        this.dangKyEventXeng();
      };
      XengController.prototype.sendJoinRoom = function() {
        cc.log("send creat room");
        var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
        var roomSeting = new SFS2X.RoomSettings(nameCreat);
        var roomExt = new SFS2X.RoomExtension("XengExtension", "ext.Room.Xeng.XengGameView");
        roomSeting.extension = roomExt;
        roomSeting.isGame = true;
        roomSeting.maxUsers = 1;
        roomSeting.groupId = "Xeng";
        this.sfs.send(new SFS2X.CreateRoomRequest(roomSeting, true));
      };
      XengController.prototype.initListButton = function(list) {
        var _this = this;
        this.listButton = list;
        this.listBtnItem = [];
        this.listBtnXDV = [];
        this.listButton.forEach(function(v) {
          v instanceof BtnBetItem_1.default ? _this.listBtnItem.push(v) : v instanceof BtnBetXDV_1.default ? _this.listBtnXDV.push(v) : v instanceof BtnClick_1.default ? _this.listBtnClick.push(v) : v instanceof BtnGo_1.default ? _this.btnGo = v : v instanceof BtnChangePointRight_1.default ? _this.btnChangePointR = v : v instanceof BtnChangePointLeft_1.default && (_this.btnChangePointL = v);
          v.initGameController(_this);
        });
        this.setCurrentState(StateGame_1.default.WATING);
      };
      XengController.prototype.sendToServer = function(event, data) {
        if (!this.isCanSendData || null == this.roomSFS) return;
        this.isCanSendData = false;
        ConectManager_1.ConectManager.getIns().sendRequest(event, data, this.roomSFS);
      };
      XengController.prototype.onClickGo = function() {
        if (this.stateGame.type == StateGame_1.default.WATINGPLAYGAME || this.stateGame.type == StateGame_1.default.WATINGPLAYGAMEMINI || this.stateGame.type == StateGame_1.default.PLAYINGMINI) this.setCurrentState(StateGame_1.default.WATING); else if (this.stateGame.type == StateGame_1.default.WATING) {
          if (this.betCache) {
            this.getBtnItemXDV(0).onPress(this.betCache.red);
            this.getBtnItemXDV(1).onPress(this.betCache.yello);
            this.getBtnItemXDV(2).onPress(this.betCache.green);
            for (var temp in this.betCache.listBetItem) this.listBtnItem[Number(temp)].onPress(this.betCache.listBetItem[temp]);
            this.setCurrentState(StateGame_1.default.PLAYING);
          }
        } else if (this.stateGame.type == StateGame_1.default.PLAYING) {
          var obj = Object.create(null);
          obj.green = this.listBtnXDV[2].point;
          obj.red = this.listBtnXDV[0].point;
          obj.yello = this.listBtnXDV[1].point;
          obj.listBetItem = this.getArryPointItem();
          this.betCache = obj;
          var objSFS = ConectManager_1.ConectManager.getIns().getSFSObj();
          objSFS.putUtfString("data", JSON.stringify(obj));
          this.sendToServer(REQUEST_CODE_1.REQUEST_CODE.MakeBet, objSFS);
          cc.log("objSend" + JSON.stringify(obj));
          this.setCurrentState(StateGame_1.default.FINISHED);
        }
      };
      XengController.prototype.onClickAllAdd1 = function(dtPress) {
        this.listBtnItem.forEach(function(v) {
          v.onPress(dtPress);
        });
      };
      XengController.prototype.onClick1_6 = function() {
        this.resetEffectAll();
        if (this.btnChangePointL.point <= 0) return;
        cc.log("chay vao click 1_6");
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("agXengDat", this.btnChangePointL.point);
        obj.putInt("type", 1);
        this.sendToServer("betToNho", obj);
        this.setCurrentState(StateGame_1.default.FINISHEDMINI);
        this.getSoundMng().stopEffect(this.getSoundMng().NhacNenToNho);
      };
      XengController.prototype.onClick8_13 = function() {
        this.resetEffectAll();
        if (this.btnChangePointL.point <= 0) return;
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("agXengDat", this.btnChangePointL.point);
        obj.putInt("type", 2);
        this.sendToServer("betToNho", obj);
        this.setCurrentState(StateGame_1.default.FINISHEDMINI);
        this.getSoundMng().stopEffect(this.getSoundMng().NhacNenToNho);
      };
      XengController.prototype.onClickChan = function() {
        this.resetEffectAll();
        if (this.btnChangePointL.point <= 0) return;
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("agXengDat", this.btnChangePointL.point);
        obj.putInt("type", 4);
        this.sendToServer("betToNho", obj);
        this.setCurrentState(StateGame_1.default.FINISHEDMINI);
        this.getSoundMng().stopEffect(this.getSoundMng().NhacNenToNho);
      };
      XengController.prototype.onClickLe = function() {
        if (this.btnChangePointL.point <= 0) return;
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("agXengDat", this.btnChangePointL.point);
        obj.putInt("type", 3);
        this.sendToServer("betToNho", obj);
        this.setCurrentState(StateGame_1.default.FINISHEDMINI);
        this.getSoundMng().stopEffect(this.getSoundMng().NhacNenToNho);
      };
      XengController.prototype.canSendData = function(isCanSendDate) {
        void 0 === isCanSendDate && (isCanSendDate = false);
        this.isCanSendData = isCanSendDate;
      };
      XengController.prototype.setCurrentState = function(typeState) {
        if (this.stateGame && this.stateGame.type == typeState) return;
        this.stateGame = this.getState(typeState);
        this.stateGame.initGameController(this);
        this.stateGame.execute();
      };
      XengController.prototype.getSoundMng = function() {
        return Windown_1.Windown.AudioManager;
      };
      XengController.prototype.getArryPointItem = function() {
        var arr = [];
        this.listBtnItem.forEach(function(v) {
          arr.push(v.point);
        });
        return arr;
      };
      XengController.prototype.getBtnItemXDV = function(id) {
        return this.listBtnXDV[id];
      };
      XengController.prototype.offEffect = function(node) {
        node.opacity = 255;
        node.stopAllActions();
      };
      XengController.prototype.offItem = function(node) {
        node.stopAllActions();
        node.opacity = 0;
      };
      XengController.prototype.runEffectNhapNhay = function(node, time, repeat) {
        node.stopAllActions();
        node.opacity = 255;
        node.runAction(cc.blink(time, repeat));
      };
      XengController.prototype.runEffectActiveAndHideWithTime = function(node, timeHide) {
        node.stopAllActions();
        node.opacity = 255;
        node.runAction(cc.sequence(cc.delayTime(timeHide), cc.fadeOut(0)));
      };
      XengController.prototype.runEffectNhapNhay1Lan = function(node, timeDelayShow) {
        void 0 === timeDelayShow && (timeDelayShow = .1);
        node.stopAllActions();
        node.opacity = 0;
        node.runAction(cc.sequence(cc.delayTime(timeDelayShow), cc.fadeIn(0)));
      };
      XengController.prototype.actionFade = function(node) {
        node.opacity = 255;
      };
      XengController.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var timeOut = setTimeout(function() {
            _this.removeTimeOut(timeOut);
            resolve(null);
          }, 1e3 * time);
          _this.addTimeOut(timeOut);
        });
      };
      XengController.prototype.handleBetToNho = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        var temp = new ResponseBetToNho_1.default();
        temp.handleResponse(SFSObject);
      };
      XengController.prototype.handleMakeBet = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        var temp = new ResponseMakeBet_1.default();
        temp.handleResponse(SFSObject);
      };
      XengController.prototype.handleSetMutiXeng = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        var temp = new ResponseSetMutil_1.default();
        temp.handleResponse(SFSObject);
      };
      XengController.prototype.handleSetConfig = function(SFSObject) {
        this.isCanSendData = true;
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
      };
      XengController.prototype.showDoiDiem = function(isShow) {
        this.xengView.showDoiDiem(isShow);
      };
      XengController.prototype.resetEffectAll = function() {
        var _this = this;
        this.offEffect(this.btnChangePointL.lbPoint.node);
        this.listBtnItem.forEach(function(v) {
          v.reset();
          _this.offEffect(v.lbPoint.node);
        });
        this.listBtnXDV.forEach(function(v) {
          v.reset();
          _this.offEffect(v.lbPoint.node);
        });
        this.xengView.getIdListLastResutl().forEach(function(v) {
          _this.offEffect(_this.xengView.getChildById(v));
        });
        this.xengView.getIdXDVListLastResutl().forEach(function(v) {
          _this.offEffect(_this.xengView.getChildXDVById(v));
        });
        this.offItem(this.xengView.getNodeJp());
      };
      XengController.prototype.addTimeOut = function(number) {
        this.listTimeOut.includes(number) || this.listTimeOut.push(number);
      };
      XengController.prototype.removeTimeOut = function(number) {
        var index = this.listTimeOut.indexOf(number);
        index > -1 && this.listTimeOut.splice(index, 1);
      };
      XengController.prototype.clearAllTimeOut = function() {
        this.listTimeOut.forEach(function(v) {
          clearTimeout(v);
        });
      };
      XengController.prototype.getState = function(typeState) {
        switch (typeState) {
         case StateGame_1.default.PLAYING:
          return new StatePlaying_1.default(StateGame_1.default.PLAYING);

         case StateGame_1.default.PLAYINGMINI:
          return new StatePlayingMini_1.default(StateGame_1.default.PLAYINGMINI);

         case StateGame_1.default.WATING:
          return new StateWating_1.default(StateGame_1.default.WATING);

         case StateGame_1.default.FINISHED:
          return new StateFinished_1.default(StateGame_1.default.FINISHED);

         case StateGame_1.default.FINISHEDMINI:
          return new StateFinishedMini_1.default(StateGame_1.default.FINISHEDMINI);

         case StateGame_1.default.WATINGPLAYGAME:
          return new StateWatingPlayGame_1.default(StateGame_1.default.WATINGPLAYGAME);

         case StateGame_1.default.WATINGPLAYGAMEMINI:
          return new StateWatingPlayGameMini_1.default(StateGame_1.default.WATINGPLAYGAMEMINI);
        }
      };
      return XengController;
    }();
    exports.default = XengController;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Windown": void 0,
    "./Button/BtnBetItem": "BtnBetItem",
    "./Button/BtnBetXDV": "BtnBetXDV",
    "./Button/BtnChangePointLeft": "BtnChangePointLeft",
    "./Button/BtnChangePointRight": "BtnChangePointRight",
    "./Button/BtnClick": "BtnClick",
    "./Button/BtnGo": "BtnGo",
    "./Event/ResponseBetToNho": "ResponseBetToNho",
    "./Event/ResponseMakeBet": "ResponseMakeBet",
    "./Event/ResponseSetMutil": "ResponseSetMutil",
    "./State/StateFinished": "StateFinished",
    "./State/StateFinishedMini": "StateFinishedMini",
    "./State/StateGame": "StateGame",
    "./State/StatePlaying": "StatePlaying",
    "./State/StatePlayingMini": "StatePlayingMini",
    "./State/StateWating": "StateWating",
    "./State/StateWatingPlayGame": "StateWatingPlayGame",
    "./State/StateWatingPlayGameMini": "StateWatingPlayGameMini",
    "./XengModel": "XengModel"
  } ],
  XengModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db815rfGQlO75Z3et18Soz6", "XengModel");
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
  XengView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ce64uuPndBJ7yNMewHOgJ6", "XengView");
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
    var Windown_1 = require("../../../Scritps/Windown");
    var BaseButton_1 = require("./Button/BaseButton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeGame = null;
        _this.lbHeso = null;
        _this.listLbHesoOGiua = [];
        _this.parentItem = null;
        _this.parentHistory = null;
        _this.parentXDV = null;
        _this.parentXoSo = null;
        _this.parentLightMid = null;
        _this.jpNode = null;
        _this.nodeDoiDiem = null;
        _this.funRDHeSo = null;
        _this.handleUpdate = null;
        _this.listIdResult = [ 0 ];
        _this.listIdXDVResult = [ 0, 1 ];
        _this.listHistory = [];
        _this.funUpdate = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        if (null == Windown_1.Windown.XengController) {
          cc.director.loadScene("main");
          return;
        }
        Windown_1.Windown.XengController.initXengView(this);
        this.showDoiDiem(true);
        var nodeBot = cc.find("Game/Bot", this.node);
        var listBtn = nodeBot.getComponentsInChildren(BaseButton_1.default);
        Windown_1.Windown.XengController.initListButton(listBtn);
        this.initListHistory();
        Windown_1.Windown.UIManager.changeRotation(true);
        this.setupView();
        this.randomLbHeSoOGiua();
        cc.log("nhay vao start xeng");
      };
      NewClass.prototype.setupView = function() {
        if (!cc.sys.isMobile) {
          var scale = cc.winSize.height / 1280;
          this.nodeGame.angle = -90;
          this.nodeGame.scale = scale;
        }
      };
      NewClass.prototype.initListHistory = function() {
        var list = Windown_1.Windown.getLocalStorage("historyXDV");
        if (list) this.listHistory = JSON.parse(list); else {
          list = [];
          for (var i = 0; i < 12; i++) {
            var rd = Windown_1.Windown.RandomNumber(0, 100);
            rd < 45 ? list.push(0) : rd < 90 ? list.push(2) : list.push(1);
          }
          this.listHistory = list;
        }
        this.emitNewHistoryXDV();
      };
      NewClass.prototype.showDoiDiem = function(isShow) {
        this.nodeDoiDiem.active = isShow;
      };
      NewClass.prototype.setColor = function(type) {
        var color = this.getColor(type);
        this.getListChildren().forEach(function(v) {
          v.color = color;
        });
      };
      NewClass.prototype.getColor = function(type) {
        var color = null;
        color = 0 == type ? cc.Color.RED : 2 == type ? cc.Color.GREEN : cc.Color.ORANGE;
        return color;
      };
      NewClass.prototype.initHandleUpdate = function(fund) {
        this.handleUpdate = fund;
      };
      NewClass.prototype.getLightMid = function(id) {
        return this.parentLightMid.children[id].children[0];
      };
      NewClass.prototype.getListLightMid = function() {
        var listResult = [];
        this.parentLightMid.children.forEach(function(v) {
          listResult.push(v.children[0]);
        });
        return listResult;
      };
      NewClass.prototype.getChildById = function(id) {
        return this.parentItem.children[id].children[0];
      };
      NewClass.prototype.getChildXDVById = function(id) {
        return this.parentXDV.children[id];
      };
      NewClass.prototype.getChildXoSoById = function(id) {
        return this.parentXoSo.children[id].children[0];
      };
      NewClass.prototype.getListLastResult = function() {
        var listReturn = [];
        var children = this.parentItem.children;
        for (var temp in children) this.listIdResult.includes(Number(temp)) && listReturn.push(children[temp].children[0]);
        return listReturn;
      };
      NewClass.prototype.getIdListLastResutl = function() {
        return this.listIdResult;
      };
      NewClass.prototype.getIdXDVListLastResutl = function() {
        return this.listIdXDVResult;
      };
      NewClass.prototype.getNodeJp = function() {
        return this.jpNode;
      };
      NewClass.prototype.getListChildren = function() {
        var listReturn = [];
        var children = this.parentItem.children;
        children.forEach(function(v) {
          listReturn.push(v.children[0]);
        });
        return listReturn;
      };
      NewClass.prototype.getListChildXDV = function() {
        var listReturn = [];
        var children = this.parentXDV.children;
        children.forEach(function(v) {
          listReturn.push(v);
        });
        return listReturn;
      };
      NewClass.prototype.getListChildXoSo = function() {
        var listReturn = [];
        var children = this.parentXoSo.children;
        children.forEach(function(v) {
          listReturn.push(v.children[0]);
        });
        return listReturn;
      };
      NewClass.prototype.setStringLbHeSo = function(num) {
        var str = num.toString();
        str.length < 2 && (str = "0" + str);
        this.lbHeso.string = str;
      };
      NewClass.prototype.randomLbHeSoOGiua = function() {
        this.listLbHesoOGiua.forEach(function(v) {
          var rd = Windown_1.Windown.RandomNumber(1, 100);
          var str = rd.toString();
          str.length < 1 && (str = "0" + str);
          v.string = str;
        });
      };
      NewClass.prototype.randomLbHeSo = function() {
        var rd = Windown_1.Windown.RandomNumber(1, 100);
        this.setStringLbHeSo(rd);
      };
      NewClass.prototype.runEffectRandomLabelHesoMiniGame = function() {
        var _this = this;
        this.unschedule(this.funRDHeSo);
        this.schedule(this.funRDHeSo = function() {
          var rd = Windown_1.Windown.RandomNumber(1, 14);
          _this.setStringLbHeSo(rd);
        }, .02);
      };
      NewClass.prototype.runEffectRandomLabelHesoSpecial = function() {
        var _this = this;
        var number = 11;
        this.unschedule(this.funRDHeSo);
        this.schedule(this.funRDHeSo = function() {
          _this.setStringLbHeSo(number);
          number += 11;
          number > 99 && (number = 11);
        }, .07);
      };
      NewClass.prototype.runEffectRandomLabelHeso = function(min, max) {
        var _this = this;
        this.unschedule(this.funRDHeSo);
        this.schedule(this.funRDHeSo = function() {
          var rd = Windown_1.Windown.RandomNumber(min, max);
          _this.setStringLbHeSo(rd);
        }, .04);
      };
      NewClass.prototype.offEffectRandomLabelHeso = function(number) {
        this.unschedule(this.funRDHeSo);
        this.setStringLbHeSo(number);
      };
      NewClass.prototype.offEffectLabelHeso = function() {
        this.unschedule(this.funRDHeSo);
      };
      NewClass.prototype.putIdResult = function(id) {
        this.listIdResult.push(id);
      };
      NewClass.prototype.activeIcon = function(node) {
        node.stopAllActions();
        node.opacity = 255;
      };
      NewClass.prototype.putIdXDVResult = function(id) {
        this.listIdXDVResult.push(id);
      };
      NewClass.prototype.resetIdResult = function() {
        this.listIdResult.length = 0;
      };
      NewClass.prototype.resetIdXDVResult = function() {
        this.listIdXDVResult.length = 0;
      };
      NewClass.prototype.onClickBack = function() {
        ConectManager_1.ConectManager.getIns().sendLeaveRoom(Windown_1.Windown.XengController.roomSFS);
        Windown_1.Windown.UIManager.showLoading(30);
      };
      NewClass.prototype.onClickSeting = function() {};
      NewClass.prototype.onClickTest = function() {
        Windown_1.Windown.UIManager.showHomThu();
      };
      NewClass.prototype.sendMutilXeng = function(event, data) {
        var mutil = Number(data);
        Windown_1.Windown.XengController.mutil = mutil;
        Windown_1.Windown.XengController.btnChangePointR.reset();
        Windown_1.Windown.XengController.showDoiDiem(false);
        Windown_1.Windown.XengController.getSoundMng().playNhacCho();
        Windown_1.Windown.XengController.setGold(Windown_1.Windown.User.userAg);
      };
      NewClass.prototype.sendConfigBetToNho = function(event, data) {
        var num = parseInt(data);
        if (null == num) return;
        var objSFS = ConectManager_1.ConectManager.getIns().getSFSObj();
        objSFS.putInt("dataToNho", num);
        Windown_1.Windown.XengController.sendToServer("setConfig", objSFS);
      };
      NewClass.prototype.sendConfigAnTruoc = function(event, data) {
        var num = parseInt(data);
        if (null == num) return;
        var objSFS = ConectManager_1.ConectManager.getIns().getSFSObj();
        objSFS.putInt("dataAnTruoc", num);
        Windown_1.Windown.XengController.sendToServer("setConfig", objSFS);
      };
      NewClass.prototype.sendConfigXDV = function(event, data) {
        var num = parseInt(data);
        if (null == num) return;
        var objSFS = ConectManager_1.ConectManager.getIns().getSFSObj();
        objSFS.putInt("dataXDV", num);
        Windown_1.Windown.XengController.sendToServer("setConfig", objSFS);
      };
      NewClass.prototype.addNewHistory = function(type) {
        this.listHistory.unshift(type);
        this.listHistory.pop();
        this.emitNewHistoryXDV();
      };
      NewClass.prototype.emitNewHistoryXDV = function() {
        var _this = this;
        var strStorage = JSON.stringify(this.listHistory);
        Windown_1.Windown.setLocalStorage("historyXDV", strStorage);
        var count = 0;
        var listNode = this.parentHistory.children;
        this.listHistory.forEach(function(v) {
          listNode[count].children[0].color = _this.getColor(v);
          count++;
        });
      };
      NewClass.prototype.sendConfigBetCua = function(event, data) {
        cc.log("click set config bet cua");
        var num = parseInt(data);
        if (null == num) return;
        var objSFS = ConectManager_1.ConectManager.getIns().getSFSObj();
        objSFS.putInt("dataBetCua", num);
        Windown_1.Windown.XengController.sendToServer("setConfig", objSFS);
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.UIManager.changeRotation();
        Windown_1.Windown.XengController && Windown_1.Windown.XengController.onDestroy();
      };
      NewClass.prototype.update = function(dt) {
        this.funUpdate && this.funUpdate(dt);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeGame", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbHeso", void 0);
      __decorate([ property([ cc.Label ]) ], NewClass.prototype, "listLbHesoOGiua", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentHistory", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentXDV", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentXoSo", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentLightMid", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "jpNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeDoiDiem", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Windown": void 0,
    "./Button/BaseButton": "BaseButton"
  } ]
}, {}, [ "BaseButton", "BtnAll+1", "BtnBetItem", "BtnBetXDV", "BtnChangePointLeft", "BtnChangePointRight", "BtnClick", "BtnGo", "BaseEffect", "BaseEffectAnTruoc", "BaseEffectEnd", "BaseEffectXDVEnd", "Effect1CuaTo20", "EffectAnJP", "EffectAnLuon1Cua", "EffectBassNho", "EffectDapChuot", "EffectDoiMau", "EffectEndGame", "EffectEndNormal", "EffectRan8Dot", "EffectRunSpin", "EffectSpecial14", "EffectSpecial2", "EffectSpecial3", "EffectSpecial4", "EffectSpecial5", "EffectSpecial6", "EffectSpecial7", "EffectSpineSoXo", "EffectTraDiem", "EffectVe3CuaXDV", "EffectVeBar", "EffectVeVang", "EffectX8ChuyenMau", "IDataFinish", "X10_30_1Cua", "X3_1Cua", "IServerResponse", "ResponseBetToNho", "ResponseLeaveRoom", "ResponseMakeBet", "ResponseSetMutil", "SoundXeng", "BaseState", "StateFinished", "StateFinishedMini", "StateGame", "StatePlaying", "StatePlayingMini", "StateWating", "StateWatingPlayGame", "StateWatingPlayGameMini", "Test", "XengController", "XengModel", "XengView" ]);