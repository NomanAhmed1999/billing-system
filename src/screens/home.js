import React, { useState, useRef } from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import '../styles/billing/billing.css'
import { Button } from 'react-bootstrap';

function Home() {

    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [email, setEmail] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [payment, setPaymen] = useState('');
    const [pname, setPName] = useState('');
    const [pId, setPId] = useState(0);
    const [pEmail, setPEmail] = useState('');
    const [pAccountNumber, setPAccountNumber] = useState('');
    const [notShow, setNotShow] = useState(true);

    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
    });


    const generateVoucher = () => {
        console.log("dasdas");
        setOpenModal(true);
        handleForDB();
    }

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };

    const pdfForDB = useRef(null);

    const handleForDB = event => {
        setTimeout(() => {
            pdfForDB.current.save();
            let obj = [{
                user1_name: name,
                user1_email: email,
                user1_card_number: CardNumber,
                user1_pay: payment,
                user2_name: pname,
                user2_email: pEmail,
                user2_account_number: pAccountNumber
            }]
            console.log("ForDB", obj);
            const data = localStorage.setItem("data", JSON.stringify(obj))
            setNotShow(false);
        }, 100);
    };



    return (
        <div className="app">
            <div className='container'>
                <div className='row mt-5'>
                    Your Name: <input class="form-control mb-2" onChange={e => { setName(e.target.value); }} />
                    Your Email: <input class="form-control mb-2" onChange={e => { setEmail(e.target.value); }} />
                    Your Card Number: <input class="form-control mb-2" onChange={e => { setCardNumber(e.target.value); }} />
                    Pay: <input class="form-control mb-2" onChange={e => { setPaymen(e.target.value); }} />
                    Partner Name: <input class="form-control mb-2" onChange={e => { setPName(e.target.value); }} />
                    Partner Email: <input class="form-control mb-2" onChange={e => { setPEmail(e.target.value); }} />
                    Partner Account Number: <input class="form-control mb-2" onChange={e => { setPAccountNumber(e.target.value); }} />
                    <Button onClick={generateVoucher}>Submit</Button>


                    {openModal ?
                        <div>
                            <div className='modaal-container'>
                                <div className='modaal'>
                                    <PDFExport className="pdf-container" ref={pdfExportComponent}>
                                        <div className={`pdf-page ${layoutSelection.value}`}>
                                            <h2>Your Transition Slip</h2>
                                            <div className='mt-5'>
                                                <p>Name: {name}</p>
                                                <p>email: {email}</p>
                                                <p>Card Number: {CardNumber}</p>
                                                <p>Your Payment: {payment}</p>
                                                <p>Partner Name: {pname}</p>
                                            </div>
                                        </div>
                                    </PDFExport>


                                    <Button onClick={handleExportWithComponent}>Download</Button>
                                </div>
                            </div>
                            {notShow ?

                                < PDFExport className="pdf-container" ref={pdfForDB}>
                                    <div className={`pdf-page ${layoutSelection.value}`}>
                                        <h2>{`${name} Pay To ${pname}`}</h2>
                                        <div className='mt-5'>
                                            <p>User1 Name: {name}</p>
                                            <p>User1 email: {email}</p>
                                            <p>User1 Card Number: {CardNumber}</p>
                                            <p>User1 Pay: {payment}</p>
                                            <p>User2 Name: {pname}</p>
                                            <p>User2 email: {pEmail}</p>
                                            <p>User2 Card Number: {pAccountNumber}</p>
                                            <p>User2 Received: {payment}</p>
                                        </div>
                                    </div>
                                </PDFExport>
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div >
    );
}

export default Home;
