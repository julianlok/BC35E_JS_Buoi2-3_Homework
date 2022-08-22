/**
 *  Bài 5: Tính tổng 2 ký số
 *  - Đầu vào
 *      + number;
 *  - Xử lý
 *      + hangChuc = Math.floor(n / 10);
 *      + hangDV = Math.floor(n % 10);
 * 
 *      + tong = hangChuc + hangDV;
 *  - Đầu ra
 *      + show tong
 */

document.getElementById('btnKySo').onclick = function () {
    //Đầu ra
    var so = document.getElementById('so').value * 1;

    //Xử lý
    var hangChuc = Math.floor(so / 10);
    var hangDv = Math.floor(so % 10);

    tong = hangChuc + hangDv;

    //Đầu ra
    var ketQua5 = '<p class="result">Tổng 2 ký số là ' + tong + '</p>';
    document.getElementById('showSo').innerHTML = ketQua5;
};