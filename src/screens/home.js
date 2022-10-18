import React, { useState, useRef } from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import '../styles/billing/billing.css'
import { Button } from 'react-bootstrap';

function Home() {

    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [CardNumber, setCardNumber] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
    });


    const generateVoucher = () => {
        console.log("dasdas");
        setOpenModal(true);
    }


    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };


    return (
        <div className="app">
            <div>


                Name: <input onChange={e => { setName(e.target.value); }} />
                id: <input onChange={e => { setId(e.target.value); }} />
                CardNumber: <input onChange={e => { setCardNumber(e.target.value); }} />
                <Button onClick={generateVoucher}>Generate Voucher</Button>


                {openModal ?
                    <div className='modaal'>
                        <PDFExport ref={pdfExportComponent}>
                            <div className={`pdf-page ${layoutSelection.value}`}>

                                <p>Name: {name}</p>
                                <p>Id: {id}</p>
                                <p>Card Number: {CardNumber}</p>
                            </div>
                        </PDFExport>
                        <button onClick={handleExportWithComponent}>Download</button>
                    </div>
                    :
                    null
                }

            </div>
        </div>
    );
}

export default Home;
