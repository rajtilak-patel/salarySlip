import { saveAs } from 'file-saver';
import ReactPDF from '@react-pdf/renderer';
import { Document, Page, Text, View } from '@react-pdf/renderer';

const SalaryForm = () => {
  // component state
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [workingDay, setWorkingDay] = useState('');
  const [weeklyOff, setWeeklyOff] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [dayInMonth, setDayInMonth] = useState('');
  const [paybalDay, setPaybalDay] = useState('');
  const [attendance, setAttendance] = useState('');
  const [basicPay, setBasicPay] = useState('');
  const [grossSalary, setGrossSalary] = useState('');
  const [netSalary, setNetSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [DA, setDA] = useState('');
  const [basicPercent, setBasicPercent] = useState('');
  const [houseRentAllowance, setHouseRentAllowance] = useState('');
  const [ets, setEts] = useState('');
  const [tdf, setTdf] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create a new PDF document
    const doc = (
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
            <Text>Gross Salary: {grossSalary}</Text>
            <Text>Net Salary: {netSalary}</Text>
            <Text>Bonus: {bonus}</Text>
            <Text>DA: {DA}</Text>
            <Text>Basic 12%: {basicPercent}</Text>
            <Text>House Rent Allowance: {houseRentAllowance}</Text>
            <Text>ETS: {ets}</Text>
            <Text>TDF: {tdf}</Text>
          </View>
        </Page>
      </Document>
    );

    // convert the PDF document to a blob
    const pdfBlob = await ReactPDF.renderToBlob(doc);

    // save the blob as a file
    saveAs(pdfBlob, 'salary.pdf');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Download PDF</button>
    </form>
  );
};

export default SalaryForm;
