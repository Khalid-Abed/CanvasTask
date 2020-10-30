let mycanvs1=document.getElementById('mycanvs1'),
    mycontext1=mycanvs1.getContext('2d'),
    
    mycanvs2=document.getElementById('mycanvs2'),
    mycontext2=mycanvs2.getContext('2d'),
    
    mycanvs3=document.getElementById('mycanvs3'),
    mycontext3=mycanvs3.getContext('2d'),
    
    mycanvs4=document.getElementById('mycanvs4'),
    mycontext4=mycanvs4.getContext('2d'),

    w=mycanvs1.width,
    h=mycanvs1.height,
   
    
    subject1=document.getElementById('php'),
    subject2=document.getElementById('laravel'),
    subject3=document.getElementById('html'),
    subject4=document.getElementById('js'),
    
    
    inp1=document.getElementById('inp1'),
    inp2=document.getElementById('inp2'),
    inp3=document.getElementById('inp3'),
    inp4=document.getElementById('inp4'),
    values=[inp1,inp2,inp3,inp4],


    BarChart=document.getElementById('BarChart'),
    LineChart=document.getElementById('LineChart'),
    PieChart=document.getElementById('PieChart'),
    DoughnutChart=document.getElementById('DoughnutChart'),
    draw=document.getElementById('draw');

    console.log(w,h);


    let last=document.getElementById('last')
     mycontext5= last.getContext('2d');
               
  
     colors=['#003366','#bf00ff','#ff00bf','#ff8000'];
     
    
    draw.addEventListener('click',function(){
    ///////////////  Start Canvs number one 1 //////////////////////
    let sum=parseInt(inp1.value)+parseInt(inp2.value)+parseInt(inp3.value)+parseInt(inp4.value);
        if(sum == 100 ){
            if( subject1.value !='' && subject2.value !='' && subject3.value !='' && subject4.value !='')
            {
                if(BarChart.checked)
                {
                    mycontext1.clearRect(0,0,w,h);
                    mycontext1.font='13px Arial'
                    mycontext1.lineWidth=2
                    mycontext1.moveTo(15,h-15)
                    mycontext1.lineTo(15,0)
                    mycontext1.stroke()
                    mycontext1.moveTo(15,h-15)
                    mycontext1.lineTo(w,h-15)
                    mycontext1.stroke();
                    for(var i=0;i<=100;i+=10)
                    {
                        mycontext1.fillText(i,0,h-15-i*3)
                    }
                    var subjects=[subject1,subject2,subject3,subject4],
                        index=25;
                    for(let i=0; i<subjects.length; i++){
                        mycontext1.fillText(subjects[i].value,index,h-3);
                        index+= 70;
                    }
                    mycontext1.fillStyle='#003366';
                    mycontext1.fillRect(20,h-15-inp1.value* h/100,30,inp1.value*h/100);
                    mycontext1.fillStyle='#bf00ff';
                    mycontext1.fillRect(90,h-15-inp2.value*h/100,30,inp2.value*h/100);
                    mycontext1.fillStyle='#ff00bf';
                    mycontext1.fillRect(160,h-15-inp3.value*h/100,30,inp3.value*h/100);    
                    mycontext1.fillStyle='#ff8000';
                    mycontext1.fillRect(230,h-15-inp4.value*h/100,30,inp4.value*h/100);
                }
                   
            
         //////////////////////////// End Canvs number 1 ////////////////////////////////
    
         ////////////////////////// Canvs number Two 2 ///////////////////////////////////
    
                if(LineChart.checked)
                {
                    mycontext2.clearRect(0,0,w,h);
                    mycontext2.font='13px Arial'
                    mycontext2.lineWidth=2
                    mycontext2.moveTo(15,h-15)
                    mycontext2.lineTo(15,0)
                    mycontext2.stroke()
                    mycontext2.moveTo(15,h-15)
                    mycontext2.lineTo(w,h-15)
                    mycontext2.stroke();
                    for(var i=0;i<=100;i+=10)
                    {
                        mycontext2.fillText(i,0,h-15-i*3)
                    }
                    var subjects=[subject1,subject2,subject3,subject4],
                        index=20;
    
                    for(let i=0; i<subjects.length; i++){
                        mycontext2.fillText(subjects[i].value,index,h-3);
                        index+= 70;
                    }
                    mycontext2.lineWidth=2;
                    mycontext2.moveTo(20,h-15-inp1.value* 3)
                    mycontext2.lineTo(90,h-15-inp2.value*3)
                    mycontext2.lineTo(160,h-15-inp3.value*3)
                    mycontext2.lineTo(230,h-15-inp4.value*3)
                    mycontext2.stroke();
            
                }
                
         ////////////////////////////// End Canvs number Two 2 ///////////////////////////////////
    
        //////////////////////// Start Canvs Number three 3 ////////////////////////////////////
           if(PieChart.checked){
            let arr=[inp1,inp2,inp3,inp4],
            start=0;
            //colors=['#003366','#bf00ff','#ff00bf','#ff8000'];
                for(var i=0;i<arr.length;i++)
                {
                    var end=((arr[i].value /100) * 2*Math.PI)+start;
                    mycontext3.lineWidth=2;
                    mycontext3.fillStyle=colors[i];
                    mycontext3.beginPath();
                    mycontext3.moveTo(w/2,h/2)
                    mycontext3.arc(w/2,h/2,w/3,start,end);
                    mycontext3.lineTo(w/2,h/2)
                    mycontext3.fill()
                    mycontext3.stroke()
                    mycontext3.closePath()
                    
                    /////// Draw Label /////
                    var slice_angle = 2 * Math.PI * arr[i].value/100;
                    var pieRadius = Math.min(w/3,h/3);
                    var labelX =w/2 + (pieRadius / 2) * Math.cos(start+slice_angle/2);
                    var labelY = h/2 + (pieRadius / 2) * Math.sin(start+slice_angle/2); 
                    mycontext3.fillStyle = "white";
                    mycontext3.font = "bold 20px Arial";
                    mycontext3.fillText(arr[i].value+"%", labelX,labelY);
                    start=end;
                 }
      
           }
                
        ///////////////////////////////////// End Canvs number three 3 /////////////////////////////////////////////
       
        ////////////////////////////// Start Canvs number four 4 ///////////////////////////////////
    
     
            
            if(DoughnutChart.checked){
    
                let arr=[inp1,inp2,inp3,inp4],
                 start=0;
                 
                for(var i=0;i<arr.length;i++)
                {
                    var end=((arr[i].value /100) * 2*Math.PI)+start;
                    mycontext4.lineWidth=2;
                    mycontext4.fillStyle=colors[i];
                    mycontext4.beginPath();
                    mycontext4.moveTo(w/2,h/2)
                    mycontext4.arc(w/2,h/2,w/3,start,end);
                    mycontext4.fill()
                    mycontext4.stroke()
                    mycontext4.closePath()
    
                    /////////Drw Label ////////////////
                    var slice_angle = 2 * Math.PI * arr[i].value/100;
                    var pieRadius = Math.min(w/3,h/3);
                    var labelX =w/2 + (pieRadius / 2) * Math.cos(start+slice_angle/2);
                    var labelY = h/2 + (pieRadius / 2) * Math.sin(start+slice_angle/2); 
                    mycontext4.fillStyle = "white";
                    mycontext4.font = "bold 20px Arial";
                    mycontext4.fillText(arr[i].value+"%", labelX,labelY);
                    start=end;
                }
                mycontext4.fillStyle='white';
                mycontext4.beginPath();
                mycontext4.arc(w/2,h/2,30,0,Math.PI*2);
                mycontext4.fill()
                mycontext4.closePath()
    
            }
        ////////////////////////////////// Ends Canvs number four 4 ///////////////////////////////////
        //////////////////////////////////////////////////////////////////////
                   
            for(var i=1;i<5;i++)
            {
                    
                    mycontext5.fillStyle=colors[i-1]
                    mycontext5.beginPath();
                    mycontext5.arc(150,25*i,5,0,2*Math.PI);
                    mycontext5.fill()
                    mycontext5.closePath()
                    mycontext5.fillStyle='Black'
                    mycontext5.fillText(subjects[i-1].value,160,25*i)
                    mycontext5.fillText(values[i-1].value+'%',190,25*i)
            }
                    

        //////////////////////////////////////////////////////////////////////
            
            }else{
                alert('please enter name of subjects')
            }
            
        }else{
    alert('sum must be equall to 100');
   }
});








