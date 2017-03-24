var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="jquery.d.ts" />
function calculateFare() {
    var insurance = $("#insurance").is(':checked');
    var fPrice = parseInt($("#fPrice").val());
    var pName = $("#pName").val();
    var adult = parseInt($("#adult").val());
    var infant = parseInt($("#infant").val());
    var lugg = parseInt($("#lugg").val());
    var airinfy = new AirInfy();
    airinfy.calculateInsuranceCharge(insurance);
    airinfy.calculatePasPrice(adult, infant, fPrice);
    airinfy.calculateLuggPrice(lugg);
    //alert("Luggae:"+ airinfy.calculateLuggPrice(lugg));
    //alert(airinfy.calculateInsuranceCharge(insurance) + airinfy.calculatePasPrice(adult,infant,fPrice) + airinfy.calculateLuggPrice(lugg));
    $("#cBook").css("display", "block");
    $("#tempPname").html(pName);
    $("#tPrice").html(airinfy.calculateInsuranceCharge(insurance) + airinfy.calculatePasPrice(adult, infant, fPrice) + airinfy.calculateLuggPrice(lugg) + "");
}
var Insurance = (function () {
    function Insurance() {
    }
    Insurance.prototype.calculateInsuranceCharge = function (isInsurance) {
        var insuranceCharge = 0;
        if (isInsurance == true) {
            insuranceCharge = 200;
        }
        return insuranceCharge;
    };
    return Insurance;
}());
var AirInfy = (function (_super) {
    __extends(AirInfy, _super);
    function AirInfy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AirInfy.prototype.calculatePasPrice = function (noofadult, noofinfant, basefare) {
        return (noofadult * basefare) + (noofinfant * (basefare / 2));
    };
    AirInfy.prototype.calculateLuggPrice = function (luggWeight) {
        var lugguageCharge = 0;
        if ((luggWeight - 15) > 1)
            lugguageCharge += ((luggWeight - 15) % 10) * 1000;
        return lugguageCharge;
    };
    AirInfy.prototype.calculateInsurance = function (isInsurance) {
        return _super.prototype.calculateInsuranceCharge.call(this, isInsurance);
    };
    return AirInfy;
}(Insurance));
