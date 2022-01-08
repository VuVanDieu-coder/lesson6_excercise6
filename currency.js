function currency(){
    debugger;
    let money = Number(document.getElementById("money").value);
    let From_Currency = document.getElementById("From_Currency").value;
    let To_Currency = document.getElementById("To_Currency").value;
    // let scale = "";
    let result = "";

    if(From_Currency == "VND" && To_Currency == "USD"){
        scale = 1/23.300;
        result = money * scale;
        document.getElementById("result").innerHTML= result + " " + To_Currency;
    }else if (From_Currency == "USD" && To_Currency == "VND"){
        scale = 23.300;
        result = money * scale;
        document.getElementById("result").innerHTML= result + " " + To_Currency;
    }else
    document.getElementById("result").innerHTML = "Hệ thống chưa cập nhật giá trị";
}