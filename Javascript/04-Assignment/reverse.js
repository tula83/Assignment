function reverse(str){
    var n=str.length;
   var ans="";
    for(let i=n-1;i>=0;--i){
        ans+=str[i]
           
    }
   
   return ans;
}


function count_vowels(str){
    let vowels=['a','e','i','o','u'];

    let n=str.length;
   var count=0;
    for(let i=0;i<n;++i){
         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
            count+=1;
         }
    }

    return count;
}


function pallindrome_checker(str){
      let n=str.length;
      let n2=n-1;
      for(let i=0;i<n/2;++i){
          if(str[i]!=str[n2]){
            return false;
          }
          n2-=1;

      }
return true;
}

function title_case_manipualtion(str){
    let arr=str.split(" ");
    
    let n=arr.length;
    
    for(let i=0;i<n;++i){
         arr[i]=arr[i].charAt(0).toUpperCase(0)+arr[i].slice(1);
         
       
    }
    
    console.log(arr.join(" "))

}


console.log(reverse("hello"))

console.log("number of vowels is ",count_vowels("abcdef"))

console.log("isPallindrome",pallindrome_checker("abac"))

title_case_manipualtion("this is a")