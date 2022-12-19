function isPositive(num) {
    if (Math.sign(num) === 1) {
      return true;
    }
  
    return false;
  }
  
  const calculateCostInMinutes = (minutes) => {
    return minutes*2;
  }
  
  const calculateCostInHour = (minutes) => {
    const hours = Math.ceil(minutes / 60);
    if(hours === 0)
    return 22;
  
   return hours*22;
  }
  
  const calculateCostInDay = (minutes) => {
    const day = Math.ceil((minutes / 60)/24);
    if(day === 0)
    return 60;
  
   return day*60;
  }
  
  const calculateCostInWeek = (minutes) => {
    const week = Math.ceil(((minutes / 60)/24)/7);
    if(week === 0)
    return 105;
  
   return week*105;
  }
  const GetPrice = (duration_minutes) =>{
    let costs = [4];
    costs[0] = calculateCostInMinutes(duration_minutes)
    costs[1] =  calculateCostInHour(duration_minutes);
    costs[2] = calculateCostInDay(duration_minutes);
    costs[3] = calculateCostInWeek(duration_minutes);
  
  return Math.min(...costs)
  }

console.log(GetPrice(2880));