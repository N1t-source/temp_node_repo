const {readFile, writeFile} = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => {
  if (err) {
    console.log(err)
    return
  }
  const first =result;
  readFile('./content/first.txt', 'utf-8',(err,result)=> {
  if (err) {
    console.log(err)
    return
  }
const second =result;    
writeFile('./content/result-async.txt', 
  `You succesfully created the combination txt for first txt:${first} \nand Second txt:${second}
  \nhere is the combined one \n${first}${second}`
,(err,result)=>{
  if(err) {
    console.log(err);
    return
  } 
  console.log('done with this task')
})
  })
})
console.log('starting next task')