import React, { useState } from 'react';
import { saveAs } from 'file-saver';
// import ReactPDF from '@react-pdf/renderer';
import { pdf , Document, Page, Text, View } from '@react-pdf/renderer';



const SalaryForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [workingDay, setWorkingDay] = useState('');
  const [weeklyOff, setWeeklyOff] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [dayInMonth, setDayInMonth] = useState('');
  const [paybalDay, setPaybalDay] = useState('');
  const [attendance, setAttendance] = useState('');
  const [basicPay, setBasicPay] = useState('');
  const [growseSalary, setGrowseSalary] = useState('');
  const [netSalary, setNetSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [DA, setDA] = useState('');
  // const [basicPercent, setBasicPercent] = useState('');
  const [houseRentAllowance, setHouseRentAllowance] = useState('');
  const [ets, setEts] = useState('');
  const [tdf, setTdf] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission here
    const Doc = (
        <Document>
          <Page>
            <View style={{textAlign:"center"}}>
              <Text>Salary Recept</Text>
              <Text >Name: {name}</Text>
              <Text>Number: {number}</Text>
              <Text>Address: {address}</Text>
              <Text>Working Day: {workingDay}</Text>
              <Text>Weekly Off: {weeklyOff}</Text>
              <Text>Date of Joining: {dateOfJoining}</Text>
              <Text>Day in Month: {dayInMonth}</Text>
              <Text>Paybal Day: {paybalDay}</Text>
              <Text>Attendance: {attendance}</Text>
              <Text>Basic Pay: {basicPay}</Text>
              {/* <Text>Gross Salary: {grossSalary}</Text> */}
              <Text>Net Salary: {netSalary}</Text>
              <Text>Bonus: {bonus}</Text>
              <Text>DA: {DA}</Text>
              {/* <Text>Basic 12%: {basicPercent}</Text> */}
              <Text>House Rent Allowance: {houseRentAllowance}</Text>
              <Text>ETS: {ets}</Text>
              <Text>TDF: {tdf}</Text>
            </View>
          </Page>
        </Document>
      );
  
      // convert the PDF document to a blob
      // const pdfBlob = await ReactPDF.renderToBlob(Doc);
       const pdfBlob =  await pdf(Doc).toBlob()
      // const pdfBlob =   await ReactPDF.render(<Doc />);
      // save the blob as a file
      saveAs(pdfBlob, 'salary.pdf');
    
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Number:
        <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
      </label>
      <label>
        Working Day:
        <input type="number" value={workingDay} onChange={(e) => setWorkingDay(e.target.value)} required />
      </label>
      <label>
        Weekly Off:
        <input type="text" value={weeklyOff} onChange={(e) => setWeeklyOff(e.target.value)} required />
      </label>
      <label>
        Date of Joining:
        <input type="date" value={dateOfJoining} onChange={(e) => setDateOfJoining(e.target.value)} required />
      </label>
      <label>
        Day in Month:
        <input type="number" value={dayInMonth} onChange={(e) => setDayInMonth(e.target.value)} required />
      </label>
      <label>
        Paybal Day:
        <input type="number" value={paybalDay} onChange={(e) => setPaybalDay(e.target.value)} required />
      </label>
      <label>
        Attendance:
        <input type="number" value={attendance} onChange={(e) => setAttendance(e.target.value)} required />
      </label>
      <label>
        Basic Pay:
        <input type="number" value={basicPay} onChange={(e) => setBasicPay(e.target.value)} required />
      </label>
      <label>
        Growse Salary:
        <input type="number" value={growseSalary} onChange={(e) => setGrowseSalary(e.target.value)} required />
        </label>
        <label>
        Net Salary:
        <input type="number" value={netSalary} onChange={(e) => setNetSalary(e.target.value)} required />
        </label>
        <label>
        Bonus:
        <input type="number" value={bonus} onChange={(e) => setBonus(e.target.value)} required />
        </label>
        <label>
        DA:
        <input type="number" value={(+basicPay)*(12/100)} onChange={(e) => setDA(e.target.value)} required />
        </label>
        {/* <label>
        Basic 12%:
        <input type="number" value={basicPercent} onChange={(e) => setBasicPercent(e.target.value)} required />
        </label> */}
        <label>
        House Rent Allowance:
        <input type="number" value={houseRentAllowance} onChange={(e) => setHouseRentAllowance(e.target.value)} required />
        </label>
        <label>
        ETS:
        <input type="number" value={ets} onChange={(e) => setEts(e.target.value)} required />
        </label>
        <label>
        TDF:
        <input type="number" value={tdf} onChange={(e) => setTdf(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
        </form>
         <Document>
           <Page>
             <View>
              <Text>Name: {name}</Text>
               <Text>Number: {number}</Text>
               <Text>Address: {address}</Text>
              <Text>Working Day: {workingDay}</Text>
              <Text>Weekly Off: {weeklyOff}</Text>
              <Text>Date of Joining: {dateOfJoining}</Text>
              <Text>Day in Month: {dayInMonth}</Text>
               <Text>Paybal Day: {paybalDay}</Text>
               <Text>Attendance: {attendance}</Text>
              <Text>Basic Pay: {basicPay}</Text>
               <Text>Gross Salary: {growseSalary}</Text> 
              <Text>Net Salary: {netSalary}</Text>
              <Text>Bonus: {bonus}</Text>
              <Text>DA: {DA}</Text>
              {/* <Text>Basic 12%: {basicPercent}</Text> */}
               <Text>House Rent Allowance: {houseRentAllowance}</Text>
              <Text>ETS: {ets}</Text>
               <Text>TDF: {tdf}</Text>
            </View>
           </Page>
         </Document> 
        
        </>
        );
    };

export default SalaryForm;
