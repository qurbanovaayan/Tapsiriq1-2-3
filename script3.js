
//3. Endirim sistemi
//Funksiya yaz:
//alış-veriş məbləği qəbul etsin
//100+ → 10% endirim
//200+ → 20% endirim
//nəticə: ödəniləcək məbləğ
const endirim = (mebleg) => {
    if(mebleg>=200){
        return mebleg-mebleg*0.20;
    }
    else if (mebleg>=100){
        return mebleg-mebleg*0.10;
    }
    else{
         return mebleg;
    }
    

}
console.log(endirim (300));
console.log(endirim (120));
console.log(endirim (70));
