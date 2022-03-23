function Lay_gia_tri_cu(){
    return document.getElementById("giatricu").innerText;
};
function In_gia_tri_cu(so) {
    document.getElementById("giatricu").innerText = so;
};
function Lay_ket_qua() {
    return document.getElementById("giatrixuat").innerText;
};
function In_Ket_qua(so) {
    document.getElementById("giatrixuat").innerText = so;
};


 function dinhdang(num){
     var n=Number(num);
    var k= n.toLocaleString("en");
    return k;
 };
 In_Ket_qua(dinhdang(9999));
 function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''))
};
var con_so = document.getElementsByClassName('num');
 for(var i=0; i<con_so.length; i++) {
     con_so[i].addEventListener('click', function() {
         var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua())
         if(ket_qua != NaN) {
             ket_qua = ket_qua + this.id;
             In_Ket_qua(ket_qua)
         }
     })
 };
 var he_thong = document.getElementsByClassName('system'); 
 for(var i=0; i < he_thong.length; i++) { 
     he_thong[i].addEventListener('click', function() { 
         if(this.id == "clear") { 
             In_Ket_qua(""); 
             In_gia_tri_cu(""); 
         } 
         else if(this.id == "clear_number") { 
             let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString(); 
             if(ket_qua) { 
                 ket_qua = ket_qua.substr(0, ket_qua.length -1) 
                 In_Ket_qua(ket_qua) 
             } 
         } 
     }) 
 };
 