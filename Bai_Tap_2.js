/**
 *  Bài 2: Tính giá trị trung bình
 *  - Đầu vào
 *      + number_1 
 *      + number_2
 *      + number_3
 *      + number_4
 *      + number_5
 *  - Xử lý
 *      +  = (number1 + number2 + number3 + number4 + number5) / 5
 *  - Đầu ra
 *      + show Avg
 */

document.getElementById('btnAvg').onclick = function () {
    //Đầu vào
    var number_1 = document.getElementById('number_1').value * 1;
    var number_2 = document.getElementById('number_2').value * 1;
    var number_3 = document.getElementById('number_3').value * 1;
    var number_4 = document.getElementById('number_4').value * 1;
    var number_5 = document.getElementById('number_5').value * 1;

    //Xử lý
    var tinhAvg = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
    
    //Đầu ra
    var ketQua2 = '<p class="result">Giá trị trung bình là ' + tinhAvg + '</p>'

    document.getElementById('showAvg').innerHTML = ketQua2;
};

