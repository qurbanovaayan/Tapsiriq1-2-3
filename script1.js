//1. Nested Function – Stipendiya hesabla
//Funksiya yaz:
//tələbənin ortalama balını qəbul etsin
//daxili funksiya faiz hesablasın
//80+ bal → "Stipendiya qazanır"
//əks halda → "Qazana bilmir"
const Stipendiya = function (ortalama) {
    function yoxla() {
        if (ortalama >= 80) {
            return "stipendiya qazanir";
        }
        else {
            return "stipendiya qazanmir";
        }
    }

    return yoxla();
}

console.log(Stipendiya(85));