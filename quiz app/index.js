const getQuestion=async()=>{
   try {
      const response=await fetch("http://127.0.0.1:3000/quiz")
      const data=await response.json()
      console.log(data)
   } catch (error) {
      console.log(error)
   }
 
}
getQuestion()
// var my_qsn=[
//    {
//       qsn:"What is the full form of HTML ?",
//       a:'Hyper Text Markup Language',
//       b:'Home text making language',
//       c: 'Hygene Making and Testing language',
//       d: 'Home made test lever',
//       ans:'a'
//    },

//    {
//      qsn:"Which of the following is not OOP ?",
//      a:"C",
//      b:"Java",
//      c:"C++",
//      d:"Python",
//      ans:'a'
//    },

//    {
//      qsn:"Who invented C ?",
//      a:"James Ghosling",
//      b:"Dennis Ritchie",
//      c:"Bjarne Stroustrup",
//      d:"Guido Van Rossum",
//      ans:'b'
//    },
//    {
//       qsn:"Javascript is a",
//       a:"Server side scripting language",
//       b:"client side scripting language",
//       c:"Low level programming language",
//       d:"Database management languade",
//       ans:"b"
//    }
// ]

// let index=0;
// let correct=0;
// let total=my_qsn.length;
// let wrong=0;
// var option=document.querySelectorAll('.answer');
// reset=()=>{
//    option.forEach((ans)=>{
//       ans.checked=false;
//    })
// }

// end=()=>{
// let final=document.querySelector('#wrapper').innerHTML=`<h1 style="text-align:center; margin-top: 20px">Thank You</h1>
// <br> <hr><h2 style="text-align:center; margin-top: 20px">You Scored ${correct} out of ${total}` ;

// }



// load_question=()=>{ 
//    if(index==total){
//       return end();
//    }
//    reset();
//    document.getElementById('question').innerText=my_qsn[index].qsn;
//    option[0].nextElementSibling.innerHTML=my_qsn[index].a;
//    option[1].nextElementSibling.innerHTML=my_qsn[index].b;
//    option[2].nextElementSibling.innerHTML=my_qsn[index].c;
//    option[3].nextElementSibling.innerHTML=my_qsn[index].d;
// }




// function get_answer(){
//    var answer;
//   option.forEach((ans)=>{
//      if(ans.checked){
//        answer= ans.value;
//      }
//   })
//   return answer;
// }



// function submit_btn(){
//  let data=my_qsn[index];
//  let ans=get_answer();
//  if(ans==data.ans){
//    correct++;
//  }
//  else{
//    wrong++;
//  }
//  index++;
//  //console.log(correct);
//  //console.log(wrong);
//  load_question();
// }


// load_question();



