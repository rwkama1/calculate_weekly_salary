# Calculate the weekly salary of a worker

Calculate the weekly salary of a worker

## Description

Determine the weekly salary of a worker based on the hours worked and the hourly payment, considering that after 40 hours each hour is considered as surplus and double is paid.

## Solution

```Javascript

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

```

## Usage

```Javascript

let Employee=require("./employee").Employee;

let employee=new Employee(7.0,41);

let calc=employee.calculate_weekly_salary();
console.log("Hourly pay is USD "+employee.hourly_pay);
console.log("                                                    ");
console.log("Hours worked per week is :"+employee.hours_worked_per_week);
console.log("                                                    ");
console.log("Your weekly salary for "+ calc.hours+" hours worked is USD "+calc.total_salary);

```