/**
 *  Bài 4: Tính diện tích, chu vi hình chữ nhật
 *  - Đầu vào
 *      + chieuDai
 *      + chieuRong
 *  - Xử lý
 *      + dienTich = chieuDai * chieuRong
 *      + chuVi = (chieuDai + chieuRong) * 2
 *  - Đầu ra
 *      + show dienTich
 *      + show chuVi
 */

document.getElementById('btnDtCv').onclick = function () {
    //Đầu vào
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;

    //Xử lý
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    //Đầu ra
    var ketQua4 = '<p class="result">Diện tích là ' + dienTich + 'm²</p>';
    ketQua4 += '<br>';
    ketQua4 += '<p class="result">Chu vi là ' + chuVi + 'm</p>';

    document.getElementById('showDtCv').innerHTML = ketQua4;
}

