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
  BaseBulletBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "945cbQpaL9M0YHt+40KOX71", "BaseBulletBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseBulletBD = function(_super) {
      __extends(BaseBulletBD, _super);
      function BaseBulletBD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isMe = false;
        _this.fishTarget = null;
        return _this;
      }
      BaseBulletBD.prototype.onCollisionEnter = function(other, self) {
        var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(other.tag);
        fish && fish.getCanColision() && this.onCollision(fish, other);
      };
      BaseBulletBD = __decorate([ ccclass ], BaseBulletBD);
      return BaseBulletBD;
    }(cc.Component);
    exports.default = BaseBulletBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0
  } ],
  BaseEffectFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1822LmedJHlJIp9CvD2WV4", "BaseEffectFish");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseEffectFish = function(_super) {
      __extends(BaseEffectFish, _super);
      function BaseEffectFish() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fish = null;
        _this.currentTime = 0;
        return _this;
      }
      BaseEffectFish.prototype.setFish = function(fish, totalTime) {
        this.fish = fish;
        this.fish.addEffect(this);
        this.currentTime = totalTime;
        return this;
      };
      BaseEffectFish.prototype.update = function(dt) {
        this.currentTime -= dt;
        this.currentTime <= 0 && this.reset();
      };
      BaseEffectFish = __decorate([ ccclass ], BaseEffectFish);
      return BaseEffectFish;
    }(cc.Component);
    exports.default = BaseEffectFish;
    cc._RF.pop();
  }, {} ],
  BaseEffectPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0970pvzSZFupN01VnVbCio", "BaseEffectPlayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseEffectPlayer = function(_super) {
      __extends(BaseEffectPlayer, _super);
      function BaseEffectPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.time = 0;
        _this.type = 0;
        _this.player = null;
        return _this;
      }
      BaseEffectPlayer.prototype.initPlayer = function(player, time, type) {
        this.player = player;
        this.time = time;
        this.type = type;
      };
      BaseEffectPlayer.prototype.end = function() {
        var _a;
        null === (_a = this.player) || void 0 === _a ? void 0 : _a.endEffect(this.type);
        this.player = null;
        this.time = 0;
        Windown_1.Windown.FishBongDem.pool.putEffectPlayer(this);
      };
      BaseEffectPlayer.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        this.time -= dt;
        this.time <= 0 && this.end();
      };
      BaseEffectPlayer = __decorate([ ccclass ], BaseEffectPlayer);
      return BaseEffectPlayer;
    }(cc.Component);
    exports.default = BaseEffectPlayer;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0
  } ],
  BaseFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e51edMOcQpFw679+8LtG8rl", "BaseFishBD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishStateBD_1 = require("./FishStateBD");
    var posDeadPlayer = [ {
      x: -280,
      y: -115
    }, {
      x: 280,
      y: -115
    }, {
      x: 280,
      y: 115
    }, {
      x: -280,
      y: 115
    } ];
    var BaseFishBD = function() {
      function BaseFishBD(fishMng) {
        this.fishId = -1;
        this.fishType = -1;
        this._fishState = -2;
        this.timeMove = 0;
        this.currentTimeInPath = 0;
        this.timeEffectIce = 0;
        this.timeEffectWaiting = 0;
        this.timeEffectHide = 0;
        this.speed = 1;
        this.speedAdd = 1;
        this.infoAni = "";
        this.fishMng = null;
        this.isInitView = false;
        this.isInList = true;
        this.isDeadEffect = false;
        this.listEffectFish = [];
        this.fishView = null;
        this.funCallBackWhenInitView = null;
        this.fishMng = fishMng;
      }
      Object.defineProperty(BaseFishBD.prototype, "fishState", {
        get: function() {
          return this._fishState;
        },
        set: function(value) {
          if (value != this._fishState) {
            value == FishStateBD_1.default.NORMAL ? this.effectNormal() : value == FishStateBD_1.default.ICE ? this.effectIce() : value == FishStateBD_1.default.WATING && this.effectWating();
            this._fishState = value;
          }
        },
        enumerable: false,
        configurable: true
      });
      BaseFishBD.prototype.update = function(dt) {
        this.timeEffectIce <= 0 && this.timeEffectWaiting <= 0 && (this.fishState = FishStateBD_1.default.NORMAL);
        this.timeEffectHide > 0 && (this.timeEffectHide -= dt);
        var dtTemp = this.checkTimeEffect(dt);
        this.currentTimeInPath += dtTemp * this.speed;
        if (this.currentTimeInPath >= this.timeMove) {
          this.removeFishFromList();
          this.destroy();
        }
      };
      BaseFishBD.prototype.getAniClipFromString = function(string) {
        var objClip = JSON.parse(string);
        this.fishMng.fishBD.playerIdMe > 2 && this.setUpLat(objClip);
        var aniClip = new cc.AnimationClip();
        for (var temp in objClip) aniClip[temp] = objClip[temp];
        return aniClip;
      };
      BaseFishBD.prototype.setUpLat = function(out) {
        if (out.curveData.props.position) for (var _i = 0, _a = out.curveData.props.position; _i < _a.length; _i++) {
          var temp = _a[_i];
          var value = temp.value;
          var motionPath = temp.motionPath;
          value[1] *= -1;
          if (motionPath) for (var _b = 0, motionPath_1 = motionPath; _b < motionPath_1.length; _b++) {
            var listMt = motionPath_1[_b];
            for (var temp_1 in listMt) Number(temp_1) % 2 != 0 && (listMt[temp_1] *= -1);
          }
        }
        if (out.curveData.props.angle) for (var _c = 0, _d = out.curveData.props.angle; _c < _d.length; _c++) {
          var temp = _d[_c];
          temp.value = -180 - temp.value;
        }
      };
      BaseFishBD.prototype.addEffect = function(effect) {
        if (this.fishView) {
          this.listEffectFish.push(effect);
          return true;
        }
        return false;
      };
      BaseFishBD.prototype.removeEffect = function(effect) {
        var index = this.listEffectFish.indexOf(effect);
        if (-1 != index) {
          this.listEffectFish.splice(index, 1);
          effect.reset();
        }
      };
      BaseFishBD.prototype.removeFishFromList = function() {
        this.isInList = false;
        this.fishMng.removeFish(this.fishId);
      };
      BaseFishBD.prototype.getPosDeadPlayer = function(sittingInView) {
        var pos = posDeadPlayer[sittingInView - 1];
        return cc.v2(pos.x + Windown_1.Windown.RandomNumber(-60, 60), pos.y + Windown_1.Windown.RandomNumber(-40, 40));
      };
      BaseFishBD.prototype.checkTimeEffect = function(dt) {
        if (this.timeEffectIce > 0) {
          this.fishState = FishStateBD_1.default.ICE;
          this.timeEffectIce -= dt;
          return 0;
        }
        this.timeEffectIce <= 0 && (this.timeEffectIce = 0);
        if (this.timeEffectWaiting > 0) {
          if (this.timeEffectIce <= 0) {
            this.timeEffectWaiting -= dt;
            this.fishState = FishStateBD_1.default.WATING;
          }
          return 0;
        }
        this.timeEffectWaiting <= 0 && (this.timeEffectWaiting = 0);
        return dt;
      };
      BaseFishBD.prototype.destroy = function() {
        this.listEffectFish.forEach(function(v) {
          v.reset();
        });
        this.listEffectFish.length = 0;
      };
      BaseFishBD.prototype.checkColiderInScreen = function(coliderCheck) {
        if (this.fishView) return this.fishView.checkColiderInScreen(coliderCheck);
        return null;
      };
      BaseFishBD.prototype.getColiderInScreen = function(lastColider) {
        if (this.fishView) return this.fishView.getColiderInScreen(lastColider);
        return null;
      };
      BaseFishBD.prototype.getPointColider = function(colider) {
        if (this.fishView) return this.fishView.getPointColider(colider);
        return null;
      };
      return BaseFishBD;
    }();
    exports.default = BaseFishBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishStateBD": "FishStateBD"
  } ],
  BaseFishColision: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7c8beBwpNGQqJGbqMZEfdU", "BaseFishColision");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishDeadBoom_1 = require("../Fish/DeadEffect/FishDeadBoom");
    var FishDeadCaXau_1 = require("../Fish/DeadEffect/FishDeadCaXau");
    var FishDeadGroup_1 = require("../Fish/DeadEffect/FishDeadGroup");
    var FishDeadGroup4_1 = require("../Fish/DeadEffect/FishDeadGroup4");
    var FishDeadJackpot_1 = require("../Fish/DeadEffect/FishDeadJackpot");
    var FishDeadMutilReward_1 = require("../Fish/DeadEffect/FishDeadMutilReward");
    var FishDeadNoEffect_1 = require("../Fish/DeadEffect/FishDeadNoEffect");
    var FishDeadNormal_1 = require("../Fish/DeadEffect/FishDeadNormal");
    var FishDeadNormalRd_1 = require("../Fish/DeadEffect/FishDeadNormalRd");
    var FishDeadRua_1 = require("../Fish/DeadEffect/FishDeadRua");
    var FishDeadTrieuHoi_1 = require("../Fish/DeadEffect/FishDeadTrieuHoi");
    var FishDeadTruyGai_1 = require("../Fish/DeadEffect/FishDeadTruyGai");
    var FishDeadVongQuay_1 = require("../Fish/DeadEffect/FishDeadVongQuay");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var BaseFishColision = function() {
      function BaseFishColision(packet) {
        var _this = this;
        this.listFish = [];
        this.listFishValue = [];
        this.player = null;
        this.moneyPlayer = 0;
        this.type = -1;
        this.totalExp = 0;
        this.moneyGun = 0;
        this.idByFish = -1;
        this.sfsObj = null;
        this.sfsObj = packet;
        var listFishId = JSON.parse(packet.getUtfString("listFishId"));
        listFishId.forEach(function(idF) {
          var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(idF);
          fish && (fish.fishView ? _this.listFish.push(fish) : fish.removeFishFromList());
        });
        var idP = packet.getInt(PlayerPP_1.PlayerPP.AccountId);
        this.player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(idP);
        this.moneyPlayer = packet.getLong("AccountBalance");
        this.listFishValue = JSON.parse(packet.getUtfString("listFishValue"));
        this.type = packet.getInt("deadType");
        this.totalExp = packet.getInt("totalExp");
        this.moneyGun = packet.getInt("moneyGun");
        this.idByFish = packet.get("byFish");
        if (null == this.player) this.listFish.forEach(function(fish) {
          fish.removeFishFromList();
          fish.destroy();
        }); else {
          this.player.updateExp(this.totalExp);
          packet.containsKey("Items") && this.player.takeItemFish(packet.getSFSArray("Items"), this.listFish[0]);
          this.player.moneyCache = this.moneyPlayer;
          this.listFish.forEach(function(v, i) {
            _this.player.pushDelay(_this.listFishValue[i]);
          });
        }
      }
      BaseFishColision.prototype.getDeadEffectWithFishType = function(fish, moneyGun, player) {
        var cp = null;
        cp = fish.fishType == FISH_TYPE_1.default.LAZE || fish.fishType == FISH_TYPE_1.default.SONG_AM || fish.fishType == FISH_TYPE_1.default.MUI_KHOAN || fish.fishType == FISH_TYPE_1.default.GUN_FIRE ? new FishDeadNoEffect_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.BOOM ? new FishDeadBoom_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.CA_XAU ? new FishDeadCaXau_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.TRUY_GAI ? new FishDeadTruyGai_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.RUA ? new FishDeadRua_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.VONG_QUAY ? new FishDeadVongQuay_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.CA_GROUP || fish.fishType == FISH_TYPE_1.default.CA_GROUP4 ? new FishDeadGroup_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.CA_GROUP4_1 ? new FishDeadGroup4_1.default(fish, player, moneyGun) : fish.fishType < 15 || fish.fishType == FISH_TYPE_1.default.CA_TRAN_1 || fish.fishType > 28 && fish.fishType < 33 ? new FishDeadNormal_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.MUTIL ? new FishDeadMutilReward_1.default(fish, player, moneyGun) : fish.fishType == FISH_TYPE_1.default.JACKPOT ? player.isMe ? new FishDeadJackpot_1.default(fish, player, moneyGun) : new FishDeadNormal_1.default(fish, player, moneyGun) : fish.fishType >= 70 && fish.fishType <= 73 ? new FishDeadTrieuHoi_1.default(fish, player, moneyGun) : new FishDeadNormalRd_1.default(fish, player, moneyGun);
        return cp;
      };
      return BaseFishColision;
    }();
    exports.default = BaseFishColision;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Fish/DeadEffect/FishDeadBoom": "FishDeadBoom",
    "../Fish/DeadEffect/FishDeadCaXau": "FishDeadCaXau",
    "../Fish/DeadEffect/FishDeadGroup": "FishDeadGroup",
    "../Fish/DeadEffect/FishDeadGroup4": "FishDeadGroup4",
    "../Fish/DeadEffect/FishDeadJackpot": "FishDeadJackpot",
    "../Fish/DeadEffect/FishDeadMutilReward": "FishDeadMutilReward",
    "../Fish/DeadEffect/FishDeadNoEffect": "FishDeadNoEffect",
    "../Fish/DeadEffect/FishDeadNormal": "FishDeadNormal",
    "../Fish/DeadEffect/FishDeadNormalRd": "FishDeadNormalRd",
    "../Fish/DeadEffect/FishDeadRua": "FishDeadRua",
    "../Fish/DeadEffect/FishDeadTrieuHoi": "FishDeadTrieuHoi",
    "../Fish/DeadEffect/FishDeadTruyGai": "FishDeadTruyGai",
    "../Fish/DeadEffect/FishDeadVongQuay": "FishDeadVongQuay",
    "../Fish/FISH_TYPE": "FISH_TYPE"
  } ],
  BaseFishDeaditemDrag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa7cekXgTxNCY41G7k3RIhj", "BaseFishDeaditemDrag");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FISH_DEAD_BD_TYPE_1 = require("../Fish/DeadEffect/FISH_DEAD_BD_TYPE");
    var BaseFishDeaditemDrag = function() {
      function BaseFishDeaditemDrag(packet) {
        var _this = this;
        this.listFish = [];
        this.listFishValue = [];
        this.player = null;
        this.moneyPlayer = 0;
        this.type = -1;
        this.totalExp = 0;
        this.moneyGun = 0;
        this.idByFish = -1;
        this.sfsObj = null;
        this.sfsObj = packet;
        var listFishId = JSON.parse(packet.getUtfString("listFishId"));
        listFishId.forEach(function(idF) {
          var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(idF);
          fish && (fish.fishView ? _this.listFish.push(fish) : fish.removeFishFromList());
        });
        var idP = packet.getInt(PlayerPP_1.PlayerPP.AccountId);
        this.player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(idP);
        this.moneyPlayer = packet.getLong("AccountBalance");
        this.listFishValue = JSON.parse(packet.getUtfString("listFishValue"));
        this.type = packet.getInt("deadType");
        this.totalExp = packet.getInt("totalExp");
        this.moneyGun = packet.getInt("moneyGun");
        this.idByFish = packet.get("byFish");
        this.type != FISH_DEAD_BD_TYPE_1.default.ITEM_HAI_THAN && this.type != FISH_DEAD_BD_TYPE_1.default.HAI_THAN || (this.idByFish = this.sfsObj.get("byIdItemDrag"));
      }
      return BaseFishDeaditemDrag;
    }();
    exports.default = BaseFishDeaditemDrag;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Fish/DeadEffect/FISH_DEAD_BD_TYPE": "FISH_DEAD_BD_TYPE"
  } ],
  BaseFishDead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78d63f3KJFPXKmcsz1/siU+", "BaseFishDead");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseFishDead = function() {
      function BaseFishDead(fishBd, player, moneyGun) {
        this.fishBd = null;
        this.player = null;
        this.moneyRevice = 0;
        this.moneyGun = 0;
        this.soundBongDem = null;
        this.funCall = null;
        this.fishBd = fishBd;
        this.player = player;
        this.moneyGun = moneyGun;
        this.soundBongDem = Windown_1.Windown.FishBongDem.getSound();
      }
      BaseFishDead.prototype.makeDelay = function(time) {
        return Windown_1.Windown.FishBongDem.makeDelay(time);
      };
      BaseFishDead.prototype.getListCoinByType = function(fishType) {
        var listNode = [];
        var countCoin = 1;
        var scale = .4;
        switch (fishType) {
         case 1:
         case 2:
         case 3:
          countCoin = 1;
          scale = .4;
          break;

         case 4:
         case 5:
         case 6:
         case 7:
          countCoin = 2;
          scale = .3;
          break;

         case 8:
         case 9:
         case 10:
         case 11:
          countCoin = 4;
          scale = .25;
          break;

         case 12:
         case 13:
         case 14:
         case 15:
         case 16:
          countCoin = 6;
          scale = .25;
          break;

         default:
          countCoin = 10;
          scale = .25;
        }
        for (var i = 0; i < countCoin; i++) {
          var nodeCoin = Windown_1.Windown.FishBongDem.pool.getCoin(this.player.isMe);
          nodeCoin.scale = scale;
          nodeCoin.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
          listNode.push(nodeCoin);
        }
        return listNode;
      };
      return BaseFishDead;
    }();
    exports.default = BaseFishDead;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0
  } ],
  BaseItemDrag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb1d2zfkFBKh4zDUkT1upoQ", "BaseItemDrag");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../../Scritps/Windown");
    var BaseItemDrag = function() {
      function BaseItemDrag(player, type, id) {
        this.player = null;
        this.timeUse = 0;
        this.timeRemove = 0;
        this.type = -1;
        this.config = null;
        this.id = -1;
        this.player = player;
        this.type = type;
        this.id = id;
        this.config = Windown_1.Windown.FishBongDem.getGunSpecialConfigType(type);
      }
      BaseItemDrag.prototype.update = function(dt) {
        this.timeUse > 0 ? this.timeUse -= dt : this.timeRemove <= 0 && this.remove();
        this.timeRemove > 0 ? this.timeRemove -= dt : this.timeUse <= 0 && this.remove();
      };
      BaseItemDrag.prototype.remove = function() {
        this.player.removeItemDrag(this.id);
      };
      BaseItemDrag.prototype.excuted = function() {
        this.timeRemove = this.config.getInt("TimeRemoveNotUse") - Windown_1.Windown.LagValue;
        this.timeUse = 0;
      };
      BaseItemDrag.prototype.using = function() {
        this.timeRemove = 0;
        this.timeUse = this.config.getInt("TimeToUse") - Windown_1.Windown.LagValue;
      };
      return BaseItemDrag;
    }();
    exports.default = BaseItemDrag;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0
  } ],
  BasePlayerBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e430eWUs3NFrJdxAc/5n1KD", "BasePlayerBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var REQUEST_CODE_1 = require("../../../../Scritps/DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var ItemLevelController_1 = require("../../../../Scritps/Obs/ItemLevelController");
    var LbMoneyChange_1 = require("../../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../../Scritps/Windown");
    var DinhBa_1 = require("../Boom/DinhBa");
    var DropBoom_1 = require("../Boom/DropBoom");
    var GunFishBD_1 = require("../Gun/GunFishBD");
    var GUN_TYPE_BD_1 = require("../Gun/GUN_TYPE_BD");
    var MatThan_1 = require("../Gun/MatThan");
    var StateGunFire_1 = require("../Gun/StateGunFire");
    var BaseItemDrag_1 = require("./BaseItemDrag");
    var PlayerUsingAuto_1 = require("./Effect/PlayerUsingAuto");
    var PlayerUsingIce_1 = require("./Effect/PlayerUsingIce");
    var PlayerUsingSpeed_1 = require("./Effect/PlayerUsingSpeed");
    var PlayerUsingTarget_1 = require("./Effect/PlayerUsingTarget");
    var TypePlayerEffectBD_1 = require("./Effect/TypePlayerEffectBD");
    var TypeItemDragBD_1 = require("./TypeItemDragBD");
    var levelConfig = [ 188, 282, 424, 635, 952, 1427, 2139, 3206, 4806, 7206, 10806, 15816, 22820, 32323, 44834, 60941, 80942, 105960, 135981, 172003, 212128, 258358, 311568, 372808, 442958, 523172, 618413, 733437, 874069, 1039309, 1234969, 1465170, 1735520, 2056522, 2441782, 2902985, 3453987, 4103990, 4864200, 5754410, 6794640, 7998160, 9384362, 10970563, 12771785, 14822815, 17222926, 20129246, 23650247, 27866250 ];
    var listPos = [ {
      x: -475,
      y: -312
    }, {
      x: 475,
      y: -312
    }, {
      x: 475,
      y: 312
    }, {
      x: -475,
      y: 312
    } ];
    var xAvaConfig = [ -118, 118, 118, -118 ];
    var xNameConfig = [ 15, -15, -15, 15 ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BasePlayerBD = function(_super) {
      __extends(BasePlayerBD, _super);
      function BasePlayerBD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.lbName = null;
        _this.lbLevel = null;
        _this.lbTimeCD = null;
        _this.spAva = null;
        _this.gunFishBd = null;
        _this.spProgressLevel = null;
        _this.parentPanel = null;
        _this.listitemLevel = [];
        _this.playerManager = null;
        _this.namePlayer = "";
        _this.gold = 0;
        _this.SFSInfo = null;
        _this.playerSiting = -1;
        _this.playerId = -1;
        _this.acountId = -1;
        _this.currentGunId = -1;
        _this.timeItemSpeed = 0;
        _this.isItemSpeed = false;
        _this.timeItemTarget = 0;
        _this.isItemTarget = false;
        _this.timeItemIce = 0;
        _this.isItemIce = false;
        _this.timeItemAuto = 0;
        _this.isItemAuto = false;
        _this.timeItemTrieuHoi = 0;
        _this.indexMoneyGun = 0;
        _this.currentTimeGunToUseSpecial = 0;
        _this.currentTimeGunRemoveSpecial = 0;
        _this.isMe = false;
        _this.level = 0;
        _this.exp = 0;
        _this.totalLevel = 0;
        _this.listPlayerEffect = [];
        _this.listItemDrag = [];
        _this.mapNodePanel = new Map();
        _this.mapMatThan = new Map();
        _this.listDelayMoney = [];
        _this.moneyCache = 0;
        return _this;
      }
      BasePlayerBD.prototype.setPlayerMng = function(mng) {
        this.playerManager = mng;
      };
      BasePlayerBD.prototype.initPlayer = function(SFSObject, sitingInView) {
        this.SFSInfo = SFSObject;
        this.gold = SFSObject.getLong("ag");
        this.moneyCache = this.gold;
        this.namePlayer = SFSObject.getUtfString("nickname");
        this.level = SFSObject.getInt("currentlevel");
        this.totalLevel = SFSObject.getInt("totallevelpoint");
        this.exp = SFSObject.getInt("currentlevelpoint");
        this.acountId = SFSObject.getInt("id");
        this.playerId = SFSObject.getInt("SittingId");
        this.currentGunId = SFSObject.getInt("CurrentGunId");
        this.indexMoneyGun = SFSObject.getInt("IndexMoneyGun");
        this.currentTimeGunRemoveSpecial = SFSObject.get("TimeRemoveSpecilGun");
        this.currentTimeGunToUseSpecial = SFSObject.get("TimeUseSpecilGun");
        this.playerSiting = sitingInView;
        this.isMe = false;
        if (this.acountId == Windown_1.Windown.User.userId) {
          this.isMe = true;
          this.playerManager.fishBD.me = this;
          Windown_1.Windown.FishBongDem.fishBDView.setItemInfo(SFSObject.getSFSArray("ItemFish"));
          Windown_1.Windown.MoneyUser.dangKyHandle(this.setGold, this);
        }
        this.setUpView();
        this.setAva(this.SFSInfo);
        this.setExp(this.exp / this.totalLevel);
        this.setLevel(this.level);
        this.setName(this.namePlayer);
        this.setGold(this.gold);
        this.lbGold.setMoneyNoTime(this.gold);
        this.gunFishBd.setPlayer(this);
        this.gunFishBd.initGun(this.currentGunId);
        this.gunFishBd.setMoneyGun(this.indexMoneyGun);
        this.updateItem(SFSObject);
        var arr = SFSObject.getSFSArray("ListItemDrag");
        for (var i = 0, l = arr.size(); i < l; i++) {
          var obj = arr.getSFSObject(i);
          obj.get("TimeRemoveNotUse") > 0 && this.addItemDrag(obj);
        }
        if (this.isMe) {
          this.listitemLevel.forEach(function(v) {
            v.updateLevelConfig();
            v.setRoom(1);
          });
          this.updateItemLevel(this.indexMoneyGun);
        }
        this.test();
      };
      BasePlayerBD.prototype.test = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      BasePlayerBD.prototype.setUpView = function() {
        this.node.setPosition(listPos[this.playerSiting - 1].x, listPos[this.playerSiting - 1].y);
        var nodeAva = cc.find("BtnInfo", this.node);
        nodeAva.x = xAvaConfig[this.playerSiting - 1];
        nodeAva = cc.find("username", this.node);
        nodeAva.x = xNameConfig[this.playerSiting - 1];
        var node = cc.find("username/coin", this.node);
        var worldPos = node.parent.convertToWorldSpaceAR(node.getPosition());
        var viewPos = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos);
        this.posBoxCoin = viewPos;
        var worldPos2 = this.lbTimeCD.node.parent.convertToWorldSpaceAR(this.lbTimeCD.node.getPosition());
        var viewPos2 = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos2);
        this.posMoneyMini = viewPos2;
        var configPosPanel = [ cc.v2(-45, 43), cc.v2(45, 43), cc.v2(45, -43), cc.v2(-45, -43) ];
        var configAnPanel = [ 0, 0, 1, 1 ];
        this.parentPanel.setPosition(configPosPanel[this.playerSiting - 1]);
        this.parentPanel.anchorY = configAnPanel[this.playerSiting - 1];
      };
      BasePlayerBD.prototype.getPosInVew = function() {
        return cc.v2(listPos[this.playerSiting - 1].x, listPos[this.playerSiting - 1].y);
      };
      BasePlayerBD.prototype.updateExp = function(exp) {
        this.exp += exp;
        var isLvlUp = this.checkLvlUp();
        isLvlUp && this.setLevel(this.level);
        this.setExp(this.exp / this.totalLevel);
      };
      BasePlayerBD.prototype.reset = function() {
        var _a, _b;
        if (!this.node) return;
        while (this.listPlayerEffect.length > 0) this.listPlayerEffect[0].end();
        try {
          this.mapNodePanel.forEach(function(v, k) {
            v.destroy();
          });
          this.mapMatThan.forEach(function(v, k) {
            v.node.destroy();
          });
        } catch (e) {}
        this.listDelayMoney.length = 0;
        this.indexMoneyGun = 0;
        this.listItemDrag.length = 0;
        this.mapNodePanel.clear();
        this.mapMatThan.clear();
        null === (_b = null === (_a = this.gunFishBd) || void 0 === _a ? void 0 : _a.stateGun) || void 0 === _b ? void 0 : _b.cancleAtack();
        this.playerManager.putPlayerViewPool(this.node);
        if (this.isMe) {
          Windown_1.Windown.MoneyUser.targetOff(this);
          Windown_1.Windown.MoneyUser.endGameMOney(GAME_TYPE_1.default.BongDem);
        }
      };
      BasePlayerBD.prototype.onDestroy = function() {
        Windown_1.Windown.MoneyUser.targetOff(this);
        this.isMe && Windown_1.Windown.MoneyUser.endGameMOney(GAME_TYPE_1.default.BongDem);
      };
      BasePlayerBD.prototype.checkLvlUp = function() {
        var isResturn = false;
        while (true) {
          if (!(this.exp >= this.totalLevel)) break;
          this.level++;
          this.exp = this.exp - this.totalLevel;
          this.totalLevel = levelConfig[this.level - 1];
          isResturn = true;
        }
        return isResturn;
      };
      BasePlayerBD.prototype.takeItemFish = function(SFSArray, fishBd) {
        var _this = this;
        if (SFSArray) {
          var audio_1 = Windown_1.Windown.FishBongDem.getSound();
          var _loop_1 = function(i, l) {
            var obj = SFSArray.getSFSObject(i);
            var amout = obj.get("Value");
            var type = obj.get("Type");
            if (void 0 != fishBd) {
              console.log("type la: " + type);
              var item_1 = Windown_1.Windown.FishBongDem.pool.getItemTakeFish(type);
              item_1.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              item_1.setPosition(fishBd.getPoint());
              item_1.runAction(cc.sequence(cc.jumpTo(.5, cc.v2(item_1.x - Windown_1.Windown.RandomNumber(-100, 100), item_1.y + 50), 50, 1), cc.delayTime(1), cc.moveTo(.6, this_1.gunFishBd.pointInScreen).easing(cc.easeBackIn()), cc.callFunc(function() {
                audio_1.playEffect(audio_1.hitIncredible);
                var nodeCountItem = Windown_1.Windown.FishBongDem.pool.getCountItem();
                nodeCountItem.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                nodeCountItem.setPosition(_this.gunFishBd.pointInScreen.x, _this.gunFishBd.pointInScreen.y + 50);
                nodeCountItem.runAction(cc.sequence(cc.moveBy(1, 0, _this.playerSiting < 3 ? 100 : -100), cc.callFunc(function() {
                  nodeCountItem.destroy();
                })));
              }), cc.scaleTo(.15, 1.1), cc.scaleTo(.15, .8), cc.delayTime(.5), cc.callFunc(function() {
                Windown_1.Windown.FishBongDem.pool.putItemTakeFish(item_1);
                _this.isMe && Windown_1.Windown.FishBongDem.fishBDView.reviceItemWhenLvlUp(type, amout);
              })));
            } else this_1.isMe && Windown_1.Windown.FishBongDem.fishBDView.reviceItemWhenLvlUp(type, amout);
          };
          var this_1 = this;
          for (var i = 0, l = SFSArray.size(); i < l; i++) _loop_1(i, l);
        }
      };
      BasePlayerBD.prototype.updateItemLevel = function(gunId) {
        var idGunNext = gunId + 1;
        var idGunPre = gunId - 1;
        idGunPre < 0 && (idGunPre = Windown_1.Windown.FishBongDem.listGunMoney.length - 1);
        idGunNext >= Windown_1.Windown.FishBongDem.listGunMoney.length && (idGunNext = 0);
        this.listitemLevel[0].setGunId(idGunPre);
        this.listitemLevel[1].setGunId(idGunNext);
      };
      BasePlayerBD.prototype.getPosCoint = function() {
        return this.getPosCoin();
      };
      BasePlayerBD.prototype.rotateGun = function(point) {
        this.gunFishBd.rotate(point);
      };
      BasePlayerBD.prototype.atack = function() {
        this.gunFishBd.stateGun.atack();
      };
      BasePlayerBD.prototype.dromBoom = function(idItemDrag) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node, pointStart;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().comingJackpot);
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/DropBoom", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.FishBongDem.fishBDView.node;
              pointStart = this.gunFishBd.pointInScreen.clone();
              this.playerSiting < 3 ? pointStart.y -= 200 : pointStart.y += 200;
              node.getComponent(DropBoom_1.default).init(pointStart, idItemDrag, this);
              return [ 2 ];
            }
          });
        });
      };
      BasePlayerBD.prototype.dromDinhBa = function(idItemDrag) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node, pointStart;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/DinhBa", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.FishBongDem.fishBDView.node;
              pointStart = this.gunFishBd.pointInScreen.clone();
              node.getComponent(DinhBa_1.default).init(pointStart, idItemDrag, this);
              return [ 2 ];
            }
          });
        });
      };
      BasePlayerBD.prototype.dropMatThan = function(idItemDrag, moneyMax, moneyCurrent, moneyGun) {
        return __awaiter(this, void 0, void 0, function() {
          var mutilLeft, pre, node, cp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              mutilLeft = (moneyMax - moneyCurrent) / moneyGun;
              if (mutilLeft < 6) return [ 2 ];
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/EyeOcean0", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = this.node.parent;
              cp = node.getComponent(MatThan_1.default);
              cp.init(this, moneyMax, moneyCurrent, idItemDrag, moneyGun);
              this.mapMatThan.set(idItemDrag, cp);
              return [ 2 ];
            }
          });
        });
      };
      BasePlayerBD.prototype.addItemDrag = function(SFSObject) {
        var type = SFSObject.get("Type");
        var id = SFSObject.get("Id");
        var item = this.getItemDrag(id);
        if (null == item) {
          item = this.creatItemDrag(type, id);
          this.listItemDrag.push(item);
          item.excuted();
          item.timeRemove = SFSObject.get("TimeRemoveNotUse");
          item.timeUse = SFSObject.get("TimeToUse");
          if (type == TypeItemDragBD_1.default.LAZE) this.gunFishBd.initGun(GUN_TYPE_BD_1.default.LAZE, id); else if (type == TypeItemDragBD_1.default.SONG_AM) this.gunFishBd.initGun(GUN_TYPE_BD_1.default.SONG_AM, id); else if (type == TypeItemDragBD_1.default.MUI_KHOAN) this.gunFishBd.initGun(GUN_TYPE_BD_1.default.MUI_KHOAN, id); else if (type == TypeItemDragBD_1.default.GUN_FIRE) {
            this.gunFishBd.initGun(GUN_TYPE_BD_1.default.FIRE, id);
            if (item.timeUse > 0) {
              var stateGun = this.gunFishBd.stateGun;
              stateGun instanceof StateGunFire_1.default && stateGun.unLock();
            }
          } else type == TypeItemDragBD_1.default.BOOM_NGUYEN_TU ? this.dromBoom(id) : type == TypeItemDragBD_1.default.DINH_BA ? this.dromDinhBa(id) : type == TypeItemDragBD_1.default.MAT_THAN && this.dropMatThan(id, SFSObject.get("custom").get("maxMn"), SFSObject.get("custom").get("cur"), SFSObject.get("MnG"));
        } else item.excuted();
      };
      BasePlayerBD.prototype.getCanTarget = function() {
        return this.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.NORMAL || this.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.FIRE || this.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET;
      };
      BasePlayerBD.prototype.getCanAuto = function() {
        if (this.isItemTarget) return false;
        return this.getCanTarget();
      };
      BasePlayerBD.prototype.removeItemDrag = function(id) {
        for (var i = 0, l = this.listItemDrag.length; i < l; i++) if (this.listItemDrag[i].id == id) {
          this.listItemDrag.splice(i, 1);
          break;
        }
      };
      BasePlayerBD.prototype.usingItemDrag = function(id, info) {
        var item = this.getItemDrag(id);
        if (null != item) {
          var type = item.type;
          item.using();
          if (type == TypeItemDragBD_1.default.LAZE) {
            var x = info.get("PointX");
            var y = info.get("PointY");
            var pointTarget = cc.v2(x, y);
            Windown_1.Windown.FishBongDem.convertVec(pointTarget);
            this.gunFishBd.rotate(pointTarget);
            this.atack();
          } else if (type == TypeItemDragBD_1.default.SONG_AM) {
            var x = info.get("PointX");
            var y = info.get("PointY");
            var pointTarget = cc.v2(x, y);
            Windown_1.Windown.FishBongDem.convertVec(pointTarget);
            this.gunFishBd.rotate(pointTarget);
            this.atack();
          } else if (type == TypeItemDragBD_1.default.MUI_KHOAN) {
            var x = info.get("PointX");
            var y = info.get("PointY");
            var pointTarget = cc.v2(x, y);
            Windown_1.Windown.FishBongDem.convertVec(pointTarget);
            this.gunFishBd.rotate(pointTarget);
            this.atack();
          } else if (type == TypeItemDragBD_1.default.GUN_FIRE) {
            var stateGun = this.gunFishBd.stateGun;
            stateGun instanceof StateGunFire_1.default && stateGun.unLock();
          } else type == TypeItemDragBD_1.default.BOOM_NGUYEN_TU || type == TypeItemDragBD_1.default.MAT_THAN;
        }
      };
      BasePlayerBD.prototype.creatItemDrag = function(type, id) {
        return new BaseItemDrag_1.default(this, type, id);
      };
      BasePlayerBD.prototype.getItemDrag = function(id) {
        for (var _i = 0, _a = this.listItemDrag; _i < _a.length; _i++) {
          var item = _a[_i];
          if (item.id == id) return item;
        }
        return null;
      };
      BasePlayerBD.prototype.updateItem = function(SFSObj) {
        this.timeItemTarget = SFSObj.getFloat("TimeItemTarget") - Windown_1.Windown.LagValue;
        this.timeItemSpeed = SFSObj.getFloat("TimeItemSpeed") - Windown_1.Windown.LagValue;
        this.timeItemIce = SFSObj.getFloat("TimeItemIce") - Windown_1.Windown.LagValue;
        this.timeItemTrieuHoi = SFSObj.getFloat("TimeItemTrieuHoi") - Windown_1.Windown.LagValue;
      };
      BasePlayerBD.prototype.cancleGun = function() {
        this.gunFishBd.cancleAtack();
      };
      BasePlayerBD.prototype.changeIndexMoneyGun = function(id) {
        this.indexMoneyGun = id;
        this.gunFishBd.setMoneyGun(id);
        if (this.isMe) {
          this.updateItemLevel(id);
          Windown_1.Windown.FishBongDem.emitNewIndexJp();
        }
      };
      BasePlayerBD.prototype.changeGun = function(type) {
        this.currentGunId = type;
        this.gunFishBd.initGun(this.currentGunId);
      };
      BasePlayerBD.prototype.setName = function(name) {
        this.lbName.string = name;
      };
      BasePlayerBD.prototype.setAva = function(SFSObject) {
        Windown_1.Windown.updateAvatar(SFSObject, this.spAva);
      };
      BasePlayerBD.prototype.pushDelay = function(moneyChange) {
        this.listDelayMoney.push(moneyChange);
        this.isMe && Windown_1.Windown.MoneyUser.pushDelayMoney(GAME_TYPE_1.default.BongDem, this.moneyCache, moneyChange);
      };
      BasePlayerBD.prototype.addGold = function(gold) {
        if (0 == gold) {
          this.checkAndFixedMoney(gold);
          return;
        }
        this.gold += gold;
        this.lbGold.setMoneyNoTime(this.gold);
        this.lbGold.node.stopAllActions();
        this.lbGold.node.scale = 1.6;
        this.lbGold.node.runAction(cc.scaleTo(.2, 1));
        var textMoney = Windown_1.Windown.FishBongDem.pool.getTextMoneyMini(this.isMe);
        this.playerSiting < 3 ? textMoney.setPosition(this.posMoneyMini.x, this.posMoneyMini.y + 30) : textMoney.setPosition(this.posMoneyMini.x, this.posMoneyMini.y - 120);
        textMoney.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        textMoney.opacity = 255;
        textMoney.scale = 0;
        textMoney.stopAllActions();
        textMoney.getComponent(cc.Label).string = "+" + gold;
        var action1 = cc.scaleTo(.1, 1).easing(cc.easeBackOut());
        var action2 = cc.delayTime(.2);
        var action3 = cc.spawn(cc.fadeTo(.1, 150), cc.scaleTo(.2, .8));
        var actionMove = cc.moveBy(1, 0, 80);
        var action4 = cc.callFunc(function() {
          Windown_1.Windown.FishBongDem.pool.putTextMoneyMini(textMoney);
        });
        textMoney.runAction(cc.sequence(cc.spawn(actionMove, cc.sequence(action1, action2, action3)), action4));
        this.checkAndFixedMoney(gold);
      };
      BasePlayerBD.prototype.checkAndFixedMoney = function(gold) {
        this.listDelayMoney.pop();
        if (this.isMe) {
          Windown_1.Windown.MoneyUser.pushDelayMoney(GAME_TYPE_1.default.BongDem, this.moneyCache, -gold);
          Windown_1.Windown.MoneyUser.updateMoney();
        }
        if (this.listDelayMoney.length < 1) {
          this.setGold(this.moneyCache);
          this.isMe && Windown_1.Windown.MoneyUser.removeDelay(GAME_TYPE_1.default.BongDem);
        }
      };
      BasePlayerBD.prototype.subGold = function(moneyGun, moneyPlayer) {
        this.gold -= moneyGun;
        this.gold < 0 && (this.gold = 0);
        this.lbGold.setMoneyNoTime(this.gold);
        this.moneyCache = moneyPlayer;
        this.isMe ? Windown_1.Windown.MoneyUser.subMoney(moneyGun, Windown_1.Windown.MoneyUser.moneyCache - moneyGun) : this.listDelayMoney.length < 1 && this.setGold(this.moneyCache);
      };
      BasePlayerBD.prototype.setGold = function(gold) {
        if (this.gold != gold) {
          this.gold = gold;
          this.lbGold.setMoneyNoTime(this.gold);
        }
      };
      BasePlayerBD.prototype.setLevel = function(level) {
        this.lbLevel.string = level;
      };
      BasePlayerBD.prototype.setExp = function(fill) {
        this.spProgressLevel.fillRange = fill;
      };
      BasePlayerBD.prototype.onClickAva = function() {
        Windown_1.Windown.UIManager.showLoading();
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("Id", this.acountId);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetInfo, SFSObject);
      };
      BasePlayerBD.prototype.getPosCoin = function() {
        return this.posBoxCoin;
      };
      BasePlayerBD.prototype.startTarget = function() {
        this.isItemTarget = true;
      };
      BasePlayerBD.prototype.setEffect = function(type, time) {
        var effect = null;
        for (var _i = 0, _a = this.listPlayerEffect; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.type == type) {
            effect = temp;
            effect.time = time;
            return;
          }
        }
        if (null == effect) {
          var node = Windown_1.Windown.FishBongDem.pool.getEffectPlayer(type);
          switch (type) {
           case TypePlayerEffectBD_1.default.ICE:
            effect = node.getComponent(PlayerUsingIce_1.default);
            this.isItemIce = true;
            break;

           case TypePlayerEffectBD_1.default.SPEED:
            effect = node.getComponent(PlayerUsingSpeed_1.default);
            this.isItemSpeed = true;
            break;

           case TypePlayerEffectBD_1.default.TARGET:
            effect = node.getComponent(PlayerUsingTarget_1.default);
            this.isItemTarget = true;
            break;

           case TypePlayerEffectBD_1.default.AUTO:
            effect = node.getComponent(PlayerUsingAuto_1.default);
            this.isItemAuto = true;
          }
        }
        if (effect) {
          this.listPlayerEffect.push(effect);
          effect.initPlayer(this, time, type);
          effect.excuted();
        }
      };
      BasePlayerBD.prototype.forceEndEffect = function(type) {
        for (var _i = 0, _a = this.listPlayerEffect; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.type == type) {
            temp.end();
            return;
          }
        }
      };
      BasePlayerBD.prototype.getPlayerEffect = function(type) {
        for (var _i = 0, _a = this.listPlayerEffect; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.type == type) return temp;
        }
        return null;
      };
      BasePlayerBD.prototype.endEffect = function(type) {
        switch (type) {
         case TypePlayerEffectBD_1.default.ICE:
          this.isItemIce = false;
          this.timeItemIce = 0;
          break;

         case TypePlayerEffectBD_1.default.SPEED:
          this.isItemSpeed = false;
          this.timeItemSpeed = 0;
          break;

         case TypePlayerEffectBD_1.default.TARGET:
          this.isItemTarget = false;
          this.timeItemTarget = 0;
          break;

         case TypePlayerEffectBD_1.default.AUTO:
          this.isItemAuto = false;
          this.timeItemAuto = 0;
        }
        for (var i = 0, l = this.listPlayerEffect.length; i < l; i++) {
          var cp = this.listPlayerEffect[i];
          if (cp.type == type) {
            this.listPlayerEffect.splice(i, 1);
            break;
          }
        }
      };
      BasePlayerBD.prototype.backToCurrentGun = function() {
        this.gunFishBd.initGun(this.currentGunId);
      };
      BasePlayerBD.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        this.gunFishBd.updateCp(dt);
        this.listItemDrag.forEach(function(v) {
          v.update(dt);
        });
        if (this.timeItemTarget > 0) {
          this.timeItemTarget -= dt;
          this.isItemTarget || this.setEffect(TypePlayerEffectBD_1.default.TARGET, this.timeItemTarget);
        }
        if (this.timeItemSpeed > 0) {
          this.timeItemSpeed -= dt;
          this.isItemSpeed || this.setEffect(TypePlayerEffectBD_1.default.SPEED, this.timeItemSpeed);
        }
        if (this.timeItemIce > 0) {
          this.timeItemIce -= dt;
          this.isItemIce || this.setEffect(TypePlayerEffectBD_1.default.ICE, this.timeItemIce);
          this.isItemIce = true;
        }
        if (this.timeItemAuto > 0) {
          this.timeItemAuto -= dt;
          this.isItemAuto || this.setEffect(TypePlayerEffectBD_1.default.AUTO, this.timeItemAuto);
          this.isItemAuto = true;
        }
        this.timeItemTrieuHoi > 0 && (this.timeItemTrieuHoi -= dt);
      };
      __decorate([ property(LbMoneyChange_1.default) ], BasePlayerBD.prototype, "lbGold", void 0);
      __decorate([ property(cc.Label) ], BasePlayerBD.prototype, "lbName", void 0);
      __decorate([ property(cc.Label) ], BasePlayerBD.prototype, "lbLevel", void 0);
      __decorate([ property(cc.Label) ], BasePlayerBD.prototype, "lbTimeCD", void 0);
      __decorate([ property(cc.Sprite) ], BasePlayerBD.prototype, "spAva", void 0);
      __decorate([ property(GunFishBD_1.default) ], BasePlayerBD.prototype, "gunFishBd", void 0);
      __decorate([ property(cc.Sprite) ], BasePlayerBD.prototype, "spProgressLevel", void 0);
      __decorate([ property(cc.Node) ], BasePlayerBD.prototype, "parentPanel", void 0);
      __decorate([ property([ ItemLevelController_1.default ]) ], BasePlayerBD.prototype, "listitemLevel", void 0);
      BasePlayerBD = __decorate([ ccclass ], BasePlayerBD);
      return BasePlayerBD;
    }(cc.Component);
    exports.default = BasePlayerBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Obs/ItemLevelController": void 0,
    "../../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Boom/DinhBa": "DinhBa",
    "../Boom/DropBoom": "DropBoom",
    "../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "../Gun/GunFishBD": "GunFishBD",
    "../Gun/MatThan": "MatThan",
    "../Gun/StateGunFire": "StateGunFire",
    "./BaseItemDrag": "BaseItemDrag",
    "./Effect/PlayerUsingAuto": "PlayerUsingAuto",
    "./Effect/PlayerUsingIce": "PlayerUsingIce",
    "./Effect/PlayerUsingSpeed": "PlayerUsingSpeed",
    "./Effect/PlayerUsingTarget": "PlayerUsingTarget",
    "./Effect/TypePlayerEffectBD": "TypePlayerEffectBD",
    "./TypeItemDragBD": "TypeItemDragBD"
  } ],
  BaseStateGunBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5763ypNBBOuY6KXh7jNeVw", "BaseStateGunBD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var BaseStateGunBD = function() {
      function BaseStateGunBD(gunBD, id) {
        this.type = 0;
        this.gunBD = null;
        this.indexMoneyGun = null;
        this.idFishTarget = -1;
        this.indexColider = -1;
        this.timeDelay = 0;
        this.timeUpdate = 0;
        this.speedBullet = 1e3;
        this.idGunNow = -1;
        this.gunBD = gunBD;
        this.type = id;
      }
      BaseStateGunBD.prototype.removeNodePanel = function() {
        var node = this.gunBD.playerBD.mapNodePanel.get(this.idGunNow);
        if (void 0 != node) {
          var cp = node.getComponent(PanelPoint_1.default);
          cp.end();
        }
      };
      return BaseStateGunBD;
    }();
    exports.default = BaseStateGunBD;
    cc._RF.pop();
  }, {
    "../DeadBevhavior/PanelPoint": "PanelPoint"
  } ],
  BulletFire: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec658oejMdJ1Z6tZ9Pqi+bs", "BulletFire");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseBulletBD_1 = require("./BaseBulletBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BulletFire = function(_super) {
      __extends(BulletFire, _super);
      function BulletFire() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.byFish = -1;
        _this.listIdFishCache = [];
        _this.panelPoint = null;
        return _this;
      }
      BulletFire.prototype.creat = function(obj, gunBD) {
        this.byFish = obj.get("byFish");
        this.unschedule(this.sendToServer);
        this.schedule(this.sendToServer, .2);
        this.listIdFishCache.length = 0;
      };
      BulletFire.prototype.onCollision = function(fish, colider) {};
      BulletFire.prototype.onCollisionStay = function(other, self) {
        var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(other.tag);
        if (fish) {
          var id = fish.fishId;
          var type = fish.fishType;
          this.listIdFishCache.includes(id) || type == FISH_TYPE_1.default.MUI_KHOAN || type == FISH_TYPE_1.default.SONG_AM || type == FISH_TYPE_1.default.LAZE || type == FISH_TYPE_1.default.BOOM || type == FISH_TYPE_1.default.GUN_FIRE || type == FISH_TYPE_1.default.VONG_QUAY || this.listIdFishCache.push(id);
        }
      };
      BulletFire.prototype.remove = function() {};
      BulletFire.prototype.update = function(dt) {};
      BulletFire.prototype.setPanel = function(lb) {
        this.panelPoint = lb;
      };
      BulletFire.prototype.sendToServer = function() {
        if (this.listIdFishCache.length > 0) {
          var sfsArray_1 = ConectManager_1.ConectManager.getIns().getSFSArray();
          this.listIdFishCache.forEach(function(v) {
            sfsArray_1.addInt(v);
          });
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("Type", TypeItemDragBD_1.default.GUN_FIRE);
          SFSObject.putLong("byFish", this.byFish);
          SFSObject.putLong("Id", this.byFish);
          SFSObject.putSFSArray("ListFishId", sfsArray_1);
          SFSObject.putInt("lastMoneyRevice", this.panelPoint.moneyCurrent);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
          this.listIdFishCache.length = 0;
        }
      };
      BulletFire.prototype.start = function() {};
      BulletFire = __decorate([ ccclass ], BulletFire);
      return BulletFire;
    }(BaseBulletBD_1.default);
    exports.default = BulletFire;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseBulletBD": "BaseBulletBD"
  } ],
  BulletLazeBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4783j8kwRD9pqpUj7bVq5h", "BulletLazeBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseBulletBD_1 = require("./BaseBulletBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BulletLazeBD = function(_super) {
      __extends(BulletLazeBD, _super);
      function BulletLazeBD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funDeactive = null;
        _this.funDelaySendFish = null;
        _this.SFSArrayFish = null;
        _this.byFish = -1;
        return _this;
      }
      BulletLazeBD.prototype.creat = function(obj, gunBD) {};
      BulletLazeBD.prototype.init = function(timeLife, byFish) {
        var _this = this;
        this.node.active = true;
        this.byFish = byFish;
        this.SFSArrayFish = ConectManager_1.ConectManager.getIns().getSFSArray();
        this.unschedule(this.funDeactive);
        this.unschedule(this.funDelaySendFish);
        this.scheduleOnce(this.funDeactive = function() {
          _this.sendToServer();
          _this.unschedule(_this.funDelaySendFish);
          _this.node.active = false;
        }, timeLife);
        this.schedule(this.funDelaySendFish = function() {
          _this.sendToServer();
        }, .5);
      };
      BulletLazeBD.prototype.sendToServer = function() {
        this.unschedule(this.funDelaySendFish);
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("Type", TypeItemDragBD_1.default.LAZE);
        SFSObject.putLong("byFish", this.byFish);
        SFSObject.putLong("Id", this.byFish);
        SFSObject.putSFSArray("ListFishId", this.SFSArrayFish);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
        this.SFSArrayFish = ConectManager_1.ConectManager.getIns().getSFSArray();
      };
      BulletLazeBD.prototype.onCollision = function(fish) {
        fish.getCanColision() && this.SFSArrayFish.addInt(fish.fishId);
      };
      BulletLazeBD.prototype.remove = function() {};
      BulletLazeBD.prototype.update = function(dt) {};
      BulletLazeBD = __decorate([ ccclass ], BulletLazeBD);
      return BulletLazeBD;
    }(BaseBulletBD_1.default);
    exports.default = BulletLazeBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseBulletBD": "BaseBulletBD"
  } ],
  BulletMatThan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f1c0GXoFVABaUAtzzmOMF0", "BulletMatThan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BulletMatThan = function(_super) {
      __extends(BulletMatThan, _super);
      function BulletMatThan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isMe = false;
        _this.fishTarget = void 0;
        _this.speed = 500;
        _this.posCashe = cc.v2(0, 0);
        _this.matThan = null;
        _this.isDeadtroy = false;
        _this.currentPosColider = cc.v2(0, 0);
        return _this;
      }
      BulletMatThan.prototype.creat = function(fishTarget, matThan, isMe) {
        this.node.children[0].active = true;
        this.node.children[1].active = false;
        this.fishTarget = fishTarget;
        this.isMe = isMe;
        this.matThan = matThan;
        this.isDeadtroy = false;
        this.getComponent(cc.BoxCollider).enabled = true;
      };
      BulletMatThan.prototype.getVec = function(posTarget) {
        var viewPos2 = null;
        if (this.isDeadtroy) return viewPos2;
        if (posTarget) {
          this.posCashe = posTarget.clone();
          viewPos2 = posTarget;
        } else {
          this.matThan.removeBullet(this);
          viewPos2 = this.posCashe;
          cc.Vec2.distance(this.node.getPosition(), viewPos2) < 5 && !this.isDeadtroy && this.effectDestroy();
        }
        var diff = cc.Vec2.subtract(cc.v2(), viewPos2, this.node.getPosition());
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        var speed = this.speed;
        var vX = speed * Math.sin(angle * Math.PI / 180);
        var vY = speed * Math.cos(angle * Math.PI / 180);
        this.node.angle = -angle;
        return cc.v2(vX, vY);
      };
      BulletMatThan.prototype.effectDestroy = function() {
        this.matThan.putBullet(this);
        this.isDeadtroy = true;
      };
      BulletMatThan.prototype.creatLuoi = function() {
        this.isDeadtroy = true;
        this.node.children[0].active = false;
        var net = this.node.children[1];
        net.active = true;
        net.scale = .8;
        net.opacity = 255;
        var action = cc.scaleTo(.2, 1);
        var action2 = cc.scaleTo(.25, .3);
        var action3 = cc.fadeOut(.25).easing(cc.easeOut(1));
        var action4 = cc.callFunc(this.effectDestroy, this);
        net.stopAllActions();
        net.runAction(cc.sequence(action, cc.spawn(action2, action3), action4));
      };
      BulletMatThan.prototype.onCollisionEnter = function(other, self) {
        var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(other.tag);
        if (fish && fish == this.fishTarget && fish.getCanColision()) {
          if (this.isDeadtroy || !fish.getCanColision()) return;
          fish.onColision(other);
          this.matThan.removeBullet(this);
          this.creatLuoi();
          this.getComponent(cc.BoxCollider).enabled = false;
          if (this.isMe) {
            var listId = ConectManager_1.ConectManager.getIns().getSFSArray();
            listId.addInt(fish.fishId);
            var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
            SFSObject.putInt("Type", TypeItemDragBD_1.default.MAT_THAN);
            SFSObject.putLong("byFish", this.matThan.idItemDrag);
            SFSObject.putLong("Id", this.matThan.idItemDrag);
            SFSObject.putSFSArray("ListFishId", listId);
            Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
          }
        }
      };
      BulletMatThan.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        var vec = this.getVec(this.currentPosColider);
        if (vec) {
          var vx = vec.x * dt;
          var vy = vec.y * dt;
          var x = this.node.x + vx;
          var y = this.node.y + vy;
          this.node.x = x;
          this.node.y = y;
        }
      };
      BulletMatThan = __decorate([ ccclass ], BulletMatThan);
      return BulletMatThan;
    }(cc.Component);
    exports.default = BulletMatThan;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD"
  } ],
  BulletMuiKhoanBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9ef2hnYLBOt7g+Pu8ToUma", "BulletMuiKhoanBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseBulletBD_1 = require("./BaseBulletBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var state = {
      normal: 0,
      ganEnd: 1,
      end: 2,
      stop: 3
    };
    var BulletMuiKhoanBD = function(_super) {
      __extends(BulletMuiKhoanBD, _super);
      function BulletMuiKhoanBD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spBinhThuong = null;
        _this.spGanHet = null;
        _this.spHet = null;
        _this.funDeactive = null;
        _this.funDelaySendFish = null;
        _this.SFSArrayFish = null;
        _this.byFish = -1;
        _this.limitTop = 360;
        _this.limitBottom = -360;
        _this.limitRight = 640;
        _this.limitLeft = -640;
        _this.vx = 0;
        _this.vy = 0;
        _this.isMe = false;
        _this.speed = 0;
        _this.state = state.normal;
        _this.timeTotalLife = 0;
        _this.vXS = -1;
        _this.vYS = -1;
        _this.panelPoint = null;
        return _this;
      }
      BulletMuiKhoanBD.prototype.creat = function(obj, gunBD, isMe) {
        void 0 === isMe && (isMe = false);
        var vX = obj.getFloat("VelocityX");
        var vY = obj.getFloat("VelocityY");
        var sX = obj.getFloat("PositionX");
        var sY = obj.getFloat("PositionY");
        var angle = obj.getFloat("Angle");
        var speed = obj.getInt("Speed");
        this.speed = speed;
        this.gunBD = gunBD;
        this.node.angle = -angle;
        this.node.x = sX;
        this.node.y = sY;
        this.vx = vX;
        this.vy = vY;
        this.vXS = vX;
        this.vYS = vY;
        this.isMe = isMe;
        this.byFish = obj.get("byFish");
        this.timeTotalLife = obj.get("timeTotalLife");
        this.SFSArrayFish = ConectManager_1.ConectManager.getIns().getSFSArray();
        this.node.children[0].angle = 0;
        this.node.children[1].active = false;
        this.unschedule(this.sendToServer);
        this.schedule(this.sendToServer, .1);
        this.node.children[0].active = true;
        this.node.children[2].active = true;
      };
      BulletMuiKhoanBD.prototype.setPanel = function(lb) {
        this.panelPoint = lb;
      };
      BulletMuiKhoanBD.prototype.sendToServer = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("Type", TypeItemDragBD_1.default.MUI_KHOAN);
        SFSObject.putLong("byFish", this.byFish);
        SFSObject.putLong("Id", this.byFish);
        SFSObject.putSFSArray("ListFishId", this.SFSArrayFish);
        SFSObject.putInt("lastMoneyRevice", this.panelPoint.moneyCurrent);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
        this.SFSArrayFish = ConectManager_1.ConectManager.getIns().getSFSArray();
      };
      BulletMuiKhoanBD.prototype.onCollision = function(fish, colider) {
        if (fish.getCanColision()) {
          this.SFSArrayFish.addInt(fish.fishId);
          var node_1 = Windown_1.Windown.FishBongDem.pool.getVaChamMuiKhoan();
          node_1.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
          var worldPos2 = colider.node.parent.convertToWorldSpaceAR(colider.node.getPosition());
          var viewPos2 = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos2);
          node_1.setPosition(viewPos2);
          node_1.opacity = 255;
          node_1.scale = 0;
          node_1.stopAllActions();
          node_1.runAction(cc.sequence(cc.scaleTo(.1, 1), cc.fadeOut(.3), cc.callFunc(function() {
            Windown_1.Windown.FishBongDem.pool.putVaChamMuiKhoan(node_1);
          })));
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffectNoStop(audio.trungMuiKhoan);
        }
      };
      BulletMuiKhoanBD.prototype.remove = function() {};
      BulletMuiKhoanBD.prototype.checkState = function() {
        var _this = this;
        if (this.timeTotalLife > 4) {
          if (this.state != state.normal) {
            this.vx = this.vXS;
            this.vy = this.vYS;
            this.getComponentInChildren(cc.Sprite).spriteFrame = this.spBinhThuong;
          }
          this.state = state.normal;
        } else if (this.timeTotalLife > 2) {
          if (this.state != state.ganEnd) {
            this.node.children[2].active = false;
            this.vx = .6 * this.vXS;
            this.vy = .6 * this.vYS;
            this.getComponentInChildren(cc.Sprite).spriteFrame = this.spGanHet;
          }
          this.state = state.ganEnd;
        } else if (this.timeTotalLife > 0) {
          if (this.state != state.end) {
            this.node.children[0].runAction(cc.rotateBy(2, 720));
            this.vx = .3 * this.vXS;
            this.vy = .3 * this.vYS;
            this.getComponentInChildren(cc.Sprite).spriteFrame = this.spHet;
          }
          this.state = state.end;
        } else {
          if (this.state != state.stop) {
            this.unschedule(this.sendToServer);
            this.node.children[0].active = false;
            var spine = this.getComponentInChildren(sp.Skeleton);
            spine.node.active = true;
            spine.setAnimation(0, "animation", false);
            Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.1);
            this.scheduleOnce(function() {
              var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("Type", TypeItemDragBD_1.default.END_MUI_KHOAN);
              sfsObj.putLong("Id", _this.byFish + 1);
              Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
              var arryId = ConectManager_1.ConectManager.getIns().getSFSArray();
              var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
              var iractor = mapFish.values();
              var result = iractor.next();
              while (!result.done) {
                var value = result.value;
                result = iractor.next();
                var mag = cc.Vec2.distance(value.getPoint(), _this.node.getPosition());
                value.isInScreen() && value.fishType < 8 && mag < 300 && arryId.addInt(value.fishId);
              }
              var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
              SFSObject.putInt("Type", TypeItemDragBD_1.default.END_MUI_KHOAN);
              SFSObject.putLong("byFish", _this.byFish);
              SFSObject.putLong("Id", _this.byFish + 1);
              SFSObject.putSFSArray("ListFishId", arryId);
              SFSObject.putInt("lastMoneyRevice", _this.panelPoint.moneyCurrent);
              Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
              Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().fishBoom);
              _this.scheduleOnce(function() {
                Windown_1.Windown.FishBongDem.pool.putBulletMuiKhoan(_this.node);
              }, 1.5);
            }, .2);
          }
          this.state = state.stop;
        }
      };
      BulletMuiKhoanBD.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        this.timeTotalLife -= dt;
        this.checkState();
        if (this.timeTotalLife < 0) return;
        var vx = this.vx * dt;
        var vy = this.vy * dt;
        var x = this.node.x + vx;
        var y = this.node.y + vy;
        if (x >= this.limitRight || x <= this.limitLeft) {
          Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.05);
          this.vx *= -1;
          this.vXS *= -1;
          this.node.angle = -this.node.angle;
          x = x >= this.limitRight ? this.limitRight - 1 : this.limitLeft + 1;
        }
        if (y >= this.limitTop || y <= this.limitBottom) {
          Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.05);
          this.vy *= -1;
          this.vYS *= -1;
          this.node.angle = -180 - this.node.angle;
          y = y >= this.limitTop ? this.limitTop - 1 : this.limitBottom + 1;
        }
        this.node.x = x;
        this.node.y = y;
      };
      __decorate([ property(cc.SpriteFrame) ], BulletMuiKhoanBD.prototype, "spBinhThuong", void 0);
      __decorate([ property(cc.SpriteFrame) ], BulletMuiKhoanBD.prototype, "spGanHet", void 0);
      __decorate([ property(cc.SpriteFrame) ], BulletMuiKhoanBD.prototype, "spHet", void 0);
      BulletMuiKhoanBD = __decorate([ ccclass ], BulletMuiKhoanBD);
      return BulletMuiKhoanBD;
    }(BaseBulletBD_1.default);
    exports.default = BulletMuiKhoanBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseBulletBD": "BaseBulletBD"
  } ],
  BulletNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e784kwooxEireyBGENd22q", "BulletNormal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var BaseBulletBD_1 = require("./BaseBulletBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BulletNormal = function(_super) {
      __extends(BulletNormal, _super);
      function BulletNormal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.limitTop = 360;
        _this.limitBottom = -360;
        _this.limitRight = 640;
        _this.limitLeft = -640;
        _this.lifeTime = 4;
        _this._idBullet = 0;
        _this.isCanColision = false;
        _this.type = null;
        _this.vx = 0;
        _this.vy = 0;
        _this.fishIdTarget = -1;
        _this.isMe = false;
        _this.fishTarget = void 0;
        _this.speed = 0;
        _this.coliderTarget = null;
        return _this;
      }
      BulletNormal.prototype.creat = function(obj, gunBD, isMe) {
        void 0 === isMe && (isMe = false);
        var vX = obj.getFloat("VelocityX");
        var vY = obj.getFloat("VelocityY");
        var sX = obj.getFloat("PositionX");
        var sY = obj.getFloat("PositionY");
        var angle = obj.getFloat("Angle");
        var speed = obj.getInt("Speed");
        this.speed = speed;
        this.gunBD = gunBD;
        this.getComponent(cc.BoxCollider).enabled = true;
        this.type = obj.getInt("GunType");
        this._idBullet = obj.get("BulletId");
        this.fishIdTarget = obj.getInt("FishIdTarget") || -1;
        this.fishTarget = Windown_1.Windown.FishBongDem.fishMng.getFishById(this.fishIdTarget);
        this.fishTarget && this.fishTarget.getListColider().length > 0 && (this.coliderTarget = this.fishTarget.getListColider()[obj.get("IC")]);
        this.node.angle = -angle;
        this.node.x = sX;
        this.node.y = sY;
        this.lifeTime = 4;
        this.vx = vX;
        this.vy = vY;
        this.isCanColision = true;
        this.isMe = isMe;
        this.node.children[0].active = true;
        this.node.children[1].active = false;
      };
      BulletNormal.prototype.onCollision = function(fish, colider) {
        this.onColisionFishNormal(fish, colider);
      };
      BulletNormal.prototype.onColisionFishNormal = function(cpFish, colider) {
        if (!this.isCanColision || !cpFish.getCanColision()) return;
        if (-1 != this.fishIdTarget && cpFish.fishId != this.fishIdTarget) return;
        cpFish.onColision(colider);
        this.creatLuoi();
        this.getComponent(cc.BoxCollider).enabled = false;
        this.isCanColision = false;
        if (this.isMe) {
          var msg = ConectManager_1.ConectManager.getIns().getSFSObj();
          msg.putLong("BulletId", this._idBullet);
          msg.putInt("FishId", cpFish.fishId);
          msg.putInt("FishType", cpFish.fishType);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishColisionBD, msg);
        }
      };
      BulletNormal.prototype.update = function(dt) {
        if (!this.isCanColision) return;
        dt *= cc.director.getScheduler().getTimeScale();
        this.getVec();
        var vx = this.vx * dt;
        var vy = this.vy * dt;
        var x = this.node.x + vx;
        var y = this.node.y + vy;
        if (x >= this.limitRight || x <= this.limitLeft) {
          this.vx *= -1;
          this.lifeTime--;
          this.fishIdTarget = -1;
          this.node.angle = -this.node.angle;
          x = x >= this.limitRight ? this.limitRight - 1 : this.limitLeft + 1;
          this.lifeTime < 1 && this.remove();
        }
        if (y >= this.limitTop || y <= this.limitBottom) {
          this.vy *= -1;
          this.node.angle = -180 - this.node.angle;
          y = y >= this.limitTop ? this.limitTop - 1 : this.limitBottom + 1;
          this.lifeTime--;
          this.fishIdTarget = -1;
          this.lifeTime < 1 && this.remove();
        }
        this.node.x = x;
        this.node.y = y;
      };
      BulletNormal.prototype.getVec = function() {
        if (-1 != this.fishIdTarget && this.fishTarget && this.coliderTarget && this.coliderTarget.node && this.fishTarget.isInList) {
          var worldPos2 = this.coliderTarget.node.parent.convertToWorldSpaceAR(this.coliderTarget.node.getPosition());
          var viewPos2 = Windown_1.Windown.FishBongDem.fishBDView.parentFish.convertToNodeSpaceAR(worldPos2);
          var diff = viewPos2.subSelf(this.node.getPosition());
          var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
          var speed = this.speed;
          var vX = speed * Math.sin(angle * Math.PI / 180);
          var vY = speed * Math.cos(angle * Math.PI / 180);
          this.vx = vX;
          this.vy = vY;
          this.node.angle = -angle;
        }
        return cc.v2(this.vx, this.vy);
      };
      BulletNormal.prototype.creatLuoi = function() {
        this.node.children[0].active = false;
        var net = this.node.children[1];
        net.active = true;
        net.scale = .8;
        net.opacity = 255;
        var action = cc.scaleTo(.2, 1);
        var action2 = cc.scaleTo(.25, .3);
        var action3 = cc.fadeOut(.25).easing(cc.easeOut(1));
        var action4 = cc.callFunc(this.remove, this);
        net.stopAllActions();
        net.runAction(cc.sequence(action, cc.spawn(action2, action3), action4));
      };
      BulletNormal.prototype.remove = function() {
        this.fishTarget = null;
        this.gunBD.putButtletNormal(this.node);
      };
      BulletNormal = __decorate([ ccclass ], BulletNormal);
      return BulletNormal;
    }(BaseBulletBD_1.default);
    exports.default = BulletNormal;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "./BaseBulletBD": "BaseBulletBD"
  } ],
  BulletSongAmBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0337fHJ7xPzYGnmR4F2Uav", "BulletSongAmBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseBulletBD_1 = require("./BaseBulletBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BulletSongAmBD = function(_super) {
      __extends(BulletSongAmBD, _super);
      function BulletSongAmBD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funDeactive = null;
        _this.funDelaySendFish = null;
        _this.SFSArrayFish = null;
        _this.byFish = -1;
        return _this;
      }
      BulletSongAmBD.prototype.creat = function(obj, gunBD) {};
      BulletSongAmBD.prototype.init = function(timeLife, byFish) {
        var _this = this;
        this.node.active = true;
        this.byFish = byFish;
        this.SFSArrayFish = ConectManager_1.ConectManager.getIns().getSFSArray();
        this.unschedule(this.funDeactive);
        this.unschedule(this.funDelaySendFish);
        this.scheduleOnce(this.funDeactive = function() {
          _this.sendToServer();
          _this.unschedule(_this.funDelaySendFish);
          _this.node.active = false;
        }, timeLife);
        this.schedule(this.funDelaySendFish = function() {
          _this.sendToServer();
        }, .5);
      };
      BulletSongAmBD.prototype.sendToServer = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putInt("Type", TypeItemDragBD_1.default.SONG_AM);
        SFSObject.putLong("byFish", this.byFish);
        SFSObject.putLong("Id", this.byFish);
        SFSObject.putSFSArray("ListFishId", this.SFSArrayFish);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
        this.SFSArrayFish = ConectManager_1.ConectManager.getIns().getSFSArray();
      };
      BulletSongAmBD.prototype.onCollision = function(fish) {
        fish.getCanColision() && this.SFSArrayFish.addInt(fish.fishId);
      };
      BulletSongAmBD.prototype.remove = function() {};
      BulletSongAmBD.prototype.update = function(dt) {};
      BulletSongAmBD = __decorate([ ccclass ], BulletSongAmBD);
      return BulletSongAmBD;
    }(BaseBulletBD_1.default);
    exports.default = BulletSongAmBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseBulletBD": "BaseBulletBD"
  } ],
  CODE_EVT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf90fPO1FVMz6hLkFqxnblM", "CODE_EVT");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CODE_EVT = function() {
      function CODE_EVT() {}
      CODE_EVT.OtherJoinBDRoom = "otherJoinBDRoom";
      CODE_EVT.CreatFishBD = "creatFishBD";
      CODE_EVT.ChangeMoneyGun = "changeMoneyGun";
      CODE_EVT.RemoveListFishBD = "removeListFishBD";
      CODE_EVT.GunAtackBD = "gunAtackBD";
      CODE_EVT.FishColisionBD = "fishColisionBD";
      CODE_EVT.FishSpecialColisionBD = "fishSpecialColisionBD";
      CODE_EVT.IceAllFishBD = "iceAllFishBD";
      CODE_EVT.RemoveAllFish = "removeAllFish";
      CODE_EVT.PlayerUsingItemFishBD = "playerUsingItemFishBD";
      CODE_EVT.NotFindFishBD = "notFindFishBD";
      CODE_EVT.InfoFishRoomBD = "infoFishRoomBD";
      CODE_EVT.SetTimeFishEffectBD = "setTimeFishEffectBD";
      CODE_EVT.TimeOutPlayBD = "timeOutPlayBD";
      CODE_EVT.AddItemDrag = "addItemDrag";
      CODE_EVT.UsingItemDrag = "usingItemDrag";
      CODE_EVT.ChangeGunFishBD = "changeGunFishBD";
      CODE_EVT.Upacingame = "upacingame";
      CODE_EVT.RequestLeaveRoom = "requestLeaveRoom";
      CODE_EVT.RotateGun = "rotateGun";
      CODE_EVT.GetLogJackpot = "getLogJackpot";
      CODE_EVT.TakeItemFish = "takeItemFish";
      CODE_EVT.MatThanAtack = "mtat";
      CODE_EVT.RemoveMatThan = "rmmt";
      CODE_EVT.TrieuHoi = "th";
      return CODE_EVT;
    }();
    exports.default = CODE_EVT;
    cc._RF.pop();
  }, {} ],
  CamMayBongDem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce29evF3QxKWayplje1FPaw", "CamMayBongDem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var TypePlayerEffectBD_1 = require("./Player/Effect/TypePlayerEffectBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.toggleStart = null;
        _this.pageTime = null;
        _this.listTime = [ 300, 900, 1800, 3600, 7200 ];
        _this.isAuto = false;
        return _this;
      }
      NewClass.prototype.show = function() {
        this.node.active = true;
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      NewClass.prototype.onClickChangeTime = function(event, data) {
        "+" == data ? this.pageTime.scrollToPage(this.pageTime.getCurrentPageIndex() + 1, .3) : this.pageTime.scrollToPage(this.pageTime.getCurrentPageIndex() - 1, .3);
        this.pageTime.getCurrentPageIndex() == this.pageTime.getPages().length - 1 ? cc.find("Time/add", this.node).getComponent(cc.Button).interactable = false : cc.find("Time/add", this.node).getComponent(cc.Button).interactable = true;
        0 == this.pageTime.getCurrentPageIndex() ? cc.find("Time/sub", this.node).getComponent(cc.Button).interactable = false : cc.find("Time/sub", this.node).getComponent(cc.Button).interactable = true;
      };
      NewClass.prototype.onToggle = function() {
        var time = this.listTime[this.pageTime.getCurrentPageIndex()];
        if (this.toggleStart.isChecked) {
          this.onClickClose();
          Windown_1.Windown.FishBongDem.me.timeItemAuto = time;
        } else Windown_1.Windown.FishBongDem.me.forceEndEffect(TypePlayerEffectBD_1.default.AUTO);
      };
      NewClass.prototype.disableToggle = function() {
        this.toggleStart.isChecked = false;
        this.toggleStart.checkMark.node.active = false;
      };
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "toggleStart", void 0);
      __decorate([ property(cc.PageView) ], NewClass.prototype, "pageTime", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0,
    "./Player/Effect/TypePlayerEffectBD": "TypePlayerEffectBD"
  } ],
  ColisionBoomNguyenTu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c359IUSINLDqxBy7ak0DpZ", "ColisionBoomNguyenTu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishDeaditemDrag_1 = require("./BaseFishDeaditemDrag");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionBoomNguyenTu = function(_super) {
      __extends(ColisionBoomNguyenTu, _super);
      function ColisionBoomNguyenTu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionBoomNguyenTu.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, _b, _i, temp;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              _a = [];
              for (_b in this.listFishValue) _a.push(_b);
              _i = 0;
              _c.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 4 ];
              temp = _a[_i];
              this.handleMoneydAdd(this.listFishValue[temp]);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.2) ];

             case 2:
              _c.sent();
              _c.label = 3;

             case 3:
              _i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      ColisionBoomNguyenTu.prototype.getNode = function() {
        var node = this.player.mapNodePanel.get(this.idByFish);
        if (void 0 == node) return null;
        return node;
      };
      ColisionBoomNguyenTu.prototype.end = function() {};
      ColisionBoomNguyenTu.prototype.handleMoneydAdd = function(money) {
        var nodePanel = this.getNode();
        if (nodePanel) {
          this.nodePanel = nodePanel.getComponent(PanelPoint_1.default);
          this.nodePanel.addMoney(money);
        }
      };
      return ColisionBoomNguyenTu;
    }(BaseFishDeaditemDrag_1.default);
    exports.default = ColisionBoomNguyenTu;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishDeaditemDrag": "BaseFishDeaditemDrag",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionCrabBoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2094+14WpM8739szj2x1kn", "ColisionCrabBoom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ColisionCrab_1 = require("./ColisionCrab");
    var ColisionCrabBoom = function(_super) {
      __extends(ColisionCrabBoom, _super);
      function ColisionCrabBoom() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ColisionCrabBoom.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            _super.prototype.excuted.call(this);
            this.nodePanel && this.nodePanel.end();
            return [ 2 ];
          });
        });
      };
      return ColisionCrabBoom;
    }(ColisionCrab_1.default);
    exports.default = ColisionCrabBoom;
    cc._RF.pop();
  }, {
    "./ColisionCrab": "ColisionCrab"
  } ],
  ColisionCrabEndMuiKhoan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38c7fs+Qp5Gqof0nQ5wwUU/", "ColisionCrabEndMuiKhoan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ColisionCrab_1 = require("./ColisionCrab");
    var ColisionCrabEndMuiKhoan = function(_super) {
      __extends(ColisionCrabEndMuiKhoan, _super);
      function ColisionCrabEndMuiKhoan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionCrabEndMuiKhoan.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            _super.prototype.excuted.call(this);
            this.nodePanel && this.nodePanel.end();
            return [ 2 ];
          });
        });
      };
      ColisionCrabEndMuiKhoan.prototype.getPoolNode = function() {
        return Windown_1.Windown.FishBongDem.pool.getPanelMuiKhoan();
      };
      return ColisionCrabEndMuiKhoan;
    }(ColisionCrab_1.default);
    exports.default = ColisionCrabEndMuiKhoan;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./ColisionCrab": "ColisionCrab"
  } ],
  ColisionCrabGunFire: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8982dhlNr5CIpd2V8B1i4yu", "ColisionCrabGunFire");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishDeaditemDrag_1 = require("./BaseFishDeaditemDrag");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionCrabGunFire = function(_super) {
      __extends(ColisionCrabGunFire, _super);
      function ColisionCrabGunFire() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionCrabGunFire.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, _b, _i, temp;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              _a = [];
              for (_b in this.listFishValue) _a.push(_b);
              _i = 0;
              _c.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 4 ];
              temp = _a[_i];
              this.handleMoneydAdd(this.listFishValue[temp]);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.2) ];

             case 2:
              _c.sent();
              _c.label = 3;

             case 3:
              _i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      ColisionCrabGunFire.prototype.getNode = function() {
        var node = this.player.mapNodePanel.get(this.idByFish);
        if (void 0 == node) return null;
        return node;
      };
      ColisionCrabGunFire.prototype.putNode = function(node) {
        Windown_1.Windown.FishBongDem.pool.putPanelLaze(node);
        this.player.mapNodePanel.delete(this.idByFish);
      };
      ColisionCrabGunFire.prototype.getPoolNode = function() {
        return Windown_1.Windown.FishBongDem.pool.getPanelLaze();
      };
      ColisionCrabGunFire.prototype.end = function() {};
      ColisionCrabGunFire.prototype.handleMoneydAdd = function(money) {
        var nodePanel = this.getNode();
        if (nodePanel) {
          this.nodePanel = nodePanel.getComponent(PanelPoint_1.default);
          this.nodePanel.addMoney(money);
        }
      };
      return ColisionCrabGunFire;
    }(BaseFishDeaditemDrag_1.default);
    exports.default = ColisionCrabGunFire;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishDeaditemDrag": "BaseFishDeaditemDrag",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionCrabMuiKhoan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8834b9abh9Lv5h5BRYygtXJ", "ColisionCrabMuiKhoan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var ColisionCrab_1 = require("./ColisionCrab");
    var ColisionCrabMuiKhoan = function(_super) {
      __extends(ColisionCrabMuiKhoan, _super);
      function ColisionCrabMuiKhoan() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ColisionCrabMuiKhoan.prototype.getPoolNode = function() {
        return Windown_1.Windown.FishBongDem.pool.getPanelMuiKhoan();
      };
      return ColisionCrabMuiKhoan;
    }(ColisionCrab_1.default);
    exports.default = ColisionCrabMuiKhoan;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./ColisionCrab": "ColisionCrab"
  } ],
  ColisionCrabSongAm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33d13lVQ4JEKKXMWMa7W/L+", "ColisionCrabSongAm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var ColisionCrab_1 = require("./ColisionCrab");
    var ColisionCrabSongAm = function(_super) {
      __extends(ColisionCrabSongAm, _super);
      function ColisionCrabSongAm() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ColisionCrabSongAm.prototype.getPoolNode = function() {
        return Windown_1.Windown.FishBongDem.pool.getPanelSongAm();
      };
      return ColisionCrabSongAm;
    }(ColisionCrab_1.default);
    exports.default = ColisionCrabSongAm;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./ColisionCrab": "ColisionCrab"
  } ],
  ColisionCrab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9df77QN+RxIMYKEwU96ceOk", "ColisionCrab");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishDeadNormal_1 = require("../Fish/DeadEffect/FishDeadNormal");
    var FishDeadNormalRd_1 = require("../Fish/DeadEffect/FishDeadNormalRd");
    var BaseFishColision_1 = require("./BaseFishColision");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionCrab = function(_super) {
      __extends(ColisionCrab, _super);
      function ColisionCrab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionCrab.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var timeDelay, _loop_1, this_1, temp;
          var _this = this;
          return __generator(this, function(_a) {
            if (null == this.player) return [ 2 ];
            this.nodePanel = this.getNode();
            timeDelay = 0;
            _loop_1 = function(temp) {
              var deadEffect = this_1.getDeadEffectWithFishType(this_1.listFish[temp], this_1.moneyGun, this_1.player);
              deadEffect.moneyRevice = this_1.listFishValue[temp];
              if (this_1.nodePanel) {
                deadEffect.funCall = function(moneyRevice) {
                  if (_this.nodePanel) {
                    _this.nodePanel.addMoney(moneyRevice);
                    _this.nodePanel.removeHandle(deadEffect.funCall);
                  }
                };
                this_1.nodePanel.addHandle(deadEffect.funCall);
              }
              deadEffect.execute(timeDelay, true);
              timeDelay += .3;
            };
            this_1 = this;
            for (temp in this.listFish) _loop_1(temp);
            return [ 2 ];
          });
        });
      };
      ColisionCrab.prototype.getNode = function() {
        var node = this.player.mapNodePanel.get(this.idByFish);
        if (void 0 == node) return null;
        return node.getComponent(PanelPoint_1.default);
      };
      ColisionCrab.prototype.getDeadEffectWithFishType = function(fish, moneyGun, player) {
        var cp = null;
        cp = fish.fishType < 15 ? new FishDeadNormal_1.default(fish, player, moneyGun) : new FishDeadNormalRd_1.default(fish, player, moneyGun);
        return cp;
      };
      return ColisionCrab;
    }(BaseFishColision_1.default);
    exports.default = ColisionCrab;
    cc._RF.pop();
  }, {
    "../Fish/DeadEffect/FishDeadNormal": "FishDeadNormal",
    "../Fish/DeadEffect/FishDeadNormalRd": "FishDeadNormalRd",
    "./BaseFishColision": "BaseFishColision",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionDinhBa: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84d00t2HRtPVKgLNfbknbvc", "ColisionDinhBa");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishDeaditemDrag_1 = require("./BaseFishDeaditemDrag");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionDinhBa = function(_super) {
      __extends(ColisionDinhBa, _super);
      function ColisionDinhBa() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionDinhBa.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var obj, _a, _b, _i, temp, nodePanel;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              this.listFish.forEach(function(v) {
                v.isInList = false;
                if (v.fishType < 33) {
                  var angleRotate = 1 == Windown_1.Windown.RandomNumber(0, 2) ? Windown_1.Windown.RandomNumber(200, 720) : Windown_1.Windown.RandomNumber(-720, -200);
                  v.setTimeEffectWating(2);
                  var node = v.getViewNode();
                  node.opacity = 150;
                  node.runAction(cc.sequence(cc.spawn(cc.sequence(cc.moveBy(1, 0, 150).easing(cc.easeSineOut()), cc.moveBy(1, 0, -150).easing(cc.easeSineIn())), cc.rotateBy(2, angleRotate)), cc.delayTime(1)));
                }
              });
              obj = {
                time: 0
              };
              cc.tween(obj).delay(.5).call(function() {
                Windown_1.Windown.FishBongDem && Windown_1.Windown.FishBongDem.fishBDView && Windown_1.Windown.FishBongDem.fishBDView.effectSlowmotion(1, .2);
              }).start();
              _a = [];
              for (_b in this.listFishValue) _a.push(_b);
              _i = 0;
              _c.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 4 ];
              temp = _a[_i];
              this.handleMoneydAdd(this.listFishValue[temp]);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.2) ];

             case 2:
              _c.sent();
              _c.label = 3;

             case 3:
              _i++;
              return [ 3, 1 ];

             case 4:
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(8) ];

             case 5:
              _c.sent();
              nodePanel = this.getNode();
              if (nodePanel) {
                this.nodePanel = nodePanel.getComponent(PanelPoint_1.default);
                this.nodePanel.end();
              }
              return [ 2 ];
            }
          });
        });
      };
      ColisionDinhBa.prototype.getNode = function() {
        var node = this.player.mapNodePanel.get(this.idByFish);
        if (void 0 == node) return null;
        return node;
      };
      ColisionDinhBa.prototype.end = function() {};
      ColisionDinhBa.prototype.handleMoneydAdd = function(money) {
        var nodePanel = this.getNode();
        if (nodePanel) {
          this.nodePanel = nodePanel.getComponent(PanelPoint_1.default);
          this.nodePanel.addMoney(money);
        }
      };
      return ColisionDinhBa;
    }(BaseFishDeaditemDrag_1.default);
    exports.default = ColisionDinhBa;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishDeaditemDrag": "BaseFishDeaditemDrag",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionFish74: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b32cfIYyrdOuoToDsd4GXpW", "ColisionFish74");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishDeadNormal_1 = require("../Fish/DeadEffect/FishDeadNormal");
    var FishDeadNormalRd_1 = require("../Fish/DeadEffect/FishDeadNormalRd");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var ColisionCrab_1 = require("./ColisionCrab");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionFish74 = function(_super) {
      __extends(ColisionFish74, _super);
      function ColisionFish74() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionFish74.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var node, listGiatSet, fishMain, _i, _a, fish, nodeSet, pointFishMain, pointFish, diff, angle, mag;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              node = Windown_1.Windown.FishBongDem.pool.getPanelFish74();
              this.idByFish = this.listFish[0].fishId;
              node.getComponent(PanelPoint_1.default).init(this.player, this.idByFish, FISH_TYPE_1.default.FISH_74);
              listGiatSet = [];
              fishMain = this.listFish.shift();
              this.listFishValue.shift();
              fishMain.playAniDead();
              fishMain.removeFishFromList();
              this.player.addGold(0);
              for (_i = 0, _a = this.listFish; _i < _a.length; _i++) {
                fish = _a[_i];
                Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().Electricity);
                fish.playAniDead();
                fish.removeFishFromList();
                nodeSet = Windown_1.Windown.FishBongDem.pool.getEffectFishSet74();
                nodeSet.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                pointFishMain = fishMain.getPoint();
                pointFish = fish.getPoint();
                nodeSet.setPosition(pointFishMain);
                listGiatSet.push(nodeSet);
                diff = pointFish.clone().subSelf(pointFishMain);
                angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
                mag = cc.Vec2.distance(pointFish, pointFishMain);
                nodeSet.angle = -angle;
                nodeSet.height = mag;
                nodeSet.children[0].y = mag;
              }
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(2) ];

             case 1:
              _b.sent();
              fishMain.playAniRemove();
              listGiatSet.forEach(function(v) {
                v.destroy();
              });
              _super.prototype.excuted.call(this);
              node.getComponent(PanelPoint_1.default).end();
              return [ 2 ];
            }
          });
        });
      };
      ColisionFish74.prototype.getNode = function() {
        var node = this.player.mapNodePanel.get(this.idByFish);
        if (void 0 == node) return null;
        return node.getComponent(PanelPoint_1.default);
      };
      ColisionFish74.prototype.getDeadEffectWithFishType = function(fish, moneyGun, player) {
        var cp = null;
        cp = fish.fishType < 15 ? new FishDeadNormal_1.default(fish, player, moneyGun) : new FishDeadNormalRd_1.default(fish, player, moneyGun);
        return cp;
      };
      return ColisionFish74;
    }(ColisionCrab_1.default);
    exports.default = ColisionFish74;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../Fish/DeadEffect/FishDeadNormal": "FishDeadNormal",
    "../Fish/DeadEffect/FishDeadNormalRd": "FishDeadNormalRd",
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "./ColisionCrab": "ColisionCrab",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionHaiThanDead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f919qAfMFMMaQo1uWnaq0x", "ColisionHaiThanDead");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishDeadChildHT_1 = require("../Fish/DeadEffect/FishDeadChildHT");
    var FishDeadHaiThan_1 = require("../Fish/DeadEffect/FishDeadHaiThan");
    var BaseFishColision_1 = require("./BaseFishColision");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionNormal = function(_super) {
      __extends(ColisionNormal, _super);
      function ColisionNormal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pannelPoint = null;
        return _this;
      }
      ColisionNormal.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var audio, node, timeDelay, listPro, temp, deadEffect;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              audio = Windown_1.Windown.FishBongDem.getSound();
              node = Windown_1.Windown.FishBongDem.pool.getPanelHaiThan();
              this.pannelPoint = node.getComponent(PanelPoint_1.default);
              this.pannelPoint.reset();
              this.player.mapNodePanel.set(this.idByFish, node);
              node.parent = this.player.parentPanel;
              node.scale = 0;
              node.opacity = 255;
              node.stopAllActions();
              node.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
              timeDelay = 0;
              listPro = [];
              for (temp in this.listFish) {
                deadEffect = this.getDeadEffectWithFishType(this.listFish[temp], this.moneyGun, this.player);
                deadEffect.moneyRevice = this.listFishValue[temp];
                deadEffect.funCall = function(moneyRevice) {
                  _this.handleMoneydAdd(moneyRevice);
                };
                listPro.push(deadEffect.execute(timeDelay, true));
                timeDelay += .2;
              }
              Windown_1.Windown.FishBongDem.setTimeout(function() {
                audio.playEffect(audio.demTien, _this.player.isMe ? .8 : .4, true);
              }, 1.9);
              return [ 4, Promise.all(listPro) ];

             case 1:
              _a.sent();
              audio.stopEffect(audio.demTien);
              audio.playEffect(audio.caLonChet);
              node.stopAllActions();
              node.runAction(cc.sequence(cc.scaleTo(.5, 1.3), cc.scaleTo(.3, 1), cc.delayTime(3), cc.fadeOut(.5), cc.callFunc(function() {
                if (_this.pannelPoint.node) {
                  Windown_1.Windown.FishBongDem.pool.putPanelHaiThan(_this.pannelPoint.node);
                  _this.player.mapNodePanel.delete(_this.idByFish);
                }
              })));
              return [ 2 ];
            }
          });
        });
      };
      ColisionNormal.prototype.handleMoneydAdd = function(money) {
        this.pannelPoint.addMoney(money);
      };
      ColisionNormal.prototype.getDeadEffectWithFishType = function(fish, moneyGun, player) {
        var cp = null;
        cp = fish.fishType > 28 && fish.fishType < 33 ? new FishDeadChildHT_1.default(fish, player, moneyGun) : new FishDeadHaiThan_1.default(fish, player, moneyGun);
        return cp;
      };
      return ColisionNormal;
    }(BaseFishColision_1.default);
    exports.default = ColisionNormal;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../Fish/DeadEffect/FishDeadChildHT": "FishDeadChildHT",
    "../Fish/DeadEffect/FishDeadHaiThan": "FishDeadHaiThan",
    "./BaseFishColision": "BaseFishColision",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionItemHaiThan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4c8cEUS9VOwJmjoGVUN7IT", "ColisionItemHaiThan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var BaseFishColision_1 = require("./BaseFishColision");
    var ColisionItemHaiThan = function(_super) {
      __extends(ColisionItemHaiThan, _super);
      function ColisionItemHaiThan() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ColisionItemHaiThan.prototype.excuted = function() {
        var _this = this;
        if (null == this.player) return;
        var fishHaiThan = Windown_1.Windown.FishBongDem.fishMng.getFishById(this.sfsObj.get("byFish"));
        var countItem = fishHaiThan.stateItem;
        var nodeItem = Windown_1.Windown.FishBongDem.pool.getItemMiniBoss(countItem);
        nodeItem.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        nodeItem.setPosition(fishHaiThan.getPointItem());
        nodeItem.scale = 0;
        nodeItem.angle = 0;
        var ofsetX = -200;
        var RandomX = fishHaiThan.getViewNode().x + ofsetX;
        var Y = fishHaiThan.getViewNode().y - 50;
        var action1 = cc.spawn(cc.jumpTo(1, cc.v2(RandomX, Y), 100, 3), cc.rotateBy(1, 720), cc.scaleTo(.2, 1));
        var action2 = cc.delayTime(2);
        var action3 = cc.moveTo(1, this.player.gunFishBd.pointInScreen).easing(cc.easeBackIn());
        var action4 = cc.callFunc(function() {
          Windown_1.Windown.FishBongDem.pool.putItemMiniBoss(nodeItem);
          _this.player.addGold(_this.listFishValue[0]);
        });
        nodeItem.runAction(cc.sequence(action1, action2, action3, action4));
        fishHaiThan.stateItem++;
        fishHaiThan.updateStateAni();
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffect(audio.miniBossRoiItem);
      };
      return ColisionItemHaiThan;
    }(BaseFishColision_1.default);
    exports.default = ColisionItemHaiThan;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishColision": "BaseFishColision"
  } ],
  ColisionLocXoay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c34de9B6x5HUaDgPn4FerYi", "ColisionLocXoay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishColision_1 = require("./BaseFishColision");
    var ColisionLocXoay = function(_super) {
      __extends(ColisionLocXoay, _super);
      function ColisionLocXoay() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ColisionLocXoay.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var timeDelay, fishMain, point, nodeLocXoay, temp, fish, _a, _b, _i, temp, fish;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              timeDelay = 0;
              fishMain = this.listFish[0];
              fishMain.removeFishFromList();
              fishMain.playAniDead();
              fishMain.playAniRemove();
              point = fishMain.getPoint();
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1) ];

             case 1:
              _c.sent();
              this.addMoney(this.listFishValue[0], point, this.player);
              nodeLocXoay = Windown_1.Windown.FishBongDem.pool.getLocXoay();
              nodeLocXoay.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
              nodeLocXoay.zIndex = cc.macro.MIN_ZINDEX;
              nodeLocXoay.setPosition(point);
              nodeLocXoay.scale = 0;
              nodeLocXoay.runAction(cc.scaleTo(1, 1.5));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1) ];

             case 2:
              _c.sent();
              for (temp in this.listFish) {
                fish = this.listFish[temp];
                fish.removeFishFromList();
                if (fish == fishMain) continue;
                this.playActionFish(fish, point);
              }
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(3) ];

             case 3:
              _c.sent();
              _a = [];
              for (_b in this.listFish) _a.push(_b);
              _i = 0;
              _c.label = 4;

             case 4:
              if (!(_i < _a.length)) return [ 3, 7 ];
              temp = _a[_i];
              fish = this.listFish[temp];
              if (fish == fishMain) return [ 3, 6 ];
              this.addMoney(this.listFishValue[temp], point, this.player);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.2) ];

             case 5:
              _c.sent();
              _c.label = 6;

             case 6:
              _i++;
              return [ 3, 4 ];

             case 7:
              nodeLocXoay.stopAllActions();
              nodeLocXoay.runAction(cc.sequence(cc.scaleTo(1, 0), cc.callFunc(function() {
                Windown_1.Windown.FishBongDem.pool.putLocXoay(nodeLocXoay);
              })));
              return [ 2 ];
            }
          });
        });
      };
      ColisionLocXoay.prototype.addMoney = function(money, point, player) {
        player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
        if (null == player) return;
        var textMoney = Windown_1.Windown.FishBongDem.pool.getTextMoney(player.isMe);
        textMoney.getComponent(cc.Label).string = money.toString();
        textMoney.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        textMoney.opacity = 255;
        textMoney.setPosition(point);
        textMoney.scale = 0;
        var action1 = cc.scaleTo(.1, 1).easing(cc.easeBackOut());
        var action2 = cc.delayTime(.2);
        var action3 = cc.spawn(cc.fadeTo(.1, 150), cc.scaleTo(.2, .8));
        var actionMove = cc.moveBy(1, 0, 80);
        var actionT5 = cc.callFunc(function() {
          Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney);
        });
        textMoney.runAction(cc.sequence(cc.spawn(actionMove, cc.sequence(action1, action2, action3)), actionT5));
        player.addGold(money);
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffectNoStop(audio.coinVeTui, player.isMe ? .8 : .4);
      };
      ColisionLocXoay.prototype.playActionFish = function(fish, point) {
        fish.fishView && fish.fishView.aniStateMove && fish.fishView.aniStateMove.pause();
        var diff = point.clone().subSelf(fish.getPoint());
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        var nodeFish = fish.getViewNode();
        nodeFish.stopAllActions();
        var actionScale = cc.sequence(cc.delayTime(2.5), cc.scaleTo(.5, 0));
        var actionMove = cc.moveTo(3, point).easing(cc.easeSineOut());
        var actionRotate = cc.rotateTo(.5, -angle - 180);
        var action1 = cc.spawn(actionScale, actionMove, actionRotate);
        nodeFish.runAction(cc.sequence(action1, cc.callFunc(fish.destroy, fish)));
      };
      return ColisionLocXoay;
    }(BaseFishColision_1.default);
    exports.default = ColisionLocXoay;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishColision": "BaseFishColision"
  } ],
  ColisionMatThan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cafd3LCT0lIvIYHUPig6Ozw", "ColisionMatThan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishDeaditemDrag_1 = require("./BaseFishDeaditemDrag");
    var PanelPoint_1 = require("./PanelPoint");
    var ColisionBoomNguyenTu = function(_super) {
      __extends(ColisionBoomNguyenTu, _super);
      function ColisionBoomNguyenTu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePanel = null;
        return _this;
      }
      ColisionBoomNguyenTu.prototype.excuted = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, _b, _i, temp, matThan;
          return __generator(this, function(_c) {
            switch (_c.label) {
             case 0:
              if (null == this.player) return [ 2 ];
              _a = [];
              for (_b in this.listFishValue) _a.push(_b);
              _i = 0;
              _c.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 4 ];
              temp = _a[_i];
              this.handleMoneydAdd(this.listFishValue[temp]);
              matThan = this.player.mapMatThan.get(this.idByFish);
              matThan && matThan.emitNewMoney();
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.2) ];

             case 2:
              _c.sent();
              _c.label = 3;

             case 3:
              _i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      ColisionBoomNguyenTu.prototype.getNode = function() {
        var node = this.player.mapNodePanel.get(this.idByFish);
        if (void 0 == node) return null;
        return node;
      };
      ColisionBoomNguyenTu.prototype.end = function() {};
      ColisionBoomNguyenTu.prototype.handleMoneydAdd = function(money) {
        var nodePanel = this.getNode();
        if (nodePanel) {
          this.nodePanel = nodePanel.getComponent(PanelPoint_1.default);
          this.nodePanel.addMoney(money);
        }
      };
      return ColisionBoomNguyenTu;
    }(BaseFishDeaditemDrag_1.default);
    exports.default = ColisionBoomNguyenTu;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishDeaditemDrag": "BaseFishDeaditemDrag",
    "./PanelPoint": "PanelPoint"
  } ],
  ColisionNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b39c2cLUMJOWojbko/HkUGU", "ColisionNormal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishColision_1 = require("./BaseFishColision");
    var ColisionNormal = function(_super) {
      __extends(ColisionNormal, _super);
      function ColisionNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ColisionNormal.prototype.excuted = function() {
        if (null == this.player) return;
        var timeDelay = 0;
        for (var temp in this.listFish) {
          var deadEffect = this.getDeadEffectWithFishType(this.listFish[temp], this.moneyGun, this.player);
          deadEffect.moneyRevice = this.listFishValue[temp];
          deadEffect.execute(timeDelay, true);
          timeDelay += .2;
        }
      };
      return ColisionNormal;
    }(BaseFishColision_1.default);
    exports.default = ColisionNormal;
    cc._RF.pop();
  }, {
    "./BaseFishColision": "BaseFishColision"
  } ],
  CrabVongQuay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b60bjA2adNrbOkF4/tR2xY", "CrabVongQuay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var LbMoneyChange_1 = require("../../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodex400 = null;
        _this.nodeGold = null;
        _this.dauRong = null;
        _this.parentCoin = null;
        _this.listNodeVong = [];
        _this.lbMoneyRevice = null;
        _this.mutil = -1;
        _this.moneyRevice = 0;
        _this.funNext = null;
        _this.listMutil = [ [ 20, null, 30, null, 40, null, 50, null ], [ 100, null, 120, 140, null, 160 ], [ null, 200, 240 ] ];
        _this.listAngke = [ [ [ 0, 31 ], [ 44, 75 ], [ 90, 121 ], [ 137, 167 ], [ 182, 211 ], [ 226, 256 ], [ 270, 300 ], [ 316, 345 ] ], [ [ 0, 41 ], [ 60, 105 ], [ 125, 161 ], [ 185, 225 ], [ 240, 280 ], [ 300, 340 ] ], [ [ 3, 85 ], [ 123, 200 ], [ 240, 325 ] ] ];
        _this.listIndexNull = [ [ 1, 3, 5, 7 ], [ 1, 4 ], [ 0 ] ];
        return _this;
      }
      NewClass.prototype.jumTest = function() {};
      NewClass.prototype.init = function(mutil, moneyRevice) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          Windown_1.Windown.FishBongDem.addHandleReset(_this.node.destroy, _this.node, true);
          _this.funNext = resolve;
          _this.moneyRevice = moneyRevice;
          _this.nodex400.active = true;
          _this.nodex400.scale = 0;
          _this.nodex400.runAction(cc.sequence(cc.scaleTo(.3, 1).easing(cc.easeBackOut()), cc.delayTime(1.5), cc.callFunc(function() {
            var audio = Windown_1.Windown.FishBongDem.getSound();
            audio.playEffect(audio.hopQuaMo);
          }), cc.scaleTo(.3, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
            _this.nodeGold.runAction(cc.sequence(cc.scaleTo(.3, 1.4), cc.scaleTo(.3, 1)));
          }), cc.delayTime(1), cc.callFunc(_this.startQuay, _this)));
          _this.mutil = mutil;
        });
      };
      NewClass.prototype.startQuay = function() {
        return __awaiter(this, void 0, void 0, function() {
          var audio, vong, _loop_1, this_1, state_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              audio = Windown_1.Windown.FishBongDem.getSound();
              vong = 0;
              _loop_1 = function() {
                var objInfo, nodeRunAction, action;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    objInfo = this_1.getAngleMutil(this_1.mutil, vong);
                    nodeRunAction = this_1.listNodeVong[vong];
                    audio.playEffect(audio.spinVongQuay);
                    action = cc.rotateBy(3, 720 + objInfo.angle - nodeRunAction.angle).easing(cc.easeCubicActionOut());
                    nodeRunAction.runAction(cc.sequence(action, cc.callFunc(function() {
                      audio.stopEffect(audio.spinVongQuay);
                      var nodeResult = nodeRunAction.children[0].children[objInfo.index];
                      if (objInfo.isNext) nodeResult.children[0].runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
                        audio.playEffect(audio.takeNgocRong);
                      }), cc.moveTo(.2, cc.v2(0, -10)), cc.moveTo(.2, cc.v2(0, 0))), 2)); else {
                        audio.playEffectNoStop(audio.hopQuaNo);
                        nodeResult.runAction(cc.repeat(cc.sequence(cc.scaleTo(.3, 1.3), cc.scaleTo(.3, 1)), 3));
                      }
                    })));
                    return [ 4, Windown_1.Windown.FishBongDem.makeDelay(4) ];

                   case 1:
                    _a.sent();
                    if (objInfo.isNext && vong < 2) {
                      audio.playEffect(audio.diaGa);
                      this_1.dauRong.runAction(cc.moveBy(.5, cc.v2(0, -35)));
                    }
                    return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1) ];

                   case 2:
                    _a.sent();
                    if (!objInfo.isNext || 2 == vong) return [ 2, "break" ];
                    vong++;
                    return [ 2 ];
                  }
                });
              };
              this_1 = this;
              _a.label = 1;

             case 1:
              false;
              return [ 5, _loop_1() ];

             case 2:
              state_1 = _a.sent();
              if ("break" === state_1) return [ 3, 3 ];
              return [ 3, 1 ];

             case 3:
              if (!(vong >= 2)) return [ 3, 6 ];
              this.phunXuBig();
              this.nodeGold.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.4), cc.scaleTo(.3, 1))));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.5) ];

             case 4:
              _a.sent();
              this.lbMoneyRevice.node.parent.active = true;
              this.lbMoneyRevice.node.parent.scale = 0;
              this.lbMoneyRevice.node.parent.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
              this.lbMoneyRevice.time = 3;
              this.lbMoneyRevice.setMoney(this.moneyRevice);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(3) ];

             case 5:
              _a.sent();
              return [ 3, 8 ];

             case 6:
              audio.playEffectNoStop(audio.demTien);
              this.lbMoneyRevice.node.parent.active = true;
              this.lbMoneyRevice.node.parent.scale = 0;
              this.lbMoneyRevice.node.parent.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
              this.lbMoneyRevice.time = 1.5;
              this.lbMoneyRevice.setMoney(this.moneyRevice);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1.5) ];

             case 7:
              _a.sent();
              _a.label = 8;

             case 8:
              audio.playEffect(audio.caLonChet);
              this.lbMoneyRevice.node.parent.runAction(cc.sequence(cc.scaleTo(.3, 1.3), cc.scaleTo(.3, 1)));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(2) ];

             case 9:
              _a.sent();
              audio.playEffect(audio.wind);
              this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.7, 0).easing(cc.easeBackIn()), cc.fadeOut(.7)), cc.callFunc(function() {
                _this.funNext && _this.funNext();
                _this.node.destroy();
              })));
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.FishBongDem.removeHandle(this.node.destroy, this.node, true);
      };
      NewClass.prototype.getAngleMutil = function(mutil, vong) {
        var listTemp = this.listMutil[vong];
        for (var temp in listTemp) if (listTemp[temp] == mutil) {
          var angleStart_1 = this.listAngke[vong][temp][0];
          var angleEnd_1 = this.listAngke[vong][temp][1];
          return {
            angle: Windown_1.Windown.RandomNumber(angleStart_1, angleEnd_1),
            isNext: false,
            index: parseInt(temp)
          };
        }
        var listNull = this.listIndexNull[vong];
        var indexNullRd = listNull[Windown_1.Windown.RandomNumber(0, listNull.length)];
        var angleStart = this.listAngke[vong][indexNullRd][0];
        var angleEnd = this.listAngke[vong][indexNullRd][1];
        return {
          angle: Windown_1.Windown.RandomNumber(angleStart, angleEnd),
          isNext: true,
          index: indexNullRd
        };
      };
      NewClass.prototype.phunXuBig = function() {
        return __awaiter(this, void 0, void 0, function() {
          var audio, _loop_2, this_2, i;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              audio = Windown_1.Windown.FishBongDem.getSound();
              audio.playEffect(audio.tienRoi, .5);
              audio.playEffect(audio.hitIncredible);
              _loop_2 = function(i) {
                var coin, vecTarget, timeAction;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    coin = Windown_1.Windown.FishBongDem.pool.getCoin(true);
                    coin.scale = .3;
                    coin.getComponent(cc.Animation).play("Coin");
                    coin.setPosition(cc.v2(0, 0));
                    coin.parent = this_2.parentCoin;
                    vecTarget = cc.v2(Windown_1.Windown.RandomNumber(-200, 200), -134);
                    timeAction = Windown_1.Windown.RandomNumber(5, 15) / 10;
                    coin.runAction(cc.sequence(cc.spawn(cc.rotateBy(timeAction, Windown_1.Windown.RandomNumber(180, 360)), cc.jumpTo(timeAction, vecTarget, 200, 1)), cc.callFunc(function() {
                      Windown_1.Windown.FishBongDem && Windown_1.Windown.FishBongDem.pool.putCoin(coin);
                    })));
                    return [ 4, Windown_1.Windown.FishBongDem.makeDelay(Windown_1.Windown.RandomNumber(0, 5) / 100) ];

                   case 1:
                    _a.sent();
                    return [ 2 ];
                  }
                });
              };
              this_2 = this;
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < 100)) return [ 3, 4 ];
              return [ 5, _loop_2(i) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              audio.stopEffect(audio.tienRoi);
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodex400", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeGold", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "dauRong", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentCoin", void 0);
      __decorate([ property([ cc.Node ]) ], NewClass.prototype, "listNodeVong", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "lbMoneyRevice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  DefineSpeedGunBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ebcf2eVuxNgaeMI+1t2L5c", "DefineSpeedGunBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var DefineSpeedGunBD = function(_super) {
      __extends(DefineSpeedGunBD, _super);
      function DefineSpeedGunBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DefineSpeedGunBD.NORMAL = .22;
      DefineSpeedGunBD.SET = .18;
      DefineSpeedGunBD.SPEED = .05;
      return DefineSpeedGunBD;
    }(cc.Component);
    exports.default = DefineSpeedGunBD;
    cc._RF.pop();
  }, {} ],
  DinhBa: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d10bbKm9yNN14n8R5GB9e2+", "DinhBa");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.hold = null;
        _this.che = null;
        _this.spineVuNo = null;
        _this.dinhBa = null;
        _this.panelPoint = null;
        _this.listPos = [ cc.v2(326.231, -160), cc.v2(-326.231, 160), cc.v2(-326.231, -160), cc.v2(326.231, 160), cc.v2(0, -100) ];
        _this.indexNo = 1;
        _this.idItemDrag = -1;
        _this.player = null;
        return _this;
      }
      NewClass.prototype.init = function(posStart, idItemDrag, player) {
        return __awaiter(this, void 0, void 0, function() {
          var listPro, sfsObj;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.idItemDrag = idItemDrag;
              this.player = player;
              listPro = [];
              this.panelPoint.node.active = true;
              this.panelPoint.init(this.player, this.idItemDrag, TypeItemDragBD_1.default.DINH_BA);
              Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().WindShort, 1, true);
              return [ 4, this.runActionDinhBa(posStart) ];

             case 1:
              _a.sent();
              sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("Type", TypeItemDragBD_1.default.DINH_BA);
              sfsObj.putLong("Id", idItemDrag);
              Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
              this.scheduleOnce(function() {
                Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().DromDinhBa);
              }, .2);
              this.dinhBa.runAction(cc.sequence(cc.moveTo(.3, 0, 220), cc.callFunc(function() {
                Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().fishBoom);
                _this.hold.active = true;
                _this.hold.parent = Windown_1.Windown.FishBongDem.fishBDView.bkgSprite.node;
                _this.hold.opacity = 0;
                _this.che.active = true;
                _this.hold.runAction(cc.fadeIn(.1));
                Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.5, 50);
                _this.spineVuNo.node.active = true;
                _this.spineVuNo.setAnimation(0, "animation", false);
                if (_this.player.isMe) {
                  var listId_1 = ConectManager_1.ConectManager.getIns().getSFSArray();
                  Windown_1.Windown.FishBongDem.fishMng.forEachListFish(function(v) {
                    v.getColiderInScreen() && listId_1.addInt(v.fishId);
                  });
                  var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
                  SFSObject.putInt("Type", TypeItemDragBD_1.default.DINH_BA);
                  SFSObject.putLong("byFish", _this.idItemDrag);
                  SFSObject.putLong("Id", _this.idItemDrag);
                  SFSObject.putSFSArray("ListFishId", listId_1);
                  Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
                }
              }), cc.delayTime(2), cc.callFunc(function() {
                _this.node.runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
                  _this.node.destroy();
                })));
                _this.hold.runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
                  _this.hold.destroy();
                })));
              })));
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.effectFishDead = function() {};
      NewClass.prototype.runActionDinhBa = function(posStart) {
        var _this = this;
        return new Promise(function(r, j) {
          _this.dinhBa.scale = 0;
          _this.dinhBa.angle = -90;
          _this.dinhBa.setPosition(posStart);
          _this.dinhBa.runAction(cc.sequence(cc.spawn(cc.moveTo(.5, 0, 0), cc.rotateBy(2, -2160), cc.scaleTo(.7, 1).easing(cc.easeSineOut())), cc.callFunc(function() {
            Windown_1.Windown.FishBongDem.getSound().stopEffect(Windown_1.Windown.FishBongDem.getSound().WindShort);
          }), cc.spawn(cc.scaleTo(0, 1.5), cc.delayTime(.3), cc.moveTo(.2, 0, 1e3)), cc.delayTime(1), cc.callFunc(r)));
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "hold", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "che", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "spineVuNo", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "dinhBa", void 0);
      __decorate([ property(PanelPoint_1.default) ], NewClass.prototype, "panelPoint", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD"
  } ],
  DropBoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6ddaGLUr1IH7T8DhgIkx69", "DropBoom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var ItemBoom_1 = require("./ItemBoom");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBoom = null;
        _this.nodeVuNo = null;
        _this.hold = null;
        _this.panelPoint = null;
        _this.parentItemTarget = null;
        _this.listPos = [ cc.v2(326.231, -160), cc.v2(-326.231, 160), cc.v2(-326.231, -160), cc.v2(326.231, 160), cc.v2(0, -100) ];
        _this.indexNo = 1;
        _this.idItemDrag = -1;
        _this.player = null;
        return _this;
      }
      NewClass.prototype.init = function(posStart, idItemDrag, player) {
        return __awaiter(this, void 0, void 0, function() {
          var listPro, i, node, posTarget2, posTarget1, cp, listBoom, i, node, posTarget2, posTarget1, cp, sfsObj, time;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.idItemDrag = idItemDrag;
              this.player = player;
              listPro = [];
              this.panelPoint.node.active = true;
              this.panelPoint.init(this.player, this.idItemDrag, TypeItemDragBD_1.default.BOOM_NGUYEN_TU);
              for (i = 0; i < 1; i++) {
                node = cc.instantiate(this.nodeBoom);
                node.active = true;
                node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                posTarget2 = this.listPos[i].clone().addSelf(cc.v2(Windown_1.Windown.RandomNumber(-50, 50), Windown_1.Windown.RandomNumber(-50, 50)));
                posTarget1 = posStart.clone();
                posTarget1.x += Windown_1.Windown.RandomNumber(-50, 50);
                posTarget1.y = 600;
                node.setPosition(posStart.x + Windown_1.Windown.RandomNumber(-100, 100), posStart.y);
                cp = node.getComponent(ItemBoom_1.default);
                listPro.push(cp.moveBoom(cc.v2(0, 480), .3 * i, this.listPos[i]));
              }
              Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().startBoom);
              this.scheduleOnce(this.actionTarget, 1.5);
              return [ 4, Promise.all(listPro) ];

             case 1:
              _a.sent();
              listBoom = [];
              for (i = 0; i < 5; i++) {
                node = cc.instantiate(this.nodeBoom);
                node.active = true;
                node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                posTarget2 = this.listPos[i].clone().addSelf(cc.v2(Windown_1.Windown.RandomNumber(-50, 50), Windown_1.Windown.RandomNumber(-50, 50)));
                posTarget1 = posStart.clone();
                posTarget1.x += Windown_1.Windown.RandomNumber(-50, 50);
                posTarget1.y = 600;
                node.setPosition(posStart.x + Windown_1.Windown.RandomNumber(-100, 100), posStart.y);
                cp = node.getComponent(ItemBoom_1.default);
                listPro.push(cp.moveBoom(cc.v2(0, 480), .3 * i, this.listPos[i]));
                listBoom.push(cp);
              }
              sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("Type", TypeItemDragBD_1.default.BOOM_NGUYEN_TU);
              sfsObj.putLong("Id", idItemDrag);
              Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
              time = 0;
              listBoom.forEach(function(v) {
                v.moveNo(time, _this);
                time += .3;
              });
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.actionTarget = function() {
        Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().dropBoom);
        var listChild = this.parentItemTarget.children;
        var _loop_1 = function(i, l) {
          var node = listChild[i];
          node.active = true;
          node.opacity = 0;
          node.runAction(cc.sequence(cc.delayTime(.1 * i), cc.spawn(cc.fadeIn(.2), cc.callFunc(function() {
            node.getComponent(cc.Animation).play("TargetBoom");
          }))));
        };
        for (var i = 0, l = listChild.length; i < l; i++) _loop_1(i, l);
      };
      NewClass.prototype.onNo = function(node) {
        var _this = this;
        Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.3, 60);
        Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().fishBoom);
        var nodeVuNo = cc.instantiate(this.nodeVuNo);
        nodeVuNo.active = true;
        nodeVuNo.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        nodeVuNo.setPosition(node.getPosition());
        var magCheck = 260;
        if (5 == this.indexNo) {
          this.hold.active = true;
          this.hold.parent = Windown_1.Windown.FishBongDem.fishBDView.bkgSprite.node;
          this.hold.setPosition(0, -50);
          this.hold.opacity = 0;
          this.hold.runAction(cc.sequence(cc.delayTime(.2), cc.fadeIn(0), cc.delayTime(1), cc.fadeIn(1.5), cc.callFunc(function() {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                 case 0:
                  this.hold.destroy();
                  return [ 4, Windown_1.Windown.FishBongDem.makeDelay(2) ];

                 case 1:
                  _a.sent();
                  this.panelPoint.end();
                  this.node.destroy();
                  return [ 2 ];
                }
              });
            });
          })));
          nodeVuNo.scale = 5;
          magCheck = 500;
        }
        if (this.player.isMe) {
          var listId_1 = ConectManager_1.ConectManager.getIns().getSFSArray();
          Windown_1.Windown.FishBongDem.fishMng.forEachListFish(function(v) {
            if (v.getColiderInScreen()) {
              var mag = cc.Vec2.distance(v.getPoint(), node.getPosition());
              mag <= magCheck && listId_1.addInt(v.fishId);
            }
          });
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("Type", TypeItemDragBD_1.default.BOOM_NGUYEN_TU);
          SFSObject.putLong("byFish", this.idItemDrag);
          SFSObject.putLong("Id", this.idItemDrag);
          SFSObject.putSFSArray("ListFishId", listId_1);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
        }
        node.destroy();
        this.indexNo++;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBoom", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeVuNo", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "hold", void 0);
      __decorate([ property(PanelPoint_1.default) ], NewClass.prototype, "panelPoint", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentItemTarget", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./ItemBoom": "ItemBoom"
  } ],
  EffectSet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51f04yLQPJIwLjeO1X7BEio", "EffectSet");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseEffectFish_1 = require("./BaseEffectFish");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectSet = function(_super) {
      __extends(EffectSet, _super);
      function EffectSet() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectSet.prototype.reset = function() {
        Windown_1.Windown.FishBongDem.pool.putEfGiatSet(this.node);
      };
      EffectSet.prototype.execute = function() {
        var node = this.fish.getViewNode();
        if (node) {
          this.node.parent = node;
          this.node.setContentSize(node.height, node.width);
          this.getComponent(cc.Animation).play("BiGiatSet");
        } else this.reset();
      };
      EffectSet.prototype.getSizeByFishType = function() {};
      EffectSet = __decorate([ ccclass ], EffectSet);
      return EffectSet;
    }(BaseEffectFish_1.default);
    exports.default = EffectSet;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseEffectFish": "BaseEffectFish"
  } ],
  FISH_DEAD_BD_TYPE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "985ceg1CC5NPZqU2KG/J4c+", "FISH_DEAD_BD_TYPE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FISH_DEAD_BD_TYPE = function() {
      function FISH_DEAD_BD_TYPE() {}
      FISH_DEAD_BD_TYPE.NORMAL = 0;
      FISH_DEAD_BD_TYPE.JACKPOT = 99;
      FISH_DEAD_BD_TYPE.LADE = 2;
      FISH_DEAD_BD_TYPE.BOOM = 3;
      FISH_DEAD_BD_TYPE.REVICE_NGOC = 4;
      FISH_DEAD_BD_TYPE.BOSS_DEAD = 5;
      FISH_DEAD_BD_TYPE.CA_XAU = 6;
      FISH_DEAD_BD_TYPE.SONG_AM = 7;
      FISH_DEAD_BD_TYPE.MUI_KHOAN = 8;
      FISH_DEAD_BD_TYPE.END_MUI_KHOAN = 9;
      FISH_DEAD_BD_TYPE.ITEM_HAI_THAN = 10;
      FISH_DEAD_BD_TYPE.HAI_THAN = 11;
      FISH_DEAD_BD_TYPE.LOC_XOAY = 12;
      FISH_DEAD_BD_TYPE.GUN_FIRE = 13;
      FISH_DEAD_BD_TYPE.BOOM_NGUYEN_TU = 14;
      FISH_DEAD_BD_TYPE.MAT_THAN = 15;
      FISH_DEAD_BD_TYPE.FISH_74 = 16;
      FISH_DEAD_BD_TYPE.DINH_BA = 17;
      return FISH_DEAD_BD_TYPE;
    }();
    exports.default = FISH_DEAD_BD_TYPE;
    cc._RF.pop();
  }, {} ],
  FISH_TYPE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33968YeLhZJPLgC6pmshHrt", "FISH_TYPE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FISH_TYPE = function() {
      function FISH_TYPE() {}
      FISH_TYPE.HAI_THAN = 33;
      FISH_TYPE.CA_GROUP = 34;
      FISH_TYPE.CA_GROUP4 = 35;
      FISH_TYPE.CA_GROUP4_1 = 36;
      FISH_TYPE.CA_GROUP4_2 = 37;
      FISH_TYPE.CA_TRAN_1 = 38;
      FISH_TYPE.MUTIL = 39;
      FISH_TYPE.LOC_XOAY = 40;
      FISH_TYPE.BOOM = 52;
      FISH_TYPE.LAZE = 51;
      FISH_TYPE.MUI_KHOAN = 53;
      FISH_TYPE.SONG_AM = 54;
      FISH_TYPE.GUN_FIRE = 55;
      FISH_TYPE.VONG_QUAY = 56;
      FISH_TYPE.FISH_74 = 74;
      FISH_TYPE.JACKPOT = 100;
      FISH_TYPE.CA_XAU = 101;
      FISH_TYPE.TRUY_GAI = 102;
      FISH_TYPE.RUA = 103;
      return FISH_TYPE;
    }();
    exports.default = FISH_TYPE;
    cc._RF.pop();
  }, {} ],
  FishBD70View: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49e300EH+9BkYPMAoEu4nf4", "FishBD70View");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBD70View = function(_super) {
      __extends(FishBD70View, _super);
      function FishBD70View() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animation = null;
        _this.fishType = "";
        _this.funEffect = null;
        _this.stateAni = null;
        return _this;
      }
      FishBD70View.prototype.onLoad = function() {
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this.stateAni = this.animation.getAnimationState("Fish" + this.fishType);
      };
      FishBD70View.prototype.onEnable = function() {
        this.stateAni.isPaused ? this.stateAni.resume() : this.stateAni.play();
      };
      FishBD70View.prototype.initAni = function(clip, speed, currentTime) {
        return _super.prototype.initAni.call(this, clip, speed, currentTime);
      };
      FishBD70View.prototype.playAniSwing = function() {
        cc.log("chay vao fish bd70 ne");
        this.stateAni.speed = this.baseSpeed;
        this.stateAni.isPaused ? this.stateAni.resume() : this.stateAni.play();
      };
      FishBD70View.prototype.stopAniSwing = function() {
        this.fishBDNormal.isDeadEffect || this.stateAni.pause();
      };
      FishBD70View.prototype.playAniDead = function() {
        this.pauAniFish();
        this.animation.resume();
        this.stateAni.speed = 10;
      };
      FishBD70View.prototype.playAniRemove = function() {
        if ("70" == this.fishType) {
          this.animation.play("Fish" + this.fishBDNormal.fishType + "Dead");
          this.animation.once(cc.Animation.EventType.FINISHED, this.fishBDNormal.destroy, this.fishBDNormal);
        } else {
          this.node.stopAllActions();
          var ac2 = cc.fadeOut(1);
          var ac3 = cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal);
          this.node.runAction(cc.sequence(ac2, ac3));
        }
      };
      __decorate([ property(cc.Animation) ], FishBD70View.prototype, "animation", void 0);
      __decorate([ property ], FishBD70View.prototype, "fishType", void 0);
      FishBD70View = __decorate([ ccclass ], FishBD70View);
      return FishBD70View;
    }(FishBDNormalView_1.default);
    exports.default = FishBD70View;
    cc._RF.pop();
  }, {
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDBoomView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f688dTmt41ImZZeNQPZPSrL", "FishBDBoomView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBdBoomView = function(_super) {
      __extends(FishBdBoomView, _super);
      function FishBdBoomView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBdBoomView.prototype.onEnable = function() {
        this.node.children[0].color = cc.Color.WHITE;
        this.node.children[0].scale = 1;
        this.node.children[0].position = cc.Vec3.ZERO;
        this.node.children[1].active = false;
        this.node.children[2].active = false;
        this.node.children[0].active = true;
      };
      FishBdBoomView.prototype.playAniDead = function() {
        var _this = this;
        this.pauAniFish();
        this.skeSwing.paused = false;
        var ani = this.node.children[0].getComponent(cc.Animation);
        ani.play("BoomDead");
        ani.once(cc.Animation.EventType.FINISHED, function() {
          _this.node.children[1].active = true;
          _this.node.children[2].active = true;
          var listSpine = _this.node.getComponentsInChildren(sp.Skeleton);
          listSpine.forEach(function(v) {
            v.setAnimation(0, "animation", false);
          });
          _this.node.children[0].active = false;
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffect(audio.fishBoom);
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putInt("Type", TypeItemDragBD_1.default.BOOM);
          sfsObj.putLong("Id", _this.fishBDNormal.fishId);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
          var arryId = ConectManager_1.ConectManager.getIns().getSFSArray();
          var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
          var iractor = mapFish.values();
          var result = iractor.next();
          while (!result.done) {
            var value = result.value;
            result = iractor.next();
            var mag = cc.Vec2.distance(value.getPoint(), _this.node.getPosition());
            value.isInScreen() && value.fishType < 18 && mag < 450 && arryId.addInt(value.fishId);
          }
          var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
          SFSObject.putInt("Type", TypeItemDragBD_1.default.BOOM);
          SFSObject.putLong("byFish", _this.fishBDNormal.fishId);
          SFSObject.putLong("Id", _this.fishBDNormal.fishId);
          SFSObject.putSFSArray("ListFishId", arryId);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishSpecialColisionBD, SFSObject);
          _this.scheduleOnce(function() {
            _this.fishBDNormal.destroy();
          }, 2);
        });
      };
      FishBdBoomView.prototype.playAniRemove = function() {};
      FishBdBoomView = __decorate([ ccclass ], FishBdBoomView);
      return FishBdBoomView;
    }(FishBDNormalView_1.default);
    exports.default = FishBdBoomView;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDCaTranView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85833zLWYBM8ZEg/nTeQ8pC", "FishBDCaTranView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDCaTranView = function(_super) {
      __extends(FishBDCaTranView, _super);
      function FishBDCaTranView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.aniSet = null;
        return _this;
      }
      FishBDCaTranView.prototype.onLoad = function() {
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this.skeSwing = this.getComponentInChildren(sp.Skeleton);
      };
      FishBDCaTranView.prototype.initViewFish = function(fishMain) {
        return __awaiter(this, void 0, void 0, function() {
          var r1, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Spine/Fish/Fish_" + (fishMain - 1), sp.SkeletonData) ];

             case 1:
              r1 = _a.sent();
              this.skeSwing.skeletonData = r1;
              this.skeSwing.setAnimation(0, "animation", true);
              return [ 3, 3 ];

             case 2:
              e_1 = _a.sent();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      FishBDCaTranView.prototype.playAniRemove = function() {
        this.node.stopAllActions();
        var ac1 = cc.delayTime(1);
        var ac2 = cc.fadeOut(1);
        var ac3 = cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal);
        this.node.runAction(cc.sequence(ac1, ac2, ac3));
      };
      FishBDCaTranView.prototype.onColision = function(colider) {
        for (var i = 0, l = this.node.childrenCount; i < l; i++) {
          var node = this.node.children[i];
          node.stopActionByTag(123456);
          cc.tween(node).tag(123456).to(.09, {
            color: new cc.Color(245, 83, 83)
          }).delay(.08).to(.05, {
            color: cc.Color.WHITE
          }).start();
        }
      };
      __decorate([ property(cc.Animation) ], FishBDCaTranView.prototype, "aniSet", void 0);
      FishBDCaTranView = __decorate([ ccclass ], FishBDCaTranView);
      return FishBDCaTranView;
    }(FishBDNormalView_1.default);
    exports.default = FishBDCaTranView;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDCaTran: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92880n3YwNEVLIvd0WGpjUc", "FishBDCaTran");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDCaTranView_1 = require("./FishBDCaTranView");
    var FishBDNormal_1 = require("./FishBDNormal");
    var FishBDCaTran = function(_super) {
      __extends(FishBDCaTran, _super);
      function FishBDCaTran() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishTypeMain = -1;
        _this.fishView = null;
        return _this;
      }
      FishBDCaTran.prototype.initFish = function(object) {
        this.fishTypeMain = object.get("FTM");
        _super.prototype.initFish.call(this, object);
      };
      FishBDCaTran.prototype.intiView = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fishNode, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              fishNode = null;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, this.fishMng.getFishViewPool(this.fishType) ];

             case 2:
              fishNode = _a.sent();
              if (!this.isInList) {
                this.fishMng.putPoolFish(fishNode, this.fishType);
                return [ 2 ];
              }
              this.fishView = fishNode.getComponent(FishBDCaTranView_1.default);
              this.fishView.initViewFish(this.fishTypeMain);
              this.fishView.setFishBdNormal(this);
              this.fishView.initAni(this.getAniClipFromString(this.infoAni), this.speed, this.currentTimeInPath).setTagColider(this.fishId);
              this.funCallBackWhenInitView && this.funCallBackWhenInitView(this);
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              if (fishNode) {
                this.fishMng.putPoolFish(fishNode, this.fishType);
                cc.log("put dc no r nay");
              }
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      return FishBDCaTran;
    }(FishBDNormal_1.default);
    exports.default = FishBDCaTran;
    cc._RF.pop();
  }, {
    "./FishBDCaTranView": "FishBDCaTranView",
    "./FishBDNormal": "FishBDNormal"
  } ],
  FishBDCaXau: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0900bdLJB9OvbEUz+lHokvl", "FishBDCaXau");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDCaXau = function(_super) {
      __extends(FishBDCaXau, _super);
      function FishBDCaXau() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funEffect = null;
        return _this;
      }
      FishBDCaXau.prototype.initAni = function(clip, speed, currentTime) {
        Windown_1.Windown.FishBongDem.fishBDView.comingCaXau();
        return _super.prototype.initAni.call(this, clip, speed, currentTime);
      };
      FishBDCaXau.prototype.playAniDead = function() {
        var _this = this;
        this.pauAniFish();
        var node = this.node;
        var posFixed = node.getPosition();
        this.schedule(this.funEffect = function() {
          var action = cc.moveTo(.06, cc.v2(posFixed.x + Windown_1.Windown.RandomNumber(-15, 15), posFixed.y + Windown_1.Windown.RandomNumber(-15, 15)));
          node.runAction(action);
        }, .06);
        this.scheduleOnce(function() {
          _this.unschedule(_this.funEffect);
          _this.node.runAction(cc.spawn(cc.scaleTo(.2, 2), cc.fadeOut(.2)));
          _this.scheduleOnce(function() {
            _this.fishBDNormal.destroy();
          }, 1);
        }, 1);
      };
      FishBDCaXau.prototype.playAniRemove = function() {};
      FishBDCaXau = __decorate([ ccclass ], FishBDCaXau);
      return FishBDCaXau;
    }(FishBDNormalView_1.default);
    exports.default = FishBDCaXau;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDChildHaiThanView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90ea1w/vZJD5LI5UJDyU7Go", "FishBDChildHaiThanView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDChildHaiThanView = function(_super) {
      __extends(FishBDChildHaiThanView, _super);
      function FishBDChildHaiThanView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBDChildHaiThanView.prototype.playAniSwing = function() {
        this.skeSwing.paused = false;
        this.skeSwing.timeScale = this.baseSpeed;
        this.skeSwing.setAnimation(0, "walk", true);
      };
      FishBDChildHaiThanView.prototype.playAniDead = function() {
        var _this = this;
        this.aniStateMove.pause();
        this.skeSwing.paused = false;
        this.skeSwing.setAnimation(0, "die", false);
        this.skeSwing.setEndListener(function() {
          _this.node.stopAllActions();
          var ac1 = cc.delayTime(1);
          var ac2 = cc.spawn(cc.fadeOut(1), cc.rotateBy(1, 360), cc.scaleTo(1, 0));
          var ac3 = cc.callFunc(_this.fishBDNormal.destroy, _this.fishBDNormal);
          _this.node.runAction(cc.sequence(ac1, ac2, ac3));
          _this.skeSwing.setEndListener(null);
        });
      };
      FishBDChildHaiThanView.prototype.playAniTuSat = function() {
        var _this = this;
        this.aniStateMove.pause();
        this.skeSwing.paused = false;
        this.skeSwing.setAnimation(0, "suicide", false);
        this.skeSwing.setEndListener(function() {
          _this.node.stopAllActions();
          var ac1 = cc.delayTime(1);
          var ac2 = cc.spawn(cc.fadeOut(1), cc.rotateBy(1, 360), cc.scaleTo(1, 0));
          var ac3 = cc.callFunc(_this.fishBDNormal.destroy, _this.fishBDNormal);
          _this.node.runAction(cc.sequence(ac1, ac2, ac3));
          _this.skeSwing.setEndListener(null);
        });
      };
      FishBDChildHaiThanView.prototype.playAniRemove = function() {};
      FishBDChildHaiThanView = __decorate([ ccclass ], FishBDChildHaiThanView);
      return FishBDChildHaiThanView;
    }(FishBDNormalView_1.default);
    exports.default = FishBDChildHaiThanView;
    cc._RF.pop();
  }, {
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  "FishBDGroup3View ": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ba4fM/1W5DkK3wKTj6t4Yl", "FishBDGroup3View ");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var FishStateBD_1 = require("./FishStateBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDGroup3View = function(_super) {
      __extends(FishBDGroup3View, _super);
      function FishBDGroup3View() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ani = null;
        _this.aniStateMove = null;
        _this.listColider = [];
        _this.fishBDNormal = null;
        _this.baseSpeed = 1;
        _this.listSkeSwing = [];
        return _this;
      }
      FishBDGroup3View.prototype.onLoad = function() {
        cc.log("co fish 3 view nay");
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this.listSkeSwing = this.getComponentsInChildren(sp.Skeleton);
        for (var i = 0, l = this.listSkeSwing.length - 1; i < l; i++) this.node.children[i].runAction(cc.repeatForever(cc.rotateBy(2, 360)));
      };
      FishBDGroup3View.prototype.initAni = function(clip, speed, currentTime) {
        var _this = this;
        this.ani.getClips().forEach(function(v) {
          _this.ani.removeClip(v, true);
        });
        this.node.setPosition(1e4, 1e4);
        this.ani.addClip(clip);
        this.aniStateMove = this.ani.play(clip.name);
        this.aniStateMove.speed = speed;
        this.aniStateMove.time = currentTime;
        this.node.scale = 1;
        if (this.fishBDNormal.timeEffectHide > 0) {
          this.node.opacity = 0;
          this.node.runAction(cc.sequence(cc.delayTime(this.fishBDNormal.timeEffectHide), cc.fadeIn(.1)));
        } else this.node.opacity = 255;
        this.aniStateMove.sample();
        this.fishBDNormal.fishState == FishStateBD_1.default.ICE ? this.pauAniFish() : this.fishBDNormal.fishState == FishStateBD_1.default.WATING ? this.aniStateMove.pause() : this.resume();
        for (var i = 0, l = this.node.childrenCount; i < l; i++) {
          var node = this.node.children[i];
          node.color = cc.Color.WHITE;
        }
        return this;
      };
      FishBDGroup3View.prototype.initViewFish = function(fishMain, fishChild) {
        return __awaiter(this, void 0, void 0, function() {
          var _a, r1, r2, l, i;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              return [ 4, Promise.all([ Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Spine/Fish/Fish_" + (fishMain - 1), sp.SkeletonData), Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Spine/Fish/Fish_" + (fishChild - 1), sp.SkeletonData) ]) ];

             case 1:
              _a = _b.sent(), r1 = _a[0], r2 = _a[1];
              l = this.listSkeSwing.length - 1;
              this.listSkeSwing[l].skeletonData = r1;
              this.listSkeSwing[l].setAnimation(0, "animation", true);
              for (i = 0; i < l; i++) {
                this.listSkeSwing[i].skeletonData = r2;
                this.listSkeSwing[i].setAnimation(0, "animation", true);
              }
              return [ 2 ];
            }
          });
        });
      };
      FishBDGroup3View.prototype.playAniSwing = function() {
        var _this = this;
        this.listSkeSwing.forEach(function(v) {
          v.paused = false;
          v.timeScale = _this.baseSpeed;
        });
      };
      FishBDGroup3View.prototype.stopAniSwing = function() {
        this.fishBDNormal.isDeadEffect || this.listSkeSwing.forEach(function(v) {
          v.paused = true;
        });
      };
      FishBDGroup3View.prototype.playAniDead = function() {
        this.pauAniFish();
        this.listSkeSwing.forEach(function(v) {
          v.paused = false;
          v.timeScale = 10;
        });
      };
      FishBDGroup3View.prototype.playAniRemove = function() {
        this.node.stopAllActions();
        var ac1 = cc.delayTime(1);
        var ac2 = cc.fadeOut(1);
        var ac3 = cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal);
        this.node.runAction(cc.sequence(ac1, ac2, ac3));
      };
      FishBDGroup3View.prototype.getListPos = function() {
        var listPos = [ this.node.getPosition() ];
        for (var i = 0; i < this.listSkeSwing.length - 1; i++) {
          var node = this.node.children[i];
          var worldPos2 = this.node.convertToWorldSpaceAR(node.getPosition());
          var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
          listPos.push(viewPos2);
        }
        return listPos;
      };
      FishBDGroup3View.prototype.onColision = function(colider) {
        for (var i = 0, l = this.node.childrenCount; i < l; i++) {
          var node = this.node.children[i];
          node.stopActionByTag(123456);
          cc.tween(node).tag(123456).to(.09, {
            color: new cc.Color(245, 83, 83)
          }).delay(.08).to(.05, {
            color: cc.Color.WHITE
          }).start();
        }
      };
      FishBDGroup3View = __decorate([ ccclass ], FishBDGroup3View);
      return FishBDGroup3View;
    }(FishBDNormalView_1.default);
    exports.default = FishBDGroup3View;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView",
    "./FishStateBD": "FishStateBD"
  } ],
  FishBDGroup4View: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a5dakf9P5MXYl6VB3hoCdN", "FishBDGroup4View");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDGroup3View_1 = require("./FishBDGroup3View ");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDGroup4View = function(_super) {
      __extends(FishBDGroup4View, _super);
      function FishBDGroup4View() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ani = null;
        _this.aniStateMove = null;
        _this.listColider = [];
        _this.fishBDNormal = null;
        _this.baseSpeed = 1;
        _this.listSkeSwing = [];
        return _this;
      }
      FishBDGroup4View.prototype.onLoad = function() {
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this.listSkeSwing = this.getComponentsInChildren(sp.Skeleton);
        for (var i = 0, l = this.listSkeSwing.length; i < l; i++) this.node.children[i].runAction(cc.repeatForever(cc.rotateBy(2, 360)));
      };
      FishBDGroup4View.prototype.initViewFish = function(listFishType) {
        return __awaiter(this, void 0, void 0, function() {
          var listAwait_1, listSke, i, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              listAwait_1 = [];
              listFishType.forEach(function(v) {
                listAwait_1.push(Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Spine/Fish/Fish_" + (v - 1), sp.SkeletonData));
              });
              return [ 4, Promise.all(listAwait_1) ];

             case 1:
              listSke = _a.sent();
              for (i = 0; i < listSke.length; i++) {
                this.listSkeSwing[i].skeletonData = listSke[i];
                this.listSkeSwing[i].setAnimation(0, "animation", true);
              }
              return [ 3, 3 ];

             case 2:
              e_1 = _a.sent();
              console.error(e_1);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      FishBDGroup4View.prototype.getListPos = function() {
        var listPos = [];
        for (var i = 0; i < this.listSkeSwing.length; i++) {
          var node = this.node.children[i];
          var worldPos2 = this.node.convertToWorldSpaceAR(node.getPosition());
          var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
          listPos.push(viewPos2);
        }
        return listPos;
      };
      FishBDGroup4View.prototype.onColision = function(colider) {
        var indexColider = this.listColider.indexOf(colider);
        if (indexColider > -1) {
          var node = colider.node;
          node.stopActionByTag(123456);
          cc.tween(node).tag(123456).to(.09, {
            color: new cc.Color(245, 83, 83)
          }).delay(.08).to(.05, {
            color: cc.Color.WHITE
          }).start();
          node = this.node.children[indexColider];
          node.stopActionByTag(123456);
          cc.tween(node).tag(123456).to(.09, {
            color: new cc.Color(245, 83, 83)
          }).delay(.08).to(.05, {
            color: cc.Color.WHITE
          }).start();
        }
      };
      FishBDGroup4View.prototype.update = function(dt) {
        for (var i = 0, l = this.listSkeSwing.length; i < l; i++) this.node.children[i].setPosition(this.node.children[i + l].getPosition());
      };
      FishBDGroup4View = __decorate([ ccclass ], FishBDGroup4View);
      return FishBDGroup4View;
    }(FishBDGroup3View_1.default);
    exports.default = FishBDGroup4View;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0,
    "./FishBDGroup3View ": "FishBDGroup3View "
  } ],
  FishBDGroup4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3db35Eq629NYLuzlZinp/8v", "FishBDGroup4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDGroup4View_1 = require("./FishBDGroup4View");
    var FishBDNormal_1 = require("./FishBDNormal");
    var FishBDGroup4 = function(_super) {
      __extends(FishBDGroup4, _super);
      function FishBDGroup4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listFishType = [];
        _this.fishView = null;
        return _this;
      }
      FishBDGroup4.prototype.initFish = function(object) {
        this.listFishType = JSON.parse(object.get("LFT"));
        _super.prototype.initFish.call(this, object);
      };
      FishBDGroup4.prototype.intiView = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fishNode, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              fishNode = null;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, this.fishMng.getFishViewPool(this.fishType) ];

             case 2:
              fishNode = _a.sent();
              if (!this.isInList) {
                this.fishMng.putPoolFish(fishNode, this.fishType);
                return [ 2 ];
              }
              this.fishView = fishNode.getComponent(FishBDGroup4View_1.default);
              this.fishView.initViewFish(this.listFishType);
              this.fishView.setFishBdNormal(this);
              this.fishView.initAni(this.getAniClipFromString(this.infoAni), this.speed, this.currentTimeInPath).setTagColider(this.fishId);
              this.funCallBackWhenInitView && this.funCallBackWhenInitView(this);
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              fishNode && this.fishMng.putPoolFish(fishNode, this.fishType);
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      return FishBDGroup4;
    }(FishBDNormal_1.default);
    exports.default = FishBDGroup4;
    cc._RF.pop();
  }, {
    "./FishBDGroup4View": "FishBDGroup4View",
    "./FishBDNormal": "FishBDNormal"
  } ],
  FishBDGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b751eVW0O1I/I+FALEpGDlq", "FishBDGroup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDGroup3View_1 = require("./FishBDGroup3View ");
    var FishBDNormal_1 = require("./FishBDNormal");
    var FishBDGroup = function(_super) {
      __extends(FishBDGroup, _super);
      function FishBDGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishTypeChild = -1;
        _this.fishTypeMain = -1;
        _this.fishView = null;
        return _this;
      }
      FishBDGroup.prototype.initFish = function(object) {
        this.fishTypeChild = object.get("FTC");
        this.fishTypeMain = object.get("FTM");
        _super.prototype.initFish.call(this, object);
      };
      FishBDGroup.prototype.intiView = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fishNode, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              fishNode = null;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, this.fishMng.getFishViewPool(this.fishType) ];

             case 2:
              fishNode = _a.sent();
              if (!this.isInList) {
                this.fishMng.putPoolFish(fishNode, this.fishType);
                return [ 2 ];
              }
              this.fishView = fishNode.getComponent(FishBDGroup3View_1.default);
              fishNode.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
              this.fishView.initViewFish(this.fishTypeMain, this.fishTypeChild);
              this.fishView.setFishBdNormal(this);
              this.fishView.initAni(this.getAniClipFromString(this.infoAni), this.speed, this.currentTimeInPath).setTagColider(this.fishId);
              this.funCallBackWhenInitView && this.funCallBackWhenInitView(this);
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              fishNode && this.fishMng.putPoolFish(fishNode, this.fishType);
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      return FishBDGroup;
    }(FishBDNormal_1.default);
    exports.default = FishBDGroup;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishBDGroup3View ": "FishBDGroup3View ",
    "./FishBDNormal": "FishBDNormal"
  } ],
  FishBDHaiThanView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "554c3cF9tlE/pnfSUm/Z4mY", "FishBDHaiThanView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDHaiThanView = function(_super) {
      __extends(FishBDHaiThanView, _super);
      function FishBDHaiThanView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listPointItem = [ cc.v2(78.873, -50), cc.v2(-37.449, 32.556), cc.v2(29.55, -10), cc.v2(-141.806, -8.7), cc.v2(25.08, 65), cc.v2(25.08, 65) ];
        _this.skeSwing = null;
        _this.aniAura = null;
        _this.currentPosItem = null;
        return _this;
      }
      FishBDHaiThanView.prototype.onLoad = function() {
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this._setMix("Walk", "Walk_Hand_Cover");
        this._setMix("Walk_Hand_Cover", "Walk_Rotate_Trident");
        this._setMix("Walk_Rotate_Trident", "Walk_wShield");
        this._setMix("Walk_wShield", "Walk_Slap_Tail");
        this._setMix("Walk_Slap_Tail", "Walk");
        this._setMix("Walk", "Die");
        this._setMix("Walk_Hand_Cover", "Die");
        this._setMix("Walk_Rotate_Trident", "Die");
        this._setMix("Walk_wShield", "Die");
        this._setMix("Walk_Slap_Tail", "Die");
        this.aniAura.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        this.skeSwing.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
      };
      FishBDHaiThanView.prototype._setMix = function(anim1, anim2) {
        this.skeSwing.setMix(anim1, anim2, .5);
        this.skeSwing.setMix(anim2, anim1, .5);
      };
      FishBDHaiThanView.prototype.initAni = function(clip, speed, currentTime) {
        _super.prototype.initAni.call(this, clip, speed, currentTime);
        Windown_1.Windown.FishBongDem.fishBDView.comingHaiThan();
        return this;
      };
      FishBDHaiThanView.prototype.getFishHaiThan = function() {
        return this.fishBDNormal;
      };
      FishBDHaiThanView.prototype.setStateAni = function() {
        this.skeSwing.timeScale = 1;
        for (var i = 0; i < this.getFishHaiThan().stateItem; i++) 0 == i || (1 == i ? this.offVayItem() : 2 == i ? this.offHeadIAmortem() : 3 == i ? this.offGiapTay() : 4 == i ? this.offDinhBa() : 5 == i && this.offKhien());
        this.updateStateAni();
      };
      FishBDHaiThanView.prototype.updateStateAni = function() {
        if (0 == this.getFishHaiThan().stateItem) {
          this.skeSwing.setAnimation(0, "Walk", true);
          this.aniAura.setAnimation(0, "5", true);
        } else if (1 == this.getFishHaiThan().stateItem) {
          this.skeSwing.setAnimation(0, "Walk", true);
          this.offVayItem();
          this.aniAura.setAnimation(0, "4", true);
        } else if (2 == this.getFishHaiThan().stateItem) {
          this.skeSwing.setAnimation(0, "Walk_Hand_Cover", true);
          this.offHeadIAmortem();
          this.aniAura.setAnimation(0, "3", true);
        } else if (3 == this.getFishHaiThan().stateItem) {
          this.skeSwing.setAnimation(0, "Walk_Rotate_Trident", true);
          this.offGiapTay();
          this.aniAura.setAnimation(0, "2", true);
        } else if (4 == this.getFishHaiThan().stateItem) {
          this.skeSwing.setAnimation(0, "Walk_wShield", true);
          this.offDinhBa();
          this.aniAura.setAnimation(0, "1", true);
        } else if (5 == this.getFishHaiThan().stateItem) {
          this.aniAura.node.active = false;
          this.offKhien();
          this.skeSwing.setAnimation(0, "Walk_Slap_Tail", false);
          this.skeSwing.addAnimation(0, "Walk", true, 0);
        }
        this.currentPosItem = this.listPointItem[this.getFishHaiThan().stateItem].clone();
      };
      FishBDHaiThanView.prototype.playAniSwing = function() {
        this.skeSwing.paused = false;
        this.aniAura.paused = false;
        this.skeSwing.timeScale = this.baseSpeed;
        this.skeSwing.setAnimation(0, "Walk", true);
      };
      FishBDHaiThanView.prototype.stopAniSwing = function() {
        if (!this.fishBDNormal.isDeadEffect) {
          this.skeSwing.paused = true;
          this.aniAura.paused = true;
        }
      };
      FishBDHaiThanView.prototype.playAniDead = function() {
        var _this = this;
        this.aniStateMove.pause();
        this.skeSwing.paused = false;
        this.skeSwing.timeScale = 1;
        this.skeSwing.setAnimation(0, "Die", false);
        this.skeSwing.setEndListener(function() {
          _this.node.stopAllActions();
          var ac1 = cc.delayTime(1);
          var ac2 = cc.fadeOut(1);
          var ac3 = cc.callFunc(_this.fishBDNormal.destroy, _this.fishBDNormal);
          _this.node.runAction(cc.sequence(ac1, ac2, ac3));
          _this.resetAni();
          _this.skeSwing.setEndListener(null);
        });
      };
      FishBDHaiThanView.prototype.playAniRemove = function() {};
      FishBDHaiThanView.prototype.onColision = function(colider) {
        for (var i = 0, l = this.node.childrenCount; i < l; i++) {
          var node = this.node.children[i];
          node.stopActionByTag(123456);
          cc.tween(node).tag(123456).to(.09, {
            color: new cc.Color(245, 83, 83)
          }).delay(.08).to(.05, {
            color: cc.Color.WHITE
          }).start();
        }
      };
      FishBDHaiThanView.prototype.offVayItem = function() {
        this.skeSwing.setAttachment("L_Arm_Armor", null);
        this.skeSwing.setAttachment("R_Arm_armor", null);
      };
      FishBDHaiThanView.prototype.offHeadIAmortem = function() {
        this.skeSwing.setAttachment("Head_Armor", null);
      };
      FishBDHaiThanView.prototype.offGiapTay = function() {
        this.skeSwing.setAttachment("L_Shoulder_Armor", null);
        this.skeSwing.setAttachment("R_Shoulder_Armor", null);
      };
      FishBDHaiThanView.prototype.offDinhBa = function() {
        this.skeSwing.setAttachment("Trident", null);
        this.skeSwing.setAttachment("Trident2", null);
      };
      FishBDHaiThanView.prototype.offKhien = function() {
        this.skeSwing.setAttachment("Shield", null);
      };
      FishBDHaiThanView.prototype.getPointItem = function() {
        var worldPos = this.node.convertToWorldSpaceAR(this.currentPosItem);
        var viewPos = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos);
        return viewPos;
      };
      FishBDHaiThanView.prototype.getPointDuoi = function() {
        var pointDuoi = cc.v2(75, -99.158);
        var worldPos = this.node.convertToWorldSpaceAR(pointDuoi);
        var viewPos = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos);
        return viewPos;
      };
      FishBDHaiThanView.prototype.resetAni = function() {
        if (null == this.skeSwing) return;
        this.skeSwing.setAttachment("L_Shoulder_Armor", "L_Shoulder_Armor");
        this.skeSwing.setAttachment("R_Shoulder_Armor", "R_Shoulder_Armor");
        this.skeSwing.setAttachment("Head_Armor", "Head_Armor");
        this.skeSwing.setAttachment("Trident", "Trident");
        this.skeSwing.setAttachment("Trident2", "Trident");
        this.skeSwing.setAttachment("Shield", "Shield");
        this.skeSwing.setAttachment("R_Arm_armor", "R_Arm_armor");
        this.skeSwing.setAttachment("L_Arm_Armor", "L_Arm_Armor");
        this.aniAura.node.active = true;
      };
      FishBDHaiThanView.prototype.onPutNode = function() {
        Windown_1.Windown.FishBongDem.fishBDView.offHaiThan();
      };
      __decorate([ property(sp.Skeleton) ], FishBDHaiThanView.prototype, "skeSwing", void 0);
      __decorate([ property(sp.Skeleton) ], FishBDHaiThanView.prototype, "aniAura", void 0);
      FishBDHaiThanView = __decorate([ ccclass ], FishBDHaiThanView);
      return FishBDHaiThanView;
    }(FishBDNormalView_1.default);
    exports.default = FishBDHaiThanView;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDHaiThan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1194PosVVARLu2vptiE1TH", "FishBDHaiThan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormal_1 = require("./FishBDNormal");
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var FishBDHaiThan = function(_super) {
      __extends(FishBDHaiThan, _super);
      function FishBDHaiThan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.stateItem = 0;
        return _this;
      }
      FishBDHaiThan.prototype.initFish = function(object) {
        this.stateItem = object.get("StateItems");
        cc.log("this.stateItem: " + this.stateItem);
        _super.prototype.initFish.call(this, object);
      };
      FishBDHaiThan.prototype.intiView = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fishNode, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              fishNode = null;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, this.fishMng.getFishViewPool(this.fishType) ];

             case 2:
              fishNode = _a.sent();
              if (!this.isInList) {
                this.fishMng.putPoolFish(fishNode, this.fishType);
                return [ 2 ];
              }
              this.fishView = fishNode.getComponent(FishBDNormalView_1.default);
              fishNode.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
              this.fishView.setFishBdNormal(this);
              this.fishView.initAni(this.getAniClipFromString(this.infoAni), this.speed, this.currentTimeInPath).setTagColider(this.fishId);
              this.fishView.setStateAni();
              this.funCallBackWhenInitView && this.funCallBackWhenInitView(this);
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              fishNode && this.fishMng.putPoolFish(fishNode, this.fishType);
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      FishBDHaiThan.prototype.getPointItem = function() {
        if (this.fishView) return this.fishView.getPointItem();
        return cc.v2(0, 0);
      };
      FishBDHaiThan.prototype.updateStateAni = function() {
        if (this.fishView) return this.fishView.updateStateAni();
      };
      return FishBDHaiThan;
    }(FishBDNormal_1.default);
    exports.default = FishBDHaiThan;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormal": "FishBDNormal",
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDJackpotView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f022iI5TRHjbhpA6ayJSbh", "FishBDJackpotView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var JackpotItem_1 = require("../../../../Scritps/Obs/JackpotItem");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDJackpotView = function(_super) {
      __extends(FishBDJackpotView, _super);
      function FishBDJackpotView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBDJackpotView.prototype.onLoad = function() {
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this.skeSwing = this.getComponentInChildren(sp.Skeleton);
        this.node.children[0].runAction(cc.repeatForever(cc.rotateBy(4, 360)));
      };
      FishBDJackpotView.prototype.initAni = function(clip, speed, currentTime) {
        Windown_1.Windown.FishBongDem.fishBDView.coningJackpot();
        Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().bkgJackpot, 1, true);
        Windown_1.Windown.FishBongDem.lbJp = this.getComponentInChildren(JackpotItem_1.default);
        Windown_1.Windown.FishBongDem.emitNewIndexJp();
        return _super.prototype.initAni.call(this, clip, speed, currentTime);
      };
      FishBDJackpotView.prototype.setSke = function(isMoveRevert) {
        if (isMoveRevert) {
          this.skeSwing.setAnimation(0, "animation_trai", true);
          this.listColider.forEach(function(v) {
            v.node.scaleX = -1;
          });
        } else {
          this.skeSwing.setAnimation(0, "animation_phai", true);
          this.listColider.forEach(function(v) {
            v.node.scaleX = 1;
          });
        }
      };
      FishBDJackpotView.prototype.playAniDead = function() {
        this.pauAniFish();
      };
      FishBDJackpotView.prototype.playAniRemove = function() {
        this.node.stopAllActions();
        var ac1 = cc.delayTime(1);
        var ac2 = cc.spawn(cc.fadeOut(1), cc.scaleTo(1, 0));
        var ac3 = cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal);
        this.node.runAction(cc.sequence(ac1, ac2, ac3));
      };
      FishBDJackpotView.prototype.onPutNode = function() {
        Windown_1.Windown.FishBongDem.lbJp = null;
        Windown_1.Windown.FishBongDem.getSound().stopEffect(Windown_1.Windown.FishBongDem.getSound().bkgJackpot);
      };
      FishBDJackpotView = __decorate([ ccclass ], FishBDJackpotView);
      return FishBDJackpotView;
    }(FishBDNormalView_1.default);
    exports.default = FishBDJackpotView;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Obs/JackpotItem": void 0,
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b49ac9CTTFHTLFT6XBvzrr1", "FishBDManager");
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var InfoERR_1 = require("../../../../Scritps/InfoERR");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDCaTran_1 = require("./FishBDCaTran");
    var FishBDGroup_1 = require("./FishBDGroup");
    var FishBDGroup4_1 = require("./FishBDGroup4");
    var FishBDHaiThan_1 = require("./FishBDHaiThan");
    var FishBDMutil_1 = require("./FishBDMutil");
    var FishBDNormal_1 = require("./FishBDNormal");
    var FISH_TYPE_1 = require("./FISH_TYPE");
    var FishBDManager = function() {
      function FishBDManager(gameExt) {
        this.poolFish1 = new cc.NodePool();
        this.poolFish2 = new cc.NodePool();
        this.poolFish3 = new cc.NodePool();
        this.poolFish4 = new cc.NodePool();
        this.poolFish5 = new cc.NodePool();
        this.poolFish6 = new cc.NodePool();
        this.poolFish7 = new cc.NodePool();
        this.poolFish8 = new cc.NodePool();
        this.poolFish9 = new cc.NodePool();
        this.poolFish10 = new cc.NodePool();
        this.poolFish11 = new cc.NodePool();
        this.poolFish12 = new cc.NodePool();
        this.poolFish13 = new cc.NodePool();
        this.poolFish14 = new cc.NodePool();
        this.poolFish15 = new cc.NodePool();
        this.poolFish16 = new cc.NodePool();
        this.poolFish17 = new cc.NodePool();
        this.poolFish18 = new cc.NodePool();
        this.poolFish19 = new cc.NodePool();
        this.poolFish20 = new cc.NodePool();
        this.poolFish21 = new cc.NodePool();
        this.poolFish22 = new cc.NodePool();
        this.poolFish23 = new cc.NodePool();
        this.poolFish24 = new cc.NodePool();
        this.poolFish25 = new cc.NodePool();
        this.poolFish26 = new cc.NodePool();
        this.poolFish27 = new cc.NodePool();
        this.poolFish28 = new cc.NodePool();
        this.poolFish29 = new cc.NodePool();
        this.poolFish30 = new cc.NodePool();
        this.poolFish31 = new cc.NodePool();
        this.poolFish32 = new cc.NodePool();
        this.poolFish33 = new cc.NodePool();
        this.poolFish34 = new cc.NodePool();
        this.poolFish35 = new cc.NodePool();
        this.poolFish36 = new cc.NodePool();
        this.poolFish37 = new cc.NodePool();
        this.poolFish38 = new cc.NodePool();
        this.poolFish39 = new cc.NodePool();
        this.poolFish40 = new cc.NodePool();
        this.poolFish50 = new cc.NodePool();
        this.poolFish51 = new cc.NodePool();
        this.poolFish52 = new cc.NodePool();
        this.poolFish53 = new cc.NodePool();
        this.poolFish54 = new cc.NodePool();
        this.poolFish55 = new cc.NodePool();
        this.poolFish56 = new cc.NodePool();
        this.poolFish70 = new cc.NodePool();
        this.poolFish71 = new cc.NodePool();
        this.poolFish72 = new cc.NodePool();
        this.poolFish73 = new cc.NodePool();
        this.poolFish74 = new cc.NodePool();
        this.poolFish100 = new cc.NodePool();
        this.poolFish101 = new cc.NodePool();
        this.poolFish102 = new cc.NodePool();
        this.poolFish103 = new cc.NodePool();
        this.poolFish110 = new cc.NodePool();
        this.poolFish155 = new cc.NodePool();
        this.poolFish156 = new cc.NodePool();
        this.poolFish157 = new cc.NodePool();
        this.fishBD = null;
        this.isInit = false;
        this._map = null;
        this._mapFConfig = null;
        this.listReject = [];
        this.fishBD = gameExt;
        this._map = new Map();
        this._mapFConfig = new Map();
      }
      FishBDManager.prototype.initGame = function() {
        this.isInit = true;
        var scheduler = cc.director.getScheduler();
        scheduler.enableForTarget(this);
        scheduler.scheduleUpdate(this, cc.Scheduler.PRIORITY_SYSTEM, false);
      };
      FishBDManager.prototype.addListFish = function(packet, arrFun) {
        for (var i = 0, l = packet.size(); i < l; i++) {
          var obj = packet.getSFSObject(i);
          var type = obj.getInt("FishType");
          var fishId = obj.getInt("FishId");
          var fish = this.getFishWithType(type);
          arrFun && arrFun[i] && (fish.funCallBackWhenInitView = arrFun[i]);
          fish.initFish(obj);
          var fishOld = this._map.get(fishId);
          if (fishOld) {
            fishOld.removeFishFromList();
            fishOld.destroy();
          }
          this._map.set(fishId, fish);
        }
      };
      FishBDManager.prototype.setFishConfig = function(packet) {
        for (var i = 0, l = packet.size(); i < l; i++) {
          var obj = packet.getSFSObject(i);
          this._mapFConfig.set(obj.get("type"), obj);
        }
      };
      FishBDManager.prototype.getFishCfByType = function(type) {
        return this._mapFConfig.get(type);
      };
      FishBDManager.prototype.getFishWithType = function(type) {
        if (type == FISH_TYPE_1.default.CA_GROUP || type == FISH_TYPE_1.default.CA_GROUP4) return new FishBDGroup_1.default(this);
        if (type == FISH_TYPE_1.default.CA_GROUP4_1) return new FishBDGroup4_1.default(this);
        if (type == FISH_TYPE_1.default.HAI_THAN) return new FishBDHaiThan_1.default(this);
        if (type == FISH_TYPE_1.default.CA_TRAN_1) return new FishBDCaTran_1.default(this);
        if (type == FISH_TYPE_1.default.MUTIL || type == FISH_TYPE_1.default.LOC_XOAY) return new FishBDMutil_1.default(this);
        return new FishBDNormal_1.default(this);
      };
      FishBDManager.prototype.getFishById = function(id) {
        return this._map.has(id) ? this._map.get(id) : null;
      };
      FishBDManager.prototype.removeFish = function(id) {
        this._map.delete(id);
      };
      FishBDManager.prototype.update = function(dt) {
        this._map.forEach(function(v, k) {
          v.update(dt);
        });
      };
      FishBDManager.prototype.iceAllFish = function(time) {
        this._map.forEach(function(v, k) {
          v.setTimeEffectIce(time);
        });
      };
      FishBDManager.prototype.getFishViewPool = function(type) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var str, node, pool, pre, e_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                str = "poolFish" + type;
                node = null;
                pool = this[str];
                _a.label = 1;

               case 1:
                _a.trys.push([ 1, 5, , 6 ]);
                if (!(pool.size() < 1)) return [ 3, 3 ];
                return [ 4, this.getPrefabsFish(type) ];

               case 2:
                pre = _a.sent();
                node = cc.instantiate(pre);
                return [ 3, 4 ];

               case 3:
                node = pool.get();
                _a.label = 4;

               case 4:
                node.parent = this.fishBD.fishBDView.parentFish;
                node.zIndex = type;
                resolve(node);
                return [ 3, 6 ];

               case 5:
                e_1 = _a.sent();
                console.log(e_1);
                reject(e_1);
                return [ 3, 6 ];

               case 6:
                return [ 2 ];
              }
            });
          });
        });
      };
      FishBDManager.prototype.getPrefabsFish = function(type) {
        var _this = this;
        return new Promise(function(r, j) {
          return __awaiter(_this, void 0, void 0, function() {
            var pre;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.addReject(j);
                return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Fish/Fish" + type, cc.Prefab) ];

               case 1:
                pre = _a.sent();
                this.removeReject(j);
                r(pre);
                return [ 2 ];
              }
            });
          });
        });
      };
      FishBDManager.prototype.putPoolFish = function(node, type) {
        if (node) {
          var str = "poolFish" + type;
          var pool = this[str];
          pool.put(node);
        }
      };
      FishBDManager.prototype.addReject = function(reject) {
        this.listReject.includes(reject) || this.listReject.push(reject);
      };
      FishBDManager.prototype.removeReject = function(reject) {
        var indexOf = this.listReject.indexOf(reject);
        indexOf > -1 && this.listReject.splice(indexOf, 1);
      };
      FishBDManager.prototype.clearAllReject = function() {
        this.listReject.forEach(function(v) {
          v(new InfoERR_1.InfoErr("Da destroy Ca"));
        });
      };
      FishBDManager.prototype.forEachListFish = function(fun) {
        this._map.forEach(fun);
      };
      FishBDManager.prototype.getMapFish = function() {
        return this._map;
      };
      FishBDManager.prototype.destroy = function() {
        if (this.isInit) {
          var scheduler = cc.director.getScheduler();
          scheduler.unscheduleUpdate(this);
        }
        this.clearAllReject();
        this._map.forEach(function(v, k) {
          v.destroy();
          v.removeFishFromList();
        });
        this.isInit = false;
        this._map.clear();
        this._mapFConfig.clear();
        this.poolFish1.clear();
        this.poolFish2.clear();
        this.poolFish3.clear();
        this.poolFish4.clear();
        this.poolFish5.clear();
        this.poolFish6.clear();
        this.poolFish7.clear();
        this.poolFish8.clear();
        this.poolFish9.clear();
        this.poolFish10.clear();
        this.poolFish11.clear();
        this.poolFish12.clear();
        this.poolFish13.clear();
        this.poolFish14.clear();
        this.poolFish15.clear();
        this.poolFish16.clear();
        this.poolFish17.clear();
        this.poolFish18.clear();
        this.poolFish19.clear();
        this.poolFish20.clear();
        this.poolFish21.clear();
        this.poolFish22.clear();
        this.poolFish23.clear();
        this.poolFish24.clear();
        this.poolFish25.clear();
        this.poolFish26.clear();
        this.poolFish27.clear();
        this.poolFish28.clear();
        this.poolFish29.clear();
        this.poolFish30.clear();
        this.poolFish31.clear();
        this.poolFish32.clear();
        this.poolFish33.clear();
        this.poolFish34.clear();
        this.poolFish35.clear();
        this.poolFish36.clear();
        this.poolFish37.clear();
        this.poolFish38.clear();
        this.poolFish39.clear();
        this.poolFish40.clear();
        this.poolFish50.clear();
        this.poolFish51.clear();
        this.poolFish52.clear();
        this.poolFish53.clear();
        this.poolFish54.clear();
        this.poolFish55.clear();
        this.poolFish56.clear();
        this.poolFish70.clear();
        this.poolFish71.clear();
        this.poolFish72.clear();
        this.poolFish73.clear();
        this.poolFish74.clear();
        this.poolFish56.clear();
        this.poolFish100.clear();
        this.poolFish101.clear();
        this.poolFish102.clear();
        this.poolFish103.clear();
        this.poolFish110.clear();
        this.poolFish155.clear();
        this.poolFish156.clear();
        this.poolFish157.clear();
      };
      return FishBDManager;
    }();
    exports.default = FishBDManager;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/InfoERR": void 0,
    "../../../../Scritps/Windown": void 0,
    "./FISH_TYPE": "FISH_TYPE",
    "./FishBDCaTran": "FishBDCaTran",
    "./FishBDGroup": "FishBDGroup",
    "./FishBDGroup4": "FishBDGroup4",
    "./FishBDHaiThan": "FishBDHaiThan",
    "./FishBDMutil": "FishBDMutil",
    "./FishBDNormal": "FishBDNormal"
  } ],
  FishBDMuiKhoanView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a04860+CJZGiaRwN0by1afw", "FishBDMuiKhoanView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBdMuiKhoanView = function(_super) {
      __extends(FishBdMuiKhoanView, _super);
      function FishBdMuiKhoanView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBdMuiKhoanView.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.skeSwing.setAttachment("sunglaser", null);
      };
      FishBdMuiKhoanView = __decorate([ ccclass ], FishBdMuiKhoanView);
      return FishBdMuiKhoanView;
    }(FishBDNormalView_1.default);
    exports.default = FishBdMuiKhoanView;
    cc._RF.pop();
  }, {
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDMutil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a411egbs5FOl7ReqLkuScWC", "FishBDMutil");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDCaTran_1 = require("./FishBDCaTran");
    var FishBDMultil = function(_super) {
      __extends(FishBDMultil, _super);
      function FishBDMultil() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mutil = 1;
        return _this;
      }
      FishBDMultil.prototype.initFish = function(object) {
        this.mutil = object.get("Mutil");
        _super.prototype.initFish.call(this, object);
      };
      return FishBDMultil;
    }(FishBDCaTran_1.default);
    exports.default = FishBDMultil;
    cc._RF.pop();
  }, {
    "./FishBDCaTran": "FishBDCaTran"
  } ],
  FishBDNormalView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de10dnSlH1OubPPxtjrRG4C", "FishBDNormalView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishStateBD_1 = require("./FishStateBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDNormalView = function(_super) {
      __extends(FishBDNormalView, _super);
      function FishBDNormalView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ani = null;
        _this.aniStateMove = null;
        _this.skeSwing = null;
        _this.listColider = [];
        _this.fishBDNormal = null;
        _this.baseSpeed = 1;
        return _this;
      }
      FishBDNormalView.prototype.onLoad = function() {
        this.ani = this.addComponent(cc.Animation);
        this.listColider = this.getComponentsInChildren(cc.Collider);
        this.skeSwing = this.getComponentInChildren(sp.Skeleton);
        this.skeSwing.setAnimation(0, "animation", true);
      };
      FishBDNormalView.prototype.setFishBdNormal = function(value) {
        this.fishBDNormal = value;
      };
      FishBDNormalView.prototype.setCurrentTimeAni = function(time) {
        this.aniStateMove.time = time;
        return this;
      };
      FishBDNormalView.prototype.setSpeedAni = function(speed) {
        this.aniStateMove.speed = speed;
        return this;
      };
      FishBDNormalView.prototype.setTagColider = function(tag) {
        this.listColider.forEach(function(v) {
          v.tag = tag;
        });
      };
      FishBDNormalView.prototype.getPos = function() {
        var worldPos2 = this.node.children[0].parent.convertToWorldSpaceAR(this.node.children[0].getPosition());
        var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
        return viewPos2;
      };
      FishBDNormalView.prototype.pauAniFish = function() {
        this.aniStateMove.pause();
        this.stopAniSwing();
      };
      FishBDNormalView.prototype.resume = function() {
        this.aniStateMove.isPaused && this.aniStateMove.resume();
        this.playAniSwing();
      };
      FishBDNormalView.prototype.initAni = function(clip, speed, currentTime) {
        var _this = this;
        this.ani.getClips().forEach(function(v) {
          _this.ani.removeClip(v, true);
        });
        this.node.setPosition(1e4, 1e4);
        "view" == this.node.children[0].name && this.node.children[0].setPosition(0, 0);
        this.ani.addClip(clip);
        this.aniStateMove = this.ani.play(clip.name);
        this.aniStateMove.speed = speed;
        this.aniStateMove.time = currentTime;
        this.node.scale = 1;
        this.baseSpeed = this.fishBDNormal.speed + .2;
        if (this.fishBDNormal.timeEffectHide > 0) {
          this.node.opacity = 0;
          this.node.runAction(cc.sequence(cc.delayTime(this.fishBDNormal.timeEffectHide), cc.fadeIn(.1)));
        } else this.node.opacity = 255;
        this.aniStateMove.sample();
        for (var i = 0, l = this.node.childrenCount; i < l; i++) {
          var node = this.node.children[i];
          node.color = cc.Color.WHITE;
        }
        this.fishBDNormal.fishState == FishStateBD_1.default.ICE ? this.pauAniFish() : this.fishBDNormal.fishState == FishStateBD_1.default.WATING ? this.aniStateMove.pause() : this.resume();
        return this;
      };
      FishBDNormalView.prototype.playAniSwing = function() {
        this.skeSwing.paused = false;
        this.skeSwing.timeScale = this.baseSpeed;
      };
      FishBDNormalView.prototype.stopAniSwing = function() {
        this.fishBDNormal.isDeadEffect || (this.skeSwing.paused = true);
      };
      FishBDNormalView.prototype.playAniDead = function() {
        this.pauAniFish();
        this.skeSwing.paused = false;
        this.skeSwing.timeScale = 10;
      };
      FishBDNormalView.prototype.playAniRemove = function() {
        this.node.stopAllActions();
        var ac1 = cc.delayTime(1);
        var ac2 = cc.spawn(cc.fadeOut(1), cc.rotateBy(1, 360), cc.scaleTo(1, 0));
        var ac3 = cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal);
        this.node.runAction(cc.sequence(ac1, ac2, ac3));
      };
      FishBDNormalView.prototype.playAniNewTurn = function() {
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal)));
      };
      FishBDNormalView.prototype.onColision = function(colider) {
        var node = this.node.children[0];
        node.stopActionByTag(123456);
        cc.tween(node).tag(123456).to(.09, {
          color: new cc.Color(245, 83, 83)
        }).delay(.08).to(.05, {
          color: cc.Color.WHITE
        }).start();
      };
      FishBDNormalView.prototype.checkColiderInScreen = function(coliderCheck) {
        var colider = null;
        "number" == typeof colider ? colider = this.listColider[coliderCheck] : this.listColider.includes(coliderCheck) && (colider = coliderCheck);
        if (colider) {
          var worldPos2 = colider.node.parent.convertToWorldSpaceAR(colider.node.getPosition());
          var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
          if (viewPos2.x > 640 || viewPos2.x < -640 || viewPos2.y > 360 || viewPos2.y < -360) return null;
          return viewPos2;
        }
        return null;
      };
      FishBDNormalView.prototype.getColiderInScreen = function(lastColider) {
        for (var _i = 0, _a = this.listColider; _i < _a.length; _i++) {
          var colider = _a[_i];
          if (colider == lastColider) continue;
          if (this.checkColiderInScreen(colider)) return colider;
        }
        return null;
      };
      FishBDNormalView.prototype.getPointColider = function(colider) {
        "number" == typeof colider && (colider = this.listColider[colider]);
        if (!this.listColider.includes(colider)) return null;
        var worldPos2 = colider.node.parent.convertToWorldSpaceAR(colider.node.getPosition());
        var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
        return viewPos2;
      };
      FishBDNormalView.prototype.getPointInFuture = function(time, colider) {
        if (!this.listColider.includes(colider)) return cc.v2(0, 0);
        if (this.aniStateMove.isPaused) return this.getPointColider(colider);
        var timeCurrent = this.aniStateMove.time;
        var timeNext = timeCurrent + time * this.aniStateMove.speed;
        this.aniStateMove.time = timeNext;
        this.aniStateMove.sample();
        var worldPos2 = colider.node.parent.convertToWorldSpaceAR(colider.node.getPosition());
        var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
        this.aniStateMove.time = timeCurrent;
        this.aniStateMove.sample();
        return viewPos2;
      };
      FishBDNormalView.prototype.onPutNode = function() {};
      FishBDNormalView = __decorate([ ccclass ], FishBDNormalView);
      return FishBDNormalView;
    }(cc.Component);
    exports.default = FishBDNormalView;
    cc._RF.pop();
  }, {
    "./FishStateBD": "FishStateBD"
  } ],
  FishBDNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3799bIit0NH7Z1ZbXbPlfqk", "FishBDNormal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishBD_1 = require("./BaseFishBD");
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var FishBDNormal = function(_super) {
      __extends(FishBDNormal, _super);
      function FishBDNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBDNormal.prototype.initFish = function(object) {
        this.fishId = object.get("FishId");
        this.fishType = object.get("FishType");
        this.timeMove = object.get("TimeMove");
        this.currentTimeInPath = object.get("CurrentTimeInPath") + Windown_1.Windown.LagValue;
        this.fishState = object.get("FishState");
        this.timeEffectIce = object.get("TimeEffectIce") - Windown_1.Windown.LagValue;
        this.timeEffectWaiting = object.get("TimeEffectWaiting") - Windown_1.Windown.LagValue;
        this.timeEffectHide = object.get("TimeEffectHide") - Windown_1.Windown.LagValue;
        this.infoAni = object.get("InfoAni");
        this.speed = object.get("Speed");
        this.isInList = true;
        this.checkTimeEffect(0);
        this.intiView();
      };
      FishBDNormal.prototype.setTimeEffectWating = function(time) {
        this.timeEffectWaiting < time && (this.timeEffectWaiting = time);
      };
      FishBDNormal.prototype.setTimeEffectIce = function(time) {
        this.timeEffectIce < time && (this.timeEffectIce = time);
      };
      FishBDNormal.prototype.intiView = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fishNode, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              fishNode = null;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, this.fishMng.getFishViewPool(this.fishType) ];

             case 2:
              fishNode = _a.sent();
              if (!this.isInList) {
                this.fishMng.putPoolFish(fishNode, this.fishType);
                return [ 2 ];
              }
              this.fishView = fishNode.getComponent(FishBDNormalView_1.default);
              fishNode.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
              this.fishView.setFishBdNormal(this);
              this.fishView.initAni(this.getAniClipFromString(this.infoAni), this.speed, this.currentTimeInPath).setTagColider(this.fishId);
              this.funCallBackWhenInitView && this.funCallBackWhenInitView(this);
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              fishNode && this.fishMng.putPoolFish(fishNode, this.fishType);
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      FishBDNormal.prototype.destroy = function() {
        if (this.fishView) {
          this.fishView.onPutNode();
          this.fishMng.putPoolFish(this.fishView.node, this.fishType);
        }
        this.fishView = null;
        _super.prototype.destroy.call(this);
      };
      FishBDNormal.prototype.effectWating = function() {
        this.fishView && this.fishView.aniStateMove.pause();
      };
      FishBDNormal.prototype.effectIce = function() {
        this.fishView && this.fishView.pauAniFish();
      };
      FishBDNormal.prototype.effectNormal = function() {
        this.fishView && this.fishView.resume();
      };
      FishBDNormal.prototype.isInScreen = function() {
        if (null == this.fishView) return false;
        var currentPos = this.fishView.getPos();
        if (currentPos.x > 640 || currentPos.x < -640 || currentPos.y > 360 || currentPos.y < -360) return false;
        return true;
      };
      FishBDNormal.prototype.getPoint = function() {
        if (this.fishView) return this.fishView.getPos();
        return cc.v2(0, 0);
      };
      FishBDNormal.prototype.onColision = function(colider) {
        this.fishView && this.fishView.onColision(colider);
      };
      FishBDNormal.prototype.playAniNewTurn = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.fishView && this.fishView.playAniNewTurn();
            return [ 2 ];
          });
        });
      };
      FishBDNormal.prototype.getCanColision = function() {
        return this.isInList;
      };
      FishBDNormal.prototype.playAniSwing = function() {
        this.fishView && this.fishView.playAniSwing();
      };
      FishBDNormal.prototype.playAniDead = function() {
        if (this.isDeadEffect) return;
        this.isDeadEffect = true;
        this.fishView && this.fishView.playAniDead();
      };
      FishBDNormal.prototype.playAniRemove = function() {
        this.fishView && this.fishView.playAniRemove();
      };
      FishBDNormal.prototype.deadGoToPlayer = function(player) {
        if (this.fishView) {
          var action1 = cc.moveTo(1, this.getPosDeadPlayer(player.playerSiting)).easing(cc.easeSineOut());
          var action2 = cc.rotateTo(1, -90).easing(cc.easeSineOut());
          var node = this.fishView.node;
          node.runAction(cc.spawn(action2, action1));
        }
      };
      FishBDNormal.prototype.getListColider = function() {
        if (this.fishView) return this.fishView.listColider;
        return [];
      };
      FishBDNormal.prototype.getPointInFuture = function(time, colider) {
        if (this.fishView) return this.fishView.getPointInFuture(time, colider);
        return cc.v2(0, 0);
      };
      FishBDNormal.prototype.getViewNode = function() {
        if (this.fishView) return this.fishView.node;
        return new cc.Node();
      };
      return FishBDNormal;
    }(BaseFishBD_1.default);
    exports.default = FishBDNormal;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./BaseFishBD": "BaseFishBD",
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDRua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "211f2tsIUNNmIrq2zF2banG", "FishBDRua");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDCaXau = function(_super) {
      __extends(FishBDCaXau, _super);
      function FishBDCaXau() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funEffect = null;
        return _this;
      }
      FishBDCaXau.prototype.initAni = function(clip, speed, currentTime) {
        Windown_1.Windown.FishBongDem.fishBDView.comingRua();
        return _super.prototype.initAni.call(this, clip, speed, currentTime);
      };
      FishBDCaXau.prototype.playAniSwing = function() {
        this.skeSwing.paused = false;
        this.skeSwing.timeScale = this.baseSpeed + .5;
      };
      FishBDCaXau.prototype.playAniDead = function() {
        var _this = this;
        this.pauAniFish();
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffect(audio.nhanMaChet);
        var node = this.node;
        var posFixed = node.getPosition();
        var pos1 = cc.v2(posFixed.x - 10, posFixed.y - 10);
        var pos2 = cc.v2(posFixed.x + 10, posFixed.y + 10);
        var actionRung = cc.repeat(cc.sequence(cc.moveTo(.1, pos1), cc.moveTo(.1, pos2)), 5);
        var actionHide = cc.spawn(cc.scaleTo(.5, 3), cc.fadeOut(.5));
        this.node.runAction(cc.sequence(actionRung, actionHide, cc.callFunc(function() {
          _this.fishBDNormal.destroy();
        })));
      };
      FishBDCaXau.prototype.playAniRemove = function() {};
      FishBDCaXau = __decorate([ ccclass ], FishBDCaXau);
      return FishBDCaXau;
    }(FishBDNormalView_1.default);
    exports.default = FishBDCaXau;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDSongAmView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "762d5BRtjxO9LrjBQgLDOuB", "FishBDSongAmView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBdBoomView = function(_super) {
      __extends(FishBdBoomView, _super);
      function FishBdBoomView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBdBoomView.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.skeSwing.setAttachment("sunglaser", null);
      };
      FishBdBoomView = __decorate([ ccclass ], FishBdBoomView);
      return FishBdBoomView;
    }(FishBDNormalView_1.default);
    exports.default = FishBdBoomView;
    cc._RF.pop();
  }, {
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDTruyGaiView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14e80jgnYRJz49+hFqG6KVQ", "FishBDTruyGaiView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDNormalView_1 = require("./FishBDNormalView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDTruyGaiView = function(_super) {
      __extends(FishBDTruyGaiView, _super);
      function FishBDTruyGaiView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funEffect = null;
        _this.nodeMask = null;
        _this.nodeTruy = null;
        return _this;
      }
      FishBDTruyGaiView.prototype.initAni = function(clip, speed, currentTime) {
        _super.prototype.initAni.call(this, clip, speed, currentTime);
        Windown_1.Windown.FishBongDem.fishBDView.comingTruyGai();
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffect(audio.bgBackTuoc, .4, true);
        this.skeSwing.setAnimation(0, "SWIM", true);
        this.node.children[this.node.childrenCount - 1].color = cc.Color.BLACK;
        this.nodeMask.parent = this.node.parent;
        this.nodeMask.zIndex = cc.macro.MAX_ZINDEX;
        this.nodeMask.runAction(cc.fadeTo(1, 150));
        return this;
      };
      FishBDTruyGaiView.prototype.playAniDead = function() {
        var _this = this;
        this.pauAniFish();
        this.nodeMask.runAction(cc.fadeOut(1));
        this.skeSwing.setAnimation(0, "DIE", false);
        this.scheduleOnce(function() {
          _this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 2), cc.fadeOut(.2)), cc.callFunc(_this.fishBDNormal.destroy, _this.fishBDNormal)));
        }, 1.5);
      };
      FishBDTruyGaiView.prototype.onPutNode = function() {
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.stopEffect(audio.bgBackTuoc);
        this.nodeMask.runAction(cc.fadeOut(1));
      };
      FishBDTruyGaiView.prototype.playAniRemove = function() {};
      FishBDTruyGaiView.prototype.update = function(dt) {
        var worldPos2 = this.nodeTruy.parent.convertToWorldSpaceAR(this.nodeTruy.getPosition());
        var viewPos2 = this.node.parent.convertToNodeSpaceAR(worldPos2);
        this.nodeMask.setPosition(viewPos2);
      };
      __decorate([ property(cc.Node) ], FishBDTruyGaiView.prototype, "nodeMask", void 0);
      __decorate([ property(cc.Node) ], FishBDTruyGaiView.prototype, "nodeTruy", void 0);
      FishBDTruyGaiView = __decorate([ ccclass ], FishBDTruyGaiView);
      return FishBDTruyGaiView;
    }(FishBDNormalView_1.default);
    exports.default = FishBDTruyGaiView;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./FishBDNormalView": "FishBDNormalView"
  } ],
  FishBDView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "855b1q3l2tGuL+jWgL4cLfq", "FishBDView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var LbMoneyChange_1 = require("../../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../../Scritps/Windown");
    var wave = require("../../Spine/mesh-texture-flagBD");
    var CamMayBongDem_1 = require("../CamMayBongDem");
    var GUN_TYPE_BD_1 = require("../Gun/GUN_TYPE_BD");
    var HelpBongDem_1 = require("../HelpBongDem");
    var LichSuJackpot_1 = require("../LichSuJackpot");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypePlayerEffectBD_1 = require("../Player/Effect/TypePlayerEffectBD");
    var TimeOut_1 = require("../TimeOut");
    var ItemBongDem_1 = require("./ItemBongDem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AUTO_ATACK = 0;
    var AUTO_USEITEM = 1;
    var AUTO_WAIT = 2;
    var AUTO_CHANGEGUN = 3;
    var FishDBView = function(_super) {
      __extends(FishDBView, _super);
      function FishDBView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentFish = null;
        _this.parentPlayer = null;
        _this.parentGun = null;
        _this.parentBullet = null;
        _this.parentEffect = null;
        _this.nodeIceEffect = null;
        _this.nodeComingCaTran = null;
        _this.nodeComingJackpot = null;
        _this.nodeWave = null;
        _this.bkgSprite = null;
        _this.listSpriteFrameBKG = [];
        _this.listItem = [];
        _this.camMay = null;
        _this.toggleSungSet = null;
        _this.nodeComingCaXau = null;
        _this.nodeComingTruyGai = null;
        _this.nodeComingRua = null;
        _this.nodeComingHaiThan = null;
        _this.nodeTakeNhomCa = null;
        _this.camera = null;
        _this.arrowMe = null;
        _this.timeOut = null;
        _this.lichSuJackpot = null;
        _this.btnBoom = null;
        _this.btnDoiBan = null;
        _this.helpBongDem = null;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.countBkg = 0;
        _this.funShake = null;
        _this.isShake = false;
        _this.forceShake = 30;
        _this.listFishElectric = [];
        _this.listFishElectricInFish = [];
        _this.listRandomAction = [];
        _this.SFSArrayItem = null;
        return _this;
      }
      FishDBView.prototype.start = function() {
        if (null == Windown_1.Windown.FishBongDem) {
          cc.director.loadScene("main");
          return;
        }
        this.offsetX = cc.winSize.width / 2;
        this.offsetY = cc.winSize.height / 2;
        Windown_1.Windown.FishBongDem.setFishBDView(this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        cc.director.getCollisionManager().enabled = true;
        this.nodeWave.active = false;
        var width = this.bkgSprite.node.width;
        var height = this.bkgSprite.node.height;
        var scaleX = cc.winSize.width / width;
        var scaleY = cc.winSize.height / height;
        scaleX > 1 && (this.bkgSprite.node.scaleX = scaleX);
        scaleY > 1 && (this.bkgSprite.node.scaleY = scaleY);
        this.bkgSprite.node.scaleY += .03;
        this.countBkg = Windown_1.Windown.RandomNumber(0, this.listSpriteFrameBKG.length);
        this.bkgSprite.spriteFrame = this.listSpriteFrameBKG[this.countBkg];
        this.countBkg++;
        this.countBkg == this.listSpriteFrameBKG.length && (this.countBkg = 0);
        Windown_1.Windown.FishBongDem.addHandleReset(this.handleReset, this);
      };
      FishDBView.prototype.loadResult = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.makeDelay(2) ];

             case 1:
              _a.sent();
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/DropBoom", cc.Prefab) ];

             case 2:
              _a.sent();
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/EyeOcean0", cc.Prefab) ];

             case 3:
              _a.sent();
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/DinhBa", cc.Prefab) ];

             case 4:
              _a.sent();
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/ThangLon", cc.Prefab) ];

             case 5:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      FishDBView.prototype.initItemBoomDrop = function() {
        var parent = cc.find("ParentListBoom", this.btnBoom);
        var listChild = parent.children;
        for (var i = 0, l = listChild.length; i < l; i++) {
          var node = listChild[i];
          node.getComponent(cc.Button).clickEvents[0].customEventData = node.name;
        }
      };
      FishDBView.prototype.onClickTest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      FishDBView.prototype.startBot = function() {
        var _this = this;
        var lengthAction = Windown_1.Windown.RandomNumber(3, 11);
        this.listRandomAction = [];
        for (var i = 0; i < lengthAction; i++) {
          var listAcRd = [ AUTO_ATACK, AUTO_USEITEM, AUTO_WAIT, AUTO_CHANGEGUN ];
          var lastAc = this.listRandomAction[this.listRandomAction.length - 1];
          lastAc && lastAc.type == AUTO_CHANGEGUN && (listAcRd = [ AUTO_ATACK, AUTO_USEITEM ]);
          var modelAction = Object.create(null);
          modelAction.type = 0 == i ? 3 : Windown_1.Windown.RandomNumber(0, listAcRd.length);
          switch (modelAction.type) {
           case AUTO_ATACK:
            modelAction.duration = Windown_1.Windown.RandomNumber(50, 200);
            modelAction.name = "AT";
            modelAction.fun = function() {
              _this.funSetAtack(true);
            };
            break;

           case AUTO_USEITEM:
            modelAction.duration = Windown_1.Windown.RandomNumber(27, 150);
            modelAction.name = "UI";
            modelAction.fun = function() {
              _this.funUseItem();
            };
            break;

           case AUTO_WAIT:
            modelAction.duration = Windown_1.Windown.RandomNumber(5, 30);
            modelAction.name = "WT";
            modelAction.fun = function() {
              _this.funSetAtack(false);
            };
            break;

           case AUTO_CHANGEGUN:
            modelAction.duration = Windown_1.Windown.RandomNumber(3.5, 5);
            modelAction.name = "CG";
            modelAction.fun = function() {
              _this.funAutoChangeGun();
            };
          }
          this.listRandomAction.push(modelAction);
        }
        this.scheduleOnce(this.runActionAuto, Windown_1.Windown.RandomNumber(3, 5));
        this.scheduleOnce(this.funUseItemSpecial, Windown_1.Windown.RandomNumber(2, 30));
      };
      FishDBView.prototype.runActionAuto = function() {
        var _this = this;
        var modelAction = this.listRandomAction.shift();
        if (void 0 != typeof modelAction && modelAction) {
          this.scheduleOnce(function() {
            _this.runActionAuto();
            cc.log("nhay vao ham tiep theo ne");
          }, modelAction.duration);
          modelAction.fun.call(this);
        } else this.funBack();
      };
      FishDBView.prototype.funUseItemSpecial = function() {
        var _this = this;
        if (Windown_1.Windown.RandomNumber(0, 99) < 15) {
          this.listItem[3].onClick();
          this.scheduleOnce(function() {
            Windown_1.Windown.RandomNumber(0, 100) < 80 ? _this.onClickItemDropBoom(null, 100) : _this.onClickItemDropBoom(null, 102);
            _this.scheduleOnce(_this.funUseItemSpecial, Windown_1.Windown.RandomNumber(1, 200));
          }, Windown_1.Windown.RandomNumber(1, 6));
        } else {
          Windown_1.Windown.RandomNumber(0, 100) < 80 ? this.onClickItemDropBoom(null, Windown_1.Windown.RandomNumber(100, 102)) : this.onClickItemDropBoom(null, 102);
          this.scheduleOnce(this.funUseItemSpecial, Windown_1.Windown.RandomNumber(1, 200));
        }
      };
      FishDBView.prototype.getMaxIdGunValible = function(moneyPlayer) {
        var objLevel = Windown_1.Windown.getConfigLevel();
        var list = objLevel.GameUnlock;
        if (list) for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
          var temp = list_1[_i];
          if (temp.GameId == GAME_TYPE_1.default.BongDem) {
            var listRoom = null;
            listRoom = temp.GunType1;
            if (0 == listRoom.length) return 0;
            var idReturn = listRoom[listRoom.length - 1];
            0 == idReturn && (idReturn = 10);
            while (true) {
              cc.log("idreturn: " + idReturn);
              var moneyMax = Windown_1.Windown.FishBongDem.getGunValueByType(idReturn - 1);
              if (!(idReturn > 1 && parseInt(moneyPlayer / moneyMax) < 60)) return idReturn;
              idReturn--;
            }
          }
        }
        return 10;
      };
      FishDBView.prototype.funAutoChangeGun = function() {
        var _this = this;
        if (Windown_1.Windown.FishBongDem.me.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.NORMAL || Windown_1.Windown.FishBongDem.me.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET) {
          this.funSetAtack(false);
          this.scheduleOnce(function() {
            var idGunMax = _this.getMaxIdGunValible(Windown_1.Windown.User.userAg);
            if (0 == idGunMax) return;
            var idRandom = Windown_1.Windown.RandomNumber(1, idGunMax);
            var current = Windown_1.Windown.FishBongDem.me.indexMoneyGun;
            var count = Math.abs(idRandom - current);
            _this.schedule(function() {
              idRandom > current ? Windown_1.Windown.FishBongDem.me.gunFishBd.onClickAdd() : Windown_1.Windown.FishBongDem.me.gunFishBd.onClickSub();
            }, .5, count);
          }, Windown_1.Windown.RandomNumber(1, 2));
        }
      };
      FishDBView.prototype.funBack = function() {
        var _this = this;
        this.funSetAtack(false);
        this.scheduleOnce(function() {
          _this.onClickBack();
          _this.scheduleOnce(function() {
            Windown_1.Windown.restartGame();
          }, 10);
        }, Windown_1.Windown.RandomNumber(3, 8));
      };
      FishDBView.prototype.funUseItem = function() {
        var _this = this;
        this.funSetAtack(false);
        var listItemValible = [];
        for (var _i = 0, _a = this.listItem; _i < _a.length; _i++) {
          var temp = _a[_i];
          temp.totalAmount > 0 && listItemValible.push(temp);
        }
        if (listItemValible.length > 0) {
          var itemRd_1 = listItemValible[Windown_1.Windown.RandomNumber(0, listItemValible.length)];
          this.scheduleOnce(function() {
            itemRd_1.onClick();
            _this.scheduleOnce(function() {
              _this.funSetAtack(true);
            }, Windown_1.Windown.RandomNumber(1, 2));
          }, Windown_1.Windown.RandomNumber(1, 3) / 3);
        } else this.scheduleOnce(function() {
          _this.funSetAtack(true);
        }, Windown_1.Windown.RandomNumber(1, 7) / 3);
      };
      FishDBView.prototype.funSetAtack = function(isAtack) {
        isAtack ? Windown_1.Windown.FishBongDem.me.timeItemAuto = 9999 : Windown_1.Windown.FishBongDem.me.forceEndEffect(TypePlayerEffectBD_1.default.AUTO);
      };
      FishDBView.prototype.handleReset = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.btnDoiBan.interactable = true;
        }, 1);
      };
      FishDBView.prototype.onDestroy = function() {
        this.node.targetOff(this.node);
        cc.director.getCollisionManager().enabled = false;
        cc.systemEvent.targetOff(this);
        Windown_1.Windown.FishBongDem && Windown_1.Windown.FishBongDem.clear();
        Windown_1.Windown.FishBongDem = null;
        cc.director.getScheduler().setTimeScale(1);
      };
      FishDBView.prototype.onTouchMove = function(touch) {
        var v2Touch = touch.getLocation();
        var pos = Windown_1.Windown.FishBongDem.fishBDView.parentFish.convertToNodeSpaceAR(v2Touch);
        Windown_1.Windown.FishBongDem.me && Windown_1.Windown.FishBongDem.me.rotateGun(pos);
      };
      FishDBView.prototype.onTouchStart = function(touch) {
        var v2Touch = touch.getLocation();
        var pos = Windown_1.Windown.FishBongDem.fishBDView.parentFish.convertToNodeSpaceAR(v2Touch);
        Windown_1.Windown.FishBongDem.me && Windown_1.Windown.FishBongDem.me.rotateGun(pos);
      };
      FishDBView.prototype.onTouchEnd = function(touch) {
        Windown_1.Windown.FishBongDem.me && Windown_1.Windown.FishBongDem.me.cancleGun();
      };
      FishDBView.prototype.showTakeGroupFish = function(totalMoneyRevice) {
        var _this = this;
        var audio = Windown_1.Windown.FishBongDem.getSound();
        this.nodeTakeNhomCa.active = true;
        this.nodeTakeNhomCa.stopAllActions();
        var cp = cc.find("Money", this.nodeTakeNhomCa).getComponent(LbMoneyChange_1.default);
        cp.resetLb();
        cp.setMoney(totalMoneyRevice, false, "", false);
        this.nodeTakeNhomCa.getComponent(cc.Animation).play("NhomCa");
        cc.tween(this.nodeTakeNhomCa).delay(3).call(function() {
          _this.nodeTakeNhomCa.active = false;
          audio.stopEffect(audio.anDcNhomCa);
        }).start();
        audio.playEffect(audio.anDcNhomCa);
      };
      FishDBView.prototype.showArrowMe = function(pos) {
        var _this = this;
        this.arrowMe.active = true;
        this.arrowMe.stopAllActions();
        this.arrowMe.setPosition(pos);
        var action1 = cc.moveBy(.5, 0, 50);
        var action2 = cc.moveBy(.5, 0, -50);
        var action = cc.sequence(action1, action2);
        this.arrowMe.runAction(cc.sequence(cc.repeat(action, 4), cc.callFunc(function() {
          _this.arrowMe.active = false;
        })));
      };
      FishDBView.prototype.comingCaXau = function() {
        var _this = this;
        this.nodeComingCaXau.active = true;
        this.nodeComingCaXau.getComponent(cc.Animation).play("ComingCaXau");
        this.scheduleOnce(function() {
          _this.nodeComingCaXau.active = false;
        }, 3);
      };
      FishDBView.prototype.comingTruyGai = function() {
        var _this = this;
        this.nodeComingTruyGai.active = true;
        this.nodeComingTruyGai.getComponent(cc.Animation).play("ComingCaXau");
        this.scheduleOnce(function() {
          _this.nodeComingTruyGai.active = false;
        }, 3);
      };
      FishDBView.prototype.comingRua = function() {
        var _this = this;
        this.nodeComingRua.active = true;
        this.nodeComingRua.getComponent(cc.Animation).play("ComingCaXau");
        this.scheduleOnce(function() {
          _this.nodeComingRua.active = false;
        }, 3);
      };
      FishDBView.prototype.comingCaTran = function() {
        var _this = this;
        this.nodeComingCaTran.active = true;
        this.nodeComingCaTran.x = 1280;
        this.nodeComingCaTran.stopAllActions();
        var action1 = cc.delayTime(3);
        var action2 = cc.moveTo(.5, 0, 0).easing(cc.easeBackOut());
        var action3 = cc.delayTime(2);
        var action4 = cc.moveTo(.5, -1280, 0).easing(cc.easeBackIn());
        var action5 = cc.callFunc(function() {
          _this.nodeComingCaTran.active = false;
        });
        this.nodeComingCaTran.runAction(cc.sequence(action1, action2, action3, action4, action5));
      };
      FishDBView.prototype.coningJackpot = function() {
        var _this = this;
        this.nodeComingJackpot.active = true;
        var ani = this.nodeComingJackpot.getComponent(cc.Animation);
        ani.play("ComingBoss");
        this.scheduleOnce(function() {
          _this.nodeComingJackpot.active = false;
        }, 3);
        Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().comingJackpot);
      };
      FishDBView.prototype.comingHaiThan = function() {
        this.nodeComingHaiThan.active = true;
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffect(audio.caTranDacBiet, .6);
      };
      FishDBView.prototype.offHaiThan = function() {
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.stopEffect(audio.caTranDacBiet);
        this.nodeComingHaiThan.active = false;
      };
      FishDBView.prototype.showNextTurn = function() {
        var _this = this;
        this.nodeWave.active = true;
        var X = this.bkgSprite.node.width * this.bkgSprite.node.scaleX;
        var nodeImgSong = cc.find("wave1", this.nodeWave);
        nodeImgSong.x = X / 2 - 100;
        cc.Tween.stopAllByTarget(nodeImgSong);
        cc.tween(nodeImgSong).to(3, {
          x: -X / 2 - 100
        }).start();
        cc.Tween.stopAllByTarget(this.nodeWave);
        cc.tween(this.nodeWave).delay(3).call(function() {
          _this.offWaveWater();
        }).start();
        cc.Tween.stopAllByTarget(this.bkgSprite.node);
        this.bkgSprite;
        cc.tween(this.bkgSprite.node).delay(2).call(function() {
          _this.bkgSprite.spriteFrame = _this.listSpriteFrameBKG[_this.countBkg];
          _this.countBkg++;
          _this.countBkg >= _this.listSpriteFrameBKG.length && (_this.countBkg = 0);
        }).start();
      };
      FishDBView.prototype.setItemInfo = function(SFSArray) {
        var listConfigItem = Windown_1.Windown.listConfigItem;
        this.SFSArrayItem = SFSArray;
        for (var i = 0, l = listConfigItem.length; i < l; i++) {
          var objItem = {
            Amount: null,
            ItemId: null,
            ItemName: null,
            Description: null,
            TimeCD: null
          };
          var obj = listConfigItem[i];
          var id = obj.ItemId;
          for (var j = 0, lj = SFSArray.size(); j < lj; j++) {
            var SFSObjItem = SFSArray.get(j);
            if (SFSObjItem.getInt("type") == id && id < 5) {
              var amount = SFSObjItem.getInt("amount");
              objItem.Amount = amount;
              objItem.ItemId = obj.ItemId;
              objItem.ItemName = obj.ItemName;
              objItem.Description = obj.Description;
              objItem.TimeCD = obj.Duration;
              this.listItem[id - 1].initItem(objItem);
              this.listItem[id - 1].setLabel();
              break;
            }
          }
        }
        var parentBoomDrop = cc.find("ParentListBoom", this.btnBoom);
        var totalCount = 0;
        for (var j = 0, lj = SFSArray.size(); j < lj; j++) {
          var SFSObjItem = SFSArray.get(j);
          var itemType = SFSObjItem.getInt("type");
          if (itemType >= 100 && itemType < 200) {
            var nodeItemBoom = cc.find(itemType.toString(), parentBoomDrop);
            var lbAmount = cc.find("xx6", nodeItemBoom).getComponentInChildren(cc.Label);
            lbAmount.string = SFSObjItem.get("amount");
            totalCount += SFSObjItem.get("amount");
          }
        }
        var lbTotalCount = cc.find("xx6", this.btnBoom).getComponentInChildren(cc.Label);
        lbTotalCount.string = totalCount.toString();
        lbTotalCount.node.parent.active = totalCount > 0;
        parentBoomDrop.active && this.onClickBtnDropBoom();
      };
      FishDBView.prototype.reviceItemWhenLvlUp = function(type, amount) {
        if (0 == type) {
          cc.log("nhay me vao add gold reviceItemWhenLvlUp");
          Windown_1.Windown.FishBongDem.me.addGold(amount);
        } else if (this.SFSArrayItem) {
          cc.log("truoc: " + Windown_1.Windown.SFSArrToJson(this.SFSArrayItem));
          for (var i = 0, l = this.SFSArrayItem.size(); i < l; i++) {
            var SFSObjItem = this.SFSArrayItem.getSFSObject(i);
            var itemType = SFSObjItem.getInt("type");
            if (itemType == type) {
              SFSObjItem.putInt("amount", SFSObjItem.get("amount") + amount);
              this.setItemInfo(this.SFSArrayItem);
              return;
            }
          }
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putInt("amount", amount);
          sfsObj.putInt("type", +type);
          this.SFSArrayItem.addSFSObject(sfsObj);
          this.setItemInfo(this.SFSArrayItem);
        }
      };
      FishDBView.prototype.showIce = function(time) {
        var _this = this;
        this.nodeIceEffect.active = true;
        this.nodeIceEffect.opacity = 0;
        cc.Tween.stopAllByTarget(this.nodeIceEffect);
        cc.tween(this.nodeIceEffect).to(.5, {
          opacity: 255
        }).start();
        cc.tween(this.nodeIceEffect).delay(time).call(function() {
          _this.nodeIceEffect.active = false;
        }).start();
      };
      FishDBView.prototype.offWaveWater = function() {
        this.nodeWave.active = false;
        this.nodeWave.stopAllActions();
      };
      FishDBView.prototype.showComingCaTran = function() {};
      FishDBView.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.scheduleOnce(resolve, time);
        });
      };
      FishDBView.prototype.effectSlowmotion = function(time, slow) {
        void 0 === slow && (slow = .1);
        var shce = cc.director.getScheduler();
        if (1 != shce.getTimeScale()) return;
        var objAction = Object.create(null);
        objAction.time = 1;
        cc.tween(objAction).to(.3, {
          time: {
            value: slow,
            progress: function(start, end, current, ratio) {
              var _current = start + (end - start) * ratio;
              shce.setTimeScale(_current);
              return _current;
            }
          }
        }).delay(time * slow).to(.2, {
          time: {
            value: 1,
            progress: function(start, end, current, ratio) {
              var _current = start + (end - start) * ratio;
              shce.setTimeScale(_current);
              return _current;
            }
          }
        }).start();
      };
      FishDBView.prototype.shakeScence = function(time, forShake) {
        var _this = this;
        void 0 === forShake && (forShake = 30);
        this.isShake = true;
        this.forceShake = forShake;
        this.scheduleOnce(this.funShake = function() {
          _this.isShake = false;
          _this.camera.setPosition(0, 0);
        }, time);
      };
      FishDBView.prototype.update = function(dt) {
        if (this.isShake) {
          this.camera.x = Windown_1.Windown.RandomNumber(-this.forceShake, this.forceShake);
          this.camera.y = Windown_1.Windown.RandomNumber(-this.forceShake, this.forceShake);
        }
      };
      FishDBView.prototype.onClickChangeRoom = function(event, data) {
        var button = event.target.getComponent(cc.Button);
        button.interactable = false;
        this.scheduleOnce(function() {
          button.interactable = true;
        }, 1.5);
        Windown_1.Windown.FishBongDem.changeTable();
      };
      FishDBView.prototype.onClickBack = function() {
        Windown_1.Windown.FishBongDem.sendLeaveRoom();
      };
      FishDBView.prototype.onClickSetting = function() {
        Windown_1.Windown.UIManager.showCaiDat();
      };
      FishDBView.prototype.onClickAuto = function() {
        if (!Windown_1.Windown.User.isAutoFish) {
          Windown_1.Windown.UIManager.showBonusNap(false, 2);
          return;
        }
        this.camMay.show();
      };
      FishDBView.prototype.onToggleItemNhienVu = function(event, data) {
        var isChecked = event.isChecked;
        cc.log(isChecked);
        var node = Windown_1.Windown.NhiemVuConTroller.itemQuestViewFish.node;
        var nodeToggle = cc.find("toggle", node);
        node.stopAllActions();
        nodeToggle.stopAllActions();
        if (isChecked) {
          node.runAction(cc.moveTo(.5, 0, 505.403).easing(cc.easeBackIn()));
          nodeToggle.runAction(cc.moveTo(.5, 0, -168.859));
        } else {
          node.runAction(cc.moveTo(.5, 0, 360).easing(cc.easeBackOut()));
          nodeToggle.runAction(cc.moveTo(.5, 0, -148.399));
        }
      };
      FishDBView.prototype.onClickSungSet = function() {
        if (!Windown_1.Windown.User.isGunSet) {
          Windown_1.Windown.UIManager.showBonusNap(false, 3);
          this.toggleSungSet.isChecked = false;
          this.toggleSungSet.checkMark.node.active = false;
          return;
        }
        var sfs = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfs.putInt("AccountId", Windown_1.Windown.User.userId);
        this.toggleSungSet.isChecked ? sfs.putInt("GunType", GUN_TYPE_BD_1.default.SET) : sfs.putInt("GunType", GUN_TYPE_BD_1.default.NORMAL);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeGunFishBD, sfs);
      };
      FishDBView.prototype.onClickBtnDropBoom = function() {
        var parentItem = cc.find("ParentListBoom", this.btnBoom);
        var listChild = parentItem.children;
        parentItem.stopAllActions();
        var time = 0;
        var lbTotalCount = cc.find("xx6", this.btnBoom).getComponentInChildren(cc.Label);
        if (parentItem.active) {
          parentItem.active = false;
          cc.find("xx6", this.btnBoom).active = true;
          Number(lbTotalCount.string) < 1 && (lbTotalCount.node.parent.active = false);
        } else {
          parentItem.active = true;
          listChild.forEach(function(v) {
            v.stopAllActions();
            v.scale = 0;
            v.opacity = 255;
            v.runAction(cc.sequence(cc.delayTime(time), cc.scaleTo(.3, 1).easing(cc.easeElasticOut(.5))));
            time += .07;
          });
          lbTotalCount.node.parent.active = false;
        }
      };
      FishDBView.prototype.onClickItemDropBoom = function(event, data) {
        var idItem = parseInt(data) || null;
        if (idItem) {
          var msg = ConectManager_1.ConectManager.getIns().getSFSObj();
          msg.putInt("ItemId", parseInt(data));
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.PlayerUsingItemFishBD, msg);
          this.onClickBtnDropBoom();
        }
      };
      FishDBView.prototype.onClickHuongDan = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(null == this.helpBongDem)) return [ 3, 4 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/HelpBongDem", cc.Prefab) ];

             case 2:
              pre = _a.sent();
              this.helpBongDem = cc.instantiate(pre);
              this.helpBongDem.parent = this.node;
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              this.helpBongDem.active = true;
              this.helpBongDem.getComponent(HelpBongDem_1.default).show();
              return [ 2 ];
            }
          });
        });
      };
      FishDBView.prototype.onClickLichSuJackpot = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre, e_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(null == this.lichSuJackpot)) return [ 3, 4 ];
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/LichSuJackpot", cc.Prefab) ];

             case 2:
              pre = _a.sent();
              this.lichSuJackpot = cc.instantiate(pre).getComponent(LichSuJackpot_1.default);
              this.lichSuJackpot.node.parent = this.node;
              return [ 3, 4 ];

             case 3:
              e_2 = _a.sent();
              console.error(e_2);
              return [ 3, 4 ];

             case 4:
              this.lichSuJackpot.node.active = true;
              this.lichSuJackpot.show();
              return [ 2 ];
            }
          });
        });
      };
      FishDBView.prototype.onToggleShowItem = function(event, data) {
        cc.log(event);
        var listPos = [ cc.v2(-110, -315), cc.v2(-40, -250), cc.v2(40, -250), cc.v2(110, -315) ];
        this.listItem.forEach(function(v, index) {
          cc.log(index);
          v.node.stopAllActions();
          event.isChecked ? v.node.runAction(cc.spawn(cc.moveTo(.25, listPos[index]).easing(cc.easeSineOut()), cc.scaleTo(.25, .9).easing(cc.easeSineOut()))) : v.node.runAction(cc.spawn(cc.moveTo(.25, cc.v2(0, -325)).easing(cc.easeSineIn()), cc.scaleTo(.5, 0)));
        });
      };
      FishDBView.prototype.onClickBonusNap = function() {
        Windown_1.Windown.UIManager.showBonusNap();
      };
      __decorate([ property(cc.Node) ], FishDBView.prototype, "parentFish", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "parentPlayer", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "parentGun", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "parentBullet", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "parentEffect", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeIceEffect", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeComingCaTran", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeComingJackpot", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeWave", void 0);
      __decorate([ property(wave) ], FishDBView.prototype, "bkgSprite", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], FishDBView.prototype, "listSpriteFrameBKG", void 0);
      __decorate([ property([ ItemBongDem_1.default ]) ], FishDBView.prototype, "listItem", void 0);
      __decorate([ property(CamMayBongDem_1.default) ], FishDBView.prototype, "camMay", void 0);
      __decorate([ property(cc.Toggle) ], FishDBView.prototype, "toggleSungSet", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeComingCaXau", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeComingTruyGai", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeComingRua", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeComingHaiThan", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "nodeTakeNhomCa", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "camera", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "arrowMe", void 0);
      __decorate([ property(TimeOut_1.default) ], FishDBView.prototype, "timeOut", void 0);
      __decorate([ property(cc.Node) ], FishDBView.prototype, "btnBoom", void 0);
      __decorate([ property(cc.Button) ], FishDBView.prototype, "btnDoiBan", void 0);
      FishDBView = __decorate([ ccclass ], FishDBView);
      return FishDBView;
    }(cc.Component);
    exports.default = FishDBView;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../../Scritps/Windown": void 0,
    "../../Spine/mesh-texture-flagBD": "mesh-texture-flagBD",
    "../CamMayBongDem": "CamMayBongDem",
    "../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "../HelpBongDem": "HelpBongDem",
    "../LichSuJackpot": "LichSuJackpot",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/Effect/TypePlayerEffectBD": "TypePlayerEffectBD",
    "../TimeOut": "TimeOut",
    "./ItemBongDem": "ItemBongDem"
  } ],
  FishBdMutilView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c49baJLt/xKSJSR3h14xw4e", "FishBdMutilView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var FishBDCaTranView_1 = require("./FishBDCaTranView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishBDMutilView = function(_super) {
      __extends(FishBDMutilView, _super);
      function FishBDMutilView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishBDMutilView.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        cc.find("vongtron", this.node).runAction(cc.repeatForever(cc.rotateBy(2, 360)));
      };
      FishBDMutilView.prototype.playAniRemove = function() {
        this.node.stopAllActions();
        var ac1 = cc.delayTime(1);
        var ac2 = cc.spawn(cc.fadeOut(1), cc.rotateBy(1, 360), cc.scaleTo(1, 0));
        var ac3 = cc.callFunc(this.fishBDNormal.destroy, this.fishBDNormal);
        this.node.runAction(cc.sequence(ac1, ac2, ac3));
      };
      FishBDMutilView = __decorate([ ccclass ], FishBDMutilView);
      return FishBDMutilView;
    }(FishBDCaTranView_1.default);
    exports.default = FishBDMutilView;
    cc._RF.pop();
  }, {
    "./FishBDCaTranView": "FishBDCaTranView"
  } ],
  FishBongDem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2734fDoTAlDRaCUKzSNtMOy", "FishBongDem");
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
    var EVENT_MANAGER_1 = require("../../../../Scritps/DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../../../../Scritps/DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../../../../Scritps/DefineTs/TextDefine");
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var InfoERR_1 = require("../../../../Scritps/InfoERR");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDManager_1 = require("../Fish/FishBDManager");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var HandleAddItemDrag_1 = require("../Network/HandleAddItemDrag");
    var HandleChangeBD_1 = require("../Network/HandleChangeBD");
    var HandleChangeMoneyGunFishBD_1 = require("../Network/HandleChangeMoneyGunFishBD");
    var HandleCreatFishBD_1 = require("../Network/HandleCreatFishBD");
    var HandleCreatTrieuHoi_1 = require("../Network/HandleCreatTrieuHoi");
    var HandleFishColisionBD_1 = require("../Network/HandleFishColisionBD");
    var HandleGunAtackBD_1 = require("../Network/HandleGunAtackBD");
    var HandleIceAllFishBD_1 = require("../Network/HandleIceAllFishBD");
    var HandleInfoFishRoomBD_1 = require("../Network/HandleInfoFishRoomBD");
    var HandleNotFindFishBD_1 = require("../Network/HandleNotFindFishBD");
    var HandleOtherJoinRoom_1 = require("../Network/HandleOtherJoinRoom");
    var HandlePlayerUsingItemFishBD_1 = require("../Network/HandlePlayerUsingItemFishBD");
    var HandleRemoveAllListFishBD_1 = require("../Network/HandleRemoveAllListFishBD");
    var HandleRemoveListFishBD_1 = require("../Network/HandleRemoveListFishBD");
    var HandleRotateGunBD_1 = require("../Network/HandleRotateGunBD");
    var HandleSetTimeFishEffectBD_1 = require("../Network/HandleSetTimeFishEffectBD");
    var HandleTimeOutPlayBD_1 = require("../Network/HandleTimeOutPlayBD");
    var HandleUsingItemDrag_1 = require("../Network/HandleUsingItemDrag");
    var PlayerBDManager_1 = require("../Player/PlayerBDManager");
    var FishBongDem = function() {
      function FishBongDem() {
        this.fishMng = null;
        this.playerMng = null;
        this.roomSfs = null;
        this.fishBDView = null;
        this.sfs = null;
        this.vecLat = null;
        this.playerIdMe = null;
        this.listGunMoney = [];
        this.listGunSpecialConfig = null;
        this.me = null;
        this.pool = null;
        this.listTimeOut = [];
        this.isCanSendRequest = true;
        this.isInBackGround = false;
        this.lbJp = null;
        this.mapConfigJp = null;
        this.isChangeTable = false;
        this.lastIdRoomToJoint = -1;
        this.isWatingChangetable = false;
        this.listBulletSend = [];
        this.listRoomJoined = [];
        cc.game.on(cc.game.EVENT_HIDE, this.eventHide, this);
        cc.systemEvent.on(cc.game.EVENT_SHOW, this.eventShow, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onDisconnect, this);
        Windown_1.Windown.FishBongDem = this;
      }
      FishBongDem.prototype.initGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var bundle;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.BongDem.toString()) ];

             case 1:
              bundle = _a.sent();
              Windown_1.Windown.UIManager.showLoadingData();
              bundle.preloadScene("FishBongDem", {}, function(count, total) {
                Windown_1.Windown.UIManager.setPerData(count / total);
              }, function(err) {
                if (err) {
                  Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                  return;
                }
                if (!Windown_1.Windown.User.isLogin) return;
                bundle.loadScene("FishBongDem", function(err, scence) {
                  if (err) {
                    Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.Error);
                    Windown_1.Windown.UIManager.hideLoadingData();
                    return;
                  }
                  if (!Windown_1.Windown.User.isLogin) return;
                  cc.director.runScene(scence, null, function() {});
                });
              });
              return [ 2 ];
            }
          });
        });
      };
      FishBongDem.prototype.eventHide = function() {
        this.isInBackGround = true;
        this.clearAllTimeOut();
      };
      FishBongDem.prototype.eventShow = function(time) {
        cc.log("time hide la: " + time);
        this.isInBackGround = false;
        this.sendRequest(CODE_EVT_1.default.InfoFishRoomBD, null);
      };
      FishBongDem.prototype.setTimeout = function(fun, time) {
        this.fishBDView.scheduleOnce(fun, time);
      };
      FishBongDem.prototype.setInterval = function(fun, time, count) {
        this.fishBDView.schedule(fun, time);
      };
      FishBongDem.prototype.unschedule = function(fun) {
        this.fishBDView.unschedule(fun);
      };
      FishBongDem.prototype.getGunValueByType = function(index) {
        return this.listGunMoney[index];
      };
      FishBongDem.prototype.getGunSpecialConfigType = function(type) {
        for (var i = 0, l = this.listGunSpecialConfig.size(); i < l; i++) {
          var obj = this.listGunSpecialConfig.getSFSObject(i);
          if (obj.getInt("SpecialGunId") == type) return obj;
        }
        var objTemp = ConectManager_1.ConectManager.getIns().getSFSObj();
        objTemp.putInt("SpecialGunId", type);
        objTemp.putUtfString("SpecialGunName", "other");
        objTemp.putInt("TimeToUse", 3);
        objTemp.putInt("TimeRemoveNotUse", 10);
        return objTemp;
      };
      FishBongDem.prototype.setFishBDView = function(view) {
        Windown_1.Windown.UIManager.hideLoadingData();
        this.fishBDView = view;
        this.fishMng = new FishBDManager_1.default(this);
        this.playerMng = new PlayerBDManager_1.default(this);
        this.sfs = ConectManager_1.ConectManager.getIns().sfs;
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_REMOVE, this.onRoomRemove, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this);
        this.sendJoinRoom();
      };
      FishBongDem.prototype.setPool = function(pool) {
        this.pool = pool;
      };
      FishBongDem.prototype.sendLeaveRoom = function() {
        if (null == this.roomSfs) {
          this.destroy();
          return;
        }
        try {
          if (!this.sfs.roomManager.containsRoom(this.roomSfs.id) || !this.roomSfs.isJoined) throw new InfoERR_1.InfoErr("");
          Windown_1.Windown.UIManager.showLoading();
          this.sendRequest(CODE_EVT_1.default.RequestLeaveRoom, null);
          this.isCanSendRequest = false;
        } catch (e) {
          cc.log("destory buoi loi leav room");
          cc.error(e);
          this.destroy();
        }
      };
      FishBongDem.prototype.sendJoinRoom = function(isChangeTable) {
        Windown_1.Windown.UIManager.showLoading();
        var roomMe = this.sfs.getJoinedRooms();
        if (roomMe.length > 0 && roomMe.filter(function(room) {
          "fish3" == room.groupId;
        }).length > 0) {
          var event = Object.create(null);
          event.room = roomMe[0];
          this.onJoinRoom(event);
          this.sendRequest(CODE_EVT_1.default.InfoFishRoomBD, null);
          cc.log("user join room co san");
          return;
        }
        var listRoomValible = this.sfs.roomManager.getRoomListFromGroup("fish3");
        var listRoomCanJoin = [];
        var listRoomNHieuNhat = [];
        var maxPlayer = 0;
        var minPlayer = 4;
        for (var _i = 0, listRoomValible_1 = listRoomValible; _i < listRoomValible_1.length; _i++) {
          var room = listRoomValible_1[_i];
          if (isChangeTable) {
            if (!this.listRoomJoined.includes(room) && !room.isJoined && room.userCount < room.maxUsers) {
              listRoomCanJoin.push(room);
              room.userCount > maxPlayer && (maxPlayer = room.userCount);
              room.userCount < minPlayer && room.userCount < 3 && (minPlayer = room.userCount);
            }
          } else if (!room.isJoined && room.userCount < room.maxUsers) {
            listRoomCanJoin.push(room);
            room.userCount > maxPlayer && (maxPlayer = room.userCount);
            room.userCount < minPlayer && room.userCount < 3 && (minPlayer = room.userCount);
          }
        }
        listRoomCanJoin.forEach(function(v) {
          Windown_1.Windown.BotController ? v.userCount == minPlayer && listRoomNHieuNhat.push(v) : v.userCount == maxPlayer && listRoomNHieuNhat.push(v);
        });
        if (listRoomNHieuNhat.length > 0) {
          var roomCanJoin = listRoomNHieuNhat[Windown_1.Windown.RandomNumber(0, listRoomNHieuNhat.length)];
          this.sfs.send(new SFS2X.JoinRoomRequest(roomCanJoin, null, -1));
        } else {
          this.listRoomJoined.length = 0;
          var nameCreat = ConectManager_1.ConectManager.getIns().getValibleRoomName();
          var roomSeting = new SFS2X.RoomSettings(nameCreat);
          var roomExt = new SFS2X.RoomExtension("FishBDExtension", "ext.Room.FishBD.FishBDController");
          var roomValible = new SFS2X.SFSRoomVariable("type", 3);
          roomSeting.extension = roomExt;
          roomSeting.isGame = true;
          roomSeting.maxUsers = 4;
          roomSeting.groupId = "fish3";
          roomSeting.variables = [ roomValible ];
          this.sfs.send(new SFS2X.CreateRoomRequest(roomSeting, true));
        }
      };
      FishBongDem.prototype.onDisconnect = function() {
        this.destroy();
      };
      FishBongDem.prototype.changeTable = function() {
        var _this = this;
        if (null == this.roomSfs || this.isWatingChangetable) return;
        this.isWatingChangetable = true;
        this.clearAllTimeOut();
        this.isChangeTable = true;
        Windown_1.Windown.UIManager.showLoading();
        Windown_1.Windown.FishBongDem.fishBDView.scheduleOnce(function() {
          _this.sendLeaveRoom();
        }, .5);
      };
      FishBongDem.prototype.clear = function() {
        this.listBulletSend.length = 0;
        this.isCanSendRequest = false;
        this.roomSfs = null;
        if (this.sfs) {
          this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom);
          this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_REMOVE, this.onRoomRemove);
          this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError);
          this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom);
          this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr);
          this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse);
        }
        this.clearAllTimeOut();
        cc.systemEvent.removeAll(this);
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.UIManager.hideLoading();
        cc.game.removeAll(this);
        this.getSound() && this.getSound().reset();
      };
      FishBongDem.prototype.sendBullet = function(SFSObj) {
        var obj = Object.create(null);
        obj.idBullet = SFSObj.get("BulletId");
        obj.time = Date.now();
        var objCheck = this.listBulletSend[0];
        if (objCheck && obj.time - objCheck.time > 1200) {
          cc.log("mang lag ko cho gui bullet");
          return;
        }
        this.listBulletSend.push(obj);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.GunAtackBD, SFSObj);
      };
      FishBongDem.prototype.removeBulletSend = function(idBullet) {
        var indexOf = this.listBulletSend.findIndex(function(v) {
          return v.idBullet == idBullet;
        });
        indexOf > -1 && this.listBulletSend.splice(indexOf, 1);
      };
      FishBongDem.prototype.destroy = function() {
        this.clear();
        cc.director.loadScene("main");
      };
      FishBongDem.prototype.userExitRoom = function(event) {
        var room = event.room;
        if (room.containsVariable("type") && 3 == room.getVariable("type").value && this.roomSfs == room) {
          var user = event.user;
          var sitting = user.getPlayerId(room);
          if (user.isItMe && !this.isChangeTable) {
            this.destroy();
            return;
          }
          if (user.isItMe && this.isChangeTable) {
            this.roomSfs = null;
            this.isCanSendRequest = true;
            this.sendJoinRoom(true);
            return;
          }
          this.playerMng.removePlayer(sitting);
        }
      };
      FishBongDem.prototype.onRoomRemove = function(event) {
        var room = event.room;
        if (this.roomSfs && this.roomSfs == room) {
          this.destroy();
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        }
      };
      FishBongDem.prototype.onCreateError = function(event) {
        Windown_1.Windown.UIManager.hideLoading();
        this.sendJoinRoom();
      };
      FishBongDem.prototype.onJoinRoom = function(event) {
        var _this = this;
        Windown_1.Windown.UIManager.hideLoadingData();
        Windown_1.Windown.UIManager.hideLoading();
        var room = event.room;
        if ("fish3" == room.groupId && room.containsVariable("type") && 3 == room.getVariable("type").value) {
          this.isChangeTable = false;
          this.lastIdRoomToJoint = room.id;
          this.roomSfs = room;
          this.listRoomJoined.push(room);
          if (room.containsVariable("cf") && room.getVariable("cf").value) {
            var roomVCf = room.getVariable("cf");
            var stringCf = roomVCf.value;
            this.mapConfigJp = JSON.parse(stringCf);
          } else this.mapConfigJp = JSON.parse('{"10":0.02,"50":0.03,"100":0.06,"200":0.1,"300":0.15,"500":0.2,"1000":0.3,"2000":0.4,"3000":0.5,"5000":0.6,"10000":1}');
          this.fishBDView.scheduleOnce(function() {
            _this.isWatingChangetable = false;
          }, 1);
          cc.log("user join room");
        }
      };
      FishBongDem.prototype.onJoinRoomErr = function(event) {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ERR_JOIN_ROOM);
        this.sendJoinRoom();
      };
      FishBongDem.prototype.extResponse = function(packet) {
        if (this.isInBackGround) return;
        var handle = null;
        var code = packet.cmd;
        var SFSObject = packet.params;
        switch (code) {
         case CODE_EVT_1.default.OtherJoinBDRoom:
          handle = new HandleOtherJoinRoom_1.default();
          break;

         case CODE_EVT_1.default.CreatFishBD:
          handle = new HandleCreatFishBD_1.default();
          break;

         case CODE_EVT_1.default.ChangeMoneyGun:
          handle = new HandleChangeMoneyGunFishBD_1.default();
          break;

         case CODE_EVT_1.default.RemoveListFishBD:
          handle = new HandleRemoveListFishBD_1.default();
          break;

         case CODE_EVT_1.default.RemoveAllFish:
          handle = new HandleRemoveAllListFishBD_1.default();
          break;

         case CODE_EVT_1.default.GunAtackBD:
          handle = new HandleGunAtackBD_1.default();
          break;

         case CODE_EVT_1.default.FishColisionBD:
          handle = new HandleFishColisionBD_1.default();
          break;

         case CODE_EVT_1.default.IceAllFishBD:
          handle = new HandleIceAllFishBD_1.default();
          break;

         case CODE_EVT_1.default.PlayerUsingItemFishBD:
          handle = new HandlePlayerUsingItemFishBD_1.default();
          break;

         case CODE_EVT_1.default.NotFindFishBD:
          handle = new HandleNotFindFishBD_1.default();
          break;

         case CODE_EVT_1.default.InfoFishRoomBD:
          handle = new HandleInfoFishRoomBD_1.default();
          break;

         case CODE_EVT_1.default.SetTimeFishEffectBD:
          handle = new HandleSetTimeFishEffectBD_1.default();
          break;

         case CODE_EVT_1.default.TimeOutPlayBD:
          handle = new HandleTimeOutPlayBD_1.default();
          break;

         case CODE_EVT_1.default.AddItemDrag:
          handle = new HandleAddItemDrag_1.default();
          break;

         case CODE_EVT_1.default.UsingItemDrag:
          handle = new HandleUsingItemDrag_1.default();
          break;

         case CODE_EVT_1.default.ChangeGunFishBD:
          handle = new HandleChangeBD_1.default();
          break;

         case CODE_EVT_1.default.RotateGun:
          handle = new HandleRotateGunBD_1.default();
          break;

         case CODE_EVT_1.default.TrieuHoi:
          handle = new HandleCreatTrieuHoi_1.default();
          break;

         case CODE_EVT_1.default.GetLogJackpot:
          this.reviceLogJackpot(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.Upacingame:
          this.updateBlace(SFSObject);
          break;

         case REQUEST_CODE_1.REQUEST_CODE.ChangeAvaInRoom:
          this.changeAvatarInRoom(SFSObject);
        }
        if (handle) {
          handle.setBD(this);
          handle.handleResponse(SFSObject);
        }
      };
      FishBongDem.prototype.reviceLogJackpot = function(SFSObject) {
        this.fishBDView && this.fishBDView.lichSuJackpot && this.fishBDView.lichSuJackpot.response(SFSObject);
      };
      FishBongDem.prototype.updateBlace = function(SFSObject) {
        var id = SFSObject.get(PlayerPP_1.PlayerPP.AccountId);
        var moneyAdd = SFSObject.get("MoneyAdd");
        if (this.playerMng) {
          var player = this.playerMng.getPlayerById(id);
          if (player) {
            player.isMe && cc.log("nhay me vao add gold updateBlace");
            player.addGold(moneyAdd);
          }
        }
      };
      FishBongDem.prototype.emitNewIndexJp = function() {
        if (this.lbJp && this.me) {
          var indexMoney = this.me.gunFishBd.stateGun.indexMoneyGun;
          cc.log(this.mapConfigJp);
          var per = this.mapConfigJp[Windown_1.Windown.FishBongDem.getGunValueByType(indexMoney).toString()];
          cc.log(per);
          this.lbJp.changePer(per);
        }
      };
      FishBongDem.prototype.changeAvatarInRoom = function(SFSObject) {
        cc.log("nhay vao change avart: " + Windown_1.Windown.SFSObjToJson(SFSObject));
        var id = SFSObject.get(PlayerPP_1.PlayerPP.AccountId);
        var player = this.playerMng.getPlayerById(id);
        var type = SFSObject.get("type");
        var idAvar = SFSObject.get("id");
        var base64 = SFSObject.get("base64");
        var SFSObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObj.putInt("idava", idAvar);
        SFSObj.putInt("typeava", type);
        base64 && SFSObj.putText("base64Ava", base64);
        player && player.setAva(SFSObj);
      };
      FishBongDem.prototype.convertVec = function(outVec) {
        outVec.x *= this.vecLat.x;
        outVec.y *= this.vecLat.y;
        return outVec;
      };
      FishBongDem.prototype.conVertAngle = function(angle) {
        this.playerIdMe > 2 && (angle *= -1);
        return angle;
      };
      FishBongDem.prototype.setVeclat = function() {
        this.vecLat = cc.v2(1, 1);
        this.playerIdMe > 2 && (this.vecLat = cc.v2(1, -1));
      };
      FishBongDem.prototype.sendRequest = function(code, SFSObject, room) {
        this.roomSfs && this.roomSfs.isJoined && this.isCanSendRequest && ConectManager_1.ConectManager.getIns().sendRequest(code, SFSObject, room || this.roomSfs);
      };
      FishBongDem.prototype.makeDelay = function(time) {
        return this.fishBDView.makeDelay(time);
      };
      FishBongDem.prototype.getSound = function() {
        return Windown_1.Windown.AudioManager;
      };
      FishBongDem.prototype.addHandleReset = function(fun, target, once) {
        once ? cc.systemEvent.once("fishReset", fun, target) : cc.systemEvent.on("fishReset", fun, target);
      };
      FishBongDem.prototype.removeHandle = function(fun, target, isTargetOf) {
        isTargetOf ? cc.systemEvent.targetOff(target) : cc.systemEvent.off("fishReset", fun, target);
      };
      FishBongDem.prototype.clearAllTimeOut = function() {
        this.playerIdMe = null;
        this.fishMng && this.fishMng.destroy();
        this.playerMng && this.playerMng.destroy();
      };
      return FishBongDem;
    }();
    exports.default = FishBongDem;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/InfoERR": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Fish/FishBDManager": "FishBDManager",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Network/HandleAddItemDrag": "HandleAddItemDrag",
    "../Network/HandleChangeBD": "HandleChangeBD",
    "../Network/HandleChangeMoneyGunFishBD": "HandleChangeMoneyGunFishBD",
    "../Network/HandleCreatFishBD": "HandleCreatFishBD",
    "../Network/HandleCreatTrieuHoi": "HandleCreatTrieuHoi",
    "../Network/HandleFishColisionBD": "HandleFishColisionBD",
    "../Network/HandleGunAtackBD": "HandleGunAtackBD",
    "../Network/HandleIceAllFishBD": "HandleIceAllFishBD",
    "../Network/HandleInfoFishRoomBD": "HandleInfoFishRoomBD",
    "../Network/HandleNotFindFishBD": "HandleNotFindFishBD",
    "../Network/HandleOtherJoinRoom": "HandleOtherJoinRoom",
    "../Network/HandlePlayerUsingItemFishBD": "HandlePlayerUsingItemFishBD",
    "../Network/HandleRemoveAllListFishBD": "HandleRemoveAllListFishBD",
    "../Network/HandleRemoveListFishBD": "HandleRemoveListFishBD",
    "../Network/HandleRotateGunBD": "HandleRotateGunBD",
    "../Network/HandleSetTimeFishEffectBD": "HandleSetTimeFishEffectBD",
    "../Network/HandleTimeOutPlayBD": "HandleTimeOutPlayBD",
    "../Network/HandleUsingItemDrag": "HandleUsingItemDrag",
    "../Player/PlayerBDManager": "PlayerBDManager"
  } ],
  FishDeadBoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4210bdgUEhLHLOzprJTorCl", "FishDeadBoom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var PanelPoint_1 = require("../../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../FISH_TYPE");
    var FishDeadNoEffect_1 = require("./FishDeadNoEffect");
    var FishDeadBoom = function(_super) {
      __extends(FishDeadBoom, _super);
      function FishDeadBoom() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadBoom.prototype.execute = function(isShowTextMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var player, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _super.prototype.execute.call(this, isShowTextMoney);
              return [ 4, this.makeDelay(.5) ];

             case 1:
              _a.sent();
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (null == player) return [ 2 ];
              node = Windown_1.Windown.FishBongDem.pool.getPanelBoom();
              node.getComponent(PanelPoint_1.default).init(player, this.fishBd.fishId, FISH_TYPE_1.default.BOOM);
              return [ 2 ];
            }
          });
        });
      };
      return FishDeadBoom;
    }(FishDeadNoEffect_1.default);
    exports.default = FishDeadBoom;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../../DeadBevhavior/PanelPoint": "PanelPoint",
    "../FISH_TYPE": "FISH_TYPE",
    "./FishDeadNoEffect": "FishDeadNoEffect"
  } ],
  FishDeadCaXau: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f14e8M27otLzIxSVvSQPXx1", "FishDeadCaXau");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var PanelPoint_1 = require("../../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../FISH_TYPE");
    var FishDeadNoEffect_1 = require("./FishDeadNoEffect");
    var FishDeadCaXau = function(_super) {
      __extends(FishDeadCaXau, _super);
      function FishDeadCaXau() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spCout = null;
        _this.panelPoint = null;
        _this.iconCircle = null;
        _this.caXau = null;
        _this.lbMoneyTake = null;
        _this.pointTarget = null;
        _this.currentCount = 0;
        _this.poolTextMoney = new cc.NodePool();
        return _this;
      }
      FishDeadCaXau.prototype.execute = function(isShowTextMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var player, node, nodeEffectCaXauDead, listArr, isLeft, _i, listArr_1, v, audio, e_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _super.prototype.execute.call(this, isShowTextMoney);
              return [ 4, this.makeDelay(.5) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              _a.trys.push([ 2, 9, , 10 ]);
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (null == player) return [ 2 ];
              node = Windown_1.Windown.FishBongDem.pool.getPanelCaXau();
              player.mapNodePanel.set(this.fishBd.fishId, node);
              this.panelPoint = node.getComponent(PanelPoint_1.default);
              this.panelPoint.reset();
              this.panelPoint.init(this.player, this.fishBd.fishId, FISH_TYPE_1.default.CA_XAU);
              node.parent = player.parentPanel;
              node.scale = 0;
              node.opacity = 255;
              node.stopAllActions();
              node.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
              return [ 4, this.makeDelay(1.5) ];

             case 3:
              _a.sent();
              nodeEffectCaXauDead = Windown_1.Windown.FishBongDem.pool.getEfCaXauDead();
              nodeEffectCaXauDead.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              nodeEffectCaXauDead.zIndex = cc.macro.MAX_ZINDEX;
              this.spCout = nodeEffectCaXauDead.children[1].getComponent(sp.Skeleton);
              this.caXau = nodeEffectCaXauDead.children[0].getComponent(sp.Skeleton);
              this.iconCircle = nodeEffectCaXauDead.children[1].children[0];
              this.lbMoneyTake = nodeEffectCaXauDead.children[2];
              this.pointTarget = this.player.getPosCoint();
              listArr = this.getListArrRandom(this.moneyRevice, this.moneyGun);
              listArr.forEach(function(v) {
                v.forEach(function(t) {
                  _this.player.pushDelay(t);
                });
              });
              this.currentCount = 0;
              this.iconCircle.active = true;
              this.iconCircle.stopAllActions();
              this.iconCircle.scale = .5;
              this.spCout.node.active = false;
              this.updateCount();
              isLeft = true;
              _i = 0, listArr_1 = listArr;
              _a.label = 4;

             case 4:
              if (!(_i < listArr_1.length)) return [ 3, 7 ];
              v = listArr_1[_i];
              return [ 4, this.runAniCaXau(isLeft, v) ];

             case 5:
              _a.sent();
              isLeft = !isLeft;
              _a.label = 6;

             case 6:
              _i++;
              return [ 3, 4 ];

             case 7:
              return [ 4, this.makeDelay(.15 * listArr[listArr.length - 1].length) ];

             case 8:
              _a.sent();
              this.soundBongDem.stopEffect(this.soundBongDem.demTien);
              this.iconCircle.active = false;
              this.caXau.node.active = false;
              audio = Windown_1.Windown.FishBongDem.getSound();
              audio.playEffect(audio.caLonChet);
              Windown_1.Windown.FishBongDem.pool.putEfCaXauDead(nodeEffectCaXauDead);
              this.onDestroy();
              this.panelPoint.node && this.panelPoint.end();
              return [ 3, 10 ];

             case 9:
              e_1 = _a.sent();
              console.error(e_1);
              return [ 3, 10 ];

             case 10:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadCaXau.prototype.runAniCaXau = function(isLeft, arrMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.spCout.node.active = true;
                this.resetStateSpCount();
                this.caXau.node.active = true;
                this.caXau.node.opacity = 0;
                this.caXau.node.runAction(cc.fadeIn(.2));
                if (!isLeft) return [ 3, 3 ];
                this.caXau.node.angle = 90;
                this.caXau.node.setPosition(-1200, 0);
                this.caXau.node.runAction(cc.sequence(cc.moveTo(.2, -400, 0), cc.callFunc(function() {
                  _this.playAniCap();
                })));
                this.spCout.node.runAction(cc.scaleTo(.5, 1.5));
                return [ 4, this.makeDelay(1.5) ];

               case 1:
                _a.sent();
                this.updateCount();
                Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.25);
                Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().fishBoom);
                this.spCout.node.runAction(cc.scaleTo(.5, 1));
                this.spCout.setAnimation(0, "animation", false);
                this.iconCircle.runAction(cc.sequence(cc.scaleTo(.2, .8), cc.scaleTo(.2, .5)));
                this.creatMoneyRandom(arrMoney);
                return [ 4, this.makeDelay(.5) ];

               case 2:
                _a.sent();
                this.caXau.node.runAction(cc.fadeOut(.3));
                return [ 3, 6 ];

               case 3:
                this.caXau.node.angle = -90;
                this.caXau.node.setPosition(1200, 0);
                this.caXau.node.runAction(cc.sequence(cc.moveTo(.2, 400, 0), cc.callFunc(function() {
                  _this.playAniCap();
                })));
                this.spCout.node.runAction(cc.scaleTo(.5, 1.5));
                return [ 4, this.makeDelay(1.5) ];

               case 4:
                _a.sent();
                this.updateCount();
                Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.25);
                Windown_1.Windown.FishBongDem.getSound().playEffect(Windown_1.Windown.FishBongDem.getSound().fishBoom);
                this.spCout.node.runAction(cc.scaleTo(.5, 1));
                this.spCout.setAnimation(0, "animation", false);
                this.iconCircle.runAction(cc.sequence(cc.scaleTo(.2, .8), cc.scaleTo(.2, .5)));
                this.creatMoneyRandom(arrMoney);
                return [ 4, this.makeDelay(.5) ];

               case 5:
                _a.sent();
                this.caXau.node.runAction(cc.fadeOut(.3));
                _a.label = 6;

               case 6:
                return [ 4, this.makeDelay(1.2) ];

               case 7:
                _a.sent();
                this.caXau.node.active = false;
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
      FishDeadCaXau.prototype.playAniCap = function() {
        this.caXau.setAnimation(0, "cap_cap", false);
        this.caXau.addAnimation(0, "animation", false);
      };
      FishDeadCaXau.prototype.getListArrRandom = function(moneyRevice, moneyGun) {
        var list1 = [];
        while (true) {
          var rd1 = Windown_1.Windown.RandomNumber(20, 40);
          var list2 = [];
          for (var i = 0, l = rd1; i < l; i++) {
            var rd2 = Windown_1.Windown.RandomNumber(2, 11);
            var money = moneyGun * rd2;
            moneyRevice - money <= 0 && (money = moneyRevice);
            moneyRevice -= money;
            list2.push(money);
            if (moneyRevice <= 0) {
              list1.push(list2);
              return list1;
            }
          }
          list1.push(list2);
        }
      };
      FishDeadCaXau.prototype.updateCount = function() {
        var lbCount = this.iconCircle.children[0].getComponent(cc.Label);
        lbCount.string = this.currentCount.toString();
        this.currentCount++;
      };
      FishDeadCaXau.prototype.resetStateSpCount = function() {
        cc.sys.isNative ? this.spCout._nativeSkeleton.update(5) : this.spCout.update(5);
      };
      FishDeadCaXau.prototype.creatMoneyRandom = function(arrMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var volume, _i, arrMoney_1, v, player;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              arrMoney.forEach(function(v) {
                var node = _this.getTextItemMoney();
                node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                var lb = node.getComponent(cc.Label);
                lb.string = v.toString();
                var posCoint = cc.v2(Windown_1.Windown.RandomNumber(-500, 500), Windown_1.Windown.RandomNumber(-300, 300));
                node.setPosition(posCoint);
                node.scale = .8;
                node.opacity = 255;
                node.runAction(cc.sequence(cc.scaleTo(.2, 1.3), cc.delayTime(.5), cc.scaleTo(.2, 1), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.fadeOut(.3), cc.callFunc(function() {
                  _this.putTextItemMoney(node);
                })));
              });
              return [ 4, this.makeDelay(2.7) ];

             case 1:
              _a.sent();
              volume = this.player.isMe ? .8 : .6;
              this.soundBongDem.playEffect(this.soundBongDem.demTien, volume, true);
              _i = 0, arrMoney_1 = arrMoney;
              _a.label = 2;

             case 2:
              if (!(_i < arrMoney_1.length)) return [ 3, 5 ];
              v = arrMoney_1[_i];
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (player) {
                player.addGold(v);
                this.panelPoint.addMoney(v);
              }
              return [ 4, this.makeDelay(.15) ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              _i++;
              return [ 3, 2 ];

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadCaXau.prototype.getTextItemMoney = function() {
        var node = null;
        if (this.poolTextMoney.size() < 1) {
          node = cc.instantiate(this.lbMoneyTake);
          node.active = true;
        } else node = this.poolTextMoney.get();
        return node;
      };
      FishDeadCaXau.prototype.putTextItemMoney = function(node) {
        this.poolTextMoney.put(node);
      };
      FishDeadCaXau.prototype.onDestroy = function() {
        this.poolTextMoney.clear();
      };
      return FishDeadCaXau;
    }(FishDeadNoEffect_1.default);
    exports.default = FishDeadCaXau;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../../DeadBevhavior/PanelPoint": "PanelPoint",
    "../FISH_TYPE": "FISH_TYPE",
    "./FishDeadNoEffect": "FishDeadNoEffect"
  } ],
  FishDeadChildHT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ed8agirnxPJ6mULR14gK/g", "FishDeadChildHT");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var FishBDChildHaiThanView_1 = require("../FishBDChildHaiThanView");
    var BaseFishDead_1 = require("./BaseFishDead");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishDeadChildHT = function(_super) {
      __extends(FishDeadChildHT, _super);
      function FishDeadChildHT() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadChildHT.prototype.execute = function(timeDelayAddMoney, isShowTextMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var player, point, listCoin, timeDelay, dtDelay, volume, _loop_1, this_1, _i, listCoin_1, nodeCoin, textMoney_1, actionT1, actionT2, actionT3, actionT4, actionT5;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.fishBd.getViewNode().getComponent(FishBDChildHaiThanView_1.default).playAniTuSat();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                return [ 4, this.makeDelay(.2) ];

               case 1:
                _a.sent();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                player = this.player;
                point = this.fishBd.getPoint();
                listCoin = this.getListCoinByType(this.fishBd.fishType);
                timeDelay = 0;
                dtDelay = .1;
                volume = player.isMe ? .8 : .6;
                _loop_1 = function(nodeCoin) {
                  nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                  nodeCoin.getComponent(cc.Animation).play("Coin");
                  var target = this_1.player.getPosCoint();
                  var action0 = cc.delayTime(timeDelay);
                  var action1 = cc.moveBy(.22, 0, 120);
                  var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                  var action3 = cc.delayTime(1);
                  var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                  var action6 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                    _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                  });
                  nodeCoin.stopAllActions();
                  nodeCoin.runAction(cc.sequence(action0, action1, action2, action3, action4, action6));
                  timeDelay += dtDelay;
                  dtDelay -= .02;
                };
                this_1 = this;
                for (_i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                  nodeCoin = listCoin_1[_i];
                  _loop_1(nodeCoin);
                }
                if (isShowTextMoney) {
                  textMoney_1 = Windown_1.Windown.FishBongDem.pool.getTextMoney(player.isMe);
                  textMoney_1.getComponent(cc.Label).string = this.moneyRevice.toString();
                  textMoney_1.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                  textMoney_1.opacity = 255;
                  textMoney_1.setPosition(point);
                  textMoney_1.scale = 0;
                  actionT1 = cc.scaleTo(.2, 1.5);
                  actionT2 = cc.scaleTo(.5, 1).easing(cc.easeBounceOut());
                  actionT3 = cc.delayTime(1);
                  actionT4 = cc.fadeOut(.3);
                  actionT5 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney_1);
                  });
                  textMoney_1.runAction(cc.sequence(actionT1, actionT2, actionT3, actionT4, actionT5));
                }
                return [ 4, this.makeDelay(1.9 + timeDelayAddMoney) ];

               case 2:
                _a.sent();
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
                if (player) {
                  player.addGold(this.moneyRevice);
                  this.funCall && this.funCall(this.moneyRevice);
                }
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      FishDeadChildHT = __decorate([ ccclass ], FishDeadChildHT);
      return FishDeadChildHT;
    }(BaseFishDead_1.default);
    exports.default = FishDeadChildHT;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../FishBDChildHaiThanView": "FishBDChildHaiThanView",
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadGroup4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1582d/exWNNiJ2gBXr0qwVI", "FishDeadGroup4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseFishDead_1 = require("./BaseFishDead");
    var FishDeadGroup = function(_super) {
      __extends(FishDeadGroup, _super);
      function FishDeadGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishGroupView = null;
        _this.fishBdGroup = null;
        return _this;
      }
      FishDeadGroup.prototype.execute = function(timeDelayAddMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var player, listPoint, volume, _loop_1, this_1, i, l, i, l, fishType, mutil, moneyRevice;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.fishBdGroup = this.fishBd;
                this.fishGroupView = this.fishBdGroup.fishView;
                this.fishBd.playAniDead();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                this.player.isMe && Windown_1.Windown.FishBongDem.setTimeout(function() {
                  Windown_1.Windown.FishBongDem.fishBDView.showTakeGroupFish(_this.moneyRevice);
                }, 1);
                player = this.player;
                listPoint = this.fishGroupView.getListPos();
                volume = player.isMe ? .8 : .6;
                _loop_1 = function(i, l) {
                  var fishType = this_1.fishBdGroup.listFishType[i];
                  var mutil = Windown_1.Windown.FishBongDem.fishMng.getFishCfByType(fishType).get("mutil");
                  var moneyRevice = mutil * this_1.moneyGun;
                  var listCoin = this_1.getListCoinByType(fishType);
                  var timeDelay = 0;
                  var dtDelay = .1;
                  var point = listPoint[i];
                  var _loop_2 = function(nodeCoin) {
                    nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                    nodeCoin.getComponent(cc.Animation).play("Coin");
                    var target = this_1.player.getPosCoint();
                    var action0 = cc.delayTime(timeDelay);
                    var action1 = cc.moveBy(.22, 0, 120);
                    var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                    var action3 = cc.delayTime(1);
                    var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                    var action6 = cc.callFunc(function() {
                      Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                      _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                    });
                    nodeCoin.stopAllActions();
                    nodeCoin.runAction(cc.sequence(action0, action1, action2, action3, action4, action6));
                    timeDelay += dtDelay;
                    dtDelay -= .02;
                  };
                  for (var _i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                    var nodeCoin = listCoin_1[_i];
                    _loop_2(nodeCoin);
                  }
                  var textMoney = Windown_1.Windown.FishBongDem.pool.getTextMoney(player.isMe);
                  textMoney.getComponent(cc.Label).string = moneyRevice.toString();
                  textMoney.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                  textMoney.opacity = 255;
                  textMoney.setPosition(point);
                  textMoney.scale = 0;
                  var actionT1 = cc.scaleTo(.2, 1.5);
                  var actionT2 = cc.scaleTo(.5, 1).easing(cc.easeBounceOut());
                  var actionT3 = cc.delayTime(1);
                  var actionT4 = cc.fadeOut(.3);
                  var actionT5 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney);
                  });
                  textMoney.runAction(cc.sequence(actionT1, actionT2, actionT3, actionT4, actionT5));
                  0 != i && this_1.player.pushDelay(moneyRevice);
                };
                this_1 = this;
                for (i = 0, l = listPoint.length; i < l; i++) _loop_1(i, l);
                return [ 4, this.makeDelay(1.9) ];

               case 1:
                _a.sent();
                i = 0, l = listPoint.length;
                _a.label = 2;

               case 2:
                if (!(i < l)) return [ 3, 5 ];
                fishType = this.fishBdGroup.listFishType[i];
                mutil = Windown_1.Windown.FishBongDem.fishMng.getFishCfByType(fishType).get("mutil");
                moneyRevice = mutil * this.moneyGun;
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
                player && player.addGold(moneyRevice);
                return [ 4, this.makeDelay(.15) ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i++;
                return [ 3, 2 ];

               case 5:
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return FishDeadGroup;
    }(BaseFishDead_1.default);
    exports.default = FishDeadGroup;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49d42c9CXpNfpRHmEoLhXDX", "FishDeadGroup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseFishDead_1 = require("./BaseFishDead");
    var FishDeadGroup = function(_super) {
      __extends(FishDeadGroup, _super);
      function FishDeadGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishGroupView = null;
        _this.fishBdGroup = null;
        return _this;
      }
      FishDeadGroup.prototype.execute = function(timeDelayAddMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var player, listPoint, volume, _loop_1, this_1, i, l, i, l, fishType, mutil, moneyRevice;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.fishBdGroup = this.fishBd;
                this.fishGroupView = this.fishBdGroup.fishView;
                this.fishBd.playAniDead();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                this.player.isMe && Windown_1.Windown.FishBongDem.setTimeout(function() {
                  Windown_1.Windown.FishBongDem.fishBDView.showTakeGroupFish(_this.moneyRevice);
                }, 1);
                player = this.player;
                listPoint = this.fishGroupView.getListPos();
                volume = player.isMe ? .8 : .6;
                _loop_1 = function(i, l) {
                  var fishType = this_1.fishBdGroup.fishTypeChild;
                  0 == i && (fishType = this_1.fishBdGroup.fishTypeMain);
                  var mutil = Windown_1.Windown.FishBongDem.fishMng.getFishCfByType(fishType).get("mutil");
                  var moneyRevice = mutil * this_1.moneyGun;
                  var listCoin = this_1.getListCoinByType(fishType);
                  var timeDelay = 0;
                  var dtDelay = .1;
                  var point = listPoint[i];
                  var _loop_2 = function(nodeCoin) {
                    nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                    nodeCoin.getComponent(cc.Animation).play("Coin");
                    var target = this_1.player.getPosCoint();
                    var action0 = cc.delayTime(timeDelay);
                    var action1 = cc.moveBy(.22, 0, 120);
                    var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                    var action3 = cc.delayTime(1);
                    var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                    var action6 = cc.callFunc(function() {
                      Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                      _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                    });
                    nodeCoin.stopAllActions();
                    nodeCoin.runAction(cc.sequence(action0, action1, action2, action3, action4, action6));
                    timeDelay += dtDelay;
                    dtDelay -= .02;
                  };
                  for (var _i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                    var nodeCoin = listCoin_1[_i];
                    _loop_2(nodeCoin);
                  }
                  var textMoney = Windown_1.Windown.FishBongDem.pool.getTextMoney(player.isMe);
                  textMoney.getComponent(cc.Label).string = moneyRevice.toString();
                  textMoney.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                  textMoney.opacity = 255;
                  textMoney.setPosition(point);
                  textMoney.scale = 0;
                  var actionT1 = cc.scaleTo(.2, 1.5);
                  var actionT2 = cc.scaleTo(.5, 1).easing(cc.easeBounceOut());
                  var actionT3 = cc.delayTime(1);
                  var actionT4 = cc.fadeOut(.3);
                  var actionT5 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney);
                  });
                  textMoney.runAction(cc.sequence(actionT1, actionT2, actionT3, actionT4, actionT5));
                  0 != i && this_1.player.pushDelay(moneyRevice);
                };
                this_1 = this;
                for (i = 0, l = listPoint.length; i < l; i++) _loop_1(i, l);
                return [ 4, this.makeDelay(1.9) ];

               case 1:
                _a.sent();
                i = 0, l = listPoint.length;
                _a.label = 2;

               case 2:
                if (!(i < l)) return [ 3, 5 ];
                fishType = this.fishBdGroup.fishTypeChild;
                0 == i && (fishType = this.fishBdGroup.fishTypeMain);
                mutil = Windown_1.Windown.FishBongDem.fishMng.getFishCfByType(fishType).get("mutil");
                moneyRevice = mutil * this.moneyGun;
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
                player && player.addGold(moneyRevice);
                return [ 4, this.makeDelay(.15) ];

               case 3:
                _a.sent();
                _a.label = 4;

               case 4:
                i++;
                return [ 3, 2 ];

               case 5:
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return FishDeadGroup;
    }(BaseFishDead_1.default);
    exports.default = FishDeadGroup;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadHaiThan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78f30/Cn0tHl7UmwBJ/WeY2", "FishDeadHaiThan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseFishDead_1 = require("./BaseFishDead");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishDeadHaiThan = function(_super) {
      __extends(FishDeadHaiThan, _super);
      function FishDeadHaiThan() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadHaiThan.prototype.execute = function(timeDelayAddMoney, isShowTextMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var player, point, listCoin, timeDelay, dtDelay, volume, _loop_1, this_1, _i, listCoin_1, nodeCoin, textMoney_1, actionT1, actionT2, actionT3, actionT4, actionT5;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.fishBd.playAniDead();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                return [ 4, this.makeDelay(.2) ];

               case 1:
                _a.sent();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                player = this.player;
                point = this.fishBd.getPoint();
                listCoin = this.getListCoinByType(this.fishBd.fishType);
                timeDelay = 0;
                dtDelay = .1;
                volume = player.isMe ? .8 : .6;
                _loop_1 = function(nodeCoin) {
                  nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                  nodeCoin.getComponent(cc.Animation).play("Coin");
                  var target = this_1.player.getPosCoint();
                  var action0 = cc.delayTime(timeDelay);
                  var action1 = cc.moveBy(.22, 0, 120);
                  var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                  var action3 = cc.delayTime(1);
                  var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                  var action6 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                    _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                  });
                  nodeCoin.stopAllActions();
                  nodeCoin.runAction(cc.sequence(action0, action1, action2, action3, action4, action6));
                  timeDelay += dtDelay;
                  dtDelay -= .02;
                };
                this_1 = this;
                for (_i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                  nodeCoin = listCoin_1[_i];
                  _loop_1(nodeCoin);
                }
                if (isShowTextMoney) {
                  textMoney_1 = Windown_1.Windown.FishBongDem.pool.getTextMoney(player.isMe);
                  textMoney_1.getComponent(cc.Label).string = this.moneyRevice.toString();
                  textMoney_1.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                  textMoney_1.opacity = 255;
                  textMoney_1.setPosition(point);
                  textMoney_1.scale = 0;
                  actionT1 = cc.scaleTo(.2, 1.5);
                  actionT2 = cc.scaleTo(.5, 1).easing(cc.easeBounceOut());
                  actionT3 = cc.delayTime(1);
                  actionT4 = cc.fadeOut(.3);
                  actionT5 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney_1);
                  });
                  textMoney_1.runAction(cc.sequence(actionT1, actionT2, actionT3, actionT4, actionT5));
                }
                return [ 4, this.makeDelay(1.9 + timeDelayAddMoney) ];

               case 2:
                _a.sent();
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
                if (player) {
                  player.addGold(this.moneyRevice);
                  this.funCall && this.funCall(this.moneyRevice);
                }
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      FishDeadHaiThan = __decorate([ ccclass ], FishDeadHaiThan);
      return FishDeadHaiThan;
    }(BaseFishDead_1.default);
    exports.default = FishDeadHaiThan;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadJackpot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13376B9aDFIBItmP5fpXAz2", "FishDeadJackpot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../../Scritps/Windown");
    var TakeJp_1 = require("../../Other/TakeJp");
    var FishDeadNoEffect_1 = require("./FishDeadNoEffect");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FishDeadJackpot = function(_super) {
      __extends(FishDeadJackpot, _super);
      function FishDeadJackpot() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadJackpot.prototype.execute = function(isShowTextMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var player, pre, node, e_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _super.prototype.execute.call(this, isShowTextMoney);
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 3, , 4 ]);
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (null == player) return [ 2 ];
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/TakeJp", cc.Prefab) ];

             case 2:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.FishBongDem.fishBDView.node;
              node.getComponent(TakeJp_1.default).show(this.moneyRevice, player.namePlayer);
              return [ 3, 4 ];

             case 3:
              e_1 = _a.sent();
              console.error(e_1);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadJackpot = __decorate([ ccclass ], FishDeadJackpot);
      return FishDeadJackpot;
    }(FishDeadNoEffect_1.default);
    exports.default = FishDeadJackpot;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../../Scritps/Windown": void 0,
    "../../Other/TakeJp": "TakeJp",
    "./FishDeadNoEffect": "FishDeadNoEffect"
  } ],
  FishDeadMutilReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b025YJs99DU7Iip2zwGlU7", "FishDeadMutilReward");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseFishDead_1 = require("./BaseFishDead");
    var FishDeadMutilReward = function(_super) {
      __extends(FishDeadMutilReward, _super);
      function FishDeadMutilReward() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMutilReward = null;
        return _this;
      }
      FishDeadMutilReward.prototype.execute = function(timeDelayAddMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var volume, posTarget, nodeKim, audio, result, angle, action1, nodeNhapNhay, listCoin, timeDelay, dtDelay, point, _loop_1, this_1, _i, listCoin_1, nodeCoin, textMoney, actionT1, actionT2, actionT3, actionT4, actionT5, player;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                volume = this.player.isMe ? .8 : .4;
                this.fishBd.playAniDead();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                posTarget = this.player.gunFishBd.pointInScreen.clone();
                this.player.playerSiting < 3 ? posTarget.y += 100 : posTarget.y -= 100;
                this.nodeMutilReward = Windown_1.Windown.FishBongDem.pool.getMutilReward();
                Windown_1.Windown.FishBongDem.addHandleReset(this.nodeMutilReward.destroy, this.nodeMutilReward, true);
                this.nodeMutilReward.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                this.nodeMutilReward.setPosition(this.fishBd.getPoint());
                this.nodeMutilReward.scale = 0;
                this.nodeMutilReward.runAction(cc.sequence(cc.scaleTo(1, 1).easing(cc.easeBackOut()), cc.moveTo(1, posTarget)));
                nodeKim = cc.find("kim", this.nodeMutilReward);
                nodeKim.stopAllActions();
                nodeKim.angle = 0;
                return [ 4, this.makeDelay(2) ];

               case 1:
                _a.sent();
                audio = Windown_1.Windown.FishBongDem.getSound();
                audio.playEffect(audio.quayRdHeSo);
                result = this.fishBd.mutil;
                cc.log("result la: " + result);
                angle = 2880 + 90 * (result - 2);
                action1 = cc.rotateBy(4, -angle).easing(cc.easeCircleActionInOut());
                nodeKim.runAction(action1);
                nodeNhapNhay = this.nodeMutilReward.children[result];
                nodeNhapNhay.stopAllActions();
                nodeNhapNhay.opacity = 255;
                nodeNhapNhay.runAction(cc.sequence(cc.delayTime(4), cc.blink(3, 6)));
                return [ 4, this.makeDelay(7) ];

               case 2:
                _a.sent();
                Windown_1.Windown.FishBongDem.removeHandle(this.nodeMutilReward.destroy, this.nodeMutilReward, true);
                Windown_1.Windown.FishBongDem.pool.putMutilReward(this.nodeMutilReward);
                listCoin = this.getListCoinByType(this.fishBd.fishTypeMain);
                timeDelay = 0;
                dtDelay = .1;
                point = posTarget;
                _loop_1 = function(nodeCoin) {
                  nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                  nodeCoin.getComponent(cc.Animation).play("Coin");
                  var target = this_1.player.getPosCoint();
                  var action0 = cc.delayTime(timeDelay);
                  var action1_1 = cc.moveBy(.22, 0, 120);
                  var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                  var action3 = cc.delayTime(1);
                  var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                  var action6 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                    _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                  });
                  nodeCoin.stopAllActions();
                  nodeCoin.runAction(cc.sequence(action0, action1_1, action2, action3, action4, action6));
                  timeDelay += dtDelay;
                  dtDelay -= .02;
                };
                this_1 = this;
                for (_i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                  nodeCoin = listCoin_1[_i];
                  _loop_1(nodeCoin);
                }
                textMoney = Windown_1.Windown.FishBongDem.pool.getTextMoney(this.player.isMe);
                textMoney.getComponent(cc.Label).string = this.moneyRevice.toString();
                textMoney.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                textMoney.opacity = 255;
                textMoney.setPosition(point);
                textMoney.scale = 0;
                actionT1 = cc.scaleTo(.2, 1.5);
                actionT2 = cc.scaleTo(.5, 1).easing(cc.easeBounceOut());
                actionT3 = cc.delayTime(1);
                actionT4 = cc.fadeOut(.3);
                actionT5 = cc.callFunc(function() {
                  Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney);
                });
                textMoney.runAction(cc.sequence(actionT1, actionT2, actionT3, actionT4, actionT5));
                return [ 4, this.makeDelay(1.9) ];

               case 3:
                _a.sent();
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
                player && player.addGold(this.moneyRevice);
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return FishDeadMutilReward;
    }(BaseFishDead_1.default);
    exports.default = FishDeadMutilReward;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadNoEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "481cdWredpAwIDZK8XvalTY", "FishDeadNoEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BaseFishDead_1 = require("./BaseFishDead");
    var FishDeadNoEffect = function(_super) {
      __extends(FishDeadNoEffect, _super);
      function FishDeadNoEffect() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadNoEffect.prototype.execute = function(isShowTextMoney) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.fishBd.playAniDead();
            this.fishBd.playAniRemove();
            this.fishBd.removeFishFromList();
            this.player.addGold(0);
            return [ 2 ];
          });
        });
      };
      return FishDeadNoEffect;
    }(BaseFishDead_1.default);
    exports.default = FishDeadNoEffect;
    cc._RF.pop();
  }, {
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadNormalRd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e6b8TvOpVOBbNmw7p9vZ1s", "FishDeadNormalRd");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var LbMoneyChange_1 = require("../../../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../../../Scritps/Windown");
    var FishDeadNormal_1 = require("./FishDeadNormal");
    var FishDeadNormalRd = function(_super) {
      __extends(FishDeadNormalRd, _super);
      function FishDeadNormalRd() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadNormalRd.prototype.execute = function(timeDelay) {
        return __awaiter(this, void 0, void 0, function() {
          var player, point, nodeBigFish, pointRealTime, textRd, volum, listMoney, cpMoney, _i, listMoney_1, money, action1, action2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              player = this.player;
              this.fishBd.playAniDead();
              this.fishBd.removeFishFromList();
              this.fishBd.deadGoToPlayer(this.player);
              point = this.fishBd.getPoint();
              nodeBigFish = Windown_1.Windown.FishBongDem.pool.getBigFish();
              nodeBigFish.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              nodeBigFish.setPosition(point);
              nodeBigFish.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.1);
              this.soundBongDem.playEffectNoStop(this.soundBongDem.fishBoom, .7);
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1) ];

             case 1:
              _a.sent();
              pointRealTime = this.fishBd.getPoint();
              Windown_1.Windown.FishBongDem.pool.putBigFish(nodeBigFish);
              textRd = Windown_1.Windown.FishBongDem.pool.getTextMoneyRd(player.isMe);
              volum = player.isMe ? .4 : .25;
              listMoney = this.convertListRd(this.fishBd.fishType, this.moneyGun, this.moneyRevice);
              cpMoney = textRd.getComponent(LbMoneyChange_1.default);
              textRd.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              textRd.setPosition(pointRealTime.x, pointRealTime.y - 50);
              textRd.opacity = 255;
              cpMoney.resetLb();
              cpMoney.time = 1.2;
              _i = 0, listMoney_1 = listMoney;
              _a.label = 2;

             case 2:
              if (!(_i < listMoney_1.length)) return [ 3, 6 ];
              money = listMoney_1[_i];
              cpMoney.setMoney(money, false, "", false);
              this.soundBongDem.playEffectNoStop(this.soundBongDem.demTien, volum);
              return [ 4, this.makeDelay(1.2) ];

             case 3:
              _a.sent();
              this.soundBongDem.playEffectNoStop(this.soundBongDem.endDemTienTurn, volum);
              action1 = cc.scaleTo(.1, 2);
              action2 = cc.scaleTo(.2, 1);
              textRd.runAction(cc.sequence(action1, action2));
              return [ 4, this.makeDelay(.5) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              _i++;
              return [ 3, 2 ];

             case 6:
              return [ 4, this.makeDelay(.5) ];

             case 7:
              _a.sent();
              textRd.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                Windown_1.Windown.FishBongDem.pool.putTextMoneyRd(textRd);
              })));
              this.soundBongDem.playEffectNoStop(this.soundBongDem.endDemTien);
              this.fishBd.playAniRemove();
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
              if (null == player) return [ 2, new Promise(function(resolve, reject) {
                resolve(null);
              }) ];
              return [ 2, _super.prototype.execute.call(this, .2) ];
            }
          });
        });
      };
      FishDeadNormalRd.prototype.convertListRd = function(fishType, moneyGun, moneyRevice) {
        var listReturn = [];
        var mutilMin = 0;
        var mutilCount = 0;
        switch (fishType) {
         case 15:
         case 16:
          mutilMin = 5;
          mutilCount = 7;
          break;

         case 17:
         case 18:
         case 19:
          mutilMin = 10;
          mutilCount = 10;
          break;

         case 20:
         case 21:
          mutilMin = 20;
          mutilCount = 15;
          break;

         case 22:
          mutilMin = 20;
          mutilCount = 20;
          break;

         case 23:
          mutilMin = 30;
          mutilCount = 20;
          break;

         case 24:
          mutilMin = 30;
          mutilCount = 25;
          break;

         case 25:
          mutilMin = 30;
          mutilCount = 30;
          break;

         case 26:
          mutilMin = 30;
          mutilCount = 35;
          break;

         case 27:
          mutilMin = 80;
          mutilCount = 35;
          break;

         case 28:
          mutilMin = 100;
          mutilCount = 50;
          break;

         default:
          mutilMin = 10;
          mutilCount = 25;
        }
        var moneyCurrent = moneyGun * mutilMin;
        while (true) {
          if (moneyCurrent >= moneyRevice) {
            moneyCurrent = moneyRevice;
            listReturn.push(moneyCurrent);
            break;
          }
          listReturn.push(moneyCurrent);
          moneyCurrent += mutilCount * moneyGun;
        }
        return listReturn;
      };
      return FishDeadNormalRd;
    }(FishDeadNormal_1.default);
    exports.default = FishDeadNormalRd;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../../../Scritps/Windown": void 0,
    "./FishDeadNormal": "FishDeadNormal"
  } ],
  FishDeadNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a85b06pg5MooOGygTmABS0", "FishDeadNormal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var REQUEST_CODE_1 = require("../../../../../Scritps/DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../../../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseFishDead_1 = require("./BaseFishDead");
    var FishDeadNormal = function(_super) {
      __extends(FishDeadNormal, _super);
      function FishDeadNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadNormal.prototype.execute = function(timeDelayAddMoney, isShowTextMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var player, point, listCoin, timeDelay, dtDelay, volume, _loop_1, this_1, _i, listCoin_1, nodeCoin, textMoney_1, actionT1, actionT2, actionT3, actionT4, actionT5, sfsObj;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.fishBd.playAniDead();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                player = this.player;
                point = this.fishBd.getPoint();
                listCoin = this.getListCoinByType(this.fishBd.fishType);
                timeDelay = 0;
                dtDelay = .1;
                volume = player.isMe ? .8 : .6;
                _loop_1 = function(nodeCoin) {
                  nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                  nodeCoin.getComponent(cc.Animation).play("Coin");
                  var target = this_1.player.getPosCoint();
                  var action0 = cc.delayTime(timeDelay);
                  var action1 = cc.moveBy(.22, 0, 120);
                  var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                  var action3 = cc.delayTime(1);
                  var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                  var action6 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                    _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                  });
                  nodeCoin.stopAllActions();
                  nodeCoin.runAction(cc.sequence(action0, action1, action2, action3, action4, action6));
                  timeDelay += dtDelay;
                  dtDelay -= .02;
                };
                this_1 = this;
                for (_i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                  nodeCoin = listCoin_1[_i];
                  _loop_1(nodeCoin);
                }
                if (isShowTextMoney) {
                  textMoney_1 = Windown_1.Windown.FishBongDem.pool.getTextMoney(player.isMe);
                  textMoney_1.getComponent(cc.Label).string = this.moneyRevice.toString();
                  textMoney_1.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                  textMoney_1.opacity = 255;
                  textMoney_1.setPosition(point);
                  textMoney_1.scale = 0;
                  actionT1 = cc.scaleTo(.2, 1.5);
                  actionT2 = cc.scaleTo(.5, 1).easing(cc.easeBounceOut());
                  actionT3 = cc.delayTime(1);
                  actionT4 = cc.fadeOut(.3);
                  actionT5 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putTextMoney(textMoney_1);
                  });
                  textMoney_1.runAction(cc.sequence(actionT1, actionT2, actionT3, actionT4, actionT5));
                }
                return [ 4, this.makeDelay(1.9 + timeDelayAddMoney) ];

               case 1:
                _a.sent();
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
                if (player) {
                  player.addGold(this.moneyRevice);
                  this.funCall && this.funCall(this.moneyRevice);
                  if (player.isMe && (28 == this.fishBd.fishType || 27 == this.fishBd.fishType || this.fishBd.fishType >= 70 && this.fishBd.fishType <= 74)) {
                    sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                    sfsObj.putInt("gt", GAME_TYPE_1.default.BongDem);
                    sfsObj.putInt("mt", this.moneyRevice);
                    sfsObj.putUtfString("nn", this.player.namePlayer);
                    sfsObj.putUtfString("dt", this.fishBd.fishType.toString());
                    ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                  }
                }
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return FishDeadNormal;
    }(BaseFishDead_1.default);
    exports.default = FishDeadNormal;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../../Scritps/Network/ConectManager": void 0,
    "../../../../../Scritps/Windown": void 0,
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishDeadRua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a4aaTFPjFIN71raOM9tx8z", "FishDeadRua");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var PanelPoint_1 = require("../../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../FISH_TYPE");
    var FishDeadNoEffect_1 = require("./FishDeadNoEffect");
    var FishDeadRua = function(_super) {
      __extends(FishDeadRua, _super);
      function FishDeadRua() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spRua = null;
        _this.lbMoneyTake = null;
        _this.panelPoint = null;
        _this.pointTarget = null;
        _this.currentCount = 0;
        _this.poolTextMoney = new cc.NodePool();
        return _this;
      }
      FishDeadRua.prototype.execute = function(isShowTextMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var player, node, nodeEffectRuaDead, listArr, _i, listArr_1, v, audio, e_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _super.prototype.execute.call(this, isShowTextMoney);
              return [ 4, this.makeDelay(.5) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              _a.trys.push([ 2, 10, , 11 ]);
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (null == player) return [ 2 ];
              node = Windown_1.Windown.FishBongDem.pool.getPanelRua();
              player.mapNodePanel.set(this.fishBd.fishId, node);
              this.panelPoint = node.getComponent(PanelPoint_1.default);
              this.panelPoint.init(this.player, this.fishBd.fishId, FISH_TYPE_1.default.RUA);
              this.panelPoint.reset();
              node.parent = player.parentPanel;
              node.scale = 0;
              node.opacity = 255;
              node.stopAllActions();
              node.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
              this.pointTarget = this.player.getPosCoint();
              return [ 4, this.makeDelay(1.5) ];

             case 3:
              _a.sent();
              nodeEffectRuaDead = Windown_1.Windown.FishBongDem.pool.getEfRuaDead();
              nodeEffectRuaDead.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              nodeEffectRuaDead.zIndex = cc.macro.MAX_ZINDEX;
              this.spRua = nodeEffectRuaDead.children[0].getComponent(sp.Skeleton);
              this.setScaleNodeEffect();
              this.lbMoneyTake = nodeEffectRuaDead.children[1];
              listArr = this.getListArrRandom(this.moneyRevice, this.moneyGun);
              listArr.forEach(function(v) {
                v.forEach(function(t) {
                  _this.player.pushDelay(t);
                });
              });
              this.currentCount = 0;
              _i = 0, listArr_1 = listArr;
              _a.label = 4;

             case 4:
              if (!(_i < listArr_1.length)) return [ 3, 7 ];
              v = listArr_1[_i];
              return [ 4, this.runAniRua(v) ];

             case 5:
              _a.sent();
              _a.label = 6;

             case 6:
              _i++;
              return [ 3, 4 ];

             case 7:
              return [ 4, this.makeDelay(1) ];

             case 8:
              _a.sent();
              return [ 4, this.makeDelay(.15 * listArr[listArr.length - 1].length) ];

             case 9:
              _a.sent();
              audio = Windown_1.Windown.FishBongDem.getSound();
              audio.playEffect(audio.caLonChet);
              Windown_1.Windown.FishBongDem.pool.putEfRuaDead(nodeEffectRuaDead);
              this.panelPoint.node && this.panelPoint.end();
              return [ 3, 11 ];

             case 10:
              e_1 = _a.sent();
              console.error(e_1);
              return [ 3, 11 ];

             case 11:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadRua.prototype.runAniRua = function(arrMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var audio;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.spRua.node.active = true;
                this.spRua.node.opacity = 255;
                this.spRua.setAnimation(0, "animation3", false);
                this.spRua.setEndListener(function() {
                  _this.spRua.setEndListener(null);
                  _this.spRua.node.runAction(cc.fadeOut(.4));
                });
                audio = Windown_1.Windown.FishBongDem.getSound();
                return [ 4, this.makeDelay(.5) ];

               case 1:
                _a.sent();
                audio.playEffect(audio.ruaXiLua);
                return [ 4, this.makeDelay(.5) ];

               case 2:
                _a.sent();
                audio.playEffect(audio.ruaXiLua);
                return [ 4, this.makeDelay(.8) ];

               case 3:
                _a.sent();
                Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.25);
                audio.playEffect(audio.fishBoom);
                this.creatMoneyRandom(arrMoney);
                return [ 4, this.makeDelay(3.5) ];

               case 4:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      FishDeadRua.prototype.getListArrRandom = function(moneyRevice, moneyGun) {
        var list1 = [];
        while (true) {
          var rd1 = Windown_1.Windown.RandomNumber(20, 40);
          var list2 = [];
          for (var i = 0, l = rd1; i < l; i++) {
            var rd2 = Windown_1.Windown.RandomNumber(2, 11);
            var money = moneyGun * rd2;
            moneyRevice - money <= 0 && (money = moneyRevice);
            moneyRevice -= money;
            list2.push(money);
            if (moneyRevice <= 0) {
              list1.push(list2);
              return list1;
            }
          }
          list1.push(list2);
        }
      };
      FishDeadRua.prototype.creatMoneyRandom = function(arrMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var volume, _i, arrMoney_1, v, player;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              arrMoney.forEach(function(v) {
                var node = _this.getTextItemMoney();
                node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                var lb = node.getComponent(cc.Label);
                lb.string = v.toString();
                var posCoint = cc.v2(Windown_1.Windown.RandomNumber(-500, 500), Windown_1.Windown.RandomNumber(-300, 300));
                node.setPosition(posCoint);
                node.scale = .8;
                node.opacity = 255;
                node.runAction(cc.sequence(cc.scaleTo(.2, 1.3), cc.delayTime(.5), cc.scaleTo(.2, 1), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.fadeOut(.1), cc.callFunc(function() {
                  _this.creatCoin(posCoint);
                  _this.putTextItemMoney(node);
                })));
              });
              return [ 4, this.makeDelay(2.7) ];

             case 1:
              _a.sent();
              volume = this.player.isMe ? 1 : .6;
              _i = 0, arrMoney_1 = arrMoney;
              _a.label = 2;

             case 2:
              if (!(_i < arrMoney_1.length)) return [ 3, 5 ];
              v = arrMoney_1[_i];
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (player) {
                player.addGold(v);
                this.panelPoint.addMoney(v);
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinVeTui, volume);
              }
              return [ 4, this.makeDelay(.15) ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              _i++;
              return [ 3, 2 ];

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadRua.prototype.creatCoin = function(posStart) {
        var _loop_1 = function(i) {
          var coin = Windown_1.Windown.FishBongDem.pool.getCoin(true);
          coin.scale = .5;
          coin.getComponent(cc.Animation).play("Coin");
          coin.setPosition(cc.v2(posStart.x + Windown_1.Windown.RandomNumber(-50, 50), posStart.y + Windown_1.Windown.RandomNumber(-50, 50)));
          coin.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
          coin.runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, this_1.pointTarget).easing(cc.easeBackIn()), cc.callFunc(function() {
            Windown_1.Windown.FishBongDem.pool.putCoin(coin);
          })));
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) _loop_1(i);
      };
      FishDeadRua.prototype.getTextItemMoney = function() {
        var node = null;
        if (this.poolTextMoney.size() < 1) {
          node = cc.instantiate(this.lbMoneyTake);
          node.active = true;
        } else node = this.poolTextMoney.get();
        return node;
      };
      FishDeadRua.prototype.putTextItemMoney = function(node) {
        this.poolTextMoney.put(node);
      };
      FishDeadRua.prototype.onDestroy = function() {
        this.poolTextMoney.clear();
      };
      FishDeadRua.prototype.setScaleNodeEffect = function() {
        var winsize = cc.winSize;
        var scale = 1;
        this.spRua.node.scaleX = winsize.width / 1280;
        this.spRua.node.scaleY = winsize.height / 720;
      };
      return FishDeadRua;
    }(FishDeadNoEffect_1.default);
    exports.default = FishDeadRua;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../../DeadBevhavior/PanelPoint": "PanelPoint",
    "../FISH_TYPE": "FISH_TYPE",
    "./FishDeadNoEffect": "FishDeadNoEffect"
  } ],
  FishDeadTrieuHoi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ad13ORWs1N+5zj5d7gC+d5", "FishDeadTrieuHoi");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../../../Scritps/Game/GAME_TYPE");
    var Windown_1 = require("../../../../../Scritps/Windown");
    var ThangLon_1 = require("../../ThangLon");
    var FishDeadNormal_1 = require("./FishDeadNormal");
    var FishDeadTrieuHoi = function(_super) {
      __extends(FishDeadTrieuHoi, _super);
      function FishDeadTrieuHoi() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FishDeadTrieuHoi.prototype.execute = function(timeDelay) {
        return __awaiter(this, void 0, void 0, function() {
          var player, nodeBigFish, pre, node;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              player = this.player;
              this.fishBd.playAniDead();
              this.fishBd.removeFishFromList();
              this.fishBd.playAniRemove();
              Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.1);
              nodeBigFish = Windown_1.Windown.FishBongDem.pool.getBigFish();
              nodeBigFish.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              nodeBigFish.setPosition(this.fishBd.getPoint());
              nodeBigFish.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              this.soundBongDem.playEffectNoStop(this.soundBongDem.fishBoom);
              Windown_1.Windown.FishBongDem.fishBDView.scheduleOnce(function() {
                _this.soundBongDem.playEffectNoStop(_this.soundBongDem.ShowTakeTireuHoi, .7);
              }, .5);
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.BongDem.toString(), "Prefabs/Game/ThangLon", cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              return [ 4, node.getComponent(ThangLon_1.default).init(this.fishBd.fishType, player, this.moneyRevice) ];

             case 2:
              _a.sent();
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(player.acountId);
              if (null == player) return [ 2, new Promise(function(resolve, reject) {
                resolve(null);
              }) ];
              return [ 2, _super.prototype.execute.call(this, 0) ];
            }
          });
        });
      };
      return FishDeadTrieuHoi;
    }(FishDeadNormal_1.default);
    exports.default = FishDeadTrieuHoi;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../../Scritps/Windown": void 0,
    "../../ThangLon": "ThangLon",
    "./FishDeadNormal": "FishDeadNormal"
  } ],
  FishDeadTruyGai: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72090lMSeFA5p1t5Jr9dJIe", "FishDeadTruyGai");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var PanelPoint_1 = require("../../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../FISH_TYPE");
    var FishDeadNoEffect_1 = require("./FishDeadNoEffect");
    var FishDeadTruyGai = function(_super) {
      __extends(FishDeadTruyGai, _super);
      function FishDeadTruyGai() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spTruyGai = null;
        _this.lbMoneyTake = null;
        _this.panelPoint = null;
        _this.pointTarget = null;
        _this.currentCount = 0;
        _this.poolTextMoney = new cc.NodePool();
        return _this;
      }
      FishDeadTruyGai.prototype.execute = function(isShowTextMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var player, node, nodeEffectTruyGaiDead, listArr, _i, listArr_1, v, audio, e_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _super.prototype.execute.call(this, isShowTextMoney);
              return [ 4, this.makeDelay(.5) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              _a.trys.push([ 2, 10, , 11 ]);
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (null == player) return [ 2 ];
              node = Windown_1.Windown.FishBongDem.pool.getPanelTruyGai();
              player.mapNodePanel.set(this.fishBd.fishId, node);
              this.panelPoint = node.getComponent(PanelPoint_1.default);
              this.panelPoint.init(this.player, this.fishBd.fishId, FISH_TYPE_1.default.TRUY_GAI);
              this.panelPoint.reset();
              node.parent = player.parentPanel;
              node.scale = 0;
              node.opacity = 255;
              node.stopAllActions();
              node.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
              return [ 4, this.makeDelay(1.5) ];

             case 3:
              _a.sent();
              nodeEffectTruyGaiDead = Windown_1.Windown.FishBongDem.pool.getEfTruyGaiDead();
              nodeEffectTruyGaiDead.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
              nodeEffectTruyGaiDead.zIndex = cc.macro.MAX_ZINDEX;
              this.spTruyGai = nodeEffectTruyGaiDead.children[0].getComponent(sp.Skeleton);
              this.setScaleNodeEffect();
              this.lbMoneyTake = nodeEffectTruyGaiDead.children[1];
              this.pointTarget = this.player.getPosCoint();
              listArr = this.getListArrRandom(this.moneyRevice, this.moneyGun);
              listArr.forEach(function(v) {
                v.forEach(function(t) {
                  _this.player.pushDelay(t);
                });
              });
              this.currentCount = 0;
              _i = 0, listArr_1 = listArr;
              _a.label = 4;

             case 4:
              if (!(_i < listArr_1.length)) return [ 3, 7 ];
              v = listArr_1[_i];
              return [ 4, this.runAniTruyGai(v) ];

             case 5:
              _a.sent();
              _a.label = 6;

             case 6:
              _i++;
              return [ 3, 4 ];

             case 7:
              return [ 4, this.makeDelay(1) ];

             case 8:
              _a.sent();
              return [ 4, this.makeDelay(.15 * listArr[listArr.length - 1].length) ];

             case 9:
              _a.sent();
              audio = Windown_1.Windown.FishBongDem.getSound();
              audio.playEffect(audio.caLonChet);
              Windown_1.Windown.FishBongDem.pool.putEfTruyGaiDead(nodeEffectTruyGaiDead);
              this.panelPoint.node && this.panelPoint.end();
              return [ 3, 11 ];

             case 10:
              e_1 = _a.sent();
              console.error(e_1);
              return [ 3, 11 ];

             case 11:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadTruyGai.prototype.runAniTruyGai = function(arrMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var audio;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.spTruyGai.node.active = true;
                this.spTruyGai.node.opacity = 255;
                this.spTruyGai.setAnimation(0, "animation", false);
                this.spTruyGai.setEndListener(function() {
                  _this.spTruyGai.setEndListener(null);
                  _this.spTruyGai.node.runAction(cc.fadeOut(.4));
                });
                return [ 4, this.makeDelay(.2) ];

               case 1:
                _a.sent();
                Windown_1.Windown.FishBongDem.fishBDView.shakeScence(.25);
                audio = Windown_1.Windown.FishBongDem.getSound();
                audio.playEffect(audio.fishBoom);
                return [ 4, this.makeDelay(1) ];

               case 2:
                _a.sent();
                this.creatMoneyRandom(arrMoney);
                return [ 4, this.makeDelay(2) ];

               case 3:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      FishDeadTruyGai.prototype.getListArrRandom = function(moneyRevice, moneyGun) {
        var list1 = [];
        while (true) {
          var rd1 = Windown_1.Windown.RandomNumber(20, 40);
          var list2 = [];
          for (var i = 0, l = rd1; i < l; i++) {
            var rd2 = Windown_1.Windown.RandomNumber(2, 11);
            var money = moneyGun * rd2;
            moneyRevice - money <= 0 && (money = moneyRevice);
            moneyRevice -= money;
            list2.push(money);
            if (moneyRevice <= 0) {
              list1.push(list2);
              return list1;
            }
          }
          list1.push(list2);
        }
      };
      FishDeadTruyGai.prototype.creatMoneyRandom = function(arrMoney) {
        return __awaiter(this, void 0, void 0, function() {
          var volume, _i, arrMoney_1, v, player;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              arrMoney.forEach(function(v) {
                var node = _this.getTextItemMoney();
                node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                var lb = node.getComponent(cc.Label);
                lb.string = v.toString();
                var posCoint = cc.v2(Windown_1.Windown.RandomNumber(-500, 500), Windown_1.Windown.RandomNumber(-300, 300));
                node.setPosition(posCoint);
                node.scale = .8;
                node.opacity = 255;
                node.runAction(cc.sequence(cc.scaleTo(.2, 1.3), cc.delayTime(.5), cc.scaleTo(.2, 1), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.moveTo(.5, cc.v2(posCoint.x + Windown_1.Windown.RandomNumber(-10, 11), posCoint.y + Windown_1.Windown.RandomNumber(-10, 11))), cc.fadeOut(.3), cc.callFunc(function() {
                  _this.putTextItemMoney(node);
                })));
              });
              return [ 4, this.makeDelay(2.7) ];

             case 1:
              _a.sent();
              volume = this.player.isMe ? 1 : .6;
              _i = 0, arrMoney_1 = arrMoney;
              _a.label = 2;

             case 2:
              if (!(_i < arrMoney_1.length)) return [ 3, 5 ];
              v = arrMoney_1[_i];
              player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
              if (player) {
                player.addGold(v);
                this.panelPoint.addMoney(v);
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinVeTui, volume);
              }
              return [ 4, this.makeDelay(.15) ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              _i++;
              return [ 3, 2 ];

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      FishDeadTruyGai.prototype.getTextItemMoney = function() {
        var node = null;
        if (this.poolTextMoney.size() < 1) {
          node = cc.instantiate(this.lbMoneyTake);
          node.active = true;
        } else node = this.poolTextMoney.get();
        return node;
      };
      FishDeadTruyGai.prototype.putTextItemMoney = function(node) {
        this.poolTextMoney.put(node);
      };
      FishDeadTruyGai.prototype.onDestroy = function() {
        this.poolTextMoney.clear();
      };
      FishDeadTruyGai.prototype.setScaleNodeEffect = function() {
        var winsize = cc.winSize;
        var scale = 1;
        winsize.width > 1280 ? scale = winsize.width / 1280 : winsize.height > 720 && (scale = winsize.height / 720);
        this.spTruyGai.node.scale = scale;
      };
      return FishDeadTruyGai;
    }(FishDeadNoEffect_1.default);
    exports.default = FishDeadTruyGai;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../../DeadBevhavior/PanelPoint": "PanelPoint",
    "../FISH_TYPE": "FISH_TYPE",
    "./FishDeadNoEffect": "FishDeadNoEffect"
  } ],
  FishDeadVongQuay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc7d3SqQiNIa7HRAj+wMaj/", "FishDeadVongQuay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var REQUEST_CODE_1 = require("../../../../../Scritps/DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../../../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../../Scritps/Windown");
    var CrabVongQuay_1 = require("../../Other/CrabVongQuay");
    var FISH_TYPE_1 = require("../FISH_TYPE");
    var BaseFishDead_1 = require("./BaseFishDead");
    var FishDeadVongQuay = function(_super) {
      __extends(FishDeadVongQuay, _super);
      function FishDeadVongQuay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCrabVongQuay = null;
        return _this;
      }
      FishDeadVongQuay.prototype.execute = function(timeDelayAddMoney) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var volume, posTarget, mutil, cp, listCoin, timeDelay, dtDelay, point, _loop_1, this_1, _i, listCoin_1, nodeCoin, player, sfsObj;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                volume = this.player.isMe ? .8 : .4;
                this.fishBd.playAniDead();
                this.fishBd.playAniRemove();
                this.fishBd.removeFishFromList();
                this.soundBongDem.playEffectNoStop(this.soundBongDem.coinBayVe, .6);
                posTarget = this.player.gunFishBd.pointInScreen.clone();
                this.player.playerSiting < 3 ? posTarget.y += 150 : posTarget.y -= 150;
                this.nodeCrabVongQuay = Windown_1.Windown.FishBongDem.pool.getCrabVongQuay();
                this.nodeCrabVongQuay.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
                this.nodeCrabVongQuay.setPosition(this.fishBd.getPoint());
                this.nodeCrabVongQuay.scale = 0;
                return [ 4, this.makeDelay(2) ];

               case 1:
                _a.sent();
                this.nodeCrabVongQuay.scale = .2;
                this.nodeCrabVongQuay.runAction(cc.sequence(cc.spawn(cc.scaleTo(.8, .5), cc.jumpTo(.8, cc.v2(this.nodeCrabVongQuay.x - Windown_1.Windown.RandomNumber(-100, 100), this.nodeCrabVongQuay.y + 50), 80, 1)), cc.delayTime(2), cc.spawn(cc.moveTo(.5, posTarget).easing(cc.easeBackIn()), cc.scaleTo(.5, 1))));
                return [ 4, this.makeDelay(4) ];

               case 2:
                _a.sent();
                mutil = this.moneyRevice / this.moneyGun;
                cp = this.nodeCrabVongQuay.getComponent(CrabVongQuay_1.default);
                return [ 4, cp.init(mutil, this.moneyRevice) ];

               case 3:
                _a.sent();
                listCoin = this.getListCoinByType(this.fishBd.fishTypeMain);
                timeDelay = 0;
                dtDelay = .1;
                point = posTarget;
                _loop_1 = function(nodeCoin) {
                  nodeCoin.setPosition(point.x + Windown_1.Windown.RandomNumber(-70, 70), point.y + 30 + Windown_1.Windown.RandomNumber(-40, 40));
                  nodeCoin.getComponent(cc.Animation).play("Coin");
                  var target = this_1.player.getPosCoint();
                  var action0 = cc.delayTime(timeDelay);
                  var action1 = cc.moveBy(.22, 0, 120);
                  var action2 = cc.moveBy(.32, 0, -120).easing(cc.easeBounceOut());
                  var action3 = cc.delayTime(1);
                  var action4 = cc.spawn(cc.scaleTo(.5, .15), cc.moveTo(.5, target));
                  var action6 = cc.callFunc(function() {
                    Windown_1.Windown.FishBongDem.pool.putCoin(nodeCoin);
                    _this.soundBongDem.playEffectNoStop(_this.soundBongDem.coinVeTui, volume);
                  });
                  nodeCoin.stopAllActions();
                  nodeCoin.runAction(cc.sequence(action0, action1, action2, action3, action4, action6));
                  timeDelay += dtDelay;
                  dtDelay -= .02;
                };
                this_1 = this;
                for (_i = 0, listCoin_1 = listCoin; _i < listCoin_1.length; _i++) {
                  nodeCoin = listCoin_1[_i];
                  _loop_1(nodeCoin);
                }
                return [ 4, this.makeDelay(1.9) ];

               case 4:
                _a.sent();
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(this.player.acountId);
                if (player) {
                  player.addGold(this.moneyRevice);
                  if (player.isMe) {
                    sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
                    sfsObj.putInt("gt", GAME_TYPE_1.default.BongDem);
                    sfsObj.putInt("mt", this.moneyRevice);
                    sfsObj.putUtfString("nn", this.player.namePlayer);
                    sfsObj.putUtfString("dt", FISH_TYPE_1.default.VONG_QUAY.toString());
                    ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
                  }
                }
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      return FishDeadVongQuay;
    }(BaseFishDead_1.default);
    exports.default = FishDeadVongQuay;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../../Scritps/Network/ConectManager": void 0,
    "../../../../../Scritps/Windown": void 0,
    "../../Other/CrabVongQuay": "CrabVongQuay",
    "../FISH_TYPE": "FISH_TYPE",
    "./BaseFishDead": "BaseFishDead"
  } ],
  FishStateBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aec5fWXi6tItooPNwtO+t2B", "FishStateBD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FishStateBD = function() {
      function FishStateBD() {}
      FishStateBD.NORMAL = 0;
      FishStateBD.ICE = -1;
      FishStateBD.SLOW = 1;
      FishStateBD.WATING = 2;
      return FishStateBD;
    }();
    exports.default = FishStateBD;
    cc._RF.pop();
  }, {} ],
  GUN_TYPE_BD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a196checq1AKbNKXNqANQIv", "GUN_TYPE_BD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GUN_TYPE_BD = function() {
      function GUN_TYPE_BD() {}
      GUN_TYPE_BD.NORMAL = 0;
      GUN_TYPE_BD.LAZE = 1;
      GUN_TYPE_BD.SONG_AM = 3;
      GUN_TYPE_BD.MUI_KHOAN = 4;
      GUN_TYPE_BD.SET = 5;
      GUN_TYPE_BD.FIRE = 6;
      return GUN_TYPE_BD;
    }();
    exports.default = GUN_TYPE_BD;
    cc._RF.pop();
  }, {} ],
  GunFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cdd8/J19lA/Lvhx8w5w6kZ", "GunFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GUN_TYPE_BD_1 = require("./GUN_TYPE_BD");
    var StateGunFire_1 = require("./StateGunFire");
    var StateGunLaze_1 = require("./StateGunLaze");
    var StateGunMuiKhoan_1 = require("./StateGunMuiKhoan");
    var StateGunNormal_1 = require("./StateGunNormal");
    var StateGunSet_1 = require("./StateGunSet");
    var StateGunSongAm_1 = require("./StateGunSongAm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var listXPosGun = [ 210, -210, -210, 210 ];
    var listYBoxMoney = [ -32, -32, 32, 32 ];
    var listPos = [ {
      x: -265,
      y: -312
    }, {
      x: 265,
      y: -312
    }, {
      x: 265,
      y: 312
    }, {
      x: -265,
      y: 312
    } ];
    var GunFishBD = function(_super) {
      __extends(GunFishBD, _super);
      function GunFishBD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbGunValue = null;
        _this.bodyGun = null;
        _this.nodeStartBullet = null;
        _this.bulletNormal = null;
        _this.speedGun = 0;
        _this.stateGun = null;
        _this.playerBD = null;
        _this.pointInScreen = null;
        _this.poolBulletNormal = new cc.NodePool();
        return _this;
      }
      GunFishBD.prototype.setPlayer = function(player) {
        this.playerBD = player;
        this.setupViewGun();
        this.getPoint();
        this.playerBD.isMe && Windown_1.Windown.FishBongDem.fishBDView.showArrowMe(cc.v2(this.pointInScreen.x, this.pointInScreen.y + 150));
      };
      GunFishBD.prototype.setupViewGun = function() {
        this.node.x = listXPosGun[this.playerBD.playerSiting - 1];
        this.lbGunValue.node.parent.y = listYBoxMoney[this.playerBD.playerSiting - 1];
        this.playerBD.isMe ? this.setActiveBtn(true) : this.setActiveBtn(false);
        this.playerBD.playerSiting > 2 ? this.bodyGun.angle = 180 : this.bodyGun.angle = 0;
      };
      GunFishBD.prototype.setActiveBtn = function(isActive) {
        this.playerBD.isMe || (isActive = false);
        cc.find("Add", this.node).active = isActive;
        cc.find("Sub", this.node).active = isActive;
      };
      GunFishBD.prototype.getPoint = function() {
        this.pointInScreen = cc.v2(listPos[this.playerBD.playerSiting - 1].x, listPos[this.playerBD.playerSiting - 1].y);
      };
      GunFishBD.prototype.initGun = function(idGun, id) {
        if (this.stateGun && this.stateGun.type == idGun) {
          id && (this.stateGun["idGunNow"] = id);
          return;
        }
        null != this.stateGun && this.stateGun.reset();
        var stateGun = this.getStateGunByType(idGun, id);
        stateGun.indexMoneyGun = this.playerBD.indexMoneyGun;
        stateGun.execute();
        this.stateGun = stateGun;
      };
      GunFishBD.prototype.getStateGunByType = function(typeGun, id) {
        if (typeGun == GUN_TYPE_BD_1.default.NORMAL) return new StateGunNormal_1.default(this, typeGun);
        if (typeGun == GUN_TYPE_BD_1.default.LAZE) {
          var cp = new StateGunLaze_1.default(this, typeGun);
          cp.idGunNow = id;
          return cp;
        }
        if (typeGun == GUN_TYPE_BD_1.default.SONG_AM) {
          var cp = new StateGunSongAm_1.default(this, typeGun);
          cp.idGunNow = id;
          return cp;
        }
        if (typeGun == GUN_TYPE_BD_1.default.MUI_KHOAN) {
          var cp = new StateGunMuiKhoan_1.default(this, typeGun);
          cp.idGunNow = id;
          return cp;
        }
        if (typeGun == GUN_TYPE_BD_1.default.SET) {
          var cp = new StateGunSet_1.default(this, typeGun);
          return cp;
        }
        if (typeGun == GUN_TYPE_BD_1.default.FIRE) {
          var cp = new StateGunFire_1.default(this, typeGun);
          cp.idGunNow = id;
          return cp;
        }
      };
      GunFishBD.prototype.rotate = function(point) {
        this.stateGun && this.stateGun.rotate(point);
      };
      GunFishBD.prototype.onClickAdd = function() {
        this.stateGun.onClickAdd();
      };
      GunFishBD.prototype.onClickSub = function() {
        this.stateGun.onClickSub();
      };
      GunFishBD.prototype.setMoneyGun = function(id) {
        this.stateGun.setMoneyGun(id);
      };
      GunFishBD.prototype.getBulletNormalPool = function() {
        var node = null;
        if (this.poolBulletNormal.size() < 1) {
          node = cc.instantiate(this.bulletNormal);
          node.active = true;
          node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentBullet;
        } else {
          node = this.poolBulletNormal.get();
          node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentBullet;
        }
        return node;
      };
      GunFishBD.prototype.getVecStartBullet = function() {
        var worldPos = this.nodeStartBullet.parent.convertToWorldSpaceAR(this.nodeStartBullet.getPosition());
        var viewPos = this.playerBD.playerManager.fishBD.fishBDView.parentBullet.convertToNodeSpaceAR(worldPos);
        return viewPos;
      };
      GunFishBD.prototype.putButtletNormal = function(node) {
        this.poolBulletNormal.put(node);
      };
      GunFishBD.prototype.onDestroy = function() {
        this.poolBulletNormal.clear();
      };
      GunFishBD.prototype.updateCp = function(dt) {
        this.stateGun.updateCp(dt);
      };
      GunFishBD.prototype.cancleAtack = function() {
        this.stateGun && this.stateGun.cancleAtack();
      };
      __decorate([ property(cc.Label) ], GunFishBD.prototype, "lbGunValue", void 0);
      __decorate([ property(cc.Node) ], GunFishBD.prototype, "bodyGun", void 0);
      __decorate([ property(cc.Node) ], GunFishBD.prototype, "nodeStartBullet", void 0);
      __decorate([ property(cc.Node) ], GunFishBD.prototype, "bulletNormal", void 0);
      GunFishBD = __decorate([ ccclass ], GunFishBD);
      return GunFishBD;
    }(cc.Component);
    exports.default = GunFishBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./GUN_TYPE_BD": "GUN_TYPE_BD",
    "./StateGunFire": "StateGunFire",
    "./StateGunLaze": "StateGunLaze",
    "./StateGunMuiKhoan": "StateGunMuiKhoan",
    "./StateGunNormal": "StateGunNormal",
    "./StateGunSet": "StateGunSet",
    "./StateGunSongAm": "StateGunSongAm"
  } ],
  HandleAddItemDrag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec791+69ChDOro0DI+9SVOU", "HandleAddItemDrag");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var IResponseBD_1 = require("./IResponseBD");
    var HandleAddItemDrag = function(_super) {
      __extends(HandleAddItemDrag, _super);
      function HandleAddItemDrag() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleAddItemDrag.prototype.handleResponse = function(SFSObject) {
        var playerID = SFSObject.get("AccountId");
        var player = this.fishBD.playerMng.getPlayerById(playerID);
        player && player.addItemDrag(SFSObject);
      };
      return HandleAddItemDrag;
    }(IResponseBD_1.default);
    exports.default = HandleAddItemDrag;
    cc._RF.pop();
  }, {
    "./IResponseBD": "IResponseBD"
  } ],
  HandleChangeBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28b1a1Z+VhKCaP/dIlaCwpE", "HandleChangeBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var GUN_TYPE_BD_1 = require("../Gun/GUN_TYPE_BD");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleChangeBD = function(_super) {
      __extends(HandleChangeBD, _super);
      function HandleChangeBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleChangeBD.prototype.handleResponse = function(SFSObject) {
        var newGunId = SFSObject.getInt("GunType");
        var idP = SFSObject.getInt(PlayerPP_1.PlayerPP.AccountId);
        var player = this.fishBD.playerMng.getPlayerById(idP);
        if (player) {
          if (player.isMe && newGunId == GUN_TYPE_BD_1.default.SET) {
            Windown_1.Windown.FishBongDem.fishBDView.toggleSungSet.isChecked = true;
            Windown_1.Windown.FishBongDem.fishBDView.toggleSungSet.checkMark.node.active = true;
          }
          player.changeGun(newGunId);
        }
      };
      return HandleChangeBD;
    }(IResponseBD_1.default);
    exports.default = HandleChangeBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "./IResponseBD": "IResponseBD"
  } ],
  HandleChangeMoneyGunFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91892zESKVC1Zw9IHn/hwd6", "HandleChangeMoneyGunFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleChangeMoneyGunFishBD = function(_super) {
      __extends(HandleChangeMoneyGunFishBD, _super);
      function HandleChangeMoneyGunFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleChangeMoneyGunFishBD.prototype.handleResponse = function(SFSObject) {
        cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
        var newGunId = SFSObject.getInt("IndexMoneyGun");
        var idP = SFSObject.getInt(PlayerPP_1.PlayerPP.AccountId);
        var player = this.fishBD.playerMng.getPlayerById(idP);
        player && player.changeIndexMoneyGun(newGunId);
      };
      return HandleChangeMoneyGunFishBD;
    }(IResponseBD_1.default);
    exports.default = HandleChangeMoneyGunFishBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleCreatFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f70d9ckTzRIpbG48YdVIifu", "HandleCreatFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var IResponseBD_1 = require("./IResponseBD");
    var HandleCreatFishBD = function(_super) {
      __extends(HandleCreatFishBD, _super);
      function HandleCreatFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleCreatFishBD.prototype.handleResponse = function(SFSObject) {
        this.fishBD.fishMng.addListFish(SFSObject.getSFSArray("listFish"));
      };
      return HandleCreatFishBD;
    }(IResponseBD_1.default);
    exports.default = HandleCreatFishBD;
    cc._RF.pop();
  }, {
    "./IResponseBD": "IResponseBD"
  } ],
  HandleCreatTrieuHoi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e292fRJ7R9FfpBe6dmbCt7W", "HandleCreatTrieuHoi");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var FishBDNormalView_1 = require("../Fish/FishBDNormalView");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleCreatTrieuHoi = function(_super) {
      __extends(HandleCreatTrieuHoi, _super);
      function HandleCreatTrieuHoi() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleCreatTrieuHoi.prototype.handleResponse = function(SFSObject) {
        var idP = SFSObject.getInt("id");
        var player = this.fishBD.playerMng.getPlayerById(idP);
        if (null == player) {
          this.fishBD.fishMng.addListFish(SFSObject.getSFSArray("listFish"));
          return;
        }
        var nodeTxt = Windown_1.Windown.FishBongDem.pool.getTxtTrieuHoi();
        nodeTxt.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        nodeTxt.setPosition(player.gunFishBd.pointInScreen);
        nodeTxt.scale = 3;
        nodeTxt.opacity = 0;
        nodeTxt.runAction(cc.sequence(cc.spawn(cc.fadeIn(.5).easing(cc.easeSineIn()), cc.scaleTo(.5, 1).easing(cc.easeSineIn())), cc.delayTime(3), cc.callFunc(function() {
          nodeTxt.destroy();
        })));
        var listFun = [];
        for (var i = 0, l = SFSObject.size(); i < l; i++) listFun.push(function(fish) {
          fish.setTimeEffectWating(2);
          var fishBDNormalView = fish.getViewNode().getComponent(FishBDNormalView_1.default);
          fishBDNormalView.aniStateMove.time += 2 * fishBDNormalView.aniStateMove.speed;
          fishBDNormalView.aniStateMove.sample();
          fishBDNormalView.node.scale = 0;
          fishBDNormalView.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            71 == fish.fishType ? Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().PhonixStart) : 70 == fish.fishType ? Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().fish70Start) : 72 == fish.fishType && Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().startFish72);
          }), cc.scaleTo(.5, 1)));
          var pos = fishBDNormalView.getPos();
          var nodeEffect = Windown_1.Windown.FishBongDem.pool.getEfTrieuHoi();
          nodeEffect.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
          nodeEffect.setPosition(pos);
          nodeEffect.zIndex = 0;
          var spine = nodeEffect.getComponentInChildren(sp.Skeleton);
          spine.setAnimation(0, "open", false);
          spine.setCompleteListener(function() {
            Windown_1.Windown.FishBongDem.pool.putEfTrieuHoi(nodeEffect);
            spine.setCompleteListener(null);
          });
        });
        Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().RuaXoay);
        this.fishBD.fishMng.addListFish(SFSObject.getSFSArray("listFish"), listFun);
      };
      return HandleCreatTrieuHoi;
    }(IResponseBD_1.default);
    exports.default = HandleCreatTrieuHoi;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../Fish/FishBDNormalView": "FishBDNormalView",
    "./IResponseBD": "IResponseBD"
  } ],
  HandleFishColisionBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d91f3LY9r1PEIePuD8AVu0K", "HandleFishColisionBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var ColisionBoomNguyenTu_1 = require("../DeadBevhavior/ColisionBoomNguyenTu");
    var ColisionCrab_1 = require("../DeadBevhavior/ColisionCrab");
    var ColisionCrabBoom_1 = require("../DeadBevhavior/ColisionCrabBoom");
    var ColisionCrabEndMuiKhoan_1 = require("../DeadBevhavior/ColisionCrabEndMuiKhoan");
    var ColisionCrabGunFire_1 = require("../DeadBevhavior/ColisionCrabGunFire");
    var ColisionCrabMuiKhoan_1 = require("../DeadBevhavior/ColisionCrabMuiKhoan");
    var ColisionCrabSongAm_1 = require("../DeadBevhavior/ColisionCrabSongAm");
    var ColisionDinhBa_1 = require("../DeadBevhavior/ColisionDinhBa");
    var ColisionFish74_1 = require("../DeadBevhavior/ColisionFish74");
    var ColisionHaiThanDead_1 = require("../DeadBevhavior/ColisionHaiThanDead");
    var ColisionItemHaiThan_1 = require("../DeadBevhavior/ColisionItemHaiThan");
    var ColisionLocXoay_1 = require("../DeadBevhavior/ColisionLocXoay");
    var ColisionMatThan_1 = require("../DeadBevhavior/ColisionMatThan");
    var ColisionNormal_1 = require("../DeadBevhavior/ColisionNormal");
    var FISH_DEAD_BD_TYPE_1 = require("../Fish/DeadEffect/FISH_DEAD_BD_TYPE");
    var GUN_TYPE_BD_1 = require("../Gun/GUN_TYPE_BD");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleFishColisionBD = function(_super) {
      __extends(HandleFishColisionBD, _super);
      function HandleFishColisionBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleFishColisionBD.prototype.handleResponse = function(SFSObject) {
        return __awaiter(this, void 0, Promise, function() {
          var fishDeadType, byDeadType, cp, idP, player, player, player, player;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              fishDeadType = SFSObject.getInt("deadType");
              byDeadType = SFSObject.getInt("bfdt");
              cp = null;
              idP = SFSObject.getInt(PlayerPP_1.PlayerPP.AccountId);
              switch (byDeadType) {
               case FISH_DEAD_BD_TYPE_1.default.GUN_FIRE:
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(idP);
                player && player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.FIRE && (cp = new ColisionCrabGunFire_1.default(SFSObject));
                break;

               case FISH_DEAD_BD_TYPE_1.default.BOOM_NGUYEN_TU:
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(idP);
                player && (cp = new ColisionBoomNguyenTu_1.default(SFSObject));
                break;

               case FISH_DEAD_BD_TYPE_1.default.DINH_BA:
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(idP);
                player && (cp = new ColisionDinhBa_1.default(SFSObject));
                break;

               case FISH_DEAD_BD_TYPE_1.default.MAT_THAN:
                player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(idP);
                player && (cp = new ColisionMatThan_1.default(SFSObject));
              }
              if (!cp) return [ 3, 2 ];
              cp.excuted();
              if (!(byDeadType == FISH_DEAD_BD_TYPE_1.default.DINH_BA)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(2) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              cp = null;
              switch (fishDeadType) {
               case FISH_DEAD_BD_TYPE_1.default.NORMAL:
                cp = new ColisionNormal_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.LADE:
                cp = new ColisionCrab_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.BOOM:
                cp = new ColisionCrabBoom_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.SONG_AM:
                cp = new ColisionCrabSongAm_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.MUI_KHOAN:
                cp = new ColisionCrabMuiKhoan_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.END_MUI_KHOAN:
                cp = new ColisionCrabEndMuiKhoan_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.ITEM_HAI_THAN:
                cp = new ColisionItemHaiThan_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.HAI_THAN:
                cp = new ColisionHaiThanDead_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.LOC_XOAY:
                cp = new ColisionLocXoay_1.default(SFSObject);
                break;

               case FISH_DEAD_BD_TYPE_1.default.FISH_74:
                cp = new ColisionFish74_1.default(SFSObject);
              }
              cp && cp.excuted();
              return [ 2 ];
            }
          });
        });
      };
      return HandleFishColisionBD;
    }(IResponseBD_1.default);
    exports.default = HandleFishColisionBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "../DeadBevhavior/ColisionBoomNguyenTu": "ColisionBoomNguyenTu",
    "../DeadBevhavior/ColisionCrab": "ColisionCrab",
    "../DeadBevhavior/ColisionCrabBoom": "ColisionCrabBoom",
    "../DeadBevhavior/ColisionCrabEndMuiKhoan": "ColisionCrabEndMuiKhoan",
    "../DeadBevhavior/ColisionCrabGunFire": "ColisionCrabGunFire",
    "../DeadBevhavior/ColisionCrabMuiKhoan": "ColisionCrabMuiKhoan",
    "../DeadBevhavior/ColisionCrabSongAm": "ColisionCrabSongAm",
    "../DeadBevhavior/ColisionDinhBa": "ColisionDinhBa",
    "../DeadBevhavior/ColisionFish74": "ColisionFish74",
    "../DeadBevhavior/ColisionHaiThanDead": "ColisionHaiThanDead",
    "../DeadBevhavior/ColisionItemHaiThan": "ColisionItemHaiThan",
    "../DeadBevhavior/ColisionLocXoay": "ColisionLocXoay",
    "../DeadBevhavior/ColisionMatThan": "ColisionMatThan",
    "../DeadBevhavior/ColisionNormal": "ColisionNormal",
    "../Fish/DeadEffect/FISH_DEAD_BD_TYPE": "FISH_DEAD_BD_TYPE",
    "../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "./IResponseBD": "IResponseBD"
  } ],
  HandleGunAtackBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7ec3UrWzpFObRIsVRStYBr", "HandleGunAtackBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var GUN_TYPE_BD_1 = require("../Gun/GUN_TYPE_BD");
    var TypePlayerEffectBD_1 = require("../Player/Effect/TypePlayerEffectBD");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleGunAtackBD = function(_super) {
      __extends(HandleGunAtackBD, _super);
      function HandleGunAtackBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleGunAtackBD.prototype.handleResponse = function(packet) {
        var playerMoney = packet.getLong("AccountBalance");
        var player = Windown_1.Windown.FishBongDem.playerMng.getPlayerById(packet.getInt(PlayerPP_1.PlayerPP.AccountId));
        var moneyGun = packet.getInt("moneyGun");
        if (null == player) return;
        player.subGold(moneyGun, playerMoney);
        var pointTarget = cc.v2();
        pointTarget.x = packet.get("PositionX");
        pointTarget.y = packet.get("PositionY");
        var fishIdTarget = packet.get("FishIdTarget");
        Windown_1.Windown.FishBongDem.convertVec(pointTarget);
        if (player.isMe) Windown_1.Windown.FishBongDem.removeBulletSend(packet.get("BulletId")); else {
          if (player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.NORMAL || player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET) {
            player.rotateGun(pointTarget);
            player.atack();
          }
          if (-1 != fishIdTarget) {
            var effect = player.getPlayerEffect(TypePlayerEffectBD_1.default.TARGET);
            if (effect) {
              var fish = this.fishBD.fishMng.getFishById(fishIdTarget);
              fish && effect.targetFish(fish, fish.getListColider()[packet.get("IC")]);
            }
            player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET && player.gunFishBd.stateGun.setFishIdTarget(fishIdTarget, packet.get("IC"));
          }
        }
      };
      return HandleGunAtackBD;
    }(IResponseBD_1.default);
    exports.default = HandleGunAtackBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "../Player/Effect/TypePlayerEffectBD": "TypePlayerEffectBD",
    "./IResponseBD": "IResponseBD"
  } ],
  HandleIceAllFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53f43D/EjJIv4oePzSFGCAt", "HandleIceAllFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleIceAllFishBD = function(_super) {
      __extends(HandleIceAllFishBD, _super);
      function HandleIceAllFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleIceAllFishBD.prototype.handleResponse = function(SFSObject) {
        var time = SFSObject.getFloat("Duration") - Windown_1.Windown.LagValue;
        this.fishBD.getSound().playEffect(this.fishBD.getSound().iceAllFish);
        this.fishBD.fishMng.iceAllFish(time);
        this.fishBD.fishBDView.showIce(time);
        cc.log("ice all fish");
      };
      return HandleIceAllFishBD;
    }(IResponseBD_1.default);
    exports.default = HandleIceAllFishBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleInfoFishRoomBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27dceegES9ApbUEjM5xFHWJ", "HandleInfoFishRoomBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("./CODE_EVT");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleInfoFishRoomBD = function(_super) {
      __extends(HandleInfoFishRoomBD, _super);
      function HandleInfoFishRoomBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleInfoFishRoomBD.prototype.handleResponse = function(SFSObject) {
        var sfsArrPlayer = SFSObject.getSFSArray("listPlayer");
        var ischeck = false;
        for (var i = 0, l = sfsArrPlayer.size(); i < l; i++) {
          var sfsObj = sfsArrPlayer.getSFSObject(i);
          sfsObj.getInt("id") == Windown_1.Windown.User.userId && (ischeck = true);
        }
        if (!ischeck) {
          this.fishBD.sendRequest(CODE_EVT_1.default.InfoFishRoomBD, null);
          return;
        }
        if (!this.fishBD.fishBDView.node) return;
        Windown_1.Windown.FishBongDem.listBulletSend.length = 0;
        this.fishBD.fishMng.initGame();
        var listMoney = SFSObject.getSFSArray("listMoneyGun");
        this.fishBD.listGunSpecialConfig = SFSObject.getSFSArray("listGunSpecilConfig");
        this.fishBD.listGunMoney = [];
        for (var i = 0, l = listMoney.size(); i < l; i++) this.fishBD.listGunMoney.push(listMoney.getInt(i));
        this.fishBD.fishBDView.initItemBoomDrop();
        this.fishBD.playerMng.initListPlayer(sfsArrPlayer);
        this.fishBD.fishMng.addListFish(SFSObject.getSFSArray("listFish"));
        this.fishBD.fishMng.setFishConfig(SFSObject.getSFSArray("listFishConfig"));
        if (Windown_1.Windown.BotController) {
          cc.log("start bot ne");
          Windown_1.Windown.FishBongDem.fishBDView.startBot();
        }
        Windown_1.Windown.FishBongDem.getSound().reset();
      };
      return HandleInfoFishRoomBD;
    }(IResponseBD_1.default);
    exports.default = HandleInfoFishRoomBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./CODE_EVT": "CODE_EVT",
    "./IResponseBD": "IResponseBD"
  } ],
  HandleNotFindFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b71fiYDtRJIbhoQGNickHG", "HandleNotFindFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var IResponseBD_1 = require("./IResponseBD");
    var HandleNotFindFishBD = function(_super) {
      __extends(HandleNotFindFishBD, _super);
      function HandleNotFindFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleNotFindFishBD.prototype.handleResponse = function(SFSObject) {
        var fish = this.fishBD.fishMng.getFishById(SFSObject.getInt("FishId"));
        if (fish) {
          cc.log("fish bi remove type : " + fish.fishType);
          cc.log("fish bi remove id : " + fish.fishId);
          fish.removeFishFromList();
          fish.destroy();
        }
      };
      return HandleNotFindFishBD;
    }(IResponseBD_1.default);
    exports.default = HandleNotFindFishBD;
    cc._RF.pop();
  }, {
    "./IResponseBD": "IResponseBD"
  } ],
  HandleOtherJoinRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e62679SqWpHkKAsLF/s3QPK", "HandleOtherJoinRoom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var IResponseBD_1 = require("./IResponseBD");
    var HandleOtherJoinRoom = function(_super) {
      __extends(HandleOtherJoinRoom, _super);
      function HandleOtherJoinRoom() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleOtherJoinRoom.prototype.handleResponse = function(SFSObject) {
        if (this.fishBD.playerMng) {
          cc.log("co thang vao room");
          this.fishBD.playerMng.addPlayer(SFSObject);
        }
      };
      return HandleOtherJoinRoom;
    }(IResponseBD_1.default);
    exports.default = HandleOtherJoinRoom;
    cc._RF.pop();
  }, {
    "./IResponseBD": "IResponseBD"
  } ],
  HandlePlayerUsingItemFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e260TM9QJOTZWC/a4NwlKP", "HandlePlayerUsingItemFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var IResponseBD_1 = require("./IResponseBD");
    var HandlePlayerUsingItemFishBD = function(_super) {
      __extends(HandlePlayerUsingItemFishBD, _super);
      function HandlePlayerUsingItemFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandlePlayerUsingItemFishBD.prototype.handleResponse = function(SFSObject) {
        var idPlayer = SFSObject.getInt("id");
        var objItem = SFSObject.getSFSArray("ItemFish");
        var player = this.fishBD.playerMng.getPlayerById(idPlayer);
        if (null == player) return;
        player.updateItem(SFSObject);
        if (player.isMe) {
          Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
          this.fishBD.fishBDView.setItemInfo(objItem);
        }
      };
      return HandlePlayerUsingItemFishBD;
    }(IResponseBD_1.default);
    exports.default = HandlePlayerUsingItemFishBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleRemoveAllListFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d472dNGu/1Dt60/vc4MgKrx", "HandleRemoveAllListFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleRemoveAllListFishBD = function(_super) {
      __extends(HandleRemoveAllListFishBD, _super);
      function HandleRemoveAllListFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleRemoveAllListFishBD.prototype.handleResponse = function(packet) {
        var SFSArray = packet.getSFSArray("listId");
        var type = packet.getUtfString("typeNext");
        if ("caTran" == type) {
          this.fishBD.fishBDView.comingCaTran();
          this.fishBD.getSound().playEffect(this.fishBD.getSound().nextTurn);
        }
        this.fishBD.fishBDView.showNextTurn();
        var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
        var iractor = mapFish.values();
        var result = iractor.next();
        while (!result.done) {
          var value = result.value;
          result = iractor.next();
          value.removeFishFromList();
          value.playAniNewTurn();
        }
      };
      return HandleRemoveAllListFishBD;
    }(IResponseBD_1.default);
    exports.default = HandleRemoveAllListFishBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleRemoveListFishBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a64aey57yVLo568Qn21p/u8", "HandleRemoveListFishBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var IResponseBD_1 = require("./IResponseBD");
    var HandleRemoveListFishBD = function(_super) {
      __extends(HandleRemoveListFishBD, _super);
      function HandleRemoveListFishBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleRemoveListFishBD.prototype.handleResponse = function(packet) {
        var SFSArray = packet.getSFSArray("listId");
        var type = packet.getUtfString("typeNext");
        if ("caTran" == type) {
          this.fishBD.fishBDView.comingCaTran();
          this.fishBD.getSound().playEffect(this.fishBD.getSound().nextTurn);
        }
        this.fishBD.fishBDView.showNextTurn();
        for (var i = 0, l = SFSArray.size(); i < l; i++) {
          var idF = SFSArray.getInt(i);
          var fish = this.fishBD.fishMng.getFishById(idF);
          if (fish) {
            fish.removeFishFromList();
            fish.playAniNewTurn();
          }
        }
      };
      return HandleRemoveListFishBD;
    }(IResponseBD_1.default);
    exports.default = HandleRemoveListFishBD;
    cc._RF.pop();
  }, {
    "./IResponseBD": "IResponseBD"
  } ],
  HandleRotateGunBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8794c94xBhMyZp8CtsjlX5y", "HandleRotateGunBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleRotateGunBD = function(_super) {
      __extends(HandleRotateGunBD, _super);
      function HandleRotateGunBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleRotateGunBD.prototype.handleResponse = function(SFSObject) {
        var isA = SFSObject.getBool("iA");
        var idP = SFSObject.getInt(PlayerPP_1.PlayerPP.AccountId);
        var player = this.fishBD.playerMng.getPlayerById(idP);
        if (player && !player.isMe) if (isA) {
          cc.log("isA1: " + isA);
          var pointTarget = cc.v2();
          pointTarget.x = SFSObject.get("x");
          pointTarget.y = SFSObject.get("y");
          Windown_1.Windown.FishBongDem.convertVec(pointTarget);
          player.rotateGun(pointTarget);
        } else {
          cc.log("isA2: " + isA);
          player.cancleGun();
        }
      };
      return HandleRotateGunBD;
    }(IResponseBD_1.default);
    exports.default = HandleRotateGunBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleSetTimeFishEffectBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdb5dNpv1dEyaNDCijEE2S0", "HandleSetTimeFishEffectBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../Scritps/Windown");
    var EffectSet_1 = require("../Fish/EffectGun/EffectSet");
    var FishStateBD_1 = require("../Fish/FishStateBD");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleSetTimeFishEffectBD = function(_super) {
      __extends(HandleSetTimeFishEffectBD, _super);
      function HandleSetTimeFishEffectBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleSetTimeFishEffectBD.prototype.handleResponse = function(packet) {
        var listFish = packet.getSFSArray("listFishTime");
        for (var i = 0, l = listFish.size(); i < l; i++) {
          var SFSObject = listFish.getSFSObject(i);
          var v = SFSObject.getInt("IdFish");
          var state = SFSObject.getInt("State");
          var duration = SFSObject.getFloat("Time") - Windown_1.Windown.LagValue;
          var fish = this.fishBD.fishMng.getFishById(v);
          if (!fish) return;
          var nameEffect = SFSObject.get("Name");
          if (duration <= 0) return;
          state == FishStateBD_1.default.ICE ? fish.setTimeEffectIce(duration) : state == FishStateBD_1.default.WATING && fish.setTimeEffectWating(duration);
          var cp = this.getStateByName(nameEffect);
          cp.setFish(fish, duration).execute();
        }
      };
      HandleSetTimeFishEffectBD.prototype.getStateByName = function(name) {
        var cp = null;
        switch (name) {
         case "GunSet":
          cp = Windown_1.Windown.FishBongDem.pool.getEfGiatSet().getComponent(EffectSet_1.default);
        }
        return cp;
      };
      return HandleSetTimeFishEffectBD;
    }(IResponseBD_1.default);
    exports.default = HandleSetTimeFishEffectBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../Fish/EffectGun/EffectSet": "EffectSet",
    "../Fish/FishStateBD": "FishStateBD",
    "./IResponseBD": "IResponseBD"
  } ],
  HandleTakeItemFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cf3fGRrmdKNLB5qB8FMDod", "HandleTakeItemFish");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var Windown_1 = require("../../../../Scritps/Windown");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleTakeItemFish = function(_super) {
      __extends(HandleTakeItemFish, _super);
      function HandleTakeItemFish() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleTakeItemFish.prototype.handleResponse = function(SFSObject) {
        var isA = SFSObject.getBool("iA");
        var idP = SFSObject.getInt(PlayerPP_1.PlayerPP.AccountId);
        var player = this.fishBD.playerMng.getPlayerById(idP);
        if (player && !player.isMe) if (isA) {
          cc.log("isA1: " + isA);
          var pointTarget = cc.v2();
          pointTarget.x = SFSObject.get("x");
          pointTarget.y = SFSObject.get("y");
          Windown_1.Windown.FishBongDem.convertVec(pointTarget);
          player.rotateGun(pointTarget);
        } else {
          cc.log("isA2: " + isA);
          player.cancleGun();
        }
      };
      return HandleTakeItemFish;
    }(IResponseBD_1.default);
    exports.default = HandleTakeItemFish;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "../../../../Scritps/Windown": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleTimeOutPlayBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53fbdXruVFChqMxrIZMcDgD", "HandleTimeOutPlayBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerPP_1 = require("../../../../Scritps/DefineTs/PlayerPP");
    var IResponseBD_1 = require("./IResponseBD");
    var HandleTimeOutPlayBD = function(_super) {
      __extends(HandleTimeOutPlayBD, _super);
      function HandleTimeOutPlayBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleTimeOutPlayBD.prototype.handleResponse = function(SFSObject) {
        this.fishBD.fishBDView.timeOut.show(SFSObject.getUtfString(PlayerPP_1.PlayerPP.MESSAGE));
      };
      return HandleTimeOutPlayBD;
    }(IResponseBD_1.default);
    exports.default = HandleTimeOutPlayBD;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/PlayerPP": void 0,
    "./IResponseBD": "IResponseBD"
  } ],
  HandleUsingItemDrag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1610otswFMc6dBN4aX75Yk", "HandleUsingItemDrag");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var IResponseBD_1 = require("./IResponseBD");
    var HandleUsingItemDrag = function(_super) {
      __extends(HandleUsingItemDrag, _super);
      function HandleUsingItemDrag() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandleUsingItemDrag.prototype.handleResponse = function(SFSObject) {
        var type = SFSObject.get("Type");
        var playerID = SFSObject.get("AccountId");
        var player = this.fishBD.playerMng.getPlayerById(playerID);
        var info = SFSObject.getSFSObject("info");
        var id = SFSObject.getLong("Id");
        player && player.usingItemDrag(id, info);
      };
      return HandleUsingItemDrag;
    }(IResponseBD_1.default);
    exports.default = HandleUsingItemDrag;
    cc._RF.pop();
  }, {
    "./IResponseBD": "IResponseBD"
  } ],
  HelpBongDem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e06c4OLL9KxbiVqkZUbQeL", "HelpBongDem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var HelpCaMap = function(_super) {
      __extends(HelpCaMap, _super);
      function HelpCaMap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.page = null;
        _this.lbTitle = null;
        return _this;
      }
      HelpCaMap.prototype.onLoad = function() {};
      HelpCaMap.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      HelpCaMap.prototype.onClickChangePage = function(event, data) {
        var current = this.page.getCurrentPageIndex();
        "next" == data ? current++ : current--;
        this.checkCurrentIndex(current);
        this.page.scrollToPage(current, .3);
      };
      HelpCaMap.prototype.checkCurrentIndex = function(current) {
        switch (current) {
         case 0:
          this.lbTitle.string = "H\u1ec6 S\u1ed0 C\xc1";
          break;

         case 1:
         case 2:
          this.lbTitle.string = "C\xc1 \u0110\u1eb6C BI\u1ec6T";
          break;

         case 3:
         case 4:
          this.lbTitle.string = "BOSS";
          break;

         case 5:
         case 6:
          this.lbTitle.string = "H\u1ea2I TH\u1ea6N";
          break;

         case 5:
          this.lbTitle.string = "";
        }
        if (current == this.page.getPages().length) cc.find("next", this.node).getComponent(cc.Button).interactable = false; else if (0 == current) cc.find("pre", this.node).getComponent(cc.Button).interactable = false; else {
          cc.find("next", this.node).getComponent(cc.Button).interactable = true;
          cc.find("pre", this.node).getComponent(cc.Button).interactable = true;
        }
      };
      HelpCaMap.prototype.show = function() {
        this.checkCurrentIndex(0);
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      HelpCaMap.prototype.onDestroy = function() {};
      __decorate([ property(cc.PageView) ], HelpCaMap.prototype, "page", void 0);
      __decorate([ property(cc.Label) ], HelpCaMap.prototype, "lbTitle", void 0);
      HelpCaMap = __decorate([ ccclass ], HelpCaMap);
      return HelpCaMap;
    }(cc.Component);
    exports.default = HelpCaMap;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  IResponseBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c97c5uK8hxKrpTInGcdHNKe", "IResponseBD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IResponseBD = function() {
      function IResponseBD() {
        this.fishBD = null;
      }
      IResponseBD.prototype.setBD = function(fishBD) {
        this.fishBD = fishBD;
      };
      IResponseBD.prototype.send = function(requestCode, SFSObject) {
        this.fishBD.sendRequest(requestCode, SFSObject);
      };
      return IResponseBD;
    }();
    exports.default = IResponseBD;
    cc._RF.pop();
  }, {} ],
  ItemBongDem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7fabnoM4lOQaUO1S+h4QYO", "ItemBongDem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemCaMap = function(_super) {
      __extends(ItemCaMap, _super);
      function ItemCaMap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.totalAmount = 0;
        _this.timeCd = 0;
        _this.idItem = 0;
        _this.lbAmount = null;
        _this.lbName = null;
        _this.spMask = null;
        return _this;
      }
      ItemCaMap.prototype.initItem = function(info) {
        this.totalAmount = info.Amount;
        this.idItem = info.ItemId;
        this.timeCd = info.TimeCD;
        this.lbName.string = info.ItemName;
      };
      ItemCaMap.prototype.setLabel = function() {
        this.lbAmount.string = this.totalAmount.toString();
      };
      ItemCaMap.prototype.updateAmount = function(amount) {
        this.totalAmount += amount;
        this.setLabel();
      };
      ItemCaMap.prototype.effectTakeItem = function() {
        this.setLabel();
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.15, {
          scale: 1.3
        }).to(.15, {
          scale: 1
        }).start();
      };
      ItemCaMap.prototype.onClick = function() {
        if (1 == this.idItem && Windown_1.Windown.FishBongDem.fishBDView.nodeWave.active) return;
        var msg = ConectManager_1.ConectManager.getIns().getSFSObj();
        msg.putInt("ItemId", this.idItem);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.PlayerUsingItemFishBD, msg);
      };
      ItemCaMap.prototype.update = function(dt) {
        if (null == Windown_1.Windown.FishBongDem || null == Windown_1.Windown.FishBongDem.me) return;
        if (1 == this.idItem) {
          var timeIce = Windown_1.Windown.FishBongDem.me.timeItemIce;
          if (timeIce > 0) {
            this.spMask.node.active = true;
            this.spMask.fillRange = timeIce / this.timeCd;
          } else this.spMask.node.active = false;
        } else if (2 == this.idItem) {
          var timeSpeed = Windown_1.Windown.FishBongDem.me.timeItemSpeed;
          if (timeSpeed > 0) {
            this.spMask.node.active = true;
            this.spMask.fillRange = timeSpeed / this.timeCd;
          } else this.spMask.node.active = false;
        } else if (3 == this.idItem) {
          var timeTarget = Windown_1.Windown.FishBongDem.me.timeItemTarget;
          if (timeTarget > 0) {
            this.spMask.node.active = true;
            this.spMask.fillRange = timeTarget / this.timeCd;
          } else this.spMask.node.active = false;
        } else if (4 == this.idItem) {
          var timeTrieuHoi = Windown_1.Windown.FishBongDem.me.timeItemTrieuHoi;
          if (timeTrieuHoi > 0) {
            this.spMask.node.active = true;
            this.spMask.fillRange = timeTrieuHoi / this.timeCd;
          } else this.spMask.node.active = false;
        }
      };
      __decorate([ property(cc.Integer) ], ItemCaMap.prototype, "idItem", void 0);
      __decorate([ property(cc.Label) ], ItemCaMap.prototype, "lbAmount", void 0);
      __decorate([ property(cc.Label) ], ItemCaMap.prototype, "lbName", void 0);
      __decorate([ property(cc.Sprite) ], ItemCaMap.prototype, "spMask", void 0);
      ItemCaMap = __decorate([ ccclass ], ItemCaMap);
      return ItemCaMap;
    }(cc.Component);
    exports.default = ItemCaMap;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT"
  } ],
  ItemBoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "239e2d1CSxDJL+SOfKiHLPa", "ItemBoom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lastPos = cc.Vec2.ZERO;
        _this.posTarGet2 = null;
        return _this;
      }
      NewClass.prototype.moveBoom = function(posTarget1, delayTime, posTarget2) {
        var _this = this;
        return new Promise(function(r, j) {
          _this.posTarGet2 = posTarget2;
          _this.node.runAction(cc.sequence(cc.delayTime(delayTime), cc.bezierTo(2.5, [ cc.v2(_this.node.x + Windown_1.Windown.RandomNumber(-300, 300), -200), cc.v2(posTarget1.x, 100), posTarget1 ]), cc.callFunc(function() {
            _this.node.opacity = 0;
            r(null);
          })));
        });
      };
      NewClass.prototype.moveNo = function(timeDelay, dropBoom) {
        var _this = this;
        this.node.stopAllActions();
        0 == this.posTarGet2.x ? this.node.setPosition(0, 600) : this.node.setPosition(Windown_1.Windown.RandomNumber(-300, 300) + this.posTarGet2.x, 600);
        Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().wind);
        this.node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.fadeIn(0), cc.moveTo(Windown_1.Windown.RandomNumber(10, 20) / 30, this.posTarGet2), cc.callFunc(function() {
          dropBoom.onNo(_this.node);
        })));
      };
      NewClass.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        var dir = cc.Vec2.subtract(new cc.Vec2(), this.node.getPosition(), this.lastPos);
        var angle = 180 * Math.atan2(dir.x, dir.y) / Math.PI;
        this.node.angle = -angle;
        this.lastPos = this.node.getPosition();
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0
  } ],
  ItemLichSuJackpot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70f97aWnQNBoZ6F44N8jUP3", "ItemLichSuJackpot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
        _this.lbDate = null;
        _this.lbNickNam = null;
        _this.lbGold = null;
        return _this;
      }
      NewClass.prototype.initItem = function(SFSObject) {
        this.lbDate.string = Windown_1.Windown.formatDate(new Date(SFSObject.getLong("date")), "dd/MM HH:mm:ss");
        this.lbNickNam.string = SFSObject.getUtfString("nickname");
        this.lbGold.string = Windown_1.Windown.formatNumber(SFSObject.get("moneyTotal"));
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbDate", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbNickNam", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbGold", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  ItemNhiemVuFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8bffpK/gxGk7JP0B7jCYDN", "ItemNhiemVuFish");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
        _this.lbName = null;
        _this.imgProgress = null;
        _this.lbProgress = null;
        _this.idQuest = -1;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.NhiemVuConTroller.itemQuestViewFish = this;
      };
      NewClass.prototype.onEnable = function() {};
      NewClass.prototype.refresh = function() {};
      NewClass.prototype.onDisable = function() {};
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.NhiemVuConTroller.itemQuestViewFish = null;
      };
      NewClass.prototype.updateItem = function(SFSObject) {
        var id = SFSObject.getInt("type");
        if (id != this.idQuest) return;
        var curent = SFSObject.getInt("current");
        var total = SFSObject.getInt("total");
        curent > total && (curent = total);
        this.lbProgress.string = curent + "/" + total;
        this.imgProgress.fillRange = curent / total;
        this.lbProgress.node.stopAllActions();
        this.lbProgress.node.scale = 1.2;
        this.lbProgress.node.runAction(cc.scaleTo(.3, 1));
        curent == total && (this.lbProgress.string = TextDefine_1.TextDefine.ClickDeNhan);
      };
      NewClass.prototype.initItem = function(SFSObject) {
        this.lbName.string = SFSObject.getUtfString("name") + " <color=#FFFF00>(" + Windown_1.Windown.formatNumber(SFSObject.getInt("moneyRevice")) + ")</color>";
        var curent = SFSObject.getInt("current");
        var total = SFSObject.getInt("total");
        this.lbProgress.string = curent + "/" + total;
        this.imgProgress.fillRange = curent / total;
        this.idQuest = SFSObject.getInt("type");
        curent > total && (curent = total);
        curent == total && (this.lbProgress.string = TextDefine_1.TextDefine.ClickDeNhan);
      };
      NewClass.prototype.onClickItemNhiemVu = function() {
        Windown_1.Windown.UIManager.showNhiemVu();
      };
      __decorate([ property(cc.RichText) ], NewClass.prototype, "lbName", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "imgProgress", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbProgress", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  LichSuJackpot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51defQ02eJCJaQPEiGGJbBX", "LichSuJackpot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PageData_1 = require("../../../Scritps/Popup/PageData/PageData");
    var Windown_1 = require("../../../Scritps/Windown");
    var ItemLichSuJackpot_1 = require("./ItemLichSuJackpot");
    var CODE_EVT_1 = require("./Network/CODE_EVT");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LichSuJackpot = function(_super) {
      __extends(LichSuJackpot, _super);
      function LichSuJackpot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageDate = null;
        _this.parentType = null;
        _this.listData = null;
        _this.currentTye = -1;
        _this.curentRoom = 1;
        _this.maxRow = 11;
        return _this;
      }
      LichSuJackpot.prototype.onLoad = function() {
        Windown_1.Windown.LichSuGiaoDich = this;
      };
      LichSuJackpot.prototype.onDestroy = function() {
        Windown_1.Windown.LichSuGiaoDich = null;
      };
      LichSuJackpot.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
        Windown_1.Windown.UIManager.showLoading();
        this.reset();
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.GetLogJackpot, null);
      };
      LichSuJackpot.prototype.response = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        cc.log("data: " + Windown_1.Windown.SFSObjToJson(SFSObject));
        this.initWithListData(SFSObject.getSFSArray("data"));
        Windown_1.Windown.UIManager.hideLoading();
      };
      LichSuJackpot.prototype.initWithListData = function(listData) {
        listData._dataHolder.reverse();
        var lengthRows = listData.size();
        var totalPage = parseInt(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.listData = listData;
        this.onChangePage(1);
      };
      LichSuJackpot.prototype.onChangePage = function(index) {
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
            node.getComponent(ItemLichSuJackpot_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LichSuJackpot.prototype.onClickActiveType = function() {
        this.parentType.active = !this.parentType.active;
      };
      LichSuJackpot.prototype.resetContent = function() {
        var child = this.pageDate.content.children;
        for (var i = 0, l = child.length; i < l; i++) child[i].active = false;
      };
      LichSuJackpot.prototype.reset = function() {
        this.pageDate.setTotalPage(1);
        this.pageDate.reset();
        this.resetContent();
      };
      LichSuJackpot.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      __decorate([ property(PageData_1.default) ], LichSuJackpot.prototype, "pageDate", void 0);
      __decorate([ property(cc.Node) ], LichSuJackpot.prototype, "parentType", void 0);
      LichSuJackpot = __decorate([ ccclass ], LichSuJackpot);
      return LichSuJackpot;
    }(cc.Component);
    exports.default = LichSuJackpot;
    cc._RF.pop();
  }, {
    "../../../Scritps/Popup/PageData/PageData": void 0,
    "../../../Scritps/Windown": void 0,
    "./ItemLichSuJackpot": "ItemLichSuJackpot",
    "./Network/CODE_EVT": "CODE_EVT"
  } ],
  MatThan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2a985N1XFLfrnAg4UxzIfB", "MatThan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BulletMatThan_1 = require("../Bullet/BulletMatThan");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBullet = null;
        _this.lbNickName = null;
        _this.panelPoint = null;
        _this.poolBullet = new cc.NodePool(BulletMatThan_1.default);
        _this.fishTarget = null;
        _this.player = null;
        _this.distanceMax = 400;
        _this.currentColider = null;
        _this.curentPosColider = cc.v2();
        _this.listBullet = [];
        _this.isRun = false;
        _this.crTimeDelay = 0;
        _this.isSendTargetFish = false;
        _this.moneyCurrent = 0;
        _this.moneyMax = 0;
        _this.mutilLeft = 0;
        _this.idItemDrag = 0;
        _this.moneyGun = 0;
        _this.isEnd = false;
        return _this;
      }
      NewClass.prototype.start = function() {
        cc.systemEvent.on(CODE_EVT_1.default.MatThanAtack, this.onAtack, this);
        cc.systemEvent.on(CODE_EVT_1.default.RemoveMatThan, this.end, this);
        this.poolBullet.put(this.nodeBullet);
      };
      NewClass.prototype.init = function(player, moneyMax, moneyCurrent, idItemDrag, moneyGun) {
        return __awaiter(this, void 0, void 0, function() {
          var sfsObj, posLocXay, nodeLocXoay;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.player = player;
              this.lbNickName.string = this.player.namePlayer.length > 6 ? this.player.namePlayer.substring(0, 3) + ".." + this.player.namePlayer.substring(this.player.namePlayer.length - 3, this.player.namePlayer.length) : this.player.namePlayer;
              this.moneyMax = moneyMax;
              this.idItemDrag = idItemDrag;
              this.panelPoint.init(this.player, this.idItemDrag, TypeItemDragBD_1.default.MAT_THAN);
              this.panelPoint.addMoney(moneyCurrent);
              this.moneyGun = moneyGun;
              sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("Type", TypeItemDragBD_1.default.MAT_THAN);
              sfsObj.putLong("Id", idItemDrag);
              Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
              this.isSendTargetFish = true;
              this.node.scale = 0;
              posLocXay = this.player.getPosInVew().subSelf(cc.v2(this.player.playerSiting % 2 == 0 ? 100 : -100, this.player.playerSiting < 3 ? -50 : 50));
              this.node.setPosition(posLocXay);
              nodeLocXoay = Windown_1.Windown.FishBongDem.pool.getLocXoay();
              nodeLocXoay.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
              nodeLocXoay.zIndex = cc.macro.MIN_ZINDEX;
              nodeLocXoay.setPosition(posLocXay);
              nodeLocXoay.scale = 0;
              nodeLocXoay.runAction(cc.scaleTo(.5, 1.5));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1) ];

             case 1:
              _a.sent();
              this.node.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.5) ];

             case 2:
              _a.sent();
              this.isSendTargetFish = false;
              nodeLocXoay.runAction(cc.scaleTo(.3, 0));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.3) ];

             case 3:
              _a.sent();
              Windown_1.Windown.FishBongDem.pool.putLocXoay(nodeLocXoay);
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.onAtack = function(SFSObject) {
        cc.log("ontack ve");
        var idItemDrag = SFSObject.get("iid");
        if (idItemDrag != this.idItemDrag) return;
        var idFish = SFSObject.get("idF");
        var indexColider = SFSObject.get("IC");
        var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(idFish);
        if (fish) {
          this.fishTarget = fish;
          this.currentColider = fish.getListColider()[indexColider];
        }
        this.isSendTargetFish = false;
      };
      NewClass.prototype.onChangeTarget = function(SFSObject) {
        var idFish = SFSObject.get("idF");
        var fish = Windown_1.Windown.FishBongDem.fishMng.getFishById(idFish);
        fish && (this.fishTarget = fish);
      };
      NewClass.prototype.getBullet = function() {
        var node = null;
        node = this.poolBullet.size() > 0 ? this.poolBullet.get() : cc.instantiate(this.nodeBullet);
        node.active = true;
        return node;
      };
      NewClass.prototype.putBullet = function(cp) {
        this.node ? this.poolBullet.put(cp.node) : cp.node.destroy();
      };
      NewClass.prototype.removeBullet = function(cp) {
        if (this.node) {
          var index = this.listBullet.indexOf(cp);
          index > -1 && this.listBullet.splice(index, 1);
        }
      };
      NewClass.prototype.end = function(SFSObject) {
        return __awaiter(this, void 0, void 0, function() {
          var idItemDrag, posLocXay, nodeLocXoay;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              idItemDrag = SFSObject.get("iid");
              if (idItemDrag != this.idItemDrag) return [ 2 ];
              if (this.isEnd) return [ 2 ];
              this.isEnd = true;
              this.panelPoint.end();
              this.offTarget();
              posLocXay = this.player.getPosInVew().subSelf(cc.v2(this.player.playerSiting % 2 == 0 ? 100 : -100, this.player.playerSiting < 3 ? -50 : 50));
              nodeLocXoay = Windown_1.Windown.FishBongDem.pool.getLocXoay();
              nodeLocXoay.parent = Windown_1.Windown.FishBongDem.fishBDView.parentFish;
              nodeLocXoay.zIndex = cc.macro.MIN_ZINDEX;
              nodeLocXoay.setPosition(posLocXay);
              nodeLocXoay.scale = 0;
              nodeLocXoay.runAction(cc.scaleTo(.5, 1.5));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(1) ];

             case 1:
              _a.sent();
              this.node.runAction(cc.sequence(cc.moveTo(1, posLocXay).easing(cc.easeBackIn()), cc.delayTime(.5), cc.scaleTo(.5, 0)));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(2) ];

             case 2:
              _a.sent();
              nodeLocXoay.runAction(cc.scaleTo(.3, 0));
              return [ 4, Windown_1.Windown.FishBongDem.makeDelay(.3) ];

             case 3:
              _a.sent();
              Windown_1.Windown.FishBongDem.pool.putLocXoay(nodeLocXoay);
              this.node.destroy();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.emitNewMoney = function() {
        this.moneyCurrent = this.panelPoint.moneyCurrent;
        this.mutilLeft = (this.moneyMax - this.moneyCurrent) / this.moneyGun;
        if (this.mutilLeft < 6) {
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putUtfString("evt", CODE_EVT_1.default.RemoveMatThan);
          sfsObj.putLong("iid", this.idItemDrag);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.MatThanAtack, sfsObj);
        }
      };
      NewClass.prototype.onDestroy = function() {
        cc.systemEvent.targetOff(this);
        this.poolBullet.clear();
        this.listBullet.forEach(function(v) {
          v.node.destroy();
        });
        this.listBullet.length = 0;
      };
      NewClass.prototype.folowAndAtack = function(dt) {
        var _this = this;
        this.crTimeDelay += dt;
        if (this.fishTarget && this.crTimeDelay >= .15) {
          var nodeBullet = this.getBullet();
          nodeBullet.parent = this.node.parent;
          nodeBullet.setPosition(this.node.getPosition());
          var cp = nodeBullet.getComponent(BulletMatThan_1.default);
          cp.creat(this.fishTarget, this, this.player.isMe);
          this.crTimeDelay = 0;
          this.listBullet.push(cp);
          Windown_1.Windown.FishBongDem.getSound().playEffectNoStop(Windown_1.Windown.FishBongDem.getSound().matThanAtack, .5);
        }
        this.listBullet.forEach(function(v) {
          v.currentPosColider = _this.curentPosColider;
        });
      };
      NewClass.prototype.checkDistanceFish = function(dt) {
        var _this = this;
        if (this.fishTarget && this.fishTarget.getCanColision() && this.currentColider) {
          var posColider = this.fishTarget.checkColiderInScreen(this.currentColider);
          if (posColider) {
            this.curentPosColider = posColider;
            var mag = cc.Vec2.distance(this.node.getPosition(), posColider);
            if (mag > this.distanceMax && !this.isRun) {
              var x = cc.misc.clampf(posColider.x + Windown_1.Windown.RandomNumber(-50, 50), -400, 400);
              var y = cc.misc.clampf(posColider.y + Windown_1.Windown.RandomNumber(-50, 50), -200, 200);
              this.node.stopAllActions();
              this.node.runAction(cc.sequence(cc.moveTo(1, cc.v2(x, y)).easing(cc.easeQuarticActionOut()), cc.callFunc(function() {
                _this.isRun = false;
              })));
              this.isRun = true;
            }
          } else this.getNewColider();
        } else {
          this.curentPosColider = null;
          this.offTarget();
        }
      };
      NewClass.prototype.getNewColider = function() {
        var colider = this.fishTarget.getColiderInScreen(this.currentColider);
        colider ? this.currentColider = colider : this.offTarget();
      };
      NewClass.prototype.offTarget = function() {
        this.fishTarget = null;
        this.currentColider = null;
        this.curentPosColider = null;
        this.listBullet.forEach(function(v) {
          v.currentPosColider = null;
          v.update(0);
        });
        if (this.isRun && !this.isEnd) {
          this.node.stopAllActions();
          this.isRun = false;
        }
      };
      NewClass.prototype.autoChooseFish = function() {
        var _this = this;
        if (null == this.fishTarget && !this.isEnd) {
          this.offTarget();
          var listFish_1 = [];
          Windown_1.Windown.FishBongDem.fishMng.forEachListFish(function(value) {
            if (value.fishType != FISH_TYPE_1.default.SONG_AM && value.fishType != FISH_TYPE_1.default.GUN_FIRE && value.fishType != FISH_TYPE_1.default.LAZE && value.fishType != FISH_TYPE_1.default.BOOM && value.fishType != FISH_TYPE_1.default.MUI_KHOAN && value.fishType != FISH_TYPE_1.default.VONG_QUAY && value.fishType != FISH_TYPE_1.default.JACKPOT) {
              var coliderInS = value.getColiderInScreen();
              coliderInS && (_this.mutilLeft < 31 && value.fishType < 17, listFish_1.push(value));
            }
          });
          var fish = listFish_1[Windown_1.Windown.RandomNumber(0, listFish_1.length)];
          if (fish) {
            var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
            sfsObj.putInt("idF", fish.fishId);
            sfsObj.putInt("IC", fish.getListColider().indexOf(fish.getColiderInScreen()));
            sfsObj.putLong("iid", this.idItemDrag);
            sfsObj.putUtfString("evt", CODE_EVT_1.default.MatThanAtack);
            Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.MatThanAtack, sfsObj);
            this.isSendTargetFish = true;
            this.unschedule(this.offTarget);
            this.scheduleOnce(this.offTarget, Windown_1.Windown.RandomNumber(7, 12));
          }
        }
      };
      NewClass.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        this.player.isMe && !this.isSendTargetFish && this.autoChooseFish();
        this.checkDistanceFish(dt);
        this.folowAndAtack(dt);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeBullet", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbNickName", void 0);
      __decorate([ property(PanelPoint_1.default) ], NewClass.prototype, "panelPoint", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Bullet/BulletMatThan": "BulletMatThan",
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD"
  } ],
  NotiFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4986cw4tMpMb6Q+ESkMFufi", "NotiFish");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.description = null;
        _this.isRuning = false;
        _this.listCache = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.BigWinLobby.notiFish = this;
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.BigWinLobby.notiFish = null;
      };
      NewClass.prototype.addNotiShow = function(SFSObject) {
        var _this = this;
        var gameType = SFSObject.get("gt");
        var data = SFSObject.get("dt");
        var nickName = SFSObject.get("nn");
        var moneyTake = SFSObject.get("mt");
        if (gameType != GAME_TYPE_1.default.BongDem) return;
        if (this.isRuning) {
          this.listCache.push(SFSObject);
          return;
        }
        var info = "";
        var urlImg = "";
        switch (data) {
         case "24":
          urlImg = "ImgBigWin/caVoiXanh";
          info = "\u0111\xe3 h\u1ea1 C\xe1 Voi Xanh";
          break;

         case "100":
          info = "\u0111\xe3 N\u1ed4 H\u0168 C\xe1";
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
          urlImg = "ImgBigWin/caDien";
          info = "\u0111\xe3 h\u1ea1 C\xe1 \u0110\u1eb7c Bi\u1ec7t";
          break;

         case "74":
          urlImg = "ImgBigWin/caDien";
          info = "\u0111\xe3 h\u1ea1 C\xe1 \u0110I\u1ec6N";
        }
        if ("" == info) return;
        this.isRuning = true;
        var strShow = "Ch\xfac m\u1eebng</c><color=#0fffff> " + nickName + "</color> " + info + " th\u1eafng <color=#FFF500> " + Windown_1.Windown.formatNumber(moneyTake) + "</color>";
        this.description.string = strShow;
        this.description.node.parent.active = true;
        this.node.children[0].active = true;
        var width = this.description.node.width;
        var widthParent = this.description.node.parent.width;
        this.description.node.x = 100;
        var speed = 140;
        var quangDuong = widthParent + width;
        var time = quangDuong / speed;
        cc.Tween.stopAllByTarget(this.description.node);
        cc.tween(this.description.node).to(time, {
          x: -quangDuong
        }).delay(1).call(function() {
          _this.isRuning = false;
          if (_this.listCache.length > 0) _this.addNotiShow(_this.listCache.shift()); else {
            _this.description.node.parent.active = false;
            _this.node.children[0].active = false;
          }
        }).start();
      };
      __decorate([ property(cc.RichText) ], NewClass.prototype, "description", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  PanelPoint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8be8esEk+RKfLsC/LbSleUI", "PanelPoint");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var REQUEST_CODE_1 = require("../../../../Scritps/DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var LbMoneyChange_1 = require("../../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PanelPoint = function(_super) {
      __extends(PanelPoint, _super);
      function PanelPoint() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isEnd = false;
        _this.moneyCurrent = 0;
        _this.lbMoney = null;
        _this.listHandle = [];
        _this.playerBD = null;
        _this.idGun = -1;
        _this.byFishType = -1;
        _this.isDestroy = false;
        return _this;
      }
      PanelPoint.prototype.init = function(player, idGun, byFishType) {
        if (null == player) {
          this.actionEnd();
          return;
        }
        this.node.active = true;
        this.node.x = 0;
        this.byFishType = byFishType;
        this.playerBD = player;
        this.idGun = idGun;
        this.playerBD.mapNodePanel.set(idGun, this.node);
        this.node.parent = this.playerBD.parentPanel;
        this.node.scale = 0;
        this.node.opacity = 255;
        this.node.stopAllActions();
        this.node.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
        this.reset();
      };
      PanelPoint.prototype.reset = function() {
        if (this.isDestroy) return;
        this.listHandle = [];
        this.lbMoney.resetLb();
        this.isEnd = false;
        this.moneyCurrent = 0;
      };
      PanelPoint.prototype.addMoney = function(money) {
        if (this.isDestroy) return;
        this.moneyCurrent += money;
        this.lbMoney && this.lbMoney.setMoney(this.moneyCurrent);
      };
      PanelPoint.prototype.addHandle = function(handle) {
        if (this.isDestroy) return;
        this.listHandle.push(handle);
      };
      PanelPoint.prototype.onDestroy = function() {
        this.isDestroy = true;
      };
      PanelPoint.prototype.removeHandle = function(handle) {
        if (this.isDestroy) return;
        var indexOf = this.listHandle.indexOf(handle);
        indexOf > -1 && this.listHandle.splice(indexOf, 1);
        this.listHandle.length < 1 && this.isEnd && this.actionEnd();
        return this.listHandle.length < 1 && this.isEnd;
      };
      PanelPoint.prototype.end = function() {
        if (!this.isDestroy) {
          this.isEnd = true;
          this.listHandle.length < 1 && this.actionEnd();
        }
      };
      PanelPoint.prototype.actionEnd = function() {
        var _this = this;
        this.playerBD && this.playerBD.mapNodePanel.delete(this.idGun);
        if (this.moneyCurrent < 1) {
          this.node.stopAllActions();
          this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
            _this.node.destroy();
          })));
        } else {
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffect(audio.caLonChet);
          this.node.stopAllActions();
          this.node.runAction(cc.sequence(cc.scaleTo(.5, 1.3), cc.scaleTo(.3, 1), cc.delayTime(2.5), cc.fadeOut(.5), cc.callFunc(function() {
            _this.node.destroy();
          })));
          if (this.playerBD.isMe) {
            var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
            sfsObj.putInt("gt", GAME_TYPE_1.default.BongDem);
            sfsObj.putInt("mt", this.moneyCurrent);
            sfsObj.putUtfString("nn", this.playerBD.namePlayer);
            sfsObj.putUtfString("dt", this.byFishType.toString());
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
          }
        }
      };
      __decorate([ property(LbMoneyChange_1.default) ], PanelPoint.prototype, "lbMoney", void 0);
      PanelPoint = __decorate([ ccclass ], PanelPoint);
      return PanelPoint;
    }(cc.Component);
    exports.default = PanelPoint;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  PlayerBDManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9008165f6NDWKxYeVEX28V8", "PlayerBDManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../../../Scritps/Windown");
    var PlayerBD_1 = require("./PlayerBD");
    var PlayerBDManager = function() {
      function PlayerBDManager(fishBD) {
        this.fishBD = null;
        this.listPlayer = [];
        this.vecLat = null;
        this.isInit = false;
        this.fishBD = fishBD;
      }
      PlayerBDManager.prototype.getPlayerById = function(id) {
        for (var _i = 0, _a = this.listPlayer; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.acountId == id) return temp;
        }
        return null;
      };
      PlayerBDManager.prototype.getPlayerByStingId = function(sitting) {
        for (var _i = 0, _a = this.listPlayer; _i < _a.length; _i++) {
          var temp = _a[_i];
          if (temp.playerId == sitting) return temp;
        }
        return null;
      };
      PlayerBDManager.prototype.initListPlayer = function(arr) {
        cc.log(Windown_1.Windown.SFSArrToJson(arr));
        for (var i = 0, l = arr.size(); i < l; i++) {
          var SFSObject = arr.getSFSObject(i);
          if (SFSObject.getInt("id") == Windown_1.Windown.User.userId) {
            Windown_1.Windown.FishBongDem.playerIdMe = SFSObject.getInt("SittingId");
            Windown_1.Windown.FishBongDem.setVeclat();
            break;
          }
        }
        for (var i = 0, l = arr.size(); i < l; i++) {
          var SFSObject = arr.getSFSObject(i);
          var nodePlayer = this.fishBD.pool.getPlayer();
          nodePlayer.parent = this.fishBD.fishBDView.parentPlayer;
          var player = nodePlayer.getComponent(PlayerBD_1.default);
          player.setPlayerMng(this);
          player.initPlayer(SFSObject, this.getSiting(SFSObject.getInt("SittingId")));
          this.listPlayer.push(player);
        }
      };
      PlayerBDManager.prototype.addPlayer = function(obj) {
        var id = obj.getInt("id");
        if (id != Windown_1.Windown.User.userId && null != this.fishBD.playerIdMe) {
          var player = this.getPlayerById(id);
          if (null == player) {
            var nodePlayer = this.fishBD.pool.getPlayer();
            nodePlayer.parent = this.fishBD.fishBDView.parentPlayer;
            var player_1 = nodePlayer.getComponent(PlayerBD_1.default);
            player_1.setPlayerMng(this);
            player_1.initPlayer(obj, this.getSiting(obj.getInt("SittingId")));
            this.listPlayer.push(player_1);
          }
        }
      };
      PlayerBDManager.prototype.removePlayer = function(sittingId) {
        var player = this.getPlayerByStingId(sittingId);
        if (player) {
          var indexOff = this.listPlayer.indexOf(player);
          this.listPlayer.splice(indexOff, 1);
          player.reset();
        }
      };
      PlayerBDManager.prototype.putPlayerViewPool = function(node) {
        this.fishBD.pool.putPlayer(node);
      };
      PlayerBDManager.prototype.destroy = function() {
        this.listPlayer.forEach(function(v) {
          v.reset();
        });
        this.listPlayer = [];
      };
      PlayerBDManager.prototype.getSiting = function(idPlayer) {
        var isMeString = this.fishBD.playerIdMe;
        if (idPlayer == isMeString) return this.convertIdMe(idPlayer);
        return this.convertIdOther(idPlayer);
      };
      PlayerBDManager.prototype.convertIdMe = function(id) {
        switch (id) {
         case 3:
          return 2;

         case 4:
          return 1;

         default:
          return id;
        }
      };
      PlayerBDManager.prototype.convertIdOther = function(id) {
        if (this.fishBD.playerIdMe < 3) return id;
        switch (id) {
         case 1:
          return 4;

         case 2:
          return 3;

         case 3:
          return 2;

         case 4:
          return 1;
        }
      };
      return PlayerBDManager;
    }();
    exports.default = PlayerBDManager;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "./PlayerBD": "PlayerBD"
  } ],
  PlayerBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13e32sMUcRKm5YdpqwA/nqC", "PlayerBD");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var BasePlayerBD_1 = require("./BasePlayerBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerBD = function(_super) {
      __extends(PlayerBD, _super);
      function PlayerBD() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PlayerBD = __decorate([ ccclass ], PlayerBD);
      return PlayerBD;
    }(BasePlayerBD_1.default);
    exports.default = PlayerBD;
    cc._RF.pop();
  }, {
    "./BasePlayerBD": "BasePlayerBD"
  } ],
  PlayerUsingAuto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bacecolXs5BdYhcELhjX94x", "PlayerUsingAuto");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var GUN_TYPE_BD_1 = require("../../Gun/GUN_TYPE_BD");
    var BaseEffectPlayer_1 = require("./BaseEffectPlayer");
    var ThuocKeAuto_1 = require("./ThuocKeAuto");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerUsingAuto = function(_super) {
      __extends(PlayerUsingAuto, _super);
      function PlayerUsingAuto() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentColider = null;
        _this.currentFishTarget = null;
        _this.thuocKe = null;
        return _this;
      }
      PlayerUsingAuto.prototype.onLoad = function() {
        this.node.setPosition(0, 0);
        this.thuocKe.ext = this;
      };
      PlayerUsingAuto.prototype.excuted = function() {
        this.node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentPlayer;
        this.thuocKe.node.setPosition(this.player.gunFishBd.pointInScreen);
        Windown_1.Windown.FishBongDem.fishBDView.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
      };
      PlayerUsingAuto.prototype.touchStart = function(event) {
        var pos = event.getLocation();
        var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
        var iractor = mapFish.values();
        var result = iractor.next();
        while (!result.done) {
          var value = result.value;
          result = iractor.next();
          var listColider = value.getListColider();
          for (var _i = 0, listColider_1 = listColider; _i < listColider_1.length; _i++) {
            var colider = listColider_1[_i];
            if (this.currentColider != colider && colider.world && colider.world.points && cc.Intersection.pointInPolygon(pos, colider.world.points)) {
              this.targetFish(value, colider);
              return;
            }
          }
        }
      };
      PlayerUsingAuto.prototype.autoGetNewFishTarget = function() {
        if (!this.player.getCanAuto()) return;
        var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
        var iractor = mapFish.values();
        var result = iractor.next();
        var fishValine = null;
        var colider = null;
        if (this.player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET) {
          var maxType = 0;
          while (!result.done) {
            var value = result.value;
            result = iractor.next();
            if (value.fishType > maxType) {
              var coliderInS = value.getColiderInScreen();
              if (coliderInS) {
                maxType = value.fishType;
                fishValine = value;
                colider = coliderInS;
              }
            }
          }
          fishValine && colider && this.targetFish(fishValine, colider);
        } else {
          var minMag = 99999;
          while (!result.done) {
            var value = result.value;
            result = iractor.next();
            var listColider = value.getListColider();
            for (var _i = 0, listColider_2 = listColider; _i < listColider_2.length; _i++) {
              var temp = listColider_2[_i];
              if (temp == this.currentColider) continue;
              var pos = value.checkColiderInScreen(temp);
              if (pos) {
                var mag = cc.Vec2.distance(pos, this.player.gunFishBd.pointInScreen);
                if (mag < minMag) {
                  minMag = mag;
                  fishValine = value;
                  colider = temp;
                }
              }
            }
          }
        }
        fishValine && colider && this.targetFish(fishValine, colider);
      };
      PlayerUsingAuto.prototype.targetFish = function(fish, colider) {
        this.currentFishTarget = fish;
        this.currentColider = colider;
        this.player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET ? this.player.gunFishBd.stateGun.setFishIdTarget(this.currentFishTarget.fishId, this.currentFishTarget.getListColider().indexOf(colider)) : this.thuocKe.setIdTarget(fish.fishId);
      };
      PlayerUsingAuto.prototype.getNewColider = function() {
        var colider = this.currentFishTarget.getColiderInScreen(this.currentColider);
        if (colider) {
          this.currentColider = colider;
          this.player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET && this.player.gunFishBd.stateGun.setFishIdTarget(this.currentFishTarget.fishId, this.currentFishTarget.getListColider().indexOf(colider));
        } else this.offTarget();
      };
      PlayerUsingAuto.prototype.offTarget = function() {
        this.currentFishTarget = null;
        this.currentColider = null;
        if (this.player && this.player.node && this.player.gunFishBd && this.player.gunFishBd.node) {
          this.player.gunFishBd.stateGun.cancleAtack();
          this.player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET && this.player && this.player.node && this.player.gunFishBd && this.player.gunFishBd.node && this.player.gunFishBd.stateGun.offTarget();
        }
        this.thuocKe.setIdTarget(-1);
      };
      PlayerUsingAuto.prototype.checkColiderInScreen = function() {
        if (!this.currentFishTarget.getCanColision() || !this.player.getCanAuto()) {
          this.currentFishTarget = null;
          return;
        }
        var worldPos2 = this.currentColider.node.parent.convertToWorldSpaceAR(this.currentColider.node.getPosition());
        var viewPos2 = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos2);
        var mag = cc.Vec2.distance(viewPos2, this.player.gunFishBd.pointInScreen);
        var speed = this.player.gunFishBd.stateGun.speedBullet;
        var pointFuture = this.currentFishTarget.getPointInFuture(mag / speed, this.currentColider);
        if (pointFuture.x > 640 || pointFuture.x < -640 || pointFuture.y > 360 || pointFuture.y < -360) this.getNewColider(); else if (this.player.gunFishBd.stateGun.type != GUN_TYPE_BD_1.default.SET) {
          this.player.gunFishBd.stateGun.rotate(pointFuture);
          this.thuocKe.targetPoint(viewPos2);
        } else this.player.gunFishBd.stateGun.setFishIdTarget(this.currentFishTarget.fishId, this.currentFishTarget.getListColider().indexOf(this.currentColider));
      };
      PlayerUsingAuto.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        null == this.currentFishTarget && this.autoGetNewFishTarget();
        null != this.currentColider && null != this.currentFishTarget && this.checkColiderInScreen();
        _super.prototype.update.call(this, dt);
      };
      PlayerUsingAuto.prototype.end = function() {
        this.offTarget();
        Windown_1.Windown.FishBongDem.fishBDView.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.player.timeItemAuto = 0;
        Windown_1.Windown.FishBongDem.fishBDView.camMay.disableToggle();
        _super.prototype.end.call(this);
      };
      __decorate([ property(ThuocKeAuto_1.default) ], PlayerUsingAuto.prototype, "thuocKe", void 0);
      PlayerUsingAuto = __decorate([ ccclass ], PlayerUsingAuto);
      return PlayerUsingAuto;
    }(BaseEffectPlayer_1.default);
    exports.default = PlayerUsingAuto;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "./BaseEffectPlayer": "BaseEffectPlayer",
    "./ThuocKeAuto": "ThuocKeAuto"
  } ],
  PlayerUsingIce: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "048d1seqndAf4o5exYcp2qg", "PlayerUsingIce");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseEffectPlayer_1 = require("./BaseEffectPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerUsingIce = function(_super) {
      __extends(PlayerUsingIce, _super);
      function PlayerUsingIce() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spIce = null;
        return _this;
      }
      PlayerUsingIce.prototype.excuted = function() {
        var _this = this;
        this.node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        this.node.setPosition(this.player.gunFishBd.pointInScreen);
        this.node.y += 50;
        this.spIce.node.active = true;
        this.spIce.setAnimation(0, "animation", false);
        this.scheduleOnce(function() {
          _this.spIce.node.active = false;
        }, 3);
      };
      PlayerUsingIce.prototype.end = function() {
        _super.prototype.end.call(this);
      };
      __decorate([ property(sp.Skeleton) ], PlayerUsingIce.prototype, "spIce", void 0);
      PlayerUsingIce = __decorate([ ccclass ], PlayerUsingIce);
      return PlayerUsingIce;
    }(BaseEffectPlayer_1.default);
    exports.default = PlayerUsingIce;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseEffectPlayer": "BaseEffectPlayer"
  } ],
  PlayerUsingSpeed: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bedc9G4Nu5Lbo6WUp7m5rta", "PlayerUsingSpeed");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var BaseEffectPlayer_1 = require("./BaseEffectPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerUsingSpeed = function(_super) {
      __extends(PlayerUsingSpeed, _super);
      function PlayerUsingSpeed() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.spFire = null;
        return _this;
      }
      PlayerUsingSpeed.prototype.excuted = function() {
        this.node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentPlayer;
        this.node.zIndex = cc.macro.MIN_ZINDEX;
        this.node.setPosition(this.player.gunFishBd.pointInScreen);
        if (this.player.playerSiting > 2) {
          this.node.y -= 50;
          this.spFire.node.angle = 180;
          this.title.y = -100;
        } else {
          this.node.y += 50;
          this.spFire.node.angle = 0;
          this.title.y = 100;
        }
        this.spFire.fillRange = 0;
        cc.Tween.stopAllByTarget(this.spFire);
        cc.tween(this.spFire).to(.3, {
          fillRange: 1
        }).start();
        this.title.scale = 0;
        this.title.opacity = 255;
        cc.Tween.stopAllByTarget(this.title);
        cc.tween(this.title).to(.6, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(1).by(1, {
          y: 100,
          opacity: -500
        }).start();
        this.getComponent(cc.Animation).play("Speed");
        this.player.gunFishBd.stateGun.setTimeDelayMax();
        var node1 = cc.find("fish_cannon_1_head", this.player.gunFishBd.stateGun.nodeGun);
        var node2 = cc.find("fish_cannon_1_body", this.player.gunFishBd.stateGun.nodeGun);
        node1 && (node1.color = cc.Color.RED);
        node2 && (node2.color = cc.Color.RED);
      };
      PlayerUsingSpeed.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        this.player.gunFishBd.stateGun.setTimeDelayMax();
        _super.prototype.update.call(this, dt);
      };
      PlayerUsingSpeed.prototype.end = function() {
        var node1 = cc.find("fish_cannon_1_head", this.player.gunFishBd.stateGun.nodeGun);
        var node2 = cc.find("fish_cannon_1_body", this.player.gunFishBd.stateGun.nodeGun);
        node1 && (node1.color = cc.Color.WHITE);
        node2 && (node2.color = cc.Color.WHITE);
        this.player.gunFishBd.stateGun.setTimeDelayNormarl();
        _super.prototype.end.call(this);
      };
      __decorate([ property(cc.Node) ], PlayerUsingSpeed.prototype, "title", void 0);
      __decorate([ property(cc.Sprite) ], PlayerUsingSpeed.prototype, "spFire", void 0);
      PlayerUsingSpeed = __decorate([ ccclass ], PlayerUsingSpeed);
      return PlayerUsingSpeed;
    }(BaseEffectPlayer_1.default);
    exports.default = PlayerUsingSpeed;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "./BaseEffectPlayer": "BaseEffectPlayer"
  } ],
  PlayerUsingTarget: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5914zGNrRKF40+XtxuQrDG", "PlayerUsingTarget");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var Windown_1 = require("../../../../../Scritps/Windown");
    var GUN_TYPE_BD_1 = require("../../Gun/GUN_TYPE_BD");
    var BaseEffectPlayer_1 = require("./BaseEffectPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerUsingTarget = function(_super) {
      __extends(PlayerUsingTarget, _super);
      function PlayerUsingTarget() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeEffect = null;
        _this.nodeTitle = null;
        _this.currentColider = null;
        _this.itemTarget = null;
        _this.currentFishTarget = null;
        _this.listImgPointHuong = [];
        return _this;
      }
      PlayerUsingTarget.prototype.onLoad = function() {
        this.nodeEffect.runAction(cc.repeatForever(cc.rotateBy(2, 360)));
      };
      PlayerUsingTarget.prototype.touchStart = function(event) {
        var pos = event.getLocation();
        var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
        var iractor = mapFish.values();
        var result = iractor.next();
        while (!result.done) {
          var value = result.value;
          result = iractor.next();
          var listColider = value.getListColider();
          for (var _i = 0, listColider_1 = listColider; _i < listColider_1.length; _i++) {
            var colider = listColider_1[_i];
            if (this.currentColider != colider && colider.world && colider.world.points && cc.Intersection.pointInPolygon(pos, colider.world.points)) {
              cc.log("click dc colider nay");
              this.targetFish(value, colider);
              return;
            }
          }
        }
      };
      PlayerUsingTarget.prototype.creatTarget = function() {
        var parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        for (var i = 0; i < 10; i++) {
          var item = Windown_1.Windown.FishBongDem.pool.getItemPointTarget();
          item.parent = parent;
          item.zIndex = cc.macro.MAX_ZINDEX;
          this.listImgPointHuong.push(item);
        }
      };
      PlayerUsingTarget.prototype.autoGetNewFishTarget = function() {
        if (!this.player.getCanTarget()) return;
        var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
        var iractor = mapFish.values();
        var result = iractor.next();
        var fishValine = null;
        var colider = null;
        var maxType = 0;
        while (!result.done) {
          var value = result.value;
          result = iractor.next();
          if (value.fishType > maxType) {
            var coliderInS = value.getColiderInScreen();
            if (coliderInS) {
              maxType = value.fishType;
              fishValine = value;
              colider = coliderInS;
            }
          }
        }
        fishValine && colider && this.targetFish(fishValine, colider);
      };
      PlayerUsingTarget.prototype.targetFish = function(fish, colider) {
        if (this.currentFishTarget == fish && this.currentColider == colider) return;
        this.currentFishTarget = fish;
        this.currentColider = colider;
        null == this.itemTarget && (this.itemTarget = Windown_1.Windown.FishBongDem.pool.getItemTarget());
        this.listImgPointHuong.length < 1 && this.creatTarget();
        this.itemTarget.getComponent(sp.Skeleton).setAnimation(0, "aim", false);
        this.itemTarget.stopAllActions();
        this.itemTarget.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        cc.tween(this.itemTarget).by(1, {
          angle: -180
        }).repeatForever().start();
        Windown_1.Windown.FishBongDem.getSound().playTarget();
        this.player.gunFishBd.stateGun.setFishIdTarget(this.currentFishTarget.fishId, this.currentFishTarget.getListColider().indexOf(colider));
      };
      PlayerUsingTarget.prototype.checkColiderInScreen = function() {
        if (!this.currentFishTarget.getCanColision() || !this.player.getCanTarget()) {
          this.offTarget();
          return;
        }
        var posColider = this.currentFishTarget.checkColiderInScreen(this.currentColider);
        if (posColider) {
          this.player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET && this.player.gunFishBd.stateGun.setFishIdTarget(this.currentFishTarget.fishId, this.currentFishTarget.getListColider().indexOf(this.currentColider));
          this.itemTarget.setPosition(posColider);
          var length = this.listImgPointHuong.length;
          for (var i = 0; i < length; i++) {
            var item = this.listImgPointHuong[i];
            var pos = cc.v2(0, 0);
            pos = cc.Vec2.lerp(pos, this.player.gunFishBd.pointInScreen, posColider, i / length);
            item.setPosition(pos);
          }
          this.player.gunFishBd.stateGun.rotate(posColider);
        } else this.getNewColider();
      };
      PlayerUsingTarget.prototype.getNewColider = function() {
        var colider = this.currentFishTarget.getColiderInScreen(this.currentColider);
        if (colider) {
          this.currentColider = colider;
          this.player.gunFishBd.stateGun.setFishIdTarget(this.currentFishTarget.fishId, this.currentFishTarget.getListColider().indexOf(colider));
        }
        this.offTarget();
      };
      PlayerUsingTarget.prototype.excuted = function() {
        this.currentFishTarget = null;
        this.currentColider = null;
        this.nodeTitle.scale = 0;
        this.player.playerSiting > 2 ? this.nodeTitle.y = -150 : this.nodeTitle.y = 150;
        this.nodeTitle.scale = 0;
        this.nodeTitle.opacity = 255;
        cc.Tween.stopAllByTarget(this.nodeTitle);
        cc.tween(this.nodeTitle).to(.6, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(1).by(1, {
          y: 100,
          opacity: -500
        }).start();
        this.node.parent = Windown_1.Windown.FishBongDem.fishBDView.parentPlayer;
        this.node.zIndex = cc.macro.MIN_ZINDEX;
        this.node.setPosition(this.player.gunFishBd.pointInScreen);
        this.player.isMe && Windown_1.Windown.FishBongDem.fishBDView.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
      };
      PlayerUsingTarget.prototype.update = function(dt) {
        dt *= cc.director.getScheduler().getTimeScale();
        null == this.currentFishTarget && this.player.isMe && this.autoGetNewFishTarget();
        null == this.currentColider && null != this.itemTarget ? this.offTarget() : null != this.currentColider && null != this.currentFishTarget && this.checkColiderInScreen();
        _super.prototype.update.call(this, dt);
      };
      PlayerUsingTarget.prototype.offTarget = function() {
        this.currentFishTarget = null;
        this.currentColider = null;
        this.itemTarget && Windown_1.Windown.FishBongDem.pool.putItemTarget(this.itemTarget);
        this.itemTarget = null;
        for (var i = 0, l = this.listImgPointHuong.length; i < l; i++) {
          var item = this.listImgPointHuong[i];
          Windown_1.Windown.FishBongDem.pool.putItemPointTarget(item);
        }
        this.listImgPointHuong.length = 0;
        if (this.player && this.player.node && this.player.gunFishBd && this.player.gunFishBd.node) {
          this.player.gunFishBd.stateGun.cancleAtack();
          this.player.gunFishBd.stateGun.setFishIdTarget(-1, -1);
          this.player.gunFishBd.stateGun.type == GUN_TYPE_BD_1.default.SET && this.player.gunFishBd.stateGun.offTarget();
        }
      };
      PlayerUsingTarget.prototype.end = function() {
        this.offTarget();
        this.player && this.player.isMe && Windown_1.Windown.FishBongDem.fishBDView.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        _super.prototype.end.call(this);
      };
      __decorate([ property(cc.Node) ], PlayerUsingTarget.prototype, "nodeEffect", void 0);
      __decorate([ property(cc.Node) ], PlayerUsingTarget.prototype, "nodeTitle", void 0);
      PlayerUsingTarget = __decorate([ ccclass ], PlayerUsingTarget);
      return PlayerUsingTarget;
    }(BaseEffectPlayer_1.default);
    exports.default = PlayerUsingTarget;
    cc._RF.pop();
  }, {
    "../../../../../Scritps/Windown": void 0,
    "../../Gun/GUN_TYPE_BD": "GUN_TYPE_BD",
    "./BaseEffectPlayer": "BaseEffectPlayer"
  } ],
  PoolBongDem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8334028OdNFspwrcIB3AL/z", "PoolBongDem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var PlayerUsingAuto_1 = require("../Player/Effect/PlayerUsingAuto");
    var PlayerUsingIce_1 = require("../Player/Effect/PlayerUsingIce");
    var PlayerUsingSpeed_1 = require("../Player/Effect/PlayerUsingSpeed");
    var PlayerUsingTarget_1 = require("../Player/Effect/PlayerUsingTarget");
    var TypePlayerEffectBD_1 = require("../Player/Effect/TypePlayerEffectBD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PoolBongDem = function(_super) {
      __extends(PoolBongDem, _super);
      function PoolBongDem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.nodeTextMoney = null;
        _this.nodeTextMoneyRd = null;
        _this.nodeTextMoneyMini = null;
        _this.nodePlayer = null;
        _this.nodeEffectIce = null;
        _this.nodeEffectSpeed = null;
        _this.nodeEffectTarget = null;
        _this.nodeEffectAuto = null;
        _this.nodeItemTarget = null;
        _this.nodeItemPoint = null;
        _this.nodeGunNormal = null;
        _this.nodeGunLaze = null;
        _this.nodeGunSet = null;
        _this.nodeGunSongAm = null;
        _this.nodeGunMuiKhoan = null;
        _this.nodeGunFire = null;
        _this.nodePanelPointLaze = null;
        _this.nodePanelPointBoom = null;
        _this.nodePanelPointSongAm = null;
        _this.nodePanelPointMuiKhoan = null;
        _this.nodePanelPointCaXau = null;
        _this.nodePanelPointTruyGai = null;
        _this.nodePanelPointRua = null;
        _this.nodePanelPointHaiThan = null;
        _this.nodePanelPointGunFire = null;
        _this.nodeBulletMuiKhoan = null;
        _this.nodeVaChamMuiKhoan = null;
        _this.nodeEfGiatSet = null;
        _this.nodeEfTrieuHoi = null;
        _this.nodeEfCaXauDead = null;
        _this.nodeEfTruyGaiDead = null;
        _this.nodeEfRuaDead = null;
        _this.listSpItemMiniBoss = [];
        _this.listSpItemFish = [];
        _this.nodeMutilReward = null;
        _this.nodeLocXoay = null;
        _this.nodeBigFish = null;
        _this.nodeEfGunFire = null;
        _this.nodeCrabVongQuay = null;
        _this.countItem = null;
        _this.txtTrieuHoi = null;
        _this.effectSetFish74 = null;
        _this.panelFish74 = null;
        _this.poolCoin = new cc.NodePool();
        _this.poolTextMoney = new cc.NodePool();
        _this.poolTextMoneyRD = new cc.NodePool();
        _this.poolTextMoneyMini = new cc.NodePool();
        _this.poolPlayer = new cc.NodePool();
        _this.poolEffectIce = new cc.NodePool();
        _this.poolEffectSpeed = new cc.NodePool();
        _this.poolEffectTarget = new cc.NodePool();
        _this.poolEffectAuto = new cc.NodePool();
        _this.poolItemTarget = new cc.NodePool();
        _this.poolItemPoint = new cc.NodePool();
        _this.poolGunLaze = new cc.NodePool();
        _this.poolGunNormal = new cc.NodePool();
        _this.poolGunSongAm = new cc.NodePool();
        _this.poolGunSet = new cc.NodePool();
        _this.poolGunMuiKhoan = new cc.NodePool();
        _this.poolGunFire = new cc.NodePool();
        _this.poolPanelPointLaze = new cc.NodePool();
        _this.poolPanelPointBoom = new cc.NodePool();
        _this.poolPanelPointSongAm = new cc.NodePool();
        _this.poolPanelPointMuiKhoan = new cc.NodePool();
        _this.poolPanelPointGunFire = new cc.NodePool();
        _this.poolPanelPointCaXau = new cc.NodePool();
        _this.poolPanelPointHaiThan = new cc.NodePool();
        _this.poolPanelPointTruyGai = new cc.NodePool();
        _this.poolPanelPointRua = new cc.NodePool();
        _this.poolBulletMuiKhoan = new cc.NodePool();
        _this.poolVaChamMuiKhoan = new cc.NodePool();
        _this.poolEfGiatSet = new cc.NodePool();
        _this.poolEfTrieuHoi = new cc.NodePool();
        _this.poolEfCaXauDead = new cc.NodePool();
        _this.poolEfTruyGaiDead = new cc.NodePool();
        _this.poolEfRuaDead = new cc.NodePool();
        _this.poolItemMiniBoss = new cc.NodePool();
        _this.poolMultilReward = new cc.NodePool();
        _this.poolLocXoay = new cc.NodePool();
        _this.poolBigFish = new cc.NodePool();
        _this.poolEfGunFire = new cc.NodePool();
        _this.poolItemTakeFish = new cc.NodePool();
        return _this;
      }
      PoolBongDem.prototype.onLoad = function() {
        Windown_1.Windown.FishBongDem && Windown_1.Windown.FishBongDem.setPool(this);
      };
      PoolBongDem.prototype.getCoin = function(isMe) {
        var node = null;
        node = this.poolCoin.size() > 0 ? this.poolCoin.get() : cc.instantiate(this.nodeCoin);
        var material = null;
        material = isMe ? cc.Material.getBuiltinMaterial("2d-sprite") : cc.Material.getBuiltinMaterial("2d-gray-sprite");
        node.getComponent(cc.Sprite).setMaterial(0, material);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putCoin = function(node) {
        this.poolCoin.put(node);
      };
      PoolBongDem.prototype.getTextMoney = function(isMe) {
        var node = null;
        node = this.poolTextMoney.size() > 0 ? this.poolTextMoney.get() : cc.instantiate(this.nodeTextMoney);
        var material = null;
        material = isMe ? cc.Material.getBuiltinMaterial("2d-sprite") : cc.Material.getBuiltinMaterial("2d-gray-sprite");
        node.getComponent(cc.Label).setMaterial(0, material);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putTextMoney = function(node) {
        this.poolTextMoney.put(node);
      };
      PoolBongDem.prototype.getTextMoneyRd = function(isMe) {
        var node = null;
        node = this.poolTextMoneyRD.size() > 0 ? this.poolTextMoneyRD.get() : cc.instantiate(this.nodeTextMoneyRd);
        var material = null;
        material = isMe ? cc.Material.getBuiltinMaterial("2d-sprite") : cc.Material.getBuiltinMaterial("2d-gray-sprite");
        node.getComponent(cc.Label).setMaterial(0, material);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putTextMoneyRd = function(node) {
        this.poolTextMoneyRD.put(node);
      };
      PoolBongDem.prototype.getTextMoneyMini = function(isMe) {
        var node = null;
        if (this.poolTextMoneyMini.size() > 0) node = this.poolTextMoneyMini.get(); else {
          node = cc.instantiate(this.nodeTextMoneyMini);
          node.name = "TextMoneyMini";
        }
        var material = null;
        material = isMe ? cc.Material.getBuiltinMaterial("2d-sprite") : cc.Material.getBuiltinMaterial("2d-gray-sprite");
        node.getComponent(cc.Label).setMaterial(0, material);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putTextMoneyMini = function(node) {
        this.poolTextMoneyMini.put(node);
      };
      PoolBongDem.prototype.getPlayer = function() {
        var node = null;
        node = this.poolPlayer.size() > 0 ? this.poolPlayer.get() : cc.instantiate(this.nodePlayer);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPlayer = function(node) {
        this.poolPlayer.put(node);
      };
      PoolBongDem.prototype.getItemTarget = function() {
        var node = null;
        node = this.poolItemTarget.size() > 0 ? this.poolItemTarget.get() : cc.instantiate(this.nodeItemTarget);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putItemTarget = function(node) {
        this.poolItemTarget.put(node);
      };
      PoolBongDem.prototype.getItemPointTarget = function() {
        var node = null;
        node = this.poolItemPoint.size() > 0 ? this.poolItemPoint.get() : cc.instantiate(this.nodeItemPoint);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putItemPointTarget = function(node) {
        this.poolItemPoint.put(node);
      };
      PoolBongDem.prototype.getEffectPlayer = function(type) {
        var pool = null;
        var tempPlate = null;
        var node = null;
        switch (type) {
         case TypePlayerEffectBD_1.default.ICE:
          pool = this.poolEffectIce;
          tempPlate = this.nodeEffectIce;
          break;

         case TypePlayerEffectBD_1.default.SPEED:
          pool = this.poolEffectSpeed;
          tempPlate = this.nodeEffectSpeed;
          break;

         case TypePlayerEffectBD_1.default.TARGET:
          pool = this.poolEffectTarget;
          tempPlate = this.nodeEffectTarget;
          break;

         case TypePlayerEffectBD_1.default.AUTO:
          pool = this.poolEffectAuto;
          tempPlate = this.nodeEffectAuto;
        }
        if (pool) {
          node = pool.size() > 0 ? pool.get() : cc.instantiate(tempPlate.node);
          node.active = true;
          return node;
        }
        return null;
      };
      PoolBongDem.prototype.putEffectPlayer = function(cp) {
        var pool = null;
        cp instanceof PlayerUsingIce_1.default ? pool = this.poolEffectIce : cp instanceof PlayerUsingSpeed_1.default ? pool = this.poolEffectSpeed : cp instanceof PlayerUsingTarget_1.default ? pool = this.poolEffectTarget : cp instanceof PlayerUsingAuto_1.default && (pool = this.poolEffectAuto);
        pool && pool.put(cp.node);
      };
      PoolBongDem.prototype.getGunLaze = function() {
        var node = null;
        node = this.poolGunLaze.size() > 0 ? this.poolGunLaze.get() : cc.instantiate(this.nodeGunLaze);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putGunLaze = function(node) {
        this.poolGunLaze.put(node);
      };
      PoolBongDem.prototype.getGunNormal = function() {
        var node = null;
        node = this.poolGunNormal.size() > 0 ? this.poolGunNormal.get() : cc.instantiate(this.nodeGunNormal);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putGunNormal = function(node) {
        this.poolGunNormal.put(node);
      };
      PoolBongDem.prototype.getGunSongAm = function() {
        var node = null;
        node = this.poolGunSongAm.size() > 0 ? this.poolGunSongAm.get() : cc.instantiate(this.nodeGunSongAm);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putGunSongAm = function(node) {
        this.poolGunSongAm.put(node);
      };
      PoolBongDem.prototype.getGunSet = function() {
        var node = null;
        node = this.poolGunSet.size() > 0 ? this.poolGunSet.get() : cc.instantiate(this.nodeGunSet);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putGunSet = function(node) {
        this.poolGunSet.put(node);
      };
      PoolBongDem.prototype.getGunMuiKhoan = function() {
        var node = null;
        node = this.poolGunMuiKhoan.size() > 0 ? this.poolGunMuiKhoan.get() : cc.instantiate(this.nodeGunMuiKhoan);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putGunMuiKhoan = function(node) {
        this.poolGunMuiKhoan.put(node);
      };
      PoolBongDem.prototype.getGunFire = function() {
        var node = null;
        node = this.poolGunFire.size() > 0 ? this.poolGunFire.get() : cc.instantiate(this.nodeGunFire);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putGunFire = function(node) {
        this.poolGunFire.put(node);
      };
      PoolBongDem.prototype.getPanelLaze = function() {
        var node = null;
        node = this.poolPanelPointLaze.size() > 0 ? this.poolPanelPointLaze.get() : cc.instantiate(this.nodePanelPointLaze);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelLaze = function(node) {
        this.poolPanelPointLaze.put(node);
      };
      PoolBongDem.prototype.getPanelBoom = function() {
        var node = null;
        node = this.poolPanelPointBoom.size() > 0 ? this.poolPanelPointBoom.get() : cc.instantiate(this.nodePanelPointBoom);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelBoom = function(node) {
        this.poolPanelPointBoom.put(node);
      };
      PoolBongDem.prototype.getPanelSongAm = function() {
        var node = null;
        node = this.poolPanelPointSongAm.size() > 0 ? this.poolPanelPointSongAm.get() : cc.instantiate(this.nodePanelPointSongAm);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelSongAm = function(node) {
        this.poolPanelPointSongAm.put(node);
      };
      PoolBongDem.prototype.getPanelMuiKhoan = function() {
        var node = null;
        node = this.poolPanelPointMuiKhoan.size() > 0 ? this.poolPanelPointMuiKhoan.get() : cc.instantiate(this.nodePanelPointMuiKhoan);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelMuiKhoan = function(node) {
        this.poolPanelPointMuiKhoan.put(node);
      };
      PoolBongDem.prototype.getPanelGunFire = function() {
        var node = null;
        node = this.poolPanelPointGunFire.size() > 0 ? this.poolPanelPointGunFire.get() : cc.instantiate(this.nodePanelPointGunFire);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelGunFire = function(node) {
        this.poolPanelPointGunFire.put(node);
      };
      PoolBongDem.prototype.getTxtTrieuHoi = function() {
        var node = cc.instantiate(this.txtTrieuHoi);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.getPanelCaXau = function() {
        var node = null;
        node = this.poolPanelPointCaXau.size() > 0 ? this.poolPanelPointCaXau.get() : cc.instantiate(this.nodePanelPointCaXau);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelCaXau = function(node) {
        this.poolPanelPointCaXau.put(node);
      };
      PoolBongDem.prototype.getPanelHaiThan = function() {
        var node = null;
        node = this.poolPanelPointHaiThan.size() > 0 ? this.poolPanelPointHaiThan.get() : cc.instantiate(this.nodePanelPointHaiThan);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelHaiThan = function(node) {
        this.poolPanelPointHaiThan.put(node);
      };
      PoolBongDem.prototype.getPanelTruyGai = function() {
        var node = null;
        node = this.poolPanelPointTruyGai.size() > 0 ? this.poolPanelPointTruyGai.get() : cc.instantiate(this.nodePanelPointTruyGai);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelTruyGai = function(node) {
        this.poolPanelPointTruyGai.put(node);
      };
      PoolBongDem.prototype.getPanelRua = function() {
        var node = null;
        node = this.poolPanelPointRua.size() > 0 ? this.poolPanelPointRua.get() : cc.instantiate(this.nodePanelPointRua);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putPanelRua = function(node) {
        this.poolPanelPointRua.put(node);
      };
      PoolBongDem.prototype.getBulletMuiKhoan = function() {
        var node = null;
        node = this.poolBulletMuiKhoan.size() > 0 ? this.poolBulletMuiKhoan.get() : cc.instantiate(this.nodeBulletMuiKhoan);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putBulletMuiKhoan = function(node) {
        this.poolBulletMuiKhoan.put(node);
      };
      PoolBongDem.prototype.getVaChamMuiKhoan = function() {
        var node = null;
        node = this.poolVaChamMuiKhoan.size() > 0 ? this.poolVaChamMuiKhoan.get() : cc.instantiate(this.nodeVaChamMuiKhoan);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putVaChamMuiKhoan = function(node) {
        this.poolVaChamMuiKhoan.put(node);
      };
      PoolBongDem.prototype.getEfGiatSet = function() {
        var node = null;
        node = this.poolEfGiatSet.size() > 0 ? this.poolEfGiatSet.get() : cc.instantiate(this.nodeEfGiatSet);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putEfGiatSet = function(node) {
        this.poolEfGiatSet.put(node);
      };
      PoolBongDem.prototype.getEfTrieuHoi = function() {
        var node = null;
        node = this.poolEfTrieuHoi.size() > 0 ? this.poolEfTrieuHoi.get() : cc.instantiate(this.nodeEfTrieuHoi);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putEfTrieuHoi = function(node) {
        this.poolEfTrieuHoi.put(node);
      };
      PoolBongDem.prototype.getEfCaXauDead = function() {
        var node = null;
        node = this.poolEfCaXauDead.size() > 0 ? this.poolEfCaXauDead.get() : cc.instantiate(this.nodeEfCaXauDead);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putEfCaXauDead = function(node) {
        this.poolEfCaXauDead.put(node);
      };
      PoolBongDem.prototype.getEfTruyGaiDead = function() {
        var node = null;
        node = this.poolEfTruyGaiDead.size() > 0 ? this.poolEfTruyGaiDead.get() : cc.instantiate(this.nodeEfTruyGaiDead);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putEfTruyGaiDead = function(node) {
        this.poolEfTruyGaiDead.put(node);
      };
      PoolBongDem.prototype.getEfRuaDead = function() {
        var node = null;
        node = this.poolEfRuaDead.size() > 0 ? this.poolEfRuaDead.get() : cc.instantiate(this.nodeEfRuaDead);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putEfRuaDead = function(node) {
        this.poolEfRuaDead.put(node);
      };
      PoolBongDem.prototype.getItemMiniBoss = function(countItem) {
        var node = null;
        if (this.poolItemMiniBoss.size() > 0) node = this.poolItemMiniBoss.get(); else {
          node = new cc.Node();
          node.addComponent(cc.Sprite);
        }
        node.getComponent(cc.Sprite).spriteFrame = this.listSpItemMiniBoss[countItem];
        return node;
      };
      PoolBongDem.prototype.putItemMiniBoss = function(node) {
        this.poolItemMiniBoss.put(node);
      };
      PoolBongDem.prototype.getMutilReward = function() {
        var node = null;
        node = this.poolMultilReward.size() > 0 ? this.poolMultilReward.get() : cc.instantiate(this.nodeMutilReward);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putMutilReward = function(node) {
        this.poolMultilReward.put(node);
      };
      PoolBongDem.prototype.getCrabVongQuay = function() {
        var node = null;
        node = cc.instantiate(this.nodeCrabVongQuay);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.getLocXoay = function() {
        var node = null;
        node = this.poolLocXoay.size() > 0 ? this.poolLocXoay.get() : cc.instantiate(this.nodeLocXoay);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putLocXoay = function(node) {
        this.poolLocXoay.put(node);
      };
      PoolBongDem.prototype.getBigFish = function() {
        var node = null;
        node = this.poolBigFish.size() > 0 ? this.poolBigFish.get() : cc.instantiate(this.nodeBigFish);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putBigFish = function(node) {
        this.poolBigFish.put(node);
      };
      PoolBongDem.prototype.getEfGunFire = function() {
        var node = null;
        node = this.poolEfGunFire.size() > 0 ? this.poolEfGunFire.get() : cc.instantiate(this.nodeEfGunFire);
        node.x = 0;
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.putEfGunFire = function(node) {
        this.poolEfGunFire.put(node);
      };
      PoolBongDem.prototype.getItemTakeFish = function(type) {
        var node = null;
        if (this.poolItemTakeFish.size() > 0) node = this.poolItemTakeFish.get(); else {
          node = new cc.Node();
          node.addComponent(cc.Sprite);
          node.scale = .8;
        }
        if (type >= 100) {
          node.getComponent(cc.Sprite).spriteFrame = this.listSpItemFish[type - 100 + 4];
          node.scale = 1.2;
        } else {
          node.getComponent(cc.Sprite).spriteFrame = this.listSpItemFish[type - 1];
          node.scale = .8;
        }
        return node;
      };
      PoolBongDem.prototype.putItemTakeFish = function(node) {
        this.poolItemTakeFish.put(node);
      };
      PoolBongDem.prototype.getCountItem = function() {
        var node = cc.instantiate(this.countItem);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.getEffectFishSet74 = function() {
        var node = cc.instantiate(this.effectSetFish74);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.getPanelFish74 = function() {
        var node = cc.instantiate(this.panelFish74);
        node.active = true;
        return node;
      };
      PoolBongDem.prototype.onDestroy = function() {
        this.poolCoin.clear();
        this.poolTextMoney.clear();
        this.poolTextMoneyRD.clear();
        this.poolTextMoneyMini.clear();
        this.poolPlayer.clear();
        this.poolEffectIce.clear();
        this.poolEffectSpeed.clear();
        this.poolEffectTarget.clear();
        this.poolEffectAuto.clear();
        this.poolItemTarget.clear();
        this.poolItemPoint.clear();
        this.poolGunLaze.clear();
        this.poolGunSongAm.clear();
        this.poolGunNormal.clear();
        this.poolGunMuiKhoan.clear();
        this.poolGunFire.clear();
        this.poolPanelPointLaze.clear();
        this.poolPanelPointBoom.clear();
        this.poolPanelPointSongAm.clear();
        this.poolPanelPointMuiKhoan.clear();
        this.poolPanelPointGunFire.clear();
        this.poolBulletMuiKhoan.clear();
        this.poolVaChamMuiKhoan.clear();
        this.poolGunSet.clear();
        this.poolEfGiatSet.clear();
        this.poolPanelPointCaXau.clear();
        this.poolPanelPointHaiThan.clear();
        this.poolPanelPointTruyGai.clear();
        this.poolPanelPointRua.clear();
        this.poolEfCaXauDead.clear();
        this.poolEfTruyGaiDead.clear();
        this.poolEfRuaDead.clear();
        this.poolItemMiniBoss.clear();
        this.poolMultilReward.clear();
        this.poolLocXoay.clear();
        this.poolBigFish.clear();
        this.poolEfGunFire.clear();
        this.poolItemTakeFish.clear();
        this.poolEfTrieuHoi.clear();
      };
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeCoin", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeTextMoney", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeTextMoneyRd", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeTextMoneyMini", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePlayer", void 0);
      __decorate([ property(PlayerUsingIce_1.default) ], PoolBongDem.prototype, "nodeEffectIce", void 0);
      __decorate([ property(PlayerUsingSpeed_1.default) ], PoolBongDem.prototype, "nodeEffectSpeed", void 0);
      __decorate([ property(PlayerUsingTarget_1.default) ], PoolBongDem.prototype, "nodeEffectTarget", void 0);
      __decorate([ property(PlayerUsingAuto_1.default) ], PoolBongDem.prototype, "nodeEffectAuto", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeItemTarget", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeItemPoint", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeGunNormal", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeGunLaze", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeGunSet", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeGunSongAm", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeGunMuiKhoan", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeGunFire", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointLaze", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointBoom", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointSongAm", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointMuiKhoan", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointCaXau", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointTruyGai", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointRua", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointHaiThan", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodePanelPointGunFire", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeBulletMuiKhoan", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeVaChamMuiKhoan", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeEfGiatSet", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeEfTrieuHoi", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeEfCaXauDead", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeEfTruyGaiDead", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeEfRuaDead", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PoolBongDem.prototype, "listSpItemMiniBoss", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], PoolBongDem.prototype, "listSpItemFish", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeMutilReward", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeLocXoay", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeBigFish", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeEfGunFire", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "nodeCrabVongQuay", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "countItem", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "txtTrieuHoi", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "effectSetFish74", void 0);
      __decorate([ property(cc.Node) ], PoolBongDem.prototype, "panelFish74", void 0);
      PoolBongDem = __decorate([ ccclass ], PoolBongDem);
      return PoolBongDem;
    }(cc.Component);
    exports.default = PoolBongDem;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Windown": void 0,
    "../Player/Effect/PlayerUsingAuto": "PlayerUsingAuto",
    "../Player/Effect/PlayerUsingIce": "PlayerUsingIce",
    "../Player/Effect/PlayerUsingSpeed": "PlayerUsingSpeed",
    "../Player/Effect/PlayerUsingTarget": "PlayerUsingTarget",
    "../Player/Effect/TypePlayerEffectBD": "TypePlayerEffectBD"
  } ],
  ScaleFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "823770fg1VFnLNVcOawQmw7", "ScaleFish");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
      NewClass.prototype.update = function(dt) {
        this.node.angle <= 0 && this.node.angle >= -180 ? this.node.scaleX = 1 : this.node.scaleX = -1;
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  SoundBongDem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e28domqj9JGo9og1XHkdhD", "SoundBongDem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var SoundBongDem = function(_super) {
      __extends(SoundBongDem, _super);
      function SoundBongDem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.demTien = null;
        _this.demTienOther = null;
        _this.endDemTienTurn = null;
        _this.endDemTien = null;
        _this.takeFishNormal = null;
        _this.iceAllFish = null;
        _this.nextTurn = null;
        _this.coinBayVe = null;
        _this.coinVeTui = null;
        _this.changeGun = null;
        _this.target = null;
        _this.caLonChet = null;
        _this.anDcNhomCa = null;
        _this.caTranDacBiet = null;
        _this.miniBossRoiItem = null;
        _this.quayRdHeSo = null;
        _this.bgBackTuoc = null;
        _this.set = null;
        _this.banLaze = null;
        _this.soundWave = null;
        _this.watingMuiKhoan = null;
        _this.trungMuiKhoan = null;
        _this.gunAtack = null;
        _this.fishBoom = null;
        _this.nhanMaChet = null;
        _this.ruaXiLua = null;
        _this.ting = null;
        _this.noHu = null;
        _this.tienRoi = null;
        _this.fishJackpot = null;
        _this.multiplyAppear = null;
        _this.comingJackpot = null;
        _this.bkgJackpot = null;
        _this.gunFire = null;
        _this.hitIncredible = null;
        _this.diaGa = null;
        _this.wind = null;
        _this.takeNgocRong = null;
        _this.hopQuaMo = null;
        _this.hopQuaNo = null;
        _this.spinVongQuay = null;
        _this.startBoom = null;
        _this.dropBoom = null;
        _this.matThanAtack = null;
        _this.Electricity = null;
        _this.RuaXoay = null;
        _this.WindShort = null;
        _this.DromDinhBa = null;
        _this.ShowTakeTireuHoi = null;
        _this.PhonixStart = null;
        _this.fish70Start = null;
        _this.startFish72 = null;
        return _this;
      }
      SoundBongDem.prototype.playMusic = function() {
        if (Windown_1.Windown.BotController) return -1;
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.4);
        }
      };
      SoundBongDem.prototype.playEffectNoStop = function(audioclip, volum, isLoop) {
        void 0 === volum && (volum = 1);
        void 0 === isLoop && (isLoop = false);
        return _super.prototype.playEffectNoStop.call(this, audioclip, volum, isLoop);
      };
      SoundBongDem.prototype.playClick = function() {
        this.playEffect(this.audios[0]);
      };
      SoundBongDem.prototype.playChangeGun = function() {
        this.playEffect(this.changeGun);
      };
      SoundBongDem.prototype.playTarget = function() {
        this.playEffect(this.target);
      };
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "demTien", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "demTienOther", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "endDemTienTurn", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "endDemTien", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "takeFishNormal", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "iceAllFish", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "nextTurn", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "coinBayVe", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "coinVeTui", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "changeGun", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "target", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "caLonChet", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "anDcNhomCa", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "caTranDacBiet", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "miniBossRoiItem", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "quayRdHeSo", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "bgBackTuoc", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "set", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "banLaze", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "soundWave", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "watingMuiKhoan", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "trungMuiKhoan", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "gunAtack", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "fishBoom", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "nhanMaChet", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "ruaXiLua", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "ting", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "noHu", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "tienRoi", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "fishJackpot", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "multiplyAppear", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "comingJackpot", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "bkgJackpot", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "gunFire", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "hitIncredible", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "diaGa", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "wind", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "takeNgocRong", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "hopQuaMo", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "hopQuaNo", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "spinVongQuay", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "startBoom", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "dropBoom", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "matThanAtack", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "Electricity", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "RuaXoay", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "WindShort", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "DromDinhBa", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "ShowTakeTireuHoi", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "PhonixStart", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "fish70Start", void 0);
      __decorate([ property(cc.AudioClip) ], SoundBongDem.prototype, "startFish72", void 0);
      SoundBongDem = __decorate([ ccclass ], SoundBongDem);
      return SoundBongDem;
    }(AudioManager_1.default);
    exports.default = SoundBongDem;
    cc._RF.pop();
  }, {
    "../../../Scritps/Parent/AudioManager": void 0,
    "../../../Scritps/Windown": void 0
  } ],
  StateGunFire: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e390wNH69FaIvATdxyE8vz", "StateGunFire");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BulletFire_1 = require("../Bullet/BulletFire");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseStateGunBD_1 = require("./BaseStateGunBD");
    var StateGunFire = function(_super) {
      __extends(StateGunFire, _super);
      function StateGunFire() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.particelEfFire = null;
        _this.isGunIdle = true;
        _this.currenAngle = 0;
        _this.isCanAtack = false;
        _this.timeUse = 0;
        _this.timeRemove = 0;
        _this.timeOutBackToNormalGun = null;
        _this.timeOutCountDown = null;
        _this.isAtack = false;
        _this.isCanLook = false;
        _this.point = null;
        _this.itemDrag = null;
        _this.bulletFire = null;
        return _this;
      }
      StateGunFire.prototype.setTimeDelayMax = function() {};
      StateGunFire.prototype.setTimeDelayNormarl = function() {
        this.timeDelay = .22;
      };
      StateGunFire.prototype.setMoneyGun = function(index) {};
      StateGunFire.prototype.execute = function() {
        var _this = this;
        this.gunBD.setActiveBtn(false);
        this.gunBD.lbGunValue.string = Windown_1.Windown.formatNumber(Windown_1.Windown.FishBongDem.getGunValueByType(this.indexMoneyGun));
        this.setTimeDelayNormarl();
        var nodeGun = Windown_1.Windown.FishBongDem.pool.getGunFire();
        var nodeEfGunFire = Windown_1.Windown.FishBongDem.pool.getEfGunFire();
        nodeEfGunFire.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        nodeEfGunFire.active = false;
        this.particelEfFire = nodeEfGunFire.getComponent(cc.ParticleSystem);
        this.particelEfFire.resetSystem();
        this.particelEfFire.emissionRate = 0;
        nodeGun.parent = this.gunBD.bodyGun;
        nodeGun.stopAllActions();
        nodeGun.scale = 0;
        nodeGun.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.3, 1), cc.callFunc(function() {
          nodeEfGunFire.active = true;
          _this.updatePosEffGunFire();
          _this.updateStateGunIdle();
          _this.sendUsingGun();
        })));
        nodeGun.setPosition(0, 0);
        this.nodeGun = nodeGun;
        this.isGunIdle = true;
        this.itemDrag = this.gunBD.playerBD.getItemDrag(this.idGunNow);
        this.bulletFire = nodeGun.getComponentInChildren(BulletFire_1.default);
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putLong("byFish", this.idGunNow);
        this.bulletFire.creat(sfsObj, this.gunBD);
        this.bulletFire.node.active = false;
        this.isCanLook = false;
      };
      StateGunFire.prototype.unLock = function() {
        var _this = this;
        this.isCanLook = true;
        this.countDownTime(this.itemDrag.timeUse);
        Windown_1.Windown.FishBongDem.setTimeout(this.timeOutBackToNormalGun = function() {
          _this.gunBD.playerBD.backToCurrentGun();
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.stopEffect(audio.gunFire);
          _this.removeNodePanel();
        }, this.itemDrag.timeUse);
        this.creatNodePanel();
        this.bulletFire.setPanel(this.gunBD.playerBD.mapNodePanel.get(this.idGunNow).getComponent(PanelPoint_1.default));
      };
      StateGunFire.prototype.sendUsingGun = function() {
        cc.log("send using ne");
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putInt("Type", TypeItemDragBD_1.default.GUN_FIRE);
        sfsObj.putLong("Id", this.idGunNow);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
      };
      StateGunFire.prototype.countDownTime = function(time) {
        var _this = this;
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = true;
        time--;
        lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
        Windown_1.Windown.FishBongDem.setInterval(this.timeOutCountDown = function() {
          time--;
          lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
          cc.Tween.stopAllByTarget(lb.node);
          cc.tween(lb.node).to(.2, {
            scale: 1.4
          }).to(.2, {
            scale: 1.1
          }).start();
          if (time <= 0) {
            Windown_1.Windown.FishBongDem.unschedule(_this.timeOutCountDown);
            lb.node.active = false;
          }
        }, 1);
      };
      StateGunFire.prototype.offCountDownTime = function() {
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutCountDown);
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = false;
      };
      StateGunFire.prototype.creatNodePanel = function() {
        var node = Windown_1.Windown.FishBongDem.pool.getPanelGunFire();
        node.getComponent(PanelPoint_1.default).init(this.gunBD.playerBD, this.idGunNow, FISH_TYPE_1.default.GUN_FIRE);
      };
      StateGunFire.prototype.setFishIdTarget = function(id, indexColider) {
        this.idFishTarget = id;
        this.indexColider = indexColider;
      };
      StateGunFire.prototype.atack = function() {
        if (!this.isCanLook) return;
        if (this.isGunIdle) {
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffect(audio.gunFire, 1, true);
          this.isGunIdle = false;
          this.updateStateGunIdle();
        }
      };
      StateGunFire.prototype.rotate = function(point) {
        if (!this.isCanLook) return;
        var diff = point.clone().subSelf(this.gunBD.pointInScreen);
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        this.currenAngle = angle;
        this.gunBD.bodyGun.angle = -angle;
        this.isAtack = true;
        this.updatePosEffGunFire();
        if (this.gunBD.playerBD.isMe) {
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          var vecHuong = point.clone();
          Windown_1.Windown.FishBongDem.convertVec(vecHuong);
          sfsObj.putFloat("x", vecHuong.x);
          sfsObj.putFloat("y", vecHuong.y);
          sfsObj.putBool("iA", true);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.RotateGun, sfsObj);
        }
      };
      StateGunFire.prototype.updatePosEffGunFire = function() {
        var worldPos = this.nodeGun.convertToWorldSpaceAR(cc.v2(0, 109));
        var viewPos = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos);
        this.particelEfFire.node.setPosition(viewPos);
        this.particelEfFire.angle = this.gunBD.bodyGun.angle + 90;
      };
      StateGunFire.prototype.updateStateGunIdle = function() {
        if (this.isGunIdle) {
          cc.Tween.stopAllByTarget(this.particelEfFire);
          this.particelEfFire.emissionRate = 0;
          this.bulletFire.node.active = false;
        } else {
          this.bulletFire.node.active = true;
          cc.Tween.stopAllByTarget(this.particelEfFire);
          cc.tween(this.particelEfFire).to(.2, {
            emissionRate: 566
          }).start();
        }
      };
      StateGunFire.prototype.cancleAtack = function() {
        this.timeUpdate = 0;
        this.isAtack = false;
        if (!this.isGunIdle) {
          this.isGunIdle = true;
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.stopEffect(audio.gunFire);
          this.updateStateGunIdle();
        }
        if (this.gunBD.playerBD.isMe) {
          var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          sfsObj.putBool("iA", false);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.RotateGun, sfsObj);
        }
      };
      StateGunFire.prototype.reset = function() {
        var _this = this;
        this.particelEfFire.resetSystem();
        this.particelEfFire.emissionRate = 0;
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        this.offCountDownTime();
        Windown_1.Windown.FishBongDem.pool.putEfGunFire(this.particelEfFire.node);
        this.nodeGun.stopAllActions();
        cc.tween(this.nodeGun).to(.3, {
          scale: 0
        }).call(function() {
          Windown_1.Windown.FishBongDem.pool.putGunFire(_this.nodeGun);
        }).start();
        this.idFishTarget = -1;
        this.indexColider = -1;
      };
      StateGunFire.prototype.onClickAdd = function() {
        var currentId = this.indexMoneyGun;
        var msgData = ConectManager_1.ConectManager.getIns().getSFSObj();
        currentId++;
        currentId >= Windown_1.Windown.FishBongDem.listGunMoney.length && (currentId = 0);
        msgData.putInt("IndexMoneyGun", currentId);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeMoneyGun, msgData);
      };
      StateGunFire.prototype.onClickSub = function() {
        var currentId = this.indexMoneyGun;
        var msgData = ConectManager_1.ConectManager.getIns().getSFSObj();
        currentId--;
        currentId < 0 && (currentId = Windown_1.Windown.FishBongDem.listGunMoney.length - 1);
        msgData.putInt("IndexMoneyGun", currentId);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeMoneyGun, msgData);
      };
      StateGunFire.prototype.updateCp = function(dt) {
        this.timeUpdate += dt;
        if (this.timeUpdate >= this.timeDelay && this.isAtack) {
          this.atack();
          this.timeUpdate = 0;
        }
      };
      return StateGunFire;
    }(BaseStateGunBD_1.default);
    exports.default = StateGunFire;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Bullet/BulletFire": "BulletFire",
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseStateGunBD": "BaseStateGunBD"
  } ],
  StateGunLaze: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a010UA4vJJl51LPhnXz3hD", "StateGunLaze");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BulletLazeBD_1 = require("../Bullet/BulletLazeBD");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseStateGunBD_1 = require("./BaseStateGunBD");
    var StateGunLaze = function(_super) {
      __extends(StateGunLaze, _super);
      function StateGunLaze() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currenAngle = 0;
        _this.spineLaze = null;
        _this.isCanAtack = false;
        _this.bulletLaze = null;
        _this.timeUse = 0;
        _this.timeRemove = 0;
        _this.timeOutBackToNormalGun = null;
        _this.timeOutCountDown = null;
        _this.isAtack = false;
        _this.isCanLook = false;
        _this.point = null;
        _this.itemDrag = null;
        return _this;
      }
      StateGunLaze.prototype.setTimeDelayMax = function() {};
      StateGunLaze.prototype.setTimeDelayNormarl = function() {};
      StateGunLaze.prototype.setMoneyGun = function(money) {};
      StateGunLaze.prototype.execute = function() {
        var _this = this;
        this.gunBD.setActiveBtn(false);
        var nodeGunLaze = Windown_1.Windown.FishBongDem.pool.getGunLaze();
        nodeGunLaze.parent = this.gunBD.bodyGun;
        nodeGunLaze.scale = 0;
        nodeGunLaze.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.5, 1)));
        nodeGunLaze.setPosition(0, 0);
        this.nodeGun = nodeGunLaze;
        var textLaze = cc.find("SungLaser_Text", nodeGunLaze);
        textLaze.active = true;
        textLaze.opacity = 0;
        textLaze.scale = 2;
        cc.Tween.stopAllByTarget(textLaze);
        cc.tween(textLaze).delay(.6).call(function() {
          _this.isCanLook = true;
        }).to(.2, {
          opacity: 255,
          scale: 1
        }, {
          easing: "sineIn"
        }).delay(1.5).to(.5, {
          opacity: 0
        }).start();
        var spineLaze = cc.find("fxLaser", nodeGunLaze);
        this.spineLaze = spineLaze.getComponent(sp.Skeleton);
        spineLaze.opacity = 0;
        cc.Tween.stopAllByTarget(spineLaze);
        cc.tween(spineLaze).delay(1.1).to(.5, {
          opacity: 255
        }).start();
        this.spineLaze.setAnimation(0, "Aim", false);
        this.bulletLaze = cc.find("BulletLaze", nodeGunLaze).getComponent(BulletLazeBD_1.default);
        this.bulletLaze.node.active = false;
        this.itemDrag = this.gunBD.playerBD.getItemDrag(this.idGunNow);
        Windown_1.Windown.FishBongDem.setTimeout(this.timeOutBackToNormalGun = function() {
          if (Windown_1.Windown.FishBongDem) {
            _this.gunBD.playerBD.backToCurrentGun();
            _this.removeNodePanel();
          }
        }, this.itemDrag.timeRemove);
        this.countDownTime(this.itemDrag.timeRemove);
        this.creatNodePanel();
      };
      StateGunLaze.prototype.creatNodePanel = function() {
        var node = Windown_1.Windown.FishBongDem.pool.getPanelLaze();
        node.getComponent(PanelPoint_1.default).init(this.gunBD.playerBD, this.idGunNow, FISH_TYPE_1.default.LAZE);
      };
      StateGunLaze.prototype.atack = function() {
        var _this = this;
        this.spineLaze.setAnimation(0, "Shoot", false);
        this.gunBD.playerBD.isMe && this.bulletLaze.init(this.itemDrag.timeUse, this.idGunNow);
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffect(audio.banLaze);
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        this.offCountDownTime();
        Windown_1.Windown.FishBongDem.setTimeout(this.timeOutBackToNormalGun = function() {
          _this.gunBD.playerBD.backToCurrentGun();
          _this.removeNodePanel();
        }, this.itemDrag.timeUse);
      };
      StateGunLaze.prototype.countDownTime = function(time) {
        var _this = this;
        cc.log("time la: " + time);
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = true;
        time--;
        lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
        Windown_1.Windown.FishBongDem.setInterval(this.timeOutCountDown = function() {
          time--;
          lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
          cc.Tween.stopAllByTarget(lb.node);
          cc.tween(lb.node).to(.2, {
            scale: 1.4
          }).to(.2, {
            scale: 1.1
          }).start();
          if (time <= 0) {
            Windown_1.Windown.FishBongDem.unschedule(_this.timeOutCountDown);
            lb.node.active = false;
          }
          if (time <= 5 && _this.gunBD.playerBD.isItemAuto) {
            _this.rotate(cc.v2(Windown_1.Windown.RandomNumber(-400, 400), Windown_1.Windown.RandomNumber(-180, 180)));
            _this.cancleAtack();
          }
        }, 1);
      };
      StateGunLaze.prototype.offCountDownTime = function() {
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutCountDown);
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = false;
      };
      StateGunLaze.prototype.sendUsing = function() {
        if (null == this.point) return;
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        var pointTarget = this.point.clone();
        var point = Windown_1.Windown.FishBongDem.convertVec(pointTarget);
        sfsObj.putDouble("PointX", point.x);
        sfsObj.putDouble("PointY", point.y);
        sfsObj.putInt("Type", TypeItemDragBD_1.default.LAZE);
        sfsObj.putLong("Id", this.idGunNow);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
        this.isAtack = true;
        this.offCountDownTime();
      };
      StateGunLaze.prototype.rotate = function(point) {
        if (this.isAtack || !this.isCanLook) return;
        var diff = point.clone().subSelf(this.gunBD.pointInScreen);
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        this.currenAngle = angle;
        this.gunBD.bodyGun.angle = -angle;
        this.point = point;
      };
      StateGunLaze.prototype.reset = function() {
        var _this = this;
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        this.offCountDownTime();
        cc.Tween.stopAllByTarget(this.nodeGun);
        cc.tween(this.nodeGun).to(.3, {
          scale: 0
        }).call(function() {
          Windown_1.Windown.FishBongDem.pool.putGunLaze(_this.nodeGun);
        }).start();
      };
      StateGunLaze.prototype.setTimeDelay = function(timeDelay) {};
      StateGunLaze.prototype.updateCp = function(dt) {};
      StateGunLaze.prototype.cancleAtack = function() {
        this.gunBD.playerBD.isMe && this.isCanLook && !this.isAtack && this.sendUsing();
      };
      StateGunLaze.prototype.setFishIdTarget = function(id) {};
      StateGunLaze.prototype.onClickAdd = function() {};
      StateGunLaze.prototype.onClickSub = function() {};
      return StateGunLaze;
    }(BaseStateGunBD_1.default);
    exports.default = StateGunLaze;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Bullet/BulletLazeBD": "BulletLazeBD",
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseStateGunBD": "BaseStateGunBD"
  } ],
  StateGunMuiKhoan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "079d2wCnltCFJ9LYEhNFt0k", "StateGunMuiKhoan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BulletMuiKhoanBD_1 = require("../Bullet/BulletMuiKhoanBD");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseStateGunBD_1 = require("./BaseStateGunBD");
    var StateGunMuiKhoan = function(_super) {
      __extends(StateGunMuiKhoan, _super);
      function StateGunMuiKhoan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currenAngle = 0;
        _this.isCanAtack = false;
        _this.timeUse = 0;
        _this.timeRemove = 0;
        _this.timeOutBackToNormalGun = null;
        _this.timeOutCountDown = null;
        _this.isAtack = false;
        _this.isCanLook = false;
        _this.point = null;
        _this.itemDrag = null;
        return _this;
      }
      StateGunMuiKhoan.prototype.setTimeDelayMax = function() {};
      StateGunMuiKhoan.prototype.setTimeDelayNormarl = function() {};
      StateGunMuiKhoan.prototype.setMoneyGun = function(money) {};
      StateGunMuiKhoan.prototype.execute = function() {
        var _this = this;
        this.gunBD.setActiveBtn(false);
        var nodeGunMuiKhoan = Windown_1.Windown.FishBongDem.pool.getGunMuiKhoan();
        nodeGunMuiKhoan.parent = this.gunBD.bodyGun;
        nodeGunMuiKhoan.scale = 0;
        nodeGunMuiKhoan.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.5, 1)));
        nodeGunMuiKhoan.setPosition(0, 0);
        this.nodeGun = nodeGunMuiKhoan;
        var textLaze = cc.find("title", nodeGunMuiKhoan);
        textLaze.active = true;
        textLaze.opacity = 0;
        textLaze.scale = 2;
        cc.Tween.stopAllByTarget(textLaze);
        cc.tween(textLaze).delay(.6).call(function() {
          _this.isCanLook = true;
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffectNoStop(audio.watingMuiKhoan, 1, true);
        }).to(.2, {
          opacity: 255,
          scale: 1
        }, {
          easing: "sineIn"
        }).delay(1.5).to(.5, {
          opacity: 0
        }).start();
        this.itemDrag = this.gunBD.playerBD.getItemDrag(this.idGunNow);
        Windown_1.Windown.FishBongDem.setTimeout(this.timeOutBackToNormalGun = function() {
          _this.gunBD.playerBD.backToCurrentGun();
          _this.removeNodePanel();
        }, this.itemDrag.timeRemove);
        cc.log("time removela : " + this.itemDrag.timeRemove);
        this.countDownTime(this.itemDrag.timeRemove);
        this.creatNodePanel();
      };
      StateGunMuiKhoan.prototype.creatNodePanel = function() {
        cc.log("this.idGunNow: " + this.idGunNow);
        var node = Windown_1.Windown.FishBongDem.pool.getPanelMuiKhoan();
        node.getComponent(PanelPoint_1.default).init(this.gunBD.playerBD, this.idGunNow, FISH_TYPE_1.default.MUI_KHOAN);
      };
      StateGunMuiKhoan.prototype.atack = function() {
        cc.log("player atack conme nos");
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.stopEffect(audio.watingMuiKhoan);
        this.nodeGun.scale = 0;
        var speed = this.speedBullet;
        var vX = speed * Math.sin(this.currenAngle * Math.PI / 180);
        var vY = speed * Math.cos(this.currenAngle * Math.PI / 180);
        var posStartBullet = this.gunBD.getVecStartBullet();
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putFloat("VelocityX", vX);
        sfsObj.putFloat("VelocityY", vY);
        sfsObj.putFloat("PositionX", posStartBullet.x);
        sfsObj.putFloat("PositionY", posStartBullet.y);
        sfsObj.putInt("FishIdTarget", this.idFishTarget);
        sfsObj.putFloat("Angle", this.currenAngle);
        sfsObj.putInt("Speed", this.speedBullet);
        sfsObj.putLong("byFish", this.idGunNow);
        sfsObj.putFloat("timeTotalLife", this.itemDrag.timeUse);
        var bullet = Windown_1.Windown.FishBongDem.pool.getBulletMuiKhoan();
        bullet.parent = Windown_1.Windown.FishBongDem.fishBDView.parentEffect;
        var cp = bullet.getComponent(BulletMuiKhoanBD_1.default);
        cp.creat(sfsObj, this.gunBD, this.gunBD.playerBD.isMe);
        cp.setPanel(this.gunBD.playerBD.mapNodePanel.get(this.idGunNow).getComponent(PanelPoint_1.default));
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        this.offCountDownTime();
        this.gunBD.playerBD.backToCurrentGun();
      };
      StateGunMuiKhoan.prototype.countDownTime = function(time) {
        var _this = this;
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = true;
        time--;
        lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
        Windown_1.Windown.FishBongDem.setInterval(this.timeOutCountDown = function() {
          time--;
          lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
          cc.Tween.stopAllByTarget(lb.node);
          cc.tween(lb.node).to(.2, {
            scale: 1.4
          }).to(.2, {
            scale: 1.1
          }).start();
          if (time <= 0) {
            Windown_1.Windown.FishBongDem.unschedule(_this.timeOutCountDown);
            lb.node.active = false;
          }
          if (time <= 5 && _this.gunBD.playerBD.isItemAuto) {
            _this.rotate(cc.v2(Windown_1.Windown.RandomNumber(-400, 400), Windown_1.Windown.RandomNumber(-180, 180)));
            _this.cancleAtack();
          }
        }, 1);
      };
      StateGunMuiKhoan.prototype.offCountDownTime = function() {
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutCountDown);
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = false;
      };
      StateGunMuiKhoan.prototype.sendUsing = function() {
        if (null == this.point) return;
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        var pointTarget = this.point.clone();
        var point = Windown_1.Windown.FishBongDem.convertVec(pointTarget);
        sfsObj.putDouble("PointX", point.x);
        sfsObj.putDouble("PointY", point.y);
        sfsObj.putInt("Type", TypeItemDragBD_1.default.MUI_KHOAN);
        sfsObj.putLong("Id", this.idGunNow);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
        this.isAtack = true;
        this.offCountDownTime();
      };
      StateGunMuiKhoan.prototype.rotate = function(point) {
        if (this.isAtack || !this.isCanLook) return;
        var diff = point.clone().subSelf(this.gunBD.pointInScreen);
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        this.currenAngle = angle;
        this.gunBD.bodyGun.angle = -angle;
        this.point = point;
      };
      StateGunMuiKhoan.prototype.reset = function() {
        var _this = this;
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        this.offCountDownTime();
        cc.Tween.stopAllByTarget(this.nodeGun);
        cc.tween(this.nodeGun).to(.3, {
          scale: 0
        }).call(function() {
          Windown_1.Windown.FishBongDem.pool.putGunMuiKhoan(_this.nodeGun);
        }).start();
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.stopEffect(audio.watingMuiKhoan);
      };
      StateGunMuiKhoan.prototype.setTimeDelay = function(timeDelay) {};
      StateGunMuiKhoan.prototype.updateCp = function(dt) {};
      StateGunMuiKhoan.prototype.cancleAtack = function() {
        this.gunBD.playerBD.isMe && this.isCanLook && !this.isAtack && this.sendUsing();
      };
      StateGunMuiKhoan.prototype.setFishIdTarget = function(id) {};
      StateGunMuiKhoan.prototype.onClickAdd = function() {};
      StateGunMuiKhoan.prototype.onClickSub = function() {};
      return StateGunMuiKhoan;
    }(BaseStateGunBD_1.default);
    exports.default = StateGunMuiKhoan;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Bullet/BulletMuiKhoanBD": "BulletMuiKhoanBD",
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseStateGunBD": "BaseStateGunBD"
  } ],
  StateGunNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ced85gYZYFLb4NxDGQaiyeD", "StateGunNormal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var TextDefine_1 = require("../../../../Scritps/DefineTs/TextDefine");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BulletNormal_1 = require("../Bullet/BulletNormal");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypePlayerEffectBD_1 = require("../Player/Effect/TypePlayerEffectBD");
    var BaseStateGunBD_1 = require("./BaseStateGunBD");
    var StateGunNormal = function(_super) {
      __extends(StateGunNormal, _super);
      function StateGunNormal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currenAngle = 0;
        _this.isAtack = false;
        return _this;
      }
      StateGunNormal.prototype.creatNodePanel = function() {};
      StateGunNormal.prototype.setTimeDelayMax = function() {
        this.timeDelay = .05;
      };
      StateGunNormal.prototype.setTimeDelayNormarl = function() {
        this.timeDelay = .22;
      };
      StateGunNormal.prototype.setMoneyGun = function(index) {
        this.indexMoneyGun = index;
        this.gunBD.lbGunValue.string = Windown_1.Windown.formatNumber(Windown_1.Windown.FishBongDem.getGunValueByType(index));
        Windown_1.Windown.FishBongDem.getSound().playChangeGun();
      };
      StateGunNormal.prototype.execute = function() {
        this.gunBD.setActiveBtn(true);
        this.gunBD.lbGunValue.string = Windown_1.Windown.formatNumber(Windown_1.Windown.FishBongDem.getGunValueByType(this.indexMoneyGun));
        this.setTimeDelayNormarl();
        var nodeGun = Windown_1.Windown.FishBongDem.pool.getGunNormal();
        nodeGun.parent = this.gunBD.bodyGun;
        nodeGun.stopAllActions();
        nodeGun.scale = 0;
        nodeGun.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.3, 1)));
        nodeGun.setPosition(0, 0);
        this.nodeGun = nodeGun;
      };
      StateGunNormal.prototype.setFishIdTarget = function(id, indexColider) {
        this.idFishTarget = id;
        this.indexColider = indexColider;
      };
      StateGunNormal.prototype.atack = function() {
        var moneyGun = Windown_1.Windown.FishBongDem.getGunValueByType(this.indexMoneyGun);
        if (this.gunBD.playerBD.gold < moneyGun) {
          if (this.gunBD.playerBD.isMe) {
            Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NotMoneyFish);
            var toggle = Windown_1.Windown.FishBongDem.fishBDView.camMay.toggleStart;
            toggle.isChecked && toggle.uncheck();
            Windown_1.Windown.BotController && Windown_1.Windown.FishBongDem.setTimeout(function() {
              Windown_1.Windown.restartGame();
            }, Windown_1.Windown.RandomNumber(3, 30));
            this.gunBD.playerBD.forceEndEffect(TypePlayerEffectBD_1.default.TARGET);
          }
          return;
        }
        this.nodeGun.getComponent(cc.Animation).play("GunAtackNormal");
        var speed = this.speedBullet;
        var vX = speed * Math.sin(this.currenAngle * Math.PI / 180);
        var vY = speed * Math.cos(this.currenAngle * Math.PI / 180);
        var posStartBullet = this.gunBD.getVecStartBullet();
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putFloat("VelocityX", vX);
        sfsObj.putFloat("VelocityY", vY);
        sfsObj.putFloat("PositionX", posStartBullet.x);
        sfsObj.putFloat("PositionY", posStartBullet.y);
        sfsObj.putInt("FishIdTarget", this.idFishTarget);
        sfsObj.putInt("IC", this.indexColider);
        sfsObj.putFloat("Angle", this.currenAngle);
        sfsObj.putInt("Speed", this.speedBullet);
        sfsObj.putLong("BulletId", 10 * Date.now() + this.gunBD.playerBD.playerId);
        sfsObj.putLong("CreatedTime", 1);
        sfsObj.putInt("IndexMoneyGun", this.gunBD.playerBD.indexMoneyGun);
        var bullet = this.gunBD.getBulletNormalPool();
        var cp = bullet.getComponent(BulletNormal_1.default);
        cp.creat(sfsObj, this.gunBD, this.gunBD.playerBD.isMe);
        if (this.gunBD.playerBD.isMe) {
          var vecHuong = cc.v2(vX, vY);
          Windown_1.Windown.FishBongDem.convertVec(vecHuong);
          Windown_1.Windown.FishBongDem.convertVec(posStartBullet);
          var angle = Windown_1.Windown.FishBongDem.conVertAngle(this.currenAngle);
          sfsObj.putFloat("VelocityX", vecHuong.x);
          sfsObj.putFloat("VelocityY", vecHuong.y);
          sfsObj.putFloat("PositionX", posStartBullet.x);
          sfsObj.putFloat("PositionY", posStartBullet.y);
          sfsObj.putFloat("Angle", angle);
          Windown_1.Windown.FishBongDem.sendBullet(sfsObj);
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffect(audio.gunAtack, .5);
        }
      };
      StateGunNormal.prototype.rotate = function(point) {
        var diff = point.clone().subSelf(this.gunBD.pointInScreen);
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        this.currenAngle = angle;
        this.gunBD.bodyGun.angle = -angle;
        this.isAtack = true;
        if (this.timeUpdate >= this.timeDelay && this.isAtack) {
          this.atack();
          this.timeUpdate = 0;
        }
      };
      StateGunNormal.prototype.cancleAtack = function() {
        this.timeUpdate = 0;
        this.isAtack = false;
      };
      StateGunNormal.prototype.reset = function() {
        var _this = this;
        cc.log("r\u1ebft gun normal");
        this.nodeGun.stopAllActions();
        cc.tween(this.nodeGun).to(.3, {
          scale: 0
        }).call(function() {
          Windown_1.Windown.FishBongDem.pool.putGunNormal(_this.nodeGun);
        }).start();
        this.idFishTarget = -1;
        this.indexColider = -1;
      };
      StateGunNormal.prototype.onClickAdd = function() {
        var currentId = this.indexMoneyGun;
        var msgData = ConectManager_1.ConectManager.getIns().getSFSObj();
        currentId++;
        currentId >= Windown_1.Windown.FishBongDem.listGunMoney.length && (currentId = 0);
        msgData.putInt("IndexMoneyGun", currentId);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeMoneyGun, msgData);
      };
      StateGunNormal.prototype.onClickSub = function() {
        var currentId = this.indexMoneyGun;
        var msgData = ConectManager_1.ConectManager.getIns().getSFSObj();
        currentId--;
        currentId < 0 && (currentId = Windown_1.Windown.FishBongDem.listGunMoney.length - 1);
        msgData.putInt("IndexMoneyGun", currentId);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeMoneyGun, msgData);
      };
      StateGunNormal.prototype.updateCp = function(dt) {
        if (!this.gunBD.playerBD.isMe) return;
        this.timeUpdate += dt;
        if (this.timeUpdate >= this.timeDelay && this.isAtack) {
          this.atack();
          this.timeUpdate = 0;
        }
      };
      return StateGunNormal;
    }(BaseStateGunBD_1.default);
    exports.default = StateGunNormal;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Bullet/BulletNormal": "BulletNormal",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/Effect/TypePlayerEffectBD": "TypePlayerEffectBD",
    "./BaseStateGunBD": "BaseStateGunBD"
  } ],
  StateGunSet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b117eU6Oa9Il6/2VkBFeo4q", "StateGunSet");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var TextDefine_1 = require("../../../../Scritps/DefineTs/TextDefine");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var BaseStateGunBD_1 = require("./BaseStateGunBD");
    var StateGunNormal = function(_super) {
      __extends(StateGunNormal, _super);
      function StateGunNormal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currenAngle = 0;
        _this.isAtack = false;
        _this.currentColider = null;
        _this.fishTarget = null;
        return _this;
      }
      StateGunNormal.prototype.creatNodePanel = function() {};
      StateGunNormal.prototype.setTimeDelayMax = function() {
        this.timeDelay = .05;
      };
      StateGunNormal.prototype.setTimeDelayNormarl = function() {
        this.timeDelay = .18;
      };
      StateGunNormal.prototype.setMoneyGun = function(index) {
        this.indexMoneyGun = index;
        this.gunBD.lbGunValue.string = Windown_1.Windown.formatNumber(Windown_1.Windown.FishBongDem.getGunValueByType(index));
        Windown_1.Windown.FishBongDem.getSound().playChangeGun();
      };
      StateGunNormal.prototype.execute = function() {
        this.gunBD.setActiveBtn(true);
        this.gunBD.lbGunValue.string = Windown_1.Windown.formatNumber(Windown_1.Windown.FishBongDem.getGunValueByType(this.indexMoneyGun));
        this.gunBD.playerBD.isMe && Windown_1.Windown.FishBongDem.fishBDView.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.nodeGun = Windown_1.Windown.FishBongDem.pool.getGunSet();
        this.nodeGun.parent = this.gunBD.bodyGun;
        this.nodeGun.scale = 0;
        this.nodeGun.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.5, 1)));
        this.nodeGun.setPosition(0, 0);
        this.nodeGun.children[0].active = false;
        this.nodeGun.children[2].active = false;
        this.setTimeDelayNormarl();
        this.gunBD.playerBD.playerSiting > 2 ? this.gunBD.bodyGun.angle = 180 : this.gunBD.bodyGun.angle = 0;
      };
      StateGunNormal.prototype.setFishIdTarget = function(id, indexColider) {
        indexColider = Number(indexColider);
        if (this.idFishTarget == id && this.indexColider == indexColider) return;
        this.fishTarget = Windown_1.Windown.FishBongDem.fishMng.getFishById(id);
        if (this.fishTarget) {
          this.currentColider = this.fishTarget.getListColider()[indexColider];
          if (this.currentColider) {
            this.nodeGun.children[0].active = true;
            this.nodeGun.children[2].active = true;
            this.idFishTarget = id;
            this.indexColider = indexColider;
          }
        }
      };
      StateGunNormal.prototype.atack = function() {
        if (null == this.fishTarget) return;
        var moneyGun = Windown_1.Windown.FishBongDem.getGunValueByType(this.indexMoneyGun);
        if (this.gunBD.playerBD.gold < moneyGun) {
          if (this.gunBD.playerBD.isMe) {
            Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NotMoneyFish);
            var toggle = Windown_1.Windown.FishBongDem.fishBDView.camMay.toggleStart;
            toggle.isChecked && toggle.uncheck();
            Windown_1.Windown.BotController && Windown_1.Windown.FishBongDem.setTimeout(function() {
              Windown_1.Windown.restartGame();
            }, Windown_1.Windown.RandomNumber(3, 30));
            this.offTarget();
          }
          return;
        }
        var speed = this.speedBullet;
        var vX = speed * Math.sin(this.currenAngle * Math.PI / 180);
        var vY = speed * Math.cos(this.currenAngle * Math.PI / 180);
        var posStartBullet = this.gunBD.getVecStartBullet();
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putFloat("VelocityX", vX);
        sfsObj.putFloat("VelocityY", vY);
        sfsObj.putFloat("PositionX", posStartBullet.x);
        sfsObj.putFloat("PositionY", posStartBullet.y);
        sfsObj.putInt("FishIdTarget", this.idFishTarget);
        sfsObj.putInt("IC", this.indexColider);
        sfsObj.putFloat("Angle", this.currenAngle);
        sfsObj.putInt("Speed", this.speedBullet);
        sfsObj.putLong("BulletId", 10 * Date.now() + this.gunBD.playerBD.playerId);
        sfsObj.putLong("CreatedTime", 1);
        sfsObj.putInt("IndexMoneyGun", this.gunBD.playerBD.indexMoneyGun);
        this.fishTarget.onColision(this.currentColider);
        if (this.gunBD.playerBD.isMe) {
          var vecHuong = cc.v2(vX, vY);
          Windown_1.Windown.FishBongDem.convertVec(vecHuong);
          Windown_1.Windown.FishBongDem.convertVec(posStartBullet);
          var angle = Windown_1.Windown.FishBongDem.conVertAngle(this.currenAngle);
          sfsObj.putFloat("VelocityX", vecHuong.x);
          sfsObj.putFloat("VelocityY", vecHuong.y);
          sfsObj.putFloat("PositionX", posStartBullet.x);
          sfsObj.putFloat("PositionY", posStartBullet.y);
          sfsObj.putFloat("Angle", angle);
          Windown_1.Windown.FishBongDem.sendBullet(sfsObj);
          var msg = ConectManager_1.ConectManager.getIns().getSFSObj();
          msg.putLong("BulletId", sfsObj.get("BulletId"));
          msg.putInt("FishId", this.fishTarget.fishId);
          msg.putInt("FishType", this.fishTarget.fishType);
          Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.FishColisionBD, msg);
          var audio = Windown_1.Windown.FishBongDem.getSound();
          audio.playEffect(audio.set, .3);
        }
      };
      StateGunNormal.prototype.touchStart = function(event) {
        var pos = event.getLocation();
        var mapFish = Windown_1.Windown.FishBongDem.fishMng.getMapFish();
        var iractor = mapFish.values();
        var result = iractor.next();
        while (!result.done) {
          var value = result.value;
          result = iractor.next();
          var listColider = value.getListColider();
          for (var index in listColider) {
            var colider = listColider[index];
            if (this.currentColider != colider && colider.world && colider.world.points && cc.Intersection.pointInPolygon(pos, colider.world.points)) {
              this.setFishIdTarget(value.fishId, index);
              return;
            }
          }
        }
        this.offTarget();
      };
      StateGunNormal.prototype.rotate = function(point) {
        this.isAtack = true;
      };
      StateGunNormal.prototype.cancleAtack = function() {};
      StateGunNormal.prototype.reset = function() {
        var _this = this;
        this.gunBD.playerBD.isMe && Windown_1.Windown.FishBongDem.fishBDView.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        cc.Tween.stopAllByTarget(this.nodeGun);
        cc.tween(this.nodeGun).to(.3, {
          scale: 0
        }).call(function() {
          Windown_1.Windown.FishBongDem.pool.putGunSet(_this.nodeGun);
        }).start();
        this.offTarget();
      };
      StateGunNormal.prototype.onClickAdd = function() {
        var currentId = this.indexMoneyGun;
        var msgData = ConectManager_1.ConectManager.getIns().getSFSObj();
        currentId++;
        currentId >= Windown_1.Windown.FishBongDem.listGunMoney.length && (currentId = 0);
        msgData.putInt("IndexMoneyGun", currentId);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeMoneyGun, msgData);
      };
      StateGunNormal.prototype.onClickSub = function() {
        var currentId = this.indexMoneyGun;
        var msgData = ConectManager_1.ConectManager.getIns().getSFSObj();
        currentId--;
        currentId < 0 && (currentId = Windown_1.Windown.FishBongDem.listGunMoney.length - 1);
        msgData.putInt("IndexMoneyGun", currentId);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.ChangeMoneyGun, msgData);
      };
      StateGunNormal.prototype.checkColider = function() {
        if (!this.fishTarget.getCanColision()) {
          this.offTarget();
          return;
        }
        var worldPos2 = this.currentColider.node.parent.convertToWorldSpaceAR(this.currentColider.node.getPosition());
        var viewPos2 = Windown_1.Windown.FishBongDem.fishBDView.parentFish.convertToNodeSpaceAR(worldPos2);
        if (viewPos2.x > 640 || viewPos2.x < -640 || viewPos2.y > 360 || viewPos2.y < -360) this.getNewColider(); else {
          var viewInParent = this.nodeGun.convertToNodeSpaceAR(worldPos2);
          var nodeSet = this.nodeGun.children[0];
          var diff = viewInParent.clone().subSelf(nodeSet.getPosition());
          var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
          var mag = cc.Vec2.distance(viewInParent, nodeSet.getPosition());
          this.isAtack = true;
          nodeSet.angle = -angle;
          nodeSet.height = mag;
          nodeSet.children[0].y = mag;
        }
      };
      StateGunNormal.prototype.getNewColider = function() {
        var listColider = this.fishTarget.getListColider();
        for (var _i = 0, listColider_1 = listColider; _i < listColider_1.length; _i++) {
          var colider = listColider_1[_i];
          if (colider == this.currentColider) continue;
          var worldPos2 = colider.node.parent.convertToWorldSpaceAR(colider.node.getPosition());
          var viewPos2 = Windown_1.Windown.FishBongDem.fishBDView.parentEffect.convertToNodeSpaceAR(worldPos2);
          if (!(viewPos2.x > 640 || viewPos2.x < -640 || viewPos2.y > 360 || viewPos2.y < -360)) {
            this.currentColider = colider;
            return;
          }
        }
        this.offTarget();
      };
      StateGunNormal.prototype.offTarget = function() {
        this.fishTarget = null;
        this.idFishTarget = -1;
        this.currentColider = null;
        this.indexColider = -1;
        this.nodeGun.children[0].active = false;
        this.nodeGun.children[2].active = false;
        this.isAtack = false;
      };
      StateGunNormal.prototype.updateCp = function(dt) {
        this.fishTarget && this.currentColider && this.checkColider();
        this.timeUpdate += dt;
        if (this.timeUpdate >= this.timeDelay && this.isAtack) {
          this.atack();
          this.timeUpdate = 0;
        }
      };
      return StateGunNormal;
    }(BaseStateGunBD_1.default);
    exports.default = StateGunNormal;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/TextDefine": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Network/CODE_EVT": "CODE_EVT",
    "./BaseStateGunBD": "BaseStateGunBD"
  } ],
  StateGunSongAm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6e64SynNpBgoJpIgDp7+zt", "StateGunSongAm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var Windown_1 = require("../../../../Scritps/Windown");
    var BulletSongAmBD_1 = require("../Bullet/BulletSongAmBD");
    var PanelPoint_1 = require("../DeadBevhavior/PanelPoint");
    var FISH_TYPE_1 = require("../Fish/FISH_TYPE");
    var CODE_EVT_1 = require("../Network/CODE_EVT");
    var TypeItemDragBD_1 = require("../Player/TypeItemDragBD");
    var BaseStateGunBD_1 = require("./BaseStateGunBD");
    var StateGunSongAm = function(_super) {
      __extends(StateGunSongAm, _super);
      function StateGunSongAm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currenAngle = 0;
        _this.isCanAtack = false;
        _this.bulletSongAm = null;
        _this.timeUse = 0;
        _this.timeRemove = 0;
        _this.timeOutBackToNormalGun = null;
        _this.timeOutCountDown = null;
        _this.isAtack = false;
        _this.isCanLook = false;
        _this.point = null;
        _this.itemDrag = null;
        _this.idGunNow = -1;
        _this.parentItemTemplate = null;
        _this.itemTempPlate = null;
        _this.funCreatItem = null;
        return _this;
      }
      StateGunSongAm.prototype.setTimeDelayMax = function() {};
      StateGunSongAm.prototype.setTimeDelayNormarl = function() {};
      StateGunSongAm.prototype.setMoneyGun = function(money) {};
      StateGunSongAm.prototype.execute = function() {
        var _this = this;
        this.gunBD.setActiveBtn(false);
        var nodeGunSongAm = Windown_1.Windown.FishBongDem.pool.getGunSongAm();
        nodeGunSongAm.parent = this.gunBD.bodyGun;
        nodeGunSongAm.scale = 0;
        nodeGunSongAm.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.5, 1)));
        nodeGunSongAm.setPosition(0, 0);
        this.nodeGun = nodeGunSongAm;
        var textLaze = cc.find("title", nodeGunSongAm);
        textLaze.active = true;
        textLaze.opacity = 0;
        textLaze.scale = 2;
        cc.Tween.stopAllByTarget(textLaze);
        cc.tween(textLaze).delay(.6).to(.2, {
          opacity: 255,
          scale: 1
        }, {
          easing: "sineIn"
        }).delay(1.5).to(.5, {
          opacity: 0
        }).start();
        var imgNgam = cc.find("imgSongAm", nodeGunSongAm);
        imgNgam.opacity = 0;
        cc.Tween.stopAllByTarget(imgNgam);
        cc.tween(imgNgam).to(.3, {
          opacity: 255
        }).call(function() {
          _this.isCanLook = true;
        }).start();
        this.parentItemTemplate = cc.find("ParentBulletTemp", nodeGunSongAm);
        this.parentItemTemplate.destroyAllChildren();
        this.itemTempPlate = cc.find("BulletTemp", nodeGunSongAm);
        this.bulletSongAm = cc.find("BulletSongAm", nodeGunSongAm).getComponent(BulletSongAmBD_1.default);
        this.bulletSongAm.node.active = false;
        this.itemDrag = this.gunBD.playerBD.getItemDrag(this.idGunNow);
        Windown_1.Windown.FishBongDem.setTimeout(this.timeOutBackToNormalGun = function() {
          if (Windown_1.Windown.FishBongDem) {
            _this.gunBD.playerBD.backToCurrentGun();
            _this.removeNodePanel();
          }
        }, this.itemDrag.timeRemove);
        this.countDownTime(this.itemDrag.timeRemove);
        this.creatNodePanel();
      };
      StateGunSongAm.prototype.creatNodePanel = function() {
        var node = Windown_1.Windown.FishBongDem.pool.getPanelSongAm();
        node.getComponent(PanelPoint_1.default).init(this.gunBD.playerBD, this.idGunNow, FISH_TYPE_1.default.SONG_AM);
      };
      StateGunSongAm.prototype.atack = function() {
        var _this = this;
        var imgNgam = cc.find("imgSongAm", this.nodeGun);
        imgNgam.opacity = 0;
        var count = 0;
        Windown_1.Windown.FishBongDem.setInterval(this.funCreatItem = function() {
          _this.funCreatBullet();
          count++;
          count > 15 && Windown_1.Windown.FishBongDem.unschedule(_this.funCreatItem);
        }, .2);
        this.gunBD.playerBD.isMe && this.bulletSongAm.init(this.itemDrag.timeUse, this.idGunNow);
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        this.offCountDownTime();
        Windown_1.Windown.FishBongDem.setTimeout(this.timeOutBackToNormalGun = function() {
          _this.gunBD.playerBD.backToCurrentGun();
          _this.removeNodePanel();
        }, this.itemDrag.timeUse);
      };
      StateGunSongAm.prototype.funCreatBullet = function() {
        var item = cc.instantiate(this.itemTempPlate);
        item.parent = this.parentItemTemplate;
        item.active = true;
        item.scale = 0;
        item.y = 0;
        var actionScale = cc.scaleTo(1.2, 3);
        var actionMove = cc.moveTo(1.2, 0, 950);
        var actionFade = cc.sequence(cc.delayTime(.8), cc.fadeOut(.4));
        item.runAction(cc.sequence(cc.spawn(actionScale, actionMove, actionFade), cc.callFunc(function() {
          item.destroy();
        })));
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffectNoStop(audio.soundWave);
      };
      StateGunSongAm.prototype.countDownTime = function(time) {
        var _this = this;
        cc.log("time la: " + time);
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = true;
        time--;
        lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
        Windown_1.Windown.FishBongDem.setInterval(this.timeOutCountDown = function() {
          time--;
          lb.string = "Th\u1eddi gian c\xf2n l\u1ea1i:" + Number.parseInt(time) + "s";
          cc.Tween.stopAllByTarget(lb.node);
          cc.tween(lb.node).to(.2, {
            scale: 1.4
          }).to(.2, {
            scale: 1.1
          }).start();
          if (time <= 0) {
            Windown_1.Windown.FishBongDem.unschedule(_this.timeOutCountDown);
            lb.node.active = false;
          }
          if (time <= 5 && _this.gunBD.playerBD.isItemAuto) {
            _this.rotate(cc.v2(Windown_1.Windown.RandomNumber(-400, 400), Windown_1.Windown.RandomNumber(-180, 180)));
            _this.cancleAtack();
          }
        }, 1);
      };
      StateGunSongAm.prototype.offCountDownTime = function() {
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutCountDown);
        var lb = this.gunBD.playerBD.lbTimeCD;
        lb.node.active = false;
      };
      StateGunSongAm.prototype.sendUsing = function() {
        if (null == this.point) return;
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        var pointTarget = this.point.clone();
        var point = Windown_1.Windown.FishBongDem.convertVec(pointTarget);
        sfsObj.putDouble("PointX", point.x);
        sfsObj.putDouble("PointY", point.y);
        sfsObj.putInt("Type", TypeItemDragBD_1.default.SONG_AM);
        sfsObj.putLong("Id", this.idGunNow);
        Windown_1.Windown.FishBongDem.sendRequest(CODE_EVT_1.default.UsingItemDrag, sfsObj);
        this.isAtack = true;
        this.offCountDownTime();
      };
      StateGunSongAm.prototype.rotate = function(point) {
        if (this.isAtack || !this.isCanLook) return;
        var diff = point.clone().subSelf(this.gunBD.pointInScreen);
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        this.currenAngle = angle;
        this.gunBD.bodyGun.angle = -angle;
        this.point = point;
      };
      StateGunSongAm.prototype.reset = function() {
        var _this = this;
        Windown_1.Windown.FishBongDem.unschedule(this.timeOutBackToNormalGun);
        Windown_1.Windown.FishBongDem.unschedule(this.funCreatItem);
        this.parentItemTemplate.destroyAllChildren();
        this.offCountDownTime();
        this.gunBD.setActiveBtn(true);
        cc.Tween.stopAllByTarget(this.nodeGun);
        cc.tween(this.nodeGun).to(.3, {
          scale: 0
        }).call(function() {
          Windown_1.Windown.FishBongDem.pool.putGunSongAm(_this.nodeGun);
        }).start();
      };
      StateGunSongAm.prototype.setTimeDelay = function(timeDelay) {};
      StateGunSongAm.prototype.updateCp = function(dt) {};
      StateGunSongAm.prototype.cancleAtack = function() {
        this.gunBD.playerBD.isMe && this.isCanLook && !this.isAtack && this.sendUsing();
      };
      StateGunSongAm.prototype.setFishIdTarget = function(id) {};
      StateGunSongAm.prototype.onClickAdd = function() {};
      StateGunSongAm.prototype.onClickSub = function() {};
      return StateGunSongAm;
    }(BaseStateGunBD_1.default);
    exports.default = StateGunSongAm;
    cc._RF.pop();
  }, {
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Windown": void 0,
    "../Bullet/BulletSongAmBD": "BulletSongAmBD",
    "../DeadBevhavior/PanelPoint": "PanelPoint",
    "../Fish/FISH_TYPE": "FISH_TYPE",
    "../Network/CODE_EVT": "CODE_EVT",
    "../Player/TypeItemDragBD": "TypeItemDragBD",
    "./BaseStateGunBD": "BaseStateGunBD"
  } ],
  TakeJp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "260dctt6kNNOLKdFludBypg", "TakeJp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var REQUEST_CODE_1 = require("../../../../Scritps/DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../../Scritps/Network/ConectManager");
    var LbMoneyChange_1 = require("../../../../Scritps/Obs/LbMoneyChange");
    var Windown_1 = require("../../../../Scritps/Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coinItem = null;
        _this.parentCoint = null;
        return _this;
      }
      NewClass.prototype.show = function(money, namePlayer) {
        var _this = this;
        var audio = Windown_1.Windown.FishBongDem.getSound();
        audio.playEffect(audio.noHu);
        audio.playEffect(audio.tienRoi, 1, true);
        for (var i = 0; i < 60; i++) {
          var timeDelay = i % 3 + Windown_1.Windown.RandomNumber(0, 5) / 10;
          var node = cc.instantiate(this.coinItem);
          node.active = true;
          node.zIndex = 1;
          node.parent = this.parentCoint;
          this.startXu(node, timeDelay);
        }
        this.scheduleOnce(function() {
          audio.playEffect(audio.multiplyAppear);
        }, 5);
        this.getComponentInChildren(LbMoneyChange_1.default).resetLb();
        this.getComponentInChildren(LbMoneyChange_1.default).setMoney(money);
        this.scheduleOnce(function() {
          var nodeAction = cc.find("Layer 2", _this.node);
          nodeAction.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
            audio.stopEffect(audio.tienRoi);
            _this.node.destroy();
            var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
            sfsObj.putInt("gt", GAME_TYPE_1.default.BongDem);
            sfsObj.putInt("mt", money);
            sfsObj.putUtfString("nn", namePlayer);
            sfsObj.putUtfString("dt", "100");
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
          })));
        }, 7);
      };
      NewClass.prototype.startXu = function(node, timeDelay) {
        var _this = this;
        node.opacity = 0;
        node.stopAllActions();
        var start = cc.v2(Windown_1.Windown.RandomNumber(-600, 600), 400);
        var scaleStart = Windown_1.Windown.RandomNumber(300, 600) / 1e3;
        node.scale = scaleStart;
        var end = cc.v2(start.x, -400);
        var time = Windown_1.Windown.RandomNumber(1.5, 2.5);
        timeDelay += Windown_1.Windown.RandomNumber(0, 10) / 10;
        node.angle = Windown_1.Windown.RandomNumber(0, 360);
        node.setPosition(start);
        var action1 = cc.spawn(cc.rotateBy(time, Windown_1.Windown.RandomNumber(360, 1080)), cc.moveTo(time, end));
        node.runAction(cc.sequence(cc.delayTime(timeDelay), cc.callFunc(function() {
          node.opacity = 255;
          node.getComponent(cc.Animation).play("Coin");
        }), action1, cc.callFunc(function() {
          _this.startXu(node, 0);
        })));
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "coinItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentCoint", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../../Scritps/Network/ConectManager": void 0,
    "../../../../Scritps/Obs/LbMoneyChange": void 0,
    "../../../../Scritps/Windown": void 0
  } ],
  ThangLon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3f78lBriRGGJtMP7eoeqrr", "ThangLon");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GAME_TYPE_1 = require("../../../Scritps/Game/GAME_TYPE");
    var ConectManager_1 = require("../../../Scritps/Network/ConectManager");
    var LbMoneyChange_1 = require("../../../Scritps/Obs/LbMoneyChange");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSf = [];
        _this.spImgFish = null;
        _this.lb = null;
        _this.finish = null;
        return _this;
      }
      NewClass.prototype.init = function(fishType, player, money) {
        var _this = this;
        return new Promise(function(r, j) {
          _this.getComponent(cc.Animation).play("ThangLon");
          _this.spImgFish.spriteFrame = _this.listSf[fishType - 70];
          _this.lb.time = 2;
          _this.lb.setMoney(money);
          var vec = player.gunFishBd.pointInScreen.clone();
          player.playerSiting > 2 ? vec.y -= 300 : vec.y += 70;
          _this.node.setPosition(vec);
          _this.scheduleOnce(function() {
            if (player.isMe && (28 == fishType || 27 == fishType)) {
              var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
              sfsObj.putInt("gt", GAME_TYPE_1.default.BongDem);
              sfsObj.putInt("mt", money);
              sfsObj.putUtfString("nn", player.namePlayer);
              sfsObj.putUtfString("dt", fishType.toString());
              ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.AddBigWin, sfsObj);
            }
            _this.node.destroy();
          }, 4);
          _this.finish = r;
        });
      };
      NewClass.prototype.aniFinish = function() {
        this.finish && this.finish();
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "listSf", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "spImgFish", void 0);
      __decorate([ property(LbMoneyChange_1.default) ], NewClass.prototype, "lb", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
    "../../../Scritps/Game/GAME_TYPE": void 0,
    "../../../Scritps/Network/ConectManager": void 0,
    "../../../Scritps/Obs/LbMoneyChange": void 0
  } ],
  ThuocKeAuto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "661bfU/3dZGtYIdrpyfb/DJ", "ThuocKeAuto");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
    var GUN_TYPE_BD_1 = require("../../Gun/GUN_TYPE_BD");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ThuocKeAuto = function(_super) {
      __extends(ThuocKeAuto, _super);
      function ThuocKeAuto() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listId = [];
        _this.idTarget = -1;
        _this.colider = null;
        _this.ext = null;
        _this.isValibe = false;
        _this.timeCheck = 0;
        return _this;
      }
      ThuocKeAuto.prototype.onLoad = function() {
        this.colider = this.getComponent(cc.BoxCollider);
      };
      ThuocKeAuto.prototype.onCollisionEnter = function(other, me) {
        var id = other.tag;
        id == this.idTarget || this.listId.includes(id) || this.listId.push(id);
      };
      ThuocKeAuto.prototype.onCollisionExit = function(other, me) {
        var id = other.tag;
        var indexOf = this.listId.indexOf(id);
        indexOf > -1 && this.listId.splice(id, 1);
      };
      ThuocKeAuto.prototype.targetPoint = function(point) {
        var diff = point.clone().subSelf(this.node.getPosition());
        var angle = 180 * Math.atan2(diff.x, diff.y) / Math.PI;
        this.node.angle = -angle;
        var mag = cc.Vec2.distance(point, this.node.getPosition());
        this.node.height = mag;
        this.colider.size.height = mag;
        this.colider.offset.y = mag / 2;
      };
      ThuocKeAuto.prototype.setIdTarget = function(id) {
        this.idTarget = id;
        this.reset();
      };
      ThuocKeAuto.prototype.reset = function() {
        this.listId.length = 0;
        this.isValibe = true;
      };
      ThuocKeAuto.prototype.update = function(dt) {
        this.listId.length > 0 ? this.timeCheck += dt : this.timeCheck = 0;
        if (this.timeCheck > 4 && this.ext.player.gunFishBd.stateGun.type != GUN_TYPE_BD_1.default.SET) {
          cc.log("success");
          this.ext.offTarget();
          this.timeCheck = 0;
        }
      };
      ThuocKeAuto = __decorate([ ccclass ], ThuocKeAuto);
      return ThuocKeAuto;
    }(cc.Component);
    exports.default = ThuocKeAuto;
    cc._RF.pop();
  }, {
    "../../Gun/GUN_TYPE_BD": "GUN_TYPE_BD"
  } ],
  TimeOut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89425WWN5NNbq4G6EQ0ePty", "TimeOut");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
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
        _this.lbInfo = null;
        _this.lbTime = null;
        _this.funCD = null;
        return _this;
      }
      NewClass.prototype.show = function(info) {
        var _this = this;
        this.node.active = true;
        this.lbInfo.string = info;
        this.unschedule(this.funCD);
        var time = 10;
        this.lbTime.string = time.toString();
        this.schedule(this.funCD = function() {
          time--;
          _this.lbTime.string = time.toString();
          time < 0 && _this.onClickClose();
        }, 1);
      };
      NewClass.prototype.onClickClose = function() {
        var _this = this;
        this.unschedule(this.funCD);
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbInfo", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTime", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Scritps/Windown": void 0
  } ],
  TypeItemDragBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5798agvfBVJKJDydruSrX5M", "TypeItemDragBD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TypeItemDragBD = function() {
      function TypeItemDragBD() {}
      TypeItemDragBD.LAZE = 1;
      TypeItemDragBD.BOOM = 2;
      TypeItemDragBD.SONG_AM = 3;
      TypeItemDragBD.MUI_KHOAN = 4;
      TypeItemDragBD.END_MUI_KHOAN = 5;
      TypeItemDragBD.GUN_FIRE = 6;
      TypeItemDragBD.BOOM_NGUYEN_TU = 7;
      TypeItemDragBD.MAT_THAN = 8;
      TypeItemDragBD.DINH_BA = 9;
      return TypeItemDragBD;
    }();
    exports.default = TypeItemDragBD;
    cc._RF.pop();
  }, {} ],
  TypePlayerEffectBD: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72479F6p35PsbE+4jL5Yrx9", "TypePlayerEffectBD");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TypePlayerEffectBD = function() {
      function TypePlayerEffectBD() {}
      TypePlayerEffectBD.ICE = 1;
      TypePlayerEffectBD.SPEED = 2;
      TypePlayerEffectBD.TARGET = 3;
      TypePlayerEffectBD.AUTO = 4;
      return TypePlayerEffectBD;
    }();
    exports.default = TypePlayerEffectBD;
    cc._RF.pop();
  }, {} ],
  "mesh-texture-flagBD": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1724a2FqpdE7qCv7UxkuWZo", "mesh-texture-flagBD");
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
  }, {} ]
}, {}, [ "DinhBa", "DropBoom", "ItemBoom", "BaseBulletBD", "BulletFire", "BulletLazeBD", "BulletMatThan", "BulletMuiKhoanBD", "BulletNormal", "BulletSongAmBD", "CamMayBongDem", "BaseFishColision", "BaseFishDeaditemDrag", "ColisionBoomNguyenTu", "ColisionCrab", "ColisionCrabBoom", "ColisionCrabEndMuiKhoan", "ColisionCrabGunFire", "ColisionCrabMuiKhoan", "ColisionCrabSongAm", "ColisionDinhBa", "ColisionFish74", "ColisionHaiThanDead", "ColisionItemHaiThan", "ColisionLocXoay", "ColisionMatThan", "ColisionNormal", "PanelPoint", "BaseFishBD", "BaseFishDead", "FISH_DEAD_BD_TYPE", "FishDeadBoom", "FishDeadCaXau", "FishDeadChildHT", "FishDeadGroup", "FishDeadGroup4", "FishDeadHaiThan", "FishDeadJackpot", "FishDeadMutilReward", "FishDeadNoEffect", "FishDeadNormal", "FishDeadNormalRd", "FishDeadRua", "FishDeadTrieuHoi", "FishDeadTruyGai", "FishDeadVongQuay", "BaseEffectFish", "EffectSet", "FISH_TYPE", "FishBD70View", "FishBDBoomView", "FishBDCaTran", "FishBDCaTranView", "FishBDCaXau", "FishBDChildHaiThanView", "FishBDGroup", "FishBDGroup3View ", "FishBDGroup4", "FishBDGroup4View", "FishBDHaiThan", "FishBDHaiThanView", "FishBDJackpotView", "FishBDManager", "FishBDMuiKhoanView", "FishBDMutil", "FishBDNormal", "FishBDNormalView", "FishBDRua", "FishBDSongAmView", "FishBDTruyGaiView", "FishBdMutilView", "FishStateBD", "ScaleFish", "FishBDView", "FishBongDem", "ItemBongDem", "PoolBongDem", "BaseStateGunBD", "GUN_TYPE_BD", "GunFishBD", "MatThan", "StateGunFire", "StateGunLaze", "StateGunMuiKhoan", "StateGunNormal", "StateGunSet", "StateGunSongAm", "HelpBongDem", "ItemLichSuJackpot", "ItemNhiemVuFish", "LichSuJackpot", "CODE_EVT", "HandleAddItemDrag", "HandleChangeBD", "HandleChangeMoneyGunFishBD", "HandleCreatFishBD", "HandleCreatTrieuHoi", "HandleFishColisionBD", "HandleGunAtackBD", "HandleIceAllFishBD", "HandleInfoFishRoomBD", "HandleNotFindFishBD", "HandleOtherJoinRoom", "HandlePlayerUsingItemFishBD", "HandleRemoveAllListFishBD", "HandleRemoveListFishBD", "HandleRotateGunBD", "HandleSetTimeFishEffectBD", "HandleTakeItemFish", "HandleTimeOutPlayBD", "HandleUsingItemDrag", "IResponseBD", "CrabVongQuay", "NotiFish", "TakeJp", "BaseItemDrag", "BasePlayerBD", "DefineSpeedGunBD", "BaseEffectPlayer", "PlayerUsingAuto", "PlayerUsingIce", "PlayerUsingSpeed", "PlayerUsingTarget", "ThuocKeAuto", "TypePlayerEffectBD", "PlayerBD", "PlayerBDManager", "TypeItemDragBD", "SoundBongDem", "ThangLon", "TimeOut", "mesh-texture-flagBD" ]);