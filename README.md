# Week 1 – Code Challenge (JavaScript)

*Date:* 2025-09-10  
*Author:* Abdirahman warsame

*Description:*  
A set of three small JavaScript programs run from the command line with Node.js:

1. *Student Grade Generator* (gen.js)  
2. *Speed Detector* (det.js)  
3. *Net Salary Calculator* (calc.js)  

Each program reads input values, applies the required rules, and prints clear results to the console.

---

## 1) Student Grade Generator (gen.js)

*Goal*  
Prompt for a student’s mark and output the correct grade.

*Rules*  
- A: > 79  
- B: 60–79  
- C: 49–59  
- D: 40–49  
- E: < 40  
- If mark is not between 0 and 100, print an error message.

*Input*  
- mark (number, 0–100)

*Output*  
- One of: A, B, C, D, E  
- Or: Error: mark must be between 0 and 100


## 2) Speed Detector (det.js)

*Goal*  
Read a car’s speed and print either Ok, Points: X, or License suspended.

*Rules*  
- Speed limit = *70 km/h*  
- If speed <= 70 → print Ok  
- Otherwise, award *1 point for every 5 km/h* above the limit  
- If *points > 12* → print License suspended

*Input*  
- speed (number)

*Output*  
- Ok | Points: X | License suspended


## 3) Net Salary Calculator (calc.js)

*Goal*  
Compute an employee’s *Net Salary* from basicSalary and benefits.

*Definitions*
- *Gross Salary* = basicSalary + benefits  
- *NSSF*: employee contribution (Tier I & Tier II as per official limits/rates)  
- *Taxable Pay* = Gross Salary – NSSF  
- *PAYE: progressive tax using the current KRA monthly bands and **Personal Relief*  
- *NHIF: fixed deduction based on **Gross Salary* bracket  
- (Optional if required by your brief) *Housing levy*: employee rate applied to Gross  

> *Data sources*  
> - KRA PAYE rates and personal relief  
> - NHIF deduction table  
> - NSSF Tier I & II limits and rates  

*Inputs*  
- basicSalary (number)  
- benefits (number)

*Outputs*  
A breakdown object (and printed lines) including:
- GrossSalary
- NSSF
- TaxablePay
- PAYE
- NHIF
- NetSalary

## installation
you use git clone to install the documents in the github

## installation requirements
git

##### Installation instruction
Git clone https://github.com/abdirahmanwsh-cmd/wk1-code-challenge.git

## technologies used
javascript
github/git

## contact
for more enquiries or support, please reach out at 
Abdirahman.wsh@gmail.com


