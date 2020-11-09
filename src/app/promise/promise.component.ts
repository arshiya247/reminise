import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
//result=document.getElementById('resultPromise');
  constructor() {

  }
   dell = {
   brand: 'Dell',
    hardDisk: '1TB',
     colour: 'Black'
   }
   promiseVal;
   NA = {
       brand: 'NA',
       hardDisk: 'NA',
       colour: 'NA'
     }
     dellAvailable() {
       return true;
     }
     buyLaptop;
    promiseIns=new Promise(
      (resolve,reject)=>{
        if(this.dellAvailable()){
          return setTimeout(()=>{
            resolve(this.dell);},3000
          );
        }else{
          return reject(this.NA);
         }
      }
    )
  ngOnInit(): void {
    
    this.buyLaptop=fetch('https://jsonplaceholder.typicode.com/posts').
   then(response=>response.json());
}
promiseMethod(){
// document.getElementById('resultPromise').innerText='hiii';
this.promiseIns.then(response=>{document.getElementById('resultPromise')
.innerText=JSON.stringify(response)}).
catch(response=>{document.getElementById('resultPromise')
.innerText=JSON.stringify(response)})
}

async asyncMethod(){
   let data= await this.promiseIns;
    // document.getElementById('resultAsync').innerText=
    // 'Arshiya';
    document.getElementById('resultAsync').innerText=JSON.stringify(data);
}

// fetchApiMethod(){
//   document.getElementById('resultApi').innerText=JSON.stringify(this.buyLaptop);
//   // this.buyLaptop.then(res=>console.log(this.buyLaptop));
  
// }

async fetchApiMethod(){
let data = await this.buyLaptop;
document.getElementById('resultApi').innerText=JSON.stringify(data); 
}
}

// promiseVal;
// dell = {
//   brand: 'Dell',
//   hardDisk: '1TB',
//   colour: 'Black'
// }
// hp = {
//   brand: 'hp',
//   hardDisk: '2TB',
//   colour: 'Black'
// }
// NA = {
//   brand: 'NA',
//   hardDisk: 'NA',
//   colour: 'NA'
// }
// dellAvailable() {
//   return false;
// }
// hpAvailable() {
//   return false;
// }
// result=document.getElementById('resultPromise');

// async function myFunction() {
//   return 'In Asynccc'
// }
// this.promiseVal =myFunction().then(res => console.log(res)).catch(res => console.log(res));
// let promiseIns = new Promise((resolve, reject) => {
//   if (this.dellAvailable()) {
//     return setTimeout(() => {
//       resolve(this.dell);
//     }, 3000)
//   } else if (this.hpAvailable()) {
//     return setTimeout(() => {
//       resolve(this.hp)
//     }, 3000)
//   } else {
//     reject(this.NA)
//   }
// });
// promiseIns.then(response => {
//   console.log('from the then block == ', response);
//   this.promiseVal = response
// }).
//   catch(response => {
//     console.log('from the then=catch block == ', response);
//     this.promiseVal = response
//   });
// }

