export default function filter(arr,date){
    let newArr = []
    const months = [
        {
            "month": "Jan",
            "number": 1
        },
        {
            "month": "Feb",
            "number": 2
        },
        {
            "month": "Mar",
            "number": 3
        },
        {
            "month": "Apr",
            "number": 4
        },
        {
            "month": "May",
            "number": 5
        },
        {
            "month": "Jun",
            "number": 6
        },
        {
            "month": "Jul",
            "number": 7
        },
        {
            "month": "Aug",
            "number": 8
        },
        {
            "month": "Sep",
            "number": 9
        },
        {
            "month": "Oct",
            "number": 10
        },
        {
            "month": "Nov",
            "number": 11
        },
        {
            "month": "Dec",
            "number": 12
        }
    ]

    //Agarrar todas las materias que toquen ese día de la semana (Lunes, Martes, Miercoles...)
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i]["DIAS"].length; j++){
            if(date.toString().includes(arr[i]["DIAS"][j])){
                newArr.push(arr[i])
                break
            }
        }
    }
    
    //Quedarte solo con las materias en las que el año sea igual
    //HAY UN BUG AQUÍ
    for(let i = 0; i< newArr.length; i++){
        if(date.toString().split(" ")[3] != newArr[i]["FECHA_INICIO"].split(" ")[2]){
            newArr.splice(i,1)
        }
    }
    //Quedarte solo con las materias que estén en el rango de meses (asignar cada mes a un numero y ver que esté entre el rango)

    
    let monthNum = months.find(o => o.month === date.toString().split(" ")[1])["number"]
    for(let j = 0; j< newArr.length; j++){
        let monthStart = months.find(o => o.month === newArr[j]["FECHA_INICIO"].split(" ")[0])["number"]
        let monthEnd = months.find(o => o.month === newArr[j]["FECHA_FIN"].split(" ")[0])["number"]

        if(monthNum < monthStart || monthNum > monthEnd){
            newArr.splice(j,1)
        }
    }
    
    //Quedarte solo con las materias que estén en el rango de días (dentro del mes seleccionado, ver si la materia termina ese mes)
    //SE PASA POR UNA SEMANA
    for(let k = 0; k< newArr.length; k++){
        let monthStart = months.find(o => o.month === newArr[k]["FECHA_INICIO"].split(" ")[0])["number"]
        let monthEnd = months.find(o => o.month === newArr[k]["FECHA_FIN"].split(" ")[0])["number"]
        let startDay = newArr[k]["FECHA_INICIO"].split(" ")[1]
        let endDay = newArr[k]["FECHA_FIN"].split(" ")[1]

        if(monthNum == monthStart){
            if(parseInt(date.toString().split(" ")[2]) < startDay){
                newArr.splice(k,1)
            }
        }else if(monthNum == monthEnd){
            if(parseInt(date.toString().split(" ")[2]) > endDay){
                newArr.splice(k,1)
            }
        }

    }
    return newArr
}