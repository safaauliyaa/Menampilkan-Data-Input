function terimainput(){
    var x=document.forms['datadiri']['nama'].value;
    var y=document.forms['datadiri']['email'].value;
    var z=document.forms['datadiri']['ttl'].value;
    var a=document.forms['datadiri']['gender'].value;
    var b=document.forms['datadiri']['username'].value;
    var c=document.forms['datadiri']['pw'].value;

    var tabel = document.getElementById("tabelinput")
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = x
    cell2.innerHTML = y
    cell3.innerHTML = z
    cell4.innerHTML = a
    cell5.innerHTML = b
    cell6.innerHTML = c

alert ("data berhasil di entry");
}