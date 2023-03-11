import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
// import ReactPDF from '@react-pdf/renderer';
import { pdf, Document, Page, Text, View  } from "@react-pdf/renderer";
import EmployeeList from './EmployeeList'
import "./salary.css";

const SalaryForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [workingDay, setWorkingDay] = useState("");
  const [weeklyOff, setWeeklyOff] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [dayInMonth, setDayInMonth] = useState("");
  const [paybalDay, setPaybalDay] = useState("");
  const [basicPay, setBasicPay] = useState("");
  const [growseSalary, setGrowseSalary] = useState("");
  const [netSalary, setNetSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [DA, setDA] = useState("");
  const [PF, setPF] = useState("");
  const [houseRentAllowance, setHouseRentAllowance] = useState("");
  const [ets, setEts] = useState("");
  const [tdf, setTdf] = useState("");

  const handleChange = () => {
    let Data = (+basicPay * (12 / 100)).toFixed(2);
    let grossSalary =
      (+basicPay + +DA + +bonus + +houseRentAllowance + +ets + +tdf ).toFixed(2);
    let netSalary = +grossSalary - (+PF)  
    setDA(Data);
    setGrowseSalary(grossSalary);
    setNetSalary(netSalary)
  };

  useEffect(() => {
    handleChange();
  }, [basicPay, DA, bonus, ets, tdf, houseRentAllowance,PF]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here

    const Doc = (
      <Document>
        <Page
          size="A4"
          style={{ flexDirection: "row", backgroundColor: "#E4E4E4" }}
        >
          <View style={{ margin: 10, padding: 10, flexGrow: 1 , display:"flex" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Salary Slip
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Personal Details
            </Text>

            <View style={{ marginBottom:"20px",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
           
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold",textAlign:"left" }}
              >
                Employee Name:- 
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold",textAlign:"right" }}>{name}</Text>
            </View>
             

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold",textAlign:"left" }}
              >
               Number :- 
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold",textAlign:"left" }}>{number}</Text>
            </View>
            
          

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold",textAlign:"left" }}
              >
                Address :- 
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold",textAlign:"left" }}>{address}</Text>
            </View>
              
          </View>
              <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Employees Monthly Details
            </Text>
             

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
               Day of Joining :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>{dateOfJoining}</Text>
            </View>
           
             

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}
              >
                Day in Month :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>{dayInMonth}</Text>
            </View>
             

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
                Working Day :- 
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>{workingDay}</Text>
            </View>
            

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
                Weekly Off :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}>{weeklyOff}</Text>
            </View>
              

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
                Attendance :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}>{paybalDay}</Text>
            </View>
              
           
              <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Employee Salary
            </Text>
          <View style={{marginBottom:"20px",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}} >
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}
              >
                Basic Salary:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>   {basicPay} Rs. </Text>
            </View>
             

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}
              >
                DA :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}>{DA} Rs. </Text>
            </View>
              
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}
              >
               Bonus:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>{bonus} Rs.</Text>
            </View>
             
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
               ETS :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>{ets} Rs.  </Text>
            </View>
           
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left"}}
              >
                TDF :- 
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}>{tdf} Rs. </Text>
            </View>
             
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
                HRA :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"right" }}>{houseRentAllowance} Rs. </Text>
            </View>
             
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold" ,textAlign:"left" }}
              >
               Gross Salary:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"right" }}>{growseSalary} Rs. </Text>
            </View>
             

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}
              >
               PF :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"right" }}>{PF} Rs. </Text>
            </View>

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",margin:"10px 0px"}}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold",textAlign:"left" }}
              >
               Net Salary :-
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold",textAlign:"right" }}>{netSalary} Rs. </Text>
            </View>
           
              </View> 
          </View>
        </Page>
      </Document>
     
    );

    // convert the PDF document to a blob
    // const pdfBlob = await ReactPDF.renderToBlob(Doc);
    const pdfBlob = await pdf(Doc).toBlob();
    // const pdfBlob =   await ReactPDF.render(<Doc />);
    // save the blob as a file
    saveAs(pdfBlob, "salary.pdf");
  };

  return (
    <>
    <EmployeeList/>
      <form onSubmit={handleSubmit}>
        <section>
          <h5>Personal Details</h5>
        </section>
        <div>
          <label>
            Name :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Number :
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Address :
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Image :
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>
        </div>
        <section>
          <h5>Employee Monthly Details</h5>
        </section>
        <div>
        <label>
            Date of Joining :
            <input
              type="date"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              required
            />
          </label>
          <label>
            Day in Month :
            <input
              type="number"
              value={dayInMonth}
              onChange={(e) => setDayInMonth(e.target.value)}
              required
            />
          </label>
          <label>
            Working Day :
            <input
              type="number"
              value={workingDay}
              onChange={(e) => setWorkingDay(e.target.value)}
              required
            />
          </label>
          <label>
            Weekly Off :
            <input
              type="text"
              value={weeklyOff}
              onChange={(e) => setWeeklyOff(e.target.value)}
              required
            />
          </label>
         
        
          <label>
            Attendance :
            <input
              type="number"
              value={paybalDay}
              onChange={(e) => setPaybalDay(e.target.value)}
              required
            />
          </label>
        </div>  
        <section>
          <h5>Employee Salary Details</h5>
        </section>
        <div>
          {/* <label>
        Attendance:
        <input type="number" value={attendance} onChange={(e) => setAttendance(e.target.value)} required />
      </label> */}

          <label>
            Basic Pay :
            <input
              type="number"
              value={basicPay}
              onChange={(e) => setBasicPay(e.target.value)}
              required
            />
          </label>
          <label>
            Bonus :
            <input
              type="number"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
              required
            />
          </label>
          <label>
            DA :
            <input type="number" value={DA} onChange={handleChange} required />
          </label>
         
         
          {/* <label>
        Basic 12%:
        <input type="number" value={basicPercent} onChange={(e) => setBasicPercent(e.target.value)} required />
        </label> */}
          <label>
            HRA :
            <input
              type="number"
              value={houseRentAllowance}
              onChange={(e) => setHouseRentAllowance(e.target.value)}
              required
            />
          </label>
          <label>
            ETS :
            <input
              type="number"
              value={ets}
              onChange={(e) => setEts(e.target.value)}
              required
            />
          </label>
          <label>
            TDF:
            <input
              type="number"
              value={tdf}
              onChange={(e) => setTdf(e.target.value)}
              required
            />
          </label>
         
          <label>
            Gross Salary :
            <input
              type="number"
              value={growseSalary}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            PF:
            <input
              type="number"
              value={PF}
              onChange={(e) => setPF(e.target.value)}
              required
            />
          </label>
          <label>
            Net Salary :
            <input
              type="number"
              value={netSalary}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>

      <br />

     
    </>
  );
};

export default SalaryForm;
