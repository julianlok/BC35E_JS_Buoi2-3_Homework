/**
 *  Bài 3: Quy đổi tiền
 *  - Đầu vào
 *      + USD
 *      + usdCur
 *  - Xử lý
 *      + VND = usdCur * USD
 *  - Đầu ra
 *      + show QuyDoiTien
 */

document.getElementById('btnExchange').onclick = function () {
    //Đầu vào
    var USD = 23500;
    var usdCur = document.getElementById('usdCur').value;
    
    //Xử lý
    var VND = usdCur * USD;

    //Format
    var currentFormat = new Intl.NumberFormat('VN-vn');

    //Đầu ra
    var ketQua3 = '<p class="result">' + usdCur + ' USD quy ra tiền việt là ' + currentFormat.format(VND) + ' VNĐ</p>'

    document.getElementById('showQuyDoiTien').innerHTML = ketQua3;
}