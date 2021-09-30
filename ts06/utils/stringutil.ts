export class StringUtil{
    public static printLength(str:string):number{
        return str.length; 
    }
    public static printTriangle(str:string):string{
        let temp:string="\n";
        for(let i:number=0;i<=str.length-1;i++){ 
            console.log('\n')
            for(let j:number=0;j<=i;j++){
                temp+=`${str.charAt(j)}`
            }
            temp+=`\n`;
        }
        return temp;
    }
}