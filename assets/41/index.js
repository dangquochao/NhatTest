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
      BaccaratAsset.prototype.getEffectWin = function(value) {
        var efftWin = cc.instantiate(this.effectWin.node);
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
      __decorate([ property(cc.Animation) ], BaccaratAsset.prototype, "effectWin", void 0);
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
      BaccaratButtonBet.prototype.onClickX2 = function() {};
      BaccaratButtonBet.prototype.onClickRebet = function() {};
      BaccaratButtonBet.prototype.onChangeListChip = function(even, data) {
        var currentOffset = this.scrBtn.getScrollOffset();
        var maxScollOffset = this.scrBtn.getMaxScrollOffset();
        cc.log("currentOffset = " + this.scrBtn.getScrollOffset());
        "previous" == data ? currentOffset.x < 0 && cc.tween(this.scrBtn.content).to(.3, {
          x: this.scrBtn.content.x + 100
        }).start() : Math.abs(currentOffset.x) < maxScollOffset.x && cc.tween(this.scrBtn.content).to(.3, {
          x: this.scrBtn.content.x - 100
        }).start();
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
        Windown_1.Windown.BaccaratController.onClickBackToLobby();
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
      BaccaratPlayer.prototype.showWinEffect = function(agWin) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                  try {
                    null == this.effecWin && (this.effecWin = Windown_1.Windown.BaccaratView.assets.getEffectWin(agWin).getComponent(cc.Animation));
                    this.effecWin.node.parent = this.node;
                    this.effecWin.node.active = true;
                    this.effecWin.getComponent(cc.Animation).play("EffectWin");
                    this.effecWin.once("finished", function() {
                      _this.effecWin.getComponent(cc.Animation).play("EndEffectWin");
                      _this.effecWin.once("finished", function() {
                        _this.effecWin.node.active = false;
                        resolve(null);
                      });
                    });
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
        this.spineEffectWin.setSkin("win");
        this.spineEffectWin.setSlotsToSetupPose();
        this.spineEffectWin.setAnimation(0, "appear", false);
        this.lbChipWin.string = Windown_1.Windown.formatMoney(agWin);
        this.lbChipWin.node.parent.active = true;
        cc.tween(this.lbChipWin.node.parent).set({
          scaleX: 0
        }).to(.3, {
          scaleX: .5
        }, {
          easing: cc.easing.backOut
        }).start();
        this.spineEffectWin.setCompleteListener(function() {
          _this.spineEffectWin.setAnimation(1, "idle", false);
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
      };
      BaccaratPlayer.prototype.hideButtonBet = function() {
        this.node.getComponent(cc.Animation).play("EffectHideBtnBet");
      };
      BaccaratPlayer.prototype.resetPlayer = function() {
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
          this.baccaratView.handleStartGame(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCRBet:
          this.baccaratView.handlePlayerBet(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.BCREndGame:
          this.baccaratView.handleEndGame(SFSObject);
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
        cc.log("SendTo Sv:", data);
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
    var Baccarat_MenuView_1 = require("./Baccarat.MenuView");
    var Baccarat_Player_1 = require("./Baccarat.Player");
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
        _this.nodeGroupUser = null;
        _this.nodeGateBet = [];
        _this.listCardPlayer = [];
        _this.listCardBanker = [];
        _this.nodeGetChip = null;
        _this.lbOtherPlayer = null;
        _this.lbTimer = null;
        _this.lbSession = null;
        _this.sprTimer = null;
        _this.lbScoreP = null;
        _this.lbScoreB = null;
        _this.animDealer = null;
        _this.animWinResult = null;
        _this.posPayChipOther = [];
        _this.lbTotalBetB = null;
        _this.lbTotalBetP = null;
        _this.lbTotalBetT = null;
        _this.lbTotalBetBP = null;
        _this.lbTotalBetPP = null;
        _this.listPosChipOnTable = [];
        _this.currentTimer = 60;
        _this.totalBetB = 0;
        _this.totalBetP = 0;
        _this.totalBetBP = 0;
        _this.totalBetPP = 0;
        _this.totalBetT = 0;
        _this.agUser = 0;
        _this.currentBetValue = 1e3;
        _this.listTotalBetValue = null;
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
        _this.listGateWin = [];
        return _this;
      }
      BaccaratView.prototype.onLoad = function() {
        var _this = this;
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
        this.listLbTotalBet = [ this.lbTotalBetP, this.lbTotalBetT, this.lbTotalBetB, this.lbTotalBetPP, this.lbTotalBetBP ];
        Windown_1.Windown.BaccaratController.baccaratView = this;
        Windown_1.Windown.BaccaratView = this;
        if (null != Windown_1.Windown.BaccaratController.joinRoomData) {
          this.handlePlayerInfo(Windown_1.Windown.BaccaratController.joinRoomData);
          Windown_1.Windown.BaccaratController.joinRoomData = null;
        }
        if (null != Windown_1.Windown.BaccaratController.infoRoom) {
          this.handleRoomInfo(Windown_1.Windown.BaccaratController.infoRoom);
          Windown_1.Windown.BaccaratController.infoRoom = null;
        }
        this.makeDelay = new MakeDelay_1.default(this);
      };
      BaccaratView.prototype.start = function() {
        Windown_1.Windown.BaccaratController.sendJoinRoom();
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
        var thisPldata = listPlayer.find(function(data) {
          return data["id"] == Windown_1.Windown.User.userId;
        });
        if (null != thisPldata) {
          cc.log("Co this player trong listPlayer, xoa no di");
          listPlayer.splice(listPlayer.indexOf(thisPldata), 1);
        }
        if (7 == listPlayer.length) {
          this.listDataPlayerOther.push(listPlayer.pop());
          cc.log("Co 7 player trong listPlayer, xoa 1 thang  di:" + listPlayer.length);
        }
        for (var i = 0, l = listPlayer.length; i < l; i++) {
          var dataPl = listPlayer[i];
          var player = this.players[i];
          player == this.thisPlayer && (player = this.players[i + 1]);
          if (cc.isValid(player) && player != this.thisPlayer) {
            player.node.active = true;
            player.resetPlayer();
            player.setInfo(dataPl["id"], dataPl["nn"], dataPl["ag"], dataPl["iv"]);
          }
        }
        this.lbOtherPlayer.string = data.getInt("so") + this.listDataPlayerOther.length + "";
      };
      BaccaratView.prototype.handleRoomInfo = function(data) {
        Windown_1.Windown.UIManager.hideLoading();
        this.currentTimer = data.getInt("time");
        this.sprTimer.fillRange = this.currentTimer / 30;
        this.onCountTimeRemain();
        var currenBetInfo = JSON.parse(Windown_1.Windown.SFSArrToJson(data.get("cur")));
        this.lbSession.string = "#" + data.getInt("sision");
        var isGame = data.getBool("isG");
        this.gameState = isGame ? GAME_STATE.BETTING : GAME_STATE.FINISHED;
        if (this.gameState == GAME_STATE.BETTING) {
          this.thisPlayer.showButtonBet();
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
            cc.log("handlePlayerInfoo:listDataPlayerOther size=" + this.listDataPlayerOther.length);
          }
        }
        this.thisPlayer.setAvatar(Windown_1.Windown.User.avatrId);
        this.thisPlayer.setName(Windown_1.Windown.User.nickName);
        this.thisPlayer.setChip(Windown_1.Windown.User.userAg, false);
        this.players.unshift(this.thisPlayer);
        this.agUser = Windown_1.Windown.User.userAg;
      };
      BaccaratView.prototype.handleStartGame = function(data) {
        cc.log("handleStartGame");
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
        var gateBet = data.getInt("id");
        cc.log("handlePlayerBet PlayerID:", idPl + "--gateBet:" + gateBet);
        var valueBet = data.getLong("bet");
        var listChipBet = this.getListChipValue(valueBet);
        for (var i = 0, l = listChipBet.length; i < l; i++) {
          var chipbet = this.assets.getChipBet(listChipBet[i]);
          this.listChipBet.push(chipbet);
          var parentChipGate = this.nodeGateBet[gateBet - 1];
          var playerBet = this.getPlayerWithId(idPl);
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
      BaccaratView.prototype.handleEndGame = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          var vP, vD, playerInfo, agWinUser, listW, timeDelay1, scoreP, scoreB, infoCardPlayer1, infoCardBanker1, infoCardPlayer2, infoCardBanker2, timeDelayBanker, infoCardPlayer3_1, infoCardBanker3_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("handleEndGame");
              this.gameState = GAME_STATE.FINISHED;
              this.thisPlayer.hideButtonBet();
              this.setDealerAnim("Stop_Bet");
              vP = JSON.parse(data.getUtfString("vP"));
              vD = JSON.parse(data.getUtfString("vD"));
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
              scoreP = this.getScore(vP);
              scoreB = this.getScore(vD);
              this.gateWin = parseInt(this.listGateWin.toString().split(",").join(""));
              cc.log("ScoreP:" + scoreP + "==ScoreB" + scoreB + "--gateWin:" + this.gateWin);
              infoCardPlayer1 = this.infoCardOnTable_Player[0];
              cc.tween(this.listCardPlayer[0]).set({
                scaleX: .15,
                scaleY: .15,
                angle: -30,
                x: -95,
                y: 149
              }).delay(.85).call(function() {
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
                _this.openCard(_this.listCardPlayer[0], vP[0]["I"], infoCardPlayer1);
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
              }).start();
              infoCardPlayer2 = this.infoCardOnTable_Player[1];
              cc.tween(this.listCardPlayer[1]).set({
                scaleX: .15,
                scaleY: .15,
                angle: -36,
                x: -95,
                y: 149
              }).delay(3.5).call(function() {
                _this.openCard(_this.listCardBanker[0], vD[0]["I"], infoCardBanker1);
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
                      this.openCard(this.listCardPlayer[1], vP[1]["I"], infoCardPlayer2);
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
              }).delay(1).start();
              return [ 4, this.getMakeDelay(7.25).prosime ];

             case 2:
              _a.sent();
              if (!(2 == vP.length && 2 == vD.length)) return [ 3, 4 ];
              return [ 4, this.getMakeDelay(1.5).prosime ];

             case 3:
              _a.sent();
              return [ 3, 8 ];

             case 4:
              timeDelayBanker = 0;
              if (3 == vP.length) {
                timeDelayBanker = 1.5;
                infoCardPlayer3_1 = this.infoCardOnTable_Player[2];
                this.setDealerAnim("DealCard_Nan");
                cc.tween(this.listCardPlayer[2]).set({
                  scaleX: .15,
                  scaleY: .15,
                  angle: -36,
                  x: -20,
                  y: 125
                }).delay(1.1).call(function() {
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
                }).call(function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                       case 0:
                        this.openCard(this.listCardPlayer[2], vP[2]["I"], infoCardPlayer3_1);
                        return [ 4, this.getMakeDelay(.5).prosime ];

                       case 1:
                        _a.sent();
                        this.showScore(BACCARAT_GATE.PLAYER, vP, false);
                        return [ 2 ];
                      }
                    });
                  });
                }).start();
              }
              if (!(3 == vD.length)) return [ 3, 6 ];
              return [ 4, this.getMakeDelay(timeDelayBanker).prosime ];

             case 5:
              _a.sent();
              infoCardBanker3_1 = this.infoCardOnTable_Banker[2];
              this.setDealerAnim("DealCard_Table_Right");
              cc.tween(this.listCardBanker[2]).set({
                scaleX: .15,
                scaleY: .15,
                angle: 36,
                x: 30,
                y: 133
              }).delay(1.1).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    this.listCardBanker[2].active = true;
                    this.listCardBanker[2].opacity = 255;
                    return [ 2 ];
                  });
                });
              }).to(.3, {
                scaleX: infoCardBanker3_1.scaleX,
                scaleY: infoCardBanker3_1.scaleY,
                angle: infoCardBanker3_1.angle,
                skewX: infoCardBanker3_1.skew.x,
                skewY: infoCardBanker3_1.skew.y,
                position: infoCardBanker3_1.position
              }, {
                easing: cc.easing.sineIn
              }).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      this.openCard(this.listCardBanker[2], vD[2]["I"], infoCardBanker3_1);
                      return [ 4, this.getMakeDelay(.5).prosime ];

                     case 1:
                      _a.sent();
                      this.showScore(BACCARAT_GATE.BANKER, vD, false);
                      return [ 2 ];
                    }
                  });
                });
              }).start();
              _a.label = 6;

             case 6:
              return [ 4, this.getMakeDelay(2.8).prosime ];

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
        var _loop_1 = function(i) {
          var gate = this_1.listGateWin[i];
          this_1.players.forEach(function(playerBet) {
            var listChipPl = playerBet.listChipBet;
            listChipPl.forEach(function(chip, index) {
              if (chip["gate"] == gate) {
                chip["value"] = _this.getChipWinValueOnGate(chip["value"], gate);
                var listChipBet = _this.getListChipValue(chip["value"]);
                for (var j = 0, size = listChipBet.length; j < size; j++) _this.effectChipPay(listChipBet[j], gate, .07 * index, playerBet.listChipPay);
              }
            });
          });
          this_1.listChipbetOther.forEach(function(chip, index) {
            if (chip["gate"] == gate) {
              chip["value"] = _this.getChipWinValueOnGate(chip["value"], gate);
              var listChipBet = _this.getListChipValue(chip["value"]);
              for (var i_3 = 0, l = listChipBet.length; i_3 < l; i_3++) _this.effectChipPay(listChipBet[i_3], gate, .07 * index, _this.listChipbetOther);
            }
          });
        };
        var this_1 = this;
        for (var i = 0; i < this.listGateWin.length; i++) _loop_1(i);
      };
      BaccaratView.prototype.getChipWinValueOnGate = function(value, gate) {
        gate != BACCARAT_GATE.PLAYER_PAIR && gate != BACCARAT_GATE.BANKER_PAIR || (value *= 15);
        gate == BACCARAT_GATE.TIE && (value *= 9);
        return value;
      };
      BaccaratView.prototype.moveChipToPlayer = function() {
        var _this = this;
        var playerContainer = cc.find("bg/playerContainer", this.node);
        this.players.forEach(function(playerBet) {
          playerBet.listChipBet.forEach(function(chip, index) {
            if (index < 7) {
              var posIn = Windown_1.Windown.convertNodeInOtherNode(chip, playerContainer);
              chip.parent = playerContainer;
              chip.setPosition(posIn);
              cc.tween(chip).to(.6, {
                x: playerBet.posPayChip[0].x,
                y: playerBet.posPayChip[0].y + 5 * index,
                scale: .8 * chip.scale
              }).delay(1).to(.3, {
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
              index == playerBet.listChipBet.length - 1 && (playerBet.listChipBet = []);
            });
          });
          playerBet.listChipPay.forEach(function(chip, index) {
            if (index < 7) {
              var posIn = Windown_1.Windown.convertNodeInOtherNode(chip, playerContainer);
              chip.parent = playerContainer;
              chip.setPosition(posIn);
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
              index == playerBet.listChipPay.length - 1 && (playerBet.listChipPay = []);
            });
          });
        });
        this.listChipbetOther.forEach(function(chip, index) {
          if (index < 5) {
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
            _this.assets.chipBetPool.put(chip);
            index == _this.listChipbetOther.length - 1 && (_this.listChipbetOther = []);
          }
        });
        this.listChipBet.forEach(function(chip, index) {
          cc.isValid(_this.getPlayerWithId(chip["playerID"])) || _this.listChipbetOther.includes(chip) || cc.tween(chip).to(.3, {
            opacity: 0
          }, {
            easing: cc.easing.sineOut
          }).call(function() {
            _this.assets.chipBetPool.put(chip);
          });
        });
      };
      BaccaratView.prototype.showResultAgWin = function(dataResult, agWinUser) {
        void 0 === dataResult && (dataResult = []);
        return __awaiter(this, void 0, void 0, function() {
          var listPromise;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              listPromise = [];
              dataResult.forEach(function(data) {
                var idPl = data["id"];
                if (idPl != _this.thisPlayer.id) {
                  var player = _this.getPlayerWithId(idPl);
                  if (cc.isValid(player) && data["agw"] > 0) {
                    listPromise.push(player.showWinEffect(data["agw"]));
                    player.setChip(data["ag"]);
                  }
                }
              });
              if (0 != agWinUser) {
                listPromise.push(this.thisPlayer.showWinSpineEffect(agWinUser));
                this.thisPlayer.setChip(this.agUser);
              }
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
          this.listCardBanker.forEach(function(card, index) {
            cc.tween(card).delay(.1 * index).to(.3, {
              opacity: 0
            }, {
              easing: cc.easing.sineOut
            }).call(function() {
              card.getComponent(cc.Sprite).spriteFrame = _this.assets.getCardBack();
            }).start();
          });
          this.listCardPlayer.forEach(function(card, index) {
            cc.tween(card).delay(.1 * index).to(.3, {
              opacity: 0
            }, {
              easing: cc.easing.sineOut
            }).call(function() {
              card.getComponent(cc.Sprite).spriteFrame = _this.assets.getCardBack();
            }).start();
          });
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
        }
      };
      BaccaratView.prototype.effectChipPay = function(value, gate, timedel, arrPutChip) {
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
        }).start();
      };
      BaccaratView.prototype.showWinResult = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var animDealerName, animName, e_1;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    _a.trys.push([ 0, 2, , 3 ]);
                    this.animWinResult.node.active = true;
                    cc.tween(this.animWinResult.node).set({
                      scale: 0,
                      opacity: 0
                    }).to(.75, {
                      scale: 1,
                      opacity: 255
                    }, {
                      easing: cc.easing.elasticOut
                    }).start();
                    cc.find("bgWinResult/lbWin", this.animWinResult.node).getComponent(cc.Label).string = "WIN";
                    animDealerName = "";
                    if (this.getGateWinNormal() == BACCARAT_GATE.TIE) {
                      this.animWinResult.node.x = 0;
                      cc.find("bgWinResult/lbWin", this.animWinResult.node).getComponent(cc.Label).string = "H\xd2A";
                      animDealerName = "Win_Draw";
                    } else if (this.getGateWinNormal() == BACCARAT_GATE.PLAYER) {
                      this.animWinResult.node.x = -170;
                      animDealerName = "Win_Player";
                    } else {
                      this.animWinResult.node.x = 170;
                      animDealerName = "Win_Banker";
                    }
                    this.setDealerAnim(animDealerName);
                    animName = this.getGateWinNormal() == BACCARAT_GATE.TIE ? "TieWin" : "BankerWin";
                    this.animWinResult.play(animName);
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
        this.lbTimer.string = this.currentTimer + "";
        this.schedule(function() {
          if (_this.currentTimer > 0) {
            _this.lbTimer.string = _this.currentTimer + "";
            _this.currentTimer--;
          } else _this.lbTimer.string = "0";
        }, 1, this.currentTimer);
        cc.tween(this.sprTimer).to(this.currentTimer, {
          fillRange: 0
        }).start();
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
        cc.log("onClickSendBet:", data);
        Windown_1.Windown.BaccaratController.sendBet(parseInt(data), this.currentBetValue);
        setTimeout(function() {
          Windown_1.Windown.BaccaratController.isCanSendData = true;
        }, 500);
      };
      BaccaratView.prototype.onClickShowMenu = function() {
        this.menu.node.active = true;
        this.menu.onshow();
      };
      __decorate([ property([ Baccarat_Player_1.default ]) ], BaccaratView.prototype, "players", void 0);
      __decorate([ property(Baccarat_Player_1.default) ], BaccaratView.prototype, "thisPlayer", void 0);
      __decorate([ property(Baccarat_Assets_1.default) ], BaccaratView.prototype, "assets", void 0);
      __decorate([ property(Baccarat_MenuView_1.default) ], BaccaratView.prototype, "menu", void 0);
      __decorate([ property(cc.Node) ], BaccaratView.prototype, "nodeGroupUser", void 0);
      __decorate([ property([ cc.Node ]) ], BaccaratView.prototype, "nodeGateBet", void 0);
      __decorate([ property([ cc.Node ]) ], BaccaratView.prototype, "listCardPlayer", void 0);
      __decorate([ property([ cc.Node ]) ], BaccaratView.prototype, "listCardBanker", void 0);
      __decorate([ property(cc.Node) ], BaccaratView.prototype, "nodeGetChip", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbOtherPlayer", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbTimer", void 0);
      __decorate([ property(cc.Label) ], BaccaratView.prototype, "lbSession", void 0);
      __decorate([ property(cc.Sprite) ], BaccaratView.prototype, "sprTimer", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbScoreP", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbScoreB", void 0);
      __decorate([ property(sp.Skeleton) ], BaccaratView.prototype, "animDealer", void 0);
      __decorate([ property(cc.Animation) ], BaccaratView.prototype, "animWinResult", void 0);
      __decorate([ property([ cc.Vec2 ]) ], BaccaratView.prototype, "posPayChipOther", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetB", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetP", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetT", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetBP", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], BaccaratView.prototype, "lbTotalBetPP", void 0);
      __decorate([ property([ cc.Vec2 ]) ], BaccaratView.prototype, "listPosChipOnTable", void 0);
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
    "./Baccarat.MenuView": "Baccarat.MenuView",
    "./Baccarat.Player": "Baccarat.Player"
  } ]
}, {}, [ "Baccarat.Assets", "Baccarat.ButtonBet", "Baccarat.ChipBet", "Baccarat.MenuView", "Baccarat.Player", "BaccaratController", "BaccaratView" ]);