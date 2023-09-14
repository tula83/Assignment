

function handle_submit(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    console.log(fname)
    document.getElementById("result").innerHTML=fname + " " + lname;
}
