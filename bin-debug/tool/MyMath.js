var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tool;
(function (tool) {
    var MyMath = (function (_super) {
        __extends(MyMath, _super);
        function MyMath() {
            var _this = _super.call(this) || this;
            _this = _super.call(this) || this;
            return _this;
        }
        MyMath.balanceRandom = function (param1) {
            param1 = flash.checkInt(param1);
            var _loc9_ = flash.checkInt(0);
            var _loc11_ = NaN;
            var _loc2_ = flash.checkInt(param1);
            if (param1 < 50) {
                _loc2_ = flash.checkInt(100 - param1);
            }
            var _loc3_ = (3 * _loc2_ - 100) / (100 - _loc2_);
            var _loc4_ = new Array();
            var _loc5_ = new Array();
            var _loc6_ = flash.checkInt(100);
            var _loc7_ = flash.checkInt(1);
            var _loc8_ = _loc7_ / _loc6_;
            _loc9_ = flash.checkInt(0);
            while (_loc9_ < _loc6_) {
                _loc11_ = _loc8_ * _loc9_;
                _loc4_[_loc9_] = (1 - _loc11_) * Math.pow(_loc11_, _loc3_);
                if (_loc9_ == 0) {
                    _loc5_[_loc9_] = _loc4_[_loc9_];
                }
                else {
                    _loc5_[_loc9_] = _loc5_[_loc9_ - 1] + _loc4_[_loc9_];
                }
                _loc9_++;
            }
            var _loc10_ = Math.random() * _loc5_[_loc6_ - 1];
            _loc9_ = flash.checkInt(0);
            while (_loc9_ < _loc6_) {
                if (_loc10_ < _loc5_[_loc9_]) {
                    if (param1 < 50) {
                        return 1 - _loc8_ * _loc9_;
                    }
                    return _loc8_ * _loc9_;
                }
                _loc9_++;
            }
            return 1;
        };
        MyMath.DrawSector = function (param1, param2, param3, param4, param5, param6, param7) {
            if (param2 === void 0) { param2 = 200; }
            if (param3 === void 0) { param3 = 200; }
            if (param4 === void 0) { param4 = 100; }
            if (param5 === void 0) { param5 = 27; }
            if (param6 === void 0) { param6 = 270; }
            if (param7 === void 0) { param7 = 16711680; }
            var _loc11_ = undefined;
            var _loc12_ = undefined;
            var _loc13_ = undefined;
            var _loc14_ = undefined;
            var _loc15_ = undefined;
            param1.graphics.beginFill(param7);
            param1.graphics.lineStyle(0, 16711680);
            param1.graphics.moveTo(param2, param3);
            param5 = Math.abs(param5) > 360 ? flash.trannumber(360) : flash.trannumber(param5);
            var _loc8_ = Math.ceil(Math.abs(param5) / 45);
            var _loc9_ = param5 / _loc8_;
            _loc9_ = _loc9_ * Math.PI / 180;
            param6 = param6 * Math.PI / 180;
            param1.graphics.lineTo(param2 + param4 * Math.cos(param6), param3 + param4 * Math.sin(param6));
            var _loc10_ = 1;
            while (_loc10_ <= _loc8_) {
                param6 = param6 + _loc9_;
                _loc11_ = param6 - _loc9_ / 2;
                _loc12_ = param2 + param4 / Math.cos(_loc9_ / 2) * Math.cos(_loc11_);
                _loc13_ = param3 + param4 / Math.cos(_loc9_ / 2) * Math.sin(_loc11_);
                _loc14_ = param2 + param4 * Math.cos(param6);
                _loc15_ = param3 + param4 * Math.sin(param6);
                param1.graphics.curveTo(_loc12_, _loc13_, _loc14_, _loc15_);
                _loc10_++;
            }
            if (param5 != 360) {
                param1.graphics.lineTo(param2, param3);
            }
            param1.graphics.endFill();
        };
        MyMath.FirstLetterToUpper = function (param1) {
            var _loc2_ = param1.split("");
            _loc2_[0] = _loc2_[0].toUpperCase();
            return _loc2_.join("");
        };
        MyMath.StringFormChange = function (param1, param2, param3) {
            var _loc4_ = param1.split(param2);
            return _loc4_.join(param3);
        };
        MyMath.cast = function (param1) {
            var _loc2_ = new flash.ByteArray();
            _loc2_.writeMultiByte(param1 + "@", "");
            var _loc3_ = "";
            var _loc4_ = flash.checkInt(0);
            while (_loc4_ < _loc2_.length) {
                _loc3_ = _loc3_ + (_loc2_[_loc4_].toString(16) + " ");
                _loc4_++;
            }
            return _loc3_;
        };
        MyMath.encryptNum = function (param1) {
            return param1 / 2 + 1;
        };
        MyMath.decryptNum = function (param1) {
            return (param1 - 1) * 2;
        };
        MyMath.encryptInt = function (param1) {
            param1 = flash.checkInt(param1);
            return param1 + 5;
        };
        MyMath.decryptInt = function (param1) {
            param1 = flash.checkInt(param1);
            return param1 - 5;
        };
        return MyMath;
    }(egret.HashObject));
    tool.MyMath = MyMath;
    __reflect(MyMath.prototype, "tool.MyMath");
})(tool || (tool = {}));
//# sourceMappingURL=MyMath.js.map