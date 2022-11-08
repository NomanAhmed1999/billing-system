import React, { useState, useEffect } from "react";
import '../styles/transaction-history/transaction-history.css';





const TransactionHistory = () => {
    const userId = localStorage.getItem("user_id");
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState('');
    const [historyData, setHistoryData] = useState([]);
    const apiVariable = "http://localhost:3000/api/v1";

    useEffect(() => {
        setLoading(true);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch(`${apiVariable}/transaction/all-transactions/${userId}`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                if (data.error) {
                    setLoading(false);
                    setErr(data.error)
                    setTimeout(() => {
                        setErr('')
                    }, 3000);
                } else {
                    setLoading(false);
                    setHistoryData(data.data);
                    console.log("setHistoryData", historyData);
                }
            });
    }, [])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Card Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historyData.map((item, i) => {
                            return (

                                <tr key={item + i}>
                                    <td data-column="First Name">{i + 1}</td>
                                    <td data-column="Last Name">{item.name}</td>
                                    <td data-column="Job Title">{item.cardNo}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}


export default TransactionHistory;