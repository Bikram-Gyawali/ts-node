export class MathUtil{
    public static printMathTable(value:number):string{
        let temp:string="";
        for(let i:number=1;i<=10;i++){
            temp+=`${value} * ${i}= ${value*i} \n`
        }
        console.log("\n")
        return temp
    }
}