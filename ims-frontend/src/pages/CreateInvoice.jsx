import React,{useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import {createInvoice} from "../services/invoiceService";

const CreateInvoice = () =>{

const {id} = useParams();
const navigate = useNavigate();

const [estimate,setEstimate] = useState(null);
const [emailId,setEmailId] = useState("");
const [amountPaid,setAmountPaid] = useState("");

useEffect(()=>{
fetchEstimate();
},[]);

const fetchEstimate = async()=>{
const res = await axios.get("http://localhost:8080/api/estimates");
const est = res.data.find(e=>e.id === parseInt(id));
setEstimate(est);
};

const handleGenerate = async()=>{

const invoice = {

estimate:{id:estimate.id},
chain:{id:estimate.chain.id},
serviceDetails:estimate.service,
qty:estimate.qty,
costPerQty:estimate.costPerUnit,
amountPayable:estimate.totalCost,
amountPaid,
balance:estimate.totalCost - amountPaid,
dateOfService:estimate.deliveryDate,
deliveryDetails:estimate.deliveryDetails,
emailId

};

await createInvoice(invoice);

navigate("/dashboard/invoices");

};

if(!estimate) return <p>Loading...</p>;

return(

<div className="groups-page">

<h2>Create Invoice</h2>

<input value={estimate.service} disabled />

<input value={estimate.qty} disabled />

<input value={estimate.costPerUnit} disabled />

<input value={estimate.totalCost} disabled />

<input
placeholder="Amount Paid"
value={amountPaid}
onChange={(e)=>setAmountPaid(e.target.value)}
/>

<input
placeholder="Email"
value={emailId}
onChange={(e)=>setEmailId(e.target.value)}
/>

<button onClick={handleGenerate}>
Generate Invoice
</button>

</div>

);

};

export default CreateInvoice;