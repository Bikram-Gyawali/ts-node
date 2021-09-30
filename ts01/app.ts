let courseName:string="backend dev"
console.log(courseName);

let printNumbers=(start:number,end:number):void=>{
    let temp:string="";
    if(start<end){

        for(let i:number=start;i<=end;i++){
            temp+=`${i} `;
        }
        console.log(temp);
    }else{
        console.log("Invalid Number");
    }
}

printNumbers(10,50);