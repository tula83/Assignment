
function sum(arr){
    let sum=0;
     for(let i=0;i<arr.length;++i){
        sum+=arr[i]
     }
     return sum;


}



function max_min(arr){
     console.log(Math.max(...arr),Math.min(...arr))
}



function remove_duplicates(arr){
   let  arr2= new Set(arr)
   //let ans=Array.from(arr2)
   console.log([...arr2])
      
}



function chunk(arr){
 let size=2;
 let ans=[];
 for(let i=0;i<arr.length;){
         ans.push(arr.slice(i,i+size));
         i+=size;
 }
console.log(ans)
}



console.log(sum([1,2,3,4]))

max_min([12,3,2,1,34,888])

remove_duplicates([2,3,2,3,4])

chunk([1,2,3,4,5])
