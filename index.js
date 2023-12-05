function clearAll(){
  const ans = document.getElementById('confirmation');
  ans.innerHTML=''
}
function answer(){
 const ans = document.getElementById('confirmation')
 const text = document.createElement('p');
  text.textContent='You are correct';
  clearAll();
  ans.append(text)
}
function tryagain(){
   const ans = document.getElementById('confirmation')
 const text = document.createElement('p');
  text.textContent='Incorrect, try again';
  const att =document.createAttribute('style')
  att.value='color:red';
  text.setAttributeNode(att)
  console.log(text)
  clearAll();
  ans.append(text)
}
