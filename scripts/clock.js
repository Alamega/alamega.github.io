function clock()
{
  var date = new Date();  
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()];
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  var clock = document.getElementById('clock');
  clock.innerHTML = [time[0],time[1],time[2]].join(':');
  setInterval("clock()", 1000);
}  

clock();