// functions

function getVal(id){
    const cnt=parseInt(document.getElementById(id).innerText);
return cnt;
}
function setVal(id,val){
    document.getElementById(id).innerText=val;

}

function call(e){
     if(e.target.matches("button")){
            if(e.target.innerText==="Call"){
               
              const serviceType=  e.target.parentElement.parentElement.children[2].innerText;
              const serviceNum=  e.target.parentElement.parentElement.children[3].innerText;
            //   console.log(serviceType,serviceNum)
            
           let coin_cnt=getVal("coin_cnt");
          
           coin_cnt-=20;
           if(coin_cnt<0){
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগেব।");
           }
           else{
            alert("📞 Calling "+serviceType+" "+serviceNum);
            setVal("coin_cnt",coin_cnt);
           }

            }
            else {
                //copy button
                 const serviceNum = e.target.parentElement.parentElement.children[3].innerText;
                 navigator.clipboard.writeText(serviceNum);
               let  cpy_cnt=getVal("copy_cnt");
               cpy_cnt+=1;
               setVal("copy_cnt",cpy_cnt);
                 
            }
        }
}



let buttons = document.getElementsByClassName('love-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
     let x=getVal("love_cnt");
     x+=1;
     setVal('love_cnt',x);

  });
}

//call button

document.getElementById('national').addEventListener('click',
    function(e){
       call(e);    
    }
)




