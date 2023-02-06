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
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29483itIxdEG7fkS4/bZacr", "AudioManager");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AudioManager = function(_super) {
      __extends(AudioManager, _super);
      function AudioManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.idTiengNo = -1;
        _this.audios = [];
        _this.backgroundMusicAudio = null;
        _this._isActiveSound = true;
        _this.mapAudioId = new Map();
        _this._isActiveMusic = true;
        return _this;
      }
      Object.defineProperty(AudioManager.prototype, "isActiveSound", {
        get: function() {
          return this._isActiveSound;
        },
        set: function(value) {
          if (value != this._isActiveSound) {
            this._isActiveSound = value;
            if (value) Windown_1.Windown.setLocalStorage("sound", "on"); else {
              Windown_1.Windown.setLocalStorage("sound", "off");
              this.stopSound();
            }
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AudioManager.prototype, "isActiveMusic", {
        get: function() {
          return this._isActiveMusic;
        },
        set: function(value) {
          if (value != this._isActiveMusic) {
            this._isActiveMusic = value;
            if (value) {
              Windown_1.Windown.setLocalStorage("music", "on");
              this.playMusic();
            } else {
              Windown_1.Windown.setLocalStorage("music", "off");
              this.stopMusic();
            }
          }
        },
        enumerable: false,
        configurable: true
      });
      AudioManager.prototype.onLoad = function() {
        var isActiveSound = Windown_1.Windown.getLocalStorage("sound");
        var isActiveMusic = Windown_1.Windown.getLocalStorage("music");
        null != isActiveSound && "" != isActiveSound || Windown_1.Windown.setLocalStorage("sound", "on");
        null != isActiveMusic && "" != isActiveMusic || Windown_1.Windown.setLocalStorage("music", "on");
        if (Windown_1.Windown.BotController) {
          Windown_1.Windown.setLocalStorage("sound", "off");
          Windown_1.Windown.setLocalStorage("music", "off");
        }
        Windown_1.Windown.AudioManager = this;
      };
      AudioManager.prototype.onEnable = function() {
        console.log("chay vao enable audio");
        var isActiveSound = Windown_1.Windown.getLocalStorage("sound");
        var isActiveMusic = Windown_1.Windown.getLocalStorage("music");
        this.isActiveSound = "off" != isActiveSound;
        this.isActiveMusic = "off" != isActiveMusic;
        this.isActiveMusic && this.playMusic();
      };
      AudioManager.prototype.playMusic = function() {
        cc.log("play audio");
        if (Windown_1.Windown.BotController) return;
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.7);
        }
      };
      AudioManager.prototype.stopMusic = function() {
        this.backgroundMusicAudio && cc.audioEngine.stopMusic();
      };
      AudioManager.prototype.onDestroy = function() {
        this.stopSound();
        this.stopMusic();
        Windown_1.Windown.AudioManager = null;
      };
      AudioManager.prototype.stopSound = function() {
        cc.audioEngine.stopAllEffects();
      };
      AudioManager.prototype.playEffect = function(audioclip, volum, isLoop) {
        void 0 === volum && (volum = 1);
        void 0 === isLoop && (isLoop = false);
        if (Windown_1.Windown.BotController) return -1;
        if (!this.isActiveSound) return -1;
        var obj = this.getObjSound(audioclip.name);
        if (!obj.canStop) return;
        obj && obj.audioId && cc.audioEngine.stopEffect(obj.audioId);
        var audioId = cc.audioEngine.playEffect(audioclip, isLoop);
        cc.audioEngine.setVolume(audioId, volum);
        obj.audioId = audioId;
        obj.canStop = false;
        obj.timeOutId = setTimeout(function() {
          obj.canStop = true;
        }, 75);
        return audioId;
      };
      AudioManager.prototype.playEffectNoStop = function(audioclip, volum, isLoop) {
        void 0 === volum && (volum = 1);
        void 0 === isLoop && (isLoop = false);
        if (Windown_1.Windown.BotController) return -1;
        if (!this.isActiveSound) return -1;
        var audioId = cc.audioEngine.playEffect(audioclip, isLoop);
        cc.audioEngine.setVolume(audioId, volum);
        if (isLoop) {
          var obj = this.getObjSound(audioclip.name);
          obj.audioId = audioId;
          obj.canStop = false;
        }
        return audioId;
      };
      AudioManager.prototype.playEffectSync = function(audioclip, volum, timeCall) {
        void 0 === volum && (volum = 1);
        Windown_1.Windown.BotController && (volum = 0);
        this.isActiveSound || (volum = 0);
        return new Promise(function(resolve, reject) {
          var audioId = cc.audioEngine.playEffect(audioclip, false);
          cc.audioEngine.setVolume(audioId, volum);
          cc.audioEngine.setFinishCallback(audioId, resolve);
          timeCall && setTimeout(reject, 1e3 * timeCall);
        });
      };
      AudioManager.prototype.playTiengNo = function() {};
      AudioManager.prototype.getObjSound = function(nameClip) {
        var obj = this.mapAudioId.get(nameClip);
        if (void 0 == obj) {
          obj = Object.create(null);
          obj.name = nameClip;
          obj.timeOutId = -1;
          obj.canStop = true;
          this.mapAudioId.set(nameClip, obj);
        }
        return obj;
      };
      AudioManager.prototype.stopEffect = function(audioclip, isEffect) {
        void 0 === isEffect && (isEffect = false);
        if (void 0 == audioclip || null == audioclip) return;
        var obj = this.mapAudioId.get(audioclip.name);
        if (void 0 != obj && null != obj.audioId) if (isEffect) {
          var objAction = Object.create(null);
          objAction.volum = cc.audioEngine.getVolume(obj.audioId);
          cc.tween(objAction).to(.3, {
            volum: {
              value: 0,
              progress: function(start, end, current, ratio) {
                var _current = start + (end - start) * ratio;
                cc.audioEngine.setVolume(obj.audioId, _current);
                0 == _current && cc.audioEngine.stopEffect(obj.audioId);
                return _current;
              }
            }
          }).start();
        } else cc.audioEngine.stopEffect(obj.audioId);
      };
      AudioManager.prototype.reset = function() {
        this.mapAudioId.forEach(function(v, k) {
          v && v.audioId && cc.audioEngine.stopEffect(v.audioId);
        });
      };
      __decorate([ property([ cc.AudioClip ]) ], AudioManager.prototype, "audios", void 0);
      __decorate([ property(cc.AudioClip) ], AudioManager.prototype, "backgroundMusicAudio", void 0);
      __decorate([ property ], AudioManager.prototype, "isActiveMusic", null);
      AudioManager = __decorate([ ccclass ], AudioManager);
      return AudioManager;
    }(cc.Component);
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  BUNDLE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7135e6e261DmLFizmcpIXsb", "BUNDLE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BUNDLE = void 0;
    var BUNDLE;
    (function(BUNDLE) {
      BUNDLE["Main"] = "main";
      BUNDLE["FishCaMap"] = "31";
      BUNDLE["Neko"] = "37";
    })(BUNDLE = exports.BUNDLE || (exports.BUNDLE = {}));
    cc._RF.pop();
  }, {} ],
  BaseCuaHang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1c2e4WOBBMtbLXsYzYV0JY", "BaseCuaHang");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseCuaHang = function(_super) {
      __extends(BaseCuaHang, _super);
      function BaseCuaHang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSFItem = [];
        _this.listSFItemSpecial = [];
        _this.spAuto = null;
        _this.spGunSet = null;
        _this.nodeInfo = null;
        _this.parentItem = null;
        _this.isInit = false;
        return _this;
      }
      BaseCuaHang.prototype.getSFByType = function(type) {
        if (type < 5) return this.listSFItem[type - 1];
        if (1e3 == type) return this.spGunSet;
        if (1001 == type) return this.spAuto;
        return this.listSFItemSpecial[type - 100];
      };
      BaseCuaHang.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "listSFItem", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "listSFItemSpecial", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "spAuto", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "spGunSet", void 0);
      __decorate([ property(cc.Node) ], BaseCuaHang.prototype, "nodeInfo", void 0);
      __decorate([ property(cc.Node) ], BaseCuaHang.prototype, "parentItem", void 0);
      BaseCuaHang = __decorate([ ccclass ], BaseCuaHang);
      return BaseCuaHang;
    }(cc.Component);
    exports.default = BaseCuaHang;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  BaseEditbox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24409kKZQlHAY7HY5EIIe/x", "BaseEditbox");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseEditbox = function(_super) {
      __extends(BaseEditbox, _super);
      function BaseEditbox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMove = null;
        return _this;
      }
      BaseEditbox.prototype.initNodeMove = function(node) {
        if (!cc.sys.isNative) return;
        this.nodeMove = node;
      };
      BaseEditbox.prototype.resignEdb = function(edb) {
        if (!cc.sys.isNative || null == edb) return;
        var eventBegan = new cc.Component.EventHandler();
        eventBegan.target = this.node;
        eventBegan.component = "BaseEditbox";
        eventBegan.handler = "editBegan";
        eventBegan.customEventData = "";
        edb.editingDidBegan.push(eventBegan);
        var eventEnd = new cc.Component.EventHandler();
        eventEnd.target = this.node;
        eventEnd.component = "BaseEditbox";
        eventEnd.handler = "editEnd";
        eventEnd.customEventData = "";
        edb.editingDidEnded.push(eventEnd);
      };
      BaseEditbox.prototype.resignNext = function(edb, edbNext) {
        void 0 === edbNext && (edbNext = "");
        if (!cc.sys.isNative || null == edb) return;
        var eventNext = new cc.Component.EventHandler();
        eventNext.target = this.node;
        eventNext.component = "BaseEditbox";
        eventNext.handler = "editNext";
        eventNext.customEventData = edbNext;
        edb.editingReturn.push(eventNext);
        edb.returnType = 5;
      };
      BaseEditbox.prototype.resetEmitNext = function(edb) {
        if (!cc.sys.isNative || null == edb) return;
        edb.editingReturn.length = 0;
      };
      BaseEditbox.prototype.editBegan = function(event, data) {
        Windown_1.Windown.EDBController.checkAndChangePositionEDB(event, this.nodeMove || this.node);
      };
      BaseEditbox.prototype.editEnd = function() {
        Windown_1.Windown.EDBController.endNodeEDB();
      };
      BaseEditbox.prototype.editNext = function(event, data) {
        var _this = this;
        if (!cc.sys.isNative) return;
        this.scheduleOnce(function() {
          var edbNext = _this[data];
          edbNext && edbNext.focus();
        }, .4);
      };
      BaseEditbox = __decorate([ ccclass ], BaseEditbox);
      return BaseEditbox;
    }(cc.Component);
    exports.default = BaseEditbox;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  BaseItemQuick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "435459VK31KTYZ9yb1w2C5Q", "BaseItemQuick");
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
    var BaseItemQuick = function(_super) {
      __extends(BaseItemQuick, _super);
      function BaseItemQuick() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = -1;
        return _this;
      }
      __decorate([ property(cc.Integer) ], BaseItemQuick.prototype, "type", void 0);
      BaseItemQuick = __decorate([ ccclass ], BaseItemQuick);
      return BaseItemQuick;
    }(cc.Component);
    exports.default = BaseItemQuick;
    cc._RF.pop();
  }, {} ],
  BaseScrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65d20PGXAxEpZqR+kJ25zRs", "BaseScrollView");
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
    var TemplateType = cc.Enum({
      NODE: 1,
      PREFAB: 2
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.templateType = TemplateType.PREFAB;
        _this.itemTemplateNode = null;
        _this.itemTemplate = null;
        _this.nameComponentItem = "";
        _this.funtionSetInfo = "initItem";
        _this.scrollView = null;
        _this.spawnCount = 5;
        _this.spacing = 0;
        _this.isViewBottomFirt = false;
        _this.items = [];
        _this._listInfo = [];
        _this.content = null;
        _this._sumHeight = 0;
        _this._isStateWatting = false;
        _this._init = false;
        _this.updateTimer = 0;
        _this.updateInterval = .05;
        _this.lastContentPosY = 0;
        _this.bufferZone = 0;
        _this.itemPool = null;
        _this.firtHeight = 0;
        _this.totalCount = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this._init = true;
        this.scrollView = this.getComponent(cc.ScrollView);
        this.content = this.scrollView.content;
        this.items = [];
        this.updateTimer = 0;
        this.updateInterval = .05;
        this.lastContentPosY = 0;
        this._sumHeight = 0;
        this.bufferZone = 0;
        this.itemPool = new cc.NodePool();
        this.itemTemplate = this.templateType == TemplateType.PREFAB ? this.itemTemplate : this.itemTemplateNode;
      };
      NewClass.prototype.getItemPool = function() {
        if (this.itemPool.size() > 0) return this.itemPool.get();
        var node = cc.instantiate(this.itemTemplate);
        node.active = true;
        return node;
      };
      NewClass.prototype.resetScr = function() {
        if (!this._init) return;
        var length = this.content.childrenCount;
        var childs = this.content.children;
        for (var i = 0; i < length; i++) this.itemPool.put(childs[0]);
        this.items.length = 0;
        this._listInfo = [];
      };
      NewClass.prototype.init = function(list, sumHeightToTal, _firtHeight) {
        void 0 === sumHeightToTal && (sumHeightToTal = null);
        void 0 === _firtHeight && (_firtHeight = null);
        _firtHeight = this.getItemPool().height;
        sumHeightToTal = list.length * _firtHeight;
        this.items.length = 0;
        var length = list.length;
        this._listInfo = list;
        var firtHeight = 0;
        length > 0 && (firtHeight = this._listInfo[0].height || _firtHeight);
        this.firtHeight = firtHeight;
        var spawn = this.spawnCount;
        spawn = spawn < length ? spawn : length;
        this.bufferZone = this.scrollView.node.height / 2 + firtHeight;
        this.totalCount = length;
        this._sumHeight = 0;
        var contentHeight = this.totalCount * this.spacing - this.spacing + sumHeightToTal;
        this.content.height = contentHeight;
        var content = this.content;
        if (this.isViewBottomFirt) {
          this._isStateWatting = false;
          var offsetPositin = contentHeight - this.scrollView.node.height / 2;
          offsetPositin > 0 && (content.y = offsetPositin);
          var start = length - spawn;
          start < 0 && (start = 0);
          var lastNodeHeight = null;
          var lastNodeY = null;
          for (var i = length - 1; i >= start; i--) {
            var data = this._listInfo[i];
            var item = this.getItemPool();
            content.insertChild(item, 0);
            var itemCp = item.getComponent(this.nameComponentItem);
            itemCp.itemID = i;
            itemCp[this.funtionSetInfo](data);
            this.items.push(item);
            i == length - 1 ? item.setPosition(0, item.height / 2 - contentHeight) : item.setPosition(0, lastNodeY + lastNodeHeight / 2 + item.height / 2 + this.spacing);
            lastNodeHeight = item.height;
            lastNodeY = item.y;
            this._sumHeight += item.height + this.spacing;
          }
        } else {
          this._isStateWatting = true;
          var lastNodeHeight = null;
          var lastNodeY = null;
          content.y = this.scrollView.node.height / 2;
          for (var i = 0; i < spawn; ++i) {
            var data = this._listInfo[i];
            var item = this.getItemPool();
            content.addChild(item);
            var itemCp = item.getComponent(this.nameComponentItem);
            itemCp.itemID = i;
            itemCp[this.funtionSetInfo](data);
            this.items.push(item);
            0 == i ? item.setPosition(0, -item.height / 2) : item.setPosition(0, lastNodeY - lastNodeHeight / 2 - item.height / 2 - this.spacing);
            lastNodeHeight = item.height;
            lastNodeY = item.y;
            this._sumHeight += item.height + this.spacing;
          }
        }
      };
      NewClass.prototype.getPositionInView = function(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      };
      NewClass.prototype.update = function(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = this.content.y < this.lastContentPosY;
        var offset = this._sumHeight;
        var contentHeight = this.content.height;
        this.content.y >= contentHeight - this.scrollView.node.height / 2 - 10 ? this._isStateWatting = false : this._isStateWatting = true;
        for (var i = 0; i < items.length; ++i) {
          var viewPos = this.getPositionInView(items[i]);
          if (isDown) {
            if (viewPos.y < -buffer && items[i].y + offset < 0) {
              var firtItem = this.content.children[0];
              var id = firtItem.getComponent(this.nameComponentItem).itemID;
              if (id > 0) {
                items[i].setSiblingIndex(0);
                this._sumHeight -= items[i].height;
                var item = items[i].getComponent(this.nameComponentItem);
                var itemId = id - 1;
                item.itemID = itemId;
                item[this.funtionSetInfo](this._listInfo[itemId]);
                items[i].y = firtItem.y + firtItem.height / 2 + items[i].height / 2 + this.spacing;
                this._sumHeight += items[i].height;
              }
            }
          } else if (viewPos.y > buffer && items[i].y - offset > -contentHeight) {
            var lastNode = this.content.children[this.content.childrenCount - 1];
            var id = lastNode.getComponent(this.nameComponentItem).itemID;
            if (id < this.totalCount - 1) {
              items[i].setSiblingIndex(this.content.childrenCount - 1);
              this._sumHeight -= items[i].height;
              var item = items[i].getComponent(this.nameComponentItem);
              var itemId = id + 1;
              item.itemID = itemId;
              item[this.funtionSetInfo](this._listInfo[itemId]);
              items[i].y = lastNode.y - lastNode.height / 2 - items[i].height / 2 - this.spacing;
              this._sumHeight += items[i].height;
            }
          }
        }
        this.lastContentPosY = this.scrollView.content.y;
      };
      NewClass.prototype.addItem = function(info) {
        var add = 0;
        add = null != info.height ? info.height : this.firtHeight;
        this._listInfo.push(info);
        this.content.height += add + this.spacing;
        this.totalCount += 1;
        if (!this._isStateWatting) {
          var nodeSet = null;
          var lastNode = this.content.children[this.content.childrenCount - 1];
          if (this.content.childrenCount < this.spawnCount) {
            nodeSet = this.getItemPool();
            this.content.addChild(nodeSet);
          } else nodeSet = this.content.children[0];
          if (null == lastNode) {
            var id = 0;
            nodeSet.setSiblingIndex(this.content.childrenCount - 1);
            this._sumHeight -= nodeSet.height;
            var item = nodeSet.getComponent(this.nameComponentItem);
            var itemId = id + 1;
            item.itemID = itemId;
            item[this.funtionSetInfo](info);
            nodeSet.y = -nodeSet.height / 2;
            this._sumHeight += nodeSet.height;
          } else {
            var id = lastNode.getComponent(this.nameComponentItem).itemID;
            nodeSet.setSiblingIndex(this.content.childrenCount - 1);
            this._sumHeight -= nodeSet.height;
            var item = nodeSet.getComponent(this.nameComponentItem);
            var itemId = id + 1;
            item.itemID = itemId;
            item[this.funtionSetInfo](info);
            nodeSet.y = lastNode.y - lastNode.height / 2 - nodeSet.height / 2 - this.spacing;
            this._sumHeight += nodeSet.height;
          }
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToBottom(.2);
        }
      };
      NewClass.prototype.updateAllItemInView = function() {
        var list = this.getListItemCpInView();
        for (var i = 0, l = list.length; i < l; i++) {
          var item = list[i];
          var info = this._listInfo[item.itemID];
          item[this.funtionSetInfo](info);
        }
      };
      NewClass.prototype.getListItemCpInView = function() {
        return this.content.getComponentsInChildren(this.nameComponentItem);
      };
      NewClass.prototype.addListItem = function(listItem, heights) {
        var length = listItem.length;
        this.content.height += this.spacing * length + heights;
        this.totalCount += length;
        this._listInfo = this._listInfo.concat(listItem);
      };
      NewClass.prototype.getItemAtBottom = function() {
        var item = this.items[0];
        for (var i = 1; i < this.items.length; ++i) item.y > this.items[i].y && (item = this.items[i]);
        return item;
      };
      NewClass.prototype.scrollToFixedPosition = function() {
        this.scrollView.scrollToOffset(cc.v2(0, 500), 2);
      };
      NewClass.prototype.onDestroy = function() {
        this.itemPool.clear();
      };
      __decorate([ property({
        type: TemplateType
      }) ], NewClass.prototype, "templateType", void 0);
      __decorate([ property({
        type: cc.Node,
        visible: function() {
          var bool = this.templateType == TemplateType.NODE;
          bool || (this.tmpNode = null);
          return bool;
        }
      }) ], NewClass.prototype, "itemTemplateNode", void 0);
      __decorate([ property({
        type: cc.Prefab,
        visible: function() {
          var bool = this.templateType == TemplateType.PREFAB;
          bool || (this.tmpPrefab = null);
          return bool;
        }
      }) ], NewClass.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.String) ], NewClass.prototype, "nameComponentItem", void 0);
      __decorate([ property(cc.String) ], NewClass.prototype, "funtionSetInfo", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "spawnCount", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "spacing", void 0);
      __decorate([ property(cc.Boolean) ], NewClass.prototype, "isViewBottomFirt", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  BaseStateNap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "595c9YW76ZFF5wbRn2zC1ak", "BaseStateNap");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseStateNap = function() {
      function BaseStateNap(_napView) {
        this.napView = null;
        this.napView = _napView;
      }
      return BaseStateNap;
    }();
    exports.default = BaseStateNap;
    cc._RF.pop();
  }, {} ],
  BigWinLobbyView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d17cAOQTFAIKFnPBX225tx", "BigWinLobbyView");
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
    var Windown_1 = require("../../Windown");
    var ItemBigWin_1 = require("./ItemBigWin");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BigWinLobbyView = function(_super) {
      __extends(BigWinLobbyView, _super);
      function BigWinLobbyView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.isRunAction = false;
        _this.pool = new cc.NodePool();
        return _this;
      }
      BigWinLobbyView.prototype.start = function() {
        Windown_1.Windown.BigWinLobby.bigWinView = this;
        this.scheduleOnce(this.updateView, .5);
      };
      BigWinLobbyView.prototype.onDestroy = function() {
        this.pool.clear();
        Windown_1.Windown.BigWinLobby.bigWinView = null;
      };
      BigWinLobbyView.prototype.getItem = function() {
        var node = null;
        node = this.pool.size() < 1 ? cc.instantiate(this.parentItem.children[0]) : this.pool.get();
        return node;
      };
      BigWinLobbyView.prototype.updateView = function() {
        var _this = this;
        while (this.parentItem.childrenCount > 0) this.pool.put(this.parentItem.children[0]);
        this.isRunAction = true;
        var listData = Windown_1.Windown.BigWinLobby.listBigWin;
        for (var i = 0, l = listData.length; i < l; i++) {
          var node = this.getItem();
          node.active = true;
          node.parent = this.parentItem;
          node.zIndex = 0;
          node.setPosition(0, (l - i - .5) * node.height);
          node.stopAllActions();
          node.runAction(cc.moveTo(.3, cc.v2(0, (-i - .5) * node.height)));
          node.getComponent(ItemBigWin_1.default).initItem(listData[i]);
        }
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function() {
          _this.isRunAction = false;
        }, .5);
      };
      BigWinLobbyView.prototype.addBigWin = function() {
        var _this = this;
        for (var i = 5; i < this.parentItem.childrenCount; i++) {
          this.pool.put(this.parentItem.children[5]);
          i--;
        }
        var list = Windown_1.Windown.BigWinLobby.getListCache();
        if (list.length < 1) return;
        var countZindex = list.length;
        for (var i = 0, l = this.parentItem.childrenCount; i < l; i++) {
          var v = this.parentItem.children[i];
          v.zIndex = i + countZindex;
        }
        this.isRunAction = true;
        for (var i = 0, l = countZindex; i < l; i++) {
          var node = this.getItem();
          node.parent = this.parentItem;
          node.zIndex = i;
          node.setPosition(0, (l - i - .5) * node.height + 50);
          node.getComponent(ItemBigWin_1.default).initItem(Windown_1.Windown.BigWinLobby.listBigWin[0]);
        }
        this.parentItem.sortAllChildren();
        var _loop_1 = function(i, l) {
          var node = this_1.parentItem.children[i];
          node.stopAllActions();
          node.runAction(cc.sequence(cc.delayTime(i < countZindex ? .2 : 0), cc.moveTo(.2, cc.v2(0, (-i - .5) * node.height)), cc.callFunc(function() {
            if (0 == i) {
              _this.isRunAction = false;
              _this.addBigWin();
            }
          })));
        };
        var this_1 = this;
        for (var i = 0, l = this.parentItem.childrenCount; i < l; i++) _loop_1(i, l);
      };
      __decorate([ property(cc.Node) ], BigWinLobbyView.prototype, "parentItem", void 0);
      BigWinLobbyView = __decorate([ ccclass ], BigWinLobbyView);
      return BigWinLobbyView;
    }(cc.Component);
    exports.default = BigWinLobbyView;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "./ItemBigWin": "ItemBigWin"
  } ],
  BigWinLobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ca8cJ2tvNAjLCVtIIt9vHd", "BigWinLobby");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BigWinLobby = function() {
      function BigWinLobby() {
        this.listBigWin = [];
        this.listCacheRunAction = [];
        this.bigWinView = null;
        this.notiFish = null;
        this.isInit = false;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onConnect, this.onConnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetListBigWin, this.responseGetListBigWin, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, this.responseAddBigWin, this);
      }
      BigWinLobby.prototype.onConnect = function() {
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetListBigWin, null);
      };
      BigWinLobby.prototype.onDisconnect = function() {
        this.isInit = false;
      };
      BigWinLobby.prototype.sendAddBigWinToServer = function(SFSObject) {
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, SFSObject);
      };
      BigWinLobby.prototype.responseGetListBigWin = function(SFSObject) {
        cc.log("nhay vao resquest big win ne");
        this.isInit = true;
        this.listBigWin = [];
        var SFSArray = SFSObject.getSFSArray("data");
        for (var i = 0; i < SFSArray.size(); i++) this.listBigWin.unshift(SFSArray.getSFSObject(i));
        this.listBigWin = this.listBigWin.slice(0, 5);
        this.bigWinView && this.bigWinView.updateView();
      };
      BigWinLobby.prototype.responseAddBigWin = function(SFSObject) {
        if (!this.isInit) return;
        this.listBigWin.unshift(SFSObject);
        this.listBigWin.length > 5 && this.listBigWin.pop();
        if (this.bigWinView) {
          this.listCacheRunAction.push(SFSObject);
          this.bigWinView.isRunAction || this.bigWinView.addBigWin();
        }
        this.notiFish && this.notiFish.addNotiShow(SFSObject);
      };
      BigWinLobby.prototype.getListCache = function() {
        return this.listCacheRunAction.splice(0, this.listCacheRunAction.length);
      };
      return BigWinLobby;
    }();
    exports.default = BigWinLobby;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager"
  } ],
  BonusNap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a24eKo1A9OsZ7SPdIKPnLU", "BonusNap");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BonusNap = function(_super) {
      __extends(BonusNap, _super);
      function BonusNap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSp = [];
        _this.spMain = null;
        _this.btnLeft = null;
        _this.btnRight = null;
        _this.listData = null;
        _this.currentIndex = 0;
        _this.currentIdNap = 0;
        _this.currentValue = 0;
        _this.idNeedNap = null;
        _this.isShowNextFun = false;
        return _this;
      }
      BonusNap.prototype.onLoad = function() {
        Windown_1.Windown.BonusNap = this;
      };
      BonusNap.prototype.onDestroy = function() {
        Windown_1.Windown.BonusNap = null;
      };
      BonusNap.prototype.onDisable = function() {
        cc.systemEvent.targetOff(this);
      };
      BonusNap.prototype.onEnable = function() {
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetConfigShopVip, this.responseServer, this);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetConfigShopVip, null);
        Windown_1.Windown.UIManager.showLoading();
      };
      BonusNap.prototype.responseServer = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        this.listData = SFSObject.getSFSArray("ListConfig");
        if (this.listData.size() < 1) {
          this.onClickClose();
          return;
        }
        this.initData();
      };
      BonusNap.prototype.initData = function() {
        if (this.idNeedNap) {
          this.currentIndex = 0;
          for (var i = 0, l = this.listData.size(); i < l; i++) {
            if (this.listData.getSFSObject(i).getInt("id") == this.idNeedNap) break;
            this.currentIndex++;
          }
        }
        this.currentIndex >= this.listData.size() && (this.currentIndex = 0);
        var sfs = this.listData.getSFSObject(this.currentIndex);
        if (sfs) {
          this.currentIdNap = sfs.getInt("id");
          this.spMain.spriteFrame = this.listSp[this.currentIdNap - 1];
          this.currentValue = sfs.getInt("price");
          this.idNeedNap = null;
          this.setStateButton();
        }
      };
      BonusNap.prototype.setStateButton = function() {
        if (this.listData.size() < 3) {
          this.btnLeft.active = false;
          this.btnRight.active = false;
          return;
        }
        this.btnLeft.active = true;
        this.btnRight.active = true;
        this.currentIndex < 1 ? this.btnLeft.active = false : this.currentIndex == this.listData.size() - 1 && (this.btnRight.active = false);
      };
      BonusNap.prototype.onClickBtn = function(event, data) {
        if (null == this.listData) return;
        "0" == data ? this.currentIndex-- : this.currentIndex++;
        this.initData();
      };
      BonusNap.prototype.onPageEvent = function(event, data) {
        cc.log(event);
      };
      BonusNap.prototype.show = function(fun, idNap) {
        this.isShowNextFun = fun;
        Windown_1.Windown.actionEffectOpen(this.node);
        this.idNeedNap = idNap;
        null == idNap && (this.currentIndex = 0);
      };
      BonusNap.prototype.onClickNap = function() {
        if (this.currentIdNap < 1) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
          return;
        }
        Windown_1.Windown.UIManager.showQuickShop(this.currentIdNap, this.currentValue);
        this.node.parent = null;
        this.idNeedNap = null;
      };
      BonusNap.prototype.onClickClose = function() {
        var _this = this;
        this.idNeedNap = null;
        this.listData = ConectManager_1.ConectManager.getIns().getSFSArray();
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
          _this.isShowNextFun && Windown_1.Windown.UIManager.showFunFirtLogin();
        });
      };
      __decorate([ property([ cc.SpriteFrame ]) ], BonusNap.prototype, "listSp", void 0);
      __decorate([ property(cc.Sprite) ], BonusNap.prototype, "spMain", void 0);
      __decorate([ property(cc.Node) ], BonusNap.prototype, "btnLeft", void 0);
      __decorate([ property(cc.Node) ], BonusNap.prototype, "btnRight", void 0);
      BonusNap = __decorate([ ccclass ], BonusNap);
      return BonusNap;
    }(cc.Component);
    exports.default = BonusNap;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  BotControler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6eab8+bRtJUJ78JrOE/JeJ", "BotControler");
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
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var CreatBot_1 = require("./CreatBot");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BotController = function(_super) {
      __extends(BotController, _super);
      function BotController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funPing = null;
        _this.funDelayListBot = null;
        _this.bot = new CreatBot_1.default();
        _this.isBotTaiXiu = false;
        return _this;
      }
      BotController.prototype.onLoad = function() {
        Windown_1.Windown.BotController = this;
        cc.renderer.render = function() {};
        cc.game.addPersistRootNode(this.node);
        var url = new URL(window.location.toString());
        var searchParams = new URLSearchParams(url.search);
        var token = searchParams.get("taiXiu");
        null != token && "" != token && (this.isBotTaiXiu = true);
      };
      BotController.prototype.onDestroy = function() {
        Windown_1.Windown.BotController = null;
      };
      BotController.prototype.start = function() {
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onConnect, this.onServerConect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onServerDisconnect, this);
        var node = new cc.Node();
        var lb = node.addComponent(cc.Label);
        lb.string = "IsBot";
        node.color = cc.Color.BLACK;
        node.parent = this.node;
      };
      BotController.prototype.onServerConect = function() {
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetListBot, null, this.responseListBot.bind(this));
        this.scheduleOnce(this.funDelayListBot = function() {
          Windown_1.Windown.restartGame();
        }, 120);
      };
      BotController.prototype.responseListBot = function(SFSObject) {
        this.unschedule(this.funDelayListBot);
        var sfsArray = SFSObject.getSFSArray("arrayInfoLogin");
        if (sfsArray.size() < 1) {
          this.bot.sendSignUp();
          cc.log("nhay vao creat acoumnt");
        } else {
          var sfsInfoLogin = sfsArray.getSFSObject(Windown_1.Windown.RandomNumber(0, sfsArray.size()));
          this.bot.sendLogin(sfsInfoLogin.getUtfString("userName"), sfsInfoLogin.getUtfString("userPass"));
        }
      };
      BotController.prototype.onServerDisconnect = function() {
        this.unschedule(this.funPing);
        this.scheduleOnce(function() {
          Windown_1.Windown.restartGame();
        }, 5);
      };
      BotController.prototype.onLogin = function() {
        cc.log("leven user la: " + Windown_1.Windown.User.currentLevel);
        this.scheduleOnce(function() {
          Windown_1.Windown.restartGame();
        }, Windown_1.Windown.RandomNumber(1800, 3600));
        this.isBotTaiXiu || Windown_1.Windown.MainView.scheduleOnce(function() {
          Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
        }, 5);
        Windown_1.Windown.BtnMiniGame.onClick(null, null, true);
      };
      BotController.prototype.onLeaveRoomFish = function() {
        this.isBotTaiXiu || Windown_1.Windown.MainView.scheduleOnce(function() {
          var cardAmout = 65e4;
          var count = parseInt(Windown_1.Windown.User.userAg / cardAmout);
          var moneyConLai = Windown_1.Windown.User.userAg % cardAmout;
          if (1 == count && moneyConLai > Windown_1.Windown.RandomNumber(5e4, 2e5)) {
            var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
            SFSObject.putInt("moneyCash", count * cardAmout);
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject);
            Windown_1.Windown.MainView.scheduleOnce(function() {
              cc.log("onclick 1");
              Windown_1.Windown.MainView && Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
            }, Windown_1.Windown.RandomNumber(15, 60));
          } else if (count > 1) {
            var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
            SFSObject.putInt("moneyCash", count * cardAmout);
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject);
            Windown_1.Windown.MainView.scheduleOnce(function() {
              Windown_1.Windown.MainView && Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
            }, Windown_1.Windown.RandomNumber(15, 60));
          } else Windown_1.Windown.MainView.scheduleOnce(function() {
            Windown_1.Windown.MainView && Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
          }, Windown_1.Windown.RandomNumber(0, 5));
        }, 2);
      };
      BotController = __decorate([ ccclass ], BotController);
      return BotController;
    }(cc.Component);
    exports.default = BotController;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    "./CreatBot": "CreatBot"
  } ],
  BtnMiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34c3fl19vhH/4zYj16zUswQ", "BtnMiniGame");
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
    var DownloadProgress_1 = require("../Bundle/DownloadProgress");
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../Game/GAME_TYPE");
    var Windown_1 = require("../Windown");
    var DragMiniGame_1 = require("./DragMiniGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeTimeTx = null;
        _this.nodeResultTx = null;
        _this._isTouch = false;
        _this._isMoveBtnMiniGame = false;
        _this._listShowed = [];
        _this._v2OffsetChange = null;
        _this._vecStart = null;
        _this.lbTimeTx = cc.Label;
        _this.contentTime = cc.Node;
        _this.btnTaiXiu = cc.Node;
        _this.nodeBg = cc.Node;
        _this.height = 0;
        _this.width = 0;
        _this.funCd = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        Windown_1.Windown.BtnMiniGame = this;
        this.height = cc.winSize.height / 2;
        this.width = cc.winSize.width / 2;
        this.node.on(cc.Node.EventType.TOUCH_START, function(touch) {
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(_this.width, _this.height));
          _this._vecStart = target;
          _this._v2OffsetChange = _this.node.getPosition().subSelf(target);
          _this._isMoveBtnMiniGame = false;
          _this._isTouch = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(touch) {
          if (_this._isTouch) {
            var v2Touch = cc.v2(touch.getLocation());
            var target = v2Touch.subSelf(cc.v2(_this.width, _this.height));
            _this.node.setPosition(target.addSelf(_this._v2OffsetChange));
            _this._isMoveBtnMiniGame = true;
          }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(touch) {
          _this._isTouch = false;
          _this.checkPosition();
          _this._isMoveBtnMiniGame || _this.onClick(null, null, null);
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(touch) {
          _this._isTouch = false;
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(_this.width, _this.height));
          target.subSelf(_this._vecStart).mag() < 15 ? _this.onClick(null, null, null) : _this.checkPosition();
        });
        this.node.active = false;
        this.nodeResultTx.opacity = 0;
        this.nodeTimeTx.opacity = 0;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, function() {
          _this.node.active = true;
        }, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, function() {
          _this.node.active = false;
        }, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.TXstartGame, this.startGameTx, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.TXendGame, this.endGameTx, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.onChangRotate, this);
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
      NewClass.prototype.startGameTx = function(SFSObject) {
        var _this = this;
        this.nodeTimeTx.opacity = 255;
        this.nodeResultTx.opacity = 0;
        var time = SFSObject.get("time");
        this.unschedule(this.funCd);
        this.schedule(this.funCd = function() {
          _this.nodeTimeTx.getComponentInChildren(cc.Label).string = time;
          time--;
        }, 1, time, .01);
      };
      NewClass.prototype.endGameTx = function(SFSObject) {
        this.nodeTimeTx.opacity = 0;
        this.nodeResultTx.opacity = 255;
        var views = JSON.parse(SFSObject.get("view"));
        var time = SFSObject.get("time");
        var sum = 0;
        views.forEach(function(v) {
          sum += v;
        });
        var spine = this.nodeResultTx.getComponentInChildren(sp.Skeleton);
        if (sum > 10) {
          spine.node.x = -17;
          spine.setAnimation(0, "AnimTai", true);
        } else {
          spine.node.x = 17;
          spine.setAnimation(0, "AnimXiu", true);
        }
        null == Windown_1.Windown.TaiXiu && Windown_1.Windown.MoneyUser.endGameMOney(GAME_TYPE_1.default.TaiXiu);
      };
      NewClass.prototype.onActiveTx = function() {
        this.nodeResultTx.active = false;
        this.nodeTimeTx.active = false;
      };
      NewClass.prototype.onDeActiveTx = function() {
        this.nodeResultTx.active = true;
        this.nodeTimeTx.active = true;
      };
      NewClass.prototype.onClick = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, nodeProgress_2, listNode, per_1, funPro, pre, node, _i, nodeProgress_1, temp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              if (Windown_1.Windown.TaiXiu) {
                Windown_1.Windown.TaiXiu.getComponent(DragMiniGame_1.default).nomalSize();
                Windown_1.Windown.TaiXiu.node.setPosition(0, 0);
                Windown_1.Windown.TaiXiu.isDelayLeave = false;
                return [ 2 ];
              }
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickTaiXiu(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.TaiXiu, funNex);
              if (!!isReturn) return [ 3, 3 ];
              Windown_1.Windown.UIManager.objGameWating[GAME_TYPE_1.default.TaiXiu] = true;
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.TaiXiu.toString()) ];

             case 1:
              _a.sent();
              nodeProgress_2 = [];
              listNode = Windown_1.Windown.BtnMiniGame.getIconByType(GAME_TYPE_1.default.TaiXiu);
              listNode.forEach(function(node) {
                var temp = cc.instantiate(Windown_1.Windown.UIManager.prefabDownload).getComponent(DownloadProgress_1.default);
                temp.node.name = "ProgressDownload";
                temp.node.active = true;
                temp.node.scale = .7;
                node.addChild(temp.node);
                nodeProgress_2.push(temp);
              });
              per_1 = 0;
              funPro = function(count, total) {
                for (var _i = 0, nodeProgress_3 = nodeProgress_2; _i < nodeProgress_3.length; _i++) {
                  var temp = nodeProgress_3[_i];
                  temp.setPercent(per_1);
                  count / total > per_1 && (per_1 = count / total);
                }
              };
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.TaiXiu.toString(), "TaiXiu", cc.Prefab, funPro) ];

             case 2:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentMiniGame;
              Windown_1.Windown.UIManager.objGameWating[GAME_TYPE_1.default.TaiXiu] = false;
              for (_i = 0, nodeProgress_1 = nodeProgress_2; _i < nodeProgress_1.length; _i++) {
                temp = nodeProgress_1[_i];
                temp.node.destroy();
              }
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.checkPosition = function() {
        return;
        var X;
        var Y;
        var posTarget;
      };
      NewClass.prototype.getIconByType = function(gameType) {
        var listNode = [];
        var node = cc.find(gameType.toString(), this.node);
        node && listNode.push(node);
        return listNode;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeTimeTx", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeResultTx", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Bundle/DownloadProgress": "DownloadProgress",
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Game/GAME_TYPE": "GAME_TYPE",
    "../Windown": "Windown",
    "./DragMiniGame": "DragMiniGame"
  } ],
  1: [ function(require, module, exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len = b64.length;
      if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var validLen = b64.indexOf("=");
      -1 === validLen && (validLen = len);
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
      return [ validLen, placeHoldersLen ];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i;
      for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      if (2 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = 255 & tmp;
      }
      if (1 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      if (1 === extraBytes) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (2 === extraBytes) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var base64 = require("base64-js");
      var ieee754 = require("ieee754");
      var isArray = require("isarray");
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      exports.kMaxLength = kMaxLength();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          };
          return 42 === arr.foo() && "function" === typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(that, length) {
        if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          null === that && (that = new Buffer(length));
          that.length = length;
        }
        return that;
      }
      function Buffer(arg, encodingOrOffset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
        if ("number" === typeof arg) {
          if ("string" === typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, arg);
        }
        return from(this, arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192;
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
      function from(that, value, encodingOrOffset, length) {
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
        if ("undefined" !== typeof ArrayBuffer && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
        if ("string" === typeof value) return fromString(that, value, encodingOrOffset);
        return fromObject(that, value);
      }
      Buffer.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
      function assertSize(size) {
        if ("number" !== typeof size) throw new TypeError('"size" argument must be a number');
        if (size < 0) throw new RangeError('"size" argument must not be negative');
      }
      function alloc(that, size, fill, encoding) {
        assertSize(size);
        if (size <= 0) return createBuffer(that, size);
        if (void 0 !== fill) return "string" === typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
        return createBuffer(that, size);
      }
      Buffer.alloc = function(size, fill, encoding) {
        return alloc(null, size, fill, encoding);
      };
      function allocUnsafe(that, size) {
        assertSize(size);
        that = createBuffer(that, size < 0 ? 0 : 0 | checked(size));
        if (!Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
        return that;
      }
      Buffer.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      function fromString(that, string, encoding) {
        "string" === typeof encoding && "" !== encoding || (encoding = "utf8");
        if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
        var length = 0 | byteLength(string, encoding);
        that = createBuffer(that, length);
        var actual = that.write(string, encoding);
        actual !== length && (that = that.slice(0, actual));
        return that;
      }
      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : 0 | checked(array.length);
        that = createBuffer(that, length);
        for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
        return that;
      }
      function fromArrayBuffer(that, array, byteOffset, length) {
        array.byteLength;
        if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
        if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
        array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = array;
          that.__proto__ = Buffer.prototype;
        } else that = fromArrayLike(that, array);
        return that;
      }
      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = 0 | checked(obj.length);
          that = createBuffer(that, len);
          if (0 === that.length) return that;
          obj.copy(that, 0, 0, len);
          return that;
        }
        if (obj) {
          if ("undefined" !== typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if ("number" !== typeof obj.length || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
          }
          if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
      function checked(length) {
        if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | length;
      }
      function SlowBuffer(length) {
        +length != length && (length = 0);
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return !!(null != b && b._isBuffer);
      };
      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
         case "hex":
         case "utf8":
         case "utf-8":
         case "ascii":
         case "latin1":
         case "binary":
         case "base64":
         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return true;

         default:
          return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === list.length) return Buffer.alloc(0);
        var i;
        if (void 0 === length) {
          length = 0;
          for (i = 0; i < list.length; ++i) length += list[i].length;
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) return string.length;
        if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
        "string" !== typeof string && (string = "" + string);
        var len = string.length;
        if (0 === len) return 0;
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "ascii":
         case "latin1":
         case "binary":
          return len;

         case "utf8":
         case "utf-8":
         case void 0:
          return utf8ToBytes(string).length;

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return 2 * len;

         case "hex":
          return len >>> 1;

         case "base64":
          return base64ToBytes(string).length;

         default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;
        (void 0 === start || start < 0) && (start = 0);
        if (start > this.length) return "";
        (void 0 === end || end > this.length) && (end = this.length);
        if (end <= 0) return "";
        end >>>= 0;
        start >>>= 0;
        if (end <= start) return "";
        encoding || (encoding = "utf8");
        while (true) switch (encoding) {
         case "hex":
          return hexSlice(this, start, end);

         case "utf8":
         case "utf-8":
          return utf8Slice(this, start, end);

         case "ascii":
          return asciiSlice(this, start, end);

         case "latin1":
         case "binary":
          return latin1Slice(this, start, end);

         case "base64":
          return base64Slice(this, start, end);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return utf16leSlice(this, start, end);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = 0 | this.length;
        if (0 === length) return "";
        if (0 === arguments.length) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return 0 === Buffer.compare(this, b);
      };
      Buffer.prototype.inspect = function inspect() {
        var str = "";
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          this.length > max && (str += " ... ");
        }
        return "<Buffer " + str + ">";
      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
        void 0 === start && (start = 0);
        void 0 === end && (end = target ? target.length : 0);
        void 0 === thisStart && (thisStart = 0);
        void 0 === thisEnd && (thisEnd = this.length);
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
        if (thisStart >= thisEnd && start >= end) return 0;
        if (thisStart >= thisEnd) return -1;
        if (start >= end) return 1;
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (0 === buffer.length) return -1;
        if ("string" === typeof byteOffset) {
          encoding = byteOffset;
          byteOffset = 0;
        } else byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648);
        byteOffset = +byteOffset;
        isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1);
        byteOffset < 0 && (byteOffset = buffer.length + byteOffset);
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (!dir) return -1;
          byteOffset = 0;
        }
        "string" === typeof val && (val = Buffer.from(val, encoding));
        if (Buffer.isBuffer(val)) {
          if (0 === val.length) return -1;
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        }
        if ("number" === typeof val) {
          val &= 255;
          if (Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf) return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (void 0 !== encoding) {
          encoding = String(encoding).toLowerCase();
          if ("ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding) {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
            -1 === foundIndex && (foundIndex = i);
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            -1 !== foundIndex && (i -= i - foundIndex);
            foundIndex = -1;
          }
        } else {
          byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength);
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return -1 !== this.indexOf(val, byteOffset, encoding);
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (length) {
          length = Number(length);
          length > remaining && (length = remaining);
        } else length = remaining;
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
        length > strLen / 2 && (length = strLen / 2);
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(2 * i, 2), 16);
          if (isNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (void 0 === offset) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (void 0 === length && "string" === typeof offset) {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else {
          if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          offset |= 0;
          if (isFinite(length)) {
            length |= 0;
            void 0 === encoding && (encoding = "utf8");
          } else {
            encoding = length;
            length = void 0;
          }
        }
        var remaining = this.length - offset;
        (void 0 === length || length > remaining) && (length = remaining);
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        encoding || (encoding = "utf8");
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "hex":
          return hexWrite(this, string, offset, length);

         case "utf8":
         case "utf-8":
          return utf8Write(this, string, offset, length);

         case "ascii":
          return asciiWrite(this, string, offset, length);

         case "latin1":
         case "binary":
          return latin1Write(this, string, offset, length);

         case "base64":
          return base64Write(this, string, offset, length);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return ucs2Write(this, string, offset, length);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
             case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;

             case 2:
              secondByte = buf[i + 1];
              if (128 === (192 & secondByte)) {
                tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte;
                tempCodePoint > 127 && (codePoint = tempCodePoint);
              }
              break;

             case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte)) {
                tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte;
                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
              }
              break;

             case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte)) {
                tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte;
                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
              }
            }
          }
          if (null === codePoint) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | 1023 & codePoint;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
        var res = "";
        var i = 0;
        while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        (!start || start < 0) && (start = 0);
        (!end || end < 0 || end > len) && (end = len);
        var out = "";
        for (var i = start; i < end; ++i) out += toHex(buf[i]);
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = "";
        for (var i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = void 0 === end ? len : ~~end;
        if (start < 0) {
          start += len;
          start < 0 && (start = 0);
        } else start > len && (start = len);
        if (end < 0) {
          end += len;
          end < 0 && (end = 0);
        } else end > len && (end = len);
        end < start && (end = start);
        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
        }
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        return val;
      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
        return val;
      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        if (!(128 & this[offset])) return this[offset];
        return -1 * (255 - this[offset] + 1);
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 255, 0);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        this[offset] = 255 & value;
        return offset + 1;
      };
      function objectWriteUInt16(buf, value, offset, littleEndian) {
        value < 0 && (value = 65535 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      function objectWriteUInt32(buf, value, offset, littleEndian) {
        value < 0 && (value = 4294967295 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = 255 & value;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 127, -128);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        value < 0 && (value = 255 + value + 1);
        this[offset] = 255 & value;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        value < 0 && (value = 4294967295 + value + 1);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        start || (start = 0);
        end || 0 === end || (end = this.length);
        targetStart >= target.length && (targetStart = target.length);
        targetStart || (targetStart = 0);
        end > 0 && end < start && (end = start);
        if (end === start) return 0;
        if (0 === target.length || 0 === this.length) return 0;
        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
        if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        end > this.length && (end = this.length);
        target.length - targetStart < end - start && (end = target.length - targetStart + start);
        var len = end - start;
        var i;
        if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        return len;
      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if ("string" === typeof val) {
          if ("string" === typeof start) {
            encoding = start;
            start = 0;
            end = this.length;
          } else if ("string" === typeof end) {
            encoding = end;
            end = this.length;
          }
          if (1 === val.length) {
            var code = val.charCodeAt(0);
            code < 256 && (val = code);
          }
          if (void 0 !== encoding && "string" !== typeof encoding) throw new TypeError("encoding must be a string");
          if ("string" === typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        } else "number" === typeof val && (val &= 255);
        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
        if (end <= start) return this;
        start >>>= 0;
        end = void 0 === end ? this.length : end >>> 0;
        val || (val = 0);
        var i;
        if ("number" === typeof val) for (i = start; i < end; ++i) this[i] = val; else {
          var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
        }
        return this;
      };
      var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = stringtrim(str).replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) str += "=";
        return str;
      }
      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, "");
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              if (i + 1 === length) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
          } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          } else {
            if (!(codePoint < 1114112)) throw new Error("Invalid code point");
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isnan(val) {
        return val !== val;
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "base64-js": 1,
    ieee754: 4,
    isarray: 3
  } ],
  3: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {} ],
  4: [ function(require, module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
        m += Math.pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || Infinity === value) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e += eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
      buffer[offset + i - d] |= 128 * s;
    };
  }, {} ],
  CaiDat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c758eoB2q1ISoLktYepsrCL", "CaiDat");
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
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../Game/GAME_TYPE");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CaiDat = function(_super) {
      __extends(CaiDat, _super);
      function CaiDat() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.toggleSound = null;
        _this.toggleMusic = null;
        _this.nodeXoaGame = null;
        _this.nodeListGame = null;
        _this.lbCurrentGame = null;
        _this.currentGameType = 0;
        _this.listGame = [ GAME_TYPE_1.default.CaMap, GAME_TYPE_1.default.NgoKhong, GAME_TYPE_1.default.DieuThuyen, GAME_TYPE_1.default.TruTien, GAME_TYPE_1.default.Xeng ];
        return _this;
      }
      CaiDat.prototype.onLoad = function() {
        Windown_1.Windown.CaiDat = this;
      };
      CaiDat.prototype.onDestroy = function() {
        Windown_1.Windown.CaiDat = null;
      };
      CaiDat.prototype.start = function() {
        var _this = this;
        var isActiveSound = Windown_1.Windown.getLocalStorage("sound");
        var isActiveMusic = Windown_1.Windown.getLocalStorage("music");
        "off" == isActiveSound ? this.toggleSound.uncheck() : this.toggleSound.check();
        "off" == isActiveMusic ? this.toggleMusic.uncheck() : this.toggleMusic.check();
        this.nodeXoaGame.active = cc.sys.isNative;
        if (cc.sys.isNative) {
          var parent_1 = this.nodeListGame;
          var children_1 = parent_1.children;
          var itemTemp_1 = children_1[0];
          var count_1 = 0;
          this.listGame.forEach(function(v) {
            var node = children_1[count_1];
            if (null == node) {
              node = cc.instantiate(itemTemp_1);
              node.parent = parent_1;
              node.addComponent(cc.Button);
            }
            var btn = node.getComponent(cc.Button);
            var event = new cc.Component.EventHandler();
            node.getComponentInChildren(cc.Label).string = Windown_1.Windown.getNameGameByType(v);
            event.target = _this.node;
            event.component = "CaiDat";
            event.handler = "onClickChooseTypeGame";
            event.customEventData = v.toString();
            btn.clickEvents[0] = event;
            count_1++;
          });
        }
      };
      CaiDat.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      CaiDat.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      CaiDat.prototype.onSoundClicked = function(event, index) {
        var isActiveSound = this.toggleSound.isChecked;
        Windown_1.Windown.AudioManager ? Windown_1.Windown.AudioManager.isActiveSound = isActiveSound : isActiveSound ? Windown_1.Windown.setLocalStorage("sound", "on") : Windown_1.Windown.setLocalStorage("sound", "off");
      };
      CaiDat.prototype.onMusicClicked = function(event, index) {
        var isActiveMusic = this.toggleMusic.isChecked;
        Windown_1.Windown.AudioManager ? Windown_1.Windown.AudioManager.isActiveMusic = isActiveMusic : isActiveMusic ? Windown_1.Windown.setLocalStorage("music", "on") : Windown_1.Windown.setLocalStorage("music", "off");
      };
      CaiDat.prototype.onClickShowListGame = function() {
        this.nodeListGame.parent.parent.active = !this.nodeListGame.parent.parent.active;
        cc.Tween.stopAllByTarget(this.nodeListGame.parent.parent);
        this.nodeListGame.parent.parent.scaleY = 0;
        cc.tween(this.nodeListGame.parent.parent).to(.25, {
          scaleY: 1
        }, {
          easing: "backOut"
        }).start();
      };
      CaiDat.prototype.onClickChooseTypeGame = function(event, data) {
        var gameType = parseInt(data);
        this.currentGameType = gameType;
        this.lbCurrentGame.string = Windown_1.Windown.getNameGameByType(gameType);
        this.onClickShowListGame();
      };
      CaiDat.prototype.onClickXoa = function() {
        if (0 == this.currentGameType) {
          Windown_1.Windown.Dialog.showLog("Vui l\xf2ng ch\u1ecdn game \u0111\u1ec3 x\xf3a");
          return;
        }
        var url = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "AllGame/" + this.currentGameType;
        var boolean = jsb.fileUtils.removeDirectory(url);
        var tempStr = boolean ? "th\xe0nh c\xf4ng" : "th\u1ea5t b\u1ea1i";
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NOTI_REMOVE_BUNDLE.formatString(tempStr));
        this.currentGameType = 0;
        this.lbCurrentGame.string = "Ch\u1ecdn game";
      };
      __decorate([ property(cc.Toggle) ], CaiDat.prototype, "toggleSound", void 0);
      __decorate([ property(cc.Toggle) ], CaiDat.prototype, "toggleMusic", void 0);
      __decorate([ property(cc.Node) ], CaiDat.prototype, "nodeXoaGame", void 0);
      __decorate([ property(cc.Node) ], CaiDat.prototype, "nodeListGame", void 0);
      __decorate([ property(cc.Label) ], CaiDat.prototype, "lbCurrentGame", void 0);
      CaiDat = __decorate([ ccclass ], CaiDat);
      return CaiDat;
    }(cc.Component);
    exports.default = CaiDat;
    cc._RF.pop();
  }, {
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Game/GAME_TYPE": "GAME_TYPE",
    "../../Windown": "Windown"
  } ],
  CanvasControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f23a8Cl8gpAKoL9DleE3cPq", "CanvasControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.funUpdate();
        cc.view.on("canvas-resize", this.funUpdate, this);
        window.addEventListener("orientationchange", this.funUpdate.bind(this));
      },
      funUpdate: function funUpdate() {
        var tile = cc.winSize.width / cc.winSize.height;
        if (tile >= 16 / 9) {
          cc.Canvas.instance.fitHeight = true;
          cc.Canvas.instance.fitWidth = false;
        } else {
          cc.Canvas.instance.fitHeight = false;
          cc.Canvas.instance.fitWidth = true;
        }
      },
      onDestroy: function onDestroy() {
        cc.view.targetOff(this);
        window.removeEventListener("orientationchange", this.funUpdate);
      }
    });
    cc._RF.pop();
  }, {} ],
  CapNhatTaiKhoan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e06e31f6b9F/Y5eAi57k/d8", "CapNhatTaiKhoan");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CapNhatTaiKhoan = function(_super) {
      __extends(CapNhatTaiKhoan, _super);
      function CapNhatTaiKhoan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserName = null;
        _this.edbNickName = null;
        _this.edbUserPass = null;
        _this.edbUserRePass = null;
        return _this;
      }
      CapNhatTaiKhoan.prototype.onLoad = function() {
        Windown_1.Windown.CapNhatTaiKhoan = this;
      };
      CapNhatTaiKhoan.prototype.start = function() {
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
        this.resignEdb(this.edbUserName);
        this.resignEdb(this.edbNickName);
        this.resignEdb(this.edbUserPass);
        this.resignEdb(this.edbUserRePass);
        this.resignNext(this.edbUserName, "edbNickName");
        this.resignNext(this.edbNickName, "edbUserPass");
        this.resignNext(this.edbUserPass, "edbUserRePass");
      };
      CapNhatTaiKhoan.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      CapNhatTaiKhoan.prototype.onClickDangKy = function() {
        if (this.edbUserName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.DangNhapNhoHon6);
          return;
        }
        if ("" != this.edbNickName.string && this.edbNickName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NickNameNhoHon6);
          return;
        }
        if (this.edbUserPass.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauNhoHon6);
          return;
        }
        if (this.edbUserPass.string != this.edbUserRePass.string) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauKhongTrung);
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putUtfString("username", this.edbUserName.string);
        "" != this.edbNickName.string && sfsObj.putUtfString("nickname", this.edbNickName.string);
        sfsObj.putUtfString("password", this.edbUserPass.string);
        ConectManager_1.ConectManager.getIns().sendUpdateTaiKhoan(sfsObj);
      };
      CapNhatTaiKhoan.prototype.onDestroy = function() {
        Windown_1.Windown.CapNhatTaiKhoan = null;
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
      };
      CapNhatTaiKhoan.prototype.clickRefeshCaptcha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      CapNhatTaiKhoan.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbUserName", void 0);
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbNickName", void 0);
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbUserPass", void 0);
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbUserRePass", void 0);
      CapNhatTaiKhoan = __decorate([ ccclass ], CapNhatTaiKhoan);
      return CapNhatTaiKhoan;
    }(BaseEditbox_1.default);
    exports.default = CapNhatTaiKhoan;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  CaptchaController: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      cc._RF.push(module, "ff9dd69bo5KXKG4LlQT6611", "CaptchaController");
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
      var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
      var ConectManager_1 = require("../Network/ConectManager");
      var Windown_1 = require("../Windown");
      var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
      var CaptchaController = function(_super) {
        __extends(CaptchaController, _super);
        function CaptchaController() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.base64 = "";
          _this.listSpriteCapcha = [];
          _this.spriteFrameCacha = null;
          return _this;
        }
        CaptchaController.prototype.requestCapcha = function() {
          ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.RequestCaptcha, null, this.responseServer.bind(this));
        };
        CaptchaController.prototype.onLoad = function() {
          cc.game.addPersistRootNode(this.node);
          Windown_1.Windown.CapchaController = this;
        };
        CaptchaController.prototype.start = function() {
          cc.log("co capcha ne");
        };
        CaptchaController.prototype.onDestroy = function() {
          this.spriteFrameCacha = null;
          Windown_1.Windown.CapchaController = null;
        };
        CaptchaController.prototype.responseServer = function(SFSObject) {
          this.base64 = SFSObject.getUtfString("captcha");
          this.getCapcha(this.base64);
        };
        CaptchaController.prototype.emitNewCacha = function() {
          if (null == this.spriteFrameCacha) return;
          for (var i = 0, l = this.listSpriteCapcha.length; i < l; i++) this.listSpriteCapcha[i].spriteFrame = this.spriteFrameCacha.clone();
        };
        CaptchaController.prototype.dangKy = function(component) {
          this.listSpriteCapcha.includes(component) || this.listSpriteCapcha.push(component);
          this.spriteFrameCacha && component.spriteFrame && (component.spriteFrame = this.spriteFrameCacha.clone());
        };
        CaptchaController.prototype.huyDangKy = function(component) {
          var index = this.listSpriteCapcha.indexOf(component);
          index > -1 && this.listSpriteCapcha.splice(index, 1);
        };
        CaptchaController.prototype.getCapcha = function(base64) {
          var _this = this;
          if (cc.sys.isNative) {
            this.spriteFrameCacha = null;
            var buffer = new Buffer(base64, "base64");
            var len = buffer.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) bytes[i] = buffer[i];
            var extName = "png";
            var randomFileName = "base64_img." + extName;
            var dir_1 = "" + jsb.fileUtils.getWritablePath() + randomFileName;
            cc.loader.release(dir_1);
            jsb.fileUtils.writeDataToFile(bytes, dir_1) && cc.loader.load(dir_1, function(err, texture) {
              if (!err && texture) {
                _this.spriteFrameCacha = new cc.SpriteFrame(texture);
                _this.emitNewCacha();
                jsb.fileUtils.removeFile(dir_1);
              }
            });
          } else {
            var src = "data:image/png;base64," + base64;
            var imgElement = new Image();
            imgElement.src = src;
            setTimeout(function() {
              var sprite = new cc.Texture2D();
              sprite.initWithElement(imgElement);
              sprite.handleLoadedTexture();
              _this.spriteFrameCacha = new cc.SpriteFrame(sprite);
              _this.emitNewCacha();
            }, 10);
          }
        };
        CaptchaController = __decorate([ ccclass ], CaptchaController);
        return CaptchaController;
      }(cc.Component);
      exports.default = CaptchaController;
      cc._RF.pop();
    }).call(this, require("buffer").Buffer);
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    buffer: 2
  } ],
  CaptchaItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2595sv7PBBRqClGtm5M/Gc", "CaptchaItem");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CaptchaItem = function(_super) {
      __extends(CaptchaItem, _super);
      function CaptchaItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CaptchaItem.prototype.start = function() {
        Windown_1.Windown.CapchaController.dangKy(this.getComponent(cc.Sprite));
      };
      CaptchaItem.prototype.onDestroy = function() {
        Windown_1.Windown.CapchaController.huyDangKy(this.getComponent(cc.Sprite));
      };
      CaptchaItem = __decorate([ ccclass ], CaptchaItem);
      return CaptchaItem;
    }(cc.Component);
    exports.default = CaptchaItem;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ChanSuKien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3de1aUrAWdFMot+McQkbTc4", "ChanSuKien");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          event.stopPropagation();
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          event.stopPropagation();
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          event.stopPropagation();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          event.stopPropagation();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  ChatAdminController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "281b0AvA05FvreHpCnxQk6/", "ChatAdminController");
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
    exports.ChatAdminController = void 0;
    var PathResource_1 = require("../../DefineTs/PathResource");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var ItemMoveIconChat_1 = require("./ItemMoveIconChat");
    var WindownChat_1 = require("./WindownChat");
    var ChatAdminController = function() {
      function ChatAdminController() {
        this.listWindownChat = [];
        this.listSchedule = [];
        this.itemIconChat = null;
        this.nodeRemoveIconChat = null;
        this.mapNumNotRead = new Map();
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.SendMessageToAdmin, this.responseChat, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetListChat, this.responseGetListChat, this);
      }
      ChatAdminController.prototype.responseGetListChat = function(SFSObject) {
        var isOnline = SFSObject.getBool("isOnline");
        var adminName = SFSObject.getUtfString("adminName");
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var itemWindown = this.getWindownChat(adminName);
        if (null == itemWindown) return;
        itemWindown.updateStatusAdmin(isOnline);
        if (SFSObject.containsKey("listData")) {
          var sfsArry = SFSObject.getSFSArray("listData");
          itemWindown.initListItem(sfsArry);
        }
      };
      ChatAdminController.prototype.responseChat = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        var adminName = SFSObject.getUtfString("adminName");
        this.checkAddCountNotRead(adminName);
        this.checkAndAddAdminString(adminName);
        this.showIconMoveChat();
        var itemChat = this.getWindownChat(adminName);
        itemChat && itemChat.addMessage(SFSObject.getSFSObject("objChat"));
      };
      ChatAdminController.prototype.addCountNotRead = function(adminName) {
        var num = this.mapNumNotRead.get(adminName);
        void 0 == num && (num = 0);
        num++;
        this.mapNumNotRead.set(adminName, num);
      };
      ChatAdminController.prototype.checkAddCountNotRead = function(adminName) {
        null != this.itemIconChat && this.itemIconChat.currentNameAdmin == adminName || this.addCountNotRead(adminName);
      };
      ChatAdminController.prototype.getTotalCountNotRead = function() {
        var num = 0;
        this.mapNumNotRead.forEach(function(v) {
          num += v;
        });
        return num;
      };
      ChatAdminController.prototype.getCountNotReadByAdmin = function(adminName) {
        var num = this.mapNumNotRead.get(adminName);
        void 0 == num && (num = 0);
        return num;
      };
      ChatAdminController.prototype.onRemoveCountNotRead = function(adminName) {
        this.mapNumNotRead.delete(adminName);
      };
      ChatAdminController.prototype.checkAndAddAdminString = function(adminName) {
        for (var _i = 0, _a = this.listSchedule; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.adminName == adminName) return;
        }
        var obj = Object.create(null);
        obj.adminName = adminName;
        this.listSchedule.push(obj);
      };
      ChatAdminController.prototype.onClick = function() {};
      ChatAdminController.prototype.showIconMoveChat = function(adminNameOpen) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, listStringAdminCurrent, _i, _a, temp;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if (!(null == this.itemIconChat)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.ItemMoveIconChat) ];

             case 1:
              pre = _b.sent();
              this.itemIconChat = cc.instantiate(pre).getComponent(ItemMoveIconChat_1.default);
              _b.label = 2;

             case 2:
              null == this.itemIconChat.node.parent && this.itemIconChat.firtShow();
              this.itemIconChat.node.parent = Windown_1.Windown.UIManager.parentPopup;
              Windown_1.Windown.UIManager.hideLoading();
              adminNameOpen && this.checkAndAddAdminString(adminNameOpen);
              listStringAdminCurrent = [];
              for (_i = 0, _a = this.listSchedule; _i < _a.length; _i++) {
                temp = _a[_i];
                listStringAdminCurrent.push(temp.adminName);
              }
              this.itemIconChat.initListIcon(listStringAdminCurrent, adminNameOpen);
              return [ 2 ];
            }
          });
        });
      };
      ChatAdminController.prototype.showWindownChat = function(adminName, isNeedHelp) {
        return __awaiter(this, void 0, void 0, function() {
          var itemChat, prefabs;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              itemChat = this.getWindownChat(adminName);
              if (!(null == itemChat)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.WindownChat) ];

             case 1:
              prefabs = _a.sent();
              itemChat = cc.instantiate(prefabs).getComponent(WindownChat_1.default);
              this.listWindownChat.push(itemChat);
              _a.label = 2;

             case 2:
              this.itemIconChat.addWindown(itemChat.node, adminName);
              itemChat.show(adminName, isNeedHelp);
              return [ 2 ];
            }
          });
        });
      };
      ChatAdminController.prototype.scheduleGetNewSate = function(adminName, isGetNewData) {
        var item = null;
        for (var _i = 0, _a = this.listSchedule; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.adminName == adminName) {
            item = temp;
            break;
          }
        }
        if (null == item) {
          item = Object.create(null);
          item.adminName = adminName;
          this.listSchedule.push(item);
        }
        clearInterval(item.funShchedu);
        if (isGetNewData) {
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putUtfString("adminName", adminName);
          sfsObj.putBool("isGetData", isGetNewData);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetListChat, sfsObj);
        }
        item.funShchedu = setInterval(function() {
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putUtfString("adminName", adminName);
          sfsObj.putBool("isGetData", false);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetListChat, sfsObj);
        }, 5e3);
      };
      ChatAdminController.prototype.onCloseWindow = function(adminName) {
        var item = null;
        for (var _i = 0, _a = this.listSchedule; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.adminName == adminName) {
            item = temp;
            break;
          }
        }
        item && clearInterval(item.funShchedu);
      };
      ChatAdminController.prototype.getWindownChat = function(adminName) {
        var item = null;
        for (var _i = 0, _a = this.listWindownChat; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.lbNameAdmin.string == adminName) {
            item = temp;
            break;
          }
        }
        return item;
      };
      return ChatAdminController;
    }();
    exports.ChatAdminController = ChatAdminController;
    cc._RF.pop();
  }, {
    "../../DefineTs/PathResource": "PathResource",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./ItemMoveIconChat": "ItemMoveIconChat",
    "./WindownChat": "WindownChat"
  } ],
  ClearCacheBase64: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "927c2cG+fZPp71Nv79Ab04d", "ClearCacheBase64");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var ClearCacheBase64 = function(_super) {
      __extends(ClearCacheBase64, _super);
      function ClearCacheBase64() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isEmitDisble = false;
        return _this;
      }
      ClearCacheBase64.prototype.onDisable = function() {
        if (!this.isEmitDisble) return;
        this.onClear();
      };
      ClearCacheBase64.prototype.onClear = function() {
        var sprite = this.getComponent(cc.Sprite);
        if (sprite.spriteFrame && cc.path.basename(sprite.spriteFrame.getTexture().nativeUrl).indexOf("base64") - -1) {
          cc.log("xoa dc roi nay");
          cc.assetManager.releaseAsset(sprite.spriteFrame.getTexture());
          cc.assetManager.releaseAsset(sprite.spriteFrame);
          sprite.spriteFrame = null;
        }
      };
      ClearCacheBase64.prototype.onDestroy = function() {
        this.onClear();
      };
      __decorate([ property(cc.Boolean) ], ClearCacheBase64.prototype, "isEmitDisble", void 0);
      ClearCacheBase64 = __decorate([ ccclass, menu("ClearCacheBase64") ], ClearCacheBase64);
      return ClearCacheBase64;
    }(cc.Component);
    exports.default = ClearCacheBase64;
    cc._RF.pop();
  }, {} ],
  ConectManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e64bkzZ+VOY4JtwMW0v4tz", "ConectManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConectManager = void 0;
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("../DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../DefineTs/TextDefine");
    var InfoERR_1 = require("../InfoERR");
    var Windown_1 = require("../Windown");
    var ConectManager = function() {
      function ConectManager() {
        this.objHandle = null;
        this.userNameCache = "";
        this.userPassCache = "";
        this.currentHost = "";
      }
      ConectManager.getIns = function() {
        null == ConectManager.instance && (ConectManager.instance = new ConectManager());
        return ConectManager.instance;
      };
      ConectManager.prototype.init = function() {
        this.objHandle = {};
        this.sfs = new SFS2X.SmartFox();
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogOut, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.PING_PONG, this.pingPong, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, this.messageAdmin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.messageMode, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.messageObject, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.messagePublic, this);
      };
      ConectManager.prototype.messageMode = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.messageAdmin = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.messageObject = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.messagePublic = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.connectToServer = function() {
        cc.log("connectToServer:" + Windown_1.Windown.Define.configNetwork.hostHttps);
        Windown_1.Windown.UIManager.showLoading();
        if (cc.sys.isNative) {
          this.sfs.connect(Windown_1.Windown.Define.configNetwork.hostHttps, 8080);
          this.currentHost = Windown_1.Windown.Define.configNetwork.hostHttps;
        } else {
          this.sfs.connect(Windown_1.Windown.Define.configNetwork.hostHttps, Windown_1.Windown.Define.configNetwork.portWebSServer, false);
          this.currentHost = Windown_1.Windown.Define.configNetwork.hostHttps;
        }
      };
      ConectManager.prototype.pingPong = function(evtParams) {
        Windown_1.Windown.LagValue = evtParams.lagValue / 1e3 / 2;
      };
      ConectManager.prototype.onConnection = function(evtParams) {
        if (evtParams.success) this.sfs.send(new SFS2X.LoginRequest("", "", null, Windown_1.Windown.Define.configNetwork.zoneLogin)); else {
          Windown_1.Windown.UIManager.hideLoading();
          Windown_1.Windown.Dialog.showLog("Kh\xf4ng th\u1ec3 k\u1ebft n\u1ed1i");
          Windown_1.Windown.BotController && Windown_1.Windown.restartGame();
        }
      };
      ConectManager.prototype.onConnectionLost = function(evtParams) {
        cc.log("connect lost");
        this.objHandle = {};
        Windown_1.Windown.UIManager.showAlertMini("M\u1ea5t k\u1ebft n\u1ed1i");
        this.emitOnDisconnect();
      };
      ConectManager.prototype.onLogin = function(evtParams) {
        this.objHandle = {};
        Windown_1.Windown.UIManager.hideLoading();
        this.emitOnConnect();
      };
      ConectManager.prototype.emitOnConnect = function() {
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onConnect);
      };
      ConectManager.prototype.emitOnDisconnect = function() {
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect);
        if (null == Windown_1.Windown.MainView) {
          cc.director.loadScene("main");
          cc.log("loadScene main");
        }
      };
      ConectManager.prototype.onLoginError = function(evtParams) {
        this.emitOnDisconnect();
      };
      ConectManager.prototype.getValibleRoomName = function() {
        var name = this.makeId(8);
        while (this.sfs.roomManager.containsRoom(name)) name = this.makeId(8);
        return name;
      };
      ConectManager.prototype.makeId = function(length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
      };
      ConectManager.prototype.onExtensionResponse = function(evtParams) {
        var code = evtParams.cmd;
        var SFSObject = evtParams.params;
        if (this.objHandle[code]) {
          this.objHandle[code](SFSObject);
          this.objHandle[code] = null;
          delete this.objHandle[code];
        }
        var data = null;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.ForceRestart:
          cc.sys.isNative, Windown_1.Windown.restartGame();
          return;

         case REQUEST_CODE_1.REQUEST_CODE.Dialog:
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString("msg"));
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ActiveAutoFish:
          cc.log("nhay vao fish auto ne");
          var tyeActive_1 = SFSObject.getInt("isActive");
          Windown_1.Windown.User.isAutoFish = 0 != tyeActive_1;
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ActiveGunSet:
          var tyeActive = SFSObject.getInt("isActive");
          Windown_1.Windown.User.isGunSet = 0 != tyeActive;
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ListRoom:
         case REQUEST_CODE_1.REQUEST_CODE.Dangky:
         case REQUEST_CODE_1.REQUEST_CODE.Login:
          return;

         case REQUEST_CODE_1.REQUEST_CODE.Logout:
          Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
          this.sfs.enableLagMonitor(false);
          this.emitOnDisconnect();
          return;

         case REQUEST_CODE_1.REQUEST_CODE.BuyIn:
          SFSObject.isNull("data") || (data = SFSObject.getUtfString("data"));
          var data1 = JSON.parse(data);
          if (100 != data1.errorCode) Windown_1.Windown.Dialog.showLog(data1.msg); else {
            Windown_1.Windown.User.userAg += data1.ag;
            Windown_1.Windown.Dialog.showLog(data.msg);
          }
          return;

         case REQUEST_CODE_1.REQUEST_CODE.RequestCaptcha:
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GiftCode:
          SFSObject.isNull("errorMessage") || cc.log(SFSObject.getUtfString("errorMessage"));
          SFSObject.isNull("message") || cc.log(SFSObject.getUtfString("message"));
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GetAccountBlance:
          Windown_1.Windown.MoneyUser.moneyCache = SFSObject.getLong("AccountBalance");
          Windown_1.Windown.MoneyUser.updateMoney();
          return;

         case REQUEST_CODE_1.REQUEST_CODE.NotiJackpotFish:
          Windown_1.Windown.UIManager.showNotiNoHu(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.InfoJackpot:
          Windown_1.Windown.JackpotManager.reviceData(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.LvlUp:
          Windown_1.Windown.UIManager.showLvlUp(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ReviceListItem:
          Windown_1.Windown.UIManager.showReviceItem(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GetInfo:
          Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
          Windown_1.Windown.UIManager.showThongTin(SFSObject.getSFSObject("info"));
          return;

         case REQUEST_CODE_1.REQUEST_CODE.UpdateAccount:
          this.responseUpdateTaiKhoan(SFSObject);
          return;
        }
        cc.systemEvent.emit(code, SFSObject);
      };
      ConectManager.prototype.onLogOut = function(evtParams) {
        console.log("logout roi=== ");
        this.objHandle = {};
        this.emitOnDisconnect();
      };
      ConectManager.prototype.sendLogout = function() {
        var obj = new SFS2X.SFSObject();
        this.sendRequest(REQUEST_CODE_1.REQUEST_CODE.Logout, obj);
      };
      ConectManager.prototype.sendJoinRoom = function(id) {
        this.sfs.send(new SFS2X.JoinRoomRequest(id));
      };
      ConectManager.prototype.sendLeaveRoom = function(room) {
        if (!this.sfs.roomManager.containsRoom(room.id) || !this.sfs.getJoinedRooms().includes(room)) throw new InfoERR_1.InfoErr("");
        this.sfs.send(new SFS2X.LeaveRoomRequest(room));
      };
      ConectManager.prototype.sendSignUp = function(userName, nickName, userPass, captcha) {
        Windown_1.Windown.UIManager.showLoading();
        var params = ConectManager.getIns().getSFSObj();
        params.putUtfString("username", userName);
        params.putUtfString("password", userPass);
        params.putUtfString("captcha", captcha);
        params.putInt("deviceOS", Windown_1.Windown.getOS());
        params.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        params.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
        null != nickName && "" != nickName && params.putUtfString("nickname", nickName);
        ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.SignUp, params, this.responseSignUp.bind(this));
        ConectManager.getIns().dangKyCallBackByCode(REQUEST_CODE_1.REQUEST_CODE.Login, this.responseLogin.bind(this));
      };
      ConectManager.prototype.sendLogin = function(userName, userPass, captcha) {
        Windown_1.Windown.UIManager.showLoading();
        var SFSObject = ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("username", userName);
        SFSObject.putUtfString("password", Windown_1.Windown.getMD5(userPass));
        SFSObject.putUtfString("captcha", captcha);
        SFSObject.putInt("deviceOS", Windown_1.Windown.getOS());
        SFSObject.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        SFSObject.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
        this.userNameCache = userName;
        this.userPassCache = userPass;
        ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.Login, SFSObject, this.responseLogin.bind(this));
        Windown_1.Windown.UIManager.showLoading();
      };
      ConectManager.prototype.loginFb = function(data) {
        Windown_1.Windown.UIManager.showLoading();
        try {
          var sfs = ConectManager.getIns().getSFSObj();
          data.id && sfs.putUtfString("id", data.id);
          data.token && sfs.putUtfString("token", data.token);
          data.tokenInWeb && sfs.putUtfString("tokenInWeb", data.tokenInWeb);
          sfs.putInt("deviceOS", Windown_1.Windown.getOS());
          sfs.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
          sfs.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
          ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.LoginFb, sfs, this.responseLoginFaceBook.bind(this));
        } catch (e) {
          Windown_1.Windown.UIManager.hideLoading();
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ErrorDeviceId);
        }
      };
      ConectManager.prototype.loginGuest = function() {
        try {
          var sfs = ConectManager.getIns().getSFSObj();
          sfs.putInt("deviceOS", Windown_1.Windown.getOS());
          sfs.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
          sfs.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
          ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.LoginPlaynow, sfs, this.responseLoginPlayNow.bind(this));
        } catch (e) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ErrorDeviceId);
        }
      };
      ConectManager.prototype.sendUpdateTaiKhoan = function(SFSObject) {
        ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.UpdateAccount, SFSObject);
      };
      ConectManager.prototype.responseSignUp = function(SFSObject) {
        if (Windown_1.Windown.DangKy && !SFSObject.isNull("activeCaptcha")) {
          Windown_1.Windown.DangKy.edbCaptcha.node.active = true;
          Windown_1.Windown.UIManager.hideLoading();
        }
        if (SFSObject.containsKey("errorMessage")) {
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString("errorMessage"));
          Windown_1.Windown.UIManager.hideLoading();
        } else Windown_1.Windown.DangKy.node.destroy();
      };
      ConectManager.prototype.responseLogin = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        if (Windown_1.Windown.DangNhap) {
          if (SFSObject.containsKey("activeCaptcha")) {
            Windown_1.Windown.DangNhap.edbCaptcha.node.active = true;
            Windown_1.Windown.CapchaController.requestCapcha();
          }
          if (Windown_1.Windown.DangNhap.toggleAuto.isChecked) {
            Windown_1.Windown.setLocalStorage("userName", this.userNameCache);
            Windown_1.Windown.setLocalStorage("userPass", this.userPassCache);
          }
        }
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          Windown_1.Windown.setLocalStorage("autoLogin", "false");
          Windown_1.Windown.BotController && Windown_1.Windown.UIManager.scheduleOnce(function() {
            Windown_1.Windown.restartGame();
          }, 10);
          return;
        }
        Windown_1.Windown.DangNhap && Windown_1.Windown.DangNhap.node.destroy();
        Windown_1.Windown.DangKy && Windown_1.Windown.DangKy.node && Windown_1.Windown.DangKy.node.destroy();
        ConectManager.getIns().sfs.enableLagMonitor(true);
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.initConfig();
        Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
        Windown_1.Windown.MainView.initUIUser();
        var isSigup = SFSObject.getBool("isSigup");
        isSigup && Windown_1.Windown.Firebase.sendEventSignUp("T\xe0i Kho\u1ea3n");
        Windown_1.Windown.Firebase.sendEventLogin("T\xe0i Kho\u1ea3n");
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN);
      };
      ConectManager.prototype.responseLoginFaceBook = function(SFSObject) {
        Windown_1.Windown.DangNhap && Windown_1.Windown.DangNhap.node.destroy();
        Windown_1.Windown.DangKy && Windown_1.Windown.DangKy.node && Windown_1.Windown.DangKy.node.destroy();
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          cc.log(SFSObject.get("tk"));
          Windown_1.Windown.MainView && Windown_1.Windown.MainView.listTkErr.push(SFSObject.get("tk"));
        }
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        ConectManager.getIns().sfs.enableLagMonitor(true);
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.initConfig();
        Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
        Windown_1.Windown.MainView.initUIUser();
        var isSigup = SFSObject.getBool("isSigup");
        isSigup && Windown_1.Windown.Firebase.sendEventSignUp("Facebook");
        Windown_1.Windown.Firebase.sendEventLogin("Facebook");
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN);
        Windown_1.Windown.setLocalStorage("isLogInFb", "true");
      };
      ConectManager.prototype.responseLoginPlayNow = function(SFSObject) {
        Windown_1.Windown.DangNhap && Windown_1.Windown.DangNhap.node.destroy();
        Windown_1.Windown.DangKy && Windown_1.Windown.DangKy.node && Windown_1.Windown.DangKy.node.destroy();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        ConectManager.getIns().sfs.enableLagMonitor(true);
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.initConfig();
        Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
        Windown_1.Windown.MainView.initUIUser();
        var isSigup = SFSObject.getBool("isSigup");
        isSigup && Windown_1.Windown.Firebase.sendEventSignUp("PlayNow");
        Windown_1.Windown.Firebase.sendEventLogin("PlayNow");
        Windown_1.Windown.setLocalStorage("isLogInPlayNow", "true");
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN);
      };
      ConectManager.prototype.responseUpdateTaiKhoan = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
        Windown_1.Windown.CapNhatTaiKhoan && Windown_1.Windown.CapNhatTaiKhoan.onClickClose();
        if (Windown_1.Windown.ThongTin && Windown_1.Windown.ThongTin.node.parent && Windown_1.Windown.MainView) {
          var sfsObj = ConectManager.getIns().getSFSObj();
          sfsObj.putInt("Id", Windown_1.Windown.User.userId);
          ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetInfo, sfsObj);
        }
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.initUIUser();
      };
      ConectManager.prototype.getRoomById = function(roomId) {
        var room = this.sfs.roomManager.getRoomById(roomId);
        return room;
      };
      ConectManager.prototype.getMD5 = function(string) {
        var r = function() {
          this.hexcase = 0, this.b64pad = "";
        };
        r.prototype = {}, r.prototype.hex_md5 = function(e) {
          return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)));
        }, r.prototype.b64_md5 = function(e) {
          return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)));
        }, r.prototype.any_md5 = function(e, t) {
          return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t);
        }, r.prototype.hex_hmac_md5 = function(e, t) {
          return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
        }, r.prototype.b64_hmac_md5 = function(e, t) {
          return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
        }, r.prototype.any_hmac_md5 = function(e, t, n) {
          return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), n);
        }, r.prototype.md5_vm_test = function() {
          return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
        }, r.prototype.rstr_md5 = function(e) {
          return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length));
        }, r.prototype.rstr_hmac_md5 = function(e, t) {
          var n = this.rstr2binl(e);
          n.length > 16 && (n = this.binl_md5(n, 8 * e.length));
          for (var r = Array(16), i = Array(16), o = 0; o < 16; o++) r[o] = 909522486 ^ n[o], 
          i[o] = 1549556828 ^ n[o];
          var s = this.binl_md5(r.concat(this.rstr2binl(t)), 512 + 8 * t.length);
          return this.binl2rstr(this.binl_md5(i.concat(s), 640));
        }, r.prototype.rstr2hex = function(e) {
          try {
            this.hexcase;
          } catch (e) {
            this.hexcase = 0;
          }
          for (var t, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", i = 0; i < e.length; i++) t = e.charCodeAt(i), 
          r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
          return r;
        }, r.prototype.rstr2b64 = function(e) {
          try {
            this.b64pad;
          } catch (e) {
            this.b64pad = "";
          }
          for (var t = "", n = e.length, r = 0; r < n; r += 3) for (var i = e.charCodeAt(r) << 16 | (r + 1 < n ? e.charCodeAt(r + 1) << 8 : 0) | (r + 2 < n ? e.charCodeAt(r + 2) : 0), o = 0; o < 4; o++) 8 * r + 6 * o > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - o) & 63);
          return t;
        }, r.prototype.rstr2any = function(e, t) {
          var n, r, i, o, s, a = t.length, u = Array(Math.ceil(e.length / 2));
          for (n = 0; n < u.length; n++) u[n] = e.charCodeAt(2 * n) << 8 | e.charCodeAt(2 * n + 1);
          var c = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))), l = Array(c);
          for (r = 0; r < c; r++) {
            for (s = Array(), o = 0, n = 0; n < u.length; n++) o = (o << 16) + u[n], o -= (i = Math.floor(o / a)) * a, 
            (s.length > 0 || i > 0) && (s[s.length] = i);
            l[r] = o, u = s;
          }
          var f = "";
          for (n = l.length - 1; n >= 0; n--) f += t.charAt(l[n]);
          return f;
        }, r.prototype.str2rstr_utf8 = function(e) {
          for (var t, n, r = "", i = -1; ++i < e.length; ) t = e.charCodeAt(i), n = i + 1 < e.length ? e.charCodeAt(i + 1) : 0, 
          55296 <= t && t <= 56319 && 56320 <= n && n <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & n), 
          i++), t <= 127 ? r += String.fromCharCode(t) : t <= 2047 ? r += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? r += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (r += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
          return r;
        }, r.prototype.str2rstr_utf16le = function(e) {
          for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(255 & e.charCodeAt(n), e.charCodeAt(n) >>> 8 & 255);
          return t;
        }, r.prototype.str2rstr_utf16be = function(e) {
          for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) >>> 8 & 255, 255 & e.charCodeAt(n));
          return t;
        }, r.prototype.rstr2binl = function(e) {
          for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
          for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
          return t;
        }, r.prototype.binl2rstr = function(e) {
          for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
          return t;
        }, r.prototype.binl_md5 = function(e, t) {
          e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
          for (var n = 1732584193, r = -271733879, i = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
            var a = n, u = r, c = i, l = o;
            n = this.md5_ff(n, r, i, o, e[s + 0], 7, -680876936), o = this.md5_ff(o, n, r, i, e[s + 1], 12, -389564586), 
            i = this.md5_ff(i, o, n, r, e[s + 2], 17, 606105819), r = this.md5_ff(r, i, o, n, e[s + 3], 22, -1044525330), 
            n = this.md5_ff(n, r, i, o, e[s + 4], 7, -176418897), o = this.md5_ff(o, n, r, i, e[s + 5], 12, 1200080426), 
            i = this.md5_ff(i, o, n, r, e[s + 6], 17, -1473231341), r = this.md5_ff(r, i, o, n, e[s + 7], 22, -45705983), 
            n = this.md5_ff(n, r, i, o, e[s + 8], 7, 1770035416), o = this.md5_ff(o, n, r, i, e[s + 9], 12, -1958414417), 
            i = this.md5_ff(i, o, n, r, e[s + 10], 17, -42063), r = this.md5_ff(r, i, o, n, e[s + 11], 22, -1990404162), 
            n = this.md5_ff(n, r, i, o, e[s + 12], 7, 1804603682), o = this.md5_ff(o, n, r, i, e[s + 13], 12, -40341101), 
            i = this.md5_ff(i, o, n, r, e[s + 14], 17, -1502002290), r = this.md5_ff(r, i, o, n, e[s + 15], 22, 1236535329), 
            n = this.md5_gg(n, r, i, o, e[s + 1], 5, -165796510), o = this.md5_gg(o, n, r, i, e[s + 6], 9, -1069501632), 
            i = this.md5_gg(i, o, n, r, e[s + 11], 14, 643717713), r = this.md5_gg(r, i, o, n, e[s + 0], 20, -373897302), 
            n = this.md5_gg(n, r, i, o, e[s + 5], 5, -701558691), o = this.md5_gg(o, n, r, i, e[s + 10], 9, 38016083), 
            i = this.md5_gg(i, o, n, r, e[s + 15], 14, -660478335), r = this.md5_gg(r, i, o, n, e[s + 4], 20, -405537848), 
            n = this.md5_gg(n, r, i, o, e[s + 9], 5, 568446438), o = this.md5_gg(o, n, r, i, e[s + 14], 9, -1019803690), 
            i = this.md5_gg(i, o, n, r, e[s + 3], 14, -187363961), r = this.md5_gg(r, i, o, n, e[s + 8], 20, 1163531501), 
            n = this.md5_gg(n, r, i, o, e[s + 13], 5, -1444681467), o = this.md5_gg(o, n, r, i, e[s + 2], 9, -51403784), 
            i = this.md5_gg(i, o, n, r, e[s + 7], 14, 1735328473), r = this.md5_gg(r, i, o, n, e[s + 12], 20, -1926607734), 
            n = this.md5_hh(n, r, i, o, e[s + 5], 4, -378558), o = this.md5_hh(o, n, r, i, e[s + 8], 11, -2022574463), 
            i = this.md5_hh(i, o, n, r, e[s + 11], 16, 1839030562), r = this.md5_hh(r, i, o, n, e[s + 14], 23, -35309556), 
            n = this.md5_hh(n, r, i, o, e[s + 1], 4, -1530992060), o = this.md5_hh(o, n, r, i, e[s + 4], 11, 1272893353), 
            i = this.md5_hh(i, o, n, r, e[s + 7], 16, -155497632), r = this.md5_hh(r, i, o, n, e[s + 10], 23, -1094730640), 
            n = this.md5_hh(n, r, i, o, e[s + 13], 4, 681279174), o = this.md5_hh(o, n, r, i, e[s + 0], 11, -358537222), 
            i = this.md5_hh(i, o, n, r, e[s + 3], 16, -722521979), r = this.md5_hh(r, i, o, n, e[s + 6], 23, 76029189), 
            n = this.md5_hh(n, r, i, o, e[s + 9], 4, -640364487), o = this.md5_hh(o, n, r, i, e[s + 12], 11, -421815835), 
            i = this.md5_hh(i, o, n, r, e[s + 15], 16, 530742520), r = this.md5_hh(r, i, o, n, e[s + 2], 23, -995338651), 
            n = this.md5_ii(n, r, i, o, e[s + 0], 6, -198630844), o = this.md5_ii(o, n, r, i, e[s + 7], 10, 1126891415), 
            i = this.md5_ii(i, o, n, r, e[s + 14], 15, -1416354905), r = this.md5_ii(r, i, o, n, e[s + 5], 21, -57434055), 
            n = this.md5_ii(n, r, i, o, e[s + 12], 6, 1700485571), o = this.md5_ii(o, n, r, i, e[s + 3], 10, -1894986606), 
            i = this.md5_ii(i, o, n, r, e[s + 10], 15, -1051523), r = this.md5_ii(r, i, o, n, e[s + 1], 21, -2054922799), 
            n = this.md5_ii(n, r, i, o, e[s + 8], 6, 1873313359), o = this.md5_ii(o, n, r, i, e[s + 15], 10, -30611744), 
            i = this.md5_ii(i, o, n, r, e[s + 6], 15, -1560198380), r = this.md5_ii(r, i, o, n, e[s + 13], 21, 1309151649), 
            n = this.md5_ii(n, r, i, o, e[s + 4], 6, -145523070), o = this.md5_ii(o, n, r, i, e[s + 11], 10, -1120210379), 
            i = this.md5_ii(i, o, n, r, e[s + 2], 15, 718787259), r = this.md5_ii(r, i, o, n, e[s + 9], 21, -343485551), 
            n = this.safe_add(n, a), r = this.safe_add(r, u), i = this.safe_add(i, c), o = this.safe_add(o, l);
          }
          return Array(n, r, i, o);
        }, r.prototype.md5_cmn = function(e, t, n, r, i, o) {
          return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(r, o)), i), n);
        }, r.prototype.md5_ff = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(t & n | ~t & r, e, t, i, o, s);
        }, r.prototype.md5_gg = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(t & r | n & ~r, e, t, i, o, s);
        }, r.prototype.md5_hh = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(t ^ n ^ r, e, t, i, o, s);
        }, r.prototype.md5_ii = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(n ^ (t | ~r), e, t, i, o, s);
        }, r.prototype.safe_add = function(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }, r.prototype.bit_rol = function(e, t) {
          return e << t | e >>> 32 - t;
        };
        return new r().hex_md5(string);
      };
      ConectManager.prototype.sendRequest = function(code, SFSObject, SFSRoom) {
        void 0 === SFSRoom && (SFSRoom = null);
        SFSObject || (SFSObject = this.getSFSObj());
        if (!this.sfs.isConnected) {
          this.emitOnDisconnect();
          return;
        }
        this.sfs.send(new SFS2X.ExtensionRequest(code, SFSObject, SFSRoom));
      };
      ConectManager.prototype.sendRequestToCallback = function(code, SFSObject, callback, SFSRoom) {
        void 0 === SFSObject && (SFSObject = this.getSFSObj());
        void 0 === callback && (callback = null);
        void 0 === SFSRoom && (SFSRoom = null);
        callback && (this.objHandle[code] = callback);
        if (!this.sfs.isConnected) {
          this.emitOnDisconnect();
          return;
        }
        this.sfs.send(new SFS2X.ExtensionRequest(code, SFSObject, SFSRoom));
      };
      ConectManager.prototype.dangKyCallBackByCode = function(code, callback) {
        void 0 === callback && (callback = null);
        callback && (this.objHandle[code] = callback);
      };
      ConectManager.prototype.checkConnectAndConnect = function() {
        this.sfs.isConnected || this.connectToServer();
      };
      ConectManager.prototype.sendBuyIn = function(seri, pin, net, price) {
        var obj = new SFS2X.SFSObject();
        obj.putUtfString("seri", seri);
        obj.putUtfString("mathe", pin);
        obj.putInt("idplayer", 19);
        obj.putInt("amount", price);
        obj.putInt("chonmang", net);
        this.sendRequest(REQUEST_CODE_1.REQUEST_CODE.BuyIn, obj);
      };
      ConectManager.prototype.getSFSObj = function() {
        return new SFS2X.SFSObject();
      };
      ConectManager.prototype.getSFSArray = function() {
        return new SFS2X.SFSArray();
      };
      ConectManager.instance = null;
      return ConectManager;
    }();
    exports.ConectManager = ConectManager;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/PlayerPP": "PlayerPP",
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../DefineTs/TextDefine": "TextDefine",
    "../InfoERR": "InfoERR",
    "../Windown": "Windown"
  } ],
  ConfigScence: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48992TPY3JKm61NZslGflvJ", "ConfigScence");
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
    var Util_1 = require("./Util");
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConfgScence = function(_super) {
      __extends(ConfgScence, _super);
      function ConfgScence() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spBanNgay = null;
        _this.spBanDem = null;
        _this.spMain = null;
        _this.manifest = null;
        _this.json = null;
        _this.globalGameStoragePath = "";
        _this._am = null;
        _this.currentVersion = "";
        _this.newVersion = "";
        _this.countFail = 0;
        _this.listVerCheck = [];
        return _this;
      }
      ConfgScence.prototype.start = function() {
        Windown_1.Windown.keyEncrytps = "funMainLvd";
        var now = new Date();
        var hour = now.getHours();
        this.spMain.spriteFrame = hour >= 19 || hour < 5 ? this.spBanDem : this.spBanNgay;
        Windown_1.Windown.UIManager.initConfig();
        cc.sys.os == cc.sys.OS_WINDOWS && false ? this.finish() : this.getConfigLink();
        Util_1.Util.getIsSafe();
        this.scheduleOnce(function() {
          Windown_1.Windown.restartGame();
        }, 20);
      };
      ConfgScence.prototype.finish = function() {
        Windown_1.Windown.UIManager.showLoadingData();
        (cc.sys.os == cc.sys.OS_WINDOWS && false, cc.sys.isNative) || (Windown_1.Windown.IsSafe = true);
        cc.director.preloadScene("main", function(count, total) {
          Windown_1.Windown.UIManager.setPerData(count / total);
        }, function(err) {
          if (err) return;
          Windown_1.Windown.UIManager.hideLoadingData();
          Windown_1.Windown.UIManager.showLoading();
          cc.director.loadScene("main");
          Windown_1.Windown.getDeviceID();
        });
      };
      ConfgScence.prototype.getConfigLink = function() {
        var _this = this;
        var http = new XMLHttpRequest();
        http.open("GET", "https://carong-d9cee.web.app/index.html");
        http.onreadystatechange = function() {
          if (4 === http.readyState && http.status >= 200 && http.status < 300) {
            cc.log("data load duowc la " + http.responseText);
            if ("" == http.responseText) return;
            var data = null;
            data = JSON.parse(http.responseText);
            if (null == data) return;
            if (cc.sys.isBrowser) {
              Windown_1.Windown.Define.configNetwork.hostHttps = data.ServerNew;
              _this.finish();
              return;
            }
            _this.globalGameStoragePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
            _this.getConfigBundle(data.BundleUrl);
            if (cc.sys.isNative && true) {
              Windown_1.Windown.linkBundle = Windown_1.Windown.linkBundle.replace("%s", data.BundleUrl);
              Windown_1.Windown.linkFull = Windown_1.Windown.linkFull.replace("%s", data.BundleUrl);
              Windown_1.Windown.linkConfig = Windown_1.Windown.linkConfig.replace("%s", data.BundleUrl);
              Windown_1.Windown.Define.configNetwork.hostHttps = data.ServerNew;
              _this.initUrl(Windown_1.Windown.linkFull);
            }
          }
        };
        http.onerror = function() {
          _this.funGetConfigErr();
        };
        http.ontimeout = function() {
          _this.funGetConfigErr();
        };
        http.send();
      };
      ConfgScence.prototype.funGetConfigErr = function() {
        var _this = this;
        if (cc.sys.isBrowser) {
          Windown_1.Windown.Define.configNetwork.hostHttps = "207.148.90.121";
          this.finish();
          return;
        }
        this.scheduleOnce(function() {
          var String = '{"Server":"caxeng.win","BundleUrl":"http://bundlecaxeng.com/","Ver":["1.0.0","1.0.1"],"ServerNew":"caxeng.com"}';
          var data = JSON.parse(String);
          _this.getConfigBundle(data.BundleUrl);
          if (cc.sys.isNative && true) {
            Windown_1.Windown.linkBundle = Windown_1.Windown.linkBundle.replace("%s", data.BundleUrl);
            Windown_1.Windown.linkFull = Windown_1.Windown.linkFull.replace("%s", data.BundleUrl);
            Windown_1.Windown.linkConfig = Windown_1.Windown.linkConfig.replace("%s", data.BundleUrl);
            Windown_1.Windown.Define.configNetwork.hostHttps = data.ServerNew;
            _this.initUrl(Windown_1.Windown.linkFull);
          }
        }, 1);
      };
      ConfgScence.prototype.initConfigBundle = function(data) {
        if (null != data && "" != data) {
          var obj = JSON.parse(data);
          Windown_1.Windown.verChildGame = obj.VerGame || Windown_1.Windown.verChildGame;
          Windown_1.Windown.LIST_REMOVE_BUNDLE_GAME = obj.ListRemoveBundleGame || {};
          Windown_1.Windown.LIST_VERSION_REMOVE = obj.ListVersionRemove || [];
          this.listVerCheck = obj.VerCheckUpdate;
          this.checkListVerRemove();
        } else this.checkGameVersionGlobal();
      };
      ConfgScence.prototype.getConfigBundle = function(linkConfig) {
        var _this = this;
        if (!cc.sys.isNative) return;
        linkConfig += "ConfigBundle.txt";
        var http = new XMLHttpRequest();
        http.open("GET", linkConfig, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.onreadystatechange = function() {
          if (4 === http.readyState && http.status >= 200 && http.status < 300) {
            var obj = JSON.parse(http.responseText);
            if (null == obj) return;
            _this.initConfigBundle(http.responseText);
          }
        };
        http.send();
      };
      ConfgScence.prototype.versionCompareHandle = function(versionA, versionB) {
        this.currentVersion = "v" + versionA;
        this.newVersion = "v" + versionB;
        console.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      ConfgScence.prototype.globalCheckCb = function(event) {
        cc.log("GGGG Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this._am.setEventCallback(null);
          jsb.fileUtils.removeDirectory(this.globalGameStoragePath);
          setTimeout(function() {
            cc.audioEngine.stopAll();
            Windown_1.Windown.restartGame();
          }, 1e3);
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          console.log("ERROR_DOWNLOAD_MANIFEST , ERROR_PARSE_MANIFEST");
          this._am.setEventCallback(null);
          this.finish();
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
         case jsb.EventAssetsManager.UPDATE_FINISHED:
          cc.log("GGGG checkCb : Already up to date with the latest remote version.");
          this._am.setEventCallback(null);
          this.finish();
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          console.log("NEW_VERSION_FOUND");
          this._am.setEventCallback(null);
          this.globalUpdateGame();
          break;

         default:
          return;
        }
      };
      ConfgScence.prototype.globalUpdateGame = function() {
        cc.log("GGG globalUpdateGame ");
        if (this._am) {
          cc.log("GGG globalUpdateGame OK");
          this._am.setEventCallback(this.globalUpdateCb.bind(this));
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(JSON.stringify(this.json), this.globalGameStoragePath);
            this._am.loadLocalManifest(manifest, this.globalGameStoragePath);
          }
          this._am.update();
          Windown_1.Windown.UIManager.showLoadingData(this.currentVersion + "->" + this.newVersion);
        }
      };
      ConfgScence.prototype.globalUpdateCb = function(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          console.log("GGGG updateCb :No local manifest file found, hot update skipped.");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          Windown_1.Windown.UIManager.setPerData(event.getPercent());
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          console.log("GGGG updateCb Fail to download manifest file, hot update skipped.");
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          console.log("GGGG updateCb Already up to date with the latest remote version.");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("GGGG updateCb Update finished.");
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          console.log("GGGG updateCb Update failed. : " + event.getMessage());
          this._am.downloadFailedAssets();
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          console.log("GGGG updateCb Asset update error: " + event.getAssetId() + ", " + event.getMessage());
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          console.log("GGGG updateCb ERROR_DECOMPRESS : " + event.getMessage());
        }
        if (failed) {
          this._am.setEventCallback(null);
          this.finish();
        }
        if (needRestart) {
          this._am.setEventCallback(null);
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("SearchAssets", JSON.stringify(searchPaths));
          jsb.fileUtils.setSearchPaths(searchPaths);
          cc.audioEngine.stopAll();
          Windown_1.Windown.restartGame();
        }
      };
      ConfgScence.prototype.initUrl = function(url) {
        var uri = this.globalGameStoragePath + "/project.manifest";
        if (jsb.fileUtils.isFileExist(uri)) {
          var strTemp = jsb.fileUtils.getStringFromFile(uri);
          if (null != strTemp && "" != strTemp) {
            var obj = JSON.parse(strTemp);
            obj.packageUrl = url;
            obj.remoteManifestUrl = url + "project.manifest";
            obj.remoteVersionUrl = url + "version.manifest";
            var strWirte = JSON.stringify(obj);
            jsb.fileUtils.writeStringToFile(strWirte, this.globalGameStoragePath + "/project.manifest");
          }
        }
        console.log("url: " + url);
        this.json = this.manifest.json;
        this.json.packageUrl = url;
        this.json.remoteManifestUrl = url + "project.manifest";
        this.json.remoteVersionUrl = url + "version.manifest";
      };
      ConfgScence.prototype.checkGameVersionGlobal = function() {
        cc.log("GGGG checkGameVersionGlobal");
        if (!cc.sys.isNative) {
          this.finish();
          return;
        }
        this.globalGameStoragePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
        this._am = new jsb.AssetsManager("", this.globalGameStoragePath, this.versionCompareHandle.bind(this));
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var manifest = new jsb.Manifest(JSON.stringify(this.json), this.globalGameStoragePath);
          this._am.loadLocalManifest(manifest, this.globalGameStoragePath);
        }
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          return compressed, true;
        });
        this._am.setEventCallback(this.globalCheckCb.bind(this));
        this._am.checkUpdate();
      };
      ConfgScence.prototype.checkListVerRemove = function() {
        var verMe = cc.sys.localStorage.getItem("verControll") || "1.0.2";
        if (!cc.sys.isNative || !this.listVerCheck.includes(verMe)) {
          Windown_1.Windown.IsSafe = false;
          this.finish();
          return;
        }
        Windown_1.Windown.IsSafe = true;
        console.log("isSafenative: " + Windown_1.Windown.IsSafeNative);
        var isSafeNativeCache = cc.sys.localStorage.getItem("isSafeNative");
        if ("1.0.2" != verMe && "1.0.0" != verMe && "-1" != Windown_1.Windown.IsSafeNative && null == isSafeNativeCache) if ("" == Windown_1.Windown.IsSafeNative) Windown_1.Windown.IsSafe = false; else if ("null" == Windown_1.Windown.IsSafeNative) Windown_1.Windown.IsSafe = false; else if ("true" == Windown_1.Windown.IsSafeNative) {
          Windown_1.Windown.IsSafe = true;
          cc.sys.localStorage.setItem("isSafeNative", "true");
        }
        var uri = this.globalGameStoragePath + "/project.manifest";
        if (jsb.fileUtils.isFileExist(uri)) {
          var strTemp = jsb.fileUtils.getStringFromFile(uri);
          var obj = JSON.parse(strTemp);
          if (Windown_1.Windown.LIST_VERSION_REMOVE.includes(obj.version)) {
            jsb.fileUtils.removeDirectory(this.globalGameStoragePath);
            setTimeout(function() {
              cc.audioEngine.stopAll();
              Windown_1.Windown.restartGame();
            }, 1e3);
          } else this.checkGameVersionGlobal();
        } else this.checkGameVersionGlobal();
      };
      __decorate([ property(cc.SpriteFrame) ], ConfgScence.prototype, "spBanNgay", void 0);
      __decorate([ property(cc.SpriteFrame) ], ConfgScence.prototype, "spBanDem", void 0);
      __decorate([ property(cc.Sprite) ], ConfgScence.prototype, "spMain", void 0);
      __decorate([ property(cc.JsonAsset) ], ConfgScence.prototype, "manifest", void 0);
      ConfgScence = __decorate([ ccclass ], ConfgScence);
      return ConfgScence;
    }(cc.Component);
    exports.default = ConfgScence;
    cc._RF.pop();
  }, {
    "./Util": "Util",
    "./Windown": "Windown"
  } ],
  CreatBot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e0ceHObk1NjLgTYH3rGxS/", "CreatBot");
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
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listTen = [ "123", "ha", "duc", "mai", "88", "68", "99", "hung", "trong", "thuan", "minh", "8686", "bao", "tuan", "tung", "cong", "tam", "son", "dien", "tuan", "son", "44", "111", "anh", "trang", "phuong", "huong", "be", "thuong", "thai", "tram", "duy", "99", "kien", "long", "giang", "xiu", "vy", "hoa", "hoan", "truong", "binh", "an", "tan", "vip", "tuyet", "viet", "vu", "miu", "193", "2000", "hao", "loan", "chich", "ding", "phong", "phu", "nam", "la", "trai", "thi", "my", "mee", "ngoc", "dao", "hung", "mr", "tien", "vua", "tra", "chien", "than", "thuy", "lee", "ton", "tinh", "hien", "hanh", "phuc", "minh", "hoang", "min", "hd", "chill", "hihi", "za", "zin", "shin", "peter", "ronan", "gia", "ivery", "anh", "thanh", "van", "tuan", "tu", "turn", "nice", "gree", "gee", "ber", "do", "phi", "ho", "uyen", "du", "hoc", "kevin", "kyty", "tien", "tao", "dep", "le", "hai", "tran", "nguyen", "dinh", "za", "em", "tap", "ban", "bui", "thuy", "hieu", "co", "no", "ong", "dam", "tuan", "hien", "dinh", "quang", "xinh", "hung", "hurn", "bulon", "hoang", "dont", "hnd", "adam", "mir", "het", "binh", "mau", "xi", "to", "mix", "hoa", "hong", "cu", "gai", "kim", "bum", "kye", "song", "jong", "tony", "deep", "kien", "dung", "see", "may", "teen", "zuzu", "ngoc", "kaka", "rody" ];
        _this.userName = "";
        _this.userPass = "";
        _this.stringTemp = "abcdefghijklmnopqrstuvwxyz0123456789";
        _this.isSignUp = false;
        _this.isLogin = false;
        return _this;
      }
      NewClass.prototype.getNewData = function() {
        while (this.userName.length < 6 || this.userName.length > 18) {
          this.userName = "";
          for (var i = 0; i < 3; i++) {
            this.userName += this.listTen[Windown_1.Windown.RandomNumber(0, this.listTen.length)];
            Windown_1.Windown.RandomNumber(0, 11) < 3 && (this.userName += this.stringTemp[Windown_1.Windown.RandomNumber(0, this.stringTemp.length)]);
          }
        }
        while (this.userPass.length < 6 || this.userPass.length > 18) {
          this.userPass = "";
          for (var i = 0; i < 3; i++) this.userPass += this.listTen[Windown_1.Windown.RandomNumber(0, this.listTen.length)];
        }
      };
      NewClass.prototype.sendSignUp = function() {
        this.getNewData();
        var params = ConectManager_1.ConectManager.getIns().getSFSObj();
        params.putUtfString("username", this.userName);
        Windown_1.Windown.RandomNumber(0, 100) < 20 && params.putUtfString("nickname", this.userName);
        params.putUtfString("password", this.userPass);
        params.putInt("deviceOS", Windown_1.Windown.getOS());
        params.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        params.putInt("isBot", 1);
        params.putInt("idAva", Windown_1.Windown.RandomNumber(0, 17));
        var listPointLevel = [ 188, 282, 424, 635, 952, 1427, 2139, 3206, 4806 ];
        var level = Windown_1.Windown.RandomNumber(0, 12);
        level > 7 && (level = 7);
        var pointLevel = Windown_1.Windown.RandomNumber(0, listPointLevel[level]);
        params.putInt("level", level);
        params.putInt("levelPoint", pointLevel);
        params.putInt("levelPointTotal", listPointLevel[level + 1]);
        params.putUtfString("captcha", "");
        var money = 0;
        money = level < 3 ? 10 * Windown_1.Windown.RandomNumber(1e3, 2e4) : level < 5 ? 10 * Windown_1.Windown.RandomNumber(5e3, 3e4) : 10 * Windown_1.Windown.RandomNumber(3e4, 1e5);
        params.putLong("money", money);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.SignUp, params, this.reviceServer.bind(this));
        ConectManager_1.ConectManager.getIns().dangKyCallBackByCode(REQUEST_CODE_1.REQUEST_CODE.Login, this.reviceServerLogin.bind(this));
      };
      NewClass.prototype.sendLogin = function(userName, userPass) {
        this.userName = userName;
        this.userPass = userPass;
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("username", this.userName);
        SFSObject.putUtfString("password", this.userPass);
        SFSObject.putInt("deviceOS", Windown_1.Windown.getOS());
        SFSObject.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.Login, SFSObject, this.reviceServerLogin.bind(this));
      };
      NewClass.prototype.reviceServer = function(SFSObject) {
        SFSObject.containsKey("errorMessage") ? this.sendSignUp() : this.isSignUp = true;
      };
      NewClass.prototype.reviceServerLogin = function(SFSObject) {
        if (SFSObject.containsKey("errorMessage")) this.sendSignUp(); else {
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          ConectManager_1.ConectManager.getIns().sfs.enableLagMonitor(true);
          Windown_1.Windown.initUser(SFSObject);
          Windown_1.Windown.initConfig(SFSObject.getUtfString("dataConfig"));
          Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
          Windown_1.Windown.MainView.initUIUser();
          this.isLogin = true;
          Windown_1.Windown.BotController.onLogin();
        }
      };
      NewClass.prototype.removeUser = function() {
        ConectManager_1.ConectManager.getIns().sendRequestToCallback("removeBot", null, this.responseRemove.bind(this));
      };
      NewClass.prototype.responseRemove = function(SFSObject) {
        !SFSObject.containsKey("errorMessage");
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown"
  } ],
  CropImgAva: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b5a8O29tBGo66AiRH/JXd1", "CropImgAva");
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
    var ClearCacheBase64_1 = require("../../ClearCacheBase64");
    var Util_1 = require("../../Util");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CropImg = function(_super) {
      __extends(CropImg, _super);
      function CropImg() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spMain = null;
        _this.nodeCrop = null;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.widthImg = 0;
        _this.heightImg = 0;
        _this.isRow = false;
        return _this;
      }
      CropImg.prototype.onLoad = function() {
        this.spMain.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        Windown_1.Windown.CropImgAva = this;
        this.offsetX = cc.winSize.width / 2;
        this.offsetY = cc.winSize.height / 2;
        this.spMain.addComponent(ClearCacheBase64_1.default).isEmitDisble = true;
      };
      CropImg.prototype.onDestroy = function() {
        Windown_1.Windown.CropImgAva = null;
      };
      CropImg.prototype.onEnable = function() {
        this.nodeCrop.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
      };
      CropImg.prototype.touchStart = function(touch) {
        var v2Touch = cc.v2(touch.getLocation()).subSelf(cc.v2(this.offsetX, this.offsetY));
      };
      CropImg.prototype.touchMove = function(touch) {
        var v2Touch = cc.v2(touch.getLocation()).subSelf(cc.v2(this.offsetX, this.offsetY));
        var heiCrop = this.nodeCrop.height;
        var widCrop = this.nodeCrop.width;
        var x = v2Touch.x;
        var y = v2Touch.y;
        x > this.widthImg / 2 - widCrop / 2 ? x = this.widthImg / 2 - widCrop / 2 : x < widCrop / 2 - this.widthImg / 2 && (x = widCrop / 2 - this.widthImg / 2);
        y > this.heightImg / 2 - heiCrop / 2 ? y = this.heightImg / 2 - heiCrop / 2 : y < heiCrop / 2 - this.heightImg / 2 && (y = heiCrop / 2 - this.heightImg / 2);
        this.nodeCrop.setPosition(x, y);
      };
      CropImg.prototype.touchEnd = function(touch) {
        var v2Touch = cc.v2(touch.getLocation()).subSelf(cc.v2(this.offsetX, this.offsetY));
      };
      CropImg.prototype.onDisable = function() {
        this.nodeCrop.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
      };
      CropImg.prototype.show = function(base64) {
        return __awaiter(this, void 0, void 0, function() {
          var spf, wid, height, scaleH;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.spMain.spriteFrame && cc.path.basename(this.spMain.spriteFrame.getTexture().nativeUrl).indexOf("base64") - -1) {
                cc.assetManager.releaseAsset(this.spMain.spriteFrame.getTexture());
                cc.assetManager.releaseAsset(this.spMain.spriteFrame);
                this.spMain.spriteFrame = null;
              }
              return [ 4, Windown_1.Windown.getSpFrameByBase64(base64) ];

             case 1:
              spf = _a.sent();
              this.spMain.spriteFrame = spf;
              wid = this.spMain.node.width;
              height = this.spMain.node.height;
              scaleH = 360 / height;
              this.spMain.node.scale = scaleH;
              wid * scaleH < height * scaleH ? this.nodeCrop.setContentSize(wid * scaleH + 4, wid * scaleH + 4) : this.nodeCrop.setContentSize(height * scaleH + 4, height * scaleH + 4);
              this.widthImg = wid * scaleH;
              this.heightImg = height * scaleH;
              this.isRow = wid > height;
              this.nodeCrop.setPosition(0, 0);
              return [ 2 ];
            }
          });
        });
      };
      CropImg.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      CropImg.prototype.onClickXacNhan = function() {
        var width = this.spMain.node.width < this.spMain.node.height ? this.spMain.node.width : this.spMain.node.height;
        var offsetX = cc.Vec2.distance(cc.v2(-this.widthImg / 2, 0), cc.v2(this.nodeCrop.x - this.nodeCrop.width / 2, 0)) * (1 / this.spMain.node.scale);
        var offsetY = cc.Vec2.distance(cc.v2(0, this.heightImg / 2), cc.v2(0, this.nodeCrop.y + this.nodeCrop.height / 2)) * (1 / this.spMain.node.scale);
        this.isRow ? offsetY = 0 : offsetX = 0;
        width + offsetX > this.spMain.node.width && (offsetX = 0);
        width + offsetY > this.spMain.node.height && (offsetY = 0);
        var obj = {};
        obj.offsetX = Math.round(offsetX);
        obj.offsetY = Math.round(offsetY);
        obj.width = width;
        obj.height = width;
        var string = JSON.stringify(obj);
        Windown_1.Windown.UIManager.showLoading();
        cc.sys.isNative ? Util_1.Util.onCropImg(string) : Windown_1.Windown.DoiAva.cropImgInWeb(string);
        this.onClickClose();
      };
      __decorate([ property(cc.Sprite) ], CropImg.prototype, "spMain", void 0);
      __decorate([ property(cc.Node) ], CropImg.prototype, "nodeCrop", void 0);
      CropImg = __decorate([ ccclass ], CropImg);
      return CropImg;
    }(cc.Component);
    exports.default = CropImg;
    cc._RF.pop();
  }, {
    "../../ClearCacheBase64": "ClearCacheBase64",
    "../../Util": "Util",
    "../../Windown": "Windown"
  } ],
  CuaHang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76fbafv+w9BGquaFcCENCvK", "CuaHang");
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
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var BaseCuaHang_1 = require("./BaseCuaHang");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CuaHang = function(_super) {
      __extends(CuaHang, _super);
      function CuaHang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.perChange = 1;
        _this.max = 1;
        _this.currentValue = 1;
        _this.currentMoney = 1;
        _this.moneyFix = 0;
        _this.curentType = 1;
        _this.soLuong = null;
        _this.btnAdd = null;
        _this.btnSub = null;
        return _this;
      }
      CuaHang.prototype.onLoad = function() {
        Windown_1.Windown.CuaHang = this;
      };
      CuaHang.prototype.show = function() {
        this.onClickCloseInfo();
        Windown_1.Windown.UIManager.showLoading();
        cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.GetConfigCuaHang, this.responseServer, this);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetConfigCuaHang, null);
        Windown_1.Windown.actionEffectOpen(this.node, function() {});
      };
      CuaHang.prototype.responseServer = function(obj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = obj.getSFSArray("list");
        var itemTemplate = this.parentItem.children[0];
        cc.log("chay vao day ne:" + Windown_1.Windown.SFSArrToJson(sfsArr));
        var countChild = 0;
        for (var i = 0, l = sfsArr.size(); i < l; i++) {
          var sfsObj = sfsArr.getSFSObject(i);
          if (sfsObj.containsKey("close")) continue;
          var node = this.parentItem.children[countChild];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          node.active = true;
          node.stopAllActions();
          node.runAction(cc.sequence(cc.delayTime(.05 * countChild), cc.scaleTo(.2, 1).easing(cc.easeBackOut())));
          var spItem = node.children[0].getComponent(cc.Sprite);
          var lbMoney = node.children[3].getComponent(cc.Label);
          var button = node.getComponent(cc.Button);
          spItem.spriteFrame = this.getSFByType(sfsObj.get("type"));
          lbMoney.string = Windown_1.Windown.formatNumber(sfsObj.get("money"));
          button.clickEvents[0].customEventData = Windown_1.Windown.SFSObjToJson(sfsObj);
          countChild++;
        }
        for (var i = sfsArr.size(); i < this.parentItem.childrenCount; i++) this.parentItem.children[i].active = true;
        this.isInit = true;
      };
      CuaHang.prototype.responseServerBuyItem = function(obj) {
        Windown_1.Windown.Dialog.checkAndShowLog(obj, true);
        var type = obj.get("type");
        var amount = obj.get("amount");
        var objInfo = Windown_1.Windown.listConfigItem.find(function(element) {
          return element.ItemId == type;
        });
        var string = "Mua th\xe0nh c\xf4ng v\u1eadt ph\u1ea9m " + objInfo.ItemName + " , S\u1ed1 l\u01b0\u1ee3ng: " + amount;
        Windown_1.Windown.Dialog.showLog(string);
        this.onClickCloseInfo();
      };
      CuaHang.prototype.onClickButton = function(event, data) {
        var obj = Object.create(null);
        try {
          obj = JSON.parse(data);
        } catch (e) {
          console.error(e);
        }
        if (null == obj["type"] || null == obj["money"]) {
          this.nodeInfo.active = false;
          return;
        }
        this.nodeInfo.active = true;
        var objInfo = Windown_1.Windown.listConfigItem.find(function(element) {
          return element.ItemId == obj["type"];
        });
        cc.find("img", this.nodeInfo).getComponent(cc.Sprite).spriteFrame = this.getSFByType(objInfo.ItemId);
        var listLb = cc.find("parentInfo", this.nodeInfo).getComponentsInChildren(cc.Label);
        listLb[0].string = objInfo.ItemName;
        listLb[1].string = Windown_1.Windown.formatNumber(obj["money"]);
        listLb[2].string = objInfo.Description;
        this.perChange = obj["min"];
        this.currentValue = obj["min"];
        this.max = obj["max"];
        this.currentMoney = obj["money"];
        this.curentType = obj["type"];
        this.onClickChangeValue(null, "");
      };
      CuaHang.prototype.onClickChangeValue = function(event, data) {
        var lbNum = cc.find("editbox/num", this.soLuong).getComponent(cc.Label);
        var lbMoney = cc.find("money", this.soLuong).getComponent(cc.Label);
        "+" == data ? this.currentValue += this.perChange : "-" == data && (this.currentValue -= this.perChange);
        this.btnAdd.interactable = true;
        this.btnSub.interactable = true;
        if (this.currentValue >= this.max) {
          this.currentValue = this.max;
          this.btnAdd.interactable = false;
        } else if (this.currentValue <= this.perChange) {
          this.currentValue = this.perChange;
          this.btnSub.interactable = false;
        }
        lbNum.string = this.currentValue.toString();
        lbMoney.string = "T\u1ed5ng: " + Windown_1.Windown.formatNumber(this.currentValue * this.currentMoney);
      };
      CuaHang.prototype.onClickBuy = function() {
        Windown_1.Windown.UIManager.showLoading();
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("type", this.curentType);
        obj.putInt("amount", this.currentValue);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.BuyItem, obj);
        cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.BuyItem, this.responseServerBuyItem, this);
      };
      CuaHang.prototype.onClickCloseInfo = function() {
        this.nodeInfo.active = false;
      };
      __decorate([ property(cc.Node) ], CuaHang.prototype, "soLuong", void 0);
      __decorate([ property(cc.Button) ], CuaHang.prototype, "btnAdd", void 0);
      __decorate([ property(cc.Button) ], CuaHang.prototype, "btnSub", void 0);
      CuaHang = __decorate([ ccclass ], CuaHang);
      return CuaHang;
    }(BaseCuaHang_1.default);
    exports.default = CuaHang;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    "./BaseCuaHang": "BaseCuaHang"
  } ],
  DangKy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8b2fJyyChER5D1au1YxnZ1", "DangKy");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DangKy = function(_super) {
      __extends(DangKy, _super);
      function DangKy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserName = null;
        _this.edbNickName = null;
        _this.edbUserPass = null;
        _this.edbUserRePass = null;
        _this.edbCaptcha = null;
        return _this;
      }
      DangKy.prototype.onLoad = function() {
        Windown_1.Windown.DangKy = this;
      };
      DangKy.prototype.start = function() {
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
        this.resignEdb(this.edbUserName);
        this.resignEdb(this.edbNickName);
        this.resignEdb(this.edbUserPass);
        this.resignEdb(this.edbUserRePass);
        this.resignNext(this.edbUserName, "edbNickName");
        this.resignNext(this.edbNickName, "edbUserPass");
        this.resignNext(this.edbUserPass, "edbUserRePass");
      };
      DangKy.prototype.onClickDangKy = function() {
        if (this.edbUserName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.DangNhapNhoHon6);
          return;
        }
        if (this.edbNickName.string.length > 0 && this.edbNickName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NickNameNhoHon6);
          return;
        }
        if (this.edbUserPass.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauNhoHon6);
          return;
        }
        if (this.edbUserPass.string != this.edbUserRePass.string) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauKhongTrung);
          return;
        }
        ConectManager_1.ConectManager.getIns().sendSignUp(this.edbUserName.string, this.edbNickName.string, this.edbUserPass.string, this.edbCaptcha.string);
      };
      DangKy.prototype.onDestroy = function() {
        Windown_1.Windown.DangKy = null;
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
      };
      DangKy.prototype.clickRefeshCaptcha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      DangKy.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
      };
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbUserName", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbNickName", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbUserPass", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbUserRePass", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbCaptcha", void 0);
      DangKy = __decorate([ ccclass ], DangKy);
      return DangKy;
    }(BaseEditbox_1.default);
    exports.default = DangKy;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  DangNhap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e56a3rpsfFIZJduek0yoMKh", "DangNhap");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DangNhap = function(_super) {
      __extends(DangNhap, _super);
      function DangNhap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserName = null;
        _this.edbUserPass = null;
        _this.edbCaptcha = null;
        _this.toggleAuto = null;
        return _this;
      }
      DangNhap.prototype.start = function() {
        Windown_1.Windown.DangNhap = this;
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        var isDangNhap = Windown_1.Windown.getLocalStorage("autoLogin");
        if (isDangNhap) if ("true" == isDangNhap) {
          this.toggleAuto.check();
          var userName = Windown_1.Windown.getLocalStorage("userName");
          var password = Windown_1.Windown.getLocalStorage("userPass");
          if (userName && "" != userName && password && "" != password) {
            this.edbUserName.string = userName;
            this.edbUserPass.string = password;
            this.onClickDangNhap();
          }
        } else this.toggleAuto.uncheck(); else this.toggleAuto.uncheck();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangNhap, this);
        this.resignEdb(this.edbUserName);
        this.resignEdb(this.edbUserPass);
        this.resignNext(this.edbUserName, "edbUserPass");
      };
      DangNhap.prototype.onCheckAuto = function() {
        this.toggleAuto.isChecked ? Windown_1.Windown.setLocalStorage("autoLogin", "true") : Windown_1.Windown.setLocalStorage("autoLogin", "false");
      };
      DangNhap.prototype.onClickDangNhap = function() {
        if (this.edbUserName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.DangNhapNhoHon6);
          return;
        }
        if (this.edbUserPass.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauNhoHon6);
          return;
        }
        ConectManager_1.ConectManager.getIns().sendLogin(this.edbUserName.string, this.edbUserPass.string, this.edbCaptcha.string);
      };
      DangNhap.prototype.onDestroy = function() {
        Windown_1.Windown.DangNhap = null;
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangNhap, this);
      };
      DangNhap.prototype.clickRefeshCaptcha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      DangNhap.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
      };
      DangNhap.prototype.onClickQuenPass = function() {
        cc.sys.openURL("https://t.me/caxeng_reset_pass_bot?start=");
      };
      __decorate([ property(cc.EditBox) ], DangNhap.prototype, "edbUserName", void 0);
      __decorate([ property(cc.EditBox) ], DangNhap.prototype, "edbUserPass", void 0);
      __decorate([ property(cc.EditBox) ], DangNhap.prototype, "edbCaptcha", void 0);
      __decorate([ property(cc.Toggle) ], DangNhap.prototype, "toggleAuto", void 0);
      DangNhap = __decorate([ ccclass ], DangNhap);
      return DangNhap;
    }(BaseEditbox_1.default);
    exports.default = DangNhap;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  Dialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56258jF0npOIIwTyzr0Qs3w", "Dialog");
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
    var PlayerPP_1 = require("../../DefineTs/PlayerPP");
    var InfoERR_1 = require("../../InfoERR");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dialog = function(_super) {
      __extends(Dialog, _super);
      function Dialog() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnBuy = null;
        _this.btnXacNhan = null;
        return _this;
      }
      Dialog.prototype.checkAndShowLog = function(SFSObject, isShowSuccess) {
        void 0 === isShowSuccess && (isShowSuccess = true);
        Windown_1.Windown.UIManager.hideLoading();
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          this.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          throw new InfoERR_1.InfoErr("Loi");
        }
        isShowSuccess && SFSObject.containsKey(PlayerPP_1.PlayerPP.MESSAGE) && this.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.MESSAGE));
      };
      Dialog.prototype.showLog = function(str, fun) {
        void 0 === fun && (fun = null);
        this.node.stopAllActions();
        this.node.scale = 1;
        this.node.opacity = 255;
        this.node.active = true;
        this.btnBuy.active = false;
        cc.find("label", this.node).getComponent(cc.Label).string = str;
        if (null != fun) {
          this.fun = fun;
          this.btnBuy.active = true;
        }
      };
      Dialog.prototype.onClickClose = function() {};
      Dialog.prototype.onClickDongY = function() {
        null != this.fun && this.fun();
        this.onClickHuy();
      };
      Dialog.prototype.onClickHuy = function() {
        var _this = this;
        this.fun = null;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      __decorate([ property(cc.Node) ], Dialog.prototype, "btnBuy", void 0);
      __decorate([ property(cc.Node) ], Dialog.prototype, "btnXacNhan", void 0);
      Dialog = __decorate([ ccclass ], Dialog);
      return Dialog;
    }(cc.Component);
    exports.default = Dialog;
    cc._RF.pop();
  }, {
    "../../DefineTs/PlayerPP": "PlayerPP",
    "../../InfoERR": "InfoERR",
    "../../Windown": "Windown"
  } ],
  DoiAva: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba51fvrj5tBorC/gLfH5P+n", "DoiAva");
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
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var Util_1 = require("../../Util");
    var Windown_1 = require("../../Windown");
    var ItemDoiAva_1 = require("./ItemDoiAva");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DoiAva = function(_super) {
      __extends(DoiAva, _super);
      function DoiAva() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemDoiAva = null;
        _this.parentItem = null;
        _this.itemAvaCustom = null;
        _this.itemAvaFB = null;
        _this.currentFile = null;
        _this.currentBase64Crop = "";
        return _this;
      }
      DoiAva.prototype.onLoad = function() {
        Windown_1.Windown.DoiAva = this;
      };
      DoiAva.prototype.onDestroy = function() {
        Windown_1.Windown.DoiAva = null;
      };
      DoiAva.prototype.start = function() {
        var _this = this;
        Windown_1.Windown.actionEffectOpen(this.node, function() {
          _this.itemAvaCustom && (_this.itemAvaCustom.node.active = false);
          _this.itemAvaFB && (_this.itemAvaFB.node.active = false);
          (2 == Windown_1.Windown.User.typeAvarta || Windown_1.Windown.SFSInfouser.get("base64Ava")) && _this.creatItemCustom(Windown_1.Windown.SFSInfouser.get("base64Ava"));
          (1 == Windown_1.Windown.User.typeAvarta || Windown_1.Windown.SFSInfouser.containsKey("userFbId")) && _this.creatItemFb();
          for (var i = 0; i < 17; i++) {
            var node = cc.instantiate(_this.itemDoiAva);
            _this.parentItem.addChild(node);
            node.active = true;
            node.getComponent(ItemDoiAva_1.default).init(i);
          }
        });
      };
      DoiAva.prototype.responseChangeAva = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject);
        var id = SFSObject.getInt("id");
        var typeAvar = SFSObject.getInt("type");
        Windown_1.Windown.User.avatrId = id;
        Windown_1.Windown.SFSInfouser.putInt("idava", id);
        Windown_1.Windown.SFSInfouser.putInt("typeava", typeAvar);
        Windown_1.Windown.SFSInfouser.putText("base64Ava", this.currentBase64Crop);
        Windown_1.Windown.User.typeAvarta = typeAvar;
        Windown_1.Windown.User.avatrId = id;
        this.parentItem.children.forEach(function(item) {
          var cp = item.getComponent(ItemDoiAva_1.default);
          cp && cp.updateTich();
        });
        Windown_1.Windown.ThongTin.node.parent && Windown_1.Windown.ThongTin.updateAva(Windown_1.Windown.SFSInfouser);
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.updateAvatar(Windown_1.Windown.SFSInfouser);
        Windown_1.Windown.UIManager.hideLoading();
      };
      DoiAva.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
      };
      DoiAva.prototype.onClickAddAva = function() {
        cc.sys.isNative ? Util_1.Util.onGetImgInLibary() : this.addAvaInWeb();
      };
      DoiAva.prototype.creatItemCustom = function(base64, isClick) {
        void 0 === isClick && (isClick = false);
        if (null == this.itemAvaCustom) {
          var node = cc.instantiate(this.itemDoiAva);
          this.parentItem.insertChild(node, 1);
          node.active = true;
          this.itemAvaCustom = node.getComponent(ItemDoiAva_1.default);
        }
        this.itemAvaCustom.node.active = true;
        this.itemAvaCustom.initWithCustom(base64);
        if (isClick) {
          this.itemAvaCustom.nodeTick.active = false;
          this.itemAvaCustom.onClick();
        }
      };
      DoiAva.prototype.creatItemFb = function() {
        var idFb = Windown_1.Windown.SFSInfouser.getUtfString("userFbId");
        var token = Windown_1.Windown.SFSInfouser.getUtfString("tokenfacebook");
        if (null == this.itemAvaFB) {
          var node = cc.instantiate(this.itemDoiAva);
          var childCustom = this.parentItem.children[1];
          childCustom && 2 == childCustom.getComponent(ItemDoiAva_1.default).type ? this.parentItem.insertChild(node, 2) : this.parentItem.insertChild(node, 1);
          node.active = true;
          this.itemAvaFB = node.getComponent(ItemDoiAva_1.default);
        }
        this.itemAvaFB.node.active = true;
        this.itemAvaFB.initFb(idFb, token);
      };
      DoiAva.prototype.addAvaInWeb = function() {
        var _this = this;
        var fileUploader = null;
        false;
        fileUploader = document.getElementById("file-uploader");
        fileUploader.addEventListener("change", function(e) {
          var file = e.target.files[0];
          _this.currentFile = file;
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(readerEvent) {
            var base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            Windown_1.Windown.DoiAva.creatItemCustom(base64String);
            Windown_1.Windown.UIManager.showCropImg(base64String);
          };
        });
        fileUploader.click();
      };
      DoiAva.prototype.cropImgInWeb = function(jsonCrop) {
        var objCrop = JSON.parse(jsonCrop);
        var width = objCrop.width;
        var height = objCrop.height;
        var offsetX = objCrop.offsetX;
        var offsetY = objCrop.offsetY;
        var file = this.currentFile;
        var blobURL = URL.createObjectURL(file);
        var img = new Image();
        img.src = blobURL;
        img.onerror = function() {
          URL.revokeObjectURL(this.src);
          console.log("Cannot load image");
        };
        img.onload = function() {
          URL.revokeObjectURL(this.src);
          var canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          var quality = 150 / width;
          quality > 1 && (quality = 1);
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, offsetX, offsetY, width, height, 0, 0, width, height);
          canvas.toBlob(function(blob) {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(readerEvent) {
              var base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
              Windown_1.Windown.DoiAva.reviecNewBase64ToAddCustom(base64String);
              canvas.remove();
            };
          }, "image/jpeg", quality);
        };
      };
      DoiAva.prototype.reviecNewBase64ToAddCustom = function(base64) {
        Windown_1.Windown.UIManager.hideLoading();
        if ("null" == base64) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_CROP_IMG);
          return;
        }
        this.currentBase64Crop = base64;
        Windown_1.Windown.DoiAva.creatItemCustom(this.currentBase64Crop, true);
      };
      __decorate([ property(cc.Node) ], DoiAva.prototype, "itemDoiAva", void 0);
      __decorate([ property(cc.Node) ], DoiAva.prototype, "parentItem", void 0);
      DoiAva = __decorate([ ccclass ], DoiAva);
      return DoiAva;
    }(cc.Component);
    exports.default = DoiAva;
    cc._RF.pop();
  }, {
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Util": "Util",
    "../../Windown": "Windown",
    "./ItemDoiAva": "ItemDoiAva"
  } ],
  DoiBank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25157gwm6xCgZTHDyH9gG9J", "DoiBank");
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
    var REQUEST_CODE_1 = require("../../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../../InfoERR");
    var ConectManager_1 = require("../../../Network/ConectManager");
    var Windown_1 = require("../../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbMenhGiaBank = null;
        _this.lbCurrentNameBank = null;
        _this.lbNoteMenhGiaBank = null;
        _this.edbStkBank = null;
        _this.edbTtkBank = null;
        _this.contentBank = null;
        _this.scrItemBank = null;
        _this.currentMenhGia = 0;
        _this.currentMenhGiaBank = 0;
        _this.lastMenhGiaBankNode = null;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        cc.log("enable bank ne");
        this.initMenhGia();
        this.reset();
      };
      NewClass.prototype.reset = function() {
        this.edbStkBank.string = "";
        this.edbTtkBank.string = "";
        this.lbMenhGiaBank.string = "0 VN\u0110";
        this.currentMenhGiaBank = 0;
        this.lbCurrentNameBank.string = "Ch\u1ecdn ng\xe2n h\xe0ng";
        this.lbNoteMenhGiaBank.active = true;
      };
      NewClass.prototype.initMenhGia = function() {
        var list = Windown_1.Windown.ShopView.ArrInfoTranfer;
        if (null == list) return;
        this.offAllActiveBank();
        var listInfoNap = [];
        for (var i = 0, l = list.size(); i < l; i++) {
          var sfsObj = list.getSFSObject(i);
          1 == sfsObj.get("status") && 1 == sfsObj.getInt("type") && 6 == sfsObj.getInt("nhamangtype") && listInfoNap.push(sfsObj);
        }
        var parent = this.contentBank;
        var children = parent.children;
        var itemTemplate = children[0];
        listInfoNap.sort(function(a, b) {
          return a.getInt("requireVnd") - b.getInt("requireVnd");
        });
        for (var i = 0, l = listInfoNap.length; i < l; i++) {
          var sfsObj = listInfoNap[i];
          var node = children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = parent;
          }
          var listLb = node.getComponentsInChildren(cc.Label);
          listLb[0].string = Windown_1.Windown.formatNumber(sfsObj.getInt("requireVnd")) + "vnd";
          listLb[1].string = Windown_1.Windown.formatNumber(sfsObj.getInt("gold"));
          node.getComponent(cc.Button).clickEvents[0].customEventData = sfsObj.getInt("requireVnd").toString();
          node.scaleX = 0;
          node.opacity = 0;
          cc.Tween.stopAllByTarget(node);
          cc.tween(node).delay(.1 * i).to(.3, {
            scale: 1,
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
        for (var i = listInfoNap.length, l = children.length; i < l; i++) children[i].active = false;
      };
      NewClass.prototype.onClickDoiBank = function() {
        try {
          this.checkValidationDoiMomo();
          this.sendDoiBank();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      NewClass.prototype.sendDoiBank = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("cardAmount", this.currentMenhGia);
        SFSObject.putInt("cardType", 6);
        SFSObject.putUtfString("stk", this.edbStkBank.string);
        SFSObject.putUtfString("ttk", this.edbTtkBank.string);
        SFSObject.putUtfString("bn", this.lbCurrentNameBank.string);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject, this.responseDoiBank.bind(this));
      };
      NewClass.prototype.responseDoiBank = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
      };
      NewClass.prototype.onClickChooseBank = function() {
        var node = this.scrItemBank.node;
        node.stopAllActions();
        if (node.active) node.runAction(cc.sequence(cc.scaleTo(.3, 1, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
          node.active = false;
        }))); else {
          node.active = true;
          node.runAction(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()));
        }
      };
      NewClass.prototype.onClickItemBank = function(event, data) {
        cc.log(event);
        var node = event.target;
        var nameBank = node.getComponentInChildren(cc.Label).string;
        cc.log(nameBank);
        this.onClickChooseBank();
        this.lbCurrentNameBank.string = nameBank;
      };
      NewClass.prototype.onClickItemMenhGia = function(event, data) {
        this.offAllActiveBank();
        var menhGia = Number(data);
        this.currentMenhGia = menhGia;
        cc.Tween.stopAllByTarget(this.lbMenhGiaBank.node);
        this.lbMenhGiaBank.node.scale = 2;
        cc.tween(this.lbMenhGiaBank.node).to(.2, {
          scale: 1
        }).start();
        this.lbMenhGiaBank.string = Windown_1.Windown.formatNumber(menhGia) + " VN\u0110";
        this.lbNoteMenhGiaBank.active = false;
      };
      NewClass.prototype.offAllActiveBank = function() {
        this.lastMenhGiaBankNode && (cc.find("active", this.lastMenhGiaBankNode).active = false);
      };
      NewClass.prototype.nodeMenhGiaActiveBank = function(node) {
        cc.find("active", node).active = true;
        this.lastMenhGiaBankNode = node;
      };
      NewClass.prototype.checkValidationDoiMomo = function() {
        if (0 == this.currentMenhGia) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMenhGia);
        if ("" == this.edbStkBank.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullSdtBANK);
        if ("" == this.edbTtkBank.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullTtkBANK);
        if ("" == this.lbCurrentNameBank.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullBANK);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMenhGiaBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCurrentNameBank", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "lbNoteMenhGiaBank", void 0);
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "edbStkBank", void 0);
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "edbTtkBank", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "contentBank", void 0);
      __decorate([ property(cc.ScrollView) ], NewClass.prototype, "scrItemBank", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../../DefineTs/TextDefine": "TextDefine",
    "../../../InfoERR": "InfoERR",
    "../../../Network/ConectManager": "ConectManager",
    "../../../Windown": "Windown"
  } ],
  DoiTab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d96be3SsUdN0IR/grRmthjl", "DoiTab");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../InfoERR");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var DoiBank_1 = require("./Doi/DoiBank");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VT = 1;
    var MB = 2;
    var VN = 3;
    var MOMO = 4;
    var VB = 5;
    var DoiTab = function(_super) {
      __extends(DoiTab, _super);
      function DoiTab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCard = null;
        _this.nodeVDT = null;
        _this.edbStkMomo = null;
        _this.edbTtkMomo = null;
        _this.toggleVt = null;
        _this.content = null;
        _this.contentMomo = null;
        _this.toggleCard = null;
        _this.toggleVdt = null;
        _this.lbMenhGiaMomo = null;
        _this.lbNoteMenhGiaMomo = null;
        _this.doiBank = null;
        _this.currentMenhGia = 0;
        _this.currentTypeNhaMang = -1;
        _this.currentMenhGiaMomo = 0;
        _this.lastMenhGiaCardNode = null;
        _this.lastMenhGiaMomoNode = null;
        return _this;
      }
      DoiTab.prototype.onEnable = function() {};
      DoiTab.prototype.emitNewData = function() {
        this.nodeVDT.active && (this.currentTypeNhaMang = MOMO);
        this.initMenhGia();
      };
      DoiTab.prototype.reset = function() {
        this.toggleVdt.check();
        this.currentTypeNhaMang = VT;
        this.edbStkMomo.string = "";
        this.edbTtkMomo.string = "";
        this.lbMenhGiaMomo.string = "0 VN\u0110";
        this.currentMenhGia = 0;
      };
      DoiTab.prototype.resetChangeMomo = function() {
        this.edbStkMomo.string = "";
        this.edbTtkMomo.string = "";
        this.lbMenhGiaMomo.string = "0 VN\u0110";
        this.currentMenhGiaMomo = 0;
        this.lbNoteMenhGiaMomo.active = true;
      };
      DoiTab.prototype.toggleCardCheck = function(event, data) {
        cc.log("card check " + event.isChecked);
        if (event.isChecked) {
          this.nodeCard.active = true;
          this.nodeVDT.active = false;
          this.doiBank.node.active = false;
          this.toggleVt.check();
          this.currentTypeNhaMang = VT;
          this.initMenhGia();
        }
      };
      DoiTab.prototype.toggleVDTCheck = function(event, data) {
        if (event.isChecked) {
          this.nodeCard.active = false;
          this.nodeVDT.active = true;
          this.doiBank.node.active = false;
          this.resetChangeMomo();
          this.currentTypeNhaMang = MOMO;
          this.initMenhGia();
        }
      };
      DoiTab.prototype.toggleBankCheck = function(event, data) {
        if (event.isChecked) {
          this.nodeCard.active = false;
          this.nodeVDT.active = false;
          this.doiBank.node.active = true;
          this.doiBank.reset();
        }
      };
      DoiTab.prototype.toggleNhaMangCheck = function(event, data) {
        cc.log(event.node.name);
        if ("toggleVT" == event.node.name) {
          this.currentTypeNhaMang = VT;
          this.initMenhGia();
        } else if ("toggleMB" == event.node.name) {
          this.currentTypeNhaMang = MB;
          this.initMenhGia();
        } else if ("toggleVN" == event.node.name) {
          this.currentTypeNhaMang = VN;
          this.initMenhGia();
        } else if ("toggleVB" == event.node.name) {
          this.currentTypeNhaMang = VB;
          this.initMenhGia();
        }
      };
      DoiTab.prototype.initMenhGia = function() {
        var list = Windown_1.Windown.ShopView.ArrInfoTranfer;
        if (null == list) return;
        cc.log("init menh gia ne");
        this.offAllActive();
        this.offAllActiveMomo();
        var listInfoNap = [];
        for (var i = 0, l = list.size(); i < l; i++) {
          var sfsObj = list.getSFSObject(i);
          1 == sfsObj.get("status") && 1 == sfsObj.getInt("type") && sfsObj.getInt("nhamangtype") == this.currentTypeNhaMang && listInfoNap.push(sfsObj);
        }
        var children = this.currentTypeNhaMang == MOMO ? this.contentMomo.children : this.content.children;
        var parent = this.currentTypeNhaMang == MOMO ? this.contentMomo : this.content;
        var itemTemplate = children[0];
        listInfoNap.sort(function(a, b) {
          return a.getInt("requireVnd") - b.getInt("requireVnd");
        });
        for (var i = 0, l = listInfoNap.length; i < l; i++) {
          var sfsObj = listInfoNap[i];
          var node = children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = parent;
          }
          node.active = true;
          var listLb = node.getComponentsInChildren(cc.Label);
          listLb[0].string = Windown_1.Windown.formatNumber(sfsObj.getInt("requireVnd")) + "vnd";
          listLb[1].string = Windown_1.Windown.formatNumber(sfsObj.getInt("gold"));
          node.getComponent(cc.Button).clickEvents[0].customEventData = sfsObj.getInt("requireVnd").toString();
          node.scaleX = 0;
          node.opacity = 0;
          cc.Tween.stopAllByTarget(node);
          cc.tween(node).delay(.1 * i).to(.3, {
            scale: 1,
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
        for (var i = listInfoNap.length, l = children.length; i < l; i++) children[i].active = false;
      };
      DoiTab.prototype.onClickItemBtn = function(event, data) {
        this.offAllActive();
        var menhGia = Number(data);
        this.currentMenhGia = menhGia;
        this.nodeMenhGiaActive(event.target);
      };
      DoiTab.prototype.onClickItemMomoBtn = function(event, data) {
        this.offAllActiveMomo();
        var menhGia = Number(data);
        this.currentMenhGia = menhGia;
        cc.Tween.stopAllByTarget(this.lbMenhGiaMomo.node);
        this.lbMenhGiaMomo.node.scale = 2;
        cc.tween(this.lbMenhGiaMomo.node).to(.2, {
          scale: 1
        }).start();
        this.lbMenhGiaMomo.string = Windown_1.Windown.formatNumber(menhGia) + " VN\u0110";
        this.lbNoteMenhGiaMomo.active = false;
      };
      DoiTab.prototype.offAllActive = function() {
        this.lastMenhGiaCardNode && (cc.find("active", this.lastMenhGiaCardNode).active = false);
      };
      DoiTab.prototype.nodeMenhGiaActive = function(node) {
        cc.find("active", node).active = true;
        this.lastMenhGiaCardNode = node;
      };
      DoiTab.prototype.offAllActiveMomo = function() {
        this.lastMenhGiaMomoNode && (cc.find("active", this.lastMenhGiaMomoNode).active = false);
      };
      DoiTab.prototype.nodeMenhGiaActiveMomo = function(node) {
        cc.find("active", node).active = true;
        this.lastMenhGiaMomoNode = node;
      };
      DoiTab.prototype.onClickDoi = function() {
        cc.log("type: " + this.currentTypeNhaMang);
        try {
          this.checkValidationDoi();
          this.sendDoiCard();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      DoiTab.prototype.onClickDoiMomo = function() {
        try {
          this.checkValidationDoiMomo();
          this.sendDoiMomo();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      DoiTab.prototype.sendDoiCard = function() {
        if (Windown_1.Windown.User.currentLevel < 4) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NEED_LEVEL_C_OUT.formatString(4));
          return;
        }
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("cardAmount", this.currentMenhGia);
        SFSObject.putInt("cardType", this.currentTypeNhaMang);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject, this.responseDoiCard.bind(this));
        Windown_1.Windown.UIManager.showLoading();
      };
      DoiTab.prototype.responseDoiCard = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
      };
      DoiTab.prototype.sendDoiMomo = function() {
        var _this = this;
        var string = "B\u1ea1n c\xf3 x\xe1c nh\u1eadn r\xfat " + Windown_1.Windown.formatNumber(this.currentMenhGia) + " v\u1ec1 t\xe0i kho\u1ea3n MOMO " + this.edbStkMomo.string + " ?(*L\u01b0u \xfd sai th\xf4ng tin s\u1ebd b\u1ecb m\u1ea5t ti\u1ec1n)";
        Windown_1.Windown.Dialog.showLog(string, function() {
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("cardAmount", _this.currentMenhGia);
          SFSObject.putInt("cardType", MOMO);
          SFSObject.putUtfString("stk", _this.edbStkMomo.string);
          SFSObject.putUtfString("ttk", _this.edbTtkMomo.string);
          ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject, _this.responseDoiCard.bind(_this));
          Windown_1.Windown.UIManager.showLoading();
        });
      };
      DoiTab.prototype.checkValidationDoi = function() {
        if (0 == this.currentMenhGia) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMenhGia);
      };
      DoiTab.prototype.checkValidationDoiMomo = function() {
        if (0 == this.currentMenhGia) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMenhGia);
        if ("" == this.edbStkMomo.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullSdtMomo);
        if ("" == this.edbTtkMomo.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullTtkMomo);
      };
      __decorate([ property(cc.Node) ], DoiTab.prototype, "nodeCard", void 0);
      __decorate([ property(cc.Node) ], DoiTab.prototype, "nodeVDT", void 0);
      __decorate([ property(cc.EditBox) ], DoiTab.prototype, "edbStkMomo", void 0);
      __decorate([ property(cc.EditBox) ], DoiTab.prototype, "edbTtkMomo", void 0);
      __decorate([ property(cc.Toggle) ], DoiTab.prototype, "toggleVt", void 0);
      __decorate([ property(cc.Node) ], DoiTab.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], DoiTab.prototype, "contentMomo", void 0);
      __decorate([ property(cc.Toggle) ], DoiTab.prototype, "toggleCard", void 0);
      __decorate([ property(cc.Toggle) ], DoiTab.prototype, "toggleVdt", void 0);
      __decorate([ property(cc.Label) ], DoiTab.prototype, "lbMenhGiaMomo", void 0);
      __decorate([ property(cc.Node) ], DoiTab.prototype, "lbNoteMenhGiaMomo", void 0);
      __decorate([ property(DoiBank_1.default) ], DoiTab.prototype, "doiBank", void 0);
      DoiTab = __decorate([ ccclass ], DoiTab);
      return DoiTab;
    }(cc.Component);
    exports.default = DoiTab;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../InfoERR": "InfoERR",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./Doi/DoiBank": "DoiBank"
  } ],
  DoiThangThai: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d350OuUi1AT5Btae92Oc1j", "DoiThangThai");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DoiThangThai = function(_super) {
      __extends(DoiThangThai, _super);
      function DoiThangThai() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbTrangThai = null;
        return _this;
      }
      DoiThangThai.prototype.onLoad = function() {
        Windown_1.Windown.DoiThangThai = this;
      };
      DoiThangThai.prototype.onDestroy = function() {
        Windown_1.Windown.DoiThangThai = null;
      };
      DoiThangThai.prototype.start = function() {
        Windown_1.Windown.actionEffectOpen(this.node, null);
      };
      DoiThangThai.prototype.onClickDoiTrangThai = function() {
        if (this.edbTrangThai.string.length < 1) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NullTrangThai);
          return;
        }
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("status", this.edbTrangThai.string);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.ChangeStatus, SFSObject, this.responseChangeStatus.bind(this));
      };
      DoiThangThai.prototype.responseChangeStatus = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject);
        var trangThai = SFSObject.getUtfString("status");
        Windown_1.Windown.User.status = trangThai;
        Windown_1.Windown.SFSInfouser.putUtfString("status", trangThai);
        Windown_1.Windown.ThongTin && Windown_1.Windown.ThongTin.node.parent && Windown_1.Windown.ThongTin.updateTrangThai(trangThai);
        this.onClickClose();
      };
      DoiThangThai.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
      };
      __decorate([ property(cc.EditBox) ], DoiThangThai.prototype, "edbTrangThai", void 0);
      DoiThangThai = __decorate([ ccclass ], DoiThangThai);
      return DoiThangThai;
    }(cc.Component);
    exports.default = DoiThangThai;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  DownloadProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0aefaLob9hMq7S5xnHNTMay", "DownloadProgress");
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
        _this.lbPro = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.lbPro.string = "0%";
      };
      NewClass.prototype.setPercent = function(getPercent) {
        if (null == this.node) return;
        if (isNaN(getPercent)) return;
        var num = 100 * getPercent;
        this.lbPro.string = num.toFixed(0) + "%";
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbPro", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  DragMiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d5cfgFfglIX61Uhpf9n7jL", "DragMiniGame");
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
    var Windown_1 = require("../Windown");
    var OffMiniGame_1 = require("./OffMiniGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._isMoveBtnMiniGame = false;
        _this._isTouch = false;
        _this._v2OffsetChange = null;
        _this._isDrag = false;
        _this._isMiniSize = false;
        _this.offsetX = 0;
        _this.offsety = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.offsetX = cc.winSize.width / 2;
        this.offsety = cc.winSize.height / 2;
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this);
      };
      NewClass.prototype._touchEnd = function(touch) {
        this._isTouch = false;
        touch.stopPropagation();
      };
      NewClass.prototype._touchMove = function(touch) {
        if (this._isTouch && !this._isDrag) {
          if (this.node.isRunEffect) return;
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsety));
          this.node.setPosition(target.add(this._v2OffsetChange));
          this._isMoveBtnMiniGame = true;
        }
        touch.stopPropagation();
      };
      NewClass.prototype._touchStart = function(touch) {
        var v2Touch = cc.v2(touch.getLocation());
        var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsety));
        this._v2OffsetChange = this.node.getPosition().subSelf(target);
        this._isMoveBtnMiniGame = false;
        this._isTouch = true;
        Windown_1.Windown.UIManager.checkShowMiniGame(this, false);
        touch.stopPropagation();
        if (this.node.isRunEffect) return;
      };
      NewClass.prototype.miniSize = function(isEffect) {
        void 0 === isEffect && (isEffect = true);
        this.node.stopAllActions();
        isEffect ? this.node.runAction(cc.fadeTo(.2, 90)) : this.node.opacity = 90;
        var cp = this.getComponent("TaiXiu");
        cp && cp.node && cp.miniSize();
      };
      NewClass.prototype.nomalSize = function() {
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(0));
        this._isMiniSize = false;
        Windown_1.Windown.UIManager.parentMiniGame.getComponentInChildren(OffMiniGame_1.default).onEvent();
        var cp = this.getComponent("TaiXiu");
        cp && cp.node && cp.normalSize();
      };
      NewClass.prototype.onToggleChangeSize = function(event, data) {
        this._isMiniSize = !this._isMiniSize;
        this._isMiniSize ? this.miniSize() : Windown_1.Windown.UIManager.checkShowMiniGame(this, false);
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.UIManager.parentMiniGame.getComponentInChildren(OffMiniGame_1.default)._touchStart(null);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./OffMiniGame": "OffMiniGame"
  } ],
  EVENT_MANAGER: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5fb52Ox00ZNz5hXr0iklV0b", "EVENT_MANAGER");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EVENT_MANAGER = void 0;
    var EVENT_MANAGER = function() {
      function EVENT_MANAGER() {}
      EVENT_MANAGER.onConnect = "onConnect";
      EVENT_MANAGER.onDisconnect = "onDisconnect";
      EVENT_MANAGER.onEnter = "onEnter";
      EVENT_MANAGER.onCloseXepHang = "onCloseXepHang";
      EVENT_MANAGER.LEVEL_UP = "LevelUp";
      EVENT_MANAGER.LOGIN = "Login";
      EVENT_MANAGER.GET_IMG_CHAT = "getImgChat";
      EVENT_MANAGER.CHANG_ROTATION = "changeRotation";
      return EVENT_MANAGER;
    }();
    exports.EVENT_MANAGER = EVENT_MANAGER;
    cc._RF.pop();
  }, {} ],
  Editboxcontroller: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fffc6BzktOBKYLD1N1DxYY", "Editboxcontroller");
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
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EditboxController = function(_super) {
      __extends(EditboxController, _super);
      function EditboxController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCacheEDB = null;
        _this.posCacheEDB = null;
        return _this;
      }
      EditboxController.prototype.onLoad = function() {
        Windown_1.Windown.EDBController = this;
        this.node.x = cc.winSize.width / 2;
        this.node.y = cc.winSize.height / 2;
        cc.game.addPersistRootNode(this.node);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      };
      EditboxController.prototype.onDestroy = function() {
        Windown_1.Windown.EDBController = null;
      };
      EditboxController.prototype.start = function() {};
      EditboxController.prototype.checkAndChangePositionEDB = function(edb, nodeMove) {
        if (!cc.sys.isMobile) return;
        var worldPos = edb.node.parent.convertToWorldSpaceAR(edb.node.getPosition());
        var viewPos = this.node.convertToNodeSpaceAR(worldPos);
        cc.log(viewPos.y);
        cc.log(worldPos.y);
        var offset = 185;
        cc.sys.os == cc.sys.OS_ANDROID && (offset = 225);
        if (viewPos.y < offset) {
          this.nodeCacheEDB = nodeMove;
          this.posCacheEDB = this.nodeCacheEDB.getPosition();
          this.nodeCacheEDB.stopAllActions();
          var y = offset - viewPos.y;
          this.nodeCacheEDB.runAction(cc.moveBy(.1, 0, y));
        }
      };
      EditboxController.prototype.endNodeEDB = function() {
        if (null != this.nodeCacheEDB && null != this.posCacheEDB) {
          this.nodeCacheEDB.stopAllActions();
          this.nodeCacheEDB.runAction(cc.moveTo(.1, this.posCacheEDB));
          this.nodeCacheEDB = null;
          this.posCacheEDB = null;
        }
      };
      EditboxController.prototype.onKeyDown = function(event) {
        switch (event.keyCode) {
         case 6:
          break;

         case cc.macro.KEY.enter:
          cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onEnter);
          break;

         case cc.macro.KEY.f5:
          Windown_1.Windown.restartGame();
        }
      };
      EditboxController = __decorate([ ccclass ], EditboxController);
      return EditboxController;
    }(cc.Component);
    exports.default = EditboxController;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../Windown": "Windown"
  } ],
  EffectTakeCoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "325aeIsf3VBooCay0XKazRM", "EffectTakeCoin");
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
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var LbMoneyChange_1 = require("../Obs/LbMoneyChange");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bkgAnhSang = null;
        _this.itemCoin = null;
        _this.nodeMoney = null;
        _this.nodeClick = null;
        _this.actionMove = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.show = function(moneyTotal, posStartMoney, moneyRevice) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var action, lengthChip, _loop_1, this_1, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.bkgAnhSang.active = true;
                this.nodeMoney.active = false;
                this.bkgAnhSang.setPosition(posStartMoney);
                this.activeNodeMoney();
                action = null;
                action = this.actionMove ? this.actionMove : cc.bezierTo(1.3, [ cc.Vec2.lerp(cc.Vec2.ONE, posStartMoney, this.nodeMoney.getPosition(), .3).addSelf(cc.v2(150, 150)), cc.Vec2.lerp(cc.Vec2.ONE, posStartMoney, this.nodeMoney.getPosition(), .7).subSelf(cc.v2(150, 150)), this.nodeMoney.getPosition() ]);
                lengthChip = 22;
                lengthChip = moneyRevice < 2e4 ? 7 : moneyRevice < 5e4 ? 15 : 22;
                _loop_1 = function(i) {
                  var item;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      cc.log("chay vao coin r nay");
                      item = cc.instantiate(this_1.itemCoin);
                      item.active = true;
                      item.parent = this_1.node;
                      item.setPosition(posStartMoney);
                      item.runAction(cc.sequence(cc.spawn(cc.rotateBy(1.3, Windown_1.Windown.RandomNumber(720, 1440)), action.clone(), cc.sequence(cc.delayTime(1), cc.scaleBy(.3, .5))), cc.callFunc(function() {
                        if (0 == i) {
                          var audi0 = Windown_1.Windown.AudioManager;
                          _this.setMoneyBox(moneyTotal, .05 * lengthChip);
                          audi0.playEffect(audi0.tienRoi, 1, true);
                        } else if (i == lengthChip - 1) {
                          var audi0 = Windown_1.Windown.AudioManager;
                          audi0.stopEffect(audi0.tienRoi, true);
                        }
                        if (i % 3 == 0) {
                          var itemClick_1 = cc.instantiate(_this.nodeClick);
                          itemClick_1.active = true;
                          itemClick_1.parent = _this.node;
                          itemClick_1.position = item.position;
                          itemClick_1.scale = .5;
                          itemClick_1.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.callFunc(function() {
                            itemClick_1.destroy();
                          })));
                        }
                        item.destroy();
                      })));
                      return [ 4, this_1.makeDelay(.05) ];

                     case 1:
                      _a.sent();
                      return [ 2 ];
                    }
                  });
                };
                this_1 = this;
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < lengthChip)) return [ 3, 4 ];
                return [ 5, _loop_1(i) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                this.bkgAnhSang.active = false;
                return [ 4, this.makeDelay(1) ];

               case 5:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.setAction = function(action) {
        this.actionMove = action;
      };
      NewClass.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.scheduleOnce(resolve, time);
        });
      };
      NewClass.prototype.activeNodeMoney = function() {
        this.nodeMoney.active = true;
        var lb = this.nodeMoney.getComponentInChildren(LbMoneyChange_1.default);
        lb.resetLb();
        lb.setMoneyNoTime(Windown_1.Windown.User.userAg);
        this.nodeMoney.opacity = 0;
        this.nodeMoney.stopAllActions();
        this.nodeMoney.runAction(cc.fadeIn(.5));
      };
      NewClass.prototype.setMoneyBox = function(money, time) {
        var _this = this;
        var lb = this.nodeMoney.getComponentInChildren(LbMoneyChange_1.default);
        lb.time = time;
        lb.setMoney(money);
        this.nodeMoney.stopAllActions();
        this.nodeMoney.runAction(cc.sequence(cc.delayTime(time + 1), cc.fadeOut(.3), cc.callFunc(function() {
          _this.node.destroy();
        })));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetAccountBlance, null);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgAnhSang", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemCoin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMoney", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeClick", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Obs/LbMoneyChange": "LbMoneyChange",
    "../Windown": "Windown"
  } ],
  FIREBASE_CODE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "455f7S8/W5HmZyGO6FdkUyv", "FIREBASE_CODE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FIREBASE_CODE = void 0;
    var FIREBASE_CODE = function() {
      function FIREBASE_CODE() {}
      FIREBASE_CODE.TimePlayGame = "timePlayGame";
      FIREBASE_CODE.Login = "login";
      FIREBASE_CODE.SignUp = "sign_up";
      FIREBASE_CODE.ScreenView = "screen_view";
      return FIREBASE_CODE;
    }();
    exports.FIREBASE_CODE = FIREBASE_CODE;
    cc._RF.pop();
  }, {} ],
  FirebaseController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef194z2KKdIy5bcR54TYyJc", "FirebaseController");
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
    var FIREBASE_CODE_1 = require("./DefineTs/FIREBASE_CODE");
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FirebaseController = function(_super) {
      __extends(FirebaseController, _super);
      function FirebaseController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.objTime = Object.create(null);
        _this.fireBase = null;
        return _this;
      }
      FirebaseController.prototype.onLoad = function() {
        var obj = Windown_1.Windown.GAME_TYPE;
        for (var temp in obj) this.objTime[obj[temp]] = 0;
        Windown_1.Windown.Firebase = this;
        cc.game.addPersistRootNode(this.node);
        if (cc.sys.isNative) {
          if ("undefined" == typeof sdkbox || null == sdkbox.firebase) return;
          this.fireBase = sdkbox.firebase.Analytics;
          this.fireBase.init();
          cc.log(this.fireBase.getVersion());
        } else {
          var firebaseConfig = {
            apiKey: "AIzaSyADLcUOz4g1-3-kUaxLGgLFLkRkS9kQjYg",
            authDomain: "carong-d9cee.firebaseapp.com",
            projectId: "carong-d9cee",
            storageBucket: "carong-d9cee.appspot.com",
            messagingSenderId: "471426179088",
            appId: "1:471426179088:web:b51e03580ba65067eeaa95",
            measurementId: "G-YHTTZXFG6D"
          };
          firebase.initializeApp(firebaseConfig);
          this.fireBase = firebase.analytics();
        }
      };
      FirebaseController.prototype.send = function(event, data) {
        if (null == this.fireBase) return;
        this.fireBase.logEvent(event, data);
      };
      FirebaseController.prototype.setCurrentScreen = function(scence, nameClass) {
        if (null == this.fireBase) return;
        cc.sys.isBrowser ? this.fireBase.setCurrentScreen(scence, nameClass) : this.fireBase.setScreenName(scence, nameClass);
      };
      FirebaseController.prototype.sendEventSignUp = function(method) {
        var evt = {};
        evt["method"] = method;
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.SignUp, evt);
      };
      FirebaseController.prototype.sendEventLogin = function(method) {
        var evt = {};
        evt["method"] = method;
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.Login, evt);
      };
      FirebaseController.prototype.sendInViewLobby = function() {
        this.setCurrentScreen("Lobby", "MainView.js");
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.ScreenView, {
          firebase_screen: "Lobby",
          firebase_screen_class: "MainView.js"
        });
      };
      FirebaseController.prototype.sendInViewFish1 = function() {
        this.setCurrentScreen("Fish1", "FishCaMap.js");
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.ScreenView, {
          firebase_screen: "Fish1",
          firebase_screen_class: "FishCaMap.js"
        });
      };
      FirebaseController.prototype.sendInViewFish2 = function() {
        this.setCurrentScreen("Fish2", "FishCaMap.js");
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.ScreenView, {
          firebase_screen: "Fish2",
          firebase_screen_class: "FishCaMap.js"
        });
      };
      FirebaseController = __decorate([ ccclass ], FirebaseController);
      return FirebaseController;
    }(cc.Component);
    exports.default = FirebaseController;
    cc._RF.pop();
  }, {
    "./DefineTs/FIREBASE_CODE": "FIREBASE_CODE",
    "./Windown": "Windown"
  } ],
  FullSize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c06aeGh69JJKYu1D8xtM1Fn", "FullSize");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        disallowMultiple: false,
        menu: "FullSize"
      },
      properties: {},
      onLoad: function onLoad() {
        var cp = this.node.getComponent(cc.Sprite);
        cp && (cp.sizeMode = 3);
        this.node && this.node.setContentSize(cc.winSize);
      },
      onEnable: function onEnable() {
        this.funUpdate();
        cc.view.on("canvas-resize", this.funUpdate, this);
        window.addEventListener("orientationchange", this.funUpdate.bind(this));
      },
      funUpdate: function funUpdate() {
        this.node && this.node.setContentSize(cc.winSize);
      },
      onDisable: function onDisable() {
        cc.view.targetOff(this);
        window.removeEventListener("orientationchange", this.funUpdate);
      }
    });
    cc._RF.pop();
  }, {} ],
  GAME_TYPE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49251oPSOdI+ICWs0+3wbAZ", "GAME_TYPE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GAME_TYPE = function() {
      function GAME_TYPE() {}
      GAME_TYPE.CaMap = 31;
      GAME_TYPE.BongDem = 32;
      GAME_TYPE.Xeng = 1;
      GAME_TYPE.ThanTai = 2;
      GAME_TYPE.TruTien = 33;
      GAME_TYPE.DieuThuyen = 34;
      GAME_TYPE.NgoKhong = 35;
      GAME_TYPE.TaiXiu = 36;
      GAME_TYPE.Neko = 37;
      return GAME_TYPE;
    }();
    exports.default = GAME_TYPE;
    cc._RF.pop();
  }, {} ],
  GenDataTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93afdGqCqlKpYFLKIsTzD2W", "GenDataTest");
    "use strict";
    cc.Class({
      extends: cc.Component,
      ctor: function ctor() {
        this.moneyTotalCaculate = 13e3;
        this.moneyStart = 1e4;
        this.moneyCurrent = this.moneyStart;
        this.offsetY = 1080 / this.moneyTotalCaculate;
        this.offsetX = 48;
      },
      properties: {
        nodeInfoSpin: require("InfoSpin"),
        nodeItem: cc.Node,
        data: {
          default: null,
          type: cc.JsonAsset
        },
        line: cc.Graphics,
        scr: cc.ScrollView
      },
      onLoad: function onLoad() {
        Global.GenData = this;
      },
      onDestroy: function onDestroy() {
        Global.GenData = null;
      },
      start: function start() {
        var vecStart = this.getPosByMoneyAndSpinCount(this.moneyStart, 0);
        cc.log(vecStart);
        this.line.moveTo(vecStart.x, vecStart.y);
        this.getData();
        var content = this.scr.content;
        content.width = this.offsetX * this.listData.length + 100;
        content.height = 1e4;
        for (var i = 0, l = this.listData.length; i < l; i++) {
          cc.log("chay vao day roi nay");
          var node = cc.instantiate(this.nodeItem);
          var cp = node.getComponent("ItemSpin");
          node.active = true;
          cp.init(this.listData[i]);
          content.addChild(node);
        }
        this.line.stroke();
      },
      viewInfoSesion: function viewInfoSesion(data, node) {
        this.nodeInfoSpin.init(data);
        var pos = this.getPositionInViewParentText(node.position);
        this.nodeInfoSpin.node.x = pos.x + 150;
        this.nodeInfoSpin.node.y = pos.y;
        var widthNode = this.nodeInfoSpin.node.width / 2;
        var heightNode = this.nodeInfoSpin.node.height / 2;
        var winSiseHeight = cc.winSize.height / 2;
        var winSiseWidth = cc.winSize.width / 2;
        (this.nodeInfoSpin.node.x > winSiseWidth - widthNode || this.nodeInfoSpin.node.x < -winSiseWidth + widthNode) && this.nodeInfoSpin.node.x > 0 && (this.nodeInfoSpin.node.x = winSiseWidth - widthNode);
        (this.nodeInfoSpin.node.y > winSiseHeight - heightNode || this.nodeInfoSpin.node.y < -winSiseHeight + heightNode) && (this.nodeInfoSpin.node.y > 0 ? this.nodeInfoSpin.node.y = winSiseHeight - heightNode : this.nodeInfoSpin.node.y = heightNode - winSiseHeight);
      },
      getPositionInViewParentText: function getPositionInViewParentText(pos) {
        var worldPos = this.scr.content.convertToWorldSpaceAR(pos);
        var viewPos = this.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      offInfo: function offInfo() {
        this.nodeInfoSpin.node.active = false;
      },
      getData: function getData() {
        this.listData = this.data.json;
      },
      drawLine: function drawLine(pos) {
        this.line.lineTo(pos.x, pos.y);
      },
      getPosByMoneyAndSpinCount: function getPosByMoneyAndSpinCount(money, count) {
        var vecReturn = cc.v2(0, 0);
        vecReturn.x = this.offsetX * count;
        vecReturn.y = this.offsetY * money;
        return vecReturn;
      }
    });
    cc._RF.pop();
  }, {
    InfoSpin: "InfoSpin"
  } ],
  HoTro: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a5edAyDbhEsKNfiQP0Kcy5", "HoTro");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var ItemAdminOnline_1 = require("./ItemAdminOnline");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HoTro = function(_super) {
      __extends(HoTro, _super);
      function HoTro() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentContent = null;
        _this.nodeMenu = null;
        return _this;
      }
      HoTro.prototype.onLoad = function() {
        Windown_1.Windown.HoTro = this;
      };
      HoTro.prototype.onDestroy = function() {
        Windown_1.Windown.HoTro = null;
      };
      HoTro.prototype.onEnable = function() {
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetListAdminOnline, this.onResponseListAdmin, this);
      };
      HoTro.prototype.onDisable = function() {
        cc.systemEvent.off(REQUEST_CODE_1.REQUEST_CODE.GetListAdminOnline, this.onResponseListAdmin, this);
      };
      HoTro.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
        this.nodeMenu.active = true;
        this.parentContent.parent.active = false;
      };
      HoTro.prototype.onClickTele = function() {
        Windown_1.Windown.LinkTele && cc.sys.openURL(Windown_1.Windown.LinkTele);
      };
      HoTro.prototype.onClickOnline = function() {
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetListAdminOnline, null);
      };
      HoTro.prototype.onResponseListAdmin = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject);
        this.nodeMenu.active = false;
        this.parentContent.parent.active = true;
        var listData = SFSObject.getSFSArray("listData");
        var itemTemplate = this.parentContent.children[0];
        var listChildren = this.parentContent.children;
        for (var i = 0, l = listData.size(); i < l; i++) {
          var node = listChildren[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentContent;
          }
          node.active = true;
          node.getComponent(ItemAdminOnline_1.default).initItem(listData.getSFSObject(i));
        }
        for (var i = listData.size(); i < listChildren.length; i++) listChildren[i].active = false;
      };
      HoTro.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(cc.Node) ], HoTro.prototype, "parentContent", void 0);
      __decorate([ property(cc.Node) ], HoTro.prototype, "nodeMenu", void 0);
      HoTro = __decorate([ ccclass ], HoTro);
      return HoTro;
    }(cc.Component);
    exports.default = HoTro;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./ItemAdminOnline": "ItemAdminOnline"
  } ],
  HomThuController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "235fdZDO1xNuZk1cE75Z4E4", "HomThuController");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var PathResource_1 = require("../../DefineTs/PathResource");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var HomThu_1 = require("./HomThu");
    var HomThuController = function() {
      function HomThuController() {
        this.listMail = null;
        this.mailView = null;
        this.countNotRead = 0;
        this.listMail = [];
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, this.onLogin, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetMail, this.responseMail, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.AddMail, this.responseAddMail, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.DeleteMail, this.responseDelMail, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.ReadMail, this.responseReadMail, this);
      }
      HomThuController.prototype.onLogin = function() {
        cc.log("send get listMail");
        this.listMail = [];
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetMail, null);
      };
      HomThuController.prototype.responseMail = function(SFSObject) {
        this.listMail = [];
        this.countNotRead = 0;
        var SFSArray = SFSObject.getSFSArray("listMail");
        cc.log(SFSArray);
        for (var i = SFSArray.size() - 1; i >= 0; i--) this.listMail.push(SFSArray.getSFSObject(i));
        var count = 0;
        this.listMail.forEach(function(v) {
          0 == v.getInt("status") && count++;
        });
        this.countNotRead = count;
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.updateNumNotReadMail(this.countNotRead);
        this.refeshMail();
      };
      HomThuController.prototype.responseReadMail = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        var idMail = SFSObject.getInt("idMail");
        var sfsMail = this.getSFSMailById(idMail);
        sfsMail && sfsMail.putInt("status", 1);
        this.countNotRead--;
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.updateNumNotReadMail(this.countNotRead);
        this.refeshMail();
      };
      HomThuController.prototype.getSFSMailById = function(idMail) {
        for (var i = 0, l = this.listMail.length; i < l; i++) if (this.listMail[i].getInt("idMail") == idMail) return this.listMail[i];
        return null;
      };
      HomThuController.prototype.responseAddMail = function(obj) {
        this.listMail.unshift(obj);
        this.countNotRead++;
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.updateNumNotReadMail(this.countNotRead);
        this.refeshMail();
        Windown_1.Windown.UIManager.showNotiMesage(obj);
      };
      HomThuController.prototype.responseDelMail = function(obj) {
        this.mailView.onClickBack();
        Windown_1.Windown.Dialog.checkAndShowLog(obj);
        var idMail = obj.getInt("idMail");
        for (var i = 0, l = this.listMail.length; i < l; i++) if (this.listMail[i].getInt("idMail") == idMail) {
          this.listMail.splice(i, 1);
          break;
        }
        this.refeshMail();
      };
      HomThuController.prototype.refeshMail = function() {
        this.mailView && this.mailView.node.active && this.mailView.initListMail(this.listMail);
      };
      HomThuController.prototype.showMailView = function(idMail) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              if (!(null == this.mailView)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.HomThu) ];

             case 1:
              pre = _a.sent();
              this.mailView = cc.instantiate(pre).getComponent(HomThu_1.default);
              _a.label = 2;

             case 2:
              this.mailView.node.parent = Windown_1.Windown.UIManager.parentPopup;
              this.mailView.show(idMail, this.listMail);
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      return HomThuController;
    }();
    exports.default = HomThuController;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/PathResource": "PathResource",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./HomThu": "HomThu"
  } ],
  HomThu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9bb16uPv1NK+Lr3lcetbdRx", "HomThu");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseScrollView_1 = require("../../Parent/BaseScrollView");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HomThu = function(_super) {
      __extends(HomThu, _super);
      function HomThu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeInfo = null;
        _this.nodeListMail = null;
        _this.scr = null;
        _this.lbTieuDe = null;
        _this.lbSender = null;
        _this.lbTime = null;
        _this.lbInfo = null;
        _this.currentId = -1;
        _this.idMailShow = -1;
        return _this;
      }
      HomThu.prototype.show = function(idMail, listMail) {
        var _this = this;
        Windown_1.Windown.actionEffectOpen(this.node, function() {
          _this.initListMail(listMail);
        });
        idMail && (this.idMailShow = idMail);
      };
      HomThu.prototype.initListMail = function(list) {
        this.scr.resetScr();
        for (var i = 0, l = list.length; i < l; i++) list[i].putInt("index", i + 1);
        this.scr.init(list, 50 * list.length, 50);
        -1 != this.idMailShow && this.updateInfo(Windown_1.Windown.HomThuController.getSFSMailById(this.idMailShow));
        this.idMailShow = -1;
      };
      HomThu.prototype.updateInfo = function(SFSObject) {
        if (null == SFSObject) return;
        var id = SFSObject.getInt("idMail");
        var tieuDe = SFSObject.getUtfString("header");
        var time = SFSObject.getLong("time");
        var info = SFSObject.getUtfString("info");
        var sender = SFSObject.getUtfString("sender");
        this.currentId = id;
        this.lbInfo.string = info;
        this.lbSender.string = sender;
        this.lbTieuDe.string = tieuDe;
        this.lbTime.string = Windown_1.Windown.getFullTime(time);
        this.nodeInfo.active = true;
        this.nodeListMail.active = false;
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("idMail", this.currentId);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.ReadMail, obj);
      };
      HomThu.prototype.onClickXoa = function() {
        if (-1 == this.currentId) return;
        Windown_1.Windown.UIManager.showLoading();
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("idMail", this.currentId);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.DeleteMail, SFSObject);
      };
      HomThu.prototype.onClickBack = function() {
        this.currentId = -1;
        this.nodeInfo.active = false;
        this.nodeListMail.active = true;
      };
      HomThu.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      HomThu.prototype.onDisable = function() {
        this.onClickBack();
      };
      __decorate([ property(cc.Node) ], HomThu.prototype, "nodeInfo", void 0);
      __decorate([ property(cc.Node) ], HomThu.prototype, "nodeListMail", void 0);
      __decorate([ property(BaseScrollView_1.default) ], HomThu.prototype, "scr", void 0);
      __decorate([ property(cc.Label) ], HomThu.prototype, "lbTieuDe", void 0);
      __decorate([ property(cc.Label) ], HomThu.prototype, "lbSender", void 0);
      __decorate([ property(cc.Label) ], HomThu.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], HomThu.prototype, "lbInfo", void 0);
      HomThu = __decorate([ ccclass ], HomThu);
      return HomThu;
    }(cc.Component);
    exports.default = HomThu;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseScrollView": "BaseScrollView",
    "../../Windown": "Windown"
  } ],
  ImgChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87641S8St5NtbIcLG7SJZBj", "ImgChat");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ImgChat = function(_super) {
      __extends(ImgChat, _super);
      function ImgChat() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spMain = null;
        return _this;
      }
      ImgChat.prototype.onLoad = function() {
        Windown_1.Windown.ImgChat = this;
      };
      ImgChat.prototype.onDestroy = function() {
        Windown_1.Windown.ImgChat = null;
      };
      ImgChat.prototype.show = function(sMain) {
        this.spMain.spriteFrame = sMain;
      };
      ImgChat.prototype.onClickClose = function() {
        this.node.parent = null;
      };
      __decorate([ property(cc.Sprite) ], ImgChat.prototype, "spMain", void 0);
      ImgChat = __decorate([ ccclass ], ImgChat);
      return ImgChat;
    }(cc.Component);
    exports.default = ImgChat;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  InfoERR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e682931mZNObUrtpJqFDJS", "InfoERR");
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
    exports.InfoErr = void 0;
    var InfoErr = function(_super) {
      __extends(InfoErr, _super);
      function InfoErr(string) {
        var _this = _super.call(this) || this;
        _this.message = "lvd----" + string;
        return _this;
      }
      return InfoErr;
    }(Error);
    exports.InfoErr = InfoErr;
    cc._RF.pop();
  }, {} ],
  InfoSpin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68cf80iqGFLTbZfm0V8Yq6S", "InfoSpin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lbInfo: cc.Label,
        nodeHeader: cc.Node,
        nodeInfo: cc.Node
      },
      init: function init(data) {
        this.node.active = true;
        var dataRevice = data.modelMakebet;
        var dataNormal = dataRevice.makeBetNormal;
        var dataXanhDoVang = dataRevice.makebetXDV;
        var dataAnTruoc = dataRevice.makeBetAnTruoc;
        this.lbInfo.string = JSON.stringify(data);
        var listLabel = this.nodeHeader.getComponentsInChildren(cc.Label);
        listLabel[0].string = data.idSpin;
        listLabel[1].string = this.getNameByType(dataNormal.typeSpecial);
        var listBetXdv = [ data.modelByClient.red, data.modelByClient.yello, data.modelByClient.green ];
        listLabel[2].string = JSON.stringify(listBetXdv);
        listLabel[3].string = JSON.stringify(data.modelByClient.listBetItem);
        var moneyChinh = dataNormal.objReviceFirtItem.moneyRevice;
        var moneyPhu = dataAnTruoc.moneyRevice;
        var moneyReviceXanhDoVang = 0;
        for (var i = 0, l = dataNormal.ListObjReviceSub.length; i < l; i++) moneyPhu += dataNormal.ListObjReviceSub[i].moneyRevice;
        moneyReviceXanhDoVang += dataXanhDoVang.reviceXanh;
        moneyReviceXanhDoVang += dataXanhDoVang.reviceDo;
        moneyReviceXanhDoVang += dataXanhDoVang.reviceVang;
        var moneyTotal = moneyChinh + moneyPhu + moneyReviceXanhDoVang;
        listLabel[4].string = "ch\xednh: " + this.formatNumber(moneyChinh);
        listLabel[5].string = "ph\u1ee5: " + this.formatNumber(moneyPhu);
        listLabel[6].string = "T\u1ed5ng: " + this.formatNumber(moneyTotal);
        listLabel[7].string = "C\xf2n: " + this.formatNumber(data.moneyPlayer);
      },
      formatNumber: function formatNumber(number, width) {
        void 0 === width && (width = 3);
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      },
      getNameByType: function getNameByType(type) {
        var str = "Null";
        switch (type) {
         case -1:
          str = "Th\u01b0\u1eddng";
          break;

         case 1:
          str = "X10";
          break;

         case 2:
          str = "Lucky X20";
          break;

         case 3:
          str = "Lucky X10";
          break;

         case 4:
          str = "Lucky X20 or X10";
          break;

         case 5:
          str = "\u0103n ng\u1eabu nhi\xean th\xeam 1 c\u1eeda x10-x20";
          break;

         case 6:
          str = "nghe nh\u1ea1c";
          break;

         case 7:
          str = "\u0111\u1eadp chu\u1ed9t";
          break;

         case 8:
          str = "X\u1ed5 S\u1ed1";
          break;

         case 9:
          str = "R\u1eafn 8 \u0111\u1ed1t";
          break;

         case 10:
          str = "Bar nh\u1ecf";
          break;

         case 11:
          str = "x10 - x20 -x10";
          break;

         case 12:
          str = "8Id ng\u1eabu nhi\xean";
          break;

         case 13:
          str = "ch\u1eef t\xe0u";
          break;

         case 14:
          str = "jackpot";
        }
        return str;
      },
      onClickMore: function onClickMore() {
        this.nodeHeader.active = false;
        this.nodeInfo.active = true;
      },
      onClickbackMore: function onClickbackMore() {
        this.nodeHeader.active = true;
        this.nodeInfo.active = false;
      },
      onClickHide: function onClickHide() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  ItemAdminOnline: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f75cc7FQBMVaHQyeG+6n5x", "ItemAdminOnline");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.HoTro.onClickClose();
        Windown_1.Windown.UIManager.showLoading();
        Windown_1.Windown.ChatAdminController.showIconMoveChat(this.lbName.string);
      };
      NewClass.prototype.initItem = function(SFSObject) {
        var userName = SFSObject.getUtfString("adminName");
        this.lbName.string = userName;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbName", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemBigWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af8a7V3rxNHb4b+j9ts3Scj", "ItemBigWin");
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
    var GAME_TYPE_1 = require("../../Game/GAME_TYPE");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbInfo = null;
        _this.lbMoney = null;
        _this.img = null;
        return _this;
      }
      NewClass.prototype.initItem = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var gameType, data, nickName, moneyTake, info, urlImg, _a, _b, str;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              gameType = SFSObject.get("gt");
              data = SFSObject.get("dt");
              nickName = SFSObject.get("nn");
              moneyTake = SFSObject.get("mt");
              info = "";
              this.lbMoney.string = "+" + Windown_1.Windown.formatNumber(moneyTake);
              urlImg = "";
              switch (gameType) {
               case GAME_TYPE_1.default.BongDem:
                switch (data) {
                 case "24":
                  urlImg = "ImgBigWin/caVoiXanh";
                  info = "\u0111\xe3 h\u1ea1 C\xe1 Voi Xanh";
                  break;

                 case "100":
                  info = "\u0111\xe3 N\u1ed4 H\u0168 c\xe1";
                  break;

                 case "101":
                  urlImg = "ImgBigWin/bossCaXau";
                  info = "\u0111\xe3 h\u1ea1 BOSS C\xe1 X\u1ea5u";
                  break;

                 case "103":
                  urlImg = "ImgBigWin/bossRua";
                  info = "\u0111\xe3 h\u1ea1 BOSS H\u1ecfa Long Qui";
                  break;

                 case "51":
                  urlImg = "ImgBigWin/cuaLaze";
                  info = "\u0111\xe3 h\u1ea1 Cua Laze";
                  break;

                 case "52":
                  urlImg = "ImgBigWin/bom";
                  info = "\u0111\xe3 h\u1ea1 Boom Nguy\xean T\u1eed";
                  break;

                 case "53":
                  urlImg = "ImgBigWin/muiKHoan";
                  info = "\u0111\xe3 h\u1ea1 Cua M\u0169i Khoan";
                  break;

                 case "56":
                  urlImg = "ImgBigWin/cuaQuay";
                  info = "\u0111\xe3 h\u1ea1 Cua Quay";
                  break;

                 case "55":
                  urlImg = "ImgBigWin/cuaRong";
                  info = "\u0111\xe3 h\u1ea1 Cua R\u1ed3ng";
                  break;

                 case "54":
                  urlImg = "ImgBigWin/cuaSongAm";
                  info = "\u0111\xe3 h\u1ea1 Cua S\xf3ng \xc2m";
                  break;

                 case "33":
                  urlImg = "ImgBigWin/haiThan";
                  info = "\u0111\xe3 h\u1ea1 BOSS H\u1ea3i Th\u1ea7n";
                  break;

                 case "28":
                  urlImg = "ImgBigWin/thanTai";
                  info = "\u0111\xe3 h\u1ea1 c\xe1 Th\u1ea7n T\xe0i";
                  break;

                 case "27":
                  urlImg = "ImgBigWin/tienCa";
                  info = "\u0111\xe3 h\u1ea1 N\xe0ng Ti\xean C\xe1";
                  break;

                 case "102":
                  urlImg = "ImgBigWin/truyGai";
                  info = "\u0111\xe3 h\u1ea1 BOSS B\xf3ng \u0110\xeam";
                  break;

                 case "7":
                  urlImg = "ImgBigWin/boomNguyenTu";
                  info = "\u0111\xe3 d\xf9ng BOOM Nguy\xean T\u1eed";
                  break;

                 case "8":
                  urlImg = "ImgBigWin/matThan";
                  info = "\u0111\xe3 d\xf9ng M\u1eaft Th\u1ea7n";
                  break;

                 case "9":
                  urlImg = "ImgBigWin/dinhba";
                  info = "\u0111\xe3 d\xf9ng \u0110inh Ba";
                  break;

                 case "70":
                 case "71":
                 case "72":
                 case "73":
                  urlImg = "ImgBigWin/fish" + data;
                  info = "\u0111\xe3 h\u1ea1 c\xe1 \u0110\u1eb7c Bi\u1ec7t";
                  break;

                 case "74":
                  urlImg = "ImgBigWin/caDien";
                  info = "\u0111\xe3 h\u1ea1 C\xe1 \u0110I\u1ec6N";
                }
                break;

               case GAME_TYPE_1.default.TruTien:
                urlImg = "ImgBigWin/truTien";
                info = "bw" == data ? " th\u1eafng l\u1edbn Tru Ti\xean" : "fs" == data ? " th\u1eb1ng quay mi\u1ec5n ph\xed" : " n\u1ed5 h\u0169 Tru Ti\xean";
                break;

               case GAME_TYPE_1.default.Xeng:
                urlImg = "ImgBigWin/xeng";
                info = " th\u1eafng l\u1edbn M\xe1y X\xe8ng";
                break;

               case GAME_TYPE_1.default.DieuThuyen:
                urlImg = "ImgBigWin/dieuThuyen";
                info = "bw" == data ? " th\u1eafng l\u1edbn \u0110i\xeau Thuy\u1ec1n" : " th\u1eafng quay mi\u1ec5n ph\xed";
                break;

               case GAME_TYPE_1.default.NgoKhong:
                urlImg = "ImgBigWin/ngoKhong";
                info = "bw" == data ? " th\u1eafng l\u1edbn Ng\u1ed9 Kh\xf4ng" : " th\u1eafng quay mi\u1ec5n ph\xed";
                break;

               case GAME_TYPE_1.default.Neko:
                urlImg = "ImgBigWin/neko";
                info = "bw" == data ? " th\u1eafng l\u1edbn Neko" : " th\u1eafng quay mi\u1ec5n ph\xed";
              }
              if (!("" != urlImg)) return [ 3, 2 ];
              _a = this.img;
              return [ 4, Windown_1.Windown.getSpFrameRes(urlImg) ];

             case 1:
              _a.spriteFrame = _c.sent();
              return [ 3, 4 ];

             case 2:
              _b = this.img;
              return [ 4, Windown_1.Windown.getSpFrameRes("Img/Qeust/1") ];

             case 3:
              _b.spriteFrame = _c.sent();
              _c.label = 4;

             case 4:
              str = "<color=#ffffff>" + nickName + "</c><color=#FFEB00> " + info + "</color>";
              this.lbInfo.string = str;
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.RichText) ], NewClass.prototype, "lbInfo", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMoney", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "img", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Game/GAME_TYPE": "GAME_TYPE",
    "../../Windown": "Windown"
  } ],
  ItemBtnGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a12aEcV/dC7aAi/c48ztw5", "ItemBtnGame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      init: function init(info) {
        return;
        var listCp;
      },
      onClick: function onClick() {
        require("GameManager").getIns().currentRoomId = this.id;
        require("GameManager").getIns().dataRoomOwer = null;
        var obj = require("NetworkManager").getIns().getSFSObj();
        obj.putInt("id", require("GameManager").getIns().currentRoomId);
        require("NetworkManager").getIns().sendRequest(REQUEST_CODE.JoinRoom, obj);
        Global.UIManager.showLoading();
      }
    });
    cc._RF.pop();
  }, {
    GameManager: void 0,
    NetworkManager: void 0
  } ],
  ItemCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce309iHYqBHh7pX94b+MflM", "ItemCard");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var BaseItemQuick_1 = require("./BaseItemQuick");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VT = 1;
    var MB = 2;
    var VN = 3;
    var ItemCard = function(_super) {
      __extends(ItemCard, _super);
      function ItemCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbSeri = null;
        _this.edbMaThe = null;
        _this.lbMenhGia = null;
        _this.currentTypeNhaMang = VT;
        return _this;
      }
      ItemCard.prototype.reset = function() {
        Windown_1.Windown.QuickShop.parentButton.active = true;
        this.node.active = false;
        cc.systemEvent.removeAll(this);
      };
      ItemCard.prototype.excuted = function() {
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.CashInCardNew, this.responseNap, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.CashInCardTuan, this.responseNap, this);
        Windown_1.Windown.QuickShop.parentButton.active = false;
        this.node.active = true;
        this.edbSeri.string = "";
        this.edbMaThe.string = "";
        this.lbMenhGia.string = "Gi\xe1 tr\u1ecb th\u1ebb " + Windown_1.Windown.formatNumber(Windown_1.Windown.QuickShop.currentMoney);
      };
      ItemCard.prototype.onToggle = function(event, data) {
        this.currentTypeNhaMang = Number(data);
      };
      ItemCard.prototype.responseNap = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
      };
      ItemCard.prototype.onClickSend = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("seri", this.edbSeri.string);
        SFSObject.putUtfString("pin", this.edbMaThe.string);
        SFSObject.putInt("amount", Windown_1.Windown.QuickShop.currentMoney);
        SFSObject.putInt("cardType", this.currentTypeNhaMang);
        SFSObject.putInt("napvip", Windown_1.Windown.QuickShop.currentId);
        var string = TextDefine_1.TextDefine.CONFIRM_CARD.formatString(this.getNameNhaMang(this.currentTypeNhaMang), Windown_1.Windown.formatNumber(Windown_1.Windown.formatNumber(Windown_1.Windown.QuickShop.currentMoney)), this.edbSeri.string, this.edbMaThe.string);
        Windown_1.Windown.Dialog.showLog(string, function() {
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.CashInCardTuan, SFSObject);
          Windown_1.Windown.UIManager.showLoading();
        });
      };
      ItemCard.prototype.getNameNhaMang = function(type) {
        switch (type) {
         case VT:
          return "VIETTEL";

         case MB:
          return "MOBIFONE";

         case VN:
          return "VINA";
        }
        return "L\u1ed7i";
      };
      __decorate([ property(cc.EditBox) ], ItemCard.prototype, "edbSeri", void 0);
      __decorate([ property(cc.EditBox) ], ItemCard.prototype, "edbMaThe", void 0);
      __decorate([ property(cc.Label) ], ItemCard.prototype, "lbMenhGia", void 0);
      ItemCard = __decorate([ ccclass ], ItemCard);
      return ItemCard;
    }(BaseItemQuick_1.default);
    exports.default = ItemCard;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./BaseItemQuick": "BaseItemQuick"
  } ],
  ItemChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb7b6fIYdZC5qOF1teSuOjT", "ItemChat");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbInfo = null;
        _this.bkg = null;
        _this.spItem = null;
        _this.lbTime = null;
        _this.isMe = false;
        _this._idItem = 0;
        _this._time = 0;
        _this.isItemBase64 = false;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        this.lbInfo.node.on(cc.Node.EventType.SIZE_CHANGED, this.onSizeChange, this);
      };
      NewClass.prototype.onDisable = function() {
        this.lbInfo.node.off(cc.Node.EventType.SIZE_CHANGED, this.onSizeChange, this);
      };
      NewClass.prototype.onSizeChangeItembase64 = function() {
        var size = this.spItem.node.getContentSize();
        var width = size.width;
        var height = size.height;
        var newWidth = width;
        var newHeight = height;
        var max = 400;
        var min = 100;
        if (width > height) {
          if (width > max) {
            var scacle = max / width;
            newWidth = width * scacle;
            newHeight = height * scacle;
          } else if (width < min) {
            var scacle = min / width;
            newWidth = width * scacle;
            newHeight = height * scacle;
          }
        } else if (height > max) {
          var scacle = max / height;
          newWidth = width * scacle;
          newHeight = height * scacle;
        } else if (height < min) {
          var scacle = min / height;
          newWidth = width * scacle;
          newHeight = height * scacle;
        }
        this.spItem.node.setContentSize(newWidth, newHeight);
        this.node.setContentSize(newWidth, newHeight);
      };
      NewClass.prototype.onClickbase64 = function() {
        Windown_1.Windown.UIManager.showImgChat(this.spItem.spriteFrame);
      };
      NewClass.prototype.onSizeChange = function() {
        if (this.isItemBase64) return;
        var size = this.lbInfo.node.getContentSize();
        size.width += 50;
        size.height += 20;
        this.bkg.setContentSize(size);
        this.node.setContentSize(size);
        this.isMe ? this.lbTime.node.setPosition(-this.bkg.width / 2, this.bkg.height) : this.lbTime.node.setPosition(this.bkg.width / 2, this.bkg.height);
      };
      NewClass.prototype.onClick = function() {
        cc.log("onclick");
        this.lbTime.node.active = !this.lbTime.node.active;
        this.lbTime.node.active ? this.isItemBase64 ? this.onClickbase64() : this.node.height = this.bkg.height + this.lbTime.node.height : this.isItemBase64 ? this.onClickbase64() : this.node.height = this.bkg.height;
      };
      NewClass.prototype.initItem = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var id, bas64, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              this.lbTime.node.active = false;
              id = SFSObject.getLong("id");
              if (this._idItem == id) return [ 2 ];
              bas64 = SFSObject.getText("base64Img");
              if (!(bas64 && "" != bas64)) return [ 3, 2 ];
              this.isItemBase64 = true;
              this.lbInfo.node.active = false;
              this.bkg.active = false;
              this.spItem.node.active = true;
              _a = this.spItem;
              return [ 4, Windown_1.Windown.getSpFrameByBase64(bas64) ];

             case 1:
              _a.spriteFrame = _b.sent();
              this.onSizeChangeItembase64();
              return [ 3, 3 ];

             case 2:
              this.isItemBase64 = false;
              this.lbInfo.string = SFSObject.getUtfString("info");
              this._idItem = id;
              this.lbTime.string = Windown_1.Windown.formatDate(new Date(SFSObject.getLong("time")), "HH:mm:ss dddd");
              this.lbInfo.node.active = true;
              this.bkg.active = true;
              this.spItem.node.active = false;
              this.onSizeChange();
              _b.label = 3;

             case 3:
              this.setPos();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.setPos = function() {
        this.isMe ? this.node.x = 292 : this.node.x = -292;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbInfo", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkg", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "spItem", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      __decorate([ property(cc.Boolean) ], NewClass.prototype, "isMe", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemCoppy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5219Y+bIBD/JViJaFmdQEf", "ItemCoppy");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.coppyToClip(this.getComponent(cc.Label).string);
      };
      NewClass = __decorate([ ccclass, requireComponent(cc.Label), menu("ItemCoppy") ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ItemDoiAva: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "806d0UISCRMjIqKYoEoHyI/", "ItemDoiAva");
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
    var ClearCacheBase64_1 = require("../../ClearCacheBase64");
    var PathResource_1 = require("../../DefineTs/PathResource");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemDoiAva = function(_super) {
      __extends(ItemDoiAva, _super);
      function ItemDoiAva() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ava = null;
        _this.nodeTick = null;
        _this.id = -1;
        _this.type = 0;
        _this.base64 = "";
        return _this;
      }
      ItemDoiAva.prototype.init = function(_id, type) {
        void 0 === type && (type = null);
        return __awaiter(this, void 0, void 0, function() {
          var str, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              str = PathResource_1.PathResource.Avatar.replace("%d", _id);
              this.id = _id;
              _a = this.ava;
              return [ 4, Windown_1.Windown.getSpFrameRes(str) ];

             case 1:
              _a.spriteFrame = _b.sent();
              type && (this.type = type);
              this.updateTich();
              return [ 2 ];
            }
          });
        });
      };
      ItemDoiAva.prototype.initWithCustom = function(_base64) {
        return __awaiter(this, void 0, void 0, function() {
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              this.id = -1;
              this.type = 2;
              this.base64 = _base64;
              this.updateTich();
              _a = this.ava;
              return [ 4, Windown_1.Windown.getSpFrameByBase64(_base64) ];

             case 1:
              _a.spriteFrame = _b.sent();
              return [ 2 ];
            }
          });
        });
      };
      ItemDoiAva.prototype.initFb = function(idFb, token) {
        return __awaiter(this, void 0, void 0, function() {
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              this.id = -1;
              this.type = 1;
              this.updateTich();
              _a = this.ava;
              return [ 4, Windown_1.Windown.getSpByFb(idFb, token) ];

             case 1:
              _a.spriteFrame = _b.sent();
              return [ 2 ];
            }
          });
        });
      };
      ItemDoiAva.prototype.updateTich = function() {
        this.nodeTick.active = false;
        0 == this.type ? this.id == Windown_1.Windown.User.avatrId && 0 == Windown_1.Windown.User.typeAvarta && (this.nodeTick.active = true) : this.type == Windown_1.Windown.User.typeAvarta && (this.nodeTick.active = true);
      };
      ItemDoiAva.prototype.onLoad = function() {
        this.ava.addComponent(ClearCacheBase64_1.default).isEmitDisble = true;
      };
      ItemDoiAva.prototype.onClick = function() {
        if (this.nodeTick.active) return;
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("type", this.type);
        SFSObject.putInt("id", this.id);
        if (2 == this.type) {
          SFSObject.putText("base64", this.base64);
          Windown_1.Windown.DoiAva.currentBase64Crop = this.base64;
        }
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.ChangeAvatar, SFSObject, Windown_1.Windown.DoiAva.responseChangeAva.bind(Windown_1.Windown.DoiAva));
        Windown_1.Windown.UIManager.showLoading();
      };
      __decorate([ property(cc.Sprite) ], ItemDoiAva.prototype, "ava", void 0);
      __decorate([ property(cc.Node) ], ItemDoiAva.prototype, "nodeTick", void 0);
      ItemDoiAva = __decorate([ ccclass ], ItemDoiAva);
      return ItemDoiAva;
    }(cc.Component);
    exports.default = ItemDoiAva;
    cc._RF.pop();
  }, {
    "../../ClearCacheBase64": "ClearCacheBase64",
    "../../DefineTs/PathResource": "PathResource",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  ItemHangLobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1172fq0Y1NEB5syVdrRoRdF", "ItemHangLobby");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemHangLobby = function(_super) {
      __extends(ItemHangLobby, _super);
      function ItemHangLobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.lbType = null;
        _this.spRank = null;
        _this.spAva = null;
        _this.listSpRank = [];
        _this.funSche = null;
        _this.count = 0;
        _this.listData = null;
        _this.isFirt = true;
        _this.cacheX = 5;
        return _this;
      }
      ItemHangLobby.prototype.run = function() {
        var _this = this;
        var SFSObject = this.listData.getSFSObject(this.count);
        this.lbName.string = SFSObject.getUtfString("nickname");
        this.spRank.spriteFrame = this.listSpRank[SFSObject.getInt("index")];
        if (0 == SFSObject.getInt("type")) {
          this.lbType.string = "TOP WIN TU\u1ea6N";
          this.lbType.fontSize = 13;
        } else {
          this.lbType.string = "TOP LEVEL TH\xc1NG";
          this.lbType.fontSize = 10.5;
        }
        this.node.x = this.node.width - this.cacheX;
        Windown_1.Windown.updateAvatar(SFSObject, this.spAva);
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.5, {
          x: this.cacheX
        }, {
          easing: "backOut"
        }).delay(5).to(.5, {
          x: this.cacheX - this.node.width
        }, {
          easing: "backIn"
        }).call(function() {
          _this.count++;
          _this.count >= _this.listData.size() && (_this.count = 0);
          _this.run();
        }).start();
      };
      ItemHangLobby.prototype.start = function() {
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onConnect, this.onConnectServer, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisConnect, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetRankLobby, this.responseServer, this);
        this.node.x = this.node.width - this.cacheX;
        Windown_1.Windown.User.isLogin && this.onConnectServer();
      };
      ItemHangLobby.prototype.onDestroy = function() {
        cc.systemEvent.removeAll(this);
      };
      ItemHangLobby.prototype.onConnectServer = function() {
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetRankLobby, null);
      };
      ItemHangLobby.prototype.onDisConnect = function() {
        this.unschedule(this.funSche);
      };
      ItemHangLobby.prototype.responseServer = function(SFSObject) {
        var items = SFSObject.getSFSArray("Items");
        if (items.size() < 1) {
          this.node.x = this.node.width - this.cacheX;
          this.unschedule(this.funSche);
          this.scheduleOnce(this.funSche = function() {
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetRankLobby, null);
          }, 60);
          return;
        }
        this.listData = items;
        if (this.isFirt) {
          this.run();
          this.isFirt = false;
        }
        this.count >= this.listData.size() && (this.count = 0);
        this.unschedule(this.funSche);
        this.scheduleOnce(this.funSche = function() {
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetRankLobby, null);
        }, 60);
      };
      __decorate([ property(cc.Label) ], ItemHangLobby.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], ItemHangLobby.prototype, "lbType", void 0);
      __decorate([ property(cc.Sprite) ], ItemHangLobby.prototype, "spRank", void 0);
      __decorate([ property(cc.Sprite) ], ItemHangLobby.prototype, "spAva", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], ItemHangLobby.prototype, "listSpRank", void 0);
      ItemHangLobby = __decorate([ ccclass ], ItemHangLobby);
      return ItemHangLobby;
    }(cc.Component);
    exports.default = ItemHangLobby;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  ItemHomThu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e320aHcwiFJVoC/PIr6XC2s", "ItemHomThu");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemHomThu = function(_super) {
      __extends(ItemHomThu, _super);
      function ItemHomThu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbStt = null;
        _this.lbTieuDe = null;
        _this.lbThoiGian = null;
        _this.objInfo = null;
        return _this;
      }
      ItemHomThu.prototype.initItem = function(SFSObject) {
        this.objInfo = SFSObject;
        var id = SFSObject.getInt("idMail");
        var tieuDe = SFSObject.getUtfString("header");
        var time = SFSObject.getLong("time");
        var index = SFSObject.getInt("index");
        this.lbStt.string = index + "";
        this.lbTieuDe.string = tieuDe;
        this.lbThoiGian.string = Windown_1.Windown.getShortTime(time);
        this.updateStatus(SFSObject.getInt("status"));
      };
      ItemHomThu.prototype.updateStatus = function(status) {
        this.node.children[1].active = 0 == status;
      };
      ItemHomThu.prototype.onClick = function() {
        Windown_1.Windown.HomThuController.mailView.updateInfo(this.objInfo);
      };
      __decorate([ property(cc.Label) ], ItemHomThu.prototype, "lbStt", void 0);
      __decorate([ property(cc.Label) ], ItemHomThu.prototype, "lbTieuDe", void 0);
      __decorate([ property(cc.Label) ], ItemHomThu.prototype, "lbThoiGian", void 0);
      ItemHomThu = __decorate([ ccclass ], ItemHomThu);
      return ItemHomThu;
    }(cc.Component);
    exports.default = ItemHomThu;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemIAP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5eaa5qp6vhBzpZyE62X//gA", "ItemIAP");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moneyNeed = 0;
        _this.moneyRevice = 0;
        return _this;
      }
      NewClass.prototype.onClick = function() {
        var string = "B\u1ea1n \u0111\u1ed3ng \xfd mua g\xf3i " + this.moneyNeed + "$ \u0111\u1ec3 \u0111\u01b0\u1ee3c " + this.moneyRevice + " v\xe0ng ?";
        Windown_1.Windown.Dialog.showLog(string, function() {});
      };
      __decorate([ property(cc.Float) ], NewClass.prototype, "moneyNeed", void 0);
      __decorate([ property(cc.Float) ], NewClass.prototype, "moneyRevice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemIconAdmin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0b42ewQ4NF+ZK/fcBR2wfu", "ItemIconAdmin");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.lbNumNotRead = null;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onClick = function(event, isNeedHelp) {
        cc.log("show windownchat");
        Windown_1.Windown.ChatAdminController.showWindownChat(this.lbName.string, isNeedHelp);
        event && event.stopPropagation();
      };
      NewClass.prototype.initItem = function(adminName, adminNameOpen) {
        this.lbName.string = adminName;
        adminNameOpen && adminName == adminNameOpen && this.onClick(null, true);
        this.updateCountNotRead();
      };
      NewClass.prototype.updateCountNotRead = function() {
        var num = Windown_1.Windown.ChatAdminController.getCountNotReadByAdmin(this.lbName.string);
        if (num > 0) {
          this.lbNumNotRead.node.parent.active = true;
          this.lbNumNotRead.string = num.toString();
        } else this.lbNumNotRead.node.parent.active = false;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbNumNotRead", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemIndicator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2b56lCaGRJKI16E9ydJssj", "ItemIndicator");
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
    var ItemIndicator = function(_super) {
      __extends(ItemIndicator, _super);
      function ItemIndicator() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbIndex = null;
        _this.nodeChecked = null;
        _this.pageData = null;
        _this.index = 0;
        return _this;
      }
      ItemIndicator.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemIndicator.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemIndicator.prototype.setPage = function(page) {
        this.pageData = page;
      };
      ItemIndicator.prototype.initIndex = function(index) {
        this.index = index;
        -1 != this.index ? this.lbIndex.string = index.toString() : this.lbIndex.string = "...";
      };
      ItemIndicator.prototype.getIndex = function() {
        return this.index;
      };
      ItemIndicator.prototype.onClick = function(event, data) {
        if (-1 == this.index) return;
        this.pageData.onClickIndicator(this.index);
      };
      ItemIndicator.prototype.setCheck = function(bool) {
        this.nodeChecked.active = bool;
      };
      __decorate([ property(cc.Label) ], ItemIndicator.prototype, "lbIndex", void 0);
      __decorate([ property(cc.Node) ], ItemIndicator.prototype, "nodeChecked", void 0);
      ItemIndicator = __decorate([ ccclass ], ItemIndicator);
      return ItemIndicator;
    }(cc.Component);
    exports.default = ItemIndicator;
    cc._RF.pop();
  }, {} ],
  ItemLevelController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9369rk4e1FxYJBGRBXUD91", "ItemLevelController");
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
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../DefineTs/TextDefine");
    var Windown_1 = require("../Windown");
    var GameType = cc.Enum({
      NONE: 0,
      BAN_CA: 32,
      XENG: 1
    });
    var TYPE = cc.Enum({
      GAME: 0,
      LEVEL: 1,
      ROOM: 2,
      GUNID: 3,
      CASH_OUT: 4
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var ItemLevelController = function(_super) {
      __extends(ItemLevelController, _super);
      function ItemLevelController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.type = TYPE.GAME;
        _this.gameType = GameType.NONE;
        _this.idRoom = 1;
        _this.imgLock = null;
        _this._isLock = false;
        _this.currentGunId = 0;
        _this.configCurrent = null;
        return _this;
      }
      Object.defineProperty(ItemLevelController.prototype, "isLock", {
        get: function() {
          return this._isLock;
        },
        set: function(value) {
          var cp = null == this.target ? null : this.target.getComponent(cc.Button);
          if (value && cp) {
            cp.interactable = false;
            this.onEvent();
          } else {
            cp && (cp.interactable = true);
            this.offEvent();
          }
          this.imgLock && (this.imgLock.node.active = value);
          this._isLock = value;
        },
        enumerable: false,
        configurable: true
      });
      ItemLevelController.prototype.onEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onclick, this);
      };
      ItemLevelController.prototype.offEvent = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onclick, this);
      };
      ItemLevelController.prototype.onclick = function(event) {
        var str = "";
        if (this.type == TYPE.CASH_OUT) {
          var levelCashOut = Windown_1.Windown.getLevelCashOut();
          str = TextDefine_1.TextDefine.NEED_LEVEL_C_OUT.formatString(levelCashOut);
        } else str = TextDefine_1.TextDefine.NEED_LEVEL;
        Windown_1.Windown.Dialog.showLog(str);
        event.stopPropagation();
      };
      ItemLevelController.prototype.onLoad = function() {
        null == this.target && (this.target = this.node);
        this.isLock = false;
      };
      ItemLevelController.prototype.onEnable = function() {
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP, this.emitNewData, this);
        this.emitNewData();
      };
      ItemLevelController.prototype.onDisable = function() {
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP, this.emitNewData, this);
        this.offEvent();
      };
      ItemLevelController.prototype.emitNewData = function() {
        this.configCurrent = Windown_1.Windown.getConfigLevel();
        if (null == this.configCurrent) return;
        switch (this.type) {
         case TYPE.GAME:
          this.setGame();
          break;

         case TYPE.CASH_OUT:
          this.setCashOut();
          break;

         case TYPE.ROOM:
          this.setRoom(this.idRoom);
          break;

         case TYPE.GUNID:
          this.setGunId(this.currentGunId);
        }
      };
      ItemLevelController.prototype.updateLevelConfig = function() {
        null == this.configCurrent && (this.configCurrent = Windown_1.Windown.getConfigLevel());
      };
      ItemLevelController.prototype.setGame = function() {
        var configCurrent = this.configCurrent;
        var listConfigGame = configCurrent.GameUnlock;
        this.isLock = true;
        if (null == listConfigGame) {
          this.isLock = false;
          return;
        }
        for (var i = 0, l = listConfigGame.length; i < l; i++) {
          var info = listConfigGame[i];
          if (info.GameId == this.gameType) {
            null != info.RoomType && info.RoomType.length > 0 && (this.isLock = false);
            break;
          }
        }
      };
      ItemLevelController.prototype.setCashOut = function() {
        var configCurrent = this.configCurrent;
        configCurrent.IsCashout ? this.isLock = false : this.isLock = true;
      };
      ItemLevelController.prototype.setRoom = function(id) {
        if (0 == id) return;
        this.idRoom = id;
        var configCurrent = this.configCurrent;
        var listConfigGame = configCurrent.GameUnlock;
        this.isLock = true;
        if (null == listConfigGame) {
          this.isLock = false;
          return;
        }
        for (var i = 0, l = listConfigGame.length; i < l; i++) {
          var info = listConfigGame[i];
          if (info.GameId == this.gameType) {
            null != info.RoomType && info.RoomType.length > 0 && (0 == info.RoomType[0] || info.RoomType.includes(this.idRoom)) && (this.isLock = false);
            break;
          }
        }
      };
      ItemLevelController.prototype.setGunId = function(id) {
        this.currentGunId = id;
        var configCurrent = this.configCurrent;
        var listConfigGame = configCurrent.GameUnlock;
        this.isLock = true;
        if (null == listConfigGame) {
          this.isLock = false;
          return;
        }
        for (var i = 0, l = listConfigGame.length; i < l; i++) {
          var info = listConfigGame[i];
          if (info.GameId == GameType.BAN_CA) {
            1 == this.idRoom ? null != info.GunType1 && info.GunType1.length > 0 && (0 == info.GunType1[0] || info.GunType1.includes(this.currentGunId + 1)) && (this.isLock = false) : null != info.GunType2 && info.GunType2.length > 0 && (0 == info.GunType2[0] || info.GunType2.includes(this.currentGunId + 1)) && (this.isLock = false);
            break;
          }
        }
      };
      __decorate([ property(cc.Node) ], ItemLevelController.prototype, "target", void 0);
      __decorate([ property({
        type: TYPE
      }) ], ItemLevelController.prototype, "type", void 0);
      __decorate([ property({
        type: GameType,
        visible: function() {
          var bool = this.type == TYPE.GAME || this.type == TYPE.ROOM;
          return bool;
        }
      }) ], ItemLevelController.prototype, "gameType", void 0);
      __decorate([ property({
        type: cc.Integer,
        visible: function() {
          var bool = this.type == TYPE.ROOM;
          return bool;
        }
      }) ], ItemLevelController.prototype, "idRoom", void 0);
      __decorate([ property({
        type: cc.Sprite,
        visible: function() {
          var bool = true;
          this.type == TYPE.LEVEL && (bool = false);
          bool || (this.imgLock = null);
          return bool;
        }
      }) ], ItemLevelController.prototype, "imgLock", void 0);
      ItemLevelController = __decorate([ ccclass, menu("ItemLevelController") ], ItemLevelController);
      return ItemLevelController;
    }(cc.Component);
    exports.default = ItemLevelController;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/TextDefine": "TextDefine",
    "../Windown": "Windown"
  } ],
  ItemLichSuGiaoDich: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8cdft3jJhNGJDUkK7pdIMO", "ItemLichSuGiaoDich");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbDate = null;
        _this.lbTransId = null;
        _this.lbTypeGiaoDich = null;
        _this.lbCardType = null;
        _this.lbCardAmount = null;
        _this.lbMoneyChange = null;
        _this.lbMoneyUser = null;
        _this.lbStatus = null;
        _this.btnHuy = null;
        _this.type = -1;
        _this.cardType = -1;
        return _this;
      }
      NewClass.prototype.initItem = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        this.lbDate.string = Windown_1.Windown.formatDate(new Date(SFSObject.getLong("date")), "MM/dd HH:mm:ss");
        this.lbTransId.string = SFSObject.getUtfString("transId");
        this.lbTypeGiaoDich.string = this.convertLoaiGiaoDich(SFSObject.getInt("typeGiaoDich"));
        this.type = SFSObject.getInt("typeGiaoDich");
        this.lbCardType.string = this.convertCardType(SFSObject.getInt("cardType"));
        this.cardType = SFSObject.getInt("cardType");
        this.lbCardAmount.string = Windown_1.Windown.formatNumber(SFSObject.getInt("cardAmount")) + "vn\u0111";
        this.lbMoneyUser.string = Windown_1.Windown.formatNumber(SFSObject.getLong("moneyUser"));
        this.lbMoneyChange.string = Windown_1.Windown.formatNumber(SFSObject.getInt("moneyChangeUser"));
        var status = SFSObject.getInt("status");
        this.lbStatus.string = this.convertTrangThai(status, this.lbStatus.node);
        if (0 == status && 1 != this.type) {
          this.btnHuy.node.active = true;
          this.lbStatus.node.active = false;
        } else {
          this.btnHuy.node.active = false;
          this.lbStatus.node.active = true;
        }
      };
      NewClass.prototype.convertCardType = function(type) {
        switch (type) {
         case 1:
          return "VIETTEL";

         case 2:
          return "MOBILE";

         case 3:
          return "VINA";

         case 4:
          return "MOMO";
        }
      };
      NewClass.prototype.convertLoaiGiaoDich = function(type) {
        if (1 == type) return "N\u1ea1p";
        return "\u0110\u1ed5i";
      };
      NewClass.prototype.convertTrangThai = function(trangThai, node) {
        node.color = cc.Color.GREEN;
        if (1 != this.type) {
          if (0 == trangThai) return "Ch\u1edd duy\u1ec7t";
          if (1 == trangThai) {
            node.color = cc.Color.RED;
            return "\u0110\xe3 h\u1ee7y";
          }
          return "Th\xe0nh c\xf4ng";
        }
        if (this.cardType < 4) {
          if (0 == trangThai) return "Th\xe0nh c\xf4ng";
          if (159 == trangThai) return "Ch\u1edd duy\u1ec7t";
          node.color = cc.Color.RED;
          return "Th\u1ea5t b\u1ea1i";
        }
        if (2 == trangThai) return "Th\xe0nh c\xf4ng";
        node.color = cc.Color.RED;
        return "Ch\u1edd";
      };
      NewClass.prototype.onClickHuy = function() {
        var _this = this;
        if (1 == this.type) return;
        cc.systemEvent.targetOff(this);
        cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.HuyDoiThe, function(SFSObject) {
          Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
          _this.lbStatus.string = _this.convertTrangThai(1, _this.lbStatus.node);
          _this.btnHuy.node.active = false;
          _this.lbStatus.node.active = true;
        }, this);
        Windown_1.Windown.UIManager.showLoading();
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putUtfString("id", this.lbTransId.string);
        sfsObj.putUtfString("info", "null");
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.HuyDoiThe, sfsObj);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbDate", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTransId", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTypeGiaoDich", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCardType", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCardAmount", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMoneyChange", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMoneyUser", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbStatus", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "btnHuy", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  ItemLichSuTraoThuong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49baboE4oRBtqIQKr0iUIE/", "ItemLichSuTraoThuong");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemRankWeek = function(_super) {
      __extends(ItemRankWeek, _super);
      function ItemRankWeek() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbRank = null;
        _this.lbName = null;
        _this.lbPoint = null;
        _this.lbGold = null;
        _this.lbThucNhan = null;
        _this.isMe = false;
        return _this;
      }
      ItemRankWeek.prototype.initItem = function(SFSObject) {
        this.lbRank.string = SFSObject.getInt("indexRank") + "";
        this.lbName.string = SFSObject.getUtfString("nickname");
        this.lbPoint.string = SFSObject.getLong("point").toString();
        this.lbGold.string = Windown_1.Windown.formatNumber(SFSObject.get("gold"));
        this.lbThucNhan.string = Windown_1.Windown.formatNumber(SFSObject.get("goldReviced"));
      };
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbRank", void 0);
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbPoint", void 0);
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbGold", void 0);
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbThucNhan", void 0);
      __decorate([ property(cc.Boolean) ], ItemRankWeek.prototype, "isMe", void 0);
      ItemRankWeek = __decorate([ ccclass ], ItemRankWeek);
      return ItemRankWeek;
    }(cc.Component);
    exports.default = ItemRankWeek;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemMoKhoa: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cafdqJd1JMR4tmpFWSgd4O", "ItemMoKhoa");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemMoKhoa = function(_super) {
      __extends(ItemMoKhoa, _super);
      function ItemMoKhoa() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbGunMoney = null;
        return _this;
      }
      ItemMoKhoa.prototype.initItem = function(money, index) {
        this.lbGunMoney.string = Windown_1.Windown.formatNumber(money);
        cc.Tween.stopAllByTarget(this.node);
        this.node.scale = 2;
        this.node.opacity = 0;
        cc.tween(this.node).delay(.5 * index).to(1, {
          scale: 1,
          opacity: 255
        }, {
          easing: "expoIn"
        }).start();
      };
      __decorate([ property(cc.Label) ], ItemMoKhoa.prototype, "lbGunMoney", void 0);
      ItemMoKhoa = __decorate([ ccclass ], ItemMoKhoa);
      return ItemMoKhoa;
    }(cc.Component);
    exports.default = ItemMoKhoa;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemMomo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aeef8jR9mFIrqejtKKUn9Hm", "ItemMomo");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../InfoERR");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var BaseItemQuick_1 = require("./BaseItemQuick");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemMomo = function(_super) {
      __extends(ItemMomo, _super);
      function ItemMomo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTenTk = null;
        _this.lbSoTk = null;
        _this.lbNoiDung = null;
        _this.edbCaptcha = null;
        _this.lbTimeMomo = null;
        _this.nodeReviceData = null;
        _this.funChedule = null;
        return _this;
      }
      ItemMomo.prototype.excuted = function() {
        Windown_1.Windown.QuickShop.parentButton.active = false;
        this.node.active = true;
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetConfigMomo, this.responseConfigMomo, this);
        this.edbCaptcha.node.active = true;
        this.nodeReviceData.active = false;
        this.onClickRefeshCaptCha();
      };
      ItemMomo.prototype.reset = function() {
        Windown_1.Windown.QuickShop.parentButton.active = true;
        this.node.active = false;
        cc.systemEvent.targetOff(this);
        this.unschedule(this.funChedule);
        this.edbCaptcha.string = "";
      };
      ItemMomo.prototype.onClickCoppy = function(event, data) {
        var str = "";
        switch (data) {
         case "ttk":
          str = this.lbTenTk.string;
          break;

         case "stk":
          str = this.lbSoTk.string;
          break;

         case "noidung":
          str = this.lbNoiDung.string;
        }
        Windown_1.Windown.coppyToClip(str);
      };
      ItemMomo.prototype.responseConfigMomo = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
        var stk = SFSObject.getUtfString("phoneNum");
        var tenTk = SFSObject.getUtfString("phoneName");
        var content = SFSObject.getUtfString("code");
        this.lbSoTk.string = stk;
        this.lbTenTk.string = tenTk;
        this.lbNoiDung.string = content;
        this.edbCaptcha.node.active = false;
        this.nodeReviceData.active = true;
        this.funCountDown(SFSObject.get("timeToExpired"));
      };
      ItemMomo.prototype.onClickNap = function() {
        var money = Windown_1.Windown.QuickShop.currentMoney;
        var captcha = this.edbCaptcha.string;
        try {
          if (captcha.length < 1) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullCaptcha);
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("amount", money);
          SFSObject.putUtfString("captcha", captcha);
          SFSObject.putInt("napvip", Windown_1.Windown.QuickShop.currentId);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetConfigMomoTuan, SFSObject);
          Windown_1.Windown.UIManager.showLoading();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      ItemMomo.prototype.funCountDown = function(time) {
        var _this = this;
        this.unschedule(this.funChedule);
        this.schedule(this.funChedule = function() {
          time--;
          _this.lbTimeMomo.string = "Th\u1eddi gian c\xf2n l\u1ea1i(" + time + ")";
          time < 1 && _this.reset();
        }, 1);
      };
      ItemMomo.prototype.onClickRefeshCaptCha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      __decorate([ property(cc.Label) ], ItemMomo.prototype, "lbTenTk", void 0);
      __decorate([ property(cc.Label) ], ItemMomo.prototype, "lbSoTk", void 0);
      __decorate([ property(cc.Label) ], ItemMomo.prototype, "lbNoiDung", void 0);
      __decorate([ property(cc.EditBox) ], ItemMomo.prototype, "edbCaptcha", void 0);
      __decorate([ property(cc.Label) ], ItemMomo.prototype, "lbTimeMomo", void 0);
      __decorate([ property(cc.Node) ], ItemMomo.prototype, "nodeReviceData", void 0);
      ItemMomo = __decorate([ ccclass ], ItemMomo);
      return ItemMomo;
    }(BaseItemQuick_1.default);
    exports.default = ItemMomo;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../InfoERR": "InfoERR",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./BaseItemQuick": "BaseItemQuick"
  } ],
  ItemMoveIconChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b831e9A1z1LWKB80Rz6V0X0", "ItemMoveIconChat");
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
    var Windown_1 = require("../../Windown");
    var ItemIconAdmin_1 = require("./ItemIconAdmin");
    var ItemRemoveIconChat_1 = require("./ItemRemoveIconChat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentItem = null;
        _this.parentWindown = null;
        _this.mask = null;
        _this.nodeIconMove = null;
        _this.nodeIconRemove = null;
        _this.lbCountNotRead = null;
        _this.posCache = null;
        _this.savePos = null;
        _this._vecStart = null;
        _this._v2OffsetChange = null;
        _this._isMoveBtnMiniGame = false;
        _this._isTouch = false;
        _this.isInRemoveArena = false;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.currentNameAdmin = "";
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        this.initEvent();
      };
      NewClass.prototype.onTouchStart = function(touch) {
        var v2Touch = cc.v2(touch.getLocation());
        var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsetY));
        this._vecStart = target;
        this._v2OffsetChange = this.nodeIconMove.getPosition().subSelf(target);
        this._isMoveBtnMiniGame = false;
        this._isTouch = true;
        touch.stopPropagation();
      };
      NewClass.prototype.onTouchMove = function(touch) {
        if (this._isTouch) {
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsetY));
          var posMove = this.getPosIconMove(target.addSelf(this._v2OffsetChange));
          if (posMove) {
            this.nodeIconMove.setPosition(posMove);
            this.savePos = this.nodeIconMove.getPosition();
            this._isMoveBtnMiniGame = true;
            this.nodeIconRemove.node.active || (this.nodeIconRemove.node.active = true);
          }
        }
        touch.stopPropagation();
      };
      NewClass.prototype.onClickClose = function() {
        cc.log("nhay me vao click close");
        this.parentItem.active = false;
        this.mask.active = false;
        this.removeAllWindownChat();
      };
      NewClass.prototype.onTouchEnd = function(touch) {
        this._isTouch = false;
        var v2Touch = cc.v2(touch.getLocation());
        var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsetY));
        target.subSelf(this._vecStart).mag() < 15 ? this.onClick() : this.checkPosition();
        touch.stopPropagation();
        this.nodeIconRemove.node.active = false;
      };
      NewClass.prototype.onTouchCancel = function(touch) {
        this._isTouch = false;
        this.checkPosition();
        this._isMoveBtnMiniGame || this.onClick();
        this.nodeIconRemove.node.active = false;
        touch.stopPropagation();
      };
      NewClass.prototype.onClick = function() {
        cc.log("click nay");
        this.fixedPosInOpen();
      };
      NewClass.prototype.onDisable = function() {
        this.nodeIconMove.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.nodeIconMove.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.nodeIconMove.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.nodeIconMove.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.currentNameAdmin = null;
      };
      NewClass.prototype.initEvent = function() {
        this.savePos = this.nodeIconMove.getPosition();
        this.posCache = null;
        this.nodeIconMove.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.nodeIconMove.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.nodeIconMove.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.nodeIconMove.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      };
      NewClass.prototype.firtShow = function() {
        this.offsetX = cc.winSize.width / 2;
        this.offsetY = cc.winSize.height / 2;
        this.parentItem.active = false;
        this.mask.active = false;
        var offsetX = this.offsetX - 640;
        var offsetY = this.offsetY - 360;
        this.nodeIconMove.setPosition(580 + offsetX, 250 + offsetY);
        Windown_1.Windown.UIManager.playSoundWithUrl("Sound1/inbox");
      };
      NewClass.prototype.initListIcon = function(list, nameAdminOpen) {
        var itemTempPlate = this.parentItem.children[0];
        var children = this.parentItem.children;
        for (var i = 0, l = list.length; i < l; i++) {
          var node = children[i];
          if (null == node) {
            node = cc.instantiate(itemTempPlate);
            node.parent = this.parentItem;
          }
          node.active = true;
          node.getComponent(ItemIconAdmin_1.default).initItem(list[i], nameAdminOpen);
        }
        for (var i = list.length; i < children.length; i++) children[i].active = false;
        nameAdminOpen && this.fixedPosInOpen();
        this.emitNewCountNotRead();
      };
      NewClass.prototype.emitNewCountNotReadByAdmin = function(adminName) {
        Windown_1.Windown.ChatAdminController.onRemoveCountNotRead(adminName);
        for (var _i = 0, _a = this.parentItem.children; _i < _a.length; _i++) {
          var temp = _a[_i];
          var cp = temp.getComponent(ItemIconAdmin_1.default);
          if (cp.lbName.string == adminName) {
            cp.updateCountNotRead();
            this.emitNewCountNotRead();
            break;
          }
        }
      };
      NewClass.prototype.emitNewCountNotRead = function() {
        var totalCount = Windown_1.Windown.ChatAdminController.getTotalCountNotRead();
        if (totalCount > 0) {
          this.lbCountNotRead.node.parent.active = true;
          this.lbCountNotRead.string = totalCount.toString();
        } else this.lbCountNotRead.node.parent.active = false;
      };
      NewClass.prototype.addWindown = function(node, adminName) {
        this.removeAllWindownChat();
        this.mask.active = true;
        node.parent = this.parentWindown;
        this.currentNameAdmin = adminName;
      };
      NewClass.prototype.removeAllWindownChat = function() {
        for (var _i = 0, _a = this.parentWindown.children; _i < _a.length; _i++) {
          var temp = _a[_i];
          temp.parent = null;
        }
        this.currentNameAdmin = null;
      };
      NewClass.prototype.fixedPosInOpen = function() {
        var _this = this;
        if (this.parentItem.active) {
          this.onClickClose();
          var child = this.parentItem.children;
          for (var temp in child) {
            var timeDelay = .1 * parseInt(temp);
            cc.Tween.stopAllByTarget(child[temp]);
            child[temp].scale = 0;
            cc.tween(child[temp]).delay(timeDelay).to(.1, {
              scale: 0
            }, {
              easing: "backOut"
            }).start();
          }
          cc.Tween.stopAllByTarget(this.parentItem);
          cc.tween(this.parentItem).delay(timeDelay + .2).call(function() {
            _this.parentItem.active = false;
          }).start();
        } else {
          var offsetX = this.offsetX - 640;
          var offsetY = this.offsetY - 360;
          this.nodeIconMove.setPosition(580 + offsetX, 250 + offsetY);
          this.parentItem.active = true;
          var child = this.parentItem.children;
          for (var temp in child) {
            var timeDelay_1 = .1 * parseInt(temp);
            cc.Tween.stopAllByTarget(child[temp]);
            child[temp].scale = 0;
            cc.tween(child[temp]).delay(timeDelay_1).to(.1, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
          }
        }
      };
      NewClass.prototype.getPosIconMove = function(posTouch) {
        var isIn = this.nodeIconRemove.checkIsArena(posTouch);
        if (this.isInRemoveArena != isIn) if (isIn) {
          this.nodeIconRemove.setColor(cc.Color.RED);
          this.nodeIconMove.runAction(cc.moveTo(.1, this.nodeIconRemove.node.getPosition()).easing(cc.easeElasticOut(.1)));
        } else {
          this.node.stopAllActions();
          this.nodeIconRemove.setColor(cc.Color.WHITE);
        }
        this.isInRemoveArena = isIn;
        if (!isIn) return posTouch;
        return null;
      };
      NewClass.prototype.checkPosition = function() {
        if (this.isInRemoveArena) {
          this.node.parent = null;
          this.removeAllWindownChat();
          return;
        }
        var X = 0;
        var Y = this.nodeIconMove.y;
        var posTarget = null;
        this.nodeIconMove.y > this.offsetY - this.nodeIconMove.height / 2 && (Y = this.offsetY - this.nodeIconMove.height / 2);
        this.nodeIconMove.y < -this.offsetY + this.nodeIconMove.height / 2 && (Y = -this.offsetY + this.nodeIconMove.height / 2);
        posTarget = this.nodeIconMove.x >= 0 ? cc.v2(this.offsetX - this.nodeIconMove.width / 2 - 10, Y) : cc.v2(-this.offsetX + this.nodeIconMove.width / 2 + 10, Y);
        this.nodeIconMove.stopAllActions();
        this.nodeIconMove.runAction(cc.moveTo(.15, posTarget).easing(cc.easeBackOut()));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentWindown", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeIconMove", void 0);
      __decorate([ property(ItemRemoveIconChat_1.default) ], NewClass.prototype, "nodeIconRemove", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCountNotRead", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "./ItemIconAdmin": "ItemIconAdmin",
    "./ItemRemoveIconChat": "ItemRemoveIconChat"
  } ],
  ItemNhiemVu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b779ERiFtL0YsstM7Y+VEL", "ItemNhiemVu");
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
    var PathResource_1 = require("../../DefineTs/PathResource");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.lbName = null;
        _this.imgProgress = null;
        _this.lbProgress = null;
        _this.lbMoney = null;
        _this.lbStatus = null;
        _this.btnRevice = null;
        _this.idQuest = -1;
        _this._info = null;
        _this.status = -1;
        return _this;
      }
      NewClass.prototype.initItem = function(info) {
        this._info = info;
        var idQuest = info.getInt("type");
        var typeImg = info.getInt("typeImg");
        var curent = info.getInt("currenttarget");
        var total = info.getInt("questtarget");
        var status = info.getInt("status");
        var name = this.getNameQuestById(idQuest);
        var moneyRevice = info.getInt("agtarget");
        var index = info.getInt("index");
        this.idQuest = idQuest;
        this.status = status;
        curent > total && (curent = total);
        this.node.children[0].color = index % 2 != 0 ? cc.Color.GRAY : cc.Color.WHITE;
        this.getImg(typeImg);
        if (0 == curent) this.imgProgress.node.active = false; else {
          this.imgProgress.node.active = true;
          this.imgProgress.fillRange = curent / total;
        }
        this.updateState(status);
        this.lbProgress.string = curent + "/" + total;
        this.lbName.string = name;
        this.lbMoney.string = Windown_1.Windown.formatNumber(moneyRevice);
      };
      NewClass.prototype.updateState = function(status) {
        this.btnRevice.interactable = 2 != status;
        if (0 == status) this.lbStatus.string = TextDefine_1.TextDefine.Quest_ChuaXong; else if (1 == status) this.lbStatus.string = TextDefine_1.TextDefine.Quest_Xong; else if (2 == status) this.lbStatus.string = TextDefine_1.TextDefine.Quest_DaNhan; else {
          cc.log("co no nay");
          this.lbStatus.string = TextDefine_1.TextDefine.Quest_DaNhan;
        }
        this._info.putInt("status", status);
      };
      NewClass.prototype.getImg = function(type) {
        var _this = this;
        var str = PathResource_1.PathResource.QuestItem;
        str = str.replace("%d", type);
        cc.resources.load(str, cc.SpriteFrame, function(err, sp) {
          if (err || !_this.node.active) return;
          _this.img.spriteFrame = sp;
        });
      };
      NewClass.prototype.onClick = function() {
        var _this = this;
        if (0 == this.status) Windown_1.Windown.NhiemVuConTroller.questView && Windown_1.Windown.NhiemVuConTroller.questView.node.parent && Windown_1.Windown.NhiemVuConTroller.questView.onClickClose(null, function() {
          switch (_this.idQuest) {
           case 2:
            cc.sys.openURL(Windown_1.Windown.LinkFanpage);
            break;

           case 3:
            Windown_1.Windown.UIManager.showXacThucTele(false);
            break;

           case 1:
            Windown_1.Windown.UIManager.showBonusNap();
            break;

           case 100:
            Windown_1.Windown.UIManager.showShop(2);
            break;

           case 101:
            Windown_1.Windown.UIManager.showShop(0);
            break;

           case 102:
            Windown_1.Windown.MainView ? Windown_1.Windown.MainView.onClickJoinBongDem(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
            break;

           case 103:
            Windown_1.Windown.MainView ? Windown_1.Windown.MainView.onClickJoinTruTien(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
            break;

           case 104:
            Windown_1.Windown.MainView ? Windown_1.Windown.MainView.onClickJoinDieuThuyen(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
            break;

           case 105:
            Windown_1.Windown.MainView ? Windown_1.Windown.MainView.onClickJoinXeng(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
            break;

           case 106:
            Windown_1.Windown.MainView ? Windown_1.Windown.MainView.onClickJoinNgoKhong(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
            break;

           case 107:
            Windown_1.Windown.BtnMiniGame ? Windown_1.Windown.BtnMiniGame.onClick(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
            break;

           case 108:
            Windown_1.Windown.MainView ? Windown_1.Windown.MainView.onClickJoinNeko(null, null, true) : Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_QUICK_JOIN_GAME);
          }
        }); else if (1 == this.status) {
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("type", this.idQuest);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetQuestFinish, SFSObject);
        }
      };
      NewClass.prototype.getNameQuestById = function(id) {
        switch (id) {
         case 2:
          return "Like v\xe0 Share Fanpage nh\u1eadn 30.000 gold";

         case 3:
          return "X\xe1c th\u1ef1c s\u1ed1 \u0111i\u1ec7n tho\u1ea1i";

         case 1:
          return "N\u1ea1p \u0111\u1ee7 3 g\xf3i n\u1ea1p t\xe2n th\u1ee7 nh\u1eadn ngay 20.000 gold";

         case 100:
          return "T\u1ed5ng n\u1ea1p MOMO trong ng\xe0y \u0111\u1ea1t 100.000 VND";

         case 101:
          return "T\u1ed5ng n\u1ea1p Th\u1ebb C\xe0o trong ng\xe0y \u0111\u1ea1t 100.000 VND";

         case 102:
          return "Ti\xeau di\u1ec7t 500 con c\xe1";

         case 103:
          return "T\u1ed5ng th\u1eafng game Tru Ti\xean 500.000";

         case 104:
          return "T\u1ed5ng th\u1eafng game \u0110i\xeau Thuy\u1ec1n 500.000";

         case 105:
          return "T\u1ed5ng th\u1eafng game X\xe8ng 500.000";

         case 106:
          return "T\u1ed5ng th\u1eafng game Ng\u1ed9 Kh\xf4ng 500.000";

         case 107:
          return "T\u1ed5ng th\u1eafng game T\xe0i X\u1ec9u 10.000.000";

         case 108:
          return "T\u1ed5ng th\u1eafng game Neko 500.000";
        }
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "img", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbName", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "imgProgress", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbProgress", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbMoney", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbStatus", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "btnRevice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/PathResource": "PathResource",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  ItemRankMonth: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3e60tL6GVMy4Il2vBYnyS/", "ItemRankMonth");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemRankMonth = function(_super) {
      __extends(ItemRankMonth, _super);
      function ItemRankMonth() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.lbPoint = null;
        _this.lbLvl = null;
        _this.spAva = null;
        _this.lbRank = null;
        _this.isMe = false;
        _this.idPlayer = null;
        return _this;
      }
      ItemRankMonth.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemRankMonth.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemRankMonth.prototype.initItem = function(SFSObject) {
        this.idPlayer = SFSObject.getInt("id");
        this.lbName.string = SFSObject.getUtfString("nickname");
        this.lbPoint.string = SFSObject.get("exp");
        this.lbLvl.string = SFSObject.get("currentlevel");
        this.lbRank && (this.isMe ? this.lbRank.string = "H\u1ea1ng " + SFSObject.getInt("index") : this.lbRank.string = SFSObject.getInt("index") + "");
        Windown_1.Windown.updateAvatar(SFSObject, this.spAva);
      };
      ItemRankMonth.prototype.onClick = function() {
        if (null == this.idPlayer) return;
        Windown_1.Windown.UIManager.showLoading();
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("Id", this.idPlayer);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetInfo, SFSObject);
      };
      __decorate([ property(cc.Label) ], ItemRankMonth.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], ItemRankMonth.prototype, "lbPoint", void 0);
      __decorate([ property(cc.Label) ], ItemRankMonth.prototype, "lbLvl", void 0);
      __decorate([ property(cc.Sprite) ], ItemRankMonth.prototype, "spAva", void 0);
      __decorate([ property(cc.Label) ], ItemRankMonth.prototype, "lbRank", void 0);
      __decorate([ property(cc.Boolean) ], ItemRankMonth.prototype, "isMe", void 0);
      ItemRankMonth = __decorate([ ccclass ], ItemRankMonth);
      return ItemRankMonth;
    }(cc.Component);
    exports.default = ItemRankMonth;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  ItemRankWeek: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "921d6h1B4RM/Y1gso2F/T7G", "ItemRankWeek");
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
    var ClearCacheBase64_1 = require("../../ClearCacheBase64");
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemRankWeek = function(_super) {
      __extends(ItemRankWeek, _super);
      function ItemRankWeek() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.lbMoney = null;
        _this.spAva = null;
        _this.lbRank = null;
        _this.isMe = false;
        _this.idPlayer = null;
        return _this;
      }
      ItemRankWeek.prototype.onLoad = function() {
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onCloseXepHang, this.onClose, this);
      };
      ItemRankWeek.prototype.onClose = function() {
        this.spAva.getComponent(ClearCacheBase64_1.default).onClear();
      };
      ItemRankWeek.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemRankWeek.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemRankWeek.prototype.onDestroy = function() {
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onCloseXepHang, this.onClose, this);
      };
      ItemRankWeek.prototype.initItem = function(SFSObject) {
        this.idPlayer = SFSObject.getInt("id");
        this.lbName.string = SFSObject.getUtfString("nickname");
        this.lbMoney.string = Windown_1.Windown.formatNumber(SFSObject.getLong("gold"));
        this.lbRank && (this.isMe ? this.lbRank.string = "H\u1ea1ng " + SFSObject.getInt("index") : this.lbRank.string = SFSObject.getInt("index") + "");
        Windown_1.Windown.updateAvatar(SFSObject, this.spAva);
      };
      ItemRankWeek.prototype.onClick = function() {
        if (null == this.idPlayer) return;
        Windown_1.Windown.UIManager.showLoading();
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("Id", this.idPlayer);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetInfo, SFSObject);
      };
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbMoney", void 0);
      __decorate([ property(cc.Sprite) ], ItemRankWeek.prototype, "spAva", void 0);
      __decorate([ property(cc.Label) ], ItemRankWeek.prototype, "lbRank", void 0);
      __decorate([ property(cc.Boolean) ], ItemRankWeek.prototype, "isMe", void 0);
      ItemRankWeek = __decorate([ ccclass ], ItemRankWeek);
      return ItemRankWeek;
    }(cc.Component);
    exports.default = ItemRankWeek;
    cc._RF.pop();
  }, {
    "../../ClearCacheBase64": "ClearCacheBase64",
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  ItemRemoveIconChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa58fQbV49Kybm3GStzQuZd", "ItemRemoveIconChat");
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
        _this.yS = null;
        _this.yE = null;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        null == this.yS && (this.yS = 510 + cc.winSize.height / 2 - 360);
        null == this.yE && (this.yE = 290 + cc.winSize.height / 2 - 360);
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(.5));
      };
      NewClass.prototype.checkIsArena = function(node) {
        if (node.x >= this.node.x - 100 && node.x <= this.node.x + 100 && node.y >= this.node.y - 100 && node.y <= this.node.y + 100) return true;
        return false;
      };
      NewClass.prototype.setColor = function(color) {
        this.node.children[1].color = color;
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ItemSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "109f9In/yZIBqwvrTyzca69", "ItemSafe");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isRevert = false;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        cc.log("isSafe: " + Windown_1.Windown.IsSafe);
        Windown_1.Windown.IsSafe ? this.node.active = !this.isRevert : this.node.active = this.isRevert;
      };
      __decorate([ property(cc.Boolean) ], NewClass.prototype, "isRevert", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ItemSpin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94a8bT/IL5HY52rh2w5C0Rh", "ItemSpin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        imgType: cc.Node,
        imgTypeXDV: cc.Node
      },
      onLoad: function onLoad() {
        this.onEvent();
      },
      onEvent: function onEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
      },
      offEvent: function offEvent() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
      },
      onClick: function onClick() {
        Global.GenData.viewInfoSesion(this.data, this.node);
      },
      init: function init(data) {
        this.data = data;
        var dataBet = data.modelByClient;
        var totalMoneyBet = dataBet.green + dataBet.red + dataBet.yello;
        for (var i = 0, l = dataBet.listBetItem.length; i < l; i++) totalMoneyBet += dataBet.listBetItem[i];
        Global.GenData.moneyCurrent -= totalMoneyBet;
        var dataRevice = data.modelMakebet;
        var dataNormal = dataRevice.makeBetNormal;
        var dataXDV = dataRevice.makebetXDV;
        var dataAnTruoc = dataRevice.makeBetAnTruoc;
        var totalMoneyRevice = dataNormal.objReviceFirtItem.moneyRevice;
        totalMoneyRevice += dataAnTruoc.moneyRevice;
        for (var _i = 0, _l = dataNormal.ListObjReviceSub.length; _i < _l; _i++) totalMoneyRevice += dataNormal.ListObjReviceSub[_i].moneyRevice;
        totalMoneyRevice += dataXDV.reviceXanh;
        totalMoneyRevice += dataXDV.reviceDo;
        totalMoneyRevice += dataXDV.reviceVang;
        Global.GenData.moneyCurrent += totalMoneyRevice;
        this.data.moneyPlayer = Global.GenData.moneyCurrent;
        var pos = Global.GenData.getPosByMoneyAndSpinCount(data.moneyPlayer, this.data.idSpin + 1);
        this.node.position = pos;
        Global.GenData.drawLine(pos);
        this.setColorType(dataNormal.typeSpecial);
        this.setColorTypeXDV(dataXDV.typeSpecial);
      },
      setColorType: function setColorType(type) {
        switch (type) {
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
          this.imgType.color = cc.Color.YELLOW;
          break;

         case 6:
         case 8:
         case 11:
         case 12:
         case 9:
         case 10:
         case 13:
         case 7:
          this.imgType.color = cc.Color.GREEN;
          break;

         case 14:
          this.imgType.color = cc.Color.RED;
          break;

         default:
          this.imgType.color = cc.Color.WHITE;
        }
      },
      setColorTypeXDV: function setColorTypeXDV(type) {
        switch (type) {
         case 1:
         case 2:
          this.imgTypeXDV.color = cc.Color.RED;
          break;

         case 3:
          this.imgTypeXDV.color = cc.Color.YELLOW;
          break;

         case 4:
          this.imgTypeXDV.color = cc.Color.GREEN;
          break;

         default:
          this.imgTypeXDV.color = cc.Color.WHITE;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ItemSuKien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9df80VAf9BL4oz3AaoKk0AR", "ItemSuKien");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbStt = null;
        _this.lbInfo = null;
        _this.objInfo = null;
        return _this;
      }
      NewClass.prototype.init = function(obj) {
        this.objInfo = obj;
        this.lbStt.string = obj.getInt("index").toString();
        obj.getInt("id") % 2 == 0 ? this.node.children[0].color = cc.Color.GRAY : this.node.children[0].color = cc.Color.WHITE;
        this.lbInfo.string = obj.getUtfString("tenSuKien");
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.SuKien.tabSuKien.showInfo(this.objInfo);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbStt", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbInfo", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemTangCap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ca18rI7gRItKH1mkIJ6FRx", "ItemTangCap");
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
    var ItemType = cc.Enum({
      MONEY: 0,
      ICE: 1,
      SPEED: 2,
      TARGET: 3
    });
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemTangCap = function(_super) {
      __extends(ItemTangCap, _super);
      function ItemTangCap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSp = [];
        _this.spItem = null;
        _this.lbAmount = null;
        return _this;
      }
      ItemTangCap.prototype.initItem = function(SFSObject) {
        var type = SFSObject.getInt("Type");
        var amount = SFSObject.getInt("Value");
        var index = SFSObject.getInt("index");
        this.spItem.spriteFrame = this.getSFbyType(type);
        this.lbAmount.string = Windown_1.Windown.formatNumber(amount);
        cc.Tween.stopAllByTarget(this.node);
        this.node.scale = 2;
        this.node.opacity = 0;
        cc.tween(this.node).delay(.5 * index).to(1, {
          scale: 1,
          opacity: 255
        }, {
          easing: "expoIn"
        }).start();
      };
      ItemTangCap.prototype.getSFbyType = function(type) {
        if (type < 100) {
          4 == type && (type = 7);
          return this.listSp[type];
        }
        if (200 == type) return this.listSp[4];
        if (1e3 == type) return this.listSp[6];
        if (1001 == type) return this.listSp[5];
      };
      __decorate([ property([ cc.SpriteFrame ]) ], ItemTangCap.prototype, "listSp", void 0);
      __decorate([ property(cc.Sprite) ], ItemTangCap.prototype, "spItem", void 0);
      __decorate([ property(cc.Label) ], ItemTangCap.prototype, "lbAmount", void 0);
      ItemTangCap = __decorate([ ccclass ], ItemTangCap);
      return ItemTangCap;
    }(cc.Component);
    exports.default = ItemTangCap;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  JackpotItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d4ce28IO5Kw4d5hMM57gdA", "JackpotItem");
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
    var Windown_1 = require("../Windown");
    var LbMoneyChange_1 = require("./LbMoneyChange");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var GameType = cc.Enum({
      FISH: 32,
      THAN_TAI: 2,
      TRU_TIEN: 33
    });
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.gameType = GameType.FISH;
        _this.offsetStart = .8;
        _this.per = 1;
        _this.isFirt = true;
        _this.lbMoney = null;
        _this.mapMoneyCachePer = new Map();
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.lbMoney = this.getComponent(LbMoneyChange_1.default);
        this.lbMoney.time = 10;
      };
      NewClass.prototype.onEnable = function() {
        Windown_1.Windown.JackpotManager.dangKyLabel(this);
        this.emitNewData();
      };
      NewClass.prototype.onDisable = function() {
        Windown_1.Windown.JackpotManager.huyDangKyLabel(this);
      };
      NewClass.prototype.emitNewData = function() {
        if (null == Windown_1.Windown.JackpotManager.infoJackpot) return;
        if (this.gameType == GameType.FISH) {
          var str = "fish" + this.index;
          var money = Windown_1.Windown.JackpotManager.infoJackpot.getLong(str) * this.per;
          this.updateMoney(money);
        } else if (this.gameType == GameType.TRU_TIEN) {
          var str = "slot1";
          var money = Windown_1.Windown.JackpotManager.infoJackpot.getLong(str) * this.per;
          this.updateMoney(money);
        }
      };
      NewClass.prototype.changeIndex = function(index) {};
      NewClass.prototype.reset = function() {
        this.mapMoneyCachePer.clear();
        this.lbMoney._currentMonney = 0;
        this.lbMoney.resetLb();
        this.isFirt = true;
      };
      NewClass.prototype.changePer = function(per) {
        this.mapMoneyCachePer.set(this.per, this.lbMoney._currentMonney);
        var moneyLast = this.mapMoneyCachePer.get(per);
        cc.log(moneyLast);
        void 0 == moneyLast ? this.isFirt = true : this.lbMoney._currentMonney = moneyLast;
        this.per = per;
        this.emitNewData();
      };
      NewClass.prototype.updateMoney = function(money) {
        if (this.isFirt) {
          this.lbMoney._currentMonney = money * this.offsetStart;
          this.isFirt = false;
        }
        this.lbMoney.setMoney(money);
      };
      __decorate([ property(cc.Integer) ], NewClass.prototype, "index", void 0);
      __decorate([ property({
        type: GameType
      }) ], NewClass.prototype, "gameType", void 0);
      __decorate([ property(cc.Float) ], NewClass.prototype, "offsetStart", void 0);
      __decorate([ property(cc.Float) ], NewClass.prototype, "per", void 0);
      NewClass = __decorate([ ccclass, requireComponent(LbMoneyChange_1.default) ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./LbMoneyChange": "LbMoneyChange"
  } ],
  JackpotManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "469caVIbu1HUKB3G7sYjDY8", "JackpotManager");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JackpotManager = function(_super) {
      __extends(JackpotManager, _super);
      function JackpotManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.infoJackpot = null;
        _this.listItems = [];
        _this.timeRunJackpot = 5;
        _this.timeRequestjackpot = 5;
        return _this;
      }
      JackpotManager.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
        Windown_1.Windown.JackpotManager = this;
      };
      JackpotManager.prototype.onDestroy = function() {
        Windown_1.Windown.JackpotManager = this;
      };
      JackpotManager.prototype.start = function() {};
      JackpotManager.prototype.reviceData = function(data) {
        this.infoJackpot = data;
        this.listItems.forEach(function(v) {
          v.emitNewData();
        });
      };
      JackpotManager.prototype.sendGetJackpot = function() {};
      JackpotManager.prototype.dangKyLabel = function(component) {
        this.listItems.includes(component) || this.listItems.push(component);
      };
      JackpotManager.prototype.huyDangKyLabel = function(component) {
        var index = this.listItems.indexOf(component);
        index > -1 && this.listItems.splice(index, 1);
      };
      JackpotManager = __decorate([ ccclass ], JackpotManager);
      return JackpotManager;
    }(cc.Component);
    exports.default = JackpotManager;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  LbMoneyChange: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51285Z3WLtLkq3nj7qtpTPH", "LbMoneyChange");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var LbMonneyChange = function(_super) {
      __extends(LbMonneyChange, _super);
      function LbMonneyChange() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.time = .5;
        _this.lb = null;
        _this.objEasing = null;
        _this._currentMonney = 0;
        _this._monney = 0;
        _this.formatMoney = false;
        return _this;
      }
      LbMonneyChange.prototype.onLoad = function() {
        this.lb = this.getComponent(cc.Label);
        this.objEasing = {};
      };
      LbMonneyChange.prototype.resetLb = function() {
        cc.Tween.stopAllByTarget(this);
        this.lb && (this.lb.string = "0");
        this._currentMonney = 0;
        this._monney = 0;
      };
      LbMonneyChange.prototype.setMoneyNoTime = function(money, formatMoney) {
        void 0 === formatMoney && (formatMoney = false);
        this.resetLb();
        this._currentMonney = money;
        this._monney = money;
        this.lb.string = formatMoney ? Windown_1.Windown.formatMoney(parseInt(this._currentMonney.toString())) : Windown_1.Windown.formatNumber(parseInt(this._currentMonney.toString()));
      };
      LbMonneyChange.prototype.onDisable = function() {
        cc.Tween.stopAllByTarget(this);
      };
      LbMonneyChange.prototype.setMoney = function(monney, isFormatMoney, frontString, isDot) {
        var _this = this;
        void 0 === isFormatMoney && (isFormatMoney = false);
        void 0 === frontString && (frontString = "");
        void 0 === isDot && (isDot = true);
        cc.Tween.stopAllByTarget(this);
        this.formatMoney = isFormatMoney;
        this._monney = monney;
        cc.tween(this).to(this.time, {
          _currentMonney: {
            value: this._monney,
            progress: function(start, end, current, ratio) {
              var _current = start + (end - start) * ratio;
              if (isFormatMoney) _this.lb.string = frontString + Windown_1.Windown.formatMoney(parseInt(_current), 1, 1e6); else {
                var str = frontString + Windown_1.Windown.formatNumber(parseInt(_current));
                isDot || (str = str.replace(/[.]/g, ""));
                _this.lb && (_this.lb.string = str);
              }
              return _current;
            }
          }
        }).start();
      };
      __decorate([ property(cc.Float) ], LbMonneyChange.prototype, "time", void 0);
      LbMonneyChange = __decorate([ ccclass, requireComponent(cc.Label) ], LbMonneyChange);
      return LbMonneyChange;
    }(cc.Component);
    exports.default = LbMonneyChange;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  LichSuGiaoDich: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b102c9wbRFubyi6Qz6BJCP", "LichSuGiaoDich");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var PageData_1 = require("../PageData/PageData");
    var ItemLichSuGiaoDich_1 = require("./ItemLichSuGiaoDich");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuGiaoDich = function(_super) {
      __extends(LichSuGiaoDich, _super);
      function LichSuGiaoDich() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.parentType = null;
        _this.listData = null;
        _this.currentTye = -1;
        _this.curentRoom = 1;
        _this.maxRow = 11;
        return _this;
      }
      LichSuGiaoDich.prototype.onLoad = function() {
        Windown_1.Windown.LichSuGiaoDich = this;
      };
      LichSuGiaoDich.prototype.onDestroy = function() {
        Windown_1.Windown.LichSuGiaoDich = null;
      };
      LichSuGiaoDich.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
        Windown_1.Windown.UIManager.showLoading();
        this.reset();
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetTranscationsShop, null, this.response.bind(this));
      };
      LichSuGiaoDich.prototype.response = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        this.initWithListData(SFSObject.getSFSArray("listData"));
        Windown_1.Windown.UIManager.hideLoading();
      };
      LichSuGiaoDich.prototype.initWithListData = function(listData) {
        var lengthRows = listData.size();
        var totalPage = parseInt(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.listData = listData;
        this.onChangePage(1);
      };
      LichSuGiaoDich.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuGiaoDich_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuGiaoDich.prototype.onClickActiveType = function() {
        this.parentType.active = !this.parentType.active;
      };
      LichSuGiaoDich.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuGiaoDich.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuGiaoDich.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(PageData_1.default) ], LichSuGiaoDich.prototype, "pageDate", void 0);
      __decorate([ property(cc.Node) ], LichSuGiaoDich.prototype, "parentType", void 0);
      LichSuGiaoDich = __decorate([ ccclass ], LichSuGiaoDich);
      return LichSuGiaoDich;
    }(cc.Component);
    exports.default = LichSuGiaoDich;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "../PageData/PageData": "PageData",
    "./ItemLichSuGiaoDich": "ItemLichSuGiaoDich"
  } ],
  LichSuTraoThuong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58289TLUXxJ553RDXHHLBUi", "LichSuTraoThuong");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var ItemLichSuTraoThuong_1 = require("./ItemLichSuTraoThuong");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.currentType = -1;
        return _this;
      }
      NewClass.prototype.show = function(type) {
        this.node.active = true;
        if (this.currentType == type) return;
        this.currentType = type;
        var sfs = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfs.putInt("type", type);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetHistoryRank, sfs, this.responseServer.bind(this));
      };
      NewClass.prototype.onToggle = function(event, data) {
        "week" == data ? this.show(0) : this.show(1);
      };
      NewClass.prototype.responseServer = function(SFSObject) {
        cc.log("nhay vao response lichsu");
        var listSFSArray = SFSObject.getSFSArray("listData");
        var listTemp = [];
        for (var i = 0, l = listSFSArray.size(); i < l; i++) listTemp.push(listSFSArray.getSFSObject(i));
        listTemp.sort(function(a, b) {
          var indexRankA = a.getInt("indexRank");
          var indexRankB = b.getInt("indexRank");
          return indexRankA - indexRankB;
        });
        var children = this.content.children;
        for (var i = 0, l = children.length; i < l; i++) {
          var cp = children[i].getComponent(ItemLichSuTraoThuong_1.default);
          if (i < listTemp.length) {
            cp.node.active = true;
            cp.initItem(listTemp[i]);
          } else cp.node.active = false;
        }
      };
      NewClass.prototype.onClickClose = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "content", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "./ItemLichSuTraoThuong": "ItemLichSuTraoThuong"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a2acfru5VIVqPR5Lg9kCxH", "Loading");
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
  MainView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e4aciY5iJFhZZI8ZQ9Q4KF", "MainView");
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
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("./DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("./DefineTs/TextDefine");
    var GAME_TYPE_1 = require("./Game/GAME_TYPE");
    var ConectManager_1 = require("./Network/ConectManager");
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainView = function(_super) {
      __extends(MainView, _super);
      function MainView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbName = null;
        _this.btnLogout = null;
        _this.nodeLogin = null;
        _this.parentIcon = null;
        _this.imgAvatar = null;
        _this.lbNumNhiemVuDone = null;
        _this.lbNumMailNotRead = null;
        _this.numNotReadMail = 0;
        _this.numDoneQuest = 0;
        _this.spBanNgay = null;
        _this.spBanDem = null;
        _this.spMain = null;
        _this.btnPlayNow = null;
        _this.btnDangKy = null;
        _this.btnFirtNap = null;
        _this.spritetest = null;
        _this.listTkErr = [];
        return _this;
      }
      MainView.prototype.onDisable = function() {};
      MainView.prototype.onLoad = function() {
        Windown_1.Windown.MainView = this;
        cc.find("info", this.node).active = false;
        this.btnLogout.active = false;
        this.nodeLogin.active = true;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onConnect, this.onConnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onLogout, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetIdJoinRoom, this.responseGetIdRoom, this);
      };
      MainView.prototype.onDestroy = function() {
        cc.systemEvent.targetOff(this);
        Windown_1.Windown.MainView = null;
        cc.sys.isNative && jsb.Device.setKeepScreenOn(true);
      };
      MainView.prototype.start = function() {
        cc.sys.isNative && jsb.Device.setKeepScreenOn(false);
        var now = new Date();
        var hour = now.getHours();
        this.spMain.spriteFrame = hour >= 19 || hour < 5 ? this.spBanDem : this.spBanNgay;
        this.node.setContentSize(cc.winSize);
        this.setStatusButton();
        var actionScale = cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, .9)));
        this.lbNumNhiemVuDone.node.parent.runAction(actionScale.clone());
        this.lbNumMailNotRead.node.parent.runAction(actionScale.clone());
        this.lbNumNhiemVuDone.node.parent.active = false;
        this.lbNumMailNotRead.node.parent.active = false;
        Windown_1.Windown.User.isLogin ? this.initUIUser() : null != Windown_1.Windown.getDeviceID() && ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        var list = [];
      };
      MainView.prototype.setStatusButton = function() {
        if (cc.sys.isNative) {
          this.btnDangKy.active = false;
          this.btnPlayNow.active = true;
        } else {
          this.btnDangKy.active = true;
          this.btnPlayNow.active = false;
        }
      };
      MainView.prototype.onConnect = function() {
        if (Windown_1.Windown.isFirtConnect && null == Windown_1.Windown.BotController) {
          var isDangNhap = Windown_1.Windown.getLocalStorage("autoLogin");
          if (isDangNhap && "true" == isDangNhap) {
            var userName = Windown_1.Windown.getLocalStorage("userName");
            var password = Windown_1.Windown.getLocalStorage("userPass");
            userName && "" != userName && password && "" != password && ConectManager_1.ConectManager.getIns().sendLogin(userName, password, "");
          }
          if (cc.sys.isNative) {
            var isFirtGoApp = Windown_1.Windown.getLocalStorage("isLogInPlayNow");
            isFirtGoApp && "true" == isFirtGoApp && this.onClickGuest();
            var isLoginFb = Windown_1.Windown.getLocalStorage("isLogInFb");
            isLoginFb && "true" == isLoginFb && this.onClickLoginFB();
          } else {
            var url = new URL(window.location.toString());
            var searchParams = new URLSearchParams(url.search);
            var token = searchParams.get("token");
            if (null != token && "" != token) {
              cc.log("token la " + token);
              var data = Object.create(null);
              data.tokenInWeb = token;
              ConectManager_1.ConectManager.getIns().loginFb(data);
            }
          }
        }
        Windown_1.Windown.isFirtConnect = false;
      };
      MainView.prototype.onClickTest = function() {};
      MainView.prototype.initUIUser = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.lbName.string = Windown_1.Windown.User.nickName;
            this.btnLogout.active = true;
            this.nodeLogin.active = false;
            cc.find("info", this.node).active = true;
            this.updateAvatar(Windown_1.Windown.SFSInfouser);
            cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP);
            Windown_1.Windown.Firebase.sendInViewLobby();
            this.btnFirtNap.getComponent(cc.Animation).play("BtnFirtNapOn");
            this.btnFirtNap.getComponent(cc.Button).interactable = true;
            this.updateNumNotReadMail(Windown_1.Windown.HomThuController.countNotRead);
            this.updateNumDoneQuest();
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetAccountBlance, null);
            Windown_1.Windown.BotController && Windown_1.Windown.BotController.onLeaveRoomFish();
            return [ 2 ];
          });
        });
      };
      MainView.prototype.updateNumDoneQuest = function() {
        if (Windown_1.Windown.NhiemVuConTroller.numQuestDone > 0) {
          this.lbNumNhiemVuDone.node.parent.active = true;
          this.lbNumNhiemVuDone.string = Windown_1.Windown.NhiemVuConTroller.numQuestDone.toString();
        } else this.lbNumNhiemVuDone.node.parent.active = false;
      };
      MainView.prototype.updateNumNotReadMail = function(numNotReadMail) {
        if (numNotReadMail > 0) {
          this.lbNumMailNotRead.node.parent.active = true;
          this.lbNumMailNotRead.string = numNotReadMail.toString();
        } else this.lbNumMailNotRead.node.parent.active = false;
      };
      MainView.prototype.updateAvatar = function(Object) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            Windown_1.Windown.updateAvatar(Object, this.imgAvatar);
            return [ 2 ];
          });
        });
      };
      MainView.prototype.onLogout = function() {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.find("info", this.node).active = false;
        this.lbNumNhiemVuDone.node.parent.active = false;
        this.lbNumMailNotRead.node.parent.active = false;
        this.btnLogout.active = false;
        this.nodeLogin.active = true;
      };
      MainView.prototype.onClickDangNhap = function() {
        Windown_1.Windown.UIManager.showDangNhap();
      };
      MainView.prototype.onClickDangKy = function() {
        Windown_1.Windown.getDeviceID();
        Windown_1.Windown.UIManager.showDangKy();
      };
      MainView.prototype.onClickBonusNap = function() {
        Windown_1.Windown.UIManager.showBonusNap();
      };
      MainView.prototype.onClickVongQuay = function() {
        Windown_1.Windown.UIManager.showVongQuay();
      };
      MainView.prototype.onClickTietKiem = function() {
        Windown_1.Windown.UIManager.showTietKiem();
      };
      MainView.prototype.onClickTuiDo = function() {
        Windown_1.Windown.UIManager.showTuiDo();
      };
      MainView.prototype.onClickCuaHang = function() {
        Windown_1.Windown.UIManager.showCuaHang();
      };
      MainView.prototype.onClickLoginFB = function() {
        Windown_1.Windown.getDeviceID();
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        if (cc.sys.isNative) if (sdkbox.PluginFacebook.isLoggedIn) {
          var data = {
            id: sdkbox.PluginFacebook.getUserID(),
            token: sdkbox.PluginFacebook.getAccessToken()
          };
          if (0 == data.id.toString().length || 0 == data.token.length) {
            console.log("nhay vao sendLogin fb ios ne");
            sdkbox.PluginFacebook.logout();
            Windown_1.Windown.UIManager.showLoading();
            sdkbox.PluginFacebook.login();
            return;
          }
          ConectManager_1.ConectManager.getIns().loginFb(data);
        } else {
          Windown_1.Windown.UIManager.showLoading();
          console.log("nhay vao sendLogin fb ios ne");
          sdkbox.PluginFacebook.login();
        } else this.CheckLFbLoginState();
      };
      MainView.prototype.OnFbStatusChangeCallback = function(response) {
        cc.log("statusChangeCallback");
      };
      MainView.prototype.CheckLFbLoginState = function() {
        var url = new URL(window.location.toString());
        var searchParams = new URLSearchParams(url.search);
        var token = searchParams.get("token");
        if (null != token && "" != token && !this.listTkErr.includes(token)) {
          var data = Object.create(null);
          data.tokenInWeb = token;
          ConectManager_1.ConectManager.getIns().loginFb(data);
          return;
        }
        Windown_1.Windown.isClickBtnLogout = false;
        window.location = "https://authcx.co";
      };
      MainView.prototype.onClickThoat = function() {
        if (cc.sys.isNative) cc.sys.os != cc.sys.OS_WINDOWS && sdkbox.PluginFacebook.logout(); else {
          var url = new URL(window.location.toString());
          var searchParams = new URLSearchParams(url.search);
          var token = searchParams.get("token");
          null == token || "" == token || this.listTkErr.includes(token) || this.listTkErr.push(token);
        }
        Windown_1.Windown.isClickBtnLogout = true;
        Windown_1.Windown.setLocalStorage("userName", "");
        Windown_1.Windown.setLocalStorage("userPass", "");
        Windown_1.Windown.setLocalStorage("isLogInPlayNow", "false");
        Windown_1.Windown.setLocalStorage("isLogInFb", "false");
        ConectManager_1.ConectManager.getIns().sendLogout();
      };
      MainView.prototype.onClicShop = function() {
        Windown_1.Windown.UIManager.showShop();
      };
      MainView.prototype.onClickSuKien = function() {
        Windown_1.Windown.UIManager.showSuKien();
      };
      MainView.prototype.onClickGiftCode = function() {
        Windown_1.Windown.UIManager.showGiftCode();
      };
      MainView.prototype.onClickNhiemVu = function() {
        Windown_1.Windown.UIManager.showNhiemVu();
      };
      MainView.prototype.onClickHomThu = function() {
        Windown_1.Windown.UIManager.showHomThu();
      };
      MainView.prototype.onClickHoTro = function() {
        Windown_1.Windown.UIManager.showHoTro();
      };
      MainView.prototype.onClickShop = function() {
        Windown_1.Windown.UIManager.showShop();
      };
      MainView.prototype.onClickXepHang = function() {
        Windown_1.Windown.UIManager.showXepHang();
      };
      MainView.prototype.onClickThongTin = function() {
        Windown_1.Windown.UIManager.showLoading();
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("Id", Windown_1.Windown.User.userId);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetInfo, sfsObj);
      };
      MainView.prototype.onClickCaiDat = function() {
        Windown_1.Windown.UIManager.showCaiDat();
      };
      MainView.prototype.onClickBaner = function() {
        Windown_1.Windown.UIManager.showSuKien();
      };
      MainView.prototype.onClickGuest = function() {
        Windown_1.Windown.UIManager.showLoading();
        Windown_1.Windown.getDeviceID();
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        ConectManager_1.ConectManager.getIns().loginGuest();
      };
      MainView.prototype.onClickFanPage = function() {
        Windown_1.Windown.LinkFanpage && cc.sys.openURL(Windown_1.Windown.LinkFanpage);
      };
      MainView.prototype.onClickDoi = function() {
        Windown_1.Windown.UIManager.showShop(1);
      };
      MainView.prototype.onClickJoinBongDem = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, a, abc;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickJoinBongDem(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.BongDem, funNex);
              if (!!isReturn) return [ 3, 3 ];
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.BongDem.toString()) ];

             case 1:
              _a.sent();
              return [ 4, Promise.resolve().then(function() {
                return require("../Bundle/FishBongDem/Scritps/Game/FishBongDem");
              }) ];

             case 2:
              a = _a.sent();
              Windown_1.Windown.UIManager.hideLoading();
              abc = new a.default();
              abc.initGame();
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      MainView.prototype.onClickJoinXeng = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, a, abc;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickJoinXeng(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.Xeng, funNex);
              if (!!isReturn) return [ 3, 3 ];
              Windown_1.Windown.UIManager.showLoading();
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.Xeng.toString()) ];

             case 1:
              _a.sent();
              return [ 4, Promise.resolve().then(function() {
                return require("../Bundle/Xeng/Scritps/XengController");
              }) ];

             case 2:
              a = _a.sent();
              Windown_1.Windown.UIManager.hideLoading();
              abc = new a.default();
              abc.intiGame();
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      MainView.prototype.onClickJoinTruTien = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, bundle_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickJoinTruTien(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.TruTien, funNex);
              if (!!isReturn) return [ 3, 2 ];
              Windown_1.Windown.UIManager.showLoadingData();
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.TruTien.toString()) ];

             case 1:
              bundle_1 = _a.sent();
              bundle_1.preloadScene("TruTien", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                bundle_1.loadScene("TruTien", function(err, scence) {
                  if (err) {
                    Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                    Windown_1.Windown.UIManager.hideLoadingData();
                    return;
                  }
                  cc.director.runScene(scence, null, function() {});
                });
              });
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      MainView.prototype.onClickJoinDieuThuyen = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, bundle_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickJoinDieuThuyen(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.DieuThuyen, funNex);
              if (!!isReturn) return [ 3, 2 ];
              Windown_1.Windown.UIManager.showLoadingData();
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.DieuThuyen.toString()) ];

             case 1:
              bundle_2 = _a.sent();
              bundle_2.preloadScene("DieuThuyen", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                bundle_2.loadScene("DieuThuyen", function(err, scence) {
                  if (err) {
                    Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                    Windown_1.Windown.UIManager.hideLoadingData();
                    return;
                  }
                  cc.director.runScene(scence, null, function() {});
                });
              });
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      MainView.prototype.onClickJoinNgoKhong = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, bundle_3;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickJoinNgoKhong(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.NgoKhong, funNex);
              if (!!isReturn) return [ 3, 2 ];
              Windown_1.Windown.UIManager.showLoadingData();
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.NgoKhong.toString()) ];

             case 1:
              bundle_3 = _a.sent();
              bundle_3.preloadScene("NgoKhong", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                bundle_3.loadScene("NgoKhong", function(err, scence) {
                  if (err) {
                    Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                    Windown_1.Windown.UIManager.hideLoadingData();
                    return;
                  }
                  cc.director.runScene(scence, null, function() {});
                });
              });
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      MainView.prototype.onClickJoinNeko = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, bundle_4;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickJoinNeko(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.Neko, funNex);
              if (!!isReturn) return [ 3, 2 ];
              Windown_1.Windown.UIManager.showLoadingData();
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.Neko.toString()) ];

             case 1:
              bundle_4 = _a.sent();
              bundle_4.preloadScene("Neko", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                bundle_4.loadScene("Neko", function(err, scence) {
                  if (err) {
                    Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                    Windown_1.Windown.UIManager.hideLoadingData();
                    return;
                  }
                  cc.director.runScene(scence, null, function() {});
                });
              });
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      MainView.prototype.onClickTaiXiu = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      MainView.prototype.responseGetIdRoom = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        var id = SFSObject.getInt("idRoom");
        ConectManager_1.ConectManager.getIns().sendJoinRoom(id);
      };
      MainView.prototype.getItemIconGameByType = function(gameType) {
        var list = [];
        var node = cc.find(gameType.toString(), this.parentIcon);
        node && list.push(node);
        return list;
      };
      __decorate([ property(cc.Label) ], MainView.prototype, "lbName", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "btnLogout", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "nodeLogin", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "parentIcon", void 0);
      __decorate([ property(cc.Sprite) ], MainView.prototype, "imgAvatar", void 0);
      __decorate([ property(cc.Label) ], MainView.prototype, "lbNumNhiemVuDone", void 0);
      __decorate([ property(cc.Label) ], MainView.prototype, "lbNumMailNotRead", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainView.prototype, "spBanNgay", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainView.prototype, "spBanDem", void 0);
      __decorate([ property(cc.Sprite) ], MainView.prototype, "spMain", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "btnPlayNow", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "btnDangKy", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "btnFirtNap", void 0);
      __decorate([ property(cc.Sprite) ], MainView.prototype, "spritetest", void 0);
      MainView = __decorate([ ccclass ], MainView);
      return MainView;
    }(cc.Component);
    exports.default = MainView;
    cc._RF.pop();
  }, {
    "../Bundle/FishBongDem/Scritps/Game/FishBongDem": void 0,
    "../Bundle/Xeng/Scritps/XengController": void 0,
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "./DefineTs/TextDefine": "TextDefine",
    "./Game/GAME_TYPE": "GAME_TYPE",
    "./Network/ConectManager": "ConectManager",
    "./Windown": "Windown"
  } ],
  MakeDelay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00435LXTBZF2bxZ8m0r8djZ", "MakeDelay");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ObjMakeDelay_1 = require("./ObjMakeDelay");
    var MakeDelay = function() {
      function MakeDelay(node) {
        this.mapMakeDelay = null;
        this.target = node;
        this.mapMakeDelay = new Map();
      }
      MakeDelay.prototype.getDelay = function(time) {
        var _this = this;
        var id = Date.now() + this.mapMakeDelay.size;
        var handle = function(resolve, rejects) {
          var fun = function() {
            resolve();
            _this.mapMakeDelay.delete(id);
          };
          _this.mapMakeDelay.set(id, fun);
          _this.target.scheduleOnce(fun, time);
        };
        return new ObjMakeDelay_1.default(this, new Promise(handle), id);
      };
      MakeDelay.prototype.cancaleDelay = function(id, isComplet) {
        var fun = this.mapMakeDelay.get(id);
        if (void 0 != fun) {
          this.target.unschedule(fun);
          isComplet && fun();
        }
      };
      MakeDelay.prototype.clear = function() {
        var _this = this;
        this.mapMakeDelay.forEach(function(v) {
          _this.target.unschedule(v);
        });
        this.mapMakeDelay.clear();
      };
      return MakeDelay;
    }();
    exports.default = MakeDelay;
    cc._RF.pop();
  }, {
    "./ObjMakeDelay": "ObjMakeDelay"
  } ],
  ModelLevel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d27btqTYFIvLRg9fEQRkK4", "ModelLevel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  MoneyUserController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ea7bDdjEBE4oJPmxGKeL9V", "MoneyUserController");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MoneyUserController = function(_super) {
      __extends(MoneyUserController, _super);
      function MoneyUserController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listLabel = [];
        _this.moneyCache = 0;
        _this.objDelay = new Map();
        _this.listHandleNewMoney = [];
        return _this;
      }
      MoneyUserController.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
        Windown_1.Windown.MoneyUser = this;
      };
      MoneyUserController.prototype.onDestroy = function() {
        Windown_1.Windown.MoneyUser = null;
      };
      MoneyUserController.prototype.emitNewMonney = function() {
        for (var i = 0, l = this.listLabel.length; i < l; i++) this.listLabel[i].emitNewMoney();
        this.listHandleNewMoney.forEach(function(v) {
          v["fun"].call(v["target"], Windown_1.Windown.User.userAg);
        });
      };
      MoneyUserController.prototype.dangKy = function(component) {
        this.listLabel.includes(component) || this.listLabel.push(component);
      };
      MoneyUserController.prototype.huyDangKy = function(component) {
        var index = this.listLabel.indexOf(component);
        index > -1 && this.listLabel.splice(index, 1);
      };
      MoneyUserController.prototype.subMoney = function(money, moneyPlayer) {
        this.moneyCache = moneyPlayer;
        this.updateMoney();
      };
      MoneyUserController.prototype.dangKyHandle = function(fun, target) {
        var obj = Object.create(null);
        obj.fun = fun;
        obj.target = target;
        this.listHandleNewMoney.push(obj);
      };
      MoneyUserController.prototype.removeHandle = function(fun, target) {
        var listFun = this.listHandleNewMoney.filter(function(e) {
          return e["target"] == target;
        });
        for (var i = 0; i < listFun.length; i++) if (listFun[i] == fun) {
          listFun.splice(i, 1);
          i--;
        }
      };
      MoneyUserController.prototype.targetOff = function(target) {
        var index = this.listHandleNewMoney.findIndex(function(v) {
          return v["target"] == target;
        });
        index > -1 && this.listHandleNewMoney.splice(index, 1);
      };
      MoneyUserController.prototype.pushDelayMoney = function(gameType, totalMoney, moneyAdd) {
        this.moneyCache = parseInt(totalMoney);
        var MoneyCacheByGame = this.objDelay.get(gameType);
        void 0 == MoneyCacheByGame && (MoneyCacheByGame = 0);
        this.objDelay.set(gameType, MoneyCacheByGame + moneyAdd);
        Windown_1.Windown.User.userAg = this.getMoneyCurrentWhitDelay();
      };
      MoneyUserController.prototype.removeDelay = function(gameType, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.objDelay.delete(gameType);
        isUpdate && this.updateMoney();
      };
      MoneyUserController.prototype.getMoneyDelay = function(gameType) {
        return this.objDelay.get(gameType) || 0;
      };
      MoneyUserController.prototype.getMoneyCurrentWhitDelay = function() {
        var moneyDelay = 0;
        this.objDelay.forEach(function(v, k) {
          moneyDelay += v;
        });
        return this.moneyCache - moneyDelay;
      };
      MoneyUserController.prototype.updateMoney = function() {
        this.setMoneyUser(this.getMoneyCurrentWhitDelay());
      };
      MoneyUserController.prototype.endGameMOney = function(gameType) {
        this.removeDelay(gameType);
      };
      MoneyUserController.prototype.setMoneyUser = function(money) {
        Windown_1.Windown.User.userAg = money;
        this.emitNewMonney();
      };
      MoneyUserController = __decorate([ ccclass ], MoneyUserController);
      return MoneyUserController;
    }(cc.Component);
    exports.default = MoneyUserController;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  MoneyUser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9533HWoDRDeo/SqOYrNOro", "MoneyUser");
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
    var Windown_1 = require("../Windown");
    var LbMoneyChange_1 = require("./LbMoneyChange");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var MoneyUser = function(_super) {
      __extends(MoneyUser, _super);
      function MoneyUser() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbMoney = null;
        return _this;
      }
      MoneyUser.prototype.onLoad = function() {
        this.lbMoney = this.getComponent(LbMoneyChange_1.default);
        Windown_1.Windown.MoneyUser.dangKy(this);
      };
      MoneyUser.prototype.onDestroy = function() {
        Windown_1.Windown.MoneyUser && Windown_1.Windown.MoneyUser.huyDangKy(this);
      };
      MoneyUser.prototype.start = function() {
        cc.log("tien user la " + Windown_1.Windown.User.userAg);
        this.emitNewMoney();
      };
      MoneyUser.prototype.emitNewMoney = function() {
        this.lbMoney.setMoney(Windown_1.Windown.User.userAg);
      };
      MoneyUser = __decorate([ ccclass, requireComponent(LbMoneyChange_1.default) ], MoneyUser);
      return MoneyUser;
    }(cc.Component);
    exports.default = MoneyUser;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./LbMoneyChange": "LbMoneyChange"
  } ],
  NapBank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51425KVNI1A06jWLr4RCYmR", "NapBank");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../InfoERR");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbStkBank = null;
        _this.lbTtkBank = null;
        _this.lbContentBank = null;
        _this.lbRateBonusBank = null;
        _this.lbRateBank = null;
        _this.edbMoneyBank = null;
        _this.edbCaptchaBank = null;
        _this.nodeInfoBank = null;
        _this.nodeReviceInfoBank = null;
        _this.parentListBank = null;
        _this.lbTimeBank = null;
        _this.lbCurrentBankName = null;
        _this.lbCurrentBankName2 = null;
        _this.funCd = null;
        _this.curentBankCode = "null";
        _this.funCapcha = null;
        return _this;
      }
      NewClass.prototype.excuted = function() {
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetConfigBank, this.responseConfigBank, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetListBank, this.responseListBank, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.HuyBank, this.responseHuyBank, this);
        this.edbMoneyBank.string = "";
        this.edbCaptchaBank.string = "";
        this.lbStkBank.string = "...";
        this.lbTtkBank.string = "...";
        this.lbContentBank.string = "...";
        this.lbRateBank.string = "...";
        this.lbRateBonusBank.string = "...";
        this.lbCurrentBankName2.string = "Ch\u1ecdn ng\xe2n h\xe0ng";
        this.nodeInfoBank.active = true;
        this.nodeReviceInfoBank.active = false;
        Windown_1.Windown.CapchaController.requestCapcha();
        null != Windown_1.Windown.ShopView.cardAmountShow && (this.edbMoneyBank.string = Windown_1.Windown.ShopView.cardAmountShow.toString());
        this.scheduleOnce(this.funCapcha = function() {
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetListBank, null);
        }, .5);
      };
      NewClass.prototype.onClickChooseBank = function(event, data) {
        var obj = null;
        try {
          obj = JSON.parse(data);
          this.lbCurrentBankName2.string = obj.name;
          this.curentBankCode = obj.code;
          this.onClickShowListChooseBank();
          cc.log("nhay vao choose bank ne");
        } catch (e) {
          cc.error(e);
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
        }
      };
      NewClass.prototype.onClickShowListChooseBank = function() {
        var node = this.parentListBank.parent.parent;
        node.stopAllActions();
        if (node.active) node.runAction(cc.sequence(cc.scaleTo(.3, 1, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
          node.active = false;
        }))); else {
          node.active = true;
          node.runAction(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()));
        }
      };
      NewClass.prototype.onClickCoppy = function(event, data) {
        var str = "";
        switch (data) {
         case "ttk":
          str = this.lbTtkBank.string;
          break;

         case "stk":
          str = this.lbStkBank.string;
          break;

         case "noidung":
          str = this.lbContentBank.string;
        }
        Windown_1.Windown.coppyToClip(str);
      };
      NewClass.prototype.onClickNap = function() {
        var money = Number(this.edbMoneyBank.string);
        var captcha = this.edbCaptchaBank.string;
        try {
          if ("null" == this.curentBankCode) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullBank);
          if (isNaN(money)) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMenhGia);
          if (money < 1e4) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.LonHon10000);
          if (money % 1e4 != 0) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.BoiSo10000);
          if (captcha.length < 1) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullCaptcha);
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("amount", money);
          SFSObject.putUtfString("st", this.curentBankCode);
          SFSObject.putUtfString("type", "bank");
          SFSObject.putUtfString("captcha", captcha);
          null != Windown_1.Windown.ShopView.idGoi && SFSObject.putInt("napvip", Windown_1.Windown.ShopView.idGoi);
          cc.log("data gui len: " + Windown_1.Windown.SFSObjToJson(SFSObject));
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetConfigMomo, SFSObject);
          Windown_1.Windown.UIManager.showLoading();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      NewClass.prototype.onClickHuy = function() {
        this.responseHuyBank();
      };
      NewClass.prototype.onEdbChange = function(str) {
        str = str.replace(/[.]/g, "");
        str = Windown_1.Windown.formatNumber(str);
        this.edbMoneyBank.string = str;
        this.edbMoneyBank.focus();
      };
      NewClass.prototype.funCountDown = function(time) {
        var _this = this;
        this.schedule(this.funCd = function() {
          time--;
          _this.lbTimeBank.string = "Th\u1eddi gian c\xf2n l\u1ea1i(" + time + ")";
          time < 1 && _this.responseHuyBank();
        }, 1);
      };
      NewClass.prototype.responseListBank = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
        var arrListBank = SFSObject.getSFSArray("listBank");
        var itemTemplate = this.parentListBank.children[0];
        for (var i = 0, l = arrListBank.size(); i < l; i++) {
          var node = this.parentListBank.children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentListBank;
          }
          node.active = true;
          var data = arrListBank.getSFSObject(i);
          var type = data.get("code");
          var name = data.get("name");
          itemTemplate.getComponentInChildren(cc.Label).string = name;
          itemTemplate.getComponent(cc.Button).clickEvents[0].customEventData = Windown_1.Windown.SFSObjToJson(data);
        }
        for (var i = arrListBank.size(); i < this.parentListBank.childrenCount; i++) this.parentListBank.children[i].active = false;
      };
      NewClass.prototype.responseConfigBank = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var stk = SFSObject.getUtfString("phoneNum");
        var tenTk = SFSObject.getUtfString("phoneName");
        var content = SFSObject.getUtfString("code");
        var rate = SFSObject.getDouble("rate");
        var rateBonus = SFSObject.getDouble("rateBonus");
        var moneyRequireBonus = SFSObject.getDouble("requireBonus");
        this.lbStkBank.string = stk;
        this.lbTtkBank.string = tenTk;
        this.lbContentBank.string = content;
        this.lbRateBank.string = "1:" + rate;
        this.lbRateBonusBank.string = rateBonus > 0 ? TextDefine_1.TextDefine.RateBonusMomo.formatString(Windown_1.Windown.formatNumber(moneyRequireBonus), 10 * rateBonus) : "";
        this.nodeInfoBank.active = false;
        this.nodeReviceInfoBank.active = true;
        this.funCountDown(SFSObject.get("timeToExpired"));
        this.lbCurrentBankName.string = SFSObject.getUtfString("bank_provider");
      };
      NewClass.prototype.responseHuyBank = function() {
        Windown_1.Windown.UIManager.hideLoading();
        this.unschedule(this.funCd);
        this.curentBankCode = "null";
        this.nodeInfoBank.active = true;
        this.nodeReviceInfoBank.active = false;
        Windown_1.Windown.CapchaController.requestCapcha();
        this.edbMoneyBank.string = "";
        this.lbCurrentBankName.string = "Ch\u1ecdn Ng\xe2n H\xe0ng";
        this.lbCurrentBankName2.string = "Ch\u1ecdn ng\xe2n h\xe0ng";
      };
      NewClass.prototype.reset = function() {
        this.unschedule(this.funCd);
        this.unschedule(this.funCapcha);
        cc.systemEvent.targetOff(this);
        this.curentBankCode = "null";
        this.lbCurrentBankName.string = "Ch\u1ecdn Ng\xe2n H\xe0ng";
        this.lbCurrentBankName2.string = "Ch\u1ecdn ng\xe2n h\xe0ng";
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbStkBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTtkBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbContentBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbRateBonusBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbRateBank", void 0);
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "edbMoneyBank", void 0);
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "edbCaptchaBank", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeInfoBank", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeReviceInfoBank", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentListBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTimeBank", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCurrentBankName", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbCurrentBankName2", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../InfoERR": "InfoERR",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  NapTab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5a884QfWJML4SUyI09O8kc", "NapTab");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../InfoERR");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var NapBank_1 = require("./NapBank");
    var StateNapMomo_1 = require("./State/StateNapMomo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VT = 1;
    var MB = 2;
    var VN = 3;
    var MOMO = 4;
    var VB = 5;
    var NapTab = function(_super) {
      __extends(NapTab, _super);
      function NapTab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCard = null;
        _this.nodeVDT = null;
        _this.edbSeri = null;
        _this.edbMaThe = null;
        _this.toggleVt = null;
        _this.content = null;
        _this.toggleCard = null;
        _this.toggleVdt = null;
        _this.toggleBank = null;
        _this.lbMenhGia = null;
        _this.lbNoteMenhGia = null;
        _this.lbStkMomo = null;
        _this.lbTtkMomo = null;
        _this.lbContentMomo = null;
        _this.lbRateBonus = null;
        _this.lbRate = null;
        _this.edbMoneyMomo = null;
        _this.edbCaptchaMomo = null;
        _this.nodeInfo = null;
        _this.nodeReviceInfoMomo = null;
        _this.lbTimeMomo = null;
        _this.napBank = null;
        _this.currentMenhGia = 0;
        _this.currentTypeNhaMang = -1;
        _this.lastMenhGiaCardNode = null;
        _this.currentState = null;
        return _this;
      }
      NapTab.prototype.onLoad = function() {
        this.initNodeMove(Windown_1.Windown.ShopView.node);
        this.resignEdb(this.edbCaptchaMomo);
        this.resignEdb(this.edbMoneyMomo);
        this.resignEdb(this.edbMaThe);
        this.resignEdb(this.edbSeri);
      };
      NapTab.prototype.emitNewData = function() {
        this.currentTypeNhaMang = VT;
        this.initMenhGia();
      };
      NapTab.prototype.onDisable = function() {
        cc.systemEvent.removeAll(this);
        this.currentState && this.currentState.reset();
      };
      NapTab.prototype.reset = function() {
        this.toggleVdt.check();
        this.edbSeri.string = "";
        this.edbMaThe.string = "";
        this.lbMenhGia.string = "0 VN\u0110";
        this.currentMenhGia = 0;
      };
      NapTab.prototype.resetChangeNhaMang = function() {
        this.edbSeri.string = "";
        this.edbMaThe.string = "";
        this.lbMenhGia.string = "0 VN\u0110";
        this.currentMenhGia = 0;
        this.lbNoteMenhGia.active = true;
      };
      NapTab.prototype.resetInfoMomo = function() {
        this.lbStkMomo.string = "...";
        this.lbTtkMomo.string = "...";
        this.lbContentMomo.string = "...";
        this.lbRate.string = "...";
        this.lbRateBonus.string = "...";
      };
      NapTab.prototype.toggleCardCheck = function(event, data) {
        if (event.isChecked) {
          cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.CashInCardNew, this.responseNap, this);
          cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.CashInCardTuan, this.responseNap, this);
          this.nodeCard.active = true;
          this.nodeVDT.active = false;
          this.toggleVt.check();
          this.toggleVdt.uncheck();
          this.toggleBank.uncheck();
          this.currentState && this.currentState.reset();
        }
      };
      NapTab.prototype.toggleVDTCheck = function(event, data) {
        if (event.isChecked) {
          null == this.currentState && (this.currentState = new StateNapMomo_1.default(this));
          this.currentState.executed();
          this.toggleBank.uncheck();
        }
      };
      NapTab.prototype.toggleBankCheck = function(event, data) {
        if (event.isChecked) {
          this.nodeCard.active = false;
          this.nodeVDT.active = false;
          this.toggleCard.uncheck();
          this.toggleVdt.uncheck();
          this.currentState && this.currentState.reset();
        }
      };
      NapTab.prototype.onEdbMoneyMomoChange = function(string) {
        cc.log("string: " + string);
        this.currentState.onEdbChange(string);
      };
      NapTab.prototype.toggleNhaMangCheck = function(event, data) {
        if ("toggleVT" == event.node.name) {
          this.currentTypeNhaMang = VT;
          this.initMenhGia();
        } else if ("toggleMB" == event.node.name) {
          this.currentTypeNhaMang = MB;
          this.initMenhGia();
        } else if ("toggleVN" == event.node.name) {
          this.currentTypeNhaMang = VN;
          this.initMenhGia();
        } else if ("toggleVB" == event.node.name) {
          this.currentTypeNhaMang = VB;
          this.initMenhGia();
        }
      };
      NapTab.prototype.initMenhGia = function() {
        var list = Windown_1.Windown.ShopView.ArrInfoTranfer;
        if (null == list) return;
        this.offAllActive();
        this.resetChangeNhaMang();
        var listInfoNap = [];
        for (var i = 0, l = list.size(); i < l; i++) {
          var sfsObj = list.getSFSObject(i);
          1 == sfsObj.get("status") && 0 == sfsObj.getInt("type") && sfsObj.getInt("nhamangtype") == this.currentTypeNhaMang && listInfoNap.push(sfsObj);
        }
        var children = this.content.children;
        var itemTemplate = children[0];
        listInfoNap.sort(function(a, b) {
          return a.getInt("requireVnd") - b.getInt("requireVnd");
        });
        for (var i = 0, l = listInfoNap.length; i < l; i++) {
          var sfsObj = listInfoNap[i];
          var node = children[i];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.content;
          }
          node.active = true;
          var listLb = node.getComponentsInChildren(cc.Label);
          listLb[0].string = Windown_1.Windown.formatNumber(sfsObj.getInt("requireVnd")) + "VN\u0110";
          listLb[1].string = Windown_1.Windown.formatNumber(sfsObj.getInt("gold"));
          node.getComponent(cc.Button).clickEvents[0].customEventData = sfsObj.getInt("requireVnd").toString();
          node.scaleX = 0;
          node.opacity = 0;
          cc.Tween.stopAllByTarget(node);
          cc.tween(node).delay(.1 * i).to(.3, {
            scale: 1,
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }
        for (var i = listInfoNap.length, l = children.length; i < l; i++) children[i].active = false;
        this.initCardAmountShow();
      };
      NapTab.prototype.initCardAmountShow = function() {
        if (0 != Windown_1.Windown.ShopView.cardAmountShow) {
          var event = this.getNodeItemMenhGia(Windown_1.Windown.ShopView.cardAmountShow);
          event && this.onClickItemBtn(event.node, Windown_1.Windown.ShopView.cardAmountShow.toString());
        }
      };
      NapTab.prototype.getNodeItemMenhGia = function(menhGia) {
        var children = this.content.children;
        for (var temp in children) if (parseInt(children[temp].getComponent(cc.Button).clickEvents[0].customEventData) == menhGia) return children[temp].getComponent(cc.Button);
        return null;
      };
      NapTab.prototype.nodeMenhGiaActive = function(node) {
        cc.find("active", node).active = true;
        this.lastMenhGiaCardNode = node;
      };
      NapTab.prototype.offAllActive = function() {
        this.lastMenhGiaCardNode && (cc.find("active", this.lastMenhGiaCardNode).active = false);
      };
      NapTab.prototype.onClickItemBtn = function(event, data) {
        this.offAllActive();
        var menhGia = Number(data);
        cc.Tween.stopAllByTarget(this.lbMenhGia.node);
        this.lbMenhGia.node.scale = 2;
        cc.tween(this.lbMenhGia.node).to(.2, {
          scale: 1
        }).start();
        this.lbMenhGia.string = Windown_1.Windown.formatNumber(menhGia) + " VN\u0110";
        this.currentMenhGia = menhGia;
        this.lbNoteMenhGia.active = false;
        event instanceof cc.Event ? this.nodeMenhGiaActive(event.target) : this.nodeMenhGiaActive(event);
      };
      NapTab.prototype.onClickRefeshCaptCha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      NapTab.prototype.onClickNap = function() {
        try {
          this.checkValidation();
          this.sendNap();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      NapTab.prototype.onClickNapMomo = function() {
        this.currentState && this.currentState.onClickNap();
      };
      NapTab.prototype.onClickHuyMomo = function() {
        this.currentState && this.currentState.onClickHuy();
      };
      NapTab.prototype.sendNap = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("seri", this.edbSeri.string);
        SFSObject.putUtfString("pin", this.edbMaThe.string);
        SFSObject.putInt("amount", this.currentMenhGia);
        SFSObject.putInt("cardType", this.currentTypeNhaMang);
        null != Windown_1.Windown.ShopView.idGoi && SFSObject.putInt("napvip", Windown_1.Windown.ShopView.idGoi);
        var string = TextDefine_1.TextDefine.CONFIRM_CARD.formatString(this.getNameNhaMang(this.currentTypeNhaMang), Windown_1.Windown.formatNumber(this.currentMenhGia), this.edbSeri.string, this.edbMaThe.string);
        Windown_1.Windown.Dialog.showLog(string, function() {
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.CashInCardTuan, SFSObject);
          Windown_1.Windown.UIManager.showLoading();
        });
      };
      NapTab.prototype.getNameNhaMang = function(type) {
        switch (type) {
         case VT:
          return "VIETTEL";

         case MB:
          return "MOBIFONE";

         case VN:
          return "VINA";

         case VB:
          return "VIETNAMMOBIE";
        }
        return "L\u1ed7i";
      };
      NapTab.prototype.responseNap = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
      };
      NapTab.prototype.checkValidation = function() {
        0 == this.currentMenhGia && new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMenhGia);
        "" == this.edbSeri.string && new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullSeri);
        "" == this.edbMaThe.string && new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMaThe);
      };
      NapTab.prototype.onClickCoppy = function(event, data) {
        var str = "";
        switch (data) {
         case "ttk":
          str = this.lbTtkMomo.string;
          break;

         case "stk":
          str = this.lbStkMomo.string;
          break;

         case "noidung":
          str = this.lbContentMomo.string;
        }
        Windown_1.Windown.coppyToClip(str);
      };
      __decorate([ property(cc.Node) ], NapTab.prototype, "nodeCard", void 0);
      __decorate([ property(cc.Node) ], NapTab.prototype, "nodeVDT", void 0);
      __decorate([ property(cc.EditBox) ], NapTab.prototype, "edbSeri", void 0);
      __decorate([ property(cc.EditBox) ], NapTab.prototype, "edbMaThe", void 0);
      __decorate([ property(cc.Toggle) ], NapTab.prototype, "toggleVt", void 0);
      __decorate([ property(cc.Node) ], NapTab.prototype, "content", void 0);
      __decorate([ property(cc.Toggle) ], NapTab.prototype, "toggleCard", void 0);
      __decorate([ property(cc.Toggle) ], NapTab.prototype, "toggleVdt", void 0);
      __decorate([ property(cc.Toggle) ], NapTab.prototype, "toggleBank", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbMenhGia", void 0);
      __decorate([ property(cc.Node) ], NapTab.prototype, "lbNoteMenhGia", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbStkMomo", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbTtkMomo", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbContentMomo", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbRateBonus", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbRate", void 0);
      __decorate([ property(cc.EditBox) ], NapTab.prototype, "edbMoneyMomo", void 0);
      __decorate([ property(cc.EditBox) ], NapTab.prototype, "edbCaptchaMomo", void 0);
      __decorate([ property(cc.Node) ], NapTab.prototype, "nodeInfo", void 0);
      __decorate([ property(cc.Node) ], NapTab.prototype, "nodeReviceInfoMomo", void 0);
      __decorate([ property(cc.Label) ], NapTab.prototype, "lbTimeMomo", void 0);
      __decorate([ property(NapBank_1.default) ], NapTab.prototype, "napBank", void 0);
      NapTab = __decorate([ ccclass ], NapTab);
      return NapTab;
    }(BaseEditbox_1.default);
    exports.default = NapTab;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../InfoERR": "InfoERR",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown",
    "./NapBank": "NapBank",
    "./State/StateNapMomo": "StateNapMomo"
  } ],
  NhiemVuConTroller: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a107bleM7RDWJlrK+I2unwD", "NhiemVuConTroller");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var PathResource_1 = require("../../DefineTs/PathResource");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var NhiemVu_1 = require("./NhiemVu");
    var Wating = 1;
    var Finished = 2;
    var Reviced = 3;
    var NewClass = function() {
      function NewClass() {
        this.listQuestTanThu = [];
        this.listQuestNapNgay = [];
        this.listQuestChoiGame = [];
        this.timeReset = 0;
        this.questView = null;
        this.numQuestDone = 0;
        this.numQuestDoneTanThu = 0;
        this.numQuestDoneNapCard = 0;
        this.numQuestDoneChoiGame = 0;
        this.itemQuestViewFish = null;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, this.onLogin, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetQuest, this.responseListQuest, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetQuestFinish, this.reponseGetQuestFinish, this);
      }
      NewClass.prototype.onLogin = function() {
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetQuest, null);
      };
      NewClass.prototype.responseListQuest = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var SFSArrayQuestNap = SFSObject.getSFSArray("QuestNap");
        var SFSArrayQuestPlayGame = SFSObject.getSFSArray("QuestPlayGame");
        var SFSArrayQuestOver = SFSObject.getSFSArray("QuestOver");
        this.timeReset = SFSObject.get("secondReset") || 43200;
        this.listQuestTanThu = [];
        this.listQuestNapNgay = [];
        this.listQuestChoiGame = [];
        for (var i = 0, l = SFSArrayQuestNap.size(); i < l; i++) this.listQuestNapNgay.push(SFSArrayQuestNap.getSFSObject(i));
        for (var i = 0, l = SFSArrayQuestPlayGame.size(); i < l; i++) this.listQuestChoiGame.push(SFSArrayQuestPlayGame.getSFSObject(i));
        for (var i = 0, l = SFSArrayQuestOver.size(); i < l; i++) this.listQuestTanThu.push(SFSArrayQuestOver.getSFSObject(i));
        this.refeshQuest();
      };
      NewClass.prototype.sortListQuest = function() {
        this.numQuestDone = 0;
        this.numQuestDoneTanThu = 0;
        this.numQuestDoneNapCard = 0;
        this.numQuestDoneChoiGame = 0;
        for (var _i = 0, _a = this.listQuestNapNgay; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (1 == temp.getInt("status")) {
            this.numQuestDone++;
            this.numQuestDoneNapCard++;
          }
        }
        for (var _b = 0, _c = this.listQuestChoiGame; _b < _c.length; _b++) {
          var temp = _c[_b];
          if (1 == temp.getInt("status")) {
            this.numQuestDone++;
            this.numQuestDoneChoiGame++;
          }
        }
        for (var _d = 0, _e = this.listQuestTanThu; _d < _e.length; _d++) {
          var temp = _e[_d];
          if (1 == temp.getInt("status")) {
            this.numQuestDone++;
            this.numQuestDoneTanThu++;
          }
        }
        this.listQuestNapNgay.sort(function(a, b) {
          var curentA = a.getInt("currenttarget");
          var totalA = a.getInt("questtarget");
          var progressA = curentA / totalA;
          var curentB = b.getInt("currenttarget");
          var totalB = b.getInt("questtarget");
          var progressB = curentB / totalB;
          return progressB - progressA;
        });
        this.listQuestChoiGame.sort(function(a, b) {
          var curentA = a.getInt("currenttarget");
          var totalA = a.getInt("questtarget");
          var progressA = curentA / totalA;
          var curentB = b.getInt("currenttarget");
          var totalB = b.getInt("questtarget");
          var progressB = curentB / totalB;
          return progressB - progressA;
        });
        this.listQuestTanThu.sort(function(a, b) {
          var curentA = a.getInt("currenttarget");
          var totalA = a.getInt("questtarget");
          var progressA = curentA / totalA;
          var curentB = b.getInt("currenttarget");
          var totalB = b.getInt("questtarget");
          var progressB = curentB / totalB;
          return progressB - progressA;
        });
        for (var temp in this.listQuestNapNgay) {
          this.listQuestNapNgay[temp].putInt("index", parseInt(temp));
          this.listQuestNapNgay[temp].putInt("typeImg", 1);
        }
        for (var temp in this.listQuestChoiGame) {
          this.listQuestChoiGame[temp].putInt("index", parseInt(temp));
          this.listQuestChoiGame[temp].putInt("typeImg", 2);
        }
        for (var temp in this.listQuestTanThu) {
          this.listQuestTanThu[temp].putInt("index", parseInt(temp));
          this.listQuestTanThu[temp].putInt("typeImg", 3);
        }
      };
      NewClass.prototype.showQuest = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.showLoading();
              if (!(null == this.questView)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.NhiemVu) ];

             case 1:
              pre = _a.sent();
              this.questView = cc.instantiate(pre).getComponent(NhiemVu_1.default);
              _a.label = 2;

             case 2:
              this.questView.node.parent = Windown_1.Windown.UIManager.parentPopup;
              Windown_1.Windown.UIManager.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.refeshQuest = function() {
        this.sortListQuest();
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.updateNumDoneQuest();
        this.questView && this.questView.node.parent && this.questView.refesh();
        this.itemQuestViewFish && this.itemQuestViewFish.refresh();
      };
      NewClass.prototype.reponseGetQuestFinish = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject);
        var id = SFSObject.getInt("type");
        var quest = this.getSFSQuestById(id);
        quest && quest.putInt("status", 2);
        this.refeshQuest();
      };
      NewClass.prototype.getSFSQuestById = function(id) {
        for (var _i = 0, _a = this.listQuestNapNgay; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.getInt("type") == id) return temp;
        }
        for (var _b = 0, _c = this.listQuestChoiGame; _b < _c.length; _b++) {
          var temp = _c[_b];
          if (temp.getInt("type") == id) return temp;
        }
        for (var _d = 0, _e = this.listQuestTanThu; _d < _e.length; _d++) {
          var temp = _e[_d];
          if (temp.getInt("type") == id) return temp;
        }
        return null;
      };
      return NewClass;
    }();
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/PathResource": "PathResource",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./NhiemVu": "NhiemVu"
  } ],
  NhiemVu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92047uyo75IuKnwQIbOpfsj", "NhiemVu");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseScrollView_1 = require("../../Parent/BaseScrollView");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scr = null;
        _this.toggleContainer = null;
        _this.lbTime = null;
        _this.funCdTime = null;
        _this.isCdTime = false;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetQuest, null);
        this.isCdTime = false;
      };
      NewClass.prototype.refesh = function() {
        var _this = this;
        this.scr.resetScr();
        for (var _i = 0, _a = this.toggleContainer.toggleItems; _i < _a.length; _i++) {
          var temp = _a[_i];
          var name = temp.node.name;
          if (temp.isChecked) {
            var listdata = null;
            this.lbTime.node.active = true;
            if ("napngay" == name) listdata = Windown_1.Windown.NhiemVuConTroller.listQuestNapNgay; else if ("choigame" == name) listdata = Windown_1.Windown.NhiemVuConTroller.listQuestChoiGame; else if ("tanthu" == name) {
              listdata = Windown_1.Windown.NhiemVuConTroller.listQuestTanThu;
              this.lbTime.node.active = false;
            }
            listdata && this.scr.init(listdata);
          }
          cc.log(name);
          if ("napngay" == name) {
            var count = Windown_1.Windown.NhiemVuConTroller.numQuestDoneNapCard;
            var lb = cc.find("xx6", temp.node).getComponentInChildren(cc.Label);
            lb.string = count.toString();
            lb.node.parent.active = count > 0;
          } else if ("choigame" == name) {
            var count = Windown_1.Windown.NhiemVuConTroller.numQuestDoneChoiGame;
            var lb = cc.find("xx6", temp.node).getComponentInChildren(cc.Label);
            lb.string = count.toString();
            lb.node.parent.active = count > 0;
          } else if ("tanthu" == name) {
            var count = Windown_1.Windown.NhiemVuConTroller.numQuestDoneTanThu;
            var lb = cc.find("xx6", temp.node).getComponentInChildren(cc.Label);
            lb.string = count.toString();
            lb.node.parent.active = count > 0;
          }
        }
        if (!this.isCdTime) {
          var time_1 = Windown_1.Windown.NhiemVuConTroller.timeReset;
          this.unschedule(this.funCdTime);
          this.schedule(this.funCdTime = function() {
            _this.lbTime.string = "L\xe0m m\u1edbi nhi\u1ec7m v\u1ee5 sau: " + Windown_1.Windown.formatTimeBySec(time_1);
            time_1--;
            if (time_1 < 0) {
              ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetQuest, null);
              _this.isCdTime = false;
            }
          }, 1, Windown_1.Windown.NhiemVuConTroller.timeReset, 0);
          this.isCdTime = true;
        }
      };
      NewClass.prototype.initListNhiemVu = function(type) {};
      NewClass.prototype.onClickClose = function(event, funNext) {
        var _this = this;
        cc.log("chay vao click close ne");
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
          funNext && funNext();
        });
      };
      __decorate([ property(BaseScrollView_1.default) ], NewClass.prototype, "scr", void 0);
      __decorate([ property(cc.ToggleContainer) ], NewClass.prototype, "toggleContainer", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseScrollView": "BaseScrollView",
    "../../Windown": "Windown"
  } ],
  NotiNoHu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3d2a4TjIxICr0b4NyO33FZ", "NotiNoHu");
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
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("./DefineTs/PlayerPP");
    var GAME_TYPE_1 = require("./Game/GAME_TYPE");
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbNickName = null;
        _this.lbTitle = null;
        _this.lbGold = null;
        _this.nodeMove = null;
        _this.vecStart = cc.v2(0, 446.454);
        _this.vecEnd = cc.v2(0, 272.254);
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.NotiNoHu = this;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.changeRotation, this);
      };
      NewClass.prototype.start = function() {
        this.changeRotation();
      };
      NewClass.prototype.changeRotation = function() {
        cc.log("nhay vao chan");
        if (Windown_1.Windown.UIManager.isVertical) {
          var offSet = (cc.winSize.width - 1280) / 2;
          this.node.x = -283.497 - offSet;
          this.node.y = 0;
          this.node.angle = 90;
        } else {
          var offSet = (cc.winSize.height - 720) / 2;
          this.node.y = offSet;
          this.node.x = 0;
          this.node.angle = 0;
        }
      };
      NewClass.prototype.show = function(SFSObject) {
        var _this = this;
        var money = SFSObject.getLong("MoneyRevice");
        var name = SFSObject.getUtfString(PlayerPP_1.PlayerPP.NickName);
        var gameTye = SFSObject.get("gameType");
        if (name == Windown_1.Windown.User.nickName) return;
        gameTye == GAME_TYPE_1.default.TruTien ? this.lbTitle.string = "N\u1ed5 H\u0169 Tru Ti\xean" : gameTye == GAME_TYPE_1.default.CaMap && (this.lbTitle.string = "N\u1ed5 H\u0169 Game C\xe1");
        this.nodeMove.active = true;
        this.lbNickName.string = name;
        this.lbGold.string = Windown_1.Windown.formatNumber(money);
        var nodeAc = this.nodeMove;
        nodeAc.stopAllActions();
        nodeAc.opacity = 0;
        nodeAc.setPosition(this.vecStart);
        nodeAc.runAction(cc.sequence(cc.spawn(cc.fadeIn(.5).easing(cc.easeSineIn()), cc.moveTo(.5, this.vecEnd).easing(cc.easeBackOut())), cc.delayTime(3), cc.fadeOut(1), cc.callFunc(function() {
          _this.nodeMove.active = false;
        })));
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbNickName", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTitle", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbGold", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMove", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./DefineTs/PlayerPP": "PlayerPP",
    "./Game/GAME_TYPE": "GAME_TYPE",
    "./Windown": "Windown"
  } ],
  NotiTopMesage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d6a7hWgplDDal+hTxlnJ1t", "NotiTopMesage");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeAni = null;
        _this.lbSender = null;
        _this.lbHeader = null;
        _this.idMail = -1;
        return _this;
      }
      NewClass.prototype.show = function(SFSObject) {
        this.node.active = true;
        this.nodeAni.play("NotiTop");
        var tieuDe = SFSObject.getUtfString("header");
        var sender = SFSObject.getUtfString("sender");
        this.idMail = SFSObject.getInt("idMail");
        this.lbSender.string = sender + "-> T\xf4i";
        tieuDe.length > 20 && (tieuDe = tieuDe.substring(0, 20) + "...");
        this.lbHeader.string = tieuDe;
        this.unschedule(this.onClickClose);
        this.unschedule(this.onHide);
        this.scheduleOnce(this.onClickClose, 5);
        if (cc.sys.isNative) {
          Windown_1.Windown.UIManager.playSoundWithUrl("Sound1/mail");
          jsb.Device.vibrate(1);
        }
      };
      NewClass.prototype.onClickDoc = function() {
        -1 != this.idMail && Windown_1.Windown.UIManager.showHomThu(this.idMail);
        this.idMail = -1;
        this.onClickClose();
      };
      NewClass.prototype.onClickClose = function() {
        this.unschedule(this.onClickClose);
        this.unschedule(this.onHide);
        this.nodeAni.play("NotiTopOff");
        this.schedule(this.onHide, 1);
      };
      NewClass.prototype.onHide = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Animation) ], NewClass.prototype, "nodeAni", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbSender", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbHeader", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  OSDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cb2c3okH5IBpHvDOVq+99E", "OSDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var OSDefine = function() {
      function OSDefine() {}
      OSDefine.ANDROID = 1;
      OSDefine.IOS = 2;
      OSDefine.WEB_PC = 3;
      OSDefine.WEB_MOBILE = 4;
      OSDefine.OTHER = 5;
      return OSDefine;
    }();
    exports.default = OSDefine;
    cc._RF.pop();
  }, {} ],
  ObjMakeDelay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd6b9uFHRREBJcLo0LpzhKl", "ObjMakeDelay");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ObjMakeDelay = function() {
      function ObjMakeDelay(main, prosime, id) {
        this.id = null;
        this.main = main;
        this.prosime = prosime;
        this.id = id;
      }
      ObjMakeDelay.prototype.cancle = function(isComplet) {
        this.main.cancaleDelay(this.id, isComplet);
      };
      return ObjMakeDelay;
    }();
    exports.default = ObjMakeDelay;
    cc._RF.pop();
  }, {} ],
  OffMiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "774eeI3stFBorDJuC9anzCP", "OffMiniGame");
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
    var Windown_1 = require("../Windown");
    var DragMiniGame_1 = require("./DragMiniGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._isMoveBtnMiniGame = false;
        _this._isTouch = false;
        _this._v2OffsetChange = null;
        _this._isDrag = false;
        _this._isMiniSize = false;
        _this.offsetX = 0;
        _this.offsety = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.offsetX = cc.winSize.width / 2;
        this.offsety = cc.winSize.height / 2;
        this.node && this.node.setContentSize(cc.winSize);
      };
      NewClass.prototype._touchStart = function(touch) {
        Windown_1.Windown.UIManager.parentMiniGame.children.forEach(function(v) {
          var cp = v.getComponent(DragMiniGame_1.default);
          cp && cp.miniSize(false);
        });
        this.node.active = false;
      };
      NewClass.prototype.onEvent = function() {
        this.node.active = true;
        this.node.once(cc.Node.EventType.TOUCH_START, this._touchStart, this);
      };
      NewClass.prototype.onEnable = function() {
        this.funUpdate();
        cc.view.on("canvas-resize", this.funUpdate, this);
        window.addEventListener("orientationchange", this.funUpdate.bind(this));
      };
      NewClass.prototype.funUpdate = function() {
        this.node && this.node.setContentSize(cc.winSize);
      };
      NewClass.prototype.onDisable = function() {
        cc.view.targetOff(this);
        window.removeEventListener("orientationchange", this.funUpdate);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./DragMiniGame": "DragMiniGame"
  } ],
  PageData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23251wgkaFKa7D+TbypjVkG", "PageData");
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
    var ItemIndicator_1 = require("./ItemIndicator");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentIndicator = null;
        _this.content = null;
        _this.clickEvents = [];
        _this.currentIndexPage = 0;
        _this.totalPage = 0;
        _this.listItemIndecator = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        this.listItemIndecator = this.parentIndicator.getComponentsInChildren(ItemIndicator_1.default);
        this.listItemIndecator.forEach(function(v) {
          return v.setPage(_this);
        });
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.setTotalPage = function(numberTotalPage, isClickLast) {
        void 0 === isClickLast && (isClickLast = false);
        if (this.totalPage == numberTotalPage) return;
        this.totalPage = numberTotalPage;
        this.currentIndexPage = 1;
        var list = this.getListInvalitorValible();
        list[0].initIndex(1);
        list[list.length - 1].initIndex(this.totalPage);
        this.resetAllIndicator();
        this.setupIndicator();
        this.setCheckItem();
        this.checkTotalPage();
        isClickLast && this.listItemIndecator[this.listItemIndecator.length - 1].onClick(null, null);
      };
      NewClass.prototype.getListInvalitorValible = function() {
        return this.totalPage < 7 ? this.listItemIndecator.slice(0, this.totalPage) : this.listItemIndecator;
      };
      NewClass.prototype.checkTotalPage = function() {
        this.listItemIndecator.forEach(function(v) {
          return v.node.active = true;
        });
        if (this.totalPage < 7) for (var i = this.totalPage, l = this.listItemIndecator.length; i < l; i++) this.listItemIndecator[i].node.active = false; else this.listItemIndecator.forEach(function(v) {
          return v.node.active = true;
        });
      };
      NewClass.prototype.setupIndicator = function() {
        var list = this.getListInvalitorValible();
        if (this.totalPage < 7) {
          var count_1 = 1;
          list.forEach(function(v) {
            v.initIndex(count_1);
            count_1++;
          });
        } else {
          var listTemp = list.slice(1, 6);
          var indexStart = this.currentIndexPage - 2;
          indexStart < 2 && (indexStart = 2);
          indexStart + 5 > this.totalPage - 1 && (indexStart = this.totalPage - 5);
          for (var i = 0, l = listTemp.length; i < l; i++) {
            var v = listTemp[i];
            0 == i ? indexStart > 2 ? v.initIndex(-1) : v.initIndex(indexStart) : i == l - 1 && indexStart < this.totalPage - 1 ? v.initIndex(-1) : v.initIndex(indexStart);
            indexStart++;
          }
        }
      };
      NewClass.prototype.setCheckItem = function() {
        for (var temp in this.listItemIndecator) {
          var v = this.listItemIndecator[temp];
          if (v.getIndex() == this.currentIndexPage) {
            v.setCheck(true);
            break;
          }
        }
      };
      NewClass.prototype.resetAllIndicator = function() {
        this.listItemIndecator.forEach(function(v) {
          return v.setCheck(false);
        });
      };
      NewClass.prototype.onClickIndicator = function(index) {
        if (-1 == index) return;
        index > this.totalPage ? index = this.totalPage : index < 1 && (index = 1);
        if (this.currentIndexPage == index) return;
        this.currentIndexPage = index;
        cc.Component.EventHandler.emitEvents(this.clickEvents, this.currentIndexPage);
        this.resetAllIndicator();
        this.setupIndicator();
        this.setCheckItem();
      };
      NewClass.prototype.reset = function() {
        this.currentIndexPage = 1;
      };
      NewClass.prototype.onClickNext = function() {
        this.onClickIndicator(this.currentIndexPage + 1);
      };
      NewClass.prototype.onClickPre = function() {
        this.onClickIndicator(this.currentIndexPage - 1);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentIndicator", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "content", void 0);
      __decorate([ property(cc.Component.EventHandler) ], NewClass.prototype, "clickEvents", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./ItemIndicator": "ItemIndicator"
  } ],
  PageViewEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8396bFSQlRCuYH+Y5GCxSPB", "PageViewEvent");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageView = null;
        _this.funScroolPage = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.funChangePage();
      };
      NewClass.prototype.funChangePage = function() {
        var _this = this;
        var indexNext = this.pageView.getCurrentPageIndex() + 1;
        indexNext >= this.pageView.getPages().length && (indexNext = 0);
        this.unschedule(this.funScroolPage);
        this.scheduleOnce(this.funScroolPage = function() {
          _this.pageView.scrollToPage(indexNext, .5);
        }, 5);
      };
      NewClass.prototype.onChangePage = function(event, data) {
        this.funChangePage();
      };
      NewClass.prototype.onClick = function() {
        if (0 == this.pageView.getCurrentPageIndex()) {
          cc.log("chay vao day na");
          cc.sys.openURL(Windown_1.Windown.LinkEventfanpage);
        } else Windown_1.Windown.UIManager.showSuKien(this.pageView.getCurrentPageIndex() + 1);
      };
      __decorate([ property(cc.PageView) ], NewClass.prototype, "pageView", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  PathResource: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c04a2ckdZFFVL3KuPJqmogw", "PathResource");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PathResource = void 0;
    var PathResource = function() {
      function PathResource() {}
      PathResource.ItemLobbyView = "PrefabsItemPopup/ItemLobbyView";
      PathResource.LobbyView = "PrefabsPopup/LobbyView";
      PathResource.BtnGame = "PrefabsPopup/BtnGame";
      PathResource.QuestItem = "Img/Qeust/%d";
      PathResource.Avatar = "Img/Avatar/%d";
      PathResource.DangNhap = "Popup/DangNhap";
      PathResource.DangKy = "Popup/DangKy";
      PathResource.HomThu = "Popup/HomThu";
      PathResource.NhiemVu = "Popup/NhiemVu";
      PathResource.SuKien = "Popup/SuKien";
      PathResource.ThongTin = "Popup/ThongTin";
      PathResource.DoiAva = "Popup/DoiAvatar";
      PathResource.DoiTrangThai = "Popup/DoiTrangThai";
      PathResource.CaiDat = "Popup/CaiDat";
      PathResource.TangCap = "Popup/TangCap";
      PathResource.ReviceItem = "Popup/ReviceItem";
      PathResource.BonusNap = "Popup/BonusNap";
      PathResource.ShopView = "Popup/Shop";
      PathResource.XepHang = "Popup/XepHang";
      PathResource.CropImgAva = "Popup/CropImgAva";
      PathResource.HoTro = "Popup/HoTro";
      PathResource.CapNhatTaiKhoan = "Popup/CapNhatTaiKhoan";
      PathResource.LichSuGiaoDich = "Popup/LichSuGiaoDich";
      PathResource.WindownChat = "Popup/WindownChat";
      PathResource.ItemMoveIconChat = "Popup/ItemMoveIconChat";
      PathResource.ItemRemoveChat = "Popup/ItemRemoveChat";
      PathResource.XacThucTele = "Popup/XacThucTele";
      PathResource.VongQuay = "Popup/VongQuay";
      PathResource.ImgChat = "Popup/ImgChat";
      PathResource.QuickShop = "Popup/QuickShop";
      PathResource.TietKiem = "Popup/TietKiem";
      PathResource.TuiDo = "Popup/TuiDo";
      PathResource.CuaHang = "Popup/CuaHang";
      PathResource.EffectTakeCoin = "Popup/NodeTakeCoin";
      PathResource.HelpCaMap = "Prefabs/HelpCaMap";
      PathResource.CamMay = "Prefabs/CamMay";
      return PathResource;
    }();
    exports.PathResource = PathResource;
    cc._RF.pop();
  }, {} ],
  PathSound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0313bMypgNFUrKjVcboztmN", "PathSound");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PathSound = void 0;
    var PathSound = function() {
      function PathSound() {}
      PathSound.EndToNho = "Sound/SangHao";
      PathSound.Hu = "Sound/Hu'";
      PathSound.NenToNho = "Sound/NhacNenToNho";
      PathSound.RandomNumber = "Sound/RandomSo";
      PathSound.TiengCuoi = "Sound/TiengCuoi";
      PathSound.NhacVeVang = "Sound/NhacVeVang";
      PathSound.CauNoiKhiVeVang = "Sound/CauNoiKhiVeVang";
      PathSound.TiengNo = "Sound/TiengNo";
      PathSound.ToNhoX7mp3 = "Sound/ToNhoX7mp3";
      PathSound.TuNaiXa = "Sound/TuNaiXa`";
      PathSound.StartXmutilToNho = "Sound/StartXmutilToNho";
      PathSound.Ting = "Sound/Ting";
      PathSound.Ting2 = "Sound/Ting2";
      PathSound.SpinNormal = "Sound/SpinNormal";
      PathSound.SpinSpecial = "Sound/SpinSpecial";
      PathSound.NextSoXo = "Sound/NextSoXo";
      PathSound.BatDauQuayTraDiem = "Sound/BatDauQuayTraDiem";
      PathSound.CauNoiTraDiem = "Sound/CauNoiTraDiem";
      PathSound.CauNoiTraDiemXong = "Sound/CauNoiTraDiemXong";
      PathSound.NhacNenTraDiem = "Sound/NhacNenTraDiem";
      PathSound.NhacQuayXoSo = "Sound/NhacQuayXoSo";
      PathSound.ShowResultXoSo = "Sound/ShowResultXoSo";
      PathSound.ShowHeSoRandom = "Sound/ShowHeSoRandom";
      PathSound.MauDo = "Sound/MauDo";
      PathSound.MauVang = "Sound/MauVang";
      PathSound.MauXanhLa = "Sound/MauXanhLa";
      PathSound.XaPe = "Sound/XaPe";
      PathSound.MiOLa = "Sound/MiOLa";
      PathSound.CuocKhungHoang = "Sound/CuocKhungHoang";
      PathSound.VuiMung = "Sound/VuiMung";
      PathSound.DonDap = "Sound/DonDap";
      PathSound.Gong = "Sound/Gong";
      PathSound.Yabe = "Sound/Yabe";
      PathSound.CongTien = "Sound/CongTien";
      PathSound.XiPe = "Sound/XiPe";
      PathSound.CauNoiX3Luon = "Sound/CauNoiX3Luon";
      PathSound.AtOhh = "Sound/AtOhh";
      PathSound.Item = [ "Sound/Item/ItemTao", "Sound/Item/ItemCam", "Sound/Item/ItemMangCau", "Sound/Item/ItemChuong", "Sound/Item/ItemDua", "Sound/Item/ItemSao", "Sound/Item/ItemSeven", "Sound/Item/ItemBar", "Sound/Item/ItemBar" ];
      PathSound.NoLienTuc = "Sound/NoLienTuc";
      PathSound.EffectAnRandomItemNhoSau = "Sound/EffectAnRandomItemNhoSau";
      PathSound.CauNoiAnTruoc1CuaX30 = "Sound/CauNoiAnTruoc1CuaX30";
      PathSound.TiengKen2 = "Sound/TiengKen2";
      PathSound.TiengKen1 = "Sound/TiengKen1";
      PathSound.Bip = "Sound/Bip";
      PathSound.CauNoiShowResultAnTruocX30 = "Sound/CauNoiShowResultAnTruocX30";
      PathSound.ItemChay1Vong = "Sound/ItemChay1Vong";
      PathSound.TiengNoVaChemKiem = "Sound/TiengNoVaChemKiem";
      PathSound.TiengRandomHesoAnTruocX30 = "Sound/TiengRandomHesoAnTruocX30";
      PathSound.StartDapChuot = "Sound/StartDapChuot";
      return PathSound;
    }();
    exports.PathSound = PathSound;
    cc._RF.pop();
  }, {} ],
  PlayerPP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b865czr2ABA7oPB3fVGmqqG", "PlayerPP");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerPP = void 0;
    var PlayerPP = function() {
      function PlayerPP() {}
      PlayerPP.AccountBalance = "AccountBalance";
      PlayerPP.IsLogin = "IsLogin";
      PlayerPP.CurrentGunId = "CurrentGunId";
      PlayerPP.SittingId = "SittingId";
      PlayerPP.AccountId = "AccountId";
      PlayerPP.LastLoginTime = "LastLoginTime";
      PlayerPP.UserName = "UserName";
      PlayerPP.NickName = "NickName";
      PlayerPP.ItemFish = "ItemFish";
      PlayerPP.Lucky = "Lucky";
      PlayerPP.Captcha = "Captcha";
      PlayerPP.ERR_MESSAGE = "errorMessage";
      PlayerPP.MESSAGE = "message";
      return PlayerPP;
    }();
    exports.PlayerPP = PlayerPP;
    cc._RF.pop();
  }, {} ],
  QuickShop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ff49Ot1YdH5p1xmPFRd6kv", "QuickShop");
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
    var Windown_1 = require("../../Windown");
    var BaseItemQuick_1 = require("./BaseItemQuick");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TYPE = cc.Enum({
      CARD: 0,
      MOMO: 1
    });
    var QuickShop = function(_super) {
      __extends(QuickShop, _super);
      function QuickShop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSptitle = [];
        _this.spTitle = null;
        _this.parentButton = null;
        _this.listItemState = [];
        _this.currentId = 0;
        _this.currentMoney = 0;
        return _this;
      }
      QuickShop.prototype.onLoad = function() {
        Windown_1.Windown.QuickShop = this;
      };
      QuickShop.prototype.onDestroy = function() {
        Windown_1.Windown.QuickShop = null;
      };
      QuickShop.prototype.onDisable = function() {};
      QuickShop.prototype.show = function(idGoi, money) {
        this.currentId = idGoi;
        this.currentMoney = money;
        this.spTitle.spriteFrame = this.listSptitle[idGoi - 1];
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      QuickShop.prototype.onClickChooseType = function(event, data) {
        var type = Number(data);
        for (var _i = 0, _a = this.listItemState; _i < _a.length; _i++) {
          var item = _a[_i];
          if (item.type == type) {
            item.excuted();
            break;
          }
        }
      };
      QuickShop.prototype.onClickClose = function() {
        var _this = this;
        this.listItemState.forEach(function(v) {
          v.reset();
        });
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property([ cc.SpriteFrame ]) ], QuickShop.prototype, "listSptitle", void 0);
      __decorate([ property(cc.Sprite) ], QuickShop.prototype, "spTitle", void 0);
      __decorate([ property(cc.Node) ], QuickShop.prototype, "parentButton", void 0);
      __decorate([ property([ BaseItemQuick_1.default ]) ], QuickShop.prototype, "listItemState", void 0);
      QuickShop = __decorate([ ccclass ], QuickShop);
      return QuickShop;
    }(cc.Component);
    exports.default = QuickShop;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "./BaseItemQuick": "BaseItemQuick"
  } ],
  REQUEST_BONG_DEM: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9aef7Suul9KvYYyZ4ls/U7K", "REQUEST_BONG_DEM");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_BONG_DEM = function() {
      function REQUEST_BONG_DEM() {}
      REQUEST_BONG_DEM.CreatFish = "creatFishBongDem";
      REQUEST_BONG_DEM.ChangeGun = "chanGuneBongDem";
      return REQUEST_BONG_DEM;
    }();
    exports.default = REQUEST_BONG_DEM;
    cc._RF.pop();
  }, {} ],
  REQUEST_CODE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf5e0J4viBMnYhCLyYoW10x", "REQUEST_CODE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.REQUEST_CODE = void 0;
    var REQUEST_CODE = function() {
      function REQUEST_CODE() {}
      REQUEST_CODE.SignUp = "signUp";
      REQUEST_CODE.Login = "login";
      REQUEST_CODE.LoginFb = "loginFb";
      REQUEST_CODE.LoginPlaynow = "loginPlaynow";
      REQUEST_CODE.UpdateAccount = "updateAccount";
      REQUEST_CODE.Logout = "forceLogout";
      REQUEST_CODE.BuyIn = "buyIn";
      REQUEST_CODE.JoinRoom = "joinRoom";
      REQUEST_CODE.GetIdJoinRoom = "getIdJoinRoom";
      REQUEST_CODE.JoinFishRoom = "joinFishRoom";
      REQUEST_CODE.OtherJoinFishRoom = "otherJoinFishRoom";
      REQUEST_CODE.PlayerLeaveFishRoom = "playerLeaveFishRoom";
      REQUEST_CODE.PlayerUsingItemFish = "playerUsingItemFish";
      REQUEST_CODE.IceAllFish = "iceAllFish";
      REQUEST_CODE.ChangeGunFish = "changeGunFish";
      REQUEST_CODE.LeaveRoom = "leaveRoom";
      REQUEST_CODE.BetToNho = "betToNho";
      REQUEST_CODE.MakeBet = "makeBet";
      REQUEST_CODE.GetListRoom = "getListRooms";
      REQUEST_CODE.SetConfig = "setConfig";
      REQUEST_CODE.GetTime = "getTime";
      REQUEST_CODE.GunAtack = "gunAtack";
      REQUEST_CODE.ChangeAvaInRoom = "changeAvaInRoom";
      REQUEST_CODE.FishColision = "fishColision";
      REQUEST_CODE.CreatFish = "creatFish";
      REQUEST_CODE.PingFish = "pingFish";
      REQUEST_CODE.RemoveListFish = "removeListFish";
      REQUEST_CODE.SetTimeFishEffect = "setTimeFishEffect";
      REQUEST_CODE.TakeGunSpecial = "takeGunSpecial";
      REQUEST_CODE.UsingGunSpecial = "usingGunSpecial";
      REQUEST_CODE.FishSpecialColision = "fishSpecialColision";
      REQUEST_CODE.InfoFishRoom = "infoFishRoom";
      REQUEST_CODE.NotFindFish = "notFindFish";
      REQUEST_CODE.RequestCaptcha = "requestCaptcha";
      REQUEST_CODE.GiftCode = "giftCode";
      REQUEST_CODE.GetAccountBlance = "getAccountBlance";
      REQUEST_CODE.Upacingame = "upacingame";
      REQUEST_CODE.GetEvent = "getEvent";
      REQUEST_CODE.GetQuest = "getQuestAll";
      REQUEST_CODE.GetQuestFinish = "getRewardQuest";
      REQUEST_CODE.Dialog = "dialog";
      REQUEST_CODE.ForceRestart = "forceRestart";
      REQUEST_CODE.Dangky = "$SignUp.Submit";
      REQUEST_CODE.ListRoom = "listRoom";
      REQUEST_CODE.OtherJoinRoom = "otherJoinRoom";
      REQUEST_CODE.OtherLeaveRoom = "otherLeaveRoom";
      REQUEST_CODE.GetMail = "getMail";
      REQUEST_CODE.GetAvatar = "getAvatar";
      REQUEST_CODE.DeleteMail = "delMail";
      REQUEST_CODE.ReadMail = "readMail";
      REQUEST_CODE.ChangeAvatar = "changeAvatar";
      REQUEST_CODE.ChangeStatus = "changeStatus";
      REQUEST_CODE.NotiJackpotFish = "notiJackpotFish";
      REQUEST_CODE.InfoJackpot = "infoJackpot";
      REQUEST_CODE.LvlUp = "lvlUp";
      REQUEST_CODE.GetInfo = "getInfoPlayer";
      REQUEST_CODE.GetConfigTranfer = "getConfigTranfer";
      REQUEST_CODE.GetConfigMomo = "getConfigMomo";
      REQUEST_CODE.GetConfigMomoTuan = "getConfigMomoTuan";
      REQUEST_CODE.GetConfigBank = "getConfigBank";
      REQUEST_CODE.GetListBank = "getListBank";
      REQUEST_CODE.HuyMomo = "huyMomo";
      REQUEST_CODE.HuyBank = "huyBank";
      REQUEST_CODE.GetRankWeek = "getRankWeek";
      REQUEST_CODE.GetRankMonth = "getRankMonth";
      REQUEST_CODE.GetRankLobby = "getRankLobby";
      REQUEST_CODE.CashInCardTuan = "cashInCardTuan";
      REQUEST_CODE.CashInCardNew = "cashInCardNew";
      REQUEST_CODE.CashOutCard = "cashOutCard";
      REQUEST_CODE.GetTranscationsShop = "getTranscationsShop";
      REQUEST_CODE.ReviceListItem = "reviceListItem";
      REQUEST_CODE.AddMail = "addMail";
      REQUEST_CODE.PING = "ping";
      REQUEST_CODE.GetHistoryRank = "getHistoryRank";
      REQUEST_CODE.UpdateQuest = "updateQuest";
      REQUEST_CODE.GetListAdminOnline = "getListAdminOnline";
      REQUEST_CODE.SendMessageToAdmin = "sendMessageToAdmin";
      REQUEST_CODE.GetListChat = "getListChat";
      REQUEST_CODE.VeryPhoneTele = "veryPhoneTele";
      REQUEST_CODE.TimeOutPlay = "timeOutPlay";
      REQUEST_CODE.LeaveRoomXeng = "leaveRoomXeng";
      REQUEST_CODE.SetMutiXeng = "setMutilXeng";
      REQUEST_CODE.GetConfigShopVip = "getConfigShopVip";
      REQUEST_CODE.ActiveAutoFish = "activeAutoFish";
      REQUEST_CODE.ActiveGunSet = "activeGunSet";
      REQUEST_CODE.TakeFirtLogin = "TFLI";
      REQUEST_CODE.SpinTruTien = "spinTruTien";
      REQUEST_CODE.SpinDieuThuyen = "spinDieuThuyen";
      REQUEST_CODE.SpinNgoKhong = "spinNgoKhong";
      REQUEST_CODE.SpinNeko = "spinNeKo";
      REQUEST_CODE.HistoryTruTien = "historyTruTien";
      REQUEST_CODE.HistoryDieuThuyen = "historyDieuThuyen";
      REQUEST_CODE.HistoryNgoKhong = "historyNgoKhong";
      REQUEST_CODE.HistoryNeko = "historyNeKo";
      REQUEST_CODE.HistoryChiTietNeko = "historyInfoNeKo";
      REQUEST_CODE.SelectTypeFree = "selectTypeFree";
      REQUEST_CODE.HuyDoiThe = "huyDoiThe";
      REQUEST_CODE.GetListBot = "getListBot";
      REQUEST_CODE.GetTietKiem = "getTietKiem";
      REQUEST_CODE.TakeTietKiem = "takeTietKiem";
      REQUEST_CODE.GetListBigWin = "getListBigWin";
      REQUEST_CODE.AddBigWin = "addBigWin";
      REQUEST_CODE.GetTuiDo = "getTuiDo";
      REQUEST_CODE.GetConfigCuaHang = "getConfigCuaHang";
      REQUEST_CODE.BuyItem = "buyItem";
      REQUEST_CODE.TXstartGame = "startGameMD5";
      REQUEST_CODE.TXendGame = "andGameMD5";
      REQUEST_CODE.TXbet = "bet";
      REQUEST_CODE.TXinfoRoundBetOld = "infoRoundBetOld";
      REQUEST_CODE.TXhistoryGame = "historyGame";
      REQUEST_CODE.TXhistoryBet = "historyBet";
      REQUEST_CODE.TXtopGame = "topGame";
      REQUEST_CODE.TXinfoCurrentRoom = "infoCurrentRoom";
      REQUEST_CODE.TXinfoRoom = "infoRoom";
      return REQUEST_CODE;
    }();
    exports.REQUEST_CODE = REQUEST_CODE;
    cc._RF.pop();
  }, {} ],
  ReviceItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e08bmGGMpDBJee6Os584zz", "ReviceItem");
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
    var Windown_1 = require("../../Windown");
    var ItemTangCap_1 = require("../TangCap/ItemTangCap");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReviceItem = function(_super) {
      __extends(ReviceItem, _super);
      function ReviceItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbInfo = null;
        _this.content = null;
        _this.itemTemplate = null;
        return _this;
      }
      ReviceItem.prototype.onLoad = function() {
        Windown_1.Windown.ReviceItem = this;
      };
      ReviceItem.prototype.onDestroy = function() {
        Windown_1.Windown.ReviceItem = null;
      };
      ReviceItem.prototype.show = function(SFSObject) {
        SFSObject.containsKey("info") && (this.lbInfo.string = SFSObject.getUtfString("info"));
        var arrItem = SFSObject.getSFSArray("Items");
        this.initItem(arrItem);
        Windown_1.Windown.UIManager.playSoundWithUrl("LEVELUP");
      };
      ReviceItem.prototype.initItem = function(arrItem) {
        var parent = this.content;
        var child = parent.children;
        for (var i = 0, l = arrItem.size(); i < l; i++) {
          var node = child[i];
          var item = arrItem.getSFSObject(i);
          if (null == node) {
            node = cc.instantiate(this.itemTemplate);
            node.parent = parent;
          }
          node.active = true;
          item.putInt("index", i + 1);
          node.getComponent(ItemTangCap_1.default).initItem(item);
          null !== Windown_1.Windown.FishBongDem && Windown_1.Windown.FishBongDem.fishBDView && Windown_1.Windown.FishBongDem.fishBDView.reviceItemWhenLvlUp(item.getInt("Type"), item.getInt("Value"));
        }
        for (var i = arrItem.size(); i < child.length; i++) child[i].active = false;
      };
      ReviceItem.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(cc.Label) ], ReviceItem.prototype, "lbInfo", void 0);
      __decorate([ property(cc.Node) ], ReviceItem.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], ReviceItem.prototype, "itemTemplate", void 0);
      ReviceItem = __decorate([ ccclass ], ReviceItem);
      return ReviceItem;
    }(cc.Component);
    exports.default = ReviceItem;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "../TangCap/ItemTangCap": "ItemTangCap"
  } ],
  SYSTEM_EVENT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da4e6bb4qxPg4WiDLPIpztl", "SYSTEM_EVENT");
    cc._RF.pop();
  }, {} ],
  SceneFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ba71RWellO3os6akxryIo6", "SceneFish");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        var gameType = Windown_1.Windown.User.currentGameId;
        var url = "";
        var componentGlobal = "";
        switch (gameType) {
         case Windown_1.Windown.GAME_TYPE.FISH_CA_MAP:
          url = "FishCaMap";
          componentGlobal = "FishCaMap";
          gameType = Windown_1.Windown.GAME_TYPE.FISH_CA_MAP;
        }
        cc.assetManager.loadBundle(gameType + "", function(err, bundle) {
          if (err) return;
          bundle.load(url, cc.Prefab, function(count, total) {
            Windown_1.Windown.UIManager.setPerData(count / total);
          }, function(err2, prefab) {
            Windown_1.Windown.UIManager.hideLoadingData();
            if (err2 || null == _this.node) return;
            var gameView = cc.instantiate(prefab);
            _this.node.addChild(gameView);
          });
        });
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ShopView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38d27Hpg1hENoD8fYWbLSuM", "ShopView");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var DoiTab_1 = require("./DoiTab");
    var NapTab_1 = require("./NapTab");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShopView = function(_super) {
      __extends(ShopView, _super);
      function ShopView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.NapTab = null;
        _this.DoiTab = null;
        _this.ToggleNap = null;
        _this.ToggleDoi = null;
        _this.ArrInfoTranfer = null;
        _this.cardAmountShow = 0;
        _this.idGoi = 0;
        return _this;
      }
      ShopView.prototype.onLoad = function() {
        Windown_1.Windown.ShopView = this;
      };
      ShopView.prototype.onDestroy = function() {
        Windown_1.Windown.ShopView = null;
      };
      ShopView.prototype.show = function(index, cardAmount, idGoi) {
        var _this = this;
        if (0 == index) {
          this.ToggleNap.check();
          this.scheduleOnce(function() {
            _this.NapTab.toggleVdt.check();
          }, .5);
        } else if (2 == index) {
          this.ToggleNap.check();
          this.scheduleOnce(function() {
            _this.NapTab.toggleVdt.check();
          }, .5);
        } else this.ToggleDoi.check();
        Windown_1.Windown.UIManager.showLoading();
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetConfigTranfer, null, this.responseServer.bind(this));
        this.cardAmountShow = cardAmount;
        this.idGoi = idGoi;
      };
      ShopView.prototype.responseServer = function(obj) {
        Windown_1.Windown.UIManager.hideLoading();
        this.ArrInfoTranfer = obj.getSFSArray("ListConfig");
        cc.log("nhay vao co data shop nay:");
        cc.log(Windown_1.Windown.SFSObjToJson(obj));
        this.NapTab.node.active && this.NapTab.emitNewData();
        this.DoiTab.node.active && this.DoiTab.emitNewData();
      };
      ShopView.prototype.napCheck = function(event, data) {
        if (event.isChecked) {
          this.NapTab.node.active = true;
          this.DoiTab.node.active = false;
          this.NapTab.reset();
          this.ToggleDoi.uncheck();
          this.ToggleNap.interactable = false;
          this.ToggleDoi.interactable = true;
        }
      };
      ShopView.prototype.doiCheck = function(event, data) {
        if (event.isChecked) {
          this.NapTab.node.active = false;
          this.DoiTab.node.active = true;
          this.DoiTab.reset();
          this.ToggleNap.uncheck();
          this.ToggleNap.interactable = true;
          this.ToggleDoi.interactable = false;
        }
      };
      ShopView.prototype.onClickClose = function() {
        var _this = this;
        this.idGoi = null;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      ShopView.prototype.trangThaiOnClick = function() {
        Windown_1.Windown.UIManager.showInfoTranfer();
      };
      __decorate([ property(NapTab_1.default) ], ShopView.prototype, "NapTab", void 0);
      __decorate([ property(DoiTab_1.default) ], ShopView.prototype, "DoiTab", void 0);
      __decorate([ property(cc.Toggle) ], ShopView.prototype, "ToggleNap", void 0);
      __decorate([ property(cc.Toggle) ], ShopView.prototype, "ToggleDoi", void 0);
      ShopView = __decorate([ ccclass ], ShopView);
      return ShopView;
    }(cc.Component);
    exports.default = ShopView;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./DoiTab": "DoiTab",
    "./NapTab": "NapTab"
  } ],
  SoundLobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a71e1ecbjxLzYuT+K9IqjT1", "SoundLobby");
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
    var AudioManager_1 = require("./Parent/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coinVeTui = null;
        _this.tienRoi = null;
        _this.takeMoney = null;
        _this.cachCach = null;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        this.playEffect(this.audios[0]);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "coinVeTui", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tienRoi", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "takeMoney", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "cachCach", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Parent/AudioManager": "AudioManager"
  } ],
  SoundManager1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3a7dXxeN1P3KfDtzqS3ipB", "SoundManager1");
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var objAudioClip = {};
    var objInterVal = {};
    var objAudioClipLoop = {};
    var listGameTypeOffMusic = [];
    var listGameTypeOffSound = [];
    var SoundManager1 = cc.Class({
      extends: cc.Component,
      properties: {
        isPlayingMusic: false
      },
      statics: {
        getIns: function getIns() {
          null == this.self && (this.self = new SoundManager1());
          return this.self;
        }
      },
      stopMusicBackground: function stopMusicBackground() {
        this.isPlayingMusic = false;
        if (null != this.currentCipMusicBackGround) {
          cc.log("Stop Bg Music======>DOne");
          cc.audioEngine.stop(this.currentCipMusicBackGround);
        }
      },
      playMusicBackground: function playMusicBackground(ResDefine, volume) {
        var _this = this;
        void 0 === volume && (volume = 1);
        this.isPlayingMusic = true;
        cc.loader.loadRes(ResDefine, cc.AudioClip, function(err, clip) {
          if (err) return;
          null != _this.currentCipMusicBackGround && cc.audioEngine.stop(_this.currentCipMusicBackGround);
          _this.isPlayingMusic && (_this.currentCipMusicBackGround = cc.audioEngine.play(clip, true, volume));
        });
      },
      playEffect: function playEffect(ResDefine, isLoop, volume) {
        var _this2 = this;
        void 0 === isLoop && (isLoop = false);
        void 0 === volume && (volume = 1);
        null == objInterVal[ResDefine] && (objInterVal[ResDefine] = true);
        var isCanStop = objInterVal[ResDefine];
        if (!isCanStop) return;
        cc.loader.loadRes(ResDefine, cc.AudioClip, function(err, clip) {
          if (err) return;
          null != objAudioClip[ResDefine] && cc.audioEngine.stop(objAudioClip[ResDefine]);
          clearTimeout(_this2.funInter);
          objAudioClip[ResDefine] = cc.audioEngine.play(clip, isLoop, volume);
          objInterVal[ResDefine] = false;
          _this2.funInter = setTimeout(function() {
            objInterVal[ResDefine] = true;
          }, 75);
        });
      },
      playEffectWithCallback: function playEffectWithCallback(ResDefine, callback, volume) {
        var _this3 = this;
        null == objInterVal[ResDefine] && (objInterVal[ResDefine] = true);
        var isCanStop = objInterVal[ResDefine];
        if (!isCanStop) return;
        cc.loader.loadRes(ResDefine, cc.AudioClip, function(err, clip) {
          if (err) {
            callback();
            return;
          }
          null != objAudioClip[ResDefine] && cc.audioEngine.stop(objAudioClip[ResDefine]);
          clearTimeout(_this3.funInter);
          objAudioClip[ResDefine] = cc.audioEngine.play(clip, false, volume);
          cc.audioEngine.setFinishCallback(objAudioClip[ResDefine], callback);
          objInterVal[ResDefine] = false;
          _this3.funInter = setTimeout(function() {
            objInterVal[ResDefine] = true;
          }, 75);
        });
      },
      stopEffect: function stopEffect(ResDefine) {
        null != objAudioClip[ResDefine] && cc.audioEngine.stop(objAudioClip[ResDefine]);
      },
      pasauseEffect: function pasauseEffect(ResDefine) {
        null != objAudioClip[ResDefine] && cc.audioEngine.pause(objAudioClip[ResDefine]);
      },
      resumeEffect: function resumeEffect(ResDefine) {
        null != objAudioClip[ResDefine] && cc.audioEngine.resume(objAudioClip[ResDefine]);
      },
      stopAll: function stopAll() {
        cc.audioEngine.stopAll();
        objAudioClip = {};
        objInterVal = {};
      }
    });
    var _default = SoundManager1;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  StateNapCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26d9dcN3j9DtLbaoBnCi4sD", "StateNapCard");
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
    var BaseStateNap_1 = require("./BaseStateNap");
    var StateNapCard = function(_super) {
      __extends(StateNapCard, _super);
      function StateNapCard() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StateNapCard.prototype.executed = function() {
        this.napView.nodeCard.active = true;
        this.napView.nodeVDT.active = false;
        this.napView.toggleVdt.uncheck();
        this.napView.edbSeri.string = "";
        this.napView.edbMaThe.string = "";
        this.napView.lbMenhGia.string = "0 VN\u0110";
        this.napView.currentMenhGia = 0;
        this.napView.lbNoteMenhGia.active = true;
      };
      StateNapCard.prototype.reset = function() {};
      return StateNapCard;
    }(BaseStateNap_1.default);
    exports.default = StateNapCard;
    cc._RF.pop();
  }, {
    "./BaseStateNap": "BaseStateNap"
  } ],
  StateNapMomo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed17c9dmhRDfZabjPOWhgO/", "StateNapMomo");
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
    var REQUEST_CODE_1 = require("../../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../../InfoERR");
    var ConectManager_1 = require("../../../Network/ConectManager");
    var Windown_1 = require("../../../Windown");
    var BaseStateNap_1 = require("./BaseStateNap");
    var StateNapMomo = function(_super) {
      __extends(StateNapMomo, _super);
      function StateNapMomo(_napView) {
        var _this = _super.call(this, _napView) || this;
        _this.edbMoney = null;
        _this.edbCaptcha = null;
        _this.numberTimeOut = null;
        _this.currentIdMomo = null;
        _this.edbMoney = _this.napView.edbMoneyMomo;
        _this.edbCaptcha = _this.napView.edbCaptchaMomo;
        return _this;
      }
      StateNapMomo.prototype.executed = function() {
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetConfigMomo, this.responseConfigMomo, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.HuyMomo, this.responseHuyMomo, this);
        this.edbMoney.string = "";
        this.edbCaptcha.string = "";
        this.napView.lbStkMomo.string = "...";
        this.napView.lbTtkMomo.string = "...";
        this.napView.lbContentMomo.string = "...";
        this.napView.lbRate.string = "...";
        this.napView.lbRateBonus.string = "...";
        this.napView.nodeCard.active = false;
        this.napView.nodeVDT.active = true;
        this.napView.toggleCard.uncheck();
        this.napView.nodeInfo.active = true;
        this.napView.nodeReviceInfoMomo.active = false;
        Windown_1.Windown.CapchaController.requestCapcha();
        null != Windown_1.Windown.ShopView.cardAmountShow && (this.edbMoney.string = Windown_1.Windown.ShopView.cardAmountShow.toString());
      };
      StateNapMomo.prototype.onClickNap = function() {
        var money = Number(this.edbMoney.string);
        var captcha = this.edbCaptcha.string;
        try {
          if (isNaN(money)) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullMenhGia);
          if (money < 1e4) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.LonHon10000);
          if (money % 1e4 != 0) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.BoiSo10000);
          if (captcha.length < 1) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullCaptcha);
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("amount", money);
          SFSObject.putUtfString("captcha", captcha);
          null != Windown_1.Windown.ShopView.idGoi && SFSObject.putInt("napvip", Windown_1.Windown.ShopView.idGoi);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetConfigMomoTuan, SFSObject);
          Windown_1.Windown.UIManager.showLoading();
        } catch (err) {
          Windown_1.Windown.Dialog.showLog(err.message.replace("lvd----", ""));
        }
      };
      StateNapMomo.prototype.onClickHuy = function() {
        this.responseHuyMomo();
      };
      StateNapMomo.prototype.onEdbChange = function(str) {
        cc.log(str);
        str = str.replace(/[.]/g, "");
        str = Windown_1.Windown.formatNumber(str);
        this.edbMoney.string = str;
        this.edbMoney.focus();
      };
      StateNapMomo.prototype.funCountDown = function(time) {
        var _this = this;
        this.numberTimeOut = setInterval(function() {
          time--;
          _this.napView.lbTimeMomo.string = "Th\u1eddi gian c\xf2n l\u1ea1i(" + time + ")";
          time < 1 && _this.responseHuyMomo();
        }, 1e3);
      };
      StateNapMomo.prototype.responseConfigMomo = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var stk = SFSObject.getUtfString("phoneNum");
        var tenTk = SFSObject.getUtfString("phoneName");
        var content = SFSObject.getUtfString("code");
        var rate = SFSObject.getDouble("rate");
        var rateBonus = SFSObject.getDouble("rateBonus");
        var moneyRequireBonus = SFSObject.getDouble("requireBonus");
        this.napView.lbStkMomo.string = stk;
        this.napView.lbTtkMomo.string = tenTk;
        this.napView.lbContentMomo.string = content;
        this.napView.lbRate.string = "1:" + rate;
        this.napView.lbRateBonus.string = rateBonus > 0 ? TextDefine_1.TextDefine.RateBonusMomo.formatString(Windown_1.Windown.formatNumber(moneyRequireBonus), 10 * rateBonus) : "";
        this.napView.nodeInfo.active = false;
        this.napView.nodeReviceInfoMomo.active = true;
        this.funCountDown(SFSObject.get("timeToExpired"));
        this.currentIdMomo = SFSObject.get("id");
      };
      StateNapMomo.prototype.responseHuyMomo = function() {
        Windown_1.Windown.UIManager.hideLoading();
        clearInterval(this.numberTimeOut);
        this.currentIdMomo = null;
        this.napView.nodeInfo.active = true;
        this.napView.nodeReviceInfoMomo.active = false;
        Windown_1.Windown.CapchaController.requestCapcha();
        this.edbMoney.string = "";
      };
      StateNapMomo.prototype.reset = function() {
        clearInterval(this.numberTimeOut);
        cc.systemEvent.targetOff(this);
        this.currentIdMomo = null;
      };
      return StateNapMomo;
    }(BaseStateNap_1.default);
    exports.default = StateNapMomo;
    cc._RF.pop();
  }, {
    "../../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../../DefineTs/TextDefine": "TextDefine",
    "../../../InfoERR": "InfoERR",
    "../../../Network/ConectManager": "ConectManager",
    "../../../Windown": "Windown",
    "./BaseStateNap": "BaseStateNap"
  } ],
  StateReelSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86206jyhURJxJ5Y3BdhbxMb", "StateReelSlot");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateReelSlot = function() {
      function StateReelSlot() {}
      StateReelSlot.WAITING = 0;
      StateReelSlot.RUN = 1;
      StateReelSlot.CAN_STOP = 2;
      StateReelSlot.SHOW_EFFECT = 3;
      StateReelSlot.STOP = 4;
      StateReelSlot.NORMAL = 15;
      StateReelSlot.MAX_SPEED = 16;
      StateReelSlot.AUTO_SPIN = 17;
      StateReelSlot.FREE_SPIN = 18;
      return StateReelSlot;
    }();
    exports.default = StateReelSlot;
    cc._RF.pop();
  }, {} ],
  SuKien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aada6m1Q0VGU7vVl+s+1cYc", "SuKien");
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
    var TabSuKien_1 = require("./TabSuKien");
    var TabGiftCode_1 = require("./TabGiftCode");
    var Windown_1 = require("../../Windown");
    var SuKien = function(_super) {
      __extends(SuKien, _super);
      function SuKien() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tabSuKien = null;
        _this.tabGiftCode = null;
        _this.toggleSuKien = null;
        _this.toggleGiftCode = null;
        _this.idSuKienShow = -1;
        return _this;
      }
      SuKien.prototype.ctor = function() {
        cc.log("chay vao ham khoi tao");
      };
      SuKien.prototype.onLoad = function() {
        Windown_1.Windown.SuKien = this;
      };
      SuKien.prototype.show = function(Status, idSuKienShow) {
        if (0 == Status) {
          this.toggleSuKien.check();
          this.tabSuKien.node.active = true;
          this.tabGiftCode.node.active = false;
        } else {
          this.toggleGiftCode.check();
          this.tabSuKien.node.active = false;
          this.tabGiftCode.node.active = true;
        }
        idSuKienShow && (this.idSuKienShow = idSuKienShow);
        Windown_1.Windown.actionEffectOpen(this.node, function() {});
      };
      SuKien.prototype.setGiftCode = function(code) {
        this.tabGiftCode.edbGift.string = code;
      };
      SuKien.prototype.onToggle = function(event, data) {
        cc.log("nhay vao toggle Su Kien");
        if (event == this.toggleSuKien) {
          this.tabSuKien.node.active = true;
          this.tabGiftCode.node.active = false;
          this.tabGiftCode.reset();
        } else {
          this.tabSuKien.node.active = false;
          this.tabGiftCode.node.active = true;
          this.tabSuKien.reset();
        }
      };
      SuKien.prototype.onDisable = function() {
        this.tabSuKien.reset();
        this.tabGiftCode.reset();
      };
      SuKien.prototype.onDestroy = function() {
        Windown_1.Windown.SuKien = null;
      };
      SuKien.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(TabSuKien_1.default) ], SuKien.prototype, "tabSuKien", void 0);
      __decorate([ property(TabGiftCode_1.default) ], SuKien.prototype, "tabGiftCode", void 0);
      __decorate([ property(cc.Toggle) ], SuKien.prototype, "toggleSuKien", void 0);
      __decorate([ property(cc.Toggle) ], SuKien.prototype, "toggleGiftCode", void 0);
      SuKien = __decorate([ ccclass ], SuKien);
      return SuKien;
    }(cc.Component);
    exports.default = SuKien;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "./TabGiftCode": "TabGiftCode",
    "./TabSuKien": "TabSuKien"
  } ],
  TabGiftCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2185eyco+lK05jXYZWEnJCU", "TabGiftCode");
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
    var PlayerPP_1 = require("../../DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var InfoERR_1 = require("../../InfoERR");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbGift = null;
        _this.edbCaptcha = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.initNodeMove(Windown_1.Windown.SuKien.node);
        this.resignEdb(this.edbGift);
        this.resignEdb(this.edbCaptcha);
        this.resignNext(this.edbGift, "edbCaptcha");
      };
      NewClass.prototype.onEnable = function() {
        this.onClickRefeshCaptCha();
      };
      NewClass.prototype.reset = function() {
        this.edbCaptcha.string = "";
        this.edbGift.string = "";
      };
      NewClass.prototype.onClickXacNhan = function() {
        try {
          if ("" == this.edbCaptcha.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullCaptcha);
          if ("" == this.edbGift.string) throw new InfoERR_1.InfoErr(TextDefine_1.TextDefine.NullCaptcha);
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putUtfString("giftCode", this.edbGift.string.trim());
          SFSObject.putUtfString("captcha", this.edbCaptcha.string.trim());
          ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GiftCode, SFSObject, this.responseServer.bind(this));
        } catch (e) {
          Windown_1.Windown.Dialog.showLog(e.message);
        }
      };
      NewClass.prototype.responseServer = function(SFSObject) {
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          return;
        }
        SFSObject.containsKey(PlayerPP_1.PlayerPP.MESSAGE) && Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.MESSAGE));
      };
      NewClass.prototype.onClickRefeshCaptCha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "edbGift", void 0);
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "edbCaptcha", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(BaseEditbox_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/PlayerPP": "PlayerPP",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../InfoERR": "InfoERR",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  TabSuKien: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "deb18QiGilPs7nkdfdzFhVO", "TabSuKien");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var ItemSuKien_1 = require("./ItemSuKien");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TabSuKien = function(_super) {
      __extends(TabSuKien, _super);
      function TabSuKien() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scr = null;
        _this.item = null;
        _this.nodeInfo = null;
        _this.nodeListEvent = null;
        _this.lbInfo = null;
        _this.lbTieuDe = null;
        return _this;
      }
      TabSuKien.prototype.onEnable = function() {
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetEvent, null, this.responseServer.bind(this));
      };
      TabSuKien.prototype.responseServer = function(SFSObject) {
        var parent = this.scr.content;
        var listChildren = parent.children;
        var SFSArray = SFSObject.getSFSArray("listEvents");
        for (var i = 0, l = SFSArray.size(); i < l; i++) {
          var temp = SFSArray.getSFSObject(i);
          var node = listChildren[i];
          if (null == node) {
            node = cc.instantiate(this.item.node);
            node.active = true;
            parent.addChild(node);
          }
          var cp = node.getComponent(ItemSuKien_1.default);
          temp.putInt("index", i + 1);
          cp.init(temp);
        }
        this.checkAndShowId();
        for (var i = SFSArray.size(); i < listChildren.length; i++) listChildren[i].active = false;
      };
      TabSuKien.prototype.checkAndShowId = function() {
        cc.log("id: " + Windown_1.Windown.SuKien.idSuKienShow);
        if (-1 != Windown_1.Windown.SuKien.idSuKienShow) {
          var itemSuKien = this.getIdSuKien(Windown_1.Windown.SuKien.idSuKienShow);
          itemSuKien && itemSuKien.onClick();
          Windown_1.Windown.SuKien.idSuKienShow = -1;
        }
      };
      TabSuKien.prototype.getIdSuKien = function(_id) {
        var child = this.scr.content.children;
        for (var temp in child) {
          var cp = child[temp].getComponent(ItemSuKien_1.default);
          if (cp) {
            var id = cp.objInfo.getInt("id");
            if (id == _id) return cp;
          }
        }
        return null;
      };
      TabSuKien.prototype.onClickBackInfo = function() {
        this.nodeInfo.active = false;
        this.nodeListEvent.active = true;
      };
      TabSuKien.prototype.showInfo = function(obj) {
        this.nodeInfo.active = true;
        this.nodeListEvent.active = false;
        this.lbInfo.string = obj.getUtfString("moTa");
        this.lbTieuDe.string = obj.getUtfString("tenSuKien");
      };
      TabSuKien.prototype.reset = function() {
        this.nodeInfo.active = false;
        this.nodeListEvent.active = true;
        this.lbInfo.string = "";
        this.lbTieuDe.string = "";
      };
      __decorate([ property(cc.ScrollView) ], TabSuKien.prototype, "scr", void 0);
      __decorate([ property(ItemSuKien_1.default) ], TabSuKien.prototype, "item", void 0);
      __decorate([ property(cc.Node) ], TabSuKien.prototype, "nodeInfo", void 0);
      __decorate([ property(cc.Node) ], TabSuKien.prototype, "nodeListEvent", void 0);
      __decorate([ property(cc.Label) ], TabSuKien.prototype, "lbInfo", void 0);
      __decorate([ property(cc.Label) ], TabSuKien.prototype, "lbTieuDe", void 0);
      TabSuKien = __decorate([ ccclass ], TabSuKien);
      return TabSuKien;
    }(cc.Component);
    exports.default = TabSuKien;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./ItemSuKien": "ItemSuKien"
  } ],
  TangCap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d495dXaJjFHUbAz51aD+9I+", "TangCap");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var Windown_1 = require("../../Windown");
    var ItemMoKhoa_1 = require("./ItemMoKhoa");
    var ItemTangCap_1 = require("./ItemTangCap");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TangCap = function(_super) {
      __extends(TangCap, _super);
      function TangCap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.lbLvl = null;
        _this.content = null;
        _this.itemTemplate = null;
        _this.itemUnLock = null;
        _this.btnClose = null;
        _this.funActiveClose = null;
        return _this;
      }
      TangCap.prototype.onLoad = function() {
        Windown_1.Windown.TangCap = this;
      };
      TangCap.prototype.onDestroy = function() {
        Windown_1.Windown.TangCap = null;
      };
      TangCap.prototype.show = function(SFSObject) {
        var _this = this;
        this.btnClose.active = false;
        var lvl = SFSObject.getInt("Lvl");
        Windown_1.Windown.User.currentLevel = lvl;
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP);
        var arrItem = SFSObject.getSFSArray("Items");
        this.lbLvl.string = lvl.toString();
        this.lbLvl.node.scale = 0;
        cc.Tween.stopAllByTarget(this.lbLvl.node);
        cc.tween(this.lbLvl.node).to(.3, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
        this.spine.setAnimation(0, "animation", false);
        this.initItem(arrItem);
        this.scheduleOnce(this.funActiveClose = function() {
          _this.btnClose.active = true;
        }, 3);
        Windown_1.Windown.UIManager.playSoundWithUrl("LEVELUP");
      };
      TangCap.prototype.initItem = function(arrItem) {
        var parent = this.content;
        var child = parent.children;
        this.itemUnLock.node.parent = null;
        this.itemUnLock.node.active = true;
        for (var i = 0, l = arrItem.size(); i < l; i++) {
          var node = child[i];
          var item = arrItem.getSFSObject(i);
          if (null == node) {
            node = cc.instantiate(this.itemTemplate);
            node.parent = parent;
          }
          node.active = true;
          item.putInt("index", i + 1);
          node.getComponent(ItemTangCap_1.default).initItem(item);
          null !== Windown_1.Windown.FishBongDem && Windown_1.Windown.FishBongDem.fishBDView && Windown_1.Windown.FishBongDem.fishBDView.reviceItemWhenLvlUp(item.getInt("Type"), item.getInt("Value"));
        }
        for (var i = arrItem.size(); i < child.length; i++) child[i].active = false;
        var money = Windown_1.Windown.getUnLockGunLevelUp();
        if (money) {
          this.itemUnLock.node.parent = parent;
          this.itemUnLock.initItem(money, parent.childrenCount);
        }
      };
      TangCap.prototype.onClickClose = function() {
        var _this = this;
        this.unschedule(this.funActiveClose);
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(sp.Skeleton) ], TangCap.prototype, "spine", void 0);
      __decorate([ property(cc.Label) ], TangCap.prototype, "lbLvl", void 0);
      __decorate([ property(cc.Node) ], TangCap.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], TangCap.prototype, "itemTemplate", void 0);
      __decorate([ property(ItemMoKhoa_1.default) ], TangCap.prototype, "itemUnLock", void 0);
      __decorate([ property(cc.Node) ], TangCap.prototype, "btnClose", void 0);
      TangCap = __decorate([ ccclass ], TangCap);
      return TangCap;
    }(cc.Component);
    exports.default = TangCap;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../Windown": "Windown",
    "./ItemMoKhoa": "ItemMoKhoa",
    "./ItemTangCap": "ItemTangCap"
  } ],
  "Test - 001": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0113hG7DxAjo6KhhPN6262", "Test - 001");
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
  TestTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03cdcAxQW1CIKmvBSMJ5lM5", "TestTS");
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
    var TestTs = function(_super) {
      __extends(TestTs, _super);
      function TestTs() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMain = null;
        _this.nodeVongQuay = null;
        return _this;
      }
      TestTs.prototype.start = function() {};
      TestTs.prototype.onClickTest = function() {};
      __decorate([ property(cc.Node) ], TestTs.prototype, "nodeMain", void 0);
      __decorate([ property(cc.Node) ], TestTs.prototype, "nodeVongQuay", void 0);
      TestTs = __decorate([ ccclass ], TestTs);
      return TestTs;
    }(cc.Component);
    exports.default = TestTs;
    cc._RF.pop();
  }, {} ],
  TextDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56e78scXuZFwYdiMpP1sznW", "TextDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TextDefine = void 0;
    String.prototype.formatString = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
      var retStr = this;
      for (var l = args.length, i = 0; i < l; i++) {
        var arg = args[i];
        retStr = retStr.replace("%s", arg);
      }
      return retStr;
    };
    var TextDefine = function() {
      function TextDefine() {}
      TextDefine.NeedLogin = "B\u1ea1n C\u1ea7n \u0110\u0103ng Nh\u1eadp \u0110\u1ec3\nX\u1eed D\u1ee5ng Ch\u1ee9c N\u0103ng N\xe0y";
      TextDefine.FailCapcha = "T\u1ea3i Captcha L\u1ed7i! Vui L\xf2ng Th\u1eed L\u1ea1i";
      TextDefine.NeedOTP = "B\u1ea1n C\u1ea7n \u0110\u0103ng K\xfd OTP";
      TextDefine.Error = "L\u1ed7i! Vui L\xf2ng Th\u1eed L\u1ea1i";
      TextDefine.ErrorDeviceId = "C\xf3 s\u1ef1 c\u1ed1! Vui l\xf2ng \u0111\u0103ng nh\u1eadp l\u1ea1i!";
      TextDefine.TienNhapLonHon0 = "S\u1ed1 Ti\u1ec1n Ph\u1ea3i L\u1edbn H\u01a1n 0";
      TextDefine.KhongDuocTrong = "Kh\xf4ng \u0110\u01b0\u1ee3c \u0110\u1ec3 Tr\u1ed1ng %n";
      TextDefine.UpdatePhoneSuccess = "C\u1eadp Nh\u1eadt S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i Th\xe0nh C\xf4ng";
      TextDefine.ClearPhoneSuccess = "X\xf3a S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i Th\xe0nh C\xf4ng";
      TextDefine.NeedGoldDoi = "S\u1ed1 D\u01b0 C\u1ee7a B\u1ea1n Kh\xf4ng \u0110\u1ee7";
      TextDefine.TranferSuccess = "Giao D\u1ecbch Th\xe0nh C\xf4ng";
      TextDefine.MatKhauKhongTrung = "M\u1eadt Kh\u1ea9u Kh\xf4ng Gi\u1ed1ng Nhau";
      TextDefine.RequestNewPassSucces = "\u0110\u1ed5i M\u1eadt Kh\u1ea9u Th\xe0nh C\xf4ng. Vui L\xf2ng \u0110\u0103ng Nh\u1eadp L\u1ea1i!";
      TextDefine.NeedNetwork = "Vui L\xf2ng Ki\u1ec3m Tra L\u1ea1i Internet";
      TextDefine.ErrTranfer = "S\u1ed1 Ti\u1ec1n Nh\u1eadp Kh\xf4ng H\u1ee3p L\u1ec7";
      TextDefine.NickNameNhoHon6 = "T\xean hi\u1ec3n th\u1ecb c\xf3 \u0111\u1ed9 d\xe0i 6-16 k\xfd t\u1ef1";
      TextDefine.MatKhauNhoHon6 = "M\u1eadt Kh\u1ea9u c\xf3 \u0111\u1ed9 d\xe0i 6-16 k\xfd t\u1ef1";
      TextDefine.DangNhapNhoHon6 = "T\xean \u0111\u0103ng nh\u1eadp c\xf3 \u0111\u1ed9 d\xe0i 6-16 k\xfd t\u1ef1";
      TextDefine.HetNangLuongFish = "B\u1ea1n \u0110\xe3 H\u1ebft N\u0103ng L\u01b0\u1ee3ng !";
      TextDefine.MinJoinRoom = "B\u1ea1n c\u1ea7n t\u1ed1i thi\u1ec3u %n \u0111\u1ec3 v\xe0o ph\xf2ng";
      TextDefine.UpVip = "Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 t\u0103ng c\u1ea5p Vip %n";
      TextDefine.OpenURL = "X\xe1c nh\u1eadn m\u1edf li\xean k\u1ebft giao d\u1ecbch?";
      TextDefine.XoaMaGioiThieu = "B\u1ea1n c\xf3 mu\u1ed1n x\xf3a m\xe3 gi\u1edbi thi\u1ec7u?";
      TextDefine.KhongDuocNhanQuaX2 = "B\u1ea1n ch\u01b0a tham gia s\u1ef1 ki\u1ec7n n\xe0y!";
      TextDefine.DaNhanQuaX2 = "B\u1ea1n \u0111\xe3 nh\u1eadn qu\xe0 n\xe0y!";
      TextDefine.NullCaptcha = "Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng Captcha";
      TextDefine.NullTrangThai = "Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u1ea1ng th\xe1i";
      TextDefine.Quest_ChuaXong = "L\xe0m";
      TextDefine.Quest_Xong = "Nh\u1eadn";
      TextDefine.Quest_DaNhan = "\u0110\xe3 nh\u1eadn";
      TextDefine.Quest_ChuaNhan = "Ch\u01b0a nh\u1eadn";
      TextDefine.NullPhone = "Th\xeam S\u0110T t\u1eb7ng 10k";
      TextDefine.NotMoneyFish = "B\u1ea1n kh\xf4ng \u0111\u1ee7 v\xe0ng \u0111\u1ec3 s\u1eed d\u1ee5ng s\xfang n\xe0y";
      TextDefine.AutoChangeGun = "T\u1ef1 \u0111\u1ed9ng ch\u1ecdn m\u1ee9c \u0111\u1ea1n ph\xf9 h\u1ee3p";
      TextDefine.PrivatePhone = "S\u0110T \u0111\xe3 b\u1ecb \u1ea9n";
      TextDefine.NullMenhGia = "Vui l\xf2ng ch\u1ecdn m\u1ec7nh gi\xe1!";
      TextDefine.NullBank = "Vui l\xf2ng ch\u1ecdn ng\xe2n h\xe0ng n\u1ea1p!";
      TextDefine.NullSeri = "Vui l\xf2ng nh\u1eadp seri th\u1ebb!";
      TextDefine.BoiSo10000 = "Ti\u1ec1n n\u1ea1p l\xe0 b\u1ed9i s\u1ed1 c\u1ee7a 10.000";
      TextDefine.LonHon10000 = "S\u1ed1 ti\u1ec1n n\u1ea1p l\u1edbn h\u01a1n 10.000";
      TextDefine.NullMaThe = "Vui l\xf2ng nh\u1eadp m\xe3 th\u1ebb!";
      TextDefine.NullTtkMomo = "Vui l\xf2ng nh\u1eadp t\xean t\xe0i kho\u1ea3n MOMO nh\u1eadn!";
      TextDefine.NullSdtMomo = "Vui l\xf2ng nh\u1eadp s\xf4 \u0111i\u1ec7n tho\u1ea1i MOMO nh\u1eadn!";
      TextDefine.NullTtkBANK = "Vui l\xf2ng nh\u1eadp t\xean t\xe0i kho\u1ea3n BANK nh\u1eadn!";
      TextDefine.NullSdtBANK = "Vui l\xf2ng nh\u1eadp s\xf4 t\xe0i kho\u1ea3n BANK nh\u1eadn!";
      TextDefine.NullBANK = "Vui l\xf2ng ch\u1ecdn BANK nh\u1eadn!";
      TextDefine.RateBonusMomo = "N\u1ea1p tr\xean %s th\xec \u0111\u01b0\u1ee3c th\u01b0\u1edfng th\xeam %s%";
      TextDefine.NEED_OFF_AUTO_FISH = "Vui l\xf2ng t\u1eaft t\xednh n\u0103ng C\u1eaeM M\xc1Y";
      TextDefine.END_TIME_AUTO = "H\u1ebft th\u1eddi gian c\u1eafm m\xe1y !";
      TextDefine.NEED_LEVEL = "B\u1ea1n c\u1ea7n \u0111\u1ea1t c\u1ea5p \u0111\u1ed9 cao h\u01a1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y";
      TextDefine.NEED_LEVEL_C_OUT = "B\u1ea1n c\u1ea7n \u0111\u1ea1t c\u1ea5p \u0111\u1ed9 %s h\u01a1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y";
      TextDefine.ERR_CROP_IMG = "Dung l\u01b0\u1ee3ng \u1ea3nh kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 5MB";
      TextDefine.ERR_IMG_TYPE = "Vui l\xf2ng ch\u1ecdn t\u1ec7p l\xe0 \u1ea3nh";
      TextDefine.NullDeviceId = "Kh\xf4ng th\u1ec3 x\xe1c \u0111\u1ecbnh! Vui l\xf2ng m\u1edf l\u1ea1i app";
      TextDefine.CapNhatTk = "C\u1eadp nh\u1eadt t\xe0i kho\u1ea3n \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 t\u1ed1t h\u01a1n !";
      TextDefine.ClickDeNhan = "Click \u0111\u1ec3 nh\u1eadn!";
      TextDefine.DefaultMessageAdmin = "T\xf4i c\u1ea7n h\u1ed7 tr\u1ee3 !";
      TextDefine.ERR_CODE_VERY = "Sai m\xe3 code";
      TextDefine.NOTI_REMOVE_BUNDLE = "X\xf3a game %s";
      TextDefine.ERR_JOIN_ROOM = "Kh\xf4ng th\u1ec3 v\xe0o ph\xf2ng ! Vui l\xf2ng th\u1eed l\u1ea1i";
      TextDefine.CONFIRM_CARD = "X\xe1c nh\u1eadn n\u1ea1p th\u1ebb %s\nM\u1ec7nh gi\xe1: %s\nSeri: %s\nM\xe3 th\u1ebb: %s";
      TextDefine.ERR_VONGQUAY = "B\u1ea1n kh\xf4ng c\xf3 l\u01b0\u1ee3t quay n\xe0o!";
      TextDefine.ERR_CHANGE_BET_FS = "Kh\xf4ng \u0111\u01b0\u1ee3c thay \u0111\u1ed5i m\u1ee9c c\u01b0\u1ee3c khi \u0111ang \u0111\u01b0\u1ee3c FREE SPIN";
      TextDefine.ERR_QUICK_JOIN_GAME = "B\u1ea1n c\u1ea7n tho\xe1t game hi\u1ec7n t\u1ea1i \u0111\u1ec3 th\u1ef1c hi\u1ec7n thao t\xe1c n\xe0y!";
      TextDefine.ERR_TIET_KIEM = "Ch\u01b0a \u0111\u1ee7 \u0111i\u1ec3m t\xedch l\u0169y !";
      return TextDefine;
    }();
    exports.TextDefine = TextDefine;
    cc._RF.pop();
  }, {} ],
  ThongTin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4fb27f9ghJV4rPeei3eG5e", "ThongTin");
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
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ThongTin = function(_super) {
      __extends(ThongTin, _super);
      function ThongTin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbUserName = null;
        _this.lbVippoint = null;
        _this.lbId = null;
        _this.lbPhone = null;
        _this.lbMoney = null;
        _this.lbStatus = null;
        _this.lbLevel = null;
        _this.lbProgressLevel = null;
        _this.spAvatar = null;
        _this.spProgressLevel = null;
        _this.nodeDoiAva = null;
        _this.nodeTrangThai = null;
        _this.btnCapNhat = null;
        return _this;
      }
      ThongTin.prototype.onLoad = function() {
        Windown_1.Windown.ThongTin = this;
      };
      ThongTin.prototype.show = function(Object) {
        Windown_1.Windown.actionEffectOpen(this.node, null);
        this.lbMoney.string = Windown_1.Windown.formatNumber(Object.getLong("ag"));
        this.lbUserName.string = Object.getUtfString("nickname");
        this.lbId.string = "ID: " + Object.getInt("id");
        if (Object.getUtfString("phonenumber")) {
          this.lbPhone.string = Object.getUtfString("phonenumber");
          this.lbPhone.enableUnderline = false;
          this.lbPhone.node.color = cc.Color.WHITE;
        } else {
          this.lbPhone.string = TextDefine_1.TextDefine.NullPhone;
          this.lbPhone.enableUnderline = true;
          this.lbPhone.node.color = cc.Color.YELLOW;
        }
        this.lbLevel.string = Object.getInt("currentlevel") + "";
        this.lbVippoint.string = "VipPoint: " + Object.getInt("currentvippoint");
        this.lbProgressLevel.string = Windown_1.Windown.formatMoney(Object.getInt("currentlevelpoint"), 0) + "/" + Windown_1.Windown.formatMoney(Object.getInt("totallevelpoint"), 0);
        var max = 190;
        var perLevel = Object.getInt("currentlevelpoint") / Object.getInt("totallevelpoint");
        var width = perLevel * max;
        this.spProgressLevel.node.width = width;
        if (Object.getInt("id") == Windown_1.Windown.User.userId) {
          this.nodeDoiAva.active = true;
          this.nodeTrangThai.active = true;
          Windown_1.Windown.User.isPlayNow ? this.btnCapNhat.active = true : this.btnCapNhat.active = false;
        } else {
          this.btnCapNhat.active = false;
          this.nodeDoiAva.active = false;
          this.nodeTrangThai.active = false;
          this.lbPhone.string = TextDefine_1.TextDefine.PrivatePhone;
          this.lbPhone.enableUnderline = false;
          this.lbPhone.node.color = cc.Color.WHITE;
        }
        this.updateTrangThai(Object.getUtfString("status"));
        this.updateAva(Object);
      };
      ThongTin.prototype.updateAva = function(Object) {
        Windown_1.Windown.updateAvatar(Object, this.spAvatar);
      };
      ThongTin.prototype.updateTrangThai = function(trangThai) {
        this.lbStatus.string = trangThai;
      };
      ThongTin.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      ThongTin.prototype.onClickCoppy = function() {
        var text = this.lbId.string;
        text = text.replace("ID: ", "");
        Windown_1.Windown.coppyToClip(text);
      };
      ThongTin.prototype.onClickDoiTrangThai = function() {
        Windown_1.Windown.UIManager.showDoiTrangThai();
      };
      ThongTin.prototype.onClickDoiAvatar = function() {
        Windown_1.Windown.UIManager.showDoiAva();
      };
      ThongTin.prototype.onClickCapNhatTaiKhoan = function() {
        Windown_1.Windown.UIManager.showCapNhatTaiKhoan();
      };
      ThongTin.prototype.onClickXacThuc = function() {
        this.lbPhone.string == TextDefine_1.TextDefine.NullPhone && Windown_1.Windown.UIManager.showXacThucTele();
      };
      ThongTin.prototype.updatePhone = function(phone) {
        Windown_1.Windown.User.phoneNumber = phone;
        this.lbPhone.string = phone;
        this.lbPhone.enableUnderline = false;
        this.lbPhone.node.color = cc.Color.WHITE;
      };
      ThongTin.prototype.onDestroy = function() {
        Windown_1.Windown.ThongTin = null;
      };
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbUserName", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbVippoint", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbId", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbPhone", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbMoney", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbStatus", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbLevel", void 0);
      __decorate([ property(cc.Label) ], ThongTin.prototype, "lbProgressLevel", void 0);
      __decorate([ property(cc.Sprite) ], ThongTin.prototype, "spAvatar", void 0);
      __decorate([ property(cc.Sprite) ], ThongTin.prototype, "spProgressLevel", void 0);
      __decorate([ property(cc.Node) ], ThongTin.prototype, "nodeDoiAva", void 0);
      __decorate([ property(cc.Node) ], ThongTin.prototype, "nodeTrangThai", void 0);
      __decorate([ property(cc.Node) ], ThongTin.prototype, "btnCapNhat", void 0);
      ThongTin = __decorate([ ccclass ], ThongTin);
      return ThongTin;
    }(cc.Component);
    exports.default = ThongTin;
    cc._RF.pop();
  }, {
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Windown": "Windown"
  } ],
  TietKiem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be8b59p8SVCkrl4x8NhdYcT", "TietKiem");
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
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var LbMoneyChange_1 = require("../../Obs/LbMoneyChange");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TietKiem = function(_super) {
      __extends(TietKiem, _super);
      function TietKiem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ske = null;
        _this.nodeHuongDan = null;
        _this.lbCurrent = null;
        _this.spProgress = null;
        _this.nodeIconPiggky = null;
        _this.cur = 0;
        _this.max = 999;
        return _this;
      }
      TietKiem.prototype.onLoad = function() {
        Windown_1.Windown.TietKiem = this;
      };
      TietKiem.prototype.onDisable = function() {
        cc.systemEvent.targetOff(this);
      };
      TietKiem.prototype.show = function() {
        var _this = this;
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.GetTietKiem, this.response, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.TakeTietKiem, this.responseTake, this);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetTietKiem, null);
        this.getComponent(cc.Animation).play("StartTietKiem");
        this.ske.setAnimation(0, "mopopup", false);
        this.ske.addAnimation(0, "khimopopupxong", true);
        this.scheduleOnce(function() {
          _this.getComponent(cc.Animation).play("OpenTietKiem");
        }, .5);
      };
      TietKiem.prototype.response = function(SFSObject) {
        var currnet = SFSObject.getInt("cr");
        var max = SFSObject.getInt("m");
        this.lbCurrent.setMoneyNoTime(currnet);
        this.spProgress.fillRange = currnet / max;
        this.cur = currnet;
        this.max = max;
        if (currnet >= max) {
          this.nodeIconPiggky.angle = -15;
          this.nodeIconPiggky.active = true;
          this.nodeIconPiggky.stopAllActions();
          this.nodeIconPiggky.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, 30), cc.rotateBy(.5, -30))));
        } else this.nodeIconPiggky.active = false;
        cc.log("nhay vao respinse ne");
      };
      TietKiem.prototype.responseTake = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var moneyTake, currnetUser, moneyMax, audi0, nodeEff;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.Dialog.checkAndShowLog(SFSObject);
              moneyTake = SFSObject.getInt("mt");
              currnetUser = SFSObject.get("mcr");
              moneyMax = SFSObject.getInt("m");
              this.cur = 0;
              this.max = moneyMax;
              this.spProgress.fillRange = 0;
              audi0 = Windown_1.Windown.AudioManager;
              audi0.playEffect(audi0.takeMoney);
              this.nodeIconPiggky.active = false;
              return [ 4, Windown_1.Windown.UIManager.getNodeEffectTextCoin() ];

             case 1:
              nodeEff = _a.sent();
              this.lbCurrent.setMoney(0);
              return [ 4, nodeEff.show(currnetUser, cc.v2(0, -83), moneyTake) ];

             case 2:
              _a.sent();
              return [ 4, this.makeDelay(1) ];

             case 3:
              _a.sent();
              this.onClickClose();
              return [ 2 ];
            }
          });
        });
      };
      TietKiem.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.scheduleOnce(resolve, time);
        });
      };
      TietKiem.prototype.onClickNhan = function() {
        if (this.cur != this.max) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_TIET_KIEM);
          return;
        }
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.TakeTietKiem, null);
        Windown_1.Windown.UIManager.showLoading();
      };
      TietKiem.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      TietKiem.prototype.runEffectTakeMoney = function() {};
      TietKiem.prototype.onClickHuongDan = function() {
        this.nodeHuongDan.active ? this.nodeHuongDan.active = false : this.nodeHuongDan.active = true;
      };
      __decorate([ property(sp.Skeleton) ], TietKiem.prototype, "ske", void 0);
      __decorate([ property(cc.Node) ], TietKiem.prototype, "nodeHuongDan", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], TietKiem.prototype, "lbCurrent", void 0);
      __decorate([ property(cc.Sprite) ], TietKiem.prototype, "spProgress", void 0);
      __decorate([ property(cc.Node) ], TietKiem.prototype, "nodeIconPiggky", void 0);
      TietKiem = __decorate([ ccclass ], TietKiem);
      return TietKiem;
    }(cc.Component);
    exports.default = TietKiem;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Obs/LbMoneyChange": "LbMoneyChange",
    "../../Windown": "Windown"
  } ],
  TopThang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94384eh1ZtOdaaD3zKKCiqd", "TopThang");
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
    var Windown_1 = require("../../Windown");
    var ItemRankMonth_1 = require("./ItemRankMonth");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TopThang = function(_super) {
      __extends(TopThang, _super);
      function TopThang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.top3Item = [];
        _this.infoMe = null;
        _this.isShow = false;
        return _this;
      }
      TopThang.prototype.reset = function() {
        this.isShow = false;
        for (var i = 0, l = this.top3Item.length; i < l; i++) this.top3Item[i].node.active = false;
        this.content.children.forEach(function(node) {
          node.active = false;
        });
      };
      TopThang.prototype.emitNewData = function() {
        var sfsObjData = Windown_1.Windown.XepHang.dataMonth;
        if (!this.isShow && sfsObjData) {
          var listRank = sfsObjData.getSFSArray("Items");
          var children = this.content.children;
          var itemTemplate = children[0];
          var height = listRank.size() - 3 * itemTemplate.height;
          this.content.height = height > 0 ? height : 0;
          var firtY = -itemTemplate.height / 2;
          for (var i = 0, l = listRank.size(); i < l; i++) {
            var obj = listRank.getSFSObject(i);
            obj.putInt("index", i + 1);
            if (i < 3) {
              this.top3Item[i].node.active = true;
              this.top3Item[i].initItem(obj);
              cc.Tween.stopAllByTarget(this.top3Item[i].node);
              this.top3Item[i].node.scale = 0;
              cc.tween(this.top3Item[i].node).delay(.15 * i).to(.3, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
            } else {
              var node = children[i - 3];
              if (null == node) {
                node = cc.instantiate(itemTemplate);
                node.parent = this.content;
              }
              node.getComponent(ItemRankMonth_1.default).initItem(obj);
              node.active = true;
              node.y = firtY;
              firtY -= itemTemplate.height;
              cc.Tween.stopAllByTarget(node);
              node.scale = 0;
              cc.tween(node).delay(.15 * i).to(.3, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
            }
          }
          var sfsInfoMe = sfsObjData.getSFSObject("InfoMe");
          if (sfsInfoMe) {
            var rankMe = sfsObjData.getLong("RankMe");
            sfsInfoMe.putInt("index", rankMe);
            this.infoMe.initItem(sfsInfoMe);
          } else this.infoMe.node.active = false;
          this.isShow = true;
        }
      };
      __decorate([ property(cc.Node) ], TopThang.prototype, "content", void 0);
      __decorate([ property(ItemRankMonth_1.default) ], TopThang.prototype, "top3Item", void 0);
      __decorate([ property(ItemRankMonth_1.default) ], TopThang.prototype, "infoMe", void 0);
      TopThang = __decorate([ ccclass ], TopThang);
      return TopThang;
    }(cc.Component);
    exports.default = TopThang;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "./ItemRankMonth": "ItemRankMonth"
  } ],
  TopTuan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "121c66uGQlJLqrOYxPsK98H", "TopTuan");
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
    var Windown_1 = require("../../Windown");
    var ItemRankWeek_1 = require("./ItemRankWeek");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TopTuan = function(_super) {
      __extends(TopTuan, _super);
      function TopTuan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.top3Item = [];
        _this.infoMe = null;
        _this.isShow = false;
        return _this;
      }
      TopTuan.prototype.reset = function() {
        this.isShow = false;
        for (var i = 0, l = this.top3Item.length; i < l; i++) this.top3Item[i].node.active = false;
        this.content.children.forEach(function(node) {
          node.active = false;
        });
      };
      TopTuan.prototype.emitNewData = function() {
        var sfsObjData = Windown_1.Windown.XepHang.dataWeek;
        if (!this.isShow && sfsObjData) {
          var listRank = sfsObjData.getSFSArray("Items");
          var children = this.content.children;
          var itemTemplate = children[0];
          var height = listRank.size() - 3 * itemTemplate.height;
          this.content.height = height > 0 ? height : 0;
          var firtY = -itemTemplate.height / 2;
          for (var i = 0, l = listRank.size(); i < l; i++) {
            var obj = listRank.getSFSObject(i);
            obj.putInt("index", i + 1);
            if (i < 3) {
              this.top3Item[i].node.active = true;
              this.top3Item[i].initItem(obj);
              cc.Tween.stopAllByTarget(this.top3Item[i].node);
              this.top3Item[i].node.scale = 0;
              cc.tween(this.top3Item[i].node).delay(.15 * i).to(.3, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
            } else {
              var node = children[i - 3];
              if (null == node) {
                node = cc.instantiate(itemTemplate);
                node.parent = this.content;
              }
              node.getComponent(ItemRankWeek_1.default).initItem(obj);
              node.active = true;
              node.y = firtY;
              firtY -= itemTemplate.height;
              cc.Tween.stopAllByTarget(node);
              node.scale = 0;
              cc.tween(node).delay(.15 * i).to(.3, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
            }
          }
          var sfsInfoMe = sfsObjData.getSFSObject("InfoMe");
          if (sfsInfoMe) {
            var rankMe = sfsObjData.getLong("RankMe");
            sfsInfoMe.putInt("index", rankMe);
            this.infoMe.initItem(sfsInfoMe);
          } else this.infoMe.node.active = false;
          this.isShow = true;
        }
      };
      __decorate([ property(cc.Node) ], TopTuan.prototype, "content", void 0);
      __decorate([ property(ItemRankWeek_1.default) ], TopTuan.prototype, "top3Item", void 0);
      __decorate([ property(ItemRankWeek_1.default) ], TopTuan.prototype, "infoMe", void 0);
      TopTuan = __decorate([ ccclass ], TopTuan);
      return TopTuan;
    }(cc.Component);
    exports.default = TopTuan;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown",
    "./ItemRankWeek": "ItemRankWeek"
  } ],
  TuiDo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fde17JoP7tP+7FSV20WRmTo", "TuiDo");
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
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var BaseCuaHang_1 = require("./BaseCuaHang");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TuiDo = function(_super) {
      __extends(TuiDo, _super);
      function TuiDo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TuiDo.prototype.onLoad = function() {
        Windown_1.Windown.TuiDo = this;
      };
      TuiDo.prototype.show = function() {
        var _this = this;
        Windown_1.Windown.UIManager.showLoading();
        Windown_1.Windown.actionEffectOpen(this.node, function() {
          cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.GetTuiDo, _this.responseServer, _this);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetTuiDo, null);
        });
      };
      TuiDo.prototype.responseServer = function(obj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = obj.getSFSArray("list");
        var itemTemplate = this.parentItem.children[0];
        var objFirt = "{}";
        var countChild = 0;
        for (var i = 0; i < this.parentItem.childrenCount; i++) this.parentItem.children[i].active = false;
        for (var i = 0, l = sfsArr.size(); i < l; i++) {
          var sfsObj = sfsArr.getSFSObject(i);
          if (sfsObj.get("amount") < 1) continue;
          var node = this.parentItem.children[countChild];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          node.active = true;
          if (1 != node.scale) {
            node.stopAllActions();
            node.runAction(cc.sequence(cc.delayTime(.05 * countChild), cc.scaleTo(.2, 1).easing(cc.easeBackOut())));
          }
          var spItem = node.getComponentInChildren(cc.Sprite);
          var lbCount = node.getComponentInChildren(cc.Label);
          var button = node.getComponent(cc.Button);
          spItem.spriteFrame = this.getSFByType(sfsObj.get("type"));
          lbCount.string = sfsObj.get("amount");
          button.clickEvents[0].customEventData = Windown_1.Windown.SFSObjToJson(sfsObj);
          countChild++;
        }
        sfsArr.size() > 0 && (objFirt = Windown_1.Windown.SFSObjToJson(sfsArr.getSFSObject(0)));
        this.isInit || this.onClickButton({
          target: itemTemplate
        }, objFirt);
        this.isInit = true;
      };
      TuiDo.prototype.onClickButton = function(event, data) {
        var obj = Object.create(null);
        try {
          obj = JSON.parse(data);
        } catch (e) {
          console.error(e);
        }
        if (null == obj["type"] || null == obj["amount"]) {
          this.nodeInfo.active = false;
          return;
        }
        this.nodeInfo.active = true;
        var objInfo = Windown_1.Windown.listConfigItem.find(function(element) {
          return element.ItemId == obj["type"];
        });
        cc.find("img", this.nodeInfo).getComponent(cc.Sprite).spriteFrame = this.getSFByType(objInfo.ItemId);
        var listLb = cc.find("parentInfo", this.nodeInfo).getComponentsInChildren(cc.Label);
        listLb[0].string = objInfo.ItemName;
        listLb[1].string = obj["amount"];
        listLb[2].string = objInfo.Description;
        var node = event.target;
        node.color = cc.Color.fromHEX(new cc.Color(), "#FFC200");
        this.parentItem.children.forEach(function(v) {
          v != node && (v.color = cc.Color.WHITE);
        });
      };
      TuiDo.prototype.getSFByType = function(type) {
        if (type < 5) return this.listSFItem[type - 1];
        if (1e3 == type) return this.spGunSet;
        if (1001 == type) return this.spAuto;
        return this.listSFItemSpecial[type - 100];
      };
      TuiDo.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      TuiDo = __decorate([ ccclass ], TuiDo);
      return TuiDo;
    }(BaseCuaHang_1.default);
    exports.default = TuiDo;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    "./BaseCuaHang": "BaseCuaHang"
  } ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fb31HuB+RA47Q8Vm6XG7D+", "UIManager");
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
    var DownloadProgress_1 = require("./Bundle/DownloadProgress");
    var UpdateAssetManager_1 = require("./Bundle/UpdateAssetManager");
    var BUNDLE_1 = require("./DefineTs/BUNDLE");
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var PathResource_1 = require("./DefineTs/PathResource");
    var TextDefine_1 = require("./DefineTs/TextDefine");
    var InfoERR_1 = require("./InfoERR");
    var ConectManager_1 = require("./Network/ConectManager");
    var XacThucTele_1 = require("./Popup/CaiDat/XacThucTele");
    var EffectTakeCoin_1 = require("./Popup/EffectTakeCoin");
    var NotiTopMesage_1 = require("./Popup/NotiTopMesage/NotiTopMesage");
    var VongQuay_1 = require("./Popup/VongQuay/VongQuay");
    var Util_1 = require("./Util");
    var Windown_1 = require("./Windown");
    window.Global = {};
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funLoading = null;
        _this.preLoad = 0;
        _this.loading = null;
        _this.loadingData = null;
        _this.loadingPerData = null;
        _this.parentPopup = null;
        _this.parentMiniGame = null;
        _this.prarentgame = null;
        _this.timeHide = 0;
        _this.nodeNotifyNoHu = null;
        _this.nodeAlertMini = null;
        _this.notiTopMesage = null;
        _this.prefabDownload = null;
        _this.CA = null;
        _this.isHideTab = false;
        _this.handleClickNoti = null;
        _this.funPing = null;
        _this.listFunShowFirtLogin = null;
        _this.objGameWating = {};
        _this.isVertical = false;
        return _this;
      }
      UIManager.prototype.onLoad = function() {
        cc.log("type bors: " + cc.sys.os);
        cc.Toggle._triggerEventInScript_check = true;
        Global.Ca = this.CA.nativeUrl;
        Windown_1.Windown.UIManager = this;
        cc.game.addPersistRootNode(this.node);
        ConectManager_1.ConectManager.getIns().init();
        Windown_1.Windown.Dialog = cc.find("Dialog", this.node).getComponent("Dialog");
        cc.game.on(cc.game.EVENT_HIDE, this.eventHide, this);
        cc.game.on(cc.game.EVENT_SHOW, this.eventShow, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.handleDisconnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, this.handleLogin, this);
        cc.sys.isNative || window.addEventListener("orientationchange", this.evenResize.bind(this));
        Windown_1.Windown.init();
        Windown_1.Windown.loadRes(BUNDLE_1.BUNDLE.Main, PathResource_1.PathResource.EffectTakeCoin, cc.Prefab);
        Windown_1.Windown.BotController && !cc.sys.isNative && (window.onerror = function(envet, source, line, colno, err) {
          window.location = window.location;
          window.onerror = null;
        });
      };
      UIManager.prototype.test = function() {
        return __awaiter(this, void 0, void 0, function() {
          var num;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getNum() ];

             case 1:
              num = _a.sent();
              cc.log("numla " + num);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.getNum = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              reject(null);
              return [ 2 ];
            });
          });
        });
      };
      UIManager.prototype.getPro = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, this.getNum() ];

               case 1:
                _a.sent();
                setTimeout(resolve, 2e3, 2);
                return [ 2 ];
              }
            });
          });
        });
      };
      UIManager.prototype.evenResize = function() {
        this.node.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2, 0);
      };
      UIManager.prototype.changeRotation = function(isVertical) {
        if (cc.sys.isMobile) {
          this.isVertical = isVertical;
          if (isVertical) {
            this.parentPopup.angle = 90;
            this.parentPopup.scale = .7;
            Windown_1.Windown.Dialog.node.angle = 90;
            this.nodeAlertMini.parent.angle = 90;
            this.notiTopMesage.node.parent.angle = 90;
          } else {
            this.parentPopup.angle = 0;
            this.parentPopup.scale = 1;
            Windown_1.Windown.Dialog.node.angle = 0;
            this.notiTopMesage.node.parent.angle = 0;
            this.nodeAlertMini.parent.angle = 0;
          }
          cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.isVertical);
        }
      };
      UIManager.prototype.checkShowMiniGame = function(cp, isResetPosition) {
        var length = this.parentMiniGame.childrenCount;
        var isReturn = false;
        for (var i = 0; i < length; i++) if (this.parentMiniGame.children[i] == cp.node) isReturn = true; else {
          var cp_1 = this.parentMiniGame.children[i].getComponent("DragMiniGame");
          cp_1 && cp_1.miniSize();
        }
        cp._isMiniSize || cp.nomalSize();
        null != cp.node.parent && cp.node.setSiblingIndex(length - 1);
        isResetPosition && (cp.node.position = cc.v2(0, 0));
        return isReturn;
      };
      UIManager.prototype.eventHide = function() {
        this.timeHide = Date.now();
        this.isHideTab = true;
      };
      UIManager.prototype.eventShow = function() {
        this.isHideTab = false;
        if (this.timeHide < 1) return;
        var now = Date.now();
        var timeTotalHided = now - this.timeHide;
        timeTotalHided > 36e5 && Windown_1.Windown.restartGame();
        cc.systemEvent.emit(cc.game.EVENT_SHOW, timeTotalHided / 1e3);
        this.timeHide = 0;
      };
      UIManager.prototype.handleLogin = function() {
        this.unschedule(this.funPing);
        this.schedule(this.funPing = function() {
          ConectManager_1.ConectManager.getIns().sendRequest("ping", null, null);
        }, 120);
        this.handleClickNoti && this.handleClickNoti();
        this.handleClickNoti = null;
        Windown_1.Windown.IsSafe && (Windown_1.Windown.User.isFirtLogin ? this.showVongQuay(true) : this.showSuggetsDauNgay());
        this.checkAndSendLogCrash();
      };
      UIManager.prototype.showSuggetsDauNgay = function() {
        var key = "firtShow_" + Windown_1.Windown.User.userId;
        var lastDateShow = Windown_1.Windown.getLocalStorage(key);
        var dateNow = new Date().getDate();
        if (null == lastDateShow || lastDateShow != dateNow) {
          this.setUpFunShowFirtDayLogin();
          Windown_1.Windown.setLocalStorage(key, dateNow.toString());
        }
      };
      UIManager.prototype.setUpFunShowFirtDayLogin = function() {
        var _this = this;
        this.listFunShowFirtLogin = [];
        var ac = function() {
          _this.showBonusNap(true);
        };
        this.listFunShowFirtLogin.push(ac);
        if ((null == Windown_1.Windown.User.phoneNumber || "" == Windown_1.Windown.User.phoneNumber) && Windown_1.Windown.User.userAg < 4e3) {
          var ac_1 = function() {
            _this.showXacThucTele(true);
          };
          this.listFunShowFirtLogin.push(ac_1);
        }
        this.listFunShowFirtLogin.push(this.checkAndShowSuggestDangKy);
        this.showFunFirtLogin();
      };
      UIManager.prototype.showFunFirtLogin = function() {
        var fun = this.listFunShowFirtLogin.shift();
        void 0 != fun && fun.call(this);
      };
      UIManager.prototype.checkAndShowSuggestDangKy = function() {
        if (Windown_1.Windown.User.isPlayNow) {
          var keySignUp_1 = "signUp_" + Windown_1.Windown.User.userId;
          var lastSignUp = Windown_1.Windown.getLocalStorage(keySignUp_1);
          var dateNow_1 = new Date().getDate();
          null == lastSignUp ? Windown_1.Windown.setLocalStorage(keySignUp_1, dateNow_1.toString()) : lastSignUp != dateNow_1 && Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.CapNhatTk, function() {
            Windown_1.Windown.UIManager.showCapNhatTaiKhoan();
            Windown_1.Windown.setLocalStorage(keySignUp_1, dateNow_1.toString());
          });
        }
      };
      UIManager.prototype.canclePing = function() {
        this.unschedule(this.funPing);
      };
      UIManager.prototype.handleDisconnect = function() {
        this.canclePing();
        Windown_1.Windown.disconect();
        this.parentPopup.removeAllChildren();
      };
      UIManager.prototype.showLoadingData = function(stringVer) {
        this.preLoad = 0;
        this.loadingData.active = true;
        this.loadingPerData.getComponent(cc.Sprite).fillRange = 0;
        cc.find("LoadingPro/per", this.loadingData).getComponent(cc.Label).string = "\u0110ang t\u1ea3i game: 0%";
        if (stringVer) {
          var lbVer = cc.find("lbVer", this.loadingData).getComponent(cc.Label);
          lbVer.node.active = true;
          lbVer.string = "\u0110ang t\u1ea3i game: " + stringVer;
        }
      };
      UIManager.prototype.hideLoadingData = function() {
        this.loadingData.active = false;
        this.preLoad = 0;
      };
      UIManager.prototype.setPerData = function(per) {
        if (per) {
          if (per <= this.preLoad) return;
          this.preLoad = per;
          var max = 1161 * per;
          this.loadingPerData.getComponent(cc.Sprite).fillRange = per;
          per = Math.round(100 * per);
          cc.find("LoadingPro/per", this.loadingData).getComponent(cc.Label).string = "\u0110ang t\u1ea3i game: " + per + "%";
        }
      };
      UIManager.prototype.showLoading = function(showTime) {
        var _this = this;
        void 0 === showTime && (showTime = 15);
        this.loading.active = true;
        this.scheduleOnce(this.funLoading = function() {
          _this.loading.active = false;
        }, showTime);
      };
      UIManager.prototype.hideLoading = function() {
        this.loading.active = false;
        this.unschedule(this.funLoading);
      };
      UIManager.prototype.onHideMainView = function() {
        Windown_1.Windown.MainView.node.removeFromParent();
      };
      UIManager.prototype.onShowMainView = function() {
        null == Windown_1.Windown.MainView.node.parent && cc.director.getScene().getChildByName("Canvas").insertChild(Windown_1.Windown.MainView.node, 1);
      };
      UIManager.prototype.showNotiNoHu = function(SFSObject) {
        Windown_1.Windown.NotiNoHu.show(SFSObject);
      };
      UIManager.prototype.getNodeEffectTextCoin = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var pre, nodeEff;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.EffectTakeCoin) ];

               case 1:
                pre = _a.sent();
                nodeEff = cc.instantiate(pre).getComponent(EffectTakeCoin_1.default);
                nodeEff.node.parent = Windown_1.Windown.UIManager.parentPopup;
                resolve(nodeEff);
                return [ 2 ];
              }
            });
          });
        });
      };
      UIManager.prototype.showAlertMini = function(string) {
        var _this = this;
        this.nodeAlertMini.getComponentInChildren(cc.Label).string = string;
        this.nodeAlertMini.opacity = 255;
        this.nodeAlertMini.scale = 0;
        this.nodeAlertMini.active = true;
        cc.Tween.stopAllByTarget(this.nodeAlertMini);
        cc.tween(this.nodeAlertMini).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(2).to(.5, {
          opacity: 0
        }).call(function() {
          _this.nodeAlertMini.active = false;
        }).start();
      };
      UIManager.prototype.showLvlUp = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (Windown_1.Windown.BotController) return [ 2 ];
              if (!(null == Windown_1.Windown.TangCap)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.TangCap) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.TangCap.node.parent = this.parentPopup;
              Windown_1.Windown.TangCap.show(SFSObject);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showReviceItem = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (Windown_1.Windown.BotController) return [ 2 ];
              if (!(null == Windown_1.Windown.ReviceItem)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.ReviceItem) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.ReviceItem.node.parent = this.parentPopup;
              Windown_1.Windown.ReviceItem.show(SFSObject);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showBonusNap = function(boolIsNextFun, idGoi) {
        void 0 === boolIsNextFun && (boolIsNextFun = false);
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              if (!(null == Windown_1.Windown.BonusNap)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.BonusNap) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.BonusNap.node.parent = this.parentPopup;
              Windown_1.Windown.BonusNap.show(boolIsNextFun, idGoi);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showDangNhap = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DangNhap) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showDangKy = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DangKy) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showSuKien = function(idSuKien) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.SuKien)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.SuKien) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.SuKien.node.parent = this.parentPopup;
              Windown_1.Windown.SuKien.show(0, idSuKien);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showCaiDat = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.CaiDat)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.CaiDat) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.CaiDat.node.parent = this.parentPopup;
              Windown_1.Windown.CaiDat.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showTietKiem = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.TietKiem)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.TietKiem) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.TietKiem.node.parent = this.parentPopup;
              Windown_1.Windown.TietKiem.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showTuiDo = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.TuiDo)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.TuiDo) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.TuiDo.node.parent = this.parentPopup;
              Windown_1.Windown.TuiDo.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showCuaHang = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.CuaHang)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.CuaHang) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.CuaHang.node.parent = this.parentPopup;
              Windown_1.Windown.CuaHang.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showNhiemVu = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.checkAndShowDangNhap();
            Windown_1.Windown.NhiemVuConTroller.showQuest();
            return [ 2 ];
          });
        });
      };
      UIManager.prototype.showGiftCode = function(code) {
        void 0 === code && (code = null);
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.SuKien)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.SuKien) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.SuKien.node.parent = this.parentPopup;
              Windown_1.Windown.SuKien.show(1, null);
              code && Windown_1.Windown.SuKien.setGiftCode(code);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showHomThu = function(idMail) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.checkAndShowDangNhap();
            Windown_1.Windown.HomThuController.showMailView(idMail);
            return [ 2 ];
          });
        });
      };
      UIManager.prototype.showThongTin = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.ThongTin)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.ThongTin) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.ThongTin.node.parent = this.parentPopup;
              Windown_1.Windown.ThongTin.show(SFSObject);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showDoiAva = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DoiAva) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showDoiTrangThai = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DoiTrangThai) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showInfoTranfer = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.LichSuGiaoDich)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.LichSuGiaoDich) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.LichSuGiaoDich.node.parent = this.parentPopup;
              Windown_1.Windown.LichSuGiaoDich.show();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showShop = function(index, menhGia, idGoi) {
        void 0 === index && (index = 0);
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.ShopView)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.ShopView) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              this.hideLoading();
              Windown_1.Windown.ShopView.node.parent = this.parentPopup;
              Windown_1.Windown.ShopView.show(index, menhGia, idGoi);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showXepHang = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.XepHang)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.XepHang) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.XepHang.node.parent = this.parentPopup;
              Windown_1.Windown.XepHang.show();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showCapNhatTaiKhoan = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.CapNhatTaiKhoan)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.CapNhatTaiKhoan) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.CapNhatTaiKhoan.node.parent = this.parentPopup;
              Windown_1.Windown.CapNhatTaiKhoan.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showCropImg = function(base64) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.CropImgAva)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.CropImgAva) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.CropImgAva.node.parent = this.parentPopup;
              Windown_1.Windown.CropImgAva.show(base64);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showHoTro = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.HoTro)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.HoTro) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.HoTro.node.parent = this.parentPopup;
              Windown_1.Windown.HoTro.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showImgChat = function(spMain) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.ImgChat)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.ImgChat) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.ImgChat.node.parent = this.parentPopup;
              Windown_1.Windown.ImgChat.show(spMain);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showQuickShop = function(idGoi, money) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.QuickShop)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.QuickShop) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.QuickShop.node.parent = this.parentPopup;
              Windown_1.Windown.QuickShop.show(idGoi, money);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showXacThucTele = function(isShowNext) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, cp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.XacThucTele) ];

             case 1:
              pre = _a.sent();
              cp = cc.instantiate(pre).getComponent(XacThucTele_1.default);
              this.parentPopup.addChild(cp.node);
              cp.show(isShowNext);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showVongQuay = function(isShowNext) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, cp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              if (Windown_1.Windown.IsSafe && (null == Windown_1.Windown.User.phoneNumber || "" == Windown_1.Windown.User.phoneNumber)) {
                this.showXacThucTele();
                return [ 2 ];
              }
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.VongQuay) ];

             case 1:
              pre = _a.sent();
              cp = cc.instantiate(pre).getComponent(VongQuay_1.default);
              this.parentPopup.addChild(cp.node);
              cp.show(isShowNext);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.playSoundWithUrl = function(url) {
        return __awaiter(this, void 0, void 0, function() {
          var audioClip;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadRes(BUNDLE_1.BUNDLE.Main, url, cc.AudioClip) ];

             case 1:
              audioClip = _a.sent();
              cc.audioEngine.play(audioClip, false, 1);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.checkAssets = function(gameType, isForcePlay) {
        var _this = this;
        if (cc.sys.os == cc.sys.OS_WINDOWS) return false;
        if (!cc.sys.isNative || false) return false;
        var updateAssetManager = new UpdateAssetManager_1.default();
        if (updateAssetManager.updateAsset(gameType)) {
          this.removeDownload(gameType);
          var funFinish = function() {
            _this.removeDownload(gameType);
            _this.objGameWating[gameType] = false;
            updateAssetManager.onDestroyClass();
            if (isForcePlay) {
              Windown_1.Windown.UIManager.hideLoadingData();
              isForcePlay();
            }
          };
          if (isForcePlay) {
            var funProgress = null;
            Windown_1.Windown.UIManager.showLoadingData();
            funProgress = function(per) {
              Windown_1.Windown.UIManager.setPerData(per);
            };
            updateAssetManager.initProgress(funProgress, funFinish);
          } else updateAssetManager.initProgress(this.downloadProgress(gameType), funFinish);
          updateAssetManager.checkUpdate();
          return true;
        }
        return false;
      };
      UIManager.prototype.onClickOpenBigGame = function(gameType, isForcePlay) {
        if (this.objGameWating[gameType]) return true;
        this.objGameWating[gameType] = true;
        var retun = this.checkAssets(gameType, isForcePlay);
        retun || (this.objGameWating[gameType] = false);
        return retun;
      };
      UIManager.prototype.downloadProgress = function(gameType) {
        var _this = this;
        var itemIconGame = [];
        var nodeProgress = [];
        if (Windown_1.Windown.MainView) {
          itemIconGame = Windown_1.Windown.MainView.getItemIconGameByType(gameType);
          itemIconGame.forEach(function(node) {
            var temp = cc.instantiate(_this.prefabDownload).getComponent(DownloadProgress_1.default);
            temp.node.name = "ProgressDownload";
            temp.node.active = true;
            node.addChild(temp.node);
            nodeProgress.push(temp);
          });
        }
        if (Windown_1.Windown.BtnMiniGame) {
          var listNode = Windown_1.Windown.BtnMiniGame.getIconByType(gameType);
          listNode.forEach(function(node) {
            var temp = cc.instantiate(_this.prefabDownload).getComponent(DownloadProgress_1.default);
            temp.node.name = "ProgressDownload";
            temp.node.active = true;
            temp.node.scale = .7;
            node.addChild(temp.node);
            nodeProgress.push(temp);
          });
        }
        var fun = function(per) {
          for (var _i = 0, nodeProgress_1 = nodeProgress; _i < nodeProgress_1.length; _i++) {
            var temp = nodeProgress_1[_i];
            temp.setPercent(per);
          }
        };
        return fun;
      };
      UIManager.prototype.removeDownload = function(gameType) {
        if (null == Windown_1.Windown.MainView) return;
        var itemIconGame = [];
        itemIconGame = Windown_1.Windown.MainView.getItemIconGameByType(gameType);
        if (Windown_1.Windown.BtnMiniGame) {
          var listNode = Windown_1.Windown.BtnMiniGame.getIconByType(gameType);
          listNode.forEach(function(v) {
            itemIconGame.push(v);
          });
        }
        itemIconGame.forEach(function(node) {
          var temp = node.getChildByName("ProgressDownload");
          temp && temp.destroy();
        });
      };
      UIManager.prototype.showNotiMesage = function(SFSObject) {
        this.notiTopMesage.show(SFSObject);
      };
      UIManager.prototype.checkAndShowDangNhap = function() {
        if (!Windown_1.Windown.User.isLogin) {
          this.showDangNhap();
          throw new InfoERR_1.InfoErr("Need Login");
        }
      };
      UIManager.prototype.checkAndSendLogCrash = function() {
        var strErr = cc.sys.localStorage.getItem("err");
        if (null != strErr && "" != strErr) {
          var http = cc.loader.getXMLHttpRequest();
          var data = Object.create(null);
          data.err = strErr;
          data.id = Windown_1.Windown.User.userId;
          var url = "http://207.148.90.121:3000/api/crash";
          http.open("POST", url, true);
          http.setRequestHeader("Content-Type", "application/json");
          http.onreadystatechange = function() {
            4 === http.readyState && http.status >= 200 && http.status < 300;
          };
          http.send(JSON.stringify(data));
          cc.sys.localStorage.setItem("err", "");
          Util_1.Util.resetListBug();
        }
      };
      UIManager.prototype.initConfig = function() {
        cc.log("nhay vao confix nay");
        if (cc.sys.os != cc.sys.OS_WINDOWS && cc.sys.isNative) {
          sdkbox.PluginOneSignal.init();
          sdkbox.PluginOneSignal.setListener({
            onSendTag: function(success, key, message) {},
            onGetTags: function(jsonString) {},
            onIdsAvailable: function(userId, pushToken) {
              console.log("-------------------go----------------");
              Windown_1.Windown.deviceId = userId;
              ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
            },
            onPostNotification: function(success, message) {
              console.log("onPostNotification: success " + success + "  message:" + message);
            },
            onNotification: function(isActive, message, additionalData) {
              console.log("onNotification: isActive " + isActive + "  message:" + message + " additionalData:" + additionalData + " ");
            },
            onNotificationOpened: function(message) {
              console.log("onNotificationOpened:  message:" + message);
              var data = JSON.parse(message);
              var additionalData = data.notification.payload.additionalData;
              var type = additionalData.type;
              type == Windown_1.Windown.ONESIGNAL_MAIL ? Windown_1.Windown.UIManager.handleClickNoti = function() {
                Windown_1.Windown.UIManager.showHomThu(parseInt(additionalData.idMail));
              } : type == Windown_1.Windown.ONESIGNAL_GIFT_CODE ? Windown_1.Windown.UIManager.handleClickNoti = function() {
                Windown_1.Windown.UIManager.showGiftCode(additionalData.giftCode);
              } : type == Windown_1.Windown.ONESIGNAL_SU_KIEN && (Windown_1.Windown.UIManager.handleClickNoti = function() {
                Windown_1.Windown.UIManager.showSuKien(additionalData.idSuKien);
              });
              if (Windown_1.Windown.User.isLogin) {
                Windown_1.Windown.UIManager.handleClickNoti();
                Windown_1.Windown.UIManager.handleClickNoti = null;
              }
            },
            onNotificationReceived: function(message) {
              console.log("onNotificationReceived:  message:" + message);
            }
          });
          sdkbox.PluginOneSignal.setSubscription(true);
          sdkbox.PluginOneSignal.enableInAppAlertNotification(false);
          sdkbox.PluginFacebook.init();
          sdkbox.PluginFacebook.setLoginBehavior(1);
          sdkbox.PluginFacebook.setAppId("377795790479497");
          sdkbox.PluginFacebook.setListener({
            onLogin: function(isLogin, msg) {
              if (isLogin) {
                var data = {
                  id: sdkbox.PluginFacebook.getUserID(),
                  token: sdkbox.PluginFacebook.getAccessToken()
                };
                ConectManager_1.ConectManager.getIns().loginFb(data);
              } else {
                console.log(msg);
                console.log("loi login nay");
                Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                Windown_1.Windown.UIManager.hideLoading();
              }
            },
            onAPI: function(key, json) {
              console.log("key: " + key);
              var data = JSON.parse(json);
              for (var temp in data) {
                console.log(temp);
                console.log(data[temp]);
              }
              console.log("jsonString: " + JSON.stringify(data));
            },
            onGetUserInfo: function(obj) {
              console.log("obj: " + JSON.stringify(obj));
            }
          });
        }
        !cc.sys.isNative;
      };
      __decorate([ property(cc.Node) ], UIManager.prototype, "loading", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "loadingData", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "loadingPerData", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "parentPopup", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "parentMiniGame", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "prarentgame", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "nodeNotifyNoHu", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "nodeAlertMini", void 0);
      __decorate([ property(NotiTopMesage_1.default) ], UIManager.prototype, "notiTopMesage", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "prefabDownload", void 0);
      __decorate([ property(cc.Asset) ], UIManager.prototype, "CA", void 0);
      UIManager = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(cc.Component);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "./Bundle/DownloadProgress": "DownloadProgress",
    "./Bundle/UpdateAssetManager": "UpdateAssetManager",
    "./DefineTs/BUNDLE": "BUNDLE",
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./DefineTs/PathResource": "PathResource",
    "./DefineTs/TextDefine": "TextDefine",
    "./InfoERR": "InfoERR",
    "./Network/ConectManager": "ConectManager",
    "./Popup/CaiDat/XacThucTele": "XacThucTele",
    "./Popup/EffectTakeCoin": "EffectTakeCoin",
    "./Popup/NotiTopMesage/NotiTopMesage": "NotiTopMesage",
    "./Popup/VongQuay/VongQuay": "VongQuay",
    "./Util": "Util",
    "./Windown": "Windown"
  } ],
  UpdateAssetManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91c19bZx8NC/6Q+IGkg5aUO", "UpdateAssetManager");
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
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpdateAssetManager = function(_super) {
      __extends(UpdateAssetManager, _super);
      function UpdateAssetManager() {
        var _this_1 = null !== _super && _super.apply(this, arguments) || this;
        _this_1.isInitAssets = true;
        _this_1.ForcedUpdate = true;
        _this_1.countFail = 0;
        _this_1.isFirtInit = true;
        _this_1.funProgress = null;
        _this_1.funFinish = null;
        _this_1._am = null;
        _this_1._updating = false;
        _this_1._failCount = 0;
        _this_1._storagePath = null;
        _this_1.customManifestStr = {
          packageUrl: "",
          remoteManifestUrl: "",
          remoteVersionUrl: "",
          version: "1.0.0",
          assets: {},
          searchPaths: []
        };
        _this_1.verBCache = "1.0.0";
        _this_1.gameType = null;
        return _this_1;
      }
      UpdateAssetManager.prototype.onDestroyClass = function() {
        console.log("chay me vao destroy class update manager");
        this._am && this._am.setEventCallback(null);
      };
      UpdateAssetManager.prototype.dynamicUpdate = function() {
        if (this._am && !this._updating) {
          this._am.setEventCallback(this.updateCb.bind(this));
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(JSON.stringify(this.customManifestStr), this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
          }
          this._failCount = 0;
          this._am.update();
          this._updating = true;
        } else {
          var _this_2 = this;
          this.scheduleOnce(function() {
            _this_2.dynamicUpdate();
          }, .5);
        }
      };
      UpdateAssetManager.prototype.checkUpdate = function() {
        console.log("Check Update");
        if (this._updating) {
          console.log("Checking or updating ...");
          return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var manifest = new jsb.Manifest(JSON.stringify(this.customManifestStr), this._storagePath);
          this._am.loadLocalManifest(manifest, this._storagePath);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
          console.log("Failed to load local manifest ...");
          return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
        this._updating = true;
      };
      UpdateAssetManager.prototype.getManifest = function() {
        var urlChidl = Windown_1.Windown.linkBundle;
        var uri = this._storagePath + "/project.manifest";
        var verCurrent = "1.0.0";
        if (jsb.fileUtils.isFileExist(uri)) {
          urlChidl = urlChidl.replace("%n", this.gameType + "full");
          this.isFirtInit = false;
          var strTemp = jsb.fileUtils.getStringFromFile(uri);
          var obj = JSON.parse(strTemp);
          obj.packageUrl = urlChidl;
          obj.remoteManifestUrl = urlChidl + "project.manifest";
          obj.remoteVersionUrl = urlChidl + "version.manifest";
          var strWirte = JSON.stringify(obj);
          jsb.fileUtils.writeStringToFile(strWirte, this._storagePath + "/project.manifest");
          verCurrent = obj.version;
        } else urlChidl = urlChidl.replace("%n", this.gameType.toString());
        var verInServer = Windown_1.Windown.verChildGame[this.gameType];
        this.customManifestStr.packageUrl = urlChidl;
        this.customManifestStr.remoteManifestUrl = urlChidl + "project.manifest";
        this.customManifestStr.remoteVersionUrl = urlChidl + "version.manifest";
        var isReturn = !(this.versionCompareHandleCheck(verCurrent, verInServer) >= 0);
        return isReturn;
      };
      UpdateAssetManager.prototype.updateCb = function(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          var getPercent = event.getPercent();
          isNaN(getPercent) && (getPercent = 0);
          getPercent > 1 && (getPercent = 1);
          this.funProgress && this.funProgress(getPercent);
          var msg = event.getMessage();
          msg && console.log("Updated file: " + msg);
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          console.log("lo down load == bo qua");
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          console.log("phien ban moi nhat");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("Update finished. " + event.getMessage());
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          console.log("Update failed. " + event.getMessage());
          this.countFail++;
          if (this.countFail < 5) {
            this._am.downloadFailedAssets();
            this._updating = false;
          } else {
            jsb.fileUtils.removeDirectory(this._storagePath);
            failed = true;
            this.countFail = 0;
          }
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          console.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          console.log("loi la==>" + event.getMessage());
          failed = true;
        }
        if (failed) {
          this._am.setEventCallback(null);
          this._updating = false;
          this.funFinish();
        }
        if (needRestart) {
          if (this.isFirtInit) {
            var strProjectManifestTemp = this._storagePath + "/assets/project.manifest";
            if (jsb.fileUtils.isFileExist(strProjectManifestTemp)) {
              var strTemp = jsb.fileUtils.getStringFromFile(strProjectManifestTemp);
              jsb.fileUtils.writeStringToFile(strTemp, this._storagePath + "/project.manifest");
            }
          }
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("SearchAssets", JSON.stringify(searchPaths));
          var str = "updateResource" + this.gameType;
          cc.sys.localStorage.setItem(str, false);
          jsb.fileUtils.setSearchPaths(searchPaths);
          this._am.setEventCallback(null);
          this.funFinish();
        }
      };
      UpdateAssetManager.prototype.checkCb = function(event) {
        var str = "updateResource" + this.gameType;
        console.log("Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          console.log("ko tim thay mainfest file");
          this.funFinish && this.funFinish();
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.funFinish && this.funFinish();
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          console.log("Phien ban moi nhat " + this.verBCache);
          Windown_1.Windown.verChildGame[this.gameType] = this.verBCache;
          cc.sys.localStorage.setItem(str, false);
          this.funFinish && this.funFinish();
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          console.log("bat dau update");
          this.dynamicUpdate();
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("ko co gi thay doi ca");
          this.funFinish && this.funFinish();
          break;

         default:
          return;
        }
        this._am.setEventCallback(null);
        this._updating = false;
      };
      UpdateAssetManager.prototype.initProgress = function(funProgress, funFinish) {
        this.funProgress = funProgress;
        this.funFinish = funFinish;
      };
      UpdateAssetManager.prototype.versionCompareHandle = function(versionA, versionB) {
        console.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        this.verBCache = versionB;
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      UpdateAssetManager.prototype.versionCompareHandleCheck = function(versionA, versionB) {
        console.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      UpdateAssetManager.prototype.updateAsset = function(gameType) {
        this.gameType = gameType;
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "AllGame/" + gameType;
        var urlFixloi = this._storagePath + "/project.manifest";
        if (jsb.fileUtils.isFileExist(urlFixloi)) {
          var str = jsb.fileUtils.getStringFromFile(urlFixloi);
          var obj = JSON.parse(str);
          var ver = obj.version;
          var listCheck = ver.split(".");
          listCheck.length < 3 && console.log("game nay bi loi " + jsb.fileUtils.removeDirectory(this._storagePath));
        }
        var objRemove = Windown_1.Windown.LIST_REMOVE_BUNDLE_GAME;
        var versionRemove = objRemove[gameType];
        if (null != versionRemove) {
          var url = this._storagePath + "/project.manifest";
          if (jsb.fileUtils.isFileExist(url)) {
            var str = jsb.fileUtils.getStringFromFile(url);
            var obj = JSON.parse(str);
            versionRemove == obj.version && console.log("gia tri la " + jsb.fileUtils.removeDirectory(this._storagePath));
          }
        }
        var isReturn = this.getManifest();
        if (!isReturn) return false;
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          if (compressed) {
            console.log("Verification passed : " + relativePath);
            return true;
          }
          console.log("Verification passed : " + relativePath + " (" + expectedMD5 + ")");
          return true;
        });
        return true;
      };
      UpdateAssetManager.prototype.getIsSuccesUpdate = function() {
        console.log("hahaha vao destroy class");
      };
      UpdateAssetManager = __decorate([ ccclass ], UpdateAssetManager);
      return UpdateAssetManager;
    }(cc.Component);
    exports.default = UpdateAssetManager;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ffa84HMcZDQrgkoz2Y4DtG", "Util");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Util = void 0;
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var InfoERR_1 = require("./InfoERR");
    var Windown_1 = require("./Windown");
    var GET_ANDROID_ID = "1";
    var GET_BUNDLE_ID = "2";
    var GET_VERSION_ID = "3";
    var LOGIN_FACEBOOK = "4";
    var VEYRY_PHONE = "6";
    var CHAT_ADMIN = "7";
    var DEVICE_VERSION = "8";
    var LOGIN_FACEBOOK_CANCEL = "9";
    var LOGIN_FACEBOOK_ERROR = "10";
    var BUY_IAP = "11";
    var SEND_SMS = "12";
    var OPEN_FANPAGE = "14";
    var OPEN_GROUP = "15";
    var CHECK_NETWORK = "16";
    var CARRIER_NAME = "19";
    var CHECK1SIM = "20";
    var CHECK2SIM = "21";
    var HIDESPLASH = "22";
    var CALL_PHONE = "24";
    var COPPY_TO_CLIP = "27";
    var IAP_PURCHASE = "28";
    var IAP_INIT = "29";
    var IAP_PURCHASE_SUCCESS = "30";
    var IAP_PURCHASE_ERROR = "31";
    var IAP_PURCHASE_CANCEL = "32";
    var VERY_OTP = "VERY_OTP";
    var RESEND_OTP = "RESEND_OTP";
    var ERR_SHOW = "ERR_SHOW";
    var GET_IMG_LIBARY = "GET_IMG_LIBARY";
    var CROP_IMG = "CROP_IMG";
    var GET_IMG_LIBARY_CHAT = "GET_IMG_LIBARY_CHAT";
    var SCALE_IMG_CHAT = "SCALE_IMG_CHAT";
    var SET_INFO_SCACLE = "SET_INFO_SCACLE";
    var GET_ISSAFE = "GET_ISSAFE";
    var listBug = [];
    function checkContainsBug(model) {
      for (var _i = 0, listBug_1 = listBug; _i < listBug_1.length; _i++) {
        var v = listBug_1[_i];
        if (v.localtion == model.localtion && v.message == model.message && v.stack == model.stack) return true;
      }
      return false;
    }
    cc.NativeCallJS = function(evt, params) {
      cc.log("iNativeCallJS------------------------\x3e   DEMO " + evt + "     " + params);
      switch (evt) {
       case COPPY_TO_CLIP:
        Windown_1.Windown.UIManager.showAlertMini("\u0110\xe3 Sao Ch\xe9p");
        break;

       case ERR_SHOW:
        var list = params.split("---ABC---");
        if (-1 != list[1].indexOf("lvd----")) return;
        var model = Object.create(null);
        Windown_1.Windown.User.isLogin ? model.idP = Windown_1.Windown.User.userId : model.idP = null;
        model.localtion = list[0];
        model.message = list[1];
        model.stack = list[2];
        cc.sys.os == cc.sys.OS_WINDOWS && (Windown_1.Windown.BotController ? model.os = "WIN_BOT" : model.os = "WIN");
        if (!checkContainsBug(model)) {
          model.time = new Date().toLocaleString();
          listBug.push(model);
          cc.sys.localStorage.setItem("err", JSON.stringify(listBug));
        }
        break;

       case GET_IMG_LIBARY:
        Windown_1.Windown.UIManager.showCropImg(params);
        break;

       case CROP_IMG:
        Windown_1.Windown.DoiAva && Windown_1.Windown.DoiAva.reviecNewBase64ToAddCustom(params);
        break;

       case GET_IMG_LIBARY_CHAT:
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.GET_IMG_CHAT, params);
        break;

       case SCALE_IMG_CHAT:
        break;

       case GET_ISSAFE:
        Windown_1.Windown.IsSafeNative = params;
      }
    };
    var Util = function() {
      function Util() {}
      Util.onCallNative = function(evt, params) {
        cc.sys.os === cc.sys.OS_ANDROID && cc.sys.isNative ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onCallFromJavascript", "(Ljava/lang/String;Ljava/lang/String;)V", evt, params) : cc.sys.os === cc.sys.OS_IOS && cc.sys.isNative && jsb.reflection.callStaticMethod("AppController", "onCallFromJavaScript:andParams:", evt, params);
      };
      Util.resetListBug = function() {
        listBug = [];
      };
      Util.onCoppyToClip = function(str) {
        Util.onCallNative(COPPY_TO_CLIP, str);
      };
      Util.onGetImgInLibary = function() {
        Util.onCallNative(GET_IMG_LIBARY, "");
      };
      Util.onGetImgInLibaryChat = function() {
        if (cc.sys.isNative) Util.onCallNative(GET_IMG_LIBARY_CHAT, ""); else {
          var fileUploader = null;
          false;
          fileUploader = document.getElementById("file-uploader");
          fileUploader.addEventListener("change", function(e) {
            var file = e.target.files[0];
            var blobURL = URL.createObjectURL(file);
            var img = new Image();
            img.src = blobURL;
            img.onerror = function() {
              URL.revokeObjectURL(this.src);
              console.log("Cannot load image");
            };
            img.onload = function() {
              URL.revokeObjectURL(this.src);
              var canvas = document.createElement("canvas");
              var width = img.width;
              var height = img.height;
              var newWidth = width;
              var newHeight = height;
              var max = 650;
              var min = 150;
              if (width > height) {
                if (width > max) {
                  var scacle = max / width;
                  newWidth = width * scacle;
                  newHeight = height * scacle;
                } else if (width < min) {
                  var scacle = min / width;
                  newWidth = width * scacle;
                  newHeight = height * scacle;
                }
              } else if (height > max) {
                var scacle = max / height;
                newWidth = width * scacle;
                newHeight = height * scacle;
              } else if (height < min) {
                var scacle = min / height;
                newWidth = width * scacle;
                newHeight = height * scacle;
              }
              canvas.width = newWidth;
              canvas.height = newHeight;
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, newWidth, newHeight);
              var str = canvas.toDataURL("image/jpeg");
              str = str.replace("data:", "").replace(/^.+,/, "");
              cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.GET_IMG_CHAT, str);
            };
          });
          fileUploader.click();
        }
      };
      Util.onSetInfoScale = function(str) {
        Util.onCallNative(SET_INFO_SCACLE, str);
      };
      Util.getImgMiniChat = function(str) {
        Util.onCallNative(SCALE_IMG_CHAT, str);
      };
      Util.onCropImg = function(str) {
        Util.onCallNative(CROP_IMG, str);
      };
      Util.getIsSafe = function() {
        Util.onCallNative(GET_ISSAFE, "");
      };
      Util.ThrowErrProsime = function(e) {
        if (e && e.stack) {
          if (cc.sys.isNative) {
            var erro = e.stack;
            erro = erro.replace(/[\n]/g, "--");
            var string = "null---ABC---null---ABC---" + erro;
            cc.NativeCallJS(ERR_SHOW, string);
          } else cc.error(e);
          throw new InfoERR_1.InfoErr("loi await");
        }
        console.error(e);
      };
      return Util;
    }();
    exports.Util = Util;
    cc._RF.pop();
  }, {
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./InfoERR": "InfoERR",
    "./Windown": "Windown"
  } ],
  VongQuay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfe24B4HiJGLIMzAYAN3sYG", "VongQuay");
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
    var PlayerPP_1 = require("../../DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VongQuay = function(_super) {
      __extends(VongQuay, _super);
      function VongQuay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeRotate = null;
        _this.btnSpin = null;
        _this.coinItem = null;
        _this.dialog = null;
        _this.textQuay = null;
        _this.btnClose = null;
        _this.isShowNext = false;
        _this._map = new Map();
        _this.moneyTake = 0;
        _this.isSend = false;
        _this.lastAngle = 22.5;
        return _this;
      }
      VongQuay.prototype.onLoad = function() {
        var list1k = [ [ 25, 42 ], [ 203, 220 ] ];
        var list5k = [ [ 293, 309 ], [ 113, 130 ] ];
        var list10k = [ [ 1, 17 ], [ 92, 107 ], [ 181, 197 ], [ 271, 286 ] ];
        var list20k = [ [ 46, 63 ], [ 134, 152 ], [ 225, 244 ], [ 315, 333 ] ];
        var list50k = [ [ 158, 174 ], [ 338, 355 ] ];
        var list100k = [ [ 69, 86 ], [ 247, 265 ] ];
        this._map.set(1e3, list1k);
        this._map.set(5e3, list5k);
        this._map.set(1e4, list10k);
        this._map.set(2e4, list20k);
        this._map.set(5e4, list50k);
        this._map.set(1e5, list100k);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.TakeFirtLogin, this.responseServer, this);
        this.changeStatus();
      };
      VongQuay.prototype.onDestroy = function() {
        cc.systemEvent.removeAll(this);
      };
      VongQuay.prototype.responseServer = function(sfs) {
        var _this = this;
        if (sfs.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          Windown_1.Windown.Dialog.showLog(sfs.get(PlayerPP_1.PlayerPP.ERR_MESSAGE), function() {
            _this.onClickClose();
          });
          return;
        }
        this.btnClose.active = false;
        Windown_1.Windown.User.isFirtLogin = false;
        var money = sfs.get("mn");
        this.moneyTake = money;
        var listGoc = this._map.get(money);
        var listRd = listGoc[Windown_1.Windown.RandomNumber(0, listGoc.length)];
        var goc = Windown_1.Windown.RandomNumber(listRd[0], listRd[1] + 1);
        var action = cc.rotateBy(7, 710 + goc).easing(cc.easeCubicActionOut());
        var action2 = cc.delayTime(1);
        var action3 = cc.callFunc(function() {
          _this.dialog.active = true;
          _this.dialog.scale = 0;
          _this.dialog.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
          var lbmn = cc.find("lbMoney", _this.dialog);
          lbmn.getComponent(cc.Label).string = Windown_1.Windown.formatNumber(money);
          var audi0 = Windown_1.Windown.AudioManager;
          audi0.playEffect(audi0.takeMoney);
        });
        this.nodeRotate.runAction(cc.sequence(action, action2, action3));
      };
      VongQuay.prototype.show = function(isShowNext) {
        this.isShowNext = isShowNext;
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      VongQuay.prototype.changeStatus = function() {
        if (Windown_1.Windown.User.isFirtLogin) {
          this.textQuay.string = "(1 L\u01b0\u1ee3t)";
          this.btnSpin.getComponent(cc.Animation).play("BtnVongQuay");
        } else {
          this.textQuay.string = "(0 L\u01b0\u1ee3t)";
          this.btnSpin.getComponent(cc.Animation).stop();
          this.btnSpin.node.scale = 1;
        }
      };
      VongQuay.prototype.onClickSpin = function() {
        if (!Windown_1.Windown.User.isFirtLogin) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_VONGQUAY);
          return;
        }
        this.btnSpin.interactable = false;
        Windown_1.Windown.User.isFirtLogin = false;
        this.changeStatus();
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.TakeFirtLogin, null);
      };
      VongQuay.prototype.onClickXacNhan = function() {
        return __awaiter(this, void 0, void 0, function() {
          var nodeEff;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.UIManager.getNodeEffectTextCoin() ];

             case 1:
              nodeEff = _a.sent();
              return [ 4, nodeEff.show(Windown_1.Windown.User.userAg + this.moneyTake, cc.v2(0, -83), this.moneyTake) ];

             case 2:
              _a.sent();
              return [ 4, this.makeDelay(1) ];

             case 3:
              _a.sent();
              this.onClickClose();
              return [ 2 ];
            }
          });
        });
      };
      VongQuay.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.scheduleOnce(resolve, time);
        });
      };
      VongQuay.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.isShowNext && Windown_1.Windown.UIManager.showSuggetsDauNgay();
          _this.node.destroy();
        });
      };
      VongQuay.prototype.update = function(dt) {
        var angle = this.nodeRotate.angle;
        if (angle > this.lastAngle) {
          var audi0 = Windown_1.Windown.AudioManager;
          audi0.playEffectNoStop(audi0.cachCach);
          this.lastAngle = 22.5 * (Number(angle / 22.5) + 1);
        }
      };
      __decorate([ property(cc.Node) ], VongQuay.prototype, "nodeRotate", void 0);
      __decorate([ property(cc.Button) ], VongQuay.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], VongQuay.prototype, "coinItem", void 0);
      __decorate([ property(cc.Node) ], VongQuay.prototype, "dialog", void 0);
      __decorate([ property(cc.Label) ], VongQuay.prototype, "textQuay", void 0);
      __decorate([ property(cc.Node) ], VongQuay.prototype, "btnClose", void 0);
      VongQuay = __decorate([ ccclass ], VongQuay);
      return VongQuay;
    }(cc.Component);
    exports.default = VongQuay;
    cc._RF.pop();
  }, {
    "../../DefineTs/PlayerPP": "PlayerPP",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  WindownChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60d1e6lWZZHfoTFQrnQQux5", "WindownChat");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Util_1 = require("../../Util");
    var Windown_1 = require("../../Windown");
    var ItemChat_1 = require("./ItemChat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WindownChat = function(_super) {
      __extends(WindownChat, _super);
      function WindownChat() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbNameAdmin = null;
        _this.scrChat = null;
        _this.nodeStatus = null;
        _this.edbMess = null;
        _this.itemTemplateOther = null;
        _this.itemTemplateMe = null;
        _this.funGetState = null;
        _this.poolItemChatMe = new cc.NodePool();
        _this.poolItemChatOther = new cc.NodePool();
        _this.sfsArry = null;
        _this.isNeedHelp = false;
        return _this;
      }
      WindownChat.prototype.onLoad = function() {
        this.resignEdb(this.edbMess);
      };
      WindownChat.prototype.onEnable = function() {
        this.node.setPosition(50, -50);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickSend, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.GET_IMG_CHAT, this.getImgChat, this);
      };
      WindownChat.prototype.onDisable = function() {
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickSend, this);
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.GET_IMG_CHAT, this.getImgChat, this);
        this.unschedule(this.funGetState);
      };
      WindownChat.prototype.getImgChat = function(base64) {
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putText("base64Img", base64);
        sfsObj.putUtfString("info", "img");
        sfsObj.putUtfString("adminName", this.lbNameAdmin.string);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SendMessageToAdmin, sfsObj);
      };
      WindownChat.prototype.reset = function() {
        for (var i = 0, l = this.scrChat.content.children.length; i < l; i++) {
          var cp = this.scrChat.content.children[0].getComponent(ItemChat_1.default);
          cp && (cp.isMe ? this.poolItemChatMe.put(cp.node) : this.poolItemChatOther.put(cp.node));
        }
      };
      WindownChat.prototype.show = function(adminName, isNeedHelp) {
        var _this = this;
        this.isNeedHelp = isNeedHelp;
        Windown_1.Windown.actionEffectOpen(this.node, function() {
          if (null != _this.sfsArry) {
            _this.initListItem(_this.sfsArry);
            Windown_1.Windown.ChatAdminController.scheduleGetNewSate(adminName, false);
          } else Windown_1.Windown.ChatAdminController.scheduleGetNewSate(adminName, true);
        });
        this.lbNameAdmin.string = adminName;
      };
      WindownChat.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
          Windown_1.Windown.ChatAdminController.onCloseWindow(_this.lbNameAdmin.string);
        });
      };
      WindownChat.prototype.initListItem = function(arrData) {
        var _this = this;
        this.reset();
        this.sfsArry = arrData;
        var parentItem = this.scrChat.content;
        for (var i = 0, l = arrData.size(); i < l; i++) {
          var sfsObj = arrData.getSFSObject(i);
          var sender = sfsObj.getUtfString("sender");
          var itemTemplate = null;
          itemTemplate = sender == Windown_1.Windown.User.nickName ? this.getItemMe() : this.getItemOther();
          itemTemplate.active = true;
          itemTemplate.parent = parentItem;
          itemTemplate.getComponent(ItemChat_1.default).initItem(sfsObj);
        }
        setTimeout(function() {
          _this.scrChat.scrollToBottom(.3, true);
        }, 1e3);
        if (this.isNeedHelp) {
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putUtfString("adminName", this.lbNameAdmin.string);
          SFSObject.putUtfString("info", TextDefine_1.TextDefine.DefaultMessageAdmin);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SendMessageToAdmin, SFSObject);
        }
        Windown_1.Windown.ChatAdminController.itemIconChat.emitNewCountNotReadByAdmin(this.lbNameAdmin.string);
      };
      WindownChat.prototype.addMessage = function(SFSObject) {
        var _this = this;
        if (this.node.parent) {
          var sender = SFSObject.getUtfString("sender");
          var itemTemplate = null;
          cc.log(sender);
          cc.log(Windown_1.Windown.User.nickName);
          itemTemplate = sender == Windown_1.Windown.User.nickName ? this.getItemMe() : this.getItemOther();
          itemTemplate.active = true;
          itemTemplate.parent = this.scrChat.content;
          itemTemplate.getComponent(ItemChat_1.default).initItem(SFSObject);
          setTimeout(function() {
            _this.scrChat.scrollToBottom(.3, true);
          }, 500);
        }
        this.sfsArry.addSFSObject(SFSObject);
      };
      WindownChat.prototype.updateStatusAdmin = function(isOnline) {
        var lb = this.nodeStatus.getComponentInChildren(cc.Label);
        var dot = this.nodeStatus.children[0];
        if (isOnline) {
          lb.string = "tr\u1ef1c tuy\u1ebfn";
          dot.color = cc.Color.GREEN;
        } else {
          lb.string = "ngo\u1ea1i tuy\u1ebfn";
          dot.color = cc.Color.RED;
        }
      };
      WindownChat.prototype.onClickTaiImg = function() {
        Util_1.Util.onGetImgInLibaryChat();
      };
      WindownChat.prototype.onClickSend = function() {
        var str = this.edbMess.string.trim();
        if (str.length < 1) return;
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putUtfString("info", str);
        sfsObj.putUtfString("adminName", this.lbNameAdmin.string);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.SendMessageToAdmin, sfsObj);
        this.edbMess.string = "";
      };
      WindownChat.prototype.getItemMe = function() {
        var node = this.poolItemChatMe.get();
        null == node && (node = cc.instantiate(this.itemTemplateMe));
        return node;
      };
      WindownChat.prototype.getItemOther = function() {
        var node = this.poolItemChatOther.get();
        null == node && (node = cc.instantiate(this.itemTemplateOther));
        return node;
      };
      __decorate([ property(cc.Label) ], WindownChat.prototype, "lbNameAdmin", void 0);
      __decorate([ property(cc.ScrollView) ], WindownChat.prototype, "scrChat", void 0);
      __decorate([ property(cc.Node) ], WindownChat.prototype, "nodeStatus", void 0);
      __decorate([ property(cc.EditBox) ], WindownChat.prototype, "edbMess", void 0);
      __decorate([ property(cc.Node) ], WindownChat.prototype, "itemTemplateOther", void 0);
      __decorate([ property(cc.Node) ], WindownChat.prototype, "itemTemplateMe", void 0);
      WindownChat = __decorate([ ccclass ], WindownChat);
      return WindownChat;
    }(BaseEditbox_1.default);
    exports.default = WindownChat;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Util": "Util",
    "../../Windown": "Windown",
    "./ItemChat": "ItemChat"
  } ],
  Windown: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      cc._RF.push(module, "70fbfvU6xtMqozUP9dWV/S/", "Windown");
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
      exports.Windown = void 0;
      var ConectManager_1 = require("./Network/ConectManager");
      var PathResource_1 = require("./DefineTs/PathResource");
      var Util_1 = require("./Util");
      var BUNDLE_1 = require("./DefineTs/BUNDLE");
      var OSDefine_1 = require("./DefineTs/OSDefine");
      var HomThuController_1 = require("./Popup/HomThu/HomThuController");
      var NhiemVuConTroller_1 = require("./Popup/NhiemVu/NhiemVuConTroller");
      var InfoERR_1 = require("./InfoERR");
      var ChatAdminController_1 = require("./Popup/ChatAdmin/ChatAdminController");
      var GAME_TYPE_1 = require("./Game/GAME_TYPE");
      var BigWinLobby_1 = require("./Popup/BigWinLobby/BigWinLobby");
      var objLevel = {
        1: {
          LevelId: 0,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1 ],
            GunType2: [],
            IdGunUnlock: 10
          } ],
          IsCashout: true
        },
        2: {
          LevelId: 1,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2 ],
            GunType2: [],
            IdGunUnlock: 50
          } ],
          IsCashout: true
        },
        3: {
          LevelId: 2,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3 ],
            GunType2: [],
            IdGunUnlock: 100
          } ],
          IsCashout: true
        },
        4: {
          LevelId: 3,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4 ],
            GunType2: [],
            IdGunUnlock: 200
          } ],
          IsCashout: true
        },
        5: {
          LevelId: 4,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5 ],
            GunType2: [],
            IdGunUnlock: 300
          } ],
          IsCashout: true
        },
        6: {
          LevelId: 5,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6 ],
            GunType2: [],
            IdGunUnlock: 500
          } ],
          IsCashout: true
        },
        7: {
          LevelId: 6,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7 ],
            GunType2: [],
            IdGunUnlock: 1e3
          } ],
          IsCashout: true
        },
        8: {
          LevelId: 7,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
            GunType2: [],
            IdGunUnlock: 2e3
          } ],
          IsCashout: true
        },
        9: {
          LevelId: 8,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
            GunType2: [],
            IdGunUnlock: 3e3
          } ],
          IsCashout: true
        },
        10: {
          LevelId: 9,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            GunType2: [],
            IdGunUnlock: 5e3
          } ],
          IsCashout: true
        },
        11: {
          LevelId: 10,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 0 ],
            GunType2: [],
            IdGunUnlock: 1e4
          } ],
          IsCashout: true
        },
        12: {
          LevelId: 11,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 0 ],
            GunType2: [],
            IdGunUnlock: 0
          } ],
          IsCashout: true
        },
        13: {
          LevelId: 12,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 0 ],
            GunType2: [],
            IdGunUnlock: 0
          } ],
          IsCashout: true
        },
        14: {
          LevelId: 13,
          GameUnlock: null,
          IsCashout: true
        }
      };
      var Windown = function() {
        function Windown() {}
        Windown.init = function() {
          Windown.HomThuController = new HomThuController_1.default();
          Windown.NhiemVuConTroller = new NhiemVuConTroller_1.default();
          Windown.ChatAdminController = new ChatAdminController_1.ChatAdminController();
          Windown.BigWinLobby = new BigWinLobby_1.default();
        };
        Windown.initUser = function(Object) {
          this.SFSInfouser = Object;
          var base64Ava = this.SFSInfouser.get("base64Ava");
          base64Ava && ("" != base64Ava && "null" != base64Ava || this.SFSInfouser.putNull("base64Ava"));
          this.User.isLogin = true;
          this.User.userName = Object.getUtfString("username");
          this.User.userAg = Object.getLong("ag");
          this.MoneyUser.moneyCache = this.User.userAg;
          this.User.nickName = Object.getUtfString("nickname");
          this.User.userId = Object.getInt("id");
          this.User.phoneNumber = Object.getUtfString("phonenumber");
          this.User.avatrId = Object.getInt("idava");
          this.User.typeAvarta = Object.getInt("typeava");
          this.User.status = Object.getUtfString("status");
          this.User.currentLevel = Object.getInt("currentlevel");
          this.User.totalLevelPoint = Object.getInt("totallevelpoint");
          this.User.currentLevelPoint = Object.getInt("currentlevelpoint");
          this.User.currentVipPoint = Object.getInt("currentvippoint");
          this.User.tokenFacebook = Object.getUtfString("tokenfacebook");
          this.User.isPlayNow = Object.getBool("isPlayNow");
          this.User.isFirtLogin = Object.getBool("isFirtLogin");
          this.MoneyUser.emitNewMonney();
        };
        Windown.disconect = function() {
          cc.log("disconnect windown");
          this.SFSInfouser = null;
          this.User = {
            userName: "",
            nickName: "",
            userAg: 0,
            userId: 0,
            email: "",
            phoneNumber: "",
            numMailNotRead: 0,
            isLogin: false,
            currentGameId: 0,
            currentRoomId: 0,
            currentRoomType: 0,
            status: "",
            typeAvarta: 0,
            avatrId: -1,
            currentLevel: 0,
            currentLevelPoint: 0,
            totalLevelPoint: 0,
            currentVipPoint: 0,
            tokenFacebook: "",
            isPlayNow: false,
            isFirtNap: false,
            isAutoFish: false,
            isGunSet: false,
            isFirtLogin: false
          };
        };
        Windown.restartGame = function() {
          cc.sys.isNative ? cc.sys.os == cc.sys.OS_WINDOWS && true ? jsb.resetGame() : cc.game.restart() : cc.sys.isMobile ? cc.game.restart() : (Windown.BotController, 
          window.location = window.location);
        };
        Windown.getConfigLevel = function() {
          var obj = objLevel[14];
          var currentLevel = Windown.User.currentLevel;
          for (var temp in objLevel) if (Number.parseInt(temp) == currentLevel) {
            obj = objLevel[temp];
            break;
          }
          return obj;
        };
        Windown.getUnLockGunLevelUp = function() {
          var objLevel = this.getConfigLevel();
          var list = objLevel.GameUnlock;
          if (list) for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var temp = list_1[_i];
            if (temp.GameId == GAME_TYPE_1.default.BongDem) {
              var listRoom1 = temp.GunType1;
              var listRoom2 = temp.GunType2;
              var idGunUnlock = temp.IdGunUnlock;
              if (0 == idGunUnlock) return null;
              if (listRoom2.length > 0) return idGunUnlock;
              if (listRoom1.length > 0) return idGunUnlock;
              return null;
            }
          }
          return null;
        };
        Windown.convertNodeInOtherNode = function(node, otherNode) {
          var worldPos = node.parent.convertToWorldSpaceAR(node.getPosition());
          var viewPos = otherNode.convertToNodeSpaceAR(worldPos);
          return viewPos;
        };
        Windown.convertPosInOtherNode = function(vec, parent, otherNode) {
          var worldPos = parent.convertToWorldSpaceAR(vec);
          var viewPos = otherNode.convertToNodeSpaceAR(worldPos);
          return viewPos;
        };
        Windown.getLevelCashOut = function() {
          for (var temp in objLevel) if (objLevel[temp].IsCashout) return Number.parseInt(temp);
          return 0;
        };
        Windown.initConfig = function() {
          var list = [ {
            Description: "S\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\xf3ng b\u0103ng c\xe1 trong 10 gi\xe2y",
            ItemName: "\u0110\xf3ng B\u0103ng",
            ItemId: 1,
            Duration: 10
          }, {
            Description: "S\u1eed d\u1ee5ng \u0111\u1ec3 t\u0103ng t\u1ed1c \u0111\u1ed9 b\u1eafn s\xfang trong 15 gi\xe2y",
            ItemName: "T\u0103ng t\u1ed1c",
            ItemId: 2,
            Duration: 15
          }, {
            Description: "S\u1eed d\u1ee5ng \u0111\u1ec3 x\xe1c \u0111\u1ecbnh m\u1ee5c ti\xeau trong 15 gi\xe2y",
            ItemName: "M\u1ee5c Ti\xeau",
            ItemId: 3,
            Duration: 15
          }, {
            Description: "Tri\u1ec7u h\u1ed3i c\xe1 \u0111\u1eb7c bi\u1ec7t(khi c\xe1 \u0111\u1eb7c bi\u1ec7t b\u1ecb ti\xeau di\u1ec7t s\u1ebd ng\u1eabu nhi\xean nh\u1eadn \u0111\u01b0\u1ee3c v\u1eadt ph\u1ea9m nh\u01b0 BOOM,M\u1eaft Th\u1ea7n, v.v.. )",
            ItemName: "Tri\u1ec7u H\u1ed3i",
            ItemId: 4,
            Duration: .2
          }, {
            Description: "S\u1eed d\u1ee5ng BOOM Nguy\xean T\u1eed \u0111\u1ec3 ti\xeau di\u1ec7t c\xe1 nh\u1eadn t\u1eeb 50.000 - 150.000 v\xe0ng",
            ItemName: "BOOM Nguy\xean T\u1eed",
            ItemId: 100,
            Duration: 0
          }, {
            Description: "Tri\u1ec7u h\u1ed3i M\u1eaeT TH\u1ea6N \u0111\u1ec3 ti\xeau di\u1ec7t c\xe1 nh\u1eadn t\u1eeb 50.000 - 150.000 v\xe0ng",
            ItemName: "M\u1eaft Th\u1ea7n",
            ItemId: 101,
            Duration: 0
          }, {
            Description: "S\u1eed d\u1ee5ng \u0110INH BA \u0111\u1ec3 ti\xeau di\u1ec7t c\xe1 nh\u1eadn t\u1eeb 50.000 - 350.000 v\xe0ng",
            ItemName: "\u0110inh Ba",
            ItemId: 102,
            Duration: 0
          }, {
            Description: "S\xfang s\xe9t kh\xf3a m\u1ee5c ti\xeau, t\u0103ng t\u1ed1c \u0111\u1ed9 b\u1eafn 20%, c\xf3 t\u1ec9 l\u1ec7 l\xe0m cho\xe1ng c\xe1 1 gi\xe2y (th\xedch h\u1ee3p s\u0103n BOSS)",
            ItemName: "S\xfang S\xe9t",
            ItemId: 1e3,
            Duration: 0
          }, {
            Description: "T\u1ef1 \u0111\u1ed9ng ch\u1ecdn c\xe1 m\u1ee5c ti\xeau v\xe0 b\u1eafn",
            ItemName: "Auto B\u1eafn",
            ItemId: 1001,
            Duration: 0
          } ];
          this.listConfigItem = list;
        };
        Windown.initGameConfig = function(strConfig) {
          var obj = JSON.parse(LZString.decompressFromBase64(strConfig));
          var info = JSON.parse(obj.info);
          Windown.LinkFanpage = info.Fanpage;
          Windown.LinkTele = info.Tele;
          Windown.LinkHotline = info.Hotline;
          Windown.LinkMessage = info.Mesenger;
          Windown.LinkVeryTele = info.VeryTele;
          Windown.LinkResetPass = info.ResetPass;
          Windown.LinkEventfanpage = info.EventFanpage;
        };
        Windown.test = function() {
          cc.log("test thanh con");
        };
        Windown.formatMoney = function(num, digits, maxNum) {
          void 0 === digits && (digits = 1);
          void 0 === maxNum && (maxNum = 1e4);
          if (num < 1e4) return num;
          if (num < maxNum) return this.formatNumber(num);
          var si = [ {
            value: 1,
            symbol: ""
          }, {
            value: 1e3,
            symbol: "k"
          }, {
            value: 1e6,
            symbol: "m"
          }, {
            value: 1e9,
            symbol: "b"
          }, {
            value: 1e12,
            symbol: "T"
          }, {
            value: 1e15,
            symbol: "P"
          }, {
            value: 1e18,
            symbol: "E"
          } ];
          var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
          var i;
          for (i = si.length - 1; i > 0; i--) if (num >= si[i].value) break;
          return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        };
        Windown.getFullTime = function(time) {
          var data = new Date(time);
          var ngay = data.getDate();
          ngay < 10 && (ngay = "0" + ngay);
          var thang = data.getMonth() + 1;
          thang < 10 && (thang = "0" + thang);
          var nam = data.getFullYear();
          var gio = data.getHours();
          gio < 10 && (gio = "0" + gio);
          var phut = data.getMinutes();
          phut < 10 && (phut = "0" + phut);
          var giay = data.getSeconds();
          giay < 10 && (giay = "0" + giay);
          return ngay + "/" + thang + "/" + nam + " " + gio + ":" + phut + ":" + giay;
        };
        Windown.getShortTime = function(time) {
          var data = new Date(time);
          var ngay = data.getDate();
          ngay < 10 && (ngay = "0" + ngay);
          var thang = data.getMonth() + 1;
          thang < 10 && (thang = "0" + thang);
          var gio = data.getHours();
          gio < 10 && (gio = "0" + gio);
          var phut = data.getMinutes();
          phut < 10 && (phut = "0" + phut);
          return ngay + "/" + thang + " " + gio + ":" + phut;
        };
        Windown.getSpFrameByBase64 = function(base64) {
          return new Promise(function(resolve, reject) {
            if (cc.sys.isNative) {
              var buffer = new Buffer(base64, "base64");
              var len = buffer.length;
              var bytes = new Uint8Array(len);
              for (var i = 0; i < len; i++) bytes[i] = buffer[i];
              var extName = ".jpg";
              var randomFileName = "base64" + Date.now() + extName;
              var dir_1 = "" + jsb.fileUtils.getWritablePath() + randomFileName;
              jsb.fileUtils.writeDataToFile(bytes, dir_1) && cc.assetManager.loadRemote(dir_1, function(err, texture) {
                if (err) {
                  reject(JSON.stringify(err));
                  return;
                }
                !err && texture && resolve(new cc.SpriteFrame(texture));
                jsb.fileUtils.removeFile(dir_1);
              });
            } else {
              var src = "data:image/png;base64," + base64;
              var imgElement = new Image();
              imgElement.src = src;
              setTimeout(function() {
                var sprite = new cc.Texture2D();
                sprite.initWithElement(imgElement);
                resolve(new cc.SpriteFrame(sprite));
              }, 10);
            }
          });
        };
        Windown.arrayBufferToString = function(array) {
          var out, i, len, c;
          var char2, char3;
          out = "";
          len = array.length;
          i = 0;
          while (i < len) {
            c = array[i++];
            switch (c >> 4) {
             case 0:
             case 1:
             case 2:
             case 3:
             case 4:
             case 5:
             case 6:
             case 7:
              out += String.fromCharCode(c);
              break;

             case 12:
             case 13:
              char2 = array[i++];
              out += String.fromCharCode((31 & c) << 6 | 63 & char2);
              break;

             case 14:
              char2 = array[i++];
              char3 = array[i++];
              out += String.fromCharCode((15 & c) << 12 | (63 & char2) << 6 | (63 & char3) << 0);
            }
          }
          return out;
        };
        Windown.getSpByFb = function(idFb, token) {
          var url = "https://graph.facebook.com/%s/picture?type=large&width=200&height=200".formatString(idFb);
          cc.log(url);
          return new Promise(function(resolve, reject) {
            cc.assetManager.loadRemote(url, {
              ext: ".png"
            }, function(err, img) {
              if (err) {
                reject(err);
                return;
              }
              resolve(new cc.SpriteFrame(img));
            });
          });
        };
        Windown.getSpByURL = function(url) {
          cc.log(url);
          return new Promise(function(resolve, reject) {
            cc.assetManager.loadRemote(url, {}, function(err, img) {
              if (err) {
                reject(err);
                return;
              }
              resolve(new cc.SpriteFrame(img));
            });
          });
        };
        Windown.getSpFrameRes = function(spriteFrameUrl) {
          return Windown.loadRes(BUNDLE_1.BUNDLE.Main, spriteFrameUrl, cc.SpriteFrame);
        };
        Windown.getPrefabRes = function(preUrl) {
          return Windown.loadRes(BUNDLE_1.BUNDLE.Main, preUrl, cc.Prefab);
        };
        Windown.loadRes = function(bundleName, url, type, funProgress) {
          return new Promise(function(resolve, reject) {
            bundleName == BUNDLE_1.BUNDLE.Main ? cc.loader.loadRes(url, type, function(count, total) {
              funProgress && funProgress(count, total);
            }, function(error, pre) {
              if (null != error) {
                true;
                cc.error("load (" + url + ") failed!");
                cc.error(error);
                reject(error);
                return;
              }
              resolve(pre);
            }) : cc.assetManager.loadBundle(bundleName, function(err, bundle) {
              if (!Windown.getClaseByBundle(bundleName)) {
                reject(new InfoERR_1.InfoErr("Null Component"));
                return;
              }
              if (err) {
                reject(err);
                return;
              }
              bundle.load(url, type, function(count, total) {
                funProgress && funProgress(count, total);
              }, function(err2, res) {
                if (err2) {
                  reject(err2);
                  return;
                }
                resolve(res);
              });
            });
          });
        };
        Windown.getClaseByBundle = function(bundleName) {
          switch (bundleName) {
           case GAME_TYPE_1.default.BongDem.toString():
            if (Windown.FishBongDem && Windown.FishBongDem.fishBDView) return true;
            return false;

           case GAME_TYPE_1.default.DieuThuyen.toString():
            return Windown.DieuThuyen;

           case GAME_TYPE_1.default.NgoKhong.toString():
            return Windown.NgoKhong;

           case GAME_TYPE_1.default.Neko.toString():
            return Windown.Neko;

           case GAME_TYPE_1.default.TaiXiu.toString():
            return true;
          }
          return null;
        };
        Windown.loadBundle = function(bundleName) {
          return new Promise(function(resolve, reject) {
            cc.assetManager.loadBundle(bundleName, function(err, bundle) {
              if (err) {
                reject(err);
                return null;
              }
              resolve(bundle);
            });
          });
        };
        Windown.getMD5 = function(string) {
          return ConectManager_1.ConectManager.getIns().getMD5(string);
        };
        Windown.coppyToClip = function(text) {
          if (cc.sys.isNative) Util_1.Util.onCoppyToClip(text); else {
            if (!navigator.clipboard) {
              var textArea = document.createElement("textarea");
              textArea.value = text;
              textArea.style.top = "0";
              textArea.style.left = "0";
              textArea.style.position = "fixed";
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                var successful = document.execCommand("copy");
                successful ? Windown.UIManager.showAlertMini("\u0110\xe3 Sao Ch\xe9p") : Windown.UIManager.showAlertMini("Kh\xf4ng Th\u1ec3 Sao Ch\xe9p");
              } catch (err) {
                Windown.UIManager.showAlertMini("Kh\xf4ng Th\u1ec3 Sao Ch\xe9p ");
              }
              document.body.removeChild(textArea);
              return;
            }
            navigator.clipboard.writeText(text).then(function() {
              Windown.UIManager.showAlertMini("\u0110\xe3 Sao Ch\xe9p");
            }, function(err) {
              Windown.UIManager.showAlertMini("Kh\xf4ng Th\u1ec3 Sao Ch\xe9p");
            });
          }
        };
        Windown.formatDate = function(date, format, utc) {
          var MMMM = [ "\0", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
          var MMM = [ "\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
          var dddd = [ "\x02", "Ch\u1ee7 nh\u1eadt", "Th\u1ee9 2", "Th\u1ee9 3", "Th\u1ee9 4", "Th\u1ee9 5", "Th\u1ee9 6", "Th\u1ee9 7" ];
          var ddd = [ "\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
          var ii = function(i, len) {
            var s = i + "";
            len = len || 2;
            while (s.length < len) s = "0" + s;
            return s;
          };
          var y = utc ? date.getUTCFullYear() : date.getFullYear();
          format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
          format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
          format = format.replace(/(^|[^\\])y/g, "$1" + y);
          var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
          format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
          format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
          format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
          format = format.replace(/(^|[^\\])M/g, "$1" + M);
          var d = utc ? date.getUTCDate() : date.getDate();
          format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
          format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
          format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
          format = format.replace(/(^|[^\\])d/g, "$1" + d);
          var H = utc ? date.getUTCHours() : date.getHours();
          format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
          format = format.replace(/(^|[^\\])H/g, "$1" + H);
          var h = H > 12 ? H - 12 : 0 == H ? 12 : H;
          format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
          format = format.replace(/(^|[^\\])h/g, "$1" + h);
          var m = utc ? date.getUTCMinutes() : date.getMinutes();
          format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
          format = format.replace(/(^|[^\\])m/g, "$1" + m);
          var s = utc ? date.getUTCSeconds() : date.getSeconds();
          format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
          format = format.replace(/(^|[^\\])s/g, "$1" + s);
          var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
          format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
          f = Math.round(f / 10);
          format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
          f = Math.round(f / 10);
          format = format.replace(/(^|[^\\])f/g, "$1" + f);
          var T = H < 12 ? "AM" : "PM";
          format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
          format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
          var t = T.toLowerCase();
          format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
          format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
          var tz = -date.getTimezoneOffset();
          var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
          if (!utc) {
            tz = Math.abs(tz);
            var tzHrs = Math.floor(tz / 60);
            var tzMin = tz % 60;
            K += ii(tzHrs) + ":" + ii(tzMin);
          }
          format = format.replace(/(^|[^\\])K/g, "$1" + K);
          var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
          format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
          format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
          format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
          format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
          format = format.replace(/\\(.)/g, "$1");
          return format;
        };
        Windown.formatTimeBySec = function(time, houre) {
          void 0 === houre && (houre = true);
          time = parseInt(time);
          if (houre) {
            if (time <= 0) return "00:00:00";
            var hourse = parseInt(time / 3600);
            hourse > 0 && (time -= 3600 * hourse);
            var min = parseInt(time / 60);
            min > 0 && (time -= 60 * min);
            var sec = time % 60;
            hourse < 10 && (hourse = "0" + hourse);
            min < 10 && (min = "0" + min);
            sec < 10 && (sec = "0" + sec);
            return hourse + ":" + min + ":" + sec;
          }
          if (time <= 0) return "00:00";
          var hourse = parseInt(time / 3600);
          hourse > 0 && (time -= 3600 * hourse);
          var min = parseInt(time / 60);
          min > 0 && (time -= 60 * min);
          var sec = time % 60;
          hourse < 10 && (hourse = "0" + hourse);
          min < 10 && (min = "0" + min);
          sec < 10 && (sec = "0" + sec);
          return min + ":" + sec;
        };
        Windown.setLocalStorage = function(key, value) {
          "string" != typeof value && (value += "");
          value = XXTEA.encryptToBase64(value, Windown.keyEncrytps);
          cc.sys.localStorage.setItem(key + Windown.NAME_GAME, value);
        };
        Windown.getLocalStorage = function(key) {
          var value = cc.sys.localStorage.getItem(key + Windown.NAME_GAME);
          if (void 0 == value || null == value || "" == value || "null" == value) return null;
          return XXTEA.decryptFromBase64(value, Windown.keyEncrytps);
        };
        Windown.updateAvatar = function(Object, sprite) {
          return __awaiter(this, void 0, void 0, function() {
            var typeAvarta, spFrame, idava, str, token, idFb, byte;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (sprite.spriteFrame && cc.path.basename(sprite.spriteFrame.getTexture().nativeUrl).indexOf("base64", 0) - -1) {
                  cc.assetManager.releaseAsset(sprite.spriteFrame.getTexture());
                  cc.assetManager.releaseAsset(sprite.spriteFrame);
                  sprite.spriteFrame = null;
                }
                typeAvarta = Object.getInt("typeava");
                spFrame = null;
                if (!(0 == typeAvarta)) return [ 3, 2 ];
                idava = Object.getInt("idava");
                str = PathResource_1.PathResource.Avatar.replace("%d", idava);
                return [ 4, Windown.getSpFrameRes(str) ];

               case 1:
                spFrame = _a.sent();
                return [ 3, 6 ];

               case 2:
                if (!(1 == typeAvarta)) return [ 3, 4 ];
                token = Object.get("tokenfacebook");
                idFb = Object.get("userFbId");
                return [ 4, Windown.getSpByFb(idFb, token) ];

               case 3:
                spFrame = _a.sent();
                return [ 3, 6 ];

               case 4:
                if (!(2 == typeAvarta)) return [ 3, 6 ];
                byte = Object.get("base64Ava");
                return [ 4, Windown.getSpFrameByBase64(byte) ];

               case 5:
                spFrame = _a.sent();
                _a.label = 6;

               case 6:
                null != spFrame && sprite && sprite.node && (sprite.spriteFrame = spFrame);
                return [ 2 ];
              }
            });
          });
        };
        Windown.getDeviceID = function() {
          if (!cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID && cc.sys.os != cc.sys.OS_IOS) {
            var uudi = Windown.getLocalStorage("uuid");
            if (uudi) return uudi;
            var d = new Date().getTime();
            var uuidN = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
              var r = (d + 16 * Math.random()) % 16 | 0;
              d = Math.floor(d / 16);
              return ("x" == c ? r : 3 & r | 8).toString(16);
            });
            Windown.setLocalStorage("uuid", uuidN);
            Windown.UIManager.hideLoading();
            return uuidN;
          }
          if (null == Windown.deviceId) {
            Windown.UIManager.showLoading();
            sdkbox.PluginOneSignal.idsAvailable();
          }
          return Windown.deviceId;
        };
        Windown.getOS = function() {
          if (!cc.sys.isNative) return cc.sys.isMobile ? OSDefine_1.default.WEB_MOBILE : OSDefine_1.default.WEB_PC;
          switch (cc.sys.os) {
           case cc.sys.OS_ANDROID:
            return OSDefine_1.default.ANDROID;

           case cc.sys.OS_IOS:
            return OSDefine_1.default.IOS;
          }
          return OSDefine_1.default.OTHER;
        };
        Windown.getDeviceName = function() {
          if (cc.sys.isNative) {
            var nameDevice = jsb.Device.getDeviceModel();
            null != nameDevice && "" != nameDevice || (nameDevice = "NULL DEVICE NATIVE");
            return nameDevice;
          }
          if (navigator) return navigator.userAgent;
          return "WEB kh\xf4ng x\xe1c \u0111\u1ecbnh";
        };
        Windown.scaleBase64 = function(base64) {
          var baseNew = "";
          cc.sys.isBrowser;
          return baseNew;
        };
        Windown.SFSObjToJson = function(obj) {
          return JSON.stringify(Windown.SFSObjToObj(obj));
        };
        Windown.SFSArrToJson = function(obj) {
          return JSON.stringify(Windown.SFSArrToArr(obj));
        };
        Windown.stringToByteArray = function(s) {
          var result = new Uint8Array(s.length);
          for (var i = 0; i < s.length; i++) result[i] = s.charCodeAt(i);
          return result;
        };
        Windown.getNameGameByType = function(gameType) {
          switch (gameType) {
           case GAME_TYPE_1.default.CaMap:
            return "C\xe1 R\u1ed3ng";

           case GAME_TYPE_1.default.TruTien:
            return "Tru Ti\xean";

           case GAME_TYPE_1.default.Xeng:
            return "M\xe1y X\xe8ng";

           case GAME_TYPE_1.default.DieuThuyen:
            return "Di\xeau Thuy\u1ec1n";

           case GAME_TYPE_1.default.NgoKhong:
            return "Ng\u1ed9 Kh\xf4ng";
          }
        };
        Windown.foreachSFSArray = function(arr, fun) {
          for (var i = 0, l = arr.size(); i < l; i++) fun(arr.get(i), i);
        };
        Windown.SFSObjToObj = function(obj) {
          var objTemp = Object.create(null);
          var arrKeys = obj.getKeysArray();
          arrKeys.forEach(function(key) {
            18 == obj["getWrappedItem"](key).type ? objTemp[key.toString()] = Windown.SFSObjToObj(obj.getSFSObject(key)) : 17 == obj["getWrappedItem"](key).type ? objTemp[key.toString()] = Windown.SFSArrToArr(obj.getSFSArray(key)) : objTemp[key.toString()] = obj["getWrappedItem"](key).value;
          });
          return objTemp;
        };
        Windown.SFSArrToArr = function(obj) {
          var arr = [];
          for (var i = 0, l = obj.size(); i < l; i++) 18 == obj["_dataHolder"][i].type ? arr.push(Windown.SFSObjToObj(obj.getSFSObject(i))) : 17 == obj["_dataHolder"][i].type ? arr.push(Windown.SFSArrToArr(obj.getSFSArray(i))) : arr.push(obj["_dataHolder"][i].value);
          return arr;
        };
        Windown.LagValue = 0;
        Windown.DangNhap = null;
        Windown.UIManager = null;
        Windown.Dialog = null;
        Windown.MainView = null;
        Windown.CapchaController = null;
        Windown.DangKy = null;
        Windown.CapNhatTaiKhoan = null;
        Windown.MoneyUser = null;
        Windown.Firebase = null;
        Windown.SuKien = null;
        Windown.ImgChat = null;
        Windown.NhiemVuConTroller = null;
        Windown.BigWinLobby = null;
        Windown.HomThuController = null;
        Windown.ChatAdminController = null;
        Windown.ThongTin = null;
        Windown.DoiAva = null;
        Windown.DoiThangThai = null;
        Windown.AudioManager = null;
        Windown.CaiDat = null;
        Windown.TietKiem = null;
        Windown.TuiDo = null;
        Windown.CuaHang = null;
        Windown.HoTro = null;
        Windown.TangCap = null;
        Windown.ShopView = null;
        Windown.XepHang = null;
        Windown.JackpotManager = null;
        Windown.CropImgAva = null;
        Windown.LichSuGiaoDich = null;
        Windown.ReviceItem = null;
        Windown.BonusNap = null;
        Windown.QuickShop = null;
        Windown.TruTien = null;
        Windown.DieuThuyen = null;
        Windown.NgoKhong = null;
        Windown.Neko = null;
        Windown.TaiXiu = null;
        Windown.BtnMiniGame = null;
        Windown.BotController = null;
        Windown.XengController = null;
        Windown.FishBongDem = null;
        Windown.isFirtConnect = true;
        Windown.isClickBtnLogout = false;
        Windown.EDBController = null;
        Windown.keyEncrytps = "lvdlatao";
        Windown.SFSGameConfig = null;
        Windown.NAME_GAME = "CA_XENG_1";
        Windown.ONESIGNAL_MAIL = 1;
        Windown.ONESIGNAL_GIFT_CODE = 2;
        Windown.ONESIGNAL_SU_KIEN = 3;
        Windown.LinkFanpage = null;
        Windown.LinkTele = null;
        Windown.LinkMessage = null;
        Windown.LinkHotline = null;
        Windown.LinkVeryTele = null;
        Windown.LinkResetPass = null;
        Windown.LinkEventfanpage = null;
        Windown.linkBundle = "%sBundle/%n/";
        Windown.linkFull = "%sFull/";
        Windown.linkConfig = "%sConfigBundle.txt";
        Windown.verChildGame = {
          31: "1.0.1",
          1: "1.0.1"
        };
        Windown.LIST_REMOVE_BUNDLE_GAME = {};
        Windown.LIST_VERSION_REMOVE = [];
        Windown.NotiNoHu = null;
        Windown.IsSafe = false;
        Windown.IsSafeNative = "-1";
        Windown.User = {
          nickName: "",
          userName: "",
          userAg: 0,
          userId: 0,
          email: "",
          phoneNumber: "",
          numMailNotRead: 0,
          isLogin: false,
          currentGameId: 0,
          currentRoomType: 0,
          currentRoomId: 0,
          status: "",
          typeAvarta: 0,
          avatrId: -1,
          currentLevel: 0,
          currentLevelPoint: 0,
          totalLevelPoint: 0,
          currentVipPoint: 0,
          tokenFacebook: "",
          isPlayNow: false,
          isFirtNap: false,
          isAutoFish: false,
          isGunSet: false,
          isFirtLogin: false
        };
        Windown.SFSInfouser = null;
        Windown.listCacheGun = null;
        Windown.listConfigItem = null;
        Windown.deviceId = null;
        Windown.Define = {
          configNetwork: {
            hostHttps: "207.148.90.121",
            hostHttpsTest: "caxeng.me",
            portWebServer: 8080,
            portWebSServer: 8080,
            portSocket: 9933,
            zoneLogin: "Fish"
          },
          EVENTRESPONSE: {}
        };
        Windown.GAME_ID = {
          BAUCUA: "BauCua",
          XOCDIA: "XocDia",
          FISH_CA_MAP: "CaMap"
        };
        Windown.GAME_TYPE = {
          FISH_CA_MAP: 31,
          XENG: 1
        };
        Windown.RandomNumber = function(min_value, max_value) {
          var random_number = Math.random() * (max_value - min_value) + min_value;
          return Math.floor(random_number);
        };
        Windown.actionEffectOpen = function(node, func) {
          void 0 === func && (func = null);
          node.active = true;
          node.stopActionByTag(123456);
          node.scale = .7;
          node.opacity = 0;
          var action1 = cc.fadeIn(.25);
          var action2 = cc.scaleTo(.3, 1).easing(cc.easeBackOut());
          var action3 = cc.spawn(action1, action2);
          var action = cc.sequence(action3, cc.callFunc(func));
          action.setTag(123456);
          node.runAction(action);
        };
        Windown.actionEffectClose = function(node, func) {
          node.stopActionByTag(123456);
          var action1 = cc.fadeOut(.28);
          var action2 = cc.scaleTo(.3, .7).easing(cc.easeBackIn());
          var action3 = cc.spawn(action1, action2);
          var funCall = cc.callFunc(function() {
            node.opacity = 255;
            node.scale = 1;
          });
          var action = cc.sequence(action3, cc.callFunc(function() {}), funCall, cc.callFunc(func));
          action.setTag(123456);
          node.runAction(action);
        };
        Windown.formatNumber = function(number, isDot) {
          void 0 === isDot && (isDot = true);
          return isDot ? number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        };
        Windown.getResultBuyId = function(id) {
          id = parseInt(id);
          var listReturn = [ [ 5, 19 ], [ 15, 17 ], [ 2, 3 ], [ 21, 22 ], [ 7, 9 ], [ 10, 11 ], [ 13, 14 ], [ 23, 1 ] ];
          for (var i = 0, l = listReturn.length; i < l; i++) if (listReturn[i].includes(id)) return i;
        };
        Windown.shuffle = function(a) {
          var j, x, i;
          for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
          }
          return a;
        };
        return Windown;
      }();
      exports.Windown = Windown;
      cc._RF.pop();
    }).call(this, require("buffer").Buffer);
  }, {
    "./DefineTs/BUNDLE": "BUNDLE",
    "./DefineTs/OSDefine": "OSDefine",
    "./DefineTs/PathResource": "PathResource",
    "./Game/GAME_TYPE": "GAME_TYPE",
    "./InfoERR": "InfoERR",
    "./Network/ConectManager": "ConectManager",
    "./Popup/BigWinLobby/BigWinLobby": "BigWinLobby",
    "./Popup/ChatAdmin/ChatAdminController": "ChatAdminController",
    "./Popup/HomThu/HomThuController": "HomThuController",
    "./Popup/NhiemVu/NhiemVuConTroller": "NhiemVuConTroller",
    "./Util": "Util",
    buffer: 2
  } ],
  XacThucTele: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc964Mga3FD45fieLdNZ7EN", "XacThucTele");
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
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeDialog = null;
        _this.isShowNext = false;
        return _this;
      }
      NewClass.prototype.show = function(isShowNext) {
        this.isShowNext = isShowNext;
      };
      NewClass.prototype.onClickXacNhan = function() {
        cc.sys.openURL(Windown_1.Windown.LinkVeryTele + window.btoa(Windown_1.Windown.User.userId.toString()));
        this.onClickClose();
      };
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.isShowNext && Windown_1.Windown.UIManager.showFunFirtLogin();
          _this.node.destroy();
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeDialog", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  XepHang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66259x1QuRCu5ZRQOsd2EgQ", "XepHang");
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
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var LichSuTraoThuong_1 = require("./LichSuTraoThuong");
    var TopThang_1 = require("./TopThang");
    var TopTuan_1 = require("./TopTuan");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var XepHang = function(_super) {
      __extends(XepHang, _super);
      function XepHang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TopTuan = null;
        _this.TopThang = null;
        _this.LichSuTraoThuong = null;
        _this.toggleTuan = null;
        _this.dataWeek = null;
        _this.dataMonth = null;
        return _this;
      }
      XepHang.prototype.onLoad = function() {
        Windown_1.Windown.XepHang = this;
      };
      XepHang.prototype.onDestroy = function() {
        Windown_1.Windown.XepHang = null;
      };
      XepHang.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
        this.TopTuan.reset();
        this.TopThang.reset();
        this.toggleTuan.check();
        this.TopThang.node.active = false;
        this.TopTuan.node.active = true;
        this.LichSuTraoThuong.node.active = false;
        this.TopTuan.node.parent.active = true;
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetRankWeek, null, this.responseServerWeek.bind(this));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetRankMonth, null, this.responseServerMonth.bind(this));
      };
      XepHang.prototype.responseServerWeek = function(obj) {
        Windown_1.Windown.Dialog.checkAndShowLog(obj, false);
        this.dataWeek = obj;
        this.TopTuan.emitNewData();
        Windown_1.Windown.UIManager.hideLoading();
      };
      XepHang.prototype.responseServerMonth = function(obj) {
        Windown_1.Windown.Dialog.checkAndShowLog(obj, false);
        this.dataMonth = obj;
      };
      XepHang.prototype.onToggle = function(event, data) {
        if ("toggleTuan" == event.node.name) {
          this.TopTuan.node.active = true;
          this.TopThang.node.active = false;
          this.TopTuan.emitNewData();
        } else if ("toggleThang" == event.node.name) {
          this.TopTuan.node.active = false;
          this.TopThang.node.active = true;
          this.TopThang.emitNewData();
        }
      };
      XepHang.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onCloseXepHang);
          _this.node.parent = null;
        });
      };
      XepHang.prototype.onClickLichSu = function() {
        this.TopTuan.node.parent.active = false;
        this.LichSuTraoThuong.show(0);
      };
      XepHang.prototype.onBackLichSu = function() {
        this.TopTuan.node.parent.active = true;
        this.LichSuTraoThuong.node.active = false;
      };
      __decorate([ property(TopTuan_1.default) ], XepHang.prototype, "TopTuan", void 0);
      __decorate([ property(TopThang_1.default) ], XepHang.prototype, "TopThang", void 0);
      __decorate([ property(LichSuTraoThuong_1.default) ], XepHang.prototype, "LichSuTraoThuong", void 0);
      __decorate([ property(cc.Toggle) ], XepHang.prototype, "toggleTuan", void 0);
      XepHang = __decorate([ ccclass ], XepHang);
      return XepHang;
    }(cc.Component);
    exports.default = XepHang;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./LichSuTraoThuong": "LichSuTraoThuong",
    "./TopThang": "TopThang",
    "./TopTuan": "TopTuan"
  } ],
  "mesh-texture-flag": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7955isD2pAy5KxbPkIzekN", "mesh-texture-flag");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var gfx = cc.gfx;
    cc.Class({
      extends: cc.Component,
      properties: {
        _offset: cc.v2(0, 0),
        offset: {
          get: function get() {
            return this._offset;
          },
          set: function set(value) {
            this._offset = value;
            this._applyVertexes();
          },
          type: cc.Vec2
        },
        _spriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        spriteFrame: {
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            this._spriteFrame = value;
            this._applySpriteFrame();
          },
          type: cc.SpriteFrame
        },
        _row: 10,
        row: {
          tooltip: "\u7f51\u683c\u884c\u6570",
          get: function get() {
            return this._row;
          },
          set: function set(value) {
            value <= 0 ? value = 1 : "";
            if (this._row !== value) {
              this._row = value;
              this._updateMesh();
              this._applyVertexes();
            }
          },
          min: 1,
          step: 1
        },
        _col: 20,
        col: {
          tooltip: "\u7f51\u683c\u5217\u6570",
          get: function get() {
            return this._col;
          },
          set: function set(value) {
            value <= 0 ? value = 1 : "";
            if (this._col !== value) {
              this._col = value;
              this._updateMesh();
              this._applyVertexes();
            }
          },
          min: 1,
          step: 1
        },
        _speed: 10,
        speed: {
          tooltip: "\u901f\u5ea6",
          get: function get() {
            return this._speed;
          },
          set: function set(value) {
            value <= 0 ? value = .1 : "";
            if (this._speed !== value) {
              this._speed = value;
              this._updateMaterial();
            }
          },
          min: .1,
          step: .1
        },
        _amplitude: 5,
        amplitude: {
          tooltip: "\u5e45\u5ea6",
          get: function get() {
            return this._amplitude;
          },
          set: function set(value) {
            value <= 0 ? value = .1 : "";
            if (this._amplitude !== value) {
              this._amplitude = value;
              this._updateMaterial();
            }
          },
          min: .1,
          step: 1
        },
        _wave: 5,
        wave: {
          tooltip: "\u6ce2\u6d6a",
          get: function get() {
            return this._wave;
          },
          set: function set(value) {
            value <= 0 ? value = 0 : "";
            if (this._wave !== value) {
              this._wave = value;
              this._updateMaterial();
            }
          },
          min: 0,
          step: 1
        },
        mat: cc.Material
      },
      onLoad: function onLoad() {
        var _this = this;
        this._meshCache = {};
        this._vertexes = [];
        var renderer = this.node.getComponent(cc.MeshRenderer);
        renderer || (renderer = this.node.addComponent(cc.MeshRenderer));
        renderer.mesh = null;
        this.renderer = renderer;
        var matt = cc.Material.create(this.mat.effectAsset, this.mat.techniqueIndex);
        this.renderer.setMaterial(0, this.mat);
        this._updateMaterial();
        this._updateMesh();
        this._applySpriteFrame();
        this._applyVertexes();
        this.node.on("size-changed", function() {
          _this._updateMesh();
          _this._applyVertexes();
        }, this);
        this.node.on("anchor-changed", function() {
          _this._updateMesh();
          _this._applyVertexes();
        }, this);
      },
      _updateMesh: function _updateMesh() {
        this._vertexes = [];
        var _width = this.node.width;
        var _height = this.node.height;
        for (var _row = 0; _row < this._row + 1; _row++) for (var _col = 0; _col < this._col + 1; _col++) {
          var x = (_col - this._col * this.node.anchorX) * _width / this._col;
          var y = (_row - this._row * this.node.anchorY) * _height / this._row;
          this._vertexes.push(cc.v2(x, y));
        }
        var mesh = this._meshCache[this._vertexes.length];
        if (!mesh) {
          mesh = new cc.Mesh();
          mesh.init(new gfx.VertexFormat([ {
            name: gfx.ATTR_POSITION,
            type: gfx.ATTR_TYPE_FLOAT32,
            num: 2
          }, {
            name: gfx.ATTR_UV0,
            type: gfx.ATTR_TYPE_FLOAT32,
            num: 2
          } ]), this._vertexes.length, true);
          this._meshCache[this._vertexes.length] = mesh;
        }
        this.mesh = mesh;
        this._updateMaterial();
      },
      _applyVertexes: function _applyVertexes() {
        var _this2 = this;
        var mesh = this.mesh;
        mesh.setVertices(gfx.ATTR_POSITION, this._vertexes);
        if (this.texture) {
          var uvs = [];
          for (var _iterator = _createForOfIteratorHelperLoose(this._vertexes), _step; !(_step = _iterator()).done; ) {
            var pt = _step.value;
            var u = (pt.x + this.texture.width * this.node.anchorX + this.offset.x) / this.texture.width;
            var v = 1 - (pt.y + this.texture.height * this.node.anchorY + this.offset.y) / this.texture.height;
            uvs.push(cc.v2(u, v));
          }
          mesh.setVertices(gfx.ATTR_UV0, uvs);
        }
        if (this._vertexes.length >= 3) {
          var ids = [];
          var getIndexByRowCol = function getIndexByRowCol(_row, _col) {
            return _row * (_this2._col + 1) + _col;
          };
          for (var _row = 0; _row < this._row; _row++) for (var _col = 0; _col < this._col; _col++) {
            ids.push(getIndexByRowCol(_row, _col), getIndexByRowCol(_row, _col + 1), getIndexByRowCol(_row + 1, _col));
            ids.push(getIndexByRowCol(_row + 1, _col), getIndexByRowCol(_row + 1, _col + 1), getIndexByRowCol(_row, _col + 1));
          }
          mesh.setIndices(ids);
          this.renderer.mesh != mesh && (this.renderer.mesh = mesh);
        }
      },
      _applySpriteFrame: function _applySpriteFrame() {
        if (this.spriteFrame) {
          var texture = this.spriteFrame.getTexture();
          this.texture = texture;
          this._updateMaterial();
        }
      },
      _updateMaterial: function _updateMaterial() {
        var material = this.renderer._materials[0];
        if (material) {
          if (this.texture) {
            material.define("USE_TEXTURE", true);
            material.setProperty("texture", this.texture);
          }
          material.setProperty("textureWidth", this.node.width);
          material.setProperty("speed", this.speed);
          material.setProperty("amplitude", this.amplitude);
          material.setProperty("wave", this.wave);
          this._vertexes.length > 0 && material.setProperty("startPos", this._vertexes[0]);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95de20O4KdHw5ShSjjJeTTB", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "mesh-texture-flag", "BotControler", "CreatBot", "DownloadProgress", "UpdateAssetManager", "ClearCacheBase64", "ConfigScence", "BUNDLE", "EVENT_MANAGER", "FIREBASE_CODE", "REQUEST_BONG_DEM", "ModelLevel", "OSDefine", "PathResource", "PathSound", "PlayerPP", "REQUEST_CODE", "StateReelSlot", "TextDefine", "FirebaseController", "FullSize", "GAME_TYPE", "SYSTEM_EVENT", "InfoERR", "CanvasControl", "ItemBtnGame", "MainView", "ConectManager", "NotiNoHu", "CaptchaController", "CaptchaItem", "Editboxcontroller", "ItemCoppy", "ItemLevelController", "JackpotItem", "JackpotManager", "LbMoneyChange", "MoneyUser", "MoneyUserController", "BtnMiniGame", "DragMiniGame", "ItemSafe", "MakeDelay", "ObjMakeDelay", "OffMiniGame", "AudioManager", "BaseEditbox", "BaseScrollView", "ItemHangLobby", "ItemLichSuTraoThuong", "ItemRankMonth", "ItemRankWeek", "LichSuTraoThuong", "TopThang", "TopTuan", "XepHang", "BigWinLobby", "BigWinLobbyView", "ItemBigWin", "BonusNap", "CaiDat", "HoTro", "ItemAdminOnline", "XacThucTele", "ChanSuKien", "ChatAdminController", "ItemChat", "ItemIconAdmin", "ItemMoveIconChat", "ItemRemoveIconChat", "WindownChat", "CropImgAva", "CapNhatTaiKhoan", "DangKy", "DangNhap", "Dialog", "EffectTakeCoin", "HomThu", "HomThuController", "ItemHomThu", "ImgChat", "ItemLichSuGiaoDich", "LichSuGiaoDich", "Loading", "ItemNhiemVu", "NhiemVu", "NhiemVuConTroller", "NotiTopMesage", "ItemIndicator", "PageData", "PageViewEvent", "BaseItemQuick", "ItemCard", "ItemMomo", "QuickShop", "ReviceItem", "DoiTab", "DoiBank", "ItemIAP", "NapBank", "NapTab", "ShopView", "BaseStateNap", "StateNapCard", "StateNapMomo", "ItemSuKien", "SuKien", "TabGiftCode", "TabSuKien", "ItemMoKhoa", "ItemTangCap", "TangCap", "DoiAva", "DoiThangThai", "ItemDoiAva", "ThongTin", "TietKiem", "VongQuay", "SceneFish", "SoundLobby", "SoundManager1", "TestTS", "GenDataTest", "InfoSpin", "ItemSpin", "Test - 001", "BaseCuaHang", "CuaHang", "TuiDo", "UIManager", "Util", "Windown", "use_reversed_rotateBy" ]);