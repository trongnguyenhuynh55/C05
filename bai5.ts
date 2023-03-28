import { question } from "readline-sync";

function cnsohoanthien(a: number): boolean {
    let ketqua: boolean = true;
    let x: number = 0;
    for(let i: number = 1; i <= a - 1; i++) {
        if (a%i === 0)
            x = x + i;
    }
    if (x === a)
        ketqua = true;
    else    
        ketqua = false;
    return ketqua
}
/**
 * Hàm kiểm tra phải số nguyên tố không
 */
function sohoanthien(): void {
    let a: number = Number(question("Nhap so: "))
    console.log(cnsohoanthien(a));
}

sohoanthien();