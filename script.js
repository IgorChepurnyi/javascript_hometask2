function colonOdd(){
    const num = prompt(`Введіть багатозначне число`);
    let arrStr="";
    for(let i = 0; i < num.length; i++){
        arrStr = arrStr + num[i];
        if(num[i] % 2 == 1 && num[i+1] % 2 == 1){
            arrStr = arrStr + ":";
            }
        }
    console.log(arrStr);
    alert(arrStr);

}
function changeRegister(){
    const str = prompt(`Введіть кириличні символи різного регістру`);
    let arrStr="";
    let z="";
    const cyrillicPattern = /[\u0400-\u04FF]/;
    if (cyrillicPattern.test(str) == true){
        for(let i = 0; i < str.length; i++){
                if(str[i] == str[i].toUpperCase()){
                    z = str[i].toLowerCase();
                }
                else{
                    z = str[i].toUpperCase()
                }
            arrStr = arrStr + z;
            }
    console.log(arrStr);
    alert(arrStr);
    }
    else{alert("Введіть кириличні символи!!!!")}
}


function leapYear(){
    const start = prompt(`Ведіть перший рік діапазону`);
    const end = prompt(`Ведіть другий рік діапазону`);
    if (isNaN(start && end)){
        alert("введіть число, а не текст!!!");
    }
    else{
        let leapYearstr="";
        let centuryBegin = String(Math.floor(start/100))+"00";
        for (let leapYearcounter = Number(centuryBegin); leapYearcounter <= end; leapYearcounter = leapYearcounter + 4){
            if (leapYearcounter >= start && leapYearcounter <= end){
            leapYearstr = leapYearstr + String(leapYearcounter) + ", ";
            }
        }
    alert(leapYearstr);
    }
}
function primeNumber(){
    const inpNum = prompt(`Ведіть число`);
    if (isNaN(inpNum)){
        alert("введіть число, а не текст!!!");
    }
    else{
        let counter = 0;
        for (let i = 1; i < inpNum; i++){
            if (inpNum % i == 0){
            counter = counter + 1;
            }
        }
        if(counter>1)
        {
            alert(`число ${inpNum} складене`)
        } else
        {
            alert(`число ${inpNum} просте`)
        }
    }
}
function nameFunction(){
    console.log(nameFunction.name);
}