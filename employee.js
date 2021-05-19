class Employee
{
    constructor(phourly_pay,phours_worked_per_week)
    {
        this.hourly_pay=phourly_pay;
        this.hours_worked_per_week=phours_worked_per_week;
    }
    calculate_weekly_salary=()=>
    {
    let hours=this.hours_worked_per_week;
     let extra,salary,total_salary;
      extra=0;
      salary=0;
      total_salary=0;
      let extra_salary=0;
        if(hours>40)
        {
            extra=hours-40;
            salary=this.hourly_pay*40;
            extra_salary=(extra*this.hourly_pay)*2;
            total_salary=salary+extra_salary;
        }
        else{
            total_salary=this.hourly_pay*hours;
        }
        return {hours,total_salary}
    }
}
module.exports={Employee}