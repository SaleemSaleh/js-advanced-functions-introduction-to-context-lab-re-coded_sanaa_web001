// Your code here
function createEmployeeRecord (arraySt){

  return {
      firstName : arraySt[0],
      familyName: arraySt[1],
      title : arraySt[2],
<<<<<<< HEAD
      payPerHour: arraySt[3],
=======
      payPerHour: arraySt[3]
>>>>>>> 6c58acc21e7be8097831f33d4881d9849e204207
      timeInEvents : [],
      timeOutEvents:[]
  }
}
<<<<<<< HEAD

function createEmployeeRecords (arraySt){
  return arraySt.map (x => createEmployeeRecord(x));
}

function createTimeInEvent (object , date){
  let arrDa = date.split(" ") ;
  let ob = {
    type:"TimeIn" ,
    hour: parseInt(arrDa[1]),
    date:arrDa[0]
  };
  object.timeInEvents.push(ob);
  return object;
}

function createTimeOutEvent (object , date){
  let arrDa = date.split(" ") ;
  let ob = {
    type:"TimeOut" ,
    hour: parseInt(arrDa[1]),
    date:arrDa[0]
  };
  object.timeOutEvents.push(ob);
  return object;
}

function hoursWorkedOnDate (date){
  let arrDa = date.split(" ") ;
  for (let i = 0 ; i < this.timeInEvents.length ;i++ ) {
    if(arrDa[0] === this.timeInEvents[i].date){
      return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour )/ 100;
    }
  }
}

function wagesEarnedOnDate ( date){
  return hoursWorkedOnDate(object , date) * object.payPerHour ;
}

function allWagesFor (object ){
  let hour = 0;
  for (let i = 0 ; i < object.timeInEvents.length ; i++ ) {
    hour += ((object.timeOutEvents[i].hour - object.timeInEvents[i].hour) / 100 );
  }
  return hour * object.payPerHour ;
}

function findEmployeeByFirstName (srcArray,firstName ){
  let s= srcArray.find((x) => x.firstName === firstName);
  return s;
}

function calculatePayroll (srcArray ){
  let sum = 0 ;
  for (let i = 0 ; i < srcArray.length ; i++ ) {
    for (let j = 0 ; j < srcArray[i].timeInEvents.length ; j++ ){
      sum += wagesEarnedOnDate(srcArray[i],srcArray[i].timeInEvents[j].date) ;
    }
  }
  return sum ;
}
