import { question } from "readline-sync";
/**
 * Hàm tính chu vi  
 * @param r Bán kính
 * @returns Giá trị chu vi
 */
function chuvi(r: number): number {
    return 2*3.14*r;
}
/**
 * Hàm tính diện tích
 * @param r Bán kính
 * @returns Giá trị diện tích
 */
function dientich(r:number): number {
    return 3.14*r*r;
}
/**
 * Hàm tính chu vi diện tích
 */
function chuvidientich(): void {
    let r: number;
    do {
        r = Number(question("Nhap ban kinh: "))
    } while (r <= 0);
    console.log(`Chu vi: ${chuvi(r)}`);
    console.log(`Dien tich: ${dientich(r)}`);
}

chuvidientich();