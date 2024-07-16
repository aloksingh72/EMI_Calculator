
import './App.css';
import { useState } from 'react';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [emi, setEmi] = useState(null);

const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayments, setTotalPayments] = useState(null);

  const calculateEMI = () => {
    //isse monthly interest rate mil jayega
    const rate = interestRate / 12 / 100
    // total no of months required to pay  
    const noOfMonths = duration * 12;

    const emiValue = (principal * rate * Math.pow(1 + rate, noOfMonths)) / (Math.pow(1 + rate, noOfMonths) - 1);
    const totalPaymentValue = emiValue * noOfMonths;
    const totalInterestValue = totalPaymentValue - principal;
    setEmi(emiValue.toFixed(2));
    setTotalPayments(totalPaymentValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
   
    // to fixed is used to limit the vlaue upto 2 decimal places
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedEmi = calculateEMI(Number(principal), Number(interestRate), Number(duration));
    setEmi(calculatedEmi);
    // const totalPayment =payments(Number(emi), Number(duration))
    // setTotalPayments(totalPayment)
  };



  return (
    <div className='app w-full  ' id ="background">
      <h1 >EMI Calculator</h1>
      <div className="flex flex-row w-full gap-4 mt-10 ">
        {/* left side element  */}
        <div className=" border-orange-600 border-[5px] p-6 w-[50%] flex items-center flex-col justify-center ">

          <br></br>

          <form onSubmit={handleSubmit}>


            <div>
              <label >Loan Amount</label>
              <input


                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                required
                placeholder='1000000'
                className='outline ml-6' />
            </div>
            <br />



            <div>
              <label >Interest rate</label>
              <input
               type="number"
               onChange={(e) => setInterestRate(e.target.value)}
                value={interestRate}
                placeholder='10.00'
                className='outline ml-6' />
            </div>
            <br />
            <div>
              <label >Loan term</label>

              <input type="text"
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                placeholder='10'
                className='outline ml-6' />



            </div>

            <br />
            <label >EMI Date</label>

            <input type="date"
              name='firstName'
              id='firstName'
              placeholder='10'
              className='outline ml-6' />
          </form>
          <button onClick={calculateEMI} className=" border-[6px] rounded-md mt-4">Calculate</button>
        </div>


        {/* right side portion */}
        <div className="border-[5px] flex flex-col   border-orange-950 w-[50%]">
          <h1 className="bg-orange-500">Repayment Details</h1>
          <br />
          {/* loan amount wala section */}
          <div className="bg-blue-300">
            <p> Loan Amount = <span>{principal}</span></p>
          </div>
          <br />
          {/* emi section  */}
          <div className="bg-slate-300">
            EMI = <span>{emi}</span>
          </div>
          <br />

          {/* Total interest  section */}
          <div className="bg-blue-300">
            Total interest =<span>{totalInterest}</span>

          </div>
          <br />
          {/* Total payments secction  */}
          <div className="bg-slate-300">
            Total Payments = <span>{totalPayments}</span>
          </div>
          <br />
          {/* Periods section  */}
          <div className="bg-blue-300">
            <p>Periods =<span>{duration*12 } </span>months</p>


          </div>

          <div>

          </div>



        </div>
      </div>
    </div>
  );
}

export default EmiCalculator;
