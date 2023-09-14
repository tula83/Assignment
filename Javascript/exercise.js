function factorial(num){
     let fact=1;
     for(let i=2;i<=num;++i){
        fact*=i;
     }
return fact;
    }

console.log("factorial of 4 is :",factorial(4))


// fibonacci sequence
function fibbonaci(num){
   let first=0,second=1,third;
   fibo=[]
   for(let i=1;i<=num;++i){
        third=first+second; 
        fibo.push(first);
       
        first=second;
        
        second=third;
      
    }
    console.log("Fibonacci Sequence is ")
    console.log(fibo.join(" "))
}

fibbonaci(10)

// prime number checker

function prime_checker(num){
     let flag=1;

     for(let i=2;i<=Math.sqrt(num);++i){
      if(num%i==0){
          flag=0;
          console.log(num,"is not a prime number ")
          break;
         }
     }
  
     if(flag==1){
      console.log(num,"is a prime number "); 
    }

}

prime_checker(13)

// filtering the array

function filter_even_or_odd(arr){
    
   let even=arr.filter((item,index)=>{
      return item%2==0
   })
   console.log(even)
      



   for(let i=0;i<arr.length;++i){
      if(arr[i]%2==0){
         console.log("even:",arr[i])
      }
      else{
         console.log("odd:",arr[i]);
      }
   }
}

filter_even_or_odd([1,2,3,4,6])
