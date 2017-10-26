var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var RaceList = (function () {
        function RaceList() {
        }
        return RaceList;
    }());
    iData.RaceList = RaceList;
    __reflect(RaceList.prototype, "iData.RaceList");
})(iData || (iData = {}));
iData.RaceList.HUMAN = new iData.Race("人类", new iData.BasicStatus(16, 25, 10, 10, 14, 10, 10), [new iData.BasicStatus(2, 4, 1, 2, 4, 2, 2), new iData.BasicStatus(2, 4, 1, 2, 4, 2, 2),
    new iData.BasicStatus(3, 3, 1, 2, 4, 3, 1), new iData.BasicStatus(3, 3, 1, 2, 4, 3, 1), new iData.BasicStatus(2, 3, 1, 3, 3, 2, 0),
    new iData.BasicStatus(2, 3, 2, 3, 3, 2, 0), new iData.BasicStatus(2, 3, 2, 3, 3, 2, 0), new iData.BasicStatus(2, 3, 2, 3, 3, 2, 0),
    new iData.BasicStatus(2, 2, 2, 2, 3, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0),
    new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(1, 2, 1, 1, 2, 1, 0), new iData.BasicStatus(1, 1, 1, 1, 1, 1, 0),
    new iData.BasicStatus(1, 1, 0, 1, 1, 1, 0), new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0)]);
iData.RaceList.ELF = new iData.Race("精灵", new iData.BasicStatus(18, 22, 10, 14, 10, 10, 10), [new iData.BasicStatus(3, 3, 2, 4, 2, 1, 2), new iData.BasicStatus(3, 3, 2, 4, 2, 1, 2), new iData.BasicStatus(3, 3, 1, 4, 2, 2, 1),
    new iData.BasicStatus(3, 3, 1, 4, 2, 2, 1), new iData.BasicStatus(2, 3, 1, 3, 3, 2, 0), new iData.BasicStatus(2, 3, 2, 3, 3, 2, 0),
    new iData.BasicStatus(2, 3, 2, 3, 3, 2, 0), new iData.BasicStatus(2, 3, 2, 3, 3, 2, 0), new iData.BasicStatus(2, 2, 2, 3, 2, 2, 0),
    new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0),
    new iData.BasicStatus(1, 2, 1, 1, 2, 1, 0), new iData.BasicStatus(1, 1, 1, 1, 1, 1, 0), new iData.BasicStatus(1, 1, 0, 1, 1, 1, 0),
    new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0)]);
iData.RaceList.GIANT = new iData.Race("巨人", new iData.BasicStatus(25, 16, 14, 10, 10, 10, 10), [new iData.BasicStatus(4, 2, 4, 2, 1, 2, 2), new iData.BasicStatus(4, 2, 4, 2, 1, 2, 2), new iData.BasicStatus(4, 2, 4, 2, 1, 3, 1),
    new iData.BasicStatus(3, 3, 4, 2, 1, 3, 1), new iData.BasicStatus(3, 2, 3, 3, 1, 2, 0), new iData.BasicStatus(3, 2, 3, 3, 2, 2, 0),
    new iData.BasicStatus(3, 2, 3, 3, 2, 2, 0), new iData.BasicStatus(3, 2, 3, 3, 2, 2, 0), new iData.BasicStatus(2, 2, 3, 2, 2, 2, 0),
    new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0),
    new iData.BasicStatus(2, 1, 1, 1, 2, 1, 0), new iData.BasicStatus(1, 1, 1, 1, 1, 1, 0), new iData.BasicStatus(1, 1, 1, 1, 0, 1, 0),
    new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0)]);
iData.RaceList.UNDEATH = new iData.Race("不死", new iData.BasicStatus(21, 19, 10, 10, 10, 14, 10), [new iData.BasicStatus(3, 3, 2, 2, 2, 4, 2), new iData.BasicStatus(3, 3, 2, 2, 2, 4, 2), new iData.BasicStatus(3, 3, 3, 2, 2, 4, 1),
    new iData.BasicStatus(3, 3, 3, 2, 2, 3, 1), new iData.BasicStatus(3, 2, 2, 3, 3, 3, 0), new iData.BasicStatus(3, 2, 2, 3, 3, 3, 0),
    new iData.BasicStatus(2, 2, 2, 3, 2, 3, 0), new iData.BasicStatus(2, 2, 2, 3, 2, 3, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0),
    new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 0),
    new iData.BasicStatus(1, 2, 1, 1, 2, 1, 0), new iData.BasicStatus(1, 1, 1, 1, 1, 1, 0), new iData.BasicStatus(1, 1, 1, 1, 0, 1, 0),
    new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0)]);
iData.RaceList.DWARF = new iData.Race("矮人", new iData.BasicStatus(18, 18, 10, 10, 10, 10, 14), [new iData.BasicStatus(2, 2, 1, 2, 2, 2, 4), new iData.BasicStatus(2, 2, 2, 1, 2, 2, 4), new iData.BasicStatus(2, 2, 2, 2, 1, 2, 3),
    new iData.BasicStatus(2, 2, 2, 2, 2, 1, 3), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 3), new iData.BasicStatus(3, 3, 2, 2, 2, 2, 2),
    new iData.BasicStatus(2, 3, 2, 2, 2, 2, 2), new iData.BasicStatus(3, 2, 2, 2, 2, 2, 2), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 2),
    new iData.BasicStatus(2, 2, 2, 2, 2, 2, 1), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 1), new iData.BasicStatus(2, 2, 2, 2, 2, 2, 1),
    new iData.BasicStatus(1, 2, 1, 1, 2, 1, 1), new iData.BasicStatus(1, 1, 1, 1, 1, 1, 1), new iData.BasicStatus(1, 1, 0, 1, 1, 1, 1),
    new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0)]);
iData.RaceList.list = [iData.RaceList.HUMAN, iData.RaceList.ELF, iData.RaceList.GIANT, iData.RaceList.DWARF, iData.RaceList.UNDEATH];
//# sourceMappingURL=RaceList.js.map