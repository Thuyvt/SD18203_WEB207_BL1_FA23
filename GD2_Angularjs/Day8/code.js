let table_eval_tbody=document.getElementsByTagName("table")[1];
let tr=table_eval_tbody.querySelectorAll("tr");
let arrTr=Array.from(tr);
let arrMark=[];
let str_mark_sv="";
let str_mark_sv_login="";
let quiz = 1;
let count = 14
for(i=1;i<arrTr.length;i++){
    let td=arrTr[i].children;
    let arrTd=Array.from(td);
    let _login=arrTd[2].innerText.trim();
    let obj_sv={
        login:_login,msv:_login.substring(_login.length-7),
        mark:Number(arrTd[count].innerText.trim().split(" ")[0])*10
    };
    str_mark_sv+=obj_sv.msv+"\t"+obj_sv.mark+"\n";
    str_mark_sv_login+=obj_sv.login+" = "+obj_sv.mark+"\n";
    console.log("Danh sách có tên login để tra cứu xem thôi:\n" +str_mark_sv); 
    console.log("Danh sách có tên login để tra cứu xem thôi:\n" +str_mark_sv_login); 
    document.write('<h2>Danh sách dùng copy vào FUGE:</h2><textarea rows="30">'+ str_mark_sv + '</textarea><h2>Danh sách có tên login để tra cứu xem thôi:</h2><textarea rows="30">'+ str_mark_sv_login + '</textarea>');
    quiz ++;
    count ++
}
