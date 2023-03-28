import { question } from "readline-sync";
/**
 * Hàm kiểm tra năm nhuận
 * @param nam Số năm cần kiểm tra
 * @returns Là true nếu năm nhuận, là false nếu không phải
 */
function cnnamnhuan(nam: number): boolean {
    let ketqua: boolean = true;
    if ((nam%4 === 0 && nam%100 !== 0) || nam%400 === 0)
        ketqua = true;
    else
        ketqua = false;
    return ketqua;
}

/**
 * Hàm kết quả năm có phải năm nhuận không
 */
function namnhuan(): void {
    let nam: number = Number(question("Nhap nam: "));
    console.log(cnnamnhuan(nam));
}

namnhuan();