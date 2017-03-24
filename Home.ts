/// <reference path="jquery.d.ts" />
function calculateFare(){
var insurance = $("#insurance").is(':checked')
    var fPrice = parseInt($("#fPrice").val());
    var pName = $("#pName").val();
    var adult = parseInt($("#adult").val());
    var infant = parseInt($("#infant").val());
    var lugg = parseInt($("#lugg").val());

    var airinfy:AirInfy = new AirInfy();
    airinfy.calculateInsuranceCharge(insurance);
    airinfy.calculatePasPrice(adult,infant,fPrice);
    airinfy.calculateLuggPrice(lugg);
    //alert("Luggae:"+ airinfy.calculateLuggPrice(lugg));
    //alert(airinfy.calculateInsuranceCharge(insurance) + airinfy.calculatePasPrice(adult,infant,fPrice) + airinfy.calculateLuggPrice(lugg));
    $("#cBook").css("display","block");
    $("#tempPname").html(pName);
    $("#tPrice").html(airinfy.calculateInsuranceCharge(insurance) + airinfy.calculatePasPrice(adult,infant,fPrice) + airinfy.calculateLuggPrice(lugg)+"");
}
class Insurance {
    calculateInsuranceCharge(isInsurance : boolean){
        var insuranceCharge = 0;
        if(isInsurance == true)
        {
            insuranceCharge = 200;   
        }
        return insuranceCharge;
    }
}

class AirInfy extends Insurance
{
    calculatePasPrice(noofadult : number,noofinfant : number,basefare : number){
        return (noofadult*basefare)+(noofinfant * (basefare/2));
    }

    calculateLuggPrice(luggWeight : number)
    {
        var lugguageCharge = 0;
        if((luggWeight-15) > 1)
            lugguageCharge +=((luggWeight-15)%10)*1000;
        return lugguageCharge;
    }

    calculateInsurance(isInsurance : boolean)
    {
        return super.calculateInsuranceCharge(isInsurance);
    }
}
