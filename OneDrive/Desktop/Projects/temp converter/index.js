const calcutemp = () => {
    const number= document.getElementById('temp').value ;
    const temp_sel=document.getElementById('temp_diff');
    const value=temp_diff.options[temp_sel.selectedIndex].value;

    const celtofah = (cel) => {
        let value1 = ((cel* 9/5)+32);
        return value1;
    }

    const fahtocel = (fah) => {
        let value2 = ((fah-32)* 5/9);
        return value2;
    }

    let result;

    if(value== 'cel'){
        result = celtofah(number);
        document.getElementById('Resultcontainer').innerHTML=`= ${result}˚Fahrenheit`;
    }
    else{
        result = fahtocel(number);
        document.getElementById('Resultcontainer').innerHTML=`= ${result}˚Celsius`;
    }
}