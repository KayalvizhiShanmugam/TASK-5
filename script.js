//ANONYMOUS FUNCTION
//A.PRINT ODD NUMBERS IN AN ARRAY:
var arr=[15,27,42,54,73,46,11];
var odd = function(arr){
    var result=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}   
    console.log(odd(arr)); 
//output
//[15,27,73,11]
//IIFE FUNCTION TO PRINT ODD NUMBERS
( function odd (arr){
    var result=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    console.log(result);
}
)([12,13,14,15,17,19,21])
//OUTPUT:
//[ 13, 15, 17, 19, 21 ]
//C.SUM OF ALL NUMBERS IN AN ARRAY:
var arr1 =[1,4,5,7,9,11,13,15];
var Sum = function(arr1){
    var result = [];
    var sum = 0;
    for(var i=0;i<arr1.length;i++)
    {
       sum = sum+arr1[i];
    }
    result.push(sum);
    return result;
}
console.log(Sum(arr1));
//output:
//[65];
//IIFE FUNCTION FOR SUM OF ALL NUMBERS IN ARRAY
(function (arr1){
    var sum = 0;
    for(var i=0;i<arr1.length;i++)
    {
       sum = sum+arr1[i];
    }
    return sum;
    console.log(sum);
}
)([1,4,5,7,9,11,13,15])
//OUTPUT:
//65
//B.CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY:
var string = "love is part of the life".split(" ");
var s = [];
var title = function(string)
{
    for(var i=0; i<string.length; i++)
    {
        s[i]=string[i][0].toUpperCase()+string[i].slice(1);
        s.push(string[i]);
    }
    return s.join(" ");
}
console.log(title(string));
//output:
//Love Is Part Of The Life life.
//IIFE FUNCTION FOR STRING TO TITLE CAPS:
( function(str)
{
    str=str.toLowerCase().split(" ");
    for(var i=0; i<str.length; i++)
    {
        str[i]=str[i].charAt().toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');
    console.log(str);
}
)("love is part of the life")
//OUTPUT:
//Love Is Part Of The Life
//D.PRIME NUMBER IN ARRAY:
var num=[3,4,5,6,7,8,9,10,11,12,13,17,19,23];
var prime = function(num){
   var result=[];
   for(var i=0;i<num.lengtrh;i++)
   {   let count =0;
       for(var j=1;j<=num[i];j++){
           if(num[i] % j == 0)
           {
               count++;
           }
       }

       if(count==2)
       {
           result.push(num[i]);
       }
   }
   return result;
}
console.log(prime(num))
//output:
//[3,5,7,11,13,17,19,23].
//IIFE FUNCTION FOR PRIME NUMBER:
(function(num){
    var result=[];
    for(var i=0;i<num.lengtrh;i++)
    {   let count =0;
        for(var j=1;j<=num[i];j++){
            if(num[i] % j == 0)
            {
                count++;
            }
        }
 
        if(count==2)
        {
            result.push(num[i]);
        }
    }
    return result;
 }
 console.log(result)
 )([3,4,5,6,7,8,9,10,11,12,13,17,19,23])
//OUTPUT:
 //3,5,7,11,13,17,19,23
//E.palindrome or not:
var array = [122,321,399,343,121,232,2332];
let palin1=function(array)
{
   result =[];
   for(let i=0; i<array.length; i++)
   {
       let temp = array[i];
       let s=0;
       while(temp!=0)
       {
           let t=temp%10;
           s=(s*10)+t;
           temp=Math.floor(temp/10);
       }
       if(s==array[i])
       {
           result.push(s);
       }

   }return result;
}
console.log(palin1(array));
//output:
//(4)[343,121,232,2332]
//IIFE FUNCTION FOR PALINDROME
(function(array)
{
   var result =[];
   for(let i=0; i<array.length; i++)
   {
       let temp = array[i];
       let s=0;
       while(temp!=0)
       {
           let t=temp%10;
           s=(s*10)+t;
           temp=Math.floor(temp/10);
       }
       if(s==array[i])
       {
           result.push(s);
       }

   }return result;
console.log(result);
})([122,321,399,343,121,232,2332])
//OUTPUT:
//[343,121,232,2332]
//G.REMOVE DUPLICATE ELEMENTS IN AN ARRAY
var arr2=[1,2,3,4,2,5,6,3,7,1];
var result =[];
var duplicate =function(arr2)
{
   for(var i=0; i<arr2.length; i++)
   {
       if(!result.includes(arr2[i]))
       {
           result.push(arr2[i]);
       }
   }
   return result;
}
console.log(duplicate(arr2))
//output:
//[1, 2, 3, 4, 5, 6, 7].
//IIFE FUNCTION FOR REMOVE DUPLICATE ELEMENTS
(function(arr2)
{
  var result=[];
   for(var i=0; i<arr2.length; i++)
   {
       if(!result.includes(arr2[i]))
       {
           result.push(arr2[i]);
       }
   }
   return result;
console.log(result);
})([1,2,3,4,2,5,6,3,7,1])
//OUTPUT
//[1, 2, 3, 4, 5, 6, 7].
//H.ROTATE AN ARRAY BY K TIMES
var arr3=[1,2,3,4,5,6]
var k=3;
var rotate = function(arr3)
{
   for(var i=0;i<=k;i++)
   {
       var first=arr[0];
       for(var j=0;j<arr3.length-1;)
       {
           arr3[j]=arr3[j+1];
       }
       arr3[arr3.length-1]=first;
   }
   return arr3;
}
console.log(rotate(arr3));
//OUTPUT:
//[4,5,6,1,2,3]
//IIFE FUNCTION TO ROTATE AN ARRAY:
(function(arr3)
{
  var k=3;
   for(var i=0;i<=k;i++)
   {
       var first=arr[0];
       for(var j=0;j<arr3.length-1;)
       {
           arr3[j]=arr3[j+1];
       }
       arr3[arr3.length-1]=first;
   }
   return arr3;
console.log(arr3);
})([1,2,3,4,5,6])
//OUTPUT:
//[4,5,6,1,2,3]
//F.MEDIAN OF TWO SORTED ARRAY:
var  median = function(a,b,n){
    var x=0;
    var y=0;
    var count;
    var m1 = -1;
    var m2 = -1;
    for(count = 0; count <=n; count++)
    {
       if(x==n)
       {
           m1=m2;
           m2=b[0];
           break;
       }
       else if(y==n)
       {
           m1=m2;
           m2=a[0];
           break;
       }
       if(a[x]<=b[y])
       {
           m1=m2;
           m2=a[x];
           x++;
       }
       else
       {
           m1=m2;
           m2=b[y];
           y++;
       }
    }
    return((m1+m2)/2)
   };
   console.log(median([1,2,3,4,5],[6,7,8,9,10],5))

//ARROW FUNCTIONS:
//A.PRINT ODD NUMBERS IN AN ARRAY
   var arr=[12,13,14,15,16,17];
   var odd=arr.filter((ele)=>ele%2!=0);
   console.log(odd);
//OUTPUT:
//[ 13, 15, 17 ];
//B.SUM OF ALL NUMBERS IN ARRAY:
   var arr=[12,13,14,15,16,17];
   var sum=arr.reduce((acc,cv)=>acc+cv,0);
   console.log(sum);
//OUTPUT:
//87;
//PRIME NUMBERIN AN ARRAY:
var arr=[3,5,7,8,9,10,11,12,13,14];
var prime = num =>{
  var result=[];
  for(var i=0;i<num.length;i++)
  {
    let count=0;
    for(var j=1;j<=num[i];j++){
      if(num[i] % j== 0)
      {
        count++;
      }
    }
      if(count==2)
      {
        result.push(num[i]);
      }
    }
    return result;
  }
console.log(prime(arr));
//output:
//[ 3, 5, 7, 11, 13 ]
//E.PALINDROME IN AN ARRAY:
var arr =[122,321,399,343,121,232,2332];
let palin= arr =>{
  var result=[];
  for(let i=0;i<arr.length;i++)
  {
    let temp=arr[i];
    let s=0;
    while(temp!=0)
    {
      let t=temp%10;
      s=(s*10)+t;
      temp=Math.floor(temp/10);
    }
    if(s==arr[i])
    {
      result.push(s);
    }
   } return result;
}
   console.log(palin(arr));
   //OUTPUT:
   //[ 343, 121, 232, 2332 ]
   //B.STRINGS TO TITLE CAPS:
   var string = "love is part of the life".split(" ");
var s = [];
var title= string =>{
  for(var i=0;i<string.length;i++)
  {
    s[i]=string[i][0].toUpperCase()+string[i].slice(1);
    s.push(string[i])
  }
  return s.join(" ");
}
console.log(title(string));
//OUTPUT:
//Love Is Part Of The Life 
