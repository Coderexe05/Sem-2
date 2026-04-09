function calculateresult(){
    let n=document.getElementById("subjects").ariaValueMax;
    let total = 0;
    for(let i=0; i<=n; i++){
        let marks= parseFloat (prompt("Enter marks for subject" + i + ":"));
        totalmarks += marks;
    }
    let averagemarks = totalmarks/n;
    let grade;
    let result;
    if(averagemarks>=90){
        grade="A+";
    }
    else if(averagemarks>=80){
        grade="A";
    }
    else if(averagemarks>=70){
        grade="B";
    }
    else if(averagemarks>=60){
        grade="C";
    }
    else if(averagemarks>=50){
        grade="D";
    }
    else{
        grade="E";
    }
    if(averagemarks>=50){
        result="Pass";
    }
    else{
        result="Fail";
    }
    document.getElementById("result").innerHTML = "Total Marks: "+ totalmarks+"<br>" +
        "Average Marks: "+average.tofix(2)+"<br>"+
        "Grade: "+grade+"<br>"+
        "Result: "+result;
}