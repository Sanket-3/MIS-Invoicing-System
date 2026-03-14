import React,{useEffect,useState} from "react";
import {getInvoices,deleteInvoice} from "../services/invoiceService";

const Invoices = () =>{

const [invoices,setInvoices] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{
fetchInvoices();
},[]);

const fetchInvoices = async ()=>{
const res = await getInvoices();
setInvoices(res.data);
};

const handleDelete = async(id)=>{
if(window.confirm("Delete invoice?")){
await deleteInvoice(id);
fetchInvoices();
}
};

const filtered = invoices.filter(i =>
i.invoiceNo?.toString().includes(search) ||
i.chain?.companyName?.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="groups-page">

<h2>Manage Invoices</h2>

<input
placeholder="Search invoice number or company"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<table>

<thead>
<tr>
<th>Invoice No</th>
<th>Estimate</th>
<th>Company</th>
<th>Service</th>
<th>Qty</th>
<th>Total</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{filtered.map(i=>(
<tr key={i.id}>

<td>{i.invoiceNo}</td>
<td>{i.estimate?.id}</td>
<td>{i.chain?.companyName}</td>
<td>{i.serviceDetails}</td>
<td>{i.qty}</td>
<td>{i.amountPayable}</td>

<td>

<button onClick={()=>handleDelete(i.id)}>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

);

};

export default Invoices;