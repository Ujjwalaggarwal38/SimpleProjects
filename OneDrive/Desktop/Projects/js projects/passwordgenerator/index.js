class Password{
    constructor(){
        console.log("Password generator");
        this.pass="";
    }
    generatepass(len){
        let chars="abcdefghijklmnopqrstuvwxyz";
        let num="1234567890";
        let schars="!@#$%&"
        if(len<3){
            console.log("Password must be greator than 3 characters")
        }
        else{
            let i=0;
           while(i<len){
            this.pass+=chars[Math.floor(Math.random()*chars.length)];
            this.pass+=num[Math.floor(Math.random()*num.length)];
            this.pass+=schars[Math.floor(Math.random()*schars.length)];
            i+=3;
            }
            this.pass = this.pass.substring(0,len);
            return this.pass;
        }
    }
}
let p=new Password();
console.log(p.generatepass(4));