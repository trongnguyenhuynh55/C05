import { question } from "readline-sync";
/**
 * Hàm tính giá tiền đơn hàng
 * @param soluong Số lượng hàng hóa
 * @param dongia Đơn giá 1 món hàng
 * @returns Số tiền của đơn hàng
 */
function tien(soluong: number, dongia: number): number {
    return soluong*dongia;
}

/**
 * Hàm tiền và thuế
 */
function tienvathue(): void {
    let soluong: number;
    let dongia: number;
    do {
        soluong = Number(question("Nhap so luong: "));
        dongia = Number(question("Nhap don gia: "))
    } while (soluong <= 0 || dongia <= 0);
    console.log(`So tien: ${tien(soluong, dongia)}`);
    console.log(`Thue: ${tien(soluong, dongia)*10/100}`);
}

tienvathue();