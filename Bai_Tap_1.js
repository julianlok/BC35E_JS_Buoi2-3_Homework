/**
 *  Bài 1: Tính tiền lương nhân viên
 *  - Đầu vào
 *      + soNgayLam = 10
 *      + LUONGNGAY = 200
 *  - Xử lý
 *      + tongLuong = soNgayLam * LUONGNGAY
 *  - Đầu ra
 *      + show tongLuong
 */

document.getElementById('btnTinhLuong').onclick = function () {
    //Đầu vào
    var soNgayLam = document.getElementById('soNgayLam').value;
    const LUONGNGAY = 200000;

    //Xử lý
    var tongLuong = soNgayLam * LUONGNGAY;

    //Format VND
    var currentFormat = new Intl.NumberFormat('VN-vn');

    //Đầu ra
    var ketQua1 = '<p class="result">Lương nhân viên là ' + currentFormat.format(tongLuong) + ' VNĐ</p>';

    document.getElementById('showLuong').innerHTML = ketQua1;
};
















