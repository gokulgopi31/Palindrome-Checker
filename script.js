const palindrome = ()=>{
  const input = document.getElementById("text-input").value;
  if(input===""){
    alert("Please input a value");
    return;
  }
  const output = document.getElementById("result");
  const cleanedText = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const isPalindrome = cleanedText===cleanedText.split('').reverse().join('');
  if(isPalindrome){
    output.textContent = `${input} is a palindrome.`;
  }
  else{
    output.textContent = `${input} is not a palindrome.`;
  }
}
