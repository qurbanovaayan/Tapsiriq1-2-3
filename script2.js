
//2. Maaşdan vergi çıxma
//Funksiya yaz:
//maaş qəbul etsin
//13% vergi çıx
//net maaşı qaytar
const netMaas=(maas)=>{
    let vergi=maas*0.13;
    return maas-vergi;
}
console.log(netMaas(1200));