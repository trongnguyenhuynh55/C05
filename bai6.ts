import { question } from "readline-sync";
/**
 * Tìm số chính phương đầu tiên
 * @param m Số bắt đầu
 * @param n Số kết thúc
 * @returns Số chính phương đầu tiên
 */
function cnsochinhphuong(m: number, n: number): number {
    let ketqua: number = 0;
    for(let i: number = m; i <= n; i++) {
        if (Number.isInteger(Math.sqrt(i)) === true) {
            ketqua = i;
            break
        }
    }
    return ketqua;
}
/**
 * hàm tìm số chính phương đầu tiên
 */
function sochinhphuong(): void {
    let m: number = Number(question("Nhap so bat dau: "));
    let n: number = Number(question("Nhap so ket thuc: "));
    console.log(cnsochinhphuong(m, n));
}

sochinhphuong()