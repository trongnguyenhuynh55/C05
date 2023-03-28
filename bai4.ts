import { question } from "readline-sync";
/**
 * Hàm hỗ trợ đọc số chia ra âm dương và bằng 0
 * @param so Số cần đọc
 * @returns Cách đọc số đúng
 */
function cndocso(so: number): string {
    let ketqua: string = ""
    let a: string = "";
    let flag1: number = 1;
    if (so < 0) {
        a = "Am ";
        flag1 = 1;
    }
    else if (so > 0) {
        a = a;
        flag1 = 1;
    }
    else {
        a = "Khong";
        flag1 = 0;
    }
    if (flag1 = 0)
        ketqua = a;
    if (flag1 = 1)
        ketqua = a + chuc(so) + donvi(so);
    return ketqua;
}
/**
 * Hàm đọc số hàng chục
 * @param so số cần đọc
 * @returns trả về số đơn vị hàng chục
 */
function chuc(so: number): string {
    let b: string = "";
    switch (Math.abs(parseInt(String(so/10)))) {
        case 1: 
            b = "muoi "
            break;
        case 2: 
            b = "hai muoi "
            break;
        case 3: 
            b = "ba muoi "
            break;
        case 4: 
            b = "bon muoi "
            break;
        case 5: 
            b = "nam muoi "
            break;
        case 6: 
            b = "sau muoi "
            break;
        case 7: 
            b = "bay muoi "
            break;
        case 8:
            b = "tam muoi "
            break;   
        case 9: 
            b = "chin muoi "
            break;
        case 0: 
            b = ""
            break;
        }
    return b;
}
/**
 * Hàm trả về số hàng đơn vị
 * @param so Số cần đọc
 * @returns Trả về số hàng đơn vị
 */
function donvi(so: number): string {
    let c: string = "";
    switch (Math.abs(so%10) || Math.abs(so)) {
        case 0:
            c = "";
            break;
        case 1: 
            c = "mot"
            break;
        case 2: 
            c = "hai"
            break;
        case 3: 
            c = "ba"
            break;
        case 4: 
            c = "bon"
            break;
        case 5: 
            if (so === 5) 
                c = "nam"
            else
                c = "lam"
            break;
        case 6: 
            c = "sau"
            break;
        case 7: 
            c = "bay"
            break;
        case 8: 
            c = "tam"
            break;   
        case 9: 
            c = "chin"
            break;
        }
    return c;
}

/**
 * Hàm kiểm ra số 2 chữ số
 * Hàm đọc số 2 chữ số
 */
function docso(): void {
    let so: number;
    do {
        so = Number(question("Nhap so 2 chu so: "));
    } while(so <= -100 || so >= 100)
    console.log(cndocso(so));
}

docso();